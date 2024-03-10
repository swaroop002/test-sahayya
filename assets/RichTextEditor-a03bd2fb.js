import{r as C,j as k,g as P,aa as V}from"./index-e8217573.js";import{p as n}from"./index-8739acfd.js";var I=globalThis&&globalThis.__assign||function(){return I=Object.assign||function(r){for(var t,o=1,e=arguments.length;o<e;o++){t=arguments[o];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=t[i])}return r},I.apply(this,arguments)},N={onActivate:n.func,onAddUndo:n.func,onBeforeAddUndo:n.func,onBeforeExecCommand:n.func,onBeforeGetContent:n.func,onBeforeRenderUI:n.func,onBeforeSetContent:n.func,onBeforePaste:n.func,onBlur:n.func,onChange:n.func,onClearUndos:n.func,onClick:n.func,onContextMenu:n.func,onCommentChange:n.func,onCopy:n.func,onCut:n.func,onDblclick:n.func,onDeactivate:n.func,onDirty:n.func,onDrag:n.func,onDragDrop:n.func,onDragEnd:n.func,onDragGesture:n.func,onDragOver:n.func,onDrop:n.func,onExecCommand:n.func,onFocus:n.func,onFocusIn:n.func,onFocusOut:n.func,onGetContent:n.func,onHide:n.func,onInit:n.func,onKeyDown:n.func,onKeyPress:n.func,onKeyUp:n.func,onLoadContent:n.func,onMouseDown:n.func,onMouseEnter:n.func,onMouseLeave:n.func,onMouseMove:n.func,onMouseOut:n.func,onMouseOver:n.func,onMouseUp:n.func,onNodeChange:n.func,onObjectResizeStart:n.func,onObjectResized:n.func,onObjectSelected:n.func,onPaste:n.func,onPostProcess:n.func,onPostRender:n.func,onPreProcess:n.func,onProgressState:n.func,onRedo:n.func,onRemove:n.func,onReset:n.func,onSaveContent:n.func,onSelectionChange:n.func,onSetAttrib:n.func,onSetContent:n.func,onShow:n.func,onSubmit:n.func,onUndo:n.func,onVisualAid:n.func,onSkinLoadError:n.func,onThemeLoadError:n.func,onModelLoadError:n.func,onPluginLoadError:n.func,onIconsLoadError:n.func,onLanguageLoadError:n.func,onScriptsLoad:n.func,onScriptsLoadError:n.func},A=I({apiKey:n.string,id:n.string,inline:n.bool,init:n.object,initialValue:n.string,onEditorChange:n.func,value:n.string,tagName:n.string,cloudChannel:n.string,plugins:n.oneOfType([n.string,n.array]),toolbar:n.oneOfType([n.string,n.array]),disabled:n.bool,textareaName:n.string,tinymceScriptSrc:n.oneOfType([n.string,n.arrayOf(n.string),n.arrayOf(n.shape({src:n.string,async:n.bool,defer:n.bool}))]),rollback:n.oneOfType([n.number,n.oneOf([!1])]),scriptLoading:n.shape({async:n.bool,defer:n.bool,delay:n.number})},N),w=function(r){return typeof r=="function"},O=function(r){return r in N},D=function(r){return r.substr(2)},H=function(r,t,o,e,i,s,u){var a=Object.keys(i).filter(O),c=Object.keys(s).filter(O),d=a.filter(function(l){return s[l]===void 0}),f=c.filter(function(l){return i[l]===void 0});d.forEach(function(l){var p=D(l),h=u[p];o(p,h),delete u[p]}),f.forEach(function(l){var p=e(r,l),h=D(l);u[h]=p,t(h,p)})},K=function(r,t,o,e,i){return H(i,r.on.bind(r),r.off.bind(r),function(s,u){return function(a){var c;return(c=s(u))===null||c===void 0?void 0:c(a,r)}},t,o,e)},j=0,R=function(r){var t=Date.now(),o=Math.floor(Math.random()*1e9);return j++,r+"_"+o+j+String(t)},B=function(r){return r!==null&&(r.tagName.toLowerCase()==="textarea"||r.tagName.toLowerCase()==="input")},M=function(r){return typeof r>"u"||r===""?[]:Array.isArray(r)?r:r.split(" ")},U=function(r,t){return M(r).concat(M(t))},z=function(){return window.InputEvent&&typeof InputEvent.prototype.getTargetRanges=="function"},F=function(r){if(!("isConnected"in Node.prototype)){for(var t=r,o=r.parentNode;o!=null;)t=o,o=t.parentNode;return t===r.ownerDocument}return r.isConnected},x=function(r,t){r!==void 0&&(r.mode!=null&&typeof r.mode=="object"&&typeof r.mode.set=="function"?r.mode.set(t):r.setMode(t))},L=globalThis&&globalThis.__assign||function(){return L=Object.assign||function(r){for(var t,o=1,e=arguments.length;o<e;o++){t=arguments[o];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=t[i])}return r},L.apply(this,arguments)},$=function(r,t,o){var e,i,s=r.createElement("script");s.referrerPolicy="origin",s.type="application/javascript",s.id=t.id,s.src=t.src,s.async=(e=t.async)!==null&&e!==void 0?e:!1,s.defer=(i=t.defer)!==null&&i!==void 0?i:!1;var u=function(){s.removeEventListener("load",u),s.removeEventListener("error",a),o(t.src)},a=function(c){s.removeEventListener("load",u),s.removeEventListener("error",a),o(t.src,c)};s.addEventListener("load",u),s.addEventListener("error",a),r.head&&r.head.appendChild(s)},G=function(r){var t={},o=function(u,a){var c=t[u];c.done=!0,c.error=a;for(var d=0,f=c.handlers;d<f.length;d++){var l=f[d];l(u,a)}c.handlers=[]},e=function(u,a,c){var d=function(b){return c!==void 0?c(b):console.error(b)};if(u.length===0){d(new Error("At least one script must be provided"));return}for(var f=0,l=!1,p=function(b,E){l||(E?(l=!0,d(E)):++f===u.length&&a())},h=0,v=u;h<v.length;h++){var g=v[h],y=t[g.src];if(y)y.done?p(g.src,y.error):y.handlers.push(p);else{var m=R("tiny-");t[g.src]={id:m,src:g.src,done:!1,error:null,handlers:[p]},$(r,L({id:m},g),o)}}},i=function(){for(var u,a=0,c=Object.values(t);a<c.length;a++){var d=c[a],f=r.getElementById(d.id);f!=null&&f.tagName==="SCRIPT"&&((u=f.parentNode)===null||u===void 0||u.removeChild(f))}t={}},s=function(){return r};return{loadScripts:e,deleteScripts:i,getDocument:s}},Y=function(){var r=[],t=function(i){var s=r.find(function(u){return u.getDocument()===i});return s===void 0&&(s=G(i),r.push(s)),s},o=function(i,s,u,a,c){var d=function(){return t(i).loadScripts(s,a,c)};u>0?setTimeout(d,u):d()},e=function(){for(var i=r.pop();i!=null;i=r.pop())i.deleteScripts()};return{loadList:o,reinitialize:e}},q=Y(),T=function(r){var t=r;return t&&t.tinymce?t.tinymce:null},J=globalThis&&globalThis.__extends||function(){var r=function(t,o){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,i){e.__proto__=i}||function(e,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])},r(t,o)};return function(t,o){if(typeof o!="function"&&o!==null)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");r(t,o);function e(){this.constructor=t}t.prototype=o===null?Object.create(o):(e.prototype=o.prototype,new e)}}(),_=globalThis&&globalThis.__assign||function(){return _=Object.assign||function(r){for(var t,o=1,e=arguments.length;o<e;o++){t=arguments[o];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=t[i])}return r},_.apply(this,arguments)},W=function(r){J(t,r);function t(o){var e=this,i,s,u;return e=r.call(this,o)||this,e.rollbackTimer=void 0,e.valueCursor=void 0,e.rollbackChange=function(){var a=e.editor,c=e.props.value;a&&c&&c!==e.currentContent&&a.undoManager.ignore(function(){if(a.setContent(c),e.valueCursor&&(!e.inline||a.hasFocus()))try{a.selection.moveToBookmark(e.valueCursor)}catch{}}),e.rollbackTimer=void 0},e.handleBeforeInput=function(a){if(e.props.value!==void 0&&e.props.value===e.currentContent&&e.editor&&(!e.inline||e.editor.hasFocus()))try{e.valueCursor=e.editor.selection.getBookmark(3)}catch{}},e.handleBeforeInputSpecial=function(a){(a.key==="Enter"||a.key==="Backspace"||a.key==="Delete")&&e.handleBeforeInput(a)},e.handleEditorChange=function(a){var c=e.editor;if(c&&c.initialized){var d=c.getContent();e.props.value!==void 0&&e.props.value!==d&&e.props.rollback!==!1&&(e.rollbackTimer||(e.rollbackTimer=window.setTimeout(e.rollbackChange,typeof e.props.rollback=="number"?e.props.rollback:200))),d!==e.currentContent&&(e.currentContent=d,w(e.props.onEditorChange)&&e.props.onEditorChange(d,c))}},e.handleEditorChangeSpecial=function(a){(a.key==="Backspace"||a.key==="Delete")&&e.handleEditorChange(a)},e.initialise=function(a){var c,d,f;a===void 0&&(a=0);var l=e.elementRef.current;if(l){if(!F(l)){if(a===0)setTimeout(function(){return e.initialise(1)},1);else if(a<100)setTimeout(function(){return e.initialise(a+1)},100);else throw new Error("tinymce can only be initialised when in a document");return}var p=T(e.view);if(!p)throw new Error("tinymce should have been loaded into global scope");var h=_(_({},e.props.init),{selector:void 0,target:l,readonly:e.props.disabled,inline:e.inline,plugins:U((c=e.props.init)===null||c===void 0?void 0:c.plugins,e.props.plugins),toolbar:(d=e.props.toolbar)!==null&&d!==void 0?d:(f=e.props.init)===null||f===void 0?void 0:f.toolbar,setup:function(v){e.editor=v,e.bindHandlers({}),e.inline&&!B(l)&&v.once("PostRender",function(g){v.setContent(e.getInitialValue(),{no_events:!0})}),e.props.init&&w(e.props.init.setup)&&e.props.init.setup(v)},init_instance_callback:function(v){var g,y,m=e.getInitialValue();e.currentContent=(g=e.currentContent)!==null&&g!==void 0?g:v.getContent(),e.currentContent!==m&&(e.currentContent=m,v.setContent(m),v.undoManager.clear(),v.undoManager.add(),v.setDirty(!1));var b=(y=e.props.disabled)!==null&&y!==void 0?y:!1;x(e.editor,b?"readonly":"design"),e.props.init&&w(e.props.init.init_instance_callback)&&e.props.init.init_instance_callback(v)}});e.inline||(l.style.visibility=""),B(l)&&(l.value=e.getInitialValue()),p.init(h)}},e.id=e.props.id||R("tiny-react"),e.elementRef=C.createRef(),e.inline=(u=(i=e.props.inline)!==null&&i!==void 0?i:(s=e.props.init)===null||s===void 0?void 0:s.inline)!==null&&u!==void 0?u:!1,e.boundHandlers={},e}return Object.defineProperty(t.prototype,"view",{get:function(){var o,e;return(e=(o=this.elementRef.current)===null||o===void 0?void 0:o.ownerDocument.defaultView)!==null&&e!==void 0?e:window},enumerable:!1,configurable:!0}),t.prototype.componentDidUpdate=function(o){var e=this,i,s;if(this.rollbackTimer&&(clearTimeout(this.rollbackTimer),this.rollbackTimer=void 0),this.editor&&(this.bindHandlers(o),this.editor.initialized)){if(this.currentContent=(i=this.currentContent)!==null&&i!==void 0?i:this.editor.getContent(),typeof this.props.initialValue=="string"&&this.props.initialValue!==o.initialValue)this.editor.setContent(this.props.initialValue),this.editor.undoManager.clear(),this.editor.undoManager.add(),this.editor.setDirty(!1);else if(typeof this.props.value=="string"&&this.props.value!==this.currentContent){var u=this.editor;u.undoManager.transact(function(){var c;if(!e.inline||u.hasFocus())try{c=u.selection.getBookmark(3)}catch{}var d=e.valueCursor;if(u.setContent(e.props.value),!e.inline||u.hasFocus())for(var f=0,l=[c,d];f<l.length;f++){var p=l[f];if(p)try{u.selection.moveToBookmark(p),e.valueCursor=p;break}catch{}}})}if(this.props.disabled!==o.disabled){var a=(s=this.props.disabled)!==null&&s!==void 0?s:!1;x(this.editor,a?"readonly":"design")}}},t.prototype.componentDidMount=function(){var o=this,e,i,s,u,a;if(T(this.view)!==null)this.initialise();else if(Array.isArray(this.props.tinymceScriptSrc)&&this.props.tinymceScriptSrc.length===0)(i=(e=this.props).onScriptsLoadError)===null||i===void 0||i.call(e,new Error("No `tinymce` global is present but the `tinymceScriptSrc` prop was an empty array."));else if(!((s=this.elementRef.current)===null||s===void 0)&&s.ownerDocument){var c=function(){var f,l;(l=(f=o.props).onScriptsLoad)===null||l===void 0||l.call(f),o.initialise()},d=function(f){var l,p;(p=(l=o.props).onScriptsLoadError)===null||p===void 0||p.call(l,f)};q.loadList(this.elementRef.current.ownerDocument,this.getScriptSources(),(a=(u=this.props.scriptLoading)===null||u===void 0?void 0:u.delay)!==null&&a!==void 0?a:0,c,d)}},t.prototype.componentWillUnmount=function(){var o=this,e=this.editor;e&&(e.off(this.changeEvents(),this.handleEditorChange),e.off(this.beforeInputEvent(),this.handleBeforeInput),e.off("keypress",this.handleEditorChangeSpecial),e.off("keydown",this.handleBeforeInputSpecial),e.off("NewBlock",this.handleEditorChange),Object.keys(this.boundHandlers).forEach(function(i){e.off(i,o.boundHandlers[i])}),this.boundHandlers={},e.remove(),this.editor=void 0)},t.prototype.render=function(){return this.inline?this.renderInline():this.renderIframe()},t.prototype.changeEvents=function(){var o,e,i,s=(i=(e=(o=T(this.view))===null||o===void 0?void 0:o.Env)===null||e===void 0?void 0:e.browser)===null||i===void 0?void 0:i.isIE();return s?"change keyup compositionend setcontent CommentChange":"change input compositionend setcontent CommentChange"},t.prototype.beforeInputEvent=function(){return z()?"beforeinput SelectionChange":"SelectionChange"},t.prototype.renderInline=function(){var o=this.props.tagName,e=o===void 0?"div":o;return C.createElement(e,{ref:this.elementRef,id:this.id})},t.prototype.renderIframe=function(){return C.createElement("textarea",{ref:this.elementRef,style:{visibility:"hidden"},name:this.props.textareaName,id:this.id})},t.prototype.getScriptSources=function(){var o,e,i=(o=this.props.scriptLoading)===null||o===void 0?void 0:o.async,s=(e=this.props.scriptLoading)===null||e===void 0?void 0:e.defer;if(this.props.tinymceScriptSrc!==void 0)return typeof this.props.tinymceScriptSrc=="string"?[{src:this.props.tinymceScriptSrc,async:i,defer:s}]:this.props.tinymceScriptSrc.map(function(d){return typeof d=="string"?{src:d,async:i,defer:s}:d});var u=this.props.cloudChannel,a=this.props.apiKey?this.props.apiKey:"no-api-key",c="https://cdn.tiny.cloud/1/".concat(a,"/tinymce/").concat(u,"/tinymce.min.js");return[{src:c,async:i,defer:s}]},t.prototype.getInitialValue=function(){return typeof this.props.initialValue=="string"?this.props.initialValue:typeof this.props.value=="string"?this.props.value:""},t.prototype.bindHandlers=function(o){var e=this;if(this.editor!==void 0){K(this.editor,o,this.props,this.boundHandlers,function(a){return e.props[a]});var i=function(a){return a.onEditorChange!==void 0||a.value!==void 0},s=i(o),u=i(this.props);!s&&u?(this.editor.on(this.changeEvents(),this.handleEditorChange),this.editor.on(this.beforeInputEvent(),this.handleBeforeInput),this.editor.on("keydown",this.handleBeforeInputSpecial),this.editor.on("keyup",this.handleEditorChangeSpecial),this.editor.on("NewBlock",this.handleEditorChange)):s&&!u&&(this.editor.off(this.changeEvents(),this.handleEditorChange),this.editor.off(this.beforeInputEvent(),this.handleBeforeInput),this.editor.off("keydown",this.handleBeforeInputSpecial),this.editor.off("keyup",this.handleEditorChangeSpecial),this.editor.off("NewBlock",this.handleEditorChange))}},t.propTypes=A,t.defaultProps={cloudChannel:"6"},t}(C.Component);const Q=C.forwardRef((r,t)=>{const{bodyClassName:o,contentClasses:e,disabled:i,errorClassNames:s,height:u,hideErrorRow:a,initialValue:c,onChange:d,onInit:f,validation:l}=r;return C.useEffect(()=>{var p,h,v,g,y,m,b,E;if(l!=null&&l.errorMessage&&((h=(p=t==null?void 0:t.current)==null?void 0:p.editor)!=null&&h.editorContainer)){const S=(g=(v=t==null?void 0:t.current)==null?void 0:v.editor)==null?void 0:g.editorContainer;S.style.border="2px solid red"}else if((m=(y=t==null?void 0:t.current)==null?void 0:y.editor)!=null&&m.editorContainer){const S=(E=(b=t==null?void 0:t.current)==null?void 0:b.editor)==null?void 0:E.editorContainer;S.style.border="2px solid #eee"}},[l]),k.jsxs("div",{className:"flex flex-col w-full h-full",children:[k.jsx(W,{ref:t,onInit:f,initialValue:c,init:{width:"100%",height:u,menubar:!1,body_class:`${o} + " "`,content_style:`${e} .mce-content-body .mce-item-anchor:empty{
            display: none;
          }`,relative_urls:!1,document_base_url:"https://www.example.com/",init_instance_callback:function(p){p.on("init click",function(h){h.target.checked&&h.target.checked!==void 0?(h.target.setAttribute("checked","checked"),console.log(h.target.checked)):h.target.removeAttribute("checked")})},plugins:["advlist","autolink","lists","link","charmap","preview","searchreplace","fullscreen","table","pagebreak","nonbreaking","anchor","wordcount"],toolbar:" undo redo |fontfamily fontsize |  bold italic underline |  alignleft aligncenter alignright alignjustify  | numlist bullist  link image |subscript superscript | table | print | pagebreak"},onEditorChange:d,disabled:i,apiKey:P("VITE_TINY_MCE_KEY")}),!a&&k.jsx(V,{validation:l==null?void 0:l.errorMessage,hideErrorRow:a,errorClassNames:s})]})});Q.defaultProps={height:300,disabled:!1};export{Q as R};
//# sourceMappingURL=RichTextEditor-a03bd2fb.js.map
