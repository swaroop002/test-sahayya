import{r as i,j as e,K as o,bk as l,bl as u,aq as c,bm as A,bn as x}from"./index-e8217573.js";import{A as t}from"./ACLService-e19daf7c.js";function d(r){const{isMenuLoading:a}=r,[s,f]=i.useState(""),n=()=>!!x.getUserInfo();return a?e.jsx(o,{}):n()?t.isAclApplicable()?t.isRouteHasAccess(r.urlPath)?s?e.jsx(e.Fragment,{children:s}):e.jsx(r.AuthorizedComponent,{}):e.jsx(l,{}):e.jsx(r.AuthorizedComponent,{}):e.jsx(u,{to:`${c}?rto=`+A(r.urlPath)})}export{d as A};
//# sourceMappingURL=AuthValidator-4e739521.js.map