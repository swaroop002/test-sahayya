import{bf as v,r as w,j as t,bg as y}from"./index-e8217573.js";import{s as P,a as i,b as l}from"./sortIcon-54357a29.js";import{E as U,S as B,C as d,D as E}from"./ButtonBox-9e46519a.js";import{D as I}from"./Download_Icon-51fc7f46.js";import{k as Y}from"./kebab-menu-8835ad2e.js";import{e as k}from"./eye_icon-081bddb3.js";const W="/assets/blue_loading-6ecb5985.svg",r="/assets/Disabled_Edit-792a65f6.svg",V="/assets/Save_disabled-50984d92.svg",C="/assets/advanced-search-33aa9fe6.svg",j="/assets/sort_disabled-0eb5ec79.svg",b="/assets/upload-gray-0d326a23.svg",m="/assets/closeIcon-b9083511.svg",D="/assets/Reply_Icon-657913f7.svg",G="/assets/eye_icon_disabled-ca731af3.svg",$="/assets/ocr_Icon-1d683cd2.svg",H="/assets/ocr_Icon_Disabled-0b1de82d.svg",oo={EDIT:"EDIT",SAVE:"SAVE",CANCEL:"CANCEL",MENU:"MENU",CLOSE_GRAY:"CLOSE_GRAY",DELETE:"DELETE",REPLY:"REPLY",OCR:"OCR",DOWNLOAD:"DOWNLOAD",UPLOAD:"UPLOAD",VIEW:"VIEW",SORT:"SORT",SORT_ASC:"SORT_ASC",SORT_DESC:"SORT_DESC",DEDUPE_SEARCH:"DEDUPE_SEARCH"},M={EDIT:{icon:U,iconClassName:"text-blue-500",disabledIcon:r,tooltipText:"Edit"},SAVE:{icon:B,iconClassName:"",disabledIcon:V,tooltipText:"Save"},CANCEL:{icon:d,iconClassName:"",disabledIcon:d,tooltipText:"Cancel"},CLOSE_GRAY:{icon:m,iconClassName:"",disabledIcon:m,tooltipText:"Close"},MENU:{icon:Y,iconClassName:"",disabledIcon:r,tooltipText:"Menu"},DELETE:{icon:E,iconClassName:"",disabledIcon:E,tooltipText:"Delete"},OCR:{icon:$,iconClassName:"w-6 h-6",disabledIcon:H,tooltipText:"Ocr"},DOWNLOAD:{icon:I,iconClassName:"w-6 h-6",disabledIcon:I,tooltipText:"Download"},UPLOAD:{icon:b,iconClassName:"",disabledIcon:b,tooltipText:"Upload"},VIEW:{icon:k,iconClassName:"",disabledIcon:G,tooltipText:"Preview"},REPLY:{icon:D,iconClassName:"",disabledIcon:D,tooltipText:"Reply"},SORT:{icon:P,iconClassName:"",disabledIcon:j,tooltipText:"Sort"},SORT_ASC:{icon:i,iconClassName:"",disabledIcon:i,tooltipText:"Ascending"},SORT_DESC:{icon:l,iconClassName:"",disabledIcon:l,tooltipText:"Descending"},DEDUPE_SEARCH:{icon:C,iconClassName:"!w-6 !h-6",disabledIcon:C,tooltipText:"Search"}},q=o=>{const{buttonType:T,className:p,disabled:S,isDisabledByAcl:N,onClick:c,onClickWithLoader:n,hideDefaultIconClassName:O,isIgnoreAccessLevel:R,...x}=o,[A,e]=w.useState(!1),g=async u=>{if(c)c(u);else if(n){const s=n();e(!0),s&&Promise.resolve(s)===s&&s.then(z=>{e(!1)}).catch(()=>{e(!1)})}},{icon:L,iconClassName:_,disabledIcon:h,tooltipText:f}=M[T??"EDIT"];let a=S;return R||N&&(a=!0),t.jsxs(y,{...x,disabled:a,className:` ${p??""} ${o.children?"":"w-6 h-6"}`,onClick:g,tooltip:f,tooltipOptions:o.tooltipOptions?o.tooltipOptions:{position:"top",className:"text-xs font-Roboto bg-black text-white !p-1 rounded-md "},children:[o.children,A?t.jsx("img",{src:W,alt:"loading",className:"w-5 h-5 animate-spin"}):t.jsx("img",{src:a?h:L,className:`${O?"":" w-3.5 h-3.5"} ${_}`,alt:"Sahayya Logo",width:24})]})},so=v(q);export{oo as B,r as E,so as I};
//# sourceMappingURL=IconButton-36693dd9.js.map