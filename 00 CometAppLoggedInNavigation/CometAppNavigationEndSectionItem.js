__d("CometAppNavigationEndSectionItem.react", ["React", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React"),
		i = {
			displayNone: {
				display: "mkhogb32"
			},
			layoutEndButton: {
				alignItems: "bp9cbjyn",
				display: "j83agx80",
				height: "datstx6m",
				justifyContent: "taijpn5t",
				marginEnd: "oi9244e8"
			},
			widePivotLink: {
				"@media (max-width: 1260px)": {
					display: "d74ut37n"
				}
			}
		};

	function a(a) {
		var c = a.children,
			d = a.displayNone;
		d = d === void 0 ? !1 : d;
		var e = a.noWrapper;
		e = e === void 0 ? !1 : e;
		a = a.widePivotLink;
		a = a === void 0 ? !1 : a;
		return e ? c : h.jsx("div", {
			className: (g || (g = b("stylex")))([i.layoutEndButton, a && i.widePivotLink, d && i.displayNone]),
			children: c
		})
	}
}), null);