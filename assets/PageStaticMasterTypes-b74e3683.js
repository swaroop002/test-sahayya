import{w as mt,r as a,aG as N,j as e,T as J,J as D,aH as X,ao as Z,aI as xe,aJ as ue,aK as _,aL as ve,aF as he,o as b,az as pt,aM as xt,av as ut,p as fe,z as vt,aN as ee}from"./index-e8217573.js";import{s as I,a as M,b as B}from"./sortIcon-54357a29.js";import{e as ht}from"./eye_icon-081bddb3.js";import{A as Ae}from"./AutoComplete-0bca608a.js";import{B as R}from"./ButtonBox-9e46519a.js";import{D as te}from"./DatePicker-b1c13861.js";import{D as ft}from"./Dialog-adadaf64.js";import{I as re}from"./InputBox-b9e88f52.js";import{M as At}from"./MenuBox-defc36b0.js";import{R as yt}from"./ReadOnlyTable-86accb69.js";import{S as jt}from"./SectionTitle-9f9277ec.js";import{S as Nt}from"./SimpleDropDown-061a3470.js";import{T as gt}from"./Toast-ae99ea5b.js";import{C as g}from"./column.esm-938bad7d.js";import{S as Q}from"./StaticMasterTypeService-480bff1a.js";import"./search_icon-459d6871.js";import"./withAuth-6de36ebf.js";import"./virtualscroller.esm-9939945c.js";import"./kebab-menu-8835ad2e.js";import"./No_data-1720c54e.js";import"./datatable.esm-f474a654.js";import"./paginator.esm-11c2c115.js";import"./TransitionGroup-c8afe0ce.js";function St(ie){const[oe,ye]=a.useState(!1),[je,Y]=a.useState(!1),[Ne,O]=a.useState(!1),[l,ce]=a.useState({}),[L,p]=a.useState(void 0),[k,x]=a.useState(void 0),[U,u]=a.useState(void 0),[w,v]=a.useState(void 0),[q,h]=a.useState(void 0),[V,f]=a.useState(void 0),[H,A]=a.useState(void 0),[W,y]=a.useState(void 0),F=a.useRef(null),[se,S]=a.useState(""),[ne,C]=a.useState(N.PRIMARY),[j,T]=a.useState(!1),[P,de]=a.useState(!1),[r,z]=a.useState({name:"",code:"",description:"",createdFrom:"",createdTo:"",updatedFrom:"",updatedTo:"",isActive:"",createdBy:{name:"",id:""},updatedBy:{name:"",id:""}});a.useState({title:"",id:"",userId:"",completed:"",concept:"",application:"",emailId:""});const[n,m]=a.useState({limit:10,loading:!1,totalRecords:0,start:0,search:"",runCustomQuery:!1,records:[]}),G=a.useRef(null),[ge,Se]=a.useState([{items:[{label:"Activate",className:""},{label:"Deactivate",className:""}]}]),Ce=(t,s)=>{var K;const i={label:"label.common.deactivate",command:()=>{be(t)}},o={label:"label.common.active",command:()=>{De(t)}},$=[{items:[t.isActive?i:o]}];Se($),(K=G==null?void 0:G.current)==null||K.toggle(s)},[ae,Te]=a.useState([]),c=a.useRef(null);a.useEffect(()=>{var t;(t=c==null?void 0:c.current)==null||t.search()},[n==null?void 0:n.search]),a.useEffect(()=>{var t;F!=null&&F.current&&se!==""&&((t=F==null?void 0:F.current)==null||t.showFunction())},[se,ne,j]);const le=t=>{const{name:s,value:i}=t.target;z(typeof i=="object"?o=>({...o,[s]:{name:i==null?void 0:i.name,id:i.userId}}):o=>({...o,[s]:i}))},E=t=>{const{name:s,value:i}=t.target;z(o=>({...o,[s]:i}))},Ee=t=>{let s="";L||L==null?(s='sort={"name":"DESC"}&',p(!1)):(s='sort={"name":"ASC"}&',p(!L)),x(void 0),v(void 0),h(void 0),y(void 0),f(void 0),A(void 0),u(void 0),m({...n,search:s})},De=t=>{ce({...t}),O(!0),de(!0)},be=t=>{ce({...t}),Y(!0),de(!1)},Ie=t=>{let s="";k||k==null?(s='sort={"code":"DESC"}&',x(!1)):(s='sort={"code":"ASC"}&',x(!k)),m({...n,search:s}),p(void 0),u(void 0),v(void 0),h(void 0),y(void 0),f(void 0),A(void 0)},Me=t=>{let s="";U||U==null?(s='sort={"description":"DESC"}&',u(!1)):(s='sort={"description":"ASC"}&',u(!U)),m({...n,search:s}),p(void 0),x(void 0),v(void 0),h(void 0),y(void 0),f(void 0),A(void 0)},Be=t=>{let s="";w||w==null?(s='sort={"createdAt":"ASC"}&',v(!1)):(s='sort={"createdAt":"DESC"}&',v(!w)),p(void 0),x(void 0),u(void 0),h(void 0),y(void 0),f(void 0),A(void 0),m({...n,search:s})},Re=t=>{let s="";q||q==null?(s='sort={"createdBy":"ASC"}&',h(!1)):(s='sort={"createdBy":"DESC"}&',h(!w)),p(void 0),x(void 0),u(void 0),v(void 0),y(void 0),f(void 0),A(void 0),m({...n,search:s})},Ye=t=>{let s="";V||V==null?(s='sort={"updatedAt":"ASC"}&',f(!1)):(s='sort={"updatedAt":"DESC"}&',f(!V)),p(void 0),x(void 0),u(void 0),v(void 0),y(void 0),h(void 0),A(void 0),m({...n,search:s})},Oe=t=>{let s="";W||W==null?(s='sort={"isActive":"ASC"}&',y(!1)):(s='sort={"isActive":"DESC"}&',y(!0)),p(void 0),x(void 0),u(void 0),v(void 0),f(void 0),h(void 0),A(void 0),m({...n,search:s})},Fe=t=>{let s="";H||H==null?(s='sort={"updatedBy":"ASC"}&',A(!1)):(s='sort={"updatedBy":"DESC"}&',A(!H)),p(void 0),x(void 0),u(void 0),v(void 0),f(void 0),h(void 0),y(void 0),m({...n,search:s})},Pe=async()=>Q.Inactivate(l==null?void 0:l.uid).then(t=>{var s;C(N.PRIMARY),S(X.DEACTIVATED),T(!j),Y(!1),O(!1),(s=c==null?void 0:c.current)==null||s.search()}).catch(t=>{C(N.QUATERNARY),S(Z(t)),T(!j)}),we=()=>Q.activate(l==null?void 0:l.uid).then(t=>{var s;C(N.PRIMARY),S(X.ACTIVATED),T(!j),Y(!1),O(!1),(s=c==null?void 0:c.current)==null||s.search()}).catch(t=>{C(N.QUATERNARY),S(Z(t)),T(!j)}),$e=()=>{const t={...l},s={...t,isActive:!0},i={name:l.name,operationType:xe.INACTIVE,entity:ue.STATIC_MASTER_TYPE,initialStateJson:_(t),finalStateJson:_(s),reasonForChange:"Activate",reqPayload:_(s)};return Q.approve(i).then(o=>{var d;C(N.PRIMARY),S(X.SENT_FOR_APPROVAL),T(!j),Y(!1),O(!1),(d=c==null?void 0:c.current)==null||d.search()}).catch(o=>{C(N.QUATERNARY),S(Z(o)),T(!j)})},_e=()=>{const t={...l},s={...t,isActive:!1},i={name:l.name,operationType:xe.INACTIVE,entity:ue.STATIC_MASTER_TYPE,initialStateJson:_(t),finalStateJson:_(s),reasonForChange:"Deactivate",reqPayload:_(s)};return Q.approve(i).then(o=>{var d;C(N.PRIMARY),S(X.SENT_FOR_APPROVAL),T(!j),Y(!1),O(!1),(d=c==null?void 0:c.current)==null||d.search()}).catch(o=>{C(N.QUATERNARY),S(Z(o)),T(!j)})},me=async t=>{let s=[];t.query.trim().length?(await vt.getAll(0,10,`name=${t.query}&`).then(i=>{i.status===200&&(s=[...i.data])}),s.length===0&&s.push({name:void 0,designation:void 0,emailId:void 0})):s=ae,Te(s)},Le=()=>{var i,o,d,$;let t="";r.name&&(t=`${t}name:lk=${r.name}&`),r.code&&(t=`${t}code:lk=${r.code}&`),r.description&&(t=`${t}description:lk=${r.description}&`),r.createdFrom&&(console.log(r.createdFrom),t=`${t}createdAt:gt=${ee(r.createdFrom)}&`),r.createdTo&&(t=`${t}createdAt:lt=${ee(r.createdTo)}&`),r.updatedFrom&&(t=`${t}updatedAt:gt=${ee(r.updatedFrom)}&`),r.updatedTo&&(t=`${t}updatedAt:lt=${ee(r.updatedTo)}&`);const s=r.isActive==="YES";r.isActive&&(t=`${t}isActive:lk=${s}&`),(i=r.createdBy)!=null&&i.id&&(t=`${t}&createdBy=${(o=r.createdBy)==null?void 0:o.id}&`),(d=r.updatedBy)!=null&&d.id&&(t=`${t}&updatedBy=${($=r.updatedBy)==null?void 0:$.id}&`),m({...n,search:t})},ke=()=>{z({name:"",code:"",description:"",createdFrom:"",createdTo:"",updatedFrom:"",updatedTo:"",isActive:"",createdBy:{name:"",id:""},updatedBy:{name:"",id:""}}),m({...n,search:""})},Ue=()=>{ye(!oe)},Ve=()=>{ie.navigate(`${ve}?mode=${he.CREATE}`)},He=()=>{const{name:t,code:s,description:i,createdFrom:o,createdTo:d,updatedFrom:$,updatedTo:K,isActive:nt,createdBy:dt,updatedBy:lt}=r;return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"p-3 flex flex-col gap-6 bg-primary-sapphireBlue-100 rounded-lg",children:[e.jsx("div",{className:"flex ",children:e.jsx(jt,{title:"text.masterData.types.search"})}),e.jsxs("div",{className:" grid grid-cols-1 md:grid-cols-4 gap-3",children:[e.jsx(re,{label:"input.masterData.staticMaster.displayNameFilter",name:"name",variant:b.SECONDARY,onChange:E,value:t}),e.jsx(re,{label:"input.masterData.staticMaster.systemCodeFilter",name:"code",variant:b.SECONDARY,onChange:E,value:s}),e.jsx(re,{label:"input.masterData.staticMaster.description",name:"description",variant:b.SECONDARY,onChange:E,value:i}),e.jsx(Nt,{label:"input.masterData.staticMaster.isActive",name:"isActive",variant:pt.SECONDARY,options:xt,onChange:E,value:nt}),e.jsx(te,{label:"input.masterData.staticMaster.createdFrom",name:"createdFrom",showTime:!0,value:o,placeholder:"DD-MMM-YYYY",onChange:E}),e.jsx(te,{showTime:!0,label:"input.masterData.staticMaster.createdTo",name:"createdTo",variant:b.PRIMARY,value:d,placeholder:"DD-MMM-YYYY",onChange:E}),e.jsx(Ae,{label:"input.masterData.staticMaster.createdBy",name:"createdBy",field:"name",value:dt,variant:b.PRIMARY,suggestions:ae,completeMethod:me,onChange:le,itemTemplate:pe}),e.jsx(te,{showTime:!0,label:"input.masterData.staticMaster.updatedFrom",name:"updatedFrom",variant:b.PRIMARY,value:$,placeholder:"DD-MMM-YYYY",onChange:E}),e.jsx(te,{showTime:!0,label:"input.masterData.staticMaster.updatedTo",name:"updatedTo",variant:b.PRIMARY,value:K,placeholder:"DD-MMM-YYYY",onChange:E}),e.jsx(Ae,{field:"name",label:"input.masterData.staticMaster.updatedBy",name:"updatedBy",variant:b.PRIMARY,value:lt,suggestions:ae,completeMethod:me,onChange:le,itemTemplate:pe}),e.jsxs("div",{className:"flex gap-5",children:[e.jsx(R,{buttonType:D.RESET_OUTLINE,onClick:ke}),e.jsx(R,{buttonType:D.SEARCH_OUTLINE,onClick:Le})]})]})]})})},pe=t=>t.name===void 0?e.jsxs("div",{className:"flex flex-col items-center justify-center h-39",children:[e.jsx("img",{src:ut,alt:"search-icon",className:" h-7 w-7"}),e.jsx(J,{className:"text-primary-labelColor mt-2",label:"Loading..."})]}):e.jsx("div",{className:"flex flex-col",children:e.jsx(J,{className:"text-primary-labelColor",label:`${t.name}`})}),Je=t=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left truncate",children:t.name})}),Qe=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Display Name"}),e.jsx("img",{src:L==null?I:L==!0?M:B,alt:"Sort Icon",onClick:Ee,className:"cursor-pointer"})]}),qe=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"System Code"}),e.jsx("img",{src:k==null?I:k==!0?M:B,alt:"Sort Icon",onClick:Ie,className:"cursor-pointer"})]}),We=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Description"}),e.jsx("img",{src:U==null?I:U==!0?M:B,alt:"Sort Icon",onClick:Me,className:"cursor-pointer"})]}),ze=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Created On"}),e.jsx("img",{src:w==null?I:w==!0?M:B,alt:"Sort Icon",onClick:Be,className:"cursor-pointer"})]}),Ge=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Created By"}),e.jsx("img",{src:q==null?I:q==!0?M:B,alt:"Sort Icon",onClick:Re,className:"cursor-pointer"})]}),Ke=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Updated On"}),e.jsx("img",{src:V==null?I:V==!0?M:B,alt:"Sort Icon",onClick:Ye,className:"cursor-pointer"})]}),Xe=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Updated By"}),e.jsx("img",{src:H==null?I:H==!0?M:B,alt:"Sort Icon",onClick:Fe,className:"cursor-pointer"})]}),Ze=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Is Active"}),e.jsx("img",{src:W==null?I:W==!0?M:B,alt:"Sort Icon",onClick:Oe,className:"cursor-pointer"})]}),et=t=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left truncate",children:t.code})}),tt=t=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight w-35 text-left truncate",children:t.description})}),st=t=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left truncate",children:`${fe(t.createdAt)}`})}),at=t=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left truncate",children:t.createdByUserName})}),rt=t=>e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left truncate",children:`${fe(t.updatedAt)}`}),it=t=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left truncate",children:t.updatedByUserName})}),ot=t=>e.jsx(e.Fragment,{children:t.isActive?e.jsxs("div",{className:"flex items-center ",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-primary-primaryBlue border-none"}),e.jsx("div",{className:"ml-2 ",children:"YES"})]}):e.jsxs("div",{className:"flex items-center ",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-secondary-gray-300 border-none"}),e.jsx("div",{className:"ml-2 ",children:"NO"})]})}),ct=t=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex items-center ",children:[e.jsx("div",{className:"w-4 h-4 flex items-center",children:e.jsx("img",{src:ht,alt:"Sahayya Logo",className:"cursor-pointer",onClick:s=>{ie.navigate(`${ve}?mode=${he.VIEW}&uid=${t.uid}`)}})}),e.jsx("div",{className:"ml ",children:e.jsx(R,{buttonType:D.MENU,onClick:s=>{Ce(t,s)},className:"!rounded-none bg-transparent !hover:bg-primary-gray-300"})})]})});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex w-full justify-between items-center",children:[e.jsx(J,{label:"heading.masterData.types",className:"text-primary-ptext-1000 text-h2 font-bold flex"}),e.jsxs("div",{className:"flex gap-10",children:[e.jsx(R,{buttonType:D.FILTER_OUTLINE,onClick:Ue}),e.jsx(R,{buttonType:D.CREATE,className:"create-button",onClick:Ve})]})]}),oe&&He(),e.jsxs(yt,{standardDataFormatPromise:Q.getAll,dataKey:"id",search:n.search,ref:c,children:[e.jsx(g,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:Qe,body:Je}),e.jsx(g,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:qe,body:et}),e.jsx(g,{className:"text-primary-ptext-1000 text-left text-xs w-1/12  p-1 h-12 pl-6",header:We,body:tt}),e.jsx(g,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:Ze,body:ot}),e.jsx(g,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:ze,body:st}),e.jsx(g,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:Ge,body:at}),e.jsx(g,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:Ke,body:rt}),e.jsx(g,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:Xe,body:it}),e.jsx(g,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:"Actions",body:ct})]})]}),e.jsxs(ft,{onHide:P?()=>O(!1):()=>Y(!1),visible:P?Ne:je,modal:!0,closable:!1,dismissableMask:!0,children:[e.jsx(J,{label:P?"dialog.staticMaster.activate":"dialog.staticMaster.deactivate",className:"text-primary-ptext-1000 text-base font-Roboto font-bold flex items-center justify-center"}),e.jsx(J,{label:P?"dialog.staticMaster.message.activate":"dialog.staticMaster.message",className:"text-primary-ptext-1000 text-xs font-Roboto flex mt text-center justify-center mx-2 mt-4"}),e.jsxs("div",{className:"flex justify-center mt-4",children:[e.jsx("div",{className:"mr-3",children:e.jsx(R,{buttonType:D.CANCEL_OUTLINE,onClick:P?()=>O(!1):()=>Y(!1)})}),e.jsx("div",{className:"mr-3",children:e.jsx(R,{buttonType:D.SAVE_OUTLINE,onClickWithLoader:P?()=>we():()=>Pe()})}),e.jsx("div",{className:"",children:e.jsx(R,{buttonType:D.SEND_FOR_APPROVAL,className:"approve-primary",onClickWithLoader:P?()=>$e():()=>_e()})})]})]}),e.jsx(At,{className:"w-20 bg-white font-Roboto text-xs text-primary-pText-1300 pt-2 rounded-lg mt-0.5 flex justify-center align-center shadow-autoCompletePanel",model:ge,ref:G}),e.jsx("div",{className:"",children:e.jsx(gt,{position:"bottom-right",ref:F,toastText:se,variant:ne})})]})}const qt=mt(St);export{qt as default};
//# sourceMappingURL=PageStaticMasterTypes-b74e3683.js.map
