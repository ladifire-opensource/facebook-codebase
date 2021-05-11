__d("CandelaHoverCard.react", ["cx", "CandelaConstants", "React", "ReactDOM", "prop-types"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("React"),
		i = b("CandelaConstants").CHART_HOVER_CARD_ANCHOR_SELECTOR;
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var c, d;
			for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++) f[g] = arguments[g];
			return (c = d = a.call.apply(a, [this].concat(f)) || this, d.updatePosition = function() {
				var a = d.refs.dialog;
				a && a.layer.updatePosition()
			}, d.$1 = function() {
				var a = d.props.chartNode;
				a = a && b("ReactDOM").findDOMNode(a);
				return a instanceof HTMLElement ? a.querySelector(i) : null
			}, c) || babelHelpers.assertThisInitialized(d)
		}
		var d = c.prototype;
		d.componentDidMount = function() {
			var a = this.props,
				b = a.shown;
			a = a.onToggle;
			b && (a && a(b))
		};
		d.componentDidUpdate = function(a) {
			var b = this.props,
				c = b.shown;
			b = b.onToggle;
			a.shown !== c && (b && b(c))
		};
		d.render = function() {
			var a = this.props,
				b = a.behaviors,
				c = a.children,
				d = a.contextualDialogLayer,
				e = a.isActionable,
				f = a.position,
				g = a.offsetX,
				i = a.offsetY,
				j = a.onMouseEnter,
				k = a.onMouseLeave;
			a = a.shown;
			if (!a) return null;
			a = f === "above" || f === "below" ? "center" : null;
			var l = this.props.contextRef || this.$1;
			return h.jsx(d, {
				alignment: a,
				autoFocus: !1,
				behaviors: b,
				contextRef: l,
				focusContextOnHide: !1,
				hasActionableContext: !1,
				hideOnEscape: !1,
				offsetX: g,
				offsetY: i,
				position: f,
				ref: "dialog",
				shown: !0,
				children: h.jsx("div", {
					className: (e ? "_bzg" : "") + " _bzh",
					onMouseEnter: j,
					onMouseLeave: k,
					children: c
				})
			})
		};
		return c
	}(h.PureComponent);
	a.propTypes = {
		behaviors: (c = b("prop-types")).object,
		chartNode: c.object,
		children: c.node,
		contextualDialogLayer: c.func.isRequired,
		isActionable: c.bool,
		offsetX: c.number,
		offsetY: c.number,
		onMouseEnter: c.func,
		onMouseLeave: c.func,
		onToggle: c.func,
		position: c.oneOf(["above", "below", "left", "right"]),
		shown: c.bool
	};
	a.defaultProps = {
		isActionable: !1,
		position: "above",
		shown: !1
	};
	e.exports = a
}), null);