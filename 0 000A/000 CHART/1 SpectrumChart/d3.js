__d("d3-old/core/bisect", [], (function(a, b, c, d, e, f) {
	a = function(a) {
		return {
			left: function(b, c, d, e) {
				arguments.length < 3 && (d = 0);
				arguments.length < 4 && (e = b.length);
				while (d < e) {
					var f = d + e >>> 1;
					a.call(b, b[f], f) < c ? d = f + 1 : e = f
				}
				return d
			},
			right: function(b, c, d, e) {
				arguments.length < 3 && (d = 0);
				arguments.length < 4 && (e = b.length);
				while (d < e) {
					var f = d + e >>> 1;
					c < a.call(b, b[f], f) ? e = f : d = f + 1
				}
				return d
			}
		}
	};
	b = a(function(a) {
		return a
	});
	c = b.right;
	c.left = b.left;
	c.right = c;
	c.or = a;
	e.exports = c
}), null);
__d("d3-old/core/class", [], (function(a, b, c, d, e, f) {
	function a(a, b) {
		try {
			for (var c in b) Object.defineProperty(a.prototype, c, {
				value: b[c],
				enumerable: !1
			})
		} catch (c) {
			a.prototype = b
		}
	}
	f._class = a
}), null);
__d("d3-old/core/color", [], (function(a, b, c, d, e, f) {
	function a() {}
	a.prototype.toString = function() {
		return this.rgb() + ""
	};
	f._Color = a
}), null);
__d("d3-old/core/core", [], (function(a, b, c, d, e, f) {
	c = Math.PI;
	d = 1e-6;
	f = {
		version: "3.0.6"
	};
	var g = c / 180,
		h = 180 / c,
		i = typeof document === "undefined" ? null : document,
		j = typeof window === "undefined" ? null : window;

	function a(a) {
		return a.target
	}

	function b(a) {
		return a.source
	}
	f._u03c0 = c;
	f._u03b5 = d;
	f._radians = g;
	f._degrees = h;
	f._document = i;
	f._window = j;
	f._target = a;
	f._source = b;
	e.exports = f
}), null);
__d("d3-old/core/format-en_US", [], (function(a, b, c, d, e, f) {
	a = ".";
	b = ",";
	c = [3, 3];
	f._decimalPoint = a;
	f._thousandsSeparator = b;
	f._grouping = c
}), null);
__d("d3-old/core/identity", [], (function(a, b, c, d, e, f) {
	function a(a) {
		return a
	}
	f._identity = a
}), null);
__d("d3-old/core/map", ["d3-old/core/class"], (function(a, b, c, d, e, f) {
	a = b("d3-old/core/class")._class;
	c = function(a) {
		var b = new g();
		for (var c in a) b.set(c, a[c]);
		return b
	};

	function g() {}
	a(g, {
		has: function(a) {
			return h + a in this
		},
		get: function(a) {
			return this[h + a]
		},
		set: function(a, b) {
			return this[h + a] = b
		},
		remove: function(a) {
			a = h + a;
			return a in this && delete this[a]
		},
		keys: function() {
			var a = [];
			this.forEach(function(b) {
				a.push(b)
			});
			return a
		},
		values: function() {
			var a = [];
			this.forEach(function(b, c) {
				a.push(c)
			});
			return a
		},
		entries: function() {
			var a = [];
			this.forEach(function(b, c) {
				a.push({
					key: b,
					value: c
				})
			});
			return a
		},
		forEach: function(a) {
			for (var b in this) b.charCodeAt(0) === i && a.call(this, b.substring(1), this[b])
		}
	});
	var h = "\0",
		i = h.charCodeAt(0);
	c._Map = g;
	e.exports = c
}), null);
__d("d3-old/core/round", [], (function(a, b, c, d, e, f) {
	a = function(a, b) {
		return b ? Math.round(a * (b = Math.pow(10, b))) / b : Math.round(a)
	};
	e.exports = a
}), null);
__d("d3-old/core/format", ["d3-old/core/format-en_US", "d3-old/core/formatPrefix", "d3-old/core/identity", "d3-old/core/map", "d3-old/core/round"], (function(a, b, c, d, e, f) {
	var g = b("d3-old/core/format-en_US")._decimalPoint;
	a = b("d3-old/core/identity")._identity;
	var h = b("d3-old/core/format-en_US")._grouping,
		i = b("d3-old/core/format-en_US")._thousandsSeparator;
	c = function(a) {
		a = j.exec(a);
		var c = a[1] || " ",
			d = a[2] || ">",
			e = a[3] || "",
			f = a[4] || "",
			h = a[5],
			i = +a[6],
			l = a[7],
			o = a[8],
			p = a[9],
			q = 1,
			r = "",
			s = !1;
		o && (o = +o.substring(1));
		(h || c === "0" && d === "=") && (h = c = "0", d = "=", l && (i -= Math.floor((i - 1) / 4)));
		switch (p) {
			case "n":
				l = !0;
				p = "g";
				break;
			case "%":
				q = 100;
				r = "%";
				p = "f";
				break;
			case "p":
				q = 100;
				r = "%";
				p = "r";
				break;
			case "b":
			case "o":
			case "x":
			case "X":
				f && (f = "0" + p.toLowerCase());
			case "c":
			case "d":
				s = !0;
				o = 0;
				break;
			case "s":
				q = -1;
				p = "r";
				break
		}
		f === "#" && (f = "");
		p == "r" && !o && (p = "g");
		p = k.get(p) || m;
		var t = h && l;
		return function(a) {
			if (s && a % 1) return "";
			var j = a < 0 || a === 0 && 1 / a < 0 ? (a = -a, "-") : e;
			if (q < 0) {
				var k = b("d3-old/core/formatPrefix")(a, o);
				a = k.scale(a);
				r = k.symbol
			} else a *= q;
			a = p(a, o);
			!h && l && (a = n(a));
			k = f.length + a.length + (t ? 0 : j.length);
			var m = k < i ? new Array(k = i - k + 1).join(c) : "";
			t && (a = n(m + a));
			g && a.replace(".", g);
			j += f;
			return (d === "<" ? j + a + m : d === ">" ? m + j + a : d === "^" ? m.substring(0, k >>= 1) + j + a + m.substring(k) : j + (t ? a : m + a)) + r
		}
	};
	var j = /(?:([^{])?([<>=^]))?([+\- ])?(#)?(0)?([0-9]+)?(,)?(\.[0-9]+)?([a-zA-Z%])?/,
		k = b("d3-old/core/map")({
			b: function(a) {
				return a.toString(2)
			},
			c: function(a) {
				return String.fromCharCode(a)
			},
			o: function(a) {
				return a.toString(8)
			},
			x: function(a) {
				return a.toString(16)
			},
			X: function(a) {
				return a.toString(16).toUpperCase()
			},
			g: function(a, b) {
				return a.toPrecision(b)
			},
			e: function(a, b) {
				return a.toExponential(b)
			},
			f: function(a, b) {
				return a.toFixed(b)
			},
			r: function(a, c) {
				return (a = b("d3-old/core/round")(a, l(a, c))).toFixed(Math.max(0, Math.min(20, l(a * (1 + 1e-15), c))))
			}
		});

	function l(a, b) {
		return b - (a ? Math.ceil(Math.log(a) / Math.LN10) : 1)
	}

	function m(a) {
		return a + ""
	}
	var n = a;
	if (h) {
		var o = h.length;
		n = function(a) {
			var b = a.lastIndexOf("."),
				c = b >= 0 ? "." + a.substring(b + 1) : (b = a.length, ""),
				d = [],
				e = 0,
				f = h[0];
			while (b > 0 && f > 0) d.push(a.substring(b -= f, b + f)), f = h[e = (e + 1) % o];
			return d.reverse().join(i || "") + c
		}
	}
	c._precision = l;
	e.exports = c
}), null);
__d("d3-old/core/formatPrefix", ["d3-old/core/format", "d3-old/core/round"], (function(a, b, c, d, e, f) {
	var g = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(a);
	c = function(a, c) {
		var d = 0;
		a && (a < 0 && (a *= -1), c && (a = b("d3-old/core/round")(a, b("d3-old/core/format")._precision(a, c))), d = 1 + Math.floor(1e-12 + Math.log(a) / Math.LN10), d = Math.max(-24, Math.min(24, Math.floor((d <= 0 ? d + 1 : d - 1) / 3) * 3)));
		return g[8 + d / 3]
	};

	function a(a, b) {
		var c = Math.pow(10, Math.abs(8 - b) * 3);
		return {
			scale: b > 8 ? function(a) {
				return a / c
			} : function(a) {
				return a * c
			},
			symbol: a
		}
	}
	e.exports = c
}), null);
__d("d3-old/core/hcl", ["d3-old/core/color", "d3-old/core/core", "d3-old/core/lab", "d3-old/core/rgb"], (function(a, b, c, d, e, f) {
	a = b("d3-old/core/color")._Color;
	var g = b("d3-old/core/core")._radians;
	c = function(a, c, d) {
		return arguments.length === 1 ? a instanceof i ? h(a.h, a.c, a.l) : a instanceof b("d3-old/core/lab")._Lab ? b("d3-old/core/lab")._hcl(a.l, a.a, a.b) : b("d3-old/core/lab")._hcl((a = b("d3-old/core/rgb")._lab((a = b("d3-old/core/rgb")(a)).r, a.g, a.b)).l, a.a, a.b) : h(+a, +c, +d)
	};

	function h(a, b, c) {
		return new i(a, b, c)
	}

	function i(a, b, c) {
		this.h = a, this.c = b, this.l = c
	}
	d = i.prototype = new a();
	d.brighter = function(a) {
		return h(this.h, this.c, Math.min(100, this.l + b("d3-old/core/lab")._K * (arguments.length ? a : 1)))
	};
	d.darker = function(a) {
		return h(this.h, this.c, Math.max(0, this.l - b("d3-old/core/lab")._K * (arguments.length ? a : 1)))
	};
	d.rgb = function() {
		return j(this.h, this.c, this.l).rgb()
	};

	function j(a, c, d) {
		return b("d3-old/core/lab")._lab(d, Math.cos(a *= g) * c, Math.sin(a) * c)
	}
	c._Hcl = i;
	c._hcl = h;
	c._lab = j;
	e.exports = c
}), null);
__d("d3-old/core/hsl", ["d3-old/core/color", "d3-old/core/rgb"], (function(a, b, c, d, e, f) {
	a = b("d3-old/core/color")._Color;
	c = function(a, c, d) {
		return arguments.length === 1 ? a instanceof h ? g(a.h, a.s, a.l) : b("d3-old/core/rgb")._parse("" + a, b("d3-old/core/rgb")._hsl, g) : g(+a, +c, +d)
	};

	function g(a, b, c) {
		return new h(a, b, c)
	}

	function h(a, b, c) {
		this.h = a, this.s = b, this.l = c
	}
	d = h.prototype = new a();
	d.brighter = function(a) {
		a = Math.pow(.7, arguments.length ? a : 1);
		return g(this.h, this.s, this.l / a)
	};
	d.darker = function(a) {
		a = Math.pow(.7, arguments.length ? a : 1);
		return g(this.h, this.s, a * this.l)
	};
	d.rgb = function() {
		return i(this.h, this.s, this.l)
	};

	function i(a, c, d) {
		var e, f;
		a = a % 360;
		a < 0 && (a += 360);
		c = c < 0 ? 0 : c > 1 ? 1 : c;
		d = d < 0 ? 0 : d > 1 ? 1 : d;
		f = d <= .5 ? d * (1 + c) : d + c - d * c;
		e = 2 * d - f;

		function g(a) {
			a > 360 ? a -= 360 : a < 0 && (a += 360);
			if (a < 60) return e + (f - e) * a / 60;
			if (a < 180) return f;
			return a < 240 ? e + (f - e) * (240 - a) / 60 : e
		}

		function h(a) {
			return Math.round(g(a) * 255)
		}
		return b("d3-old/core/rgb")._rgb(h(a + 120), h(a), h(a - 120))
	}
	c._hsl = g;
	c._rgb = i;
	e.exports = c
}), null);
__d("d3-old/core/xyz", [], (function(a, b, c, d, e, f) {
	function a(a) {
		return a > .008856 ? Math.pow(a, 1 / 3) : 7.787037 * a + 4 / 29
	}

	function b(a) {
		return Math.round(255 * (a <= .00304 ? 12.92 * a : 1.055 * Math.pow(a, 1 / 2.4) - .055))
	}
	f._lab = a;
	f._rgb = b
}), null);
__d("d3-old/core/lab", ["d3-old/core/color", "d3-old/core/core", "d3-old/core/hcl", "d3-old/core/rgb", "d3-old/core/xyz"], (function(a, b, c, d, e, f) {
	c = b("d3-old/core/color")._Color;
	var g = b("d3-old/core/xyz")._rgb,
		h = b("d3-old/core/core")._u03c0;
	d = function(a, c, d) {
		return arguments.length === 1 ? a instanceof j ? i(a.l, a.a, a.b) : a instanceof b("d3-old/core/hcl")._Hcl ? b("d3-old/core/hcl")._lab(a.l, a.c, a.h) : b("d3-old/core/rgb")._lab((a = b("d3-old/core/rgb")(a)).r, a.g, a.b) : i(+a, +c, +d)
	};

	function i(a, b, c) {
		return new j(a, b, c)
	}

	function j(a, b, c) {
		this.l = a, this.a = b, this.b = c
	}
	var k = 18,
		l = .95047,
		m = 1,
		n = 1.08883;
	f = j.prototype = new c();
	f.brighter = function(a) {
		return i(Math.min(100, this.l + k * (arguments.length ? a : 1)), this.a, this.b)
	};
	f.darker = function(a) {
		return i(Math.max(0, this.l - k * (arguments.length ? a : 1)), this.a, this.b)
	};
	f.rgb = function() {
		return o(this.l, this.a, this.b)
	};

	function o(a, c, d) {
		a = (a + 16) / 116;
		c = a + c / 500;
		d = a - d / 200;
		c = p(c) * l;
		a = p(a) * m;
		d = p(d) * n;
		return b("d3-old/core/rgb")._rgb(g(3.2404542 * c - 1.5371385 * a - .4985314 * d), g(-.969266 * c + 1.8760108 * a + .041556 * d), g(.0556434 * c - .2040259 * a + 1.0572252 * d))
	}

	function a(a, c, d) {
		return b("d3-old/core/hcl")._hcl(Math.atan2(d, c) / h * 180, Math.sqrt(c * c + d * d), a)
	}

	function p(a) {
		return a > .206893034 ? a * a * a : (a - 4 / 29) / 7.787037
	}
	d._K = k;
	d._X = l;
	d._Y = m;
	d._Z = n;
	d._Lab = j;
	d._lab = i;
	d._rgb = o;
	d._hcl = a;
	e.exports = d
}), null);
__d("d3-old/core/rgb", ["d3-old/core/color", "d3-old/core/hsl", "d3-old/core/lab", "d3-old/core/map", "d3-old/core/xyz"], (function(a, b, c, d, e, f) {
	c = b("d3-old/core/color")._Color;
	var g = b("d3-old/core/xyz")._lab;
	d = function(a, c, d) {
		return arguments.length === 1 ? a instanceof i ? h(a.r, a.g, a.b) : k("" + a, h, b("d3-old/core/hsl")._rgb) : h(~~a, ~~c, ~~d)
	};

	function h(a, b, c) {
		return new i(a, b, c)
	}

	function i(a, b, c) {
		this.r = a, this.g = b, this.b = c
	}
	f = i.prototype = new c();
	f.brighter = function(a) {
		a = Math.pow(.7, arguments.length ? a : 1);
		var b = this.r,
			c = this.g,
			d = this.b,
			e = 30;
		if (!b && !c && !d) return h(e, e, e);
		b && b < e && (b = e);
		c && c < e && (c = e);
		d && d < e && (d = e);
		return h(Math.min(255, Math.floor(b / a)), Math.min(255, Math.floor(c / a)), Math.min(255, Math.floor(d / a)))
	};
	f.darker = function(a) {
		a = Math.pow(.7, arguments.length ? a : 1);
		return h(Math.floor(a * this.r), Math.floor(a * this.g), Math.floor(a * this.b))
	};
	f.hsl = function() {
		return l(this.r, this.g, this.b)
	};
	f.toString = function() {
		return "#" + j(this.r) + j(this.g) + j(this.b)
	};

	function j(a) {
		return a < 16 ? "0" + Math.max(0, a).toString(16) : Math.min(255, a).toString(16)
	}

	function k(a, b, c) {
		var d = 0,
			e = 0,
			f = 0,
			g, h;
		g = /([a-z]+)\((.*)\)/i.exec(a);
		if (g) {
			h = g[2].split(",");
			switch (g[1]) {
				case "hsl":
					return c(parseFloat(h[0]), parseFloat(h[1]) / 100, parseFloat(h[2]) / 100);
				case "rgb":
					return b(n(h[0]), n(h[1]), n(h[2]))
			}
		}
		if (g = o.get(a)) return b(g.r, g.g, g.b);
		a != null && a.charAt(0) === "#" && (a.length === 4 ? (d = a.charAt(1), d += d, e = a.charAt(2), e += e, f = a.charAt(3), f += f) : a.length === 7 && (d = a.substring(1, 3), e = a.substring(3, 5), f = a.substring(5, 7)), d = parseInt(d, 16), e = parseInt(e, 16), f = parseInt(f, 16));
		return b(d, e, f)
	}

	function l(a, c, d) {
		var e = Math.min(a /= 255, c /= 255, d /= 255),
			f = Math.max(a, c, d),
			g = f - e,
			h, i = (f + e) / 2;
		g ? (e = i < .5 ? g / (f + e) : g / (2 - f - e), a == f ? h = (c - d) / g + (c < d ? 6 : 0) : c == f ? h = (d - a) / g + 2 : h = (a - c) / g + 4, h *= 60) : e = h = 0;
		return b("d3-old/core/hsl")._hsl(h, e, i)
	}

	function a(a, c, d) {
		var e;
		a = m(a);
		c = m(c);
		d = m(d);
		var f = g((.4124564 * a + .3575761 * c + .1804375 * d) / (e = b("d3-old/core/lab"))._X),
			h = g((.2126729 * a + .7151522 * c + .072175 * d) / e._Y);
		a = g((.0193339 * a + .119192 * c + .9503041 * d) / e._Z);
		return e._lab(116 * h - 16, 500 * (f - h), 200 * (h - a))
	}

	function m(a) {
		return (a /= 255) <= .04045 ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4)
	}

	function n(a) {
		var b = parseFloat(a);
		return a.charAt(a.length - 1) === "%" ? Math.round(b * 2.55) : b
	}
	var o = b("d3-old/core/map")({
		aliceblue: "#f0f8ff",
		antiquewhite: "#faebd7",
		aqua: "#00ffff",
		aquamarine: "#7fffd4",
		azure: "#f0ffff",
		beige: "#f5f5dc",
		bisque: "#ffe4c4",
		black: "#000000",
		blanchedalmond: "#ffebcd",
		blue: "#0000ff",
		blueviolet: "#8a2be2",
		brown: "#a52a2a",
		burlywood: "#deb887",
		cadetblue: "#5f9ea0",
		chartreuse: "#7fff00",
		chocolate: "#d2691e",
		coral: "#ff7f50",
		cornflowerblue: "#6495ed",
		cornsilk: "#fff8dc",
		crimson: "#dc143c",
		cyan: "#00ffff",
		darkblue: "#00008b",
		darkcyan: "#008b8b",
		darkgoldenrod: "#b8860b",
		darkgray: "#a9a9a9",
		darkgreen: "#006400",
		darkgrey: "#a9a9a9",
		darkkhaki: "#bdb76b",
		darkmagenta: "#8b008b",
		darkolivegreen: "#556b2f",
		darkorange: "#ff8c00",
		darkorchid: "#9932cc",
		darkred: "#8b0000",
		darksalmon: "#e9967a",
		darkseagreen: "#8fbc8f",
		darkslateblue: "#483d8b",
		darkslategray: "#2f4f4f",
		darkslategrey: "#2f4f4f",
		darkturquoise: "#00ced1",
		darkviolet: "#9400d3",
		deeppink: "#ff1493",
		deepskyblue: "#00bfff",
		dimgray: "#696969",
		dimgrey: "#696969",
		dodgerblue: "#1e90ff",
		firebrick: "#b22222",
		floralwhite: "#fffaf0",
		forestgreen: "#228b22",
		fuchsia: "#ff00ff",
		gainsboro: "#dcdcdc",
		ghostwhite: "#f8f8ff",
		gold: "#ffd700",
		goldenrod: "#daa520",
		gray: "#808080",
		green: "#008000",
		greenyellow: "#adff2f",
		grey: "#808080",
		honeydew: "#f0fff0",
		hotpink: "#ff69b4",
		indianred: "#cd5c5c",
		indigo: "#4b0082",
		ivory: "#fffff0",
		khaki: "#f0e68c",
		lavender: "#e6e6fa",
		lavenderblush: "#fff0f5",
		lawngreen: "#7cfc00",
		lemonchiffon: "#fffacd",
		lightblue: "#add8e6",
		lightcoral: "#f08080",
		lightcyan: "#e0ffff",
		lightgoldenrodyellow: "#fafad2",
		lightgray: "#d3d3d3",
		lightgreen: "#90ee90",
		lightgrey: "#d3d3d3",
		lightpink: "#ffb6c1",
		lightsalmon: "#ffa07a",
		lightseagreen: "#20b2aa",
		lightskyblue: "#87cefa",
		lightslategray: "#778899",
		lightslategrey: "#778899",
		lightsteelblue: "#b0c4de",
		lightyellow: "#ffffe0",
		lime: "#00ff00",
		limegreen: "#32cd32",
		linen: "#faf0e6",
		magenta: "#ff00ff",
		maroon: "#800000",
		mediumaquamarine: "#66cdaa",
		mediumblue: "#0000cd",
		mediumorchid: "#ba55d3",
		mediumpurple: "#9370db",
		mediumseagreen: "#3cb371",
		mediumslateblue: "#7b68ee",
		mediumspringgreen: "#00fa9a",
		mediumturquoise: "#48d1cc",
		mediumvioletred: "#c71585",
		midnightblue: "#191970",
		mintcream: "#f5fffa",
		mistyrose: "#ffe4e1",
		moccasin: "#ffe4b5",
		navajowhite: "#ffdead",
		navy: "#000080",
		oldlace: "#fdf5e6",
		olive: "#808000",
		olivedrab: "#6b8e23",
		orange: "#ffa500",
		orangered: "#ff4500",
		orchid: "#da70d6",
		palegoldenrod: "#eee8aa",
		palegreen: "#98fb98",
		paleturquoise: "#afeeee",
		palevioletred: "#db7093",
		papayawhip: "#ffefd5",
		peachpuff: "#ffdab9",
		peru: "#cd853f",
		pink: "#ffc0cb",
		plum: "#dda0dd",
		powderblue: "#b0e0e6",
		purple: "#800080",
		red: "#ff0000",
		rosybrown: "#bc8f8f",
		royalblue: "#4169e1",
		saddlebrown: "#8b4513",
		salmon: "#fa8072",
		sandybrown: "#f4a460",
		seagreen: "#2e8b57",
		seashell: "#fff5ee",
		sienna: "#a0522d",
		silver: "#c0c0c0",
		skyblue: "#87ceeb",
		slateblue: "#6a5acd",
		slategray: "#708090",
		slategrey: "#708090",
		snow: "#fffafa",
		springgreen: "#00ff7f",
		steelblue: "#4682b4",
		tan: "#d2b48c",
		teal: "#008080",
		thistle: "#d8bfd8",
		tomato: "#ff6347",
		turquoise: "#40e0d0",
		violet: "#ee82ee",
		wheat: "#f5deb3",
		white: "#ffffff",
		whitesmoke: "#f5f5f5",
		yellow: "#ffff00",
		yellowgreen: "#9acd32"
	});
	o.forEach(function(a, c) {
		o.set(a, k(c, h, b("d3-old/core/hsl")._rgb))
	});
	d._names = o;
	d._rgb = h;
	d._parse = k;
	d._hsl = l;
	d._hex = j;
	d._lab = a;
	e.exports = d
}), null);
__d("d3-old/core/ns", [], (function(a, b, c, d, e, f) {
	var g = {
		svg: "http://www.w3.org/2000/svg",
		xhtml: "http://www.w3.org/1999/xhtml",
		xlink: "http://www.w3.org/1999/xlink",
		xml: "http://www.w3.org/XML/1998/namespace",
		xmlns: "http://www.w3.org/2000/xmlns/"
	};
	a = {
		prefix: g,
		qualify: function(a) {
			var b = a.indexOf(":"),
				c = a;
			b >= 0 && (c = a.substring(0, b), a = a.substring(b + 1));
			return Object.prototype.hasOwnProperty.call(g, c) ? {
				space: g[c],
				local: a
			} : a
		}
	};
	e.exports = a
}), null);
__d("d3-old/core/transform", ["d3-old/core/core", "d3-old/core/ns"], (function(a, b, c, d, e, f) {
	var g = b("d3-old/core/core")._document,
		h = b("d3-old/core/core")._degrees;
	a = function(a) {
		var c = g.createElementNS(b("d3-old/core/ns").prefix.svg, "g");
		return function(a) {
			c.setAttribute("transform", a);
			a = c.transform.baseVal.consolidate();
			return new i(a ? a.matrix : m)
		}(a)
	};

	function i(a) {
		var b = [a.a, a.b],
			c = [a.c, a.d],
			d = k(b),
			e = j(b, c),
			f = k(l(c, b, -e)) || 0;
		b[0] * c[1] < c[0] * b[1] && (b[0] *= -1, b[1] *= -1, d *= -1, e *= -1);
		this.rotate = (d ? Math.atan2(b[1], b[0]) : Math.atan2(-c[0], c[1])) * h;
		this.translate = [a.e, a.f];
		this.scale = [d, f];
		this.skew = f ? Math.atan2(e, f) * h : 0
	}
	i.prototype.toString = function() {
		return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
	};

	function j(a, b) {
		return a[0] * b[0] + a[1] * b[1]
	}

	function k(a) {
		var b = Math.sqrt(j(a, a));
		b && (a[0] /= b, a[1] /= b);
		return b
	}

	function l(a, b, c) {
		a[0] += c * b[0];
		a[1] += c * b[1];
		return a
	}
	var m = {
		a: 1,
		b: 0,
		c: 0,
		d: 1,
		e: 0,
		f: 0
	};
	e.exports = a
}), null);
__d("d3-old/core/interpolate", ["d3-old/core/color", "d3-old/core/hcl", "d3-old/core/hsl", "d3-old/core/lab", "d3-old/core/rgb", "d3-old/core/transform"], (function(a, b, c, d, e, f) {
	var g = b("d3-old/core/rgb")._hex,
		h = b("d3-old/core/hsl")._rgb,
		i = b("d3-old/core/lab")._rgb,
		j = b("d3-old/core/hcl")._lab,
		k = b("d3-old/core/rgb")._names,
		l = b("d3-old/core/color")._Color,
		m = function a(b, c) {
			var d = a.interpolators.length,
				e;
			while (--d >= 0 && !(e = a.interpolators[d](b, c)));
			return e
		};
	m.number = function(a, b) {
		b -= a;
		return function(c) {
			return a + b * c
		}
	};
	m.round = function(a, b) {
		b -= a;
		return function(c) {
			return Math.round(a + b * c)
		}
	};
	m.string = function(a, b) {
		var c, d, e, f = 0,
			g = [],
			h = [],
			i;
		n.lastIndex = 0;
		for (d = 0; c = n.exec(b); ++d) c.index && g.push(b.substring(f, c.index)), h.push({
			i: g.length,
			x: c[0]
		}), g.push(null), f = n.lastIndex;
		f < b.length && g.push(b.substring(f));
		for (d = 0, i = h.length;
			(c = n.exec(a)) && d < i; ++d) {
			f = h[d];
			if (f.x == c[0]) {
				if (f.i)
					if (g[f.i + 1] == null) {
						g[f.i - 1] += f.x;
						g.splice(f.i, 1);
						for (e = d + 1; e < i; ++e) h[e].i--
					} else {
						g[f.i - 1] += f.x + g[f.i + 1];
						g.splice(f.i, 2);
						for (e = d + 1; e < i; ++e) h[e].i -= 2
					}
				else if (g[f.i + 1] == null) g[f.i] = f.x;
				else {
					g[f.i] = f.x + g[f.i + 1];
					g.splice(f.i + 1, 1);
					for (e = d + 1; e < i; ++e) h[e].i--
				}
				h.splice(d, 1);
				i--;
				d--
			} else f.x = m.number(parseFloat(c[0]), parseFloat(f.x))
		}
		while (d < i) f = h.pop(), g[f.i + 1] == null ? g[f.i] = f.x : (g[f.i] = f.x + g[f.i + 1], g.splice(f.i + 1, 1)), i--;
		return g.length === 1 ? g[0] == null ? h[0].x : function() {
			return b
		} : function(a) {
			for (d = 0; d < i; ++d) g[(f = h[d]).i] = f.x(a);
			return g.join("")
		}
	};
	m.transform = function(a, c) {
		var d = [],
			e = [],
			f;
		a = b("d3-old/core/transform")(a);
		c = b("d3-old/core/transform")(c);
		var g = a.translate,
			h = c.translate,
			i = a.rotate,
			j = c.rotate,
			k = a.skew,
			l = c.skew;
		a = a.scale;
		c = c.scale;
		g[0] != h[0] || g[1] != h[1] ? (d.push("translate(", null, ",", null, ")"), e.push({
			i: 1,
			x: m.number(g[0], h[0])
		}, {
			i: 3,
			x: m.number(g[1], h[1])
		})) : h[0] || h[1] ? d.push("translate(" + h + ")") : d.push("");
		i != j ? (i - j > 180 ? j += 360 : j - i > 180 && (i += 360), e.push({
			i: d.push(d.pop() + "rotate(", null, ")") - 2,
			x: m.number(i, j)
		})) : j && d.push(d.pop() + "rotate(" + j + ")");
		k != l ? e.push({
			i: d.push(d.pop() + "skewX(", null, ")") - 2,
			x: m.number(k, l)
		}) : l && d.push(d.pop() + "skewX(" + l + ")");
		a[0] != c[0] || a[1] != c[1] ? (f = d.push(d.pop() + "scale(", null, ",", null, ")"), e.push({
			i: f - 4,
			x: m.number(a[0], c[0])
		}, {
			i: f - 2,
			x: m.number(a[1], c[1])
		})) : (c[0] != 1 || c[1] != 1) && d.push(d.pop() + "scale(" + c + ")");
		f = e.length;
		return function(a) {
			var b = -1,
				c;
			while (++b < f) d[(c = e[b]).i] = c.x(a);
			return d.join("")
		}
	};
	m.rgb = function(a, c) {
		a = b("d3-old/core/rgb")(a);
		c = b("d3-old/core/rgb")(c);
		var d = a.r,
			e = a.g,
			f = a.b,
			h = c.r - d,
			i = c.g - e,
			j = c.b - f;
		return function(a) {
			return "#" + g(Math.round(d + h * a)) + g(Math.round(e + i * a)) + g(Math.round(f + j * a))
		}
	};
	m.hsl = function(a, c) {
		a = b("d3-old/core/hsl")(a);
		c = b("d3-old/core/hsl")(c);
		var d = a.h,
			e = a.s,
			f = a.l,
			g = c.h - d,
			i = c.s - e,
			j = c.l - f;
		g > 180 ? g -= 360 : g < -180 && (g += 360);
		return function(a) {
			return h(d + g * a, e + i * a, f + j * a) + ""
		}
	};
	m.lab = function(a, c) {
		a = b("d3-old/core/lab")(a);
		c = b("d3-old/core/lab")(c);
		var d = a.l,
			e = a.a,
			f = a.b,
			g = c.l - d,
			h = c.a - e,
			j = c.b - f;
		return function(a) {
			return i(d + g * a, e + h * a, f + j * a) + ""
		}
	};
	m.hcl = function(a, c) {
		a = b("d3-old/core/hcl")(a);
		c = b("d3-old/core/hcl")(c);
		var d = a.h,
			e = a.c,
			f = a.l,
			g = c.h - d,
			h = c.c - e,
			i = c.l - f;
		g > 180 ? g -= 360 : g < -180 && (g += 360);
		return function(a) {
			return j(d + g * a, e + h * a, f + i * a) + ""
		}
	};
	m.array = function(a, b) {
		var c = [],
			d = [],
			e = a.length,
			f = b.length,
			g = Math.min(a.length, b.length),
			h;
		for (h = 0; h < g; ++h) c.push(m(a[h], b[h]));
		for (; h < e; ++h) d[h] = a[h];
		for (; h < f; ++h) d[h] = b[h];
		return function(a) {
			for (h = 0; h < g; ++h) d[h] = c[h](a);
			return d
		}
	};
	m.object = function(a, b) {
		var c = {},
			d = {},
			e;
		for (e in a) e in b ? c[e] = o(e)(a[e], b[e]) : d[e] = a[e];
		for (e in b) e in a || (d[e] = b[e]);
		return function(a) {
			for (e in c) d[e] = c[e](a);
			return d
		}
	};
	var n = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;

	function o(a) {
		return a == "transform" ? m.transform : m
	}
	m.interpolators = [m.object, function(a, b) {
		return b instanceof Array && m.array(a, b)
	}, function(a, b) {
		return (typeof a === "string" || typeof b === "string") && m.string(a + "", b + "")
	}, function(a, b) {
		return (typeof b === "string" ? k.has(b) || /^(#|rgb\(|hsl\()/.test(b) : b instanceof l) && m.rgb(a, b)
	}, function(a, b) {
		return !isNaN(a = +a) && !isNaN(b = +b) && m.number(a, b)
	}];
	m._interpolateByName = o;
	e.exports = m
}), null);
__d("d3-old/core/range", [], (function(a, b, c, d, e, f) {
	a = function(a, b, c) {
		arguments.length < 3 && (c = 1, arguments.length < 2 && (b = a, a = 0));
		if ((b - a) / c === Infinity) throw new Error("infinite range");
		var d = [],
			e = g(Math.abs(c)),
			f = -1,
			h;
		a *= e, b *= e, c *= e;
		if (c < 0)
			while ((h = a + c * ++f) > b) d.push(h / e);
		else
			while ((h = a + c * ++f) < b) d.push(h / e);
		return d
	};

	function g(a) {
		var b = 1;
		while (a * b % 1) b *= 10;
		return b
	}
	e.exports = a
}), null);
__d("d3-old/core/rebind", [], (function(a, b, c, d, e, f) {
	a = function(a, b) {
		var c = 1,
			d = arguments.length,
			e;
		while (++c < d) a[e = arguments[c]] = g(a, b, b[e]);
		return a
	};

	function g(a, b, c) {
		return function() {
			var d = c.apply(b, arguments);
			return arguments.length ? a : d
		}
	}
	e.exports = a
}), null);
__d("d3-old/core/uninterpolate", [], (function(a, b, c, d, e, f) {
	function a(a, b) {
		b = b - (a = +a) ? 1 / (b - a) : 0;
		return function(c) {
			return (c - a) * b
		}
	}

	function b(a, b) {
		b = b - (a = +a) ? 1 / (b - a) : 0;
		return function(c) {
			return Math.max(0, Math.min(1, (c - a) * b))
		}
	}
	f._uninterpolateNumber = a;
	f._uninterpolateClamp = b
}), null);
__d("d3-old/scale/bilinear", [], (function(a, b, c, d, e, f) {
	function a(a, b, c, d) {
		var e = c(a[0], a[1]),
			f = d(b[0], b[1]);
		return function(a) {
			return f(e(a))
		}
	}
	f._bilinear = a
}), null);
__d("d3-old/scale/nice", [], (function(a, b, c, d, e, f) {
	function a(a, b) {
		var c = 0,
			d = a.length - 1,
			e = a[c],
			f = a[d],
			g;
		f < e && ((g = c, c = d, d = g), (g = e, e = f, f = g));
		(b = b(f - e)) && (a[c] = b.floor(e), a[d] = b.ceil(f));
		return a
	}

	function b() {
		return Math
	}
	f._nice = a;
	f._niceDefault = b
}), null);
__d("d3-old/scale/polylinear", ["d3-old/core/bisect"], (function(a, b, c, d, e, f) {
	function a(a, c, d, e) {
		var f = [],
			g = [],
			h = 0,
			i = Math.min(a.length, c.length) - 1;
		a[i] < a[0] && (a = a.slice().reverse(), c = c.slice().reverse());
		while (++h <= i) f.push(d(a[h - 1], a[h])), g.push(e(c[h - 1], c[h]));
		return function(d) {
			var c = b("d3-old/core/bisect")(a, d, 1, i) - 1;
			return g[c](f[c](d))
		}
	}
	f._polylinear = a
}), null);
__d("d3-old/scale/scale", [], (function(a, b, c, d, e, f) {
	b = {};

	function g(a) {
		var b = a[0];
		a = a[a.length - 1];
		return b < a ? [b, a] : [a, b]
	}

	function a(a) {
		return a.rangeExtent ? a.rangeExtent() : g(a.range())
	}
	b._scaleExtent = g;
	b._scaleRange = a;
	e.exports = b
}), null);
__d("d3-old/scale/linear", ["d3-old/core/core", "d3-old/core/format", "d3-old/core/interpolate", "d3-old/core/range", "d3-old/core/rebind", "d3-old/core/uninterpolate", "d3-old/scale/bilinear", "d3-old/scale/nice", "d3-old/scale/polylinear", "d3-old/scale/scale"], (function(a, b, c, d, e, f) {
	var g = b("d3-old/scale/bilinear")._bilinear,
		h = b("d3-old/scale/polylinear")._polylinear,
		i = b("d3-old/core/uninterpolate")._uninterpolateClamp,
		j = b("d3-old/core/uninterpolate")._uninterpolateNumber,
		k = b("d3-old/scale/nice")._nice,
		l = b("d3-old/scale/scale")._scaleExtent;
	c = function() {
		return m([0, 1], [0, 1], b("d3-old/core/interpolate"), !1)
	};

	function m(a, c, d, e) {
		var f, l;

		function o() {
			var k = Math.min(a.length, c.length) > 2 ? h : g,
				m = e ? i : j;
			f = k(a, c, m, d);
			l = k(c, a, m, b("d3-old/core/interpolate"));
			return r
		}

		function r(a) {
			return f(a)
		}
		r.invert = function(a) {
			return l(a)
		};
		r.domain = function(b) {
			if (!arguments.length) return a;
			a = b.map(Number);
			return o()
		};
		r.range = function(a) {
			if (!arguments.length) return c;
			c = a;
			return o()
		};
		r.rangeRound = function(a) {
			return r.range(a).interpolate(b("d3-old/core/interpolate").round)
		};
		r.clamp = function(a) {
			if (!arguments.length) return e;
			e = a;
			return o()
		};
		r.interpolate = function(a) {
			if (!arguments.length) return d;
			d = a;
			return o()
		};
		r.ticks = function(b) {
			return p(a, b)
		};
		r.tickFormat = function(b) {
			return q(a, b)
		};
		r.nice = function() {
			k(a, n);
			return o()
		};
		r.copy = function() {
			return m(a, c, d, e)
		};
		return o()
	}

	function a(a, c) {
		return b("d3-old/core/rebind")(a, c, "range", "rangeRound", "interpolate", "clamp")
	}

	function n(a) {
		a = Math.pow(10, Math.round(Math.log(a) / Math.LN10) - 1);
		return a && {
			floor: function(b) {
				return Math.floor(b / a) * a
			},
			ceil: function(b) {
				return Math.ceil(b / a) * a
			}
		}
	}

	function o(a, b) {
		a = l(a);
		var c = a[1] - a[0],
			d = Math.pow(10, Math.floor(Math.log(c / b) / Math.LN10));
		b = b / c * d;
		b <= .15 ? d *= 10 : b <= .35 ? d *= 5 : b <= .75 && (d *= 2);
		a[0] = Math.ceil(a[0] / d) * d;
		a[1] = Math.floor(a[1] / d) * d + d * .5;
		a[2] = d;
		return a
	}

	function p(a, c) {
		return b("d3-old/core/range").apply(b("d3-old/core/core"), o(a, c))
	}

	function q(a, c) {
		return b("d3-old/core/format")(",." + Math.max(0, -Math.floor(Math.log(o(a, c)[2]) / Math.LN10 + .01)) + "f")
	}
	c._linearTicks = p;
	c._linearTickFormat = q;
	c._linearNice = n;
	c._linearRebind = a;
	e.exports = c
}), null);