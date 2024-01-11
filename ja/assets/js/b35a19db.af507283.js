"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[7481],{19661:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var l=i(85893),n=i(11151);const a={title:"\u30ab\u30e1\u30e9\u306e\u57fa\u672c\u64cd\u4f5c",layout:"tutorial-page.hbs",sidebar_position:3,tags:["camera","basics"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/186/KM6GIE-image-75.jpg"},c=void 0,s={id:"tutorials/basic-cameras",title:"\u30ab\u30e1\u30e9\u306e\u57fa\u672c\u64cd\u4f5c",description:"\u30ab\u30e1\u30e9\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/basic-cameras.md",sourceDirName:"tutorials",slug:"/tutorials/basic-cameras",permalink:"/developer.playcanvas.com/ja/tutorials/basic-cameras",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/basic-cameras.md",tags:[{label:"camera",permalink:"/developer.playcanvas.com/ja/tags/camera"},{label:"basics",permalink:"/developer.playcanvas.com/ja/tags/basics"}],version:"current",sidebarPosition:3,frontMatter:{title:"\u30ab\u30e1\u30e9\u306e\u57fa\u672c\u64cd\u4f5c",layout:"tutorial-page.hbs",sidebar_position:3,tags:["camera","basics"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/186/KM6GIE-image-75.jpg"},sidebar:"tutorialsSidebar",next:{title:"360 lookaround camera",permalink:"/developer.playcanvas.com/ja/tutorials/360-lookaround-camera"}},o={},d=[{value:"\u30ab\u30e1\u30e9\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3",id:"\u30ab\u30e1\u30e9\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3",level:2},{value:"\u30ab\u30e1\u30e9\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u4f5c\u6210",id:"\u30ab\u30e1\u30e9\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u4f5c\u6210",level:2},{value:"\u30ab\u30e1\u30e9\u30fb\u30d7\u30ed\u30d1\u30c6\u30a3",id:"\u30ab\u30e1\u30e9\u30d7\u30ed\u30d1\u30c6\u30a3",level:2},{value:"<code>Enabled</code>\uff08\u6709\u52b9\u5316\uff09",id:"enabled\u6709\u52b9\u5316",level:3},{value:"<code>Clear Color Buffer</code>\uff08\u30af\u30ea\u30a2\u30ab\u30e9\u30fc\u30d0\u30c3\u30d5\u30a1\uff09",id:"clear-color-buffer\u30af\u30ea\u30a2\u30ab\u30e9\u30fc\u30d0\u30c3\u30d5\u30a1",level:3},{value:"<code>\u30af\u30ea\u30a2\u30ab\u30e9\u30fc</code>\uff08Clear Color\uff09",id:"\u30af\u30ea\u30a2\u30ab\u30e9\u30fcclear-color",level:3},{value:"<code>Clear Depth Buffer</code>\uff08\u30c7\u30d7\u30b9\u30d0\u30c3\u30d5\u30a1\u306e\u30af\u30ea\u30a2\uff09",id:"clear-depth-buffer\u30c7\u30d7\u30b9\u30d0\u30c3\u30d5\u30a1\u306e\u30af\u30ea\u30a2",level:3},{value:"<code>Projection</code>\uff08\u30d7\u30ed\u30b8\u30a7\u30af\u30b7\u30e7\u30f3\uff09",id:"projection\u30d7\u30ed\u30b8\u30a7\u30af\u30b7\u30e7\u30f3",level:3},{value:"<code>Field of View</code>\uff08\u8996\u91ce\u89d2\u5ea6\uff09",id:"field-of-view\u8996\u91ce\u89d2\u5ea6",level:3},{value:"<code>Near Clip</code>\uff08\u30cb\u30a2\u30af\u30ea\u30c3\u30d7\uff09",id:"near-clip\u30cb\u30a2\u30af\u30ea\u30c3\u30d7",level:3},{value:"<code>Far Clip</code>\uff08\u30d5\u30a1\u30fc\u30af\u30ea\u30c3\u30d7\uff09",id:"far-clip\u30d5\u30a1\u30fc\u30af\u30ea\u30c3\u30d7",level:3},{value:"<code>Priority</code>\uff08\u30d7\u30e9\u30a4\u30aa\u30ea\u30c6\u30a3\uff09",id:"priority\u30d7\u30e9\u30a4\u30aa\u30ea\u30c6\u30a3",level:3},{value:"<code>Viewport</code>\uff08\u30d3\u30e5\u30fc\u30dd\u30fc\u30c8\uff09",id:"viewport\u30d3\u30e5\u30fc\u30dd\u30fc\u30c8",level:3}];function t(e){const r={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.h2,{id:"\u30ab\u30e1\u30e9\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3",children:"\u30ab\u30e1\u30e9\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3"}),"\n",(0,l.jsx)(r.p,{children:"PlayCanvas\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u4f5c\u6210\u3055\u308c\u305f\u30b7\u30fc\u30f3\u3092\u898b\u308b\u305f\u3081\u306b\u306f\u3001\u30ab\u30e1\u30e9\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u4f7f\u3063\u3066\u30b7\u30fc\u30f3\u306b\u30ec\u30f3\u30c0\u30fc\u3057\u307e\u3059\u3002"}),"\n",(0,l.jsx)(r.p,{children:"PlayCanvas\u30a8\u30c7\u30a3\u30bf\u30fc\u304b\u3089\u30b7\u30fc\u30f3\u3092\u5b9f\u884c\u3059\u308b\u306b\u306f\u3001\u6700\u4f4e\u3067\u3082\u4e00\u3064\u306e\u30a2\u30af\u30c6\u30a3\u30d6\u306a\u30ab\u30e1\u30e9\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u30b7\u30fc\u30f3\u306b\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,l.jsx)(r.h2,{id:"\u30ab\u30e1\u30e9\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u4f5c\u6210",children:"\u30ab\u30e1\u30e9\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u4f5c\u6210"}),"\n",(0,l.jsxs)(r.p,{children:["\u65b0\u3057\u3044\u30ab\u30e1\u30e9\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306b\u30ab\u30e1\u30e9 ",(0,l.jsx)(r.a,{href:"/user-manual/glossary#component",children:"Component"})," \u3092\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:"Entity Explorer\u3067\u30b7\u30fc\u30f3\u306e\u30eb\u30fc\u30c8\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u9078\u629e"}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.em,{children:"Entity"}),"\u30e1\u30cb\u30e5\u30fc\u304b\u3089",(0,l.jsx)(r.em,{children:"New Entity"}),"\u3092\u9078\u629e\u3057\u3066\u65b0\u3057\u3044\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u4f5c\u6210"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.em,{children:"Component"}),"\u30e1\u30cb\u30e5\u30fc\u304b\u3089",(0,l.jsx)(r.em,{children:"New Component"}),"\u3092\u9078\u629e\u3057\u3066\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u8ffd\u52a0"]}),"\n",(0,l.jsxs)(r.li,{children:["\u4f5c\u6210\u3059\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u30bf\u30a4\u30d7\u3092\u9078\u3076\u969b\u3001",(0,l.jsx)(r.em,{children:"Camera"}),"\u3092\u9078\u629e"]}),"\n"]}),"\n",(0,l.jsxs)(r.p,{children:["\u30ab\u30e1\u30e9\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u4f5c\u6210\u306f\u4e00\u822c\u7684\u306a\u64cd\u4f5c\u306a\u306e\u3067\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8\u304c\u5b58\u5728\u3057\u307e\u3059\uff1a",(0,l.jsx)(r.em,{children:"Entity"}),"\u30e1\u30cb\u30e5\u30fc\u306e",(0,l.jsx)(r.em,{children:"New Entity"})," -> ",(0,l.jsx)(r.em,{children:"New Camera"}),"\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\u3053\u308c\u3067\u65b0\u3057\u3044\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u304c\u4f5c\u6210\u3055\u308c\u3066\u30ab\u30e1\u30e9\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,l.jsx)(r.h2,{id:"\u30ab\u30e1\u30e9\u30d7\u30ed\u30d1\u30c6\u30a3",children:"\u30ab\u30e1\u30e9\u30fb\u30d7\u30ed\u30d1\u30c6\u30a3"}),"\n",(0,l.jsx)(r.p,{children:"Camera\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3082\u3001\u4ed6\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3068\u540c\u69d8\u306b\u3001\u305d\u306e\u52d5\u4f5c\u3092\u5909\u66f4\u3059\u308b\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u30bb\u30c3\u30c8\u3092\u6301\u3063\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,l.jsxs)(r.h3,{id:"enabled\u6709\u52b9\u5316",children:[(0,l.jsx)(r.code,{children:"Enabled"}),"\uff08\u6709\u52b9\u5316\uff09"]}),"\n",(0,l.jsx)(r.p,{children:"enabled\u30d7\u30ed\u30d1\u30c6\u30a3\u304ctrue\u306e\u5834\u5408\u3001\u30b7\u30fc\u30f3\u306e\u30ed\u30fc\u30c9\u6642\u306b\u30ab\u30e1\u30e9\u306f\u30b7\u30fc\u30f3\u3092\u81ea\u8eab\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u30d0\u30c3\u30d5\u30a1\u306b\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3057\u307e\u3059\u3002\u8907\u6570\u306e\u30ab\u30e1\u30e9\u3092\u540c\u6642\u306b\u6709\u52b9\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u30b9\u30d7\u30ea\u30c3\u30c8\u30b9\u30af\u30ea\u30fc\u30f3\u306e\u30b2\u30fc\u30e0\u3084\u30df\u30cb\u30de\u30c3\u30d7\u306a\u3069\u306e\u5b9f\u88c5\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002priority\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001\u6709\u52b9\u306a\u30ab\u30e1\u30e9\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u9806\u5e8f\u3092\u6c7a\u5b9a\u3057\u307e\u3059\u3002"}),"\n",(0,l.jsxs)(r.h3,{id:"clear-color-buffer\u30af\u30ea\u30a2\u30ab\u30e9\u30fc\u30d0\u30c3\u30d5\u30a1",children:[(0,l.jsx)(r.code,{children:"Clear Color Buffer"}),"\uff08\u30af\u30ea\u30a2\u30ab\u30e9\u30fc\u30d0\u30c3\u30d5\u30a1\uff09"]}),"\n",(0,l.jsx)(r.p,{children:"\u3053\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u30c1\u30a7\u30c3\u30af\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u30b7\u30fc\u30f3\u3092\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308b\u524d\u306b\u3001\u30ab\u30e1\u30e9\u306f\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\uff08\u524d\u56de\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u305f\u30d5\u30ec\u30fc\u30e0\uff09\u306b\u3042\u3063\u305f\u5185\u5bb9\u3092\u6d88\u53bb\u3057\u3001\u30af\u30ea\u30a2\u30ab\u30e9\u30fc\u3067\u57cb\u3081\u307e\u3059\u3002"}),"\n",(0,l.jsxs)(r.h3,{id:"\u30af\u30ea\u30a2\u30ab\u30e9\u30fcclear-color",children:[(0,l.jsx)(r.code,{children:"\u30af\u30ea\u30a2\u30ab\u30e9\u30fc"}),"\uff08Clear Color\uff09"]}),"\n",(0,l.jsx)(r.p,{children:"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u304c\u30af\u30ea\u30a2\u3055\u308c\u308b\u969b\u306e\u30ab\u30e9\u30fc\u306f\u3001Clear Color Buffer\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u30c1\u30a7\u30c3\u30af\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306b\u9069\u7528\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,l.jsxs)(r.h3,{id:"clear-depth-buffer\u30c7\u30d7\u30b9\u30d0\u30c3\u30d5\u30a1\u306e\u30af\u30ea\u30a2",children:[(0,l.jsx)(r.code,{children:"Clear Depth Buffer"}),"\uff08\u30c7\u30d7\u30b9\u30d0\u30c3\u30d5\u30a1\u306e\u30af\u30ea\u30a2\uff09"]}),"\n",(0,l.jsx)(r.p,{children:"\u3053\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u30c1\u30a7\u30c3\u30af\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u30b7\u30fc\u30f3\u3092\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308b\u524d\u306b\u3001\u30ab\u30e1\u30e9\u306f\u30ab\u30e1\u30e9\u306eDepth\u30d0\u30c3\u30d5\u30a1\u306b\u4ee5\u524d\u306b\u4fdd\u5b58\u3055\u308c\u3066\u3044\u305f\u5185\u5bb9\u3092\u6d88\u53bb\u3057\u307e\u3059\u3002\u901a\u5e38\u3001\u3053\u308c\u306f\u30c1\u30a7\u30c3\u30af\u3057\u305f\u307e\u307e\u306b\u3057\u3066\u304a\u304f\u3079\u304d\u3067\u3059\u304c\u3001\u30b7\u30fc\u30f3\u3092\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308b\u969b\u306b\u6df1\u5ea6\u9806\u5e8f\u3092\u6c17\u306b\u3057\u306a\u3044\u5834\u5408\u306a\u3069\u3001\u4e00\u90e8\u306e\u72b6\u6cc1\u3067\u306f\u7121\u52b9\u306b\u3059\u308b\u3053\u3068\u304c\u6700\u9069\u5316\u306b\u306a\u308b\u3053\u3068\u3082\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,l.jsxs)(r.h3,{id:"projection\u30d7\u30ed\u30b8\u30a7\u30af\u30b7\u30e7\u30f3",children:[(0,l.jsx)(r.code,{children:"Projection"}),"\uff08\u30d7\u30ed\u30b8\u30a7\u30af\u30b7\u30e7\u30f3\uff09"]}),"\n",(0,l.jsx)(r.p,{children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30b7\u30e7\u30f3\u30bf\u30a4\u30d7\u306f\u30013D\u30b7\u30fc\u30f3\u30922D\u306e\u8868\u793a\u306b\u5909\u63db\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u308b\u884c\u5217\u30d7\u30ed\u30b8\u30a7\u30af\u30b7\u30e7\u30f3\u306e\u30bf\u30a4\u30d7\u3092\u6c7a\u5b9a\u3057\u307e\u3059\u3002"}),"\n",(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.strong,{children:"perspective(\u900f\u8996\u6295\u5f71)"})," \u30d7\u30ed\u30b8\u30a7\u30af\u30b7\u30e7\u30f3\u306f\u30b2\u30fc\u30e0\u3067\u4f7f\u7528\u3055\u308c\u308b\u6700\u3082\u4e00\u822c\u7684\u306a\u30d7\u30ed\u30b8\u30a7\u30af\u30b7\u30e7\u30f3\u3067\u3059\u3002\u4ee3\u308f\u308a\u306b\u3001**orthographic(\u76f4\u4ea4\u6295\u5f71)**\u30d7\u30ed\u30b8\u30a7\u30af\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u9060\u8fd1\u611f\u7121\u3057\u3067\u30b7\u30fc\u30f3\u3092\u30ec\u30f3\u30c0\u30fc\u3059\u308b\u306e\u3067\u30012D\u30b2\u30fc\u30e0\u306b\u9069\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,l.jsxs)(r.h3,{id:"field-of-view\u8996\u91ce\u89d2\u5ea6",children:[(0,l.jsx)(r.code,{children:"Field of View"}),"\uff08\u8996\u91ce\u89d2\u5ea6\uff09"]}),"\n",(0,l.jsx)(r.p,{children:"\u30ab\u30e1\u30e9\u306e\u8996\u91ce\u89d2\uff08Field of View\uff09\u306f\u3001\u30ab\u30e1\u30e9\u304c\u8868\u793a\u3059\u308b\u30b7\u30fc\u30f3\u306e\u7bc4\u56f2\u3092\u6c7a\u5b9a\u3057\u307e\u3059\u3002\u8996\u91ce\u89d2\u306f\u5ea6\uff08\xb0\uff09\u3067\u8868\u3055\u308c\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u306e45\xb0\u306f\u3001\u30d3\u30e5\u30fc\u306e\u4e0a\u7aef\u304b\u3089\u4e0b\u7aef\u307e\u3067\u306e\u9593\u304c\u30ab\u30e1\u30e9\u306e\u4f4d\u7f6e\u304b\u308945\xb0\u306e\u5f27\u3092\u5f62\u6210\u3059\u308b\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002"}),"\n",(0,l.jsx)(r.p,{children:(0,l.jsx)(r.img,{src:"/images/platform/field_of_view.png",alt:"Field of view"})}),"\n",(0,l.jsxs)(r.p,{children:["\u3053\u306e\u56f3\u3067\u306f\u3001",(0,l.jsx)(r.code,{children:"fov"}),"\u306e\u5024\u304c\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306e\u5e45\u3068\u306f\u72ec\u7acb\u3057\u3066\u3044\u308b\u305f\u3081\u3001\u30ef\u30a4\u30c9\u30b9\u30af\u30ea\u30fc\u30f3\u306e\u30d3\u30e5\u30fc\uff08\u30e9\u30a4\u30c8\u30d6\u30eb\u30fc\uff09\u306f\u7e26\u65b9\u5411\u306b\u306f\u540c\u3058\u91cf\u3092\u8868\u793a\u3057\u307e\u3059\u304c\u3001\u6a2a\u65b9\u5411\u306b\u306f\u72ed\u3044\u30b9\u30af\u30ea\u30fc\u30f3\u306e\u30d3\u30e5\u30fc\uff08\u30c0\u30fc\u30af\u30d6\u30eb\u30fc\uff09\u3088\u308a\u3082\u591a\u304f\u3092\u8868\u793a\u3057\u307e\u3059\u3002"]}),"\n",(0,l.jsxs)(r.h3,{id:"near-clip\u30cb\u30a2\u30af\u30ea\u30c3\u30d7",children:[(0,l.jsx)(r.code,{children:"Near Clip"}),"\uff08\u30cb\u30a2\u30af\u30ea\u30c3\u30d7\uff09"]}),"\n",(0,l.jsx)(r.p,{children:"\u30cb\u30a2\u30af\u30ea\u30c3\u30d7\u8ddd\u96e2\uff08Near Clipping Distance\uff09\u306f\u3001\u30ab\u30e1\u30e9\u304b\u3089\u306e\u8ddd\u96e2\uff08\u30e1\u30fc\u30c8\u30eb\uff09\u3067\u3001\u3053\u306e\u8ddd\u96e2\u4ee5\u524d\u306e\u7269\u4f53\u306f\u63cf\u753b\u3055\u308c\u307e\u305b\u3093\u3002"}),"\n",(0,l.jsxs)(r.h3,{id:"far-clip\u30d5\u30a1\u30fc\u30af\u30ea\u30c3\u30d7",children:[(0,l.jsx)(r.code,{children:"Far Clip"}),"\uff08\u30d5\u30a1\u30fc\u30af\u30ea\u30c3\u30d7\uff09"]}),"\n",(0,l.jsx)(r.p,{children:"\u30d5\u30a1\u30fc\u30af\u30ea\u30c3\u30d7\u8ddd\u96e2\uff08Far Clipping Distance\uff09\u306f\u3001\u30ab\u30e1\u30e9\u304b\u3089\u306e\u8ddd\u96e2\uff08\u30e1\u30fc\u30c8\u30eb\uff09\u3067\u3001\u3053\u306e\u8ddd\u96e2\u4ee5\u964d\u306e\u7269\u4f53\u306f\u63cf\u753b\u3055\u308c\u307e\u305b\u3093\u3002"}),"\n",(0,l.jsxs)(r.h3,{id:"priority\u30d7\u30e9\u30a4\u30aa\u30ea\u30c6\u30a3",children:[(0,l.jsx)(r.code,{children:"Priority"}),"\uff08\u30d7\u30e9\u30a4\u30aa\u30ea\u30c6\u30a3\uff09"]}),"\n",(0,l.jsx)(r.p,{children:"\u3053\u306e\u5024\u306f\u3001\u8907\u6570\u306e\u30ab\u30e1\u30e9\u304c\u6709\u52b9\u306b\u306a\u3063\u3066\u3044\u308b\u5834\u5408\u306b\u3001\u30ab\u30e1\u30e9\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u9806\u5e8f\u3092\u6c7a\u5b9a\u3059\u308b\u305f\u3081\u306e\u6570\u5024\u3067\u3059\u3002\u6570\u5024\u304c\u5c0f\u3055\u3044\u307b\u3069\u512a\u5148\u5ea6\u304c\u9ad8\u304f\u3001\u6700\u521d\u306b\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,l.jsxs)(r.h3,{id:"viewport\u30d3\u30e5\u30fc\u30dd\u30fc\u30c8",children:[(0,l.jsx)(r.code,{children:"Viewport"}),"\uff08\u30d3\u30e5\u30fc\u30dd\u30fc\u30c8\uff09"]}),"\n",(0,l.jsx)(r.p,{children:"\u30d3\u30e5\u30fc\u30dd\u30fc\u30c8\u306f\u3001\u30ab\u30e1\u30e9\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u30d0\u30c3\u30d5\u30a1\u4e0a\u306e\u77e9\u5f62\u9818\u57df\u3092\u8868\u3057\u307e\u3059\u3002\u4ee5\u4e0b\u306e\u5f62\u5f0f\u30674\u3064\u306e\u5024\u304c\u3042\u308a\u307e\u3059\uff1a\u5de6\u4e0b\u306eX\u5ea7\u6a19\u3001\u5de6\u4e0b\u306eY\u5ea7\u6a19\u3001\u5e45\u3001\u9ad8\u3055\u3002\u3053\u308c\u3089\u306e\u5024\u306f\u6b63\u898f\u5316\u3055\u308c\u305f\u5ea7\u6a19\u3067\u3042\u308a\u3001\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u30d0\u30c3\u30d5\u30a1\u306f\u3001\u5bf8\u6cd5\u306b\u95a2\u4fc2\u306a\u304f\u3001X\u3068Y\u306e\u7bc4\u56f2\u304c0\u304b\u30891\u306b\u30de\u30c3\u30d4\u30f3\u30b0\u3055\u308c\u3066\u3044\u308b\u3068\u8003\u3048\u3089\u308c\u307e\u3059\u3002\u3057\u305f\u304c\u3063\u3066\u3001\u30ab\u30e1\u30e9\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u753b\u9762\u306e\u5de6\u4e0b\u306e\u56db\u5206\u5186\u306b\u5236\u9650\u3059\u308b\u306b\u306f\u3001\u30d3\u30e5\u30fc\u30dd\u30fc\u30c8\u30920\u30010\u30010.5\u30010.5\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"})]})}function p(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(t,{...e})}):t(e)}},11151:(e,r,i)=>{i.d(r,{Z:()=>s,a:()=>c});var l=i(67294);const n={},a=l.createContext(n);function c(e){const r=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),l.createElement(a.Provider,{value:r},e.children)}}}]);