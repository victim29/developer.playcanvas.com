"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[5033],{44290:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=n(85893),i=n(11151);const s={title:"\u30b7\u30fc\u30f3\u4e0a\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u9078\u629e",layout:"tutorial-page.hbs",tags:["raycast","basics","physics"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405856/DS51PO-image-75.jpg"},r=void 0,c={id:"tutorials/entity-picking",title:"\u30b7\u30fc\u30f3\u4e0a\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u9078\u629e",description:"Collision Picking - \u30af\u30ea\u30c3\u30af\u3057\u3066\u30b7\u30a7\u30a4\u30d7\u3092\u9078\u629e\u3059\u308b",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/entity-picking.md",sourceDirName:"tutorials",slug:"/tutorials/entity-picking",permalink:"/developer.playcanvas.com/ja/tutorials/entity-picking",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/entity-picking.md",tags:[{label:"raycast",permalink:"/developer.playcanvas.com/ja/tags/raycast"},{label:"basics",permalink:"/developer.playcanvas.com/ja/tags/basics"},{label:"physics",permalink:"/developer.playcanvas.com/ja/tags/physics"}],version:"current",frontMatter:{title:"\u30b7\u30fc\u30f3\u4e0a\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u9078\u629e",layout:"tutorial-page.hbs",tags:["raycast","basics","physics"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405856/DS51PO-image-75.jpg"},sidebar:"tutorialsSidebar",previous:{title:"Entity picking without physics",permalink:"/developer.playcanvas.com/ja/tutorials/entity-picking-without-physics"},next:{title:"Explosion Particle Effect",permalink:"/developer.playcanvas.com/ja/tutorials/explosion-particle-effect"}},l={},p=[{value:"\u30b3\u30ea\u30b8\u30e7\u30f3\u30d4\u30c3\u30ad\u30f3\u30b0",id:"\u30b3\u30ea\u30b8\u30e7\u30f3\u30d4\u30c3\u30ad\u30f3\u30b0",level:2},{value:"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u30fc\u30d4\u30c3\u30ad\u30f3\u30b0",id:"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u30fc\u30d4\u30c3\u30ad\u30f3\u30b0",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Collision Picking - \u30af\u30ea\u30c3\u30af\u3057\u3066\u30b7\u30a7\u30a4\u30d7\u3092\u9078\u629e\u3059\u308b"}),"\n",(0,a.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/b/Ps1tTzWn/",title:"Collision Picking"}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.p,{children:"Frame Buffer Picking - \u30af\u30ea\u30c3\u30af\u3057\u3066\u30b0\u30ec\u30fc\u306e\u30b7\u30a7\u30a4\u30d7\u3092\u9078\u629e\u3059\u308b\u3002\u8d64\u3044\u5f62\u72b6\u306f\u30d4\u30c3\u30af\u3067\u304d\u306a\u3044\u3088\u3046\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,a.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/b/ZQVQqgGU/",title:"Frame Buffer Picking"}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://playcanvas.com/project/405856",children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"}),"\u3092\u30a8\u30c7\u30a3\u30bf\u304b\u3089\u8a66\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(t.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u30de\u30a6\u30b9\u306e\u30af\u30ea\u30c3\u30af\u306a\u3069\u306e\u30a2\u30af\u30b7\u30e7\u30f3\u30673D\u30b7\u30fc\u30f3\u5185\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u9078\u629e\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u30662\u3064\u306e\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"}),"\n",(0,a.jsx)(t.h2,{id:"\u30b3\u30ea\u30b8\u30e7\u30f3\u30d4\u30c3\u30ad\u30f3\u30b0",children:"\u30b3\u30ea\u30b8\u30e7\u30f3\u30d4\u30c3\u30ad\u30f3\u30b0"}),"\n",(0,a.jsxs)(t.p,{children:["\u30b3\u30ea\u30b8\u30e7\u30f3\u30d9\u30fc\u30b9\u306e\u30d4\u30c3\u30ad\u30f3\u30b0\u3067\u306f\u3001\u30d4\u30c3\u30af\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5404\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306b\u5bfe\u3057\u3066\u3001Collision\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u30b7\u30a7\u30a4\u30d7\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002\u6b21\u306b\u3001\u30de\u30a6\u30b9\u30af\u30ea\u30c3\u30af\u4f4d\u7f6e\u304b\u3089\u753b\u9762\u5185\u306b\u30ec\u30a4\u3092\u767a\u5c04\u3057\u3001",(0,a.jsx)(t.a,{href:"/api/pc.RigidBodyComponentSystem.html#raycastFirst",children:"raycastFirst()"})," \u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3057\u3066\u3001\u30b3\u30ea\u30b8\u30e7\u30f3\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u5f53\u305f\u308b\u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002\u3082\u3057\u5f53\u305f\u308c\u3070\u3001\u305d\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u304c\u300c\u9078\u629e\u3055\u308c\u305f\u300d\u3068\u3057\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"var PickerRaycast = pc.createScript('pickerRaycast');\n\n// initialize code called once per entity\nPickerRaycast.prototype.initialize = function() {\n    this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onSelect, this);\n\n    this.on('destroy', function() {\n        this.app.mouse.off(pc.EVENT_MOUSEDOWN, this.onSelect, this);\n    }, this);\n};\n\nPickerRaycast.prototype.onSelect = function (e) {\n    var from = this.entity.camera.screenToWorld(e.x, e.y, this.entity.camera.nearClip);\n    var to = this.entity.camera.screenToWorld(e.x, e.y, this.entity.camera.farClip);\n\n    var result = this.app.systems.rigidbody.raycastFirst(from, to);\n    if (result) {\n        var pickedEntity = result.entity;\n        pickedEntity.script.pulse.pulse();\n    }\n};\n"})}),"\n",(0,a.jsx)(t.h2,{id:"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u30fc\u30d4\u30c3\u30ad\u30f3\u30b0",children:"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u30fc\u30d4\u30c3\u30ad\u30f3\u30b0"}),"\n",(0,a.jsxs)(t.p,{children:["\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u30fc\u30d9\u30fc\u30b9\u306e\u30d4\u30c3\u30af\u306f",(0,a.jsx)(t.a,{href:"/api/pc.Picker.html",children:"pc.Picker"}),"\u3092\u4f7f\u7528\u3057\u3066\u30b7\u30fc\u30f3\u3092\u5185\u90e8\u30d0\u30c3\u30d5\u30a1\u30fc\u306b\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3057\u307e\u3059\u3002\u30de\u30a6\u30b9\u304c\u30af\u30ea\u30c3\u30af\u3055\u308c\u305f\u5834\u5408\u3001\u30de\u30a6\u30b9\u306e\u4f4d\u7f6e\u306e\u30d0\u30c3\u30d5\u30a1\u30fc\u306e\u8272\u304c\u4f7f\u7528\u3055\u308c\u3001\u3069\u306e\u30e1\u30c3\u30b7\u30e5\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304c\u9078\u629e\u3055\u308c\u305f\u304b\u304c\u6c7a\u5b9a\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u30b3\u30ea\u30b8\u30e7\u30f3\u30d9\u30fc\u30b9\u306e\u65b9\u6cd5\u3068\u6bd4\u3079\u3066\u3044\u304f\u3064\u304b\u306e\u5229\u70b9\u3068\u6b20\u70b9\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(t.p,{children:"\u5229\u70b9:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"\u5c0f\u3055\u306a\u9577\u65b9\u5f62\u3092\u4f7f\u7528\u3057\u3066\u3001\u540c\u6642\u306b\u591a\u304f\u306e\u30a2\u30a4\u30c6\u30e0\u3092\u30d4\u30c3\u30af\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,a.jsx)(t.li,{children:"\u30d7\u30ea\u30ed\u30fc\u30c9\u6642\u9593\u3092\u77ed\u7e2e\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u305f\u3081\u3001\u7269\u7406\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u542b\u3081\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u305b\u3093\u3002"}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["\u6b20\u70b9\u306f\u3001\u3053\u308c\u304c",(0,a.jsx)(t.code,{children:"readPixels"}),"\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u305f\u3081\u3001\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30d1\u30a4\u30d7\u30e9\u30a4\u30f3\u3092\u505c\u6b62\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u7279\u306b\u30e2\u30d0\u30a4\u30eb\u3084GPU\u91cd\u3044\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u3068\u3063\u3066\u6df1\u523b\u306a\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u6027\u80fd\u306e\u5f71\u97ff\u3092\u4e0e\u3048\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,a.jsxs)(t.p,{children:["\u30d0\u30c3\u30d5\u30a1\u30fc\u306e\u30b5\u30a4\u30ba\u3092\u5c0f\u3055\u304f\u3057\u3066\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3092\u5411\u4e0a\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u3001\u30b3\u30b9\u30c8\u3092\u304b\u3051\u305a\u306b\u7cbe\u5ea6\u3092\u4f4e\u4e0b\u3055\u305b\u307e\u3059\u3002\u4e0b\u306e\u4f8b\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u306f\u3001\u5c5e\u6027",(0,a.jsx)(t.code,{children:"pickAreaScale"}),"\u3092\u4f7f\u7528\u3057\u3066\u3001\u6570\u5024\u304c\u5c0f\u3055\u3044\u307b\u3069\u30d4\u30c3\u30ab\u30fc\u304c\u9ad8\u901f\u306b\u306a\u308a\u307e\u3059\u304c\u3001\u7cbe\u5ea6\u304c\u4f4e\u4e0b\u3059\u308b\u305f\u3081\u3001\u6700\u3082\u6b63\u78ba\u3067\u4f4e\u901f\u306a1\u3088\u308a\u30820.01\u304c\u6700\u9069\u3067\u3059\u30020.25\u304c\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u3059\u3002"]}),"\n",(0,a.jsxs)(t.p,{children:["\u307e\u305f\u3001",(0,a.jsx)(t.code,{children:"layerNames"}),"\u914d\u5217\u3092\u4f7f\u7528\u3057\u3066\u30d4\u30c3\u30af\u3059\u308b\u30ec\u30a4\u30e4\u30fc\u3092\u5236\u9650\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u30d4\u30c3\u30af\u3059\u308b\u30ec\u30a4\u30e4\u30fc\u306e\u540d\u524d\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u5fc5\u8981\u306a\u3082\u306e\u3060\u3051\u3092\u5185\u90e8\u30d0\u30c3\u30d5\u30a1\u30fc\u306b\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3057\u3066\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3092\u5411\u4e0a\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"var PickerFramebuffer = pc.createScript('pickerFramebuffer');\n\nPickerFramebuffer.attributes.add('pickAreaScale', {\n    type: 'number',\n    title: 'Pick Area Scale',\n    description: '1 is more accurate but worse performance. 0.01 is best performance but least accurate. 0.25 is the default.',\n    default: 0.25,\n    min: 0.01,\n    max: 1\n});\n\nPickerFramebuffer.attributes.add('layerNames', {\n    type: 'string',\n    title: 'Layers Names',\n    array: true,\n    description: 'Layer names from which objects will be picked from.',\n    default: ['World']\n});\n\n// initialize code called once per entity\nPickerFramebuffer.prototype.initialize = function() {\n    // Create a frame buffer picker with a scaled resolution\n    var canvas = this.app.graphicsDevice.canvas;\n    var canvasWidth = parseInt(canvas.clientWidth, 10);\n    var canvasHeight = parseInt(canvas.clientHeight, 10);\n\n    this.picker = new pc.Picker(this.app, canvasWidth * this.pickAreaScale, canvasHeight * this.pickAreaScale);\n    this.layers = [];\n    for (var i = 0; i < this.layerNames.length; ++i) {\n        var layer = this.app.scene.layers.getLayerByName(this.layerNames[i]);\n        if (layer) {\n            this.layers.push(layer);\n        }\n    }\n\n    this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onSelect, this);\n\n    this.on('destroy', function() {\n        this.app.mouse.off(pc.EVENT_MOUSEDOWN, this.onSelect, this);\n    }, this);\n};\n\nPickerFramebuffer.prototype.onSelect = function (event) {\n    var canvas = this.app.graphicsDevice.canvas;\n    var canvasWidth = parseInt(canvas.clientWidth, 10);\n    var canvasHeight = parseInt(canvas.clientHeight, 10);\n\n    var camera = this.entity.camera.camera;\n    var scene = this.app.scene;\n    var picker = this.picker;\n\n    picker.resize(canvasWidth * this.pickAreaScale, canvasHeight * this.pickAreaScale);\n    picker.prepare(camera, scene, this.layers);\n\n    // Map the mouse coordinates into picker coordinates and\n    // query the selection\n    var selected = picker.getSelection({\n        x: Math.floor(event.x * (picker.width / canvasWidth)),\n        y: picker.height - Math.floor(event.y * (picker.height / canvasHeight))\n    });\n\n    if (selected.length > 0) {\n        // Get the graph node used by the selected mesh instance\n        var entity = selected[0].node;\n\n        // Bubble up the hierarchy until we find an actual Entity\n        // that has the script we are looking for\n        while (entity !== null && !(entity instanceof pc.Entity) && (entity.script && entity.script.pulse)) {\n            entity = entity.getParent();\n        }\n        if (entity) {\n            entity.script.pulse.pulse();\n        }\n    }\n};\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>r});var a=n(67294);const i={},s=a.createContext(i);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);