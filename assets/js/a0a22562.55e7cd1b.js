"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[6750],{40306:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=n(85893),a=n(11151);const s={title:"Text Elements",sidebar_position:6},r=void 0,l={id:"user-manual/user-interface/text-elements",title:"Text Elements",description:"The Text Element is used to display a string of text using a font asset.",source:"@site/docs/user-manual/user-interface/text-elements.md",sourceDirName:"user-manual/user-interface",slug:"/user-manual/user-interface/text-elements",permalink:"/user-manual/user-interface/text-elements",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/user-interface/text-elements.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Text Elements",sidebar_position:6},sidebar:"userManualSidebar",previous:{title:"Image Elements",permalink:"/user-manual/user-interface/image-elements"},next:{title:"Layout Groups",permalink:"/user-manual/user-interface/layout-groups"}},o={},c=[{value:"Text",id:"text",level:2},{value:"Text Markup",id:"text-markup",level:3},{value:"Localization",id:"localization",level:2},{value:"Auto-size",id:"auto-size",level:2},{value:"Alignment",id:"alignment",level:2},{value:"Font Size &amp; Line Height",id:"font-size--line-height",level:2},{value:"Spacing",id:"spacing",level:2},{value:"Tinting",id:"tinting",level:2},{value:"Tranparency",id:"tranparency",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The Text Element is used to display a string of text using a ",(0,i.jsx)(t.a,{href:"/user-manual/assets/types/font",children:"font asset"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"text",children:"Text"}),"\n",(0,i.jsxs)(t.p,{children:["The Text Element contains a string field to enter the text that will be displayed. Use ",(0,i.jsx)(t.code,{children:"Shift+Enter"})," to enter a new line character in the string field."]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"Text elements are rendered to the screen using a single quad for each character in the string. When you change the text property, we re-generate the mesh for the element. There is a performance implication for this, though there should be no problems changing text content for a reasonable number of Elements every frame."})}),"\n",(0,i.jsx)(t.h3,{id:"text-markup",children:"Text Markup"}),"\n",(0,i.jsx)(t.p,{children:"Text elements support a simple markup syntax that allows you to apply different colors to specific parts of the text. Consider this example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'[color="#ff0000"]Red[/color], [color="#00ff00"]green[/color] and [color="#0000ff"]blue[/color].\n'})}),"\n",(0,i.jsx)(t.p,{children:"Assuming the base color of the text element is white, this will render as follows:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"/images/user-manual/user-interface/text-element/text-markup.png",alt:"Text Markup"})}),"\n",(0,i.jsxs)(t.admonition,{type:"tip",children:[(0,i.jsx)(t.p,{children:"You must proactively enable support for the markup syntax on a text element. You can do this via the API:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"entity.element.enableMarkup = true;\n"})}),(0,i.jsx)(t.p,{children:"Or by enabling it in the Editor:"}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"/images/user-manual/user-interface/text-element/enable-markup.png",alt:"Enable Markup"})})]}),"\n",(0,i.jsx)(t.h2,{id:"localization",children:"Localization"}),"\n",(0,i.jsx)(t.p,{children:"You can check the 'Localized' checkbox to localize the text of the Text Element. If this is enabled then, instead of the text, you specify the localization key for the Text Element which will be used to get the localized text from the localization assets."}),"\n",(0,i.jsxs)(t.p,{children:["Read more about localization ",(0,i.jsx)(t.a,{href:"/user-manual/user-interface/localization",children:"here"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"auto-size",children:"Auto-size"}),"\n",(0,i.jsx)(t.p,{children:"By default a Text Element is set to automatically adjust its width and height to match the text string. You can disable this and specify the height and width of the element directly in the Editor panel."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"/images/user-manual/user-interface/text-element/auto-size.png",alt:"Auto Size"})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"The height of the character is determined by the largest character present in the font. It is the same for every character so as to avoid the string position changing depending on the contents of the string."})}),"\n",(0,i.jsx)(t.h2,{id:"alignment",children:"Alignment"}),"\n",(0,i.jsxs)(t.p,{children:["Text Elements have an additional tool to help with positioning which is the alignment. You will be used to how this property works from tools like Word Processes. In this case, rather than presets we expose a variable that can be altered. The alignment consists of two values ",(0,i.jsx)(t.code,{children:"[X, Y]"})," each between 0 and 1. ",(0,i.jsx)(t.code,{children:"[0,0]"})," is bottom left alignment, ",(0,i.jsx)(t.code,{children:"[0.5,0.5]"})," is centered and ",(0,i.jsx)(t.code,{children:"[1,1]"})," is top right."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"/images/user-manual/user-interface/text-element/alignment-bottom-left.png",alt:"Top Left"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"/images/user-manual/user-interface/text-element/alignment-centered.png",alt:"Centered"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"/images/user-manual/user-interface/text-element/alignment-top-right.png",alt:"Bottom Right"})}),"\n",(0,i.jsx)(t.h2,{id:"font-size--line-height",children:"Font Size & Line Height"}),"\n",(0,i.jsx)(t.p,{children:"The font size property sets the rendered size of the font in Screen Component pixels. The line height sets the distance in Screen Component pixels to move down when the text contains a new line character."}),"\n",(0,i.jsx)(t.p,{children:"Equal Font Size and Line Height is the default:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"/images/user-manual/user-interface/text-element/font-line-equal.png",alt:"Font Size Line Equal"})}),"\n",(0,i.jsx)(t.p,{children:"Increase Line Height to increase line spacing:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"/images/user-manual/user-interface/text-element/font-line-spaced.png",alt:"Font Size Line Spaced"})}),"\n",(0,i.jsx)(t.h2,{id:"spacing",children:"Spacing"}),"\n",(0,i.jsx)(t.p,{children:"The spacing property increase the distance between characters in a string. Fonts define the ideal distance to move the cursor forward for each character. The spacing property is a multiplier to this distance."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"/images/user-manual/user-interface/text-element/spacing.png",alt:"Spacing"})}),"\n",(0,i.jsx)(t.h2,{id:"tinting",children:"Tinting"}),"\n",(0,i.jsx)(t.p,{children:"The Color property allows you to tint the string to the color of your choice."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"/images/user-manual/user-interface/text-element/tinted.png",alt:"Tinted"})}),"\n",(0,i.jsx)(t.h2,{id:"tranparency",children:"Tranparency"}),"\n",(0,i.jsx)(t.p,{children:"The Opacity property allows you to set the transparency of the string"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"/images/user-manual/user-interface/text-element/transparent.png",alt:"Transparent"})})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>r});var i=n(67294);const a={},s=i.createContext(a);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);