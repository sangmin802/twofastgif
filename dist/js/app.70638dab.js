(function(t){function e(e){for(var a,s,r=e[0],l=e[1],p=e[2],d=0,c=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&c.push(i[s][0]),i[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(c.length)c.shift()();return o.push.apply(o,p||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var l=n[r];0!==i[l]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var p=0;p<r.length;p++)e(r[p]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),i=n.n(a);i.a},"0b78":function(t,e,n){},"11b7":function(t,e,n){},"1cb2":function(t,e,n){"use strict";var a=n("11b7"),i=n.n(a);i.a},"2f2c":function(t,e,n){"use strict";var a=n("5831"),i=n.n(a);i.a},"327b":function(t,e,n){"use strict";var a=n("0b78"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.optionPopup?n("div",{staticClass:"optionsBg",on:{click:function(e){t.optionPopup=!1}}}):t._e(),t.alertInform?n("div",{staticClass:"alertBg",on:{click:function(e){t.alertInform=null}}}):t._e(),!0===t.gifIng?n("div",{staticClass:"gifIng"},[t._m(0)]):t._e(),n("transition",{attrs:{name:"alert"}},[t.alertInform?n("alert-component",{attrs:{alertobj:t.alertInform}}):t._e()],1),n("div",{staticClass:"header"},[n("div",{staticClass:"title"},[t._v("Two Fast Gif")]),n("div",{staticClass:"tabBtnWrap"},[n("span",{staticClass:"tabBtn",class:{target:"AddFileComponent"===t.compNav},on:{click:function(e){return t.navChange("AddFileComponent")}}},[t._v("파일")]),n("span",{staticClass:"tabBtn",class:{target:"AddUrlComponent"===t.compNav},on:{click:function(e){return t.navChange("AddUrlComponent")}}},[t._v("url")])])]),n("div",{staticClass:"contWrap"},[n(t.compNav,{tag:"component",on:{callalert:t.onAlert,updatevideo:t.updateVideoInfo}}),0!==t.fileInfo.length?n("div",{staticClass:"afterAddedWrap"},[n("div",{staticClass:"addedFileList"},[t._v("등록된 파일")]),n("ul",t._l(t.fileInfo,(function(e,a){return n("li",{key:a,staticClass:"addedfile"},["object"===typeof e?n("span",{staticClass:"limitLength"},[t._v(" "+t._s(e.name)+" ")]):t._e(),"string"===typeof e?n("span",{staticClass:"limitLength"},[t._v(" "+t._s(e)+" ")]):t._e(),n("span",{staticClass:"cancelFile",on:{click:function(e){return t.remove(a)}}},[t._v("✖")])])})),0),n("div",{staticClass:"setOptionsBtn",on:{click:function(e){t.optionPopup=!0}}},[n("span",[t._v(" 옵션 설정하기 ")])]),n("transition",{attrs:{name:"alert"}},[t.optionPopup?n("OptionsComponent",{staticClass:"optionPopup",attrs:{filetype:t.compNav,fileinfo:t.fileInfo},on:{callalert:t.onAlert,setgiffiles:t.getGifFiles,gifing:function(e){t.gifIng=!t.gifIng}}}):t._e()],1)],1):t._e(),0!==t.gifFiles.length?n("div",{staticClass:"createdGifs"},[t._l(t.gifFiles,(function(e){return n("div",{key:e,staticClass:"gifCont"},[n("div",{staticClass:"gifImgWrap"},[n("img",{attrs:{src:e,alt:e}})]),n("a",{attrs:{href:e,download:""}},[t._v("다운로드")])])})),n("div",{staticClass:"gifNotes"},[t._v(" * 추가진행시 이전에 변환한 gif는 사라집니다! ")])],2):t._e(),n("button",{staticClass:"howToUseBtn",on:{click:function(e){t.showHowToUse=!t.showHowToUse}}},[t._v("설명서")]),n("HowToUseComponent",{directives:[{name:"show",rawName:"v-show",value:t.showHowToUse,expression:"showHowToUse"}]})],1)],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lds-spinner"},[n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div")])}],s=(n("4160"),n("a434"),n("07ac"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"addfileComp"}},[n("form",[n("label",{directives:[{name:"multidefault",rawName:"v-multidefault",value:{evt:["dragenter","dragover","dragleave","drop"]},expression:"{evt : ['dragenter', 'dragover', 'dragleave', 'drop']}"},{name:"alldrop",rawName:"v-alldrop",value:{evt:["dragleave","drop"]},expression:"{evt : ['dragleave', 'drop']}"}],staticClass:"fileLabel",attrs:{for:"addFile"}},[t._v(" Upload File ")]),n("input",{attrs:{type:"file",id:"addFile"},on:{change:t.clickAddFile}})])])}),r=[],l=(n("99af"),n("caad"),n("d81d"),n("b0c0"),n("2532"),{name:"AddFile",data:function(){return{limitSize:52428800,types:["video/avi","video/x-flv","video/x-ms-wmv","video/quicktime","video/mp4","video/webm","video/x-matroska","video/mpeg"]}},methods:{clickAddFile:function(t){var e=t.target.files;this.shareFileValid(e)},shareFileValid:function(t){var e=this,n=[],a=[],i=[];if(t.forEach((function(t){t.size>e.limitSize?n.push(t):e.types.includes(t.type)?i.push(t):a.push(t)})),0!==n.length||0!==a.length){var o=[[].concat(n).map((function(t){return t.name})),[].concat(a).map((function(t){return t.name}))];this.$emit("callalert",o,"unValidFile")}else i.forEach((function(t){e.$emit("updatevideo",t)}))}},directives:{multidefault:{bind:function(t,e){var n=e.value.evt;n.forEach((function(e){t.addEventListener(e,(function(t){t.preventDefault(),t.stopPropagation()}))}))}},alldrop:{bind:function(t,e,n){var a=e.value.evt;a.forEach((function(e){t.addEventListener(e,(function(t){var e=t.dataTransfer.files;n.context.shareFileValid(e)}))}))}}}}),p=l,u=(n("2f2c"),n("2877")),d=Object(u["a"])(p,s,r,!1,null,null,null),c=d.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"addurlComp"}},[n("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.url1,expression:"url1"}],attrs:{type:"text",placeholder:"URL 1"},domProps:{value:t.url1},on:{input:function(e){e.target.composing||(t.url1=e.target.value)}}})]),t.url1?n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.url2,expression:"url2"}],attrs:{type:"text",placeholder:"URL 2"},domProps:{value:t.url2},on:{input:function(e){e.target.composing||(t.url2=e.target.value)}}})]):t._e(),t._m(0)])])},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("input",{attrs:{type:"submit",value:"등록"}})])}],f=(n("ac1f"),n("1276"),n("498a"),{name:"AddUrl",data:function(){return{url1:null,url2:null,fileEndTypes:["avi","flv","wmv","mov","mp4","webm","mkv","mpeg"]}},methods:{onSubmit:function(){var t=this,e=[],n=[];[this.url1,this.url2].forEach((function(a){if(a){var i=t.verifyURL(a);i?e.push(a):n.push(a)}})),0!==n.length?this.$emit("callalert",n,"unVerifyUrls"):e.forEach((function(e){t.$emit("updatevideo",e)}))},verifyURL:function(t){var e=/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/,n=this.verifyExtends(t);return!(!e.test(t)||!n)},verifyExtends:function(t){var e=t.split(/#|\?/)[0].split(".").pop().trim();return!!this.fileEndTypes.includes(e)}}}),g=f,_=(n("d3a7"),Object(u["a"])(g,v,m,!1,null,null,null)),h=_.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"alertComp"}},[n("div",{staticClass:"title"},[t._v("알림")]),"unValidFile"===t.type?n("div",[0!==t.value[0].length?n("div",[n("ul",t._l(t.value[0],(function(e,a){return n("li",{key:e,staticClass:"unValid"},[t._v(" "+t._s(a+1)+". "+t._s(e)+" ")])})),0),n("div",[t._v("위 파일의 용량이 최대 허용량 초과입니다.")])]):t._e(),0!==t.value[1].length?n("div",[n("ul",t._l(t.value[1],(function(e,a){return n("li",{key:e,staticClass:"unValid"},[t._v(" "+t._s(a+1)+". "+t._s(e)+" ")])})),0),n("div",[t._v("지원하지 않는 파일 형식입니다.")])]):t._e()]):t._e(),"httpError"===t.type?n("div",[t._v(" "+t._s(t.value)+" ")]):t._e(),"ajaxError"===t.type?n("div",[t._v(" "+t._s(t.value)+" ")]):t._e(),"overLength"===t.type?n("div",{staticClass:"overLength"},[t._v(" "+t._s(t.value)+" ")]):t._e(),"unVerifyUrls"===t.type?n("div",[n("ul",t._l(t.value,(function(e,a){return n("li",{key:e,staticClass:"unValid"},[t._v(" "+t._s(a+1)+". "+t._s(e)+" ")])})),0),n("div",[t._v("Url형식이 아니거나, 지원하지 않는 확장자입니다.")])]):t._e(),"fileOptionsError"===t.type?n("div",[n("ul",t._l(t.value,(function(e,a){return n("li",{key:e,staticClass:"unValid"},[t._v(" "+t._s(a+1)+". "+t._s(e)+" ")])})),0),n("div",[t._v("시작시간이 종료시간보다 크거나 같습니다.")])]):t._e()])},S=[],x={name:"alertComp",props:["alertobj"],data:function(){var t=this.alertobj,e=t.type,n=t.value;return{type:e,value:n}}},b=x,C=(n("9a18"),Object(u["a"])(b,y,S,!1,null,null,null)),F=C.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"setOptionsComp"}},[n("div",{staticClass:"optionsTabBtn"},t._l(t.fileinfo,(function(e,a){return n("span",{key:"optionTab"+(a+1),class:{target:t.optionTarget===a+1},on:{click:function(e){t.optionTarget=a+1}}},[t._v("Video"+t._s(a+1))])})),0),t._l(t.fileinfo,(function(e,a){return n("div",{key:"optionDetail"+(a+1),staticClass:"optionWrap"},[t.optionTarget===a+1?[n("div",{staticClass:"targetTitle"},[n("div",{staticClass:"optTitle"},[t._v("파일명")]),"object"===typeof e?n("div",{staticClass:"optContent"},[t._v(" "+t._s(e.name)+" ")]):t._e(),"string"===typeof e?n("div",{staticClass:"optContent"},[t._v(" "+t._s(e)+" ")]):t._e()]),n("form",{class:"optionForm"+(a+1),on:{submit:function(e){return e.preventDefault(),t.sendAjax(e)}}},[n("div",{staticClass:"optDetailWrap",class:"setFps"+(a+1)},[n("div",{staticClass:"optTitle"},[t._v(" FPS설정 ")]),n("div",{staticClass:"optContent"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.options[a].fps,expression:"options[index].fps"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.options[a],"fps",e.target.multiple?n:n[0])}}},[n("option",[t._v("10fps")]),n("option",{attrs:{selected:""}},[t._v("15fps")]),n("option",[t._v("25fps")])])])]),n("div",{staticClass:"optDetailWrap",class:"setScale"+(a+1)},[n("div",{staticClass:"optTitle"},[t._v(" 해상도설정 ")]),n("div",{staticClass:"optContent"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.options[a].scale,expression:"options[index].scale"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.options[a],"scale",e.target.multiple?n:n[0])}}},[n("option",[t._v("변환할 동영상 해상도(기본)")]),n("option",[t._v("가로:600px")]),n("option",[t._v("가로:480px")]),n("option",[t._v("세로:480px")]),n("option",[t._v("세로:300px")])])])]),n("div",{staticClass:"optDetailWrap",class:"setPalette"+(a+1)},[n("div",{staticClass:"optTitle"},[t._v(" 화질설정 ")]),n("div",{staticClass:"optContent qualityWrap"},[n("div",{staticClass:"highQualityWrap"},[n("label",{attrs:{for:"highQuality"}},[t._v("고화질")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.options[a].palette,expression:"options[index].palette"}],attrs:{type:"radio",checked:"",value:"1",id:"highQuality"},domProps:{checked:t._q(t.options[a].palette,"1")},on:{change:function(e){return t.$set(t.options[a],"palette","1")}}})]),n("div",{staticClass:"lowQualityWrap"},[n("label",{attrs:{for:"lowQuality"}},[t._v("저화질")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.options[a].palette,expression:"options[index].palette"}],attrs:{type:"radio",value:"0",id:"lowQuality"},domProps:{checked:t._q(t.options[a].palette,"0")},on:{change:function(e){return t.$set(t.options[a],"palette","0")}}})])])]),n("div",{staticClass:"optDetailWrap",class:"setStart"+(a+1)},[n("div",{staticClass:"optTitle"},[t._v(" 움짤 시작시간 설정 ")]),n("div",{staticClass:"optContent timeOption"},[n("div",{staticClass:"min"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.options[a].start.FM,expression:"options[index].start.FM"}],attrs:{type:"number","data-index":a,"data-type":"start","data-timevalue":"FM",min:0,max:5},domProps:{value:t.options[a].start.FM},on:{keyup:t.keyPrevent,input:function(e){e.target.composing||t.$set(t.options[a].start,"FM",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.options[a].start.SM,expression:"options[index].start.SM"}],attrs:{type:"number","data-index":a,"data-type":"start","data-timevalue":"SM",min:0,max:9},domProps:{value:t.options[a].start.SM},on:{keyup:t.keyPrevent,input:function(e){e.target.composing||t.$set(t.options[a].start,"SM",e.target.value)}}}),n("span",[t._v("분")])]),n("div",{staticClass:"sec"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.options[a].start.FS,expression:"options[index].start.FS"}],attrs:{type:"number","data-index":a,"data-type":"start","data-timevalue":"FS",min:0,max:5},domProps:{value:t.options[a].start.FS},on:{keyup:t.keyPrevent,input:function(e){e.target.composing||t.$set(t.options[a].start,"FS",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.options[a].start.SS,expression:"options[index].start.SS"}],attrs:{type:"number","data-index":a,"data-type":"start","data-timevalue":"SS",min:0,max:9},domProps:{value:t.options[a].start.SS},on:{keyup:t.keyPrevent,input:function(e){e.target.composing||t.$set(t.options[a].start,"SS",e.target.value)}}}),t._v(" : "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.options[a].start.FMS,expression:"options[index].start.FMS"}],attrs:{type:"number","data-index":a,"data-type":"start","data-timevalue":"FMS",min:0,max:9},domProps:{value:t.options[a].start.FMS},on:{keyup:t.keyPrevent,input:function(e){e.target.composing||t.$set(t.options[a].start,"FMS",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.options[a].start.SMS,expression:"options[index].start.SMS"}],attrs:{type:"number","data-index":a,"data-type":"start","data-timevalue":"SMS",min:0,max:9},domProps:{value:t.options[a].start.SMS},on:{keyup:t.keyPrevent,input:function(e){e.target.composing||t.$set(t.options[a].start,"SMS",e.target.value)}}}),n("span",[t._v("초")])])])]),n("div",{staticClass:"optDetailWrap",class:"setEnd"+(a+1)},[n("div",{staticClass:"optTitle"},[t._v(" 움짤 종료시간 설정 ")]),n("div",{staticClass:"optContent timeOption"},[n("div",{staticClass:"min"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.options[a].end.FM,expression:"options[index].end.FM"}],attrs:{type:"number","data-index":a,"data-type":"end","data-timevalue":"FM",min:0,max:5},domProps:{value:t.options[a].end.FM},on:{keyup:t.keyPrevent,input:function(e){e.target.composing||t.$set(t.options[a].end,"FM",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.options[a].end.SM,expression:"options[index].end.SM"}],attrs:{type:"number","data-index":a,"data-type":"end","data-timevalue":"SM",min:0,max:9},domProps:{value:t.options[a].end.SM},on:{keyup:t.keyPrevent,input:function(e){e.target.composing||t.$set(t.options[a].end,"SM",e.target.value)}}}),n("span",[t._v("분")])]),n("div",{staticClass:"sec"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.options[a].end.FS,expression:"options[index].end.FS"}],attrs:{type:"number","data-index":a,"data-type":"end","data-timevalue":"FS",min:0,max:5},domProps:{value:t.options[a].end.FS},on:{keyup:t.keyPrevent,input:function(e){e.target.composing||t.$set(t.options[a].end,"FS",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.options[a].end.SS,expression:"options[index].end.SS"}],attrs:{type:"number","data-index":a,"data-type":"end","data-timevalue":"SS",min:0,max:9},domProps:{value:t.options[a].end.SS},on:{keyup:t.keyPrevent,input:function(e){e.target.composing||t.$set(t.options[a].end,"SS",e.target.value)}}}),t._v(" : "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.options[a].end.FMS,expression:"options[index].end.FMS"}],attrs:{type:"number","data-index":a,"data-type":"end","data-timevalue":"FMS",min:0,max:9},domProps:{value:t.options[a].end.FMS},on:{keyup:t.keyPrevent,input:function(e){e.target.composing||t.$set(t.options[a].end,"FMS",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.options[a].end.SMS,expression:"options[index].end.SMS"}],attrs:{type:"number","data-index":a,"data-type":"end","data-timevalue":"SMS",min:0,max:9},domProps:{value:t.options[a].end.SMS},on:{keyup:t.keyPrevent,input:function(e){e.target.composing||t.$set(t.options[a].end,"SMS",e.target.value)}}}),n("span",[t._v("초")])])])]),n("input",{attrs:{type:"submit",value:"변환하기"}})])]:t._e()],2)}))],2)},M=[],k=(n("c975"),n("a9e3"),n("5319"),n("2909")),P=n("bc3a"),N=n.n(P);N.a.defaults.xsrfCookieName="csrftoken",N.a.defaults.xsrfHeaderName="x-CSRFToken";var $={name:"setOptionsComp",props:["fileinfo","filetype"],data:function(){var t=[];return Object(k["a"])(this.fileinfo).forEach((function(e,n){t[n]={file:e,scale:"변환할 동영상 해상도(기본)",fps:"15fps",palette:1,start:{FM:0,SM:0,FS:0,SS:0,FMS:0,SMS:0},end:{FM:0,SM:0,FS:0,SS:0,FMS:0,SMS:0}}})),{files:this.fileinfo,optionTarget:1,options:t}},methods:{sendAjax:function(){var t=this,e=[],n=[];if(this.options.forEach((function(a){var i=a.start,o=a.end;["FM","SM","FS","SS","FMS","SMS"].forEach((function(t){""===i[t]&&(i[t]=0),""===o[t]&&(o[t]=0)}));var s=a.file.name||a.file,r=t.changeToFullcount(i),l=t.changeToFullcount(o),p=t.timeCalc(r,l);switch(p){case!1:e.push(s);break;case!0:n.push(a);break;case"same":0===r&&0===l?n.push(a):e.push(s)}})),0!==e.length)this.$emit("callalert",e,"fileOptionsError");else{var a=Object(k["a"])(this.options),i=new FormData,o=null;switch(this.filetype){case"AddFileComponent":o="/convert/upload/";break;case"AddUrlComponent":o="/convert/urlupload/"}a.forEach((function(e,n){var a=null,o=n+1,s=e.file,r=e.fps,l=e.scale,p=e.start,u=e.end,d=e.palette;switch(n){case 0:a="first";break;case 1:a="second";break}i.append("".concat(a,"_uploaded_file"),s),i.append("fps_value_".concat(o),Number(r.replace("fps",""))),i.append("scaleValue_select_".concat(o),l),i.append("use_palette_".concat(o),d),i.append("start_".concat(o),t.returnSec(p,"start")),i.append("end_".concat(o),t.returnSec(u,"end"))})),this.$emit("gifing"),N.a.post(o,i).then((function(e){var n=e.data.dict_urls;n["err_message"]?t.$emit("callalert",n["err_message"],"ajaxError"):t.$emit("setgiffiles",n)})).catch((function(e){t.$emit("gifing"),t.$emit("callalert",e,"httpError")}))}},timeCalc:function(t,e){var n=e-t,a=null;return n<0?a=!1:n>0?a=!0:0===n&&(a="same"),a},changeToFullcount:function(t){return Number((t.FM+t.SM+t.FS+t.SS+t.FMS+t.SMS+"!").replace("!",""))},returnSec:function(t,e){var n=60*Number(t.FM+t.SM),a=Number(n+Number(t.FS+t.SS)+"."+t.FMS+t.SMS);return 0===a&&("start"===e?a=0:"end"===e&&(a=-1)),a},keyPrevent:function(t){var e=t.target,n=e.max,a=e.value,i=e.dataset,o=i.index,s=i.type,r=i.timevalue,l=[8,9,37,39,46,48,49,50,51,52,53,54,55,56,57,96,97,98,99,100,101,102,103,104,105],p=l.indexOf(t.keyCode);if(-1===p)t.preventDefault();else switch(n){case"5":Number(a>5)&&(this.options[Number(o)][s][r]=5);break;case"9":Number(a>9)&&(this.options[Number(o)][s][r]=9);break}}}},E=$,T=(n("1cb2"),Object(u["a"])(E,w,M,!1,null,null,null)),O=T.exports,j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"howToUseComp"}},[n("ol",[n("li",[t._v("동시에 2개의 동영상파일까지 gif변환 가능합니다.")]),n("li",[t._v("동영상 파일 용량제한은 50MB입니다.")]),n("li",[t._v("변환 가능한 파일형태는 mp4, webm, flv, avi, 등 다양한 동영상 파일 형태입니다.")]),n("li",[t._v("fps25는 최대 12초, fps15는 최대 20초, fps10은 최대 30초까지 변환됩니다.")]),n("li",[t._v("최대 높이는 1200px, 최대 너비는 600px입니다.")]),n("li",[t._v("해상도가 크거나 프레임이 높을수록 변환시간이 오래 걸릴 수 있습니다.")]),n("li",[t._v("시작 시간과 끝나는 시간은 소수점 두번째 자리까지 설정 가능합니다.")]),n("li",[t._v("feedback Email: mpdd1455@gmail.com")])])])}],A={name:"howToUse"},U=A,V=(n("327b"),Object(u["a"])(U,j,I,!1,null,null,null)),L=V.exports,W={name:"App",components:{AddFileComponent:c,AddUrlComponent:h,AlertComponent:F,OptionsComponent:O,HowToUseComponent:L},data:function(){return{fileInfo:[],compNav:"AddFileComponent",alertInform:null,optionPopup:!1,showHowToUse:!0,gifIng:!1,gifFiles:[]}},methods:{onAlert:function(t,e){this.alertInform={type:e,value:t}},updateVideoInfo:function(t){this.fileInfo.length>=2?this.onAlert("두개 이상 불가능합니다.","overLength"):this.fileInfo.push(t)},remove:function(t){this.fileInfo.splice(t,1)},navChange:function(t){this.compNav=t,this.fileInfo=[]},getGifFiles:function(t){var e=this;this.gifFiles=[],Object.values(t).forEach((function(t){e.gifFiles.push(t)})),this.alertInform=null,this.optionPopup=!1,this.fileInfo=[],this.gifIng=!1}}},D=W,B=(n("034f"),Object(u["a"])(D,i,o,!1,null,null,null)),H=B.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(H)}}).$mount("#app")},5831:function(t,e,n){},7549:function(t,e,n){},"85ec":function(t,e,n){},"9a18":function(t,e,n){"use strict";var a=n("7549"),i=n.n(a);i.a},d3a7:function(t,e,n){"use strict";var a=n("d500"),i=n.n(a);i.a},d500:function(t,e,n){}});
//# sourceMappingURL=app.2b4bfe39.js.map