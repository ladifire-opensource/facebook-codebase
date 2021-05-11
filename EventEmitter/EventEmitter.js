__d("EventEmitter", ["BaseEventEmitter"], (function (a, b, c, d, e, f) {
	a = function (a) {
		babelHelpers.inheritsLoose(b, a);

		function b() {
			return a.apply(this, arguments) || this
		}
		return b
	}(b("BaseEventEmitter"));
	e.exports = a
}), null);