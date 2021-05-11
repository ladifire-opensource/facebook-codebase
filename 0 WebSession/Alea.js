__d("Alea", [], (function(a, b, c, d, e, f) {
	e.exports = a;

	function g() {
		var a = 4022871197,
			b = function(b) {
				b = b.toString();
				for (var c = 0; c < b.length; c++) {
					a += b.charCodeAt(c);
					var d = .02519603282416938 * a;
					a = d >>> 0;
					d -= a;
					d *= a;
					a = d >>> 0;
					d -= a;
					a += d * 4294967296
				}
				return (a >>> 0) * 23283064365386963e-26
			};
		b.version = "Mash 0.9";
		return b
	}

	function a() {
		var a = 0,
			b = 0,
			c = 0,
			d = 1;
		for (var e = arguments.length, f = new Array(e), h = 0; h < e; h++) f[h] = arguments[h];
		var i = f.length > 0 ? f : [new Date()],
			j = new g();
		a = j(" ");
		b = j(" ");
		c = j(" ");
		for (var k = 0; k < i.length; k++) a -= j(i[k]), a < 0 && (a += 1), b -= j(i[k]), b < 0 && (b += 1), c -= j(i[k]), c < 0 && (c += 1);
		j = null;
		var l = function() {
			var e = 2091639 * a + d * 23283064365386963e-26;
			a = b;
			b = c;
			c = e - (d = e | 0);
			return c
		};
		l.version = "Alea 0.9";
		l.args = i;
		return l
	}
}), null);