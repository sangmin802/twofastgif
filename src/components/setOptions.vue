<template>
  <div id="setOptionsComp">
    <div class="optionsTabBtn">
      <!-- 등록되는 파일의 갯수에 따라 네비게이션 생성 및, 해당 값으로 노출되는 세부옵션 탭 감지 -->
      <span
        v-for="(file, index) of fileinfo"
        :key="'optionTab'+(index+1)"
        @click="optionTarget = index+1"
      >Video{{index+1}}</span>
    </div>
    <div class="optionWrap"
      v-for="(file, index) of fileinfo"
      :key="'optionDetail'+(index+1)"
    >
    <!-- 네비게이션 클릭에 따라 맞는 뷰 생성 -->
      <template
        v-if="optionTarget === index+1"
      >
        <div class="targetTitle">
          <div class="title">파일명</div>
          <div class="content" v-if="typeof file === 'object'">
            {{file.name}}
          </div>
          <div class="content" v-if="typeof file === 'string'">
            {{file}}
          </div>
        </div>
        <!-- 파일 갯수별 동적 클래스 -->
        <!-- 동적 v-model -->
        <form
          :class="'optionForm'+(index+1)"
          @submit.prevent="sendAjax"  
        >
          <div :class="'setFps'+(index+1)">
            <div class="title">
              FPS설정
            </div>
            <div class="content">
              <select v-model="options[index].fps">
                <option>10fps</option>
                <option selected>15fps</option>
                <option>25fps</option>
              </select>
            </div>
          </div>
          <div :class="'setScale'+(index+1)">
            <div class="title">
              해상도설정
            </div>
            <div class="content">
              <select v-model="options[index].scale">
                <option>변환할 동영상 해상도(기본)</option>
                <option>가로:600px</option>
                <option>가로:480px</option>
                <option>세로:480px</option>
                <option>세로:300px</option>
              </select>
            </div>
          </div>
          <div :class="'setStart'+(index+1)">
            <div class="title">
              움짤 시작시간 설정
            </div>
            <div class="content">
              <div class="min">
                <span>분</span>
                <input @keydown.prevent v-model="options[index].start.FM" type="number" min="0" max="5">
                <input @keydown.prevent v-model="options[index].start.SM" type="number" min="0" max="9">
              </div>
              <div class="sec">
                <span>초</span>
                <input @keydown.prevent v-model="options[index].start.FS" type="number" min="0" max="5">
                <input @keydown.prevent v-model="options[index].start.SS" type="number" min="0" max="9">
                :
                <input @keydown.prevent v-model="options[index].start.FMS" type="number" min="0" max="9">
                <input @keydown.prevent v-model="options[index].start.SMS" type="number" min="0" max="9">
              </div>
            </div>
          </div>
          <div :class="'setEnd'+(index+1)">
            <div class="title">
              움짤 종료시간 설정
            </div>
            <div class="content">
              <div class="min">
                <span>분</span>
                <input @keydown.prevent v-model="options[index].end.FM" type="number" min="0" max="5">
                <input @keydown.prevent v-model="options[index].end.SM" type="number" min="0" max="9">
              </div>
              <div class="sec">
                <span>초</span>
                <input @keydown.prevent v-model="options[index].end.FS" type="number" min="0" max="5">
                <input @keydown.prevent v-model="options[index].end.SS" type="number" min="0" max="9">
                :
                <input @keydown.prevent v-model="options[index].end.FMS" type="number" min="0" max="9">
                <input @keydown.prevent v-model="options[index].end.SMS" type="number" min="0" max="9">
              </div>
            </div>
          </div>
          <input type="submit" value="변환하기">
        </form>
      </template>
    </div>
  </div>
</template>

<script>

export default {
  name: 'setOptionsComp',
  props : ['fileinfo', 'filetype'],
  data(){
    const options = [];
    // 부모에게 받아오는 파일의 갯수애 따라 data값 생성
    [...this.fileinfo].forEach((file, index) => {
      options[index] = {
        file,
        scale : '변환할 동영상 해상도(기본)',
        fps : '15fps',
        start : {
          // 첫 분
          FM : 0,
          // 두번째 분
          SM : 0,
          // 첫 초
          FS : 0,
          // 두번째 초
          SS : 0,
          // 첫 밀리초
          FMS : 0,
          // 두번째 밀리초
          SMS : 0,
        },
        end : {
          FM : 0,
          SM : 0,
          FS : 0,
          SS : 0,
          FMS : 0,
          SMS : 0,
        }
      }
    })
    return {
      files : this.fileinfo,
      optionTarget : 1,
      options
    }
  },
  methods : {
    sendAjax(){
      const impossible = [];
      const possible = [];
      this.options.forEach(res => {
        const {start, end} = res;
        const target = res.file.name || res.file;
        let startTime = this.changeToFullcount(start);
        let endTime = this.changeToFullcount(end);
        const calc = this.timeCalc(startTime, endTime);
        
        switch(calc){
          case false : {
            // 끝나는시간이 시작시간보다 작을 때(불가능)
            impossible.push(target);
          }break;
          case true : {
            // 끝나는시간이 시작시간보다 클 때(가능)
            // 00:00:00으로, 아무것도 설정안했을 때(기본값)
            possible.push(res);
          }break;
          case 'same' : {
            if(startTime === 0 && endTime === 0){
              // 처음부터 끝까지인 기본값
              possible.push(res);
            }else{
              // 시작시간, 끝나는시간이 0 0으로 기본이아닌, 사용자가 설정한 값인데 동일할 경우
              impossible.push(target);
            }
          }
        }
      });

      if(impossible.length !== 0){
        this.$emit('callalert', impossible, 'fileOptionsError')
      }else{
        console.log('정상진행')
        const options = [...this.options];
        let ajaxForm = {}; // Ajax통신할 객체
        switch(this.filetype){
          case 'AddFileComponent' : {
            // console.log('영상파일 등록')
          }break;
          case 'AddUrlComponent' : {
            // console.log('url등록')
          }
        }

        options.forEach((option, index) => { // 등록된 파일 갯수에 따른 객체 값 설정
          let stringIndex = null;
          const filteredIndex = index+1;
          const {file, fps, scale, start, end} = option;
          switch(index){
            case 0 : {
              stringIndex = 'first';
            }break;
            case 1 : {
              stringIndex = 'second';
            }break;
          }
          // console.log(option)
          ajaxForm[`${stringIndex}_uploaded_file`] = file;
          ajaxForm[`fps_value_${filteredIndex}`] = Number(fps.replace('fpx', ''));
          ajaxForm[`scaleValue_select_${filteredIndex}`] = scale;
          console.log(this.createMin(start), this.createSec(start))
          ajaxForm[`start_${filteredIndex}`] = start;
          ajaxForm[`end_${filteredIndex}`] = end;
          // first_uploaded_file : null,
          // second_uploaded_file : null,
          // scaleValue_select_1 : "변환할 동영상 해상도(기본)",
          // scaleValue_select_2 : "변환할 동영상 해상도(기본)",
          // fps_value_1 : 15,
          // fps_value_2 : 15,
          // start_1 : 0,
          // start_2 : 0,
          // end_1 : -1.0,
          // end_2 : -1.0,
        })
      }
    },
    // 시작시간, 종료시간 유효성검사
    timeCalc(start, end){
      const gap = end - start;
      let result = null;
      if(gap < 0){
        result = false
      }else if(gap > 0){
        result = true
      }else if(gap === 0){
        result = 'same'
      }
      return result;
    },
    changeToFullcount(obj){ // 시작시간, 종료시간 유효성검사를 위한 합치기
      return Number((obj.FM+obj.SM+obj.FS+obj.SS+obj.FMS+obj.SMS+'!').replace('!', ''));
    },
    createMin(obj){ // 분만 추출
      return Number((obj.FM+obj.SM+'!').replace('!', ''));
    },
    createSec(obj){ // 초만 추출
      return Number((obj.FS+obj.SS+'.'+obj.FMS+obj.SMS+'!').replace('!', ''));
    }
  }
}
</script>
https://twofastgif.com/convert/upload/
https://twofastgif.com/convert/urlupload/

<style>
  #setOptionsComp {
    position : absolute;
    left : 50%;
    top : 50%;
    transform : translate(-50%, -50%);
    background : white;
    width : 60%;
    height : 50%;
  }
  .targetTitle .content {
    width : 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
</style>