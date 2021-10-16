"use strict";(self.webpackChunkitemmods_docs=self.webpackChunkitemmods_docs||[]).push([[2903],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6773:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={title:"2.0.0-alpha.0 released",author:"CodeDoctorDE",author_title:"Core maintainer",author_url:"https://github.com/CodeDoctorDE",author_image_url:"https://avatars.githubusercontent.com/u/20452814?v=4",tags:["alpha","released","itemmods","birthday"]},s=void 0,u={permalink:"/zh/blog/2021/09/05/2.0.0-alpha.0-released",editUrl:"https://github.com/CodeDoctorDE/ItemMods/edit/develop/docs/blog/blog/2021-09-05-2.0.0-alpha.0-released.md",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021-09-05-2.0.0-alpha.0-released.md",title:"2.0.0-alpha.0 released",description:"ItemMods has its first birthday! Happy birthday! Come to the discord to",date:"2021-09-05T00:00:00.000Z",formattedDate:"September 5, 2021",tags:[{label:"alpha",permalink:"/zh/blog/tags/alpha"},{label:"released",permalink:"/zh/blog/tags/released"},{label:"itemmods",permalink:"/zh/blog/tags/itemmods"},{label:"birthday",permalink:"/zh/blog/tags/birthday"}],readingTime:.91,truncated:!1,authors:[{name:"CodeDoctorDE",title:"Core maintainer",url:"https://github.com/CodeDoctorDE",imageURL:"https://avatars.githubusercontent.com/u/20452814?v=4"}],prevItem:{title:"2.0.0-alpha.1 released",permalink:"/zh/blog/2021/09/15/2.0.0-alpha.1-released"}},c={authorsImageUrls:[void 0]},p=[],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ItemMods has its first birthday! Happy birthday! Come to ",(0,o.kt)("a",{parentName:"p",href:"https://go.linwood.dev/itemmods-discord"},"the discord")," to\ncelebrate this! I rewrote the plugin."),(0,o.kt)("p",null,"Here are the highlights:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Every item and block is in a pack and have its own file in the pack directory"),(0,o.kt)("li",{parentName:"ul"},"GUI improvements: tabs, smaller gui, ..."),(0,o.kt)("li",{parentName:"ul"},"Resource pack generator: The plugin will build a resource pack for you. You only need to add a preset, and the\nrequired textures"),(0,o.kt)("li",{parentName:"ul"},"New translation api: It's easier to translate. I added crowdin to give the opinion to add their own language to the\nplugin"),(0,o.kt)("li",{parentName:"ul"},"New docs: I created an own website for the plugin. Here you can see all news, documentation and more. See\nit ",(0,o.kt)("a",{parentName:"li",href:"https://itemmods.linwood.dev"},"here")),(0,o.kt)("li",{parentName:"ul"},"Remove nms dependency, added nbt api"),(0,o.kt)("li",{parentName:"ul"},"Follow the semantic versioning 2.0: Every version is named in the following schema: MAJOR.MINOR.PATCH. The alpha, beta\nand release candidates has a number after it (for example 2.0.0-alpha.0)")),(0,o.kt)("p",null,"And here is the first release in 2021 for ItemMods! Have fun. The docs are not finished, so please use the discord for\nquestions."),(0,o.kt)("p",null,"Thank you for waiting :)"))}m.isMDXComponent=!0}}]);