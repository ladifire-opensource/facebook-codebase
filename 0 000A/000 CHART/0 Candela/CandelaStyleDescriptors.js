__d("CandelaStyleDescriptors", ["invariant", "CandelaConstants", "CandelaPlatformConstants", "React", "prop-types"], (function(a, b, c, d, e, f, g) {
	"use strict";
	b("React");
	var h = b("CandelaConstants").COLOR_KEYWORDS,
		i = b("CandelaConstants").COLOR_KEYWORD_MAP,
		j = b("CandelaPlatformConstants").IMAGE_PATTERN,
		k = /^(?:rgb|hsl)\((?:\d+%?,\s?){2}\d+%?\)|(?:rgb|hsl)a\((?:\d+%?,\s?){3}(?:\d?\.)?\d+\)|#(?:[a-f0-9]{3}|[a-f0-9]{6}|[a-f0-9]{8})$/,
		l = /^(-?(?:\d*\.)?\d+)[a-z%]*$/,
		m = /-?(?:\d*\.)?\d+/g,
		n = /^url\(([\'\"])?([^\'\"]+)\1\)$/;
	a = function() {
		function a(a, c) {
			c = babelHelpers["extends"]({
				propType: b("prop-types").any
			}, c, {
				name: a
			}), Object.assign(this, c)
		}
		var c = a.prototype;
		c.normalize = function(a) {
			if (a == null) return {};
			if (Object.prototype.hasOwnProperty.call(a, this.name)) return a;
			var b = this.parse(a);
			b !== null || g(0, 2023, a, this.name);
			return a = {}, a[this.name] = b, a
		};
		c.parse = function(a) {
			return null
		};
		return a
	}();
	c = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c(c, d) {
			d = babelHelpers["extends"]({
				propType: b("prop-types").string
			}, d);
			return a.call(this, c, d) || this
		}
		var d = c.prototype;
		d.parse = function(b) {
			if (typeof b === "string") {
				b = b.trim();
				var c = !1;
				if (h.indexOf(b) !== -1) c = !0;
				else if (Object.prototype.hasOwnProperty.call(i, b)) c = !0, b = i[b];
				else {
					var d = b.toLowerCase().match(k);
					d && (c = !0, b = d[0])
				}
				if (c) return b
			}
			return a.prototype.parse.call(this, b)
		};
		return c
	}(a);
	d = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c(c, d, e) {
			e = babelHelpers["extends"]({
				propType: b("prop-types").oneOf(d)
			}, e, {
				values: d
			});
			return a.call(this, c, e) || this
		}
		var d = c.prototype;
		d.parse = function(b) {
			if (typeof b === "string") {
				b = b.trim();
				var c = this.values.includes(b);
				if (c) return b
			}
			return a.prototype.parse.call(this, b)
		};
		return c
	}(a);
	f = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c(c, d) {
			d = babelHelpers["extends"]({
				propType: b("prop-types").object
			}, d);
			return a.call(this, c, d) || this
		}
		var d = c.prototype;
		d.parse = function(b) {
			var c = !1;
			if (typeof b === "string") {
				var d = b.trim().match(n);
				d && (c = !0, b = d[2])
			}
			b && typeof b === "object" && (c = Object.prototype.hasOwnProperty.call(b, "sprited"));
			return j && c ? new j(b) : a.prototype.parse.call(this, b)
		};
		return c
	}(a);
	var o = function(c) {
			babelHelpers.inheritsLoose(a, c);

			function a(a, d) {
				d = babelHelpers["extends"]({
					propType: b("prop-types").number
				}, d);
				return c.call(this, a, d) || this
			}
			var d = a.prototype;
			d.parse = function(a) {
				if (typeof a === "string") {
					var b = a.trim().match(l);
					b && (a = Number(b[1]))
				}
				return typeof a === "number" ? a : c.prototype.parse.call(this, a)
			};
			return a
		}(a),
		p = function(c) {
			babelHelpers.inheritsLoose(a, c);

			function a(a, d) {
				d = babelHelpers["extends"]({
					defaultValue: "",
					propType: b("prop-types").string
				}, d);
				return c.call(this, a, d) || this
			}
			var d = a.prototype;
			d.parse = function(a) {
				return typeof a === "string" ? a : c.prototype.parse.call(this, a)
			};
			return a
		}(a),
		q = function(c) {
			babelHelpers.inheritsLoose(a, c);

			function a(a, d) {
				d = babelHelpers["extends"]({
					propType: b("prop-types").arrayOf(b("prop-types").number)
				}, d);
				return c.call(this, a, d) || this
			}
			var d = a.prototype;
			d.parse = function(a) {
				if (typeof a === "string") {
					var b = a.match(m);
					b && (a = b.map(function(a) {
						return Number(a)
					}))
				}
				typeof a === "number" && (a = [a]);
				if (Array.isArray(a)) {
					a.length % 2 && (a = a.concat(a));
					if (a.every(function(a) {
							return typeof a === "number"
						})) return a
				}
				return c.prototype.parse.call(this, a)
			};
			return a
		}(a),
		r = function(c) {
			babelHelpers.inheritsLoose(a, c);

			function a(a, d, e) {
				var f = d.map(function(a) {
					return a.propType
				});
				e = babelHelpers["extends"]({
					propType: b("prop-types").oneOfType(f)
				}, e, {
					descriptors: d,
					name: a
				});
				return c.call(this, a, e) || this
			}
			var d = a.prototype;
			d.normalize = function(a) {
				var b = this.descriptors.find(function(b) {
					return b.parse(a) !== null
				});
				return b ? b.normalize(a) : c.prototype.normalize.call(this, a)
			};
			return a
		}(a);
	e.exports = {
		ColorStyleDescriptor: c,
		EnumStyleDescriptor: d,
		ImageStyleDescriptor: f,
		MultipleStyleDescriptor: r,
		NumberStyleDescriptor: o,
		StringStyleDescriptor: p,
		StrokeDasharrayStyleDescriptor: q,
		StyleDescriptor: a
	}
}), null);