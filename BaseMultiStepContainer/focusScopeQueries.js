__d("focusScopeQueries", [], (function (a, b, c, d, e, f) {
	f.headerAndSpinnerFocusScopeQuery = a;
	f.focusableScopeQuery = b;
	f.tabbableScopeQuery = g;

	function a(a, b) {
		return a === "h1" || a === "h2" || a === "h3" || b["aria-busy"] === !0 ? !0 : !1
	}

	function b(a, b) {
		return b.tabIndex === -1 && !(b.disabled === !0 || b.type === "hidden" || b["aria-disabled"] === !0 || b["aria-hidden"] === !0) ? !0 : g(a, b)
	}

	function g(a, b) {
		if (b.tabIndex === -1 || b.disabled === !0) return !1;
		if (b.tabIndex === 0 || b.contentEditable === !0) return !0;
		if (a === "a" || a === "area") return b.href != null && b.href !== "" && b.rel !== "ignore";
		return a === "input" ? b.type !== "hidden" && b.type !== "file" : a === "button" || a === "textarea" || a === "select" || a === "iframe" || a === "embed"
	}
	c = [a, g];
	f.headerFirstTabbableSecondScopeQuery = c
}), null);