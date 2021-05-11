__d("FBClipboardLink.react", ["cx", "fbt", "Clipboard", "DOMContainer.react", "Event", "KeyEventController", "React", "ReactDOM", "SubscriptionsHandler", "Tooltip.react", "isKeyActivation", "joinClasses", "stylex"], (function(a, b, c, d, e, f, g, h) {
	var i, j = b("React");
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var c, d;
			for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++) f[g] = arguments[g];
			return (c = d = a.call.apply(a, [this].concat(f)) || this, d.$1 = j.createRef(), d.state = {
				copied: !1,
				supported: b("Clipboard").isSupported()
			}, d.$2 = null, d.$3 = null, d.$5 = function(a) {
				a.clipboardData && (a.clipboardData.setData("text/html", d.$8()), a.clipboardData.setData("text", d.$9()), a.preventDefault())
			}, d.$7 = function() {
				if (!d.state.supported) return "Unsupported in this browser";
				return d.state.copied ? d.props.tooltipSuccess : d.props.tooltip
			}, d.$4 = function() {
				d.$3 && (window.clearTimeout(d.$3), d.$3 = null)
			}, d.$10 = function() {
				d.$3 = window.setTimeout(d.$11, d.props.tooltipSuccessDuration)
			}, d.$6 = function(a) {
				var c = b("ReactDOM").findDOMNode(d.$1.current);
				c = b("Clipboard").copy(d.$8(), c);
				d.$4();
				d.setState({
					copied: !0,
					supported: c
				});
				d.$10();
				d.props.onComplete && d.props.onComplete(c);
				d.props.stopPropagation && a.stopPropagation();
				d.props.preventDefaultOnClick && a.preventDefault()
			}, d.$11 = function() {
				d.$4(), d.setState({
					copied: !1
				})
			}, c) || babelHelpers.assertThisInitialized(d)
		}
		var d = c.prototype;
		d.componentWillUnmount = function() {
			this.$4(), this.$2 && this.$2.release()
		};
		d.componentDidMount = function() {
			if (this.props.type === "html") {
				var a = b("ReactDOM").findDOMNode(this);
				this.$2 = this.$2 || new(b("SubscriptionsHandler"))();
				this.$2.addSubscriptions(b("Event").listen(a, "copy", this.$5))
			}
			this.props.hotkey && (this.$2 = this.$2 || new(b("SubscriptionsHandler"))(), this.$2.addSubscriptions(b("KeyEventController").registerKey(this.props.hotkey, this.$6)))
		};
		d.render = function() {
			var a = this,
				c = b("joinClasses")(this.props.className, "_xd6"),
				d = this.props.children || this.props.label;
			!d && this.props.childrenDONOTUSE && (d = j.jsx(b("DOMContainer.react"), {
				children: this.props.childrenDONOTUSE
			}));
			return j.jsx(b("Tooltip.react"), babelHelpers["extends"]({}, this.props, {
				tabIndex: "0",
				className: c,
				tooltip: this.$7(),
				"data-pitloot-persistonclick": !0,
				onClick: this.$6,
				onKeyPress: function(c) {
					return b("isKeyActivation")(c) && a.$6()
				},
				position: this.props.position,
				alignH: this.props.alignment,
				role: "button",
				children: j.jsx("div", {
					ref: this.$1,
					className: b("joinClasses")("_2lj1", (i || (i = b("stylex")))(this.props.innerXStyle)),
					children: d
				})
			}))
		};
		d.$8 = function() {
			if (this.props.getValue) return this.props.getValue();
			else return this.props.value
		};
		d.$9 = function() {
			return this.props.plainTextValue != null ? this.props.plainTextValue : this.$8()
		};
		return c
	}(j.PureComponent);
	e.exports = a;
	a.defaultProps = {
		tooltip: h._("Sao ch\u00e9p v\u0103n b\u1ea3n v\u00e0o b\u1ed9 nh\u1edb t\u1ea1m"),
		tooltipSuccess: h._("\u0110\u00e3 sao ch\u00e9p v\u0103n b\u1ea3n v\u00e0o b\u1ed9 nh\u1edb t\u1ea1m"),
		tooltipSuccessDuration: 1e3,
		type: "string"
	}
}), null);