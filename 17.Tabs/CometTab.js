__d("CometTab.react", ["CometFocusGroupContext", 
	"CometNonBreakingSpace.react", "CometPressable.react",
	 "CometTextWithIcon.react", "JSScheduler", "React", "TetraIcon.react", 
	 "TetraText.react", "stylex", "useIntersectionObserver", "useMergeRefs"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h = b("React"),
		i = {
			icon: {
				lineHeight: "soycq5t1"
			},
			iconLeft: {
				marginEnd: "cgat1ltu"
			},
			iconRight: {
				marginStart: "kkf49tns"
			},
			pressable: {
				appearance: "dwo3fsh8",
				borderStyle: "ow4ym5g4",
				borderWidth: "auili1gw",
				marginBottom: "oygrvhab",
				marginEnd: "cxmmr5t8",
				marginStart: "hcukyx3x",
				marginTop: "kvgmc6g5",
				paddingBottom: "qt6c0cv9",
				paddingEnd: "rz4wbd8a",
				paddingStart: "a8nywdso",
				paddingTop: "jb3vyjys",
				textAlign: "i1ao9s8h",
				backgroundColor: "g5ia77u1",
				backgroundImage: "mf7ej076",
				boxSizing: "rq0escxv",
				color: "gmql0nx0",
				cursor: "nhd2j8a9",
				position: "l9j0dhe7",
				textDecoration: "esuyzwwr",
				display: "j83agx80",
				zIndex: "tkr6xdv7"
			},
			selected: {
				borderTopEndRadius: "akjuzmll",
				borderTopStartRadius: "bub6lnnc",
				bottom: "i09qtzwb",
				end: "n7fi1qx3",
				height: "pmqtw6m8",
				position: "pmk7jnqg",
				start: "j9ispegn"
			},
			tab: {
				alignItems: "bp9cbjyn",
				boxSizing: "rq0escxv",
				display: "j83agx80",
				flexShrink: "pfnyh3mw",
				minHeight: "frgo5egb",
				position: "l9j0dhe7"
			}
		};

	function a(a, c) {
		var d = a.badge,
			e = a.containerRef,
			f = a.highlightColor,
			j = a.icon,
			k = a.iconColor;
		k = k === void 0 ? "secondary" : k;
		var l = a.iconLocation;
		l = l === void 0 ? "right" : l;
		var m = a.label,
			n = a.labelIsHidden;
		n = n === void 0 ? !1 : n;
		var o = a.onHidden,
			p = a.pressableXStyle,
			q = a.reduceEmphasis;
		q = q === void 0 ? !1 : q;
		var r = a.selected;
		r = r === void 0 ? !1 : r;
		var s = a.tabRef,
			t = a.underlineColor,
			u = a.xstyle;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["badge", "containerRef", "highlightColor", "icon", "iconColor", "iconLocation", "label", "labelIsHidden", "onHidden", "pressableXStyle", "reduceEmphasis", "selected", "tabRef", "underlineColor", "xstyle"]);
		var v = h.useState(!0),
			w = v[0],
			x = v[1],
			y = h.useRef(o);
		y.current = o;
		v = h.useContext(b("CometFocusGroupContext"));
		o = v.FocusItem;
		v = h.useCallback(function (a) {
			var c = a.intersectionRatio;
			b("JSScheduler").runWithPriority(b("JSScheduler").priorities.unstable_UserBlocking, function () {
				var a = c < .5;
				x(a);
				y.current && y.current(a)
			})
		}, []);
		v = b("useIntersectionObserver")(v, {
			root: e ? function () {
				return e.current
			} : null,
			threshold: .5
		});
		d = !n && d != null ? typeof d === "number" ? h.jsxs(h.Fragment, {
			children: [m, h.jsx(b("CometNonBreakingSpace.react"), {
				size: .5
			}), h.jsx(b("TetraText.react"), {
				color: r ? "highlight" : "secondary",
				type: "body4",
				children: d
			})]
		}) : h.jsx(b("CometTextWithIcon.react"), {
			iconAfter: d,
			children: m
		}) : n ? null : m;
		r && f != null && (d = h.jsx("span", {
			style: {
				color: f
			},
			children: d
		}));
		q ? d = h.jsx(b("TetraText.react"), {
			color: r ? "highlight" : "secondary",
			type: "body3",
			children: d
		}) : d = h.jsx(b("TetraText.react"), {
			color: r ? "highlight" : "secondary",
			type: "bodyLink3",
			children: d
		});
		f = j != null && l === "left" ? h.jsx("div", {
			className: (g || (g = b("stylex")))(i.icon, i.iconLeft),
			children: h.jsx(b("TetraIcon.react"), {
				color: r ? "highlight" : k,
				icon: j
			})
		}) : null;
		q = j != null && l === "right" ? h.jsx("div", {
			className: (g || (g = b("stylex")))(i.icon, i.iconRight),
			children: h.jsx(b("TetraIcon.react"), {
				color: r ? "highlight" : k,
				icon: j
			})
		}) : null;
		l = b("useMergeRefs")(v, c, s);
		k = h.jsxs("div", {
			className: (g || (g = b("stylex")))(i.tab, u),
			ref: l,
			children: [f, d, q, h.jsx("div", {
				className: g(r && i.selected),
				style: {
					backgroundColor: r ? t : void 0
				}
			})]
		});
		if (a.onPress != null || a.linkProps != null) {
			j = h.jsx(b("CometPressable.react"), babelHelpers["extends"]({}, a, {
				"aria-hidden": w,
				"aria-selected": r,
				disabled: w,
				display: "inline",
				focusable: !w,
				label: n ? m : void 0,
				overlayDisabled: r,
				ref: l,
				role: "tab",
				xstyle: [i.pressable, p],
				children: k
			}));
			return o && !w ? h.jsx(o, {
				children: j
			}) : j
		}
		return k
	}
	c = h.forwardRef(a);
	e.exports = c
}), null);