<template>
  <div id="addfileComp">
    <!-- <div class="fileTitle">파일 등록하기</div> -->
    <form>
      <!-- 사용자 정의 디렉티브 생성후, 여러이벤트 동시처리 -->
      <label for="addFile" class="fileLabel"
        v-multidefault="{evt : ['dragenter', 'dragover', 'dragleave', 'drop']}"
        v-alldrop="{evt : ['dragleave', 'drop']}"
      >
        Upload File
      </label>
      <input @change="clickAddFile" type="file" id="addFile">
    </form>
  </div>
</template>

<script>
export default {
  name : 'AddFile',
  data(){
    return {
      limitSize : 52428800,
      types : [
        'video/avi',
        'video/x-flv',
        'video/x-ms-wmv',
        'video/quicktime',
        'video/mp4',
        'video/webm',
        'video/x-matroska',
        'video/mpeg'
      ],
    }
  },
  methods : {
    clickAddFile(e){
      const {target : {files}} = e;
      this.shareFileValid(files);
    },
    shareFileValid(_files){
      const overLimitArr = []; // 용량초과담는거
      const unValidTypeArr = []; // 파일타입적합x
      const validArr = []; // 용량가능담는거
      _files.forEach(file => { // 용량, 타입 구분
        if(file.size > this.limitSize){
          overLimitArr.push(file);
        }else{
          if(!this.types.includes(file.type)){
            unValidTypeArr.push(file);
          }else{
            validArr.push(file);
          }
        }
      })

      if(overLimitArr.length !== 0 || unValidTypeArr.length !== 0){ // 구분후, 용량초과하는거 혹은 타입에러 있으면 스낵바로 출력시키고 등록안되게
        const nameWrap = [[...overLimitArr].map(res => res.name), [...unValidTypeArr].map(res => res.name)];
        this.$emit('callalert', nameWrap, 'unValidFile');
      }else{ // 용량 문제, 타입 문제 없다면, App / data값에 file 넣어줌
        validArr.forEach(file => {
          this.$emit('updatevideo', file);
        });
      }
    }
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
            vnode.context.shareFileValid(files);
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
    height : 100px;
    background : #eaeaea;
    text-align : center;
    line-height : 100px;
    border : 2px solid #666666;
  }
  #addFile {
    display : none;
  }

  .dragTarget {
    border : 2px dashed #666666;
  }
</style>
