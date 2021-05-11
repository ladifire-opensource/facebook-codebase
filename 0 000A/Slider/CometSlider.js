__d("CometSlider.react", ["BaseSlider.react", "react"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = g || b("react");

	function a(a) {
		var c = a.disabled,
			d = a.getRangeLabel,
			e = a.label,
			f = a.max,
			g = a.min,
			i = a.onChange,
			j = a.onChangeSettled,
			k = a.step;
		a = a.value;
		return h.jsx(b("BaseSlider.react"), {
			ariaLabel: e,
			ariaValueText: d,
			disabled: c,
			max: f,
			min: g,
			onChange: function(a) {
				i(a[0])
			},
			onChangeSettled: function(a) {
				j && j(a[0])
			},
			step: k,
			values: [a]
		})
	}
}), null);