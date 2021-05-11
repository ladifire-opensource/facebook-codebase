__d("CometBaseAppNavigation.react", ["CometContextualLayerAnchorRoot.react", 
	"CometProductAttributionContextProvider.react", "CometSection.react", "React", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.endSection,
			d = a.searchSection,
			e = a.startButtons;
		a = a.tabBar;
		return g.jsx(b("CometSection.react"), {
			role: "banner",
			children: g.jsxs(b("CometProductAttributionContextProvider.react"), {
				value: "topnav",
				children: [g.jsx("div", {
					className: "ehxjyohh kr520xx4 j9ispegn poy2od1o dhix69tm byvelhso buofh1pr j83agx80 rq0escxv bp9cbjyn",
					children: g.jsx(b("CometContextualLayerAnchorRoot.react"), {
						children: e
					})
				}), d, a, g.jsx("div", {
					className: "ehxjyohh kr520xx4 poy2od1o b3onmgus hv4rvrfc n7fi1qx3",
					children: g.jsx(b("CometContextualLayerAnchorRoot.react"), {
						children: c
					})
				})]
			})
		})
	}
}), null);