"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[3058],{26901:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=t(85893),r=t(11151);const i={title:"User Interface Basics",sidebar_position:1},s=void 0,o={id:"user-manual/user-interface/user-interface-basics",title:"User Interface Basics",description:"User Interfaces are built from two elements in PlayCanvas. A Screen Component describes the area that contains all the user interfaces elements and then multiple entities with Element Components are attached below the Screen Entity in the hierarchy. The Screen defines the area of the User Interface and how it is rendered (in 2D space or in the 3D world). The Elements make up the images and text components of the interface.",source:"@site/docs/user-manual/user-interface/user-interface-basics.md",sourceDirName:"user-manual/user-interface",slug:"/user-manual/user-interface/user-interface-basics",permalink:"/developer.playcanvas.com/user-manual/user-interface/user-interface-basics",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/user-interface/user-interface-basics.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"User Interface Basics",sidebar_position:1},sidebar:"userManualSidebar",previous:{title:"User Interface",permalink:"/developer.playcanvas.com/user-manual/user-interface/"},next:{title:"Screens",permalink:"/developer.playcanvas.com/user-manual/user-interface/screens"}},c={},l=[{value:"Layout and Positioning",id:"layout-and-positioning",level:2},{value:"Draw Order",id:"draw-order",level:2},{value:"Element 9-slicing",id:"element-9-slicing",level:2},{value:"Input",id:"input",level:2},{value:"Localization",id:"localization",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",p:"p",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["User Interfaces are built from two elements in PlayCanvas. A ",(0,a.jsx)(n.a,{href:"/user-manual/user-interface/screens",children:"Screen Component"})," describes the area that contains all the user interfaces elements and then multiple entities with ",(0,a.jsx)(n.a,{href:"/user-manual/user-interface/elements",children:"Element Components"})," are attached below the Screen Entity in the hierarchy. The Screen defines the area of the User Interface and how it is rendered (in 2D space or in the 3D world). The Elements make up the images and text components of the interface."]}),"\n",(0,a.jsx)(n.h2,{id:"layout-and-positioning",children:"Layout and Positioning"}),"\n",(0,a.jsxs)(n.p,{children:["One big difference between regular Entities and Entities that use an Element Component as part of a Screen is the way in which they are positioned with respect to their parents. Element Components have two properties that alter they way that their final position is calculated. The ",(0,a.jsx)(n.code,{children:"anchor"})," property determines how the child is positioned relative to its parent and the ",(0,a.jsx)(n.code,{children:"pivot"})," property determines where the center point of the element is. Read more on the ",(0,a.jsx)(n.a,{href:"/user-manual/user-interface/elements",children:"Element"})," page."]}),"\n",(0,a.jsx)(n.h2,{id:"draw-order",children:"Draw Order"}),"\n",(0,a.jsx)(n.p,{children:"The graphical portions of the user interface, Image and Text Elements, are drawn in the order that they appear in the hierarchy, i.e. the first child is drawn first, its child is drawn next. A child that is draw later will appear on top of one that is draw earlier."}),"\n",(0,a.jsxs)(n.p,{children:["To change the draw order you simply re-order the entities in the Editor hierarchy. You can re-order elements programmatically by calling ",(0,a.jsx)(n.code,{children:"entity.reparent(...)"}),". Though, note, that this forces the draw order to be recalculated for the entire Screen component."]}),"\n",(0,a.jsx)(n.h2,{id:"element-9-slicing",children:"Element 9-slicing"}),"\n",(0,a.jsxs)(n.p,{children:["9-slicing (or 9-patch) is a graphical technique for creating scalable user-interface elements from bitmap graphics. You can setup 9-slicing using the Texture Atlas and Sprite Assets. ",(0,a.jsx)(n.a,{href:"/user-manual/2D/slicing",children:"Read more"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"input",children:"Input"}),"\n",(0,a.jsxs)(n.p,{children:["There is an additional way of handling input for UI Elements. An instance of the ",(0,a.jsx)(n.code,{children:"pc.ElementInput"})," is provided on the Application object, usually accessible as ",(0,a.jsx)(n.code,{children:"this.app.elementInput"}),". This allows you to listen for input directly on the element components, e.g. ",(0,a.jsx)(n.code,{children:"this.entity.element.on('click', ...)"}),". Read more on the ",(0,a.jsx)(n.a,{href:"/user-manual/user-interface/input",children:"Input"})," page."]}),"\n",(0,a.jsx)(n.h2,{id:"localization",children:"Localization"}),"\n",(0,a.jsxs)(n.p,{children:["PlayCanvas has a built-in localization system which supports localized Text Elements. Read more ",(0,a.jsx)(n.a,{href:"/user-manual/user-interface/localization",children:"here"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var a=t(67294);const r={},i=a.createContext(r);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);