import{w as y,j as e,T as t,d$ as a,r as j,R as $}from"./index-e8217573.js";import{X as R,Y as C}from"./Helper-03e9d878.js";import{A as V}from"./AccountSummary-d81d4aa5.js";import{S as b}from"./Skeleton-7e12d019.js";import{R as h}from"./ReadOnlyTable-86accb69.js";import{C as r}from"./column.esm-938bad7d.js";import"./DocumentUploader-e2ec1a13.js";import"./loader-5f2cfb31.js";import"./AutoComplete-0bca608a.js";import"./search_icon-459d6871.js";import"./withAuth-6de36ebf.js";import"./virtualscroller.esm-9939945c.js";import"./ButtonBox-9e46519a.js";import"./kebab-menu-8835ad2e.js";import"./DatePicker-b1c13861.js";import"./ErrorDialog-d5eef4d7.js";import"./Dialog-adadaf64.js";import"./FileUploadCustom-5ab7fd25.js";import"./Loading-783a01c7.js";import"./MediaGallery-5884b284.js";import"./Download_Icon-51fc7f46.js";import"./index-8739acfd.js";import"./FileUploadService-1aaf11f7.js";import"./FileUploadMenuBox-f47dc693.js";import"./MenuBox-defc36b0.js";import"./SimpleDropDown-061a3470.js";import"./Toast-ae99ea5b.js";import"./TransitionGroup-c8afe0ce.js";import"./IconButton-36693dd9.js";import"./sortIcon-54357a29.js";import"./eye_icon-081bddb3.js";import"./InputBox-b9e88f52.js";import"./DocumentService-a293b5f4.js";import"./StaticMasterDataService-689a6eca.js";import"./No_data-1720c54e.js";import"./datatable.esm-f474a654.js";import"./paginator.esm-11c2c115.js";const T=n=>{const{data:s,isLoading:d}=n,c=()=>e.jsxs("div",{className:"grid grid-cols-4 gap-x-18 gap-y-5 ",children:[e.jsxs("div",{className:"flex flex-col items-start",children:[e.jsx(t,{className:"text-primary-gray-700 text-xs mb-1",label:"label.cibilDetails.name"}),e.jsx(t,{className:"text-black text-xs",label:s.name})]}),e.jsxs("div",{className:"flex flex-col items-start",children:[e.jsx(t,{className:"text-primary-gray-700 text-xs mb-1",label:"label.cibilDetails.dob"}),e.jsx(t,{className:"text-black text-xs",label:s.dob})]}),e.jsxs("div",{className:"flex flex-col items-start",children:[e.jsx(t,{className:"text-primary-gray-700 text-xs mb-1",label:"label.cibilDetails.gender"}),e.jsx(t,{className:"text-black text-xs",label:s.gender})]}),e.jsxs("div",{className:"flex flex-col items-start",children:[e.jsx(t,{className:"text-primary-gray-700 text-xs mb-1",label:"label.cibilDetails.father"}),e.jsx(t,{className:"text-black text-xs",label:s.father})]}),e.jsxs("div",{className:"flex flex-col items-start",children:[e.jsx(t,{className:"text-primary-gray-700 text-xs mb-1",label:"label.cibilDetails.spouse"}),e.jsx(t,{className:"text-black text-xs",label:s.spouse})]}),e.jsxs("div",{className:"flex flex-col items-start",children:[e.jsx(t,{className:"text-primary-gray-700 text-xs mb-1",label:"label.cibilDetails.mother"}),e.jsx(t,{className:"text-black text-xs",label:s.mother})]}),e.jsx("div",{}),e.jsx("div",{}),e.jsxs("div",{className:"flex flex-col items-start",children:[e.jsx(t,{className:"text-primary-gray-700 text-xs mb-1",label:"label.cibilDetails.phone"}),e.jsx(t,{className:"text-black text-xs",label:s.phone})]}),e.jsxs("div",{className:"flex flex-col items-start",children:[e.jsx(t,{className:"text-primary-gray-700 text-xs mb-1",label:"label.cibilDetails.emailId"}),e.jsx(t,{className:"text-black text-xs",label:s.emailId})]}),e.jsxs("div",{className:"flex flex-col items-start",children:[e.jsx(t,{className:"text-primary-gray-700 text-xs mb-1",label:"label.cibilDetails.id"}),e.jsx(t,{className:"text-black text-xs",label:s.id})]}),e.jsx("div",{}),e.jsxs("div",{className:"flex flex-col items-start",children:[e.jsx(t,{className:"text-primary-gray-700 text-xs mb-1",label:"label.cibilDetails.Address"}),e.jsx(t,{className:"text-black text-xs text-left",label:s.address})]}),e.jsxs("div",{className:"flex flex-col items-start",children:[e.jsx(t,{className:"text-primary-gray-700 text-xs mb-1",label:"label.cibilDetails.otherAddress"}),e.jsx(t,{className:"text-black text-xs text-left",label:s.otherAddress})]})]});return e.jsxs("div",{className:"min-h-81.5 bg-white rounded-xl pt-6 px-7 pb-7",children:[e.jsx("div",{className:"mb-4 flex",children:e.jsx(t,{className:"text-primary-gray-800 text-xl font-bold ",label:"heading.cibilDetails"})}),e.jsxs("div",{className:"h-fit rounded-xl border-0.5 border-primary-gray-600 pt-5 px-7 pb-7",children:[e.jsx(t,{className:"text-primary-sideBarBgColor mb-4 text-base flex font-medium",label:"heading.cibilDetails.inquiryInfo"}),d?e.jsx(b,{height:"9.375rem",width:"100%",borderRadius:"8px",animation:"wave"}):c()]})]})},A=y(T),S=n=>{const{isLoading:s}=n,d=i=>e.jsx("div",{children:i.accountType}),c=i=>e.jsx("div",{children:i.dateReported}),p=i=>e.jsx("div",{children:i.occupationCode}),m=i=>e.jsx("div",{children:i.income}),o=i=>e.jsx("div",{children:i.netGrossIncomeIndicator}),x=i=>e.jsx("div",{children:i.monthlyAnnualIncomeIndicator}),u=()=>e.jsx("div",{children:e.jsxs(h,{className:"border border-secondary-concrete px-0  mt-4 rounded-lg read-only-table w-full h-40 overflow-auto approval-request-wrapper",dataKey:"id",value:[{id:"123",accountType:"",dateReported:"",occupationCode:"",income:"",netGrossIncomeIndicator:"",monthlyAnnualIncomeIndicator:""}],paginator:!0,style:{width:"100%"},children:[e.jsx(r,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:`${a.t("label.cibilDetails.employmentDetails.thead.accType")}`,body:d}),e.jsx(r,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:`${a.t("label.cibilDetails.employmentDetails.thead.dateReported")}`,body:c}),e.jsx(r,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:`${a.t("label.cibilDetails.employmentDetails.thead.occCode")}`,body:p}),e.jsx(r,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:`${a.t("label.cibilDetails.employmentDetails.thead.income")}`,body:m}),e.jsx(r,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:`${a.t("label.cibilDetails.employmentDetails.thead.grossIncome")}`,body:o}),e.jsx(r,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:`${a.t("label.cibilDetails.employmentDetails.thead.monthlyAnnualIncome")}`,body:x})]})});return e.jsxs("div",{className:"min-h-81.5 bg-white rounded-xl pt-6 px-7 pb-7",children:[e.jsx("div",{className:"mb-4 flex",children:e.jsx(t,{className:"text-primary-gray-800 text-xl font-bold ",label:"heading.cibilDetails.employmentDetails"})}),e.jsx("div",{className:"h-fit rounded-xl border-0.5 border-primary-gray-600 pt-5 px-7 pb-7",children:s?e.jsx(b,{height:"9.375rem",width:"100%",borderRadius:"8px",animation:"wave"}):u()})]})},E=y(S),P=n=>{const{isLoading:s}=n,d=x=>e.jsx("div",{children:x.member}),c=x=>e.jsx("div",{children:x.enquiryDate}),p=x=>e.jsx("div",{children:x.enquiryPurpose}),m=x=>e.jsx("div",{children:x.enquiryAmount}),o=()=>e.jsx("div",{children:e.jsxs(h,{className:"border border-secondary-concrete px-0  mt-4 rounded-lg read-only-table w-full h-40 overflow-auto approval-request-wrapper",dataKey:"id",value:[{id:"123",member:"",enquiryDate:"",enquiryPurpose:"",enquiryAmount:""}],paginator:!0,style:{width:"100%"},children:[e.jsx(r,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:`${a.t("label.cibilDetails.enquiries.thead.member")}`,body:d}),e.jsx(r,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:`${a.t("label.cibilDetails.enquiries.thead.enquiryDate")}`,body:c}),e.jsx(r,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:`${a.t("label.cibilDetails.enquiries.thead.enquiryPurpose")}`,body:p}),e.jsx(r,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:`${a.t("label.cibilDetails.enquiries.thead.enquiryAmount")}`,body:m})]})});return e.jsxs("div",{className:"min-h-81.5 bg-white rounded-xl pt-6 px-7 pb-7",children:[e.jsx("div",{className:"mb-4 flex",children:e.jsx(t,{className:"text-primary-gray-800 text-xl font-bold ",label:"heading.cibilDetails.enquiries"})}),e.jsx("div",{className:"h-fit rounded-xl border-0.5 border-primary-gray-600 pt-5 px-7 pb-7",children:s?e.jsx(b,{height:"9.375rem",width:"100%",borderRadius:"8px",animation:"wave"}):o()})]})},B=y(P),k=n=>{const{isLoading:s}=n,d=i=>e.jsx("div",{children:i.enquiryPurpose}),c=i=>e.jsx("div",{children:i.total}),p=i=>e.jsx("div",{children:i.past30Days}),m=i=>e.jsx("div",{children:i.past12Months}),o=i=>e.jsx("div",{children:i.past24Months}),x=i=>e.jsx("div",{children:i.recent}),u=()=>e.jsx("div",{children:e.jsxs(h,{className:"border border-secondary-concrete px-0  mt-4 rounded-lg read-only-table w-full h-40 overflow-auto approval-request-wrapper",dataKey:"id",value:[{id:"123",enquiryPurpose:"",total:"",past30Days:"",past12Months:"",past24Months:"",recent:""}],paginator:!0,style:{width:"100%"},children:[e.jsx(r,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:`${a.t("label.cibilDetails.enquirySummary.thead.enqPurpose")}`,body:d}),e.jsx(r,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:`${a.t("label.cibilDetails.enquirySummary.thead.total")}`,body:c}),e.jsx(r,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:`${a.t("label.cibilDetails.enquirySummary.thead.past30Days")}`,body:p}),e.jsx(r,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:`${a.t("label.cibilDetails.enquirySummary.thead.past12Months")}`,body:m}),e.jsx(r,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:`${a.t("label.cibilDetails.enquirySummary.thead.past24Months")}`,body:o}),e.jsx(r,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:`${a.t("label.cibilDetails.enquirySummary.thead.recent")}`,body:x})]})});return e.jsxs("div",{className:"min-h-81.5 bg-white rounded-xl pt-6 px-7 pb-7",children:[e.jsx("div",{className:"mb-4 flex",children:e.jsx(t,{className:"text-primary-gray-800 text-xl font-bold ",label:"heading.cibilDetails.enquirySummary"})}),e.jsx("div",{className:"h-fit rounded-xl border-0.5 border-primary-gray-600 pt-5 px-7 pb-7",children:s?e.jsx(b,{height:"9.375rem",width:"100%",borderRadius:"8px",animation:"wave"}):u()})]})},M=y(k),K=n=>{const{isLoading:s}=n,d=o=>e.jsx("div",{children:o.scoreName}),c=o=>e.jsx("div",{children:o.score}),p=o=>e.jsx("div",{children:o.scoreFactor}),m=()=>e.jsx("div",{children:e.jsxs(h,{className:"border border-secondary-concrete px-0  mt-4 rounded-lg read-only-table w-full h-40 overflow-auto approval-request-wrapper",dataKey:"id",value:[{id:"123",scoreName:"CIBIL TransUnion Score v3",score:"400",scoreFactor:"N.A"}],paginator:!0,style:{width:"100%"},children:[e.jsx(r,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:`${a.t("label.cibilDetails.score.thead.scoreName")}`,body:d}),e.jsx(r,{className:"text-primary-ptext-1000 font-bold text-left text-xs p-1 h-12 pl-6",header:`${a.t("label.cibilDetails.score.thead.score")}`,body:c}),e.jsx(r,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:`${a.t("label.cibilDetails.score.thead.scoringFactor")}`,body:p})]})});return e.jsxs("div",{className:"min-h-81.5 bg-white rounded-xl pt-6 px-7 pb-7",children:[e.jsx("div",{className:"mb-4 flex",children:e.jsx(t,{className:"text-primary-gray-800 text-xl font-bold ",label:"heading.cibilDetails.score"})}),e.jsx("div",{className:"h-fit rounded-xl border-0.5 border-primary-gray-600 pt-5 px-7 pb-7",children:s?e.jsx(b,{height:"9.375rem",width:"100%",borderRadius:"8px",animation:"wave"}):m()})]})},L=y(K),F=n=>{const{isLoading:s}=n,d=l=>e.jsx("div",{children:l.identificationNumber}),c=l=>e.jsx("div",{children:l.identificationNumber}),p=l=>e.jsx("div",{children:l.issueDate}),m=l=>e.jsx("div",{children:l.expirationDate}),o=l=>e.jsx("div",{children:l.telephoneType}),x=l=>e.jsx("div",{children:l.telephoneNumber}),u=l=>e.jsx("div",{children:l.telephoneExtension}),i=l=>e.jsx("div",{children:l.address}),f=l=>e.jsx("div",{children:l.category}),N=l=>e.jsx("div",{children:l.residenceCode}),v=l=>e.jsx("div",{children:l.dateReported}),g=l=>e.jsx("div",{children:l.variation}),D=()=>e.jsx("div",{children:e.jsxs(h,{className:"border border-secondary-concrete px-0  mt-4 rounded-lg read-only-table w-full h-40 overflow-auto approval-request-wrapper",dataKey:"id",value:[{id:"123",identificationType:"PAN",identificationNumber:"",issueDate:"",expirationDate:"31 - 12 - 2022"},{id:"124",identificationType:"Aadhaar",identificationNumber:"",issueDate:"",expirationDate:"31 - 06 - 2022"}],paginator:!0,style:{width:"100%"},children:[e.jsx(r,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:`${a.t("label.cibilDetails.personalInfoVariation.thead.identificationType")}`,body:d}),e.jsx(r,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:`${a.t("label.cibilDetails.personalInfoVariation.thead.identificationNumber")}`,body:c}),e.jsx(r,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:`${a.t("label.cibilDetails.personalInfoVariation.thead.issueDate")}`,body:p}),e.jsx(r,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:`${a.t("label.cibilDetails.personalInfoVariation.thead.expirationDate")}`,body:m})]})}),w=()=>e.jsx("div",{children:e.jsxs(h,{className:"border border-secondary-concrete px-0  mt-4 rounded-lg read-only-table w-full h-40 overflow-auto approval-request-wrapper",dataKey:"id",value:[{id:"123",telephoneType:"",telephoneNumber:"",telephoneExtension:""}],paginator:!0,style:{width:"100%"},children:[e.jsx(r,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:`${a.t("label.cibilDetails.personalInfoVariation.thead.telephoneType")}`,body:o}),e.jsx(r,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:`${a.t("label.cibilDetails.personalInfoVariation.thead.telephoneNumber")}`,body:x}),e.jsx(r,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:`${a.t("label.cibilDetails.personalInfoVariation.thead.telephoneExtension")}`,body:u})]})}),I=()=>e.jsx("div",{children:e.jsxs(h,{className:"border border-secondary-concrete px-0  mt-4 rounded-lg read-only-table w-full h-40 overflow-auto approval-request-wrapper",dataKey:"id",value:[{id:"123",address:"No.7, Arab lane, Bangalore, 560025",category:"Residential address",residenceCode:"Rental",dateReported:"26 - 07 - 2023"},{id:"124",address:"No.7, Arab lane, Bangalore, 560025",category:"Residential address",residenceCode:"Rental",dateReported:"26 - 07 - 2023"}],paginator:!0,style:{width:"100%"},children:[e.jsx(r,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:`${a.t("label.cibilDetails.personalInfoVariation.thead.address")}`,body:i}),e.jsx(r,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:`${a.t("label.cibilDetails.personalInfoVariation.thead.category")}`,body:f}),e.jsx(r,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:`${a.t("label.cibilDetails.personalInfoVariation.thead.residenceCode")}`,body:N}),e.jsx(r,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:`${a.t("label.cibilDetails.personalInfoVariation.thead.dateReported")}`,body:v})]})}),q=()=>e.jsx("div",{children:e.jsx(h,{className:"border border-secondary-concrete px-0  mt-4 rounded-lg read-only-table w-full h-40 overflow-auto approval-request-wrapper",dataKey:"id",value:[{id:"123",variation:"M@gmail.com"},{id:"124",variation:"Mahesh@gmail.com"}],paginator:!0,style:{width:"100%"},children:e.jsx(r,{className:"text-primary-ptext-1000 text-left text-xs p-1 h-12 pl-6",header:`${a.t("label.cibilDetails.personalInfoVariation.thead.variation")}`,body:g})})});return e.jsxs("div",{className:"min-h-81.5 bg-white rounded-xl pt-6 px-7 pb-7",children:[e.jsx("div",{className:"mb-4 flex",children:e.jsx(t,{className:"text-primary-gray-800 text-xl font-bold ",label:"heading.cibilDetails.personalInfoVariation"})}),e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsxs("div",{className:"h-fit rounded-xl border-0.5 border-primary-gray-600 pt-5 px-7 pb-7",children:[e.jsx(t,{className:"text-primary-sideBarBgColor mb-4 text-base flex font-medium",label:"heading.cibilDetails.personalInfoVariation.identificationVariation"}),s?e.jsx(b,{height:"9.375rem",width:"100%",borderRadius:"8px",animation:"wave"}):D()]}),e.jsxs("div",{className:"h-fit rounded-xl border-0.5 border-primary-gray-600 pt-5 px-7 pb-7",children:[e.jsx(t,{className:"text-primary-sideBarBgColor mb-4 text-base flex font-medium",label:"heading.cibilDetails.personalInfoVariation.phoneNumberVariation"}),s?e.jsx(b,{height:"9.375rem",width:"100%",borderRadius:"8px",animation:"wave"}):w()]}),e.jsxs("div",{className:"h-fit rounded-xl border-0.5 border-primary-gray-600 pt-5 px-7 pb-7",children:[e.jsx(t,{className:"text-primary-sideBarBgColor mb-4 text-base flex font-medium",label:"heading.cibilDetails.personalInfoVariation.addressVariation"}),s?e.jsx(b,{height:"9.375rem",width:"100%",borderRadius:"8px",animation:"wave"}):I()]}),e.jsxs("div",{className:"h-fit rounded-xl border-0.5 border-primary-gray-600 pt-5 px-7 pb-7",children:[e.jsx(t,{className:"text-primary-sideBarBgColor mb-4 text-base flex font-medium",label:"heading.cibilDetails.personalInfoVariation.emailVariation"}),s?e.jsx(b,{height:"9.375rem",width:"100%",borderRadius:"8px",animation:"wave"}):q()]})]})]})},G=y(F),qe=()=>{const[n,s]=j.useState(R),[d,c]=j.useState(C);return e.jsx($.Fragment,{children:e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsx(A,{data:n}),e.jsx(G,{}),e.jsx(L,{}),e.jsx(E,{}),e.jsx(M,{}),e.jsx(V,{data:d}),e.jsx(B,{})]})})};export{qe as default};
//# sourceMappingURL=PageCibilDetailReport-4a4ae5af.js.map