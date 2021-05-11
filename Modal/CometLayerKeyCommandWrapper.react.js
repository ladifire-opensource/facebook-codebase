__d("CometLayerKeyCommandWrapper.react", [
	"CometLayerKeyCommandWidget", 
	"React", "SetActiveLayerIfAttached.react"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.children;
		a = a.debugName;
		return g.jsxs(b("CometLayerKeyCommandWidget").Wrapper, {
			debugName: a,
			children: [g.jsx(b("SetActiveLayerIfAttached.react"), {
				debugName: a
			}), c]
		})
	}
}), null);