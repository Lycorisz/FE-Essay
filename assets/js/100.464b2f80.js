(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{454:function(t,a,v){"use strict";v.r(a);var _=v(42),r=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"性能优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#性能优化"}},[t._v("#")]),t._v(" 性能优化")]),t._v(" "),v("h2",{attrs:{id:"问题分析"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#问题分析"}},[t._v("#")]),t._v(" 问题分析")]),t._v(" "),v("p",[t._v("优化方向有两个：")]),t._v(" "),v("ul",[v("li",[t._v("HTTP 请求")]),t._v(" "),v("li",[t._v("JS 加载")])]),t._v(" "),v("p",[t._v("打开浏览器控制台的网络，可以看到从拉取模版开始到首次渲染中间到底在加载什么，如果中间某些资源加载速度过慢，则可以从这方面入手，否则的话有可能是解析 js 速度过慢导致。")]),t._v(" "),v("h2",{attrs:{id:"请求优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#请求优化"}},[t._v("#")]),t._v(" 请求优化")]),t._v(" "),v("h3",{attrs:{id:"合理使用缓存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#合理使用缓存"}},[t._v("#")]),t._v(" 合理使用缓存")]),t._v(" "),v("p",[t._v("合理使用缓存，降低请求等待的时间，可以通过达到性能优化。")]),t._v(" "),v("h3",{attrs:{id:"cdn-内容分发"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cdn-内容分发"}},[t._v("#")]),t._v(" CDN 内容分发")]),t._v(" "),v("p",[t._v("将非核心资源通过 CDN 的方式进行分发，例如使用的第三方库（React、Vue、地图等），可以有效减小请求包的体积，同时稳定高速的 CDN 服务器也可以加快请求的速度。")]),t._v(" "),v("p",[t._v("CDN 通常会配合异步加载一起使用。")]),t._v(" "),v("h3",{attrs:{id:"图片优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#图片优化"}},[t._v("#")]),t._v(" 图片优化")]),t._v(" "),v("p",[t._v("使用合适的图片格式作为网站的图片，比如 WebP。具体看"),v("a",{attrs:{href:"https://github.com/i-want-offer/FE-Interview-questions/blob/master/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96/Web%E5%9B%BE%E7%89%87%E4%BC%98%E5%8C%96.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("图片优化"),v("OutboundLink")],1),t._v(" 。")]),t._v(" "),v("h3",{attrs:{id:"http-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-2"}},[t._v("#")]),t._v(" HTTP/2")]),t._v(" "),v("p",[t._v("随着时间的推移，迁移到 HTTP/2 是不可避免的。目前浏览器对于 HTTP/2 的支持度都非常友好，同时相对于 HTTP/1，HTTP/2 在性能上有着非常显著的提升。详细见"),v("a",{attrs:{href:"https://github.com/i-want-offer/FE-Interview-questions/blob/master/%E5%89%8D%E5%90%8E%E7%AB%AF%E9%80%9A%E4%BF%A1/HTTP%E7%89%88%E6%9C%AC.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP版本"),v("OutboundLink")],1)]),t._v(" "),v("h3",{attrs:{id:"资源压缩"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#资源压缩"}},[t._v("#")]),t._v(" 资源压缩")]),t._v(" "),v("p",[t._v("目前浏览器大多都支持对压缩资源进行加载，比如 js、css 的 gzip。开启压缩后，会让资源的体积减小，从而降低请求时间。")]),t._v(" "),v("h2",{attrs:{id:"加载优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#加载优化"}},[t._v("#")]),t._v(" 加载优化")]),t._v(" "),v("h3",{attrs:{id:"将-css-放在文件头部-javascript-放在文件底部"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#将-css-放在文件头部-javascript-放在文件底部"}},[t._v("#")]),t._v(" 将 CSS 放在文件头部，JavaScript 放在文件底部")]),t._v(" "),v("p",[t._v("CSS 和 JS 都会阻塞 HTML 的渲染，如果这些 CSS 和 JS 需要加载和解析很久的话，那么页面就空白了。所以 JS 文件要放在底部，等 HTML 解析完了再加载 JS 文件。但是为什么 CSS 还是要放在头部呢，因为如果先加载 HTML 再加载 CSS，会让用户第一时间看到的页面是没有样式的、丑陋的，为了避免这种情况，所以要降 CSS 放在文件头部。")]),t._v(" "),v("p",[t._v("不过目前这些操作都已经可以交给打包工具来完成。")]),t._v(" "),v("h3",{attrs:{id:"拆包"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#拆包"}},[t._v("#")]),t._v(" 拆包")]),t._v(" "),v("p",[t._v("在不配置拆包的情况下，Webpack 会将所有的资源都打包在一个 js 文件中，这无疑会让请求时候的响应体积变得非常大，从而降低加载速度。")]),t._v(" "),v("p",[t._v("同时，不配置拆包，会在首次加载的时候加载一些无关的资源，浪费了一次宝贵的请求。")]),t._v(" "),v("p",[t._v("合理配置拆包，让每次请求都只请求对应的核心资源，从而达到按需加载的程度。")]),t._v(" "),v("p",[t._v("拆包通常的逻辑：")]),t._v(" "),v("ul",[v("li",[t._v("业务代码和第三方依赖进行拆分")]),t._v(" "),v("li",[t._v("对于第三方依赖：\n"),v("ul",[v("li",[t._v("将版本经常变动的与版本不怎么变动的进行拆分")]),t._v(" "),v("li",[t._v("版本不怎么变动的依赖可以合理配置 CDN")])])]),t._v(" "),v("li",[t._v("对于业务代码：\n"),v("ul",[v("li",[t._v("将业务模块和公共模块进行拆分")]),t._v(" "),v("li",[t._v("业务模块也根据调用的次数进行拆分")]),t._v(" "),v("li",[t._v("将首屏模块单独进行拆分")])])])]),t._v(" "),v("h3",{attrs:{id:"异步加载"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#异步加载"}},[t._v("#")]),t._v(" 异步加载")]),t._v(" "),v("p",[t._v("非核心的资源不需要在拉取模版之后立马就加载，可以使用异步加载，让这些非核心资源在视图构建完毕以后再进行加载。")]),t._v(" "),v("h3",{attrs:{id:"预加载"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#预加载"}},[t._v("#")]),t._v(" 预加载")]),t._v(" "),v("p",[t._v("与首屏优化一样，路由跳转优化也是非常关键。我们可以通过判断是否需要进行路由跳转，在跳转之前做一些提前加载，从而达到跳转完成之后，资源立马加载完毕的效果从而提升加载速度。")]),t._v(" "),v("h3",{attrs:{id:"合理配置打包版本"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#合理配置打包版本"}},[t._v("#")]),t._v(" 合理配置打包版本")]),t._v(" "),v("p",[t._v("首先我们需要明确一点，一般情况下，随着新标准的制定，浏览器厂商通常会着重对新标准的性能进行优化，而老标准的优化频率会慢慢降低，所以，我们编码的目标便是面向未来编程。")]),t._v(" "),v("p",[t._v("另外，目前我们主要是用 ES6+ 或 TS 进行编码，经过打包工具构建之后，性能往往比不上手写的代码，虽然随着工具的升级，性能会越来越好，但是编译后的代码，尤其是对 class 代码的编译，性能下降是非常明显的。")]),t._v(" "),v("p",[t._v("最后，编译后代码的体积会出现膨胀的情况，编译器使用了很多技巧来将 es6 转换成 es5，所以使用 es6 版本会让体积更小。")]),t._v(" "),v("p",[t._v("目前主流浏览器对于 ES6 的支持越来越好，打包的时候可以设置两个构建，对于支持度较好的浏览器版本，使用更高级的版本，从而达到减小包的体积来达到更快的加载速度。")]),t._v(" "),v("p",[t._v("同时，可以使用 "),v("code",[t._v('<script type="module"><\/script>')]),t._v(" 的方式来实现动态加载 es6 代码，详情可以查看随着 Vue3 一起发布的 Vite。")]),t._v(" "),v("h3",{attrs:{id:"摇树"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#摇树"}},[t._v("#")]),t._v(" 摇树")]),t._v(" "),v("p",[t._v("我们可能在编码过程中会书写一些无用代码，但是这些无用代码却会被打包构建工具与核心资源打包在一起，这无疑会增大请求时相应的体积，从而影响我们加载的速度。所以在打包过程中使用摇树的方式，可以将无用的代码清除，从而减小包的体积来达到性能提升。")]),t._v(" "),v("h3",{attrs:{id:"多线程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#多线程"}},[t._v("#")]),t._v(" 多线程")]),t._v(" "),v("p",[t._v("现代浏览器大都支持 Worker，这是一种浏览器实现多线程的方式，他可以与 JS 线程、GUI 线程同时运行，通过 Worker，我们可以将一些复杂繁琐的操作交给子线程来完成，从而避免渲染线程的阻塞，来达到性能的优化。")]),t._v(" "),v("p",[t._v("但是，线程之间的通信是需要消耗时间的，所以多线程技术应该合理地使用。")]),t._v(" "),v("h3",{attrs:{id:"使用外链样式而非内联样式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用外链样式而非内联样式"}},[t._v("#")]),t._v(" 使用外链样式而非内联样式")]),t._v(" "),v("p",[t._v("浏览器对于外链样式处理的速度会比内联样式更快，这也是为什么 style-components 这么火的原因。")]),t._v(" "),v("p",[t._v("同时优先使用浏览器的 html 标签 link，而不是 css 中的 @import，原因在于 link 的加载是和 GUI 线程并行的，但是 "),v("code",[t._v("@import")]),t._v(" 需要等待 HTML 完全处理完成之后再进行加载。")]),t._v(" "),v("h2",{attrs:{id:"体验优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#体验优化"}},[t._v("#")]),t._v(" 体验优化")]),t._v(" "),v("h3",{attrs:{id:"骨架屏"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#骨架屏"}},[t._v("#")]),t._v(" 骨架屏")]),t._v(" "),v("p",[t._v("使用 loading 图或者是骨架屏，可以一定程度上减少用户等待加载的焦虑感，让用户感觉没有等太久，这就是用户体验级的优化。")]),t._v(" "),v("h3",{attrs:{id:"服务端渲染"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#服务端渲染"}},[t._v("#")]),t._v(" 服务端渲染")]),t._v(" "),v("p",[t._v("在条件允许的情况下，将客户端渲染迁移到服务端渲染，利用服务端高性能的表现，可以实现用户拉去到模版之后立马显示视图，省去中间 JS 加载的过程。")]),t._v(" "),v("h3",{attrs:{id:"动画"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#动画"}},[t._v("#")]),t._v(" 动画")]),t._v(" "),v("p",[t._v("直接操作 DOM，有可能会引起大面积的重排和重绘，从而引起掉帧的情况，导致用户体验下降。")]),t._v(" "),v("p",[t._v("合理使用 CSS3 GPU 加速，可以避免使用动画之后的重排和重绘，达到更流畅的动画效果。")]),t._v(" "),v("p",[t._v("有一说一，开启 CSS3 GPU 加速是非常消耗功耗的，所以在移动端上面谨慎使用。")]),t._v(" "),v("h3",{attrs:{id:"虚拟滚动"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#虚拟滚动"}},[t._v("#")]),t._v(" 虚拟滚动")]),t._v(" "),v("p",[t._v("我们知道，页面进行滚动的时候，也会触发浏览器的重排，如果此时前端需要渲染大量数据，而且还不允许分页，这种情况下会导致浏览器的掉帧、卡顿甚至假死的情况。")]),t._v(" "),v("p",[t._v("这种情况下，如果不能使用分页进行优化，通常我们会使用虚拟滚动的方式来解决问题。")]),t._v(" "),v("p",[t._v("因为 DOM 元素的创建和渲染需要的时间成本很高，在大数据的情况下，完成渲染列表所需要的时间不可接受，所以我们可以只渲染可视区域，从而达到极高的初次渲染性能。")])])}),[],!1,null,null,null);a.default=r.exports}}]);