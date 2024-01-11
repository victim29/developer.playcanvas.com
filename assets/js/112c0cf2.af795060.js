"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[8071],{26158:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var n=t(85893),a=t(11151);const i={title:"Using the Asset Registry",tags:["loading","assets","basics"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406036/U2FYM6-image-75.jpg"},r=void 0,d={id:"tutorials/using-assets",title:"Using the Asset Registry",description:"Click to focus, hold and release SPACEBAR to switch between two A and B models. Press 'L' to load the C model. Hold 'C' to display the C model.",source:"@site/docs/tutorials/using-assets.md",sourceDirName:"tutorials",slug:"/tutorials/using-assets",permalink:"/developer.playcanvas.com/tutorials/using-assets",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/using-assets.md",tags:[{label:"loading",permalink:"/developer.playcanvas.com/tags/loading"},{label:"assets",permalink:"/developer.playcanvas.com/tags/assets"},{label:"basics",permalink:"/developer.playcanvas.com/tags/basics"}],version:"current",frontMatter:{title:"Using the Asset Registry",tags:["loading","assets","basics"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406036/U2FYM6-image-75.jpg"},sidebar:"tutorialsSidebar",previous:{title:"User Interface - Text Input",permalink:"/developer.playcanvas.com/tutorials/ui-text-input"},next:{title:"Using events with scripts",permalink:"/developer.playcanvas.com/tutorials/using-events-with-scripts"}},o={},l=[{value:"Setup",id:"setup",level:2},{value:"The AssetRegistry",id:"the-assetregistry",level:2},{value:"Using preloaded assets",id:"using-preloaded-assets",level:2},{value:"Loading assets at runtime",id:"loading-assets-at-runtime",level:2},{value:"The complete script",id:"the-complete-script",level:2},{value:"AssetRegistry events",id:"assetregistry-events",level:2}];function c(e){const s={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"iframe-container",children:(0,n.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/p/QwDM4qaF/",title:"Using the Asset Registry"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Click to focus, hold and release SPACEBAR to switch between two A and B models. Press 'L' to load the C model. Hold 'C' to display the C model."})}),"\n",(0,n.jsx)(s.p,{children:"For simple games and products you will set up all your assets in the Editor, they will be preloaded before you application starts, and your app will just work."}),"\n",(0,n.jsxs)(s.p,{children:["For more advanced products you may wish to access your assets in code, change references, modify properties and also stream data in so that your application can load more quickly. Only loading the assets as they are needed. To do this you'll use the ",(0,n.jsx)(s.a,{href:"/api/pc.AssetRegistry.html",children:(0,n.jsx)(s.code,{children:"AssetRegistry"})}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["In this tutorial, we'll build a small scene which lets you swap the model on a render component by pressing a key. We'll also dynamically load a third model that is not preloaded. You can see the completed ",(0,n.jsx)(s.a,{href:"https://playcanvas.com/project/406036",children:"project here"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"setup",children:"Setup"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"The project is set up as follows"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Three model assets are uploaded: ",(0,n.jsx)(s.strong,{children:"A"})," is a model of the letter A, ",(0,n.jsx)(s.strong,{children:"B"})," is a model of the letter B and ",(0,n.jsx)(s.strong,{children:"C"})," is a model of the letter C."]}),"\n",(0,n.jsxs)(s.li,{children:["The ",(0,n.jsx)(s.strong,{children:"C"})," render asset is set up ",(0,n.jsx)(s.em,{children:"not"})," to be preloaded."]}),"\n",(0,n.jsxs)(s.li,{children:["A render Entity is added to the scene and the model ",(0,n.jsx)(s.strong,{children:"A"})," is assigned to the render component."]}),"\n",(0,n.jsxs)(s.li,{children:["A script component is added to the render Entity and a new script is created called ",(0,n.jsx)(s.code,{children:"update_asset.js"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Download the ",(0,n.jsx)(s.a,{href:"/downloads/tutorials/A.dae",children:"A model"}),", ",(0,n.jsx)(s.a,{href:"/downloads/tutorials/B.dae",children:"B model"})," and ",(0,n.jsx)(s.a,{href:"/downloads/tutorials/C.dae",children:"C model"})," and upload them to your project. Ensure that the files are named A.dae, B.dae and C.dae as this will influence the asset names."]}),"\n",(0,n.jsx)(s.h2,{id:"the-assetregistry",children:"The AssetRegistry"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.a,{href:"/api/pc.AssetRegistry.html",children:(0,n.jsx)(s.code,{children:"pc.AssetRegistry"})})," is available in all scripts as ",(0,n.jsx)(s.code,{children:"this.app.assets"}),". The registry is populated with the details of all the runtime assets added to your project whether they are loaded or not. Use the Asset Registry to find the assets you need in your application."]}),"\n",(0,n.jsxs)(s.p,{children:["In this case we've declared three script attributes ",(0,n.jsx)(s.code,{children:"a"}),", ",(0,n.jsx)(s.code,{children:"b"})," and ",(0,n.jsx)(s.code,{children:"c"})," which are assigned to assets in the Editor. Then they are automatically available in our script."]}),"\n",(0,n.jsx)(s.h2,{id:"using-preloaded-assets",children:"Using preloaded assets"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:"    if (app.keyboard.isPressed(pc.KEY_SPACE)) {\n        if (this.entity.render.asset !== this.b.id) {\n            // update the render component to the new Render Asset\n            console.log('Changed to B Render Asset');\n            this.entity.render.asset = this.b;\n        }\n    } else {\n        // ...\n            if (this.entity.render.asset !== this.a.id) {\n                // restore original Render Asset\n                console.log('Changed to A Render Asset');\n                this.entity.render.asset = this.a;\n            }\n        // ...\n    }\n"})}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.strong,{children:"A"})," and ",(0,n.jsx)(s.strong,{children:"B"})," assets are marked as ",(0,n.jsx)(s.strong,{children:"preload"})," in this project. This means that during the loading screen, these assets are downloaded. They will be ready to use as soon as your application starts. When an asset is loaded, the loaded resource is available as ",(0,n.jsx)(s.code,{children:"asset.resource"})," and we can assign the asset to the ",(0,n.jsx)(s.a,{href:"/api/pc.RenderComponent.html#asset",children:"render component asset property"}),". If ",(0,n.jsx)(s.code,{children:"asset.loaded"})," is ",(0,n.jsx)(s.code,{children:"false"}),", then the asset isn't loaded."]}),"\n",(0,n.jsx)("img",{loading:"lazy",src:"/images/tutorials/using_assets/using-assets-a-preload.png",width:"360"}),"\n",(0,n.jsxs)(s.p,{children:["So, the ",(0,n.jsx)(s.code,{children:"A"})," and ",(0,n.jsx)(s.code,{children:"B"})," models are preloaded, which means we know they will be ready when we are running the application. This code checks if the space bar is pressed, and if so we change the render asset on the render component to be the resource property of the asset. In this case ",(0,n.jsx)(s.code,{children:"asset.resource"})," will be a ",(0,n.jsx)(s.code,{children:"pc.Render"})," object. For each different asset type (audio, texture, etc), the ",(0,n.jsx)(s.code,{children:"asset.resource"})," property will be the relevant type."]}),"\n",(0,n.jsx)(s.h2,{id:"loading-assets-at-runtime",children:"Loading assets at runtime"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:"if (app.keyboard.isPressed(pc.KEY_C)) {\n    if (this.c.loaded) {\n        if (this.entity.render.asset !== this.c.id) {\n            console.log('Changed to C Render Asset');\n            this.entity.render.asset = this.c;\n        }\n    }\n} else {\n    if (this.entity.render.asset !== this.a.id) {\n        // restore original Render Asset\n        console.log('Changed to A Render Asset');\n        this.entity.render.asset = this.a;\n    }\n}\n"})}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.strong,{children:"C"})," render asset is not marked as ",(0,n.jsx)(s.em,{children:"preload"}),", so in the code above, you can see that we check if the resource is loaded before we use it. if ",(0,n.jsx)(s.code,{children:"asset.loaded"})," is false, then the resource isn't loaded and we can't change the render component. If the ",(0,n.jsx)(s.strong,{children:"C"})," render asset is loaded then ",(0,n.jsx)(s.code,{children:"this.c.resource"})," will be the ",(0,n.jsx)(s.code,{children:"pc.Render"})," property and ",(0,n.jsx)(s.code,{children:"asset.loaded"})," will be true, we'll be then able to assign it."]}),"\n",(0,n.jsx)("img",{loading:"lazy",src:"/images/tutorials/using_assets/using-assets-c-preload.png",width:"360"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:"if (this.app.keyboard.isPressed(pc.KEY_L)) {\n    this.app.assets.load(this.c);\n}\n"})}),"\n",(0,n.jsxs)(s.p,{children:["When you press the ",(0,n.jsx)(s.code,{children:"L"})," key we load the ",(0,n.jsx)(s.strong,{children:"C"})," model. To do this we pass the unloaded asset into ",(0,n.jsx)(s.code,{children:"this.app.assets.load()"}),". If the asset is already loaded, this method will do nothing."]}),"\n",(0,n.jsxs)(s.p,{children:["Once the asset is loaded ",(0,n.jsx)(s.code,{children:"asset.resource"})," will be a ",(0,n.jsx)(s.code,{children:"pc.Render"})," instance and we can assign the asset to the render component by pressing the ",(0,n.jsx)(s.code,{children:"C"})," key."]}),"\n",(0,n.jsx)(s.h2,{id:"the-complete-script",children:"The complete script"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:"var UpdateAsset = pc.createScript('updateAsset');\n\nUpdateAsset.attributes.add('a', {\n    type: 'asset',\n    assetType: 'render'\n});\n\nUpdateAsset.attributes.add('b', {\n    type: 'asset',\n    assetType: 'render'\n});\n\nUpdateAsset.attributes.add('c', {\n    type: 'asset',\n    assetType: 'render'\n});\n\n// initialize code called once per entity\nUpdateAsset.prototype.initialize = function() {\n    this.app.keyboard.preventDefault = true;\n};\n\n// update code called every frame\nUpdateAsset.prototype.update = function(dt) {\n    var app = this.app;\n\n    if (app.keyboard.isPressed(pc.KEY_SPACE)) {\n        if (this.entity.render.asset !== this.b.id) {\n            // update the render component to the new Render Asset\n            console.log('Changed to B Render Asset');\n            this.entity.render.asset = this.b;\n        }\n    } else {\n        if (app.keyboard.isPressed(pc.KEY_C)) {\n            if (this.c.loaded) {\n                if (this.entity.render.asset !== this.c.id) {\n                    console.log('Changed to C Render Asset');\n                    this.entity.render.asset = this.c;\n                }\n            }\n        } else {\n            if (this.entity.render.asset !== this.a.id) {\n                // restore original Render Asset\n                console.log('Changed to A Render Asset');\n                this.entity.render.asset = this.a;\n            }\n        }\n    }\n\n    if (app.keyboard.isPressed(pc.KEY_L)) {\n        app.assets.load(this.c);\n    }\n};\n"})}),"\n",(0,n.jsx)(s.h2,{id:"assetregistry-events",children:"AssetRegistry events"}),"\n",(0,n.jsxs)(s.p,{children:["One thing we don't demonstrate in this example is how to know when an asset is loaded. To do this we use ",(0,n.jsx)(s.code,{children:"pc.AssetRegistry"})," events like the ",(0,n.jsx)(s.code,{children:'"load"'})," event. Here's some sample code:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:'// find the asset by name in the registry\nvar asset = this.app.assets.find("A");\n// set up a one-off event listener for the load event\nthis.app.assets.once("load", function (asset) {\n    // asset.resource is now ready\n}, this);\n'})}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:'"load"'})," event is quite broad. It is fired for every asset that is loaded, so if assets are loaded elsewhere, you won't know that this is your asset. Instead you can narrow your event down by using the ",(0,n.jsx)(s.code,{children:'"load:id"'})," event."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:'// find the asset in the registry\nvar asset = this.app.assets.find("A");\n// set up a one-off event listener for the load event\nthis.app.assets.once("load:" + asset.id, function (asset) {\n    // asset.resource is now ready\n}, this);\n'})}),"\n",(0,n.jsx)(s.p,{children:"The above event will only be fired for that specific asset. Much more useful."}),"\n",(0,n.jsx)(s.p,{children:"Finally, there is one specific coding pattern, that often occurs. So often, in fact, that we've provided a convenient method to do it for you."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:'var asset = this.app.assets.find("A");\nif (!asset.loaded) {\n    this.app.assets.once("load:" + asset.id, function (asset) {\n        // do something with asset.resource\n    });\n    this.app.assets.load(asset);\n} else {\n    // do something with asset.resource\n}\n'})}),"\n",(0,n.jsxs)(s.p,{children:["This code loads an asset when it is needed, but it's a bit long winded. So, instead, you can use the ",(0,n.jsx)(s.code,{children:"asset.ready()"})," method. This code performs the same function as above"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:'var asset = this.app.assets.find("A");\nasset.ready(function (asset) {\n    // do something with asset.resource\n});\nthis.app.assets.load(asset);\n'})}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"asset.ready()"})," method will call it's callback as soon as the asset is loaded, if the asset is already loaded, it will call it straight away. ",(0,n.jsx)(s.code,{children:"app.assets.load()"})," does nothing if the asset is already loaded."]})]})}function h(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>d,a:()=>r});var n=t(67294);const a={},i=n.createContext(a);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);