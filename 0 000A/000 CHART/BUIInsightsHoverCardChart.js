__d("BUIInsightsHoverCardChart.react", ["BUIInsightsHoverCard.react", 
	"BUIInsightsTheme", "InsightsChartWithHoverCard.react", "React", "immutable", "prop-types"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React");
	a = b("immutable").OrderedSet;
	c = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.render = function() {
			var a = this.props,
				c = a.auxiliaryItems,
				d = a.auxiliaryItemsFactory,
				e = a.children,
				f = a.hoverCardClassName,
				h = a.displayAllSeries,
				i = a.hoverCardBehaviors,
				j = a.hoverCardPosition,
				k = a.isHoverCardActionable,
				l = a.onHoverCardToggle;
			a = babelHelpers.objectWithoutPropertiesLoose(a, ["auxiliaryItems", "auxiliaryItemsFactory", "children", "hoverCardClassName", "displayAllSeries", "hoverCardBehaviors", "hoverCardPosition", "isHoverCardActionable", "onHoverCardToggle"]);
			return g.jsx(b("InsightsChartWithHoverCard.react"), babelHelpers["extends"]({}, a, {
				chart: e,
				position: j,
				theme: b("BUIInsightsTheme"),
				children: g.jsx(b("BUIInsightsHoverCard.react"), {
					auxiliaryItems: c,
					auxiliaryItemsFactory: d,
					behaviors: i,
					className: f,
					displayAllSeries: h,
					isActionable: k,
					onToggle: l
				})
			}))
		};
		return c
	}(g.PureComponent);
	e.exports = c;
	c.propTypes = {
		auxiliaryItems: (d = b("prop-types")).instanceOf(a),
		auxiliaryItemsFactory: d.func,
		children: d.node,
		displayAllSeries: d.bool,
		formatterFactory: d.func,
		hoverCardBehaviors: d.object,
		hoverCardClassName: d.string,
		hoverCardPosition: d.oneOf(["above", "below", "left", "right"]),
		hoverHideDelay: d.number,
		isHoverCardActionable: d.bool,
		items: d.oneOfType([d.instanceOf(a), d.func]).isRequired,
		onHoverCardToggle: d.func,
		targetShapeTypes: b("InsightsChartWithHoverCard.react").propTypes.targetShapeTypes,
		title: d.node,
		titleElementGetter: d.func,
		titleKey: d.string
	}
}), null);