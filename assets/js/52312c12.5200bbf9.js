"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[1730],{88089:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>r,contentTitle:()=>t,default:()=>c,frontMatter:()=>n,metadata:()=>h,toc:()=>d});var i=a(74848),o=a(28453);const n={title:"Shadows",sidebar_position:2},t=void 0,h={id:"user-manual/graphics/lighting/shadows",title:"Shadows",description:"Shadows are a great way to add realism to your games. However, dynamic (realtime) shadows, can come with a significant runtime performance cost. For a more performant way of adding static shadows to your scene. See Lightmaps.",source:"@site/docs/user-manual/graphics/lighting/shadows.md",sourceDirName:"user-manual/graphics/lighting",slug:"/user-manual/graphics/lighting/shadows",permalink:"/user-manual/graphics/lighting/shadows",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/graphics/lighting/shadows.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Shadows",sidebar_position:2},sidebar:"userManualSidebar",previous:{title:"Lights",permalink:"/user-manual/graphics/lighting/lights"},next:{title:"Lightmapping",permalink:"/user-manual/graphics/lighting/lightmapping"}},r={},d=[{value:"Enabling Shadows",id:"enabling-shadows",level:2},{value:"Shadow Cascades",id:"shadow-cascades",level:2},{value:"Number of cascades",id:"number-of-cascades",level:3},{value:"Distribution of cascades",id:"distribution-of-cascades",level:3},{value:"Tuning Shadows",id:"tuning-shadows",level:2},{value:"Shadow Distance",id:"shadow-distance",level:3},{value:"Shadow Intensity",id:"shadow-intensity",level:3},{value:"Shadow Resolution",id:"shadow-resolution",level:3},{value:"Shadow Bias",id:"shadow-bias",level:3},{value:"Normal Offset Bias",id:"normal-offset-bias",level:3},{value:"Soft Shadows vs Hard Shadows",id:"soft-shadows-vs-hard-shadows",level:2},{value:"Performance Considerations",id:"performance-considerations",level:2}];function l(e){const s={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["Shadows are a great way to add realism to your games. However, dynamic (realtime) shadows, can come with a significant runtime performance cost. For a more performant way of adding static shadows to your scene. See ",(0,i.jsx)(s.a,{href:"/user-manual/graphics/lighting/lightmapping",children:"Lightmaps"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"/images/user-manual/graphics/lighting/shadows/doom3_shadows.jpg",alt:"Characters with shadow casting"})}),"\n",(0,i.jsx)(s.p,{children:"The PlayCanvas engine implements a shadowing algorithm called shadow mapping. It is completely cross-platform and so is guaranteed to work on both mobile and the desktop."}),"\n",(0,i.jsx)(s.h2,{id:"enabling-shadows",children:"Enabling Shadows"}),"\n",(0,i.jsx)("img",{loading:"lazy",src:"/images/user-manual/graphics/lighting/shadows/light-shadow-options.png",width:"480"}),"\n",(0,i.jsx)(s.p,{children:"By default, shadow casting is disabled in PlayCanvas. You have to explicitly enable it yourself. Fortunately, enabling shadows is easy. First of all, identify which lights in your scene you want to cast shadows. Select the lights in the Hierarchy to edit their properties in the Inspector panel. Every light has a 'Cast Shadows' option. Simply check this option for the light to generate shadows for shadow casting graphical objects in your scene."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"/images/user-manual/scenes/components/component-model.png",alt:"Model Component"})}),"\n",(0,i.jsx)(s.p,{children:"Now you need to specify which graphical objects in your scene cast and receive shadows. By default, all render and model components cast and receive shadows. To modify these properties, select the entity in the Hierarchy, locate the render or model component in the Inspector and uncheck the 'Cast Shadows' or 'Receive Shadows' option as required."}),"\n",(0,i.jsx)(s.h2,{id:"shadow-cascades",children:"Shadow Cascades"}),"\n",(0,i.jsx)(s.p,{children:"When a directional shadow is used over a large area, it often exhibits aliasing, where a shadow near the camera has a low resolution. Capturing the shadow in a single shadow map requires very high and impractical resolution to improve this."}),"\n",(0,i.jsx)(s.p,{children:"Shadow cascades help to fix this problem by splitting the camera view frustum along the viewing direction, and a separate shadow map is used for each split. This gives nearby objects one shadow map, and another shadow map captures everything in the distance, and optionally additional shadow maps in between."}),"\n",(0,i.jsx)(s.p,{children:"Note that the number of shadow cascades has an effect on performance, as each shadow casting mesh might need to be rendered into more than a single shadow map."}),"\n",(0,i.jsx)(s.p,{children:"The following properties can be used to set up shadow cascades."}),"\n",(0,i.jsx)(s.h3,{id:"number-of-cascades",children:"Number of cascades"}),"\n",(0,i.jsx)(s.p,{children:"Number of cascades represents the number of view frustum subdivisions, and can be 1, 2, 3 or 4. The default value of 1 represents a single shadow map."}),"\n",(0,i.jsx)(s.p,{children:"A screenshot showing a single shadow cascade."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"/images/user-manual/graphics/lighting/shadows/shadow_cascades_1.jpg",alt:"One cascade"})}),"\n",(0,i.jsx)(s.p,{children:"A screenshot showing four shadow cascades."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"/images/user-manual/graphics/lighting/shadows/shadow_cascades_4.jpg",alt:"Four cascades"})}),"\n",(0,i.jsx)(s.h3,{id:"distribution-of-cascades",children:"Distribution of cascades"}),"\n",(0,i.jsx)(s.p,{children:"The distribution of subdivision of the camera frustum for individual shadow cascades. A value in the range of 0 to 1 can be specified. A value of 0 represents a linear distribution and a value of 1 represents a logarithmic distribution. Visually, a higher value distributes more shadow map resolution to foreground objects, while a lower value distributes it to more distant objects."}),"\n",(0,i.jsx)(s.h2,{id:"tuning-shadows",children:"Tuning Shadows"}),"\n",(0,i.jsxs)(s.p,{children:["The shadow mapping technique used by PlayCanvas has only finite resolution. Therefore, you may need to tune some values to make them look as good as possible. The following properties can be found in the ",(0,i.jsx)(s.a,{href:"/user-manual/scenes/components/light",children:"Light Component"})," UI."]}),"\n",(0,i.jsx)(s.h3,{id:"shadow-distance",children:"Shadow Distance"}),"\n",(0,i.jsx)(s.p,{children:"The shadow distance is the distance from the viewpoint beyond which directional light shadows are no longer rendered. The smaller this value, the crisper your shadows will be. The problem is that the viewer will be able to see the shadows suddenly appear as the viewpoint moves around the scene. Therefore, you should balance this value based on how far the player can see into the distance and generally what looks good."}),"\n",(0,i.jsx)(s.h3,{id:"shadow-intensity",children:"Shadow Intensity"}),"\n",(0,i.jsx)(s.p,{children:"The intensity of the shadow, where 1 represents full intensity shadow cast by this light, and 0 represents no shadow."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"/images/user-manual/graphics/lighting/shadows/shadow-intensity.gif",alt:"Shadow Intensity"})}),"\n",(0,i.jsx)(s.h3,{id:"shadow-resolution",children:"Shadow Resolution"}),"\n",(0,i.jsx)(s.p,{children:"Every light casts shadows via a shadow map. This shadow map can have a resolution of 256x256, 512x512, 1024x1024 or 2048x2048 and this value is also set in the light component's interface. The higher the resolution, the crisper the shadows. However, higher resolution shadows are more expensive to render so be sure to balance performance against quality."}),"\n",(0,i.jsx)(s.h3,{id:"shadow-bias",children:"Shadow Bias"}),"\n",(0,i.jsx)(s.p,{children:"Shadow mapping can be prone to rendering artifacts that can look very ugly. If you notice bands of shadow or speckled patches where you do not expect, you should try tuning the shadow bias to resolve the problem."}),"\n",(0,i.jsx)(s.h3,{id:"normal-offset-bias",children:"Normal Offset Bias"}),"\n",(0,i.jsx)(s.p,{children:"'Shadow acne' artifacts are a big problem and the shadow bias can eliminate them quite effectively. Unfortunately, this always introduces some level of 'Peter Panning', the phenomenon where shadows make a object appear to be floating in mid-air."}),"\n",(0,i.jsx)(s.p,{children:'The Normal Offset Bias solves this problem. In addition to using the depth bias, we can avoid both shadow acne and Peter Panning by making small tweaks to the UV coordinates used in the shadow map look-up. A fragment\'s position is offset along its geometric normal. This "Normal Offset" technique yields vastly superior results to a constant shadow bias only approach.'}),"\n",(0,i.jsx)(s.h2,{id:"soft-shadows-vs-hard-shadows",children:"Soft Shadows vs Hard Shadows"}),"\n",(0,i.jsx)(s.p,{children:"The outline of a shadow is called the penumbra. This is a transition from dark to light which gives shadows a soft edge. Softening shadow edges is the default in PlayCanvas but you can change this setting if you wish to achieve hard edged shadows. See below for a comparison of soft and hard edged shadows:"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"/images/user-manual/graphics/lighting/shadows/hard_vs_soft.jpg",alt:"Hard vs soft shadows"})}),"\n",(0,i.jsx)(s.p,{children:"Soft shadows are achieved by performing more samples of the shadow map on the GPU. The algorithm used is called Percentage Closest Filtering or PCF for short. This algorithm reads 9 localized samples (a 3 by 3 matrix) from the shadow map instead of just one as is used for hard shadows."}),"\n",(0,i.jsx)(s.p,{children:"The shadow sampling type is specified per light and so the option can be found in the Light Inspector."}),"\n",(0,i.jsx)(s.h2,{id:"performance-considerations",children:"Performance Considerations"}),"\n",(0,i.jsx)(s.p,{children:"Enabling shadows has performance implications:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"For each shadow casting directional or spot light, the scene must be rendered once into a shadow map every frame. Omni light shadows are far more expensive since the scene is rendered six times per light (the shadow map is stored as a 6-sided cube map). Rendering the scene into shadow maps places load on both the CPU and the GPU."}),"\n",(0,i.jsx)(s.li,{children:"Using a greater shadow map resolution with generate crisper shadows but the GPU must fill more shadow map pixels and therefore this may affect frame rate."}),"\n",(0,i.jsx)(s.li,{children:"Selecting soft shadows (PCF3x3) for the shadow sample type on a shadow receiving material is more expensive on the GPU versus the hard shadows option."}),"\n",(0,i.jsxs)(s.li,{children:["If your shadows are from static parts of the environment consider using ",(0,i.jsx)(s.a,{href:"/user-manual/graphics/lighting/lightmapping",children:"lightmaps"})," to bake shadows into textures."]}),"\n"]})]})}function c(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,s,a)=>{a.d(s,{R:()=>t,x:()=>h});var i=a(96540);const o={},n=i.createContext(o);function t(e){const s=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function h(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);