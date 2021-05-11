__d("CandelaGlobalThemeRegistry", ["invariant", "CandelaConstants", 
	"CandelaSelector", "CandelaShorthandStyleDescriptors", 
	"CandelaStyles", "createObjectFrom", "forEachObject", "getObjectValues", "immutable", "isEmpty"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h;
	a = b("immutable").Record;
	var i = b("immutable").Set,
		j = b("CandelaConstants").PseudoClass,
		k = b("CandelaConstants").Style,
		l = b("CandelaShorthandStyleDescriptors").ShorthandStyleDescriptor,
		m = /^\[([^=]+)=\"([^\"]+)\"\]$/,
		n = "*",
		o = function() {
			var a = b("createObjectFrom")(b("getObjectValues")(j));
			return function(b) {
				return b in a
			}
		}(),
		p = function() {
			var a = b("createObjectFrom")(b("getObjectValues")(k));
			return function(b) {
				return b in a
			}
		}();
	c = {
		_registry: {},
		get: function(a) {
			var b = this._registry[a];
			b || g(0, 3065, a);
			return b
		},
		register: function(a) {
			var b = this,
				c = a.type;
			this._registry[c] && g(0, 3066, c);
			a.children && a.children.forEach(function(a) {
				b.register(babelHelpers["extends"]({}, a, {
					parentType: c
				}))
			});
			this._registry[c] = q.fromJS(a)
		},
		validateSelector: function(a) {
			this._validateSelector(a)
		},
		validateSelectorEnforce: function(a) {
			this._validateSelector(a, !0)
		},
		validateStyleSheetFragment: function(a, c) {
			var d = this;
			b("forEachObject")(c, function(c, e) {
				c = b("CandelaSelector").from(e);
				d.validateSelector(c);
				c.simpleSelectors.forEach(function(c, e) {
					var f = d._registry[c.type];
					if (!f) return;
					if (e === 0) {
						e = f.styles;
						if (f.element) {
							c = a[c.type] || f.element;
							e = i(Object.keys(c.propTypes))
						}
						b("forEachObject")(e, function(a, b) {
							!f.styles.contains(b)
						})
					}
				})
			})
		},
		_validateSelector: function(a, b) {
			var c = this;
			a.simpleSelectors.forEach(function(d, e) {
				var f = b ? c.get(d.type) : c._registry[d.type];
				if (!f) return;
				d.attributes.forEach(function(a) {
					a = a.match(m);
					a && !f.attributes.contains(a[1])
				});
				d.pseudoClasses.forEach(function(a) {
					!f.pseudoClasses.contains(a)
				});
				a.simpleSelectors.get(e + 1) && f.parentType !== n && f.parentType !== a.simpleSelectors.get(e + 1).type
			})
		}
	};
	var q = function(c) {
		babelHelpers.inheritsLoose(a, c);

		function a() {
			return c.apply(this, arguments) || this
		}
		a.fromJS = function(c) {
			var d = c.attributes,
				e = c.pseudoClasses,
				f = c.styles;
			c = babelHelpers.objectWithoutPropertiesLoose(c, ["attributes", "pseudoClasses", "styles"]);
			d && (c.attributes = i(d.filter(function(a) {
				return !!a
			})));
			if (e) {
				d = e.filter(function(a) {
					return !o(a)
				});
				(h || (h = b("isEmpty")))(d) || g(0, 3067, d.join(", "));
				c.pseudoClasses = i(e)
			}
			if (f) {
				d = f.filter(function(a) {
					return !p(a)
				});
				(h || (h = b("isEmpty")))(d) || g(0, 3068, d.join(", "));
				f.forEach(function(a) {
					a = b("CandelaStyles").get(a);
					a instanceof l && f.push.apply(f, a.descriptors.map(function(a) {
						return a.name
					}))
				});
				c.styles = i(f)
			}
			return new a(c)
		};
		return a
	}(a({
		attributes: i(),
		element: null,
		parentType: null,
		pseudoClasses: i(),
		styles: i(),
		type: null
	}));
	c.register({
		type: n,
		pseudoClasses: b("getObjectValues")(j),
		styles: b("getObjectValues")(k)
	});
	e.exports = c
}), null);