__d("CometTypeaheadInputRoundedStrategy.react", ["ix", "CometRoundedTextInput.react", "React", 
	"TetraIcon.react", "cometTypeaheadBaseInputWebkitStyles", "fbicon", "stylex", 
	"useCometSearchTypeaheadBaseInputDirection", 
	"useCometSearchTypeaheadBaseInputStrategyOnChangeHandler"], (function (a, b, c, d, e, f, g) {
	"use strict";
	var h = b("React");

	function a(a, c) {
		a.description;
		a.errorMessage;
		a.id;
		var d = a.inputEndContent,
			e = a.inputStartContent,
			f = a.inputExtraProps;
		f = f === void 0 ? {} : f;
		var i = f.hideIconOnFocus;
		i = i === void 0 ? !1 : i;
		var j = f.hideIconAnimation;
		j = j === void 0 ? !1 : j;
		var k = f.icon;
		k = k === void 0 ? h.jsx(b("TetraIcon.react"), {
			color: "secondary",
			icon: b("fbicon")._(g("491282"), 16),
			size: 16
		}) : k;
		var l = f.size;
		f = f.xstyle;
		f = f === void 0 ? {} : f;
		var m = a.isDisabled,
			n = a.onChange,
			o = a.label;
		o = o === void 0 ? "" : o;
		var p = a.queryString,
			q = a.testid;
		q = babelHelpers.objectWithoutPropertiesLoose(a, ["description", "errorMessage", "id", "inputEndContent", "inputStartContent", "inputExtraProps", "isDisabled", "onChange", "label", "queryString", "testid"]);
		a = b("useCometSearchTypeaheadBaseInputDirection")({
			queryString: p
		});
		n = b("useCometSearchTypeaheadBaseInputStrategyOnChangeHandler")({
			onChange: n
		});
		return h.jsxs("div", {
			className: "k4urcfbm j83agx80 bp9cbjyn",
			children: [e, h.jsx(b("CometRoundedTextInput.react"), babelHelpers["extends"]({}, q, {
				autoComplete: "off",
				"data-testid": void 0,
				dir: a,
				disabled: m,
				hideIconAnimation: j,
				hideIconOnFocus: i,
				icon: k,
				label: o,
				onChange: n,
				ref: c,
				size: l,
				spellCheck: !1,
				suppressHydrationWarning: !0,
				type: "search",
				value: p,
				xstyle: [f, b("cometTypeaheadBaseInputWebkitStyles")["default"]]
			})), d]
		})
	}
	c = h.forwardRef(a);
	e.exports = c
}), null);