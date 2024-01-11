"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[4615],{86372:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>r,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=s(85893),n=s(11151);const i={title:"Preloading and Streaming",sidebar_position:3},o=void 0,l={id:"user-manual/assets/preloading-and-streaming",title:"Preloading and Streaming",description:"On the web, it's critical to get users into your application as soon as possible after they load the page. Presenting a loading bar and asking people to wait will lead to visitors leaving the page before your application has even got started. The PlayCanvas asset system implements a number of features to help you streamline the loading process and get your application running as fast as possible.",source:"@site/docs/user-manual/assets/preloading-and-streaming.md",sourceDirName:"user-manual/assets",slug:"/user-manual/assets/preloading-and-streaming",permalink:"/developer.playcanvas.com/user-manual/assets/preloading-and-streaming",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/assets/preloading-and-streaming.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Preloading and Streaming",sidebar_position:3},sidebar:"userManualSidebar",previous:{title:"Import Hierarchy",permalink:"/developer.playcanvas.com/user-manual/assets/import-pipeline/import-hierarchy"},next:{title:"Animation",permalink:"/developer.playcanvas.com/user-manual/assets/animation"}},r={},d=[{value:"Preload",id:"preload",level:2},{value:"Streaming",id:"streaming",level:2},{value:"When are assets loaded?",id:"when-are-assets-loaded",level:2},{value:"Asset Tags",id:"asset-tags",level:2}];function p(e){const a={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"On the web, it's critical to get users into your application as soon as possible after they load the page. Presenting a loading bar and asking people to wait will lead to visitors leaving the page before your application has even got started. The PlayCanvas asset system implements a number of features to help you streamline the loading process and get your application running as fast as possible."}),"\n",(0,t.jsx)(a.h2,{id:"preload",children:"Preload"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{src:"/images/user-manual/assets/preloading-and-streaming/asset-properties.jpg",alt:"Asset Properties"})}),"\n",(0,t.jsxs)(a.p,{children:["Every asset in your project has a property called ",(0,t.jsx)(a.code,{children:"preload"}),". By default this is set to true. If an asset is marked as preload it will be downloaded and created before the initialize phase of your application begins."]}),"\n",(0,t.jsx)(a.p,{children:"You should use preloading to make sure all the assets you need at the start of your application are present. This will prevent any assets from 'popping' in after the application begins."}),"\n",(0,t.jsx)(a.h2,{id:"streaming",children:"Streaming"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{src:"/images/user-manual/assets/preloading-and-streaming/streaming.gif",alt:"Streaming"})}),"\n",(0,t.jsx)(a.p,{children:"If an Entity in your scene and references an asset, then a loading request will be initiated when the Entity is enabled. If the Entity is enabled in the scene, then this request is made as soon as the application starts."}),"\n",(0,t.jsx)(a.p,{children:'All components will gracefully handle dynamically loading assets and will start operating as normal, once the asset is loaded. When streaming assets in dynamically like this, you will often see "popup". As a model will appear as soon as it is loaded, even if it doesn\'t have materials or textures yet.'}),"\n",(0,t.jsx)(a.h2,{id:"when-are-assets-loaded",children:"When are assets loaded?"}),"\n",(0,t.jsx)(a.p,{children:"You can determine when a particular asset will be loaded you can follow these rules."}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["If ",(0,t.jsx)(a.code,{children:"preload = true"})," the asset will be loaded before the application starts. Otherwise:"]}),"\n",(0,t.jsx)(a.li,{children:"If the asset is referenced by a component that is enabled on an entity that is enabled and in the scene hierarchy then it will be loaded. The asset is loaded at the time the entity or component is enabled or when the asset is assigned to the component. For entities that are enabled in the Editor, this will occur as soon as the application starts just after preloading has finished. A component is defined as enabled if it is enabled and all entities in the hierarchy above it are enabled."}),"\n",(0,t.jsx)(a.li,{children:"If the asset is referenced by another asset that is loaded then it will be loaded. e.g. If a model is loaded and references a material, the material will be loaded, if the material references a texture the texture will be loaded."}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"asset-tags",children:"Asset Tags"}),"\n",(0,t.jsx)(a.p,{children:"In many cases, you don't wish assets to \"popup\" as they load. It's preferable to load a set of assets and then display them. To do this, you can use Asset Tags to create groups of assets. Then you can load all assets with a particular tag before using them."}),"\n",(0,t.jsx)(a.p,{children:"Here is some example javascript which shows you how you might load a set of assets using a tag."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-javascript",children:'var assets = this.app.assets.findByTag("level-1");\nvar count = 0;\n\nfor (var i = 0; i < assets.length; i++) {\n    assets[i].once("load", function () {\n        count++;\n        if (count === assets.length) {\n            // asset loading complete\n        }\n    });\n    this.app.assets.load(assets[i]);\n}\n'})})]})}function c(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11151:(e,a,s)=>{s.d(a,{Z:()=>l,a:()=>o});var t=s(67294);const n={},i=t.createContext(n);function o(e){const a=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(i.Provider,{value:a},e.children)}}}]);