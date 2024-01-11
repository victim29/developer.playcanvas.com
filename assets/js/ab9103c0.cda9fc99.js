"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[3951],{27511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(85893),s=n(11151);const i={title:"Ray Casting",sidebar_position:5},r=void 0,o={id:"user-manual/physics/ray-casting",title:"Ray Casting",description:"The PlayCanvas physics engine allows you to perform ray casts. A ray cast is a query that determines if a straight line between two arbitrary 3D points intersects with a rigid body.",source:"@site/docs/user-manual/physics/ray-casting.md",sourceDirName:"user-manual/physics",slug:"/user-manual/physics/ray-casting",permalink:"/developer.playcanvas.com/user-manual/physics/ray-casting",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/physics/ray-casting.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Ray Casting",sidebar_position:5},sidebar:"userManualSidebar",previous:{title:"Compound Shapes",permalink:"/developer.playcanvas.com/user-manual/physics/compound-shapes"},next:{title:"Calling the ammo.js API",permalink:"/developer.playcanvas.com/user-manual/physics/calling-ammo"}},c={},p=[];function h(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"The PlayCanvas physics engine allows you to perform ray casts. A ray cast is a query that determines if a straight line between two arbitrary 3D points intersects with a rigid body."}),"\n",(0,a.jsx)(t.p,{children:"One application of ray casting is picking, where the user can touch/click the screen and select an entity. Here is a script which performs a ray cast from the camera position into the scene through the screen touch/click position and returns the closest selected rigid body-enabled entity:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"var Raycast = pc.createScript('raycast');\n\n// initialize code called once per entity\nRaycast.prototype.initialize = function() {\n    if (!this.entity.camera) {\n        console.error('This script must be applied to an entity with a camera component.');\n        return;\n    }\n\n    // Add a mousedown event handler\n    this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.mouseDown, this);\n\n    // Add touch event only if touch is available\n    if (this.app.touch) {\n        this.app.touch.on(pc.EVENT_TOUCHSTART, this.touchStart, this);\n    }\n};\n\nRaycast.prototype.mouseDown = function (e) {\n    this.doRaycast(e.x, e.y);\n};\n\nRaycast.prototype.touchStart = function (e) {\n    // Only perform the raycast if there is one finger on the screen\n    if (e.touches.length === 1) {\n        this.doRaycast(e.touches[0].x, e.touches[0].y);\n    }\n    e.event.preventDefault();\n};\n\nRaycast.prototype.doRaycast = function (screenX, screenY) {\n    // The pc.Vec3 to raycast from (the position of the camera)\n    var from = this.entity.getPosition();\n\n    // The pc.Vec3 to raycast to (the click position projected onto the camera's far clip plane)\n    var to = this.entity.camera.screenToWorld(screenX, screenY, this.entity.camera.farClip);\n\n    // Raycast between the two points and return the closest hit result\n    var result = this.app.systems.rigidbody.raycastFirst(from, to);\n\n    // If there was a hit, store the entity\n    if (result) {\n        var hitEntity = result.entity;\n        console.log('You selected ' + hitEntity.name);\n    }\n};\n"})}),"\n",(0,a.jsxs)(t.p,{children:["You can find a project that uses ray casting for entity selection ",(0,a.jsx)(t.a,{href:"https://playcanvas.com/project/410547/overview/entity-picking-using-physics",children:"here"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Ray casting has other applications too. An entity can probe the environment by firing ray casts. For example, to determine if an entity is on the ground, it can fire a ray cast directly downwards some distance and check if it intersects with the environment."})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var a=n(67294);const s={},i=a.createContext(s);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);