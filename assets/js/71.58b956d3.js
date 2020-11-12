(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{425:function(t,a,s){"use strict";s.r(a);var _=s(42),v=Object(_.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"http-各版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-各版本"}},[t._v("#")]),t._v(" HTTP 各版本")]),t._v(" "),s("h2",{attrs:{id:"http-1-0-和-http-1-1-有什么区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-1-0-和-http-1-1-有什么区别"}},[t._v("#")]),t._v(" HTTP/1.0 和 HTTP/1.1 有什么区别")]),t._v(" "),s("h3",{attrs:{id:"长连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#长连接"}},[t._v("#")]),t._v(" 长连接")]),t._v(" "),s("p",[t._v("HTTP/1.1 支持长连接和管道化连接，在一个 TCP 连接上可以传送多个 HTTP 请求，避免了因为多次建立 TCP 连接的时间消耗和延时")]),t._v(" "),s("h3",{attrs:{id:"缓存处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存处理"}},[t._v("#")]),t._v(" 缓存处理")]),t._v(" "),s("p",[t._v("HTTP/1.1 新增了 "),s("code",[t._v("ETag")]),t._v("、"),s("code",[t._v("If-Unmodified-Since")]),t._v("、"),s("code",[t._v("If-Match")]),t._v(" 、"),s("code",[t._v("If-None-Match")]),t._v(" 等新的请求头来控制缓存")]),t._v(" "),s("h3",{attrs:{id:"带宽优化以及网络连接的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#带宽优化以及网络连接的使用"}},[t._v("#")]),t._v(" 带宽优化以及网络连接的使用")]),t._v(" "),s("p",[t._v("HTTP/1.1 在请求头中引入了 range，支持断点续传的功能")]),t._v(" "),s("h3",{attrs:{id:"host-头处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#host-头处理"}},[t._v("#")]),t._v(" Host 头处理")]),t._v(" "),s("p",[t._v("在 HTTP/1.0 中认为每台服务器都有唯一的 IP 地址，但随着虚拟主机技术的发展，多个主机共享一个 IP 地址越发普遍，HTTP/1.1 的请求消息和响应消息都应该支持 Host 头域，且请求消息中如果没有 Host 头域会报 400 错误")]),t._v(" "),s("h2",{attrs:{id:"http-1-1-和-http-2-0-有什么区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-1-1-和-http-2-0-有什么区别"}},[t._v("#")]),t._v(" HTTP/1.1 和 HTTP/2.0 有什么区别")]),t._v(" "),s("h3",{attrs:{id:"二进制分帧"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二进制分帧"}},[t._v("#")]),t._v(" 二进制分帧")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("帧")]),t._v("：HTTP/2 数据通信的最小单位消息，指的是 HTTP/2 中逻辑上的 HTTP 消息，例如请求和响应等，消息由一个或多个帧组成。")]),t._v(" "),s("li",[s("strong",[t._v("流")]),t._v("：存在于连接中的一个虚拟通道。流可以承载双向消息，每个流都有一个唯一的整数 ID")])]),t._v(" "),s("p",[t._v("HTTP/2 采用二进制格式传输数据，而非 HTTP/1.x 的文本格式，二进制协议解析起来更高效。")]),t._v(" "),s("h3",{attrs:{id:"头部压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#头部压缩"}},[t._v("#")]),t._v(" 头部压缩")]),t._v(" "),s("p",[t._v("HTTP/1.x 会在请求和响应中重复地携带不常改变的、冗长的头部数据，给网络带来额外的负担。")]),t._v(" "),s("ul",[s("li",[t._v("HTTP/2 在客户端和服务端使用 “首部表” 来跟踪和存储之前发送的键值对，对于相同的数据，不再通过每次请求和响应发送；")]),t._v(" "),s("li",[t._v("首部表在 HTTP/2 的连接存续期内始终存在，有客户端和服务端共同渐进地更新；")]),t._v(" "),s("li",[t._v("每个新的首部键值对要么被追加到当前表的末尾，要么替换表中的值。")])]),t._v(" "),s("p",[t._v("你可以理解为只发送差异数据，而不是全部数据，从而减少头部的信息量。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/33caf22f81643e1ec11f0f46b50e2155.png",alt:"2019-06-14-12-52-59"}})]),t._v(" "),s("h3",{attrs:{id:"服务端推送"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务端推送"}},[t._v("#")]),t._v(" 服务端推送")]),t._v(" "),s("p",[t._v("服务端可以在发送 HTML 时主动推送其他资源，而不是等浏览器解析到相应位置，发起请求再响应。例如服务端可以主动把 JS、CSS 文件推送给客户端，而不需要客户端解析 HTML 时在发送这些请求。")]),t._v(" "),s("p",[t._v("服务端可以主动推送，客户端也有权利选择是否接受。如果服务端推送的资源已经被浏览器缓存过，浏览器可以通过发送 RST_STREAM 帧来拒收。主动推送也遵守同源策略，服务器不会随便推送第三方资源给客户端。")]),t._v(" "),s("h3",{attrs:{id:"多路复用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多路复用"}},[t._v("#")]),t._v(" 多路复用")]),t._v(" "),s("p",[t._v("HTTP/1.x 中，如果想并发多个请求，必须使用多个 TCP 连接。但浏览器为了控制资源，还会对单个域名有 6-8 个TCP 连接的请求限制，同时当带宽不足时，多个 tcp 还会出现竞争带宽的情况。")]),t._v(" "),s("p",[t._v("HTTP/2 中：")]),t._v(" "),s("ul",[s("li",[t._v("同域名下所有通信都在单个连接中完成；")]),t._v(" "),s("li",[t._v("单个连接可以承载任意数量的双向数据流；")]),t._v(" "),s("li",[t._v("数据流以消息的形式发送，而消息又由一个或多个帧组成，多个帧之间可以乱序发送，因为根据帧首部的流标识可以重新组装")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/823eb09ae4446ba7dc9c06f4e39372e8.png",alt:"2019-06-14-12-58-50"}})]),t._v(" "),s("h2",{attrs:{id:"http-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-3"}},[t._v("#")]),t._v(" HTTP/3")]),t._v(" "),s("h3",{attrs:{id:"http-2-的缺陷"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-2-的缺陷"}},[t._v("#")]),t._v(" HTTP/2 的缺陷")]),t._v(" "),s("h4",{attrs:{id:"tcp-的队头阻塞"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp-的队头阻塞"}},[t._v("#")]),t._v(" TCP 的队头阻塞")]),t._v(" "),s("p",[t._v("在 TCP 传输过程中，由于单个数据包的丢失而造成的阻塞称为 TCP 上的队头阻塞。HTTP/2 只解决了应用层面的队头阻塞，队头阻塞的问题还存在于 TCP 协议本身。")]),t._v(" "),s("h4",{attrs:{id:"tcp-建立连接的延时"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp-建立连接的延时"}},[t._v("#")]),t._v(" TCP 建立连接的延时")]),t._v(" "),s("p",[t._v("TCP 以及 TCP + TLS 建立连接的所产生的延时也是影响传输效率的一个主要因素。")]),t._v(" "),s("h4",{attrs:{id:"tcp-协议僵化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp-协议僵化"}},[t._v("#")]),t._v(" TCP 协议僵化")]),t._v(" "),s("h5",{attrs:{id:"中间件僵化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#中间件僵化"}},[t._v("#")]),t._v(" 中间件僵化")]),t._v(" "),s("p",[t._v("我们把互联网各处搭建的设备叫做中间设备（中间件），比如路由器、NAT、防火墙、交换机等，它们通常以来一些很少升级的软件，这些软件大量使用 TCP 特性，设置之后便很少进行更新。这就对我们更新 TCP 的时候造成了困难，新协议的数据包经过这些中间件时，它们不会去理解包的内容从而丢弃了这些数据包。")]),t._v(" "),s("h5",{attrs:{id:"操作系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作系统"}},[t._v("#")]),t._v(" 操作系统")]),t._v(" "),s("p",[t._v("因为 TCP 协议都是通过操作系统来实现的，应用程序只能使用不能修改，通常操作系统的更新都滞后于软件的更新，所以想要更新操作系统内核中的 TCP 协议也是非常困难的。")]),t._v(" "),s("h3",{attrs:{id:"quic-协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quic-协议"}},[t._v("#")]),t._v(" QUIC 协议")]),t._v(" "),s("p",[t._v("HTTP/3 选择了一个折中的方法 -- UDP 协议。 "),s("strong",[t._v("基于 UDP 实现了类似于 TCP 的多路数据流、传输可靠性等功能，我们把这套功能称为 QUIC 协议。")])]),t._v(" "),s("ul",[s("li",[t._v("实现了类似 TCP 的流量控制、传输可靠性功能")]),t._v(" "),s("li",[t._v("集成了 TLS 加密功能")]),t._v(" "),s("li",[t._v("实现了 HTTP/2 中的多路复用功能")]),t._v(" "),s("li",[t._v("实现了快速握手功能")])])])}),[],!1,null,null,null);a.default=v.exports}}]);