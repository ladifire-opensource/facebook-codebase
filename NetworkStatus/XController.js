__d("XController", ["XControllerURIBuilder", "XRequest"], (function (a, b, c, d, e, f) {
	a = function () {
		function a(a, b) {
			this.$1 = a, this.$2 = b
		}
		var c = a.prototype;
		c.getURIBuilder = function (a) {
			var c = new(b("XControllerURIBuilder"))(this.$1, this.$2);
			if (a) {
				var d = this.getRequest(a);
				Object.keys(this.$2).forEach(function (a) {
					var b = this.$2[a],
						e = "";
					!b.required && !Object.prototype.hasOwnProperty.call(b, "defaultValue") && (e = "Optional");
					e = "get" + e + b.type;
					e = d[e](a);
					if (e == null || Object.prototype.hasOwnProperty.call(b, "defaultValue") && e === b.defaultValue) return;
					b = "set" + b.type;
					c[b](a, e)
				}, this)
			}
			return c
		};
		c.getRequest = function (a) {
			return new(b("XRequest"))(this.$1, this.$2, a)
		};
		a.create = function (b, c) {
			return new a(b, c)
		};
		return a
	}();
	e.exports = a
}), null);