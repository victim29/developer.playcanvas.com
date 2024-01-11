"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[3475],{61761:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=r(85893),t=r(11151);const s={title:"AR",sidebar_position:2},i=void 0,l={id:"user-manual/xr/ar/index",title:"AR",description:"AR View",source:"@site/docs/user-manual/xr/ar/index.md",sourceDirName:"user-manual/xr/ar",slug:"/user-manual/xr/ar/",permalink:"/developer.playcanvas.com/user-manual/xr/ar/",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/xr/ar/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"AR",sidebar_position:2},sidebar:"userManualSidebar",previous:{title:"Using WebXR in PlayCanvas",permalink:"/developer.playcanvas.com/user-manual/xr/using-webxr"},next:{title:"8th Wall Integration",permalink:"/developer.playcanvas.com/user-manual/xr/ar/8th-wall-integration"}},o={},c=[{value:"Platforms",id:"platforms",level:2},{value:"Getting started with WebXR AR",id:"getting-started-with-webxr-ar",level:2},{value:"Starter Kits",id:"starter-kits",level:2}];function p(e){const a={a:"a",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:"/images/user-manual/xr/ar-view.png",alt:"AR View"})}),"\n",(0,n.jsx)(a.p,{children:"PlayCanvas lets you create Augmented Reality (AR) applications for mobile devices through the WebXR API, as well as through integrations with popular AR frameworks."}),"\n",(0,n.jsx)(a.h2,{id:"platforms",children:"Platforms"}),"\n",(0,n.jsxs)(a.p,{children:["AR capabilities are available using the Android Chrome browser. iOS Safari support for WebXR is ",(0,n.jsx)(a.a,{href:"https://webkit.org/status/#specification-webxr",children:"in progress"}),". Additionally, frameworks such as ",(0,n.jsx)(a.a,{href:"/user-manual/xr/ar/8th-wall-integration/",children:"8th Wall"})," and ",(0,n.jsx)(a.a,{href:"/user-manual/xr/ar/zappar-integration/",children:"Zappar"})," allow users to experience AR content in most mobile browsers, including Safari."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.em,{children:"The aforementioned frameworks are external, and have separate licensing, available on their respective websites."})}),"\n",(0,n.jsx)(a.h2,{id:"getting-started-with-webxr-ar",children:"Getting started with WebXR AR"}),"\n",(0,n.jsx)(a.p,{children:"When using PlayCanvas\u2019 built-in AR support, the scene\u2019s primary camera\u2019s clear color must be transparent, as so:"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:"/images/user-manual/xr/ar/transparent-clear-color.png",alt:"Transparent Clear Color"})}),"\n",(0,n.jsx)(a.p,{children:"To start an AR session, device support and availability should also be checked first. Then, on user interaction, such as a button click or other input, an AR session can be started:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:"button.element.on('click', function () {\n    // check if XR is supported and AR is available\n    if (app.xr.supported && app.xr.isAvailable(pc.XRTYPE_AR)) {\n        // start AR using a camera component\n        entity.camera.startXr(pc.XRTYPE_AR, pc.XRSPACE_VIEWER);\n    }\n});\n"})}),"\n",(0,n.jsx)(a.p,{children:"Once the user is done, immersive-xr mode can be exited by calling:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:"app.xr.end();\n"})}),"\n",(0,n.jsx)(a.p,{children:"Augmented Reality allows blending the real world with virtual imagery, either by composing a rendered buffer over the camera feed or with special projection of a rendered buffer on see-through glasses. Usually it is provided with spatial tracking relative to the real world environment."}),"\n",(0,n.jsxs)(a.p,{children:["Suitable reference space: ",(0,n.jsx)(a.code,{children:"pc.XRSPACE_VIEWER"}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"starter-kits",children:"Starter Kits"}),"\n",(0,n.jsx)(a.p,{children:"PlayCanvas provides a number of \u2018Starter Kit\u2019 projects to help you and your AR experiences get up and running faster. When creating a new project, simply select from the dialogue the template that suits you best."})]})}function d(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},11151:(e,a,r)=>{r.d(a,{Z:()=>l,a:()=>i});var n=r(67294);const t={},s=n.createContext(t);function i(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);