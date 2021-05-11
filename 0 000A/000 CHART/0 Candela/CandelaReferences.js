__d("CandelaReferences.react", ["CandelaConstants", "CandelaGlobalThemeRegistry", "CandelaInteractivePath.react", "CandelaInteractiveRect.react", "CandelaInteractiveText.react", "CandelaPureRenderMixin", "CandelaSelector", "CandelaStructs", "CandelaTheme", "CandelaUtils", "React", "ReactART", "createReactClass_DEPRECATED", "immutable", "prop-types"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = (a = b("CandelaConstants")).Alignment,
		i = a.Attribute,
		j = a.Placement,
		k = a.PseudoClass,
		l = a.ShapeType;
	c = a.Style;
	var m = a.Visibility;
	b("CandelaStructs").Reference;
	var n = b("ReactART").Group;
	d = b("immutable").Map;
	var o = b("immutable").OrderedSet;
	f = b("immutable").Set;
	var p = b("CandelaUtils").data.getClassNamesFromInputString;
	b("CandelaGlobalThemeRegistry").register({
		type: l.REFERENCE,
		attributes: [i.ALIGNMENT, i.PLACEMENT, i.SERIES],
		pseudoClasses: [],
		styles: [],
		children: [{
			type: l.REFERENCE_LABEL,
			pseudoClasses: [k.HOVER, k.PROXIMITY],
			styles: [c.BOTTOM, c.COLOR, c.FONT, c.LEFT, c.OPACITY, c.PADDING, c.POSITION, c.RIGHT, c.TEXT_ALIGN, c.TOP, c.VISIBILITY]
		}, {
			type: l.REFERENCE_LINE,
			pseudoClasses: [k.HOVER, k.PROXIMITY],
			styles: [c.OPACITY, c.MARGIN, c.STROKE_DASHARRAY, c.STROKE_WIDTH, c.STROKE, c.VISIBILITY]
		}, {
			type: l.REFERENCE_ZONE,
			pseudoClasses: [k.GREATER_THAN, k.HOVER, k.LESS_THAN, k.PROXIMITY],
			styles: [c.FILL, c.OPACITY, c.STROKE_DASHARRAY, c.STROKE_WIDTH, c.STROKE, c.VISIBILITY]
		}]
	});
	c = b("createReactClass_DEPRECATED")({
		displayName: "CandelaReferences",
		scales: {},
		mixins: [b("CandelaPureRenderMixin")],
		contextTypes: {
			scales: (a = b("prop-types")).object,
			schema: a.instanceOf(d),
			theme: a.instanceOf(b("CandelaTheme"))
		},
		propTypes: {
			alignment: a.oneOf([h.BOTTOM, h.LEFT, h.RIGHT, h.TOP]).isRequired,
			height: a.number.isRequired,
			labelHoverThreshold: a.number,
			lineHoverThreshold: a.number,
			zoneHoverThreshold: a.number,
			placement: a.string,
			plotX: a.instanceOf(f).isRequired,
			plotY: a.instanceOf(f).isRequired,
			labelProximityThreshold: a.number,
			lineProximityThreshold: a.number,
			zoneProximityThreshold: a.number,
			references: a.instanceOf(f).isRequired,
			width: a.number.isRequired,
			x: a.number.isRequired,
			y: a.number.isRequired
		},
		getDefaultProps: function() {
			return {
				alignment: h.BOTTOM,
				height: 0,
				labelHoverThreshold: 2,
				labelProximityThreshold: 4,
				lineHoverThreshold: 2,
				lineProximityThreshold: 4,
				placement: j.NONE,
				width: 0,
				x: 0,
				y: 0,
				zoneHoverThreshold: 0,
				zoneProximityThreshold: 2
			}
		},
		_computeLabelPoint: function(a, b, c) {
			var d = this.props.plotY,
				e = a.seriesName,
				f = b.bottom,
				g = b.left,
				h = b.paddingBottom,
				i = b.paddingLeft,
				j = b.paddingRight,
				k = b.paddingTop,
				l = b.position,
				m = b.right,
				n = b.textAlign;
			b = b.top;
			a = this._computeLinePoints(a, c);
			c = Math.max.apply(Math, a.map(function(a) {
				return a.x
			}));
			var o = Math.max.apply(Math, a.map(function(a) {
					return a.y
				})),
				p = Math.min.apply(Math, a.map(function(a) {
					return a.x
				}));
			a = Math.min.apply(Math, a.map(function(a) {
				return a.y
			}));
			var q = p,
				r = a;
			if (l === "absolute") b != null ? r = a + b : f != null && (r = o - f), g != null ? q = p + g : m != null && (q = c - m);
			else {
				if (d.contains(e)) switch (n) {
					case "center":
						q = (p + c) / 2;
						break;
					case "right":
						q = c;
						break;
					default:
						q = p
				}
				q += i - j;
				r += k - h
			}
			return {
				x: q,
				y: r
			}
		},
		_computeLinePoints: function(a, b) {
			var c = this.props,
				d = c.plotX,
				e = c.x,
				f = c.y,
				g = c.height;
			c = c.width;
			var h = b.marginBottom,
				i = b.marginLeft,
				j = b.marginRight;
			b = b.marginTop;
			var k = a.seriesName;
			a = a.value;
			a = this.scales[k].convert(a);
			var l = [];
			d.contains(k) ? l.push({
				x: a + i - j,
				y: f + b
			}, {
				x: a + i - j,
				y: f + g - h
			}) : l.push({
				x: e + i,
				y: a + b - h
			}, {
				x: e + c - j,
				y: a + b - h
			});
			return l
		},
		_computeZoneRect: function(a, b) {
			var c = this.props.plotX,
				d = this.props,
				e = d.height,
				f = d.width,
				g = d.x;
			d = d.y;
			var h = a.seriesName;
			a = a.value;
			var i = this.scales[h];
			a = i.convert(a);
			var j = i.convert(i.props.input.max());
			i = i.convert(i.props.input.min());
			c.contains(h) ? b === k.GREATER_THAN ? (f = j - a, g = a) : (f = a - i, g = i) : b === k.GREATER_THAN ? (e = j - a, d = a) : (e = a - i, d = i);
			return {
				height: e,
				width: f,
				x: g,
				y: d
			}
		},
		_renderLabel: function(a, c) {
			var d = this.context.theme,
				e = this.props,
				f = e.labelHoverThreshold;
			e = e.labelProximityThreshold;
			var h = a.className,
				i = a.seriesName,
				j = a.value,
				k = a.label,
				n = b("CandelaSelector").fromJS([c, {
					attributes: {},
					classes: [],
					pseudoClasses: [],
					type: l.REFERENCE_LABEL
				}]);
			n = n.toString();
			var o = d.getStyle(n),
				p = d.getHoverStyle(n);
			n = d.getProximityStyle(n);
			d = d.getStyle(this._getLineSelector(a, c).toString());
			if (o.visibility === m.HIDDEN) return null;
			c = this._computeLabelPoint(a, o, d);
			a = "" + l.REFERENCE_LABEL + ("-" + h + "-" + i + "-" + j);
			return g.createElement(b("CandelaInteractiveText.react"), babelHelpers["extends"]({}, c, {
				hoverStyle: p,
				hoverThreshold: f,
				key: a,
				proximityStyle: n,
				proximityThreshold: e,
				regionID: a,
				style: o
			}), k)
		},
		_getLineSelector: function(a, c) {
			return b("CandelaSelector").fromJS([c, {
				attributes: {},
				classes: [],
				pseudoClasses: [],
				type: l.REFERENCE_LINE
			}])
		},
		_renderLine: function(a, c) {
			var d = this.context.theme,
				e = this.props,
				f = e.lineHoverThreshold;
			e = e.lineProximityThreshold;
			var h = a.className,
				i = a.seriesName,
				j = a.value;
			c = this._getLineSelector(a, c);
			c = c.toString();
			var k = d.getStyle(c),
				n = d.getHoverStyle(c);
			d = d.getProximityStyle(c);
			if (k.visibility === m.HIDDEN) return null;
			c = this._computeLinePoints(a, k);
			a = "" + l.REFERENCE_LINE + ("-" + h + "-" + i + "-" + j);
			return g.jsx(b("CandelaInteractivePath.react"), {
				hoverStyle: n,
				hoverThreshold: f,
				points: c,
				proximityStyle: d,
				proximityThreshold: e,
				regionID: a,
				style: k
			}, a)
		},
		_renderZone: function(a, c, d) {
			var e = this.context.theme,
				f = this.props,
				h = f.zoneHoverThreshold;
			f = f.zoneProximityThreshold;
			var i = a.className,
				j = a.seriesName,
				k = a.value;
			c = b("CandelaSelector").fromJS([c, {
				attributes: {},
				classes: [],
				pseudoClasses: [d.slice(1)],
				type: l.REFERENCE_ZONE
			}]);
			c = c.toString();
			var n = e.getStyle(c),
				o = e.getHoverStyle(c);
			e = e.getProximityStyle(c);
			if (n.visibility === m.HIDDEN) return null;
			c = this._computeZoneRect(a, d);
			a = "" + l.REFERENCE_ZONE + ("-" + i + "-" + j + "-" + k + "-" + d);
			return g.createElement(b("CandelaInteractiveRect.react"), babelHelpers["extends"]({}, c, {
				hoverStyle: o,
				hoverThreshold: h,
				key: a,
				proximityStyle: e,
				proximityThreshold: f,
				regionID: a,
				style: n
			}))
		},
		_resizeScales: function() {
			var a = this,
				b = this.props,
				c = b.alignment,
				d = b.plotX,
				e = b.plotY,
				f = b.x,
				g = b.y,
				i = b.height;
			b = b.width;
			var j = this.context.scales;
			this.scales = {};
			i = g + i;
			var k = f;
			f = f + b;
			b = g;
			var l = o(c === h.RIGHT ? [f, k] : [k, f]),
				m = o(c === h.BOTTOM ? [i, b] : [b, i]);
			d.forEach(function(b) {
				return a.scales[b] = j[b].set("output", l)
			});
			e.forEach(function(b) {
				return a.scales[b] = j[b].set("output", m)
			})
		},
		render: function() {
			var a = this,
				b = this.context.schema,
				c = this.props,
				d = c.alignment,
				e = c.placement;
			c = c.references;
			var f = [],
				h = [],
				j = [];
			c.forEach(function(c) {
				var g, m = c.className,
					n = c.seriesName;
				m = p(m);
				var o = p(b.get(n).className);
				n = {
					attributes: (g = {}, g[i.ALIGNMENT] = d, g[i.PLACEMENT] = e, g[i.SERIES] = n, g),
					classes: o.union(m).toArray(),
					pseudoClasses: [],
					type: l.REFERENCE
				};
				a._resizeScales();
				j.push(a._renderZone(c, n, k.GREATER_THAN), a._renderZone(c, n, k.LESS_THAN));
				h.push(a._renderLine(c, n));
				f.push(a._renderLabel(c, n))
			});
			return g.jsxs(n, {
				children: [j, h, f]
			})
		}
	});
	e.exports = c
}), null);