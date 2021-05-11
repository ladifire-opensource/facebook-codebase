__d("CandelaHexAnchorAnnotation.react", ["CandelaInteractivePath.react", "CandelaPathUtils", "CandelaUtils", "React", "ReactART", "prop-types"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = b("ReactART").Group,
		i = b("CandelaUtils").art.createShape,
		j = b("CandelaPathUtils").createPolygon;
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.render = function() {
			var a = this.props,
				c = a.activeStyle,
				d = a.center,
				e = a.hoverStyle,
				f = a.isActive,
				k = a.isHovered,
				l = a.onShapeClick,
				m = a.onShapeDrag,
				n = a.onShapeDragEnd,
				o = a.onShapeDragStart,
				p = a.onShapeEnter,
				q = a.onShapeLeave,
				r = a.regionID;
			a = a.style;
			var s;
			if (a.radius === 0) return g.jsx(h, {});
			(f || k) && (s = i(j(d, a.radius - 3, 6, Math.PI / 2), !0, {
				fill: f ? c.stroke : e.stroke,
				opacity: f ? c.opacity : e.opacity
			}));
			return g.jsxs(h, {
				children: [g.jsx(b("CandelaInteractivePath.react"), {
					closePath: !0,
					hoverStyle: f ? c : e,
					hoverThreshold: 1,
					onShapeClick: l,
					onShapeDrag: m,
					onShapeDragEnd: n,
					onShapeDragStart: o,
					onShapeEnter: p,
					onShapeLeave: q,
					points: j(d, a.radius, 6, Math.PI / 2),
					regionID: r,
					style: f ? c : a
				}), s]
			})
		};
		return c
	}(g.PureComponent);
	a.propTypes = {
		activeStyle: (c = b("prop-types")).object.isRequired,
		center: c.shape({
			x: c.number.isRequired,
			y: c.number.isRequired
		}).isRequired,
		hoverStyle: c.object.isRequired,
		isActive: c.bool,
		isHovered: c.bool,
		onShapeClick: c.func,
		onShapeDrag: c.func,
		onShapeDragEnd: c.func,
		onShapeDragStart: c.func,
		onShapeEnter: c.func,
		onShapeLeave: c.func,
		regionID: c.string,
		style: c.object.isRequired
	};
	e.exports = a
}), null);