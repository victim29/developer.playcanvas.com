"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[3027],{48627:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=t(85893),n=t(11151);const r={title:"JSON"},i=void 0,o={id:"user-manual/assets/types/json",title:"JSON",description:"JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate.",source:"@site/docs/user-manual/assets/types/json.md",sourceDirName:"user-manual/assets/types",slug:"/user-manual/assets/types/json",permalink:"/user-manual/assets/types/json",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/assets/types/json.md",tags:[],version:"current",frontMatter:{title:"JSON"},sidebar:"userManualSidebar",previous:{title:"HTML",permalink:"/user-manual/assets/types/html"},next:{title:"Material",permalink:"/user-manual/assets/types/material"}},c={},l=[{value:"Accessing JSON Data in Scripts",id:"accessing-json-data-in-scripts",level:2}];function d(e){const s={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/JSON",children:"JSON"})," (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate."]}),"\n",(0,a.jsx)(s.p,{children:"In PlayCanvas, JSON assets are used to store various types of structured data. Some example use cases are:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Configuration files"}),"\n",(0,a.jsx)(s.li,{children:"Data for procedural generation"}),"\n",(0,a.jsx)(s.li,{children:"Storing game settings"}),"\n",(0,a.jsx)(s.li,{children:"Level design data"}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"accessing-json-data-in-scripts",children:"Accessing JSON Data in Scripts"}),"\n",(0,a.jsx)(s.p,{children:"To access data from a JSON asset in a script:"}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsx)(s.li,{children:"Add the JSON asset to the script as an attribute."}),"\n",(0,a.jsx)(s.li,{children:"Access the JSON asset's resource which is the object parsed from the JSON data."}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"Example:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-javascript",children:"var JsonScript = pc.createScript('jsonScript');\n\n// Define an attribute to hold the JSON asset\nJsonScript.attributes.add('jsonAsset', { type: 'asset', assetType: 'json' });\n\nJsonScript.prototype.initialize = function () {\n    if (this.jsonAsset) {\n        // Get the JSON asset's resource (an object)\n        var jsonData = this.jsonAsset.resource;\n\n        // Example: Accessing data from the JSON object\n        if (jsonData.someDataField) {\n            console.log(\"Data from JSON:\", jsonData.someDataField);\n        }\n    }\n};\n"})})]})}function p(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>o,a:()=>i});var a=t(67294);const n={},r=a.createContext(n);function i(e){const s=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(r.Provider,{value:s},e.children)}}}]);