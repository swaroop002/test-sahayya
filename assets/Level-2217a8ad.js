var n=Object.defineProperty;var c=(i,u,t)=>u in i?n(i,u,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[u]=t;var r=(i,u,t)=>(c(i,typeof u!="symbol"?u+"":u,t),t);import{at as o}from"./index-e8217573.js";const s="/custom/api/org/reporting/level";class l extends o{constructor(){super(...arguments);r(this,"getAll",(t=0,e=10,a="")=>{const h=`${s}/search?start=${t}&limit=${e}&${a}`;return this.makeGetRequestWithAuth(h)});r(this,"save",t=>{const e=`${s}213`;return this.makePostRequestWithAuth(e,t)});r(this,"approve",t=>{const e="/custom/api/approval/request";return this.makePostRequestWithAuth(e,t)});r(this,"update",(t,e)=>{const a=`${s}/${e}`;return this.makePutRequestWithAuth(a,t)});r(this,"delete",t=>{const e=`${s}/${t}`;return this.makeDeleteRequestWithAuth(e)});r(this,"findById",t=>{const e=`${s}/uid/${t}`;return this.makeGetRequestWithAuth(e)});r(this,"activate",t=>{const e=`${s}/activate/${t}`;return this.makePutRequestWithAuth(e)});r(this,"Inactivate",t=>{const e=`${s}/inactivate/${t}`;return this.makePutRequestWithAuth(e)})}}const v=new l;export{v as O};
//# sourceMappingURL=Level-2217a8ad.js.map