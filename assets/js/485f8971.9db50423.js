"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[7305],{78954:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>a,toc:()=>c});var s=t(85893),r=t(11151);const d={title:"Assets - Create asset"},i=void 0,a={id:"user-manual/api/asset-create",title:"Assets - Create asset",description:"Route URL",source:"@site/docs/user-manual/api/asset-create.md",sourceDirName:"user-manual/api",slug:"/user-manual/api/asset-create",permalink:"/user-manual/api/asset-create",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/api/asset-create.md",tags:[],version:"current",frontMatter:{title:"Assets - Create asset"},sidebar:"userManualSidebar",previous:{title:"Apps - Get app",permalink:"/user-manual/api/app-get"},next:{title:"Assets - Delete asset",permalink:"/user-manual/api/asset-delete"}},l={},c=[{value:"Route URL",id:"route-url",level:2},{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Response Schema",id:"response-schema",level:2},{value:"Errors",id:"errors",level:2},{value:"Rate Limiting",id:"rate-limiting",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"route-url",children:"Route URL"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-none",children:"POST https://playcanvas.com/api/assets\n"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Create a new asset."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["This endpoint currently only supports creating ",(0,s.jsx)(n.code,{children:"script"}),", ",(0,s.jsx)(n.code,{children:"html"}),", ",(0,s.jsx)(n.code,{children:"css"}),", ",(0,s.jsx)(n.code,{children:"text"}),", ",(0,s.jsx)(n.code,{children:"shader"})," and ",(0,s.jsx)(n.code,{children:"json"})," type assets."]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["Unlike other REST API endpoints. The Create Asset endpoint expects data to be sent in ",(0,s.jsx)(n.code,{children:"multipart/form-data"})]})}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-none",children:"curl -H \"Authorization: Bearer {accessToken}\" -X POST -F 'name={name}' -F 'projectId={projectId}' -F 'parent={parent}' -F 'preload={preload}' -F 'pow2={pow2}' -F 'file=@./script.js' \"https://playcanvas.com/api/assets\"\n"})}),"\n",(0,s.jsx)(n.p,{children:"HTTP Request"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'POST https://playcanvas.com/api/assets\nAuthorization: Bearer {accessToken}\nContent-Type: multipart/form-data; boundary=----WebKitFormBoundaryTdsfsfT\n\n------WebKitFormBoundaryTdsfsfT\nContent-Disposition: form-data; name="projectId"\n\n{projectId}\n------WebKitFormBoundaryTdsfsfT\nContent-Disposition: form-data; name="branchId"\n\n{branchId}\n------WebKitFormBoundaryTdsfsfT\nContent-Disposition: form-data; name="parent"\n\n{parent}\n------WebKitFormBoundaryTdsfsfT\nContent-Disposition: form-data; name="preload"\n\n{preload}\n------WebKitFormBoundaryTdsfsfT\nContent-Disposition: form-data; name=""; filename="script.js"\nContent-Type: application/javascript\n\n{fileContent}\n------WebKitFormBoundaryTdsfsfT--\n'})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Required"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"name"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,s.jsx)(n.td,{children:"The name of the asset."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"projectId"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"number"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,s.jsx)(n.td,{children:"The id of the project."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"branchId"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,s.jsx)(n.td,{children:"The id of the branch."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"parent"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"number"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"}}),(0,s.jsx)(n.td,{children:"Parent asset's id."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"preload"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"}}),(0,s.jsx)(n.td,{children:"Preload the asset (true"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"file"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"file"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"}}),(0,s.jsx)(n.td,{children:"Data to store as the asset file."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"pow2"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"}}),(0,s.jsx)(n.td,{children:"Only used for textures and defaults to false. Resize the texture to power of two dimensions (true"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"response-schema",children:"Response Schema"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-none",children:"Status: 201\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "id": int,\n    "modifiedAt": date,\n    "createdAt": date,\n    "state": "ready" | "processing" | "error",\n    "name": string,\n    "type": string,\n    "scope":{\n        "type": string,\n        "id": int\n    },\n    "source": bool,\n    "sourceId": bool,\n    "tags": list of strings,\n    "preload": bool,\n    "data": {\n        ... asset data\n    },\n    "file": {\n        "hash": string,\n        "filename": string,\n        "size": int,\n        "url": string\n    },\n    "parent": int\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"errors",children:"Errors"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Code"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"401"}),(0,s.jsx)(n.td,{children:"Unauthorized"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"403"}),(0,s.jsx)(n.td,{children:"Forbidden"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"404"}),(0,s.jsx)(n.td,{children:"Project not found"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"429"}),(0,s.jsx)(n.td,{children:"Too many requests"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"rate-limiting",children:"Rate Limiting"}),"\n",(0,s.jsxs)(n.p,{children:["This route uses an ",(0,s.jsx)(n.a,{href:"/user-manual/api#rate-limiting",children:"assets"})," rate limit."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var s=t(67294);const r={},d=s.createContext(r);function i(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);