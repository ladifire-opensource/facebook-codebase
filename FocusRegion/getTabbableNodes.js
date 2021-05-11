__d("getTabbableNodes", [], (function (a, b, c, d, e, f) {
	e.exports = a;

	function a(a, b) {
		var c = document.activeElement,
			d = function (b, d, e) {
				return e === c ? !0 : a(b, d, e) && e.offsetWidth > 0 && e.offsetHeight > 0 && e.tabIndex !== -1 && window.getComputedStyle(e).visibility !== "hidden"
			};
		b = c ? b.DO_NOT_USE_queryAllNodes(d) : null;
		if (b === null) return [null, null, null, 0, null];
		d = b[0];
		var e = b[b.length - 1],
			f = b.indexOf(c),
			g = null;
		f !== -1 && (g = b[f]);
		return [b, d, e, f, g]
	}
}), null);