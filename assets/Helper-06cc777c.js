import{r as m,aF as M,ad as H,ae as $,af as z,aH as D,ao as d,j as S,ax as a,T as ee,aG as ie,eD as J,fj as oe}from"./index-e8217573.js";import{E as ne}from"./ErrorDialog-d5eef4d7.js";import{R as re}from"./RichTextEditor-a03bd2fb.js";import{S as ce}from"./SaveComponent-160c5b32.js";import{S as ue}from"./SimpleDropDown-061a3470.js";import{S as le}from"./Skeleton-7e12d019.js";import{T as te}from"./Toast-ae99ea5b.js";import{R as q}from"./RcuService-53ccbee9.js";const G={rcuUid:"",rcuStatus:"",editorText:"",errorMessage:""},A={PROFILE_VERIFICATION:{headerLabel:"label.rcu.profileVerification*",code:"PROFILE_VERIFICATION"},RCU_STATUS:{headerLabel:"",code:"RCU_STATUS"}},Ae=m.forwardRef((e,r)=>{var _;const{data:i,isLoading:l,getDataOnCancel:n,section:c,dropdownOptions:o}=e,[p,f]=m.useState({...G}),[y,T]=m.useState(M.VIEW),[v,j]=m.useState(""),[R,I]=m.useState(!1),[h,E]=m.useState(""),[N,x]=m.useState(!1),b=m.useRef(null),g=m.useRef(null),[,C]=m.useState(!1),s=m.useRef(new H({validators:{...$()},...z(),autoForceUpdate:{forceUpdate:()=>C(u=>!u)}}));m.useImperativeHandle(r,()=>({save:P,onCancel:K})),m.useEffect(()=>{f(u=>({...u,...i}))},[i]),m.useEffect(()=>{var u;b!=null&&b.current&&v!==""&&((u=b==null?void 0:b.current)==null||u.showFunction(),j(""))},[v,R]),m.useEffect(()=>{h&&x(!0)},[h]);const w=u=>{V()&&p!=null&&p.errorMessage&&f(t=>({...t,errorMessage:""}))},L=()=>{var t,F;let u=!1;return u=((t=s==null?void 0:s.current)==null?void 0:t.allValid())??!1,u||(C(U=>!U),(F=s==null?void 0:s.current)==null||F.showMessages(),C(U=>!U),!1)},V=()=>{var t,F,U,O;return((O=(U=(F=(t=g==null?void 0:g.current)==null?void 0:t.editor)==null?void 0:F.plugins)==null?void 0:U.wordcount)==null?void 0:O.body.getCharacterCount())<1?(f(W=>({...W,errorMessage:"Mandatory"})),!1):!0},P=async()=>{var u,t,F,U;if(L()&&V())try{if(c===A.PROFILE_VERIFICATION.code&&(t=(u=g.current)==null?void 0:u.editor)!=null&&t.getContent()){const O=Q(),W=await q.updateProfileVerification(O)}if(c===A.RCU_STATUS.code&&(U=(F=g.current)==null?void 0:F.editor)!=null&&U.getContent()){const O=Z(),W=await q.updateRcuStatus(O)}j(D.SAVED),I(!R),T(M.VIEW)}catch(O){E(d(O))}},k=()=>T(M.EDIT),K=()=>{n==null||n(),X(),T(M.VIEW)},B=u=>{f(t=>({...t,[u.target.name]:u.target.value}))},Q=()=>{var u,t;return{uid:i.rcuUid?i.rcuUid:"",profileVerification:(t=(u=g.current)==null?void 0:u.editor)==null?void 0:t.getContent()}},Z=()=>{var u,t;return{uid:i.rcuUid?i.rcuUid:"",smRcuStatus:Y,overallRemarks:(t=(u=g.current)==null?void 0:u.editor)==null?void 0:t.getContent()}},X=()=>{var u;s.current=new H({validators:{...$()},...z(),autoForceUpdate:{forceUpdate:()=>C(t=>!t)}}),(u=s==null?void 0:s.current)==null||u.hideMessages()},{rcuStatus:Y}=p;return S.jsxs("div",{children:[S.jsx(ce,{title:(A==null?void 0:A[c].headerLabel)??"",pageMode:y,onSave:P,onCancel:K,onEdit:k,disabled:l,children:l?S.jsx(le,{height:"19.375rem",width:"100%",borderRadius:"8px",animation:"wave"}):S.jsx(a,{override:{read:y===M.VIEW},children:S.jsxs("div",{className:"grid grid-cols-4 gap-3 ",children:[(A==null?void 0:A[c].code)==A.RCU_STATUS.code?S.jsx("div",{className:"col-span-1",children:S.jsx(ue,{label:"label.rcu.rcuStatus",placeholder:"placeholder.legal.status*",name:"rcuStatus",value:Y,optionLabel:"label",optionValue:"value",options:(o==null?void 0:o.rcuStatus)??[],onChange:B,validation:(_=s==null?void 0:s.current)==null?void 0:_.message("rcuStatus",Y,"mandatory"),disabled:y===M.VIEW})}):null,S.jsxs("div",{className:"col-span-4",children:[(A==null?void 0:A[c].code)==A.RCU_STATUS.code&&S.jsx("div",{children:S.jsx(ee,{className:"text-xs",label:"label.rcu.rcuStatusRemarks"})}),S.jsx(re,{ref:g,validation:{errorMessage:p.errorMessage},initialValue:p.editorText,onChange:w,height:"400x",disabled:y===M.VIEW})]})]})})}),S.jsx(te,{position:"bottom-right",ref:b,toastText:v,variant:ie.PRIMARY}),S.jsx(ne,{onHide:()=>{x(!1),E("")},visible:N,errorMessage:h})]})}),Te=(e,r)=>{var c,o,p,f,y,T,v,j,R,I,h,E,N,x,b,g;const i=JSON.parse(e!=null&&e.ccEmail?e==null?void 0:e.ccEmail:"{}"),l={address:(r==null?void 0:r.address)??"",smAddressType:(r==null?void 0:r.propertyType)??"",pincode:{pinCode:((c=r==null?void 0:r.pincode)==null?void 0:c.pinCode)??"",uid:(o=r==null?void 0:r.pincode)==null?void 0:o.uid},city:{name:((p=r==null?void 0:r.city)==null?void 0:p.name)??"",uid:(f=r==null?void 0:r.city)==null?void 0:f.uid},state:((T=(y=r==null?void 0:r.city)==null?void 0:y.state)==null?void 0:T.name)??"",primaryAddressType:(r==null?void 0:r.primaryAddressType)??""};return{dateOfInitiation:(v=e==null?void 0:e.stage)==null?void 0:v.createdAtSystemDate,internalAssignee:{name:(R=(j=e==null?void 0:e.stage)==null?void 0:j.assignee)==null?void 0:R.name},CCEmails:Array.isArray(i)?i:[],description:(I=e==null?void 0:e.stage)==null?void 0:I.remarks,rcuType:(h=e==null?void 0:e.stage)==null?void 0:h.smStageType,externalVendor:{name:(N=(E=e==null?void 0:e.stage)==null?void 0:E.partner)==null?void 0:N.name},profileCheckTable:[l],stageDocuments:(x=e==null?void 0:e.stage)!=null&&x.stageDocuments?(g=(b=e==null?void 0:e.stage)==null?void 0:b.stageDocuments)==null?void 0:g.filter(C=>(C==null?void 0:C.isSharedAtInitiation)===!0):[]}},ve=e=>{var i,l,n,c,o,p,f,y,T,v,j,R,I,h,E,N,x,b,g,C,s,w,L,V,P,k;return{rcuUid:(l=(i=e==null?void 0:e.stage)==null?void 0:i.rcu)==null?void 0:l.uid,loanNo:((o=(c=(n=e==null?void 0:e.stage)==null?void 0:n.rcu)==null?void 0:c.loan)==null?void 0:o.lanId)??"",branch:((T=(y=(f=(p=e==null?void 0:e.stage)==null?void 0:p.rcu)==null?void 0:f.loan)==null?void 0:y.branch)==null?void 0:T.name)??"",salesManager:((I=(R=(j=(v=e==null?void 0:e.stage)==null?void 0:v.rcu)==null?void 0:j.loan)==null?void 0:R.salesManager)==null?void 0:I.name)??"",creditManager:((N=(E=(h=e==null?void 0:e.stage)==null?void 0:h.rcu)==null?void 0:E.loan)==null?void 0:N.creditManager)??"",agency:((b=(x=e==null?void 0:e.stage)==null?void 0:x.partner)==null?void 0:b.name)??"",dateOfReport:(C=(g=e==null?void 0:e.stage)==null?void 0:g.rcu)!=null&&C.dateOfReportingSampling?new Date((w=(s=e==null?void 0:e.stage)==null?void 0:s.rcu)==null?void 0:w.dateOfReportingSampling):"",dedupeCheck:(V=(L=e==null?void 0:e.stage)==null?void 0:L.rcu)!=null&&V.isDedupeCheckDone?J.YES:J.NO,comments:((k=(P=e==null?void 0:e.stage)==null?void 0:P.rcu)==null?void 0:k.dedupeDescription)??"",commentsErrorMessage:""}},he=(e,r,i)=>{var c,o,p,f,y,T,v,j,R,I,h,E,N,x;const l={address:(i==null?void 0:i.address)??"",smAddressType:(i==null?void 0:i.propertyType)??"",pincode:{pinCode:((c=i==null?void 0:i.pincode)==null?void 0:c.pinCode)??"",uid:(o=i==null?void 0:i.pincode)==null?void 0:o.uid},city:{name:((p=i==null?void 0:i.city)==null?void 0:p.name)??"",uid:(f=i==null?void 0:i.city)==null?void 0:f.uid},state:((T=(y=i==null?void 0:i.city)==null?void 0:y.state)==null?void 0:T.name)??"",latitude:i!=null&&i.latitude?`${parseFloat(i.latitude).toFixed(4)}`:"",longitude:i!=null&&i.longitude?`${parseFloat(i==null?void 0:i.longitude).toFixed(4)}`:"",uid:(i==null?void 0:i.uid)??"",primaryAddressType:(i==null?void 0:i.primaryAddressType)??"",propertyType:(i==null?void 0:i.propertyType)??""};return{firstName:((j=(v=e==null?void 0:e.stage)==null?void 0:v.applicant)==null?void 0:j.firstName)??"",middleName:((I=(R=e==null?void 0:e.stage)==null?void 0:R.applicant)==null?void 0:I.middleName)??"",lastName:((E=(h=e==null?void 0:e.stage)==null?void 0:h.applicant)==null?void 0:E.lastName)??"",mobileNumber:((x=(N=e==null?void 0:e.stage)==null?void 0:N.applicant)==null?void 0:x.mobileNo)??"",coApplicantDetailsTable:[...r],showAddressOfType:i!=null&&i.primaryAddressType?i==null?void 0:i.primaryAddressType:i!=null&&i.smAddressType?i==null?void 0:i.smAddressType:"COLLATERAL_PROPERTY",addressData:l,nameOfOrganization:""}},je=e=>{const r=n=>{const c=n.map(o=>({uid:o.uid,fileName:o.fileName,fileType:o.fileType,section:o.section,sectionName:o.sectionName,thumbUrl:o.thumbUrl,url:o.url,isActive:o.isActive}));return c.length?c:[{uid:"",fileName:"",fileType:"",section:"",sectionName:"",thumbUrl:"",url:"",isActive:!1}]},i=n=>[{uid:n.uid,attributes:{...n.attributes},docCategory:n.docCategory,docType:{...n.docType},documentSections:r(n.documentSections),loanSectionKey:n.loanSectionKey,isActive:n.isActive}];return e.map(n=>({sectionMode:M.VIEW,uid:n.uid,savedDocuments:i(n),status:n.smDocVerificationAction,remark:n.remarks,disable:!1}))},Re=e=>{var i,l,n,c;return{...G,rcuUid:((l=(i=e==null?void 0:e.stage)==null?void 0:i.rcu)==null?void 0:l.uid)??"",editorText:((c=(n=e==null?void 0:e.stage)==null?void 0:n.rcu)==null?void 0:c.profileVerification)??""}},Ee=e=>{const r=n=>{const c=n.map(o=>({uid:o.uid,fileName:o.fileName,fileType:o.fileType,section:o.section,sectionName:o.sectionName,thumbUrl:o.thumbUrl,url:o.url,isActive:o.isActive}));return c.length?c:[{uid:"",fileName:"",fileType:"",section:"",sectionName:"",thumbUrl:"",url:"",isActive:!1}]};return{savedDocuments:[...(n=>n==null?void 0:n.map(o=>({uid:o.uid,attributes:{...o.attributes},docCategory:o.docCategory,docFor:o.docFor,docType:{...o.docType},documentSections:r(o.documentSections),loanSectionKey:o.loanSectionKey??"",isActive:o.isActive})))((e==null?void 0:e.loanDocuments)??[])]}},xe=e=>{var i,l,n,c,o,p;return{...G,rcuUid:((l=(i=e==null?void 0:e.stage)==null?void 0:i.rcu)==null?void 0:l.uid)??"",rcuStatus:((c=(n=e==null?void 0:e.stage)==null?void 0:n.rcu)==null?void 0:c.smRcuStatus)??"",editorText:((p=(o=e==null?void 0:e.stage)==null?void 0:o.rcu)==null?void 0:p.overallRemarks)??""}},Ce=e=>{var i,l,n;return{uid:e==null?void 0:e.uid,loan:{uid:(i=e==null?void 0:e.loan)==null?void 0:i.uid},stage:{uid:(l=e==null?void 0:e.stage)==null?void 0:l.uid},actualDeviation:e==null?void 0:e.actualDeviation,deviation:{uid:(n=e==null?void 0:e.deviation)==null?void 0:n.uid},smDeviationType:e==null?void 0:e.smDeviationType,mitigation:e==null?void 0:e.mitigation,isActive:e==null?void 0:e.isActive,smDeviationCategory:oe.RCU_DEVIATIONS}};export{A as R,Ae as S,ve as a,he as b,Re as c,xe as d,je as e,Ee as f,Ce as g,G as i,Te as u};
//# sourceMappingURL=Helper-06cc777c.js.map