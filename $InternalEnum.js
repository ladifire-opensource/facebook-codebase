__d("$InternalEnum", [], (function (a, b, c, d, e, f) {
	"use strict";
	var g = Object.prototype.hasOwnProperty,
		h = typeof WeakMap === "function" ? new WeakMap() : new Map();

	function i(a) {
		var b = h.get(a);
		if (b !== void 0) return b;
		b = Object.getOwnPropertyNames(a);
		b = new Set(b.map(function (b) {
			return a[b]
		}));
		h.set(a, b);
		return b
	}
	var j = Object.preventExtensions(Object.defineProperties(Object.create(null), {
		isValid: {
			value: function (a) {
				return i(this).has(a)
			}
		},
		cast: {
			value: function (a) {
				return this.isValid(a) ? a : void 0
			}
		},
		members: {
			value: function () {
				return i(this).values()
			}
		}
	}));

	function a(a) {
		var b = Object.create(j);
		for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && Object.defineProperty(b, c, {
			value: a[c]
		});
		Object.preventExtensions(b);
		return b
	}
	var k = Object.preventExtensions(Object.defineProperties(Object.create(null), {
		isValid: {
			value: function (a) {
				return typeof a === "string" ? g.call(this, a) : !1
			}
		},
		cast: {
			value: function (a) {
				return this.isValid(a) ? a : void 0
			}
		},
		members: {
			value: function () {
				return Object.getOwnPropertyNames(this)
			}
		}
	}));
	a.Mirrored = function (a) {
		var b = Object.create(k);
		for (var c = 0, d = a.length; c < d; ++c) Object.defineProperty(b, a[c], {
			value: a[c]
		});
		Object.preventExtensions(b);
		return b
	};
	Object.freeze(a);
	Object.freeze(a.Mirrored);
	e.exports = a
}), null);