import{w as jt,r as s,aG as g,j as e,T as k,J as b,ao as q,aI as pe,aJ as ue,aK as H,aH as xe,a_ as ve,aF as he,o as I,az as gt,aM as At,av as Tt,p as fe,aN as G}from"./index-e8217573.js";import{e as Nt}from"./eye_icon-081bddb3.js";import{s as B,a as D,b as P}from"./sortIcon-54357a29.js";import{A as ye}from"./AutoComplete-0bca608a.js";import{B as M}from"./ButtonBox-9e46519a.js";import{D as z}from"./DatePicker-b1c13861.js";import{D as St}from"./Dialog-adadaf64.js";import{I as Ct}from"./InputBox-b9e88f52.js";import{M as Et}from"./MenuBox-defc36b0.js";import{R as bt}from"./ReadOnlyTable-86accb69.js";import{S as ee}from"./SimpleDropDown-061a3470.js";import{T as It}from"./Toast-ae99ea5b.js";import{C as A}from"./column.esm-938bad7d.js";import{P as te}from"./ProductConfigProductService-51cfb6b7.js";import{S as je}from"./StaticMasterTypeService-480bff1a.js";import{S as Bt}from"./SectionTitle-9f9277ec.js";import{S as ge}from"./StaticMasterDataService-689a6eca.js";import"./search_icon-459d6871.js";import"./withAuth-6de36ebf.js";import"./virtualscroller.esm-9939945c.js";import"./kebab-menu-8835ad2e.js";import"./No_data-1720c54e.js";import"./datatable.esm-f474a654.js";import"./paginator.esm-11c2c115.js";import"./TransitionGroup-c8afe0ce.js";function Dt(ae){const[se,Ae]=s.useState(!1),[Te,R]=s.useState(!1),[Ne,O]=s.useState(!1),[n,re]=s.useState({}),[w,x]=s.useState(void 0),[_,l]=s.useState(void 0),[V,v]=s.useState(void 0),[Y,m]=s.useState(void 0),[J,T]=s.useState(void 0),[$,h]=s.useState(void 0),[U,f]=s.useState(void 0),[K,y]=s.useState(void 0),[Se,Ce]=s.useState([]),[Ee,be]=s.useState([]),L=s.useRef(null),[X,N]=s.useState(""),[oe,S]=s.useState(g.PRIMARY),[F,ie]=s.useState(!1),[j,C]=s.useState(!1),[r,ne]=s.useState({name:"",productType:"",loanType:"",createdFrom:"",createdTo:"",updatedFrom:"",updatedTo:"",isActive:"",createdBy:"",updatedBy:""});s.useState({title:"",id:"",userId:"",completed:"",concept:"",application:"",emailId:""});const[i,p]=s.useState({limit:10,loading:!1,totalRecords:0,start:0,search:"",runCustomQuery:!1,records:[]}),Q=s.useRef(null),[Ie,Be]=s.useState([{items:[{label:"Activate",className:""},{label:"Deactivate",className:""}]}]),De=(t,a)=>{var W;const c={label:"Deactivate",command:()=>{He(t)}},d={label:"Activate",command:()=>{Ue(t)}},Z=[{items:[t.isActive?c:d]}];Be(Z),(W=Q==null?void 0:Q.current)==null||W.toggle(a)},[ce,Pt]=s.useState([{name:"Shivam Soni",designation:"Credit, Manager, Karnataka",emailId:"Shivamsoni@sahayya.com"},{name:"Shiva Prakash",designation:"Executive, Chief Executive Officer, Karnataka",emailId:"shiva.prakash@sahayya.com"},{name:"Rohith Balakrishnan",designation:"Head, Country Head, Karnataka",emailId:"Rohith.balakrishnan@sahayya.com"}]),[de,Pe]=s.useState([{name:"Shivam Soni",designation:"Credit, Manager, Karnataka",emailId:"Shivamsoni@sahayya.com"},{name:"Shiva Prakash",designation:"Executive, Chief Executive Officer, Karnataka",emailId:"shiva.prakash@sahayya.com"},{name:"Rohith Balakrishnan",designation:"Head, Country Head, Karnataka",emailId:"Rohith.balakrishnan@sahayya.com"}]),o=s.useRef(null);s.useEffect(()=>{var t;(t=o==null?void 0:o.current)==null||t.search()},[i==null?void 0:i.search]),s.useEffect(()=>{var t;L!=null&&L.current&&X!==""&&((t=L==null?void 0:L.current)==null||t.showFunction())},[X,oe,j]),s.useEffect(()=>{Me(),Re()},[]);const Me=()=>{ge.getAll(0,10,"staticMasterType.code=PRODUCT_NAME").then(t=>{Ce([...t.data.results])}).catch(t=>{console.log("err")})},Re=()=>{ge.getAll(0,10,"staticMasterType.code=LOAN_TYPE").then(t=>{be([...t.data.results])}).catch(t=>{console.log(t)})},u=t=>{const{name:a,value:c}=t.target;ne(d=>({...d,[a]:c}))},Oe=t=>{let a="";w||w==null?a='&sort={"name":"ASC"}':a='&sort={"name":"DESC"}',w==null?x(!1):x(!w),l(void 0),v(void 0),m(void 0),T(void 0),y(void 0),h(void 0),f(void 0),p({...i,search:a})},Ye=t=>{let a="";_?a='&sort={"productType":{"name" : "ASC"}}':a='&sort={"productType":{"name" : "DESC"}}',_==null?l(!1):l(!_),l(!_),x(void 0),v(void 0),m(void 0),T(void 0),y(void 0),h(void 0),f(void 0),p({...i,search:a})},Le=t=>{let a="";V?a='&sort={"loanType":{"name" : "ASC"}}':a='&sort={"loanType":{"name" : "DESC"}}',V==null?v(!1):v(!V),x(void 0),l(void 0),m(void 0),T(void 0),y(void 0),h(void 0),f(void 0),p({...i,search:a})},Fe=t=>{let a="";Y||Y==null?a='&sort={"createdAt":"ASC"}':a='&sort={"createdAt":"DESC"}',Y==null?m(!1):m(!Y),x(void 0),l(void 0),v(void 0),T(void 0),y(void 0),h(void 0),f(void 0),p({...i,search:a})},ke=t=>{let a="";J||J==null?a='&sort={"createdBy":"ASC"}':a='&sort={"createdBy":"DESC"}',J==null?T(!1):m(!Y),x(void 0),l(void 0),v(void 0),m(void 0),y(void 0),h(void 0),f(void 0),p({...i,search:a})},we=t=>{let a="";$||$==null?a='&sort={"updatedAt":"ASC"}':a='&sort={"updatedAt":"DESC"}',$==null?h(!1):h(!$),x(void 0),l(void 0),v(void 0),m(void 0),y(void 0),T(void 0),f(void 0),p({...i,search:a})},_e=t=>{let a="";K||K==null?a='&sort={"isActive":"ASC"}':a='&sort={"isActive":"DESC"}',K==null?y(!1):y(!0),x(void 0),l(void 0),v(void 0),m(void 0),h(void 0),T(void 0),f(void 0),p({...i,search:a})},$e=t=>{let a="";U||U==null?a='&sort={"updatedBy":"ASC"}':a='&sort={"updatedBy":"DESC"}',U==null?f(!1):f(!U),x(void 0),l(void 0),v(void 0),m(void 0),h(void 0),T(void 0),y(void 0),p({...i,search:a})},Ue=t=>{re({...t}),O(!0),ie(!0)},He=t=>{re({...t}),R(!0),ie(!1)},Ve=()=>te.Inactivate(n==null?void 0:n.uid).then(t=>{var a;S(g.PRIMARY),N("Deactivated Successfully"),C(!j),R(!1),O(!1),(a=o==null?void 0:o.current)==null||a.search()}).catch(t=>{S(g.QUATERNARY),N(q(t)),C(!j)}),Je=()=>({...n},te.activate(n==null?void 0:n.uid).then(t=>{var a;S(g.PRIMARY),N("Activated Successfully"),C(!j),R(!1),O(!1),(a=o==null?void 0:o.current)==null||a.search()}).catch(t=>{S(g.QUATERNARY),N(q(t)),C(!j)})),Ke=()=>{const t={...n},a={...t,isActive:!0},c={name:n.name,operationType:pe.ACTIVE,entity:ue.PRODUCT,initialStateJson:H(t),finalStateJson:H(a),reqPayload:H(a),reasonForChange:"Activate"};return je.approve(c).then(d=>{var E;S(g.PRIMARY),N(xe.SENT_FOR_APPROVAL),C(!j),R(!1),O(!1),(E=o==null?void 0:o.current)==null||E.search()}).catch(d=>{S(g.QUATERNARY),N(q(d)),C(!j)})},Qe=()=>{console.log(n);const t={...n},a={...t,isActive:!1},c={name:n.name,operationType:pe.INACTIVE,entity:ue.PRODUCT,initialStateJson:H(t),reqPayload:H(a),finalStateJson:H(a),reasonForChange:"Deactivate"};return je.approve(c).then(d=>{var E;S(g.PRIMARY),N(xe.SENT_FOR_APPROVAL),C(!j),R(!1),O(!1),(E=o==null?void 0:o.current)==null||E.search()}).catch(d=>{S(g.QUATERNARY),N(q(d)),C(!j)})},We=()=>{let t="";if(r.name&&(t=`&${t}name:lk=${r.name}`),r.productType&&(t=`&${t}productType.name:lk=${r.productType}`),r.loanType&&(t=`&${t}loanType.name:lk=${r.loanType}`),r.createdFrom&&(console.log(r.createdFrom),t=`&${t}createdAt:gt=${G(r.createdFrom)}`),r.createdTo&&(t=`&${t}createdAt:lt=${G(r.createdTo)}`),r.updatedFrom&&(t=`&${t}updatedAt:gt=${G(r.updatedFrom)}`),r.updatedTo&&(t=`&${t}updatedAt:lt=${G(r.updatedTo)}`),r.isActive){let a=!0;r.isActive==="YES"?a=!0:r.isActive==="NO"&&(a=!1),t=`&${t}isActive:lk=${a}`}r.createdBy&&(t=`&${t}&createdBy=${r.createdBy}`),r.updatedBy&&(t=`&${t}&updatedBy=${r.updatedBy}`),p({...i,search:t})},le=t=>{let a=[];t.query.trim().length?(a=ce.filter(c=>{if(c.name)return c.name.toLowerCase().startsWith(t.query.toLowerCase())}),a.length===0&&a.push({name:void 0,designation:void 0,emailId:void 0})):a=ce,Pe(a)},qe=()=>{Ae(!se)},Ge=()=>{ae.navigate(`${ve}?mode=${he.CREATE}`)},ze=()=>{ne({name:"",productType:"",loanType:"",createdFrom:"",createdTo:"",updatedFrom:"",updatedTo:"",isActive:"",createdBy:"",updatedBy:""}),p({...i,search:""})},Xe=()=>{const{name:t,productType:a,loanType:c,createdFrom:d,createdTo:E,updatedFrom:Z,updatedTo:W,isActive:ht,createdBy:ft,updatedBy:yt}=r;return e.jsx(e.Fragment,{children:e.jsxs("div",{className:" p-3 flex flex-col gap-6 bg-primary-sapphireBlue-100 rounded-lg",children:[e.jsx("div",{className:"flex",children:e.jsx(Bt,{title:"text.masterData.types.search"})}),e.jsxs("div",{className:" grid grid-cols-1 md:grid-cols-4 gap-3",children:[e.jsx("div",{className:"",children:e.jsx(Ct,{label:"label.productConfiguration.products.productShortNameFilter",name:"name",variant:I.SECONDARY,onChange:u,value:t})}),e.jsx("div",{className:"",children:e.jsx(ee,{label:"input.masterData.productConfiguration.productTypeFilter",name:"productType",variant:I.SECONDARY,onChange:u,value:a,options:Se,optionLabel:"name",optionValue:"name"})}),e.jsx("div",{className:"",children:e.jsx(ee,{label:"input.masterData.productConfiguration.loanTypeFilter",name:"loanType",variant:I.SECONDARY,onChange:u,value:c,options:Ee,optionLabel:"name",optionValue:"name"})}),e.jsx("div",{className:"",children:e.jsx(ee,{label:"input.masterData.staticMaster.isActive",name:"isActive",variant:gt.SECONDARY,options:At,onChange:u,value:ht})}),e.jsx("div",{className:"",children:e.jsx(z,{label:"input.masterData.staticMaster.createdFrom",name:"createdFrom",placeholder:"DD-MMM-YYYY",showTime:!0,value:d,onChange:u})}),e.jsx("div",{className:"",children:e.jsx(z,{showTime:!0,label:"input.masterData.staticMaster.createdTo",name:"createdTo",placeholder:"DD-MMM-YYYY",variant:I.PRIMARY,value:E,onChange:u})}),e.jsx("div",{className:"col-span-1",children:e.jsx(ye,{label:"input.masterData.staticMaster.createdBy",name:"createdBy",field:"name",value:ft,variant:I.PRIMARY,suggestions:de,completeMethod:le,onChange:u,itemTemplate:me})}),e.jsx("div",{className:"",children:e.jsx(z,{showTime:!0,label:"input.masterData.staticMaster.updatedFrom",name:"updatedFrom",placeholder:"DD-MMM-YYYY",variant:I.PRIMARY,value:Z,onChange:u})}),e.jsx("div",{className:"",children:e.jsx(z,{showTime:!0,label:"input.masterData.staticMaster.updatedTo",name:"updatedTo",placeholder:"DD-MMM-YYYY",variant:I.PRIMARY,value:W,onChange:u})}),e.jsx("div",{className:"col-span-1",children:e.jsx(ye,{field:"name",label:"input.masterData.staticMaster.updatedBy",name:"updatedBy",variant:I.PRIMARY,value:yt,suggestions:de,completeMethod:le,onChange:u,itemTemplate:me})}),e.jsx("div",{children:e.jsxs("div",{className:"flex  justify-start mb-2",children:[e.jsx("div",{className:"mr-5",children:e.jsx(M,{buttonType:b.RESET_OUTLINE,onClick:ze})}),e.jsx("div",{children:e.jsx(M,{buttonType:b.SEARCH_OUTLINE,onClick:We})})]})})]})]})})},me=t=>t.name===void 0?e.jsxs("div",{className:"flex flex-col items-center justify-center h-39",children:[e.jsx("img",{src:Tt,alt:"search-icon",className:" h-7 w-7"}),e.jsx(k,{className:"text-primary-labelColor mt-2",label:"Loading..."})]}):e.jsxs("div",{className:"flex flex-col",children:[e.jsx(k,{className:"text-primary-labelColor",label:t.name}),e.jsx(k,{className:"text-secondary-gray-500 text-xxs",label:t.designation}),e.jsx(k,{className:"text-secondary-gray-500 text-xxs",label:t.emailId})]}),Ze=t=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left truncate",children:t.name})}),et=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-3",children:"Product Short Name"}),e.jsx("img",{src:w==null?B:w==!0?D:P,alt:"Sort Icon",onClick:Oe,className:"cursor-pointer"})]}),tt=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Product Type"}),e.jsx("img",{src:_==null?B:_==!0?D:P,alt:"Sort Icon",onClick:Ye,className:"cursor-pointer"})]}),at=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Loan Type"}),e.jsx("img",{src:V==null?B:V==!0?D:P,alt:"Sort Icon",onClick:Le,className:"cursor-pointer"})]}),st=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Created On"}),e.jsx("img",{src:Y==null?B:Y==!0?D:P,alt:"Sort Icon",onClick:Fe,className:"cursor-pointer"})]}),rt=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Created By"}),e.jsx("img",{src:J==null?B:J==!0?D:P,alt:"Sort Icon",onClick:ke,className:"cursor-pointer"})]}),ot=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Updated On"}),e.jsx("img",{src:$==null?B:$==!0?D:P,alt:"Sort Icon",onClick:we,className:"cursor-pointer"})]}),it=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Updated By"}),e.jsx("img",{src:U==null?B:U==!0?D:P,alt:"Sort Icon",onClick:$e,className:"cursor-pointer"})]}),nt=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Is Active"}),e.jsx("img",{src:K==null?B:K==!0?D:P,alt:"Sort Icon",onClick:_e,className:"cursor-pointer"})]}),ct=t=>{var a;return e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left truncate",children:(a=t.productType)==null?void 0:a.name})})},dt=t=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left truncate",children:t.loanType.name})}),lt=t=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left truncate",children:`${fe(t.createdAt)}`})}),mt=t=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left truncate",children:t.createdByUserName})}),pt=t=>e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left truncate",children:`${fe(t.updatedAt)}`}),ut=t=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left truncate",children:t.updatedByUserName})}),xt=t=>e.jsx(e.Fragment,{children:t.isActive?e.jsxs("div",{className:"flex items-center ",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-primary-primaryBlue border-none"}),e.jsx("div",{className:"ml-2 ",children:"YES"})]}):e.jsxs("div",{className:"flex items-center ",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-secondary-gray-300 border-none"}),e.jsx("div",{className:"ml-2 ",children:"NO"})]})}),vt=t=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex items-center ",children:[e.jsx("div",{className:"w-4 h-4 flex items-center",children:e.jsx("img",{src:Nt,alt:"Sahayya Logo",className:"cursor-pointer",onClick:a=>{ae.navigate(`${ve}?mode=${he.VIEW}&uid=${t.uid}`)}})}),e.jsx("div",{className:"ml ",children:e.jsx(M,{buttonType:b.MENU,onClick:a=>{De(t,a)},className:"!rounded-none bg-transparent !hover:bg-primary-gray-300"})})]})});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex w-full justify-between items-center",children:[e.jsx("div",{className:" h-7.5",children:e.jsx(k,{label:"heading.productConfiguration.products",className:"text-primary-ptext-1000 text-h2 font-Roboto font-bold flex"})}),e.jsxs("div",{className:"flex mr-5",children:[e.jsx("div",{className:"mr-5",children:e.jsx(M,{buttonType:b.FILTER_OUTLINE,onClick:qe})}),e.jsx("div",{children:e.jsx(M,{buttonType:b.CREATE,className:"create-button",onClick:Ge})})]})]}),se&&Xe(),e.jsxs(bt,{standardDataFormatPromise:te.getAll,dataKey:"id",search:i.search,ref:o,children:[e.jsx(A,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:tt,body:ct}),e.jsx(A,{className:"text-primary-ptext-1000 text-left text-xs w-1/12  p-1 h-12 pl-6",header:at,body:dt}),e.jsx(A,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:et,body:Ze}),e.jsx(A,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:st,body:lt}),e.jsx(A,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:rt,body:mt}),e.jsx(A,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:ot,body:pt}),e.jsx(A,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:it,body:ut}),e.jsx(A,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:nt,body:xt}),e.jsx(A,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:"Actions",body:vt})]})]}),e.jsxs(St,{onHide:F?()=>O(!1):()=>R(!1),visible:F?Ne:Te,modal:!0,closable:!1,dismissableMask:!0,children:[e.jsx(k,{label:F?"dialog.product.activate":"dialog.product.deactivate",className:"text-primary-ptext-1000 text-base font-Roboto font-bold flex items-center justify-center"}),e.jsx(k,{label:F?"dialog.staticMaster.message.activate":"dialog.staticMaster.message",className:"text-primary-ptext-1000 text-xs font-Roboto flex mt text-center justify-center mx-2 mt-4"}),e.jsxs("div",{className:"flex justify-center mt-4",children:[e.jsx("div",{className:"mr-3",children:e.jsx(M,{buttonType:b.CANCEL_OUTLINE,onClick:F?()=>O(!1):()=>R(!1)})}),e.jsx("div",{className:"mr-3",children:e.jsx(M,{buttonType:b.SAVE_OUTLINE,onClickWithLoader:F?()=>Je():()=>Ve()})}),e.jsx("div",{className:"",children:e.jsx(M,{buttonType:b.SEND_FOR_APPROVAL,className:"approve-primary",onClickWithLoader:F?()=>Ke():()=>Qe()})})]})]}),e.jsx(Et,{className:"w-20 bg-white font-Roboto text-xs text-primary-pText-1300 pt-2 rounded-lg mt-0.5 flex justify-center align-center shadow-autoCompletePanel",model:Ie,ref:Q}),e.jsx("div",{className:"",children:e.jsx(It,{position:"bottom-right",ref:L,toastText:X,variant:oe})})]})}const sa=jt(Dt);export{sa as default};
//# sourceMappingURL=PageProductListing-f782cf96.js.map