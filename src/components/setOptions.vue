<template>
  <div id="setOptionsComp">
    <template v-if="files">
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
            <div class="optTitle">{{$t('setoptions.fileName')}}</div>
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
                {{$t('setoptions.setFps')}}
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
                {{$t('setoptions.setScale')}}
              </div>
              <div class="optContent">
                <select v-model="options[index].scale">
                  <option value="변환할 동영상 해상도(기본)">{{$t('setoptions.setScale1')}}</option>
                  <option value="가로:600px">{{$t('setoptions.setScaleW')}}:600px</option>
                  <option value="가로:480px">{{$t('setoptions.setScaleW')}}:480px</option>
                  <option value="세로:480px">{{$t('setoptions.setScaleH')}}:480px</option>
                  <option value="세로:300px">{{$t('setoptions.setScaleH')}}:300px</option>
                </select>
              </div>
            </div>
            <div class="optDetailWrap" :class="'setPalette'+(index+1)">
              <div class="optTitle qualityTitle">
                {{$t('setoptions.setQual')}}
                <div class="qualityQues">
                  ?
                  <div class="qualityQuesText">
                    {{$t('setoptions.setQualText')}}
                  </div>
                </div>
              </div>
              <div class="optContent qualityWrap">
                <div class="highQualityWrap">
                  <label for="highQuality">{{$t('setoptions.highQual')}}</label>
                  <input type="radio" checked value="1" v-model="options[index].palette" id="highQuality">
                </div>
                <div class="lowQualityWrap">
                  <label for="lowQuality">{{$t('setoptions.lowQual')}}</label>
                  <input type="radio" value="0" v-model="options[index].palette" id="lowQuality">
                </div>
              </div>
            </div>
            <div class="optDetailWrap" :class="'setStart'+(index+1)">
              <div class="optTitle">
                {{$t('setoptions.setStartTime')}}
              </div>
              <div class="optContent timeOption">
                <div class="min">
                  <input @keyup="keyPrevent" v-model="options[index].start.FM" type="number" :data-index="index" data-type="start" data-timevalue="FM" :min="0" :max="5">
                  <input @keyup="keyPrevent" v-model="options[index].start.SM" type="number" :data-index="index" data-type="start" data-timevalue="SM" :min="0" :max="9">
                  <span>{{$t('setoptions.min')}}</span>
                </div>
                <div class="sec">
                  <input @keyup="keyPrevent" v-model="options[index].start.FS" type="number" :data-index="index" data-type="start" data-timevalue="FS" :min="0" :max="5">
                  <input @keyup="keyPrevent" v-model="options[index].start.SS" type="number" :data-index="index" data-type="start" data-timevalue="SS" :min="0" :max="9">
                  :
                  <input @keyup="keyPrevent" v-model="options[index].start.FMS" type="number" :data-index="index" data-type="start" data-timevalue="FMS" :min="0" :max="9">
                  <input @keyup="keyPrevent" v-model="options[index].start.SMS" type="number" :data-index="index" data-type="start" data-timevalue="SMS" :min="0" :max="9">
                  <span>{{$t('setoptions.sec')}}</span>
                </div>
              </div>
            </div>
            <div class="optDetailWrap" :class="'setEnd'+(index+1)">
              <div class="optTitle">
                {{$t('setoptions.setEndTime')}}
              </div>
              <div class="optContent timeOption">
                <div class="min">
                  <input @keyup="keyPrevent" v-model="options[index].end.FM" type="number" :data-index="index" data-type="end" data-timevalue="FM" :min="0" :max="5">
                  <input @keyup="keyPrevent" v-model="options[index].end.SM" type="number" :data-index="index" data-type="end" data-timevalue="SM" :min="0" :max="9">
                  <span>{{$t('setoptions.min')}}</span>
                </div>
                <div class="sec">
                  <input @keyup="keyPrevent" v-model="options[index].end.FS" type="number" :data-index="index" data-type="end" data-timevalue="FS" :min="0" :max="5">
                  <input @keyup="keyPrevent" v-model="options[index].end.SS" type="number" :data-index="index" data-type="end" data-timevalue="SS" :min="0" :max="9">
                  :
                  <input @keyup="keyPrevent" v-model="options[index].end.FMS" type="number" :data-index="index" data-type="end" data-timevalue="FMS" :min="0" :max="9">
                  <input @keyup="keyPrevent" v-model="options[index].end.SMS" type="number" :data-index="index" data-type="end" data-timevalue="SMS" :min="0" :max="9">
                  <span>{{$t('setoptions.sec')}}</span>
                </div>
              </div>
            </div>
            <input type="submit" :value="$t('setoptions.convert')">
          </form>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import axios from 'axios';
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'x-CSRFToken';
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
        ['FM', 'SM', 'FS', 'SS', 'FMS', 'SMS'].forEach(time => {
          if(start[time]===''){
            start[time] = 0
          }
          if(end[time]===''){
            end[time] = 0
          }
        });
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
        let AjaxObj = null; // Ajax 통신 파일이면 form 아니면 {}
        const options = [...this.options];
        let url = null;
        switch(this.filetype){
          case 'AddFileComponent' : {
            url = '/convert/upload/';
            AjaxObj = new FormData();
          }break;
          case 'AddUrlComponent' : {
            url = '/convert/urlupload/';
            AjaxObj = {};
          }
        }
        
        options.forEach((option, index) => { // 등록된 파일 갯수에 따른 Ajax 통신 값 값 설정
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

          switch(this.filetype){
            case 'AddFileComponent' : {
              AjaxObj.append(`${stringIndex}_uploaded_file`,file);
              AjaxObj.append(`fps_value_${filteredIndex}`,Number(fps.replace('fps', '')));
              AjaxObj.append(`scaleValue_select_${filteredIndex}`,scale);
              AjaxObj.append(`use_palette_${filteredIndex}`,palette);
              AjaxObj.append(`start_${filteredIndex}`,this.returnSec(start, 'start'));
              AjaxObj.append(`end_${filteredIndex}`,this.returnSec(end, 'end'));
            }break;
            case 'AddUrlComponent' : {
              AjaxObj[`uploadURL_${filteredIndex}`] = file;
              AjaxObj[`URL_fps_value_${filteredIndex}`] = Number(fps.replace('fps', ''));
              AjaxObj[`URL_scaleValue_select_${filteredIndex}`] = scale;
              AjaxObj[`URL_start_${filteredIndex}`] = this.returnSec(start, 'start');
              AjaxObj[`URL_end_${filteredIndex}`] = this.returnSec(end, 'end');
              AjaxObj[`use_palette_${filteredIndex}`] = palette;
            }
          }
        });
        
        this.$emit('gifing'); // 받아오는중
        this.$emit('hideoption'); // 옵션팝업, bg 일시적으로 숨기기
        axios.post(url, AjaxObj)
        .then(({data}) => {
          data['err_message'] ?
            this.$emit('callalert', data['err_message'], 'ajaxError')
          :
            this.$emit('setgiffiles', data); // 부모 data에 gif파일들 전달
        })
        .catch(err => {
          this.$emit('gifing');
          this.$emit('hideoption'); // 옵션팝업, bg 다시생성
          this.$emit('callalert', err, 'httpError');
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
    },
    keyPrevent(e){ // 숫자랑 방향키 지우기만 가능하게
      const {target : {max, value, dataset : {index, type, timevalue}}} = e;
      const allowCodes = [8,9,37,39,46,48,49,50,51,52,53,54,55,56,57,96,97,98,99,100,101,102,103,104,105];
      const allow = allowCodes.indexOf(e.keyCode);
      if(allow===-1){
        e.preventDefault()
      }else{
        switch(max){
          case '5' : 
            if(Number(value > 5)){ // 값이 5보다크면 5로
              this.options[Number(index)][type][timevalue] = 5;
            }
          break;
          case '9' : 
            if(Number(value > 9)){ // 값이 9보다크면 9로
              this.options[Number(index)][type][timevalue] = 9;
            }
          break;
        }
      }
    }
  }
}
</script>
<style>
  #setOptionsComp {
    position : absolute;
    z-index : 8;
    left : 50%;
    top : 30%;
    transform : translate(-50%, -20%);
    background : white;
    width : 80%;
    padding : 1em;
    border-radius : 0.3em;
  }
  .targetTitle .optContent {
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
  .qualityTitle {
    display : flex;
    align-items : center;
  }
  .qualityTitle .qualityQues {
    margin-left : 0.8em;
    background : #333;
    padding : 0em 0.4em;
    border-radius : 50%;
    color : white;
    font-weight : bold;
    cursor : pointer;
    position : relative;
  }
  .qualityTitle .qualityQuesText {
    position : absolute;
    bottom : 100%;
    left : 100%;
    width : 800%;
    font-size : 0.8em;
    padding : 0.6em;
    color : white;
    background : #333;
    border-radius : 0.3em;
    display : none;
    font-weight : 300;
  }
  .qualityTitle .qualityQues:hover {
    background : #444;
  }
  .qualityTitle .qualityQues:hover .qualityQuesText {
    display : block;
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
    width : 40%;
  }
  .optionWrap .timeOption .min input[type=number] {
    text-align : center;
    width : 30%;
  }
  /* .optionWrap .timeOption .min input[type=number]:hover::-webkit-inner-spin-button {
    right : 0;
    top : 0;
    width : 30%;
    height : 15px;
  } */
  .optionWrap .timeOption .sec {
    width : 50%;
  }
  .optionWrap .timeOption .sec span {
    text-align : left;
    width : 10%;
  }
  .optionWrap .timeOption .sec input[type=number] {
    width : 20%;
    text-align : center;
  }
  .optionWrap input[type=submit] {
    font-size : 1em;
    margin-top : 0.8em;
    padding : 0.3em;
    border : 0;
    background : #333;
    color : white;
    border-radius : 0.3em;
    transition : .2s;
    cursor : pointer;
  }
  .optionWrap input[type=submit]:hover {
    background : #444;
  }
</style>