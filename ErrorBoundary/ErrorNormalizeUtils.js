__d("ErrorNormalizeUtils", ["ErrorMetadata", "ErrorSerializer", "ErrorXFBDebug", "TAALOpcodes", "getSimpleHash", "performanceNow"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h = [/\(([^\s\)\()]+):(\d+):(\d+)\)$/, /@([^\s\)\()]+):(\d+):(\d+)$/, /^([^\s\)\()]+):(\d+):(\d+)$/, /^at ([^\s\)\()]+):(\d+):(\d+)$/];
	Error.stackTraceLimit != null && Error.stackTraceLimit < 80 && (Error.stackTraceLimit = 80);

	function i(a) {
		var b = a.name,
			c = a.message;
		a = a.stack;
		if (a == null) return null;
		if (b != null && c != null && c !== "") {
			var d = b + ": " + c + "\n";
			if (a.startsWith(d)) return a.substr(d.length);
			if (a === b + ": " + c) return null
		}
		if (b != null) {
			d = b + "\n";
			if (a.startsWith(d)) return a.substr(d.length)
		}
		if (c != null && c !== "") {
			b = ": " + c + "\n";
			d = a.indexOf(b);
			c = a.substring(0, d);
			if (/^\w+$/.test(c)) return a.substring(d + b.length)
		}
		return a
	}

	function j(a) {
		a = a.trim();
		var b;
		a;
		var c, d, e;
		if (a.includes("charset=utf-8;base64,")) b = "<inlined-file>";
		else {
			var f;
			for (var g = 0; g < h.length; g++) {
				var i = h[g];
				f = a.match(i);
				if (f != null) break
			}
			f != null && f.length === 4 ? (c = f[1], d = parseInt(f[2], 10), e = parseInt(f[3], 10), b = a.substring(0, a.length - f[0].length)) : b = a;
			b = b.replace(/^at /, "").trim()
		}
		i = {
			identifier: b,
			script: c,
			line: d,
			column: e
		};
		i.text = k(i);
		return i
	}

	function k(a) {
		var b = a.identifier,
			c = a.script,
			d = a.line;
		a = a.column;
		b = "    at " + ((b = b) != null ? b : "<unknown>");
		c != null && d != null && a != null && (b += " (" + c + ":" + d + ":" + a + ")");
		return b
	}

	function l(a) {
		return a == null || a === "" ? [] : a.split(/\n\n/)[0].split("\n").map(j)
	}

	function m(a) {
		a = i(a);
		return l(a)
	}

	function n(a) {
		if (a == null || a === "") return null;
		a = a.split("\n");
		a.splice(0, 1);
		return a.map(function (a) {
			return a.trim()
		})
	}

	function o(c) {
		var d, e, f, h = m(c),
			i = b("ErrorSerializer").parseFromError(c),
			k = c.framesToPop;
		if (k != null) {
			var l;
			k = Math.min(k, h.length);
			i.taalOpcodes = (l = i.taalOpcodes) != null ? l : [];
			while (k-- > 0) i.taalOpcodes.unshift(b("TAALOpcodes").PREVIOUS_FRAME)
		}
		l = i.message;
		k = ((k = i.params) != null ? k : []).map(function (a) {
			return String(a)
		});
		var p = n(c.componentStack),
			q = p == null ? null : p.map(j),
			r = c.metadata ? c.metadata.format() : new(b("ErrorMetadata"))().format();
		r.length === 0 && (r = void 0);
		var s = h.map(function (a) {
			return a.text
		}).join("\n");
		d = (d = c.errorName) != null ? d : c.name;
		var t = c.type || "error",
			u = c.loggingSource,
			v = c.project;
		e = (e = c.lineNumber) != null ? e : c.line;
		f = (f = c.columnNumber) != null ? f : c.column;
		q = {
			blameModule: c.blameModule,
			column: f == null ? null : String(f),
			clientTime: Math.floor(Date.now() / 1e3),
			componentStackFrames: q,
			deferredSource: c.deferredSource != null ? o(c.deferredSource) : null,
			extra: (f = c.extra) != null ? f : {},
			fbtrace_id: c.fbtrace_id,
			guardList: (q = c.guardList) != null ? q : [],
			hash: b("getSimpleHash")(d, s, t, v, u),
			isNormalizedError: !0,
			line: e == null ? null : String(e),
			loggingSource: u,
			message: b("ErrorSerializer").toReadableMessage(l, k),
			messageFormat: l,
			messageParams: k,
			metadata: r,
			name: d,
			page_time: Math.floor((g || (g = b("performanceNow")))()),
			project: v,
			reactComponentStack: p,
			script: (f = c.fileName) != null ? f : c.sourceURL,
			serverHash: c.serverHash,
			stack: s,
			stackFrames: h,
			type: t,
			xFBDebug: b("ErrorXFBDebug").getAll()
		};
		i.forcedKey != null && (q.forcedKey = i.forcedKey);
		i.taalOpcodes && (q.taalOpcodes = i.taalOpcodes);
		e = a.location;
		e && (q.windowLocationURL = e.href);
		for (var w in q) q[w] == null && delete q[w];
		return q
	}

	function c(a) {
		return a != null && typeof a === "object" && a.isNormalizedError === !0 ? a : null
	}
	e.exports = {
		ifNormalizedError: c,
		normalizeError: o,
		formatStackFrame: k
	}
}), null);