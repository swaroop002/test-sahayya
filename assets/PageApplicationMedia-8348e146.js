var _=Object.defineProperty;var q=(c,l,r)=>l in c?_(c,l,{enumerable:!0,configurable:!0,writable:!0,value:r}):c[l]=r;var N=(c,l,r)=>(q(c,typeof l!="symbol"?l+"":l,r),r);import{at as z,w as H,q as V,r as i,j as a,T as f,o as W,az as x,aM as y,J as A,av as J,z as Q}from"./index-e8217573.js";import{A as K}from"./AutoComplete-0bca608a.js";import{B as b}from"./ButtonBox-9e46519a.js";import{M as X}from"./MediaGallery-5884b284.js";import{S as Z}from"./Section-00ef9f2b.js";import{S as ee}from"./SectionTitle-9f9277ec.js";import{S as h}from"./SimpleDropDown-061a3470.js";import{F as ae}from"./FileUploadService-1aaf11f7.js";import"./search_icon-459d6871.js";import"./withAuth-6de36ebf.js";import"./virtualscroller.esm-9939945c.js";import"./kebab-menu-8835ad2e.js";import"./Download_Icon-51fc7f46.js";import"./Dialog-adadaf64.js";import"./index-8739acfd.js";import"./Skeleton-7e12d019.js";const te="/custom/api";class se extends z{constructor(){super(...arguments);N(this,"getAll",(r="",u="")=>{const s=`${te}/${r}/media/gallery?${u}`;return this.makeGetRequestWithAuth(s)})}}const w=new se;function oe(c){const l=V(),[r,u]=i.useState(!1),[s,p]=i.useState({documentCategory:"",documentType:"",section:"",stage:"",fileType:""}),[m,v]=i.useState({limit:10,loading:!1,totalRecords:0,start:0,search:"",runCustomQuery:!1,records:[]}),[C,E]=i.useState([]),[ne,D]=i.useState([]),[T,$]=i.useState([]),j=i.useRef(null);i.useEffect(()=>{F()},[]),i.useEffect(()=>{var e;(e=j==null?void 0:j.current)==null||e.search()},[m==null?void 0:m.search]);const R=e=>{const{name:t,value:o}=e.target;p(typeof o=="object"?d=>({...d,[t]:{name:o==null?void 0:o.name,id:o.userId}}):d=>({...d,[t]:o}))},g=e=>{const{name:t,value:o}=e.target;p(d=>({...d,[t]:o}))},U=()=>{u(!0)},S=async e=>{try{return(await ae.getSignedURL(e)).data.SignedUrl}catch(t){throw console.log(t),t}},L=async()=>(console.log(l),await w.getAll("login",`loanUid=${l.loanUid}`)),P=async()=>await w.getAll("pd",`loanUid=${l.loanUid}`);async function F(){try{const e=await L(),t=await P(),o=e.map(n=>({uid:n.uid,name:n.name,url:n.url})),d=t.map(n=>({uid:n.uid,name:n.name,url:n.url})),Y=await Promise.all(o.map(async n=>({...n,signedURL:await S(n.url)})));E(Y);const G=await Promise.all(d.map(async n=>({...n,signedURL:await S(n.url)})));D(G)}catch(e){console.error("Error fetching data:",e)}}const I=async e=>{let t=[];e.query.trim().length?(await Q.getAll(0,10,`name=${e.query}&`).then(o=>{o.status===200&&(t=[...o.data])}),t.length===0&&t.push({name:void 0,designation:void 0,emailId:void 0})):t=T,$(t)},k=()=>{let e="";s.documentCategory&&(e=`${e}name:lk=${s.documentCategory}&`),s.documentType&&(e=`${e}name:lk=${s.documentType}&`),s.documentCategory&&(e=`${e}name:lk=${s.documentCategory}&`),s.documentCategory&&(e=`${e}name:lk=${s.documentCategory}&`),s.documentCategory&&(e=`${e}name:lk=${s.documentCategory}&`),v({...m,search:e})},M=()=>{p({documentCategory:"",documentType:"",section:"",stage:"",fileType:""}),v({...m,search:""})},O=()=>{const{documentCategory:e,documentType:t}=s;return a.jsx(a.Fragment,{children:a.jsxs("div",{className:"p-6 flex flex-col gap-6 bg-primary-sapphireBlue-100 rounded-lg",children:[a.jsx("div",{className:"flex ",children:a.jsx(ee,{title:"text.masterData.types.search"})}),a.jsxs("div",{className:" grid grid-cols-1 md:grid-cols-4 gap-3",children:[a.jsx(K,{label:"Document Category",name:"createdBy",field:"name",value:e,variant:W.PRIMARY,suggestions:T,completeMethod:I,onChange:R,itemTemplate:B}),a.jsx(h,{label:"Document Type",name:"documentType",variant:x.SECONDARY,options:y,onChange:g,value:t}),a.jsx(h,{label:"Section",name:"documentType",variant:x.SECONDARY,options:y,onChange:g,value:t}),a.jsx("div",{}),a.jsx(h,{label:"Stage",name:"documentType",variant:x.SECONDARY,options:y,onChange:g,value:t}),a.jsx(h,{label:"File Type",name:"documentType",variant:x.SECONDARY,options:y,onChange:g,value:t}),a.jsx("div",{}),a.jsxs("div",{className:"flex gap-5 justify-end",children:[a.jsx(b,{buttonType:A.RESET_OUTLINE,onClick:M}),a.jsx(b,{buttonType:A.SEARCH_OUTLINE,onClick:k})]})]})]})})},B=e=>e.name===void 0?a.jsxs("div",{className:"flex flex-col items-center justify-center h-39",children:[a.jsx("img",{src:J,alt:"search-icon",className:" h-7 w-7"}),a.jsx(f,{className:"text-primary-labelColor mt-2",label:"Loading..."})]}):a.jsx("div",{className:"flex flex-col",children:a.jsx(f,{className:"text-primary-labelColor",label:`${e.name}`})});return a.jsxs("div",{className:" h-[100vh]",children:[a.jsxs("div",{className:"flex flex-col gap-6  overflow-auto p-3 bg-white rounded-lg",children:[a.jsx("div",{className:"flex w-full justify-between items-center",children:a.jsx(f,{label:"Application Media",className:"text-primary-ptext-1000 text-h2 font-bold flex"})}),O(),a.jsx(Z,{className:"border-2 ",children:a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsx(f,{label:"LOGIN"}),a.jsx("div",{className:"  overflow-y-auto grid grid-cols-8 gap-4",children:C.map((e,t)=>a.jsxs("div",{className:"flex flex-col items-center",onClick:U,children:[a.jsx("div",{children:a.jsx("img",{src:e.url,alt:"image",className:"w-20 h-20"})}),a.jsx("div",{children:e==null?void 0:e.name})]},t))})]})})]}),a.jsx(X,{visible:r,list:C,onToggleVisibility:()=>u(!1)})]})}const Se=H(oe);export{Se as default};
//# sourceMappingURL=PageApplicationMedia-8348e146.js.map