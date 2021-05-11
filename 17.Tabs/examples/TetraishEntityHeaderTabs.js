__d("TetraishEntityHeaderTabs.react", ["CometTabs.react", "React", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React"),
		h = {
			entityHeaderTab: {
				height: "cb02d2ww",
				paddingEnd: "hv4rvrfc",
				paddingStart: "dati1w0a"
			}
		};

	function a(a) {
		var c = a.maxTabs,
			d = a.onMoreTabPress;
		a = a.tabs;
		return g.jsx(b("CometTabs.react"), {
			maxTabs: c,
			moreTabStyles: {
				overlayOffset: {
					bottom: -4,
					left: 0,
					right: 0,
					top: -4
				},
				overlayRadius: 6,
				underlineColor: "var(--accent)"
			},
			moreTabXStyle: h.entityHeaderTab,
			onMoreTabPress: d,
			tabs: a.map(function (a) {
				return babelHelpers["extends"]({}, a, {
					overlayOffset: {
						bottom: -4,
						left: 0,
						right: 0,
						top: -4
					},
					overlayRadius: 6,
					underlineColor: "var(--accent)",
					xstyle: h.entityHeaderTab
				})
			})
		})
	}
}), null);