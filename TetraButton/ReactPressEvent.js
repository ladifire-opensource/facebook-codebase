__d("ReactPressEvent.react", ["React", "ReactEventHelpers", "ReactEventHookPropagation", "ReactUseEvent.react"], (function (a, b, c, d, e, f) {
	"use strict";
	f.usePress = a;
	var g = b("React"),
		h = {
			passive: !0
		};

	function i(a, b, c, d, e) {
		var f = {
			altKey: d.altKey,
			buttons: b,
			clientX: d.clientX,
			clientY: d.clientY,
			ctrlKey: d.ctrlKey,
			defaultPrevented: d.defaultPrevented,
			metaKey: d.metaKey,
			pageX: d.pageX,
			pageY: d.pageY,
			pointerType: c,
			screenX: d.screenX,
			screenY: d.screenY,
			shiftKey: d.shiftKey,
			target: e,
			timeStamp: d.timeStamp,
			type: a,
			x: d.clientX,
			y: d.clientY,
			preventDefault: function () {
				f.defaultPrevented = !0, d.preventDefault()
			},
			stopPropagation: function () {
				d.stopPropagation()
			}
		};
		return f
	}

	function a(a, c) {
		var d = c.disabled,
			e = c.onPressStart,
			f = c.onPressMove,
			j = c.onPressEnd,
			k = c.onPressChange,
			l = g.useRef({
				isPressed: !1,
				isPressActive: !1,
				pointerId: null,
				bounds: null,
				pointerType: "",
				buttons: 0,
				activationEvent: null
			}),
			m = (c = b("ReactUseEvent.react"))("pointerdown"),
			n = c("pointermove", h),
			o = c("pointerup", h),
			p = c("pointercancel", h),
			q = c("mousedown"),
			r = c("mouseup", h),
			s = c("mousemove", h),
			t = c("dragstart", h),
			u = c("focusout", h);
		g.useEffect(function () {
			var c = a.current,
				g = l.current;
			if (c !== null) {
				var h = document,
					v = function (a) {
						if (d === !0) {
							y(a);
							return
						}
						if (b("ReactEventHookPropagation").hasEventHookPropagationStopped(a, "usePress")) return;
						b("ReactEventHookPropagation").stopEventHookPropagation(a, "usePress");
						if (a.buttons === 2 || a.buttons > 4 || b("ReactEventHelpers").isMac && a.pointerType === "mouse" && a.ctrlKey) return;
						g.buttons = a.buttons;
						a.button === 1 && (g.buttons = 4);
						w(a)
					},
					w = function (a) {
						if (!g.isPressed) {
							var d = a,
								f = d.pointerId;
							d = d.pointerType || "mouse";
							g.isPressed = !0;
							g.isPressActive = !0;
							g.pointerId = f !== void 0 ? f : null;
							g.pointerType = d;
							g.activationEvent = a;
							d !== "mouse" && (g.bounds = c.getBoundingClientRect());
							e && e(i("pressstart", g.buttons, d, a, c));
							k && k(!0);
							b("ReactEventHelpers").hasPointerEvents ? (o.setListener(h, y), n.setListener(h, z), p.setListener(h, y)) : (s.setListener(h, z), r.setListener(h, y), t.setListener(h, y))
						}
					},
					x = function (a) {
						g.isPressed && (g.isPressed = !1, j && j(i("pressend", g.buttons, g.pointerType, a, c)), k && k(!1))
					},
					y = function (a) {
						g.isPressActive = !1, g.bounds = null, g.activationEvent = null, x(a), b("ReactEventHelpers").hasPointerEvents ? (o.setListener(h, null), n.setListener(h, null), p.setListener(h, null)) : (s.setListener(h, null), r.setListener(h, null), t.setListener(h, null))
					},
					z = function (a) {
						if (d === !0) {
							y(a);
							return
						}
						if (!g.isPressActive) return;
						var b = g.pointerType,
							e = g.isPressed,
							h = !1;
						if (b === "mouse") {
							var j = a.target;
							h = c.contains(j)
						} else {
							j = a;
							j = j.pointerId;
							var k = g.bounds;
							if (j !== g.pointerId || k === null) return;
							j = a.clientX;
							var l = a.clientY,
								m = k.top,
								n = k.left,
								o = k.right;
							k = k.bottom;
							j >= n && j <= o && l >= m && l <= k && (h = !0)
						}
						h ? e ? f && f(i("pressmove", g.buttons, b, a, c)) : w(a) : e && x(a)
					};
				b("ReactEventHelpers").hasPointerEvents ? m.setListener(c, v) : q.setListener(c, v);
				u.setListener(c, function (a) {
					var b = g.activationEvent;
					a.target === c && b !== null && y(b)
				});
				g.isPressActive && (b("ReactEventHelpers").hasPointerEvents ? (o.setListener(h, y), n.setListener(h, z), p.setListener(h, y)) : (s.setListener(h, z), r.setListener(h, y), t.setListener(h, y)));
				return function () {
					var b = g.activationEvent;
					a.current === null && b !== null && y(b)
				}
			}
		}, [d, t, u, q, s, r, k, j, f, e, p, m, n, o, a])
	}
}), null);