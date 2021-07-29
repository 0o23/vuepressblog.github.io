(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{535:function(s,t,a){"use strict";a.r(t);var n=a(45),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"_2-ip-地址无效化-简单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-ip-地址无效化-简单"}},[s._v("#")]),s._v(" 2. IP 地址无效化(简单)")]),s._v(" "),a("p",[a("strong",[s._v("题目描述：")])]),s._v(" "),a("p",[s._v("给你一个有效的 IPv4 地址 address，返回这个 IP 地址的无效化版本。")]),s._v(" "),a("p",[s._v('所谓无效化 IP 地址，其实就是用 "[.]" 代替了每个 "."。')]),s._v(" "),a("p",[a("strong",[s._v("示例1：")])]),s._v(" "),a("p",[s._v('输入：address = "1.1.1.1"')]),s._v(" "),a("p",[s._v('输出："1[.]1[.]1[.]1"')]),s._v(" "),a("p",[a("strong",[s._v("示例2：")])]),s._v(" "),a("p",[s._v('输入：address = "255.100.50.0"')]),s._v(" "),a("p",[s._v('输出："255[.]100[.]50[.]0"')]),s._v(" "),a("p",[a("strong",[s._v("提示：")])]),s._v(" "),a("p",[s._v("给出的 address 是一个有效的 IPv4 地址")]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("答案1：")])])]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 字符串转数组再转字符串\n * @param {string} address\n * @return {string}\n */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("defangIPaddr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("address")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[.]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("blockquote",[a("p",[a("strong",[s._v("答案2：")])])]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 正则替换\n * @param {string} address\n * @return {string}\n */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("defangIPaddr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("address")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[.]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("blockquote",[a("p",[a("strong",[s._v("解释：")])]),s._v(" "),a("p",[s._v("答案1：\nsplit 是一个字符串方法，它将一个字符串用规定的字符分隔开，并返回一个数组。\njoin 是一个数组方法，它将一个数组用规定的字符(串)合并到一起，并返回一个字符串")]),s._v(" "),a("p",[s._v("答案2：\n直接用正则表达式将 ‘.’ 替换为 ‘[.]’，这个倒是没想到，平时也很少用正则，没想到正则还有这种字符窜替换的功能，学习到了。这里也总结一下正则表达式的写法吧。\n"),a("br"),s._v(" "),a("br")]),s._v(" "),a("p",[s._v("正则表达式：")]),s._v(" "),a("ol",[a("li",[s._v("语法：/正则表达式主体/修饰符(可选)")]),s._v(" "),a("li",[s._v("正则表达式主体：它被 '/ /' 包裹，其中是要匹配的内容，比如本题，需要匹配 '.'，那这里的正则表达式主体就是 '.'。但是 '.' 是一个字符，因此需要被转义：'\\.'。\n如果表达式主体是范围，那就这样写：[a-z] —— 表示从 a 到 z；[0-9] —— 表示从 0 到 9；(x|y) —— 表示 x 或 y")]),s._v(" "),a("li",[s._v("修饰符：有三个，i —— 执行对大小写不敏感的匹配；g —— 执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）；m —— 执行多行匹配")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);