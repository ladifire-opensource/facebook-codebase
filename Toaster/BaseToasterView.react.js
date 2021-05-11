__d("BaseToasterView.react", ["CometToasterStateManager", "React"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = b("CometToasterStateManager").getInstance();
	a = function (a) {
		babelHelpers.inheritsLoose(b, a);

		function b() {
			var b, c;
			for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
			return (b = c = a.call.apply(a, [this].concat(e)) || this, c.state = {
				visibleToasts: []
			}, b) || babelHelpers.assertThisInitialized(c)
		}
		b.getDerivedStateFromProps = function (a, b) {
			b = b != null ? b.visibleToasts.slice(0, a.maxVisible) : [];
			var c = 0,
				d = a.filterToasts,
				e = a.toasterState,
				f = {},
				g = d != null ? Object.keys(e).filter(function (a) {
					var b, c = e[a];
					f[a] = c;
					var g = c == null ? void 0 : c.shown;
					b = c == null ? void 0 : (b = c.value) == null ? void 0 : (b = b.type) == null ? void 0 : b.name;
					if (c == null || b == null) return !0;
					if (d.has(b) && !g) {
						h.expire(a);
						return !1
					}
				}) : Object.keys(e),
				i = b.reduce(function (a, b) {
					b != null && a.add(b.id);
					return a
				}, new Set()),
				j = 0;
			while (c < a.maxVisible) {
				var k = b[c],
					l = Object.keys(f).length > 0 ? f : a.toasterState;
				if (k != null) {
					l = Object.prototype.hasOwnProperty.call(l, k.id);
					if (l) {
						l = e[k.id];
						b[c] = {
							expired: l.expired,
							id: l.id,
							toast: l.value
						};
						c++;
						continue
					} else b[c] = null
				}
				k = null;
				while (k == null && j < g.length) {
					l = g[j++];
					var m = i.has(l);
					m || (k = a.toasterState[l])
				}
				k != null && (b[c] = {
					expired: k.expired,
					id: k.id,
					toast: k.value
				});
				c++
			}
			return {
				visibleToasts: b
			}
		};
		var c = b.prototype;
		c.render = function () {
			var a = this;
			return g.jsx("ul", {
				className: this.props.className,
				children: this.state.visibleToasts.map(function (b, c) {
					return b != null ? a.props.children(b.toast, b.id, b.expired, c) : null
				})
			})
		};
		return b
	}(g.PureComponent);
	e.exports = a;
	a.defaultProps = {
		maxVisible: 1
	}
}), null);