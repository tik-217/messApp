(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[204],{9669:function(e,t,r){Promise.resolve().then(r.t.bind(r,1451,23)),Promise.resolve().then(r.bind(r,3708))},4531:function(e,t,r){"use strict";let n=(0,r(5236).ZF)({apiKey:"AIzaSyBc3QqyCMr9f3qs8JAXnD1Y9XVKRwHhTbE",authDomain:"messapp-8196c.firebaseapp.com",projectId:"messapp-8196c",storageBucket:"messapp-8196c.appspot.com",messagingSenderId:"623695759792",appId:"1:623695759792:web:2be2766b2c922d0ea42e75"});t.Z=n},357:function(e,t,r){"use strict";var n,o;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(o=r.g.process)?void 0:o.env)?r.g.process:r(8081)},8081:function(e){!function(){var t={229:function(e){var t,r,n,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function s(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var u=[],l=!1,c=-1;function m(){l&&n&&(l=!1,n.length?u=n.concat(u):c=-1,u.length&&d())}function d(){if(!l){var e=a(m);l=!0;for(var t=u.length;t;){for(n=u,u=[];++c<t;)n&&n[c].run();c=-1,t=u.length}n=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new f(e,t)),1!==u.length||l||a(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=p,o.addListener=p,o.once=p,o.off=p,o.removeListener=p,o.removeAllListeners=p,o.emit=p,o.prependListener=p,o.prependOnceListener=p,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}},s=!0;try{t[e](i,i.exports,n),s=!1}finally{s&&delete r[e]}return i.exports}n.ab="//";var o=n(229);e.exports=o}()},5654:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(7437),o=r(4848),i=r.n(o);function s(e){let{type:t,placeholder:r,name:o,errorType:s,touched:a,value:u,onBlur:l,handleChange:c}=e;return(0,n.jsxs)("section",{className:i().formItemSection,children:[(0,n.jsx)("input",{id:o,name:o,type:t,placeholder:r,onBlur:l,onChange:c,value:u,className:i().formItemSection__item}),(0,n.jsx)("span",{className:i().formItemSection__errorText,children:a&&s?(0,n.jsx)("div",{children:s}):null})]})}},9150:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(7437),o=r(1415),i=r.n(o);function s(e){let{btnText:t,btnColor:r}=e,o={};return o="gradient"===r?{backgroundImage:"linear-gradient(90deg, #0069e5 0%, #00ddeb 100%)",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}:"solid"===r?{color:"#0069E5"}:{color:"#EC6446"},(0,n.jsx)("button",{type:"submit",className:i().btnMainAction,style:o,children:t})}},3646:function(e,t,r){"use strict";function n(e){for(let t in e)e[t]=e[t].trim()}r.d(t,{r:function(){return n}})},3708:function(e,t,r){"use strict";r.d(t,{default:function(){return v}});var n=r(7437),o=r(7138),i=r(5735),s=r(4531),a=r(9381),u=r(5654),l=r(8682),c=r.n(l);function m(e){let{errors:t,value:r,touched:o,onBlur:i,handleChange:s}=e;return(0,n.jsxs)("div",{className:c().formInputs,children:[(0,n.jsx)(u.Z,{type:"text",placeholder:"Имя",name:"firstName",errorType:t.firstName,touched:o.firstName,value:r.firstName,onBlur:i,handleChange:s}),(0,n.jsx)(u.Z,{type:"text",placeholder:"Фамилия",name:"lastName",errorType:t.lastName,touched:o.lastName,value:r.lastName,onBlur:i,handleChange:s}),(0,n.jsx)(u.Z,{type:"email",placeholder:"Email",name:"email",errorType:t.email,touched:o.email,value:r.email,onBlur:i,handleChange:s}),(0,n.jsx)(u.Z,{type:"phone",placeholder:"Номер телеофна",name:"phone",errorType:t.phone,touched:o.phone,value:r.phone,onBlur:i,handleChange:s}),(0,n.jsx)(u.Z,{type:"password",placeholder:"Пароль",name:"password",errorType:t.password,touched:o.password,value:r.password,onBlur:i,handleChange:s}),(0,n.jsx)(u.Z,{type:"password",placeholder:"Подтвердите пароль",name:"confirmPassword",errorType:t.confirmPassword,touched:o.confirmPassword,value:r.confirmPassword,onBlur:i,handleChange:s})]})}var d=r(9150),f=r(5619),p=r.n(f),h=r(4245);let _=()=>{let e="* Поле обязательно для заполнения";return h.Ry({firstName:h.Z_().max(20,"Должно быть 20 символов или меньше").required(e).trim(),lastName:h.Z_().max(25,"Должно быть 25 символов или меньше").required(e).trim(),phone:h.Z_().matches(/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,"Номер начинается с 8 или +7").required(e).trim(),email:h.Z_().email("Invalid email address").required(e).trim(),password:h.Z_().required("Password is required").min(5,"Your password is too short.").matches(/[a-zA-Z]/,"Password can only contain Latin letters."),confirmPassword:h.Z_().oneOf([h.iH("password")],"Passwords must match")})};var g=r(3646);function v(){let e=(0,i.v0)(s.Z),t=(0,a.TA)({initialValues:{firstName:"",lastName:"",phone:"",email:"",password:"",confirmPassword:""},validationSchema:_,onSubmit:r=>{for(let e in r)t.values[e]=r[e].trim();(0,g.r)(t.values),(0,i.Xb)(e,t.values.email,t.values.password).then(e=>{e.user}).catch(e=>{e.code,e.message}),(0,i.Aj)(e,e=>{e&&e.uid})}});return(0,n.jsxs)("form",{className:p().form,onSubmit:t.handleSubmit,children:[(0,n.jsx)(m,{errors:t.errors,value:t.values,touched:t.touched,handleChange:t.handleChange,onBlur:t.handleBlur}),(0,n.jsxs)("div",{className:p().formBtns,children:[(0,n.jsx)(d.Z,{btnText:"Зарегистрироваться",btnColor:"gradient"}),(0,n.jsx)(o.default,{href:"/login",className:p().formBtns__login,children:(0,n.jsx)(d.Z,{btnText:"Войти",btnColor:"solid"})})]})]})}},4848:function(e){e.exports={formItemSection:"AuthInput_formItemSection__HC80E",formItemSection__item:"AuthInput_formItemSection__item__BMg8S",formItemSection__errorText:"AuthInput_formItemSection__errorText__l_Atb"}},1415:function(e){e.exports={btnMainAction:"BtnMainAction_btnMainAction__UwxiA"}},8682:function(e){e.exports={formInputs:"RegistrInputsList_formInputs__d7GLF"}},1451:function(e){e.exports={registr:"Registration_registr__pQPjv",registr__title:"Registration_registr__title__n96EY"}},5619:function(e){e.exports={form:"RegistrForm_form__bTzt8",formBtns:"RegistrForm_formBtns__ZhuqU",formBtns__login:"RegistrForm_formBtns__login__ayTOS"}}},function(e){e.O(0,[246,137,208,156,971,23,744],function(){return e(e.s=9669)}),_N_E=e.O()}]);