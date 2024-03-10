import{b2 as V,b3 as r,dT as w,aF as E,dU as P}from"./index-e8217573.js";import{s as M}from"./Helper-03e9d878.js";const b=n=>V(n),I=n=>P(n),L=n=>n?n==null?void 0:n.toString():"",F=n=>{var e;const s=parseFloat(n);return isNaN(s)?"":(e=s==null?void 0:s.toString())==null?void 0:e.slice(0,2)},f=n=>{let s="";const e=n==null?void 0:n.toString();let o=b(n);if(e!=null&&e.includes(".")&&e){const u=e==null?void 0:e.split(".");o=b(u[0]),(u[1]||u[1]==="")&&(s="."+F(u[1]))}const i=r(o,"en-IN",0);return(i==null?void 0:i.toString())+s},N=n=>{let s="";const e=n==null?void 0:n.toString();let o=I(n);if(o===null)return null;if(e!=null&&e.includes(".")&&e){const i=e==null?void 0:e.split(".");o=I(i[0]),(i[1]||i[1]==="")&&(s="."+F(i[1]))}return o==null?""+s:w(o,"en-IN",0)+s},R=n=>{var e,o,i,u,m,l,h,p,g,D,y,C,T,c,k,j,A;return{uid:n==null?void 0:n.uid,smApplicantType:n==null?void 0:n.smApplicantType,smInsuranceType:n==null?void 0:n.smInsuranceType,smVendor:n==null?void 0:n.smVendor,premiumAmountInclusiveGst:b(n==null?void 0:n.premiumAmountInclusiveGst),isActive:n==null?void 0:n.isActive,loanDocument:{uid:(e=n==null?void 0:n.loanDocument)==null?void 0:e.uid,docType:{uid:(i=(o=n==null?void 0:n.loanDocument)==null?void 0:o.docType)==null?void 0:i.uid},docCategory:(m=(u=n==null?void 0:n.loanDocument)==null?void 0:u.docType)==null?void 0:m.docCategory,documentSections:[{uid:(h=(l=n==null?void 0:n.loanDocument)==null?void 0:l.documentSections[0])==null?void 0:h.uid,section:(g=(p=n==null?void 0:n.loanDocument)==null?void 0:p.documentSections[0])==null?void 0:g.section,fileName:(y=(D=n==null?void 0:n.loanDocument)==null?void 0:D.documentSections[0])==null?void 0:y.fileName,fileType:(T=(C=n==null?void 0:n.loanDocument)==null?void 0:C.documentSections[0])==null?void 0:T.fileType,thumbUrl:(k=(c=n==null?void 0:n.loanDocument)==null?void 0:c.documentSections[0])==null?void 0:k.fileType,url:(A=(j=n==null?void 0:n.loanDocument)==null?void 0:j.documentSections[0])==null?void 0:A.url}]}}},v=n=>({uid:n==null?void 0:n.uid,isApplicable:n==null?void 0:n.isApplicable,remarks:n==null?void 0:n.remarks,smTagName:n==null?void 0:n.smTagName,isActive:n==null?void 0:n.isActive}),H=n=>({uid:n==null?void 0:n.uid,loanNumber:n==null?void 0:n.loanNumber,remarks:n==null?void 0:n.remarks,isActive:n==null?void 0:n.isActive}),q=n=>{var e,o,i;return{uid:n==null?void 0:n.uid,loan:{uid:(e=n==null?void 0:n.loan)==null?void 0:e.uid},stage:{uid:(o=n==null?void 0:n.stage)==null?void 0:o.uid},loanDocument:{uid:(i=n==null?void 0:n.loanDocument)==null?void 0:i.uid},docYearFrom:n==null?void 0:n.docYearFrom,docYearTo:n==null?void 0:n.docYearTo,remarks:n==null?void 0:n.remarks,isActive:n==null?void 0:n.isActive}},G=n=>({uid:n==null?void 0:n.uid,editorText:n==null?void 0:n.remarksOnRepaymentHistory,errorMessage:""}),U=n=>({uid:n==null?void 0:n.uid,totalAppraisedNetMonthlyIncome:n==null?void 0:n.totalAppraisedNetMontlhlyIncome,maxEmi:n==null?void 0:n.maxEmi,emiFactor:n==null?void 0:n.emiFactor,eligibility:n==null?void 0:n.eligibility,emi:n==null?void 0:n.emiByFactor,actualLtv:n==null?void 0:n.actualLtv}),Y=n=>{var e,o,i,u,m,l,h,p,g,D,y,C,T,c,k,j,A,O;return{productIncomeScheme:{uid:(e=n==null?void 0:n.productIncomeScheme)==null?void 0:e.uid,name:(o=n==null?void 0:n.productIncomeScheme)==null?void 0:o.name,product:{name:(u=(i=n==null?void 0:n.productIncomeScheme)==null?void 0:i.product)==null?void 0:u.name,uid:(l=(m=n==null?void 0:n.productIncomeScheme)==null?void 0:m.product)==null?void 0:l.uid},incomeSchemeName:{name:(p=(h=n==null?void 0:n.productIncomeScheme)==null?void 0:h.incomeSchemeName)==null?void 0:p.name,uid:(D=(g=n==null?void 0:n.productIncomeScheme)==null?void 0:g.incomeSchemeName)==null?void 0:D.uid},bank:{name:(C=(y=n==null?void 0:n.productIncomeScheme)==null?void 0:y.bank)==null?void 0:C.name,uid:(c=(T=n==null?void 0:n.productIncomeScheme)==null?void 0:T.bank)==null?void 0:c.uid},lendingType:{name:(j=(k=n==null?void 0:n.productIncomeScheme)==null?void 0:k.lendingType)==null?void 0:j.name,uid:(O=(A=n==null?void 0:n.productIncomeScheme)==null?void 0:A.lendingType)==null?void 0:O.uid}}}},z=n=>{var e;return{uid:n==null?void 0:n.uid,feeConfiguration:{uid:(e=n==null?void 0:n.feeConfiguration)==null?void 0:e.uid},chargeTypeCode:n==null?void 0:n.chargeTypeCode,amount:b(n==null?void 0:n.amount),amountIncludingGst:b(n==null?void 0:n.amountIncludingGst),status:n==null?void 0:n.status,isActive:n==null?void 0:n.isActive}},W=n=>({recommendedLoanAmount:N(n==null?void 0:n.recommendedLoanAmount)??"",insurancePremium:f(n==null?void 0:n.insurancePremium)??"",totalLoanAmount:f(n==null?void 0:n.totalLoanAmount),roi:N(n==null?void 0:n.roi)??"",tenure:n==null?void 0:n.tenure,interestType:n==null?void 0:n.smInterestType,emi:f(n==null?void 0:n.emi),totalDeduction:f(n==null?void 0:n.totalDeductions),netDisbursal:f(n==null?void 0:n.netDisbursal),transactionType:n==null?void 0:n.smTransactionType,balanceTransfer:n==null?void 0:n.balanceTransferInMonths,employeeLoan:n==null?void 0:n.smEmployeeLoan,employeeId:n==null?void 0:n.employeeId,employeeName:n==null?void 0:n.employeeName}),_=n=>({roi:n==null?void 0:n.roi,tenure:n==null?void 0:n.tenure,total:{appraisedNetMonthlyIncome:n==null?void 0:n.totalAppraisedNetMontlhlyIncome,monthlyObligation:n==null?void 0:n.totalMonthlyObligation}}),J=(n,s)=>{const e=[];return s==null||s.forEach(i=>{var l,h,p,g,D,y,C,T;const u=[];(l=i==null?void 0:i.stages)==null||l.forEach(c=>{var j,A;const k={uid:(c==null?void 0:c.uid)??"",partner:{name:((j=c==null?void 0:c.partner)==null?void 0:j.name)??""},stageCompletionDate:(c==null?void 0:c.stageCompletionDate)??"",technical:{govtTotalValuationOfProperty:((A=c==null?void 0:c.technical)==null?void 0:A.fairMarketValue)??""}};u.push(k)});const m={uid:i==null?void 0:i.uid,address:i==null?void 0:i.address,city:{name:(h=i==null?void 0:i.city)==null?void 0:h.name,state:{name:(g=(p=i==null?void 0:i.city)==null?void 0:p.state)==null?void 0:g.name}},pincode:{pinCode:(D=i==null?void 0:i.pincode)==null?void 0:D.pinCode},pageMode:(y=E)==null?void 0:y.VIEW,propertyValuation:{smValuationOperationType:(C=i==null?void 0:i.propertyValuation)==null?void 0:C.smValuationOperationType,finalValuation:(T=i==null?void 0:i.propertyValuation)==null?void 0:T.finalValuation},isPropertyValuatedByMethodOperation:!!(i!=null&&i.propertyValuation),valuationTable:u};e.push(m)}),{totalPropertyValuation:(n==null?void 0:n.totalPropertyValuation)??"",collateralProperties:e}},K=n=>({totalPropertyValuation:(n==null?void 0:n.totalPropertyValuation)??""}),Q=(n,s)=>({uid:n==null?void 0:n.uid,emiPaid:b(n==null?void 0:n.emiPaid),obligated:n==null?void 0:n.obligated,highestDpd:b(n==null?void 0:n.highestDpd),highestDpdMonth:n==null?void 0:n.highestDpdMonth,overdueAmount:b(n==null?void 0:n.overdueAmount),smConsideredForBt:n==null?void 0:n.smConsideredForBt,remarks:n==null?void 0:n.remarks,...s!=null&&s.delete?{isActiveCam:n==null?void 0:n.isActive}:{}}),X=n=>{var e,o;return{uid:n==null?void 0:n.uid,applicant:{uid:(e=n==null?void 0:n.applicant)==null?void 0:e.uid},incomeScheme:{uid:(o=n==null?void 0:n.incomeScheme)==null?void 0:o.uid},appraisedNetMonthlyIncome:b(n==null?void 0:n.appraisedNetMonthlyIncome),monthlyObligation:b(n==null?void 0:n.monthlyObligation),isIncomeConsidered:n==null?void 0:n.isIncomeConsidered,foir:b(n==null?void 0:n.foir),maxEmi:b(n==null?void 0:n.maxEmi),emiFactor:b(n==null?void 0:n.emiFactor),eligibility:b(n==null?void 0:n.eligibility),isActive:n==null?void 0:n.isActive}},Z=n=>{var e,o,i,u,m,l;return{applicantType:((e=n==null?void 0:n.applicant)==null?void 0:e.applicantType)??"",customer:((o=n==null?void 0:n.applicant)==null?void 0:o.uid)??"",bankFinancier:((u=(i=n==null?void 0:n.ifsc)==null?void 0:i.bank)==null?void 0:u.uid)??"",accountNumber:(n==null?void 0:n.uid)??"",accountHolderName:(n==null?void 0:n.accountHolderName)??"",accountType:(n==null?void 0:n.smAccountType)??"",ifscCode:((m=n==null?void 0:n.ifsc)==null?void 0:m.ifscCode)??"",branchName:((l=n==null?void 0:n.ifsc)==null?void 0:l.branch)??"",odLimit:f(n==null?void 0:n.odCcLimit)??"",dateOfBankAccountOpening:n!=null&&n.bankAccountOpeningDate?new Date(n==null?void 0:n.bankAccountOpeningDate):"",bankStatementFrom:n!=null&&n.bankingStatementFrom?new Date(n==null?void 0:n.bankingStatementFrom):"",bankStatementTo:n!=null&&n.bankingStatementTo?new Date(n==null?void 0:n.bankingStatementTo):"",noOfMonths:(n==null?void 0:n.noOfMonthsOfBankingStatement)??"",minChargeDetails:(n==null?void 0:n.minChargeDetails)??"",remarks:(n==null?void 0:n.remarks)??"",isCalculating:!1}},$=n=>({savedDocuments:M(n==null?void 0:n.loanDocuments)}),t=n=>({savedDocuments:M(n==null?void 0:n.loanDocuments)}),d=n=>{const s=[];return n==null||n.forEach(e=>{var i,u,m,l,h,p,g,D,y,C,T,c,k,j,A,O,S;const o={applicantType:((u=(i=e==null?void 0:e.bankingDetail)==null?void 0:i.applicant)==null?void 0:u.applicantType)??"",accountHolderName:((m=e==null?void 0:e.bankingDetail)==null?void 0:m.accountHolderName)??"",bankName:((h=(l=e==null?void 0:e.ifsc)==null?void 0:l.bank)==null?void 0:h.name)??"",accountType:((p=e==null?void 0:e.bankingDetail)==null?void 0:p.smAccountType)??"",accountNumber:((g=e==null?void 0:e.bankingDetail)==null?void 0:g.accountNo)??"",odOrCcLimit:((D=e==null?void 0:e.bankingDetail)==null?void 0:D.odCcLimit)??"",twelveMonthAbb:((y=e==null?void 0:e.bankingDetail)==null?void 0:y.twelveMonthAbbAvg)??"",sixMonthAbb:((C=e==null?void 0:e.bankingDetail)==null?void 0:C.sixMonthAbbAvg)??"",threeMonthAbb:((T=e==null?void 0:e.bankingDetail)==null?void 0:T.threeMonthAbbAvg)??"",twelveMonthCreditAvg:((c=e==null?void 0:e.bankingDetail)==null?void 0:c.twelveMonthCreditAvg)??"",currentSixMonthCredit:((k=e==null?void 0:e.bankingDetail)==null?void 0:k.current6MonthCreditAvg)??"",previousSixMonthCredit:((j=e==null?void 0:e.bankingDetail)==null?void 0:j.previous6MonthCreditAvg)??"",creditRate:((A=e==null?void 0:e.bankingDetail)==null?void 0:A.creditRate)??"",inwardCheckReturn:((O=e==null?void 0:e.bankingDetail)==null?void 0:O.inwardChequeReturnPct)??"",outwardCheckReturn:((S=e==null?void 0:e.bankingDetail)==null?void 0:S.outwardChequeReturnPct)??""};s.push(o)}),s},a=n=>({editorText:(n==null?void 0:n.remarksOnIncomeEligibility)??"",errorMessage:""}),nn=n=>({uid:n==null?void 0:n.uid,smCustomerType:n==null?void 0:n.smCustomerType,smExpenseFrequency:n==null?void 0:n.smExpenseFrequency,smExpenseType:n==null?void 0:n.smExpenseType,amount:b(n==null?void 0:n.amount),remarks:n==null?void 0:n.remarks,isActive:n==null?void 0:n.isActive}),en=n=>({total:{amount:(n==null?void 0:n.totalMonthlyExpense)??""}}),sn=n=>{const s=[];return n==null||n.forEach(e=>{var u;const o=[];(u=e==null?void 0:e.bankingAnalysis)==null||u.forEach(m=>{const l={uid:m==null?void 0:m.uid,month:m==null?void 0:m.month,year:m==null?void 0:m.year,amount:m==null?void 0:m.amount};o.push(l)});const i={dayOfMonth:e==null?void 0:e.dayOfMonth,bankingAnalysis:o};s.push(i)}),s},on=n=>{const s=[];return n==null||n.forEach(e=>{const o={uid:e==null?void 0:e.uid,month:e==null?void 0:e.month,year:e==null?void 0:e.year,creditTransactionNo:e==null?void 0:e.noOfCreditTransactions,debitTransactionNo:e==null?void 0:e.noOfDebitTransactions,creditTransactionAmount:N(e==null?void 0:e.totalCreditAmount),debitTransactionAmount:N(e==null?void 0:e.totalDebitAmount),checkBounceInward:e==null?void 0:e.noOfInwardChequeBounce,checkBounceOutward:e==null?void 0:e.noOfOutwardChequeBounce};s.push(o)}),s},mn=n=>({camUid:(n==null?void 0:n.uid)??"",editorText:(n==null?void 0:n.purposeOfLoanEndUse)??"",errorMessage:""}),un=n=>({camUid:(n==null?void 0:n.uid)??"",editorText:(n==null?void 0:n.remarksOverall)??"",errorMessage:""});export{X as A,R as B,Q as C,K as D,G as a,a as b,U as c,Y as d,W as e,_ as f,b as g,un as h,d as i,J as j,H as k,v as l,z as m,q as n,I as o,N as p,nn as q,L as r,f as s,Z as t,mn as u,$ as v,t as w,sn as x,on as y,en as z};
//# sourceMappingURL=Helper-54d1e873.js.map