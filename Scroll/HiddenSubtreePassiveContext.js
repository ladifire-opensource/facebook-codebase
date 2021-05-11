__d("HiddenSubtreePassiveContext", ["React"], (function (a, b, c, d, e, f) {
	"use strict";
	a = b("React");
	c = a.createContext({
		getCurrentState: function () {
			return {
				backgrounded: !1,
				hidden: !1,
				hiddenOrBackgrounded: !1,
				hiddenOrBackgrounded_FIXME: !1
			}
		},
		subscribeToChanges: function (a) {
			return {
				remove: function () {}
			}
		}
	});
	e.exports = c
}), null);