__d("useBadgedFavIcon", ["ExecutionEnvironment", "react", "updatePageFavIconDeferred"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = g || b("react");

	function a(a, c) {
		c === void 0 && (c = 0);
		var d = h.useRef(null);
		h.useEffect(function() {
			if (!b("ExecutionEnvironment").canUseDOM) return;
			d.current == null && (d.current = document.querySelector('link[rel*=icon][href*=".ico"]'));
			d.current != null && (b("updatePageFavIconDeferred") && b("updatePageFavIconDeferred").load().then(function(b) {
				return b(d.current, !a && c > 0)
			}))
		}, [c, a])
	}
}), null);