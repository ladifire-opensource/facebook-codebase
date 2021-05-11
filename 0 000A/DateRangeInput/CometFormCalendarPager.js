__d("CometFormCalendarPager.react", ["ix", "fbt", "CometFormCalendarBase.react", 
	"CometFormCalendarMonthLabel.react", "CometFormCalendarWeekLabel.react", "CometLocalDate", 
	"FocusWithinHandler.react", "Locale", "React", "TetraIcon.react", "fbicon", "stylex", "testID", 
	"useCometUniqueID"], (function(a, b, c, d, e, f, g, h) {
	"use strict";
	var i = b("React"),
		j = b("Locale").isRTL();

	function a(a, c) {
		var d, e = a.constraints,
			f = a.highlightedDates;
		f = f === void 0 ? [] : f;
		var k = a.initialCalendarDate;
		k = k === void 0 ? b("CometLocalDate").fromDate() : k;
		var l = a.onSelected,
			m = a.onMouseEnter;
		a = a.selectedDates;
		a = a === void 0 ? [] : a;
		d = i.useState((d = a[0]) != null ? d : k);
		var n = d[0],
			o = d[1];
		k = i.useState(null);
		var p = k[0],
			q = k[1];
		d = b("useCometUniqueID")();
		k = i.useCallback(function(a) {
			if (p) {
				var b = p.getWithDaysAdded(a);
				(e == null || e.every(function(a) {
					return a(b)
				})) && (q(b), o(b))
			}
		}, [e, p]);
		var r = i.useCallback(function() {
				o(new(b("CometLocalDate"))(n.getYear(), n.getMonth() - 1, 1))
			}, [n]),
			s = i.useCallback(function() {
				o(new(b("CometLocalDate"))(n.getYear(), n.getMonth() + 1, 1))
			}, [n]),
			t = i.useCallback(function() {
				q(n)
			}, [n]),
			u = i.useCallback(function() {
				q(null)
			}, []);
		return i.jsxs(b("FocusWithinHandler.react"), {
			onBlurWithin: u,
			onFocusWithin: t,
			children: [i.jsxs("div", babelHelpers["extends"]({
				className: "aov4n071 h676nmdw oi9244e8 sjgh65i0 i1fnvgqd j83agx80 bp9cbjyn"
			}, b("testID")("CometFormCalendarPagerTitle"), {
				children: [i.jsx(b("TetraIcon.react"), {
					"aria-label": h._("Previous Month"),
					color: "secondary",
					focusable: !1,
					icon: j ? b("fbicon")._(g("477912"), 16) : b("fbicon")._(g("477899"), 16),
					onPress: r,
					testid: void 0
				}), i.jsx(b("CometFormCalendarMonthLabel.react"), {
					date: n,
					monthID: d
				}), i.jsx(b("TetraIcon.react"), {
					"aria-label": h._("Next Month"),
					color: "secondary",
					focusable: !1,
					icon: j ? b("fbicon")._(g("477899"), 16) : b("fbicon")._(g("477912"), 16),
					onPress: s,
					testid: void 0
				})]
			})), i.jsxs("div", babelHelpers["extends"]({}, b("testID")("CometFormCalendarPager"), {
				"aria-label": h._("Calendar"),
				className: "lzcic4wl cbu4d94t j83agx80",
				ref: c,
				role: "grid",
				tabIndex: p == null ? 0 : -1,
				children: [i.jsx("div", {
					className: "orb7ywq3 j83agx80 bp9cbjyn",
					children: i.jsx(b("CometFormCalendarWeekLabel.react"), {
						className: "indl5zf3 oqcyycmt sj5x9vvc tvmbv18p s1tcr66n"
					})
				}), i.jsx(b("CometFormCalendarBase.react"), {
					constraints: e,
					date: n,
					focusDate: p,
					highlightedDates: f,
					monthID: d,
					moveDayCursorBy: k,
					onMouseEnter: m,
					onSelected: l,
					selectedDates: a
				})]
			}))]
		})
	}
	c = i.memo(i.forwardRef(a));
	e.exports = c
}), null);