var h=Object.defineProperty;var c=(o,r,t)=>r in o?h(o,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[r]=t;var n=(o,r,t)=>(c(o,typeof r!="symbol"?r+"":r,t),t);import{at as m}from"./index-e8217573.js";const i="/custom/api/cam",u="/custom/api";class d extends m{constructor(){super(...arguments);n(this,"getInsuranceDetails",(t=0,e=10,s)=>{const a=i+`/insurance/details?${s}`;return this.makeGetRequestWithAuth(a)});n(this,"updateInsuranceDetails",t=>{const e=i+"/insurance/details";return this.makePutRequestWithAuth(e,t)});n(this,"getIncomeDocumentList",(t=0,e=10,s)=>{const a=i+`/income/documents/validate?start=${t}&limit=${e}${s}`;return this.makeGetRequestWithAuth(a)});n(this,"getLoanTags",(t=0,e=10,s)=>{const a=u+`/loan/tag/search${s}`;return this.makeGetRequestWithAuth(a)});n(this,"updateLoanTags",t=>{const e=i+"/loan/tag";return this.makePutRequestWithAuth(e,t)});n(this,"getFinancierLoanNumber",(t=0,e=10,s)=>{const a=u+`/financial/loan/number/search?start=${t}&limit=${e}${s}`;return this.makeGetRequestWithAuth(a)});n(this,"updateFinancierLoanNumber",t=>{const e=i+"/financial/loan/number";return this.makePutRequestWithAuth(e,t)});n(this,"getCreditDocuments",t=>{const e=i+`/credit/document?${t}`;return this.makeGetRequestWithAuth(e)});n(this,"updateCreditDocuments",t=>{const e=i+"/credit/document";return this.makePutRequestWithAuth(e,t)});n(this,"updateIncomeDocuments",t=>{const e=i+"/income/documents";return this.makePutRequestWithAuth(e,t)});n(this,"updateRepaymentHistoryComment",t=>{const e=i+"/comment/bureau";return this.makePutRequestWithAuth(e,t)});n(this,"getCamStageDetails",t=>{const e=i+`/stage/${t}`;return this.makeGetRequestWithAuth(e,t)});n(this,"getProductIncomeSchemeOptions",t=>{const e=u+`/income/scheme/product/manage/filter${t}`;return this.makeGetRequestWithAuth(e)});n(this,"getChargeNameOptions",t=>{const e=u+`/fee/configuration/filter${t}`;return this.makeGetRequestWithAuth(e)});n(this,"getFeeList",(t=0,e=10,s)=>{const a=i+`/loan/fee?start=${t}&limit=${e}${s}`;return this.makeGetRequestWithAuth(a)});n(this,"updateSchemeDetails",t=>{const e=i+"/scheme/detail";return this.makePutRequestWithAuth(e,t)});n(this,"engine",t=>{const e=u+"/loan/engine";return this.makePostRequestWithAuth(e,t)});n(this,"updateFinalLoanDetails",t=>{const e=i+"/final/loan/detail";return this.makePutRequestWithAuth(e,t)});n(this,"updatePropertyValuation",t=>{const e=i+"/property/valuation";return this.makePutRequestWithAuth(e,t)});n(this,"getValuationList",(t,e)=>{const s=i+`/property/valuation?loanUid=${t}&stageUid=${e}`;return this.makeGetRequestWithAuth(s)});n(this,"getRepaymentHistoryTable",(t=0,e=10,s)=>{const a=u+`/stage/credit/repayment/history/search?start=${t}&limit=${e}${s}`;return this.makeGetRequestWithAuth(a)});n(this,"updateRepaymentHistory",t=>{const e=i+"/repayment/history";return this.makePutRequestWithAuth(e,t)});n(this,"updateIncomeDetails",t=>{const e=i+"/income/detail";return this.makePutRequestWithAuth(e,t)});n(this,"getIncomeDetails",(t=0,e=10,s)=>{const a=i+`/income/detail/search?start=${t}&limit=${e}${s}`;return this.makeGetRequestWithAuth(a)});n(this,"getBankingAnalysisTabs",(t,e)=>{const s=i+`/banking/detail/mapping/search?isActive=true&stage.uid=${t}&loan.uid=${e}`;return this.makeGetRequestWithAuth(s)});n(this,"bankingDetailsSearch",(t,e)=>{const s=u+`/banking/detail/search?isActive=true&loan.uid=${t}${e}`;return this.makeGetRequestWithAuth(s)});n(this,"createBankingBasicDetails",t=>{const e=i+"/basic/detail";return this.makePostRequestWithAuth(e,t)});n(this,"updateBankingBasicDetails",t=>{const e=i+"/basic/detail";return this.makePutRequestWithAuth(e,t)});n(this,"getBankingBasicDetailsAndAccountStatement",t=>{const e=i+`/basic/detail/${t}`;return this.makeGetRequestWithAuth(e)});n(this,"updateBankStatementAnalysis",t=>{const e=i+"/banking/statement/analysis";return this.makePutRequestWithAuth(e,t)});n(this,"getBankStatementAnalysis",(t,e)=>{const s=i+`/banking/statement/analysis?stageUid=${t}&bankingDetailsUid=${e}`;return this.makeGetRequestWithAuth(s)});n(this,"getMonthlyBankingAnalysis",(t,e)=>{const s=i+`/monthly/banking/analysis?stageUid=${t}&bankingDetailUid=${e}`;return this.makeGetRequestWithAuth(s)});n(this,"updateMonthlyBankingAnalysis",t=>{const e=i+"/monthly/banking/analysis";return this.makePutRequestWithAuth(e,t)});n(this,"updateIncomeEligibilityComment",t=>{const e=i+"/income/eligibility";return this.makePutRequestWithAuth(e,t)});n(this,"updateMonthlyExpense",t=>{const e=i+"/monthly/expenses";return this.makePutRequestWithAuth(e,t)});n(this,"getMonthlyExpense",(t=0,e=10,s)=>{const a=u+`/monthly/expense/search?start=${t}&limit=${e}${s}`;return this.makeGetRequestWithAuth(a)});n(this,"updateCreditDebitTransaction",t=>{const e=i+"/credit/debit/transaction";return this.makePutRequestWithAuth(e,t)});n(this,"getCreditDebitTransaction",(t,e)=>{const s=i+`/credit/debit/transaction?stageUid=${t}&bankingDetailUid=${e}`;return this.makeGetRequestWithAuth(s)});n(this,"getInterestType",t=>{const e=u+`/product/manage/interest/type/filter?${t}`;return this.makeGetRequestWithAuth(e)});n(this,"getLoanPurposeAndComments",t=>{const e=`${i}/stage/${t}`;return this.makeGetRequestWithAuth(e)});n(this,"getRiskAndStrength",(t=0,e=10,s)=>{const a=`${i}/risk/strength/search?start=${t}&limit=${e}${s}&isActive=true`;return this.makeGetRequestWithAuth(a)});n(this,"getSanctionConditions",(t=0,e=10,s)=>{const a=`${i}/sanctioned/conditions/search?start=${t}&limit=${e}${s}&isActive=true`;return this.makeGetRequestWithAuth(a)});n(this,"getDeviationCategories",(t=0,e=10,s)=>{const a=`${u}/deviation/category/search?start=${t}&limit=${e}&isActive=true`;return this.makeGetRequestWithAuth(a)});n(this,"getCamDeviations",t=>{const e=`${i}/deviation${t}`;return this.makeGetRequestWithAuth(e)});n(this,"getDeviationLevel",(t=0,e=10,s)=>{const a=`${u}/approval/level/search?start=${t}&limit=${e}&isActive=true`;return this.makeGetRequestWithAuth(a)});n(this,"findManualDeviations",(t=0,e=0,s)=>{const a=`${u}/deviation/search?start=${t}&limit=${e}${s}&isActive=true`;return this.makeGetRequestWithAuth(a)});n(this,"getSalesRecommendation",t=>{const e=`${i}/sales/recommendation?loanUid=${t}`;return this.makeGetRequestWithAuth(e)});n(this,"updateLoanPurpose",t=>{const e=`${i}/purpose/loan`;return this.makePutRequestWithAuth(e,t)});n(this,"updateOverallComments",t=>{const e=`${i}/overall/comment`;return this.makePutRequestWithAuth(e,t)});n(this,"updateRiskAndStrength",t=>{const e=`${i}/risk/strength`;return this.makePutRequestWithAuth(e,t)});n(this,"updateDeviations",t=>{const e=`${i}/deviation`;return this.makePutRequestWithAuth(e,t)});n(this,"updateSanctionConditions",t=>{const e=`${i}/sanctioned/condition`;return this.makePutRequestWithAuth(e,t)});n(this,"getDistanceDetails",t=>{const e=`${u}/point/interest/key/metrics/${t}`;return this.makeGetRequestWithAuth(e)});n(this,"deactivateSelectedFeesForProductIncomeScheme",t=>{const e=i+`/loan/fees/deactivate/${t}`;return this.makePutRequestWithAuth(e)});n(this,"getSystemRuleViolations",t=>{const e=i+`/system/validation?${t}`;return this.makePutRequestWithAuth(e)})}}const A=new d;export{A as C};
//# sourceMappingURL=CamService-5ccef840.js.map