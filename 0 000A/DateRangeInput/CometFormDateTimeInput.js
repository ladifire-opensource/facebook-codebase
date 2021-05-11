__d("CometFormDateTimeInput.react", ["CometFormDateInput.react", "CometFormDateUtils", "CometFormTimeInput.react", "CometLocalDate", "EventTimeInputUtils", "React", "stylex"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = [],
		i = 5,
		j = 15;

	function a(a) {
		var c = a.constraints,
			d = c === void 0 ? h : c,
			e = a.date;
		c = a.dateInputProps;
		var f = a.defaultDate,
			k = a.disabled,
			l = a.helperText,
			m = a.initialDefaultTime,
			n = a.initialCalendarDate,
			o = a.layout;
		o = o === void 0 ? "row" : o;
		var p = a.onDateTimeChange;
		a = a.timeInputProps;
		f = e !== void 0 ? e : f;
		var q = f != null ? b("CometLocalDate").fromDate(f) : null;
		f = b("CometFormDateUtils").getNullableDateTimeStringFromDate(f).time;
		var r = g.useState(q),
			s = r[0],
			t = r[1];
		r = g.useState(f);
		var u = r[0],
			v = r[1];
		g.useEffect(function() {
			if (e !== void 0) {
				var a = e != null ? b("CometLocalDate").fromDate(e) : null,
					c = b("CometFormDateUtils").getNullableDateTimeStringFromDate(e).time;
				t(a);
				v(c)
			}
		}, [e]);
		var w = e === void 0 ? s : q,
			x = e === void 0 ? u : f,
			y = (r = a == null ? void 0 : a.skipMinutes) != null ? r : j,
			z = g.useMemo(function() {
				return b("EventTimeInputUtils").getAllTimeEntries(null, y >= i ? y : i)
			}, [y]),
			A = g.useCallback(function(a) {
				return d.every(function(b) {
					return b(a)
				})
			}, [d]);
		q = g.useCallback(function(a) {
			var c;
			t(a);
			var d = (c = x) != null ? c : m;
			if (a != null && d != null) {
				c = b("CometFormDateUtils").getDateTimeFromDateAndTime(a, d);
				if (A(c)) p(c);
				else {
					c = [].concat(z).sort(function(a, b) {
						return Math.abs(d - a.uniqueID) - Math.abs(d - b.uniqueID)
					}).find(function(c) {
						return A(b("CometFormDateUtils").getDateTimeFromDateAndTime(a, c.uniqueID))
					});
					p(c ? b("CometFormDateUtils").getDateTimeFromDateAndTime(a, c.uniqueID) : void 0)
				}
			} else a == null && x == null ? p(null) : p(void 0)
		}, [A, z, x, m, p]);
		f = g.useCallback(function(a) {
			v(a);
			if (w != null && a != null) {
				var c = b("CometFormDateUtils").getDateTimeFromDateAndTime(w, a);
				p(c)
			} else w == null && a == null ? p(null) : p(void 0)
		}, [w, p]);
		r = g.useCallback(function(a) {
			var c = u != null ? b("CometFormDateUtils").getDateTimeFromDateAndTime(a, u) : a;
			return A(c) ? !0 : z.some(function(c) {
				return A(b("CometFormDateUtils").getDateTimeFromDateAndTime(a, c.uniqueID))
			})
		}, [A, z, u]);
		var B = g.useCallback(function(a) {
				a = s != null ? b("CometFormDateUtils").getDateTimeFromDateAndTime(s, a) : a;
				return A(a)
			}, [A, s]),
			C = (a == null ? void 0 : a.timezone) != null;
		return g.jsxs("div", {
			children: [g.jsxs("div", {
				className: "j83agx80" + (o === "column" ? " cbu4d94t gs1a9yip" : ""),
				children: [g.jsx("div", {
					className: (o === "row" && C ? "hkbzh7o3" : "") + (o === "row" ? " cgat1ltu buofh1pr" : "") + (o === "column" ? " gjjqq4r6" : ""),
					children: g.jsx(b("CometFormDateInput.react"), babelHelpers["extends"]({}, c, {
						constraints: [r],
						date: w,
						disabled: k,
						initialCalendarDate: n != null ? b("CometLocalDate").fromDate(n) : void 0,
						onDateChange: q
					}))
				}), g.jsx("div", {
					className: (o === "row" && C ? "hkbzh7o3" : "") + (o === "row" ? " buofh1pr" : ""),
					children: g.jsx(b("CometFormTimeInput.react"), babelHelpers["extends"]({}, a, {
						constraints: [B],
						disabled: k,
						onTimeChange: f,
						time: x
					}))
				})]
			}), l != null ? g.jsx("div", {
				className: "aov4n071",
				children: l
			}) : null]
		})
	}
	c = g.memo(a);
	e.exports = c
}), null);