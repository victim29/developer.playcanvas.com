"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[9121],{73146:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>t,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=n(85893),o=n(11151);const s={title:"Branch Workflows",sidebar_position:5},t=void 0,i={id:"user-manual/version-control/branch-workflows",title:"Branch Workflows",description:"There are many different ways that you can use branches to suit your project needs. Below we describe a few methods that are commonly used for different types of project.",source:"@site/docs/user-manual/version-control/branch-workflows.md",sourceDirName:"user-manual/version-control",slug:"/user-manual/version-control/branch-workflows",permalink:"/developer.playcanvas.com/user-manual/version-control/branch-workflows",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/version-control/branch-workflows.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Branch Workflows",sidebar_position:5},sidebar:"userManualSidebar",previous:{title:"View Changes",permalink:"/developer.playcanvas.com/user-manual/version-control/changes"},next:{title:"Graph View",permalink:"/developer.playcanvas.com/user-manual/version-control/graph-view"}},c={},l=[{value:"Feature-based branches",id:"feature-based-branches",level:2},{value:"Release branches",id:"release-branches",level:2},{value:"Continuous delivery",id:"continuous-delivery",level:2}];function u(e){const r={h2:"h2",img:"img",p:"p",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:"There are many different ways that you can use branches to suit your project needs. Below we describe a few methods that are commonly used for different types of project."}),"\n",(0,a.jsx)(r.h2,{id:"feature-based-branches",children:"Feature-based branches"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{src:"/images/user-manual/version-control/branch-workflows/feature-branches.png",alt:"Feature branches"})}),"\n",(0,a.jsx)(r.p,{children:"With a feature-based workflow each feature you are developing is started by creating a new branch out of the main branch. Then development work for the feature is done in your feature branch. When your feature is complete you merge any new changes from the main branch back into your branch. Perform a final test to make sure changes from master haven't affected your feature and then merge your feature branch into the main branch."}),"\n",(0,a.jsx)(r.h2,{id:"release-branches",children:"Release branches"}),"\n",(0,a.jsx)(r.p,{children:"If your production cycle features shipping numbered versions of your application, perhaps with extended periods of testing for each version, you might choose to use a release branch workflow."}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{src:"/images/user-manual/version-control/branch-workflows/release-branches.png",alt:"Release branches"})}),"\n",(0,a.jsx)(r.p,{children:"With this workflow new features are merged into the main branch and each time you are ready to release a version you take a new branch named after the version you are releasing. A build is published from this release branch and any fixes needed for the release are added into the release branch. Once the release is ready to go, you can merge any fixes back into master and continue development on the next release."}),"\n",(0,a.jsx)(r.h2,{id:"continuous-delivery",children:"Continuous delivery"}),"\n",(0,a.jsx)(r.p,{children:"If your application is a long-lived product which will be continuously updated, for example, a new release every week, you may wish to use a continuous delivery workflow."}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{src:"/images/user-manual/version-control/branch-workflows/continuous-delivery.png",alt:"Continuous Delivery"})}),"\n",(0,a.jsx)(r.p,{children:'In a continuous delivery workflow rather than having branches for each release, several long-lived branches are used to prepare the application for release. For example, features are merged into the main branch and after every feature is merged the main branch is merged into a branch called "staging". A build is published from staging to a sample environment where testing can be performed. Any required fixes are made into master and then merged into staging again. When staging is deemed ready, it is merged into another branch called "prod" (production). A build is made from prod and this is published to the live environment.'})]})}function d(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>t});var a=n(67294);const o={},s=a.createContext(o);function t(e){const r=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),a.createElement(s.Provider,{value:r},e.children)}}}]);