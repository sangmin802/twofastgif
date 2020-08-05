<template>
  <div id="alertComp">
    <div class="title">알림</div>
    <div v-if="type==='unValidFile'">
      <div v-if="value[0].length!==0">
        <ul>
          <li v-for="(name, index) of value[0]" :key="name" class="unValid">
            {{index+1}}. {{name}}
          </li>
        </ul>
        <div>위 파일의 용량이 최대 허용량 초과입니다.</div>
      </div>
      <div v-if="value[1].length!==0">
        <ul>
          <li v-for="(name, index) of value[1]" :key="name" class="unValid">
            {{index+1}}. {{name}}
          </li>
        </ul>
        <div>지원하지 않는 파일 형식입니다.</div>
      </div>
    </div>
    <div v-if="type==='httpError'">
      {{value}}
    </div>
    <div v-if="type==='ajaxError'">
      {{value}}
    </div>
    <div v-if="type==='overLength'" class="overLength">
      {{value}}
    </div>
    <div v-if="type==='unVerifyUrls'">
      <ul>
        <li v-for="(name, index) of value" :key="name" class="unValid">
          {{index+1}}. {{name}}
        </li>
      </ul>
      <div>Url형식이 아니거나, 지원하지 않는 확장자입니다.</div>
    </div>
    <div v-if="type==='fileOptionsError'">
      <ul>
        <li v-for="(name, index) of value" :key="name" class="unValid">
          {{index+1}}. {{name}}
        </li>
      </ul>
      <div>시작시간이 종료시간보다 크거나 같습니다.</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'alertComp',
  props : ['alertobj'],
  data(){
    const {type, value} = this.alertobj
    return {
      type,
      value
    }
  }
}
</script>

<style>
  #alertComp {
    width : 60%;
    position: absolute;
    transform: translate(-50%);
    left: 50%;
    top: 20%;
    background : white;
    z-index : 10;
    padding : 1.5em;
    border-radius : 0.3em;
  }
  #alertComp * {
    color : black;
  }
  #alertComp .title {
    font-size : 1em;
    font-weight : 500;
  }
  #alertComp ul {
    margin : 1em 0 0 0.3em;
  }
  #alertComp ul li {
    margin-bottom : 0.5em;
    font-size : 0.8em;
  }
  #alertComp .overLength {
    margin : 1em 0 0 0.3em;
    font-size : 0.8em;
  }
  .unValid {
    width : 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
</style>
