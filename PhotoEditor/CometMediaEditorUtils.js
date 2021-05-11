__d("CometMediaEditorUtils", ["cometMediaEditorCanEditWithAnyToolEligibilityChecker"], (function (a, b, c, d, e, f) {
	"use strict";
	f.checkForChanges = a;
	f.getToolsWithChanges = g;
	f.validateEditableMedia = h;
	f.checkChangesForTags = c;

	function a(a, b, c) {
		var d = c.index;
		a = g(a, d, b, c);
		return a.size !== 0
	}

	function g(a, b, c, d) {
		b = h(b, c);
		c = new Set();
		if (b == null) return c;
		for (var a = a.current.keys(), e = Array.isArray(a), f = 0, a = e ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
			var g, i;
			if (e) {
				if (f >= a.length) break;
				i = a[f++]
			} else {
				f = a.next();
				if (f.done) break;
				i = f.value
			}
			i = i;
			g = i == null ? void 0 : (g = i.saver) == null ? void 0 : g.checkerForPhoto;
			i = i == null ? void 0 : (i = i.saver) == null ? void 0 : i.checkerForVideo;
			if (b.fileType === "PHOTO" && g) {
				g = g(b, d);
				g != null && c.add(g)
			}
			if (b.fileType === "VIDEO" && i) {
				g = i(b);
				g != null && c.add(g)
			}
		}
		return c
	}

	function h(a, c) {
		return a < 0 || c == null || a >= c.length ? null : b("cometMediaEditorCanEditWithAnyToolEligibilityChecker").validateMediaForAnyMutations(c[a])
	}

	function c(a, b) {
		if (b.length !== a.length) return !0;
		a = a.map(function (a) {
			return JSON.stringify(a)
		});
		a = new Set(a);
		for (var c = 0; c < b.length; c++) {
			var d = b[c];
			if (!a.has(JSON.stringify(d))) return !0
		}
		return !1
	}
}), null);