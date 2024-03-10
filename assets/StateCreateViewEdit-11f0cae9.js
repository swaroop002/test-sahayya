import{w as D,r as s,aF as i,y as g,v as w,aP as h,j as a,ax as B,J as c,o as m,cA as p}from"./index-e8217573.js";import{B as o}from"./ButtonBox-9e46519a.js";import{I as C}from"./InputBox-b9e88f52.js";import{I as N}from"./InputTextArea-b90aad1d.js";import{P as Y}from"./PageTitle-b3bba3d4.js";import{S as L}from"./State-681554db.js";import"./kebab-menu-8835ad2e.js";import"./withAuth-6de36ebf.js";const U=l=>{const[T,v]=s.useState({state:"",country:"",description:"",reasons:"",isActive:""}),[W,I]=s.useState({state:"",country:"",description:"",reasons:"",isActive:""}),[n,E]=s.useState(i.CREATE),[F,f]=s.useState("");s.useRef(null),s.useEffect(()=>{const t=g.parse(l.location.search);t!=null&&t.mode&&(t==null?void 0:t.mode)!==void 0&&E(t.mode)},[]),s.useEffect(()=>{const t=g.parse(l.location.search);t!=null&&t.mode&&(t==null?void 0:t.mode)!==void 0&&E(t.mode),t!=null&&t.uid&&(t==null?void 0:t.uid)!==void 0&&(f(t.uid),L.findById(t.uid).then(e=>{var r,u,x,j;w(e)&&(console.log(e),(Object.keys(e.data).length>0||e.data.id)&&(v({state:((r=e==null?void 0:e.data)==null?void 0:r.name)||"",country:((u=e==null?void 0:e.data)==null?void 0:u.country)||"",description:((x=e==null?void 0:e.data)==null?void 0:x.description)||"",reasons:(e==null?void 0:e.data.reason)||" ",isActive:(j=e==null?void 0:e.data)!=null&&j.isActive?h.ACTIVE:h.INACTIVE}),I({...e==null?void 0:e.data})))}).catch(e=>{}))},[]);const d=t=>{const{name:e,value:r}=t.target;v(u=>({...u,[e]:r}))},A=()=>{console.log("clicked")},b=()=>{l.navigate(p)},y=()=>{console.log("object")},S=()=>{l.navigate(p)},O=()=>{E(i.EDIT)},k=()=>{switch(n){case i.CREATE:return"heading.state.create";case i.VIEW:return"heading.state.view";case i.EDIT:return"heading.state.edit";default:return"heading.state.create"}},{state:P,country:R,description:V,reasons:_,isActive:G}=T;return a.jsx(B,{override:{read:[i.VIEW,i.REVIEW].includes(n)},children:a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsxs("div",{className:"flex w-full justify-between  items-center",children:[a.jsx(Y,{title:k()}),a.jsx("div",{className:"flex ",children:n===i.CREATE||n===i.EDIT?a.jsxs("div",{className:"flex gap-10",children:[a.jsxs("div",{className:"flex gap-5",children:[a.jsx(o,{className:"reset-red",buttonType:c.CANCEL_OUTLINE,onClick:b}),a.jsx(o,{buttonType:c.SAVE_OUTLINE,onClick:A})]}),a.jsx("div",{children:a.jsx(o,{className:"approve-primary",buttonType:c.SEND_FOR_APPROVAL,onClick:y})})]}):a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"mr-5",children:a.jsx(o,{buttonType:c.BACK_OUTLINE,onClick:S})}),a.jsx("div",{className:"",children:a.jsx(o,{buttonType:c.EDIT_OUTLINE,className:"blue-primary",onClick:O})})]})})]}),a.jsxs("div",{className:"grid grid-cols-4 gap-3",children:[a.jsx("div",{className:"col-span-1",children:a.jsx(C,{label:"input.state.state",name:"state",variant:m.SECONDARY,onChange:d,value:P,disabled:n===i.VIEW})}),a.jsx("div",{className:"col-span-1",children:a.jsx(C,{label:"input.state.country",name:"country",variant:m.SECONDARY,onChange:d,value:R,disabled:n===i.VIEW})})]}),a.jsxs("div",{className:"grid grid-cols-4 gap-3",children:[a.jsx("div",{className:"col-span-2",children:a.jsx(N,{label:"input.state.description",name:"value",variant:m.SECONDARY,maxCount:200,onChange:d,value:V,disabled:n===i.VIEW})}),a.jsx("div",{className:"col-span-2",children:a.jsx(N,{label:"input.state.reasons",name:"reasons",variant:m.SECONDARY,maxCount:200,onChange:d,value:_,disabled:n===i.VIEW})})]})]})})},X=D(U);export{X as default};
//# sourceMappingURL=StateCreateViewEdit-11f0cae9.js.map