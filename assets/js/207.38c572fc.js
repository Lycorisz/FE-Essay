(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{559:function(t,s,a){"use strict";a.r(s);var n=a(42),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"动态规划之博弈问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态规划之博弈问题"}},[t._v("#")]),t._v(" 动态规划之博弈问题")]),t._v(" "),a("p",[t._v("读完本文，你不仅学会了算法套路，还可以顺便去 LeetCode 上拿下如下题目：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/stone-game/",target:"_blank",rel:"noopener noreferrer"}},[t._v("石子游戏"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("博弈类问题的套路都差不多，下文举例讲解，其核心思路是在二维 dp 的基础上，使用元组分别存储两个人的博弈结果。掌握了这个技巧以后，别人再问你什么俩海盗分宝石，俩人拿硬币的问题，你就告诉别人：我懒得想，直接给你写个算法算一下得了。")]),t._v(" "),a("p",[t._v("我们「石头游戏」改的更具有一般性：")]),t._v(" "),a("p",[t._v("你和你的朋友面前有一排石头堆，用一个数组 piles 表示，"),a("code",[t._v("piles[i]")]),t._v(" 表示第 i 堆石子有几个。你们轮流拿石头，一次拿一堆，但是只能拿走最左边或者最右边的石头堆。所有石头被拿完后，谁拥有石头多，谁获胜。")]),t._v(" "),a("p",[t._v("石头的堆数可以是任意正整数，石头的总数也可以是任意正整数，这样就能打破先手必胜的局面。比如有三堆石头 "),a("code",[t._v("piles = [1, 100, 3]")]),t._v("，先手不管拿 1 还是 3，能够决定胜负的 100 都会被后手拿走，后手会获胜。")]),t._v(" "),a("p",[a("strong",[t._v("假设两人都很聪明")]),t._v("，请你设计一个算法，返回先手和后手的最后得分（石头总数）之差。比如上面那个例子，先手能获得 4 分，后手会获得 100 分，你的算法应该返回 -96。")]),t._v(" "),a("p",[t._v("这样推广之后，这个问题算是一道 Hard 的动态规划问题了。"),a("strong",[t._v("博弈问题的难点在于，两个人要轮流进行选择，而且都贼精明，应该如何编程表示这个过程呢？")])]),t._v(" "),a("p",[t._v("还是强调多次的套路，首先明确 dp 数组的含义，然后和股票买卖系列问题类似，只要找到「状态」和「选择」，一切就水到渠成了。")]),t._v(" "),a("h2",{attrs:{id:"定义-dp-数组的含义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义-dp-数组的含义"}},[t._v("#")]),t._v(" 定义 dp 数组的含义")]),t._v(" "),a("p",[t._v("定义 dp 数组的含义是很有技术含量的，同一个问题可能有多种定义方法，不同的定义会引出不同的状态转移方程，不过只要逻辑没有问题，最终都能得到相同的答案。")]),t._v(" "),a("p",[t._v("我建议不要迷恋那些看起来很牛逼，代码很短小的奇技淫巧，最好是稳一点，采取可解释性最好，最容易推广的设计思路。本文就给出一种博弈问题的通用设计框架。")]),t._v(" "),a("p",[t._v("介绍 dp 数组的含义之前，我们先看一下 dp 数组最终的样子：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gblobscdn.gitbook.com/assets%2F-LrtQOWSnDdXhp3kYN4k%2Fsync%2F965db46ef963e1265d8b466b66c8040334eafc58.png?alt=media",alt:"img"}})]),t._v(" "),a("p",[t._v("下文讲解时，认为元组是包含 first 和 second 属性的一个类，而且为了节省篇幅，将这两个属性简写为 fir 和 sec。比如按上图的数据，我们说 "),a("code",[t._v("dp[1][3].fir = 10")]),t._v("，"),a("code",[t._v("dp[0][1].sec = 3")]),t._v("。")]),t._v(" "),a("p",[t._v("先回答几个读者可能提出的问题：")]),t._v(" "),a("p",[t._v("这个二维 dp table 中存储的是元组，怎么编程表示呢？这个 dp table 有一半根本没用上，怎么优化？很简单，都不要管，先把解题的思路想明白了再谈也不迟。")]),t._v(" "),a("p",[a("strong",[t._v("以下是对 dp 数组含义的解释：")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("dp[i][j].fir")]),t._v(" 表示，对于 "),a("code",[t._v("piles[i...j]")]),t._v(" 这部分石头堆，先手能获得的最高分数。\n"),a("code",[t._v("dp[i][j].sec")]),t._v(" 表示，对于 "),a("code",[t._v("piles[i...j]")]),t._v(" 这部分石头堆，后手能获得的最高分数。")]),t._v(" "),a("p",[t._v("举例理解一下，假设 "),a("code",[t._v("piles = [3, 9, 1, 2]")]),t._v(" ，索引从 0 开始\n"),a("code",[t._v("dp[0][1].fir = 9")]),t._v(" 意味着：面对石头堆 "),a("code",[t._v("[3, 9]")]),t._v("，先手最终能够获得 9 分。\n"),a("code",[t._v("dp[1][3].sec = 2")]),t._v(" 意味着：面对石头堆 "),a("code",[t._v("[9, 1, 2]")]),t._v("，后手最终能够获得 2 分。")])]),t._v(" "),a("p",[t._v("我们想求的答案是先手和后手最终分数之差，按照这个定义也就是 "),a("code",[t._v("dp[0][n-1].fir - dp[0][n-1].sec")]),t._v("，即面对整个 piles，先手的最优得分和后手的最优得分之差。")]),t._v(" "),a("h2",{attrs:{id:"状态转移方程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#状态转移方程"}},[t._v("#")]),t._v(" 状态转移方程")]),t._v(" "),a("p",[t._v("写状态转移方程很简单，首先要找到所有「状态」和每个状态可以做的「选择」，然后择优。")]),t._v(" "),a("p",[t._v("根据前面对 dp 数组的定义，"),a("strong",[t._v("状态显然有三个：开始的索引 i，结束的索引 j，当前轮到的人。")])]),t._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("dp[i][j][fir or sec]\n其中：\n0 <= i < piles.length\ni <= j < piles.length\n")])])]),a("p",[t._v("对于这个问题的每个状态，可以做的"),a("strong",[t._v("选择有两个：选择最左边的那堆石头，或者选择最右边的那堆石头。")]),t._v(" 我们可以这样穷举所有状态：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" piles"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" who "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("who"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("上面的伪码是动态规划的一个大致的框架，股票系列问题中也有类似的伪码。这道题的难点在于，两人是交替进行选择的，也就是说先手的选择会对后手有影响，这怎么表达出来呢？")]),t._v(" "),a("p",[t._v("根据我们对 dp 数组的定义，很容易解决这个难点，"),a("strong",[t._v("写出状态转移方程：")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fir "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("piles"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" piles"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fir "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("    选择最左边的石头堆     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     选择最右边的石头堆     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 解释：我作为先手，面对 piles[i...j] 时，有两种选择：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 要么我选择最左边的那一堆石头，然后面对 piles[i+1...j]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 但是此时轮到对方，相当于我变成了后手；")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 要么我选择最右边的那一堆石头，然后面对 piles[i...j-1]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 但是此时轮到对方，相当于我变成了后手。")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" 先手选择左边"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sec "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fir\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" 先手选择右边"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sec "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fir\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 解释：我作为后手，要等先手先选择，有两种情况：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果先手选择了最左边那堆，给我剩下了 piles[i+1...j]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此时轮到我，我变成了先手；")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果先手选择了最右边那堆，给我剩下了 piles[i...j-1]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此时轮到我，我变成了先手。")]),t._v("\n")])])]),a("p",[t._v("根据 dp 数组的定义，我们也可以找出 "),a("strong",[t._v("base case")]),t._v("，也就是最简单的情况：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fir "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" piles"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\ndp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sec "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n其中 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 解释：i 和 j 相等就是说面前只有一堆石头 piles[i]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 那么显然先手的得分为 piles[i]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 后手没有石头拿了，得分为 0")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://gblobscdn.gitbook.com/assets%2F-LrtQOWSnDdXhp3kYN4k%2Fsync%2F5205c28ad147a7e464ff26b2a859ffb5ee39d062.png?alt=media",alt:"img"}})]),t._v(" "),a("p",[t._v("这里需要注意一点，我们发现 base case 是斜着的，而且我们推算 "),a("code",[t._v("dp[i][j]")]),t._v(" 时需要用到 "),a("code",[t._v("dp[i+1][j]")]),t._v(" 和 "),a("code",[t._v("dp[i][j-1]")]),t._v(" ：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gblobscdn.gitbook.com/assets%2F-LrtQOWSnDdXhp3kYN4k%2Fsync%2F469f3835f50bb08ab9653b813ce6b6c7fcc5d806.png?alt=media",alt:"img"}})]),t._v(" "),a("p",[t._v("所以说算法不能简单的一行一行遍历 dp 数组，"),a("strong",[t._v("而要斜着遍历数组：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gblobscdn.gitbook.com/assets%2F-LrtQOWSnDdXhp3kYN4k%2Fsync%2F0929ea854d11218c7d06df08b6313e3453183959.png?alt=media",alt:"img"}})]),t._v(" "),a("p",[t._v("说实话，斜着遍历二维数组说起来容易，你还真不一定能想出来怎么实现，不信你思考一下？这么巧妙的状态转移方程都列出来了，要是不会写代码实现，那真的很尴尬了。")]),t._v(" "),a("h2",{attrs:{id:"代码实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码实现"}},[t._v("#")]),t._v(" 代码实现")]),t._v(" "),a("p",[t._v("如何实现这个 fir 和 sec 元组呢，你可以用 python，自带元组类型；或者使用 C++ 的 pair 容器；或者用一个三维数组 "),a("code",[t._v("dp[n][n][2]")]),t._v("，最后一个维度就相当于元组；或者我们自己写一个 Pair 类：")]),t._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("class Pair {\n    int fir, sec;\n    Pair(int fir, int sec) {\n        this.fir = fir;\n        this.sec = sec;\n    }\n}\n")])])]),a("p",[t._v("然后直接把我们的状态转移方程翻译成代码即可，可以注意一下斜着遍历数组的技巧：")]),t._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/* 返回游戏最后先手和后手的得分之差 */\nint stoneGame(int[] piles) {\n    int n = piles.length;\n    // 初始化 dp 数组\n    Pair[][] dp = new Pair[n][n];\n    for (int i = 0; i < n; i++) \n        for (int j = i; j < n; j++)\n            dp[i][j] = new Pair(0, 0);\n    // 填入 base case\n    for (int i = 0; i < n; i++) {\n        dp[i][i].fir = piles[i];\n        dp[i][i].sec = 0;\n    }\n    // 斜着遍历数组\n    for (int l = 2; l <= n; l++) {\n        for (int i = 0; i <= n - l; i++) {\n            int j = l + i - 1;\n            // 先手选择最左边或最右边的分数\n            int left = piles[i] + dp[i+1][j].sec;\n            int right = piles[j] + dp[i][j-1].sec;\n            // 套用状态转移方程\n            if (left > right) {\n                dp[i][j].fir = left;\n                dp[i][j].sec = dp[i+1][j].fir;\n            } else {\n                dp[i][j].fir = right;\n                dp[i][j].sec = dp[i][j-1].fir;\n            }\n        }\n    }\n    Pair res = dp[0][n-1];\n    return res.fir - res.sec;\n}\n")])])]),a("p",[t._v("动态规划解法，如果没有状态转移方程指导，绝对是一头雾水，但是根据前面的详细解释，读者应该可以清晰理解这一大段代码的含义。")]),t._v(" "),a("p",[t._v("而且，注意到计算 "),a("code",[t._v("dp[i][j]")]),t._v(" 只依赖其左边和下边的元素，所以说肯定有优化空间，转换成一维 dp，想象一下把二维平面压扁，也就是投影到一维。但是，一维 dp 比较复杂，可解释性很差，大家就不必浪费这个时间去理解了。")]),t._v(" "),a("h2",{attrs:{id:"最后总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后总结"}},[t._v("#")]),t._v(" 最后总结")]),t._v(" "),a("p",[t._v("本文给出了解决博弈问题的动态规划解法。博弈问题的前提一般都是在两个聪明人之间进行，编程描述这种游戏的一般方法是二维 dp 数组，数组中通过元组分别表示两人的最优决策。")]),t._v(" "),a("p",[t._v("之所以这样设计，是因为先手在做出选择之后，就成了后手，后手在对方做完选择后，就变成了先手。这种角色转换使得我们可以重用之前的结果，典型的动态规划标志。")]),t._v(" "),a("p",[t._v("读到这里的朋友应该能理解算法解决博弈问题的套路了。学习算法，一定要注重算法的模板框架，而不是一些看起来牛逼的思路，也不要奢求上来就写一个最优的解法。不要舍不得多用空间，不要过早尝试优化，不要惧怕多维数组。dp 数组就是存储信息避免重复计算的，随便用，直到咱满意为止。")]),t._v(" "),a("p",[t._v("希望本文对你有帮助。")])])}),[],!1,null,null,null);s.default=p.exports}}]);