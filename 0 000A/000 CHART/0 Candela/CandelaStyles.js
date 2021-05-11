__d("CandelaStyles", ["CandelaConstants", "CandelaPlatformConstants", "CandelaShorthandStyleDescriptors", "CandelaStyleDescriptors", "getObjectValues", "immutable", "isEmpty", "memoize", "memoizeStringOnly", "nullthrows"], (function(a, b, c, d, e, f) {
	"use strict";
	f.get = a;
	f.getDefaultValues = c;
	f.getPropTypes = d;
	var g, h = b("immutable").Map,
		i = b("memoizeStringOnly")(function(a) {
			switch (a) {
				case b("CandelaConstants").Style.BACKGROUND_COLOR:
				case b("CandelaConstants").Style.BORDER_BOTTOM_COLOR:
				case b("CandelaConstants").Style.BORDER_LEFT_COLOR:
				case b("CandelaConstants").Style.BORDER_RIGHT_COLOR:
				case b("CandelaConstants").Style.BORDER_TOP_COLOR:
				case b("CandelaConstants").Style.STROKE:
					return new(b("CandelaStyleDescriptors").ColorStyleDescriptor)(a);
				case b("CandelaConstants").Style.BORDER_BOTTOM_STYLE:
				case b("CandelaConstants").Style.BORDER_LEFT_STYLE:
				case b("CandelaConstants").Style.BORDER_RIGHT_STYLE:
				case b("CandelaConstants").Style.BORDER_TOP_STYLE:
					return new(b("CandelaStyleDescriptors").EnumStyleDescriptor)(a, ["dashed", "dotted", "none", "solid"], {
						defaultValue: "none"
					});
				case b("CandelaConstants").Style.FILL:
					return new(b("CandelaStyleDescriptors").MultipleStyleDescriptor)(a, [new(b("CandelaStyleDescriptors").ColorStyleDescriptor)(a), new(b("CandelaStyleDescriptors").ImageStyleDescriptor)(a)]);
				case b("CandelaConstants").Style.BORDER_BOTTOM_WIDTH:
				case b("CandelaConstants").Style.BORDER_LEFT_WIDTH:
				case b("CandelaConstants").Style.BORDER_RIGHT_WIDTH:
				case b("CandelaConstants").Style.BORDER_TOP_WIDTH:
				case b("CandelaConstants").Style.BORDER_RADIUS_HORIZONTAL:
				case b("CandelaConstants").Style.BORDER_RADIUS_VERTICAL:
				case b("CandelaConstants").Style.HEIGHT:
				case b("CandelaConstants").Style.MARGIN_TOP:
				case b("CandelaConstants").Style.MARGIN_RIGHT:
				case b("CandelaConstants").Style.MARGIN_BOTTOM:
				case b("CandelaConstants").Style.MARGIN_LEFT:
				case b("CandelaConstants").Style.ORIGIN_X:
				case b("CandelaConstants").Style.ORIGIN_Y:
				case b("CandelaConstants").Style.PADDING_TOP:
				case b("CandelaConstants").Style.PADDING_RIGHT:
				case b("CandelaConstants").Style.PADDING_BOTTOM:
				case b("CandelaConstants").Style.PADDING_LEFT:
				case b("CandelaConstants").Style.RADIUS:
				case b("CandelaConstants").Style.ROTATION:
				case b("CandelaConstants").Style.SCALE_X:
				case b("CandelaConstants").Style.SCALE_Y:
				case b("CandelaConstants").Style.STROKE_WIDTH:
				case b("CandelaConstants").Style.WIDTH:
				case b("CandelaConstants").Style.Z_INDEX:
					return new(b("CandelaStyleDescriptors").NumberStyleDescriptor)(a, {
						defaultValue: 0
					});
				case b("CandelaConstants").Style.BOTTOM:
				case b("CandelaConstants").Style.LEFT:
				case b("CandelaConstants").Style.MAX_HEIGHT:
				case b("CandelaConstants").Style.MAX_WIDTH:
				case b("CandelaConstants").Style.MIN_HEIGHT:
				case b("CandelaConstants").Style.MIN_WIDTH:
				case b("CandelaConstants").Style.RIGHT:
				case b("CandelaConstants").Style.TOP:
					return new(b("CandelaStyleDescriptors").NumberStyleDescriptor)(a);
				case b("CandelaConstants").Style.COLOR:
					return new(b("CandelaStyleDescriptors").ColorStyleDescriptor)(a, {
						defaultValue: "black"
					});
				case b("CandelaConstants").Style.CONTENT:
					return new(b("CandelaStyleDescriptors").StringStyleDescriptor)(a);
				case b("CandelaConstants").Style.CURSOR:
					return new(b("CandelaStyleDescriptors").EnumStyleDescriptor)(a, ["default", "move", "pointer", "ew-resize"], {
						defaultValue: "default"
					});
				case b("CandelaConstants").Style.FONT_FAMILY:
					return new(b("CandelaStyleDescriptors").StringStyleDescriptor)(a, {
						defaultValue: b("CandelaPlatformConstants").DEFAULT_FONT_FAMILY
					});
				case b("CandelaConstants").Style.FONT_SIZE:
					return new(b("CandelaStyleDescriptors").NumberStyleDescriptor)(a, {
						defaultValue: 10
					});
				case b("CandelaConstants").Style.FONT_STYLE:
					return new(b("CandelaStyleDescriptors").EnumStyleDescriptor)(a, ["italic", "normal"], {
						defaultValue: "normal"
					});
				case b("CandelaConstants").Style.FONT_WEIGHT:
					return new(b("CandelaStyleDescriptors").EnumStyleDescriptor)(a, ["bold", "normal", "lighter"], {
						defaultValue: "normal"
					});
				case b("CandelaConstants").Style.OPACITY:
					return new(b("CandelaStyleDescriptors").NumberStyleDescriptor)(a, {
						defaultValue: 1
					});
				case b("CandelaConstants").Style.POSITION:
					return new(b("CandelaStyleDescriptors").EnumStyleDescriptor)(a, ["absolute", "auto"], {
						defaultValue: "auto"
					});
				case b("CandelaConstants").Style.STROKE_DASHARRAY:
					return new(b("CandelaStyleDescriptors").StrokeDasharrayStyleDescriptor)(a);
				case b("CandelaConstants").Style.STROKE_LINECAP:
					return new(b("CandelaStyleDescriptors").EnumStyleDescriptor)(a, ["butt", "round", "square"], {
						defaultValue: "square"
					});
				case b("CandelaConstants").Style.TEXT_ALIGN:
					return new(b("CandelaStyleDescriptors").EnumStyleDescriptor)(a, ["center", "left", "right"], {
						defaultValue: "left"
					});
				case b("CandelaConstants").Style.TEXT_OVERFLOW:
					return new(b("CandelaStyleDescriptors").EnumStyleDescriptor)(a, ["none", "clip", "ellipsis"], {
						defaultValue: "none"
					});
				case b("CandelaConstants").Style.VISIBILITY:
					return new(b("CandelaStyleDescriptors").EnumStyleDescriptor)(a, ["hidden", "visible"], {
						defaultValue: "visible"
					});
				case b("CandelaConstants").Style.WHITE_SPACE:
					return new(b("CandelaStyleDescriptors").EnumStyleDescriptor)(a, ["normal", "nowrap"], {
						defaultValue: "nowrap"
					});
				case b("CandelaConstants").Style.BACKGROUND:
					return new(b("CandelaShorthandStyleDescriptors").ShorthandStyleDescriptor)(a, [i(b("CandelaConstants").Style.BACKGROUND_COLOR)]);
				case b("CandelaConstants").Style.BORDER:
					return new(b("CandelaShorthandStyleDescriptors").ShorthandStyleDescriptor)(a, [i(b("CandelaConstants").Style.BORDER_WIDTH), i(b("CandelaConstants").Style.BORDER_STYLE), i(b("CandelaConstants").Style.BORDER_COLOR)]);
				case b("CandelaConstants").Style.BORDER_BOTTOM:
					return new(b("CandelaShorthandStyleDescriptors").ShorthandStyleDescriptor)(a, [i(b("CandelaConstants").Style.BORDER_BOTTOM_WIDTH), i(b("CandelaConstants").Style.BORDER_BOTTOM_STYLE), i(b("CandelaConstants").Style.BORDER_BOTTOM_COLOR)]);
				case b("CandelaConstants").Style.BORDER_COLOR:
					return new(b("CandelaShorthandStyleDescriptors").BoxShorthandStyleDescriptor)(a, [i(b("CandelaConstants").Style.BORDER_TOP_COLOR), i(b("CandelaConstants").Style.BORDER_RIGHT_COLOR), i(b("CandelaConstants").Style.BORDER_BOTTOM_COLOR), i(b("CandelaConstants").Style.BORDER_LEFT_COLOR)]);
				case b("CandelaConstants").Style.BORDER_LEFT:
					return new(b("CandelaShorthandStyleDescriptors").ShorthandStyleDescriptor)(a, [i(b("CandelaConstants").Style.BORDER_LEFT_WIDTH), i(b("CandelaConstants").Style.BORDER_LEFT_STYLE), i(b("CandelaConstants").Style.BORDER_LEFT_COLOR)]);
				case b("CandelaConstants").Style.BORDER_RIGHT:
					return new(b("CandelaShorthandStyleDescriptors").ShorthandStyleDescriptor)(a, [i(b("CandelaConstants").Style.BORDER_RIGHT_WIDTH), i(b("CandelaConstants").Style.BORDER_RIGHT_STYLE), i(b("CandelaConstants").Style.BORDER_RIGHT_COLOR)]);
				case b("CandelaConstants").Style.BORDER_STYLE:
					return new(b("CandelaShorthandStyleDescriptors").BoxShorthandStyleDescriptor)(a, [i(b("CandelaConstants").Style.BORDER_TOP_STYLE), i(b("CandelaConstants").Style.BORDER_RIGHT_STYLE), i(b("CandelaConstants").Style.BORDER_BOTTOM_STYLE), i(b("CandelaConstants").Style.BORDER_LEFT_STYLE)]);
				case b("CandelaConstants").Style.BORDER_TOP:
					return new(b("CandelaShorthandStyleDescriptors").ShorthandStyleDescriptor)(a, [i(b("CandelaConstants").Style.BORDER_TOP_WIDTH), i(b("CandelaConstants").Style.BORDER_TOP_STYLE), i(b("CandelaConstants").Style.BORDER_TOP_COLOR)]);
				case b("CandelaConstants").Style.BORDER_WIDTH:
					return new(b("CandelaShorthandStyleDescriptors").BoxShorthandStyleDescriptor)(a, [i(b("CandelaConstants").Style.BORDER_TOP_WIDTH), i(b("CandelaConstants").Style.BORDER_RIGHT_WIDTH), i(b("CandelaConstants").Style.BORDER_BOTTOM_WIDTH), i(b("CandelaConstants").Style.BORDER_LEFT_WIDTH)]);
				case b("CandelaConstants").Style.FONT:
					return new(b("CandelaShorthandStyleDescriptors").FontShorthandStyleDescriptor)(a, [i(b("CandelaConstants").Style.FONT_STYLE), i(b("CandelaConstants").Style.FONT_WEIGHT), i(b("CandelaConstants").Style.FONT_SIZE), i(b("CandelaConstants").Style.FONT_FAMILY)]);
				case b("CandelaConstants").Style.MARGIN:
					return new(b("CandelaShorthandStyleDescriptors").BoxShorthandStyleDescriptor)(a, [i(b("CandelaConstants").Style.MARGIN_TOP), i(b("CandelaConstants").Style.MARGIN_RIGHT), i(b("CandelaConstants").Style.MARGIN_BOTTOM), i(b("CandelaConstants").Style.MARGIN_LEFT)]);
				case b("CandelaConstants").Style.PADDING:
					return new(b("CandelaShorthandStyleDescriptors").BoxShorthandStyleDescriptor)(a, [i(b("CandelaConstants").Style.PADDING_TOP), i(b("CandelaConstants").Style.PADDING_RIGHT), i(b("CandelaConstants").Style.PADDING_BOTTOM), i(b("CandelaConstants").Style.PADDING_LEFT)]);
				case b("CandelaConstants").Style.TRANSFORM:
					return new(b("CandelaShorthandStyleDescriptors").ShorthandStyleDescriptor)(a, [new(b("CandelaShorthandStyleDescriptors").TransformFunctionShorthandStyleDescriptor)(b("CandelaConstants").TransformFunction.ROTATE, [i(b("CandelaConstants").Style.ROTATION)]), new(b("CandelaShorthandStyleDescriptors").TransformFunctionShorthandStyleDescriptor)(b("CandelaConstants").TransformFunction.SCALE, [i(b("CandelaConstants").Style.SCALE_X), i(b("CandelaConstants").Style.SCALE_Y)]), new(b("CandelaShorthandStyleDescriptors").TransformFunctionShorthandStyleDescriptor)(b("CandelaConstants").TransformFunction.SCALE_X, [i(b("CandelaConstants").Style.SCALE_X)]), new(b("CandelaShorthandStyleDescriptors").TransformFunctionShorthandStyleDescriptor)(b("CandelaConstants").TransformFunction.SCALE_Y, [i(b("CandelaConstants").Style.SCALE_Y)])]);
				case b("CandelaConstants").Style.TRANSFORM_ORIGIN:
					return new(b("CandelaShorthandStyleDescriptors").ShorthandStyleDescriptor)(a, [i(b("CandelaConstants").Style.ORIGIN_X), i(b("CandelaConstants").Style.ORIGIN_Y)])
			}
		}),
		j = b("memoizeStringOnly")(function(a) {
			return h().withMutations(function(c) {
				var d = i(a);
				d && (d instanceof b("CandelaShorthandStyleDescriptors").ShorthandStyleDescriptor ? d.descriptors.forEach(function(a) {
					c.merge(j(a.name))
				}) : d.defaultValue != null && c.set(d.name, d.defaultValue))
			})
		}),
		k = b("memoizeStringOnly")(function(a) {
			var c = {};
			a = i(a);
			if (a) {
				if (a instanceof b("CandelaShorthandStyleDescriptors").ShorthandStyleDescriptor) return Object.assign.apply(Object, [c].concat(a.descriptors.map(function(a) {
					return k(a.name)
				})));
				c[a.name] = a.propType
			}
			return c
		}),
		l = b("memoize")(function() {
			return h().withMutations(function(a) {
				b("getObjectValues")(b("CandelaConstants").Style).forEach(function(b) {
					return a.merge(j(b))
				})
			})
		}),
		m = b("memoize")(function() {
			return Object.assign.apply(Object, [{}].concat(b("getObjectValues")(b("CandelaConstants").Style).map(function(a) {
				return k(a)
			})))
		});

	function a(a) {
		return b("nullthrows")(i(a))
	}

	function c() {
		for (var a = arguments.length, c = new Array(a), d = 0; d < a; d++) c[d] = arguments[d];
		return (g || (g = b("isEmpty")))(c) ? l() : h().withMutations(function(a) {
			c.forEach(function(b) {
				return a.merge(j(b))
			})
		})
	}

	function d() {
		for (var a = arguments.length, c = new Array(a), d = 0; d < a; d++) c[d] = arguments[d];
		return (g || (g = b("isEmpty")))(c) ? m() : Object.assign.apply(Object, [{}].concat(c.map(function(a) {
			return k(a)
		})))
	}
}), null);