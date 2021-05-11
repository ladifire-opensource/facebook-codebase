__d("CometCalloutImpl.react", ["BaseContextualLayer.react", 
	"BaseContextualLayerAnchorRootContext", "CometCallout.react", 
	"CometCalloutContext", "React", "useCometDisplayTimingTrackerForInteraction"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.anchorRootRefContext,
			d = a.calloutID,
			e = a.calloutProps,
			f = a.contextRef,
			h = a.scrollableAreaContext;
		a = b("useCometDisplayTimingTrackerForInteraction")("CometCalloutManager");
		var i = g.useRef(null),
			j = g.useContext(b("CometCalloutContext"));
		g.useEffect(function () {
			var a = h.map(function (a) {
					return a.getDOMNode()
				}).filter(Boolean),
				b = function () {
					var a;
					return (a = i.current) == null ? void 0 : a.reposition()
				};
			if (a.length > 0) {
				a.forEach(function (a) {
					return a.addEventListener("scroll", b, {
						passive: !0
					})
				});
				return function () {
					a.forEach(function (a) {
						return a.removeEventListener("scroll", b, {
							passive: !0
						})
					})
				}
			}
		}, [h]);
		return j == null || e == null || f == null ? null : g.jsx(b("BaseContextualLayerAnchorRootContext").Provider, {
			value: c,
			children: g.jsx(b("BaseContextualLayer.react"), {
				align: e.align,
				autoAlign: e.autoAlign,
				contextRef: f,
				disablePositionAutoflip: e.disablePositionAutoflip,
				imperativeRef: i,
				position: e.position,
				ref: a,
				children: g.jsx(b("CometCallout.react"), {
					arrowStyle: e.arrowStyle,
					hasCloseButton: e.hasCloseButton,
					label: e.label,
					onClose: e.hasCloseButton === !0 ? function () {
						return j.removeCallout(d)
					} : void 0,
					onHide: e.onHide,
					onOutsideClick: function () {
						return j.removeCallout(d)
					},
					onPressCallout_experimentalDONOTUSE: e.onPressCallout_experimentalDONOTUSE,
					onShow: e.onShow,
					profilePhoto_experimentalDONOTUSE: e.profilePhoto_experimentalDONOTUSE,
					type: e.type,
					xstyle: e.xstyle
				})
			})
		})
	}
}), null);