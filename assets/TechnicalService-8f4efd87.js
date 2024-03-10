var o=Object.defineProperty;var c=(n,i,t)=>i in n?o(n,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[i]=t;var u=(n,i,t)=>(c(n,typeof i!="symbol"?i+"":i,t),t);import{at as l}from"./index-e8217573.js";const h="/custom/api",r=`${h}/technical`;class m extends l{constructor(){super(...arguments);u(this,"getTechnicalDetails",t=>{const e=`${r}/search?stage.uid=${t}&isActive=true`;return this.makeGetRequestWithAuth(e)});u(this,"getGeneralDetails",t=>{const e=`${r}/general/detail/${t}`;return this.makeGetRequestWithAuth(e)});u(this,"getPropertyValuation",(t=0,e=10,s)=>{const a=`${h}/stage/property/valuation/search?start=${t}&limit=${e}${s}`;return this.makeGetRequestWithAuth(a)});u(this,"getPropertyAmenities",(t=0,e=10,s)=>{const a=`${h}/stage/property/amenities/search?start=${t}&limit=${e}${s}`;return this.makeGetRequestWithAuth(a)});u(this,"getPropertyDetails",t=>{const e=`${r}/property/detail/${t}`;return this.makeGetRequestWithAuth(e)});u(this,"getValuationAndAmenities",t=>{const e=`${r}/valuation/${t}`;return this.makeGetRequestWithAuth(e)});u(this,"getStageOfConstruction",t=>{const e=`${r}/construction/stage/${t}`;return this.makeGetRequestWithAuth(e)});u(this,"getPropertyPhotos",t=>{const e=`${r}/property/photo?technicalUid=${t}`;return this.makeGetRequestWithAuth(e)});u(this,"getUploadReport",t=>{const e=`${r}/upload/document/${t}`;return this.makeGetRequestWithAuth(e)});u(this,"updateGeneralDetails",t=>{const e=`${r}/general/detail`;return this.makePutRequestWithAuth(e,t)});u(this,"updateDocumentDetails",t=>{const e=`${r}/document/detail`;return this.makePutRequestWithAuth(e,t)});u(this,"updateSurroundingLocalityDetails",t=>{const e=`${r}/surrounding/detail`;return this.makePutRequestWithAuth(e,t)});u(this,"updatePropertyDetails",t=>{const e=`${r}/property/detail`;return this.makePutRequestWithAuth(e,t)});u(this,"updatePropertyValuationAndAmenities",t=>{const e=`${r}/valuation`;return this.makePutRequestWithAuth(e,t)});u(this,"updateStageOfConstruction",t=>{const e=`${r}/construction/stage`;return this.makePutRequestWithAuth(e,t)});u(this,"updateGovtGuidelines",t=>{const e=`${r}/government/guidelines`;return this.makePutRequestWithAuth(e,t)});u(this,"updateOccupancyDetails",t=>{const e=`${r}/occupancy/detail`;return this.makePutRequestWithAuth(e,t)});u(this,"updatePropertyPhotos",t=>{const e=`${r}/property/photo`;return this.makePutRequestWithAuth(e,t)});u(this,"updateTechnicalStatus",t=>{const e=`${r}/status`;return this.makePutRequestWithAuth(e,t)});u(this,"updateUploadReport",t=>{const e=`${r}/upload/document`;return this.makePutRequestWithAuth(e,t)});u(this,"getDocumentExchangeList",(t=0,e=10,s)=>{const a=`${r}/document/exchange/search?start=${t}&limit=${e}${s}`;return this.makeGetRequestWithAuth(a)});u(this,"updateDocumentExchange",t=>{const e=`${r}/document/exchange`;return this.makePutRequestWithAuth(e,t)});u(this,"getDeviationNames",(t=0,e=0,s)=>{const a=`${h}/deviation/search?start=${t}&limit=${e}${s}&isActive=true`;return this.makeGetRequestWithAuth(a)});u(this,"getTechnicalDeviations",t=>{const e=`${r}/deviation${t}`;return this.makeGetRequestWithAuth(e)});u(this,"updateDeviations",t=>{const e=`${r}/deviation`;return this.makePutRequestWithAuth(e,t)});u(this,"stageComplete",(t,e)=>{const s=`${r}/complete/${t}`;return this.makePutRequestWithAuth(s,e)});u(this,"submit",(t,e)=>{const s=`${r}/submit/${t}`;return this.makePutRequestWithAuth(s,e)})}}const d=new m;export{d as T};
//# sourceMappingURL=TechnicalService-8f4efd87.js.map