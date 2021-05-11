__d("CometFocusGroup.react", ["CometCompositeFocusIndicator.react", 
	"CometFocusGroupContext", "FocusGroup.react", "React", "focusScopeQueries"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");
	c = b("FocusGroup.react").createFocusGroup(b("focusScopeQueries").tabbableScopeQuery);
	var h = c[0],
		i = c[1];

	function a(a) {
		var c = a.children,
			d = a.hideArrowSignifiers,
			e = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "hideArrowSignifiers"]),
			f = g.useMemo(function () {
				return {
					FocusContainer: h,
					FocusItem: i
				}
			}, []),
			j = g.useMemo(function () {
				return {
					hideArrowSignifiers: d === !0,
					horizontal: a.orientation !== "vertical",
					vertical: a.orientation !== "horizontal"
				}
			}, [d, a.orientation]);
		return g.jsx(b("CometCompositeFocusIndicator.react"), {
			compositeInfo: j,
			children: function (a) {
				return g.jsx(b("CometFocusGroupContext").Provider, {
					value: f,
					children: g.jsx(h, babelHelpers["extends"]({}, e, {
						children: c(a)
					}))
				})
			}
		})
	}
}), null);