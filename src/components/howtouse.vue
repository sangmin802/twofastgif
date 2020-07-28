<template>
  <div id="howToUseComp">
    <ol>
      <li>동시에 2개의 동영상파일까지 gif변환 가능합니다.</li>
      <li>동영상 파일 용량제한은 50MB입니다.</li>
      <li>변환 가능한 파일형태는 mp4, webm, flv, avi, 등 다양한 동영상 파일 형태입니다.</li>
      <li>fps25는 최대 12초, fps15는 최대 20초, fps10은 최대 30초까지 변환됩니다.</li>
      <li>최대 높이는 1200px, 최대 너비는 600px입니다.</li>
      <li>해상도가 크거나 프레임이 높을수록 변환시간이 오래 걸릴 수 있습니다.</li>
      <li>시작 시간과 끝나는 시간은 소수점 두번째 자리까지 설정 가능합니다.</li>
      <li>feedback Email: mpdd1455@gmail.com</li>
    </ol>
  </div>
</template>

<script>

export default {
  name: 'howToUse',
}
</script>

<style>
  #howToUseComp ol {
    margin-left : 1.5em;
  }
  #howToUseComp ol li {
    list-style : circle;
    font-size : 0.9em;
    color : #666;
    margin-top : 0.3em;
  }
</style>
