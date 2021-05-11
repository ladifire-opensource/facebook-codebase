__d("CandelaBars.react", ["CandelaConstants", "CandelaControlLines.react", "CandelaGlobalThemeRegistry", "CandelaInteractivePoint.react", "CandelaInteractiveRect.react", "CandelaInteractiveText.react", "CandelaPureRenderMixin", "CandelaStructs", "CandelaTheme", "CandelaUtils", "React", "ReactART", "createReactClass_DEPRECATED", "expectationViolation", "getObjectValues", "immutable", "prop-types"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = b("ReactART").Group,
		i = b("CandelaUtils").data.classNamesToSelector,
		j = b("CandelaUtils").data.computeHighlightPseudoClass,
		k = b("CandelaUtils").data.getClassNamesFromInputString;
	b("CandelaGlobalThemeRegistry").register({
		type: (a = b("CandelaConstants")).ShapeType.BAR,
		attributes: [a.Attribute.ALIGNMENT, a.Attribute.COMPARISON_SHAPE, a.Attribute.SERIES],
		pseudoClasses: [a.PseudoClass.EQUAL_TO, a.PseudoClass.GREATER_THAN, a.PseudoClass.HIGHLIGHTED, a.PseudoClass.HOVER, a.PseudoClass.LESS_THAN, a.PseudoClass.MUTED, a.PseudoClass.PRIMARY, a.PseudoClass.PROXIMITY, a.PseudoClass.SECONDARY, a.PseudoClass.UNAVAILABLE],
		styles: [a.Style.FILL, a.Style.MARGIN, a.Style.MAX_HEIGHT, a.Style.MAX_WIDTH, a.Style.MIN_HEIGHT, a.Style.MIN_WIDTH, a.Style.OPACITY, a.Style.PADDING, a.Style.STROKE, a.Style.STROKE_DASHARRAY, a.Style.STROKE_WIDTH],
		children: [{
			type: a.ShapeType.BAR_LABEL,
			pseudoClasses: [a.PseudoClass.HOVER],
			styles: [a.Style.BOTTOM, a.Style.COLOR, a.Style.FONT, a.Style.LEFT, a.Style.OPACITY, a.Style.PADDING, a.Style.POSITION, a.Style.RIGHT, a.Style.TEXT_ALIGN, a.Style.TOP, a.Style.VISIBILITY]
		}]
	});
	f = b("createReactClass_DEPRECATED")({
		displayName: "CandelaBars",
		mixins: [b("CandelaPureRenderMixin")],
		contextTypes: {
			schema: (c = b("prop-types")).instanceOf((d = b("immutable")).Map),
			theme: c.instanceOf(b("CandelaTheme"))
		},
		propTypes: {
			alignment: c.oneOf(b("getObjectValues")(a.Alignment)),
			barGroupStructs: c.arrayOf(c.shape({
				classNames: c.instanceOf(d.Set).isRequired,
				data: c.object.isRequired,
				rect: c.object.isRequired
			})).isRequired,
			comparisonShape: c.oneOf(b("getObjectValues")(a.ComparisonShape)),
			groupBy: c.string.isRequired,
			height: c.number.isRequired,
			hiddenSeries: c.instanceOf(d.Set),
			highlights: c.instanceOf(d.Set),
			hoverThreshold: c.number,
			labelComponent: c.element,
			labelFormatterFactory: c.func.isRequired,
			order: c.instanceOf(d.OrderedSet).isRequired,
			overlap: c.bool,
			placement: c.string,
			proximityThreshold: c.number,
			threshold: c.instanceOf(b("CandelaStructs").Threshold),
			width: c.number.isRequired,
			x: c.number.isRequired,
			y: c.number.isRequired
		},
		getDefaultProps: function() {
			return {
				alignment: b("CandelaConstants").Alignment.BOTTOM,
				barGroupStructs: [],
				comparisonShape: b("CandelaConstants").ComparisonShape.BAR,
				groupBy: "",
				height: 0,
				highlights: b("immutable").Set(),
				hoverThreshold: 0,
				order: b("immutable").OrderedSet(),
				proximityThreshold: 0,
				width: 0,
				x: 0,
				y: 0
			}
		},
		_computeBarRect: function(a, c, d, e, f, g, h) {
			var i = this.props,
				j = i.alignment;
			i = i.overlap;
			var k, l, m;
			if (j === b("CandelaConstants").Alignment.LEFT || j === b("CandelaConstants").Alignment.RIGHT) {
				var n = a.height / f;
				k = n - d.marginBottom - d.marginTop;
				l = g - c;
				d.minWidth && Math.abs(l) < d.minWidth && (l ? l = b("CandelaUtils").math.sign(l) * d.minWidth : l = j === b("CandelaConstants").Alignment.LEFT ? d.minWidth : -d.minWidth);
				var o = 0;
				d.maxHeight && d.maxHeight < k && (o = (k - d.maxHeight) / 2, k = d.maxHeight);
				i && (o += d.paddingTop * h, k -= (d.paddingBottom + d.paddingTop) * h);
				m = c;
				n = a.y + n * e + o + d.marginTop
			} else {
				o = a.width / f;
				k = g - c;
				l = o - d.marginLeft - d.marginRight;
				d.minHeight && Math.abs(k) < d.minHeight && (k ? k = b("CandelaUtils").math.sign(k) * d.minHeight : k = j === b("CandelaConstants").Alignment.TOP ? d.minHeight : -d.minHeight);
				f = 0;
				d.maxWidth && d.maxWidth < l && (f = (l - d.maxWidth) / 2, l = d.maxWidth);
				i && (f += d.paddingLeft * h, l -= (d.paddingLeft + d.paddingRight) * h);
				m = a.x + o * e + f + d.marginLeft;
				n = c
			}
			return {
				height: k,
				width: l,
				x: m,
				y: n
			}
		},
		_computeLabelPoint: function(a, c, d) {
			var e = this.props.alignment,
				f, g;
			d.position === "absolute" && (d.top != null ? (d.textAlign === "center" && (f = a.x + a.width / 2), g = a.y + d.top + d.paddingTop) : d.bottom != null ? (d.textAlign === "center" && (f = a.x + a.width / 2), g = a.y + a.height - d.bottom - d.paddingBottom) : d.left != null ? f = a.x + d.left + d.paddingLeft : d.right != null && (f = a.x + a.width - d.right - d.paddingRight));
			e === b("CandelaConstants").Alignment.LEFT || e === b("CandelaConstants").Alignment.RIGHT ? (f == null && (f = !c.width && e === b("CandelaConstants").Alignment.LEFT || c.width > 0 ? c.x + c.width + d.paddingLeft : c.x + c.width - d.paddingRight), g == null && (g = c.y + c.height / 2 + d.paddingTop - d.paddingBottom)) : (f == null && (f = c.x + c.width / 2 + d.paddingLeft - d.paddingRight), g == null && (g = !c.height && e === b("CandelaConstants").Alignment.TOP || c.height > 0 ? c.y + c.height + d.paddingTop : c.y + c.height - d.paddingBottom));
			return {
				x: f,
				y: g
			}
		},
		_handleShapeEvent: function(a, b, c) {
			c.target = b, c.data = babelHelpers["extends"]({}, c.data, a)
		},
		_coerceBorderRadius: function(a, b, c) {
			var d;
			return babelHelpers["extends"]({}, a, (d = {}, d[b] = Math.min((a = a[b]) != null ? a : 0, c), d))
		},
		_coerceAllBorderRadiusStyles: function(a, c) {
			var d = this,
				e = Math.abs(c.height) / 2,
				f = Math.abs(c.width) / 2;
			return a.map(function(a) {
				a = d._coerceBorderRadius(a, b("CandelaConstants").Style.BORDER_RADIUS_HORIZONTAL, e);
				return d._coerceBorderRadius(a, b("CandelaConstants").Style.BORDER_RADIUS_VERTICAL, f)
			})
		},
		_renderShape: function(a, c, d, e, f, h, i) {
			var j = this.context.theme,
				k = this.props,
				l = k.alignment,
				m = k.hoverThreshold;
			k = k.proximityThreshold;
			if (!e.height || !e.width) return null;
			var n = j.getHoverStyle(f);
			j = j.getProximityStyle(f);
			f = {
				alignment: l,
				shapeType: b("CandelaConstants").ShapeType.BAR,
				style: h
			};
			l = babelHelpers["extends"]({}, f, {
				style: n
			});
			f = this._handleShapeEvent.bind(this, c, f);
			l = this._handleShapeEvent.bind(this, c, l);
			n = this._coerceAllBorderRadiusStyles([h, n, j], e);
			j = n[0];
			var o = n[1];
			n = n[2];
			switch (a) {
				case b("CandelaConstants").ShapeType.BAR:
					return g.createElement(b("CandelaInteractiveRect.react"), babelHelpers["extends"]({}, e, {
						hoverStyle: o,
						hoverThreshold: m,
						key: d,
						onShapeClick: l,
						onShapeDown: l,
						onShapeEnter: f,
						onShapeHover: l,
						onShapeLeave: l,
						onShapeLongPress: l,
						onShapeUp: l,
						proximityStyle: n,
						proximityThreshold: k,
						regionID: d,
						style: j
					}));
				case b("CandelaConstants").ShapeType.POINT:
					m = (k = (m = h.paddingLeft) != null ? m : h.padding) != null ? k : 0;
					k = (k = (k = h.paddingRight) != null ? k : h.padding) != null ? k : 0;
					k = Math.max(e.width - m - k, 0) / 2;
					m = e.x + m + k;
					var p = e.y + e.height;
					return g.jsx(b("CandelaInteractivePoint.react"), {
						hoverStyle: o,
						onShapeClick: l,
						onShapeDown: l,
						onShapeEnter: f,
						onShapeLeave: l,
						onShapeUp: l,
						proximityStyle: n,
						radius: k,
						regionID: d,
						style: j,
						x: m,
						y: p
					}, d);
				case b("CandelaConstants").ShapeType.LINE:
					l = (f = (o = h.marginLeft) != null ? o : h.margin) != null ? f : 0;
					j = (k = (n = h.marginRight) != null ? n : h.margin) != null ? k : 0;
					o = (p = (m = h.paddingLeft) != null ? m : h.padding) != null ? p : 0;
					k = (n = (f = h.paddingRight) != null ? f : h.padding) != null ? n : 0;
					m = Math.max(e.width - l - j - o - k, 0);
					p = e.x + l + o;
					f = e.y + e.height;
					n = i || "";
					return g.jsx(b("CandelaControlLines.react"), {
						height: 0,
						style: h,
						values: [(j = c[i]) == null ? void 0 : j.value],
						variableName: n,
						width: m,
						x: p,
						y: f
					}, d);
				default:
					b("expectationViolation")("Can not render unsupported ShapeType: %s", a);
					return null
			}
		},
		_renderLabel: function(a, c, d, e, f, h, i, j, k, l) {
			var m = this.context.theme,
				n = this.props,
				o = n.alignment,
				p = n.hoverThreshold;
			n = n.labelComponent;
			m = m.getHoverStyle(e);
			(!a.width && o === b("CandelaConstants").Alignment.RIGHT || a.width < 0) && (f = babelHelpers["extends"]({}, f, {
				textAlign: b("CandelaConstants").Alignment.RIGHT
			}), m = babelHelpers["extends"]({}, m, {
				textAlign: b("CandelaConstants").Alignment.RIGHT
			}));
			if (n) return g.cloneElement(n, babelHelpers["extends"]({}, d, {
				formatter: h,
				hoverStyle: m,
				key: c,
				style: f,
				data: i,
				seriesName: j,
				groupBySeriesName: k
			}));
			e = i[k] && i[k].value;
			o = h(l, e);
			return g.createElement(b("CandelaInteractiveText.react"), babelHelpers["extends"]({}, d, {
				hoverStyle: m,
				hoverThreshold: p,
				key: c,
				proximityThreshold: 0,
				regionID: c,
				style: f
			}), o)
		},
		render: function() {
			var a = this,
				c = this.context,
				d = c.schema,
				e = c.theme;
			c = this.props;
			var f = c.alignment,
				l = c.barGroupStructs,
				m = c.comparisonShape,
				n = c.groupBy,
				o = c.height,
				p = c.hiddenSeries,
				q = c.highlights,
				r = c.labelFormatterFactory,
				s = c.order,
				t = c.overlap,
				u = c.threshold,
				v = c.width,
				w = c.x,
				x = c.y,
				y = [],
				z = [],
				A = [],
				B = [],
				C = {},
				D = s.filter(function(a) {
					return p == null || a.some(function(a) {
						return !p.has(a)
					})
				});
			l.forEach(function(c, g) {
				var h = c.classNames,
					l = c.data,
					p = c.rect;
				D.toIndexedSeq().forEach(function(c, s) {
					var E = 0,
						F = 0;
					c.toIndexedSeq().forEach(function(G, H) {
						var I = l[G].scale,
							J = l[G].value,
							K = J != null;
						K || (J = I.props.origin);
						F = t ? J : F + J;
						var L = b("CandelaConstants").PseudoClass.NONE;
						q && (L = j(q, G, l[n].value));
						var M = b("CandelaConstants").PseudoClass.NONE;
						t && (M = H ? b("CandelaConstants").PseudoClass.PRIMARY : b("CandelaConstants").PseudoClass.SECONDARY);
						var N = "";
						if (M === b("CandelaConstants").PseudoClass.SECONDARY) {
							var O;
							N = '[comparison-shape="' + ((O = m) != null ? O : a.getDefaultProps()[m]) + '"]'
						}
						O = b("CandelaConstants").PseudoClass.NONE;
						u && (F > u.get("value") ? O = b("CandelaConstants").PseudoClass.GREATER_THAN : F === u.get("value") ? O = b("CandelaConstants").PseudoClass.EQUAL_TO : O = b("CandelaConstants").PseudoClass.LESS_THAN);
						var P = b("CandelaConstants").PseudoClass.NONE;
						K || (P = b("CandelaConstants").PseudoClass.UNAVAILABLE);
						var Q = k(d.get(G).className),
							R = u ? k(u.get("className")) : b("immutable").Set();
						Q = h.union(Q).union(R);
						R = d.get(G).comparisonFor || G;
						Q = b("CandelaConstants").ShapeType.BAR + i(Q) + ('[series="' + R + '"]') + ('[alignment="' + f + '"]') + N + L + M + O + P;
						R = e.getStyle(Q);
						if (H === 0) {
							N = I.convert(I.props.origin);
							switch (f) {
								case b("CandelaConstants").Alignment.BOTTOM:
									E = Math.min(x + o, N);
									break;
								case b("CandelaConstants").Alignment.LEFT:
									E = Math.max(w, N);
									break;
								case b("CandelaConstants").Alignment.RIGHT:
									E = Math.min(w + v, N);
									break;
								case b("CandelaConstants").Alignment.TOP:
									E = Math.max(x, N);
									break
							}
						}
						L = u && u.get("flushToThreshold") ? I.convert(Math.max(u.get("value"), F)) : I.convert(F);
						O = a._computeBarRect(p, E, R, s, D.size, L, H);
						N = (P = {}, P[n] = babelHelpers["extends"]({}, l[n]), P[G] = babelHelpers["extends"]({}, l[G]), P);
						H = G + "-bar-" + g;
						if (m === b("CandelaConstants").ComparisonShape.CIRCLE && M === b("CandelaConstants").PseudoClass.SECONDARY) {
							P = G + "-circle-" + g;
							z.push(a._renderShape(b("CandelaConstants").ShapeType.POINT, N, P, O, Q, R, G))
						} else if (m === b("CandelaConstants").ComparisonShape.LINE && M === b("CandelaConstants").PseudoClass.SECONDARY) {
							P = G + "-line-" + g;
							A.push(a._renderShape(b("CandelaConstants").ShapeType.LINE, N, P, O, Q, R, G))
						} else y.push(a._renderShape(b("CandelaConstants").ShapeType.BAR, N, H, O, Q, R, G));
						if (G === c.last()) {
							M = Q + ">" + b("CandelaConstants").ShapeType.BAR_LABEL;
							P = e.getStyle(M);
							if (K && P.visibility !== "hidden") {
								N = a._computeLabelPoint(p, O, P);
								C[G] || (C[G] = r(I, G));
								B.push(a._renderLabel(O, H, N, M, P, C[G], l, G, n, J))
							}
						}
						t || (E = L)
					})
				})
			});
			c = y.concat.apply(y, z.concat(A));
			return g.jsxs(h, {
				children: [c, B]
			})
		}
	});
	a = f;
	e.exports = a
}), null);