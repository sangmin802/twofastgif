import Vue from 'vue'
import Vue2TouchEvents from 'vue2-touch-events'; // 터치이벤트
import App from './App.vue'
import i18n from '@/lang' // lang 디렉토리의 index.js 를 읽어옴.

Vue.config.productionTip = false
Vue.use(Vue2TouchEvents);
console.log(navigator.language)
new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')