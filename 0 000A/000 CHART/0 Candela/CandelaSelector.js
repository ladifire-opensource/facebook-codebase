__d("CandelaSelector", ["invariant", "CandelaConstants", "immutable", "memoize"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = (a = b("immutable")).List,
		i = a.Map;
	c = a.Record;
	var j = a.Set,
		k = ">",
		l = "*";
	d = b("CandelaConstants").RE;
	var m = d.ATTRIBUTE_RE,
		n = d.ATTRIBUTES_RE,
		o = d.CLASSES_RE,
		p = d.COMBINATORS_RE,
		q = d.PSEUDO_CLASSES_RE,
		r = d.TYPE_RE,
		s = function() {
			var a = {};
			return function(b) {
				if (!Object.prototype.hasOwnProperty.call(a, b)) {
					var c = b.trim().split(p).map(function(a) {
						var b = {
							attributes: {},
							classes: [],
							pseudoClasses: [],
							type: l
						};
						a = a.replace(n, function(a) {
							a = m.exec(a);
							a[0];
							var c = a[1],
								d = a[2],
								e = a[3],
								f = a[4];
							a = a[5];
							e = a == null ? f == null ? d == null ? e : d : f : a;
							e && (b.attributes[c.toLowerCase()] = e);
							return ""
						});
						a = a.replace(o, function(a) {
							b.classes.push(a.slice(1));
							return ""
						});
						a = a.replace(q, function(a) {
							b.pseudoClasses.push(a.toLowerCase().slice(1));
							return ""
						});
						a = a.replace(r, function(a) {
							b.type = a.toLowerCase();
							return ""
						});
						a.length === 0 || g(0, 4387, a);
						return b
					});
					a[b] = t.fromJS(c)
				}
				c = a[b];
				Object.prototype.hasOwnProperty.call(a, c) || (a[c] = c);
				return a[c]
			}
		}(),
		t = function(c) {
			babelHelpers.inheritsLoose(a, c);

			function a(a) {
				a = c.call(this, a) || this;
				a.getSpecificity = b("memoize")(a.getSpecificity.bind(babelHelpers.assertThisInitialized(a)));
				a.toString = b("memoize")(a.toString.bind(babelHelpers.assertThisInitialized(a)));
				return a
			}
			a.from = function(a) {
				return s(a)
			};
			a.fromJS = function(b) {
				b = b.reverse().map(function(a) {
					return u.fromJS(a)
				});
				return new a({
					simpleSelectors: h(b)
				})
			};
			var d = a.prototype;
			d.getSpecificity = function() {
				return this.simpleSelectors.reduce(function(a, b) {
					return a + b.getSpecificity()
				}, 0)
			};
			d.toString = function() {
				return this.simpleSelectors.map(function(a) {
					return a.toString()
				}).reverse().join(k)
			};
			return a
		}(c({
			simpleSelectors: h()
		}));
	e.exports = t;
	var u = function(b) {
		babelHelpers.inheritsLoose(a, b);

		function a() {
			return b.apply(this, arguments) || this
		}
		a.fromJS = function(b) {
			var c = b.attributes,
				d = b.classes,
				e = b.pseudoClasses;
			b = b.type;
			return new a({
				attributes: i(c),
				classes: j(d),
				pseudoClasses: j(e),
				type: b
			})
		};
		var c = a.prototype;
		c.getSpecificity = function() {
			return (this.type !== l) + this.attributes.size * 10 + this.classes.size * 10 + this.pseudoClasses.size * 10
		};
		c.toString = function() {
			return this.type + this.attributes.sort().reduce(function(a, b, c) {
				return a + ("[" + c + '="' + b + '"]')
			}, "") + (this.classes.size ? "." + this.classes.sort().join(".") : "") + (this.pseudoClasses.size ? ":" + this.pseudoClasses.sort().join(":") : "")
		};
		return a
	}(c({
		attributes: i(),
		classes: j(),
		pseudoClasses: j(),
		type: l
	}))
}), null);