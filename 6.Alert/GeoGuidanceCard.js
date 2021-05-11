__d("GeoGuidanceCard.react", ["GeoBaseSpacingLayout.react", 
	"GeoBaseText.react", "GeoPrivateGuidanceCardContext", 
	"GeoPrivateGuidanceCardFeatureContext", "GeoPrivateMakeComponent", 
	"React", "stylex", "useGeoPrivateGuidanceCardStyle", "useShallowEqualMemo"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h = b("React"),
		i = {
			contentArea: {
				flexGrow: "yukb02kx",
				flexShrink: "duy2mlcu"
			}
		};

	function a(a) {
		var c = a.children,
			d = a.header,
			e = a.footer,
			f = a.layout;
		f = f === void 0 ? "horizontal" : f;
		var j = a.status;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "header", "footer", "layout", "status"]);
		var k = h.useContext(b("GeoPrivateGuidanceCardContext")),
			l = b("useGeoPrivateGuidanceCardStyle")({
				status: j,
				layout: f
			});
		l = l.rootStyle;
		var m = {
			isSection: []
		};
		k = b("useShallowEqualMemo")(babelHelpers["extends"]({}, k, {
			layout: f,
			status: j
		}));
		return h.jsx(b("GeoPrivateGuidanceCardContext").Provider, {
			value: k,
			children: h.jsx(b("GeoPrivateGuidanceCardFeatureContext").Provider, {
				initialValue: m,
				children: h.jsx("div", {
					className: (g || (g = b("stylex")))(l, a.xstyle),
					"data-testid": void 0,
					children: h.jsx(b("GeoBaseText.react"), {
						color: "value",
						display: "block",
						size: "value",
						textAlign: "start",
						xstyle: i.contentArea,
						children: h.jsxs(b("GeoBaseSpacingLayout.react"), {
							align: "stretch",
							context: "container",
							direction: "vertical",
							relation: "related",
							children: [d, c, e]
						})
					})
				})
			})
		})
	}
	c = b("GeoPrivateMakeComponent").makeGeoComponent("GeoGuidanceCard", a);
	e.exports = c
}), null);