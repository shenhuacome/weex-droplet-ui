// { "framework": "Vue" }

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["npm/weex-droplet-ui/example/progress/index"]=t():e["npm/weex-droplet-ui/example/progress/index"]=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=213)}({0:function(e,t){e.exports=function(e,t,r,n,o){var i,s=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(i=e,s=e.default);var u="function"==typeof s?s.options:s;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),n&&(u._scopeId=n);var l;if(o?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=l):r&&(l=r),l){var c=u.functional,d=c?u.render:u.beforeCreate;c?u.render=function(e,t){return l.call(t),d(e,t)}:u.beforeCreate=d?[].concat(d,l):[l]}return{esModule:i,exports:s,options:u}}},1:function(e,t,r){"use strict";function n(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var i=o(n);return[r].concat(n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"})).concat([i]).join("\n")}return[r].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),t.push(s))}},t}},10:function(e,t,r){"use strict";!function(){Promise.prototype.finally||Object.defineProperty(Promise.prototype,"finally",{configurable:!0,writable:!0,value:function(e){var t=this.constructor;return this.then(function(r){return t.resolve(e()).then(function(){return r})},function(r){return t.resolve(e()).then(function(){throw r})})}})}()},12:function(e,t,r){t=e.exports=r(1)(!1),t.push([e.i,".wx-button{background-color:#4676ff;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.wx-text{color:#fff;font-size:.42667rem}",""])},14:function(e,t,r){function n(e){r(18)}var o=r(0)(r(8),r(16),n,null,null);e.exports=o.exports},16:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wx-button weex-ct weex-div",style:e._px2rem(e.buttonStyles,75),attrs:{"weex-type":"div","data-evt-click":""},on:{click:e.$stopOuterA,weex$tap:function(t){return t.stopPropagation(),e.handleClick(t)}}},[r("p",{staticClass:"wx-text weex-el weex-text",style:e._processExclusiveStyle(e.textStyles,75,"text"),attrs:{"weex-type":"text"}},[e._t("default",null,{})],2)])},staticRenderFns:[]}},165:function(e,t,r){function n(e){r(279)}var o=r(0)(r(190),r(254),n,"data-v-42519091",null);e.exports=o.exports},18:function(e,t,r){var n=r(12);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(2)("46827b18",n,!0,{})},190:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(22),i=n(o),s=r(7),a=n(s);t.default={data:function(){return{}},components:{WxProgress:i.default,WxButton:a.default},methods:{}}},2:function(e,t,r){function n(e){for(var t=0;t<e.length;t++){var r=e[t],n=c[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(i(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{for(var s=[],o=0;o<r.parts.length;o++)s.push(i(r.parts[o]));c[r.id]={id:r.id,refs:1,parts:s}}}}function o(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function i(e){var t,r,n=document.querySelector("style["+y+'~="'+e.id+'"]');if(n){if(h)return g;n.parentNode.removeChild(n)}if(x){var i=p++;n=f||(f=o()),t=s.bind(null,n,i,!1),r=s.bind(null,n,i,!0)}else n=o(),t=a.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}function s(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function a(e,t){var r=t.css,n=t.media,o=t.sourceMap;if(n&&e.setAttribute("media",n),v.ssrId&&e.setAttribute(y,t.id),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=r(6),c={},d=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,g=function(){},v=null,y="data-vue-ssr-id",x="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,r,o){h=r,v=o||{};var i=l(e,t);return n(i),function(t){for(var r=[],o=0;o<i.length;o++){var s=i[o],a=c[s.id];a.refs--,r.push(a)}t?(i=l(e,t),n(i)):i=[];for(var o=0;o<r.length;o++){var a=r[o];if(0===a.refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete c[a.id]}}}};var b=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},213:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(165),o=function(e){return e&&e.__esModule?e:{default:e}}(n);o.default.el="#root",t.default=new Vue(o.default)},22:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(35);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(o).default}})},229:function(e,t,r){t=e.exports=r(1)(!1),t.push([e.i,".progress[data-v-42519091]{margin-top:.8rem}",""])},254:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:" weex-ct weex-div",attrs:{"weex-type":"div"}},[r("wx-progress",{staticClass:"progress",attrs:{outerStyle:{"background-color":"#f5f5f5"},innerStyle:{"background-color":"#f5222d","border-top-right-radius":"40px","border-bottom-right-radius":"40px"},animation:!0,percent:100}}),e._v(" "),r("wx-progress",{staticClass:"progress",attrs:{outerStyle:{"background-color":"#f5f5f5"},innerStyle:{"background-color":"#1890ff","border-top-right-radius":"40px","border-bottom-right-radius":"40px"},animation:!0,percent:90}}),e._v(" "),r("wx-progress",{staticClass:"progress",attrs:{animation:!0,percent:80}}),e._v(" "),r("wx-progress",{staticClass:"progress",attrs:{animation:!0,percent:70}}),e._v(" "),r("wx-progress",{staticClass:"progress",attrs:{animation:!0,percent:60}})],1)},staticRenderFns:[]}},26:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=weex.requireModule("animation");t.default={props:{percent:{type:Number,default:0},width:{type:String,default:"750px"},height:{type:String,default:"40px"},animation:{type:Boolean,default:!0},innerStyle:{type:Object,default:function(){return{}}},outerStyle:{type:Object,default:function(){return{}}}},data:function(){return{progress:"",_outerStyle:{},_innerStyle:{}}},created:function(){this.initStyle(),this.progress=this.getProgress(),this.animation||this.defaultProgress(this.progress)},mounted:function(){this.animation&&this.animationProgress(this.progress)},methods:{initStyle:function(){var e={width:this.width,height:this.height};this._outerStyle=Object.assign({},this.outerStyle,e),e.left="-"+this.width,this._innerStyle=Object.assign({},this.innerStyle,e)},getProgress:function(){return Number(this._outerStyle.width.replace("px",""))*(this.percent/100)+"px"},defaultProgress:function(e){this._innerStyle.width=e,this._innerStyle.left="0px"},animationProgress:function(e){var t=this.$refs.progressBar;n.transition(t,{styles:{transform:"translateX("+e+")",transformOrigin:"center center"},duration:1e3,timingFunction:"ease-out",needLayout:!1,delay:0})}},watch:{percent:function(){this.animationProgress(this.getProgress())}}}},279:function(e,t,r){var n=r(229);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(2)("33ad0566",n,!0,{})},3:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=weex.config.env.deviceWidth,o=weex.config.env.deviceHeight,i=weex.config.env.platform.toLowerCase(),s=(weex.config.env.appName,{data:function(){return{$env:{isWeb:"web"===i,isAndroid:"android"===i,isIos:"ios"===i}}},methods:{getPageHeight:function(){return"android"===i?750/n*o:o},preventDefault:function(e){e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation()}}});t.default=s},30:function(e,t,r){t=e.exports=r(1)(!1),t.push([e.i,".wx-progress[data-v-131acc96]{background-color:#1890ff;position:relative;overflow:hidden}.progress-bar[data-v-131acc96]{background-color:#52c41a;position:absolute;top:0;z-index:10}",""])},35:function(e,t,r){function n(e){r(42)}var o=r(0)(r(26),r(38),n,"data-v-131acc96",null);e.exports=o.exports},38:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wx-progress weex-ct weex-div",style:e._px2rem(e._outerStyle,75),attrs:{"weex-type":"div"}},[r("p",{ref:"progressBar",staticClass:"progress-bar weex-el weex-text",style:e._processExclusiveStyle(e._innerStyle,75,"text"),attrs:{"weex-type":"text"}})])},staticRenderFns:[]}},42:function(e,t,r){var n=r(30);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(2)("7a3df0c5",n,!0,{})},6:function(e,t,r){"use strict";e.exports=function(e,t){for(var r=[],n={},o=0;o<t.length;o++){var i=t[o],s=i[0],a=i[1],u=i[2],l=i[3],c={id:e+":"+o,css:a,media:u,sourceMap:l};n[s]?n[s].parts.push(c):r.push(n[s]={id:s,parts:[c]})}return r}},7:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(14);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(o).default}})},8:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(10);var n=r(3),o=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default={mixins:[o.default],props:{width:{type:String,default:"670px"},height:{type:String,default:"90px"},borderRadius:{type:String,default:"12px"},disabled:{type:Boolean,default:!1},disableOnPromise:{type:Function},styles:{type:Object,default:function(){return{}}},disabledBgColor:{type:String,default:"rgba(0, 0, 0, 0.1)"},textColor:{type:String,default:"#ffffff"},textFontSize:{type:String,default:"32px"}},data:function(){return{buttonStyles:{},textStyles:{},promiseDisabled:!1,defualtBgColor:"#4676FF"}},created:function(){this.promiseDisabled=this.disabled,this.setStyle()},watch:{disabled:function(){this.btnStyle(this.disabled)}},methods:{setStyle:function(){var e={height:this.height,width:this.width,"border-radius":this.borderRadius,"background-color":this.defualtBgColor},t=Object.assign({},e,this.styles);this.buttonStyles=t,this.defualtBgColor=this.buttonStyles["background-color"],this.disabled&&(this.buttonStyles["background-color"]=this.disabledBgColor),this.textStyles={color:this.textColor,fontSize:this.textFontSize}},handleClick:function(e){if(this.preventDefault(e),!this.disabled&&!this.promiseDisabled)if(this.disableOnPromise){var t=this.disableOnPromise();this.disablePromise(t)}else this.$emit("wxClick",e)},disablePromise:function(e){var t=this;this.btnStyle(!0),e.finally(function(){t.btnStyle(!1)})},btnStyle:function(e){this.promiseDisabled=e,this.buttonStyles["background-color"]=e?this.disabledBgColor:this.defualtBgColor}}}}})});
//# sourceMappingURL=index.web.js.map