__d("ErrorMetadata", [], (function (a, b, c, d, e, f) {
	"use strict";
	var g = [];
	a = function () {
		function a() {
			this.metadata = [].concat(g)
		}
		var b = a.prototype;
		b.addEntries = function () {
			var a;
			(a = this.metadata).push.apply(a, arguments);
			return this
		};
		b.addEntry = function (a, b, c) {
			this.metadata.push([a, b, c]);
			return this
		};
		b.isEmpty = function () {
			return this.metadata.length === 0
		};
		b.clearEntries = function () {
			this.metadata = []
		};
		b.format = function () {
			var a = [];
			this.metadata.forEach(function (b) {
				if (b && b.length) {
					b = b.map(function (a) {
						return a != null ? String(a).replace(/:/g, "_") : ""
					}).join(":");
					a.push(b)
				}
			});
			return a
		};
		b.getAll = function () {
			return this.metadata
		};
		a.addGlobalMetadata = function (a, b, c) {
			g.push([a, b, c])
		};
		a.getGlobalMetadata = function () {
			return g
		};
		a.unsetGlobalMetadata = function (a, b) {
			g = g.filter(function (c) {
				return !(Array.isArray(c) && c[0] === a && c[1] === b)
			})
		};
		return a
	}();
	e.exports = a
}), null);