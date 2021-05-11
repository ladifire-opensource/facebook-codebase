__d("getOnNavigateAwayHandler", ["fbt"], (function (a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;

	function a(a) {
		var b = a.getShouldTriggerWarning,
			c = a.showConfirmationDialog;
		return function (a, d) {
			if (b()) {
				c({
					body: (d = d) != null ? d : g._("N\u1ebfu b\u1ecf b\u00e2y gi\u1edd, b\u1ea1n s\u1ebd m\u1ea5t h\u1ebft m\u1ecdi thay \u0111\u1ed5i m\u00ecnh v\u1eeba th\u1ef1c hi\u1ec7n."),
					cancel: g._("B\u1ecf"),
					confirm: g._("Ti\u1ebfp t\u1ee5c ch\u1ec9nh s\u1eeda"),
					title: g._("Thay \u0111\u1ed5i ch\u01b0a l\u01b0u")
				}, function () {
					return void 0
				}, function () {
					return a(!0)
				})
			} else a()
		}
	}
}), null);