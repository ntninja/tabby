"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4741,3396],{68172:function(e,n,t){t.d(n,{q:function(){return a}});var r=t(36164),s=t(38785);function a(e){let{children:n,fallback:t=null}=e;return(0,s.U)()?(0,r.jsx)(r.Fragment,{children:n}):(0,r.jsx)(r.Fragment,{children:t})}},30601:function(e,n,t){t.d(n,{Hb:function(){return m},wt:function(){return u},xc:function(){return p},yo:function(){return f}});var r=t(36164),s=t(3546),a=t(74630),i=t(36327),o=t(80605),l=t(74248),d=t(81565);let u="3.5rem",c=s.createContext({}),f=e=>{let{children:n}=e,t=(0,o.UA)(),[i,l]=s.useState(!1);return s.useEffect(()=>{let e=window.self!==window.top;e||(0,a.Z)(t)||l(t)},[t]),(0,r.jsx)(c.Provider,{value:{isShowDemoBanner:i,setIsShowDemoBanner:l},children:n})};function m(){let{isShowDemoBanner:e,setIsShowDemoBanner:n}=s.useContext(c);return[e,n]}function p(){let[e,n]=m(),{data:t}=(0,i.Z)("https://api.github.com/repos/TabbyML/tabby",e=>fetch(e).then(e=>e.json()));return(0,r.jsxs)("div",{className:(0,l.cn)("flex items-center justify-between bg-primary px-4 text-primary-foreground transition-all md:px-5",{"opacity-100 pointer-events-auto":e,"opacity-0 pointer-events-none":!e}),style:e?{height:u}:{height:0},children:[(0,r.jsxs)("a",{href:"https://links.tabbyml.com/schedule-a-demo",target:"_blank",className:"flex items-center gap-x-2 text-xs font-semibold underline md:text-sm",children:[(0,r.jsx)("span",{children:"\uD83D\uDCC6"}),(0,r.jsx)("span",{children:"Book a 30-minute product demo."})]}),(0,r.jsxs)("div",{className:"flex items-center gap-x-4 md:gap-x-8",children:[(0,r.jsxs)("a",{href:"https://github.com/TabbyML/tabby",target:"_blank",className:"flex items-center transition-all hover:opacity-70",children:[(0,r.jsx)(d.IconGithub,{}),(0,r.jsxs)("div",{className:"ml-2 hidden md:block",children:[(0,r.jsx)("p",{className:"text-xs font-semibold",children:"TabbyML/tabby"}),(0,r.jsxs)("div",{className:(0,l.cn)("flex items-center text-xs transition-all",{"h-4 opacity-70":t,"h-0 opacity-0":!t}),children:[(0,r.jsx)(d.IconStar,{className:"mr-1 h-2.5 w-2.5"}),(0,r.jsx)("span",{children:null==t?void 0:t.stargazers_count}),(0,r.jsx)(d.IconGitFork,{className:"ml-2 mr-1 h-2.5 w-2.5"}),(0,r.jsx)("span",{children:null==t?void 0:t.forks_count})]})]})]}),(0,r.jsx)(d.IconClose,{className:"cursor-pointer transition-all hover:opacity-70",onClick:()=>n(!1)})]})]})}},94529:function(e,n,t){t.d(n,{Z:function(){return y}});var r=t(36164),s=t(3546),a=t(70652),i=t.n(a),o=t(2899),l=t(23455),d=t(40055),u=t(21808),c=t(9010),f=t(70410),m=t(74248),p=t(36065),h=t(84942),g=t(29),v=t(31458),x=t(81565);function y(e){let{onSearch:n,className:t,placeholder:a,showBetaBadge:i,isLoading:o,autoFocus:d,loadingWithSpinning:f,cleanAfterSearch:p=!0,isFollowup:h,extraContext:v}=e,[y,N]=(0,s.useState)(!1),[k,j]=(0,s.useState)(!1),[w,S]=(0,s.useState)(""),[$,I]=(0,s.useState)(),{theme:C}=(0,c.X)(),E=(0,s.useRef)(null),_=()=>{try{let e=sessionStorage.getItem(u.$6.SEARCH_SELECTED_REPO);if(e){let n=JSON.parse(e);n&&I(n)}}catch(e){}};(0,s.useEffect)(()=>{N(!0),_()},[]);let R=e=>{w&&!o&&(null==e||e.stopPropagation(),n(w,{repository:$}),p&&S(""))};(0,s.useEffect)(()=>{(null==v?void 0:v.repository)&&I(null==v?void 0:v.repository)},[v]);let T=!h||!!(null==v?void 0:v.repository);return(0,r.jsxs)("div",{className:(0,m.cn)("relative overflow-hidden rounded-lg border border-muted-foreground bg-background px-4 transition-all hover:border-muted-foreground/60",{"flex-col gap-1 w-full":T,"flex w-full items-center ":!T,"!border-zinc-400":k&&h&&"dark"!==C,"!border-primary":k&&(!h||"dark"===C),"py-0":i,"border-2 dark:border border-zinc-400 hover:border-zinc-400/60 dark:border-muted-foreground dark:hover:border-muted-foreground/60":h},t),onClick:()=>{if(h){var e;null===(e=E.current)||void 0===e||e.focus()}},children:[i&&(0,r.jsxs)(g.u,{delayDuration:0,children:[(0,r.jsx)(g.aJ,{asChild:!0,children:(0,r.jsx)("span",{className:"absolute -right-8 top-1 mr-3 rotate-45 rounded-none border-none py-0.5 pl-6 pr-5 text-xs text-primary",style:{background:"dark"===C?"#333":"#e8e1d3"},children:"Beta"})}),(0,r.jsx)(g._v,{sideOffset:-8,className:"max-w-md",children:(0,r.jsx)("p",{children:"Please note that the answer engine is still in its early stages, and certain functionalities, such as finding the correct code context and the quality of summarizations, still have room for improvement. If you encounter an issue and believe it can be enhanced, consider sharing it in our Slack community!"})})]}),(0,r.jsx)(l.Z,{className:(0,m.cn)("text-area-autosize mr-1 w-full flex-1 resize-none rounded-lg !border-none bg-transparent !shadow-none !outline-none !ring-0 !ring-offset-0",{"!h-[48px]":!y,"pt-4":!i,"pt-5":i,"pb-4":!T&&!i,"pb-5":!T&&i}),placeholder:a||"Ask anything...",maxRows:5,onKeyDown:e=>{if("Enter"===e.key&&!e.shiftKey)return e.preventDefault()},onKeyUp:e=>{if("Enter"===e.key&&!e.shiftKey)return R()},onFocus:()=>j(!0),onBlur:()=>j(!1),onChange:e=>S(e.target.value),value:w,autoFocus:d,minRows:h?1:2,ref:E}),(0,r.jsxs)("div",{className:(0,m.cn)("flex items-center justify-between gap-2",{"pb-2":T}),children:[T&&(0,r.jsx)(b,{className:"overflow-hidden",value:$,onChange:I,disabled:h}),(0,r.jsxs)("div",{className:(0,m.cn)("flex items-center justify-center rounded-lg p-1 transition-all",{"bg-primary text-primary-foreground cursor-pointer":w.length>0,"!bg-muted !text-primary !cursor-default":o||0===w.length,"mr-1.5":!i,"h-6 w-6":!h}),onClick:R,children:[f&&o&&(0,r.jsx)(x.IconSpinner,{className:"h-3.5 w-3.5"}),(!f||!o)&&(0,r.jsx)(x.IconArrowRight,{className:"h-3.5 w-3.5"})]})]})]})}function b(e){var n;let{value:t,onChange:a,className:l,disabled:c}=e,[y,b]=(0,s.useState)(!1),[{data:N,fetching:k}]=(0,d.aM)({query:f.zz}),j=null==N?void 0:N.repositoryList,w=(0,s.useMemo)(()=>(null==j?void 0:j.length)?"No results found":(0,r.jsxs)("div",{className:"space-y-4 py-2",children:[(0,r.jsx)("p",{className:"font-semibold",children:"No repositories"}),(0,r.jsxs)(i(),{href:"/settings/providers/git",className:(0,m.cn)((0,v.d)({size:"sm"}),"gap-1"),children:["Connect",(0,r.jsx)(x.IconArrowRight,{})]})]}),[j]),S=e=>{a(e),b(!1),sessionStorage.setItem(u.$6.SEARCH_SELECTED_REPO,JSON.stringify((0,o.Z)(e,"refs")))};return(0,r.jsxs)(g.u,{delayDuration:0,children:[(0,r.jsxs)(h.J2,{open:y,onOpenChange:e=>{c||b(e)},children:[(0,r.jsx)(h.xo,{asChild:!0,children:(0,r.jsx)(g.aJ,{asChild:!0,children:(0,r.jsx)("div",{className:(0,m.cn)((0,v.d)({variant:"ghost"}),"-ml-2 cursor-pointer rounded-full px-2",{"cursor-default hover:bg-transparent":c},l),children:(0,r.jsxs)("div",{className:"flex items-center gap-2 overflow-hidden",children:[(0,r.jsx)(x.IconCode,{className:(0,m.cn)("shrink-0",t?"text-foreground/70":"text-foreground/50")}),(0,r.jsx)("span",{className:(0,m.cn)("flex-1 truncate",t?"text-foreground/70":"text-foreground/50"),children:null!==(n=null==t?void 0:t.name)&&void 0!==n?n:"Select repository"})]})})})}),(0,r.jsx)(h.i9,{children:(0,r.jsx)(h.yk,{className:"min-w-[300px] lg:max-w-[60vw]",align:"start",side:"bottom",children:(0,r.jsxs)(p.mY,{children:[(0,r.jsx)(p.sZ,{placeholder:"Search"}),(0,r.jsxs)(p.e8,{className:"max-h-[200px]",children:[(0,r.jsx)(p.rb,{children:k?(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)(x.IconSpinner,{className:"h-6 w-6"})}):w}),(0,r.jsx)(p.fu,{children:null==j?void 0:j.map(e=>{let n=!!(null==t?void 0:t.id)&&"".concat(e.kind,"_").concat(e.id)==="".concat(t.kind,"_").concat(t.id);return(0,r.jsxs)(p.di,{value:"".concat(e.kind,"_").concat(e.id),onSelect:()=>S(e),className:"flex cursor-pointer items-center gap-2 overflow-hidden",children:[(0,r.jsx)("div",{className:"h-4 w-4 shrink-0",children:n&&(0,r.jsx)(x.IconCheck,{className:"shrink-0"})}),(0,r.jsx)("span",{className:"truncate",children:e.name})]},"".concat(e.kind,"_").concat(e.id))})})]}),!!t&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p.zz,{}),(0,r.jsx)(p.di,{onSelect:()=>{a(void 0),b(!1),sessionStorage.removeItem(u.$6.SEARCH_SELECTED_REPO)},className:"!pointer-events-auto mt-1 cursor-pointer justify-center text-center !opacity-100",children:"Clear"})]})]})})})]}),(0,r.jsx)(g._v,{className:"max-w-md",children:"Effortlessly interact with your repositories for contextualized search and assistance."})]})}},63743:function(e,n,t){t.d(n,{T:function(){return l}});var r=t(36164),s=t(3546),a=t(9010),i=t(31458),o=t(81565);function l(e){let{className:n}=e,{setTheme:t,theme:l}=(0,a.X)(),[d,u]=s.useTransition();return(0,r.jsxs)(i.z,{variant:"ghost",size:"icon",onClick:()=>{u(()=>{t("light"===l?"dark":"light")})},className:n,children:["dark"===l?(0,r.jsx)(o.IconMoon,{className:"transition-all"}):(0,r.jsx)(o.IconSun,{className:"transition-all"}),(0,r.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}},36065:function(e,n,t){t.d(n,{di:function(){return p},e8:function(){return u},fu:function(){return f},mY:function(){return l},rb:function(){return c},sZ:function(){return d},zz:function(){return m}});var r=t(36164),s=t(3546),a=t(53241),i=t(93170),o=t(74248);t(30220);let l=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)(a.mY,{ref:n,className:(0,o.cn)("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",t),...s})});l.displayName=a.mY.displayName;let d=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsxs)("div",{className:"flex items-center border-b px-3","cmdk-input-wrapper":"",children:[(0,r.jsx)(i.Z,{className:"mr-2 h-4 w-4 shrink-0 opacity-50"}),(0,r.jsx)(a.mY.Input,{ref:n,className:(0,o.cn)("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",t),...s})]})});d.displayName=a.mY.Input.displayName;let u=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)(a.mY.List,{ref:n,className:(0,o.cn)("max-h-[300px] overflow-y-auto overflow-x-hidden",t),...s})});u.displayName=a.mY.List.displayName;let c=s.forwardRef((e,n)=>(0,r.jsx)(a.mY.Empty,{ref:n,className:"py-6 text-center text-sm",...e}));c.displayName=a.mY.Empty.displayName;let f=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)(a.mY.Group,{ref:n,className:(0,o.cn)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",t),...s})});f.displayName=a.mY.Group.displayName;let m=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)(a.mY.Separator,{ref:n,className:(0,o.cn)("-mx-1 h-px bg-border",t),...s})});m.displayName=a.mY.Separator.displayName;let p=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)(a.mY.Item,{ref:n,className:(0,o.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-disabled:pointer-events-none aria-disabled:opacity-50 aria-selected:bg-accent aria-selected:text-accent-foreground",t),...s})});p.displayName=a.mY.Item.displayName},30220:function(e,n,t){t.d(n,{$N:function(){return h},Be:function(){return g},Vq:function(){return l},cN:function(){return p},cZ:function(){return f},fK:function(){return m},hg:function(){return d}});var r=t(36164),s=t(3546),a=t(4318),i=t(1663),o=t(74248);let l=a.fC,d=a.xz,u=a.h_;a.x8;let c=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)(a.aV,{ref:n,className:(0,o.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...s})});c.displayName=a.aV.displayName;let f=s.forwardRef((e,n)=>{let{className:t,children:s,...l}=e;return(0,r.jsxs)(u,{children:[(0,r.jsx)(c,{}),(0,r.jsxs)(a.VY,{ref:n,className:(0,o.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",t),...l,children:[s,(0,r.jsxs)(a.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,r.jsx)(i.Z,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});f.displayName=a.VY.displayName;let m=e=>{let{className:n,...t}=e;return(0,r.jsx)("div",{className:(0,o.cn)("flex flex-col space-y-1.5 text-center sm:text-left",n),...t})};m.displayName="DialogHeader";let p=e=>{let{className:n,...t}=e;return(0,r.jsx)("div",{className:(0,o.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",n),...t})};p.displayName="DialogFooter";let h=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)(a.Dx,{ref:n,className:(0,o.cn)("text-lg font-semibold leading-none tracking-tight",t),...s})});h.displayName=a.Dx.displayName;let g=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)(a.dk,{ref:n,className:(0,o.cn)("text-sm text-muted-foreground",t),...s})});g.displayName=a.dk.displayName},62202:function(e,n,t){t.d(n,{$F:function(){return l},AW:function(){return u},Ju:function(){return f},VD:function(){return m},Xi:function(){return c},h_:function(){return o}});var r=t(36164),s=t(3546),a=t(19148),i=t(74248);let o=a.fC,l=a.xz;a.ZA,a.Uv,a.Tr,a.Ee;let d=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)(a.tu,{ref:n,className:(0,i.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",t),...s})});d.displayName=a.tu.displayName;let u=s.forwardRef((e,n)=>{let{className:t,sideOffset:s=4,...o}=e;return(0,r.jsx)(a.Uv,{children:(0,r.jsx)(a.VY,{ref:n,sideOffset:s,className:(0,i.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...o})})});u.displayName=a.VY.displayName;let c=s.forwardRef((e,n)=>{let{className:t,inset:s,...o}=e;return(0,r.jsx)(a.ck,{ref:n,className:(0,i.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",s&&"pl-8",t),...o})});c.displayName=a.ck.displayName;let f=s.forwardRef((e,n)=>{let{className:t,inset:s,...o}=e;return(0,r.jsx)(a.__,{ref:n,className:(0,i.cn)("px-2 py-1.5 text-sm font-semibold",s&&"pl-8",t),...o})});f.displayName=a.__.displayName;let m=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)(a.Z0,{ref:n,className:(0,i.cn)("-mx-1 my-1 h-px bg-muted",t),...s})});m.displayName=a.Z0.displayName},7449:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(36164),s=t(3546),a=t(11978),i=t(98454),o=t(80605),l=t(91302),d=t(62202),u=t(81565);function c(e){let{children:n,showHome:t=!0,showSetting:c=!1}=e,f=(0,a.useRouter)(),m=(0,l.QJ)(),[{data:p}]=(0,i.P)(),h=null==p?void 0:p.me;(0,o.xG)();let[g,v]=s.useState(!1),x=async e=>{e.preventDefault(),v(!0),await m(),v(!1)};if(h)return(0,r.jsxs)(d.h_,{children:[(0,r.jsx)(d.$F,{children:n}),(0,r.jsxs)(d.AW,{collisionPadding:{right:16},children:[h.name&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.Ju,{className:"pb-0.5",children:h.name}),(0,r.jsx)(d.Ju,{className:"pb-1 pt-0 text-sm font-normal text-muted-foreground",children:h.email})]}),!h.name&&(0,r.jsx)(d.Ju,{children:h.email}),(0,r.jsx)(d.VD,{}),t&&(0,r.jsxs)(d.Xi,{onClick:()=>f.push("/"),className:"cursor-pointer",children:[(0,r.jsx)(u.IconHome,{}),(0,r.jsx)("span",{className:"ml-2",children:"Home"})]}),c&&(0,r.jsxs)(d.Xi,{onClick:()=>f.push("/profile"),className:"cursor-pointer",children:[(0,r.jsx)(u.IconGear,{}),(0,r.jsx)("span",{className:"ml-2",children:"Settings"})]}),(0,r.jsxs)(d.Xi,{onClick:()=>window.open("/files"),className:"cursor-pointer",children:[(0,r.jsx)(u.IconCode,{}),(0,r.jsx)("span",{className:"ml-2",children:"Code Browser"})]}),(0,r.jsxs)(d.Xi,{onClick:()=>window.open("/api"),className:"cursor-pointer",children:[(0,r.jsx)(u.IconBackpack,{}),(0,r.jsx)("span",{className:"ml-2",children:"API Docs"})]}),(0,r.jsx)(d.VD,{}),(0,r.jsxs)(d.Xi,{disabled:g,onClick:x,className:"cursor-pointer",children:[(0,r.jsx)(u.IconLogout,{}),(0,r.jsx)("span",{className:"ml-2",children:"Sign out"}),g&&(0,r.jsx)(u.IconSpinner,{className:"ml-1"})]})]})]})}},21808:function(e,n,t){t.d(n,{$6:function(){return a},L8:function(){return s},o0:function(){return r}});let r="name@yourcompany.com",s=20,a={DEMO_AUTO_LOGIN:"_tabby_demo_autologin",SEARCH_INITIAL_MSG:"_tabby_search_initial_msg",SEARCH_INITIAL_EXTRA_CONTEXT:"_tabby_search_initial_extra_context",SEARCH_SELECTED_REPO:"_tabby_search_selected_repo"}},93877:function(e,n,t){t.d(n,{BT:function(){return l},Ds:function(){return d},Ot:function(){return c},m3:function(){return m}});var r=t(3546);let s=(e,n)=>{let[t,s]=(0,r.useState)(n),[a,i]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{let n=localStorage.getItem(e);n&&s(JSON.parse(n)),i(!1)},[]),[t,n=>{s(n),localStorage.setItem(e,JSON.stringify(n))},a]};class a{get value(){if("undefined"!=typeof localStorage){let e=localStorage.getItem(this.storageKey);if(e)return"true"===e}return this.defaultValue}constructor(e,n,t,r){this.storageKey=e,this.title=n,this.description=t,this.defaultValue=r}}class i{defineGlobalVar(){return new a(this.storageKey,this.title,this.description,this.defaultValue)}defineHook(){return()=>{let[e,n,t]=s(this.storageKey,this.defaultValue);return[{value:e,title:this.title,description:this.description,loading:t},()=>{n(!e)}]}}constructor(e,n,t,r){this.storageKey="EXP_".concat(e),this.title=n,this.description=t,this.defaultValue=null!=r&&r}}let o=new i("enable_code_browser_quick_action_bar","Quick Action Bar","Enable Quick Action Bar to display a convenient toolbar when you select code, offering options to explain the code, add unit tests, and more.",!0),l=o.defineGlobalVar(),d=o.defineHook(),u=new i("enable_search","Search","Enable the search on the home page to search for anything you want to know using the local chat model.",!0);u.defineGlobalVar();let c=u.defineHook(),f=new i("enable_developer_mode","Developer Mode","Enable the developer mode. The features involved include the Answer Engine.",!1);f.defineGlobalVar();let m=f.defineHook()},9010:function(e,n,t){t.d(n,{X:function(){return s}});var r=t(28242);function s(){let{theme:e,systemTheme:n,setTheme:t}=(0,r.F)();return{theme:e&&"system"!==e?e:n||"light",setTheme:t,systemTheme:n}}},38785:function(e,n,t){t.d(n,{U:function(){return a}});var r=t(3546);let s=!0;function a(){let[e,n]=r.useState(()=>!s);return r.useEffect(function(){s=!1,n(!0)},[]),e}},80605:function(e,n,t){t.d(n,{UA:function(){return c},Uw:function(){return d},c7:function(){return l},jJ:function(){return u},xG:function(){return o}});var r=t(40055),s=t(43240);let a=(0,s.BX)("\n  query GetServerInfo {\n    serverInfo {\n      isAdminInitialized\n      isEmailConfigured\n      isChatEnabled\n      allowSelfSignup\n      isDemoMode\n    }\n  }\n"),i=()=>{let[{data:e}]=(0,r.aM)({query:a});return null==e?void 0:e.serverInfo},o=()=>{var e;return null===(e=i())||void 0===e?void 0:e.isChatEnabled},l=()=>{var e;return null===(e=i())||void 0===e?void 0:e.isAdminInitialized},d=()=>{var e;return null===(e=i())||void 0===e?void 0:e.isEmailConfigured},u=()=>{var e;return null===(e=i())||void 0===e?void 0:e.allowSelfSignup},c=()=>{var e;return null===(e=i())||void 0===e?void 0:e.isDemoMode}},91302:function(e,n,t){t.d(n,{Dp:function(){return g},Ho:function(){return x},QJ:function(){return k},av:function(){return S},kP:function(){return j},zq:function(){return N}});var r,s,a=t(36164),i=t(3546),o=t(11978),l=t(24426),d=t.n(l),u=t(43240),c=t(80605),f=t(11634),m=t(66794);function p(e,n){var t,r;let a=function(e,n){switch(n.type){case s.SignIn:case s.Refresh:return{status:"authenticated",data:n.data};case s.SignOut:return{status:"unauthenticated",data:void 0}}}(0,n);return e.status==a.status&&(t=e.data,r=a.data,(null==t?void 0:t.accessToken)===(null==r?void 0:r.accessToken)&&(null==t?void 0:t.refreshToken)===(null==r?void 0:r.refreshToken))?e:a}(r=s||(s={}))[r.SignIn=0]="SignIn",r[r.SignOut=1]="SignOut",r[r.Refresh=2]="Refresh";let h=i.createContext({}),g=(0,u.BX)("\n  mutation refreshToken($refreshToken: String!) {\n    refreshToken(refreshToken: $refreshToken) {\n      accessToken\n      refreshToken\n    }\n  }\n"),v=(0,u.BX)("\n  mutation LogoutAllSessions {\n    logoutAllSessions\n  }\n"),x=e=>{let{children:n}=e,[t,r]=i.useState(!1),[o]=d()(m.nd,void 0),[l,u]=i.useReducer(p,{status:"loading",data:void 0});i.useEffect(()=>{(null==o?void 0:o.accessToken)&&(null==o?void 0:o.refreshToken)?u({type:s.SignIn,data:o}):u({type:s.SignOut}),r(!0)},[]),i.useEffect(()=>{!t||((null==o?void 0:o.accessToken)&&(null==o?void 0:o.refreshToken)?u({type:s.Refresh,data:o}):(null==o?void 0:o.accessToken)||(null==o?void 0:o.refreshToken)||u({type:s.SignOut}))},[o]);let c=i.useMemo(()=>{var e;return(null==l?void 0:l.status)=="authenticated"?{data:{accessToken:l.data.accessToken},status:l.status}:{status:null!==(e=null==l?void 0:l.status)&&void 0!==e?e:"loading",data:null}},[l]);return(0,a.jsx)(h.Provider,{value:{authState:l,dispatch:u,session:c},children:n})};class y extends Error{constructor(){super("AuthProvider is missing. Please add the AuthProvider at root level")}}function b(){let e=i.useContext(h);if(!e)throw new y;return e}function N(){let{dispatch:e}=b(),[n,t]=d()(m.nd,void 0);return async n=>(t({accessToken:n.accessToken,refreshToken:n.refreshToken}),e({type:s.SignIn,data:n}),!0)}function k(){let e=(0,f.D)(v),{dispatch:n}=b(),[t,r]=d()(m.nd,void 0);return async()=>{await e(),r(void 0),n({type:s.SignOut})}}function j(){let{session:e}=b();return e}let w=["/auth/signin","/auth/signup","/auth/reset-password"];function S(){let e=(0,c.c7)(),n=(0,o.useRouter)(),t=(0,o.usePathname)(),r=(0,o.useSearchParams)(),{data:s,status:a}=j();return i.useEffect(()=>{if("loading"===a||"authenticated"===a||void 0===e)return;let s="/auth/signup"===t&&"true"===r.get("isAdmin");if(!s&&!e)return n.replace("/auth/signup?isAdmin=true");w.includes(t)||n.replace("/auth/signin")},[e,a]),s}},11634:function(e,n,t){t.d(n,{D:function(){return m},L:function(){return p}});var r=t(22365),s=t(28552),a=t(81013),i=t(79716),o=t(74630),l=t(40055),d=t(44745),u=t(91302),c=t(70410),f=t(66794);function m(e,n){var t;let[r,s]=(0,l.Db)(e),a=(null==n?void 0:n.form)?(t=n.form,e=>{let{graphQLErrors:n=[]}=e;for(let e of n)if(e.extensions&&e.extensions["validation-errors"]){let n=e.extensions["validation-errors"];for(let e of n.errors)t.setError(e.path,e)}else(null==e?void 0:e.originalError)&&t.setError("root",e.originalError)}):void 0,i=async e=>{let t;try{if(null==(t=await s(e))?void 0:t.error)a&&a(t.error),(null==n?void 0:n.onError)&&n.onError(t.error);else if(!(0,o.Z)(null==t?void 0:t.data)){var r;null==n||null===(r=n.onCompleted)||void 0===r||r.call(n,t.data)}}catch(e){(null==n?void 0:n.onError)&&n.onError(e);return}return t};return i}let p=new d.KU({url:"/graphql",requestPolicy:"cache-and-network",exchanges:[(0,s.HG)({keys:{CompletionStats:()=>null,ServerInfo:()=>null,RepositorySearch:()=>null,RepositoryList:()=>null,RepositoryGrep:()=>null,GrepLine:()=>null,GrepFile:()=>null,GrepTextOrBase64:()=>null,GrepSubMatch:()=>null,Repository:e=>e?"".concat(e.kind,"_").concat(e.id):null,GitReference:()=>null},resolvers:{Query:{invitations:(0,a.N)(),gitRepositories:(0,a.N)(),webCrawlerUrls:(0,a.N)(),integrations:(0,a.N)()}},updates:{Mutation:{deleteInvitation(e,n,t,r){e.deleteInvitation&&t.inspectFields("Query").filter(e=>"invitations"===e.fieldName).forEach(e=>{t.updateQuery({query:c.lE,variables:e.arguments},e=>{var t;return(null==e?void 0:null===(t=e.invitations)||void 0===t?void 0:t.edges)&&(e.invitations.edges=e.invitations.edges.filter(e=>e.node.id!==n.id)),e})})},deleteGitRepository(e,n,t,r){e.deleteGitRepository&&t.inspectFields("Query").filter(e=>"gitRepositories"===e.fieldName).forEach(e=>{t.updateQuery({query:c.S1,variables:e.arguments},e=>{var t;return(null==e?void 0:null===(t=e.gitRepositories)||void 0===t?void 0:t.edges)&&(e.gitRepositories.edges=e.gitRepositories.edges.filter(e=>e.node.id!==n.id)),e})})},deleteWebCrawlerUrl(e,n,t,r){e.deleteWebCrawlerUrl&&t.inspectFields("Query").filter(e=>"webCrawlerUrls"===e.fieldName).forEach(e=>{t.updateQuery({query:c.XP,variables:e.arguments},e=>{var t;return(null==e?void 0:null===(t=e.webCrawlerUrls)||void 0===t?void 0:t.edges)&&(e.webCrawlerUrls.edges=e.webCrawlerUrls.edges.filter(e=>e.node.id!==n.id)),e})})},deleteIntegration(e,n,t,r){e.deleteIntegration&&t.inspectFields("Query").filter(e=>"integrations"===e.fieldName).forEach(e=>{t.updateQuery({query:c.kb,variables:e.arguments},e=>((null==e?void 0:e.integrations)&&(e.integrations.edges=e.integrations.edges.filter(e=>e.node.id!==n.id)),e))})},createIntegration(e,n,t){let r="Query";t.inspectFields(r).filter(e=>{var t,r,s;return"integrations"===e.fieldName&&!!(null===(t=e.arguments)||void 0===t?void 0:t.kind)&&(null===(r=e.arguments)||void 0===r?void 0:r.kind)===(null==n?void 0:null===(s=n.input)||void 0===s?void 0:s.kind)}).forEach(e=>{t.invalidate(r,e.fieldName,e.arguments)})}}}}),(0,r.M)(async e=>{let n=(0,f.bW)(),t=null==n?void 0:n.accessToken,r=null==n?void 0:n.refreshToken;return{addAuthToOperation(n){let s=(0,f.bW)();return(t=null==s?void 0:s.accessToken,r=null==s?void 0:s.refreshToken,t)?e.appendHeaders(n,{Authorization:"Bearer ".concat(t)}):n},didAuthError(e,n){let t=e.graphQLErrors.some(e=>{var n;return(null==e?void 0:null===(n=e.extensions)||void 0===n?void 0:n.code)==="UNAUTHORIZED"});return t&&f.gN.clearAccessToken(),t},willAuthError(e){let n=(0,f.bW)();if(t=null==n?void 0:n.accessToken,r=null==n?void 0:n.refreshToken,"query"===e.kind&&e.query.definitions.some(e=>{var n;return"OperationDefinition"===e.kind&&(null===(n=e.name)||void 0===n?void 0:n.value)&&["GetServerInfo"].includes(e.name.value)})||"mutation"===e.kind&&e.query.definitions.some(e=>{var n;return"OperationDefinition"===e.kind&&(null===(n=e.name)||void 0===n?void 0:n.value)&&["tokenAuth","register"].includes(e.name.value)})||r&&"mutation"===e.kind&&e.query.definitions.some(e=>{var n;return"OperationDefinition"===e.kind&&(null==e?void 0:null===(n=e.name)||void 0===n?void 0:n.value)==="refreshToken"}))return!1;if(!t)return f.gN.clearAccessToken(),!0;try{let{exp:e}=(0,i.o)(t);return(0,f.pw)(e)}catch(e){return!0}},refreshAuth:async()=>f.gN.refreshToken(async()=>{var n;let t=null===(n=(0,f.bW)())||void 0===n?void 0:n.refreshToken;if(t)return e.mutate(u.Dp,{refreshToken:t}).then(e=>{var n;return null==e?void 0:null===(n=e.data)||void 0===n?void 0:n.refreshToken})})}}),(0,d.Dk)({onError(e){e.message.startsWith("[GraphQL]")&&(e.message=e.message.replace("[GraphQL]","").trim())}}),d.Ek]})},70410:function(e,n,t){t.d(n,{Cl:function(){return c},D7:function(){return g},DQ:function(){return l},GG:function(){return i},S1:function(){return a},XP:function(){return p},Y6:function(){return u},kb:function(){return f},lE:function(){return s},ts:function(){return m},yB:function(){return o},yw:function(){return d},zz:function(){return h}});var r=t(43240);let s=(0,r.BX)("\n  query ListInvitations(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    invitations(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          id\n          email\n          code\n          createdAt\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),a=(0,r.BX)("\n  query gitRepositories(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    gitRepositories(\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          name\n          gitUrl\n          jobInfo {\n            lastJobRun {\n              id\n              job\n              createdAt\n              finishedAt\n              exitCode\n            }\n            command\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),i=(0,r.BX)("\n  query ListJobRuns(\n    $ids: [ID!]\n    $jobs: [String!]\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    jobRuns(\n      ids: $ids\n      jobs: $jobs\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          job\n          createdAt\n          startedAt\n          finishedAt\n          exitCode\n          stdout\n          stderr\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),o=(0,r.BX)("\n  query GetJobRunStats($jobs: [String!]) {\n    jobRunStats(jobs: $jobs) {\n      success\n      failed\n      pending\n    }\n  }\n"),l=(0,r.BX)("\n  query ListJobs {\n    jobs\n  }\n"),d=(0,r.BX)("\n  query ListUsers($after: String, $before: String, $first: Int, $last: Int) {\n    users(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          id\n          email\n          isAdmin\n          isOwner\n          createdAt\n          active\n          name\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),u=(0,r.BX)("\n  query DailyStatsInPastYear($users: [ID!]) {\n    dailyStatsInPastYear(users: $users) {\n      start\n      end\n      completions\n      selects\n      views\n    }\n  }\n"),c=(0,r.BX)("\n  query DailyStats(\n    $start: DateTime!\n    $end: DateTime!\n    $users: [ID!]\n    $languages: [Language!]\n  ) {\n    dailyStats(start: $start, end: $end, users: $users, languages: $languages) {\n      start\n      end\n      completions\n      selects\n      views\n      language\n    }\n  }\n"),f=(0,r.BX)("\n  query ListIntegrations(\n    $ids: [ID!]\n    $kind: IntegrationKind\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    integrations(\n      ids: $ids\n      kind: $kind\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          displayName\n          status\n          apiBase\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),m=(0,r.BX)("\n  query ListIntegratedRepositories(\n    $ids: [ID!]\n    $kind: IntegrationKind\n    $active: Boolean\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    integratedRepositories(\n      ids: $ids\n      kind: $kind\n      active: $active\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          displayName\n          gitUrl\n          active\n          jobInfo {\n            lastJobRun {\n              id\n              job\n              createdAt\n              finishedAt\n              startedAt\n              exitCode\n            }\n            command\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),p=(0,r.BX)("\n  query WebCrawlerUrls(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    webCrawlerUrls(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          url\n          id\n          createdAt\n          jobInfo {\n            lastJobRun {\n              id\n              job\n              createdAt\n              finishedAt\n              exitCode\n            }\n            command\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),h=(0,r.BX)("\n  query RepositoryList {\n    repositoryList {\n      id\n      name\n      kind\n      gitUrl\n      refs {\n        name\n        commit\n      }\n    }\n  }\n"),g=(0,r.BX)("\n  query RepositorySearch(\n    $kind: RepositoryKind!\n    $id: ID!\n    $rev: String\n    $pattern: String!\n  ) {\n    repositorySearch(kind: $kind, id: $id, rev: $rev, pattern: $pattern) {\n      type\n      path\n      indices\n    }\n  }\n")},66794:function(e,n,t){t.d(n,{bW:function(){return o},gN:function(){return f},nd:function(){return i},pw:function(){return u}});var r=t(79716),s=t(74630),a=t(74248);let i="_tabby_auth",o=()=>{if((0,a.S_)()){let e=localStorage.getItem(i);if(e)try{return JSON.parse(e)}catch(e){}}},l=e=>{localStorage.setItem(i,JSON.stringify(e))},d=()=>{localStorage.removeItem(i),window.dispatchEvent(new StorageEvent("storage",{storageArea:window.localStorage,url:window.location.href,key:i}))},u=e=>!!(0,s.Z)(e)||Date.now()>1e3*e,c=e=>!(0,s.Z)(e)&&Date.now()-1e3*e<6e4,f=new class{clearAccessToken(){let e=o();e&&l({...e,accessToken:""})}async refreshToken(e){try{var n;if(void 0===(null===(n=navigator)||void 0===n?void 0:n.locks))throw console.error("The Web Locks API is not supported in your browser. Please upgrade to a newer browser version."),Error();await navigator.locks.request("_tabby_auth_lock",async()=>{let n;let t=o(),s=null==t?void 0:t.accessToken,a=null==t?void 0:t.refreshToken;if(s){let{iat:a}=(0,r.o)(s);n=c(a)?t:await e()}else a&&(n=await e());n?l(n):d()})}catch(e){d()}}}}}]);