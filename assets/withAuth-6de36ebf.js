import{r as t,bH as f,bp as i,j as u,bI as A,bJ as b,bK as d}from"./index-e8217573.js";const x=c=>s=>{const e=t.useContext(f),[o,a]=t.useState(s.disabled??!1);t.useEffect(()=>{i()&&!s.isIgnoreAccessLevel&&e.isOn&&a(e.read)},[]),t.useEffect(()=>{i()&&(!s.isIgnoreAccessLevel&&e.isOn?a(e.read):a(!1))},[e]);const r=l=>{n(),s.onChange(l)},n=()=>{A()&&e.isOn&&b(e.name,d.Y)};return u.jsx(c,{...s,onChange:r,isIgnoreAccessLevel:s.isIgnoreAccessLevel??!1,isDisabledByAcl:e.isOn?!o:!1,reportFormDirty:n})};export{x as w};
//# sourceMappingURL=withAuth-6de36ebf.js.map
