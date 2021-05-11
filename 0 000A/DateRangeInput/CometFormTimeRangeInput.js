__d("CometFormTimeRangeInput.react", ["fbt", "CometFormTimeInput.react", "React", "stylex"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("React"),
		i = [];

	function a(a) {
		var c = a.constraints,
			d = c === void 0 ? i : c;
		c = a.timeRange;
		var e = a.startTimeInputProps,
			f = a.endTimeInputProps,
			j = a.disabled,
			k = a.layout;
		k = k === void 0 ? "row" : k;
		var l = a.onTimeRangeChange,
			m = c[0],
			n = c[1];
		a = h.useCallback(function(a) {
			l([a, n])
		}, [n, l]);
		c = h.useCallback(function(a) {
			l([m, a])
		}, [l, m]);
		var o = h.useCallback(function(a) {
				return d.every(function(b) {
					return b([a, n])
				})
			}, [d, n]),
			p = h.useCallback(function(a) {
				return d.every(function(b) {
					return b([m, a])
				})
			}, [d, m]);
		return h.jsxs("div", {
			className: "j83agx80" + (k === "column" ? " cbu4d94t gs1a9yip" : ""),
			children: [h.jsx("div", {
				className: (k === "row" ? "cgat1ltu buofh1pr" : "") + (k === "column" ? " gjjqq4r6" : ""),
				children: h.jsx(b("CometFormTimeInput.react"), babelHelpers["extends"]({}, e, {
					constraints: [o],
					disabled: j,
					label: (o = e && e.label) != null ? o : g._("Start Time"),
					onTimeChange: a,
					time: m
				}))
			}), h.jsx("div", {
				className: (k === "row" ? "cgat1ltu buofh1pr" : "") + (k === "column" ? " gjjqq4r6" : ""),
				children: h.jsx(b("CometFormTimeInput.react"), babelHelpers["extends"]({}, f, {
					constraints: [p],
					disabled: j,
					label: (e = f && f.label) != null ? e : g._("End Time"),
					onTimeChange: c,
					time: n
				}))
			})]
		})
	}
	c = h.memo(a);
	e.exports = c
}), null);