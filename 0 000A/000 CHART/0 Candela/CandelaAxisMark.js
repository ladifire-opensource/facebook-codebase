__d("CandelaAxisMark.react", ["CandelaInteractiveText.react", "React", "ReactART", "prop-types"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = b("ReactART").Group,
		i = b("ReactART").Path,
		j = b("ReactART").Shape;
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.render = function() {
			return g.jsxs(h, {
				children: [this.$1(), this.$2()]
			})
		};
		d.$1 = function() {
			var a = this.props,
				b = a.bottom,
				c = a.left,
				d = a.right,
				e = a.style;
			a = a.top;
			var f = e.stroke,
				h = e.strokeDasharray,
				k = e.strokeLinecap;
			e = e.strokeWidth;
			if (c === d && a === b) return null;
			var l = i();
			l.moveTo(c, a).lineTo(d, b);
			return g.jsx(j, {
				d: l,
				stroke: f,
				strokeCap: k,
				strokeDash: h,
				strokeWidth: e
			})
		};
		d.$2 = function() {
			var a = this.props,
				c = a.content,
				d = a.height,
				e = a.hoverStyle,
				f = a.labelHoverThreshold,
				h = a.labelProximityThreshold,
				i = a.proximityStyle,
				j = a.style;
			a = a.width;
			var k = this.props,
				l = k.left;
			k = k.top;
			var m = j.paddingBottom,
				n = j.paddingLeft,
				o = j.paddingRight,
				p = j.paddingTop,
				q = j.maxHeight,
				r = j.maxWidth;
			if (!c) return null;
			l += n - o;
			k += p - m;
			!r && a && (r = a - n - o);
			!q && d && (q = d - p - m);
			a = babelHelpers["extends"]({}, j, {
				maxWidth: r,
				maxHeight: q
			});
			return g.jsx(b("CandelaInteractiveText.react"), {
				hoverStyle: e,
				hoverThreshold: f,
				proximityStyle: i,
				proximityThreshold: h,
				style: a,
				x: l,
				y: k,
				children: c
			})
		};
		return c
	}(g.Component);
	a.propTypes = {
		bottom: (c = b("prop-types")).number.isRequired,
		left: c.number.isRequired,
		right: c.number.isRequired,
		top: c.number.isRequired,
		content: c.string,
		height: c.number.isRequired,
		width: c.number.isRequired,
		hoverStyle: c.object,
		labelHoverThreshold: c.number,
		labelProximityThreshold: c.number,
		proximityStyle: c.object,
		style: c.object.isRequired
	};
	a.defaultProps = {
		height: 0,
		labelHoverThreshold: 0,
		labelProximityThreshold: 5,
		width: 0
	};
	e.exports = a
}), null);