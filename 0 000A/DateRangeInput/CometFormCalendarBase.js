__d("CometFormCalendarBase.react", ["CometFormCalendarDay.react", "CometLocalDate", "DateFormatConfig", 
	"FocusManager", "React", "stylex"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("DateFormatConfig").weekStart,
		h = b("React"),
		i = 7;

	function a(a) {
		var c = a.constraints,
			d = c === void 0 ? [] : c,
			e = a.date,
			f = a.monthID,
			j = a.moveDayCursorBy;
		c = a.hideAdjacentMonthDates;
		var k = c === void 0 ? !1 : c;
		c = a.highlightedDates;
		var l = a.onMouseEnter,
			m = a.onSelected,
			n = a.selectedDates,
			o = a.onFocus;
		a = a.focusDate;
		var p = h.useRef(new Map()),
			q = new Set(c.map(function(a) {
				return a.getHash()
			})),
			r = new Set(n.map(function(a) {
				return a.getHash()
			})),
			s = h.useCallback(function(a) {
				return function(b) {
					p.current.set(a.getHash(), b)
				}
			}, []),
			t = a != null ? a.getHash() : null,
			u = h.useRef(t),
			v = h.useRef(null);
		h.useEffect(function() {
			if (u.current !== t && t != null) {
				v.current = window.requestAnimationFrame(function() {
					var a = p.current.get(t);
					a != null && b("FocusManager").focusElement(a)
				});
				return function() {
					v.current != null && window.cancelAnimationFrame(v.current)
				}
			}
			u.current = t
		}, [t]);
		c = e.getNumDaysInThisMonth();
		n = new Date(e.getYear(), e.getMonth(), 1).getDay();
		a = new Date(e.getYear(), e.getMonth(), c).getDay();
		n = (n + 6 - g) % i;
		a = (i - a + g) % i;
		var w = [];
		for (var x = 1 - n; x <= c + a; x++) {
			var y = (x - 1 + n) % i;
			y === 0 && w.push([]);
			w[w.length - 1].push(new(b("CometLocalDate"))(e.getYear(), e.getMonth(), x))
		}
		return w.map(function(a) {
			return h.jsx("div", {
				className: "orb7ywq3 j83agx80 nhd2j8a9",
				role: "row",
				children: a.map(function(a) {
					var c = a.getMonth() !== e.getMonth(),
						g = !d.every(function(b) {
							return b(a)
						});
					return h.jsx(b("CometFormCalendarDay.react"), {
						date: a,
						disabled: g,
						focusable: a.getHash() === t,
						hidden: c && k,
						highlighted: q.has(a.getHash()),
						monthID: f,
						moveDayCursorBy: j,
						onClick: function() {
							return m(a)
						},
						onFocus: function() {
							return o && o(a)
						},
						onMouseEnter: function() {
							return l && l(a)
						},
						placeholder: c,
						ref: s(a),
						selected: r.has(a.getHash())
					}, a.getHash())
				})
			}, a[0].getHash())
		})
	}
	c = h.memo(a);
	e.exports = c
}), null);