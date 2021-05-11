__d("TetraIcon.react", ["BaseImage_DEPRECATED.react",
 "CometPressable.react", 
 "CometTintedIcon.react", 
 "IconSource", "ImageIconSource",
  "React", "TintableIconSource",
   "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h = b("React"),
		i = {
			button: {
				appearance: "dwo3fsh8",
				backgroundColor: "g5ia77u1",
				borderTopStyle: "goun2846",
				borderEndStyle: "ccm00jje",
				borderBottomStyle: "s44p3ltw",
				borderStartStyle: "mk2mc5f4",
				borderTopWidth: "rt8b4zig",
				borderEndWidth: "n8ej3o3l",
				borderBottomWidth: "agehan2d",
				borderStartWidth: "sk4xxmp2",
				display: "pq6dq46d",
				marginTop: "kvgmc6g5",
				marginEnd: "cxmmr5t8",
				marginBottom: "oygrvhab",
				marginStart: "hcukyx3x",
				paddingTop: "jb3vyjys",
				paddingEnd: "rz4wbd8a",
				paddingBottom: "qt6c0cv9",
				paddingStart: "a8nywdso",
				position: "l9j0dhe7",
				verticalAlign: "pzggbiyp",
				"::after": {
					borderTopStartRadius: "pkj7ub1o",
					borderTopEndRadius: "bqnlxs5p",
					borderBottomEndRadius: "kkg9azqs",
					borderBottomStartRadius: "c24pa1uk",
					bottom: "ln9iyx3p",
					content: "fe6kdd0r",
					end: "ar1oviwq",
					position: "l10q8mi9",
					start: "sq40qgkc",
					top: "s8quxz6p",
					zIndex: "pdjglbur"
				}
			},
			image: {
				verticalAlign: "hu5pjgll"
			},
			imageContain: {
				objectFit: "r50dw9up"
			},
			imageCover: {
				objectFit: "bixrwtb6"
			},
			pressed: {
				transform: "mtfd0dr2"
			}
		};

	function a(a, c) {
		var d = a.alt;
		d = d === void 0 ? "" : d;
		var e = a.color;
		e = e === void 0 ? "primary" : e;
		var f = a.disabled;
		f = f === void 0 ? !1 : f;
		var k = a.disableOverlay_DEPRECATED;
		k = k === void 0 ? !1 : k;
		a.draggable;
		var l = a.focusable,
			m = a.hideHoverOverlay;
		m = m === void 0 ? !1 : m;
		var n = a.icon,
			o = a.onHoverIn,
			p = a.onHoverOut,
			q = a.onPress,
			r = a.onPressIn,
			s = a.onPressOut,
			t = a.linkProps,
			u = a.size;
		u = u === void 0 ? 8 : u;
		var v = a.testid,
			w = a.testOnly_pressed;
		w = w === void 0 ? !1 : w;
		var x = babelHelpers.objectWithoutPropertiesLoose(a, ["alt", "color", "disabled", "disableOverlay_DEPRECATED", "draggable", "focusable", "hideHoverOverlay", "icon", "onHoverIn", "onHoverOut", "onPress", "onPressIn", "onPressOut", "linkProps", "size", "testid", "testOnly_pressed"]);
		v = q == null ? v : void 0;
		e = a.disabled === !0 ? "disabled" : e;
		a = n instanceof b("TintableIconSource") ? h.jsx(b("CometTintedIcon.react"), {
			alt: d,
			color: j(e),
			draggable: a.draggable,
			icon: n,
			testid: void 0
		}) : n instanceof b("ImageIconSource") ? h.jsx(b("BaseImage_DEPRECATED.react"), {
			alt: d,
			className: (g || (g = b("stylex")))(i.image, n.resizeStrategy === "contain" ? i.imageContain : null, n.resizeStrategy === "cover" ? i.imageCover : null),
			draggable: a.draggable,
			src: n.src,
			style: {
				height: n.height,
				width: n.width
			},
			testid: void 0
		}) : n instanceof b("IconSource") ? h.jsx(b("BaseImage_DEPRECATED.react"), {
			alt: d,
			className: (g || (g = b("stylex")))(i.image),
			draggable: a.draggable,
			height: n.size,
			src: n.src,
			width: n.size
		}) : h.createElement(n, {
			alt: d,
			color: e,
			"data-testid": v,
			size: u
		});
		return q != null || t != null ? h.jsx(b("CometPressable.react"), babelHelpers["extends"]({}, x, {
			disabled: f,
			focusable: l,
			hideHoverOverlay: m,
			linkProps: t,
			onHoverIn: o,
			onHoverOut: p,
			onPress: q,
			onPressIn: r,
			onPressOut: s,
			overlayDisabled: k,
			overlayOffset: 8,
			overlayRadius: "50%",
			ref: c,
			testOnly_pressed: w,
			testid: void 0,
			xstyle: function (a) {
				a = a.pressed;
				return [i.button, a && i.pressed]
			},
			children: a
		})) : a
	}

	function j(a) {
		switch (a) {
			case "positive":
				return "fds-positive";
			case "negative":
				return "fds-negative";
			case "disabled":
				return "fds-gray-30";
			case "highlight":
				return "fds-blue-60";
			case "secondary":
				return "fds-gray-70";
			case "tertiary":
				return "fds-gray-45";
			case "white":
				return "fds-white";
			case "black":
				return "fds-black";
			case "warning":
				return "fds-yellow-20";
			case "blueLink":
				return "fds-blue-link";
			default:
				return "fds-primary-icon"
		}
	}
	c = h.forwardRef(a);
	e.exports = c
}), null);