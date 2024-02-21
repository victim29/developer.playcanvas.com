"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[6775],{25642:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var a=t(74848),r=t(28453);const n={title:"2D",sidebar_position:17},i=void 0,l={id:"user-manual/2D/index",title:"2D",description:"PlayCanvas\u30a8\u30f3\u30b8\u30f3\u306f\u30013D\u30b2\u30fc\u30e0\u3084\u30a2\u30d7\u30ea\u3092\u7d20\u65e9\u304f\u7c21\u5358\u306b\u4f5c\u6210\u3059\u308b\u305f\u3081\u306b\u8a2d\u8a08\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3057\u304b\u3057\u30012D\u30b2\u30fc\u30e0\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306e\u591a\u6570\u306e\u512a\u308c\u305f\u6a5f\u80fd\u3082\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002PlayCanvas\u306e2D\u6a5f\u80fd\u306b\u3088\u308a\u30013D\u30a8\u30f3\u30b8\u30f3\u306e\u5f37\u529b\u306a\u5229\u70b9\u30922D\u30b2\u30fc\u30e0\u306b\u3082\u6d3b\u7528\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/2D/index.md",sourceDirName:"user-manual/2D",slug:"/user-manual/2D/",permalink:"/ja/user-manual/2D/",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/2D/index.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{title:"2D",sidebar_position:17},sidebar:"userManualSidebar",previous:{title:"ammo.js\u306e\u4ee5\u5916\u306e\u7269\u7406\u6f14\u7b97\u30e9\u30a4\u30d6\u30e9\u30ea",permalink:"/ja/user-manual/physics/ammo-alternatives"},next:{title:"\u30b9\u30d7\u30e9\u30a4\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc",permalink:"/ja/user-manual/2D/sprite-editor"}},u={},c=[{value:"\u57fa\u672c\u7684\u306a\u6a5f\u80fd",id:"\u57fa\u672c\u7684\u306a\u6a5f\u80fd",level:2},{value:"\u30b9\u30d7\u30e9\u30a4\u30c8 (Sprite)",id:"\u30b9\u30d7\u30e9\u30a4\u30c8-sprite",level:3},{value:"\u30c6\u30af\u30b9\u30c1\u30e3\u30a2\u30c8\u30e9\u30b9 (Texture Atlases)",id:"\u30c6\u30af\u30b9\u30c1\u30e3\u30a2\u30c8\u30e9\u30b9-texture-atlases",level:3},{value:"\u30b9\u30d7\u30e9\u30a4\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc",id:"\u30b9\u30d7\u30e9\u30a4\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc",level:3}];function o(e){const s={a:"a",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"PlayCanvas\u30a8\u30f3\u30b8\u30f3\u306f\u30013D\u30b2\u30fc\u30e0\u3084\u30a2\u30d7\u30ea\u3092\u7d20\u65e9\u304f\u7c21\u5358\u306b\u4f5c\u6210\u3059\u308b\u305f\u3081\u306b\u8a2d\u8a08\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3057\u304b\u3057\u30012D\u30b2\u30fc\u30e0\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306e\u591a\u6570\u306e\u512a\u308c\u305f\u6a5f\u80fd\u3082\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002PlayCanvas\u306e2D\u6a5f\u80fd\u306b\u3088\u308a\u30013D\u30a8\u30f3\u30b8\u30f3\u306e\u5f37\u529b\u306a\u5229\u70b9\u30922D\u30b2\u30fc\u30e0\u306b\u3082\u6d3b\u7528\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,a.jsx)(s.h2,{id:"\u57fa\u672c\u7684\u306a\u6a5f\u80fd",children:"\u57fa\u672c\u7684\u306a\u6a5f\u80fd"}),"\n",(0,a.jsx)(s.h3,{id:"\u30b9\u30d7\u30e9\u30a4\u30c8-sprite",children:"\u30b9\u30d7\u30e9\u30a4\u30c8 (Sprite)"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:"/images/user-manual/2D/sprite.jpg",alt:"Sprite"})}),"\n",(0,a.jsxs)(s.p,{children:["2D\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30b9\u306f\u901a\u5e38\u3001",(0,a.jsx)(s.strong,{children:"\u30b9\u30d7\u30e9\u30a4\u30c8"}),"\u3068\u3057\u3066\u77e5\u3089\u308c\u3066\u3044\u307e\u3059\u3002PlayCanvas\u3067\u306f\u3001",(0,a.jsx)(s.a,{href:"/user-manual/assets/types/sprite",children:"Sprite\u30a2\u30bb\u30c3\u30c8"}),"\u3068",(0,a.jsx)(s.a,{href:"/user-manual/scenes/components/sprite",children:"Sprite\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"}),"\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002\u30b9\u30d7\u30e9\u30a4\u30c8\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u3001\u30b7\u30fc\u30f3\u5185\u30672D\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30b9\u3092\u8868\u793a\u3059\u308b\u305f\u3081\u306b\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306b\u30a2\u30bf\u30c3\u30c1\u3055\u308c\u307e\u3059\u3002PlayCanvas\u306e\u30b9\u30d7\u30e9\u30a4\u30c8\u30a2\u30bb\u30c3\u30c8\u306f\u3001\u30c6\u30af\u30b9\u30c1\u30e3\u30a2\u30c8\u30e9\u30b9\u304b\u3089\u306e\u8907\u6570\u306e\u753b\u50cf\u30d5\u30ec\u30fc\u30e0\u3092\u9806\u5e8f\u4ed8\u3051\u3066\u4fdd\u5b58\u3057\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u30b9\u30d7\u30e9\u30a4\u30c8\u30a2\u30bb\u30c3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3001\u30b2\u30fc\u30e0\u5185\u3067\u30d5\u30ea\u30c3\u30d7\u30d6\u30c3\u30af\u30b9\u30bf\u30a4\u30eb\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30b9\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(s.h3,{id:"\u30c6\u30af\u30b9\u30c1\u30e3\u30a2\u30c8\u30e9\u30b9-texture-atlases",children:"\u30c6\u30af\u30b9\u30c1\u30e3\u30a2\u30c8\u30e9\u30b9 (Texture Atlases)"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:"/images/user-manual/2D/texture-atlas.jpg",alt:"Texture Atlas"})}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/user-manual/assets/types/texture-atlas",children:"\u30c6\u30af\u30b9\u30c1\u30e3\u30a2\u30c8\u30e9\u30b9"})," (Texture Atlas) \u306f\u3001\u6a19\u6e96\u306e",(0,a.jsx)(s.a,{href:"/user-manual/assets/types/texture",children:"\u30c6\u30af\u30b9\u30c1\u30e3"}),"\u30a2\u30bb\u30c3\u30c8 (Texture) \u306e\u5f37\u5316\u7248\u3067\u3059\u3002\u901a\u5e38\u306e\u30c6\u30af\u30b9\u30c1\u30e3\u6a5f\u80fd\u306b\u52a0\u3048\u3066\u3001\u30c6\u30af\u30b9\u30c1\u30e3\u30a2\u30c8\u30e9\u30b9\u306b\u306f\u4e00\u9023\u306e\u300c\u30d5\u30ec\u30fc\u30e0\u300d\u306e\u5b9a\u7fa9\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\u5404\u30d5\u30ec\u30fc\u30e0\u306f\u3001\u30b9\u30d7\u30e9\u30a4\u30c8\u30a2\u30bb\u30c3\u30c8\u3067\u53c2\u7167\u3067\u304d\u308b\u30c6\u30af\u30b9\u30c1\u30e3\u306e\u9818\u57df\u3067\u3059\u3002"]}),"\n",(0,a.jsx)(s.h3,{id:"\u30b9\u30d7\u30e9\u30a4\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc",children:"\u30b9\u30d7\u30e9\u30a4\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:"/images/user-manual/2D/sprite-editor.jpg",alt:"Sprite Editor"})}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/user-manual/2D/sprite-editor",children:"\u30b9\u30d7\u30e9\u30a4\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc"}),"\u306f\u3001\u30c6\u30af\u30b9\u30c1\u30e3\u30a2\u30c8\u30e9\u30b9\u306e\u30d5\u30ec\u30fc\u30e0\u3068\u30b9\u30d7\u30e9\u30a4\u30c8\u30a2\u30bb\u30c3\u30c8\u3092\u751f\u6210\u3059\u308b\u305f\u3081\u306e\u30c4\u30fc\u30eb\u3067\u3059\u3002\u30b9\u30d7\u30e9\u30a4\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc\u306f\u3001\u4efb\u610f\u306e\u30c6\u30af\u30b9\u30c1\u30e3\u30a2\u30c8\u30e9\u30b9\u307e\u305f\u306f\u30b9\u30d7\u30e9\u30a4\u30c8\u30a2\u30bb\u30c3\u30c8\u3092\u30c0\u30d6\u30eb\u30af\u30ea\u30c3\u30af\u3059\u308b\u3053\u3068\u3067\u958b\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",(0,a.jsx)(s.a,{href:"/user-manual/2D/sprite-editor",children:"\u8a73\u7d30\u306f\u3053\u3061\u3089"}),"\u3002"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsxs)(s.em,{children:["\u30a2\u30fc\u30c8\u30ef\u30fc\u30af\u306f",(0,a.jsx)(s.a,{href:"https://twitter.com/2pblog1",children:"PixelBoy"}),"\u306b\u3088\u3063\u3066\u4f5c\u6210\u3055\u308c\u307e\u3057\u305f\u3002"]})})]})}function d(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>l});var a=t(96540);const r={},n=a.createContext(r);function i(e){const s=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(n.Provider,{value:s},e.children)}}}]);