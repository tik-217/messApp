(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[204],{9669:function(e,t,n){Promise.resolve().then(n.t.bind(n,1451,23)),Promise.resolve().then(n.bind(n,3708))},5654:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7437),i=n(4848),o=n.n(i);function a(e){let{type:t,placeholder:n,name:i,errorType:a,touched:s,value:l,onBlur:m,handleChange:u}=e;return(0,r.jsxs)("section",{className:o().formItemSection,children:[(0,r.jsx)("input",{id:i,name:i,type:t,className:o().formItemSection__item,placeholder:n,onChange:u,onBlur:m,value:l}),(0,r.jsx)("span",{className:o().formItemSection__errorText,children:s&&a?(0,r.jsx)("div",{children:a}):null})]})}},9150:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7437),i=n(1415),o=n.n(i);function a(e){let{btnText:t,btnColor:n}=e,i={};return i="gradient"===n?{backgroundImage:"linear-gradient(90deg, #0069e5 0%, #00ddeb 100%)",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}:"solid"===n?{color:"#0069E5"}:{color:"#EC6446"},(0,r.jsx)("button",{type:"submit",className:o().btnMainAction,style:i,children:t})}},3708:function(e,t,n){"use strict";n.d(t,{default:function(){return f}});var r=n(7437),i=n(7138),o=n(9381),a=n(5654),s=n(8682),l=n.n(s);function m(e){let{errors:t,value:n,touched:i,onBlur:o,handleChange:s}=e;return(0,r.jsxs)("div",{className:l().formInputs,children:[(0,r.jsx)(a.Z,{type:"text",placeholder:"Имя",name:"firstName",errorType:t.firstName,touched:i.firstName,value:n.firstName,onBlur:o,handleChange:s}),(0,r.jsx)(a.Z,{type:"text",placeholder:"Фамилия",name:"lastName",errorType:t.lastName,touched:i.lastName,value:n.lastName,onBlur:o,handleChange:s}),(0,r.jsx)(a.Z,{type:"phone",placeholder:"Номер телеофна",name:"phone",errorType:t.phone,touched:i.phone,value:n.phone,onBlur:o,handleChange:s}),(0,r.jsx)(a.Z,{type:"email",placeholder:"Email",name:"email",errorType:t.email,touched:i.email,value:n.email,onBlur:o,handleChange:s})]})}var u=n(9150),c=n(5619),_=n.n(c),d=n(4245);let h=()=>{let e="* Поле обязательно для заполнения";return d.Ry({firstName:d.Z_().max(20,"Должно быть 20 символов или меньше").required(e).trim(),lastName:d.Z_().max(25,"Должно быть 25 символов или меньше").required(e).trim(),phone:d.Z_().matches(/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,"Номер начинается с 8 или +7").required(e).trim(),email:d.Z_().email("Invalid email address").required(e).trim()})};function f(){let e=(0,o.TA)({initialValues:{firstName:"",lastName:"",phone:"",email:""},validationSchema:h,onSubmit:t=>{for(let n in t)e.values[n]=t[n].trim()}});return(0,r.jsxs)("form",{className:_().form,onSubmit:e.handleSubmit,children:[(0,r.jsx)(m,{errors:e.errors,value:e.values,touched:e.touched,handleChange:e.handleChange,onBlur:e.handleBlur}),(0,r.jsxs)("div",{className:_().formBtns,children:[(0,r.jsx)(u.Z,{btnText:"Зарегистрироваться",btnColor:"gradient"}),(0,r.jsx)(i.default,{href:"/login",className:_().formBtns__login,children:(0,r.jsx)(u.Z,{btnText:"Войти",btnColor:"solid"})})]})]})}},4848:function(e){e.exports={formItemSection:"AuthInput_formItemSection__HC80E",formItemSection__item:"AuthInput_formItemSection__item__BMg8S",formItemSection__errorText:"AuthInput_formItemSection__errorText__l_Atb"}},1415:function(e){e.exports={btnMainAction:"BtnMainAction_btnMainAction__UwxiA"}},8682:function(e){e.exports={formInputs:"RegistrInputsList_formInputs__d7GLF"}},1451:function(e){e.exports={registr:"Registration_registr__pQPjv",registr__title:"Registration_registr__title__n96EY"}},5619:function(e){e.exports={form:"RegistrForm_form__bTzt8",formBtns:"RegistrForm_formBtns__ZhuqU",formBtns__login:"RegistrForm_formBtns__login__ayTOS"}}},function(e){e.O(0,[723,758,971,23,744],function(){return e(e.s=9669)}),_N_E=e.O()}]);