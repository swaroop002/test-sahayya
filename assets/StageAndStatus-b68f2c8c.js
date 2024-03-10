import{w as we,q as se,x as Le,r as i,aG as H,ad as J,ae as q,af as V,cU as Ie,ao as A,v as M,d4 as Pe,j as t,T as b,J as j,K as Ue,M as Me,dE as Oe,Q as De,V as Ye,N as Fe,l as ke,i as Be,cZ as Ge,o as X,aF as We,c8 as $e,c_ as Ke,dF as ze,d7 as He,aw as Je,aH as qe,dG as Q}from"./index-e8217573.js";import{u as Ve}from"./LoanDetailActions-c6533c8e.js";import{A as Xe}from"./AutoComplete-0bca608a.js";import{B as R}from"./ButtonBox-9e46519a.js";import{D as Z}from"./Dialog-adadaf64.js";import{E as Qe}from"./ErrorDialog-d5eef4d7.js";import{I as ee}from"./InputTextArea-b90aad1d.js";import{T as Ze}from"./Toast-ae99ea5b.js";import{S as O}from"./StageService-c1c03c89.js";import{L as et}from"./LoanService-d10912e0.js";import{i as tt,D as st}from"./DocumentUploader-e2ec1a13.js";import{S as at}from"./SimpleDropDown-061a3470.js";import{A as nt}from"./ApplicantService-924aa5cb.js";import{S as ot}from"./StaticMasterDataService-689a6eca.js";import{T as rt}from"./TextData-06df331b.js";import"./search_icon-459d6871.js";import"./withAuth-6de36ebf.js";import"./virtualscroller.esm-9939945c.js";import"./kebab-menu-8835ad2e.js";import"./TransitionGroup-c8afe0ce.js";import"./loader-5f2cfb31.js";import"./DatePicker-b1c13861.js";import"./FileUploadCustom-5ab7fd25.js";import"./Loading-783a01c7.js";import"./MediaGallery-5884b284.js";import"./Download_Icon-51fc7f46.js";import"./index-8739acfd.js";import"./Skeleton-7e12d019.js";import"./FileUploadService-1aaf11f7.js";import"./FileUploadMenuBox-f47dc693.js";import"./MenuBox-defc36b0.js";import"./IconButton-36693dd9.js";import"./sortIcon-54357a29.js";import"./eye_icon-081bddb3.js";import"./InputBox-b9e88f52.js";import"./DocumentService-a293b5f4.js";const it=[{id:1,name:"Stages",path:Ke},{id:2,name:"Stage History",path:ze}],te={stageName:"",assignTo:{name:"",uid:""},reasonForReappeal:"",reappealDocs:tt};function lt(){const D=se(),h=i.useRef(null),[g,N]=i.useState(!1),[L,E]=i.useState(!1);i.useEffect(()=>{const a=h.current;if(a){N(a.scrollLeft>0),E(a.scrollLeft+a.clientWidth<a.scrollWidth);const c=()=>{N(a.scrollLeft>0),E(a.scrollLeft+a.clientWidth<a.scrollWidth)};a.addEventListener("scroll",c);const C=T=>{a.scrollLeft+=T.deltaX};return a.addEventListener("wheel",C),()=>{a.removeEventListener("scroll",c),a.removeEventListener("wheel",C)}}},[]);const v=a=>{const c=h.current;c&&c.scrollBy({left:a,behavior:"smooth"})},y=({isActive:a})=>`tab text-sm px-2.5 py-1 min-w-fit ${a?"bg-secondary-steelBlue-900 rounded-sm text-white font-medium shadow-activeBtn ":"text-primary-500"}`;return t.jsxs("div",{className:"scroll-container",children:[t.jsx("div",{ref:h,className:"content",children:it.map(a=>t.jsx(Fe,{className:y,to:`${ke}${Be}${Ge}/${D.loanUid}${a.path}`,children:a.name},a.path))}),g&&t.jsx("button",{title:"Scroll left",type:"button",className:"p-panelmenu-icon pi pi-chevron-left scroll-button left",onClick:()=>v(-200)}),L&&t.jsx("button",{title:"Scroll right",type:"button",className:"p-panelmenu-icon pi pi-chevron-right scroll-button right",onClick:()=>v(200)})]})}const ct=D=>{const h=se(),g=h.loanUid??"",N=Le(),[L,E]=i.useState(""),[v,y]=i.useState(!1),[a,c]=i.useState({isRejectAppConfirmationVisible:!1,reasonToReject:"",description:""}),[C,T]=i.useState(!1),[Y,S]=i.useState(te),[ae,F]=i.useState(!1),[ne,oe]=i.useState([]),[re,ie]=i.useState([]),[le,mt]=i.useState("bottom-right"),[ce,k]=i.useState(!1),[I,p]=i.useState(""),[P,me]=i.useState(""),[B,ue]=i.useState(H.PRIMARY),[G,pe]=i.useState(!1),d=i.useRef(null),f=i.useRef(null),[,_]=i.useState(!1),r=i.useRef(new J({validators:{...q()},...V(),autoForceUpdate:{forceUpdate:()=>_(e=>!e)}}));i.useEffect(()=>{de(),fe(),xe()},[]),i.useEffect(()=>{I&&k(!0)},[I]),i.useEffect(()=>{var e;d!=null&&d.current&&P!==""&&((e=d==null?void 0:d.current)==null||e.showFunction())},[P,B,G]);const de=()=>{const s=`&uid=${h.loanUid}`;et.getAll(0,1,s).then(n=>{const o=n.data.results[0];o.loanStatus===Ie.REJECTED&&y(!0),N(Ve(o))}).catch(n=>{p(A(n))})},fe=async()=>{ot.getAll(0,1e3,"staticMasterType.code=LOAN_REJECTION_REASON&").then(e=>{var s,n;if(M(e)){const o=(n=(s=e==null?void 0:e.data)==null?void 0:s.results)==null?void 0:n.map(l=>({name:(l==null?void 0:l.name)??"",code:(l==null?void 0:l.code)??""}));oe(o!=null&&o.length?o:[])}}).catch(e=>{console.log(e),p(A(e))})},xe=async()=>{var e,s,n,o,l,u,m;try{const x=await nt.getApplicantInfo(0,20,Pe.PRIMARY,g);if(M(x)&&((e=x.data)!=null&&e.totalRecords))return S(_e=>{var $,K,z;return{..._e,applicantUid:(z=(K=($=x.data)==null?void 0:$.results)==null?void 0:K[0])==null?void 0:z.uid}}),E((o=(n=(s=x.data)==null?void 0:s.results)==null?void 0:n[0])==null?void 0:o.uid),((m=(u=(l=x.data)==null?void 0:l.results)==null?void 0:u[0])==null?void 0:m.uid)??""}catch(x){p(A(x))}},he=async()=>{var s,n,o;if(!((n=(s=r==null?void 0:r.current)==null?void 0:s.fields)!=null&&n.reasonToReject)){(o=r==null?void 0:r.current)==null||o.showMessages();return}const e={rejectRemark:a==null?void 0:a.description,reasonToReject:a==null?void 0:a.reasonToReject};try{const l=await O.rejectLoan(g,e);He(l)&&(c(u=>({...u,isRejectAppConfirmationVisible:!1})),y(!0))}catch(l){c(u=>({...u,isRejectAppConfirmationVisible:!1,reasonToReject:"",description:""})),p(A(l))}},U=e=>{var s,n;(n=r==null?void 0:r.current)==null||n.showMessageFor((s=e==null?void 0:e.target)==null?void 0:s.name)},ge=()=>{var s,n;let e=!1;return e=(s=r==null?void 0:r.current)==null?void 0:s.allValid(),e||(_(o=>!o),(n=r==null?void 0:r.current)==null||n.showMessages(),_(o=>!o),!1)},Te=e=>{S(s=>({...s,[e.target.name]:e.target.value}))},W=e=>{c(s=>({...s,[e.target.name]:e.target.value}))},Ae=e=>{const{name:s,value:n}=e.target;S(typeof n=="object"?o=>({...o,[s]:{name:n==null?void 0:n.name,uid:n==null?void 0:n.uid}}):o=>({...o,[s]:{name:n,uid:""}}))},je=async()=>{T(!0)},Re=()=>{c(e=>({...e,isRejectAppConfirmationVisible:!0}))},Se=async()=>{var n;const e=(n=f==null?void 0:f.current)==null?void 0:n.getUploadedData();if(!ge()||!(e!=null&&e.documentUid))return;const s=Ee(Y,e);try{const o=await O.createReAppeal(s);Je(o)&&(T(!1),ue(H.PRIMARY),me(qe.SAVED),pe(!G),w())}catch(o){console.log(o),p(A(o)),T(!1),w()}},be=()=>{var e;w(),S(te),T(!1),(e=f==null?void 0:f.current)==null||e.resetDocUpload()},Ne=async e=>{var o;const{originalEvent:s}=e;let n=[];((o=s==null?void 0:s.target)==null?void 0:o.name)==="assignee"&&F(!0);try{await O.findStageAssignee(0,10,e.query,g,Q.REAPPEAL).then(l=>{var u;M(l)&&(n=[...l.data],((u=s==null?void 0:s.target)==null?void 0:u.name)==="assignee"&&F(!1))})}catch(l){console.log(l),p(A(l))}n.length===0&&n.push({name:void 0,code:void 0,uid:void 0}),ie(n)},w=()=>{var e;r.current=new J({validators:{...q()},...V(),autoForceUpdate:{forceUpdate:()=>_(s=>!s)}}),(e=r==null?void 0:r.current)==null||e.hideMessages()},Ee=(e,s)=>{const n=l=>l.map(m=>({uid:m.uid?m.uid:null,section:m.code,fileName:m.fileName,fileType:m.contentType,thumbUrl:m.thumbUrl,url:m.url,isActive:m.isActive}));return{loan:{uid:g},applicant:{uid:L},stageName:Q.REAPPEAL,assignee:{uid:e.assignTo.uid},delegate:null,partner:null,remarks:e.reasonForReappeal,smStageType:null,stageInitiationDetail:{ccEmail:""},loanDocuments:s!=null&&s.documentUid?[{docType:{uid:s==null?void 0:s.documentUid},docCategory:s==null?void 0:s.documentCategory,documentSections:n(s==null?void 0:s.documentSectionUrls)}]:[],address:null}},ve=e=>(e==null?void 0:e.name)===void 0?t.jsx("div",{className:"flex flex-col items-center justify-center h-39 pointer-events-none cursor-default",children:t.jsx(b,{className:"text-primary-labelColor mt-2",label:"label.noDataFound"})}):t.jsx("div",{className:"flex flex-col",children:t.jsx(b,{className:"text-primary-labelColor",label:e==null?void 0:e.name})}),ye=()=>{var n,o;const{assignTo:e,reasonForReappeal:s}=Y;return t.jsx(Z,{className:"!w-137 !p-0 reappeal-dialog",visible:C,closable:!1,children:t.jsxs("div",{className:"py-3 px-6 flex flex-col gap-3 ",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("div",{className:"mb-6 font-bold text-base text-primary-primaryTextColor",children:t.jsx(b,{className:"",label:"label.heading.stage.re-appeal"})}),t.jsxs("div",{className:"flex items-center gap-5 text-xs text-primary-ptext-1000",children:[t.jsx("div",{children:t.jsx(R,{className:"",buttonType:j.CANCEL_OUTLINE,onClick:be})}),t.jsx("div",{children:t.jsx(R,{className:"",buttonType:j.RE_APPEAL,onClickWithLoader:Se})})]})]}),t.jsx("div",{children:t.jsx("div",{className:"w-56",children:t.jsx(Xe,{variant:X.PRIMARY,label:"label.text.stage.assign.to*",placeholder:"",name:"assignTo",value:e==null?void 0:e.name,suggestions:re,completeMethod:Ne,onChange:Ae,itemTemplate:ve,loader:ae,validation:(n=r==null?void 0:r.current)==null?void 0:n.message("assignTo",e==null?void 0:e.uid,"mandatory"),onBlur:U})})}),t.jsx("div",{children:t.jsx(ee,{className:"!h-40",name:"reasonForReappeal",label:"label.text.descriptionMandatory",placeholder:"Enter Description",onBlur:U,validation:(o=r==null?void 0:r.current)==null?void 0:o.message("reasonForReappeal",s,"mandatory"),value:s,onChange:Te,autoResize:!0})}),t.jsxs("div",{children:[t.jsx(rt,{label:"label.dde.stageAndStatus.pageStages",titleClass:"text-primary-sideBarBgColor text-sm font-bold"}),t.jsx(st,{ref:f,mode:We.EDIT,queryParamForDocList:$e.DOCUMENT_CATEGORY_REAPPEAL_DOCUMENTS})]})]})})},Ce=()=>{var e;return t.jsx(Z,{className:"!w-202.625 !py-4 !px-0",visible:a==null?void 0:a.isRejectAppConfirmationVisible,closable:!1,children:t.jsxs("div",{className:"flex flex-col justify-start gap-6",children:[t.jsxs("div",{className:"flex justify-between items-center px-8 border-b pb-2.5",children:[t.jsx(b,{className:"text-base font-bold text-primary-primaryTextColor",label:"label.text.rejectLoanApplication"}),t.jsxs("div",{className:"flex items-center gap-6",children:[t.jsx(R,{buttonType:j.NO,onClick:()=>{w(),c(s=>({...s,isRejectAppConfirmationVisible:!1,reasonToReject:"",description:""}))}}),t.jsx(R,{buttonType:j.YES,onClickWithLoader:he})]})]}),t.jsxs("div",{className:"px-8 flex flex-col justify-start gap-2",children:[t.jsx("div",{className:"w-[62.56%]",children:t.jsx(at,{label:"label.text.reasonToReject*",name:"reasonToReject",value:a==null?void 0:a.reasonToReject,onChange:W,onBlur:U,options:ne,optionLabel:"name",optionValue:"code",validation:(e=r==null?void 0:r.current)==null?void 0:e.message("reasonToReject",a==null?void 0:a.reasonToReject,"mandatory")})}),t.jsx("div",{className:"w-[62.56%]",children:t.jsx(ee,{hideMaxCount:!0,disableMaxCount:!0,name:"description",className:"!h-40",label:"label.text.description*",placeholder:"Enter Description",variant:X.SECONDARY,onChange:W,value:a==null?void 0:a.description,autoResize:!0})})]})]})})};return t.jsxs("div",{className:"flex flex-col  gap-5 ",children:[t.jsxs("div",{className:"flex items-center justify-between gap-5 w-full",children:[t.jsxs("div",{className:"flex items-center gap-5 w-11/12",children:[t.jsx("div",{className:"border-r flex items-center border-secondary-stext-600 px-5 py-2 w-max ",children:t.jsx(b,{className:"text-primary-ptext-1000 font-bold",label:"Stage & Status"})}),t.jsx("div",{className:"w-4/5",children:t.jsx(lt,{})})]}),t.jsx("div",{className:"w-1/12",children:v?t.jsx(R,{className:"bg-white",buttonType:j.RE_APPEAL,onClickWithLoader:je,size:"LOAN_DATA"}):t.jsx(R,{className:"bg-white",buttonType:j.REJECT_APPLICATION,onClickWithLoader:Re,size:"LOAN_DATA"})})]}),t.jsxs("div",{className:"stage-status-layout-body-content  ",children:[t.jsx(i.Suspense,{fallback:t.jsx(Ue,{}),children:t.jsx(Me,{children:Oe.map((e,s)=>t.jsx(De,{path:e.path,element:t.jsx(e.component,{})},s))})}),t.jsx(Ye,{})]}),ye(),a!=null&&a.isRejectAppConfirmationVisible?Ce():null,t.jsx(Qe,{onHide:()=>{k(!1),p("")},visible:ce,errorMessage:I}),t.jsx(Ze,{position:le,ref:d,toastText:P,variant:B})]})},Ht=we(ct);export{Ht as default};
//# sourceMappingURL=StageAndStatus-b68f2c8c.js.map
