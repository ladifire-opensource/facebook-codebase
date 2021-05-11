__d("CometPopover.react", ["BaseContextualLayerContextSizeContext", 
	"BaseContextualLayerLayerAdjustmentContext", 
	"BaseContextualLayerOrientationContext", "Locale", "React", "stylex", "testID", 
	"useCometDisplayTimingTrackerForInteraction"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h = b("React"),
		i = b("Locale").isRTL(),
		j = i ? "start" : "end",
		k = i ? "end" : "start",
		l = 6,
		m = 16,
		n = {
			arrow: {
				borderBottomColor: "d06cv69u",
				borderEndColor: "r7dfy6xl",
				borderStartColor: "cdcbzqsl",
				borderTopStyle: "goun2846",
				borderEndStyle: "ccm00jje",
				borderBottomStyle: "s44p3ltw",
				borderStartStyle: "mk2mc5f4",
				borderTopColor: "jgf7e1nu",
				borderTopWidth: "tl61u9r6",
				borderEndWidth: "bcctvi4p",
				borderBottomWidth: "gcjuebxg",
				borderStartWidth: "kvs4odcb",
				pointerEvents: "hzruof5a",
				position: "pmk7jnqg"
			},
			arrowAlignBottom: {
				bottom: "i09qtzwb"
			},
			arrowAlignEnd: {
				end: "n7fi1qx3"
			},
			arrowAlignHorizontalCenter: {
				start: "h9efg1rk"
			},
			arrowAlignStart: {
				start: "j9ispegn"
			},
			arrowAlignTop: {
				top: "kr520xx4"
			},
			arrowAlignVerticalCenter: {
				top: "rarmybbq"
			},
			card: {
				backgroundColor: "cwj9ozl2",
				borderTopStartRadius: "ue3kfks5",
				borderTopEndRadius: "pw54ja7n",
				borderBottomEndRadius: "uo3d90p7",
				borderBottomStartRadius: "l82x9zwi",
				boxShadow: "nwpbqux9",
				boxSizing: "rq0escxv",
				minWidth: "jgsskzai",
				overflowX: "ni8dbmo4",
				overflowY: "stjgntxs"
			},
			root: {
				position: "l9j0dhe7"
			}
		},
		o = {
			above: {
				marginBottom: "ama3r5zh"
			},
			below: {
				marginTop: "swg4t2nn"
			},
			end: {
				marginStart: "aoep172s"
			},
			start: {
				marginEnd: "r70wmyd8"
			}
		},
		p = {
			above: {
				borderBottomColor: "j7g94pet",
				borderStartColor: "b74d5cxt",
				boxShadow: "tpe1gtqi",
				top: "i42f9fw1"
			},
			below: {
				borderEndColor: "et4y5ytx",
				borderTopColor: "np69z8it",
				bottom: "bssd97o4",
				boxShadow: "n4j0glhw"
			},
			end: {
				borderBottomColor: "j7g94pet",
				borderStartColor: "b74d5cxt",
				boxShadow: "tpe1gtqi",
				end: "p72yiolg"
			},
			start: {
				borderBottomColor: "j7g94pet",
				borderEndColor: "et4y5ytx",
				boxShadow: "jxfglsfo",
				start: "lu1ps8bl"
			}
		};

	function a(a, c) {
		var d, e = a.children,
			f = a.id,
			q = a.label,
			r = a.onBlur,
			s = a.onFocus,
			t = a.popoverName,
			u = a.role;
		u = u === void 0 ? "dialog" : u;
		var v = a.testid;
		a = a.withArrow;
		a = a === void 0 ? !1 : a;
		var w = h.useContext(b("BaseContextualLayerOrientationContext")),
			x = w.align;
		w = w.position;
		var y = h.useContext(b("BaseContextualLayerContextSizeContext"));
		d = (d = h.useContext(b("BaseContextualLayerLayerAdjustmentContext"))) != null ? d : 0;
		t = b("useCometDisplayTimingTrackerForInteraction")(t);
		t = h.jsx("div", {
			className: (g || (g = b("stylex")))(n.card),
			ref: t,
			children: e
		});
		if (!a) return h.jsx("div", babelHelpers["extends"]({
			"aria-label": q,
			className: (g || (g = b("stylex")))(n.root),
			id: f,
			onBlur: r,
			onFocus: s,
			ref: c,
			role: u
		}, b("testID")(v), {
			children: t
		}));
		e = 0;
		a = 0;
		var z = 0,
			A = 0,
			B = 0;
		switch (w) {
			case "above":
				z += -d;
				A += -7;
				B = 45 * (i ? 1 : -1);
				break;
			case "below":
				z += -d;
				A += 7;
				B = 45 * (i ? 1 : -1);
				break;
			case k:
				z += -6;
				A += -d;
				B = -45;
				break;
			case j:
				z += 6;
				A += -d;
				B = 45;
				break
		}
		if (w === "start" || w === "end") {
			d = y ? y.height / 2 : 0;
			var C = Math.max(d, m);
			d = C - d;
			x === "start" ? (A += C - l, a -= d) : x === "end" && (A -= C - l, a += d)
		} else if (w === "above" || w === "below") {
			C = y ? y.width / 2 : 0;
			d = Math.max(C, m);
			y = d - C;
			x === k ? (z += d - l, e -= y) : x === j && (z -= d - l, e += y)
		}
		C = "translate(" + e + "px, " + a + "px)";
		d = "translate(" + z + "px, " + A + "px) rotate(" + B + "deg)";
		return h.jsxs("div", babelHelpers["extends"]({
			"aria-label": q,
			className: g(n.root, o[w]),
			id: f,
			onBlur: r,
			onFocus: s,
			ref: c,
			role: u,
			style: {
				transform: C
			}
		}, b("testID")(v), {
			children: [t, h.jsx("div", {
				className: g(n.arrow, p[w], (w === "above" || w === "below") && [x === "middle" && n.arrowAlignHorizontalCenter, x === "start" && n.arrowAlignStart, x === "end" && n.arrowAlignEnd], (w === "start" || w === "end") && [x === "middle" && n.arrowAlignVerticalCenter, x === "start" && n.arrowAlignTop, x === "end" && n.arrowAlignBottom]),
				style: {
					transform: d
				}
			})]
		}))
	}
	c = h.forwardRef(a);
	e.exports = c
}), null);