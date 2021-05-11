https://business.facebook.com/creatorstudio/content_posts

__d("LWICometDurationPicker.react", ["fbt", "CometFormDateInput.react", "CometFormDateTimeConstraints", "CometFormNumberStepper.react", "CometLocalDate", "CometRowItem.react", "LWICometLowDurationNotice.react", "LWICometRow.react", "lwiCometDurationReducer", "parseISODate", "react", "useLWILoggerContext", "useLWIReducers", "useLWISectionOptionChangeInteractionTracing", "withLWICometSpecPart"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h, i = h || b("react"),
		j = 4,
		k = g._("Days"),
		l = g._("End date"),
		m = b("CometLocalDate").fromDate(),
		n = {
			durationStepper: {
				flexBasis: "jdy1zkmd"
			},
			endDate: {
				flexBasis: "q4quhag8"
			},
			fullWidth: {
				width: "d3t9lkww"
			}
		},
		o = 3;

	function a(a) {
		var c = a.durationInDays,
			d = a.durationUpperLimit,
			e = a.hideDateSelector;
		e = e === void 0 ? !1 : e;
		var f = a.hideLowDurationNotice,
			g = a.paddingHorizontal,
			h = a.startTime;
		a = b("useLWILoggerContext")();
		var p = a.boostishID;
		a = a.flow;
		var q = i.useState(!1),
			r = q[0],
			s = q[1],
			t = b("useLWIReducers")([b("lwiCometDurationReducer")]),
			u = b("useLWISectionOptionChangeInteractionTracing")("duration"),
			v = a === "edit",
			w = i.useMemo(function() {
				return v && h != null ? b("CometLocalDate").fromDate(b("parseISODate")(h)) : m
			}, [v, h]),
			x = i.useMemo(function() {
				return w.getWithDaysAdded(c)
			}, [c, w]);
		i.useEffect(function() {
			if (x.compareTo(m) < 0) {
				var a = c + x.daysBetween(m) + o;
				t({
					durationInDays: a,
					type: "duration_reducer.update_duration_in_days"
				}, {
					side: "client_side"
				})
			}
		}, []);
		q = i.useMemo(function() {
			var a = d != null ? b("CometLocalDate").fromTimestamp(d) : m.getWithMonthsAdded(12),
				c = a.daysBetween(m);
			return [a, c]
		}, [d]);
		var y = q[0],
			z = q[1];
		i.useEffect(function() {
			x.compareTo(y) > 0 && t({
				durationInDays: z,
				type: "duration_reducer.update_duration_in_days"
			}, {
				side: "client_side"
			})
		}, [t, y, z, x]);
		a = function() {
			s(!1)
		};
		q = function(a) {
			a == null && !r ? s(!0) : r && s(!1);
			if (a == null) return;
			u(function() {
				var b = Math.min(Math.max(a, 1), z);
				t({
					durationInDays: b,
					type: "duration_reducer.update_duration_in_days"
				}, {
					side: "user_action"
				})
			})
		};
		var A = i.useCallback(function(a) {
				if (a == null) return;
				u(function() {
					t({
						durationInDays: a.daysBetween(w),
						type: "duration_reducer.update_duration_in_days"
					}, {
						side: "user_action"
					})
				})
			}, [t, w, u]),
			B = v;
		return i.jsxs(b("LWICometRow.react"), {
			paddingHorizontal: g,
			children: [f === !0 || p != null || c >= j ? null : i.jsx(b("CometRowItem.react"), {
				expanding: !0,
				children: i.jsx(b("LWICometLowDurationNotice.react"), {
					minDurationRecommendation: j
				})
			}, "durationNotice"), !B && i.jsx(b("CometRowItem.react"), {
				expanding: e,
				xstyle: e ? n.fullWidth : n.durationStepper,
				children: i.jsx(b("CometFormNumberStepper.react"), {
					label: k,
					max: z,
					min: 1,
					onBlur: a,
					onValueChange: q,
					value: r ? null : c
				})
			}, "durationStepper"), !e && i.jsx(b("CometRowItem.react"), {
				expanding: B,
				xstyle: B ? n.fullWidth : n.endDate,
				children: i.jsx(b("CometFormDateInput.react"), {
					constraints: [b("CometFormDateTimeConstraints").dateInTheFuture(!1), b("CometFormDateTimeConstraints").beforeDate(y, !0)],
					date: x,
					label: l,
					onDateChange: A
				})
			}, "dateInput")]
		})
	}
	c = b("withLWICometSpecPart")(a, function(a) {
		return {
			durationInDays: a.durationInDays
		}
	});
	e.exports = c
}), null);