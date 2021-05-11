__d("Tooltip.react", ["Arbiter", "React", "ReactDOM", "SubscriptionsHandler", "TooltipData", "createTooltipPortal", "gkx", "ifRequired", "killswitch"], (function(a, b, c, d, e, f) {
	var g = b("React");
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var c, d;
			for (var e = arguments.length, f = new Array(e), h = 0; h < e; h++) f[h] = arguments[h];
			return (c = d = a.call.apply(a, [this].concat(f)) || this, d.$1 = null, d.$2 = new(b("SubscriptionsHandler"))(), d.state = {
				visible: !1,
				wasEverVisible: !1
			}, d.tooltipEl = g.createRef(), c) || babelHelpers.assertThisInitialized(d)
		}
		c.getDerivedStateFromProps = function(a, b) {
			return !Boolean(a.tooltip) ? {
				visible: !1,
				wasEverVisible: b.wasEverVisible
			} : b
		};
		var d = c.prototype;
		d.componentDidMount = function() {
			var a = this;
			this.$2.addSubscriptions(b("Arbiter").subscribe("tooltip/requesthide", function(c, d) {
				c = d.context;
				a.state.visible && (!c || c === a.tooltipEl.current) && b("ifRequired")("Tooltip", function(c) {
					c.suspend(), b("ReactDOM").flushSync(function() {
						a.setState({
							visible: !1
						})
					})
				})
			}), b("Arbiter").subscribe("tooltip/requestshow", function(c, d) {
				c = d.context;
				!a.state.visible && c === a.tooltipEl.current && b("ifRequired")("Tooltip", function(c) {
					c.suspend(), b("ReactDOM").flushSync(function() {
						a.setState({
							visible: !0,
							wasEverVisible: !0
						})
					})
				})
			}));
			this.$3()
		};
		d.componentDidUpdate = function(a, c) {
			var d = this;
			Boolean(a.tooltip) && !Boolean(this.props.tooltip) ? this.props.onVisibilityChange && this.props.onVisibilityChange(!1) : c.visible !== this.state.visible && (this.props.onVisibilityChange && this.props.onVisibilityChange(this.state.visible), b("ifRequired")("Tooltip", function(a) {
				d.state.visible ? a.commitShow(d.tooltipEl.current) : a.commitHide(d.tooltipEl.current)
			}));
			this.$3()
		};
		d.componentWillUnmount = function() {
			this.$2.release(), b("TooltipData").remove(b("gkx")("1371738") ? this.tooltipEl.current : b("ReactDOM").findDOMNode(this))
		};
		d.render = function() {
			var a = this.props;
			a.alignH;
			a.children;
			a.delayMountUntilHover;
			a.display;
			a.position;
			a.onVisibilityChange;
			var c = a.tooltip;
			a = babelHelpers.objectWithoutPropertiesLoose(a, ["alignH", "children", "delayMountUntilHover", "display", "position", "onVisibilityChange", "tooltip"]);
			var d = this.$4();
			return g.createElement(this.props.display === "block" ? "div" : "span", babelHelpers["extends"]({}, a, {
				ref: this.tooltipEl,
				"data-hover": "tooltip",
				"data-tooltip-content": typeof c === "string" ? c : void 0
			}), d && c !== null ? b("createTooltipPortal")(c, this.$5()) : null, this.props.children)
		};
		d.$4 = function() {
			var a = this.props.delayMountUntilHover,
				b = this.state.wasEverVisible;
			return !a || b
		};
		d.$5 = function() {
			this.$1 == null && (this.$1 = document.createElement("div"));
			return this.$1
		};
		d.$3 = function() {
			if (!this.$4()) return;
			var a = b("gkx")("1371738") ? this.tooltipEl.current : b("ReactDOM").findDOMNode(this);
			if (!Boolean(this.props.tooltip)) b("TooltipData").remove(a);
			else if (b("killswitch")("TOOLTIP_SEPARATE_DATASTORE_AND_ATTRIBUTE_CONTENT") || typeof this.props.tooltip !== "string") {
				var c = this.props,
					d = c.alignH;
				c = c.position;
				b("TooltipData").set(a, this.$5(), c, d)
			} else b("TooltipData").remove(a, {
				onlyCleanupDataStore: !0
			}), b("TooltipData").refreshIfActive(this.tooltipEl.current)
		};
		return c
	}(g.Component);
	e.exports = a;
	a.defaultProps = {
		delayMountUntilHover: !b("killswitch")("TOOLTIP_DELAY_MOUNT_UNTIL_HOVER"),
		display: "inline"
	}
}), null);