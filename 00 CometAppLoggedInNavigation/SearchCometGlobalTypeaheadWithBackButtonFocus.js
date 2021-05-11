__d("SearchCometGlobalTypeaheadWithBackButtonFocus.react", ["CometPlaceholder.react", 
	"CometTypeaheadBackButton.react", "Locale", "React", "SearchCometGlobalTypeaheadGlimmer.react", 
	"deferredLoadComponent", "requireDeferredForDisplay", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React"),
		i = b("deferredLoadComponent")(b("requireDeferredForDisplay")("SearchCometGlobalTypeahead.react")),
		j = b("Locale").isRTL();

	function a(a) {
		var c = a.children,
			d = a.inputBlurredXStyle,
			e = a.inputFocusedXStyle,
			f = a.onBlur,
			k = a.onClose,
			l = a.onFocus,
			m = a.onOpen;
		a = a.queryString;
		var n = h.useState(!1),
			o = n[0],
			p = n[1];
		n = h.useState(!1);
		var q = n[0],
			r = n[1];
		n = h.useCallback(function () {
			r(!1), f && f()
		}, [f]);
		var s = h.useCallback(function () {
				p(!1), k && k()
			}, [k]),
			t = h.useCallback(function () {
				r(!0), l && l()
			}, [l]),
			u = h.useCallback(function () {
				p(!0), m && m()
			}, [m]);
		return c(q, h.jsx(b("CometPlaceholder.react"), {
			fallback: h.jsx(b("SearchCometGlobalTypeaheadGlimmer.react"), {
				inputStartContent: h.jsx("div", {
					className: "tmrshh9y"
				})
			}),
			children: h.jsx(i, {
				inputStartContent: h.jsxs(h.Fragment, {
					children: [h.jsx("div", {
						className: "thwo4zme pfnyh3mw j83agx80 bp9cbjyn",
						children: h.jsx("div", {
							className: (g || (g = b("stylex"))).dedupe({
								"transition-duration-1": "ijkhr0an",
								"transition-property-1": "pnx7fd3z",
								"transition-timing-function-1": "sgqwj88q"
							}, o ? null : {
								"opacity-1": "b5wmifdl",
								"pointer-events-1": "hzruof5a"
							}, o ? {
								"opacity-1": "pedkr2u6"
							} : null, j ? null : {
								"transform-0.1": "iuq35hgr"
							}, j ? {
								"transform-0.1": "f4muv6rs"
							} : null, o && !j ? {
								"transform-0.1": "lxek4yd6"
							} : null, o && j ? {
								"transform-0.1": "lxek4yd6"
							} : null),
							children: h.jsx(b("CometTypeaheadBackButton.react"), {})
						})
					}), h.jsx("div", {
						className: g.dedupe({
							"display-1": "j83agx80",
							"flex-shrink-1": "pfnyh3mw",
							"height-1": "byvelhso",
							"width-1": "fwizqjfa",
							"will-change-1": "l3d94uoy"
						}, o ? {
							"transition-duration-1": "ijkhr0an",
							"transition-property-1": "sk63wpmh",
							"transition-timing-function-1": "sgqwj88q",
							"width-1": "ttbfdpzt"
						} : null),
						children: "\xa0"
					})]
				}),
				inputXStyle: q ? e : d,
				onBlur: n,
				onClose: s,
				onFocus: t,
				onOpen: u,
				queryString: a
			})
		}))
	}
}), null);