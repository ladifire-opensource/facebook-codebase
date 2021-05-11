__d("CometComposer.react", ["Promise", "CometComposerFormRefContext", 
	"CometComposerIneligibilityContext", "CometComposerLoggerDispatcherContext", 
	"CometComposerPluginsContext", "CometComposerPluginsDispatchContext", 
	"CometComposerPreSubmitHooksContext", "CometComposerValidationErrorsContext", 
	"CometComposerViewStateAlteredContext", "CometComposerViewStateContext", 
	"CometComposerViewStateDispatcherContext", "CometComposerViewStateReducersContext", 
	"CometOnBeforeUnload.react", "React", "cometComposerPluginsReducers", 
	"createEmptyCometComposerViewState", "getComposerPluginEligibility", 
	"getComposerUnsavedChangesAlert", "getComposerValidationErrors", "recoverableViolation", 
	"reduceComposerViewState", "shallowEqual"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React");

	function a(a, c) {
		var d = a.beginningViewState,
			e = a.children,
			f = a.eligibilityCheckers,
			h = a.loggers,
			i = a.onBeforeViewStateChange,
			j = a.onSubmitCommit,
			k = a.onSubmitHalt,
			l = a.onSubmitStart,
			m = a.onValidationErrors,
			n = a.registerOnBeforeUnload;
		n = n === void 0 ? !0 : n;
		var o = a.target,
			p = a.unalteredBeginningViewState,
			q = a.validators,
			r = g.useRef(new Map()),
			s = g.useRef(new Map()),
			t = g.useRef({}),
			u = g.useRef(new Set()),
			v = g.useRef(new Map()),
			w = g.useRef(null);
		a = g.useRef(null);
		d = g.useReducer(function(a, c) {
			c = b("reduceComposerViewState")(r, s, a, p, c);
			w.current = c;
			i && i(c, a);
			return c
		}, d, b("createEmptyCometComposerViewState"));
		var x = d[0];
		d = d[1];
		var y = function() {
			if (!Boolean(x == null ? void 0 : x.ignoreDirtyFlag)) 
				return b("getComposerUnsavedChangesAlert")(x == null ? void 0 : x.isDirty)
		};
		g.useImperativeHandle(c, function() {
			return {
				getViewState: function() {
					return x
				}
			}
		}, [x]);
		c = g.useReducer(b("cometComposerPluginsReducers"), {
			decorators: new Map(),
			handlers: new Map()
		});
		var z = c[0];
		c = c[1];
		var A = g.useMemo(function() {
			return q != null ? b("getComposerValidationErrors")(q, x) : {}
		}, [q, x]);
		b("shallowEqual")(t.current, A) || (t.current = A);
		A = g.useMemo(function() {
			return f != null ? b("getComposerPluginEligibility")(f, x) : new Set()
		}, [f, x]);
		u.current.size === A.size && Array.from(A).every(function(a) {
			return u.current.has(a)
		}) || (u.current = A);
		var B = g.useCallback(function(a) {
				a != null && a.type !== "press" && a.preventDefault();
				if (Object.keys(t.current).length > 0) {
					m && m(t.current);
					return
				}
				var c = w.current;
				if (c == null) return;
				l && l();
				a = v.current;
				if (a) {
					a = Array.from(a.keys()).reduce(function(a, d) {
						return a.then(function() {
							return new(b("Promise"))(function(a, b) {
								d({
									onContinue: a,
									onHalt: b
								}, c)
							})
						})
					}, b("Promise").resolve());
					a.then(function() {
						j(c)
					})["catch"](function() {
						k && k()
					})
				} else j(c)
			}, [j, k, l, m]),
			C = x.creationSessionID;
		A = g.useMemo(function() {
			return function(a) {
				var c;
				C == null ? b("recoverableViolation")("creationSessionID should be defined in composer of type " + String(o == null ? void 0 : o.type), "comet_composer") : ((c = h) != null ? c : []).map(function(b) {
					return b(a, C, {
						target: o
					})
				})
			}
		}, [C, o, h]);
		return g.jsx(b("CometComposerPluginsDispatchContext").Provider, {
			value: c,
			children: g.jsx(b("CometComposerPluginsContext").Provider, {
				value: z,
				children: g.jsx(b("CometComposerViewStateReducersContext").Provider, {
					value: r,
					children: g.jsx(b("CometComposerViewStateAlteredContext").Provider, {
						value: s,
						children: g.jsx(b("CometComposerViewStateContext").Provider, {
							value: x,
							children: g.jsx(b("CometComposerViewStateDispatcherContext").Provider, {
								value: d,
								children: g.jsx(b("CometComposerValidationErrorsContext").Provider, {
									value: t.current,
									children: g.jsx(b("CometComposerIneligibilityContext").Provider, {
										value: u.current,
										children: g.jsx(b("CometComposerLoggerDispatcherContext").Provider, {
											value: A,
											children: g.jsx(b("CometComposerPreSubmitHooksContext").Provider, {
												value: v,
												children: g.jsxs(b("CometComposerFormRefContext").Provider, {
													value: a,
													children: [g.jsxs("form", {
														"data-testid": void 0,
														method: "POST",
														onSubmit: B,
														ref: a,
														children: [g.useMemo(function() {
															return e(B)
														}, [e, B]), g.jsx("input", {
															style: {
																display: "none"
															},
															type: "submit"
														})]
													}), n ? g.jsx(b("CometOnBeforeUnload.react"), {
														onBeforeUnload: y
													}) : null]
												})
											})
										})
									})
								})
							})
						})
					})
				})
			})
		})
	}
	c = g.forwardRef(a);
	e.exports = c
}), null);