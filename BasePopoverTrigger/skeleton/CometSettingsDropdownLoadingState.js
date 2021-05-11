__d("CometSettingsDropdownLoadingState.react", [
	"CometListItemGlimmer.react", "CometMenuSeparator.react", "CometPopover.react", "React", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		a = a.iconSize;
		a = a === void 0 ? "large" : a;
		return g.jsx("div", {
			className: "knvmm38d",
			children: g.jsx(b("CometPopover.react"), {
				children: g.jsxs("div", {
					className: "o36gj0jk a8nywdso sj5x9vvc rz4wbd8a cxgpxx05",
					children: [g.jsx(b("CometListItemGlimmer.react"), {
						imageSize: a === "large" ? 60 : 36,
						imageStyle: "circle",
						numberOfItems: a === "large" ? 1 : 2
					}), g.jsx(b("CometMenuSeparator.react"), {}), g.jsx(b("CometListItemGlimmer.react"), {
						imageSize: 36,
						imageStyle: "circle",
						numberOfItems: 1
					}), g.jsx(b("CometMenuSeparator.react"), {}), g.jsx(b("CometListItemGlimmer.react"), {
						imageSize: 36,
						imageStyle: "circle",
						numberOfItems: 5
					})]
				})
			})
		})
	}
}), null);