import{r as t,bB as m,bC as h,bD as x,bE as E}from"./index-e8217573.js";var g=function(a,e){return a===e};function y(r,a,e,v){var i=t.useReducer(function(c){return c+1},0),d=i[1],s=t.useMemo(function(){return m(e,v)},[e,v]),u=t.useRef(),o=t.useRef(),b=t.useRef(),n=t.useRef(),l=e.getState(),f;try{if(r!==o.current||l!==b.current||u.current){var S=r(l);n.current===void 0||!a(S,n.current)?f=S:f=n.current}else f=n.current}catch(c){throw u.current&&(c.message+=`
The error may be correlated with this previous error:
`+u.current.stack+`

`),c}return h(function(){o.current=r,b.current=l,n.current=f,u.current=void 0}),h(function(){function c(){try{var R=e.getState();if(R===b.current)return;var p=o.current(R);if(a(p,n.current))return;n.current=p,b.current=R}catch(C){u.current=C}d()}return s.onStateChange=c,s.trySubscribe(),c(),function(){return s.tryUnsubscribe()}},[e,s]),f}function k(r){r===void 0&&(r=x);var a=r===x?E:function(){return t.useContext(r)};return function(v,i){i===void 0&&(i=g);var d=a(),s=d.store,u=d.subscription,o=y(v,i,s,u);return t.useDebugValue(o),o}}var U=k();export{U as u};
//# sourceMappingURL=useSelector-dc41929a.js.map
