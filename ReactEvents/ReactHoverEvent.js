__d("ReactHoverEvent.react", ["React", 
	"ReactEventHelpers", 
	"ReactEventHookPropagation", 
	"ReactUseEvent.react"], (function (a, b, c, d, e, f) {
	"use strict";
	f.useHover = a;
	var g = b("React");

	function h(a, b, c) {
		return {
			clientX: b.clientX,
			clientY: b.clientY,
			pageX: b.pageX,
			pageY: b.pageY,
			screenX: b.screenX,
			screenY: b.screenY,
			target: c,
			timeStamp: b.timeStamp,
			type: a,
			x: b.clientX,
			y: b.clientY
		}
	}
	var i = {
		passive: !0
	};

	function j(a, b) {
		b = b;
		while (b != null) {
			if (b === a) return !0;
			if (b._hoverEventTarget) return !1;
			b = b.parentNode
		}
		return !1
	}

	function a(a, c) {
		var d = c.disabled,
			e = c.onHoverStart,
			f = c.onHoverMove,
			k = c.onHoverEnd,
			l = c.onHoverChange,
			m = (c = b("ReactUseEvent.react"))("touchstart", i),
			n = c("mouseover", i),
			o = c("mouseout", i),
			p = c("mousemove", i),
			q = c("pointerover", i),
			r = c("pointerout", i),
			s = c("pointermove", i),
			t = c("pointercancel", i),
			u = g.useRef({
				isHovered: !1,
				isTouched: !1
			});
		g.useEffect(function () {
			var c = a.current,
				g = u.current;
			if (c !== null && g !== null) {
				c._hoverEventTarget = !0;
				var i = document,
					v = function (a) {
						if (d === !0) {
							y(a);
							return
						}
						if (b("ReactEventHookPropagation").hasEventHookPropagationStopped(a, "useHover")) return;
						b("ReactEventHookPropagation").stopEventHookPropagation(a, "useHover");
						!g.isHovered && !j(c, a.relatedTarget) && (g.isHovered = !0, e && e(h("hoverstart", a, c)), l && l(!0), b("ReactEventHelpers").hasPointerEvents ? (s.setListener(i, x), t.setListener(i, y), r.setListener(i, w)) : o.setListener(i, w))
					},
					w = function (a) {
						g.isHovered && !j(c, a.relatedTarget) && (g.isHovered = !1, k && k(h("hoverend", a, c)), l && l(!1), y(a))
					},
					x = function (a) {
						g.isTouched = !1;
						if (d === !0) {
							y(a);
							return
						}
						g.isHovered && (f && f(h("hovermove", a, c)))
					},
					y = function (a) {
						g.isTouched = !1, b("ReactEventHelpers").hasPointerEvents ? (s.setListener(i, null), t.setListener(i, null), r.setListener(i, null)) : o.setListener(i, null), w(a)
					};
				b("ReactEventHelpers").hasPointerEvents ? q.setListener(c, function (a) {
					a.pointerType !== "touch" && v(a)
				}) : (n.setListener(c, function (a) {
					g.isTouched || v(a)
				}), m.setListener(c, function () {
					g.isTouched = !0
				}), p.setListener(i, x));
				g.isHovered && (b("ReactEventHelpers").hasPointerEvents ? (s.setListener(i, x), t.setListener(i, y), r.setListener(i, w)) : o.setListener(i, w))
			}
		}, [d, l, k, f, e, t, s, r, q, p, o, n, a, m])
	}
}), null);