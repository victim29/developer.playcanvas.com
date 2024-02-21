"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[3212],{90264:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var o=s(74848),i=s(28453);const t={title:"Collision"},l=void 0,c={id:"user-manual/scenes/components/collision",title:"Collision",description:"The Collision component assigns a collision volume to the entity. The component interface dynamically displays different attributes based on the 'Type' attribute.",source:"@site/docs/user-manual/scenes/components/collision.md",sourceDirName:"user-manual/scenes/components",slug:"/user-manual/scenes/components/collision",permalink:"/user-manual/scenes/components/collision",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/scenes/components/collision.md",tags:[],version:"current",frontMatter:{title:"Collision"},sidebar:"userManualSidebar",previous:{title:"Camera",permalink:"/user-manual/scenes/components/camera"},next:{title:"Element",permalink:"/user-manual/scenes/components/element"}},r={},a=[{value:"Box",id:"box",level:4},{value:"Capsule",id:"capsule",level:4},{value:"Compound",id:"compound",level:4},{value:"Cone",id:"cone",level:4},{value:"Cylinder",id:"cylinder",level:4},{value:"Mesh",id:"mesh",level:4},{value:"Sphere",id:"sphere",level:4},{value:"Properties",id:"properties",level:2},{value:"Scripting Interface",id:"scripting-interface",level:2}];function d(e){const n={a:"a",h2:"h2",h4:"h4",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"The Collision component assigns a collision volume to the entity. The component interface dynamically displays different attributes based on the 'Type' attribute."}),"\n",(0,o.jsx)(n.p,{children:"The Collision component can be enabled or disabled using the toggle in the top right of the component panel. If enabled and if the component is a trigger volume (because it has no sibling rigidbody component), the trigger volume will be enabled. Likewise, if the component does have a sibling rigidbody component, the rigidbody will be enabled."}),"\n",(0,o.jsx)(n.h4,{id:"box",children:"Box"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"/images/user-manual/scenes/components/component-collision-box.png",alt:"Collision component (Box)"})}),"\n",(0,o.jsx)(n.h4,{id:"capsule",children:"Capsule"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"/images/user-manual/scenes/components/component-collision-capsule.png",alt:"Collision component (Capsule)"})}),"\n",(0,o.jsx)(n.h4,{id:"compound",children:"Compound"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"/images/user-manual/scenes/components/component-collision-compound.png",alt:"Collision component (Compound)"})}),"\n",(0,o.jsx)(n.h4,{id:"cone",children:"Cone"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"/images/user-manual/scenes/components/component-collision-cone.png",alt:"Collision component (Cone)"})}),"\n",(0,o.jsx)(n.h4,{id:"cylinder",children:"Cylinder"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"/images/user-manual/scenes/components/component-collision-cylinder.png",alt:"Collision component (Cylinder)"})}),"\n",(0,o.jsx)(n.h4,{id:"mesh",children:"Mesh"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"/images/user-manual/scenes/components/component-collision-mesh.png",alt:"Collision component (Mesh)"})}),"\n",(0,o.jsx)(n.h4,{id:"sphere",children:"Sphere"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"/images/user-manual/scenes/components/component-collision-sphere.png",alt:"Collision component (Sphere)"})}),"\n",(0,o.jsx)(n.p,{children:"If the entity also has a rigidbody component, the collision component determines the shape of the rigid body. If no rigidbody component is present, the collision component is treated as a trigger volume. The trigger volume cannot affect the simulation of other rigid bodies in the scene. Instead, you can add a script component and attach a script which responds to trigger events. For example, if another entity that has a rigidbody component enters or exits the trigger, your script can be notified."}),"\n",(0,o.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Property"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Type"}),(0,o.jsxs)(n.td,{children:["The type of collision primitive. Can be:",(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:"Box"}),(0,o.jsx)("li",{children:"Sphere"}),(0,o.jsx)("li",{children:"Capsule"}),(0,o.jsx)("li",{children:"Mesh"})]})]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Half Extents"}),(0,o.jsx)(n.td,{children:"Box only. The half-extents of the collision box. This is a 3-dimensional vector: local space half-width, half-height, and half-depth."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Axis"}),(0,o.jsx)(n.td,{children:"Capsule only. Aligns the capsule with the local-space X, Y or Z axis of the entity."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Height"}),(0,o.jsx)(n.td,{children:"Capsule only. The tip-to-tip height of the capsule."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Radius"}),(0,o.jsx)(n.td,{children:"Sphere and Capsule only. The radius of the sphere or capsule body."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Asset"}),(0,o.jsxs)(n.td,{children:["Mesh only. The ",(0,o.jsx)(n.a,{href:"/user-manual/assets/types/render",children:"render asset"})," or model asset that will be used as a source for the triangle-based collision mesh."]})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"scripting-interface",children:"Scripting Interface"}),"\n",(0,o.jsxs)(n.p,{children:["You can control a Collision component's properties using a ",(0,o.jsx)(n.a,{href:"/user-manual/scenes/components/script",children:"script component"}),". The Collision component's scripting interface is ",(0,o.jsx)(n.a,{href:"https://api.playcanvas.com/classes/Engine.CollisionComponent.html",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var o=s(96540);const i={},t=o.createContext(i);function l(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);