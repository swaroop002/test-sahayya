var r=Object.defineProperty;var a=(o,t,e)=>t in o?r(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var i=(o,t,e)=>(a(o,typeof t!="symbol"?t+"":t,e),e);import{at as n,bW as p}from"./index-e8217573.js";const d="/posts";class g extends n{constructor(){super(...arguments);i(this,"save",e=>{let s=this.getDefaultApiUrl();return s=`${s}${d}`,this.getAxios().post(s,{...e})})}getAll(e=0,s=10,c=""){let l="https://jsonplaceholder.typicode.com/todos/";return l=`${l}?_start=${e}&_limit=1000${c}`,p.get(l)}update(){console.log("object")}delete(){console.log("object")}findById(e){console.log("object")}}const A=new g;export{A as D};
//# sourceMappingURL=DemoService-45a29f0d.js.map
