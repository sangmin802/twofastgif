<template>
  <div id="addurlComp">
    <!-- <div class="urlTitle">URL 등록하기</div> -->
    <!-- <p>
      <button @click="moreUrl = !moreUrl">
        <span v-if="!moreUrl">추가하기</span>
        <span v-if="moreUrl">제거하기</span>
      </button>
    </p> -->
    <form @submit.prevent="onSubmit" >
      <p>
        <input type="text" v-model="url1" placeholder="URL 1">
      </p>
      <p v-if="url1">
        <input type="text" v-model="url2" placeholder="URL 2">
      </p>
      <p>
        <input type="submit" value="등록">
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddUrl',
  data(){
    return {
      // moreUrl : false, // url입력창 추가하기
      url1 : null, // url1
      url2 : null, // url2
      fileEndTypes: [ // 지원하는 확장자
        'avi',
        'flv',
        'wmv',
        'mov',
        'mp4',
        'webm',
        'mkv',
        'mpeg',
      ],
    }
  },
  methods : {
    onSubmit(){ // url 제출시
      const verifyUrls = []; // 유효성검사 통과
      const unVerifyUrls = []; // 유효성검사 미통과
      [this.url1, this.url2].forEach(res => {
        if(res){
          const verify = this.verifyURL(res);
          verify ? 
            verifyUrls.push(res) // 지원하는확장자 + url형식이면 합격
            : 
            unVerifyUrls.push(res); // 둘중 하나라도아니면 불합격
        }
      })

      
      if(unVerifyUrls.length !== 0){ // 미통과 url 있을 시, 중단하고 스낵바
        this.$emit('callalert', unVerifyUrls, 'unVerifyUrls');
      }else{ // 모두 통과라면, App / data에 등록
        verifyUrls.forEach(url => {
          this.$emit('updatevideo', url);
        })
      }
    },
    verifyURL(checkURL){ // url형식 여부
      const pattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/;
      const fileExtend = this.verifyExtends(checkURL);
      if(pattern.test(checkURL) && fileExtend){
        return true;
      }else{
        return false;
      }
    },
    verifyExtends(url){ // 지원하는 확장자인지 여부
      const fileExtends = url.split(/#|\?/)[0].split('.').pop().trim();
      // const lowerCase = fileExtends.toLowerCase()
      if(this.fileEndTypes.includes(fileExtends)){
        return true;
      }else{
        return false;
      }
    },
  }
}
</script>

<style>
  #addurlComp p {
    margin-bottom : 0.5em;
  }
  #addurlComp p input[type="text"] {
    display : inline-block;
    width : 80%;
    border : 0;
    border-bottom : 1px solid #eaeaea;
    padding : 0.3em;
    font-size : 0.9em;
  }
  #addurlComp p input[type="submit"] {
    font-size : 0.9em;
    border : 0;
    padding : 0.3em;
    margin-top : 0.5em;
    border-radius : 0.3em;
    color : white;
    background : #4876ef;
    cursor : pointer;
    transition : .2s;
  }
  #addurlComp p input[type="submit"]:hover {
    background : #2353D2;
  }
</style>
