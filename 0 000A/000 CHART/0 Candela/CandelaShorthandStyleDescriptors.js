__d("CandelaShorthandStyleDescriptors", ["invariant", "CandelaStyleDescriptors", "nullthrows"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = /\s*,\s*/,
		i = /^((?:(?:normal|bold|italic)\s+)*)((?:\d*\.)?\d+)[a-z%]*(?:\/[^\s]+)?\s+(.+)$/,
		j = /\s+/;
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c(b, c, d) {
			d = babelHelpers["extends"]({}, d, {
				descriptors: c,
				name: b
			});
			return a.call(this, b, d) || this
		}
		var d = c.prototype;
		d.normalize = function(a) {
			if (a == null) return {};
			if (this.descriptors.some(function(b) {
					b = b.name;
					return Object.prototype.hasOwnProperty.call(a, b)
				})) return a;
			var c = this.parse(a);
			c !== null || g(0, 2023, a, this.name);
			return this.descriptors.reduce(function(a, d, e) {
				return Object.assign(a, d.normalize(b("nullthrows")(c)[e]))
			}, {})
		};
		d.parse = function(b) {
			typeof b === "string" && (b = b.trim().split(j));
			if (Array.isArray(b)) {
				b.length !== this.descriptors.length && (b = this.descriptors.map(function(a) {
					return b.find(function(b) {
						return a.parse(b) !== null
					})
				}));
				if (b.some(function(a) {
						return a !== null
					})) return b
			}
			return a.prototype.parse.call(this, b)
		};
		return c
	}(b("CandelaStyleDescriptors").StyleDescriptor);
	f.ShorthandStyleDescriptor = a;
	c = function(a) {
		babelHelpers.inheritsLoose(b, a);

		function b(b, c, d) {
			c.length === 4 || g(0, 2903, b, c.length);
			return a.call(this, b, c, d) || this
		}
		var c = b.prototype;
		c.parse = function(b) {
			typeof b === "string" && (b = b.trim().split(j));
			typeof b === "number" && (b = [b]);
			Array.isArray(b) && (b.length === 1 ? b = [b[0], b[0], b[0], b[0]] : b.length === 2 ? b = b.concat(b) : b.length === 3 && (b = b.concat(b[1])));
			return a.prototype.parse.call(this, b)
		};
		return b
	}(a);
	f.BoxShorthandStyleDescriptor = c;
	d = function(a) {
		babelHelpers.inheritsLoose(b, a);

		function b() {
			return a.apply(this, arguments) || this
		}
		var c = b.prototype;
		c.parse = function(b) {
			if (typeof b === "string") {
				var c = b.trim().match(i);
				if (!c) return null;
				var d = ["italic", "bold"].map(function(a) {
					return c[1] && c[1].includes(a) ? a : "normal"
				});
				b = d.concat(c.slice(2))
			}
			return a.prototype.parse.call(this, b)
		};
		return b
	}(a);
	f.FontShorthandStyleDescriptor = d;
	e = function(a) {
		babelHelpers.inheritsLoose(b, a);

		function b(b, c, d) {
			c = a.call(this, b, c, d) || this;
			c.$TransformFunctionShorthandStyleDescriptor1 = new RegExp(b + "\\(([^)]+)\\)");
			return c
		}
		var c = b.prototype;
		c.parse = function(b) {
			if (typeof b === "string") {
				var c = b.match(this.$TransformFunctionShorthandStyleDescriptor1);
				if (!c) return null;
				b = c[1].trim().split(h)
			}
			return a.prototype.parse.call(this, b)
		};
		return b
	}(a);
	f.TransformFunctionShorthandStyleDescriptor = e
}), null);