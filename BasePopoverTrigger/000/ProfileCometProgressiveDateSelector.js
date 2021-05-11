__d("ProfileCometProgressiveDateSelector.react", ["fbt", "CometSelect.react", "DateConsts", "ProgressiveDateUtil", "React", "formatDate", "recoverableViolation", "stylex"], (function (a, b, c, d, e, f, g) {
	"use strict";
	f.getYearOptions = i;
	f.getMonthOptions = j;
	f.getDayOptions = k;
	f.ProfileCometProgressiveDateSelector = a;
	var h = b("React");

	function i(a) {
		var c = a[0];
		a = a[1];
		a = a == null ? new Date().getFullYear() + 1 : a;
		a < c && (b("recoverableViolation")("yearMin must be less than or equal to yearMax", "profile_comet"), a = c);
		var d = [{
			label: g._("N\u0103m"),
			testid: "Year-Option",
			value: null
		}];
		for (var a = a; a >= c; a--) d.push({
			label: b("formatDate")(new Date(a, 0), "Y"),
			testid: a + "-Option",
			value: a
		});
		return d
	}

	function j(a) {
		var c = [{
			label: g._("Th\u00e1ng"),
			testid: "Month-Option",
			value: null
		}];
		for (var d = 1; d <= 12; d++) c.push({
			label: b("formatDate")(new Date(a, d - 1), "F"),
			testid: d + "-Option",
			value: d
		});
		return c
	}

	function k(a, c) {
		var d = [{
				label: g._("Ng\u00e0y"),
				testid: "Day-Option",
				value: null
			}],
			e = b("DateConsts").getDaysInMonth(a, c);
		for (var f = 1; f <= e; f++) d.push({
			label: b("formatDate")(new Date(a, c - 1, f), "j"),
			testid: f + "-Option",
			value: f
		});
		return d
	}

	function a(a) {
		var c = a.date,
			d = a.onChange;
		a = a.yearRange;
		var e = null,
			f = null,
			g = null;
		c && (c.day != null && (e = c.day), c.month != null && (f = c.month), c.year != null && (g = c.year));
		c = h.useCallback(function (a) {
			return d(b("ProgressiveDateUtil").makeValidDate({
				day: e,
				month: f,
				year: a
			}))
		}, [d, e, f]);
		var l = h.useCallback(function (a) {
				return d(b("ProgressiveDateUtil").makeValidDate({
					day: e,
					month: a,
					year: g
				}))
			}, [d, e, g]),
			m = h.useCallback(function (a) {
				return d(b("ProgressiveDateUtil").makeValidDate({
					day: a,
					month: f,
					year: g
				}))
			}, [d, f, g]);
		c = [h.jsx("div", {
			className: g != null ? "oi9244e8" : "",
			children: h.jsx(b("CometSelect.react"), {
				onChange: c,
				options: i(a),
				selectedValue: g,
				testid: void 0
			})
		}, "year")];
		g != null && (c.push(h.jsx("div", {
			className: f != null ? "oi9244e8" : "",
			children: h.jsx(b("CometSelect.react"), {
				onChange: l,
				options: j(g),
				selectedValue: f,
				testid: void 0
			})
		}, "month")), f != null && c.push(h.jsx(b("CometSelect.react"), {
			onChange: m,
			options: k(g, f),
			selectedValue: e,
			testid: void 0
		}, "day")));
		return h.jsx("div", {
			className: "j83agx80",
			children: c
		})
	}
}), null);