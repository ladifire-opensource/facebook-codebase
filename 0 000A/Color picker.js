__d("MWChatCustomizeThemeDialog.bs", ["fbt", "CometAspectRatioContainer.react", 
	"CometCardedDialog.react", "CometPressable.react", "CometSimpleGrid.react", "MWTheme.bs", "MWUITheme.bs", 
	"MWUIUpdateThreadTheme.bs", "ODS", "React", "bs_caml_int32", "bs_caml_int64", "bs_curry", "bs_int64", "stylex"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h, i = b("React"),
		j = {
			container: {
				maxWidth: "rf5wgz6l"
			},
			themeOptionContainer: {
				display: "j83agx80",
				justifyContent: "taijpn5t",
				alignItems: "bp9cbjyn",
				minHeight: "sn7ne77z",
				borderTopStartRadius: "r2p0xcnp",
				borderTopEndRadius: "awiboybv",
				borderBottomEndRadius: "ln86oy22",
				borderBottomStartRadius: "cnk8o6mn"
			},
			themeOption: {
				borderTopStartRadius: "qnris465",
				borderTopEndRadius: "hcy7w5mv",
				borderBottomEndRadius: "tkjn4zsp",
				borderBottomStartRadius: "ioi4xa05",
				paddingTop: "cxgpxx05",
				paddingEnd: "dflh9lhu",
				paddingBottom: "sj5x9vvc",
				paddingStart: "scb9dxdr"
			},
			themeOptionSelected: {
				backgroundColor: "ckkva4tx"
			},
			themeIcon: {
				width: "tmrshh9y",
				height: "m7zwrmfr",
				borderTopStartRadius: "s45kfl79",
				borderTopEndRadius: "emlxlaya",
				borderBottomEndRadius: "bkmhp75w",
				borderBottomStartRadius: "spb7xbtv"
			}
		};

	function k(a) {
		var c = function(a) {
				if (a.TAG) return a._0.label;
				else return a._0.label
			},
			d = b("MWTheme.bs").isGradient(a) ? "gradient" : "solid color";
		return g._("Ch\u1ecdn ch\u1ee7 \u0111\u1ec1 {theme type} {theme choice}", [g._param("theme type", d), g._param("theme choice", c(a))])
	}

	function l(a) {
		var b = function(a) {
			if (a.TAG) return a._0.label;
			else return a._0.label
		};
		return "mw_theme_option:" + b(a)
	}

	function m(a, c) {
		var d = b("bs_caml_int32").div(100, a.length - 1 | 0);
		c = c ? a : a.slice(0).reverse();
		a = c.map(function(a, b) {
			b = Math.imul(b, d);
			return "" + a + " " + b + "%"
		}).join(",");
		return "radial-gradient(circle at center 75%, " + a + ")"
	}

	function n(a) {
		if (!a.TAG) return {
			backgroundColor: a._0.color
		};
		a = a._0;
		var b = m(a.colors, a.reverse);
		return {
			backgroundColor: a.fallback,
			backgroundImage: b
		}
	}

	function a(a) {
		return a._0.id
	}

	function c(a) {
		var c = a.onClose;
		a = a.themes;
		var d = b("bs_curry")._1(b("MWUITheme.bs").useTheme, void 0),
			e = b("MWTheme.bs").usePreview(void 0),
			f = e[0],
			m = b("MWTheme.bs").useTheme(void 0),
			o = b("bs_curry")._1(b("MWUIUpdateThreadTheme.bs").useHook, void 0);
		e = i.useCallback(function(a) {
			b("bs_caml_int64").neq(d._0.id, m._0.id) && b("bs_curry")._1(o, m._0.id);
			return b("bs_curry")._1(c, void 0)
		}, [m, c]);
		var p = g._("M\u00e0u");
		return i.jsx(b("CometCardedDialog.react"), {
			title: p,
			withCloseButton: !0,
			onClose: e,
			children: i.jsx("div", {
				children: i.jsx(b("CometSimpleGrid.react"), {
					children: a.map(function(a) {
						var c = a._0.id,
							d = n(a),
							e = b("bs_caml_int64").eq(c, m._0.id);
						return i.jsx(b("CometAspectRatioContainer.react"), {
							aspectRatio: 1,
							children: i.jsx("div", {
								children: i.jsx(b("CometPressable.react"), {
									"aria-label": k(a),
									testid: l(a),
									onPress: function(c) {
										b("ODS").bumpEntityKey(3185, "mwchat_settings", "preview_thead_theme");
										return b("bs_curry")._1(f, a)
									},
									xstyle: function(a) {
										return [j.themeOption, e ? j.themeOptionSelected : !1]
									},
									children: i.jsx("div", {
										className: (h || (h = b("stylex")))(j.themeIcon),
										style: d
									})
								}),
								className: h(j.themeOptionContainer)
							})
						}, b("bs_int64").to_string(c))
					}),
					minWidth: 78,
					justify: "center"
				}),
				className: (h || (h = b("stylex")))(j.container)
			}),
			size: "content"
		})
	}
	d = c;
	f.styles = j;
	f.themeAccessibilityLabel = k;
	f.getTestIdForTheme = l;
	f.radialGradient = m;
	f.getThemeStyle = n;
	f.getThemeId = a;
	f.make = d
}), null);