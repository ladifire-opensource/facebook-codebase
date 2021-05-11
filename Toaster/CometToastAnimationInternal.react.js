__d("CometToastAnimationInternal.react", [
	"React", "stylex", 
	"useFadeEffect", 
	"useMergeRefs", 
	"useToasterStateManager", 
	"useVisibilityObserver"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React"),
		i = 100,
		j = {
			mount: {
				opacity: "pedkr2u6",
				transform: "g3zh7qmp",
				transitionDuration: "pc15xi3s",
				transitionTimingFunction: "ilcmz9jb"
			},
			root: {
				opacity: "b5wmifdl",
				transform: "f2tghaqp",
				transitionDuration: "s1992sns",
				transitionProperty: "r5qslco7",
				transitionTimingFunction: "nf1dmkjp"
			}
		};

	function a(a) {
		var c = a.children,
			d = a.expired;
		d = d === void 0 ? !1 : d;
		var e = a.id,
			f = a.position;
		a = a.xstyle;
		var k = b("useToasterStateManager")(),
			l = h.Children.only(c);
		c = h.useCallback(function () {
			k.resetTimer(e)
		}, [e, k]);
		var m = h.useCallback(function () {
				k.stopTimer(e)
			}, [e, k]),
			n = h.useCallback(function () {
				k.shown(e)
			}, [e, k]),
			o = h.useCallback(function () {
				k.hidden(e)
			}, [e, k]),
			p = h.useCallback(function (a) {
				l.props.onActionPress != null && l.props.onActionPress(a), a.defaultPrevented || k.expire(e)
			}, [l.props, e, k]);
		o = b("useVisibilityObserver")({
			onHidden: o,
			onVisible: n,
			options: {
				activityMonitorOverride: null
			}
		});
		n = b("useFadeEffect")(!d);
		d = n[0];
		var q = n[1];
		n = n[2];
		n = b("useMergeRefs")(n, o);
		return d ? h.jsx("li", {
			className: (g || (g = b("stylex")))(j.root, q && j.mount, a),
			onMouseEnter: m,
			onMouseLeave: c,
			ref: n,
			style: {
				bottom: i * f
			},
			children: h.cloneElement(l, {
				onActionPress: p
			})
		}) : null
	}
}), null);