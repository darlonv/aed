"use strict";(self.webpackChunkalgoritmos=self.webpackChunkalgoritmos||[]).push([[9240],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6418:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={},l="Procedimentos",i={unversionedId:"Modulos/Exercicios/Procedimentos",id:"Modulos/Exercicios/Procedimentos",title:"Procedimentos",description:"1. Desenvolva um procedimento chamado tabuada, que recebe um n\xfamero x, e apresenta a tabuada desse n\xfamero na tela, com seus m\xfaltiplos de 1 a 10.",source:"@site/docs/04-Modulos/99_Exercicios/01-Procedimentos.md",sourceDirName:"04-Modulos/99_Exercicios",slug:"/Modulos/Exercicios/Procedimentos",permalink:"/algoritmos/docs/Modulos/Exercicios/Procedimentos",draft:!1,editUrl:"https://github.com/darlonv/algoritmos/tree/main/docs/04-Modulos/99_Exercicios/01-Procedimentos.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Par\xe2metros",permalink:"/algoritmos/docs/Modulos/Parametros"},next:{title:"Fun\xe7\xf5es",permalink:"/algoritmos/docs/Modulos/Exercicios/Funcoes"}},s={},u=[],c={toc:u},m="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"procedimentos"},"Procedimentos"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Desenvolva um procedimento chamado ",(0,a.kt)("inlineCode",{parentName:"li"},"tabuada"),", que recebe um n\xfamero ",(0,a.kt)("inlineCode",{parentName:"li"},"x"),", e apresenta a tabuada desse n\xfamero na tela, com seus m\xfaltiplos de 1 a 10.  ")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Exemplos"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Chamada:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"tabuada(5)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sa\xedda:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"5x1 = 50\n5x2 = 10\n5x3 = 15\n5x4 = 20\n5x5 = 25\n5x6 = 30\n5x7 = 35\n5x8 = 40\n5x9 = 45\n5x10 = 50\n"))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Desenvola um procedimento chamado ",(0,a.kt)("inlineCode",{parentName:"li"},"tabuadaIntervalo"),", que recebe tr\xeas valores: ",(0,a.kt)("inlineCode",{parentName:"li"},"x"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"inicio")," e ",(0,a.kt)("inlineCode",{parentName:"li"},"fim"),", e apresenta os m\xfaltiplos de ",(0,a.kt)("inlineCode",{parentName:"li"},"x")," no intervalo ",(0,a.kt)("inlineCode",{parentName:"li"},"[inicio, fim]"),"  ")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Exemplos"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Chamada:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"tabuadaIntervalo(10,15,23)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sa\xedda:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"10x15 = 150\n10x16 = 160\n10x17 = 170\n10x18 = 180\n10x19 = 190\n10x20 = 200\n10x21 = 210\n10x22 = 220\n10x23 = 230\n"))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Desenvolva um procedimento chamado ",(0,a.kt)("inlineCode",{parentName:"li"},"mostraDivisores"),", que calcula e mostra todos os divisores de um n\xfamero.   ")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Exemplos"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Chamada:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"mostraDivisores(15)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sa\xedda:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1\n3\n5\n15\n")),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Chamada:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"mostraDivisores(53)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sa\xedda:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1\n3\n17\n51\n")),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Chamada:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"mostraDivisores(97)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sa\xedda:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1\n97\n")),(0,a.kt)("hr",null)))}p.isMDXComponent=!0}}]);