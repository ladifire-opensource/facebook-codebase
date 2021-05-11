__d("ImmediateImplementation", ["ImmediateImplementationExperiments"], (function (a, b, c, d, e, f) {
	(function (c, d) {
		"use strict";
		var e = 1,
			g = {},
			h = {},
			i = h,
			j = !1,
			k = c.document,
			l, m, n, o = "setImmediate$" + Math.random() + "$";

		function p() {
			var a = c.event;
			return !a ? !1 : a.isTrusted && ["change", "click", "contextmenu", "dblclick", "mouseup", "pointerup", "reset", "submit", "touchend"].includes(a.type) || a.type === "message" && a.source === c && typeof a.data === "string" && a.data.indexOf(o) === 0
		}

		function q(a) {
			var b = a[0];
			a = Array.prototype.slice.call(a, 1);
			g[e] = function () {
				b.apply(void 0, a)
			};
			i = i.next = {
				handle: e++
			};
			return i.handle
		}

		function r() {
			var a, b;
			while (!j && (a = h.next)) {
				h = a;
				if (b = g[a.handle]) {
					j = !0;
					try {
						b(), j = !1
					} finally {
						s(a.handle), j && (j = !1, h.next && l(r))
					}
				}
			}
		}

		function s(a) {
			delete g[a]
		}

		function d() {
			if (c.postMessage && !c.importScripts) {
				var a = !0,
					b = function b() {
						a = !1, c.removeEventListener ? c.removeEventListener("message", b, !1) : c.detachEvent("onmessage", b)
					};
				if (c.addEventListener) c.addEventListener("message", b, !1);
				else if (c.attachEvent) c.attachEvent("onmessage", b);
				else return !1;
				c.postMessage("", "*");
				return a
			}
		}

		function t() {
			var a = function (a) {
				a.source === c && typeof a.data === "string" && a.data.indexOf(o) === 0 && r()
			};
			c.addEventListener ? c.addEventListener("message", a, !1) : c.attachEvent("onmessage", a);
			l = function () {
				var a = q(arguments);
				c.originalPostMessage ? c.originalPostMessage(o + a, "*") : c.postMessage(o + a, "*");
				return a
			};
			m = l
		}

		function u() {
			var a = new MessageChannel(),
				b = !1;
			a.port1.onmessage = function (a) {
				b = !1, r()
			};
			l = function () {
				var c = q(arguments);
				b || (a.port2.postMessage(c), b = !0);
				return c
			};
			n = l
		}

		function v() {
			var a = k.documentElement;
			l = function () {
				var b = q(arguments),
					c = k.createElement("script");
				c.onreadystatechange = function () {
					c.onreadystatechange = null, a.removeChild(c), c = null, r()
				};
				a.appendChild(c);
				return b
			}
		}

		function w() {
			l = function () {
				setTimeout(r, 0);
				return q(arguments)
			}
		}
		d() ? c.MessageChannel && b("ImmediateImplementationExperiments").prefer_message_channel ? (t(), u(), l = function () {
			if (p()) return m.apply(null, arguments);
			else return n.apply(null, arguments)
		}) : t() : c.MessageChannel ? u() : k && k.createElement && "onreadystatechange" in k.createElement("script") ? v() : w();
		f.setImmediate = l;
		f.clearImmediate = s
	})(typeof self === "undefined" ? typeof a === "undefined" ? this : a : self)
}), null);