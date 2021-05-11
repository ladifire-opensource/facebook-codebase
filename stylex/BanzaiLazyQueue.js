__d("BanzaiLazyQueue", [], (function (a, b, c, d, e, f) {
	var g = [];
	a = {
		queuePost: function (a, b, c) {
			g.push([a, b, c])
		},
		flushQueue: function () {
			var a = g;
			g = [];
			return a
		}
	};
	e.exports = a
}), null);