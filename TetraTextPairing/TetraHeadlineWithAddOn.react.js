__d("TetraHeadlineWithAddOn.react", ["BaseRow.react", 
	"BaseRowItem.react", "Locale", "React", "TetraText.react", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = {
			addOn: {
				display: "j83agx80",
				flexDirection: "cbu4d94t",
				justifyContent: "taijpn5t",
				marginStart: "h676nmdw"
			},
			nonBreakingSpace: {
				visibility: "kr9hpln1",
				width: "ttbfdpzt"
			}
		},
		i = {
			ltr: {
				direction: "jeutjz8y"
			},
			rtl: {
				direction: "bj87b6r5"
			}
		};

	function a(a, c) {
		var d = a.addOn,
			e = a.children,
			f = a.color,
			j = a.headlineRef,
			k = a.isSemanticHeading,
			l = a.numberOfLines;
		a = a.type;
		return g.jsx(b("TetraText.react"), {
			isSemanticHeading: k,
			ref: c,
			type: a,
			children: g.jsxs(b("BaseRow.react"), {
				verticalAlign: "center",
				xstyle: i[b("Locale").isRTL() ? "rtl" : "ltr"],
				children: [g.jsx(b("BaseRowItem.react"), {
					expanding: !0,
					children: g.jsx(b("TetraText.react"), {
						color: f,
						isSemanticHeading: !1,
						numberOfLines: l,
						ref: j,
						type: a,
						children: e
					})
				}), g.jsx(b("BaseRowItem.react"), {
					verticalAlign: "start",
					xstyle: h.addOn,
					children: g.jsxs(b("BaseRow.react"), {
						verticalAlign: "center",
						children: [g.jsx(b("BaseRowItem.react"), {
							xstyle: h.nonBreakingSpace,
							children: "\xa0"
						}), g.jsx(b("BaseRowItem.react"), {
							children: g.jsx(b("BaseRow.react"), {
								children: d
							})
						})]
					})
				})]
			})
		})
	}
	c = g.forwardRef(a);
	e.exports = c
}), null);