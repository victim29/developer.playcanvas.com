"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[4850],{46526:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var s=t(74848),r=t(28453);const i={title:"Render"},o=void 0,c={id:"user-manual/scenes/components/render",title:"Render",description:"The render component enables an entity to render a primitive shape or a render asset.",source:"@site/docs/user-manual/scenes/components/render.md",sourceDirName:"user-manual/scenes/components",slug:"/user-manual/scenes/components/render",permalink:"/user-manual/scenes/components/render",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/scenes/components/render.md",tags:[],version:"current",frontMatter:{title:"Render"},sidebar:"userManualSidebar",previous:{title:"Particle System",permalink:"/user-manual/scenes/components/particlesystem"},next:{title:"Rigid Body",permalink:"/user-manual/scenes/components/rigidbody"}},d={},a=[{value:"Properties",id:"properties",level:2},{value:"Scripting Interface",id:"scripting-interface",level:2}];function l(e){const n={a:"a",h2:"h2",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The render component enables an entity to render a primitive shape or a render asset."}),"\n",(0,s.jsx)(n.p,{children:"The render component can be enabled or disabled using the toggle in the top right of the component panel. If enabled, the mesh instances referenced by the component will be added to the scene and rendered."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"/images/user-manual/scenes/components/component-render.png",alt:"Render component"})}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsxs)(n.td,{children:["The type of the graphical object to be rendered. Can be: ",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Asset"}),(0,s.jsx)("li",{children:"Box"}),(0,s.jsx)("li",{children:"Capsule"}),(0,s.jsx)("li",{children:"Cone"}),(0,s.jsx)("li",{children:"Cylinder"}),(0,s.jsx)("li",{children:"Plane"}),(0,s.jsx)("li",{children:"Sphere"})]})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Asset"}),(0,s.jsx)(n.td,{children:"The render asset to be rendered by this render component. Only applies the type property is set to 'Asset'. Only a single render asset can be assigned to a render component."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Cast Shadows"}),(0,s.jsx)(n.td,{children:"If enabled, the mesh instances rendered by this component will cast shadows onto other mesh instances in the scene."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Cast Lightmap Shadows"}),(0,s.jsx)(n.td,{children:"If enabled, the mesh instances rendered by this component will cast shadows into lightmaps."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Receive Shadows"}),(0,s.jsx)(n.td,{children:"If enabled, the mesh instances rendered by this component will receive shadows cast by other mesh instances in the scene."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Static"}),(0,s.jsx)(n.td,{children:"If the entity referencing this render component never moves, check this box as a hint to the engine to make certain optimizations."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Lightmapped"}),(0,s.jsx)(n.td,{children:"If enabled, this component's mesh instances do not receive lighting from dynamic lights. Instead they receive lighting generated by lightmap-baking lights."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Custom AABB"}),(0,s.jsx)(n.td,{children:"When enabled, a user provided bounding box will be used for visibility culling of the attached mesh instances. This is an optimization allowing an oversized bounding box to be specified for skinned characters in order to avoid per frame bounding box computations based on bone positions."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Batch Group"}),(0,s.jsx)(n.td,{children:"The batch group that this component's mesh instances belong to."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Materials"}),(0,s.jsx)(n.td,{children:"The material assets that will be used to render the mesh instances of this component. Each material corresponds to the respective mesh instance."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"scripting-interface",children:"Scripting Interface"}),"\n",(0,s.jsxs)(n.p,{children:["You can control a render component's properties using a ",(0,s.jsx)(n.a,{href:"/user-manual/scenes/components/script",children:"script component"}),". The render component's scripting interface is ",(0,s.jsx)(n.a,{href:"https://api.playcanvas.com/classes/Engine.RenderComponent.html",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(96540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);