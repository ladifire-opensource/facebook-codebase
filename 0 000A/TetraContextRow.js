__d("TetraContextRow.react", ["CometPressable.react", "CometRow.react", "CometRowItem.react", "TetraFacepile.react", "TetraIcon.react", "TetraOverlappingFacepile.react", "TetraTextPairing.react", "react", "stylex"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h, i = g || b("react"),
		j = {
			addOn: {
				marginStart: "dhix69tm",
				paddingEnd: "hv4rvrfc",
				paddingStart: "dati1w0a"
			},
			content: {
				display: "j83agx80",
				flexDirection: "cbu4d94t",
				paddingBottom: "sj5x9vvc",
				paddingTop: "cxgpxx05"
			},
			overlayPressed: {
				backgroundColor: "sx5rzos5"
			},
			root: {
				appearance: "dwo3fsh8",
				backgroundColor: "g5ia77u1",
				borderTopWidth: "rt8b4zig",
				borderEndWidth: "n8ej3o3l",
				borderBottomWidth: "agehan2d",
				borderStartWidth: "sk4xxmp2",
				boxSizing: "rq0escxv",
				display: "q9uorilb",
				marginTop: "kvgmc6g5",
				marginEnd: "cxmmr5t8",
				marginBottom: "oygrvhab",
				marginStart: "hcukyx3x",
				paddingTop: "jb3vyjys",
				paddingEnd: "rz4wbd8a",
				paddingBottom: "qt6c0cv9",
				paddingStart: "a8nywdso",
				position: "l9j0dhe7",
				textAlign: "i1ao9s8h",
				width: "k4urcfbm"
			}
		};

	function a(a) {
		var c = a.addOn,
			d = a.bodyColor;
		d = d === void 0 ? "primary" : d;
		var e = a.bodyLineLimit,
			f = a.children,
			g = a.disableOverlay;
		g = g === void 0 ? !1 : g;
		var k = a.icon,
			l = a.iconColor,
			m = a.level;
		m = m === void 0 ? 3 : m;
		var n = a.linkProps,
			o = a.meta,
			p = a.onPress,
			q = a.overlayRadius,
			r = a.paddingHorizontal;
		r = r === void 0 ? 16 : r;
		var s = a.pressableRef,
			t = a.testid;
		t = a.testOnly_pressed;
		t = t === void 0 ? !1 : t;
		a = a.verticalAlignment;
		a = a === void 0 ? "start" : a;
		var u;
		if (c != null) {
			if (c.type === "facepile") {
				c.type;
				var v = babelHelpers.objectWithoutPropertiesLoose(c, ["type"]);
				v = i.jsx(b("TetraFacepile.react"), babelHelpers["extends"]({}, v))
			} else {
				c.type;
				c = babelHelpers.objectWithoutPropertiesLoose(c, ["type"]);
				v = i.jsx(b("TetraOverlappingFacepile.react"), babelHelpers["extends"]({}, c))
			}
			u = i.jsx("div", {
				className: (h || (h = b("stylex")))(j.addOn),
				children: v
			})
		}
		v = i.jsxs("div", {
			className: (h || (h = b("stylex")))(j.content),
			children: [i.jsxs(b("CometRow.react"), {
				align: "start",
				paddingHorizontal: r,
				paddingTop: 0,
				verticalAlign: a,
				children: [i.jsx(b("CometRowItem.react"), {
					children: i.jsx(b("TetraIcon.react"), {
						color: (c = l) != null ? c : "tertiary",
						icon: k,
						size: 20
					})
				}), i.jsx(b("CometRowItem.react"), {
					expanding: !0,
					verticalAlign: "center",
					children: i.jsx(b("TetraTextPairing.react"), {
						body: f,
						bodyColor: d,
						bodyLineLimit: e,
						level: m,
						meta: o,
						metaColor: "secondary"
					})
				})]
			}), u]
		});
		return p != null || n != null ? i.jsx(b("CometPressable.react"), {
			display: "inline",
			linkProps: n,
			onPress: p,
			overlayDisabled: g,
			overlayPressedStyle: j.overlayPressed,
			overlayRadius: q,
			ref: s,
			testOnly_pressed: t,
			testid: void 0,
			xstyle: j.root,
			children: v
		}) : i.jsx("div", {
			className: (h || (h = b("stylex")))(j.root),
			"data-testid": void 0,
			children: v
		})
	}
}), null);