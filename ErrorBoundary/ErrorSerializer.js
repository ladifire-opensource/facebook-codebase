__d("ErrorSerializer", ["ErrorMetadata"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = {
		debug: 1,
		info: 2,
		warn: 3,
		error: 4,
		fatal: 5
	};

	function h(a) {
		try {
			var b = o(a, /^([\s\S]*)<\!\[EX\[(\[.*\])\]\]>([\s\S]*)$/);
			if (!b) return n(a);
			var c = b[0],
				d = b[1];
			b = b[2];
			d = JSON.parse(d);
			var e = d[0];
			d = d.slice(1);
			e = n(e);
			e.message = c + e.message + b;
			d && d.length > 0 && (e.params = d.map(function (a) {
				return String(a)
			}));
			return e
		} catch (b) {
			return {
				message: "Unable to parse error message %s because %s",
				params: [a, b.message]
			}
		}
	}

	function c(a) {
		return "<![EX[" + JSON.stringify(k(a)) + "]]>"
	}

	function i(a) {
		if (a.messageFormat == null) return h(a.message);
		var b = {
			message: String(a.messageFormat)
		};
		a.messageParams && (b.params = [].concat(a.messageParams));
		b.forcedKey = a.forcedKey;
		a.taalOpcodes && (b.taalOpcodes = a.taalOpcodes);
		return b
	}

	function d(a, c) {
		var d = i(a);
		if (Object.isFrozen(a)) return;
		c.type && ((!a.type || g[a.type] > g[c.type]) && (a.type = c.type));
		var e = c.metadata;
		if (e != null) {
			var f;
			f = (f = a.metadata) != null ? f : new(b("ErrorMetadata"))();
			f.addEntries.apply(f, e.getAll());
			a.metadata = f
		}
		c.project != null && (a.project = c.project);
		c.errorName != null && (a.errorName = c.errorName);
		c.componentStack != null && (a.componentStack = c.componentStack);
		c.deferredSource != null && (a.deferredSource = c.deferredSource);
		e = d.message;
		f = m(d.params);
		if (e !== c.messageFormat && c.messageFormat != null) {
			var h;
			e += " [Caught in: " + c.messageFormat + "]";
			f.push.apply(f, (h = c.messageParams) != null ? h : [])
		}
		a.messageFormat = e;
		a.messageParams = f;
		h = c.forcedKey;
		e = d.forcedKey;
		c = h != null && e != null ? h + "_" + e : (f = h) != null ? f : e;
		a.forcedKey = c;
		d.taalOpcodes != null && (a.taalOpcodes = d.taalOpcodes)
	}

	function j(a, b) {
		var c = 0;
		a = a.replace(/%s/g, function () {
			return c < b.length ? b[c++] : "NOPARAM"
		});
		c < b.length && (a += " PARAMS" + JSON.stringify(b.slice(c)));
		return a
	}

	function f(a) {
		var b = a.message || "",
			c = m(a.params);
		return j(b, c) + l(a)
	}

	function k(a) {
		return [a.message + l(a)].concat(m(a.params))
	}

	function l(a) {
		var b = a.taalOpcodes;
		a = a.forcedKey;
		var c = [];
		b && c.push.apply(c, b);
		a && c.push("4" + a.replace(/[^\d\w]/g, "_"));
		return c.length > 0 ? " TAAL[" + c.join(";") + "]" : ""
	}

	function m(a) {
		return ((a = a) != null ? a : []).map(function (a) {
			return String(a)
		})
	}

	function n(a) {
		var b = o(a, /^([\s\S]*) TAAL\[(.*)\]$/);
		b = (b = b) != null ? b : [a, null];
		var c = b[0];
		b = b[1];
		c = {
			message: c
		};
		if (b) {
			var d = [];
			for (var b = b.split(";"), e = Array.isArray(b), f = 0, b = e ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
				var g;
				if (e) {
					if (f >= b.length) break;
					g = b[f++]
				} else {
					f = b.next();
					if (f.done) break;
					g = f.value
				}
				g = g;
				if (g === "1" || g === "2" || g === "3") d.push(parseInt(g, 10));
				else if (g[0] === "4" && g.length > 1) c.forcedKey = g.substring(1);
				else return {
					message: a
				}
			}
			d.length > 0 && (c.taalOpcodes = d)
		}
		return c
	}

	function o(a, b) {
		if (typeof a === "string") {
			a = a.match(b);
			if (a && a.length > 0) return a.slice(1)
		}
	}
	e.exports = a.ErrorSerializer = {
		aggregateError: d,
		parseFromError: i,
		stringify: c,
		toFormattedMessage: f,
		toReadableMessage: j,
		toMessageWithParams: k,
		toStringParams: m
	}
}), 3);