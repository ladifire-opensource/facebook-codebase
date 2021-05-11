__d("ProfileCometProfilePictureZoomControl.react", ["ix", "fbt", "CometSlider.react", "ProfileCometProfilePictureEditStrings", "React", "TetraIcon.react", "clamp", "emptyFunction", "fbicon", "stylex"], (function (a, b, c, d, e, f, g, h) {
	"use strict";
	e.exports = a;
	var i = b("React");

	function a(a) {
		var c = a.disabled;
		c = c === void 0 ? !1 : c;
		var d = a.max,
			e = a.min,
			f = a.onChange,
			j = a.step,
			k = a.value;
		a = i.useCallback(function () {
			f(b("clamp")(k - j, e, d))
		}, [d, e, f, j, k]);
		var l = i.useCallback(function () {
			f(b("clamp")(k + j, e, d))
		}, [d, e, f, j, k]);
		return i.jsxs("div", {
			className: "ozuftl9m n851cfcs tvfksri0 n1l5q3vz taijpn5t j83agx80",
			children: [i.jsx(b("TetraIcon.react"), {
				"aria-label": h._("Thu nh\u1ecf"),
				color: k === e ? "disabled" : "primary",
				disabled: c || k === e,
				icon: b("fbicon")._(g("531491"), 20),
				onPress: a
			}), i.jsx("div", {
				className: "gwi2wbwd h676nmdw oi9244e8",
				children: i.jsx(b("CometSlider.react"), {
					label: b("ProfileCometProfilePictureEditStrings").ZOOM_SLIDER,
					max: d,
					min: e,
					onChange: c ? b("emptyFunction") : f,
					step: .01,
					value: k
				})
			}), i.jsx(b("TetraIcon.react"), {
				"aria-label": h._("Ph\u00f3ng to"),
				color: k === d ? "disabled" : "primary",
				disabled: c || k === d,
				icon: b("fbicon")._(g("483769"), 20),
				onPress: l
			})]
		})
	}
}), null);