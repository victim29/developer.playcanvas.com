"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[5884],{53203:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var s=n(85893),a=n(11151);const o={title:"Font"},r=void 0,i={id:"user-manual/assets/types/font",title:"Font",description:"A Font asset contains an image with all the characters of the font that the user chose to include, and data related to how each character should be displayed. Font assets are used to render text using an Element component of type Text. To render text, add an Element component to an Entity set its type to Text and drag and drop the Font asset to the Font slot of the Element component.",source:"@site/docs/user-manual/assets/types/font.md",sourceDirName:"user-manual/assets/types",slug:"/user-manual/assets/types/font",permalink:"/user-manual/assets/types/font",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/assets/types/font.md",tags:[],version:"current",frontMatter:{title:"Font"},sidebar:"userManualSidebar",previous:{title:"Cubemap",permalink:"/user-manual/assets/types/cubemap"},next:{title:"HTML",permalink:"/user-manual/assets/types/html"}},c={},l=[{value:"Properties",id:"properties",level:2},{value:"Intensity",id:"intensity",level:3},{value:"Character Presets",id:"character-presets",level:2},{value:"Custom Character Range",id:"custom-character-range",level:2},{value:"Font",id:"font",level:2},{value:"Characters",id:"characters",level:3},{value:"Process Font",id:"process-font",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["A Font asset contains an image with all the characters of the font that the user chose to include, and data related to how each character should be displayed. Font assets are used to render text using an ",(0,s.jsx)(t.a,{href:"/user-manual/scenes/components/element/",children:"Element"})," component of type Text. To render text, add an Element component to an Entity set its type to Text and drag and drop the Font asset to the Font slot of the Element component."]}),"\n",(0,s.jsxs)(t.p,{children:["You can create a Font asset by uploading a font file ending in ",(0,s.jsx)(t.code,{children:".ttf"}),", ",(0,s.jsx)(t.code,{children:".ttc"}),", ",(0,s.jsx)(t.code,{children:".otf"})," or ",(0,s.jsx)(t.code,{children:".dfont"}),". We convert the uploaded font to a multi-channel signed distance field. This makes a font keep its details at various sizes so you only need to upload one font and use the same one for every size you want to display. The technique might work better for some fonts than others."]}),"\n",(0,s.jsx)(t.p,{children:"Here are the properties that you can edit for a Font asset in the Editor:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"/images/user-manual/assets/fonts/font.png",alt:"Font Asset"})}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(t.h3,{id:"intensity",children:"Intensity"}),"\n",(0,s.jsx)(t.p,{children:"Intensity is used to boost the value read from the signed distance field, 0 is no boost, 1 is max boost. This can be useful if the font does not render with clean smooth edges with the default intensity or if you are rendering the font at small font sizes."}),"\n",(0,s.jsx)(t.h2,{id:"character-presets",children:"Character Presets"}),"\n",(0,s.jsx)(t.p,{children:"Click on a preset to include its characters to the Font asset. Clicking on a preset will add the characters to the existing selection."}),"\n",(0,s.jsx)(t.h2,{id:"custom-character-range",children:"Custom Character Range"}),"\n",(0,s.jsx)(t.p,{children:"If you want to include a specific range of characters to the Font asset, enter the range in Hex and click the Plus icon to add the range to the character selection."}),"\n",(0,s.jsx)(t.h2,{id:"font",children:"Font"}),"\n",(0,s.jsx)(t.h3,{id:"characters",children:"Characters"}),"\n",(0,s.jsx)(t.p,{children:"The characters that should be included in the Font asset. If you only need numbers for example, there is no need to include all the other characters of the Font. This is useful to keep Font assets small. Please note that some characters may not exist in the uploaded font."}),"\n",(0,s.jsx)(t.h2,{id:"process-font",children:"Process Font"}),"\n",(0,s.jsx)(t.p,{children:"Click on the Process Font button after you make changes to the Font asset in order to generate a new version."})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>r});var s=n(67294);const a={},o=s.createContext(a);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);