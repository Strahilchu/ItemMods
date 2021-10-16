"use strict";(self.webpackChunkitemmods_docs=self.webpackChunkitemmods_docs||[]).push([[3112],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6202:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={title:"Preset"},s=void 0,l={unversionedId:"user/preset",id:"user/preset",isDocsHomePage:!1,title:"Preset",description:"The preset directory is the preset for the resource pack. Here you can configure the pack.mcmeta and all",source:"@site/docs/user/preset.md",sourceDirName:"user",slug:"/user/preset",permalink:"/docs/next/user/preset",editUrl:"https://github.com/CodeDoctorDE/ItemMods/edit/develop/docs/docs/user/preset.md",tags:[],version:"current",frontMatter:{title:"Preset"},sidebar:"user",previous:{title:"Pack",permalink:"/docs/next/user/pack"},next:{title:"Supported",permalink:"/docs/next/user/supported"}},p=[{value:"Create the preset",id:"create-the-preset",children:[],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The preset directory is the preset for the resource pack. Here you can configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"pack.mcmeta")," and all\nmodels/textures and everything else."),(0,a.kt)("h2",{id:"create-the-preset"},"Create the preset"),(0,a.kt)("p",null,"You need this folder structure to have a working resource pack. If you have an item with the fallback texture diamond,\nyou need to have a ",(0,a.kt)("inlineCode",{parentName:"p"},"diamond.json"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"\u251c\u2500\u2500 pack.mcmeta \u2514\u2500\u2500 assets \u2514\u2500\u2500 minecraft \u2514\u2500\u2500 models \u2514\u2500\u2500 item \u2514\u2500\u2500 diamond.json\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"pack.mcmeta")," needs to have this content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="pack.mcmeta"',title:'"pack.mcmeta"'},'{\n  "pack": {\n    "description": "The name of the resource pack",\n    "pack_format": 7\n  }\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"diamond.json")," needs to have the same content as the default texture of minecraft."),(0,a.kt)("p",null,"To get this done, you need an archive reader like 7-zip or WinRAR."),(0,a.kt)("p",null,"Then you need to locate to your minecraft client jar which is normally located\nin ",(0,a.kt)("inlineCode",{parentName:"p"},"%appdata%/.minecraft/versions/VERSION/VERSION.jar"),"\n(You need to replace the VERSION with the version which you used to connect to the server)."),(0,a.kt)("p",null,"In the jar archive you will find a ",(0,a.kt)("inlineCode",{parentName:"p"},"assets")," directory. There you need to copy the same file. If you have the diamond\nfallback texture you need to copy the file in ",(0,a.kt)("inlineCode",{parentName:"p"},"assets/minecraft/models/item/diamond.json"),"."),(0,a.kt)("p",null,"The model file should be similar to this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="assets/minecraft/models/item/diamond.json"',title:'"assets/minecraft/models/item/diamond.json"'},'{\n  "parent": "minecraft:item/generated",\n  "textures": {\n    "layer0": "minecraft:item/diamond"\n  }\n}\n')),(0,a.kt)("p",null,"If you have a block fallback texture like a grass block, the model file is in the block subdirectory, for\nexample ",(0,a.kt)("inlineCode",{parentName:"p"},"assets/minecraft/models/block/grass_block.json"),"."))}m.isMDXComponent=!0}}]);