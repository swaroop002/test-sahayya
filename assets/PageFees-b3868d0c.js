import{q as Me,r,aG as T,d4 as ve,v as Fe,ao as C,j as t,aH as X,n as J,dY as Oe,f as z,dR as _,J as Q,b3 as Ue,T as De,aj as Le}from"./index-e8217573.js";import{I as Ye,E as Be}from"./IconButton-36693dd9.js";import{E as He,B as Z}from"./ButtonBox-9e46519a.js";import{i as M,A as We,M as ke}from"./AddNewReceiptDialog-69862c63.js";import{C as n}from"./EditableTableV2-6afcb42b.js";import{E as Ve}from"./ErrorDialog-d5eef4d7.js";import{M as Ge}from"./MenuBox-defc36b0.js";import{R as v}from"./ReadOnlyTable-86accb69.js";import{S as F}from"./Section-00ef9f2b.js";import{S as $e}from"./SharePaymentDetails-7d6fd6f2.js";import{T as qe}from"./Toast-ae99ea5b.js";import{W as Ke}from"./WarningDialog-77a1cb18.js";import{A as Xe}from"./ApplicantService-924aa5cb.js";import{S as Je}from"./StaticMasterDataService-689a6eca.js";import{F as x}from"./FeeService-43f7dd78.js";import{g as ze}from"./Helper-2869971b.js";import{e as Qe,b as Ze}from"./Helper-03e9d878.js";import"./sortIcon-54357a29.js";import"./Download_Icon-51fc7f46.js";import"./kebab-menu-8835ad2e.js";import"./eye_icon-081bddb3.js";import"./AutoComplete-0bca608a.js";import"./search_icon-459d6871.js";import"./withAuth-6de36ebf.js";import"./virtualscroller.esm-9939945c.js";import"./Dialog-adadaf64.js";import"./DocumentUploader-e2ec1a13.js";import"./loader-5f2cfb31.js";import"./DatePicker-b1c13861.js";import"./FileUploadCustom-5ab7fd25.js";import"./Loading-783a01c7.js";import"./MediaGallery-5884b284.js";import"./index-8739acfd.js";import"./Skeleton-7e12d019.js";import"./FileUploadService-1aaf11f7.js";import"./FileUploadMenuBox-f47dc693.js";import"./SimpleDropDown-061a3470.js";import"./InputBox-b9e88f52.js";import"./DocumentService-a293b5f4.js";import"./SystemDatePicker-abe08a29.js";import"./TextData-06df331b.js";import"./DepositAccountService-fb3e0018.js";import"./LoanService-d10912e0.js";import"./Helper-54d1e873.js";import"./datatable.esm-f474a654.js";import"./paginator.esm-11c2c115.js";import"./No_data-1720c54e.js";import"./LinkButton-92540c18.js";import"./link-0172a3d4.js";import"./TransitionGroup-c8afe0ce.js";const w={showPopUp:!1,uid:""},j={RECEIPT:"newReceipt",SHARE_PAYMENT_DETAILS:"sharePaymentDetails"},Jt=()=>{const p=Me(),[N,ee]=r.useState({newReceipt:!1,sharePaymentDetails:!1}),[te,O]=r.useState(!1),[g,u]=r.useState(""),[se,re]=r.useState({applicantName:"",lanId:"",loanUid:""}),h=r.useRef(null),l=r.useRef(null),f=r.useRef(null),[U,ae]=r.useState([]),[I,S]=r.useState(""),[D,L]=r.useState(T.PRIMARY),[A,Y]=r.useState(!1),[B,b]=r.useState({...w}),[ne,ie]=r.useState([{className:"px-1.5 text-xs text-primary-labelColor h-6.5 hover:bg-primary-sapphireBlue-100",label:"Delete",receiptUid:"",command:function(){W("")}}]),[E,P]=r.useState({...M}),d=r.useRef(null),H=r.useRef(null),R=r.useRef(null);r.useEffect(()=>{var e,s,a;(e=h==null?void 0:h.current)==null||e.search(),(s=l==null?void 0:l.current)==null||s.search(),(a=f==null?void 0:f.current)==null||a.search(),le(),oe()},[]),r.useEffect(()=>{g&&O(!0)},[g]),r.useEffect(()=>{var e;d!=null&&d.current&&I!==""&&((e=d==null?void 0:d.current)==null||e.showFunction(),S(""))},[I,D,A]);const oe=async()=>{var e,s,a,i,o,m,k,V,G,$,q,K;try{const c=await Xe.getApplicantInfo(0,20,ve.PRIMARY,(p==null?void 0:p.loanUid)??"");Fe(c)&&((e=c.data)!=null&&e.totalRecords)&&re({lanId:(a=(s=c.data)==null?void 0:s.results)==null?void 0:a[0].loan.lanId,applicantName:`${(m=(o=(i=c.data)==null?void 0:i.results)==null?void 0:o[0])==null?void 0:m.firstName} ${(G=(V=(k=c.data)==null?void 0:k.results)==null?void 0:V[0])==null?void 0:G.lastName}`,loanUid:(K=(q=($=c.data)==null?void 0:$.results)==null?void 0:q[0].loan)==null?void 0:K.uid})}catch(c){u(C(c))}},le=async()=>{var e;try{const s=await Je.getDropdownList("FEE_MODE"),a=[];(e=s==null?void 0:s.data)==null||e.results.forEach(i=>{a.push({name:(i==null?void 0:i.name)??"",value:i==null?void 0:i.code})}),ae(a)}catch(s){console.error(s)}},ce=()=>{N.newReceipt?y(j.RECEIPT):P({...M})},y=e=>{ee(s=>({...s,[e]:!s[e]}))},de=async e=>{var a,i;const s=Qe(e);if(s)try{let o;s!=null&&s.uid?o=x.updateDdeReceipt:o=x.createDdeReceipt,await(o==null?void 0:o(s)),L(T.PRIMARY),S(X.SAVED),Y(!A),(a=l==null?void 0:l.current)==null||a.search(),(i=H.current)==null||i.onCloseAndClearData(),P({...M})}catch(o){console.log(o),u(C(o))}},pe=e=>{P(s=>({...s,...Ze(e)}))},me=(e,s)=>{var a,i;(i=(a=R==null?void 0:R.current)==null?void 0:a.toggle)==null||i.call(a,e),ie(o=>{const m=[...o];return m[0]={...m[0],command:()=>W(s)},m})},W=e=>{e&&b(s=>({...s,showPopUp:!0,uid:e}))},xe=async()=>{var e;try{await x.deleteDdeReceipt(B.uid),L(T.PRIMARY),S(X.SAVED),Y(!A),(e=l==null?void 0:l.current)==null||e.search(),b(s=>({...s,...w}))}catch(s){console.log(s),u(C(s))}},ue=e=>t.jsx("span",{children:e==null?void 0:e.feeRefNo}),he=e=>t.jsx("span",{children:e==null?void 0:e.chargeName}),fe=e=>t.jsx("span",{children:J(e==null?void 0:e.amount)}),Ee=e=>t.jsx("span",{children:e==null?void 0:e.status}),Re=e=>t.jsx("span",{children:(e==null?void 0:e.receiptRefNo)??""}),ye=e=>{var s;return t.jsx("span",{children:((s=Oe)==null?void 0:s[e==null?void 0:e.smInstrumentType])??""})},je=e=>t.jsx("span",{children:z(e.instrumentDate)}),Ne=e=>t.jsx("span",{children:e.txnRefNo}),ge=e=>t.jsx("span",{children:J(e.amount)}),Ie=e=>t.jsx("span",{children:e.remarks}),Se=e=>t.jsx("span",{children:z(e.updatedAtSystemDate)}),Ae=e=>t.jsx("span",{children:ze(e==null?void 0:e.status)}),be=e=>t.jsxs("div",{className:"grid grid-cols-2",children:[t.jsx("div",{className:"",children:t.jsx(Ye,{icon:e.status===_.PENDING_DEPOSIT?He:Be,onClick:()=>pe(e),tooltip:"Edit",tooltipOptions:{position:"top",className:"text-xs font-Roboto bg-black text-white !p-1 rounded-md ",showDelay:"1000,",hideDelay:"300"},disabled:e.status!==_.PENDING_DEPOSIT})}),t.jsx(Z,{buttonType:Q.MENU,disabled:e.status!==_.PENDING_DEPOSIT,onClick:s=>me(s,e.uid)})]}),Pe=e=>t.jsx("span",{children:e==null?void 0:e.totalFeeAmt}),Te=e=>t.jsx("span",{children:e==null?void 0:e.totalReceiptAmt}),Ce=e=>t.jsx("span",{children:Ue(e==null?void 0:e.balanceReceiptAmt,"en-IN",0)}),_e=()=>t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsxs("div",{className:"flex items-center",children:[t.jsx("div",{className:"mr-6",children:t.jsx(De,{className:"text-xl font-bold text-primary-ptext-1000",label:"heading.dde.receipts"})}),t.jsx(Le,{label:"label.dde.sharePaymentDetails",onClick:()=>y(j.SHARE_PAYMENT_DETAILS),variant:"tertiary"})]}),t.jsx("div",{children:t.jsx("div",{className:"",children:t.jsx(Z,{buttonType:Q.ICON_TEXT_ROW,customLabel:"label.dde.addReceipt",onClick:()=>y(j.RECEIPT)})})})]});return t.jsxs("div",{className:"flex flex-col gap-5 h-screen",children:[t.jsx(F,{title:"heading.dde.fees",children:t.jsxs(v,{standardDataFormatPromise:x.getDdeFeeList,search:`&loan.uid=${p.loanUid}&isActive=true`,ref:h,dataKey:"uid",children:[t.jsx(n,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:"Fee Id",body:ue}),t.jsx(n,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:"Charge Name",body:he,style:{minWidth:"300px"}}),t.jsx(n,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:"Amount (₹)",body:fe}),t.jsx(n,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:"Status",body:Ee})]})}),t.jsx(F,{renderHeader:_e,children:t.jsxs(v,{standardDataFormatPromise:x.getDdeReceiptList,search:`${p.loanUid}`,ref:l,dataKey:"uid",children:[t.jsx(n,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:"Receipt ID",body:Re}),t.jsx(n,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:"Instrument type",body:ye,style:{minWidth:"100px"}}),t.jsx(n,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:"Instrument Date",body:je,style:{minWidth:"100px"}}),t.jsx(n,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:"Cheque/ TX Id",body:Ne,style:{minWidth:"100px"}}),t.jsx(n,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:"Amount (₹)",body:ge}),t.jsx(n,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:"Remarks",body:Ie}),t.jsx(n,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:"Updated Date",body:Se}),t.jsx(n,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:"Status",body:Ae}),t.jsx(n,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:"Actions",body:be})]})}),t.jsx(F,{title:"heading.dde.balance",children:t.jsxs(v,{standardDataFormatPromise:x.getBalance,search:`&loan.uid=${p.loanUid}`,ref:f,dataKey:"uid",children:[t.jsx(n,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:"Total Fees Receivable",body:Pe}),t.jsx(n,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:"Total Amount Received",body:Te,style:{minWidth:"300px"}}),t.jsx(n,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:"Balance",body:Ce})]})}),t.jsx(Ge,{ref:R,model:ne,variant:"SECONDARY",buttonClassName:"!bg-transparent",className:"width-full-menubox bg-white  w-max p-1.5 rounded-xl mt-0.5 border shadow-autoCompletePanel"}),t.jsx($e,{visible:N.sharePaymentDetails,onHide:()=>y(j.SHARE_PAYMENT_DETAILS),instrumentTypeOptions:U}),t.jsx(We,{visible:!!(N.newReceipt||E!=null&&E.uid),onHide:ce,module:ke.DDE,instrumentTypeOptions:U,data:{loanInfo:se,updateReceiptDetails:E},onSubmit:de,ref:H}),t.jsx(qe,{position:"bottom-right",ref:d,toastText:I,variant:D}),t.jsx(Ke,{visible:B.showPopUp,className:"w-76 !px-14",title:"heading.dde.fees.receiptDelete",warningMessage:"description.dde.fees.receiptDelete",onCancel:()=>b(e=>({...e,showPopUp:!1})),onConfirm:()=>xe(),onHide:()=>{}}),t.jsx(Ve,{onHide:()=>{O(!1),u("")},visible:te,errorMessage:g})]})};export{Jt as default};
//# sourceMappingURL=PageFees-b3868d0c.js.map