(this["webpackJsonpportfolio-new"]=this["webpackJsonpportfolio-new"]||[]).push([[0],{32:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(10),r=a.n(n),i=(a(32),a(0)),o=function(){return Object(i.jsxs)("section",{className:"about",id:"about",children:[Object(i.jsxs)("div",{className:"about__presentation",children:[Object(i.jsx)("h2",{className:"about__title",children:"About Me"}),Object(i.jsx)("p",{className:"about__firstparagraph",children:"Hello, I'm Matthieu. I'm 23 years old. I live in Saubrigues in the South West of France. I've been interested in IT since I was a teenager but in september 2021, I joined the Wild Code School to really learn programmation."}),Object(i.jsxs)("p",{children:["In terms of technologies, I use"," ",Object(i.jsx)("span",{className:"purple-text",children:"HTML, CSS, SASS, JavaScript Vanilla, ReactJS, TypeScript, NodeJS, ExpressJS, MySQL, API Rest, Git, Github"}),". But, I'm curious so I'm not afraid to learn others technologies."]})]}),Object(i.jsx)("div",{className:"about__portrait"})]})},l=a(4),j=a(27),d=a.n(j),h=a.p+"static/media/cv.5c53741e.pdf",b=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),r=Object(l.a)(n,2),o=r[0],j=r[1],b=Object(c.useState)(""),u=Object(l.a)(b,2),m=u[0],p=u[1],x=Object(c.useState)(""),O=Object(l.a)(x,2),f=O[0],v=O[1];return Object(i.jsxs)("section",{className:"contact",id:"contact",children:[Object(i.jsx)("div",{className:"contact__map"}),Object(i.jsxs)("div",{className:"contact__form",children:[Object(i.jsx)("h2",{className:"title",children:"Contact Me"}),Object(i.jsxs)("p",{children:["I am looking for an internship from February 2022 and for a period of 4 to 6 months. However, don't hesitate to contact me if you have a request or a question.",Object(i.jsx)("br",{}),Object(i.jsxs)("span",{className:"little-text",children:["Click"," ",Object(i.jsx)("a",{href:h,download:"CV_Matthieu_Dubo.pdf",children:Object(i.jsx)("span",{className:"purple-text",children:"here"})})," ","to download my CV."]})]}),Object(i.jsxs)("form",{onSubmit:function(e){!function(e){e.preventDefault(),d.a.post("https://matthieudubo.herokuapp.com/",{name:a,subject:o,email:m,message:f},{withCredentials:!0}).catch((function(e){return console.log(e)})),s(""),j(""),p(""),v("")}(e),a&&o&&m&&f&&alert("Thank you for your message!")},children:[Object(i.jsx)("input",{type:"text",name:"name",className:"name",placeholder:"Name",value:a,onChange:function(e){return s(e.target.value)},autoComplete:"off",required:!0}),Object(i.jsx)("input",{type:"text",name:"subject",placeholder:"Subject",value:o,onChange:function(e){return j(e.target.value)},autoComplete:"off",required:!0}),Object(i.jsx)("input",{type:"email",name:"email",placeholder:"Email",value:m,onChange:function(e){return p(e.target.value)},autoComplete:"off",required:!0}),Object(i.jsx)("textarea",{type:"text",name:"message",placeholder:"Message",value:f,onChange:function(e){return v(e.target.value)},required:!0}),Object(i.jsx)("button",{type:"submit",children:"Send message"})]})]})]})},u=function(){return Object(i.jsx)("section",{className:"home",id:"home",children:Object(i.jsxs)("div",{className:"home__box",children:[Object(i.jsx)("div",{className:"home__box-presentation",children:Object(i.jsx)("h1",{children:"Matthieu Dubo"})}),Object(i.jsx)("div",{className:"home__box-separate"}),Object(i.jsx)("div",{className:"home__box-work",children:Object(i.jsx)("h2",{children:"Web Developer"})})]})})},m=a(3),p=function(){return Object(i.jsxs)("div",{className:"navbar",children:[Object(i.jsx)("div",{className:"navbar__logo",children:Object(i.jsx)(m.Link,{to:"home",smooth:!0,duration:1e3,children:Object(i.jsx)("div",{className:"logo-md"})})}),Object(i.jsxs)("div",{className:"navbar__menu",children:[Object(i.jsx)("div",{className:"navbar__menu-about",children:Object(i.jsx)(m.Link,{to:"about",smooth:!0,duration:1e3,children:"About Me"})}),Object(i.jsx)("div",{className:"navbar__menu-projects",children:Object(i.jsx)(m.Link,{to:"projects",smooth:!0,duration:1e3,children:"Projects"})}),Object(i.jsx)("div",{className:"navbar__menu-contact",children:Object(i.jsx)(m.Link,{to:"contact",smooth:!0,duration:1e3,children:"Contact"})})]}),Object(i.jsxs)("div",{className:"navbar__networks",children:[Object(i.jsx)("a",{href:"https://www.linkedin.com/in/matthieu-dubo-a14223221/",target:"_blank",rel:"noreferrer",children:Object(i.jsx)("div",{className:"linkedin"})}),Object(i.jsx)("a",{href:"https://github.com/matthieudubo",target:"_blank",rel:"noreferrer",children:Object(i.jsx)("div",{className:"github"})})]})]})},x=a.p+"static/media/wild-restau.35316086.png",O=a.p+"static/media/wild-heroes.4756aa6a.png",f=a.p+"static/media/live-up.2a7fb190.png",v=function(){return Object(i.jsxs)("section",{className:"projects",id:"projects",children:[Object(i.jsx)("h2",{className:"title",children:"My Projects"}),Object(i.jsxs)("div",{className:"projects__container",children:[Object(i.jsx)("a",{href:"https://matthieudubo.github.io/The-Wild-restau/",target:"_blank",rel:"noreferrer",children:Object(i.jsxs)("div",{className:"projects__container-card",children:[Object(i.jsxs)("div",{className:"projects__container-card-recto",children:[Object(i.jsx)("img",{src:x,alt:"wild-restau"}),Object(i.jsx)("h3",{children:"The Wild Restau"})]}),Object(i.jsx)("p",{children:"It's a fictive project for a restaurant. It was realised in two weeks with HTML, SCSS and JavaScript Vanilla only."})]})}),Object(i.jsx)("a",{href:"https://matthieudubo.github.io/wild-heroes/#/",target:"_blank",rel:"noreferrer",children:Object(i.jsxs)("div",{className:"projects__container-card",children:[Object(i.jsxs)("div",{className:"projects__container-card-recto",children:[Object(i.jsx)("img",{src:O,alt:"wild-heroes"}),Object(i.jsx)("h3",{children:"Wild Heroes"})]}),Object(i.jsx)("p",{children:"Project realised in one month with React, CSS and two APIs. You can find information about heroes and there are two quiz to play."})]})}),Object(i.jsx)("a",{href:"https://matthieudubo.github.io/Liveup/",target:"_blank",rel:"noreferrer",children:Object(i.jsxs)("div",{className:"projects__container-card",children:[Object(i.jsxs)("div",{className:"projects__container-card-recto",children:[Object(i.jsx)("img",{src:f,alt:"live-up"}),Object(i.jsx)("h3",{children:"Live Up"})]}),Object(i.jsx)("p",{children:"Project realised during a hackathon, in approximately 30 hours. It's a fullstack project. We used React for the front, ExpressJs for the back and MySQL for the database."})]})})]})]})},_=(a(62),function(){return Object(i.jsxs)("div",{className:"container-general",children:[Object(i.jsx)(p,{}),Object(i.jsx)(u,{}),Object(i.jsx)(o,{}),Object(i.jsx)(v,{}),Object(i.jsx)(b,{})]})}),g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,64)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(_,{})}),document.getElementById("root")),g()}},[[63,1,2]]]);
//# sourceMappingURL=main.52bfc6e2.chunk.js.map