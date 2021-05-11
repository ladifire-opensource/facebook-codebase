__d("CometLeadGenNativeFormSingleSelect.react", ["fbt", "ix", "BasePopoverTrigger.react", 
	"CometMenu.react", "CometMenuItemSelectable.react", 
	"CometPressable.react", "CometTextInputWithIcon.react", 
	"TetraIcon.react", "TetraTextPairing.react", "fbicon", "react", "stylex"], (function(a, b, c, d, e, f, g, h) {
	"use strict";
	e.exports = a;
	var i, j, k = i || b("react"),
		l = {
			button: {
				appearance: "dwo3fsh8",
				borderStyle: "ow4ym5g4",
				borderWidth: "auili1gw",
				marginBottom: "oygrvhab",
				marginEnd: "cxmmr5t8",
				marginStart: "hcukyx3x",
				marginTop: "kvgmc6g5",
				position: "l9j0dhe7",
				zIndex: "du4w35lb",
				alignItems: "bp9cbjyn",
				backgroundColor: "qsy8amke",
				borderTopStartRadius: "beltcj47",
				borderTopEndRadius: "p86d2i9g",
				borderBottomEndRadius: "aot14ch1",
				borderBottomStartRadius: "kzx2olss",
				boxSizing: "rq0escxv",
				cursor: "nhd2j8a9",
				display: "pq6dq46d",
				fontSize: "a5q79mjw",
				height: "j0lfo8lj",
				justifyContent: "i1fnvgqd",
				lineHeight: "nmlm8nb5",
				paddingBottom: "osnr6wyh",
				paddingEnd: "d1544ag0",
				paddingStart: "tw6a2znq",
				paddingTop: "jktsbyx5",
				textAlign: "hzawbc8m"
			},
			buttonExpanded: {
				minWidth: "oqhjfihn"
			},
			icon: {
				paddingStart: "scb9dxdr"
			}
		};

	function m(a) {
		var c = a.onChange,
			d = a.onQueryChange,
			e = a.selectableOptions,
			f = a.selectedValue;
		return k.jsxs(k.Fragment, {
			children: [d && k.jsx(b("CometTextInputWithIcon.react"), {
				icon: b("fbicon")._(h("491282"), 16),
				iconColor: "tertiary",
				label: g._("T\u00ecm ki\u1ebfm"),
				onChange: function(a) {
					return d(a.target.value)
				}
			}), k.jsx(b("CometMenu.react"), {
				truncate: !0,
				children: e.map(function(a) {
					return k.jsx(b("CometMenuItemSelectable.react"), {
						isSelected: a.value === f,
						onClick: function() {
							return c(a.value)
						},
						primaryText: a.primaryText,
						role: "menuitemradio",
						secondaryText: a.secondaryText
					}, a.value)
				})
			})]
		})
	}

	function n(a, c) {
		return k.jsx(b("TetraTextPairing.react"), {
			body: (a = a == null ? void 0 : a.primaryText) != null ? a : c,
			bodyColor: "tertiary",
			level: 3
		})
	}

	function a(a) {
		var c = a.defaultButtonLabel,
			d = a.disabled,
			e = d === void 0 ? !1 : d;
		d = a.isExpanded;
		var f = d === void 0 ? !0 : d;
		d = a.onChange;
		var g = a.onQueryChange,
			i = a.options,
			o = a.renderButtonLabel,
			p = o === void 0 ? n : o;
		o = a.selectableOptions;
		var q = a.selectedValue,
			r = a.testid,
			s = a.xstyle;
		r = k.useState(!1);
		var t = r[0];
		a = r[1];
		var u = i.find(function(a) {
			return a.value === q
		});
		o = (r = o) != null ? r : i;
		return k.jsx(b("BasePopoverTrigger.react"), {
			onVisibilityChange: a,
			popover: m,
			popoverProps: {
				onChange: d,
				onQueryChange: g,
				selectableOptions: o,
				selectedValue: q
			},
			children: function(a, d) {
				return k.jsxs(b("CometPressable.react"), {
					"aria-expanded": t,
					"aria-haspopup": "menu",
					disabled: e,
					display: "inline",
					onPress: d,
					overlayDisabled: !0,
					ref: a,
					testid: void 0,
					xstyle: [l.button, s, f && l.buttonExpanded],
					children: [p(u, (d = c) != null ? d : ""), k.jsx("div", {
						className: (j || (j = b("stylex")))(l.icon),
						children: k.jsx(b("TetraIcon.react"), {
							color: "primary",
							icon: b("fbicon")._(h("481882"), 16)
						})
					})]
				})
			}
		})
	}
}), null);