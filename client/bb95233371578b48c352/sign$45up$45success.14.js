(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{35:function(e,t,n){"use strict";(function(e){var a=n(47),c=n(37),o=n(36),s=n.n(o),r=n(8);let i,b,l;const d=t=>{const c=new(void 0!==e.env.JEST_WORKER_ID?n(28):n(28).default)(t).setMaxListeners(a.a.database.maxNumberOfListeners);return c.changes({since:"now",live:!0,include_docs:!0}).on("change",()=>{if(void 0!==e.env.JEST_WORKER_ID)return;n(30).default.update(e=>({...e,dbUpdatedAt:Date.now()}))}),c};if(!0===Object(r.a)()){const e=n(30).default,t=n(28).default;b=new t(`${a.a.database.remote}/${s.a.get("loginDb")}`,{skip_setup:!0,live:!0}),i=d(a.a.database.local),window._DB=i,s.a.get("loginDb")===Object(c.a)("---fakeUser")&&e.update(e=>({...e,user:{name:"---fakeUser"},online:!0})),s.a.get("loginDb")&&a.a.features.authEnabled?fetch(a.a.database.remote+"/_session",{credentials:"include"}).then(e=>e.json()).then(t=>{null!==t.userCtx.name&&(e.update(e=>({...e,user:{name:t.userCtx.name}})),o())}):e.update(e=>({...e,online:!1})),window._fakeLogin=()=>{s.a.set("loginDb",Object(c.a)("---fakeUser"),{expires:a.a.database.auth.expireDays}),window.location.href="/course/spanish-from-english/"},window._Login=async(t,n)=>{if(!1===window._test_credentials_correct)throw new Error("Incorrect username or password");if(!0===window._test_credentials_correct)return window._fakeLogin();const o=await(await fetch(a.a.database.remote+"/_session",{method:"post",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:n})})).json();if(o.error){if("unauthorized"===o.error)throw new Error("Username or password is incorrect");throw new Error("Couldn't log in. Please try again later")}e.update(e=>({...e,online:null})),s.a.set("loginDb",Object(c.a)(t),{expires:a.a.database.auth.expireDays}),window.location.reload(!1),window.location.href="/course/spanish-from-english/"},window._Logout=async()=>{try{l&&(await l.cancel(),await fetch(a.a.database.remote+"/_session",{method:"delete"}))}finally{s.a.remove("loginDb"),e.update(e=>({...e,user:null,online:null})),await i.destroy(),window.location.reload(!1)}};const o=()=>{l=i.sync(b).on("complete",(function(){e.update(e=>({...e,online:!0}))})).on("error",(function(){e.update(e=>({...e,online:!1}))}))}}void 0!==e.env.JEST_WORKER_ID&&(i=d(a.a.database.local),i.__reset=async()=>{const e=await i.allDocs();await Promise.all(e.rows.map((function(e){return i.remove(e.id,e.value.rev)})))}),t.a=i}).call(this,n(20))},37:function(e,t,n){"use strict";t.a=e=>"userdb-"+(e=>e.split("").map(e=>e.charCodeAt(0).toString(16)).join(""))(e)},435:function(e,t,n){"use strict";n.r(t);var a=n(0),c=(n(35),n(33)),o=n(34);function s(e){let t;return{c(){t=Object(a.fb)("Log in")},l(e){t=Object(a.s)(e,"Log in")},m(e,n){Object(a.K)(e,t,n)},d(e){e&&Object(a.B)(t)}}}function r(e){let t,n,r,i,b,l,d,u,O,j,f,w;return t=new c.a({}),f=new o.a({props:{href:"/login",$$slots:{default:[s]},$$scope:{ctx:e}}}),{c(){Object(a.v)(t.$$.fragment),n=Object(a.cb)(),r=Object(a.C)("section"),i=Object(a.C)("div"),b=Object(a.C)("h2"),l=Object(a.fb)("Registration successful!"),d=Object(a.cb)(),u=Object(a.C)("p"),O=Object(a.fb)("You can now log in."),j=Object(a.cb)(),Object(a.v)(f.$$.fragment),this.h()},l(e){Object(a.o)(t.$$.fragment,e),n=Object(a.r)(e),r=Object(a.p)(e,"SECTION",{class:!0});var c=Object(a.n)(r);i=Object(a.p)(c,"DIV",{class:!0});var o=Object(a.n)(i);b=Object(a.p)(o,"H2",{class:!0});var s=Object(a.n)(b);l=Object(a.s)(s,"Registration successful!"),s.forEach(a.B),d=Object(a.r)(o),u=Object(a.p)(o,"P",{});var w=Object(a.n)(u);O=Object(a.s)(w,"You can now log in."),w.forEach(a.B),j=Object(a.r)(o),Object(a.o)(f.$$.fragment,o),o.forEach(a.B),c.forEach(a.B),this.h()},h(){Object(a.j)(b,"class","is-size-2"),Object(a.j)(i,"class","container"),Object(a.j)(r,"class","section")},m(e,c){Object(a.O)(t,e,c),Object(a.K)(e,n,c),Object(a.K)(e,r,c),Object(a.g)(r,i),Object(a.g)(i,b),Object(a.g)(b,l),Object(a.g)(i,d),Object(a.g)(i,u),Object(a.g)(u,O),Object(a.g)(i,j),Object(a.O)(f,i,null),w=!0},p(e,[t]){const n={};1&t&&(n.$$scope={dirty:t,ctx:e}),f.$set(n)},i(e){w||(Object(a.hb)(t.$$.fragment,e),Object(a.hb)(f.$$.fragment,e),w=!0)},o(e){Object(a.ib)(t.$$.fragment,e),Object(a.ib)(f.$$.fragment,e),w=!1},d(e){Object(a.z)(t,e),e&&Object(a.B)(n),e&&Object(a.B)(r),Object(a.z)(f)}}}class i extends a.b{constructor(e){super(),Object(a.J)(this,e,null,r,a.X,{})}}t.default=i},64:function(e,t){}}]);