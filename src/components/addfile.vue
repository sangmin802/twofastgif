<template>
  <div id="addfileComp">
    <div class="title">파일 등록하기</div>
    <form>
      <label for="addFile" class="fileLabel"
        v-multidefault="{evt : ['dragenter', 'dragover', 'dragleave', 'drop']}"
        v-alldrop="{evt : ['dragleave', 'drop']}"
      >
        Upload File
      </label>
      <input type="file" id="addFile">
    </form>
  </div>
</template>

<script>
export default {
  name : 'AddFile',
  props : ['videoinfo'],
  data(){
    return {

    }
  },
  methods : {

  },
  directives : { // 사용자 설정 디렉티브
    multidefault : { // 다수의 이벤트 디폴트
      bind(el, {value : {evt}}){
        evt.forEach(res => {
          el.addEventListener(res, (e) => {
            e.preventDefault();
            e.stopPropagation();
          });
        });
      }
    },
    // dragin : { // dargIn css 세팅 이벤트
    //   bind(el, {value : {evt}}){
        
    //   }
    // },
    alldrop : { // 파일 드롭되었을 때
      bind(el, {value : {evt}}, vnode){
        evt.forEach(res => {
          el.addEventListener(res, ({dataTransfer : {files}}) => {
            const overLimitArr = []; // 용량초과담는거
            const underLmitArr = []; // 용량가능담는거
            const limitSize = 52428800;

            files.forEach(file => { // 용량 구분
              if(file.size > limitSize){
                overLimitArr.push(file);
              }else{
                underLmitArr.push(file);
              }
            })

            if(overLimitArr.length !== 0){ // 구분후, 용량초과하는거 있으면 스낵바로 출력시키고 등록안되게
              const nameWrap = [...overLimitArr].map(res => res.name)
              vnode.context.$emit('callalert', nameWrap, 'overSize');
            }else{ // 용량 문제 없다면, App data값에 file 넣어줌
              underLmitArr.forEach(file => {
                vnode.context.$emit('updatevideo', file);
                // 푸는것은 서버에서
                // const fileReader = new FileReader();
                // fileReader.readAsDataURL(file);
                // fileReader.onload = ({target : {result}}) => {
                //   console.log(result)
                // }
              });
            }
          });
        });
      }
    }
  }
}
</script>

<style>
  .fileLabel {
    display : block;
    height : 300px;
    background : #eaeaea;
    text-align : center;
    line-height : 300px;
    border : 2px solid #666666;
  }
  #addFile {
    display : none;
  }

  .dragTarget {
    border : 2px dashed #666666;
  }
</style>
