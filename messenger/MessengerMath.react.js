if (self.CavalryLogger) {
	CavalryLogger.start_js(["0F+ib"]);
}

__d("MessengerMath.react", ["cx", "DOM", "MessengerMathUtils", "React", "joinClasses", "katex", "throttle"], (function (a, b, c, d, e, f, g) {
	"use strict";
	var h = b("React");
	a = 20;
	c = 1e3;
	var i = 1e3,
		j = 500;
	d = function (a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var c, d;
			for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++) f[g] = arguments[g];
			return (c = d = a.call.apply(a, [this].concat(f)) || this, d.state = {
				katexFailed: !1,
				error: null
			}, d.$5 = !1, d.$7 = b("throttle")(function () {
				!d.$5 && d.$1() && d.$2()
			}, i), c) || babelHelpers.assertThisInitialized(d)
		}
		var d = c.prototype;
		d.componentDidMount = function () {
			this.$1() ? this.$2() : this.$3()
		};
		d.componentWillUnmount = function () {
			this.$4()
		};
		d.UNSAFE_componentWillReceiveProps = function (a) {
			this.state.katexFailed && (this.props.body !== a.body || this.props.showError !== a.showError) && (this.$5 = !1, this.$3(), this.setState({
				katexFailed: !1,
				error: null
			}))
		};
		d.componentDidUpdate = function () {
			this.$5 && !this.state.katexFailed && this.$2()
		};
		d.render = function () {
			var a = this,
				c;
			return h.createElement(this.props.inline ? "span" : "div", {
				ref: function (b) {
					a.$6 = b
				},
				title: this.state.error,
				className: b("joinClasses")(this.props.className, "_3_3l")
			}, (c = this.props.fallbackBody) != null ? c : this.props.body)
		};
		d.$3 = function () {
			window.addEventListener("keydown", this.$7), window.addEventListener("mousemove", this.$7), window.addEventListener("wheel", this.$7), window.addEventListener("resize", this.$7)
		};
		d.$4 = function () {
			window.removeEventListener("keydown", this.$7), window.removeEventListener("mousemove", this.$7), window.removeEventListener("wheel", this.$7), window.removeEventListener("resize", this.$7)
		};
		d.$1 = function () {
			if (!this.$6) return !1;
			var a = this.$6.getBoundingClientRect(),
				b = a.top;
			a = a.height;
			return -j < b + a && b < window.innerHeight + j
		};
		d.$2 = function () {
			try {
				if (this.props.body.length > this.props.maxLength || b("MessengerMathUtils").getMaxBraceDepth(this.props.body) > this.props.maxBraceDepth) throw new Error("Equation is too complex");
				b("katex").render(this.props.body, this.$6, {
					displayMode: !this.props.inline,
					maxSize: 5,
					throwOnError: !this.props.showError
				});
				this.$5 = !0
			} catch (c) {
				var a;
				this.setState({
					katexFailed: !0,
					error: c.message
				});
				b("DOM").setContent(this.$6, (a = this.props.fallbackBody) != null ? a : this.props.body)
			} finally {
				this.$4()
			}
		};
		return c
	}(h.PureComponent);
	e.exports = d;
	d.defaultProps = {
		inline: !1,
		maxBraceDepth: a,
		maxLength: c,
		maxSize: 5,
		showError: !1
	}
}), null);