var Te=Object.defineProperty;var Ee=(T,d,p)=>d in T?Te(T,d,{enumerable:!0,configurable:!0,writable:!0,value:p}):T[d]=p;var q=(T,d,p)=>(Ee(T,typeof d!="symbol"?d+"":d,p),p);import{at as ve,r as n,q as Se,aF as h,ad as Re,ae as De,af as Le,j as a,R as Ce,T as X,a8 as pe,aA as ge,cn as Ne,c8 as Ie,d8 as Me,d9 as we,aG as le,d4 as $,v as _e,ao as g,J as Ve,aH as me,d7 as ye}from"./index-e8217573.js";import{B as Ye}from"./ButtonBox-9e46519a.js";import{E as Ue}from"./ErrorDialog-d5eef4d7.js";import{L as Be}from"./LazyLoader-70599949.js";import{S as Fe}from"./Section-00ef9f2b.js";import{S as he}from"./Skeleton-7e12d019.js";import{T as We}from"./Toast-ae99ea5b.js";import{A as ke}from"./ApplicantService-924aa5cb.js";import{R as Ge}from"./Residential-74fb844b.js";import{P as _,B as qe,Q as ce,R as de}from"./Helper-03e9d878.js";import{A as He}from"./Address-75e58af3.js";import{D as be,a as fe}from"./DocumentUploader-e2ec1a13.js";import{R as Ae}from"./RadioButton-86c37166.js";import{S as ze}from"./SaveComponent-160c5b32.js";import{T as Je}from"./TextData-06df331b.js";import{C as Xe}from"./CheckBox-8a0c0e77.js";import"./kebab-menu-8835ad2e.js";import"./Dialog-adadaf64.js";import"./TransitionGroup-c8afe0ce.js";import"./AutoComplete-0bca608a.js";import"./search_icon-459d6871.js";import"./withAuth-6de36ebf.js";import"./virtualscroller.esm-9939945c.js";import"./InputBox-b9e88f52.js";import"./InputTextArea-b90aad1d.js";import"./esm-70d64670.js";import"./index-8739acfd.js";import"./SimpleDropDown-061a3470.js";import"./TextButton-41b4a67e.js";import"./loader-5f2cfb31.js";import"./City-7102c574.js";import"./Pincode-a7c9b067.js";import"./StaticMasterDataService-689a6eca.js";import"./DatePicker-b1c13861.js";import"./FileUploadCustom-5ab7fd25.js";import"./Loading-783a01c7.js";import"./MediaGallery-5884b284.js";import"./Download_Icon-51fc7f46.js";import"./FileUploadService-1aaf11f7.js";import"./FileUploadMenuBox-f47dc693.js";import"./MenuBox-defc36b0.js";import"./IconButton-36693dd9.js";import"./sortIcon-54357a29.js";import"./eye_icon-081bddb3.js";import"./DocumentService-a293b5f4.js";import"./link-0172a3d4.js";const K="/custom/api/login";class $e extends ve{constructor(){super(...arguments);q(this,"getAll",p=>{const u=K+`/collateral/property/${p}?isActive=true`;return this.makeGetRequestWithAuth(u)});q(this,"getPropertyDetailsById",p=>{const u=K+`/collateral/property/uid/${p}`;return this.makeGetRequestWithAuth(u)});q(this,"create",p=>{const u=K+"/dde/collateral/property";return this.makePostRequestWithAuth(u,p)});q(this,"update",p=>{const u=K+"/dde/collateral/property";return this.makePutRequestWithAuth(u,p)})}}const w=new $e,Pe=n.forwardRef((T,d)=>{const{data:p,residentialAddress:u,isLoading:Q,cardNumber:L,disabled:P,disabledSaveMenu:V,onSavePropertyDetails:Z,onRemovePropertyDetails:W,onChangePropertySelection:H,getPropertyDetails:x}=T,Y=Se(),[e,C]=n.useState({..._}),[S,N]=n.useState(h.VIEW),[,U]=n.useState(!1),A=n.useRef(new Re({validators:{...De()},...Le(),autoForceUpdate:{forceUpdate:()=>U(r=>!r)}})),m=n.useRef(null),b=[{className:"",label:"Remove",command:()=>{W==null||W()},disabled:L===0}];n.useEffect(()=>{console.log("pageObj",e)},[e]),n.useEffect(()=>{p&&C(r=>({...r,...p}))},[p]),n.useEffect(()=>{var r,c,t;H({...e}),e.isPropertySelected||((r=f==null?void 0:f.current)==null||r.resetValidator(),se({..._}),(c=m==null?void 0:m.current)==null||c.resetDocUpload(),(t=m==null?void 0:m.current)==null||t.resetValidator())},[e.isPropertySelected]),n.useEffect(()=>{e.isSameAsApplicantResAddress&&te()},[e.isSameAsApplicantResAddress]),n.useEffect(()=>{console.log("pageObj",e)},[e]);const f=n.useRef();n.useImperativeHandle(d,()=>({save:B,remove:O,onSaveSuccess:()=>N(h.VIEW),onClearData:()=>C(r=>({...r,..._}))}));const z=()=>{var c,t;let r=!1;return r=(c=A==null?void 0:A.current)==null?void 0:c.allValid(),r||(U(s=>!s),(t=A==null?void 0:A.current)==null||t.showMessages(),U(s=>!s),!1)},E=r=>{C(c=>({...c,[r.target.name]:!e.isPropertySelected}))},D=r=>{C(c=>({...c,isSameAsApplicantResAddress:!e.isSameAsApplicantResAddress}))},j=async r=>{var c,t;if(e.isSameAsApplicantResAddress){const s={address:e==null?void 0:e.address,city:{name:(c=e==null?void 0:e.city)==null?void 0:c.name,uid:(t=e==null?void 0:e.city)==null?void 0:t.uid},state:(e==null?void 0:e.state)??"",latitude:(e==null?void 0:e.latitude)??"",longitude:(e==null?void 0:e.longitude)??"",pincode:e==null?void 0:e.pincode,propertyType:e==null?void 0:e.propertyType};qe(s,r)||C(i=>({...i,isSameAsApplicantResAddress:!1,ignoreSameAsApplicantResAddressChange:!0}))}},O=()=>{var c;let r;if(!(e!=null&&e.uid&&(r=(c=m==null?void 0:m.current)==null?void 0:c.getUploadedData(),e!=null&&e.isPropertySelected&&!(r!=null&&r.documentUid))))return{...e,unSavedDocuments:r,isActive:!1}},B=()=>{var t,s;const r=(t=f==null?void 0:f.current)==null?void 0:t.save(),c=(s=m==null?void 0:m.current)==null?void 0:s.getUploadedData();if(!(!z()||!r||e!=null&&e.isPropertySelected&&!c))return{...e,...r,unSavedDocuments:e!=null&&e.isPropertySelected?c:[],uid:e==null?void 0:e.uid}},ee=()=>{var r,c;A&&(A.current.visibleFields=[]),(r=A==null?void 0:A.current)==null||r.hideMessages(),(c=f==null?void 0:f.current)==null||c.resetValidator(),x==null||x(),N(h.VIEW)},k=()=>N(h.EDIT),te=()=>{u.address&&C(r=>({...r,...u,uid:r.uid,ignoreSameAsApplicantResAddressChange:!1,savedDocuments:r.savedDocuments,propertyType:r.propertyType}))},se=r=>{if(r){const{address:c,city:t,unSavedDocuments:s,latitude:o,longitude:i,pincode:l,propertyType:y,state:v,isSameAsApplicantResAddress:R,savedDocuments:I}=r;C(M=>({...M,address:c,city:t,unSavedDocuments:s??[],pincode:l,propertyType:y,state:v,latitude:o,longitude:i,isSameAsApplicantResAddress:!!R,savedDocuments:I}))}},re=()=>S===h.VIEW?S:e.isPropertySelected?h.EDIT:h.VIEW,oe=()=>S===h.VIEW||S===h.EDIT&&!e.isPropertySelected,ae=n.useMemo(()=>{var M;const{address:r,pincode:c,city:t,state:s,latitude:o,longitude:i,ignoreSameAsApplicantResAddressChange:l,propertyType:y,isPropertySelected:v}=e,R=(M=f==null?void 0:f.current)==null?void 0:M.getCurrentValues(),I=y||(v?R==null?void 0:R.propertyType:null);return console.log("propertyTypeUpdatedValue",I),l?null:{address:r,pincode:c,city:t,state:s,latitude:o,longitude:i,propertyType:I}},[e==null?void 0:e.address,e==null?void 0:e.pincode,e==null?void 0:e.city,e==null?void 0:e.state,e==null?void 0:e.latitude,e==null?void 0:e.longitude,e==null?void 0:e.propertyType,e==null?void 0:e.isSameAsApplicantResAddress,e==null?void 0:e.ignoreSameAsApplicantResAddressChange,e==null?void 0:e.isPropertySelected]),ie=()=>{var r,c,t;return a.jsxs(a.Fragment,{children:[a.jsx(He,{pageMode:re(),ref:f,data:ae,variant:Ne.TERTIARY,skipValidation:!(e!=null&&e.isPropertySelected),onAddressChange:j,isLatLong:!0}),a.jsxs("div",{className:"flex flex-col space-y-4",children:[a.jsx(Je,{label:"label.dde.propertyDocuments",value:"Attach Documents (PDF, JPG, JPEG or PNG)",titleClass:"text-primary-gray-700 text-sm font-bold mb-1"}),a.jsx("div",{className:"flex gap-5",children:a.jsx(be,{ref:m,mandatoryDocUpload:!!(e!=null&&e.isPropertySelected),savedDocument:e!=null&&e.isPropertySelected&&((r=e==null?void 0:e.savedDocuments)!=null&&r[0])?(c=e==null?void 0:e.savedDocuments)==null?void 0:c[0]:{},mode:S===h.VIEW||!(e!=null&&e.isPropertySelected)?fe.VIEW:fe.EDIT,queryParamForDocList:Ie.DOCUMENT_CATEGORY_COLLATERAL_PROPERTY,ocrStageName:Me.LOGIN,ocrSubstageName:we.DDE,ocrPayloadData:{loanUid:Y.loanUid??"",applicant:{uid:((t=p.applicant)==null?void 0:t.uid)??""}}})})]})]})},ne=()=>{const{isPropertySelected:r}=e;return a.jsxs(a.Fragment,{children:[a.jsx(X,{label:"label.dde.basicDetails",className:"text-primary-gray-700 text-sm font-bold mb-1"}),a.jsx(X,{className:"text-xs text-primary-ptext-1000",label:"label.dde.propertySelected"}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-5 ",children:a.jsxs("div",{className:"flex",children:[a.jsxs("div",{className:"mr-6",children:[a.jsx("div",{className:"",children:a.jsx(Ae,{name:"isPropertySelected",hideErrorRow:!0,hideLabel:!0,className:"flex items-center",onChange:E,value:r===!0,checked:r===!0,disabled:S===h.VIEW||L!==1})}),a.jsx("div",{className:"",children:a.jsx(pe,{label:"label.dde.yes",className:"ml-2"})})]}),a.jsxs("div",{children:[a.jsx("div",{className:"",children:a.jsx(Ae,{name:"isPropertySelected",hideLabel:!0,hideErrorRow:!0,className:"flex items-center",onChange:E,value:r===!1,checked:r===!1,disabled:S===h.VIEW||L!==1})}),a.jsx("div",{className:"",children:a.jsx(pe,{label:"label.dde.no",className:"ml-2"})})]})]})}),a.jsxs("div",{className:"flex",children:[a.jsx("div",{className:"mr-5",children:a.jsx(X,{className:"text-primary-gray-700 text-sm font-bold mb-1",label:"label.dde.propertyAddress"})}),a.jsxs("div",{className:"flex items-center",children:[a.jsx("div",{className:"w-6 h-6 mr-1.5",children:a.jsx(Xe,{variant:ge.PRIMARY,value:e.isSameAsApplicantResAddress,checked:e.isSameAsApplicantResAddress,onChange:D,hideLabel:!0,disabled:oe()})}),a.jsx("div",{children:a.jsx(X,{className:"text-primary-labelColor text-xs  ",label:"label.dde.permanentAddressCheckboxMessage"})})]})]}),ie()]})};return a.jsx(Ce.Fragment,{children:a.jsx("div",{className:"",children:Q?a.jsx(he,{height:"19.375rem",width:"100%",borderRadius:"8px",animation:"wave"}):a.jsx(ze,{disabled:P,disabledMenu:V,title:"label.dde.propertyDetails",titleArgs:{count:L},pageMode:S,onCancel:ee,onEdit:k,onSave:Z,kebabModel:b,children:ne()})})})});Pe.defaultProps={disabled:!1};const qt=()=>{const T=Se(),[d,p]=n.useState(T.loanUid??""),[u,Q]=n.useState(""),[L,P]=n.useState(""),[V,Z]=n.useState({..._}),[W,H]=n.useState(!1),[x,Y]=n.useState({property:{isPropertyListLoading:!0,propertyList:[{..._}]}}),[e,C]=n.useState([]),[S,N]=n.useState(""),[U,A]=n.useState(le.PRIMARY),[m,b]=n.useState(!1),[f,z]=n.useState(!1),E=n.useRef([]),D=n.useRef(null);n.useEffect(()=>{j()},[]),n.useEffect(()=>{L&&z(!0)},[L]),n.useEffect(()=>{var t;D!=null&&D.current&&S!==""&&((t=D==null?void 0:D.current)==null||t.showFunction(),N(""))},[S,U,m]),n.useEffect(()=>{u&&d&&ee()},[u,d]),n.useEffect(()=>{console.log("residential address ",V)},[V]);const j=async()=>{O()},O=async()=>{var t,s,o,i;try{const l=await ke.getApplicantInfo(0,20,$.PRIMARY,d);_e(l)&&((t=l.data)!=null&&t.totalRecords)&&Q((i=(o=(s=l.data)==null?void 0:s.results)==null?void 0:o[0])==null?void 0:i.uid)}catch(l){P(g(l))}},B=async()=>{var t;try{const s=await w.getAll(d);let o=[];if(o=(t=s==null?void 0:s.data)==null?void 0:t.map(i=>ce(i)),s.data.length>0){const i=o==null?void 0:o.some(l=>(l==null?void 0:l.isPropertySelected)===!1);H(i)}Y(i=>({...i,property:{...i.property,isPropertyListLoading:!1,propertyList:s.data.length>0?o:[{..._}]}}))}catch(s){P(g(s))}},ee=async()=>{if(d&&u)try{const t=await Ge.getAddressForDde(d,u);Z(ce({...t==null?void 0:t.data,isSameAsApplicantResAddress:!0,isPropertySelected:!0},!0))}catch(t){console.log(t),P(g(t))}},k=async(t,s)=>{try{if(s){const o=await w.getPropertyDetailsById(s),i=ce(o==null?void 0:o.data);Y(l=>{const y=structuredClone(l.property.propertyList);return typeof V=="object"&&(y[t]={...i}),{...l,property:{...l.property,isPropertyListLoading:!1,propertyList:y}}})}else E.current[t].onClearData()}catch(o){console.log(o),P(g(o))}},te=async t=>{var o,i,l,y,v,R,I,M,ue;const s=(i=(o=E.current)==null?void 0:o[t])==null?void 0:i.save();if(s){const G=de(s,d,u,$.PRIMARY);if(s!=null&&s.isPropertySelected||await se(s),G)try{let J=w.create;G!=null&&G.uid&&(J=w.update);const F=await J(G);N(me.SAVED),A(le.PRIMARY),b(!m),s!=null&&s.isPropertySelected?k(t,(l=F==null?void 0:F.data)==null?void 0:l.uid):((R=(v=(y=x==null?void 0:x.property)==null?void 0:y.propertyList)==null?void 0:v.filter(xe=>xe.uid))==null?void 0:R.length)>1?B():k(t,(I=F==null?void 0:F.data)==null?void 0:I.uid),(ue=(M=E.current)==null?void 0:M[t])==null||ue.onSaveSuccess()}catch(J){P(g(J))}}},se=async t=>{if(t){const s=x.property.propertyList.filter(o=>o.uid!==(t==null?void 0:t.uid));if(s)for(const o of s){const i=r(o);try{i&&await w.update(i)}catch(l){P(g(l))}}}},re=async t=>{const s=de(t,d,u,$.PRIMARY);if(s)try{const o=await w.update(s);ye(o)&&B()}catch(o){P(g(o))}},oe=async t=>{var o,i;const s=(i=(o=E==null?void 0:E.current)==null?void 0:o[t])==null?void 0:i.remove();if(s){const l=de(s,d,u,$.PRIMARY);if(s.uid)try{const y=await w.update(l);ye(y)&&(B(),N(me.SAVED),A(le.PRIMARY),b(!m))}catch(y){P(g(y))}else{const y=x.property.propertyList.filter((v,R)=>R!==t);Y(v=>({...v,property:{...v.property,propertyList:[...y]}}))}}},ae=()=>{const t={..._};Y(s=>({...s,property:{...s.property,propertyList:[...s.property.propertyList,t]}}))},ie=t=>{const s=[...x.property.propertyList];if(t){const o=[];if(t!=null&&t.uid)for(const l of s)l.uid===(t==null?void 0:t.uid)?o.push({...t}):o.push({...l});else o.push({...t});const i=o==null?void 0:o.some(l=>l.isPropertySelected===!1);H(i)}},ne=()=>{const t=[];u&&t.push(B),t.forEach(s=>s())},r=t=>({uid:t==null?void 0:t.uid,isActive:!1,loan:{uid:d},applicant:{uid:u},isPropertySelected:!1}),c=()=>{const{propertyList:t,isPropertyListLoading:s}=x.property;return a.jsx("div",{className:"flex flex-col gap-4 ",children:t==null?void 0:t.map((o,i)=>a.jsx(Pe,{ref:l=>{E.current[i]=l},cardNumber:i+1,data:o,residentialAddress:V,docTypeInfo:e,isLoading:s,onSavePropertyDetails:()=>te(i),onRemovePropertyDetails:()=>oe(i),disabledSaveMenu:t.length===1,onDeleteDocs:re,onChangePropertySelection:ie,getPropertyDetails:()=>k(i,o==null?void 0:o.uid)},o==null?void 0:o.uid))})};return a.jsxs("div",{children:[a.jsx(Fe,{title:"heading.dde.propertyDetails",children:u?a.jsxs(Be,{onLazyLoad:ne,children:[c(),a.jsx("div",{className:"p-5 w-full rounded-xl bg-slate-100 mt-5",children:a.jsx(Ye,{buttonType:Ve.ICON_TEXT_ROW,customLabel:"label.dde.addProperty",onClick:ae,disabled:W})})]}):a.jsx(he,{height:"19.375rem",width:"100%",borderRadius:"8px",animation:"wave"})}),a.jsx(We,{position:"bottom-right",ref:D,toastText:S,variant:U}),a.jsx(Ue,{onHide:()=>{z(!1),P("")},visible:f,errorMessage:L})]})};export{qt as default};
//# sourceMappingURL=PageCollateralProperty-16eef1b4.js.map