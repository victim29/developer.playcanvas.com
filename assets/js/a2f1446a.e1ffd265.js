"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[4284],{17365:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var i=r(85893),n=r(11151);const s={title:"Sprite"},d=void 0,l={id:"user-manual/scenes/components/sprite",title:"Sprite",description:"The Sprite Component renders and animates Sprite Assets into the scene.",source:"@site/docs/user-manual/scenes/components/sprite.md",sourceDirName:"user-manual/scenes/components",slug:"/user-manual/scenes/components/sprite",permalink:"/user-manual/scenes/components/sprite",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/scenes/components/sprite.md",tags:[],version:"current",frontMatter:{title:"Sprite"},sidebar:"userManualSidebar",previous:{title:"Sound",permalink:"/user-manual/scenes/components/sound"},next:{title:"Loading Scenes",permalink:"/user-manual/scenes/loading-scenes"}},c={},p=[{value:"Simple Sprites",id:"simple-sprites",level:2},{value:"Simple Sprite Component Properties",id:"simple-sprite-component-properties",level:2},{value:"Animated Sprites",id:"animated-sprites",level:2},{value:"Animated Sprite Component Properties",id:"animated-sprite-component-properties",level:2},{value:"Sprite Animation Clip Properties",id:"sprite-animation-clip-properties",level:2},{value:"Scripting Interface",id:"scripting-interface",level:2}];function a(e){const t={a:"a",h2:"h2",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The Sprite Component renders and animates ",(0,i.jsx)(t.a,{href:"/user-manual/assets/types/sprite",children:"Sprite Assets"})," into the scene."]}),"\n",(0,i.jsx)(t.p,{children:"There are two types of sprite Simple and Animated."}),"\n",(0,i.jsx)(t.h2,{id:"simple-sprites",children:"Simple Sprites"}),"\n",(0,i.jsx)(t.p,{children:"Simple Sprite Components display a single frame from an atlas"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"/images/user-manual/scenes/components/component-sprite-simple.png",alt:"Simple Sprite"})}),"\n",(0,i.jsx)(t.h2,{id:"simple-sprite-component-properties",children:"Simple Sprite Component Properties"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:"Simple or Animated."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Sprite"}),(0,i.jsx)(t.td,{children:"The Sprite Asset to display."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Frame"}),(0,i.jsx)(t.td,{children:"The frame index of the Sprite to display."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Color"}),(0,i.jsx)(t.td,{children:"A color to apply as a tint to the sprite."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Opacity"}),(0,i.jsx)(t.td,{children:"The transparency of the sprite."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Flip X"}),(0,i.jsx)(t.td,{children:"Flip the rendered sprite horizontally."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Flip Y"}),(0,i.jsx)(t.td,{children:"Flip the rendered sprite vertically."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Layers"}),(0,i.jsx)(t.td,{children:"The Layers in which to render the sprite."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Draw Order"}),(0,i.jsx)(t.td,{children:"The order in which this sprite is rendered. Lower numbers are rendered first."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Batch Group"}),(0,i.jsxs)(t.td,{children:["The Batch Group that this model belongs to. More on Batching ",(0,i.jsx)(t.a,{href:"/user-manual/graphics/advanced-rendering/batching",children:"here"}),"."]})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"animated-sprites",children:"Animated Sprites"}),"\n",(0,i.jsx)(t.p,{children:"Animated Sprite Components have multiple Sprite Animation Clips attached which can play back a different Sprite Asset."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"/images/user-manual/scenes/components/component-sprite-animated.png",alt:"Animated Sprite"})}),"\n",(0,i.jsx)(t.h2,{id:"animated-sprite-component-properties",children:"Animated Sprite Component Properties"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:"Simple or Animated."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Frame"}),(0,i.jsx)(t.td,{children:"The frame index of the Sprite to display."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Color"}),(0,i.jsx)(t.td,{children:"A color to apply as a tint to the sprite."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Opacity"}),(0,i.jsx)(t.td,{children:"The transparency of the sprite."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Flip X"}),(0,i.jsx)(t.td,{children:"Flip the rendered sprite horizontally."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Flip Y"}),(0,i.jsx)(t.td,{children:"Flip the rendered sprite vertically."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Speed"}),(0,i.jsx)(t.td,{children:"Multiplier applied to the speed at which sprite animation clips on this sprite component are animated."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Layers"}),(0,i.jsx)(t.td,{children:"The Layers in which to render the sprite."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Draw Order"}),(0,i.jsx)(t.td,{children:"The order in which this sprite is rendered. Lower numbers are rendered first."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Auto Play"}),(0,i.jsx)(t.td,{children:"The name of a sprite animation clip to play when the sprite is enabled."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"sprite-animation-clip-properties",children:"Sprite Animation Clip Properties"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Name"}),(0,i.jsx)(t.td,{children:"The name of the Sprite Animation Clip. Used to reference an individual clip."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Loop"}),(0,i.jsx)(t.td,{children:"If true the animation clip will loop back to the start when it reaches the end."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"FPS"}),(0,i.jsx)(t.td,{children:"The speed at which the clip is played in Frames Per Second."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Sprite"}),(0,i.jsx)(t.td,{children:"The Sprite Asset which is used to play this clip."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"scripting-interface",children:"Scripting Interface"}),"\n",(0,i.jsxs)(t.p,{children:["You can control the properties of a Sprite component using a ",(0,i.jsx)(t.a,{href:"/user-manual/scenes/components/script",children:"script component"}),". The scripting interface for the Sprite component is ",(0,i.jsx)(t.a,{href:"https://api.playcanvas.com/classes/Engine.SpriteComponent.html",children:"here"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>d});var i=r(67294);const n={},s=i.createContext(n);function d(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);