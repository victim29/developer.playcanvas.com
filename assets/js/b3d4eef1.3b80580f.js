"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[4557],{4551:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=t(85893),r=t(11151);const i={title:"Model",sidebar_position:11},o=void 0,l={id:"user-manual/packs/components/model",title:"Model",description:"The Model component enables an entity to render a primitive shape or a model asset.",source:"@site/docs/user-manual/packs/components/model.md",sourceDirName:"user-manual/packs/components",slug:"/user-manual/packs/components/model",permalink:"/developer.playcanvas.com/user-manual/packs/components/model",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/packs/components/model.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Model",sidebar_position:11},sidebar:"userManualSidebar",previous:{title:"Light",permalink:"/developer.playcanvas.com/user-manual/packs/components/light"},next:{title:"Particle System",permalink:"/developer.playcanvas.com/user-manual/packs/components/particlesystem"}},a={},d=[{value:"Properties",id:"properties",level:2},{value:"Scripting Interface",id:"scripting-interface",level:2},{value:"Customizing Materials",id:"customizing-materials",level:2}];function c(e){const n={a:"a",h2:"h2",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The Model component enables an entity to render a primitive shape or a model asset."}),"\n",(0,s.jsx)(n.p,{children:"The Model component can be enabled or disabled using the toggle in the top right of the component panel. If enabled, the model will be added to the scene and rendered."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"/images/user-manual/scenes/components/component-model.png",alt:"Model component"})}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsxs)(n.td,{children:["The type of the model to be rendered. Can be: ",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Asset"}),(0,s.jsx)("li",{children:"Box"}),(0,s.jsx)("li",{children:"Capsule"}),(0,s.jsx)("li",{children:"Cone"}),(0,s.jsx)("li",{children:"Cylinder"}),(0,s.jsx)("li",{children:"Plane"}),(0,s.jsx)("li",{children:"Sphere"})]})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Asset"}),(0,s.jsx)(n.td,{children:"The model asset rendered by this model component. Only applies to models of type 'asset'. Only a single model can be rendered per model component."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Cast Shadows"}),(0,s.jsx)(n.td,{children:"If enabled, the model rendered by this component will cast shadows onto other models in the scene."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Cast Lightmap Shadows"}),(0,s.jsx)(n.td,{children:"If enabled, the model rendered by this component will cast shadows into lightmaps."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Receive Shadows"}),(0,s.jsx)(n.td,{children:"If enabled, the model rendered by this component will receive shadows cast by other models in the scene."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Static"}),(0,s.jsx)(n.td,{children:"If the model never moves, check this box as a hint to the engine to make certain optimizations."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Lightmapped"}),(0,s.jsx)(n.td,{children:"If enabled, this model does not receive lighting from dynamic lights. Instead it receives lighting generated by lightmap lights."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Batch Group"}),(0,s.jsxs)(n.td,{children:["The Batch Group that this model belongs to. More on Batching ",(0,s.jsx)(n.a,{href:"/user-manual/graphics/advanced-rendering/batching",children:"here"}),"."]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"scripting-interface",children:"Scripting Interface"}),"\n",(0,s.jsxs)(n.p,{children:["You can control a Model component's properties using a ",(0,s.jsx)(n.a,{href:"/user-manual/packs/components/script",children:"script component"}),". The Model component's scripting interface is ",(0,s.jsx)(n.a,{href:"/api/pc.ModelComponent.html",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"customizing-materials",children:"Customizing Materials"}),"\n",(0,s.jsxs)(n.p,{children:["You can learn how to customize the materials of your model ",(0,s.jsx)(n.a,{href:"/user-manual/assets/materials/#assigning-materials",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var s=t(67294);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);