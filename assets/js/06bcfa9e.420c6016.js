"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[1810],{98795:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=t(85893),s=t(11151);const r={title:"Debugging",sidebar_position:9},i=void 0,a={id:"user-manual/scripting/debugging",title:"Debugging",description:"In order to create scripts for PlayCanvas, it is vital that you know how to access and use your browser's development tools.",source:"@site/docs/user-manual/scripting/debugging.md",sourceDirName:"user-manual/scripting",slug:"/user-manual/scripting/debugging",permalink:"/developer.playcanvas.com/user-manual/scripting/debugging",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/scripting/debugging.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Debugging",sidebar_position:9},sidebar:"userManualSidebar",previous:{title:"Hot Reloading",permalink:"/developer.playcanvas.com/user-manual/scripting/hot-reloading"},next:{title:"Using a Custom Engine",permalink:"/developer.playcanvas.com/user-manual/scripting/custom_engine"}},c={},l=[{value:"Debugging Scripts",id:"debugging-scripts",level:3},{value:"Debugging on Mobile Devices",id:"debugging-on-mobile-devices",level:3}];function d(e){const o={a:"a",admonition:"admonition",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:"In order to create scripts for PlayCanvas, it is vital that you know how to access and use your browser's development tools."}),"\n",(0,n.jsx)(o.p,{children:"Chrome, Firefox and other browsers have Developer Tools integrated directly into the browser. You can usually access them by pressing F12 on Windows or ALT-CMD-I on Mac. Or use menu of a browser to access developer tools."}),"\n",(0,n.jsx)(o.h3,{id:"debugging-scripts",children:"Debugging Scripts"}),"\n",(0,n.jsx)(o.p,{children:"In order to debug your scripts, select the Sources tab in Developer Tools (Chrome). Open the 'navigator' by clicking the icon in the top left corner of the Sources pane. You should see something similar to what is shown below:"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{src:"/images/user-manual/scripting/debugging/chrome-debugger.jpg",alt:"Debugger"})}),"\n",(0,n.jsx)(o.p,{children:"In Firefox it looks like this:"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{src:"/images/user-manual/scripting/debugging/firefox-debugger.jpg",alt:"Firefox"})}),"\n",(0,n.jsx)(o.p,{children:"The navigator lists all of the scripts currently running in the active tab, including any PlayCanvas scripts that you have written. Find one of your scripts in the navigator and select it to open the source code. You are now able to set breakpoints and debug."}),"\n",(0,n.jsxs)(o.p,{children:["Each browser has detailed instructions on how to debug javascript. You should read through these documents: ",(0,n.jsx)(o.a,{href:"https://developer.chrome.com/docs/devtools/javascript/",children:"Chrome"}),", ",(0,n.jsx)(o.a,{href:"https://developer.mozilla.org/en-US/docs/Tools/Debugger",children:"Firefox"}),", ",(0,n.jsx)(o.a,{href:"https://developer.apple.com/safari/tools/",children:"Safari"}),", ",(0,n.jsx)(o.a,{href:"https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/javascript/reference",children:"Edge / Internet Explorer"}),"."]}),"\n",(0,n.jsx)(o.admonition,{type:"note",children:(0,n.jsx)(o.p,{children:"Note that when a running app is paused at a breakpoint in the debugger, other browser windows/tabs used to launch that app (containing the PlayCanvas Code Editor or Editor etc.) might also be paused."})}),"\n",(0,n.jsx)(o.h3,{id:"debugging-on-mobile-devices",children:"Debugging on Mobile Devices"}),"\n",(0,n.jsxs)(o.p,{children:["On Android, it is possible to connect to the mobile Chrome browser via the desktop Chrome browser devtools and USB cable. ",(0,n.jsx)(o.a,{href:"https://developer.chrome.com/docs/devtools/remote-debugging/",children:"Google Developer documentation"})," has the detailed steps for the setup."]}),"\n",(0,n.jsxs)(o.p,{children:["iOS debugging requires access to a Mac and ",(0,n.jsx)(o.a,{href:"https://webkit.org/web-inspector/enabling-web-inspector/",children:"Apple has outlined the steps"})," needed to enable developer options to start debugging."]}),"\n",(0,n.jsx)(o.p,{children:"In the situation where either it's not possible to connect to the web view directly from Chrome or Safari (e.g. a web view in another app) or don't have access to a Mac, the following libraries and services can help and are simple to add to projects:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.a,{href:"https://remotejs.com/",children:"RemoteJS"})," - Allows developers to view the console output remotely in a desktop browser and also execute JS in the console which makes it very powerful. The console output can be delayed or slow though."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.a,{href:"https://github.com/Tencent/vConsole",children:"vConsole"})," or ",(0,n.jsx)(o.a,{href:"https://github.com/liriliri/eruda",children:"Eruda"})," - Adds a widget DOM object to the page that can be expanded to show console output, network requests, the page elements and more."]}),"\n"]})]})}function u(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,o,t)=>{t.d(o,{Z:()=>a,a:()=>i});var n=t(67294);const s={},r=n.createContext(s);function i(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);