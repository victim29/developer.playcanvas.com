"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[7012],{14453:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var n=i(85893),a=i(11151);const s={title:"Entity Picking",tags:["raycast","basics","physics"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405856/DS51PO-image-75.jpg"},c=void 0,r={id:"tutorials/entity-picking",title:"Entity Picking",description:"Collision Picking - click to select a shape",source:"@site/docs/tutorials/entity-picking.md",sourceDirName:"tutorials",slug:"/tutorials/entity-picking",permalink:"/developer.playcanvas.com/tutorials/entity-picking",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/entity-picking.md",tags:[{label:"raycast",permalink:"/developer.playcanvas.com/tags/raycast"},{label:"basics",permalink:"/developer.playcanvas.com/tags/basics"},{label:"physics",permalink:"/developer.playcanvas.com/tags/physics"}],version:"current",frontMatter:{title:"Entity Picking",tags:["raycast","basics","physics"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405856/DS51PO-image-75.jpg"},sidebar:"tutorialsSidebar",previous:{title:"Entity picking without physics",permalink:"/developer.playcanvas.com/tutorials/entity-picking-without-physics"},next:{title:"Explosion Particle Effect",permalink:"/developer.playcanvas.com/tutorials/explosion-particle-effect"}},o={},l=[{value:"Collision Picking",id:"collision-picking",level:2},{value:"Frame Buffer Picking",id:"frame-buffer-picking",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Collision Picking - click to select a shape"}),"\n",(0,n.jsx)("div",{className:"iframe-container",children:(0,n.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/b/Ps1tTzWn/",title:"Collision Picking"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"Frame Buffer Picking - click to select a grey shape. The red shapes are set to be not pickable."}),"\n",(0,n.jsx)("div",{className:"iframe-container",children:(0,n.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/b/ZQVQqgGU/",title:"Frame Buffer Picking"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:["Try it from the Editor in the ",(0,n.jsx)(t.a,{href:"https://playcanvas.com/project/405856",children:"tutorial project."})]}),"\n",(0,n.jsx)(t.p,{children:"This tutorial describes to methods of selecting an Entity from the 3D scene, for example, on the click of the mouse."}),"\n",(0,n.jsx)(t.h2,{id:"collision-picking",children:"Collision Picking"}),"\n",(0,n.jsxs)(t.p,{children:["Collision based picking uses the collision components to add a shape to each Entity that needs to be picked. Then we use the ",(0,n.jsx)(t.a,{href:"/api/pc.RigidBodyComponentSystem.html#raycastFirst",children:"raycastFirst()"}),' method in the rigidbody system to fire a ray from the mouse click position into the screen to see if it hits a collision component. If it does, that Entity is "selected".']}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"var PickerRaycast = pc.createScript('pickerRaycast');\n\n// initialize code called once per entity\nPickerRaycast.prototype.initialize = function() {\n    this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onSelect, this);\n\n    this.on('destroy', function() {\n        this.app.mouse.off(pc.EVENT_MOUSEDOWN, this.onSelect, this);\n    }, this);\n};\n\nPickerRaycast.prototype.onSelect = function (e) {\n    var from = this.entity.camera.screenToWorld(e.x, e.y, this.entity.camera.nearClip);\n    var to = this.entity.camera.screenToWorld(e.x, e.y, this.entity.camera.farClip);\n\n    var result = this.app.systems.rigidbody.raycastFirst(from, to);\n    if (result) {\n        var pickedEntity = result.entity;\n        pickedEntity.script.pulse.pulse();\n    }\n};\n"})}),"\n",(0,n.jsx)(t.h2,{id:"frame-buffer-picking",children:"Frame Buffer Picking"}),"\n",(0,n.jsxs)(t.p,{children:["Frame buffer based picking uses the ",(0,n.jsx)(t.a,{href:"/api/pc.Picker.html",children:"pc.Picker"})," class to render the scene to a internal buffer. When the mouse is clicked the color of the buffer at the mouse location is used to determine which mesh instance was selected. This has some advantages and disadvantages over the collision based method."]}),"\n",(0,n.jsx)(t.p,{children:"Advantages include:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Able to use a rectangle to pick many items in a scene at once"}),"\n",(0,n.jsx)(t.li,{children:"Doesn't require the physics library to be included which reduces preload time."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The main disadvantage is that this uses the ",(0,n.jsx)(t.code,{children:"readPixels"})," method which stalls the graphics pipeline. This can have serious rendering performance implications particularly on mobile and GPU heavy applications."]}),"\n",(0,n.jsxs)(t.p,{children:["You are able modify the size of the buffer to be smaller to improve the performance at the cost of accuracy. In the example script below, the attribute ",(0,n.jsx)(t.code,{children:"pickAreaScale"})," is used to do this where the lower the number, the faster and less accurate the picker becomes."]}),"\n",(0,n.jsxs)(t.p,{children:["It's also possible to restrict the layers to pick which the script supports via ",(0,n.jsx)(t.code,{children:"layerNames"})," array. We can add the names of the layers that we want to pick from and also improves performance by rendering only what we need to the internal buffer."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"var PickerFramebuffer = pc.createScript('pickerFramebuffer');\n\nPickerFramebuffer.attributes.add('pickAreaScale', {\n    type: 'number',\n    title: 'Pick Area Scale',\n    description: '1 is more accurate but worse performance. 0.01 is best performance but least accurate. 0.25 is the default.',\n    default: 0.25,\n    min: 0.01,\n    max: 1\n});\n\nPickerFramebuffer.attributes.add('layerNames', {\n    type: 'string',\n    title: 'Layers Names',\n    array: true,\n    description: 'Layer names from which objects will be picked from.',\n    default: ['World']\n});\n\n// initialize code called once per entity\nPickerFramebuffer.prototype.initialize = function() {\n    // Create a frame buffer picker with a scaled resolution\n    var canvas = this.app.graphicsDevice.canvas;\n    var canvasWidth = parseInt(canvas.clientWidth, 10);\n    var canvasHeight = parseInt(canvas.clientHeight, 10);\n\n    this.picker = new pc.Picker(this.app, canvasWidth * this.pickAreaScale, canvasHeight * this.pickAreaScale);\n    this.layers = [];\n    for (var i = 0; i < this.layerNames.length; ++i) {\n        var layer = this.app.scene.layers.getLayerByName(this.layerNames[i]);\n        if (layer) {\n            this.layers.push(layer);\n        }\n    }\n\n    this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onSelect, this);\n\n    this.on('destroy', function() {\n        this.app.mouse.off(pc.EVENT_MOUSEDOWN, this.onSelect, this);\n    }, this);\n};\n\nPickerFramebuffer.prototype.onSelect = function (event) {\n    var canvas = this.app.graphicsDevice.canvas;\n    var canvasWidth = parseInt(canvas.clientWidth, 10);\n    var canvasHeight = parseInt(canvas.clientHeight, 10);\n\n    var camera = this.entity.camera.camera;\n    var scene = this.app.scene;\n    var picker = this.picker;\n\n    picker.resize(canvasWidth * this.pickAreaScale, canvasHeight * this.pickAreaScale);\n    picker.prepare(camera, scene, this.layers);\n\n    // Map the mouse coordinates into picker coordinates and\n    // query the selection\n    var selected = picker.getSelection({\n        x: Math.floor(event.x * (picker.width / canvasWidth)),\n        y: picker.height - Math.floor(event.y * (picker.height / canvasHeight))\n    });\n\n    if (selected.length > 0) {\n        // Get the graph node used by the selected mesh instance\n        var entity = selected[0].node;\n\n        // Bubble up the hierarchy until we find an actual Entity\n        // that has the script we are looking for\n        while (entity !== null && !(entity instanceof pc.Entity) && (entity.script && entity.script.pulse)) {\n            entity = entity.getParent();\n        }\n        if (entity) {\n            entity.script.pulse.pulse();\n        }\n    }\n};\n"})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>c});var n=i(67294);const a={},s=n.createContext(a);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);