// =>>>>>>>>>>>> https://github.com/taylorhakes/promise-polyfill/blob/master/src/index.js

__d("Promise", ["TimeSlice", "setImmediateAcrossTransitions", "setTimeoutAcrossTransitions"], (function (a, b, c, d, e, f) {
	"use strict";

	function g() {}
	var h = null,
		i = {};

	function j(a) {
		try {
			return a.then
		} catch (a) {
			h = a;
			return i
		}
	}

	function k(a, b) {
		try {
			return a(b)
		} catch (a) {
			h = a;
			return i
		}
	}

	function l(a, b, c) {
		try {
			a(b, c)
		} catch (a) {
			h = a;
			return i
		}
	}

	function m(a) {
		if (typeof this !== "object") throw new TypeError("Promises must be constructed via new");
		if (typeof a !== "function") throw new TypeError("not a function");
		this._state = 0;
		this._value = null;
		this._deferreds = [];
		if (a === g) return;
		t(a, this)
	}
	m._noop = g;
	m.prototype.then = function (a, b) {
		if (this.constructor !== m) return n(this, a, b);
		var c = new m(g);
		o(this, new s(a, b, c));
		return c
	};

	function n(a, b, c) {
		return new a.constructor(function (d, e) {
			var f = new m(g);
			f.then(d, e);
			o(a, new s(b, c, f))
		})
	}

	function o(a, c) {
		while (a._state === 3) a = a._value;
		if (a._state === 0) {
			a._deferreds.push(c);
			return
		}
		b("setImmediateAcrossTransitions")(function () {
			var b = a._state === 1 ? c.onFulfilled : c.onRejected;
			if (b === null) {
				c.continuation(function () {});
				a._state === 1 ? p(c.promise, a._value) : q(c.promise, a._value);
				return
			}
			b = k(c.continuation.bind(null, b), a._value);
			b === i ? q(c.promise, h) : p(c.promise, b)
		})
	}

	function p(a, b) {
		if (b === a) return q(a, new TypeError("A promise cannot be resolved with itself."));
		if (b && (typeof b === "object" || typeof b === "function")) {
			var c = j(b);
			if (c === i) return q(a, h);
			if (c === a.then && b instanceof m) {
				a._state = 3;
				a._value = b;
				r(a);
				return
			} else if (typeof c === "function") {
				t(c.bind(b), a);
				return
			}
		}
		a._state = 1;
		a._value = b;
		r(a)
	}

	function q(a, b) {
		a._state = 2, a._value = b, r(a)
	}

	function r(a) {
		for (var b = 0; b < a._deferreds.length; b++) o(a, a._deferreds[b]);
		a._deferreds = null
	}

	function s(a, c, d) {
		this.onFulfilled = typeof a === "function" ? a : null, this.onRejected = typeof c === "function" ? c : null, this.continuation = b("TimeSlice").getGuardedContinuation("Promise Handler"), this.promise = d
	}

	function t(a, b) {
		var c = !1;
		a = l(a, function (a) {
			if (c) return;
			c = !0;
			p(b, a)
		}, function (a) {
			if (c) return;
			c = !0;
			q(b, a)
		});
		!c && a === i && (c = !0, q(b, h))
	}
	m.prototype.done = function (a, c) {
		var d = new Error("Promise.done"),
			e = arguments.length ? this.then.apply(this, arguments) : this;
		e.then(null, function (a) {
			b("setTimeoutAcrossTransitions")(function () {
				if (a instanceof Error) throw a;
				else {
					d.message = "" + a;
					throw d
				}
			}, 0)
		})
	};
	var u = A(!0),
		v = A(!1),
		w = A(null),
		x = A(void 0),
		y = A(0),
		z = A("");

	function A(a) {
		var b = new m(m._noop);
		b._state = 1;
		b._value = a;
		return b
	}
	m.resolve = function (a) {
		if (a instanceof m) return a;
		if (a === null) return w;
		if (a === void 0) return x;
		if (a === !0) return u;
		if (a === !1) return v;
		if (a === 0) return y;
		if (a === "") return z;
		if (typeof a === "object" || typeof a === "function") try {
			var b = a.then;
			if (typeof b === "function") return new m(b.bind(a))
		} catch (a) {
			return new m(function (b, c) {
				c(a)
			})
		}
		return A(a)
	};
	m.all = function (a) {
		Array.isArray(a) || (a = [m.reject(new TypeError("Promise.all must be passed an array."))]);
		var b = Array.prototype.slice.call(a);
		return new m(function (a, c) {
			if (b.length === 0) return a([]);
			var d = b.length;

			function e(f, g) {
				if (g && (typeof g === "object" || typeof g === "function"))
					if (g instanceof m && g.then === m.prototype.then) {
						while (g._state === 3) g = g._value;
						if (g._state === 1) return e(f, g._value);
						g._state === 2 && c(g._value);
						g.then(function (a) {
							e(f, a)
						}, c);
						return
					} else {
						var h = g.then;
						if (typeof h === "function") {
							h = new m(h.bind(g));
							h.then(function (a) {
								e(f, a)
							}, c);
							return
						}
					}
				b[f] = g;
				--d === 0 && a(b)
			}
			for (var f = 0; f < b.length; f++) e(f, b[f])
		})
	};
	m.allSettled = function (a) {
		if (!Array.isArray(a)) return m.reject(new TypeError("Promise.allSettled must be passed an array."));
		var b = Array(a.length),
			c = function (c, d) {
				var e = a[c];
				d = typeof e === "object" && e !== null && typeof e.then === "function";
				b[c] = d ? new m(function (a, b) {
					e.then(function (b) {
						a({
							status: "fulfilled",
							value: b
						})
					}, function (b) {
						a({
							status: "rejected",
							reason: b
						})
					})
				}) : m.resolve({
					status: "fulfilled",
					value: e
				})
			};
		for (var d = 0, e = a.length; d < e; ++d) c(d, e);
		return m.all(b)
	};
	m.reject = function (a) {
		return new m(function (b, c) {
			c(a)
		})
	};
	m.race = function (a) {
		return new m(function (b, c) {
			a.forEach(function (a) {
				m.resolve(a).then(b, c)
			})
		})
	};
	m.prototype["catch"] = function (a) {
		return this.then(null, a)
	};
	m.prototype["finally"] = function (a) {
		return this.then(function (b) {
			return m.resolve(a()).then(function () {
				return b
			})
		}, function (b) {
			return m.resolve(a()).then(function () {
				throw b
			})
		})
	};
	e.exports = m
}), null);