import{w as pt,r as o,aG as j,j as e,T as Q,J as I,aH as X,ao as Z,aI as xe,aJ as ue,aK as ee,cI as he,aF as fe,o as D,az as vt,aM as xt,av as ut,p as Ae,z as ht,aN as te}from"./index-e8217573.js";import{s as b,a as M,b as R}from"./sortIcon-54357a29.js";import{e as ft}from"./eye_icon-081bddb3.js";import{A as ye}from"./AutoComplete-0bca608a.js";import{B as Y}from"./ButtonBox-9e46519a.js";import{D as se}from"./DatePicker-b1c13861.js";import{D as At}from"./Dialog-adadaf64.js";import{I as ie}from"./InputBox-b9e88f52.js";import{M as yt}from"./MenuBox-defc36b0.js";import{R as gt}from"./ReadOnlyTable-86accb69.js";import{S as jt}from"./SectionTitle-9f9277ec.js";import{S as Nt}from"./SimpleDropDown-061a3470.js";import{T as Tt}from"./Toast-ae99ea5b.js";import{C as N}from"./column.esm-938bad7d.js";import{O as G}from"./Department-d5551750.js";import"./search_icon-459d6871.js";import"./withAuth-6de36ebf.js";import"./virtualscroller.esm-9939945c.js";import"./kebab-menu-8835ad2e.js";import"./No_data-1720c54e.js";import"./datatable.esm-f474a654.js";import"./paginator.esm-11c2c115.js";import"./TransitionGroup-c8afe0ce.js";function St(oe){const[ne,ge]=o.useState(!1),[je,O]=o.useState(!1),[Ne,F]=o.useState(!1),[a,de]=o.useState({}),[_,x]=o.useState(void 0),[k,u]=o.useState(void 0);o.useState(void 0);const[U,h]=o.useState(void 0),[L,p]=o.useState(void 0),[V,T]=o.useState(void 0),[z,f]=o.useState(void 0),[H,A]=o.useState(void 0),[J,y]=o.useState(void 0),$=o.useRef(null),[ae,S]=o.useState(""),[ce,C]=o.useState(j.PRIMARY),[g,E]=o.useState(!1),[P,le]=o.useState(!1),[r,K]=o.useState({staticMasterType:{name:""},name:"",code:"",description:"",createdFrom:"",createdTo:"",updatedFrom:"",updatedTo:"",isActive:"",createdBy:{name:"",id:""},updatedBy:{name:"",id:""}});o.useState({title:"",id:"",userId:"",completed:"",concept:"",application:"",emailId:""});const[c,v]=o.useState({limit:10,loading:!1,totalRecords:0,start:0,search:"",runCustomQuery:!1,records:[]}),W=o.useRef(null),[Te,Se]=o.useState([{items:[{label:"Activate",className:""},{label:"Deactivate",className:""}]}]),Ce=(t,s)=>{var w;console.log("rowData=",t);const i={label:"label.common.deactivate",command:()=>{De(t)}},n={label:"label.common.active",command:()=>{Ie(t)}},l=[{items:[t.isActive?i:n]}];Se(l),(w=W==null?void 0:W.current)==null||w.toggle(s)},[re,Ee]=o.useState([]);o.useState();const d=o.useRef(null);o.useEffect(()=>{var t;(t=d==null?void 0:d.current)==null||t.search()},[c==null?void 0:c.search]),o.useEffect(()=>{var t;$!=null&&$.current&&ae!==""&&((t=$==null?void 0:$.current)==null||t.showFunction())},[ae,ce,g]);const me=t=>{const{name:s,value:i}=t.target;K(typeof i=="object"?n=>({...n,[s]:{name:`${i==null?void 0:i.name} ${i!=null&&i.lastName?i==null?void 0:i.lastName:""}`.trim(),id:i.userId}}):n=>({...n,[s]:i}))},B=t=>{const{name:s,value:i}=t.target;K(n=>({...n,[s]:i}))},Be=t=>{let s="";_||_==null?s='sort={"name":"ASC"}&':s='sort={"name":"DESC"}&',_==null?x(!1):x(!_),u(void 0),p(void 0),T(void 0),y(void 0),f(void 0),A(void 0),h(void 0),v({...c,search:s})},Ie=t=>{de({...t}),F(!0),le(!0)},De=t=>{de({...t}),O(!0),le(!1)},be=t=>{let s="";k||k==null?s='sort={"code":"ASC"}&':s='sort={"code":"DESC"}&',k==null?u(!1):u(!k),v({...c,search:s}),x(void 0),h(void 0),p(void 0),T(void 0),y(void 0),f(void 0),A(void 0)},Me=t=>{let s="";U||U==null?s='sort={"description":"ASC"}&':s='description={"name":"DESC"}&',U==null?h(!1):h(!U),v({...c,search:s}),x(void 0),u(void 0),p(void 0),T(void 0),y(void 0),f(void 0),A(void 0)},Re=t=>{let s="";L||L==null?s='sort={"createdAt":"ASC"}&':s='sort={"createdAt":"DESC"}&',L==null?p(!1):p(!L),x(void 0),u(void 0),h(void 0),T(void 0),y(void 0),f(void 0),A(void 0),v({...c,search:s})},Ye=t=>{let s="";V||V==null?s='sort={"createdBy":"ASC"}&':s='sort={"createdBy":"DESC"}&',V==null?T(!1):p(!L),x(void 0),u(void 0),h(void 0),p(void 0),y(void 0),f(void 0),A(void 0),v({...c,search:s})},Oe=t=>{let s="";z||z==null?s='sort={"updatedAt":"ASC"}&':s='sort={"updatedAt":"DESC"}&',z==null?f(!1):f(!z),x(void 0),u(void 0),h(void 0),p(void 0),y(void 0),T(void 0),A(void 0),v({...c,search:s})},Fe=t=>{let s="";J||J==null?s='sort={"isActive":"ASC"}&':s='sort={"isActive":"DESC"}&',J==null?y(!1):y(!0),x(void 0),u(void 0),h(void 0),p(void 0),f(void 0),T(void 0),A(void 0),v({...c,search:s})},Le=t=>{let s="";H||H==null?s='sort={"updatedBy":"ASC"}&':s='sort={"updatedBy":"DESC"}&',H==null?A(!1):A(!H),x(void 0),u(void 0),h(void 0),p(void 0),f(void 0),T(void 0),y(void 0),v({...c,search:s})},$e=()=>({...a},G.Inactivate(a==null?void 0:a.uid).then(t=>{var s;C(j.PRIMARY),S(X.DEACTIVATED),E(!g),O(!1),F(!1),(s=d==null?void 0:d.current)==null||s.search()}).catch(t=>{C(j.QUATERNARY),S(Z(t)),E(!g)})),Pe=()=>({...a},G.activate(a==null?void 0:a.uid).then(t=>{var s;C(j.PRIMARY),S(X.ACTIVATED),E(!g),O(!1),F(!1),(s=d==null?void 0:d.current)==null||s.search()}).catch(t=>{C(j.QUATERNARY),S(Z(t)),E(!g)})),we=()=>{var n;const t={staticMasterType:(n=a==null?void 0:a.staticMasterType)==null?void 0:n.name,name:a==null?void 0:a.name,code:a.code,reason:a.reason,description:a.description,createdAt:a.createdAt,createdBy:a.createdBy,id:a.id,isActive:!1,requestId:a.requestId,uid:a.uid,updatedAt:a.updatedAt,updatedBy:a.updatedBy},s={...t,isActive:!0},i={name:a.displayName,operationType:xe.UPDATE,entity:ue.STATIC_MASTER_DATA,initialStateJson:ee(t),finalStateJson:ee(s),reasonForChange:a.reasons};return G.update(a==null?void 0:a.uid,i).then(m=>{var l;C(j.PRIMARY),S(X.SENT_FOR_APPROVAL),E(!g),O(!1),F(!1),(l=d==null?void 0:d.current)==null||l.search()}).catch(m=>{C(j.QUATERNARY),S(Z(m)),E(!g)})},_e=()=>{var n;const t={staticMasterType:(n=a==null?void 0:a.staticMasterType)==null?void 0:n.name,name:a==null?void 0:a.name,code:a.code,reason:a.reason,description:a.description,createdAt:a.createdAt,createdBy:a.createdBy,id:a.id,isActive:!0,requestId:a.requestId,uid:a.uid,updatedAt:a.updatedAt,updatedBy:a.updatedBy},s={...t,isActive:!1},i={name:a.displayName,operationType:xe.UPDATE,entity:ue.STATIC_MASTER_DATA,initialStateJson:ee(t),finalStateJson:ee(s),reasonForChange:a.reasons};return G.update(a==null?void 0:a.uid,i).then(m=>{var l;C(j.PRIMARY),S(X.SENT_FOR_APPROVAL),E(!g),O(!1),F(!1),(l=d==null?void 0:d.current)==null||l.search()}).catch(m=>{C(j.QUATERNARY),S(Z(m)),E(!g)})},pe=async t=>{let s=[];t.query.trim().length?(await ht.getAll(0,10,`name=${t.query}&`).then(i=>{i.status===200&&(s=[...i.data])}),s.length===0&&s.push({name:void 0,designation:void 0,emailId:void 0})):s=re,Ee(s)},ke=()=>{var s,i,n,m,l,w;let t="";if((s=r==null?void 0:r.staticMasterType)!=null&&s.name&&(t=`${t}staticMasterType.name:lk=${(i=r==null?void 0:r.staticMasterType)==null?void 0:i.name}&`),r.name&&(t=`${t}name:lk=${r.name}&`),r.code&&(t=`${t}code:lk=${r.code}&`),r.description&&(t=`${t}description:lk=${r.description}&`),r.createdFrom&&(console.log(r.createdFrom),t=`${t}createdAt:gt=${te(r.createdFrom)}&`),r.createdTo&&(t=`${t}createdAt:lt=${te(r.createdTo)}&`),r.updatedFrom&&(t=`${t}updatedAt:gt=${te(r.updatedFrom)}&`),r.updatedTo&&(t=`${t}updatedAt:lt=${te(r.updatedTo)}&`),r.isActive){let q=!0;r.isActive==="YES"?q=!0:r.isActive==="NO"&&(q=!1),t=`${t}isActive:lk=${q}&`}(n=r.createdBy)!=null&&n.id&&(t=`${t}&createdBy=${(m=r.createdBy)==null?void 0:m.id}&`),(l=r.updatedBy)!=null&&l.id&&(t=`${t}&updatedBy=${(w=r.updatedBy)==null?void 0:w.id}&`),v({...c,search:t})},Ue=()=>{K({staticMasterType:{name:""},name:"",code:"",description:"",createdFrom:"",createdTo:"",updatedFrom:"",updatedTo:"",isActive:"",createdBy:{name:"",id:""},updatedBy:{name:"",id:""}}),v({...c,search:""})},ze=()=>{ge(!ne)},He=()=>{oe.navigate(`${he}?mode=${fe.CREATE}`)},Ve=()=>{const{staticMasterType:t,name:s,code:i,description:n,createdFrom:m,createdTo:l,updatedFrom:w,updatedTo:q,isActive:ct,createdBy:lt,updatedBy:mt}=r;return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"p-3 flex flex-col gap-6 bg-primary-sapphireBlue-100 rounded-lg",children:[e.jsx("div",{className:"flex ",children:e.jsx(jt,{title:"text.masterData.types.search"})}),e.jsxs("div",{className:" grid grid-cols-1 md:grid-cols-4 gap-3",children:[e.jsx(ie,{label:"input.organizationLevelDepartment.displayName",name:"name",variant:D.SECONDARY,onChange:B,value:s}),e.jsx(ie,{label:"input.organizationLevelDepartment.systemCode",name:"code",variant:D.SECONDARY,onChange:B,value:i}),e.jsx(ie,{label:"input.organizationLevelDepartment.description",name:"description",variant:D.SECONDARY,onChange:B,value:n}),e.jsx(Nt,{label:"input.organizationLevelDepartment.isActive",name:"isActive",variant:vt.SECONDARY,options:xt,onChange:B,value:ct}),e.jsx(se,{label:"input.organizationLevelDepartment.createdFrom",name:"createdFrom",showTime:!0,value:m,placeholder:"MM/DD/YYYY",onChange:B}),e.jsx(se,{showTime:!0,label:"input.organizationLevelDepartment.createdTo",name:"createdTo",variant:D.PRIMARY,value:l,placeholder:"MM/DD/YYYY",onChange:B}),e.jsx(ye,{label:"input.organizationLevelDepartment.createdBy",name:"createdBy",field:"name",value:lt,variant:D.PRIMARY,suggestions:re,completeMethod:pe,onChange:me,itemTemplate:ve}),e.jsx(se,{showTime:!0,label:"input.organizationLevelDepartment.updatedFrom",name:"updatedFrom",variant:D.PRIMARY,value:w,placeholder:"MM/DD/YYYY",onChange:B}),e.jsx(se,{showTime:!0,label:"input.organizationLevelDepartment.updatedTo",name:"updatedTo",variant:D.PRIMARY,value:q,placeholder:"MM/DD/YYYY",onChange:B}),e.jsx(ye,{field:"name",label:"input.organizationLevelDepartment.updatedBy",name:"updatedBy",variant:D.PRIMARY,value:mt,suggestions:re,completeMethod:pe,onChange:me,itemTemplate:ve}),e.jsxs("div",{className:"flex gap-5",children:[e.jsx(Y,{buttonType:I.RESET_OUTLINE,onClick:Ue}),e.jsx(Y,{buttonType:I.SEARCH_OUTLINE,onClick:ke})]})]})]})})},ve=t=>t.name===void 0?e.jsxs("div",{className:"flex flex-col items-center justify-center h-39",children:[e.jsx("img",{src:ut,alt:"search-icon",className:" h-7 w-7"}),e.jsx(Q,{className:"text-primary-labelColor mt-2",label:"Loading..."})]}):e.jsx("div",{className:"flex flex-col",children:e.jsx(Q,{className:"text-primary-labelColor",label:`${t.name}`})}),Je=t=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left",children:t.name})}),qe=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Display Name"}),e.jsx("img",{src:_==null?b:_==!0?M:R,alt:"Sort Icon",onClick:Be,className:"cursor-pointer"})]}),Qe=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"System Code"}),e.jsx("img",{src:k==null?b:k==!0?M:R,alt:"Sort Icon",onClick:be,className:"cursor-pointer"})]}),Ge=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Description"}),e.jsx("img",{src:U==null?b:U==!0?M:R,alt:"Sort Icon",onClick:Me,className:"cursor-pointer"})]}),Ke=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Created On"}),e.jsx("img",{src:L==null?b:L==!0?M:R,alt:"Sort Icon",onClick:Re,className:"cursor-pointer"})]}),We=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Created By"}),e.jsx("img",{src:V==null?b:V==!0?M:R,alt:"Sort Icon",onClick:Ye,className:"cursor-pointer"})]}),Xe=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Updated On"}),e.jsx("img",{src:z==null?b:z==!0?M:R,alt:"Sort Icon",onClick:Oe,className:"cursor-pointer"})]}),Ze=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Updated By"}),e.jsx("img",{src:H==null?b:H==!0?M:R,alt:"Sort Icon",onClick:Le,className:"cursor-pointer"})]}),et=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Is Active"}),e.jsx("img",{src:J==null?b:J==!0?M:R,alt:"Sort Icon",onClick:Fe,className:"cursor-pointer"})]}),tt=t=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left",children:t.code})}),st=t=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left",children:t.description})}),at=t=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left",children:`${Ae(t.createdAt)}`})}),rt=t=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left",children:t.createdByUserName})}),it=t=>e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left",children:`${Ae(t.updatedAt)}`}),ot=t=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left",children:t.updatedByUserName})}),nt=t=>e.jsx(e.Fragment,{children:t.isActive?e.jsxs("div",{className:"flex items-center ",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-primary-primaryBlue border-none"}),e.jsx("div",{className:"ml-2 ",children:"YES"})]}):e.jsxs("div",{className:"flex items-center ",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-secondary-gray-300 border-none"}),e.jsx("div",{className:"ml-2 ",children:"NO"})]})}),dt=t=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex items-center ",children:[e.jsx("div",{className:"w-4 h-4 flex items-center",children:e.jsx("img",{src:ft,alt:"Sahayya Logo",className:"cursor-pointer",onClick:s=>{oe.navigate(`${he}?mode=${fe.VIEW}&uid=${t.uid}`)}})}),e.jsx("div",{className:"ml ",children:e.jsx(Y,{buttonType:I.MENU,onClick:s=>{Ce(t,s)},className:"!rounded-none bg-transparent !hover:bg-primary-gray-300"})})]})});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex w-full justify-between items-center",children:[e.jsx(Q,{label:"heading.organizationLevelDepartment",className:"text-primary-ptext-1000 text-h2 font-bold flex"}),e.jsxs("div",{className:"flex gap-10",children:[e.jsx(Y,{buttonType:I.FILTER_OUTLINE,onClick:ze}),e.jsx(Y,{buttonType:I.CREATE,className:"create-button",onClick:He})]})]}),ne&&Ve(),e.jsxs(gt,{standardDataFormatPromise:G.getAll,dataKey:"id",search:c.search,ref:d,children:[e.jsx(N,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:qe,body:Je}),e.jsx(N,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:Qe,body:tt}),e.jsx(N,{className:"text-primary-ptext-1000 text-left text-xs w-1/12  p-1 h-12 pl-6",header:Ge,body:st}),e.jsx(N,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:et,body:nt}),e.jsx(N,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:Ke,body:at}),e.jsx(N,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:We,body:rt}),e.jsx(N,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:Xe,body:it}),e.jsx(N,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:Ze,body:ot}),e.jsx(N,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:"Actions",body:dt})]})]}),e.jsxs(At,{onHide:P?()=>F(!1):()=>O(!1),visible:P?Ne:je,modal:!0,closable:!1,dismissableMask:!0,children:[e.jsx(Q,{label:P?"dialog.staticMaster.activate":"dialog.staticMaster.deactivate",className:"text-primary-ptext-1000 text-base font-Roboto font-bold flex items-center justify-center"}),e.jsx(Q,{label:P?"dialog.staticMaster.message.activate":"dialog.staticMaster.message",className:"text-primary-ptext-1000 text-xs font-Roboto flex mt text-center justify-center mx-2 mt-4"}),e.jsxs("div",{className:"flex justify-center mt-4",children:[e.jsx("div",{className:"mr-3",children:e.jsx(Y,{buttonType:I.CANCEL_OUTLINE,onClick:P?()=>F(!1):()=>O(!1)})}),e.jsx("div",{className:"mr-3",children:e.jsx(Y,{buttonType:I.SAVE_OUTLINE,onClick:P?()=>Pe():()=>$e()})}),e.jsx("div",{className:"",children:e.jsx(Y,{buttonType:I.SEND_FOR_APPROVAL,className:"approve-primary",onClick:P?()=>we():()=>_e()})})]})]}),e.jsx(yt,{className:"w-20 bg-white font-Roboto text-xs text-primary-pText-1300 pt-2 rounded-lg mt-0.5 flex justify-center align-center shadow-autoCompletePanel",model:Te,ref:W}),e.jsx("div",{className:"",children:e.jsx(Tt,{position:"bottom-right",ref:$,toastText:ae,variant:ce})})]})}const Qt=pt(St);export{Qt as default};
//# sourceMappingURL=OrganizationLevelDepartment-b5f6b140.js.map