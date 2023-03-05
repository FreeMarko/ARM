"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9746],{19746:function(e,r,t){t.d(r,{Z:function(){return q}});var n=t(59499),a=t(6240),i=t(32039),u=t(47364),s=t(28437),o=t(66682),c=t(645),l=t(29486),d=t(17297),f=t(96486),m=t(41664),p=t.n(m),F=t(11163),h=t(67294),b=t(87536),y=Object.prototype.hasOwnProperty;function g(e,r,t){for(t of e.keys())if(w(t,r))return t}function w(e,r){var t,n,a;if(e===r)return!0;if(e&&r&&(t=e.constructor)===r.constructor){if(t===Date)return e.getTime()===r.getTime();if(t===RegExp)return e.toString()===r.toString();if(t===Array){if((n=e.length)===r.length)for(;n--&&w(e[n],r[n]););return -1===n}if(t===Set){if(e.size!==r.size)return!1;for(n of e)if((a=n)&&"object"==typeof a&&!(a=g(r,a))||!r.has(a))return!1;return!0}if(t===Map){if(e.size!==r.size)return!1;for(n of e)if((a=n[0])&&"object"==typeof a&&!(a=g(r,a))||!w(n[1],r.get(a)))return!1;return!0}if(t===ArrayBuffer)e=new Uint8Array(e),r=new Uint8Array(r);else if(t===DataView){if((n=e.byteLength)===r.byteLength)for(;n--&&e.getInt8(n)===r.getInt8(n););return -1===n}if(ArrayBuffer.isView(e)){if((n=e.byteLength)===r.byteLength)for(;n--&&e[n]===r[n];);return -1===n}if(!t||"object"==typeof e){for(t in n=0,e)if(y.call(e,t)&&++n&&!y.call(r,t)||!(t in r)||!w(e[t],r[t]))return!1;return Object.keys(r).length===n}}return e!=e&&r!=r}var Z=t(74231),O=t(40429),v=t(98924),D=t(18502),j=t(35882),P=t(46037),E=t(35944);function x(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function z(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?x(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var N=Z.Ry().shape({email:Z.Z_().email().required().matches(/^(?!.*\.edu$)/,"Please use a non .edu email"),password:Z.Z_().min(8).max(127).required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,"Password must have a minimum length of 8 characters and also contain an uppercase letter, lowercase letter, number, and special character using one of the following characters: !@#$%^&*"),confirmPassword:Z.Z_().max(127).required(),terms:Z.O7().oneOf([!0],"You must accept the terms and conditions and privacy policy")}),A=Z.Ry().shape({email:Z.Z_().email().required(),firstName:Z.Z_().min(2).required(),lastName:Z.Z_().min(2).required(),password:Z.Z_().min(8).max(127).required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,"Password must have a minimum length of 8 characters and also contain an uppercase letter, lowercase letter, number, and special character using one of the following characters: !@#$%^&*"),confirmPassword:Z.Z_().max(127).required(),terms:Z.O7().oneOf([!0],"You must accept the terms and conditions")}),q=function(e){var r,t,n,m=e.isReferrer,y=e.title,g=(0,a.pm)(),Z=(0,F.useRouter)(),x=(0,j.GI)(),q=x.mutate,C=x.isLoading,X=(0,j.A3)(),S=X.mutate,k=X.isLoading,I=(0,D.X)(m?N:A),R=(0,b.cI)({resolver:I}),_=R.register,B=R.handleSubmit,$=R.setError,L=R.clearErrors,H=R.watch,K=R.formState.errors,M=(0,D.O)(K);return(0,h.useEffect)(function(){var e=H(function(){return L()});return function(){return e.unsubscribe()}},[H]),h.useEffect(function(){(0,f.isEmpty)(K)||g({description:"There were errors with your submission, please check the form and try again.",status:"error"})},(r=[K],t=h.useRef(r),n=h.useRef(0),w(r,t.current)||(t.current=r,n.current+=1),h.useMemo(function(){return t.current},[n.current]))),(0,E.BX)(E.HY,{children:[(0,E.tZ)(i.W2,{maxW:"lg",minH:{base:"85vh"},py:{base:"6",md:"12"},children:(0,E.BX)(i.Kq,{spacing:"8",children:[(0,E.tZ)(i.Kq,{spacing:"6",align:"center",children:(0,E.tZ)(i.Kq,{spacing:"3",textAlign:"center",children:(0,E.tZ)(i.X6,{size:(0,u.Sx)({base:"xs",md:"sm"}),children:y||"Create an account"})})}),(0,E.BX)(i.xu,{py:{base:"0",sm:"8"},px:{base:"4",sm:"10"},bg:(0,u.Sx)({base:"transparent",sm:"bg-surface"}),boxShadow:{base:"none",sm:(0,s.ff)("md","md-dark")},borderRadius:{base:"none",sm:"xl"},children:[(0,E.tZ)(O.Z,{errors:M}),(0,E.tZ)(b.RV,z(z({},R),{},{children:(0,E.tZ)("form",{className:"signin-form",onSubmit:B(function(e){if(e.password!==e.confirmPassword){$("password",{type:"manual",message:"Passwords do not match"});return}m?q({emailAddress:e.email,password:e.password,lastName:e.lastName,firstName:e.firstName}):S({emailAddress:e.email,password:e.password,lastName:e.lastName,firstName:e.firstName})}),children:(0,E.BX)(i.Kq,{spacing:"6",children:[(0,E.BX)(i.Kq,{spacing:"5",children:[!m&&(0,E.BX)(E.HY,{children:[(0,E.BX)(o.NI,{isRequired:!0,children:[(0,E.tZ)(o.lX,{htmlFor:"name",children:"First Name"}),(0,E.tZ)(c.II,z({id:"firstName",type:"text"},_("firstName")))]}),(0,E.BX)(o.NI,{isRequired:!0,children:[(0,E.tZ)(o.lX,{htmlFor:"name",children:"Last Name"}),(0,E.tZ)(c.II,z({id:"lastName",type:"text"},_("lastName")))]}),(0,E.BX)(o.NI,{isRequired:!0,children:[(0,E.tZ)(o.lX,{htmlFor:"email",children:"Email"}),(0,E.tZ)(c.II,z({id:"email",type:"email"},_("email")))]})]}),m&&(0,E.tZ)(E.HY,{children:(0,E.BX)(o.NI,{isRequired:!0,children:[(0,E.tZ)(o.lX,{htmlFor:"email",children:"Work Email"}),(0,E.tZ)(c.II,z({id:"email",type:"email"},_("email")))]})}),(0,E.tZ)(P.Z,{showHelp:!0}),(0,E.tZ)(P.Z,{fieldName:"confirmPassword",label:"Confirm Password"}),(0,E.tZ)(o.NI,{children:(0,E.tZ)(l.XZ,z(z({id:"terms"},_("terms")),{},{children:(0,E.BX)(i.xv,{fontSize:"xs",children:["I agree to the"," ",(0,E.tZ)(i.rU,{target:"_blank",as:p(),href:v.bh,children:"terms and conditions"})," ","and the"," ",(0,E.tZ)(i.rU,{target:"_blank",as:p(),href:v.C$,children:"privacy policy"})]})}))})]}),(0,E.tZ)(i.Kq,{spacing:"1",children:(0,E.tZ)(d.zx,{type:"submit",variant:"primary",children:"Create account"})})]})})})),(0,E.tZ)("br",{}),(0,E.BX)(i.Ug,{justify:"center",spacing:"2",mt:0,children:[(0,E.tZ)(i.xv,{fontSize:"xs",color:"muted",children:"Already have an account?"}),(0,E.tZ)(d.zx,{variant:"link",colorScheme:"blue",isLoading:C||k,size:"xs",onClick:function(){Z.push(v.H4)},children:"Log in"})]})]})]})}),(0,E.tZ)(i.iz,{})]})}},46037:function(e,r,t){t.d(r,{Z:function(){return h}});var n=t(59499),a=t(4730),i=t(39653),u=t(66682),s=t(645),o=t(17297),c=t(67294),l=t(87536),d=t(53854),f=t(35944),m=["fieldName","label","isRequired","showHelp"];function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function F(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var h=c.forwardRef(function(e,r){var t=e.fieldName,n=e.label,p=e.isRequired,h=void 0===p||p,b=e.showHelp,y=(0,a.Z)(e,m),g=(0,i.qY)(),w=g.isOpen,Z=g.onToggle,O=(0,l.Gc)().register,v=c.useRef(null),D=(0,i.qq)(v,r);return(0,f.BX)(u.NI,{isRequired:h,children:[(0,f.tZ)(u.lX,{htmlFor:"password",children:void 0===n?"Password":n}),(0,f.BX)(s.BZ,{children:[(0,f.tZ)(s.xH,{children:(0,f.tZ)(o.hU,{variant:"link","aria-label":w?"Mask password":"Reveal password",icon:w?(0,f.tZ)(d.MBb,{}):(0,f.tZ)(d.Rbo,{}),onClick:function(){Z(),v.current&&v.current.focus({preventScroll:!0})}})}),(0,f.tZ)(s.II,F(F({id:"password",ref:D,name:"password",type:w?"text":"password",autoComplete:"current-password",required:h},O(void 0===t?"password":t)),y))]}),void 0!==b&&b&&(0,f.tZ)(u.Q6,{fontSize:"xs",color:"gray.400",children:"A minimum of 8 characters must be used, with 1 uppercase, 1 lowercase, 1 number, and 1 special character."})]})});h.displayName="PasswordField"},40429:function(e,r,t){var n=t(33385),a=t(32039),i=t(96486),u=t(97883),s=t(35944);r.Z=function(e){var r=e.errors;return(0,i.isEmpty)(r)?null:(0,s.BX)(n.bZ,{status:"error",style:{borderRadius:10},mb:{base:4},children:[(0,s.tZ)(n.zM,{}),(0,s.tZ)(a.Kq,{children:r.map(function(e){return(0,s.tZ)(n.X,{fontSize:"xs",children:(0,u.fm)(e.replace(/([A-Z])/g," $1").trim().toLowerCase())})})})]})}},98099:function(e,r,t){t.d(r,{L:function(){return i},Wh:function(){return n}});var n=/^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,a=/\S+@\S+\.\S+/,i=function(e){return a.test(e)}},18502:function(e,r,t){t.d(r,{O:function(){return d},X:function(){return l}});var n=t(59499),a=t(50029),i=t(87794),u=t.n(i),s=t(67294);function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var l=function(e){var r;return(0,s.useCallback)((r=(0,a.Z)(u().mark(function r(t){var a;return u().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.validate(t,{abortEarly:!1});case 3:return a=r.sent,r.abrupt("return",{values:a,errors:{}});case 7:return r.prev=7,r.t0=r.catch(0),r.abrupt("return",{values:{},errors:r.t0.inner.reduce(function(e,r){var t;return c(c({},e),{},(0,n.Z)({},r.path,{type:null!==(t=r.type)&&void 0!==t?t:"validation",message:r.message}))},{})});case 10:case"end":return r.stop()}},r,null,[[0,7]])})),function(e){return r.apply(this,arguments)}),[e])},d=function(e){return(0,s.useMemo)(function(){return Object.values(e).map(function(e){return e.message})},[e])}},97883:function(e,r,t){t.d(r,{fm:function(){return u},h:function(){return a},pM:function(){return i}});var n=t(98099),a=function(e,r){return(null==e?void 0:e.length)>r?"".concat(e.substr(0,r),"..."):e},i=function(e){return e&&(null==e?void 0:e.match(n.Wh))},u=function(e){return e.charAt(0).toUpperCase()+e.slice(1)}}}]);