__d("lazyLoadComponent", ["BootloaderResource", "react", "useHeroBootloadedComponent"], (function (a, b, c, d, e, f) {
	e.exports = a;
	var g, h = g || b("react"),
		i = new Map();

	function j(a, b) {
		i.set(a, b)
	}

	function k(a) {
		return i.get(a)
	}

	function a(a) {
		var c = k(a);
		if (c) return c;

		function d(c, d) {
			d === void 0 && (d = void 0);
			var e = b("BootloaderResource").read(a);
			b("useHeroBootloadedComponent")(a);
			return h.jsx(e, babelHelpers["extends"]({}, c, {
				ref: d
			}))
		}
		d.displayName = "lazyLoadComponent(" + a.getModuleId() + ")";
		c = h.forwardRef(d);
		j(a, c);
		return c
	}
}), null);