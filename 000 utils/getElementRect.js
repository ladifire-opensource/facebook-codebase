__d("getElementRect", ["containsNode", "normalizeBoundingClientRect"], (function (a, b, c, d, e, f) {
	e.exports = a;

	function a(a) {
		var c;
		c = a == null ? void 0 : (c = a.ownerDocument) == null ? void 0 : c.documentElement;
		return !a || !("getBoundingClientRect" in a) || !b("containsNode")(c, a) ? {
			left: 0,
			right: 0,
			top: 0,
			bottom: 0,
			width: 0,
			height: 0
		} : b("normalizeBoundingClientRect")(a, a.getBoundingClientRect())
	}
}), null);