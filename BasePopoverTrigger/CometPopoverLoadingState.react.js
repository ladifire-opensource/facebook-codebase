__d("CometPopoverLoadingState.react", ["fbt", "CometPopover.react", "CometProgressRingIndeterminate.react", "React", "stylex"], (function (a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h, i = b("React"),
		j = {
			root: {
				alignItems: "bp9cbjyn",
				display: "j83agx80",
				height: "e5d9fub0",
				justifyContent: "taijpn5t",
				minWidth: "lgmnoq0u",
				width: "k4urcfbm"
			}
		};

	function a(a) {
		var c = a.xstyle;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["xstyle"]);
		return i.jsx(b("CometPopover.react"), babelHelpers["extends"]({
			label: g._("\u0110ang t\u1ea3i...")
		}, a, {
			children: i.jsx("div", {
				className: (h || (h = b("stylex")))(j.root, c),
				children: i.jsx(b("CometProgressRingIndeterminate.react"), {
					color: "disabled",
					size: 24
				})
			})
		}))
	}
}), null);