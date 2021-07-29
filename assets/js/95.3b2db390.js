(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{486:function(s,t,a){"use strict";a.r(t);var n=a(45),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"_16-颠倒二进制位-简单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_16-颠倒二进制位-简单"}},[s._v("#")]),s._v(" 16. 颠倒二进制位(简单)")]),s._v(" "),a("p",[a("strong",[s._v("题目描述：")])]),s._v(" "),a("p",[s._v("颠倒给定的 32 位无符号整数的二进制位。")]),s._v(" "),a("p",[s._v("提示：")]),s._v(" "),a("p",[s._v("请注意，在某些语言（如 Java）中，没有无符号整数类型。在这种情况下，输入和输出都将被指定为有符号整数类型，并且不应影响您的实现，因为无论整数是有符号的还是无符号的，其内部的二进制表示形式都是相同的。")]),s._v(" "),a("p",[s._v("在 Java 中，编译器使用二进制补码记法来表示有符号整数。因此，在上面的 示例 2 中，输入表示有符号整数 -3，输出表示有符号整数 -1073741825。")]),s._v(" "),a("p",[a("strong",[s._v("进阶：")])]),s._v(" "),a("p",[s._v("如果多次调用这个函数，你将如何优化你的算法？")]),s._v(" "),a("p",[a("strong",[s._v("示例1：")])]),s._v(" "),a("p",[s._v("输入: 00000010100101000001111010011100")]),s._v(" "),a("p",[s._v("输出: 00111001011110000010100101000000")]),s._v(" "),a("p",[s._v("解释: 输入的二进制串 00000010100101000001111010011100 表示无符号整数 43261596，\n因此返回 964176192，其二进制表示形式为 00111001011110000010100101000000。")]),s._v(" "),a("p",[a("strong",[s._v("示例2：")])]),s._v(" "),a("p",[s._v("输入：11111111111111111111111111111101")]),s._v(" "),a("p",[s._v("输出：10111111111111111111111111111111")]),s._v(" "),a("p",[s._v("解释：输入的二进制串 11111111111111111111111111111101 表示无符号整数 4294967293，\n     因此返回 3221225471 其二进制表示形式为 10111111111111111111111111111111 。")]),s._v(" "),a("p",[a("strong",[s._v("示例3：")])]),s._v(" "),a("p",[s._v("输入：n = 00000010100101000001111010011100")]),s._v(" "),a("p",[s._v("输出：964176192 (00111001011110000010100101000000)")]),s._v(" "),a("p",[s._v("解释：输入的二进制串 00000010100101000001111010011100 表示无符号整数 43261596，\n因此返回 964176192，其二进制表示形式为 00111001011110000010100101000000。")]),s._v(" "),a("p",[a("strong",[s._v("示例4：")])]),s._v(" "),a("p",[s._v("输入：n = 11111111111111111111111111111101")]),s._v(" "),a("p",[s._v("输出：3221225471 (10111111111111111111111111111111)")]),s._v(" "),a("p",[s._v("解释：输入的二进制串 11111111111111111111111111111101 表示无符号整数 4294967293，\n  因此返回 3221225471 其二进制表示形式为 10111111111111111111111111111111 。")]),s._v(" "),a("p",[a("strong",[s._v("提示：")])]),s._v(" "),a("ul",[a("li",[s._v("输入是一个长度为 32 的二进制字符串")])]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("答案：")])])]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * @param {number} n - a positive integer\n * @return {number} - a positive integer\n */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("reverseBits")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    res "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("blockquote",[a("p",[a("strong",[s._v("解释：")])]),s._v(" "),a("p",[s._v("看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂看不懂")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/reverse-bits/solution/dian-dao-er-jin-zhi-wei-by-leetcode-solu-yhxz/",target:"_blank",rel:"noopener noreferrer"}},[s._v("力扣官方题解"),a("OutboundLink")],1),s._v(" "),a("a",{attrs:{href:"https://leetcode-cn.com/problems/reverse-bits/solution/li-kou-jia-jia-duo-chong-yu-fa-duo-chong-jqw3/",target:"_blank",rel:"noopener noreferrer"}},[s._v("代码答案来源"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);