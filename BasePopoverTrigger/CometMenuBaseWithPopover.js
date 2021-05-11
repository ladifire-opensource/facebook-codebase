__d("CometMenuBaseWithPopover.react", ["CometMenuBase.react", "CometPopover.react", "React"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = "menu";

	function a(a, c) {
		var d = a.children,
			e = a.id,
			f = a.role;
		f = f === void 0 ? h : f;
		var i = a.withArrow,
			j = a.testid;
		j = j === void 0 ? "comet-menu" : j;
		j = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "id", "role", "withArrow", "testid"]);
		return g.Children.count(d) > 0 ? g.jsx(b("CometPopover.react"), {
			id: e,
			ref: c,
			role: f,
			testid: void 0,
			withArrow: i,
			children: g.jsx(b("CometMenuBase.react"), babelHelpers["extends"]({}, j, {
				children: d,
				role: f
			}))
		}) : null
	}
	c = g.memo(g.forwardRef(a));
	e.exports = c
}), null);