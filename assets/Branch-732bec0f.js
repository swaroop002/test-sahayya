var n=Object.defineProperty;var c=(h,a,t)=>a in h?n(h,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):h[a]=t;var r=(h,a,t)=>(c(h,typeof a!="symbol"?a+"":a,t),t);import{at as m}from"./index-e8217573.js";const u="/custom/api/branch";class o extends m{constructor(){super(...arguments);r(this,"getAll",(t=0,e=10,s="")=>{const i=`${u}/search?${s}start=${t}&limit=${e}`;return this.makeGetRequestWithAuth(i)});r(this,"getFilterByName",(t=0,e=10,s="")=>{const i=`${u}/filter?name=${s}`;return this.makeGetRequestWithAuth(i)});r(this,"findByName",(t=0,e=10,s="")=>{const i=`${u}/search?name:lk=${s}&start=${t}&limit=${e}`;return this.makeGetRequestWithAuth(i)});r(this,"save",t=>{const e=`${u}213`;return this.makePostRequestWithAuth(e,t)});r(this,"create",t=>{const e=`${u}/manage`;return this.makePostRequestWithAuth(e,t)});r(this,"approve",t=>{const e="/custom/api/approval/request";return this.makePostRequestWithAuth(e,t)});r(this,"update",(t,e)=>{const s=`${u}/manage/${t}`;return this.makePutRequestWithAuth(s,e)});r(this,"delete",t=>{const e=`${u}/${t}`;return this.makeDeleteRequestWithAuth(e)});r(this,"findById",t=>{const e=`${u}/uid/${t}`;return this.makeGetRequestWithAuth(e)});r(this,"findByIdForTable",t=>{const e=`${u}/product/mapping/search?uid/${t}`;return this.makeGetRequestWithAuth(e)});r(this,"getDataForTableByUid",(t=0,e=10,s="")=>{const i=`${u}/product/mapping/search?start=${t}&limit=${e}${s}`;return this.makeGetRequestWithAuth(i)});r(this,"activate",t=>{const e=`${u}/activate/${t}`;return this.makePutRequestWithAuth(e)});r(this,"Inactivate",t=>{const e=`${u}/inactivate/${t}`;return this.makePutRequestWithAuth(e)})}}const A=new o;export{A as O};
//# sourceMappingURL=Branch-732bec0f.js.map