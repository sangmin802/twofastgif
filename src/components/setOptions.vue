<template>
  <div id="setOptionsComp">
    <div class="optionsTabBtn">
      <!-- 등록되는 파일의 갯수에 따라 네비게이션 생성 및, 해당 값으로 노출되는 세부옵션 탭 감지 -->
      <span
        v-for="(file, index) of fileinfo"
        :key="'optionTab'+(index+1)"
        @click="optionTarget = index+1"
        :class="{target : optionTarget === index+1}"
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
          <div class="optTitle">파일명</div>
          <div class="optContent" v-if="typeof file === 'object'">
            {{file.name}}
          </div>
          <div class="optContent" v-if="typeof file === 'string'">
            {{file}}
          </div>
        </div>
        <!-- 파일 갯수별 동적 클래스 -->
        <!-- 동적 v-model -->
        <form
          :class="'optionForm'+(index+1)"
          @submit.prevent="sendAjax"  
        >
          <div class="optDetailWrap" :class="'setFps'+(index+1)">
            <div class="optTitle">
              FPS설정
            </div>
            <div class="optContent">
              <select v-model="options[index].fps">
                <option>10fps</option>
                <option selected>15fps</option>
                <option>25fps</option>
              </select>
            </div>
          </div>
          <div class="optDetailWrap" :class="'setScale'+(index+1)">
            <div class="optTitle">
              해상도설정
            </div>
            <div class="optContent">
              <select v-model="options[index].scale">
                <option>변환할 동영상 해상도(기본)</option>
                <option>가로:600px</option>
                <option>가로:480px</option>
                <option>세로:480px</option>
                <option>세로:300px</option>
              </select>
            </div>
          </div>
          <div class="optDetailWrap" :class="'setPalette'+(index+1)">
            <div class="optTitle">
              화질설정
            </div>
            <div class="optContent qualityWrap">
              <div class="highQualityWrap">
                <label for="highQuality">고화질</label>
                <input type="radio" checked value="1" v-model="options[index].palette" id="highQuality">
              </div>
              <div class="lowQualityWrap">
                <label for="lowQuality">저화질</label>
                <input type="radio" value="0" v-model="options[index].palette" id="lowQuality">
              </div>
            </div>
          </div>
          <div class="optDetailWrap" :class="'setStart'+(index+1)">
            <div class="optTitle">
              움짤 시작시간 설정
            </div>
            <div class="optContent timeOption">
              <div class="min">
                <input @keydown.prevent v-model="options[index].start.FM" type="number" min="0" max="5">
                <input @keydown.prevent v-model="options[index].start.SM" type="number" min="0" max="9">
                <span>분</span>
              </div>
              <div class="sec">
                <input @keydown.prevent v-model="options[index].start.FS" type="number" min="0" max="5">
                <input @keydown.prevent v-model="options[index].start.SS" type="number" min="0" max="9">
                :
                <input @keydown.prevent v-model="options[index].start.FMS" type="number" min="0" max="9">
                <input @keydown.prevent v-model="options[index].start.SMS" type="number" min="0" max="9">
                <span>초</span>
              </div>
            </div>
          </div>
          <div class="optDetailWrap" :class="'setEnd'+(index+1)">
            <div class="optTitle">
              움짤 종료시간 설정
            </div>
            <div class="optContent timeOption">
              <div class="min">
                <input @keydown.prevent v-model="options[index].end.FM" type="number" min="0" max="5">
                <input @keydown.prevent v-model="options[index].end.SM" type="number" min="0" max="9">
                <span>분</span>
              </div>
              <div class="sec">
                <input @keydown.prevent v-model="options[index].end.FS" type="number" min="0" max="5">
                <input @keydown.prevent v-model="options[index].end.SS" type="number" min="0" max="9">
                :
                <input @keydown.prevent v-model="options[index].end.FMS" type="number" min="0" max="9">
                <input @keydown.prevent v-model="options[index].end.SMS" type="number" min="0" max="9">
                <span>초</span>
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
// import axios from 'axios';
// axios.defaults.xsrfCookieName = 'csrftoken';
// axios.defaults.xsrfHeaderName = 'x-CSRFToken';
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
        palette : 1,
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
      options,
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
        let formData = new FormData(); // Ajax통신할 객체
        let url = null;
        switch(this.filetype){
          case 'AddFileComponent' : {
            // url = 'https://twofastgif.com/convert/upload/';
            url = 'http://ec2-13-209-17-21.ap-northeast-2.compute.amazonaws.com/convert/upload/';
          }break;
          case 'AddUrlComponent' : {
            // url = 'https://twofastgif.com/convert/urlupload/';
            url = 'http://ec2-13-209-17-21.ap-northeast-2.compute.amazonaws.com/convert/urlupload/';
          }
        }
        
        options.forEach((option, index) => { // 등록된 파일 갯수에 따른 객체 값 설정
          let stringIndex = null;
          const filteredIndex = index+1;
          const {file, fps, scale, start, end, palette} = option;
          switch(index){
            case 0 : {
              stringIndex = 'first';
            }break;
            case 1 : {
              stringIndex = 'second';
            }break;
          }
          formData.append(`${stringIndex}_uploaded_file`,file);
          formData.append(`fps_value_${filteredIndex}`,Number(fps.replace('fps', '')));
          formData.append(`scaleValue_select_${filteredIndex}`,scale);
          formData.append(`use_palette_${filteredIndex}`,palette);
          formData.append(`start_${filteredIndex}`,this.returnSec(start, 'start'));
          formData.append(`end_${filteredIndex}`,this.returnSec(end, 'end'));
        });
        // axios.post(url, formData)
        // .then(res => {
        //   console.log(res)
        // })
        fetch(url, {
          method : 'POST',
          body : formData
        })
        .then(res => res.json())
        .then(data => {
          this.$emit('setgiffiles', data); // 부모 data에 gif파일들 전달
        })
        .catch(err => {
          console.log(err)
        });
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
    returnSec(obj, type){ // 분+초 추출
      const minToSec = Number(obj.FM+obj.SM)*60; // 분 => 초
      // (분=>초)+기본초+.+밀리초
      let result = Number(minToSec+Number(obj.FS+obj.SS)+'.'+obj.FMS+obj.SMS);
      // 기본값일 경우
      if(result === 0){
        if(type==='start'){ // 시작이면 0 반환
          result = 0;
        }else if(type==='end'){ // 종료면 -1.0반환
          result = -1.0;
        }
      }
      return result;
    }
  }
}
</script>
https://twofastgif.com/convert/upload/
https://twofastgif.com/convert/urlupload/
first_uploaded_file : null,
second_uploaded_file : null,
scaleValue_select_1 : "변환할 동영상 해상도(기본)",
scaleValue_select_2 : "변환할 동영상 해상도(기본)",
fps_value_1 : 15,
fps_value_2 : 15,
start_1 : 0,
start_2 : 0,
end_1 : -1.0,
end_2 : -1.0,
<style>
  #setOptionsComp {
    position : absolute;
    left : 50%;
    top : 20%;
    transform : translate(-50%, -20%);
    background : white;
    width : 60%;
    padding : 1em;
    border-radius : 0.3em;
  }
  .targetTitle .content {
    width : 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .optionsTabBtn span {
    margin-right : 1em;
    color : #888;
    font-size : 1.3em;
    font-weight : bold;
    cursor : pointer;
  }
  /* 옵션창 */
  .optionWrap {
    margin : 0.5em 0.2em;
  }
  .optionWrap .optTitle {
    color : #666;
    font-weight : bold;
    font-size : 1em;
    margin-bottom : 0.3em;
  }
  .optionWrap .optContent, .optionWrap .optContent * {
    color : #666;
    font-size : 0.9em;
  }
  .optionWrap .optDetailWrap {
    margin-bottom : 0.5em;
    padding-bottom : 0.5em;
    border-bottom : 1px solid #eaeaea;
  }
  .optionWrap .targetTitle {
    margin : 0.7em 0;
  }
  /* input 설정 */
  .optionWrap select {
    border : 0;
    padding-bottom : 0.3em;
  }
  .qualityWrap {
    display : flex;
  }
  .qualityWrap input[type=radio] {
    margin-left : 0.2em;
    height : 0.9em;
  }
  .qualityWrap .lowQualityWrap {
    margin-left : 0.8em;
  }
  .optionWrap .timeOption * {
    display : flex;
    border : 0;
    display : inline-block;
  }
  .optionWrap .timeOption .min {
    width : 30%;
  }
  .optionWrap .timeOption .min span {
    text-align : left;
    width : 50%;
  }
  .optionWrap .timeOption .min input[type=number] {
    width : 25%;
  }
  .optionWrap .timeOption .sec {
    width : 50%;
  }
  .optionWrap .timeOption .sec span {
    text-align : left;
    width : 30%;
  }
  .optionWrap .timeOption .sec input[type=number] {
    width : 15%;
    text-align : right;
  }
  .optionWrap input[type=submit] {
    font-size : 1em;
    margin-top : 0.8em;
    padding : 0.3em;
    border : 0;
    background : #4876ef;
    color : white;
    border-radius : 0.3em;
    transition : .2s;
    cursor : pointer;
  }
  .optionWrap input[type=submit]:hover {
    background : #2353D2;
  }
</style>