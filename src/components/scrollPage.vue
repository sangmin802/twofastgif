<template>
  <div id="scrollPage">
    <div class="scrollPageTitle">
      {{$t('scrollpage.title')}}
    </div>
    <div class="step1 step">
      <div class="step1Files">
        <div class="stepTitle">① {{$t('scrollpage.step11')}}</div>
        <div class="stepCont">
          <div class="stepImg">
            <img class="lazyload" :src="this.src[0]" alt="파일저장">
          </div>
          <ul class="stepText">
            <li>{{$t('scrollpage.step11Text')}}</li>
          </ul>
        </div>
      </div>
      <div class="step1Urls">
        <div class="stepTitle">① {{$t('scrollpage.step12')}}</div>
        <div class="stepCont">
          <div class="stepImg">
            <img class="lazyload" :src="this.src[1]" alt="url등록">
            <img class="lazyload" :src="this.src[2]" alt="url저장">
          </div>
          <ul class="stepText">
            <li>{{$t('scrollpage.step12Text1')}}</li>
            <li>{{$t('scrollpage.step12Text2')}}</li>
            <li>{{$t('scrollpage.step12Text3')}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="step2 step">
      <div class="stepTitle">② {{$t('scrollpage.step2')}}</div>
      <div class="stepCont">
        <div class="stepImg">
          <img class="lazyload" :src="this.src[3]" alt="개수초과">
          <img class="lazyload" :src="this.src[4]" alt="크기큼">
          <img class="lazyload" :src="this.src[5]" alt="불가능url">
        </div>
        <ul class="stepText">
          <li>{{$t('scrollpage.step2Text1')}}</li>
          <li>{{$t('scrollpage.step2Text2')}}</li>
          <li>{{$t('scrollpage.step2Text3')}}</li>
        </ul>
      </div>
    </div>
    <div class="step3 step">
      <div class="stepTitle">③ {{$t('scrollpage.step3')}}</div>
      <div class="stepCont">
        <div class="stepImg">
          <img class="lazyload" :src="this.src[6]" alt="옵션설정">
        </div>
        <ul class="stepText">
          <li>{{$t('scrollpage.step3Text1')}}</li>
          <li>{{$t('scrollpage.step3Text2')}}</li>
          <li>{{$t('scrollpage.step3Text3')}}</li>
          <li>{{$t('scrollpage.step3Text4')}}</li>
          <li>{{$t('scrollpage.step3Text5')}}</li>
        </ul>
      </div>
    </div>
    <div class="step4 step">
      <div class="stepTitle">④ {{$t('scrollpage.step4')}}</div>
      <div class="stepCont">
        <div class="stepImg">
          <img class="lazyload" :src="this.src[7]" alt="완료">
        </div>
        <ul class="stepText">
          <li>{{$t('scrollpage.step4Text1')}}</li>
          <li>{{$t('scrollpage.step4Text2')}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props : ['ismain'],
  name: 'scrollPage',
  data(){
    return {
      src : []
    }
  },
  watch : {
    ismain(newVal, oldVal){ // 받는 속성값을 확인하고, img lazy loading
      if(!newVal && this.src.length===0){
        const imgName = ['savefile', 'url', 'saveurl', 'overlength', 'oversize', 'canturl', 'setoptions', 'fin'];
        const base = 'https://d2bercmtbm1oey.cloudfront.net/static/images/webp_'
        const src = imgName.map(res => {
          return base+res+'.webp';
        });
        this.src = src;
      }
    }
  }
}
</script>

<style>
  .scrollPageTitle {
    font-size : 2em;
    color : #333; 
    font-weight : bold;
    padding-bottom : 0.3em;
  }
  .step {
    padding : 1em;
    border-top : 1px solid #eaeaea;
  }
  .step * {
    font-size : 0.9rem;
    list-style : circle;
    color : #333;
  }
  .step ul {
    margin-left  : 1.5em;
  }
  .step li {
    margin-bottom : 1em;
  }
  .step .stepTitle {
    width : 100%;
    font-size : 1.3rem;
    margin-bottom : 1em;
    font-weight : bold;
  }
  .stepCont {
    display : flex;
  }
  .stepCont .stepImg {
    width : 60%;
    display : flex;
    flex-direction : column;
    justify-content : center;
  }
  .stepCont .stepImg img {
    display : block;
    width : 100%;
    padding : 0.5em;
    border-radius : 0.3em;
    box-shadow : 3px 3px 7px #999;
    margin-bottom : 0.5em;
  }
  .stepCont .stepText {
    width : 40%;
    padding : 0.5em;
    display : flex;
    flex-direction : column;
    justify-content : center;
  }
</style>
