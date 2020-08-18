
<template>
  <div id="app"
    :class="{overflowHidden : isPop || !isShownMain}"
    v-touch:start.passive="touchStart"
    v-touch:end.passive="touchEventReset"
    v-touch:moving.passive="touchMove"
    @mouseleave.passive="touchEventReset"
  >
    <!-- 옵션 켰을 때, 검은 뒷배경 -->
    <div class="optionsBg"
      :style="{display}" 
      v-if="optionPopup" 
      @click="optionPopup = false"
      v-touchstop
    ></div>
    <!-- 스낵바 떴을 때, 검은 뒷배경 -->
    <div class="alertBg"
      v-if="alertInform" 
      @click="alertInform = null"
      v-touchstop
    ></div>
    <!-- 진행중 -->
    <div class="gifIng" 
      v-if="gifIng===true"
      v-touchstop
    >
      <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
    <!-- 스낵바 컴포넌트 -->
    <!-- alertobj = 스낵바 내용과, 타입을 담고있는 속성 -->
    <transition name="alert">
      <alert-component
        :alertobj="alertInform" 
         v-if="alertInform"
         v-touchstop
      >
    </alert-component>
    </transition>
    <!-- 옵션 설정 팝업 클릭 시, 노출되는 컴포넌트 -->
    <!-- fileinfo = 등록된 최대 두개의 파일 전달 -->
    <transition name="alert">
      <OptionsComponent
        class="optionPopup"
        v-if="optionPopup"

        :style="{display}"
        :filetype="compNav"
        :fileinfo="fileInfo"
        @offoptionpop="optionPopup=false"
        @callalert="onAlert"
        @setgiffiles="getGifFiles"
        @gifing="gifIng=!gifIng"
        @hideoption="hideOption"
        v-touchstop
      >
      </OptionsComponent>
    </transition>
    <div class="mainHeader"
      v-touchstop
    >
      <div class="localeBtnWrap">
        <button @click.prevent="changeLocale">
          {{$i18n.locale === 'en' ? '한국어' : 'English'}}
        </button>
      </div>
      <div class="title">Two Fast Gif</div>
      <div class="subtitle">{{$t('app.subtitle')}}</div>
    </div>
    <div class="contWrap"
      :style="{transform : `translate(${position}%)`}"
      :class="{transition : isNowMoving}"
    >
      <div class="left">
        <ScrollPage>
        </ScrollPage>
      </div>
      <div class="right">
        <div class="tabBtnWrap">
          <!-- compNav 말그대로 컴포넌트 변경 네비게이션 -->
          <span class="tabBtn" :class="{target : compNav==='AddFileComponent'}" @click="navChange('AddFileComponent')">{{$t('app.tab1')}}</span>
          <span class="tabBtn" :class="{target : compNav==='AddUrlComponent'}" @click="navChange('AddUrlComponent')">URL</span>
        </div>
        <div class="rightContent">
          <!-- 위의 네비게이션 버튼을 통해 출력하는 컴포넌트 -->
          <!-- :is="compNav" data의 compNav를 통해 감지 -->
          <!-- callalert = 스낵바 메소드 전달 -->
          <!-- updatevideo = url이나 파일 부모data에 등록하는 메소드 전달 -->
          <component 
            :is="compNav"

            @callalert="onAlert"
            @updatevideo="updateVideoInfo"
            v-touchstop
          ></component>
          <!-- 등록된 파일이 있을 때만 노출되는 옵션설정 돔 -->
          <div 
            class="afterAddedWrap" 
            
            v-if="fileInfo.length!==0"
          >
            <div class="addedFileList">{{$t('app.addedFile')}}</div>
            <ul>
              <li class="addedfile" v-for="(data, index) of fileInfo" :key = "index">
                <span class="limitLength" v-if="typeof data === 'object'">
                  {{data.name}}
                </span>
                <span class="limitLength" v-if="typeof data === 'string'">
                  {{data}}
                </span>
                <span class="cancelFile" @click="remove(index)">✖</span>
              </li>
            </ul>
            <!-- 옵션 설정 팝업 노출 버튼 -->
            <div 
              class="setOptionsBtn"

              @click="optionPopup = true"
            >
              <span>
                {{$t('app.setOption')}}
              </span>
            </div>
          </div>
          <!-- 완성된 gif파일들 있으면 노출 -->
          <div class="createdGifs" v-if="gifFiles.length!==0">
            <div v-for="gif of gifFiles" :key="gif" class="gifCont">
              <div class="gifImgWrap">
                <img :src="gif" :alt="gif">
              </div>
              <a :href="gif" download>{{$t('app.downLoad')}}</a>
            </div>
            <div class="gifNotes">
              * {{$t('app.beforeAgainAlert')}}!
            </div>
          </div>
          <button class="howToUseBtn" @click="showHowToUse=!showHowToUse">{{$t('app.miniHowToUse')}}</button>
          <HowToUseComponent v-show="showHowToUse">
          </HowToUseComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddFileComponent from './components/addfile.vue';
import AddUrlComponent from './components/addurl.vue';
import AlertComponent from './components/alert.vue';
import OptionsComponent from './components/setOptions.vue';
import HowToUseComponent from './components/howtouse.vue';
import ScrollPage from './components/scrollPage.vue';

export default {
  name: 'App',
  metaInfo(){
    return {
      title : this.$t('meta.title'),
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      meta : [
        {name : 'title', content : this.$t('meta.title')},
        {name : 'description', content : this.$t('meta.description')},
        {property : 'og:title', content : this.$t('meta.title')},
        {property : 'og:description', content : this.$t('meta.description')}
      ]
    }
  },
  components: {
    AddFileComponent, // 파일등록
    AddUrlComponent, // url등록
    AlertComponent, // 스낵바
    OptionsComponent, // 옵션설정
    HowToUseComponent, // 사용설명
    ScrollPage // 스크롤시 페이지
  },
  computed : {
    isPop(){ // 하나의 팝업이라도 켜졌는지 확인
      let isPop = false;
      [this.alertInform, this.optionPopup, this.gifIng].forEach(res => {
        if(res) isPop = true;
        return
      })
      return isPop;
    },
  },
  data(){
    return {
      fileInfo : [], // 등록된 file
      compNav : 'AddFileComponent', // 네비게이션바 클릭시 노출Comp 다르게
      alertInform : null, // 스낵바 정보보내는 객체
      optionPopup : false, // 옵션팝업
      showHowToUse : true, // 간단사용설명서 보기
      gifIng : false, // gif진행중인 이미지
      gifFiles : [], // gif담긴배열
      startPoint : null, // 터치시작
      gap : null, // 터치시작, 이동 차이
      isNowMoving : false, // 현재 터치이동값 유효로인해 스크롤로 움직이고있냐
      isShownMain : true, // 현재 메인이 보이냐 안보이냐
      position : 0, // contWrap 이동값
      display : 'block' // 옵션 스타일
    }
  },
  created(){
    let locale = navigator.language || navigator.userLanguage;
    locale = locale.substring(0, 2);
    // 한국어가 아닌 경우 무조건 한국어로
    // 빌드할 때에는 이유를 모르겠지만 locale이 en으로 바뀜. 따라서 빌드를 한국어로 원하면 무조건 ko로 되도록해야함
    if (locale !== 'ko') locale = 'en';
    this.$i18n.locale = locale;
  },
  methods : {
    changeLocale(){
      if (this.$i18n.locale === 'en') this.$i18n.locale = 'ko'
      else this.$i18n.locale = 'en'
    },
    onAlert(value, type){ // 스낵바 전용 메소드(자식들도 emit으로 연결)
      this.alertInform = {type, value};
    },
    updateVideoInfo(value){ // 파일등록(자식들도 emit으로 연결)
      if(this.fileInfo.length >= 2){
        this.onAlert(null, 'overLength');
        return;
      }
      this.fileInfo.push(value);
    },
    remove(_i){ // 등록한 파일 제거
      this.fileInfo.splice(_i, 1);
    },
    navChange(_compName){ // 출력 comp 변경, 파일등록방식 변경 시, 파일 담는 배열 초기화.(동시에 같은 유형의 파일만 담도록)
      this.compNav = _compName;
      this.fileInfo = [];
    },
    getGifFiles(value){ // gif완성된걸 객체로 받아옴
      this.gifFiles = [];
      Object.values(value).forEach(gif => { // data gif배열에 담음
        this.gifFiles.push(gif);
      })
      this.optionPopup = false; // 옵션팝업 끄기
      this.display = 'block'; // 옵션팝업, bg 스타일 초기화
      this.alertInform = null // 스낵바 끄기
      this.fileInfo = []; // 등록한 파일 제거
      this.gifIng = false; // 변환중 끄기
    },
    // 변환요청시 gifing만 보이고 옵션팝업은 사라지게해달라는 요청
    // v-if 조건으로 생성되는 컴포넌트라 v-if로 끌 시, emit되는 이벤트들이 모두 사라져 이후 emit들은 진행되지 못함. 따라서 스타일로 숨기겠음
    hideOption(){
      this.display==='none' ?
        this.display = 'block'
      :
        this.display = 'none'
    },
    // vue는 vue-touch라는 npm을통해 터치나 마우스이벤트를 한번에 사용 가능하다.
    touchStart(e){ // 스크롤시작
      let clientX = null;
      if(e.type.includes('touch')){
        clientX = e.touches[0].clientX;
      }else{
        clientX = e.clientX;
      }
      this.startPoint = clientX; // 시작지점 선정
    },
    touchMove(e){ // 스크롤 방향 감지 함수
      let clientX = null; // 이동거리
      if(e.type.includes('touch')){
        clientX = e.touches[0].clientX;
      }else{
        clientX = e.clientX;
      }
      this.gap = this.startPoint-clientX; // 이동거리계산
      const deviceWidth = window.innerWidth; // 기기의 너비
      const senseRange = deviceWidth*0.3; // 기기너비의 50%넘어가면 슬라이드

      // 시작지점이 있으며, 슬라이딩중이 아닐경우만
      if(this.startPoint && !this.isNowMoving){
        // 이동범위50%일 경우, 슬라이딩
        if(this.gap >= senseRange || this.gap <= -senseRange){
          let type = null;
          if(this.gap >= senseRange){
            type = 'right';
          }else if(this.gap <= -senseRange){
            type = 'left';
          }
          this.moving(type)
          .then(() => {
            // 슬라이딩 이후, 시작지점및 슬라이딩여부 초기화
            this.startPoint = null;
            this.isNowMoving = false;          
          })
        }else{ // 이동범위50%내부가 아닐경우 자연스럽게움직임
          this.beforeMoving(deviceWidth);
        }
      }else{
        return;
      }
    },
    beforeMoving(_w){
      const max = 105;
      let gap = this.gap;
      if(gap < 0) gap = gap*-1;
      if(this.startPoint){
        const result = (gap/_w)*max; 
        if(this.gap < 0){
          // 왼쪽으로갈때
          if(this.isShownMain) this.position = result;
          return;
        }else{
          // 오른쪽으로갈때
          if(!this.isShownMain) this.position = max -result;
          return;
        }
      }
    },
    moving(type){
      return new Promise((res) => {
      this.isNowMoving = true;
      // 현재 우측이보이는지 좌측이보이는지에 따라 우측이보일경우 오른쪽슬라이딩 비활성화
        switch(type){
          case 'right' : {
            if(this.isShownMain===true) res();
            // 오른쪽거보여줘
            // 자유롭게 움직이다가 reset했을 때 올바른 자리 찾아가도록 여기서 isShownMain값 설정
            this.isShownMain = true;
            this.position = 0;
          }break;
          case 'left' : {
            if(this.isShownMain===false) res();
            // 왼쪽거보여줘
            this.isShownMain = false;
            this.position = 105;
          }break;
        }
        setTimeout(() => {
          res();
        }, 300)
      })
    },
    touchEventReset(){
      if(this.isShownMain){
        this.position = 0;
      }else{
        this.position = 105;
      }
      this.gap = null;
      this.isNowMoving = false;
      this.startPoint = null;      
    }
  },
  directives : {
    touchstop : { // 슬라이딩 이벤트 대부분 app에게서 이벤트전달받지않도록
      bind(el){
        const evt = ['touchstart', 'mousedown']
        evt.forEach(res => {
          el.addEventListener(res, (e) => {
            e.stopPropagation();
          },{passive : true})
        })
      }
    }
  }
}
</script>

<style>
  /* 눈누 상업적이용가능 무료폰트 감사합니다. */
  @font-face { 
    font-family: 'paybooc-Bold'; 
    font-display : swap; 
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/paybooc-Bold.woff') 
    format('woff'); 
    font-weight: normal; 
    font-style: normal;
  }
  html { font-size : 16px;}
  @media all and (min-width:768px) and (max-width:1024px) {
    html { font-size : 14px;}
  }
  @media screen and (max-width: 767px){
    html { font-size : 12px; }
  }
  * {
    margin : 0; padding : 0; list-style : none; text-decoration : none; box-sizing : border-box; outline : none; user-select : none; font-family : 'paybooc-Bold';
  }
  #app {
    overflow-x : hidden;
    background : #666;
    min-height : 100vh;
    padding : 2em 0 2em;
  }
  /* 팝업켜져서 검은 배경 생겼을 때 overflow hidden */
  .overflowHidden {
    height : 100vh;
    overflow-y : hidden;
  }
  /* 스낵바 관련 */
  .alertWrap {
    position : absolute;
    width : 100%;
    height : 100vh;
  }
  .alertBg {
    width: 100%;
    height: 100%;
    position: absolute;
    background : rgba(0,0,0,0.4);
    z-index : 9;
    top : 0;
  }
  .gifIng {
    width: 100%;
    height: 100%;
    position: absolute;
    background : rgba(0,0,0,0.4);
    z-index : 10;
    top : 0;
  }
  /* 스낵바 컴포넌트 애니메이션 */
  .alert-enter-active {
    animation : alert .5s;
  }
  @keyframes alert {
    0% {top : 28%; opacity : 0;}
    100% {top : 30%; opacity : 1;}
  }    
  /* 옵션관련 */
  .optionsBg {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index : 7;
    background : rgba(0,0,0,0.4);
    top : 0;
  }
  /* 헤더 */
  .mainHeader {
    width : 80%;
    margin : 0 auto;
  }
  .localeBtnWrap {
    text-align : right;
  }
  .localeBtnWrap button {
    border : 0;
    padding : 0.3em;
    font-weight : bold;
    border-radius : 0.3em;
    cursor : pointer;
    color : #333;
  }
  .mainHeader .title {
    font-size : 3em;
    margin-top : 1em;
    font-weight : bold;
    color : white;
  }
  .mainHeader .subtitle {
    font-size : 1.5em;
    margin-bottom : 1em;
    font-weight : bold;
    color : white;
  }
  /* 그 외 컨텐츠 */
  .contWrap {
    width : 80%;
    margin : 0 auto;
    position : relative;
  }
  .contWrap::before {
    content : '';
    position : absolute;
    z-index : 1;
    width : 2em;
    height : 2em;
    background : url('https://fileconvertstorage.s3.ap-northeast-2.amazonaws.com/static/images/arrow.png');
    background-size : cover;
    right : 100%;
    top : 4em;
    transform : translate(0%);
    animation: arrow;
    animation-iteration-count: infinite;
    animation-duration: 2s;
  }
  @keyframes arrow {
    0% {transform : translate(0);}
    5% {transform : translate(20%);}
    10% {transform : translate(0);}
    15% {transform : translate(20%);}
    20% {transform : translate(0%)}
    100% {transform : translate(0%);}
  }
  /* 컨텐츠 좌측 */
  .left {
    height : calc(100vh - 20em - 0.01px);
    width : 100%;
    border-radius : 0.3em;
    background : white;
    position : absolute;
    top : 2.4em;
    padding : 1em;
    transform : translate(-105%);
    overflow-x : hidden;
    overflow-y : scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  .left::-webkit-scrollbar {
    display : none;
  }
  /* 컨텐츠 우측 */
  .right {
    width : 100%;
  }
  .right .tabBtnWrap {
    margin-bottom : -1px;
    font-size : 1.1em;
  }
  .right .tabBtn {
    min-width : 60px;
    display : inline-block;
    background : #eaeaea;
    cursor : pointer;
    padding : 0.5em;
    color : #888;
  }
  .rightContent {
    padding : 2em;
    min-height : fit-content;
    max-height : calc(100vh - 20em - 0.01px);
    overflow-x : hidden;
    overflow-y : scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    background : white;
    border-radius : 0 0.3em 0.3em 0.3em;
  }
  .rightContent::-webkit-scrollbar {
    display : none;
  }
  .right .tabBtn:first-child {
    border-radius : 0.3em 0 0 0;
  }
  .right .tabBtn:last-child {
    border-radius : 0 0.3em 0 0;
  }
  .right .tabBtn:nth-child(1) {
    margin-left : 0;
  }
  .right .rightContent .howToUseBtn {
    border : none;
    margin-top : 1em;
    padding : 0.3em;
    font-size : 1em;
    color : white;
    background : #333;
    border-radius : 0.3em;
    cursor : pointer;
    transition : .2s;
  }
  .right .rightContent .howToUseBtn:hover {
    background : #444;
  }
  /* 등록된 파일 */
  .right .rightContent .afterAddedWrap {
    border-bottom : 1px solid #eaeaea;
    padding : 1em 0;
  }
  .right .rightContent .afterAddedWrap .addedFileList {
    padding-bottom : 0.5em;
    color : #333;
    font-weight : bold;
  }
  .right .rightContent .afterAddedWrap .addedfile {
    margin : 0.3em 0.5em 0 0.5em;
    padding : 0.5em;
    background : #333;
    border-radius : 0.3em;
    color : white;
    display : flex;
    justify-content : space-between;
    transition : .2s;
  }
  .right .rightContent .afterAddedWrap .addedfile:hover {
    background : #444;
  }
  .right .rightContent .afterAddedWrap .addedfile .cancelFile {
    cursor : pointer;
  }
  /* 옵션설정하기 */
  .right .rightContent .setOptionsBtn {
    margin-top : 2.5em;
  }
  .right .rightContent .setOptionsBtn span {
    padding : 0.3em;
    background : #333;
    font-size : 1em;
    color : white;
    border-radius : 0.3em;
    cursor : pointer;
    transition : .2s;
  }
  .right .rightContent .setOptionsBtn span:hover {
    background : #444;
  }
  /* 완성된 gif */
  .right .rightContent .createdGifs {
    margin-top : 1em;
  }
  .right .rightContent .createdGifs .gifCont {
    margin-top : 1em;
    display : flex;
    justify-content : space-between;
    align-items : center;
    padding : 0.5em;
    border : 1px solid #eaeaea;
    border-radius : 0.3em;
  }
  .right .rightContent .createdGifs .gifCont a {
    color : white;
    margin-right : 0.5em;
    padding : 0.3em;
    background : #333;
    border-radius : 0.3em;
    font-size : 0.9em;
  }
  .right .rightContent .createdGifs .gifCont .gifImgWrap {
    width : 60%;
  }
  .right .rightContent .createdGifs .gifCont .gifImgWrap img {
    display : block;
    width : 100%;
  }
  .right .rightContent .gifNotes {
    padding : 0.5em 0 0 0.5em;
    color : tomato;
    font-size : 0.6em;
  }


  /* 동적스타일 */
  .target {
    color : #444 !important;
    background : white !important;
    font-weight : bold;
  }
  .limitLength {
    width : 90%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .transition {
    transition : .3s;
    transition-timing-function : ease-out;
  }

  /* gifIng */
  .lds-spinner {
    color: official;
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    top : 50%;
    left : 50%;
    transform : translate(-50%, -50%);
  }
  .lds-spinner div {
    transform-origin: 40px 40px;
    animation: lds-spinner 1.2s linear infinite;
  }
  .lds-spinner div:after {
    content: " ";
    display: block;
    position: absolute;
    top: 3px;
    left: 37px;
    width: 6px;
    height: 18px;
    border-radius: 20%;
    background: #fff;
  }
  .lds-spinner div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }
  .lds-spinner div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }
  .lds-spinner div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }
  .lds-spinner div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }
  .lds-spinner div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }
  .lds-spinner div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }
  .lds-spinner div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }
  .lds-spinner div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }
  .lds-spinner div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }
  .lds-spinner div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }
  .lds-spinner div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }
  .lds-spinner div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }
  @keyframes lds-spinner {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
</style>
