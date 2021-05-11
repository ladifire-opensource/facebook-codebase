__d("BaseRowItem.react", ["React", "BaseRowContext", "BaseView.react", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = {
			expanding: {
				flexBasis: "rj1gh0hx",
				flexGrow: "buofh1pr",
				flexShrink: "g5gj957u"
			},
			expandingWithWrap: {
				flexBasis: "d8ncny3e"
			},
			item: {
				display: "j83agx80",
				flexDirection: "cbu4d94t",
				flexShrink: "pfnyh3mw",
				maxWidth: "d2edcug0",
				minWidth: "hpfvmrgz"
			},
			item_DEPRECATED: {
				maxWidth: "d2edcug0",
				minWidth: "hpfvmrgz"
			}
		},
		i = {
			1: {
				flexBasis: "d8ncny3e"
			},
			2: {
				flexBasis: "hkbzh7o3"
			},
			3: {
				flexBasis: "p8cu3f6v"
			},
			4: {
				flexBasis: "ftbm7790"
			},
			5: {
				flexBasis: "eot2utzp"
			},
			6: {
				flexBasis: "acumsrbk"
			},
			7: {
				flexBasis: "snx44xhi"
			},
			8: {
				flexBasis: "joeu7ti0"
			},
			9: {
				flexBasis: "dswtirgy"
			},
			10: {
				flexBasis: "t9lf192y"
			}
		},
		j = {
			center: {
				alignSelf: "o8rfisnq"
			},
			end: {
				alignSelf: "c4hnarmi"
			},
			start: {
				alignSelf: "nqmvxvec"
			},
			stretch: {
				alignSelf: "ns4p8fja"
			}
		};

	function a(a, c) {
		var d = a.expanding;
		d = d === void 0 ? !1 : d;
		var e = a.useDeprecatedStyles;
		e = e === void 0 ? !1 : e;
		var f = a.verticalAlign,
			k = a.xstyle;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["expanding", "useDeprecatedStyles", "verticalAlign", "xstyle"]);
		var l = g.useContext(b("BaseRowContext")),
			m = l.columns;
		l = l.wrap;
		return g.jsx(b("BaseView.react"), babelHelpers["extends"]({}, a, {
			ref: c,
			xstyle: [e ? h.item_DEPRECATED : h.item, d && h.expanding, d && l !== "none" && h.expandingWithWrap, m > 0 && i[m], f != null && j[f], k]
		}))
	}
	c = g.forwardRef(a);
	e.exports = c
}), null);