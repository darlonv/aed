"use strict";(self.webpackChunkalgoritmos=self.webpackChunkalgoritmos||[]).push([[1672],{3905:(e,a,r)=>{r.d(a,{Zo:()=>c,kt:()=>b});var o=r(7294);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function n(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?n(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,o,t=function(e,a){if(null==e)return{};var r,o,t={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var i=o.createContext({}),u=function(e){var a=o.useContext(i),r=a;return e&&(r="function"==typeof e?e(a):s(s({},a),e)),r},c=function(e){var a=u(e.components);return o.createElement(i.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},m=o.forwardRef((function(e,a){var r=e.components,t=e.mdxType,n=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=t,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||n;return r?o.createElement(b,s(s({ref:a},c),{},{components:r})):o.createElement(b,s({ref:a},c))}));function b(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var n=r.length,s=new Array(n);s[0]=m;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l[d]="string"==typeof e?e:t,s[1]=l;for(var u=2;u<n;u++)s[u]=r[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,a,r)=>{r.d(a,{Z:()=>s});var o=r(7294),t=r(6010);const n={tabItem:"tabItem_Ymn6"};function s(e){let{children:a,hidden:r,className:s}=e;return o.createElement("div",{role:"tabpanel",className:(0,t.Z)(n.tabItem,s),hidden:r},a)}},4866:(e,a,r)=>{r.d(a,{Z:()=>E});var o=r(7462),t=r(7294),n=r(6010),s=r(2466),l=r(6550),i=r(1980),u=r(7392),c=r(12);function d(e){return function(e){return t.Children.map(e,(e=>{if((0,t.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:a,label:r,attributes:o,default:t}}=e;return{value:a,label:r,attributes:o,default:t}}))}function p(e){const{values:a,children:r}=e;return(0,t.useMemo)((()=>{const e=a??d(r);return function(e){const a=(0,u.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,r])}function m(e){let{value:a,tabValues:r}=e;return r.some((e=>e.value===a))}function b(e){let{queryString:a=!1,groupId:r}=e;const o=(0,l.k6)(),n=function(e){let{queryString:a=!1,groupId:r}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:a,groupId:r});return[(0,i._X)(n),(0,t.useCallback)((e=>{if(!n)return;const a=new URLSearchParams(o.location.search);a.set(n,e),o.replace({...o.location,search:a.toString()})}),[n,o])]}function f(e){const{defaultValue:a,queryString:r=!1,groupId:o}=e,n=p(e),[s,l]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const o=r.find((e=>e.default))??r[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:a,tabValues:n}))),[i,u]=b({queryString:r,groupId:o}),[d,f]=function(e){let{groupId:a}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(a),[o,n]=(0,c.Nk)(r);return[o,(0,t.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:o}),v=(()=>{const e=i??d;return m({value:e,tabValues:n})?e:null})();(0,t.useLayoutEffect)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,n]),tabValues:n}}var v=r(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:a,block:r,selectedValue:l,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const a=e.currentTarget,r=c.indexOf(a),o=u[r].value;o!==l&&(d(a),i(o))},m=e=>{let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;a=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;a=c[r]??c[c.length-1];break}}a?.focus()};return t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},a)},u.map((e=>{let{value:a,label:r,attributes:s}=e;return t.createElement("li",(0,o.Z)({role:"tab",tabIndex:l===a?0:-1,"aria-selected":l===a,key:a,ref:e=>c.push(e),onKeyDown:m,onClick:p},s,{className:(0,n.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":l===a})}),r??a)})))}function N(e){let{lazy:a,children:r,selectedValue:o}=e;if(r=Array.isArray(r)?r:[r],a){const e=r.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return t.createElement("div",{className:"margin-top--md"},r.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==o}))))}function h(e){const a=f(e);return t.createElement("div",{className:(0,n.Z)("tabs-container",g.tabList)},t.createElement(k,(0,o.Z)({},e,a)),t.createElement(N,(0,o.Z)({},e,a)))}function E(e){const a=(0,v.Z)();return t.createElement(h,(0,o.Z)({key:String(a)},e))}},4273:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var o=r(7462),t=(r(7294),r(3905)),n=r(4866),s=r(5162);const l={sidebar_position:2},i="Express\xf5es",u={unversionedId:"Basicos/Exerc\xedcios/07a-Expressoes-exercicios",id:"Basicos/Exerc\xedcios/07a-Expressoes-exercicios",title:"Express\xf5es",description:"1. Fa\xe7a um programa que pergunta um n\xfamero ao usu\xe1rio, e em seguida mostra o antecessor e o sucessor desse n\xfamero.",source:"@site/docs/02-Basicos/Exerc\xedcios/07a-Expressoes-exercicios.md",sourceDirName:"02-Basicos/Exerc\xedcios",slug:"/Basicos/Exerc\xedcios/07a-Expressoes-exercicios",permalink:"/algoritmos/docs/Basicos/Exerc\xedcios/07a-Expressoes-exercicios",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-Basicos/Exerc\xedcios/07a-Expressoes-exercicios.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Exerc\xedcios",permalink:"/algoritmos/docs/category/exerc\xedcios"},next:{title:"Estruturas de controle",permalink:"/algoritmos/docs/category/estruturas-de-controle"}},c={},d=[{value:"Exerc\xedcios externos",id:"exerc\xedcios-externos",level:2},{value:"Beecrowd",id:"beecrowd",level:3},{value:"Refer\xeancias",id:"refer\xeancias",level:2}],p={toc:d},m="wrapper";function b(e){let{components:a,...r}=e;return(0,t.kt)(m,(0,o.Z)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"express\xf5es"},"Express\xf5es"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"Fa\xe7a um programa que pergunta um n\xfamero ao usu\xe1rio, e em seguida mostra o antecessor e o sucessor desse n\xfamero.  ")),(0,t.kt)("details",null,(0,t.kt)("summary",null,"Resposta"),(0,t.kt)(n.Z,{groupId:"language",mdxType:"Tabs"},(0,t.kt)(s.Z,{value:"portugol",label:"Portugol",default:!0,mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'inicio;\n//variaveis\ninteiro valor;\ninteiro antecessor, sucessor;\n\n//entrada\nescreva("Digite um n\xfamero: ");\nleia(valor);\n\n//processamento\nantecessor = valor -1;\nsucessor   = valor +1\n\n//saida\nescreva("antecessor: ", antecessor);\nescreva("sucessor  : ", sucessor);\n\nfim;\n'))),(0,t.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},'//Vari\xe1veis\nint valor;\nint antecessor, sucessor;\nScanner entrada;\n\n//Entrada\nSystem.out.println("Digite um n\xfamero: ");\nentrada = new Scanner(System.in);\nvalor = entrada.nextInt();\nentrada.close();\n\n//Processamento\nantecessor = valor -1;\nsucessor = valor +1;\n\n//Sa\xedda\nSystem.out.printf("O antecessor de %d \xe9 %d\\n", valor, antecessor);\nSystem.out.printf("O sucessor de %d \xe9 %d\\n", valor, sucessor);\n'))),(0,t.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"#Entrada\nprint('Digite um n\xfamero')\nvalor = input()\nvalor = int(valor)\n\n#Processamento\nantecessor = valor -1\nsucessor = valor +1\n\n#Sa\xedda\nprint(f'O antecessor de {valor} \xe9 {antecessor}', )\nprint(f'O sucessor de {valor} \xe9 {sucessor}', )\n"))))),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},'Fa\xe7a um programa que pergunta o nome do usu\xe1rio, e em seguida mostra a frase "Boa tarde" seguida do nome do usu\xe1rio.  ')),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Pergunte um n\xfamero ao usu\xe1rio, e mostre o valor desse n\xfamero ao cubo.")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Pergunte tr\xeas valores ao usu\xe1rio, que correspondem \xe0s horas, minutos e segundos do hor\xe1rio atual. Calcule quantos segundos se passaram desde 00:00 horas.",(0,t.kt)("br",{parentName:"p"}),"\n","(Adaptado de MENEZES 2019, pg. 72)")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Pergunte um n\xfamero ao usu\xe1rio, e em seguida mostre a raiz quadrada e a raiz c\xfabica desse n\xfamero.")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usu\xe1rio, assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o pre\xe7o a pagar, sabendo que o carro custa R","\\","$ 60,00 por dia e R","\\","$ 0,15 por km rodado.",(0,t.kt)("br",{parentName:"p"}),"\n","(Fonte: MENEZES 2019, pg. 72)")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Escreva um programa para ler as dimens\xf5es de um ret\xe2ngulo, com o tamanho da base ($b$) e da altura ($h$). Calcule o mostre o per\xedmetro ($p$) e \xe1rea ($a$) desse ret\xe2ngulo.\n$$p = 2(b+h)$$\n$$a = bh$$")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Pergunte ao usu\xe1rio o valor do raio ($r$) de um c\xedrculo, e em seguida mostre o per\xedmetro ($p$) e a \xe1rea ($a$) desse c\xedrculo.\n$$p = 2\\pi r$$\n$$a = \\pi r^2$$")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Fa\xe7a  um  algoritmo  que  leia  tr\xeas  notas ($N_1$, $N_2$ e $N_3$)  de  um  aluno,  calcule  e  escreva  a  m\xe9dia  final  deste  aluno. Considerar que a m\xe9dia ($M$) \xe9 ponderada e que o peso das notas \xe9 2, 3 e 5. A equa\xe7\xe3o para o c\xe1lculo da m\xe9dia final \xe9:\n$$M = \\frac{N_1 \\times 2 + N_2 \\times 3 + N_3 \\times 5}{2+3+5}$$",(0,t.kt)("br",{parentName:"p"}),"\n","(Fonte: CARVALHO, 2007)")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Fa\xe7a um programa que solicite o pre\xe7o de uma mercadoria e o percentual de desconto. Exiba o valor do desconto e o pre\xe7o a pagar.",(0,t.kt)("br",{parentName:"p"}),"\n","(Fonte: MENEZES 2019, pg. 72)")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Fa\xe7a um programa que calcule o aumento de um sal\xe1rio. Ele deve solicitar o valor do sal\xe1rio e a porcentagem de aumento. Exiba o valor do aumento e do novo sal\xe1rio.",(0,t.kt)("br",{parentName:"p"}),"\n","(Fonte: MENEZES 2019, pg. 72)")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Pe\xe7a ao usu\xe1rio que informe o valor de um boleto, o percentual de juros cobrado e o n\xfamero de dias em atraso. O programa deve calcular o valor total a ser pago, utilizando a f\xf3rmula\n$$Total = Valor + Valor \\times \\frac{Juros}{100} \\times Dias $$",(0,t.kt)("br",{parentName:"p"}),"\n","(Adaptado de LOPES, 2011)")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Considere que houve uma elei\xe7\xe3o, na qual tr\xeas candidatos concorreram ($C_a$, $C_b$ e $C_c$). O usu\xe1rio deve informar quantos votos cada candidato recebeu e quantidade de votos brancos e nulos. O programa deve calcular e mostrar a quantidade total de eleitores, o percentual de votos que cada candidato recebeu, o percentual de votos brancos e o percentual de votos nulos. O c\xe1lculo dos percentuais \xe9 dado em rela\xe7\xe3o ao total de votos da elei\xe7\xe3o.",(0,t.kt)("br",{parentName:"p"}),"\n","(Adaptado de LOPES, 2011)")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"O  custo  de  um  carro  novo  ao  consumidor  \xe9  a  soma  do  custo  de  f\xe1brica  com a  porcentagem  do distribuidor e dos impostos (aplicados ao custo de f\xe1brica). Supondo que o percentual do distribuidor seja  de  28%  e  os  impostos  de  45%,  escrever  um  algoritmo  para  ler o  custo  de  f\xe1brica  de  um  carro, calcular e escrever o custo final ao consumidor.",(0,t.kt)("br",{parentName:"p"}),"\n","(Fonte: CARVALHO, 2007)")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Uma revendedora de carros usados paga a seus funcion\xe1rios vendedores um sal\xe1rio fixo por m\xeas, mais  uma  comiss\xe3o  tamb\xe9m  fixa  para  cada  carro  vendido  e  mais  5% do  valor  das  vendas  por  ele efetuadas. Escrever um algoritmo que leia o n\xfamero de  carros por  ele vendidos, o valor total de suas vendas, o sal\xe1rio fixo e o valor que ele recebe por carro vendido. Calcule e escreva o sal\xe1rio final do vendedor.",(0,t.kt)("br",{parentName:"p"}),"\n","(Fonte: CARVALHO, 2007)."))),(0,t.kt)("h2",{id:"exerc\xedcios-externos"},"Exerc\xedcios externos"),(0,t.kt)("h3",{id:"beecrowd"},"Beecrowd"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("a",{parentName:"li",href:"https://www.beecrowd.com.br/judge/pt/problems/view/1003"},"Beecrowd 1003 - Soma Simples")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("a",{parentName:"li",href:"https://www.beecrowd.com.br/judge/pt/problems/view/1004"},"Beecrowd 1004 - Produto Simples")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("a",{parentName:"li",href:"https://www.beecrowd.com.br/judge/pt/problems/view/1007"},"Beecrowd 1007 - Diferen\xe7a")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("a",{parentName:"li",href:"https://www.beecrowd.com.br/judge/pt/problems/view/3055"},"Beecrowd 3055 - Nota Esquecida ")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("a",{parentName:"li",href:"https://www.beecrowd.com.br/judge/pt/problems/view/2786"},"Beecrowd 2786 - Piso da Escola ")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("a",{parentName:"li",href:"https://www.beecrowd.com.br/judge/pt/problems/view/1021"},"Beecrowd 1021 - Notas e Moedas "))),(0,t.kt)("h2",{id:"refer\xeancias"},"Refer\xeancias"),(0,t.kt)("p",null,"MENEZES, N. N. C. Introdu\xe7\xe3o \xe0 programa\xe7\xe3o com Python: algoritmos e l\xf3gica de programa\xe7\xe3o para iniciantes. 3.ed. S\xe3o Paulo: Novatec, 2019.  "),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Outras refer\xeancias"),"  "),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://fit.faccat.br/~fpereira/apostilas/exerc_resp_alg_mar2007.pdf"},"CARVALHO, F.P. L\xf3gica de programa\xe7\xe3o - Algoritmos: Notas de aula. FIT. Taquara, 2007 "),(0,t.kt)("br",{parentName:"p"}),"\n",(0,t.kt)("a",{parentName:"p",href:"http://docente.ifrn.edu.br/abrahaolopes/semestre-2012.1/1.2411.1v-fundamentos-de-logica-e-algoritmos/lista-de-exercicios-2-operadores-matematicos/at_download/file"},"LOPES, A. Algoritmos: Notas de aula. Mossor\xf3: IFRN, 2011")))}b.isMDXComponent=!0}}]);