(function(t){function e(e){for(var i,o,r=e[0],l=e[1],p=e[2],u=0,d=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);c&&c(e);while(d.length)d.shift()();return n.push.apply(n,p||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],i=!0,r=1;r<s.length;r++){var l=s[r];0!==a[l]&&(i=!1)}i&&(n.splice(e--,1),t=o(o.s=s[0]))}return t}var i={},a={app:0},n=[];function o(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=i,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(s,i,function(e){return t[e]}.bind(null,i));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var p=0;p<r.length;p++)e(r[p]);var c=l;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var i=s("85ec"),a=s.n(i);a.a},"0b78":function(t,e,s){},"11b7":function(t,e,s){},"1cb2":function(t,e,s){"use strict";var i=s("11b7"),a=s.n(i);a.a},2043:function(t){t.exports=JSON.parse('{"title":"사용설명","step11":"파일 등록","step11Text":"최대 2개까지 등록 가능합니다.","step12":"URL 등록","step12Text1":"최대 2개까지 등록 가능합니다.","step12Text2":"해당 동영상의 타입이 기재된 URL만 가능합니다.","step12Text3":"URL을 붙여넣기 한 후, 등록을 누르면 등록됩니다.","step2":"유효성 검사","step2Text1":"파일 혹은 URL 갯수가 2개 초과이면 반환 됩니다.","step2Text2":"파일 혹은 URL 각각의 용량의 크기가 허용량 초과시 반환 됩니다.","step2Text3":"GIF로 변환가능한 URL이 아닐경우, 반환 됩니다.","step3":"GIF 옵션 설정","step3Text1":"FPS가 높을수록 더욱 자연스러운 GIF가 생성됩니다.","step3Text2":"해상도 설정을 통해 원하는 크기의 GIF를 생성할 수 있습니다.","step3Text3":"화질이 높을수록 깔끔하지만, 시간이 더 오래걸립니다.","step3Text4":"시간 설정은 최대 59분 59초 99밀리초까지 가능합니다.","step3Text5":"시간 설정에 아무것도 입력하지 않을 경우, 처음부터 끝까지 생성됩니다.","step4":"GIF 변환 완료","step4Text1":"우측, 다운로드 버튼을 클릭하여 생성된 GIF를 받을 수 있습니다.","step4Text2":"GIF를 더 만들 수 있지만, 새로운 파일이나 URL을 등록한 후 변환하기 진행 시, 이전에 만들어진 GIF들은 사라집니다."}')},"2a76":function(t){t.exports=JSON.parse('{"subtitle":"GIF generator","tab1":"File","addedFile":"registered file","setOption":"To set options","downLoad":"Download","beforeAgainAlert":"The gif that was converted before the further progress will disappear.","miniHowToUse":"instruction"}')},"2f2c":function(t,e,s){"use strict";var i=s("5831"),a=s.n(i);a.a},"327b":function(t,e,s){"use strict";var i=s("0b78"),a=s.n(i);a.a},"3e46":function(t){t.exports=JSON.parse('{"li1":"동시에 2개의 동영상파일까지 gif변환 가능합니다.","li2":"변환 가능한 파일형태는 mp4, webm, flv, avi, 등 다양한 동영상 파일 형태입니다.","li3":"fps25는 최대 12초, fps15는 최대 20초, fps10은 최대 30초까지 변환됩니다.","li4":"최대 높이는 1200px, 최대 너비는 600px입니다.","li5":"해상도가 크거나 프레임이 높을수록 변환시간이 오래 걸릴 수 있습니다.","li6":"시작 시간과 끝나는 시간은 소수점 두번째 자리까지 설정 가능합니다."}')},"458d":function(t){t.exports=JSON.parse('{"insert":"등록"}')},4999:function(t,e,s){var i={"./en/addurl.json":"6a99","./en/alert.json":"e011","./en/app.json":"2a76","./en/howtouse.json":"9163","./en/scrollpage.json":"88b9","./en/setoptions.json":"65e0","./ko/addurl.json":"458d","./ko/alert.json":"99c6","./ko/app.json":"bbe7","./ko/howtouse.json":"3e46","./ko/scrollpage.json":"2043","./ko/setoptions.json":"be81"};function a(t){var e=n(t);return s(e)}function n(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=n,t.exports=a,a.id="4999"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),a=s("0086"),n=s.n(a),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:{overflowHidden:t.isPop||!t.isShownMain},attrs:{id:"app"}},[t.optionPopup?s("div",{staticClass:"optionsBg",style:{display:t.display},on:{click:function(e){t.optionPopup=!1}}}):t._e(),t.alertInform?s("div",{staticClass:"alertBg",on:{click:function(e){t.alertInform=null}}}):t._e(),!0===t.gifIng?s("div",{staticClass:"gifIng"},[t._m(0)]):t._e(),s("transition",{attrs:{name:"alert"}},[t.alertInform?s("alert-component",{attrs:{alertobj:t.alertInform}}):t._e()],1),s("transition",{attrs:{name:"alert"}},[t.optionPopup?s("OptionsComponent",{staticClass:"optionPopup",style:{display:t.display},attrs:{filetype:t.compNav,fileinfo:t.fileInfo},on:{offoptionpop:function(e){t.optionPopup=!1},callalert:t.onAlert,setgiffiles:t.getGifFiles,gifing:function(e){t.gifIng=!t.gifIng},hideoption:t.hideOption}}):t._e()],1),s("div",{staticClass:"mainHeader"},[s("div",{staticClass:"localeBtnWrap"},[s("button",{on:{click:function(e){return e.preventDefault(),t.changeLocale(e)}}},[t._v(" "+t._s("en"===t.$i18n.locale?"한국어":"English")+" ")])]),s("div",{staticClass:"title"},[t._v("Two Fast Gif")]),s("div",{staticClass:"subtitle"},[t._v(t._s(t.$t("app.subtitle")))])]),s("div",{directives:[{name:"touch",rawName:"v-touch:start",value:t.touchStart,expression:"touchStart",arg:"start"},{name:"touch",rawName:"v-touch:end",value:t.touchEventReset,expression:"touchEventReset",arg:"end"},{name:"touch",rawName:"v-touch:moving",value:t.touchMove,expression:"touchMove",arg:"moving"}],staticClass:"contWrap",class:{transition:t.isNowMoving},style:{transform:"translate("+t.position+"%)"},on:{mouseleave:t.touchEventReset}},[s("div",{staticClass:"left"},[s("ScrollPage")],1),s("div",{staticClass:"right"},[s("div",{staticClass:"tabBtnWrap"},[s("span",{staticClass:"tabBtn",class:{target:"AddFileComponent"===t.compNav},on:{click:function(e){return t.navChange("AddFileComponent")}}},[t._v(t._s(t.$t("app.tab1")))]),s("span",{staticClass:"tabBtn",class:{target:"AddUrlComponent"===t.compNav},on:{click:function(e){return t.navChange("AddUrlComponent")}}},[t._v("URL")])]),s("div",{staticClass:"rightContent"},[s(t.compNav,{tag:"component",on:{callalert:t.onAlert,updatevideo:t.updateVideoInfo}}),0!==t.fileInfo.length?s("div",{staticClass:"afterAddedWrap"},[s("div",{staticClass:"addedFileList"},[t._v(t._s(t.$t("app.addedFile")))]),s("ul",t._l(t.fileInfo,(function(e,i){return s("li",{key:i,staticClass:"addedfile"},["object"===typeof e?s("span",{staticClass:"limitLength"},[t._v(" "+t._s(e.name)+" ")]):t._e(),"string"===typeof e?s("span",{staticClass:"limitLength"},[t._v(" "+t._s(e)+" ")]):t._e(),s("span",{staticClass:"cancelFile",on:{click:function(e){return t.remove(i)}}},[t._v("✖")])])})),0),s("div",{staticClass:"setOptionsBtn",on:{click:function(e){t.optionPopup=!0}}},[s("span",[t._v(" "+t._s(t.$t("app.setOption"))+" ")])])]):t._e(),0!==t.gifFiles.length?s("div",{staticClass:"createdGifs"},[t._l(t.gifFiles,(function(e){return s("div",{key:e,staticClass:"gifCont"},[s("div",{staticClass:"gifImgWrap"},[s("img",{attrs:{src:e,alt:e}})]),s("a",{attrs:{href:e,download:""}},[t._v(t._s(t.$t("app.downLoad")))])])})),s("div",{staticClass:"gifNotes"},[t._v(" * "+t._s(t.$t("app.beforeAginAlert"))+"! ")])],2):t._e(),s("button",{staticClass:"howToUseBtn",on:{click:function(e){t.showHowToUse=!t.showHowToUse}}},[t._v(t._s(t.$t("app.miniHowToUse")))]),s("HowToUseComponent",{directives:[{name:"show",rawName:"v-show",value:t.showHowToUse,expression:"showHowToUse"}]})],1)])])],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"lds-spinner"},[s("div"),s("div"),s("div"),s("div"),s("div"),s("div"),s("div"),s("div"),s("div"),s("div"),s("div"),s("div")])}],l=(s("4160"),s("caad"),s("a434"),s("d3b7"),s("07ac"),s("2532"),s("159b"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"addfileComp"}},[s("form",[s("label",{directives:[{name:"multidefault",rawName:"v-multidefault",value:{evt:["dragenter","dragover","dragleave","drop"]},expression:"{evt : ['dragenter', 'dragover', 'dragleave', 'drop']}"},{name:"alldrop",rawName:"v-alldrop",value:{evt:["dragleave","drop"]},expression:"{evt : ['dragleave', 'drop']}"}],staticClass:"fileLabel",style:t.dragTarget,attrs:{for:"addFile"}},[t._v(" File registration ")]),s("input",{attrs:{type:"file",id:"addFile"},on:{change:t.clickAddFile}})])])}),p=[],c=(s("99af"),s("d81d"),s("b0c0"),{name:"AddFile",data:function(){return{limitSize:52428800,types:["video/avi","video/x-flv","video/x-ms-wmv","video/quicktime","video/mp4","video/webm","video/x-matroska","video/mpeg"],dragTarget:{borderStyle:"solid",color:"#999"}}},methods:{clickAddFile:function(t){var e=t.target.files;this.shareFileValid(e)},shareFileValid:function(t){var e=this,s=[],i=[],a=[];if(t.forEach((function(t){t.size>e.limitSize?s.push(t):e.types.includes(t.type)?a.push(t):i.push(t)})),0!==s.length||0!==i.length){var n=[[].concat(s).map((function(t){return t.name})),[].concat(i).map((function(t){return t.name}))];this.$emit("callalert",n,"unValidFile")}else a.forEach((function(t){e.$emit("updatevideo",t)}))}},directives:{multidefault:{bind:function(t,e,s){var i=e.value.evt;i.forEach((function(e){t.addEventListener(e,(function(t){s.context.dragTarget={borderStyle:"solid",color:"#999"},"dragover"===t.type&&(s.context.dragTarget={borderStyle:"dashed",color:"#333"}),t.preventDefault(),t.stopPropagation()}))}))}},alldrop:{bind:function(t,e,s){var i=e.value.evt;i.forEach((function(e){t.addEventListener(e,(function(t){var e=t.dataTransfer.files;s.context.shareFileValid(e)}))}))}}}}),u=c,d=(s("2f2c"),s("2877")),v=Object(d["a"])(u,l,p,!1,null,null,null),f=v.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"addurlComp"}},[s("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[s("p",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.url1,expression:"url1"}],attrs:{type:"text",placeholder:"URL 1"},domProps:{value:t.url1},on:{input:function(e){e.target.composing||(t.url1=e.target.value)}}})]),t.url1?s("p",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.url2,expression:"url2"}],attrs:{type:"text",placeholder:"URL 2"},domProps:{value:t.url2},on:{input:function(e){e.target.composing||(t.url2=e.target.value)}}})]):t._e(),s("p",[s("input",{attrs:{type:"submit"},domProps:{value:t.$t("addurl.insert")}})])])])},h=[],g=(s("ac1f"),s("1276"),s("498a"),{name:"AddUrl",data:function(){return{url1:null,url2:null,fileEndTypes:["avi","flv","wmv","mov","mp4","webm","mkv","mpeg"]}},methods:{onSubmit:function(){var t=this,e=[],s=[];[this.url1,this.url2].forEach((function(i){if(i){var a=t.verifyURL(i);a?e.push(i):s.push(i)}})),0!==s.length?this.$emit("callalert",s,"unVerifyUrls"):e.forEach((function(e){t.$emit("updatevideo",e)}))},verifyURL:function(t){var e=/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/,s=this.verifyExtends(t);return!(!e.test(t)||!s)},verifyExtends:function(t){var e=t.split(/#|\?/)[0].split(".").pop().trim();return!!this.fileEndTypes.includes(e)}}}),_=g,x=(s("d3a7"),Object(d["a"])(_,m,h,!1,null,null,null)),S=x.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"alertComp"}},[s("div",{staticClass:"title"},[t._v(t._s(t.$t("alert.alert")))]),"unValidFile"===t.type?s("div",[0!==t.value[0].length?s("div",[s("ul",t._l(t.value[0],(function(e,i){return s("li",{key:e,staticClass:"unValid"},[t._v(" "+t._s(i+1)+". "+t._s(e)+" ")])})),0),s("div",[t._v(t._s(t.$t("alert.overSize")))])]):t._e(),0!==t.value[1].length?s("div",[s("ul",t._l(t.value[1],(function(e,i){return s("li",{key:e,staticClass:"unValid"},[t._v(" "+t._s(i+1)+". "+t._s(e)+" ")])})),0),s("div",[t._v(t._s(t.$t("alert.noValid")))])]):t._e()]):t._e(),"httpError"===t.type?s("div",[t._v(" "+t._s(t.value)+" ")]):t._e(),"ajaxError"===t.type?s("div",[t._v(" "+t._s(t.value)+" ")]):t._e(),"overLength"===t.type?s("div",{staticClass:"overLength"},[t._v(" "+t._s(t.$t("alert.overLength"))+" ")]):t._e(),"unVerifyUrls"===t.type?s("div",[s("ul",t._l(t.value,(function(e,i){return s("li",{key:e,staticClass:"unValid"},[t._v(" "+t._s(i+1)+". "+t._s(e)+" ")])})),0),s("div",[t._v(t._s(t.$t("alert.notUrlValid")))])]):t._e(),"fileOptionsError"===t.type?s("div",[s("ul",t._l(t.value,(function(e,i){return s("li",{key:e,staticClass:"unValid"},[t._v(" "+t._s(i+1)+". "+t._s(e)+" ")])})),0),s("div",[t._v(t._s(t.$t("alert.timeError")))])]):t._e()])},b=[],C={name:"alertComp",props:["alertobj"],data:function(){var t=this.alertobj,e=t.type,s=t.value;return{type:e,value:s}}},w=C,T=(s("9a18"),Object(d["a"])(w,y,b,!1,null,null,null)),F=T.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"setOptionsComp"}},[t.files?[s("div",{staticClass:"optionsTabBtn"},t._l(t.fileinfo,(function(e,i){return s("span",{key:"optionTab"+(i+1),class:{target:t.optionTarget===i+1},on:{click:function(e){t.optionTarget=i+1}}},[t._v("Video"+t._s(i+1))])})),0),t._l(t.fileinfo,(function(e,i){return s("div",{key:"optionDetail"+(i+1),staticClass:"optionWrap"},[t.optionTarget===i+1?[s("div",{staticClass:"targetTitle"},[s("div",{staticClass:"optTitle"},[t._v(t._s(t.$t("setoptions.fileName")))]),"object"===typeof e?s("div",{staticClass:"optContent"},[t._v(" "+t._s(e.name)+" ")]):t._e(),"string"===typeof e?s("div",{staticClass:"optContent"},[t._v(" "+t._s(e)+" ")]):t._e()]),s("form",{class:"optionForm"+(i+1),on:{submit:function(e){return e.preventDefault(),t.sendAjax(e)}}},[s("div",{staticClass:"optDetailWrap",class:"setFps"+(i+1)},[s("div",{staticClass:"optTitle"},[t._v(" "+t._s(t.$t("setoptions.setFps"))+" ")]),s("div",{staticClass:"optContent"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.options[i].fps,expression:"options[index].fps"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.options[i],"fps",e.target.multiple?s:s[0])}}},[s("option",[t._v("10fps")]),s("option",{attrs:{selected:""}},[t._v("15fps")]),s("option",[t._v("25fps")])])])]),s("div",{staticClass:"optDetailWrap",class:"setScale"+(i+1)},[s("div",{staticClass:"optTitle"},[t._v(" "+t._s(t.$t("setoptions.setScale"))+" ")]),s("div",{staticClass:"optContent"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.options[i].scale,expression:"options[index].scale"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.options[i],"scale",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:"변환할 동영상 해상도(기본)"}},[t._v(t._s(t.$t("setoptions.setScale1")))]),s("option",{attrs:{value:"가로:600px"}},[t._v(t._s(t.$t("setoptions.setScaleW"))+":600px")]),s("option",{attrs:{value:"가로:480px"}},[t._v(t._s(t.$t("setoptions.setScaleW"))+":480px")]),s("option",{attrs:{value:"세로:480px"}},[t._v(t._s(t.$t("setoptions.setScaleH"))+":480px")]),s("option",{attrs:{value:"세로:300px"}},[t._v(t._s(t.$t("setoptions.setScaleH"))+":300px")])])])]),s("div",{staticClass:"optDetailWrap",class:"setPalette"+(i+1)},[s("div",{staticClass:"optTitle qualityTitle"},[t._v(" "+t._s(t.$t("setoptions.setQual"))+" "),s("div",{staticClass:"qualityQues"},[t._v(" ? "),s("div",{staticClass:"qualityQuesText"},[t._v(" "+t._s(t.$t("setoptions.setQualText"))+" ")])])]),s("div",{staticClass:"optContent qualityWrap"},[s("div",{staticClass:"highQualityWrap"},[s("label",{attrs:{for:"highQuality"}},[t._v(t._s(t.$t("setoptions.highQual")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.options[i].palette,expression:"options[index].palette"}],attrs:{type:"radio",checked:"",value:"1",id:"highQuality"},domProps:{checked:t._q(t.options[i].palette,"1")},on:{change:function(e){return t.$set(t.options[i],"palette","1")}}})]),s("div",{staticClass:"lowQualityWrap"},[s("label",{attrs:{for:"lowQuality"}},[t._v(t._s(t.$t("setoptions.lowQual")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.options[i].palette,expression:"options[index].palette"}],attrs:{type:"radio",value:"0",id:"lowQuality"},domProps:{checked:t._q(t.options[i].palette,"0")},on:{change:function(e){return t.$set(t.options[i],"palette","0")}}})])])]),s("div",{staticClass:"optDetailWrap",class:"setStart"+(i+1)},[s("div",{staticClass:"optTitle"},[t._v(" "+t._s(t.$t("setoptions.setStartTime"))+" ")]),s("div",{staticClass:"optContent timeOption"},[s("div",{staticClass:"min"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.options[i].start.FM,expression:"options[index].start.FM"}],attrs:{type:"number","data-index":i,"data-type":"start","data-timevalue":"FM",min:0,max:5},domProps:{value:t.options[i].start.FM},on:{keyup:t.keyPrevent,input:function(e){e.target.composing||t.$set(t.options[i].start,"FM",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.options[i].start.SM,expression:"options[index].start.SM"}],attrs:{type:"number","data-index":i,"data-type":"start","data-timevalue":"SM",min:0,max:9},domProps:{value:t.options[i].start.SM},on:{keyup:t.keyPrevent,input:function(e){e.target.composing||t.$set(t.options[i].start,"SM",e.target.value)}}}),s("span",[t._v(t._s(t.$t("setoptions.min")))])]),s("div",{staticClass:"sec"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.options[i].start.FS,expression:"options[index].start.FS"}],attrs:{type:"number","data-index":i,"data-type":"start","data-timevalue":"FS",min:0,max:5},domProps:{value:t.options[i].start.FS},on:{keyup:t.keyPrevent,input:function(e){e.target.composing||t.$set(t.options[i].start,"FS",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.options[i].start.SS,expression:"options[index].start.SS"}],attrs:{type:"number","data-index":i,"data-type":"start","data-timevalue":"SS",min:0,max:9},domProps:{value:t.options[i].start.SS},on:{keyup:t.keyPrevent,input:function(e){e.target.composing||t.$set(t.options[i].start,"SS",e.target.value)}}}),t._v(" : "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.options[i].start.FMS,expression:"options[index].start.FMS"}],attrs:{type:"number","data-index":i,"data-type":"start","data-timevalue":"FMS",min:0,max:9},domProps:{value:t.options[i].start.FMS},on:{keyup:t.keyPrevent,input:function(e){e.target.composing||t.$set(t.options[i].start,"FMS",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.options[i].start.SMS,expression:"options[index].start.SMS"}],attrs:{type:"number","data-index":i,"data-type":"start","data-timevalue":"SMS",min:0,max:9},domProps:{value:t.options[i].start.SMS},on:{keyup:t.keyPrevent,input:function(e){e.target.composing||t.$set(t.options[i].start,"SMS",e.target.value)}}}),s("span",[t._v(t._s(t.$t("setoptions.sec")))])])])]),s("div",{staticClass:"optDetailWrap",class:"setEnd"+(i+1)},[s("div",{staticClass:"optTitle"},[t._v(" "+t._s(t.$t("setoptions.setEndTime"))+" ")]),s("div",{staticClass:"optContent timeOption"},[s("div",{staticClass:"min"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.options[i].end.FM,expression:"options[index].end.FM"}],attrs:{type:"number","data-index":i,"data-type":"end","data-timevalue":"FM",min:0,max:5},domProps:{value:t.options[i].end.FM},on:{keyup:t.keyPrevent,input:function(e){e.target.composing||t.$set(t.options[i].end,"FM",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.options[i].end.SM,expression:"options[index].end.SM"}],attrs:{type:"number","data-index":i,"data-type":"end","data-timevalue":"SM",min:0,max:9},domProps:{value:t.options[i].end.SM},on:{keyup:t.keyPrevent,input:function(e){e.target.composing||t.$set(t.options[i].end,"SM",e.target.value)}}}),s("span",[t._v(t._s(t.$t("setoptions.min")))])]),s("div",{staticClass:"sec"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.options[i].end.FS,expression:"options[index].end.FS"}],attrs:{type:"number","data-index":i,"data-type":"end","data-timevalue":"FS",min:0,max:5},domProps:{value:t.options[i].end.FS},on:{keyup:t.keyPrevent,input:function(e){e.target.composing||t.$set(t.options[i].end,"FS",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.options[i].end.SS,expression:"options[index].end.SS"}],attrs:{type:"number","data-index":i,"data-type":"end","data-timevalue":"SS",min:0,max:9},domProps:{value:t.options[i].end.SS},on:{keyup:t.keyPrevent,input:function(e){e.target.composing||t.$set(t.options[i].end,"SS",e.target.value)}}}),t._v(" : "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.options[i].end.FMS,expression:"options[index].end.FMS"}],attrs:{type:"number","data-index":i,"data-type":"end","data-timevalue":"FMS",min:0,max:9},domProps:{value:t.options[i].end.FMS},on:{keyup:t.keyPrevent,input:function(e){e.target.composing||t.$set(t.options[i].end,"FMS",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.options[i].end.SMS,expression:"options[index].end.SMS"}],attrs:{type:"number","data-index":i,"data-type":"end","data-timevalue":"SMS",min:0,max:9},domProps:{value:t.options[i].end.SMS},on:{keyup:t.keyPrevent,input:function(e){e.target.composing||t.$set(t.options[i].end,"SMS",e.target.value)}}}),s("span",[t._v(t._s(t.$t("setoptions.sec")))])])])]),s("input",{attrs:{type:"submit"},domProps:{value:t.$t("setoptions.convert")}})])]:t._e()],2)}))]:t._e()],2)},k=[],M=(s("c975"),s("a9e3"),s("5319"),s("2909")),P=s("bc3a"),N=s.n(P);N.a.defaults.xsrfCookieName="csrftoken",N.a.defaults.xsrfHeaderName="x-CSRFToken";var O,U={name:"setOptionsComp",props:["fileinfo","filetype"],data:function(){var t=[];return Object(M["a"])(this.fileinfo).forEach((function(e,s){t[s]={file:e,scale:"변환할 동영상 해상도(기본)",fps:"15fps",palette:1,start:{FM:0,SM:0,FS:0,SS:0,FMS:0,SMS:0},end:{FM:0,SM:0,FS:0,SS:0,FMS:0,SMS:0}}})),{files:this.fileinfo,optionTarget:1,options:t}},methods:{sendAjax:function(){var t=this,e=[],s=[];if(this.options.forEach((function(i){var a=i.start,n=i.end;["FM","SM","FS","SS","FMS","SMS"].forEach((function(t){""===a[t]&&(a[t]=0),""===n[t]&&(n[t]=0)}));var o=i.file.name||i.file,r=t.changeToFullcount(a),l=t.changeToFullcount(n),p=t.timeCalc(r,l);switch(p){case!1:e.push(o);break;case!0:s.push(i);break;case"same":0===r&&0===l?s.push(i):e.push(o)}})),0!==e.length)this.$emit("callalert",e,"fileOptionsError");else{var i=null,a=Object(M["a"])(this.options),n=null;switch(this.filetype){case"AddFileComponent":n="/convert/upload/",i=new FormData;break;case"AddUrlComponent":n="/convert/urlupload/",i={}}a.forEach((function(e,s){var a=null,n=s+1,o=e.file,r=e.fps,l=e.scale,p=e.start,c=e.end,u=e.palette;switch(s){case 0:a="first";break;case 1:a="second";break}switch(t.filetype){case"AddFileComponent":i.append("".concat(a,"_uploaded_file"),o),i.append("fps_value_".concat(n),Number(r.replace("fps",""))),i.append("scaleValue_select_".concat(n),l),i.append("use_palette_".concat(n),u),i.append("start_".concat(n),t.returnSec(p,"start")),i.append("end_".concat(n),t.returnSec(c,"end"));break;case"AddUrlComponent":i["uploadURL_".concat(n)]=o,i["URL_fps_value_".concat(n)]=Number(r.replace("fps","")),i["URL_scaleValue_select_".concat(n)]=l,i["URL_start_".concat(n)]=t.returnSec(p,"start"),i["URL_end_".concat(n)]=t.returnSec(c,"end"),i["use_palette_".concat(n)]=u}})),this.$emit("gifing"),this.$emit("hideoption"),N.a.post(n,i).then((function(e){var s=e.data;s["err_message"]?t.$emit("callalert",s["err_message"],"ajaxError"):t.$emit("setgiffiles",s)})).catch((function(e){t.$emit("gifing"),t.$emit("hideoption"),t.$emit("callalert",e,"httpError")}))}},timeCalc:function(t,e){var s=e-t,i=null;return s<0?i=!1:s>0?i=!0:0===s&&(i="same"),i},changeToFullcount:function(t){return Number((t.FM+t.SM+t.FS+t.SS+t.FMS+t.SMS+"!").replace("!",""))},returnSec:function(t,e){var s=60*Number(t.FM+t.SM),i=Number(s+Number(t.FS+t.SS)+"."+t.FMS+t.SMS);return 0===i&&("start"===e?i=0:"end"===e&&(i=-1)),i},keyPrevent:function(t){var e=t.target,s=e.max,i=e.value,a=e.dataset,n=a.index,o=a.type,r=a.timevalue,l=[8,9,37,39,46,48,49,50,51,52,53,54,55,56,57,96,97,98,99,100,101,102,103,104,105],p=l.indexOf(t.keyCode);if(-1===p)t.preventDefault();else switch(s){case"5":Number(i>5)&&(this.options[Number(n)][o][r]=5);break;case"9":Number(i>9)&&(this.options[Number(n)][o][r]=9);break}}}},I=U,E=(s("1cb2"),Object(d["a"])(I,$,k,!1,null,null,null)),L=E.exports,j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"howToUseComp"}},[s("ol",[s("li",[t._v(t._s(t.$t("howtouse.li1")))]),s("li",[t._v(t._s(t.$t("howtouse.li2")))]),s("li",[t._v(t._s(t.$t("howtouse.li3")))]),s("li",[t._v(t._s(t.$t("howtouse.li4")))]),s("li",[t._v(t._s(t.$t("howtouse.li5")))]),s("li",[t._v(t._s(t.$t("howtouse.li6")))]),s("li",[t._v("feedback Email: mpdd1455@gmail.com")])])])},R=[],A={name:"howToUse"},V=A,G=(s("327b"),Object(d["a"])(V,j,R,!1,null,null,null)),Q=G.exports,W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"scrollPage"}},[s("div",{staticClass:"scrollPageTitle"},[t._v(" "+t._s(t.$t("scrollpage.title"))+" ")]),s("div",{staticClass:"step1 step"},[s("div",{staticClass:"step1Files"},[s("div",{staticClass:"stepTitle"},[t._v("① "+t._s(t.$t("scrollpage.step11")))]),s("div",{staticClass:"stepCont"},[t._m(0),s("ul",{staticClass:"stepText"},[s("li",[t._v(t._s(t.$t("scrollpage.step11Text")))])])])]),s("div",{staticClass:"step1Urls"},[s("div",{staticClass:"stepTitle"},[t._v("① "+t._s(t.$t("scrollpage.step12")))]),s("div",{staticClass:"stepCont"},[t._m(1),s("ul",{staticClass:"stepText"},[s("li",[t._v(t._s(t.$t("scrollpage.step12Text1")))]),s("li",[t._v(t._s(t.$t("scrollpage.step12Text2")))]),s("li",[t._v(t._s(t.$t("scrollpage.step12Text3")))])])])])]),s("div",{staticClass:"step2 step"},[s("div",{staticClass:"stepTitle"},[t._v("② "+t._s(t.$t("scrollpage.step2")))]),s("div",{staticClass:"stepCont"},[t._m(2),s("ul",{staticClass:"stepText"},[s("li",[t._v(t._s(t.$t("scrollpage.step2Text1")))]),s("li",[t._v(t._s(t.$t("scrollpage.step2Text2")))]),s("li",[t._v(t._s(t.$t("scrollpage.step2Text3")))])])])]),s("div",{staticClass:"step3 step"},[s("div",{staticClass:"stepTitle"},[t._v("③ "+t._s(t.$t("scrollpage.step3")))]),s("div",{staticClass:"stepCont"},[t._m(3),s("ul",{staticClass:"stepText"},[s("li",[t._v(t._s(t.$t("scrollpage.step3Text1")))]),s("li",[t._v(t._s(t.$t("scrollpage.step3Text2")))]),s("li",[t._v(t._s(t.$t("scrollpage.step3Text3")))]),s("li",[t._v(t._s(t.$t("scrollpage.step3Text4")))]),s("li",[t._v(t._s(t.$t("scrollpage.step3Text5")))])])])]),s("div",{staticClass:"step4 step"},[s("div",{staticClass:"stepTitle"},[t._v("④ "+t._s(t.$t("scrollpage.step4")))]),s("div",{staticClass:"stepCont"},[t._m(4),s("ul",{staticClass:"stepText"},[s("li",[t._v(t._s(t.$t("scrollpage.step4Text1")))]),s("li",[t._v(t._s(t.$t("scrollpage.step4Text2")))])])])])])},D=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"stepImg"},[s("img",{attrs:{src:"img/savefile.png",alt:"파일저장"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"stepImg"},[s("img",{attrs:{src:"img/url.png",alt:"url등록"}}),s("img",{attrs:{src:"img/saveurl.png",alt:"url저장"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"stepImg"},[s("img",{attrs:{src:"img/overlength.png",alt:"개수초과"}}),s("img",{attrs:{src:"img/oversize.png",alt:"크기큼"}}),s("img",{attrs:{src:"img/canturl.png",alt:"불가능url"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"stepImg"},[s("img",{attrs:{src:"img/setoptions.png",alt:"옵션설정"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"stepImg"},[s("img",{attrs:{src:"img/fin.png",alt:"완료"}})])}],H={name:"scrollPage",data:function(){return{}},methods:{}},J=H,q=(s("95a1"),Object(d["a"])(J,W,D,!1,null,null,null)),z=q.exports,B={name:"App",components:{AddFileComponent:f,AddUrlComponent:S,AlertComponent:F,OptionsComponent:L,HowToUseComponent:Q,ScrollPage:z},computed:{isPop:function(){var t=!1;return[this.alertInform,this.optionPopup,this.gifIng].forEach((function(e){e&&(t=!0)})),t}},data:function(){return{fileInfo:[],compNav:"AddFileComponent",alertInform:null,optionPopup:!1,showHowToUse:!0,gifIng:!1,gifFiles:[],startPoint:null,gap:null,isNowMoving:!1,isShownMain:!0,position:0,display:"block"}},created:function(){var t=navigator.language||navigator.userLanguage;t=t.substring(0,2),"ko"!==t&&(t="en"),this.$i18n.locale=t},methods:{changeLocale:function(){"en"===this.$i18n.locale?this.$i18n.locale="ko":this.$i18n.locale="en"},onAlert:function(t,e){this.alertInform={type:e,value:t}},updateVideoInfo:function(t){this.fileInfo.length>=2?this.onAlert(null,"overLength"):this.fileInfo.push(t)},remove:function(t){this.fileInfo.splice(t,1)},navChange:function(t){this.compNav=t,this.fileInfo=[]},getGifFiles:function(t){var e=this;this.gifFiles=[],Object.values(t).forEach((function(t){e.gifFiles.push(t)})),this.optionPopup=!1,this.display="block",this.alertInform=null,this.fileInfo=[],this.gifIng=!1},hideOption:function(){"none"===this.display?this.display="block":this.display="none"},touchStart:function(t){var e=null;e=t.type.includes("touch")?t.touches[0].clientX:t.clientX,this.startPoint=e},touchMove:function(t){var e=this,s=null;s=t.type.includes("touch")?t.touches[0].clientX:t.clientX,this.gap=this.startPoint-s;var i=window.innerWidth,a=.3*i;if(this.startPoint&&!this.isNowMoving)if(this.gap>=a||this.gap<=-a){var n=null;this.gap>=a?n="right":this.gap<=-a&&(n="left"),this.moving(n).then((function(){e.startPoint=null,e.isNowMoving=!1}))}else this.beforeMoving(i)},beforeMoving:function(t){var e=105,s=this.gap;if(s<0&&(s*=-1),this.startPoint){var i=s/t*e;return this.gap<0?void(this.isShownMain&&(this.position=i)):void(this.isShownMain||(this.position=e-i))}},moving:function(t){var e=this;return new Promise((function(s){switch(e.isNowMoving=!0,t){case"right":!0===e.isShownMain&&s(),e.isShownMain=!0,e.position=0;break;case"left":!1===e.isShownMain&&s(),e.isShownMain=!1,e.position=105;break}setTimeout((function(){s()}),300)}))},touchEventReset:function(){this.isShownMain?this.position=0:this.position=105,this.gap=null,this.isNowMoving=!1,this.startPoint=null}}},Y=B,X=(s("034f"),Object(d["a"])(Y,o,r,!1,null,null,null)),K=X.exports,Z=(s("13d5"),s("ddb0"),s("b85c")),tt=s("a925"),et=s("4999"),st={},it=Object(Z["a"])(et.keys());try{var at=function(){var t=O.value;if("./index.js"===t)return"continue";var e=t.replace(/(\.\/|\.json$)/g,"").split("/");e.reduce((function(s,i,a){return s[i]||(s[i]=a+1===e.length?et(t):{}),s[i]}),st)};for(it.s();!(O=it.n()).done;)at()}catch(rt){it.e(rt)}finally{it.f()}i["a"].use(tt["a"]);var nt=new tt["a"]({locale:"ko",fallbackLocale:"ko",messages:st,silentTranslationWarn:!0}),ot=nt;i["a"].config.productionTip=!1,i["a"].use(n.a),new i["a"]({i18n:ot,render:function(t){return t(K)}}).$mount("#app")},5831:function(t,e,s){},"65e0":function(t){t.exports=JSON.parse('{"fileName":"File name","setFps":"FPS Settings","setScale":"Resolution setting","setScale1":"Video Resolution to Convert (Default)","setScaleW":"width","setScaleH":"height","setQual":"Quality setting","setQualText":"For high quality, gif quality is good, but conversion speed is slower than low quality.","highQual":"High-definition","lowQual":"Low-definition","setStartTime":"Set GIF Start Time","setEndTime":"Set GIF End Time","min":"Min","sec":"Sec","convert":"To transform"}')},"6a99":function(t){t.exports=JSON.parse('{"insert":"Registration"}')},7549:function(t,e,s){},"85ec":function(t,e,s){},"88b9":function(t){t.exports=JSON.parse('{"title":"User Description","step11":"File registration","step11Text":"You can register up to two.","step12":"URL registration","step12Text1":"You can register up to two.","step12Text2":"Only URL with video type is allowed.","step12Text3":"After pasting the URL, click Publish to register.","step2":"Validation","step2Text1":"If there are more than 2 files or URLs, they can be returned.","step2Text2":"The size of each capacity of the file or URL is returned if it exceeds the allowed amount.","step2Text3":"If it is not a convertible URL to GIF, it will be returned.","step3":"Setting GIF Options","step3Text1":"FPS is higher-than-natural GIFs are created.","step3Text2":"Resolution settings let you create a GIF of any size.","step3Text3":"The higher the quality, the cleaner, but it takes longer.","step3Text4":"You can set the time up to 59 minutes 59 seconds 99 milliseconds.","step3Text5":"If you enter nothing in the time setting, it is created from beginning to end.","step4":"Complete GIF Transformation","step4Text1":"Right, click the Download button to receive the generated GIF.","step4Text2":"You can create more GIFs, but when you register new files or URLs and convert them, the previously created GIFs disappear."}')},"8c82":function(t,e,s){},9163:function(t){t.exports=JSON.parse('{"li1":"You can convert up to 2 video files at the same time.","li2":"Convertible file types are various video file types such as mp4, webm, flv, avi, etc.","li3":"fps25 converts up to 12 seconds, fps15 up to 20 seconds, and fps10 up to 30 seconds.","li4":"Maximum height is 1200px and maximum width is 600px.","li5":"The higher the resolution or the higher the frame, the longer the transition may take.","li6":"The start and end times can be set to the second decimal place."}')},"95a1":function(t,e,s){"use strict";var i=s("8c82"),a=s.n(i);a.a},"99c6":function(t){t.exports=JSON.parse('{"alert":"알림","overSize":"위 파일의 용량이 최대 허용량 초과입니다.","noValid":"지원하지 않는 파일 형식입니다.","notUrlValid":"Url형식이 아니거나, 지원하지 않는 확장자입니다.","overLength":"최대 진행 가능 갯수를 초과하였습니다.","timeError":"시작시간이 종료시간보다 크거나 같습니다."}')},"9a18":function(t,e,s){"use strict";var i=s("7549"),a=s.n(i);a.a},bbe7:function(t){t.exports=JSON.parse('{"subtitle":"움짤생성기","tab1":"파일","addedFile":"등록된 파일","setOption":"옵션 설정하기","downLoad":"다운로드","beforeAgainAlert":"추가진행시 이전에 변환한 gif는 사라집니다","miniHowToUse":"설명서"}')},be81:function(t){t.exports=JSON.parse('{"fileName":"파일명","setFps":"FPS설정","setScale":"해상도설정","setScale1":"변환할 동영상 해상도(기본)","setScaleW":"가로","setScaleH":"세로","setQual":"화질설정","setQualText":"고화질의 경우 gif의 퀄리티가 좋지만, 저화질에 비해 변환속도가 느립니다.","highQual":"고화질","lowQual":"저화질","setStartTime":"움짤 시작시간 설정","setEndTime":"움짤 종료시간 설정","min":"분","sec":"초","convert":"변환하기"}')},d3a7:function(t,e,s){"use strict";var i=s("d500"),a=s.n(i);a.a},d500:function(t,e,s){},e011:function(t){t.exports=JSON.parse('{"alert":"Notification","overSize":"The capacity of the above file exceeds the maximum allowed.","noValid":"Unsupported file type.","overLength":"You have exceeded the maximum number of possible progresses.","notUrlValid":"Non-Url format, or unsupported extension.","timeError":"The start time is greater than or equal to the end time."}')}});
//# sourceMappingURL=app.8d4e602c.js.map