__d("MWXMAComponent.bs", ["MWXMAComponentVerticalLayout.bs", "MWXMAContent.bs", "cr:1946105", "react"], (function(a, b, c, d, e, f) {
	"use strict";
	var g, h = g || b("react");

	function a(a) {
		var c = a.xma,
			d = a.first,
			e = a.last,
			f = a.outgoing,
			g = a.dispatch,
			i = a.hasText,
			j = a.disableDefaultAction;
		a = a.disableLinks;
		i = i !== void 0 ? i : !1;
		var k = a !== void 0 ? a : !1;
		switch (c.TAG | 0) {
			case 0:
				var l = c._2,
					m = c._1;
				return h.jsx(b("cr:1946105").make, {
					items: c._0.map(function(a, c) {
						return h.jsx(b("MWXMAContent.bs").make, {
							content: a,
							messageId: l,
							dispatch: g,
							attribution: m,
							isHscroll: !0,
							disableDefaultAction: j,
							disableLinks: k
						}, c.toString())
					}),
					hasText: i
				});
			case 1:
				return h.jsx(b("MWXMAComponentVerticalLayout.bs").make, {
					outgoing: f,
					first: d,
					last: e,
					children: h.jsx(b("MWXMAContent.bs").make, {
						content: c._0,
						messageId: c._2,
						dispatch: g,
						attribution: c._1,
						isHscroll: !1,
						disableDefaultAction: j,
						disableLinks: k
					}),
					hasText: i
				});
			case 2:
				return h.jsx(b("MWXMAComponentVerticalLayout.bs").make, {
					outgoing: f,
					first: d,
					last: e,
					children: h.jsx(b("MWXMAContent.bs").make, {
						content: c._0,
						messageId: c._2,
						dispatch: g,
						attribution: c._1,
						isHscroll: !1,
						disableDefaultAction: j,
						disableLinks: k
					}),
					centered: !0,
					hasText: i
				})
		}
	}
	c = b("cr:1946105");
	d = a;
	f.$ChatGeminiIncomingMessageHorizontalLayout$OR$MWXMAComponentHorizontalLayout$requireCond = b("cr:1946105");
	f.HorizontalLayout = c;
	f.make = d
}), null);