var $e=Object.defineProperty;var be=(m,h,a)=>h in m?$e(m,h,{enumerable:!0,configurable:!0,writable:!0,value:a}):m[h]=a;var l=(m,h,a)=>(be(m,typeof h!="symbol"?h+"":h,a),a);import{at as Fe,j as e,dx as Ie,r as d,z as Oe,g as ae,dy as L,dz as ne,T as Pe,ag as Le,L as re,dl as T,s as Te}from"./index-e8217573.js";import{B as ie}from"./ButtonBox-9e46519a.js";import{S as o}from"./Skeleton-7e12d019.js";import{I as De}from"./InputBox-b9e88f52.js";import{S as Ue}from"./StageService-c1c03c89.js";const ke="/assets/chatIcon-62b2db58.svg",c="/custom/api";class _e extends Fe{constructor(){super(...arguments);l(this,"getAll",(a=0,t=10,r="")=>{const i=`${c}/search?start=${a}&limit=${t}${r}`;return this.makeGetRequestWithAuth(i)});l(this,"getAllChats",a=>{const t=`${c}/manage/message/conversation/search?${a}&sort={"createdAt": "DESC"}`;return this.makeGetRequestWithAuth(t)});l(this,"getAllFullChats",a=>{const t=`${c}/manage/message/latest/${a}`;return this.makeGetRequestWithAuth(t)});l(this,"getFirstChat",a=>{const t=`${c}/manage/message/search?conversation.uid=${a}&start=0&limit=1`;return this.makeGetRequestWithAuth(t)});l(this,"getAllPreviousChats",(a,t)=>{const r=`${c}/manage/message/search?conversation.uid=${a}&start=1&limit=${t}`;return this.makeGetRequestWithAuth(r)});l(this,"checkNewMessageAvailability",a=>{const t=`${c}/manage/message/in/stage/${a}`;return this.makeGetRequestWithAuth(t)});l(this,"FinishConversation",(a,t)=>{const r=`${c}/conversation/${a}`;return this.makePutRequestWithAuth(r,t)});l(this,"ReOpenConversation",(a,t)=>{const r=`${c}/conversation/${a}`;return this.makePutRequestWithAuth(r,t)});l(this,"ReadConversation",a=>{const t=`${c}/manage/message/${a}`;return this.makePutRequestWithAuth(t)});l(this,"startConversation",a=>{const t=`${c}/conversation`;return this.makePostRequestWithAuth(t,a)});l(this,"sendReply",a=>{const t=`${c}/manage/message`;return this.makePostRequestWithAuth(t,a)});l(this,"update",(a,t)=>{const r=`${c}/manage/${t}`;return this.makePutRequestWithAuth(r,a)});l(this,"activate",a=>{const t=`${c}/manage/activate/${a}`;return this.makePutRequestWithAuth(t)});l(this,"Inactivate",a=>{const t=`${c}/manage/inactivate/${a}`;return this.makePutRequestWithAuth(t)});l(this,"tableEmpanalment",(a=0,t=10,r="")=>{const i=`${c}/empanelment/search?start=${a}&limit=${t}${r}`;return this.makeGetRequestWithAuth(i)});l(this,"tableAgreement",(a=0,t=10,r="")=>{const i=`${c}/agreement/search?start=${a}&limit=${t}${r}`;return this.makeGetRequestWithAuth(i)});l(this,"tablecontact",(a=0,t=10,r="")=>{const i=`${c}/contact/search?start=${a}&limit=${t}${r}`;return this.makeGetRequestWithAuth(i)});l(this,"tablekeyPerson",(a=0,t=10,r="")=>{const i=`${c}/key/person/search?start=${a}&limit=${t}${r}`;return this.makeGetRequestWithAuth(i)});l(this,"tableReference",(a=0,t=10,r="")=>{const i=`${c}/reference/search?start=${a}&limit=${t}${r}`;return this.makeGetRequestWithAuth(i)});l(this,"tableBankDetails",(a=0,t=10,r="")=>{const i=`${c}/bank/detail/search?start=${a}&limit=${t}${r}`;return this.makeGetRequestWithAuth(i)});l(this,"tableRateCard",(a=0,t=10,r="")=>{const i=`${c}/rate/card/search?start=${a}&limit=${t}${r}`;return this.makeGetRequestWithAuth(i)});l(this,"tableGstDetails",(a=0,t=10,r="")=>{const i=`${c}/tax/details/search?start=${a}&limit=${t}${r}`;return this.makeGetRequestWithAuth(i)});l(this,"tableOrgRepLevel",(a=0,t=10,r="")=>{const i=`${c}/org/rep/level/search?start=${a}&limit=${t}${r}`;return this.makeGetRequestWithAuth(i)});l(this,"getChannelName",(a=0,t=50,r="")=>{const i=`${c}/manage/filter?start=${a}&limit=${t}${r}`;return this.makeGetRequestWithAuth(i)})}}const S=new _e,le=m=>{const{name:h,data:a,dateAndTime:t,className:r}=m;return!h||!r?null:e.jsxs("div",{className:`${r} bg-primary-sapphireBlue-100 p-2.5 rounded-2xl shadow-OverlayPanelHeader`,children:[e.jsx("div",{children:e.jsxs("div",{className:"flex justify-center items-center gap-1.25 w-fit",children:[e.jsx("div",{className:"w-6 h-6 border-2 rounded-full flex justify-center items-center text-sm",children:h[0]??"N"}),e.jsx("div",{className:"font-bold leading-sm text-sm",children:h})]})}),a===""?e.jsx(e.Fragment,{children:"Loader..."}):e.jsx("div",{className:"ml-7 font-normal text-left text-xs  leading-xsm max-w-[500px] break-words",children:a}),e.jsx("div",{className:"text-right text-xs text-secondary-steelBlue-500",children:t||e.jsx(o,{height:"1rem",width:"100%",borderRadius:"8px",animation:"wave"})})]})},oe="/assets/notification-0fa13104.svg",Be=m=>e.jsxs("div",{className:"w-full p-1.5 flex justify-start items-center gap-1.5 rounded-xl border-2 bg-[#FFFFFF]",children:[e.jsx("div",{className:"w-9 h-9 bg-[#FFF8DF] rounded-full flex justify-center items-center",children:e.jsx("img",{src:oe,alt:"Round",className:""})}),e.jsxs("div",{className:"font-medium leading-[18px] text-[12px] ",children:[" ","This conversation is closed. Click on ‘Reopen Conversation’ to reopen the conversation"]})]}),Ge="/assets/message-cee6c7f4.svg",We=()=>e.jsx("div",{className:"right h-full bg-primary-sapphireBlue-100 w-full border-orange-600 flex justify-center items-center",children:e.jsxs("div",{className:" w-59.5 h-20 flex flex-col justify-center items-center",children:[e.jsx("div",{className:"w-full  m-auto flex flex-col justify-center items-center",children:e.jsx("img",{src:Ge,alt:"messageIcon"})}),e.jsx("div",{className:"font-normal text-center text-xs leading-4",children:"Please choose a conversation you would like to read and respond to."})]})}),qe=m=>{var r,i,E,I,g,b,A;const h=()=>e.jsx("div",{className:"border-2 border-[#B8E8FF] px-1.5 py-0.25 rounded-md font-normal text-[#1f4a7f] text-[12px]",children:"In Progress"}),a=()=>e.jsx("div",{className:"border-2 border-[#C7E9C2] px-1.5 py-0.25 rounded-md font-normal text-[#225c1f] text-[12px]",children:"Close"}),{data:t}=m;return e.jsxs("div",{className:"w-full flex items-center gap-1.5 pl-1.5 ",children:[t.isNewMessageInConversation?e.jsx("span",{className:"rounded-md bg-red-500 w-1.5 h-1.5"}):e.jsx("div",{className:"w-1.5"}),e.jsx("div",{className:"w-9 h-9 border-2 rounded-full flex justify-center items-center",children:((r=t==null?void 0:t.initiatedByUser)==null?void 0:r.name[0])??"N"}),e.jsxs("div",{className:"flex w-full justify-between flex-1",children:[e.jsxs("div",{className:"flex flex-col gap-0.5",children:[e.jsx("div",{className:"text-sm",children:((i=t==null?void 0:t.initiatedByUser)==null?void 0:i.fullName)!==void 0&&((E=t==null?void 0:t.initiatedByUser)==null?void 0:E.fullName)!==""?(I=t==null?void 0:t.initiatedByUser)==null?void 0:I.fullName:((g=t==null?void 0:t.initiatedByUser)==null?void 0:g.name)!==void 0&&((b=t==null?void 0:t.initiatedByUser)==null?void 0:b.name)!==""?(A=t==null?void 0:t.initiatedByUser)==null?void 0:A.name:"New Conversation"}),e.jsx("div",{className:"truncate max-w-50 text-xs text-[#8690AD]",children:(t==null?void 0:t.summary)??""})]}),e.jsxs("div",{className:"flex flex-col items-end gap-0.5",children:[e.jsx("div",{className:"text-xs text-[#8690AD]",children:Ie(t.createdAtSystemDate)??""}),e.jsx("div",{children:t.status==="IN_PROGRESS"?h():t.status==="CLOSED"?a():h()})]})]})]})},Me=m=>{const{handleCancelConversation:h}=m;return e.jsxs("div",{className:"w-full px-1.5 p-1.5 flex justify-between items-center gap-1.5 rounded-xl border-2 bg-[#FFFFFF]",children:[e.jsxs("div",{className:"flex gap-1 justify-center items-center",children:[e.jsx("div",{className:"w-9 h-9bg-[#FFF8DF] rounded-full flex justify-center items-center",children:e.jsx("img",{src:oe,alt:"Round",className:""})}),e.jsxs("div",{className:"font-medium leading-[18px] text-[12px] w-55.5",children:[" ","New Conversation will reopen the stage , All members will be notified"]})]}),e.jsx("div",{className:"text-[#0560FD] text-xs cursor-pointer",onClick:h,children:"Cancel conversation"})]})},Ve="/assets/closeIcon-b9083511.svg",ce={LOGIN:"Login",QC:"QC",PD:"PD",LEGAL_REPORT:"Legal Report",TECHNICAL_REPORT:"Technical Report",RCU_REPORT:"RCU Report",DEDUPE:"Dedupe",CAM_AND_RECOMMENDATION:"Cam And Recommendation",FINANCIAL_APPROVAL:"Financial Approval",IN_PRINCIPAL_APPROVAL:"In Principal Approval",FINAL_APPROVAL:"Final Approval",REAPPEAL:"Reappeal",CREDIT_AND_QUERY:"Credit And Query",FEES_AND_RECEIPT:"Fees And Receipt",POINT_OF_INTEREST:"Point Of Interest",STAGE_AND_STATUS:"Stage And Status"},He={INITIATED:"Initiated",COMPLETED:"Completed",CANCELLED:"Cancelled",RE_OPEN:"Re-open",IN_REVIEW:"In Review",PAUSED:"Paused",REJECTED:"Rejected",APPROVED:"Approved"},Ze=d.forwardRef((m,h)=>{var K,X,Z,ee;const{handleCloseOverLay:a,params:t}=m,r=d.useRef(null),[i,E]=d.useState([]),[I,g]=d.useState(!0),[b,A]=d.useState([]),[de,F]=d.useState(!1),[he,D]=d.useState(null),[p,xe]=d.useState({}),[w,U]=d.useState(!1),[x,ue]=d.useState([]),[V,me]=d.useState(0),[N,k]=d.useState(""),[_,O]=d.useState(""),[pe,B]=d.useState(!0),[$,P]=d.useState(null),G=d.useRef(null),W=d.useRef(null),[H,y]=d.useState(!1),[fe,J]=d.useState("");d.useEffect(()=>(ge(),()=>{j(),v(),y(!1),g(!1)}),[]);const ge=async()=>{await ve(),await je(),await R(),C()},ve=async()=>{const s=localStorage.getItem("stageDetail")??"",n=JSON.parse(s);J(ce[n==null?void 0:n.stageName]??"")},je=async()=>{Oe.getUserDetail().then(s=>{xe(s==null?void 0:s.data)}).catch(s=>{console.log("err")})},R=async()=>{await S.getAllChats(`loan.uid=${t.loanUid}&stage.uid=${t.stageUid}`).then(s=>{E(s.data.results),g(!1)}).catch(s=>{console.log("err"),g(!1)})},Q=async s=>{var u;const n=await S.getFirstChat(`${s}`);try{ue((u=n.data)==null?void 0:u.results[0]),me(n.data.totalRecords)}catch(f){console.log(f)}},q=async s=>{await S.getAllFullChats(s).then(n=>{A(n.data),y(!1),Y(s)}).catch(n=>{console.log("err")})},C=async()=>{const s=ae("VITE_MESSAGE_LIST_TIMING");W.current=setInterval(()=>{L("MESSAGES: the polling started for conversationList","green"),R()},s)},v=()=>{L("MESSAGES: the polling stopped for conversationList","red"),clearInterval(W.current),W.current=null},M=async s=>{const n=ae("VITE_MESSAGE_CONVERSATION_TIMING");s&&(G.current=setInterval(async()=>{L("MESSAGES: the polling started for conversations","green"),await q(s)},n))},j=()=>{L("MESSAGES: the polling stopped for conversations","red"),clearInterval(G.current),G.current=null},Ne=()=>{var n;const s={loan:{uid:t.loanUid},stage:{uid:t.stageUid},initiatedByPartner:{uid:((n=p==null?void 0:p.partner)==null?void 0:n.uid)??""},initiatedByUser:{uid:(p==null?void 0:p.uid)??""},status:"IN_PROGRESS"};return p.partner===null&&(s.initiatedByPartner=null),s},ye=s=>{var u;const n={loan:{uid:t.loanUid},stage:{uid:t.stageUid},conversation:{uid:s},sentByPartner:{uid:((u=p==null?void 0:p.partner)==null?void 0:u.uid)??""},sentByUser:{uid:(p==null?void 0:p.uid)??""},message:_};return p.partner===null&&(n.sentByPartner=null),n},Re=()=>{v(),j(),N&&k(""),A([]),B(!1),U(!0),D(0),F(!0),P(null),E([{summary:"Start by typing message..",createdAtSystemDate:Date.now(),status:"not Required"},...i])},Se=async(s,n)=>{y(!0),Y(s.uid),O(""),j(),v(),await M(s.uid),await C(),R(),A([]),B(!1),D(n),U(!1),F(!1),k(s.uid),await Q(s.uid),P(s.status),q(s.uid),y(!1)},Ce=async()=>{if(_==="")return;const s=Le(re.STAGE_DETAIL)??"",n=JSON.parse(s);if(n.status===T.APPROVED||n.status===T.REJECTED||n.status===T.COMPLETED||n.status===T.CANCELLED)try{const u=await Ue.initiateStageReapeal({status:He.RE_OPEN,uid:`${t.stageUid}`,stageInitiation:null}),f=JSON.stringify(u==null?void 0:u.data);Te(re.STAGE_DETAIL,f),J(ce[n==null?void 0:n.stageName]??"")}catch(u){console.log(u)}if(N)z(N);else{const u=Ne();await S.startConversation(u).then(f=>{k(f==null?void 0:f.data.uid),z(f==null?void 0:f.data.uid)}).catch(f=>{console.log("err")})}},Ae=async()=>{v(),j(),C(),y(!0);const s=await S.getAllPreviousChats(N,V);try{A(s.data.results),y(!1)}catch(n){console.log(n),y(!0)}},Ee=async()=>{j(),v(),C(),O(""),g(!0),B(!0),await R(),D(null),F(!1),console.log(w),g(!1)},we=async()=>{j(),v(),console.log($),$==="CLOSED"?await S.ReOpenConversation(N,{uid:N,status:"IN_PROGRESS"}).then(s=>{console.log("object"),P("IN_PROGRESS"),R(),j(),v(),C(),M(N)}).catch(s=>{console.log("err")}):await S.FinishConversation(N,{uid:N,status:"CLOSED"}).then(s=>{console.log("object"),P("CLOSED"),F(!1),R(),j(),v(),C()}).catch(s=>{console.log("err")})},z=async s=>{j(),v(),y(!0),g(!0);const n=ye(s);await S.sendReply(n).then(async u=>{O(""),Q(s),R(),await q(s),U(!1),F(!1)}).catch(u=>{console.log("err")}),g(!1),M(s),C(),y(!1)},Y=async s=>{await S.ReadConversation(s).then(n=>{R()}).catch(n=>{console.log("err")})};return d.useImperativeHandle(h,()=>({startPollingForUsers:C,pauseThePollingForUsers:v,pauseThePollingForConversation:j,getListOfUsers:R,setLoadersForUsers:g,setListOfUsers:E})),e.jsxs("div",{className:"h-full flex flex-col",children:[e.jsxs("div",{className:"shadow-OverlayPanelHeader flex justify-between items-center p-3 rounded-t-md",children:[e.jsx("div",{className:"pl-3 font-medium text-base text-primary-gray-40",children:"Conversations"}),e.jsx("img",{onClick:a,src:Ve,alt:"close Icon",className:"cursor-pointer"})]}),e.jsxs("div",{className:"flex h-[calc(100%-48px)] w-full",children:[e.jsxs("div",{className:"h-full w-[376px]",children:[e.jsxs("div",{className:"flex items-center text-xs leading-4.5 font-normal pl-6 py-3 gap-0.5",children:[e.jsx("div",{className:"text-secondary-steelBlue-500",children:"Stage"}),e.jsx("div",{className:"text-secondary-steelBlue-500",children:":"}),e.jsx("div",{className:"text-primary-gray-40",children:fe})]}),e.jsx("div",{className:"h-[calc(100%-110px)] flex flex-col gap-3 overflow-y-auto",children:I?e.jsxs("div",{className:"h-[470px] w-[364px] flex  flex-col pl-4 gap-2.5",children:[e.jsx("div",{className:"h-[67px] flex justify-center items-center p-1.5 ",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(o,{height:"36px",width:"36px",shape:"circle"}),e.jsxs("div",{className:" flex flex-col gap-3",children:[e.jsx(o,{height:"10px",width:"300px"}),e.jsx(o,{height:"10px",width:"300px"})]})]})}),e.jsx("div",{className:"h-[67px] flex justify-center items-center p-1.5 ",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(o,{height:"36px",width:"36px",shape:"circle"}),e.jsxs("div",{className:" flex flex-col gap-3",children:[e.jsx(o,{height:"10px",width:"300px"}),e.jsx(o,{height:"10px",width:"300px"})]})]})}),e.jsx("div",{className:"h-[67px] flex justify-center items-center p-1.5 ",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(o,{height:"36px",width:"36px",shape:"circle"}),e.jsxs("div",{className:" flex flex-col gap-3",children:[e.jsx(o,{height:"10px",width:"300px"}),e.jsx(o,{height:"10px",width:"300px"})]})]})}),e.jsx("div",{className:"h-[67px] flex justify-center items-center p-1.5 ",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(o,{height:"36px",width:"36px",shape:"circle"}),e.jsxs("div",{className:" flex flex-col gap-3",children:[e.jsx(o,{height:"10px",width:"300px"}),e.jsx(o,{height:"10px",width:"300px"})]})]})}),e.jsx("div",{className:"h-[67px] flex justify-center items-center p-1.5 ",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(o,{height:"36px",width:"36px",shape:"circle"}),e.jsxs("div",{className:" flex flex-col gap-3",children:[e.jsx(o,{height:"10px",width:"300px"}),e.jsx(o,{height:"10px",width:"300px"})]})]})}),e.jsx("div",{className:"h-[67px] flex justify-center items-center p-1.5 ",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(o,{height:"36px",width:"36px",shape:"circle"}),e.jsxs("div",{className:" flex flex-col gap-3",children:[e.jsx(o,{height:"10px",width:"300px"}),e.jsx(o,{height:"10px",width:"300px"})]})]})})]}):i&&i.map((s,n)=>e.jsx("div",{className:`hover:bg-primary-sapphireBlue-100 rounded-sm py-3 pr-3 ml-1.5 ${he===n?"bg-primary-sapphireBlue-100":"bg-[#ffffff] text-gray-700"}`,onClick:()=>Se(s,n),children:e.jsx(qe,{data:s})},n))}),e.jsx("div",{className:"flex justify-center items-center p-3",children:e.jsx(ie,{onClickWithLoader:Re,label:"New Conversation",disabled:de,buttonElement:!0,className:"w-87 m-auto !rounded-md h-9 flex justify-center items-center btn-lbl-auto gap-1.5",buttonType:"NEW_CONVERSATION"})})]}),e.jsx("div",{className:"h-full flex flex-col flex-1 bg-primary-sapphireBlue-100 shadow-OverlayPanelHeader",children:pe?e.jsx(We,{}):H===!0?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"h-[470px]  flex  flex-col gap-5",children:[e.jsx("div",{className:" ",children:e.jsx("div",{className:"flex justify-end items-end ",children:e.jsx(o,{height:"20px",width:"200px"})})}),e.jsx("div",{className:"h-[124px] flex justify-center items-center p-1.5 ",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(o,{height:"36px",width:"36px",shape:"circle"}),e.jsxs("div",{className:" flex flex-col gap-3",children:[e.jsx(o,{height:"10px",width:"500px"}),e.jsx(o,{height:"10px",width:"500px"}),e.jsx(o,{height:"10px",width:"200px"})]})]})})]})," "]}):e.jsxs(e.Fragment,{children:[w?e.jsx("div",{className:"h-12"}):e.jsxs("div",{className:"flex justify-end items-center h-12 py-3 px-6 gap-1.5",children:[e.jsx("div",{onClick:we,className:"font-normal text-blue-900 text-xs cursor-pointer",children:$==="CLOSED"?"Re-Open Conversation":"Finish Conversation"}),e.jsx("img",{src:ke,alt:"click",className:""})]}),e.jsxs("div",{className:"h-[calc(100%-168px)]",children:[e.jsx("div",{className:"mx-3 min-h-23",children:w?e.jsx(e.Fragment,{}):e.jsx(le,{loaderForConversation:H,name:((K=x==null?void 0:x.sentByUser)==null?void 0:K.fullName)===""?`${(X=x==null?void 0:x.sentByUser)==null?void 0:X.name} ${(Z=x==null?void 0:x.sentByUser)==null?void 0:Z.lastName}`:(ee=x==null?void 0:x.sentByPartner)==null?void 0:ee.fullName,data:x==null?void 0:x.message,dateAndTime:ne(x==null?void 0:x.createdAtSystemDate),className:"opacity-100 bg-white"})}),e.jsx("div",{className:"text-xs  text-secondary-steelBlue-500 bg-gray-100 py-1.5 flex justify-between items-center px-6",children:!w&&e.jsxs(e.Fragment,{children:[e.jsx(Pe,{label:` ${V-1} Replies`}),e.jsx("div",{onClick:Ae,className:"cursor-pointer underline text-blue-600",children:"Load Previous Replies"})]})}),e.jsx("div",{ref:r,className:"overflow-y-auto flex-col space-y-2 gap-2.5 h-[calc(100%-120px)] bg-gray-100 px-3",children:b&&b.filter(s=>s.uid!==x.uid).map((s,n)=>{var u,f,te,se;return e.jsx("div",{children:e.jsx(le,{className:"opacity-100 bg-white max-w-[600px]",name:`${(u=s==null?void 0:s.sentByUser)==null?void 0:u.name} ${(f=s==null?void 0:s.sentByUser)==null?void 0:f.lastName}`??((te=s==null?void 0:s.sentByPartner)==null?void 0:te.name),data:s.message,dateAndTime:ne((se=s==null?void 0:s.conversation)==null?void 0:se.createdAtSystemDate)??"-"})},n)})}),e.jsxs(e.Fragment,{children:[w&&e.jsx("div",{className:"mx-3 mt-1.5",children:e.jsx(Me,{handleCancelConversation:Ee})}),$==="CLOSED"&&!w&&e.jsx("div",{className:"mx-3 mt-1.5",children:e.jsx(Be,{})})]})]}),e.jsx("div",{className:"h-30 flex items-end mt-2",children:e.jsxs("div",{className:"flex gap-3 justify-center pl-3 items-center",children:[e.jsx(De,{placeholder:"Add your reply... ",className:"min-w-[500px] h-7.5 max-h-20",value:_,disabled:$==="CLOSED",onChange:s=>O(s.target.value)}),e.jsx(ie,{onClick:Ce,disabled:$==="CLOSED",buttonType:"REPLY_CONVERSATION",className:"bg-slate-100 hover:bg-slate-100 shadow-none"})]})})]})})]})]})});export{S as C,Ze as M,ke as c};
//# sourceMappingURL=MainMessageBody-e15b4437.js.map
