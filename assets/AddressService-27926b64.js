var n=Object.defineProperty;var c=(r,s,e)=>s in r?n(r,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[s]=e;var i=(r,s,e)=>(c(r,typeof s!="symbol"?s+"":s,e),e);import{at as u}from"./index-e8217573.js";const o="/custom/api";class h extends u{constructor(){super(...arguments);i(this,"getAll",(e=0,t=10,d="")=>{const a=`${o}/property/address/search?start=${e}&limit=${t}${d}`;return this.makeGetRequestWithAuth(a)});i(this,"getAddressWithoutDocForDde",(e,t,d)=>{const a=`${o}/property/address/search?loan.uid=${e}&applicant.uid=${t}&isActive=true&primaryAddressType=${d}`;return this.makeGetRequestWithAuth(a)});i(this,"getOrgRegisteredAddress",(e,t)=>{const d=o+`/login/basic/info/corporate/address/${e}/${t}`;return this.makeGetRequestWithAuth(d)});i(this,"createOrgRegisteredAddress",e=>{const t=o+"/login/dde/basic/info/corporate/address";return this.makePostRequestWithAuth(t,e)});i(this,"updateOrgRegisteredAddress",e=>{const t=o+"/login/dde/basic/info/corporate/address";return this.makePutRequestWithAuth(t,e)})}}const g=new h;export{g as A};
//# sourceMappingURL=AddressService-27926b64.js.map