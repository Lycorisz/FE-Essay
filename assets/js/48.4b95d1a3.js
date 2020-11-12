(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{402:function(t,s,a){"use strict";a.r(s);var v=a(42),n=Object(v.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"执行上下文-ec"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文-ec"}},[t._v("#")]),t._v(" 执行上下文（EC）")]),t._v(" "),a("blockquote",[a("p",[t._v("执行上下文可以简单理解为一个对象")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("它包含"),a("strong",[t._v("三部分")])]),t._v(" "),a("ul",[a("li",[t._v("变量对象（VO）")]),t._v(" "),a("li",[t._v("作用域链（词法作用域）")]),t._v(" "),a("li",[t._v("this 指向")])])]),t._v(" "),a("li",[a("p",[t._v("它的"),a("strong",[t._v("类型")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("全局执行上下文")]),t._v(" "),a("li",[t._v("函数执行上下文")]),t._v(" "),a("li",[t._v("eval 执行上下文")])])]),t._v(" "),a("li",[a("p",[t._v("代码执行"),a("strong",[t._v("过程")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("创建 "),a("strong",[t._v("全局上下文")]),t._v("（global EC）")]),t._v(" "),a("li",[t._v("全局执行上下文（caller）"),a("strong",[t._v("自上而下")]),t._v(" 逐行执行。遇到函数时，"),a("strong",[t._v("函数执行上下文")]),t._v("（callee）被 push 到执行栈顶")]),t._v(" "),a("li",[t._v("函数执行上下文被激活，成为 active EC，开始执行函数中的代码，caller 被挂起")]),t._v(" "),a("li",[t._v("函数执行完后，callee 被 pop 移除出执行栈，控制权交还给全局上下文（caller）继续执行")])])])]),t._v(" "),a("h2",{attrs:{id:"变量对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量对象"}},[t._v("#")]),t._v(" 变量对象")]),t._v(" "),a("p",[t._v("变量对象是执行上下文中的一部分，可以抽象为一种 "),a("strong",[t._v("数据作用域")]),t._v("，其实也可以理解为就是一个简单的对象，他存储遮盖执行上下文中所有的 "),a("strong",[t._v("变量和函数声明（不包含函数表达式）")])]),t._v(" "),a("blockquote",[a("p",[t._v("活动对象（AO）：当变量对象所处的上下文为 active EC 时，被称为活动对象")])]),t._v(" "),a("h2",{attrs:{id:"作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用域"}},[t._v("#")]),t._v(" 作用域")]),t._v(" "),a("p",[t._v("执行上下文中还包含作用域链。")]),t._v(" "),a("p",[t._v("作用域可以理解为该上下文中声明的 "),a("strong",[t._v("变量和声明的作用范围")]),t._v("，可分为 "),a("strong",[t._v("块级作用域")]),t._v(" 和 "),a("strong",[t._v("函数作用域")])]),t._v(" "),a("p",[t._v("特性：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("声明提前")]),t._v("：一个声明在函数体内都是可见的，函数优先于变量")]),t._v(" "),a("li",[t._v("非匿名自执行函数，函数变量为 "),a("strong",[t._v("只读")]),t._v(" 状态，无法修改")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 由于 foo 在函数中是只读的，因此赋值无效")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 结果打印：  ƒ foo() { foo = 10 ; console.log(foo) }")]),t._v("\n")])])]),a("h2",{attrs:{id:"作用域链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用域链"}},[t._v("#")]),t._v(" 作用域链")]),t._v(" "),a("p",[t._v("作用域链使得我们可以在执行上下文中访问父级甚至全局的变量。作用域链可以理解为一组对象列表，包含 "),a("strong",[t._v("父级和自身的变量对象")]),t._v("，它由两部分组成：")]),t._v(" "),a("ul",[a("li",[t._v("[[scope]] 属性：指向父级变量对象和作用域链，也就是包含了父级的 [[scope]] 和 AO")]),t._v(" "),a("li",[t._v("AO：自身活动对象")])]),t._v(" "),a("p",[t._v("如此，便形成一条自上而下的 "),a("strong",[t._v("链式作用域")])]),t._v(" "),a("h2",{attrs:{id:"闭包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包"}},[t._v("#")]),t._v(" 闭包")]),t._v(" "),a("p",[t._v("闭包属于一种特殊的作用域，称之为 "),a("strong",[t._v("静态作用域")]),t._v("。他的定义可以理解为："),a("strong",[t._v("父函数被销毁")]),t._v(" 的情况下，返回的子函数的 [[scope]] 中仍然保留着父级的单变量对象和作用域链，因此可以继续访问到父级的变量对象，这样的函数称之为闭包")]),t._v(" "),a("h3",{attrs:{id:"闭包的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包的作用"}},[t._v("#")]),t._v(" 闭包的作用")]),t._v(" "),a("ul",[a("li",[t._v("外部可以读取函数内部的变量")]),t._v(" "),a("li",[t._v("让函数内部的变量一直保持不被销毁")])]),t._v(" "),a("h3",{attrs:{id:"经典问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#经典问题"}},[t._v("#")]),t._v(" 经典问题")]),t._v(" "),a("blockquote",[a("p",[t._v("多个子函数的 [[scope]] 都是同时指向父级，是完全共享的。因此当父级的变量对象被修改时，所有子函数都受到影响")])]),t._v(" "),a("p",[t._v("解决：")]),t._v(" "),a("ul",[a("li",[t._v("变量可以通过 "),a("strong",[t._v("函数参数的形式")]),t._v(" 传入，避免使用默认的 [[scope]] 向上查找")]),t._v(" "),a("li",[t._v("使用 setTimeout 包裹，通过第三个参数传入")]),t._v(" "),a("li",[t._v("使用 "),a("strong",[t._v("块级作用域")]),t._v("，让变量成为自己上下文的属性，避免共享")])])])}),[],!1,null,null,null);s.default=n.exports}}]);