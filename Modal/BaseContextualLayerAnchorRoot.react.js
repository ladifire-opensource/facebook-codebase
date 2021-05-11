__d("BaseContextualLayerAnchorRoot.react", ["BaseContextualLayerAnchorRootContext", "BaseDOMContainer.react", "ExecutionEnvironment", "React", "useStable"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = c;
	var g = b("React");

	function c(c) {
		c = c.children;
		var d = b("useStable")(function () {
				return b("ExecutionEnvironment").canUseDOM ? a.document.createElement("div") : null
			}),
			e = g.useRef(d);
		return g.jsxs(g.Fragment, {
			children: [g.jsx(b("BaseContextualLayerAnchorRootContext").Provider, {
				value: e,
				children: c
			}), g.jsx(b("BaseDOMContainer.react"), {
				node: d
			})]
		})
	}
}), null);