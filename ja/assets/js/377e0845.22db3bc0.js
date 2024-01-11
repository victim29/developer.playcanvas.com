"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[9782],{9796:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>t,metadata:()=>i,toc:()=>m});var n=a(85893),l=a(11151);const t={title:"Wasm\u30e2\u30b8\u30e5\u30fc\u30eb",layout:"usermanual-page.hbs",sidebar_position:17},r=void 0,i={id:"user-manual/assets/wasm-modules",title:"Wasm\u30e2\u30b8\u30e5\u30fc\u30eb",description:"Wasm\u30e2\u30b8\u30e5\u30fc\u30eb(WebAssembly\u30e2\u30b8\u30e5\u30fc\u30eb\u3068\u3082\u547c\u3070\u308c\u307e\u3059)\u306b\u306f\u3001Web\u5411\u3051\u306b\u30b3\u30f3\u30d1\u30a4\u30eb\u3055\u308c\u305f\u5b9f\u884c\u53ef\u80fd\u30b3\u30fc\u30c9\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/assets/wasm-modules.md",sourceDirName:"user-manual/assets",slug:"/user-manual/assets/wasm-modules",permalink:"/developer.playcanvas.com/ja/user-manual/assets/wasm-modules",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/assets/wasm-modules.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{title:"Wasm\u30e2\u30b8\u30e5\u30fc\u30eb",layout:"usermanual-page.hbs",sidebar_position:17},sidebar:"userManualSidebar",previous:{title:"Texture Atlas",permalink:"/developer.playcanvas.com/ja/user-manual/assets/texture-atlas"},next:{title:"\u30a2\u30bb\u30c3\u30c8\u306e\u63a2\u3057\u65b9",permalink:"/developer.playcanvas.com/ja/user-manual/assets/finding"}},c={},m=[{value:"Wasm\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u30d7\u30ed\u30d1\u30c6\u30a3",id:"wasm\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u30d7\u30ed\u30d1\u30c6\u30a3",level:2},{value:"Wasm\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u540d\u524d (Name)",id:"wasm\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u540d\u524d-name",level:3},{value:"\u30b0\u30eb\u30fc\u30b9\u30af\u30ea\u30d7\u30c8 (Glue script)",id:"\u30b0\u30eb\u30fc\u30b9\u30af\u30ea\u30d7\u30c8-glue-script",level:3},{value:"\u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30af\u30b9\u30af\u30ea\u30d7\u30c8 (Fallback script)",id:"\u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30af\u30b9\u30af\u30ea\u30d7\u30c8-fallback-script",level:3}];function u(e){const s={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"Wasm\u30e2\u30b8\u30e5\u30fc\u30eb(WebAssembly\u30e2\u30b8\u30e5\u30fc\u30eb\u3068\u3082\u547c\u3070\u308c\u307e\u3059)\u306b\u306f\u3001Web\u5411\u3051\u306b\u30b3\u30f3\u30d1\u30a4\u30eb\u3055\u308c\u305f\u5b9f\u884c\u53ef\u80fd\u30b3\u30fc\u30c9\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,n.jsx)(s.p,{children:"Wasm\u30e2\u30b8\u30e5\u30fc\u30eb\u306b\u306f3\u3064\u306e\u90e8\u5206\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"\u30d0\u30a4\u30ca\u30ea\u5b9f\u884c\u30d5\u30a1\u30a4\u30eb"}),"\n",(0,n.jsx)(s.li,{children:"JavaScript\u306e\u30b0\u30eb\u30fc\u30b3\u30fc\u30c9 \u30d5\u30a1\u30a4\u30eb"}),"\n",(0,n.jsx)(s.li,{children:"\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30afasm.js"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"\u3053\u308c\u3089\u306e\u30d5\u30a1\u30a4\u30eb\u306f\u3001\u30a2\u30bb\u30c3\u30c8\u30d1\u30cd\u30eb\u306b\u30c9\u30e9\u30c3\u30b0\u30a2\u30f3\u30c9\u30c9\u30ed\u30c3\u30d7\u3059\u308b\u304b\u3001\u30a2\u30bb\u30c3\u30c8\u30d1\u30cd\u30eb\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30e1\u30cb\u30e5\u30fc\u304b\u3089 'Upload' \u3092\u9078\u629e\u3059\u308b\u3053\u3068\u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,n.jsxs)(s.p,{children:["PlayCanvas\u30a8\u30c7\u30a3\u30bf\u30fc\u306f\u73fe\u5728\u3001",(0,n.jsx)(s.a,{href:"https://emscripten.org/",children:"Emscripten"}),"\u3067\u30b3\u30f3\u30d1\u30a4\u30eb\u3055\u308c\u305fWasm\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u307f\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,n.jsx)(s.h2,{id:"wasm\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u30d7\u30ed\u30d1\u30c6\u30a3",children:"Wasm\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u30d7\u30ed\u30d1\u30c6\u30a3"}),"\n",(0,n.jsxs)(s.p,{children:["\u30d5\u30a1\u30a4\u30eb\u304c\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u8ffd\u52a0\u3055\u308c\u305f\u3089\u3001Wasm\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u9078\u629e\u3057\u3066\u3001\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u30fc\u30d1\u30cd\u30eb\u3067\u305d\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u8868\u793a\u3057\u307e\u3059\u3002\n",(0,n.jsx)(s.img,{src:"/images/user-manual/assets/wasm-module.png",alt:"Wasm\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u30d7\u30ed\u30d1\u30c6\u30a3"})]}),"\n",(0,n.jsx)(s.h3,{id:"wasm\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u540d\u524d-name",children:"Wasm\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u540d\u524d (Name)"}),"\n",(0,n.jsx)(s.p,{children:"\u540d\u524d\u306f\u3001\u30b0\u30eb\u30fc\u30b3\u30fc\u30c9\u3084\u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30af\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u30e2\u30b8\u30e5\u30fc\u30eb\u540d\u3068\u4e00\u81f4\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u306e\u540d\u524d\u306f\u3001\u30ed\u30fc\u30c9\u6642\u306b\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,n.jsx)(s.h3,{id:"\u30b0\u30eb\u30fc\u30b9\u30af\u30ea\u30d7\u30c8-glue-script",children:"\u30b0\u30eb\u30fc\u30b9\u30af\u30ea\u30d7\u30c8 (Glue script)"}),"\n",(0,n.jsx)(s.p,{children:"\u3053\u308c\u306f\u3001Wasm\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306aJavaScript\u306e\u30b0\u30eb\u30fc\u30b3\u30fc\u30c9\u3067\u3059\u3002"}),"\n",(0,n.jsx)(s.h3,{id:"\u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30af\u30b9\u30af\u30ea\u30d7\u30c8-fallback-script",children:"\u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30af\u30b9\u30af\u30ea\u30d7\u30c8 (Fallback script)"}),"\n",(0,n.jsx)(s.p,{children:"\u3053\u308c\u306f\u3001WebAssembly\u304c\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u306a\u3044\u969b\u306b\u4f7f\u7528\u3059\u308b\u3001\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30afasm.js \u30b9\u30af\u30ea\u30d7\u30c8\u3067\u3059\u3002"})]})}function o(e={}){const{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},11151:(e,s,a)=>{a.d(s,{Z:()=>i,a:()=>r});var n=a(67294);const l={},t=n.createContext(l);function r(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);