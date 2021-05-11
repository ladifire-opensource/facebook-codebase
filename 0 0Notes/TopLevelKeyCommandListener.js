__d("TopLevelKeyCommandListener.react", ["BaseKeyCommandListener.react", "CometGlobalKeyCommandWidget", "React"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		return g.jsx(b("CometGlobalKeyCommandWidget").Wrapper, {
			debugName: "global",
			children: g.jsx(b("BaseKeyCommandListener.react"), {
				observersEnabled: !0,
				children: a.children
			})
		})
	}
}), null);