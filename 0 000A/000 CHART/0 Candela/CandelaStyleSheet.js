__d("CandelaStyleSheet", ["CandelaSelector", "CandelaStyles", "forEachObject", "immutable"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("immutable").Map,
		h = b("immutable").OrderedMap;
	a = b("immutable").Record;
	var i = "*";

	function j(a, b) {
		return !a.attributes.size || a.attributes.every(function(a, c) {
			return b != null && b.attributes.get(c) === a
		})
	}

	function k(a, b) {
		return !a.classes.size || a.classes.every(function(a) {
			return b != null && b.classes.contains(a)
		})
	}

	function l(a, b) {
		return !a.pseudoClasses.size || a.pseudoClasses.every(function(a) {
			return b != null && b.pseudoClasses.contains(a)
		})
	}

	function m(a, b) {
		return a.type === i || b != null && a.type === b.type
	}

	function n(a) {
		return g().withMutations(function(c) {
			Object.keys(a).forEach(function(d) {
				c.merge(b("CandelaStyles").get(d).normalize(a[d]))
			})
		})
	}
	c = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		c.fromJS = function(a) {
			var d = h().withMutations(function(c) {
				b("forEachObject")(a, function(a, d) {
					a = n(a);
					d = b("CandelaSelector").from(d);
					c.has(d) && (a = c.get(d).merge(a));
					c.set(d, a)
				})
			});
			return new c({
				styleSheet: d
			})
		};
		var d = c.prototype;
		d.computeStyle = function(a) {
			return this.styleSheet.filter(function(b, c) {
				return c === a ? !0 : c.simpleSelectors.every(function(b, c) {
					c = a.simpleSelectors.get(c);
					return m(b, c) && j(b, c) && k(b, c) && l(b, c)
				})
			}).sortBy(function(a, b) {
				return b
			}, function(a, b) {
				return a.getSpecificity() - b.getSpecificity()
			}).reduce(function(a, b) {
				return a.merge(b)
			}, b("CandelaStyles").getDefaultValues()).toJS()
		};
		d.extend = function(a) {
			return this.mergeDeep(c.fromJS(a))
		};
		return c
	}(a({
		styleSheet: h()
	}));
	e.exports = c
}), null);