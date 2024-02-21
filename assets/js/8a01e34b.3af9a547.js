"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[8941],{13731:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=t(74848),n=t(28453);const r={title:"9-slicing",sidebar_position:2},l=void 0,a={id:"user-manual/2D/slicing",title:"9-slicing",description:"9-slicing (sometimes called 9-patch) is a technique for 2D graphics that splits a single image into 9 areas which are scaled individually in order to prevent stretching when the image is displayed at different sizes and with different aspect ratios.",source:"@site/docs/user-manual/2D/9-slicing.md",sourceDirName:"user-manual/2D",slug:"/user-manual/2D/slicing",permalink:"/user-manual/2D/slicing",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/2D/9-slicing.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"9-slicing",sidebar_position:2},sidebar:"userManualSidebar",previous:{title:"Sprite Editor",permalink:"/user-manual/2D/sprite-editor"},next:{title:"Using Texture Packers",permalink:"/user-manual/2D/texture-packing"}},o={},c=[{value:"Setting up 9-slicing",id:"setting-up-9-slicing",level:2},{value:"Render Modes",id:"render-modes",level:2},{value:"Simple Sprites",id:"simple-sprites",level:3},{value:"Sliced Sprites",id:"sliced-sprites",level:3},{value:"Tiled Sprites",id:"tiled-sprites",level:3}];function d(e){const i={a:"a",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.p,{children:"9-slicing (sometimes called 9-patch) is a technique for 2D graphics that splits a single image into 9 areas which are scaled individually in order to prevent stretching when the image is displayed at different sizes and with different aspect ratios."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"/images/user-manual/2D/9-slicing/9-sliced-labelled.jpg",alt:"9 Sliced Button"})}),"\n",(0,s.jsxs)(i.p,{children:["In the image above you can see the 9 areas that a defined using the Texture Atlas editing features of the ",(0,s.jsx)(i.a,{href:"/user-manual/2D/sprite-editor",children:"Sprite Editor"}),". When added to a scene using either a ",(0,s.jsx)(i.a,{href:"/user-manual/scenes/components/sprite",children:"Sprite Component"})," or an ",(0,s.jsx)(i.a,{href:"/user-manual/scenes/components/element",children:"Image Element Component"}),", the image can be resized using the width and height properties of the component. Each area is scaled using the following rules:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Center"})," - stretch or tile both horizontally and vertically"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Top, Bottom"})," - stretch or tile horizontally only"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Left, Right"})," - stretch or tile vertically only"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"TopLeft, TopRight, BottomLeft, BottomRight"})," - Do not stretch or tile"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"/images/user-manual/2D/9-slicing/button-resize.gif",alt:"Button Resize Animation"})}),"\n",(0,s.jsx)(i.h2,{id:"setting-up-9-slicing",children:"Setting up 9-slicing"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"/images/user-manual/2D/9-slicing/9-slice-setup.jpg",alt:"Setup 9-slicing"})}),"\n",(0,s.jsx)(i.p,{children:"To setup a 9-sliced sprite. Create a frame around the area that you wish to use 9-slicing on in the Sprite Editor. Then use the blue handles or the Border property in the Frame Inspector to set the borders to outline the center portion of the image that you wish to be the stretch part of your sprite."}),"\n",(0,s.jsxs)(i.p,{children:["Finally click the ",(0,s.jsx)(i.strong,{children:"New Sliced Sprite From Selection"})," to create a new Sprite with the render mode set to ",(0,s.jsx)(i.em,{children:"Sliced"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"render-modes",children:"Render Modes"}),"\n",(0,s.jsx)(i.p,{children:"Sprite Assets can have one of three Render Modes."}),"\n",(0,s.jsx)(i.h3,{id:"simple-sprites",children:"Simple Sprites"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"/images/user-manual/2D/9-slicing/simple-resize.gif",alt:"Simple Render Mode"})}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.em,{children:"Simple"})," Render Mode has no 9-slicing. Use this mode for regular sprites."]}),"\n",(0,s.jsx)(i.h3,{id:"sliced-sprites",children:"Sliced Sprites"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"/images/user-manual/2D/9-slicing/sliced-resize.gif",alt:"Sliced Render Mode"})}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.em,{children:"Sliced"})," Render Mode stretches portions of the image. The center stretches horizontally and vertically; the left and right sections stretch vertically; the top and bottom sections stretch horizontally and the corners do not stretch at all."]}),"\n",(0,s.jsx)(i.h3,{id:"tiled-sprites",children:"Tiled Sprites"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"/images/user-manual/2D/9-slicing/tiled-resize.gif",alt:"Tiled Render Mode"})}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.em,{children:"Tiled"})," Render Mode is similar to ",(0,s.jsx)(i.em,{children:"Sliced"})," mode except instead of stretching the sections repeat in tiled manner. The center tiles horizontally and vertically; the left and right tile vertically; the top and bottom tile horizontally and the corners do not tile at all."]})]})}function h(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>l,x:()=>a});var s=t(96540);const n={},r=s.createContext(n);function l(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);