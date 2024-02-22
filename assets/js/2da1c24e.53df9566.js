"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[3633],{42609:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var i=n(74848),s=n(28453);const a={title:"User Interface - Text Input",tags:["ui"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/1005906/36C2AF-image-75.jpg"},o=void 0,r={id:"tutorials/ui-text-input",title:"User Interface - Text Input",description:"Click here to see the project.",source:"@site/docs/tutorials/ui-text-input.md",sourceDirName:"tutorials",slug:"/tutorials/ui-text-input",permalink:"/tutorials/ui-text-input",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/ui-text-input.md",tags:[{label:"ui",permalink:"/tags/ui"}],version:"current",frontMatter:{title:"User Interface - Text Input",tags:["ui"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/1005906/36C2AF-image-75.jpg"},sidebar:"tutorialsSidebar",previous:{title:"User Interface - Stats Counter",permalink:"/tutorials/ui-elements-stats-counter"},next:{title:"Using the Asset Registry",permalink:"/tutorials/using-assets"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"How to install",id:"how-to-install",level:2},{value:"Adding your first text input",id:"adding-your-first-text-input",level:2},{value:"Advanced: How to style",id:"advanced-how-to-style",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"iframe-container",children:(0,i.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/p/8ZQaDGf8/",title:"User Interface - Text Input"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://playcanvas.com/project/1005906/overview/ui-text-input",children:"Click here to see the project"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"Text input can be done many ways in PlayCanvas and this tutorial shares a library that aims to be flexible enough to cover the most common cases."}),"\n",(0,i.jsx)(t.p,{children:"It uses a HTML input element that is overlaid on top of the PlayCanvas rendering canvas and is positioned depending on whether mouse or touch is used to interact with the input element."}),"\n",(0,i.jsx)(t.p,{children:"Using a HTML input element allows all the OS level operations that an user would expect on a webpage including copy and paste and password managers."}),"\n",(0,i.jsx)(t.p,{children:"If touch is used, there is an assumption that a virtual keyboard would be shown and the HTML input element is positioned accordingly."}),"\n",(0,i.jsx)(t.p,{children:"Here are examples of it being used on desktop:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(60390).A+"",width:"406",height:"240"})}),"\n",(0,i.jsx)(t.p,{children:"And on mobile:"}),"\n",(0,i.jsx)("div",{class:"centered",children:(0,i.jsx)("video",{height:"360",controls:!0,src:"/images/tutorials/ui-text-input/mobile-preview.mp4"})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"This doesn't support 3D elements."})}),"\n",(0,i.jsx)(t.h2,{id:"how-to-install",children:"How to install"}),"\n",(0,i.jsxs)(t.p,{children:["Open the ",(0,i.jsx)(t.a,{href:"https://playcanvas.com/project/1005906/overview/ui-text-input",children:"example project"}),", right click on the folder 'ui-input' and click on 'Copy'.\n",(0,i.jsx)(t.img,{src:n(99981).A+"",width:"1578",height:"702"})]}),"\n",(0,i.jsxs)(t.p,{children:["Open your project, right click in the assets panel and click on 'Paste'\n",(0,i.jsx)(t.img,{src:n(85017).A+"",width:"810",height:"360"})]}),"\n",(0,i.jsx)(t.h2,{id:"adding-your-first-text-input",children:"Adding your first text input"}),"\n",(0,i.jsx)(t.p,{children:"Create an UI Image/Group Element Entity as a child of a UI 2D Screen and size it accordingly. Make sure to enable 'Use Input' on the Element component. This defines the input area for the user to click on and start inputting text."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(30808).A+"",width:"1129",height:"480"})}),"\n",(0,i.jsx)(t.p,{children:"Add a Script Component to the Element Entity and add the Script Type 'uiInputField'."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(39854).A+"",width:"1129",height:"480"})}),"\n",(0,i.jsx)(t.p,{children:"Create a UI Text Element Entity as a child of the Element Entity that we just created. The text in the element will updated by the Script Type 'uiInputField' based on the user input and the script attributes data."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(93878).A+"",width:"1129",height:"480"})}),"\n",(0,i.jsx)(t.p,{children:"Go back to the Script Type 'uiInputField' that added earlier, reference the Text Element Entity and change the script attributes data to your use case. Hover over each attribute to see the tooltip and description."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(10545).A+"",width:"1129",height:"480"})}),"\n",(0,i.jsx)(t.p,{children:"Finally, launch the scene to test."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(55429).A+"",width:"1129",height:"480"})}),"\n",(0,i.jsx)(t.h2,{id:"advanced-how-to-style",children:"Advanced: How to style"}),"\n",(0,i.jsxs)(t.p,{children:["The library uses a neutral color style for the HTML input element. If you want to change the style to better suit your application, you can modify the CSS in 'ui-input-library.js' in function ",(0,i.jsx)(t.code,{children:"createInputDom"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},39854:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/add-script-component-02a88a6f828fef37f6389c9146a14a39.gif"},99981:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/copy-folder-0a95ec8106abb078bb40ddf1df8b8756.gif"},30808:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/create-image-element-0c96d060aa29ea701e5b2c4d87f09689.gif"},93878:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/create-text-element-3757d034650a5eea121e8666dc856af8.gif"},60390:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/desktop-preview-caa3b00ddf7d658c92240000a9774bb2.gif"},55429:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/launch-scene-34d7796cc7bb25ec7be654687bd48c9e.gif"},85017:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/paste-folder-a492ec119cb5abc6145204a32a855b2d.gif"},10545:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/update-script-type-47a1ee9ae8becff76752faa56335254b.gif"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var i=n(96540);const s={},a=i.createContext(s);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);