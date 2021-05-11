// DONE
__d("CandelaConstants", ["CandelaPlatformConstants", "getObjectValues", "keyMirror"], (function(a, b, c, d, e, f) {
	"use strict";
	a = 1;
	c = a * 60;
	d = c * 60;
	e = d * 24;
	var g = e * 7,
		h = e * 30,
		i = e * 365,
		j = ">",
		k = "[_a-zA-Z]",
		l = "[_a-zA-Z0-9-]",
		m = "\\s",
		n = '"([^\\n\\r\\f"]*)"',
		o = "'([^\\n\\r\\f']*)'";
	k = "-?" + k + l + "*";
	n = "(" + n + "|" + o + ")";
	o = "\\[" + m + "*(" + k + ")" + m + "*=" + m + "*(" + k + "|" + n + ")" + m + "*\\]";
	n = {
		DAY: e,
		HOUR: d,
		MIN: c,
		MONTH: h,
		SEC: a,
		WEEK: g,
		YEAR: i
	};
	f.TimeInterval = n;
	var p = {
		BOTTOM: "bottom",
		CENTER: "center",
		LEFT: "left",
		RIGHT: "right",
		TOP: "top"
	};
	f.Alignment = p;
	p = {
		ALIGNMENT: "alignment",
		COMPARISON_SHAPE: "comparison-shape",
		DRAGGABLE: "draggable",
		ORIENTATION: "orientation",
		PLACEMENT: "placement",
		SERIES: "series"
	};
	f.Attribute = p;
	var q = (p = b("CandelaPlatformConstants")).CHART_ELEMENT_CLASS_NAME;
	f.CHART_ELEMENT_CLASS_NAME = q;
	q = p.CHART_ELEMENT_SELECTOR;
	f.CHART_ELEMENT_SELECTOR = q;
	q = p.CHART_HOVER_CARD_ANCHOR_CLASS_NAME;
	f.CHART_HOVER_CARD_ANCHOR_CLASS_NAME = q;
	q = p.CHART_HOVER_CARD_ANCHOR_SELECTOR;
	f.CHART_HOVER_CARD_ANCHOR_SELECTOR = q;
	p = {
		BASELINE: "baseline",
		BENCHMARK: "benchmark",
		INTERVAL: "interval",
		MINIMUM_LIMIT: "minimum-limit",
		TARGET: "target"
	};
	f.ClassName = p;
	q = ["aqua", "auto", "black", "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "orange", "purple", "red", "silver", "teal", "white", "yellow"];
	f.COLOR_KEYWORDS = q;
	p = {
		transparent: "rgba(255,255,255,0)"
	};
	f.COLOR_KEYWORD_MAP = p;
	q = {
		BAR: "bar",
		CIRCLE: "circle",
		LINE: "line"
	};
	f.ComparisonShape = q;
	p = "...";
	f.Ellipsis = p;
	q = b("keyMirror")({
		SHAPE_CLICK: null,
		SHAPE_DOWN: null,
		SHAPE_DRAG: null,
		SHAPE_DRAG_END: null,
		SHAPE_DRAG_START: null,
		SHAPE_ENTER: null,
		SHAPE_ENTER_PROXIMITY: null,
		SHAPE_HOVER: null,
		SHAPE_IN_PROXIMITY: null,
		SHAPE_LEAVE: null,
		SHAPE_LEAVE_PROXIMITY: null,
		SHAPE_LONG_PRESS: null,
		SHAPE_UP: null
	});
	f.Event = q;
	p = b("keyMirror")({
		MOUSE: null,
		TOUCH: null
	});
	f.EventSource = p;
	q = b("keyMirror")({
		CLOSEST: null,
		GREATER: null,
		LESS: null
	});
	f.GuideXValueAlignment = q;
	p = {
		ALL_SERIES: "allSeries",
		ANY_SERIES: "anySeries"
	};
	f.MissingDataCondition = p;
	q = {
		LEFT: 0,
		MID: .5,
		RIGHT: 1
	};
	f.NormalizedOutput = q;
	p = {
		HORIZONTAL: "horizontal",
		VERTICAL: "vertical"
	};
	f.Orientation = p;
	q = {
		BOTTOM: "bottom",
		CENTER: "center",
		LEFT: "left",
		NONE: "",
		RIGHT: "right",
		TOP: "top"
	};
	f.Placement = q;
	p = {
		ACTIVE: ":active",
		DENSE: ":dense",
		DRAG: ":drag",
		EQUAL_TO: ":equal-to",
		FIRST_CHILD: ":first-child",
		GREATER_THAN: ":greater-than",
		HIGHLIGHTED: ":highlighted",
		HOVER: ":hover",
		LAST_CHILD: ":last-child",
		LESS_THAN: ":less-than",
		MAX: ":max",
		MIN: ":min",
		MUTED: ":muted",
		NONE: "",
		ONLY_CHILD: ":only-child",
		POINT: ":point",
		PRIMARY: ":primary",
		PROXIMITY: ":proximity",
		REFERENCE: ":reference",
		SECONDARY: ":secondary",
		SEGMENT: ":segment",
		UNAVAILABLE: ":unavailable"
	};
	f.PseudoClass = p;
	q = {
		ATTRIBUTE_RE: new RegExp(o),
		ATTRIBUTES_RE: new RegExp(o, "g"),
		CLASSES_RE: new RegExp("\\." + k, "g"),
		COMBINATORS_RE: new RegExp("" + j + m + "*(?![^\\[]+[\\]])", "g"),
		IDENT_RE: new RegExp(k, "g"),
		PSEUDO_CLASSES_RE: new RegExp(":" + k, "g"),
		S_RE: new RegExp(m),
		TYPE_RE: new RegExp("^" + l + "+")
	};
	f.RE = q;
	p = {
		ANCHOR: "anchor",
		AREA: "area",
		BAR: "bar",
		LINE: "line",
		MARKER: "marker",
		PULSE: "pulse"
	};
	f.RenderAs = p;
	o = {
		CATEGORY: "category",
		CURRENCY: "currency",
		NUMBER: "number",
		PERCENTAGE: "percentage",
		TIME: "time",
		DURATION: "duration"
	};
	f.ScaleType = o;
	j = {
		ANNOTATION: "annotation",
		ANCHOR_ANNOTATION: "annotationanchor",
		AREA: "area",
		AXIS: "axis",
		AXIS_BUCKETMARK: "axisbucketmark",
		AXIS_MARK: "axismark",
		AXIS_TITLE: "axistitle",
		AXIS_RULE: "axisrule",
		BAR: "bar",
		BAR_AREA: "bararea",
		BAR_AREA_LABEL: "bararealabel",
		BAR_GROUP: "bargroup",
		BAR_LABEL: "barlabel",
		CHART: "chart",
		CONTROL_LINE: "controlline",
		DATA: "data",
		GAP: "gap",
		GRID_LINE: "gridline",
		GUIDE: "guide",
		GUIDE_LINE: "guideline",
		GUIDE_MARKER: "guidemarker",
		GUIDE_POINT: "guidepoint",
		LINE: "line",
		LINE_ANNOTATION: "annotationline",
		MARKER_ANNOTATION: "annotationmarker",
		PLOT_AREA: "plotarea",
		POINT: "point",
		POINT_ANNOTATION: "annotationpoint",
		REFERENCE: "reference",
		REFERENCE_LABEL: "referencelabel",
		REFERENCE_LINE: "referenceline",
		REFERENCE_ZONE: "referencezone",
		SANKEY_LINK: "sankeylink",
		SANKEY_NODE: "sankeynode",
		WEDGE: "wedge",
		ZONE: "zone"
	};
	f.ShapeType = j;
	k = {
		BACKGROUND: "background",
		BACKGROUND_COLOR: "backgroundColor",
		BORDER: "border",
		BORDER_BOTTOM: "borderBottom",
		BORDER_BOTTOM_COLOR: "borderBottomColor",
		BORDER_BOTTOM_STYLE: "borderBottomStyle",
		BORDER_BOTTOM_WIDTH: "borderBottomWidth",
		BORDER_COLOR: "borderColor",
		BORDER_LEFT: "borderLeft",
		BORDER_LEFT_COLOR: "borderLeftColor",
		BORDER_LEFT_STYLE: "borderLeftStyle",
		BORDER_LEFT_WIDTH: "borderLeftWidth",
		BORDER_RIGHT: "borderRight",
		BORDER_RIGHT_COLOR: "borderRightColor",
		BORDER_RIGHT_STYLE: "borderRightStyle",
		BORDER_RIGHT_WIDTH: "borderRightWidth",
		BORDER_STYLE: "borderStyle",
		BORDER_TOP: "borderTop",
		BORDER_TOP_COLOR: "borderTopColor",
		BORDER_TOP_STYLE: "borderTopStyle",
		BORDER_TOP_WIDTH: "borderTopWidth",
		BORDER_WIDTH: "borderWidth",
		BOTTOM: "bottom",
		COLOR: "color",
		CONTENT: "content",
		BORDER_RADIUS_HORIZONTAL: "borderRadiusHorizontal",
		BORDER_RADIUS_VERTICAL: "borderRadiusVertical",
		CURSOR: "cursor",
		FILL: "fill",
		FONT: "font",
		FONT_FAMILY: "fontFamily",
		FONT_SIZE: "fontSize",
		FONT_STYLE: "fontStyle",
		FONT_WEIGHT: "fontWeight",
		HEIGHT: "height",
		LEFT: "left",
		MARGIN: "margin",
		MARGIN_BOTTOM: "marginBottom",
		MARGIN_LEFT: "marginLeft",
		MARGIN_RIGHT: "marginRight",
		MARGIN_TOP: "marginTop",
		MAX_HEIGHT: "maxHeight",
		MAX_WIDTH: "maxWidth",
		MIN_HEIGHT: "minHeight",
		MIN_WIDTH: "minWidth",
		OPACITY: "opacity",
		ORIGIN_X: "originX",
		ORIGIN_Y: "originY",
		PADDING: "padding",
		PADDING_BOTTOM: "paddingBottom",
		PADDING_LEFT: "paddingLeft",
		PADDING_RIGHT: "paddingRight",
		PADDING_TOP: "paddingTop",
		POSITION: "position",
		RADIUS: "radius",
		RIGHT: "right",
		ROTATION: "rotation",
		SCALE_X: "scaleX",
		SCALE_Y: "scaleY",
		STROKE: "stroke",
		STROKE_DASHARRAY: "strokeDasharray",
		STROKE_LINECAP: "strokeLinecap",
		STROKE_WIDTH: "strokeWidth",
		TEXT_ALIGN: "textAlign",
		TEXT_OVERFLOW: "textOverflow",
		TOP: "top",
		TRANSFORM: "transform",
		TRANSFORM_ORIGIN: "transformOrigin",
		VISIBILITY: "visibility",
		WHITE_SPACE: "whiteSpace",
		WIDTH: "width",
		Z_INDEX: "zIndex"
	};
	f.Style = k;
	m = .9;
	f.TruncationSafetyFactor = m;
	l = b("getObjectValues")(n).sort(function(a, b) {
		return a - b
	});
	f.TIME_INTERVALS_ASC = l;
	q = b("getObjectValues")(n).sort(function(a, b) {
		return b - a
	});
	f.TIME_INTERVALS_DESC = q;
	p = [a, a * 5, a * 15, a * 30, c, c * 5, c * 15, c * 30, d, d * 2, d * 3, d * 6, d * 12, e, e * 2, e * 3, g, g * 2, h, h * 3, h * 6, i];
	f.TIME_STEPS = p;
	o = {
		ROTATE: "rotate",
		SCALE: "scale",
		SCALE_X: "scaleX",
		SCALE_Y: "scaleY"
	};
	f.TransformFunction = o;
	j = {
		HIDDEN: "hidden",
		VISIBLE: "visible"
	};
	f.Visibility = j
}), null);