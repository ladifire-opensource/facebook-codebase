__d("getTetraTextHierarchyStyle", ["memoizeWithArgs"], (function (a, b, c, d, e, f) {
	"use strict";
	a = b("memoizeWithArgs")(function (a, b) {
		switch (a) {
			case 1:
				return {
					bodyType: "body1",
					headlineType: "headlineEmphasized1",
					metaType: "meta1"
				};
			case 2:
				return {
					bodyType: "body2",
					headlineType: "headlineEmphasized2",
					metaType: "meta2"
				};
			case 3:
				return {
					bodyType: "body3",
					headlineType: b === !0 ? "headline3" : "headlineEmphasized3",
					metaType: "meta3"
				};
			default:
			case 4:
				return {
					bodyType: "body4",
					headlineType: b === !0 ? "headline4" : "headlineEmphasized4",
					metaType: "meta4"
				};
			case "entityHeader1":
				return {
					bodyType: "body2",
					headlineType: "entityHeaderHeadline1",
					metaType: "entityHeaderMeta1"
				};
			case "entityHeader2":
				return {
					bodyType: "body2",
					headlineType: "entityHeaderHeadline2",
					metaType: "entityHeaderMeta2"
				}
		}
	}, function (a, b) {
		return String(a) + (b === !0 ? "" : "e")
	});
	e.exports = a
}), null);