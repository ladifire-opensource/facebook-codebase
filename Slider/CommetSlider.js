__d("CometSlider.react", ["BaseSlider.react", "React"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.disabled,
			d = a.getRangeLabel,
			e = a.label,
			f = a.max,
			h = a.min,
			i = a.onChange,
			j = a.onChangeSettled,
			k = a.step;
		a = a.value;
		return g.jsx(b("BaseSlider.react"), {
			ariaLabel: e,
			ariaValueText: d,
			disabled: c,
			max: f,
			min: h,
			onChange: function (a) {
				i(a[0])
			},
			onChangeSettled: function (a) {
				j && j(a[0])
			},
			step: k,
			values: [a]
		})
	}
}), null);