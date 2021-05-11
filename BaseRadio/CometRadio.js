__d("CometRadio.react", ["BaseRadio.react", 
	"CometPressableOverlay.react", 
	"React", "TetraText.react", "stylex", "useCometPressableEventHandlers"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React"),
		i = {
			disabledBorder: {
				borderTop: "a2qmuk9k",
				borderEnd: "i7icyguk",
				borderBottom: "iywaf9al",
				borderStart: "crqf1j52"
			},
			radio: {
				display: "j83agx80"
			},
			radioBorder: {
				borderTopStartRadius: "s45kfl79",
				borderTopEndRadius: "emlxlaya",
				borderBottomEndRadius: "bkmhp75w",
				borderBottomStartRadius: "spb7xbtv",
				display: "q9uorilb",
				flexShrink: "pfnyh3mw",
				height: "jnigpg78",
				position: "l9j0dhe7",
				width: "odw8uiq3"
			},
			radioDisabled: {
				backgroundColor: "c98fg2ug"
			},
			radioSelected: {
				backgroundColor: "is6700om",
				borderTopStartRadius: "s45kfl79",
				borderTopEndRadius: "emlxlaya",
				borderBottomEndRadius: "bkmhp75w",
				borderBottomStartRadius: "spb7xbtv",
				height: "cyypbtt7",
				position: "pmk7jnqg",
				width: "fwizqjfa"
			},
			root: {
				WebkitTapHighlightColor: "oajrlxb2",
				alignItems: "bp9cbjyn",
				display: "j83agx80",
				paddingBottom: "sj5x9vvc",
				paddingTop: "cxgpxx05",
				position: "l9j0dhe7",
				touchAction: "f1sip0of"
			},
			selectedBorder: {
				borderTop: "iv6tldhd",
				borderEnd: "cg3hf2bh",
				borderBottom: "t4dffd6c",
				borderStart: "j130xd0i"
			},
			selectedSizeLarge: {
				start: "sgaxgfmg",
				top: "tmxdrx1h"
			},
			selectedSizeMedium: {
				start: "tkxwya3v",
				top: "bk00n993"
			},
			sizeLarge: {
				height: "jnigpg78",
				width: "odw8uiq3"
			},
			sizeMedium: {
				height: "gl3lb2sf",
				width: "hhz5lgdu"
			},
			text: {
				marginStart: "h676nmdw"
			},
			unselectedBorder: {
				borderTop: "pkycon04",
				borderEnd: "ikm2a2f7",
				borderBottom: "g6zz85f0",
				borderStart: "fdb45ksv"
			}
		};

	function a(a) {
		var c = a.checked,
			d = a.disabled;
		d = d === void 0 ? !1 : d;
		var e = a.id,
			f = a.label,
			j = a.labelIsHidden;
		j = j === void 0 ? !1 : j;
		var k = a.name,
			l = a.onChange,
			m = a.reduceEmphasis;
		m = m === void 0 ? !1 : m;
		var n = a.size;
		n = n === void 0 ? "large" : n;
		var o = a.testid,
			p = a.value;
		o = a.xstyle;
		a = b("useCometPressableEventHandlers")({
			disabled: d
		});
		var q = a[0];
		a[1];
		var r = a[2],
			s = r.focusVisible,
			t = r.hovered;
		r = r.pressed;
		a = a[3];
		var u = h.useCallback(function () {
			l(p)
		}, [l, p]);
		return h.jsxs("label", babelHelpers["extends"]({
			className: (g || (g = b("stylex")))(i.root, o)
		}, a, {
			ref: q,
			children: [h.jsxs(b("BaseRadio.react"), {
				"aria-label": j ? f : void 0,
				checked: c,
				disabled: d,
				id: e,
				name: k,
				onValueChange: u,
				testid: void 0,
				xstyle: i.radio,
				children: [h.jsx("div", {
					className: g(i.radioBorder, n === "medium" ? i.sizeMedium : null, n === "large" ? i.sizeLarge : null, c ? i.selectedBorder : null, c ? null : i.unselectedBorder, d ? i.disabledBorder : null),
					children: c && h.jsx("span", {
						className: (g || (g = b("stylex")))(i.radioSelected, n === "medium" ? i.selectedSizeMedium : null, n === "large" ? i.selectedSizeLarge : null, d ? i.radioDisabled : null)
					})
				}), h.jsx(b("CometPressableOverlay.react"), {
					focusVisible: s,
					hovered: t,
					offset: 8,
					pressed: r,
					radius: "50%"
				})]
			}), j ? null : h.jsx("div", {
				className: (g || (g = b("stylex")))(i.text),
				children: h.jsx(b("TetraText.react"), {
					color: d ? "disabled" : "primary",
					type: m ? "body3" : "button2",
					children: f
				})
			})]
		}))
	}
}), null);