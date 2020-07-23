
<template>
  <div id="app">
    <div class="alertWrap" v-if="alertInform">
      <div class="alertBg" @click="alertInform = null"></div>
      <alert-component :alertobj="alertInform" class="alertComp"></alert-component>
    </div>
    <div class="contWrap">
      <div class="title">Two Fast Gif-</div>
      <div class="tabBtnWrap">
        <span class="tabBtn" @click="compNav='AddFileComponent'">파일</span>
        <span class="tabBtn" @click="compNav='AddUrlComponent'">url</span>
      </div>
      <component 
        :is="compNav"

        @callalert="onAlert"
        @updatevideo="updateVideoInfo"
      ></component>
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
    </div>
  </div>
</template>

<script>
import AddFileComponent from './components/addfile.vue';
import AddUrlComponent from './components/addurl.vue';
import AlertComponent from './components/alert.vue';

export default {
  name: 'App',
  components: {
    AddFileComponent, // 파일등록
    AddUrlComponent, // url등록
    AlertComponent // 스낵바
  },
  data(){
    return {
      fileInfo : [], // 등록된 file
      compNav : 'AddFileComponent', // 네비게이션바 클릭시 노출Comp 다르게
      alertInform : null, // 스낵바 정보보내는 객체
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
      console.log(this.fileInfo)
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
    background : rgba(0,0,0,0.8);
  }
  .alertBg {
    width: 100%;
    height: 100%;
    position: absolute;
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
