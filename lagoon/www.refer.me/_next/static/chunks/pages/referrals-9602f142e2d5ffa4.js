(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8217],{54653:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSP:function(){return U}});var n=t(59499),a=t(16835),o=t(27812),i=t(47364),s=t(39653),c=t(32039),l=t(645),u=t(17297),d=t(28494),h=t(35975),f=t(96486),p=t(11163),m=t(2962),g=t(67294),b=t(87536),Z=t(60155),y=t(74231),v=t(78167),O=t(8211),w=t(35293),x=t(65771),S=t(60582),_=t(83878),P=t(42882),j=t(93277),R=t(84474),q=t(89030),B=t(3134),N=t(56608),C=t(18502),k=t(95370),E=t(46428),X=t(47249),T=t(35944);function W(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function I(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?W(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):W(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var K=y.Ry().shape({search:y.Z_()}),U=!0;r.default=function(e){var r=e.isUserSignedIn,t=e.categories,n=e.q,y=(0,p.useRouter)(),W=(0,i.Sx)({base:!0,sm:!1}),U=(0,g.useRef)(null),z=(0,g.useState)(null!=n?n:""),L=z[0],Y=z[1],D=(0,E.r)(),A=D.selectedCategoryTags,H=D.sortBy,F=D.order,G=D.perPage,J=D.setSelectedCategoryTabs,M=D.setSortOrder,V=(0,s.qY)(),$=V.isOpen,Q=V.onOpen,ee=V.onClose,er=(0,g.useState)({}),et=er[0],en=er[1],ea=(0,k.g5)({search:L,perPage:G,tags:A,sortBy:H,order:F}),eo=ea.data,ei=ea.isFetchingNextPage,es=ea.fetchNextPage,ec=ea.hasNextPage,el=ea.isLoading;(0,g.useEffect)(function(){return t&&J((0,o.Z)(t)),function(){M(w.KC[w.U9],w.k9[w.U9]),J([])}},[t]);var eu=(0,f.flatten)(null==eo?void 0:eo.pages),ed=(0,C.X)(K),eh=(0,b.cI)({resolver:ed,defaultValues:{search:null!=n?n:""}}),ef=eh.handleSubmit,ep=eh.register,em=(0,g.useMemo)(function(){var e=new Set,r=[],t=W?[[]]:[[],[],[],[]];if(eu.forEach(function(t){e.has(t.id)||(e.add(t.id),r.push(t))}),!r)return t;if(W)t[0]=r;else for(var n=0;n<r.length;n+=1){var a=n%4;r[n].path&&t[a].push(r[n])}return t},[eu,W]),eg=(0,g.useCallback)(function(e){(0,a.Z)(e,1)[0].isIntersecting&&es()},[es,ec]);(0,g.useEffect)(function(){var e=U.current,r=new IntersectionObserver(eg,{threshold:0});return r.observe(e),function(){return r.unobserve(e)}},[es,ec,eg]);var eb=function(e){en(e),Q()};return(0,T.BX)(T.HY,{children:[(0,T.tZ)(m.PB,{title:"refer me — Referrals",description:"Request referrals from over 500 companies across all industries — tech, finance, healthcare, education, and more.",openGraph:{title:"refer me — Referrals",description:"Request referrals from over 500 companies across all industries — tech, finance, healthcare, education, and more."}}),(0,T.tZ)(S.Z,{}),(0,T.tZ)(j.Z,{}),(0,T.tZ)(P.Z,{showNoAuthNotification:!r}),(0,T.tZ)(c.W2,{maxW:"xl",py:{base:4,md:8},px:{base:"4",sm:"8"},children:(0,T.tZ)(c.Kq,{spacing:"6",children:(0,T.BX)(c.Kq,{spacing:{base:"2",md:"3"},textAlign:"center",children:[(0,T.tZ)(c.X6,{size:(0,i.Sx)({base:"xs",md:"sm"}),children:"Companies"}),(0,T.tZ)(c.Ug,{spacing:"1",justify:"center",children:(0,T.tZ)(c.xv,{fontSize:"md",color:"muted",children:"Select a company you want a referral for, enter the URL for the job posting that you want, and send your profile off to our referrers!"})})]})})}),(0,T.tZ)("br",{}),(0,T.BX)(c.W2,{maxW:"3xl",px:{base:"4",sm:"8"},mb:{base:"4",md:"8"},children:[(0,T.tZ)("form",{onSubmit:ef(function(e){if(Y(e.search),e.search&&e.search.length>0){var r=(0,X.Y)("categories");y.push("/referrals",{query:I(I({},r&&{categories:r}),{},{q:e.search})})}else{var t=new URLSearchParams(y.query),n=(0,X.Y)("categories");t.delete("q"),y.push("/referrals",{query:I({},n&&{categories:n})})}}),children:(0,T.BX)(l.BZ,{children:[(0,T.tZ)(l.II,I({borderTopRightRadius:0,borderBottomRightRadius:0,type:"text",placeholder:'Search for a company (e.g. "Amazon")',_placeholder:{color:"gray.400"}},ep("search"))),(0,T.tZ)(u.zx,{borderBottomLeftRadius:0,borderTopLeftRadius:0,type:"submit",colorScheme:"blue",children:(0,T.tZ)(d.JO,{as:Z.yhK,boxSize:"4",color:"gray.100"})})]})}),(0,T.tZ)(O.Z,{})]}),(0,T.tZ)(c.Kq,{spacing:4}),(0,T.BX)(c.W2,{py:{base:"3",md:"3"},children:[el?(0,T.tZ)(q.Z,{}):(0,T.tZ)(c.Kq,{direction:"row",children:(0,T.tZ)(c.Eq,{width:"100%",justify:"center",children:(null==eo?void 0:eo.length)===0?(0,T.tZ)(_.Z,{customText:"We are continually adding new companies to our platform, so please check back soon."}):(0,T.tZ)(T.HY,{children:null==em?void 0:em.map(function(e){return e.length?(0,T.tZ)(c.Kq,{spacing:2,style:{margin:0,paddingRight:"8px",paddingLeft:"8px"},pb:{base:6},width:["100%","50%","50%","25%"],children:null==e?void 0:e.map(function(e){return(0,T.tZ)(N.Z,{delay:-100,children:(0,T.tZ)(v.Z,{onCompanyClick:eb,companyName:e.name,id:e.id,title:e.display_name,imageUrl:e.path,jobBoard:e.job_board_link,categories:e.categories})})})}):null})})})}),(0,T.tZ)("div",{className:"loader",ref:U,children:ei&&ec?(0,T.tZ)(c.W2,{display:"flex",justifyContent:"center",alignItems:"center",mt:4,children:(0,T.tZ)(h.$,{size:"md",color:"blue.500"})}):""})]}),(0,T.tZ)(c.W2,{children:(0,T.tZ)(B.Z,{showTopBorder:!0,placement:"top"})}),(0,T.tZ)(x.Z,{}),(0,T.tZ)(R.Z,{isOpen:$,onClose:ee,company:et})]})}},39706:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/referrals",function(){return t(54653)}])}},function(e){e.O(0,[5445,2013,3609,1827,6556,3874,260,1228,4617,6158,5025,2016,3007,5657,9653,3097,4150,3729,8922,5478,8285,3778,7290,5882,3962,9774,2888,179],function(){return e(e.s=39706)}),_N_E=e.O()}]);