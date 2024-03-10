import{w as Nt,r as i,aG as S,j as e,T as R,J as Y,aH as ae,ao as se,aI as fe,aJ as ye,aK as U,aR as Ae,aF as ge,o as T,az as St,aM as Tt,av as je,p as Ne,z as Ct,aN as re}from"./index-e8217573.js";import{s as C,a as M,b as E}from"./sortIcon-54357a29.js";import{e as Mt}from"./eye_icon-081bddb3.js";import{A as ce}from"./AutoComplete-0bca608a.js";import{B as F}from"./ButtonBox-9e46519a.js";import{D as ie}from"./DatePicker-b1c13861.js";import{D as Et}from"./Dialog-adadaf64.js";import{I as de}from"./InputBox-b9e88f52.js";import{M as bt}from"./MenuBox-defc36b0.js";import{R as Dt}from"./ReadOnlyTable-86accb69.js";import{S as It}from"./SectionTitle-9f9277ec.js";import{S as Bt}from"./SimpleDropDown-061a3470.js";import{T as Rt}from"./Toast-ae99ea5b.js";import{C as j}from"./column.esm-938bad7d.js";import{S as z}from"./StaticMasterDataService-689a6eca.js";import{S as Yt}from"./StaticMasterTypeService-480bff1a.js";import"./search_icon-459d6871.js";import"./withAuth-6de36ebf.js";import"./virtualscroller.esm-9939945c.js";import"./kebab-menu-8835ad2e.js";import"./No_data-1720c54e.js";import"./datatable.esm-f474a654.js";import"./paginator.esm-11c2c115.js";import"./TransitionGroup-c8afe0ce.js";function Ft(le){const[me,Se]=i.useState(!1),[Te,O]=i.useState(!1),[Ce,P]=i.useState(!1),[m,pe]=i.useState({}),[H,p]=i.useState(void 0),[V,x]=i.useState(void 0),[J,v]=i.useState(void 0),[q,u]=i.useState(void 0),[_,h]=i.useState(void 0),[G,f]=i.useState(void 0),[K,y]=i.useState(void 0),[Q,A]=i.useState(void 0),[X,g]=i.useState(void 0),k=i.useRef(null),[oe,b]=i.useState(""),[xe,D]=i.useState(S.PRIMARY),[N,I]=i.useState(!1),[$,ve]=i.useState(!1),[r,Z]=i.useState({staticMasterType:{name:""},name:"",code:"",description:"",createdFrom:"",createdTo:"",updatedFrom:"",updatedTo:"",isActive:"",createdBy:{name:"",id:""},updatedBy:{name:"",id:""}});i.useState({title:"",id:"",userId:"",completed:"",concept:"",application:"",emailId:""});const[c,d]=i.useState({limit:10,loading:!1,totalRecords:0,start:0,search:"",runCustomQuery:!1,records:[]}),ee=i.useRef(null),[Me,Ee]=i.useState([{items:[{label:"Activate",className:""},{label:"Deactivate",className:""}]}]),be=(t,a)=>{var w;console.log("rowData=",t);const s={label:"label.common.deactivate",command:()=>{Ye(t)}},o={label:"label.common.active",command:()=>{Re(t)}},L=[{items:[t.isActive?s:o]}];Ee(L),(w=ee==null?void 0:ee.current)==null||w.toggle(a)},[te,De]=i.useState([{name:"Shivam Soni",designation:"Credit, Manager, Karnataka",emailId:"Shivamsoni@sahayya.com"},{name:"Shiva Prakash",designation:"Executive, Chief Executive Officer, Karnataka",emailId:"shiva.prakash@sahayya.com"},{name:"Rohith Balakrishnan",designation:"Head, Country Head, Karnataka",emailId:"Rohith.balakrishnan@sahayya.com"}]),[Ie,Be]=i.useState(),n=i.useRef(null);i.useEffect(()=>{var t;(t=n==null?void 0:n.current)==null||t.search()},[c==null?void 0:c.search]),i.useEffect(()=>{var t;k!=null&&k.current&&oe!==""&&((t=k==null?void 0:k.current)==null||t.showFunction())},[oe,xe,N]);const ne=t=>{const{name:a,value:s}=t.target;Z(typeof s=="object"?o=>({...o,[a]:{name:`${s==null?void 0:s.name} ${s!=null&&s.lastName?s==null?void 0:s.lastName:""}`.trim(),id:s.userId}}):o=>({...o,[a]:s}))},B=t=>{const{name:a,value:s}=t.target;Z(o=>({...o,[a]:s}))},Re=t=>{pe({...t}),P(!0),ve(!0)},Ye=t=>{pe({...t}),O(!0),ve(!1)},Fe=t=>{let a="";J||J==null?(a='sort={"staticMasterType.name" : "DESC"}&',v(!1)):(a='sort={"staticMasterType.name": "ASC"}&',v(!J)),p(void 0),x(void 0),u(void 0),h(void 0),f(void 0),g(void 0),y(void 0),A(void 0),d({...c,search:a})},Oe=t=>{let a="";H||H==null?(a='sort={"name":"DESC"}&',p(!1)):(a='sort={"name":"ASC"}&',p(!H)),v(void 0),x(void 0),u(void 0),h(void 0),f(void 0),g(void 0),y(void 0),A(void 0),d({...c,search:a})},Pe=t=>{let a="";V||V==null?(a='sort={"code":"DESC"}&',x(!1)):(a='sort={"code":"ASC"}&',x(!V)),d({...c,search:a}),v(void 0),p(void 0),u(void 0),h(void 0),f(void 0),g(void 0),y(void 0),A(void 0)},ke=t=>{let a="";q||q==null?(a='sort={"description":"DESC"}&',u(!1)):(a='description={"name":"ASC"}&',u(!q)),d({...c,search:a}),v(void 0),p(void 0),x(void 0),h(void 0),f(void 0),g(void 0),y(void 0),A(void 0)},$e=t=>{let a="";_||_==null?(a='sort={"createdAt":"DESC"}&',h(!1)):(a='sort={"createdAt":"ASC"}&',h(!_)),v(void 0),p(void 0),x(void 0),u(void 0),f(void 0),g(void 0),y(void 0),A(void 0),d({...c,search:a})},we=t=>{let a="";G||G==null?(a='sort={"createdBy":"DESC"}&',f(!1)):(a='sort={"createdBy":"ASC"}&',f(!_)),v(void 0),p(void 0),x(void 0),u(void 0),h(void 0),g(void 0),y(void 0),A(void 0),d({...c,search:a})},_e=t=>{let a="";K||K==null?(a='sort={"updatedAt":"DESC"}&',y(!1)):(a='sort={"updatedAt":"ASC"}&',y(!K)),v(void 0),p(void 0),x(void 0),u(void 0),h(void 0),f(void 0),g(void 0),A(void 0),d({...c,search:a})},Le=t=>{let a="";X||X==null?(a='sort={"isActive":"DESC"}&',g(!1)):(a='sort={"isActive":"ASC"}&',g(!0)),v(void 0),p(void 0),x(void 0),u(void 0),h(void 0),f(void 0),y(void 0),A(void 0),d({...c,search:a})},Ue=t=>{let a="";Q||Q==null?(a='sort={"updatedBy":"DESC"}&',A(!1)):(a='sort={"updatedBy":"ASC"}&',A(!Q)),v(void 0),p(void 0),x(void 0),u(void 0),h(void 0),f(void 0),g(void 0),y(void 0),d({...c,search:a})},He=()=>z.Inactivate(m==null?void 0:m.uid).then(t=>{var a;D(S.PRIMARY),b(ae.DEACTIVATED),I(!N),O(!1),P(!1),(a=n==null?void 0:n.current)==null||a.search()}).catch(t=>{D(S.QUATERNARY),b(se(t)),I(!N)}),Ve=()=>z.activate(m==null?void 0:m.uid).then(t=>{var a;D(S.PRIMARY),b(ae.ACTIVATED),I(!N),O(!1),P(!1),(a=n==null?void 0:n.current)==null||a.search()}).catch(t=>{D(S.QUATERNARY),b(se(t)),I(!N)}),Je=()=>{const t={...m},a={...t,isActive:!0},s={name:m.name,operationType:fe.UPDATE,entity:ye.STATIC_MASTER_DATA,initialStateJson:U(t),finalStateJson:U(a),reqPayload:U(a),reasonForChange:"Activate"};return z.approve(s).then(o=>{var l;D(S.PRIMARY),b(ae.SENT_FOR_APPROVAL),I(!N),O(!1),P(!1),(l=n==null?void 0:n.current)==null||l.search()}).catch(o=>{D(S.QUATERNARY),b(se(o)),I(!N)})},qe=()=>{const t={...m},a={...t,isActive:!1},s={name:m.name,operationType:fe.UPDATE,entity:ye.STATIC_MASTER_DATA,initialStateJson:U(t),finalStateJson:U(a),reasonForChange:"Deactivate",reqPayload:U(a)};return z.approve(s).then(o=>{var l;D(S.PRIMARY),b(ae.SENT_FOR_APPROVAL),I(!N),O(!1),P(!1),(l=n==null?void 0:n.current)==null||l.search()}).catch(o=>{D(S.QUATERNARY),b(se(o)),I(!N)})},Ke=async t=>{let a=[];t.query.trim().length?(await Yt.getAll(0,10,`name:lk=${t.query}&`).then(s=>{s.status===200&&(a=[...s.data.results])}),a.length===0&&a.push({name:void 0,designation:void 0,emailId:void 0})):a=te,Be(a)},ue=async t=>{let a=[];t.query.trim().length?(await Ct.getAll(0,10,`name=${t.query}&`).then(s=>{s.status===200&&(a=[...s.data])}),a.length===0&&a.push({name:void 0,designation:void 0,emailId:void 0})):a=te,De(a)},Qe=()=>{var a,s,o,l,L,w;let t="";if((a=r==null?void 0:r.staticMasterType)!=null&&a.name&&(t=`${t}staticMasterType.name:lk=${(s=r==null?void 0:r.staticMasterType)==null?void 0:s.name}&`),r.name&&(t=`${t}name:lk=${r.name}&`),r.code&&(t=`${t}code:lk=${r.code}&`),r.description&&(t=`${t}description:lk=${r.description}&`),r.createdFrom&&(console.log(r.createdFrom),t=`${t}createdAt:gt=${re(r.createdFrom)}&`),r.createdTo&&(t=`${t}createdAt:lt=${re(r.createdTo)}&`),r.updatedFrom&&(t=`${t}updatedAt:gt=${re(r.updatedFrom)}&`),r.updatedTo&&(t=`${t}updatedAt:lt=${re(r.updatedTo)}&`),r.isActive){let W=!0;r.isActive==="YES"?W=!0:r.isActive==="NO"&&(W=!1),t=`${t}isActive:lk=${W}&`}(o=r.createdBy)!=null&&o.id&&(t=`${t}&createdBy=${(l=r.createdBy)==null?void 0:l.id}&`),(L=r.updatedBy)!=null&&L.id&&(t=`${t}&updatedBy=${(w=r.updatedBy)==null?void 0:w.id}&`),d({...c,search:t})},We=()=>{Z({staticMasterType:{name:""},name:"",code:"",description:"",createdFrom:"",createdTo:"",updatedFrom:"",updatedTo:"",isActive:"",createdBy:{name:"",id:""},updatedBy:{name:"",id:""}}),d({...c,search:""})},ze=()=>{Se(!me)},Ge=()=>{le.navigate(`${Ae}?mode=${ge.CREATE}`)},Xe=()=>{const{staticMasterType:t,name:a,code:s,description:o,createdFrom:l,createdTo:L,updatedFrom:w,updatedTo:W,isActive:At,createdBy:gt,updatedBy:jt}=r;return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"p-3 flex flex-col gap-6 bg-primary-sapphireBlue-100 rounded-lg",children:[e.jsx("div",{className:"flex ",children:e.jsx(It,{title:"text.masterData.types.search"})}),e.jsxs("div",{className:" grid grid-cols-1 md:grid-cols-4 gap-3",children:[e.jsx(ce,{label:"input.staticMaster.data.masterType",name:"staticMasterType",field:"name",value:t,variant:T.PRIMARY,suggestions:Ie,completeMethod:Ke,onChange:ne,itemTemplate:Ze}),e.jsx(de,{label:"input.masterData.staticMaster.displayNameFilter",name:"name",variant:T.SECONDARY,onChange:B,value:a}),e.jsx(de,{label:"input.masterData.staticMaster.systemCodeFilter",name:"code",variant:T.SECONDARY,onChange:B,value:s}),e.jsx(de,{label:"input.masterData.staticMaster.description",name:"description",variant:T.SECONDARY,onChange:B,value:o}),e.jsx(Bt,{label:"input.masterData.staticMaster.isActive",name:"isActive",variant:St.SECONDARY,options:Tt,onChange:B,value:At}),e.jsx(ie,{label:"input.masterData.staticMaster.createdFrom",name:"createdFrom",showTime:!0,value:l,placeholder:"DD-MMM-YYYY",onChange:B}),e.jsx(ie,{showTime:!0,label:"input.masterData.staticMaster.createdTo",name:"createdTo",variant:T.PRIMARY,value:L,placeholder:"DD-MMM-YYYY",onChange:B}),e.jsx(ce,{label:"input.masterData.staticMaster.createdBy",name:"createdBy",field:"name",value:gt,variant:T.PRIMARY,suggestions:te,completeMethod:ue,onChange:ne,itemTemplate:he}),e.jsx(ie,{showTime:!0,label:"input.masterData.staticMaster.updatedFrom",name:"updatedFrom",variant:T.PRIMARY,value:w,placeholder:"DD-MMM-YYYY",onChange:B}),e.jsx(ie,{showTime:!0,label:"input.masterData.staticMaster.updatedTo",name:"updatedTo",variant:T.PRIMARY,value:W,placeholder:"DD-MMM-YYYY",onChange:B}),e.jsx(ce,{field:"name",label:"input.masterData.staticMaster.updatedBy",name:"updatedBy",variant:T.PRIMARY,value:jt,suggestions:te,completeMethod:ue,onChange:ne,itemTemplate:he}),e.jsxs("div",{className:"flex gap-5",children:[e.jsx(F,{buttonType:Y.RESET_OUTLINE,onClick:We}),e.jsx(F,{buttonType:Y.SEARCH_OUTLINE,onClick:Qe})]})]})]})})},Ze=t=>t.name===void 0?e.jsxs("div",{className:"flex flex-col items-center justify-center h-39",children:[e.jsx("img",{src:je,alt:"search-icon",className:" h-7 w-7"}),e.jsx(R,{className:"text-primary-labelColor mt-2",label:"Loading..."})]}):e.jsxs("div",{className:"flex flex-col",children:[e.jsx(R,{className:"text-primary-labelColor",label:`${t.name}`}),e.jsx(R,{className:"text-secondary-gray-500 text-xxs",label:t.code})]}),he=t=>t.name===void 0?e.jsxs("div",{className:"flex flex-col items-center justify-center h-39",children:[e.jsx("img",{src:je,alt:"search-icon",className:" h-7 w-7"}),e.jsx(R,{className:"text-primary-labelColor mt-2",label:"Loading..."})]}):e.jsx("div",{className:"flex flex-col",children:e.jsx(R,{className:"text-primary-labelColor",label:`${t.name}`})}),et=t=>{var a,s;return e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left truncate",title:(a=t==null?void 0:t.staticMasterType)==null?void 0:a.name,children:(s=t==null?void 0:t.staticMasterType)==null?void 0:s.name})})},tt=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Static Master Type"}),e.jsx("img",{src:J==null?C:J==!0?M:E,alt:"Sort Icon",onClick:Fe,className:"cursor-pointer"})]}),at=t=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left max-w-xs w-35 truncate",title:t.name,children:t.name})}),st=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Display Name"}),e.jsx("img",{src:H==null?C:H==!0?M:E,alt:"Sort Icon",onClick:Oe,className:"cursor-pointer"})]}),rt=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"System Code"}),e.jsx("img",{src:V==null?C:V==!0?M:E,alt:"Sort Icon",onClick:Pe,className:"cursor-pointer"})]}),it=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Description"}),e.jsx("img",{src:q==null?C:q==!0?M:E,alt:"Sort Icon",onClick:ke,className:"cursor-pointer"})]}),ot=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Created On"}),e.jsx("img",{src:_==null?C:_==!0?M:E,alt:"Sort Icon",onClick:$e,className:"cursor-pointer"})]}),nt=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Created By"}),e.jsx("img",{src:G==null?C:G==!0?M:E,alt:"Sort Icon",onClick:we,className:"cursor-pointer"})]}),ct=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Updated On"}),e.jsx("img",{src:K==null?C:K==!0?M:E,alt:"Sort Icon",onClick:_e,className:"cursor-pointer"})]}),dt=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Updated By"}),e.jsx("img",{src:Q==null?C:Q==!0?M:E,alt:"Sort Icon",onClick:Ue,className:"cursor-pointer"})]}),lt=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Is Active"}),e.jsx("img",{src:X==null?C:X==!0?M:E,alt:"Sort Icon",onClick:Le,className:"cursor-pointer"})]}),mt=t=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left max-w-xs w-35 truncate",children:t.code})}),pt=t=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left w-35 truncate",title:t.description,children:t.description})}),xt=t=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left w-35 truncate",children:`${Ne(t.createdAt)}`})}),vt=t=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left truncate",children:t.createdByUserName})}),ut=t=>e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left truncate",children:`${Ne(t.updatedAt)}`}),ht=t=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left truncate",children:t.updatedByUserName})}),ft=t=>e.jsx(e.Fragment,{children:t.isActive?e.jsxs("div",{className:"flex items-center ",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-primary-primaryBlue border-none"}),e.jsx("div",{className:"ml-2 ",children:"YES"})]}):e.jsxs("div",{className:"flex items-center ",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-secondary-gray-300 border-none"}),e.jsx("div",{className:"ml-2 ",children:"NO"})]})}),yt=t=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex items-center ",children:[e.jsx("div",{className:"w-4 h-4 flex items-center",children:e.jsx("img",{src:Mt,alt:"Sahayya Logo",className:"cursor-pointer",onClick:a=>{le.navigate(`${Ae}?mode=${ge.VIEW}&uid=${t.uid}`)}})}),e.jsx("div",{className:"ml ",children:e.jsx(F,{buttonType:Y.MENU,onClick:a=>{be(t,a)},className:"!rounded-none bg-transparent !hover:bg-primary-gray-300"})})]})});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex w-full justify-between items-center",children:[e.jsx(R,{label:"heading.masterData.data",className:"text-primary-ptext-1000 text-h2 font-bold flex"}),e.jsxs("div",{className:"flex gap-10",children:[e.jsx(F,{buttonType:Y.FILTER_OUTLINE,onClick:ze}),e.jsx(F,{buttonType:Y.CREATE,className:"create-button",onClick:Ge})]})]}),me&&Xe(),e.jsxs(Dt,{standardDataFormatPromise:z.getAll,dataKey:"id",search:c.search,ref:n,children:[e.jsx(j,{className:"text-primary-ptext-1000 text-left text-xs w-2/12  p-1 h-12 pl-6",header:tt,body:et}),e.jsx(j,{className:"text-primary-ptext-1000 text-left text-xs w-2/12 p-1 h-12 pl-6",header:st,body:at}),e.jsx(j,{className:"text-primary-ptext-1000 text-left text-xs w-2/12 p-1 h-12 pl-6",header:rt,body:mt}),e.jsx(j,{className:"text-primary-ptext-1000 text-left text-xs w-2/12  p-1 h-12 pl-6",header:it,body:pt}),e.jsx(j,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:lt,body:ft}),e.jsx(j,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:ot,body:xt}),e.jsx(j,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:nt,body:vt}),e.jsx(j,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:ct,body:ut}),e.jsx(j,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:dt,body:ht}),e.jsx(j,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:"Actions",body:yt})]})]}),e.jsxs(Et,{onHide:$?()=>P(!1):()=>O(!1),visible:$?Ce:Te,modal:!0,closable:!1,dismissableMask:!0,children:[e.jsx(R,{label:$?"dialog.staticMaster.activate":"dialog.staticMaster.deactivate",className:"text-primary-ptext-1000 text-base font-Roboto font-bold flex items-center justify-center"}),e.jsx(R,{label:$?"dialog.staticMaster.message.activate":"dialog.staticMaster.message",className:"text-primary-ptext-1000 text-xs font-Roboto flex mt text-center justify-center mx-2 mt-4"}),e.jsxs("div",{className:"flex justify-center mt-4",children:[e.jsx("div",{className:"mr-3",children:e.jsx(F,{buttonType:Y.CANCEL_OUTLINE,onClick:$?()=>P(!1):()=>O(!1)})}),e.jsx("div",{className:"mr-3",children:e.jsx(F,{buttonType:Y.SAVE_OUTLINE,onClickWithLoader:$?()=>Ve():()=>He()})}),e.jsx("div",{className:"",children:e.jsx(F,{buttonType:Y.SEND_FOR_APPROVAL,className:"approve-primary",onClickWithLoader:$?()=>Je():()=>qe()})})]})]}),e.jsx(bt,{className:"w-20 bg-white font-Roboto text-xs text-primary-pText-1300 pt-2 rounded-lg mt-0.5 flex justify-center align-center shadow-autoCompletePanel",model:Me,ref:ee}),e.jsx("div",{className:"",children:e.jsx(Rt,{position:"bottom-right",ref:k,toastText:oe,variant:xe})})]})}const ia=Nt(Ft);export{ia as default};
//# sourceMappingURL=PageStaticMasterData-dcd042f8.js.map
