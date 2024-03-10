import{w as D,r as a,aF as t,y as P,j as e,J as i,o,a$ as g}from"./index-e8217573.js";import{B as c}from"./ButtonBox-9e46519a.js";import{I as _}from"./InputBox-b9e88f52.js";import{I as h}from"./InputTextArea-b90aad1d.js";import{P as w}from"./PageTitle-b3bba3d4.js";import{S as L}from"./SimpleDropDown-061a3470.js";import"./kebab-menu-8835ad2e.js";import"./withAuth-6de36ebf.js";import"./virtualscroller.esm-9939945c.js";const V=l=>{const[C,x]=a.useState({event:"",name:"",description:"",reasons:"",isActive:""}),[n,m]=a.useState(t.CREATE),[v,B]=a.useState({bank:"",lendingType:"",amount:"",gst:"",gstType:"",waiver:"",cgst:"",sgst:"",igst:"",name:"",applicableFrom:""}),p=a.useRef(!0),d=a.useRef(null),[u,Y]=a.useState({limit:10,loading:!1,totalRecords:0,start:0,search:"",runCustomQuery:!1,records:[]});a.useEffect(()=>{let s=P.parse(l.location.search);s!=null&&s.mode&&(s==null?void 0:s.mode)!==void 0&&m(s.mode)},[]),a.useEffect(()=>{var s;if(p.current){p.current=!1,(s=d==null?void 0:d.current)==null||s.addRecords(v);return}},[u==null?void 0:u.search]);const r=s=>{const{name:S,value:R}=s.target;x(y=>({...y,[S]:R}))},E=()=>{},j=()=>{l.navigate(g)},f=()=>{},N=()=>{l.navigate(g)},T=()=>{m(t.EDIT)},k=()=>{switch(n){case t.CREATE:return"heading.productConfiguration.checklist.create";case t.VIEW:return"heading.productConfiguration.checklist.view";case t.EDIT:return"heading.productConfiguration.checklist.edit";default:return"heading.productConfiguration.checklist.create"}},{event:b,name:I,description:A,reasons:O,isActive:F}=C;return e.jsxs("div",{className:"h-full mx-6",children:[e.jsxs("div",{className:"flex w-full justify-between pt-6 items-center",children:[e.jsx("div",{className:" h-7.5",children:e.jsx(w,{title:k()})}),e.jsx("div",{className:"flex mr-5",children:n===t.CREATE||n===t.EDIT?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mr-5",children:e.jsx(c,{buttonType:i.CANCEL_OUTLINE,onClick:j})}),e.jsx("div",{className:"mr-10",children:e.jsx(c,{buttonType:i.SAVE_OUTLINE,onClick:E})}),e.jsx("div",{children:e.jsx(c,{className:"approve-primary",buttonType:i.SEND_FOR_APPROVAL,onClick:f})})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mr-5",children:e.jsx(c,{buttonType:i.BACK_OUTLINE,onClick:N})}),e.jsx("div",{className:"",children:e.jsx(c,{buttonType:i.EDIT_OUTLINE,className:"blue-primary",onClick:T})})]})})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-3",children:[e.jsx("div",{className:"col-span-1",children:e.jsx(L,{label:"input.productConfiguration.checklist.event",name:"event",variant:o.SECONDARY,onChange:r,value:b,disabled:n===t.VIEW})}),e.jsx("div",{className:"col-span-1",children:e.jsx(_,{label:"input.productConfiguration.checklist.name",name:"name",variant:o.SECONDARY,onChange:r,value:I,disabled:n===t.VIEW})})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-3",children:[e.jsx("div",{className:"col-span-2",children:e.jsx(h,{label:"input.productConfiguration.checklist.description",name:"description",variant:o.SECONDARY,maxCount:200,onChange:r,value:A,disabled:n===t.VIEW})}),e.jsx("div",{className:"col-span-2",children:e.jsx(h,{label:"input.productConfiguration.checklist.reasons",name:"reasons",variant:o.SECONDARY,maxCount:200,onChange:r,value:O,disabled:n===t.VIEW})})]})]})},z=D(V);export{z as default};
//# sourceMappingURL=checklist-f355b1f3.js.map
