__d("CometAccessibilityAnnouncement.react", ["React", "requireCond", "stylex", "cr:1465733"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.assertive;
		c = c === void 0 ? !1 : c;
		a = a.children;
		a = a === void 0 ? null : a;
		b("cr:1465733")({ // emptyFunction
			assertive: c,
			message: a
		});
		return g.jsx("div", {
			"aria-atomic": !0,
			"aria-live": c ? "assertive" : "polite",
			className: "rfua0xdk pmk7jnqg pfx3uekm ay7djpcl ema1e40h q45zohi1",
			role: "alert",
			children: a
		})
	}
}), null);