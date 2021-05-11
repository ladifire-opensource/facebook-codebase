__d("CometDraggableGrid.react", ["CometDraggableList.react", 
	"CometFlexibleGrid.react", "React", "useCometDraggableItems"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React"),
		h = 500,
		i = 300;

	function a(a) {
		var c = a.columnMaxWidth;
		c = c === void 0 ? h : c;
		var d = a.columnMinWidth;
		d = d === void 0 ? i : d;
		var e = a.minItems,
			f = a.items,
			j = a.justify;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["columnMaxWidth", "columnMinWidth", "minItems", "items", "justify"]);
		a = b("useCometDraggableItems")(babelHelpers["extends"]({}, a, {
			direction: "vertical",
			items: f
		}));
		return g.jsx(b("CometFlexibleGrid.react"), {
			columnMaxWidth: c,
			columnMinWidth: d,
			justify: j,
			minItems: (c = e) != null ? c : f.length,
			children: a
		})
	}
}), null);