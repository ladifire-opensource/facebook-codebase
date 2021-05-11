__d("focusKeyboardEventPropagation", [], (function (a, b, c, d, e, f) {
	"use strict";
	f.hasFocusKeyboardEventPropagationStopped = a;
	f.stopFocusKeyboardEventPropagation = b;

	function a(a) {
		return a._stopFocusKeyboardPropagation === !0
	}

	function b(a) {
		a._stopFocusKeyboardPropagation = !0
	}
}), null);