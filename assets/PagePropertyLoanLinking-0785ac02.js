import{q as fs,r as d,aG as T,ad as he,ae as be,af as oe,dg as M,v as Se,ao as A,aF as b,j as s,K as ys,R as hs,T as a,J as ge,o as bs,d7 as J,aH as Q,fs as je,ft as g,fl as os}from"./index-e8217573.js";import{l as Ss}from"./Loading-783a01c7.js";import{B as Ne}from"./ButtonBox-9e46519a.js";import{D as gs}from"./Dialog-adadaf64.js";import{C as u,E as js}from"./EditableTableV2-6afcb42b.js";import{E as Ns}from"./ErrorDialog-d5eef4d7.js";import{I as Ls,B as Ps}from"./IconButton-36693dd9.js";import{I as Ts}from"./InputBox-b9e88f52.js";import{R as As}from"./RadioButton-86c37166.js";import{R as Le}from"./ReadOnlyTable-86accb69.js";import{R as Es}from"./RichTextEditor-a03bd2fb.js";import{S as Pe}from"./SaveComponent-160c5b32.js";import{S as ks}from"./Section-00ef9f2b.js";import{S as Is}from"./SimpleDropDown-061a3470.js";import{S as Rs}from"./SimpleTab-27fa8860.js";import{S as _s}from"./Skeleton-7e12d019.js";import{T as Cs}from"./Toast-ae99ea5b.js";import{a as Us}from"./CustomHooks-0ce50620.js";import{D as N}from"./DedupeService-b4b7e998.js";import"./kebab-menu-8835ad2e.js";import"./datatable.esm-f474a654.js";import"./paginator.esm-11c2c115.js";import"./virtualscroller.esm-9939945c.js";import"./sortIcon-54357a29.js";import"./Download_Icon-51fc7f46.js";import"./eye_icon-081bddb3.js";import"./withAuth-6de36ebf.js";import"./No_data-1720c54e.js";import"./index-8739acfd.js";import"./link-0172a3d4.js";import"./loader-5f2cfb31.js";import"./FileUploadMenuBox-f47dc693.js";import"./MenuBox-defc36b0.js";import"./TransitionGroup-c8afe0ce.js";const vs={uid:"",lanId:"",stage:"",applicantUid:"",applicantFirstname:"",applicantMiddlename:"",applicantLastname:"",applicantType:"",addressType:"",propertyType:"",address:"",city:"",pincode:"",state:"",latitude:"",longitude:""},Ms={loanUid:"",stageUid:"",linkProperty:{linkPropertyPageMode:b.VIEW,addressInLoan:[]},finalStatus:{uid:"",isFinalStatusLoading:!1,status:"",statusEditorData:"",finalStatusPageMode:b.VIEW}},Fs={search:""},v={[`${M.COLLATERAL_PROPERTY}`]:"Collateral Property",[`${M.PERMANENT}`]:"Permanent",[`${M.RESIDENTIAL}`]:"Residential"},ot=()=>{const f=fs(),[Te,Ae]=d.useState(!0),[h,y]=d.useState(Ms),[Ee,ke]=d.useState([]),[S,X]=d.useState(vs),[F,Ie]=d.useState(0),[z,Re]=d.useState([]),[_e,B]=d.useState(!1),[Z,O]=d.useState(Fs),[r,Y]=d.useState({selectedRowData:{},selectionObj:{}}),[E,$]=d.useState(""),[Ce,D]=d.useState(),[Ue,Bs]=d.useState("bottom-right"),[V,k]=d.useState(""),[w,I]=d.useState(T.PRIMARY),[P,R]=d.useState(!1),[K,L]=d.useState(""),[ve,ee]=d.useState(!1),j=d.useRef(null),Me=d.useRef(null),Fe=d.useRef(null),m=d.useRef(null),_=d.useRef(null),se=d.useRef(null),p=Us(),[,C]=d.useState(!1),x=d.useRef(new he({validators:{...be()},...oe(),autoForceUpdate:{forceUpdate:()=>C(e=>!e)}}));d.useEffect(()=>{f!=null&&f.loanUid&&(f!=null&&f.stageUid)&&y(e=>({...e,loanUid:f.loanUid??"",stageUid:f.stageUid??""}))},[f==null?void 0:f.stageUid,f==null?void 0:f.loanUid]),d.useEffect(()=>{De()},[]),d.useEffect(()=>{h.loanUid&&Be()},[h.loanUid]),d.useEffect(()=>{S.uid&&te()},[S.uid]),d.useEffect(()=>{let e;return E&&(e=setTimeout(()=>{var t;(t=_==null?void 0:_.current)==null||t.search(),D(!1)},1e3)),()=>{clearTimeout(e)}},[E]),d.useEffect(()=>{K&&ee(!0)},[K]),d.useEffect(()=>{var e;j!=null&&j.current&&V!==""&&((e=j==null?void 0:j.current)==null||e.showFunction())},[V,w,P]);const Be=async()=>{var t,i;const e=`loan.uid=${h.loanUid}&primaryAddressType=${M.COLLATERAL_PROPERTY}&isActive=${!0}`;try{const n=await N.getAddress(e);if(Se(n)){const c=(i=(t=n==null?void 0:n.data)==null?void 0:t.results)==null?void 0:i.map(l=>{var U,ae,ce,pe,ue,re,xe,me,fe,ye;return{uid:(l==null?void 0:l.uid)??"",lanId:((U=l==null?void 0:l.loan)==null?void 0:U.lanId)??"",applicantUid:((ae=l==null?void 0:l.applicant)==null?void 0:ae.uid)??"",applicantFirstname:((ce=l==null?void 0:l.applicant)==null?void 0:ce.firstName)??"",applicantMiddlename:((pe=l==null?void 0:l.applicant)==null?void 0:pe.middleName)??"",applicantLastname:((ue=l==null?void 0:l.applicant)==null?void 0:ue.lastName)??"",applicantType:((re=l==null?void 0:l.applicant)==null?void 0:re.applicantType)??"",addressType:(l==null?void 0:l.primaryAddressType)??"",propertyType:(l==null?void 0:l.propertyType)??"",address:(l==null?void 0:l.address)??"",city:((xe=l==null?void 0:l.city)==null?void 0:xe.name)??"",pincode:((me=l==null?void 0:l.pincode)==null?void 0:me.pinCode)??"",state:((ye=(fe=l==null?void 0:l.city)==null?void 0:fe.state)==null?void 0:ye.name)??"",latitude:`${(l==null?void 0:l.latitude)??0}`,longitude:`${(l==null?void 0:l.longitude)??0}`}}),o=c.map((l,U)=>({tabName:`${v[l.addressType]??""} ${U+1}`,key:l.uid}));y(l=>({...l,linkProperty:{...l.linkProperty,addressInLoan:c}})),Re(o),ke(c),X(c[F]),Ae(!1)}}catch(n){console.log(n),L(A(n))}},te=async()=>{var t,i;const e=`linkedAddressUid=${S.uid}&linkedLanId=${S.lanId}&type=Status&isLinkage=${!0}`;y(n=>({...n,finalStatus:{...n.finalStatus,isFinalStatusLoading:!0}}));try{const n=await N.getPropertyLinkageStatus(e);if(Se(n)){const c=(i=(t=n.data)==null?void 0:t.results)==null?void 0:i[0];y(c?o=>({...o,finalStatus:{...o.finalStatus,isFinalStatusLoading:!1,uid:(c==null?void 0:c.uid)??"",status:(c==null?void 0:c.action)??"",statusEditorData:(c==null?void 0:c.remark)??""}}):o=>({...o,finalStatus:{...o.finalStatus,uid:null,isFinalStatusLoading:!1,status:"",statusEditorData:"",finalStatusPageMode:b.VIEW}}))}}catch(n){console.log(n),y(c=>({...c,finalStatus:{...c.finalStatus,isFinalStatusLoading:!1}})),L(A(n))}},Oe=e=>{var t,i;(i=x==null?void 0:x.current)==null||i.showMessageFor((t=e==null?void 0:e.target)==null?void 0:t.name)},Ye=()=>{var t,i;let e=!1;return e=(t=x==null?void 0:x.current)==null?void 0:t.allValid(),e||(C(n=>!n),(i=x==null?void 0:x.current)==null||i.showMessages(),C(n=>!n),!1)},le=()=>{var e;x.current=new he({validators:{...be()},...oe(),autoForceUpdate:{forceUpdate:()=>C(t=>!t)}}),(e=x==null?void 0:x.current)==null||e.hideMessages()},$e=e=>{Ie(e.index);const t=Ee.filter(i=>i.uid===z[e.index].key);X(t[0])},Ve=e=>{D(!0),O({search:e.target.value}),$(e.target.value)},Ke=(e,t)=>{Y({selectedRowData:{...t},selectionObj:{[e.target.name]:e.checked}})},We=e=>{y(t=>({...t,finalStatus:{...t.finalStatus,status:e.target.value}}))},Ge=async()=>{var t,i;const e=we();try{if((t=e==null?void 0:e.address)!=null&&t.uid&&(e!=null&&e.lanId)||e!=null&&e.blackList){const n=await N.updateDedupe(e);J(n)&&(I(T.PRIMARY),k(Q.SAVED),R(!P),B(!1),$(""),O({search:""}),Y({selectedRowData:{},selectionObj:{}}),(i=m==null?void 0:m.current)==null||i.search())}else I(T.QUATERNARY),k("Failed to link"),R(!P)}catch(n){console.log(n),L(A(n))}},He=()=>{B(!1),$(""),O({search:""}),Y({selectedRowData:{},selectionObj:{}}),le()},qe=async()=>{var t;const e=es();try{const i=await N.updateDedupeMultiple(e);J(i)&&(I(T.PRIMARY),k(Q.SAVED),R(!P),(t=m.current)==null||t.search(),y(n=>({...n,linkProperty:{...n.linkProperty,linkPropertyPageMode:b.VIEW}})))}catch(i){console.log(i),L(A(i))}},Je=()=>{y(e=>({...e,linkProperty:{...e.linkProperty,linkPropertyPageMode:b.EDIT}}))},Qe=()=>{y(e=>({...e,linkProperty:{...e.linkProperty,linkPropertyPageMode:b.VIEW}}))},Xe=async()=>{if(!Ye())return;const e=ss();try{const t=await N.updateDedupeFinalStatus(e);J(t)&&(I(T.PRIMARY),k(Q.SAVED),R(!P),y(i=>({...i,finalStatus:{...i.finalStatus,finalStatusPageMode:b.VIEW}})))}catch(t){console.log(t),L(A(t))}},ze=()=>{y(e=>({...e,finalStatus:{...e.finalStatus,finalStatusPageMode:b.EDIT}}))},Ze=()=>{te(),y(e=>({...e,finalStatus:{...e.finalStatus,finalStatusPageMode:b.VIEW}})),le()},De=()=>{var e;(e=m.current)==null||e.search()},we=()=>{var t,i,n,c,o;const e={isLinkage:!0,linkType:je.USER,linkedLanId:S.lanId,linkedAddressUid:S.uid,lanId:(t=r==null?void 0:r.selectedRowData)==null?void 0:t.lanId,type:"Address"};return((i=r==null?void 0:r.selectedRowData)==null?void 0:i.matchingList)===g.BLACKLIST?{...e,blackList:{uid:((n=r==null?void 0:r.selectedRowData)==null?void 0:n.uid)??null},matchingList:g.BLACKLIST}:((c=r==null?void 0:r.selectedRowData)==null?void 0:c.matchingList)===g.SAHAYYA_LIST?{...e,address:{uid:(o=r==null?void 0:r.selectedRowData)==null?void 0:o.addressUid}}:e},es=()=>{var i,n;const e=[...((i=m==null?void 0:m.current)==null?void 0:i.getUpdatedRecords())??[],...((n=m==null?void 0:m.current)==null?void 0:n.getDeletedRecords())??[]];return e==null?void 0:e.map(c=>({uid:(c==null?void 0:c.uid)??null,isActive:!1}))},ss=()=>{var t,i;return{uid:h.finalStatus.uid?h.finalStatus.uid:null,isLinkage:!0,linkedLanId:S.lanId,linkedAddressUid:S.uid,action:h.finalStatus.status,remark:(i=(t=se.current)==null?void 0:t.editor)==null?void 0:i.getContent(),type:"Status"}},ts=e=>s.jsx(d.Fragment,{children:je.USER===(e==null?void 0:e.link_type)?s.jsx(Ls,{buttonType:Ps.DELETE,onClick:()=>{var t;(t=m==null?void 0:m.current)==null||t.deleteRow(e)},disabled:h.linkProperty.linkPropertyPageMode===b.VIEW}):s.jsx(s.Fragment,{})}),ls=e=>{if(e!=null&&e.uid)return s.jsx(a,{className:"",label:(e==null?void 0:e.link_type)??"-"})},ne=e=>e!=null&&e.uid?s.jsx(a,{className:"",label:(e==null?void 0:e.lan_id)??"-"}):s.jsx(a,{className:"",label:(e==null?void 0:e.lanId)??"-"}),ns=e=>{if(e!=null&&e.uid)return s.jsx(a,{className:"",label:(e==null?void 0:e.loan_status)??"-"})},is=e=>{var t;return e!=null&&e.linkedAddressUid?s.jsx(a,{className:"",label:v[`${(t=e==null?void 0:e.address)==null?void 0:t.primaryAddressType}`]??"-"}):e!=null&&e.uid?s.jsx(a,{className:"",label:v[`${e==null?void 0:e.primary_address_type}`]??"-"}):s.jsx(a,{className:"",label:v[`${e==null?void 0:e.addressType}`]??"-"})},ie=e=>{if(e!=null&&e.uid)return s.jsx(a,{className:"",label:(e==null?void 0:e.property_id)??"-"})},W=e=>{var t;return e!=null&&e.linkedAddressUid?s.jsx(a,{className:"",label:((t=e==null?void 0:e.address)==null?void 0:t.address)??"-"}):e!=null&&e.uid&&(e!=null&&e.linked_address_uid)&&(e==null?void 0:e.matching_list)===g.SAHAYYA_LIST?s.jsx(a,{className:"",label:(e==null?void 0:e.address_detail)??"-"}):(e==null?void 0:e.matching_list)===g.BLACKLIST?s.jsx(a,{className:"",label:(e==null?void 0:e.bl_address)??"-"}):s.jsx(a,{className:"",label:(e==null?void 0:e.address)??"-"})},G=e=>{var t,i;return e!=null&&e.linkedAddressUid?s.jsx(a,{className:"",label:((i=(t=e==null?void 0:e.address)==null?void 0:t.city)==null?void 0:i.name)??"-"}):(e==null?void 0:e.matching_list)===g.BLACKLIST?s.jsx(a,{className:"",label:(e==null?void 0:e.bl_city)??"-"}):e!=null&&e.uid?s.jsx(a,{className:"",label:(e==null?void 0:e.city)??"-"}):s.jsx(a,{className:"",label:(e==null?void 0:e.city)??"-"})},H=e=>{var t,i,n;return e!=null&&e.linkedAddressUid?s.jsx(a,{className:"",label:((n=(i=(t=e==null?void 0:e.address)==null?void 0:t.city)==null?void 0:i.state)==null?void 0:n.name)??"-"}):(e==null?void 0:e.matching_list)===g.BLACKLIST?s.jsx(a,{className:"",label:(e==null?void 0:e.bl_state)??"-"}):e!=null&&e.uid?s.jsx(a,{className:"",label:(e==null?void 0:e.state)??"-"}):s.jsx(a,{className:"",label:(e==null?void 0:e.state)??"-"})},q=e=>{var t,i;if(e!=null&&e.linkedAddressUid)return s.jsx(a,{className:"",label:((i=(t=e==null?void 0:e.address)==null?void 0:t.pincode)==null?void 0:i.pinCode)??"-"});if((e==null?void 0:e.matching_list)===g.BLACKLIST){let n=e==null?void 0:e.bl_pincode;return n=n==null?void 0:n.split(" "),n=n==null?void 0:n.join(""),s.jsx(a,{className:"",label:n??"-"})}else return e!=null&&e.uid?s.jsx(a,{className:"",label:(e==null?void 0:e.pincode)??"-"}):s.jsx(a,{className:"",label:(e==null?void 0:e.pincode)??"-"})},ds=()=>s.jsxs(Le,{value:[h.linkProperty.addressInLoan[F]],className:"selected-existing-doc-read-table !min-h-auto",ref:Fe,dataKey:"uid",children:[s.jsx(u,{className:"text-primary-ptext-1000 text-left text-xs py-3 pl-6",header:p("label.section.addressDetails.address"),body:W}),s.jsx(u,{className:"text-primary-ptext-1000 text-left text-xs py-3 pl-6",header:p("label.section.addressDetails.city"),body:G}),s.jsx(u,{className:"text-primary-ptext-1000 text-left text-xs py-3 pl-6",header:p("label.section.addressDetails.state"),body:H}),s.jsx(u,{className:"text-primary-ptext-1000 text-left text-xs py-3 pl-6",header:p("label.section.addressDetails.pincode"),body:q})]}),as=()=>s.jsxs("div",{className:"flex flex-col justify-center items-start space-y-6",children:[s.jsx("div",{className:"w-full flex justify-between items-center pr-2",children:s.jsx(a,{className:"text-primary-ptext-1000 text-xs",label:"label.dedupe.details"})}),s.jsx("div",{className:"w-full",children:s.jsxs(js,{ref:m,standardDataFormatPromise:N.getLinkedAddress,search:`&linkedaddressuid=${S.uid}`,paginator:!0,uniqueKey:"uid",mode:"UPDATE",children:[s.jsx(u,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:p("label.section.linkProperty.linkType"),body:ls}),s.jsx(u,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:p("label.section.linkProperty.loanApplicationNo"),body:ne}),s.jsx(u,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:p("label.section.linkProperty.fileStatus"),body:ns}),s.jsx(u,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:p("label.section.linkProperty.addressType"),body:is}),s.jsx(u,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:p("label.section.linkProperty.propertyID"),body:ie}),s.jsx(u,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:p("label.section.linkProperty.address"),body:W}),s.jsx(u,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:p("label.section.linkProperty.city"),body:G}),s.jsx(u,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:p("label.section.linkProperty.state"),body:H}),s.jsx(u,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:p("label.section.linkProperty.pincode"),body:q}),s.jsx(u,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:p("label.section.linkProperty.matchingList"),body:de}),s.jsx(u,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:p("label.dedupe.action"),body:ts})]})})]}),cs=()=>{var c;const{isFinalStatusLoading:e,finalStatusPageMode:t,status:i,statusEditorData:n}=h.finalStatus;return e?s.jsx(_s,{height:"19rem",width:"100%",borderRadius:"8px",animation:"wave"}):s.jsxs("div",{className:"flex flex-col justify-center items-start w-full gap-y-3 mt-3",children:[s.jsx("div",{className:"w-62.5",children:s.jsx(Is,{label:"label.section.finalStatus.status*",name:"status",options:[...os],optionLabel:"label",optionValue:"value",value:i,onChange:We,onBlur:Oe,validation:(c=x==null?void 0:x.current)==null?void 0:c.message("status",i,"mandatory"),disabled:h.finalStatus.finalStatusPageMode===b.VIEW})}),s.jsx(Es,{ref:se,initialValue:n,disabled:t===b.VIEW})]})},ps=e=>{var t;return s.jsx(As,{name:`${e!=null&&e.addressUid?e==null?void 0:e.addressUid:e==null?void 0:e.uid}`,checked:(t=r==null?void 0:r.selectionObj)==null?void 0:t[(e==null?void 0:e.addressUid)||(e==null?void 0:e.uid)],onChange:i=>Ke(i,e),hideLabel:!0,hideErrorRow:!0})},de=e=>e!=null&&e.uid&&(e!=null&&e.linked_address_uid)?s.jsx(a,{className:"",label:(e==null?void 0:e.matching_list)??"-"}):s.jsx(a,{className:"",label:(e==null?void 0:e.matchingList)??"-"}),us=e=>s.jsx(a,{className:"",label:(e==null?void 0:e.branch)??"-"}),rs=e=>{if(e!=null&&e.firstName||e!=null&&e.lastName)return s.jsx(a,{className:"",label:`${(e==null?void 0:e.firstName)??""} ${(e==null?void 0:e.middleName)??""} ${(e==null?void 0:e.lastName)??""}`})},xs=()=>s.jsx(gs,{className:"!w-3/5 !py-4 px-8",visible:_e,closable:!1,children:s.jsxs("div",{className:"flex flex-col justify-start gap-3",children:[s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx(a,{className:"text-base font-bold text-primary-primaryTextColor",label:"label.search.searchProperty"}),s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx(Ne,{buttonType:ge.CANCEL_OUTLINE,onClick:He}),s.jsx(Ne,{buttonType:ge.SAVE_OUTLINE,className:"create-button mr-1",onClickWithLoader:Ge})]})]}),s.jsx("hr",{}),s.jsxs("div",{className:"w-full relative",children:[s.jsx(Ts,{name:"lanAddPropertySearch",className:"!h-6",variant:bs.SECONDARY,placeholder:"Search LAN, Address or Property ID",value:E,onChange:Ve,autoComplete:"off"}),Ce&&E&&s.jsx("div",{className:"w-4 h-4 absolute top-0 bottom-0 right-0 my-auto mx-2",children:s.jsx("img",{className:"animate-spin",src:Ss,alt:"loader"})})]}),s.jsx("div",{className:"w-full",children:s.jsxs(Le,{ref:_,standardDataFormatPromise:N.getSuggestionsForPropertyLinkSearch,search:Z.search?Z.search:"null",className:"!min-h-auto",dataKey:"uid",children:[s.jsx(u,{className:"text-primary-ptext-1000 text-xs p-1 h-12 px-3 flex justify-center items-center",header:p("label.search.selectOnlyOne"),body:ps}),s.jsx(u,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:p("label.search.matchingList"),body:de}),s.jsx(u,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:p("label.search.loanApplicationNo"),body:ne}),s.jsx(u,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:p("label.search.branch"),body:us}),s.jsx(u,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:p("label.search.applicantName"),body:rs}),s.jsx(u,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:p("label.search.propertyID"),body:ie}),s.jsx(u,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:p("label.search.address"),body:W}),s.jsx(u,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:p("label.search.city"),body:G}),s.jsx(u,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:p("label.search.state"),body:H}),s.jsx(u,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:p("label.search.pincode"),body:q})]})})]})}),ms=e=>s.jsx("div",{className:"mt-4",children:s.jsx(ks,{children:s.jsxs("div",{className:"flex flex-col gap-4",children:[s.jsxs("div",{className:"border border-primary-ptext-500  rounded-xl p-5 flex flex-col gap-3",children:[s.jsx("div",{className:" flex items-center justify-between",children:s.jsx(a,{className:"text-primary-sideBarBgColor text-sm font-bold mb-1",label:"label.section.addressDetails"})}),ds()]}),s.jsx(Pe,{pageMode:h.linkProperty.linkPropertyPageMode,title:"heading.section.linkProperty",onCancel:Qe,onEdit:Je,onSave:qe,onLink:()=>{B(!0)},children:as()}),s.jsx(Pe,{pageMode:h.finalStatus.finalStatusPageMode,title:"heading.section.finalStatus",onCancel:Ze,onEdit:ze,onSave:Xe,children:cs()})]})})},e==null?void 0:e.key);return Te?s.jsx(ys,{}):s.jsxs(hs.Fragment,{children:[s.jsx(Rs,{className:"simple-tab-custom",showTooltip:!0,scrollable:!0,optionLabel:["tabName"],optionKey:["key"],headerClassName:"",ref:Me,activeIndex:F,tabs:z,onTabChange:$e,renderContent:ms}),xs(),s.jsx(Cs,{position:Ue,ref:j,toastText:V,variant:w}),s.jsx(Ns,{onHide:()=>{ee(!1),L("")},visible:ve,errorMessage:K})]})};export{ot as default};
//# sourceMappingURL=PagePropertyLoanLinking-0785ac02.js.map
