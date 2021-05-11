__d("checkPassiveEventsSupported", ["gkx"], (function (a, b, c, d, e, f) {
	a = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
	c = !1;
	if (a && !b("gkx")("1703328")) try {
		d = {};
		Object.defineProperty(d, "passive", {
			get: function () {
				c = !0
			}
		});
		window.addEventListener("test", d, d);
		window.removeEventListener("test", d, d)
	} catch (a) {
		c = !1
	}
	f = c;
	e.exports = f
}), null);