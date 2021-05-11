__d("intersectionObserverEntryIsIntersecting", [], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;

	function a(a) {
		return a.isIntersecting != null ? a.isIntersecting : a.intersectionRatio > 0 || a.intersectionRect && (a.intersectionRect.height > 0 || a.intersectionRect.width > 0)
	}
}), null);