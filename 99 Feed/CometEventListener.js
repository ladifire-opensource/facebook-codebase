__d("CometEventListener", ["unrecoverableViolation"], (function(a, b, c, d, e, f) {
	"use strict";

	function g(a, c, d, e) {
		if (a.addEventListener) {
			a.addEventListener(c, d, e);
			return {
				remove: function() {
					a.removeEventListener(c, d, e)
				}
			}
		} else throw b("unrecoverableViolation")('Attempted to listen to eventType "' + c + '" on a target that does not have addEventListener.', "comet_ui")
	}
	a = {
		bubbleWithPassiveFlag: function(a, b, c, d) {
			return g(a, b, c, {
				capture: !1,
				passive: d
			})
		},
		capture: function(a, b, c) {
			return g(a, b, c, !0)
		},
		captureWithPassiveFlag: function(a, b, c, d) {
			return g(a, b, c, {
				capture: !0,
				passive: d
			})
		},
		listen: function(a, b, c) {
			return g(a, b, c, !1)
		},
		registerDefault: function(a, c) {
			throw b("unrecoverableViolation")("EventListener.registerDefault is not implemented.", "comet_ui")
		},
		suppress: function(a) {
			a.preventDefault(), a.stopPropagation()
		}
	};
	e.exports = a
}), null);