"use strict";(self.webpackChunkitemmods_docs=self.webpackChunkitemmods_docs||[]).push([[7653],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4351:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={title:"API"},p=void 0,l={unversionedId:"api/intro",id:"version-2.0.0-alpha.1/api/intro",isDocsHomePage:!1,title:"API",description:"The latest build can you find here",source:"@site/versioned_docs/version-2.0.0-alpha.1/api/intro.md",sourceDirName:"api",slug:"/api/intro",permalink:"/fr/docs/api/intro",editUrl:"https://github.com/CodeDoctorDE/ItemMods/edit/develop/docs/versioned_docs/version-2.0.0-alpha.1/api/intro.md",tags:[],version:"2.0.0-alpha.1",frontMatter:{title:"API"},sidebar:"version-2.0.0-alpha.1/api",previous:{title:"Custom model data",permalink:"/fr/docs/api/custom-model-data"}},u=[],s={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The latest build can you find ",(0,a.kt)("a",{parentName:"p",href:"https://ci.codemc.io/job/CodeDoctorDE/job/ItemMods/lastStableBuild/"},"here")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can use maven to get the dependency or can use the jars in the github actions.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"For maven please use this: ",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<project>\n <repositories>\n     <repository>\n         <id>codemc-repo</id>\n         <url>https://repo.codemc.org/repository/maven-public/</url>\n     </repository>\n </repositories>\n <dependencies>\n     <dependency>\n         <groupId>dev.linwood</groupId>\n         <artifactId>ItemMods</artifactId>\n         <version>2.0.0-alpha.0</version>\n     </dependency>\n </dependencies>\n</project>\n"))))),(0,a.kt)("li",{parentName:"ul"},"The documentation about the api can you find ",(0,a.kt)("a",{parentName:"li",href:"/apidocs"},"here"),". Please use the classes in the api package. The ItemModsApi instance can you get with ",(0,a.kt)("inlineCode",{parentName:"li"},"ItemMods.getPlugin().getApi()")),(0,a.kt)("li",{parentName:"ul"},"Custom events:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"CustomBlockPlaceEvent"),(0,a.kt)("li",{parentName:"ul"},"CustomBlockBreakEvent")))))}d.isMDXComponent=!0}}]);