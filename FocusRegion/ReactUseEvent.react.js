__d("ReactUseEvent.react", ["React", 
	"ReactDOMComet", "gkx", "useLayoutEffect_SAFE_FOR_SSR"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a, c) {
		var d = g.useRef(null),
			e = d.current;
		b("gkx")("1703328") && (c && (c.passive = void 0));
		if (e === null) {
			var f = b("ReactDOMComet").unstable_createEventHandle(a, c),
				h = new Map();
			e = {
				setListener: function (a, b) {
					var c = h.get(a);
					c !== void 0 && c();
					if (b === null) {
						h["delete"](a);
						return
					}
					c = f(a, b);
					h.set(a, c)
				},
				clear: function () {
					var a = Array.from(h.values());
					for (var b = 0; b < a.length; b++) a[b]();
					h.clear()
				}
			};
			d.current = e
		}
		b("useLayoutEffect_SAFE_FOR_SSR")(function () {
			return function () {
				e !== null && e.clear(), d.current = null
			}
		}, [e]);
		return e
	}
}), null);