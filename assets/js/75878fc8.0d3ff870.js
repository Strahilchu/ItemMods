"use strict";(self.webpackChunkitemmods_docs=self.webpackChunkitemmods_docs||[]).push([[7990],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7867:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},c="Changelog",u={type:"mdx",permalink:"/changelog",source:"@site/src/pages/changelog.md"},p=[{value:"2.0.0-alpha.0",id:"200-alpha0",children:[]}],s={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"changelog"},"Changelog"),(0,o.kt)("h2",{id:"200-alpha0"},"2.0.0-alpha.0"),(0,o.kt)("p",null,"ItemMods has its first birthday! Happy birthday! Come to ",(0,o.kt)("a",{parentName:"p",href:"https://go.linwood.dev/itemmods-discord"},"the discord")," to celebrate this!\nI rewrote the plugin. "),(0,o.kt)("p",null,"Here are the highlights:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Every item and block is in a pack and have its own file in the pack directory"),(0,o.kt)("li",{parentName:"ul"},"GUI improvements: tabs, smaller gui, ..."),(0,o.kt)("li",{parentName:"ul"},"Resource pack generator: The plugin will build a resource pack for you.\nYou only need to add a preset, and the required textures"),(0,o.kt)("li",{parentName:"ul"},"New translation api: It's easier to translate. I added crowdin to give the opinion\nto add their own language to the plugin"),(0,o.kt)("li",{parentName:"ul"},"New docs: I created an own website for the plugin. Here you can see all news, documentation and more. See it ",(0,o.kt)("a",{parentName:"li",href:"https://itemmods.linwood.dev"},"here")),(0,o.kt)("li",{parentName:"ul"},"Remove nms dependency, added nbt api"),(0,o.kt)("li",{parentName:"ul"},"Follow the semantic versioning 2.0: Every version is named in the following schema: MAJOR.MINOR.PATCH.\nThe alpha, beta and release candidates has a number after it (for example 2.0.0-alpha.0)")),(0,o.kt)("p",null,"And here is the first release in 2021 for ItemMods!\nHave fun. The docs are not finished, so please use the discord for questions."),(0,o.kt)("p",null,"Thank you for waiting :)"))}d.isMDXComponent=!0}}]);