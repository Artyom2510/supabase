(this.webpackJsonpsupabase=this.webpackJsonpsupabase||[]).push([[0],{16:function(e,t,a){e.exports={contact:"Contact_contact__3Q7NQ",contact__wrap:"Contact_contact__wrap__27vcF",contact__btnWrap:"Contact_contact__btnWrap__6Q0v7",contact__btn:"Contact_contact__btn__3AdwK",wrap__fullName:"Contact_wrap__fullName__2kpDn",wrap__email:"Contact_wrap__email__2RIZm"}},17:function(e,t,a){e.exports={contacts:"Contacts_contacts__2njFw",contacts__title:"Contacts_contacts__title__NpmFw",contacts__new:"Contacts_contacts__new__CSxcA",contacts__search:"Contacts_contacts__search__2vqTb",contacts__desc:"Contacts_contacts__desc__3XB9M",contactsList:"Contacts_contactsList__3sio5",contactsList__item:"Contacts_contactsList__item__2hGt_"}},197:function(e,t,a){},198:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),n=a(25),r=a.n(n),i=a(4),o=a(11),l=a(15),d=a(87);const _=["id"],b=String("https://ydoqnhdxjtfgdarjtprg.supabase.co"),m=String("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlkb3FuaGR4anRmZ2Rhcmp0cHJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDcwNzg5MTMsImV4cCI6MTk2MjY1NDkxM30.LUsRRZWNfSv44OivMdP4lToB4LHXNi9qApH9FLtcAwA");const j=new class{constructor(){this.supabase=void 0,this.supabase=Object(d.a)(b,m)}getUserCred(){return this.supabase.auth.user()}async singIn(e,t){const{user:a,error:s}=await this.supabase.auth.signIn({password:e,email:t});if(s)throw new Error(s.message);if(!a)throw new Error("user not found");return a}async signUp(e){let{firstName:t,lastName:a,password:s,email:c}=e;const{user:n,error:r}=await this.supabase.auth.signUp({password:s,email:c},{data:{firstName:t,lastName:a}});if(r)throw new Error(r.message);if(!n)throw new Error("user not found");return n}async logOut(){return this.supabase.auth.signOut()}async getContactList(e){const{data:t,error:a}=await this.supabase.from("contact").select("*").match({user_id:e});return t||[]}async createContact(e){const{data:t,error:a}=await this.supabase.from("contact").insert(e,{returning:"representation"});return null===t||void 0===t?void 0:t[0]}async updateContact(e){const{id:t}=e,a=Object(l.a)(e,_),{data:s,error:c}=await this.supabase.from("contact").update(a,{returning:"representation"}).match({id:t});return null===s||void 0===s?void 0:s[0]}async deleteContact(e){const{data:t,error:a}=await this.supabase.from("contact").delete().match({id:e});return null===t||void 0===t?void 0:t[0]}},u=e=>{const t=e;return t.message?t.message:"unknown error"},p=Object(o.b)({name:"formSignIn",initialState:{isSending:!1,isSended:!1,error:null},reducers:{sendDataStart:e=>{e.isSending=!0,e.isSended=!1},sendDataSuccess:e=>{e.isSending=!1,e.isSended=!0},sendDataFailure:(e,t)=>{let{payload:a}=t;e.error=a,e.isSending=!1,e.isSended=!0}}}),{sendDataStart:h,sendDataSuccess:O,sendDataFailure:f}=p.actions,g=e=>e.formSignIn;var x=p.reducer;const N=Object(o.b)({name:"formSignUp",initialState:{isSending:!1,isSended:!1,error:null},reducers:{sendDataStart:e=>{e.isSending=!0,e.isSended=!1},sendDataSuccess:e=>{e.isSending=!1,e.isSended=!0},sendDataFailure:(e,t)=>{let{payload:a}=t;e.error=a,e.isSending=!1,e.isSended=!0}}}),{sendDataStart:v,sendDataSuccess:S,sendDataFailure:w}=N.actions,C=e=>e.formSignUp;var A=N.reducer;const L=Object(o.b)({name:"contacts",initialState:{contacts:[],isLoading:!1,isLoaded:!1,error:""},reducers:{getDataStart:e=>{e.isLoading=!0},getDataSuccess:(e,t)=>{let{payload:a}=t;e.contacts=a,e.isLoading=!1,e.isLoaded=!0},getDataFailure:(e,t)=>{let{payload:a}=t;e.error=a,e.isLoading=!1}}}),{getDataStart:y,getDataSuccess:F,getDataFailure:D}=L.actions,I=e=>e.contacts;var B=L.reducer;const E=Object(o.b)({name:"user",initialState:{user:null},reducers:{setUser:(e,t)=>{let{payload:a}=t;e.user=a},removeUser:e=>{e.user=null}}}),{setUser:U,removeUser:k}=E.actions;var T=E.reducer;const M={first_name:"",last_name:"",email:"",id:null},J={isSending:!1,isSended:!1,error:null,currentContact:M},Q=Object(o.b)({name:"contact",initialState:J,reducers:{sendDataStart:e=>{e.isSending=!0,e.isSended=!1},sendDataSuccess:e=>{e.isSending=!1,e.isSended=!0,e.currentContact=M},sendDataFailure:(e,t)=>{let{payload:a}=t;e.error=a,e.isSending=!1,e.isSended=!0,e.currentContact=M},setCurrentContact:(e,t)=>{let{payload:a}=t;e.currentContact=a},setDefaultContact:e=>{e.currentContact=M},setToDeleteIdContact:(e,t)=>{let{payload:a}=t;e.currentContact.id=a}}}),{sendDataStart:V,sendDataSuccess:Y,sendDataFailure:q}=Q.actions,{setCurrentContact:H,setDefaultContact:P,setToDeleteIdContact:R}=Q.actions,Z=e=>e.contact;var G=Q.reducer;var W=Object(o.a)({reducer:{user:T,formSignIn:x,formSignUp:A,contacts:B,contact:G}}),X=a(22),z=a(3);var K=e=>{let{children:t}=e;const[a,c]=Object(s.useState)(!0);return t(a,(()=>{c(!a)}))},$=a(2),ee=a(12),te=a(27),ae=a(10),se=a(6),ce=a.n(se),ne=a(28),re=a.n(ne),ie=a(1);const oe=["type","autoFocus","className","label","error"],le=Object(s.forwardRef)(((e,t)=>{let{type:a="text",autoFocus:c=!1,className:n="",label:r="",error:i=""}=e,d=Object(l.a)(e,oe);const _=Object(s.useRef)(Object(o.c)()).current;return Object(ie.jsxs)("div",{className:ce()(re.a.formfield,n,{[re.a.formfield_error]:!!i}),children:[r&&Object(ie.jsx)("label",{htmlFor:_,className:re.a.formfield__label,children:r}),Object(ie.jsx)("input",Object($.a)({ref:t,type:a,autoFocus:c,autoComplete:"off",className:re.a.formfield__input},d)),Object(ie.jsx)("small",{className:re.a.formfield__error,children:i})]})}));le.displayName="Input";var de=le,_e=a(82),be=a.n(_e);var me=e=>{let{handleClick:t,type:a="button",className:s="",children:c,disabled:n}=e;return Object(ie.jsx)("button",{type:a,onClick:t,className:ce()(be.a.btn,s),disabled:n,children:c})},je=a(5),ue=a.n(je),pe=a(83),he=a.n(pe);var Oe=()=>Object(ie.jsx)("div",{className:he.a.spinner});const fe=ae.a().shape({email:ae.b().email().required(),password:ae.b().min(6).required()});var ge=e=>{var t,a;let{onSuccess:s,tglPopup:c}=e;const n=Object(i.b)(),{isSending:r,error:o}=Object(i.c)(g),{register:l,handleSubmit:d,formState:{errors:_}}=Object(ee.d)({mode:"onBlur",resolver:Object(te.a)(fe)}),b=d((e=>{n(((e,t)=>{let{password:a,email:s}=e;return async e=>{e(h());try{await j.singIn(a,s)?(e(O()),t&&t()):e(f("\u043e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"))}catch(c){e(f(u(c)))}}})(e,s))}));return Object(ie.jsxs)("form",{className:ue.a.form,noValidate:!0,onSubmit:b,children:[Object(ie.jsx)("h3",{className:ue.a.form__title,children:"Fill the form"}),Object(ie.jsxs)("div",{className:ue.a.form__fields,children:[Object(ie.jsx)(de,Object($.a)(Object($.a)({className:ue.a.form__field,type:"email",error:null===(t=_.email)||void 0===t?void 0:t.message},l("email")),{},{placeholder:"email",label:"Email",readOnly:r})),Object(ie.jsx)(de,Object($.a)(Object($.a)({className:ue.a.form__field,type:"password",error:null===(a=_.password)||void 0===a?void 0:a.message},l("password")),{},{placeholder:"password",label:"Password",readOnly:r}))]}),Object(ie.jsx)("div",{className:ce()(ue.a.form__btns,r&&ue.a.form__btns_sending),children:r?Object(ie.jsx)(Oe,{}):Object(ie.jsxs)(ie.Fragment,{children:[o&&Object(ie.jsx)("p",{className:ue.a.form__error,children:o}),Object(ie.jsx)(me,{type:"submit",className:ue.a.form__submit,children:"Sing In"}),Object(ie.jsx)(me,{className:ue.a.form__submit,handleClick:c,children:"Sing Up"})]})})]})};const xe=ae.a().shape({firstName:ae.b().required(),lastName:ae.b().required(),email:ae.b().email().required(),password:ae.b().min(6).required()});var Ne=e=>{var t,a,s,c;let{onSuccess:n,tglPopup:r}=e;const o=Object(i.b)(),{isSending:l,error:d}=Object(i.c)(C),{register:_,handleSubmit:b,formState:{errors:m}}=Object(ee.d)({mode:"onBlur",resolver:Object(te.a)(xe)}),p=b((e=>{o(((e,t)=>{let{firstName:a,lastName:s,password:c,email:n}=e;return async e=>{e(v());try{await j.signUp({firstName:a,lastName:s,password:c,email:n})?(e(S()),t&&t()):e(w("\u043e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"))}catch(r){e(w(u(r)))}}})(e,(()=>{n()})))}));return Object(ie.jsxs)("form",{className:ue.a.form,noValidate:!0,onSubmit:p,children:[Object(ie.jsx)("h3",{className:ue.a.form__title,children:"Fill the form"}),Object(ie.jsxs)("div",{className:ue.a.form__fields,children:[Object(ie.jsx)(de,Object($.a)(Object($.a)({className:ue.a.form__field,autoFocus:!0,error:null===(t=m.firstName)||void 0===t?void 0:t.message},_("firstName")),{},{placeholder:"firstName",label:"firstName"})),Object(ie.jsx)(de,Object($.a)(Object($.a)({className:ue.a.form__field,error:null===(a=m.lastName)||void 0===a?void 0:a.message},_("lastName")),{},{placeholder:"lastName",label:"lastName"})),Object(ie.jsx)(de,Object($.a)(Object($.a)({className:ue.a.form__field,type:"email",error:null===(s=m.email)||void 0===s?void 0:s.message},_("email")),{},{placeholder:"email",label:"Email"})),Object(ie.jsx)(de,Object($.a)(Object($.a)({className:ue.a.form__field,type:"password",error:null===(c=m.password)||void 0===c?void 0:c.message},_("password")),{},{placeholder:"password",label:"Password"}))]}),Object(ie.jsx)("div",{className:ce()(ue.a.form__btns,l&&ue.a.form__btns_sending),children:l?Object(ie.jsx)(Oe,{}):Object(ie.jsxs)(ie.Fragment,{children:[d&&Object(ie.jsx)("p",{className:ue.a.form__error,children:d}),Object(ie.jsx)(me,{type:"submit",className:ue.a.form__submit,children:"Sing Up"}),Object(ie.jsx)(me,{className:ue.a.form__submit,handleClick:r,children:"Sing In"})]})})]})},ve=a(9),Se=a.n(ve),we=a(26);const Ce=Object(we.a)([e=>e.user],(e=>e.user));var Ae=e=>{let{tglPopupSingIn:t,tglPopupSingUp:a}=e;const s=Object(i.c)(Ce),c=(()=>{const e=Object(i.b)();return async()=>{await j.logOut(),e(k())}})();return Object(ie.jsxs)("header",{className:Se.a.header,children:[Object(ie.jsx)("nav",{className:ce()(Se.a.header__nav,Se.a.headerNav),children:Object(ie.jsxs)("ul",{className:ce()(Se.a.headerNav__list,Se.a.navList),children:[Object(ie.jsx)("li",{className:Se.a.navList__item,children:Object(ie.jsxs)(X.b,{to:"/",className:Se.a.headerLink,children:[Object(ie.jsx)("img",{src:"data:image/png;base64,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",alt:"logo",className:Se.a.headerLink__img}),Object(ie.jsx)("span",{className:ce()(Se.a.headerLink__name,"h4"),children:"Logo"})]})}),s&&Object(ie.jsx)("li",{className:Se.a.navList__item,children:Object(ie.jsx)(X.b,{to:"contacts",className:Se.a.headerLink,children:Object(ie.jsx)("span",{className:ce()(Se.a.headerLink__name,"h4"),children:"Contacts"})})})]})}),Object(ie.jsx)("div",{className:Se.a.headerBtns,children:s?Object(ie.jsx)(me,{handleClick:c,className:Se.a.headerBtns__btn,children:"Log out"}):Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsx)(me,{handleClick:t,className:Se.a.headerBtns__btn,children:"Sing In"}),Object(ie.jsx)(me,{handleClick:a,className:Se.a.headerBtns__btn,children:"Sign Up"})]})})]})},Le=a(24),ye=a.n(Le);var Fe=e=>{let{hide:t=(()=>{}),modifierPopupClass:a="",children:c=null,container:r=document.body}=e;const[i,o]=Object(s.useState)(!1);return Object(s.useEffect)((()=>{o(!0)}),[]),Object(ie.jsx)(ie.Fragment,{children:Object(n.createPortal)(Object(ie.jsxs)("div",{className:ce()(ye.a.popup,ye.a[a],{[ye.a.popup_visible]:i}),children:[Object(ie.jsx)("div",{className:ye.a.popup__bg,onClick:t}),Object(ie.jsxs)("div",{className:ye.a.popup__wrap,children:[Object(ie.jsx)("button",{className:ye.a.popup__close,onClick:t}),c]})]}),r)})},De=a.p+"static/media/check.e270ba5a.svg",Ie=a(41),Be=a.n(Ie);var Ee=e=>{let{hide:t=(()=>null),time:a=2500,desc:c=""}=e;const n=Object(s.useRef)();return Object(s.useEffect)((()=>(n.current=setTimeout((()=>{t()}),a),()=>{n.current&&clearTimeout(n.current)})),[]),Object(ie.jsxs)("div",{className:Be.a.popupThx,children:[Object(ie.jsx)("p",{className:Be.a.popupThx__desc,children:c}),Object(ie.jsx)("img",{src:De,alt:"\u2713",className:Be.a.popupThx__icon})]})};var Ue=()=>{const e=document.querySelector(".root"),t=Object(z.g)(),[a,c]=Object(s.useState)(!1),[n,r]=Object(s.useState)(!1),i=()=>{n&&r(!1),c((e=>!e))},o=()=>{a&&c(!1),r((e=>!e))};return Object(s.useEffect)((()=>{e&&e.scrollTo(0,0)}),[t]),Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsx)(Ae,{tglPopupSingUp:i,tglPopupSingIn:o}),Object(ie.jsx)("main",{children:Object(ie.jsx)(z.b,{})}),n&&Object(ie.jsx)(Fe,{hide:o,children:Object(ie.jsx)(K,{children:(e,t)=>e?Object(ie.jsx)(ge,{onSuccess:t,tglPopup:i}):Object(ie.jsx)(Ee,{hide:o,desc:"Successfully logged in"})})}),a&&Object(ie.jsx)(Fe,{hide:i,children:Object(ie.jsx)(K,{children:(e,t)=>e?Object(ie.jsx)(Ne,{onSuccess:t,tglPopup:o}):Object(ie.jsx)(Ee,{hide:i,desc:"Successfully registered"})})})]})},ke=a(54),Te=a.n(ke);var Me=()=>{var e;const t=Object(i.c)(Ce);return Object(ie.jsx)("section",{className:Te.a.home,children:Object(ie.jsxs)("h2",{className:Te.a.home__title,children:["Hellow ",t?null===(e=t.user_metadata)||void 0===e?void 0:e.firstName:"User"]})})},Je=a(42),Qe=a.n(Je);var Ve=e=>{let{handleClick:t,children:a,type:s,className:c=""}=e;return Object(ie.jsx)("button",{onClick:t,className:ce()(c,Qe.a.btn,{[Qe.a.btn_delete]:"delete"===s,[Qe.a.btn_edit]:"edit"===s}),children:a})},Ye=a.p+"static/media/trash.8468c71e.svg",qe=a.p+"static/media/edit.56b97d7a.svg",He=a(16),Pe=a.n(He);var Re=e=>{let{className:t,id:a,first_name:s,last_name:c,email:n,tglPopupContact:r,tglPopupWarning:o}=e;const l=Object(i.b)();return Object(ie.jsxs)("li",{className:ce()(t,Pe.a.contact),children:[Object(ie.jsxs)("div",{className:ce()(Pe.a.contact__wrap,Pe.a.wrap),children:[Object(ie.jsx)("p",{className:Pe.a.wrap__fullName,children:"".concat(s," ").concat(c)}),Object(ie.jsx)("p",{className:Pe.a.wrap__email,children:n})]}),Object(ie.jsxs)("div",{className:Pe.a.contact__btnWrap,children:[Object(ie.jsx)(Ve,{type:"edit",className:Pe.a.contact__btn,handleClick:()=>{l(H({id:a,first_name:s,last_name:c,email:n})),r()},children:Object(ie.jsx)("img",{src:qe,alt:"Edit"})}),Object(ie.jsx)(Ve,{type:"delete",className:Pe.a.contact__btn,handleClick:()=>{a&&l(R(a)),o()},children:Object(ie.jsx)("img",{src:Ye,alt:"Delete"})})]})]})},Ze=a(84),Ge=a(17),We=a.n(Ge);const Xe=ae.a().shape({first_name:ae.b().required(),last_name:ae.b().required(),email:ae.b().email().required()});var ze=e=>{var t,a,s;let{onSuccess:c}=e;const n=Object(i.b)(),{isSending:r,currentContact:o}=Object(i.c)(Z),l=Object(i.c)(Ce),{id:d,first_name:_,last_name:b,email:m}=o,{register:p,handleSubmit:h,formState:{errors:O}}=Object(ee.d)({mode:"onBlur",resolver:Object(te.a)(Xe)}),f=h((e=>{if(d)n(((e,t)=>async a=>{a(V());try{await j.updateContact(e)?(a(Y()),t&&t()):a(q("\u043e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"))}catch(s){a(q(u(s)))}})(Object($.a)(Object($.a)({},e),{},{id:d}),c));else{const t=null===l||void 0===l?void 0:l.id;n(((e,t)=>async a=>{a(V());try{await j.createContact(e)?(a(Y()),t&&t()):a(q("\u043e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"))}catch(s){a(q(u(s)))}})(Object($.a)(Object($.a)({},e),{},{user_id:t}),c))}}));return Object(ie.jsxs)("form",{className:ue.a.form,noValidate:!0,onSubmit:f,children:[Object(ie.jsx)("h3",{className:ue.a.form__title,children:d?"Update contact":"Create new contact"}),Object(ie.jsxs)("div",{className:ue.a.form__fields,children:[Object(ie.jsx)(de,Object($.a)(Object($.a)({className:ue.a.form__field,autoFocus:!0,error:null===(t=O.first_name)||void 0===t?void 0:t.message},p("first_name")),{},{placeholder:"firstName",label:"firstName",defaultValue:_})),Object(ie.jsx)(de,Object($.a)(Object($.a)({className:ue.a.form__field,error:null===(a=O.last_name)||void 0===a?void 0:a.message},p("last_name")),{},{placeholder:"lastName",label:"lastName",defaultValue:b})),Object(ie.jsx)(de,Object($.a)(Object($.a)({className:ue.a.form__field,type:"email",error:null===(s=O.email)||void 0===s?void 0:s.message},p("email")),{},{placeholder:"email",label:"Email",defaultValue:m}))]}),r?Object(ie.jsx)(Oe,{}):Object(ie.jsx)(me,{type:"submit",className:ue.a.form__submit,children:d?"Save":"Create"})]})},Ke=a(86),$e=a.n(Ke);var et=e=>{let{className:t,handleChange:a}=e;return Object(ie.jsx)("input",{type:"search",name:"search",placeholder:"search...",id:"search",onChange:a,className:ce()(t,$e.a.search)})},tt=a(32),at=a.n(tt);var st=e=>{let{hide:t}=e;const a=Object(i.b)();return Object(ie.jsxs)("div",{className:at.a.warning,children:[Object(ie.jsx)("p",{className:at.a.warning__desc,children:"Are you sure to delete this contact?"}),Object(ie.jsxs)("div",{className:at.a.btns,children:[Object(ie.jsx)(me,{className:at.a.btns__btn,handleClick:()=>{var e;a((e=t,async(t,a)=>{t(V());const{contact:s}=a(),{currentContact:{id:c}}=s;try{c&&(await j.deleteContact(c)?(t(Y()),e&&e()):t(q("\u043e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430")))}catch(n){t(q(u(n)))}}))},children:"Yes"}),Object(ie.jsx)(me,{handleClick:t,children:"No"})]})]})};var ct=()=>{const e=Object(i.b)(),t=Object(i.c)(Ce),{currentContact:a}=Object(i.c)(Z),{contacts:c,isLoaded:n}=Object(i.c)(I),[r,o]=Object(s.useState)(!1),[l,d]=Object(s.useState)(!1),[_,b]=Object(s.useState)(""),m=()=>{r&&null!==a&&void 0!==a&&a.id&&e(P()),o(!r)},p=()=>{d(!l)};Object(s.useEffect)((()=>{var a;t&&e((a=t.id,async e=>{e(y());try{const t=await j.getContactList(a);e(t?F(t):D("\u043e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"))}catch(t){e(D(u(t)))}}))}),[c]);const h=_?Object(Ze.a)(c,_,{keys:["first_name","last_name","email"]}):c;return Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsxs)("section",{className:We.a.contacts,children:[Object(ie.jsx)("h2",{className:We.a.contacts__title,children:"Contacts"}),n?Object(ie.jsxs)(ie.Fragment,{children:[c.length&&Object(ie.jsx)(et,{className:We.a.contacts__search,handleChange:e=>{b(e.target.value)}}),Object(ie.jsx)(me,{className:We.a.contacts__new,handleClick:m,children:"New contact +"}),Object(ie.jsx)(ie.Fragment,{children:c.length?Object(ie.jsx)("ul",{className:ce()(We.a.contacts__list,We.a.contactsList),children:h.map((e=>Object(ie.jsx)(Re,Object($.a)(Object($.a)({},e),{},{className:We.a.contactsList__item,tglPopupContact:m,tglPopupWarning:p}),e.id)))}):Object(ie.jsx)("p",{className:We.a.contacts__desc,children:"Contact list is empty"})})]}):Object(ie.jsx)(Oe,{})]}),r&&Object(ie.jsx)(Fe,{hide:m,children:Object(ie.jsx)(K,{children:(e,t)=>e?Object(ie.jsx)(ze,{onSuccess:t}):Object(ie.jsx)(Ee,{hide:m,desc:"Contact created"})})}),l&&Object(ie.jsx)(Fe,{hide:p,children:Object(ie.jsx)(st,{hide:p})})]})};var nt=()=>Object(ie.jsx)("div",{children:Object(ie.jsx)("h1",{children:"NotFound 404"})});const rt=e=>{let{children:t}=e;const a=Object(i.b)();return Object(s.useEffect)((()=>{const{data:e}=j.supabase.auth.onAuthStateChange(((e,t)=>{if(t){const{user:e}=t;a(U(e))}}));return()=>{e&&e.unsubscribe()}}),[]),Object(ie.jsx)(ie.Fragment,{children:t})},it=e=>{let{children:t}=e;const a=Object(i.c)(Ce),s=Object(z.g)();return a?Object(ie.jsx)(ie.Fragment,{children:t}):Object(ie.jsx)(z.a,{to:"/",state:{from:s}})};var ot=()=>(Object(s.useEffect)((()=>{const e=()=>{const e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),Object(ie.jsx)(X.a,{children:Object(ie.jsx)(rt,{children:Object(ie.jsx)(z.e,{children:Object(ie.jsxs)(z.c,{path:"/",element:Object(ie.jsx)(Ue,{}),children:[Object(ie.jsx)(z.c,{index:!0,element:Object(ie.jsx)(Me,{})}),Object(ie.jsx)(z.c,{path:"contacts",element:Object(ie.jsx)(it,{children:Object(ie.jsx)(ct,{})})}),Object(ie.jsx)(z.c,{path:"*",element:Object(ie.jsx)(nt,{})})]})})})}));a(197);r.a.render(Object(ie.jsx)(c.a.StrictMode,{children:Object(ie.jsx)(i.a,{store:W,children:Object(ie.jsx)(ot,{})})}),document.getElementById("root"))},24:function(e,t,a){e.exports={popup:"Modal_popup__1g07w",popup__bg:"Modal_popup__bg__2Reb5",popup__wrap:"Modal_popup__wrap__1glzF",popup__close:"Modal_popup__close__3YAPm",popup_visible:"Modal_popup_visible__1qDS7"}},28:function(e,t,a){e.exports={formfield:"Input_formfield__1763v",formfield__label:"Input_formfield__label__89Uf7",formfield__input:"Input_formfield__input__1VUkt",formfield__error:"Input_formfield__error__DUphb",formfield_error:"Input_formfield_error__3NhxB"}},32:function(e,t,a){e.exports={warning__desc:"WarningInfo_warning__desc__2yreq",btns:"WarningInfo_btns__IM4MS",btns__btn:"WarningInfo_btns__btn__1HyoY"}},41:function(e,t,a){e.exports={popupThx:"ModalThx_popupThx__3YMEA",popupThx__desc:"ModalThx_popupThx__desc__Hkui1",popupThx__icon:"ModalThx_popupThx__icon__2ZLYQ"}},42:function(e,t,a){e.exports={btn:"ButtonWithImage_btn__3ir5n"}},5:function(e,t,a){e.exports={form__title:"Form_form__title__3KcGc",form__fields:"Form_form__fields__3Lwzm",form__field:"Form_form__field__3CA-y",form__error:"Form_form__error__2yuni",form__btns:"Form_form__btns__36nU1",form__btns_sending:"Form_form__btns_sending__1vjFM",form__submit:"Form_form__submit__ZoCw6"}},54:function(e,t,a){e.exports={home:"Home_home__2OjLE",home__title:"Home_home__title__3XAXw"}},82:function(e,t,a){e.exports={btn:"Btn_btn__2ExEj"}},83:function(e,t,a){e.exports={spinner:"Spinner_spinner__2FSUv","first-ring":"Spinner_first-ring__1fHIq","second-ring":"Spinner_second-ring__1oErX"}},86:function(e,t,a){e.exports={search:"SearchInput_search__3aANP"}},9:function(e,t,a){e.exports={header:"Header_header__2BRRf",headerNav:"Header_headerNav__1W51t",navList:"Header_navList__1dYQn",navList__item:"Header_navList__item__3iIS0",headerLink:"Header_headerLink__22LoH",headerLink__img:"Header_headerLink__img__3F7wr",headerLink__name:"Header_headerLink__name__2ETrx",headerBtns:"Header_headerBtns__3JLh_",headerBtns__btn:"Header_headerBtns__btn__vl9N7"}}},[[198,1,2]]]);