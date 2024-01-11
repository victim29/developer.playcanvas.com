"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[7078],{98245:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var a=n(85893),r=n(11151);const t={title:"\u30a2\u30bb\u30c3\u30c8 - Get Asset",layout:"usermanual-page.hbs",sidebar_position:8},i=void 0,l={id:"user-manual/api/asset-get",title:"\u30a2\u30bb\u30c3\u30c8 - Get Asset",description:"\u30eb\u30fc\u30c8URL",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/api/asset-get.md",sourceDirName:"user-manual/api",slug:"/user-manual/api/asset-get",permalink:"/developer.playcanvas.com/ja/user-manual/api/asset-get",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/api/asset-get.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"\u30a2\u30bb\u30c3\u30c8 - Get Asset",layout:"usermanual-page.hbs",sidebar_position:8},sidebar:"userManualSidebar",previous:{title:"\u30a2\u30bb\u30c3\u30c8 - Get Asset File",permalink:"/developer.playcanvas.com/ja/user-manual/api/asset-file"},next:{title:"\u30a2\u30bb\u30c3\u30c8 - List assets",permalink:"/developer.playcanvas.com/ja/user-manual/api/asset-list"}},c={},d=[{value:"\u30eb\u30fc\u30c8URL",id:"\u30eb\u30fc\u30c8url",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e",level:2},{value:"\u4f8b",id:"\u4f8b",level:2},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc",id:"\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc",level:2},{value:"\u30ec\u30b9\u30dd\u30f3\u30b9\u30b9\u30ad\u30fc\u30de",id:"\u30ec\u30b9\u30dd\u30f3\u30b9\u30b9\u30ad\u30fc\u30de",level:2},{value:"\u30a8\u30e9\u30fc",id:"\u30a8\u30e9\u30fc",level:2},{value:"\u30ec\u30fc\u30c8\u5236\u9650",id:"\u30ec\u30fc\u30c8\u5236\u9650",level:2}];function o(e){const s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h2,{id:"\u30eb\u30fc\u30c8url",children:"\u30eb\u30fc\u30c8URL"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-none",children:"GET https://playcanvas.com/api/assets/:assetId?branchId=:branchId\n"})}),"\n",(0,a.jsx)(s.h2,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,a.jsx)(s.p,{children:"\u5358\u4e00\u30a2\u30bb\u30c3\u30c8\u306e\u8a73\u7d30\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"}),"\n",(0,a.jsx)(s.h2,{id:"\u4f8b",children:"\u4f8b"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-none",children:'curl -H "Authorization: Bearer {accessToken}" https://playcanvas.com/api/assets/{assetId}?branchId={branchId}\n'})}),"\n",(0,a.jsx)(s.p,{children:"HTTP\u30ea\u30af\u30a8\u30b9\u30c8"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-text",children:"GET https://playcanvas.com/api/assets/{assetId}?branchId={branchId}\nAuthorization: Bearer {accessToken}\n"})}),"\n",(0,a.jsx)(s.h2,{id:"\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc",children:"\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc"}),"\n",(0,a.jsx)("div",{class:"params",children:(0,a.jsxs)("div",{class:"parameter",children:[(0,a.jsxs)("span",{class:"param",children:["branchId",":string"]}),(0,a.jsx)("p",{children:"\u30d6\u30e9\u30f3\u30c1\u306eID\u3002"})]})}),"\n",(0,a.jsx)(s.h2,{id:"\u30ec\u30b9\u30dd\u30f3\u30b9\u30b9\u30ad\u30fc\u30de",children:"\u30ec\u30b9\u30dd\u30f3\u30b9\u30b9\u30ad\u30fc\u30de"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-none",children:"\u30b9\u30c6\u30fc\u30bf\u30b9:200\n"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-json",children:'{\n    "id": int,\n    "modifiedAt": date,\n    "createdAt": date,\n    "state": "ready" | "processing" | "error",\n    "name": string,\n    "type": string,\n    "scope":{\n        "type": string,\n        "id": int\n    },\n    "source": bool,\n    "sourceId": bool,\n    "tags": list of strings,\n    "preload": bool,\n    "file": {\n        "hash": string,\n        "filename": string,\n        "size": int,\n        "url": string\n    },\n    "parent": int\n}\n\n'})}),"\n",(0,a.jsx)(s.h2,{id:"\u30a8\u30e9\u30fc",children:"\u30a8\u30e9\u30fc"}),"\n",(0,a.jsxs)("div",{class:"params",children:[(0,a.jsxs)("div",{class:"parameter",children:[(0,a.jsx)("span",{class:"param",children:"401"}),(0,a.jsx)("p",{children:"Unauthorized"})]}),(0,a.jsxs)("div",{class:"parameter",children:[(0,a.jsx)("span",{class:"param",children:"403"}),(0,a.jsx)("p",{children:"Forbidden"})]}),(0,a.jsxs)("div",{class:"parameter",children:[(0,a.jsx)("span",{class:"param",children:"404"}),(0,a.jsx)("p",{children:"Project or Asset not found"})]}),(0,a.jsxs)("div",{class:"parameter",children:[(0,a.jsx)("span",{class:"param",children:"429"}),(0,a.jsx)("p",{children:"Too many requests"})]})]}),"\n",(0,a.jsx)(s.h2,{id:"\u30ec\u30fc\u30c8\u5236\u9650",children:"\u30ec\u30fc\u30c8\u5236\u9650"}),"\n",(0,a.jsxs)(s.p,{children:["\u3053\u306e\u30eb\u30fc\u30c8\u306f",(0,a.jsx)(s.a,{href:"/user-manual/api#rate-limiting",children:"\u901a\u5e38"}),"\u306e\u30ec\u30fc\u30c8\u5236\u9650\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"]})]})}function p(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>i});var a=n(67294);const r={},t=a.createContext(r);function i(e){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(t.Provider,{value:s},e.children)}}}]);