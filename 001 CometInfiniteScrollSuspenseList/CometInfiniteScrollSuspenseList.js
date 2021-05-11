__d("CometInfiniteScrollSuspenseList.react", ["CometPagelet.react", 
	"CometPlaceholder.react", "CometSuspenseList.react", "JSTracing", 
	"React", "gkx", "mergeRefs", "performanceNow", "requireCond", 
	"useCometTailLoadGlimmerTracker", "useLayoutEffect_SAFE_FOR_SSR", 
	"useSuspenseTransition", "useVisibilityObserver", "cr:1142206", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h, i = b("React"),
		j = {
			glimmerRoot: {
				overflowAnchor: "rek2kq2y"
			}
		};

	function k(a) {
		var c = a.onLoadMore,
			d = a.rootMargin;
		a = a.triggerXStyle;
		var e = i.useRef(!1),
			f = i.useCallback(function () {
				b("cr:1142206") != null && b("cr:1142206").log("[onVisible] fired", {
					alreadyTriggered: e.current
				});
				if (e.current) return;
				e.current = !0;
				c()
			}, [c]);
		d = b("useVisibilityObserver")({
			onVisible: f,
			options: {
				rootMargin: (f = d) != null ? f : 0
			}
		});
		return i.jsx("div", {
			className: (g || (g = b("stylex")))(a),
			ref: d
		})
	}

	function a(a) {
		var c = a.children,
			d = a.endGlimmerRef,
			e = a.hasMore,
			f = a.isLoading,
			l = a.listGlimmer,
			m = a.onLoadMore,
			n = a.pageletName,
			o = a.revealOrder,
			p = a.rootMargin;
		a = a.triggerXStyle;
		var q = i.useState(0),
			r = q[0],
			s = q[1],
			t = i.useRef(!1);
		q = b("useSuspenseTransition")();
		var u = q[0],
			v = i.useRef(null),
			w = i.useRef(0),
			x = e,
			y = i.useCallback(function () {
				w.current = (h || (h = b("performanceNow")))(), u(function () {
					b("JSTracing").clear(function () {
						s(function (a) {
							return a + 1
						}), m(v)
					})
				})
			}, [m, u, v]);
		i.useEffect(function () {
			if (b("gkx")("1475760")) return;
			b("cr:1142206") != null && b("cr:1142206").log("[useEffect]", "checking if we need to load more", {
				hasMore: e,
				isGlimmerVisible: t.current,
				isLoading: f
			});
			e && !f && t.current && (b("cr:1142206") != null && b("cr:1142206").log("[useEffect]", "Need to load more -- calling prioritizeOnLoadMore"), y())
		}, [y, f, e, x]);
		b("useLayoutEffect_SAFE_FOR_SSR")(function () {
			x || (t.current = !1)
		}, [x]);
		q = i.useCallback(function () {
			if (b("gkx")("1475760")) return;
			b("cr:1142206") != null && b("cr:1142206").log("[onVisible] fired", {
				wasVisible: t.current
			});
			var a = t.current;
			t.current = !0;
			b("cr:1142206") != null && b("cr:1142206").log("[onVisible]", "checking if we need to load more", {
				hasMore: e,
				isLoading: f,
				wasVisible: a
			});
			!a && e && !f && (b("cr:1142206") != null && b("cr:1142206").log("[onVisible]", "calling prioritizedOnLoadMore"), y())
		}, [e, f, y]);
		var z = i.useCallback(function () {
				if (b("gkx")("1475760")) return;
				b("cr:1142206") != null && b("cr:1142206").log("[onHidden]", "marking glimmer refs as hidden", {
					wasVisible: t.current
				});
				t.current = !1
			}, []),
			A = b("useVisibilityObserver")({
				onHidden: z,
				onVisible: q,
				options: {
					rootMargin: (z = p) != null ? z : 0
				}
			}),
			B = 0;
		q = i.Children.map(c, function (a) {
			return a ? n != null ? i.jsx(b("CometPagelet.react").Placeholder, {
				fallback: l,
				name: n,
				position: B++,
				trackTailLoad: !0,
				children: a
			}) : i.jsx(b("CometPlaceholder.react"), {
				fallback: l,
				children: a
			}) : null
		});
		z = i.useState(!1);
		c = z[0];
		var C = z[1];
		i.useEffect(function () {
			return C(!0)
		}, []);
		if (b("gkx")("1475760") && (e && !f && c)) {
			z = i.jsx(k, {
				onLoadMore: y,
				rootMargin: p,
				triggerXStyle: a
			}, "tailTrigger" + r);
			o === "backwards" ? q.unshift(z) : q.push(z)
		}
		c = B;
		var D = b("useCometTailLoadGlimmerTracker")(n, c, w.current);
		p = i.useMemo(function () {
			return b("mergeRefs")(d, v, D, A)
		}, [d, D, A]);
		return i.jsxs(i.Fragment, {
			children: [x && o === "backwards" ? i.jsx("div", {
				ref: p,
				children: l
			}, "glimmerBackwards") : null, i.jsx(b("CometSuspenseList.react"), {
				revealOrder: o || "forwards",
				tail: "hidden",
				children: q
			}, "list"), x && o !== "backwards" ? i.jsx("div", {
				className: (g || (g = b("stylex")))(b("gkx")("1386096") && j.glimmerRoot),
				ref: p,
				children: l
			}, "glimmer") : null]
		})
	}
}), null);