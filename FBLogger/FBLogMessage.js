__d("FBLogMessage", ["ErrorMetadata", "ErrorNormalizeUtils", "ErrorPubSub", "ErrorSerializer", "TAALOpcodes"], (function (a, b, c, d, e, f) {
	"use strict";
	var g;
	a = function () {
		function a(a) {
			this.project = a, this.events = [], this.metadata = new(b("ErrorMetadata"))(), this.taalOpcodes = []
		}
		var c = a.prototype;
		c.$1 = function (c, d) {
			var e = String(d),
				f = this.error,
				h = this.events,
				i = this.project,
				j = this.metadata,
				k = this.blameModule,
				l = this.forcedKey,
				m;
			for (var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), p = 2; p < n; p++) o[p - 2] = arguments[p];
			if (this.normalizedError) {
				var q = {
					message: this.normalizedError.messageFormat + " [Caught in: " + e + "]",
					params: [].concat(this.normalizedError.messageParams, o),
					forcedKey: l
				};
				m = Object.assign({}, this.normalizedError, {
					message: b("ErrorSerializer").toFormattedMessage(q),
					messageFormat: q.message,
					messageParams: b("ErrorSerializer").toStringParams(q.params),
					project: i,
					type: c
				})
			} else if (f) this.taalOpcodes.length > 0 && new a("fblogger").blameToPreviousFrame().blameToPreviousFrame().warn("Blame helpers do not work with catching"), b("ErrorSerializer").aggregateError(f, {
				messageFormat: e,
				messageParams: b("ErrorSerializer").toStringParams(o),
				errorName: f.name,
				forcedKey: l,
				project: i,
				type: c
			}), m = b("ErrorNormalizeUtils").normalizeError(f);
			else {
				var r = new Error(e);
				if (r.stack === void 0) try {
					throw r
				} catch (a) {}
				r.messageFormat = e;
				r.messageParams = b("ErrorSerializer").toStringParams(o);
				r.blameModule = k;
				r.forcedKey = l;
				r.project = i;
				r.name = "FBLogger";
				r.type = c;
				r.taalOpcodes = [b("TAALOpcodes").PREVIOUS_FRAME, b("TAALOpcodes").PREVIOUS_FRAME].concat(this.taalOpcodes);
				m = b("ErrorNormalizeUtils").normalizeError(r)
			}
			m.loggingSource = "FBLOGGER";
			j.isEmpty() || (m.metadata = j.format());
			if (h.length > 0)
				if (m.events != null) {
					var s;
					(s = m.events).push.apply(s, h)
				} else m.events = h;
			(g || (g = b("ErrorPubSub"))).reportNormalizedError(m)
		};
		c.fatal = function (a) {
			for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
			this.$1.apply(this, ["fatal", a].concat(c))
		};
		c.mustfix = function (a) {
			for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
			this.$1.apply(this, ["error", a].concat(c))
		};
		c.warn = function (a) {
			for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
			this.$1.apply(this, ["warn", a].concat(c))
		};
		c.info = function (a) {
			for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
			this.$1.apply(this, ["info", a].concat(c))
		};
		c.debug = function (a) {};
		c.catching = function (b) {
			!(b instanceof Error) ? new a("fblogger").blameToPreviousFrame().warn("Catching non-Error object is not supported"): this.error = b;
			return this
		};
		c.catchingNormalizedError = function (a) {
			this.normalizedError = a;
			return this
		};
		c.event = function (a) {
			this.events.push(a);
			return this
		};
		c.blameToModule = function (a) {
			this.blameModule = a;
			return this
		};
		c.blameToPreviousFile = function () {
			this.taalOpcodes.push(b("TAALOpcodes").PREVIOUS_FILE);
			return this
		};
		c.blameToPreviousFrame = function () {
			this.taalOpcodes.push(b("TAALOpcodes").PREVIOUS_FRAME);
			return this
		};
		c.blameToPreviousDirectory = function () {
			this.taalOpcodes.push(b("TAALOpcodes").PREVIOUS_DIR);
			return this
		};
		c.addToCategoryKey = function (a) {
			this.forcedKey = a;
			return this
		};
		c.addMetadata = function (a, b, c) {
			this.metadata.addEntry(a, b, c);
			return this
		};
		return a
	}();
	e.exports = a
}), null);