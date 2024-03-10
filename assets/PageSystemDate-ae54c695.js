import{w as Ze,r,aG as v,j as e,T as H,J as I,aH as Q,ao as z,aI as de,aJ as ne,aK as G,cq as ce,aF as le,az as et,aM as tt,o as V,av as st,f as at,p as me,z as rt,aN as W}from"./index-e8217573.js";import{s as b,a as M,b as R}from"./sortIcon-54357a29.js";import{e as it}from"./eye_icon-081bddb3.js";import{A as pe}from"./AutoComplete-0bca608a.js";import{B as Y}from"./ButtonBox-9e46519a.js";import{D as J}from"./DatePicker-b1c13861.js";import{D as ot}from"./Dialog-adadaf64.js";import{M as dt}from"./MenuBox-defc36b0.js";import{R as nt}from"./ReadOnlyTable-86accb69.js";import{S as ct}from"./SectionTitle-9f9277ec.js";import{S as lt}from"./SimpleDropDown-061a3470.js";import{T as mt}from"./Toast-ae99ea5b.js";import{C as N}from"./column.esm-938bad7d.js";import{S as q}from"./SystemDate-aca727a8.js";import"./search_icon-459d6871.js";import"./withAuth-6de36ebf.js";import"./virtualscroller.esm-9939945c.js";import"./kebab-menu-8835ad2e.js";import"./No_data-1720c54e.js";import"./datatable.esm-f474a654.js";import"./paginator.esm-11c2c115.js";import"./TransitionGroup-c8afe0ce.js";function pt(Z){const[ee,ue]=r.useState(!1),[xe,O]=r.useState(!1),[ve,F]=r.useState(!1),[a,ut]=r.useState({}),[l,te]=r.useState(void 0),[xt,T]=r.useState(void 0),[P,h]=r.useState(void 0),[C,p]=r.useState(void 0),[$,D]=r.useState(void 0),[w,f]=r.useState(void 0),[k,y]=r.useState(void 0),[U,A]=r.useState(void 0),E=r.useRef(null),[X,j]=r.useState(""),[se,g]=r.useState(v.PRIMARY),[u,S]=r.useState(!1),[B,vt]=r.useState(!1),[o,K]=r.useState({systemDate:"",createdFrom:"",createdTo:"",updatedFrom:"",updatedTo:"",isActive:"",createdBy:{name:"",id:""},updatedBy:{name:"",id:""}}),[c,x]=r.useState({limit:10,loading:!1,totalRecords:0,start:0,search:"",runCustomQuery:!1,records:[]}),he=r.useRef(null),[fe,ht]=r.useState([{items:[{label:"Activate",className:""},{label:"Deactivate",className:""}]}]),[ye,ft]=r.useState([{name:"Shivam Soni",designation:"Credit, Manager, Karnataka",emailId:"Shivamsoni@sahayya.com"},{name:"Shiva Prakash",designation:"Executive, Chief Executive Officer, Karnataka",emailId:"shiva.prakash@sahayya.com"},{name:"Rohith Balakrishnan",designation:"Head, Country Head, Karnataka",emailId:"Rohith.balakrishnan@sahayya.com"}]),[ae,Ae]=r.useState([]),d=r.useRef(null);r.useEffect(()=>{var t;(t=d==null?void 0:d.current)==null||t.search()},[c==null?void 0:c.search]),r.useEffect(()=>{var t;E!=null&&E.current&&X!==""&&((t=E==null?void 0:E.current)==null||t.showFunction())},[X,se,u]);const re=t=>{const{name:s,value:i}=t.target;K(typeof i=="object"?n=>({...n,[s]:{name:`${i==null?void 0:i.name}`,id:i.userId}}):n=>({...n,[s]:i}))},_=t=>{const{name:s,value:i}=t.target;K(n=>({...n,[s]:i}))},je=t=>{let s="";l||l==null?s='sort={"date":"ASC"}&':s='sort={"date":"DESC"}&',l==null?te(!1):te(!l),T(void 0),p(void 0),D(void 0),A(void 0),f(void 0),y(void 0),h(void 0),x({...c,search:s})},ge=t=>{let s="";P||P==null?s='sort={"description":"ASC"}&':s='description={"name":"DESC"}&',P==null?h(!1):h(!P),x({...c,search:s}),l(void 0),T(void 0),p(void 0),D(void 0),A(void 0),f(void 0),y(void 0)},Se=t=>{let s="";C||C==null?s='sort={"createdAt":"ASC"}&':s='sort={"createdAt":"DESC"}&',C==null?p(!1):p(!C),l(void 0),T(void 0),h(void 0),D(void 0),A(void 0),f(void 0),y(void 0),x({...c,search:s})},Ne=t=>{let s="";$||$==null?s='sort={"createdBy":"ASC"}&':s='sort={"createdBy":"DESC"}&',$==null?D(!1):p(!C),l(void 0),T(void 0),h(void 0),p(void 0),A(void 0),f(void 0),y(void 0),x({...c,search:s})},Te=t=>{let s="";w||w==null?s='sort={"updatedAt":"ASC"}&':s='sort={"updatedAt":"DESC"}&',w==null?f(!1):f(!w),l(void 0),T(void 0),h(void 0),p(void 0),A(void 0),D(void 0),y(void 0),x({...c,search:s})},Ce=t=>{let s="";U||U==null?s='sort={"isCurrent":"ASC"}&':s='sort={"isCurrent":"DESC"}&',U==null?A(!1):A(!0),l(void 0),T(void 0),h(void 0),p(void 0),f(void 0),D(void 0),y(void 0),x({...c,search:s})},De=t=>{let s="";k||k==null?s='sort={"updatedBy":"ASC"}&':s='sort={"updatedBy":"DESC"}&',k==null?y(!1):y(!k),l(void 0),T(void 0),h(void 0),p(void 0),f(void 0),D(void 0),A(void 0),x({...c,search:s})},Ee=()=>({...a},q.Inactivate(a==null?void 0:a.uid).then(t=>{var s;g(v.PRIMARY),j(Q.DEACTIVATED),S(!u),O(!1),F(!1),(s=d==null?void 0:d.current)==null||s.search()}).catch(t=>{g(v.QUATERNARY),j(z(t)),S(!u)})),Be=()=>({...a},q.activate(a==null?void 0:a.uid).then(t=>{var s;g(v.PRIMARY),j(Q.ACTIVATED),S(!u),O(!1),F(!1),(s=d==null?void 0:d.current)==null||s.search()}).catch(t=>{g(v.QUATERNARY),j(z(t)),S(!u)})),Ie=()=>{const t={systemDate:a.systemDate,reason:a.reason,createdAt:a.createdAt,createdBy:a.createdBy,id:a.id,isActive:!1,requestId:a.requestId,uid:a.uid,updatedAt:a.updatedAt,updatedBy:a.updatedBy},s={...t,isActive:!0},i={name:a.displayName,operationType:de.UPDATE,entity:ne.STATIC_MASTER_TYPE,initialStateJson:G(t),finalStateJson:G(s),reasonForChange:a.reasons};return q.update(i,a==null?void 0:a.uid).then(n=>{var m;g(v.PRIMARY),j(Q.SENT_FOR_APPROVAL),S(!u),O(!1),F(!1),(m=d==null?void 0:d.current)==null||m.search()}).catch(n=>{g(v.QUATERNARY),j(z(n)),S(!u)})},be=()=>{const t={name:a==null?void 0:a.name,code:a.code,reason:a.reason,description:a.description,createdAt:a.createdAt,createdBy:a.createdBy,id:a.id,isActive:!0,requestId:a.requestId,uid:a.uid,updatedAt:a.updatedAt,updatedBy:a.updatedBy},s={...t,isActive:!1},i={name:a.displayName,operationType:de.UPDATE,entity:ne.STATIC_MASTER_TYPE,initialStateJson:G(t),finalStateJson:G(s),reasonForChange:a.reasons};return q.update(i,a==null?void 0:a.uid).then(n=>{var m;g(v.PRIMARY),j(Q.SENT_FOR_APPROVAL),S(!u),O(!1),F(!1),(m=d==null?void 0:d.current)==null||m.search()}).catch(n=>{g(v.QUATERNARY),j(z(n)),S(!u)})},ie=async t=>{let s=[];t.query.trim().length?(await rt.getAll(0,10,`name=${t.query}&`).then(i=>{i.status===200&&(s=[...i.data])}),s.length===0&&s.push({name:void 0,designation:void 0,emailId:void 0})):s=ye,Ae(s)},Me=()=>{var s,i,n,m;let t="";if(o.systemDate&&(t=`${t}description:lk=${o.systemDate}&`),o.createdFrom&&(console.log(o.createdFrom),t=`${t}createdAt:gt=${W(o.createdFrom)}&`),o.createdTo&&(t=`${t}createdAt:lt=${W(o.createdTo)}&`),o.updatedFrom&&(t=`${t}updatedAt:gt=${W(o.updatedFrom)}&`),o.updatedTo&&(t=`${t}updatedAt:lt=${W(o.updatedTo)}&`),o.isActive){let L=!0;o.isActive==="YES"?L=!0:o.isActive==="NO"&&(L=!1),t=`${t}isActive:lk=${L}&`}(s=o.createdBy)!=null&&s.id&&(t=`${t}&createdBy=${(i=o.createdBy)==null?void 0:i.id}&`),(n=o.updatedBy)!=null&&n.id&&(t=`${t}&updatedBy=${(m=o.updatedBy)==null?void 0:m.id}&`),x({...c,search:t})},Re=()=>{K({systemDate:"",createdFrom:"",createdTo:"",updatedFrom:"",updatedTo:"",isActive:"",createdBy:{name:"",id:""},updatedBy:{name:"",id:""}}),x({...c,search:""})},Ye=()=>{ue(!ee)},Oe=()=>{Z.navigate(`${ce}?mode=${le.CREATE}`)},Fe=()=>{const{systemDate:t,createdFrom:s,createdTo:i,updatedFrom:n,updatedTo:m,isActive:L,createdBy:We,updatedBy:Xe}=o;return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"p-3 flex flex-col gap-6 bg-primary-sapphireBlue-100 rounded-lg",children:[e.jsx("div",{className:"flex ",children:e.jsx(ct,{title:"text.masterData.types.search"})}),e.jsxs("div",{className:" grid grid-cols-1 md:grid-cols-4 gap-3",children:[e.jsx(J,{label:"input.systemDate.systemDate",name:"createdFrom",value:t,placeholder:"DD-MMM-YYYY",onChange:_}),e.jsx(lt,{label:"input.masterData.staticMaster.isActive",name:"isActive",variant:et.SECONDARY,options:tt,onChange:_,value:L}),e.jsx(J,{label:"input.masterData.staticMaster.createdFrom",name:"createdFrom",showTime:!0,value:s,placeholder:"DD-MMM-YYYY",onChange:_}),e.jsx(J,{showTime:!0,label:"input.masterData.staticMaster.createdTo",name:"createdTo",variant:V.PRIMARY,value:i,placeholder:"DD-MMM-YYYY",onChange:_}),e.jsx(pe,{label:"input.masterData.staticMaster.createdBy",name:"createdBy",field:"name",value:We,variant:V.PRIMARY,suggestions:ae,completeMethod:ie,onChange:re,itemTemplate:oe}),e.jsx(J,{showTime:!0,label:"input.masterData.staticMaster.updatedFrom",name:"updatedFrom",variant:V.PRIMARY,value:n,placeholder:"DD-MMM-YYYY",onChange:_}),e.jsx(J,{showTime:!0,label:"input.masterData.staticMaster.updatedTo",name:"updatedTo",variant:V.PRIMARY,value:m,placeholder:"DD-MMM-YYYY",onChange:_}),e.jsx(pe,{field:"name",label:"input.masterData.staticMaster.updatedBy",name:"updatedBy",variant:V.PRIMARY,value:Xe,suggestions:ae,completeMethod:ie,onChange:re,itemTemplate:oe}),e.jsxs("div",{className:"flex gap-5",children:[e.jsx(Y,{buttonType:I.RESET_OUTLINE,onClick:Re}),e.jsx(Y,{buttonType:I.SEARCH_OUTLINE,onClick:Me})]})]})]})})},oe=t=>t.name===void 0?e.jsxs("div",{className:"flex flex-col items-center justify-center h-39",children:[e.jsx("img",{src:st,alt:"search-icon",className:" h-7 w-7"}),e.jsx(H,{className:"text-primary-labelColor mt-2",label:"Loading..."})]}):e.jsx("div",{className:"flex flex-col",children:e.jsx(H,{className:"text-primary-labelColor",label:`${t.name}`})}),Pe=t=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left",children:`${at(t.date)}`})}),we=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"System Date"}),e.jsx("img",{src:l==null?b:l==!0?M:R,alt:"Sort Icon",onClick:je,className:"cursor-pointer"})]}),ke=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Description"}),e.jsx("img",{src:P==null?b:P==!0?M:R,alt:"Sort Icon",onClick:ge,className:"cursor-pointer"})]}),_e=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Created On"}),e.jsx("img",{src:C==null?b:C==!0?M:R,alt:"Sort Icon",onClick:Se,className:"cursor-pointer"})]}),$e=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Created By"}),e.jsx("img",{src:$==null?b:$==!0?M:R,alt:"Sort Icon",onClick:Ne,className:"cursor-pointer"})]}),Ue=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Updated On"}),e.jsx("img",{src:w==null?b:w==!0?M:R,alt:"Sort Icon",onClick:Te,className:"cursor-pointer"})]}),Le=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Updated By"}),e.jsx("img",{src:k==null?b:k==!0?M:R,alt:"Sort Icon",onClick:De,className:"cursor-pointer"})]}),He=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Is Current"}),e.jsx("img",{src:U==null?b:U==!0?M:R,alt:"Sort Icon",onClick:Ce,className:"cursor-pointer"})]}),Ve=t=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left",children:t.description})}),Je=t=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left",children:`${me(t.createdAt)}`})}),qe=t=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left",children:t.createdByUserName})}),Ke=t=>e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left",children:`${me(t.updatedAt)}`}),Qe=t=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left",children:t.updatedByUserName})}),ze=t=>e.jsx(e.Fragment,{children:t.isCurrent?e.jsxs("div",{className:"flex items-center ",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-primary-primaryBlue border-none"}),e.jsx("div",{className:"ml-2 ",children:"YES"})]}):e.jsxs("div",{className:"flex items-center ",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-secondary-gray-300 border-none"}),e.jsx("div",{className:"ml-2 ",children:"NO"})]})}),Ge=t=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex items-center ",children:e.jsx("div",{className:"w-4 h-4 flex items-center",children:e.jsx("img",{src:it,alt:"Sahayya Logo",className:"cursor-pointer",onClick:s=>{Z.navigate(`${ce}?mode=${le.VIEW}&uid=${t.uid}`)}})})})});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex w-full justify-between items-center",children:[e.jsx(H,{label:"heading.masterData.systemDate",className:"text-primary-ptext-1000 text-h2 font-bold flex"}),e.jsxs("div",{className:"flex gap-10",children:[e.jsx(Y,{buttonType:I.FILTER_OUTLINE,onClick:Ye}),e.jsx(Y,{buttonType:I.CREATE,className:"create-button",onClick:Oe})]})]}),ee&&Fe(),e.jsxs(nt,{standardDataFormatPromise:q.getAll,dataKey:"id",search:c.search,ref:d,children:[e.jsx(N,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:we,body:Pe}),e.jsx(N,{className:"text-primary-ptext-1000 text-left text-xs w-1/12  p-1 h-12 pl-6",header:ke,body:Ve}),e.jsx(N,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:He,body:ze}),e.jsx(N,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:_e,body:Je}),e.jsx(N,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:$e,body:qe}),e.jsx(N,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:Ue,body:Ke}),e.jsx(N,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:Le,body:Qe}),e.jsx(N,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:"Actions",body:Ge})]})]}),e.jsxs(ot,{onHide:B?()=>F(!1):()=>O(!1),visible:B?ve:xe,modal:!0,closable:!1,dismissableMask:!0,children:[e.jsx(H,{label:B?"dialog.staticMaster.activate":"dialog.staticMaster.deactivate",className:"text-primary-ptext-1000 text-base font-Roboto font-bold flex items-center justify-center"}),e.jsx(H,{label:B?"dialog.staticMaster.message.activate":"dialog.staticMaster.message",className:"text-primary-ptext-1000 text-xs font-Roboto flex mt text-center justify-center mx-2 mt-4"}),e.jsxs("div",{className:"flex justify-center mt-4",children:[e.jsx("div",{className:"mr-3",children:e.jsx(Y,{buttonType:I.CANCEL_OUTLINE,onClick:B?()=>F(!1):()=>O(!1)})}),e.jsx("div",{className:"mr-3",children:e.jsx(Y,{buttonType:I.SAVE_OUTLINE,onClick:B?()=>Be():()=>Ee()})}),e.jsx("div",{className:"",children:e.jsx(Y,{buttonType:I.SEND_FOR_APPROVAL,className:"approve-primary",onClick:B?()=>Ie():()=>be()})})]})]}),e.jsx(dt,{className:"w-20 bg-white font-Roboto text-xs text-primary-pText-1300 pt-2 rounded-lg mt-0.5 flex justify-center align-center shadow-autoCompletePanel",model:fe,ref:he}),e.jsx("div",{className:"",children:e.jsx(mt,{position:"bottom-right",ref:E,toastText:X,variant:se})})]})}const $t=Ze(pt);export{$t as default};
//# sourceMappingURL=PageSystemDate-ae54c695.js.map