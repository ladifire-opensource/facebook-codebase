__d("useCometCallout", ["BaseContextualLayerAnchorRootContext", 
	"BaseScrollableAreaContext", 
	"CometCalloutContext", "React", 
	"useCometUniqueID", "useMergeRefs", "useVisibilityObserver"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a, c) {
		var d = g.useContext(b("CometCalloutContext")),
			e = g.useContext(b("BaseContextualLayerAnchorRootContext")),
			f = g.useRef(null),
			h = b("useCometUniqueID")(),
			i = g.useState(!1),
			j = i[0],
			k = i[1],
			l = g.useContext(b("BaseScrollableAreaContext"));
		i = g.useCallback(function (a) {
			a = a.hiddenReason;
			if (a === "COMPONENT_UNMOUNTED") return;
			k(!0)
		}, []);
		var m = g.useCallback(function () {
			k(!1)
		}, []);
		i = b("useVisibilityObserver")({
			onHidden: i,
			onVisible: m,
			options: function () {
				var a = l.map(function (a) {
						return a.getDOMNode()
					}).filter(Boolean),
					b = a[a.length - 1];
				return {
					root: function () {
						var a;
						return (a = b) != null ? a : null
					},
					rootMargin: b != null ? 0 : void 0
				}
			}()
		});
		m = b("useMergeRefs")(f, i);
		g.useEffect(function () {
			if (d == null || f.current == null || j) return;
			if (a != null && c === !0) {
				d.addCallout({
					anchorRootRefContext: e,
					calloutID: h,
					calloutProps: a,
					contextRef: f,
					scrollableAreaContext: l
				});
				return function () {
					return d.removeCallout(h)
				}
			}
		}, [e, d, h, a, c, j, l]);
		return m
	}
}), null);