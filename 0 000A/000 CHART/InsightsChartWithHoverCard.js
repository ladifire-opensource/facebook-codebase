__d("InsightsChartWithHoverCard.react", ["CandelaConstants", "InsightsFormatterFactories", 
	"immutable", "Locale", "React", "prop-types", "ReactDOM", "CandelaTheme", "debounce", 
	"isEmpty", "mapObject", "shallowEqual"], (function(a, b, c, d, e, f) {
	"use strict";
	var g, h, i = b("React"),
		j = b("CandelaConstants").Alignment,
		k = b("CandelaConstants").ShapeType,
		l = b("immutable").OrderedSet,
		m = b("immutable").Set;

	function a(a, b) {
		a = a[b];
		if (a) {
			if (!m.isSet(a)) return new Error("targetShapeTypes must be Immutable.Set");
			var c = (b = {}, b[k.BAR_GROUP] = null, b[k.BAR] = null, b[k.GUIDE] = null, b[k.BAR_AREA_LABEL] = null, b);
			b = a.find(function(a) {
				return !Object.prototype.hasOwnProperty.call(c, a)
			});
			if (b) return new Error("Not supported shapeType: " + b);
			if (a.includes(k.BAR) && a.includes(k.BAR_GROUP)) return new Error("targetShapeTypes cannot include both BAR and BAR_GROUP.")
		}
		return null
	}
	c = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var b, c;
			for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
			return (b = c = a.call.apply(a, [this].concat(e)) || this, c.state = {
				data: {},
				items: typeof c.props.items === "function" ? c.props.items(null) : c.props.items,
				shown: !1,
				theme: c.props.theme,
				title: c.props.title
			}, c.$14 = function(a) {
				var b = c.props.targetShapeTypes;
				b && b.includes(a.target.shapeType) && c.$12(a);
				b = c.props.onMouseMove;
				b && b(a);
				b = c.props.chart.props.onMouseMove;
				b && b(a)
			}, c.$15 = function(a) {
				var b = c.props.targetShapeTypes;
				b && b.includes(a.target.shapeType) && c.$12(a);
				b = c.props.onMouseEnter;
				b && b(a);
				b = c.props.chart.props.onMouseEnter;
				b && b(a)
			}, c.$16 = function() {
				c.setState({
					shown: !1
				})
			}, c.$17 = function(a) {
				var b = c.props.targetShapeTypes;
				(a.target.shapeType === k.PLOT_AREA || b && b.includes(a.target.shapeType)) && c.$13();
				b = c.props.onMouseLeave;
				b && b(a);
				b = c.props.chart.props.onMouseLeave;
				b && b(a)
			}, c.$18 = function() {
				c.$2()
			}, c.$19 = function() {
				c.$13()
			}, b) || babelHelpers.assertThisInitialized(c)
		}
		var d = c.prototype;
		d.componentWillUnmount = function() {
			this.$2()
		};
		d.$3 = function(a, b) {
			var c = this.props.formatterFactory;
			return a.map(function(a) {
				if (a.key in b) {
					var d = b[a.key],
						e = d.scale;
					d = d.value;
					if (d != null) {
						e = c && c(e, a.key, b);
						d = e ? e(d) : d
					}
					a = babelHelpers["extends"]({}, a, {
						value: d
					})
				}
				return a
			})
		};
		d.$4 = function(a, b) {
			a = this.props;
			var c = a.formatterFactory,
				d = a.titleElementGetter;
			a = a.titleKey;
			if (d) return d(b);
			d = this.props.title;
			if (!a || !(a in b)) return d;
			b = b[a];
			var e = b.scale;
			b = b.value;
			if (b != null) {
				c = c && c(e, a);
				d = c ? c(b) : d
			}
			return d
		};
		d.$5 = function(a, b) {
			var c = a.target.coords;
			if (!m.isSet(c) || c.isEmpty()) return {
				closestSeriesName: null,
				posX: 0,
				posY: 0
			};
			c = a.target.coords.filter(function(a) {
				return b.contains(a.series)
			}).minBy(function(b) {
				return Math.abs(a.y - b.y)
			});
			return !c ? {
				closestSeriesName: null,
				posX: 0,
				posY: 0
			} : {
				anchorRect: {
					height: 0,
					width: 0,
					x: c.x,
					y: c.y
				},
				closestSeriesName: c.series,
				posX: c.x,
				posY: c.y
			}
		};
		d.$6 = function(a) {
			var b = a.x,
				c = a.y,
				d = a.height,
				e = a.width,
				f = 0,
				g = 0;
			switch (this.props.position) {
				case "above":
					f = b + e / 2;
					g = c;
					break;
				case "below":
					f = b + e / 2;
					g = c + d;
					break;
				case "left":
					f = b;
					g = c + d / 2;
					break;
				case "right":
					f = b + e;
					g = c + d / 2;
					break
			}
			return {
				anchorRect: {
					height: a.height,
					width: a.width,
					x: a.x,
					y: a.y
				},
				posX: f,
				posY: g
			}
		};
		d.$7 = function(a) {
			return this.$6(a.target)
		};
		d.$8 = function(a) {
			return this.$6(a.target)
		};
		d.$9 = function(a, b) {
			b = a.target;
			var c = b.alignment,
				d = b.height,
				e = b.overlap,
				f = b.seriesOrder,
				g = b.width,
				h = b.x;
			b = b.y;
			var i = Infinity,
				k = -Infinity;
			f.forEach(function(b) {
				var c = 0;
				b.forEach(function(b) {
					b = a.data[b];
					var d = b.scale;
					b = b.value;
					c += b;
					var f = d.convert(d.props.origin);
					d = d.convert(e ? b : c);
					i = Math.min(i, d, f);
					k = Math.max(k, d, f)
				})
			});
			f = 0;
			var l = 0,
				m = 0,
				n = 0;
			switch (c) {
				case j.LEFT:
				case j.RIGHT:
					f = i;
					l = k;
					m = b;
					n = b + d;
					break;
				case j.TOP:
				case j.BOTTOM:
					f = h;
					l = h + g;
					m = i;
					n = k;
					break
			}
			return this.$6({
				x: f,
				y: m,
				height: n - m,
				width: l - f
			})
		};
		d.$10 = function(a, c) {
			var d = 0,
				e = 0;
			if (this.refs.chart) {
				var f = b("ReactDOM").findDOMNode(this.refs.chart).querySelector(b("CandelaConstants").CHART_ELEMENT_SELECTOR);
				f = f.getBoundingClientRect();
				switch (this.props.position) {
					case "above":
						d = a - .5 * f.width;
						e = c;
						break;
					case "below":
						d = a - .5 * f.width;
						e = c - f.height;
						break;
					case "left":
						d = b("Locale").isRTL() ? a - f.width : a;
						e = c;
						break;
					case "right":
						d = b("Locale").isRTL() ? a : a - f.width;
						e = c;
						break
				}
				b("Locale").isRTL() && (d = -d)
			}
			return {
				x: d,
				y: e
			}
		};
		d.$11 = function(a, c) {
			return b("shallowEqual")((g || (g = b("mapObject")))(a, function(a) {
				return a.value
			}), (g || (g = b("mapObject")))(c, function(a) {
				return a.value
			})) && b("shallowEqual")((g || (g = b("mapObject")))(a, function(a) {
				return a.scale
			}), (g || (g = b("mapObject")))(c, function(a) {
				return a.scale
			}))
		};
		d.$12 = function(a) {
			(h || (h = b("isEmpty")))(a.data) ? this.$13(): (this.$2(), this.setState({
				shown: !0
			}));
			if ((h || (h = b("isEmpty")))(a.data) || this.$11(a.data, this.state.data)) return;
			var c = typeof this.props.items === "function" ? this.props.items(a.data) : this.props.items,
				d = l(Object.keys(a.data));
			d = c.map(function(a) {
				return a.key
			}).intersect(d);
			var e = this.$4(c, a.data);
			c = this.$3(c, a.data);
			var f, g, i = 0,
				j = 0;
			switch (a.target.shapeType) {
				case k.BAR:
					var m = this.$7(a);
					i = m.posX;
					j = m.posY;
					f = m.anchorRect;
					break;
				case k.BAR_AREA_LABEL:
					m = this.$8(a);
					i = m.posX;
					j = m.posY;
					f = m.anchorRect;
					break;
				case k.BAR_GROUP:
					m = this.$9(a, d);
					i = m.posX;
					j = m.posY;
					f = m.anchorRect;
					break;
				case k.GUIDE:
					m = this.$5(a, d);
					g = m.closestSeriesName;
					i = m.posX;
					j = m.posY;
					f = m.anchorRect;
					break
			}
			d = this.$10(i, j);
			m = d.x;
			i = d.y;
			this.setState({
				anchorRect: b("shallowEqual")(f, this.state.anchorRect) ? this.state.anchorRect : f,
				closestSeriesName: g,
				data: a.data,
				items: c,
				shown: !!f,
				target: a.target,
				theme: a.theme,
				title: e,
				x: m,
				y: i
			})
		};
		d.$13 = function() {
			this.$1 = this.$1 || b("debounce")(this.$16, this.props.hoverHideDelay), this.$1()
		};
		d.$2 = function() {
			this.$1 && (this.$1.reset(), this.$1 = null)
		};
		d.render = function() {
			var a = i.cloneElement(this.props.chart, {
					anchorRect: this.state.anchorRect,
					onMouseMove: this.$14,
					onMouseEnter: this.$15,
					onMouseLeave: this.$17,
					ref: "chart"
				}),
				b = this.props.children && i.cloneElement(this.props.children, babelHelpers["extends"]({}, this.state, {
					chartNode: this.refs.chart,
					position: this.props.position,
					onMouseEnter: this.$18,
					onMouseLeave: this.$19
				}));
			return i.jsxs("div", {
				children: [a, b]
			})
		};
		return c
	}(i.PureComponent);
	e.exports = c;
	c.propTypes = {
		chart: (d = b("prop-types")).node.isRequired,
		children: d.node.isRequired,
		formatterFactory: d.func,
		hoverHideDelay: d.number,
		items: d.oneOfType([d.instanceOf(l), d.func]).isRequired,
		position: d.oneOf(["above", "below", "left", "right"]),
		targetShapeTypes: a,
		theme: d.instanceOf(b("CandelaTheme")),
		title: d.string,
		titleElementGetter: d.func,
		titleKey: d.string
	};
	c.defaultProps = {
		formatterFactory: b("InsightsFormatterFactories").legendFormatterFactory,
		hoverHideDelay: 300,
		position: "above",
		targetShapeTypes: m([k.GUIDE, k.BAR_GROUP])
	}
}), null);