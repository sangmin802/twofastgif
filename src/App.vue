
<template>
  <div id="app">
    <!-- 옵션 켰을 때, 검은 뒷배경 -->
    <div class="optionsBg" v-if="optionPopup" @click="optionPopup = false"></div>
      <!-- 스낵바 떴을 때, 검은 뒷배경 -->
    <div class="alertBg" v-if="alertInform" @click="alertInform = null"></div>
    <!-- 스낵바 컴포넌트 -->
    <!-- alertobj = 스낵바 내용과, 타입을 담고있는 속성 -->
    <transition name="alert">
      <alert-component
        :alertobj="alertInform" 
         v-if="alertInform"
      >
      </alert-component>
    </transition>
    <div class="contWrap">
      <div class="title">Two Fast Gif-</div>
      <div class="tabBtnWrap">
        <!-- compNav 말그대로 컴포넌트 변경 네비게이션 -->
        <span class="tabBtn" :class="{target : compNav==='AddFileComponent'}" @click="navChange('AddFileComponent')">파일</span>
        <span class="tabBtn" :class="{target : compNav==='AddUrlComponent'}" @click="navChange('AddUrlComponent')">url</span>
      </div>
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
        <div>등록된 파일</div>
        <ul>
          <li v-for="(data, index) of fileInfo" :key = "index">
            <span v-if="typeof data === 'object'">
              {{data.name}}
            </span>
            <span v-if="typeof data === 'string'">
              {{data}}
            </span>
            <span @click="remove(index)">제거</span>
          </li>
        </ul>
        <!-- 옵션 설정 팝업 노출 버튼 -->
        <div 
          class="setOptionsBtn"

          @click="optionPopup = true"
        >
          옵션 설정하기
        </div>
        <!-- 옵션 설정 팝업 클릭 시, 노출되는 컴포넌트 -->
        <!-- fileinfo = 등록된 최대 두개의 파일 전달 -->
        <OptionsComponent
          class="optionPopup"
          v-if="optionPopup"

          :filetype="compNav"
          :fileinfo="fileInfo"
          @callalert="onAlert"
        >
        </OptionsComponent>
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
      showHowToUse : false
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
    }
  }
}
</script>

<style>
  * {
    margin : 0; padding : 0; list-style : none; text-decoration : none; box-sizing : border-box; outline : none;
  }
  #app {
    background : #333;
    height : 100vh;
    padding-top : 2em;
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
  /* 그 외 컨텐츠 */
  .contWrap {
    width : 70%;
    margin : 0 auto;
    padding : 2em;
    background : white;
    border-radius : 0.3em;
  }
  .contWrap .title {
    font-size : 2em;
    font-weight : bold;
    color : #333;
  }
  .contWrap .tabBtnWrap {
    margin : 0.5em 0;
    font-size : 1.1em;
    color : #666;
  }
  .contWrap .tabBtn {
    margin-left : 1em;
    cursor : pointer;
  }
  .contWrap .tabBtn:nth-child(1) {
    margin-left : 0;
  }
  .contWrap .howToUseBtn {
    margin-top : 1.5em;
  }
  .target {
    color : #555;
    font-weight : bold;
  }
</style>
