__d("d3-old/time/time", [], (function(a, b, c, d, e, f) {
	b = {};
	c = Date;
	d = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	function a() {
		this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
	}
	a.prototype = {
		getDate: function() {
			return this._.getUTCDate()
		},
		getDay: function() {
			return this._.getUTCDay()
		},
		getFullYear: function() {
			return this._.getUTCFullYear()
		},
		getHours: function() {
			return this._.getUTCHours()
		},
		getMilliseconds: function() {
			return this._.getUTCMilliseconds()
		},
		getMinutes: function() {
			return this._.getUTCMinutes()
		},
		getMonth: function() {
			return this._.getUTCMonth()
		},
		getSeconds: function() {
			return this._.getUTCSeconds()
		},
		getTime: function() {
			return this._.getTime()
		},
		getTimezoneOffset: function() {
			return 0
		},
		valueOf: function() {
			return this._.valueOf()
		},
		setDate: function() {
			g.setUTCDate.apply(this._, arguments)
		},
		setDay: function() {
			g.setUTCDay.apply(this._, arguments)
		},
		setFullYear: function() {
			g.setUTCFullYear.apply(this._, arguments)
		},
		setHours: function() {
			g.setUTCHours.apply(this._, arguments)
		},
		setMilliseconds: function() {
			g.setUTCMilliseconds.apply(this._, arguments)
		},
		setMinutes: function() {
			g.setUTCMinutes.apply(this._, arguments)
		},
		setMonth: function() {
			g.setUTCMonth.apply(this._, arguments)
		},
		setSeconds: function() {
			g.setUTCSeconds.apply(this._, arguments)
		},
		setTime: function() {
			g.setTime.apply(this._, arguments)
		}
	};
	var g = Date.prototype;
	b._time = c;
	b._daySymbols = d;
	b._utc = a;
	e.exports = b
}), null);
__d("d3-old/time/interval", ["d3-old/time/time"], (function(a, b, c, d, e, f) {
	var g = b("d3-old/time/time")._utc;

	function a(a, c, d) {
		function e(b) {
			var c = a(b),
				d = i(c, 1);
			return b - c < d - b ? c : d
		}

		function f(d) {
			c(d = a(new(b("d3-old/time/time")._time)(d - 1)), 1);
			return d
		}

		function i(a, d) {
			c(a = new(b("d3-old/time/time")._time)(+a), d);
			return a
		}

		function j(a, b, e) {
			a = f(a);
			var g = [];
			if (e > 1)
				while (a < b) d(a) % e || g.push(new Date(+a)), c(a, 1);
			else
				while (a < b) g.push(new Date(+a)), c(a, 1);
			return g
		}

		function k(c, d, e) {
			try {
				b("d3-old/time/time")._time = g;
				var a = new g();
				a._ = c;
				return j(a, d, e)
			} finally {
				b("d3-old/time/time")._time = Date
			}
		}
		a.floor = a;
		a.round = e;
		a.ceil = f;
		a.offset = i;
		a.range = j;
		var l = a.utc = h(a);
		l.floor = l;
		l.round = h(e);
		l.ceil = h(f);
		l.offset = h(i);
		l.range = k;
		return a
	}

	function h(a) {
		return function(c, d) {
			try {
				b("d3-old/time/time")._time = g;
				var e = new g();
				e._ = c;
				return a(e, d)._
			} finally {
				b("d3-old/time/time")._time = Date
			}
		}
	}
	f._interval = a
}), null);
__d("d3-old/time/day", ["d3-old/time/interval", "d3-old/time/time", "d3-old/time/year"], (function(a, b, c, d, e, f) {
	a = b("d3-old/time/interval")._interval;
	c = a(function(a) {
		var c = new(b("d3-old/time/time")._time)(1970, 0);
		c.setFullYear(a.getFullYear(), a.getMonth(), a.getDate());
		return c
	}, function(a, b) {
		a.setDate(a.getDate() + b)
	}, function(a) {
		return a.getDate() - 1
	});
	c.s = c.range;
	c.s.utc = c.utc.range;
	c.ofYear = function(a) {
		var c = b("d3-old/time/year")(a);
		return Math.floor((a - c - (a.getTimezoneOffset() - c.getTimezoneOffset()) * 6e4) / 864e5)
	};
	e.exports = c
}), null);
__d("d3-old/time/year", ["d3-old/time/interval", "d3-old/time/day"], (function(a, b, c, d, e, f) {
	a = b("d3-old/time/interval")._interval;
	c = a(function(a) {
		a = b("d3-old/time/day")(a);
		a.setMonth(0, 1);
		return a
	}, function(a, b) {
		a.setFullYear(a.getFullYear() + b)
	}, function(a) {
		return a.getFullYear()
	});
	c.s = c.range;
	c.s.utc = c.utc.range;
	e.exports = c
}), null);
__d("d3-old/time/month", ["d3-old/time/day", "d3-old/time/interval"], (function(a, b, c, d, e, f) {
	a = b("d3-old/time/interval")._interval;
	c = a(function(a) {
		a = b("d3-old/time/day")(a);
		a.setDate(1);
		return a
	}, function(a, b) {
		a.setMonth(a.getMonth() + b)
	}, function(a) {
		return a.getMonth()
	});
	c.s = c.range;
	c.s.utc = c.utc.range;
	e.exports = c
}), null);