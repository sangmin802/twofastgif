<template>
  <div id="alertComp">
    <div class="title">알림</div>
    <ul v-if="type==='overSize'">
      <li v-for="(name, index) of value" :key="name">
        {{index+1}}. {{name}}
      </li>
      <div>위 파일의 용량이 최대 허용량 초과입니다.</div>
    </ul>
    <div v-if="type==='overLength'">
      {{value}}
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

</style>
