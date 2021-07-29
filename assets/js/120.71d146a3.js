(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{510:function(s,t,a){"use strict";a.r(t);var n=a(45),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"_8-回文数-简单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-回文数-简单"}},[s._v("#")]),s._v(" 8. 回文数(简单)")]),s._v(" "),a("p",[a("strong",[s._v("题目描述：")])]),s._v(" "),a("p",[s._v("给你一个整数 "),a("code",[s._v("x")]),s._v(" ，如果 "),a("code",[s._v("x")]),s._v(" 是一个回文整数，返回 "),a("code",[s._v("true")]),s._v(" ；否则，返回 "),a("code",[s._v("false")]),s._v(" 。")]),s._v(" "),a("p",[s._v("回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，"),a("code",[s._v("121")]),s._v(" 是回文，而 "),a("code",[s._v("123")]),s._v(" 不是。")]),s._v(" "),a("p",[a("strong",[s._v("示例1：")])]),s._v(" "),a("p",[s._v("输入：x = 121")]),s._v(" "),a("p",[s._v("输出：true")]),s._v(" "),a("p",[a("strong",[s._v("示例2：")])]),s._v(" "),a("p",[s._v("输入：x = -121")]),s._v(" "),a("p",[s._v("输出：true")]),s._v(" "),a("p",[s._v("解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。")]),s._v(" "),a("p",[a("strong",[s._v("示例 3：")])]),s._v(" "),a("p",[s._v("输入：x = 10")]),s._v(" "),a("p",[s._v("输出：false")]),s._v(" "),a("p",[s._v("解释：从右向左读, 为 01 。因此它不是一个回文数。")]),s._v(" "),a("p",[a("strong",[s._v("示例 4：")])]),s._v(" "),a("p",[s._v("输入：x = -101")]),s._v(" "),a("p",[s._v("输出：false")]),s._v(" "),a("p",[a("strong",[s._v("提示：")])]),s._v(" "),a("ul",[a("li",[s._v("-2e31 <= x <= 2e31-1")])]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("答案：")])])]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * @param {number} x\n * @return {boolean}\n */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("isPalindrome")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("x")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 判断边界条件：x 小于 0 / x 是末位为 0 的非零数")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 循环 x，将 x 的后半部分数字反转过来，然后判断后半部分数字是否等于前半部分。因此循环的终止条件就是 x <= reserveX")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 例如：12321 =>  12  123 => 12 < 123 => 循环结束")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" reserveX "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" reserveX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// x % 10 是 x 的末尾值，这一步相当于取出 x 的末尾数字")]),s._v("\n    reserveX "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" reserveX "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 然后去除 x 的末尾数字，给 x 重新赋值")]),s._v("\n    x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("floor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果数字位数为偶数，则直接判断 x 是否等于 reserveX；")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果数字位数为奇数，则需要去除 reserveX 的最后一位；")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 例如：x=12  reserveX=123  此时就需要去除 reserveX 的最后一位，这也不会影响结果，因为 3 总是和它自身相等")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v("reserveX "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("floor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("reserveX"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("blockquote",[a("p",[a("strong",[s._v("解释：")])]),s._v(" "),a("p",[s._v("这是力扣官方给出的解法，通过判断反转数字后半部分是否等于数字前半部分得出结果。很优秀的思路，可惜不是我想出来的。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);