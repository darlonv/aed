"use strict";(self.webpackChunkalgoritmos=self.webpackChunkalgoritmos||[]).push([[2368],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var a=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=a.createContext({}),s=function(e){var r=a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=s(e.components);return a.createElement(u.Provider,{value:r},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,n=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||n;return t?a.createElement(f,l(l({ref:r},c),{},{components:t})):a.createElement(f,l({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=t.length,l=new Array(n);l[0]=d;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<n;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,r,t)=>{t.d(r,{Z:()=>l});var a=t(7294),o=t(6010);const n={tabItem:"tabItem_Ymn6"};function l(e){let{children:r,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(n.tabItem,l),hidden:t},r)}},4866:(e,r,t)=>{t.d(r,{Z:()=>E});var a=t(7462),o=t(7294),n=t(6010),l=t(2466),i=t(6550),u=t(1980),s=t(7392),c=t(12);function m(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:r,label:t,attributes:a,default:o}}=e;return{value:r,label:t,attributes:a,default:o}}))}function p(e){const{values:r,children:t}=e;return(0,o.useMemo)((()=>{const e=r??m(t);return function(e){const r=(0,s.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function d(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function f(e){let{queryString:r=!1,groupId:t}=e;const a=(0,i.k6)(),n=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,u._X)(n),(0,o.useCallback)((e=>{if(!n)return;const r=new URLSearchParams(a.location.search);r.set(n,e),a.replace({...a.location,search:r.toString()})}),[n,a])]}function g(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,n=p(e),[l,i]=(0,o.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!d({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:n}))),[u,s]=f({queryString:t,groupId:a}),[m,g]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,n]=(0,c.Nk)(t);return[a,(0,o.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:a}),b=(()=>{const e=u??m;return d({value:e,tabValues:n})?e:null})();(0,o.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),g(e)}),[s,g,n]),tabValues:n}}var b=t(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:r,block:t,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),p=e=>{const r=e.currentTarget,t=c.indexOf(r),a=s[t].value;a!==i&&(m(r),u(a))},d=e=>{let r=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}r?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":t},r)},s.map((e=>{let{value:r,label:t,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===r?0:-1,"aria-selected":i===r,key:r,ref:e=>c.push(e),onKeyDown:d,onClick:p},l,{className:(0,n.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":i===r})}),t??r)})))}function y(e){let{lazy:r,children:t,selectedValue:a}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},t.map(((e,r)=>(0,o.cloneElement)(e,{key:r,hidden:e.props.value!==a}))))}function k(e){const r=g(e);return o.createElement("div",{className:(0,n.Z)("tabs-container",v.tabList)},o.createElement(h,(0,a.Z)({},e,r)),o.createElement(y,(0,a.Z)({},e,r)))}function E(e){const r=(0,b.Z)();return o.createElement(k,(0,a.Z)({key:String(r)},e))}},7753:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var a=t(7462),o=(t(7294),t(3905));t(4866),t(5162);const n={},l="M\xfaltipla escolha",i={unversionedId:"Controle/Exercicios/Multipla",id:"Controle/Exercicios/Multipla",title:"M\xfaltipla escolha",description:"- Fa\xe7a um programa simula uma calculadora simples, perguntando ao usu\xe1rios dois valores e um operador (+, -, \\*, /). O programa deve mostrar o resultado da opera\xe7\xe3o utilizando os operadores e o operador.",source:"@site/docs/03-Controle/99-Exercicios/03-Multipla.md",sourceDirName:"03-Controle/99-Exercicios",slug:"/Controle/Exercicios/Multipla",permalink:"/algoritmos/docs/Controle/Exercicios/Multipla",draft:!1,editUrl:"https://github.com/darlonv/algoritmos/tree/main/docs/03-Controle/99-Exercicios/03-Multipla.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sele\xe7\xe3o",permalink:"/algoritmos/docs/Controle/Exercicios/Selecao"},next:{title:"Decomposi\xe7\xe3o",permalink:"/algoritmos/docs/Modulos/Decomposicao"}},u={},s=[{value:"Refer\xeancias externas",id:"refer\xeancias-externas",level:3}],c={toc:s},m="wrapper";function p(e){let{components:r,...t}=e;return(0,o.kt)(m,(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"m\xfaltipla-escolha"},"M\xfaltipla escolha"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Fa\xe7a um programa simula uma calculadora simples, perguntando ao usu\xe1rios dois valores e um operador (+, -, ","*",", /). O programa deve mostrar o resultado da opera\xe7\xe3o utilizando os operadores e o operador.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Fa\xe7a um programa em que o usu\xe1rio entra com o n\xfamero do dia da semana (1=domingo, 2=segunda-feira...) e o programa apresenta o dia da semana por extenso.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Fa\xe7a um programa em que o usu\xe1rio digita o n\xfamero do m\xeas (1: janeiro, 2: fevereiro...), e o programa apresenta o nome do m\xeas por extenso.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Fa\xe7a um programa em que o usu\xe1rio digita o n\xfamero do m\xeas e tem como resultado o n\xfamero de dias que aquele m\xeas possui. Desconsidere anos bissextos.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Desenvolva um algoritmo que tem como entrada um n\xfamero de 0 a 999. Em seguida, o programa apresenta esse n\xfamero por extenso. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Desenvolva um algoritmo que tem como entrada um n\xfamero de 0 a 999. Em seguida, o programa apresenta o n\xfamero ordinal correspondente em sua forma por extenso. "),(0,o.kt)("admonition",{parentName:"li",title:"Defini\xe7\xe3o",type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"N\xfameros ordinais"),"  "),(0,o.kt)("p",{parentName:"admonition"},"  Os n\xfameros ordinais s\xe3o aqueles que apresentam a ordem entre valores.",(0,o.kt)("br",{parentName:"p"}),"\n","Exemplos: primeiro, segundo, oitavo, nono, d\xe9cimo terceiro, trig\xe9simo quarto, cent\xe9simo vig\xe9simo oitavo.",(0,o.kt)("br",{parentName:"p"}),"\n","Mais informa\xe7\xf5es: ",(0,o.kt)("a",{parentName:"p",href:"https://www.figuradelinguagem.com/gramatica/numeros-ordinais/"},"Figuras de Linguagem. N\xfameros ordinais."),(0,o.kt)("br",{parentName:"p"}),"\n","")))),(0,o.kt)("h3",{id:"refer\xeancias-externas"},"Refer\xeancias externas"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.figuradelinguagem.com/gramatica/numeros-ordinais/"},"Figuras de Linguagem. N\xfameros ordinais."))))}p.isMDXComponent=!0}}]);