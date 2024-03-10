import{r as a,aF as b,R as J,ad as _,ae as Y,af as k,j as t,ax as F,d$ as c,aG as U,o as A,et as Q,q as Z,aH as D,ao as ee,T as O}from"./index-e8217573.js";import{C as n}from"./EditableTableV2-6afcb42b.js";import{E as L}from"./ErrorDialog-d5eef4d7.js";import{I as w}from"./InputBox-b9e88f52.js";import{R as te}from"./ReadOnlyTable-86accb69.js";import{S as ae}from"./SimpleDropDown-061a3470.js";import{T as W}from"./Toast-ae99ea5b.js";import{s as re}from"./Helper-54d1e873.js";import{S as H}from"./Skeleton-7e12d019.js";import{R as se}from"./RichTextEditor-a03bd2fb.js";import{S as ie}from"./SaveComponent-160c5b32.js";import{C as le}from"./CamService-5ccef840.js";const je=a.forwardRef((j,M)=>{const{data:h,isLoading:y}=j,[x,s]=a.useState(b.VIEW),[o,i]=a.useState(""),[p,g]=a.useState(!1),[f,N]=a.useState(""),[E,T]=a.useState(!1),m=a.useRef(null),S=J.useRef(null),[,C]=a.useState(!1);a.useRef(new _({validators:{...Y()},...k(),autoForceUpdate:{forceUpdate:()=>C(e=>!e)}})),a.useEffect(()=>{var e;m!=null&&m.current&&o!==""&&((e=m==null?void 0:m.current)==null||e.showFunction(),i(""))},[o,p]),a.useEffect(()=>{f&&T(!0)},[f]);const v=e=>t.jsx("div",{className:"pt-4",children:t.jsx(ae,{placeholder:"placeholder.cam.applicantType",name:`applicantType${e==null?void 0:e.uid}`,value:e==null?void 0:e.applicantType,optionLabel:"name",optionValue:"code",variant:A.PRIMARY,options:Q,disabled:!0})}),r=(e,l)=>t.jsx("div",{className:"pt-4",children:t.jsx(w,{variant:A.SECONDARY,className:`${l!=null&&l.number||l!=null&&l.currency?"text-right":""}`,value:l!=null&&l.currency?re((e==null?void 0:e[l==null?void 0:l.field])??""):e==null?void 0:e[l==null?void 0:l.field],disabled:!0})});return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"flex flex-col gap-3 border border-primary-ptext-500  rounded-xl p-5 ",children:t.jsx(F,{override:{read:x===b.VIEW},children:t.jsx("div",{className:" grid grid-cols-4 gap-3  ",children:t.jsx("div",{className:"col-span-4",children:y?t.jsx(H,{height:"19.375rem",width:"100%",borderRadius:"8px",animation:"wave"}):t.jsxs(te,{ref:S,dataKey:"uid",value:h,className:"table-auto-height",children:[t.jsx(n,{header:c.t("label.cam.typeOfApplicant"),className:"text-primary-ptext-1000 text-left text-xs h-12 pl-6",body:v}),t.jsx(n,{header:c.t("label.cam.accountNameHolder"),className:"text-primary-ptext-1000 text-left text-xs h-12 pl-6 min-w-49",body:e=>r(e,{field:"accountHolderName"})}),t.jsx(n,{header:c.t("label.cam.bankName"),className:"text-left text-primary-ptext-1000 text-xs h-12 pl-6  min-w-49",body:e=>r(e,{field:"bankName"})}),t.jsx(n,{header:c.t("label.cam.accountType"),className:"text-left text-primary-ptext-1000 text-xs h-12 pl-6  min-w-49",body:e=>r(e,{field:"accountType"})}),t.jsx(n,{header:c.t("label.cam.accountNumber"),className:"table-header-right text-primary-ptext-1000 text-xs h-12 pl-6",body:e=>r(e,{field:"accountNumber",number:!0})}),t.jsx(n,{header:c.t("label.cam.od/ccLimit"),className:"table-header-right text-primary-ptext-1000 text-xs h-12 pl-6",body:e=>r(e,{field:"odOrCcLimit",currency:!0})}),t.jsx(n,{header:c.t("label.cam.12MonthAbb"),className:"table-header-right text-primary-ptext-1000 text-xs h-12 pl-6",body:e=>r(e,{field:"twelveMonthAbb",currency:!0})}),t.jsx(n,{header:c.t("label.cam.6MonthAbb"),className:"table-header-right text-primary-ptext-1000 text-xs h-12 pl-6",body:e=>r(e,{field:"sixMonthAbb",currency:!0})}),t.jsx(n,{header:c.t("label.cam.3MonthAbb"),className:"table-header-right text-primary-ptext-1000 text-xs h-12 pl-6",body:e=>r(e,{field:"threeMonthAbb",currency:!0})}),t.jsx(n,{header:c.t("label.cam.12MonthsCreditAverage"),className:"table-header-right text-primary-ptext-1000 text-xs h-12 pl-6",body:e=>r(e,{field:"twelveMonthCreditAvg",currency:!0})}),t.jsx(n,{header:c.t("label.cam.current6MonthsCredit"),className:"table-header-right text-primary-ptext-1000 text-xs h-12 pl-6",body:e=>r(e,{field:"currentSixMonthCredit",currency:!0})}),t.jsx(n,{header:c.t("label.cam.previous6MonthsCredit"),className:"table-header-right text-primary-ptext-1000 text-xs h-12 pl-6",body:e=>r(e,{field:"previousSixMonthCredit",currency:!0})}),t.jsx(n,{header:c.t("label.cam.creditRate(both)"),className:"table-header-right text-primary-ptext-1000 text-xs h-12 pl-6",body:e=>r(e,{field:"creditRate",currency:!0})}),t.jsx(n,{header:c.t("label.cam.inwardChequeReturn%"),className:"table-header-right text-primary-ptext-1000 text-xs h-12 pl-6",body:e=>r(e,{field:"inwardCheckReturn",number:!0})}),t.jsx(n,{header:c.t("label.cam.outwardChequeReturn%"),className:"table-header-right text-primary-ptext-1000 text-xs h-12 px-6",body:e=>r(e,{field:"outwardCheckReturn",number:!0})})]})})})})}),t.jsx(W,{position:"bottom-right",ref:m,toastText:o,variant:U.PRIMARY}),t.jsx(L,{onHide:()=>{T(!1),N("")},visible:E,errorMessage:f})]})}),de={editorText:"",errorMessage:""},Ne=a.forwardRef((j,M)=>{const{data:h,isLoading:y,getDetailsCallback:x}=j,s=Z(),[o,i]=a.useState({...de}),[p,g]=a.useState(b.VIEW),[f,N]=a.useState(""),[E,T]=a.useState(!1),[m,S]=a.useState(""),[C,v]=a.useState(!1),r=a.useRef(null),e=a.useRef(null),[,l]=a.useState(!1);a.useRef(new _({validators:{...Y()},...k(),autoForceUpdate:{forceUpdate:()=>l(d=>!d)}})),a.useEffect(()=>{i(d=>({...d,...h}))},[h]),a.useEffect(()=>{var d;r!=null&&r.current&&f!==""&&((d=r==null?void 0:r.current)==null||d.showFunction(),N(""))},[f,E]),a.useEffect(()=>{m&&v(!0)},[m]);const q=d=>{I()&&o!=null&&o.errorMessage&&i(u=>({...u,errorMessage:""}))},I=()=>{var u,R,P,V;return console.log("editor ",e),((V=(P=(R=(u=e==null?void 0:e.current)==null?void 0:u.editor)==null?void 0:R.plugins)==null?void 0:P.wordcount)==null?void 0:V.body.getCharacterCount())<1?(i(z=>({...z,errorMessage:"Mandatory"})),!1):!0},B=async()=>{if(I()){const d=K();try{await le.updateIncomeEligibilityComment(d),N(D.SAVED),T(!E),g(b.VIEW),x==null||x()}catch(u){S(ee(u))}}},G=()=>g(b.EDIT),$=()=>{g(b.VIEW),X(),x==null||x()},K=()=>{var d,u;return{loan:{uid:s==null?void 0:s.loanUid},stage:{uid:s==null?void 0:s.stageUid},remarksOnIncomeEligibility:(u=(d=e.current)==null?void 0:d.editor)==null?void 0:u.getContent()}},X=()=>{i(d=>({...d,errorMessage:""}))};return t.jsxs("div",{children:[t.jsx(ie,{title:"",pageMode:p,disabled:y,onSave:B,onCancel:$,onEdit:G,children:y?t.jsx(H,{height:"19.375rem",width:"100%",borderRadius:"8px",animation:"wave"}):t.jsx(F,{override:{read:p===b.VIEW},children:t.jsx("div",{className:"grid grid-cols-4 gap-3 ",children:t.jsx("div",{className:"col-span-4",children:t.jsx(se,{ref:e,validation:{errorMessage:o.errorMessage},initialValue:o.editorText,onChange:q,height:"400x",disabled:p===b.VIEW})})})})}),t.jsx(W,{position:"bottom-right",ref:r,toastText:f,variant:U.PRIMARY}),t.jsx(L,{onHide:()=>{v(!1),S("")},visible:C,errorMessage:m})]})}),Ee=j=>{const{rows:M,columns:h,inputFields:y,handleChange:x}=j;return t.jsx("div",{className:"dynamic-table-wrapper",children:t.jsxs("table",{className:"dynamic-table ",children:[t.jsx("thead",{children:t.jsx("tr",{className:"dynamic-table-header-row",children:h==null?void 0:h.map((s,o)=>t.jsx("th",{className:"text-primary-ptext-1000  py-3 px-5 font-bold text-xs text-left ",children:t.jsx(O,{className:"",label:s==null?void 0:s.label})},o))})}),t.jsx("tbody",{className:"dynamic-table-body",children:M.map((s,o)=>t.jsx("tr",{className:"dynamic-table-row",children:h==null?void 0:h.map(i=>{var p;return y.includes(i==null?void 0:i.key)?t.jsx("td",{className:"text-primary-ptext-1000 text-right text-xs  p-1 h-12 pr-5 ",children:t.jsx(w,{name:"roi",variant:A.SECONDARY,value:(s==null?void 0:s[i==null?void 0:i.key])??"",className:"text-right min-w-37",onChange:g=>x==null?void 0:x(g,{row:s,column:i,index:o})})},i.key):t.jsx("td",{className:" h-12 pr-5",children:t.jsx(O,{className:"text-primary-ptext-1000 text-xs pl-6 min-w-18 ",label:(p=s==null?void 0:s[i==null?void 0:i.key])==null?void 0:p.toString()})},i.key)})}))})]})})};export{je as B,Ee as D,Ne as I,de as i};
//# sourceMappingURL=DynamicColumnTable-7d520ba8.js.map