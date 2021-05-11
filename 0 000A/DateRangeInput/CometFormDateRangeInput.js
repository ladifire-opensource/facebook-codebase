__d("CometFormDateRangeInput.react", ["fbt", "CometFormDateInput.react", "React", "stylex"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("React"),
		i = [];

	function a(a) {
		var c = a.allowSingleDayRange,
			d = c === void 0 ? !1 : c;
		c = a.constraints;
		var e = c === void 0 ? i : c;
		c = a.dateRange;
		var f = a.startDateInputProps,
			j = a.endDateInputProps,
			k = a.disabled,
			l = a.layout;
		l = l === void 0 ? "row" : l;
		var m = a.onDateRangeChange,
			n = c[0],
			o = c[1];
		a = h.useCallback(function(a) {
			o != null && a != null && (d ? a.compareTo(o) > 0 : a.compareTo(o) >= 0) ? m([a, null]) : m([a, o])
		}, [d, o, m]);
		c = h.useCallback(function(a) {
			n != null && a != null && (d ? a.compareTo(n) < 0 : a.compareTo(n) <= 0) ? m([null, a]) : m([n, a])
		}, [d, m, n]);
		var p = h.useCallback(function(a) {
				return e.every(function(b) {
					return b([a, o])
				})
			}, [e, o]),
			q = h.useCallback(function(a) {
				return e.every(function(b) {
					return b([n, a])
				})
			}, [e, n]);
		return h.jsxs("div", {
			className: "j83agx80" + (l === "column" ? " cbu4d94t gs1a9yip" : ""),
			children: [h.jsx("div", {
				className: (l === "row" ? "cgat1ltu buofh1pr" : "") + (l === "column" ? " gjjqq4r6" : ""),
				children: h.jsx(b("CometFormDateInput.react"), babelHelpers["extends"]({}, f, {
					constraints: [p],
					date: n,
					disabled: k,
					initialCalendarDate: (p = (p = n) != null ? p : o) != null ? p : void 0,
					label: (p = f && f.label) != null ? p : g._("Start Date"),
					onDateChange: a
				}))
			}), h.jsx("div", {
				className: (l === "row" ? "cgat1ltu buofh1pr" : "") + (l === "column" ? " gjjqq4r6" : ""),
				children: h.jsx(b("CometFormDateInput.react"), babelHelpers["extends"]({}, j, {
					constraints: [q],
					date: o,
					disabled: k,
					initialCalendarDate: (p = (f = o) != null ? f : n) != null ? p : void 0,
					label: (a = j && j.label) != null ? a : g._("End Date"),
					onDateChange: c
				}))
			})]
		})
	}
	c = h.memo(a);
	e.exports = c
}), null);