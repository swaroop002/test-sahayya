import{r as d,j as t,o as Fs,T as ne,J as Ys,c9 as ws,a7 as Qs,q as Bs,aF as b,ad as Js,ae as Xs,af as Zs,ao as _e,aH as Ks,eH as _,eI as a,eJ as c,eK as zs,dl as me,eL as et,aG as st,ax as Hs,eM as j,dz as tt,aj as rt,ak as nt,eN as ot,eO as vs,aP as Ds,eP as lt,f as $s,eQ as Gs,ag as it,d4 as Ye,eR as ct,dg as ut,L as at,eS as mt,eq as At}from"./index-e8217573.js";import{C as oe}from"./EditableTableV2-6afcb42b.js";import{E as pt}from"./ErrorDialog-d5eef4d7.js";import{R as Ws}from"./ReadOnlyTable-86accb69.js";import{S as Et}from"./Section-00ef9f2b.js";import{S as dt}from"./SimpleTab-27fa8860.js";import{S as we}from"./Skeleton-7e12d019.js";import{A as Nt}from"./ApplicantService-924aa5cb.js";import{Q as Le}from"./QcService-39051cda.js";import{I as St}from"./ImagePreview-952ca75e.js";import{I as ft}from"./InputTextArea-b90aad1d.js";import{R as It}from"./RichTextEditor-a03bd2fb.js";import{S as Tt}from"./SaveComponent-160c5b32.js";import{S as ht}from"./SimpleDropDown-061a3470.js";import{T as Rt}from"./Toast-ae99ea5b.js";import{B as xt}from"./ButtonBox-9e46519a.js";import{D as gt}from"./Dialog-adadaf64.js";import{u as qs}from"./useSelector-dc41929a.js";import{A as Ct}from"./AddressService-27926b64.js";import{F as bt}from"./FinalOpinion-c6d0ce35.js";import"./datatable.esm-f474a654.js";import"./paginator.esm-11c2c115.js";import"./virtualscroller.esm-9939945c.js";import"./No_data-1720c54e.js";import"./FileUploadMenuBox-f47dc693.js";import"./kebab-menu-8835ad2e.js";import"./MenuBox-defc36b0.js";import"./Loading-783a01c7.js";import"./FileUploadService-1aaf11f7.js";import"./withAuth-6de36ebf.js";import"./index-8739acfd.js";import"./link-0172a3d4.js";import"./loader-5f2cfb31.js";import"./IconButton-36693dd9.js";import"./sortIcon-54357a29.js";import"./Download_Icon-51fc7f46.js";import"./eye_icon-081bddb3.js";import"./TransitionGroup-c8afe0ce.js";import"./LegalService-c6087928.js";const Vt=Ae=>{const[le,V]=d.useState(!1),{onHide:R,visible:K,data:ie,header:x,headerArgs:g}=Ae,ce=()=>{V(!0),ws(ie)};return t.jsxs(gt,{onHide:R,visible:K,modal:!0,closable:!1,dismissableMask:!0,variant:Fs.SECONDARY,children:[t.jsx("div",{className:"flex items-center justify-center",children:t.jsx(ne,{className:"text-primary-primaryTextColor font-bold",label:x,args:g})}),t.jsx("div",{className:"flex ml-4 mt-6 mb-1.5",children:t.jsx(ne,{label:"label.qc.jsonResponse",className:"text-secondary-steelBlue-900 text-xs"})}),t.jsx("div",{className:"border flex flex-col border-secondary-gray-200 rounded-md overflow-auto w-120 h-56 p-4 text-xs text-secondary-gray-500",id:"errorDiv",children:t.jsx(ne,{className:"text-secondary-steelBlue-500 italic whitespace-pre",label:ie??""})}),t.jsx("div",{className:"flex flex-row-reverse",children:t.jsx("div",{onClick:ce,children:t.jsx(ne,{label:le?"Copied":"Copy",className:le?"text-primary-copiedTextColor cursor-pointer text-xs":" text-primary-copyTextColor cursor-pointer text-xs"})})}),t.jsx("div",{className:"flex justify-center ",children:t.jsx(xt,{buttonType:Ys.CLOSE_OUTLINE,onClick:R})})]})},Lt={table:[],status:"",remark:"",textEditorData:"",isKyc:!1,isApiCheckInitiated:!1,updatedAt:"",uid:"",customUserResponse:"",rawResponseData:"",loadingForAutoInitiate:!1},je={VIEW_RAW_RESPONSE:"VIEW_RAW_RESPONSE",CLEAR_DATA:"CLEAR_DATA"},_t=Ae=>{const{t:le}=Qs(),{documentData:V,getDetailsPromise:R,initiateApiCheckPromise:K,search:ie,updateDocumentStatusPromise:x,callbackForErrorMessage:g,isSectionDisabled:ce}=Ae,O=Bs(),z=qs(e=>{var u,n;return(n=(u=e==null?void 0:e.LoanReducers)==null?void 0:u.loanObj)==null?void 0:n.qcStatus}),[Oe,pe]=d.useState(!1),[k,ee]=d.useState(b.VIEW),[m,C]=d.useState({...Lt}),[,L]=d.useState(!1),[A,Pe]=d.useState(null),[Qe,Ee]=d.useState(!1),[de,se]=d.useState(""),[Ne,ke]=d.useState([{code:je.VIEW_RAW_RESPONSE,className:"",label:"View API Raw Response",command:()=>{Ie==null||Ie()}},{code:je.CLEAR_DATA,className:"",label:"Clear Data"}]),h=d.useRef(new Js({validators:{...Xs()},...Zs(),autoForceUpdate:{forceUpdate:()=>L(e=>!e)}})),ve=d.useRef(null),M=d.useRef(null),te=d.useRef(null);d.useEffect(()=>{var u;const{section:e}=V;if(e){const n=(u=j)==null?void 0:u[e];Pe(s=>({...s,...n})),n.HIDE_API_CHECK&&ke(s=>{let i=[...s];return i=i.filter(S=>S.code===je.CLEAR_DATA),i}),ue(n)}},[V==null?void 0:V.residentialAddress]),d.useEffect(()=>{!ce&&m.isAutoApiInitiated&&!m.isApiCheckInitiated&&A!==null&&Se(!0)},[m.isApiCheckInitiated,m.isAutoApiInitiated]),d.useEffect(()=>{var e;M!=null&&M.current&&de!==""&&((e=M==null?void 0:M.current)==null||e.showFunction())},[de]);const Se=async e=>{C(u=>({...u,loadingForInitiateCheck:!0}));try{await(K==null?void 0:K((m==null?void 0:m.uid)??"")),C(u=>({...u,loadingForInitiateCheck:!1})),A&&ue(A,!e)}catch(u){console.log("err"),C(n=>({...n,loadingForInitiateCheck:!1})),g==null||g(_e(u),!!e)}},ue=async(e,u)=>{const n=[];u||pe(!0);try{const s=await(R==null?void 0:R(ie));(k===b.EDIT||k===b.CREATE)&&ee(b.VIEW),pe(!1),l(s.data,e),ke(i=>{const S=[...i],T=S.findIndex(r=>r.code===je.CLEAR_DATA);return T>-1&&(S[T]={...S[T],command:()=>{var r;De((r=s==null?void 0:s.data)==null?void 0:r.uid)}}),S})}catch(s){if(console.log("err"),g(_e(s),!0),e.SHOW_EDITOR!==!0){for(const i of e.ROWS)n.push({name:i.NAME,apiValues:"",loggedInValues:"",formatApiValues:"STRING",formatLoggedInValues:"STRING"});pe(!1),C(i=>({...i,table:n}))}}},De=e=>{fe({clearData:!0,uid:e})},Ge=()=>ee(b.EDIT),Fe=()=>{var e;ee(b.VIEW),h.current.visibleFields=[],(e=h==null?void 0:h.current)==null||e.hideMessages(),A!=null&&A.CODE&&ue(A,!0)},fe=async e=>{const u=e!=null&&e.clearData?e==null?void 0:e.uid:m==null?void 0:m.uid;if(!(e!=null&&e.clearData)&&!$e())return;const n=qe(e==null?void 0:e.clearData);try{await x(u??"",n),A!=null&&A.CODE&&ue(A,!0),se(Ks.SAVED)}catch(s){g(_e(s),!1)}},Me=e=>{C(u=>({...u,[e.target.name]:e.target.value}))},Ie=()=>{Ee(!0)},Be=()=>{C(e=>({...e})),Ee(!1)},He=e=>{var u,n;(n=h==null?void 0:h.current)==null||n.showMessageFor((u=e==null?void 0:e.target)==null?void 0:u.name)},$e=()=>{var u,n;let e=!1;return e=((u=h==null?void 0:h.current)==null?void 0:u.allValid())??!1,e||(L(s=>!s),(n=h==null?void 0:h.current)==null||n.showMessages(),L(s=>!s),!1)},We=()=>A!=null&&A.HIDE_API_CHECK||m.isApiCheckInitiated?Ne:void 0,qe=e=>{var u,n,s;return e?{loan:{uid:O==null?void 0:O.loanUid},status:"",remark:"",...A!=null&&A.SHOW_EDITOR?{customUserResponse:""}:void 0}:{loan:{uid:O==null?void 0:O.loanUid},status:(m==null?void 0:m.status)??"",remark:(m==null?void 0:m.remark)??"",...A!=null&&A.SHOW_EDITOR?{customUserResponse:((s=(n=(u=te==null?void 0:te.current)==null?void 0:u.editor)==null?void 0:n.getContent)==null?void 0:s.call(n))??""}:void 0}},Ue=(e,u)=>{var n,s;switch(u){case c.DATE:return t.jsx("span",{children:$s(e)});case c.GENDER:return typeof e=="string"?t.jsx("span",{children:((s=(n=lt)==null?void 0:n[e])==null?void 0:s.LABEL)??""}):null;case c.UNSIGNED_IMAGE:return t.jsx(t.Fragment,{children:typeof e=="string"&&e?t.jsx("div",{className:"flex items-center w-30 h-auto mb-3",children:t.jsx(St,{url:e,className:"w-25 h-28"})}):null});case c.BASE64_IMAGE:return t.jsx(t.Fragment,{children:e?t.jsx("div",{className:"flex items-center w-25 h-auto mb-3",children:t.jsx("img",{src:`data:image/png;base64,${e}`,alt:"i"})}):null});case c.STRING:return t.jsx("span",{children:e});case c.BANK_TXN_STATUS:return t.jsx("span",{children:e===vs.TRUE?Ds.ACTIVE:e===vs.FALSE?Ds.INACTIVE:null});default:return t.jsx("span",{children:e})}},o=(e,u)=>{var S,T,r,U,re,y,v,D,G,F,B,H,$,W,q,Y,w,Q,J,X,Z,Te,he,Re,xe,ge,Ce,be,Ve,ye,Je,Xe,Ze,Ke,ze,es,ss,ts,rs,ns,os,ls,is,cs,us,as,ms,As,ps,Es,ds,Ns,Ss,fs,Is,Ts,hs,Rs,xs,gs,Cs,bs,Vs,Ls,_s,Os,ks,Ms,Us,ys,js,Ps;const n=JSON.parse(u??""),{result:s}=n;let i={};switch(e){case _.ADHAAR:i={...i,name:((r=(T=(S=n==null?void 0:n.validationResponse)==null?void 0:S.result)==null?void 0:T.dataFromAadhaar)==null?void 0:r.name)??"",fathersName:((y=(re=(U=n==null?void 0:n.validationResponse)==null?void 0:U.result)==null?void 0:re.dataFromAadhaar)==null?void 0:y.fatherName)??"",maskedAadhaarNumber:((G=(D=(v=n==null?void 0:n.validationResponse)==null?void 0:v.result)==null?void 0:D.dataFromAadhaar)==null?void 0:G.maskedAadhaarNumber)??"",photo:((H=(B=(F=n==null?void 0:n.validationResponse)==null?void 0:F.result)==null?void 0:B.dataFromAadhaar)==null?void 0:H.image)??"",dob:((q=(W=($=n==null?void 0:n.validationResponse)==null?void 0:$.result)==null?void 0:W.dataFromAadhaar)==null?void 0:q.dob)??"",gender:((Q=(w=(Y=n==null?void 0:n.validationResponse)==null?void 0:Y.result)==null?void 0:w.dataFromAadhaar)==null?void 0:Q.gender)??"",address:((Te=(Z=(X=(J=n==null?void 0:n.validationResponse)==null?void 0:J.result)==null?void 0:X.dataFromAadhaar)==null?void 0:Z.address)==null?void 0:Te.combinedAddress)??"",pincode:((Ce=(ge=(xe=(Re=(he=n==null?void 0:n.validationResponse)==null?void 0:he.result)==null?void 0:Re.dataFromAadhaar)==null?void 0:xe.address)==null?void 0:ge.splitAddress)==null?void 0:Ce.pincode)??"",district:((Xe=(Je=(ye=(Ve=(be=n==null?void 0:n.validationResponse)==null?void 0:be.result)==null?void 0:Ve.dataFromAadhaar)==null?void 0:ye.address)==null?void 0:Je.splitAddress)==null?void 0:Xe.district)??"",state:((ss=(es=(ze=(Ke=(Ze=n==null?void 0:n.validationResponse)==null?void 0:Ze.result)==null?void 0:Ke.dataFromAadhaar)==null?void 0:ze.address)==null?void 0:es.splitAddress)==null?void 0:ss.state)??""},console.log("formattedData ",i);break;case _.PAN:i={...i,name:(s==null?void 0:s.name)??""};break;case _.VOTER_ID:i={...i,name:(s==null?void 0:s.name)??"",gender:(s==null?void 0:s.gender)??"",dob:(s==null?void 0:s.dob)??"",pincode:(s==null?void 0:s.pin)??"",district:(s==null?void 0:s.district)??"",state:(s==null?void 0:s.state)??""};break;case _.DRIVERS_LICENSE:i={...i,name:(s==null?void 0:s.name)??"",photo:(s==null?void 0:s.img)??"",dob:(s==null?void 0:s.dob)??"",docNo:(s==null?void 0:s.dlNumber)??"",address:((rs=(ts=s==null?void 0:s.address)==null?void 0:ts[0])==null?void 0:rs.completeAddress)??"",pincode:((os=(ns=s==null?void 0:s.address)==null?void 0:ns[0])==null?void 0:os.pin)??"",district:((is=(ls=s==null?void 0:s.address)==null?void 0:ls[0])==null?void 0:is.district)??"",state:((us=(cs=s==null?void 0:s.address)==null?void 0:cs[0])==null?void 0:us.state)??""};break;case _.PASSPORT:i={...i,docNo:((as=s==null?void 0:s.passportNumber)==null?void 0:as.passportNumberFromSource)??"",name:((ms=s==null?void 0:s.name)==null?void 0:ms.nameFromPassport)??"",surname:((As=s==null?void 0:s.name)==null?void 0:As.surnameFromPassport)??""};break;case _.BANK_ACCOUNT:i={...i,accountNo:((Ns=(ds=(Es=(ps=s==null?void 0:s.data)==null?void 0:ps.source)==null?void 0:Es[0])==null?void 0:ds.data)==null?void 0:Ns.accountNumber)??"",ifsc:((Ts=(Is=(fs=(Ss=s==null?void 0:s.data)==null?void 0:Ss.source)==null?void 0:fs[0])==null?void 0:Is.data)==null?void 0:Ts.ifsc)??"",accountName:((gs=(xs=(Rs=(hs=s==null?void 0:s.data)==null?void 0:hs.source)==null?void 0:Rs[0])==null?void 0:xs.data)==null?void 0:gs.accountName)??"",bankResponse:((Ls=(Vs=(bs=(Cs=s==null?void 0:s.data)==null?void 0:Cs.source)==null?void 0:bs[0])==null?void 0:Vs.data)==null?void 0:Ls.bankResponse)??"",bankTxnStatus:((Ms=(ks=(Os=(_s=s==null?void 0:s.data)==null?void 0:_s.source)==null?void 0:Os[0])==null?void 0:ks.data)==null?void 0:Ms.bankTxnStatus)??""};break;case _.CA:i={...i,name:(s==null?void 0:s.name)??"",address:(s==null?void 0:s.address)??"",gender:(s==null?void 0:s.gender)??"",memberStatus:(s==null?void 0:s.memberStatus)??"",mobileNo:(s==null?void 0:s.mobileNo)??"",email:(s==null?void 0:s.email)??""};break;case _.MOBILE:i={...i,name:((Us=s==null?void 0:s.identity)==null?void 0:Us.name)??"",gender:((ys=s==null?void 0:s.identity)==null?void 0:ys.gender)??"",dob:((js=s==null?void 0:s.identity)==null?void 0:js.date_of_birth)??"",address:((Ps=s==null?void 0:s.contact)==null?void 0:Ps.address)??""};break}return i},l=(e,u)=>{C(n=>{var v,D,G,F,B,H,$,W,q,Y,w,Q,J,X,Z,Te,he,Re,xe,ge,Ce,be,Ve;let s={};const i=[],{residentialAddress:S,applicantName:T}=V;let r={},U="{}";const re=` <p>${T??""} arrested </p>
      <p>${T??""} Police case </p>
      <p> ${T??""} Criminal case </p>
      <p> ${T??""} Suit filed </p>
      <p> ${T??""} defaulter  </p>
      <p> ${T??""} sec. 138 </p>
      <p> ${T??""} Court Case  </p>
      <p> ${T??""} MYNETA </p>
      <p> ${T??""} Politics </p>
      <p> ${T??""} Facebook </p>`;let y="";if(u.CODE===_.GOOGLE_SEARCH&&(e==null?void 0:e.customUserResponse)===null?y=re:y=(e==null?void 0:e.customUserResponse)??"",!(u!=null&&u.SHOW_EDITOR)){(u==null?void 0:u.CODE)===_.ADHAAR&&((v=e==null?void 0:e.kyc)!=null&&v.meta)?(U=(D=e==null?void 0:e.kyc)==null?void 0:D.meta,r={...o(u.CODE,(G=e==null?void 0:e.kyc)==null?void 0:G.meta)}):(F=e==null?void 0:e.externalApiRequest)!=null&&F.parsedResponse&&(U=(B=e==null?void 0:e.externalApiRequest)==null?void 0:B.parsedResponse,r={...o(u.CODE,(H=e==null?void 0:e.externalApiRequest)==null?void 0:H.parsedResponse)});for(const ye of u.ROWS)switch(ye.VALUE){case a.NAME.VALUE:i.push({name:a.NAME.NAME,loggedInValues:`${(($=e==null?void 0:e.applicant)==null?void 0:$.firstName)??""} ${((W=e==null?void 0:e.applicant)==null?void 0:W.middleName)??""} ${((q=e==null?void 0:e.applicant)==null?void 0:q.lastName)??""}`,apiValues:(r==null?void 0:r.name)??"",formatLoggedInValues:c.STRING,formatApiValues:c.STRING});break;case a.SURNAME.VALUE:i.push({name:a.SURNAME.NAME,loggedInValues:`${((Y=e==null?void 0:e.applicant)==null?void 0:Y.lastName)??""}`,apiValues:(r==null?void 0:r.surname)??"",formatLoggedInValues:c.STRING,formatApiValues:c.STRING});break;case a.FATHERS_NAME.VALUE:i.push({name:a.FATHERS_NAME.NAME,loggedInValues:((w=e==null?void 0:e.applicant)==null?void 0:w.fatherOrSpouseName)??"",apiValues:(r==null?void 0:r.fathersName)??"",formatLoggedInValues:c.STRING,formatApiValues:c.STRING});break;case a.MOBILE_NO.VALUE:i.push({name:a.MOBILE_NO.NAME,loggedInValues:((Q=e==null?void 0:e.applicant)==null?void 0:Q.mobileNo)??"",apiValues:(r==null?void 0:r.mobileNo)??"",formatLoggedInValues:c.STRING,formatApiValues:c.STRING});break;case a.EMAIL.VALUE:i.push({name:a.EMAIL.NAME,loggedInValues:((J=e==null?void 0:e.applicant)==null?void 0:J.emaiId)??"",apiValues:(r==null?void 0:r.email)??"",formatLoggedInValues:c.STRING,formatApiValues:c.STRING});break;case a.PHOTO.VALUE:i.push({name:a.PHOTO.NAME,loggedInValues:`${(X=e==null?void 0:e.applicant)==null?void 0:X.applicantUrl}`,apiValues:(r==null?void 0:r.photo)??"",formatLoggedInValues:c.UNSIGNED_IMAGE,formatApiValues:c.BASE64_IMAGE});break;case a.MASKED_AADHAAR_NUMBER.VALUE:i.push({name:a.MASKED_AADHAAR_NUMBER.NAME,loggedInValues:((Z=e==null?void 0:e.kyc)==null?void 0:Z.maskedDocNo)??"-",apiValues:(r==null?void 0:r.maskedAadhaarNumber)??"",formatLoggedInValues:c.STRING,formatApiValues:c.STRING});break;case a.DOB.VALUE:i.push({name:a.DOB.NAME,loggedInValues:(Te=e==null?void 0:e.applicant)==null?void 0:Te.dateOfBirth,apiValues:(r==null?void 0:r.dob)??"",formatLoggedInValues:c.DATE,formatApiValues:c.DATE});break;case a.GENDER.VALUE:i.push({name:a.GENDER.NAME,loggedInValues:(he=e==null?void 0:e.applicant)==null?void 0:he.smGender,apiValues:(r==null?void 0:r.gender)??"",formatLoggedInValues:c.GENDER,formatApiValues:c.STRING});break;case a.ADDRESS.VALUE:i.push({name:a.ADDRESS.NAME,loggedInValues:(S==null?void 0:S.address)??"",apiValues:(r==null?void 0:r.address)??"",formatLoggedInValues:c.STRING,formatApiValues:c.STRING});break;case a.PINCODE.VALUE:i.push({name:a.PINCODE.NAME,loggedInValues:(S==null?void 0:S.pincode)??"",apiValues:(r==null?void 0:r.pincode)??"",formatLoggedInValues:c.STRING,formatApiValues:c.STRING});break;case a.DISTRICT.VALUE:i.push({name:a.DISTRICT.NAME,loggedInValues:(S==null?void 0:S.district)??"",apiValues:(r==null?void 0:r.district)??"",formatLoggedInValues:c.STRING,formatApiValues:c.STRING});break;case a.STATE.VALUE:i.push({name:a.STATE.NAME,loggedInValues:(S==null?void 0:S.state)??"",apiValues:(r==null?void 0:r.state)??"",formatLoggedInValues:c.STRING,formatApiValues:c.STRING});break;case a.DL_NUMBER.VALUE:i.push({name:a.DL_NUMBER.NAME,loggedInValues:((Re=e==null?void 0:e.kyc)==null?void 0:Re.docNo)??"",apiValues:(r==null?void 0:r.docNo)??"",formatLoggedInValues:c.STRING,formatApiValues:c.STRING});break;case a.PASSPORT_NUMBER.VALUE:i.push({name:a.PASSPORT_NUMBER.NAME,loggedInValues:((xe=e==null?void 0:e.kyc)==null?void 0:xe.docNo)??"",apiValues:(r==null?void 0:r.docNo)??"",formatLoggedInValues:c.STRING,formatApiValues:c.STRING});break;case a.ACCOUNT_HOLDER_NAME.VALUE:i.push({name:a.ACCOUNT_HOLDER_NAME.NAME,loggedInValues:((ge=e==null?void 0:e.bankingDetail)==null?void 0:ge.accountHolderName)??"",apiValues:(r==null?void 0:r.accountName)??"",formatLoggedInValues:c.STRING,formatApiValues:c.STRING});break;case a.ACCOUNT_NUMBER.VALUE:i.push({name:a.ACCOUNT_NUMBER.NAME,loggedInValues:((Ce=e==null?void 0:e.bankingDetail)==null?void 0:Ce.accountNo)??"",apiValues:(r==null?void 0:r.accountNo)??"",formatLoggedInValues:c.STRING,formatApiValues:c.STRING});break;case a.IFSC_CODE.VALUE:i.push({name:a.IFSC_CODE.NAME,loggedInValues:((Ve=(be=e==null?void 0:e.bankingDetail)==null?void 0:be.ifsc)==null?void 0:Ve.ifscCode)??"",apiValues:(r==null?void 0:r.ifsc)??"",formatLoggedInValues:c.STRING,formatApiValues:c.STRING});break;case a.BANK_RESPONSE.VALUE:i.push({name:a.BANK_RESPONSE.NAME,loggedInValues:"-",apiValues:(r==null?void 0:r.bankResponse)??"",formatLoggedInValues:c.STRING,formatApiValues:c.STRING});break;case a.BANK_TXN_STATUS.VALUE:i.push({name:a.BANK_TXN_STATUS.NAME,loggedInValues:"-",apiValues:(r==null?void 0:r.bankTxnStatus)??"",formatLoggedInValues:c.STRING,formatApiValues:c.BANK_TXN_STATUS});break;case a.MEMBER_STATUS.VALUE:i.push({name:a.MEMBER_STATUS.NAME,loggedInValues:"-",apiValues:(r==null?void 0:r.memberStatus)??"",formatLoggedInValues:c.STRING,formatApiValues:c.STRING});break}}return s={...n,table:i,status:e==null?void 0:e.status,remark:e==null?void 0:e.remark,isApiCheckInitiated:e==null?void 0:e.isApiCheckInitiated,isKyc:e==null?void 0:e.isKyc,isAutoApiInitiated:e==null?void 0:e.isAutoApiInitiated,updatedAt:e==null?void 0:e.updatedAt,uid:e==null?void 0:e.uid,customUserResponse:y,rawResponseData:zs(JSON.parse(U))},s})},N=e=>t.jsx("span",{children:e==null?void 0:e.name}),f=e=>Ue(e==null?void 0:e.loggedInValues,e.formatLoggedInValues),p=e=>Ue(e==null?void 0:e.apiValues,e.formatApiValues),I=()=>t.jsxs("div",{className:"flex justify-between items-center flex-grow mr-8 ",children:[t.jsxs("div",{className:"flex flex-col",children:[t.jsx(ne,{className:"text-primary-sideBarBgColor font-medium text-base",label:"label.qc.DocumentName",args:{documentName:A==null?void 0:A.NAME}}),t.jsx(ne,{className:"text-primary-gray-20 text-xs",label:le(`Date of check - ${tt(m==null?void 0:m.updatedAt)}`)})]}),A!=null&&A.HIDE_API_CHECK?null:t.jsx("div",{className:"w-39 ",children:t.jsx(rt,{label:"label.qc.initiateApiCheck",variant:nt.SECONDARY,onClickWithLoader:Se,loadFromParent:m.loadingForInitiateCheck,disabled:m.loadingForInitiateCheck||k===b.EDIT||ce})})]}),E=()=>t.jsxs(Ws,{value:m.table,ref:ve,dataKey:"uid",className:" border-x-0  rounded-none document-check-table ",hidePaginator:!0,children:[t.jsx(oe,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:"Field",body:N}),t.jsx(oe,{className:" text-primary-ptext-1000 text-left w-84  text-xs  p-1 h-12 pl-6",header:"Logged In Values",body:f}),t.jsx(oe,{className:"text-primary-ptext-1000 text-left w-84  text-xs  p-1 h-12 pl-6",header:"API Value",body:p})]}),P=()=>{var e;return t.jsxs("div",{className:" grid grid-cols-3 gap-4  p-5   rounded-b-xl ",children:[t.jsx("div",{className:"",children:t.jsx(ht,{label:"input.masterData.approvalRequestSearch.status",name:"status",value:m.status,options:ot,optionLabel:"label",optionValue:"value",onBlur:He,onChange:Me,validation:(e=h==null?void 0:h.current)==null?void 0:e.message("status",m.status,"mandatory"),disabled:k===b.VIEW})}),t.jsx("div",{className:"col-span-2",children:t.jsx(ft,{name:"remark",className:"!h-full",label:"label.crifDetails.enquiryByLenders.thead.remark",placeholder:"",variant:Fs.SECONDARY,maxCount:200,onChange:Me,value:m.remark,disabled:k===b.VIEW})})]})},ae=()=>{switch(V.section){case j.ADHAAR.CODE:case j.PAN.CODE:case j.VOTER_ID.CODE:case j.PASSPORT.CODE:case j.DRIVERS_LICENSE.CODE:case j.MOBILE.CODE:case j.BANK_ACCOUNT.CODE:return t.jsxs("div",{className:"mt-5",children:[E(),P()]});default:return t.jsxs("div",{className:"mt-7",children:[t.jsx("div",{className:" document-check-Editor",children:t.jsx(It,{height:200,ref:te,initialValue:(m==null?void 0:m.customUserResponse)??"",contentClasses:"w-full",disabled:k===b.VIEW})}),P()]})}};return t.jsxs("div",{className:"mt-5",children:[Oe?t.jsx(we,{height:"19.375rem",width:"100%",borderRadius:"8px",animation:"wave"}):t.jsx(Tt,{disabled:!(A!=null&&A.HIDE_API_CHECK)&&(m==null?void 0:m.loadingForInitiateCheck),disabledMenu:z===me.CANCELLED||z===me.COMPLETED,kebabModel:We(),renderHeaderContent:I,pageMode:k,onSave:fe,onCancel:Fe,onEdit:Ge,className:" !px-0 pb-0 !gap-0",headerWrapperClassName:"px-5 ",children:ae()}),t.jsx(Rt,{position:et.BOTTOM_RIGHT,ref:M,toastText:de,variant:st.PRIMARY,onRemove:()=>se("")}),t.jsx(Hs,{override:{update:!0},children:t.jsx(Vt,{onHide:Be,visible:Qe,data:m.rawResponseData,header:"heading.qc.rawApiResponse",headerArgs:{documentName:(A==null?void 0:A.NAME)??""}})})]})},Ot={district:"",state:"",pincode:"",houseNo:"",address:""},kt={CAM:"CAM",QC:"QC"},Sr=Ae=>{const{module:le,showDataSource:V}=Ae,R=Bs(),[K,ie]=d.useState(0),[x,g]=d.useState([]),[ce,O]=d.useState(!1),[z,Oe]=d.useState([{name:"Collateral / Risk Check",uid:"",type:Gs.COLLATERAL_RISK_CHECK,mode:b.CREATE,disabled:!1}]),[pe,k]=d.useState({...Ot}),[ee,m]=d.useState([]),[C,L]=d.useState({applicantStructure:!1,tab:!1}),[A,Pe]=d.useState(void 0),[Qe,Ee]=d.useState(!1),de=d.useRef(null),se=d.useRef(null),Ne=qs(o=>o.LoanReducers.loanObj.qcStatus),ke=d.useRef(null);d.useEffect(()=>{h()},[]),d.useEffect(()=>{Fe(()=>{var o;(o=x==null?void 0:x[0])!=null&&o.label&&O(!0)},De())},[x]),d.useEffect(()=>{console.log("applicant docs ",ee)},[ee]),d.useEffect(()=>{console.log("is table loading",C.tab)},[C.tab]);const h=()=>{ve(),z.length===1&&M(te,Se)},ve=()=>{const o=JSON.parse(it(at.STAGE_DETAIL));(o==null?void 0:o.status)===me.COMPLETED||(o==null?void 0:o.status)===me.CANCELLED?Ee(!0):Ee(!1)},M=async(o,l)=>{var f;let N="";try{L(E=>({...E,tab:!0}));const p=await Nt.getApplicantListForQc(`[${Ye.PRIMARY},'${Ye.CO_APPLICANT}']`,R.loanUid??""),I=[];if(((f=p==null?void 0:p.data.results)==null?void 0:f.length)>0){for(const E of p.data.results){N===""&&(N=E==null?void 0:E.uid);const P=`${(E==null?void 0:E.firstName)??""} ${(E==null?void 0:E.middleName)??""} ${(E==null?void 0:E.lastName)??""}`;I.push({name:`${Me(E==null?void 0:E.applicantType)} ${P}`,mode:b.CREATE,type:E.applicantType,uid:(E==null?void 0:E.uid)??"",disabled:!1,applicantName:P}),L(ae=>({...ae,tab:!1}))}Oe(E=>[...I,...E])}o({uid:N,name:(I==null?void 0:I[0].applicantName)??""}),l(N)}catch(p){console.log(p),L(I=>({...I,tab:!1})),g(I=>[...I,{label:_e(p),isOnLoad:!0}])}},te=async o=>{var N;const l=[];fe(!0);try{L(p=>({...p,applicantStructure:!0}));const f=await Le.getDocumentStructure((R==null?void 0:R.loanUid)??"",o.uid);if(console.log("applicant docs ",f),f!=null&&f.data){for(const p of f.data){const I=p.section,E=ct(I);console.log("document",E),(N=j)!=null&&N[E]&&l.push({uid:p.uid,section:E,updatedAt:p.updatedAt,applicantName:o.name,sequence:(p==null?void 0:p.sequence)??0})}l.sort((p,I)=>p.sequence-I.sequence),fe(!1),m(l)}L(p=>({...p,applicantStructure:!1}))}catch(f){console.log(f),L(p=>({...p,applicantStructure:!1})),g(p=>[...p,_e(f)])}},Se=async o=>{const l=await Ct.getAddressWithoutDocForDde(R.loanUid??"",o,ut.RESIDENTIAL);k(N=>{var f,p,I,E,P,ae,e,u,n,s,i,S,T,r,U,re,y,v,D,G,F,B,H,$,W,q,Y,w,Q,J,X,Z;return{...N,address:`${((I=(p=(f=l==null?void 0:l.data)==null?void 0:f.results)==null?void 0:p[0])==null?void 0:I.address)??""} ${((e=(ae=(P=(E=l==null?void 0:l.data)==null?void 0:E.results)==null?void 0:P[0])==null?void 0:ae.city)==null?void 0:e.name)??""} ${((S=(i=(s=(n=(u=l==null?void 0:l.data)==null?void 0:u.results)==null?void 0:n[0])==null?void 0:s.city)==null?void 0:i.state)==null?void 0:S.name)??""} ${((re=(U=(r=(T=l==null?void 0:l.data)==null?void 0:T.results)==null?void 0:r[0])==null?void 0:U.pincode)==null?void 0:re.pinCode)??""}`,district:((G=(D=(v=(y=l==null?void 0:l.data)==null?void 0:y.results)==null?void 0:v[0])==null?void 0:D.city)==null?void 0:G.name)??"",pincode:(($=(H=(B=(F=l==null?void 0:l.data)==null?void 0:F.results)==null?void 0:B[0])==null?void 0:H.pincode)==null?void 0:$.pinCode)??"",state:((Q=(w=(Y=(q=(W=l==null?void 0:l.data)==null?void 0:W.results)==null?void 0:q[0])==null?void 0:Y.city)==null?void 0:w.state)==null?void 0:Q.name)??"",uid:((Z=(X=(J=l==null?void 0:l.data)==null?void 0:J.results)==null?void 0:X[0])==null?void 0:Z.uid)??""}})},ue=o=>{ie(o.index);const l=z[o.index]?{...z[o.index]}:void 0;l&&(te({uid:l==null?void 0:l.uid,name:l==null?void 0:l.applicantName}),Se(l==null?void 0:l.uid))},De=()=>x!=null&&x.find(o=>o.isOnLoad===!1)?0:3e3,Ge=()=>{let o="";for(const l of x)o=`${mt(`${l.label}`,75,` 
 `)} 

 ${o}`;return o},Fe=(o,l)=>{clearTimeout(A),Pe(setTimeout(o,l))},fe=o=>{Oe(l=>{const N=[...l];return N.map(f=>{f.disabled=o}),N})},Me=o=>o===Ye.PRIMARY?"Applicant -":"Co App -",Ie=(o,l)=>{g(N=>[...N,{label:o,isOnLoad:l}])},Be=o=>t.jsx("span",{children:$s(o==null?void 0:o.stageCompletionDate)}),He=o=>{var l,N;return t.jsx("span",{children:((N=(l=At)==null?void 0:l[o==null?void 0:o.stageName])==null?void 0:N.label)??""})},$e=o=>t.jsx("span",{children:o==null?void 0:o.vendorName}),We=o=>{var l;return t.jsx("span",{children:((l=bt)==null?void 0:l[o==null?void 0:o.finalStatus])??(o==null?void 0:o.finalStatus)})},qe=()=>t.jsxs(Ws,{standardDataFormatPromise:Le.collateralRick,dataKey:"id",search:`?loanUid=${R==null?void 0:R.loanUid}`,ref:ke,children:[t.jsx(oe,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:"Date",body:Be}),t.jsx(oe,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:"Stage",body:He}),t.jsx(oe,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:"Vendor",body:$e}),t.jsx(oe,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:"Status",body:We})]}),Ue=(o,l)=>o.type===Gs.COLLATERAL_RISK_CHECK?t.jsx("div",{className:"mt-6",children:qe()}):C.applicantStructure?t.jsx("div",{className:"mt-5",children:t.jsx(we,{height:"19.375rem",width:"100%",borderRadius:"8px",animation:"wave"})}):ee.map(N=>{var f,p,I;return t.jsx("div",{className:"pb-5",children:t.jsx(_t,{documentData:{...N,residentialAddress:pe},search:`${N==null?void 0:N.uid}`,getDetailsPromise:Le.getDocumentDetails,initiateApiCheckPromise:Le.initiateApiCheck,updateDocumentStatusPromise:Le.updateQc,callbackForErrorMessage:Ie,isSectionDisabled:(I=(p=(f=se==null?void 0:se.current)==null?void 0:f.props)==null?void 0:p.override)==null?void 0:I.read})},N==null?void 0:N.uid)});return t.jsxs(t.Fragment,{children:[t.jsx(Et,{title:"label.qc.assetsAndDocument",children:t.jsx(Hs,{override:{read:le===kt.CAM||Ne===me.COMPLETED||Ne===me.CANCELLED},ref:se,children:C.tab?t.jsx(t.Fragment,{children:t.jsx(we,{height:"19.375rem",width:"100%",borderRadius:"8px",animation:"wave"})}):t.jsxs("div",{children:[V?t.jsx("div",{className:"self-end flex text-xs my-3",children:t.jsx(ne,{className:"",label:"label.dataSource"})}):null,t.jsx(dt,{showTooltip:!0,scrollable:!0,optionLabel:["name"],optionKey:"uid",headerClassName:"document-check-tabs",ref:de,activeIndex:K,tabs:z,onTabChange:ue,renderContent:Ue})]})})}),t.jsx(pt,{onHide:()=>{O(!1),g([])},errorDivClassName:" whitespace-pre ",visible:ce,errorMessage:Ge()})]})};export{kt as DOCUMENT_CHECK_MODULE,Sr as default};
//# sourceMappingURL=PageAssetDocumentCheck-f0428b47.js.map
