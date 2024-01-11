"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[7239],{23170:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=t(85893),i=t(11151);const o={title:"Animation Blending",tags:["animation"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405874/A8B1FE-image-75.jpg"},s=void 0,l={id:"tutorials/animation-blending",title:"Animation Blending",description:"This tutorial uses the deprecated Model and Animation components. Please refer to the Anim State Graph Blending tutorial instead.",source:"@site/docs/tutorials/animation-blending.md",sourceDirName:"tutorials",slug:"/tutorials/animation-blending",permalink:"/developer.playcanvas.com/tutorials/animation-blending",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/animation-blending.md",tags:[{label:"animation",permalink:"/developer.playcanvas.com/tags/animation"}],version:"current",frontMatter:{title:"Animation Blending",tags:["animation"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405874/A8B1FE-image-75.jpg"},sidebar:"tutorialsSidebar",previous:{title:"Animated Textures",permalink:"/developer.playcanvas.com/tutorials/animated-textures"},next:{title:"Animation without State Graph",permalink:"/developer.playcanvas.com/tutorials/animation-without-state-graph"}},r={},c=[{value:"The Animation Component",id:"the-animation-component",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.admonition,{type:"warning",children:(0,a.jsxs)(e.p,{children:["This tutorial uses the deprecated Model and Animation components. Please refer to the ",(0,a.jsx)(e.a,{href:"/tutorials/anim-blending/",children:"Anim State Graph Blending tutorial"})," instead."]})}),"\n",(0,a.jsx)("div",{className:"iframe-container",children:(0,a.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/p/HI8kniOx/",title:"Animation Blending"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.em,{children:"Click on screen to focus, then press the 'p' key to blend to a punch animation"})}),"\n",(0,a.jsx)(e.p,{children:"This tutorial illustrates the basics of animation blending."}),"\n",(0,a.jsx)(e.p,{children:"Objects in your scene may be animated; machines or characters are good examples of things that you might want to animate. Generally, when 3D content is created, individual animations are authored and these animations are typically referred to as cycles (because they loop). For example, a human character could have an idle cycle, a walk cycle, a run cycle and so on. As a PlayCanvas developer, you'll want a mechanism to play these animations back on your animated object. Additionally, you do not want these animations to 'pop' as one is switched for another. To remedy this, you should use animation blending which implements a smooth transition from one animation to another. This dramatically improves the visual fidelity of your animated object."}),"\n",(0,a.jsx)(e.p,{children:"Let's examine how this is achieved via PlayCanvas..."}),"\n",(0,a.jsx)(e.h2,{id:"the-animation-component",children:"The Animation Component"}),"\n",(0,a.jsx)(e.p,{children:"In order to apply an animation to a model, you add the animation component to your entity. Below is the configuration of the skinned character as displayed in PlayCanvas Editor."}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:"/images/tutorials/animation_blending.jpg",alt:"Animated Entity"})}),"\n",(0,a.jsx)(e.p,{children:"In the image you can see the animation component in the Inspector. There are 2 animation assets assigned: an 'idle' cycle and a 'punch' cycle. With the animation component configured this way, the behavior is that the first animation (the idle cycle) is played and because the looping option is set, it will continue to animate ad infinitum. However, we would like to achieve something a little more interesting:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Play a looping idle animation."}),"\n",(0,a.jsx)(e.li,{children:"Blend to a looping punch animation on a key press."}),"\n",(0,a.jsx)(e.li,{children:"Blend back to idle on key release."}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"So this kind of functionality goes beyond the abilities of the humble animation component. A script component is required to cook up this additional behavior. You can see the script component in the above screenshot of the skinned character entity in Editor and it refers to a JS file called animation_blending.js. The contents of this file is:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"var AnimationBlending = pc.createScript('animationBlending');\n\nAnimationBlending.states = {\n    idle: {\n        animation: 'male.json'\n    },\n    punch: {\n        animation: 'male_uppercut_jab.json'\n    }\n};\n\n// initialize code called once per entity\nAnimationBlending.prototype.initialize = function() {\n    this.blendTime = 0.2;\n\n    this.setState('idle');\n};\n\nAnimationBlending.prototype.update = function(dt) {\n    if (this.app.keyboard.wasPressed(pc.KEY_P)) {\n        this.setState('punch');\n    }\n\n    if (this.app.keyboard.wasReleased(pc.KEY_P)) {\n        this.setState('idle');\n    }\n};\n\nAnimationBlending.prototype.setState = function (state) {\n    var states = AnimationBlending.states;\n\n    this.state = state;\n    // Set the current animation, taking 0.2 seconds to blend from\n    // the current animation state to the start of the target animation.\n    this.entity.animation.play(states[state].animation, this.blendTime);\n};\n"})}),"\n",(0,a.jsx)(e.p,{children:"From this point, you are able to add more and more animations to the animation component and start scripting much more complex animation state charts."}),"\n",(0,a.jsxs)(e.p,{children:["See ",(0,a.jsx)(e.a,{href:"https://playcanvas.com/editor/scene/440156",children:"the full Scene here"})]})]})}function m(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>l,a:()=>s});var a=t(67294);const i={},o=a.createContext(i);function s(n){const e=a.useContext(o);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),a.createElement(o.Provider,{value:e},n.children)}}}]);