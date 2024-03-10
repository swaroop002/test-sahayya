var bo=Object.defineProperty;var Oo=(M,l,g)=>l in M?bo(M,l,{enumerable:!0,configurable:!0,writable:!0,value:g}):M[l]=g;var k=(M,l,g)=>(Oo(M,typeof l!="symbol"?l+"":l,g),g);import{at as jo,r as i,aF as S,ad as Po,ae as wo,af as Co,j as n,o as lo,aH as C,av as No,T as Ro,q as _o,aG as w,d4 as Yo,v as H,ao as b,dj as po,R as mo,J as Io,d9 as G,d7 as $,aw as Eo}from"./index-e8217573.js";import{B as Bo}from"./ButtonBox-9e46519a.js";import{c as Ao}from"./DocumentUploader-e2ec1a13.js";import{L as To}from"./LazyLoader-70599949.js";import{T as uo,h as Vo,S as Lo,O as Wo,L as xo,U as Uo,V as Mo,y as Fo,W as ko}from"./Helper-03e9d878.js";import{R as Go}from"./RichTextEditor-a03bd2fb.js";import{S as yo}from"./SaveComponent-160c5b32.js";import{S as ho}from"./Section-00ef9f2b.js";import{S as Do}from"./Skeleton-7e12d019.js";import{T as $o}from"./Toast-ae99ea5b.js";import{A as qo}from"./ApplicantService-924aa5cb.js";import{O as fo}from"./OtherDocumentService-d3804bc8.js";import{A as Ko}from"./AutoComplete-0bca608a.js";import{I as Ho}from"./InputTextArea-b90aad1d.js";import{S as zo}from"./SystemDatePicker-abe08a29.js";import"./kebab-menu-8835ad2e.js";import"./loader-5f2cfb31.js";import"./DatePicker-b1c13861.js";import"./withAuth-6de36ebf.js";import"./ErrorDialog-d5eef4d7.js";import"./Dialog-adadaf64.js";import"./FileUploadCustom-5ab7fd25.js";import"./Loading-783a01c7.js";import"./MediaGallery-5884b284.js";import"./Download_Icon-51fc7f46.js";import"./index-8739acfd.js";import"./FileUploadService-1aaf11f7.js";import"./FileUploadMenuBox-f47dc693.js";import"./MenuBox-defc36b0.js";import"./SimpleDropDown-061a3470.js";import"./virtualscroller.esm-9939945c.js";import"./IconButton-36693dd9.js";import"./sortIcon-54357a29.js";import"./eye_icon-081bddb3.js";import"./InputBox-b9e88f52.js";import"./DocumentService-a293b5f4.js";import"./StaticMasterDataService-689a6eca.js";import"./link-0172a3d4.js";import"./TransitionGroup-c8afe0ce.js";import"./search_icon-459d6871.js";const go="/custom/api/login",Xo="/custom/api/user/profile/manage/filter";class Jo extends jo{constructor(){super(...arguments);k(this,"getStoryBoardRecommendationDetails",(g,p)=>{const u=go+`/${g}/${p}/storyboardrecommendation?isActive=true`;return this.makeGetRequestWithAuth(u)});k(this,"createStoryBoardRecommendation",g=>{const p=go+"/dde/storyboardrecommendation";return this.makePostRequestWithAuth(p,g)});k(this,"updateStoryBoardRecommendation",(g,p)=>{const u=go+`/${p}/storyboardrecommendation`;return this.makePutRequestWithAuth(u,g)});k(this,"findRecommendedBy",(g=0,p=10,u="",d="")=>{const U=Xo+`/all?loanUid=${d}&name=${u}&start=${g}&limit=${p}`;return this.makeGetRequestWithAuth(U)})}}const N=new Jo,Qo=i.forwardRef((M,l)=>{const{data:g,isLoading:p,cardNumber:u,disabled:d,disabledSaveMenu:U,loanId:So,onSaveRecommendationDetails:F,onRemoveSalesRecommendation:A}=M,[O,I]=i.useState(g),[R,T]=i.useState(S.VIEW),[z,E]=i.useState(!1),[vo,X]=i.useState("bottom-right"),[j,D]=i.useState(""),[P,q]=i.useState(!1),[J,Q]=i.useState([]),[,_]=i.useState(!1),c=i.useRef(new Po({validators:{...wo()},...Co(),autoForceUpdate:{forceUpdate:()=>_(r=>!r)}})),Y=[{className:"",label:"Remove",command:()=>{A==null||A()},disabled:u===0}];i.useEffect(()=>{},[]),i.useImperativeHandle(l,()=>({save:ao,onSaveSuccess:eo,remove:to}));const V=r=>{var h,m;(m=c==null?void 0:c.current)==null||m.showMessageFor((h=r==null?void 0:r.target)==null?void 0:h.name)},Z=()=>{var h,m;let r=!1;return r=(h=c==null?void 0:c.current)==null?void 0:h.allValid(),r||(_(B=>!B),(m=c==null?void 0:c.current)==null||m.showMessages(),_(B=>!B),!1)},W=r=>{I({...O,[r.target.name]:r.target.value})},oo=r=>{const{name:h,value:m}=r.target;I(typeof m=="object"?B=>({...B,[h]:{name:m==null?void 0:m.name,uid:m==null?void 0:m.uid}}):B=>({...B,[h]:{name:m}}))},eo=()=>T(S.VIEW),to=()=>({...O,isActive:!1}),ao=()=>{if(Z())return I({...O}),{...O}},so=()=>{var r;c&&(c.current.visibleFields=[]),(r=c==null?void 0:c.current)==null||r.hideMessages(),T(S.VIEW)},no=()=>T(S.EDIT),ro=async r=>{let h=[];E(!0);try{await N.findRecommendedBy(0,10,r.query,So).then(m=>{m.status===200&&(h=[...m.data],E(!1))})}catch{X("top-right"),D(C.ERROR),q(!P)}h.length===0&&h.push({name:void 0,code:void 0,uid:void 0}),Q(h)},io=r=>r===void 0?n.jsxs("div",{className:"flex flex-col items-center justify-center h-39",children:[n.jsx("img",{src:No,alt:"search-icon",className:" h-7 w-7"}),n.jsx(Ro,{className:"text-primary-labelColor mt-2",label:"Loading..."})]}):n.jsx("div",{className:"flex flex-col",children:n.jsx(Ro,{className:"text-primary-labelColor",label:r==null?void 0:r.name})}),co=()=>{var B,K,e;const{recommendationDate:r,recommendedBy:h,recommendationDescription:m}=O;return n.jsxs("div",{className:"grid grid-cols-4 gap-x-4 gap-y-5 mt-5",children:[n.jsx("div",{className:"col-span-1",children:n.jsx(zo,{disabled:R===S.VIEW,label:"input.dde.document.recommendation.date",name:"recommendationDate",value:r,variant:lo.SECONDARY,onChange:W,onBlur:V,placeholder:"DD-MM-YYYY ",validation:(B=c==null?void 0:c.current)==null?void 0:B.message("recommendationDate",r,"mandatory")})}),n.jsx("div",{className:"col-span-1",children:n.jsx(Ko,{variant:lo.PRIMARY,label:"input.dde.document.recommended.by",placeholder:"Enter recommended by",name:"recommendedBy",value:h==null?void 0:h.name,suggestions:J,completeMethod:ro,onChange:oo,itemTemplate:io,loader:p,validation:(K=c==null?void 0:c.current)==null?void 0:K.message("recommendedBy",h==null?void 0:h.uid,"mandatory"),onBlur:V,disabled:R===S.VIEW})}),n.jsx("div",{className:"col-span-2 h-auto",children:n.jsx(Ho,{name:"recommendationDescription",className:"!h-24",label:"input.dde.document.recommendation",placeholder:"Enter recommendation",variant:lo.SECONDARY,onChange:W,value:m,onBlur:V,validation:(e=c==null?void 0:c.current)==null?void 0:e.message("recommendationDescription",m,"mandatory"),disabled:R===S.VIEW})})]})};return n.jsx("div",{className:"",children:p?n.jsx(Do,{height:"19.375rem",width:"100%",borderRadius:"8px",animation:"wave"}):n.jsx(yo,{disabled:d,disabledMenu:U,title:"label.dde.recommendation",titleArgs:{count:u},pageMode:R,onCancel:so,onEdit:no,onSave:F,kebabModel:Y,children:co()})})}),We=()=>{const l=_o().loanUid??"",[g,p]=i.useState(""),[u,d]=i.useState({storyBoard:{isStoryBoardLoading:!0,isActive:!0,uid:"",storyBoardData:"",storyBoardMode:S.VIEW,storyBoardValidation:null},salesRecommendation:{isSalesRecommendationLoading:!0,salesRecommendationList:[uo]},otherDocInfo:{isOtherDocInfoLoading:!0,otherDocInfoList:[Ao],sectionMode:S.VIEW}}),[U,So]=i.useState("bottom-right"),[F,A]=i.useState(""),[O,I]=i.useState(w.PRIMARY),[R,T]=i.useState(!1),[z,E]=i.useState(""),[vo,X]=i.useState(!1),j=i.useRef(null),D=i.useRef([]),P=i.useRef(null),q=i.useRef(null);i.useEffect(()=>{J()},[]),i.useEffect(()=>{g&&Y()},[g]),i.useEffect(()=>{_()},[]),i.useEffect(()=>{var e;j!=null&&j.current&&F!==""&&((e=j==null?void 0:j.current)==null||e.showFunction())},[F,O,R]),i.useEffect(()=>{z&&X(!0)},[z]);const J=async()=>{Q()},Q=async()=>{var e,o,t,a;try{const s=await qo.getApplicantInfo(0,20,Yo.PRIMARY,l);H(s)&&((e=s.data)!=null&&e.totalRecords)&&p((a=(t=(o=s.data)==null?void 0:o.results)==null?void 0:t[0])==null?void 0:a.uid)}catch(s){E(b(s))}},_=async()=>{var e;if(l)try{const o=await N.getStoryBoardRecommendationDetails(l,po.SALES_STORY_BOARD);H(o)&&(((e=o==null?void 0:o.data)==null?void 0:e.length)>0?d(t=>{var a,s,f,x,y,v;return{...t,storyBoard:{...t.storyBoard,uid:(s=(a=o==null?void 0:o.data)==null?void 0:a[0])==null?void 0:s.uid,isActive:(x=(f=o==null?void 0:o.data)==null?void 0:f[0])==null?void 0:x.isActive,storyBoardData:(v=(y=o==null?void 0:o.data)==null?void 0:y[0])==null?void 0:v.storyBoard,isStoryBoardLoading:!1}}}):d(t=>({...t,storyBoard:{...t.storyBoard,isStoryBoardLoading:!1}})))}catch(o){console.log(o),d(t=>({...t,storyBoard:{...t.storyBoard,isStoryBoardLoading:!1}}))}},c=async()=>{var e,o;if(l)try{const t=await N.getStoryBoardRecommendationDetails(l,po.SALES_RECOMMENDATION);if(H(t))if(((e=t==null?void 0:t.data)==null?void 0:e.length)>0){const a=(o=t==null?void 0:t.data)==null?void 0:o.map(s=>ko(s));d(s=>({...s,salesRecommendation:{salesRecommendationList:[...a],isSalesRecommendationLoading:!1}}))}else d(a=>({...a,salesRecommendation:{...a.salesRecommendation,isSalesRecommendationLoading:!1,salesRecommendationList:[{...uo}]}}))}catch(t){console.log(t),d(a=>({...a,salesRecommendation:{...a.salesRecommendation,isSalesRecommendationLoading:!1}}))}},Y=async()=>{var e,o;try{const t=await fo.getDocument(l);if(H(t))if(((e=t==null?void 0:t.data)==null?void 0:e.length)>0){const a=(o=t==null?void 0:t.data)==null?void 0:o.map(s=>Vo(s));d(s=>({...s,otherDocInfo:{...s.otherDocInfo,otherDocInfoList:[...a],isOtherDocInfoLoading:!1}}))}else d(a=>({...a,otherDocInfo:{...a.otherDocInfo,isOtherDocInfoLoading:!1}}))}catch(t){console.log(t),d(a=>({...a,otherDocInfo:{...a.otherDocInfo,isOtherDocInfoLoading:!1}})),E(b(t))}};console.log(u.otherDocInfo);const V=()=>{var o,t,a,s;const e=(s=(a=(t=(o=P==null?void 0:P.current)==null?void 0:o.editor)==null?void 0:t.plugins)==null?void 0:a.wordcount)==null?void 0:s.body.getCharacterCount();return e<200?(d(f=>({...f,storyBoard:{...f.storyBoard,storyBoardValidation:{...f.storyBoard.storyBoardValidation,errorMessage:"Minimum 200 characters"}}})),!1):e>500?(d(f=>({...f,storyBoard:{...f.storyBoard,storyBoardValidation:{...f.storyBoard.storyBoardValidation,errorMessage:"Maximum 500 characters"}}})),!1):!0},Z=e=>{var o,t;V()&&(t=(o=u==null?void 0:u.storyBoard)==null?void 0:o.storyBoardValidation)!=null&&t.errorMessage&&d(a=>({...a,storyBoard:{...a.storyBoard,storyBoardValidation:{...a.storyBoard.storyBoardValidation,errorMessage:""}}}))},W=()=>{d(e=>{var o;return{...e,storyBoard:{...e.storyBoard,storyBoardMode:S.VIEW,storyBoardValidation:{...(o=e.storyBoard)==null?void 0:o.storyBoardValidation,errorMessage:""}}}})},oo=()=>{d(e=>({...e,storyBoard:{...e.storyBoard,storyBoardMode:S.EDIT}}))},eo=()=>{const e={...uo};d(o=>({...o,salesRecommendation:{...o.salesRecommendation,salesRecommendationList:[...o.salesRecommendation.salesRecommendationList,e]}}))},to=async()=>{var t,a,s,f;const{uid:e,isActive:o}=u.storyBoard;if(V()&&(a=(t=P.current)==null?void 0:t.editor)!=null&&a.getContent()){const x=Uo({storyBoardData:(f=(s=P.current)==null?void 0:s.editor)==null?void 0:f.getContent(),uid:e,isActive:o},l);if(e)try{const y=await N.updateStoryBoardRecommendation(x,G.DDE);$(y)&&(A(C.SAVED),I(w.PRIMARY),T(!R),W(),_())}catch(y){console.log(y),E(b(y))}else try{const y=await N.createStoryBoardRecommendation(x);Eo(y)&&(A(C.SAVED),I(w.PRIMARY),T(!R),W(),_())}catch(y){console.log(y),E(b(y))}}},ao=async e=>{var t,a,s,f,x,y;const o=(a=(t=D==null?void 0:D.current)==null?void 0:t[e])==null?void 0:a.save();if(o){const v=Mo(o,l);if(o.uid)try{const L=await N.updateStoryBoardRecommendation(v,G.DDE);$(L)&&(A(C.SAVED),I(w.PRIMARY),T(!R),(f=(s=D==null?void 0:D.current)==null?void 0:s[e])==null||f.onSaveSuccess(),c())}catch(L){console.log(L),E(b(L))}else try{const L=await N.createStoryBoardRecommendation(v);Eo(L)&&(A(C.SAVED),I(w.PRIMARY),T(!R),(y=(x=D==null?void 0:D.current)==null?void 0:x[e])==null||y.onSaveSuccess(),c())}catch(L){console.log(L),E(b(L))}}},so=async e=>{var t,a,s,f;const o=(a=(t=D==null?void 0:D.current)==null?void 0:t[e])==null?void 0:a.remove();if(o){const x=Mo(o,l);if(o.uid)try{const y=await N.updateStoryBoardRecommendation(x,G.DDE);$(y)&&(A(C.REMOVED),I(w.PRIMARY),T(!R),(f=(s=D==null?void 0:D.current)==null?void 0:s[e])==null||f.onSaveSuccess(),c())}catch(y){E(b(y))}else{const y=u.salesRecommendation.salesRecommendationList.filter((v,L)=>L!==e);d(v=>({...v,salesRecommendation:{...v.salesRecommendation,salesRecommendationList:[...y]}}))}}},no=()=>{const e=[];e.push(c),e.forEach(o=>o())},ro=()=>{const e={...Ao,listKey:Math.random().toString(36).substring(2)};d(o=>({...o,otherDocInfo:{...o.otherDocInfo,otherDocInfoList:[...o.otherDocInfo.otherDocInfoList,e]}}))},io=e=>{d(o=>{const t=u.otherDocInfo.otherDocInfoList.filter((a,s)=>s!==e);return{...o,otherDocInfo:{...o.otherDocInfo,otherDocInfoList:[...t]}}})},co=async()=>{var o;const e=(o=q.current)==null?void 0:o.save();if(e)try{const t=await fo.saveDocument(Lo.LOGIN,G.DDE,e);$(t)&&(d(a=>({...a,otherDocInfo:{...a.otherDocInfo,isOtherDocInfoLoading:!0,sectionMode:S.VIEW}})),Y(),I(w.PRIMARY),A(C.SAVED),T(!R))}catch(t){console.log(t),E(b(t))}},r=()=>{Y(),d(e=>({...e,otherDocInfo:{...e.otherDocInfo,sectionMode:S.VIEW}}))},h=async(e,o)=>{if(e.uid){const t={...e};t.isActive=!1;const a=Fo([t],{loanUid:l,applicantUid:g,loanSectionKey:xo.documents});try{const s=await fo.saveDocument(Lo.LOGIN,G.DDE,a);$(s)&&(d(f=>({...f,otherDocInfo:{...f.otherDocInfo,isOtherDocInfoLoading:!0}})),Y(),I(w.QUATERNARY),A(C.REMOVED),T(!R))}catch(s){console.log(s),E(b(s))}}o!==void 0&&io(o)},m=()=>{const{isStoryBoardLoading:e,storyBoardMode:o,storyBoardData:t,storyBoardValidation:a}=u.storyBoard;return e?n.jsx(Do,{height:"19.375rem",width:"100%",borderRadius:"8px",animation:"wave"}):n.jsx(yo,{disabledMenu:!0,className:"",title:"label.dde.documents.storyBoard*",pageMode:o,onCancel:W,onEdit:oo,onSave:to,children:n.jsx(Go,{ref:P,disabled:o===S.VIEW,validation:a,initialValue:t,onChange:Z})})},B=()=>{const{isSalesRecommendationLoading:e,salesRecommendationList:o}=u.salesRecommendation;return n.jsx("div",{className:"flex flex-col gap-4",children:o==null?void 0:o.map((t,a)=>n.jsx(Qo,{isLoading:e,loanId:l,data:t,cardNumber:a+1,ref:s=>{D.current[a]=s},onSaveRecommendationDetails:()=>ao(a),onRemoveSalesRecommendation:()=>so(a)},t==null?void 0:t.uid))})},K=()=>n.jsx(mo.Fragment,{children:n.jsx(Wo,{ref:q,isLoading:u.otherDocInfo.isOtherDocInfoLoading,otherDocumentsData:u.otherDocInfo.otherDocInfoList,sectionMode:u.otherDocInfo.sectionMode,payloadInfo:{loanUid:l,applicantUid:g,loanSectionKey:xo.documents},onRemoveDocFromList:h})});return n.jsxs(mo.Fragment,{children:[n.jsxs("div",{className:"flex flex-col gap-5",children:[n.jsx(ho,{title:"heading.dde.documents",alertText:"Sales story board should be of min 200 characters",children:m()}),n.jsx(ho,{title:"heading.dde.salesRecommendation",children:n.jsxs(To,{onLazyLoad:()=>no(),children:[B(),n.jsx("div",{className:"p-5 w-full rounded-xl bg-slate-100 mt-5",children:n.jsx(Bo,{buttonType:Io.ICON_TEXT_ROW,customLabel:"label.dde.add.another.sales.recommendation",onClick:eo})})]})}),n.jsx(ho,{title:"label.heading.otherDocuments",children:g?n.jsx(To,{children:n.jsxs(mo.Fragment,{children:[n.jsx(yo,{title:"",pageMode:u.otherDocInfo.sectionMode,onSave:co,onCancel:r,onEdit:()=>d(e=>({...e,otherDocInfo:{...e.otherDocInfo,sectionMode:S.CREATE}})),children:K()}),n.jsx("div",{className:"p-5 w-full rounded-xl bg-slate-100 mt-5",children:n.jsx(Bo,{buttonType:Io.ICON_TEXT_ROW,customLabel:"Add Another Document",onClick:ro})})]})}):n.jsx(Do,{height:"19.375rem",width:"100%",borderRadius:"8px",animation:"wave"})})]}),n.jsx($o,{position:U,ref:j,toastText:F,variant:O})]})};export{We as default};
//# sourceMappingURL=PageDocuments-59336a36.js.map
