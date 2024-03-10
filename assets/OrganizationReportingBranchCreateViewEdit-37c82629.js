import{w as Za,r as i,aF as l,aG as j,ad as de,ae as ue,af as me,y as Ze,v as _,f as Va,j as n,ax as Ve,T as x,J as I,o as h,cP as E,cQ as pe,b5 as ea,aH as ae,ao as K,av as H,aI as aa,aJ as ta,aK as J}from"./index-e8217573.js";import{B as D}from"./ButtonBox-9e46519a.js";import{I as te}from"./InputBox-b9e88f52.js";import{I as he}from"./InputTextArea-b90aad1d.js";import{R as ne}from"./RadioButton-86c37166.js";import{S as et}from"./SimpleDropDown-061a3470.js";import{T as at}from"./Toast-ae99ea5b.js";import{D as se}from"./DatePicker-b1c13861.js";import{C as oe}from"./column.esm-938bad7d.js";import{A as G}from"./AutoComplete-0bca608a.js";import{P as tt}from"./Pincode-a7c9b067.js";import{E as nt}from"./ErrorDialog-d5eef4d7.js";import{O as P}from"./Branch-732bec0f.js";import{O as st}from"./Level-2217a8ad.js";import{C as na}from"./City-7102c574.js";import{E as ot}from"./EditableTableV2-6afcb42b.js";import{S as rt}from"./StaticMasterDataService-689a6eca.js";import{S as it}from"./SystemDate-aca727a8.js";import{S as lt}from"./StaticMasterTypeService-480bff1a.js";import{M as ct}from"./MenuBox-defc36b0.js";import"./kebab-menu-8835ad2e.js";import"./withAuth-6de36ebf.js";import"./virtualscroller.esm-9939945c.js";import"./TransitionGroup-c8afe0ce.js";import"./search_icon-459d6871.js";import"./Dialog-adadaf64.js";import"./datatable.esm-f474a654.js";import"./paginator.esm-11c2c115.js";const dt=Y=>{var _e,Ye,Me,we,ke,Ue,ze,$e,We,qe,Ke;const[t,C]=i.useState({name:"",systemCode:"",branch:"",parentBranch:"",org_reporting_level:"",dateOfBranchOpening:"",dateOfBranchClosing:"",address:"",pincode:"",city:"",state:"",latitude:"",longitude:"",description:"",reasons:"",isActive:""}),[sa,oa]=i.useState({name:"",systemCode:"",branch:"",parentBranch:"",org_reporting_level:"",dateOfBranchOpening:"",dateOfBranchClosing:"",address:"",pincode:"",city:"",state:"",latitude:"",longitude:"",description:"",reasons:"",isActive:""}),ge={applicableFrom:"",applicableTo:"",productType:{uid:""}},[fe,ve]=i.useState(!1),[xe,Ce]=i.useState(!1),[R,ye]=i.useState(""),[u,re]=i.useState(l.CREATE);i.useState(!1);const[ra,ie]=i.useState("bottom-right"),[M,y]=i.useState(!1),[le,O]=i.useState(""),[Te,L]=i.useState(j.PRIMARY),[ia,w]=i.useState(!1),[b,F]=i.useState(!1),[ce,A]=i.useState(""),[la,Ee]=i.useState(!1),[k,U]=i.useState([]),[ca,da]=i.useState(!0),B=i.useRef(null),c=i.useRef(null);i.useRef(!0);const[,S]=i.useState(void 0),o=i.useRef(new de({validators:{...ue()},...me(),autoForceUpdate:{forceUpdate:()=>S(e=>!e)}}));i.useEffect(()=>{var a;const e=Ze.parse(Y.location.search);e!=null&&e.mode&&(e==null?void 0:e.mode)!==void 0&&re(e.mode),ye(e.uid),ha(),xa(),ca&&e.mode=="CREATE"&&((a=c==null?void 0:c.current)==null||a.addRow(ge),da(!1))},[]),i.useEffect(()=>{var e;B!=null&&B.current&&le!==""&&((e=B==null?void 0:B.current)==null||e.showFunction())},[le,Te,b]),i.useEffect(()=>{ce&&Ee(!0)},[ce]),i.useEffect(()=>{const e=Ze.parse(Y.location.search);e!=null&&e.mode&&(e==null?void 0:e.mode)!==void 0&&re(e.mode),e!=null&&e.uid&&(e==null?void 0:e.uid)!==void 0&&(ye(e.uid),P.findById(e.uid).then(a=>{var s,r,m,d,p,v,g,f,z,$,W,q,He,Je,Ge,Qe,Xe;_(a)&&(console.log(a),(Object.keys(a.data).length>0||a.data.id)&&(C({name:a==null?void 0:a.data.name,systemCode:a==null?void 0:a.data.code,address:a==null?void 0:a.data.address,dateOfBranchOpening:a==null?void 0:a.data.dateOfOpening,dateOfBranchClosing:(a==null?void 0:a.data.dateOfClosing)??"",parentBranch:(s=a==null?void 0:a.data)==null?void 0:s.parent,org_reporting_level:((m=(r=a==null?void 0:a.data)==null?void 0:r.parent)==null?void 0:m.orgReportingLevel)??((d=a.data)==null?void 0:d.orgReportingLevel),pincode:(p=a==null?void 0:a.data)==null?void 0:p.pinCode,city:(v=a==null?void 0:a.data)==null?void 0:v.city,state:(g=a==null?void 0:a.data)==null?void 0:g.city.state,isActive:(f=a==null?void 0:a.data)!=null&&f.isActive?"ACTIVE":"IN_ACTIVE",latitude:parseInt(a==null?void 0:a.data.latitude),longitude:parseInt(a==null?void 0:a.data.longitude),reasons:a==null?void 0:a.data.reason,description:a==null?void 0:a.data.description}),Re((z=a.data)==null?void 0:z.type),oa({name:a.data.name,code:a.data.systemCode,address:a.data.address,dateOfOpening:a.data.dateOfBranchOpening,dateOfClosing:a.data.dateOfBranchClosing,type:a.data.branch,orgReportingLevel:{uid:(W=($=a.data)==null?void 0:$.orgReportingLevel)==null?void 0:W.uid},parent:{uid:(He=(q=a.data)==null?void 0:q.parentBranch)==null?void 0:He.uid},pinCode:{uid:(Ge=(Je=a.data)==null?void 0:Je.pincode)==null?void 0:Ge.uid},city:{uid:(Xe=(Qe=a.data)==null?void 0:Qe.city)==null?void 0:Xe.uid},latitude:parseInt(a.data.latitude),longitude:parseInt(a.data.longitude),reason:a.data.reason,description:a.data.description})))}).catch(a=>{}))},[]);const T=e=>{var a,s;(s=o==null?void 0:o.current)==null||s.showMessageFor((a=e==null?void 0:e.target)==null?void 0:a.name)},Ne=async()=>{var a,s;let e=!1;return e=((a=o==null?void 0:o.current)==null?void 0:a.allValid())&&!fe&&!xe,e||(ie("top-right"),L(j.QUATERNARY),O(ae.ERROR),F(!b),S(r=>!r),(s=o==null?void 0:o.current)==null||s.showMessages(),S(r=>!r),!1)},ua=()=>{var e;(e=c==null?void 0:c.current)==null||e.addRow(ge)},[ma,pa]=i.useState([]),ha=()=>{rt.getAll(0,200,"isActive=true&staticMasterType.code=PRODUCT_NAME").then(e=>{pa([...e.data.results])}).catch(e=>{console.log("err")})},ga=e=>{var a,s,r;return n.jsx(et,{name:`productType-${e.uid}`,value:(a=e.productType)==null?void 0:a.uid,variant:h.SECONDARY,onChange:m=>{var p;const d={...e};d.productType.uid=m.target.value,(p=c.current)==null||p.reportDataChange(d)},validation:(r=o==null?void 0:o.current)==null?void 0:r.message(`productType-${e.uid}`,(s=e.productType)==null?void 0:s.uid,"mandatory"),onBlur:T,options:ma,optionLabel:"name",optionValue:"uid"})},[fa,va]=i.useState(""),xa=async()=>{var e;try{const a=await it.getCurrentDate();va(Va((e=a.data)==null?void 0:e.date))}catch(a){console.log(a)}},Ca=e=>{var p;const a=new Date(e.applicableFrom),s=a.getFullYear(),r=a.getMonth(),m=a.getDate(),d=new Date(s,r,m);return n.jsx(se,{disabled:!e.temp&&u===l.EDIT,name:`applicableFrom${e.uid}`,value:e.applicableFrom!=""?d:"",variant:h.SECONDARY,onChange:v=>{var f;const g={...e};g.applicableFrom=v.target.value,(f=c.current)==null||f.reportDataChange(g)},onBlur:T,validation:new Date(e.expiryDate)<new Date(fa)?"Applicable from Date should not be less than System Date":(p=o==null?void 0:o.current)==null?void 0:p.message(`applicableFrom${e.uid}`,e.applicableFrom,"mandatory"),placeholder:"DD-MMM-YYYY"})},ya=e=>n.jsx(se,{name:`applicableTo${e.uid}`,value:e.applicableTo!=null?ea(e.applicableTo):"",variant:h.SECONDARY,onChange:a=>{var r;const s={...e};s.applicableTo=a.target.value??"",(r=c.current)==null||r.reportDataChange(s)},minDate:ea(e.applicableFrom),placeholder:"DD-MMM-YYYY"}),N=e=>{const{name:a,value:s}=e.target;C(r=>({...r,[a]:s}))},Q=e=>{const{name:a,value:s}=e.target;C(typeof s=="object"?r=>({...r,[a]:{name:`${s==null?void 0:s.name}`,uid:s.uid}}):r=>({...r,[a]:s})),a==="parentBranch"&&C(r=>({...r,org_reporting_level:s.orgReportingLevel})),a==="city"&&C(r=>({...r,state:s.state}))},Ta=e=>{const{name:a,value:s}=e.target;C(typeof s=="object"?r=>({...{...r,pincode:{pinCode:s==null?void 0:s.pinCode,uid:s==null?void 0:s.uid}}}):r=>({...{...r,[a]:{pinCode:s,uid:""}}}))},[Ea,ut]=i.useState(!1);i.useEffect(()=>{console.log("this is to check ")},[Ea]);const[X,Re]=i.useState(null),Z=e=>{var a;Re(e),e!=="SPOKE"?(o.current=new de({validators:{...ue()},...me(),autoForceUpdate:{forceUpdate:()=>S(s=>!s)}}),(a=o==null?void 0:o.current)==null||a.hideMessageFor("parentBranch"),C({...t,parentBranch:"",branch:e})):C({...t,branch:e})},Na=()=>{var d,p,v,g,f,z,$,W;const e={name:t==null?void 0:t.name,uid:R,code:t==null?void 0:t.systemCode,address:t==null?void 0:t.address,dateOfOpening:t==null?void 0:t.dateOfBranchOpening,dateOfClosing:(t==null?void 0:t.dateOfBranchClosing)??"",type:t==null?void 0:t.branch,orgReportingLevel:{uid:(d=t==null?void 0:t.org_reporting_level)==null?void 0:d.uid},parent:{uid:((p=t==null?void 0:t.parentBranch)==null?void 0:p.uid)??""},pinCode:{uid:(v=t==null?void 0:t.pincode)==null?void 0:v.uid},city:{uid:(g=t==null?void 0:t.city)==null?void 0:g.uid},latitude:parseInt(t.latitude),longitude:parseInt(t.longitude),reason:t.reasons,description:t.description,productMappings:[]};e.dateOfClosing===""&&(e.dateOfClosing=null),((f=e==null?void 0:e.parent)==null?void 0:f.uid)===""&&(e.parent=null);const a=[...((z=c.current)==null?void 0:z.getAddedRecords())??[],...(($=c.current)==null?void 0:$.getDeletedRecords())??[],...((W=c.current)==null?void 0:W.getUpdatedRecords())??[]];a.forEach(q=>{q.applicableTo===""&&(q.applicableTo=null)}),e.productMappings=a;let s;const r=e,m=sa;return u===l.CREATE?s={name:t.name,operationType:aa.CREATE,entity:ta.BRANCH,initialStateJson:"",finalStateJson:J(r),reqPayload:J(r),reasonForChange:t.reasons}:s={name:t.name,uid:R,operationType:aa.UPDATE,entity:ta.BRANCH,initialStateJson:J(m),finalStateJson:J(r),reqPayload:J(r),reasonForChange:t.reasons},s},Ra=()=>{var s,r,m,d,p,v,g,f;const e={name:t==null?void 0:t.name,code:t==null?void 0:t.systemCode,address:t==null?void 0:t.address,dateOfOpening:(t==null?void 0:t.dateOfBranchOpening)??"",dateOfClosing:(t==null?void 0:t.dateOfBranchClosing)??"",type:t==null?void 0:t.branch,orgReportingLevel:{uid:(s=t==null?void 0:t.org_reporting_level)==null?void 0:s.uid},parent:{uid:((r=t==null?void 0:t.parentBranch)==null?void 0:r.uid)??""},pinCode:{uid:(m=t==null?void 0:t.pincode)==null?void 0:m.uid},city:{uid:(d=t==null?void 0:t.city)==null?void 0:d.uid},latitude:parseInt(t==null?void 0:t.latitude),longitude:parseInt(t==null?void 0:t.longitude),reason:t==null?void 0:t.reasons,description:t==null?void 0:t.description,productMappings:[]},a=[...((p=c==null?void 0:c.current)==null?void 0:p.getAddedRecords())??[],...((v=c==null?void 0:c.current)==null?void 0:v.getDeletedRecords())??[],...((g=c==null?void 0:c.current)==null?void 0:g.getUpdatedRecords())??[]];return e.productMappings=a,((f=t==null?void 0:t.parentBranch)==null?void 0:f.uid)===void 0&&(e.parent=null),t.dateOfBranchClosing===""&&(e.dateOfClosing=null),e},ba=()=>{var s,r,m,d,p,v,g,f;const e={uid:R,name:t.name,code:t.systemCode,address:t.address,dateOfOpening:V(t.dateOfBranchOpening),dateOfClosing:V(t.dateOfBranchClosing),type:t.branch,orgReportingLevel:{uid:(s=t==null?void 0:t.org_reporting_level)==null?void 0:s.uid},parent:{uid:((r=t==null?void 0:t.parentBranch)==null?void 0:r.uid)??""},pinCode:{uid:(m=t==null?void 0:t.pincode)==null?void 0:m.uid},city:{uid:(d=t==null?void 0:t.city)==null?void 0:d.uid},latitude:parseInt(t.latitude),longitude:parseInt(t.longitude),reason:t.reasons,description:t.description,productMappings:[]},a=[...((p=c.current)==null?void 0:p.getAddedRecords())??[],...((v=c.current)==null?void 0:v.getDeletedRecords())??[],...((g=c.current)==null?void 0:g.getUpdatedRecords())??[]];return e.productMappings=a,((f=t==null?void 0:t.parentBranch)==null?void 0:f.uid)==null&&(e.parent=null),t.dateOfBranchClosing==""&&(e.dateOfClosing=null),e},Aa=async()=>{var a,s;A("");let e=!1;if(e=await Ne(),!e){ie("top-right"),L(j.QUATERNARY),O(ae.ERROR),F(!b);return}if((a=o==null?void 0:o.current)!=null&&a.allValid()){const r=Ra(),m=ba();return u===l.CREATE?P.create(r).then(d=>{L(j.PRIMARY),O("Saved Successfully"),F(!b),w(!0)}).catch(d=>{A(K(d)),w(!1)}):P.update(R,m).then(d=>{L(j.PRIMARY),O("Saved Successfully"),F(!b),w(!0)}).catch(d=>{A(K(d)),w(!1)})}else ie("top-right"),L(j.QUATERNARY),O(ae.ERROR),F(!b),S(r=>!r),(s=o==null?void 0:o.current)==null||s.showMessages(),S(r=>!r)},Ba=()=>{Y.navigate(pe)},Sa=async()=>{A("");let e=!1;if(e=await Ne(),!e)return;const a=Na();return lt.approve(a).then(s=>{L(j.PRIMARY),O(ae.SENT_FOR_APPROVAL),F(!b),w(!0)}).catch(s=>{A(K(s))})},ja=()=>{Y.navigate(pe)},Ia=()=>{re(l.EDIT)},Da=()=>{switch(u){case l.CREATE:return"heading.organizationLevelBranch.create";case l.VIEW:return"heading.organizationLevelBranch.view";case l.EDIT:return"heading.organizationLevelBranch.edit";default:return"heading.organizationLevelBranch.create"}},Pa=e=>{let a=`name=${e.target.value.toUpperCase()}&`;u===l.EDIT&&(a=`name=${e.target.value.toUpperCase()}&uid:nq=${R}`),P.getAll(0,10,`${a}`).then(s=>{s.status===200&&(s.data.results.length>0?ve(!0):ve(!1))}).catch(s=>{A(K(s))})},Oa=e=>{let a=`code=${e.target.value.toUpperCase()}&`;u===l.EDIT&&(a=`code=${e.target.value}&uid:nq=${R}`),P.getAll(0,10,`${a}`).then(s=>{s.status===200&&(s.data.results.length>0?Ce(!0):Ce(!1))}).catch(s=>{A(K(s))})},La=async e=>{let a=[];y(!0),await P.getAll(0,10,`name:lk=${e.query}&`).then(s=>{_(s)&&(a=[...s.data.results],y(!1))}),U(a)},Fa=async e=>{let a=[];y(!0),await na.getAll(0,10,`name:lk=${e.query}&`).then(s=>{_(s)&&(a=[...s.data.results],y(!1))}),U(a)},_a=async e=>{let a=[];y(!0),await na.getAll(0,10,`name:lk=${e.query}&`).then(s=>{_(s)&&(a=[...s.data.results],y(!1))}),U(a)},Ya=async e=>{let a=[];y(!0),await tt.getAll(0,10,`&pinCode:lk=${e.query}`).then(s=>{_(s)&&(a=[...s.data.results],y(!1))}),U(a)},Ma=async e=>{let a=[];y(!0),await st.getAll(0,10,`&isActive=true&name:lk=${e.query}`).then(s=>{_(s)&&(a=[...s.data.results],y(!1))}),U(a)},wa=e=>e.name===void 0?n.jsxs("div",{className:"flex flex-col items-center justify-center h-39",children:[n.jsx("img",{src:H,alt:"search-icon",className:" h-7 w-7"}),n.jsx(x,{className:"text-primary-labelColor mt-2",label:"Loading..."})]}):n.jsx("div",{className:"flex flex-col",children:n.jsx(x,{className:"text-primary-labelColor",label:e.name})}),ka=e=>e.name===void 0?n.jsxs("div",{className:"flex flex-col items-center justify-center h-39",children:[n.jsx("img",{src:H,alt:"search-icon",className:" h-7 w-7"}),n.jsx(x,{className:"text-primary-labelColor mt-2",label:"Loading..."})]}):n.jsx("div",{className:"flex flex-col",children:n.jsx(x,{className:"text-primary-labelColor",label:e.name})}),Ua=e=>e.name===void 0?n.jsxs("div",{className:"flex flex-col items-center justify-center h-39",children:[n.jsx("img",{src:H,alt:"search-icon",className:" h-7 w-7"}),n.jsx(x,{className:"text-primary-labelColor mt-2",label:"Loading..."})]}):n.jsx("div",{className:"flex flex-col",children:n.jsx(x,{className:"text-primary-labelColor",label:e.name})}),za=e=>e.pinCode===void 0?n.jsxs("div",{className:"flex flex-col items-center justify-center h-39",children:[n.jsx("img",{src:H,alt:"search-icon",className:" h-7 w-7"}),n.jsx(x,{className:"text-primary-labelColor mt-2",label:"Loading..."})]}):n.jsx("div",{className:"flex flex-col",children:n.jsx(x,{className:"text-primary-labelColor",label:e.pinCode})}),$a=e=>e.name===void 0?n.jsxs("div",{className:"flex flex-col items-center justify-center h-39",children:[n.jsx("img",{src:H,alt:"search-icon",className:" h-7 w-7"}),n.jsx(x,{className:"text-primary-labelColor mt-2",label:"Loading..."})]}):n.jsx("div",{className:"flex flex-col",children:n.jsx(x,{className:"text-primary-labelColor",label:e.name})}),V=e=>{const a=new Date(e),s=a.getFullYear(),r=a.getMonth(),m=a.getDate();return new Date(s,r,m)},[Wa,qa]=i.useState([{items:[{label:"Delete",className:""}]}]),ee=i.useRef(null),Ka=()=>{var e;o.current=new de({validators:{...ue()},...me(),autoForceUpdate:{forceUpdate:()=>S(a=>!a)}}),(e=o==null?void 0:o.current)==null||e.hideMessages()},Ha=(e,a,s)=>{var r;qa(m=>[{...m[0],items:[{...m[0].items[0],command:()=>{var d;(d=a==null?void 0:a.current)==null||d.deleteRow(e),Ka()}}]}]),(r=ee==null?void 0:ee.current)==null||r.toggle(s)},Ja=(e,a)=>n.jsx("div",{className:"w-20 flex items-center justify-center ml-2",children:n.jsx(D,{buttonType:I.MENU,onClick:s=>Ha(e,c,s),className:"!rounded-none bg-transparent !hover:bg-primary-gray-300"})}),{name:be,systemCode:Ae,branch:mt,parentBranch:Be,org_reporting_level:Se,dateOfBranchOpening:je,dateOfBranchClosing:Ga,address:Ie,pincode:De,city:Pe,state:Qa,description:Xa,reasons:Oe,isActive:pt,latitude:Le,longitude:Fe}=t;return n.jsxs(Ve,{children:[n.jsxs("div",{className:"flex flex-col gap-3 mt-1",children:[n.jsxs("div",{className:"flex w-full justify-between  items-center",children:[n.jsx("div",{className:" h-7.5",children:n.jsx(x,{label:Da(),className:"text-primary-ptext-1000 text-h2 font-Roboto font-bold flex"})}),n.jsx("div",{className:"flex mr-5",children:u===l.CREATE||u===l.EDIT?n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"flex",children:[n.jsx("div",{className:"mr-5",children:n.jsx(D,{className:"reset-red",buttonType:I.CANCEL_OUTLINE,onClick:Ba})}),n.jsx("div",{className:"mr-10",children:n.jsx(D,{buttonType:I.SAVE_OUTLINE,onClickWithLoader:Aa})})]}),n.jsx("div",{children:n.jsx(D,{className:"approve-primary",buttonType:I.SEND_FOR_APPROVAL,onClickWithLoader:Sa})})]}):n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"mr-5",children:n.jsx(D,{buttonType:I.BACK_OUTLINE,onClick:ja})}),n.jsx("div",{className:"",children:n.jsx(D,{buttonType:I.EDIT_OUTLINE,className:"blue-primary",onClick:Ia})})]})})]}),n.jsxs(Ve,{override:{read:[l.VIEW,l.REVIEW].includes(u)},children:[n.jsxs("div",{className:"grid  grid-cols-1 sm:grid-cols-4  gap-3",children:[n.jsx("div",{className:"col-span-1",children:n.jsx(te,{label:"input.organizationLevelBranch.Name",name:"name",variant:h.SECONDARY,onChange:N,value:be,onBlur:e=>{Pa(e),T(e)},validation:fe?"Duplicate Entry Found":(_e=o==null?void 0:o.current)==null?void 0:_e.message("name",be,"mandatory"),disabled:u===l.VIEW})}),n.jsx("div",{className:"col-span-1",children:n.jsx(te,{label:"input.organizationLevelBranch.systemCode",name:"systemCode",variant:h.SECONDARY,onChange:N,value:Ae,onBlur:e=>{Oa(e),T(e)},validation:xe?"Duplicate Entry Found":(Ye=o==null?void 0:o.current)==null?void 0:Ye.message("systemCode",Ae,"onlyAlphaNumUnderscoreUpperScore|mandatory"),disabled:u===l.VIEW})}),n.jsx("div",{}),n.jsx("div",{}),n.jsx("div",{className:"col-span-1",children:n.jsx(ne,{label:"input.organizationLevelBranch.spoke",name:"branch",checked:X===E.SPOKE,onChange:()=>Z(E.SPOKE),disabled:u===l.VIEW})}),n.jsx("div",{className:"col-span-1",children:n.jsx(ne,{label:"input.organizationLevelBranch.branch",name:"branch",checked:X===E.BRANCH,onChange:()=>Z(E.BRANCH),disabled:u===l.VIEW})}),n.jsx("div",{className:"col-span-1",children:n.jsx(ne,{label:"input.organizationLevelBranch.ro",name:"branch",checked:X===E.RO,onChange:()=>Z(E.RO),disabled:u===l.VIEW})}),n.jsx("div",{className:"col-span-1",children:n.jsx(ne,{label:"input.organizationLevelBranch.ho",name:"branch",checked:X===E.HO,onChange:()=>Z(E.HO),disabled:u===l.VIEW})}),n.jsx("div",{className:"col-span-1",children:n.jsx(G,{label:"input.organizationLevelBranch.parentBranch",name:"parentBranch",field:"name",value:Be,variant:h.PRIMARY,suggestions:k,completeMethod:La,onChange:Q,itemTemplate:wa,onBlur:T,validation:t.branch===E.SPOKE?(Me=o==null?void 0:o.current)==null?void 0:Me.message("parentBranch",Be,"mandatory"):!1,disabled:u===l.VIEW||t.branch!==E.SPOKE,loader:M})}),n.jsx("div",{className:"col-span-1",children:n.jsx(G,{label:"input.organizationLevelBranch.org_reporting_level",name:"org_reporting_level",field:"name",value:Se,variant:h.PRIMARY,suggestions:k,completeMethod:Ma,onChange:Q,itemTemplate:$a,onBlur:T,validation:(we=o==null?void 0:o.current)==null?void 0:we.message("org_reporting_level",Se,"mandatory"),disabled:u===l.VIEW,loader:M})}),n.jsx("div",{className:"col-span-1",children:n.jsx(se,{label:"input.organizationLevelBranch.date_of_branch_opening",name:"dateOfBranchOpening",placeholder:"DD-MMM-YYYY",onChange:N,value:V(je)??"",validation:(ke=o==null?void 0:o.current)==null?void 0:ke.message("dateOfBranchOpening",je,"mandatory"),onBlur:T})}),n.jsx("div",{className:"col-span-1",children:n.jsx(se,{label:"input.organizationLevelBranch.date_of_branch_closing",name:"dateOfBranchClosing",placeholder:"DD-MMM-YYYY",onChange:N,value:V(Ga)??""})}),n.jsx("div",{className:"col-span-1 sm:col-span-2",children:n.jsx(he,{label:"input.organizationLevelBranch.address",name:"address",variant:h.SECONDARY,maxCount:200,onChange:N,value:Ie,onBlur:T,validation:(Ue=o==null?void 0:o.current)==null?void 0:Ue.message("address",Ie,"mandatory")})}),n.jsx("div",{}),n.jsx("div",{}),n.jsx("div",{className:"col-span-1",children:n.jsx(G,{label:"input.organizationLevelBranch.pincode",name:"pincode",field:"pinCode",value:De,variant:h.PRIMARY,suggestions:k,completeMethod:Ya,onChange:Ta,itemTemplate:za,onBlur:T,validation:(ze=o==null?void 0:o.current)==null?void 0:ze.message("pincode",De,"mandatory"),disabled:u===l.VIEW,loader:M})}),n.jsx("div",{className:"col-span-1",children:n.jsx(G,{label:"input.organizationLevelBranch.city",name:"city",field:"name",value:Pe,variant:h.PRIMARY,suggestions:k,completeMethod:Fa,onChange:Q,itemTemplate:ka,onBlur:T,validation:($e=o==null?void 0:o.current)==null?void 0:$e.message("city",Pe,"mandatory"),disabled:u===l.VIEW,loader:M})}),n.jsx("div",{className:"col-span-1",children:n.jsx(G,{label:"input.organizationLevelBranch.state",name:"state",field:"name",value:Qa,variant:h.PRIMARY,suggestions:k,completeMethod:_a,onChange:Q,itemTemplate:Ua,disabled:!0,loader:M})}),n.jsx("div",{}),n.jsx("div",{className:"col-span-1",children:n.jsx(te,{label:"input.organizationLevelBranch.latitude",name:"latitude",variant:h.SECONDARY,onChange:N,value:Le,validation:(We=o==null?void 0:o.current)==null?void 0:We.message("latitude",Le,"mandatory")})}),n.jsx("div",{className:"col-span-1",children:n.jsx(te,{label:"input.organizationLevelBranch.longitude",name:"longitude",variant:h.SECONDARY,onChange:N,value:Fe,validation:(qe=o==null?void 0:o.current)==null?void 0:qe.message("longitude",Fe,"mandatory")})}),n.jsx("div",{}),n.jsx("div",{className:"col-span-1 sm:col-span-2",children:n.jsx(he,{label:"input.organizationLevelBranch.description",name:"description",variant:h.SECONDARY,maxCount:200,onChange:N,value:Xa,disabled:u===l.VIEW})}),u!==l.VIEW&&n.jsx("div",{className:"col-span-1 sm:col-span-2",children:n.jsx(he,{label:"input.organizationLevelBranch.reasons",name:"reasons",variant:h.SECONDARY,maxCount:200,onChange:N,value:Oe,validation:(Ke=o==null?void 0:o.current)==null?void 0:Ke.message("reasons",Oe,"mandatory"),disabled:u===l.VIEW})})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"mt-3 flex w-full justify-between",children:[n.jsx(x,{label:"label.organizationLevelBranch.productMapping",className:"bold"}),n.jsx(D,{buttonType:I.ICON_TEXT_ROW,onClick:ua})]}),n.jsxs(ot,{standardDataFormatPromise:P.getDataForTableByUid,uniqueKey:"uid",className:"border border-secondary-concrete px-0 overflow-x-auto mt-4 rounded-lg read-only-table !min-h-111 w-full",ref:c,search:`&branch.uid=${R}`,mode:u===l.CREATE?"CREATE":"UPDATE",children:[n.jsx(oe,{className:"text-primary-ptext-1000 text-left text-xs w-2/12 p-1 h-12 pl-6",header:"Product Type*",body:ga}),n.jsx(oe,{className:"text-primary-ptext-1000 text-left text-xs w-2/12 p-1 h-12 pl-6",header:"Applicable From*",body:Ca}),n.jsx(oe,{className:"text-primary-ptext-1000 text-left text-xs w-2/12 p-1 h-12 pl-6",header:"Applicable To",body:ya}),n.jsx(oe,{className:"text-primary-ptext-1000 text-left text-xs w-2/12 p-1 h-12 pl-6",header:"Actions",body:Ja})]})]})]})]}),n.jsxs("div",{className:"",children:[n.jsx(at,{position:ra,ref:B,toastText:le,variant:Te,onRemove:()=>{ia&&Y.navigate(pe)}}),n.jsx(ct,{className:"w-20 bg-white  font-Roboto text-xs text-primary-pText-1300 pt-2 rounded-lg mt-0.5 flex justify-center align-center shadow-autoCompletePanel",model:Wa,ref:ee}),n.jsx(nt,{onHide:()=>Ee(!1),visible:la,errorMessage:ce})]})]})},zt=Za(dt);export{zt as default};
//# sourceMappingURL=OrganizationReportingBranchCreateViewEdit-37c82629.js.map
