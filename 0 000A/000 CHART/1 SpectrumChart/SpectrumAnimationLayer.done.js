__d("SpectrumAnimationLayer", ["cx", "PointerEventElement.react", "React", "getVendorPrefixedName"], (function(a, b, c, d, e, f, g) {
	var h = b("React");
	a = function(a) {
		"use strict";
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.render = function() {
			var a = this.props,
				c = a.scaleX != null ? a.scaleX : a.scale != null ? a.scale : 1,
				d = a.scaleY != null ? a.scaleY : a.scale != null ? a.scale : 1,
				e = "translate(" + (a.x || 0) + "px," + (a.y || 0) + "px)";
			(c != 1 || d != 1) && (e += " scale(" + c + "," + d + ")");
			a.rotation && (e += " rotate(" + a.rotation + "deg)");
			if (a.transform) {
				c = a.transform;
				e += " matrix(" + c.xx + "," + c.yx + "," + c.xy + "," + c.yy + "," + c.x + "," + c.y + ")"
			}
			d = (a.originX == null ? "50% " : a.originX + "px ") + (a.originY == null ? "50% " : a.originY + "px ");
			c = a.visible == null || a.visible;
			var f = a.duration || "",
				g = a.timing || "";
			c = {
				cursor: a.cursor,
				display: c ? "" : "none",
				height: a.height,
				left: 0,
				opacity: a.opacity,
				right: "auto",
				width: a.width
			};
			var i = b("getVendorPrefixedName")("transform");
			i == null ? (c.left = a.x, c.top = a.y) : (c[i] = e, c[b("getVendorPrefixedName")("transform-origin")] = d, c[b("getVendorPrefixedName")("transition-duration")] = f, c[b("getVendorPrefixedName")("transition-timing-function")] = g);
			this.props.zIndex != null && (c.zIndex = this.props.zIndex);
			return h.jsx(b("PointerEventElement.react"), {
				className: "_5137",
				style: c,
				children: a.children
			})
		};
		return c
	}(h.Component);
	e.exports = a
}), null);