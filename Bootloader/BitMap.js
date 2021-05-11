__d("BitMap", [], (function (a, b, c, d, e, f) {
	var g = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
	a = function () {
		function a() {
			this.$1 = [], this.$2 = null
		}
		var b = a.prototype;
		b.set = function (a) {
			this.$2 != null && !this.$1[a] && (this.$2 = null);
			this.$1[a] = 1;
			return this
		};
		b.toString = function () {
			var a = [];
			for (var b = 0; b < this.$1.length; b++) a.push(this.$1[b] ? 1 : 0);
			return a.length ? i(a.join("")) : ""
		};
		b.toCompressedString = function () {
			if (this.$1.length === 0) return "";
			if (this.$2 != null) return this.$2;
			var a = [],
				b = 1,
				c = this.$1[0] || 0,
				d = c.toString(2);
			for (var e = 1; e < this.$1.length; e++) {
				var f = this.$1[e] || 0;
				f === c ? b++ : (a.push(h(b)), c = f, b = 1)
			}
			b && a.push(h(b));
			return this.$2 = i(d + a.join(""))
		};
		return a
	}();
	e.exports = a;

	function h(a) {
		a = a.toString(2);
		var b = "0".repeat(a.length - 1);
		return b + a
	}

	function i(a) {
		a = (a + "00000").match(/[01]{6}/g);
		var b = "";
		for (var c = 0; a != null && c < a.length; c++) b += g[parseInt(a[c], 2)];
		return b
	}
}), null);