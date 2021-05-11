__d("TetraButtonGroup.react", ["CometFocusTableContext", 
	"CometRow.react", 
	"CometRowItem.react", 
	"React", 
	"TetraButton.react", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React"),
		i = {
			hiddenButton: {
				height: "do00u71z",
				visibility: "kr9hpln1"
			},
			resetFlexBasis: {
				flexBasis: "mg4g778l"
			}
		};

	function j(a) {
		var c = h.useContext(b("CometFocusTableContext"));
		c = c.FocusCell;
		a = a.children;
		return c != null ? h.jsx(c, {
			children: a
		}) : a
	}

	function a(a) {
		var c = a.align,
			d = c === void 0 ? "justify" : c;
		c = a.direction;
		c = c === void 0 ? "forward" : c;
		var e = a.paddingHorizontal,
			f = a.paddingTop,
			k = a.primary,
			l = a.secondary,
			m = a.size,
			n = a.wrap;
		n = n === void 0 ? "none" : n;
		var o = [],
			p = [],
			q = null;
		if (k != null) {
			var r = k.ref,
				s = k.testid;
			s = babelHelpers.objectWithoutPropertiesLoose(k, ["ref", "testid"]);
			q = h.jsx(j, {
				children: h.jsx(b("TetraButton.react"), babelHelpers["extends"]({}, s, {
					ref: r,
					size: m,
					testid: void 0
				}))
			});
			o.push({
				hidden: h.jsx(b("TetraButton.react"), babelHelpers["extends"]({}, s, {
					disabled: !0,
					padding: "normal",
					size: m
				})),
				visible: q
			})
		}
		if (l != null) {
			k = l.ref;
			r = l.testid;
			s = babelHelpers.objectWithoutPropertiesLoose(l, ["ref", "testid"]);
			o.push({
				hidden: h.jsx(b("TetraButton.react"), babelHelpers["extends"]({}, s, {
					disabled: !0,
					padding: "normal",
					size: m,
					type: "secondary"
				})),
				visible: h.jsx(j, {
					children: h.jsx(b("TetraButton.react"), babelHelpers["extends"]({}, s, {
						ref: k,
						size: m,
						testid: void 0,
						type: "secondary"
					}))
				})
			})
		} else if (a.secondaryIcon != null) p.push(h.jsx(b("CometRowItem.react"), {
			children: h.jsx(j, {
				children: h.jsx(b("TetraButton.react"), babelHelpers["extends"]({}, a.secondaryIcon, {
					labelIsHidden: !0,
					size: m,
					type: "secondary"
				}))
			})
		}, "secondary-icon"));
		else if (a.secondaryIconGroup != null) {
			r = a.secondaryIconGroup;
			l = r.primaryIcon;
			s = r.secondaryIcon;
			p.push(h.jsx(b("CometRowItem.react"), {
				children: h.jsx(j, {
					children: h.jsx(b("TetraButton.react"), babelHelpers["extends"]({}, l, {
						labelIsHidden: !0,
						size: m,
						type: "secondary"
					}))
				})
			}, "secondary-icon-1"), h.jsx(b("CometRowItem.react"), {
				children: h.jsx(j, {
					children: h.jsx(b("TetraButton.react"), babelHelpers["extends"]({}, s, {
						labelIsHidden: !0,
						size: m,
						type: "secondary"
					}))
				})
			}, "secondary-icon-2"))
		}
		k = o.map(function (a, c) {
			return h.jsx(b("CometRowItem.react"), {
				expanding: d === "justify",
				xstyle: i.resetFlexBasis,
				children: o.map(function (a, d) {
					return h.jsx(h.Fragment, {
						children: c !== d ? h.jsx("div", {
							"aria-hidden": !0,
							className: (g || (g = b("stylex")))(i.hiddenButton),
							children: a.hidden
						}) : a.visible
					}, d)
				})
			}, c)
		});
		a = q != null ? h.jsx(b("CometRowItem.react"), {
			expanding: d === "justify",
			xstyle: i.resetFlexBasis,
			children: q
		}, "primary") : null;
		r = [a].concat(p);
		l = o.length === 2;
		return h.jsx(b("CometRow.react"), {
			align: d,
			direction: c,
			paddingHorizontal: e,
			paddingTop: f,
			spacing: 8,
			wrap: n,
			children: l || q == null ? k : r
		})
	}
}), null);