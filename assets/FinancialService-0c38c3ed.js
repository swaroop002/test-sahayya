var c=Object.defineProperty;var o=(i,e,t)=>e in i?c(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var l=(i,e,t)=>(o(i,typeof e!="symbol"?e+"":e,t),t);import{at as u}from"./index-e8217573.js";const n="/custom/api/financial/detail";class $ extends u{constructor(){super(...arguments);l(this,"getAll",(t=0,r=10,s)=>{const a=`${n}/search?start=${t}&limit=${r}${s}`;return this.makeGetRequestWithAuth(a)});l(this,"getAllCorporateHistorical",(t=0,r=10,s)=>{const a=`${n}/search?start=${t}&limit=${r}${s}`;return this.makeGetRequestWithAuth(a)});l(this,"getAllCorporateInvestment",(t=0,r=10,s)=>{const a=`${n}/search?start=${t}&limit=${r}${s}`;return this.makeGetRequestWithAuth(a)})}}const A=new $;export{A as F};
//# sourceMappingURL=FinancialService-0c38c3ed.js.map