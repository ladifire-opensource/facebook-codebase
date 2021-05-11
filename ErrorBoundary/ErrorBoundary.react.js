__d("ErrorBoundary.react", ["ErrorNormalizeUtils", "ErrorPubSub", "ErrorSerializer", "React", "getErrorSafe", "getReactElementDisplayName", "requireCond", "cr:1645510"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h = b("React");
	a = function (a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var b, c;
			for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
			return (b = c = a.call.apply(a, [this].concat(e)) || this, c.suppressReactDefaultErrorLogging = !0, c.state = {
				error: null,
				moduleName: i(c.props.children)
			}, b) || babelHelpers.assertThisInitialized(c)
		}
		c.getDerivedStateFromError = function (a) {
			return {
				error: b("getErrorSafe")(a)
			}
		};
		var d = c.prototype;
		d.componentDidCatch = function (a, c) {
			a = c.componentStack;
			c = this.props;
			var d = c.context;
			d = d === void 0 ? {} : d;
			var e = c.description;
			e = e === void 0 ? "base" : e;
			c = c.onError;
			!d.messageFormat != null && (d.messageFormat = "caught error in module %s (%s)", d.messageParams = [this.state.moduleName, e]);
			d.type || (d.type = "fatal");
			e = this.state;
			var f = e.error;
			e = e.moduleName;
			if (f != null) {
				b("ErrorSerializer").aggregateError(f, babelHelpers["extends"]({
					componentStack: a
				}, d));
				a = b("ErrorNormalizeUtils").normalizeError(f);
				a.loggingSource = "ERROR_BOUNDARY";
				(g || (g = b("ErrorPubSub"))).reportNormalizedError(a);
				typeof c === "function" && c(f, e)
			}
		};
		d.componentDidUpdate = function (a) {
			if (this.state.error && (this.props.forceResetErrorCount != null && this.props.forceResetErrorCount != a.forceResetErrorCount)) {
				this.setState({
					error: null
				});
				return
			}
		};
		d.render = function () {
			var a = this.state,
				c = a.error;
			a = a.moduleName;
			if (c) {
				var d = this.props.fallback;
				return d != null ? d(c, a) : null
			}
			return b("cr:1645510") != null ? h.jsxs(h.Fragment, {
				children: [h.jsx(b("cr:1645510"), {}), this.props.children]
			}) : (d = this.props.children) != null ? d : null
		};
		return c
	}(h.Component);
	e.exports = a;
	a.defaultProps = {
		forceResetErrorCount: 0
	};

	function i(a) {
		a = h.Children.count(a) > 1 ? h.Children.toArray(a)[0] : a;
		return b("getReactElementDisplayName")(a)
	}
}), null);