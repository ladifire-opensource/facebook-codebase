__d("CometTypeaheadInputFormStrategy.react", ["CometFormTextInput.react", 
	"CometSearchTypeaheadBaseFocusLockRegion.react", "React", 
	"cometTypeaheadBaseInputWebkitStyles", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React");

	function a(a, c) {
		a.description;
		a.errorMessage;
		a.id;
		a.inputEndContent;
		a.inputStartContent;
		var d = a.inputExtraProps;
		d = d === void 0 ? {} : d;
		var e = d.auxContent,
			f = d.icon,
			h = d.maxLength,
			i = d.suppressFocusRing;
		i = i === void 0 ? !1 : i;
		d = d.validationState;
		var j = a.isDisabled,
			k = a.label;
		k = k === void 0 ? "" : k;
		var l = a.onChange,
			m = a.queryString;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["description", "errorMessage", "id", "inputEndContent", "inputStartContent", "inputExtraProps", "isDisabled", "label", "onChange", "queryString"]);
		return g.jsx("div", {
			className: "k4urcfbm",
			children: g.jsx(b("CometFormTextInput.react"), babelHelpers["extends"]({}, a, {
				autoComplete: "off",
				auxContent: e ? g.jsx(b("CometSearchTypeaheadBaseFocusLockRegion.react"), {
					children: e
				}) : null,
				disabled: j,
				icon: f,
				label: k,
				maxLength: h,
				onValueChange: l,
				ref: c,
				suppressFocusRing: i,
				type: "search",
				validationState: d,
				value: m,
				xstyle: b("cometTypeaheadBaseInputWebkitStyles")["default"]
			}))
		})
	}
	c = g.forwardRef(a);
	e.exports = c
}), null);