__d("CometMenuBase.react", [
	"BaseScrollableArea.react", 
	"CometErrorBoundary.react", 
	"CometMenuFocusGroup", 
	"CometMenuItemBaseRoleContext", 
	"CometSeparatorMenuItem.react", 
	"React", 
	"TetraTextPairing.react", 
	"focusScopeQueries", 
	"stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React"),
		i = {
			listItem: {
				borderTopStartRadius: "jk6sbkaj",
				borderTopEndRadius: "kdgqqoy6",
				borderBottomEndRadius: "ihh4hy1g",
				borderBottomStartRadius: "qttc61fc",
				display: "j83agx80",
				flexDirection: "btwxx1t3",
				marginTop: "kvgmc6g5",
				marginEnd: "oi9244e8",
				marginBottom: "oygrvhab",
				marginStart: "h676nmdw",
				paddingTop: "pybr56ya",
				paddingEnd: "dflh9lhu",
				paddingBottom: "f10w8fjw",
				paddingStart: "scb9dxdr"
			},
			root: {
				alignItems: "gs1a9yip",
				display: "j83agx80",
				flexDirection: "cbu4d94t",
				paddingTop: "cxgpxx05",
				paddingEnd: "rz4wbd8a",
				paddingBottom: "sj5x9vvc",
				paddingStart: "a8nywdso"
			},
			sizeFull: {
				width: "k4urcfbm"
			},
			sizeNormal: {
				width: "geg40m2u"
			},
			sizeSmall: {
				width: "jbcpqwzg"
			},
			truncate: {
				maxHeight: "ktk59qbb"
			}
		},
		j = "menu",
		k = {
			listbox: "option",
			menu: "menuitem"
		};

	function a(a) {
		var c = a.children,
			d = a.footer,
			e = a.header,
			f = a.role;
		f = f === void 0 ? j : f;
		var l = a.size;
		l = l === void 0 ? "normal" : l;
		a = a.truncate;
		a = a === void 0 ? !1 : a;
		var m = 0,
			n = h.Children.toArray(c).map(function (a) {
				if (a == null) return null;
				var c = m++;
				return a.type === b("CometSeparatorMenuItem.react") ? a : h.jsx(b("CometErrorBoundary.react"), {
					children: a
				}, c)
			});
		f = k[f];
		return h.Children.count(c) > 0 ? h.jsx(b("BaseScrollableArea.react"), {
			horizontal: !1,
			vertical: !0,
			xstyle: [i.root, l === "full" && i.sizeFull, l === "normal" && i.sizeNormal, l === "small" && i.sizeSmall, a && i.truncate],
			children: h.jsxs(b("CometMenuItemBaseRoleContext").Provider, {
				value: f,
				children: [e != null ? h.jsxs(h.Fragment, {
					children: [h.jsx("div", {
						className: (g || (g = b("stylex")))(i.listItem),
						role: f,
						children: h.jsx(b("TetraTextPairing.react"), {
							headline: e.title,
							level: 3,
							meta: e.meta,
							reduceEmphasis: !0
						})
					}), h.jsx(b("CometSeparatorMenuItem.react"), {})]
				}) : null, h.jsx(b("CometMenuFocusGroup").FocusGroup, {
					orientation: "vertical",
					preventScrollOnFocus: !1,
					tabScopeQuery: b("focusScopeQueries").tabbableScopeQuery,
					wrap: !0,
					children: n
				}), d != null ? h.jsxs(h.Fragment, {
					children: [h.jsx(b("CometSeparatorMenuItem.react"), {}), h.jsx("div", {
						className: (g || (g = b("stylex")))(i.listItem),
						role: f,
						children: h.jsx(b("TetraTextPairing.react"), {
							level: 3,
							meta: d.text
						})
					})]
				}) : null]
			})
		}) : null
	}
}), null);