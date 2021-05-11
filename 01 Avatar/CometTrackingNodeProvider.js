__d("CometTrackingNodeProvider.react", [
	"CometTrackingNodeAbstractViewHierarchyWrapperContext", 
	"CometTrackingNodesContext", "React", "encodeTrackingNode",
	 "useCometTrackingNodes"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.children,
			d = a.index,
			e = a.trackingNode,
			f = b("useCometTrackingNodes")();
		a = g.useMemo(function () {
			if (e == null) return f;
			var a = b("encodeTrackingNode")(e, d);
			return [a].concat(f)
		}, [f, e, d]);
		var h = c,
			i = g.useContext(b("CometTrackingNodeAbstractViewHierarchyWrapperContext"));
		i != null && (h = i(a, c));
		return g.jsx(b("CometTrackingNodesContext").Provider, {
			value: a,
			children: h
		})
	}
}), null);