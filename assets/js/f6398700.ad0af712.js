"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[4272],{2103:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var a=t(85893),n=t(11151);const l={title:"WASM Module"},i=void 0,r={id:"user-manual/assets/types/wasm",title:"WASM Module",description:"Wasm Modules (also known was WebAssembly Modules) contain compiled executable code for the web.",source:"@site/docs/user-manual/assets/types/wasm.md",sourceDirName:"user-manual/assets/types",slug:"/user-manual/assets/types/wasm",permalink:"/user-manual/assets/types/wasm",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/assets/types/wasm.md",tags:[],version:"current",frontMatter:{title:"WASM Module"},sidebar:"userManualSidebar",previous:{title:"Texture",permalink:"/user-manual/assets/types/texture"},next:{title:"Uploading and Importing",permalink:"/user-manual/assets/importing"}},o={},c=[{value:"Wasm Module Properties",id:"wasm-module-properties",level:2},{value:"Name",id:"name",level:3},{value:"Glue script",id:"glue-script",level:3},{value:"Fallback script",id:"fallback-script",level:3}];function d(e){const s={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"Wasm Modules (also known was WebAssembly Modules) contain compiled executable code for the web."}),"\n",(0,a.jsx)(s.p,{children:"A Wasm module comprises three parts:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"the binary executable file"}),"\n",(0,a.jsx)(s.li,{children:"the JavaScript glue code file"}),"\n",(0,a.jsx)(s.li,{children:"an optional fallback asm.js"}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"These files can be added to the project either by dragging and dropping the files into the Assets Panel or by selecting 'Upload' from the Assets Panel context menu."}),"\n",(0,a.jsxs)(s.p,{children:["Please note that PlayCanvas Editor currently supports ",(0,a.jsx)(s.a,{href:"https://emscripten.org/",children:"Emscripten"})," compiled Wasm Modules only."]}),"\n",(0,a.jsx)(s.h2,{id:"wasm-module-properties",children:"Wasm Module Properties"}),"\n",(0,a.jsxs)(s.p,{children:["Once the files have been added to the project, select the Wasm Module to display its properties in the Inspector Panel:\n",(0,a.jsx)(s.img,{src:"/images/user-manual/assets/wasm-module.png",alt:"Wasm Module Properties"})]}),"\n",(0,a.jsx)(s.h3,{id:"name",children:"Name"}),"\n",(0,a.jsx)(s.p,{children:"Name must match the module name defined in the glue and fallback script. This name is used to instantiate the module at load time."}),"\n",(0,a.jsx)(s.h3,{id:"glue-script",children:"Glue script"}),"\n",(0,a.jsx)(s.p,{children:"This is the JavaScript glue code required to execute Wasm code."}),"\n",(0,a.jsx)(s.h3,{id:"fallback-script",children:"Fallback script"}),"\n",(0,a.jsx)(s.p,{children:"This is the optional fallback asm.js script to use when WebAssembly is not supported."})]})}function u(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>r,a:()=>i});var a=t(67294);const n={},l=a.createContext(n);function i(e){const s=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(l.Provider,{value:s},e.children)}}}]);