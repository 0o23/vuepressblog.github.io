(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{546:function(t,s,a){"use strict";a.r(s);var n=a(45),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"_4-实现-strstr-简单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-实现-strstr-简单"}},[t._v("#")]),t._v(" 4. 实现 strStr()(简单)")]),t._v(" "),a("p",[a("strong",[t._v("题目描述：")])]),t._v(" "),a("p",[t._v("实现 strStr() 函数。")]),t._v(" "),a("p",[t._v("给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。")]),t._v(" "),a("p",[a("strong",[t._v("说明：")])]),t._v(" "),a("p",[t._v("当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。")]),t._v(" "),a("p",[t._v("对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与 C 语言的 strstr() 以及 Java 的 indexOf() 定义相符。")]),t._v(" "),a("p",[a("strong",[t._v("示例1：")])]),t._v(" "),a("p",[t._v('输入：haystack = "hello", needle = "ll"')]),t._v(" "),a("p",[t._v("输出：2")]),t._v(" "),a("p",[a("strong",[t._v("示例2：")])]),t._v(" "),a("p",[t._v('输入：haystack = "aaaaa", needle = "bba"')]),t._v(" "),a("p",[t._v("输出：-1")]),t._v(" "),a("p",[a("strong",[t._v("示例3：")])]),t._v(" "),a("p",[t._v('输入：haystack = "", needle = ""')]),t._v(" "),a("p",[t._v("输出：0")]),t._v(" "),a("p",[a("strong",[t._v("提示：")])]),t._v(" "),a("ul",[a("li",[t._v("0 <= haystack.length, needle.length <= 5 * 104")]),t._v(" "),a("li",[t._v("haystack 和 needle 仅由小写英文字符组成")])]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("答案：")])])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {string} haystack\n * @param {string} needle\n * @return {number}\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("strStr")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("haystack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" needle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("needle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" haystack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("needle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("blockquote",[a("p",[a("strong",[t._v("解释：")])]),t._v(" "),a("p",[t._v("先判断 needle 是否为空，如果为空，则直接返回 0；然后直接调用 indexOf 方法，该方法会检查 haystack 字符串中是否包含 needle 字符串，如果包含，则返回 needle 字符串第一次出现的位置，否则返回 -1。这个方法正好符合题目要求。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);