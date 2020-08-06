<template>
  <div id="howToUseComp">
    <ol>
      <li>{{$t('howtouse.li1')}}</li>
      <li>{{$t('howtouse.li2')}}</li>
      <li>{{$t('howtouse.li3')}}</li>
      <li>{{$t('howtouse.li4')}}</li>
      <li>{{$t('howtouse.li5')}}</li>
      <li>{{$t('howtouse.li6')}}</li>
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
    margin-top : 1em;
  }
  #howToUseComp ol li {
    list-style : circle;
    font-size : 0.9em;
    color : #111;
    margin-top : 0.3em;
  }
</style>
