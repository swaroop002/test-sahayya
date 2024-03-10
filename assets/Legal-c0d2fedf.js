import{q as le,x as oe,r as l,aG as b,S as ne,g as re,ag as P,dl as m,ao as j,j as e,T as ie,N as ce,l as S,i as U,X as de,J as G,ax as me,K as xe,M as ue,e1 as fe,Q as ge,V as Ne,e2 as pe,e3 as he,e4 as Ae,L as k,d7 as Te,cZ as B,b as $,aH as Ee,f as be,m as je}from"./index-e8217573.js";import{u as Se}from"./LoanDetailActions-c6533c8e.js";import{c as ve,M as Le,C as ye}from"./MainMessageBody-e15b4437.js";import{A as we}from"./AuthValidator-4e739521.js";import{B as Y}from"./ButtonBox-9e46519a.js";import{D as Ie}from"./Dialog-adadaf64.js";import{E as _e}from"./ErrorDialog-d5eef4d7.js";import{S as Ce}from"./SimpleOverlayPanel-f23b2f6a.js";import{T as De}from"./TextButton-41b4a67e.js";import{T as Re}from"./Toast-ae99ea5b.js";import{A as Ve}from"./ACLService-e19daf7c.js";import{L as J}from"./LegalService-c6087928.js";import{L as Oe}from"./LoanService-d10912e0.js";import{u as Me}from"./useSelector-dc41929a.js";import"./Skeleton-7e12d019.js";import"./InputBox-b9e88f52.js";import"./withAuth-6de36ebf.js";import"./StageService-c1c03c89.js";import"./kebab-menu-8835ad2e.js";import"./loader-5f2cfb31.js";import"./TransitionGroup-c8afe0ce.js";const Pe=[{id:1,name:"Report",path:pe},{id:2,name:"Document Exchange",path:he},{id:3,name:"Deviations",path:Ae}],Ue={stageComplete:!1,submit:!1},ns=()=>{const o=le(),K=oe(),[N,d]=l.useState({...Ue}),[F,x]=l.useState(!1),[p,u]=l.useState(""),[H]=l.useState("bottom-right"),[h,v]=l.useState(""),[L,y]=l.useState(b.PRIMARY),[A,w]=l.useState(!1),[n,z]=l.useState({assignedTo:"",delegateTo:"",initiation:"",internalVendor:"",externalVendor:"",status:""}),[f,I]=l.useState(!1),[W,X]=l.useState(!1),T=l.useRef(null),c=l.useRef(null),E=Me(s=>s.UserProfileReducers.profileObj),q=(E==null?void 0:E.sahayyaUserType)===ne.PARTNER_USER;l.useEffect(()=>{Q()},[]),l.useEffect(()=>{console.log(f,"message ");const s=re("VITE_MESSAGE_CONVERSATION_TIMING"),t=async()=>{try{const a=await ye.checkNewMessageAvailability((o==null?void 0:o.stageUid)??"");X(a==null?void 0:a.data)}catch(a){console.log(a)}};t();const r=setInterval(t,s);return()=>{clearInterval(r)}},[]),l.useEffect(()=>{if(o.stageUid){const s=JSON.parse(P(k.STAGE_DETAIL));(s==null?void 0:s.status)===m.COMPLETED||(s==null?void 0:s.status)===m.CANCELLED?d(t=>({...t,stageComplete:!0,submit:!0})):(s==null?void 0:s.status)===m.IN_REVIEW?d(t=>({...t,stageComplete:!1,submit:!0})):d(t=>({...t,stageComplete:!1,submit:!1}))}},[o.stageUid]),l.useEffect(()=>{var s;c!=null&&c.current&&h!==""&&((s=c==null?void 0:c.current)==null||s.showFunction())},[h,L,A]),l.useEffect(()=>{p&&x(!0)},[p]);const Q=()=>{const t=`&uid=${o.loanUid}`;Oe.getAll(0,1,t).then(r=>{const a=JSON.parse(P(k.STAGE_DETAIL)),g=r.data.results[0];K(Se(g)),(a==null?void 0:a.status)===m.COMPLETED||(a==null?void 0:a.status)===m.CANCELLED?d(i=>({...i,stageComplete:!0,submit:!0})):(a==null?void 0:a.status)===m.IN_REVIEW?d(i=>({...i,stageComplete:!1,submit:!0})):d(i=>({...i,stageComplete:!1,submit:!1}))}).catch(r=>{console.log(r),u(j(r))})},Z=async()=>{try{const s=await J.stageComplete((o==null?void 0:o.stageUid)??"");if(Te(s)&&(v("Stage completed successfully"),y(b.PRIMARY),w(!A),Ve.isRouteHasAccess(B))){const t=`${$}${S}${U}${B}/${o.loanUid}/`;window.location.href=t}}catch(s){console.log(s),x(!0),u(j(s))}},ee=async()=>{try{const s=await J.submit((o==null?void 0:o.stageUid)??"");v(Ee.SAVED),y(b.PRIMARY),w(!A)}catch(s){console.log(s),x(!0),u(j(s))}},se=({isActive:s})=>`tab text-sm px-2.5 py-1 min-w-fit ${s?"bg-secondary-steelBlue-900 rounded-sm text-white font-medium shadow-activeBtn ":"text-primary-500"}`,te=s=>{var r,a,g,i,C,D,R,V,O,M;const t=localStorage.getItem("stageDetail");z({assignedTo:((a=(r=JSON.parse(t))==null?void 0:r.assignee)==null?void 0:a.name)??"NA",delegateTo:((i=(g=JSON.parse(t))==null?void 0:g.delegate)==null?void 0:i.name)??"NA",initiation:((C=JSON.parse(t))==null?void 0:C.createdAtSystemDate)??"NA",externalVendor:((R=(D=JSON.parse(t))==null?void 0:D.partner)==null?void 0:R.name)??"NA",internalVendor:((V=JSON.parse(t))==null?void 0:V.internalVendor)??"NA",status:((O=JSON.parse(t))==null?void 0:O.status)??"NA"}),T.current&&((M=T.current)==null||M.toggle(s))},_=s=>{I(!f)},ae=()=>e.jsxs("div",{className:"flex flex-col gap-4 p-5 ",children:[e.jsxs("div",{className:"flex flex-row items-center justify-between",children:[e.jsx("div",{className:"text-sm text-secondary-stext-900",children:"Status :"}),e.jsx("div",{className:"ml-2 text-sm font-bold text-secondary-stext-900",children:n.status})]}),e.jsxs("div",{className:"flex flex-row items-center justify-between",children:[e.jsx("div",{className:"text-sm text-secondary-stext-900",children:"Assigned to :"}),e.jsx("div",{className:"ml-2 text-sm font-bold text-secondary-stext-900",children:n.assignedTo})]}),e.jsxs("div",{className:"flex flex-row items-center justify-between",children:[e.jsx("div",{className:"text-sm text-secondary-stext-900",children:"Delegated to :"}),e.jsx("div",{className:"ml-2 text-sm font-bold text-secondary-stext-900",children:n.delegateTo})]}),e.jsxs("div",{className:"flex flex-row items-center justify-between",children:[e.jsx("div",{className:"text-sm text-secondary-stext-900",children:"Date of Initiation :"}),e.jsx("div",{className:"ml-2 text-sm font-bold text-secondary-stext-900",children:be(n.initiation)})]}),n.internalVendor!=="NA"?e.jsxs("div",{className:"flex flex-row items-center justify-between",children:[e.jsx("div",{className:"text-sm text-secondary-stext-900",children:"Internal Vendor :"}),e.jsx("div",{className:"ml-2 text-sm font-bold text-secondary-stext-900",children:n.internalVendor!=="NA"?n.internalVendor:"NA"})]}):null,n.externalVendor!=="NA"?e.jsxs("div",{className:"flex flex-row items-center justify-between",children:[e.jsx("div",{className:"text-sm text-secondary-stext-900",children:"External Vendor :"}),e.jsx("div",{className:"ml-2 text-sm font-bold text-secondary-stext-900",children:n.externalVendor!=="NA"?n.externalVendor:"NA"})]}):null]});return e.jsx("div",{children:e.jsxs("div",{className:"flex flex-col gap-5 ",children:[e.jsxs("div",{className:"flex items-center justify-between w-full gap-5 ",children:[e.jsxs("div",{className:"flex items-center w-3/4 gap-5 ",children:[e.jsxs("div",{className:"flex items-center gap-2 px-5 py-2 border-r border-secondary-stext-600",children:[e.jsx(ie,{className:"font-bold text-primary-ptext-1000",label:"heading.legal.legalReport"}),e.jsx(De,{className:"underline text-xs  !text-black  ",label:"View Details",onClick:te,isDisabledByAcl:!0}),e.jsxs("button",{onClick:_,className:"relative ",children:[e.jsx("img",{src:ve,alt:"ChatIcon",className:""})," ",W?e.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"}):e.jsx(e.Fragment,{})]})]}),e.jsx("div",{className:"flex",children:Pe.map(s=>e.jsx(ce,{className:se,to:`${S}${U}${de}/${o.loanUid}/${o.stageUid}${s.path}`,children:s.name},s.path))})]}),e.jsxs("div",{className:"flex justify-end w-1/4 gap-4",children:[q?e.jsx(e.Fragment,{}):e.jsx(Y,{buttonType:G.STAGE_COMPLETE,onClickWithLoader:Z,size:"LOAN_DATA",disabled:N.stageComplete}),e.jsx(Y,{buttonType:G.SUBMIT,onClickWithLoader:ee,size:"LOAN_DATA",disabled:N.submit})]})]}),e.jsx("div",{className:"legal-layout-body-content",children:e.jsxs(me,{override:{read:N.stageComplete},children:[e.jsx(l.Suspense,{fallback:e.jsx(xe,{}),children:e.jsx(ue,{children:fe.map((s,t)=>e.jsx(ge,{path:s.path,element:e.jsx(we,{AuthorizedComponent:s.component,urlPath:s.altPath?s.altPath:s.path})},t))})}),e.jsx(Ne,{})]})}),e.jsx(_e,{onHide:()=>{x(!1),u("")},visible:F,errorMessage:p}),e.jsx(Ce,{className:"rounded-lg shadow-lg !w-80 p-1.5 ",ref:T,content:ae()}),e.jsxs("div",{className:"relative h-screen",children:[e.jsx("div",{className:"absolute inset-0 z-10 bg-black opacity-50 backdrop-filter backdrop-blur-sm"}),f?e.jsx(Ie,{visible:f,closable:!1,model:"false",onHide:()=>I(!1),className:"rounded-lg shadow-lg !w-240 bg-blend-darken !p-0 !h-162",children:e.jsx(Le,{params:o,handleCloseOverLay:_})}):null]}),e.jsx(Re,{position:H,ref:c,toastText:h,variant:L,onRemove:()=>{const s=$+S+je;window.location.href=s}})]})})};export{ns as default};
//# sourceMappingURL=Legal-c0d2fedf.js.map