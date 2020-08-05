
<template>
  <div id="app">
    <!-- 옵션 켰을 때, 검은 뒷배경 -->
    <div class="optionsBg" v-if="optionPopup" @click="optionPopup = false"></div>
    <!-- 스낵바 떴을 때, 검은 뒷배경 -->
    <div class="alertBg" v-if="alertInform" @click="alertInform = null"></div>
    <!-- 진행중 -->
    <div class="gifIng" v-if="gifIng===true">
      <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
    <!-- 스낵바 컴포넌트 -->
    <!-- alertobj = 스낵바 내용과, 타입을 담고있는 속성 -->
    <transition name="alert">
      <alert-component
        :alertobj="alertInform" 
         v-if="alertInform"
      >
      </alert-component>
    </transition>
    <div class="header">
      <div class="title">Two Fast Gif</div>
      <div class="tabBtnWrap">
        <!-- compNav 말그대로 컴포넌트 변경 네비게이션 -->
        <span class="tabBtn" :class="{target : compNav==='AddFileComponent'}" @click="navChange('AddFileComponent')">파일</span>
        <span class="tabBtn" :class="{target : compNav==='AddUrlComponent'}" @click="navChange('AddUrlComponent')">url</span>
      </div>
    </div>
    <div class="contWrap">
      <!-- 위의 네비게이션 버튼을 통해 출력하는 컴포넌트 -->
      <!-- :is="compNav" data의 compNav를 통해 감지 -->
      <!-- callalert = 스낵바 메소드 전달 -->
      <!-- updatevideo = url이나 파일 부모data에 등록하는 메소드 전달 -->
      <component 
        :is="compNav"

        @callalert="onAlert"
        @updatevideo="updateVideoInfo"
      ></component>
      <!-- 등록된 파일이 있을 때만 노출되는 옵션설정 돔 -->
      <div 
        class="afterAddedWrap" 
        
        v-if="fileInfo.length!==0"
      >
        <div class="addedFileList">등록된 파일</div>
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
            옵션 설정하기
          </span>
        </div>
        <!-- 옵션 설정 팝업 클릭 시, 노출되는 컴포넌트 -->
        <!-- fileinfo = 등록된 최대 두개의 파일 전달 -->
        <transition name="alert">
          <OptionsComponent
            class="optionPopup"
            v-if="optionPopup"

            :filetype="compNav"
            :fileinfo="fileInfo"
            @callalert="onAlert"
            @setgiffiles="getGifFiles"
            @gifing="gifIng=!gifIng"
          >
          </OptionsComponent>
        </transition>
      </div>
      <!-- 완성된 gif파일들 있으면 노출 -->
      <div class="createdGifs" v-if="gifFiles.length!==0">
        <div v-for="gif of gifFiles" :key="gif" class="gifCont">
          <div class="gifImgWrap">
            <img :src="gif" :alt="gif">
          </div>
          <a :href="gif" download>다운로드</a>
        </div>
        <div class="gifNotes">
          * 추가진행시 이전에 변환한 gif는 사라집니다!
        </div>
      </div>
      <button class="howToUseBtn" @click="showHowToUse=!showHowToUse">설명서</button>
      <HowToUseComponent v-show="showHowToUse">
      </HowToUseComponent>
    </div>
  </div>
</template>

<script>
import AddFileComponent from './components/addfile.vue';
import AddUrlComponent from './components/addurl.vue';
import AlertComponent from './components/alert.vue';
import OptionsComponent from './components/setOptions.vue';
import HowToUseComponent from './components/howtouse.vue';

export default {
  name: 'App',
  components: {
    AddFileComponent, // 파일등록
    AddUrlComponent, // url등록
    AlertComponent, // 스낵바
    OptionsComponent, // 옵션설정
    HowToUseComponent // 사용설명
  },
  data(){
    return {
      fileInfo : [], // 등록된 file
      compNav : 'AddFileComponent', // 네비게이션바 클릭시 노출Comp 다르게
      alertInform : null, // 스낵바 정보보내는 객체
      optionPopup : false, // 옵션팝업
      showHowToUse : true,
      gifIng : false,
      gifFiles : []
    }
  },
  methods : {
    onAlert(value, type){ // 스낵바 전용 메소드(자식들도 emit으로 연결)
      this.alertInform = {type, value};
    },
    updateVideoInfo(value){ // 파일등록(자식들도 emit으로 연결)
      if(this.fileInfo.length >= 2){
        this.onAlert('두개 이상 불가능합니다.', 'overLength');
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
      this.alertInform = null // 스낵바 끄기
      this.optionPopup = false; // 옵션팝업끄기
      this.fileInfo = []; // 등록한 파일 제거
      this.gifIng = false; // 변환중 끄기
    }
  }
}
</script>

<style>
  html { font-size : 16px;}
  @media all and (min-width:768px) and (max-width:1024px) {
    html { font-size : 14px;}
  }
  @media screen and (max-width: 767px){
    html { font-size : 12px; }
  }
  * {
    margin : 0; padding : 0; list-style : none; text-decoration : none; box-sizing : border-box; outline : none;
  }
  /* body { 
    overflow-y : scroll;
  } */
  #app {
    background : #4876ef;
    min-height : 100vh;
    padding : 2em 0 2em;
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
    z-index : 9;
    top : 0;
  }
  /* 스낵바 컴포넌트 애니메이션 */
  .alert-enter-active {
    animation : alert .5s;
  }
  @keyframes alert {
    0% {top : 18%; opacity : 0;}
    100% {top : 20%; opacity : 1;}
  }    
  /* 옵션관련 */
  .optionsBg {
    width: 100%;
    height: 100%;
    position: absolute;
    background : rgba(0,0,0,0.4);
    top : 0;
  }
  /* 헤더 */
  .header {
    width : 70%;
    margin : 0 auto;
  }
  .header .title {
    font-size : 3em;
    line-height : 3em;
    font-weight : bold;
    color : white;
  }
  .header .tabBtnWrap {
    font-size : 1.1em;
  }
  .header .tabBtn {
    min-width : 60px;
    display : inline-block;
    background : #eaeaea;
    cursor : pointer;
    padding : 0.5em;
    color : #888;
  }
  .header .tabBtn:first-child {
    border-radius : 0.3em 0 0 0;
  }
  .header .tabBtn:last-child {
    border-radius : 0 0.3em 0 0;
  }
  .header .tabBtn:nth-child(1) {
    margin-left : 0;
  }
  /* 그 외 컨텐츠 */
  .contWrap {
    width : 70%;
    margin : 0 auto;
    padding : 2em;
    background : white;
    border-radius : 0 0.3em 0.3em 0.3em;
  }
  .contWrap .howToUseBtn {
    border : none;
    margin-top : 1em;
    padding : 0.1em;
    background : none;
    font-size : 1em;
    font-weight : bold;
    color : #999;
    cursor : pointer;
    transition : .2s;
  }
  .contWrap .howToUseBtn:hover {
    color : #111;
  }
  /* 등록된 파일 */
  .afterAddedWrap {
    margin-top : 1em;
  }
  .afterAddedWrap .addedFileList {
    padding-bottom : 0.5em;
    color : #333;
    font-weight : bold;
  }
  .afterAddedWrap .addedfile {
    margin : 0.3em 0.5em 0 0.5em;
    padding : 0.5em;
    background : #4876ef;
    border-radius : 0.3em;
    color : white;
    display : flex;
    justify-content : space-between;
    transition : .2s;
  }
  .afterAddedWrap .addedfile:hover {
    background : #2353D2;
  }
  .afterAddedWrap .addedfile .cancelFile {
    cursor : pointer;
  }
  /* 옵션설정하기 */
  .setOptionsBtn {
    margin-top : 1em;
  }
  .setOptionsBtn span {
    padding : 0.2em;
    background : none;
    font-size : 1em;
    font-weight : bold;
    color : #999;
    cursor : pointer;
    transition : .2s;
  }
  .setOptionsBtn span:hover {
    color : #111;
  }
  /* 완성된 gif */
  .createdGifs {
    margin-top : 1em;
  }
  .createdGifs .gifCont {
    margin-top : 1em;
    display : flex;
    justify-content : space-between;
    align-items : center;
    padding : 0.5em;
    border : 1px solid #eaeaea;
    border-radius : 0.3em;
  }
  .createdGifs .gifCont a {
    color : white;
    margin-right : 0.5em;
    padding : 0.3em;
    background : #4876ef;
    border-radius : 0.3em;
    font-size : 0.9em;
  }
  .createdGifs .gifCont .gifImgWrap {
    width : 60%;
  }
  .createdGifs .gifCont .gifImgWrap img {
    display : block;
    width : 100%;
  }
  .gifNotes {
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

  /* gifIng */
  .lds-spinner {
    color: official;
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    top : 30%;
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
