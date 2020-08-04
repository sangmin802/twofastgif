<template>
  <div id="alertComp"
    :class="{backgroundNone : type==='gifIng'}"
  >
    <div class="title"
      v-if="type!=='gifIng'"
    >알림</div>
    <div v-if="type==='overSize'">
      <ul >
        <li v-for="(name, index) of value" :key="name" class="limitLength">
          {{index+1}}. {{name}}
        </li>
      </ul>
      <div>위 파일의 용량이 최대 허용량 초과입니다.</div>
    </div>
    <div v-if="type==='overLength'" class="overLength">
      {{value}}
    </div>
    <div v-if="type==='unVerifyUrls'">
      <ul>
        <li v-for="(name, index) of value" :key="name" class="limitLength">
          {{index+1}}. {{name}}
        </li>
      </ul>
      <div>Url형식이 아니거나, 지원하지 않는 확장자입니다.</div>
    </div>
    <div v-if="type==='fileOptionsError'">
      <ul>
        <li v-for="(name, index) of value" :key="name" class="limitLength">
          {{index+1}}. {{name}}
        </li>
      </ul>
      <div>시작시간이 종료시간보다 크거나 같습니다.</div>
    </div>
    <div v-if="type==='gifIng'">
      <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
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
  .limitLength {
    width : 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .backgroundNone {
    background : none !important;
  }
.lds-spinner {
  color: official;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  left : 50%;
  transform : translate(-50%);
}
.lds-spinner div {
  transform-origin: 40px 40px;
  animation: lds-spinner 1.2s linear infinite;
}
.lds-spinner div:after {
  content: " ";
  display: block;
  position: absolute;
  top: 3px;
  left: 37px;
  width: 6px;
  height: 18px;
  border-radius: 20%;
  background: #fff;
}
.lds-spinner div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -1.1s;
}
.lds-spinner div:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: -1s;
}
.lds-spinner div:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: -0.9s;
}
.lds-spinner div:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: -0.8s;
}
.lds-spinner div:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: -0.7s;
}
.lds-spinner div:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: -0.6s;
}
.lds-spinner div:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: -0.5s;
}
.lds-spinner div:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: -0.4s;
}
.lds-spinner div:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: -0.3s;
}
.lds-spinner div:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: -0.2s;
}
.lds-spinner div:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: -0.1s;
}
.lds-spinner div:nth-child(12) {
  transform: rotate(330deg);
  animation-delay: 0s;
}
@keyframes lds-spinner {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
