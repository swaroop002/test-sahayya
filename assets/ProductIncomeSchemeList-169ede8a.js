import{w as Vt,r as a,aG as E,j as e,T as f,J as D,aH as ae,ao as re,aI as Ce,aJ as be,aK as H,aZ as Ie,aF as Ee,o as S,az as Jt,aM as qt,av as ie,p as Be,aN as oe,z as Qt,v as ve}from"./index-e8217573.js";import{s as T,a as C,b}from"./sortIcon-54357a29.js";import{e as Gt}from"./eye_icon-081bddb3.js";import{A as q}from"./AutoComplete-0bca608a.js";import{B as R}from"./ButtonBox-9e46519a.js";import{D as ne}from"./DatePicker-b1c13861.js";import{D as Wt}from"./Dialog-adadaf64.js";import{M as zt}from"./MenuBox-defc36b0.js";import{R as Kt}from"./ReadOnlyTable-86accb69.js";import{S as Me}from"./SimpleDropDown-061a3470.js";import{T as Xt}from"./Toast-ae99ea5b.js";import{C as g}from"./column.esm-938bad7d.js";import{I as Zt}from"./InputBox-b9e88f52.js";import{S as es}from"./SectionTitle-9f9277ec.js";import{I as he}from"./IncomeSchemeService-d239ebaf.js";import{P as ts}from"./ProductConfigProductService-51cfb6b7.js";import{S as Fe}from"./StaticMasterTypeService-480bff1a.js";import{S as Oe}from"./StaticMasterDataService-689a6eca.js";import{B as ss}from"./BankMasterDataService-185c821e.js";import"./search_icon-459d6871.js";import"./withAuth-6de36ebf.js";import"./virtualscroller.esm-9939945c.js";import"./kebab-menu-8835ad2e.js";import"./No_data-1720c54e.js";import"./datatable.esm-f474a654.js";import"./paginator.esm-11c2c115.js";import"./TransitionGroup-c8afe0ce.js";const as=fe=>{const[ge,De]=a.useState(!1),[Re,P]=a.useState(!1),[Pe,Y]=a.useState(!1),[m,je]=a.useState({}),[Q,j]=a.useState(void 0),[G,k]=a.useState(void 0),[W,p]=a.useState(void 0),[_,c]=a.useState(void 0),[z,N]=a.useState(void 0),[V,x]=a.useState(void 0),[J,u]=a.useState(void 0),[K,y]=a.useState(void 0),[X,l]=a.useState(void 0),[Ye,U]=a.useState(!1),[ce,le]=a.useState([]),[ke,Le]=a.useState([]),L=a.useRef(null),Z=a.useRef(null),[de,B]=a.useState(""),[Ne,M]=a.useState(E.PRIMARY),[w,ye]=a.useState(!1),[I,F]=a.useState(!1),[ee,v]=a.useState(void 0),[r,te]=a.useState({product:"",incomeScheme:"",name:"",bankOrFinancier:"",lendingType:"",createdFrom:"",createdTo:"",updatedFrom:"",updatedTo:"",createdBy:"",updatedBy:"",isActive:""}),[o,d]=a.useState({limit:10,loading:!1,totalRecords:0,start:0,search:"",runCustomQuery:!1,records:[]}),[we,$e]=a.useState([{items:[{label:"Activate",className:""},{label:"Deactivate",className:""}]}]),[me,_e]=a.useState([]),n=a.useRef(null);a.useEffect(()=>{var t;(t=n==null?void 0:n.current)==null||t.search()},[o==null?void 0:o.search]),a.useEffect(()=>{console.log(r,"finding")},[r]),a.useEffect(()=>{var t;L!=null&&L.current&&de!==""&&((t=L==null?void 0:L.current)==null||t.showFunction())},[de,Ne,I]),a.useEffect(()=>{Ue()},[]);const Ue=()=>{ts.getAll().then(t=>{Le([...t.data.results])}).catch(t=>{console.log("err")})},He=(t,s)=>{var se;const i={label:"Deactivate",command:()=>{tt(t)}},h={label:"Activate",command:()=>{et(t)}},pe=[{items:[t.isActive?i:h]}];$e(pe),(se=Z==null?void 0:Z.current)==null||se.toggle(s)},A=t=>{const{name:s,value:i}=t.target;te(h=>({...h,[s]:i}))},Ve=t=>{let s="";G||G===void 0?(s='sort={"product.name":"DESC"}&',k(!1)):(s='sort={"product.name":"ASC"}&',k(!0)),p(void 0),j(void 0),c(void 0),N(void 0),x(void 0),u(void 0),v(void 0),l(void 0),y(void 0),d({...o,search:s})},Je=t=>{let s="";W||W==null?(s='sort={"incomeSchemeName.name" : "DESC"}&',p(!1)):(s='sort={"incomeSchemeName.name" : "ASC"}&',p(!0)),j(void 0),k(void 0),c(void 0),N(void 0),x(void 0),u(void 0),v(void 0),l(void 0),y(void 0),d({...o,search:s})},qe=t=>{let s="";Q||Q==null?(s='sort={"name":"DESC"}&',j(!1)):(s='sort={"name":"ASC"}&',j(!0)),k(void 0),p(void 0),c(void 0),N(void 0),x(void 0),u(void 0),v(void 0),l(void 0),y(void 0),d({...o,search:s})},Qe=t=>{let s="";X||X==null?(s='sort={"bank.name" : "DESC"}&',l(!1)):(s='sort={"bank.name" : "ASC"}&',l(!0)),k(void 0),p(void 0),j(void 0),c(void 0),N(void 0),x(void 0),u(void 0),v(void 0),y(void 0),d({...o,search:s})},Ge=t=>{let s="";K||K===void 0?(s='sort={"lendingType" : "DESC"}&',y(!1)):(s='sort={"lendingType" : "ASC"}&',y(!0)),l(void 0),p(void 0),j(void 0),c(void 0),N(void 0),x(void 0),u(void 0),v(void 0),l(void 0),d({...o,search:s})},We=t=>{let s="";_||_==null?(s='sort={"createdAt":"DESC"}&',c(!1)):(s='sort={"createdAt":"ASC"}&',c(!_)),p(void 0),j(void 0),N(void 0),x(void 0),u(void 0),v(void 0),l(void 0),y(void 0),d({...o,search:s})},ze=t=>{let s="";z||z==null?(s='sort={"createdBy":"DESC"}&',N(!1)):(s='sort={"createdBy":"ASC"}&',c(!_)),p(void 0),j(void 0),c(void 0),x(void 0),u(void 0),v(void 0),l(void 0),y(void 0),d({...o,search:s})},Ke=t=>{let s="";V||V==null?(s='sort={"updatedAt":"DESC"}&',x(!1)):(s='sort={"updatedAt":"ASC"}&',x(!V)),k(void 0),p(void 0),j(void 0),c(void 0),N(void 0),u(void 0),v(void 0),l(void 0),y(void 0),d({...o,search:s})},Xe=t=>{let s="";J||J==null?(s='sort={"updatedBy":"DESC"}&',u(!1)):(s='sort={"updatedBy":"ASC"}&',u(!J)),l(void 0),p(void 0),j(void 0),c(void 0),N(void 0),x(void 0),v(void 0),l(void 0),y(void 0),d({...o,search:s})},Ze=t=>{let s="";ee||ee==null?(s='sort={"isActive":"DESC"}&',v(!1)):(s='sort={"isActive":"ASC"}&',v(!0)),k(void 0),p(void 0),c(void 0),N(void 0),x(void 0),u(void 0),d({...o,search:s})},et=t=>{je({...t}),Y(!0),ye(!0)},tt=t=>{je({...t}),P(!0),ye(!1)},st=async()=>he.Inactivate(m==null?void 0:m.uid).then(t=>{var s;M(E.PRIMARY),B(ae.DEACTIVATED),F(!I),P(!1),Y(!1),(s=n==null?void 0:n.current)==null||s.search()}).catch(t=>{M(E.QUATERNARY),B(re(t)),F(!I)}),at=async()=>he.activate(m==null?void 0:m.uid).then(t=>{var s;M(E.PRIMARY),B(ae.ACTIVATED),F(!I),P(!1),Y(!1),(s=n==null?void 0:n.current)==null||s.search()}).catch(t=>{M(E.QUATERNARY),B(re(t)),F(!I)}),rt=async()=>{const t={...m},s={...t,isActive:!0},i={name:m.name,operationType:Ce.ACTIVE,entity:be.PRODUCT,initialStateJson:H(t),finalStateJson:H(s),reqPayload:H(s),reasonForChange:"Activate"};return Fe.approve(i).then(h=>{var O;M(E.PRIMARY),B(ae.SENT_FOR_APPROVAL),F(!I),P(!1),Y(!1),(O=n==null?void 0:n.current)==null||O.search()}).catch(h=>{M(E.QUATERNARY),B(re(h)),F(!I)})},it=async()=>{console.log(m);const t={...m},s={...t,isActive:!1},i={name:m.name,operationType:Ce.INACTIVE,entity:be.PRODUCT,initialStateJson:H(t),reqPayload:H(s),finalStateJson:H(s),reasonForChange:"Deactivate"};return Fe.approve(i).then(h=>{var O;M(E.PRIMARY),B(ae.SENT_FOR_APPROVAL),F(!I),P(!1),Y(!1),(O=n==null?void 0:n.current)==null||O.search()}).catch(h=>{M(E.QUATERNARY),B(re(h)),F(!I)})},ot=()=>{let t="";if(r.name&&(t=`${t}name:lk=${r.name}&`),r.incomeScheme&&(t=`${t}incomeSchemeName.uid=${r.incomeScheme.uid}&`),r.bankOrFinancier&&(t=`${t}bank.uid=${r.bankOrFinancier.uid}&`),r.lendingType&&(t=`${t}lendingType.uid=${r.lendingType.uid}&`),r.product&&(t=`${t}product.uid=${r.product}&`),r.createdFrom&&(console.log(r.createdFrom),t=`${t}createdAt:gt=${oe(r.createdFrom)}&`),r.createdTo&&(t=`${t}createdAt:lt=${oe(r.createdTo)}&`),r.updatedFrom&&(t=`${t}updatedAt:gt=${oe(r.updatedFrom)}&`),r.updatedTo&&(t=`${t}updatedAt:lt=${oe(r.updatedTo)}&`),r.isActive){let s=!0;r.isActive==="YES"?s=!0:r.isActive==="NO"&&(s=!1),t=`${t}isActive=${s}&`}r.createdBy&&(t=`${t}&createdBy=${r.createdBy.id}&`),r.updatedBy&&(t=`${t}&updatedBy=${r.updatedBy.id}&`),d({...o,search:t})},Ae=async t=>{let s=[];t.query.trim().length?(await Qt.getAll(0,10,`name=${t.query}&`).then(i=>{i.status===200&&(s=[...i.data])}),s.length===0&&s.push({name:void 0,designation:void 0,emailId:void 0})):s=me,_e(s)},nt=async t=>{let s=[];U(!0),await Oe.getAll(0,10,`&staticMasterType.code=INCOME_SCHEME_NAME&name:lk=${t.query}`).then(i=>{ve(i)&&(s=[...i.data.results],U(!1))}),le(s)},ct=async t=>{let s=[];U(!0),await Oe.getAll(0,10,`&staticMasterType.code=PRODUCT_LENDING_TYPE&name:lk=${t.query}`).then(i=>{ve(i)&&(s=[...i.data.results],U(!1))}),le(s)},lt=async t=>{let s=[];U(!0),await ss.getAll(0,10,`&name:lk=${t.query}`).then(i=>{ve(i)&&(s=[...i.data.results],U(!1))}),le(s)},dt=()=>{De(!ge)},mt=()=>{fe.navigate(`${Ie}?mode=${Ee.CREATE}`)},pt=()=>{te({product:"",incomeScheme:"",bankOrFinancier:"",lendingType:"",name:"",createdFrom:"",createdTo:"",updatedFrom:"",updatedTo:"",createdBy:"",updatedBy:"",isActive:""}),d({...o,search:""})},xt=()=>{const{name:t,product:s,bankOrFinancier:i,lendingType:h,incomeScheme:O,createdFrom:pe,createdTo:se,updatedFrom:Lt,updatedTo:wt,isActive:$t,createdBy:_t,updatedBy:Ut}=r,Te=Ht=>{const{name:xe,value:$}=Ht.target;console.log(xe,$),te(typeof $=="object"?ue=>({...ue,[xe]:{name:$==null?void 0:$.name,id:$.userId}}):ue=>({...ue,[xe]:$}))};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:" p-3 flex flex-col gap-6 bg-primary-sapphireBlue-100 rounded-lg",children:[e.jsx("div",{className:"flex",children:e.jsx(es,{title:"text.masterData.types.search"})}),e.jsxs("div",{className:" grid grid-cols-1 md:grid-cols-4 gap-3",children:[e.jsx("div",{className:"",children:e.jsx(Me,{label:"input.productConfiguration.incomeScheme.filter.product",name:"product",variant:S.SECONDARY,onChange:A,value:s,options:ke,optionLabel:"name",optionValue:"uid"})}),e.jsx("div",{className:"col-span-1",children:e.jsx(q,{label:"input.productConfiguration.incomeScheme.filter.incomeScheme",name:"incomeScheme",field:"name",value:O,variant:S.PRIMARY,suggestions:ce,completeMethod:nt,onChange:A,itemTemplate:ut,loader:Ye})}),e.jsx("div",{className:"col-span-1",children:e.jsx(Zt,{label:"Name",name:"name",variant:S.SECONDARY,onChange:A,value:t})}),e.jsx("div",{className:"col-span-1",children:e.jsx(q,{label:"label.productConfiguration.incomeScheme.filter.bankOrFinancier",name:"bankOrFinancier",field:"name",value:i,variant:S.PRIMARY,suggestions:ce,completeMethod:lt,onChange:A,itemTemplate:ht})}),e.jsx("div",{className:"col-span-1",children:e.jsx(q,{label:"label.productConfiguration.incomeScheme.filter.lendingType",name:"lendingType",field:"name",value:h,variant:S.PRIMARY,suggestions:ce,completeMethod:ct,onChange:A,itemTemplate:vt})}),e.jsx("div",{className:"",children:e.jsx(Me,{label:"input.masterData.staticMaster.isActive",name:"isActive",variant:Jt.SECONDARY,options:qt,onChange:A,value:$t})}),e.jsx("div",{className:"",children:e.jsx(ne,{label:"input.masterData.staticMaster.createdFrom",name:"createdFrom",placeholder:"DD-MMM-YYYY",showTime:!0,value:pe,onChange:A})}),e.jsx("div",{className:"",children:e.jsx(ne,{showTime:!0,label:"input.masterData.staticMaster.createdTo",name:"createdTo",placeholder:"DD-MMM-YYYY",variant:S.PRIMARY,value:se,onChange:A})}),e.jsx("div",{className:"col-span-1",children:e.jsx(q,{label:"input.masterData.staticMaster.createdBy",name:"createdBy",field:"name",value:_t,variant:S.PRIMARY,suggestions:me,completeMethod:Ae,onChange:Te,itemTemplate:Se})}),e.jsx("div",{className:"",children:e.jsx(ne,{showTime:!0,label:"input.masterData.staticMaster.updatedFrom",name:"updatedFrom",placeholder:"DD-MMM-YYYY",variant:S.PRIMARY,value:Lt,onChange:A})}),e.jsx("div",{className:"",children:e.jsx(ne,{showTime:!0,label:"input.masterData.staticMaster.updatedTo",name:"updatedTo",placeholder:"DD-MMM-YYYY",variant:S.PRIMARY,value:wt,onChange:A})}),e.jsx("div",{className:"col-span-1",children:e.jsx(q,{field:"name",label:"input.masterData.staticMaster.updatedBy",name:"updatedBy",variant:S.PRIMARY,value:Ut,suggestions:me,completeMethod:Ae,onChange:Te,itemTemplate:Se})}),e.jsx("div",{children:e.jsxs("div",{className:"flex  justify-start mb-2",children:[e.jsx("div",{className:"mr-5",children:e.jsx(R,{buttonType:D.RESET_OUTLINE,onClick:pt})}),e.jsx("div",{children:e.jsx(R,{buttonType:D.SEARCH_OUTLINE,onClick:ot})})]})})]})]})})},ut=t=>(console.log(t,"item"),t.code===void 0?e.jsxs("div",{className:"flex flex-col items-center justify-center h-39",children:[e.jsx("img",{src:ie,alt:"search-icon",className:" h-7 w-7"}),e.jsx(f,{className:"text-primary-labelColor mt-2",label:"Loading..."})]}):e.jsx("div",{className:"flex flex-col",children:e.jsx(f,{className:"text-primary-labelColor",label:t.name})})),vt=t=>(console.log(t,"item"),t.code===void 0?e.jsxs("div",{className:"flex flex-col items-center justify-center h-39",children:[e.jsx("img",{src:ie,alt:"search-icon",className:" h-7 w-7"}),e.jsx(f,{className:"text-primary-labelColor mt-2",label:"Loading..."})]}):e.jsx("div",{className:"flex flex-col",children:e.jsx(f,{className:"text-primary-labelColor",label:t.name})})),ht=t=>t.name===void 0?e.jsxs("div",{className:"flex flex-col items-center justify-center h-39",children:[e.jsx("img",{src:ie,alt:"search-icon",className:" h-7 w-7"}),e.jsx(f,{className:"text-primary-labelColor mt-2",label:"Loading..."})]}):e.jsx("div",{className:"flex flex-col",children:e.jsx(f,{className:"text-primary-labelColor",label:t.name})}),Se=t=>t.name===void 0?e.jsxs("div",{className:"flex flex-col items-center justify-center h-39",children:[e.jsx("img",{src:ie,alt:"search-icon",className:" h-7 w-7"}),e.jsx(f,{className:"text-primary-labelColor mt-2",label:"Loading..."})]}):e.jsx("div",{className:"flex flex-col",children:e.jsx(f,{className:"text-primary-labelColor",label:t.name})}),ft=t=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-primary-ptext-900  font-BrownLight text-left w-40 truncate",title:t.name,children:t.name})}),gt=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-3",children:"Name"}),e.jsx("img",{src:Q==null?T:Q==!0?C:b,alt:"Sort Icon",onClick:qe,className:"cursor-pointer"})]}),jt=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-3",children:"Bank/Financier"}),e.jsx("img",{src:X==null?T:X==!0?C:b,alt:"Sort Icon",onClick:Qe,className:"cursor-pointer"})]}),Nt=t=>{var s;return e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left truncate",children:(s=t.bank)==null?void 0:s.name})})},yt=t=>{var s;return e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left truncate",children:(s=t.lendingType)==null?void 0:s.name})})},At=()=>e.jsxs("div",{className:"flex ",children:[e.jsx("p",{className:"mr-3",children:"Lending Type"}),e.jsx("img",{src:K==null?T:K==!0?C:b,alt:"Sort Icon",onClick:Ge,className:"cursor-pointer"})]}),St=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Product"}),e.jsx("img",{src:G==null?T:G==!0?C:b,alt:"Sort Icon",onClick:Ve,className:"cursor-pointer"})]}),Tt=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Income Scheme"}),e.jsx("img",{src:W==null?T:W==!0?C:b,alt:"Sort Icon",onClick:Je,className:"cursor-pointer"})]}),Ct=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Created On"}),e.jsx("img",{src:_==null?T:_==!0?C:b,alt:"Sort Icon",onClick:We,className:"cursor-pointer"})]}),bt=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Created By"}),e.jsx("img",{src:z==null?T:z==!0?C:b,alt:"Sort Icon",onClick:ze,className:"cursor-pointer"})]}),It=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Updated On"}),e.jsx("img",{src:V==null?T:V==!0?C:b,alt:"Sort Icon",onClick:Ke,className:"cursor-pointer"})]}),Et=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Updated By"}),e.jsx("img",{src:J==null?T:J==!0?C:b,alt:"Sort Icon",onClick:Xe,className:"cursor-pointer"})]}),Bt=()=>e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"mr-1",children:"Is Active"}),e.jsx("img",{src:ee==null?T:ee==!0?C:b,alt:"Sort Icon",onClick:Ze,className:"cursor-pointer"})]}),Mt=t=>{var s;return e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left truncate",children:(s=t.product)==null?void 0:s.name})})},Ft=t=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left w-40 truncate",title:t.incomeSchemeName.name,children:t.incomeSchemeName.name})}),Ot=t=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left truncate",children:`${Be(t.createdAt)}`})}),Dt=t=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left truncate",children:t.createdByUserName})}),Rt=t=>e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left truncate",children:`${Be(t.updatedAt)}`}),Pt=t=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-primary-ptext-900 font-BrownLight text-left truncate",children:t.updatedByUserName})}),Yt=t=>e.jsx(e.Fragment,{children:t.isActive?e.jsxs("div",{className:"flex items-center ",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-primary-primaryBlue border-none"}),e.jsx("div",{className:"ml-2 ",children:"YES"})]}):e.jsxs("div",{className:"flex items-center ",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-secondary-gray-300 border-none"}),e.jsx("div",{className:"ml-2 ",children:"NO"})]})}),kt=t=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex items-center ",children:[e.jsx("div",{className:"w-4 h-4 flex items-center",children:e.jsx("img",{src:Gt,alt:"Sahayya Logo",className:"cursor-pointer",onClick:s=>{fe.navigate(`${Ie}?mode=${Ee.VIEW}&uid=${t.uid}`)}})}),e.jsx("div",{className:"ml ",children:e.jsx(R,{buttonType:D.MENU,onClick:s=>{He(t,s)},className:"!rounded-none bg-transparent !hover:bg-primary-gray-300"})})]})});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex w-full justify-between items-center",children:[e.jsx("div",{className:" h-7.5",children:e.jsx(f,{label:"heading.productConfiguration.incomeScheme.productIncomeScheme",className:"text-primary-ptext-1000 text-h2 font-Roboto font-bold flex"})}),e.jsxs("div",{className:"flex mr-5",children:[e.jsx("div",{className:"mr-5",children:e.jsx(R,{buttonType:D.FILTER_OUTLINE,onClick:dt})}),e.jsx("div",{children:e.jsx(R,{buttonType:D.CREATE,className:"create-button ",onClick:mt})})]})]}),ge&&xt(),e.jsxs(Kt,{standardDataFormatPromise:he.getAll,dataKey:"id",search:o.search,ref:n,children:[e.jsx(g,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:St,body:Mt}),e.jsx(g,{className:"text-primary-ptext-1000 text-left text-xs w-1/12  p-1 h-12 pl-6",header:Tt,body:Ft}),e.jsx(g,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:gt,body:ft}),e.jsx(g,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:jt,body:Nt}),e.jsx(g,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:At,body:yt}),e.jsx(g,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:Ct,body:Ot}),e.jsx(g,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:bt,body:Dt}),e.jsx(g,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:It,body:Rt}),e.jsx(g,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:Et,body:Pt}),e.jsx(g,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:Bt,body:Yt}),e.jsx(g,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:"Actions",body:kt})]})]}),e.jsxs(Wt,{onHide:w?()=>Y(!1):()=>P(!1),visible:w?Pe:Re,modal:!0,closable:!1,dismissableMask:!0,children:[e.jsx(f,{label:w?"dialog.product.activate":"dialog.product.deactivate",className:"text-primary-ptext-1000 text-base font-Roboto font-bold flex items-center justify-center"}),e.jsx(f,{label:w?"dialog.staticMaster.message.activate":"dialog.staticMaster.message",className:"text-primary-ptext-1000 text-xs font-Roboto flex mt text-center justify-center mx-2 mt-4"}),e.jsxs("div",{className:"flex justify-center mt-4",children:[e.jsx("div",{className:"mr-3",children:e.jsx(R,{buttonType:D.CANCEL_OUTLINE,onClick:w?()=>Y(!1):()=>P(!1)})}),e.jsx("div",{className:"mr-3",children:e.jsx(R,{buttonType:D.SAVE_OUTLINE,onClickWithLoader:w?()=>at():()=>st()})}),e.jsx("div",{className:"",children:e.jsx(R,{buttonType:D.SEND_FOR_APPROVAL,className:"approve-primary",onClickWithLoader:w?()=>rt():()=>it()})})]})]}),e.jsx(zt,{className:"w-20 bg-white font-Roboto text-xs text-primary-pText-1300 pt-2 rounded-lg mt-0.5 flex justify-center align-center shadow-autoCompletePanel",model:we,ref:Z}),e.jsx("div",{className:"",children:e.jsx(Xt,{position:"bottom-right",ref:L,toastText:de,variant:Ne})})]})},Fs=Vt(as);export{Fs as default};
//# sourceMappingURL=ProductIncomeSchemeList-169ede8a.js.map
