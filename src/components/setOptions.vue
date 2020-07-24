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
              <select v-model="options['file'+(index+1)].fps">
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
              <select v-model="options['file'+(index+1)].scale">
                <option>기본값</option>
                <option>가로 600px</option>
                <option>가로 480px</option>
                <option>세로 480px</option>
                <option>세로 300px</option>
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
                <input @keydown.prevent v-model="options['file'+(index+1)].start.FM" type="number" min="0" max="5">
                <input @keydown.prevent v-model="options['file'+(index+1)].start.SM" type="number" min="0" max="9">
              </div>
              <div class="sec">
                <span>초</span>
                <input @keydown.prevent v-model="options['file'+(index+1)].start.FS" type="number" min="0" max="5">
                <input @keydown.prevent v-model="options['file'+(index+1)].start.SS" type="number" min="0" max="9">
                :
                <input @keydown.prevent v-model="options['file'+(index+1)].start.FMS" type="number" min="0" max="9">
                <input @keydown.prevent v-model="options['file'+(index+1)].start.SMS" type="number" min="0" max="9">
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
                <input @keydown.prevent v-model="options['file'+(index+1)].end.FM" type="number" min="0" max="5">
                <input @keydown.prevent v-model="options['file'+(index+1)].end.SM" type="number" min="0" max="9">
              </div>
              <div class="sec">
                <span>초</span>
                <input @keydown.prevent v-model="options['file'+(index+1)].end.FS" type="number" min="0" max="5">
                <input @keydown.prevent v-model="options['file'+(index+1)].end.SS" type="number" min="0" max="9">
                :
                <input @keydown.prevent v-model="options['file'+(index+1)].end.FMS" type="number" min="0" max="9">
                <input @keydown.prevent v-model="options['file'+(index+1)].end.SMS" type="number" min="0" max="9">
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
  props : ['fileinfo'],
  data(){
    const options = {};
    // 부모에게 받아오는 파일의 갯수애 따라 data값 생성
    [...this.fileinfo].forEach((file, index) => {
      options[`file${index+1}`] = {
        file,
        scale : '기본값',
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
      console.log('보냄')
    }
  }
}
</script>

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
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
</style>

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