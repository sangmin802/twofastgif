
<template>
  <div id="app">
    <!-- 옵션 켰을 때, 검은 뒷배경 -->
    <div class="optionsBg" v-if="optionPopup" @click="optionPopup = false"></div>
    <div class="alertWrap" v-if="alertInform">
      <!-- 스낵바 떴을 때, 검은 뒷배경 -->
      <div class="alertBg" @click="alertInform = null"></div>
      <!-- 스낵바 컴포넌트 -->
      <!-- alertobj = 스낵바 내용과, 타입을 담고있는 속성 -->
      <alert-component 
        class="alertComp"
        
        :alertobj="alertInform" 
      >
      </alert-component>
    </div>
    <div class="contWrap">
      <div class="title">Two Fast Gif-</div>
      <div class="tabBtnWrap">
        <!-- compNav 말그대로 컴포넌트 변경 네비게이션 -->
        <span class="tabBtn" @click="compNav='AddFileComponent'">파일</span>
        <span class="tabBtn" @click="compNav='AddUrlComponent'">url</span>
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

          :fileinfo="fileInfo"
        >
        </OptionsComponent>
      </div>
    </div>
  </div>
</template>

<script>
import AddFileComponent from './components/addfile.vue';
import AddUrlComponent from './components/addurl.vue';
import AlertComponent from './components/alert.vue';
import OptionsComponent from './components/setOptions.vue';

export default {
  name: 'App',
  components: {
    AddFileComponent, // 파일등록
    AddUrlComponent, // url등록
    AlertComponent, // 스낵바
    OptionsComponent // 옵션설정
  },
  data(){
    return {
      fileInfo : [], // 등록된 file
      compNav : 'AddFileComponent', // 네비게이션바 클릭시 노출Comp 다르게
      alertInform : null, // 스낵바 정보보내는 객체
      optionPopup : false
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
    }
  }
}
</script>

<style>
  * {
    margin : 0; padding : 0; list-style : none; color : black; text-decoration : none; box-sizing : border-box; outline : none;
  }
  .alertWrap {
    position : absolute;
    width : 100%;
    height : 100vh;
  }
  .alertBg {
    width: 100%;
    height: 100%;
    position: absolute;
    background : rgba(0,0,0,0.8);
  }
  .optionsBg {
    width: 100%;
    height: 100%;
    position: absolute;
    background : rgba(0,0,0,0.8);
  }
  .alertComp {
    position: absolute;
    transform: translate(-50%);
    left: 50%;
    top: 20%;
    background : white
  }
  .contWrap {
    width : 60%;
    margin : 0 auto;
    padding-top : 4em;
  }
  .contWrap .tabBtn {
    margin-left : 1em;
    cursor : pointer;
  }
  .contWrap .tabBtn:nth-child(1) {
    margin-left : 0;
  }
</style>
