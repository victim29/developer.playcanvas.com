"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[6557],{75617:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>j,frontMatter:()=>d,metadata:()=>t,toc:()=>h});var r=i(85893),s=i(11151);const d={title:"\u30b3\u30fc\u30c9\u30a8\u30c7\u30a3\u30bf\u30fc",layout:"usermanual-page.hbs",sidebar_position:2},l=void 0,t={id:"user-manual/scripting/code-editor",title:"\u30b3\u30fc\u30c9\u30a8\u30c7\u30a3\u30bf\u30fc",description:"\u30b3\u30fc\u30c9\u30a8\u30c7\u30a3\u30bf\u30fc\u306f\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u30a2\u30bb\u30c3\u30c8\u3084JSON\u3001HTML\u3001CSS\u306a\u3069\u306e\u30c6\u30ad\u30b9\u30c8\u30d9\u30fc\u30b9\u306e\u30a2\u30bb\u30c3\u30c8\u3092\u7de8\u96c6\u3067\u304d\u308b\u3001\u30aa\u30f3\u30e9\u30a4\u30f3\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30b3\u30e9\u30dc\u30ec\u30fc\u30b7\u30e7\u30f3\u30a8\u30c7\u30a3\u30bf\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/scripting/code-editor.md",sourceDirName:"user-manual/scripting",slug:"/user-manual/scripting/code-editor",permalink:"/developer.playcanvas.com/ja/user-manual/scripting/code-editor",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/scripting/code-editor.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u30b3\u30fc\u30c9\u30a8\u30c7\u30a3\u30bf\u30fc",layout:"usermanual-page.hbs",sidebar_position:2},sidebar:"userManualSidebar",previous:{title:"\u65b0\u3057\u3044\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u4f5c\u6210",permalink:"/developer.playcanvas.com/ja/user-manual/scripting/creating-new"},next:{title:"\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u69cb\u9020",permalink:"/developer.playcanvas.com/ja/user-manual/scripting/anatomy"}},c={},h=[{value:"\u30b3\u30fc\u30c9\u30a8\u30c7\u30a3\u30bf\u30fc\u306e\u958b\u304d\u65b9",id:"\u30b3\u30fc\u30c9\u30a8\u30c7\u30a3\u30bf\u30fc\u306e\u958b\u304d\u65b9",level:2},{value:"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9",id:"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9",level:2},{value:"\u30e1\u30cb\u30e5\u30fc",id:"\u30e1\u30cb\u30e5\u30fc",level:3},{value:"\u30d5\u30a1\u30a4\u30eb",id:"\u30d5\u30a1\u30a4\u30eb",level:3},{value:"\u30bf\u30d6",id:"\u30bf\u30d6",level:3},{value:"\u30c6\u30ad\u30b9\u30c8\u30a8\u30c7\u30a3\u30bf",id:"\u30c6\u30ad\u30b9\u30c8\u30a8\u30c7\u30a3\u30bf",level:3},{value:"\u30b3\u30e9\u30dc\u30ec\u30fc\u30bf",id:"\u30b3\u30e9\u30dc\u30ec\u30fc\u30bf",level:3},{value:"\u30b9\u30c6\u30fc\u30bf\u30b9\u30d0\u30fc",id:"\u30b9\u30c6\u30fc\u30bf\u30b9\u30d0\u30fc",level:3},{value:"\u4fdd\u5b58\u3068\u5143\u306b\u623b\u3059",id:"\u4fdd\u5b58\u3068\u5143\u306b\u623b\u3059",level:2},{value:"\u30b3\u30de\u30f3\u30c9\u30d1\u30ec\u30c3\u30c8",id:"\u30b3\u30de\u30f3\u30c9\u30d1\u30ec\u30c3\u30c8",level:2},{value:"\u30db\u30c3\u30c8\u30ad\u30fc",id:"\u30db\u30c3\u30c8\u30ad\u30fc",level:2},{value:"\u691c\u7d22",id:"\u691c\u7d22",level:2},{value:"\u30d5\u30a1\u30a4\u30eb\u5185\u3092\u691c\u7d22",id:"\u30d5\u30a1\u30a4\u30eb\u5185\u3092\u691c\u7d22",level:3},{value:"\u30af\u30a4\u30c3\u30af\u30aa\u30fc\u30d7\u30f3",id:"\u30af\u30a4\u30c3\u30af\u30aa\u30fc\u30d7\u30f3",level:2},{value:"Preferences",id:"preferences",level:2},{value:"\u8ffd\u52a0\u306e\u30d2\u30f3\u30c8",id:"\u8ffd\u52a0\u306e\u30d2\u30f3\u30c8",level:2},{value:"\u30af\u30a4\u30c3\u30af\u691c\u7d22",id:"\u30af\u30a4\u30c3\u30af\u691c\u7d22",level:3},{value:"\u8907\u6570\u9078\u629e\u7de8\u96c6",id:"\u8907\u6570\u9078\u629e\u7de8\u96c6",level:3},{value:"\u77e9\u5f62\u9078\u629e",id:"\u77e9\u5f62\u9078\u629e",level:3}];function a(e){const n={a:"a",h2:"h2",h3:"h3",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u30b3\u30fc\u30c9\u30a8\u30c7\u30a3\u30bf\u30fc\u306f\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u30a2\u30bb\u30c3\u30c8\u3084JSON\u3001HTML\u3001CSS\u306a\u3069\u306e\u30c6\u30ad\u30b9\u30c8\u30d9\u30fc\u30b9\u306e\u30a2\u30bb\u30c3\u30c8\u3092\u7de8\u96c6\u3067\u304d\u308b\u3001\u30aa\u30f3\u30e9\u30a4\u30f3\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30b3\u30e9\u30dc\u30ec\u30fc\u30b7\u30e7\u30f3\u30a8\u30c7\u30a3\u30bf\u3067\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u30b3\u30fc\u30c9\u30a8\u30c7\u30a3\u30bf\u30fc\u306e\u958b\u304d\u65b9",children:"\u30b3\u30fc\u30c9\u30a8\u30c7\u30a3\u30bf\u30fc\u306e\u958b\u304d\u65b9"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/user-manual/designer/",children:"PlayCanvas\u30a8\u30c7\u30a3\u30bf\u30fc"}),"\u5185\u3067Ctrl + I\u3092\u62bc\u3059\u3053\u3068\u3067\u3001\u30b3\u30fc\u30c9\u30a8\u30c7\u30a3\u30bf\u30fc\u3092\u958b\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u3001\u30c4\u30fc\u30eb\u30d0\u30fc\u30a2\u30a4\u30b3\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3053\u3068\u3067\u3082\u958b\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"/images/user-manual/scripting/code-editor-toolbar.png",alt:"Code Editor Toolbar"})}),"\n",(0,r.jsx)(n.p,{children:"\u30c6\u30ad\u30b9\u30c8\u30d9\u30fc\u30b9\u306e\u30a2\u30bb\u30c3\u30c8(\u30b9\u30af\u30ea\u30d7\u30c8\u306a\u3069)\u3092\u30c0\u30d6\u30eb\u30af\u30ea\u30c3\u30af\u3059\u308b\u3053\u3068\u3067\u3082\u3001\u305d\u306e\u30a2\u30bb\u30c3\u30c8\u306b\u7126\u70b9\u3092\u5f53\u3066\u305f\u30b3\u30fc\u30c9\u30a8\u30c7\u30a3\u30bf\u30fc\u3092\u958b\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9",children:"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"/images/user-manual/scripting/code-editor.png",alt:"Code Editor"})}),"\n",(0,r.jsx)(n.h3,{id:"\u30e1\u30cb\u30e5\u30fc",children:"\u30e1\u30cb\u30e5\u30fc"}),"\n",(0,r.jsx)(n.p,{children:"\u30e1\u30cb\u30e5\u30fc\u306b\u306f\u3001\u3059\u3079\u3066\u306e\u30c4\u30fc\u30eb\u3068\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\u305d\u308c\u305e\u308c\u306e\u30ad\u30fc\u30dc\u30fc\u30c9\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8\u3082\u8868\u793a\u3055\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u30d5\u30a1\u30a4\u30eb",children:"\u30d5\u30a1\u30a4\u30eb"}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u3053\u3067\u306f\u3001\u30b3\u30fc\u30c9\u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u7de8\u96c6\u53ef\u80fd\u306a\u3059\u3079\u3066\u306e\u30a2\u30bb\u30c3\u30c8\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u30a2\u30bb\u30c3\u30c8\u3092\u9078\u629e\u3059\u308b\u3053\u3068\u3067\u3001\u30c6\u30ad\u30b9\u30c8\u30a8\u30c7\u30a3\u30bf\u3067\u7de8\u96c6\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u30a2\u30bb\u30c3\u30c8\u3092\u5358\u4e00\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30d7\u30ec\u30d3\u30e5\u30fc\u30e2\u30fc\u30c9\u3067\u958b\u304b\u308c\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u4ed6\u306e\u30a2\u30bb\u30c3\u30c8\u3092\u958b\u3044\u305f\u5834\u5408\u3001\u540c\u3058\u30bf\u30d6\u306b\u8868\u793a\u3055\u308c\u308b\u3068\u3044\u3046\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002\u30a2\u30bb\u30c3\u30c8\u3092\u6c38\u4e45\u306b\u958b\u304d\u305f\u3044\u5834\u5408\u306f\u3001\u30c0\u30d6\u30eb\u30af\u30ea\u30c3\u30af\u3059\u308b\u304b\u7de8\u96c6\u3092\u958b\u59cb\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u30a2\u30bb\u30c3\u30c8\u3092\u53f3\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30e1\u30cb\u30e5\u30fc\u304c\u8868\u793a\u3055\u308c\u3001\u3055\u307e\u3056\u307e\u306a\u30a2\u30bb\u30c3\u30c8\u95a2\u9023\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u307e\u305f\u3001\u30a2\u30bb\u30c3\u30c8\u3092\u30d5\u30a9\u30eb\u30c0\u306b\u30c9\u30e9\u30c3\u30b0&\u30c9\u30ed\u30c3\u30d7\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u30bf\u30d6",children:"\u30bf\u30d6"}),"\n",(0,r.jsx)(n.p,{children:"\u5404\u958b\u3044\u3066\u3044\u308b\u30a2\u30bb\u30c3\u30c8\u306b\u306f\u3001\u5bfe\u5fdc\u3059\u308b\u30bf\u30d6\u304c\u3042\u308a\u307e\u3059\u3002\u30bf\u30d6\u3092\u30c9\u30e9\u30c3\u30b0\u3057\u3066\u4e26\u3079\u66ff\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u3001\u30bf\u30d6\u4e0a\u306b\u30de\u30a6\u30b9\u30ab\u30fc\u30bd\u30eb\u3092\u7f6e\u304f\u3068X\u30dc\u30bf\u30f3\u304c\u8868\u793a\u3055\u308c\u3001\u30bf\u30d6\u3092\u9589\u3058\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30bf\u30d6\u3092\u53f3\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30bf\u30d6\u95a2\u9023\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u30c6\u30ad\u30b9\u30c8\u30a8\u30c7\u30a3\u30bf",children:"\u30c6\u30ad\u30b9\u30c8\u30a8\u30c7\u30a3\u30bf"}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u3053\u3067\u306f\u3001\u30a2\u30bb\u30c3\u30c8\u306e\u5185\u5bb9\u3092\u5b9f\u969b\u306b\u7de8\u96c6\u3067\u304d\u307e\u3059\u3002\u30a8\u30c7\u30a3\u30bf\u306b\u306f",(0,r.jsx)(n.a,{href:"https://github.com/Microsoft/monaco-editor",children:"Monaco"}),"\u304c\u4f7f\u7528\u3055\u308c\u3066\u304a\u308a\u3001\u3053\u308c\u306fVisual Studio Code\u3067\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u30c6\u30ad\u30b9\u30c8\u30a8\u30c7\u30a3\u30bf\u30e9\u30a4\u30d6\u30e9\u30ea\u3068\u540c\u3058\u3067\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u3055\u3089\u306b\u3001\u30a8\u30c7\u30a3\u30bf\u306f\u30aa\u30fc\u30c8\u30b3\u30f3\u30d7\u30ea\u30fc\u30c8\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002\u6587\u5b57\u3092\u5165\u529b\u3059\u308b\u304b\u3001Ctrl + Space\u3092\u62bc\u3059\u3068\u3001\u30aa\u30fc\u30c8\u30b3\u30f3\u30d7\u30ea\u30fc\u30c8\u5019\u88dc\u306e\u30ea\u30b9\u30c8\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u307e\u305f\u3001\u30a8\u30c7\u30a3\u30bf\u306fJavaScript\u306e\u30b3\u30fc\u30c9\u3092\u30ea\u30f3\u30c8\u3057\u307e\u3059\u3002\u3064\u307e\u308a\u3001\u30b3\u30fc\u30c9\u3092\u5165\u529b\u3059\u308b\u3068\u3001\u30a8\u30c7\u30a3\u30bf\u306f\u53ef\u80fd\u306a\u30a8\u30e9\u30fc\u3084\u4e0d\u5be9\u306a\u4f7f\u7528\u3092\u691c\u51fa\u3059\u308b\u305f\u3081\u306b\u30b3\u30fc\u30c9\u3092\u30b9\u30ad\u30e3\u30f3\u3057\u307e\u3059\u3002\u3053\u308c\u306f",(0,r.jsx)(n.a,{href:"https://jshint.com/",children:"JSHint"}),"\u306e\u652f\u63f4\u306b\u3088\u3063\u3066\u884c\u308f\u308c\u307e\u3059\u3002JSHint\u306f\u3001\u6319\u52d5\u3092\u5236\u5fa1\u3059\u308b\u7279\u5225\u306a\u30b3\u30e1\u30f3\u30c8\u3082\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u7279\u5225\u306a\u30b3\u30e1\u30f3\u30c8\u306e\u30ea\u30b9\u30c8\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.jsx)(n.a,{href:"https://jshint.com/docs/",children:"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u30b3\u30e9\u30dc\u30ec\u30fc\u30bf",children:"\u30b3\u30e9\u30dc\u30ec\u30fc\u30bf"}),"\n",(0,r.jsx)(n.p,{children:"\u30a8\u30c7\u30a3\u30bf\u306f\u3001\u30b3\u30fc\u30c9\u3092\u7de8\u96c6\u3059\u308b\u6a29\u9650\u3092\u6301\u3064\u3059\u3079\u3066\u306e\u30e6\u30fc\u30b6\u30fc\u306b\u3088\u308b\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u306e\u5171\u540c\u7de8\u96c6\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u3053\u306b\u306f\u4ed6\u306e\u30e6\u30fc\u30b6\u30fc\u306e\u30a2\u30d0\u30bf\u30fc\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u30b9\u30c6\u30fc\u30bf\u30b9\u30d0\u30fc",children:"\u30b9\u30c6\u30fc\u30bf\u30b9\u30d0\u30fc"}),"\n",(0,r.jsx)(n.p,{children:"\u30b3\u30fc\u30c9\u30a8\u30c7\u30a3\u30bf\u30fc\u3092\u64cd\u4f5c\u3057\u3066\u3044\u308b\u9593\u306b\u3001\u3055\u307e\u3056\u307e\u306a\u30d8\u30eb\u30d7\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u8868\u793a\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u4fdd\u5b58\u3068\u5143\u306b\u623b\u3059",children:"\u4fdd\u5b58\u3068\u5143\u306b\u623b\u3059"}),"\n",(0,r.jsx)(n.p,{children:"\u30b3\u30fc\u30c9\u30a8\u30c7\u30a3\u30bf\u30fc\u306f\u30b3\u30e9\u30dc\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u308b\u305f\u3081\u3001\u30a8\u30c7\u30a3\u30bf\u3067\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u958b\u3044\u3066\u3044\u308b\u3059\u3079\u3066\u306e\u30e6\u30fc\u30b6\u30fc\u306f\u3001\u4ed6\u306e\u958b\u767a\u8005\u304c\u884c\u3063\u305f\u5909\u66f4\u304c\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u3067\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u305f\u3060\u3057\u3001\u5909\u66f4\u306f\u81ea\u52d5\u7684\u306b\u4fdd\u5b58\u3055\u308c\u305a\u3001\u30a8\u30c7\u30a3\u30bf\u304b\u3089\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u5b9f\u884c\u3055\u308c\u308b\u3068\u4fdd\u5b58\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u30ed\u30fc\u30c9\u3055\u308c\u307e\u3059\u3002\u3064\u307e\u308a\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u4f7f\u7528\u3059\u308b\u5909\u66f4\u3092\u3069\u306e\u6642\u70b9\u3067\u30b3\u30df\u30c3\u30c8\u3059\u308b\u304b\u9078\u629e\u3067\u304d\u307e\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u306f\u3044\u3064\u3067\u3082\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u4fdd\u5b58\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u672a\u4fdd\u5b58\u306e\u5909\u66f4\u304c\u3042\u308b\u5834\u5408\u3001\u30d5\u30a1\u30a4\u30eb\u30e1\u30cb\u30e5\u30fc\u306e\u300c\u5143\u306b\u623b\u3059\u300d\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u3053\u308c\u3089\u306e\u5909\u66f4\u304c\u30ad\u30e3\u30f3\u30bb\u30eb\u3055\u308c\u3001\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u304c\u4fdd\u5b58\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u5fa9\u5143\u3055\u308c\u307e\u3059\u3002\u3059\u3079\u3066\u306e\u30e6\u30fc\u30b6\u30fc\u304c\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u4fdd\u5b58\u305b\u305a\u306b\u7d42\u4e86\u3057\u305f\u5834\u5408\u3001\u672a\u4fdd\u5b58\u306e\u5909\u66f4\u306f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u304c\u81ea\u52d5\u7684\u306b\u4fdd\u5b58\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u623b\u308b\u307e\u3067\u4e00\u6642\u7684\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002\u3057\u305f\u304c\u3063\u3066\u3001\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u7d42\u4e86\u3059\u308b\u524d\u306b\u4f5c\u696d\u3092\u4fdd\u5b58\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u30b3\u30de\u30f3\u30c9\u30d1\u30ec\u30c3\u30c8",children:"\u30b3\u30de\u30f3\u30c9\u30d1\u30ec\u30c3\u30c8"}),"\n",(0,r.jsx)(n.p,{children:"\u30c6\u30ad\u30b9\u30c8\u7de8\u96c6\u6a5f\u80fd\u306f\u3001\u30b3\u30de\u30f3\u30c9\u30d1\u30ec\u30c3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u898b\u3064\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002Windows\u3067\u306fCtrl + Shift + P\u3001Mac\u3067\u306fCmd + Shift + P\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"/images/user-manual/scripting/command-palette.png",alt:""})}),"\n",(0,r.jsx)(n.h2,{id:"\u30db\u30c3\u30c8\u30ad\u30fc",children:"\u30db\u30c3\u30c8\u30ad\u30fc"}),"\n",(0,r.jsx)(n.p,{children:"\u30a8\u30c7\u30a3\u30bf\u306f\u3001\u30b3\u30fc\u30c9\u3092\u7de8\u96c6\u3059\u308b\u969b\u306b\u5f79\u7acb\u3064\u3055\u307e\u3056\u307e\u306a\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u3001\u30e1\u30cb\u30e5\u30fc\u3084\u30b3\u30de\u30f3\u30c9\u30d1\u30ec\u30c3\u30c8\u3067\u898b\u3064\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u6700\u3082\u4e00\u822c\u7684\u306a\u3082\u306e\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\u3002"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u30b3\u30de\u30f3\u30c9"}),(0,r.jsx)(n.th,{children:"PC"}),(0,r.jsx)(n.th,{children:"Mac"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u4fdd\u5b58"}),(0,r.jsx)(n.td,{children:"Ctrl + S"}),(0,r.jsx)(n.td,{children:"Cmd + S"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u5143\u306b\u623b\u3059"}),(0,r.jsx)(n.td,{children:"Ctrl + Z"}),(0,r.jsx)(n.td,{children:"Cmd + Z"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u3084\u308a\u76f4\u3057"}),(0,r.jsx)(n.td,{children:"Ctrl + Y"}),(0,r.jsx)(n.td,{children:"Cmd + Shift + Z\u307e\u305f\u306fCmd + Y"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30d5\u30a1\u30a4\u30eb\u5185\u691c\u7d22"}),(0,r.jsx)(n.td,{children:"Ctrl + F"}),(0,r.jsx)(n.td,{children:"Cmd + F"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u6b21\u306e\u4e00\u81f4\u3092\u691c\u7d22"}),(0,r.jsx)(n.td,{children:"F3"}),(0,r.jsx)(n.td,{children:"Cmd + G"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u524d\u306e\u4e00\u81f4\u3092\u691c\u7d22"}),(0,r.jsx)(n.td,{children:"Shift + F3"}),(0,r.jsx)(n.td,{children:"Cmd + Shift + G"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u7f6e\u63db"}),(0,r.jsx)(n.td,{children:"Ctrl + H"}),(0,r.jsx)(n.td,{children:"Cmd + Alt + F"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30d5\u30a1\u30a4\u30eb\u5185\u691c\u7d22"}),(0,r.jsx)(n.td,{children:"Ctrl + Shift + F"}),(0,r.jsx)(n.td,{children:"Cmd + Shift + F"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u884c\u307e\u305f\u306f\u9078\u629e\u306e\u30b3\u30e1\u30f3\u30c8"}),(0,r.jsx)(n.td,{children:"Ctrl + /"}),(0,r.jsx)(n.td,{children:"Cmd + /"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30d6\u30ed\u30c3\u30af\u30b3\u30e1\u30f3\u30c8\u884c\u307e\u305f\u306f\u9078\u629e"}),(0,r.jsx)(n.td,{children:"Alt + Shift + A"}),(0,r.jsx)(n.td,{children:"Alt + Shift + A"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u884c\u307e\u305f\u306f\u9078\u629e\u306e\u30a4\u30f3\u30c7\u30f3\u30c8"}),(0,r.jsx)(n.td,{children:"Tab"}),(0,r.jsx)(n.td,{children:"Tab"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u884c\u307e\u305f\u306f\u9078\u629e\u306e\u30a4\u30f3\u30c7\u30f3\u30c8\u3092\u89e3\u9664"}),(0,r.jsx)(n.td,{children:"Shift + Tab"}),(0,r.jsx)(n.td,{children:"Shift + Tab"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u5ba3\u8a00\u306b\u30b8\u30e3\u30f3\u30d7"}),(0,r.jsx)(n.td,{children:"Ctrl + F12"}),(0,r.jsx)(n.td,{children:"Cmd + F12"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30aa\u30fc\u30c8\u30b3\u30f3\u30d7\u30ea\u30fc\u30c8\u8868\u793a"}),(0,r.jsx)(n.td,{children:"Ctrl + Space\u307e\u305f\u306fCtrl + I"}),(0,r.jsx)(n.td,{children:"Ctrl + Space\u307e\u305f\u306fCmd + I"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u691c\u7d22",children:"\u691c\u7d22"}),"\n",(0,r.jsx)(n.p,{children:"\u30d5\u30a1\u30a4\u30eb\u5185\u306e\u30c6\u30ad\u30b9\u30c8\u3092\u691c\u7d22\u3059\u308b\u306b\u306f\u3001Windows\u3067\u306fCtrl + F\u3001Mac\u3067\u306fCmd + F\u3092\u62bc\u3057\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u53f3\u4e0a\u306b\u691c\u7d22\u30d1\u30cd\u30eb\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"/images/user-manual/scripting/monaco-find-panel.png",alt:""})}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u3053\u306b\u691c\u7d22\u8a9e\u3092\u5165\u529b\u3057\u3001Enter\u30ad\u30fc\u3092\u62bc\u3057\u3066\u304f\u3060\u3055\u3044\u3002Enter\u30ad\u30fc\u3092\u9023\u7d9a\u3057\u3066\u62bc\u3059\u3053\u3068\u3067\u30de\u30c3\u30c1\u3057\u305f\u9805\u76ee\u9593\u3092\u79fb\u52d5\u3067\u304d\u307e\u3059\uff08Shift + Enter\u3067\u5f8c\u65b9\u306b\u79fb\u52d5\u3057\u307e\u3059\uff09\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u30de\u30c3\u30c1\u3057\u305f\u9805\u76ee\u3092\u7f6e\u63db\u3057\u305f\u3044\u5834\u5408\u306f\u3001\u53f3\u5074\u306e\u7f6e\u63db\u7528\u306e\u5165\u529b\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u7f6e\u63db\u3057\u305f\u3044\u30c6\u30ad\u30b9\u30c8\u3092\u5165\u529b\u3057\u307e\u3059\u3002\u305d\u306e\u5f8c\u3001Enter\u30ad\u30fc\u3092\u62bc\u3057\u3066\u30de\u30c3\u30c1\u3057\u305f\u9805\u76ee\u3092\u7f6e\u63db\u3057\u3001Enter\u30ad\u30fc\u3092\u9023\u6253\u3057\u3066 subsequent match \u3092\u7f6e\u63db\u3057\u307e\u3059\uff08Shift + Enter\u3067\u5f8c\u65b9\u306b\u7f6e\u63db\u3057\u307e\u3059\uff09\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u30d5\u30a1\u30a4\u30eb\u5185\u3092\u691c\u7d22",children:"\u30d5\u30a1\u30a4\u30eb\u5185\u3092\u691c\u7d22"}),"\n",(0,r.jsx)(n.p,{children:"\u3059\u3079\u3066\u306e\u30a2\u30bb\u30c3\u30c8\u5185\u3067\u8a9e\u53e5\u3092\u691c\u7d22\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u3092\u884c\u3046\u306b\u306f\u3001Ctrl + Shift + F\u3092\u62bc\u3057\u3066\u4e0b\u90e8\u306b\u300c\u30d5\u30a1\u30a4\u30eb\u5185\u3092\u691c\u7d22\u300d\u30d1\u30cd\u30eb\u3092\u8868\u793a\u3057\u307e\u3059\u3002\u4ee5\u524d\u3068\u540c\u69d8\u306b\u691c\u7d22\u8a9e\u3092\u5165\u529b\u3057\u3001Enter\u30ad\u30fc\u3092\u62bc\u3057\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u691c\u7d22\u7d50\u679c\u304c\u8868\u793a\u3055\u308c\u308b\u65b0\u3057\u3044\u30bf\u30d6\u304c\u958b\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5165\u529b\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u5de6\u5074\u306b\u306f\u3001\u69d8\u3005\u306a\u691c\u7d22\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u3089\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u6b63\u898f\u8868\u73fe\u3092\u4f7f\u7528\u3057\u305f\u691c\u7d22\u3001\u5927\u6587\u5b57\u30fb\u5c0f\u6587\u5b57\u3092\u533a\u5225\u3059\u308b\u691c\u7d22\u3001\u307e\u305f\u306f\u5168\u5358\u8a9e\u3092\u691c\u7d22\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3082\u3057\u3001\u6b63\u898f\u8868\u73fe\u3092\u3088\u308a\u6df1\u304f\u5b66\u3073\u3001\u5b9f\u9a13\u3057\u305f\u3044\u306a\u3089\u3001",(0,r.jsx)(n.a,{href:"https://regexr.com/",children:"RegExr"}),"\u306f\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8\u3001\u4f8b\u3001\u305d\u3057\u3066\u6b63\u898f\u8868\u73fe\u306e\u30c6\u30b9\u30c8\u7528\u306e\u30aa\u30f3\u30e9\u30a4\u30f3\u30a8\u30c7\u30a3\u30bf\u3092\u63d0\u4f9b\u3057\u3066\u3044\u308b\u7d20\u6674\u3089\u3057\u3044\u30b5\u30a4\u30c8\u3067\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"/images/user-manual/scripting/find-in-files-results.png",alt:"Find in Files"})}),"\n",(0,r.jsx)(n.p,{children:"\u691c\u7d22\u7d50\u679c\u306e\u884c\u3092\u30c0\u30d6\u30eb\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u305d\u306e\u30a2\u30bb\u30c3\u30c8\u306e\u7279\u5b9a\u306e\u884c\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u30af\u30a4\u30c3\u30af\u30aa\u30fc\u30d7\u30f3",children:"\u30af\u30a4\u30c3\u30af\u30aa\u30fc\u30d7\u30f3"}),"\n",(0,r.jsx)(n.p,{children:"Ctrl + P\uff08Mac\u3067\u306fCmd + P\uff09\u3092\u62bc\u3059\u3053\u3068\u3067\u3001\u30a2\u30bb\u30c3\u30c8\u3092\u7d20\u65e9\u304f\u958b\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u305d\u306e\u30a2\u30bb\u30c3\u30c8\u306e\u540d\u524d\u3067\u691c\u7d22\u3067\u304d\u308b\u30d1\u30cd\u30eb\u304c\u958b\u304d\u307e\u3059\u3002\u30a2\u30bb\u30c3\u30c8\u306e\u540d\u524d\u3092\u5165\u529b\u3057\u59cb\u3081\u308b\u3068\u3001\u30d1\u30cd\u30eb\u306f\u3042\u3044\u307e\u3044\u691c\u7d22\u3092\u884c\u3044\u3001\u63a2\u3057\u3066\u3044\u308b\u30a2\u30bb\u30c3\u30c8\u3092\u898b\u3064\u3051\u307e\u3059\u3002Enter\u30ad\u30fc\u3092\u62bc\u3059\u3068\u9078\u629e\u3057\u305f\u30a2\u30bb\u30c3\u30c8\u304c\u958b\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"/images/user-manual/scripting/go-to-anything.gif",alt:"Go to Anything"})}),"\n",(0,r.jsx)(n.h2,{id:"preferences",children:"Preferences"}),"\n",(0,r.jsx)(n.p,{children:"\u300cEdit\u300d->\u300cPreferences\u300d\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3053\u3068\u3067\u3001\u8a2d\u5b9a\u3092\u7de8\u96c6\u3067\u304d\u307e\u3059\u3002\u3053\u3053\u3067\u306f\u3001\u30c6\u30ad\u30b9\u30c8\u30a8\u30c7\u30a3\u30bf\u306e\u30d5\u30a9\u30f3\u30c8\u30b5\u30a4\u30ba\u3092\u5909\u66f4\u3057\u305f\u308a\u3001\u4ed6\u306e\u30a8\u30c7\u30a3\u30bf\u95a2\u9023\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u7de8\u96c6\u3057\u305f\u308a\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"/images/user-manual/scripting/preferences.png",alt:"Preferences"})}),"\n",(0,r.jsx)(n.h2,{id:"\u8ffd\u52a0\u306e\u30d2\u30f3\u30c8",children:"\u8ffd\u52a0\u306e\u30d2\u30f3\u30c8"}),"\n",(0,r.jsx)(n.h3,{id:"\u30af\u30a4\u30c3\u30af\u691c\u7d22",children:"\u30af\u30a4\u30c3\u30af\u691c\u7d22"}),"\n",(0,r.jsx)(n.p,{children:"\u30b3\u30fc\u30c9\u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u5358\u8a9e\u3092\u30cf\u30a4\u30e9\u30a4\u30c8\u3059\u308b\u3068\u3001\u305d\u306e\u30d5\u30a1\u30a4\u30eb\u5185\u306e\u4ed6\u306e\u3059\u3079\u3066\u306e\u30de\u30c3\u30c1\u304c\u30cf\u30a4\u30e9\u30a4\u30c8\u3055\u308c\u3001\u5909\u6570\u3084\u95a2\u6570\u304c\u3069\u3053\u3067\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u304b\u3092\u78ba\u8a8d\u3059\u308b\u306e\u304c\u5bb9\u6613\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"/images/user-manual/scripting/code-editor-quick-searching.gif",alt:"Quick Searching"})}),"\n",(0,r.jsx)(n.h3,{id:"\u8907\u6570\u9078\u629e\u7de8\u96c6",children:"\u8907\u6570\u9078\u629e\u7de8\u96c6"}),"\n",(0,r.jsx)(n.p,{children:"Alt\u30ad\u30fc\u3092\u62bc\u3057\u306a\u304c\u3089\u5de6\u30de\u30a6\u30b9\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30a8\u30c7\u30a3\u30bf\u306b\u5225\u306e\u30ab\u30fc\u30bd\u30eb\u304c\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30d5\u30a1\u30a4\u30eb\u306e\u8907\u6570\u306e\u7b87\u6240\u3067\u540c\u3058\u5909\u66f4\u3092\u7d20\u65e9\u304f\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"/images/user-manual/scripting/code-editor-multiple-selection.gif",alt:"Multiple Selection Editing"})}),"\n",(0,r.jsx)(n.h3,{id:"\u77e9\u5f62\u9078\u629e",children:"\u77e9\u5f62\u9078\u629e"}),"\n",(0,r.jsx)(n.p,{children:"Alt + Shift\u30ad\u30fc\u3092\u62bc\u3057\u306a\u304c\u3089\u5de6\u30de\u30a6\u30b9\u30dc\u30bf\u30f3\u3092\u30c9\u30e9\u30c3\u30b0\u3059\u308b\u3068\u3001\u77e9\u5f62\u9078\u629e\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u30c6\u30ad\u30b9\u30c8\u306e\u5217\u3092\u9078\u629e\u3057\u3001\u7de8\u96c6\u3059\u308b\u306e\u306b\u4fbf\u5229\u3067\u3059\u3002\n\xa0"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"/images/user-manual/scripting/code-editor-rectangular-selection.gif",alt:"Rectangular Selection"})})]})}function j(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>t,a:()=>l});var r=i(67294);const s={},d=r.createContext(s);function l(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);