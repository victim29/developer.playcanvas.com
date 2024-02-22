"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[7395],{64181:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var i=s(74848),n=s(28453);const a={title:"Touchscreen Joypad Controls",tags:["input","ui"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/1007506/2F5E56-image-75.jpg"},o=void 0,r={id:"tutorials/touch-joypad",title:"Touchscreen Joypad Controls",description:"Click here to see the project.",source:"@site/docs/tutorials/touch-joypad.md",sourceDirName:"tutorials",slug:"/tutorials/touch-joypad",permalink:"/tutorials/touch-joypad",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/touch-joypad.md",tags:[{label:"input",permalink:"/tags/input"},{label:"ui",permalink:"/tags/ui"}],version:"current",frontMatter:{title:"Touchscreen Joypad Controls",tags:["input","ui"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/1007506/2F5E56-image-75.jpg"},sidebar:"tutorialsSidebar",previous:{title:"Timers",permalink:"/tutorials/timers"},next:{title:"Tutorial: Layout Groups",permalink:"/tutorials/tutorial-layout-groups"}},c={},h=[{value:"Overview",id:"overview",level:2},{value:"How to install",id:"how-to-install",level:2},{value:"Adding your joystick",id:"adding-your-joystick",level:2},{value:"Behavior Types",id:"behavior-types",level:3},{value:"Reading joystick values",id:"reading-joystick-values",level:3},{value:"Adding your buttons",id:"adding-your-buttons",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"iframe-container",children:(0,i.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/p/kvE0iJWc/",title:"Touchscreen Joypad Controls"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://playcanvas.com/project/1007506/overview/touchscreen-joypad-controls",children:"Click here to see the project"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"This tutorial shares a Touchscreen Joypad library that can be installed and customized for any project that needs touch screen controls."}),"\n",(0,i.jsxs)(t.p,{children:["We recommend reading about the ",(0,i.jsx)(t.a,{href:"/user-manual/user-interface/",children:"PlayCanvas UI system"})," if you have not used it before as it is used to render and position the controls for this library."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:s(49702).A+"",width:"572",height:"320"})}),"\n",(0,i.jsx)(t.h2,{id:"how-to-install",children:"How to install"}),"\n",(0,i.jsxs)(t.p,{children:["Open the ",(0,i.jsx)(t.a,{href:"https://playcanvas.com/project/1007506/overview/touchscreen-joypad-controls",children:"example project"}),", right click on the folder 'touch-joypad' and click on 'Copy'.\n",(0,i.jsx)(t.img,{src:s(33622).A+"",width:"821",height:"360"})]}),"\n",(0,i.jsxs)(t.p,{children:["Open your project, right click in the assets panel and click on 'Paste'\n",(0,i.jsx)(t.img,{src:s(75956).A+"",width:"821",height:"360"})]}),"\n",(0,i.jsx)(t.h2,{id:"adding-your-joystick",children:"Adding your joystick"}),"\n",(0,i.jsx)(t.p,{children:"In the folder we've just pasted, open the 'templates' folder and there will be 4 preconfigured templates for the joysticks to cover the most common use cases."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Left/Right Fixed Touch Joystick"})," - A fixed joystick that is anchored to the bottom left/right of the screen corners. Recommended for quick reaction games where an instant response is expected such as a retro platforming game."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Left/Right Half Touch Joystick"})," - A joystick where the input area the left/right half of the screen and the joystick will move to where you touch in that area and them requires dragging for movement. Recommended for when 'pushing' or 'pulling' an object in the application."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"For this example, let's use the 'Left Half Touch Joystick' template."}),"\n",(0,i.jsxs)(t.p,{children:["Create a 2D screen Entity and ",(0,i.jsx)(t.a,{href:"/user-manual/templates/#adding-templates-in-your-scene",children:"add the template"})," as a child of the screen Entity."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:s(49248).A+"",width:"868",height:"480"})}),"\n",(0,i.jsx)(t.p,{children:"The joystick is made of three Entities:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Input area (outlined in red)"}),"\n",(0,i.jsx)(t.li,{children:"Base (outlined in blue)"}),"\n",(0,i.jsx)(t.li,{children:"Nub (outlined in blue)"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:s(48280).A+"",width:"1630",height:"916"})}),"\n",(0,i.jsx)(t.p,{children:"The input area will listen for touch and mouse (for debugging purposes) events and also stops the propagation of the event."}),"\n",(0,i.jsxs)(t.p,{children:["This means that any UI Elements under this and any ",(0,i.jsx)(t.a,{href:"https://api.playcanvas.com/classes/Engine.Mouse.html",children:"pc.Mouse"})," or ",(0,i.jsx)(t.a,{href:"https://api.playcanvas.com/classes/Engine.Touch.html",children:"pc.Touch"})," events will not be fired if this area is interacted with first."]}),"\n",(0,i.jsxs)(t.p,{children:["As the input area is an UI Element, it can be positioned, sized and anchored specifically for your needs via the ",(0,i.jsx)(t.a,{href:"/user-manual/user-interface/elements/",children:"UI system layout"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"It also has the 'touchJoystick' which has all the logic and attributes for the joystick. Each attribute has tooltips describing what they are for with some more details below."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:s(93758).A+"",width:"868",height:"480"})}),"\n",(0,i.jsx)(t.p,{children:"The base and nub Entities are controlled by the script and are UI Elements. If you would like the joystick to be in a different place than where it is in the template, please position and anchor the base Entity to where you need them to be and not the input area."}),"\n",(0,i.jsx)(t.h3,{id:"behavior-types",children:"Behavior Types"}),"\n",(0,i.jsx)(t.p,{children:"There are 3 behavior types for the joystick that are commonly found in touch screen games and applications."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:s(7746).A+"",width:"780",height:"342"})}),"\n",(0,i.jsxs)(t.p,{children:["'Fixed in place' where the base of the joystick does not move from it's position:\n",(0,i.jsx)(t.img,{src:s(92165).A+"",width:"854",height:"480"})]}),"\n",(0,i.jsxs)(t.p,{children:["'Move to first touch and fixed' where the base of the joystick moves to where the user first touches in the input area and then stays fixed:\n",(0,i.jsx)(t.img,{src:s(64660).A+"",width:"854",height:"480"})]}),"\n",(0,i.jsxs)(t.p,{children:["'Move to first touch and drags' where the base of the joystick moves to where the user first touches in the input area and then is dragged when the user drags pass the joystick range:\n",(0,i.jsx)(t.img,{src:s(5764).A+"",width:"855",height:"480"})]}),"\n",(0,i.jsx)(t.p,{children:"This can be changed at runtime so it's possible to add this as a user option in the application as part of the in-application settings."}),"\n",(0,i.jsx)(t.h3,{id:"reading-joystick-values",children:"Reading joystick values"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:s(88530).A+"",width:"273",height:"270"})}),"\n",(0,i.jsx)(t.p,{children:"The red circle is dead zone and if the nub position is within that circle, the value from the joystick will return 0 for both axes. The blue circle is the range and the nub cannot go outside that circle."}),"\n",(0,i.jsx)(t.p,{children:"The values are always normalized between -1 and 1 on both axes based on the where the nub is between the dead zone (red circle) and the range (blue circle)."}),"\n",(0,i.jsx)(t.p,{children:"The size of the circles can be set in the Editor via the script attributes."}),"\n",(0,i.jsxs)(t.p,{children:["Joystick values can accessed in code from the global Javascript object ",(0,i.jsx)(t.code,{children:"window.touchJoypad.sticks"})," with the identifier. By default, the identifier is 'joystick0' but can be changed in the Editor on the script to be more specific."]}),"\n",(0,i.jsx)(t.p,{children:"Example code:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"// Get the joystick by the identifier from the global object\nvar joystick = window.touchJoypad.sticks['joystick0'];\n\n// Get the normalized values of both joystick axes and print to console\nconsole.log('X: ' + joystick.x + ', Y: ' + joystick.y);\n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://playcanvas.com/project/1007506/overview/touchscreen-joypad-controls",children:"In the demo"}),", the camera is controlled by the right joystick and you can see how it gets and uses the values in the ",(0,i.jsx)(t.a,{href:"https://playcanvas.com/editor/code/1007506?tabs=111433673",children:"script here"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"adding-your-buttons",children:"Adding your buttons"}),"\n",(0,i.jsxs)(t.p,{children:["Buttons are fixed position UI Elements on the screen. There is a template for button in the 'templates' folder and ",(0,i.jsx)(t.a,{href:"/user-manual/templates/#adding-templates-in-your-scene",children:"should be added"})," as a child of the screen Entity."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:s(79590).A+"",width:"868",height:"480"})}),"\n",(0,i.jsxs)(t.p,{children:["As they are UI Elements, they can be positioned, sized and anchored specifically for your needs via the ",(0,i.jsx)(t.a,{href:"/user-manual/user-interface/elements/",children:"UI system layout"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Like the joysticks, they have an identifier so they can be accessed in code from the global Javascript object ",(0,i.jsx)(t.code,{children:"window.touchJoypad.buttons"})," with the following API."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Function name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"isPressed"}),(0,i.jsx)(t.td,{children:"Takes the button identifier and returns true if the button is currently being pressed."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"wasPressed"}),(0,i.jsx)(t.td,{children:"Takes the button identifier and returns true if the button was pressed since the last frame."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"wasReleased"}),(0,i.jsx)(t.td,{children:"Takes the button identifier and returns true if the button was released since the last frame."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"wasTapped"}),(0,i.jsx)(t.td,{children:"Takes the button identifier and returns true if the button was pressed and released within 200ms. i.e. A quick tap."})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["The joysticks are also buttons which gives extra flexibility in how they can be used. For example, using the ",(0,i.jsx)(t.code,{children:"wasTapped"})," API with a joystick identifier can act like a L3/R3 input on a PlayStation controller."]}),"\n",(0,i.jsx)(t.p,{children:"Example code:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"// Get the button global object\nvar buttons = window.touchJoypad.buttons\n\n// Check if the button was pressed since the last frame\nconsole.log('Was pressed: ' + buttons.wasPressed('button0'));\n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://playcanvas.com/project/1007506/overview/touchscreen-joypad-controls",children:"In the demo"}),", the character is controlled by the left joystick and buttons. You can see how it gets and uses the buttons in the ",(0,i.jsx)(t.a,{href:"https://playcanvas.com/editor/code/1007506?tabs=111432679",children:"script here"})," to play attack animations."]})]})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},79590:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/adding-button-b4e8983e587d469205b2a943f99d35f5.gif"},49248:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/adding-left-half-joystick-b73440145015a805895701b06a6a51e7.gif"},33622:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/copy-folder-5dfb5a9a1d86d836acf4d495a541603a.gif"},88530:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/joystick-deadzone-range-55171c0d6c53c9aa958a26169c99c270.png"},92165:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/joystick-fixed-8046956bb15fa05f6a1b51ffc9860147.gif"},48280:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/joystick-layout-a86e954c4a5bace6a43766987751d4be.png"},5764:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/joystick-relative-drag-8cd29993bb914111601216fbd062cf95.gif"},64660:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/joystick-relative-fixed-c9eec48bfd5c3da5acc6edf0b5baf2a0.gif"},93758:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/joystick-script-attributes-0292af8c1ef4e64194b8088c0ea92b5b.gif"},7746:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/joystick-type-69d60926c273c38a19aa317834f18fc1.png"},75956:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/paste-folder-f52e42cf1e881b549b32229a2e52d83e.gif"},49702:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/preview-9c2e47c8d0de40c934b21113256bfd75.gif"},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>r});var i=s(96540);const n={},a=i.createContext(n);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);