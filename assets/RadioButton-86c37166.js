import{r,O as R,bw as I,c as B,bM as _,j as f,a8 as $,aa as F,R as K,cx as L,cy as H,ac as x}from"./index-e8217573.js";import{w as M}from"./withAuth-6de36ebf.js";function y(){return y=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},y.apply(this,arguments)}function Y(e){if(Array.isArray(e))return e}function U(e,a){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n,c,i,o,l=[],d=!0,u=!1;try{if(i=(t=t.call(e)).next,a===0){if(Object(t)!==t)return;d=!1}else for(;!(d=(n=i.call(t)).done)&&(l.push(n.value),l.length!==a);d=!0);}catch(m){u=!0,c=m}finally{try{if(!d&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(u)throw c}}return l}}function P(e,a){(a==null||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}function q(e,a){if(e){if(typeof e=="string")return P(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return P(e,a)}}function G(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W(e,a){return Y(e)||U(e,a)||q(e,a)||G()}var E=r.memo(r.forwardRef(function(e,a){var t=r.useState(!1),n=W(t,2),c=n[0],i=n[1],o=r.useRef(null),l=r.useRef(e.inputRef),d=function(s){u(s)},u=function(s){if(!e.disabled&&e.onChange){var g=e.checked,p=s.target instanceof HTMLDivElement,D=s.target===l.current,T=D&&s.target.checked!==g,A=p&&(I.hasClass(o.current,"p-radiobutton-checked")===g?!g:!1);if(T||A){var S=!g;e.onChange({originalEvent:s,value:e.value,checked:S,stopPropagation:function(){},preventDefault:function(){},target:{type:"radio",name:e.name,id:e.id,value:e.value,checked:S}}),A&&(l.current.checked=S)}I.focus(l.current),s.preventDefault()}},m=function(){i(!0)},v=function(){i(!1)},j=function(s){s.code==="Space"&&u(s)};r.useEffect(function(){l.current&&(l.current.checked=e.checked)},[e.checked]),r.useEffect(function(){R.combinedRefs(l,e.inputRef)},[l,e.inputRef]),r.useImperativeHandle(a,function(){return{props:e,select:d,getElement:function(){return o.current},getInput:function(){return l.current}}});var N=R.isNotEmpty(e.tooltip),h=R.findDiffKeys(e,E.defaultProps),O=R.reduceKeys(h,I.ARIA_PROPS),C=B("p-radiobutton p-component",{"p-radiobutton-checked":e.checked,"p-radiobutton-disabled":e.disabled,"p-radiobutton-focused":c},e.className),k=B("p-radiobutton-box",{"p-highlight":e.checked,"p-disabled":e.disabled,"p-focus":c});return r.createElement(r.Fragment,null,r.createElement("div",y({ref:o,id:e.id,className:C,style:e.style},h,{onClick:u}),r.createElement("div",{className:"p-hidden-accessible"},r.createElement("input",y({ref:l,id:e.inputId,type:"radio",name:e.name,defaultChecked:e.checked,onFocus:m,onBlur:v,onKeyDown:j,disabled:e.disabled,required:e.required,tabIndex:e.tabIndex},O))),r.createElement("div",{className:k},r.createElement("div",{className:"p-radiobutton-icon"}))),N&&r.createElement(_,y({target:o,content:e.tooltip},e.tooltipOptions)))}));E.displayName="RadioButton";E.defaultProps={__TYPE:"RadioButton",id:null,inputRef:null,inputId:null,name:null,value:null,checked:!1,style:null,className:null,disabled:!1,required:!1,tabIndex:null,tooltip:null,tooltipOptions:null,onChange:null};const z=e=>{const{hideLabel:a,label:t,labelClassNames:n,labelStyleObj:c,validation:i,hideErrorRow:o,errorClassNames:l,errorStyleObj:d,disabled:u,isDisabledByAcl:m,...v}=e,{className:j,value:N,style:h,name:O,onChange:C}=v;return f.jsxs("div",{className:"group grid",children:[!a&&f.jsx($,{label:t,labelClassNames:n}),f.jsx(E,{value:N,style:h,onChange:C,name:O,disabled:u||m,...v,className:`${j} ${m?"!bg-secondary-disabledBGColor !border-primary-gray-300 placeholder-secondary-gray-500":" "} `}),!o&&f.jsx(F,{validation:i,hideErrorRow:o,errorClassNames:l})]})},J=M(z),Q=e=>{const{variant:a,styleObj:t,...n}=e,c=()=>{let i={...L,overrideStyle:t,overrideClasses:e.className,isDisabled:e.disabled,removeStyleProperty:[],removeClasses:[]};return e.checked?(i={...i,primaryStyle:H},x(i,"PRIMARY")):x(i,a)};return f.jsx(f.Fragment,{children:f.jsx(J,{...n,className:c()})})},Z=K.memo(Q);export{Z as R};
//# sourceMappingURL=RadioButton-86c37166.js.map