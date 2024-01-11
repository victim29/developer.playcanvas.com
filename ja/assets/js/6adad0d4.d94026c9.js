"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[8190],{37941:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var s=r(85893),a=r(11151);const i={title:"\u7269\u7406\u30d9\u30fc\u30b9\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0 (PBR)",layout:"usermanual-page.hbs",sidebar_position:3},l="\u57fa\u790e\u3068\u306a\u308b\u539f\u7406",c={id:"user-manual/graphics/physical-rendering/index",title:"\u7269\u7406\u30d9\u30fc\u30b9\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0 (PBR)",description:"Star-Lord",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/graphics/physical-rendering/index.md",sourceDirName:"user-manual/graphics/physical-rendering",slug:"/user-manual/graphics/physical-rendering/",permalink:"/developer.playcanvas.com/ja/user-manual/graphics/physical-rendering/",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/graphics/physical-rendering/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u7269\u7406\u30d9\u30fc\u30b9\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0 (PBR)",layout:"usermanual-page.hbs",sidebar_position:3},sidebar:"userManualSidebar",previous:{title:"\u30af\u30e9\u30b9\u30bf\u30fc\u30c9\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0",permalink:"/developer.playcanvas.com/ja/user-manual/graphics/lighting/clustered-lighting"},next:{title:"\u7269\u7406\u30de\u30c6\u30ea\u30a2\u30eb",permalink:"/developer.playcanvas.com/ja/user-manual/graphics/physical-rendering/physical-materials"}},t={},p=[{value:"\u62e1\u6563 (Diffuse) \u3068\u30b9\u30da\u30ad\u30e5\u30e9 (Specular)",id:"\u62e1\u6563-diffuse-\u3068\u30b9\u30da\u30ad\u30e5\u30e9-specular",level:2},{value:"\u30a8\u30cd\u30eb\u30ae\u30fc\u306e\u4fdd\u5168",id:"\u30a8\u30cd\u30eb\u30ae\u30fc\u306e\u4fdd\u5168",level:2},{value:"\u91d1\u5c5e\u3068\u975e\u91d1\u5c5e",id:"\u91d1\u5c5e\u3068\u975e\u91d1\u5c5e",level:2},{value:"\u30d5\u30ec\u30cd\u30eb",id:"\u30d5\u30ec\u30cd\u30eb",level:2},{value:"\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d5\u30a7\u30b9",id:"\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d5\u30a7\u30b9",level:2}];function d(e){const n={a:"a",em:"em",h1:"h1",h2:"h2",img:"img",p:"p",strong:"strong",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:"/images/user-manual/graphics/physical-rendering/star-lord.jpg",alt:"Star-Lord"}),"\n",(0,s.jsxs)(n.em,{children:["Star-Lord\u30e2\u30c7\u30eb ",(0,s.jsx)(n.a,{href:"https://www.joachimcoppens.com/",children:"Joachim Coppens"})]})]}),"\n",(0,s.jsx)(n.p,{children:"\u7269\u7406\u30d9\u30fc\u30b9\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0(PBR)\u3067\u306f\u3001\u4e00\u8cab\u6027\u306e\u3042\u308b\u30b0\u30e9\u30d5\u30a3\u30af\u30b9\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u304c\u3001\u30a2\u30fc\u30c6\u30a3\u30b9\u30c8\u306b\u3088\u308b\u30de\u30c6\u30ea\u30a2\u30eb\u4f5c\u6210\u3001\u8a08\u6e2c\u3055\u308c\u305f\u7269\u7406\u7684\u30d7\u30ed\u30d1\u30c6\u30a3\u3068\u30de\u30c6\u30ea\u30a2\u30eb\u30b7\u30a7\u30fc\u30c0\u306e\u7d44\u307f\u5408\u308f\u305b\u306b\u3088\u3063\u3066\u5b9f\u73fe\u3055\u308c\u307e\u3059\u3002\u5149\u6e90\u3068\u7269\u4f53\u8868\u9762\u3068\u306e\u95a2\u4fc2\u3092\u3042\u3089\u308f\u3059\u7269\u7406\u539f\u5247\u3092\u9069\u5fdc\u3059\u308b\u3053\u3068\u3067\u3001\u3069\u306e\u3088\u3046\u306a\u7167\u660e\u74b0\u5883\u3067\u3082\u7279\u5225\u306a\u51e6\u7406\u3092\u3059\u308b\u3053\u3068\u306a\u304f\u81ea\u7136\u306a\u63cf\u753b\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.h1,{id:"\u57fa\u790e\u3068\u306a\u308b\u539f\u7406",children:"\u57fa\u790e\u3068\u306a\u308b\u539f\u7406"}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u3053\u3067\u306f\u3001\u7269\u7406\u30d9\u30fc\u30b9\u306e\u30b7\u30a7\u30fc\u30c0\u304c\u5b9f\u884c\u3059\u308b\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0\u306e\u8a08\u7b97\u306e\u57fa\u790e\u3068\u306a\u308b\u539f\u5247\u3092\u8aac\u660e\u3057\u307e\u3059\u3002\u6b21\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u7269\u7406\u30d9\u30fc\u30b9\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u3069\u306e\u3088\u3046\u306bPlayCanvas\u4e0a\u3067\u4f7f\u7528\u3059\u308b\u304b\u3092\u8a73\u3057\u304f\u8aac\u660e\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u62e1\u6563-diffuse-\u3068\u30b9\u30da\u30ad\u30e5\u30e9-specular",children:"\u62e1\u6563 (Diffuse) \u3068\u30b9\u30da\u30ad\u30e5\u30e9 (Specular)"}),"\n",(0,s.jsx)(n.p,{children:'\u62e1\u6563\u3068\u53cd\u5c04(\u3042\u308b\u3044\u306f\u30b9\u30da\u30ad\u30e5\u30e9)\u306f\u5149\u6e90\u3068\u30de\u30c6\u30ea\u30a2\u30eb\u9593\u306e\u95a2\u4fc2\u3092\u3042\u3089\u308f\u3059\u4e8c\u3064\u306e\u4e3b\u8981\u306a\u8981\u7d20\u3092\u8868\u73fe\u3059\u308b\u305f\u3081\u306e\u7528\u8a9e\u3067\u3059\u3002\u53cd\u5c04\u5149\u306f\u7269\u4f53\u8868\u9762\u3067\u53cd\u5c04\u3057\u305f\u5149\u3092\u3042\u3089\u308f\u3057\u307e\u3059\u3002\u306a\u3081\u3089\u304b\u306a\u8868\u9762\u3067\u306f\u53cd\u5c04\u3057\u305f\u5149\u306f\u3059\u3079\u3066\u540c\u3058\u65b9\u5411\u306b\u9032\u307f\u3001\u8868\u9762\u306f\u93e1\u306e\u3088\u3046\u306b\u898b\u3048\u307e\u3059\u3002\u62e1\u6563\u5149\u306f\u7269\u4f53\u306b\u4e00\u65e6\u5438\u53ce\u3055\u308c\u3001\u7269\u4f53\u5185\u3067\u53cd\u5c04\u3055\u308c\u3066\u518d\u3073\u653e\u51fa\u3055\u308c\u308b\u5149\u3067\u3059\u3002\u3053\u306e\u5149\u306f\u53cd\u5c04\u5149\u3068\u306f\u9055\u3044\u3001\u3059\u3079\u3066\u306e\u65b9\u5411\u306b\u540c\u3058\u3088\u3046\u306b\u653e\u51fa\u3055\u308c\u307e\u3059\u3002\u307e\u305f\u3001\u5438\u53ce\u3068\u518d\u653e\u51fa\u304c\u884c\u308f\u308c\u308b\u969b\u306b\u3001\u7279\u5b9a\u306e\u6ce2\u9577\u306e\u5149\u306f\u5438\u53ce\u3055\u308c\u307e\u3059\u3002\u7269\u4f53\u306b\u5438\u53ce\u3055\u308c\u306a\u304b\u3063\u305f\u6ce2\u9577\u306e\u5149\u306f\u305d\u306e\u7269\u4f53\u306e\u8272\u3068\u306a\u308a\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u9752\u3068\u7dd1\u306e\u6ce2\u9577\u306e\u5149\u304c\u5438\u53ce\u3055\u308c\u305f\u5834\u5408\u306b\u306f\u305d\u306e\u7269\u4f53\u306f\u8d64\u304f\u898b\u3048\u307e\u3059\u3002\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u7528\u8a9e\u3067\u306f\u3001\u62e1\u6563\u8272\u306f"\u30a2\u30eb\u30d9\u30c9"\u3084"\u30d9\u30fc\u30b9\u30ab\u30e9\u30fc"\u3068\u547c\u3070\u308c\u307e\u3059\u3002'}),"\n",(0,s.jsx)(n.h2,{id:"\u30a8\u30cd\u30eb\u30ae\u30fc\u306e\u4fdd\u5168",children:"\u30a8\u30cd\u30eb\u30ae\u30fc\u306e\u4fdd\u5168"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:"/images/user-manual/graphics/physical-rendering/energy-conservation.jpg",alt:"\u30a8\u30cd\u30eb\u30ae\u30fc\u306e\u4fdd\u5168"}),"\n",(0,s.jsx)(n.em,{children:"\u306a\u3081\u3089\u304b\u306a\u8868\u9762\u306b\u306f\u92ed\u304f\u660e\u308b\u3044\u30cf\u30a4\u30e9\u30a4\u30c8\u304c\u3042\u3089\u308f\u308c\u3001\u7c97\u3044\u8868\u9762\u306b\u306f\u5e83\u304f\u307c\u3093\u3084\u308a\u3068\u3057\u305f\u30cf\u30a4\u30e9\u30a4\u30c8\u304c\u3042\u3089\u308f\u308c\u307e\u3059\u3002"})]}),"\n",(0,s.jsx)(n.p,{children:"\u7269\u7406\u7684\u306b\u6b63\u3057\u3044\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u306e\u91cd\u8981\u306a\u8981\u7d20\u306f\u3001\u30a8\u30cd\u30eb\u30ae\u30fc\u306e\u4fdd\u5b58\u3067\u3059\u3002\u62e1\u6563\u5149\u3068\u53cd\u5c04\u5149\u304c\u3069\u3061\u3089\u3082\u7269\u4f53\u8868\u9762\u306b\u6295\u5c04\u3055\u308c\u308b\u5149\u304b\u3089\u767a\u751f\u3057\u3066\u3044\u308b\u3053\u3068\u304b\u3089\u8003\u3048\u308b\u3068\u3001\u62e1\u6563\u5149\u3068\u53cd\u5c04\u5149\u3092\u8db3\u3057\u3042\u308f\u305b\u305f\u7dcf\u91cf\u306f\u3001\u7269\u4f53\u8868\u9762\u306b\u6295\u5c04\u3055\u308c\u305f\u5149\u306e\u7dcf\u91cf\u3092\u4e0a\u56de\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002\u3053\u306e\u6cd5\u5247\u304c\u73fe\u5b9f\u4e16\u754c\u3067\u610f\u5473\u3059\u308b\u3053\u3068\u306f\u3001\u7269\u4f53\u8868\u9762\u306e\u53cd\u5c04\u7387\u304c\u9ad8\u3051\u308c\u3070\u62e1\u6563\u5149\u306f\u975e\u5e38\u306b\u5c0f\u3055\u304f\u306a\u308a\u3001\u53cd\u5bfe\u306b\u62e1\u6563\u5149\u304c\u5927\u304d\u3051\u308c\u3070\u53cd\u5c04\u306f\u3042\u307e\u308a\u8d77\u3053\u3089\u306a\u3044\u3068\u3044\u3046\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u7269\u7406\u30d9\u30fc\u30b9\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u306e\u5229\u70b9\u306f\u3001\u3053\u306e\u30a8\u30cd\u30eb\u30ae\u30fc\u4fdd\u5b58\u306e\u6cd5\u5247\u304c\u30b7\u30a7\u30fc\u30c0\u306b\u5185\u5305\u3055\u308c\u3066\u3044\u308b\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002\u30a2\u30fc\u30c6\u30a3\u30b9\u30c8\u306f\u6cd5\u5247\u3092\u8003\u3048\u306a\u304f\u3066\u3082\u7269\u7406\u30d9\u30fc\u30b9\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u91d1\u5c5e\u3068\u975e\u91d1\u5c5e",children:"\u91d1\u5c5e\u3068\u975e\u91d1\u5c5e"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"/images/user-manual/graphics/physical-rendering/materials.jpg",alt:"\u91d1\u5c5e\u3068\u975e\u91d1\u5c5e"})}),"\n",(0,s.jsx)(n.p,{children:"PBR\u306e\u53e4\u3044\u30b7\u30a7\u30fc\u30c7\u30a3\u30f3\u30b0\u30e2\u30c7\u30eb\u3068\u6bd4\u8f03\u3057\u3066\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u304c\u3069\u306e\u3088\u3046\u306b\u4f5c\u3089\u308c\u305f\u304b\u3092\u8003\u3048\u308b\u3053\u3068\u3067\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u306e\u632f\u308b\u821e\u3044\u3092\u6c7a\u5b9a\u3059\u308b\u3068\u3044\u3046\u3053\u3068\u304c\u65b0\u3057\u3044\u3053\u3068\u306e1\u3064\u3067\u3059\u3002\u3053\u3053\u3067\u8003\u616e\u3059\u308b\u4e3b\u306a\u70b9\u306f\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u304c\u5c0e\u4f53\uff08\u901a\u5e38\u306f\u91d1\u5c5e\uff09\u304b\u7d76\u7e01\u4f53\uff08\u975e\u91d1\u5c5e\uff09\u304b\u3069\u3046\u304b\u3067\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u308c\u304c\u91cd\u8981\u306a\u7406\u7531\u306f\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u304c\u5149\u306b\u3069\u306e\u3088\u3046\u306b\u53cd\u5fdc\u3059\u308b\u304b\u3092\u6c7a\u5b9a\u3059\u308b\u591a\u304f\u306e\u8981\u56e0\u3092\u6c7a\u5b9a\u3059\u308b\u304b\u3089\u3067\u3059\u3002\u305f\u3068\u3048\u3070\u3001\u91d1\u5c5e\u306f\u4e00\u822c\u7684\u306b\u53cd\u5c04\u7684\u3067\u3059\uff0860\uff05\u301c90\uff05\uff09\u3001\u975e\u91d1\u5c5e\u306f\u305d\u3046\u3067\u306f\u3042\u308a\u307e\u305b\u3093\uff080\uff05\u301c20\uff05\uff09\u3002\u6b21\u306b\u3001\u975e\u91d1\u5c5e\u306e\u53cd\u5c04\u306f\u901a\u5e38\u306f\u767d\u8272\u3067\u3042\u308a\u3001\u91d1\u5c5e\u306f\u901a\u5e38\u3001\u62e1\u6563\u8272\u3068\u540c\u3058\u8272\u3092\u53cd\u5c04\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u308c\u3089\u306e\u9055\u3044\u306e\u305f\u3081\u3001PBR\u306e\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306b\u306f\u30e1\u30bf\u30eb\u30cd\u30b9 ( ",(0,s.jsx)(n.strong,{children:"Metalness"})," ) \u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u542b\u307e\u308c\u3066\u304a\u308a\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u91d1\u5c5e\u307e\u305f\u306f\u975e\u91d1\u5c5e\u3068\u3057\u3066\u5b9a\u7fa9\u3059\u308b\u3053\u3068\u3067\u3001\u3053\u306e\u3088\u3046\u306a\u5185\u5bb9\u3092\u7c21\u6613\u306b\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002\u30e1\u30bf\u30eb\u30cd\u30b9\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u7bc0\u3067\u8aac\u660e\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u30d5\u30ec\u30cd\u30eb",children:"\u30d5\u30ec\u30cd\u30eb"}),"\n",(0,s.jsx)(n.p,{children:"\u30d5\u30ec\u30cd\u30eb\u306f\u3001PlayCanvas\u3067PBR\u3092\u4f7f\u7528\u3059\u308b\u305f\u3081\u306b\u77e5\u3063\u3066\u304a\u304b\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044\u7528\u8a9e\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u304c\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u306e\u632f\u308b\u821e\u3044\u3092\u3088\u308a\u3088\u304f\u7406\u89e3\u3059\u308b\u305f\u3081\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u30d5\u30ec\u30cd\u30eb\u306b\u95a2\u3057\u3066\u77e5\u3063\u3066\u304a\u304f\u5fc5\u8981\u304c\u3042\u308b\u3053\u3068\u306f\u3001\u8868\u9762\u3092\u3069\u306e\u89d2\u5ea6\u3067\u898b\u3066\u3044\u308b\u304b\u304c\u3001\u305d\u306e\u8868\u9762\u304c\u3069\u306e\u7a0b\u5ea6\u53cd\u5c04\u3059\u308b\u304b\u306b\u5f71\u97ff\u3059\u308b\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002\u8868\u9762\u304c\u307b\u3068\u3093\u3069\u8996\u70b9\u306b\u5bfe\u3057\u3066\u6b63\u9762\u306b\u306a\u3063\u3066\u3044\u308b\u5834\u5408\u3001\u8868\u9762\u306f\u307b\u307c\u5b8c\u5168\u306b\u53cd\u5c04\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d5\u30a7\u30b9",children:"\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d5\u30a7\u30b9"}),"\n",(0,s.jsx)(n.p,{children:"\u6700\u5f8c\u306b\u3001\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d5\u30a7\u30a4\u30b9\u306b\u3064\u3044\u3066\u3067\u3059\u3002\u4e00\u822c\u7684\u306b\u30013D\u30a2\u30fc\u30c6\u30a3\u30b9\u30c8\u306fNormal\u30de\u30c3\u30d7\u306e\u30a2\u30a4\u30c7\u30a2\u306b\u6163\u308c\u3066\u3044\u307e\u3059\u3002\u305d\u308c\u306f\u3001\u9069\u7528\u3055\u308c\u308b\u8868\u9762\u306e\u65b9\u5411\u3092\u5909\u66f4\u3059\u308b\u30c6\u30af\u30b9\u30c1\u30e3\u30fc\u3067\u3059\u3002\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d5\u30a7\u30b9\u306f\u3001\u826f\u304f\u4f3c\u305f\u30c6\u30af\u30cb\u30c3\u30af\u3067\u3001\u8868\u9762\u306e\u7c97\u3055\u3084\u6ed1\u3089\u304b\u3055\u306a\u3069\u3092\u8a18\u8ff0\u3057\u307e\u3059\u3002\u30ac\u30e9\u30b9\uff08\u9ad8\u3044\u8f1d\u5ea6\u3001\u4f4e\u3044\u7c97\u5ea6\uff09\u3068\u30b5\u30f3\u30c9\u30da\u30fc\u30d1\u30fc\uff08\u9ad8\u3044\u7c97\u5ea6\u3001\u4f4e\u3044\u8f1d\u5ea6\uff09\u3092\u6bd4\u8f03\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002\u8868\u9762\u304c\u5411\u3044\u3066\u3044\u308b\u6b63\u78ba\u306a\u65b9\u5411\u3092\u6307\u5b9a\u3059\u308b\u306e\u3067\u306f\u306a\u304f\u3001\u8868\u9762\u306e\u7c97\u3055\u3084\u6ed1\u3089\u304b\u3055\u306e\u4e00\u822c\u7684\u306a\u30a2\u30a4\u30c7\u30a2\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4e00\u90e8\u306ePBR\u30b7\u30b9\u30c6\u30e0\u306f\u3001\u30e9\u30d5\u30cd\u30b9\u307e\u305f\u306f\u30b0\u30ed\u30b9\u30cd\u30b9\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u304c\u3001\u3053\u308c\u3089\u306f\u540c\u3058\u3082\u306e\u3067\u3059\u3002\u30e9\u30d5\u30cd\u30b9\u306f\u30b0\u30ed\u30b9\u30cd\u30b9\u306e\u9006\u6570\u3067\u3042\u308a\u3001\u9006\u3082\u540c\u3058\u3067\u3059\u3002\u5909\u63db\u3059\u308b\u5834\u5408\u306f\u3001\u30c6\u30af\u30b9\u30c1\u30e3\u30fc\u307e\u305f\u306f\u5024\u3092\u53cd\u8ee2\u3059\u308c\u3070\u3088\u3044\u3067\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/user-manual/graphics/physical-rendering/physical-materials",children:"\u7269\u7406\u7684\u30de\u30c6\u30ea\u30a2\u30eb\u306b\u7d9a\u304f"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["\u3055\u3089\u306b\u8a73\u3057\u3044\u8aac\u660e\u306f\u3001Marmoset Toolbag\u306e",(0,s.jsx)(n.a,{href:"https://www.marmoset.co/toolbag/learn/pbr-theory",children:"PBR Theory"}),"\u3068\u3044\u3046\u7d20\u6674\u3089\u3057\u3044\u8a18\u4e8b\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})})]})}function o(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>l});var s=r(67294);const a={},i=s.createContext(a);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);