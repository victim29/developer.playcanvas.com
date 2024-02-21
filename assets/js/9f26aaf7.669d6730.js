"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[6393],{10934:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=t(74848),s=t(28453);const o={title:"Screen"},c=void 0,a={id:"user-manual/scenes/components/screen",title:"Screen",description:"The Screen component defines the area and rendering of a user interface. Children added to a Screen component should all have an Element component",source:"@site/docs/user-manual/scenes/components/screen.md",sourceDirName:"user-manual/scenes/components",slug:"/user-manual/scenes/components/screen",permalink:"/user-manual/scenes/components/screen",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/scenes/components/screen.md",tags:[],version:"current",frontMatter:{title:"Screen"},sidebar:"userManualSidebar",previous:{title:"Rigid Body",permalink:"/user-manual/scenes/components/rigidbody"},next:{title:"Script",permalink:"/user-manual/scenes/components/script"}},i={},l=[{value:"Component Properties",id:"component-properties",level:2}];function d(e){const n={a:"a",h2:"h2",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"The Screen component defines the area and rendering of a user interface. Children added to a Screen component should all have an Element component"}),"\n",(0,r.jsxs)(n.p,{children:["See the ",(0,r.jsx)(n.a,{href:"/user-manual/user-interface",children:"User Interface"})," section for more details."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"/images/user-manual/scenes/components/component-screen.png",alt:"Screen Component"})}),"\n",(0,r.jsx)(n.h2,{id:"component-properties",children:"Component Properties"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Screen Space"}),(0,r.jsx)(n.td,{children:"When enabled the contents of the screen are rendered in 2D as an overlay to the canvas."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resolution"}),(0,r.jsx)(n.td,{children:"When Screen Space is false. The resolution of the screen co-ordinates. Screen co-ordinates go up as you move right and up. For Screen Space components the resolution is always determined from the resolution of the canvas."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Reference Resolution"}),(0,r.jsx)(n.td,{children:"When Scale Mode is Blend. The resolution used to calculate the scale factor."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Scale Mode"}),(0,r.jsxs)(n.td,{children:["Determine how the user interface changes when the window size does not match the screen size. Can be: ",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"None: Nothing is scaled."}),(0,r.jsx)("li",{children:"Blend: Screen content is scaled by the ratio of the reference resolution to the actual resolution. Using the Scale Blend property to weight the scale between using the horizontal and vertical resolution."})]})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Scale Blend"}),(0,r.jsx)(n.td,{children:"The weighting of the scaling between horizontal (Scale Blend = 0) and vertical (Scale Blend = 1)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Priority"}),(0,r.jsx)(n.td,{children:"Determines the order in which Screen components in the same layer are rendered (higher priority is rendered on top). Number must be an integer between 0 and 255."})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var r=t(96540);const s={},o=r.createContext(s);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);