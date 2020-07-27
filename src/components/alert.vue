<template>
  <div id="alertComp">
    <div class="title">알림</div>
    <ul v-if="type==='overSize'">
      <li v-for="(name, index) of value" :key="name" class="limitLength">
        {{index+1}}. {{name}}
      </li>
      <div>위 파일의 용량이 최대 허용량 초과입니다.</div>
    </ul>
    <div v-if="type==='overLength'">
      {{value}}
    </div>
    <ul v-if="type==='unVerifyUrls'">
      <li v-for="(name, index) of value" :key="name" class="limitLength">
        {{index+1}}. {{name}}
      </li>
      <div>Url형식이 아니거나, 지원하지 않는 확장자입니다.</div>
    </ul>
    <ul v-if="type==='fileOptionsError'">
      <li v-for="(name, index) of value" :key="name" class="limitLength">
        {{index+1}}. {{name}}
      </li>
      <div>시작시간이 종료시간보다 크거나 같습니다.</div>
    </ul>
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
  }
  .limitLength {
    width : 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
</style>
