__d("Visibility", ["BaseEventEmitter", "ExecutionEnvironment", "TimeSlice"], (function (a, b, c, d, e, f) {
	var g, h;
	b("ExecutionEnvironment").canUseDOM && (document.hidden !== void 0 ? (g = "hidden", h = "visibilitychange") : document.mozHidden !== void 0 ? (g = "mozHidden", h = "mozvisibilitychange") : document.msHidden !== void 0 ? (g = "msHidden", h = "msvisibilitychange") : document.webkitHidden !== void 0 && (g = "webkitHidden", h = "webkitvisibilitychange"));
	a = function (a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var b, c;
			for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
			return (b = c = a.call.apply(a, [this].concat(e)) || this, c.HIDDEN = "hidden", c.VISIBLE = "visible", c.hiddenKey = g, c.hiddenEvent = h, b) || babelHelpers.assertThisInitialized(c)
		}
		var d = c.prototype;
		d.isHidden = function () {
			return g ? document[g] : !1
		};
		d.isSupported = function () {
			return b("ExecutionEnvironment").canUseDOM && document.addEventListener && h !== void 0
		};
		return c
	}(b("BaseEventEmitter"));
	var i = new a();
	i.isSupported() && document.addEventListener(i.hiddenEvent, b("TimeSlice").guard(function (a) {
		i.emit(i.isHidden() ? i.HIDDEN : i.VISIBLE, {
			changeTime: a.timeStamp
		})
	}, "visibility change"));
	c = i;
	e.exports = c
}), null);

////////////////////////////////???????????????????????
https://github.com/facebookarchive/emitter/blob/master/src/BaseEventEmitter.js

ExecutionEnvironment => fbjs