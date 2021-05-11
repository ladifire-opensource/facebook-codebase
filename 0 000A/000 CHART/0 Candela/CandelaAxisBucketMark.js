__d("CandelaAxisBucketMark.react", ["invariant", "CandelaConstants", "CandelaInteractiveRect.react", "CandelaInteractiveText.react", "CandelaPlatformConstants", "React", "ReactART", "prop-types"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("React"),
		i = b("ReactART").Group,
		j = b("ReactART").Path,
		k = b("ReactART").Shape,
		l = b("CandelaPlatformConstants").IMAGE_PATTERN,
		m = b("CandelaConstants").Orientation;
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.render = function() {
			return h.jsxs(i, {
				children: [this.$1(), this.$2()]
			})
		};
		d.$1 = function() {
			var a = this.props,
				b = a.height,
				c = a.style;
			a = a.width;
			var d = this.props,
				e = d.bottom,
				f = d.left,
				g = d.right;
			d = d.top;
			var i = c.stroke,
				l = c.strokeDasharray,
				m = c.strokeLinecap;
			c = c.strokeWidth;
			if (f === g && d === e) return null;
			var n = j();
			for (var o = 0; o < 2; o++) n.moveTo(f, d).lineTo(g, e), f += a, g += a, d += b, e += b;
			return h.jsx(k, {
				d: n,
				stroke: i,
				strokeCap: m,
				strokeDash: l,
				strokeWidth: c
			})
		};
		d.$2 = function() {
			var a = this.props,
				c = a.content,
				d = a.height,
				e = a.hoverStyle,
				f = a.labelHoverThreshold,
				i = a.labelProximityThreshold,
				j = a.orientation,
				k = a.proximityStyle,
				n = a.style;
			a = a.width;
			var o = this.props,
				p = o.left;
			o = o.top;
			var q = n.paddingBottom,
				r = n.paddingLeft,
				s = n.paddingRight,
				t = n.paddingTop,
				u = n.maxHeight,
				v = n.maxWidth;
			if (!c) return null;
			j === m.HORIZONTAL ? p += a / 2 : o += d / 2;
			p += r - s;
			o += t - q;
			if (c && typeof c === "object" && Object.prototype.hasOwnProperty.call(c, "height") && Object.prototype.hasOwnProperty.call(c, "src") && Object.prototype.hasOwnProperty.call(c, "width")) {
				l || g(0, 2501);
				j = c.src;
				var w = c.width,
					x = c.height;
				j = new l(j, w, x);
				j = babelHelpers["extends"]({}, n, {
					fill: j
				});
				return h.jsx(b("CandelaInteractiveRect.react"), {
					height: x,
					hoverStyle: e,
					hoverThreshold: f,
					proximityStyle: k,
					proximityThreshold: i,
					style: j,
					width: w,
					x: p - w / 2,
					y: o - x / 2
				})
			} else {
				!v && a && (v = a - r - s);
				!u && d && (u = d - t - q);
				j = babelHelpers["extends"]({}, n, {
					maxWidth: v,
					maxHeight: u
				});
				return h.jsx(b("CandelaInteractiveText.react"), {
					hoverStyle: e,
					hoverThreshold: f,
					proximityStyle: k,
					proximityThreshold: i,
					style: j,
					x: p,
					y: o,
					children: c
				})
			}
		};
		return c
	}(h.Component);
	a.propTypes = {
		bottom: (c = b("prop-types")).number.isRequired,
		left: c.number.isRequired,
		right: c.number.isRequired,
		top: c.number.isRequired,
		content: c.oneOfType([c.string, c.shape({
			height: c.number.isRequired,
			width: c.number.isRequired,
			src: c.oneOfType([c.string, c.object]).isRequired
		})]),
		orientation: c.oneOf([m.HORIZONTAL, m.VERTICAL]).isRequired,
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