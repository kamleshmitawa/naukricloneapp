(this.webpackJsonpsquareboat=this.webpackJsonpsquareboat||[]).push([[0],{21:function(e,t,s){},30:function(e,t,s){},55:function(e,t,s){},61:function(e,t,s){},62:function(e,t,s){},63:function(e,t,s){},86:function(e,t,s){},87:function(e,t,s){"use strict";s.r(t);var c=s(1),r=s.n(c),a=s(22),n=s.n(a),i=s(17),o=s(8),l=s(10),d=s(9),j="naukricloneapp/",b="/naukricloneapp/home",p="/login",u="/signup",O="/forget-password",h="/reset",x="/logout",m="/jobs/posted",v="/job/post",g="USER_LOGIN",f="USER_SIGNUP",y="SAVE_USER_LOGIN",w="SAVE_USER_LOGIN_ERROR",E="SAVE_USER_SIGNUP",N="SAVE_USER_SIGNUP_ERROR",R="LOGIN_LOADER",S="SIGNUP_LOADER",k="FORGOT_PASSWORD",L="SAVE_FORGOT_PASSWORD",P="SAVE_FORGOT_PASSWORD_ERROR",C="RESET_PASSWORD",_="SAVE_RESET_PASSWORD",J="SAVE_RESET_PASSWORD_ERROR";function U(e){return!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)}var V=function(e,t){localStorage.setItem(e,t)},A=function(e){return localStorage.getItem(e)},F=function(){return localStorage.clear()},T=(s(55),s(0)),D=function(e){var t=e.title,s=e.onClickHandler;return Object(T.jsx)("div",{className:"btn_container",onClick:s,children:Object(T.jsx)("button",{type:"button",className:"common_btn",children:t})})},G=function(){var e,t,s=Object(c.useState)(!1),r=Object(l.a)(s,2),a=(r[0],r[1],Object(c.useState)(!1)),n=Object(l.a)(a,2),u=n[0],O=n[1],h=Object(c.useState)(!1),x=Object(l.a)(h,2),m=x[0],g=x[1],f=Object(d.c)((function(e){return e.login})).loginResponse,w=Object(o.f)(),E=Object(d.b)(),N=null===w||void 0===w||null===(e=w.location)||void 0===e?void 0:e.pathname;Object(c.useEffect)((function(){g(!!f)}),[f]);return console.log(f,"loginResponse"),Object(T.jsx)("header",{children:Object(T.jsxs)("div",{class:"header",children:[Object(T.jsxs)("div",{className:"logo",onClick:function(){return w.replace(b)},children:[Object(T.jsx)("span",{className:"logoName",children:"My"}),Object(T.jsx)("span",{className:"logoTitle",children:"Jobs"})]}),(N===j||N===b)&&Object(T.jsx)("div",{className:"loginBtn",children:Object(T.jsx)(i.b,{to:p,children:"Login/Signup"})}),m&&Object(T.jsxs)("div",{className:"profile",children:[Object(T.jsx)("div",{className:"jobPost",children:Object(T.jsx)(i.b,{to:v,children:"Post a job"})}),Object(T.jsx)("div",{className:"profileName",children:null===f||void 0===f||null===(t=f.name)||void 0===t?void 0:t.charAt(0)}),Object(T.jsx)("div",{className:"logoutBtn",children:Object(T.jsx)("ul",{children:Object(T.jsx)("li",{onClick:function(){O(!0),F(),w.push(b),E({type:y,payload:null}),setTimeout((function(){return O(!1)}),1e3)},children:" logout"})})})]}),u&&Object(T.jsxs)("div",{class:"successLogout",children:[Object(T.jsx)("em",{class:"close",onClick:function(){return O(!1)}}),Object(T.jsx)("label",{children:"Logout"}),Object(T.jsx)("span",{children:"You have successfully logged out."})]})]})})},I=function(){return Object(T.jsx)("div",{children:"Not found"})},B=(s(30),function(){return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("div",{class:"bannerSection",children:Object(T.jsx)("div",{class:"container",children:Object(T.jsxs)("div",{class:"row",children:[Object(T.jsxs)("div",{class:"col-lg-5",children:[Object(T.jsxs)("h1",{children:["Welcome to ",Object(T.jsx)("br",{})," My",Object(T.jsx)("span",{children:"Jobs"})]}),Object(T.jsx)("a",{href:p,class:"getStarted btn",children:"Get Started"})]}),Object(T.jsx)("div",{class:"col-lg-7",children:Object(T.jsx)("figure",{children:Object(T.jsx)("img",{src:"../../images/happycustomer.jpg",alt:"happy-customer",width:"622",height:"395"})})})]})})}),Object(T.jsxs)("div",{class:"container",children:[Object(T.jsxs)("div",{class:"whyUs",children:[Object(T.jsx)("h2",{children:"Why us"}),Object(T.jsxs)("div",{class:"row",children:[Object(T.jsx)("div",{class:"col-lg-4",children:Object(T.jsxs)("div",{class:"whyUsCard",children:[Object(T.jsxs)("div",{class:"heading",children:["Get more",Object(T.jsx)("br",{}),"visibility"]}),Object(T.jsx)("span",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."})]})}),Object(T.jsx)("div",{class:"col-lg-4",children:Object(T.jsxs)("div",{class:"whyUsCard",children:[Object(T.jsxs)("div",{class:"heading",children:["Organize your",Object(T.jsx)("br",{}),"candidates"]}),Object(T.jsx)("span",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."})]})}),Object(T.jsx)("div",{class:"col-lg-4",children:Object(T.jsxs)("div",{class:"whyUsCard",children:[Object(T.jsxs)("div",{class:"heading",children:["Verify their",Object(T.jsx)("br",{}),"abilities"]}),Object(T.jsx)("span",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."})]})})]})]}),Object(T.jsxs)("div",{class:"conpaniesTrust",children:[Object(T.jsx)("div",{class:"heading",children:"Companies Who Trust Us"}),Object(T.jsxs)("ul",{children:[Object(T.jsx)("li",{children:Object(T.jsx)("figure",{children:Object(T.jsx)("img",{src:"../../images/otherLogo.jpg",alt:"otherLogo"})})}),Object(T.jsx)("li",{children:Object(T.jsx)("figure",{children:Object(T.jsx)("img",{src:"assets/images/otherLogo.png",alt:"otherLogo"})})}),Object(T.jsx)("li",{children:Object(T.jsx)("figure",{children:Object(T.jsx)("img",{src:"assets/images/otherLogo.png",alt:"otherLogo"})})}),Object(T.jsx)("li",{children:Object(T.jsx)("figure",{children:Object(T.jsx)("img",{src:"assets/images/otherLogo.png",alt:"otherLogo"})})}),Object(T.jsx)("li",{children:Object(T.jsx)("figure",{children:Object(T.jsx)("img",{src:"assets/images/otherLogo.png",alt:"otherLogo"})})}),Object(T.jsx)("li",{children:Object(T.jsx)("figure",{children:Object(T.jsx)("img",{src:"assets/images/otherLogo.png",alt:"otherLogo"})})}),Object(T.jsx)("li",{children:Object(T.jsx)("figure",{children:Object(T.jsx)("img",{src:"assets/images/otherLogo.png",alt:"otherLogo"})})}),Object(T.jsx)("li",{children:Object(T.jsx)("figure",{children:Object(T.jsx)("img",{src:"assets/images/otherLogo.png",alt:"otherLogo"})})}),Object(T.jsx)("li",{children:Object(T.jsx)("figure",{children:Object(T.jsx)("img",{src:"assets/images/otherLogo.png",alt:"otherLogo"})})})]})]})]})]})}),z=s(16),H=s(3),q={url:"auth/login",type:"post"},W={url:"auth/register",type:"post"},M=function(e){return{url:"auth/resetpassword?email=".concat(e),type:"get"}},Y={url:"auth/resetpassword",type:"post"},X={url:"jobs",type:"post"},$={url:"recruiters/jobs",type:"get"},K=(s(21),function(){return Object(T.jsx)("div",{children:"loading....."})}),Q=function(){var e=Object(c.useState)({email:"",password:""}),t=Object(l.a)(e,2),s=t[0],r=t[1],a=Object(c.useState)(""),n=Object(l.a)(a,2),j=n[0],b=n[1],p=Object(d.c)((function(e){return e.login})),u=p.loginLoader,O=p.loginResponseErr,h=Object(d.b)(),x=Object(o.f)();Object(c.useEffect)((function(){return F()}),[]),Object(c.useEffect)((function(){b(O)}),[O]);var m=function(e){var t=e.target,c=t.name,a=t.value;b(""),r(Object(H.a)(Object(H.a)({},s),{},Object(z.a)({},c,a)))},v=s.email,f=void 0===v?"":v,y=s.password,w=void 0===y?"":y;return u?Object(T.jsx)(K,{}):Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("div",{className:"bannerSection"}),Object(T.jsxs)("div",{className:"loginSectn",children:[Object(T.jsx)("div",{className:"heading",children:"Login"}),Object(T.jsxs)("form",{children:[Object(T.jsxs)("div",{className:j?"form-group error":"form-group",children:[Object(T.jsx)("label",{htmlFor:"email",children:"Email Address"}),Object(T.jsx)("input",{type:"email",className:"form-control",onChange:m,value:f,autoComplete:"off",required:!0,name:"email",id:"enail",placeholder:"Enter your email"})]}),Object(T.jsxs)("div",{className:j?"form-group error":"form-group",children:[Object(T.jsxs)("label",{htmlFor:"password",className:"passForget",children:[Object(T.jsx)("span",{children:"Password"}),Object(T.jsx)("span",{className:"forgetPassword",children:Object(T.jsx)(i.b,{to:"/forget-password",children:"Forgot your password?"})})]}),Object(T.jsx)("input",{id:"password",type:"password",name:"password",placeholder:"Enter you password",onChange:m,value:w,className:"form-control",required:!0}),j?Object(T.jsx)("div",{className:"errorMsg",children:j}):""]}),Object(T.jsx)("div",{className:"row login_btn",children:Object(T.jsx)(D,{title:"Login",onClickHandler:function(){var e=function(e){var t={isValid:!0,error:""},s=e.email,c=void 0===s?"":s,r=e.password,a=void 0===r?"":r;return U(c)?a.length<8&&(t.error="password length at-least should be 8",t.isValid=!1):(t.error="Please enter valid email!",t.isValid=!1),t}(s);(null===e||void 0===e?void 0:e.isValid)?h({type:g,payload:Object(H.a)(Object(H.a)({},q),{},{data:s,history:x})}):b(null===e||void 0===e?void 0:e.error)}})}),Object(T.jsxs)("p",{children:["New to MyJobs?",Object(T.jsx)("span",{children:Object(T.jsx)(i.b,{to:"/signup",children:" Create an account"})})]})]})]})]})},Z=function(){var e=Object(c.useState)({email:"",userRole:0,password:"",confirmPassword:"",name:"",skills:""}),t=Object(l.a)(e,2),s=t[0],r=t[1],a=Object(c.useState)([]),n=Object(l.a)(a,2),j=n[0],b=n[1],u=Object(d.c)((function(e){return e.login})),O=u.signUpLoader,h=u.signupResponseErr,x=Object(d.b)(),m=Object(o.f)();Object(c.useEffect)((function(){return b(h)}),[h]);var v=function(e){var t=e.target,c=t.name,a=t.value;b([]),r(Object(H.a)(Object(H.a)({},s),{},Object(z.a)({},c,a)))},g=s.userRole,y=s.name,w=void 0===y?"":y,E=s.email,N=void 0===E?"":E,R=s.password,S=void 0===R?"":R,k=s.confirmPassword,L=void 0===k?"":k,P=s.skills,C=void 0===P?"":P;return O?Object(T.jsx)(K,{}):Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("div",{className:"bannerSection"}),Object(T.jsxs)("div",{className:"loginSectn forgotSectn",children:[Object(T.jsx)("div",{className:"heading",children:"Signup"}),Object(T.jsxs)("form",{children:[Object(T.jsx)("p",{children:"I\u2019m a*"}),Object(T.jsxs)("div",{className:"row signup_roles",children:[Object(T.jsx)("div",{className:0===g?"role1":"role1 notactive",children:Object(T.jsx)(D,{title:"Recruiter",onClickHandler:function(){return r(Object(H.a)(Object(H.a)({},s),{},{userRole:0}))}})}),Object(T.jsx)("div",{className:1===g?"role2":"role2 notactive",children:Object(T.jsx)(D,{title:"Candidate",onClickHandler:function(){return r(Object(H.a)(Object(H.a)({},s),{},{userRole:1}))}})})]}),Object(T.jsxs)("div",{className:"form-group",children:[Object(T.jsx)("label",{for:"name",children:"Full Name*"}),Object(T.jsx)("input",{name:"name",type:"text",placeholder:"Enter your full name",className:"form-control",id:"name",value:w,onChange:v})]}),Object(T.jsxs)("div",{className:"form-group",children:[Object(T.jsx)("label",{for:"email",children:"Email Address*"}),Object(T.jsx)("input",{type:"email",placeholder:"Enter your email",className:"form-control",id:"email",value:N,name:"email",onChange:v})]}),Object(T.jsxs)("div",{className:"form-group",children:[Object(T.jsx)("label",{for:"password",children:"Create Password*"}),Object(T.jsx)("input",{type:"password",placeholder:"Enter your password",className:"form-control",id:"password",value:S,name:"password",onChange:v})]}),Object(T.jsxs)("div",{className:"form-group",children:[Object(T.jsx)("label",{for:"confirmPassword",children:"Confirm Password*"}),Object(T.jsx)("input",{type:"password",placeholder:"Enter your password",className:"form-control",id:"confirmPassword",value:L,name:"confirmPassword",onChange:v})]}),Object(T.jsxs)("div",{className:"form-group",children:[Object(T.jsx)("label",{for:"skills",children:"Skills"}),Object(T.jsx)("input",{type:"text",placeholder:"Enter comma separated skills",className:"form-control",id:"skilss",value:C,name:"skills",onChange:v})]}),(null===j||void 0===j?void 0:j.length)?Object(T.jsx)("div",{className:"error",children:j.map((function(e){return e.name}))}):"",Object(T.jsx)("div",{className:"row login_btn",children:Object(T.jsx)(D,{title:"Signup",onClickHandler:function(){var e=function(e){var t={isValid:!0,error:""},s=e.name,c=void 0===s?"":s,r=e.email,a=void 0===r?"":r,n=e.password,i=void 0===n?"":n,o=e.confirmPassword,l=void 0===o?"":o;return""==c?(t.error="Please enter valid full name",t.isValid=!1):U(a)?i.length<8?(t.error="password length at-least should be 8",t.isValid=!1):l!==i&&(t.error="confirm password should be same as create password",t.isValid=!1):(t.error="Please enter valid email!",t.isValid=!1),t}(s);(null===e||void 0===e?void 0:e.isValid)?x({type:f,payload:Object(H.a)(Object(H.a)({},W),{},{data:s,history:m})}):b([{name:null===e||void 0===e?void 0:e.error}])}})}),Object(T.jsxs)("div",{children:["Have a account?",Object(T.jsx)("span",{children:Object(T.jsx)(i.b,{to:p,children:" Login"})})]})]})]})]})},ee=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),s=t[0],r=t[1],a=Object(c.useState)(""),n=Object(l.a)(a,2),i=n[0],j=n[1],b=Object(d.c)((function(e){return e.login})).forgotResponseErr,p=Object(d.b)(),u=Object(o.f)();Object(c.useEffect)((function(){j(b)}),[b]);return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("div",{className:"bannerSection"}),Object(T.jsxs)("div",{className:"loginSectn forgotSectn",children:[Object(T.jsx)("div",{className:"heading",children:"Forgot your password?"}),Object(T.jsxs)("form",{children:[Object(T.jsx)("p",{children:"Enter the email associated with your account and we\u2019ll send you instructions to reset your password."}),Object(T.jsxs)("div",{className:"form-group",children:[Object(T.jsx)("label",{for:"email",children:"Email Address"}),Object(T.jsx)("input",{type:"email",className:"form-control",id:"email",placeholder:"enter your email",name:"email",value:s,onChange:function(e){r(e.target.value),j("")}}),i?Object(T.jsx)("div",{className:"error",children:i}):""]}),Object(T.jsx)("div",{className:"row login_btn",children:Object(T.jsx)(D,{title:"Submit",onClickHandler:function(){var e=function(){var e={isValid:!0,error:""};return U(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")||(e.error="Please enter valid email!",e.isValid=!1),e}(s);(null===e||void 0===e?void 0:e.isValid)?p({type:k,payload:Object(H.a)(Object(H.a)({},M(s)),{},{history:u})}):j(null===e||void 0===e?void 0:e.error)}})})]})]})]})},te=function(){var e=Object(c.useState)({password:"",confirmPassword:""}),t=Object(l.a)(e,2),s=t[0],r=t[1],a=Object(c.useState)(""),n=Object(l.a)(a,2),i=n[0],j=n[1],b=Object(d.c)((function(e){return e.login})),p=b.loginResponse,u=b.resetResponseErr,O=(b.resetResponse,Object(d.b)()),h=Object(o.f)();Object(c.useEffect)((function(){j(u)}),[u]);var x=function(e){var t=e.target,c=t.name,a=t.value;j([]),r(Object(H.a)(Object(H.a)({},s),{},Object(z.a)({},c,a)))},m=s.password,v=void 0===m?"":m,g=s.confirmPassword,f=void 0===g?"":g;return console.log(p,"loginResponseloginResponse"),Object(T.jsx)("div",{className:"main-container",children:Object(T.jsx)("div",{className:"row forgot_container",children:Object(T.jsxs)("form",{children:[Object(T.jsx)("h2",{children:"Reset Your Password"}),Object(T.jsx)("p",{children:"Enter your new password below."}),Object(T.jsxs)("div",{className:"form-group",children:[Object(T.jsx)("label",{for:"password",children:"New password"}),Object(T.jsx)("input",{className:"form-control",type:"password",placeholder:"Enter your password",id:"password",value:v,name:"password",onChange:x})]}),Object(T.jsxs)("div",{className:"form-group",children:[Object(T.jsx)("label",{for:"confirmPassword",children:"Confirm new password"}),Object(T.jsx)("input",{type:"password",className:"form-control",placeholder:"Confirm your password",id:"confirmPassword",value:f,name:"confirmPassword",onChange:x}),i?Object(T.jsx)("div",{className:"error",children:i}):""]}),Object(T.jsx)(D,{title:"Reset",onClickHandler:function(){var e=function(e){var t={isValid:!0,error:""},s=e.password,c=void 0===s?"":s,r=e.confirmPassword,a=void 0===r?"":r;return c.length<8?(t.error="password length at-least should be 8",t.isValid=!1):c!==a&&(t.error="confirm password should be same as create password",t.isValid=!1),t}(s);(null===e||void 0===e?void 0:e.isValid)?O({type:C,payload:Object(H.a)(Object(H.a)({},Y),{},{data:s,history:h})}):j(null===e||void 0===e?void 0:e.error)}})]})})})},se="POST_JOB_LOADER",ce="POST_JOB",re="SAVE_POST_JOB",ae="SAVE_POST_JOB_ERROR",ne="POSTED_JOB_LOADER",ie="GET_POSTED_JOB",oe="SAVE_POSTED_JOB",le=(s(61),function(){return Object(T.jsx)("div",{class:"applicantsJobPopUp active",children:Object(T.jsxs)("div",{class:"applicantsJob",children:[Object(T.jsxs)("div",{class:"heading",children:[Object(T.jsx)("div",{children:"Applicants for this job"}),Object(T.jsx)("span",{class:"close"})]}),Object(T.jsx)("div",{class:"totalApplicants",children:"Total 35 applications"}),Object(T.jsxs)("div",{class:"allApplications",children:[Object(T.jsxs)("div",{class:"application",children:[Object(T.jsxs)("div",{class:"applicantName",children:[Object(T.jsx)("span",{class:"letter",children:"E"}),Object(T.jsx)("label",{for:"",children:"Eliza Lucas"}),Object(T.jsx)("div",{class:"email",children:"abc123@email.com"})]}),Object(T.jsx)("div",{class:"",children:"Skills"}),Object(T.jsx)("div",{class:"skills",children:"Coding, designing, graphics, website, app ui"})]}),Object(T.jsxs)("div",{class:"application",children:[Object(T.jsxs)("div",{class:"applicantName",children:[Object(T.jsx)("span",{class:"letter",children:"E"}),Object(T.jsx)("label",{for:"",children:"Eliza Lucas"}),Object(T.jsx)("div",{class:"email",children:"abc123@email.com"})]}),Object(T.jsx)("div",{class:"",children:"Skills"}),Object(T.jsx)("div",{class:"skills",children:"Coding, designing, graphics, website, app ui"})]}),Object(T.jsxs)("div",{class:"application",children:[Object(T.jsxs)("div",{class:"applicantName",children:[Object(T.jsx)("span",{class:"letter",children:"E"}),Object(T.jsx)("label",{for:"",children:"Eliza Lucas"}),Object(T.jsx)("div",{class:"email",children:"abc123@email.com"})]}),Object(T.jsx)("div",{class:"",children:"Skills"}),Object(T.jsx)("div",{class:"skills",children:"Coding, designing, graphics, website, app ui"})]}),Object(T.jsxs)("div",{class:"application",children:[Object(T.jsxs)("div",{class:"applicantName",children:[Object(T.jsx)("span",{class:"letter",children:"E"}),Object(T.jsx)("label",{for:"",children:"Eliza Lucas"}),Object(T.jsx)("div",{class:"email",children:"abc123@email.com"})]}),Object(T.jsx)("div",{class:"",children:"Skills"}),Object(T.jsx)("div",{class:"skills",children:"Coding, designing, graphics, website, app ui"})]}),Object(T.jsxs)("div",{class:"application",children:[Object(T.jsxs)("div",{class:"applicantName",children:[Object(T.jsx)("span",{class:"letter",children:"E"}),Object(T.jsx)("label",{for:"",children:"Eliza Lucas"}),Object(T.jsx)("div",{class:"email",children:"abc123@email.com"})]}),Object(T.jsx)("div",{class:"",children:"Skills"}),Object(T.jsx)("div",{class:"skills",children:"Coding, designing, graphics, website, app ui"})]}),Object(T.jsxs)("div",{class:"application",children:[Object(T.jsxs)("div",{class:"applicantName",children:[Object(T.jsx)("span",{class:"letter",children:"E"}),Object(T.jsx)("label",{for:"",children:"Eliza Lucas"}),Object(T.jsx)("div",{class:"email",children:"abc123@email.com"})]}),Object(T.jsx)("div",{class:"",children:"Skills"}),Object(T.jsx)("div",{class:"skills",children:"Coding, designing, graphics, website, app ui"})]}),Object(T.jsxs)("div",{class:"application",children:[Object(T.jsxs)("div",{class:"applicantName",children:[Object(T.jsx)("span",{class:"letter",children:"E"}),Object(T.jsx)("label",{for:"",children:"Eliza Lucas"}),Object(T.jsx)("div",{class:"email",children:"abc123@email.com"})]}),Object(T.jsx)("div",{class:"",children:"Skills"}),Object(T.jsx)("div",{class:"skills",children:"Coding, designing, graphics, website, app ui"})]}),Object(T.jsxs)("div",{class:"application",children:[Object(T.jsxs)("div",{class:"applicantName",children:[Object(T.jsx)("span",{class:"letter",children:"E"}),Object(T.jsx)("label",{for:"",children:"Eliza Lucas"}),Object(T.jsx)("div",{class:"email",children:"abc123@email.com"})]}),Object(T.jsx)("div",{class:"",children:"Skills"}),Object(T.jsx)("div",{class:"skills",children:"Coding, designing, graphics, website, app ui"})]})]}),Object(T.jsx)("div",{class:"noApplication",children:Object(T.jsxs)("div",{children:[Object(T.jsx)("img",{src:"#",alt:"noaplicantion"}),Object(T.jsx)("p",{children:"No applications available!"})]})})]})})}),de=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),s=t[0],r=t[1],a=Object(d.c)((function(e){return e.jobs})),n=a.postedJobLoader,i=a.postedJobResponse,j=Object(d.b)(),b=Object(o.f)();return Object(c.useEffect)((function(){j({type:ie,payload:Object(H.a)(Object(H.a)({},$),{},{history:b})})}),[]),Object(c.useEffect)((function(){r(i)}),[i]),console.log(s,"jobsListjobsListjobsList",i),n?Object(T.jsx)(K,{}):Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)("div",{class:"container job-container",children:[Object(T.jsxs)("div",{class:"row",children:[Object(T.jsx)("div",{class:"col-lg-5",children:Object(T.jsx)("h3",{children:"Jobs posted by you"})}),Object(T.jsx)("div",{class:"row postedJobs",children:Object(T.jsxs)("div",{class:"col-3 job",children:[Object(T.jsx)("div",{class:"job-title",children:"UI UX Designer"}),Object(T.jsx)("div",{class:"job-desc",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\u2026"}),Object(T.jsxs)("div",{className:"row job_bottom",children:[Object(T.jsx)("div",{class:"location",children:"Bengaluru"}),Object(T.jsx)("div",{className:"view-applicant",children:Object(T.jsx)("button",{type:"button",children:"View applications"})})]})]})})]}),Object(T.jsx)(le,{}),Object(T.jsxs)("div",{className:"no-jobs",children:[Object(T.jsx)("p",{children:"Your posted jobs will show here!"}),Object(T.jsx)("div",{className:"row post-btn",children:Object(T.jsx)(D,{title:"Post a Job",onClickHandler:function(){return b.push(v)}})})]})]})})},je=(s(62),s(63),function(){var e=Object(c.useState)({title:"",description:"",location:""}),t=Object(l.a)(e,2),s=t[0],r=t[1],a=Object(c.useState)(""),n=Object(l.a)(a,2),i=n[0],j=n[1],b=Object(c.useState)(""),p=Object(l.a)(b,2),u=p[0],O=p[1],h=Object(d.c)((function(e){return e.jobs})),x=h.postJobLoader,m=h.postJobResponseErr,v=Object(d.b)(),g=Object(o.f)();Object(c.useEffect)((function(){m&&O(m),O("")}),[m]);var f=function(e){var t=e.target,c=t.name,a=t.value;j(""),r(Object(H.a)(Object(H.a)({},s),{},Object(z.a)({},c,a)))},y=s.title,w=void 0===y?"":y,E=s.description,N=void 0===E?"":E,R=s.location,S=void 0===R?"":R;return x?Object(T.jsx)(K,{}):Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("div",{className:"bannerSection"}),Object(T.jsxs)("div",{className:"loginSectn",children:[Object(T.jsx)("div",{className:"heading",children:"Post a Job"}),Object(T.jsxs)("form",{children:[Object(T.jsxs)("div",{className:"form-group",children:[Object(T.jsx)("label",{htmlFor:"title",children:"Job Title*"}),Object(T.jsx)("input",{type:"title",className:i?"form-control errorinput":"form-control",onChange:f,value:w,autoComplete:"off",required:!0,name:"title",id:"title",placeholder:"Enter job title"})]}),Object(T.jsxs)("div",{className:"form-group",children:[Object(T.jsx)("label",{htmlFor:"description",children:"Description*"}),Object(T.jsx)("input",{type:"textarea",className:i?"form-control errorinput":"form-control",onChange:f,value:N,autoComplete:"off",required:!0,name:"description",id:"description",placeholder:"Enter job description"})]}),Object(T.jsxs)("div",{className:"form-group",children:[Object(T.jsx)("label",{htmlFor:"location",children:"Location*"}),Object(T.jsx)("input",{type:"location",className:i?"form-control errorinput":"form-control",onChange:f,value:S,autoComplete:"off",required:!0,name:"location",id:"location",placeholder:"Enter location"})]}),i?Object(T.jsx)("div",{className:"error",children:i}):"",u?Object(T.jsx)("div",{className:"error",children:u}):"",Object(T.jsx)("div",{className:"text-center",children:Object(T.jsx)(D,{title:"Post",onClickHandler:function(){var e=function(e){var t=e.title,s=void 0===t?"":t,c=e.description,r=void 0===c?"":c,a=e.location,n={isValid:!0,error:""};return(""===s||""===r||""===(void 0===a?"":a))&&(n.error="All fields are mandatory.",n.isValid=!1),n}(s);(null===e||void 0===e?void 0:e.isValid)?v({type:ce,payload:Object(H.a)(Object(H.a)({},X),{},{data:s,history:g})}):j(null===e||void 0===e?void 0:e.error)}})})]})]})]})}),be=function(){return Object(T.jsx)("div",{className:"App",children:Object(T.jsx)(i.a,{history:Object(o.f)(),children:Object(T.jsxs)("div",{className:"main-container",children:[Object(T.jsx)(G,{}),Object(T.jsxs)(o.c,{children:[Object(T.jsx)(o.a,{exact:!0,component:B,path:j}),Object(T.jsx)(o.a,{exact:!0,component:B,path:b}),Object(T.jsx)(o.a,{exact:!0,component:Q,path:p}),Object(T.jsx)(o.a,{exact:!0,component:Z,path:u}),Object(T.jsx)(o.a,{exact:!0,component:ee,path:O}),Object(T.jsx)(o.a,{exact:!0,component:te,path:h}),Object(T.jsx)(o.a,{exact:!0,component:je,path:v}),Object(T.jsx)(o.a,{exact:!0,component:de,path:m}),Object(T.jsx)(o.a,{path:x,component:Q}),Object(T.jsx)(o.a,{component:I})]})]})})})},pe=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,88)).then((function(t){var s=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,n=t.getTTFB;s(e),c(e),r(e),a(e),n(e)}))},ue=s(41),Oe=s(15),he=s(45),xe=s(29),me=s(42),ve=s.n(me),ge={postJobLoader:!1,postJobResponse:null,postJobResponseErr:"",postedJobLoader:!1,postedJobResponse:null},fe={loginLoader:!1,loginResponse:null,loginResponseErr:"",signUpLoader:!1,signUpResponse:null,signupResponseErr:"",forgotResponse:null,forgotResponseErr:"",resetResponse:null,resetResponseErr:""},ye=Object(Oe.b)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0,s=t.type,c=t.payload;switch(s){case y:return Object(H.a)(Object(H.a)({},e),{},{loginResponse:c,loginResponseErr:"",loginLoader:!1});case w:return Object(H.a)(Object(H.a)({},e),{},{loginResponseErr:c,loginResponse:null,loginLoader:!1});case R:return Object(H.a)(Object(H.a)({},e),{},{loginLoader:c});case E:return Object(H.a)(Object(H.a)({},e),{},{signUpResponse:c,signupResponseErr:"",signUpLoader:!1});case N:return Object(H.a)(Object(H.a)({},e),{},{signupResponseErr:c,signUpResponse:null,signUpLoader:!1});case S:return Object(H.a)(Object(H.a)({},e),{},{signUpLoader:c});case L:return Object(H.a)(Object(H.a)({},e),{},{forgotResponse:c,forgotResponseErr:""});case P:return Object(H.a)(Object(H.a)({},e),{},{forgotResponseErr:c,forgotResponse:null});case _:return Object(H.a)(Object(H.a)({},e),{},{resetResponse:c,resetResponseErr:""});case J:return Object(H.a)(Object(H.a)({},e),{},{resetResponseErr:c,resetResponse:null});default:return Object(H.a)({},e)}},jobs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0,s=t.type,c=t.payload;switch(s){case se:return Object(H.a)(Object(H.a)({},e),{},{postJobLoader:c});case re:return Object(H.a)(Object(H.a)({},e),{},{postJobResponse:c,postJobResponseErr:"",postJobLoader:!1});case ae:return Object(H.a)(Object(H.a)({},e),{},{postJobResponseErr:c,postJobResponse:null,postJobLoader:!1});case ne:return Object(H.a)(Object(H.a)({},e),{},{postedJobLoader:c});case oe:return Object(H.a)(Object(H.a)({},e),{},{postedJobResponse:c,postedJobLoader:!1});default:return Object(H.a)({},e)}}}),we=s(7),Ee=s.n(we),Ne=s(5),Re=s(43),Se=s(44),ke=s.n(Se).a.create({baseURL:"https://jobs-api.squareboat.info/api/v1/"});ke.interceptors.response.use((function(e){return e.data}),(function(e){if(e.response){var t,s,c;if(401===e.response.status)console.log(null===e||void 0===e||null===(s=e.response)||void 0===s||null===(c=s.data)||void 0===c?void 0:c.message);return Promise.reject(null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.data)}}));var Le={headers:{"content-type":"application/json",authorization:"Bearer ".concat(A("token"))}},Pe=function(){var e=Object(Re.a)(Ee.a.mark((function e(t,s,c){var r,a,n,i=arguments;return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=i.length>3&&void 0!==i[3]?i[3]:void 0,e.prev=1,n={},console.log({url:t,type:s,token:A("token"),config:Le}),!r){e.next=10;break}return e.next=7,ke[s](t,r,Le);case 7:n=e.sent,e.next=13;break;case 10:return e.next=12,ke.get(t,Le);case 12:n=e.sent;case 13:return console.log({response:n}),e.abrupt("return",null===(a=n)||void 0===a?void 0:a.data);case 17:return e.prev=17,e.t0=e.catch(1),console.log(e.t0,"axiosRequesterrorerror"),e.t0.code,e.abrupt("return",Promise.reject(e.t0));case 22:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t,s,c){return e.apply(this,arguments)}}(),Ce=Ee.a.mark(Ve),_e=Ee.a.mark(Ae),Je=Ee.a.mark(Fe),Ue=Ee.a.mark(Te);function Ve(e){var t,s,c,r,a,n;return Ee.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,s=t.url,c=t.type,r=t.data,a=t.history,i.next=3,Object(Ne.c)({type:se,payload:!0});case 3:return i.prev=3,i.next=6,Object(Ne.b)((function(){return Pe(s,c,a,r)}));case 6:if(!(n=i.sent)){i.next=11;break}return i.next=10,Object(Ne.c)({type:re,payload:n});case 10:a.push(m);case 11:i.next=19;break;case 13:return i.prev=13,i.t0=i.catch(3),i.next=17,Object(Ne.c)({type:ae,payload:i.t0.message});case 17:return i.next=19,Object(Ne.c)({type:se,payload:!1});case 19:case"end":return i.stop()}}),Ce,null,[[3,13]])}function Ae(){return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ne.d)(ce,Ve);case 2:case"end":return e.stop()}}),_e)}function Fe(e){var t,s,c,r,a;return Ee.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,s=t.url,c=t.type,r=t.history,n.next=3,Object(Ne.c)({type:ne,payload:!0});case 3:return n.prev=3,n.next=6,Object(Ne.b)((function(){return Pe(s,c,r)}));case 6:if(!(a=n.sent)){n.next=11;break}return n.next=10,Object(Ne.c)({type:oe,payload:a});case 10:r.push(m);case 11:n.next=19;break;case 13:return n.prev=13,n.t0=n.catch(3),n.next=17,Object(Ne.c)({type:oe,payload:[]});case 17:return n.next=19,Object(Ne.c)({type:ne,payload:!1});case 19:case"end":return n.stop()}}),Je,null,[[3,13]])}function Te(){return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ne.d)(ie,Fe);case 2:case"end":return e.stop()}}),Ue)}var De={postJob:Ae(),getPostedJob:Te()},Ge=Ee.a.mark(Ye),Ie=Ee.a.mark(Xe),Be=Ee.a.mark($e),ze=Ee.a.mark(Ke),He=Ee.a.mark(Qe),qe=Ee.a.mark(Ze),We=Ee.a.mark(et),Me=Ee.a.mark(tt);function Ye(e){var t,s,c,r,a,n;return Ee.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,s=t.url,c=t.type,r=t.data,a=t.history,i.next=3,Object(Ne.c)({type:R,payload:!0});case 3:return i.prev=3,i.next=6,Object(Ne.b)((function(){return Pe(s,c,a,r)}));case 6:if(!(n=i.sent)){i.next=12;break}return V("token",null===n||void 0===n?void 0:n.token),i.next=11,Object(Ne.c)({type:y,payload:n});case 11:a.push(m);case 12:i.next=21;break;case 14:return i.prev=14,i.t0=i.catch(3),null===a||void 0===a||a.push(p),i.next=19,Object(Ne.c)({type:w,payload:i.t0.message});case 19:return i.next=21,Object(Ne.c)({type:R,payload:!1});case 21:case"end":return i.stop()}}),Ge,null,[[3,14]])}function Xe(){return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ne.d)(g,Ye);case 2:case"end":return e.stop()}}),Ie)}function $e(e){var t,s,c,r,a,n;return Ee.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,s=t.url,c=t.type,r=t.data,a=t.history,i.next=3,Object(Ne.c)({type:S,payload:!0});case 3:return i.prev=3,i.next=6,Object(Ne.b)((function(){return Pe(s,c,a,r)}));case 6:if(!(n=i.sent)){i.next=11;break}return i.next=10,Object(Ne.c)({type:E,payload:null===n||void 0===n?void 0:n.body});case 10:a.push(p);case 11:i.next=20;break;case 13:return i.prev=13,i.t0=i.catch(3),null===a||void 0===a||a.push(u),i.next=18,Object(Ne.c)({type:N,payload:i.t0.errors});case 18:return i.next=20,Object(Ne.c)({type:S,payload:!1});case 20:case"end":return i.stop()}}),Be,null,[[3,13]])}function Ke(){return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ne.d)(f,$e);case 2:case"end":return e.stop()}}),ze)}function Qe(e){var t,s,c,r,a;return Ee.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,s=t.url,c=t.type,r=t.history,n.prev=1,n.next=4,Object(Ne.b)((function(){return Pe(s,c,r)}));case 4:if(!(a=n.sent)){n.next=10;break}return(null===a||void 0===a?void 0:a.token)&&V("token",null===a||void 0===a?void 0:a.token),n.next=9,Object(Ne.c)({type:L,payload:a});case 9:r.push(p);case 10:n.next=23;break;case 12:if(n.prev=12,n.t0=n.catch(1),422!==n.t0.code){n.next=20;break}return r.push(p),n.next=18,Object(Ne.c)({type:w,payload:n.t0.message});case 18:n.next=23;break;case 20:return n.next=22,Object(Ne.c)({type:P,payload:n.t0.message});case 22:null===r||void 0===r||r.push(O);case 23:case"end":return n.stop()}}),He,null,[[1,12]])}function Ze(){return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ne.d)(k,Qe);case 2:case"end":return e.stop()}}),qe)}function et(e){var t,s,c,r,a,n;return Ee.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,s=t.url,c=t.type,r=t.history,a=t.data,i.prev=1,i.next=4,Object(Ne.b)((function(){return Pe(s,c,r,Object(H.a)(Object(H.a)({},a),{},{token:A("token")}))}));case 4:if(!(n=i.sent)){i.next=9;break}return i.next=8,Object(Ne.c)({type:_,payload:n});case 8:r.push(p);case 9:i.next=16;break;case 11:return i.prev=11,i.t0=i.catch(1),i.next=15,Object(Ne.c)({type:J,payload:i.t0.message});case 15:null===r||void 0===r||r.push(h);case 16:case"end":return i.stop()}}),We,null,[[1,11]])}function tt(){return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ne.d)(C,et);case 2:case"end":return e.stop()}}),Me)}var st={loginUser:Xe(),signUpUser:Ke(),forgotPwd:Ze(),resetPwd:tt()},ct=Ee.a.mark(rt);function rt(){return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ne.a)([st.loginUser,st.signUpUser,st.forgotPwd,st.resetPwd,De.postJob,De.getPostedJob]);case 2:case"end":return e.stop()}}),ct)}var at={key:"root",storage:ve.a},nt=Object(he.a)(),it=Object(xe.a)(at,ye),ot=Object(Oe.d)(it,Object(Oe.a)(nt));nt.run(rt);var lt=Object(xe.b)(ot),dt=ot;s(86);n.a.render(Object(T.jsx)(r.a.StrictMode,{children:Object(T.jsx)(d.a,{store:dt,children:Object(T.jsx)(ue.a,{loading:null,persistor:lt,children:Object(T.jsx)(be,{})})})}),document.getElementById("root")),pe()}},[[87,1,2]]]);
//# sourceMappingURL=main.e5993b87.chunk.js.map