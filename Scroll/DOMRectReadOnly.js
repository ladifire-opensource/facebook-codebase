__d("DOMRectReadOnly", [], (function (a, b, c, d, e, f) {
	"use strict";
	a = function () {
		function a() {
			this.bottom = 0, this.height = 0, this.left = 0, this.right = 0, this.top = 0, this.width = 0, this.x = 0, this.y = 0
		}
		a.fromRect = function (b) {
			b = b || {
				height: 0,
				width: 0,
				x: 0,
				y: 0
			};
			var c = b.height,
				d = b.width,
				e = b.x;
			b = b.y;
			var f = new a();
			f.x = e;
			f.y = b;
			f.width = d;
			f.height = c;
			f.top = b;
			f.bottom = b + c;
			f.right = e + d;
			f.left = e;
			return f
		};
		return a
	}();
	b = "DOMRectReadOnly" in window;
	c = b ? window.DOMRectReadOnly.fromRect : void 0;
	d = !!c && "function" === typeof c;
	f = d ? window.DOMRectReadOnly : a;
	e.exports = f
}), null);