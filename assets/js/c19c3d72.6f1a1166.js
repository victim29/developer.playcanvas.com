"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[5449],{39127:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var i=a(85893),s=a(11151);const n={title:"Making a Simple Game - Part 5",tags:["games"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406050/LIJTDO-image-75.jpg"},r=void 0,o={id:"tutorials/keepyup-part-five",title:"Making a Simple Game - Part 5",description:"You can find the full project here. If you haven't see Part 1, Part 2, Part 3 and Part 4 read them first.",source:"@site/docs/tutorials/keepyup-part-five.md",sourceDirName:"tutorials",slug:"/tutorials/keepyup-part-five",permalink:"/developer.playcanvas.com/tutorials/keepyup-part-five",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/keepyup-part-five.md",tags:[{label:"games",permalink:"/developer.playcanvas.com/tags/games"}],version:"current",frontMatter:{title:"Making a Simple Game - Part 5",tags:["games"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406050/LIJTDO-image-75.jpg"},sidebar:"tutorialsSidebar",previous:{title:"Information hotspots",permalink:"/developer.playcanvas.com/tutorials/information-hotspots"},next:{title:"Making a Simple Game - Part 4",permalink:"/developer.playcanvas.com/tutorials/keepyup-part-four"}},l={},c=[{value:"Audio &amp; Particles",id:"audio--particles",level:2},{value:"Audio",id:"audio",level:3},{value:"Music &amp; Sting",id:"music--sting",level:4},{value:"Ball tap",id:"ball-tap",level:4},{value:"Particles",id:"particles",level:3}];function p(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"iframe-container",children:(0,i.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/p/KH37bnOk/?overlay=false",title:"Making a Simple Game - Part 5"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.em,{children:["You can find the ",(0,i.jsx)(t.a,{href:"https://playcanvas.com/project/406050",children:"full project here"}),". If you haven't see ",(0,i.jsx)(t.a,{href:"/tutorials/keepyup-part-one/",children:"Part 1"}),", ",(0,i.jsx)(t.a,{href:"/tutorials/keepyup-part-two/",children:"Part 2"}),", ",(0,i.jsx)(t.a,{href:"/tutorials/keepyup-part-three/",children:"Part 3"})," and ",(0,i.jsx)(t.a,{href:"/tutorials/keepyup-part-four/",children:"Part 4"})," read them first."]})}),"\n",(0,i.jsx)(t.h2,{id:"audio--particles",children:"Audio & Particles"}),"\n",(0,i.jsx)(t.h3,{id:"audio",children:"Audio"}),"\n",(0,i.jsx)(t.p,{children:"Audio is a critical part of your game. It will provide valuable feedback to the player that their inputs are having and effect, plus it can create mood and atmosphere."}),"\n",(0,i.jsx)(t.p,{children:"The Keepy Up game has 3 audio effects: A background music track, a tap sound when you hit the ball and the sad trombone sting when you lose. Each of them is handled slightly differently."}),"\n",(0,i.jsx)(t.h4,{id:"music--sting",children:"Music & Sting"}),"\n",(0,i.jsxs)(t.p,{children:["The music and sting are handle in a similar way. The main difference is that the music is set to loop. The ",(0,i.jsx)(t.code,{children:"game.js"})," we have a script attribute which links the game script to the Entity with our sound component and we simply play and stop the correct slot."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"this.audio.sound.stop(); // stop current sound playing\nthis.audio.sound.play(\"gameover\") // play the 'gameover' slot\n"})}),"\n",(0,i.jsx)(t.h4,{id:"ball-tap",children:"Ball tap"}),"\n",(0,i.jsx)(t.p,{children:"The ball tap sound is attached directly to the ball Entity. It's a short, non-looping sound. So we play it every time the a tap hits the ball."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'this.entity.sound.play("bounce");\n'})}),"\n",(0,i.jsx)(t.h3,{id:"particles",children:"Particles"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"/images/tutorials/beginner/keepyup-part-five/particle-bounce.gif",alt:"Particles"})}),"\n",(0,i.jsx)(t.p,{children:"We have one particle effect in Keepy Up. It's a dust cloud that is triggered whenever the ball is tapped. The dust cloud is a non-looping effect and it needs to be positioned and rotated so that the cloud moves away from the ball when it runs."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"this.impactEffect.setLocalPosition(tmp);\nthis.impactEffect.particlesystem.reset();\nthis.impactEffect.particlesystem.play();\nthis.impactEffect.lookAt(this.entity.getPosition());\n"})}),"\n",(0,i.jsxs)(t.p,{children:["In this code we restart the one shot particle effect by calling ",(0,i.jsx)(t.code,{children:"reset()"})," and ",(0,i.jsx)(t.code,{children:"play()"})," and we position and rotate it so that it points towards the center of the ball."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"/images/tutorials/beginner/keepyup-part-five/particle-velocity-curves.jpg",alt:"Curves"})}),"\n",(0,i.jsx)(t.p,{children:"Using the Local Velocity graph in the Particle Effect editor, the particle effect is set up to fire away from the direction it is facing i.e. the particles move along the positive z axis."}),"\n",(0,i.jsxs)(t.p,{children:["Continue on to ",(0,i.jsx)(t.a,{href:"/tutorials/keepyup-part-six/",children:"Part 6"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>r});var i=a(67294);const s={},n=i.createContext(s);function r(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);