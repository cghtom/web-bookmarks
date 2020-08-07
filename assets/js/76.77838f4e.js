(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{314:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"加密解密"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加密解密","aria-hidden":"true"}},[t._v("#")]),t._v(" 加密解密")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" CryptoJS "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'crypto-js'")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// import CryptoJS from 'crypto-js/crypto-js'")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("CRYPTO_KEY")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'800900'")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// md5加密")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("encodeAES")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token parameter"}},[t._v("str")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" CryptoJS"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("AES")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("encrypt")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("CRYPTO_KEY")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toString")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("decodeAES")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token parameter"}},[t._v("str")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" CryptoJS"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("AES")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("decrypt")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("CRYPTO_KEY")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toString")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CryptoJS"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enc"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Utf8"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" encodeAES"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" decodeAES "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("//加密")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("encrypt")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token parameter"}},[t._v("word"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" keyStr")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    keyStr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" keyStr "),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" keyStr "),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'abcdefgabcdefg12'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" key  "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" CryptoJS"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enc"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Utf8"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("parse")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("keyStr"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token comment"}},[t._v("//Latin1 w8m31+Yy/Nw6thPsMpO5fg==")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" srcs "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" CryptoJS"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enc"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Utf8"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("parse")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("word"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" encrypted "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" CryptoJS"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("AES")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("encrypt")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("srcs"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("mode"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("CryptoJS"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mode"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("ECB")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("padding"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" CryptoJS"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pad"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Pkcs7"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" encrypted"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toString")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("//解密")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("decrypt")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token parameter"}},[t._v("word"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" keyStr")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    keyStr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" keyStr "),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" keyStr "),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'abcdefgabcdefg12'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" key  "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" CryptoJS"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enc"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Utf8"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("parse")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("keyStr"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token comment"}},[t._v("//Latin1 w8m31+Yy/Nw6thPsMpO5fg==")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" decrypt "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" CryptoJS"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("AES")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("decrypt")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("word"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("mode"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("CryptoJS"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mode"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("ECB")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("padding"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" CryptoJS"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pad"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Pkcs7"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" CryptoJS"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enc"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Utf8"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("stringify")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("decrypt"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toString")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);o.options.__file="js-secret.md";s.default=o.exports}}]);