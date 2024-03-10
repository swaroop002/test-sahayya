var la=Object.defineProperty;var da=(v,p,d)=>p in v?la(v,p,{enumerable:!0,configurable:!0,writable:!0,value:d}):v[p]=d;var G=(v,p,d)=>(da(v,typeof p!="symbol"?p+"":p,d),d);import{at as ca,r,aF as c,aG as re,ad as le,ae as de,af as ce,de as k,df as q,j as e,R as ma,aH as me,az as $,o as y,T as H,J as ue,c8 as ua,d8 as fa,ao as fe}from"./index-e8217573.js";import{V as ba}from"./KYCV3-298daeeb.js";import{E as Na}from"./ErrorDialog-d5eef4d7.js";import{I as xa}from"./InputAddon-04f948e7.js";import{I as P}from"./InputBox-b9e88f52.js";import{S as z}from"./SimpleDropDown-061a3470.js";import{S as pa}from"./Skeleton-7e12d019.js";import{T as ha}from"./Toast-ae99ea5b.js";import{P as Ea}from"./ProfilePictureUpload-60f86be0.js";import{T as be}from"./TextData-06df331b.js";import{S as J}from"./StaticMasterDataService-689a6eca.js";import{B as Ne}from"./ButtonBox-9e46519a.js";import{D as va}from"./Dialog-adadaf64.js";import{D as ga,a as xe}from"./DocumentUploader-e2ec1a13.js";import{S as Da}from"./SystemDatePicker-abe08a29.js";import{T as w}from"./TextButton-41b4a67e.js";const Ia="/assets/Validate_Mob_Num_Disabled_Icon-784c7662.svg",Ta="/assets/Validate_Mob_Num_Icon-e953b9b7.svg",Ma="/identity/api/integration",Sa="/custom/api";class ja extends ca{constructor(){super(...arguments);G(this,"sendMobNumberValidationOTP",d=>{const A=`${Ma}/karza/mobile/authentication/otp`;return this.makePostRequestWithAuth(A,d)});G(this,"validateMobNumViaOTP",d=>{const A=`${Sa}/karza`;return this.makePostRequestWithAuth(A,d)})}}const pe=new ja,Ca={documentUid:"",documentName:"",documentCode:"",documentCategory:"",sectionMetaDropdownOptions:[],documentSectionUrls:[],isActive:!0},he={uid:"",isActive:!0,isMobileNoValidated:!1,smSalutation:"",firstName:"",middleName:"",lastName:"",smGender:"",dateOfBirth:"",mobileCountryCode:"+91",mobileNo:"",stdCode:"",phoneNo:"",ageAsOfLoanCreation:"",applicantUrl:"",applicantThumbUrl:"",smRelationship:"",loanDocumentsInfo:Ca,resetDocumentData:!1},Ee={otp:"",message:"",requestId:"",validatedMobNumber:"",verified:!1},$a=r.forwardRef((v,p)=>{const{pageMode:d=c.VIEW,children:A,data:m=he,type:Y,pageType:C,isLoading:ve,prePopulated:l,relationship:ge,ocrRelatedData:f}=v,[i,x]=r.useState(m),[De,Ie]=r.useState(!1),[Te,Me]=r.useState("bottom-right"),[Se,je]=r.useState(""),[Ce,Oe]=r.useState([{name:"",code:""}]),[U,ye]=r.useState([{name:"",code:""}]),[Ae,Ve]=r.useState([{name:"",code:""}]),[Pe,W]=r.useState(!0),[V,R]=r.useState(c.VIEW),[b,h]=r.useState(Ee),[Q,L]=r.useState(!1),[Ue,Re]=r.useState(!1),_e=r.useRef(null),[Be,we]=r.useState(re.PRIMARY),[F,M]=r.useState(""),[Ye,X]=r.useState(!1),u=r.useRef(null),[,_]=r.useState(void 0),t=r.useRef(new le({validators:{...de()},...ce(),autoForceUpdate:{forceUpdate:()=>_(a=>!a)}})),E={profilePicValidationEnabled:!C||C!==k.DEPENDANT,mobileValidationEnabled:!C||C!==k.DEPENDANT,dobValidationEnabled:!C||C!==k.DEPENDANT};r.useEffect(()=>{ea()},[]),r.useEffect(()=>{F&&X(!0)},[F]),r.useEffect(()=>{l&&Object.keys(l).length>0&&x(a=>({...a,firstName:(l==null?void 0:l.firstName)??"",middleName:(l==null?void 0:l.middleName)??"",lastName:(l==null?void 0:l.lastName)??"",dateOfBirth:l==null?void 0:l.dob,mobileCountryCode:"+91",mobileNo:(l==null?void 0:l.mobile)??"",smGender:l!=null&&l.gender?`GENDER_${l==null?void 0:l.gender}`:"",ageAsOfLoanCreation:q(new Date,new Date(l==null?void 0:l.dob))}))},[l]),r.useEffect(()=>{var a;m&&((a=Object.keys(m))==null?void 0:a.length)>0&&(x(()=>({...m,ageAsOfLoanCreation:q(new Date,new Date(m==null?void 0:m.dateOfBirth))})),m!=null&&m.isMobileNoValidated&&h({...Ee,validatedMobNumber:m.mobileNo??"",verified:!0}))},[m]),r.useEffect(()=>{var a;De&&typeof(i==null?void 0:i.applicantUrl)=="string"?W(!!((a=i==null?void 0:i.applicantUrl)!=null&&a.length)):Ie(!0)},[i==null?void 0:i.applicantUrl]),r.useEffect(()=>{d===c.VIEW&&R(c.VIEW)},[d]),r.useImperativeHandle(p,()=>({save:$e,cancel:He,getData:K,resetValidator:O,resetData:aa}));const We=()=>{J.getAll(0,50,"staticMasterType.code=GENDER").then(o=>{o.status===200&&ye(o.data.results)})},Le=()=>{J.getAll(0,50,"staticMasterType.code=SALUTATION&").then(o=>{o.status===200&&Oe(o.data.results)})},Fe=()=>{J.getAll(0,200,"staticMasterType.code=RELATION_TYPE&").then(o=>{o.status===200&&Ve(o.data.results)})},g=a=>{var s,o;(o=t==null?void 0:t.current)==null||o.showMessageFor((s=a==null?void 0:a.target)==null?void 0:s.name)},Ge=()=>{var s,o,n;let a=!1;return a=E!=null&&E.profilePicValidationEnabled?((s=t==null?void 0:t.current)==null?void 0:s.allValid())&&!!i.applicantUrl.length:(o=t==null?void 0:t.current)==null?void 0:o.allValid(),a||(Me("top-right"),we(re.QUATERNARY),je(me.ERROR),M(me.ERROR),Re(!Ue),_(N=>!N),(n=t==null?void 0:t.current)==null||n.showMessages(),_(N=>!N),!1)},D=a=>{const{name:s,value:o}=a.target;x(n=>({...n,[s]:o}))},ke=a=>{const{value:s}=a.target,o=q(new Date,s);x(n=>({...n,dateOfBirth:s,ageAsOfLoanCreation:o}))},qe=a=>{h(s=>({...s,otp:a.target.value}))},$e=()=>{var s,o;W(!!((s=i==null?void 0:i.applicantUrl)!=null&&s.length)),U!=null&&U.some(n=>(n==null?void 0:n.code)===(i==null?void 0:i.smGender))||x(n=>({...n,smGender:""}));const a=(o=u==null?void 0:u.current)==null?void 0:o.getUploadedData();if(!(!Ge()||!a))return K()},He=()=>{var a,s;(a=u==null?void 0:u.current)==null||a.resetValidator(),(s=u==null?void 0:u.current)==null||s.resetDocUpload(),O(),W(!0)},ze=()=>{R(c.EDIT)},Je=()=>{b.validatedMobNumber===i.mobileNo&&i.isMobileNoValidated?h({...b,verified:!0}):(h({...b,verified:!1}),x(a=>({...a,isMobileNoValidated:!1}))),O(),R(c.VIEW)},Qe=()=>{var a,s,o;if(!((s=(a=t.current)==null?void 0:a.fields)!=null&&s.mobileNo)){(o=t.current)==null||o.showMessageFor("mobileNo");return}Z(),L(!0)},Xe=()=>{h({otp:"",requestId:"",message:"",validatedMobNumber:"",verified:!1}),L(!1),O()},Ke=()=>{O(),Z()},Ze=async()=>{var a,s,o,n,N,S,B;if(!((s=(a=t.current)==null?void 0:a.fields)!=null&&s.otp)){(o=t.current)==null||o.showMessageFor("otp");return}try{const I={request_id:b.requestId,otp:b.otp,mobileNo:i.mobileNo,loan:{uid:f==null?void 0:f.ocrPayloadData.loanUid},applicant:{uid:f==null?void 0:f.ocrPayloadData.applicant.uid}};if(I.loan.uid&&I.applicant.uid){const j=await pe.validateMobNumViaOTP(I);parseInt((n=j.data)==null?void 0:n["status-code"])===101&&((B=(S=(N=j.data)==null?void 0:N.result)==null?void 0:S.sim_details)!=null&&B.otp_validated)?(h(T=>({...T,verified:!0})),x(T=>({...T,isMobileNoValidated:!0}))):(M("Failed to Validate"),h({otp:"",requestId:"",message:"",validatedMobNumber:"",verified:!1}),x(T=>({...T,isMobileNoValidated:!1})))}else M("Failed to Validate")}catch(I){h({otp:"",requestId:"",message:"",validatedMobNumber:"",verified:!1}),x(j=>({...j,isMobileNoValidated:!1})),M(fe(I))}O(),L(!1),R(c.VIEW)},ea=()=>{We(),Le(),Fe()},O=()=>{var a;t.current=new le({validators:{...de()},...ce(),autoForceUpdate:{forceUpdate:()=>_(s=>!s)}}),(a=t==null?void 0:t.current)==null||a.hideMessages()},aa=()=>{x({...he})},K=()=>{var n;let s={...i,isMobileNoValidated:(()=>!!(b.verified&&i.isMobileNoValidated&&b.validatedMobNumber===i.mobileNo))()};const o=(n=u==null?void 0:u.current)==null?void 0:n.getUploadedData();return o&&(s={...s,loanDocumentsInfo:o}),s},ta=a=>{x(s=>({...s,applicantUrl:a.url,applicantThumbUrl:a.thumbUrl}))},Z=async()=>{var a,s;try{const o={mobile:i.mobileNo,consent:"Y"},n=await pe.sendMobNumberValidationOTP(o);parseInt((a=n.data)==null?void 0:a["status-code"])===101?h({otp:"",requestId:n.data.request_id??"",message:((s=n.data.result)==null?void 0:s.message)??"",validatedMobNumber:i.mobileNo,verified:!1}):M("Failed to send OTP")}catch(o){M(fe(o))}},sa=()=>{const{applicantUrl:a}=i,{profilePicValidationEnabled:s}=E;return e.jsxs("div",{className:"w-40 flex-1 justify-end",children:[e.jsx(Ea,{className:"w-40",editMode:d===c.CREATE,getUrl:ta,sourceURL:a,isMandatory:s}),s?e.jsx("div",{className:"text-red-500 text-sm",children:Pe?"":"Upload profile picture"}):null]})},oa=()=>{var ee,ae,te,se,oe,ie,ne;const{smSalutation:a,firstName:s,middleName:o,lastName:n,smGender:N,dateOfBirth:S,phoneNo:B,smRelationship:I,ageAsOfLoanCreation:j}=i,{dobValidationEnabled:T}=E;return console.log(j,"ageAsOfLoanCreation"),e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"grid grid-cols-3 gap-3 w-full",children:[e.jsx("div",{children:e.jsx(z,{disabled:d===c.VIEW,label:"input.basicInformation.salutation",name:"smSalutation",variant:$.SECONDARY,onChange:D,value:a,options:Ce,optionLabel:"name",optionValue:"code",onBlur:g,validation:(ee=t==null?void 0:t.current)==null?void 0:ee.message("smSalutation",a,"mandatory")})}),e.jsx("div",{children:e.jsx(z,{disabled:d===c.VIEW,label:"input.basicInformation.gender",name:"smGender",value:N,options:U,optionLabel:"name",optionValue:"code",variant:$.SECONDARY,onChange:D,onBlur:g,validation:(ae=t==null?void 0:t.current)==null?void 0:ae.message("smGender",N,"mandatory")})}),e.jsx("div",{}),e.jsx("div",{children:e.jsx(P,{disabled:d===c.VIEW,label:"input.basicInformation.firstName",name:"firstName",value:s,variant:y.SECONDARY,onChange:D,onBlur:g,validation:(te=t==null?void 0:t.current)==null?void 0:te.message("firstName",s,"mandatory")})}),e.jsx("div",{children:e.jsx(P,{disabled:d===c.VIEW,label:"input.basicInformation.middleName",name:"middleName",value:o,variant:y.SECONDARY,onChange:D})}),e.jsx("div",{children:e.jsx(P,{disabled:d===c.VIEW,label:"input.basicInformation.lastName",name:"lastName",value:n,variant:y.SECONDARY,onChange:D,onBlur:g,validation:(se=t==null?void 0:t.current)==null?void 0:se.message("lastName",n,"mandatory")})}),e.jsx("div",{children:e.jsx(P,{disabled:d===c.VIEW,label:"input.basicInformation.phone",name:"phoneNo",value:B,variant:y.SECONDARY,onChange:D})}),e.jsx("div",{children:e.jsx(Da,{showMinMaxRange:!0,disabled:d===c.VIEW,label:"input.basicInformation.dob.mandatory",name:"dateOfBirth",value:S?new Date(S):"",variant:y.SECONDARY,onChange:ke,onBlur:T?g:void 0,placeholder:"DD-MMM-YYYY",validation:T?(oe=t==null?void 0:t.current)==null?void 0:oe.message("dateOfBirth",S,"mandatory|dob"):(ie=t==null?void 0:t.current)==null?void 0:ie.message("dateOfBirth",S,"mandatory")})}),Y==="DDE"?e.jsx("div",{children:e.jsx(be,{label:"input.basicInformation.ageAtOrigination",value:j})}):e.jsx(e.Fragment,{}),Y==="DDE"&&ge?e.jsx("div",{children:e.jsx(z,{disabled:d===c.VIEW,label:"input.basicInformation.relationship",name:"smRelationship",value:I,options:Ae,optionLabel:"name",optionValue:"code",variant:$.SECONDARY,onChange:D,onBlur:g,validation:(ne=t==null?void 0:t.current)==null?void 0:ne.message("smRelationship",I,"mandatory")})}):e.jsx(e.Fragment,{}),e.jsx("div",{children:A})]})})},ia=()=>{var a;return e.jsxs("div",{className:"-mx-5 px-5 py-3 border border-x-0",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"self-end",children:V===c.VIEW?e.jsx(w,{label:"Edit Mobile No.",className:`text-primary-sapphireBlue-1000 ${d===c.VIEW?"!text-secondary-steelBlue-500":""} text-sm cursor-pointer`,onClick:ze,disabled:d===c.VIEW}):e.jsx(w,{label:"Cancel Edit",className:"text-semantic-crimson-700 text-sm cursor-pointer",onClick:Je,disabled:d===c.VIEW})}),e.jsxs("div",{className:"flex flex-row gap-3 items-center",children:[e.jsx("div",{className:"w-61",children:e.jsx(xa,{label:E.mobileValidationEnabled?"input.basicInformation.mobile.mandatory":"input.basicInformation.mobile",name:"mobileNo",value:i.mobileNo,variant:y.SECONDARY,onChange:D,onBlur:E.mobileValidationEnabled?g:void 0,validation:E.mobileValidationEnabled?(a=t==null?void 0:t.current)==null?void 0:a.message("mobileNo",i.mobileNo,"mandatory|onlyInteger|checkNumber|phoneNumber"):void 0,disabled:V===c.VIEW})}),i.isMobileNoValidated&&b.verified?e.jsxs("div",{className:"flex items-center gap-3 text-xs",children:[e.jsx("img",{src:ba,alt:"verified"}),e.jsx(H,{label:"Verified"})]}):e.jsxs("div",{className:"flex gap-1 items-center",children:[e.jsx(w,{label:"Validate Mobile No.",className:`text-primary-sapphireBlue-800 text-sm cursor-pointer ${V===c.VIEW?"!text-secondary-steelBlue-500":""}`,onClick:Qe,disabled:V===c.VIEW}),e.jsx("img",{src:V===c.VIEW?Ia:Ta,alt:"validate mobile number"})]})]})]}),Q&&na()]})},na=()=>{var a;return e.jsx(va,{className:"w-77 pt-6 pb-4 px-6",visible:Q,closable:!1,children:e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"mb-16 select-none",children:[e.jsx("div",{className:"font-bold text-primary-primaryTextColor",children:e.jsx(H,{label:"Enter OTP"})}),e.jsx("div",{className:"text-xs",children:e.jsx(H,{label:b.message})})]}),e.jsx("div",{className:"w-64 mb-8 select-none",children:e.jsx(P,{name:"otp",label:"OTP",onBlur:g,validation:(a=t==null?void 0:t.current)==null?void 0:a.message("otp",b==null?void 0:b.otp,"mandatory"),onChange:qe})}),e.jsx("div",{className:"mb-8 flex justify-center",children:e.jsx(w,{label:"Resend OTP",className:"text-primary-sapphireBlue-1000 text-sm cursor-pointer underline select-none",onClick:Ke})}),e.jsxs("div",{className:"flex gap-6 items-center justify-center text-xs text-primary-ptext-1000 select-none",children:[e.jsx(Ne,{buttonType:ue.CANCEL_OUTLINE,onClick:Xe}),e.jsx(Ne,{buttonType:ue.VERIFY,onClickWithLoader:Ze})]})]})})},ra=()=>{var s,o,n,N;const{dobValidationEnabled:a}=E;return e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(be,{label:a?"label.heading.DOB.proof.mandatory":"label.heading.DOB.proof",value:"Attach Documents (PDF, JPG, JPEG or PNG)",titleClass:"text-primary-sideBarBgColor text-sm font-bold mb-1"}),e.jsx(ga,{ref:u,savedDocument:(s=m.loanDocuments)!=null&&s[0]?m.loanDocuments[0]:{},mode:d===c.VIEW?xe.VIEW:xe.EDIT,queryParamForDocList:ua.DOCUMENT_CATEGORY_DOB_PROOF,ocrStageName:fa.LOGIN,ocrSubstageName:Y.toLowerCase(),ocrPayloadData:{loanUid:((o=f==null?void 0:f.ocrPayloadData)==null?void 0:o.loanUid)??"",applicant:{uid:((N=(n=f==null?void 0:f.ocrPayloadData)==null?void 0:n.applicant)==null?void 0:N.uid)??""}},mandatoryDocUpload:a})]})};return e.jsxs(ma.Fragment,{children:[ve?e.jsx(pa,{height:"19rem",width:"100%",borderRadius:"8px",animation:"wave"}):e.jsxs(r.Fragment,{children:[e.jsxs("div",{className:"flex flex-row gap-3 w-full",children:[oa(),sa()]}),ia(),ra()]}),e.jsx("div",{className:"",children:e.jsx(ha,{position:Te,ref:_e,toastText:Se,variant:Be})}),e.jsx(Na,{onHide:()=>{X(!1),M("")},visible:Ye,errorMessage:F})]})});export{$a as B,he as i};
//# sourceMappingURL=BasicInformation-f2687bb1.js.map
