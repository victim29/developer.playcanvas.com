"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[2932],{84312:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=n(85893),r=n(11151);const i={title:"Element",sidebar_position:7},o=void 0,l={id:"user-manual/packs/components/element",title:"Element",description:"An Element component when in a hierarchy with a Screen Component ancestor is used to build user interfaces made up of 2D components such as images and text. The Element provides layout properties such as anchors and a pivot point.",source:"@site/docs/user-manual/packs/components/element.md",sourceDirName:"user-manual/packs/components",slug:"/user-manual/packs/components/element",permalink:"/developer.playcanvas.com/user-manual/packs/components/element",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/packs/components/element.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Element",sidebar_position:7},sidebar:"userManualSidebar",previous:{title:"Collision",permalink:"/developer.playcanvas.com/user-manual/packs/components/collision"},next:{title:"Layout Child",permalink:"/developer.playcanvas.com/user-manual/packs/components/layout-child"}},a={},d=[{value:"Group Element",id:"group-element",level:2},{value:"Image Element",id:"image-element",level:2},{value:"Text Element",id:"text-element",level:2},{value:"Common Component Properties",id:"common-component-properties",level:2},{value:"Image Component Properties",id:"image-component-properties",level:2},{value:"Text Component Properties",id:"text-component-properties",level:2}];function c(e){const t={a:"a",h2:"h2",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"An Element component when in a hierarchy with a Screen Component ancestor is used to build user interfaces made up of 2D components such as images and text. The Element provides layout properties such as anchors and a pivot point."}),"\n",(0,s.jsxs)(t.p,{children:["See the ",(0,s.jsx)(t.a,{href:"/user-manual/user-interface",children:"User Interface"})," section for more details."]}),"\n",(0,s.jsx)(t.h2,{id:"group-element",children:"Group Element"}),"\n",(0,s.jsx)(t.p,{children:"The group element provides just the layout properties of the Element component"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"/images/user-manual/scenes/components/component-element-group.png",alt:"Group Element"})}),"\n",(0,s.jsx)(t.h2,{id:"image-element",children:"Image Element"}),"\n",(0,s.jsx)(t.p,{children:"The image element displays an image using a texture asset or a solid color."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"/images/user-manual/scenes/components/component-element-image.png",alt:"Image Element"})}),"\n",(0,s.jsx)(t.h2,{id:"text-element",children:"Text Element"}),"\n",(0,s.jsxs)(t.p,{children:["The text element renders a string of text using a ",(0,s.jsx)(t.a,{href:"/user-manual/assets/fonts/",children:"font asset"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"/images/user-manual/scenes/components/component-element-text.png",alt:"Text Element"})}),"\n",(0,s.jsx)(t.h2,{id:"common-component-properties",children:"Common Component Properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Type"}),(0,s.jsx)(t.td,{children:"The type of Element: Group, Image or Text."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Preset"}),(0,s.jsx)(t.td,{children:"Choosing a layout preset will automatically set the Anchor and Pivot properties to a preset value."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Anchor"}),(0,s.jsxs)(t.td,{children:["Determine where the element calculates its position in relation to. See the ",(0,s.jsx)(t.a,{href:"/user-manual/user-interface/elements/#anchor",children:"Elements#Anchor"})," section for more information."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Pivot"}),(0,s.jsxs)(t.td,{children:["Determine where the pivot point of the Element is. (0, 0) is bottom left, (1, 1) is top right. See the ",(0,s.jsx)(t.a,{href:"/user-manual/user-interface/elements/#pivot",children:"Elements#Pivot"})," section for more information."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Size"}),(0,s.jsx)(t.td,{children:"The width and height of the Element. This may be automatically calculated depending on other settings."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Margin"}),(0,s.jsx)(t.td,{children:"The distance from the edge of the element to the Anchor. This is only available when the Anchor is split (non-equal in one axis)."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Use Input"}),(0,s.jsx)(t.td,{children:"If enabled, this Element is added to the list of elements that check for input and fire input related events."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Layers"}),(0,s.jsxs)(t.td,{children:["The Layers to render this element into. More on Layers ",(0,s.jsx)(t.a,{href:"/user-manual/graphics/layers",children:"here"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Batch Group"}),(0,s.jsxs)(t.td,{children:["The Batch Group that this model belongs to. More on Batching ",(0,s.jsx)(t.a,{href:"/user-manual/graphics/advanced-rendering/batching",children:"here"}),"."]})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"image-component-properties",children:"Image Component Properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Rect"}),(0,s.jsx)(t.td,{children:"Define the area of the texture asset to display."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Mask"}),(0,s.jsx)(t.td,{children:"Switch Image Element into a mask. Masks do not render into the scene, but instead limit child elements to only be rendered where this element is rendered."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Texture"}),(0,s.jsx)(t.td,{children:"The texture asset displayed."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Color"}),(0,s.jsx)(t.td,{children:"The color to tint the element."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Opacity"}),(0,s.jsx)(t.td,{children:"The transparency of the element."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"text-component-properties",children:"Text Component Properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Alignment"}),(0,s.jsx)(t.td,{children:"Determine how the text is aligned with in the element. (0, 0) is bottom left, (1, 1) is top right."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"The text string to display."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Font Size"}),(0,s.jsx)(t.td,{children:"The size in Screen component pixels to render the font at."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Line Height"}),(0,s.jsx)(t.td,{children:"The size in Screen component pixels to move down for a new line."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Spacing"}),(0,s.jsx)(t.td,{children:"A multiplier to apply to the amount advanced between each character."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Font"}),(0,s.jsx)(t.td,{children:"The font asset."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Color"}),(0,s.jsx)(t.td,{children:"The color to tint the font."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Opacity"}),(0,s.jsx)(t.td,{children:"The transparency of the element."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Wrap Lines"}),(0,s.jsx)(t.td,{children:"Enable text wrapping. Any text that overflows the width of the text element will be wrapped to the next line."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var s=n(67294);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);