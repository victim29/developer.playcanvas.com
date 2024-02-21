"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[3952],{86814:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>n,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var s=t(74848),i=t(28453);const r={title:"Making a Simple Game - Part 2",tags:["games"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406050/LIJTDO-image-75.jpg"},l=void 0,o={id:"tutorials/keepyup-part-two",title:"Making a Simple Game - Part 2",description:"You can find the full project here. If you haven't seen Part 1 read it first.",source:"@site/docs/tutorials/keepyup-part-two.md",sourceDirName:"tutorials",slug:"/tutorials/keepyup-part-two",permalink:"/tutorials/keepyup-part-two",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/keepyup-part-two.md",tags:[{label:"games",permalink:"/tags/games"}],version:"current",frontMatter:{title:"Making a Simple Game - Part 2",tags:["games"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406050/LIJTDO-image-75.jpg"},sidebar:"tutorialsSidebar",previous:{title:"Making a Simple Game - Part 3",permalink:"/tutorials/keepyup-part-three"},next:{title:"Basic Keyboard Input",permalink:"/tutorials/keyboard-input"}},n={},h=[{value:"Material Setup",id:"material-setup",level:2},{value:"What is a material?",id:"what-is-a-material",level:3},{value:"Cubemap",id:"cubemap",level:3},{value:"Football Material",id:"football-material",level:2},{value:"Diffuse",id:"diffuse",level:4},{value:"Environment",id:"environment",level:4},{value:"Specular",id:"specular",level:4},{value:"Normal",id:"normal",level:4},{value:"Backdrop Material",id:"backdrop-material",level:2},{value:"Emissive",id:"emissive",level:4},{value:"Overlay Material",id:"overlay-material",level:2}];function c(e){const a={a:"a",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"iframe-container",children:(0,s.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/p/KH37bnOk/?overlay=false",title:"Making a Simple Game - Part 2"})}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsxs)(a.em,{children:["You can find the ",(0,s.jsx)(a.a,{href:"https://playcanvas.com/project/406050",children:"full project here"}),". If you haven't seen ",(0,s.jsx)(a.a,{href:"/tutorials/keepyup-part-one/",children:"Part 1"})," read it first."]})}),"\n",(0,s.jsx)(a.h2,{id:"material-setup",children:"Material Setup"}),"\n",(0,s.jsx)(a.p,{children:"We've kept the graphics very simple for this game so there isn't too much set up but will have to set up some Material assets for the ball, the background and the overlay."}),"\n",(0,s.jsx)(a.h3,{id:"what-is-a-material",children:"What is a material?"}),"\n",(0,s.jsx)(a.p,{children:"A Material is a type of asset in PlayCanvas that describes the way that the surface of a 3D model looks when it is rendered to the screen. The material determines the color of the surface, but also the way the surface interacts with light. For example, you can set up a material to be a smooth metal, or a rough rubber. PlayCanvas has a built in material called a Physical Material which should cover 90% of your use cases for a material. When you get more advanced it is possible to create your own materials by using GLSL shader code to write your own."}),"\n",(0,s.jsx)(a.h3,{id:"cubemap",children:"Cubemap"}),"\n",(0,s.jsxs)(a.p,{children:["Before we jump into the materials, we're going to set up our cubemap asset. A cubemap is an asset that consists of 6 textures on the faces of a cube. You can think of this as the far off environment of your scene. The PlayCanvas Physical materials can use a cubemap to do Image Based Lighting. This uses the colors in the cubemap to light materials in the scene. For example in our scene the cubemap has a blue sky and a green grass surface. So our ball will be lit blue from above and green from below. ",(0,s.jsx)(a.a,{href:"/user-manual/assets/types/cubemap/",children:"Read more"})," in our documentation."]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:"/images/tutorials/beginner/keepyup-part-two/cubemap-preview.jpg",alt:"Cubemap"})}),"\n",(0,s.jsxs)(a.p,{children:['To set up a cubemap, first create a Cubemap asset from the New Asset menu, assign 6 textures, one to each face of the cubemap. When your cubemap has all 6 faces assigned, press the "Prefilter" button. ',(0,s.jsx)(a.strong,{children:"Prefiltering in required for the cubemap to work correctly!"})]}),"\n",(0,s.jsx)(a.h2,{id:"football-material",children:"Football Material"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:"/images/tutorials/beginner/keepyup-part-two/ball-material.jpg",alt:"Football"})}),"\n",(0,s.jsxs)(a.p,{children:["The football is a 3D model that we imported from the ",(0,s.jsx)(a.a,{href:"https://store.playcanvas.com/",children:"PlayCanvas Asset Library"}),". The football materials will mostly be set up for you but you may need to make some simple changes. Lets look at each map used by the football"]}),"\n",(0,s.jsx)(a.h4,{id:"diffuse",children:"Diffuse"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:"/images/tutorials/beginner/keepyup-part-two/ball-diffuse.jpg",alt:"Diffuse"})}),"\n",(0,s.jsx)(a.p,{children:"The diffuse map defines the color of the surface. In this case it is the black and white pattern of the football."}),"\n",(0,s.jsx)(a.h4,{id:"environment",children:"Environment"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:"/images/tutorials/beginner/keepyup-part-two/ball-env.jpg",alt:"Environment"})}),"\n",(0,s.jsx)(a.p,{children:"We're going to jump quickly to the Environment section as this is needed to see the effects of the Specular changes. To set up the Environment drag the Cubemap asset on the the cubemap slot in the material."}),"\n",(0,s.jsx)(a.h4,{id:"specular",children:"Specular"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:"/images/tutorials/beginner/keepyup-part-two/ball-spec.jpg",alt:"Specular"})}),"\n",(0,s.jsxs)(a.p,{children:['The specular section determines how the material interacts with lights. There are two "workflows" for specular, the "Metalness workflow" and the "Specular workflow", you can find more information in our ',(0,s.jsx)(a.a,{href:"/user-manual/graphics/physical-rendering/physical-materials/",children:"documentation"}),'. For the football we are using Metalness, so be sure to check the "Use Metalness" box. Our football is not made of metal, so we slide the metalness slider all the way down to 0. Then we use the glossiness slider to set our rough/smooth the material should be. We\'ve set this to about halfway which gives a nice shine to the ball, but not completely smooth.']}),"\n",(0,s.jsx)(a.h4,{id:"normal",children:"Normal"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:"/images/tutorials/beginner/keepyup-part-two/ball-normal.jpg",alt:"Normal"})}),"\n",(0,s.jsx)(a.p,{children:"The final texture map we apply is the normal map. The normal map is used to add details to the model. In this case, the separate patches of the football are not modelled in the geometry (which is smooth sphere) but they are in the normal map. This means the ball will be correctly lit as if the patches were there, but without the overhead of lots of extra polygons."}),"\n",(0,s.jsx)(a.h2,{id:"backdrop-material",children:"Backdrop Material"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:"/images/tutorials/beginner/keepyup-part-two/backdrop-material.jpg",alt:"Backdrop"})}),"\n",(0,s.jsx)(a.p,{children:"The backdrop material is much simpler, we have only one texture map."}),"\n",(0,s.jsx)(a.h4,{id:"emissive",children:"Emissive"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:"/images/tutorials/beginner/keepyup-part-two/backdrop-emissive.jpg",alt:"Emissive"})}),"\n",(0,s.jsx)(a.p,{children:"The emissive map sets the color at the surface as if it was emitting light of that color. This means that lights in the scene don't effect how bright an emissive surface is. Note, an emissive material doesn't affect any other objects in your scene, there is no light actually emitted."}),"\n",(0,s.jsx)(a.p,{children:"In this case, we don't want the background to be lit, it is just a static scene. So we use the emissive map to do that."}),"\n",(0,s.jsx)(a.h2,{id:"overlay-material",children:"Overlay Material"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:"/images/tutorials/beginner/keepyup-part-two/overlay-material.jpg",alt:"Overlay"})}),"\n",(0,s.jsx)(a.p,{children:"The overlay material is even simpler than the backdrop. In this case all we are doing is setting the color off the emissive property"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:"/images/tutorials/beginner/keepyup-part-two/overlay-emissive.jpg",alt:"Emissive"})}),"\n",(0,s.jsxs)(a.p,{children:["Continue on to ",(0,s.jsx)(a.a,{href:"/tutorials/keepyup-part-three/",children:"Part 3"}),"."]})]})}function p(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>l,x:()=>o});var s=t(96540);const i={},r=s.createContext(i);function l(e){const a=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:a},e.children)}}}]);