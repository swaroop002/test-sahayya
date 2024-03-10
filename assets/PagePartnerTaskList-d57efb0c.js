var Ee=Object.defineProperty;var Re=(n,i,o)=>i in n?Ee(n,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[i]=o;var q=(n,i,o)=>(Re(n,typeof i!="symbol"?i+"":i,o),o);import{at as ke,r as d,dH as y,dM as S,ad as F,ae as H,af as K,v as Le,ao as Oe,j as t,T as u,dN as $e,o as h,az as W,dO as _e,J as Q,cU as Be,aN as V,z as Me,dK as Ue,dL as Ge,b as Ye,l as qe,i as Fe,s as He,L as Ke,aU as We,f as Qe}from"./index-e8217573.js";import{A}from"./AutoComplete-0bca608a.js";import{B as z}from"./ButtonBox-9e46519a.js";import{E as Ve}from"./ErrorDialog-d5eef4d7.js";import{I as J}from"./InputBox-b9e88f52.js";import{R as ze}from"./ReadOnlyTable-86accb69.js";import{S as Je}from"./SelectButtonBox-10b4d2ac.js";import{S as Xe}from"./SimpleChip-cd3bade6.js";import{S as X}from"./SimpleDropDown-061a3470.js";import{S as Z}from"./SystemDatePicker-abe08a29.js";import{u as m}from"./CustomHooks-0ce50620.js";import{C as p}from"./column.esm-938bad7d.js";import{A as Ze}from"./ApplicantService-924aa5cb.js";import{O as De}from"./Branch-732bec0f.js";import{P as we}from"./ProductConfigProductService-51cfb6b7.js";import{L as ea}from"./LoanService-d10912e0.js";import"./search_icon-459d6871.js";import"./withAuth-6de36ebf.js";import"./virtualscroller.esm-9939945c.js";import"./kebab-menu-8835ad2e.js";import"./Dialog-adadaf64.js";import"./No_data-1720c54e.js";import"./datatable.esm-f474a654.js";import"./paginator.esm-11c2c115.js";import"./DatePicker-b1c13861.js";const aa="/custom/api/stage/manage/partner";class ta extends ke{constructor(){super(...arguments);q(this,"getAll",(o=0,v=10,x="")=>{const f=`${aa}/pipeline/search?start=${o}&limit=${v}${x}`;return this.makeGetRequestWithAuth(f)})}}const sa=new ta,na=[{name:y.QUICK_SEARCH.label,value:y.QUICK_SEARCH.value},{name:y.ADVANCE_SEARCH.label,value:y.ADVANCE_SEARCH.value}],C={applicationNumber:{uid:"",name:""},customerName:{uid:"",name:""},initiatedBy:{uid:"",name:"",userId:""},branch:{uid:"",name:""},product:"",status:"",initiatedOnGreaterThan:"",initiatedOnLessThan:"",daysPendingGreaterThan:"",daysPendingLessThan:""},ka=()=>{var L,O,$,_,B,M;const[n,i]=d.useState({filterType:y.QUICK_SEARCH.value,quickSearch:{status:S.INITIATED},advanceSearch:{...C}}),[o,v]=d.useState([{name:"",uid:"",userId:""}]),[x,f]=d.useState({limit:10,loading:!1,totalRecords:0,start:0,search:`&status=${S.INITIATED}`,runCustomQuery:!1,records:[]}),[D,w]=d.useState([]),[j,I]=d.useState(""),[ee,P]=d.useState(!1),[,g]=d.useState(!1),r=d.useRef(new F({validators:{...H()},...K(),autoForceUpdate:{forceUpdate:()=>g(e=>!e)}})),E=d.useRef(null);d.useEffect(()=>{se()},[]),d.useEffect(()=>{n.quickSearch.status&&ie()},[n.quickSearch.status]),d.useEffect(()=>{var e;x.search&&((e=E.current)==null||e.search())},[x.search]),d.useEffect(()=>{j&&P(!0)},[j]);const R=e=>{var a,s;(s=r==null?void 0:r.current)==null||s.showMessageFor((a=e==null?void 0:e.target)==null?void 0:a.name)},ae=()=>{var a,s;let e=!1;return e=(a=r==null?void 0:r.current)==null?void 0:a.allValid(),e||(g(l=>!l),(s=r==null?void 0:r.current)==null||s.showMessages(),g(l=>!l),!1)},te=()=>{var e;r.current=new F({validators:{...H()},...K(),autoForceUpdate:{forceUpdate:()=>g(a=>!a)}}),(e=r==null?void 0:r.current)==null||e.hideMessages()},se=async()=>{ne()},ne=async()=>{var e;try{const a=await we.getAll(0,30,"");Le(a)&&oe("product",(e=a==null?void 0:a.data)==null?void 0:e.results)}catch(a){console.log(a),I(Oe(a))}},le=e=>{e.value!=null&&i(a=>({...a,filterType:e.value,quickSearch:{status:S.INITIATED},advanceSearch:{...C}}))},re=(e,a)=>{i(s=>{const l={...s.quickSearch};return e===l.status?(l.status="",{...s,quickSearch:l}):e==="ALL"?(l.status="ALL",{...s,quickSearch:l}):(l.status=e,{...s,quickSearch:l})})},N=e=>{const{name:a,value:s}=e.target;let l="";typeof s=="object"?(s.lanId?l=s.lanId:s.fullName?l=s.fullName:s.name&&(l=s.name),i(c=>({...c,advanceSearch:{...c.advanceSearch,[a]:{name:l,uid:s.uid,userId:s.userId}}}))):i(c=>({...c,advanceSearch:{...c.advanceSearch,[a]:{name:s,uid:"",userId:""}}}))},k=e=>{i(a=>({...a,advanceSearch:{...a.advanceSearch,[e.target.name]:e.value}}))},b=e=>{const{value:a}=e.target;i(s=>({...s,advanceSearch:{...s.advanceSearch,[e.target.name]:a}}))},ie=()=>{const e=`&status:in=[${S.INITIATED},${S.RE_OPEN},${S.IN_REVIEW}]`;if(n.quickSearch.status){if(n.quickSearch.status==="ALL"){const s=e;f(l=>({...l,search:s}));return}const a=`&status=${n.quickSearch.status}`;f(s=>({...s,search:a}))}else{const a=e;f(s=>({...s,search:a}))}},ce=()=>{te(),i(e=>({...e,advanceSearch:{...C}})),f({...x,search:""})},de=()=>{var a,s,l,c,T,U,G,Y;if(!ae())return;let e="";(a=n.advanceSearch.applicationNumber)!=null&&a.name&&(e=`${e}&loan.uid=${(s=n.advanceSearch.applicationNumber)==null?void 0:s.uid}`),(l=n.advanceSearch.customerName)!=null&&l.name&&(e=`${e}&applicant.uid=${(c=n.advanceSearch.customerName)==null?void 0:c.uid}`),(T=n.advanceSearch.initiatedBy)!=null&&T.name&&(e=`${e}&createdBy=${(U=n.advanceSearch.initiatedBy)==null?void 0:U.userId}`),(G=n.advanceSearch.branch)!=null&&G.name&&(e=`${e}&loan.branch.uid=${(Y=n.advanceSearch.branch)==null?void 0:Y.uid}`),n.advanceSearch.product&&(e=`${e}&loan.product.uid=${n.advanceSearch.product}`),n.advanceSearch.status&&(n.advanceSearch.status!=="ALL"?e=`${e}&status=${n.advanceSearch.status}`:e=`${e}&status:nq=${Be.DRAFT}`),n.advanceSearch.initiatedOnGreaterThan&&(e=`${e}&createdAtSystemDate:ge=${V(n.advanceSearch.initiatedOnGreaterThan)}`),n.advanceSearch.initiatedOnLessThan&&(e=`${e}&createdAtSystemDate:le=${V(n.advanceSearch.initiatedOnLessThan)}`),n.advanceSearch.daysPendingGreaterThan&&(e=`${e}&daysPending:ge=${n.advanceSearch.daysPendingGreaterThan}`),n.advanceSearch.daysPendingLessThan&&(e=`${e}&daysPending:le=${n.advanceSearch.daysPendingLessThan}`),f({...x,search:e})},oe=(e,a)=>{e==="product"&&w(a??[])},ue=async e=>{let a=[];await ea.getAll(0,10,`&lanId:lk=${e.query}`).then(s=>{s.status===200&&(a=[...s.data.results])}),a.length===0&&a.push({name:"",uid:""}),v(a)},me=async e=>{let a=[];await Ze.getCustomerName(0,10,`&fullName:lk=${e.query}`).then(s=>{s.status===200&&(a=[...s.data.results])}),a.length===0&&a.push({name:"",uid:""}),v(a)},pe=async e=>{let a=[];await Me.getEmployee(0,10,`${e.query}`).then(s=>{s.status===200&&(a=[...s.data.results])}),a.length===0&&a.push({name:"",uid:""}),v(a)},he=async e=>{let a=[];await De.getAll(0,10,`name:lk=${e.query}&`).then(s=>{s.status===200&&(a=[...s.data.results])}),a.length===0&&a.push({name:"",uid:""}),v(a)},xe=e=>{var c,T;const a=Ue[e==null?void 0:e.stageName],s=Ge[e==null?void 0:e.stageName]||"",l=Ye+qe+Fe+s+"/"+((c=e==null?void 0:e.loan)==null?void 0:c.uid)+`/${a?"":(e==null?void 0:e.uid)+"/"}`;return t.jsx("a",{className:"flex items-center underline text-primary-sapphireBlue-900",href:l,onClick:()=>{He(Ke.STAGE_DETAIL,JSON.stringify(e))},children:((T=e==null?void 0:e.loan)==null?void 0:T.lanId)??"-"})},fe=e=>t.jsx("div",{className:"flex items-center",children:We(e==null?void 0:e.stageName)??"-"}),ve=e=>t.jsx("div",{className:"flex items-center",children:(e==null?void 0:e.status)??"-"}),Se=e=>{var a;return t.jsx("div",{className:"flex items-center",children:((a=e==null?void 0:e.loan)==null?void 0:a.linkedLoan)??"-"})},ye=e=>{var a,s;return t.jsx("div",{className:"flex items-center",children:((s=(a=e==null?void 0:e.loan)==null?void 0:a.branch)==null?void 0:s.name)??"-"})},Te=e=>{var a,s;return t.jsx("div",{className:"flex items-center",title:(a=e==null?void 0:e.applicant)==null?void 0:a.fullName,children:((s=e==null?void 0:e.applicant)==null?void 0:s.fullName)??"-"})},ge=e=>{var a,s,l,c;return t.jsx("div",{className:"flex items-center",title:(s=(a=e==null?void 0:e.loan)==null?void 0:a.product)==null?void 0:s.name,children:((c=(l=e==null?void 0:e.loan)==null?void 0:l.product)==null?void 0:c.name)??"-"})},Ne=e=>t.jsx("div",{className:"flex",children:Qe(e==null?void 0:e.createdAtSystemDate)||0}),be=e=>t.jsx("div",{className:"flex justify-end items-center",children:e.daysPending??"-"}),Ae=e=>t.jsx("div",{className:"flex ",children:(e==null?void 0:e.createdByUserName)??"-"}),je=e=>e.lanId===void 0?t.jsx("div",{className:"flex flex-col items-center justify-center h-39",children:t.jsx(u,{className:"text-primary-labelColor mt-2",label:"label.noDataFound"})}):t.jsx("div",{className:"flex flex-col",children:t.jsx(u,{className:"text-primary-labelColor",label:`${e.lanId}`})}),Ce=e=>e.fullName===void 0?t.jsx("div",{className:"flex flex-col items-center justify-center h-39",children:t.jsx(u,{className:"text-primary-labelColor mt-2",label:"label.noDataFound"})}):t.jsx("div",{className:"flex flex-col",children:t.jsx(u,{className:"text-primary-labelColor",label:`${e.fullName}`})}),Ie=e=>e.name===void 0||e.name===""?t.jsx("div",{className:"flex flex-col items-center justify-center h-39",children:t.jsx(u,{className:"text-primary-labelColor mt-2",label:"label.noDataFound"})}):t.jsx("div",{className:"flex flex-col",children:t.jsx(u,{className:"text-primary-labelColor",label:`${e.name}`})}),Pe=e=>e.name===void 0||e.name===""?t.jsx("div",{className:"flex flex-col items-center justify-center h-39",children:t.jsx(u,{className:"text-primary-labelColor mt-2",label:"label.noDataFound"})}):t.jsx("div",{className:"flex flex-col",children:t.jsx(u,{className:"text-primary-labelColor",label:`${e.name}`})});return t.jsxs("div",{className:"p-3 rounded-masterDataPageRadius bg-white flex flex-col gap-3 overflow-scroll screen-body-scroll",children:[t.jsxs("div",{className:"px-3 flex w-full justify-between items-center",children:[t.jsx("div",{className:"py-5",children:t.jsx(u,{className:"text-primary-ptext-1000 font-bold text-2xl  ",label:"label.partnerTask.heading"})}),t.jsx("div",{className:"  w-78.5 ",children:t.jsx(Je,{optionLabel:"name",optionValue:"value",value:n.filterType,options:na,onChange:le})})]}),n.filterType===y.QUICK_SEARCH.value?t.jsxs("div",{className:"p-3  bg-primary-sapphireBlue-100 rounded-lg flex flex-col gap-3",children:[t.jsx(u,{className:"  text-primary-ptext-1000 font-bold text-base",label:"label.partnerTask.status"}),t.jsx("div",{children:t.jsx("div",{className:"py-5 flex gap-3 overflow-x-auto",children:$e.map((e,a)=>{var s;return t.jsx(Xe,{label:e.label,isSelected:((s=n==null?void 0:n.quickSearch)==null?void 0:s.status)===e.value,onClick:()=>re(e.value)},e.label)})})})]}):t.jsxs("div",{className:"p-3 bg-primary-sapphireBlue-100 rounded-lg flex flex-col gap-6",children:[t.jsx(u,{className:"text-primary-ptext-1000 font-bold text-base",label:"label.task.advancedSearch"}),t.jsxs("div",{className:" grid grid-cols-1 md:grid-cols-4 gap-3",children:[t.jsx(A,{label:"label.partnerTask.loanApplicationNumber",name:"applicationNumber",field:"applicationNumber",value:(L=n.advanceSearch.applicationNumber)==null?void 0:L.name,variant:h.PRIMARY,suggestions:o,completeMethod:ue,onChange:N,itemTemplate:je}),t.jsx(A,{label:"label.partnerTask.customerName",name:"customerName",field:"customerName",variant:h.PRIMARY,value:(O=n.advanceSearch.customerName)==null?void 0:O.name,suggestions:o,completeMethod:me,onChange:N,itemTemplate:Ce}),t.jsx(A,{label:"label.partnerTask.initiatedBy",name:"initiatedBy",field:"initiatedBy",variant:h.PRIMARY,value:($=n.advanceSearch.initiatedBy)==null?void 0:$.name,suggestions:o,completeMethod:pe,onChange:N,itemTemplate:Ie}),t.jsx(A,{label:"label.partnerTask.branch",name:"branch",field:"branch",variant:h.PRIMARY,value:(_=n.advanceSearch.branch)==null?void 0:_.name,suggestions:o,completeMethod:he,onChange:N,itemTemplate:Pe}),t.jsx(X,{variant:W.SECONDARY,label:"label.partnerTask.product",name:"product",onChange:k,options:D,value:n.advanceSearch.product,optionLabel:"name",optionValue:"uid"}),t.jsx(X,{variant:W.SECONDARY,label:"label.partnerTask.status",name:"status",onChange:k,options:_e,optionLabel:"label",optionValue:"value",value:n.advanceSearch.status}),t.jsx(Z,{variant:h.PRIMARY,label:"label.partnerTask.initiatedOnGreaterThan",placeholder:"DD-MMM-YYYY",name:"initiatedOnGreaterThan",value:n.advanceSearch.initiatedOnGreaterThan,onChange:b}),t.jsx(Z,{variant:h.PRIMARY,label:"label.partnerTask.initiatedOnLessThan",placeholder:"DD-MMM-YYYY",name:"initiatedOnLessThan",value:n.advanceSearch.initiatedOnLessThan,onChange:b}),t.jsx(J,{label:"label.partnerTask.headingPendingGreaterThan",name:"daysPendingGreaterThan",value:n.advanceSearch.daysPendingGreaterThan,variant:h.SECONDARY,onChange:b,onBlur:R,validation:(B=r==null?void 0:r.current)==null?void 0:B.message("daysPendingGreaterThan",n.advanceSearch.daysPendingGreaterThan,"checkNumber|onlyPositive|onlyInteger")}),t.jsx(J,{label:"label.partnerTask.headingPendingLessThan",name:"daysPendingLessThan",value:n.advanceSearch.daysPendingLessThan,variant:h.SECONDARY,onChange:b,onBlur:R,validation:(M=r==null?void 0:r.current)==null?void 0:M.message("daysPendingLessThan",n.advanceSearch.daysPendingLessThan,"checkNumber|onlyPositive|onlyInteger")}),t.jsx("div",{}),t.jsx("div",{className:"flex justify-end",children:t.jsxs("div",{className:"flex items-center gap-10",children:[t.jsx(z,{buttonType:Q.RESET_OUTLINE,onClick:ce}),t.jsx(z,{buttonType:Q.SEARCH_OUTLINE,onClick:de})]})})]})]}),t.jsx("div",{className:"p-3 flex w-full justify-between items-center",children:t.jsx(u,{className:"text-primary-ptext-1000 font-bold text-2xl ",label:"label.task.myApplications"})}),t.jsxs(ze,{standardDataFormatPromise:sa.getAll,dataKey:"id",search:x.search,ref:E,children:[t.jsx(p,{className:"text-primary-ptext-1000 text-left text-xs py-3 pl-6",header:m("label.partnerTask.loanApplicationNo"),body:xe}),t.jsx(p,{className:"text-primary-ptext-1000 text-left text-xs py-3 pl-6",header:m("label.partnerTask.stage"),body:fe}),t.jsx(p,{className:"text-primary-ptext-1000 text-left text-xs py-3 pl-6",header:m("label.partnerTask.status"),body:ve,style:{minWidth:"100px",width:"auto"}}),t.jsx(p,{className:"text-primary-ptext-1000 text-left text-xs py-3 pl-6",header:m("label.partnerTask.linkedApplication"),body:Se}),t.jsx(p,{className:"text-primary-ptext-1000 text-left text-xs py-3 pl-6",header:m("label.partnerTask.branch"),body:ye}),t.jsx(p,{className:"text-primary-ptext-1000 text-left text-xs py-3 pl-6",header:m("label.partnerTask.customerName"),body:Te,style:{minWidth:"200px",width:"auto"}}),t.jsx(p,{className:"text-primary-ptext-1000 text-left text-xs py-3 pl-6",header:m("label.partnerTask.product"),body:ge,style:{minWidth:"200px",width:"auto"}}),t.jsx(p,{className:"text-primary-ptext-1000 text-left text-xs py-3 pl-6",header:m("label.partnerTask.initiatedOn"),body:Ne,style:{minWidth:"140px",width:"auto"}}),t.jsx(p,{className:"text-primary-ptext-1000 text-left text-xs py-3 pl-6",header:m("label.partnerTask.daysPending"),body:be}),t.jsx(p,{className:"text-primary-ptext-1000 text-left text-xs py-3 pl-6 pr-3",header:m("label.partnerTask.initiatedBy"),body:Ae,style:{minWidth:"200px",width:"auto"}})]}),t.jsx(Ve,{onHide:()=>{P(!1),I("")},visible:ee,errorMessage:j})]})};export{ka as default};
//# sourceMappingURL=PagePartnerTaskList-d57efb0c.js.map