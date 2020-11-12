(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{370:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"css-盒模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-盒模型"}},[t._v("#")]),t._v(" CSS 盒模型")]),t._v(" "),a("h2",{attrs:{id:"基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),a("p",[t._v("所有 HTML 元素都可以视为一个盒子，该盒子包括：边距(margin)、边框(border)、填充(padding)和实际内容(content)")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/5/2/171d353493f71013?imageslim",alt:"css盒模型"}})]),t._v(" "),a("h2",{attrs:{id:"标准模型-w3c模型-和-ie-模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标准模型-w3c模型-和-ie-模型"}},[t._v("#")]),t._v(" 标准模型（W3C模型）和 IE 模型")]),t._v(" "),a("p",[t._v("差异：宽高计算方式不同")]),t._v(" "),a("p",[t._v("标准模型：计算元素的宽高只算 content 的宽高")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/5/2/171d3534965bf79d?imageslim",alt:"标准模型"}})]),t._v(" "),a("p",[t._v("IE模型：计算元素的宽高包含 content 、padding、border")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/5/2/171d353496f19dfc?imageslim",alt:"IE模型"}})]),t._v(" "),a("h2",{attrs:{id:"如何设置两种模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何设置两种模型"}},[t._v("#")]),t._v(" 如何设置两种模型")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  // 设置标准模型\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" content-box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  // 设置IE模型\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" border-box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("box-sizing 的默认值是 content-box")]),t._v(" "),a("h2",{attrs:{id:"js-如何设置盒模型的宽高"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-如何设置盒模型的宽高"}},[t._v("#")]),t._v(" JS 如何设置盒模型的宽高")]),t._v(" "),a("p",[t._v("假设已经获取节点 dom")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 只能获取内联样式设置的宽高")]),t._v("\ndom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("height\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取渲染后即使运行的宽高，只支持IE")]),t._v("\ndom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentStyle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("height\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取渲染后即时运行的宽高，兼容性很好")]),t._v("\ndom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getComputedStyle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("height\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取渲染后即使运行的宽高，兼容性很好，一般用来获取元素的绝对位置")]),t._v("\ndom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBoundingClientRect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("height\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);