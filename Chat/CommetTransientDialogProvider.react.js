__d("CometTransientDialogProvider.react", ["fbt", "BaseModal.react", 
	"CometDialogContext", "CometErrorBoundary.react", 
	"CometHeroLogging", "React", "cometPushToast", "recoverableViolation", "useCometInteractionTracing", "useIsMountedRef"], (function (a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h = b("React");

	function i(a) {
		var c = a.dialogConfig,
			d = a.dialogConfigsRef,
			e = a.removeDialogConfig,
			f = h.useRef(null);
		h.useEffect(function () {
			return function () {
				f.current != null && window.cancelAnimationFrame(f.current)
			}
		}, []);
		a = c.dialog;
		var i = c.dialogProps,
			j = h.useState(!1),
			k = j[0];
		j = j[1];
		var l = h.useCallback(function () {
				for (var a = arguments.length, g = new Array(a), h = 0; h < a; h++) g[h] = arguments[h];
				f.current != null && window.cancelAnimationFrame(f.current);
				var i = d.current.indexOf(c);
				i < 0 && b("recoverableViolation")("Attempting to close a dialog that does not exist anymore.", "comet_ui");
				f.current = window.requestAnimationFrame(function () {
					e(c, g), f.current = null
				})
			}, [c, d, e]),
			m = h.useCallback(function () {
				l(), b("cometPushToast").cometPushErrorToast({
					message: g._("\u0110\u00e3 x\u1ea3y ra l\u1ed7i. Vi\u1ec7c n\u00e0y c\u00f3 th\u1ec3 l\u00e0 do l\u1ed7i k\u1ef9 thu\u1eadt v\u00e0 ch\u00fang t\u00f4i \u0111ang kh\u1eafc ph\u1ee5c r\u1ed3i.")
				})
			}, [l]);
		return h.jsx(b("CometErrorBoundary.react"), {
			onError: m,
			children: h.jsx(b("BaseModal.react"), {
				hidden: k,
				interactionDesc: c.interactionDesc,
				interactionUUID: c.interactionUUID,
				stackingBehavior: "above-everything",
				children: h.jsx(a, babelHelpers["extends"]({}, i, {
					onClose: l,
					onHide: j
				}))
			})
		})
	}

	function a(a) {
		var c = h.useState([]),
			d = c[0],
			e = c[1],
			f = b("useCometInteractionTracing")(30605361, "fluid", "INTERACTION");
		c = h.useCallback(function (a, c, d, g) {
			f(function (f) {
				var g = b("CometHeroLogging").genCometHeroInteractionUUIDAndMarkStart(f.getTraceId()),
					h = "Dialog";
				e(function (b) {
					return b.concat({
						dialog: a,
						dialogProps: c,
						interactionDesc: h,
						interactionUUID: g,
						onClose: d
					})
				})
			}, void 0, void 0, g)
		}, [f]);
		var g = h.useRef(d);
		h.useEffect(function () {
			g.current = d
		}, [d]);
		var j = b("useIsMountedRef")(),
			k = h.useCallback(function (a, b) {
				if (!j.current) return;
				e(function (b) {
					var c = b.indexOf(a);
					return c < 0 ? b : b.slice(0, c)
				});
				a.onClose && a.onClose.apply(a, b)
			}, [j]);
		return h.jsxs(b("CometDialogContext").Provider, {
			value: c,
			children: [a.children, d.map(function (a, b) {
				return h.jsx(i, {
					dialogConfig: a,
					dialogConfigsRef: g,
					removeDialogConfig: k
				}, b)
			})]
		})
	}
}), null);