(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{497:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"code-splitting-是什么以及为什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-splitting-是什么以及为什么"}},[t._v("#")]),t._v(" Code Splitting 是什么以及为什么")]),t._v(" "),a("p",[t._v("在以前，为了减少 HTTP 请求，通常我们会把所有的代码都打包成一个单独的 JS 文件。但是如果这个 JS 文件的体积太大的话，就会让整个请求体体积过大，从而降低请求响应的速度，那就得不偿失了。")]),t._v(" "),a("p",[t._v("这时，我们不妨把所有代码分成一块一块，需要某块代码的时候再去加载它；还可以利用浏览器的缓存，下次用到它的时候，直接从缓存中读取。很显然，这种方式可以加快我们网页的加载速度。")]),t._v(" "),a("p",[t._v("所以说，Code Splitting 其实就是把代码分成很多很多块（chunk）。")]),t._v(" "),a("h1",{attrs:{id:"怎么做"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#怎么做"}},[t._v("#")]),t._v(" 怎么做")]),t._v(" "),a("p",[t._v("代码切割的主要方式有两种：")]),t._v(" "),a("ul",[a("li",[t._v("分离业务代码和第三方库（vendor）")]),t._v(" "),a("li",[t._v("按需加载（利用 "),a("code",[t._v("import()")]),t._v(" 语法）")])]),t._v(" "),a("p",[t._v("之所以把业务代码和第三方代码分离出来，是因为业务的需求是源源不断的，因此业务代码更新频率更高；相反，第三方库更新迭代相对较慢，有时还会锁版本，所以可以充分利用浏览器的缓存来加载这些第三方库。")]),t._v(" "),a("p",[t._v("而按需加载的使用场景，比如说「访问某个路由的时候再去加载相应的组件」，用户不一定一访问所有的路由，所以没必要把所有路由对应的组件都在开始的时候加载完毕。更典型的例子是「某些用户他们的权限只能访问特定的页面」，所以更没必要把他们没有权限的组件加载进来。")]),t._v(" "),a("h1",{attrs:{id:"准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[t._v("#")]),t._v(" 准备工作")]),t._v(" "),a("p",[t._v("我用 React 写了一个 "),a("a",{attrs:{href:"https://github.com/LaamGinghong/webpack-demo",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo"),a("OutboundLink")],1),t._v(" ，他在页面输出一句Hello world。")]),t._v(" "),a("p",[t._v("接下来，看看第一次打包情况：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/LaamGinghong/pics/master/img/20200903154932.png",alt:""}})]),t._v(" "),a("p",[t._v("可以看到，当前只有一个 chunk，也就是 app.js，它是一个 entry chunk。因为我们的 webpack 配置是这样子的：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// webpack.config.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    app"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../src/index.tsx'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// entry chunk")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("app.js 包含了我们的第三方库 react 和 react-dom，以及我们的业务代码 src。")]),t._v(" "),a("p",[t._v("接下来我们把它们分离开来。")]),t._v(" "),a("h1",{attrs:{id:"分离-vendor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分离-vendor"}},[t._v("#")]),t._v(" 分离 Vendor")]),t._v(" "),a("p",[t._v("最简单的方法就是：增加一个 entry")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// webpack.config.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    app"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../src/index.tsx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    vendor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react-dom'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("来分析一下打包：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/LaamGinghong/pics/master/img/20200903155129.png",alt:""}})]),t._v(" "),a("p",[t._v("虽然 vendor.js 这个 chunk 包含了我们想要的 react 和 react-dom，但是 app.js 却没有忽略他们。")]),t._v(" "),a("p",[t._v("这是因为，每个 entry 都有自己的依赖，我们想要把 react 和 re-dom 等第三方依赖提取出来，就需要找出它们相同的依赖，就像这样：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic2.zhimg.com/80/v2-12ac7011458a1e5de5e8316c29ad274f_720w.png",alt:"img"}})]),t._v(" "),a("p",[t._v("如果想要提取公共模块的话，就需要用到  optimization.splitChunks。")]),t._v(" "),a("h2",{attrs:{id:"optimization-splitchunks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optimization-splitchunks"}},[t._v("#")]),t._v(" optimization.splitChunks")]),t._v(" "),a("p",[t._v("现在我们修改 webpack 配置：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  optimization"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    splitChunks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      chunks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'all'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      cacheGroups"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        vendors"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("[\\\\/]node_modules[\\\\/]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" priority"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("其中 splitChunks 中的配置具体可以参考 "),a("a",{attrs:{href:"https://www.webpackjs.com/plugins/split-chunks-plugin/",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack 官网"),a("OutboundLink")],1),t._v(" ，我这里采用的配置是所有针对所有模块进行拆分，同时将 node_modules 中的依赖放到 vendors.js 里面，你也可以进行修改，只对异步模块进行拆分。")]),t._v(" "),a("p",[t._v("我们看下打包的结果：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/LaamGinghong/pics/master/img/20200903155800.png",alt:""}})]),t._v(" "),a("p",[t._v("我们可以看到，app.js 里面的 react 和 react-dom 已经拆分到了 vendors 中。")]),t._v(" "),a("h1",{attrs:{id:"dynamic-import"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-import"}},[t._v("#")]),t._v(" Dynamic Import")]),t._v(" "),a("p",[t._v("由于产品经理加了新的需求，我们的 demo 新增了路由。")]),t._v(" "),a("p",[t._v("同时我们的打包：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/LaamGinghong/pics/master/img/20200903160048.png",alt:""}})]),t._v(" "),a("p",[t._v("我们新增的 react-router 自动打包到了 vendors 中，但是我们的主包 app.js 却将所有路由文件都打包到一个文件中，这不符合我们的按需加载的想法。")]),t._v(" "),a("h2",{attrs:{id:"react-lazy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-lazy"}},[t._v("#")]),t._v(" React.lazy()")]),t._v(" "),a("p",[t._v("webpack 可以针对两种语法进行拆分：")]),t._v(" "),a("ul",[a("li",[t._v("ESM 的 "),a("code",[t._v("import()")]),t._v(" 语法")]),t._v(" "),a("li",[a("code",[t._v("webpack.ensure")])])]),t._v(" "),a("p",[t._v("我们使用 React 官方的 "),a("code",[t._v("React.lazy")]),t._v(" ，它是基于 "),a("code",[t._v("webpack.ensure")]),t._v(" ，我们修改路由配置：")]),t._v(" "),a("div",{staticClass:"language-tsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-tsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lazy "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Redirect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Route"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Switch "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react-router'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Home "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lazy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./home/home'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Person "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lazy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./person/person'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" School "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lazy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./school/school'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Root"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("FC")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Switch")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n      ")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Route")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("exact")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[a("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Redirect")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("to")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("/home"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n      ")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Route")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("/home"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[a("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Home"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n      ")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Route")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("/person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[a("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n      ")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Route")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("/school"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[a("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("School"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n    ")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Switch")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" Root\n")])])]),a("p",[t._v("在修改 webpack 配置文件")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  output"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../dist'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[name].[chunkhash].bundle.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    chunkFilename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[name].[chunkhash].bundle.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("为每一个 chunk 添加了 hash，利于以后做缓存。")]),t._v(" "),a("p",[t._v("如果你使用了 babel，需要安装 "),a("a",{attrs:{href:"https://www.npmjs.com/package/babel-plugin-syntax-dynamic-import",target:"_blank",rel:"noopener noreferrer"}},[t._v("babel-plugin-syntax-dynamic-import"),a("OutboundLink")],1),t._v(" 来解析 "),a("code",[t._v("import()")]),t._v(" 语法，修改 .babelrc：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"plugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"syntax-dynamic-import"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("看一下打包情况：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/LaamGinghong/pics/master/img/20200903161828.png",alt:""}})]),t._v(" "),a("p",[t._v("可以看到，除了主包 app.js 以外，已经额外分离出了三个单独的 chunk，分别对应了我们的三个路由组件。")]),t._v(" "),a("p",[t._v("但是引发了额外的问题，那便是之前在主包已经拆分好的 vendor，在 chunk 中失效了，某一些依赖是多个 chunk 公用的，这时候这些依赖理应在 vendor.js 中，而不应该是每一个 chunk 都有自己的依赖。")]),t._v(" "),a("p",[t._v("但其实问题不大，原因在于 webpack 在抽取公用模块的时候，会对被抽取的模块大小进行判断，模式最小被抽取的大小是 30kb，当然我们修改已达到最小细粒度的复用，这完全靠调用方自己把控。")]),t._v(" "),a("p",[t._v("这里我们把最小大小修改为 0，即所有模块都会被抽取，我们看一下打包后的样子：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/LaamGinghong/pics/master/img/20200903162229.png",alt:""}})]),t._v(" "),a("h1",{attrs:{id:"分离业务公共模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分离业务公共模块"}},[t._v("#")]),t._v(" 分离业务公共模块")]),t._v(" "),a("p",[t._v("不单只是第三方依赖，通常我们在写业务代码的时候，也会抽离一些代码放到公共模块中。")]),t._v(" "),a("p",[t._v("细心的读者应该可以看到上图 3，4，5 chunk 里面都包含了 Button，如果类似的公共组件一多起来，就会产生很多重复的代码，所以我们也应该将这些重复代码打包到一个公共的模块里面去。")]),t._v(" "),a("p",[t._v("实现方式和上面一致：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  optimization"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    splitChunks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      chunks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'all'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      cacheGroups"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        vendors"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("[\\\\/]node_modules[\\\\/]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          priority"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          minSize"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" minChunks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" priority"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reuseExistingChunk"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这样，当 webpack 打包的时候，在所有异步 chunk 中引入次数大于等于 2 的模块，webpack 就会把它打包到 default.js chunk 中。（由于 demo 中我们的公用组件大小太小，所以我对公用 chunk 大小修改 0 以方便观察）。")]),t._v(" "),a("p",[t._v("最后我们打包的结果是：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/LaamGinghong/pics/master/img/20200903162606.png",alt:""}})]),t._v(" "),a("p",[t._v("Perfect，这就是我们想要的效果。")]),t._v(" "),a("blockquote",[a("p",[t._v("ps：由于有一个 chunk 太小导致图中没有显示出来，实际上图中一共有 6 个子 chunk。")])]),t._v(" "),a("h1",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("blockquote",[a("p",[t._v("你的 Code Splitting = webpack bundle analyzer + optimization.splitChunks + 你的分析")])]),t._v(" "),a("p",[t._v("我们做代码切割的目的，就是为了充分利用浏览器的缓存，以及首屏的极限优化达到按需加载的效果。")])])}),[],!1,null,null,null);s.default=e.exports}}]);