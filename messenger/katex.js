if (self.CavalryLogger) {
	CavalryLogger.start_js(["Q80Gk"]);
}

/**
 * License: https://www.facebook.com/legal/license/FPQrd9lo592/
 */
__d("katex", [], (function (a, b, c, d, e, f) {
	(function (b) {
		if (typeof f === "object" && typeof e !== "undefined") e.exports = b();
		else if (typeof define === "function" && define.amd) define([], b);
		else {
			var c;
			typeof window !== "undefined" ? c = window : typeof a !== "undefined" ? c = a : typeof self !== "undefined" ? c = self : c = this;
			c.katex = b()
		}
	})(function () {
		return function a(b, c, d) {
			function e(g, h) {
				if (!c[g]) {
					if (!b[g]) {
						var i = typeof requireNoConflict == "function" && requireNoConflict;
						if (!h && i) return i(g, !0);
						if (f) return f(g, !0);
						h = new Error("Cannot find module '" + g + "'");
						throw h.code = "MODULE_NOT_FOUND", h
					}
					i = c[g] = {
						exports: {}
					};
					b[g][0].call(i.exports, function (a) {
						var c = b[g][1][a];
						return e(c ? c : a)
					}, i, i.exports, a, b, c, d)
				}
				return c[g].exports
			}
			var f = typeof requireNoConflict == "function" && requireNoConflict;
			for (var g = 0; g < d.length; g++) e(d[g]);
			return e
		}({
			1: [function (c, a, b) {
				"use strict";
				var d = c("./src/ParseError"),
					g = b(d);
				d = c("./src/Settings");
				var h = b(d);
				d = c("./src/buildTree");
				var i = b(d);
				d = c("./src/parseTree");
				var j = b(d);
				d = c("./src/utils");
				var k = b(d);

				function b(a) {
					return a && a.__esModule ? a : {
						"default": a
					}
				}
				c = function (a, b, c) {
					k["default"].clearNode(b);
					c = new h["default"](c);
					var d = j["default"](a, c);
					d = i["default"](d, a, c).toNode();
					b.appendChild(d)
				};
				typeof document !== "undefined" && (document.compatMode !== "CSS1Compat" && (typeof console !== "undefined" && !1, c = function () {
					throw new g["default"]("KaTeX doesn't work in quirks mode.")
				}));
				b = function (a, b) {
					b = new h["default"](b);
					var c = j["default"](a, b);
					return i["default"](c, a, b).toMarkup()
				};
				d = function (a, b) {
					b = new h["default"](b);
					return j["default"](a, b)
				};
				a.exports = {
					render: c,
					renderToString: b,
					__parse: d,
					ParseError: g["default"]
				}
			}, {
				"./src/ParseError": 29,
				"./src/Settings": 32,
				"./src/buildTree": 37,
				"./src/parseTree": 46,
				"./src/utils": 51
			}],
			2: [function (c, a, b) {
				a.exports = {
					"default": c("core-js/library/fn/json/stringify"),
					__esModule: !0
				}
			}, {
				"core-js/library/fn/json/stringify": 6
			}],
			3: [function (c, a, b) {
				a.exports = {
					"default": c("core-js/library/fn/object/define-property"),
					__esModule: !0
				}
			}, {
				"core-js/library/fn/object/define-property": 7
			}],
			4: [function (c, a, b) {
				"use strict";
				b.__esModule = !0, b["default"] = function (a, b) {
					if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
				}
			}, {}],
			5: [function (c, a, b) {
				"use strict";
				b.__esModule = !0;
				c = c("../core-js/object/define-property");
				var d = a(c);

				function a(a) {
					return a && a.__esModule ? a : {
						"default": a
					}
				}
				b["default"] = function () {
					function a(a, b) {
						for (var c = 0; c < b.length; c++) {
							var e = b[c];
							e.enumerable = e.enumerable || !1;
							e.configurable = !0;
							"value" in e && (e.writable = !0);
							d["default"](a, e.key, e)
						}
					}
					return function (b, c, d) {
						c && a(b.prototype, c);
						d && a(b, d);
						return b
					}
				}()
			}, {
				"../core-js/object/define-property": 3
			}],
			6: [function (c, a, b) {
				b = c("../../modules/_core");
				var d = b.JSON || (b.JSON = {
					stringify: JSON.stringify
				});
				a.exports = function (a) {
					return d.stringify.apply(d, arguments)
				}
			}, {
				"../../modules/_core": 10
			}],
			7: [function (c, a, b) {
				c("../../modules/es6.object.define-property");
				var d = c("../../modules/_core").Object;
				a.exports = function (a, b, c) {
					return d.defineProperty(a, b, c)
				}
			}, {
				"../../modules/_core": 10,
				"../../modules/es6.object.define-property": 23
			}],
			8: [function (c, a, b) {
				a.exports = function (a) {
					if (typeof a != "function") throw TypeError(a + " is not a function!");
					return a
				}
			}, {}],
			9: [function (c, a, b) {
				var d = c("./_is-object");
				a.exports = function (a) {
					if (!d(a)) throw TypeError(a + " is not an object!");
					return a
				}
			}, {
				"./_is-object": 19
			}],
			10: [function (c, a, b) {
				c = a.exports = {
					version: "2.5.0"
				};
				typeof __e == "number" && (__e = c)
			}, {}],
			11: [function (c, a, b) {
				var d = c("./_a-function");
				a.exports = function (a, b, c) {
					d(a);
					if (b === void 0) return a;
					switch (c) {
						case 1:
							return function (c) {
								return a.call(b, c)
							};
						case 2:
							return function (c, d) {
								return a.call(b, c, d)
							};
						case 3:
							return function (c, d, e) {
								return a.call(b, c, d, e)
							}
					}
					return function () {
						return a.apply(b, arguments)
					}
				}
			}, {
				"./_a-function": 8
			}],
			12: [function (c, a, b) {
				a.exports = !c("./_fails")(function () {
					return Object.defineProperty({}, "a", {
						get: function () {
							return 7
						}
					}).a != 7
				})
			}, {
				"./_fails": 15
			}],
			13: [function (c, a, b) {
				b = c("./_is-object");
				var d = c("./_global").document,
					g = b(d) && b(d.createElement);
				a.exports = function (a) {
					return g ? d.createElement(a) : {}
				}
			}, {
				"./_global": 16,
				"./_is-object": 19
			}],
			14: [function (g, c, d) {
				var b = g("./_global"),
					h = g("./_core"),
					i = g("./_ctx"),
					j = g("./_hide"),
					k = "prototype",
					l = function (c, d, e) {
						var g = c & l.F,
							m = c & l.G,
							n = c & l.S,
							o = c & l.P,
							p = c & l.B,
							q = c & l.W,
							a = m ? h : h[d] || (h[d] = {}),
							r = a[k];
						n = m ? b : n ? b[d] : (b[d] || {})[k];
						var s, t;
						m && (e = d);
						for (d in e) {
							s = !g && n && n[d] !== void 0;
							if (s && d in a) continue;
							t = s ? n[d] : e[d];
							a[d] = m && typeof n[d] != "function" ? e[d] : p && s ? i(t, b) : q && n[d] == t ? function (a) {
								var b = function (b, c, d) {
									if (this instanceof a) {
										switch (arguments.length) {
											case 0:
												return new a();
											case 1:
												return new a(b);
											case 2:
												return new a(b, c)
										}
										return new a(b, c, d)
									}
									return a.apply(this, arguments)
								};
								b[k] = a[k];
								return b
							}(t) : o && typeof t == "function" ? i(Function.call, t) : t;
							o && ((a.virtual || (a.virtual = {}))[d] = t, c & l.R && r && !r[d] && j(r, d, t))
						}
					};
				l.F = 1;
				l.G = 2;
				l.S = 4;
				l.P = 8;
				l.B = 16;
				l.W = 32;
				l.U = 64;
				l.R = 128;
				c.exports = l
			}, {
				"./_core": 10,
				"./_ctx": 11,
				"./_global": 16,
				"./_hide": 17
			}],
			15: [function (c, a, b) {
				a.exports = function (a) {
					try {
						return !!a()
					} catch (a) {
						return !0
					}
				}
			}, {}],
			16: [function (c, a, b) {
				c = a.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
				typeof __g == "number" && (__g = c)
			}, {}],
			17: [function (c, a, b) {
				var d = c("./_object-dp"),
					g = c("./_property-desc");
				a.exports = c("./_descriptors") ? function (a, b, c) {
					return d.f(a, b, g(1, c))
				} : function (a, b, c) {
					a[b] = c;
					return a
				}
			}, {
				"./_descriptors": 12,
				"./_object-dp": 20,
				"./_property-desc": 21
			}],
			18: [function (c, a, b) {
				a.exports = !c("./_descriptors") && !c("./_fails")(function () {
					return Object.defineProperty(c("./_dom-create")("div"), "a", {
						get: function () {
							return 7
						}
					}).a != 7
				})
			}, {
				"./_descriptors": 12,
				"./_dom-create": 13,
				"./_fails": 15
			}],
			19: [function (c, a, b) {
				a.exports = function (a) {
					return typeof a === "object" ? a !== null : typeof a === "function"
				}
			}, {}],
			20: [function (c, a, b) {
				var d = c("./_an-object"),
					g = c("./_ie8-dom-define"),
					h = c("./_to-primitive"),
					i = Object.defineProperty;
				b.f = c("./_descriptors") ? Object.defineProperty : function (a, b, c) {
					d(a);
					b = h(b, !0);
					d(c);
					if (g) try {
						return i(a, b, c)
					} catch (a) {}
					if ("get" in c || "set" in c) throw TypeError("Accessors not supported!");
					"value" in c && (a[b] = c.value);
					return a
				}
			}, {
				"./_an-object": 9,
				"./_descriptors": 12,
				"./_ie8-dom-define": 18,
				"./_to-primitive": 22
			}],
			21: [function (c, a, b) {
				a.exports = function (a, b) {
					return {
						enumerable: !(a & 1),
						configurable: !(a & 2),
						writable: !(a & 4),
						value: b
					}
				}
			}, {}],
			22: [function (c, a, b) {
				var d = c("./_is-object");
				a.exports = function (a, b) {
					if (!d(a)) return a;
					var c, e;
					if (b && typeof (c = a.toString) == "function" && !d(e = c.call(a))) return e;
					if (typeof (c = a.valueOf) == "function" && !d(e = c.call(a))) return e;
					if (!b && typeof (c = a.toString) == "function" && !d(e = c.call(a))) return e;
					throw TypeError("Can't convert object to primitive value")
				}
			}, {
				"./_is-object": 19
			}],
			23: [function (c, a, b) {
				a = c("./_export");
				a(a.S + a.F * !c("./_descriptors"), "Object", {
					defineProperty: c("./_object-dp").f
				})
			}, {
				"./_descriptors": 12,
				"./_export": 14,
				"./_object-dp": 20
			}],
			24: [function (c, a, b) {
				"use strict";

				function d(a) {
					if (!a.__matchAtRelocatable) {
						var b = a.source + "|()",
							c = "g" + (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "");
						a.__matchAtRelocatable = new RegExp(b, c)
					}
					return a.__matchAtRelocatable
				}

				function c(a, b, c) {
					if (a.global || a.sticky) throw new Error("matchAt(...): Only non-global regexes are supported");
					a = d(a);
					a.lastIndex = c;
					c = a.exec(b);
					if (c[c.length - 1] == null) {
						c.length = c.length - 1;
						return c
					} else return null
				}
				a.exports = c
			}, {}],
			25: [function (c, a, b) {
				"use strict";
				var d = Object.getOwnPropertySymbols,
					g = Object.prototype.hasOwnProperty,
					h = Object.prototype.propertyIsEnumerable;

				function i(a) {
					if (a === null || a === void 0) throw new TypeError("Object.assign cannot be called with null or undefined");
					return Object(a)
				}

				function c() {
					try {
						if (!Object.assign) return !1;
						var a = new String("abc");
						a[5] = "de";
						if (Object.getOwnPropertyNames(a)[0] === "5") return !1;
						var b = {};
						for (var a = 0; a < 10; a++) b["_" + String.fromCharCode(a)] = a;
						a = Object.getOwnPropertyNames(b).map(function (a) {
							return b[a]
						});
						if (a.join("") !== "0123456789") return !1;
						var c = {};
						"abcdefghijklmnopqrst".split("").forEach(function (a) {
							c[a] = a
						});
						return Object.keys(Object.assign({}, c)).join("") !== "abcdefghijklmnopqrst" ? !1 : !0
					} catch (a) {
						return !1
					}
				}
				a.exports = c() ? Object.assign : function (a, b) {
					var c, e = i(a),
						f;
					for (var j = 1; j < arguments.length; j++) {
						c = Object(arguments[j]);
						for (var k in c) g.call(c, k) && (e[k] = c[k]);
						if (d) {
							f = d(c);
							for (var l = 0; l < f.length; l++) h.call(c, f[l]) && (e[f[l]] = c[f[l]])
						}
					}
					return e
				}
			}, {}],
			26: [function (c, a, b) {
				"use strict";
				var d = c("babel-runtime/helpers/classCallCheck"),
					g = b(d);
				d = c("babel-runtime/helpers/createClass");
				var h = b(d);
				d = c("match-at");
				var i = b(d);
				d = c("./ParseError");
				var j = b(d);

				function b(a) {
					return a && a.__esModule ? a : {
						"default": a
					}
				}
				var k = function () {
						function a(b, c, d, e) {
							g["default"](this, a), this.text = b, this.start = c, this.end = d, this.lexer = e
						}
						h["default"](a, [{
							key: "range",
							value: function (b, c) {
								return b.lexer !== this.lexer ? new a(c) : new a(c, this.start, b.end, this.lexer)
							}
						}]);
						return a
					}(),
					l = new RegExp("([ \r\n\t]+)|([!-\\[\\]-\u2027\u202a-\ud7ff\uf900-\uffff]|[\ud800-\udbff][\udc00-\udfff]|\\\\(?:[a-zA-Z]+|[^\ud800-\udfff]))");
				c = function () {
					function a(b) {
						g["default"](this, a), this.input = b, this.pos = 0
					}
					h["default"](a, [{
						key: "lex",
						value: function () {
							var a = this.input,
								b = this.pos;
							if (b === a.length) return new k("EOF", b, b, this);
							var c = i["default"](l, a, b);
							if (c === null) throw new j["default"]("Unexpected character: '" + a[b] + "'", new k(a[b], b, b + 1, this));
							a = c[2] || " ";
							b = this.pos;
							this.pos += c[0].length;
							c = this.pos;
							return new k(a, b, c, this)
						}
					}]);
					return a
				}();
				a.exports = c
			}, {
				"./ParseError": 29,
				"babel-runtime/helpers/classCallCheck": 4,
				"babel-runtime/helpers/createClass": 5,
				"match-at": 24
			}],
			27: [function (c, a, b) {
				"use strict";
				var d = c("babel-runtime/helpers/classCallCheck"),
					g = b(d);
				d = c("babel-runtime/helpers/createClass");
				var h = b(d);
				d = c("./Lexer");
				var i = b(d);
				d = c("./macros");
				var j = b(d);
				d = c("./ParseError");
				var k = b(d);
				d = c("object-assign");
				var l = b(d);

				function b(a) {
					return a && a.__esModule ? a : {
						"default": a
					}
				}
				c = function () {
					function a(b, c) {
						g["default"](this, a), this.lexer = new i["default"](b), this.macros = l["default"]({}, j["default"], c), this.stack = [], this.discardedWhiteSpace = []
					}
					h["default"](a, [{
						key: "nextToken",
						value: function () {
							for (;;) {
								this.stack.length === 0 && this.stack.push(this.lexer.lex());
								var a = this.stack.pop(),
									b = a.text;
								if (!(b.charAt(0) === "\\" && this.macros.hasOwnProperty(b))) return a;
								var c = void 0,
									d = this.macros[b];
								if (typeof d === "string") {
									var e = 0;
									if (d.indexOf("#") !== -1) {
										var f = d.replace(/##/g, "");
										while (f.indexOf("#" + (e + 1)) !== -1) ++e
									}
									f = new i["default"](d);
									d = [];
									c = f.lex();
									while (c.text !== "EOF") d.push(c), c = f.lex();
									d.reverse();
									d.numArgs = e;
									this.macros[b] = d
								}
								if (d.numArgs) {
									f = [];
									e = void 0;
									for (e = 0; e < d.numArgs; ++e) {
										b = this.get(!0);
										if (b.text === "{") {
											var g = [],
												h = 1;
											while (h !== 0) {
												c = this.get(!1);
												g.push(c);
												if (c.text === "{") ++h;
												else if (c.text === "}") --h;
												else if (c.text === "EOF") throw new k["default"]("End of input in macro argument", b)
											}
											g.pop();
											g.reverse();
											f[e] = g
										} else if (b.text === "EOF") throw new k["default"]("End of input expecting macro argument", a);
										else f[e] = [b]
									}
									d = d.slice();
									for (e = d.length - 1; e >= 0; --e) {
										c = d[e];
										if (c.text === "#") {
											if (e === 0) throw new k["default"]("Incomplete placeholder at end of macro body", c);
											c = d[--e];
											if (c.text === "#") d.splice(e + 1, 1);
											else if (/^[1-9]$/.test(c.text)) d.splice.apply(d, [e, 2].concat(f[c.text - 1]));
											else throw new k["default"]("Not a valid argument number", c)
										}
									}
								}
								this.stack = this.stack.concat(d)
							}
						}
					}, {
						key: "get",
						value: function (a) {
							this.discardedWhiteSpace = [];
							var b = this.nextToken();
							if (a)
								while (b.text === " ") this.discardedWhiteSpace.push(b), b = this.nextToken();
							return b
						}
					}, {
						key: "unget",
						value: function (a) {
							this.stack.push(a);
							while (this.discardedWhiteSpace.length !== 0) this.stack.push(this.discardedWhiteSpace.pop())
						}
					}]);
					return a
				}();
				a.exports = c
			}, {
				"./Lexer": 26,
				"./ParseError": 29,
				"./macros": 44,
				"babel-runtime/helpers/classCallCheck": 4,
				"babel-runtime/helpers/createClass": 5,
				"object-assign": 25
			}],
			28: [function (c, a, b) {
				"use strict";
				var d = c("babel-runtime/helpers/classCallCheck"),
					g = b(d);
				d = c("babel-runtime/helpers/createClass");
				var h = b(d);
				d = c("./fontMetrics");
				var i = b(d);

				function b(a) {
					return a && a.__esModule ? a : {
						"default": a
					}
				}
				var j = 6,
					k = [
						[1, 1, 1],
						[2, 1, 1],
						[3, 1, 1],
						[4, 2, 1],
						[5, 2, 1],
						[6, 3, 1],
						[7, 4, 2],
						[8, 6, 3],
						[9, 7, 6],
						[10, 8, 7],
						[11, 10, 9]
					],
					l = [.5, .6, .7, .8, .9, 1, 1.2, 1.44, 1.728, 2.074, 2.488],
					m = function (a, b) {
						return b.size < 2 ? a : k[a - 1][b.size - 1]
					};
				c = function () {
					function a(b) {
						g["default"](this, a), this.style = b.style, this.color = b.color, this.size = b.size || j, this.textSize = b.textSize || this.size, this.phantom = b.phantom, this.font = b.font, this.sizeMultiplier = l[this.size - 1], this.maxSize = b.maxSize, this._fontMetrics = null
					}
					h["default"](a, [{
						key: "extend",
						value: function (b) {
							var c = {
								style: this.style,
								size: this.size,
								textSize: this.textSize,
								color: this.color,
								phantom: this.phantom,
								font: this.font,
								maxSize: this.maxSize
							};
							for (var d in b) b.hasOwnProperty(d) && (c[d] = b[d]);
							return new a(c)
						}
					}, {
						key: "havingStyle",
						value: function (a) {
							if (this.style === a) return this;
							else return this.extend({
								style: a,
								size: m(this.textSize, a)
							})
						}
					}, {
						key: "havingCrampedStyle",
						value: function () {
							return this.havingStyle(this.style.cramp())
						}
					}, {
						key: "havingSize",
						value: function (a) {
							if (this.size === a && this.textSize === a) return this;
							else return this.extend({
								style: this.style.text(),
								size: a,
								textSize: a
							})
						}
					}, {
						key: "havingBaseStyle",
						value: function (a) {
							a = a || this.style.text();
							var b = m(j, a);
							if (this.size === b && this.textSize === j && this.style === a) return this;
							else return this.extend({
								style: a,
								size: b,
								baseSize: j
							})
						}
					}, {
						key: "withColor",
						value: function (a) {
							return this.extend({
								color: a
							})
						}
					}, {
						key: "withPhantom",
						value: function () {
							return this.extend({
								phantom: !0
							})
						}
					}, {
						key: "withFont",
						value: function (a) {
							return this.extend({
								font: a || this.font
							})
						}
					}, {
						key: "havingMaxSize",
						value: function (a) {
							return this.extend({
								maxSize: a
							})
						}
					}, {
						key: "sizingClasses",
						value: function (a) {
							if (a.size !== this.size) return ["sizing", "reset-size" + a.size, "size" + this.size];
							else return []
						}
					}, {
						key: "baseSizingClasses",
						value: function () {
							if (this.size !== j) return ["sizing", "reset-size" + this.size, "size" + j];
							else return []
						}
					}, {
						key: "fontMetrics",
						value: function () {
							this._fontMetrics || (this._fontMetrics = i["default"].getFontMetrics(this.size));
							return this._fontMetrics
						}
					}, {
						key: "getColor",
						value: function () {
							if (this.phantom) return "transparent";
							else return a.colorMap[this.color] || this.color
						}
					}]);
					return a
				}();
				c.colorMap = {
					"katex-blue": "#6495ed",
					"katex-orange": "#ffa500",
					"katex-pink": "#ff00af",
					"katex-red": "#df0030",
					"katex-green": "#28ae7b",
					"katex-gray": "gray",
					"katex-purple": "#9d38bd",
					"katex-blueA": "#ccfaff",
					"katex-blueB": "#80f6ff",
					"katex-blueC": "#63d9ea",
					"katex-blueD": "#11accd",
					"katex-blueE": "#0c7f99",
					"katex-tealA": "#94fff5",
					"katex-tealB": "#26edd5",
					"katex-tealC": "#01d1c1",
					"katex-tealD": "#01a995",
					"katex-tealE": "#208170",
					"katex-greenA": "#b6ffb0",
					"katex-greenB": "#8af281",
					"katex-greenC": "#74cf70",
					"katex-greenD": "#1fab54",
					"katex-greenE": "#0d923f",
					"katex-goldA": "#ffd0a9",
					"katex-goldB": "#ffbb71",
					"katex-goldC": "#ff9c39",
					"katex-goldD": "#e07d10",
					"katex-goldE": "#a75a05",
					"katex-redA": "#fca9a9",
					"katex-redB": "#ff8482",
					"katex-redC": "#f9685d",
					"katex-redD": "#e84d39",
					"katex-redE": "#bc2612",
					"katex-maroonA": "#ffbde0",
					"katex-maroonB": "#ff92c6",
					"katex-maroonC": "#ed5fa6",
					"katex-maroonD": "#ca337c",
					"katex-maroonE": "#9e034e",
					"katex-purpleA": "#ddd7ff",
					"katex-purpleB": "#c6b9fc",
					"katex-purpleC": "#aa87ff",
					"katex-purpleD": "#7854ab",
					"katex-purpleE": "#543b78",
					"katex-mintA": "#f5f9e8",
					"katex-mintB": "#edf2df",
					"katex-mintC": "#e0e5cc",
					"katex-grayA": "#f6f7f7",
					"katex-grayB": "#f0f1f2",
					"katex-grayC": "#e3e5e6",
					"katex-grayD": "#d6d8da",
					"katex-grayE": "#babec2",
					"katex-grayF": "#888d93",
					"katex-grayG": "#626569",
					"katex-grayH": "#3b3e40",
					"katex-grayI": "#21242c",
					"katex-kaBlue": "#314453",
					"katex-kaGreen": "#71B307"
				};
				c.BASESIZE = j;
				a.exports = c
			}, {
				"./fontMetrics": 41,
				"babel-runtime/helpers/classCallCheck": 4,
				"babel-runtime/helpers/createClass": 5
			}],
			29: [function (c, a, b) {
				"use strict";
				c = c("babel-runtime/helpers/classCallCheck");
				var d = b(c);

				function b(a) {
					return a && a.__esModule ? a : {
						"default": a
					}
				}
				b = function a(b, c) {
					d["default"](this, a);
					b = "KaTeX parse error: " + b;
					var e = void 0,
						f = void 0;
					if (c && c.lexer && c.start <= c.end) {
						var g = c.lexer.input;
						e = c.start;
						f = c.end;
						e === g.length ? b += " at end of input: " : b += " at position " + (e + 1) + ": ";
						c = g.slice(e, f).replace(/[^]/g, "$&\u0332");
						var h = void 0;
						e > 15 ? h = "\u2026" + g.slice(e - 15, e) : h = g.slice(0, e);
						var i;
						f + 15 < g.length ? i = g.slice(f, f + 15) + "\u2026" : i = g.slice(f);
						b += h + c + i
					}
					g = new Error(b);
					g.name = "ParseError";
					g.__proto__ = a.prototype;
					g.position = e;
					return g
				};
				b.prototype.__proto__ = Error.prototype;
				a.exports = b
			}, {
				"babel-runtime/helpers/classCallCheck": 4
			}],
			30: [function (c, a, b) {
				"use strict";
				Object.defineProperty(b, "__esModule", {
					value: !0
				});
				c = c("babel-runtime/helpers/classCallCheck");
				var d = a(c);

				function a(a) {
					return a && a.__esModule ? a : {
						"default": a
					}
				}
				a = function a(b, c, e, f, g) {
					d["default"](this, a), this.type = b, this.value = c, this.mode = e, f && (!g || g.lexer === f.lexer) && (this.lexer = f.lexer, this.start = f.start, this.end = (g || f).end)
				};
				b["default"] = a
			}, {
				"babel-runtime/helpers/classCallCheck": 4
			}],
			31: [function (c, a, b) {
				"use strict";
				var d = c("babel-runtime/helpers/classCallCheck"),
					g = b(d);
				d = c("babel-runtime/helpers/createClass");
				var h = b(d);
				d = c("./functions");
				var i = b(d);
				d = c("./environments");
				var j = b(d);
				d = c("./MacroExpander");
				var k = b(d);
				d = c("./symbols");
				var l = b(d);
				d = c("./utils");
				var m = b(d);
				d = c("./units");
				var n = b(d),
					o = c("./unicodeRegexes");
				d = c("./ParseNode");
				var p = b(d);
				d = c("./ParseError");
				var q = b(d);

				function b(a) {
					return a && a.__esModule ? a : {
						"default": a
					}
				}

				function r(a, b, c) {
					this.result = a, this.isFunction = b, this.token = c
				}
				c = function () {
					function a(b, c) {
						g["default"](this, a), this.gullet = new k["default"](b, c.macros), c.colorIsTextColor && (this.gullet.macros["\\color"] = "\\textcolor"), this.settings = c, this.leftrightDepth = 0
					}
					h["default"](a, [{
						key: "expect",
						value: function (a, b) {
							if (this.nextToken.text !== a) throw new q["default"]("Expected '" + a + "', got '" + this.nextToken.text + "'", this.nextToken);
							b !== !1 && this.consume()
						}
					}, {
						key: "consume",
						value: function () {
							this.nextToken = this.gullet.get(this.mode === "math")
						}
					}, {
						key: "switchMode",
						value: function (a) {
							this.gullet.unget(this.nextToken), this.mode = a, this.consume()
						}
					}, {
						key: "parse",
						value: function () {
							this.mode = "math";
							this.consume();
							var a = this.parseInput();
							return a
						}
					}, {
						key: "parseInput",
						value: function () {
							var a = this.parseExpression(!1);
							this.expect("EOF", !1);
							return a
						}
					}, {
						key: "parseExpression",
						value: function (b, c) {
							var d = [];
							while (!0) {
								var e = this.nextToken;
								if (a.endOfExpression.indexOf(e.text) !== -1) break;
								if (c && e.text === c) break;
								if (b && i["default"][e.text] && i["default"][e.text].infix) break;
								var f = this.parseAtom();
								if (!f) {
									if (!this.settings.throwOnError && e.text[0] === "\\") {
										e = this.handleUnsupportedCmd();
										d.push(e);
										continue
									}
									break
								}
								d.push(f)
							}
							return this.handleInfixNodes(d)
						}
					}, {
						key: "handleInfixNodes",
						value: function (a) {
							var b = -1,
								c = void 0;
							for (var d = 0; d < a.length; d++) {
								var e = a[d];
								if (e.type === "infix") {
									if (b !== -1) throw new q["default"]("only one infix operator per group", e.value.token);
									b = d;
									c = e.value.replaceWith
								}
							}
							if (b !== -1) {
								e = void 0;
								d = a.slice(0, b);
								b = a.slice(b + 1);
								d.length === 1 && d[0].type === "ordgroup" ? e = d[0] : e = new p["default"]("ordgroup", d, this.mode);
								b.length === 1 && b[0].type === "ordgroup" ? d = b[0] : d = new p["default"]("ordgroup", b, this.mode);
								b = this.callFunction(c, [e, d], null);
								return [new p["default"](b.type, b, this.mode)]
							} else return a
						}
					}, {
						key: "handleSupSubscript",
						value: function (b) {
							var c = this.nextToken,
								d = c.text;
							this.consume();
							var e = this.parseGroup();
							if (!e)
								if (!this.settings.throwOnError && this.nextToken.text[0] === "\\") return this.handleUnsupportedCmd();
								else throw new q["default"]("Expected group after '" + d + "'", c);
							else if (e.isFunction) {
								d = i["default"][e.result].greediness;
								if (d > a.SUPSUB_GREEDINESS) return this.parseFunction(e);
								else throw new q["default"]("Got function '" + e.result + "' with no arguments as " + b, c)
							} else return e.result
						}
					}, {
						key: "handleUnsupportedCmd",
						value: function () {
							var a = this.nextToken.text,
								b = [];
							for (var c = 0; c < a.length; c++) b.push(new p["default"]("textord", a[c], "text"));
							c = new p["default"]("text", {
								body: b,
								type: "text"
							}, this.mode);
							a = new p["default"]("color", {
								color: this.settings.errorColor,
								value: [c],
								type: "color"
							}, this.mode);
							this.consume();
							return a
						}
					}, {
						key: "parseAtom",
						value: function () {
							var a = this.parseImplicitGroup();
							if (this.mode === "text") return a;
							var b = void 0,
								c = void 0;
							while (!0) {
								var d = this.nextToken;
								if (d.text === "\\limits" || d.text === "\\nolimits") {
									if (!a || a.type !== "op") throw new q["default"]("Limit controls must follow a math operator", d);
									else {
										var e = d.text === "\\limits";
										a.value.limits = e;
										a.value.alwaysHandleSupSub = !0
									}
									this.consume()
								} else if (d.text === "^") {
									if (b) throw new q["default"]("Double superscript", d);
									b = this.handleSupSubscript("superscript")
								} else if (d.text === "_") {
									if (c) throw new q["default"]("Double subscript", d);
									c = this.handleSupSubscript("subscript")
								} else if (d.text === "'") {
									if (b) throw new q["default"]("Double superscript", d);
									e = new p["default"]("textord", "\\prime", this.mode);
									d = [e];
									this.consume();
									while (this.nextToken.text === "'") d.push(e), this.consume();
									this.nextToken.text === "^" && d.push(this.handleSupSubscript("superscript"));
									b = new p["default"]("ordgroup", d, this.mode)
								} else break
							}
							if (b || c) return new p["default"]("supsub", {
								base: a,
								sup: b,
								sub: c
							}, this.mode);
							else return a
						}
					}, {
						key: "parseImplicitGroup",
						value: function () {
							var b = this.parseSymbol();
							if (b == null) return this.parseFunction();
							var c = b.result;
							if (c === "\\left") {
								var d = this.parseFunction(b);
								++this.leftrightDepth;
								var e = this.parseExpression(!1);
								--this.leftrightDepth;
								this.expect("\\right", !1);
								var f = this.parseFunction();
								return new p["default"]("leftright", {
									body: e,
									left: d.value.value,
									right: f.value.value
								}, this.mode)
							} else if (c === "\\begin") {
								e = this.parseFunction(b);
								d = e.value.name;
								if (!j["default"].hasOwnProperty(d)) throw new q["default"]("No such environment: " + d, e.value.nameGroup);
								f = j["default"][d];
								e = this.parseArguments("\\begin{" + d + "}", f);
								var g = {
									mode: this.mode,
									envName: d,
									parser: this,
									positions: e.pop()
								};
								f = f.handler(g, e);
								this.expect("\\end", !1);
								g = this.nextToken;
								e = this.parseFunction();
								if (e.value.name !== d) throw new q["default"]("Mismatch: \\begin{" + d + "} matched by \\end{" + e.value.name + "}", g);
								f.position = e.position;
								return f
							} else if (m["default"].contains(a.sizeFuncs, c)) {
								this.consumeSpaces();
								d = this.parseExpression(!1);
								return new p["default"]("sizing", {
									size: m["default"].indexOf(a.sizeFuncs, c) + 1,
									value: d
								}, this.mode)
							} else if (m["default"].contains(a.styleFuncs, c)) {
								this.consumeSpaces();
								g = this.parseExpression(!0);
								return new p["default"]("styling", {
									style: c.slice(1, c.length - 5),
									value: g
								}, this.mode)
							} else if (c in a.oldFontFuncs) {
								e = a.oldFontFuncs[c];
								this.consumeSpaces();
								f = this.parseExpression(!0);
								if (e.slice(0, 4) === "text") return new p["default"]("text", {
									style: e,
									body: new p["default"]("ordgroup", f, this.mode)
								}, this.mode);
								else return new p["default"]("font", {
									font: e,
									body: new p["default"]("ordgroup", f, this.mode)
								}, this.mode)
							} else if (c === "\\color") {
								d = this.parseColorGroup(!1);
								if (!d) throw new q["default"]("\\color not followed by color");
								g = this.parseExpression(!0);
								return new p["default"]("color", {
									type: "color",
									color: d.result.value,
									value: g
								}, this.mode)
							} else if (c === "$") {
								if (this.mode === "math") throw new q["default"]("$ within math mode");
								this.consume();
								e = this.mode;
								this.switchMode("math");
								f = this.parseExpression(!1, "$");
								this.expect("$", !0);
								this.switchMode(e);
								return new p["default"]("styling", {
									style: "text",
									value: f
								}, "math")
							} else return this.parseFunction(b)
						}
					}, {
						key: "parseFunction",
						value: function (a) {
							a || (a = this.parseGroup());
							if (a)
								if (a.isFunction) {
									var b = a.result,
										c = i["default"][b];
									if (this.mode === "text" && !c.allowedInText) throw new q["default"]("Can't use function '" + b + "' in text mode", a.token);
									c = this.parseArguments(b, c);
									var d = a.token;
									b = this.callFunction(b, c, c.pop(), d);
									return new p["default"](b.type, b, this.mode)
								} else return a.result;
							else return null
						}
					}, {
						key: "callFunction",
						value: function (a, b, c, d) {
							c = {
								funcName: a,
								parser: this,
								positions: c,
								token: d
							};
							return i["default"][a].handler(c, b)
						}
					}, {
						key: "parseArguments",
						value: function (a, b) {
							var c = b.numArgs + b.numOptionalArgs;
							if (c === 0) return [
								[this.pos]
							];
							var d = b.greediness,
								e = [this.pos],
								f = [];
							for (var g = 0; g < c; g++) {
								var h = this.nextToken,
									j = b.argTypes && b.argTypes[g],
									k;
								if (g < b.numOptionalArgs) {
									j ? k = this.parseGroupOfType(j, !0) : k = this.parseGroup(!0);
									if (!k) {
										f.push(null);
										e.push(this.pos);
										continue
									}
								} else {
									j ? k = this.parseGroupOfType(j) : k = this.parseGroup();
									if (!k)
										if (!this.settings.throwOnError && this.nextToken.text[0] === "\\") k = new r(this.handleUnsupportedCmd(this.nextToken.text), !1);
										else throw new q["default"]("Expected group after '" + a + "'", h)
								}
								if (k.isFunction) {
									j = i["default"][k.result].greediness;
									if (j > d) j = this.parseFunction(k);
									else throw new q["default"]("Got function '" + k.result + "' as argument to '" + a + "'", h)
								} else j = k.result;
								f.push(j);
								e.push(this.pos)
							}
							f.push(e);
							return f
						}
					}, {
						key: "parseGroupOfType",
						value: function (a, b) {
							var c = this.mode;
							a === "original" && (a = c);
							if (a === "color") return this.parseColorGroup(b);
							if (a === "size") return this.parseSizeGroup(b);
							this.switchMode(a);
							a === "text" && this.consumeSpaces();
							a = this.parseGroup(b);
							this.switchMode(c);
							return a
						}
					}, {
						key: "consumeSpaces",
						value: function () {
							while (this.nextToken.text === " ") this.consume()
						}
					}, {
						key: "parseStringGroup",
						value: function (a, b) {
							if (b && this.nextToken.text !== "[") return null;
							var c = this.mode;
							this.mode = "text";
							this.expect(b ? "[" : "{");
							var d = "",
								e = this.nextToken,
								f = e;
							while (this.nextToken.text !== (b ? "]" : "}")) {
								if (this.nextToken.text === "EOF") throw new q["default"]("Unexpected end of input in " + a, e.range(this.nextToken, d));
								f = this.nextToken;
								d += f.text;
								this.consume()
							}
							this.mode = c;
							this.expect(b ? "]" : "}");
							return e.range(f, d)
						}
					}, {
						key: "parseRegexGroup",
						value: function (a, b) {
							var c = this.mode;
							this.mode = "text";
							var d = this.nextToken,
								e = d,
								f = "";
							while (this.nextToken.text !== "EOF" && a.test(f + this.nextToken.text)) e = this.nextToken, f += e.text, this.consume();
							if (f === "") throw new q["default"]("Invalid " + b + ": '" + d.text + "'", d);
							this.mode = c;
							return d.range(e, f)
						}
					}, {
						key: "parseColorGroup",
						value: function (a) {
							a = this.parseStringGroup("color", a);
							if (!a) return null;
							var b = /^(#[a-z0-9]+|[a-z]+)$/i.exec(a.text);
							if (!b) throw new q["default"]("Invalid color: '" + a.text + "'", a);
							return new r(new p["default"]("color", b[0], this.mode), !1)
						}
					}, {
						key: "parseSizeGroup",
						value: function (a) {
							var b = void 0;
							!a && this.nextToken.text !== "{" ? b = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size") : b = this.parseStringGroup("size", a);
							if (!b) return null;
							a = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(b.text);
							if (!a) throw new q["default"]("Invalid size: '" + b.text + "'", b);
							a = {
								number: +(a[1] + a[2]),
								unit: a[3]
							};
							if (!n["default"].validUnit(a)) throw new q["default"]("Invalid unit: '" + a.unit + "'", b);
							return new r(new p["default"]("size", a, this.mode), !1)
						}
					}, {
						key: "parseGroup",
						value: function (a) {
							var b = this.nextToken;
							if (this.nextToken.text === (a ? "[" : "{")) {
								this.consume();
								var c = this.parseExpression(!1, a ? "]" : null),
									d = this.nextToken;
								this.expect(a ? "]" : "}");
								this.mode === "text" && this.formLigatures(c);
								return new r(new p["default"]("ordgroup", c, this.mode, b, d), !1)
							} else return a ? null : this.parseSymbol()
						}
					}, {
						key: "formLigatures",
						value: function (a) {
							var b = a.length - 1;
							for (var c = 0; c < b; ++c) {
								var d = a[c],
									e = d.value;
								e === "-" && a[c + 1].value === "-" && (c + 1 < b && a[c + 2].value === "-" ? (a.splice(c, 3, new p["default"]("textord", "---", "text", d, a[c + 2])), b -= 2) : (a.splice(c, 2, new p["default"]("textord", "--", "text", d, a[c + 1])), b -= 1));
								(e === "'" || e === "`") && a[c + 1].value === e && (a.splice(c, 2, new p["default"]("textord", e + e, "text", d, a[c + 1])), b -= 1)
							}
						}
					}, {
						key: "parseSymbol",
						value: function () {
							var a = this.nextToken;
							if (i["default"][a.text]) {
								this.consume();
								return new r(a.text, !0, a)
							} else if (l["default"][this.mode][a.text]) {
								this.consume();
								return new r(new p["default"](l["default"][this.mode][a.text].group, a.text, this.mode, a), !1, a)
							} else if (this.mode === "text" && o.cjkRegex.test(a.text)) {
								this.consume();
								return new r(new p["default"]("textord", a.text, this.mode, a), !1, a)
							} else if (a.text === "$") return new r(a.text, !1, a);
							else return null
						}
					}]);
					return a
				}();
				c.endOfExpression = ["}", "\\end", "\\right", "&", "\\\\", "\\cr"];
				c.SUPSUB_GREEDINESS = 1;
				c.sizeFuncs = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"];
				c.styleFuncs = ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"];
				c.oldFontFuncs = {
					"\\rm": "mathrm",
					"\\sf": "mathsf",
					"\\tt": "mathtt",
					"\\bf": "mathbf",
					"\\it": "mathit"
				};
				c.prototype.ParseNode = p["default"];
				a.exports = c
			}, {
				"./MacroExpander": 27,
				"./ParseError": 29,
				"./ParseNode": 30,
				"./environments": 40,
				"./functions": 43,
				"./symbols": 48,
				"./unicodeRegexes": 49,
				"./units": 50,
				"./utils": 51,
				"babel-runtime/helpers/classCallCheck": 4,
				"babel-runtime/helpers/createClass": 5
			}],
			32: [function (c, a, b) {
				"use strict";
				var d = c("babel-runtime/helpers/classCallCheck"),
					g = b(d);
				d = c("./utils");
				var h = b(d);

				function b(a) {
					return a && a.__esModule ? a : {
						"default": a
					}
				}
				c = function a(b) {
					g["default"](this, a), b = b || {}, this.displayMode = h["default"].deflt(b.displayMode, !1), this.throwOnError = h["default"].deflt(b.throwOnError, !0), this.errorColor = h["default"].deflt(b.errorColor, "#cc0000"), this.macros = b.macros || {}, this.colorIsTextColor = h["default"].deflt(b.colorIsTextColor, !1), this.maxSize = h["default"].deflt(b.maxSize, 0)
				};
				a.exports = c
			}, {
				"./utils": 51,
				"babel-runtime/helpers/classCallCheck": 4
			}],
			33: [function (c, a, b) {
				"use strict";
				var d = c("babel-runtime/helpers/classCallCheck"),
					g = b(d);
				d = c("babel-runtime/helpers/createClass");
				var h = b(d);

				function b(a) {
					return a && a.__esModule ? a : {
						"default": a
					}
				}
				c = function () {
					function a(b, c, d) {
						g["default"](this, a), this.id = b, this.size = c, this.cramped = d
					}
					h["default"](a, [{
						key: "sup",
						value: function () {
							return o[p[this.id]]
						}
					}, {
						key: "sub",
						value: function () {
							return o[q[this.id]]
						}
					}, {
						key: "fracNum",
						value: function () {
							return o[r[this.id]]
						}
					}, {
						key: "fracDen",
						value: function () {
							return o[s[this.id]]
						}
					}, {
						key: "cramp",
						value: function () {
							return o[t[this.id]]
						}
					}, {
						key: "text",
						value: function () {
							return o[u[this.id]]
						}
					}, {
						key: "isTight",
						value: function () {
							return this.size >= 2
						}
					}]);
					return a
				}();
				b = 0;
				d = 1;
				var i = 2,
					j = 3,
					k = 4,
					l = 5,
					m = 6,
					n = 7,
					o = [new c(b, 0, !1), new c(d, 0, !0), new c(i, 1, !1), new c(j, 1, !0), new c(k, 2, !1), new c(l, 2, !0), new c(m, 3, !1), new c(n, 3, !0)],
					p = [k, l, k, l, m, n, m, n],
					q = [l, l, l, l, n, n, n, n],
					r = [i, j, k, l, m, n, m, n],
					s = [j, j, l, l, n, n, n, n],
					t = [d, d, j, j, l, l, n, n],
					u = [b, d, i, j, i, j, i, j];
				a.exports = {
					DISPLAY: o[b],
					TEXT: o[i],
					SCRIPT: o[k],
					SCRIPTSCRIPT: o[m]
				}
			}, {
				"babel-runtime/helpers/classCallCheck": 4,
				"babel-runtime/helpers/createClass": 5
			}],
			34: [function (c, a, b) {
				"use strict";
				var d = c("./domTree"),
					g = b(d);
				d = c("./fontMetrics");
				var h = b(d);
				d = c("./symbols");
				var i = b(d);
				d = c("./utils");
				var j = b(d);

				function b(a) {
					return a && a.__esModule ? a : {
						"default": a
					}
				}
				var k = ["\\imath", "\\jmath", "\\pounds"],
					l = function (a, b, c) {
						i["default"][c][a] && i["default"][c][a].replace && (a = i["default"][c][a].replace);
						return {
							value: a,
							metrics: h["default"].getCharacterMetrics(a, b)
						}
					},
					m = function (a, b, c, d, e) {
						b = l(a, b, c);
						var f = b.metrics;
						a = b.value;
						b = void 0;
						if (f) {
							var h = f.italic;
							c === "text" && (h = 0);
							b = new g["default"].symbolNode(a, f.height, f.depth, h, f.skew, e)
						} else typeof console !== "undefined" && !1, b = new g["default"].symbolNode(a, 0, 0, 0, 0, e);
						d && (b.maxFontSize = d.sizeMultiplier, d.style.isTight() && b.classes.push("mtight"), d.getColor() && (b.style.color = d.getColor()));
						return b
					};
				c = function (a, b, c, d) {
					if (a === "\\" || i["default"][b][a].font === "main") return m(a, "Main-Regular", b, c, d);
					else return m(a, "AMS-Regular", b, c, d.concat(["amsrm"]))
				};
				var n = function (a, b, c, d, e) {
						if (e === "mathord") {
							var f = o(a, b, c, d);
							return m(a, f.fontName, b, c, d.concat([f.fontClass]))
						} else if (e === "textord") {
							f = i["default"][b][a] && i["default"][b][a].font;
							if (f === "ams") return m(a, "AMS-Regular", b, c, d.concat(["amsrm"]));
							else return m(a, "Main-Regular", b, c, d.concat(["mathrm"]))
						} else throw new Error("unexpected type: " + e + " in mathDefault")
					},
					o = function (a, b, c, d) {
						if (/[0-9]/.test(a.charAt(0)) || j["default"].contains(k, a)) return {
							fontName: "Main-Italic",
							fontClass: "mainit"
						};
						else return {
							fontName: "Math-Italic",
							fontClass: "mathit"
						}
					};
				b = function (a, b, c) {
					var d = a.mode;
					a = a.value;
					var e = ["mord"],
						f = b.font;
					if (f) {
						var g = void 0;
						f === "mathit" || j["default"].contains(k, a) ? g = o(a, d, b, e) : g = u[f];
						if (l(a, g.fontName, d).metrics) return m(a, g.fontName, d, b, e.concat([g.fontClass || f]));
						else return n(a, d, b, e, c)
					} else return n(a, d, b, e, c)
				};
				var p = function (a) {
						var b = 0,
							c = 0,
							d = 0;
						if (a.children)
							for (var e = 0; e < a.children.length; e++) a.children[e].height > b && (b = a.children[e].height), a.children[e].depth > c && (c = a.children[e].depth), a.children[e].maxFontSize > d && (d = a.children[e].maxFontSize);
						a.height = b;
						a.depth = c;
						a.maxFontSize = d
					},
					q = function (a, b, c) {
						a = new g["default"].span(a, b, c);
						p(a);
						return a
					};
				d = function (a, b) {
					a.children = b.concat(a.children), p(a)
				};
				var r = function (a) {
						a = new g["default"].documentFragment(a);
						p(a);
						return a
					},
					s = function (a, b, c, d) {
						d = void 0;
						var e = void 0,
							f = void 0;
						if (b === "individualShift") {
							var h = a;
							a = [h[0]];
							d = -h[0].shift - h[0].elem.depth;
							e = d;
							for (f = 1; f < h.length; f++) {
								var i = -h[f].shift - e - h[f].elem.depth,
									j = i - (h[f - 1].elem.height + h[f - 1].elem.depth);
								e = e + i;
								a.push({
									type: "kern",
									size: j
								});
								a.push(h[f])
							}
						} else if (b === "top") {
							i = c;
							for (f = 0; f < a.length; f++) a[f].type === "kern" ? i -= a[f].size : i -= a[f].elem.height + a[f].elem.depth;
							d = i
						} else b === "bottom" ? d = -c : b === "shift" ? d = -a[0].elem.depth - c : b === "firstBaseline" ? d = -a[0].elem.depth : d = 0;
						j = 0;
						for (f = 0; f < a.length; f++)
							if (a[f].type === "elem") {
								h = a[f].elem;
								j = Math.max(j, h.maxFontSize, h.height)
							}
						j += 2;
						i = q(["pstrut"], []);
						i.style.height = j + "em";
						c = [];
						b = d;
						h = d;
						e = d;
						for (f = 0; f < a.length; f++) {
							if (a[f].type === "kern") e += a[f].size;
							else {
								d = a[f].elem;
								var k = q([], [i, d]);
								k.style.top = -j - e - d.depth + "em";
								a[f].marginLeft && (k.style.marginLeft = a[f].marginLeft);
								a[f].marginRight && (k.style.marginRight = a[f].marginRight);
								c.push(k);
								e += d.height + d.depth
							}
							b = Math.min(b, e);
							h = Math.max(h, e)
						}
						k = q(["vlist"], c);
						k.style.height = h + "em";
						d = void 0;
						if (b < 0) {
							a = q(["vlist"], []);
							a.style.height = -b + "em";
							e = q(["vlist-s"], [new g["default"].symbolNode("\u200b")]);
							d = [q(["vlist-r"], [k, e]), q(["vlist-r"], [a])]
						} else d = [q(["vlist-r"], [k])];
						f = q(["vlist-t"], d);
						d.length === 2 && f.classes.push("vlist-t2");
						f.height = h;
						f.depth = -b;
						return f
					},
					t = {
						"\\qquad": {
							size: "2em",
							className: "qquad"
						},
						"\\quad": {
							size: "1em",
							className: "quad"
						},
						"\\enspace": {
							size: "0.5em",
							className: "enspace"
						},
						"\\;": {
							size: "0.277778em",
							className: "thickspace"
						},
						"\\:": {
							size: "0.22222em",
							className: "mediumspace"
						},
						"\\,": {
							size: "0.16667em",
							className: "thinspace"
						},
						"\\!": {
							size: "-0.16667em",
							className: "negativethinspace"
						}
					},
					u = {
						mathbf: {
							variant: "bold",
							fontName: "Main-Bold"
						},
						mathrm: {
							variant: "normal",
							fontName: "Main-Regular"
						},
						textit: {
							variant: "italic",
							fontName: "Main-Italic"
						},
						mathbb: {
							variant: "double-struck",
							fontName: "AMS-Regular"
						},
						mathcal: {
							variant: "script",
							fontName: "Caligraphic-Regular"
						},
						mathfrak: {
							variant: "fraktur",
							fontName: "Fraktur-Regular"
						},
						mathscr: {
							variant: "script",
							fontName: "Script-Regular"
						},
						mathsf: {
							variant: "sans-serif",
							fontName: "SansSerif-Regular"
						},
						mathtt: {
							variant: "monospace",
							fontName: "Typewriter-Regular"
						}
					};
				a.exports = {
					fontMap: u,
					makeSymbol: m,
					mathsym: c,
					makeSpan: q,
					makeFragment: r,
					makeVList: s,
					makeOrd: b,
					prependChildren: d,
					spacingFunctions: t
				}
			}, {
				"./domTree": 39,
				"./fontMetrics": 41,
				"./symbols": 48,
				"./utils": 51
			}],
			35: [function (c, a, b) {
				"use strict";
				var d = c("babel-runtime/core-js/json/stringify"),
					g = b(d);
				d = c("./ParseError");
				var h = b(d);
				d = c("./Style");
				var i = b(d),
					j = c("./buildCommon"),
					k = b(j);
				d = c("./delimiter");
				var l = b(d);
				d = c("./domTree");
				var m = b(d);
				d = c("./units");
				var n = b(d);
				d = c("./utils");
				var o = b(d);
				d = c("./stretchy");
				var p = b(d);

				function b(a) {
					return a && a.__esModule ? a : {
						"default": a
					}
				}
				var q = function (a) {
						return a instanceof m["default"].span && a.classes[0] === "mspace"
					},
					r = function (a) {
						return a && a.classes[0] === "mbin"
					},
					s = function (a, b) {
						if (a) return o["default"].contains(["mbin", "mopen", "mrel", "mop", "mpunct"], a.classes[0]);
						else return b
					},
					t = function (a, b) {
						if (a) return o["default"].contains(["mrel", "mclose", "mpunct"], a.classes[0]);
						else return b
					},
					u = function (a, b) {
						var c = b;
						while (c < a.length && q(a[c])) c++;
						if (c === b) return null;
						else return a.splice(b, c - b)
					},
					v = function (a, b, c) {
						var d = [];
						for (var e = 0; e < a.length; e++) {
							var f = a[e];
							f = E(f, b);
							f instanceof m["default"].documentFragment ? Array.prototype.push.apply(d, f.children) : d.push(f)
						}
						for (var f = 0; f < d.length; f++) {
							a = u(d, f);
							if (a)
								if (f < d.length) d[f] instanceof m["default"].symbolNode && (d[f] = j.makeSpan([].concat(d[f].classes), [d[f]])), k["default"].prependChildren(d[f], a);
								else {
									Array.prototype.push.apply(d, a);
									break
								}
						}
						for (var e = 0; e < d.length; e++) r(d[e]) && (s(d[e - 1], c) || t(d[e + 1], c)) && (d[e].classes[0] = "mord");
						return d
					},
					w = function a(b) {
						if (b instanceof m["default"].documentFragment) {
							if (b.children.length) return a(b.children[b.children.length - 1])
						} else if (o["default"].contains(["mord", "mop", "mbin", "mrel", "mopen", "mclose", "mpunct", "minner"], b.classes[0])) return b.classes[0];
						return null
					},
					x = function (a, b) {
						if (!a.value.base) return !1;
						else {
							var c = a.value.base;
							if (c.type === "op") return c.value.limits && (b.style.size === i["default"].DISPLAY.size || c.value.alwaysHandleSupSub);
							else if (c.type === "accent") return z(c.value.base);
							else if (c.type === "horizBrace") {
								b = a.value.sub ? !1 : !0;
								return b === c.value.isOver
							} else return null
						}
					},
					y = function a(b) {
						if (!b) return !1;
						else if (b.type === "ordgroup")
							if (b.value.length === 1) return a(b.value[0]);
							else return b;
						else if (b.type === "color")
							if (b.value.value.length === 1) return a(b.value.value[0]);
							else return b;
						else if (b.type === "font") return a(b.value.body);
						else return b
					},
					z = function (a) {
						a = y(a);
						return a.type === "mathord" || a.type === "textord" || a.type === "bin" || a.type === "rel" || a.type === "inner" || a.type === "open" || a.type === "close" || a.type === "punct"
					},
					A = function (a, b) {
						a = ["nulldelimiter"].concat(a.baseSizingClasses());
						return j.makeSpan(b.concat(a))
					},
					B = {};
				B.mathord = function (a, b) {
					return k["default"].makeOrd(a, b, "mathord")
				};
				B.textord = function (a, b) {
					return k["default"].makeOrd(a, b, "textord")
				};
				B.bin = function (a, b) {
					return k["default"].mathsym(a.value, a.mode, b, ["mbin"])
				};
				B.rel = function (a, b) {
					return k["default"].mathsym(a.value, a.mode, b, ["mrel"])
				};
				B.open = function (a, b) {
					return k["default"].mathsym(a.value, a.mode, b, ["mopen"])
				};
				B.close = function (a, b) {
					return k["default"].mathsym(a.value, a.mode, b, ["mclose"])
				};
				B.inner = function (a, b) {
					return k["default"].mathsym(a.value, a.mode, b, ["minner"])
				};
				B.punct = function (a, b) {
					return k["default"].mathsym(a.value, a.mode, b, ["mpunct"])
				};
				B.ordgroup = function (a, b) {
					return j.makeSpan(["mord"], v(a.value, b, !0), b)
				};
				B.text = function (a, b) {
					b = b.withFont(a.value.style);
					a = v(a.value.body, b, !0);
					for (var c = 0; c < a.length - 1; c++) a[c].tryCombine(a[c + 1]) && (a.splice(c + 1, 1), c--);
					return j.makeSpan(["mord", "text"], a, b)
				};
				B.color = function (a, b) {
					b = v(a.value.value, b.withColor(a.value.color), !1);
					return new k["default"].makeFragment(b)
				};
				B.supsub = function (a, b) {
					if (x(a, b)) return B[a.value.base.type](a, b);
					var c = E(a.value.base, b),
						d = void 0,
						e = void 0,
						f = b.fontMetrics(),
						g = void 0,
						h = 0,
						l = 0;
					a.value.sup && (g = b.havingStyle(b.style.sup()), d = E(a.value.sup, g, b), z(a.value.base) || (h = c.height - g.fontMetrics().supDrop * g.sizeMultiplier / b.sizeMultiplier));
					a.value.sub && (g = b.havingStyle(b.style.sub()), e = E(a.value.sub, g, b), z(a.value.base) || (l = c.depth + g.fontMetrics().subDrop * g.sizeMultiplier / b.sizeMultiplier));
					b.style === i["default"].DISPLAY ? g = f.sup1 : b.style.cramped ? g = f.sup3 : g = f.sup2;
					var n = b.sizeMultiplier;
					n = .5 / f.ptPerEm / n + "em";
					var o = void 0;
					if (!a.value.sup) {
						l = Math.max(l, f.sub1, e.height - .8 * f.xHeight);
						var p = [{
							type: "elem",
							elem: e,
							marginRight: n
						}];
						c instanceof m["default"].symbolNode && (p[0].marginLeft = -c.italic + "em");
						o = k["default"].makeVList(p, "shift", l, b)
					} else if (!a.value.sub) h = Math.max(h, g, d.depth + .25 * f.xHeight), o = k["default"].makeVList([{
						type: "elem",
						elem: d,
						marginRight: n
					}], "shift", -h, b);
					else {
						h = Math.max(h, g, d.depth + .25 * f.xHeight);
						l = Math.max(l, f.sub2);
						p = f.defaultRuleThickness;
						if (h - d.depth - (e.height - l) < 4 * p) {
							l = 4 * p - (h - d.depth) + e.height;
							a = .8 * f.xHeight - (h - d.depth);
							a > 0 && (h += a, l -= a)
						}
						g = [{
							type: "elem",
							elem: e,
							shift: l,
							marginRight: n
						}, {
							type: "elem",
							elem: d,
							shift: -h,
							marginRight: n
						}];
						c instanceof m["default"].symbolNode && (g[0].marginLeft = -c.italic + "em");
						o = k["default"].makeVList(g, "individualShift", null, b)
					}
					p = w(c) || "mord";
					return j.makeSpan([p], [c, j.makeSpan(["msupsub"], [o])], b)
				};
				B.genfrac = function (a, b) {
					var c = b.style;
					a.value.size === "display" ? c = i["default"].DISPLAY : a.value.size === "text" && (c = i["default"].TEXT);
					var d = c.fracNum(),
						e = c.fracDen(),
						f = void 0;
					f = b.havingStyle(d);
					d = E(a.value.numer, f, b);
					f = b.havingStyle(e);
					e = E(a.value.denom, f, b);
					var g = void 0,
						h = void 0,
						m = void 0;
					a.value.hasBarLine ? (g = C("frac-line", b), h = g.height, m = g.height) : (g = null, h = 0, m = b.fontMetrics().defaultRuleThickness);
					var n = void 0,
						o = void 0,
						p = void 0;
					c.size === i["default"].DISPLAY.size ? (n = b.fontMetrics().num1, h > 0 ? o = 3 * m : o = 7 * m, p = b.fontMetrics().denom1) : (h > 0 ? (n = b.fontMetrics().num2, o = m) : (n = b.fontMetrics().num3, o = 3 * m), p = b.fontMetrics().denom2);
					m = void 0;
					if (h === 0) {
						var q = n - d.depth - (e.height - p);
						q < o && (n += .5 * (o - q), p += .5 * (o - q));
						m = k["default"].makeVList([{
							type: "elem",
							elem: e,
							shift: p
						}, {
							type: "elem",
							elem: d,
							shift: -n
						}], "individualShift", null, b)
					} else {
						q = b.fontMetrics().axisHeight;
						n - d.depth - (q + .5 * h) < o && (n += o - (n - d.depth - (q + .5 * h)));
						q - .5 * h - (e.height - p) < o && (p += o - (q - .5 * h - (e.height - p)));
						o = -(q - .5 * h);
						m = k["default"].makeVList([{
							type: "elem",
							elem: e,
							shift: p
						}, {
							type: "elem",
							elem: g,
							shift: o
						}, {
							type: "elem",
							elem: d,
							shift: -n
						}], "individualShift", null, b)
					}
					f = b.havingStyle(c);
					m.height *= f.sizeMultiplier / b.sizeMultiplier;
					m.depth *= f.sizeMultiplier / b.sizeMultiplier;
					q = void 0;
					c.size === i["default"].DISPLAY.size ? q = b.fontMetrics().delim1 : q = b.fontMetrics().delim2;
					h = void 0;
					e = void 0;
					a.value.leftDelim == null ? h = A(b, ["mopen"]) : h = l["default"].customSizedDelim(a.value.leftDelim, q, !0, b.havingStyle(c), a.mode, ["mopen"]);
					a.value.rightDelim == null ? e = A(b, ["mclose"]) : e = l["default"].customSizedDelim(a.value.rightDelim, q, !0, b.havingStyle(c), a.mode, ["mclose"]);
					return j.makeSpan(["mord"].concat(f.sizingClasses(b)), [h, j.makeSpan(["mfrac"], [m]), e], b)
				};
				B.array = function (a, b) {
					var c = void 0,
						d = void 0,
						e = a.value.body.length,
						f = 0,
						g = new Array(e),
						i = 1 / b.fontMetrics().ptPerEm,
						l = 5 * i,
						m = 12 * i;
					i = 3 * i;
					var p = o["default"].deflt(a.value.arraystretch, 1);
					p = p * m;
					m = .7 * p;
					p = .3 * p;
					var q = 0;
					for (c = 0; c < a.value.body.length; ++c) {
						var r = a.value.body[c],
							s = m,
							t = p;
						f < r.length && (f = r.length);
						var u = new Array(r.length);
						for (d = 0; d < r.length; ++d) {
							var v = E(r[d], b);
							t < v.depth && (t = v.depth);
							s < v.height && (s = v.height);
							u[d] = v
						}
						v = 0;
						a.value.rowGaps[c] && (v = n["default"].calculateSize(a.value.rowGaps[c].value, b), v > 0 && (v += p, t < v && (t = v), v = 0));
						a.value.addJot && (t += i);
						u.height = s;
						u.depth = t;
						q += s;
						u.pos = q;
						q += t + v;
						g[c] = u
					}
					r = q / 2 + b.fontMetrics().axisHeight;
					s = a.value.cols || [];
					t = [];
					v = void 0;
					u = void 0;
					for (d = 0, u = 0; d < f || u < s.length; ++d, ++u) {
						p = s[u] || {};
						m = !0;
						while (p.type === "separator") {
							m || (v = j.makeSpan(["arraycolsep"], []), v.style.width = b.fontMetrics().doubleRuleSep + "em", t.push(v));
							if (p.separator === "|") {
								i = j.makeSpan(["vertical-separator"], []);
								i.style.height = q + "em";
								i.style.verticalAlign = -(q - r) + "em";
								t.push(i)
							} else throw new h["default"]("Invalid separator type: " + p.separator);
							u++;
							p = s[u] || {};
							m = !1
						}
						if (d >= f) continue;
						i = void 0;
						(d > 0 || a.value.hskipBeforeAndAfter) && (i = o["default"].deflt(p.pregap, l), i !== 0 && (v = j.makeSpan(["arraycolsep"], []), v.style.width = i + "em", t.push(v)));
						m = [];
						for (c = 0; c < e; ++c) {
							var w = g[c],
								x = w[d];
							if (!x) continue;
							var y = w.pos - r;
							x.depth = w.depth;
							x.height = w.height;
							m.push({
								type: "elem",
								elem: x,
								shift: y
							})
						}
						m = k["default"].makeVList(m, "individualShift", null, b);
						m = j.makeSpan(["col-align-" + (p.align || "c")], [m]);
						t.push(m);
						(d < f - 1 || a.value.hskipBeforeAndAfter) && (i = o["default"].deflt(p.postgap, l), i !== 0 && (v = j.makeSpan(["arraycolsep"], []), v.style.width = i + "em", t.push(v)))
					}
					g = j.makeSpan(["mtable"], t);
					return j.makeSpan(["mord"], [g], b)
				};
				B.spacing = function (a, b) {
					if (a.value === "\\ " || a.value === "\\space" || a.value === " " || a.value === "~")
						if (a.mode === "text") return k["default"].makeOrd(a, b, "textord");
						else return j.makeSpan(["mspace"], [k["default"].mathsym(a.value, a.mode, b)], b);
					else return j.makeSpan(["mspace", k["default"].spacingFunctions[a.value].className], [], b)
				};
				B.llap = function (a, b) {
					a = j.makeSpan(["inner"], [E(a.value.body, b)]);
					var c = j.makeSpan(["fix"], []);
					return j.makeSpan(["mord", "llap"], [a, c], b)
				};
				B.rlap = function (a, b) {
					a = j.makeSpan(["inner"], [E(a.value.body, b)]);
					var c = j.makeSpan(["fix"], []);
					return j.makeSpan(["mord", "rlap"], [a, c], b)
				};
				B.op = function (a, b) {
					var c = void 0,
						d = void 0,
						e = !1;
					a.type === "supsub" && (c = a.value.sup, d = a.value.sub, a = a.value.base, e = !0);
					var f = b.style,
						g = ["\\smallint"],
						h = !1;
					f.size === i["default"].DISPLAY.size && a.value.symbol && !o["default"].contains(g, a.value.body) && (h = !0);
					g = void 0;
					if (a.value.symbol) {
						var l = h ? "Size2-Regular" : "Size1-Regular";
						g = k["default"].makeSymbol(a.value.body, l, "math", b, ["mop", "op-symbol", h ? "large-op" : "small-op"])
					} else if (a.value.value) {
						l = v(a.value.value, b, !0);
						l.length === 1 && l[0] instanceof m["default"].symbolNode ? (g = l[0], g.classes[0] = "mop") : g = j.makeSpan(["mop"], l, b)
					} else {
						h = [];
						for (var l = 1; l < a.value.body.length; l++) h.push(k["default"].mathsym(a.value.body[l], a.mode));
						g = j.makeSpan(["mop"], h, b)
					}
					a = 0;
					l = 0;
					g instanceof m["default"].symbolNode && (a = (g.height - g.depth) / 2 - b.fontMetrics().axisHeight, l = g.italic);
					if (e) {
						g = j.makeSpan([], [g]);
						h = void 0;
						e = void 0;
						var n = void 0,
							p = void 0,
							q;
						c && (q = b.havingStyle(f.sup()), h = E(c, q, b), e = Math.max(b.fontMetrics().bigOpSpacing1, b.fontMetrics().bigOpSpacing3 - h.depth));
						d && (q = b.havingStyle(f.sub()), n = E(d, q, b), p = Math.max(b.fontMetrics().bigOpSpacing2, b.fontMetrics().bigOpSpacing4 - n.height));
						f = void 0;
						q = void 0;
						if (!c) f = g.height - a, f = k["default"].makeVList([{
							type: "kern",
							size: b.fontMetrics().bigOpSpacing5
						}, {
							type: "elem",
							elem: n,
							marginLeft: -l + "em"
						}, {
							type: "kern",
							size: p
						}, {
							type: "elem",
							elem: g
						}], "top", f, b);
						else if (!d) q = g.depth + a, f = k["default"].makeVList([{
							type: "elem",
							elem: g
						}, {
							type: "kern",
							size: e
						}, {
							type: "elem",
							elem: h,
							marginLeft: l + "em"
						}, {
							type: "kern",
							size: b.fontMetrics().bigOpSpacing5
						}], "bottom", q, b);
						else if (!c && !d) return g;
						else q = b.fontMetrics().bigOpSpacing5 + n.height + n.depth + p + g.depth + a, f = k["default"].makeVList([{
							type: "kern",
							size: b.fontMetrics().bigOpSpacing5
						}, {
							type: "elem",
							elem: n,
							marginLeft: -l + "em"
						}, {
							type: "kern",
							size: p
						}, {
							type: "elem",
							elem: g
						}, {
							type: "kern",
							size: e
						}, {
							type: "elem",
							elem: h,
							marginLeft: l + "em"
						}, {
							type: "kern",
							size: b.fontMetrics().bigOpSpacing5
						}], "bottom", q, b);
						return j.makeSpan(["mop", "op-limits"], [f], b)
					} else {
						a && (g.style.position = "relative", g.style.top = a + "em");
						return g
					}
				};
				B.mod = function (a, b) {
					var c = [];
					a.value.modType === "bmod" ? (b.style.isTight() || c.push(j.makeSpan(["mspace", "negativemediumspace"], [], b)), c.push(j.makeSpan(["mspace", "thickspace"], [], b))) : b.style.size === i["default"].DISPLAY.size ? c.push(j.makeSpan(["mspace", "quad"], [], b)) : a.value.modType === "mod" ? c.push(j.makeSpan(["mspace", "twelvemuspace"], [], b)) : c.push(j.makeSpan(["mspace", "eightmuspace"], [], b));
					(a.value.modType === "pod" || a.value.modType === "pmod") && c.push(k["default"].mathsym("(", a.mode));
					if (a.value.modType !== "pod") {
						var d = [k["default"].mathsym("m", a.mode), k["default"].mathsym("o", a.mode), k["default"].mathsym("d", a.mode)];
						a.value.modType === "bmod" ? (c.push(j.makeSpan(["mbin"], d, b)), c.push(j.makeSpan(["mspace", "thickspace"], [], b)), b.style.isTight() || c.push(j.makeSpan(["mspace", "negativemediumspace"], [], b))) : (Array.prototype.push.apply(c, d), c.push(j.makeSpan(["mspace", "sixmuspace"], [], b)))
					}
					a.value.value && Array.prototype.push.apply(c, v(a.value.value, b, !1));
					(a.value.modType === "pod" || a.value.modType === "pmod") && c.push(k["default"].mathsym(")", a.mode));
					return k["default"].makeFragment(c)
				};
				B.katex = function (a, b) {
					var c = j.makeSpan(["k"], [k["default"].mathsym("K", a.mode)], b),
						d = j.makeSpan(["a"], [k["default"].mathsym("A", a.mode)], b);
					d.height = (d.height + .2) * .75;
					d.depth = (d.height - .2) * .75;
					var e = j.makeSpan(["t"], [k["default"].mathsym("T", a.mode)], b),
						f = j.makeSpan(["e"], [k["default"].mathsym("E", a.mode)], b);
					f.height = f.height - .2155;
					f.depth = f.depth + .2155;
					a = j.makeSpan(["x"], [k["default"].mathsym("X", a.mode)], b);
					return j.makeSpan(["mord", "katex-logo"], [c, d, e, f, a], b)
				};
				var C = function (a, b, c) {
					a = j.makeSpan([a], [], b);
					a.height = c || b.fontMetrics().defaultRuleThickness;
					a.style.borderBottomWidth = a.height + "em";
					a.maxFontSize = 1;
					return a
				};
				B.overline = function (a, b) {
					a = E(a.value.body, b.havingCrampedStyle());
					var c = C("overline-line", b);
					a = k["default"].makeVList([{
						type: "elem",
						elem: a
					}, {
						type: "kern",
						size: 3 * c.height
					}, {
						type: "elem",
						elem: c
					}, {
						type: "kern",
						size: c.height
					}], "firstBaseline", null, b);
					return j.makeSpan(["mord", "overline"], [a], b)
				};
				B.underline = function (a, b) {
					a = E(a.value.body, b);
					var c = C("underline-line", b);
					c = k["default"].makeVList([{
						type: "kern",
						size: c.height
					}, {
						type: "elem",
						elem: c
					}, {
						type: "kern",
						size: 3 * c.height
					}, {
						type: "elem",
						elem: a
					}], "top", a.height, b);
					return j.makeSpan(["mord", "underline"], [c], b)
				};
				B.sqrt = function (a, b) {
					var c = E(a.value.body, b.havingCrampedStyle()),
						d = b.fontMetrics();
					d = d.defaultRuleThickness;
					var e = d;
					b.style.id < i["default"].TEXT.id && (e = b.fontMetrics().xHeight);
					e = d + e / 4;
					d = (c.height + c.depth + e + d) * b.sizeMultiplier;
					d = l["default"].customSizedDelim("\\surd", d, !1, b, a.mode);
					var f = j.makeSpan(["sqrt-sign"], [d], b);
					d = b.fontMetrics().sqrtRuleThickness * d.delimSizeMultiplier;
					var g = C("sqrt-line", b, d),
						h = f.height + f.depth - d;
					h > c.height + c.depth + e && (e = (e + h - c.height - c.depth) / 2);
					h = -(c.height + e + d) + f.height;
					f.style.top = h + "em";
					f.height -= h;
					f.depth += h;
					h = void 0;
					c.height === 0 && c.depth === 0 ? h = j.makeSpan() : h = k["default"].makeVList([{
						type: "elem",
						elem: c
					}, {
						type: "kern",
						size: e
					}, {
						type: "elem",
						elem: g
					}, {
						type: "kern",
						size: d
					}], "firstBaseline", null, b);
					if (!a.value.index) return j.makeSpan(["mord", "sqrt"], [f, h], b);
					else {
						c = b.havingStyle(i["default"].SCRIPTSCRIPT);
						e = E(a.value.index, c, b);
						g = Math.max(f.height, h.height);
						d = Math.max(f.depth, h.depth);
						a = .6 * (g - d);
						c = k["default"].makeVList([{
							type: "elem",
							elem: e
						}], "shift", -a, b);
						g = j.makeSpan(["root"], [c]);
						return j.makeSpan(["mord", "sqrt"], [g, f, h], b)
					}
				};

				function D(a, b, c) {
					a = v(a, b, !1);
					var d = b.sizeMultiplier / c.sizeMultiplier;
					for (var e = 0; e < a.length; e++) {
						var f = o["default"].indexOf(a[e].classes, "sizing");
						f < 0 ? Array.prototype.push.apply(a[e].classes, b.sizingClasses(c)) : a[e].classes[f + 1] === "reset-size" + b.size && (a[e].classes[f + 1] = "reset-size" + c.size);
						a[e].height *= d;
						a[e].depth *= d
					}
					return k["default"].makeFragment(a)
				}
				B.sizing = function (a, b) {
					var c = b.havingSize(a.value.size);
					return D(a.value.value, c, b)
				};
				B.styling = function (a, b) {
					var c = {
						display: i["default"].DISPLAY,
						text: i["default"].TEXT,
						script: i["default"].SCRIPT,
						scriptscript: i["default"].SCRIPTSCRIPT
					};
					c = c[a.value.style];
					c = b.havingStyle(c);
					return D(a.value.value, c, b)
				};
				B.font = function (a, b) {
					var c = a.value.font;
					return E(a.value.body, b.withFont(c))
				};
				B.delimsizing = function (a, b) {
					var c = a.value.value;
					return c === "." ? j.makeSpan([a.value.mclass]) : l["default"].sizedDelim(c, a.value.size, b, a.mode, [a.value.mclass])
				};
				B.leftright = function (a, b) {
					var c = v(a.value.body, b, !0),
						d = 0,
						e = 0,
						f = !1;
					for (var g = 0; g < c.length; g++) c[g].isMiddle ? f = !0 : (d = Math.max(c[g].height, d), e = Math.max(c[g].depth, e));
					d *= b.sizeMultiplier;
					e *= b.sizeMultiplier;
					a.value.left === "." ? g = A(b, ["mopen"]) : g = l["default"].leftRightDelim(a.value.left, d, e, b, a.mode, ["mopen"]);
					c.unshift(g);
					if (f)
						for (var g = 1; g < c.length; g++) {
							f = c[g];
							if (f.isMiddle) {
								c[g] = l["default"].leftRightDelim(f.isMiddle.value, d, e, f.isMiddle.options, a.mode, []);
								f = u(f.children, 0);
								f && k["default"].prependChildren(c[g], f)
							}
						}
					a.value.right === "." ? f = A(b, ["mclose"]) : f = l["default"].leftRightDelim(a.value.right, d, e, b, a.mode, ["mclose"]);
					c.push(f);
					return j.makeSpan(["minner"], c, b)
				};
				B.middle = function (a, b) {
					var c;
					a.value.value === "." ? c = A(b, []) : (c = l["default"].sizedDelim(a.value.value, 1, b, a.mode, []), c.isMiddle = {
						value: a.value.value,
						options: b
					});
					return c
				};
				B.rule = function (a, b) {
					var c = j.makeSpan(["mord", "rule"], [], b),
						d = 0;
					a.value.shift && (d = n["default"].calculateSize(a.value.shift, b));
					var e = n["default"].calculateSize(a.value.width, b);
					a = n["default"].calculateSize(a.value.height, b);
					c.style.borderRightWidth = e + "em";
					c.style.borderTopWidth = a + "em";
					c.style.bottom = d + "em";
					c.width = e;
					c.height = a + d;
					c.depth = -d;
					c.maxFontSize = a * 1.125 * b.sizeMultiplier;
					return c
				};
				B.kern = function (a, b) {
					var c = j.makeSpan(["mord", "rule"], [], b);
					if (a.value.dimension) {
						a = n["default"].calculateSize(a.value.dimension, b);
						c.style.marginLeft = a + "em"
					}
					return c
				};
				B.accent = function (a, b) {
					var c = a.value.base,
						d = void 0;
					if (a.type === "supsub") {
						var e = a;
						a = e.value.base;
						c = a.value.base;
						e.value.base = c;
						d = E(e, b)
					}
					e = E(c, b.havingCrampedStyle());
					var f = a.value.isShifty && z(c),
						g = 0;
					if (f) {
						f = y(c);
						c = E(f, b.havingCrampedStyle());
						g = c.skew
					}
					f = Math.min(e.height, b.fontMetrics().xHeight);
					if (!a.value.isStretchy) {
						c = k["default"].makeSymbol(a.value.label, "Main-Regular", "math", b);
						c.italic = 0;
						var h = a.value.label === "\\vec" ? "accent-vec" : null;
						h = j.makeSpan(["accent-body", h], [j.makeSpan([], [c])]);
						h.style.marginLeft = 2 * g + "em";
						h = k["default"].makeVList([{
							type: "elem",
							elem: e
						}, {
							type: "kern",
							size: -f
						}, {
							type: "elem",
							elem: h
						}], "firstBaseline", null, b)
					} else {
						h = p["default"].svgSpan(a, b);
						if (g > 0) {
							c = "calc(100% - " + 2 * g + "em) 100%";
							h.style.backgroundSize = c
						}
						h = k["default"].makeVList([{
							type: "elem",
							elem: e
						}, {
							type: "elem",
							elem: h
						}], "firstBaseline", null, b)
					}
					f = j.makeSpan(["mord", "accent"], [h], b);
					if (d) {
						d.children[0] = f;
						d.height = Math.max(f.height, d.height);
						d.classes[0] = "mord";
						return d
					} else return f
				};
				B.horizBrace = function (a, b) {
					var c = b.style,
						d = a.type === "supsub",
						e = void 0,
						f;
					d && (a.value.sup ? (f = b.havingStyle(c.sup()), e = E(a.value.sup, f, b)) : (f = b.havingStyle(c.sub()), e = E(a.value.sub, f, b)), a = a.value.base);
					c = E(a.value.base, b.havingBaseStyle(i["default"].DISPLAY));
					f = p["default"].svgSpan(a, b);
					var g;
					a.value.isOver ? g = k["default"].makeVList([{
						type: "elem",
						elem: c
					}, {
						type: "kern",
						size: .1
					}, {
						type: "elem",
						elem: f
					}], "firstBaseline", null, b) : g = k["default"].makeVList([{
						type: "elem",
						elem: f
					}, {
						type: "kern",
						size: .1
					}, {
						type: "elem",
						elem: c
					}], "bottom", c.depth + .1 + f.height, b);
					if (d) {
						c = j.makeSpan(["mord", a.value.isOver ? "mover" : "munder"], [g], b);
						a.value.isOver ? g = k["default"].makeVList([{
							type: "elem",
							elem: c
						}, {
							type: "kern",
							size: .2
						}, {
							type: "elem",
							elem: e
						}], "firstBaseline", null, b) : g = k["default"].makeVList([{
							type: "elem",
							elem: e
						}, {
							type: "kern",
							size: .2
						}, {
							type: "elem",
							elem: c
						}], "bottom", c.depth + .2 + e.height, b)
					}
					return j.makeSpan(["mord", a.value.isOver ? "mover" : "munder"], [g], b)
				};
				B.accentUnder = function (a, b) {
					var c = E(a.value.base, b),
						d = p["default"].svgSpan(a, b);
					a = /tilde/.test(a.value.label) ? .12 : 0;
					c = k["default"].makeVList([{
						type: "elem",
						elem: d
					}, {
						type: "kern",
						size: a
					}, {
						type: "elem",
						elem: c
					}], "bottom", d.height + a, b);
					return j.makeSpan(["mord", "accentunder"], [c], b)
				};
				B.enclose = function (a, b) {
					var c = E(a.value.body, b),
						d = a.value.label.substr(1),
						e = b.sizeMultiplier,
						f = void 0,
						g = 0;
					if (d === "sout") f = j.makeSpan(["stretchy", "sout"]), f.height = b.fontMetrics().defaultRuleThickness / e, f.maxFontSize = 1, g = -.5 * b.fontMetrics().xHeight;
					else {
						c.classes.push(d === "fbox" ? "boxpad" : "cancel-pad");
						e = z(a.value.body);
						a = d === "fbox" ? .34 : e ? .2 : 0;
						g = c.depth + a;
						f = p["default"].encloseSpan(c, e, d, a, b)
					}
					e = k["default"].makeVList([{
						type: "elem",
						elem: c,
						shift: 0
					}, {
						type: "elem",
						elem: f,
						shift: g
					}], "individualShift", null, b);
					if (/cancel/.test(d)) return j.makeSpan(["mord", "cancel-lap"], [e], b);
					else return j.makeSpan(["mord"], [e], b)
				};
				B.xArrow = function (a, b) {
					var c = b.style,
						d = b.havingStyle(c.sup()),
						e = E(a.value.body, d, b);
					e.classes.push("x-arrow-pad");
					var f = void 0;
					a.value.below && (d = b.havingStyle(c.sub()), f = E(a.value.below, d, b), f.classes.push("x-arrow-pad"));
					c = p["default"].svgSpan(a, b);
					d = -b.fontMetrics().axisHeight + c.depth;
					var g = -b.fontMetrics().axisHeight - c.height - .111;
					if (a.value.below) {
						a = -b.fontMetrics().axisHeight + f.height + c.height + .111;
						f = k["default"].makeVList([{
							type: "elem",
							elem: e,
							shift: g
						}, {
							type: "elem",
							elem: c,
							shift: d
						}, {
							type: "elem",
							elem: f,
							shift: a
						}], "individualShift", null, b)
					} else f = k["default"].makeVList([{
						type: "elem",
						elem: e,
						shift: g
					}, {
						type: "elem",
						elem: c,
						shift: d
					}], "individualShift", null, b);
					return j.makeSpan(["mrel", "x-arrow"], [f], b)
				};
				B.phantom = function (a, b) {
					a = v(a.value.value, b.withPhantom(), !1);
					return new k["default"].makeFragment(a)
				};
				B.mclass = function (a, b) {
					var c = v(a.value.value, b, !0);
					return j.makeSpan([a.value.mclass], c, b)
				};
				var E = function (a, b, c) {
					if (!a) return j.makeSpan();
					if (B[a.type]) {
						var d = B[a.type](a, b);
						if (c && b.size !== c.size) {
							d = j.makeSpan(b.sizingClasses(c), [d], b);
							b = b.sizeMultiplier / c.sizeMultiplier;
							d.height *= b;
							d.depth *= b
						}
						return d
					} else throw new h["default"]("Got group of unknown type: '" + a.type + "'")
				};
				c = function (a, b) {
					a = JSON.parse(g["default"](a));
					a = v(a, b, !0);
					a = j.makeSpan(["base"], a, b);
					b = j.makeSpan(["strut"]);
					var c = j.makeSpan(["strut", "bottom"]);
					b.style.height = a.height + "em";
					c.style.height = a.height + a.depth + "em";
					c.style.verticalAlign = -a.depth + "em";
					b = j.makeSpan(["katex-html"], [b, c, a]);
					b.setAttribute("aria-hidden", "true");
					return b
				};
				a.exports = c
			}, {
				"./ParseError": 29,
				"./Style": 33,
				"./buildCommon": 34,
				"./delimiter": 38,
				"./domTree": 39,
				"./stretchy": 47,
				"./units": 50,
				"./utils": 51,
				"babel-runtime/core-js/json/stringify": 2
			}],
			36: [function (c, a, b) {
				"use strict";
				var d = c("./buildCommon"),
					g = b(d),
					h = c("./fontMetrics"),
					i = b(h);
				h = c("./mathMLTree");
				var j = b(h);
				h = c("./ParseError");
				var k = b(h);
				h = c("./Style");
				var l = b(h);
				h = c("./symbols");
				var m = b(h);
				h = c("./utils");
				var n = b(h);
				h = c("./stretchy");
				var o = b(h);

				function b(a) {
					return a && a.__esModule ? a : {
						"default": a
					}
				}
				var p = function (a, b) {
						m["default"][b][a] && m["default"][b][a].replace && (a = m["default"][b][a].replace);
						return new j["default"].TextNode(a)
					},
					q = function (a, b) {
						var c = b.font;
						if (!c) return null;
						var e = a.mode;
						if (c === "mathit") return "italic";
						a = a.value;
						if (n["default"].contains(["\\imath", "\\jmath"], a)) return null;
						m["default"][e][a] && m["default"][e][a].replace && (a = m["default"][e][a].replace);
						e = d.fontMap[c].fontName;
						return i["default"].getCharacterMetrics(a, e) ? d.fontMap[b.font].variant : null
					},
					r = {},
					s = {
						mi: "italic",
						mn: "normal",
						mtext: "normal"
					};
				r.mathord = function (a, b) {
					var c = new j["default"].MathNode("mi", [p(a.value, a.mode)]);
					a = q(a, b) || "italic";
					a !== s[c.type] && c.setAttribute("mathvariant", a);
					return c
				};
				r.textord = function (a, b) {
					var c = p(a.value, a.mode);
					b = q(a, b) || "normal";
					var d = void 0;
					a.mode === "text" ? d = new j["default"].MathNode("mtext", [c]) : /[0-9]/.test(a.value) ? d = new j["default"].MathNode("mn", [c]) : a.value === "\\prime" ? d = new j["default"].MathNode("mo", [c]) : d = new j["default"].MathNode("mi", [c]);
					b !== s[d.type] && d.setAttribute("mathvariant", b);
					return d
				};
				r.bin = function (a) {
					a = new j["default"].MathNode("mo", [p(a.value, a.mode)]);
					return a
				};
				r.rel = function (a) {
					a = new j["default"].MathNode("mo", [p(a.value, a.mode)]);
					return a
				};
				r.open = function (a) {
					a = new j["default"].MathNode("mo", [p(a.value, a.mode)]);
					return a
				};
				r.close = function (a) {
					a = new j["default"].MathNode("mo", [p(a.value, a.mode)]);
					return a
				};
				r.inner = function (a) {
					a = new j["default"].MathNode("mo", [p(a.value, a.mode)]);
					return a
				};
				r.punct = function (a) {
					a = new j["default"].MathNode("mo", [p(a.value, a.mode)]);
					a.setAttribute("separator", "true");
					return a
				};
				r.ordgroup = function (a, b) {
					a = t(a.value, b);
					b = new j["default"].MathNode("mrow", a);
					return b
				};
				r.text = function (a, b) {
					a = a.value.body;
					var c = [],
						d = null;
					for (var e = 0; e < a.length; e++) {
						var f = u(a[e], b);
						f.type === "mtext" && d != null ? Array.prototype.push.apply(d.children, f.children) : (c.push(f), f.type === "mtext" && (d = f))
					}
					if (c.length === 1) return c[0];
					else return new j["default"].MathNode("mrow", c)
				};
				r.color = function (a, b) {
					b = t(a.value.value, b);
					b = new j["default"].MathNode("mstyle", b);
					b.setAttribute("mathcolor", a.value.color);
					return b
				};
				r.supsub = function (a, b) {
					var c = !1,
						d = void 0,
						e;
					a.value.base && (a.value.base.value.type === "horizBrace" && (e = a.value.sup ? !0 : !1, e === a.value.base.value.isOver && (c = !0, d = a.value.base.value.isOver)));
					e = !0;
					var f = [u(a.value.base, b, e)];
					a.value.sub && f.push(u(a.value.sub, b, e));
					a.value.sup && f.push(u(a.value.sup, b, e));
					if (c) e = d ? "mover" : "munder";
					else if (!a.value.sub) e = "msup";
					else if (!a.value.sup) e = "msub";
					else {
						c = a.value.base;
						c && c.value.limits && b.style === l["default"].DISPLAY ? e = "munderover" : e = "msubsup"
					}
					d = new j["default"].MathNode(e, f);
					return d
				};
				r.genfrac = function (a, b) {
					b = new j["default"].MathNode("mfrac", [u(a.value.numer, b), u(a.value.denom, b)]);
					a.value.hasBarLine || b.setAttribute("linethickness", "0px");
					if (a.value.leftDelim != null || a.value.rightDelim != null) {
						var c = [];
						if (a.value.leftDelim != null) {
							var d = new j["default"].MathNode("mo", [new j["default"].TextNode(a.value.leftDelim)]);
							d.setAttribute("fence", "true");
							c.push(d)
						}
						c.push(b);
						if (a.value.rightDelim != null) {
							d = new j["default"].MathNode("mo", [new j["default"].TextNode(a.value.rightDelim)]);
							d.setAttribute("fence", "true");
							c.push(d)
						}
						a = new j["default"].MathNode("mrow", c);
						return a
					}
					return b
				};
				r.array = function (a, b) {
					return new j["default"].MathNode("mtable", a.value.body.map(function (a) {
						return new j["default"].MathNode("mtr", a.map(function (a) {
							return new j["default"].MathNode("mtd", [u(a, b)])
						}))
					}))
				};
				r.sqrt = function (a, b) {
					var c;
					a.value.index ? c = new j["default"].MathNode("mroot", [u(a.value.body, b), u(a.value.index, b)]) : c = new j["default"].MathNode("msqrt", [u(a.value.body, b)]);
					return c
				};
				r.leftright = function (a, b) {
					b = t(a.value.body, b);
					if (a.value.left !== ".") {
						var c = new j["default"].MathNode("mo", [p(a.value.left, a.mode)]);
						c.setAttribute("fence", "true");
						b.unshift(c)
					}
					if (a.value.right !== ".") {
						c = new j["default"].MathNode("mo", [p(a.value.right, a.mode)]);
						c.setAttribute("fence", "true");
						b.push(c)
					}
					a = new j["default"].MathNode("mrow", b);
					return a
				};
				r.middle = function (a, b) {
					b = new j["default"].MathNode("mo", [p(a.value.middle, a.mode)]);
					b.setAttribute("fence", "true");
					return b
				};
				r.accent = function (a, b) {
					var c = void 0;
					a.value.isStretchy ? c = o["default"].mathMLnode(a.value.label) : c = new j["default"].MathNode("mo", [p(a.value.label, a.mode)]);
					a = new j["default"].MathNode("mover", [u(a.value.base, b), c]);
					a.setAttribute("accent", "true");
					return a
				};
				r.spacing = function (a) {
					var b = void 0;
					a.value === "\\ " || a.value === "\\space" || a.value === " " || a.value === "~" ? b = new j["default"].MathNode("mtext", [new j["default"].TextNode("\xa0")]) : (b = new j["default"].MathNode("mspace"), b.setAttribute("width", g["default"].spacingFunctions[a.value].size));
					return b
				};
				r.op = function (a, b) {
					var c;
					a.value.symbol ? c = new j["default"].MathNode("mo", [p(a.value.body, a.mode)]) : a.value.value ? c = new j["default"].MathNode("mo", t(a.value.value, b)) : c = new j["default"].MathNode("mi", [new j["default"].TextNode(a.value.body.slice(1))]);
					return c
				};
				r.mod = function (a, b) {
					var c = [];
					(a.value.modType === "pod" || a.value.modType === "pmod") && c.push(new j["default"].MathNode("mo", [p("(", a.mode)]));
					a.value.modType !== "pod" && c.push(new j["default"].MathNode("mo", [p("mod", a.mode)]));
					if (a.value.value) {
						var d = new j["default"].MathNode("mspace");
						d.setAttribute("width", "0.333333em");
						c.push(d);
						c = c.concat(t(a.value.value, b))
					}(a.value.modType === "pod" || a.value.modType === "pmod") && c.push(new j["default"].MathNode("mo", [p(")", a.mode)]));
					return new j["default"].MathNode("mo", c)
				};
				r.katex = function (a) {
					a = new j["default"].MathNode("mtext", [new j["default"].TextNode("KaTeX")]);
					return a
				};
				r.font = function (a, b) {
					var c = a.value.font;
					return u(a.value.body, b.withFont(c))
				};
				r.delimsizing = function (a) {
					var b = [];
					a.value.value !== "." && b.push(p(a.value.value, a.mode));
					b = new j["default"].MathNode("mo", b);
					a.value.mclass === "mopen" || a.value.mclass === "mclose" ? b.setAttribute("fence", "true") : b.setAttribute("fence", "false");
					return b
				};
				r.styling = function (a, b) {
					var c = {
						display: l["default"].DISPLAY,
						text: l["default"].TEXT,
						script: l["default"].SCRIPT,
						scriptscript: l["default"].SCRIPTSCRIPT
					};
					c = c[a.value.style];
					b = b.havingStyle(c);
					c = t(a.value.value, b);
					b = new j["default"].MathNode("mstyle", c);
					c = {
						display: ["0", "true"],
						text: ["0", "false"],
						script: ["1", "false"],
						scriptscript: ["2", "false"]
					};
					c = c[a.value.style];
					b.setAttribute("scriptlevel", c[0]);
					b.setAttribute("displaystyle", c[1]);
					return b
				};
				r.sizing = function (a, b) {
					b = b.havingSize(a.value.size);
					a = t(a.value.value, b);
					a = new j["default"].MathNode("mstyle", a);
					a.setAttribute("mathsize", b.sizeMultiplier + "em");
					return a
				};
				r.overline = function (a, b) {
					var c = new j["default"].MathNode("mo", [new j["default"].TextNode("\u203e")]);
					c.setAttribute("stretchy", "true");
					a = new j["default"].MathNode("mover", [u(a.value.body, b), c]);
					a.setAttribute("accent", "true");
					return a
				};
				r.underline = function (a, b) {
					var c = new j["default"].MathNode("mo", [new j["default"].TextNode("\u203e")]);
					c.setAttribute("stretchy", "true");
					a = new j["default"].MathNode("munder", [u(a.value.body, b), c]);
					a.setAttribute("accentunder", "true");
					return a
				};
				r.accentUnder = function (a, b) {
					var c = o["default"].mathMLnode(a.value.label);
					a = new j["default"].MathNode("munder", [u(a.value.body, b), c]);
					a.setAttribute("accentunder", "true");
					return a
				};
				r.enclose = function (a, b) {
					b = new j["default"].MathNode("menclose", [u(a.value.body, b)]);
					var c = "";
					switch (a.value.label) {
						case "\\bcancel":
							c = "downdiagonalstrike";
							break;
						case "\\sout":
							c = "horizontalstrike";
							break;
						case "\\fbox":
							c = "box";
							break;
						default:
							c = "updiagonalstrike"
					}
					b.setAttribute("notation", c);
					return b
				};
				r.horizBrace = function (a, b) {
					var c = o["default"].mathMLnode(a.value.label);
					return new j["default"].MathNode(a.value.isOver ? "mover" : "munder", [u(a.value.base, b), c])
				};
				r.xArrow = function (a, b) {
					var c = o["default"].mathMLnode(a.value.label),
						d, e;
					if (a.value.body) {
						var f = u(a.value.body, b);
						a.value.below ? (e = u(a.value.below, b), d = new j["default"].MathNode("munderover", [c, e, f])) : d = new j["default"].MathNode("mover", [c, f])
					} else a.value.below ? (e = u(a.value.below, b), d = new j["default"].MathNode("munder", [c, e])) : d = new j["default"].MathNode("mover", [c]);
					return d
				};
				r.rule = function (a) {
					a = new j["default"].MathNode("mrow");
					return a
				};
				r.kern = function (a) {
					a = new j["default"].MathNode("mrow");
					return a
				};
				r.llap = function (a, b) {
					a = new j["default"].MathNode("mpadded", [u(a.value.body, b)]);
					a.setAttribute("lspace", "-1width");
					a.setAttribute("width", "0px");
					return a
				};
				r.rlap = function (a, b) {
					a = new j["default"].MathNode("mpadded", [u(a.value.body, b)]);
					a.setAttribute("width", "0px");
					return a
				};
				r.phantom = function (a, b) {
					a = t(a.value.value, b);
					return new j["default"].MathNode("mphantom", a)
				};
				r.mclass = function (a, b) {
					a = t(a.value.value, b);
					return new j["default"].MathNode("mstyle", a)
				};
				var t = function (a, b) {
						var c = [];
						for (var d = 0; d < a.length; d++) {
							var e = a[d];
							c.push(u(e, b))
						}
						return c
					},
					u = function (a, b) {
						var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
						if (!a) return new j["default"].MathNode("mrow");
						if (r[a.type]) {
							var d = r[a.type](a, b);
							return c && (d.type === "mrow" && d.children.length === 1) ? d.children[0] : d
						} else throw new k["default"]("Got group of unknown type: '" + a.type + "'")
					};
				c = function (a, b, c) {
					a = t(a, c);
					c = new j["default"].MathNode("mrow", a);
					a = new j["default"].MathNode("annotation", [new j["default"].TextNode(b)]);
					a.setAttribute("encoding", "application/x-tex");
					b = new j["default"].MathNode("semantics", [c, a]);
					c = new j["default"].MathNode("math", [b]);
					return d.makeSpan(["katex-mathml"], [c])
				};
				a.exports = c
			}, {
				"./ParseError": 29,
				"./Style": 33,
				"./buildCommon": 34,
				"./fontMetrics": 41,
				"./mathMLTree": 45,
				"./stretchy": 47,
				"./symbols": 48,
				"./utils": 51
			}],
			37: [function (c, a, b) {
				"use strict";
				var d = c("./buildHTML"),
					g = b(d);
				d = c("./buildMathML");
				var h = b(d),
					i = c("./buildCommon");
				d = c("./Options");
				var j = b(d);
				d = c("./Settings");
				var k = b(d);
				d = c("./Style");
				var l = b(d);

				function b(a) {
					return a && a.__esModule ? a : {
						"default": a
					}
				}
				c = function (a, b, c) {
					c = c || new k["default"]({});
					var d = l["default"].TEXT;
					c.displayMode && (d = l["default"].DISPLAY);
					d = new j["default"]({
						style: d,
						maxSize: c.maxSize
					});
					b = h["default"](a, b, d);
					a = g["default"](a, d);
					d = i.makeSpan(["katex"], [b, a]);
					if (c.displayMode) return i.makeSpan(["katex-display"], [d]);
					else return d
				};
				a.exports = c
			}, {
				"./Options": 28,
				"./Settings": 32,
				"./Style": 33,
				"./buildCommon": 34,
				"./buildHTML": 35,
				"./buildMathML": 36
			}],
			38: [function (c, a, b) {
				"use strict";
				var d = c("./ParseError"),
					g = b(d);
				d = c("./Style");
				var h = b(d),
					i = c("./buildCommon"),
					j = b(i);
				d = c("./fontMetrics");
				var k = b(d);
				d = c("./symbols");
				var l = b(d);
				d = c("./utils");
				var m = b(d);

				function b(a) {
					return a && a.__esModule ? a : {
						"default": a
					}
				}
				var n = function (a, b) {
						if (l["default"].math[a] && l["default"].math[a].replace) return k["default"].getCharacterMetrics(l["default"].math[a].replace, b);
						else return k["default"].getCharacterMetrics(a, b)
					},
					o = function (a, b, c, d) {
						b = c.havingBaseStyle(b);
						d = i.makeSpan((d || []).concat(b.sizingClasses(c)), [a], c);
						d.delimSizeMultiplier = b.sizeMultiplier / c.sizeMultiplier;
						d.height *= d.delimSizeMultiplier;
						d.depth *= d.delimSizeMultiplier;
						d.maxFontSize = b.sizeMultiplier;
						return d
					},
					p = function (a, b, c) {
						c = b.havingBaseStyle(c);
						c = (1 - b.sizeMultiplier / c.sizeMultiplier) * b.fontMetrics().axisHeight;
						a.classes.push("delimcenter");
						a.style.top = c + "em";
						a.height -= c;
						a.depth += c
					},
					q = function (a, b, c, d, e, f) {
						a = j["default"].makeSymbol(a, "Main-Regular", e, d);
						e = o(a, b, d, f);
						c && p(e, d, b);
						return e
					},
					r = function (a, b, c, d) {
						return j["default"].makeSymbol(a, "Size" + b + "-Regular", c, d)
					},
					s = function (a, b, c, d, e, f) {
						a = r(a, b, e, d);
						e = o(i.makeSpan(["delimsizing", "size" + b], [a], d), h["default"].TEXT, d, f);
						c && p(e, d, h["default"].TEXT);
						return e
					},
					t = function (a, b, c) {
						var d = void 0;
						b === "Size1-Regular" ? d = "delim-size1" : b === "Size4-Regular" && (d = "delim-size4");
						d = i.makeSpan(["delimsizinginner", d], [i.makeSpan([], [j["default"].makeSymbol(a, b, c)])]);
						return {
							type: "elem",
							elem: d
						}
					},
					u = function (a, b, c, d, e, f) {
						var g = void 0,
							k = void 0,
							l = void 0,
							m = void 0;
						g = l = m = a;
						k = null;
						var p = "Size1-Regular";
						a === "\\uparrow" ? l = m = "\u23d0" : a === "\\Uparrow" ? l = m = "\u2016" : a === "\\downarrow" ? g = l = "\u23d0" : a === "\\Downarrow" ? g = l = "\u2016" : a === "\\updownarrow" ? (g = "\\uparrow", l = "\u23d0", m = "\\downarrow") : a === "\\Updownarrow" ? (g = "\\Uparrow", l = "\u2016", m = "\\Downarrow") : a === "[" || a === "\\lbrack" ? (g = "\u23a1", l = "\u23a2", m = "\u23a3", p = "Size4-Regular") : a === "]" || a === "\\rbrack" ? (g = "\u23a4", l = "\u23a5", m = "\u23a6", p = "Size4-Regular") : a === "\\lfloor" ? (l = g = "\u23a2", m = "\u23a3", p = "Size4-Regular") : a === "\\lceil" ? (g = "\u23a1", l = m = "\u23a2", p = "Size4-Regular") : a === "\\rfloor" ? (l = g = "\u23a5", m = "\u23a6", p = "Size4-Regular") : a === "\\rceil" ? (g = "\u23a4", l = m = "\u23a5", p = "Size4-Regular") : a === "(" ? (g = "\u239b", l = "\u239c", m = "\u239d", p = "Size4-Regular") : a === ")" ? (g = "\u239e", l = "\u239f", m = "\u23a0", p = "Size4-Regular") : a === "\\{" || a === "\\lbrace" ? (g = "\u23a7", k = "\u23a8", m = "\u23a9", l = "\u23aa", p = "Size4-Regular") : a === "\\}" || a === "\\rbrace" ? (g = "\u23ab", k = "\u23ac", m = "\u23ad", l = "\u23aa", p = "Size4-Regular") : a === "\\lgroup" ? (g = "\u23a7", m = "\u23a9", l = "\u23aa", p = "Size4-Regular") : a === "\\rgroup" ? (g = "\u23ab", m = "\u23ad", l = "\u23aa", p = "Size4-Regular") : a === "\\lmoustache" ? (g = "\u23a7", m = "\u23ad", l = "\u23aa", p = "Size4-Regular") : a === "\\rmoustache" ? (g = "\u23ab", m = "\u23a9", l = "\u23aa", p = "Size4-Regular") : a === "\\surd" && (g = "\ue001", m = "\u23b7", l = "\ue000", p = "Size4-Regular");
						a = n(g, p);
						a = a.height + a.depth;
						var q = n(l, p);
						q = q.height + q.depth;
						var r = n(m, p);
						r = r.height + r.depth;
						var s = 0,
							u = 1;
						if (k !== null) {
							var v = n(k, p);
							s = v.height + v.depth;
							u = 2
						}
						v = a + r + s;
						a = Math.ceil((b - v) / (u * q));
						r = v + a * u * q;
						s = d.fontMetrics().axisHeight;
						c && (s *= d.sizeMultiplier);
						b = r / 2 - s;
						v = [];
						v.push(t(m, p, e));
						if (k === null)
							for (var u = 0; u < a; u++) v.push(t(l, p, e));
						else {
							for (var q = 0; q < a; q++) v.push(t(l, p, e));
							v.push(t(k, p, e));
							for (var c = 0; c < a; c++) v.push(t(l, p, e))
						}
						v.push(t(g, p, e));
						r = d.havingBaseStyle(h["default"].TEXT);
						s = j["default"].makeVList(v, "bottom", b, r);
						return o(i.makeSpan(["delimsizing", "mult"], [s], r), h["default"].TEXT, d, f)
					},
					v = ["(", ")", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\\lceil", "\\rceil", "\\surd"],
					w = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\\lmoustache", "\\rmoustache"],
					x = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"],
					y = [0, 1.2, 1.8, 2.4, 3];
				c = function (a, b, c, d, e) {
					a === "<" || a === "\\lt" ? a = "\\langle" : (a === ">" || a === "\\gt") && (a = "\\rangle");
					if (m["default"].contains(v, a) || m["default"].contains(x, a)) return s(a, b, !1, c, d, e);
					else if (m["default"].contains(w, a)) return u(a, y[b], !1, c, d, e);
					else throw new g["default"]("Illegal delimiter: '" + a + "'")
				};
				var z = [{
						type: "small",
						style: h["default"].SCRIPTSCRIPT
					}, {
						type: "small",
						style: h["default"].SCRIPT
					}, {
						type: "small",
						style: h["default"].TEXT
					}, {
						type: "large",
						size: 1
					}, {
						type: "large",
						size: 2
					}, {
						type: "large",
						size: 3
					}, {
						type: "large",
						size: 4
					}],
					A = [{
						type: "small",
						style: h["default"].SCRIPTSCRIPT
					}, {
						type: "small",
						style: h["default"].SCRIPT
					}, {
						type: "small",
						style: h["default"].TEXT
					}, {
						type: "stack"
					}],
					B = [{
						type: "small",
						style: h["default"].SCRIPTSCRIPT
					}, {
						type: "small",
						style: h["default"].SCRIPT
					}, {
						type: "small",
						style: h["default"].TEXT
					}, {
						type: "large",
						size: 1
					}, {
						type: "large",
						size: 2
					}, {
						type: "large",
						size: 3
					}, {
						type: "large",
						size: 4
					}, {
						type: "stack"
					}],
					C = function (a) {
						if (a.type === "small") return "Main-Regular";
						else if (a.type === "large") return "Size" + a.size + "-Regular";
						else if (a.type === "stack") return "Size4-Regular"
					},
					D = function (a, b, c, d) {
						var e = Math.min(2, 3 - d.style.size);
						for (var e = e; e < c.length; e++) {
							if (c[e].type === "stack") break;
							var f = n(a, C(c[e]));
							f = f.height + f.depth;
							if (c[e].type === "small") {
								var g = d.havingBaseStyle(c[e].style);
								f *= g.sizeMultiplier
							}
							if (f > b) return c[e]
						}
						return c[c.length - 1]
					},
					E = function (a, b, c, d, e, f) {
						a === "<" || a === "\\lt" ? a = "\\langle" : (a === ">" || a === "\\gt") && (a = "\\rangle");
						var g;
						m["default"].contains(x, a) ? g = z : m["default"].contains(v, a) ? g = B : g = A;
						g = D(a, b, g, d);
						if (g.type === "small") return q(a, g.style, c, d, e, f);
						else if (g.type === "large") return s(a, g.size, c, d, e, f);
						else if (g.type === "stack") return u(a, b, c, d, e, f)
					};
				b = function (a, b, c, d, e, f) {
					var g = d.fontMetrics().axisHeight * d.sizeMultiplier,
						h = 901,
						i = 5 / d.fontMetrics().ptPerEm;
					b = Math.max(b - g, c + g);
					c = Math.max(b / 500 * h, 2 * b - i);
					return E(a, c, !0, d, e, f)
				};
				a.exports = {
					sizedDelim: c,
					customSizedDelim: E,
					leftRightDelim: b
				}
			}, {
				"./ParseError": 29,
				"./Style": 33,
				"./buildCommon": 34,
				"./fontMetrics": 41,
				"./symbols": 48,
				"./utils": 51
			}],
			39: [function (c, a, b) {
				"use strict";
				var d = c("babel-runtime/helpers/classCallCheck"),
					g = b(d);
				d = c("babel-runtime/helpers/createClass");
				var h = b(d);
				d = c("./unicodeRegexes");
				var i = b(d);
				d = c("./utils");
				var j = b(d);

				function b(a) {
					return a && a.__esModule ? a : {
						"default": a
					}
				}
				var k = function (a) {
					a = a.slice();
					for (var b = a.length - 1; b >= 0; b--) a[b] || a.splice(b, 1);
					return a.join(" ")
				};
				c = function () {
					function a(b, c, d) {
						g["default"](this, a), this.classes = b || [], this.children = c || [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {}, this.attributes = {}, d && (d.style.isTight() && this.classes.push("mtight"), d.getColor() && (this.style.color = d.getColor()))
					}
					h["default"](a, [{
						key: "setAttribute",
						value: function (a, b) {
							this.attributes[a] = b
						}
					}, {
						key: "tryCombine",
						value: function (a) {
							return !1
						}
					}, {
						key: "toNode",
						value: function () {
							var a = document.createElement("span");
							a.className = k(this.classes);
							for (var b in this.style) Object.prototype.hasOwnProperty.call(this.style, b) && (a.style[b] = this.style[b]);
							for (var c in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, c) && a.setAttribute(c, this.attributes[c]);
							for (var d = 0; d < this.children.length; d++) a.appendChild(this.children[d].toNode());
							return a
						}
					}, {
						key: "toMarkup",
						value: function () {
							var a = "<span";
							this.classes.length && (a += ' class="', a += j["default"].escape(k(this.classes)), a += '"');
							var b = "";
							for (var c in this.style) this.style.hasOwnProperty(c) && (b += j["default"].hyphenate(c) + ":" + this.style[c] + ";");
							b && (a += ' style="' + j["default"].escape(b) + '"');
							for (var d in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, d) && (a += " " + d + '="', a += j["default"].escape(this.attributes[d]), a += '"');
							a += ">";
							for (var b = 0; b < this.children.length; b++) a += this.children[b].toMarkup();
							a += "</span>";
							return a
						}
					}]);
					return a
				}();
				b = function () {
					function a(b) {
						g["default"](this, a), this.children = b || [], this.height = 0, this.depth = 0, this.maxFontSize = 0
					}
					h["default"](a, [{
						key: "toNode",
						value: function () {
							var a = document.createDocumentFragment();
							for (var b = 0; b < this.children.length; b++) a.appendChild(this.children[b].toNode());
							return a
						}
					}, {
						key: "toMarkup",
						value: function () {
							var a = "";
							for (var b = 0; b < this.children.length; b++) a += this.children[b].toMarkup();
							return a
						}
					}]);
					return a
				}();
				var l = {
					"\xee": "\u0131\u0302",
					"\xef": "\u0131\u0308",
					"\xed": "\u0131\u0301",
					"\xec": "\u0131\u0300"
				};
				d = function () {
					function a(b, c, d, e, f, h, j) {
						g["default"](this, a), this.value = b || "", this.height = c || 0, this.depth = d || 0, this.italic = e || 0, this.skew = f || 0, this.classes = h || [], this.style = j || {}, this.maxFontSize = 0, i["default"].cjkRegex.test(b) && (i["default"].hangulRegex.test(b) ? this.classes.push("hangul_fallback") : this.classes.push("cjk_fallback")), /[îïíì]/.test(this.value) && (this.value = l[this.value])
					}
					h["default"](a, [{
						key: "tryCombine",
						value: function (b) {
							if (!b || !(b instanceof a) || this.italic > 0 || k(this.classes) !== k(b.classes) || this.skew !== b.skew || this.maxFontSize !== b.maxFontSize) return !1;
							for (var c in this.style)
								if (this.style.hasOwnProperty(c) && this.style[c] !== b.style[c]) return !1;
							for (var d in b.style)
								if (b.style.hasOwnProperty(d) && this.style[d] !== b.style[d]) return !1;
							this.value += b.value;
							this.height = Math.max(this.height, b.height);
							this.depth = Math.max(this.depth, b.depth);
							this.italic = b.italic;
							return !0
						}
					}, {
						key: "toNode",
						value: function () {
							var a = document.createTextNode(this.value),
								b = null;
							this.italic > 0 && (b = document.createElement("span"), b.style.marginRight = this.italic + "em");
							this.classes.length > 0 && (b = b || document.createElement("span"), b.className = k(this.classes));
							for (var c in this.style) this.style.hasOwnProperty(c) && (b = b || document.createElement("span"), b.style[c] = this.style[c]);
							if (b) {
								b.appendChild(a);
								return b
							} else return a
						}
					}, {
						key: "toMarkup",
						value: function () {
							var a = !1,
								b = "<span";
							this.classes.length && (a = !0, b += ' class="', b += j["default"].escape(k(this.classes)), b += '"');
							var c = "";
							this.italic > 0 && (c += "margin-right:" + this.italic + "em;");
							for (var d in this.style) this.style.hasOwnProperty(d) && (c += j["default"].hyphenate(d) + ":" + this.style[d] + ";");
							c && (a = !0, b += ' style="' + j["default"].escape(c) + '"');
							c = j["default"].escape(this.value);
							if (a) {
								b += ">";
								b += c;
								b += "</span>";
								return b
							} else return c
						}
					}]);
					return a
				}();
				a.exports = {
					span: c,
					documentFragment: b,
					symbolNode: d
				}
			}, {
				"./unicodeRegexes": 49,
				"./utils": 51,
				"babel-runtime/helpers/classCallCheck": 4,
				"babel-runtime/helpers/createClass": 5
			}],
			40: [function (c, a, b) {
				"use strict";
				var d = c("./ParseNode"),
					g = b(d);
				d = c("./ParseError");
				var h = b(d);

				function b(a) {
					return a && a.__esModule ? a : {
						"default": a
					}
				}

				function i(a, b, c) {
					var d = [],
						e = [d],
						f = [];
					while (!0) {
						var i = a.parseExpression(!1, null);
						i = new g["default"]("ordgroup", i, a.mode);
						c && (i = new g["default"]("styling", {
							style: c,
							value: [i]
						}, a.mode));
						d.push(i);
						i = a.nextToken.text;
						if (i === "&") a.consume();
						else if (i === "\\end") break;
						else if (i === "\\\\" || i === "\\cr") {
							i = a.parseFunction();
							f.push(i.value.size);
							d = [];
							e.push(d)
						} else throw new h["default"]("Expected & or \\\\ or \\end", a.nextToken)
					}
					b.body = e;
					b.rowGaps = f;
					return new g["default"](b.type, b, a.mode)
				}

				function j(b, c, d) {
					typeof b === "string" && (b = [b]);
					typeof c === "number" && (c = {
						numArgs: c
					});
					c = {
						numArgs: c.numArgs || 0,
						argTypes: c.argTypes,
						greediness: 1,
						allowedInText: !!c.allowedInText,
						numOptionalArgs: c.numOptionalArgs || 0,
						handler: d
					};
					for (var d = 0; d < b.length; ++d) a.exports[b[d]] = c
				}

				function k(a) {
					if (a.substr(0, 1) === "d") return "display";
					else return "text"
				}
				j(["array", "darray"], {
					numArgs: 1
				}, function (a, b) {
					b = b[0];
					b = b.value.map ? b.value : [b];
					b = b.map(function (a) {
						var b = a.value;
						if ("lcr".indexOf(b) !== -1) return {
							type: "align",
							align: b
						};
						else if (b === "|") return {
							type: "separator",
							separator: "|"
						};
						throw new h["default"]("Unknown column alignment: " + a.value, a)
					});
					b = {
						type: "array",
						cols: b,
						hskipBeforeAndAfter: !0
					};
					b = i(a.parser, b, k(a.envName));
					return b
				});
				j(["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix"], {}, function (a) {
					var b = {
							matrix: null,
							pmatrix: ["(", ")"],
							bmatrix: ["[", "]"],
							Bmatrix: ["\\{", "\\}"],
							vmatrix: ["|", "|"],
							Vmatrix: ["\\Vert", "\\Vert"]
						}[a.envName],
						c = {
							type: "array",
							hskipBeforeAndAfter: !1
						};
					c = i(a.parser, c, k(a.envName));
					b && (c = new g["default"]("leftright", {
						body: [c],
						left: b[0],
						right: b[1]
					}, a.mode));
					return c
				});
				j(["cases", "dcases"], {}, function (a) {
					var b = {
						type: "array",
						arraystretch: 1.2,
						cols: [{
							type: "align",
							align: "l",
							pregap: 0,
							postgap: 1
						}, {
							type: "align",
							align: "l",
							pregap: 0,
							postgap: 0
						}]
					};
					b = i(a.parser, b, k(a.envName));
					b = new g["default"]("leftright", {
						body: [b],
						left: "\\{",
						right: "."
					}, a.mode);
					return b
				});
				j("aligned", {}, function (a) {
					var b = {
						type: "array",
						cols: [],
						addJot: !0
					};
					b = i(a.parser, b, "display");
					var c = new g["default"]("ordgroup", [], a.mode),
						d = 0;
					b.value.body.forEach(function (a) {
						for (var b = 1; b < a.length; b += 2) {
							var e = a[b].value.value[0];
							e.value.unshift(c)
						}
						d < a.length && (d = a.length)
					});
					for (var a = 0; a < d; ++a) {
						var e = "r",
							f = 0;
						a % 2 === 1 ? e = "l" : a > 0 && (f = 2);
						b.value.cols[a] = {
							type: "align",
							align: e,
							pregap: f,
							postgap: 0
						}
					}
					return b
				});
				j("gathered", {}, function (a) {
					var b = {
						type: "array",
						cols: [{
							type: "align",
							align: "c"
						}],
						addJot: !0
					};
					b = i(a.parser, b, "display");
					return b
				})
			}, {
				"./ParseError": 29,
				"./ParseNode": 30
			}],
			41: [function (c, a, b) {
				"use strict";
				var d = c("./unicodeRegexes");
				c = c("./fontMetricsData");
				var g = b(c);

				function b(a) {
					return a && a.__esModule ? a : {
						"default": a
					}
				}
				var h = {
						slant: [.25, .25, .25],
						space: [0, 0, 0],
						stretch: [0, 0, 0],
						shrink: [0, 0, 0],
						xHeight: [.431, .431, .431],
						quad: [1, 1.171, 1.472],
						extraSpace: [0, 0, 0],
						num1: [.677, .732, .925],
						num2: [.394, .384, .387],
						num3: [.444, .471, .504],
						denom1: [.686, .752, 1.025],
						denom2: [.345, .344, .532],
						sup1: [.413, .503, .504],
						sup2: [.363, .431, .404],
						sup3: [.289, .286, .294],
						sub1: [.15, .143, .2],
						sub2: [.247, .286, .4],
						supDrop: [.386, .353, .494],
						subDrop: [.05, .071, .1],
						delim1: [2.39, 1.7, 1.98],
						delim2: [1.01, 1.157, 1.42],
						axisHeight: [.25, .25, .25],
						defaultRuleThickness: [.04, .049, .049],
						bigOpSpacing1: [.111, .111, .111],
						bigOpSpacing2: [.166, .166, .166],
						bigOpSpacing3: [.2, .2, .2],
						bigOpSpacing4: [.6, .611, .611],
						bigOpSpacing5: [.1, .143, .143],
						sqrtRuleThickness: [.04, .04, .04],
						ptPerEm: [10, 10, 10],
						doubleRuleSep: [.2, .2, .2]
					},
					i = {
						"\xc0": "A",
						"\xc1": "A",
						"\xc2": "A",
						"\xc3": "A",
						"\xc4": "A",
						"\xc5": "A",
						"\xc6": "A",
						"\xc7": "C",
						"\xc8": "E",
						"\xc9": "E",
						"\xca": "E",
						"\xcb": "E",
						"\xcc": "I",
						"\xcd": "I",
						"\xce": "I",
						"\xcf": "I",
						"\xd0": "D",
						"\xd1": "N",
						"\xd2": "O",
						"\xd3": "O",
						"\xd4": "O",
						"\xd5": "O",
						"\xd6": "O",
						"\xd8": "O",
						"\xd9": "U",
						"\xda": "U",
						"\xdb": "U",
						"\xdc": "U",
						"\xdd": "Y",
						"\xde": "o",
						"\xdf": "B",
						"\xe0": "a",
						"\xe1": "a",
						"\xe2": "a",
						"\xe3": "a",
						"\xe4": "a",
						"\xe5": "a",
						"\xe6": "a",
						"\xe7": "c",
						"\xe8": "e",
						"\xe9": "e",
						"\xea": "e",
						"\xeb": "e",
						"\xec": "i",
						"\xed": "i",
						"\xee": "i",
						"\xef": "i",
						"\xf0": "d",
						"\xf1": "n",
						"\xf2": "o",
						"\xf3": "o",
						"\xf4": "o",
						"\xf5": "o",
						"\xf6": "o",
						"\xf8": "o",
						"\xf9": "u",
						"\xfa": "u",
						"\xfb": "u",
						"\xfc": "u",
						"\xfd": "y",
						"\xfe": "o",
						"\xff": "y",
						"\u0410": "A",
						"\u0411": "B",
						"\u0412": "B",
						"\u0413": "F",
						"\u0414": "A",
						"\u0415": "E",
						"\u0416": "K",
						"\u0417": "3",
						"\u0418": "N",
						"\u0419": "N",
						"\u041a": "K",
						"\u041b": "N",
						"\u041c": "M",
						"\u041d": "H",
						"\u041e": "O",
						"\u041f": "N",
						"\u0420": "P",
						"\u0421": "C",
						"\u0422": "T",
						"\u0423": "y",
						"\u0424": "O",
						"\u0425": "X",
						"\u0426": "U",
						"\u0427": "h",
						"\u0428": "W",
						"\u0429": "W",
						"\u042a": "B",
						"\u042b": "X",
						"\u042c": "B",
						"\u042d": "3",
						"\u042e": "X",
						"\u042f": "R",
						"\u0430": "a",
						"\u0431": "b",
						"\u0432": "a",
						"\u0433": "r",
						"\u0434": "y",
						"\u0435": "e",
						"\u0436": "m",
						"\u0437": "e",
						"\u0438": "n",
						"\u0439": "n",
						"\u043a": "n",
						"\u043b": "n",
						"\u043c": "m",
						"\u043d": "n",
						"\u043e": "o",
						"\u043f": "n",
						"\u0440": "p",
						"\u0441": "c",
						"\u0442": "o",
						"\u0443": "y",
						"\u0444": "b",
						"\u0445": "x",
						"\u0446": "n",
						"\u0447": "n",
						"\u0448": "w",
						"\u0449": "w",
						"\u044a": "a",
						"\u044b": "m",
						"\u044c": "a",
						"\u044d": "e",
						"\u044e": "m",
						"\u044f": "r"
					};
				b = function (a, b) {
					var c = a.charCodeAt(0);
					a[0] in i ? c = i[a[0]].charCodeAt(0) : d.cjkRegex.test(a[0]) && (c = "M".charCodeAt(0));
					a = g["default"][b][c];
					if (a) return {
						depth: a[0],
						height: a[1],
						italic: a[2],
						skew: a[3],
						width: a[4]
					}
				};
				var j = {};
				c = function (a) {
					var b = void 0;
					a >= 5 ? b = 0 : a >= 3 ? b = 1 : b = 2;
					if (!j[b]) {
						a = j[b] = {};
						for (var c in h) h.hasOwnProperty(c) && (a[c] = h[c][b]);
						a.cssEmPerMu = a.quad / 18
					}
					return j[b]
				};
				a.exports = {
					getFontMetrics: c,
					getCharacterMetrics: b
				}
			}, {
				"./fontMetricsData": 42,
				"./unicodeRegexes": 49
			}],
			42: [function (c, a, b) {
				"use strict";
				a.exports = {
					"AMS-Regular": {
						65: [0, .68889, 0, 0],
						66: [0, .68889, 0, 0],
						67: [0, .68889, 0, 0],
						68: [0, .68889, 0, 0],
						69: [0, .68889, 0, 0],
						70: [0, .68889, 0, 0],
						71: [0, .68889, 0, 0],
						72: [0, .68889, 0, 0],
						73: [0, .68889, 0, 0],
						74: [.16667, .68889, 0, 0],
						75: [0, .68889, 0, 0],
						76: [0, .68889, 0, 0],
						77: [0, .68889, 0, 0],
						78: [0, .68889, 0, 0],
						79: [.16667, .68889, 0, 0],
						80: [0, .68889, 0, 0],
						81: [.16667, .68889, 0, 0],
						82: [0, .68889, 0, 0],
						83: [0, .68889, 0, 0],
						84: [0, .68889, 0, 0],
						85: [0, .68889, 0, 0],
						86: [0, .68889, 0, 0],
						87: [0, .68889, 0, 0],
						88: [0, .68889, 0, 0],
						89: [0, .68889, 0, 0],
						90: [0, .68889, 0, 0],
						107: [0, .68889, 0, 0],
						165: [0, .675, .025, 0],
						174: [.15559, .69224, 0, 0],
						240: [0, .68889, 0, 0],
						295: [0, .68889, 0, 0],
						710: [0, .825, 0, 0],
						732: [0, .9, 0, 0],
						770: [0, .825, 0, 0],
						771: [0, .9, 0, 0],
						989: [.08167, .58167, 0, 0],
						1008: [0, .43056, .04028, 0],
						8245: [0, .54986, 0, 0],
						8463: [0, .68889, 0, 0],
						8487: [0, .68889, 0, 0],
						8498: [0, .68889, 0, 0],
						8502: [0, .68889, 0, 0],
						8503: [0, .68889, 0, 0],
						8504: [0, .68889, 0, 0],
						8513: [0, .68889, 0, 0],
						8592: [-.03598, .46402, 0, 0],
						8594: [-.03598, .46402, 0, 0],
						8602: [-.13313, .36687, 0, 0],
						8603: [-.13313, .36687, 0, 0],
						8606: [.01354, .52239, 0, 0],
						8608: [.01354, .52239, 0, 0],
						8610: [.01354, .52239, 0, 0],
						8611: [.01354, .52239, 0, 0],
						8619: [0, .54986, 0, 0],
						8620: [0, .54986, 0, 0],
						8621: [-.13313, .37788, 0, 0],
						8622: [-.13313, .36687, 0, 0],
						8624: [0, .69224, 0, 0],
						8625: [0, .69224, 0, 0],
						8630: [0, .43056, 0, 0],
						8631: [0, .43056, 0, 0],
						8634: [.08198, .58198, 0, 0],
						8635: [.08198, .58198, 0, 0],
						8638: [.19444, .69224, 0, 0],
						8639: [.19444, .69224, 0, 0],
						8642: [.19444, .69224, 0, 0],
						8643: [.19444, .69224, 0, 0],
						8644: [.1808, .675, 0, 0],
						8646: [.1808, .675, 0, 0],
						8647: [.1808, .675, 0, 0],
						8648: [.19444, .69224, 0, 0],
						8649: [.1808, .675, 0, 0],
						8650: [.19444, .69224, 0, 0],
						8651: [.01354, .52239, 0, 0],
						8652: [.01354, .52239, 0, 0],
						8653: [-.13313, .36687, 0, 0],
						8654: [-.13313, .36687, 0, 0],
						8655: [-.13313, .36687, 0, 0],
						8666: [.13667, .63667, 0, 0],
						8667: [.13667, .63667, 0, 0],
						8669: [-.13313, .37788, 0, 0],
						8672: [-.064, .437, 0, 0],
						8674: [-.064, .437, 0, 0],
						8705: [0, .825, 0, 0],
						8708: [0, .68889, 0, 0],
						8709: [.08167, .58167, 0, 0],
						8717: [0, .43056, 0, 0],
						8722: [-.03598, .46402, 0, 0],
						8724: [.08198, .69224, 0, 0],
						8726: [.08167, .58167, 0, 0],
						8733: [0, .69224, 0, 0],
						8736: [0, .69224, 0, 0],
						8737: [0, .69224, 0, 0],
						8738: [.03517, .52239, 0, 0],
						8739: [.08167, .58167, 0, 0],
						8740: [.25142, .74111, 0, 0],
						8741: [.08167, .58167, 0, 0],
						8742: [.25142, .74111, 0, 0],
						8756: [0, .69224, 0, 0],
						8757: [0, .69224, 0, 0],
						8764: [-.13313, .36687, 0, 0],
						8765: [-.13313, .37788, 0, 0],
						8769: [-.13313, .36687, 0, 0],
						8770: [-.03625, .46375, 0, 0],
						8774: [.30274, .79383, 0, 0],
						8776: [-.01688, .48312, 0, 0],
						8778: [.08167, .58167, 0, 0],
						8782: [.06062, .54986, 0, 0],
						8783: [.06062, .54986, 0, 0],
						8785: [.08198, .58198, 0, 0],
						8786: [.08198, .58198, 0, 0],
						8787: [.08198, .58198, 0, 0],
						8790: [0, .69224, 0, 0],
						8791: [.22958, .72958, 0, 0],
						8796: [.08198, .91667, 0, 0],
						8806: [.25583, .75583, 0, 0],
						8807: [.25583, .75583, 0, 0],
						8808: [.25142, .75726, 0, 0],
						8809: [.25142, .75726, 0, 0],
						8812: [.25583, .75583, 0, 0],
						8814: [.20576, .70576, 0, 0],
						8815: [.20576, .70576, 0, 0],
						8816: [.30274, .79383, 0, 0],
						8817: [.30274, .79383, 0, 0],
						8818: [.22958, .72958, 0, 0],
						8819: [.22958, .72958, 0, 0],
						8822: [.1808, .675, 0, 0],
						8823: [.1808, .675, 0, 0],
						8828: [.13667, .63667, 0, 0],
						8829: [.13667, .63667, 0, 0],
						8830: [.22958, .72958, 0, 0],
						8831: [.22958, .72958, 0, 0],
						8832: [.20576, .70576, 0, 0],
						8833: [.20576, .70576, 0, 0],
						8840: [.30274, .79383, 0, 0],
						8841: [.30274, .79383, 0, 0],
						8842: [.13597, .63597, 0, 0],
						8843: [.13597, .63597, 0, 0],
						8847: [.03517, .54986, 0, 0],
						8848: [.03517, .54986, 0, 0],
						8858: [.08198, .58198, 0, 0],
						8859: [.08198, .58198, 0, 0],
						8861: [.08198, .58198, 0, 0],
						8862: [0, .675, 0, 0],
						8863: [0, .675, 0, 0],
						8864: [0, .675, 0, 0],
						8865: [0, .675, 0, 0],
						8872: [0, .69224, 0, 0],
						8873: [0, .69224, 0, 0],
						8874: [0, .69224, 0, 0],
						8876: [0, .68889, 0, 0],
						8877: [0, .68889, 0, 0],
						8878: [0, .68889, 0, 0],
						8879: [0, .68889, 0, 0],
						8882: [.03517, .54986, 0, 0],
						8883: [.03517, .54986, 0, 0],
						8884: [.13667, .63667, 0, 0],
						8885: [.13667, .63667, 0, 0],
						8888: [0, .54986, 0, 0],
						8890: [.19444, .43056, 0, 0],
						8891: [.19444, .69224, 0, 0],
						8892: [.19444, .69224, 0, 0],
						8901: [0, .54986, 0, 0],
						8903: [.08167, .58167, 0, 0],
						8905: [.08167, .58167, 0, 0],
						8906: [.08167, .58167, 0, 0],
						8907: [0, .69224, 0, 0],
						8908: [0, .69224, 0, 0],
						8909: [-.03598, .46402, 0, 0],
						8910: [0, .54986, 0, 0],
						8911: [0, .54986, 0, 0],
						8912: [.03517, .54986, 0, 0],
						8913: [.03517, .54986, 0, 0],
						8914: [0, .54986, 0, 0],
						8915: [0, .54986, 0, 0],
						8916: [0, .69224, 0, 0],
						8918: [.0391, .5391, 0, 0],
						8919: [.0391, .5391, 0, 0],
						8920: [.03517, .54986, 0, 0],
						8921: [.03517, .54986, 0, 0],
						8922: [.38569, .88569, 0, 0],
						8923: [.38569, .88569, 0, 0],
						8926: [.13667, .63667, 0, 0],
						8927: [.13667, .63667, 0, 0],
						8928: [.30274, .79383, 0, 0],
						8929: [.30274, .79383, 0, 0],
						8934: [.23222, .74111, 0, 0],
						8935: [.23222, .74111, 0, 0],
						8936: [.23222, .74111, 0, 0],
						8937: [.23222, .74111, 0, 0],
						8938: [.20576, .70576, 0, 0],
						8939: [.20576, .70576, 0, 0],
						8940: [.30274, .79383, 0, 0],
						8941: [.30274, .79383, 0, 0],
						8994: [.19444, .69224, 0, 0],
						8995: [.19444, .69224, 0, 0],
						9416: [.15559, .69224, 0, 0],
						9484: [0, .69224, 0, 0],
						9488: [0, .69224, 0, 0],
						9492: [0, .37788, 0, 0],
						9496: [0, .37788, 0, 0],
						9585: [.19444, .68889, 0, 0],
						9586: [.19444, .74111, 0, 0],
						9632: [0, .675, 0, 0],
						9633: [0, .675, 0, 0],
						9650: [0, .54986, 0, 0],
						9651: [0, .54986, 0, 0],
						9654: [.03517, .54986, 0, 0],
						9660: [0, .54986, 0, 0],
						9661: [0, .54986, 0, 0],
						9664: [.03517, .54986, 0, 0],
						9674: [.11111, .69224, 0, 0],
						9733: [.19444, .69224, 0, 0],
						10003: [0, .69224, 0, 0],
						10016: [0, .69224, 0, 0],
						10731: [.11111, .69224, 0, 0],
						10846: [.19444, .75583, 0, 0],
						10877: [.13667, .63667, 0, 0],
						10878: [.13667, .63667, 0, 0],
						10885: [.25583, .75583, 0, 0],
						10886: [.25583, .75583, 0, 0],
						10887: [.13597, .63597, 0, 0],
						10888: [.13597, .63597, 0, 0],
						10889: [.26167, .75726, 0, 0],
						10890: [.26167, .75726, 0, 0],
						10891: [.48256, .98256, 0, 0],
						10892: [.48256, .98256, 0, 0],
						10901: [.13667, .63667, 0, 0],
						10902: [.13667, .63667, 0, 0],
						10933: [.25142, .75726, 0, 0],
						10934: [.25142, .75726, 0, 0],
						10935: [.26167, .75726, 0, 0],
						10936: [.26167, .75726, 0, 0],
						10937: [.26167, .75726, 0, 0],
						10938: [.26167, .75726, 0, 0],
						10949: [.25583, .75583, 0, 0],
						10950: [.25583, .75583, 0, 0],
						10955: [.28481, .79383, 0, 0],
						10956: [.28481, .79383, 0, 0],
						57350: [.08167, .58167, 0, 0],
						57351: [.08167, .58167, 0, 0],
						57352: [.08167, .58167, 0, 0],
						57353: [0, .43056, .04028, 0],
						57356: [.25142, .75726, 0, 0],
						57357: [.25142, .75726, 0, 0],
						57358: [.41951, .91951, 0, 0],
						57359: [.30274, .79383, 0, 0],
						57360: [.30274, .79383, 0, 0],
						57361: [.41951, .91951, 0, 0],
						57366: [.25142, .75726, 0, 0],
						57367: [.25142, .75726, 0, 0],
						57368: [.25142, .75726, 0, 0],
						57369: [.25142, .75726, 0, 0],
						57370: [.13597, .63597, 0, 0],
						57371: [.13597, .63597, 0, 0]
					},
					"Caligraphic-Regular": {
						48: [0, .43056, 0, 0],
						49: [0, .43056, 0, 0],
						50: [0, .43056, 0, 0],
						51: [.19444, .43056, 0, 0],
						52: [.19444, .43056, 0, 0],
						53: [.19444, .43056, 0, 0],
						54: [0, .64444, 0, 0],
						55: [.19444, .43056, 0, 0],
						56: [0, .64444, 0, 0],
						57: [.19444, .43056, 0, 0],
						65: [0, .68333, 0, .19445],
						66: [0, .68333, .03041, .13889],
						67: [0, .68333, .05834, .13889],
						68: [0, .68333, .02778, .08334],
						69: [0, .68333, .08944, .11111],
						70: [0, .68333, .09931, .11111],
						71: [.09722, .68333, .0593, .11111],
						72: [0, .68333, .00965, .11111],
						73: [0, .68333, .07382, 0],
						74: [.09722, .68333, .18472, .16667],
						75: [0, .68333, .01445, .05556],
						76: [0, .68333, 0, .13889],
						77: [0, .68333, 0, .13889],
						78: [0, .68333, .14736, .08334],
						79: [0, .68333, .02778, .11111],
						80: [0, .68333, .08222, .08334],
						81: [.09722, .68333, 0, .11111],
						82: [0, .68333, 0, .08334],
						83: [0, .68333, .075, .13889],
						84: [0, .68333, .25417, 0],
						85: [0, .68333, .09931, .08334],
						86: [0, .68333, .08222, 0],
						87: [0, .68333, .08222, .08334],
						88: [0, .68333, .14643, .13889],
						89: [.09722, .68333, .08222, .08334],
						90: [0, .68333, .07944, .13889]
					},
					"Fraktur-Regular": {
						33: [0, .69141, 0, 0],
						34: [0, .69141, 0, 0],
						38: [0, .69141, 0, 0],
						39: [0, .69141, 0, 0],
						40: [.24982, .74947, 0, 0],
						41: [.24982, .74947, 0, 0],
						42: [0, .62119, 0, 0],
						43: [.08319, .58283, 0, 0],
						44: [0, .10803, 0, 0],
						45: [.08319, .58283, 0, 0],
						46: [0, .10803, 0, 0],
						47: [.24982, .74947, 0, 0],
						48: [0, .47534, 0, 0],
						49: [0, .47534, 0, 0],
						50: [0, .47534, 0, 0],
						51: [.18906, .47534, 0, 0],
						52: [.18906, .47534, 0, 0],
						53: [.18906, .47534, 0, 0],
						54: [0, .69141, 0, 0],
						55: [.18906, .47534, 0, 0],
						56: [0, .69141, 0, 0],
						57: [.18906, .47534, 0, 0],
						58: [0, .47534, 0, 0],
						59: [.12604, .47534, 0, 0],
						61: [-.13099, .36866, 0, 0],
						63: [0, .69141, 0, 0],
						65: [0, .69141, 0, 0],
						66: [0, .69141, 0, 0],
						67: [0, .69141, 0, 0],
						68: [0, .69141, 0, 0],
						69: [0, .69141, 0, 0],
						70: [.12604, .69141, 0, 0],
						71: [0, .69141, 0, 0],
						72: [.06302, .69141, 0, 0],
						73: [0, .69141, 0, 0],
						74: [.12604, .69141, 0, 0],
						75: [0, .69141, 0, 0],
						76: [0, .69141, 0, 0],
						77: [0, .69141, 0, 0],
						78: [0, .69141, 0, 0],
						79: [0, .69141, 0, 0],
						80: [.18906, .69141, 0, 0],
						81: [.03781, .69141, 0, 0],
						82: [0, .69141, 0, 0],
						83: [0, .69141, 0, 0],
						84: [0, .69141, 0, 0],
						85: [0, .69141, 0, 0],
						86: [0, .69141, 0, 0],
						87: [0, .69141, 0, 0],
						88: [0, .69141, 0, 0],
						89: [.18906, .69141, 0, 0],
						90: [.12604, .69141, 0, 0],
						91: [.24982, .74947, 0, 0],
						93: [.24982, .74947, 0, 0],
						94: [0, .69141, 0, 0],
						97: [0, .47534, 0, 0],
						98: [0, .69141, 0, 0],
						99: [0, .47534, 0, 0],
						100: [0, .62119, 0, 0],
						101: [0, .47534, 0, 0],
						102: [.18906, .69141, 0, 0],
						103: [.18906, .47534, 0, 0],
						104: [.18906, .69141, 0, 0],
						105: [0, .69141, 0, 0],
						106: [0, .69141, 0, 0],
						107: [0, .69141, 0, 0],
						108: [0, .69141, 0, 0],
						109: [0, .47534, 0, 0],
						110: [0, .47534, 0, 0],
						111: [0, .47534, 0, 0],
						112: [.18906, .52396, 0, 0],
						113: [.18906, .47534, 0, 0],
						114: [0, .47534, 0, 0],
						115: [0, .47534, 0, 0],
						116: [0, .62119, 0, 0],
						117: [0, .47534, 0, 0],
						118: [0, .52396, 0, 0],
						119: [0, .52396, 0, 0],
						120: [.18906, .47534, 0, 0],
						121: [.18906, .47534, 0, 0],
						122: [.18906, .47534, 0, 0],
						8216: [0, .69141, 0, 0],
						8217: [0, .69141, 0, 0],
						58112: [0, .62119, 0, 0],
						58113: [0, .62119, 0, 0],
						58114: [.18906, .69141, 0, 0],
						58115: [.18906, .69141, 0, 0],
						58116: [.18906, .47534, 0, 0],
						58117: [0, .69141, 0, 0],
						58118: [0, .62119, 0, 0],
						58119: [0, .47534, 0, 0]
					},
					"Main-Bold": {
						33: [0, .69444, 0, 0],
						34: [0, .69444, 0, 0],
						35: [.19444, .69444, 0, 0],
						36: [.05556, .75, 0, 0],
						37: [.05556, .75, 0, 0],
						38: [0, .69444, 0, 0],
						39: [0, .69444, 0, 0],
						40: [.25, .75, 0, 0],
						41: [.25, .75, 0, 0],
						42: [0, .75, 0, 0],
						43: [.13333, .63333, 0, 0],
						44: [.19444, .15556, 0, 0],
						45: [0, .44444, 0, 0],
						46: [0, .15556, 0, 0],
						47: [.25, .75, 0, 0],
						48: [0, .64444, 0, 0],
						49: [0, .64444, 0, 0],
						50: [0, .64444, 0, 0],
						51: [0, .64444, 0, 0],
						52: [0, .64444, 0, 0],
						53: [0, .64444, 0, 0],
						54: [0, .64444, 0, 0],
						55: [0, .64444, 0, 0],
						56: [0, .64444, 0, 0],
						57: [0, .64444, 0, 0],
						58: [0, .44444, 0, 0],
						59: [.19444, .44444, 0, 0],
						60: [.08556, .58556, 0, 0],
						61: [-.10889, .39111, 0, 0],
						62: [.08556, .58556, 0, 0],
						63: [0, .69444, 0, 0],
						64: [0, .69444, 0, 0],
						65: [0, .68611, 0, 0],
						66: [0, .68611, 0, 0],
						67: [0, .68611, 0, 0],
						68: [0, .68611, 0, 0],
						69: [0, .68611, 0, 0],
						70: [0, .68611, 0, 0],
						71: [0, .68611, 0, 0],
						72: [0, .68611, 0, 0],
						73: [0, .68611, 0, 0],
						74: [0, .68611, 0, 0],
						75: [0, .68611, 0, 0],
						76: [0, .68611, 0, 0],
						77: [0, .68611, 0, 0],
						78: [0, .68611, 0, 0],
						79: [0, .68611, 0, 0],
						80: [0, .68611, 0, 0],
						81: [.19444, .68611, 0, 0],
						82: [0, .68611, 0, 0],
						83: [0, .68611, 0, 0],
						84: [0, .68611, 0, 0],
						85: [0, .68611, 0, 0],
						86: [0, .68611, .01597, 0],
						87: [0, .68611, .01597, 0],
						88: [0, .68611, 0, 0],
						89: [0, .68611, .02875, 0],
						90: [0, .68611, 0, 0],
						91: [.25, .75, 0, 0],
						92: [.25, .75, 0, 0],
						93: [.25, .75, 0, 0],
						94: [0, .69444, 0, 0],
						95: [.31, .13444, .03194, 0],
						96: [0, .69444, 0, 0],
						97: [0, .44444, 0, 0],
						98: [0, .69444, 0, 0],
						99: [0, .44444, 0, 0],
						100: [0, .69444, 0, 0],
						101: [0, .44444, 0, 0],
						102: [0, .69444, .10903, 0],
						103: [.19444, .44444, .01597, 0],
						104: [0, .69444, 0, 0],
						105: [0, .69444, 0, 0],
						106: [.19444, .69444, 0, 0],
						107: [0, .69444, 0, 0],
						108: [0, .69444, 0, 0],
						109: [0, .44444, 0, 0],
						110: [0, .44444, 0, 0],
						111: [0, .44444, 0, 0],
						112: [.19444, .44444, 0, 0],
						113: [.19444, .44444, 0, 0],
						114: [0, .44444, 0, 0],
						115: [0, .44444, 0, 0],
						116: [0, .63492, 0, 0],
						117: [0, .44444, 0, 0],
						118: [0, .44444, .01597, 0],
						119: [0, .44444, .01597, 0],
						120: [0, .44444, 0, 0],
						121: [.19444, .44444, .01597, 0],
						122: [0, .44444, 0, 0],
						123: [.25, .75, 0, 0],
						124: [.25, .75, 0, 0],
						125: [.25, .75, 0, 0],
						126: [.35, .34444, 0, 0],
						168: [0, .69444, 0, 0],
						172: [0, .44444, 0, 0],
						175: [0, .59611, 0, 0],
						176: [0, .69444, 0, 0],
						177: [.13333, .63333, 0, 0],
						180: [0, .69444, 0, 0],
						215: [.13333, .63333, 0, 0],
						247: [.13333, .63333, 0, 0],
						305: [0, .44444, 0, 0],
						567: [.19444, .44444, 0, 0],
						710: [0, .69444, 0, 0],
						711: [0, .63194, 0, 0],
						713: [0, .59611, 0, 0],
						714: [0, .69444, 0, 0],
						715: [0, .69444, 0, 0],
						728: [0, .69444, 0, 0],
						729: [0, .69444, 0, 0],
						730: [0, .69444, 0, 0],
						732: [0, .69444, 0, 0],
						768: [0, .69444, 0, 0],
						769: [0, .69444, 0, 0],
						770: [0, .69444, 0, 0],
						771: [0, .69444, 0, 0],
						772: [0, .59611, 0, 0],
						774: [0, .69444, 0, 0],
						775: [0, .69444, 0, 0],
						776: [0, .69444, 0, 0],
						778: [0, .69444, 0, 0],
						779: [0, .69444, 0, 0],
						780: [0, .63194, 0, 0],
						824: [.19444, .69444, 0, 0],
						915: [0, .68611, 0, 0],
						916: [0, .68611, 0, 0],
						920: [0, .68611, 0, 0],
						923: [0, .68611, 0, 0],
						926: [0, .68611, 0, 0],
						928: [0, .68611, 0, 0],
						931: [0, .68611, 0, 0],
						933: [0, .68611, 0, 0],
						934: [0, .68611, 0, 0],
						936: [0, .68611, 0, 0],
						937: [0, .68611, 0, 0],
						8211: [0, .44444, .03194, 0],
						8212: [0, .44444, .03194, 0],
						8216: [0, .69444, 0, 0],
						8217: [0, .69444, 0, 0],
						8220: [0, .69444, 0, 0],
						8221: [0, .69444, 0, 0],
						8224: [.19444, .69444, 0, 0],
						8225: [.19444, .69444, 0, 0],
						8242: [0, .55556, 0, 0],
						8407: [0, .72444, .15486, 0],
						8463: [0, .69444, 0, 0],
						8465: [0, .69444, 0, 0],
						8467: [0, .69444, 0, 0],
						8472: [.19444, .44444, 0, 0],
						8476: [0, .69444, 0, 0],
						8501: [0, .69444, 0, 0],
						8592: [-.10889, .39111, 0, 0],
						8593: [.19444, .69444, 0, 0],
						8594: [-.10889, .39111, 0, 0],
						8595: [.19444, .69444, 0, 0],
						8596: [-.10889, .39111, 0, 0],
						8597: [.25, .75, 0, 0],
						8598: [.19444, .69444, 0, 0],
						8599: [.19444, .69444, 0, 0],
						8600: [.19444, .69444, 0, 0],
						8601: [.19444, .69444, 0, 0],
						8636: [-.10889, .39111, 0, 0],
						8637: [-.10889, .39111, 0, 0],
						8640: [-.10889, .39111, 0, 0],
						8641: [-.10889, .39111, 0, 0],
						8656: [-.10889, .39111, 0, 0],
						8657: [.19444, .69444, 0, 0],
						8658: [-.10889, .39111, 0, 0],
						8659: [.19444, .69444, 0, 0],
						8660: [-.10889, .39111, 0, 0],
						8661: [.25, .75, 0, 0],
						8704: [0, .69444, 0, 0],
						8706: [0, .69444, .06389, 0],
						8707: [0, .69444, 0, 0],
						8709: [.05556, .75, 0, 0],
						8711: [0, .68611, 0, 0],
						8712: [.08556, .58556, 0, 0],
						8715: [.08556, .58556, 0, 0],
						8722: [.13333, .63333, 0, 0],
						8723: [.13333, .63333, 0, 0],
						8725: [.25, .75, 0, 0],
						8726: [.25, .75, 0, 0],
						8727: [-.02778, .47222, 0, 0],
						8728: [-.02639, .47361, 0, 0],
						8729: [-.02639, .47361, 0, 0],
						8730: [.18, .82, 0, 0],
						8733: [0, .44444, 0, 0],
						8734: [0, .44444, 0, 0],
						8736: [0, .69224, 0, 0],
						8739: [.25, .75, 0, 0],
						8741: [.25, .75, 0, 0],
						8743: [0, .55556, 0, 0],
						8744: [0, .55556, 0, 0],
						8745: [0, .55556, 0, 0],
						8746: [0, .55556, 0, 0],
						8747: [.19444, .69444, .12778, 0],
						8764: [-.10889, .39111, 0, 0],
						8768: [.19444, .69444, 0, 0],
						8771: [.00222, .50222, 0, 0],
						8776: [.02444, .52444, 0, 0],
						8781: [.00222, .50222, 0, 0],
						8801: [.00222, .50222, 0, 0],
						8804: [.19667, .69667, 0, 0],
						8805: [.19667, .69667, 0, 0],
						8810: [.08556, .58556, 0, 0],
						8811: [.08556, .58556, 0, 0],
						8826: [.08556, .58556, 0, 0],
						8827: [.08556, .58556, 0, 0],
						8834: [.08556, .58556, 0, 0],
						8835: [.08556, .58556, 0, 0],
						8838: [.19667, .69667, 0, 0],
						8839: [.19667, .69667, 0, 0],
						8846: [0, .55556, 0, 0],
						8849: [.19667, .69667, 0, 0],
						8850: [.19667, .69667, 0, 0],
						8851: [0, .55556, 0, 0],
						8852: [0, .55556, 0, 0],
						8853: [.13333, .63333, 0, 0],
						8854: [.13333, .63333, 0, 0],
						8855: [.13333, .63333, 0, 0],
						8856: [.13333, .63333, 0, 0],
						8857: [.13333, .63333, 0, 0],
						8866: [0, .69444, 0, 0],
						8867: [0, .69444, 0, 0],
						8868: [0, .69444, 0, 0],
						8869: [0, .69444, 0, 0],
						8900: [-.02639, .47361, 0, 0],
						8901: [-.02639, .47361, 0, 0],
						8902: [-.02778, .47222, 0, 0],
						8968: [.25, .75, 0, 0],
						8969: [.25, .75, 0, 0],
						8970: [.25, .75, 0, 0],
						8971: [.25, .75, 0, 0],
						8994: [-.13889, .36111, 0, 0],
						8995: [-.13889, .36111, 0, 0],
						9651: [.19444, .69444, 0, 0],
						9657: [-.02778, .47222, 0, 0],
						9661: [.19444, .69444, 0, 0],
						9667: [-.02778, .47222, 0, 0],
						9711: [.19444, .69444, 0, 0],
						9824: [.12963, .69444, 0, 0],
						9825: [.12963, .69444, 0, 0],
						9826: [.12963, .69444, 0, 0],
						9827: [.12963, .69444, 0, 0],
						9837: [0, .75, 0, 0],
						9838: [.19444, .69444, 0, 0],
						9839: [.19444, .69444, 0, 0],
						10216: [.25, .75, 0, 0],
						10217: [.25, .75, 0, 0],
						10815: [0, .68611, 0, 0],
						10927: [.19667, .69667, 0, 0],
						10928: [.19667, .69667, 0, 0]
					},
					"Main-Italic": {
						33: [0, .69444, .12417, 0],
						34: [0, .69444, .06961, 0],
						35: [.19444, .69444, .06616, 0],
						37: [.05556, .75, .13639, 0],
						38: [0, .69444, .09694, 0],
						39: [0, .69444, .12417, 0],
						40: [.25, .75, .16194, 0],
						41: [.25, .75, .03694, 0],
						42: [0, .75, .14917, 0],
						43: [.05667, .56167, .03694, 0],
						44: [.19444, .10556, 0, 0],
						45: [0, .43056, .02826, 0],
						46: [0, .10556, 0, 0],
						47: [.25, .75, .16194, 0],
						48: [0, .64444, .13556, 0],
						49: [0, .64444, .13556, 0],
						50: [0, .64444, .13556, 0],
						51: [0, .64444, .13556, 0],
						52: [.19444, .64444, .13556, 0],
						53: [0, .64444, .13556, 0],
						54: [0, .64444, .13556, 0],
						55: [.19444, .64444, .13556, 0],
						56: [0, .64444, .13556, 0],
						57: [0, .64444, .13556, 0],
						58: [0, .43056, .0582, 0],
						59: [.19444, .43056, .0582, 0],
						61: [-.13313, .36687, .06616, 0],
						63: [0, .69444, .1225, 0],
						64: [0, .69444, .09597, 0],
						65: [0, .68333, 0, 0],
						66: [0, .68333, .10257, 0],
						67: [0, .68333, .14528, 0],
						68: [0, .68333, .09403, 0],
						69: [0, .68333, .12028, 0],
						70: [0, .68333, .13305, 0],
						71: [0, .68333, .08722, 0],
						72: [0, .68333, .16389, 0],
						73: [0, .68333, .15806, 0],
						74: [0, .68333, .14028, 0],
						75: [0, .68333, .14528, 0],
						76: [0, .68333, 0, 0],
						77: [0, .68333, .16389, 0],
						78: [0, .68333, .16389, 0],
						79: [0, .68333, .09403, 0],
						80: [0, .68333, .10257, 0],
						81: [.19444, .68333, .09403, 0],
						82: [0, .68333, .03868, 0],
						83: [0, .68333, .11972, 0],
						84: [0, .68333, .13305, 0],
						85: [0, .68333, .16389, 0],
						86: [0, .68333, .18361, 0],
						87: [0, .68333, .18361, 0],
						88: [0, .68333, .15806, 0],
						89: [0, .68333, .19383, 0],
						90: [0, .68333, .14528, 0],
						91: [.25, .75, .1875, 0],
						93: [.25, .75, .10528, 0],
						94: [0, .69444, .06646, 0],
						95: [.31, .12056, .09208, 0],
						97: [0, .43056, .07671, 0],
						98: [0, .69444, .06312, 0],
						99: [0, .43056, .05653, 0],
						100: [0, .69444, .10333, 0],
						101: [0, .43056, .07514, 0],
						102: [.19444, .69444, .21194, 0],
						103: [.19444, .43056, .08847, 0],
						104: [0, .69444, .07671, 0],
						105: [0, .65536, .1019, 0],
						106: [.19444, .65536, .14467, 0],
						107: [0, .69444, .10764, 0],
						108: [0, .69444, .10333, 0],
						109: [0, .43056, .07671, 0],
						110: [0, .43056, .07671, 0],
						111: [0, .43056, .06312, 0],
						112: [.19444, .43056, .06312, 0],
						113: [.19444, .43056, .08847, 0],
						114: [0, .43056, .10764, 0],
						115: [0, .43056, .08208, 0],
						116: [0, .61508, .09486, 0],
						117: [0, .43056, .07671, 0],
						118: [0, .43056, .10764, 0],
						119: [0, .43056, .10764, 0],
						120: [0, .43056, .12042, 0],
						121: [.19444, .43056, .08847, 0],
						122: [0, .43056, .12292, 0],
						126: [.35, .31786, .11585, 0],
						163: [0, .69444, 0, 0],
						305: [0, .43056, 0, .02778],
						567: [.19444, .43056, 0, .08334],
						768: [0, .69444, 0, 0],
						769: [0, .69444, .09694, 0],
						770: [0, .69444, .06646, 0],
						771: [0, .66786, .11585, 0],
						772: [0, .56167, .10333, 0],
						774: [0, .69444, .10806, 0],
						775: [0, .66786, .11752, 0],
						776: [0, .66786, .10474, 0],
						778: [0, .69444, 0, 0],
						779: [0, .69444, .1225, 0],
						780: [0, .62847, .08295, 0],
						915: [0, .68333, .13305, 0],
						916: [0, .68333, 0, 0],
						920: [0, .68333, .09403, 0],
						923: [0, .68333, 0, 0],
						926: [0, .68333, .15294, 0],
						928: [0, .68333, .16389, 0],
						931: [0, .68333, .12028, 0],
						933: [0, .68333, .11111, 0],
						934: [0, .68333, .05986, 0],
						936: [0, .68333, .11111, 0],
						937: [0, .68333, .10257, 0],
						8211: [0, .43056, .09208, 0],
						8212: [0, .43056, .09208, 0],
						8216: [0, .69444, .12417, 0],
						8217: [0, .69444, .12417, 0],
						8220: [0, .69444, .1685, 0],
						8221: [0, .69444, .06961, 0],
						8463: [0, .68889, 0, 0]
					},
					"Main-Regular": {
						32: [0, 0, 0, 0],
						33: [0, .69444, 0, 0],
						34: [0, .69444, 0, 0],
						35: [.19444, .69444, 0, 0],
						36: [.05556, .75, 0, 0],
						37: [.05556, .75, 0, 0],
						38: [0, .69444, 0, 0],
						39: [0, .69444, 0, 0],
						40: [.25, .75, 0, 0],
						41: [.25, .75, 0, 0],
						42: [0, .75, 0, 0],
						43: [.08333, .58333, 0, 0],
						44: [.19444, .10556, 0, 0],
						45: [0, .43056, 0, 0],
						46: [0, .10556, 0, 0],
						47: [.25, .75, 0, 0],
						48: [0, .64444, 0, 0],
						49: [0, .64444, 0, 0],
						50: [0, .64444, 0, 0],
						51: [0, .64444, 0, 0],
						52: [0, .64444, 0, 0],
						53: [0, .64444, 0, 0],
						54: [0, .64444, 0, 0],
						55: [0, .64444, 0, 0],
						56: [0, .64444, 0, 0],
						57: [0, .64444, 0, 0],
						58: [0, .43056, 0, 0],
						59: [.19444, .43056, 0, 0],
						60: [.0391, .5391, 0, 0],
						61: [-.13313, .36687, 0, 0],
						62: [.0391, .5391, 0, 0],
						63: [0, .69444, 0, 0],
						64: [0, .69444, 0, 0],
						65: [0, .68333, 0, 0],
						66: [0, .68333, 0, 0],
						67: [0, .68333, 0, 0],
						68: [0, .68333, 0, 0],
						69: [0, .68333, 0, 0],
						70: [0, .68333, 0, 0],
						71: [0, .68333, 0, 0],
						72: [0, .68333, 0, 0],
						73: [0, .68333, 0, 0],
						74: [0, .68333, 0, 0],
						75: [0, .68333, 0, 0],
						76: [0, .68333, 0, 0],
						77: [0, .68333, 0, 0],
						78: [0, .68333, 0, 0],
						79: [0, .68333, 0, 0],
						80: [0, .68333, 0, 0],
						81: [.19444, .68333, 0, 0],
						82: [0, .68333, 0, 0],
						83: [0, .68333, 0, 0],
						84: [0, .68333, 0, 0],
						85: [0, .68333, 0, 0],
						86: [0, .68333, .01389, 0],
						87: [0, .68333, .01389, 0],
						88: [0, .68333, 0, 0],
						89: [0, .68333, .025, 0],
						90: [0, .68333, 0, 0],
						91: [.25, .75, 0, 0],
						92: [.25, .75, 0, 0],
						93: [.25, .75, 0, 0],
						94: [0, .69444, 0, 0],
						95: [.31, .12056, .02778, 0],
						96: [0, .69444, 0, 0],
						97: [0, .43056, 0, 0],
						98: [0, .69444, 0, 0],
						99: [0, .43056, 0, 0],
						100: [0, .69444, 0, 0],
						101: [0, .43056, 0, 0],
						102: [0, .69444, .07778, 0],
						103: [.19444, .43056, .01389, 0],
						104: [0, .69444, 0, 0],
						105: [0, .66786, 0, 0],
						106: [.19444, .66786, 0, 0],
						107: [0, .69444, 0, 0],
						108: [0, .69444, 0, 0],
						109: [0, .43056, 0, 0],
						110: [0, .43056, 0, 0],
						111: [0, .43056, 0, 0],
						112: [.19444, .43056, 0, 0],
						113: [.19444, .43056, 0, 0],
						114: [0, .43056, 0, 0],
						115: [0, .43056, 0, 0],
						116: [0, .61508, 0, 0],
						117: [0, .43056, 0, 0],
						118: [0, .43056, .01389, 0],
						119: [0, .43056, .01389, 0],
						120: [0, .43056, 0, 0],
						121: [.19444, .43056, .01389, 0],
						122: [0, .43056, 0, 0],
						123: [.25, .75, 0, 0],
						124: [.25, .75, 0, 0],
						125: [.25, .75, 0, 0],
						126: [.35, .31786, 0, 0],
						160: [0, 0, 0, 0],
						168: [0, .66786, 0, 0],
						172: [0, .43056, 0, 0],
						175: [0, .56778, 0, 0],
						176: [0, .69444, 0, 0],
						177: [.08333, .58333, 0, 0],
						180: [0, .69444, 0, 0],
						215: [.08333, .58333, 0, 0],
						247: [.08333, .58333, 0, 0],
						305: [0, .43056, 0, 0],
						567: [.19444, .43056, 0, 0],
						710: [0, .69444, 0, 0],
						711: [0, .62847, 0, 0],
						713: [0, .56778, 0, 0],
						714: [0, .69444, 0, 0],
						715: [0, .69444, 0, 0],
						728: [0, .69444, 0, 0],
						729: [0, .66786, 0, 0],
						730: [0, .69444, 0, 0],
						732: [0, .66786, 0, 0],
						768: [0, .69444, 0, 0],
						769: [0, .69444, 0, 0],
						770: [0, .69444, 0, 0],
						771: [0, .66786, 0, 0],
						772: [0, .56778, 0, 0],
						774: [0, .69444, 0, 0],
						775: [0, .66786, 0, 0],
						776: [0, .66786, 0, 0],
						778: [0, .69444, 0, 0],
						779: [0, .69444, 0, 0],
						780: [0, .62847, 0, 0],
						824: [.19444, .69444, 0, 0],
						915: [0, .68333, 0, 0],
						916: [0, .68333, 0, 0],
						920: [0, .68333, 0, 0],
						923: [0, .68333, 0, 0],
						926: [0, .68333, 0, 0],
						928: [0, .68333, 0, 0],
						931: [0, .68333, 0, 0],
						933: [0, .68333, 0, 0],
						934: [0, .68333, 0, 0],
						936: [0, .68333, 0, 0],
						937: [0, .68333, 0, 0],
						8211: [0, .43056, .02778, 0],
						8212: [0, .43056, .02778, 0],
						8216: [0, .69444, 0, 0],
						8217: [0, .69444, 0, 0],
						8220: [0, .69444, 0, 0],
						8221: [0, .69444, 0, 0],
						8224: [.19444, .69444, 0, 0],
						8225: [.19444, .69444, 0, 0],
						8230: [0, .12, 0, 0],
						8242: [0, .55556, 0, 0],
						8407: [0, .71444, .15382, 0],
						8463: [0, .68889, 0, 0],
						8465: [0, .69444, 0, 0],
						8467: [0, .69444, 0, .11111],
						8472: [.19444, .43056, 0, .11111],
						8476: [0, .69444, 0, 0],
						8501: [0, .69444, 0, 0],
						8592: [-.13313, .36687, 0, 0],
						8593: [.19444, .69444, 0, 0],
						8594: [-.13313, .36687, 0, 0],
						8595: [.19444, .69444, 0, 0],
						8596: [-.13313, .36687, 0, 0],
						8597: [.25, .75, 0, 0],
						8598: [.19444, .69444, 0, 0],
						8599: [.19444, .69444, 0, 0],
						8600: [.19444, .69444, 0, 0],
						8601: [.19444, .69444, 0, 0],
						8614: [.011, .511, 0, 0],
						8617: [.011, .511, 0, 0],
						8618: [.011, .511, 0, 0],
						8636: [-.13313, .36687, 0, 0],
						8637: [-.13313, .36687, 0, 0],
						8640: [-.13313, .36687, 0, 0],
						8641: [-.13313, .36687, 0, 0],
						8652: [.011, .671, 0, 0],
						8656: [-.13313, .36687, 0, 0],
						8657: [.19444, .69444, 0, 0],
						8658: [-.13313, .36687, 0, 0],
						8659: [.19444, .69444, 0, 0],
						8660: [-.13313, .36687, 0, 0],
						8661: [.25, .75, 0, 0],
						8704: [0, .69444, 0, 0],
						8706: [0, .69444, .05556, .08334],
						8707: [0, .69444, 0, 0],
						8709: [.05556, .75, 0, 0],
						8711: [0, .68333, 0, 0],
						8712: [.0391, .5391, 0, 0],
						8715: [.0391, .5391, 0, 0],
						8722: [.08333, .58333, 0, 0],
						8723: [.08333, .58333, 0, 0],
						8725: [.25, .75, 0, 0],
						8726: [.25, .75, 0, 0],
						8727: [-.03472, .46528, 0, 0],
						8728: [-.05555, .44445, 0, 0],
						8729: [-.05555, .44445, 0, 0],
						8730: [.2, .8, 0, 0],
						8733: [0, .43056, 0, 0],
						8734: [0, .43056, 0, 0],
						8736: [0, .69224, 0, 0],
						8739: [.25, .75, 0, 0],
						8741: [.25, .75, 0, 0],
						8743: [0, .55556, 0, 0],
						8744: [0, .55556, 0, 0],
						8745: [0, .55556, 0, 0],
						8746: [0, .55556, 0, 0],
						8747: [.19444, .69444, .11111, 0],
						8764: [-.13313, .36687, 0, 0],
						8768: [.19444, .69444, 0, 0],
						8771: [-.03625, .46375, 0, 0],
						8773: [-.022, .589, 0, 0],
						8776: [-.01688, .48312, 0, 0],
						8781: [-.03625, .46375, 0, 0],
						8784: [-.133, .67, 0, 0],
						8800: [.215, .716, 0, 0],
						8801: [-.03625, .46375, 0, 0],
						8804: [.13597, .63597, 0, 0],
						8805: [.13597, .63597, 0, 0],
						8810: [.0391, .5391, 0, 0],
						8811: [.0391, .5391, 0, 0],
						8826: [.0391, .5391, 0, 0],
						8827: [.0391, .5391, 0, 0],
						8834: [.0391, .5391, 0, 0],
						8835: [.0391, .5391, 0, 0],
						8838: [.13597, .63597, 0, 0],
						8839: [.13597, .63597, 0, 0],
						8846: [0, .55556, 0, 0],
						8849: [.13597, .63597, 0, 0],
						8850: [.13597, .63597, 0, 0],
						8851: [0, .55556, 0, 0],
						8852: [0, .55556, 0, 0],
						8853: [.08333, .58333, 0, 0],
						8854: [.08333, .58333, 0, 0],
						8855: [.08333, .58333, 0, 0],
						8856: [.08333, .58333, 0, 0],
						8857: [.08333, .58333, 0, 0],
						8866: [0, .69444, 0, 0],
						8867: [0, .69444, 0, 0],
						8868: [0, .69444, 0, 0],
						8869: [0, .69444, 0, 0],
						8872: [.249, .75, 0, 0],
						8900: [-.05555, .44445, 0, 0],
						8901: [-.05555, .44445, 0, 0],
						8902: [-.03472, .46528, 0, 0],
						8904: [.005, .505, 0, 0],
						8942: [.03, .9, 0, 0],
						8943: [-.19, .31, 0, 0],
						8945: [-.1, .82, 0, 0],
						8968: [.25, .75, 0, 0],
						8969: [.25, .75, 0, 0],
						8970: [.25, .75, 0, 0],
						8971: [.25, .75, 0, 0],
						8994: [-.14236, .35764, 0, 0],
						8995: [-.14236, .35764, 0, 0],
						9136: [.244, .744, 0, 0],
						9137: [.244, .744, 0, 0],
						9651: [.19444, .69444, 0, 0],
						9657: [-.03472, .46528, 0, 0],
						9661: [.19444, .69444, 0, 0],
						9667: [-.03472, .46528, 0, 0],
						9711: [.19444, .69444, 0, 0],
						9824: [.12963, .69444, 0, 0],
						9825: [.12963, .69444, 0, 0],
						9826: [.12963, .69444, 0, 0],
						9827: [.12963, .69444, 0, 0],
						9837: [0, .75, 0, 0],
						9838: [.19444, .69444, 0, 0],
						9839: [.19444, .69444, 0, 0],
						10216: [.25, .75, 0, 0],
						10217: [.25, .75, 0, 0],
						10222: [.244, .744, 0, 0],
						10223: [.244, .744, 0, 0],
						10229: [.011, .511, 0, 0],
						10230: [.011, .511, 0, 0],
						10231: [.011, .511, 0, 0],
						10232: [.024, .525, 0, 0],
						10233: [.024, .525, 0, 0],
						10234: [.024, .525, 0, 0],
						10236: [.011, .511, 0, 0],
						10815: [0, .68333, 0, 0],
						10927: [.13597, .63597, 0, 0],
						10928: [.13597, .63597, 0, 0]
					},
					"Math-BoldItalic": {
						47: [.19444, .69444, 0, 0],
						65: [0, .68611, 0, 0],
						66: [0, .68611, .04835, 0],
						67: [0, .68611, .06979, 0],
						68: [0, .68611, .03194, 0],
						69: [0, .68611, .05451, 0],
						70: [0, .68611, .15972, 0],
						71: [0, .68611, 0, 0],
						72: [0, .68611, .08229, 0],
						73: [0, .68611, .07778, 0],
						74: [0, .68611, .10069, 0],
						75: [0, .68611, .06979, 0],
						76: [0, .68611, 0, 0],
						77: [0, .68611, .11424, 0],
						78: [0, .68611, .11424, 0],
						79: [0, .68611, .03194, 0],
						80: [0, .68611, .15972, 0],
						81: [.19444, .68611, 0, 0],
						82: [0, .68611, .00421, 0],
						83: [0, .68611, .05382, 0],
						84: [0, .68611, .15972, 0],
						85: [0, .68611, .11424, 0],
						86: [0, .68611, .25555, 0],
						87: [0, .68611, .15972, 0],
						88: [0, .68611, .07778, 0],
						89: [0, .68611, .25555, 0],
						90: [0, .68611, .06979, 0],
						97: [0, .44444, 0, 0],
						98: [0, .69444, 0, 0],
						99: [0, .44444, 0, 0],
						100: [0, .69444, 0, 0],
						101: [0, .44444, 0, 0],
						102: [.19444, .69444, .11042, 0],
						103: [.19444, .44444, .03704, 0],
						104: [0, .69444, 0, 0],
						105: [0, .69326, 0, 0],
						106: [.19444, .69326, .0622, 0],
						107: [0, .69444, .01852, 0],
						108: [0, .69444, .0088, 0],
						109: [0, .44444, 0, 0],
						110: [0, .44444, 0, 0],
						111: [0, .44444, 0, 0],
						112: [.19444, .44444, 0, 0],
						113: [.19444, .44444, .03704, 0],
						114: [0, .44444, .03194, 0],
						115: [0, .44444, 0, 0],
						116: [0, .63492, 0, 0],
						117: [0, .44444, 0, 0],
						118: [0, .44444, .03704, 0],
						119: [0, .44444, .02778, 0],
						120: [0, .44444, 0, 0],
						121: [.19444, .44444, .03704, 0],
						122: [0, .44444, .04213, 0],
						915: [0, .68611, .15972, 0],
						916: [0, .68611, 0, 0],
						920: [0, .68611, .03194, 0],
						923: [0, .68611, 0, 0],
						926: [0, .68611, .07458, 0],
						928: [0, .68611, .08229, 0],
						931: [0, .68611, .05451, 0],
						933: [0, .68611, .15972, 0],
						934: [0, .68611, 0, 0],
						936: [0, .68611, .11653, 0],
						937: [0, .68611, .04835, 0],
						945: [0, .44444, 0, 0],
						946: [.19444, .69444, .03403, 0],
						947: [.19444, .44444, .06389, 0],
						948: [0, .69444, .03819, 0],
						949: [0, .44444, 0, 0],
						950: [.19444, .69444, .06215, 0],
						951: [.19444, .44444, .03704, 0],
						952: [0, .69444, .03194, 0],
						953: [0, .44444, 0, 0],
						954: [0, .44444, 0, 0],
						955: [0, .69444, 0, 0],
						956: [.19444, .44444, 0, 0],
						957: [0, .44444, .06898, 0],
						958: [.19444, .69444, .03021, 0],
						959: [0, .44444, 0, 0],
						960: [0, .44444, .03704, 0],
						961: [.19444, .44444, 0, 0],
						962: [.09722, .44444, .07917, 0],
						963: [0, .44444, .03704, 0],
						964: [0, .44444, .13472, 0],
						965: [0, .44444, .03704, 0],
						966: [.19444, .44444, 0, 0],
						967: [.19444, .44444, 0, 0],
						968: [.19444, .69444, .03704, 0],
						969: [0, .44444, .03704, 0],
						977: [0, .69444, 0, 0],
						981: [.19444, .69444, 0, 0],
						982: [0, .44444, .03194, 0],
						1009: [.19444, .44444, 0, 0],
						1013: [0, .44444, 0, 0]
					},
					"Math-Italic": {
						47: [.19444, .69444, 0, 0],
						65: [0, .68333, 0, .13889],
						66: [0, .68333, .05017, .08334],
						67: [0, .68333, .07153, .08334],
						68: [0, .68333, .02778, .05556],
						69: [0, .68333, .05764, .08334],
						70: [0, .68333, .13889, .08334],
						71: [0, .68333, 0, .08334],
						72: [0, .68333, .08125, .05556],
						73: [0, .68333, .07847, .11111],
						74: [0, .68333, .09618, .16667],
						75: [0, .68333, .07153, .05556],
						76: [0, .68333, 0, .02778],
						77: [0, .68333, .10903, .08334],
						78: [0, .68333, .10903, .08334],
						79: [0, .68333, .02778, .08334],
						80: [0, .68333, .13889, .08334],
						81: [.19444, .68333, 0, .08334],
						82: [0, .68333, .00773, .08334],
						83: [0, .68333, .05764, .08334],
						84: [0, .68333, .13889, .08334],
						85: [0, .68333, .10903, .02778],
						86: [0, .68333, .22222, 0],
						87: [0, .68333, .13889, 0],
						88: [0, .68333, .07847, .08334],
						89: [0, .68333, .22222, 0],
						90: [0, .68333, .07153, .08334],
						97: [0, .43056, 0, 0],
						98: [0, .69444, 0, 0],
						99: [0, .43056, 0, .05556],
						100: [0, .69444, 0, .16667],
						101: [0, .43056, 0, .05556],
						102: [.19444, .69444, .10764, .16667],
						103: [.19444, .43056, .03588, .02778],
						104: [0, .69444, 0, 0],
						105: [0, .65952, 0, 0],
						106: [.19444, .65952, .05724, 0],
						107: [0, .69444, .03148, 0],
						108: [0, .69444, .01968, .08334],
						109: [0, .43056, 0, 0],
						110: [0, .43056, 0, 0],
						111: [0, .43056, 0, .05556],
						112: [.19444, .43056, 0, .08334],
						113: [.19444, .43056, .03588, .08334],
						114: [0, .43056, .02778, .05556],
						115: [0, .43056, 0, .05556],
						116: [0, .61508, 0, .08334],
						117: [0, .43056, 0, .02778],
						118: [0, .43056, .03588, .02778],
						119: [0, .43056, .02691, .08334],
						120: [0, .43056, 0, .02778],
						121: [.19444, .43056, .03588, .05556],
						122: [0, .43056, .04398, .05556],
						915: [0, .68333, .13889, .08334],
						916: [0, .68333, 0, .16667],
						920: [0, .68333, .02778, .08334],
						923: [0, .68333, 0, .16667],
						926: [0, .68333, .07569, .08334],
						928: [0, .68333, .08125, .05556],
						931: [0, .68333, .05764, .08334],
						933: [0, .68333, .13889, .05556],
						934: [0, .68333, 0, .08334],
						936: [0, .68333, .11, .05556],
						937: [0, .68333, .05017, .08334],
						945: [0, .43056, .0037, .02778],
						946: [.19444, .69444, .05278, .08334],
						947: [.19444, .43056, .05556, 0],
						948: [0, .69444, .03785, .05556],
						949: [0, .43056, 0, .08334],
						950: [.19444, .69444, .07378, .08334],
						951: [.19444, .43056, .03588, .05556],
						952: [0, .69444, .02778, .08334],
						953: [0, .43056, 0, .05556],
						954: [0, .43056, 0, 0],
						955: [0, .69444, 0, 0],
						956: [.19444, .43056, 0, .02778],
						957: [0, .43056, .06366, .02778],
						958: [.19444, .69444, .04601, .11111],
						959: [0, .43056, 0, .05556],
						960: [0, .43056, .03588, 0],
						961: [.19444, .43056, 0, .08334],
						962: [.09722, .43056, .07986, .08334],
						963: [0, .43056, .03588, 0],
						964: [0, .43056, .1132, .02778],
						965: [0, .43056, .03588, .02778],
						966: [.19444, .43056, 0, .08334],
						967: [.19444, .43056, 0, .05556],
						968: [.19444, .69444, .03588, .11111],
						969: [0, .43056, .03588, 0],
						977: [0, .69444, 0, .08334],
						981: [.19444, .69444, 0, .08334],
						982: [0, .43056, .02778, 0],
						1009: [.19444, .43056, 0, .08334],
						1013: [0, .43056, 0, .05556]
					},
					"Math-Regular": {
						65: [0, .68333, 0, .13889],
						66: [0, .68333, .05017, .08334],
						67: [0, .68333, .07153, .08334],
						68: [0, .68333, .02778, .05556],
						69: [0, .68333, .05764, .08334],
						70: [0, .68333, .13889, .08334],
						71: [0, .68333, 0, .08334],
						72: [0, .68333, .08125, .05556],
						73: [0, .68333, .07847, .11111],
						74: [0, .68333, .09618, .16667],
						75: [0, .68333, .07153, .05556],
						76: [0, .68333, 0, .02778],
						77: [0, .68333, .10903, .08334],
						78: [0, .68333, .10903, .08334],
						79: [0, .68333, .02778, .08334],
						80: [0, .68333, .13889, .08334],
						81: [.19444, .68333, 0, .08334],
						82: [0, .68333, .00773, .08334],
						83: [0, .68333, .05764, .08334],
						84: [0, .68333, .13889, .08334],
						85: [0, .68333, .10903, .02778],
						86: [0, .68333, .22222, 0],
						87: [0, .68333, .13889, 0],
						88: [0, .68333, .07847, .08334],
						89: [0, .68333, .22222, 0],
						90: [0, .68333, .07153, .08334],
						97: [0, .43056, 0, 0],
						98: [0, .69444, 0, 0],
						99: [0, .43056, 0, .05556],
						100: [0, .69444, 0, .16667],
						101: [0, .43056, 0, .05556],
						102: [.19444, .69444, .10764, .16667],
						103: [.19444, .43056, .03588, .02778],
						104: [0, .69444, 0, 0],
						105: [0, .65952, 0, 0],
						106: [.19444, .65952, .05724, 0],
						107: [0, .69444, .03148, 0],
						108: [0, .69444, .01968, .08334],
						109: [0, .43056, 0, 0],
						110: [0, .43056, 0, 0],
						111: [0, .43056, 0, .05556],
						112: [.19444, .43056, 0, .08334],
						113: [.19444, .43056, .03588, .08334],
						114: [0, .43056, .02778, .05556],
						115: [0, .43056, 0, .05556],
						116: [0, .61508, 0, .08334],
						117: [0, .43056, 0, .02778],
						118: [0, .43056, .03588, .02778],
						119: [0, .43056, .02691, .08334],
						120: [0, .43056, 0, .02778],
						121: [.19444, .43056, .03588, .05556],
						122: [0, .43056, .04398, .05556],
						915: [0, .68333, .13889, .08334],
						916: [0, .68333, 0, .16667],
						920: [0, .68333, .02778, .08334],
						923: [0, .68333, 0, .16667],
						926: [0, .68333, .07569, .08334],
						928: [0, .68333, .08125, .05556],
						931: [0, .68333, .05764, .08334],
						933: [0, .68333, .13889, .05556],
						934: [0, .68333, 0, .08334],
						936: [0, .68333, .11, .05556],
						937: [0, .68333, .05017, .08334],
						945: [0, .43056, .0037, .02778],
						946: [.19444, .69444, .05278, .08334],
						947: [.19444, .43056, .05556, 0],
						948: [0, .69444, .03785, .05556],
						949: [0, .43056, 0, .08334],
						950: [.19444, .69444, .07378, .08334],
						951: [.19444, .43056, .03588, .05556],
						952: [0, .69444, .02778, .08334],
						953: [0, .43056, 0, .05556],
						954: [0, .43056, 0, 0],
						955: [0, .69444, 0, 0],
						956: [.19444, .43056, 0, .02778],
						957: [0, .43056, .06366, .02778],
						958: [.19444, .69444, .04601, .11111],
						959: [0, .43056, 0, .05556],
						960: [0, .43056, .03588, 0],
						961: [.19444, .43056, 0, .08334],
						962: [.09722, .43056, .07986, .08334],
						963: [0, .43056, .03588, 0],
						964: [0, .43056, .1132, .02778],
						965: [0, .43056, .03588, .02778],
						966: [.19444, .43056, 0, .08334],
						967: [.19444, .43056, 0, .05556],
						968: [.19444, .69444, .03588, .11111],
						969: [0, .43056, .03588, 0],
						977: [0, .69444, 0, .08334],
						981: [.19444, .69444, 0, .08334],
						982: [0, .43056, .02778, 0],
						1009: [.19444, .43056, 0, .08334],
						1013: [0, .43056, 0, .05556]
					},
					"SansSerif-Regular": {
						33: [0, .69444, 0, 0],
						34: [0, .69444, 0, 0],
						35: [.19444, .69444, 0, 0],
						36: [.05556, .75, 0, 0],
						37: [.05556, .75, 0, 0],
						38: [0, .69444, 0, 0],
						39: [0, .69444, 0, 0],
						40: [.25, .75, 0, 0],
						41: [.25, .75, 0, 0],
						42: [0, .75, 0, 0],
						43: [.08333, .58333, 0, 0],
						44: [.125, .08333, 0, 0],
						45: [0, .44444, 0, 0],
						46: [0, .08333, 0, 0],
						47: [.25, .75, 0, 0],
						48: [0, .65556, 0, 0],
						49: [0, .65556, 0, 0],
						50: [0, .65556, 0, 0],
						51: [0, .65556, 0, 0],
						52: [0, .65556, 0, 0],
						53: [0, .65556, 0, 0],
						54: [0, .65556, 0, 0],
						55: [0, .65556, 0, 0],
						56: [0, .65556, 0, 0],
						57: [0, .65556, 0, 0],
						58: [0, .44444, 0, 0],
						59: [.125, .44444, 0, 0],
						61: [-.13, .37, 0, 0],
						63: [0, .69444, 0, 0],
						64: [0, .69444, 0, 0],
						65: [0, .69444, 0, 0],
						66: [0, .69444, 0, 0],
						67: [0, .69444, 0, 0],
						68: [0, .69444, 0, 0],
						69: [0, .69444, 0, 0],
						70: [0, .69444, 0, 0],
						71: [0, .69444, 0, 0],
						72: [0, .69444, 0, 0],
						73: [0, .69444, 0, 0],
						74: [0, .69444, 0, 0],
						75: [0, .69444, 0, 0],
						76: [0, .69444, 0, 0],
						77: [0, .69444, 0, 0],
						78: [0, .69444, 0, 0],
						79: [0, .69444, 0, 0],
						80: [0, .69444, 0, 0],
						81: [.125, .69444, 0, 0],
						82: [0, .69444, 0, 0],
						83: [0, .69444, 0, 0],
						84: [0, .69444, 0, 0],
						85: [0, .69444, 0, 0],
						86: [0, .69444, .01389, 0],
						87: [0, .69444, .01389, 0],
						88: [0, .69444, 0, 0],
						89: [0, .69444, .025, 0],
						90: [0, .69444, 0, 0],
						91: [.25, .75, 0, 0],
						93: [.25, .75, 0, 0],
						94: [0, .69444, 0, 0],
						95: [.35, .09444, .02778, 0],
						97: [0, .44444, 0, 0],
						98: [0, .69444, 0, 0],
						99: [0, .44444, 0, 0],
						100: [0, .69444, 0, 0],
						101: [0, .44444, 0, 0],
						102: [0, .69444, .06944, 0],
						103: [.19444, .44444, .01389, 0],
						104: [0, .69444, 0, 0],
						105: [0, .67937, 0, 0],
						106: [.19444, .67937, 0, 0],
						107: [0, .69444, 0, 0],
						108: [0, .69444, 0, 0],
						109: [0, .44444, 0, 0],
						110: [0, .44444, 0, 0],
						111: [0, .44444, 0, 0],
						112: [.19444, .44444, 0, 0],
						113: [.19444, .44444, 0, 0],
						114: [0, .44444, .01389, 0],
						115: [0, .44444, 0, 0],
						116: [0, .57143, 0, 0],
						117: [0, .44444, 0, 0],
						118: [0, .44444, .01389, 0],
						119: [0, .44444, .01389, 0],
						120: [0, .44444, 0, 0],
						121: [.19444, .44444, .01389, 0],
						122: [0, .44444, 0, 0],
						126: [.35, .32659, 0, 0],
						305: [0, .44444, 0, 0],
						567: [.19444, .44444, 0, 0],
						768: [0, .69444, 0, 0],
						769: [0, .69444, 0, 0],
						770: [0, .69444, 0, 0],
						771: [0, .67659, 0, 0],
						772: [0, .60889, 0, 0],
						774: [0, .69444, 0, 0],
						775: [0, .67937, 0, 0],
						776: [0, .67937, 0, 0],
						778: [0, .69444, 0, 0],
						779: [0, .69444, 0, 0],
						780: [0, .63194, 0, 0],
						915: [0, .69444, 0, 0],
						916: [0, .69444, 0, 0],
						920: [0, .69444, 0, 0],
						923: [0, .69444, 0, 0],
						926: [0, .69444, 0, 0],
						928: [0, .69444, 0, 0],
						931: [0, .69444, 0, 0],
						933: [0, .69444, 0, 0],
						934: [0, .69444, 0, 0],
						936: [0, .69444, 0, 0],
						937: [0, .69444, 0, 0],
						8211: [0, .44444, .02778, 0],
						8212: [0, .44444, .02778, 0],
						8216: [0, .69444, 0, 0],
						8217: [0, .69444, 0, 0],
						8220: [0, .69444, 0, 0],
						8221: [0, .69444, 0, 0]
					},
					"Script-Regular": {
						65: [0, .7, .22925, 0],
						66: [0, .7, .04087, 0],
						67: [0, .7, .1689, 0],
						68: [0, .7, .09371, 0],
						69: [0, .7, .18583, 0],
						70: [0, .7, .13634, 0],
						71: [0, .7, .17322, 0],
						72: [0, .7, .29694, 0],
						73: [0, .7, .19189, 0],
						74: [.27778, .7, .19189, 0],
						75: [0, .7, .31259, 0],
						76: [0, .7, .19189, 0],
						77: [0, .7, .15981, 0],
						78: [0, .7, .3525, 0],
						79: [0, .7, .08078, 0],
						80: [0, .7, .08078, 0],
						81: [0, .7, .03305, 0],
						82: [0, .7, .06259, 0],
						83: [0, .7, .19189, 0],
						84: [0, .7, .29087, 0],
						85: [0, .7, .25815, 0],
						86: [0, .7, .27523, 0],
						87: [0, .7, .27523, 0],
						88: [0, .7, .26006, 0],
						89: [0, .7, .2939, 0],
						90: [0, .7, .24037, 0]
					},
					"Size1-Regular": {
						40: [.35001, .85, 0, 0],
						41: [.35001, .85, 0, 0],
						47: [.35001, .85, 0, 0],
						91: [.35001, .85, 0, 0],
						92: [.35001, .85, 0, 0],
						93: [.35001, .85, 0, 0],
						123: [.35001, .85, 0, 0],
						125: [.35001, .85, 0, 0],
						710: [0, .72222, 0, 0],
						732: [0, .72222, 0, 0],
						770: [0, .72222, 0, 0],
						771: [0, .72222, 0, 0],
						8214: [-99e-5, .601, 0, 0],
						8593: [1e-5, .6, 0, 0],
						8595: [1e-5, .6, 0, 0],
						8657: [1e-5, .6, 0, 0],
						8659: [1e-5, .6, 0, 0],
						8719: [.25001, .75, 0, 0],
						8720: [.25001, .75, 0, 0],
						8721: [.25001, .75, 0, 0],
						8730: [.35001, .85, 0, 0],
						8739: [-.00599, .606, 0, 0],
						8741: [-.00599, .606, 0, 0],
						8747: [.30612, .805, .19445, 0],
						8748: [.306, .805, .19445, 0],
						8749: [.306, .805, .19445, 0],
						8750: [.30612, .805, .19445, 0],
						8896: [.25001, .75, 0, 0],
						8897: [.25001, .75, 0, 0],
						8898: [.25001, .75, 0, 0],
						8899: [.25001, .75, 0, 0],
						8968: [.35001, .85, 0, 0],
						8969: [.35001, .85, 0, 0],
						8970: [.35001, .85, 0, 0],
						8971: [.35001, .85, 0, 0],
						9168: [-99e-5, .601, 0, 0],
						10216: [.35001, .85, 0, 0],
						10217: [.35001, .85, 0, 0],
						10752: [.25001, .75, 0, 0],
						10753: [.25001, .75, 0, 0],
						10754: [.25001, .75, 0, 0],
						10756: [.25001, .75, 0, 0],
						10758: [.25001, .75, 0, 0]
					},
					"Size2-Regular": {
						40: [.65002, 1.15, 0, 0],
						41: [.65002, 1.15, 0, 0],
						47: [.65002, 1.15, 0, 0],
						91: [.65002, 1.15, 0, 0],
						92: [.65002, 1.15, 0, 0],
						93: [.65002, 1.15, 0, 0],
						123: [.65002, 1.15, 0, 0],
						125: [.65002, 1.15, 0, 0],
						710: [0, .75, 0, 0],
						732: [0, .75, 0, 0],
						770: [0, .75, 0, 0],
						771: [0, .75, 0, 0],
						8719: [.55001, 1.05, 0, 0],
						8720: [.55001, 1.05, 0, 0],
						8721: [.55001, 1.05, 0, 0],
						8730: [.65002, 1.15, 0, 0],
						8747: [.86225, 1.36, .44445, 0],
						8748: [.862, 1.36, .44445, 0],
						8749: [.862, 1.36, .44445, 0],
						8750: [.86225, 1.36, .44445, 0],
						8896: [.55001, 1.05, 0, 0],
						8897: [.55001, 1.05, 0, 0],
						8898: [.55001, 1.05, 0, 0],
						8899: [.55001, 1.05, 0, 0],
						8968: [.65002, 1.15, 0, 0],
						8969: [.65002, 1.15, 0, 0],
						8970: [.65002, 1.15, 0, 0],
						8971: [.65002, 1.15, 0, 0],
						10216: [.65002, 1.15, 0, 0],
						10217: [.65002, 1.15, 0, 0],
						10752: [.55001, 1.05, 0, 0],
						10753: [.55001, 1.05, 0, 0],
						10754: [.55001, 1.05, 0, 0],
						10756: [.55001, 1.05, 0, 0],
						10758: [.55001, 1.05, 0, 0]
					},
					"Size3-Regular": {
						40: [.95003, 1.45, 0, 0],
						41: [.95003, 1.45, 0, 0],
						47: [.95003, 1.45, 0, 0],
						91: [.95003, 1.45, 0, 0],
						92: [.95003, 1.45, 0, 0],
						93: [.95003, 1.45, 0, 0],
						123: [.95003, 1.45, 0, 0],
						125: [.95003, 1.45, 0, 0],
						710: [0, .75, 0, 0],
						732: [0, .75, 0, 0],
						770: [0, .75, 0, 0],
						771: [0, .75, 0, 0],
						8730: [.95003, 1.45, 0, 0],
						8968: [.95003, 1.45, 0, 0],
						8969: [.95003, 1.45, 0, 0],
						8970: [.95003, 1.45, 0, 0],
						8971: [.95003, 1.45, 0, 0],
						10216: [.95003, 1.45, 0, 0],
						10217: [.95003, 1.45, 0, 0]
					},
					"Size4-Regular": {
						40: [1.25003, 1.75, 0, 0],
						41: [1.25003, 1.75, 0, 0],
						47: [1.25003, 1.75, 0, 0],
						91: [1.25003, 1.75, 0, 0],
						92: [1.25003, 1.75, 0, 0],
						93: [1.25003, 1.75, 0, 0],
						123: [1.25003, 1.75, 0, 0],
						125: [1.25003, 1.75, 0, 0],
						710: [0, .825, 0, 0],
						732: [0, .825, 0, 0],
						770: [0, .825, 0, 0],
						771: [0, .825, 0, 0],
						8730: [1.25003, 1.75, 0, 0],
						8968: [1.25003, 1.75, 0, 0],
						8969: [1.25003, 1.75, 0, 0],
						8970: [1.25003, 1.75, 0, 0],
						8971: [1.25003, 1.75, 0, 0],
						9115: [.64502, 1.155, 0, 0],
						9116: [1e-5, .6, 0, 0],
						9117: [.64502, 1.155, 0, 0],
						9118: [.64502, 1.155, 0, 0],
						9119: [1e-5, .6, 0, 0],
						9120: [.64502, 1.155, 0, 0],
						9121: [.64502, 1.155, 0, 0],
						9122: [-99e-5, .601, 0, 0],
						9123: [.64502, 1.155, 0, 0],
						9124: [.64502, 1.155, 0, 0],
						9125: [-99e-5, .601, 0, 0],
						9126: [.64502, 1.155, 0, 0],
						9127: [1e-5, .9, 0, 0],
						9128: [.65002, 1.15, 0, 0],
						9129: [.90001, 0, 0, 0],
						9130: [0, .3, 0, 0],
						9131: [1e-5, .9, 0, 0],
						9132: [.65002, 1.15, 0, 0],
						9133: [.90001, 0, 0, 0],
						9143: [.88502, .915, 0, 0],
						10216: [1.25003, 1.75, 0, 0],
						10217: [1.25003, 1.75, 0, 0],
						57344: [-.00499, .605, 0, 0],
						57345: [-.00499, .605, 0, 0],
						57680: [0, .12, 0, 0],
						57681: [0, .12, 0, 0],
						57682: [0, .12, 0, 0],
						57683: [0, .12, 0, 0]
					},
					"Typewriter-Regular": {
						33: [0, .61111, 0, 0],
						34: [0, .61111, 0, 0],
						35: [0, .61111, 0, 0],
						36: [.08333, .69444, 0, 0],
						37: [.08333, .69444, 0, 0],
						38: [0, .61111, 0, 0],
						39: [0, .61111, 0, 0],
						40: [.08333, .69444, 0, 0],
						41: [.08333, .69444, 0, 0],
						42: [0, .52083, 0, 0],
						43: [-.08056, .53055, 0, 0],
						44: [.13889, .125, 0, 0],
						45: [-.08056, .53055, 0, 0],
						46: [0, .125, 0, 0],
						47: [.08333, .69444, 0, 0],
						48: [0, .61111, 0, 0],
						49: [0, .61111, 0, 0],
						50: [0, .61111, 0, 0],
						51: [0, .61111, 0, 0],
						52: [0, .61111, 0, 0],
						53: [0, .61111, 0, 0],
						54: [0, .61111, 0, 0],
						55: [0, .61111, 0, 0],
						56: [0, .61111, 0, 0],
						57: [0, .61111, 0, 0],
						58: [0, .43056, 0, 0],
						59: [.13889, .43056, 0, 0],
						60: [-.05556, .55556, 0, 0],
						61: [-.19549, .41562, 0, 0],
						62: [-.05556, .55556, 0, 0],
						63: [0, .61111, 0, 0],
						64: [0, .61111, 0, 0],
						65: [0, .61111, 0, 0],
						66: [0, .61111, 0, 0],
						67: [0, .61111, 0, 0],
						68: [0, .61111, 0, 0],
						69: [0, .61111, 0, 0],
						70: [0, .61111, 0, 0],
						71: [0, .61111, 0, 0],
						72: [0, .61111, 0, 0],
						73: [0, .61111, 0, 0],
						74: [0, .61111, 0, 0],
						75: [0, .61111, 0, 0],
						76: [0, .61111, 0, 0],
						77: [0, .61111, 0, 0],
						78: [0, .61111, 0, 0],
						79: [0, .61111, 0, 0],
						80: [0, .61111, 0, 0],
						81: [.13889, .61111, 0, 0],
						82: [0, .61111, 0, 0],
						83: [0, .61111, 0, 0],
						84: [0, .61111, 0, 0],
						85: [0, .61111, 0, 0],
						86: [0, .61111, 0, 0],
						87: [0, .61111, 0, 0],
						88: [0, .61111, 0, 0],
						89: [0, .61111, 0, 0],
						90: [0, .61111, 0, 0],
						91: [.08333, .69444, 0, 0],
						92: [.08333, .69444, 0, 0],
						93: [.08333, .69444, 0, 0],
						94: [0, .61111, 0, 0],
						95: [.09514, 0, 0, 0],
						96: [0, .61111, 0, 0],
						97: [0, .43056, 0, 0],
						98: [0, .61111, 0, 0],
						99: [0, .43056, 0, 0],
						100: [0, .61111, 0, 0],
						101: [0, .43056, 0, 0],
						102: [0, .61111, 0, 0],
						103: [.22222, .43056, 0, 0],
						104: [0, .61111, 0, 0],
						105: [0, .61111, 0, 0],
						106: [.22222, .61111, 0, 0],
						107: [0, .61111, 0, 0],
						108: [0, .61111, 0, 0],
						109: [0, .43056, 0, 0],
						110: [0, .43056, 0, 0],
						111: [0, .43056, 0, 0],
						112: [.22222, .43056, 0, 0],
						113: [.22222, .43056, 0, 0],
						114: [0, .43056, 0, 0],
						115: [0, .43056, 0, 0],
						116: [0, .55358, 0, 0],
						117: [0, .43056, 0, 0],
						118: [0, .43056, 0, 0],
						119: [0, .43056, 0, 0],
						120: [0, .43056, 0, 0],
						121: [.22222, .43056, 0, 0],
						122: [0, .43056, 0, 0],
						123: [.08333, .69444, 0, 0],
						124: [.08333, .69444, 0, 0],
						125: [.08333, .69444, 0, 0],
						126: [0, .61111, 0, 0],
						127: [0, .61111, 0, 0],
						305: [0, .43056, 0, 0],
						567: [.22222, .43056, 0, 0],
						768: [0, .61111, 0, 0],
						769: [0, .61111, 0, 0],
						770: [0, .61111, 0, 0],
						771: [0, .61111, 0, 0],
						772: [0, .56555, 0, 0],
						774: [0, .61111, 0, 0],
						776: [0, .61111, 0, 0],
						778: [0, .61111, 0, 0],
						780: [0, .56597, 0, 0],
						915: [0, .61111, 0, 0],
						916: [0, .61111, 0, 0],
						920: [0, .61111, 0, 0],
						923: [0, .61111, 0, 0],
						926: [0, .61111, 0, 0],
						928: [0, .61111, 0, 0],
						931: [0, .61111, 0, 0],
						933: [0, .61111, 0, 0],
						934: [0, .61111, 0, 0],
						936: [0, .61111, 0, 0],
						937: [0, .61111, 0, 0],
						2018: [0, .61111, 0, 0],
						2019: [0, .61111, 0, 0],
						8242: [0, .61111, 0, 0]
					}
				}
			}, {}],
			43: [function (c, a, b) {
				"use strict";
				var d = c("./utils"),
					g = b(d);
				d = c("./ParseError");
				var h = b(d);
				d = c("./ParseNode");
				var i = b(d);

				function b(a) {
					return a && a.__esModule ? a : {
						"default": a
					}
				}

				function j(b, c, d) {
					typeof b === "string" && (b = [b]);
					typeof c === "number" && (c = {
						numArgs: c
					});
					c = {
						numArgs: c.numArgs,
						argTypes: c.argTypes,
						greediness: c.greediness === void 0 ? 1 : c.greediness,
						allowedInText: !!c.allowedInText,
						numOptionalArgs: c.numOptionalArgs || 0,
						infix: !!c.infix,
						handler: d
					};
					for (var d = 0; d < b.length; ++d) a.exports[b[d]] = c
				}
				var k = function (a) {
					if (a.type === "ordgroup") return a.value;
					else return [a]
				};
				j("\\sqrt", {
					numArgs: 1,
					numOptionalArgs: 1
				}, function (a, b) {
					a = b[0];
					b = b[1];
					return {
						type: "sqrt",
						body: b,
						index: a
					}
				});
				var l = {
					"\\text": void 0,
					"\\textrm": "mathrm",
					"\\textsf": "mathsf",
					"\\texttt": "mathtt",
					"\\textnormal": "mathrm",
					"\\textbf": "mathbf",
					"\\textit": "textit"
				};
				j(["\\text", "\\textrm", "\\textsf", "\\texttt", "\\textnormal", "\\textbf", "\\textit"], {
					numArgs: 1,
					argTypes: ["text"],
					greediness: 2,
					allowedInText: !0
				}, function (a, b) {
					b = b[0];
					return {
						type: "text",
						body: k(b),
						style: l[a.funcName]
					}
				});
				j("\\textcolor", {
					numArgs: 2,
					allowedInText: !0,
					greediness: 3,
					argTypes: ["color", "original"]
				}, function (a, b) {
					a = b[0];
					b = b[1];
					return {
						type: "color",
						color: a.value,
						value: k(b)
					}
				});
				j("\\color", {
					numArgs: 1,
					allowedInText: !0,
					greediness: 3,
					argTypes: ["color"]
				}, null);
				j("\\overline", {
					numArgs: 1
				}, function (a, b) {
					a = b[0];
					return {
						type: "overline",
						body: a
					}
				});
				j("\\underline", {
					numArgs: 1
				}, function (a, b) {
					a = b[0];
					return {
						type: "underline",
						body: a
					}
				});
				j("\\rule", {
					numArgs: 2,
					numOptionalArgs: 1,
					argTypes: ["size", "size", "size"]
				}, function (a, b) {
					a = b[0];
					var c = b[1];
					b = b[2];
					return {
						type: "rule",
						shift: a && a.value,
						width: c.value,
						height: b.value
					}
				});
				j(["\\kern", "\\mkern"], {
					numArgs: 1,
					argTypes: ["size"]
				}, function (a, b) {
					return {
						type: "kern",
						dimension: b[0].value
					}
				});
				j("\\KaTeX", {
					numArgs: 0
				}, function (a) {
					return {
						type: "katex"
					}
				});
				j("\\phantom", {
					numArgs: 1
				}, function (a, b) {
					a = b[0];
					return {
						type: "phantom",
						value: k(a)
					}
				});
				j(["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"], {
					numArgs: 1
				}, function (a, b) {
					b = b[0];
					return {
						type: "mclass",
						mclass: "m" + a.funcName.substr(5),
						value: k(b)
					}
				});
				j("\\stackrel", {
					numArgs: 2
				}, function (a, b) {
					a = b[0];
					b = b[1];
					b = new i["default"]("op", {
						type: "op",
						limits: !0,
						alwaysHandleSupSub: !0,
						symbol: !1,
						value: k(b)
					}, b.mode);
					b = new i["default"]("supsub", {
						base: b,
						sup: a,
						sub: null
					}, a.mode);
					return {
						type: "mclass",
						mclass: "mrel",
						value: [b]
					}
				});
				j("\\bmod", {
					numArgs: 0
				}, function (a, b) {
					return {
						type: "mod",
						modType: "bmod",
						value: null
					}
				});
				j(["\\pod", "\\pmod", "\\mod"], {
					numArgs: 1
				}, function (a, b) {
					b = b[0];
					return {
						type: "mod",
						modType: a.funcName.substr(1),
						value: k(b)
					}
				});
				var m = {
						"\\bigl": {
							mclass: "mopen",
							size: 1
						},
						"\\Bigl": {
							mclass: "mopen",
							size: 2
						},
						"\\biggl": {
							mclass: "mopen",
							size: 3
						},
						"\\Biggl": {
							mclass: "mopen",
							size: 4
						},
						"\\bigr": {
							mclass: "mclose",
							size: 1
						},
						"\\Bigr": {
							mclass: "mclose",
							size: 2
						},
						"\\biggr": {
							mclass: "mclose",
							size: 3
						},
						"\\Biggr": {
							mclass: "mclose",
							size: 4
						},
						"\\bigm": {
							mclass: "mrel",
							size: 1
						},
						"\\Bigm": {
							mclass: "mrel",
							size: 2
						},
						"\\biggm": {
							mclass: "mrel",
							size: 3
						},
						"\\Biggm": {
							mclass: "mrel",
							size: 4
						},
						"\\big": {
							mclass: "mord",
							size: 1
						},
						"\\Big": {
							mclass: "mord",
							size: 2
						},
						"\\bigg": {
							mclass: "mord",
							size: 3
						},
						"\\Bigg": {
							mclass: "mord",
							size: 4
						}
					},
					n = ["(", ")", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\\lceil", "\\rceil", "<", ">", "\\langle", "\\rangle", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\\lmoustache", "\\rmoustache", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."],
					o = {
						"\\Bbb": "\\mathbb",
						"\\bold": "\\mathbf",
						"\\frak": "\\mathfrak"
					};
				j(["\\blue", "\\orange", "\\pink", "\\red", "\\green", "\\gray", "\\purple", "\\blueA", "\\blueB", "\\blueC", "\\blueD", "\\blueE", "\\tealA", "\\tealB", "\\tealC", "\\tealD", "\\tealE", "\\greenA", "\\greenB", "\\greenC", "\\greenD", "\\greenE", "\\goldA", "\\goldB", "\\goldC", "\\goldD", "\\goldE", "\\redA", "\\redB", "\\redC", "\\redD", "\\redE", "\\maroonA", "\\maroonB", "\\maroonC", "\\maroonD", "\\maroonE", "\\purpleA", "\\purpleB", "\\purpleC", "\\purpleD", "\\purpleE", "\\mintA", "\\mintB", "\\mintC", "\\grayA", "\\grayB", "\\grayC", "\\grayD", "\\grayE", "\\grayF", "\\grayG", "\\grayH", "\\grayI", "\\kaBlue", "\\kaGreen"], {
					numArgs: 1,
					allowedInText: !0,
					greediness: 3
				}, function (a, b) {
					b = b[0];
					return {
						type: "color",
						color: "katex-" + a.funcName.slice(1),
						value: k(b)
					}
				});
				j(["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"], {
					numArgs: 0
				}, function (a) {
					return {
						type: "op",
						limits: !1,
						symbol: !1,
						body: a.funcName
					}
				});
				j(["\\det", "\\gcd", "\\inf", "\\lim", "\\liminf", "\\limsup", "\\max", "\\min", "\\Pr", "\\sup"], {
					numArgs: 0
				}, function (a) {
					return {
						type: "op",
						limits: !0,
						symbol: !1,
						body: a.funcName
					}
				});
				j(["\\int", "\\iint", "\\iiint", "\\oint"], {
					numArgs: 0
				}, function (a) {
					return {
						type: "op",
						limits: !1,
						symbol: !0,
						body: a.funcName
					}
				});
				j(["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint"], {
					numArgs: 0
				}, function (a) {
					return {
						type: "op",
						limits: !0,
						symbol: !0,
						body: a.funcName
					}
				});
				j("\\mathop", {
					numArgs: 1
				}, function (a, b) {
					a = b[0];
					return {
						type: "op",
						limits: !1,
						symbol: !1,
						value: k(a)
					}
				});
				j(["\\dfrac", "\\frac", "\\tfrac", "\\dbinom", "\\binom", "\\tbinom", "\\\\atopfrac"], {
					numArgs: 2,
					greediness: 2
				}, function (a, b) {
					var c = b[0];
					b = b[1];
					var d = void 0,
						e = null,
						f = null,
						g = "auto";
					switch (a.funcName) {
						case "\\dfrac":
						case "\\frac":
						case "\\tfrac":
							d = !0;
							break;
						case "\\\\atopfrac":
							d = !1;
							break;
						case "\\dbinom":
						case "\\binom":
						case "\\tbinom":
							d = !1;
							e = "(";
							f = ")";
							break;
						default:
							throw new Error("Unrecognized genfrac command")
					}
					switch (a.funcName) {
						case "\\dfrac":
						case "\\dbinom":
							g = "display";
							break;
						case "\\tfrac":
						case "\\tbinom":
							g = "text";
							break
					}
					return {
						type: "genfrac",
						numer: c,
						denom: b,
						hasBarLine: d,
						leftDelim: e,
						rightDelim: f,
						size: g
					}
				});
				j(["\\llap", "\\rlap"], {
					numArgs: 1,
					allowedInText: !0
				}, function (a, b) {
					b = b[0];
					return {
						type: a.funcName.slice(1),
						body: b
					}
				});
				var p = function (a, b) {
					if (g["default"].contains(n, a.value)) return a;
					else throw new h["default"]("Invalid delimiter: '" + a.value + "' after '" + b.funcName + "'", a)
				};
				j(["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"], {
					numArgs: 1
				}, function (a, b) {
					b = p(b[0], a);
					return {
						type: "delimsizing",
						size: m[a.funcName].size,
						mclass: m[a.funcName].mclass,
						value: b.value
					}
				});
				j(["\\left", "\\right"], {
					numArgs: 1
				}, function (a, b) {
					b = p(b[0], a);
					return {
						type: "leftright",
						value: b.value
					}
				});
				j("\\middle", {
					numArgs: 1
				}, function (a, b) {
					b = p(b[0], a);
					if (!a.parser.leftrightDepth) throw new h["default"]("\\middle without preceding \\left", b);
					return {
						type: "middle",
						value: b.value
					}
				});
				j(["\\tiny", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], 0, null);
				j(["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"], 0, null);
				j(["\\rm", "\\sf", "\\tt", "\\bf", "\\it"], 0, null);
				j(["\\mathrm", "\\mathit", "\\mathbf", "\\mathbb", "\\mathcal", "\\mathfrak", "\\mathscr", "\\mathsf", "\\mathtt", "\\Bbb", "\\bold", "\\frak"], {
					numArgs: 1,
					greediness: 2
				}, function (a, b) {
					b = b[0];
					a = a.funcName;
					a in o && (a = o[a]);
					return {
						type: "font",
						font: a.slice(1),
						body: b
					}
				});
				j(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"], {
					numArgs: 1
				}, function (a, b) {
					b = b[0];
					var c = !g["default"].contains(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot"], a.funcName),
						d = !c || g["default"].contains(["\\widehat", "\\widetilde"], a.funcName);
					return {
						type: "accent",
						label: a.funcName,
						isStretchy: c,
						isShifty: d,
						base: b
					}
				});
				j(["\\overbrace", "\\underbrace"], {
					numArgs: 1
				}, function (a, b) {
					b = b[0];
					return {
						type: "horizBrace",
						label: a.funcName,
						isOver: /^\\over/.test(a.funcName),
						base: b
					}
				});
				j(["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\undertilde"], {
					numArgs: 1
				}, function (a, b) {
					b = b[0];
					return {
						type: "accentUnder",
						label: a.funcName,
						base: b
					}
				});
				j(["\\xleftarrow", "\\xrightarrow", "\\xLeftarrow", "\\xRightarrow", "\\xleftrightarrow", "\\xLeftrightarrow", "\\xhookleftarrow", "\\xhookrightarrow", "\\xmapsto", "\\xrightharpoondown", "\\xrightharpoonup", "\\xleftharpoondown", "\\xleftharpoonup", "\\xrightleftharpoons", "\\xleftrightharpoons", "\\xLongequal", "\\xtwoheadrightarrow", "\\xtwoheadleftarrow", "\\xLongequal", "\\xtofrom"], {
					numArgs: 1,
					numOptionalArgs: 1
				}, function (a, b) {
					var c = b[0];
					b = b[1];
					return {
						type: "xArrow",
						label: a.funcName,
						body: b,
						below: c
					}
				});
				j(["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\fbox"], {
					numArgs: 1
				}, function (a, b) {
					b = b[0];
					return {
						type: "enclose",
						label: a.funcName,
						body: b
					}
				});
				j(["\\over", "\\choose", "\\atop"], {
					numArgs: 0,
					infix: !0
				}, function (a) {
					var b = void 0;
					switch (a.funcName) {
						case "\\over":
							b = "\\frac";
							break;
						case "\\choose":
							b = "\\binom";
							break;
						case "\\atop":
							b = "\\\\atopfrac";
							break;
						default:
							throw new Error("Unrecognized infix genfrac command")
					}
					return {
						type: "infix",
						replaceWith: b,
						token: a.token
					}
				});
				j(["\\\\", "\\cr"], {
					numArgs: 0,
					numOptionalArgs: 1,
					argTypes: ["size"]
				}, function (a, b) {
					a = b[0];
					return {
						type: "cr",
						size: a
					}
				});
				j(["\\begin", "\\end"], {
					numArgs: 1,
					argTypes: ["text"]
				}, function (a, b) {
					a = b[0];
					if (a.type !== "ordgroup") throw new h["default"]("Invalid environment name", a);
					b = "";
					for (var c = 0; c < a.value.length; ++c) b += a.value[c].value;
					return {
						type: "environment",
						name: b,
						nameGroup: a
					}
				})
			}, {
				"./ParseError": 29,
				"./ParseNode": 30,
				"./utils": 51
			}],
			44: [function (c, a, b) {
				"use strict";

				function c(b, c) {
					a.exports[b] = c
				}
				c("\\bgroup", "{");
				c("\\egroup", "}");
				c("\\begingroup", "{");
				c("\\endgroup", "}");
				c("\\mkern", "\\kern");
				c("\\overset", "\\mathop{#2}\\limits^{#1}");
				c("\\underset", "\\mathop{#2}\\limits_{#1}");
				c("\\boxed", "\\fbox{\\displaystyle{#1}}");
				c("\\iff", "\\;\\Longleftrightarrow\\;");
				c("\\implies", "\\;\\Longrightarrow\\;");
				c("\\impliedby", "\\;\\Longleftarrow\\;");
				c("\\ordinarycolon", ":");
				c("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}");
				c("\\dblcolon", "\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon");
				c("\\coloneqq", "\\vcentcolon\\mathrel{\\mkern-1.2mu}=");
				c("\\Coloneqq", "\\dblcolon\\mathrel{\\mkern-1.2mu}=");
				c("\\coloneq", "\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}");
				c("\\Coloneq", "\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}");
				c("\\eqqcolon", "=\\mathrel{\\mkern-1.2mu}\\vcentcolon");
				c("\\Eqqcolon", "=\\mathrel{\\mkern-1.2mu}\\dblcolon");
				c("\\eqcolon", "\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon");
				c("\\Eqcolon", "\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon");
				c("\\colonapprox", "\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx");
				c("\\Colonapprox", "\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx");
				c("\\colonsim", "\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim");
				c("\\Colonsim", "\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim");
				c("\\ratio", "\\vcentcolon");
				c("\\coloncolon", "\\dblcolon");
				c("\\colonequals", "\\coloneqq");
				c("\\coloncolonequals", "\\Coloneqq");
				c("\\equalscolon", "\\eqqcolon");
				c("\\equalscoloncolon", "\\Eqqcolon");
				c("\\colonminus", "\\coloneq");
				c("\\coloncolonminus", "\\Coloneq");
				c("\\minuscolon", "\\eqcolon");
				c("\\minuscoloncolon", "\\Eqcolon");
				c("\\coloncolonapprox", "\\Colonapprox");
				c("\\coloncolonsim", "\\Colonsim");
				c("\\simcolon", "\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon");
				c("\\simcoloncolon", "\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon");
				c("\\approxcolon", "\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon");
				c("\\approxcoloncolon", "\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon")
			}, {}],
			45: [function (c, a, b) {
				"use strict";
				var d = c("babel-runtime/helpers/classCallCheck"),
					g = b(d);
				d = c("babel-runtime/helpers/createClass");
				var h = b(d);
				d = c("./utils");
				var i = b(d);

				function b(a) {
					return a && a.__esModule ? a : {
						"default": a
					}
				}
				c = function () {
					function a(b, c) {
						g["default"](this, a), this.type = b, this.attributes = {}, this.children = c || []
					}
					h["default"](a, [{
						key: "setAttribute",
						value: function (a, b) {
							this.attributes[a] = b
						}
					}, {
						key: "toNode",
						value: function () {
							var a = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
							for (var b in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, b) && a.setAttribute(b, this.attributes[b]);
							for (var c = 0; c < this.children.length; c++) a.appendChild(this.children[c].toNode());
							return a
						}
					}, {
						key: "toMarkup",
						value: function () {
							var a = "<" + this.type;
							for (var b in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, b) && (a += " " + b + '="', a += i["default"].escape(this.attributes[b]), a += '"');
							a += ">";
							for (var c = 0; c < this.children.length; c++) a += this.children[c].toMarkup();
							a += "</" + this.type + ">";
							return a
						}
					}]);
					return a
				}();
				b = function () {
					function a(b) {
						g["default"](this, a), this.text = b
					}
					h["default"](a, [{
						key: "toNode",
						value: function () {
							return document.createTextNode(this.text)
						}
					}, {
						key: "toMarkup",
						value: function () {
							return i["default"].escape(this.text)
						}
					}]);
					return a
				}();
				a.exports = {
					MathNode: c,
					TextNode: b
				}
			}, {
				"./utils": 51,
				"babel-runtime/helpers/classCallCheck": 4,
				"babel-runtime/helpers/createClass": 5
			}],
			46: [function (c, a, b) {
				"use strict";
				c = c("./Parser");
				var d = b(c);

				function b(a) {
					return a && a.__esModule ? a : {
						"default": a
					}
				}
				b = function (a, b) {
					if (!(typeof a === "string" || a instanceof String)) throw new TypeError("KaTeX can only parse string typed expression");
					a = new d["default"](a, b);
					return a.parse()
				};
				a.exports = b
			}, {
				"./Parser": 31
			}],
			47: [function (c, a, b) {
				"use strict";
				var d = c("./buildCommon"),
					g = c("./mathMLTree"),
					h = c("./utils"),
					i = {
						widehat: "^",
						widetilde: "~",
						undertilde: "~",
						overleftarrow: "\u2190",
						underleftarrow: "\u2190",
						xleftarrow: "\u2190",
						overrightarrow: "\u2192",
						underrightarrow: "\u2192",
						xrightarrow: "\u2192",
						underbrace: "\u23b5",
						overbrace: "\u23de",
						overleftrightarrow: "\u2194",
						underleftrightarrow: "\u2194",
						xleftrightarrow: "\u2194",
						Overrightarrow: "\u21d2",
						xRightarrow: "\u21d2",
						overleftharpoon: "\u21bc",
						xleftharpoonup: "\u21bc",
						overrightharpoon: "\u21c0",
						xrightharpoonup: "\u21c0",
						xLeftarrow: "\u21d0",
						xLeftrightarrow: "\u21d4",
						xhookleftarrow: "\u21a9",
						xhookrightarrow: "\u21aa",
						xmapsto: "\u21a6",
						xrightharpoondown: "\u21c1",
						xleftharpoondown: "\u21bd",
						xrightleftharpoons: "\u21cc",
						xleftrightharpoons: "\u21cb",
						xtwoheadleftarrow: "\u219e",
						xtwoheadrightarrow: "\u21a0",
						xLongequal: "=",
						xtofrom: "\u21c4"
					};
				b = function (a) {
					a = new g.MathNode("mo", [new g.TextNode(i[a.substr(1)])]);
					a.setAttribute("stretchy", "true");
					return a
				};
				var j = {
						overleftarrow: [.522, 0, "leftarrow"],
						underleftarrow: [.522, 0, "leftarrow"],
						xleftarrow: [.261, .261, "leftarrow"],
						overrightarrow: [.522, 0, "rightarrow"],
						underrightarrow: [.522, 0, "rightarrow"],
						xrightarrow: [.261, .261, "rightarrow"],
						overbrace: [.548, 0, "overbrace"],
						underbrace: [.548, 0, "underbrace"],
						overleftrightarrow: [.522, 0, "leftrightarrow"],
						underleftrightarrow: [.522, 0, "leftrightarrow"],
						xleftrightarrow: [.261, .261, "leftrightarrow"],
						Overrightarrow: [.56, 0, "doublerightarrow"],
						xLeftarrow: [.28, .28, "doubleleftarrow"],
						xRightarrow: [.28, .28, "doublerightarrow"],
						xLeftrightarrow: [.28, .28, "doubleleftrightarrow"],
						overleftharpoon: [.522, 0, "leftharpoon"],
						overrightharpoon: [.522, 0, "rightharpoon"],
						xleftharpoonup: [.261, .261, "leftharpoon"],
						xrightharpoonup: [.261, .261, "rightharpoon"],
						xhookleftarrow: [.261, .261, "hookleftarrow"],
						xhookrightarrow: [.261, .261, "hookrightarrow"],
						overlinesegment: [.414, 0, "linesegment"],
						underlinesegment: [.414, 0, "linesegment"],
						xmapsto: [.261, .261, "mapsto"],
						xrightharpoondown: [.261, .261, "rightharpoondown"],
						xleftharpoondown: [.261, .261, "leftharpoondown"],
						xrightleftharpoons: [.358, .358, "rightleftharpoons"],
						xleftrightharpoons: [.358, .358, "leftrightharpoons"],
						overgroup: [.342, 0, "overgroup"],
						undergroup: [.342, 0, "undergroup"],
						xtwoheadleftarrow: [.167, .167, "twoheadleftarrow"],
						xtwoheadrightarrow: [.167, .167, "twoheadrightarrow"],
						xLongequal: [.167, .167, "longequal"],
						xtofrom: [.264, .264, "tofrom"]
					},
					k = function (a) {
						if (a.type === "ordgroup") return a.value.length;
						else return 1
					};
				c = function (a, b) {
					var c = a.value.label.substr(1),
						e = 0,
						f = 0,
						g = ["stretchy"],
						i = "";
					if (h.contains(["widehat", "widetilde", "undertilde"], c)) {
						a = k(a.value.base);
						if (a > 5) e = .312, i = (c === "widehat" ? "widehat" : "tilde") + "4";
						else {
							var l = [1, 1, 2, 2, 3, 3][a];
							c === "widehat" ? (e = [0, .24, .3, .3, .36, .36][a], i = "widehat" + l) : (e = [0, .26, .3, .3, .34, .34][a], i = "tilde" + l)
						}
					} else {
						a = j[c];
						e = a[0];
						f = a[1];
						i = a[2];
						c.substr(0, 1) === "x" && g.push("x-arrow")
					}
					l = void 0;
					b.color ? (g.push(i), g.push("mask"), g.push(i + "-mask"), l = d.makeSpan(g, [], b), l.style.backgroundColor = b.getColor()) : (g.push(i), l = d.makeSpan(g, [], b));
					l.height = e;
					l.depth = f;
					l.maxFontSize = 1;
					return l
				};
				var l = function (a, b, c, e, f) {
					var g = d.makeSpan(["stretchy", c], [], f);
					f.color && (c === "fbox" ? g.style.borderColor = f.getColor() : (g.classes[2] = c + "-mask", g.style.backgroundColor = f.getColor()));
					g.height = a.height + a.depth + 2 * e;
					g.style.height = g.height + "em";
					/cancel/.test(c) && b ? g.maxFontSize = 1.2 : g.maxFontSize = 1;
					return g
				};
				a.exports = {
					encloseSpan: l,
					mathMLnode: b,
					svgSpan: c
				}
			}, {
				"./buildCommon": 34,
				"./mathMLTree": 45,
				"./utils": 51
			}],
			48: [function (c, a, b) {
				"use strict";
				a.exports = {
					math: {},
					text: {}
				};

				function c(b, c, d, e, f, g) {
					a.exports[b][f] = {
						font: c,
						group: d,
						replace: e
					}, g && (a.exports[b][e] = a.exports[b][f])
				}
				b = "math";
				var d = "text",
					g = "main",
					h = "ams",
					i = "accent",
					j = "bin",
					k = "close",
					l = "inner",
					m = "mathord",
					n = "op",
					o = "open",
					p = "punct",
					q = "rel",
					r = "spacing",
					s = "textord";
				c(b, g, q, "\u2261", "\\equiv");
				c(b, g, q, "\u227a", "\\prec");
				c(b, g, q, "\u227b", "\\succ");
				c(b, g, q, "\u223c", "\\sim");
				c(b, g, q, "\u22a5", "\\perp");
				c(b, g, q, "\u2aaf", "\\preceq");
				c(b, g, q, "\u2ab0", "\\succeq");
				c(b, g, q, "\u2243", "\\simeq");
				c(b, g, q, "\u2223", "\\mid");
				c(b, g, q, "\u226a", "\\ll");
				c(b, g, q, "\u226b", "\\gg");
				c(b, g, q, "\u224d", "\\asymp");
				c(b, g, q, "\u2225", "\\parallel");
				c(b, g, q, "\u22c8", "\\bowtie");
				c(b, g, q, "\u2323", "\\smile");
				c(b, g, q, "\u2291", "\\sqsubseteq");
				c(b, g, q, "\u2292", "\\sqsupseteq");
				c(b, g, q, "\u2250", "\\doteq");
				c(b, g, q, "\u2322", "\\frown");
				c(b, g, q, "\u220b", "\\ni");
				c(b, g, q, "\u221d", "\\propto");
				c(b, g, q, "\u22a2", "\\vdash");
				c(b, g, q, "\u22a3", "\\dashv");
				c(b, g, q, "\u220b", "\\owns");
				c(b, g, p, ".", "\\ldotp");
				c(b, g, p, "\u22c5", "\\cdotp");
				c(b, g, s, "#", "\\#");
				c(d, g, s, "#", "\\#");
				c(b, g, s, "&", "\\&");
				c(d, g, s, "&", "\\&");
				c(b, g, s, "\u2135", "\\aleph");
				c(b, g, s, "\u2200", "\\forall");
				c(b, g, s, "\u210f", "\\hbar");
				c(b, g, s, "\u2203", "\\exists");
				c(b, g, s, "\u2207", "\\nabla");
				c(b, g, s, "\u266d", "\\flat");
				c(b, g, s, "\u2113", "\\ell");
				c(b, g, s, "\u266e", "\\natural");
				c(b, g, s, "\u2663", "\\clubsuit");
				c(b, g, s, "\u2118", "\\wp");
				c(b, g, s, "\u266f", "\\sharp");
				c(b, g, s, "\u2662", "\\diamondsuit");
				c(b, g, s, "\u211c", "\\Re");
				c(b, g, s, "\u2661", "\\heartsuit");
				c(b, g, s, "\u2111", "\\Im");
				c(b, g, s, "\u2660", "\\spadesuit");
				c(b, g, s, "\u2020", "\\dag");
				c(d, g, s, "\u2020", "\\dag");
				c(d, g, s, "\u2020", "\\textdagger");
				c(b, g, s, "\u2021", "\\ddag");
				c(d, g, s, "\u2021", "\\ddag");
				c(d, g, s, "\u2020", "\\textdaggerdbl");
				c(b, g, k, "\u23b1", "\\rmoustache");
				c(b, g, o, "\u23b0", "\\lmoustache");
				c(b, g, k, "\u27ef", "\\rgroup");
				c(b, g, o, "\u27ee", "\\lgroup");
				c(b, g, j, "\u2213", "\\mp");
				c(b, g, j, "\u2296", "\\ominus");
				c(b, g, j, "\u228e", "\\uplus");
				c(b, g, j, "\u2293", "\\sqcap");
				c(b, g, j, "\u2217", "\\ast");
				c(b, g, j, "\u2294", "\\sqcup");
				c(b, g, j, "\u25ef", "\\bigcirc");
				c(b, g, j, "\u2219", "\\bullet");
				c(b, g, j, "\u2021", "\\ddagger");
				c(b, g, j, "\u2240", "\\wr");
				c(b, g, j, "\u2a3f", "\\amalg");
				c(b, g, q, "\u27f5", "\\longleftarrow");
				c(b, g, q, "\u21d0", "\\Leftarrow");
				c(b, g, q, "\u27f8", "\\Longleftarrow");
				c(b, g, q, "\u27f6", "\\longrightarrow");
				c(b, g, q, "\u21d2", "\\Rightarrow");
				c(b, g, q, "\u27f9", "\\Longrightarrow");
				c(b, g, q, "\u2194", "\\leftrightarrow");
				c(b, g, q, "\u27f7", "\\longleftrightarrow");
				c(b, g, q, "\u21d4", "\\Leftrightarrow");
				c(b, g, q, "\u27fa", "\\Longleftrightarrow");
				c(b, g, q, "\u21a6", "\\mapsto");
				c(b, g, q, "\u27fc", "\\longmapsto");
				c(b, g, q, "\u2197", "\\nearrow");
				c(b, g, q, "\u21a9", "\\hookleftarrow");
				c(b, g, q, "\u21aa", "\\hookrightarrow");
				c(b, g, q, "\u2198", "\\searrow");
				c(b, g, q, "\u21bc", "\\leftharpoonup");
				c(b, g, q, "\u21c0", "\\rightharpoonup");
				c(b, g, q, "\u2199", "\\swarrow");
				c(b, g, q, "\u21bd", "\\leftharpoondown");
				c(b, g, q, "\u21c1", "\\rightharpoondown");
				c(b, g, q, "\u2196", "\\nwarrow");
				c(b, g, q, "\u21cc", "\\rightleftharpoons");
				c(b, h, q, "\u226e", "\\nless");
				c(b, h, q, "\ue010", "\\nleqslant");
				c(b, h, q, "\ue011", "\\nleqq");
				c(b, h, q, "\u2a87", "\\lneq");
				c(b, h, q, "\u2268", "\\lneqq");
				c(b, h, q, "\ue00c", "\\lvertneqq");
				c(b, h, q, "\u22e6", "\\lnsim");
				c(b, h, q, "\u2a89", "\\lnapprox");
				c(b, h, q, "\u2280", "\\nprec");
				c(b, h, q, "\u22e0", "\\npreceq");
				c(b, h, q, "\u22e8", "\\precnsim");
				c(b, h, q, "\u2ab9", "\\precnapprox");
				c(b, h, q, "\u2241", "\\nsim");
				c(b, h, q, "\ue006", "\\nshortmid");
				c(b, h, q, "\u2224", "\\nmid");
				c(b, h, q, "\u22ac", "\\nvdash");
				c(b, h, q, "\u22ad", "\\nvDash");
				c(b, h, q, "\u22ea", "\\ntriangleleft");
				c(b, h, q, "\u22ec", "\\ntrianglelefteq");
				c(b, h, q, "\u228a", "\\subsetneq");
				c(b, h, q, "\ue01a", "\\varsubsetneq");
				c(b, h, q, "\u2acb", "\\subsetneqq");
				c(b, h, q, "\ue017", "\\varsubsetneqq");
				c(b, h, q, "\u226f", "\\ngtr");
				c(b, h, q, "\ue00f", "\\ngeqslant");
				c(b, h, q, "\ue00e", "\\ngeqq");
				c(b, h, q, "\u2a88", "\\gneq");
				c(b, h, q, "\u2269", "\\gneqq");
				c(b, h, q, "\ue00d", "\\gvertneqq");
				c(b, h, q, "\u22e7", "\\gnsim");
				c(b, h, q, "\u2a8a", "\\gnapprox");
				c(b, h, q, "\u2281", "\\nsucc");
				c(b, h, q, "\u22e1", "\\nsucceq");
				c(b, h, q, "\u22e9", "\\succnsim");
				c(b, h, q, "\u2aba", "\\succnapprox");
				c(b, h, q, "\u2246", "\\ncong");
				c(b, h, q, "\ue007", "\\nshortparallel");
				c(b, h, q, "\u2226", "\\nparallel");
				c(b, h, q, "\u22af", "\\nVDash");
				c(b, h, q, "\u22eb", "\\ntriangleright");
				c(b, h, q, "\u22ed", "\\ntrianglerighteq");
				c(b, h, q, "\ue018", "\\nsupseteqq");
				c(b, h, q, "\u228b", "\\supsetneq");
				c(b, h, q, "\ue01b", "\\varsupsetneq");
				c(b, h, q, "\u2acc", "\\supsetneqq");
				c(b, h, q, "\ue019", "\\varsupsetneqq");
				c(b, h, q, "\u22ae", "\\nVdash");
				c(b, h, q, "\u2ab5", "\\precneqq");
				c(b, h, q, "\u2ab6", "\\succneqq");
				c(b, h, q, "\ue016", "\\nsubseteqq");
				c(b, h, j, "\u22b4", "\\unlhd");
				c(b, h, j, "\u22b5", "\\unrhd");
				c(b, h, q, "\u219a", "\\nleftarrow");
				c(b, h, q, "\u219b", "\\nrightarrow");
				c(b, h, q, "\u21cd", "\\nLeftarrow");
				c(b, h, q, "\u21cf", "\\nRightarrow");
				c(b, h, q, "\u21ae", "\\nleftrightarrow");
				c(b, h, q, "\u21ce", "\\nLeftrightarrow");
				c(b, h, q, "\u25b3", "\\vartriangle");
				c(b, h, s, "\u210f", "\\hslash");
				c(b, h, s, "\u25bd", "\\triangledown");
				c(b, h, s, "\u25ca", "\\lozenge");
				c(b, h, s, "\u24c8", "\\circledS");
				c(b, h, s, "\xae", "\\circledR");
				c(d, h, s, "\xae", "\\circledR");
				c(b, h, s, "\u2221", "\\measuredangle");
				c(b, h, s, "\u2204", "\\nexists");
				c(b, h, s, "\u2127", "\\mho");
				c(b, h, s, "\u2132", "\\Finv");
				c(b, h, s, "\u2141", "\\Game");
				c(b, h, s, "k", "\\Bbbk");
				c(b, h, s, "\u2035", "\\backprime");
				c(b, h, s, "\u25b2", "\\blacktriangle");
				c(b, h, s, "\u25bc", "\\blacktriangledown");
				c(b, h, s, "\u25a0", "\\blacksquare");
				c(b, h, s, "\u29eb", "\\blacklozenge");
				c(b, h, s, "\u2605", "\\bigstar");
				c(b, h, s, "\u2222", "\\sphericalangle");
				c(b, h, s, "\u2201", "\\complement");
				c(b, h, s, "\xf0", "\\eth");
				c(b, h, s, "\u2571", "\\diagup");
				c(b, h, s, "\u2572", "\\diagdown");
				c(b, h, s, "\u25a1", "\\square");
				c(b, h, s, "\u25a1", "\\Box");
				c(b, h, s, "\u25ca", "\\Diamond");
				c(b, h, s, "\xa5", "\\yen");
				c(b, h, s, "\u2713", "\\checkmark");
				c(d, h, s, "\u2713", "\\checkmark");
				c(b, h, s, "\u2136", "\\beth");
				c(b, h, s, "\u2138", "\\daleth");
				c(b, h, s, "\u2137", "\\gimel");
				c(b, h, s, "\u03dd", "\\digamma");
				c(b, h, s, "\u03f0", "\\varkappa");
				c(b, h, o, "\u250c", "\\ulcorner");
				c(b, h, k, "\u2510", "\\urcorner");
				c(b, h, o, "\u2514", "\\llcorner");
				c(b, h, k, "\u2518", "\\lrcorner");
				c(b, h, q, "\u2266", "\\leqq");
				c(b, h, q, "\u2a7d", "\\leqslant");
				c(b, h, q, "\u2a95", "\\eqslantless");
				c(b, h, q, "\u2272", "\\lesssim");
				c(b, h, q, "\u2a85", "\\lessapprox");
				c(b, h, q, "\u224a", "\\approxeq");
				c(b, h, j, "\u22d6", "\\lessdot");
				c(b, h, q, "\u22d8", "\\lll");
				c(b, h, q, "\u2276", "\\lessgtr");
				c(b, h, q, "\u22da", "\\lesseqgtr");
				c(b, h, q, "\u2a8b", "\\lesseqqgtr");
				c(b, h, q, "\u2251", "\\doteqdot");
				c(b, h, q, "\u2253", "\\risingdotseq");
				c(b, h, q, "\u2252", "\\fallingdotseq");
				c(b, h, q, "\u223d", "\\backsim");
				c(b, h, q, "\u22cd", "\\backsimeq");
				c(b, h, q, "\u2ac5", "\\subseteqq");
				c(b, h, q, "\u22d0", "\\Subset");
				c(b, h, q, "\u228f", "\\sqsubset");
				c(b, h, q, "\u227c", "\\preccurlyeq");
				c(b, h, q, "\u22de", "\\curlyeqprec");
				c(b, h, q, "\u227e", "\\precsim");
				c(b, h, q, "\u2ab7", "\\precapprox");
				c(b, h, q, "\u22b2", "\\vartriangleleft");
				c(b, h, q, "\u22b4", "\\trianglelefteq");
				c(b, h, q, "\u22a8", "\\vDash");
				c(b, h, q, "\u22aa", "\\Vvdash");
				c(b, h, q, "\u2323", "\\smallsmile");
				c(b, h, q, "\u2322", "\\smallfrown");
				c(b, h, q, "\u224f", "\\bumpeq");
				c(b, h, q, "\u224e", "\\Bumpeq");
				c(b, h, q, "\u2267", "\\geqq");
				c(b, h, q, "\u2a7e", "\\geqslant");
				c(b, h, q, "\u2a96", "\\eqslantgtr");
				c(b, h, q, "\u2273", "\\gtrsim");
				c(b, h, q, "\u2a86", "\\gtrapprox");
				c(b, h, j, "\u22d7", "\\gtrdot");
				c(b, h, q, "\u22d9", "\\ggg");
				c(b, h, q, "\u2277", "\\gtrless");
				c(b, h, q, "\u22db", "\\gtreqless");
				c(b, h, q, "\u2a8c", "\\gtreqqless");
				c(b, h, q, "\u2256", "\\eqcirc");
				c(b, h, q, "\u2257", "\\circeq");
				c(b, h, q, "\u225c", "\\triangleq");
				c(b, h, q, "\u223c", "\\thicksim");
				c(b, h, q, "\u2248", "\\thickapprox");
				c(b, h, q, "\u2ac6", "\\supseteqq");
				c(b, h, q, "\u22d1", "\\Supset");
				c(b, h, q, "\u2290", "\\sqsupset");
				c(b, h, q, "\u227d", "\\succcurlyeq");
				c(b, h, q, "\u22df", "\\curlyeqsucc");
				c(b, h, q, "\u227f", "\\succsim");
				c(b, h, q, "\u2ab8", "\\succapprox");
				c(b, h, q, "\u22b3", "\\vartriangleright");
				c(b, h, q, "\u22b5", "\\trianglerighteq");
				c(b, h, q, "\u22a9", "\\Vdash");
				c(b, h, q, "\u2223", "\\shortmid");
				c(b, h, q, "\u2225", "\\shortparallel");
				c(b, h, q, "\u226c", "\\between");
				c(b, h, q, "\u22d4", "\\pitchfork");
				c(b, h, q, "\u221d", "\\varpropto");
				c(b, h, q, "\u25c0", "\\blacktriangleleft");
				c(b, h, q, "\u2234", "\\therefore");
				c(b, h, q, "\u220d", "\\backepsilon");
				c(b, h, q, "\u25b6", "\\blacktriangleright");
				c(b, h, q, "\u2235", "\\because");
				c(b, h, q, "\u22d8", "\\llless");
				c(b, h, q, "\u22d9", "\\gggtr");
				c(b, h, j, "\u22b2", "\\lhd");
				c(b, h, j, "\u22b3", "\\rhd");
				c(b, h, q, "\u2242", "\\eqsim");
				c(b, g, q, "\u22c8", "\\Join");
				c(b, h, q, "\u2251", "\\Doteq");
				c(b, h, j, "\u2214", "\\dotplus");
				c(b, h, j, "\u2216", "\\smallsetminus");
				c(b, h, j, "\u22d2", "\\Cap");
				c(b, h, j, "\u22d3", "\\Cup");
				c(b, h, j, "\u2a5e", "\\doublebarwedge");
				c(b, h, j, "\u229f", "\\boxminus");
				c(b, h, j, "\u229e", "\\boxplus");
				c(b, h, j, "\u22c7", "\\divideontimes");
				c(b, h, j, "\u22c9", "\\ltimes");
				c(b, h, j, "\u22ca", "\\rtimes");
				c(b, h, j, "\u22cb", "\\leftthreetimes");
				c(b, h, j, "\u22cc", "\\rightthreetimes");
				c(b, h, j, "\u22cf", "\\curlywedge");
				c(b, h, j, "\u22ce", "\\curlyvee");
				c(b, h, j, "\u229d", "\\circleddash");
				c(b, h, j, "\u229b", "\\circledast");
				c(b, h, j, "\u22c5", "\\centerdot");
				c(b, h, j, "\u22ba", "\\intercal");
				c(b, h, j, "\u22d2", "\\doublecap");
				c(b, h, j, "\u22d3", "\\doublecup");
				c(b, h, j, "\u22a0", "\\boxtimes");
				c(b, h, q, "\u21e2", "\\dashrightarrow");
				c(b, h, q, "\u21e0", "\\dashleftarrow");
				c(b, h, q, "\u21c7", "\\leftleftarrows");
				c(b, h, q, "\u21c6", "\\leftrightarrows");
				c(b, h, q, "\u21da", "\\Lleftarrow");
				c(b, h, q, "\u219e", "\\twoheadleftarrow");
				c(b, h, q, "\u21a2", "\\leftarrowtail");
				c(b, h, q, "\u21ab", "\\looparrowleft");
				c(b, h, q, "\u21cb", "\\leftrightharpoons");
				c(b, h, q, "\u21b6", "\\curvearrowleft");
				c(b, h, q, "\u21ba", "\\circlearrowleft");
				c(b, h, q, "\u21b0", "\\Lsh");
				c(b, h, q, "\u21c8", "\\upuparrows");
				c(b, h, q, "\u21bf", "\\upharpoonleft");
				c(b, h, q, "\u21c3", "\\downharpoonleft");
				c(b, h, q, "\u22b8", "\\multimap");
				c(b, h, q, "\u21ad", "\\leftrightsquigarrow");
				c(b, h, q, "\u21c9", "\\rightrightarrows");
				c(b, h, q, "\u21c4", "\\rightleftarrows");
				c(b, h, q, "\u21a0", "\\twoheadrightarrow");
				c(b, h, q, "\u21a3", "\\rightarrowtail");
				c(b, h, q, "\u21ac", "\\looparrowright");
				c(b, h, q, "\u21b7", "\\curvearrowright");
				c(b, h, q, "\u21bb", "\\circlearrowright");
				c(b, h, q, "\u21b1", "\\Rsh");
				c(b, h, q, "\u21ca", "\\downdownarrows");
				c(b, h, q, "\u21be", "\\upharpoonright");
				c(b, h, q, "\u21c2", "\\downharpoonright");
				c(b, h, q, "\u21dd", "\\rightsquigarrow");
				c(b, h, q, "\u21dd", "\\leadsto");
				c(b, h, q, "\u21db", "\\Rrightarrow");
				c(b, h, q, "\u21be", "\\restriction");
				c(b, g, s, "\u2018", "`");
				c(b, g, s, "$", "\\$");
				c(d, g, s, "$", "\\$");
				c(d, g, s, "$", "\\textdollar");
				c(b, g, s, "%", "\\%");
				c(d, g, s, "%", "\\%");
				c(b, g, s, "_", "\\_");
				c(d, g, s, "_", "\\_");
				c(d, g, s, "_", "\\textunderscore");
				c(b, g, s, "\u2220", "\\angle");
				c(b, g, s, "\u221e", "\\infty");
				c(b, g, s, "\u2032", "\\prime");
				c(b, g, s, "\u25b3", "\\triangle");
				c(b, g, s, "\u0393", "\\Gamma", !0);
				c(b, g, s, "\u0394", "\\Delta", !0);
				c(b, g, s, "\u0398", "\\Theta", !0);
				c(b, g, s, "\u039b", "\\Lambda", !0);
				c(b, g, s, "\u039e", "\\Xi", !0);
				c(b, g, s, "\u03a0", "\\Pi", !0);
				c(b, g, s, "\u03a3", "\\Sigma", !0);
				c(b, g, s, "\u03a5", "\\Upsilon", !0);
				c(b, g, s, "\u03a6", "\\Phi", !0);
				c(b, g, s, "\u03a8", "\\Psi", !0);
				c(b, g, s, "\u03a9", "\\Omega", !0);
				c(b, g, s, "\xac", "\\neg");
				c(b, g, s, "\xac", "\\lnot");
				c(b, g, s, "\u22a4", "\\top");
				c(b, g, s, "\u22a5", "\\bot");
				c(b, g, s, "\u2205", "\\emptyset");
				c(b, h, s, "\u2205", "\\varnothing");
				c(b, g, m, "\u03b1", "\\alpha", !0);
				c(b, g, m, "\u03b2", "\\beta", !0);
				c(b, g, m, "\u03b3", "\\gamma", !0);
				c(b, g, m, "\u03b4", "\\delta", !0);
				c(b, g, m, "\u03f5", "\\epsilon", !0);
				c(b, g, m, "\u03b6", "\\zeta", !0);
				c(b, g, m, "\u03b7", "\\eta", !0);
				c(b, g, m, "\u03b8", "\\theta", !0);
				c(b, g, m, "\u03b9", "\\iota", !0);
				c(b, g, m, "\u03ba", "\\kappa", !0);
				c(b, g, m, "\u03bb", "\\lambda", !0);
				c(b, g, m, "\u03bc", "\\mu", !0);
				c(b, g, m, "\u03bd", "\\nu", !0);
				c(b, g, m, "\u03be", "\\xi", !0);
				c(b, g, m, "\u03bf", "\\omicron", !0);
				c(b, g, m, "\u03c0", "\\pi", !0);
				c(b, g, m, "\u03c1", "\\rho", !0);
				c(b, g, m, "\u03c3", "\\sigma", !0);
				c(b, g, m, "\u03c4", "\\tau", !0);
				c(b, g, m, "\u03c5", "\\upsilon", !0);
				c(b, g, m, "\u03d5", "\\phi", !0);
				c(b, g, m, "\u03c7", "\\chi", !0);
				c(b, g, m, "\u03c8", "\\psi", !0);
				c(b, g, m, "\u03c9", "\\omega", !0);
				c(b, g, m, "\u03b5", "\\varepsilon", !0);
				c(b, g, m, "\u03d1", "\\vartheta", !0);
				c(b, g, m, "\u03d6", "\\varpi", !0);
				c(b, g, m, "\u03f1", "\\varrho", !0);
				c(b, g, m, "\u03c2", "\\varsigma", !0);
				c(b, g, m, "\u03c6", "\\varphi", !0);
				c(b, g, j, "\u2217", "*");
				c(b, g, j, "+", "+");
				c(b, g, j, "\u2212", "-");
				c(b, g, j, "\u22c5", "\\cdot");
				c(b, g, j, "\u2218", "\\circ");
				c(b, g, j, "\xf7", "\\div");
				c(b, g, j, "\xb1", "\\pm");
				c(b, g, j, "\xd7", "\\times");
				c(b, g, j, "\u2229", "\\cap");
				c(b, g, j, "\u222a", "\\cup");
				c(b, g, j, "\u2216", "\\setminus");
				c(b, g, j, "\u2227", "\\land");
				c(b, g, j, "\u2228", "\\lor");
				c(b, g, j, "\u2227", "\\wedge");
				c(b, g, j, "\u2228", "\\vee");
				c(b, g, s, "\u221a", "\\surd");
				c(b, g, o, "(", "(");
				c(b, g, o, "[", "[");
				c(b, g, o, "\u27e8", "\\langle");
				c(b, g, o, "\u2223", "\\lvert");
				c(b, g, o, "\u2225", "\\lVert");
				c(b, g, k, ")", ")");
				c(b, g, k, "]", "]");
				c(b, g, k, "?", "?");
				c(b, g, k, "!", "!");
				c(b, g, k, "\u27e9", "\\rangle");
				c(b, g, k, "\u2223", "\\rvert");
				c(b, g, k, "\u2225", "\\rVert");
				c(b, g, q, "=", "=");
				c(b, g, q, "<", "<");
				c(b, g, q, ">", ">");
				c(b, g, q, ":", ":");
				c(b, g, q, "\u2248", "\\approx");
				c(b, g, q, "\u2245", "\\cong");
				c(b, g, q, "\u2265", "\\ge");
				c(b, g, q, "\u2265", "\\geq");
				c(b, g, q, "\u2190", "\\gets");
				c(b, g, q, ">", "\\gt");
				c(b, g, q, "\u2208", "\\in");
				c(b, g, q, "\u2209", "\\notin");
				c(b, g, q, "\u2282", "\\subset");
				c(b, g, q, "\u2283", "\\supset");
				c(b, g, q, "\u2286", "\\subseteq");
				c(b, g, q, "\u2287", "\\supseteq");
				c(b, h, q, "\u2288", "\\nsubseteq");
				c(b, h, q, "\u2289", "\\nsupseteq");
				c(b, g, q, "\u22a8", "\\models");
				c(b, g, q, "\u2190", "\\leftarrow");
				c(b, g, q, "\u2264", "\\le");
				c(b, g, q, "\u2264", "\\leq");
				c(b, g, q, "<", "\\lt");
				c(b, g, q, "\u2260", "\\ne");
				c(b, g, q, "\u2260", "\\neq");
				c(b, g, q, "\u2192", "\\rightarrow");
				c(b, g, q, "\u2192", "\\to");
				c(b, h, q, "\u2271", "\\ngeq");
				c(b, h, q, "\u2270", "\\nleq");
				c(b, g, r, null, "\\!");
				c(b, g, r, "\xa0", "\\ ");
				c(b, g, r, "\xa0", "~");
				c(b, g, r, null, "\\,");
				c(b, g, r, null, "\\:");
				c(b, g, r, null, "\\;");
				c(b, g, r, null, "\\enspace");
				c(b, g, r, null, "\\qquad");
				c(b, g, r, null, "\\quad");
				c(b, g, r, "\xa0", "\\space");
				c(b, g, p, ",", ",");
				c(b, g, p, ";", ";");
				c(b, g, p, ":", "\\colon");
				c(b, h, j, "\u22bc", "\\barwedge");
				c(b, h, j, "\u22bb", "\\veebar");
				c(b, g, j, "\u2299", "\\odot");
				c(b, g, j, "\u2295", "\\oplus");
				c(b, g, j, "\u2297", "\\otimes");
				c(b, g, s, "\u2202", "\\partial");
				c(b, g, j, "\u2298", "\\oslash");
				c(b, h, j, "\u229a", "\\circledcirc");
				c(b, h, j, "\u22a1", "\\boxdot");
				c(b, g, j, "\u25b3", "\\bigtriangleup");
				c(b, g, j, "\u25bd", "\\bigtriangledown");
				c(b, g, j, "\u2020", "\\dagger");
				c(b, g, j, "\u22c4", "\\diamond");
				c(b, g, j, "\u22c6", "\\star");
				c(b, g, j, "\u25c3", "\\triangleleft");
				c(b, g, j, "\u25b9", "\\triangleright");
				c(b, g, o, "{", "\\{");
				c(d, g, s, "{", "\\{");
				c(d, g, s, "{", "\\textbraceleft");
				c(b, g, k, "}", "\\}");
				c(d, g, s, "}", "\\}");
				c(d, g, s, "}", "\\textbraceright");
				c(b, g, o, "{", "\\lbrace");
				c(b, g, k, "}", "\\rbrace");
				c(b, g, o, "[", "\\lbrack");
				c(b, g, k, "]", "\\rbrack");
				c(d, g, s, "<", "\\textless");
				c(d, g, s, ">", "\\textgreater");
				c(b, g, o, "\u230a", "\\lfloor");
				c(b, g, k, "\u230b", "\\rfloor");
				c(b, g, o, "\u2308", "\\lceil");
				c(b, g, k, "\u2309", "\\rceil");
				c(b, g, s, "\\", "\\backslash");
				c(b, g, s, "\u2223", "|");
				c(b, g, s, "\u2223", "\\vert");
				c(d, g, s, "|", "\\textbar");
				c(b, g, s, "\u2225", "\\|");
				c(b, g, s, "\u2225", "\\Vert");
				c(d, g, s, "\u2225", "\\textbardbl");
				c(b, g, q, "\u2191", "\\uparrow");
				c(b, g, q, "\u21d1", "\\Uparrow");
				c(b, g, q, "\u2193", "\\downarrow");
				c(b, g, q, "\u21d3", "\\Downarrow");
				c(b, g, q, "\u2195", "\\updownarrow");
				c(b, g, q, "\u21d5", "\\Updownarrow");
				c(b, g, n, "\u2210", "\\coprod");
				c(b, g, n, "\u22c1", "\\bigvee");
				c(b, g, n, "\u22c0", "\\bigwedge");
				c(b, g, n, "\u2a04", "\\biguplus");
				c(b, g, n, "\u22c2", "\\bigcap");
				c(b, g, n, "\u22c3", "\\bigcup");
				c(b, g, n, "\u222b", "\\int");
				c(b, g, n, "\u222b", "\\intop");
				c(b, g, n, "\u222c", "\\iint");
				c(b, g, n, "\u222d", "\\iiint");
				c(b, g, n, "\u220f", "\\prod");
				c(b, g, n, "\u2211", "\\sum");
				c(b, g, n, "\u2a02", "\\bigotimes");
				c(b, g, n, "\u2a01", "\\bigoplus");
				c(b, g, n, "\u2a00", "\\bigodot");
				c(b, g, n, "\u222e", "\\oint");
				c(b, g, n, "\u2a06", "\\bigsqcup");
				c(b, g, n, "\u222b", "\\smallint");
				c(d, g, l, "\u2026", "\\textellipsis");
				c(b, g, l, "\u2026", "\\mathellipsis");
				c(d, g, l, "\u2026", "\\ldots");
				c(b, g, l, "\u2026", "\\ldots");
				c(b, g, l, "\u22ef", "\\cdots");
				c(b, g, l, "\u22f1", "\\ddots");
				c(b, g, s, "\u22ee", "\\vdots");
				c(b, g, i, "\xb4", "\\acute");
				c(b, g, i, "`", "\\grave");
				c(b, g, i, "\xa8", "\\ddot");
				c(b, g, i, "~", "\\tilde");
				c(b, g, i, "\xaf", "\\bar");
				c(b, g, i, "\u02d8", "\\breve");
				c(b, g, i, "\u02c7", "\\check");
				c(b, g, i, "^", "\\hat");
				c(b, g, i, "\u20d7", "\\vec");
				c(b, g, i, "\u02d9", "\\dot");
				c(b, g, m, "\u0131", "\\imath");
				c(b, g, m, "\u0237", "\\jmath");
				c(d, g, s, "\u2013", "--");
				c(d, g, s, "\u2013", "\\textendash");
				c(d, g, s, "\u2014", "---");
				c(d, g, s, "\u2014", "\\textemdash");
				c(d, g, s, "\u2018", "`");
				c(d, g, s, "\u2018", "\\textquoteleft");
				c(d, g, s, "\u2019", "'");
				c(d, g, s, "\u2019", "\\textquoteright");
				c(d, g, s, "\u201c", "``");
				c(d, g, s, "\u201c", "\\textquotedblleft");
				c(d, g, s, "\u201d", "''");
				c(d, g, s, "\u201d", "\\textquotedblright");
				c(b, g, s, "\xb0", "\\degree");
				c(d, g, s, "\xb0", "\\degree");
				c(b, g, m, "\xa3", "\\pounds");
				c(b, g, m, "\xa3", "\\mathsterling");
				c(d, g, m, "\xa3", "\\pounds");
				c(d, g, m, "\xa3", "\\textsterling");
				c(b, h, s, "\u2720", "\\maltese");
				c(d, h, s, "\u2720", "\\maltese");
				c(d, g, r, "\xa0", "\\ ");
				c(d, g, r, "\xa0", " ");
				c(d, g, r, "\xa0", "~");
				p = '0123456789/@."';
				for (var j = 0; j < p.length; j++) {
					o = p.charAt(j);
					c(b, g, s, o, o)
				}
				k = '0123456789!@*()-=+[]<>|";:?/.,';
				for (var q = 0; q < k.length; q++) {
					n = k.charAt(q);
					c(d, g, s, n, n)
				}
				l = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
				for (var i = 0; i < l.length; i++) {
					h = l.charAt(i);
					c(b, g, m, h, h);
					c(d, g, s, h, h)
				}
				for (var r = 192; r <= 214; r++) {
					o = String.fromCharCode(r);
					c(d, g, s, o, o)
				}
				for (var j = 216; j <= 246; j++) {
					p = String.fromCharCode(j);
					c(d, g, s, p, p)
				}
				for (var n = 248; n <= 255; n++) {
					q = String.fromCharCode(n);
					c(d, g, s, q, q)
				}
				for (var k = 1040; k <= 1103; k++) {
					h = String.fromCharCode(k);
					c(d, g, s, h, h)
				}
				c(d, g, s, "\u2013", "\u2013");
				c(d, g, s, "\u2014", "\u2014");
				c(d, g, s, "\u2018", "\u2018");
				c(d, g, s, "\u2019", "\u2019");
				c(d, g, s, "\u201c", "\u201c");
				c(d, g, s, "\u201d", "\u201d")
			}, {}],
			49: [function (c, a, b) {
				"use strict";
				c = /[\uAC00-\uD7AF]/;
				b = /[\u3040-\u309F]|[\u30A0-\u30FF]|[\u4E00-\u9FAF]|[\uAC00-\uD7AF]/;
				a.exports = {
					cjkRegex: b,
					hangulRegex: c
				}
			}, {}],
			50: [function (c, a, b) {
				"use strict";
				c = c("./ParseError");
				var d = b(c);

				function b(a) {
					return a && a.__esModule ? a : {
						"default": a
					}
				}
				var g = {
						pt: 1,
						mm: 7227 / 2540,
						cm: 7227 / 254,
						"in": 72.27,
						bp: 803 / 800,
						pc: 12,
						dd: 1238 / 1157,
						cc: 14856 / 1157,
						nd: 685 / 642,
						nc: 1370 / 107,
						sp: 1 / 65536,
						px: 803 / 800
					},
					h = {
						ex: !0,
						em: !0,
						mu: !0
					};
				b = function (a) {
					a.unit && (a = a.unit);
					return a in g || a in h || a === "ex"
				};
				c = function (a, b) {
					var c;
					if (a.unit in g) c = g[a.unit] / b.fontMetrics().ptPerEm / b.sizeMultiplier;
					else if (a.unit === "mu") c = b.fontMetrics().cssEmPerMu;
					else {
						var e = void 0;
						b.style.isTight() ? e = b.havingStyle(b.style.text()) : e = b;
						if (a.unit === "ex") c = e.fontMetrics().xHeight;
						else if (a.unit === "em") c = e.fontMetrics().quad;
						else throw new d["default"]("Invalid unit: '" + a.unit + "'");
						e !== b && (c *= e.sizeMultiplier / b.sizeMultiplier)
					}
					e = a.number * c;
					if (b.maxSize && e > b.maxSize) return b.maxSize;
					else return e
				};
				a.exports = {
					validUnit: b,
					calculateSize: c
				}
			}, {
				"./ParseError": 29
			}],
			51: [function (c, a, b) {
				"use strict";
				var d = Array.prototype.indexOf,
					g = function (a, b) {
						if (a == null) return -1;
						if (d && a.indexOf === d) return a.indexOf(b);
						var c = a.length;
						for (var e = 0; e < c; e++)
							if (a[e] === b) return e;
						return -1
					},
					h = function (a, b) {
						return g(a, b) !== -1
					},
					i = function (a, b) {
						return a === void 0 ? b : a
					},
					j = /([A-Z])/g,
					k = function (a) {
						return a.replace(j, "-$1").toLowerCase()
					},
					l = {
						"&": "&",
						">": ">",
						"<": "<",
						'"': """,
						"'": "'"
					},
					m = /[&><"']/g;

				function n(a) {
					return l[a]
				}

				function c(a) {
					return ("" + a).replace(m, n)
				}
				var o = void 0;
				if (typeof document !== "undefined") {
					var p = document.createElement("span");
					"textContent" in p ? o = function (a, b) {
						a.textContent = b
					} : o = function (a, b) {
						a.innerText = b
					}
				}

				function b(a) {
					o(a, "")
				}
				a.exports = {
					contains: h,
					deflt: i,
					escape: c,
					hyphenate: k,
					indexOf: g,
					setTextContent: o,
					clearNode: b
				}
			}, {}]
		}, {}, [1])(1)
	})
}), null);
__d("CCERichTextMath.react", ["cx", "React", "expectationViolation", "katex", "useBoolean", "useEffectOnce"], (function (a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h = b("React");

	function a(a) {
		var c = a.displayMode,
			d = a.expression;
		a = b("useBoolean")(!1);
		var e = a.setTrue;
		a = a.value;
		var f = h.useRef(null);
		b("useEffectOnce")(function () {
			var a = f.current;
			if (a == null) {
				e();
				return
			}
			try {
				b("katex").render(d, a, {
					displayMode: c,
					throwOnError: !1
				})
			} catch (a) {
				b("expectationViolation")("Failed to render math, with error " + a.message), e()
			}
		});
		return a ? h.jsx("span", {
			children: d
		}) : h.jsx("span", {
			className: "_3_3l",
			ref: f
		})
	}
}), null);
__d("CCERichTextDraftJSRenderer.react", ["cx", "CCERichTextMath.react", "CompositeDraftDecorator", "DraftEditor.react", "EditorState", "FBJSON", "FDSText.react", "Image.react", "Link.react", "React", "convertFromRawToDraftState", "emptyFunction", "getEntityMatcher", "stylex"], (function (a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h = b("React");

	function a(a) {
		var c = a.draftJSStateString;
		a = a.textSize;
		a = a === void 0 ? "header3" : a;
		var d = h.useMemo(function () {
			return b("EditorState").createWithContent(b("convertFromRawToDraftState")(b("FBJSON").parse(c)), new(b("CompositeDraftDecorator"))([{
				strategy: b("getEntityMatcher")(function (a) {
					return a.getType() === "IMAGE"
				}),
				component: function (a) {
					return h.jsx(b("Image.react"), {
						className: "enyh5dm0",
						src: a.contentState.getEntity(a.entityKey).getData().url
					})
				}
			}, {
				strategy: b("getEntityMatcher")(function (a) {
					return a.getType() === "LINK"
				}),
				component: function (a) {
					return h.jsx(b("Link.react"), {
						href: a.contentState.getEntity(a.entityKey).getData().url,
						target: "_blank",
						children: a.children
					})
				}
			}, {
				strategy: b("getEntityMatcher")(function (a) {
					return a.getType() === "MATH"
				}),
				component: function (a) {
					a = a.contentState.getEntity(a.entityKey).getData();
					return h.jsx(b("CCERichTextMath.react"), {
						displayMode: a.mathDisplayMode,
						expression: a.mathExpression
					})
				}
			}]))
		}, [c]);
		return h.jsx("div", {
			className: "_8z_7",
			children: h.jsx(b("FDSText.react"), {
				overflowWrap: "break-word",
				size: a,
				weight: "normal",
				children: h.jsx(b("DraftEditor.react"), {
					blockStyleFn: function () {
						return "_8z_j"
					},
					editorState: d,
					readOnly: !0,
					onChange: b("emptyFunction")
				})
			})
		})
	}
}), null);
__d("CodingCompetitionsContestProblemTab", ["$InternalEnum"], (function (a, b, c, d, e, f) {
	a = b("$InternalEnum")({
		MY_SUBMISSIONS: "my-submissions",
		PROBLEM: "problem",
		SOLUTION: "solution"
	});
	c = a;
	e.exports = c
}), null);
__d("RecruitingToolsTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function (a, b, c, d, e, f) {
	"use strict";
	a = function () {
		function a() {
			this.$1 = {}
		}
		var c = a.prototype;
		c.log = function (a) {
			b("GeneratedLoggerUtils").log("logger:RecruitingToolsLoggerConfig", this.$1, b("Banzai").BASIC, a)
		};
		c.logVital = function (a) {
			b("GeneratedLoggerUtils").log("logger:RecruitingToolsLoggerConfig", this.$1, b("Banzai").VITAL, a)
		};
		c.logImmediately = function (a) {
			b("GeneratedLoggerUtils").log("logger:RecruitingToolsLoggerConfig", this.$1, {
				signal: !0
			}, a)
		};
		c.clear = function () {
			this.$1 = {};
			return this
		};
		c.getData = function () {
			return babelHelpers["extends"]({}, this.$1)
		};
		c.updateData = function (a) {
			this.$1 = babelHelpers["extends"]({}, this.$1, a);
			return this
		};
		c.setEntityID = function (a) {
			this.$1.entity_id = a;
			return this
		};
		c.setEventLength = function (a) {
			this.$1.event_length = a;
			return this
		};
		c.setEventName = function (a) {
			this.$1.event_name = a;
			return this
		};
		c.setException = function (a) {
			this.$1.exception = a;
			return this
		};
		c.setPayloadRaw = function (a) {
			this.$1.payload_raw = b("GeneratedLoggerUtils").serializeMap(a);
			return this
		};
		c.setProductName = function (a) {
			this.$1.product_name = a;
			return this
		};
		c.setTransactionID = function (a) {
			this.$1.transaction_id = a;
			return this
		};
		c.setViewportHeight = function (a) {
			this.$1.viewport_height = a;
			return this
		};
		c.setViewportWidth = function (a) {
			this.$1.viewport_width = a;
			return this
		};
		return a
	}();
	c = {
		entity_id: !0,
		event_length: !0,
		event_name: !0,
		exception: !0,
		payload_raw: !0,
		product_name: !0,
		transaction_id: !0,
		viewport_height: !0,
		viewport_width: !0
	};
	e.exports = a
}), null);