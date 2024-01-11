"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[5269],{64019:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=n(85893),r=n(11151);const a={title:"Basic Keyboard Input",tags:["input"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405804/513097-image-75.jpg"},i=void 0,o={id:"tutorials/keyboard-input",title:"Basic Keyboard Input",description:"Click to focus, then press left arrow, right arrow and spacebar to rotate the cube. Press and release the 'a' key to change color.",source:"@site/docs/tutorials/keyboard-input.md",sourceDirName:"tutorials",slug:"/tutorials/keyboard-input",permalink:"/developer.playcanvas.com/tutorials/keyboard-input",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/keyboard-input.md",tags:[{label:"input",permalink:"/developer.playcanvas.com/tags/input"}],version:"current",frontMatter:{title:"Basic Keyboard Input",tags:["input"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405804/513097-image-75.jpg"},sidebar:"tutorialsSidebar",previous:{title:"Making a Simple Game - Part 2",permalink:"/developer.playcanvas.com/tutorials/keepyup-part-two"},next:{title:"Light Cookies",permalink:"/developer.playcanvas.com/tutorials/light-cookies"}},d={},c=[{value:"<code>isPressed</code> vs <code>wasPressed</code>",id:"ispressed-vs-waspressed",level:2},{value:"<code>isPressed(key)</code>",id:"ispressedkey",level:3},{value:"<code>wasPressed(key)</code>",id:"waspressedkey",level:3},{value:"Events",id:"events",level:2},{value:"Key Codes",id:"key-codes",level:2},{value:"Try it out",id:"try-it-out",level:2}];function l(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"iframe-container",children:(0,t.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/p/rFZGQWCi/?overlay=false",title:"Basic Keyboard Input"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsxs)(s.em,{children:["Click to focus, then press ",(0,t.jsx)(s.code,{children:"left arrow"}),", ",(0,t.jsx)(s.code,{children:"right arrow"})," and ",(0,t.jsx)(s.code,{children:"spacebar"})," to rotate the cube. Press and release the 'a' key to change color."]})}),"\n",(0,t.jsxs)(s.p,{children:["Keyboard handling in the PlayCanvas engine is provided by the ",(0,t.jsx)(s.code,{children:"pc.Keyboard"})," object. The Keyboard object provides a simple interface\nfor common keyboard operations like checking if a key is pressed or held down. It also takes away the various cross-browser problems with\nhandling keycodes and charcodes."]}),"\n",(0,t.jsxs)(s.p,{children:["Take a look at the keyboard input Scene in the ",(0,t.jsx)(s.a,{href:"https://playcanvas.com/project/405804/overview/tutorial-basic-keyboard-input",children:"tutorials project"}),". Here is the code for the tutorial:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"var KeyboardHandler = pc.createScript('keyboardHandler');\n\nKeyboardHandler.attributes.add('redMaterial', {\n    type: 'asset',\n    assetType: 'material'\n});\n\nKeyboardHandler.attributes.add('whiteMaterial', {\n    type: 'asset',\n    assetType: 'material'\n});\n\n// initialize code called once per entity\nKeyboardHandler.prototype.initialize = function() {\n    // Use on() to listen for events on the keyboard device.\n    // Arguments are:\n    // 1) The event name to listen for\n    // 2) The callback function to call when the event fires\n    // 3) (optional) The value to use for 'this' in the callback function\n\n    this.app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);\n    this.app.keyboard.on(pc.EVENT_KEYUP, this.onKeyUp, this);\n};\n\n// update code called every frame\nKeyboardHandler.prototype.update = function(dt) {\n    /*\n     * Notice in the demo that pressing and holding the arrow keys doesn't\n     * make the block spin. wasPressed() is used to detect a\n     * keypress that occurred since the last frame and will only be\n     * called once even if the key is held down.\n     */\n    var angle = 0;\n    if (this.app.keyboard.wasPressed(pc.KEY_LEFT)) {\n        angle = -5;\n    } else if (this.app.keyboard.wasPressed(pc.KEY_RIGHT)) {\n        angle = 5;\n    }\n\n    /*\n     * Notice that pressing and holding the space bar makes the block\n     * continuously spin. isPressed() is used to detected if a\n     * key is down right now. So it will be true every frame as long as\n     * the key is still pressed.\n     */\n    if (this.app.keyboard.isPressed(pc.KEY_SPACE)) {\n        angle = 1;\n    }\n\n    // Update the spinning cube\n    this.entity.rotateLocal(0, angle, 0);\n};\n\n/*\n* Event handler called when key is pressed\n*/\nKeyboardHandler.prototype.onKeyDown = function (event) {\n    // Check event.key to detect which key has been pressed\n    if (event.key === pc.KEY_A && this.redMaterial) {\n        this.entity.render.meshInstances[0].material = this.redMaterial.resource;\n    }\n\n    // When the space bar is pressed this scrolls the window.\n    // Calling preventDefault() on the original browser event stops this.\n    event.event.preventDefault();\n};\n\n/*\n* Event handler called when key is released\n*/\nKeyboardHandler.prototype.onKeyUp = function (event) {\n    // Check event.key to detect which key has been pressed\n    if (event.key === pc.KEY_A && this.whiteMaterial) {\n        this.entity.render.meshInstances[0].material = this.whiteMaterial.resource;\n    }\n};\n"})}),"\n",(0,t.jsxs)(s.p,{children:["There are two ways of detecting keyboard input. The first is done in the update method of your scripts. Use ",(0,t.jsx)(s.code,{children:"isPressed()"})," and ",(0,t.jsx)(s.code,{children:"wasPressed()"})," and check whether a key is currently pressed or has just been pressed. The second uses events to respond to a key press or release as it happens."]}),"\n",(0,t.jsxs)(s.h2,{id:"ispressed-vs-waspressed",children:[(0,t.jsx)(s.code,{children:"isPressed"})," vs ",(0,t.jsx)(s.code,{children:"wasPressed"})]}),"\n",(0,t.jsxs)(s.p,{children:["In the demo above you can see the difference in behavior between ",(0,t.jsx)(s.code,{children:"isPressed()"})," and ",(0,t.jsx)(s.code,{children:"wasPressed()"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["When you press and hold the left or right arrow keys the cube will rotate by 5\xb0, but it will only rotate once. This is because ",(0,t.jsx)(s.code,{children:"wasPressed()"})," only returns true for the frame immediately after the key was pressed."]}),"\n",(0,t.jsxs)(s.p,{children:["If you press and hold the spacebar you will see that the cube rotates continuously by 1\xb0 per frame. This is because ",(0,t.jsx)(s.code,{children:"isPressed()"})," returns true for every frame in which the key is pressed."]}),"\n",(0,t.jsx)(s.h3,{id:"ispressedkey",children:(0,t.jsx)(s.code,{children:"isPressed(key)"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"isPressed(key)"})," checks to see if ",(0,t.jsx)(s.code,{children:"key"})," is currently pressed and returns true if it is. It will return true for every frame while the key is pressed."]}),"\n",(0,t.jsx)(s.h3,{id:"waspressedkey",children:(0,t.jsx)(s.code,{children:"wasPressed(key)"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"wasPressed(key)"})," checks to see if ",(0,t.jsx)(s.code,{children:"key"})," was pressed ",(0,t.jsx)(s.em,{children:"since the last frame"}),". ",(0,t.jsx)(s.code,{children:"wasPressed()"})," will only return true once for a single key press."]}),"\n",(0,t.jsx)(s.h2,{id:"events",children:"Events"}),"\n",(0,t.jsx)(s.p,{children:"The second method of handling key presses is to listen for events. Two keyboard events are supported on the Keyboard device:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"pc.EVENT_KEYDOWN"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"pc.EVENT_KEYUP"})}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/user-manual/glossary#dom",children:"DOM"})," keyboard events are implemented differently on different browsers so the PlayCanvas Engine provides events on the ",(0,t.jsx)(s.code,{children:"pc.Keyboard"})," object so you can use the same code everywhere. When the keyboard events are fired the event handler is passed a ",(0,t.jsx)(s.code,{children:"pc.KeyboardEvent"})," object which contains the key code of the key that was pressed on released."]}),"\n",(0,t.jsxs)(s.p,{children:["Notice we are also passing a third argument to on(), which is ",(0,t.jsx)(s.code,{children:"this"})," or the Script Instance itself. The third argument to on() is used as ",(0,t.jsx)(s.code,{children:"this"})," in the event callbacks, so we need to pass it in here, otherwise it won't be set to the correct object."]}),"\n",(0,t.jsx)(s.h2,{id:"key-codes",children:"Key Codes"}),"\n",(0,t.jsxs)(s.p,{children:["Identifying which key is pressed is done using key codes. These are numerical values which match up to a key on the keyboard. For example, pc.KEY_A is the ",(0,t.jsx)(s.code,{children:"A"})," key, pc.KEY_LEFT is the left arrow key."]}),"\n",(0,t.jsxs)(s.p,{children:["Note, you should always use the enumeration ",(0,t.jsx)(s.code,{children:"pc.KEY_*"})," rather than using numerical values. As the actual value of these constants may change in the future."]}),"\n",(0,t.jsx)(s.h2,{id:"try-it-out",children:"Try it out"}),"\n",(0,t.jsxs)(s.p,{children:["Try it out in full screen ",(0,t.jsx)(s.a,{href:"https://playcanv.as/p/rFZGQWCi/",children:"here"})," or at the top of the page. Compare tapping and holding the arrow keys, and tapping and holding the spacebar."]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>i});var t=n(67294);const r={},a=t.createContext(r);function i(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);