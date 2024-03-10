import{r as g,bX as Ve,c3 as ht,c4 as St,bw as Z,u as yt,k as J,O as P,c as ce}from"./index-e8217573.js";function se(){return se=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var o=arguments[l];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(e[c]=o[c])}return e},se.apply(this,arguments)}function _(e){"@babel/helpers - typeof";return _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},_(e)}function wt(e,l){if(_(e)!=="object"||e===null)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var c=o.call(e,l||"default");if(_(c)!=="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(e)}function bt(e){var l=wt(e,"string");return _(l)==="symbol"?l:String(l)}function It(e,l,o){return l=bt(l),l in e?Object.defineProperty(e,l,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[l]=o,e}function zt(e){if(Array.isArray(e))return e}function Rt(e,l){var o=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(o!=null){var c,f,K,j,v=[],H=!0,U=!1;try{if(K=(o=o.call(e)).next,l===0){if(Object(o)!==o)return;H=!1}else for(;!(H=(c=K.call(o)).done)&&(v.push(c.value),v.length!==l);H=!0);}catch(k){U=!0,f=k}finally{try{if(!H&&o.return!=null&&(j=o.return(),Object(j)!==j))return}finally{if(U)throw f}}return v}}function Ae(e,l){(l==null||l>e.length)&&(l=e.length);for(var o=0,c=new Array(l);o<l;o++)c[o]=e[o];return c}function Lt(e,l){if(e){if(typeof e=="string")return Ae(e,l);var o=Object.prototype.toString.call(e).slice(8,-1);if(o==="Object"&&e.constructor&&(o=e.constructor.name),o==="Map"||o==="Set")return Array.from(e);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return Ae(e,l)}}function Tt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function N(e,l){return zt(e)||Rt(e,l)||Lt(e,l)||Tt()}function je(e,l){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);l&&(c=c.filter(function(f){return Object.getOwnPropertyDescriptor(e,f).enumerable})),o.push.apply(o,c)}return o}function Ot(e){for(var l=1;l<arguments.length;l++){var o=arguments[l]!=null?arguments[l]:{};l%2?je(Object(o),!0).forEach(function(c){It(e,c,o[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):je(Object(o)).forEach(function(c){Object.defineProperty(e,c,Object.getOwnPropertyDescriptor(o,c))})}return e}var fe=g.memo(g.forwardRef(function(e,l){var o=e.orientation==="vertical",c=e.orientation==="horizontal",f=e.orientation==="both",K=g.useState(f?{rows:0,cols:0}:0),j=N(K,2),v=j[0],H=j[1],U=g.useState(f?{rows:0,cols:0}:0),k=N(U,2),y=k[0],me=k[1],He=g.useState(f?{rows:0,cols:0}:0),ve=N(He,2),z=ve[0],Me=ve[1],We=g.useState(e.numToleratedItems),ge=N(We,2),R=ge[0],p=ge[1],xe=g.useState(e.loading||!1),de=N(xe,2),C=de[0],ee=de[1],$e=g.useState([]),he=N($e,2),W=he[0],De=he[1],d=g.useRef(null),T=g.useRef(null),B=g.useRef(null),te=g.useRef(null),V=g.useRef(f?{top:0,left:0}:0),re=g.useRef(null),ne=g.useRef(null),x=g.useRef(null),$=g.useRef(null),Se=Ve(e.items),Fe=Ve(e.loading),Xe=ht({listener:function(t){return Le()}}),Je=N(Xe,1),_e=Je[0],Ke=St({target:"window",type:"orientationchange",listener:function(t){return Le()}}),Ue=N(Ke,1),ke=Ue[0],Be=function(){return d},ae=function(t){V.current=f?{top:0,left:0}:0,d.current&&d.current.scrollTo(t)},ye=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"auto",n=be(),i=n.numToleratedItems,u=function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,L=arguments.length>1?arguments[1]:void 0;return w<=L?0:w},a=function(w,L){return w*L},s=function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return ae({left:w,top:L,behavior:r})};if(f){var h={rows:u(t[0],i[0]),cols:u(t[1],i[1])};(h.rows!==v.rows||h.cols!==v.cols)&&s(a(h.cols,e.itemSize[1]),a(h.rows,e.itemSize[0]))}else{var S=u(t,i);S!==v&&(c?s(a(S,e.itemSize),0):s(0,a(S,e.itemSize)))}},Ye=function(t,r){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"auto";if(r){var i=we(),u=i.first,a=i.viewport,s=function(){var D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,F=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return ae({left:D,top:F,behavior:n})},h=r==="to-start",S=r==="to-end";if(h){if(f)a.first.rows-u.rows>t[0]?s(a.first.cols*e.itemSize[1],(a.first.rows-1)*e.itemSize[0]):a.first.cols-u.cols>t[1]&&s((a.first.cols-1)*e.itemSize[1],a.first.rows*e.itemSize[0]);else if(a.first-u>t){var I=(a.first-1)*e.itemSize;c?s(I,0):s(0,I)}}else if(S){if(f)a.last.rows-u.rows<=t[0]+1?s(a.first.cols*e.itemSize[1],(a.first.rows+1)*e.itemSize[0]):a.last.cols-u.cols<=t[1]+1&&s((a.first.cols+1)*e.itemSize[1],a.first.rows*e.itemSize[0]);else if(a.last-u<=t+1){var w=(a.first+1)*e.itemSize;c?s(w,0):s(0,w)}}}else ye(t,n)},qe=function(){return C?e.loaderDisabled?W:[]:ie()},Ge=function(){return e.columns&&f||c?C&&e.loaderDisabled?f?W[0]:W:e.columns.slice(f?v.cols:v,f?y.cols:y):e.columns},we=function(){var t=function(S,I){return Math.floor(S/(I||S))},r=v,n=0;if(d.current){var i=d.current,u=i.scrollTop,a=i.scrollLeft;if(f)r={rows:t(u,e.itemSize[0]),cols:t(a,e.itemSize[1])},n={rows:r.rows+z.rows,cols:r.cols+z.cols};else{var s=c?a:u;r=t(s,e.itemSize),n=r+z}}return{first:v,last:y,viewport:{first:r,last:n}}},be=function(){var t=le(),r=d.current?d.current.offsetWidth-t.left:0,n=d.current?d.current.offsetHeight-t.top:0,i=function(S,I){return Math.ceil(S/(I||S))},u=function(S){return Math.ceil(S/2)},a=f?{rows:i(n,e.itemSize[0]),cols:i(r,e.itemSize[1])}:i(c?r:n,e.itemSize),s=R||(f?[u(a.rows),u(a.cols)]:u(a));return{numItemsInViewport:a,numToleratedItems:s}},Qe=function(){var t=be(),r=t.numItemsInViewport,n=t.numToleratedItems,i=function(s,h,S,I){return Ie(s+h+(s<S?2:3)*S,I)},u=f?{rows:i(v.rows,r.rows,n[0]),cols:i(v.cols,r.cols,n[1],!0)}:i(v,r,n);Me(r),p(n),me(u),e.showLoader&&De(f?Array.from({length:r.rows}).map(function(){return Array.from({length:r.cols})}):Array.from({length:r})),e.lazy&&e.onLazyLoad&&e.onLazyLoad({first:v,last:u})},Ze=function(t){e.autoSize&&!t&&Promise.resolve().then(function(){if(T.current){T.current.style.minHeight=T.current.style.minWidth="auto";var r=T.current,n=r.offsetWidth,i=r.offsetHeight;(f||c)&&(d.current.style.width=(n<x.current?n:x.current)+"px"),(f||o)&&(d.current.style.height=(i<$.current?i:$.current)+"px"),T.current.style.minHeight=T.current.style.minWidth=""}})},Ie=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,r=arguments.length>1?arguments[1]:void 0;return e.items?Math.min(r?(e.columns||e.items[0]).length:e.items.length,t):0},le=function(){if(T.current){var t=getComputedStyle(T.current),r=parseInt(t.paddingLeft,10)+Math.max(parseInt(t.left,10),0),n=parseInt(t.paddingRight,10)+Math.max(parseInt(t.right,10),0),i=parseInt(t.paddingTop,10)+Math.max(parseInt(t.top,10),0),u=parseInt(t.paddingBottom,10)+Math.max(parseInt(t.bottom,10),0);return{left:r,right:n,top:i,bottom:u,x:r+n,y:i+u}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}},pe=function(){if(d.current){var t=d.current.parentElement,r=e.scrollWidth||"".concat(d.current.offsetWidth||t.offsetWidth,"px"),n=e.scrollHeight||"".concat(d.current.offsetHeight||t.offsetHeight,"px"),i=function(a,s){return d.current.style[a]=s};f||c?(i("height",n),i("width",r)):i("height",n)}},et=function(){var t=e.items;if(B.current&&t){var r=le(),n=function(u,a,s){var h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return B.current.style[u]=(a||[]).length*s+h+"px"};f?(n("height",t,e.itemSize[0],r.y),n("width",e.columns||t[1],e.itemSize[1],r.x)):c?n("width",e.columns||t,e.itemSize,r.x):n("height",t,e.itemSize,r.y)}},tt=function(t){if(T.current){var r=t?t.first:v,n=function(s,h){return s*h},i=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;te.current&&(te.current.style.top="-".concat(h,"px")),T.current.style.transform="translate3d(".concat(s,"px, ").concat(h,"px, 0)")};if(f)i(n(r.cols,e.itemSize[1]),n(r.rows,e.itemSize[0]));else{var u=n(r,e.itemSize);c?i(u,0):i(0,u)}}},ze=function(t){var r=t.target,n=le(),i=function(b,O){return b?b>O?b-O:b:0},u=function(b,O){return Math.floor(b/(O||b))},a=function(b,O,X,G,E,A){return b<=E?E:A?X-G-E:O+E-1},s=function(b,O,X,G,E,A,Q){return b<=A?0:Math.max(0,Q?b<O?X:b-A:b>O?X:b-2*A)},h=function(b,O,X,G,E,A){var Q=O+G+2*E;return b>=E&&(Q+=E+1),Ie(Q,A)},S=i(r.scrollTop,n.top),I=i(r.scrollLeft,n.left),w=f?{rows:0,cols:0}:0,L=y,D=!1,F=V.current;if(f){var Ce=V.current.top<=S,Ee=V.current.left<=I,M={rows:u(S,e.itemSize[0]),cols:u(I,e.itemSize[1])},Pe={rows:a(M.rows,v.rows,y.rows,z.rows,R[0],Ce),cols:a(M.cols,v.cols,y.cols,z.cols,R[1],Ee)};w={rows:s(M.rows,Pe.rows,v.rows,y.rows,z.rows,R[0],Ce),cols:s(M.cols,Pe.cols,v.cols,y.cols,z.cols,R[1],Ee)},L={rows:h(M.rows,w.rows,y.rows,z.rows,R[0]),cols:h(M.cols,w.cols,y.cols,z.cols,R[1],!0)},D=w.rows!==v.rows||L.rows!==y.rows||w.cols!==v.cols||L.cols!==y.cols,F={top:S,left:I}}else{var ue=c?I:S,Ne=V.current<=ue,oe=u(ue,e.itemSize),dt=a(oe,v,y,z,R,Ne);w=s(oe,dt,v,y,z,R,Ne),L=h(oe,w,y,z,R),D=w!==v||L!==y,F=ue}return{first:w,last:L,isRangeChanged:D,scrollPos:F}},Re=function(t){var r=ze(t),n=r.first,i=r.last,u=r.isRangeChanged,a=r.scrollPos;if(u){var s={first:n,last:i};tt(s),H(n),me(i),V.current=a,e.onScrollIndexChange&&e.onScrollIndexChange(s),e.lazy&&e.onLazyLoad&&e.onLazyLoad(s)}},rt=function(t){if(e.onScroll&&e.onScroll(t),e.delay){if(re.current&&clearTimeout(re.current),!C&&e.showLoader){var r=ze(t),n=r.isRangeChanged;n&&ee(!0)}re.current=setTimeout(function(){Re(t),C&&e.showLoader&&(!e.lazy||e.loading===void 0)&&ee(!1)},e.delay)}else Re(t)},Le=function(){ne.current&&clearTimeout(ne.current),ne.current=setTimeout(function(){if(d.current){var t=[Z.getWidth(d.current),Z.getHeight(d.current)],r=t[0],n=t[1],i=r!==x.current,u=n!==$.current,a=f?i||u:c?i:o?u:!1;a&&(p(e.numToleratedItems),x.current=r,$.current=n)}},e.resizeDelay)},Te=function(t){var r=(e.items||[]).length,n=f?v.rows+t:v+t;return{index:n,count:r,first:n===0,last:n===r-1,even:n%2===0,odd:n%2!==0,props:e}},Oe=function(t,r){var n=W.length;return Ot({index:t,count:n,first:t===0,last:t===n-1,even:t%2===0,odd:t%2!==0,props:e},r)},ie=function(){var t=e.items;return t&&!C?f?t.slice(v.rows,y.rows).map(function(r){return e.columns?r:r.slice(v.cols,y.cols)}):c&&e.columns?t:t.slice(v,y):[]},Y=function(){e.disabled||(pe(),Qe(),et())};yt(function(){e.disabled||(Y(),_e(),ke(),x.current=Z.getWidth(d.current),$.current=Z.getHeight(d.current))}),J(function(){Y()},[e.itemSize,e.scrollHeight]),J(function(){e.numToleratedItems!==R&&p(e.numToleratedItems)},[e.numToleratedItems]),J(function(){e.numToleratedItems===R&&Y()},[R]),J(function(){(!Se||Se.length!==(e.items||[]).length)&&Y();var m=C;e.lazy&&Fe!==e.loading&&e.loading!==C&&(ee(e.loading),m=e.loading),Ze(m)}),J(function(){V.current=f?{top:0,left:0}:0},[e.orientation]),g.useImperativeHandle(l,function(){return{props:e,getElementRef:Be,scrollTo:ae,scrollToIndex:ye,scrollInView:Ye,getRenderedRange:we}});var nt=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=Oe(t,r),i=P.getJSXElement(e.loadingTemplate,n);return g.createElement(g.Fragment,{key:t},i)},at=function(){if(!e.loaderDisabled&&e.showLoader&&C){var t=ce("p-virtualscroller-loader",{"p-component-overlay":!e.loadingTemplate}),r=g.createElement("i",{className:"p-virtualscroller-loading-icon pi pi-spinner pi-spin"});if(e.loadingTemplate)r=W.map(function(i,u){return nt(u,f&&{numCols:z.cols})});else if(e.loaderIconTemplate){var n={className:"p-virtualscroller-loading-icon",element:r,props:e};r=P.getJSXElement(e.loaderIconTemplate,n)}return g.createElement("div",{className:t},r)}return null},lt=function(){return e.showSpacer?g.createElement("div",{ref:B,className:"p-virtualscroller-spacer"}):null},it=function(t,r){var n=Te(r),i=P.getJSXElement(e.itemTemplate,t,n);return g.createElement(g.Fragment,{key:n.index},i)},ut=function(){var t=ie();return t.map(it)},ot=function(){var t=ut(),r=ce("p-virtualscroller-content",{"p-virtualscroller-loading":C}),n=g.createElement("div",{ref:T,className:r},t);if(e.contentTemplate){var i={className:r,contentRef:function(a){return T.current=P.getRefElement(a)},spacerRef:function(a){return B.current=P.getRefElement(a)},stickyRef:function(a){return te.current=P.getRefElement(a)},items:ie(),getItemOptions:function(a){return Te(a)},children:t,element:n,props:e,loading:C,getLoaderOptions:function(a,s){return Oe(a,s)},loadingTemplate:e.loadingTemplate,itemSize:e.itemSize,rows:qe(),columns:Ge(),vertical:o,horizontal:c,both:f};return P.getJSXElement(e.contentTemplate,i)}return n};if(e.disabled){var ct=P.getJSXElement(e.contentTemplate,{items:e.items,rows:e.items,columns:e.columns});return g.createElement(g.Fragment,null,e.children,ct)}else{var st=P.findDiffKeys(e,fe.defaultProps),ft=ce("p-virtualscroller",{"p-both-scroll":f,"p-horizontal-scroll":c},e.className),mt=at(),vt=ot(),gt=lt();return g.createElement("div",se({ref:d,className:ft,tabIndex:0,style:e.style},st,{onScroll:rt}),vt,gt,mt)}}));fe.displayName="VirtualScroller";fe.defaultProps={__TYPE:"VirtualScroller",id:null,style:null,className:null,items:null,itemSize:0,scrollHeight:null,scrollWidth:null,orientation:"vertical",numToleratedItems:null,delay:0,resizeDelay:10,lazy:!1,disabled:!1,loaderDisabled:!1,columns:null,loading:void 0,autoSize:!1,showSpacer:!0,showLoader:!1,loadingTemplate:null,loaderIconTemplate:null,itemTemplate:null,contentTemplate:null,onScroll:null,onScrollIndexChange:null,onLazyLoad:null};export{fe as V};
//# sourceMappingURL=virtualscroller.esm-9939945c.js.map