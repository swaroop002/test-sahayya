import{w as oa,r as i,aF as s,aG as P,ad as ca,ae as la,af as ra,y as _,v as da,aP as L,j as e,ax as ma,J as g,az as k,o as T,aQ as ga,cN as x,aH as ua}from"./index-e8217573.js";import{B as u}from"./ButtonBox-9e46519a.js";import{E as va}from"./ErrorDialog-d5eef4d7.js";import{I as Y}from"./InputBox-b9e88f52.js";import{I as w}from"./InputTextArea-b90aad1d.js";import{S as pa}from"./SimpleDropDown-061a3470.js";import{T as Ea}from"./Toast-ae99ea5b.js";import{O as Ta}from"./Designation-408fa03d.js";import{P as xa}from"./PageTitle-b3bba3d4.js";import"./kebab-menu-8835ad2e.js";import"./Dialog-adadaf64.js";import"./withAuth-6de36ebf.js";import"./virtualscroller.esm-9939945c.js";import"./TransitionGroup-c8afe0ce.js";const fa=d=>{var I,D,O;const[z,f]=i.useState({displayName:"",department:"",reasons:"",description:"",isActive:""}),[N,Na]=i.useState(!1),[V,ha]=i.useState(!1),[o,v]=i.useState(s.CREATE),[U,B]=i.useState(!1),[M,W]=i.useState("bottom-right"),[p,F]=i.useState(""),[G,Ca]=i.useState(""),[h,H]=i.useState(P.PRIMARY),[C,Q]=i.useState(!1),[q,Aa]=i.useState(!1),[Sa,J]=i.useState(""),l=i.useRef(null),[,E]=i.useState(void 0),n=i.useRef(new ca({validators:{...la()},...ra(),autoForceUpdate:{forceUpdate:()=>E(a=>!a)}})),[ja,K]=i.useState({displayName:"",department:"",reasons:"",description:"",isActive:""});i.useEffect(()=>{const a=_.parse(d.location.search);a!=null&&a.mode&&(a==null?void 0:a.mode)!==void 0&&v(a.mode)},[]),i.useEffect(()=>{var a;l!=null&&l.current&&p!==""&&((a=l==null?void 0:l.current)==null||a.showFunction())},[p,h,C]),i.useEffect(()=>{const a=_.parse(d.location.search);a!=null&&a.mode&&(a==null?void 0:a.mode)!==void 0&&v(a.mode),a!=null&&a.uid&&(a==null?void 0:a.uid)!==void 0&&(J(a.uid),Ta.findById(a.uid).then(t=>{var r,c,R,y,b;da(t)&&(console.log(t),(Object.keys(t.data).length>0||t.data.id)&&(f({displayName:((r=t==null?void 0:t.data)==null?void 0:r.name)??"",department:((c=t==null?void 0:t.data)==null?void 0:c.department.name)??"",description:((R=t==null?void 0:t.data)==null?void 0:R.description)??"",reasons:((y=t==null?void 0:t.data)==null?void 0:y.reason)??"",isActive:(b=t==null?void 0:t.data)!=null&&b.isActive?L.ACTIVE:L.INACTIVE}),K({...t==null?void 0:t.data})))}).catch(t=>{}))},[]);const X=async()=>{var t,r;let a=!1;return a=((t=n==null?void 0:n.current)==null?void 0:t.allValid())&&!N&&!V,a||(E(c=>!c),(r=n==null?void 0:n.current)==null||r.showMessages(),E(c=>!c),!1)},m=a=>{const{name:t,value:r}=a.target;f(c=>({...c,[t]:r}))},$=async()=>{let a=!1;a=await X(),a||(W("top-right"),H(P.QUATERNARY),F(ua.ERROR),Q(!C))},Z=()=>{d.navigate(x)},aa=()=>{console.log("this is the onApproveClick")},ea=()=>{d.navigate(x)},ta=()=>{v(s.EDIT)},ia=()=>{switch(o){case s.CREATE:return"heading.organizationLevelDesignation.create";case s.VIEW:return"heading.organizationLevelDesignation.view";case s.EDIT:return"heading.organizationLevelDesignation.edit";default:return"heading.organizationLevelDesignation.create"}},{displayName:A,department:S,reasons:j,description:na,isActive:sa}=z;return e.jsxs(ma,{override:{read:s.VIEW===o},children:[e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex w-full justify-between items-center",children:[e.jsx(xa,{title:ia()}),e.jsx("div",{className:"flex",children:o===s.CREATE||o===s.EDIT?e.jsxs("div",{className:"flex gap-10",children:[e.jsxs("div",{className:"flex gap-5",children:[e.jsx(u,{className:"reset-red",buttonType:g.CANCEL_OUTLINE,onClick:Z}),e.jsx(u,{buttonType:g.SAVE_OUTLINE,onClick:$})]}),e.jsx("div",{children:e.jsx(u,{className:"approve-primary",buttonType:g.SEND_FOR_APPROVAL,onClick:aa})})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mr-5",children:e.jsx(u,{buttonType:g.BACK_OUTLINE,onClick:ea})}),e.jsx("div",{className:"",children:e.jsx(u,{buttonType:g.EDIT_OUTLINE,className:"blue-primary",onClick:ta})})]})})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-3",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(Y,{label:"input.organizationLevelDesignation.department",name:"department",variant:k.SECONDARY,value:S,onChange:m,disabled:o===s.VIEW,validation:(I=n==null?void 0:n.current)==null?void 0:I.message("department",S,"mandatory")})}),e.jsx("div",{className:"col-span-1",children:e.jsx(Y,{label:"input.organizationLevelDesignation.displayName",name:"displayName",variant:T.SECONDARY,onChange:m,value:A,validation:N?"Duplicate Entry Found":(D=n==null?void 0:n.current)==null?void 0:D.message("displayName",A,"mandatory"),disabled:o===s.VIEW})}),o!==s.CREATE&&e.jsx("div",{className:"col-span-1",children:e.jsx(pa,{label:"input.organizationLevelDesignation.isActive",name:"isActive",variant:k.SECONDARY,onChange:m,value:sa,options:ga,disabled:o===s.VIEW})})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-3",children:[e.jsx("div",{className:"col-span-2",children:e.jsx(w,{label:"input.organizationLevelDesignation.description",name:"description",variant:T.SECONDARY,maxCount:200,onChange:m,value:na,disabled:o===s.VIEW})}),o!==s.VIEW&&e.jsx("div",{className:"col-span-2",children:e.jsx(w,{label:"input.organizationLevelDesignation.reasons",name:"reasons",variant:T.SECONDARY,maxCount:200,onChange:m,value:j,validation:(O=n==null?void 0:n.current)==null?void 0:O.message("reasons",j,"mandatory"),disabled:o===s.VIEW})})]})]}),e.jsx("div",{className:"",children:e.jsx(Ea,{position:M,ref:l,toastText:p,variant:h,onRemove:()=>{q&&d.navigate(x)}})}),e.jsx(va,{onHide:()=>B(!1),visible:U,errorMessage:G})]})},Ua=oa(fa);export{Ua as default};
//# sourceMappingURL=OrganizationReportingCreateViewEdit-2e278caa.js.map