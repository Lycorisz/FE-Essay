(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{430:function(t,a,s){"use strict";s.r(a);var e=s(42),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"引言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引言"}},[t._v("#")]),t._v(" 引言")]),t._v(" "),s("p",[t._v("前后端鉴权是一个很大的话题，不同组织的鉴权方式各不相同，甚至对同一协议的业务实现也可能相去甚远。")]),t._v(" "),s("p",[t._v("文章主要包含三个部分：")]),t._v(" "),s("ul",[s("li",[t._v("区分认证和授权")]),t._v(" "),s("li",[t._v("常见的认证及授权方式")]),t._v(" "),s("li",[t._v("企业应用中常见的单点登录（SSO）方案")])]),t._v(" "),s("h1",{attrs:{id:"认证与授权"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#认证与授权"}},[t._v("#")]),t._v(" 认证与授权")]),t._v(" "),s("p",[t._v("首先我们来简单看一下认证和授权的区别，理清楚二者之间的关系。")]),t._v(" "),s("h2",{attrs:{id:"认证-authentication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#认证-authentication"}},[t._v("#")]),t._v(" 认证（Authentication）")]),t._v(" "),s("p",[t._v("认证涉及一方应用和一方客户，用于描述客户在该应用下的身份。认证可以简单理解为登录，以此确认你是一个合法的用户。比如掘金就必须登录才能点赞评论收藏。")]),t._v(" "),s("h2",{attrs:{id:"授权-authorisation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#授权-authorisation"}},[t._v("#")]),t._v(" 授权（Authorisation）")]),t._v(" "),s("p",[t._v("授权涉及两方应用和一方客户，用于描述第三方应用有哪些操作权限。")]),t._v(" "),s("h2",{attrs:{id:"代入场景区分认证和授权"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代入场景区分认证和授权"}},[t._v("#")]),t._v(" 代入场景区分认证和授权")]),t._v(" "),s("h3",{attrs:{id:"只认证不授权"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#只认证不授权"}},[t._v("#")]),t._v(" 只认证不授权")]),t._v(" "),s("p",[t._v("上面我们使用掘金账号登录掘金就是只认证不授权，此时掘金只知道你是哪个用户，但是不涉及到授权操作。")]),t._v(" "),s("h3",{attrs:{id:"既认证又授权"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#既认证又授权"}},[t._v("#")]),t._v(" 既认证又授权")]),t._v(" "),s("p",[t._v("同样是登录掘金，我们可以不使用掘金账号进行登录，而是选择第三方应用登陆，比如使用微信登录。这个过程就是掘金向微信申请授权，获取微信用户的信息，用以注册掘金的账户。这个过程及完成了认证（注册成为合法用户）同时又进行了授权（掘金向微信申请授权获取个人信息）。")]),t._v(" "),s("h3",{attrs:{id:"不认证只授权"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不认证只授权"}},[t._v("#")]),t._v(" 不认证只授权")]),t._v(" "),s("p",[t._v("以某外卖小程序为例，在你第一次进入外卖小程序时，小程序会弹出浮层请求获取个人信息，此时相当于上面提到的既认证又授权。你同意之后就相当于使用微信登录，但是此时小程序获取到的信息并不包括你的手机号，当你要下单点击提交时，小程序再次发起请求，要获取你绑定的手机号，此时发生的动作就是不认证只授权。")]),t._v(" "),s("h2",{attrs:{id:"有哪些常见的认证和授权方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#有哪些常见的认证和授权方式"}},[t._v("#")]),t._v(" 有哪些常见的认证和授权方式")]),t._v(" "),s("p",[t._v("一旦涉及认证，就必须要考虑一个问题就是状态管理。所谓的状态管理就是我们在一个网站进行登录之后一段时间内，再次访问该网站不需要重新登录，所以开发者必须要考虑怎样保持用户的登录状态已决定何时生效何时失效。而这个过程需要前后端协同开发。")]),t._v(" "),s("h3",{attrs:{id:"session-cookie-认证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#session-cookie-认证"}},[t._v("#")]),t._v(" Session-Cookie 认证")]),t._v(" "),s("h4",{attrs:{id:"流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#流程"}},[t._v("#")]),t._v(" 流程")]),t._v(" "),s("ol",[s("li",[t._v("用户先使用用户名和密码登录")]),t._v(" "),s("li",[t._v("服务端拿到登录信息之后，将用户信息保存在 session 中，并把 sessionID 写到前端 cookie 里面")]),t._v(" "),s("li",[t._v("之后的每一次请求，前端都会带上 cookie，后端只需要通过获取 cookie 中的 sessionID，判断 sessionID 是否过期")])]),t._v(" "),s("h4",{attrs:{id:"主要问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主要问题"}},[t._v("#")]),t._v(" 主要问题")]),t._v(" "),s("ul",[s("li",[t._v("cookie 安全性问题。攻击者可以通过 xss 获取 cookie 中的 sessionID，使用 httpOnly 在一定程度上可以提高安全性")]),t._v(" "),s("li",[t._v("过多的 session 会消耗较大的服务器资源")]),t._v(" "),s("li",[t._v("分布式下 session 共享问题")])]),t._v(" "),s("h3",{attrs:{id:"token-认证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#token-认证"}},[t._v("#")]),t._v(" Token 认证")]),t._v(" "),s("p",[t._v("与上面的 Session-Cookie 机制不同的是，基于 token 的用户认证是一种服务端无状态的认证方式，服务端可以不用存放 token 数据，但是服务端需要认证 token 的合法性和有效性。使用 token 进行认证的方式这里主要介绍两种：SAML 和 JWT。")]),t._v(" "),s("h4",{attrs:{id:"saml-security-assertion-markup-language"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#saml-security-assertion-markup-language"}},[t._v("#")]),t._v(" SAML（Security Assertion Markup Language）")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/7/6/17323fb21ea32ed0?imageslim",alt:"img"}})]),t._v(" "),s("h5",{attrs:{id:"流程-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#流程-2"}},[t._v("#")]),t._v(" 流程")]),t._v(" "),s("ol",[s("li",[t._v("未登录的用户通过浏览器访问资源网站")]),t._v(" "),s("li",[t._v("网站发现用户未登录，将页面重定向到登录页面")]),t._v(" "),s("li",[t._v("登录页面提供表单给用户进行登录")]),t._v(" "),s("li",[t._v("用户登录成功后，登录页面生成并发送 SAML token（一个很大的 XML 对象）个资源网站")]),t._v(" "),s("li",[t._v("网站对 token 进行验证，解析获取用户信息，允许用户访问相关资源")])]),t._v(" "),s("h5",{attrs:{id:"网站是如何验证-token-的合法性的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网站是如何验证-token-的合法性的"}},[t._v("#")]),t._v(" 网站是如何验证 token 的合法性的")]),t._v(" "),s("p",[t._v("登录页面发送给资源网站的 token 使用了登录页面的私钥进行加密，资源网站在通过公钥进行解密。")]),t._v(" "),s("h5",{attrs:{id:"网站是如何判断-token-是否过期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网站是如何判断-token-是否过期"}},[t._v("#")]),t._v(" 网站是如何判断 token 是否过期")]),t._v(" "),s("p",[t._v("SAML token 中携带了 token 的过期时间。")]),t._v(" "),s("h5",{attrs:{id:"token-是托管在资源网站还是前端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#token-是托管在资源网站还是前端"}},[t._v("#")]),t._v(" token 是托管在资源网站还是前端")]),t._v(" "),s("p",[t._v("都可以。如果放在前端，需要前端通过单独的请求获取 token 并保存在本地。如果是托管在网站，则需要引入 session，又变回了 session-cookie 模式。")]),t._v(" "),s("h4",{attrs:{id:"jwt-json-web-token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jwt-json-web-token"}},[t._v("#")]),t._v(" JWT（JSON Web Token）")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON Web Token 入门教程"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("简而言之，JWT 就是一种在用户登录后生成 token，并把 token 放在前端，后端不需要维护用户的状态信息，但是可以验证 token 的有效性。")]),t._v(" "),s("p",[s("strong",[t._v("JWT 用于签名和验证签名的 secret 对于所有人来说都是一样的吗？")])]),t._v(" "),s("p",[t._v("secret 使用服务器的私钥，也就是所有用于都是一样的。")]),t._v(" "),s("h3",{attrs:{id:"saml-对比-jwt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#saml-对比-jwt"}},[t._v("#")]),t._v(" SAML 对比 JWT")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/7/6/17323fb99f0e02b0?imageslim",alt:"img"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/7/6/17323fc539b730de?imageslim",alt:"img"}})]),t._v(" "),s("p",[t._v("可以看出，JWT 的体积比 SAML 要小非常多。")]),t._v(" "),s("h3",{attrs:{id:"oauth-授权"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#oauth-授权"}},[t._v("#")]),t._v(" OAuth 授权")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("理解 OAuth 2.0"),s("OutboundLink")],1)]),t._v(" "),s("h1",{attrs:{id:"sso-和-cas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sso-和-cas"}},[t._v("#")]),t._v(" SSO 和 CAS")]),t._v(" "),s("p",[t._v("单点登录是一个企业应用绕不开的问题，用户在一定时间内登录公司内的其中一个服务，就可以无需再次登录去访问其他所有服务。")]),t._v(" "),s("p",[t._v("在单点登录领域，CAS（Central Authentication Service，中央认证服务）是一个常用解决方案。")]),t._v(" "),s("p",[t._v("CAS 具体实现依赖很多种协议，比如 OpenID、OAuth、SAML 等。")]),t._v(" "),s("h2",{attrs:{id:"重要概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重要概念"}},[t._v("#")]),t._v(" 重要概念")]),t._v(" "),s("ul",[s("li",[t._v("CAS Server：用于认证的中央服务器")]),t._v(" "),s("li",[t._v("CAS Clients：保护 CAS 应用，一旦有未认证的用户访问，重定向到 CAS Server 进行认证")]),t._v(" "),s("li",[t._v("TGT & TGC：用户认证之后，CAS Server 会生成一个包含用户信息的 TGT（Ticket Granting Ticket）并向浏览器写一 cookie（TGC，Ticket Granting Cookie）")]),t._v(" "),s("li",[t._v("ST：在 URL 上作为参数传输的 ticket，受保护应用可以凭借这个 ticket 去 CAS Server 确认用户是否合法")])]),t._v(" "),s("h2",{attrs:{id:"核心流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#核心流程"}},[t._v("#")]),t._v(" 核心流程")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/7/6/17323fcb7381920a?imageslim",alt:"img"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/7/6/17323fcd10f863c2?imageslim",alt:"img"}})]),t._v(" "),s("ol",[s("li",[s("p",[t._v("用户通过浏览器访问 app1 首页")])]),t._v(" "),s("li",[s("p",[t._v("app1 的 CAS Client 通过检测 session 的方式判断用户未进行认证，将用户重定向（第一次重定向）到 CAS Server，url 上携带的参数包含了 app1 的访问地址")])]),t._v(" "),s("li",[s("p",[t._v("CAS Server 察觉到用户浏览器没有 TGC，提供表单给用户登录。用户登录成功后，CAS Server 生成高喊用户信息的 TGT，并将 TGC 写到用户的浏览器 cookie 中")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("TGC 和 TGT 向关联，是用户浏览器直接向 CAS Server 获取 ST 的票据，如果 TGC 有效，用户就不需要完成表单信息填写步骤直接完成登录")])]),t._v(" "),s("li",[s("p",[t._v("TGC 的过期策略是这样设置的，如果用户一直没有页面操作和后台接口请求，那么默认 2 小时过期。如果一直有操作，默认 8 小时过期。")]),t._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# most-recently-used expiration policy")]),t._v("\ncas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ticket"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tgt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("timeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maxTimeToLiveInSeconds"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7200")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# hard timeout policy")]),t._v("\ncas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ticket"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tgt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("timeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hard"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maxTimeToLiveInSeconds"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("28000")]),t._v("\n")])])])])])]),t._v(" "),s("li",[s("p",[t._v("CAS Server 把浏览器重定向回 app1 首页（第二次重定向），此时 URL 上携带了 ST")])]),t._v(" "),s("li",[s("p",[t._v("app1 再次接收到用户浏览器的访问，获取到 URL 上面的 ST，然后用 ST 向 CAS Server 询问用户是否已经完成认证。CAS Server 给出肯定的响应后，app1 拿掉 URL 上面的 ST 再次重定向回 app1 的首页（第三次重定向）")]),t._v(" "),s("ol",[s("li",[t._v("app1（CAS Client）凭借 ST 去向 CAS Server 确认当前用户登录状态的同时，获取了用户信息")]),t._v(" "),s("li",[t._v("CAS Client 将这些信息保存在 session 中，并把 sessionID 返回给前端")])])]),t._v(" "),s("li",[s("p",[t._v("用户浏览器去访问同一认证体系下 app2 首页")])]),t._v(" "),s("li",[s("p",[t._v("同第 2 步，到了 CAS Server 后，CAS Server 检测到了浏览器的 TGC，找到了对应的 TGT，验证是合法的，然后同第 4 步、第 5 步")])])]),t._v(" "),s("h2",{attrs:{id:"几个问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#几个问题"}},[t._v("#")]),t._v(" 几个问题")]),t._v(" "),s("h3",{attrs:{id:"如何避免-sessionid-冲突"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何避免-sessionid-冲突"}},[t._v("#")]),t._v(" 如何避免 sessionID 冲突")]),t._v(" "),s("p",[t._v("使用各自子服务的特有名称作为 sessionID 的前缀")]),t._v(" "),s("h2",{attrs:{id:"假设-a-和-b-都进行过单线登录认证-有没有可能-a-已过期-但-b-还没过期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#假设-a-和-b-都进行过单线登录认证-有没有可能-a-已过期-但-b-还没过期"}},[t._v("#")]),t._v(" 假设 a 和 b 都进行过单线登录认证，有没有可能 a 已过期，但 b 还没过期")]),t._v(" "),s("p",[t._v("不会。在实际业务中，CAS Client 会定期向 CAS Server 进行通信，如果用户一致操作，那么 CAS Server 就会不停 TGC 的过期时间，最终对于 a 和 b 来说，TGC 的过期时间一定是相同的。")])])}),[],!1,null,null,null);a.default=r.exports}}]);