__d("BaseFocusRing.react", ["FocusWithinHandler.react", "React", "gkx", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React"),
		h = {
			focused: {
				outline: "tr9jja99",
				"@media (-webkit-min-device-pixel-ratio: 0)": {
					outline: "omy9p634"
				}
			},
			newFocused: {
				outline: "bflrbx36"
			},
			unfocused: {
				outline: "lzcic4wl"
			}
		},
		i = b("gkx")("1721477");

	function a(a) {
		var c = a.children,
			d = a.suppressFocusRing,
			e = d === void 0 ? !1 : d;
		d = a.testOnly;
		var f = i ? h.newFocused : h.focused;
		return g.jsx(b("FocusWithinHandler.react"), {
			testOnly: d,
			children: function (a, b) {
				return c(!e && a && b ? f : h.unfocused)
			}
		})
	}
	a.focusRingXStyle = h.focused
}), null);