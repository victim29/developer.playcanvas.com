"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[3092],{37332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>a});var s=n(85893),o=n(11151);const l={title:"Scrollview",sidebar_position:18},r=void 0,i={id:"user-manual/packs/components/scrollview",title:"Scrollview",description:"The Scrollview component defines a scrollable area in a user interface. A scrollview can be scrolled via Scrollbar components.",source:"@site/docs/user-manual/packs/components/scrollview.md",sourceDirName:"user-manual/packs/components",slug:"/user-manual/packs/components/scrollview",permalink:"/developer.playcanvas.com/user-manual/packs/components/scrollview",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/packs/components/scrollview.md",tags:[],version:"current",sidebarPosition:18,frontMatter:{title:"Scrollview",sidebar_position:18},sidebar:"userManualSidebar",previous:{title:"Scrollbar",permalink:"/developer.playcanvas.com/user-manual/packs/components/scrollbar"},next:{title:"Sound",permalink:"/developer.playcanvas.com/user-manual/packs/components/sound"}},c={},a=[{value:"Component Properties",id:"component-properties",level:2}];function h(e){const t={a:"a",em:"em",h2:"h2",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The Scrollview component defines a scrollable area in a user interface. A scrollview can be scrolled via ",(0,s.jsx)(t.a,{href:"/user-manual/packs/components/scrollbar",children:"Scrollbar"})," components."]}),"\n",(0,s.jsxs)(t.p,{children:["See the ",(0,s.jsx)(t.a,{href:"/user-manual/user-interface",children:"User Interface"})," section for more details."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"/images/user-manual/scenes/components/component-scrollview.png",alt:"Scrollview Component"})}),"\n",(0,s.jsx)(t.h2,{id:"component-properties",children:"Component Properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Scroll Mode"}),(0,s.jsxs)(t.td,{children:["Specifies how the scroll view should behave when the user scrolls past the end of the content. Modes are defined as follows: ",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Clamp: Content does not scroll any further than its bounds."}),(0,s.jsx)("li",{children:"Bounce: Content scrolls past its bounds and then gently bounces back."}),(0,s.jsx)("li",{children:"Infinite: Content can scroll forever."})]})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Bounce"}),(0,s.jsx)(t.td,{children:"Controls how far the content should move before bouncing back."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Friction"}),(0,s.jsx)(t.td,{children:"Controls how freely the content should move if thrown, i.e. By flicking on a phone or by flinging the scroll wheel on a mouse. A value of 1 means that content will stop immediately; 0 means that content will continue moving forever (or until the bounds of the content are reached, depending on the scroll mode)."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Use Mouse Wheel"}),(0,s.jsx)(t.td,{children:"Whether to use mouse wheel for scrolling (horizontally and vertically) when mouse is within bounds."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Mouse Wheel Sensitivity"}),(0,s.jsxs)(t.td,{children:["Mouse wheel horizontal and vertical sensitivity. Only used if ",(0,s.jsx)(t.em,{children:"Use Mouse Wheel"})," is set. Setting a direction to 0 will disable mouse wheel scrolling in that direction. 1 is a default sensitivity that is considered to feel good. The values can be set higher or lower than 1 to tune the sensitivity. Defaults to [1, 1]."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Viewport"}),(0,s.jsx)(t.td,{children:"The entity to be used as the masked viewport area, within which the content will scroll. This entity must have an ElementGroup component."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Content"}),(0,s.jsx)(t.td,{children:"The entity which contains the scrolling content itself. This entity must have an Element component."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Horizontal"}),(0,s.jsx)(t.td,{children:"Whether to enable horizontal scrolling."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Scrollbar (horizontal)"}),(0,s.jsx)(t.td,{children:"The entity to be used as the horizontal scrollbar. This entity must have a Scrollbar component."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Visibility (horizontal)"}),(0,s.jsx)(t.td,{children:"Controls whether the horizontal scrollbar should be visible all the time, or only visible when the content exceeds the size of the viewport."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Vertical"}),(0,s.jsx)(t.td,{children:"Whether to enable vertical scrolling."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Scrollbar (vertical)"}),(0,s.jsx)(t.td,{children:"The entity to be used as the vertical scrollbar. This entity must have a Scrollbar component."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Visibility (vertical)"}),(0,s.jsx)(t.td,{children:"Controls whether the vertical scrollbar should be visible all the time, or only visible when the content exceeds the size of the viewport."})]})]})]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>r});var s=n(67294);const o={},l=s.createContext(o);function r(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);