import{w as cs,q as ms,r,ad as xe,ae as Ne,af as he,aG as Te,j as t,R as ds,T as N,J as q,o as os,d7 as us,aH as Es,b as gs,l as ps,i as Ce,ao as xs,dG as d,e$ as Ns,a4 as hs,a6 as Ts,W as Cs,Y as fs,X as Ss,_ as As,Z as _s,a0 as ys,a1 as Ps,$ as bs,a3 as Rs,a2 as Ls,a5 as Os,v as js,dJ as c,cZ as vs,f0 as Is,eq as Us,f1 as $,f as fe,cU as $s}from"./index-e8217573.js";import{A as Ms}from"./AutoComplete-0bca608a.js";import{B as H}from"./ButtonBox-9e46519a.js";import{D as Bs}from"./Dialog-adadaf64.js";import{E as Gs}from"./ErrorDialog-d5eef4d7.js";import{I as ks,B as D}from"./IconButton-36693dd9.js";import{I as Ks}from"./InputBox-b9e88f52.js";import{I as Ys}from"./InputTextArea-b90aad1d.js";import{M as Fs}from"./MenuBox-defc36b0.js";import{R as Vs}from"./ReadOnlyTable-86accb69.js";import{T as Hs}from"./Toast-ae99ea5b.js";import{W as Se}from"./WarningDialog-77a1cb18.js";import{C as Js}from"./BaseChips-c7cc0dee.js";import{a as Qs}from"./CustomHooks-0ce50620.js";import{C as o}from"./column.esm-938bad7d.js";import{P as Ws}from"./ProfileService-30047c89.js";import{S as Ae}from"./StageService-c1c03c89.js";import{u as Xs}from"./useSelector-dc41929a.js";import"./search_icon-459d6871.js";import"./withAuth-6de36ebf.js";import"./virtualscroller.esm-9939945c.js";import"./kebab-menu-8835ad2e.js";import"./sortIcon-54357a29.js";import"./Download_Icon-51fc7f46.js";import"./eye_icon-081bddb3.js";import"./No_data-1720c54e.js";import"./SimpleDropDown-061a3470.js";import"./datatable.esm-f474a654.js";import"./paginator.esm-11c2c115.js";import"./TransitionGroup-c8afe0ce.js";const i={DELEGATE:"Delegate",STOP_DELEGATE:"Stop Delegation",RE_OPEN:"Re-Open",RE_OPEN_EDIT:"Re-Open And Edit",CANCELLED:"Cancelled"},zs=J=>{var de,oe,ue,Ee,ge;const h=ms().loanUid??"",[_e,M]=r.useState(!1),[l,T]=r.useState({rowUid:"",stageUid:"",assignee:{uid:"",name:"",email:"",reason:"",userType:"",description:"",isActive:!0},stageName:"",smStageType:"",loanStatus:"",status:"",stageCompletionDate:"",delegate:{name:"",uid:"",code:""},remarks:"",ccEmail:[],stageActionName:"",isActive:!0}),[B,ye]=r.useState({limit:10,loading:!1,totalRecords:0,start:0,search:`&loan.uid=${h}&isActive=true`,runCustomQuery:!1,records:[]}),[G,w]=r.useState(null),[Pe,be]=r.useState([]),[Re,Q]=r.useState(!1),[Le,k]=r.useState(!1),[Oe,K]=r.useState(!1),W=Xs(e=>e.UserProfileReducers.profileObj),u=Qs(),[,Y]=r.useState(!1),m=r.useRef(new xe({validators:{...Ne()},...he(),autoForceUpdate:{forceUpdate:()=>Y(e=>!e)}})),[qs,ee]=r.useState(""),[je,se]=r.useState(!1),[X,te]=r.useState(""),[ve,ae]=r.useState(!1),[z,Ie]=r.useState(""),[le,Ue]=r.useState(Te.PRIMARY),[ne,$e]=r.useState(!1),g=r.useRef(null),F=r.useRef(null),Me=r.useRef(null),p=r.useRef(null),ie=[{items:[]}];r.useEffect(()=>{var e;(e=g==null?void 0:g.current)==null||e.search()},[B==null?void 0:B.search]),r.useEffect(()=>{X&&ae(!0)},[X]),r.useEffect(()=>{var e;p!=null&&p.current&&z!==""&&((e=p==null?void 0:p.current)==null||e.showFunction())},[z,le,ne]),r.useEffect(()=>{l.stageActionName===i.DELEGATE||l.stageActionName===i.RE_OPEN?M(!0):l.stageActionName===i.CANCELLED?k(!0):l.stageActionName===i.STOP_DELEGATE?K(!0):l.stageActionName===i.RE_OPEN_EDIT&&V()},[l]);const Be=e=>{T(s=>({...s,[e.target.name]:e.target.value}))},Ge=e=>{T(s=>({...s,ccEmail:e.value})),ee(""),se(!1)},ke=e=>{const{name:s,value:a}=e.target;T(typeof a=="object"?n=>({...n,[s]:a}):n=>({...n,[s]:{name:a}}))},Ke=()=>{const e=Ce+vs+"/"+h+Is;J==null||J.navigate(e)},Ye=(e,s)=>{var E,x,f,S,A,_,y,P,b,R,L,O,j,v,I,U;const a=[];(x=(E=s==null?void 0:s.stage)==null?void 0:E.delegate)!=null&&x.name&&((f=s==null?void 0:s.stage)==null?void 0:f.status)!==c.COMPLETED.name&&((S=s==null?void 0:s.stage)==null?void 0:S.status)===c.APPROVED.name?a.push({label:i.STOP_DELEGATE,className:"px-1.5 text-xs text-primary-labelColor h-6.5 hover:bg-primary-sapphireBlue-100",command:()=>{C(s,i.STOP_DELEGATE)}}):((A=s==null?void 0:s.stage)==null?void 0:A.status)!==c.CANCELED.name&&((_=s==null?void 0:s.stage)==null?void 0:_.status)!==c.REJECTED.name&&((y=s==null?void 0:s.stage)==null?void 0:y.status)!==c.COMPLETED.name&&a.push({label:`${i.DELEGATE} Stage`,className:"px-1.5 text-xs text-primary-labelColor h-6.5 hover:bg-primary-sapphireBlue-100",command:()=>{C(s,i.DELEGATE)}}),(((P=s==null?void 0:s.stage)==null?void 0:P.status)===c.COMPLETED.name||((b=s==null?void 0:s.stage)==null?void 0:b.status)===c.CANCELED.name||((R=s==null?void 0:s.stage)==null?void 0:R.status)===c.APPROVED.name||((L=s==null?void 0:s.stage)==null?void 0:L.status)===c.REJECTED.name)&&a.push({label:i.RE_OPEN,className:"px-1.5 text-xs text-primary-labelColor h-6.5 hover:bg-primary-sapphireBlue-100",command:()=>{C(s,i.RE_OPEN)}},{label:i.RE_OPEN_EDIT,className:"px-1.5 text-xs text-primary-labelColor h-6.5 hover:bg-primary-sapphireBlue-100",command:()=>{C(s,i.RE_OPEN_EDIT)}}),((O=s==null?void 0:s.stage)==null?void 0:O.status)!==c.CANCELED.name&&((j=s==null?void 0:s.stage)==null?void 0:j.status)!==c.COMPLETED.name&&((v=s==null?void 0:s.stage)==null?void 0:v.status)!==c.APPROVED.name&&((I=s==null?void 0:s.stage)==null?void 0:I.status)!==c.REJECTED.name&&a.push({label:"Cancel Stage",className:"px-1.5 text-xs text-primary-labelColor h-6.5 hover:bg-primary-sapphireBlue-100",command:()=>{C(s,i.CANCELLED)}});const n=[...a];ie[0].items=[...n],(U=F==null?void 0:F.current)==null||U.show(e)},Fe=()=>{M(!1),Z()},re=async()=>{var s;const e=We(l,l.stageActionName);try{const a=await Ae.updateStage(e);if(us(a)){if(M(!1),k(!1),K(!1),(s=g==null?void 0:g.current)==null||s.search(),Ue(Te.PRIMARY),Ie(Es.SAVED),$e(!ne),Z(),l.stageActionName===i.RE_OPEN_EDIT){let n="";me[l==null?void 0:l.stageName]&&(n=me[l==null?void 0:l.stageName](h,l==null?void 0:l.stageUid));const E=gs+ps+Ce+n;window.location.href=E;return}window.location.reload()}}catch(a){te(xs(a)),M(!1),k(!1),K(!1),Z()}},V=async()=>l.stageActionName===i.RE_OPEN_EDIT||l.stageActionName===i.CANCELLED?re():!He()||je?void 0:re(),Ve=()=>{let e=`&loan.uid=${h}&isActive=true`;G===null||G===$.DESC?(e=e+'&sort={"stage.createdAt":"ASC"}',w($.ASC)):(e=e+'&sort={"stage.createdAt":"DESC"}',w($.DESC)),ye(s=>({...s,search:e}))},ce=e=>{var s,a;(a=m==null?void 0:m.current)==null||a.showMessageFor((s=e==null?void 0:e.target)==null?void 0:s.name)},He=()=>{var s,a;let e=!1;return e=(s=m==null?void 0:m.current)==null?void 0:s.allValid(),e||(Y(n=>!n),(a=m==null?void 0:m.current)==null||a.showMessages(),Y(n=>!n),!1)},Z=()=>{m.current=new xe({validators:{...Ne()},...he(),autoForceUpdate:{forceUpdate:()=>Y(e=>!e)}})},me={[d.FEES_AND_RECEIPT]:(e,s)=>`${Ns}/${e}`,[d.CREDIT_AND_QUERY]:(e,s)=>`${hs}/${e}`,[d.QC]:(e,s)=>`${Ts}/${e}/${s}`,[d.LOGIN]:(e,s)=>`${Cs}/${e}/${s}`,[d.PD]:(e,s)=>`${fs}/${e}/${s}`,[d.LEGAL_REPORT]:(e,s)=>`${Ss}/${e}/${s}`,[d.RCU_REPORT]:(e,s)=>`${As}/${e}/${s}`,[d.TECHNICAL_REPORT]:(e,s)=>`${_s}/${e}/${s}`,[d.IN_PRINCIPAL_APPROVAL]:(e,s)=>`${ys}/${e}/${s}`,[d.FINANCIAL_APPROVAL]:(e,s)=>`${Ps}/${e}/${s}`,[d.FINAL_APPROVAL]:(e,s)=>`${bs}/${e}/${s}`,[d.CAM_AND_RECOMMENDATION]:(e,s)=>`${Rs}/${e}/${s}`,[d.DEDUPE]:(e,s)=>`${Ls}/${e}/${s}`,[d.REAPPEAL]:(e,s)=>`${Os}/${e}/${s}`},Je=()=>{switch(l.stageActionName){case i.DELEGATE:return"DELEGATE";case i.RE_OPEN:return"RE_OPEN"}},C=(e,s)=>{var n,E,x,f,S,A,_,y,P,b,R,L,O,j,v,I,U,pe;const a={rowUid:e.uid,stageUid:(n=e.stage)==null?void 0:n.uid,assignee:{uid:((x=(E=e.stage)==null?void 0:E.assignee)==null?void 0:x.uid)??"",name:((S=(f=e.stage)==null?void 0:f.assignee)==null?void 0:S.name)??"",email:((_=(A=e.stage)==null?void 0:A.assignee)==null?void 0:_.email)??"",reason:((P=(y=e.stage)==null?void 0:y.assignee)==null?void 0:P.reason)??"",userType:((R=(b=e.stage)==null?void 0:b.assignee)==null?void 0:R.userType)??"",description:((O=(L=e.stage)==null?void 0:L.assignee)==null?void 0:O.description)??"",isActive:!0},stageName:((j=e.stage)==null?void 0:j.stageName)??"",smStageType:((v=e.stage)==null?void 0:v.smStageType)??"",loanStatus:e.loan.loanStatus??"",status:((I=e.stage)==null?void 0:I.status)??"",stageCompletionDate:((U=e.stage)==null?void 0:U.stageCompletionDate)??"",delegate:((pe=e.stage)==null?void 0:pe.delegate)??{name:"",uid:"",parent:{name:"",uid:""},code:""},remarks:e.remarks??"",ccEmail:e.ccEmail?JSON.parse(e.ccEmail)??[]:[],stageActionName:s,isActive:!0};T({...a})},Qe=async e=>{let s=[];Q(!0);const a={loanId:h,stageName:l.stageName,name:e.query};try{await Ws.findDelegateByName(a).then(n=>{js(n)&&(s=[...n.data],Q(!1))})}catch{Q(!1)}s.length===0&&s.push({name:"",uid:""}),be(s)},We=(e,s)=>{var a;if(s===i.DELEGATE)return{uid:e.stageUid,delegate:e.delegate.uid?{uid:e.delegate.uid}:{},remarks:e.remarks,stageInitiationDetail:{uid:e.rowUid,ccEmail:e.ccEmail.length?JSON.stringify(e.ccEmail):""}};if(s===i.STOP_DELEGATE)return{uid:e.stageUid,delegate:null};if(s===i.RE_OPEN)return{uid:e.stageUid,delegate:e.delegate.uid?{uid:e.delegate.uid}:null,remarks:e.remarks,status:c.RE_OPEN.name,stageInitiationDetail:{uid:e.rowUid,ccEmail:e.ccEmail.length?JSON.stringify(e.ccEmail):""}};if(s===i.RE_OPEN_EDIT){const n=(W==null?void 0:W.uid)??"",E=((a=e==null?void 0:e.assignee)==null?void 0:a.uid)??"";return{uid:e.stageUid,delegate:n===E?null:{uid:n},remarks:"",status:c.RE_OPEN.name,stageInitiationDetail:{uid:e.rowUid,ccEmail:""}}}else if(s===i.CANCELLED)return{uid:e.stageUid,delegate:null,remarks:"",status:c.CANCELED.name,stageInitiationDetail:{uid:e.rowUid,ccEmail:""}}},Xe=e=>ze(e,`${e==null?void 0:e.name}`),ze=(e,s,a)=>(e==null?void 0:e.name)===void 0||(e==null?void 0:e.name.length)<1?t.jsx("div",{className:"flex flex-col items-center justify-center h-39 pointer-events-none cursor-default",children:t.jsx(N,{className:"text-primary-labelColor mt-2",label:"label.noDataFound"})}):t.jsxs("div",{className:"flex flex-col",children:[t.jsx(N,{className:"text-primary-labelColor",label:s}),a?t.jsx(N,{className:"text-secondary-gray-500 text-xxs",label:a}):null]}),Ze=e=>{var s,a;return t.jsx("div",{className:"flex items-center w-max",children:((a=Us[(s=e==null?void 0:e.stage)==null?void 0:s.stageName])==null?void 0:a.label)??"-"})},qe=e=>{var s;return t.jsx("div",{className:"flex items-center w-max",children:((s=e==null?void 0:e.stage)==null?void 0:s.status)??"-"})},De=e=>{var s;return t.jsx("div",{className:"flex items-center justify-start w-max",children:((s=e==null?void 0:e.stage)==null?void 0:s.createdByUserName)??"-"})},we=e=>{var s,a;return t.jsx("div",{className:"flex items-center w-max",children:((a=(s=e==null?void 0:e.stage)==null?void 0:s.assignee)==null?void 0:a.name)??"-"})},es=e=>{var s,a;return t.jsx("div",{className:"flex items-center w-max",children:((a=(s=e==null?void 0:e.stage)==null?void 0:s.delegate)==null?void 0:a.name)??"-"})},ss=e=>{var s,a;return t.jsx("div",{className:"flex items-center w-max",children:((a=(s=e==null?void 0:e.stage)==null?void 0:s.partner)==null?void 0:a.name)??"-"})},ts=e=>{var s,a;return t.jsx("div",{className:"flex items-center w-max",children:((s=e==null?void 0:e.stage)==null?void 0:s.status)===c.COMPLETED.name?((a=e==null?void 0:e.stage)==null?void 0:a.updatedByUserName)??"-":"-"})},as=()=>t.jsxs("div",{className:"flex justify-start items-center gap-2",children:[t.jsx(N,{label:"label.stages.initiated.on",className:""}),t.jsx(ks,{buttonType:G===$.ASC?D.SORT_DESC:G===$.DESC?D.SORT_ASC:D.SORT,onClick:Ve})]}),ls=e=>{var s;return t.jsx("div",{className:"flex items-center w-max",children:fe((s=e==null?void 0:e.stage)==null?void 0:s.createdAtSystemDate)??"-"})},ns=e=>{var s,a;return t.jsx("div",{className:"flex items-center w-max",children:((s=e==null?void 0:e.stage)==null?void 0:s.status)===c.COMPLETED.name?fe((a=e==null?void 0:e.stage)==null?void 0:a.stageCompletionDate)??"-":"-"})},is=e=>{var s;return t.jsx("div",{children:t.jsx(H,{buttonType:q.MENU,onClick:a=>Ye(a,e),disabled:((s=e.loan)==null?void 0:s.loanStatus)===$s.REJECTED})})},rs=()=>t.jsxs(Vs,{standardDataFormatPromise:Ae.getStages,dataKey:"id",search:B.search,ref:g,children:[t.jsx(o,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:u("label.stages.stage"),body:Ze}),t.jsx(o,{className:"text-primary-ptext-1000 text-left text-xs  p-1 h-12 pl-6",header:u("label.stages.current.status"),body:qe}),t.jsx(o,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:u("label.stages.initiated.by"),body:De}),t.jsx(o,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:u("label.stages.assigned.to"),body:we}),t.jsx(o,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:u("label.stages.delegated.to"),body:es}),t.jsx(o,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:u("label.stages.external.vendor"),body:ss}),t.jsx(o,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:u("label.stages.completed.by"),body:ts}),t.jsx(o,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:as(),body:ls}),t.jsx(o,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:u("label.stages.completed.on"),body:ns}),t.jsx(o,{frozen:!0,className:"text-primary-ptext-1000 text-center text-xs p-1 h-12 px-6",header:u("label.stages.actions"),body:is})]});return t.jsxs(ds.Fragment,{children:[t.jsxs("div",{className:"p-3 rounded-masterDataPageRadius bg-white flex flex-col gap-3 overflow-auto",children:[t.jsxs("div",{className:"flex w-full justify-between items-center",children:[t.jsx(N,{label:"heading.transaction.stages",className:"text-xl font-bold text-primary-ptext-1000"}),t.jsx("div",{className:"",children:t.jsx(H,{buttonType:q.ICON_TEXT_ROW,customLabel:"Initiate New Stage",onClick:Ke})})]}),rs()]}),t.jsx(Bs,{className:"!w-137 !p-0",visible:_e,closable:!1,children:t.jsxs("div",{className:"py-3 px-6 flex flex-col gap-0",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("div",{className:"font-bold text-base text-primary-primaryTextColor",children:t.jsx(N,{className:"",label:l.stageActionName})}),t.jsxs("div",{className:"flex items-center gap-5 text-xs text-primary-ptext-1000",children:[t.jsx("div",{children:t.jsx(H,{className:"",buttonType:q.CANCEL_OUTLINE,onClick:Fe})}),t.jsx("div",{children:t.jsx(H,{className:"",buttonType:Je(),onClickWithLoader:V})})]})]}),t.jsxs("div",{className:"flex flex-wrap justify-between items-center text-xs text-primary-ptext-1000",children:[t.jsx("div",{className:"w-56",children:t.jsx(Ks,{className:"!h-6",name:"stage",label:"Stage*",onBlur:ce,validation:(de=m==null?void 0:m.current)==null?void 0:de.message("stage",l.stageName,"mandatory"),value:l.stageName,disabled:!0})}),t.jsx("div",{className:"w-56",children:t.jsx(Ms,{className:"!h-6",loader:Re,label:`${(l==null?void 0:l.stageActionName)===i.RE_OPEN?"label.stages.delegate.delegateTo":"label.stages.delegate.delegateTo*"}`,name:"delegate",value:(oe=l.delegate)==null?void 0:oe.name,variant:os.PRIMARY,suggestions:Pe,completeMethod:Qe,onChange:ke,itemTemplate:Xe,onBlur:ce,validation:(Ee=m==null?void 0:m.current)==null?void 0:Ee.message("delegate",(ue=l.delegate)==null?void 0:ue.uid,`${(l==null?void 0:l.stageActionName)===i.RE_OPEN?"optional":"mandatory"}`)})})]}),t.jsx("div",{className:"w-full",children:t.jsx(Js,{className:"",name:"ccEmail",value:l.ccEmail,label:"CC",onChange:Ge,placeholder:((ge=l==null?void 0:l.ccEmail)==null?void 0:ge.length)!==0?"":"Enter email(s)",ref:Me,setParentError:ee,setHasError:se})}),t.jsx("div",{className:"h-30",children:t.jsx(Ys,{autoResize:!0,name:"remarks",label:"Description",placeholder:"Enter Description",value:l.remarks,onChange:Be})})]})}),t.jsx(Se,{visible:Oe,className:"w-76 !px-14",title:"Stop Delegation",warningMessage:"Are you sure you want to stop delegation for this stage?",onCancel:()=>K(!1),onConfirm:()=>V(),onHide:()=>{}}),t.jsx(Se,{visible:Le,className:"w-76 !px-14",title:"Cancel Stage",warningMessage:"Are you sure you want to cancel this stage?",onCancel:()=>k(!1),onConfirm:()=>V(),onHide:()=>{}}),t.jsx(Fs,{ref:F,model:ie,variant:"SECONDARY",buttonClassName:"!bg-transparent",className:"width-full-menubox bg-white  w-max p-1.5 rounded-xl mt-0.5 border shadow-autoCompletePanel"}),t.jsx(Hs,{position:"bottom-right",ref:p,toastText:z,variant:le}),t.jsx(Gs,{onHide:()=>{ae(!1),te("")},visible:ve,errorMessage:X})]})},Rt=cs(zs);export{Rt as default};
//# sourceMappingURL=PageStages-01b07634.js.map
