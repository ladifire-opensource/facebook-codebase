__d("CometTopNav.react", ["fbt", "CometBackupPlaceholder.react", 
	"CometSection.react", "React", "stylex"], (function (a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h = b("React");

	function a(a) {
		a = a.children;
		return h.jsx(b("CometBackupPlaceholder.react"), {
			fallback: null,
			children: h.jsx(b("CometSection.react"), {
				className: "taijpn5t byvelhso j83agx80",
				name: g._("Facebook"),
				role: "navigation",
				testid: void 0,
				children: h.jsx("ul", {
					className: "thodolrn ojvp67qx taijpn5t buofh1pr j83agx80 aovydwv3 bqdfd6uv",
					children: a
				})
			})
		})
	}
}), null);