(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{323:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[s("font",{attrs:{color:"red"}},[t._v("1、在 Vue 项目中，Vue 的版本号一定是要和我们的 "),s("code",[t._v("vue-template-compiler")]),t._v(" 的版本号一致。")])],1),t._v(" "),s("p",[t._v("2、Vue 打包后的文件分别是什么意思：")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"vue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue","aria-hidden":"true"}},[this._v("#")]),this._v(" Vue")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"要点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#要点","aria-hidden":"true"}},[this._v("#")]),this._v(" 要点")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("mainifest.js")]),t._v("  ——  静态资源清单")]),t._v(" "),s("li",[s("code",[t._v("vendor.js")]),t._v("  —— "),s("code",[t._v("node_modules")]),t._v(" 里面的包打包出来的")]),t._v(" "),s("li",[s("code",[t._v("app.js")]),t._v(" —— 源码打包出来的")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"vue-中使用-css-预处理器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-中使用-css-预处理器","aria-hidden":"true"}},[this._v("#")]),this._v(" Vue 中使用 CSS 预处理器")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("node-sass 的下载总是不稳定，推荐使用 stylus")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"stylus"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stylus","aria-hidden":"true"}},[this._v("#")]),this._v(" Stylus")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[this._v("npm")]),this._v(" i stylus stylus-loader -D\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"sass"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sass","aria-hidden":"true"}},[this._v("#")]),this._v(" Sass")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[this._v("npm")]),this._v(" i node-sass sass-loader -D\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"为-vue-实例添加属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为-vue-实例添加属性","aria-hidden":"true"}},[this._v("#")]),this._v(" 为 Vue 实例添加属性")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("前期采用 vue-resource，后期改为 axios，方便修改，因此写了： "),e("code",[this._v("Vue.prototype.$http = axios;")]),e("br"),this._v("\n上面这句话是什么意思呢？"),e("br"),this._v("\n意思就给全局设置了一个变量 $http 值是 axios。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"模式一"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模式一","aria-hidden":"true"}},[this._v("#")]),this._v(" 模式一")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("用户登录成功之后，我们会在全局钩子 "),e("code",[this._v("router.beforeEach")]),this._v(" 中拦截路由，判断是否已获得 "),e("code",[this._v("token")]),this._v("，在获得 "),e("code",[this._v("token")]),this._v(" 之后，我们就要去获取用户的基本信息了。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("就如前面所说的，我只在本地存储了一个用户的 "),e("code",[this._v("token")]),this._v("，并没有存储别的用户信息（如用户权限，用户名，用户头像等）。有些人会问为什么不把一些其它的用户信息也存一下？主要出于如下的考虑：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("假设我把用户权限和用户名也存在了本地，但我这时候用另一台电脑登录修改了自己的用户名，之后再用这台存有之前用户信息的电脑登录，它默认会去读取本地 "),e("code",[this._v("cookie")]),this._v(" 中的名字，并不会去拉去新的用户信息。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("所以现在的策略是：页面会先从 "),s("code",[t._v("cookie")]),t._v(" 中查看是否存有 "),s("code",[t._v("token")]),t._v("，没有，就走一遍上一部分的流程重新登录，如果有 "),s("code",[t._v("token")]),t._v("，就会把这个 "),s("code",[t._v("token")]),t._v("返给后端去拉取 "),s("code",[t._v("user_info")]),t._v("，保证用户信息是最新的。"),s("br"),t._v("\n当然如果是做了单点登录得功能的话，用户信息存储在本地也是可以的。当你一台电脑登录时，另一台会被提下线，所以总会重新登录获取最新的内容。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("而且从代码层面我建议还是把 "),e("code",[this._v("login")]),this._v(" 和 "),e("code",[this._v("get_user_info")]),this._v(" 两件事分开比较好，在这个后端全面微服务的年代，后端同学也想写优雅的代码~")])])}],!1,null,null,null);a.options.__file="vue.md";e.default=a.exports}}]);