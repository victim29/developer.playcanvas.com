"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[5685],{33171:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=a(85893),t=a(11151);const s={title:"\u30ed\u30fc\u30c9\u6642\u9593\u306e\u6700\u9069\u5316",layout:"usermanual-page.hbs",sidebar_position:7},o=void 0,l={id:"user-manual/optimization/load-time",title:"\u30ed\u30fc\u30c9\u6642\u9593\u306e\u6700\u9069\u5316",description:"\u6700\u9069\u5316\u306b\u3088\u3063\u3066\u30d5\u30ec\u30fc\u30e0\u30ec\u30fc\u30c8\u3092\u5411\u4e0a\u3055\u305b\u308b\u306e\u306b\u9650\u5b9a\u3055\u308c\u307e\u305b\u3093\u3002\u30ed\u30fc\u30c9\u6642\u9593\u3082\u540c\u69d8\u306b\u91cd\u8981\u3067\u3059\u3002\u30a2\u30d7\u30ea\u306e\u30ed\u30fc\u30c9\u304c\u901f\u3051\u308c\u3070\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u305d\u308c\u3092\u4f53\u9a13\u3059\u308b\u305f\u3081\u306b\u6b8b\u7559\u3059\u308b\u53ef\u80fd\u6027\u304c\u9ad8\u304f\u306a\u308a\u307e\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u306e\u96e2\u8131\u3092\u9632\u3050\u305f\u3081\u306b\u30a2\u30d7\u30ea\u304c5\u79d2\u4ee5\u4e0b\u3067\u8aad\u307f\u8fbc\u307e\u308c\u308b\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u3092\u76ee\u6307\u3057\u3066\u304f\u3060\u3055\u3044\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/optimization/load-time.md",sourceDirName:"user-manual/optimization",slug:"/user-manual/optimization/load-time",permalink:"/developer.playcanvas.com/ja/user-manual/optimization/load-time",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/optimization/load-time.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"\u30ed\u30fc\u30c9\u6642\u9593\u306e\u6700\u9069\u5316",layout:"usermanual-page.hbs",sidebar_position:7},sidebar:"userManualSidebar",previous:{title:"\u30c7\u30d0\u30a4\u30b9\u30d4\u30af\u30bb\u30eb\u6bd4\u7387 (DPI)",permalink:"/developer.playcanvas.com/ja/user-manual/optimization/runtime-devicepixelratio"},next:{title:"\u30b7\u30fc\u30f3\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u6700\u9069\u5316",permalink:"/developer.playcanvas.com/ja/user-manual/optimization/optimizing-scene-format"}},r={},c=[{value:"\u30ed\u30fc\u30c9\u30b7\u30fc\u30b1\u30f3\u30b9\u306e\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9",id:"\u30ed\u30fc\u30c9\u30b7\u30fc\u30b1\u30f3\u30b9\u306e\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9",level:2},{value:"\u8ffd\u52a0\u306e\u6539\u5584",id:"\u8ffd\u52a0\u306e\u6539\u5584",level:3}];function d(e){const n={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u6700\u9069\u5316\u306b\u3088\u3063\u3066\u30d5\u30ec\u30fc\u30e0\u30ec\u30fc\u30c8\u3092\u5411\u4e0a\u3055\u305b\u308b\u306e\u306b\u9650\u5b9a\u3055\u308c\u307e\u305b\u3093\u3002\u30ed\u30fc\u30c9\u6642\u9593\u3082\u540c\u69d8\u306b\u91cd\u8981\u3067\u3059\u3002\u30a2\u30d7\u30ea\u306e\u30ed\u30fc\u30c9\u304c\u901f\u3051\u308c\u3070\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u305d\u308c\u3092\u4f53\u9a13\u3059\u308b\u305f\u3081\u306b\u6b8b\u7559\u3059\u308b\u53ef\u80fd\u6027\u304c\u9ad8\u304f\u306a\u308a\u307e\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u306e\u96e2\u8131\u3092\u9632\u3050\u305f\u3081\u306b\u30a2\u30d7\u30ea\u304c5\u79d2\u4ee5\u4e0b\u3067\u8aad\u307f\u8fbc\u307e\u308c\u308b\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u3092\u76ee\u6307\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4ee5\u4e0b\u306f\u3001\u9ad8\u901f\u306a\u30ed\u30fc\u30c9\u6642\u9593\u3092\u5b9f\u73fe\u3059\u308b\u305f\u3081\u306e\u3044\u304f\u3064\u304b\u306e\u30d2\u30f3\u30c8\u3067\u3059\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["In general, AVIF images produce smaller files than WebP, JPG, or PNG for the same image quality. It also supports an alpha channel like WebP and PNG. However ",(0,i.jsx)(n.a,{href:"https://caniuse.com/avif",children:"not all browsers currently support AVIF"})," so use it where it makes sense for your project. If you can't use AVIF, ",(0,i.jsx)(n.a,{href:"https://caniuse.com/webp",children:"WebP has much wider support"})," and produces smaller files than JPEG or PNG with similar quality, but we encourage you to test with different formats."]}),"\n",(0,i.jsx)(n.li,{children:"\u7279\u5b9a\u306e\u30c6\u30af\u30b9\u30c1\u30e3\u30a4\u30e1\u30fc\u30b8\u3092\u30c0\u30a6\u30f3\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u3059\u308b\u6a5f\u4f1a\u3092\u63a2\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u4f8b\u3048\u3070\u3001\u5c0f\u3055\u3044\u30b0\u30e9\u30d5\u30a3\u30ab\u30eb\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u4f7f\u7528\u3055\u308c\u308b 2048x2048 \u306e\u30c6\u30af\u30b9\u30c1\u30e3\u306f\u30011024x1024 \u307e\u305f\u306f512x512 \u3067\u307b\u307c\u540c\u3058\u3088\u3046\u306b\u898b\u3048\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u975e\u540c\u671f\u3067\u8aad\u307f\u8fbc\u3080\u3053\u3068\u304c\u3067\u304d\u308b\u30a2\u30bb\u30c3\u30c8\u3092\u4e8b\u524d\u306b\u30ed\u30fc\u30c9\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002\u4f8b\u3048\u3070\u3001\u30b2\u30fc\u30e0\u306e\u958b\u59cb\u6642\u306b\u3059\u3050\u306b\u30b2\u30fc\u30e0\u30df\u30e5\u30fc\u30b8\u30c3\u30af\u3092\u518d\u751f\u3059\u308b\u5fc5\u8981\u304c\u306a\u3044\u5834\u5408\u306f\u3001Inspector \u30d1\u30cd\u30eb\u3067\u305d\u306e\u30a2\u30bb\u30c3\u30c8\u306e Preload \u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u30aa\u30d5\u306b\u3059\u308b\u3053\u3068\u3092\u691c\u8a0e\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u30d7\u30ea\u30d5\u30a3\u30eb\u30bf\u30fc (Prefiltered) \u3055\u308c\u305f\u30ad\u30e5\u30fc\u30d6\u30de\u30c3\u30d7\u3092\u6301\u3063\u3066\u3044\u3066\u3001\u30b9\u30ab\u30a4\u30dc\u30c3\u30af\u30b9\u306e\u6700\u4e0a\u4f4d\u30df\u30c3\u30d7\u30de\u30c3\u30d7\u3092\u8868\u793a\u3057\u3066\u3044\u306a\u3044\u5834\u5408\u30016\u3064\u306e\u9762\u753b\u50cf\u306e preload \u3092\u3059\u3079\u3066\u30aa\u30d5\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.li,{children:["If you are not instantiating Templates at runtime, uncheck preload on the asset as they aren't needed. (See '",(0,i.jsx)(n.a,{href:"/user-manual/templates/#when-do-i-need-to-load-template-assets",children:"When do I need to load Template Assets?"}),"' for more information)."]}),"\n",(0,i.jsx)(n.li,{children:"\u30a4\u30f3\u30dd\u30fc\u30c8\u3055\u308c\u305f\u30e2\u30c7\u30eb\u306b\u5fc5\u8981\u306a\u9802\u70b9\u5c5e\u6027\u306e\u307f\u3092\u6301\u305f\u305b\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u305f\u3068\u3048\u3070\u3001\u30e2\u30c7\u30eb\u306b\u7b2c2 UV \u30bb\u30c3\u30c8\u304c\u3042\u308b\u304c\u4f7f\u7528\u3057\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u307e\u305f\u306f\u3059\u3079\u3066\u304c\u767d\u3044\u9802\u70b9\u30ab\u30e9\u30fc\u3057\u304b\u306a\u3044\u5834\u5408\u306f\u3001\u30e2\u30c7\u30ea\u30f3\u30b0\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u623b\u3063\u3066\u305d\u308c\u3089\u306e\u5c5e\u6027\u3092\u524a\u9664\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,i.jsx)(n.li,{children:"Google Chrome Dev Tools \u306e Networking \u30d1\u30cd\u30eb (\u307e\u305f\u306f\u4ed6\u306e\u30d6\u30e9\u30a6\u30b6\u306e\u305d\u308c\u306b\u76f8\u5f53\u3059\u308b\u3082\u306e) \u3092\u4f7f\u7528\u3057\u3066\u3001\u30b5\u30a4\u30ba\u3067\u30ed\u30fc\u30c9\u3055\u308c\u305f\u30a2\u30bb\u30c3\u30c8\u3092\u30bd\u30fc\u30c8\u3057\u3001\u76ee\u7acb\u3064\u3082\u306e\u3092\u898b\u3064\u3051\u3066\u304f\u3060\u3055\u3044\u3002\u4f7f\u7528\u3055\u308c\u3066\u3044\u306a\u3044\u30a2\u30bb\u30c3\u30c8\u307e\u305f\u306f\u91cd\u8907\u3059\u308b\u30a2\u30bb\u30c3\u30c8\u3092\u524a\u9664\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.li,{children:"PlayCanvas \u306e\u7d44\u307f\u8fbc\u307f\u7269\u7406\u30a8\u30f3\u30b8\u30f3\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001379KB \u306e\u8ffd\u52a0\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u30b3\u30b9\u30c8\u304c\u767a\u751f\u3057\u307e\u3059\u3002\u975e\u5e38\u306b\u5358\u7d14\u306a\u554f\u984c\u3092\u89e3\u6c7a\u3059\u308b\u305f\u3081\u306b\u7269\u7406\u30a8\u30f3\u30b8\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u30da\u30ca\u30eb\u30c6\u30a3\u3092\u88ab\u3089\u306a\u3044\u4ee3\u66ff\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u63a1\u7528\u3059\u308b\u3053\u3068\u3092\u691c\u8a0e\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,i.jsx)(n.li,{children:"PlayCanvas \u30a2\u30d7\u30ea\u3092\u30bb\u30eb\u30d5\u30db\u30b9\u30c8\u3059\u308b\u5834\u5408\u306f\u3001GZIP \u5727\u7e2e\u3067\u30d5\u30a1\u30a4\u30eb\u3092\u63d0\u4f9b\u3059\u308b\u3088\u3046\u306b\u30a6\u30a7\u30d6\u30b5\u30fc\u30d0\u30fc\u3092\u69cb\u6210\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u7279\u306b JSON \u3068 JS \u30d5\u30a1\u30a4\u30eb\u306b\u3064\u3044\u3066\u306f\u305d\u308c\u304c\u5fc5\u8981\u3067\u3059\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u30ed\u30fc\u30c9\u30b7\u30fc\u30b1\u30f3\u30b9\u306e\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9",children:"\u30ed\u30fc\u30c9\u30b7\u30fc\u30b1\u30f3\u30b9\u306e\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9"}),"\n",(0,i.jsx)(n.p,{children:"\u4e0a\u8a18\u306e\u30ac\u30a4\u30c9\u30e9\u30a4\u30f3\u3092\u8d85\u3048\u3066\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u65b0\u3057\u3044\u3082\u306e\u3068\u3084\u308a\u3068\u308a\u3067\u304d\u308b\u3088\u3046\u306b\u30ed\u30fc\u30c9\u3092\u8907\u6570\u306e\u6bb5\u968e\u306b\u5206\u3051\u308b\u3053\u3068\u3067\u3001\u30e6\u30fc\u30b6\u30fc\u3092\u7dad\u6301\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["Using ",(0,i.jsx)(n.a,{href:"https://playcanv.as/p/tRUfwVg1/",children:"Virtual Voodoo"})," as an example, we can show the 'typical' sequence that most applications will use for browser experiences."]}),"\n",(0,i.jsx)(n.p,{children:"\u30b2\u30fc\u30e0\u306b\u306f3\u3064\u306e\u30d5\u30a7\u30fc\u30ba\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u30ed\u30fc\u30c0\u30fc"}),"\n",(0,i.jsx)(n.li,{children:"\u30bf\u30a4\u30c8\u30eb\u30b9\u30af\u30ea\u30fc\u30f3\u3068\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u30ab\u30b9\u30bf\u30de\u30a4\u30ba"}),"\n",(0,i.jsx)(n.li,{children:"\u30e1\u30a4\u30f3\u30b2\u30fc\u30e0"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"/images/user-manual/optimization/loading/virtual-voodoo-phases.jpg",alt:"Virtual Voodoo Phases"})}),"\n",(0,i.jsx)(n.p,{children:"\u30ed\u30fc\u30c0\u30fc\u30d5\u30a7\u30fc\u30ba\u306f\u3001\u6700\u521d\u306e PlayCanvas \u30b7\u30fc\u30f3\u3067\u3042\u308b\u30bf\u30a4\u30c8\u30eb\u30b9\u30af\u30ea\u30fc\u30f3\u3068\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u306b\u5fc5\u8981\u306a\u30a2\u30bb\u30c3\u30c8\u3092\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002\u3053\u308c\u306b\u306f\u3001UI\u3001\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u30e2\u30c7\u30eb\u3001\u30a2\u30bb\u30c3\u30c8\u306a\u3069\u304c\u542b\u307e\u308c\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u30bf\u30a4\u30c8\u30eb\u30b9\u30af\u30ea\u30fc\u30f3\u304c\u30a2\u30af\u30c6\u30a3\u30d6\u306b\u306a\u308b\u3068\u3001\u30e1\u30a4\u30f3\u30b2\u30fc\u30e0\u306b\u5fc5\u8981\u306a\u30a2\u30bb\u30c3\u30c8\u3092\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u3067\u30ed\u30fc\u30c9\u3057\u59cb\u3081\u307e\u3059\u3002\u30bf\u30a4\u30c8\u30eb\u30b9\u30af\u30ea\u30fc\u30f3\u306b\u79fb\u884c\u3057\u3001\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3068\u306e\u3084\u308a\u53d6\u308a\u304c\u53ef\u80fd\u306a\u5834\u5408\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u30b9\u30bf\u30fc\u30c8\u30dc\u30bf\u30f3\u3092\u62bc\u3059\u307e\u3067\u306b\u30e1\u30a4\u30f3\u30b2\u30fc\u30e0\u306e\u30a2\u30bb\u30c3\u30c8\u304c\u3059\u3067\u306b\u8aad\u307f\u8fbc\u307e\u308c\u3066\u3044\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u305f\u3060\u3057\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u30a2\u30bb\u30c3\u30c8\u306e\u30ed\u30fc\u30c9\u304c\u5b8c\u4e86\u3059\u308b\u524d\u306b\u958b\u59cb\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u305f\u5834\u5408\u306f\u3001\u30dc\u30bf\u30f3\u306b\u9032\u884c\u72b6\u6cc1\u30d0\u30fc\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u30d0\u30fc\u304c100%\u306b\u9054\u3059\u308b\u3068\u3001\u30b2\u30fc\u30e0\u306f\u81ea\u52d5\u7684\u306b\u30e1\u30a4\u30f3\u30b2\u30fc\u30e0\u306b\u79fb\u884c\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"/images/user-manual/optimization/loading/virtual-voodoo-assets-not-ready.gif",alt:"Virtual Voodoo Assets Not Ready"})}),"\n",(0,i.jsx)(n.p,{children:"\u30a2\u30bb\u30c3\u30c8\u3092\u6bb5\u968e\u7684\u306b\u30ed\u30fc\u30c9\u3057\u3001\u5b9a\u671f\u7684\u306b\u30e6\u30fc\u30b6\u30fc\u304c\u65b0\u3057\u3044\u3082\u306e\u3068\u3084\u308a\u3068\u308a\u304a\u3088\u3073/\u307e\u305f\u306f\u898b\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u3067\u3001\u30ed\u30fc\u30c9\u6642\u9593\u304c\u9577\u3044\u5834\u5408\u3067\u3082\u3001\u30e6\u30fc\u30b6\u30fc\u306f\u53c2\u52a0\u3057\u7d9a\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u8ffd\u52a0\u306e\u6539\u5584",children:"\u8ffd\u52a0\u306e\u6539\u5584"}),"\n",(0,i.jsx)(n.p,{children:"\u4e00\u90e8\u306e\u958b\u767a\u8005\u306f\u3001\u30d7\u30ea\u30ed\u30fc\u30c0\u30fc\u30d5\u30a7\u30fc\u30ba\u3092\u6700\u5c0f\u9650\u306b\u6291\u3048\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u95a2\u9023\u3059\u308b\u30a2\u30bb\u30c3\u30c8\u3084\u30c6\u30ad\u30b9\u30c8\u3092\u57cb\u3081\u8fbc\u3093\u3067\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5185\u306e\u30ed\u30fc\u30c7\u30a3\u30f3\u30b0\u753b\u9762\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30e6\u30fc\u30b6\u30fc\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u76f4\u63a5\u95a2\u9023\u3059\u308b\u3082\u306e\u3092\u898b\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u305f\u3081\u3001\u53c2\u52a0\u611f\u304c\u9ad8\u307e\u308a\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u30b2\u30fc\u30e0\u304c\u8a31\u3059\u5834\u5408\u306f\u3001\u3088\u308a\u8a73\u7d30\u306a\u30a2\u30bb\u30c3\u30c8\u304c\u30ed\u30fc\u30c9\u3055\u308c\u308b\u307e\u3067\u306e\u9593\u3001\u4e00\u822c\u7684\u306a\u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0\u30fc\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u3084\u308a\u53d6\u308a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4ee5\u4e0b\u306f\u3001\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u306e\u8f2a\u90ed\u7dda\u3092\u5b8c\u5168\u306b\u8aad\u307f\u8fbc\u3080\u307e\u3067\u306e\u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0\u30fc\u3068\u3057\u3066\u3001\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u306e\u30b7\u30eb\u30a8\u30c3\u30c8\u3092\u4f7f\u7528\u3059\u308b\u4f8b\u3067\u3059\u3002\u30b7\u30eb\u30a8\u30c3\u30c8\u306e\u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0\u30fc\u306f\u30d5\u30a1\u30a4\u30eb\u30b5\u30a4\u30ba\u304c\u5c0f\u3055\u3044\u305f\u3081\u3001\u30d7\u30ea\u30ed\u30fc\u30c9\u30b7\u30fc\u30b1\u30f3\u30b9\u306e\u4e00\u90e8\u3068\u3057\u3066\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5185\u306e\u4ed6\u306e\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u3067\u3082\u518d\u5229\u7528\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"/images/user-manual/optimization/loading/character-load.gif",alt:"Lazy Load Character"})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>o});var i=a(67294);const t={},s=i.createContext(t);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);