"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[9863],{37506:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var r=t(85893),a=t(11151);const s={title:"\u65b0\u3057\u3044\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u4f5c\u6210",layout:"usermanual-page.hbs",sidebar_position:1},i=void 0,c={id:"user-manual/scripting/creating-new",title:"\u65b0\u3057\u3044\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u4f5c\u6210",description:"\u65b0\u3057\u3044\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u30a2\u30bb\u30c3\u30c8\u30d1\u30cd\u30eb\u3092\u4f7f\u7528\u3057\u3066New Script\u3092\u9078\u629e\u3057\u307e\u3059\u3002\u5f53\u305f\u3089\u3057\u30b9\u30af\u30ea\u30d7\u30c8\u30d5\u30a1\u30a4\u30eb\u306b\u540d\u524d\u3092\u5165\u529b\u3059\u308b\u3088\u3046\u4fc3\u3055\u308c\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/scripting/creating-new.md",sourceDirName:"user-manual/scripting",slug:"/user-manual/scripting/creating-new",permalink:"/developer.playcanvas.com/ja/user-manual/scripting/creating-new",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/scripting/creating-new.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u65b0\u3057\u3044\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u4f5c\u6210",layout:"usermanual-page.hbs",sidebar_position:1},sidebar:"userManualSidebar",previous:{title:"\u30b9\u30af\u30ea\u30d7\u30c6\u30a3\u30f3\u30b0",permalink:"/developer.playcanvas.com/ja/user-manual/scripting/"},next:{title:"\u30b3\u30fc\u30c9\u30a8\u30c7\u30a3\u30bf\u30fc",permalink:"/developer.playcanvas.com/ja/user-manual/scripting/code-editor"}},l={},o=[{value:"\u30b9\u30af\u30ea\u30d7\u30c8\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u30a2\u30bf\u30c3\u30c1 (Attach)",id:"\u30b9\u30af\u30ea\u30d7\u30c8\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u30a2\u30bf\u30c3\u30c1-attach",level:2},{value:"\u5b9f\u884c\u6642\u306b\u30b9\u30af\u30ea\u30d7\u30c8\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u8ffd\u52a0",id:"\u5b9f\u884c\u6642\u306b\u30b9\u30af\u30ea\u30d7\u30c8\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u8ffd\u52a0",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u65b0\u3057\u3044\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u30a2\u30bb\u30c3\u30c8\u30d1\u30cd\u30eb\u3092\u4f7f\u7528\u3057\u3066New Script\u3092\u9078\u629e\u3057\u307e\u3059\u3002\u5f53\u305f\u3089\u3057\u30b9\u30af\u30ea\u30d7\u30c8\u30d5\u30a1\u30a4\u30eb\u306b\u540d\u524d\u3092\u5165\u529b\u3059\u308b\u3088\u3046\u4fc3\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"/images/user-manual/scripting/new-script.jpg",alt:"New Script"})}),"\n",(0,r.jsx)(n.p,{children:"\u30d1\u30cd\u30eb\u3067\u30b9\u30af\u30ea\u30d7\u30c8\u30a2\u30bb\u30c3\u30c8\u3092\u30c0\u30d6\u30eb\u30af\u30ea\u30c3\u30af\u3057\u3066\u30b3\u30fc\u30c9\u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u958b\u304f\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"/images/user-manual/scripting/code-editor.jpg",alt:"Code Editor"})}),"\n",(0,r.jsx)(n.h2,{id:"\u30b9\u30af\u30ea\u30d7\u30c8\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u30a2\u30bf\u30c3\u30c1-attach",children:"\u30b9\u30af\u30ea\u30d7\u30c8\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u30a2\u30bf\u30c3\u30c1 (Attach)"}),"\n",(0,r.jsx)(n.p,{children:"\u30b9\u30af\u30ea\u30d7\u30c8\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u4ed6\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3068\u540c\u3058\u3088\u3046\u306b\u4f5c\u6210\u3057\u307e\u3059\u3002\u30b9\u30af\u30ea\u30d7\u30c8\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u305f\u3089\u30a2\u30bb\u30c3\u30c8\u30ea\u30b9\u30c8\u304b\u3089\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u9078\u629e\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"/images/user-manual/scripting/select-script.jpg",alt:"Select Script"})}),"\n",(0,r.jsx)(n.p,{children:"\u30b9\u30af\u30ea\u30d7\u30c8\u306f\u540d\u524d\u3067\u8868\u793a\u3055\u308c\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u8ffd\u52a0\u3059\u308b\u305f\u3081\u306b\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u9078\u629e\u3059\u308b\u3068\u30b9\u30af\u30ea\u30d7\u30c8\u30b3\u30f3\u30c6\u30f3\u30c4\u306f\u30d1\u30fc\u30b9\u3055\u308c\u3001\u5ba3\u8a00\u3055\u308c\u305f\u5c5e\u6027\u306f\u5168\u3066\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3067\u9732\u51fa\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u5b9f\u884c\u6642\u306b\u30b9\u30af\u30ea\u30d7\u30c8\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u8ffd\u52a0",children:"\u5b9f\u884c\u6642\u306b\u30b9\u30af\u30ea\u30d7\u30c8\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u8ffd\u52a0"}),"\n",(0,r.jsx)(n.p,{children:"\u30b9\u30af\u30ea\u30d7\u30c8\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304b\u3089\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u5b9f\u884c\u3057\u3066\u3044\u308b\u9593\u306b\u52d5\u7684\u306b\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'var entity = new pc.Entity();\nentity.addComponent("script");\nentity.script.create("rotate", {\n    attributes: {\n        speed: 20\n    }\n});\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306e\u6642\u70b9\u3067\u65e2\u306brotate\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u8aad\u307f\u8fbc\u307e\u308c\u3066\u3044\u308b\u306f\u305a\u3067\u3059\u3002Asset Registry\u306e",(0,r.jsx)(n.a,{href:"/api/pc.AssetRegistry.html#load",children:"load()"}),"\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3057\u3066\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u8aad\u307f\u8fbc\u3080\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304b\u3089\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u53d6\u308a\u9664\u304f\u306b\u306f",(0,r.jsx)(n.code,{children:"destroy"}),"\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'entity.script.destroy("rotate");\n'})})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var r=t(67294);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);