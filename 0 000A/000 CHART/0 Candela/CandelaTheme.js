__d("CandelaTheme", ["invariant", "CandelaConstants", "CandelaGlobalThemeRegistry", "CandelaSelector", "CandelaStyleDescriptors", "CandelaStyles", "CandelaStyleSheet", "createObjectFrom", "immutable", "nullthrows"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("immutable").Map,
		i = b("immutable").OrderedMap;
	a = b("immutable").Record;
	var j = b("CandelaConstants").PseudoClass,
		k = "auto",
		l = b("createObjectFrom")(b("CandelaConstants").COLOR_KEYWORDS),
		m = "series";

	function n(a) {
		return Object.keys(a).some(function(b) {
			return o(b) && a[b] === k
		})
	}

	function o(a) {
		a = b("CandelaStyles").get(a);
		return a instanceof b("CandelaStyleDescriptors").ColorStyleDescriptor || a instanceof b("CandelaStyleDescriptors").MultipleStyleDescriptor && a.descriptors.some(function(a) {
			return a instanceof b("CandelaStyleDescriptors").ColorStyleDescriptor
		})
	}
	c = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		c.fromJS = function(a) {
			var d = {};
			a.autoColors && (d.autoColors = h(a.autoColors));
			a.colors && (d.colors = i(a.colors.map(function(a) {
				a = Array.isArray(a) ? a : [a, a];
				a[0] in l || g(0, 5822, a[0]);
				return a
			})));
			a.elements && (d.elements = h(a.elements));
			a.styleSheet && (d.styleSheet = b("CandelaStyleSheet").fromJS(a.styleSheet));
			return new c(d)
		};
		var d = c.prototype;
		d.getActiveStyle = function(a) {
			return this.getStyle(a + j.ACTIVE)
		};
		d.getAutoColorForSeries = function(a) {
			return this.$Theme1 && this.$Theme1[a]
		};
		d.getElement = function(a) {
			return b("nullthrows")(this.elements.get(a, b("CandelaGlobalThemeRegistry").get(a).element))
		};
		d.getHoverStyle = function(a) {
			return this.getStyle(a + j.HOVER)
		};
		d.getProximityStyle = function(a) {
			return this.getStyle(a + j.PROXIMITY)
		};
		d.getStyle = function(a) {
			a = b("CandelaSelector").from(a);
			this.$Theme2 || (this.$Theme2 = {});
			Object.prototype.hasOwnProperty.call(this.$Theme2, a) || (this.$Theme2[a] = this.$Theme3(a));
			return this.$Theme2[a]
		};
		d.$Theme3 = function(a) {
			var b = this,
				c = this.styleSheet.computeStyle(a),
				d = null;
			n(c) && (d = this.$Theme4(a));
			Object.keys(c).forEach(function(a) {
				o(a) && (c[a] === k ? c[a] = d : b.colors.has(c[a]) && (c[a] = b.colors.get(c[a])))
			});
			return c
		};
		d.$Theme4 = function(a) {
			var b = null;
			a = a.simpleSelectors.find(function(a) {
				return a.attributes.has(m)
			});
			if (a) {
				a = a.attributes.get(m);
				this.$Theme1 || (this.$Theme1 = this.autoColors.toObject());
				if (!this.$Theme1[a]) {
					var c = Object.keys(this.$Theme1).length - this.autoColors.size;
					c = c % this.colors.size;
					this.$Theme1[a] = Array.from(this.colors.values())[c]
				}
				b = this.$Theme1[a]
			}
			return b
		};
		return c
	}(a({
		autoColors: h(),
		colors: i(),
		elements: h(),
		styleSheet: new(b("CandelaStyleSheet"))()
	}));
	e.exports = c
}), null);