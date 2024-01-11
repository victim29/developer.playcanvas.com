"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[9065],{1696:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var r=t(85893),n=t(11151);const l={title:"\u30af\u30e9\u30c3\u30b7\u30e5\u30b3\u30fc\u30b9 - \u30b2\u30fc\u30e0\u4f5c\u6210\u5165\u9580",layout:"tutorial-page.hbs",tags:["games","basics","physics","ui"],thumb:"/images/tutorials/crash-course/crash-course-thumbnail.jpg"},c=void 0,a={id:"tutorials/crash-course",title:"\u30af\u30e9\u30c3\u30b7\u30e5\u30b3\u30fc\u30b9 - \u30b2\u30fc\u30e0\u4f5c\u6210\u5165\u9580",description:"Phase 3 of this tutorial is still incomplete",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/crash-course.md",sourceDirName:"tutorials",slug:"/tutorials/crash-course",permalink:"/developer.playcanvas.com/ja/tutorials/crash-course",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/crash-course.md",tags:[{label:"games",permalink:"/developer.playcanvas.com/ja/tags/games"},{label:"basics",permalink:"/developer.playcanvas.com/ja/tags/basics"},{label:"physics",permalink:"/developer.playcanvas.com/ja/tags/physics"},{label:"ui",permalink:"/developer.playcanvas.com/ja/tags/ui"}],version:"current",frontMatter:{title:"\u30af\u30e9\u30c3\u30b7\u30e5\u30b3\u30fc\u30b9 - \u30b2\u30fc\u30e0\u4f5c\u6210\u5165\u9580",layout:"tutorial-page.hbs",tags:["games","basics","physics","ui"],thumb:"/images/tutorials/crash-course/crash-course-thumbnail.jpg"},sidebar:"tutorialsSidebar",previous:{title:"\u30e9\u30a4\u30c8\u306e\u5236\u5fa1\u65b9\u6cd5",permalink:"/developer.playcanvas.com/ja/tutorials/controlling-lights"},next:{title:"Create QR Code at runtime",permalink:"/developer.playcanvas.com/ja/tutorials/create-qr-code-at-runtime"}},i={},d=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7",id:"\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7",level:2},{value:"\u30ea\u30f3\u30af\u3068\u30ea\u30bd\u30fc\u30b9",id:"\u30ea\u30f3\u30af\u3068\u30ea\u30bd\u30fc\u30b9",level:2}];function o(e){const s={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("iframe",{src:"https://www.youtube.com/embed/9zqHlbW9XWE",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,r.jsx)("div",{class:"alert alert-info",children:"Phase 3 of this tutorial is still incomplete"}),"\n",(0,r.jsx)(s.h2,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,r.jsx)(s.p,{children:"In this tutorial, we will give an introduction to PlayCanvas and take you through making a complete game, end to end with PlayCanvas."}),"\n",(0,r.jsxs)(s.p,{children:["This was recorded for ",(0,r.jsx)(s.a,{href:"https://jsgamedev.com/",children:"JS GameDev Summit"})," and the video is hosted on ",(0,r.jsx)(s.a,{href:"https://portal.gitnation.org/contents/playcanvas-end-to-end-the-quick-version",children:"GitNation"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"Play below! Try to get as many food items as you can before the timer runs out! Use WASD for movement."}),"\n",(0,r.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/p/dCoHvsRY/",title:"Food Run - Full Project"}),"\n",(0,r.jsx)(s.h2,{id:"\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7",children:"\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"\u6642\u9593"}),(0,r.jsx)(s.th,{children:"\u8aac\u660e"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"0:00:00"})}),(0,r.jsx)(s.td,{children:"\u30a4\u30f3\u30c8\u30ed\u30c0\u30af\u30b7\u30e7\u30f3"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"0:04:44"})}),(0,r.jsx)(s.td,{children:"PlayCanvas\u306b\u3064\u3044\u3066"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"0:12:52"})}),(0,r.jsx)(s.td,{children:"\u4f55\u304b\u3092\u4f5c\u308a\u307e\u3057\u3087\u3046!"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"0:14:50"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"\u30d5\u30a7\u30fc\u30ba1-\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"0:15:08"})}),(0,r.jsx)(s.td,{children:"\u30a2\u30bb\u30c3\u30c8\u306e\u4f5c\u6210\u3068\u7ba1\u7406"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"0:28:53"})}),(0,r.jsx)(s.td,{children:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u4f5c\u6210\u3068\u4f7f\u7528"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"0:43:53"})}),(0,r.jsx)(s.td,{children:"\u30ed\u30fc\u30f3\u30c1\u30bf\u30d6\u3067\u306e\u30c6\u30b9\u30c8"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"0:46:04"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"\u30d5\u30a7\u30fc\u30ba2-\u30a4\u30f3\u30bf\u30e9\u30af\u30c6\u30a3\u30d6"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"0:47:24"})}),(0,r.jsx)(s.td,{children:"Collision\u3068RigidBody\u306e\u4f7f\u7528"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"1:01:05"})}),(0,r.jsx)(s.td,{children:"\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u4f5c\u6210\u3068\u4f7f\u7528"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"1:18:11"})}),(0,r.jsx)(s.td,{children:"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30b9\u30c6\u30fc\u30c8\u30b0\u30e9\u30d5\u306e\u4f5c\u6210"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"1:30:12"})}),(0,r.jsx)(s.td,{children:"\u30a4\u30d9\u30f3\u30c8\u306e\u30a2\u30bf\u30c3\u30c1\u3001\u30c7\u30bf\u30c3\u30c1\u3001\u304a\u3088\u3073\u767a\u751f"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"1:45:10"})}),(0,r.jsx)(s.td,{children:"\u30b3\u30fc\u30c9\u306e\u30c7\u30d0\u30c3\u30b0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"1:47:56"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.strong,{children:"\u30d5\u30a7\u30fc\u30ba3-\u78e8\u304d&\u30d1\u30d6\u30ea\u30c3\u30b7\u30f3\u30b0"}),"(\u4e0d\u5b8c\u5168)"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"2:00:57"})}),(0,r.jsx)(s.td,{children:"\u7d42\u4e86"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"\u30ea\u30f3\u30af\u3068\u30ea\u30bd\u30fc\u30b9",children:"\u30ea\u30f3\u30af\u3068\u30ea\u30bd\u30fc\u30b9"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/downloads/playcanvas-crash-course-make-a-game.pdf",children:"\u30d7\u30ec\u30bc\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3\u30b9\u30e9\u30a4\u30c9PDF"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://playcanvas.com/project/898163/overview/food-run--full-project",children:"Food Run - \u5b8c\u5168\u306aPlayCanvas\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://playcanvas.com/project/910590/overview/food-run-starter-kit",children:"Food Run - \u30b9\u30bf\u30fc\u30bf\u30fc\u30d5\u30a7\u30fc\u30ba1 PlayCanvas\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://playcanvas.com/project/910606/overview/food-run--phase-2",children:"Food Run - \u30b9\u30bf\u30fc\u30bf\u30fc\u30d5\u30a7\u30fc\u30ba2 PlayCanvas\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://playcanvas.com/project/910630/overview/food-run--phase-3",children:"Food Run - \u30b9\u30bf\u30fc\u30bf\u30fc\u30d5\u30a7\u30fc\u30ba3 PlayCanvas\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>a,a:()=>c});var r=t(67294);const n={},l=r.createContext(n);function c(e){const s=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(l.Provider,{value:s},e.children)}}}]);