"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[5513],{80669:(i,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=e(85893),l=e(11151);const r={title:"\u885d\u7a81\u3068\u30c8\u30ea\u30ac\u30fc\u306e\u51e6\u7406",layout:"tutorial-page.hbs",tags:["collision","physics"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405871/0D7E2F-image-75.jpg"},t=void 0,o={id:"tutorials/collision-and-triggers",title:"\u885d\u7a81\u3068\u30c8\u30ea\u30ac\u30fc\u306e\u51e6\u7406",description:"RigidBody\u304c\u4e92\u3044\u306b\u885d\u7a81\u3059\u308b\u3068\u3001\u885d\u7a81\u97f3\u304c\u518d\u751f\u3055\u308c\u3001\u30c8\u30ea\u30ac\u30fc\u30dc\u30ea\u30e5\u30fc\u30e0\u304c\u5f62\u72b6\u3092\u30ea\u30bb\u30c3\u30c8\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/collision-and-triggers.md",sourceDirName:"tutorials",slug:"/tutorials/collision-and-triggers",permalink:"/developer.playcanvas.com/ja/tutorials/collision-and-triggers",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/collision-and-triggers.md",tags:[{label:"collision",permalink:"/developer.playcanvas.com/ja/tags/collision"},{label:"physics",permalink:"/developer.playcanvas.com/ja/tags/physics"}],version:"current",frontMatter:{title:"\u885d\u7a81\u3068\u30c8\u30ea\u30ac\u30fc\u306e\u51e6\u7406",layout:"tutorial-page.hbs",tags:["collision","physics"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405871/0D7E2F-image-75.jpg"},sidebar:"tutorialsSidebar",previous:{title:"Changing textures at runtime",permalink:"/developer.playcanvas.com/ja/tutorials/changing-textures-at-runtime"},next:{title:"\u8907\u5408\u7269\u7406\u5f62\u72b6\u306e\u4f5c\u6210",permalink:"/developer.playcanvas.com/ja/tutorials/compound-physics-shapes"}},c={},d=[{value:"Collision\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",id:"collision\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",level:2},{value:"\u30c8\u30ea\u30ac\u30fc\u30dc\u30ea\u30e5\u30fc\u30e0",id:"\u30c8\u30ea\u30ac\u30fc\u30dc\u30ea\u30e5\u30fc\u30e0",level:3},{value:"RigidBody",id:"rigidbody",level:3},{value:"\u5730\u9762\u306e\u8a2d\u5b9a",id:"\u5730\u9762\u306e\u8a2d\u5b9a",level:2},{value:"\u30c8\u30ea\u30ac\u30fc\u306e\u8a2d\u5b9a",id:"\u30c8\u30ea\u30ac\u30fc\u306e\u8a2d\u5b9a",level:2},{value:"RigidBody",id:"rigidbody-1",level:2},{value:"\u885d\u7a81\u30a4\u30d9\u30f3\u30c8 (Contact Events)",id:"\u885d\u7a81\u30a4\u30d9\u30f3\u30c8-contact-events",level:2}];function a(i){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...i.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/p/1Hj5fX2I/",title:"Collision and Triggers"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"RigidBody\u304c\u4e92\u3044\u306b\u885d\u7a81\u3059\u308b\u3068\u3001\u885d\u7a81\u97f3\u304c\u518d\u751f\u3055\u308c\u3001\u30c8\u30ea\u30ac\u30fc\u30dc\u30ea\u30e5\u30fc\u30e0\u304c\u5f62\u72b6\u3092\u30ea\u30bb\u30c3\u30c8\u3057\u307e\u3059\u3002"})}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u525b\u4f53\u7269\u7406\u3001\u885d\u7a81\u691c\u51fa\u3001\u304a\u3088\u3073\u30c8\u30ea\u30ac\u30fc\u30dc\u30ea\u30e5\u30fc\u30e0\u306e\u57fa\u672c\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u6982\u5ff5\u3092\u63a2\u7d22\u3059\u308b\u305f\u3081\u306b\u3001",(0,s.jsx)(n.a,{href:"https://playcanvas.com/project/405871",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"}),"\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"collision\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",children:"Collision\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Collision"})," \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u3001\u4ed6\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u304c\u305d\u306e\u5f62\u72b6\u306b\u5165\u3063\u305f\u308a\u51fa\u305f\u308a\u3057\u305f\u3068\u304d\u306b\u30a4\u30d9\u30f3\u30c8\u3092\u30c8\u30ea\u30ac\u30fc\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff08\u3053\u308c\u3092\u30c8\u30ea\u30ac\u30fc\u30dc\u30ea\u30e5\u30fc\u30e0\u3068\u547c\u3073\u307e\u3059\uff09\u3002\u307e\u305f\u3001",(0,s.jsx)(n.em,{children:"RigidBody"})," \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3068\u7d44\u307f\u5408\u308f\u305b\u3066\u3001\u30b2\u30fc\u30e0\u5185\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306b\u7269\u7406\u7684\u306a\u7279\u6027\u3092\u4e0e\u3048\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u305f\u3068\u3048\u3070\u3001\u8df3\u306d\u308b\u30dc\u30fc\u30eb\u3084\u91cd\u3044\u6728\u7bb1\u306a\u3069\u3067\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Collision"}),"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u6700\u3082\u91cd\u8981\u306a\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001\u305d\u306e ",(0,s.jsx)(n.strong,{children:"Type"}),"\u3067\u3059\u3002\u3053\u308c\u306f\u4f7f\u7528\u3055\u308c\u308b\u30dc\u30ea\u30e5\u30fc\u30e0\u306e\u5f62\u72b6\u3092\u6c7a\u5b9a\u3057\u307e\u3059\u3002\u4ee5\u4e0b\u306e4\u3064\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Box"})," \u30b7\u30f3\u30d7\u30eb\u306a\u30dc\u30c3\u30af\u30b9"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Sphere"})," \u30b7\u30f3\u30d7\u30eb\u306a\u7403\u4f53"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Capsule"})," \u30d4\u30eb\u5f62\u306e\u30ab\u30d7\u30bb\u30eb\u3002\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u306b\u306f\u6709\u7528\u3067\u3001\u9ad8\u304f\u3066\u7d30\u9577\u304f\u3001\u4e38\u3044\u30d9\u30fc\u30b9\u3068\u5358\u4e00\u306e\u63a5\u89e6\u70b9\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Mesh"}),": \u4efb\u610f\u306e\u30e1\u30c3\u30b7\u30e5\u5f62\u72b6\u3092\u30dc\u30ea\u30e5\u30fc\u30e0\u306b\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\n",(0,s.jsx)(n.strong,{children:"\u6ce8\u610f"})," \u305f\u3060\u3057\u3001\u30e1\u30c3\u30b7\u30e5\u30b3\u30ea\u30b8\u30e7\u30f3\u306e\u4f7f\u7528\u306b\u306f\u3044\u304f\u3064\u304b\u306e\u5236\u9650\u304c\u3042\u308a\u307e\u3059\u3002\u7279\u306b\u3001",(0,s.jsx)(n.em,{children:"RigidBody"})," \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3068\u7d44\u307f\u5408\u308f\u305b\u3066\u4f7f\u7528\u3059\u308b\u5834\u5408\u3001\u30e1\u30c3\u30b7\u30e5\u306f",(0,s.jsx)(n.strong,{children:"Static"}),"\u306b\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u30c8\u30ea\u30ac\u30fc\u30dc\u30ea\u30e5\u30fc\u30e0",children:"\u30c8\u30ea\u30ac\u30fc\u30dc\u30ea\u30e5\u30fc\u30e0"}),"\n",(0,s.jsxs)(n.p,{children:["\u30c8\u30ea\u30ac\u30fc\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001\u5358\u306b\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306b ",(0,s.jsx)(n.em,{children:"Collision"})," \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u8ffd\u52a0\u3059\u308b\u3060\u3051\u3067\u3059\u3002\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u659c\u9762\u306e\u4e0b\u306b\u5927\u304d\u306a\u30dc\u30c3\u30af\u30b9\u5f62\u72b6\u306e\u30c8\u30ea\u30ac\u30fc\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8ffd\u52a0\u3057\u3066\u3001\u843d\u3061\u3066\u304f\u308b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u30ad\u30e3\u30c3\u30c1\u3057\u3001\u4f4d\u7f6e\u3092\u30ea\u30bb\u30c3\u30c8\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"/images/tutorials/collision/collision_and_triggers.jpg",alt:"Collisions & Triggers"})}),"\n",(0,s.jsx)(n.p,{children:"\u30e9\u30f3\u30d7\u306e\u4e0b\u306b\u3042\u308b\u30c8\u30ea\u30ac\u30fc\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u9752\u3044\u5916\u67a0\u3067\u8868\u793a\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"rigidbody",children:"RigidBody"}),"\n",(0,s.jsx)(n.p,{children:"Rigid Body (\u525b\u4f53) \u306f\u3001\u30b2\u30fc\u30e0\u4e16\u754c\u306b\u304a\u3051\u308b\u7269\u7406\u7684\u306a\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8868\u3057\u307e\u3059\u3002\u8cea\u91cf\u3084\u6469\u64e6\u306a\u3069\u306e\u5b9f\u969b\u306e\u7269\u7406\u7279\u6027\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u4ed6\u306e\u525b\u4f53\u3068\u885d\u7a81\u3057\u3001\u7269\u7406\u6cd5\u5247\u306b\u57fa\u3065\u3044\u3066\u73fe\u5b9f\u7684\u306a\u53cd\u5fdc\u3092\u793a\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u30b7\u30fc\u30f3\u5185\u3067\u525b\u4f53\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u9078\u629e\u3057\u3001 ",(0,s.jsx)(n.em,{children:"RigidBody"})," \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3068 ",(0,s.jsx)(n.em,{children:"Collision"})," \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u3053\u308c\u306b\u3088\u308a ",(0,s.jsx)(n.strong,{children:"static box"})," \u306e\u525b\u4f53\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002 ",(0,s.jsx)(n.em,{children:"RigidBody"}),"  \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u306f\u3001\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u8abf\u6574\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3067\u304d\u308b\u3055\u307e\u3056\u307e\u306a\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u63d0\u4f9b\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"/images/user-manual/scenes/components/component-rigid-body-dynamic.png",alt:"rigidbody component"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5404\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,s.jsxs)(n.a,{href:"/user-manual/packs/components/rigidbody/",children:[(0,s.jsx)(n.em,{children:"RigidBody"}),"\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"]}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u306e\u30c7\u30e2\u3067\u306f\u3001\u91cd\u8981\u306a\u30d7\u30ed\u30d1\u30c6\u30a3\u306f ",(0,s.jsx)(n.strong,{children:"Type"})," \u3067\u3059\u30023\u3064\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u3046\u30611\u3064\u3092\u9078\u629e\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Static"})," \u3053\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306f\u79fb\u52d5\u3057\u307e\u305b\u3093\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Dynamic"})," \u3053\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306f\u3001\u305d\u308c\u306b\u9069\u7528\u3059\u308b\u91cd\u529b\u3084\u4ed6\u306e\u529b\u306e\u4e0b\u3067\u79fb\u52d5\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Kinematic"})," \u3053\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306f\u529b\u306b\u53cd\u5fdc\u3057\u306a\u3044\u304c\u3001\u76f4\u63a5\u4f4d\u7f6e\u3084\u901f\u5ea6\u3092\u8a2d\u5b9a\u3059\u308b\u3068\u79fb\u52d5\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5730\u9762\u306e\u8a2d\u5b9a",children:"\u5730\u9762\u306e\u8a2d\u5b9a"}),"\n",(0,s.jsx)(n.p,{children:"\u6700\u521d\u306b\u5fc5\u8981\u306a\u306e\u306f\u3001\u5730\u9762\u3092\u5f62\u6210\u3059\u308b\u7dd1\u8272\u306e\u30d6\u30ed\u30c3\u30af\u3067\u3059\u3002"}),"\n",(0,s.jsx)("img",{loading:"lazy",src:"/images/tutorials/collision/ground_setup.png",width:"300"}),"\n",(0,s.jsxs)(n.p,{children:["\u5c5e\u6027\u30d1\u30cd\u30eb\u3067\u3001",(0,s.jsx)(n.em,{children:"render"}),"\u3001",(0,s.jsx)(n.em,{children:"collision"}),"\u3001",(0,s.jsx)(n.em,{children:"rigidbody"}),"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u6301\u3064\u306e\u304c\u898b\u3048\u307e\u3059\u3002\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3068",(0,s.jsx)(n.em,{children:"collision"}),"\u5168\u4f53\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u5897\u3084\u3057\u3066\u3044\u307e\u3059\u3002\u307e\u305f\u3001\u6469\u64e6\u529b\u3068\u53cd\u767a\u529b\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3082\u308f\u305a\u304b\u306b\u5897\u52a0\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u8868\u9762\u304c\u30c7\u30d5\u30a9\u30eb\u30c8\u3088\u308a\u3082\u3084\u3084\u7c97\u304f\u3001\u3084\u3084\u5f3e\u529b\u6027\u304c\u3042\u308b\u72b6\u614b\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u30c8\u30ea\u30ac\u30fc\u306e\u8a2d\u5b9a",children:"\u30c8\u30ea\u30ac\u30fc\u306e\u8a2d\u5b9a"}),"\n",(0,s.jsx)(n.p,{children:"\u6b21\u306b\u5fc5\u8981\u306a\u306e\u306f\u30c8\u30ea\u30ac\u30fc\u3067\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"/images/tutorials/collision/trigger_setup.jpg",alt:"Trigger Entity"})}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306b\u306f",(0,s.jsx)(n.em,{children:"collision"}),"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u3042\u308a\u307e\u3059\u304c\u3001",(0,s.jsx)(n.em,{children:"rigidbody"}),"\u304c\u306a\u3044\u305f\u3081\u30c8\u30ea\u30ac\u30fc\u3068\u3057\u3066\u6a5f\u80fd\u3057\u307e\u3059\u3002\u30c8\u30ea\u30ac\u30fcEntity\u306b\u306f\u3001\u30b3\u30fc\u30c9\u304c\u6dfb\u4ed8\u3055\u308c\u305f",(0,s.jsx)(n.em,{children:"script"}),"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3082\u3042\u308a\u307e\u3059\u3002\u30c8\u30ea\u30ac\u30fc\u306f\u3001\u30c8\u30ea\u30ac\u30fc\u304c\u30a2\u30af\u30c6\u30a3\u30d6\u306b\u306a\u3063\u305f\u3068\u304d\u306b\u4f55\u304b\u304c\u8d77\u3053\u308b\u5834\u5408\u306e\u307f\u6709\u7528\u3067\u3042\u308b\u305f\u3081\u3001\u30c8\u30ea\u30ac\u30fc\u304c\u30a2\u30af\u30c6\u30a3\u30d6\u306b\u306a\u3063\u305f\u3068\u304d\u306bf\u97f3\u58f0\u52b9\u679c\u304c\u518d\u751f\u3055\u308c\u308b\u3088\u3046\u306b\u3001\u3044\u304f\u3064\u304b\u306e\u30b3\u30fc\u30c9\u3092\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"var Trigger = pc.createScript('trigger');\n\n// initialize code called once per entity\nTrigger.prototype.initialize = function() {\n    this.entity.collision.on('triggerenter', this.onTriggerEnter, this);\n};\n\nTrigger.prototype.onTriggerEnter = function(entity) {\n    entity.rigidbody.linearVelocity = pc.Vec3.ZERO;\n    entity.rigidbody.angularVelocity = pc.Vec3.ZERO;\n    // Reset back to roughly the position the entity started in.\n    var position = entity.getPosition();\n    entity.rigidbody.teleport(position.x, 10, 0);\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4e0b\u8a18\u306e\u30b3\u30fc\u30c9\u306b\u306f2\u3064\u306e\u91cd\u8981\u306a\u30d1\u30fc\u30c8\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"initialize"})," \u30e1\u30bd\u30c3\u30c9\u3067\u306f\u3001",(0,s.jsx)(n.strong,{children:"triggerenter"})," \u30a4\u30d9\u30f3\u30c8\u306e\u30ea\u30b9\u30cb\u30f3\u30b0\u3092\u958b\u59cb\u3057\u307e\u3059\u3002\u3053\u306e\u30a4\u30d9\u30f3\u30c8\u306f\u3001\u525b\u4f53\u304c\u30c8\u30ea\u30ac\u30fc\u30dc\u30ea\u30e5\u30fc\u30e0\u306b\u5165\u3063\u305f\u3068\u304d\u306b\u4e00\u5ea6\u3060\u3051\u30c8\u30ea\u30ac\u30fc\u3055\u308c\u307e\u3059\u3002\u30c8\u30ea\u30ac\u30fc\u30dc\u30ea\u30e5\u30fc\u30e0\u306f\u3001\u30b3\u30ea\u30b8\u30e7\u30f3\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u6301\u3064\u304c\u525b\u4f53\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u6301\u305f\u306a\u3044\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u6307\u3057\u307e\u3059\u3002\u5bfe\u5fdc\u3059\u308b\u30a4\u30d9\u30f3\u30c8\u306f ",(0,s.jsx)(n.strong,{children:"triggerleave"})," \u3067\u3042\u308a\u3001\u4fb5\u5165\u3057\u3066\u3044\u305f\u525b\u4f53\u304c\u30c8\u30ea\u30ac\u30fc\u30dc\u30ea\u30e5\u30fc\u30e0\u304b\u3089\u96e2\u308c\u305f\u3068\u304d\u306b\u4e00\u5ea6\u3060\u3051\u767a\u706b\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"this.entity.collision.on('triggerenter', this.onTriggerEnter, this);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3001\u4e09\u756a\u76ee\u306e\u5f15\u6570\u306e ",(0,s.jsx)(n.code,{children:"this"})," \u306f\u3001\u30a4\u30d9\u30f3\u30c8\u30ea\u30b9\u30ca\u30fc\u3067\u4f7f\u7528\u3055\u308c\u308b\u300c\u30b9\u30b3\u30fc\u30d7\u300d\u3092\u8868\u3057\u307e\u3059\u3002\u901a\u5e38\u3001\u73fe\u5728\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4e09\u756a\u76ee\u306e\u5f15\u6570\u3068\u3057\u3066\u8ffd\u52a0\u3059\u308b\u3053\u3068\u3067\u3001\u30a4\u30d9\u30f3\u30c8\u30ea\u30b9\u30ca\u30fc\u5185\u306e ",(0,s.jsx)(n.code,{children:"this"})," \u306e\u5024\u304c\u540c\u3058\u30b9\u30af\u30ea\u30d7\u30c8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u53c2\u7167\u3059\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u306e\u30b3\u30fc\u30c9\u306e2\u756a\u76ee\u306e\u90e8\u5206\u306f\u3001\u30a4\u30d9\u30f3\u30c8\u3092\u51e6\u7406\u3059\u308b\u95a2\u6570\u3067\u3042\u308a\u3001 ",(0,s.jsx)(n.code,{children:"onTriggerEnter"})," \u3067\u3059\u3002\u30c8\u30ea\u30ac\u30fc\u304c\u5165\u529b\u3055\u308c\u308b\u3068\u3001\u3053\u306e\u95a2\u6570\u304c\u547c\u3073\u51fa\u3055\u308c\u3001\u30c8\u30ea\u30ac\u30fc\u30dc\u30ea\u30e5\u30fc\u30e0\u306b\u5165\u308b",(0,s.jsx)(n.a,{href:"/api/pc.Entity.html",children:(0,s.jsx)(n.code,{children:"Entity"})}),"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u6e21\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u306e\u5834\u5408\u3001\u30c8\u30ea\u30ac\u30fc\u304c\u767a\u706b\u3057\u305f\u3068\u304d\u306b\u3001\u8cab\u901a\u3059\u308b\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u30b9\u30bf\u30fc\u30c8\u5730\u70b9\u306b\u30ea\u30bb\u30c3\u30c8\u3057\u3001\u305d\u306e\u901f\u5ea6\u3092\u30ea\u30bb\u30c3\u30c8\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"rigidbody-1",children:"RigidBody"}),"\n",(0,s.jsxs)(n.p,{children:["\u5730\u9762\u3092 ",(0,s.jsx)(n.strong,{children:"Static"})," \u306b\u8a2d\u5b9a\u3057\u307e\u3057\u305f\u3002\u6b21\u306b\u3001\u843d\u4e0b\u3059\u308b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u3001\u305d\u308c\u3089\u304c ",(0,s.jsx)(n.strong,{children:"Dynamic"})," \u3067\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)("img",{loading:"lazy",src:"/images/tutorials/collision/box_setup.png",width:"300"}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u308c\u306f\u3001\u30dc\u30c3\u30af\u30b9\u306e ",(0,s.jsx)(n.em,{children:"rigidbody"})," \u3068 ",(0,s.jsx)(n.em,{children:"collision"})," \u306e\u8a2d\u5b9a\u3067\u3059\u3002\u7403\u4f53\u3068\u30ab\u30d7\u30bb\u30eb\u3082\u540c\u3058\u3088\u3046\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u885d\u7a81\u30a4\u30d9\u30f3\u30c8-contact-events",children:"\u885d\u7a81\u30a4\u30d9\u30f3\u30c8 (Contact Events)"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"collision"}),"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u306f3\u3064\u306e\u30a4\u30d9\u30f3\u30c8\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"contact"})," 2\u3064\u306eRigidBody\u304c\u89e6\u308c\u305f\u3068\u304d\u306b\u767a\u751f\u3059\u308b\u305d\u308c\u305e\u308c\u306e\u63a5\u89e6\u70b9\u306e\u305f\u3081\u306b\u767a\u751f\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"collisionstart"})," 2\u3064\u306eRigidBody\u304c\u63a5\u89e6\u3057\u3066\u6700\u521d\u306b\u767a\u751f\u3059\u308b\u3068\u304d\u306b\u767a\u751f\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"collisionend"})," 2\u3064\u306eRigidBody\u304c\u5206\u96e2\u3059\u308b\u3068\u304d\u306b\u767a\u751f\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"contact"}),"\u3068",(0,s.jsx)(n.strong,{children:"collisionstart"}),"\u306e\u9055\u3044\u306f\u5fae\u5999\u3067\u3059\u304c\u91cd\u8981\u3067\u3059\u3002\u5e73\u9762\u306b\u5bfe\u3057\u3066\u89d2\u5ea6\u3092\u6301\u3063\u305f\u7acb\u65b9\u4f53\u304c\u7740\u5730\u3059\u308b\u5834\u5408\u3092\u60f3\u50cf\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002\u7acb\u65b9\u4f53\u306e\u8fba\u304c\u5e73\u9762\u306b\u89e6\u308c\u308b\u77ac\u9593\u3001\u7acb\u65b9\u4f53\u306e2\u3064\u306e\u89d2\u304c\u540c\u6642\u306b\u63a5\u89e6\u3057\u307e\u3059\u3002\u3053\u306e\u5834\u5408\u30013\u3064\u306e\u30a4\u30d9\u30f3\u30c8\u304c\u767a\u751f\u3057\u307e\u3059\u3002\u7acb\u65b9\u4f53\u306e\u5404\u89d2\u306b\u5bfe\u3057\u30662\u3064\u306e",(0,s.jsx)(n.strong,{children:"contact"}),"\u30a4\u30d9\u30f3\u30c8\u30681\u3064\u306e",(0,s.jsx)(n.strong,{children:"collisionstart"}),"\u30a4\u30d9\u30f3\u30c8\u3067\u3059\u3002\u7acb\u65b9\u4f53\u304c\u56de\u8ee2\u3057\u7d9a\u3051\u3066\u843d\u3061\u308b\u9593\u3001\u305d\u306e\u307e\u307e\u5e73\u9762\u3068\u63a5\u89e6\u3057\u7d9a\u3051\u307e\u3059\u3002\u6700\u7d42\u7684\u306b\u5e73\u9762\u306b\u5e73\u3089\u306b\u7740\u5730\u3057\u305f\u3068\u304d\u3001\u7acb\u65b9\u4f53\u306e\u8fba\u304c\u5e73\u9762\u306b\u63a5\u89e6\u3059\u308b\u305f\u3081\u306b\u3055\u3089\u306b2\u3064\u306e",(0,s.jsx)(n.strong,{children:"contact"}),"\u30a4\u30d9\u30f3\u30c8\u304c\u767a\u751f\u3057\u307e\u3059\u3002\u305f\u3060\u3057\u3001\u7acb\u65b9\u4f53\u306f\u305d\u306e\u9593\u305a\u3063\u3068\u5e73\u9762\u3068\u63a5\u89e6\u3057\u7d9a\u3051\u3066\u3044\u308b\u305f\u3081\u3001\u8ffd\u52a0\u306e",(0,s.jsx)(n.strong,{children:"collisionstart"}),"\u30a4\u30d9\u30f3\u30c8\u306f\u767a\u751f\u3057\u307e\u305b\u3093\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4e21\u65b9\u306e\u30a4\u30d9\u30f3\u30c8\u306f\u6709\u7528\u3067\u3059\u304c\u3001\u3053\u306e\u30c7\u30e2\u3067\u306f ",(0,s.jsx)(n.strong,{children:"collisionstart"})," \u30a4\u30d9\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3001\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u5730\u9762\u306b\u885d\u7a81\u3057\u305f\u3068\u304d\u306b\u518d\u751f\u3055\u308c\u308b\u52b9\u679c\u97f3\u3092\u30c8\u30ea\u30ac\u30fc\u3057\u307e\u3059\u3002\u4ee5\u4e0b\u306b\u30b3\u30fc\u30c9\u3092\u793a\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"var Collider = pc.createScript('collider');\n\n// initialize code called once per entity\nCollider.prototype.initialize = function () {\n    this.entity.collision.on('collisionstart', this.onCollisionStart, this);\n};\n\nCollider.prototype.onCollisionStart = function (result) {\n    if (result.other.rigidbody) {\n        this.entity.sound.play(\"hit\");\n    }\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"initialize"})," \u30e1\u30bd\u30c3\u30c9\u3067\u306f\u3001\u30a4\u30d9\u30f3\u30c8\u30ea\u30b9\u30ca\u30fc\u3092\u8a2d\u5b9a\u3057\u3001\u305d\u306e\u5f8c\u3001\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9\u30fc\u3067\u4ed6\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u304c ",(0,s.jsx)(n.strong,{children:"rigidbody"}),' \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u6301\u3063\u3066\u3044\u308b\u304b\u3069\u3046\u304b\u3092\u30c1\u30a7\u30c3\u30af\u3057\u307e\u3059\uff08\u3053\u308c\u306f\u30c8\u30ea\u30ac\u30fc\u30dc\u30ea\u30e5\u30fc\u30e0\u306b\u5165\u3063\u305f\u3068\u304d\u306b\u30b5\u30a6\u30f3\u30c9\u304c\u518d\u751f\u3055\u308c\u308b\u306e\u3092\u907f\u3051\u308b\u305f\u3081\u3067\u3059\uff09\u3002\u305d\u3057\u3066\u3001"hit" \u30b5\u30a6\u30f3\u30c9\u30a8\u30d5\u30a7\u30af\u30c8\u3092\u518d\u751f\u3057\u307e\u3059\u3002\u3057\u305f\u304c\u3063\u3066\u3001\u30b3\u30e9\u30a4\u30c0\u30fc\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u30a2\u30bf\u30c3\u30c1\u3055\u308c\u305f\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u304c\u4ed6\u306e\u525b\u4f53\u3068\u885d\u7a81\u3059\u308b\u305f\u3073\u306b\u3001\u30d2\u30c3\u30c8\u97f3\u304c\u518d\u751f\u3055\u308c\u307e\u3059\u3002']}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5\u4e0a\u304cPlayCanvas\u3067\u306e\u885d\u7a81\u3068\u30c8\u30ea\u30ac\u30fc\u306e\u51e6\u7406\u65b9\u6cd5\u3067\u3059\u3002"})]})}function h(i={}){const{wrapper:n}={...(0,l.a)(),...i.components};return n?(0,s.jsx)(n,{...i,children:(0,s.jsx)(a,{...i})}):a(i)}},11151:(i,n,e)=>{e.d(n,{Z:()=>o,a:()=>t});var s=e(67294);const l={},r=s.createContext(l);function t(i){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof i?i(n):{...n,...i}}),[n,i])}function o(i){let n;return n=i.disableParentContext?"function"==typeof i.components?i.components(l):i.components||l:t(i.components),s.createElement(r.Provider,{value:n},i.children)}}}]);