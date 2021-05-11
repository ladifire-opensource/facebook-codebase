__d("ProgressBar.react", ["cx", "joinClasses", "react"], (function(a, b, c, d, e, f, g) {
	var h, i = h || b("react");
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.$1 = function() {
			var a = this.props,
				b = a.min,
				c = a.max;
			a = a.value;
			a = Math.min(Math.max((a - b) / (c - b) * 100, 0), 100);
			return a
		};
		d.$2 = function() {
			return this.props.label != null && this.props.size !== "small"
		};
		d.$3 = function() {
			return this.$2() && this.props.typesetting === "float"
		};
		d.$4 = function() {
			return !this.$2() ? null : this.props.label
		};
		d.$5 = function() {
			return this.$3() ? i.jsx("div", {
				className: "_6a",
				children: " "
			}) : null
		};
		d.$6 = function() {
			var a = Math.round(this.$1()),
				b = "_5e4k" + (a === 0 ? " _5e2d" : "") + (a === 100 ? " _5e4j" : ""),
				c = this.$4();
			c && (c = i.jsx("span", {
				className: "_5e2h",
				children: c
			}));
			return i.jsxs("div", {
				className: b,
				style: {
					width: a + "%"
				},
				children: [this.$5(), c]
			})
		};
		d.$7 = function() {
			var a = this.$4();
			if (!a) return null;
			a = i.jsx("span", {
				className: "_5e2h _5e2n",
				children: a
			});
			if (this.$3()) {
				var b = this.$1();
				b = {
					left: b + "%",
					width: b + "%"
				};
				b = i.jsxs("div", {
					className: "_5e2g",
					style: b,
					children: [this.$5(), a]
				});
				return b
			}
			return a
		};
		d.render = function() {
			var a = "_5e4h" + (this.$3() ? "" : " _5e2k") + (this.$3() ? " _5e2j" : "") + (this.props.size === "small" ? " _5e2l" : "") + (this.props.isRounded === !0 ? " _5e2m" : "");
			if (this.$3()) return i.jsx("div", babelHelpers["extends"]({}, this.props, {
				role: "progressbar",
				"aria-valuemin": 0,
				"aria-valuemax": 100,
				"aria-valuenow": this.$1(),
				className: b("joinClasses")(this.props.className, a),
				children: i.jsxs("div", {
					className: "_5e2k",
					children: [this.$7(), this.$6()]
				})
			}));
			else return i.jsxs("div", babelHelpers["extends"]({}, this.props, {
				role: "progressbar",
				"aria-valuemin": 0,
				"aria-valuemax": 100,
				"aria-valuenow": this.$1(),
				className: b("joinClasses")(this.props.className, a),
				children: [this.$7(), this.$6()]
			}))
		};
		return c
	}(i.Component);
	e.exports = a;
	a.defaultProps = {
		min: 0,
		max: 100,
		size: "large",
		typesetting: "inline",
		isRounded: !1
	}
}), null);