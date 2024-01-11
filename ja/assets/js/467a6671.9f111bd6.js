"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[9387],{79341:(i,n,e)=>{e.r(n),e.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>t,toc:()=>d});var s=e(85893),a=e(11151);const c={title:"\u7269\u7406\u306e\u57fa\u672c",layout:"usermanual-page.hbs",sidebar_position:1},l=void 0,t={id:"user-manual/physics/physics-basics",title:"\u7269\u7406\u306e\u57fa\u672c",description:"PlayCanvas\u306b\u306f\u3001ammo.js\u3068\u3044\u3046\u975e\u5e38\u306b\u5f37\u529b\u306a\u7269\u7406\u30a8\u30f3\u30b8\u30f3\u304c\u7d44\u307f\u8fbc\u307e\u308c\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u306eC++ Bullet\u7269\u7406\u30a8\u30f3\u30b8\u30f3\u306e\u30d6\u30e9\u30a6\u30b6\u30dd\u30fc\u30c8\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/physics/physics-basics.md",sourceDirName:"user-manual/physics",slug:"/user-manual/physics/physics-basics",permalink:"/developer.playcanvas.com/ja/user-manual/physics/physics-basics",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/physics/physics-basics.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u7269\u7406\u306e\u57fa\u672c",layout:"usermanual-page.hbs",sidebar_position:1},sidebar:"userManualSidebar",previous:{title:"\u7269\u7406\u6f14\u7b97",permalink:"/developer.playcanvas.com/ja/user-manual/physics/"},next:{title:"\u529b\u3068\u885d\u6483",permalink:"/developer.playcanvas.com/ja/user-manual/physics/forces-and-impulses"}},r={},d=[{value:"\u7269\u7406\u3092\u6709\u52b9\u5316",id:"\u7269\u7406\u3092\u6709\u52b9\u5316",level:2},{value:"\u91cd\u529b",id:"\u91cd\u529b",level:2},{value:"\u6e2c\u5b9a\u306e\u5358\u4f4d",id:"\u6e2c\u5b9a\u306e\u5358\u4f4d",level:2},{value:"RigidBody",id:"rigidbody",level:2},{value:"Static\u306a\u30b0\u30e9\u30a6\u30f3\u30c9\u306e\u4f5c\u6210",id:"static\u306a\u30b0\u30e9\u30a6\u30f3\u30c9\u306e\u4f5c\u6210",level:2},{value:"Dynamic\u30dc\u30c7\u30a3\u306e\u4f5c\u6210",id:"dynamic\u30dc\u30c7\u30a3\u306e\u4f5c\u6210",level:2},{value:"Kinematic\u30dc\u30c7\u30a3\u306e\u4f5c\u6210",id:"kinematic\u30dc\u30c7\u30a3\u306e\u4f5c\u6210",level:2},{value:"Dynamic\u30dc\u30c7\u30a3\u306e\u30c6\u30ec\u30dd\u30fc\u30c8",id:"dynamic\u30dc\u30c7\u30a3\u306e\u30c6\u30ec\u30dd\u30fc\u30c8",level:2}];function o(i){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...i.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["PlayCanvas\u306b\u306f\u3001",(0,s.jsx)(n.a,{href:"https://github.com/kripken/ammo.js",children:"ammo.js"}),"\u3068\u3044\u3046\u975e\u5e38\u306b\u5f37\u529b\u306a\u7269\u7406\u30a8\u30f3\u30b8\u30f3\u304c\u7d44\u307f\u8fbc\u307e\u308c\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u306eC++ Bullet\u7269\u7406\u30a8\u30f3\u30b8\u30f3\u306e\u30d6\u30e9\u30a6\u30b6\u30dd\u30fc\u30c8\u3067\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["PlayCanvas\u306b\u306f\u3001\u7269\u7406\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b\u305f\u3081\u306e",(0,s.jsx)(n.a,{href:"/user-manual/packs/components/rigidbody/",children:"RigidBody"})," \u304a\u3088\u3073",(0,s.jsx)(n.a,{href:"/user-manual/packs/components/collision/",children:"Collision"})," \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u7269\u7406\u3092\u6709\u52b9\u5316",children:"\u7269\u7406\u3092\u6709\u52b9\u5316"}),"\n",(0,s.jsx)(n.p,{children:"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u65b0\u3057\u3044PlayCanvas\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u306fammo.js\u30e2\u30b8\u30e5\u30fc\u30eb\u306f\u542b\u307e\u308c\u307e\u305b\u3093\u3002\u3053\u308c\u306f\u3001ammo.js\u304c\u6570\u767e\u30ad\u30ed\u30d0\u30a4\u30c8\u3042\u308a\u3001\u30a2\u30d7\u30ea\u304c\u3053\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u5fc5\u8981\u3068\u3057\u306a\u3044\u5834\u5408\u306f\u8aad\u307f\u8fbc\u3080\u5fc5\u8981\u304c\u306a\u3044\u305f\u3081\u3067\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:"Scene Settings\u30d1\u30cd\u30eb\u306e\u30a4\u30f3\u30dd\u30fc\u30c8\u30dc\u30bf\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3001ammo.js\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30a4\u30f3\u30dd\u30fc\u30c8\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"/images/user-manual/physics/physics-settings.png",alt:"Physics Settings"})}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u308c\u306b\u3088\u308a\u3001PlayCanvas\u304c\u63d0\u4f9b\u3059\u308bammo.js\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u30d3\u30eb\u30c9\u304c\u30a4\u30f3\u30dd\u30fc\u30c8\u3055\u308c\u307e\u3059\u3002\u72ec\u81ea\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306eammo.js\u3092\u30b3\u30f3\u30d1\u30a4\u30eb\u3057\u3001\u4ee3\u308f\u308a\u306b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u8ffd\u52a0\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u8a73\u7d30\u306f\u3001",(0,s.jsx)(n.a,{href:"/user-manual/assets/wasm-modules/",children:"\u3053\u306e\u30da\u30fc\u30b8"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5f93\u6765\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u6700\u65b0\u306eammo.js\u306b\u79fb\u884c\u3059\u308b\u65b9\u6cd5\u306e\u8a73\u7d30\u306f\u3001 ",(0,s.jsx)(n.a,{href:"/user-manual/physics/physics-migration/",children:"\u3053\u306e\u30da\u30fc\u30b8"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u91cd\u529b",children:"\u91cd\u529b"}),"\n",(0,s.jsx)(n.p,{children:"\u540c\u3058\u8a2d\u5b9a\u30d1\u30cd\u30eb\u3067\u3001\u7269\u7406\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u306e\u30b0\u30ed\u30fc\u30d0\u30eb\u306a\u91cd\u529b\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002\u91cd\u529b\u306f\u30b7\u30fc\u30f3\u5185\u306e\u3059\u3079\u3066\u306eRigidBody\u306b\u9069\u7528\u3055\u308c\u308b\u4e00\u5b9a\u306e\u529b\u3067\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u30ef\u30fc\u30eb\u30c9\u306e\u8ca0\u306eY\u8ef8\u306b-9.81\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059(\u3064\u307e\u308a\u3001\u76f4\u4e0b)\u3002\u3053\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u306f\u3001\u5730\u7403\u306e\u91cd\u529b\u306b\u8fd1\u3044\u5024\u3067\u3059\u3002\u3053\u306e\u5024\u3092\u5897\u6e1b\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u5b87\u5b99\u8a2d\u5b9a\u306e\u30b2\u30fc\u30e0\u3067\u306f\u91cd\u529b\u3092\u30bc\u30ed\u306b\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u6e2c\u5b9a\u306e\u5358\u4f4d",children:"\u6e2c\u5b9a\u306e\u5358\u4f4d"}),"\n",(0,s.jsx)(n.p,{children:"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001PlayCanvas\u7269\u7406\u30a8\u30f3\u30b8\u30f3\u306f1\u30e1\u30fc\u30c8\u30eb\u30921 unit\uff08\u5358\u4f4d\uff09\u3068\u3057\u3066\u3044\u307e\u3059\u3002\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u7269\u7406\u7684\u306b\u6b63\u78ba\u306a\u901f\u5ea6\u3067\u843d\u4e0b\u3055\u305b\u308b\u306b\u306f\u3001\u30b7\u30fc\u30f3\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30b5\u30a4\u30ba\u304c\u9069\u5207\u3067\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u305f\u3068\u3048\u3070\u3001\u9ad8\u30551.8m\u306e\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u304c\u30b2\u30fc\u30e0\u306b\u767b\u5834\u3059\u308b\u5834\u5408\u3001\u30a8\u30c7\u30a3\u30bf\u30fc\u306e3D\u30d3\u30e5\u30fc\u3067\u306e\u9ad8\u3055\u306f1.8\u30e6\u30cb\u30c3\u30c8\u3067\u3042\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"rigidbody",children:"RigidBody"}),"\n",(0,s.jsx)(n.p,{children:"\u30b7\u30fc\u30f3\u5185\u306e\u4efb\u610f\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u7269\u7406\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u306b\u53c2\u52a0\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002RigidBody\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3068Collision\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u8ffd\u52a0\u3059\u308b\u3060\u3051\u3067\u3059\u3002RigidBody\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u30bf\u30a4\u30d7\u3092\u6307\u5b9a\u3057\u307e\u3059\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Static - \u79fb\u52d5\u3057\u306a\u3044\u7269\u7406\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),"\n",(0,s.jsx)(n.li,{children:"Dynamic - \u9069\u7528\u3055\u308c\u305f\u529b\u306b\u5fdc\u3058\u3066\u79fb\u52d5\u3059\u308b\u7269\u7406\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),"\n",(0,s.jsx)(n.li,{children:"Kinematic - API\u3092\u4ecb\u3057\u3066\u660e\u793a\u7684\u306b\u306e\u307f\u914d\u7f6e\u3067\u304d\u308b\u7269\u7406\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u307e\u305f\u3001\u8cea\u91cf\u3001\u6469\u64e6\u3001\u53cd\u767a\u306a\u3069\u306e\u7269\u7406\u7684\u30d7\u30ed\u30d1\u30c6\u30a3\u3082\u6307\u5b9a\u3055\u308c\u307e\u3059\uff08\u672c\u8cea\u7684\u306b\u300c\u5f3e\u529b\u6027\u300d\u306e\u8a08\u6e2c\uff09\u3002"}),"\n",(0,s.jsx)(n.p,{children:"Collision\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u3001\u30dc\u30c7\u30a3\u306e\u7269\u7406\u7684\u306a\u5f62\u72b6\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002RigidBody\u306e\u7269\u7406\u7684\u306a\u5f62\u72b6\u306f\u3001\u30b0\u30e9\u30d5\u30a3\u30ab\u30eb\u306a\u5f62\u72b6\u3068\u4e00\u81f4\u3057\u3066\u3044\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u4e00\u822c\u7684\u306b\u3001\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u7269\u7406\u7684\u306a\u8868\u73fe\u306f\u3001\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u3088\u308a\u3082\u306f\u308b\u304b\u306b\u5358\u7d14\u3067\u3059\u3002\u4f7f\u7528\u53ef\u80fd\u306aCollision\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30bf\u30a4\u30d7\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Box"}),"\n",(0,s.jsx)(n.li,{children:"Sphere"}),"\n",(0,s.jsx)(n.li,{children:"Capsule"}),"\n",(0,s.jsx)(n.li,{children:"Cylinder"}),"\n",(0,s.jsx)(n.li,{children:"Mesh"}),"\n",(0,s.jsx)(n.li,{children:"Cone"}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/user-manual/physics/compound-shapes/",children:"Compound"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"static\u306a\u30b0\u30e9\u30a6\u30f3\u30c9\u306e\u4f5c\u6210",children:"Static\u306a\u30b0\u30e9\u30a6\u30f3\u30c9\u306e\u4f5c\u6210"}),"\n",(0,s.jsx)(n.p,{children:"\u307b\u3068\u3093\u3069\u306e\u5834\u5408\u3001\u4f55\u3089\u304b\u306eStatic\u306a\u7269\u7406\u74b0\u5883\u3092\u4f5c\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u305f\u3068\u3048\u3070\u3001\u7af6\u99ac\u5834\u3084\u30b5\u30c3\u30ab\u30fc\u5834\u306a\u3069\u3067\u3059\u3002\u6700\u3082\u5358\u7d14\u306a\u4f8b\u306f\u5e73\u9762\u3067\u3059\u3002PlayCanvas\u306f\u5e73\u9762\u30bf\u30a4\u30d7\u306eCollision\u30d7\u30ea\u30df\u30c6\u30a3\u30d6\u3092\u516c\u958b\u3057\u307e\u305b\u3093\u304c\u3001\u30dc\u30c3\u30af\u30b9\u306e\u30d7\u30ea\u30df\u30c6\u30a3\u30d6\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002Static\u306aRigidBody\u3067\u3042\u308b1\u5358\u4f4d\u306e\u9ad8\u3055\u306e10x10\u30dc\u30c3\u30af\u30b9\u3092\u8a2d\u5b9a\u3059\u308b\u65b9\u6cd5\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"/images/user-manual/physics/static-ground.png",alt:"Static Ground"})}),"\n",(0,s.jsx)(n.p,{children:"\u3088\u308a\u8907\u96d1\u306a\u3082\u306e\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001Collision\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u30bf\u30a4\u30d7\u3092Mesh\u306b\u8a2d\u5b9a\u3057\u3001\u30e2\u30c7\u30eb\u30a2\u30bb\u30c3\u30c8\u3092\u5272\u308a\u5f53\u3066\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"dynamic\u30dc\u30c7\u30a3\u306e\u4f5c\u6210",children:"Dynamic\u30dc\u30c7\u30a3\u306e\u4f5c\u6210"}),"\n",(0,s.jsx)(n.p,{children:"\u7269\u7406\u306f\u52d5\u304d\u306b\u95a2\u9023\u3059\u308b\u3082\u306e\u3067\u3059\u3002Dynamic\u306aRigidBody\u3092\u4f5c\u6210\u3059\u308b\u3068\u3088\u308a\u9762\u767d\u304f\u306a\u308a\u307e\u3059\u3002Dynamic\u306a1x1x1\u30dc\u30c3\u30af\u30b9\u3092\u4f5c\u6210\u3057\u3066\u307f\u307e\u3057\u3087\u3046\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"/images/user-manual/physics/dynamic-box.png",alt:"Dynamic Box"})}),"\n",(0,s.jsx)(n.p,{children:"\u30dc\u30c3\u30af\u30b9\u306f\u3001Static\u306a\u5730\u9762\u3068\u885d\u7a81\u3057\u305f\u3068\u304d\u306b\u8208\u5473\u6df1\u3044\u65b9\u6cd5\u3067\u8df3\u306d\u8fd4\u308b\u3088\u3046\u306b\u56de\u8ee2\u3055\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"/images/user-manual/physics/falling-box.gif",alt:"Falling Box"})}),"\n",(0,s.jsx)(n.h2,{id:"kinematic\u30dc\u30c7\u30a3\u306e\u4f5c\u6210",children:"Kinematic\u30dc\u30c7\u30a3\u306e\u4f5c\u6210"}),"\n",(0,s.jsx)(n.p,{children:"\u5834\u5408\u306b\u3088\u3063\u3066\u306f\u3001\u30b7\u30fc\u30f3\u5185\u306e\u7269\u7406\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u52d5\u304d\u3092\u660e\u793a\u7684\u306b\u5236\u5fa1\u3057\u3001\u3053\u308c\u3089\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u4ed6\u306e\u7269\u7406\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u5bfe\u3057\u3066\u62b5\u6297\u3067\u304d\u306a\u3044\u529b\u3092\u767a\u63ee\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u3079\u304d\u3067\u3059\u3002\u305f\u3068\u3048\u3070\u3001\u30d7\u30ec\u30a4\u30e4\u30fc\u3092\u5225\u306e\u968e\u306b\u904b\u3076\u305f\u3081\u306e\u52d5\u304f\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3092\u4f5c\u308b\u3068\u3057\u307e\u3059\u3002\u3053\u308c\u3092\u5b9f\u73fe\u3059\u308b\u305f\u3081\u306b\u306f\u3001RigidBody\u306e\u30bf\u30a4\u30d7\u3092Kinematic\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002\u305d\u308c\u3067\u306f\u3001Kinematic\u30dc\u30c3\u30af\u30b9\u3092\u4f5c\u6210\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"/images/user-manual/physics/kinematic-box.png",alt:"Kinematic\u30dc\u30c3\u30af\u30b9"})}),"\n",(0,s.jsx)(n.p,{children:"Kinematic\u30dc\u30c7\u30a3\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5316\u304c\u81ea\u8eab\u3067\u884c\u3046\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u4e0a\u8a18\u306eKinematic\u30dc\u30c3\u30af\u30b9\u306b\u306f\u3001movement.js\u3068\u3044\u3046\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u5272\u308a\u5f53\u3066\u3089\u308c\u305f\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3082\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"var Movement = pc.createScript('movement');\n\n// initialize code called once per entity\nMovement.prototype.initialize = function() {\n\n};\n\n// update code called every frame\nMovement.prototype.update = function(dt) {\n    this.entity.setPosition(Math.sin(Date.now() / 1000), 0.5, 0);\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u306f\u3001\u6b63\u5f26\u95a2\u6570\u3092\u4f7f\u7528\u3057\u3066\u3001\u30ef\u30fc\u30eb\u30c9\u306eX\u8ef8\u306b\u6cbf\u3063\u3066\u30dc\u30c3\u30af\u30b9\u3092\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5316\u3057\u307e\u3059\u3002Kinematic\u30dc\u30c7\u30a3\u3092\u79fb\u52d5\u3059\u308b\u306b\u306f\u3001 ",(0,s.jsx)(n.code,{children:"setPosition"}),"\u3001",(0,s.jsx)(n.code,{children:" setRotation"}),"\u304a\u3088\u3073 ",(0,s.jsx)(n.code,{children:"setEulerAngles"}),"\u306e\u3088\u3046\u306a\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u4e0a\u306e\u6a19\u6e96\u306e\u5909\u63db\u95a2\u6570\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u30b7\u30fc\u30f3\u3092\u5b9f\u884c\u3059\u308b\u3068\u3001\u30c0\u30a4\u30ca\u30df\u30c3\u30af\u30dc\u30c3\u30af\u30b9\u304cKinematic\u30dc\u30c3\u30af\u30b9\u306e\u4e0a\u306b\u843d\u3061\u3001\u305d\u306e\u4e0a\u306b\u4e57\u3063\u305f\u307e\u307e\u904b\u3070\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"/images/user-manual/physics/kinematic-box.gif",alt:"Kinematic Box"})}),"\n",(0,s.jsx)(n.h2,{id:"dynamic\u30dc\u30c7\u30a3\u306e\u30c6\u30ec\u30dd\u30fc\u30c8",children:"Dynamic\u30dc\u30c7\u30a3\u306e\u30c6\u30ec\u30dd\u30fc\u30c8"}),"\n",(0,s.jsx)(n.p,{children:"Kinematic\u30dc\u30c7\u30a3\u3067\u6a19\u6e96\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u5909\u63db\u95a2\u6570\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304c\u3001\u30c0\u30a4\u30ca\u30df\u30c3\u30af\u30dc\u30c7\u30a3\u3067\u306f\u8a31\u53ef\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002DynamicRigidBody\u3092\u4f5c\u6210\u3059\u308b\u3068\u304d\u3001\u305d\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u4f4d\u7f6e\u3068\u65b9\u5411\u306e\u8a2d\u5b9a\u306f\u7269\u7406\u30a8\u30f3\u30b8\u30f3\u304c\u884c\u3046\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002\u3064\u307e\u308a\u3001pc.Entity API\u3092\u4f7f\u7528\u3057\u3066\u30b9\u30af\u30ea\u30d7\u30c8\u5185\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u4f4d\u7f6e\u307e\u305f\u306f\u65b9\u5411\u3092\u66f4\u65b0\u3057\u3088\u3046\u3068\u3059\u308b\u3068\u3001\u95a2\u6570\u306e\u52b9\u679c\u306f\u7121\u52b9\u306b\u306a\u308a\u307e\u3059\u3002\u4ee3\u308f\u308a\u306b\u3001RigidBody\u306e\u30c6\u30ec\u30dd\u30fc\u30c8\u6a5f\u80fd\u3092\u547c\u3073\u51fa\u3057\u3066\u3001RigidBody\u306e\u4f4d\u7f6e\u3084\u65b9\u5411\u3092\u77ac\u9593\u7684\u306b\u66f4\u65b0\u3059\u308b\u7269\u7406\u30a8\u30f3\u30b8\u30f3\u306b\u660e\u793a\u7684\u306b\u901a\u77e5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"})]})}function m(i={}){const{wrapper:n}={...(0,a.a)(),...i.components};return n?(0,s.jsx)(n,{...i,children:(0,s.jsx)(o,{...i})}):o(i)}},11151:(i,n,e)=>{e.d(n,{Z:()=>t,a:()=>l});var s=e(67294);const a={},c=s.createContext(a);function l(i){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof i?i(n):{...n,...i}}),[n,i])}function t(i){let n;return n=i.disableParentContext?"function"==typeof i.components?i.components(a):i.components||a:l(i.components),s.createElement(c.Provider,{value:n},i.children)}}}]);