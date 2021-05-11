__d("SpectrumBaseStyleSheetCore", ["cx", "SpectrumStyle"], (function(a, b, c, d, e, f, g) {
	c = {
		areas: {
			colors: [(a = b("SpectrumStyle")).BLUE],
			hover: a.BRIGHT_BLUE,
			hoverFill: "#FFF",
			hoveBarStrokeWidth: 2,
			hoverBubbleStrokeWidth: 3,
			partialOverlayClass: "_190w",
			solidOpacity: .6,
			dashOpacity: .3
		},
		brush: {
			color: a.BLUE_BRUSH,
			handleBars: !1,
			fadeColor: null
		},
		ring: {
			backgroundColor: "#F6F7FA",
			highlightColor: "#467AB0",
			labelFont: {
				fontFamily: "Helvetica",
				fontSize: 12
			},
			metricFont: {
				fontFamily: "Helvetica",
				fontSize: 22,
				fontWeight: "bold"
			},
			textColor: "#677C9F",
			radius: 56,
			width: 12
		},
		columns: {
			borderRadius: 3,
			colors: [a.DARK_BLUE],
			fadeOutOpacity: 1,
			fontFamily: a.FONT_FAMILY,
			fontSize: a.FONT_SIZE_SMALL,
			fontWeight: "bold",
			invalidColor: "#F6F7F8",
			innerMargin: .1,
			innerLabelColor: "#ffffff",
			labelColors: [a.DARK_BLUE],
			labelMargin: 6,
			labelInnerMargin: 12,
			labelOuterMargin: 15,
			outerLabelColor: a.BOLD_BLUE,
			sideBySideMargin: 1
		},
		confidenceInterval: {
			bottomColor: "#AFBDD8",
			opacity: .2,
			topColor: "#5CC074"
		},
		guide: {
			color: a.BRIGHT_BLUE,
			width: 1
		},
		gutter: {
			bottom: 0,
			left: 0,
			middle: 0,
			right: 0,
			top: 0
		},
		lines: {
			colors: [a.DARK_BLUE],
			fadeOutColor: "rgba(0,0,0,0.1)",
			highlightWidths: [4],
			markerColor: "#ffffff",
			markers: !0,
			partialStrokeDashes: [4],
			widths: [2],
			dotRadius: 2,
			dotStrokeWidth: 2,
			width: 2,
			solidOpacity: .8,
			dashOpacity: .8
		},
		markers: {
			lineColor: "rgba(0,0,0,0.15)",
			lineWidth: 1,
			labelColor: a.GRAY,
			highlightColor: a.BRIGHT_BLUE,
			highlightWidth: 3,
			dotColor: "#ffffff",
			fontFamily: a.FONT_FAMILY,
			fontSize: a.FONT_SIZE_SMALL
		},
		plotBands: {
			color: a.LIGHT_ORANGE,
			label: {
				fontColor: a.GRAY,
				fontFamily: a.FONT_FAMILY,
				fontSize: a.FONT_SIZE_SMALL,
				padding: 10
			},
			opacity: .2
		},
		rangeBands: {
			outerPadding: 0,
			padding: 0
		},
		xAxis: {
			axisLineColor: "#cccccc",
			fontFamily: a.FONT_FAMILY,
			fontSize: a.FONT_SIZE_TINY,
			labelColor: a.GRAY,
			lineColor: "#cccccc"
		},
		yAxis: {
			baseLineColor: null,
			distanceBetweenTicks: 45,
			fontFamily: a.FONT_FAMILY,
			fontSize: a.FONT_SIZE_TINY,
			labelColor: a.GRAY,
			lineColor: "rgba(0,0,0,0.05)",
			showRightTicks: !1
		}
	};
	d = c;
	e.exports = d
}), null);