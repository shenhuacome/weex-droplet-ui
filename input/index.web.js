// { "framework": "Vue" }

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["npm/weex-droplet-ui/example/input/index"]=t():e["npm/weex-droplet-ui/example/input/index"]=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=207)}({0:function(e,t){e.exports=function(e,t,n,r,o){var i,s=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(i=e,s=e.default);var u="function"==typeof s?s.options:s;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),r&&(u._scopeId=r);var c;if(o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=c):n&&(c=n),c){var l=u.functional,f=l?u.render:u.beforeCreate;l?u.render=function(e,t){return c.call(t),f(e,t)}:u.beforeCreate=f?[].concat(f,c):[c]}return{esModule:i,exports:s,options:u}}},1:function(e,t,n){"use strict";function r(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=r(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},11:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={roundclose:"",success:"",search:"",enter:"",back:""}},13:function(e,t,n){t=e.exports=n(1)(!1),t.push([e.i,".icon-font[data-v-7bfc623c]{font-family:dropletUiIconfont;color:#666;font-size:.42667rem}",""])},15:function(e,t,n){function r(e){n(19)}var o=n(0)(n(9),n(17),r,"data-v-7bfc623c",null);e.exports=o.exports},159:function(e,t,n){function r(e){n(275)}var o=n(0)(n(182),n(250),r,null,null);e.exports=o.exports},17:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("p",{staticClass:"icon-font weex-el weex-text",style:e._processExclusiveStyle(e.iconStyle,75,"text"),attrs:{"weex-type":"text"}},[e._v(e._s(e.Icon[e.name]))])},staticRenderFns:[]}},182:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(20),i=r(o),s=n(4),a=r(s);t.default={data:function(){return{}},components:{WxInput:i.default,WxIcon:a.default}}},19:function(e,t,n){var r=n(13);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("8fb6fae8",r,!0,{})},2:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=l[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(i(n.parts[o]));l[n.id]={id:n.id,refs:1,parts:s}}}}function o(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function i(e){var t,n,r=document.querySelector("style["+m+'~="'+e.id+'"]');if(r){if(v)return x;r.parentNode.removeChild(r)}if(y){var i=p++;r=d||(d=o()),t=s.bind(null,r,i,!1),n=s.bind(null,r,i,!0)}else r=o(),t=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function s(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function a(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),h.ssrId&&e.setAttribute(m,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(6),l={},f=u&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,v=!1,x=function(){},h=null,m="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,o){v=n,h=o||{};var i=c(e,t);return r(i),function(t){for(var n=[],o=0;o<i.length;o++){var s=i[o],a=l[s.id];a.refs--,n.push(a)}t?(i=c(e,t),r(i)):i=[];for(var o=0;o<n.length;o++){var a=n[o];if(0===a.refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete l[a.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},20:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(33);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o).default}})},207:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(159),o=function(e){return e&&e.__esModule?e:{default:e}}(r);o.default.el="#root",t.default=new Vue(o.default)},225:function(e,t,n){t=e.exports=n(1)(!1),t.push([e.i,".demo{margin-top:.69333rem;margin-left:.53333rem;margin-right:.53333rem}.icon{font-size:.58667rem;color:#dedede;width:1.33333rem;height:1.33333rem;text-align:center;line-height:1.33333rem}",""])},24:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=function(e){return e&&e.__esModule?e:{default:e}}(r);weex.requireModule("modal");t.default={mixins:[o.default],props:{type:{type:String,default:"text"},icon:{type:String},tail:{type:String},placeholder:{type:String},value:{type:String},disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},maxlength:{type:String},iconStyle:{type:Object},tailStyle:{type:Object},width:{type:String},bgColor:{type:String,default:"#f8f8f8"}},data:function(){return{style:{width:this.width,"background-color":this.bgColor},inputValue:""}},methods:{onblur:function(e){this.preventDefault(e),this.$emit("wxBlur",this.inputValue)},oninput:function(e){this.preventDefault(e),this.inputValue=e.value,this.$emit("input",e.value),this.$emit("wxInput",this.inputValue)},onfocus:function(e){this.preventDefault(e),this.$emit("wxFocus",this.inputValue)}}}},250:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:" weex-ct weex-div",attrs:{"weex-type":"div"}},[n("wx-input",{staticClass:"demo",attrs:{placeholder:"请输入手机号"}},[n("wx-icon",{staticClass:"icon",attrs:{slot:"left",name:"search"},slot:"left"})],1),e._v(" "),n("wx-input",{staticClass:"demo",attrs:{width:"500px",type:"password",placeholder:"请输入密码"}},[n("wx-icon",{staticClass:"icon",attrs:{slot:"left",name:"search"},slot:"left"})],1)],1)},staticRenderFns:[]}},275:function(e,t,n){var r=n(225);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("2f154056",r,!0,{})},29:function(e,t,n){t=e.exports=n(1)(!1),t.push([e.i,".wx-input{display:-webkit-box;display:-webkit-flex;display:flex;width:8.93333rem;height:1.33333rem;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.wx-input-icon{width:1.33333rem;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.input{-webkit-box-flex:1;-webkit-flex:1;flex:1}",""])},3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=weex.config.env.deviceWidth,o=weex.config.env.deviceHeight,i=weex.config.env.platform.toLowerCase(),s=(weex.config.env.appName,{data:function(){return{$env:{isWeb:"web"===i,isAndroid:"android"===i,isIos:"ios"===i}}},methods:{getPageHeight:function(){return"android"===i?750/r*o:o},preventDefault:function(e){e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation()}}});t.default=s},33:function(e,t,n){function r(e){n(41)}var o=n(0)(n(24),n(37),r,null,null);e.exports=o.exports},37:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wx-input weex-ct weex-div",style:e._px2rem(e.style,75),attrs:{"weex-type":"div"}},[e.icon?n("div",{staticClass:"wx-input-icon weex-ct weex-div",attrs:{"weex-type":"div"}},[n("figure",{staticClass:" weex-el weex-image",style:e._px2rem(e.iconStyle,75),attrs:{src:e.icon,"data-img-src":e.icon,"weex-type":"image"}})]):e._e(),e._v(" "),e._t("left",null,{}),e._v(" "),n("input",{staticClass:"input",style:{"background-color":e.bgColor},attrs:{type:e.type,placeholder:e.placeholder,disabled:e.disabled,autofocus:e.autofocus,maxlength:e.maxlength,"data-evt-input":"","data-evt-blur":"","data-evt-focus":""},domProps:{value:e.value},nativeOn:{input:function(t){return t.stopPropagation(),e.oninput(t)},blur:function(t){return t.stopPropagation(),e.onblur(t)},focus:function(t){return t.stopPropagation(),e.onfocus(t)}}}),e._v(" "),e.tail?n("div",{staticClass:"wx-input-icon weex-ct weex-div",attrs:{"weex-type":"div"}},[n("figure",{staticClass:" weex-el weex-image",style:e._px2rem(e.tailStyle,75),attrs:{src:e.tail,"data-img-src":e.tail,"weex-type":"image"}})]):e._e()],2)},staticRenderFns:[]}},4:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(15);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o).default}})},41:function(e,t,n){var r=n(29);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("071b0ca5",r,!0,{})},6:function(e,t,n){"use strict";e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=i[0],a=i[1],u=i[2],c=i[3],l={id:e+":"+o,css:a,media:u,sourceMap:c};r[s]?r[s].parts.push(l):n.push(r[s]={id:s,parts:[l]})}return n}},9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(11),o=function(e){return e&&e.__esModule?e:{default:e}}(r),i=weex.requireModule("dom");t.default={props:{name:{type:String,default:"success"},styles:{type:Object,default:function(){return{}}}},data:function(){return{iconStyle:{},Icon:o.default}},beforeCreate:function(){i.addRule("fontFace",{fontFamily:"dropletUiIconfont",src:"url('https://at.alicdn.com/t/font_534309_4czzlr17zdw2vs4i.ttf')"})},created:function(){this.setStyle()},methods:{setStyle:function(){this.iconStyle=Object.assign({},this.styles)}}}}})});
//# sourceMappingURL=index.web.js.map