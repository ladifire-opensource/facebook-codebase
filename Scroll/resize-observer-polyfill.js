__d("resize-observer-polyfill-1.5.1", [], (function (a, b, c, d, e, f) {
	"use strict";
	var g = {},
		h = {
			exports: g
		},
		i;

	function j() {
		(function (b, c) {
			typeof g === "object" && typeof h !== "undefined" ? h.exports = c() : typeof i === "function" && i.amd ? i(c) : b.ResizeObserver = c()
		})(this, function () {
			var b = function () {
					if (typeof Map !== "undefined") return Map;

					function a(a, b) {
						var c = -1;
						a.some(function (d, a) {
							if (d[0] === b) {
								c = a;
								return !0
							}
							return !1
						});
						return c
					}
					return function () {
						function b() {
							this.__entries__ = []
						}
						Object.defineProperty(b.prototype, "size", {
							get: function () {
								return this.__entries__.length
							},
							enumerable: !0,
							configurable: !0
						});
						b.prototype.get = function (b) {
							b = a(this.__entries__, b);
							b = this.__entries__[b];
							return b && b[1]
						};
						b.prototype.set = function (c, d) {
							var b = a(this.__entries__, c);
							~b ? this.__entries__[b][1] = d : this.__entries__.push([c, d])
						};
						b.prototype["delete"] = function (b) {
							var c = this.__entries__;
							b = a(c, b);
							~b && c.splice(b, 1)
						};
						b.prototype.has = function (b) {
							return !!~a(this.__entries__, b)
						};
						b.prototype.clear = function () {
							this.__entries__.splice(0)
						};
						b.prototype.forEach = function (a, b) {
							b === void 0 && (b = null);
							for (var c = 0, d = this.__entries__; c < d.length; c++) {
								var e = d[c];
								a.call(b, e[1], e[0])
							}
						};
						return b
					}()
				}(),
				c = typeof window !== "undefined" && typeof document !== "undefined" && window.document === document,
				d = function () {
					if (typeof a !== "undefined" && a.Math === Math) return a;
					if (typeof self !== "undefined" && self.Math === Math) return self;
					return typeof window !== "undefined" && window.Math === Math ? window : Function("return this")()
				}(),
				e = function () {
					return typeof requestAnimationFrame === "function" ? requestAnimationFrame.bind(d) : function (a) {
						return setTimeout(function () {
							return a(Date.now())
						}, 1e3 / 60)
					}
				}(),
				f = 2;

			function g(a, b) {
				var c = !1,
					d = !1,
					g = 0;

				function h() {
					c && (c = !1, a()), d && j()
				}

				function i() {
					e(h)
				}

				function j() {
					var a = Date.now();
					if (c) {
						if (a - g < f) return;
						d = !0
					} else c = !0, d = !1, setTimeout(i, b);
					g = a
				}
				return j
			}
			var h = 20,
				i = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
				j = typeof MutationObserver !== "undefined",
				k = function () {
					function a() {
						this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = g(this.refresh.bind(this), h)
					}
					a.prototype.addObserver = function (a) {
						~this.observers_.indexOf(a) || this.observers_.push(a), this.connected_ || this.connect_()
					};
					a.prototype.removeObserver = function (b) {
						var a = this.observers_;
						b = a.indexOf(b);
						~b && a.splice(b, 1);
						!a.length && this.connected_ && this.disconnect_()
					};
					a.prototype.refresh = function () {
						var a = this.updateObservers_();
						a && this.refresh()
					};
					a.prototype.updateObservers_ = function () {
						var a = this.observers_.filter(function (a) {
							return a.gatherActive(), a.hasActive()
						});
						a.forEach(function (a) {
							return a.broadcastActive()
						});
						return a.length > 0
					};
					a.prototype.connect_ = function () {
						if (!c || this.connected_) return;
						document.addEventListener("transitionend", this.onTransitionEnd_);
						window.addEventListener("resize", this.refresh);
						j ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						})) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0);
						this.connected_ = !0
					};
					a.prototype.disconnect_ = function () {
						if (!c || !this.connected_) return;
						document.removeEventListener("transitionend", this.onTransitionEnd_);
						window.removeEventListener("resize", this.refresh);
						this.mutationsObserver_ && this.mutationsObserver_.disconnect();
						this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh);
						this.mutationsObserver_ = null;
						this.mutationEventsAdded_ = !1;
						this.connected_ = !1
					};
					a.prototype.onTransitionEnd_ = function (a) {
						a = a.propertyName;
						var b = a === void 0 ? "" : a;
						a = i.some(function (a) {
							return !!~b.indexOf(a)
						});
						a && this.refresh()
					};
					a.getInstance = function () {
						this.instance_ || (this.instance_ = new a());
						return this.instance_
					};
					a.instance_ = null;
					return a
				}(),
				l = function (a, b) {
					for (var c = 0, d = Object.keys(b); c < d.length; c++) {
						var e = d[c];
						Object.defineProperty(a, e, {
							value: b[e],
							enumerable: !1,
							writable: !1,
							configurable: !0
						})
					}
					return a
				},
				m = function (a) {
					a = a && a.ownerDocument && a.ownerDocument.defaultView;
					return a || d
				},
				n = x(0, 0, 0, 0);

			function o(a) {
				return parseFloat(a) || 0
			}

			function p(a) {
				var b = [];
				for (var c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
				return b.reduce(function (b, c) {
					c = a["border-" + c + "-width"];
					return b + o(c)
				}, 0)
			}

			function q(a) {
				var b = ["top", "right", "bottom", "left"],
					c = {};
				for (var d = 0, b = b; d < b.length; d++) {
					var e = b[d],
						f = a["padding-" + e];
					c[e] = o(f)
				}
				return c
			}

			function r(a) {
				a = a.getBBox();
				return x(0, 0, a.width, a.height)
			}

			function s(a) {
				var b = a.clientWidth,
					c = a.clientHeight;
				if (!b && !c) return n;
				var d = m(a).getComputedStyle(a),
					e = q(d),
					f = e.left + e.right,
					g = e.top + e.bottom,
					h = o(d.width),
					i = o(d.height);
				d.boxSizing === "border-box" && (Math.round(h + f) !== b && (h -= p(d, "left", "right") + f), Math.round(i + g) !== c && (i -= p(d, "top", "bottom") + g));
				if (!u(a)) {
					d = Math.round(h + f) - b;
					a = Math.round(i + g) - c;
					Math.abs(d) !== 1 && (h -= d);
					Math.abs(a) !== 1 && (i -= a)
				}
				return x(e.left, e.top, h, i)
			}
			var t = function () {
				return typeof SVGGraphicsElement !== "undefined" ? function (a) {
					return a instanceof m(a).SVGGraphicsElement
				} : function (a) {
					return a instanceof m(a).SVGElement && typeof a.getBBox === "function"
				}
			}();

			function u(a) {
				return a === m(a).document.documentElement
			}

			function v(a) {
				if (!c) return n;
				return t(a) ? r(a) : s(a)
			}

			function w(a) {
				var b = a.x,
					c = a.y,
					d = a.width;
				a = a.height;
				var e = typeof DOMRectReadOnly !== "undefined" ? DOMRectReadOnly : Object;
				e = Object.create(e.prototype);
				l(e, {
					x: b,
					y: c,
					width: d,
					height: a,
					top: c,
					right: b + d,
					bottom: a + c,
					left: b
				});
				return e
			}

			function x(a, b, c, d) {
				return {
					x: a,
					y: b,
					width: c,
					height: d
				}
			}
			var y = function () {
					function a(a) {
						this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = x(0, 0, 0, 0), this.target = a
					}
					a.prototype.isActive = function () {
						var a = v(this.target);
						this.contentRect_ = a;
						return a.width !== this.broadcastWidth || a.height !== this.broadcastHeight
					};
					a.prototype.broadcastRect = function () {
						var a = this.contentRect_;
						this.broadcastWidth = a.width;
						this.broadcastHeight = a.height;
						return a
					};
					return a
				}(),
				z = function () {
					function a(a, b) {
						b = w(b);
						l(this, {
							target: a,
							contentRect: b
						})
					}
					return a
				}(),
				A = function () {
					function a(a, c, d) {
						this.activeObservations_ = [];
						this.observations_ = new b();
						if (typeof a !== "function") throw new TypeError("The callback provided as parameter 1 is not a function.");
						this.callback_ = a;
						this.controller_ = c;
						this.callbackCtx_ = d
					}
					a.prototype.observe = function (a) {
						if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
						if (typeof Element === "undefined" || !(Element instanceof Object)) return;
						if (!(a instanceof m(a).Element)) throw new TypeError('parameter 1 is not of type "Element".');
						var b = this.observations_;
						if (b.has(a)) return;
						b.set(a, new y(a));
						this.controller_.addObserver(this);
						this.controller_.refresh()
					};
					a.prototype.unobserve = function (a) {
						if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
						if (typeof Element === "undefined" || !(Element instanceof Object)) return;
						if (!(a instanceof m(a).Element)) throw new TypeError('parameter 1 is not of type "Element".');
						var b = this.observations_;
						if (!b.has(a)) return;
						b["delete"](a);
						b.size || this.controller_.removeObserver(this)
					};
					a.prototype.disconnect = function () {
						this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
					};
					a.prototype.gatherActive = function () {
						var a = this;
						this.clearActive();
						this.observations_.forEach(function (b) {
							b.isActive() && a.activeObservations_.push(b)
						})
					};
					a.prototype.broadcastActive = function () {
						if (!this.hasActive()) return;
						var a = this.callbackCtx_,
							b = this.activeObservations_.map(function (a) {
								return new z(a.target, a.broadcastRect())
							});
						this.callback_.call(a, b, a);
						this.clearActive()
					};
					a.prototype.clearActive = function () {
						this.activeObservations_.splice(0)
					};
					a.prototype.hasActive = function () {
						return this.activeObservations_.length > 0
					};
					return a
				}(),
				B = typeof WeakMap !== "undefined" ? new WeakMap() : new b(),
				C = function () {
					function a(b) {
						if (!(this instanceof a)) throw new TypeError("Cannot call a class as a function.");
						if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
						var c = k.getInstance(),
							d = new A(b, c, this);
						B.set(this, d)
					}
					return a
				}();
			["observe", "unobserve", "disconnect"].forEach(function (a) {
				C.prototype[a] = function () {
					var b;
					return (b = B.get(this))[a].apply(b, arguments)
				}
			});
			var D = function () {
				return typeof d.ResizeObserver !== "undefined" ? d.ResizeObserver : C
			}();
			return D
		})
	}
	var k = !1;

	function l() {
		k || (k = !0, j());
		return h.exports
	}

	function b(a) {
		switch (a) {
			case void 0:
				return l()
		}
	}
	e.exports = b
}), null);
__d("resize-observer-polyfill", ["resize-observer-polyfill-1.5.1"], (function (a, b, c, d, e, f) {
	e.exports = b("resize-observer-polyfill-1.5.1")()
}), null);