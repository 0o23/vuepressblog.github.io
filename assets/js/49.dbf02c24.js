(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{441:function(s,t,n){"use strict";n.r(t);var a=n(45),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h3",{attrs:{id:"_20-最大子序和-简单"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_20-最大子序和-简单"}},[s._v("#")]),s._v(" 20. 最大子序和(简单)")]),s._v(" "),n("p",[n("strong",[s._v("题目描述：")])]),s._v(" "),n("p",[s._v("给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。")]),s._v(" "),n("p",[n("strong",[s._v("示例1：")])]),s._v(" "),n("p",[s._v("输入：nums = [-2,1,-3,4,-1,2,1,-5,4]")]),s._v(" "),n("p",[s._v("输出：6")]),s._v(" "),n("p",[s._v("解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。")]),s._v(" "),n("p",[n("strong",[s._v("示例2：")])]),s._v(" "),n("p",[s._v("输入：nums = [1]")]),s._v(" "),n("p",[s._v("输出：1")]),s._v(" "),n("p",[n("strong",[s._v("示例3：")])]),s._v(" "),n("p",[s._v("输入：nums = [0]")]),s._v(" "),n("p",[s._v("输出：0")]),s._v(" "),n("p",[n("strong",[s._v("示例4：")])]),s._v(" "),n("p",[s._v("输入：nums = [-1]")]),s._v(" "),n("p",[s._v("输出：-1")]),s._v(" "),n("p",[n("strong",[s._v("示例5：")])]),s._v(" "),n("p",[s._v("输入：nums = [-100000]")]),s._v(" "),n("p",[s._v("输出：-100000")]),s._v(" "),n("p",[n("strong",[s._v("提示：")])]),s._v(" "),n("ul",[n("li",[s._v("1 <= nums.length <= 3 * 104")]),s._v(" "),n("li",[s._v("-105 <= nums[i] <= 105")])]),s._v(" "),n("blockquote",[n("p",[n("strong",[s._v("答案：")])])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * @param {number[]} nums\n * @return {number}\n */")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("maxSubArray")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("nums")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" ans"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sum"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" num "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("of")]),s._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sum "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      sum "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      sum "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    ans "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Math"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("max")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ans"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" ans"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("blockquote",[n("p",[n("strong",[s._v("解释：")])]),s._v(" "),n("p",[n("a",{attrs:{href:"https://leetcode-cn.com/problems/maximum-subarray/solution/hua-jie-suan-fa-53-zui-da-zi-xu-he-by-guanpengchn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("答案思路来源"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("code",[s._v("if(sum > 0) { sum += num; } else { sum = num; }")]),s._v(" 这个 if 语句的意思是：如果之前和大于0，则将之前和与当前值相加，得到新的 sum；如果之前和小于0，则这个之前和无论在哪个子数组中都会拖后腿，所以干脆用当前值 num 覆盖掉之前和 sum。")]),s._v(" "),n("p",[n("code",[s._v("ans = Math.max(ans, sum);")]),s._v(" 这个语句就保证了 sum+= num 得到的值一定是最好的，不会因为 sum+num 而得到负面结果。")]),s._v(" "),n("p",[s._v("我是菜鸡，大佬666")])])])}),[],!1,null,null,null);t.default=r.exports}}]);