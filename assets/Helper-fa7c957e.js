import{fj as K}from"./index-e8217573.js";import{s as Q}from"./Helper-03e9d878.js";const Z=(e,i)=>{var l,o,u,s,c,r,p,m,b,O,y,j,f,C,A,T,U,R,F,I,S;const n=JSON.parse(e!=null&&e.ccEmail?e==null?void 0:e.ccEmail:"{}");return{dateOfInitiation:(l=e==null?void 0:e.stage)==null?void 0:l.createdAt,showOnlyUploadReport:(u=(o=e==null?void 0:e.stage)==null?void 0:o.partner)==null?void 0:u.isUploadFile,stage:(s=e==null?void 0:e.stage)==null?void 0:s.stageName,internalAssignee:{name:(r=(c=e==null?void 0:e.stage)==null?void 0:c.assignee)==null?void 0:r.name},CCEmails:Array.isArray(n)?n:[],description:(p=e==null?void 0:e.stage)==null?void 0:p.remarks,vendorType:(m=e==null?void 0:e.stage)==null?void 0:m.smStageType,externalVendor:{name:(O=(b=e==null?void 0:e.stage)==null?void 0:b.partner)==null?void 0:O.name},legalUid:(j=(y=e==null?void 0:e.stage)==null?void 0:y.legal)==null?void 0:j.uid,address:i==null?void 0:i.address,propertyType:i==null?void 0:i.propertyType,pincode:{pinCode:(f=i==null?void 0:i.pincode)==null?void 0:f.pinCode,uid:(C=i==null?void 0:i.pincode)==null?void 0:C.uid},city:{name:(A=i==null?void 0:i.city)==null?void 0:A.name,uid:(T=i==null?void 0:i.city)==null?void 0:T.uid},state:(R=(U=i==null?void 0:i.city)==null?void 0:U.state)==null?void 0:R.name,latitude:i!=null&&i.latitude?`${parseFloat(i.latitude).toFixed(4)}`:"",longitude:i!=null&&i.longitude?`${parseFloat(i==null?void 0:i.longitude).toFixed(4)}`:"",stageDocuments:(F=e==null?void 0:e.stage)!=null&&F.stageDocuments?(S=(I=e==null?void 0:e.stage)==null?void 0:I.stageDocuments)==null?void 0:S.filter(L=>(L==null?void 0:L.isSharedAtInitiation)===!0):[]}},P=e=>{var n,g,l,o,u,s,c,r,p,m,b,O,y,j,f,C;return{dateOfInitiation:(n=e==null?void 0:e.stage)==null?void 0:n.createdAtSystemDate,legalUid:(l=(g=e==null?void 0:e.stage)==null?void 0:g.legal)==null?void 0:l.uid,loanNo:((s=(u=(o=e==null?void 0:e.stage)==null?void 0:o.legal)==null?void 0:u.loan)==null?void 0:s.lanId)??"",branchNo:((m=(p=(r=(c=e==null?void 0:e.stage)==null?void 0:c.legal)==null?void 0:r.loan)==null?void 0:p.branch)==null?void 0:m.name)??"",agency:(O=(b=e==null?void 0:e.stage)==null?void 0:b.partner)==null?void 0:O.name,dateOfReport:(j=(y=e==null?void 0:e.stage)==null?void 0:y.legal)!=null&&j.dateOfReport?new Date((C=(f=e==null?void 0:e.stage)==null?void 0:f.legal)==null?void 0:C.dateOfReport):""}},D=e=>{var n,g,l,o,u,s,c,r,p,m,b,O,y,j,f,C,A;return{legalUid:(g=(n=e==null?void 0:e.stage)==null?void 0:n.legal)==null?void 0:g.uid,stageUid:(l=e==null?void 0:e.stage)==null?void 0:l.uid,natureOfTransactions:(u=(o=e==null?void 0:e.stage)==null?void 0:o.legal)==null?void 0:u.natureOfTransaction,subRegistrarOffice:(c=(s=e==null?void 0:e.stage)==null?void 0:s.legal)==null?void 0:c.subRegistrarOffice,nameOfPresentOwner:(p=(r=e==null?void 0:e.stage)==null?void 0:r.legal)==null?void 0:p.nameOfCurrentOwner,areaOfProperty:(b=(m=e==null?void 0:e.stage)==null?void 0:m.legal)==null?void 0:b.areaOfPropertyAsPerDoc,units:(y=(O=e==null?void 0:e.stage)==null?void 0:O.legal)==null?void 0:y.areaUnit,typeOfMortgage:(f=(j=e==null?void 0:e.stage)==null?void 0:j.legal)==null?void 0:f.typeOfMortgate,natureOfLand:(A=(C=e==null?void 0:e.stage)==null?void 0:C.legal)==null?void 0:A.natureOfLand}},t=e=>{var n,g,l,o,u,s,c,r,p,m,b,O,y,j,f,C,A,T,U,R,F,I,S,L,B,w,x,E,v,N,k,$,h,V,z,G,M,_,J,Y,q,H;return{legalUid:(g=(n=e==null?void 0:e.stage)==null?void 0:n.legal)==null?void 0:g.uid,stageUid:(l=e==null?void 0:e.stage)==null?void 0:l.uid,addressUid:(s=(u=(o=e==null?void 0:e.stage)==null?void 0:o.legal)==null?void 0:u.address)==null?void 0:s.uid,address:(p=(r=(c=e==null?void 0:e.stage)==null?void 0:c.legal)==null?void 0:r.address)==null?void 0:p.address,pincode:{pinCode:(y=(O=(b=(m=e==null?void 0:e.stage)==null?void 0:m.legal)==null?void 0:b.address)==null?void 0:O.pincode)==null?void 0:y.pinCode,uid:(A=(C=(f=(j=e==null?void 0:e.stage)==null?void 0:j.legal)==null?void 0:f.address)==null?void 0:C.pincode)==null?void 0:A.uid},city:{name:(F=(R=(U=(T=e==null?void 0:e.stage)==null?void 0:T.legal)==null?void 0:U.address)==null?void 0:R.city)==null?void 0:F.name,uid:(B=(L=(S=(I=e==null?void 0:e.stage)==null?void 0:I.legal)==null?void 0:S.address)==null?void 0:L.city)==null?void 0:B.uid},state:(N=(v=(E=(x=(w=e==null?void 0:e.stage)==null?void 0:w.legal)==null?void 0:x.address)==null?void 0:E.city)==null?void 0:v.state)==null?void 0:N.name,latitude:(h=($=(k=e==null?void 0:e.stage)==null?void 0:k.legal)==null?void 0:$.address)!=null&&h.latitude?`${parseFloat((G=(z=(V=e==null?void 0:e.stage)==null?void 0:V.legal)==null?void 0:z.address)==null?void 0:G.latitude).toFixed(4)}`:"",longitude:(J=(_=(M=e==null?void 0:e.stage)==null?void 0:M.legal)==null?void 0:_.address)!=null&&J.longitude?`${parseFloat((H=(q=(Y=e==null?void 0:e.stage)==null?void 0:Y.legal)==null?void 0:q.address)==null?void 0:H.longitude).toFixed(4)}`:""}},d=e=>{var n,g,l,o,u,s,c,r,p,m;return{legalUid:(g=(n=e==null?void 0:e.stage)==null?void 0:n.legal)==null?void 0:g.uid,eastBy:(o=(l=e==null?void 0:e.stage)==null?void 0:l.legal)==null?void 0:o.eastBy,westBy:(s=(u=e==null?void 0:e.stage)==null?void 0:u.legal)==null?void 0:s.westBy,northBy:(r=(c=e==null?void 0:e.stage)==null?void 0:c.legal)==null?void 0:r.northBy,southBy:(m=(p=e==null?void 0:e.stage)==null?void 0:p.legal)==null?void 0:m.southBy}},a=e=>{var n,g,l,o,u,s,c,r;return{legalUid:(g=(n=e==null?void 0:e.stage)==null?void 0:n.legal)==null?void 0:g.uid,status:(o=(l=e==null?void 0:e.stage)==null?void 0:l.legal)==null?void 0:o.finalOpinionStatus,remark:(s=(u=e==null?void 0:e.stage)==null?void 0:u.legal)==null?void 0:s.finalOpinionRemarks,certificateOrOpinion:(r=(c=e==null?void 0:e.stage)==null?void 0:c.legal)==null?void 0:r.finalOpinionCertificate}},ee=e=>{var n,g,l,o;return{legalUid:(g=(n=e==null?void 0:e.stage)==null?void 0:n.legal)==null?void 0:g.uid,richText:(o=(l=e==null?void 0:e.stage)==null?void 0:l.legal)==null?void 0:o.propertyTitleObservations}},le=e=>{var n,g,l,o;return{legalUid:(g=(n=e==null?void 0:e.stage)==null?void 0:n.legal)==null?void 0:g.uid,richText:(o=(l=e==null?void 0:e.stage)==null?void 0:l.legal)==null?void 0:o.titleSearch}},ie=e=>{var n,g,l;return{loanUid:(n=e==null?void 0:e.loan)==null?void 0:n.uid,applicantUid:(l=(g=e==null?void 0:e.stage)==null?void 0:g.applicant)==null?void 0:l.uid}},ne=(e,i)=>{var g,l,o;return{uid:e==null?void 0:e.uid,loan:{uid:(g=e==null?void 0:e.loan)==null?void 0:g.uid},stage:{uid:(l=e==null?void 0:e.stage)==null?void 0:l.uid},applicant:{uid:(o=e==null?void 0:e.applicant)==null?void 0:o.uid},dateOfDoc:(e==null?void 0:e.dateOfDoc)!==""?e==null?void 0:e.dateOfDoc:null,name:e==null?void 0:e.name,docCopyType:e==null?void 0:e.docCopyType,preDisbursementCollection:(i==null?void 0:i.preDisbursementCollection)??(e==null?void 0:e.preDisbursementCollection),postDisbursementCollection:(i==null?void 0:i.postDisbursementCollection)??(e==null?void 0:e.postDisbursementCollection),isActive:e==null?void 0:e.isActive}},ge=e=>{var n,g,l;return{uid:e==null?void 0:e.uid,loan:{uid:(n=e==null?void 0:e.loan)==null?void 0:n.uid},stage:{uid:(g=e==null?void 0:e.stage)==null?void 0:g.uid},actualDeviation:e==null?void 0:e.actualDeviation,deviation:{uid:(l=e==null?void 0:e.deviation)==null?void 0:l.uid},smDeviationType:e==null?void 0:e.smDeviationType,mitigation:e==null?void 0:e.mitigation,isActive:e==null?void 0:e.isActive,smDeviationCategory:K.LEGAL_DEVIATIONS}},oe=e=>{var n,g;const i=[];if(e&&Array.isArray(e))for(const l of e)i.push({uid:l==null?void 0:l.uid,loan:{uid:(n=l==null?void 0:l.loan)==null?void 0:n.uid},stage:{uid:(g=l==null?void 0:l.stage)==null?void 0:g.uid},smCode:l==null?void 0:l.smCode,name:l==null?void 0:l.name,value:l==null?void 0:l.value,comment:l==null?void 0:l.comment});return i},ue=e=>({legalUid:e==null?void 0:e.uid,savedDocuments:Q(e==null?void 0:e.loanDocuments)});export{Z as a,P as b,D as c,t as d,d as e,a as f,ee as g,le as h,ie as i,oe as j,ue as k,ge as l,ne as u};
//# sourceMappingURL=Helper-fa7c957e.js.map