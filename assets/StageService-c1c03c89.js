var g=Object.defineProperty;var m=(u,r,t)=>r in u?g(u,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):u[r]=t;var i=(u,r,t)=>(m(u,typeof r!="symbol"?r+"":r,t),t);import{at as c}from"./index-e8217573.js";const n="/custom/api";class l extends c{constructor(){super(...arguments);i(this,"getStages",(t=0,e=10,a)=>{const s=n+`/stage/initiation/detail/search?start=${t}&limit=${e}${a}`;return this.makeGetRequestWithAuth(s)});i(this,"getReapealInitiationStage",t=>{const e=n+`/stage/initiation/detail/search?stage.stageName:in=[CREDIT_AND_QUERY,LOGIN]&isActive=true${t}`;return this.makeGetRequestWithAuth(e)});i(this,"getStageHistory",(t=0,e=10,a)=>{const s=n+`/tat/search?start=${t}&limit=${e}${a}`;return this.makeGetRequestWithAuth(s)});i(this,"getReappealDetails",t=>{const e=n+`/stage/manage/details/${t}`;return this.makeGetRequestWithAuth(e)});i(this,"findExternalVendor",(t=0,e=10,a="")=>{const s=n+`/partner/search?isActive=true&name:lk=${a}&start=${t}&limit=${e}`;return this.makeGetRequestWithAuth(s)});i(this,"getExternalVendor",(t=0,e=10,a="")=>{const s=n+`/partner/manage/stage/filter?start=${t}&limit=${e}${a}`;return this.makeGetRequestWithAuth(s)});i(this,"getInternalVendor",(t=0,e=10,a="")=>{const s=n+`/user/profile/manage/filter/internal/vendor?start=${t}&limit=${e}${a}`;return this.makeGetRequestWithAuth(s)});i(this,"findStageAssignee",(t=0,e=10,a="",s,h)=>{const o=n+`/user/profile/manage/filter/assignee?loanUid=${s}&stageName=${h}&name=${a}&start=${t}&limit=${e}`;return this.makeGetRequestWithAuth(o)});i(this,"initiateStage",t=>{const e=n+"/stage/manage";return this.makePostRequestWithAuth(e,t)});i(this,"initiateStageReapeal",t=>{const e=n+"/stage/manage";return this.makePutRequestWithAuth(e,t)});i(this,"rejectLoan",(t,e)=>{const a=n+`/stage/manage/reject/loan/${t}`;return this.makePutRequestWithAuth(a,e)});i(this,"acceptOrRejectReappealLoan",(t,e)=>{const a=n+"/stage/manage";return this.makePutRequestWithAuth(a,e)});i(this,"updateStage",t=>{const e=`${n}/stage/manage`;return this.makePutRequestWithAuth(e,t)});i(this,"createReAppeal",t=>{const e=`${n}/stage/manage`;return this.makePostRequestWithAuth(e,t)});i(this,"getPropertyDetails",(t=0,e=10,a="")=>{const s=n+`/property/address/search?${a}&start=${t}&limit=${e}`;return this.makeGetRequestWithAuth(s)});i(this,"getCustomerDetails",(t=0,e=10,a="")=>{const s=n+`/applicant/search?${a}&start=${t}&limit=${e}`;return this.makeGetRequestWithAuth(s)});i(this,"getStageInitiationDetails",t=>{const e=n+`/stage/initiation/detail/search?stage.uid=${t}&isActive=true`;return this.makeGetRequestWithAuth(e)});i(this,"getStageDetails",t=>{const e=n+`/stage/manage/details/${t}`;return this.makeGetRequestWithAuth(e)});i(this,"getRepaymentHistory",(t=0,e=10,a)=>{const s=n+`/stage/credit/repayment/history/search?start=${t}&limit=${e}${a}`;return this.makeGetRequestWithAuth(s)});i(this,"getDocumentScrutinized",(t=0,e=10,a="")=>{const s=n+`/stage/document/search?start=${t}&limit=${e}${a}`;return this.makeGetRequestWithAuth(s)});i(this,"getLegalDeviations",(t=0,e=10,a="")=>{const s=n+`/loan/deviation/search?start=${t}&limit=${e}${a}`;return this.makeGetRequestWithAuth(s)});i(this,"getStageName",t=>{const e=n+`/stage/manage/names?loanUid=${t}`;return this.makeGetRequestWithAuth(e)});i(this,"stageSearch",t=>{const e=n+`/stage/search?isActive=true${t}`;return this.makeGetRequestWithAuth(e)})}}const A=new l;export{A as S};
//# sourceMappingURL=StageService-c1c03c89.js.map
