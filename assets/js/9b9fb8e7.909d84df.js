"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[1494],{29308:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>c});var n=a(85893),o=a(11151);const i={title:"Forces and Impulses",sidebar_position:2},r=void 0,t={id:"user-manual/physics/forces-and-impulses",title:"Forces and Impulses",description:"Dynamic rigid bodies move in response to forces and impulses. A force is applied to a body over a period of time whereas an impulse is a force that is applied in an instant.",source:"@site/docs/user-manual/physics/forces-and-impulses.md",sourceDirName:"user-manual/physics",slug:"/user-manual/physics/forces-and-impulses",permalink:"/developer.playcanvas.com/user-manual/physics/forces-and-impulses",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/physics/forces-and-impulses.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Forces and Impulses",sidebar_position:2},sidebar:"userManualSidebar",previous:{title:"Physics Basics",permalink:"/developer.playcanvas.com/user-manual/physics/physics-basics"},next:{title:"Trigger Volumes",permalink:"/developer.playcanvas.com/user-manual/physics/trigger-volumes"}},p={},c=[];function l(e){const s={a:"a",code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"Dynamic rigid bodies move in response to forces and impulses. A force is applied to a body over a period of time whereas an impulse is a force that is applied in an instant."}),"\n",(0,n.jsxs)(s.p,{children:["To apply a force or an impulse to a rigid body, you must use the ",(0,n.jsx)(s.a,{href:"/api/pc.RigidBodyComponent.html",children:"pc.RigidBodyComponent scripting API"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"Let's consider a couple of examples. If you want to push a heavy weight across the floor, you would apply a force over an amount of time:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:"MyScript.prototype.update = function(dt) {\n    // While the right arrow key is pressed, apply a force to the right\n    if (app.keyboard.isPressed(pc.KEY_RIGHT)) {\n        this.entity.rigidbody.applyForce(10, 0, 0);\n    }\n};\n"})}),"\n",(0,n.jsx)(s.p,{children:"If you want to fire a cannonball from a cannon, you would apply a single impulse:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:"MyScript.prototype.update = function(dt) {\n    // If the space bar was pressed, apply an impulse up and to the right\n    if (app.keyboard.wasPressed(pc.KEY_SPACE)) {\n        this.entity.rigidbody.applyImpulse(10, 10, 0);\n    }\n};\n"})})]})}function d(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,s,a)=>{a.d(s,{Z:()=>t,a:()=>r});var n=a(67294);const o={},i=n.createContext(o);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);