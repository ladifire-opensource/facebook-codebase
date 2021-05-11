__d("TetraProfilePhotoLastActiveTimeBadge.react", [
	"CometRelativeTimestamp.react", 
	"MWChatActivePill.react", "React"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.border;
		c = c === void 0 ? "card-background" : c;
		var d = a.pressed;
		a = a.time;
		return g.jsx(b("MWChatActivePill.react"), {
			border: c,
			pressed: d,
			children: g.jsx(b("CometRelativeTimestamp.react"), {
				date: new Date(a * 1e3),
				format: "minimized"
			})
		})
	}
}), null);