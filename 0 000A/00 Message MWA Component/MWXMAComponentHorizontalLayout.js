__d("MWXMAComponentHorizontalLayout.bs", ["fbt", "CometLegacyFixedHScroll.react",
 "MWXMAComponentStyles.bs", "qex", "react", "stylex"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h, i, j = h || b("react"),
		k = b("MWXMAComponentStyles.bs").HorizontalLayout.styles;

	function a(a) {
		var c = a.items,
			d = a.hasText;
		return j.jsx("div", {
			children: j.jsx(b("CometLegacyFixedHScroll.react"), {
				accessibilityLabel: g._("Message containing multiple sub messages"),
				cardWidth: 200,
				children: c.map(function(a, e) {
					var f = e === 0,
						g = e === (c.length - 1 | 0);
					return j.jsx("div", {
						children: j.jsx("div", {
							children: a,
							className: (i || (i = b("stylex")))(b("MWXMAComponentStyles.bs").common.card, f ? b("MWXMAComponentStyles.bs").common.incomingFirst : !1, f ? b("MWXMAComponentStyles.bs").common.incomingLast : !1, f && d ? b("MWXMAComponentStyles.bs").common.hasText : !1, g ? b("MWXMAComponentStyles.bs").common.outgoingFirst : !1, g ? b("MWXMAComponentStyles.bs").common.outgoingLast : !1, d ? k.spacer : !1)
						}),
						className: i(k.cardWrapper)
					}, e.toString())
				}),
				peek: !0,
				peekPadding: 44,
				peekPaddingEnd: 36
			}),
			className: (i || (i = b("stylex")))(k.scroller, b("qex")._("1586109") ? k.scrollerThinTab : !1)
		})
	}
	c = b("MWXMAComponentStyles.bs").common;
	d = a;
	f.common = c;
	f.styles = k;
	f.make = d
}), null);