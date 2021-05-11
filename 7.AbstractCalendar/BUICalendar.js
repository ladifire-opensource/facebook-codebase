__d("BUICalendar.react", ["cx", "AbstractCalendar.react", "FDSPrivateThemeContext.react", "FDSPrivateThemeUtils", "React"], (function (a, b, c, d, e, f, g) {
	"use strict";
	var h = b("React");
	a = function (a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.render = function () {
			var a = {
				classNames: {
					dayName: "_oww",
					dayNames: "_owx",
					interactive: "_owy",
					monthViewDayGrid: "_owz clearfix",
					root: "_ow-" + (b("FDSPrivateThemeUtils").isGeo(this.context) ? " _75p_" : ""),
					row: "_ow_ clearfix",
					spacer: "_ox0",
					weekNumber: "_3akl",
					weekNumberHeading: "_3akm",
					weekNumbers: "_3akn"
				},
				dayClassNames: {
					day: "_ox5",
					dayInRange: "_ox6",
					dayRangeEndpoint: "_ox7",
					dayRangeLeft: "_ox8",
					dayRangeOnly: "_ox9",
					dayRangeRight: "_oxa",
					dayValid: "_oxb"
				},
				dayInnerClassNames: {
					dayInner: "_oxc",
					dayInnerHighlighted: "_oxd",
					dayInnerHovered: "_2p4z",
					dayInnerSelected: "_oxe"
				}
			};
			return h.jsx(b("AbstractCalendar.react"), babelHelpers["extends"]({}, a, this.props))
		};
		return c
	}(h.Component);
	e.exports = a;
	a.contextType = b("FDSPrivateThemeContext.react");
	c = b("AbstractCalendar.react").propTypes;
	c.classNames;
	c.dayClassNames;
	c.dayInnerClassNames;
	d = babelHelpers.objectWithoutPropertiesLoose(c, ["classNames", "dayClassNames", "dayInnerClassNames"]);
	a.propTypes = babelHelpers["extends"]({}, d)
}), null);