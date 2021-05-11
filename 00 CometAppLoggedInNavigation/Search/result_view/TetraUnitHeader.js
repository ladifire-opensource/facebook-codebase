__d("TetraUnitHeader.react", ["CometBase.react", "CometColumn.react", 
	"CometColumnItem.react", "CometPressable.react", "IconSource", 
	"React", "TetraIcon.react", "TetraText.react", "TetraTextPairing.react", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React"),
		i = 8,
		j = {
			action: {
				backgroundColor: "b0kwm4yp",
				borderTop: "gcieejh5",
				borderEnd: "bn081pho",
				borderBottom: "humdl8nn",
				borderStart: "izx4hr6d",
				borderTopStartRadius: "jk6sbkaj",
				borderTopEndRadius: "kdgqqoy6",
				borderBottomEndRadius: "ihh4hy1g",
				borderBottomStartRadius: "qttc61fc",
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
				verticalAlign: "pzggbiyp"
			},
			actionButton: {
				color: "py34i1dx",
				cursor: "nhd2j8a9",
				textDecoration: "owjl8umy"
			},
			actionHidden: {
				opacity: "b5wmifdl"
			},
			hairline: {
				backgroundColor: "pwoa4pd7",
				height: "ay7djpcl",
				marginBottom: "mkjtxrlb"
			},
			root: {
				paddingBottom: "e5nlhep0"
			},
			showActionOnHover: {
				visibility: "kr9hpln1",
				"@media (pointer: coarse)": {
					visibility: "jbb2w91c"
				}
			}
		},
		k = {
			8: {
				paddingTop: "cxgpxx05"
			},
			12: {
				paddingTop: "pybr56ya"
			},
			16: {
				paddingTop: "discj3wi"
			},
			20: {
				paddingTop: "aodizinl"
			}
		};

	function a(a) {
		var c = a.action,
			d = a.actionAccessibilityLabel,
			e = a.actionDisabled;
		e = e === void 0 ? !1 : e;
		var f = a.actionHidden;
		f = f === void 0 ? !1 : f;
		var l = a.actionLinkProps,
			m = a.actionRef,
			n = a.actiontestid,
			o = a.actionWrapper,
			p = a.addOn_DEPRECATED,
			q = a.body,
			r = a.bodyColor;
		r = r === void 0 ? "secondary" : r;
		var s = a.disabled,
			t = a.hasTopDivider;
		t = t === void 0 ? !1 : t;
		var u = a.headline,
			v = a.headlineColor;
		v = v === void 0 ? "primary" : v;
		var w = a.iconColor;
		w = w === void 0 ? "primary" : w;
		var x = a.level,
			y = a.linkProps,
			z = a.meta,
			A = a.metaColor;
		A = A === void 0 ? "secondary" : A;
		var B = a.metaLocation,
			C = a.onActionHoverIn,
			D = a.onActionHoverOut,
			E = a.onActionPress,
			F = a.onActionPressIn,
			G = a.onActionPressOut,
			H = a.onPress,
			I = a.onPressIn,
			J = a.onPressOut,
			K = a.paddingHorizontal;
		K = K === void 0 ? 16 : K;
		var L = a.paddingTop;
		L = L === void 0 ? 20 : L;
		var M = a.showActionOnHover;
		M = M === void 0 ? !1 : M;
		var N = a.testOnly_actionPressed,
			O = a.testOnly_pressed;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["action", "actionAccessibilityLabel", "actionDisabled", "actionHidden", "actionLinkProps", "actionRef", "actiontestid", "actionWrapper", "addOn_DEPRECATED", "body", "bodyColor", "disabled", "hasTopDivider", "headline", "headlineColor", "iconColor", "level", "linkProps", "meta", "metaColor", "metaLocation", "onActionHoverIn", "onActionHoverOut", "onActionPress", "onActionPressIn", "onActionPressOut", "onPress", "onPressIn", "onPressOut", "paddingHorizontal", "paddingTop", "showActionOnHover", "testOnly_actionPressed", "testOnly_pressed"]);
		var P = h.useState(!1),
			Q = P[0];
		P = P[1];
		var R;
		if (c != null) {
			l = {
				"aria-label": d,
				disabled: e,
				linkProps: l,
				onHoverIn: C,
				onHoverOut: D,
				onPress: E,
				onPressIn: F,
				onPressOut: G,
				testOnly_pressed: (d = N) != null ? d : !1,
				testid: n
			};
			c instanceof b("IconSource") ? R = h.jsx(b("TetraIcon.react"), babelHelpers["extends"]({}, l, {
				color: w,
				icon: c,
				ref: m
			})) : R = h.jsx(b("CometPressable.react"), babelHelpers["extends"]({}, l, {
				className_DEPRECATED: "actionChildElement",
				onFocusVisibleChange: P,
				overlayOffset: i,
				overlayRadius: 4,
				ref: m,
				xstyle: [j.actionButton, j.action, f && !Q && j.actionHidden, M && j.showActionOnHover],
				children: h.jsx(b("TetraText.react"), {
					color: e ? "disabled" : "highlight",
					numberOfLines: 1,
					type: x === 2 ? "body2" : "body3",
					children: c
				})
			}))
		} else p != null && (R = h.jsx("div", {
			className: (g || (g = b("stylex")))(j.action),
			children: p
		}));
		if (o != null) {
			C = o.component;
			R = h.jsx(C, babelHelpers["extends"]({}, o.props, {
				children: R
			}))
		}
		E = h.jsx(b("TetraTextPairing.react"), {
			body: q,
			bodyColor: r,
			bodyLineLimit: 3,
			headline: u,
			headlineAddOn: R,
			headlineColor: v,
			headlineLineLimit: 2,
			isSemanticHeading: !0,
			level: x,
			meta: z,
			metaColor: A,
			metaLineLimit: 1,
			metaLocation: (D = B) != null ? D : "below"
		});
		G = h.jsx(b("CometColumn.react"), babelHelpers["extends"]({}, a, {
			paddingHorizontal: t ? 0 : K,
			xstyle: [j.root, k[L]],
			children: h.jsx(b("CometColumnItem.react"), {
				children: H != null ? h.jsx(b("CometPressable.react"), {
					disabled: s,
					linkProps: y,
					onPress: H,
					onPressIn: I,
					onPressOut: J,
					overlayDisabled: !0,
					ref: m,
					testOnly_pressed: (F = O) != null ? F : !1,
					children: E
				}) : E
			})
		}));
		return t ? h.jsxs(b("CometColumn.react"), {
			paddingHorizontal: K,
			children: [h.jsx(b("CometColumnItem.react"), {
				children: h.jsx(b("CometBase.react"), {
					xstyle: j.hairline
				})
			}), G]
		}) : G
	}
}), null);