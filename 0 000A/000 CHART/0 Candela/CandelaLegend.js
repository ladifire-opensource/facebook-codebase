__d("CandelaLegend.react", ["cx", "invariant", "CandelaUtils", "Locale", "React", "ReactComponentWithPureRenderMixin", "ReactDOM", "ShimButton.react", "createReactClass_DEPRECATED", "getObjectValues", "immutable", "isEmpty", "joinClasses", "nullthrows", "prop-types"], (function(a, b, c, d, e, f, g, h) {
	"use strict";
	var i, j = b("React"),
		k = b("immutable").Map,
		l = b("ReactDOM").findDOMNode,
		m = b("CandelaUtils").functions.throttle,
		n = {
			AUTO: "auto",
			INLINE: "inline",
			STACKED: "stacked"
		},
		o = {
			HORIZONTAL: "horizontal",
			VERTICAL: "vertical"
		},
		p = function(a, b) {
			return a.bottom === b.bottom && a.left === b.left && a.right === b.right && a.top === b.top
		};
	c = b("createReactClass_DEPRECATED")({
		displayName: "CandelaLegend",
		_needsLayout: !0,
		_rootRect: {},
		_throttledLayout: function() {},
		_truncatedItemIndices: new Set(),
		mixins: [b("ReactComponentWithPureRenderMixin")],
		propTypes: {
			children: (a = b("prop-types")).node,
			className: a.string,
			disableHorizontalLayout: a.bool,
			display: a.oneOf(b("getObjectValues")(n)),
			listLayout: a.oneOf(b("getObjectValues")(o)),
			layoutInterval: a.number.isRequired,
			minItemWidthPercentage: a.number.isRequired,
			onRectChange: a.func,
			preventDisplayChange: a.bool,
			title: a.any,
			width: a.number
		},
		getDefaultProps: function() {
			return {
				disableHorizontalLayout: !1,
				display: n.AUTO,
				layoutInterval: 200,
				minItemWidthPercentage: .67,
				listLayout: o.HORIZONTAL
			}
		},
		getInitialState: function() {
			return {
				display: this.props.display,
				itemWidths: k()
			}
		},
		UNSAFE_componentWillMount: function() {
			this._throttledLayout = m(this._layout, this.props.layoutInterval)
		},
		UNSAFE_componentWillReceiveProps: function(a) {
			this._needsLayout = !0
		},
		componentDidMount: function() {
			var a = l(this.refs.root);
			this._rootRect = a.getBoundingClientRect();
			this._needsLayout && this._throttledLayout()
		},
		componentDidUpdate: function(a, c) {
			c = this._rootRect;
			var d = l(this.refs.root);
			d = this._rootRect = d.getBoundingClientRect();
			this.props.onRectChange && !(i || (i = b("isEmpty")))(c) && !p(d, c) && this.props.onRectChange(d, c);
			this.props.children !== a.children && (this._needsLayout && this._layout());
			this._needsLayout && this._throttledLayout()
		},
		componentWillUnmount: function() {
			this._throttledLayout.reset()
		},
		_layout: function() {
			var a = this.props,
				b = a.children;
			a = a.listLayout;
			this._truncatedItemIndices.clear();
			var c = [];
			j.Children.forEach(b, function(a, b) {
				a && c.push(b)
			});
			a === o.VERTICAL ? this._layoutVertical(c) : this._layoutHorizontal(c);
			this._needsLayout = !1
		},
		_layoutVertical: function(a) {
			var c = this,
				d = this.props.display;
			d === n.INLINE || d === n.STACKED || h(0, 5338);
			var e = this._rootRect,
				f = e.width;
			e = this.state.itemWidths.withMutations(function(e) {
				a.forEach(function(a) {
					var g = l(c.refs[b("nullthrows")(d) + a.toString()]);
					g = g.getBoundingClientRect();
					g = Math.ceil(g.right - g.left);
					g > f && (g = f, c._truncatedItemIndices.add(a));
					e.set(a, g)
				})
			});
			this.setState({
				itemWidths: e
			})
		},
		_layoutHorizontal: function(a) {
			var c = this,
				d = this.props,
				e = d.minItemWidthPercentage,
				f = d.preventDisplayChange;
			d = d.disableHorizontalLayout;
			if (d) return;
			d = this._rootRect;
			var g = this.state.display,
				h;
			if (!f && this.props.display === n.AUTO)
				if (a.length === 0) g = n.INLINE;
				else {
					f = a[a.length - 1];
					f = l(this.refs[n.INLINE + String(f)]);
					h = f.getBoundingClientRect();
					var i;
					b("Locale").isRTL() ? i = h.left < d.left : i = h.right > d.right;
					g = i ? n.STACKED : n.INLINE
				} var j = this.state.itemWidths.withMutations(function(b) {
					a.forEach(function(a) {
						f = l(c.refs[g + String(a)]), h = f.getBoundingClientRect(), b.set(a, Math.ceil(h.right - h.left))
					})
				}),
				k;
			h === void 0 ? k = 0 : k = b("Locale").isRTL() ? Math.max(Math.round(d.left) - Math.round(h.left), 0) : Math.max(Math.round(h.right) - Math.round(d.right), 0);
			k && (j = this.state.itemWidths.withMutations(function(b) {
				a.reverse().forEach(function(a) {
					if (k) {
						var d = j.get(a),
							f = Math.min(d - Math.ceil(d * e), k);
						b.set(a, d - f);
						k -= f;
						c._truncatedItemIndices.add(a)
					} else b.set(a, j.get(a))
				})
			}));
			this.setState({
				display: g,
				itemWidths: j
			})
		},
		_renderItem: function(a, b, c) {
			b.className = (c ? "_28iw" : "") + " _34pe";
			return j.jsx("li", babelHelpers["extends"]({}, b, {
				children: a
			}))
		},
		_renderItems: function() {
			var a = this,
				b = this.state,
				c = b.display,
				d = b.itemWidths;
			b = j.Children.map(this.props.children, function(b, c) {
				if (!b) return b;
				var e = {};
				d.has(c) && (e = {
					width: d.get(c)
				});
				c = a._truncatedItemIndices.has(c);
				return a._renderItem(b, {
					style: e
				}, c)
			});
			c = "_34pd" + (c === n.STACKED ? " _34pc" : "");
			return j.jsx("ul", {
				className: c,
				children: b
			})
		},
		_renderItemsForLayout: function(a) {
			var b = this,
				c = j.Children.map(this.props.children, function(c, d) {
					return !c ? c : b._renderItem(c, {
						ref: a + d
					})
				}),
				d = "_34pd" + (a === n.STACKED ? " _34pc" : "");
			return j.jsx("ul", {
				className: d,
				style: {
					position: "absolute",
					visibility: "hidden"
				},
				children: c
			})
		},
		render: function() {
			var a = this.props,
				c = a.display,
				d = a.width;
			a = a.listLayout;
			var e = this.props.title;
			a = b("joinClasses")("_34pb" + (a === o.VERTICAL ? " _4d43" : ""), this.props.className);
			var f, g;
			this._needsLayout && (f = c !== n.STACKED ? this._renderItemsForLayout(n.INLINE) : null, g = c !== n.INLINE ? this._renderItemsForLayout(n.STACKED) : null);
			e && (e = j.jsx("div", {
				className: "_2g3k",
				children: e
			}));
			return j.jsxs("div", {
				className: a,
				ref: "root",
				style: {
					width: d
				},
				children: [e, f, g, this._renderItems()]
			})
		}
	});
	c.CandelaLegendItem = (f = d = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.render = function() {
			var a = this.props,
				c = a.label,
				d = a.labelStyle,
				e = a.labelWithTooltip,
				f = a.richLabel,
				g = a.value,
				h = a.valueStyle;
			a = babelHelpers.objectWithoutPropertiesLoose(a, ["label", "labelStyle", "labelWithTooltip", "richLabel", "value", "valueStyle"]);
			e ? (c = j.jsx("div", {
				className: "_34pg",
				style: d,
				children: f || c
			}), e = j.jsx("div", {
				className: "_28ix _34pg",
				style: d,
				children: e
			})) : c = j.jsx("div", {
				className: "_28ix _34pg",
				style: d,
				children: f || c
			});
			g = j.jsx("div", {
				className: "_34pf" + (g == null ? " _1ae1" : ""),
				style: h,
				children: g
			});
			return j.jsxs(b("ShimButton.react"), babelHelpers["extends"]({}, a, {
				onClick: a.onClick,
				children: [g, c, e]
			}))
		};
		return c
	}(j.PureComponent), d.propTypes = {
		className: a.string,
		label: a.any.isRequired,
		labelStyle: a.object,
		labelWithTooltip: a.any,
		onMouseEnter: a.func,
		onMouseLeave: a.func,
		onClick: a.func,
		richLabel: a.any,
		value: a.any,
		valueStyle: a.object
	}, f);
	e.exports = c
}), null);