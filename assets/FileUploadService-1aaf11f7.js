var y=Object.defineProperty;var P=(c,l,e)=>l in c?y(c,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[l]=e;var n=(c,l,e)=>(P(c,typeof l!="symbol"?l+"":l,e),e);import{bW as b,at as m}from"./index-e8217573.js";b.create({baseURL:"https://sahayya.dev.vm.web-devapp.com/"});const f="/storage/api";class U extends m{constructor(e){super(e);n(this,"chunkSize");n(this,"threadsQuantity");n(this,"file");n(this,"fileName");n(this,"aborted");n(this,"uploadedSize");n(this,"progressCache");n(this,"activeConnections");n(this,"parts");n(this,"uploadedParts");n(this,"fileId");n(this,"fileKey");n(this,"finalUrl");n(this,"onProgressFn");n(this,"onErrorFn");n(this,"start",async()=>{this.initialize()});this.chunkSize=e.chunkSize||1024*1024*10,this.threadsQuantity=Math.min(e.threadsQuantity||5,10),this.file=e.file,this.fileName=e.fileName,this.aborted=!1,this.uploadedSize=0,this.progressCache={},this.activeConnections={},this.parts=[],this.uploadedParts=[],this.fileId=null,this.fileKey=null,this.finalUrl=null,this.onProgressFn=()=>{},this.onErrorFn=()=>{}}async initialize(){try{const e=this.fileName,t=new Date().getTime(),i=Math.random().toString(36).substring(2,8),a={name:`${t}_${i}_${e}`,contentType:this.file.type,size:this.file.size},s=`${f}/awsS3/true/initialize/multipart/upload`,o=(await this.makePostRequestWithAuth(s,a)).data;this.fileId=o.UploadId,this.fileKey=o.Key;const u=Math.ceil(this.file.size/this.chunkSize),d={uploadId:this.fileId,name:this.fileKey,parts:u},p=`${f}/awsS3/true/generate/multipart/signed/url`,g=(await this.makePostRequestWithAuth(p,d)).data.parts;this.parts.push(...g),this.sendNext()}catch(e){await this.complete(e)}}sendNext(){const e=Object.keys(this.activeConnections).length;if(e>=this.threadsQuantity)return;if(!this.parts.length){e||this.complete();return}const t=this.parts.pop();if(this.file&&t){const i=(t.PartNumber-1)*this.chunkSize,r=this.file.slice(i,i+this.chunkSize),a=()=>{this.sendNext()};this.sendChunk(r,t,a).then(()=>{this.sendNext()}).catch(s=>{this.parts.push(t),this.complete(s)})}}async complete(e){if(e&&!this.aborted){this.onErrorFn(e);return}if(e){this.onErrorFn(e);return}try{await this.sendCompleteRequest()}catch(t){this.onErrorFn(t)}}async sendCompleteRequest(){if(this.fileId&&this.fileKey){const e={UploadId:this.fileId,Key:this.fileKey,parts:this.uploadedParts,contentType:this.file.type,size:this.file.size},t=`${f}/awsS3/true/finalize/multipart/upload`;this.finalUrl=await this.makePostRequestWithAuth(t,e)}}sendChunk(e,t,i){return new Promise((r,a)=>{this.upload(e,t,i).then(s=>{if(s!==200){a(new Error("Failed chunk upload"));return}r(1)}).catch(s=>{a(s)})})}handleProgress(e,t){if(this.file){(t.type==="progress"||t.type==="error"||t.type==="abort")&&(this.progressCache[e]=t.loaded),t.type==="uploaded"&&(this.uploadedSize+=this.progressCache[e]||0,delete this.progressCache[e]);const i=Object.keys(this.progressCache).map(Number).reduce((h,o)=>h+=this.progressCache[o],0),r=Math.min(this.uploadedSize+i,this.file.size),a=this.file.size,s=Math.round(r/a*100);this.onProgressFn({sent:r,total:a,percentage:s})}}upload(e,t,i){return new Promise((r,a)=>{if(this.fileId&&this.fileKey){const s=this.activeConnections[t.PartNumber-1]=new XMLHttpRequest;i();const h=this.handleProgress.bind(this,t.PartNumber-1);s.upload.addEventListener("progress",h),s.addEventListener("error",h),s.addEventListener("abort",h),s.addEventListener("loadend",h),s.open("PUT",t.signedUrl),s.onreadystatechange=()=>{if(s.readyState===4&&s.status===200){const o=s.getResponseHeader("ETag");if(o){const u={PartNumber:t.PartNumber,ETag:o.replaceAll('"',"")};this.uploadedParts.push(u),r(s.status),delete this.activeConnections[t.PartNumber-1]}}},s.onerror=o=>{a(o),delete this.activeConnections[t.PartNumber-1]},s.onabort=()=>{a(new Error("Upload canceled by user")),delete this.activeConnections[t.PartNumber-1]},s.send(e)}})}onProgress(e){return this.onProgressFn=e,this}onError(e){return this.onErrorFn=e,this}abort(){Object.keys(this.activeConnections).map(Number).forEach(e=>{this.activeConnections[e].abort()}),this.aborted=!0}async getFinalUrl(){return new Promise((e,t)=>{const i=setInterval(()=>{this.finalUrl&&(clearInterval(i),e(this.finalUrl))},1e3);setTimeout(()=>{clearInterval(i),t(new Error("Timed out while waiting for final URL"))},5e8)})}}const S="/storage/api",v="/custom/api";class w extends m{constructor(){super(...arguments);n(this,"saveFile",async(e,t)=>{const i=new FormData;i.append("file",e);const r=`${S}/awsS3/true/${t}/upload`;return this.makePostRequestWithAuth(r,i,{"Content-Type":"multipart/form-data"})});n(this,"saveVideo",async e=>{if(new FormData().append("file",e),e){let i;const r={fileName:e.name,file:e},a=new U(r);a.onProgress(({percentage:d})=>{if(d!==i){i=d,console.log("percentage",`${i}%`);const p=document.getElementById("progress");p&&(p.textContent=`Uploading... ${i}%`)}}).onError(d=>{console.error(d)}),await a.start();const s=await a.getFinalUrl();console.log(s);const{data:h,...o}=s;return{data:{videoUrl:h},...o}}})}getSignedURL(e){const t=`${v}/document/awsS3/signed/url?objectUrl=${e}`;return this.makeGetRequestWithAuth(t)}}const N=new w;export{N as F};
//# sourceMappingURL=FileUploadService-1aaf11f7.js.map