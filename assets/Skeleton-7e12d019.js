import{r as s,O as d,c as m,j as h}from"./index-e8217573.js";function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}var r=s.memo(s.forwardRef(function(e,n){var t=s.useRef(null),a=d.findDiffKeys(e,r.defaultProps),i=e.size?{width:e.size,height:e.size,borderRadius:e.borderRadius}:{width:e.width,height:e.height,borderRadius:e.borderRadius},l=m("p-skeleton p-component",{"p-skeleton-circle":e.shape==="circle","p-skeleton-none":e.animation==="none"},e.className);return s.useImperativeHandle(n,function(){return{props:e,getElement:function(){return t.current}}}),s.createElement("div",o({ref:t,style:i,className:l},a))}));r.displayName="Skeleton";r.defaultProps={__TYPE:"Skeleton",shape:"rectangle",size:null,width:"100%",height:"1rem",borderRadius:null,animation:"wave",style:null,className:null};const g=e=>{const{className:n,shape:t,size:a,width:i,height:l,borderRadius:u,animation:c}=e;return h.jsx(r,{className:n,shape:t,size:a,width:i,height:l,borderRadius:u,animation:c})};export{g as S};
//# sourceMappingURL=Skeleton-7e12d019.js.map
