"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[421],{34907:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var r=s(85893),i=s(11151);const n={title:"Sprite Editor",sidebar_position:1},a=void 0,o={id:"user-manual/2D/sprite-editor",title:"Sprite Editor",description:"The Sprite Editor is used to edit both Texture Atlas assets and Sprite assets. It is also used to create Sprite Assets.",source:"@site/docs/user-manual/2D/sprite-editor.md",sourceDirName:"user-manual/2D",slug:"/user-manual/2D/sprite-editor",permalink:"/developer.playcanvas.com/user-manual/2D/sprite-editor",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/2D/sprite-editor.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Sprite Editor",sidebar_position:1},sidebar:"userManualSidebar",previous:{title:"2D",permalink:"/developer.playcanvas.com/user-manual/2D/"},next:{title:"9-slicing",permalink:"/developer.playcanvas.com/user-manual/2D/slicing"}},l={},d=[{value:"Viewport",id:"viewport",level:2},{value:"Editing Texture Atlases",id:"editing-texture-atlases",level:3},{value:"Frames",id:"frames",level:4},{value:"Inspector",id:"inspector",level:2},{value:"Texture Atlas Inspector",id:"texture-atlas-inspector",level:3},{value:"Frame Inspector",id:"frame-inspector",level:3},{value:"Frame Inspector Actions",id:"frame-inspector-actions",level:4},{value:"Sprite Inspector",id:"sprite-inspector",level:3},{value:"Frames Panel",id:"frames-panel",level:2},{value:"Asset Panel",id:"asset-panel",level:2}];function c(e){const t={a:"a",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"The Sprite Editor is used to edit both Texture Atlas assets and Sprite assets. It is also used to create Sprite Assets."}),"\n",(0,r.jsx)(t.p,{children:"To open the Sprite Editor, double-click on any Texture Atlas or Sprite asset in the Editor asset panel."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"/images/user-manual/2D/sprite-editor/sprite-editor-highlights.jpg",alt:"Sprite Editor"})}),"\n",(0,r.jsx)(t.h2,{id:"viewport",children:"Viewport"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"/images/user-manual/2D/sprite-editor/viewport.jpg",alt:"Viewport"})}),"\n",(0,r.jsx)(t.p,{children:"The viewport in the Sprite Editor shows the currently selected Texture Atlas. Frames are shown as grey boxes on the texture atlas. The currently selected asset is shown with two sets of handles. green and blue. Green handles modify the frame's width and height, blue handles modify the frame's border property."}),"\n",(0,r.jsx)(t.h3,{id:"editing-texture-atlases",children:"Editing Texture Atlases"}),"\n",(0,r.jsx)(t.p,{children:"Within the viewport use the mouse to drag the outline of a Frame, then use the green and blue handles to modify the frames extents and borders."}),"\n",(0,r.jsx)(t.h4,{id:"frames",children:"Frames"}),"\n",(0,r.jsxs)(t.p,{children:["Frames are a defined region on a Texture Atlas. A frame has a name, a position and size and a border. The border is used to define the edges of the 9-slicing region. See the ",(0,r.jsx)(t.a,{href:"/user-manual/2D/9-slicing/",children:"9-slicing documentation"})," for more information."]}),"\n",(0,r.jsx)(t.h2,{id:"inspector",children:"Inspector"}),"\n",(0,r.jsx)(t.p,{children:"The inspector panel shows the properties of the currently selected item. The inspector changes depending on whether the selected item is a Texture Atlas, Frame or Sprite Asset."}),"\n",(0,r.jsx)(t.h3,{id:"texture-atlas-inspector",children:"Texture Atlas Inspector"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"/images/user-manual/2D/sprite-editor/texture-atlas-inspector.jpg",alt:"Texture Atlas Inspector"})}),"\n",(0,r.jsx)(t.p,{children:"The Texture Atlas Inspector allows you to automatically slice a texture atlas into a fixed grid."}),"\n",(0,r.jsxs)(t.p,{children:["First choose what to do with existing frames. You can choose to ",(0,r.jsx)(t.em,{children:"Delete Existing"})," frames or do not delete and ",(0,r.jsx)(t.em,{children:"Only Append"})," frames."]}),"\n",(0,r.jsx)(t.p,{children:"Then select the method of specifying the grid cells"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Grid By Frame Count - Specify the number of grid cells horizontally and vertically to divide the texture into"}),"\n",(0,r.jsx)(t.li,{children:"Grid By Frame Size - Specify the size in pixels that each grid cell should be"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Then set the values for Offset and Spacing. Offset is the number of pixels to move in from the top left of the texture before starting the grid. Spacing is the number of pixels between each grid cell."}),"\n",(0,r.jsx)(t.p,{children:"Finally set the pivot for all newly generated frames, the pivot determines the position and rotation point of the sprite. It is specified as a proportion of the width and height."}),"\n",(0,r.jsxs)(t.p,{children:["Once all your settings are chose, click the ",(0,r.jsx)(t.strong,{children:"Generate Frames"})," button to create your frames."]}),"\n",(0,r.jsx)(t.h3,{id:"frame-inspector",children:"Frame Inspector"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"/images/user-manual/2D/sprite-editor/frame-inspector.jpg",alt:"Frame Inspector"})}),"\n",(0,r.jsx)(t.p,{children:"The Frame Inspector lets you set the properties for an individual frame or group of frames. It is visible when you select one or more Frames. The Frame Inspector is also where you create a new Sprite from."}),"\n",(0,r.jsx)(t.p,{children:"The Inspector lets you modify the Position, Size and Border properties of the frame."}),"\n",(0,r.jsx)(t.h4,{id:"frame-inspector-actions",children:"Frame Inspector Actions"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"New Sprite From Selection"})}),"\n",(0,r.jsx)(t.p,{children:"Create a new Sprite Asset and assign the frames that you have selected to the Sprite, in the order that they were selected."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"New Sliced Sprite From Selection"})," - Create a new Sprite Asset and set its type to ",(0,r.jsx)(t.em,{children:"Sliced"}),". Assign the frames that you have selected to the Sprite, in the order that they were selected."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Focus on Selection"})," - Focus the viewport on the selected Frames. [Keyboard Shortcut: F]"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Trim Selected Frames"})," - Reduce the size of the selected frames to remove any excess empty space around an image. [Keyboard Shortcut: T]"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Delete Selected Frames"})," - Delete the selected Frames [Keyboard Shortcut: Delete]"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"sprite-inspector",children:"Sprite Inspector"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"/images/user-manual/2D/sprite-editor/sprite-inspector.jpg",alt:"Sprite Inspector"})}),"\n",(0,r.jsxs)(t.p,{children:["The Sprite Inspector is visible when a Sprite Asset is selected. This inspector is used to edit the properties of one or more Sprites. See the ",(0,r.jsx)(t.a,{href:"/user-manual/assets/sprites/",children:"Sprite Asset"})," for more details on the properties."]}),"\n",(0,r.jsxs)(t.p,{children:["Click the ",(0,r.jsx)(t.strong,{children:"Add Frames to Sprite Asset"})," button to enter the Sprite Edit Mode. In this mode, you can select multiple frames from the Frame Panel or Viewport and add them to the Sprite. Click the ",(0,r.jsx)(t.strong,{children:"Add Selected Frames"})," to add the frames to your Sprite."]}),"\n",(0,r.jsx)(t.p,{children:"Using the Sprite Inspector you can also re-order the Frames in your Sprite, or delete individual Frames."}),"\n",(0,r.jsx)(t.h2,{id:"frames-panel",children:"Frames Panel"}),"\n",(0,r.jsx)(t.p,{children:"The Frames Panel let's you select and delete Frames from the Texture Atlas"}),"\n",(0,r.jsx)(t.h2,{id:"asset-panel",children:"Asset Panel"}),"\n",(0,r.jsx)(t.p,{children:"The Asset Panel shows you all the Sprite Assets that have been created from the current Texture Atlas. You can select Sprite Assets from this panel."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:["Artwork created by ",(0,r.jsx)(t.a,{href:"https://twitter.com/2pblog1",children:"PixelBoy"})]})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>a});var r=s(67294);const i={},n=r.createContext(i);function a(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);