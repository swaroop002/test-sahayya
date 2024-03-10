import{q as K,r as x,R as X,j as t,cn as Y,d3 as y,ao as U,c8 as T,dc as j,f as B}from"./index-e8217573.js";import{C as E}from"./EditableTableV2-6afcb42b.js";import{E as W}from"./ErrorDialog-d5eef4d7.js";import{F as q}from"./FileUploadBox-d8087723.js";import{I as g}from"./IconButton-36693dd9.js";import{I as V}from"./Info-6f3aa97c.js";import{R as z}from"./ReadOnlyTable-86accb69.js";import{S as J}from"./Section-00ef9f2b.js";import{F as O}from"./FileUploadService-1aaf11f7.js";import{L as Q}from"./LegalService-c6087928.js";import{R as A}from"./RcuService-53ccbee9.js";import"./SimpleDropDown-061a3470.js";import"./virtualscroller.esm-9939945c.js";import"./withAuth-6de36ebf.js";import"./datatable.esm-f474a654.js";import"./paginator.esm-11c2c115.js";import"./ButtonBox-9e46519a.js";import"./kebab-menu-8835ad2e.js";import"./Dialog-adadaf64.js";import"./SimpleToolTip-3cfbb0c5.js";import"./TransitionGroup-c8afe0ce.js";import"./sortIcon-54357a29.js";import"./Download_Icon-51fc7f46.js";import"./eye_icon-081bddb3.js";import"./No_data-1720c54e.js";const Z={showInfo:!0,stageUid:""},Ce=()=>{const r=K(),[R,S]=x.useState(!1),[a,N]=x.useState(""),[i,C]=x.useState({...Z}),b=X.useRef(null);x.useEffect(()=>{C(e=>({...e,stageUid:(r==null?void 0:r.stageUid)??""}))},[]),x.useEffect(()=>{a&&S(!0)},[a]);const _=()=>{C(e=>({...e,showInfo:!1}))},I=async e=>{var s;console.log("delete row data");try{const c=L(e);await Q.updateDocumentExchange(c),(s=b.current)==null||s.search()}catch(c){console.log(c),N(U(c))}},v=async e=>{var m,d;const s=e.files[0],c=new Date().getTime(),f=Math.random().toString(36).substring(2,8),n=(m=s==null?void 0:s.name)==null?void 0:m.split(".");let l="";if((n==null?void 0:n.length)>1){for(let o=0;o<n.length-1&&o!==n.length-1;o++)l+=n[o];const u=`${l}_${c}_${f}.${n[n.length-1]}`;try{const o=await O.saveFile(s,u),h=F(o.data);await A.updateDocumentExchange(h),(d=b.current)==null||d.search()}catch(o){console.log(o),N(U(o))}}},M=async e=>{var f,n,l,m,d;const s=(n=(f=e==null?void 0:e.documentSections)==null?void 0:f[0])==null?void 0:n.url,c=(m=(l=e==null?void 0:e.documentSections)==null?void 0:l[0])==null?void 0:m.fileName;try{const u=await O.getSignedURL(s);fetch((d=u.data)==null?void 0:d.SignedUrl).then(o=>{if(!o.ok)throw new Error("Network response was not ok: "+o.status);return o.blob()}).then(o=>{const h=URL.createObjectURL(o),p=document.createElement("a");p.href=h,p.download=c,document.body.appendChild(p),p.click(),document.body.removeChild(p),URL.revokeObjectURL(h)}).catch(o=>{console.error("Error fetching the file:",o)})}catch(u){N(U(u))}},F=e=>({docType:{uid:"a1f9c167-ecbb-461d-9b47-7b1efebc6a19"},loanSectionKey:y.DOCUMENT_EXCHANGE,docCategory:T.DOCUMENT_CATEGORY_EXCHANGE_DOCUMENTS,stage:{uid:i.stageUid},loan:{uid:r==null?void 0:r.loanUid},documentSections:[{section:j.DOCUMENT_SECTIONS_FILE_1,fileName:e==null?void 0:e.fileName,fileType:e==null?void 0:e.contentType,thumbUrl:e==null?void 0:e.thumbUrl,url:e==null?void 0:e.url}]}),L=e=>{var c,f,n,l,m,d,u,o,h,p;return{uid:e==null?void 0:e.uid,docType:{uid:"a1f9c167-ecbb-461d-9b47-7b1efebc6a19"},loanSectionKey:y.DOCUMENT_EXCHANGE,docCategory:T.DOCUMENT_CATEGORY_EXCHANGE_DOCUMENTS,stage:{uid:i.stageUid},loan:{uid:r==null?void 0:r.loanUid},documentSections:[{uid:(f=(c=e==null?void 0:e.documentSections)==null?void 0:c[0])==null?void 0:f.uid,section:j.DOCUMENT_SECTIONS_FILE_1,fileName:(l=(n=e==null?void 0:e.documentSections)==null?void 0:n[0])==null?void 0:l.fileName,fileType:(d=(m=e==null?void 0:e.documentSections)==null?void 0:m[0])==null?void 0:d.fileType,thumbUrl:(o=(u=e==null?void 0:e.documentSections)==null?void 0:u[0])==null?void 0:o.thumbUrl,url:(p=(h=e==null?void 0:e.documentSections)==null?void 0:h[0])==null?void 0:p.url,isActive:!1}],isActive:!1}},k=e=>t.jsx("span",{children:(e==null?void 0:e.createdByUserName)??""}),P=e=>{var s;return t.jsx("span",{children:(s=e==null?void 0:e.documentSections)==null?void 0:s[0].fileName})},G=e=>{var s;return t.jsx("span",{children:((s=e==null?void 0:e.documentSections)==null?void 0:s[0].fileType)??""})},$=e=>t.jsx("span",{children:B(e==null?void 0:e.updatedAt)??""}),H=e=>t.jsxs("div",{className:"flex",children:[t.jsx("div",{className:"mr-6",children:t.jsx(g,{onClick:()=>M(e),buttonType:"DOWNLOAD",tooltipOptions:{position:"top",className:"text-xs font-Roboto bg-black text-white !p-1 rounded-md ",showDelay:"1000,",hideDelay:"300"}})}),t.jsx("div",{className:"",children:t.jsx(g,{onClick:()=>I(e),buttonType:"DELETE",tooltipOptions:{position:"top",className:"text-xs font-Roboto bg-black text-white !p-1 rounded-md ",showDelay:"1000,",hideDelay:"300"}})})]});return t.jsxs("div",{className:"grid gap-5 mb-5",children:[i!=null&&i.showInfo?t.jsx(V,{description:"description.legal.info",onClose:_}):null,t.jsx(J,{title:"label.rcu.rcuDocumentExchange",children:t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"flex justify-end",children:t.jsx("div",{className:" mr-3 self-center",children:t.jsx(q,{label:"Add",onSelect:v,variant:Y.PRIMARY})})}),r!=null&&r.loanUid&&(i!=null&&i.stageUid)?t.jsxs(z,{ref:b,standardDataFormatPromise:A.getDocumentExchangeList,search:`&loanUid=${r.loanUid}&stageUid=${i.stageUid}&loanSectionKey=${y.DOCUMENT_EXCHANGE}&isActive=true`,dataKey:"uid",children:[t.jsx(E,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:"User",body:k}),t.jsx(E,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:"File Name",body:P}),t.jsx(E,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:"File Type",body:G}),t.jsx(E,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:"Updated On",body:$}),t.jsx(E,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:"Actions",body:H})]}):null]})}),t.jsx(W,{onHide:()=>{S(!1),N("")},visible:R,errorMessage:a})]})};export{Ce as default};
//# sourceMappingURL=PageDocumentExchange-1604fbb0.js.map