var c=Object.defineProperty;var u=(s,t,e)=>t in s?c(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var r=(s,t,e)=>(u(s,typeof t!="symbol"?t+"":t,e),e);import{at as o}from"./index-e8217573.js";const l="/custom/api/industry/type";class m extends o{constructor(){super(...arguments);r(this,"getAll",(e=0,i=10,a="")=>{const n=`${l}/search?${a}start=${e}&limit=${i}`;return this.makeGetRequestWithAuth(n)})}}const d=new m;export{d as I};
//# sourceMappingURL=Industry-6ae795a6.js.map