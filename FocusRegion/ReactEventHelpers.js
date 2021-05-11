__d("ReactEventHelpers", [], (function (a, b, c, d, e, f) {
	f.isRelatedTargetWithin = a;
	b = typeof window !== "undefined" && window.navigator != null ? /^Mac/.test(window.navigator.platform) : !1;
	f.isMac = b;
	c = typeof window !== "undefined" && window.PointerEvent != null;
	f.hasPointerEvents = c;

	function a(a, b) {
		return b == null ? !1 : typeof a.containsNode === "function" ? a.containsNode(b) : a.contains(b)
	}
}), null);