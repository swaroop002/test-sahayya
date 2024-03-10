import{r as n,O as B,C as We,ca as Ge,c as A,bz as Q,bA as oe,I as ie,bg as re,bw as le,j as W,cn as G,o as qe}from"./index-e8217573.js";import{S as Ze}from"./SimpleToolTip-3cfbb0c5.js";import{w as Qe}from"./withAuth-6de36ebf.js";import{T as et}from"./TransitionGroup-c8afe0ce.js";function se(){return se=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},se.apply(this,arguments)}function ce(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,l=new Array(r);t<r;t++)l[t]=e[t];return l}function tt(e){if(Array.isArray(e))return ce(e)}function at(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ne(e,r){if(e){if(typeof e=="string")return ce(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ce(e,r)}}function nt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M(e){return tt(e)||at(e)||Ne(e)||nt()}function rt(e){if(Array.isArray(e))return e}function lt(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var l,i,m,y,d=[],u=!0,b=!1;try{if(m=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;u=!1}else for(;!(u=(l=m.call(t)).done)&&(d.push(l.value),d.length!==r);u=!0);}catch(O){b=!0,i=O}finally{try{if(!u&&t.return!=null&&(y=t.return(),Object(y)!==y))return}finally{if(b)throw i}}return d}}function ot(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ce(e,r){return rt(e)||lt(e,r)||Ne(e,r)||ot()}var we=n.memo(n.forwardRef(function(e,r){var t=e.message,l=t.severity,i=t.content,m=t.summary,y=t.detail,d=t.closable,u=t.life,b=t.sticky,O=t.icon,x=Ge(function(){s(null)},u||3e3,!b),$=Ce(x,1),S=$[0],s=function(C){S(),e.onClose&&e.onClose(e.message),C&&(C.preventDefault(),C.stopPropagation())},p=function(){e.onClick&&e.onClick(e.message)},N=function(){if(d!==!1){var C=Q("close");return n.createElement("button",{type:"button",className:"p-message-close p-link","aria-label":C,onClick:s},n.createElement("i",{className:"p-message-close-icon pi pi-times","aria-hidden":"true"}),n.createElement(oe,null))}return null},F=function(){if(e.message){var C=O;C||(C=A("pi",{"pi-info-circle":l==="info","pi-exclamation-triangle":l==="warn","pi-times-circle":l==="error","pi-check":l==="success"}));var w=ie.getJSXIcon(C,{className:"p-message-icon"},{props:e});return i||n.createElement(n.Fragment,null,w,n.createElement("span",{className:"p-message-summary"},m),n.createElement("span",{className:"p-message-detail"},y))}return null},T=A("p-message p-component p-message-"+l),_=N(),L=F();return n.createElement("div",{ref:r,className:T,onClick:p},n.createElement("div",{className:"p-message-wrapper"},L,_))}));we.displayName="UIMessage";var q=0,k=n.memo(n.forwardRef(function(e,r){var t=n.useState([]),l=Ce(t,2),i=l[0],m=l[1],y=n.useRef(null),d=function(s){if(s){var p=u(s,!0);if(Array.isArray(s))for(var N=0;N<s.length;N++)s[N].id=q++,p=[].concat(M(i),M(s));else s.id=q++,p=i?[].concat(M(i),[s]):[s];m(p)}},u=function(s,p){var N;if(Array.isArray(s))for(var F=0;F<s.length;F++)s[F].id=q++,p?N=[].concat(M(i),M(s)):N=s;else s.id=q++,p?N=i?[].concat(M(i),[s]):[s]:N=[s];return N},b=function(){m([])},O=function(s){var p=u(s,!1);m(p)},x=function(s){m(i.filter(function(p){return p.id!==s.id})),e.onRemove&&e.onRemove(s)};n.useImperativeHandle(r,function(){return{props:e,show:d,replace:O,clear:b,getElement:function(){return y.current}}});var $=B.findDiffKeys(e,k.defaultProps);return n.createElement("div",se({id:e.id,ref:y,className:e.className,style:e.style},$),n.createElement(et,null,i&&i.map(function(S){var s=n.createRef();return n.createElement(We,{nodeRef:s,key:S.id,classNames:"p-message",unmountOnExit:!0,timeout:{enter:300,exit:300},options:e.transitionOptions},n.createElement(we,{ref:s,message:S,onClick:e.onClick,onClose:x}))})))}));k.displayName="Messages";k.defaultProps={__TYPE:"Messages",id:null,className:null,style:null,transitionOptions:null,onRemove:null,onClick:null};function ee(){return ee=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},ee.apply(this,arguments)}var z=n.memo(n.forwardRef(function(e,r){var t=n.useRef(null),l=function(){if(e.showValue&&e.value!=null){var d=e.displayValueTemplate?e.displayValueTemplate(e.value):e.value+e.unit;return d}return null},i=function(){var d=B.findDiffKeys(e,z.defaultProps),u=A("p-progressbar p-component p-progressbar-determinate",e.className),b=l();return n.createElement("div",ee({role:"progressbar",id:e.id,ref:t,className:u,style:e.style,"aria-valuemin":"0","aria-valuenow":e.value,"aria-valuemax":"100"},d),n.createElement("div",{className:"p-progressbar-value p-progressbar-value-animate",style:{width:e.value+"%",display:"flex",backgroundColor:e.color}},e.value!=null&&e.value!==0&&e.showValue&&n.createElement("div",{className:"p-progressbar-label"},b)))},m=function(){var d=B.findDiffKeys(e,z.defaultProps),u=A("p-progressbar p-component p-progressbar-indeterminate",e.className);return n.createElement("div",ee({role:"progressbar",id:e.id,ref:t,className:u,style:e.style},d),n.createElement("div",{className:"p-progressbar-indeterminate-container"},n.createElement("div",{className:"p-progressbar-value p-progressbar-value-animate",style:{backgroundColor:e.color}})))};if(n.useImperativeHandle(r,function(){return{props:e,getElement:function(){return t.current}}}),e.mode==="determinate")return i();if(e.mode==="indeterminate")return m();throw new Error(e.mode+" is not a valid mode for the ProgressBar. Valid values are 'determinate' and 'indeterminate'")}));z.displayName="ProgressBar";z.defaultProps={__TYPE:"ProgressBar",id:null,value:null,showValue:!0,unit:"%",style:null,className:null,mode:"determinate",displayValueTemplate:null,color:null};function te(){return te=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},te.apply(this,arguments)}function ue(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,l=new Array(r);t<r;t++)l[t]=e[t];return l}function it(e){if(Array.isArray(e))return ue(e)}function st(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ie(e,r){if(e){if(typeof e=="string")return ue(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ue(e,r)}}function ct(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pe(e){return it(e)||st(e)||Ie(e)||ct()}function ut(e){if(Array.isArray(e))return e}function mt(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var l,i,m,y,d=[],u=!0,b=!1;try{if(m=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;u=!1}else for(;!(u=(l=m.call(t)).done)&&(d.push(l.value),d.length!==r);u=!0);}catch(O){b=!0,i=O}finally{try{if(!u&&t.return!=null&&(y=t.return(),Object(y)!==y))return}finally{if(b)throw i}}return d}}function ft(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z(e,r){return ut(e)||mt(e,r)||Ie(e,r)||ft()}function Ee(e){throw new TypeError('"'+e+'" is read-only')}function dt(e,r){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=vt(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var l=0,i=function(){};return{s:i,n:function(){return l>=e.length?{done:!0}:{done:!1,value:e[l++]}},e:function(b){throw b},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var m=!0,y=!1,d;return{s:function(){t=t.call(e)},n:function(){var b=t.next();return m=b.done,b},e:function(b){y=!0,d=b},f:function(){try{!m&&t.return!=null&&t.return()}finally{if(y)throw d}}}}function vt(e,r){if(e){if(typeof e=="string")return Se(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Se(e,r)}}function Se(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,l=new Array(r);t<r;t++)l[t]=e[t];return l}var H=n.memo(n.forwardRef(function(e,r){var t=n.useState([]),l=Z(t,2),i=l[0],m=l[1],y=n.useState(0),d=Z(y,2),u=d[0],b=d[1],O=n.useState(!1),x=Z(O,2),$=x[0],S=x[1],s=n.useState(!1),p=Z(s,2),N=p[0],F=p[1],T=n.useRef(null),_=n.useRef(null),L=n.useRef(null),U=n.useRef(!1),C=n.useRef(0),w=B.isNotEmpty(i),R=e.disabled||N,me=e.chooseLabel||e.chooseOptions.label||Q("choose"),Te=e.uploadLabel||e.uploadOptions.label||Q("upload"),Be=e.cancelLabel||e.cancelOptions.label||Q("cancel"),Re=R||e.fileLimit&&e.fileLimit<=i.length+C,Ae=R||!w,Oe=R||!w,fe=function(a){return/^image\//.test(a.type)},de=function(a,o){ae();var f=pe(i),g=i[o];f.splice(o,1),m(f),e.onRemove&&e.onRemove({originalEvent:a,file:g})},ae=function(){T.current&&(T.current.value="")},Fe=function(){T.current&&(U.current=!0,T.current.value="")},Y=function(a){if(a===0)return"0 B";var o=1e3,f=3,g=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],v=Math.floor(Math.log(a)/Math.log(o));return parseFloat((a/Math.pow(o,v)).toFixed(f))+" "+g[v]},K=function(a){if(!(e.onBeforeSelect&&e.onBeforeSelect({originalEvent:a,files:i})===!1)){if(a.type!=="drop"&&ve()&&U.current){U.current=!1;return}var o=[];e.multiple&&(o=i?pe(i):[]);for(var f=a.dataTransfer?a.dataTransfer.files:a.target.files,g=0;g<f.length;g++){var v=f[g];!Pe(v)&&De(v)&&(fe(v)&&(v.objectURL=window.URL.createObjectURL(v)),o.push(v))}m(o),B.isNotEmpty(o)&&e.auto&&V(o),e.onSelect&&e.onSelect({originalEvent:a,files:f}),a.type!=="drop"&&ve()?Fe():ae(),e.mode==="basic"&&o.length>0&&(T.current.style.display="none")}},Pe=function(a){return i.some(function(o){return o.name+o.type+o.size===a.name+a.type+a.size})},ve=function(){return!!window.MSInputMethodContext&&!!document.documentMode},De=function(a){if(e.maxFileSize&&a.size>e.maxFileSize){var o={severity:"error",summary:e.invalidFileSizeMessageSummary.replace("{0}",a.name),detail:e.invalidFileSizeMessageDetail.replace("{0}",Y(e.maxFileSize)),sticky:!0};return e.mode==="advanced"&&_.current.show(o),e.onValidationFail&&e.onValidationFail(a),!1}return!0},V=function(a){if(a=a||i,a&&a.nativeEvent&&(a=i),e.customUpload)e.fileLimit&&(C+a.length,Ee("uploadedFileCount")),e.uploadHandler&&e.uploadHandler({files:a,options:{clear:X,props:e}});else{F(!0);var o=new XMLHttpRequest,f=new FormData;e.onBeforeUpload&&e.onBeforeUpload({xhr:o,formData:f});var g=dt(a),v;try{for(g.s();!(v=g.n()).done;){var I=v.value;f.append(e.name,I,I.name)}}catch(h){g.e(h)}finally{g.f()}o.upload.addEventListener("progress",function(h){if(h.lengthComputable){var E=Math.round(h.loaded*100/h.total);b(E),e.onProgress&&e.onProgress({originalEvent:h,progress:E})}}),o.onreadystatechange=function(){o.readyState===4&&(b(0),F(!1),o.status>=200&&o.status<300?(e.fileLimit&&(C+a.length,Ee("uploadedFileCount")),e.onUpload&&e.onUpload({xhr:o,files:a})):e.onError&&e.onError({xhr:o,files:a}),X())},o.open("POST",e.url,!0),e.onBeforeSend&&e.onBeforeSend({xhr:o,formData:f}),o.withCredentials=e.withCredentials,o.send(f)}},X=function(){m([]),F(!1),e.onClear&&e.onClear(),ae()},ye=function(){T.current.click()},be=function(){S(!0)},ge=function(){S(!1)},he=function(a){a.which===13&&ye()},je=function(a){R||(a.dataTransfer.dropEffect="copy",a.stopPropagation(),a.preventDefault())},Le=function(a){R||(a.dataTransfer.dropEffect="copy",le.addClass(L.current,"p-fileupload-highlight"),a.stopPropagation(),a.preventDefault())},Ue=function(a){R||(a.dataTransfer.dropEffect="copy",le.removeClass(L.current,"p-fileupload-highlight"))},xe=function(a){if(!e.disabled&&(le.removeClass(L.current,"p-fileupload-highlight"),a.stopPropagation(),a.preventDefault(),!(e.onBeforeDrop&&e.onBeforeDrop(a)===!1))){var o=a.dataTransfer?a.dataTransfer.files:a.target.files,f=e.multiple||B.isEmpty(i)&&o&&o.length===1;f&&K(a)}},$e=function(){!R&&w?V():T.current.click()};n.useImperativeHandle(r,function(){return{props:e,upload:V,clear:X,formatSize:Y,onFileSelect:K,getInput:function(){return T.current},getContent:function(){return L.current},getFiles:function(){return i}}});var Me=function(){var a=e.chooseOptions,o=a.className,f=a.style,g=a.icon,v=a.iconOnly,I=A("p-button p-fileupload-choose p-component",{"p-disabled":R,"p-focus":$,"p-button-icon-only":v},o),h="p-button-label p-clickable",E=v?n.createElement("span",{className:h,dangerouslySetInnerHTML:{__html:"&nbsp;"}}):n.createElement("span",{className:h},me),P=n.createElement("input",{ref:T,type:"file",onChange:K,multiple:e.multiple,accept:e.accept,disabled:Re}),D=ie.getJSXIcon(g||"pi pi-fw pi-plus",{className:"p-button-icon p-button-icon-left p-clickable"},{props:e});return n.createElement("span",{className:I,style:f,onClick:ye,onKeyDown:he,onFocus:be,onBlur:ge,tabIndex:0},P,D,E,n.createElement(oe,null))},_e=function(a,o){var f=a.name+a.type+a.size,g=fe(a)?n.createElement("div",null,n.createElement("img",{alt:a.name,role:"presentation",src:a.objectURL,width:e.previewWidth})):null,v=n.createElement("div",{className:"p-fileupload-filename"},a.name),I=n.createElement("div",null,Y(a.size)),h=n.createElement("div",null,n.createElement(re,{type:"button",icon:"pi pi-times",onClick:function(j){return de(j,o)},disabled:R})),E=n.createElement(n.Fragment,null,g,v,I,h);if(e.itemTemplate){var P={onRemove:function(j){return de(j,o)},previewElement:g,fileNameElement:v,sizeElement:I,removeElement:h,formatSize:Y(a.size),element:E,props:e};E=B.getJSXElement(e.itemTemplate,a,P)}return n.createElement("div",{className:"p-fileupload-row",key:f},E)},ke=function(){var a=i.map(_e);return n.createElement("div",{className:"p-fileupload-files"},a)},ze=function(){return e.emptyTemplate&&!w?B.getJSXElement(e.emptyTemplate,e):null},He=function(){return e.progressBarTemplate?B.getJSXElement(e.progressBarTemplate,e):n.createElement(z,{value:u,showValue:!1})},Ye=function(){var a=B.findDiffKeys(e,H.defaultProps),o=A("p-fileupload p-fileupload-advanced p-component",e.className),f=A("p-fileupload-buttonbar",e.headerClassName),g=A("p-fileupload-content",e.contentClassName),v=Me(),I=ze(),h,E,P,D;if(!e.auto){var j=e.uploadOptions,J=e.cancelOptions,Ve=j.iconOnly?"":Te,Xe=J.iconOnly?"":Be;h=n.createElement(re,{type:"button",label:Ve,icon:j.icon||"pi pi-upload",onClick:V,disabled:Ae,style:j.style,className:j.className}),E=n.createElement(re,{type:"button",label:Xe,icon:J.icon||"pi pi-times",onClick:X,disabled:Oe,style:J.style,className:J.className})}w&&(P=ke(),D=He());var ne=n.createElement("div",{className:f,style:e.headerStyle},v,h,E);if(e.headerTemplate){var Je={className:f,chooseButton:v,uploadButton:h,cancelButton:E,element:ne,props:e};ne=B.getJSXElement(e.headerTemplate,Je)}return n.createElement("div",te({id:e.id,className:o,style:e.style},a),ne,n.createElement("div",{ref:L,className:g,style:e.contentStyle,onDragEnter:je,onDragOver:Le,onDragLeave:Ue,onDrop:xe},D,n.createElement(k,{ref:_}),P,I))},Ke=function(){var a=e.chooseOptions,o=B.findDiffKeys(e,H.defaultProps),f=A("p-fileupload p-fileupload-basic p-component",e.className),g=A("p-button p-component p-fileupload-choose",{"p-fileupload-choose-selected":w,"p-disabled":R,"p-focus":$},a.className),v=a.icon||A({"pi pi-plus":!a.icon&&(!w||e.auto),"pi pi-upload":!a.icon&&w&&!e.auto}),I="p-button-label p-clickable",h=a.iconOnly?n.createElement("span",{className:I,dangerouslySetInnerHTML:{__html:"&nbsp;"}}):n.createElement("span",{className:I},me),E=e.auto?h:n.createElement("span",{className:I},w?i[0].name:h),P=ie.getJSXIcon(v,{className:"p-button-icon p-button-icon-left"},{props:e,hasFiles:w}),D=!w&&n.createElement("input",{ref:T,type:"file",accept:e.accept,multiple:e.multiple,disabled:R,onChange:K});return n.createElement("div",te({className:f,style:e.style},o),n.createElement(k,{ref:_}),n.createElement("span",{className:g,style:a.style,onMouseUp:$e,onKeyDown:he,onFocus:be,onBlur:ge,tabIndex:0},P,E,D,n.createElement(oe,null)))};if(e.mode==="advanced")return Ye();if(e.mode==="basic")return Ke()}));H.displayName="FileUpload";H.defaultProps={__TYPE:"FileUpload",id:null,name:null,url:null,mode:"advanced",multiple:!1,accept:null,disabled:!1,auto:!1,maxFileSize:null,invalidFileSizeMessageSummary:"{0}: Invalid file size, ",invalidFileSizeMessageDetail:"maximum upload size is {0}.",style:null,className:null,widthCredentials:!1,previewWidth:50,chooseLabel:null,uploadLabel:null,cancelLabel:null,chooseOptions:{label:null,icon:null,iconOnly:!1,className:null,style:null},uploadOptions:{label:null,icon:null,iconOnly:!1,className:null,style:null},cancelOptions:{label:null,icon:null,iconOnly:!1,className:null,style:null},customUpload:!1,headerClassName:null,headerStyle:null,contentClassName:null,contentStyle:null,headerTemplate:null,itemTemplate:null,emptyTemplate:null,progressBarTemplate:null,onBeforeUpload:null,onBeforeSend:null,onBeforeDrop:null,onBeforeSelect:null,onUpload:null,onError:null,onClear:null,onSelect:null,onProgress:null,onValidationFail:null,uploadHandler:null,onRemove:null};const yt=e=>{var m;const r={className:"border-none text-xs  text-primary-ptext-1000 cursor-pointer",label:e.label||"Upload",icon:"pi pi-plus hover:border-1.5  hover:border-primary-sapphireBlue-600  text-primary-sapphireBlue-600  shadow-iconButton  bg-white  border border-1.5 border-primary-sapphireBlue-600  focus:white  focus:border focus:border-semantic-informativeAccent  hover:bg-primary-tableRowColor  rounded-full  text-xs  px-0  py-0  h-6  w-6  text-center  border-1.5 flex items-center p-button-icon-only mr-2"},t={className:"text-sm text-primary-copyTextColor underline removePlusIcon",label:e.label||"Upload"},l={className:" removePlusIcon file-upload-ternary  ",label:""},i=()=>e.variant===G.PRIMARY?r:e.variant===G.SECONDARY?t:e.variant===G.TERTIARY?l:r;return W.jsxs(W.Fragment,{children:[W.jsx(H,{name:"demo[]",accept:e.accept,chooseLabel:e.chooseLabel,headerClassName:e.headerClassName,uploadHandler:e.uploadHandler,onSelect:e.onSelect,onClear:e.onClear,onUpload:e.Upload,mode:"basic",auto:!0,disabled:(e==null?void 0:e.disabled)||(e==null?void 0:e.isDisabledByAcl),chooseOptions:i()}),e.variant===G.TERTIARY?W.jsx(Ze,{variant:(m=qe)==null?void 0:m.PRIMARY,position:"top",htmlContent:(e==null?void 0:e.tooltipContent)??"",target:`.file-upload-${e==null?void 0:e.tooltipId}`}):null]})},Et=Qe(yt);export{Et as F};
//# sourceMappingURL=FileUploadBox-d8087723.js.map
