__d("BaseTooltipTargetWrapper.react", ["FocusWithinHandler.react", "React", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h = b("React");

	function a(a, c) {
		var d = a.children,
			e = a.forceInlineDisplay,
			f = a.onHide,
			i = a.onShow;
		a = a.tooltipIdentifier;
		var j = h.useState(!1),
			k = j[0];
		j = j[1];
		var l = h.useState(!1),
			m = l[0];
		l = l[1];
		var n = k && m,
			o = h.useRef(n);
		h.useEffect(function () {
			o.current !== n && (n ? i() : f()), o.current = n
		}, [f, i, n]);
		return h.jsx("span", {
			"aria-describedby": a,
			className: (g || (g = b("stylex"))).dedupe({
				"align-content-1": "tojvnm2t",
				"align-items-1": "a6sixzi8",
				"align-self-1": "abs2jz4q",
				"display-1": "a8s20v7p",
				"flex-basis-1": "t1p8iaqh",
				"flex-direction-1": "k5wvi7nf",
				"flex-grow-1": "q3lfd5jv",
				"flex-shrink-1": "pk4s997a",
				"height-1": "bipmatt0",
				"justify-content-1": "cebpdrjk",
				"max-height-1": "qowsmv63",
				"max-width-1": "owwhemhu",
				"min-height-1": "dp1hu0rb",
				"min-width-1": "dhp61c6y",
				"width-1": "iyyx5f41"
			}, e === !0 ? {
				"display-1": "pq6dq46d"
			} : null),
			"data-testid": void 0,
			onMouseEnter: i,
			onMouseLeave: f,
			onMouseUp: f,
			ref: c,
			children: h.jsx(b("FocusWithinHandler.react"), {
				onFocusChange: j,
				onFocusVisibleChange: l,
				children: d
			})
		})
	}
	c = h.forwardRef(a);
	e.exports = c
}), null);