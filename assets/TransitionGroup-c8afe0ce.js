import{r as c,cc as E,cd as g,ce as x,cf as M,R as p,cg as m}from"./index-e8217573.js";function h(i,r){var a=function(n){return r&&c.isValidElement(n)?r(n):n},o=Object.create(null);return i&&c.Children.map(i,function(e){return e}).forEach(function(e){o[e.key]=a(e)}),o}function b(i,r){i=i||{},r=r||{};function a(f){return f in r?r[f]:i[f]}var o=Object.create(null),e=[];for(var n in i)n in r?e.length&&(o[n]=e,e=[]):e.push(n);var t,l={};for(var u in r){if(o[u])for(t=0;t<o[u].length;t++){var s=o[u][t];l[o[u][t]]=a(s)}l[u]=a(u)}for(t=0;t<e.length;t++)l[e[t]]=a(e[t]);return l}function d(i,r,a){return a[r]!=null?a[r]:i.props[r]}function C(i,r){return h(i.children,function(a){return c.cloneElement(a,{onExited:r.bind(null,a),in:!0,appear:d(a,"appear",i),enter:d(a,"enter",i),exit:d(a,"exit",i)})})}function V(i,r,a){var o=h(i.children),e=b(r,o);return Object.keys(e).forEach(function(n){var t=e[n];if(c.isValidElement(t)){var l=n in r,u=n in o,s=r[n],f=c.isValidElement(s)&&!s.props.in;u&&(!l||f)?e[n]=c.cloneElement(t,{onExited:a.bind(null,t),in:!0,exit:d(t,"exit",i),enter:d(t,"enter",i)}):!u&&l&&!f?e[n]=c.cloneElement(t,{in:!1}):u&&l&&c.isValidElement(s)&&(e[n]=c.cloneElement(t,{onExited:a.bind(null,t),in:s.props.in,exit:d(t,"exit",i),enter:d(t,"enter",i)}))}}),e}var F=Object.values||function(i){return Object.keys(i).map(function(r){return i[r]})},T={component:"div",childFactory:function(r){return r}},v=function(i){E(r,i);function r(o,e){var n;n=i.call(this,o,e)||this;var t=n.handleExited.bind(g(n));return n.state={contextValue:{isMounting:!0},handleExited:t,firstRender:!0},n}var a=r.prototype;return a.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},a.componentWillUnmount=function(){this.mounted=!1},r.getDerivedStateFromProps=function(e,n){var t=n.children,l=n.handleExited,u=n.firstRender;return{children:u?C(e,l):V(e,t,l),firstRender:!1}},a.handleExited=function(e,n){var t=h(this.props.children);e.key in t||(e.props.onExited&&e.props.onExited(n),this.mounted&&this.setState(function(l){var u=x({},l.children);return delete u[e.key],{children:u}}))},a.render=function(){var e=this.props,n=e.component,t=e.childFactory,l=M(e,["component","childFactory"]),u=this.state.contextValue,s=F(this.state.children).map(t);return delete l.appear,delete l.enter,delete l.exit,n===null?p.createElement(m.Provider,{value:u},s):p.createElement(m.Provider,{value:u},p.createElement(n,l,s))},r}(p.Component);v.propTypes={};v.defaultProps=T;const O=v;export{O as T};
//# sourceMappingURL=TransitionGroup-c8afe0ce.js.map
