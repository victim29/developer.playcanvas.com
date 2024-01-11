"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[1419],{45132:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>o,contentTitle:()=>t,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=a(85893),n=a(11151);const i={title:"Projects - Archive project",sidebar_position:13},t=void 0,c={id:"user-manual/api/project-archive",title:"Projects - Archive project",description:"Route URL",source:"@site/docs/user-manual/api/project-archive.md",sourceDirName:"user-manual/api",slug:"/user-manual/api/project-archive",permalink:"/developer.playcanvas.com/user-manual/api/project-archive",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/api/project-archive.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Projects - Archive project",sidebar_position:13},sidebar:"userManualSidebar",previous:{title:"Jobs - Get job",permalink:"/developer.playcanvas.com/user-manual/api/job-get"},next:{title:"Scenes - List scenes",permalink:"/developer.playcanvas.com/user-manual/api/scene-list"}},o={},l=[{value:"Route URL",id:"route-url",level:2},{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Response Schema",id:"response-schema",level:2},{value:"Errors",id:"errors",level:2},{value:"Rate Limiting",id:"rate-limiting",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"route-url",children:"Route URL"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-none",children:"POST https://playcanvas.com/api/projects/:id/export\n"})}),"\n",(0,s.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(r.p,{children:["This will allow you to download a zip archive of your entire project. You can import that archive from your Projects Dashboard to create a new Project from that archive. More about importing projects ",(0,s.jsx)(r.a,{href:"/user-manual/profile/projects/#import-project",children:"here"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["The request will start an archive job and the job details will be returned in the response. You can ",(0,s.jsx)(r.a,{href:"/user-manual/api/job-get",children:"poll the job by id"})," until its status is either 'complete' or 'error'. When the job is done, its data will contain a URL to download the project archive."]}),"\n",(0,s.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-none",children:'curl -H "Authorization: Bearer {accessToken}" -H "Content-Type: application/json" -X POST -d \'{"branch_id": "99999999-9999-9999-9999-999999999999"}\' "https://playcanvas.com/api/projects/{projectId}/export"\n'})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("div",{class:"params",children:[(0,s.jsxs)("div",{class:"parameter",children:[(0,s.jsx)("span",{class:"param",children:"projectId: number"}),(0,s.jsx)("p",{children:"The id of the project."})]}),(0,s.jsxs)("div",{class:"parameter",children:[(0,s.jsx)("span",{class:"param",children:"branch_id [optional]: string"}),(0,s.jsx)("p",{children:"The id of the branch. If no id is specified the main branch will be used."})]})]}),"\n",(0,s.jsx)(r.h2,{id:"response-schema",children:"Response Schema"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-none",children:"Status: 201 Created\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'{\n    "id": int,\n    "created_at": date,\n    "modified_at": date,\n    "status": "running" | "complete" | "error",\n    "messages": [ list of strings ],\n    "data": {\n      "project": {\n         \'id\': int\n      },\n      "url": string\n    }\n}\n'})}),"\n",(0,s.jsx)(r.h2,{id:"errors",children:"Errors"}),"\n",(0,s.jsxs)("div",{class:"params",children:[(0,s.jsxs)("div",{class:"parameter",children:[(0,s.jsx)("span",{class:"param",children:"401"}),(0,s.jsx)("p",{children:"Unauthorized"})]}),(0,s.jsxs)("div",{class:"parameter",children:[(0,s.jsx)("span",{class:"param",children:"403"}),(0,s.jsx)("p",{children:"Forbidden"})]}),(0,s.jsxs)("div",{class:"parameter",children:[(0,s.jsx)("span",{class:"param",children:"404"}),(0,s.jsx)("p",{children:"Project not found"})]}),(0,s.jsxs)("div",{class:"parameter",children:[(0,s.jsx)("span",{class:"param",children:"404"}),(0,s.jsx)("p",{children:"Owner not found"})]}),(0,s.jsxs)("div",{class:"parameter",children:[(0,s.jsx)("span",{class:"param",children:"429"}),(0,s.jsx)("p",{children:"Too many requests"})]})]}),"\n",(0,s.jsx)(r.h2,{id:"rate-limiting",children:"Rate Limiting"}),"\n",(0,s.jsxs)(r.p,{children:["This route uses a ",(0,s.jsx)(r.a,{href:"/user-manual/api#rate-limiting",children:"strict"})," rate limit."]})]})}function p(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,r,a)=>{a.d(r,{Z:()=>c,a:()=>t});var s=a(67294);const n={},i=s.createContext(n);function t(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);