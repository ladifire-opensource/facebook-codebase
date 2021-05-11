__d("setElementCanTab", [], (function (a, b, c, d, e, f) {
	e.exports = a;
	b = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "tabIndex");
	c = Object.getOwnPropertyDescriptor(SVGElement.prototype, "tabIndex");
	d = function (a) {
		return a
	};
	var g = b ? b.set : d,
		h = c ? c.set : d;

	function i(a) {
		return a instanceof SVGElement ? h : g
	}

	function a(a, b) {
		var c = a._tabIndexState,
			d = i(a);
		if (!c) {
			var e = {
				value: a.tabIndex,
				canTab: b
			};
			a._tabIndexState = e;
			b || (a.tabIndex = -1);
			Object.defineProperty(a, "tabIndex", {
				enumerable: !1,
				configurable: !0,
				get: function () {
					return e.canTab ? e.value : -1
				},
				set: function (a) {
					e.canTab && typeof d === "function" && d.call(this, a), e.value = a
				}
			})
		} else c.canTab !== b && typeof d === "function" && (d.call(a, b ? c.value : -1), c.canTab = b)
	}
}), null);