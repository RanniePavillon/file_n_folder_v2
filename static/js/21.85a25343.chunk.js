(this.webpackJsonppofyourtool=this.webpackJsonppofyourtool||[]).push([[21],{179:function(e,t,a){"use strict";a.r(t);var o=a(291),n=a(292),i=a(246),c=a(241),s=a(248),l=a(278),r=a(244),p=a(6),x=a(252),j=a(15),d=a(1),h=a(262),b=a(273),f=a(274),O=a(254),g=a(23),m=a(3),u=a(0);var F=()=>{const{tool_state:e,navigation_state:t}=Object(d.useContext)(j.a),{__SESSION:a}=e,{notif:F,myTool:y}=t,C=Object(g.g)().pathname,w=async e=>{if("MyTools"===e)y.set(!y.data);else if("Notifications"===e)F.set(!0);else if("Chat"===e){let e="https://".concat("prod"===Object(m.b)()?"":"sb"===Object(m.b)()?"sb-":"dev-","chat.pofsis.com");window.open("".concat(e,"/sso/account/auth?ainfo=").concat(encodeURIComponent(JSON.stringify(a.data.ainfo))),"_blank").focus()}};return Object(u.jsxs)(o.a,{position:"fixed",elevation:0,sx:{height:"/psl"===C?92:40,width:"100%",bgcolor:"/psl"!==C&&"#FFFFFF"},children:[Object(u.jsxs)(n.a,{sx:{p:"0px !important",height:"100%",width:"100%",flexDirection:"column"},children:[Object(u.jsxs)(i.a,{minHeight:"40px",width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",px:"16px",py:"8px",children:[Object(u.jsxs)(i.a,{display:"flex",alignItems:"center",gap:"16px",children:[Object(u.jsx)(p.h,{size:24}),Object(u.jsx)(i.a,{fontSize:16,fontWeight:600,lineHeight:"24px",color:"/psl"===C?"#FFFFFF":"#283745",children:"POFYourTool"})]}),Object(u.jsxs)(i.a,{display:"flex",alignItems:"center",gap:"16px",children:[Object(u.jsx)(p.p,{size:24,stroke:"/psl"===C?"#FFFFFF":"#333333"}),Object(u.jsx)(x.c,{title:"Chat",arrow:!0,sx:{margin:"0 14px 0 14px"},onClick:()=>w("Chat"),children:Object(u.jsx)(c.a,{variant:"rounded",src:O.a,sx:{height:24,width:24},className:"c-pointer"})}),t.tabs.data.mtop.map(((e,t)=>Object(u.jsx)(s.a,{sx:{p:"0px !important"},onClick:()=>w(e.name),children:Object(u.jsx)(l.a,{badgeContent:0,sx:{"& .MuiBadge-badge":{color:"#ffffff",backgroundColor:"#FF0000"}},children:"Notifications"===e.name?Object(u.jsx)(p.m,{fill:"/psl"===C?"#FFFFFF":"#333333"}):Object(u.jsx)(p.j,{fill:"/psl"===C?"#FFFFFF":"#333333"})})},t)))]})]}),"/psl"===C&&Object(u.jsx)(r.a,{sx:{height:"52px",py:"8px"},children:Object(u.jsx)(h.a,{__SESSION:a.data})})]}),Object(u.jsx)(b.a,{notif:F}),Object(u.jsx)(f.a,{})]})},y=a(115),C=a(250),w=a(290),v=a(249),S=a(289),k=a(286),I=a(288),_=a(233),N=a(282),z=a(283),T=a(284),D=a(285),R=a(287),W=a(22);var E=()=>{const e=Object(d.useRef)(0),[t]=Object(d.useState)(!1),[a,c]=Object(d.useState)(!1),[r,p]=Object(d.useState)(!1),[x,j]=Object(d.useState)(null);let h=Object(g.g)().pathname.split("/");const b=Object(_.a)((e=>({appbar:{top:"48px",marginLeft:260,width:t?"calc(100% - ".concat(260,"px)"):"",transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration[t?"leavingScreen":"enteringScreen"]})},drawerToggle:{width:260},ListItemText:{"& span, & svg":{fontSize:"13px"}},active:{backgroundColor:"#007c74",color:"#ffffff","&:hover":{color:"#ffffff",backgroundColor:"#007c74"}}})))(),f=(e,t)=>{"open"===t?(j(e.currentTarget),c(!0)):(j(null),c(!1))},O=(e,t)=>{p("open"===t)};return Object(u.jsxs)(i.a,{children:[Object(u.jsx)(o.a,{position:"fixed",className:b.appbar,style:{backgroundColor:"white"},elevation:5,children:Object(u.jsxs)(n.a,{variant:"dense",children:[Object(u.jsx)(i.a,{onClick:e=>O(0,"open"),children:Object(u.jsx)(N.a,{style:{color:"grey"}})}),Object(u.jsx)(i.a,{flexGrow:1}),Object(u.jsxs)(i.a,{display:"flex",children:[Object(u.jsx)(s.a,{"aria-label":"show 17 new notifications",color:"inherit",children:Object(u.jsx)(l.a,{badgeContent:17,color:"secondary",children:Object(u.jsx)(z.a,{style:{color:"#404040"}})})}),Object(u.jsx)(s.a,{edge:"end",ref:e,"aria-controls":"aelDesk","aria-label":"account of current user","aria-haspopup":"true",color:"inherit",onClick:e=>f(e,"open"),children:Object(u.jsx)(T.a,{style:{color:"#404040"}})}),Object(u.jsxs)(y.a,{anchorEl:x,anchorOrigin:{vertical:"top",horizontal:"right"},id:"aelDesk",transformOrigin:{vertical:"top",horizontal:"right"},open:a,onClose:e=>f(e,"!open"),keepMounted:!0,children:[Object(u.jsx)(C.a,{onClick:f,children:"Profile"}),Object(u.jsx)(C.a,{onClick:f,children:"My account"})]})]})]})}),Object(u.jsx)(w.a,{anchor:"left",open:r,onClose:e=>O(0,"!open"),onOpen:e=>O(0,"open"),children:Object(u.jsxs)(i.a,{className:b.drawerToggle,children:[Object(u.jsxs)(i.a,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[Object(u.jsx)(i.a,{ml:2.1,className:"f-18",children:Object(u.jsx)("strong",{children:"Menu"})}),Object(u.jsx)(i.a,{display:"flex",alignItems:"center",pl:1,children:Object(u.jsx)(s.a,{onClick:e=>O(0,"!open"),children:Object(u.jsx)(D.a,{})})})]}),Object(u.jsx)(v.a,{children:Object(u.jsx)(W.b,{to:"/",children:Object(u.jsxs)(S.a,{button:!0,className:""===h[1]?b.active:"",children:[Object(u.jsx)(k.a,{style:{marginLeft:t?"":"5px",minWidth:t?"40px":"50px"},children:Object(u.jsx)(R.a,{})}),Object(u.jsx)(I.a,{className:b.ListItemText,primary:"Home"})]})})})]})})]})},H=a(227),M=a(236),J=a(228),q=a(44);var A=()=>{const{navigation_state:e,tool_state:t,install_state:a}=Object(d.useContext)(j.a),{__SESSION:l}=t,{myTool:r,notif:x}=e,h=Object(g.g)().pathname.split("/"),b=Object(g.f)(),f=Object(H.a)("(max-width:350px)"),O=l.data.pinfo.length>0&&null!==l.data.pinfo[0].profile&&null!==JSON.parse(l.data.pinfo[0].profile).profile?JSON.parse(l.data.pinfo[0].profile).profile:q.a;return null!==l&&Object(u.jsxs)(u.Fragment,{children:[null!==a.prompt.data&&Object(u.jsx)(o.a,{position:"fixed",sx:{top:"auto",bottom:54,backgroundColor:"#FFFFFF",color:"#516A7D",height:"68px",zIndex:r.data||x.data?1301:"auto",boxShadow:"0px -8px 16px 0px #00000014, 0px 0px 4px 0px #0000000A"},elevation:0,children:Object(u.jsx)(n.a,{sx:{display:"flex",alignItems:"center",height:"68px",p:"0px ".concat(f?"8px":"16px"," !important")},children:Object(u.jsxs)(i.a,{height:"32px",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",color:"#283745",gap:"12px",children:[Object(u.jsx)(p.h,{size:35}),Object(u.jsx)(i.a,{fontSize:12,fontWeight:400,lineHeight:"19.42px",children:"Don't miss out on the ultimate app experience! "}),Object(u.jsx)(i.a,{component:M.a,onClick:async()=>{if(null!==a.prompt.data){a.prompt.data.prompt();const{outcome:e}=await a.prompt.data.userChoice;if("accepted"===e){if(a.ip.set({stat:!1,prompt_type:null}),a.prompt.set(null),"logout"!==a.ip.data.prompt_type)return;localStorage.removeItem("your_psl_session"),window.location.href="".concat(Object(m.a)("pm").url,"/sso/rqx?from=").concat(Object(m.c)("tsa_key"),"&callback=").concat("dev"===Object(m.b)()||"local"===Object(m.b)()?"development":"sb"===Object(m.b)()?"sandbox":Object(m.b)(),"&platform=personal")}}},sx:{height:"36px",width:"103px",bgcolor:"#256EFF",color:"#FFFFFF",borderRadius:"6px",":hover":{bgcolor:"#256EFF",color:"#FFFFFF"}},children:Object(u.jsx)(i.a,{fontSize:14,fontWeight:500,lineHeight:"24px",children:"Get App"})})]})})}),Object(u.jsx)(o.a,{position:"fixed",sx:{top:"auto",bottom:0,backgroundColor:"#FFFFFF",color:"#516A7D",height:"54px",zIndex:r.data||x.data?1301:"auto"},elevation:0,children:Object(u.jsxs)(n.a,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",height:"54px",gap:f?"8px":"15px",p:"0px ".concat(f?"8px":"16px"," !important")},children:[e.tabs.data.mobile.map(((e,t)=>Object(u.jsx)(i.a,{height:"100%",width:"56px",display:"flex",alignItems:"center",justifyContent:"center",className:e.steps,onClick:()=>(e=>{b.push(e),r.data&&r.set(!1),x.data&&x.set(!1)})(e.subdir),children:Object(u.jsxs)(J.a,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",px:"0px !important",color:h===e.ref?"#3D77E9":"#687B75",fontWeight:600},children:[Object(u.jsx)(s.a,{disableFocusRipple:!0,disableTouchRipple:!0,sx:{padding:"4px !important",bgcolor:h[2]===e.ref?"#F0F5F9":"#FFFFFF",borderRadius:"8px"},children:h[2]===e.ref?e.active:e.not_active}),"tool-categories"===h[2]&&"Tool Categories"===e.name?Object(u.jsx)(i.a,{className:"marquee",width:"50px",children:Object(u.jsx)(i.a,{className:"tool-categories"===h[2]?"marqueestc":"marquees",fontWeight:h[2]===e.ref?600:400,fontSize:11,color:h[2]===e.ref?"#11783C":"#283745",children:e.name})}):Object(u.jsx)(i.a,{fontWeight:h[2]===e.ref?600:400,fontSize:11,lineHeight:"18px",color:h[2]===e.ref?"#11783C":"#283745",sx:{width:"100%",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:e.name})]})},t))),Object(u.jsx)(i.a,{height:"100%",width:"56px",display:"flex",alignItems:"center",justifyContent:"center",onClick:()=>b.push("/psl/more"),children:Object(u.jsxs)(J.a,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",px:"0px !important"},children:[Object(u.jsx)(s.a,{disableFocusRipple:!0,disableTouchRipple:!0,sx:{padding:"4px !important",bgcolor:"more"===h[2]?"#F0F5F9":"#FFFFFF",borderRadius:"8px"},children:Object(u.jsx)(c.a,{src:O,variant:"circular",sx:{width:20,height:20}})}),Object(u.jsx)(i.a,{fontWeight:600,fontSize:11,color:"#283745",children:"More"})]})})]})})]})};t.default=e=>{let{side:t}=e,a=[F,E,A];return a=a[t],Object(u.jsx)(a,{})}}}]);
//# sourceMappingURL=21.85a25343.chunk.js.map