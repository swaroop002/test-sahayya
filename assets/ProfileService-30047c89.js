var m=Object.defineProperty;var l=(s,t,e)=>t in s?m(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var i=(s,t,e)=>(l(s,typeof t!="symbol"?t+"":t,e),e);import{at as u}from"./index-e8217573.js";const n="/custom/api/user/profile";class $ extends u{constructor(){super(...arguments);i(this,"findDelegateByName",e=>{const a=`${n}/manage/filter/assignee?loanUid=${e.loanId}&stageName=${e.stageName}&name=${e.name}`;return this.makeGetRequestWithAuth(a)});i(this,"findAssignee",(e=0,a=10,r)=>{const o=`${n}/search?start=${e}&limit=${a}${r}`;return this.makeGetRequestWithAuth(o)})}}const g=new $;export{g as P};
//# sourceMappingURL=ProfileService-30047c89.js.map
