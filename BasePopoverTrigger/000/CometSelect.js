__d("CometSelect.react", ["ix", "CometMenuItemSelectable.react",
 "CometPressable.react", "CometSelectMenuTrigger.react", 
 "React", "TetraIcon.react", "TetraText.react", "fbicon", "stylex"], (function (a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h, i = b("React"),
		j = {
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
				backgroundColor: "tdjehn4e",
				borderTopStartRadius: "beltcj47",
				borderTopEndRadius: "p86d2i9g",
				borderBottomEndRadius: "aot14ch1",
				borderBottomStartRadius: "kzx2olss",
				boxSizing: "rq0escxv",
				cursor: "nhd2j8a9",
				justifyContent: "i1fnvgqd",
				paddingBottom: "osnr6wyh",
				paddingEnd: "d1544ag0",
				paddingStart: "tw6a2znq",
				paddingTop: "jktsbyx5",
				textAlign: "hzawbc8m"
			},
			buttonDisabled: {
				cursor: "rj84mg9z"
			},
			buttonExpanded: {
				minWidth: "oqhjfihn"
			},
			icon: {
				lineHeight: "soycq5t1",
				marginStart: "h676nmdw"
			},
			leftIcon: {
				lineHeight: "soycq5t1",
				marginEnd: "oi9244e8"
			}
		};

	function a(a) {
		a.aux;
		var c = a.defaultLabel,
			d = a.disabled,
			e = d === void 0 ? !1 : d;
		d = a.expanded;
		var f = d === void 0 ? !1 : d,
			k = a.icon,
			l = a.labelLineLimit;
		d = a.testid;
		var m = babelHelpers.objectWithoutPropertiesLoose(a, ["aux", "defaultLabel", "disabled", "expanded", "icon", "labelLineLimit", "testid"]),
			n = i.useMemo(function () {
				var a = m.options.find(function (a) {
					return a.value === m.selectedValue
				});
				return a != null ? a.label : (a = c) != null ? a : ""
			}, [c, m.options, m.selectedValue]);
		return i.jsx(b("CometSelectMenuTrigger.react"), babelHelpers["extends"]({}, m, {
			disabled: e,
			children: function (a, c) {
				var d = c.xstyle;
				c = babelHelpers.objectWithoutPropertiesLoose(c, ["xstyle"]);
				return i.jsxs(b("CometPressable.react"), babelHelpers["extends"]({}, c, {
					"aria-haspopup": "listbox",
					expanding: !0,
					ref: a,
					testid: void 0,
					xstyle: [j.button, f && j.buttonExpanded, e && j.buttonDisabled, d],
					children: [k && i.jsx("div", {
						className: (h || (h = b("stylex")))(j.leftIcon),
						children: i.jsx(b("TetraIcon.react"), babelHelpers["extends"]({}, k, {
							color: e ? "disabled" : "primary"
						}))
					}), i.jsx(b("TetraText.react"), {
						color: e ? "disabled" : null,
						numberOfLines: l,
						type: "bodyLink3",
						children: n
					}), i.jsx("div", {
						className: (h || (h = b("stylex")))(j.icon),
						children: i.jsx(b("TetraIcon.react"), {
							color: e ? "disabled" : "primary",
							icon: b("fbicon")._(g("481882"), 16)
						})
					})]
				}))
			}
		}))
	}
}), null);