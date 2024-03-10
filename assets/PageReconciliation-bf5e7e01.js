import{w as ls,r as u,aG as Ve,x as as,ad as je,ae as we,af as Oe,j as s,T as r,J as A,dZ as et,dR as tt,o as m,aH as st,ao as lt,f as at,b3 as ae,dY as ns,b as rs,l as os,dP as is,c$ as N}from"./index-e8217573.js";import{A as cs,M as us,i as ot}from"./AddNewReceiptDialog-69862c63.js";import{A as T}from"./AutoComplete-0bca608a.js";import{B as E}from"./ButtonBox-9e46519a.js";import{D as ds}from"./Dialog-adadaf64.js";import{E as ms}from"./ErrorDialog-d5eef4d7.js";import{I as V}from"./InputBox-b9e88f52.js";import{I as fs}from"./InputTextArea-b90aad1d.js";import{M as xs}from"./MenuBox-defc36b0.js";import{R as hs}from"./ReadOnlyTable-86accb69.js";import{S as ps}from"./SectionTitle-9f9277ec.js";import{S as ne}from"./SimpleDropDown-061a3470.js";import{S as re}from"./SystemDatePicker-abe08a29.js";import{u as f}from"./CustomHooks-0ce50620.js";import{C as x}from"./column.esm-938bad7d.js";import{S as Ns}from"./StaticMasterDataService-689a6eca.js";import{D as nt}from"./DepositAccountService-fb3e0018.js";import{F as S}from"./FeeService-43f7dd78.js";import{L as rt}from"./LoanService-d10912e0.js";import{e as ys}from"./Helper-03e9d878.js";import{g as Ts}from"./Helper-2869971b.js";import"./DocumentUploader-e2ec1a13.js";import"./loader-5f2cfb31.js";import"./DatePicker-b1c13861.js";import"./withAuth-6de36ebf.js";import"./FileUploadCustom-5ab7fd25.js";import"./Loading-783a01c7.js";import"./MediaGallery-5884b284.js";import"./Download_Icon-51fc7f46.js";import"./index-8739acfd.js";import"./Skeleton-7e12d019.js";import"./FileUploadService-1aaf11f7.js";import"./FileUploadMenuBox-f47dc693.js";import"./kebab-menu-8835ad2e.js";import"./Toast-ae99ea5b.js";import"./TransitionGroup-c8afe0ce.js";import"./IconButton-36693dd9.js";import"./sortIcon-54357a29.js";import"./eye_icon-081bddb3.js";import"./DocumentService-a293b5f4.js";import"./TextData-06df331b.js";import"./Helper-54d1e873.js";import"./search_icon-459d6871.js";import"./virtualscroller.esm-9939945c.js";import"./No_data-1720c54e.js";import"./datatable.esm-f474a654.js";import"./paginator.esm-11c2c115.js";const oe={receiptUid:"",status:"",dateOfStatus:"",remark:""},it={loan:{name:"",uid:""},customer:{name:"",uid:""},receipt:{name:"",uid:""},collectedBy:{name:"",userId:""},dateOfReceiptGreaterThenEqualTo:"",dateOfReceiptLessThenEqualTo:"",receiptAmountGreaterThenEqualTo:"",receiptAmountLessThenEqualTo:"",instrumentType:"",deposit:{name:"",uid:""},sahayyaBankAccount:{name:"",uid:"",accountNumber:""},depositAmountGreaterThenEqualTo:"",depositAmountLessThenEqualTo:"",utcChequeNo:{name:"",uid:""},reconciliationStatus:""},Ss={showFilter:!0,filter:{...it},tableSearch:"",dropdownOptions:{instrumentType:[]},updateStatusDialog:!1,editReceiptDialog:!1,editReceipt:{...ot},updateStatus:{...oe}},Cs=Rs=>{var pe,Ne,ye,Te,Se,Ce,Re,Ae,Ee,ve,Ie;const[t,i]=u.useState({...Ss}),[ct,ie]=u.useState(!1),[j,w]=u.useState(""),[ce,O]=u.useState(""),[ut,dt]=u.useState(Ve.PRIMARY),[ee,ue]=u.useState(!1),[y,de]=u.useState([{name:""}]),[mt,ft]=u.useState([{className:"px-1.5 text-xs text-primary-labelColor h-6.5 hover:bg-primary-sapphireBlue-100",label:"Update Status",receiptUid:"",command:function(){console.log("delete")}}]),[,X]=u.useState(!1),p=u.useRef(null),Z=u.useRef(null),R=u.useRef(null),me=u.useRef(null);as();const c=u.useRef(new je({validators:{...we()},...Oe(),autoForceUpdate:{forceUpdate:()=>X(e=>!e)}}));u.useEffect(()=>{var e;(e=p==null?void 0:p.current)==null||e.search(),Ft()},[]),u.useEffect(()=>{j&&ie(!0)},[j]),u.useEffect(()=>{var e;R!=null&&R.current&&ce!==""&&((e=R==null?void 0:R.current)==null||e.showFunction(),O(""))},[ce,ut,ee]),u.useEffect(()=>{(t==null?void 0:t.updateStatusDialog)===!1&&(i(e=>({...e,updateStatus:{...oe}})),he())},[t==null?void 0:t.updateStatusDialog]),u.useEffect(()=>{var e;(e=p==null?void 0:p.current)==null||e.search()},[t==null?void 0:t.tableSearch]);const z=e=>{const{name:l,value:a}=e.target;i(n=>({...n,filter:{...n.filter,[l]:a}}))},Q=e=>{const{name:l,value:a}=e.target,n=N(a??"");i(o=>({...o,filter:{...o.filter,[l]:typeof n=="number"?ae(n,"en-IN",0):""}}))},xt=e=>{const{value:l}=e.target;i(typeof l=="object"?a=>({...a,filter:{...a.filter,[e.target.name]:{name:l.lanId}}}):a=>({...a,filter:{...a.filter,[e.target.name]:{name:l}}}))},ht=e=>{const{value:l}=e.target;i(typeof l=="object"?a=>({...a,filter:{...a.filter,[e.target.name]:{name:l.applicantName}}}):a=>({...a,filter:{...a.filter,[e.target.name]:{name:l}}}))},pt=e=>{const{value:l}=e.target;i(typeof l=="object"?a=>({...a,filter:{...a.filter,[e.target.name]:{name:l.receiptRefNo}}}):a=>({...a,filter:{...a.filter,[e.target.name]:{name:l}}}))},Nt=e=>{const{value:l}=e.target;i(typeof l=="object"?a=>({...a,filter:{...a.filter,[e.target.name]:{name:l.depositRefNo}}}):a=>({...a,filter:{...a.filter,[e.target.name]:{name:l}}}))},fe=(e,l)=>{const{value:a}=e.target;if(typeof a=="object")i(n=>({...n,filter:{...n.filter,[e.target.name]:{name:a.holderName,accountNumber:a.accountNumber}}}));else{let n={};l?n={...n,name:"",accountNumber:a}:n={...n,name:a,accountNumber:""},i(o=>({...o,filter:{...o.filter,[e.target.name]:{...n}}}))}},yt=e=>{const{value:l}=e.target;i(typeof l=="object"?a=>({...a,filter:{...a.filter,[e.target.name]:{name:l.txnRefNo}}}):a=>({...a,filter:{...a.filter,[e.target.name]:{name:l}}}))},Tt=e=>{const{value:l}=e.target;i(typeof l=="object"?a=>({...a,filter:{...a.filter,[e.target.name]:{name:l.name,userId:l.userId}}}):a=>({...a,filter:{...a.filter,[e.target.name]:{name:l}}}))},te=e=>{var l,a;(a=c==null?void 0:c.current)==null||a.showMessageFor((l=e==null?void 0:e.target)==null?void 0:l.name)},St=()=>{var l,a;let e=!1;return e=((l=c==null?void 0:c.current)==null?void 0:l.allValid())??!1,e||(X(n=>!n),(a=c==null?void 0:c.current)==null||a.showMessages(),X(n=>!n),!1)},Ct=()=>{i(e=>({...e,filter:{...e.filter,...it}}))},Rt=()=>{var l,a,n,o,h,v,I,L,b,q,F,$,B,M,k,U,_,Y,P,G,D,g,H,K,W,J,d,Le,be,qe,Fe,$e,Be,Me,ke,Ue,_e,Ye,Pe,Ge,De,ge,He,Ke,We,Je,Xe,Ze,ze,Qe;let e="";(a=(l=t==null?void 0:t.filter)==null?void 0:l.loan)!=null&&a.name&&(e=`${e}&loan.lanId=${(o=(n=t==null?void 0:t.filter)==null?void 0:n.loan)==null?void 0:o.name}`),(v=(h=t==null?void 0:t.filter)==null?void 0:h.customer)!=null&&v.name&&(e=`${e}&loan.applicantName=${(L=(I=t==null?void 0:t.filter)==null?void 0:I.customer)==null?void 0:L.name}`),(q=(b=t==null?void 0:t.filter)==null?void 0:b.receipt)!=null&&q.name&&(e=`${e}&receipt.receiptRefNo=${($=(F=t==null?void 0:t.filter)==null?void 0:F.receipt)==null?void 0:$.name}`),(M=(B=t==null?void 0:t.filter)==null?void 0:B.collectedBy)!=null&&M.userId&&(e=`${e}&receipt.userId=${(U=(k=t==null?void 0:t.filter)==null?void 0:k.collectedBy)==null?void 0:U.userId}`),(_=t==null?void 0:t.filter)!=null&&_.dateOfReceiptGreaterThenEqualTo&&(e=`${e}&receipt.instrumentDate:ge=${(P=new Date((Y=t==null?void 0:t.filter)==null?void 0:Y.dateOfReceiptGreaterThenEqualTo))==null?void 0:P.toISOString()}`),(G=t==null?void 0:t.filter)!=null&&G.dateOfReceiptLessThenEqualTo&&(e=`${e}&receipt.instrumentDate:le=${(g=new Date((D=t==null?void 0:t.filter)==null?void 0:D.dateOfReceiptLessThenEqualTo))==null?void 0:g.toISOString()}`),N((H=t==null?void 0:t.filter)==null?void 0:H.receiptAmountLessThenEqualTo)&&(e=`${e}&receipt.amount:le=${N((K=t==null?void 0:t.filter)==null?void 0:K.receiptAmountLessThenEqualTo)}`),N((W=t==null?void 0:t.filter)==null?void 0:W.receiptAmountGreaterThenEqualTo)&&(e=`${e}&receipt.amount:ge=${N((J=t==null?void 0:t.filter)==null?void 0:J.receiptAmountGreaterThenEqualTo)}`),(d=t==null?void 0:t.filter)!=null&&d.instrumentType&&(e=`${e}&receipt.smInstrumentType=${(Le=t==null?void 0:t.filter)==null?void 0:Le.instrumentType}`),(qe=(be=t==null?void 0:t.filter)==null?void 0:be.deposit)!=null&&qe.name&&(e=`${e}&deposit.depositRefNo=${($e=(Fe=t==null?void 0:t.filter)==null?void 0:Fe.deposit)==null?void 0:$e.name}`),(Me=(Be=t==null?void 0:t.filter)==null?void 0:Be.sahayyaBankAccount)!=null&&Me.name&&(e=`${e}&deposit.depositAccount.holderName=${(Ue=(ke=t==null?void 0:t.filter)==null?void 0:ke.sahayyaBankAccount)==null?void 0:Ue.name}`),(Ye=(_e=t==null?void 0:t.filter)==null?void 0:_e.sahayyaBankAccount)!=null&&Ye.accountNumber&&(e=`${e}&deposit.depositAccount.accountNumber=${(Ge=(Pe=t==null?void 0:t.filter)==null?void 0:Pe.sahayyaBankAccount)==null?void 0:Ge.accountNumber}`),N((De=t==null?void 0:t.filter)==null?void 0:De.depositAmountGreaterThenEqualTo)&&(e=`${e}&deposit.totalAmount:ge=${N((ge=t==null?void 0:t.filter)==null?void 0:ge.depositAmountGreaterThenEqualTo)}`),N((He=t==null?void 0:t.filter)==null?void 0:He.depositAmountLessThenEqualTo)&&(e=`${e}&deposit.totalAmount:le=${N((Ke=t==null?void 0:t.filter)==null?void 0:Ke.depositAmountLessThenEqualTo)}`),(Je=(We=t==null?void 0:t.filter)==null?void 0:We.utcChequeNo)!=null&&Je.name&&(e=`${e}&receipt.txnRefNo=${(Ze=(Xe=t==null?void 0:t.filter)==null?void 0:Xe.utcChequeNo)==null?void 0:Ze.name}`),(ze=t==null?void 0:t.filter)!=null&&ze.reconciliationStatus&&(e=`${e}&receipt.status=${(Qe=t==null?void 0:t.filter)==null?void 0:Qe.reconciliationStatus}`),i(ss=>({...ss,tableSearch:e}))},At=()=>{i(e=>({...e,showFilter:!e.showFilter}))},xe=()=>{i(e=>({...e,editReceipt:{...e==null?void 0:e.editReceipt,...ot},editReceiptDialog:!1}))},Et=async e=>{var a,n;const l=ys(e);if(l)try{let o;l!=null&&l.uid?o=S.updateDdeReceipt:o=S.createDdeReceipt,await(o==null?void 0:o(l)),dt(Ve.PRIMARY),O(st.SAVED),ue(!ee),(a=p==null?void 0:p.current)==null||a.search(),(n=me.current)==null||n.onCloseAndClearData(),xe()}catch(o){console.log(o),w(lt(o))}},se=e=>{i(l=>({...l,updateStatus:{...l.updateStatus,[e.target.name]:e.target.value}}))},vt=async()=>{var l;if(!St())return;const e=qt();try{await S.updateFeeCollectionChangeStatus(e),O(st.SAVED),ue(!ee),le(),(l=p==null?void 0:p.current)==null||l.search()}catch(a){w(lt(a))}},le=()=>{i(e=>({...e,updateStatusDialog:!1,updateStatus:{...e.updateStatus,...oe}})),he()},It=(e,l)=>{var a,n;(n=(a=Z==null?void 0:Z.current)==null?void 0:a.toggle)==null||n.call(a,e),ft(o=>{const h=[...o];return h[0]={...h[0],command:()=>{Lt(l)}},h})},Lt=e=>{e&&i(l=>({...l,updateStatus:{...l.updateStatus,receiptUid:e==null?void 0:e.uid,dateOfStatus:e!=null&&e.dateOfStatus?new Date(e==null?void 0:e.dateOfStatus):"",remark:e==null?void 0:e.remarks,status:e==null?void 0:e.status},updateStatusDialog:!0}))},bt=async e=>{let l=[];try{await nt.getBankAccount(0,50,e.query).then(a=>{var o;const n=(o=a.data.results)==null?void 0:o.map(h=>({holderName:h.bank.name,accountNumber:h.accountNumber,branch:h.ifsc.branch,uid:h.uid}));a.status===200&&(l=[...n??[]])})}catch(a){console.log(a)}l.length===0&&l.push({name:"",uid:""}),de(l)},he=()=>{var e;c.current=new je({validators:{...we()},...Oe(),autoForceUpdate:{forceUpdate:()=>X(l=>!l)}}),(e=c==null?void 0:c.current)==null||e.hideMessages()},qt=()=>{var e,l,a,n;return{uid:(e=t==null?void 0:t.updateStatus)==null?void 0:e.receiptUid,dateOfStatus:(l=t==null?void 0:t.updateStatus)==null?void 0:l.dateOfStatus,status:(a=t==null?void 0:t.updateStatus)==null?void 0:a.status,remarks:(n=t==null?void 0:t.updateStatus)==null?void 0:n.remark}},C=async(e,l)=>{var n;let a=[];await((n=l==null?void 0:l.service)==null?void 0:n.call(l,0,10,`${l.field}:lk=${e.query}${l==null?void 0:l.search}`).then(o=>{o.status===200&&(a=[...o.data.results])})),a.length===0&&a.push({name:""}),de(a)},Ft=async()=>{var e;try{const l=await Ns.getDropdownList("FEE_MODE"),a=[];(e=l==null?void 0:l.data)==null||e.results.forEach(n=>{a.push({name:(n==null?void 0:n.name)??"",value:n==null?void 0:n.code})}),i(n=>({...n,dropdownOptions:{...n.dropdownOptions,instrumentType:a}}))}catch(l){console.error(l)}},$t=e=>(e==null?void 0:e.lanId)===void 0||(e==null?void 0:e.lanId)===""?s.jsx("div",{className:"flex flex-col items-center justify-center h-39 pointer-events-none cursor-default",children:s.jsx(r,{className:"text-primary-labelColor mt-2",label:"label.noDataFound"})}):s.jsx("div",{className:"flex flex-col",children:s.jsx(r,{className:"text-primary-labelColor",label:`${e.lanId}`})}),Bt=e=>(e==null?void 0:e.applicantName)===void 0||(e==null?void 0:e.applicantName)===""?s.jsx("div",{className:"flex flex-col items-center justify-center h-39 pointer-events-none cursor-default",children:s.jsx(r,{className:"text-primary-labelColor mt-2",label:"label.noDataFound"})}):s.jsx("div",{className:"flex flex-col",children:s.jsx(r,{className:"text-primary-labelColor",label:`${e.applicantName}`})}),Mt=e=>(e==null?void 0:e.receiptRefNo)===void 0||(e==null?void 0:e.receiptRefNo)===""?s.jsx("div",{className:"flex flex-col items-center justify-center h-39 pointer-events-none cursor-default",children:s.jsx(r,{className:"text-primary-labelColor mt-2",label:"label.noDataFound"})}):s.jsx("div",{className:"flex flex-col",children:s.jsx(r,{className:"text-primary-labelColor",label:`${e.receiptRefNo}`})}),kt=e=>(e==null?void 0:e.name)===void 0||(e==null?void 0:e.name)===""?s.jsx("div",{className:"flex flex-col items-center justify-center h-39 pointer-events-none cursor-default",children:s.jsx(r,{className:"text-primary-labelColor mt-2",label:"label.noDataFound"})}):s.jsx("div",{className:"flex flex-col",children:s.jsx(r,{className:"text-primary-labelColor",label:`${e.name}`})}),Ut=e=>(e==null?void 0:e.depositRefNo)===void 0||(e==null?void 0:e.depositRefNo)===""?s.jsx("div",{className:"flex flex-col items-center justify-center h-39 pointer-events-none cursor-default",children:s.jsx(r,{className:"text-primary-labelColor mt-2",label:"label.noDataFound"})}):s.jsx("div",{className:"flex flex-col",children:s.jsx(r,{className:"text-primary-labelColor",label:`${e.depositRefNo}`})}),_t=e=>(e==null?void 0:e.holderName)===void 0||(e==null?void 0:e.holderName)===""?s.jsx("div",{className:"flex flex-col items-center justify-center h-39 pointer-events-none cursor-default",children:s.jsx(r,{className:"text-primary-labelColor mt-2",label:"label.noDataFound"})}):s.jsx("div",{className:"flex flex-col",children:s.jsx(r,{className:"text-primary-labelColor",label:`${e.holderName}`})}),Yt=e=>(e==null?void 0:e.accountNumber)===void 0||(e==null?void 0:e.accountNumber)===""?s.jsx("div",{className:"flex flex-col items-center justify-center h-39 pointer-events-none cursor-default",children:s.jsx(r,{className:"text-primary-labelColor mt-2",label:"label.noDataFound"})}):s.jsx("div",{className:"flex flex-col",children:s.jsx(r,{className:"text-primary-labelColor",label:`${e.accountNumber}`})}),Pt=e=>(e==null?void 0:e.txnRefNo)===void 0||(e==null?void 0:e.txnRefNo)===""?s.jsx("div",{className:"flex flex-col items-center justify-center h-39 pointer-events-none cursor-default",children:s.jsx(r,{className:"text-primary-labelColor mt-2",label:"label.noDataFound"})}):s.jsx("div",{className:"flex flex-col",children:s.jsx(r,{className:"text-primary-labelColor",label:`${e==null?void 0:e.txnRefNo}`})}),Gt=()=>{var e,l,a,n,o,h,v,I,L,b,q,F,$,B,M,k,U,_,Y,P,G,D,g,H,K,W,J;return s.jsxs("div",{className:"p-3 flex flex-col gap-6 bg-primary-sapphireBlue-100 rounded-lg",children:[s.jsx("div",{className:"flex ",children:s.jsx(ps,{title:"text.masterData.types.search"})}),s.jsxs("div",{className:" grid grid-cols-1 md:grid-cols-4 gap-3",children:[s.jsx("div",{children:s.jsx(T,{label:"label.fees.applicationNo",name:"loan",field:"name",value:(l=(e=t==null?void 0:t.filter)==null?void 0:e.loan)==null?void 0:l.name,variant:m.PRIMARY,suggestions:y,completeMethod:d=>C(d,{field:"&lanId",search:"&loanStatus:nq=DRAFT",service:rt.getAll}),onChange:xt,itemTemplate:$t})}),s.jsx("div",{children:s.jsx(T,{label:"label.fees.customerName",name:"customer",field:"name",value:(n=(a=t==null?void 0:t.filter)==null?void 0:a.customer)==null?void 0:n.name,variant:m.PRIMARY,suggestions:y,completeMethod:d=>C(d,{field:"&applicantName",search:"&loanStatus:nq=DRAFT",service:rt.getAll}),onChange:ht,itemTemplate:Bt})}),s.jsx("div",{children:s.jsx(T,{label:"label.fees.receiptID",name:"receipt",field:"name",value:(h=(o=t==null?void 0:t.filter)==null?void 0:o.receipt)==null?void 0:h.name,variant:m.PRIMARY,suggestions:y,completeMethod:d=>C(d,{field:"receiptRefNo",search:"",service:S.feeCollectionSearchReceipt}),onChange:pt,itemTemplate:Mt})}),s.jsx("div",{children:s.jsx(T,{label:"label.fees.collectedBy",name:"collectedBy",field:"name",value:(I=(v=t==null?void 0:t.filter)==null?void 0:v.collectedBy)==null?void 0:I.name,variant:m.PRIMARY,suggestions:y,completeMethod:d=>C(d,{field:"&name",search:"&sahayyaUserType=EMPLOYEE_USER",service:S.getUserList}),onChange:Tt,itemTemplate:kt})}),s.jsx("div",{children:s.jsx(re,{label:"label.fees.dateOfReceipt>=",name:"dateOfReceiptGreaterThenEqualTo",onChange:z,value:(L=t==null?void 0:t.filter)!=null&&L.dateOfReceiptGreaterThenEqualTo?new Date((b=t==null?void 0:t.filter)==null?void 0:b.dateOfReceiptGreaterThenEqualTo):null,variant:m.SECONDARY})}),s.jsxs("div",{className:"grid-group",children:[s.jsx("div",{className:"mb-1 h-4.75 flex",children:s.jsx("span",{className:"font-sans text-primary-labelColor text-xs",children:"Date of Receipt <="})}),s.jsx(re,{hideLabel:!0,name:"dateOfReceiptLessThenEqualTo",onChange:z,value:(q=t==null?void 0:t.filter)!=null&&q.dateOfReceiptLessThenEqualTo?new Date((F=t==null?void 0:t.filter)==null?void 0:F.dateOfReceiptLessThenEqualTo):null,variant:m.SECONDARY})]}),s.jsx("div",{children:s.jsx(V,{label:"label.fees.receiptAmount>=",name:"receiptAmountGreaterThenEqualTo",value:($=t==null?void 0:t.filter)==null?void 0:$.receiptAmountGreaterThenEqualTo,variant:m.SECONDARY,onChange:Q})}),s.jsxs("div",{className:"grid-group",children:[s.jsx("div",{className:"mb-1 h-4.75 flex",children:s.jsx("span",{className:"font-sans text-primary-labelColor text-xs",children:"Receipt Amount <="})}),s.jsx(V,{hideLabel:!0,name:"receiptAmountLessThenEqualTo",value:(B=t==null?void 0:t.filter)==null?void 0:B.receiptAmountLessThenEqualTo,variant:m.SECONDARY,onChange:Q})]}),s.jsx("div",{children:s.jsx(ne,{label:"label.fees.instrumentType",placeholder:"placeholder.fees.instrumentType",name:"instrumentType",value:(M=t==null?void 0:t.filter)==null?void 0:M.instrumentType,onChange:z,options:(k=t.dropdownOptions)==null?void 0:k.instrumentType,optionLabel:"name",optionValue:"value"})}),s.jsx("div",{children:s.jsx(T,{label:"label.fees.depositsId",name:"deposit",field:"name",value:(_=(U=t==null?void 0:t.filter)==null?void 0:U.deposit)==null?void 0:_.name,variant:m.PRIMARY,suggestions:y,completeMethod:d=>C(d,{field:"&depositRefNo",search:"",service:S.getFeeCollectionDepositList}),onChange:Nt,itemTemplate:Ut})}),s.jsx("div",{children:s.jsx(T,{label:"label.fees.sahayyaBankAccount",name:"sahayyaBankAccount",field:"name",value:(P=(Y=t==null?void 0:t.filter)==null?void 0:Y.sahayyaBankAccount)==null?void 0:P.name,variant:m.PRIMARY,suggestions:y,completeMethod:bt,onChange:fe,itemTemplate:_t})}),s.jsx("div",{children:s.jsx(T,{label:"label.fees.accountNo",name:"sahayyaBankAccount",field:"name",value:(D=(G=t==null?void 0:t.filter)==null?void 0:G.sahayyaBankAccount)==null?void 0:D.accountNumber,variant:m.PRIMARY,suggestions:y,completeMethod:d=>C(d,{field:"&accountNumber",search:"",service:nt.getBankDetails}),onChange:d=>fe(d,!0),itemTemplate:Yt})}),s.jsx("div",{children:s.jsx(V,{label:"label.fees.depositAmount>=",name:"depositAmountGreaterThenEqualTo",value:(g=t==null?void 0:t.filter)==null?void 0:g.depositAmountGreaterThenEqualTo,variant:m.SECONDARY,onChange:Q})}),s.jsxs("div",{className:"grid-group",children:[s.jsx("div",{className:"mb-1 h-4.75 flex",children:s.jsx("span",{className:"font-sans text-primary-labelColor text-xs",children:"Deposit Amount <="})}),s.jsx(V,{hideLabel:!0,name:"depositAmountLessThenEqualTo",value:(H=t==null?void 0:t.filter)==null?void 0:H.depositAmountLessThenEqualTo,variant:m.SECONDARY,onChange:Q})]}),s.jsx("div",{children:s.jsx(T,{label:"label.fees.utr/Chq.No.",name:"utcChequeNo",field:"name",value:(W=(K=t==null?void 0:t.filter)==null?void 0:K.utcChequeNo)==null?void 0:W.name,variant:m.PRIMARY,suggestions:y,completeMethod:d=>C(d,{field:"&txnRefNo",search:"",service:S.feeCollectionSearchReceipt}),onChange:yt,itemTemplate:Pt})}),s.jsx("div",{children:s.jsx(ne,{label:"label.fees.reconciliationStatus",placeholder:"placeholder.fees.status",name:"reconciliationStatus",value:(J=t==null?void 0:t.filter)==null?void 0:J.reconciliationStatus,onChange:z,options:et,optionLabel:"name",optionValue:"code"})}),s.jsxs("div",{className:"col-span-4 flex gap-5 justify-end",children:[s.jsx(E,{buttonType:A.RESET_OUTLINE,onClick:Ct}),s.jsx(E,{buttonType:A.SEARCH_OUTLINE,onClick:Rt})]})]})]})},Dt=e=>{var l;return s.jsx(r,{className:" text-xs text-secondary-labelColor ",label:(l=e==null?void 0:e.loan)==null?void 0:l.lanId})},gt=e=>{var l;return s.jsx(r,{className:" text-xs text-secondary-labelColor ",label:(l=e==null?void 0:e.loan)==null?void 0:l.applicantName})},Ht=e=>{var l;return s.jsx(r,{className:" text-xs text-secondary-labelColor ",label:(l=e==null?void 0:e.receipt)==null?void 0:l.createdByUserName})},Kt=e=>{var l;return s.jsx(r,{className:" text-xs text-secondary-labelColor ",label:(l=e==null?void 0:e.receipt)==null?void 0:l.txnRefNo})},Wt=e=>{var l;return s.jsx(r,{className:" text-xs text-secondary-labelColor ",label:at((l=e==null?void 0:e.receipt)==null?void 0:l.instrumentDate)})},Jt=e=>{var l;return s.jsx(r,{className:" text-xs text-secondary-labelColor ",label:ae((l=e==null?void 0:e.receipt)==null?void 0:l.amount,"en-IN",0)})},Xt=e=>{var l,a;return s.jsx(r,{className:" text-xs text-secondary-labelColor ",label:(a=(l=e==null?void 0:e.deposit)==null?void 0:l.depositAccount)==null?void 0:a.accountNumber})},Zt=e=>{var l,a;return s.jsx(r,{className:" text-xs text-secondary-labelColor ",label:(a=ns)==null?void 0:a[(l=e==null?void 0:e.receipt)==null?void 0:l.smInstrumentType]})},zt=e=>{var l,a;return s.jsx(r,{className:" text-xs text-secondary-labelColor ",label:(a=(l=e==null?void 0:e.deposit)==null?void 0:l.depositAccount)==null?void 0:a.holderName})},Qt=e=>{var l;return s.jsx(r,{className:" text-xs text-secondary-labelColor ",label:ae((l=e==null?void 0:e.deposit)==null?void 0:l.totalAmount,"en-IN",0)})},Vt=e=>{var l;return s.jsx(r,{className:" text-xs text-secondary-labelColor ",label:(l=e==null?void 0:e.receipt)==null?void 0:l.remarks})},jt=e=>{var l,a;return s.jsx(r,{className:" text-xs text-secondary-labelColor ",label:(a=Ts)==null?void 0:a((l=e==null?void 0:e.receipt)==null?void 0:l.status)})},wt=e=>{var l;return s.jsx(r,{className:" text-xs text-secondary-labelColor ",label:(l=e==null?void 0:e.receipt)==null?void 0:l.receiptRefNo})},Ot=e=>{var a,n;const l=rs+os+is+"/"+((a=e==null?void 0:e.deposit)==null?void 0:a.uid);return s.jsx("a",{className:"flex items-center underline text-primary-sapphireBlue-900",href:l,children:(n=e==null?void 0:e.deposit)==null?void 0:n.depositRefNo})},es=e=>{var l;return s.jsx(r,{className:" text-xs text-secondary-labelColor ",label:at((l=e==null?void 0:e.receipt)==null?void 0:l.dateOfStatus)})},ts=e=>s.jsx("div",{className:" mr-3 self-center",children:s.jsx(E,{buttonType:A.MENU,onClick:l=>It(l,e==null?void 0:e.receipt)})});return s.jsxs("div",{className:"p-3 rounded-masterDataPageRadius bg-white flex flex-col gap-3 loan-listing-layout-body-content",children:[s.jsxs("div",{className:"flex w-full justify-between items-center",children:[s.jsx(r,{label:"label.fees.reconciliation",className:"text-primary-ptext-1000 text-h2 font-bold flex"}),s.jsx("div",{className:"flex gap-10",children:s.jsx(E,{buttonType:A.FILTER_OUTLINE,onClick:At})})]}),(t==null?void 0:t.showFilter)&&Gt(),s.jsxs(hs,{standardDataFormatPromise:S.getFeeCollectionReconciliationList,dataKey:"id",search:t.tableSearch,ref:p,children:[s.jsx(x,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:f("label.fees.loanApplicationNo."),body:Dt}),s.jsx(x,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6 ",header:f("label.fees.customerName"),body:gt}),s.jsx(x,{className:"text-primary-ptext-1000 text-left text-xs w-1/12  p-1 h-12 pl-6",header:f("label.fees.receivedBy"),body:Ht}),s.jsx(x,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:f("label.fees.utr/Chq.No."),body:Kt}),s.jsx(x,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:f("label.fees.dateOfReceipt"),body:Wt}),s.jsx(x,{className:"text-primary-ptext-1000 text-right text-xs  p-1 h-12 pl-6",header:f("label.fees.receiptAmount"),body:Jt}),s.jsx(x,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:f("label.fees.depositAccount"),body:Xt}),s.jsx(x,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:f("label.fees.instrumentType"),body:Zt}),s.jsx(x,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:f("label.fees.sahayyaBankAccountAccountNo"),body:zt}),s.jsx(x,{className:"text-primary-ptext-1000 text-right text-xs  p-1 h-12 pl-6",header:f("label.fees.depositAmount"),body:Qt}),s.jsx(x,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:f("label.fees.remarks"),body:Vt}),s.jsx(x,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:f("label.fees.status"),body:jt}),s.jsx(x,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:f("label.fees.collectionReceipt"),body:wt}),s.jsx(x,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:f("label.fees.depositReceipt"),body:Ot}),s.jsx(x,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:f("label.fees.dateOfClearance"),body:es}),s.jsx(x,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:f("label.loanListing.actions"),body:ts})]}),s.jsxs(ds,{onHide:le,visible:t.updateStatusDialog,modal:!0,closable:!1,className:"p-6  h-fit lg:w-[528px]",children:[s.jsxs("div",{className:"grid grid-cols-2 gap-5",children:[s.jsx("div",{children:s.jsx(ne,{label:"label.fees.status*",name:"status",placeholder:"placeholder.fees.status",value:(pe=t==null?void 0:t.updateStatus)==null?void 0:pe.status,onChange:se,onBlur:te,options:(Ne=et)==null?void 0:Ne.filter(e=>(e==null?void 0:e.code)!==tt.PENDING_DEPOSIT&&(e==null?void 0:e.code)!==tt.DEPOSITED),optionLabel:"name",optionValue:"code",validation:(Te=c==null?void 0:c.current)==null?void 0:Te.message("status",(ye=t==null?void 0:t.updateStatus)==null?void 0:ye.status,"mandatory")})}),s.jsx("div",{children:s.jsx(re,{label:"label.fees.dateOfStatus*",name:"dateOfStatus",placeholder:"placeholder.fees.dateOfStatus*",value:(Se=t==null?void 0:t.updateStatus)==null?void 0:Se.dateOfStatus,variant:m.SECONDARY,onChange:se,onBlur:te,validation:(Re=c==null?void 0:c.current)==null?void 0:Re.message("dateOfStatus",(Ce=t==null?void 0:t.updateStatus)==null?void 0:Ce.dateOfStatus,"mandatory")})}),s.jsx("div",{className:"col-span-2",children:s.jsx(fs,{name:"remark",className:"!min-h-20 !max-h-40 h-25",label:"label.fees.remark*",placeholder:"placeholder.initiationInfo.description",variant:m.SECONDARY,maxCount:200,onChange:se,value:(Ae=t==null?void 0:t.updateStatus)==null?void 0:Ae.remark,onBlur:te,validation:(ve=c==null?void 0:c.current)==null?void 0:ve.message("remark",(Ee=t==null?void 0:t.updateStatus)==null?void 0:Ee.remark,"mandatory")})}),s.jsx("div",{className:"col-span-2",children:s.jsx(r,{className:"text-xs text-secondary-steelBlue-500 ",label:"label.fees.remarkNote"})})]}),s.jsxs("div",{className:"flex items-center justify-center mt-5  ",children:[s.jsx("div",{className:"mr-3",children:s.jsx(E,{buttonType:A.CLOSE_OUTLINE,onClick:le})}),s.jsx("div",{children:s.jsx(E,{buttonType:A.SUBMIT_OUTLINE,onClickWithLoader:vt})})]})]}),s.jsx(cs,{visible:!!(t!=null&&t.editReceiptDialog||(Ie=t==null?void 0:t.editReceipt)!=null&&Ie.uid),onHide:xe,instrumentTypeOptions:t.dropdownOptions.instrumentType,module:us.FEES,data:{updateReceiptDetails:t==null?void 0:t.editReceipt},onSubmit:Et,ref:me}),s.jsx(xs,{ref:Z,model:mt,variant:"SECONDARY",buttonClassName:"!bg-transparent",className:"width-full-menubox bg-white  w-max p-1.5 rounded-xl mt-0.5 border shadow-autoCompletePanel"}),s.jsx(ms,{onHide:()=>{ie(!1),w("")},visible:ct,errorMessage:j})]})},pl=ls(Cs);export{pl as default};
//# sourceMappingURL=PageReconciliation-bf5e7e01.js.map
