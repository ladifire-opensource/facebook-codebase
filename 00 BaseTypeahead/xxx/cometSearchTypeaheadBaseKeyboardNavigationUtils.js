__d("cometSearchTypeaheadBaseKeyboardNavigationUtils", [], (function (a, b, c, d, e, f) {
	"use strict";
	f.moveDown = a;
	f.moveUp = b;

	function a(a, b, c) {
		if (a.length === 0) {
			c(null);
			return
		}
		var d = b != null ? a.findIndex(function (a) {
			return a.getKey() === b
		}) + 1 : 0;
		d === a.length && (d = 0);
		c(a[d])
	}

	function b(a, b, c) {
		if (a.length === 0) {
			c(null);
			return
		}
		var d = b != null ? a.findIndex(function (a) {
			return a.getKey() === b
		}) - 1 : a.length - 1;
		d === -1 && (d = a.length - 1);
		c(a[d])
	}
}), null);