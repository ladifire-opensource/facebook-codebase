https://www.facebook.com/adsmanager/manage/campaigns?act=1600379550013988

__d("GeoGuidanceCardContent.react", ["GeoBaseSpacingLayout.react", "GeoDivider.react", "GeoPrivateGuidanceCardContext", "React", "geoMargin", "geoOffset", "stylex", "useGeoPrivateGuidanceStackedLayout"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React"),
		i = {
			root: {
				position: "s7wjoji2",
				flexGrow: "yukb02kx",
				flexShrink: "duy2mlcu"
			}
		};

	function a(a) {
		var c = a.action,
			d = a.children;
		a = a["data-testid"];
		a = b("useGeoPrivateGuidanceStackedLayout")({
			isSection: !0
		});
		var e = h.useContext(b("GeoPrivateGuidanceCardContext"));
		e = e.layout;
		return h.jsxs("div", {
			className: (g || (g = b("stylex")))(i.root, e === "horizontal" && b("geoMargin").start24),
			"data-testid": void 0,
			children: [a ? h.jsx(b("GeoDivider.react"), {
				xstyle: [b("geoMargin").bottom8, b("geoMargin").top0]
			}) : null, h.jsxs(b("GeoBaseSpacingLayout.react"), {
				align: "start",
				children: [h.jsx(b("GeoBaseSpacingLayout.react"), {
					align: "start",
					direction: "vertical",
					children: d
				}), a ? h.jsx("div", {
					className: (g || (g = b("stylex")))(b("geoOffset").cardContentEndAction),
					children: c
				}) : null]
			})]
		})
	}
}), null);