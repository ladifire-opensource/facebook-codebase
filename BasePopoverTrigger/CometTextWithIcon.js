__d("CometTextWithIcon.react", ["BaseView.react", 
	"CometNonBreakingSpace.react", "React", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React"),
		h = {
			icon: {
				alignItems: "bp9cbjyn",
				display: "pq6dq46d",
				verticalAlign: "sf5mxxl7"
			},
			iconContainer: {
				display: "nc684nl6",
				whiteSpace: "g0qnabr5"
			}
		};

	function a(a) {
		var c = a.children,
			d = a.iconAfter,
			e = a.iconBefore,
			f = a.iconOverrideVerticalStyle,
			i = a.observeDirectionality;
		i = i === void 0 ? !1 : i;
		a = a.spacing;
		a = a === void 0 ? .5 : a;
		e = g.jsxs(g.Fragment, {
			children: [e != null && g.jsxs(b("BaseView.react"), {
				xstyle: h.iconContainer,
				children: [g.jsx(b("BaseView.react"), {
					xstyle: babelHelpers["extends"]({}, h.icon, f),
					children: e
				}), g.jsx(b("CometNonBreakingSpace.react"), {
					size: a
				})]
			}), c, d != null && g.jsxs(b("BaseView.react"), {
				xstyle: h.iconContainer,
				children: [g.jsx(b("CometNonBreakingSpace.react"), {
					size: a
				}), g.jsx(b("BaseView.react"), {
					xstyle: babelHelpers["extends"]({}, h.icon, f),
					children: d
				})]
			})]
		});
		return i ? g.jsx("span", {
			dir: "auto",
			children: e
		}) : e
	}
}), null);