__d("CometCalloutManager.react", ["BaseView.react", 
	"CometCalloutContext", 
	"CometCalloutImpl.react", 
	"CometCalloutReducer", 
	"ExecutionEnvironment", "React"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React"),
		h = {
			anchorRootRefContext: {
				current: b("ExecutionEnvironment").canUseDOM ? document.body : null
			},
			calloutID: null,
			calloutProps: null,
			contextRef: null,
			scrollableAreaContext: []
		};

	function a(a) {
		var c = a.children;
		a = a.initialState;
		a = a === void 0 ? h : a;
		a = g.useReducer(b("CometCalloutReducer").CometCalloutReducer, a);
		var d = a[0],
			e = a[1],
			f = g.useCallback(function (a) {
				e({
					payload: a,
					type: "addCallout"
				})
			}, []),
			i = g.useCallback(function (a) {
				e({
					payload: a,
					type: "removeCallout"
				})
			}, []);
		a = g.useMemo(function () {
			return {
				addCallout: f,
				removeCallout: i
			}
		}, [f, i]);
		return g.jsxs(b("CometCalloutContext").Provider, {
			value: a,
			children: [g.jsx(b("BaseView.react"), {
				children: c
			}), g.jsx(b("CometCalloutImpl.react"), babelHelpers["extends"]({}, d))]
		})
	}
}), null);