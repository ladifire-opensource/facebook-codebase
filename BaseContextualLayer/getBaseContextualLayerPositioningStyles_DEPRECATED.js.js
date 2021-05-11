__d("getBaseContextualLayerPositioningStyles_DEPRECATED", ["Locale"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("Locale").isRTL();

	function a(a) {
		var b = a.adjustment,
			c = a.align,
			d = a.contextRect,
			e = a.fixed,
			f = a.offsetRect;
		a = a.position;
		e = {
			height: void 0,
			position: e ? "fixed" : void 0,
			transform: "",
			width: void 0
		};
		var h = 0,
			i = 0,
			j = 0,
			k = 0,
			l = (d.bottom + d.top) / 2,
			m = (d.left + d.right) / 2,
			n = g ? "start" : "end",
			o = g ? "end" : "start";
		switch (a) {
			case "above":
				i = d.top - f.top;
				k = "-100%";
				break;
			case "below":
				i = d.bottom - f.top;
				break;
			case o:
				h = d.left - f.left;
				j = "-100%";
				break;
			case n:
				h = d.right - f.left;
				break
		}
		if (a === "start" || a === "end") switch (c) {
			case "start":
				i = d.top - f.top;
				break;
			case "middle":
				i = l - f.top;
				k = "-50%";
				break;
			case "end":
				i = d.bottom - f.top;
				k = "-100%";
				break;
			case "stretch":
				i = d.top - f.top;
				e.height = d.bottom - d.top + "px";
				break
		} else if (a === "above" || a === "below") switch (c) {
			case o:
				h = d.left - f.left;
				break;
			case "middle":
				h = m - f.left;
				j = "-50%";
				break;
			case n:
				h = d.right - f.left;
				j = "-100%";
				break;
			case "stretch":
				h = d.left - f.left;
				e.width = d.right - d.left + "px";
				break
		}
		b != null && (a === "start" || a === "end" ? i += b : (a === "above" || a === "below") && (h += b));
		l = "";
		(h !== 0 || i !== 0) && (l += "translate(" + Math.round(h) + "px, " + Math.round(i) + "px) ");
		(j !== 0 || k !== 0) && (l += "translate(" + j + ", " + k + ") ");
		e.transform = l;
		return e
	}
}), null);