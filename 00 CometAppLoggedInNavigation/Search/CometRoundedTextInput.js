__d("CometRoundedTextInput.react", ["BaseTextInput.react", "Locale", "React", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h = b("React"),
		i = {
			disabledInput: {
				color: "erlsw9ld",
				cursor: "rj84mg9z"
			},
			fontPlaceholder: {
				backgroundColor: "b3i9ofy5",
				color: "pipptul6",
				"::placeholder": {
					color: "b1f16np4"
				},
				":focus::placeholder": {
					color: "hdh3q7d8"
				}
			},
			fontSecondary: {
				backgroundColor: "tdjehn4e",
				color: "m9osqain"
			},
			hideIconAnimation: {
				transitionDuration: "ijkhr0an",
				transitionProperty: "pnx7fd3z",
				transitionTimingFunction: "sgqwj88q"
			},
			icon: {
				pointerEvents: "hzruof5a",
				position: "pmk7jnqg"
			},
			iconFocused: {
				opacity: "b5wmifdl",
				pointerEvents: "hzruof5a",
				transform: "jax01cp1"
			},
			iconFocusedRTL: {
				transform: "h13w3u8k"
			},
			root: {
				boxSizing: "rq0escxv",
				display: "a8c37x1j",
				minWidth: "a5nuqjux",
				position: "l9j0dhe7",
				width: "k4urcfbm"
			},
			textInput: {
				appearance: "dwo3fsh8",
				borderTop: "qu0x051f",
				borderEnd: "esr5mh6w",
				borderBottom: "e9989ue4",
				borderStart: "r7d6kgcz",
				borderTopStartRadius: "br7hx15l",
				borderTopEndRadius: "h2jyy9rg",
				borderBottomEndRadius: "n3ddgdk9",
				borderBottomStartRadius: "owxd89k7",
				boxSizing: "rq0escxv",
				color: "oo9gr5id",
				fontFamily: "ihxqhq3m",
				fontSize: "jq4qci2q",
				outline: "lzcic4wl",
				transitionProperty: "nlq1og4t",
				width: "k4urcfbm",
				"::-ms-clear": {
					display: "iu8raji3"
				}
			},
			textInputWithIcon: {
				textIndent: "o1lsuvei"
			}
		},
		j = {
			large: {
				start: "rnx8an3s",
				top: "fcg2cn6m"
			},
			medium: {
				start: "ax37mqq2",
				top: "c0p38np4"
			}
		},
		k = {
			center: {
				textAlign: "oqcyycmt"
			},
			end: {
				textAlign: "ftzlm3b6"
			},
			inherit: {
				textAlign: "i1ao9s8h"
			},
			start: {
				textAlign: "hzawbc8m"
			}
		},
		l = {
			large: {
				height: "qypqp5cg",
				paddingTop: "l60d2q6s",
				paddingEnd: "hv4rvrfc",
				paddingBottom: "hwnh5xvq",
				paddingStart: "dati1w0a"
			},
			medium: {
				height: "tv7at329",
				paddingTop: "l60d2q6s",
				paddingEnd: "d1544ag0",
				paddingBottom: "hwnh5xvq",
				paddingStart: "tw6a2znq"
			}
		},
		m = b("Locale").isRTL();

	function a(a, c) {
		var d = a.disabled;
		d = d === void 0 ? !1 : d;
		var e = a.hideIconAnimation;
		e = e === void 0 ? !1 : e;
		var f = a.hideIconOnFocus;
		f = f === void 0 ? !1 : f;
		var n = a.icon,
			o = a.label,
			p = a.onBlur,
			q = a.onFocus,
			r = a.onMouseUp,
			s = a.placeholderFontUse;
		s = s === void 0 ? "placeholder" : s;
		var t = a.size;
		t = t === void 0 ? "medium" : t;
		var u = a.textAlign;
		u = u === void 0 ? "start" : u;
		var v = a.xstyle;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["disabled", "hideIconAnimation", "hideIconOnFocus", "icon", "label", "onBlur", "onFocus", "onMouseUp", "placeholderFontUse", "size", "textAlign", "xstyle"]);
		var w = h.useState(!1),
			x = w[0],
			y = w[1];
		w = function (a) {
			y(!0), q && q(a)
		};
		var z = function (a) {
				y(!1), p && p(a)
			},
			A = function (a) {
				r && r(a)
			};
		return h.jsxs("label", {
			className: (g || (g = b("stylex")))(i.root),
			children: [n != null ? h.jsx("div", {
				className: (g || (g = b("stylex")))(!e && i.hideIconAnimation, i.icon, j[t], f && x && i.iconFocused, f && x && m && i.iconFocusedRTL),
				children: n
			}) : null, h.jsx(b("BaseTextInput.react"), babelHelpers["extends"]({}, a, {
				"aria-label": o,
				disabled: d,
				onBlur: z,
				onFocus: w,
				onMouseUp: A,
				ref: c,
				xstyle: [k[u], i.hideIconAnimation, s === "placeholder" && i.fontPlaceholder, s === "secondary" && i.fontSecondary, i.textInput, l[t], d && i.disabledInput, n != null && (!f || !x) && i.textInputWithIcon, v]
			}))]
		})
	}
	c = h.forwardRef(a);
	e.exports = c
}), null);