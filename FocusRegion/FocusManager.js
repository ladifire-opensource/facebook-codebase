__d("FocusManager", ["getTabbableNodes"], (function (a, b, c, d, e, f) {
	f.getAllNodesFromOneOrManyQueries = a;
	f.getFirstNodeFromOneOrManyQueries = m;
	f.focusFirst = c;
	f.isFocusingWithoutUserIntent = d;
	f.focusElement = n;
	f.focusNext = e;
	f.focusPrevious = o;
	var g = !1,
		h = !1,
		i = !1;

	function j() {
		try {
			var a = document.createElement("div");
			a.addEventListener("focus", function (a) {
				a.preventDefault(), a.stopPropagation()
			}, !0);
			a.focus(Object.defineProperty({}, "preventScroll", {
				get: function () {
					h = !0
				}
			}))
		} catch (a) {}
	}

	function k(a) {
		a = a.parentElement;
		var b = [],
			c = document.scrollingElement || document.documentElement;
		while (a && a !== c) {
			var d = a,
				e = d.offsetHeight;
			d = d.offsetWidth;
			(e < a.scrollHeight || d < a.scrollWidth) && b.push([a, a.scrollTop, a.scrollLeft]);
			a = a.parentElement
		}
		c && b.push([c, c.scrollTop, c.scrollLeft]);
		return b
	}

	function l(a) {
		for (var b = 0; b < a.length; b++) {
			var c = a[b],
				d = c[0],
				e = c[1];
			c = c[2];
			d.scrollTop = e;
			d.scrollLeft = c
		}
	}

	function a(a, b) {
		a = Array.isArray(a) ? a : [a];
		for (var c = 0; c < a.length; c++) {
			var d = b.DO_NOT_USE_queryAllNodes(a[c]);
			if (d) return d
		}
		return null
	}

	function m(a, b) {
		a = Array.isArray(a) ? a : [a];
		for (var c = 0; c < a.length; c++) {
			var d = b.DO_NOT_USE_queryFirstNode(a[c]);
			if (d) return d
		}
		return null
	}

	function c(a, b, c, d) {
		a = m(a, b);
		a != null && n(a, c, d)
	}

	function d() {
		return g
	}

	function n(a, b, c) {
		if (a !== null) {
			i || (i = !0, j());
			var d = a._tabIndexState;
			if (d && d.canTab === !1) return;
			d = d ? d.value : a.tabIndex;
			a.tabIndex = -1;
			var e = g;
			b = b || !1;
			try {
				g = c || !1;
				if (!b) p(a);
				else if (h) p(a, {
					preventScroll: !0
				});
				else {
					c = k(a);
					p(a);
					l(c)
				}
			} catch (a) {} finally {
				g = e
			}
			a.tabIndex = d
		}
	}

	function e(a, c, d) {
		a = b("getTabbableNodes")(a, c);
		c = a[0];
		var e = a[2],
			f = a[3];
		a = a[4];
		a !== null && a !== e && c && n(c[f + 1], d)
	}

	function o(a, c, d) {
		a = b("getTabbableNodes")(a, c);
		c = a[0];
		var e = a[1],
			f = a[3];
		a = a[4];
		a !== null && a !== e && c && n(c[f - 1], d)
	}
	var p = function (a, b) {
		(a.focus || HTMLElement.prototype.focus).call(a, b)
	}
}), null);