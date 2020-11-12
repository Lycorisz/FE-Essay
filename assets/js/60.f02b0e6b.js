(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{414:function(t,e,a){"use strict";a.r(e);var s=a(42),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"重学-reflect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重学-reflect"}},[t._v("#")]),t._v(" 重学 Reflect")]),t._v(" "),a("p",[t._v("之前完全没有了解过 Reflect，实际开发中也几乎没有用过这个ES6的新内置对象，面试中也没有遇到过问这个的。但是了解更多总是没有错，这个内置对象在框架开发上还是挺常见的。")]),t._v(" "),a("h2",{attrs:{id:"概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),a("p",[t._v("Reflect 不是一个构造函数，所以使用时不需要用 "),a("code",[t._v("new")]),t._v(" 来进行创建。")]),t._v(" "),a("p",[t._v("Reflect 字面意思是反射，比较晦涩难懂，ES6新增这个对象的主要目的是：")]),t._v(" "),a("ul",[a("li",[t._v("将 Object 对象的一些明显属于语言内部的方法（比如 "),a("code",[t._v("Object.defineProperty")]),t._v(" ）放到 Reflect 对象上。现阶段，某些方法同时部署在两个对象上，未来新方法只会部署在 Reflect 对象上。也就是说，从 Reflect 对象上可以拿到语言内部的方法；")]),t._v(" "),a("li",[t._v("修改某些 Object 方法的返回结果，让其变得更合理。比如："),a("code",[t._v("Object.defineProperty")]),t._v(" 在无法定义属性时会抛出一个错误，而 "),a("code",[t._v("Reflect.defineProperty")]),t._v(" 则会返回 false；")]),t._v(" "),a("li",[t._v("让 Object 操作都变成函数行为。某些 Object 操作是命令行为，比如 "),a("code",[t._v("key in obj")]),t._v(" 和 "),a("code",[t._v("delete obj[key]")]),t._v(" ，而 "),a("code",[t._v("Reflect.has(obj, name)")]),t._v(" 和 "),a("code",[t._v("Reflect.delete(obj, name)")]),t._v(" 让它们变成函数行为；")]),t._v(" "),a("li",[t._v("Reflect 对象的方法与 Proxy 对象的方法一一对应，只要是 Proxy 对象的方法，就能在 Reflect 对象上找到对应的方法。这就让 Proxy 对象可以方便地调用对应的 Reflect 方法，完成默认行为，作为修改行为的基础。也就是说，不管 Proxy 怎么修改默认行为，你总可以在 Reflect 上获取默认行为。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" loggedObj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Proxy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'get'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Reflect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("deleteProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'delete'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Reflect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("deleteProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("has")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'has'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Reflect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("has")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("上面代码中，每一个 Proxy 对象的拦截操作（get、delete、has）内部都调用对应的 Reflect 方法，保证原生行为能够正常执行。添加的工作，就是将每一个操作输出一行日志。")]),t._v(" "),a("h2",{attrs:{id:"静态-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态-api"}},[t._v("#")]),t._v(" 静态 API")]),t._v(" "),a("p",[t._v("Reflect 拥有 13 个静态 API，其大部分与 Object 对象的同名方法作用都是相同的，而且它与 Proxy 对象的方法是一一对应的。")]),t._v(" "),a("h3",{attrs:{id:"reflect-apply"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reflect-apply"}},[t._v("#")]),t._v(" "),a("code",[t._v("Reflect.apply()")])]),t._v(" "),a("p",[t._v("通过制定的参数列表发起对目标函数的调用。该方法接受三个参数：")]),t._v(" "),a("ul",[a("li",[t._v("target：目标函数")]),t._v(" "),a("li",[t._v("thisArgument：target 函数调用时绑定的 this 对象")]),t._v(" "),a("li",[t._v("argumentsList：目标函数调用时传入的实参")])]),t._v(" "),a("p",[t._v("该方法与 "),a("code",[t._v("Function.prototype.apply")]),t._v(" 类似，但是更加通俗易懂。")]),t._v(" "),a("h3",{attrs:{id:"reflect-construct"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reflect-construct"}},[t._v("#")]),t._v(" "),a("code",[t._v("Reflect.construct()")])]),t._v(" "),a("p",[t._v("该方法的行为有点和 new 操作符类似，相当于 "),a("code",[t._v("new Target(...args)")]),t._v(" 。")]),t._v(" "),a("p",[t._v("该方法接受三个参数：")]),t._v(" "),a("ul",[a("li",[t._v("target：被运行的构造函数")]),t._v(" "),a("li",[t._v("argumentList：累数组，目标构造函数调用时的实参")]),t._v(" "),a("li",[t._v("newTarget（可选）：作为新创建对象的原型对象的 constructor 属性，默认为 target")])]),t._v(" "),a("h3",{attrs:{id:"reflect-defineproperty"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reflect-defineproperty"}},[t._v("#")]),t._v(" "),a("code",[t._v("Reflect.defineProperty()")])]),t._v(" "),a("p",[t._v("基本等价于 "),a("code",[t._v("Object.definePropery")]),t._v(" ，唯一的区别在于当无法进行监听时，"),a("code",[t._v("Reflect.defineProperty")]),t._v(" 会返回 false，而 "),a("code",[t._v("Object.defineProperty")]),t._v(" 会报错。")]),t._v(" "),a("h3",{attrs:{id:"reflect-deleteproperty"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reflect-deleteproperty"}},[t._v("#")]),t._v(" "),a("code",[t._v("Reflect.deleteProperty()")])]),t._v(" "),a("p",[t._v("该方法用于删除对象上的属性，作用等价于 "),a("code",[t._v("delete obj[name]")]),t._v(" ，但是它是一个函数，接受两个参数：")]),t._v(" "),a("ul",[a("li",[t._v("target：删除属性的目标对象")]),t._v(" "),a("li",[t._v("propertyKey：需要删除的属性的名称")])]),t._v(" "),a("h3",{attrs:{id:"reflect-get"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reflect-get"}},[t._v("#")]),t._v(" "),a("code",[t._v("Reflect.get()")])]),t._v(" "),a("p",[t._v("该方法与直接从对象上读取属性类似，但是它是通过一个函数执行操作。该方法接受三个参数：")]),t._v(" "),a("ul",[a("li",[t._v("target：需要取值的目标对象")]),t._v(" "),a("li",[t._v("propertyKey：需要获取的值的键")]),t._v(" "),a("li",[t._v("receiver：如果 target 对象中指定了 getter，receiver 则为 getter 调用时的 this 值。")])]),t._v(" "),a("p",[t._v("如果 target 不是一个对象则会报错。")]),t._v(" "),a("h3",{attrs:{id:"reflect-getownpropertydescriptor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reflect-getownpropertydescriptor"}},[t._v("#")]),t._v(" "),a("code",[t._v("Reflect.getOwnPropertyDescriptor()")])]),t._v(" "),a("p",[t._v("该方法与 "),a("code",[t._v("Object.getOwnPropertyDescriptor")]),t._v(" 一致，用户返回对象中给定属性的属性描述符。")]),t._v(" "),a("h3",{attrs:{id:"reflect-getprototypeof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reflect-getprototypeof"}},[t._v("#")]),t._v(" "),a("code",[t._v("Reflect.getPrototypeOf()")])]),t._v(" "),a("p",[t._v("该方法与 "),a("code",[t._v("Object.getProrotypeOf")]),t._v(" 一致，用户返回给定对象的原型。")]),t._v(" "),a("h3",{attrs:{id:"reflect-has"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reflect-has"}},[t._v("#")]),t._v(" "),a("code",[t._v("Reflect.has()")])]),t._v(" "),a("p",[t._v("该方法作用于 "),a("code",[t._v("key in obj")]),t._v(" 相类似，但它是一个函数，接受两个参数：")]),t._v(" "),a("ul",[a("li",[t._v("target：目标对象")]),t._v(" "),a("li",[t._v("propertyKey：属性名")])]),t._v(" "),a("p",[t._v("如果 target 不是一个对象，会报错。")]),t._v(" "),a("h3",{attrs:{id:"reflect-isextensible"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reflect-isextensible"}},[t._v("#")]),t._v(" "),a("code",[t._v("Reflect.isExtensible()")])]),t._v(" "),a("p",[t._v("判断一个对象是否可扩展，和 "),a("code",[t._v("Object.isExtensible")]),t._v(" 相类似，区别在于 "),a("code",[t._v("Reflect.isExtensible")]),t._v(" 如果第一个参数不是一个对象会报错，而 "),a("code",[t._v("Object.isExtensible")]),t._v(" 则会强制将它转换成一个对象。")]),t._v(" "),a("h3",{attrs:{id:"reflect-ownkeys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reflect-ownkeys"}},[t._v("#")]),t._v(" "),a("code",[t._v("Reflect.ownKeys()")])]),t._v(" "),a("p",[t._v("返回一个由目标自身属性键组成的数组。")]),t._v(" "),a("p",[t._v("该方法等价于 "),a("code",[t._v("Object.getOwnPropertyName(target).concat(Object.getOwnPropertySymbols(target))")]),t._v(" 。")]),t._v(" "),a("h3",{attrs:{id:"reflect-preventextensions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reflect-preventextensions"}},[t._v("#")]),t._v(" "),a("code",[t._v("Reflect.preventExtensions()")])]),t._v(" "),a("p",[t._v("该方法阻止新属性添加到对象。")]),t._v(" "),a("h3",{attrs:{id:"reflect-set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reflect-set"}},[t._v("#")]),t._v(" "),a("code",[t._v("Reflect.set()")])]),t._v(" "),a("p",[t._v("该方法作用和直接设置对象属性相同，接受四个参数：")]),t._v(" "),a("ul",[a("li",[t._v("target：设置属性的目标对象")]),t._v(" "),a("li",[t._v("propertyKey：设置的属性名称")]),t._v(" "),a("li",[t._v("value：设置的值")]),t._v(" "),a("li",[t._v("receiver：如果遇到 setter，receiver 则为 setter 调用时 this")])]),t._v(" "),a("h3",{attrs:{id:"reflect-setprorotypeof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reflect-setprorotypeof"}},[t._v("#")]),t._v(" "),a("code",[t._v("Reflect.setProrotypeOf()")])]),t._v(" "),a("p",[t._v("该方法可以设置一个对象的原型对象，结果返回一个布尔值。")])])}),[],!1,null,null,null);e.default=r.exports}}]);