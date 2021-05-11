__d("ODS", ["ExecutionEnvironment", "OdsWebBatchFalcoEvent", "Random", "Run", "clearTimeout", "gkx", 
	"setTimeout", "unrecoverableViolation"], (function(a, b, c, d, e, f) {
	var g, h = b("ExecutionEnvironment").canUseDOM || b("ExecutionEnvironment").isInWorker,
		i = {};

	function j(a, b, c, d, e) {
		var f;
		d === void 0 && (d = 1);
		e === void 0 && (e = 1);
		var h = (f = i[b]) != null ? f : null;
		if (h != null && h <= 0) return;
		g = g || {};
		var j = g[a] || (g[a] = {}),
			k = j[b] || (j[b] = {}),
			m = k[c] || (k[c] = [0, null]),
			n = Number(d),
			o = Number(e);
		h > 0 && (n /= h, o /= h);
		if (!isFinite(n) || !isFinite(o)) return;
		m[0] += n;
		if (arguments.length >= 5) {
			var p = m[1];
			p == null && (p = 0);
			m[1] = p + o
		}
		l()
	}
	var k;

	function l() {
		if (k != null) return;
		k = b("setTimeout")(function() {
			m.flush()
		}, b("gkx")("708253") ? 13e3 / 2 : 5e3)
	}
	var m = {
		setEntitySample: function(a, c) {
			if (!h) return;
			i[a] = b("Random").random() < c ? c : 0
		},
		bumpEntityKey: function(a, b, c, d) {
			d === void 0 && (d = 1);
			if (!h) return;
			j(a, b, c, d)
		},
		bumpFraction: function(a, b, c, d, e) {
			d === void 0 && (d = 1);
			e === void 0 && (e = 1);
			if (!h) return;
			j(a, b, c, d, e)
		},
		flush: function(a) {
			a === void 0 && (a = "normal");
			if (!h) return;
			b("clearTimeout")(k);
			k = null;
			if (g == null) return;
			var c = g;
			g = null;

			function d() {
				return {
					batch: c
				}
			}
			a === "critical" ? b("OdsWebBatchFalcoEvent").logCritical(d) : b("OdsWebBatchFalcoEvent").log(d)
		}
	};
	h && b("Run").onUnload(function() {
		m.flush("critical")
	});
	a = m;
	e.exports = a
}), null);