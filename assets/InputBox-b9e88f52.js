import{j as a,a8 as g,a9 as p,aa as I,r as C,a7 as f,ab as B,ac as S}from"./index-e8217573.js";import{w}from"./withAuth-6de36ebf.js";const E=e=>{const{hideLabel:i,label:n,labelClassNames:d,labelStyleObj:r,validation:s,hideErrorRow:t,errorClassNames:c,errorStyleObj:m,disabled:l,isDisabledByAcl:o,isIgnoreAccessLevel:P,reportFormDirty:T,suffix:b,...u}=e,{placeholder:x,className:v,value:y,style:h,name:N,onChange:j}=u;return a.jsxs("div",{className:"group grid w-full",children:[!i&&a.jsx(g,{label:n,labelClassNames:d,labelStyleObj:r,isInvalid:s}),a.jsxs("div",{className:"flex",children:[a.jsx(p,{...u,value:y,style:h,name:N,placeholder:x,onChange:j,disabled:l||o,className:`${v} ${o?"!bg-secondary-disabledBGColor !border-primary-gray-300 placeholder-secondary-gray-500 ":" "} `}),b?a.jsx("div",{className:"bg-gray-100 w-max-fit px-2 h-full rounded-r-md flex items-center ",children:b}):null]}),!t&&a.jsx(I,{validation:s,hideErrorRow:t,errorClassNames:c})]})},L=w(E),O=e=>{const{variant:i,styleObj:n,args:d,...r}=e,{placeholder:s,label:t}=r,c=()=>{const o={...B,overrideStyle:n,overrideClasses:e.className,isDisabled:e.disabled,isInvalid:!!e.validation,removeStyleProperty:[],removeClasses:[]};return S(o,i)},{t:m}=f();let l;return s!==void 0?l=m(s,d):l="",a.jsx(L,{...r,label:t,className:c(),validation:e.validation,placeholder:l,labelClassNames:e.labelClassNames?e.labelClassNames:" mb-1 "})},D=C.memo(O);export{L as B,D as I};
//# sourceMappingURL=InputBox-b9e88f52.js.map