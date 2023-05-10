"use strict";(self.webpackChunkalgoritmos=self.webpackChunkalgoritmos||[]).push([[950],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>v});var r=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},m=function(e){var a=u(e.components);return r.createElement(s.Provider,{value:a},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=u(t),d=o,v=p["".concat(s,".").concat(d)]||p[d]||c[d]||n;return t?r.createElement(v,l(l({ref:a},m),{},{components:t})):r.createElement(v,l({ref:a},m))}));function v(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=t.length,l=new Array(n);l[0]=d;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<n;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,a,t)=>{t.d(a,{Z:()=>l});var r=t(7294),o=t(6010);const n={tabItem:"tabItem_Ymn6"};function l(e){let{children:a,hidden:t,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(n.tabItem,l),hidden:t},a)}},4866:(e,a,t)=>{t.d(a,{Z:()=>y});var r=t(7462),o=t(7294),n=t(6010),l=t(2466),i=t(6550),s=t(1980),u=t(7392),m=t(12);function p(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:a,label:t,attributes:r,default:o}}=e;return{value:a,label:t,attributes:r,default:o}}))}function c(e){const{values:a,children:t}=e;return(0,o.useMemo)((()=>{const e=a??p(t);return function(e){const a=(0,u.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function d(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function v(e){let{queryString:a=!1,groupId:t}=e;const r=(0,i.k6)(),n=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,s._X)(n),(0,o.useCallback)((e=>{if(!n)return;const a=new URLSearchParams(r.location.search);a.set(n,e),r.replace({...r.location,search:a.toString()})}),[n,r])]}function k(e){const{defaultValue:a,queryString:t=!1,groupId:r}=e,n=c(e),[l,i]=(0,o.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:n}))),[s,u]=v({queryString:t,groupId:r}),[p,k]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,n]=(0,m.Nk)(t);return[r,(0,o.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:r}),g=(()=>{const e=s??p;return d({value:e,tabValues:n})?e:null})();(0,o.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),k(e)}),[u,k,n]),tabValues:n}}var g=t(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:a,block:t,selectedValue:i,selectValue:s,tabValues:u}=e;const m=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),c=e=>{const a=e.currentTarget,t=m.indexOf(a),r=u[t].value;r!==i&&(p(a),s(r))},d=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=m.indexOf(e.currentTarget)+1;a=m[t]??m[0];break}case"ArrowLeft":{const t=m.indexOf(e.currentTarget)-1;a=m[t]??m[m.length-1];break}}a?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":t},a)},u.map((e=>{let{value:a,label:t,attributes:l}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:e=>m.push(e),onKeyDown:d,onClick:c},l,{className:(0,n.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":i===a})}),t??a)})))}function h(e){let{lazy:a,children:t,selectedValue:r}=e;if(t=Array.isArray(t)?t:[t],a){const e=t.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},t.map(((e,a)=>(0,o.cloneElement)(e,{key:a,hidden:e.props.value!==r}))))}function N(e){const a=k(e);return o.createElement("div",{className:(0,n.Z)("tabs-container",f.tabList)},o.createElement(b,(0,r.Z)({},e,a)),o.createElement(h,(0,r.Z)({},e,a)))}function y(e){const a=(0,g.Z)();return o.createElement(N,(0,r.Z)({key:String(a)},e))}},5910:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>s,default:()=>v,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=t(7462),o=(t(7294),t(3905)),n=t(4866),l=t(5162);const i={sidebar_position:4},s="Repeti\xe7\xe3o",u={unversionedId:"Controle/Repeticao",id:"Controle/Repeticao",title:"Repeti\xe7\xe3o",description:"Considere que \xe9 necess\xe1rio desenvolver um programa que mostre na tela uma sequ\xeancia com os n\xfameros de $0$ a $5$. Como poderia ser feito?",source:"@site/docs/03-Controle/04-Repeticao.md",sourceDirName:"03-Controle",slug:"/Controle/Repeticao",permalink:"/algoritmos/docs/Controle/Repeticao",draft:!1,editUrl:"https://github.com/darlonv/algoritmos/tree/main/docs/03-Controle/04-Repeticao.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"M\xfaltipla escolha",permalink:"/algoritmos/docs/Controle/Multipla"},next:{title:"Exerc\xedcios",permalink:"/algoritmos/docs/category/exerc\xedcios-1"}},m={},p=[{value:"enquanto",id:"enquanto",level:2},{value:"Contadores",id:"contadores",level:3},{value:"Acumuladores",id:"acumuladores",level:3},{value:"repita",id:"repita",level:2},{value:"para",id:"para",level:2},{value:"Refer\xeancias",id:"refer\xeancias",level:2},{value:"Outros materiais",id:"outros-materiais",level:3}],c={toc:p},d="wrapper";function v(e){let{components:a,...t}=e;return(0,o.kt)(d,(0,r.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"repeti\xe7\xe3o"},"Repeti\xe7\xe3o"),(0,o.kt)("p",null,"Considere que \xe9 necess\xe1rio desenvolver um programa que mostre na tela uma sequ\xeancia com os n\xfameros de ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mn",{parentName:"mrow"},"0")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,o.kt)("span",{parentName:"span",className:"mord"},"0")))))," a ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mn",{parentName:"mrow"},"5")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"5")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,o.kt)("span",{parentName:"span",className:"mord"},"5"))))),". Como poderia ser feito?"),(0,o.kt)("p",null,"Uma das formas seria:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"escreva(0);\nescreva(1);\nescreva(2);\nescreva(3);\nescreva(4);\nescreva(5);\n")),(0,o.kt)("p",null,"Uma outra forma seria colocando cada valor em uma vari\xe1vel, que chamaremos de ",(0,o.kt)("strong",{parentName:"p"},"vari\xe1vel de controle"),". Ter\xedamos ent\xe3o:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"inteiro valor;\n\nvalor\u21900;\nescreva(valor);\nvalor\u21901;\nescreva(valor);\nvalor\u21902;\nescreva(valor);\nvalor\u21903;\nescreva(valor);\nvalor\u21904;\nescreva(valor);\nvalor\u21905;\nescreva(valor);\n")),(0,o.kt)("p",null,"Ao observar o \xfaltimo exemplo, percebemos que h\xe1 um padr\xe3o que se repete. A vari\xe1vel ",(0,o.kt)("inlineCode",{parentName:"p"},"var")," recebe o valor que ser\xe1 apresentado e o ",(0,o.kt)("inlineCode",{parentName:"p"},"escreva")," mostra na tela o valor da vari\xe1vel."),(0,o.kt)("p",null,"Reconhecendo que a estrutura segue um padr\xe3o, pode-se aplicar uma ",(0,o.kt)("strong",{parentName:"p"},"estrutura de repeti\xe7\xe3o"),". O uso da estrutura de repeti\xe7\xe3o permite que o mesmo trecho de c\xf3digo seja executado diversas vezes, modificando apenas o ",(0,o.kt)("strong",{parentName:"p"},"valor de vari\xe1veis"),"."),(0,o.kt)("h2",{id:"enquanto"},"enquanto"),(0,o.kt)("p",null,"A estrutura de repeti\xe7\xe3o ",(0,o.kt)("inlineCode",{parentName:"p"},"enquanto")," consiste em repetir um bloco ",(0,o.kt)("em",{parentName:"p"},"enquanto")," uma determinada condi\xe7\xe3o for verdadeira."),(0,o.kt)("p",null,"A estrutura sint\xe1tica do ",(0,o.kt)("inlineCode",{parentName:"p"},"enquanto")," segue a seguinte forma:"),(0,o.kt)(n.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"pseudocodigo",label:"Pseudoc\xf3digo",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"enquanto(<condi\xe7\xe3o>) fa\xe7a\n  ...c\xf3digo...\nfimenquanto;\n"))),(0,o.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"while(<condi\xe7\xe3o>){\n  ...\n  ...c\xf3digo...\n  ...\n}\n"))),(0,o.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"while <condi\xe7\xe3o> :\n  ...\n  ...c\xf3digo...\n  ...\n")))),(0,o.kt)("p",null,"Poder\xedamos reescrever o exemplo anterior utilizando esta estrutura. "),(0,o.kt)(n.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"pseudocodigo",label:"Pseudoc\xf3digo",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"inteiro: valor;\nvalor \u2190 0;\nenquanto( var <= 5 ) fa\xe7a\n  escreva(var);\n  valor \u2190 valor+1 ; \nfimenquanto;\n"))),(0,o.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"int valor;\nvalor = 0;\nwhile( valor <= 5 ){\n  System.out.println(valor);\n  valor = valor+1;\n}\n"))),(0,o.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"valor = 0\nwhile valor<=5 :\n  print(valor)\n  valor = valor +1\n")))),(0,o.kt)("p",null,"Observe que a estrutura executada diversas vezes, e a quantidade de vezes a ser executada depender\xe1 do resultado da condi\xe7\xe3o."),(0,o.kt)("admonition",{title:"Cuidado",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Observe que antes de adentrar na estrutura, \xe9 necess\xe1rio inicializar a vari\xe1vel, e a vari\xe1vel deve ter seu valor modificado durante a execu\xe7\xe3o do la\xe7o de repeti\xe7\xe3o. Caso a vari\xe1vel n\xe3o se altere, ocorre o risco de gerar um la\xe7o que \xe9 executado infinitamente, um ",(0,o.kt)("em",{parentName:"p"},"loop")," infinito.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Exerc\xedcios"),"  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Desenvolva um algoritmo que realiza uma contagem regressiva para o lan\xe7amento de um foguete. Seu programa deve apresentar na tela uma sequ\xeancia de valores, iniciando de 10 e finalizando em 0.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Pe\xe7a ao usu\xe1rio que digite diversos n\xfameros inteiro, parando quando o n\xfamero 0 for digitado. Para cada n\xfamero digitado, informe se este \xe9 par ou \xedmpar.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Desenvolva um algoritmo em que o usu\xe1rio pode digitar diversos n\xfameros (quantos ele quiser), parando quando o n\xfamero 0 for digitado. Ao final, informe quantos n\xfameros foram digitados.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Escreva um algoritmo que solicita um n\xfamero inteiro positivo ao usu\xe1rio, e em seguida calcula a soma de todos os n\xfameros pares de 0 at\xe9 o n\xfamero informado.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Pe\xe7a ao usu\xe1rio que digite um n\xfamero inteiro. Em seguida, apresente a tabuada desse n\xfamero, de 1 a 10.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Pe\xe7a ao usu\xe1rio que digite 5 n\xfameros positivos. Em seguida, mostre o menor valor entre os n\xfameros digitados.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Atualize o exerc\xedcio anterior, informando tamb\xe9m o maior valor digitado.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Atualize o algoritmo do exerc\xedcio anterior, informando tamb\xe9m a m\xe9dia entre os valores digitados.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Atualize o algoritmo do exerc\xedcio anterior, em que o usu\xe1rio pode digitar qualquer quantidade de n\xfameros, parando quando um valor negativo for digitado.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Desenvolva um algoritmo que calcula o MDC entre dois n\xfameros positivos."),(0,o.kt)("admonition",{parentName:"li",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"O MDC (M\xe1ximo Divisor Comum) \xe9 o maior valor que divide simult\xe2neamente dois n\xfameros."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Desenvolva um algoritmo que calcula e mostra o MMC entre dois n\xfameros positivos."),(0,o.kt)("admonition",{parentName:"li",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"O MMC (M\xednimo m\xfaltiplo Comum) \xe9 o menor valor que \xe9 m\xfaltiplo de ambos os n\xfameros.")))),(0,o.kt)("h3",{id:"contadores"},"Contadores"),(0,o.kt)("h3",{id:"acumuladores"},"Acumuladores"),(0,o.kt)("h2",{id:"repita"},"repita"),(0,o.kt)("h2",{id:"para"},"para"),(0,o.kt)("h2",{id:"refer\xeancias"},"Refer\xeancias"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://plataforma.bvirtual.com.br/Leitor/Publicacao/323/pdf/11?code=DUT9ceW6cevP76Zo+EZuhLshlFiipf6bm1qH+Er9IE2FR2aabpwRBUFHWBQY+ppEDI1u1phvX3Bo9xII7UTG/g=="},"FORBELLONE, A. L. V.; EBERSP\xc4CHER, H. F. L\xf3gica de programa\xe7\xe3o a constru\xe7\xe3o de algoritmos e estruturas de dados. 3. ed. -. S\xe3o Paulo: Prentice Hall, 2005. ISBN 9788576050247."),"  "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://plataforma.bvirtual.com.br/Leitor/Publicacao/474/pdf/17?code=5aKNgQDVA1oGkIID/Mxq/5biXE3mV+4408hOmSg69vmeXo0W9VHrtyzrwyezUND1EQo7jhOxxg2X7UCNFBYZHg=="},"ASCENCIO, A. F. G.; CAMPOS, E. A. V. Fundamentos da programa\xe7\xe3o de computadores algoritmos, Pascal e C/C++. S\xe3o Paulo: Prentice Hall, 2002. ISBN 9788587918369."),"  "),(0,o.kt)("p",null,"MATTHES, E. Curso intensivo de Python: uma introdu\xe7\xe3o \xe0 pr\xe1tica e baseada em projetos \xe0 programa\xe7\xe3o. S\xe3o Paulo: Novatec, 2015.  "),(0,o.kt)("p",null,"MENEZES, N. N. C. Introdu\xe7\xe3o \xe0 programa\xe7\xe3o com Python: algoritmos e l\xf3gica de programa\xe7\xe3o para iniciantes. 3.ed. S\xe3o Paulo: Novatec, 2019.  "),(0,o.kt)("h3",{id:"outros-materiais"},"Outros materiais"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://wiki.python.org/moin/ForLoop"},"Python. ForLoop - Python Wiki.")))}v.isMDXComponent=!0}}]);