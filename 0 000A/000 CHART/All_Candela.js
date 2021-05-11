if (self.CavalryLogger) {
	CavalryLogger.start_js(["LA\/9A"]);
}

__d("AdsCreativeContainerOptionToggler.react", ["FlexLayout.react", "GeoBaseText.react", "GeoTooltip.react", "Image.react", "React", "curry", "geoMargin", "joinClasses", "stylex"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React");

	function i(a, b, c) {
		c === void 0 && (c = {
			selectedColor: "info",
			disabledColor: "placeholder",
			color: "value"
		});
		c = c;
		var d = c.selectedColor,
			e = c.disabledColor;
		c = c.color;
		return a ? d : b ? e : c
	}

	function j(a, b) {
		return a ? b ? a.primaryIcon : a.secondaryIcon : null
	}
	var k = {
			option: {
				borderTopStartRadius: "elum7zft",
				borderTopEndRadius: "booyz79o",
				borderBottomEndRadius: "e7jxmo73",
				borderBottomStartRadius: "fg06um2h",
				flexGrow: "okxdybxi",
				flexShrink: "gv7r07jb",
				flexBasis: "fnzkyxrt",
				overflowX: "pesago7c",
				overflowY: "b6ewvobd",
				paddingTop: "ih2s8k95",
				paddingEnd: "okhlmt8k",
				paddingBottom: "berxdx8z",
				paddingStart: "ihd31vdf",
				position: "qi2u98y8",
				userSelect: "m3gtpzqa",
				whiteSpace: "c77takrd",
				zIndex: "km57r1xz",
				cursor: "fclypubq",
				":focus": {
					outline: "ivhngzxx"
				},
				":active": {
					outline: "lwh6xmxj"
				}
			},
			optionSelected: {
				cursor: "ekse6t43"
			},
			optionDisabled: {
				cursor: "ovsk4eqh"
			},
			toggler: {
				backgroundColor: "cnxpci5m",
				borderTop: "mvz5wvwo",
				borderEnd: "pnwa8ks3",
				borderBottom: "pk3te99l",
				borderStart: "k6kg54b9",
				borderTopStartRadius: "elum7zft",
				borderTopEndRadius: "booyz79o",
				borderBottomEndRadius: "e7jxmo73",
				borderBottomStartRadius: "fg06um2h",
				boxSizing: "pty309aw",
				position: "qi2u98y8",
				zIndex: "lcqqo40c"
			},
			selector: {
				backgroundColor: "apr27be3",
				borderTopStartRadius: "elum7zft",
				borderTopEndRadius: "booyz79o",
				borderBottomEndRadius: "e7jxmo73",
				borderBottomStartRadius: "fg06um2h",
				bottom: "nt5oj4yo",
				start: "reh35m8s",
				position: "rn4cszh3",
				top: "fpashsu6",
				zIndex: "iihkvusu"
			},
			nonAutoSelector: {
				transitionProperty: "p7w6bn2o",
				transitionDuration: "d94e1a50",
				transitionTimingFunction: "elg92fvc"
			},
			block: {
				display: "shyhzvm4"
			}
		},
		l = function(a) {
			var c = a.buttonIcons,
				d = a.buttonTextColor,
				e = a.isDisabled,
				f = a.isSelected,
				l = a.optionKey,
				m = a.onClick;
			a = a.title;
			d = i(f, e, d);
			return h.jsx("div", {
				"aria-checked": f,
				"aria-disabled": e,
				className: (g || (g = b("stylex")))(k.option, f && k.optionSelected, e && k.optionDisabled),
				"data-index": l,
				"data-testid": void 0,
				role: "radio",
				tabIndex: 0,
				onMouseDown: b("curry")(m, l),
				children: h.jsxs(b("FlexLayout.react"), {
					align: "center",
					justify: "center",
					children: [j(c, f), h.jsx(b("GeoBaseText.react"), {
						color: d,
						display: "truncate",
						size: "value",
						textAlign: "center",
						weight: f ? "bold" : "normal",
						xstyle: c ? b("geoMargin").start8 : null,
						children: a
					})]
				})
			})
		};

	function a(a) {
		var c = a.buttonTextColor,
			d = a.disabledMessage;
		d = d === void 0 ? "" : d;
		var e = a.className,
			f = a.isAutomaticFlow;
		f = f === void 0 ? !1 : f;
		var i = a.isDisabled,
			j = i === void 0 ? !1 : i,
			m = a.onSelect;
		i = a.options;
		var n = a.selectedKey;
		a = i.findIndex(function(a) {
			return a.optionKey === n
		});
		var o = h.useCallback(function(a) {
			j !== !0 && m(a)
		}, [j, m]);
		e = h.jsxs(b("FlexLayout.react"), {
			className: b("joinClasses")(e, (g || (g = b("stylex")))(k.toggler)),
			children: [i.map(function(a, b) {
				return h.createElement(l, babelHelpers["extends"]({}, a, {
					buttonTextColor: c,
					isDisabled: j,
					isSelected: n === a.optionKey,
					key: b,
					onClick: o
				}))
			}), h.jsx("div", {
				className: g(k.selector, !f && k.nonAutoSelector),
				style: {
					width: 100 / i.length + "%",
					transform: "translateX(" + a * 100 + "%)"
				}
			})]
		});
		return j && !!d ? h.jsx(b("GeoTooltip.react"), {
			content: d,
			xstyle: k.block,
			children: e
		}) : e
	}
}), null);
__d("Sprite.art", ["getStyleProperty"], (function(a, b, c, d, e, f) {
	"use strict";
	f.get = a;
	var g = {},
		h = null,
		i = /url\(([\'\"])?([^\1]*)\1\)/;

	function j(a) {
		a = a.match(i);
		return a ? a[2] : null
	}

	function k(a) {
		return parseFloat(a) || null
	}

	function l(a) {
		a = a ? a.split(" ") : [];
		return a.length != 2 ? [null, null] : [k(a[0]), k(a[1])]
	}

	function a(a) {
		if (a in g) return g[a];
		h || (h = document.createElement("i"));
		h.className = a;
		document.body.appendChild(h);
		var c = b("getStyleProperty")(h, "backgroundImage"),
			d = b("getStyleProperty")(h, "backgroundSize"),
			e = b("getStyleProperty")(h, "backgroundPosition"),
			f = b("getStyleProperty")(h, "width"),
			i = b("getStyleProperty")(h, "height");
		document.body.removeChild(h);
		return g[a] = {
			boxSize: [k(f), k(i)],
			imageSize: l(d),
			offset: l(e),
			uri: j(c)
		}
	}
}), null);
__d("CSSBackgroundPattern.art", ["Sprite.art"], (function(a, b, c, d, e, f) {
	"use strict";
	a = function() {
		function a(a) {
			this.$1 = a
		}
		var c = a.prototype;
		c.applyFill = function(a) {
			var c = b("Sprite.art").get(this.$1),
				d = c.uri,
				e = c.boxSize[0],
				f = c.boxSize[1],
				g = c.offset[0];
			c = c.offset[1];
			(e === null || f === null) && a.fillImage(d, e, f, g, c)
		};
		return a
	}();
	e.exports = a
}), null);
__d("art/core/class", [], (function(a, b, c, d, e, f) {
	e.exports = function(a) {
		var b = {};
		for (var c = 0, d = arguments.length; c < d; c++) {
			var e = arguments[c];
			typeof e === "function" && (e = e.prototype);
			for (var f in e) b[f] = e[f]
		}
		b.initialize || (b.initialize = function() {});
		b.constructor = function(a, c, d, e, f, g, h, i) {
			return new b.initialize(a, c, d, e, f, g, h, i)
		};
		b.constructor.prototype = b.initialize.prototype = b;
		return b.constructor
	}
}), null);
__d("art/core/transform", ["art/core/class"], (function(a, b, c, d, e, f) {
	function a(a, b, c, d, e, f) {
		a && typeof a === "object" && (b = a.yx, d = a.yy, f = a.y, c = a.xy, e = a.x, a = a.xx);
		this.xx = a == null ? 1 : a;
		this.yx = b || 0;
		this.xy = c || 0;
		this.yy = d == null ? 1 : d;
		this.x = (e == null ? this.x : e) || 0;
		this.y = (f == null ? this.y : f) || 0;
		this._transform();
		return this
	}
	e.exports = b("art/core/class")({
		initialize: a,
		_transform: function() {},
		xx: 1,
		yx: 0,
		x: 0,
		xy: 0,
		yy: 1,
		y: 0,
		transform: function(a, b, c, d, e, f) {
			var g = this;
			a && typeof a === "object" && (b = a.yx, d = a.yy, f = a.y, c = a.xy, e = a.x, a = a.xx);
			e || (e = 0);
			f || (f = 0);
			return this.transformTo(g.xx * a + g.xy * b, g.yx * a + g.yy * b, g.xx * c + g.xy * d, g.yx * c + g.yy * d, g.xx * e + g.xy * f + g.x, g.yx * e + g.yy * f + g.y)
		},
		transformTo: a,
		translate: function(a, b) {
			return this.transform(1, 0, 0, 1, a, b)
		},
		move: function(a, b) {
			this.x += a || 0;
			this.y += b || 0;
			this._transform();
			return this
		},
		scale: function(a, b) {
			b == null && (b = a);
			return this.transform(a, 0, 0, b, 0, 0)
		},
		rotate: function(a, b, c) {
			(b == null || c == null) && (b = (this.left || 0) + (this.width || 0) / 2, c = (this.top || 0) + (this.height || 0) / 2);
			a = a * Math.PI / 180;
			var d = Math.sin(a);
			a = Math.cos(a);
			this.transform(1, 0, 0, 1, b, c);
			var e = this;
			return this.transformTo(a * e.xx - d * e.yx, d * e.xx + a * e.yx, a * e.xy - d * e.yy, d * e.xy + a * e.yy, e.x, e.y).transform(1, 0, 0, 1, -b, -c)
		},
		moveTo: function(a, b) {
			var c = this;
			return this.transformTo(c.xx, c.yx, c.xy, c.yy, a, b)
		},
		rotateTo: function(a, b, c) {
			var d = this,
				e = d.yx / d.xx > d.yy / d.xy ? -1 : 1;
			(d.xx < 0 ? d.xy >= 0 : d.xy < 0) && (e = -e);
			return this.rotate(a - Math.atan2(e * d.yx, e * d.xx) * 180 / Math.PI, b, c)
		},
		scaleTo: function(a, b) {
			var c = this,
				d = Math.sqrt(c.xx * c.xx + c.yx * c.yx);
			c.xx /= d;
			c.yx /= d;
			d = Math.sqrt(c.yy * c.yy + c.xy * c.xy);
			c.yy /= d;
			c.xy /= d;
			return this.scale(a, b)
		},
		resizeTo: function(a, b) {
			var c = this.width,
				d = this.height;
			return !c || !d ? this : this.scaleTo(a / c, b / d)
		},
		inversePoint: function(a, b) {
			var c = this.xx,
				d = this.yx,
				e = this.xy,
				f = this.yy,
				g = this.x,
				h = this.y,
				i = d * e - c * f;
			return i == 0 ? null : {
				x: (f * (g - a) + e * (b - h)) / i,
				y: (c * (h - b) + d * (a - g)) / i
			}
		},
		point: function(a, b) {
			var c = this;
			return {
				x: c.xx * a + c.xy * b + c.x,
				y: c.yx * a + c.yy * b + c.y
			}
		}
	})
}), null);
__d("art/modes/current", [], (function(a, b, c, d, e, f) {
	function a() {
		throw new Error("You must require a mode before requiring anything else.")
	}
	f.Surface = a;
	f.Path = a;
	f.Shape = a;
	f.Group = a;
	f.ClippingRectangle = a;
	f.Text = a;
	f.setCurrent = function(a) {
		for (var b in a) f[b] = a[b]
	}
}), null);
__d("art/core/color", [], (function(a, b, c, d, e, f) {
	var g = {
			maroon: "#800000",
			red: "#ff0000",
			orange: "#ffA500",
			yellow: "#ffff00",
			olive: "#808000",
			purple: "#800080",
			fuchsia: "#ff00ff",
			white: "#ffffff",
			lime: "#00ff00",
			green: "#008000",
			navy: "#000080",
			blue: "#0000ff",
			aqua: "#00ffff",
			teal: "#008080",
			black: "#000000",
			silver: "#c0c0c0",
			gray: "#808080"
		},
		h = function(a, b) {
			var c = [];
			for (var d = 0, e = a.length; d < e; d++) c[d] = b(a[d], d);
			return c
		},
		i = function a(b, c) {
			if (b.isColor) this.red = b.red, this.green = b.green, this.blue = b.blue, this.alpha = b.alpha;
			else {
				var d = g[b];
				d && (b = d, c = "hex");
				switch (typeof b) {
					case "string":
						c || (c = (c = b.match(/^rgb|^hsb|^hsl/)) ? c[0] : "hex");
						break;
					case "object":
						c = c || "rgb";
						b = b.toString();
						break;
					case "number":
						c = "hex";
						b = b.toString(16);
						break
				}
				b = a["parse" + c.toUpperCase()](b);
				this.red = b[0];
				this.green = b[1];
				this.blue = b[2];
				this.alpha = b[3]
			}
			this.isColor = !0
		},
		j = function(a, b, c) {
			return Math.min(c, Math.max(b, a))
		},
		k = /([-.\d]+\%?)\s*,\s*([-.\d]+\%?)\s*,\s*([-.\d]+\%?)\s*,?\s*([-.\d]*\%?)/,
		l = /^#?([a-f0-9]{1,2})([a-f0-9]{1,2})([a-f0-9]{1,2})([a-f0-9]{0,2})$/i;
	i.parseRGB = function(a) {
		return h(a.match(k).slice(1), function(a, b) {
			a && (a = parseFloat(a) * (a[a.length - 1] == "%" ? 2.55 : 1));
			return b < 3 ? Math.round((a %= 256) < 0 ? a + 256 : a) : j(a === "" ? 1 : Number(a), 0, 1)
		})
	};
	i.parseHEX = function(a) {
		a.length == 1 && (a = a + a + a);
		return h(a.match(l).slice(1), function(a, b) {
			return b == 3 ? a ? parseInt(a, 16) / 255 : 1 : parseInt(a.length == 1 ? a + a : a, 16)
		})
	};
	i.parseHSB = function(a) {
		a = h(a.match(k).slice(1), function(a, b) {
			a && (a = parseFloat(a));
			if (b === 0) return Math.round((a %= 360) < 0 ? a + 360 : a);
			else if (b < 3) return j(Math.round(a), 0, 100);
			else return j(a === "" ? 1 : Number(a), 0, 1)
		});
		var b = a[3],
			c = Math.round(a[2] / 100 * 255);
		if (a[1] == 0) return [c, c, c, b];
		var d = a[0],
			e = d % 60,
			f = Math.round(a[2] * (100 - a[1]) / 1e4 * 255),
			g = Math.round(a[2] * (6e3 - a[1] * e) / 6e5 * 255);
		a = Math.round(a[2] * (6e3 - a[1] * (60 - e)) / 6e5 * 255);
		switch (Math.floor(d / 60)) {
			case 0:
				return [c, a, f, b];
			case 1:
				return [g, c, f, b];
			case 2:
				return [f, c, a, b];
			case 3:
				return [f, g, c, b];
			case 4:
				return [a, f, c, b];
			default:
				return [c, f, g, b]
		}
	};
	i.parseHSL = function(a) {
		a = h(a.match(k).slice(1), function(a, b) {
			a && (a = parseFloat(a));
			if (b === 0) return Math.round((a %= 360) < 0 ? a + 360 : a);
			else if (b < 3) return j(Math.round(a), 0, 100);
			else return j(a === "" ? 1 : Number(a), 0, 1)
		});
		var b = a[0] / 60,
			c = a[1] / 100,
			d = a[2] / 100;
		a = a[3];
		c = (1 - Math.abs(2 * d - 1)) * c;
		var e = c * (1 - Math.abs(b % 2 - 1));
		d = d - c / 2;
		c = Math.round((c + d) * 255);
		e = Math.round((e + d) * 255);
		d = Math.round(d * 255);
		switch (Math.floor(b)) {
			case 0:
				return [c, e, d, a];
			case 1:
				return [e, c, d, a];
			case 2:
				return [d, c, e, a];
			case 3:
				return [d, e, c, a];
			case 4:
				return [e, d, c, a];
			default:
				return [c, d, e, a]
		}
	};
	var m = function(a, b) {
		b[3] != 1 ? a += "a" : b.pop();
		return a + "(" + b.join(", ") + ")"
	};
	i.prototype = {
		toHSB: function(a) {
			var b = this.red,
				c = this.green,
				d = this.blue,
				e = this.alpha,
				f = Math.max(b, c, d),
				g = Math.min(b, c, d);
			g = f - g;
			var h = 0,
				i = g != 0 ? g / f : 0,
				j = f / 255;
			if (i) {
				var k = (f - b) / g,
					l = (f - c) / g;
				d = (f - d) / g;
				h = b == f ? d - l : c == f ? 2 + k - d : 4 + l - k;
				(h /= 6) < 0 && h++
			}
			g = [Math.round(h * 360), Math.round(i * 100), Math.round(j * 100), e];
			return a ? g : m("hsb", g)
		},
		toHSL: function(a) {
			var b = this.red,
				c = this.green,
				d = this.blue,
				e = this.alpha,
				f = Math.max(b, c, d),
				g = Math.min(b, c, d),
				h = f - g,
				i = 0,
				j = h != 0 ? h / (255 - Math.abs(f + g - 255)) : 0;
			g = (f + g) / 512;
			if (j) {
				var k = (f - b) / h,
					l = (f - c) / h;
				d = (f - d) / h;
				i = b == f ? d - l : c == f ? 2 + k - d : 4 + l - k;
				(i /= 6) < 0 && i++
			}
			h = [Math.round(i * 360), Math.round(j * 100), Math.round(g * 100), e];
			return a ? h : m("hsl", h)
		},
		toHEX: function(a) {
			var b = this.alpha;
			b = (b = Math.round(b * 255).toString(16)).length == 1 ? b + b : b;
			var c = h([this.red, this.green, this.blue], function(a) {
				a = a.toString(16);
				return a.length == 1 ? "0" + a : a
			});
			return a ? c.concat(b) : "#" + c.join("") + (b == "ff" ? "" : b)
		},
		toRGB: function(a) {
			var b = [this.red, this.green, this.blue, this.alpha];
			return a ? b : m("rgb", b)
		}
	};
	i.prototype.toString = i.prototype.toRGB;
	i.hex = function(a) {
		return new i(a, "hex")
	};
	this.hex == null && (this.hex = i.hex);
	i.hsb = function(a, b, c, d) {
		return new i([a || 0, b || 0, c || 0, d == null ? 1 : d], "hsb")
	};
	this.hsb == null && (this.hsb = i.hsb);
	i.hsl = function(a, b, c, d) {
		return new i([a || 0, b || 0, c || 0, d == null ? 1 : d], "hsl")
	};
	this.hsl == null && (this.hsl = i.hsl);
	i.rgb = function(a, b, c, d) {
		return new i([a || 0, b || 0, c || 0, d == null ? 1 : d], "rgb")
	};
	this.rgb == null && (this.rgb = i.rgb);
	i.detach = function(a) {
		a = new i(a);
		return [i.rgb(a.red, a.green, a.blue).toString(), a.alpha]
	};
	e.exports = i
}), null);
__d("art/dom/dummy", ["art/core/class"], (function(a, b, c, d, e, f) {
	e.exports = b("art/core/class")({
		_resetPlacement: function() {
			var a = this.parentNode;
			if (a) {
				var b = this.previousSibling,
					c = this.nextSibling;
				b ? b.nextSibling = c : a.firstChild = c;
				c ? c.previousSibling = b : a.lastChild = this.previousSibling
			}
			this.previousSibling = null;
			this.nextSibling = null;
			this.parentNode = null;
			return this
		},
		inject: function(a) {
			this._resetPlacement();
			var b = a.lastChild;
			b ? (b.nextSibling = this, this.previousSibling = b) : a.firstChild = this;
			a.lastChild = this;
			this.parentNode = a;
			this._place();
			return this
		},
		injectBefore: function(a) {
			this._resetPlacement();
			var b = a.parentNode;
			if (!b) return this;
			var c = a.previousSibling;
			c ? (c.nextSibling = this, this.previousSibling = c) : b.firstChild = this;
			a.previousSibling = this;
			this.nextSibling = a;
			this.parentNode = b;
			this._place();
			return this
		},
		eject: function() {
			this._resetPlacement();
			this._place();
			return this
		},
		_place: function() {},
		dispatch: function(a) {
			var b = this._events;
			b = b && b[a.type];
			if (b) {
				b = b.slice(0);
				for (var c = 0, d = b.length; c < d; c++) {
					var e = b[c],
						f;
					typeof e === "function" ? f = e.call(this, a) : f = e.handleEvent(a);
					f === !1 && a.preventDefault()
				}
			}
			this.parentNode && this.parentNode.dispatch && this.parentNode.dispatch(a)
		},
		subscribe: function(a, b, c) {
			if (typeof a !== "string") {
				var d = [];
				for (var e in a) d.push(this.subscribe(e, a[e]));
				return function() {
					for (var a = 0, b = d.length; a < b; a++) d[a]();
					return this
				}
			} else {
				var f = typeof b === "function" ? b.bind(c || this) : b;
				c = this._events || (this._events = {});
				var g = c[a] || (c[a] = []);
				g.push(f);
				return function() {
					for (var a = 0, b = g.length; a < b; a++)
						if (g[a] === f) {
							g.splice(a, 1);
							break
						}
				}
			}
		}
	})
}), null);
__d("art/modes/canvas/node", ["art/core/class", "art/core/transform", "art/dom/dummy"], (function(a, b, c, d, e, f) {
	a = b("art/core/class")(b("art/core/transform"), b("art/dom/dummy"), {
		invalidate: function() {
			this.parentNode && this.parentNode.invalidate();
			this._layer && (this._layerCache = null);
			return this
		},
		_place: function() {
			this.invalidate()
		},
		_transform: function() {
			this.invalidate()
		},
		blend: function(a) {
			a >= 1 && this._layer && (this._layer = null);
			this._opacity = a;
			this.parentNode && this.parentNode.invalidate();
			return this
		},
		hide: function() {
			this._invisible = !0;
			this.parentNode && this.parentNode.invalidate();
			return this
		},
		show: function() {
			this._invisible = !1;
			this.parentNode && this.parentNode.invalidate();
			return this
		},
		indicate: function(a, b) {
			this._cursor = a;
			this._tooltip = b;
			return this.invalidate()
		},
		hitTest: function(a, b) {
			if (this._invisible) return null;
			a = this.inversePoint(a, b);
			return !a ? null : this.localHitTest(a.x, a.y)
		},
		renderTo: function(a, b, c, d, e, f, g) {
			var h = this._opacity;
			if (h == null || h >= 1) return this.renderLayerTo(a, b, c, d, e, f, g);
			var i = this._layer,
				j, k = !0,
				l = a.canvas.width,
				m = a.canvas.height;
			if (i) {
				i.setTransform(1, 0, 0, 1, 0, 0);
				j = i.canvas;
				if (j.width < l || j.height < m) j.width = l, j.height = m;
				else {
					var n = this._layerCache;
					n && n.xx === b && n.yx === c && n.xy === d && n.yy === e && n.x === f && n.y === g ? k = !1 : i.clearRect(0, 0, l, m)
				}
			} else j = document.createElement("canvas"), j.width = l, j.height = m, this._layer = i = j.getContext("2d");
			k && (this.renderLayerTo(i, b, c, d, e, f, g), this._layerCache = {
				xx: b,
				yx: c,
				xy: d,
				yy: e,
				x: f,
				y: g
			});
			a.globalAlpha = h;
			a.setTransform(1, 0, 0, 1, 0, 0);
			a.drawImage(j, 0, 0, l, m, 0, 0, l, m);
			a.globalAlpha = 1
		}
	});
	e.exports = a
}), null);
__d("art/modes/canvas/base", ["art/core/class", "art/core/color", "art/core/transform", "art/modes/canvas/node"], (function(a, b, c, d, e, f) {
	a = typeof document !== "undefined" && document.createElement("canvas");
	var g = a && a.getContext && a.getContext("2d");

	function h(a, c, d) {
		c = b("art/core/color").detach(c);
		d = b("art/core/color").detach(d);
		c = document.createElement("canvas");
		var e = c.getContext("2d");
		c.width = a.width;
		c.height = a.height;
		e.fillStyle = d[0];
		e.fillRect(0, 0, a.width, a.height);
		e.globalCompositeOperation = "lighter";
		e.drawImage(a, 0, 0);
		return c
	}
	c = b("art/core/class")(b("art/modes/canvas/node"), {
		initialize: function() {
			this._fill = null, this._pendingFill = null, this._fillTransform = null, this._stroke = null, this._strokeCap = null, this._strokeDash = null, this._strokeJoin = null, this._strokeWidth = null
		},
		_addColors: function(a, c) {
			if ("length" in c)
				for (var d = 0, e = c.length - 1; d <= e; d++) a.addColorStop(d / e, new(b("art/core/color"))(c[d]).toString());
			else
				for (var f in c) a.addColorStop(f, new(b("art/core/color"))(c[f]).toString());
			return a
		},
		fill: function(a) {
			if (arguments.length > 1) return this.fillLinear(arguments);
			this._pendingFill && this._pendingFill();
			this._fill = a ? new(b("art/core/color"))(a).toString() : null;
			return this.invalidate()
		},
		fillRadial: function(a, c, d, e, f, h, i) {
			c == null && (c = (this.left || 0) + (this.width || 0) * .5);
			d == null && (d = (this.top || 0) + (this.height || 0) * .5);
			f == null && (f = e || this.height * .5 || 0);
			e == null && (e = (this.width || 0) * .5);
			h == null && (h = c);
			i == null && (i = d);
			h += h - c;
			i += i - d;
			if (e === 0 || e === "0") return this.fillLinear(a);
			f = f / e;
			this._pendingFill && this._pendingFill();
			c = g.createRadialGradient(c, d / f, 0, h, i / f, e * 2);
			if ("length" in a)
				for (var d = 0, h = a.length - 1; d <= h; d++) c.addColorStop(d / h / 2, new(b("art/core/color"))(a[d]).toString()), c.addColorStop(1 - d / h / 2, new(b("art/core/color"))(a[d]).toString());
			else
				for (var j in a) c.addColorStop(j / 2, new(b("art/core/color"))(a[j]).toString()), c.addColorStop(1 - j / 2, new(b("art/core/color"))(a[j]).toString());
			this._fill = c;
			this._fillTransform = new(b("art/core/transform"))(1, 0, 0, f);
			return this.invalidate()
		},
		fillLinear: function(a, c, d, e, f) {
			if (arguments.length < 5) {
				var h = (c == null ? 270 : c) * Math.PI / 180,
					i = Math.cos(h),
					j = -Math.sin(h),
					k = (Math.abs(i) + Math.abs(j)) / 2,
					l = this.width || 1,
					m = this.height || 1;
				i *= k;
				j *= k;
				c = .5 - i;
				e = .5 + i;
				d = .5 - j;
				f = .5 + j;
				this._fillTransform = new(b("art/core/transform"))(l, 0, 0, m)
			} else this._fillTransform = null;
			this._pendingFill && this._pendingFill();
			var n = g.createLinearGradient(c, d, e, f);
			this._addColors(n, a);
			this._fill = n;
			return this.invalidate()
		},
		fillImage: function(a, b, c, d, e, f, g) {
			this._pendingFill && this._pendingFill();
			var h = a;
			h instanceof Image || (h = new Image(), h.src = a);
			if (h.width && h.height) return this._fillImage(h, b, c, d || 0, e || 0, f, g);
			this._fill = null;
			var i = this,
				j = function() {
					k(), i._fillImage(h, b, c, d || 0, e || 0, f, g)
				},
				k = function() {
					h.removeEventListener("load", j, !1), i._pendingFill = null
				};
			this._pendingFill = k;
			h.addEventListener("load", j, !1);
			return this
		},
		_fillImage: function(a, c, d, e, f, i, j) {
			c = c ? c / a.width : 1;
			d = d ? d / a.height : 1;
			i != null && (a = h(a, i, j));
			this._fill = g.createPattern(a, "repeat");
			this._fillTransform = new(b("art/core/transform"))(c, 0, 0, d, e || 0, f || 0);
			return this.invalidate()
		},
		stroke: function(a, c, d, e, f) {
			this._stroke = a ? new(b("art/core/color"))(a).toString() : null;
			this._strokeWidth = c != null ? c : 1;
			this._strokeCap = d != null ? d : "round";
			this._strokeJoin = e != null ? e : "round";
			this._strokeDash = f;
			return this.invalidate()
		},
		element_renderTo: b("art/modes/canvas/node").prototype.renderTo,
		renderTo: function(a, b, c, d, e, f, g) {
			var h = this._opacity;
			if (h == null || h >= 1) return this.renderLayerTo(a, b, c, d, e, f, g);
			if (this._fill && this._stroke) return this.element_renderTo(a, b, c, d, e, f, g);
			a.globalAlpha = h;
			h = this.renderLayerTo(a, b, c, d, e, f, g);
			a.globalAlpha = 1;
			return h
		},
		renderLayerTo: function(a, b, c, d, e, f, g) {
			a.setTransform(b, c, d, e, f, g), this.renderShapeTo(a)
		}
	});
	c._genericContext = g;
	e.exports = c
}), null);
__d("art/dom/container", ["art/core/class"], (function(a, b, c, d, e, f) {
	e.exports = b("art/core/class")({
		grab: function() {
			for (var a = 0; a < arguments.length; a++) arguments[a].inject(this);
			return this
		},
		empty: function() {
			var a;
			while (a = this.firstChild) a.eject();
			return this
		}
	})
}), null);
__d("art/modes/canvas/clippingrectangle", ["art/core/class", "art/dom/container", "art/modes/canvas/node"], (function(a, b, c, d, e, f) {
	e.exports = b("art/core/class")(b("art/modes/canvas/node"), b("art/dom/container"), {
		initialize: function(a, b) {
			this.width = a, this.height = b
		},
		localHitTest: function(a, b) {
			var c = this.lastChild;
			while (c) {
				var d = c.hitTest(a, b);
				if (d) return d;
				c = c.previousSibling
			}
			return null
		},
		renderLayerTo: function(a, b, c, d, e, f, g) {
			a.setTransform(b, c, d, e, f, g);
			a.save();
			a.beginPath();
			a.rect(this.x, this.y, this.width, this.height);
			a.clip();
			var h = this.firstChild;
			while (h) h.renderTo(a, b, c, d, e, f, g), h = h.nextSibling;
			a.restore()
		}
	})
}), null);
__d("art/modes/canvas/group", ["art/core/class", "art/dom/container", "art/modes/canvas/node"], (function(a, b, c, d, e, f) {
	e.exports = b("art/core/class")(b("art/modes/canvas/node"), b("art/dom/container"), {
		initialize: function(a, b) {
			this.width = a, this.height = b
		},
		localHitTest: function(a, b) {
			var c = this.lastChild;
			while (c) {
				var d = c.hitTest(a, b);
				if (d) return d;
				c = c.previousSibling
			}
			return null
		},
		renderLayerTo: function(a, b, c, d, e, f, g) {
			if (this._invisible) return;
			f = b * this.x + d * this.y + f;
			g = c * this.x + e * this.y + g;
			var h = b;
			b = h * this.xx + d * this.yx;
			d = h * this.xy + d * this.yy;
			h = c;
			c = h * this.xx + e * this.yx;
			e = h * this.xy + e * this.yy;
			h = this.firstChild;
			while (h) h.renderTo(a, b, c, d, e, f, g), h = h.nextSibling
		}
	})
}), null);
__d("art/core/path", ["art/core/class"], (function(a, b, c, d, e, f) {
	e.exports = b("art/core/class")({
		initialize: function(a) {
			this.reset().push(a)
		},
		push: function() {
			var a = Array.prototype.join.call(arguments, " ").match(/[a-df-z]|[\-+]?(?:[\d\.]e[\-+]?|[^\s\-+,a-z])+/gi);
			if (!a) return this;
			var b, c = a[0],
				d = 1;
			while (c) {
				switch (c) {
					case "m":
						this.move(a[d++], a[d++]);
						break;
					case "l":
						this.line(a[d++], a[d++]);
						break;
					case "c":
						this.curve(a[d++], a[d++], a[d++], a[d++], a[d++], a[d++]);
						break;
					case "s":
						this.curve(a[d++], a[d++], null, null, a[d++], a[d++]);
						break;
					case "q":
						this.curve(a[d++], a[d++], a[d++], a[d++]);
						break;
					case "t":
						this.curve(a[d++], a[d++]);
						break;
					case "a":
						this.arc(a[d + 5], a[d + 6], a[d], a[d + 1], a[d + 3], !+a[d + 4], a[d + 2]);
						d += 7;
						break;
					case "h":
						this.line(a[d++], 0);
						break;
					case "v":
						this.line(0, a[d++]);
						break;
					case "M":
						this.moveTo(a[d++], a[d++]);
						break;
					case "L":
						this.lineTo(a[d++], a[d++]);
						break;
					case "C":
						this.curveTo(a[d++], a[d++], a[d++], a[d++], a[d++], a[d++]);
						break;
					case "S":
						this.curveTo(a[d++], a[d++], null, null, a[d++], a[d++]);
						break;
					case "Q":
						this.curveTo(a[d++], a[d++], a[d++], a[d++]);
						break;
					case "T":
						this.curveTo(a[d++], a[d++]);
						break;
					case "A":
						this.arcTo(a[d + 5], a[d + 6], a[d], a[d + 1], a[d + 3], !+a[d + 4], a[d + 2]);
						d += 7;
						break;
					case "H":
						this.lineTo(a[d++], this.penY);
						break;
					case "V":
						this.lineTo(this.penX, a[d++]);
						break;
					case "Z":
					case "z":
						this.close();
						break;
					default:
						c = b;
						d--;
						continue
				}
				b = c;
				b == "m" ? b = "l" : b == "M" && (b = "L");
				c = a[d++]
			}
			return this
		},
		reset: function() {
			this.penX = this.penY = 0;
			this.penDownX = this.penDownY = null;
			this._pivotX = this._pivotY = 0;
			this.onReset();
			return this
		},
		move: function(a, b) {
			this.onMove(this.penX, this.penY, this._pivotX = this.penX += +a, this._pivotY = this.penY += +b);
			return this
		},
		moveTo: function(a, b) {
			this.onMove(this.penX, this.penY, this._pivotX = this.penX = +a, this._pivotY = this.penY = +b);
			return this
		},
		line: function(a, b) {
			return this.lineTo(this.penX + +a, this.penY + +b)
		},
		lineTo: function(a, b) {
			this.penDownX == null && (this.penDownX = this.penX, this.penDownY = this.penY);
			this.onLine(this.penX, this.penY, this._pivotX = this.penX = +a, this._pivotY = this.penY = +b);
			return this
		},
		curve: function(a, b, c, d, e, f) {
			var g = this.penX,
				h = this.penY;
			return this.curveTo(g + +a, h + +b, c == null ? null : g + +c, d == null ? null : h + +d, e == null ? null : g + +e, f == null ? null : h + +f)
		},
		curveTo: function(a, b, c, d, e, f) {
			var g = this.penX,
				h = this.penY;
			c == null && (c = +a, d = +b, a = g * 2 - (this._pivotX || 0), b = h * 2 - (this._pivotY || 0));
			e == null ? (this._pivotX = +a, this._pivotY = +b, e = +c, f = +d, c = (e + (+a) * 2) / 3, d = (f + (+b) * 2) / 3, a = (g + (+a) * 2) / 3, b = (h + (+b) * 2) / 3) : (this._pivotX = +c, this._pivotY = +d);
			this.penDownX == null && (this.penDownX = g, this.penDownY = h);
			this.onBezierCurve(g, h, +a, +b, +c, +d, this.penX = +e, this.penY = +f);
			return this
		},
		arc: function(a, b, c, d, e, f, g) {
			return this.arcTo(this.penX + +a, this.penY + +b, c, d, e, f, g)
		},
		arcTo: function(a, b, c, d, e, f, g) {
			d = Math.abs(+d || +c || +b - this.penY);
			c = Math.abs(+c || +a - this.penX);
			if (!c || !d || a == this.penX && b == this.penY) return this.lineTo(a, b);
			var h = this.penX,
				i = this.penY;
			f = !+f;
			e = !!+e;
			var j = g ? g * Math.PI / 180 : 0,
				k = Math.cos(j);
			j = Math.sin(j);
			a -= h;
			b -= i;
			var l = k * a / 2 + j * b / 2,
				m = -j * a / 2 + k * b / 2,
				n = c * c * d * d,
				o = d * d * l * l,
				p = c * c * m * m,
				q = n - p - o;
			if (q < 0) q = Math.sqrt(1 - q / n), c *= q, d *= q, l = a / 2, m = b / 2;
			else {
				q = Math.sqrt(q / (p + o));
				e == f && (q = -q);
				n = -q * m * c / d;
				p = q * l * d / c;
				l = k * n - j * p + a / 2;
				m = j * n + k * p + b / 2
			}
			o = k / c;
			e = j / c;
			q = -j / d;
			n = k / d;
			p = Math.atan2(q * -l + n * -m, o * -l + e * -m);
			j = Math.atan2(q * (a - l) + n * (b - m), o * (a - l) + e * (b - m));
			l += h;
			m += i;
			a += h;
			b += i;
			this.penDownX == null && (this.penDownX = this.penX, this.penDownY = this.penY);
			this.onArc(h, i, this._pivotX = this.penX = a, this._pivotY = this.penY = b, l, m, c, d, p, j, !f, g);
			return this
		},
		counterArc: function(a, b, c, d, e) {
			return this.arc(a, b, c, d, e, !0)
		},
		counterArcTo: function(a, b, c, d, e) {
			return this.arcTo(a, b, c, d, e, !0)
		},
		close: function() {
			this.penDownX != null && (this.onClose(this.penX, this.penY, this.penX = this.penDownX, this.penY = this.penDownY), this.penDownX = null);
			return this
		},
		onReset: function() {},
		onMove: function(a, b, c, d) {},
		onLine: function(a, b, c, d) {
			this.onBezierCurve(a, b, a, b, c, d, c, d)
		},
		onBezierCurve: function(a, b, c, d, e, f, g, h) {
			var i = g - a,
				j = h - b,
				k = i * i + j * j,
				l, m, n, o;
			m = c - a;
			n = d - b;
			o = m * i + n * j;
			o > k ? (m -= i, n -= j) : o > 0 && k != 0 && (m -= o / k * i, n -= o / k * j);
			l = m * m + n * n;
			m = e - a;
			n = f - b;
			o = m * i + n * j;
			o > k ? (m -= i, n -= j) : o > 0 && k != 0 && (m -= o / k * i, n -= o / k * j);
			i = m * m + n * n;
			if (l < .01 && i < .01) {
				this.onLine(a, b, g, h);
				return
			}
			if (isNaN(l) || isNaN(i)) throw new Error("Bad input");
			o = (c + e) * .5;
			k = (d + f) * .5;
			j = (c + a) * .5;
			m = (d + b) * .5;
			n = (j + o) * .5;
			l = (m + k) * .5;
			i = (g + e) * .5;
			c = (h + f) * .5;
			d = (i + o) * .5;
			e = (c + k) * .5;
			f = (n + d) * .5;
			o = (l + e) * .5;
			this.onBezierCurve(a, b, j, m, n, l, f, o);
			this.onBezierCurve(f, o, d, e, i, c, g, h)
		},
		onArc: function(a, b, c, d, e, f, g, h, i, j, k, l) {
			c = l ? l * Math.PI / 180 : 0;
			d = Math.cos(c);
			l = Math.sin(c);
			c = d * g;
			var m = -l * h;
			l = l * g;
			g = d * h;
			d = j - i;
			d < 0 && !k ? d += Math.PI * 2 : d > 0 && k && (d -= Math.PI * 2);
			h = Math.ceil(Math.abs(d / (Math.PI / 2)));
			j = d / h;
			k = 4 / 3 * Math.tan(j / 4);
			d = Math.cos(i);
			var n = Math.sin(i);
			for (var o = 0; o < h; o++) {
				var p = d - k * n,
					q = n + k * d;
				i += j;
				d = Math.cos(i);
				n = Math.sin(i);
				var r = d + k * n,
					s = n - k * d;
				this.onBezierCurve(a, b, e + c * p + m * q, f + l * p + g * q, e + c * r + m * s, f + l * r + g * s, a = e + c * d + m * n, b = f + l * d + g * n)
			}
		},
		onClose: function(a, b, c, d) {
			this.onLine(a, b, c, d)
		}
	})
}), null);
__d("art/modes/canvas/path", ["art/core/class", "art/core/path"], (function(a, b, c, d, e, f) {
	var g = b("art/core/class")(b("art/core/path"), {
		initialize: function(a) {
			this.reset(), a instanceof g ? this.path = a.path.slice(0) : a && (a.applyToPath ? a.applyToPath(this) : this.push(a))
		},
		onReset: function() {
			this.path = []
		},
		onMove: function(a, b, c, d) {
			this.path.push(function(a) {
				a.moveTo(c, d)
			})
		},
		onLine: function(a, b, c, d) {
			this.path.push(function(a) {
				a.lineTo(c, d)
			})
		},
		onBezierCurve: function(a, b, c, d, e, f, g, h) {
			this.path.push(function(a) {
				a.bezierCurveTo(c, d, e, f, g, h)
			})
		},
		_arcToBezier: b("art/core/path").prototype.onArc,
		onArc: function(a, b, c, d, e, f, g, h, i, j, k, l) {
			if (g != h || l) return this._arcToBezier(a, b, c, d, e, f, g, h, i, j, k, l);
			this.path.push(function(a) {
				a.arc(e, f, g, i, j, k)
			})
		},
		onClose: function() {
			this.path.push(function(a) {
				a.closePath()
			})
		},
		toCommands: function() {
			return this.path.slice(0)
		}
	});
	e.exports = g
}), null);
__d("art/modes/canvas/shape", ["art/core/class", "art/modes/canvas/base", "art/modes/canvas/path"], (function(a, b, c, d, e, f) {
	e.exports = b("art/core/class")(b("art/modes/canvas/base"), {
		base_initialize: b("art/modes/canvas/base").prototype.initialize,
		initialize: function(a, b, c) {
			this.base_initialize(), this.width = b, this.height = c, a != null && this.draw(a)
		},
		draw: function(a, c, d) {
			a instanceof b("art/modes/canvas/path") || (a = new(b("art/modes/canvas/path"))(a));
			this.path = a;
			this._commands = a.toCommands();
			c != null && (this.width = c);
			d != null && (this.height = d);
			return this.invalidate()
		},
		localHitTest: function(a, c) {
			if (!this._fill) return null;
			if (this.width == null || this.height == null) {
				var d = b("art/modes/canvas/base")._genericContext,
					e = this._commands;
				if (!e) return null;
				d.beginPath();
				for (var f = 0, g = e.length; f < g; f++) e[f](d);
				return d.isPointInPath(a, c) ? this : null
			}
			return a > 0 && c > 0 && a < this.width && c < this.height ? this : null
		},
		renderShapeTo: function(a) {
			if (this._invisible || !this._commands || !this._fill && !this._stroke) return null;
			a.transform(this.xx, this.yx, this.xy, this.yy, this.x, this.y);
			var b = this._commands,
				c = this._fill,
				d = this._stroke,
				e = this._strokeDash;
			a.beginPath();
			e ? a.setLineDash ? a.setLineDash(e) : a.mozDash = e : a.setLineDash ? a.setLineDash([]) : a.mozDash = null;
			for (var e = 0, f = b.length; e < f; e++) b[e](a);
			if (c) {
				b = this._fillTransform;
				b ? (a.save(), a.transform(b.xx, b.yx, b.xy, b.yy, b.x, b.y), a.fillStyle = c, a.fill(), a.restore()) : (a.fillStyle = c, a.fill())
			}
			d && (a.strokeStyle = d, a.lineWidth = this._strokeWidth, a.lineCap = this._strokeCap, a.lineJoin = this._strokeJoin, a.stroke())
		}
	})
}), null);
__d("art/dom/native", ["art/core/class"], (function(a, b, c, d, e, f) {
	function g(a) {
		if (a.toElement) return a.toElement();
		if (a.getDOMNode) return a.getDOMNode();
		return a.getNode ? a.getNode() : a
	}
	e.exports = b("art/core/class")({
		toElement: function() {
			return this.element
		},
		getDOMNode: function() {
			return this.toElement()
		},
		getNode: function() {
			return this.toElement()
		},
		inject: function(a) {
			(a.containerElement || g(a)).appendChild(this.element);
			return this
		},
		injectBefore: function(a) {
			a = g(a);
			a.parentNode.insertBefore(this.element, a);
			return this
		},
		eject: function() {
			var a = this.element,
				b = a.parentNode;
			b && b.removeChild(a);
			return this
		},
		subscribe: function(a, b, c) {
			if (typeof a !== "string") {
				var d = [];
				for (var e in a) d.push(this.subscribe(e, a[e]));
				return function() {
					for (var a = 0, b = d.length; a < b; a++) d[a]();
					return this
				}
			} else {
				c || (c = this);
				var f;
				typeof b === "function" ? f = b.bind ? b.bind(c) : function() {
					return b.apply(c, arguments)
				} : f = b;
				var g = this.element;
				if (g.addEventListener) {
					g.addEventListener(a, f, !1);
					return function() {
						g.removeEventListener(a, f, !1);
						return this
					}
				} else {
					g.attachEvent("on" + a, f);
					return function() {
						g.detachEvent("on" + a, f);
						return this
					}
				}
			}
		}
	})
}), null);
__d("art/modes/canvas/surface", ["art/core/class", "art/dom/container", "art/dom/native"], (function(a, b, c, d, e, f) {
	var g = 1e3 / 60,
		h = [],
		i, j = function() {
			clearTimeout(i);
			i = null;
			var a = h;
			h = [];
			for (var b = 0, c = a.length; b < c; b++) {
				var d = a[b];
				d._valid = !0;
				d.render()
			}
		},
		k = typeof window !== "undefined" && window.devicePixelRatio || 1,
		l = null,
		m = null;
	a = b("art/core/class")(b("art/dom/native"), b("art/dom/container"), {
		initialize: function(a, b, c) {
			c = this.element = c || document.createElement("canvas");
			this.context = c.getContext("2d");
			this._valid = !0;
			a != null && b != null && this.resize(a, b);
			c.addEventListener("mousemove", this, !1);
			c.addEventListener("mouseout", this, !1);
			c.addEventListener("mouseover", this, !1);
			c.addEventListener("mouseup", this, !1);
			c.addEventListener("mousedown", this, !1);
			c.addEventListener("click", this, !1)
		},
		handleEvent: function(a) {
			if (a.clientX == null) return;
			var b = this.element,
				c = b.getBoundingClientRect(),
				d = a.clientX - c.left - b.clientLeft;
			c = a.clientY - c.top - b.clientTop;
			b = this.hitTest(d, c);
			b !== l && (l && l.dispatch({
				type: "mouseout",
				target: l,
				relatedTarget: b,
				sourceEvent: a
			}), b && b.dispatch({
				type: "mouseover",
				target: b,
				relatedTarget: l,
				sourceEvent: a
			}), l = b, m = this, this.refreshCursor());
			b && b.dispatch(a)
		},
		refreshCursor: function() {
			if (m !== this) return;
			var a = l,
				b = "",
				c = "";
			while (a) {
				if (!b && a._cursor) {
					b = a._cursor;
					if (c) break
				}
				if (!c && a._tooltip) {
					c = a._tooltip;
					if (b) break
				}
				a = a.parentNode
			}
			this.element.style.cursor = b;
			this.element.title = c
		},
		resize: function(a, b) {
			var c = this.element;
			c.setAttribute("width", a * k);
			c.setAttribute("height", b * k);
			c.style.width = a + "px";
			c.style.height = b + "px";
			this.width = a;
			this.height = b;
			return this
		},
		invalidate: function(a, b, c, d) {
			this._valid && (this._valid = !1, h.push(this), i || (window.mozRequestAnimationFrame ? (i = !0, window.mozRequestAnimationFrame(j)) : i = setTimeout(j, g)));
			return this
		},
		hitTest: function(a, b) {
			if (a < 0 || b < 0 || a > this.width || b > this.height) return null;
			var c = this.lastChild;
			while (c) {
				var d = c.hitTest(a, b);
				if (d) return d;
				c = c.previousSibling
			}
			return null
		},
		render: function() {
			var a = this.firstChild,
				b = this.context;
			b.setTransform(k, 0, 0, k, 0, 0);
			b.clearRect(0, 0, this.width, this.height);
			while (a) a.renderTo(b, k, 0, 0, k, 0, 0), a = a.nextSibling;
			this.refreshCursor()
		}
	});
	a.tagName = "canvas";
	e.exports = a
}), null);
__d("art/modes/canvas/text", ["art/core/class", "art/modes/canvas/base"], (function(a, b, c, d, e, f) {
	var g = {
		middle: "center"
	};
	e.exports = b("art/core/class")(b("art/modes/canvas/base"), {
		base_initialize: b("art/modes/canvas/base").prototype.initialize,
		initialize: function(a, b, c, d) {
			this.base_initialize(), this.draw.apply(this, arguments)
		},
		draw: function(a, c, d, e) {
			var f;
			typeof c === "string" ? f = Number(/(\d+)/.exec(c)[0]) : c ? (f = parseFloat(c.fontSize || c["font-size"] || "12"), c = (c.fontStyle || c["font-style"] || "") + " " + (c.fontVariant || c["font-variant"] || "") + " " + (c.fontWeight || c["font-weight"] || "") + " " + f + "px " + (c.fontFamily || c["font-family"] || "Arial")) : c = this._font;
			e = a && a.split(/\r?\n/);
			this._font = c;
			this._fontSize = f;
			this._text = e;
			this._alignment = g[d] || d || "left";
			a = b("art/modes/canvas/base")._genericContext;
			a.font = this._font;
			a.textAlign = this._alignment;
			a.textBaseline = "middle";
			e = this._text;
			c = e.length;
			d = 0;
			for (var h = 0; h < c; h++) {
				var i = a.measureText(e[h]).width;
				i > d && (d = i)
			}
			this.width = d;
			this.height = c ? c * 1.1 * f : 0;
			return this.invalidate()
		},
		localHitTest: function(a, b) {
			if (!this._fill) return null;
			return a > 0 && b > 0 && a < this.width && b < this.height ? this : null
		},
		renderShapeTo: function(a) {
			if (this._invisible || !this._text || !this._fill && !this._stroke) return null;
			a.transform(this.xx, this.yx, this.xy, this.yy, this.x, this.y);
			var b = this._fill,
				c = this._stroke,
				d = this._text,
				e = this._strokeDash;
			a.font = this._font;
			a.textAlign = this._alignment;
			a.textBaseline = "middle";
			var f = this._fontSize,
				g = f / 2;
			f = 1.1 * f;
			d = d;
			var h = d.length;
			if (b) {
				a.fillStyle = b;
				for (var b = 0; b < h; b++) a.fillText(d[b], 0, g + b * f)
			}
			if (c) {
				e ? a.setLineDash ? a.setLineDash(e) : a.mozDash = e : a.setLineDash ? a.setLineDash([]) : a.mozDash = null;
				a.strokeStyle = c;
				a.lineWidth = this._strokeWidth;
				a.lineCap = this._strokeCap;
				a.lineJoin = this._strokeJoin;
				for (b = 0; b < h; b++) a.strokeText(d[b], 0, g + b * f)
			}
		}
	})
}), null);
__d("art/dom/shadow", ["art/core/class", "art/dom/dummy", "art/dom/native"], (function(a, b, c, d, e, f) {
	e.exports = b("art/core/class")(a = b("art/dom/dummy"), c = b("art/dom/native"), {
		dummy_inject: a.prototype.inject,
		dummy_injectBefore: a.prototype.injectBefore,
		dummy_eject: a.prototype.eject,
		native_inject: c.prototype.inject,
		native_injectBefore: c.prototype.injectBefore,
		native_eject: c.prototype.eject,
		inject: function(a) {
			this.dummy_inject(a);
			this.native_inject(a);
			return this
		},
		injectBefore: function(a) {
			this.dummy_injectBefore(a);
			this.native_injectBefore(a);
			return this
		},
		eject: function() {
			this.dummy_eject();
			this.native_eject();
			return this
		}
	})
}), null);
__d("art/modes/vml/dom", [], (function(a, b, c, d, e, f) {
	var g = "behavior:url(#default#VML);display:inline-block;position:absolute;left:0px;top:0px;",
		h, i = {},
		j = function(a) {
			h && (i[a] = h.addRule("av\\:" + a, g))
		};
	f.init = function(a) {
		var b;
		try {
			b = a.namespaces
		} catch (a) {}
		if (!b) return !1;
		b.add("av", "urn:schemas-microsoft-com:vml");
		b.add("ao", "urn:schemas-microsoft-com:office:office");
		h = a.createStyleSheet();
		h.addRule("vml", "display:inline-block;position:relative;overflow:hidden;");
		j("vml");
		return !0
	};
	f.createElement = function(a) {
		a in i || j(a);
		return document.createElement("av:" + a)
	}
}), null);
__d("art/modes/vml/node", ["art/core/class", "art/core/transform", "art/dom/shadow", "art/modes/vml/dom"], (function(a, b, c, d, e, f) {
	e.exports = b("art/core/class")(b("art/dom/shadow"), b("art/core/transform"), {
		initialize: function(a) {
			this.element = b("art/modes/vml/dom").createElement(a)
		},
		_place: function() {
			this.parentNode && this._transform()
		},
		hide: function() {
			this.element.style.display = "none";
			return this
		},
		show: function() {
			this.element.style.display = "";
			return this
		},
		indicate: function(a, b) {
			a && (this.element.style.cursor = a);
			b && (this.element.title = b);
			return this
		}
	})
}), null);
__d("art/modes/vml/clippingrectangle", ["art/core/class", "art/core/transform", "art/dom/container", "art/modes/vml/node"], (function(a, b, c, d, e, f) {
	e.exports = b("art/core/class")(b("art/modes/vml/node"), b("art/dom/container"), {
		element_initialize: b("art/modes/vml/node").prototype.initialize,
		initialize: function(a, b) {
			this.element_initialize("clippingrectangle"), this.width = a, this.height = b
		},
		_transform: function() {
			var a = this.element;
			a.clip = !0;
			a.coordorigin = -this.x + "," + -1 * this.y;
			a.coordsize = this.width + "," + this.height;
			a.style.clipLeft = this.x;
			a.style.clipRight = this.width + this.x;
			a.style.clipTop = this.y;
			a.style.left = -this.x;
			a.style.top = -this.y;
			a.style.width = this.width + this.x;
			a.style.height = this.height + this.y;
			a.style.rotation = 0;
			a = this.parentNode;
			this._activeTransform = a ? new(b("art/core/transform"))(a._activeTransform).transform(this) : this;
			a = this.firstChild;
			while (a) a._transform(), a = a.nextSibling
		}
	})
}), null);
__d("art/modes/vml/group", ["art/core/class", "art/core/transform", "art/dom/container", "art/modes/vml/node"], (function(a, b, c, d, e, f) {
	e.exports = b("art/core/class")(b("art/modes/vml/node"), b("art/dom/container"), {
		element_initialize: b("art/modes/vml/node").prototype.initialize,
		initialize: function(a, b) {
			this.element_initialize("group"), this.width = a, this.height = b
		},
		_transform: function() {
			var a = this.element;
			a.coordorigin = "0,0";
			a.coordsize = "1000,1000";
			a.style.left = 0;
			a.style.top = 0;
			a.style.width = 1e3;
			a.style.height = 1e3;
			a.style.rotation = 0;
			a = this.parentNode;
			this._activeTransform = a ? new(b("art/core/transform"))(a._activeTransform).transform(this) : this;
			a = this.firstChild;
			while (a) a._transform(), a = a.nextSibling
		}
	})
}), null);
__d("art/modes/vml/path", ["art/core/class", "art/core/path"], (function(a, b, c, d, e, f) {
	var g = 100,
		h = Math.round,
		i = b("art/core/class")(b("art/core/path"), {
			initialize: function(a) {
				this.reset(), a instanceof i ? this.path = [Array.prototype.join.call(a.path, " ")] : a && (a.applyToPath ? a.applyToPath(this) : this.push(a))
			},
			onReset: function() {
				this.path = []
			},
			onMove: function(a, b, c, d) {
				this.path.push("m", h(c * g), h(d * g))
			},
			onLine: function(a, b, c, d) {
				this.path.push("l", h(c * g), h(d * g))
			},
			onBezierCurve: function(a, b, c, d, e, f, i, j) {
				this.path.push("c", h(c * g), h(d * g), h(e * g), h(f * g), h(i * g), h(j * g))
			},
			_arcToBezier: b("art/core/path").prototype.onArc,
			onArc: function(a, b, c, d, e, f, i, j, k, l, m, n) {
				if (i != j || n) return this._arcToBezier(a, b, c, d, e, f, i, j, k, l, m, n);
				e *= g;
				f *= g;
				i *= g;
				this.path.push(m ? "at" : "wa", h(e - i), h(f - i), h(e + i), h(f + i), h(a * g), h(b * g), h(c * g), h(d * g))
			},
			onClose: function() {
				this.path.push("x")
			},
			toVML: function() {
				return this.path.join(" ")
			}
		});
	i.prototype.toString = i.prototype.toVML;
	e.exports = i
}), null);
__d("art/modes/vml/base", ["art/core/class", "art/core/color", "art/core/transform", "art/modes/vml/dom", "art/modes/vml/node"], (function(a, b, c, d, e, f) {
	var g = 100,
		h = {
			left: 0,
			top: 0,
			width: 500,
			height: 500
		};
	e.exports = b("art/core/class")(b("art/modes/vml/node"), {
		element_initialize: b("art/modes/vml/node").prototype.initialize,
		initialize: function(a) {
			this.element_initialize(a);
			a = this.element;
			var c = this.skewElement = b("art/modes/vml/dom").createElement("skew");
			c.on = !0;
			a.appendChild(c);
			c = this.fillElement = b("art/modes/vml/dom").createElement("fill");
			c.on = !1;
			a.appendChild(c);
			c = this.strokeElement = b("art/modes/vml/dom").createElement("stroke");
			c.on = !1;
			a.appendChild(c)
		},
		_transform: function() {
			var a = this.parentNode;
			a = a ? new(b("art/core/transform"))(a._activeTransform).transform(this) : this;
			if (a.xx === 0 && a.yx === 0 || a.xy === 0 && a.yy === 0) {
				this.element.style.visibility = "hidden";
				return
			} else this.element.style.visibility = "";
			var c = this._boxCoords || this._size || h,
				d = c.left || 0,
				e = c.top || 0,
				f = c.width || 1;
			c = c.height || 1;
			var i = a.yx / a.xx > a.yy / a.xy;
			(a.xx < 0 ? a.xy >= 0 : a.xy < 0) && (i = !i);
			i = i ? -1 : 1;
			a = new(b("art/core/transform"))().scale(i, 1).transform(a);
			var j = Math.atan2(-a.xy, a.yy) * 180 / Math.PI,
				k = j * Math.PI / 180,
				l = Math.sin(k);
			k = Math.cos(k);
			k = new(b("art/core/transform"))(a.xx * k - a.xy * l, (a.yx * k - a.yy * l) * i, (a.xy * k + a.xx * l) * i, a.yy * k + a.yx * l);
			l = new(b("art/core/transform"))().rotate(j, 0, 0);
			var m = new(b("art/core/transform"))().rotate(-j, 0, 0).transform(a).moveTo(0, 0);
			f = 1e3;
			c = 1e3;
			var n = a.x,
				o = a.y,
				p = -f / 2,
				q = -c / 2,
				r = l.point(p, q);
			n -= r.x - p;
			o -= r.y - q;
			var s = new(b("art/core/transform"))(a).moveTo(0, 0);
			r = s.point(d, e);
			n += r.x;
			o += r.y;
			i < 0 && (n = -n - f);
			s = s.point(-d, -e);
			var t = l.point(f, c),
				u = l.point(f, 0);
			l = l.point(0, c);
			var v = Math.min(0, t.x, u.x, l.x),
				w = Math.max(0, t.x, u.x, l.x),
				x = Math.min(0, t.y, u.y, l.y);
			u = Math.max(0, t.y, u.y, l.y);
			l = (s.x - t.x / 2) / (w - v) * i;
			w = (s.y - t.y / 2) / (u - x);
			r = m.point(d, e);
			d = r.x;
			e = r.y;
			v = this._strokeWidth;
			if (v) {
				var p = a.xx + a.xy,
					q = a.yy + a.yx;
				v *= Math.sqrt(p * p + q * q) / Math.sqrt(2)
			}
			d *= g;
			e *= g;
			n *= g;
			o *= g;
			f *= g;
			c *= g;
			s = this.element;
			s.coordorigin = d + "," + e;
			s.coordsize = f + "," + c;
			s.style.left = n + "px";
			s.style.top = o + "px";
			s.style.width = f;
			s.style.height = c;
			s.style.rotation = j.toFixed(8);
			s.style.flip = i < 0 ? "x" : "";
			t = this.skewElement;
			t.matrix = [k.xx.toFixed(4), k.xy.toFixed(4), k.yx.toFixed(4), k.yy.toFixed(4), 0, 0];
			t.origin = l + "," + w;
			this.strokeElement.weight = v + "px"
		},
		_createGradient: function(a, c) {
			var d = this.fillElement;
			this.element.removeChild(d);
			d.type = a;
			d.method = "none";
			d.rotate = !0;
			var e = [],
				f, g;
			a = function(a, c) {
				c = b("art/core/color").detach(c), f == null ? f = g = c : g = c, e.push(a + " " + c[0])
			};
			if ("length" in c)
				for (var h = 0, i = c.length - 1; h <= i; h++) a(h / i, c[h]);
			else
				for (var j in c) a(j, c[j]);
			d.color = f[0];
			d.color2 = g[0];
			d.colors = e;
			d.opacity = g[1];
			d["ao:opacity2"] = f[1];
			d.on = !0;
			this.element.appendChild(d);
			return d
		},
		_setColor: function(a, c) {
			a = a == "fill" ? this.fillElement : this.strokeElement;
			c == null ? a.on = !1 : (c = b("art/core/color").detach(c), a.color = c[0], a.opacity = c[1], a.on = !0)
		},
		fill: function(a) {
			if (arguments.length > 1) this.fillLinear(arguments);
			else {
				this._boxCoords = h;
				var b = this.fillElement;
				b.type = "solid";
				b.color2 = "";
				b["ao:opacity2"] = "";
				b.colors && (b.colors.value = "");
				this._setColor("fill", a)
			}
			return this
		},
		fillRadial: function(a, b, c, d, e, f, g) {
			a = this._createGradient("gradientradial", a);
			b == null && (b = this.left + this.width * .5);
			c == null && (c = this.top + this.height * .5);
			e == null && (e = d || this.height * .5);
			d == null && (d = this.width * .5);
			f == null && (f = b);
			g == null && (g = c);
			f += f - b;
			g += g - c;
			f = this._boxCoords = {
				left: f - d * 2,
				top: g - e * 2,
				width: d * 4,
				height: e * 4
			};
			b -= f.left;
			c -= f.top;
			b /= f.width;
			c /= f.height;
			a.focussize = "0 0";
			a.focusposition = b + "," + c;
			a.focus = "50%";
			this._transform();
			return this
		},
		fillLinear: function(a, b, c, d, e) {
			var f = this._createGradient("gradient", a);
			f.focus = "100%";
			if (arguments.length == 5) {
				var g = Math.abs(d - b),
					h = Math.abs(e - c);
				this._boxCoords = {
					left: Math.min(b, d),
					top: Math.min(c, e),
					width: g < 1 ? h : g,
					height: h < 1 ? g : h
				};
				f.angle = (360 + Math.atan2((d - b) / h, (e - c) / g) * 180 / Math.PI) % 360
			} else this._boxCoords = null, f.angle = b == null ? 0 : (90 + b) % 360;
			this._transform();
			return this
		},
		fillImage: function(a, c, d, e, f, g, h) {
			var i = this.fillElement;
			g != null ? (g = b("art/core/color").detach(g), h != null && (h = b("art/core/color").detach(h)), i.type = "pattern", i.color = g[0], i.color2 = h == null ? g[0] : h[0], i.opacity = h == null ? 0 : h[1], i["ao:opacity2"] = g[1]) : (i.type = "tile", i.color = "", i.color2 = "", i.opacity = 1, i["ao:opacity2"] = 1);
			i.colors && (i.colors.value = "");
			i.rotate = !0;
			i.src = a;
			i.size = "1,1";
			i.position = "0,0";
			i.origin = "0,0";
			i.aspect = "ignore";
			i.on = !0;
			e || (e = 0);
			f || (f = 0);
			this._boxCoords = c ? {
				left: e + .5,
				top: f + .5,
				width: c,
				height: d
			} : null;
			this._transform();
			return this
		},
		stroke: function(a, b, c, d) {
			var e = this.strokeElement;
			this._strokeWidth = b != null ? b : 1;
			e.weight = b != null ? b + "px" : 1;
			e.endcap = c != null ? c == "butt" ? "flat" : c : "round";
			e.joinstyle = d != null ? d : "round";
			this._setColor("stroke", a);
			return this
		}
	})
}), null);
__d("art/modes/vml/shape", ["art/core/class", "art/modes/vml/base", "art/modes/vml/dom", "art/modes/vml/path"], (function(a, b, c, d, e, f) {
	var g = 100;
	e.exports = b("art/core/class")(b("art/modes/vml/base"), {
		base_initialize: b("art/modes/vml/base").prototype.initialize,
		initialize: function(a, c, d) {
			this.base_initialize("shape");
			var e = this.pathElement = b("art/modes/vml/dom").createElement("path");
			e.gradientshapeok = !0;
			this.element.appendChild(e);
			this.width = c;
			this.height = d;
			a != null && this.draw(a)
		},
		draw: function(a, c, d) {
			a instanceof b("art/modes/vml/path") || (a = new(b("art/modes/vml/path"))(a));
			this._vml = a.toVML();
			c != null && (this.width = c);
			d != null && (this.height = d);
			this._boxCoords || this._transform();
			this._redraw(this._prefix, this._suffix);
			return this
		},
		_redraw: function(a, b) {
			var c = this._vml || "";
			this._prefix = a;
			this._suffix = b;
			a && (c = [a, c, b, "ns e", c, "nf"].join(" "));
			this.element.path = c + "e"
		},
		fillRadial: function(a, b, c, d, e, f, h) {
			a = this._createGradient("gradientradial", a);
			b == null && (b = (this.left || 0) + (this.width || 0) * .5);
			c == null && (c = (this.top || 0) + (this.height || 0) * .5);
			e == null && (e = d || this.height * .5 || 0);
			d == null && (d = (this.width || 0) * .5);
			f == null && (f = b);
			h == null && (h = c);
			f += f - b;
			h += h - c;
			f = Math.round(f * g);
			h = Math.round(h * g);
			d = Math.round(d * 2 * g);
			e = Math.round(e * 2 * g);
			d = ["wa", f - d, h - e, f + d, h + e].join(" ");
			this._redraw(["m", f, h - e, "l", f, h - e].join(" "), ["m", f, h - e, d, f, h - e, f, h + e, d, f, h + e, f, h - e, d, f, h - e, f, h + e, d, f, h + e, f, h - e].join(" "));
			this._boxCoords = {
				left: b - 2,
				top: c - 2,
				width: 4,
				height: 4
			};
			a.focusposition = "0.5,0.5";
			a.focussize = "0 0";
			a.focus = "50%";
			this._transform();
			return this
		}
	})
}), null);
__d("art/modes/vml/surface", ["art/core/class", "art/dom/container", "art/dom/native", "art/modes/vml/dom"], (function(a, b, c, d, e, f) {
	var g = 100;
	a = b("art/core/class")(b("art/dom/native"), b("art/dom/container"), {
		initialize: function(a, c, d) {
			this.element = d || document.createElement("vml"), this.containerElement = b("art/modes/vml/dom").createElement("group"), this.element.appendChild(this.containerElement), a != null && c != null && this.resize(a, c)
		},
		resize: function(a, b) {
			this.width = a;
			this.height = b;
			var c = this.element.style;
			c.pixelWidth = a;
			c.pixelHeight = b;
			c = this.containerElement.style;
			c.width = a;
			c.height = b;
			c = .5 * g;
			this.containerElement.coordorigin = c + "," + c;
			this.containerElement.coordsize = a * g + "," + b * g;
			return this
		}
	});
	a.tagName = "av:vml";
	e.exports = a
}), null);
__d("art/modes/vml/text", ["art/core/class", "art/modes/vml/base", "art/modes/vml/dom", "art/modes/vml/path"], (function(a, b, c, d, e, f) {
	var g = {
		start: "left",
		middle: "center",
		end: "right"
	};
	e.exports = b("art/core/class")(b("art/modes/vml/base"), {
		base_initialize: b("art/modes/vml/base").prototype.initialize,
		initialize: function(a, c, d, e) {
			this.base_initialize("shape");
			var f = this.pathElement = b("art/modes/vml/dom").createElement("path");
			f.textpathok = !0;
			this.element.appendChild(f);
			f = this.textPathElement = b("art/modes/vml/dom").createElement("textpath");
			f.on = !0;
			f.style["v-text-align"] = "left";
			this.element.appendChild(f);
			this.draw.apply(this, arguments)
		},
		draw: function(a, c, d, e) {
			this.element;
			var f = this.textPathElement,
				h = f.style;
			f.string = a;
			if (c)
				if (typeof c === "string") h.font = c;
				else
					for (var i in c) {
						var j = i.camelCase ? i.camelCase() : i;
						j == "fontFamily" ? h[j] = "'" + c[i] + "'" : h[j] = c[i]
					}
			d && (h["v-text-align"] = g[d] || d);
			if (e) this.currentPath = e = new(b("art/modes/vml/path"))(e), this.element.path = e.toVML();
			else if (!this.currentPath) {
				j = -1;
				c = "\n";
				while ((j = a.indexOf("\n", j + 1)) > -1) c += "\n";
				f.string = c + f.string;
				this.element.path = "m0,0l1,0"
			}
			return this
		}
	})
}), null);
__d("art/modes/fast-noSideEffects", ["art/modes/canvas/base", "art/modes/canvas/surface", "art/modes/canvas/path", "art/modes/canvas/shape", "art/modes/canvas/group", "art/modes/canvas/clippingrectangle", "art/modes/canvas/text", "art/modes/vml/surface", "art/modes/vml/path", "art/modes/vml/shape", "art/modes/vml/group", "art/modes/vml/clippingrectangle", "art/modes/vml/text", "art/modes/vml/dom"], (function(a, b, c, d, e, f) {
	if (b("art/modes/canvas/base")._genericContext) f.Surface = b("art/modes/canvas/surface"), f.Path = b("art/modes/canvas/path"), f.Shape = b("art/modes/canvas/shape"), f.Group = b("art/modes/canvas/group"), f.ClippingRectangle = b("art/modes/canvas/clippingrectangle"), f.Text = b("art/modes/canvas/text");
	else {
		f.Surface = b("art/modes/vml/surface");
		f.Path = b("art/modes/vml/path");
		f.Shape = b("art/modes/vml/shape");
		f.Group = b("art/modes/vml/group");
		f.ClippingRectangle = b("art/modes/vml/clippingrectangle");
		f.Text = b("art/modes/vml/text");
		a = b("art/modes/vml/dom");
		typeof document !== "undefined" && a.init(document)
	}
}), null);
__d("ReactART-dev.classic", ["react", "art/core/transform", "art/modes/current", "scheduler", "scheduler/tracing", "art/modes/fast-noSideEffects", "warning", "ReactFeatureFlags", "ReactFiberErrorDialog", "ReactFbErrorUtils"], (function(a, b, c, d, e, f) {
	"use strict";
	var g
}), null);
__d("ReactART-prod.classic", ["react", "art/core/transform", "art/modes/current", "scheduler", "scheduler/tracing", "art/modes/fast-noSideEffects", "ReactFeatureFlags", "ReactFiberErrorDialog", "ReactFbErrorUtils"], (function(c, d, e, f, g, h) {
	"use strict";
	var i, j = i || d("react");

	function k() {
		k = Object.assign || function(c) {
			for (var d = 1; d < arguments.length; d++) {
				var e = arguments[d],
					f;
				for (f in e) Object.prototype.hasOwnProperty.call(e, f) && (c[f] = e[f])
			}
			return c
		};
		return k.apply(this, arguments)
	}

	function l(c, d) {
		c.prototype = Object.create(d.prototype), c.prototype.constructor = c, c.__proto__ = d
	}

	function m(c) {
		if (void 0 === c) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return c
	}

	function n(c) {
		for (var d = "https://reactjs.org/docs/error-decoder.html?invariant=" + c, e = 1; e < arguments.length; e++) d += "&args[]=" + encodeURIComponent(arguments[e]);
		return "Minified React error #" + c + "; visit " + d + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	}
	var o = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
		p = 60103,
		q = 60106,
		r = 60107,
		s = 60108,
		t = 60114,
		ca = 60109,
		u = 60110,
		da = 60112,
		ea = 60113,
		fa = 60120,
		ga = 60115,
		v = 60116,
		ha = 60119,
		ia = 60129,
		ja = 60130,
		ka = 60131;
	if ("function" === typeof Symbol && Symbol["for"]) {
		var w = Symbol["for"];
		p = w("react.element");
		q = w("react.portal");
		r = w("react.fragment");
		s = w("react.strict_mode");
		t = w("react.profiler");
		ca = w("react.provider");
		u = w("react.context");
		da = w("react.forward_ref");
		ea = w("react.suspense");
		fa = w("react.suspense_list");
		ga = w("react.memo");
		v = w("react.lazy");
		ha = w("react.scope");
		ia = w("react.debug_trace_mode");
		ja = w("react.offscreen");
		ka = w("react.legacy_hidden")
	}
	var la = "function" === typeof Symbol && (typeof Symbol === "function" ? Symbol.iterator : "@@iterator");

	function ma(c) {
		if (null === c || "object" !== typeof c) return null;
		c = la && c[la] || c["@@iterator"];
		return "function" === typeof c ? c : null
	}

	function na(c) {
		if (null == c) return null;
		if ("function" === typeof c) return c.displayName || c.name || null;
		if ("string" === typeof c) return c;
		switch (c) {
			case r:
				return "Fragment";
			case q:
				return "Portal";
			case t:
				return "Profiler";
			case s:
				return "StrictMode";
			case ea:
				return "Suspense";
			case fa:
				return "SuspenseList"
		}
		if ("object" === typeof c) switch (c.$$typeof) {
			case u:
				return (c.displayName || "Context") + ".Consumer";
			case ca:
				return (c._context.displayName || "Context") + ".Provider";
			case da:
				var d = c.render;
				d = d.displayName || d.name || "";
				return c.displayName || ("" !== d ? "ForwardRef(" + d + ")" : "ForwardRef");
			case ga:
				return na(c.type);
			case v:
				d = c._payload;
				c = c._init;
				try {
					return na(c(d))
				} catch (c) {}
		}
		return null
	}
	var oa = d("ReactFeatureFlags").deferRenderPhaseUpdateToNextBatch,
		pa = d("ReactFeatureFlags").decoupleUpdatePriorityFromScheduler,
		qa = d("ReactFeatureFlags").enableUseRefAccessWarning,
		ra = d("ReactFeatureFlags").disableNativeComponentFrames,
		sa = d("ReactFeatureFlags").disableSchedulerTimeoutInWorkLoop;

	function ta(c) {
		var d = c,
			e = c;
		if (c.alternate)
			for (; d["return"];) d = d["return"];
		else {
			c = d;
			do d = c, 0 !== (d.flags & 2050) && (e = d["return"]), c = d["return"]; while (c)
		}
		return 3 === d.tag ? e : null
	}

	function ua(c) {
		if (ta(c) !== c) throw Error(n(188))
	}

	function va(c) {
		var d = c.alternate;
		if (!d) {
			d = ta(c);
			if (null === d) throw Error(n(188));
			return d !== c ? null : c
		}
		for (var e = c, f = d;;) {
			var g = e["return"];
			if (null === g) break;
			var h = g.alternate;
			if (null === h) {
				f = g["return"];
				if (null !== f) {
					e = f;
					continue
				}
				break
			}
			if (g.child === h.child) {
				for (h = g.child; h;) {
					if (h === e) return ua(g), c;
					if (h === f) return ua(g), d;
					h = h.sibling
				}
				throw Error(n(188))
			}
			if (e["return"] !== f["return"]) e = g, f = h;
			else {
				for (var i = !1, j = g.child; j;) {
					if (j === e) {
						i = !0;
						e = g;
						f = h;
						break
					}
					if (j === f) {
						i = !0;
						f = g;
						e = h;
						break
					}
					j = j.sibling
				}
				if (!i) {
					for (j = h.child; j;) {
						if (j === e) {
							i = !0;
							e = h;
							f = g;
							break
						}
						if (j === f) {
							i = !0;
							f = h;
							e = g;
							break
						}
						j = j.sibling
					}
					if (!i) throw Error(n(189))
				}
			}
			if (e.alternate !== f) throw Error(n(190))
		}
		if (3 !== e.tag) throw Error(n(188));
		return e.stateNode.current === e ? c : d
	}

	function wa(c) {
		if (5 === c.tag || 6 === c.tag) return c;
		for (c = c.child; null !== c;) {
			var d = wa(c);
			if (null !== d) return d;
			c = c.sibling
		}
		return null
	}

	function xa(c) {
		var d = c.memoizedState;
		return 13 === c.tag && null !== d && null === d.dehydrated
	}

	function ya(c, d) {
		for (var e = c.alternate; null !== d;) {
			if (d === c || d === e) return !0;
			d = d["return"]
		}
		return !1
	}
	var za = {
			CLIPPING_RECTANGLE: "ClippingRectangle",
			GROUP: "Group",
			SHAPE: "Shape",
			TEXT: "Text"
		},
		Aa = {
			onClick: "click",
			onMouseMove: "mousemove",
			onMouseOver: "mouseover",
			onMouseOut: "mouseout",
			onMouseUp: "mouseup",
			onMouseDown: "mousedown"
		};

	function Ba(c) {
		return c ? "string" === typeof c ? c : c.length ? c.join("") : "" : ""
	}

	function Ca() {
		throw Error(n(305))
	}

	function Da() {
		throw Error(n(357))
	}
	var x = new(d("art/core/transform"))(),
		Ea = {},
		Fa = {};

	function Ga(c) {
		return function(d) {
			var e = c._listeners[d.type];
			e && ("function" === typeof e ? e.call(c, d) : e.handleEvent && e.handleEvent(d))
		}
	}

	function Ha(c) {
		if (c._subscriptions)
			for (var d in c._subscriptions) c._subscriptions[d]();
		c._subscriptions = null;
		c._listeners = null
	}

	function Ia(c, d) {
		Ka(c, d, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}), c.width = d.width, c.height = d.height
	}

	function Ja(c, d) {
		Ka(c, d, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}), c.width = d.width, c.height = d.height
	}

	function Ka(c, d) {
		var e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
			f = null != d.scaleX ? d.scaleX : null != d.scale ? d.scale : 1,
			g = null != d.scaleY ? d.scaleY : null != d.scale ? d.scale : 1;
		x.transformTo(1, 0, 0, 1, 0, 0).move(d.x || 0, d.y || 0).rotate(d.rotation || 0, d.originX, d.originY).scale(f, g, d.originX, d.originY);
		null != d.transform && x.transform(d.transform);
		c.xx === x.xx && c.yx === x.yx && c.xy === x.xy && c.yy === x.yy && c.x === x.x && c.y === x.y || c.transformTo(x);
		d.cursor === e.cursor && d.title === e.title || c.indicate(d.cursor, d.title);
		c.blend && d.opacity !== e.opacity && c.blend(null == d.opacity ? 1 : d.opacity);
		d.visible !== e.visible && (null == d.visible || d.visible ? c.show() : c.hide());
		for (var h in Aa) e = c, f = Aa[h], g = d[h], e._listeners || (e._listeners = {}, e._subscriptions = {}), (e._listeners[f] = g) ? e._subscriptions[f] || (e._subscriptions[f] = e.subscribe(f, Ga(e), e)) : e._subscriptions[f] && (e._subscriptions[f](), delete e._subscriptions[f])
	}

	function La(c, d) {
		var e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
		Ka(c, d, e);
		e.fill !== d.fill && (d.fill && d.fill.applyFill ? d.fill.applyFill(c) : c.fill(d.fill));
		e.stroke === d.stroke && e.strokeWidth === d.strokeWidth && e.strokeCap === d.strokeCap && e.strokeJoin === d.strokeJoin && e.strokeDash === d.strokeDash || c.stroke(d.stroke, d.strokeWidth, d.strokeCap, d.strokeJoin, d.strokeDash)
	}

	function Ma(c, d) {
		var e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
		La(c, d, e);
		var f = d.d || Ba(d.children),
			g = c._prevDelta;
		(f !== c._prevPath || f.delta !== g || e.height !== d.height || e.width !== d.width) && (c.draw(f, d.width, d.height), c._prevDelta = f.delta, c._prevPath = f)
	}

	function Na(c, d) {
		var e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
		La(c, d, e);
		var f = d.children,
			g;
		if (!(g = c._currentString !== f)) {
			g = d.font;
			var h = e.font;
			g = g === h ? !0 : "string" === typeof h || "string" === typeof g ? !1 : h.fontSize === g.fontSize && h.fontStyle === g.fontStyle && h.fontVariant === g.fontVariant && h.fontWeight === g.fontWeight && h.fontFamily === g.fontFamily;
			g = !g
		}(g || d.alignment !== e.alignment || d.path !== e.path) && (c.draw(f, d.font, d.alignment, d.path), c._currentString = f)
	}
	var Oa = setTimeout,
		Pa = clearTimeout;

	function Qa(c, d) {
		return "string" === typeof d.children || "number" === typeof d.children
	}
	var Ra;

	function Sa(c) {
		if (void 0 === Ra) try {
			throw Error()
		} catch (c) {
			var d = c.stack.trim().match(/\n( *(at )?)/);
			Ra = d && d[1] || ""
		}
		return "\n" + Ra + c
	}
	var Ta = !1;

	function Ua(c, d) {
		if (ra || !c || Ta) return "";
		Ta = !0;
		var e = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			if (d)
				if (d = function() {
						throw Error()
					}, Object.defineProperty(d.prototype, "props", {
						set: function() {
							throw Error()
						}
					}), "object" === typeof Reflect && Reflect.construct) {
					try {
						Reflect.construct(d, [])
					} catch (c) {
						var f = c
					}
					Reflect.construct(c, [], d)
				} else {
					try {
						d.call()
					} catch (c) {
						f = c
					}
					c.call(d.prototype)
				}
			else {
				try {
					throw Error()
				} catch (c) {
					f = c
				}
				c()
			}
		} catch (c) {
			if (c && f && "string" === typeof c.stack) {
				for (var d = c.stack.split("\n"), g = f.stack.split("\n"), h = d.length - 1, i = g.length - 1; 1 <= h && 0 <= i && d[h] !== g[i];) i--;
				for (; 1 <= h && 0 <= i; h--, i--)
					if (d[h] !== g[i]) {
						if (1 !== h || 1 !== i)
							do
								if (h--, i--, 0 > i || d[h] !== g[i]) return "\n" + d[h].replace(" at new ", " at "); while (1 <= h && 0 <= i);
						break
					}
			}
		} finally {
			Ta = !1, Error.prepareStackTrace = e
		}
		return (c = c ? c.displayName || c.name : "") ? Sa(c) : ""
	}
	var Va = [],
		Wa = -1;

	function c(c) {
		return {
			current: c
		}
	}

	function y(c) {
		0 > Wa || (c.current = Va[Wa], Va[Wa] = null, Wa--)
	}

	function z(c, d) {
		Wa++, Va[Wa] = c.current, c.current = d
	}
	var Xa = {},
		A = c(Xa),
		B = c(!1),
		Ya = Xa;

	function Za(c, d) {
		var e = c.type.contextTypes;
		if (!e) return Xa;
		var f = c.stateNode;
		if (f && f.__reactInternalMemoizedUnmaskedChildContext === d) return f.__reactInternalMemoizedMaskedChildContext;
		var g = {};
		for (e in e) g[e] = d[e];
		f && (c = c.stateNode, c.__reactInternalMemoizedUnmaskedChildContext = d, c.__reactInternalMemoizedMaskedChildContext = g);
		return g
	}

	function C(c) {
		c = c.childContextTypes;
		return null !== c && void 0 !== c
	}

	function $a() {
		y(B), y(A)
	}

	function ab(c, d, e) {
		if (A.current !== Xa) throw Error(n(168));
		z(A, d);
		z(B, e)
	}

	function bb(c, d, e) {
		var f = c.stateNode;
		c = d.childContextTypes;
		if ("function" !== typeof f.getChildContext) return e;
		f = f.getChildContext();
		for (var g in f)
			if (!(g in c)) throw Error(n(108, na(d) || "Unknown", g));
		return Object.assign({}, e, f)
	}

	function cb(c) {
		c = (c = c.stateNode) && c.__reactInternalMemoizedMergedChildContext || Xa;
		Ya = A.current;
		z(A, c);
		z(B, B.current);
		return !0
	}

	function db(c, d, e) {
		var f = c.stateNode;
		if (!f) throw Error(n(169));
		e ? (c = bb(c, d, Ya), f.__reactInternalMemoizedMergedChildContext = c, y(B), y(A), z(A, c)) : y(B);
		z(B, e)
	}
	var eb = null,
		fb = null,
		D = 8;

	function gb(c) {
		if (0 !== (1 & c)) return D = 15, 1;
		if (0 !== (2 & c)) return D = 14, 2;
		if (0 !== (4 & c)) return D = 13, 4;
		var d = 24 & c;
		if (0 !== d) return D = 12, d;
		if (0 !== (c & 32)) return D = 11, 32;
		d = 192 & c;
		if (0 !== d) return D = 10, d;
		if (0 !== (c & 256)) return D = 9, 256;
		d = 3584 & c;
		if (0 !== d) return D = 8, d;
		if (0 !== (c & 4096)) return D = 7, 4096;
		d = 4186112 & c;
		if (0 !== d) return D = 6, d;
		d = 62914560 & c;
		if (0 !== d) return D = 5, d;
		if (c & 67108864) return D = 4, 67108864;
		if (0 !== (c & 134217728)) return D = 3, 134217728;
		d = 805306368 & c;
		if (0 !== d) return D = 2, d;
		if (0 !== (1073741824 & c)) return D = 1, 1073741824;
		D = 8;
		return c
	}

	function hb(c) {
		switch (c) {
			case 99:
				return 15;
			case 98:
				return 10;
			case 97:
			case 96:
				return 8;
			case 95:
				return 2;
			default:
				return 0
		}
	}

	function ib(c) {
		switch (c) {
			case 15:
			case 14:
				return 99;
			case 13:
			case 12:
			case 11:
			case 10:
				return 98;
			case 9:
			case 8:
			case 7:
			case 6:
			case 4:
			case 5:
				return 97;
			case 3:
			case 2:
			case 1:
				return 95;
			case 0:
				return 90;
			default:
				throw Error(n(358, c))
		}
	}

	function jb(c, d) {
		var e = c.pendingLanes;
		if (0 === e) return D = 0;
		var f = 0,
			g = 0,
			h = c.expiredLanes,
			i = c.suspendedLanes,
			j = c.pingedLanes;
		if (0 !== h) f = h, g = D = 15;
		else if (h = e & 134217727, 0 !== h) {
			var k = h & ~i;
			0 !== k ? (f = gb(k), g = D) : (j &= h, 0 !== j && (f = gb(j), g = D))
		} else h = e & ~i, 0 !== h ? (f = gb(h), g = D) : 0 !== j && (f = gb(j), g = D);
		if (0 === f) return 0;
		f = 31 - pb(f);
		f = e & ((0 > f ? 0 : 1 << f) << 1) - 1;
		if (0 !== d && d !== f && 0 === (d & i)) {
			gb(d);
			if (g <= D) return d;
			D = g
		}
		d = c.entangledLanes;
		if (0 !== d)
			for (c = c.entanglements, d &= f; 0 < d;) e = 31 - pb(d), g = 1 << e, f |= c[e], d &= ~g;
		return f
	}

	function kb(c) {
		c = c.pendingLanes & -1073741825;
		return 0 !== c ? c : c & 1073741824 ? 1073741824 : 0
	}

	function lb(c, d) {
		switch (c) {
			case 15:
				return 1;
			case 14:
				return 2;
			case 12:
				return c = mb(24 & ~d), 0 === c ? lb(10, d) : c;
			case 10:
				return c = mb(192 & ~d), 0 === c ? lb(8, d) : c;
			case 8:
				return c = mb(3584 & ~d), 0 === c && (c = mb(4186112 & ~d), 0 === c && (c = 512)), c;
			case 2:
				return d = mb(805306368 & ~d), 0 === d && (d = 268435456), d
		}
		throw Error(n(358, c))
	}

	function mb(c) {
		return c & -c
	}

	function nb(c) {
		for (var d = [], e = 0; 31 > e; e++) d.push(c);
		return d
	}

	function ob(c, d, e) {
		c.pendingLanes |= d;
		var f = d - 1;
		c.suspendedLanes &= f;
		c.pingedLanes &= f;
		c = c.eventTimes;
		d = 31 - pb(d);
		c[d] = e
	}
	var pb = Math.clz32 ? Math.clz32 : e,
		qb = Math.log,
		rb = Math.LN2;

	function e(c) {
		return 0 === c ? 32 : 31 - (qb(c) / rb | 0) | 0
	}
	var sb = d("scheduler").unstable_runWithPriority,
		tb = d("scheduler").unstable_scheduleCallback,
		ub = d("scheduler").unstable_cancelCallback,
		vb = d("scheduler").unstable_shouldYield;
	w = d("scheduler").unstable_requestPaint;
	var wb = d("scheduler").unstable_now,
		xb = d("scheduler").unstable_getCurrentPriorityLevel,
		yb = d("scheduler").unstable_ImmediatePriority,
		zb = d("scheduler").unstable_UserBlockingPriority,
		Ab = d("scheduler").unstable_NormalPriority,
		Bb = d("scheduler").unstable_LowPriority,
		Cb = d("scheduler").unstable_IdlePriority;
	if (null == d("scheduler/tracing").__interactionsRef || null == d("scheduler/tracing").__interactionsRef.current) throw Error(n(302));
	var Db = {},
		Eb = void 0 !== w ? w : function() {},
		E = null,
		Fb = null,
		Gb = !1,
		Hb = wb(),
		F = 1e4 > Hb ? wb : function() {
			return wb() - Hb
		};

	function Ib() {
		switch (xb()) {
			case yb:
				return 99;
			case zb:
				return 98;
			case Ab:
				return 97;
			case Bb:
				return 96;
			case Cb:
				return 95;
			default:
				throw Error(n(332))
		}
	}

	function Jb(c) {
		switch (c) {
			case 99:
				return yb;
			case 98:
				return zb;
			case 97:
				return Ab;
			case 96:
				return Bb;
			case 95:
				return Cb;
			default:
				throw Error(n(332))
		}
	}

	function Kb(c, d) {
		c = Jb(c);
		return sb(c, d)
	}

	function Lb(c, d, e) {
		c = Jb(c);
		return tb(c, d, e)
	}

	function Mb() {
		if (null !== Fb) {
			var c = Fb;
			Fb = null;
			ub(c)
		}
		Nb()
	}

	function Nb() {
		if (!Gb && null !== E) {
			Gb = !0;
			var c = 0;
			if (pa) try {
				var d = E;
				Kb(99, function() {
					for (; c < d.length; c++) {
						var e = d[c];
						do e = e(!0); while (null !== e)
					}
				});
				E = null
			} catch (d) {
				throw null !== E && (E = E.slice(c + 1)), tb(yb, Mb), d
			} finally {
				Gb = !1
			} else try {
				var e = E;
				Kb(99, function() {
					for (; c < e.length; c++) {
						var d = e[c];
						do d = d(!0); while (null !== d)
					}
				});
				E = null
			} catch (d) {
				throw null !== E && (E = E.slice(c + 1)), tb(yb, Mb), d
			} finally {
				Gb = !1
			}
		}
	}
	var Ob = o.ReactCurrentBatchConfig;

	function f(c, d) {
		return c === d && (0 !== c || 1 / c === 1 / d) || c !== c && d !== d
	}
	var G = "function" === typeof Object.is ? Object.is : f,
		Pb = Object.prototype.hasOwnProperty;

	function Qb(c, d) {
		if (G(c, d)) return !0;
		if ("object" !== typeof c || null === c || "object" !== typeof d || null === d) return !1;
		var e = Object.keys(c),
			f = Object.keys(d);
		if (e.length !== f.length) return !1;
		for (f = 0; f < e.length; f++)
			if (!Pb.call(d, e[f]) || !G(c[e[f]], d[e[f]])) return !1;
		return !0
	}

	function Rb(c) {
		switch (c.tag) {
			case 5:
				return Sa(c.type);
			case 16:
				return Sa("Lazy");
			case 13:
				return Sa("Suspense");
			case 19:
				return Sa("SuspenseList");
			case 0:
			case 2:
			case 15:
				return c = Ua(c.type, !1), c;
			case 11:
				return c = Ua(c.type.render, !1), c;
			case 1:
				return c = Ua(c.type, !0), c;
			default:
				return ""
		}
	}

	function H(c, d) {
		if (c && c.defaultProps) {
			d = Object.assign({}, d);
			c = c.defaultProps;
			for (var e in c) void 0 === d[e] && (d[e] = c[e]);
			return d
		}
		return d
	}
	var Sb = c(null),
		Tb = null,
		Ub = null,
		Vb = null;

	function Wb() {
		Vb = Ub = Tb = null
	}

	function Xb(c) {
		var d = Sb.current;
		y(Sb);
		c.type._context._currentValue2 = d
	}

	function Yb(d, c) {
		for (; null !== d;) {
			var e = d.alternate;
			if ((d.childLanes & c) === c)
				if (null === e || (e.childLanes & c) === c) break;
				else e.childLanes |= c;
			else d.childLanes |= c, null !== e && (e.childLanes |= c);
			d = d["return"]
		}
	}

	function Zb(d, c) {
		Tb = d, Vb = Ub = null, d = d.dependencies, null !== d && null !== d.firstContext && (0 !== (d.lanes & c) && (R = !0), d.firstContext = null)
	}

	function I(c, d) {
		if (Vb !== c && !1 !== d && 0 !== d) {
			("number" !== typeof d || 1073741823 === d) && (Vb = c, d = 1073741823);
			d = {
				context: c,
				observedBits: d,
				next: null
			};
			if (null === Ub) {
				if (null === Tb) throw Error(n(308));
				Ub = d;
				Tb.dependencies = {
					lanes: 0,
					firstContext: d,
					responders: null
				}
			} else Ub = Ub.next = d
		}
		return c._currentValue2
	}
	g = !1;

	function $b(c) {
		c.updateQueue = {
			baseState: c.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: {
				pending: null
			},
			effects: null
		}
	}

	function ac(d, c) {
		d = d.updateQueue, c.updateQueue === d && (c.updateQueue = {
			baseState: d.baseState,
			firstBaseUpdate: d.firstBaseUpdate,
			lastBaseUpdate: d.lastBaseUpdate,
			shared: d.shared,
			effects: d.effects
		})
	}

	function bc(c, d) {
		return {
			eventTime: c,
			lane: d,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		}
	}

	function cc(c, d) {
		c = c.updateQueue;
		if (null !== c) {
			c = c.shared;
			var e = c.pending;
			null === e ? d.next = d : (d.next = e.next, e.next = d);
			c.pending = d
		}
	}

	function dc(c, d) {
		var e = c.updateQueue,
			f = c.alternate;
		if (null !== f && (f = f.updateQueue, e === f)) {
			var g = null,
				h = null;
			e = e.firstBaseUpdate;
			if (null !== e) {
				do {
					var i = {
						eventTime: e.eventTime,
						lane: e.lane,
						tag: e.tag,
						payload: e.payload,
						callback: e.callback,
						next: null
					};
					null === h ? g = h = i : h = h.next = i;
					e = e.next
				} while (null !== e);
				null === h ? g = h = d : h = h.next = d
			} else g = h = d;
			e = {
				baseState: f.baseState,
				firstBaseUpdate: g,
				lastBaseUpdate: h,
				shared: f.shared,
				effects: f.effects
			};
			c.updateQueue = e;
			return
		}
		c = e.lastBaseUpdate;
		null === c ? e.firstBaseUpdate = d : c.next = d;
		e.lastBaseUpdate = d
	}

	function ec(e, f, h, c) {
		var i = e.updateQueue;
		g = !1;
		var j = i.firstBaseUpdate,
			k = i.lastBaseUpdate,
			l = i.shared.pending;
		if (null !== l) {
			i.shared.pending = null;
			var m = l,
				n = m.next;
			m.next = null;
			null === k ? j = n : k.next = n;
			k = m;
			var o = e.alternate;
			if (null !== o) {
				o = o.updateQueue;
				var p = o.lastBaseUpdate;
				p !== k && (null === p ? o.firstBaseUpdate = n : p.next = n, o.lastBaseUpdate = m)
			}
		}
		if (null !== j) {
			p = i.baseState;
			k = 0;
			o = n = m = null;
			do {
				l = j.lane;
				var q = j.eventTime;
				if ((c & l) === l) {
					null !== o && (o = o.next = {
						eventTime: q,
						lane: 0,
						tag: j.tag,
						payload: j.payload,
						callback: j.callback,
						next: null
					});
					a: {
						var d = e,
							r = j;l = f;q = h;
						switch (r.tag) {
							case 1:
								d = r.payload;
								if ("function" === typeof d) {
									p = d.call(q, p, l);
									break a
								}
								p = d;
								break a;
							case 3:
								d.flags = d.flags & -16385 | 128;
							case 0:
								d = r.payload;
								l = "function" === typeof d ? d.call(q, p, l) : d;
								if (null === l || void 0 === l) break a;
								p = Object.assign({}, p, l);
								break a;
							case 2:
								g = !0
						}
					}
					null !== j.callback && (e.flags |= 64, l = i.effects, null === l ? i.effects = [j] : l.push(j))
				} else q = {
					eventTime: q,
					lane: l,
					tag: j.tag,
					payload: j.payload,
					callback: j.callback,
					next: null
				}, null === o ? (n = o = q, m = p) : o = o.next = q, k |= l;
				j = j.next;
				if (null === j)
					if (l = i.shared.pending, null === l) break;
					else j = l.next, l.next = null, i.lastBaseUpdate = l, i.shared.pending = null
			} while (1);
			null === o && (m = p);
			i.baseState = m;
			i.firstBaseUpdate = n;
			i.lastBaseUpdate = o;
			ye |= k;
			e.lanes = k;
			e.memoizedState = p
		}
	}

	function fc(c, d, e) {
		c = d.effects;
		d.effects = null;
		if (null !== c)
			for (d = 0; d < c.length; d++) {
				var f = c[d],
					g = f.callback;
				if (null !== g) {
					f.callback = null;
					f = e;
					if ("function" !== typeof g) throw Error(n(191, g));
					g.call(f)
				}
			}
	}
	var gc = new j.Component().refs;

	function hc(c, d, e, f) {
		d = c.memoizedState, e = e(f, d), e = null === e || void 0 === e ? d : Object.assign({}, d, e), c.memoizedState = e, 0 === c.lanes && (c.updateQueue.baseState = e)
	}
	var ic = {
		isMounted: function(c) {
			return (c = c._reactInternals) ? ta(c) === c : !1
		},
		enqueueSetState: function(c, d, e) {
			c = c._reactInternals;
			var f = $(),
				g = Ve(c),
				h = bc(f, g);
			h.payload = d;
			void 0 !== e && null !== e && (h.callback = e);
			cc(c, h);
			We(c, g, f)
		},
		enqueueReplaceState: function(c, d, e) {
			c = c._reactInternals;
			var f = $(),
				g = Ve(c),
				h = bc(f, g);
			h.tag = 1;
			h.payload = d;
			void 0 !== e && null !== e && (h.callback = e);
			cc(c, h);
			We(c, g, f)
		},
		enqueueForceUpdate: function(c, d) {
			c = c._reactInternals;
			var e = $(),
				f = Ve(c),
				g = bc(e, f);
			g.tag = 2;
			void 0 !== d && null !== d && (g.callback = d);
			cc(c, g);
			We(c, f, e)
		}
	};

	function jc(c, d, e, f, g, h, i) {
		c = c.stateNode;
		return "function" === typeof c.shouldComponentUpdate ? c.shouldComponentUpdate(f, h, i) : d.prototype && d.prototype.isPureReactComponent ? !Qb(e, f) || !Qb(g, h) : !0
	}

	function kc(c, d, e) {
		var f = !1,
			g = Xa,
			h = d.contextType;
		"object" === typeof h && null !== h ? h = I(h) : (g = C(d) ? Ya : A.current, f = d.contextTypes, h = (f = null !== f && void 0 !== f) ? Za(c, g) : Xa);
		d = new d(e, h);
		c.memoizedState = null !== d.state && void 0 !== d.state ? d.state : null;
		d.updater = ic;
		c.stateNode = d;
		d._reactInternals = c;
		f && (c = c.stateNode, c.__reactInternalMemoizedUnmaskedChildContext = g, c.__reactInternalMemoizedMaskedChildContext = h);
		return d
	}

	function lc(c, d, e, f) {
		c = d.state, "function" === typeof d.componentWillReceiveProps && d.componentWillReceiveProps(e, f), "function" === typeof d.UNSAFE_componentWillReceiveProps && d.UNSAFE_componentWillReceiveProps(e, f), d.state !== c && ic.enqueueReplaceState(d, d.state, null)
	}

	function mc(d, e, f, c) {
		var g = d.stateNode;
		g.props = f;
		g.state = d.memoizedState;
		g.refs = gc;
		$b(d);
		var h = e.contextType;
		"object" === typeof h && null !== h ? g.context = I(h) : (h = C(e) ? Ya : A.current, g.context = Za(d, h));
		ec(d, f, g, c);
		g.state = d.memoizedState;
		h = e.getDerivedStateFromProps;
		"function" === typeof h && (hc(d, e, h, f), g.state = d.memoizedState);
		"function" === typeof e.getDerivedStateFromProps || "function" === typeof g.getSnapshotBeforeUpdate || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || (e = g.state, "function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount(), e !== g.state && ic.enqueueReplaceState(g, g.state, null), ec(d, f, g, c), g.state = d.memoizedState);
		"function" === typeof g.componentDidMount && (d.flags |= 4)
	}
	var nc = Array.isArray;

	function oc(c, d, e) {
		c = e.ref;
		if (null !== c && "function" !== typeof c && "object" !== typeof c) {
			if (e._owner) {
				e = e._owner;
				if (e) {
					if (1 !== e.tag) throw Error(n(309));
					var f = e.stateNode
				}
				if (!f) throw Error(n(147, c));
				var g = "" + c;
				if (null !== d && null !== d.ref && "function" === typeof d.ref && d.ref._stringRef === g) return d.ref;
				d = function(c) {
					var d = f.refs;
					d === gc && (d = f.refs = {});
					null === c ? delete d[g] : d[g] = c
				};
				d._stringRef = g;
				return d
			}
			if ("string" !== typeof c) throw Error(n(284));
			if (!e._owner) throw Error(n(290, c))
		}
		return c
	}

	function pc(c, d) {
		if ("textarea" !== c.type) throw Error(n(31, "[object Object]" === Object.prototype.toString.call(d) ? "object with keys {" + Object.keys(d).join(", ") + "}" : d))
	}

	function qc(c) {
		var d = c._init;
		return d(c._payload)
	}

	function rc(d) {
		function e(c, e) {
			if (d) {
				var f = c.lastEffect;
				null !== f ? (f.nextEffect = e, c.lastEffect = e) : c.firstEffect = c.lastEffect = e;
				e.nextEffect = null;
				e.flags = e.flags & 131072 | 8;
				f = c.deletions;
				null === f ? (f = c.deletions = [e], c.flags |= 16) : f.push(e);
				e.deletions = f
			}
		}

		function f(c, f) {
			if (!d) return null;
			for (; null !== f;) e(c, f), f = f.sibling;
			return null
		}

		function g(c, d) {
			for (c = new Map(); null !== d;) null !== d.key ? c.set(d.key, d) : c.set(d.index, d), d = d.sibling;
			return c
		}

		function h(c, d) {
			c = Jf(c, d);
			c.index = 0;
			c.sibling = null;
			return c
		}

		function i(c, e, f) {
			c.index = f;
			if (!d) return e;
			f = c.alternate;
			if (null !== f) return f = f.index, f < e ? (c.flags |= 2, e) : f;
			c.flags |= 2;
			return e
		}

		function j(c) {
			d && null === c.alternate && (c.flags |= 2);
			return c
		}

		function k(c, d, e, f) {
			if (null === d || 6 !== d.tag) return d = Nf(e, c.mode, f), d["return"] = c, d;
			d = h(d, e);
			d["return"] = c;
			return d
		}

		function l(c, d, e, f) {
			var g = e.type;
			if (g === r) return o(c, d, e.props.children, f, e.key);
			if (null !== d && (d.elementType === g || "object" === typeof g && null !== g && g.$$typeof === v && qc(g) === d.type)) return f = h(d, e.props), f.ref = oc(c, d, e), f["return"] = c, f;
			f = Kf(e.type, e.key, e.props, null, c.mode, f);
			f.ref = oc(c, d, e);
			f["return"] = c;
			return f
		}

		function m(c, d, e, f) {
			if (null === d || 4 !== d.tag || d.stateNode.containerInfo !== e.containerInfo || d.stateNode.implementation !== e.implementation) return d = Of(e, c.mode, f), d["return"] = c, d;
			d = h(d, e.children || []);
			d["return"] = c;
			return d
		}

		function o(c, d, e, f, g) {
			if (null === d || 7 !== d.tag) return d = Lf(e, c.mode, f, g), d["return"] = c, d;
			d = h(d, e);
			d["return"] = c;
			return d
		}

		function s(c, d, e) {
			if ("string" === typeof d || "number" === typeof d) return d = Nf("" + d, c.mode, e), d["return"] = c, d;
			if ("object" === typeof d && null !== d) {
				switch (d.$$typeof) {
					case p:
						return e = Kf(d.type, d.key, d.props, null, c.mode, e), e.ref = oc(c, null, d), e["return"] = c, e;
					case q:
						return d = Of(d, c.mode, e), d["return"] = c, d;
					case v:
						var f = d._init;
						return s(c, f(d._payload), e)
				}
				if (nc(d) || ma(d)) return d = Lf(d, c.mode, e, null), d["return"] = c, d;
				pc(c, d)
			}
			return null
		}

		function t(c, d, e, f) {
			var g = null !== d ? d.key : null;
			if ("string" === typeof e || "number" === typeof e) return null !== g ? null : k(c, d, "" + e, f);
			if ("object" === typeof e && null !== e) {
				switch (e.$$typeof) {
					case p:
						return e.key === g ? l(c, d, e, f) : null;
					case q:
						return e.key === g ? m(c, d, e, f) : null;
					case v:
						return g = e._init, t(c, d, g(e._payload), f)
				}
				if (nc(e) || ma(e)) return null !== g ? null : o(c, d, e, f, null);
				pc(c, e)
			}
			return null
		}

		function ca(c, d, e, f, g) {
			if ("string" === typeof f || "number" === typeof f) return c = c.get(e) || null, k(d, c, "" + f, g);
			if ("object" === typeof f && null !== f) {
				switch (f.$$typeof) {
					case p:
						return c = c.get(null === f.key ? e : f.key) || null, l(d, c, f, g);
					case q:
						return c = c.get(null === f.key ? e : f.key) || null, m(d, c, f, g);
					case v:
						var h = f._init;
						return ca(c, d, e, h(f._payload), g)
				}
				if (nc(f) || ma(f)) return c = c.get(e) || null, o(d, c, f, g, null);
				pc(d, f)
			}
			return null
		}

		function u(c, h, j, k) {
			for (var l = null, m = null, n = h, o = h = 0, p = null; null !== n && o < j.length; o++) {
				n.index > o ? (p = n, n = null) : p = n.sibling;
				var q = t(c, n, j[o], k);
				if (null === q) {
					null === n && (n = p);
					break
				}
				d && n && null === q.alternate && e(c, n);
				h = i(q, h, o);
				null === m ? l = q : m.sibling = q;
				m = q;
				n = p
			}
			if (o === j.length) return f(c, n), l;
			if (null === n) {
				for (; o < j.length; o++) n = s(c, j[o], k), null !== n && (h = i(n, h, o), null === m ? l = n : m.sibling = n, m = n);
				return l
			}
			for (n = g(c, n); o < j.length; o++) p = ca(n, c, o, j[o], k), null !== p && (d && null !== p.alternate && n["delete"](null === p.key ? o : p.key), h = i(p, h, o), null === m ? l = p : m.sibling = p, m = p);
			d && n.forEach(function(d) {
				return e(c, d)
			});
			return l
		}

		function da(c, h, j, k) {
			var l = ma(j);
			if ("function" !== typeof l) throw Error(n(150));
			j = l.call(j);
			if (null == j) throw Error(n(151));
			for (var m = l = null, o = h, p = h = 0, q = null, r = j.next(); null !== o && !r.done; p++, r = j.next()) {
				o.index > p ? (q = o, o = null) : q = o.sibling;
				var u = t(c, o, r.value, k);
				if (null === u) {
					null === o && (o = q);
					break
				}
				d && o && null === u.alternate && e(c, o);
				h = i(u, h, p);
				null === m ? l = u : m.sibling = u;
				m = u;
				o = q
			}
			if (r.done) return f(c, o), l;
			if (null === o) {
				for (; !r.done; p++, r = j.next()) r = s(c, r.value, k), null !== r && (h = i(r, h, p), null === m ? l = r : m.sibling = r, m = r);
				return l
			}
			for (o = g(c, o); !r.done; p++, r = j.next()) r = ca(o, c, p, r.value, k), null !== r && (d && null !== r.alternate && o["delete"](null === r.key ? p : r.key), h = i(r, h, p), null === m ? l = r : m.sibling = r, m = r);
			d && o.forEach(function(d) {
				return e(c, d)
			});
			return l
		}

		function c(d, g, i, k) {
			var l = "object" === typeof i && null !== i && i.type === r && null === i.key;
			l && (i = i.props.children);
			var m = "object" === typeof i && null !== i;
			if (m) switch (i.$$typeof) {
				case p:
					a: {
						m = i.key;
						for (l = g; null !== l;) {
							if (l.key === m) {
								m = i.type;
								if (m === r) {
									if (7 === l.tag) {
										f(d, l.sibling);
										g = h(l, i.props.children);
										g["return"] = d;
										d = g;
										break a
									}
								} else if (l.elementType === m || "object" === typeof m && null !== m && m.$$typeof === v && qc(m) === l.type) {
									f(d, l.sibling);
									g = h(l, i.props);
									g.ref = oc(d, l, i);
									g["return"] = d;
									d = g;
									break a
								}
								f(d, l);
								break
							} else e(d, l);
							l = l.sibling
						}
						i.type === r ? (g = Lf(i.props.children, d.mode, k, i.key), g["return"] = d, d = g) : (k = Kf(i.type, i.key, i.props, null, d.mode, k), k.ref = oc(d, g, i), k["return"] = d, d = k)
					}
					return j(d);
				case q:
					a: {
						for (l = i.key; null !== g;) {
							if (g.key === l)
								if (4 === g.tag && g.stateNode.containerInfo === i.containerInfo && g.stateNode.implementation === i.implementation) {
									f(d, g.sibling);
									g = h(g, i.children || []);
									g["return"] = d;
									d = g;
									break a
								} else {
									f(d, g);
									break
								}
							else e(d, g);
							g = g.sibling
						}
						g = Of(i, d.mode, k);g["return"] = d;d = g
					}
					return j(d);
				case v:
					return l = i._init, c(d, g, l(i._payload), k)
			}
			if ("string" === typeof i || "number" === typeof i) return i = "" + i, null !== g && 6 === g.tag ? (f(d, g.sibling), g = h(g, i), g["return"] = d, d = g) : (f(d, g), g = Nf(i, d.mode, k), g["return"] = d, d = g), j(d);
			if (nc(i)) return u(d, g, i, k);
			if (ma(i)) return da(d, g, i, k);
			m && pc(d, i);
			if ("undefined" === typeof i && !l) switch (d.tag) {
				case 1:
				case 0:
				case 11:
				case 15:
					throw Error(n(152, na(d.type) || "Component"))
			}
			return f(d, g)
		}
		return c
	}
	var sc = rc(!0),
		tc = rc(!1),
		uc = {},
		J = c(uc),
		vc = c(uc),
		wc = c(uc);

	function xc(c) {
		if (c === uc) throw Error(n(174));
		return c
	}

	function yc(c, d) {
		z(wc, d), z(vc, c), z(J, uc), y(J), z(J, Ea)
	}

	function zc() {
		y(J), y(vc), y(wc)
	}

	function Ac(c) {
		xc(wc.current), xc(J.current) !== Ea && (z(vc, c), z(J, Ea))
	}

	function Bc(c) {
		vc.current === c && (y(J), y(vc))
	}
	var K = c(0);

	function Cc(c) {
		for (var d = c; null !== d;) {
			if (13 === d.tag) {
				var e = d.memoizedState;
				if (null !== e && (null === e.dehydrated || Ca() || Ca())) return d
			} else if (19 === d.tag && void 0 !== d.memoizedProps.revealOrder) {
				if (0 !== (d.flags & 128)) return d
			} else if (null !== d.child) {
				d.child["return"] = d;
				d = d.child;
				continue
			}
			if (d === c) break;
			for (; null === d.sibling;) {
				if (null === d["return"] || d["return"] === c) return null;
				d = d["return"]
			}
			d.sibling["return"] = d["return"];
			d = d.sibling
		}
		return null
	}
	var Dc = [];

	function Ec() {
		for (var c = 0; c < Dc.length; c++) Dc[c]._workInProgressVersionSecondary = null;
		Dc.length = 0
	}
	var Fc = o.ReactCurrentDispatcher,
		L = o.ReactCurrentBatchConfig,
		Gc = 0,
		M = null,
		N = null,
		O = null,
		Hc = !1,
		Ic = !1;

	function P() {
		throw Error(n(321))
	}

	function Jc(c, d) {
		if (null === d) return !1;
		for (var e = 0; e < d.length && e < c.length; e++)
			if (!G(c[e], d[e])) return !1;
		return !0
	}

	function Kc(d, c, e, f, g, h) {
		Gc = h;
		M = c;
		c.memoizedState = null;
		c.updateQueue = null;
		c.lanes = 0;
		Fc.current = null === d || null === d.memoizedState ? id : jd;
		d = e(f, g);
		if (Ic) {
			h = 0;
			do {
				Ic = !1;
				if (!(25 > h)) throw Error(n(301));
				h += 1;
				O = N = null;
				c.updateQueue = null;
				Fc.current = kd;
				d = e(f, g)
			} while (Ic)
		}
		Fc.current = hd;
		c = null !== N && null !== N.next;
		Gc = 0;
		O = N = M = null;
		Hc = !1;
		if (c) throw Error(n(300));
		return d
	}

	function Lc() {
		var c = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		null === O ? M.memoizedState = O = c : O = O.next = c;
		return O
	}

	function Mc() {
		if (null === N) {
			var c = M.alternate;
			c = null !== c ? c.memoizedState : null
		} else c = N.next;
		var d = null === O ? M.memoizedState : O.next;
		if (null !== d) O = d, N = c;
		else {
			if (null === c) throw Error(n(310));
			N = c;
			c = {
				memoizedState: N.memoizedState,
				baseState: N.baseState,
				baseQueue: N.baseQueue,
				queue: N.queue,
				next: null
			};
			null === O ? M.memoizedState = O = c : O = O.next = c
		}
		return O
	}

	function Q(c, d) {
		return "function" === typeof d ? d(c) : d
	}

	function Nc(c) {
		var d = Mc(),
			e = d.queue;
		if (null === e) throw Error(n(311));
		e.lastRenderedReducer = c;
		var f = N,
			g = f.baseQueue,
			h = e.pending;
		if (null !== h) {
			if (null !== g) {
				var i = g.next;
				g.next = h.next;
				h.next = i
			}
			f.baseQueue = g = h;
			e.pending = null
		}
		if (null !== g) {
			g = g.next;
			f = f.baseState;
			var j = i = h = null,
				k = g;
			do {
				var l = k.lane;
				if ((Gc & l) === l) null !== j && (j = j.next = {
					lane: 0,
					action: k.action,
					eagerReducer: k.eagerReducer,
					eagerState: k.eagerState,
					next: null
				}), f = k.eagerReducer === c ? k.eagerState : c(f, k.action);
				else {
					var m = {
						lane: l,
						action: k.action,
						eagerReducer: k.eagerReducer,
						eagerState: k.eagerState,
						next: null
					};
					null === j ? (i = j = m, h = f) : j = j.next = m;
					M.lanes |= l;
					ye |= l
				}
				k = k.next
			} while (null !== k && k !== g);
			null === j ? h = f : j.next = i;
			G(f, d.memoizedState) || (R = !0);
			d.memoizedState = f;
			d.baseState = h;
			d.baseQueue = j;
			e.lastRenderedState = f
		}
		return [d.memoizedState, e.dispatch]
	}

	function Oc(c) {
		var d = Mc(),
			e = d.queue;
		if (null === e) throw Error(n(311));
		e.lastRenderedReducer = c;
		var f = e.dispatch,
			g = e.pending,
			h = d.memoizedState;
		if (null !== g) {
			e.pending = null;
			var i = g = g.next;
			do h = c(h, i.action), i = i.next; while (i !== g);
			G(h, d.memoizedState) || (R = !0);
			d.memoizedState = h;
			null === d.baseQueue && (d.baseState = h);
			e.lastRenderedState = h
		}
		return [h, f]
	}

	function Pc(c, d, e) {
		var f = d._getVersion;
		f = f(d._source);
		var g = d._workInProgressVersionSecondary;
		null !== g ? c = g === f : (c = c.mutableReadLanes, c = (Gc & c) === c) && (d._workInProgressVersionSecondary = f, Dc.push(d));
		if (c) return e(d._source);
		Dc.push(d);
		throw Error(n(350))
	}

	function Qc(c, d, e, f) {
		var g = V;
		if (null === g) throw Error(n(349));
		var h = d._getVersion,
			i = h(d._source),
			j = Fc.current,
			k = j.useState(function() {
				return Pc(g, d, e)
			}),
			l = k[1],
			m = k[0];
		k = O;
		var o = c.memoizedState,
			p = o.refs,
			q = p.getSnapshot,
			r = o.source;
		o = o.subscribe;
		var s = M;
		c.memoizedState = {
			refs: p,
			source: d,
			subscribe: f
		};
		j.useEffect(function() {
			p.getSnapshot = e;
			p.setSnapshot = l;
			var c = h(d._source);
			if (!G(i, c)) {
				c = e(d._source);
				G(m, c) || (l(c), c = Ve(s), g.mutableReadLanes |= c & g.pendingLanes);
				c = g.mutableReadLanes;
				g.entangledLanes |= c;
				for (var f = g.entanglements, j = c; 0 < j;) {
					var k = 31 - pb(j),
						n = 1 << k;
					f[k] |= c;
					j &= ~n
				}
			}
		}, [e, d, f]);
		j.useEffect(function() {
			return f(d._source, function() {
				var c = p.getSnapshot,
					e = p.setSnapshot;
				try {
					e(c(d._source));
					c = Ve(s);
					g.mutableReadLanes |= c & g.pendingLanes
				} catch (c) {
					e(function() {
						throw c
					})
				}
			})
		}, [d, f]);
		G(q, e) && G(r, d) && G(o, f) || (c = {
			pending: null,
			dispatch: null,
			lastRenderedReducer: Q,
			lastRenderedState: m
		}, c.dispatch = l = fd.bind(null, M, c), k.queue = c, k.baseQueue = null, m = Pc(g, d, e), k.memoizedState = k.baseState = m);
		return m
	}

	function Rc(c, d, e) {
		var f = Mc();
		return Qc(f, c, d, e)
	}

	function Sc(c) {
		var d = Lc();
		"function" === typeof c && (c = c());
		d.memoizedState = d.baseState = c;
		c = d.queue = {
			pending: null,
			dispatch: null,
			lastRenderedReducer: Q,
			lastRenderedState: c
		};
		c = c.dispatch = fd.bind(null, M, c);
		return [d.memoizedState, c]
	}

	function Tc(c, d, e, f) {
		c = {
			tag: c,
			create: d,
			destroy: e,
			deps: f,
			next: null
		};
		d = M.updateQueue;
		null === d ? (d = {
			lastEffect: null
		}, M.updateQueue = d, d.lastEffect = c.next = c) : (e = d.lastEffect, null === e ? d.lastEffect = c.next = c : (f = e.next, e.next = c, c.next = f, d.lastEffect = c));
		return c
	}

	function Uc() {
		return Mc().memoizedState
	}

	function Vc(c, d, e, f) {
		var g = Lc();
		M.flags |= c;
		g.memoizedState = Tc(1 | d, e, void 0, void 0 === f ? null : f)
	}

	function Wc(c, d, e, f) {
		var g = Mc();
		f = void 0 === f ? null : f;
		var h = void 0;
		if (null !== N) {
			var i = N.memoizedState;
			h = i.destroy;
			if (null !== f && Jc(f, i.deps)) {
				Tc(d, e, h, f);
				return
			}
		}
		M.flags |= c;
		g.memoizedState = Tc(1 | d, e, h, f)
	}

	function Xc(c, d) {
		return Vc(132100, 4, c, d)
	}

	function Yc(c, d) {
		return Wc(1028, 4, c, d)
	}

	function Zc(c, d) {
		return Wc(4, 2, c, d)
	}

	function $c(c, d) {
		if ("function" === typeof d) return c = c(), d(c),
			function() {
				d(null)
			};
		if (null !== d && void 0 !== d) return c = c(), d.current = c,
			function() {
				d.current = null
			}
	}

	function ad(c, d, e) {
		e = null !== e && void 0 !== e ? e.concat([c]) : null;
		return Wc(4, 2, $c.bind(null, d, c), e)
	}

	function bd() {}

	function cd(c, d) {
		var e = Mc();
		d = void 0 === d ? null : d;
		var f = e.memoizedState;
		if (null !== f && null !== d && Jc(d, f[1])) return f[0];
		e.memoizedState = [c, d];
		return c
	}

	function dd(c, d) {
		var e = Mc();
		d = void 0 === d ? null : d;
		var f = e.memoizedState;
		if (null !== f && null !== d && Jc(d, f[1])) return f[0];
		c = c();
		e.memoizedState = [c, d];
		return c
	}

	function ed(c, d) {
		var e = Ib();
		Kb(98 > e ? 98 : e, function() {
			c(!0)
		}), Kb(97 < e ? 97 : e, function() {
			var e = L.transition;
			L.transition = 1;
			try {
				c(!1), d()
			} finally {
				L.transition = e
			}
		})
	}

	function fd(c, d, e) {
		var f = $(),
			g = Ve(c),
			h = {
				lane: g,
				action: e,
				eagerReducer: null,
				eagerState: null,
				next: null
			},
			i = d.pending;
		null === i ? h.next = h : (h.next = i.next, i.next = h);
		d.pending = h;
		i = c.alternate;
		if (c === M || null !== i && i === M) Ic = Hc = !0;
		else {
			if (0 === c.lanes && (null === i || 0 === i.lanes) && (i = d.lastRenderedReducer, null !== i)) try {
				d = d.lastRenderedState;
				e = i(d, e);
				h.eagerReducer = i;
				h.eagerState = e;
				if (G(e, d)) return
			} catch (c) {} finally {}
			We(c, g, f)
		}
	}

	function gd() {
		throw Error(n(248))
	}
	var hd = {
		readContext: I,
		useCallback: P,
		useContext: P,
		useEffect: P,
		useImperativeHandle: P,
		useLayoutEffect: P,
		useMemo: P,
		useReducer: P,
		useRef: P,
		useState: P,
		useDebugValue: P,
		useDeferredValue: P,
		useTransition: P,
		useMutableSource: P,
		useOpaqueIdentifier: P,
		unstable_isNewReconciler: !1
	};
	hd.getCacheForType = gd;
	var id = {
			readContext: I,
			useCallback: function(c, d) {
				Lc().memoizedState = [c, void 0 === d ? null : d];
				return c
			},
			useContext: I,
			useEffect: Xc,
			useImperativeHandle: function(c, d, e) {
				e = null !== e && void 0 !== e ? e.concat([c]) : null;
				return Vc(4, 2, $c.bind(null, d, c), e)
			},
			useLayoutEffect: function(c, d) {
				return Vc(4, 2, c, d)
			},
			useMemo: function(c, d) {
				var e = Lc();
				d = void 0 === d ? null : d;
				c = c();
				e.memoizedState = [c, d];
				return c
			},
			useReducer: function(c, d, e) {
				var f = Lc();
				d = void 0 !== e ? e(d) : d;
				f.memoizedState = f.baseState = d;
				c = f.queue = {
					pending: null,
					dispatch: null,
					lastRenderedReducer: c,
					lastRenderedState: d
				};
				c = c.dispatch = fd.bind(null, M, c);
				return [f.memoizedState, c]
			},
			useRef: function(c) {
				var d = Lc();
				if (qa) return c = {
					current: c
				}, d.memoizedState = c;
				c = {
					current: c
				};
				return d.memoizedState = c
			},
			useState: Sc,
			useDebugValue: bd,
			useDeferredValue: function(c) {
				var d = Sc(c),
					e = d[0],
					f = d[1];
				Xc(function() {
					var d = L.transition;
					L.transition = 1;
					try {
						f(c)
					} finally {
						L.transition = d
					}
				}, [c]);
				return e
			},
			useTransition: function() {
				var c = Sc(!1),
					d = c[0];
				c = ed.bind(null, c[1]);
				Lc().memoizedState = c;
				return [c, d]
			},
			useMutableSource: function(c, d, e) {
				var f = Lc();
				f.memoizedState = {
					refs: {
						getSnapshot: d,
						setSnapshot: null
					},
					source: c,
					subscribe: e
				};
				return Qc(f, c, d, e)
			},
			useOpaqueIdentifier: function() {
				throw Error("Not yet implemented")
			},
			unstable_isNewReconciler: !1
		},
		jd = {
			readContext: I,
			useCallback: cd,
			useContext: I,
			useEffect: Yc,
			useImperativeHandle: ad,
			useLayoutEffect: Zc,
			useMemo: dd,
			useReducer: Nc,
			useRef: Uc,
			useState: function() {
				return Nc(Q)
			},
			useDebugValue: bd,
			useDeferredValue: function(c) {
				var d = Nc(Q),
					e = d[0],
					f = d[1];
				Yc(function() {
					var d = L.transition;
					L.transition = 1;
					try {
						f(c)
					} finally {
						L.transition = d
					}
				}, [c]);
				return e
			},
			useTransition: function() {
				var c = Nc(Q)[0];
				return [Mc().memoizedState, c]
			},
			useMutableSource: Rc,
			useOpaqueIdentifier: function() {
				return Nc(Q)[0]
			},
			unstable_isNewReconciler: !1
		};
	jd.getCacheForType = gd;
	var kd = {
		readContext: I,
		useCallback: cd,
		useContext: I,
		useEffect: Yc,
		useImperativeHandle: ad,
		useLayoutEffect: Zc,
		useMemo: dd,
		useReducer: Oc,
		useRef: Uc,
		useState: function() {
			return Oc(Q)
		},
		useDebugValue: bd,
		useDeferredValue: function(c) {
			var d = Oc(Q),
				e = d[0],
				f = d[1];
			Yc(function() {
				var d = L.transition;
				L.transition = 1;
				try {
					f(c)
				} finally {
					L.transition = d
				}
			}, [c]);
			return e
		},
		useTransition: function() {
			var c = Oc(Q)[0];
			return [Mc().memoizedState, c]
		},
		useMutableSource: Rc,
		useOpaqueIdentifier: function() {
			return Oc(Q)[0]
		},
		unstable_isNewReconciler: !1
	};
	kd.getCacheForType = gd;
	var ld = o.ReactCurrentOwner,
		R = !1;

	function S(e, d, f, c) {
		d.child = null === e ? tc(d, null, f, c) : sc(d, e.child, f, c)
	}

	function md(e, d, f, g, c) {
		f = f.render;
		var h = d.ref;
		Zb(d, c);
		g = Kc(e, d, f, g, h, c);
		if (null !== e && !R) return d.updateQueue = e.updateQueue, d.flags &= -1029, e.lanes &= ~c, Fd(e, d, c);
		d.flags |= 1;
		S(e, d, g, c);
		return d.child
	}

	function nd(e, d, f, g, h, c) {
		if (null === e) {
			var i = f.type;
			if ("function" === typeof i && !Hf(i) && void 0 === i.defaultProps && null === f.compare && void 0 === f.defaultProps) return d.tag = 15, d.type = i, od(e, d, i, g, h, c);
			e = Kf(f.type, null, g, d, d.mode, c);
			e.ref = d.ref;
			e["return"] = d;
			return d.child = e
		}
		i = e.child;
		if (0 === (h & c) && (h = i.memoizedProps, f = f.compare, f = null !== f ? f : Qb, f(h, g) && e.ref === d.ref)) return Fd(e, d, c);
		d.flags |= 1;
		e = Jf(i, g);
		e.ref = d.ref;
		e["return"] = d;
		return d.child = e
	}

	function od(e, d, f, g, h, c) {
		if (null !== e && Qb(e.memoizedProps, g) && e.ref === d.ref) {
			R = !1;
			if (0 === (c & h)) return d.lanes = e.lanes, Fd(e, d, c);
			0 !== (e.flags & 65536) && (R = !0)
		}
		return rd(e, d, f, g, c)
	}

	function pd(e, d, c) {
		var f = d.pendingProps,
			g = f.children,
			h = null !== e ? e.memoizedState : null;
		if ("hidden" === f.mode || "unstable-defer-without-hiding" === f.mode)
			if (0 === (d.mode & 4)) d.memoizedState = {
				baseLanes: 0
			}, af(d, c);
			else {
				if (0 === (c & 1073741824)) return e = null !== h ? h.baseLanes | c : c, Bf(1073741824), d.lanes = d.childLanes = 1073741824, d.memoizedState = {
					baseLanes: e
				}, af(d, e), null;
				d.memoizedState = {
					baseLanes: 0
				};
				af(d, null !== h ? h.baseLanes : c)
			}
		else null !== h ? (f = h.baseLanes | c, d.memoizedState = null) : f = c, af(d, f);
		S(e, d, g, c);
		return d.child
	}

	function qd(d, c) {
		var e = c.ref;
		(null === d && null !== e || null !== d && d.ref !== e) && (c.flags |= 256)
	}

	function rd(e, d, f, g, c) {
		var h = C(f) ? Ya : A.current;
		h = Za(d, h);
		Zb(d, c);
		f = Kc(e, d, f, g, h, c);
		if (null !== e && !R) return d.updateQueue = e.updateQueue, d.flags &= -1029, e.lanes &= ~c, Fd(e, d, c);
		d.flags |= 1;
		S(e, d, f, c);
		return d.child
	}

	function sd(e, d, f, h, c) {
		if (C(f)) {
			var i = !0;
			cb(d)
		} else i = !1;
		Zb(d, c);
		if (null === d.stateNode) null !== e && (e.alternate = null, d.alternate = null, d.flags |= 2), kc(d, f, h), mc(d, f, h, c), h = !0;
		else if (null === e) {
			var j = d.stateNode,
				k = d.memoizedProps;
			j.props = k;
			var l = j.context,
				m = f.contextType;
			"object" === typeof m && null !== m ? m = I(m) : (m = C(f) ? Ya : A.current, m = Za(d, m));
			var n = f.getDerivedStateFromProps,
				o = "function" === typeof n || "function" === typeof j.getSnapshotBeforeUpdate;
			o || "function" !== typeof j.UNSAFE_componentWillReceiveProps && "function" !== typeof j.componentWillReceiveProps || (k !== h || l !== m) && lc(d, j, h, m);
			g = !1;
			var p = d.memoizedState;
			j.state = p;
			ec(d, h, j, c);
			l = d.memoizedState;
			k !== h || p !== l || B.current || g ? ("function" === typeof n && (hc(d, f, n, h), l = d.memoizedState), (k = g || jc(d, f, k, h, p, l, m)) ? (o || "function" !== typeof j.UNSAFE_componentWillMount && "function" !== typeof j.componentWillMount || ("function" === typeof j.componentWillMount && j.componentWillMount(), "function" === typeof j.UNSAFE_componentWillMount && j.UNSAFE_componentWillMount()), "function" === typeof j.componentDidMount && (d.flags |= 4)) : ("function" === typeof j.componentDidMount && (d.flags |= 4), d.memoizedProps = h, d.memoizedState = l), j.props = h, j.state = l, j.context = m, h = k) : ("function" === typeof j.componentDidMount && (d.flags |= 4), h = !1)
		} else {
			j = d.stateNode;
			ac(e, d);
			k = d.memoizedProps;
			m = d.type === d.elementType ? k : H(d.type, k);
			j.props = m;
			o = d.pendingProps;
			p = j.context;
			l = f.contextType;
			"object" === typeof l && null !== l ? l = I(l) : (l = C(f) ? Ya : A.current, l = Za(d, l));
			var q = f.getDerivedStateFromProps;
			(n = "function" === typeof q || "function" === typeof j.getSnapshotBeforeUpdate) || "function" !== typeof j.UNSAFE_componentWillReceiveProps && "function" !== typeof j.componentWillReceiveProps || (k !== o || p !== l) && lc(d, j, h, l);
			g = !1;
			p = d.memoizedState;
			j.state = p;
			ec(d, h, j, c);
			var r = d.memoizedState;
			k !== o || p !== r || B.current || g ? ("function" === typeof q && (hc(d, f, q, h), r = d.memoizedState), (m = g || jc(d, f, m, h, p, r, l)) ? (n || "function" !== typeof j.UNSAFE_componentWillUpdate && "function" !== typeof j.componentWillUpdate || ("function" === typeof j.componentWillUpdate && j.componentWillUpdate(h, r, l), "function" === typeof j.UNSAFE_componentWillUpdate && j.UNSAFE_componentWillUpdate(h, r, l)), "function" === typeof j.componentDidUpdate && (d.flags |= 4), "function" === typeof j.getSnapshotBeforeUpdate && (d.flags |= 512)) : ("function" !== typeof j.componentDidUpdate || k === e.memoizedProps && p === e.memoizedState || (d.flags |= 4), "function" !== typeof j.getSnapshotBeforeUpdate || k === e.memoizedProps && p === e.memoizedState || (d.flags |= 512), d.memoizedProps = h, d.memoizedState = r), j.props = h, j.state = r, j.context = l, h = m) : ("function" !== typeof j.componentDidUpdate || k === e.memoizedProps && p === e.memoizedState || (d.flags |= 4), "function" !== typeof j.getSnapshotBeforeUpdate || k === e.memoizedProps && p === e.memoizedState || (d.flags |= 512), h = !1)
		}
		return td(e, d, f, h, i, c)
	}

	function td(e, d, f, g, h, c) {
		qd(e, d);
		var i = 0 !== (d.flags & 128);
		if (!g && !i) return h && db(d, f, !1), Fd(e, d, c);
		g = d.stateNode;
		ld.current = d;
		var j = i && "function" !== typeof f.getDerivedStateFromError ? null : g.render();
		d.flags |= 1;
		null !== e && i ? (d.child = sc(d, e.child, null, c), d.child = sc(d, null, j, c)) : S(e, d, j, c);
		d.memoizedState = g.state;
		h && db(d, f, !0);
		return d.child
	}

	function ud(c) {
		var d = c.stateNode;
		d.pendingContext ? ab(c, d.pendingContext, d.pendingContext !== d.context) : d.context && ab(c, d.context, !1);
		yc(c, d.containerInfo)
	}
	var vd = {
		dehydrated: null,
		retryLane: 0
	};

	function wd(f, e, c) {
		var g = e.pendingProps,
			h = K.current,
			i = !1,
			j = 0 !== (e.flags & 128),
			k;
		(k = j) || (k = null !== f && null === f.memoizedState ? !1 : 0 !== (h & 2));
		k ? (i = !0, e.flags &= -129) : null !== f && null === f.memoizedState || void 0 === g.fallback || !0 === g.unstable_avoidThisFallback || (h |= 1);
		z(K, h & 1);
		if (null === f) {
			if (void 0 !== g.fallback && (f = e.memoizedState, null !== f && null !== f.dehydrated)) return 0 === (e.mode & 2) ? e.lanes = 1 : Ca() ? (Bf(256), e.lanes = 256) : (e.lanes = 1073741824, Bf(1073741824)), null;
			f = g.children;
			var l = g.fallback;
			return i ? (f = yd(e, f, l, c), e.child.memoizedState = {
				baseLanes: c
			}, e.memoizedState = vd, f) : "number" === typeof g.unstable_expectedLoadTime ? (f = yd(e, f, l, c), e.child.memoizedState = {
				baseLanes: c
			}, e.memoizedState = vd, e.lanes = 33554432, Bf(33554432), f) : xd(e, f, c)
		}
		h = f.memoizedState;
		if (null !== h) {
			if (null !== h.dehydrated) {
				if (j) {
					if (null !== e.memoizedState) return e.child = f.child, e.flags |= 128, null;
					i = g.fallback;
					l = e.mode;
					g = Mf(g.children, l, 0, null);
					i = Lf(i, l, c, null);
					i.flags |= 2;
					g["return"] = e;
					i["return"] = e;
					g.sibling = i;
					e.child = g;
					0 !== (e.mode & 2) && sc(e, f.child, null, c);
					e.child.memoizedState = {
						baseLanes: c
					};
					e.memoizedState = vd;
					return i
				}
				if (0 !== (U & 64) || 0 === (e.mode & 2) || Ca()) e = Bd(f, e, c);
				else if (g = 0 !== (c & f.childLanes), R || g) {
					g = V;
					if (null !== g) {
						gb(c);
						switch (D) {
							case 15:
							case 14:
								l = 0;
								break;
							case 13:
							case 12:
								l = 4;
								break;
							case 11:
							case 10:
								l = 32;
								break;
							case 9:
							case 8:
								l = 256;
								break;
							case 7:
							case 6:
								l = 4096;
								break;
							case 5:
								l = 4096;
								break;
							case 4:
								l = 67108864;
								break;
							case 3:
							case 2:
								l = 134217728;
								break;
							case 1:
							case 0:
								l = 0;
								break;
							default:
								throw Error(n(360, l))
						}
						g = 0 !== (l & (g.suspendedLanes | c)) ? 0 : l;
						0 !== g && g !== h.retryLane && (h.retryLane = g, We(f, g, -1))
					}
					gf();
					e = Bd(f, e, c)
				} else Ca() ? (e.flags |= 128, e.child = f.child, e = yf.bind(null, f), d("scheduler/tracing").unstable_wrap(e), Ca(), e = null) : (e = xd(e, e.pendingProps.children, c), e.flags |= 2048);
				return e
			}
			if (i) return g = Ad(f, e, g.children, g.fallback, c), i = e.child, l = f.child.memoizedState, i.memoizedState = null === l ? {
				baseLanes: c
			} : {
				baseLanes: l.baseLanes | c
			}, i.childLanes = f.childLanes & ~c, e.memoizedState = vd, g;
			c = zd(f, e, g.children, c);
			e.memoizedState = null;
			return c
		}
		if (i) return g = Ad(f, e, g.children, g.fallback, c), i = e.child, l = f.child.memoizedState, i.memoizedState = null === l ? {
			baseLanes: c
		} : {
			baseLanes: l.baseLanes | c
		}, i.childLanes = f.childLanes & ~c, e.memoizedState = vd, g;
		c = zd(f, e, g.children, c);
		e.memoizedState = null;
		return c
	}

	function xd(d, e, c) {
		e = Mf({
			mode: "visible",
			children: e
		}, d.mode, c, null);
		e["return"] = d;
		return d.child = e
	}

	function yd(d, e, f, c) {
		var g = d.mode,
			h = d.child;
		e = {
			mode: "hidden",
			children: e
		};
		0 === (g & 2) && null !== h ? (h.childLanes = 0, h.pendingProps = e) : h = Mf(e, g, 0, null);
		f = Lf(f, g, c, null);
		h["return"] = d;
		f["return"] = d;
		h.sibling = f;
		d.child = h;
		return f
	}

	function zd(e, d, f, c) {
		var g = e.child;
		e = g.sibling;
		f = Jf(g, {
			mode: "visible",
			children: f
		});
		0 === (d.mode & 2) && (f.lanes = c);
		f["return"] = d;
		f.sibling = null;
		null !== e && (e.nextEffect = null, e.flags = e.flags & 131072 | 8, d.firstEffect = d.lastEffect = e, c = d.deletions, null === c ? (c = d.deletions = [e], d.flags |= 16) : c.push(e), e.deletions = c);
		return d.child = f
	}

	function Ad(e, d, f, g, c) {
		var h = d.mode,
			i = e.child;
		e = i.sibling;
		var j = {
			mode: "hidden",
			children: f
		};
		0 === (h & 2) && d.child !== i ? (f = d.child, f.childLanes = 0, f.pendingProps = j, null !== e && (i = e.nextEffect, d.firstEffect = null !== i ? i : d.lastEffect = null), d.deletions = null) : (f = Jf(i, j), f.subtreeFlags = i.subtreeFlags & 131072);
		null !== e ? g = Jf(e, g) : (g = Lf(g, h, c, null), g.flags |= 2);
		g["return"] = d;
		f["return"] = d;
		f.sibling = g;
		d.child = f;
		return g
	}

	function Bd(e, d, c) {
		sc(d, e.child, null, c);
		e = xd(d, d.pendingProps.children, c);
		e.flags |= 2;
		d.memoizedState = null;
		return e
	}

	function Cd(d, c) {
		d.lanes |= c;
		var e = d.alternate;
		null !== e && (e.lanes |= c);
		Yb(d["return"], c)
	}

	function Dd(c, d, e, f, g, h) {
		var i = c.memoizedState;
		null === i ? c.memoizedState = {
			isBackwards: d,
			rendering: null,
			renderingStartTime: 0,
			last: f,
			tail: e,
			tailMode: g,
			lastEffect: h
		} : (i.isBackwards = d, i.rendering = null, i.renderingStartTime = 0, i.last = f, i.tail = e, i.tailMode = g, i.lastEffect = h)
	}

	function Ed(e, d, c) {
		var f = d.pendingProps,
			g = f.revealOrder,
			h = f.tail;
		S(e, d, f.children, c);
		f = K.current;
		if (0 !== (f & 2)) f = f & 1 | 2, d.flags |= 128;
		else {
			if (null !== e && 0 !== (e.flags & 128)) a: for (e = d.child; null !== e;) {
				if (13 === e.tag) null !== e.memoizedState && Cd(e, c);
				else if (19 === e.tag) Cd(e, c);
				else if (null !== e.child) {
					e.child["return"] = e;
					e = e.child;
					continue
				}
				if (e === d) break a;
				for (; null === e.sibling;) {
					if (null === e["return"] || e["return"] === d) break a;
					e = e["return"]
				}
				e.sibling["return"] = e["return"];
				e = e.sibling
			}
			f &= 1
		}
		z(K, f);
		if (0 === (d.mode & 2)) d.memoizedState = null;
		else switch (g) {
			case "forwards":
				c = d.child;
				for (g = null; null !== c;) e = c.alternate, null !== e && null === Cc(e) && (g = c), c = c.sibling;
				c = g;
				null === c ? (g = d.child, d.child = null) : (g = c.sibling, c.sibling = null);
				Dd(d, !1, g, c, h, d.lastEffect);
				break;
			case "backwards":
				c = null;
				g = d.child;
				for (d.child = null; null !== g;) {
					e = g.alternate;
					if (null !== e && null === Cc(e)) {
						d.child = g;
						break
					}
					e = g.sibling;
					g.sibling = c;
					c = g;
					g = e
				}
				Dd(d, !0, c, null, h, d.lastEffect);
				break;
			case "together":
				Dd(d, !1, null, null, void 0, d.lastEffect);
				break;
			default:
				d.memoizedState = null
		}
		return d.child
	}

	function Fd(e, d, c) {
		null !== e && (d.dependencies = e.dependencies);
		ye |= d.lanes;
		if (0 === (c & d.childLanes)) return null;
		if (null !== e && d.child !== e.child) throw Error(n(153));
		if (null !== d.child) {
			e = d.child;
			c = Jf(e, e.pendingProps);
			d.child = c;
			for (c["return"] = d; null !== e.sibling;) e = e.sibling, c = c.sibling = Jf(e, e.pendingProps), c["return"] = d;
			c.sibling = null
		}
		return d.child
	}
	var Gd = {};

	function Hd(c, d, e) {
		for (; null !== c;) {
			var f = c,
				g = d,
				h = e;
			if (5 === f.tag) {
				var i = f.type,
					j = f.memoizedProps,
					k = f.stateNode;
				null !== k && !0 === g(i, j || Gd, k) && h.push(k)
			}
			i = f.child;
			xa(f) && (i = f.child.sibling.child);
			null !== i && Hd(i, g, h);
			c = c.sibling
		}
	}

	function Id(c, d) {
		for (; null !== c;) {
			a: {
				var e = c,
					f = d;
				if (5 === e.tag) {
					var g = e.type,
						h = e.memoizedProps,
						i = e.stateNode;
					if (null !== i && !0 === f(g, h, i)) {
						e = i;
						break a
					}
				}
				g = e.child;xa(e) && (g = e.child.sibling.child);e = null !== g ? Id(g, f) : null
			}
			if (null !== e) return e;c = c.sibling
		}
		return null
	}

	function Jd(c, d, e) {
		for (; null !== c;) {
			var f = c,
				g = d,
				h = e;
			if (10 === f.tag && f.type._context === g) h.push(f.memoizedProps.value);
			else {
				var i = f.child;
				xa(f) && (i = f.child.sibling.child);
				null !== i && Jd(i, g, h)
			}
			c = c.sibling
		}
	}

	function Kd(c) {
		var d = Da();
		if (null === d) return null;
		d = d.child;
		var e = [];
		null !== d && Hd(d, c, e);
		return 0 === e.length ? null : e
	}

	function Ld(c) {
		var d = Da();
		if (null === d) return null;
		d = d.child;
		return null !== d ? Id(d, c) : null
	}

	function Md() {
		throw Error("Not yet implemented.")
	}

	function Nd(c) {
		var d = Da();
		if (null === d) return [];
		d = d.child;
		var e = [];
		null !== d && Jd(d, c, e);
		return e
	}
	var Od, Pd, Qd, Rd;
	Od = function(d, c) {
		for (var e = c.child; null !== e;) {
			if (5 === e.tag || 6 === e.tag) {
				var f = d,
					g = e.stateNode;
				if ("string" === typeof g) throw Error(n(216));
				g.inject(f)
			} else if (4 !== e.tag && null !== e.child) {
				e.child["return"] = e;
				e = e.child;
				continue
			}
			if (e === c) break;
			for (; null === e.sibling;) {
				if (null === e["return"] || e["return"] === c) return;
				e = e["return"]
			}
			e.sibling["return"] = e["return"];
			e = e.sibling
		}
	};
	Pd = function() {};
	Qd = function(d, c, e, f) {
		d.memoizedProps !== f && (xc(J.current), c.updateQueue = Fa) && (c.flags |= 4)
	};
	Rd = function(d, c, e, f) {
		e !== f && (c.flags |= 4)
	};

	function Sd(c, d) {
		switch (c.tailMode) {
			case "hidden":
				d = c.tail;
				for (var e = null; null !== d;) null !== d.alternate && (e = d), d = d.sibling;
				null === e ? c.tail = null : e.sibling = null;
				break;
			case "collapsed":
				e = c.tail;
				for (var f = null; null !== e;) null !== e.alternate && (f = e), e = e.sibling;
				null === f ? d || null === c.tail ? c.tail = null : c.tail.sibling = null : f.sibling = null
		}
	}

	function T(c) {
		var d = null !== c.alternate && c.alternate.child === c.child,
			e = 0,
			f = 0;
		if (d)
			for (var g = c.child; null !== g;) e |= g.lanes | g.childLanes, f |= g.subtreeFlags & 131072, f |= g.flags & 131072, g["return"] = c, g = g.sibling;
		else
			for (g = c.child; null !== g;) e |= g.lanes | g.childLanes, f |= g.subtreeFlags, f |= g.flags, g["return"] = c, g = g.sibling;
		c.subtreeFlags |= f;
		c.childLanes = e;
		return d
	}

	function Td(f, e, c) {
		var g = e.pendingProps;
		switch (e.tag) {
			case 2:
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14:
				return T(e), null;
			case 1:
				return C(e.type) && $a(), T(e), null;
			case 3:
				return zc(), y(B), y(A), Ec(), c = e.stateNode, c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null), null !== f && null !== f.child || c.hydrate || (e.flags |= 512), Pd(e), T(e), null;
			case 5:
				Bc(e);
				c = xc(wc.current);
				var h = e.type;
				if (null !== f && null != e.stateNode) Qd(f, e, h, g, c), f.ref !== e.ref && (e.flags |= 256);
				else {
					if (!g) {
						if (null === e.stateNode) throw Error(n(166));
						T(e);
						return null
					}
					xc(J.current);
					switch (h) {
						case za.CLIPPING_RECTANGLE:
							var i = d("art/modes/current").ClippingRectangle();
							i._applyProps = Ia;
							break;
						case za.GROUP:
							i = d("art/modes/current").Group();
							i._applyProps = Ja;
							break;
						case za.SHAPE:
							i = d("art/modes/current").Shape();
							i._applyProps = Ma;
							break;
						case za.TEXT:
							i = d("art/modes/current").Text(g.children, g.font, g.alignment, g.path), i._applyProps = Na
					}
					if (!i) throw Error(n(217, h));
					i._applyProps(i, g);
					f = i;
					Od(f, e, !1, !1);
					e.stateNode = f;
					null !== e.ref && (e.flags |= 256)
				}
				T(e);
				return null;
			case 6:
				if (f && null != e.stateNode) Rd(f, e, f.memoizedProps, g);
				else {
					if ("string" !== typeof g && null === e.stateNode) throw Error(n(166));
					xc(wc.current);
					xc(J.current);
					e.stateNode = g
				}
				T(e);
				return null;
			case 13:
				y(K);
				g = e.memoizedState;
				if (null !== g && null !== g.dehydrated) {
					if (null === f) {
						throw Error(n(318));
						throw Error(n(344))
					}
					0 === (e.flags & 128) && (e.memoizedState = null);
					e.flags |= 4;
					T(e);
					return null
				}
				if (0 !== (e.flags & 128)) return e.lanes = c, e;
				c = null !== g;
				g = !1;
				null !== f && (g = null !== f.memoizedState);
				c && !g && 0 !== (e.mode & 2) && (null === f && !0 !== e.memoizedProps.unstable_avoidThisFallback || 0 !== (K.current & 1) ? 0 === Y && (Y = 3) : gf());
				(c || g) && (e.flags |= 4);
				null !== e.updateQueue && null != e.memoizedProps.suspenseCallback && (e.flags |= 4);
				T(e);
				return null;
			case 4:
				return zc(), Pd(e), T(e), null;
			case 10:
				return Xb(e), T(e), null;
			case 17:
				return C(e.type) && $a(), T(e), null;
			case 19:
				y(K);
				g = e.memoizedState;
				if (null === g) return T(e), null;
				i = 0 !== (e.flags & 128);
				h = g.rendering;
				if (null === h)
					if (i) Sd(g, !1);
					else {
						if (0 !== Y || null !== f && 0 !== (f.flags & 128))
							for (f = e.child; null !== f;) {
								h = Cc(f);
								if (null !== h) {
									e.flags |= 128;
									Sd(g, !1);
									f = h.updateQueue;
									null !== f && (e.updateQueue = f, e.flags |= 4);
									null === g.lastEffect && (e.firstEffect = null);
									e.lastEffect = g.lastEffect;
									e.subtreeFlags = 0;
									f = c;
									for (c = e.child; null !== c;) g = c, i = f, g.flags &= 2, g.nextEffect = null, g.firstEffect = null, g.lastEffect = null, h = g.alternate, null === h ? (g.childLanes = 0, g.lanes = i, g.child = null, g.subtreeFlags = 0, g.memoizedProps = null, g.memoizedState = null, g.updateQueue = null, g.dependencies = null, g.stateNode = null) : (g.childLanes = h.childLanes, g.lanes = h.lanes, g.child = h.child, g.subtreeFlags = h.subtreeFlags, g.deletions = null, g.memoizedProps = h.memoizedProps, g.memoizedState = h.memoizedState, g.updateQueue = h.updateQueue, g.type = h.type, i = h.dependencies, g.dependencies = null === i ? null : {
										lanes: i.lanes,
										firstContext: i.firstContext
									}), c = c.sibling;
									z(K, K.current & 1 | 2);
									return e.child
								}
								f = f.sibling
							}
						null !== g.tail && F() > De && (e.flags |= 128, i = !0, Sd(g, !1), e.lanes = 33554432, Bf(33554432))
					}
				else {
					if (!i)
						if (f = Cc(h), null !== f) {
							if (e.flags |= 128, i = !0, f = f.updateQueue, null !== f && (e.updateQueue = f, e.flags |= 4), Sd(g, !0), null === g.tail && "hidden" === g.tailMode && !h.alternate) return f = e.lastEffect = g.lastEffect, null !== f && (f.nextEffect = null), T(e), null
						} else 2 * F() - g.renderingStartTime > De && 1073741824 !== c && (e.flags |= 128, i = !0, Sd(g, !1), e.lanes = 33554432, Bf(33554432));
					g.isBackwards ? (h.sibling = e.child, e.child = h) : (f = g.last, null !== f ? f.sibling = h : e.child = h, g.last = h)
				}
				if (null !== g.tail) return f = g.tail, g.rendering = f, g.tail = f.sibling, g.lastEffect = e.lastEffect, g.renderingStartTime = F(), f.sibling = null, e = K.current, z(K, i ? e & 1 | 2 : e & 1), f;
				T(e);
				return null;
			case 21:
				return null === f ? (e.stateNode = {
					DO_NOT_USE_queryAllNodes: Kd,
					DO_NOT_USE_queryFirstNode: Ld,
					containsNode: Md,
					getChildContextValues: Nd
				}, Da(), null !== e.ref && (e.flags |= 256, e.flags |= 4)) : (null !== e.ref && (e.flags |= 4), f.ref !== e.ref && (e.flags |= 256)), T(e), null;
			case 22:
			case 23:
				return bf(), c = null !== e.memoizedState, null !== f && null !== f.memoizedState !== c && "unstable-defer-without-hiding" !== g.mode && (e.flags |= 4), c && 0 === (ue & 1073741824) && 0 !== (e.mode & 4) || T(e), null
		}
		throw Error(n(156, e.tag))
	}

	function Ud(c) {
		switch (c.tag) {
			case 1:
				C(c.type) && $a();
				var d = c.flags;
				return d & 16384 ? (c.flags = d & -16385 | 128, c) : null;
			case 3:
				zc();
				y(B);
				y(A);
				Ec();
				d = c.flags;
				if (0 !== (d & 128)) throw Error(n(285));
				c.flags = d & -16385 | 128;
				return c;
			case 5:
				return Bc(c), null;
			case 13:
				y(K);
				d = c.memoizedState;
				if (null !== d && null !== d.dehydrated && null === c.alternate) throw Error(n(340));
				d = c.flags;
				return d & 16384 ? (c.flags = d & -16385 | 128, c) : null;
			case 19:
				return y(K), null;
			case 4:
				return zc(), null;
			case 10:
				return Xb(c), null;
			case 22:
			case 23:
				return bf(), null;
			default:
				return null
		}
	}

	function Vd(c, d) {
		try {
			var e = "",
				f = d;
			do e += Rb(f), f = f["return"]; while (f);
			f = e
		} catch (c) {
			f = "\nError generating stack: " + c.message + "\n" + c.stack
		}
		return {
			value: c,
			source: d,
			stack: f
		}
	}
	if ("function" !== typeof d("ReactFiberErrorDialog").showErrorDialog) throw Error(n(320));

	function Wd(c, e) {
		try {
			!1 !== d("ReactFiberErrorDialog").showErrorDialog({
				componentStack: null !== e.stack ? e.stack : "",
				error: e.value,
				errorBoundary: null !== c && 1 === c.tag ? c.stateNode : null
			}) && !1
		} catch (c) {
			setTimeout(function() {
				throw c
			})
		}
	}
	var Xd = "function" === typeof WeakMap ? WeakMap : Map;

	function Yd(c, d, e) {
		e = bc(-1, e);
		e.tag = 3;
		e.payload = {
			element: null
		};
		var f = d.value;
		e.callback = function() {
			Ee || (Ee = !0, Fe = f), Wd(c, d)
		};
		return e
	}

	function Zd(c, d, e) {
		e = bc(-1, e);
		e.tag = 3;
		var f = c.type.getDerivedStateFromError;
		if ("function" === typeof f) {
			var g = d.value;
			e.payload = function() {
				Wd(c, d);
				return f(g)
			}
		}
		var h = c.stateNode;
		null !== h && "function" === typeof h.componentDidCatch && (e.callback = function() {
			"function" !== typeof f && (null === Ge ? Ge = new Set([this]) : Ge.add(this), Wd(c, d));
			var e = d.stack;
			this.componentDidCatch(d.value, {
				componentStack: null !== e ? e : ""
			})
		});
		return e
	}
	if ("function" !== typeof d("ReactFbErrorUtils").invokeGuardedCallback) throw Error(n(255));
	var $d = "function" === typeof WeakSet ? WeakSet : Set,
		ae;

	function be(c) {
		var d = c.ref;
		if (null !== d)
			if ("function" === typeof d) try {
				d(null)
			} catch (d) {
				vf(c, d)
			} else d.current = null
	}

	function ce(c, d) {
		switch (d.tag) {
			case 0:
			case 11:
			case 15:
				return;
			case 1:
				if (d.flags & 512 && null !== c) {
					var e = c.memoizedProps,
						f = c.memoizedState;
					c = d.stateNode;
					d = c.getSnapshotBeforeUpdate(d.elementType === d.type ? e : H(d.type, e), f);
					c.__reactInternalSnapshotBeforeUpdate = d
				}
				return;
			case 3:
				return;
			case 5:
			case 6:
			case 4:
			case 17:
				return
		}
		throw Error(n(163))
	}

	function de(c, d) {
		d = d.updateQueue;
		d = null !== d ? d.lastEffect : null;
		if (null !== d) {
			var e = d = d.next;
			do {
				if ((e.tag & c) === c) {
					var f = e.create;
					e.destroy = f()
				}
				e = e.next
			} while (e !== d)
		}
	}

	function ee(c, d, e) {
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				de(3, e);
				d = e.updateQueue;
				d = null !== d ? d.lastEffect : null;
				if (null !== d) {
					c = d = d.next;
					do {
						var f = c,
							g = f.next;
						f = f.tag;
						0 !== (f & 4) && 0 !== (f & 1) && (sf(e, c), rf());
						c = g
					} while (c !== d)
				}
				return;
			case 1:
				c = e.stateNode;
				e.flags & 4 && (null === d ? c.componentDidMount() : (g = e.elementType === e.type ? d.memoizedProps : H(e.type, d.memoizedProps), c.componentDidUpdate(g, d.memoizedState, c.__reactInternalSnapshotBeforeUpdate)));
				d = e.updateQueue;
				null !== d && fc(e, d, c);
				return;
			case 3:
				d = e.updateQueue;
				if (null !== d) {
					c = null;
					if (null !== e.child) switch (e.child.tag) {
						case 5:
							c = e.child.stateNode;
							break;
						case 1:
							c = e.child.stateNode
					}
					fc(e, d, c)
				}
				return;
			case 5:
				return;
			case 6:
				return;
			case 4:
				return;
			case 12:
				return;
			case 13:
				return;
			case 19:
			case 17:
			case 20:
			case 21:
			case 22:
			case 23:
				return
		}
		throw Error(n(163))
	}

	function fe(c, d) {
		for (var e = c;;) {
			if (5 === e.tag) {
				var f = e.stateNode;
				d ? f.hide() : (f = e.memoizedProps, (null == f.visible || f.visible) && e.stateNode.show())
			} else if (6 !== e.tag && (22 !== e.tag && 23 !== e.tag || null === e.memoizedState || e === c) && null !== e.child) {
				e.child["return"] = e;
				e = e.child;
				continue
			}
			if (e === c) break;
			for (; null === e.sibling;) {
				if (null === e["return"] || e["return"] === c) return;
				e = e["return"]
			}
			e.sibling["return"] = e["return"];
			e = e.sibling
		}
	}

	function ge(c) {
		var d = c.ref;
		if (null !== d) {
			var e = c.stateNode;
			switch (c.tag) {
				case 5:
					var f = e;
					break;
				default:
					f = e
			}
			21 === c.tag && (f = e);
			"function" === typeof d ? d(f) : d.current = f
		}
	}

	function he(c, d) {
		if (fb && "function" === typeof fb.onCommitFiberUnmount) try {
			fb.onCommitFiberUnmount(eb, d)
		} catch (c) {}
		switch (d.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				c = d.updateQueue;
				if (null !== c && (c = c.lastEffect, null !== c)) {
					var e = c = c.next;
					do {
						var f = e,
							g = f.destroy;
						f = f.tag;
						if (void 0 !== g)
							if (0 !== (f & 4)) sf(d, e);
							else {
								f = d;
								try {
									g()
								} catch (c) {
									vf(f, c)
								}
							} e = e.next
					} while (e !== c)
				}
				break;
			case 1:
				be(d);
				c = d.stateNode;
				if ("function" === typeof c.componentWillUnmount) try {
					c.props = d.memoizedProps, c.state = d.memoizedState, c.componentWillUnmount()
				} catch (c) {
					vf(d, c)
				}
				break;
			case 5:
				be(d);
				break;
			case 4:
				ne(c, d);
				break;
			case 18:
				c = c.hydrationCallbacks;
				null !== c && (c = c.onDeleted) && c(d.stateNode);
				break;
			case 21:
				be(d)
		}
	}

	function ie(c) {
		c.alternate = null, c.child = null, c.deletions = null, c.dependencies = null, c.firstEffect = null, c.lastEffect = null, c.memoizedProps = null, c.memoizedState = null, c.pendingProps = null, c["return"] = null, c.updateQueue = null
	}

	function je(c) {
		return 5 === c.tag || 3 === c.tag || 4 === c.tag
	}

	function ke(c) {
		a: {
			for (var d = c["return"]; null !== d;) {
				if (je(d)) break a;
				d = d["return"]
			}
			throw Error(n(160))
		}
		var e = d;d = e.stateNode;
		switch (e.tag) {
			case 5:
				var f = !1;
				break;
			case 3:
				d = d.containerInfo;
				f = !0;
				break;
			case 4:
				d = d.containerInfo;
				f = !0;
				break;
			default:
				throw Error(n(161))
		}
		e.flags & 32 && (e.flags &= -33);a: b: for (e = c;;) {
			for (; null === e.sibling;) {
				if (null === e["return"] || je(e["return"])) {
					e = null;
					break a
				}
				e = e["return"]
			}
			e.sibling["return"] = e["return"];
			for (e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
				if (e.flags & 2) continue b;
				if (null === e.child || 4 === e.tag) continue b;
				else e.child["return"] = e, e = e.child
			}
			if (!(e.flags & 2)) {
				e = e.stateNode;
				break a
			}
		}
		f ? le(c, e, d) : me(c, e, d)
	}

	function le(c, d, e) {
		var f = c.tag,
			g = 5 === f || 6 === f;
		if (g)
			if (c = g ? c.stateNode : c.stateNode.instance, d) {
				if (c === d) throw Error(n(218));
				c.injectBefore(d)
			} else c.parentNode === e && c.eject(), c.inject(e);
		else if (4 !== f && (c = c.child, null !== c))
			for (le(c, d, e), c = c.sibling; null !== c;) le(c, d, e), c = c.sibling
	}

	function me(c, d, e) {
		var f = c.tag,
			g = 5 === f || 6 === f;
		if (g)
			if (c = g ? c.stateNode : c.stateNode.instance, d) {
				if (c === d) throw Error(n(218));
				c.injectBefore(d)
			} else c.parentNode === e && c.eject(), c.inject(e);
		else if (4 !== f && (c = c.child, null !== c))
			for (me(c, d, e), c = c.sibling; null !== c;) me(c, d, e), c = c.sibling
	}

	function ne(c, d) {
		for (var e = d, f = !1, g, h;;) {
			if (!f) {
				f = e["return"];
				a: for (;;) {
					if (null === f) throw Error(n(160));
					g = f.stateNode;
					switch (f.tag) {
						case 5:
							break a;
						case 3:
							g = g.containerInfo;
							break a;
						case 4:
							g = g.containerInfo;
							break a
					}
					f = f["return"]
				}
				f = !0
			}
			if (5 === e.tag || 6 === e.tag) {
				a: for (var i = c, j = e, k = j;;)
					if (he(i, k), null !== k.child && 4 !== k.tag) k.child["return"] = k, k = k.child;
					else {
						if (k === j) break a;
						for (; null === k.sibling;) {
							if (null === k["return"] || k["return"] === j) break a;
							k = k["return"]
						}
						k.sibling["return"] = k["return"];
						k = k.sibling
					}i = e.stateNode,
				Ha(i),
				i.eject()
			}
			else if (18 === e.tag) i = c.hydrationCallbacks, null !== i && (i = i.onDeleted) && i(e.stateNode), Ca(g, e.stateNode);
			else if (4 === e.tag) {
				if (null !== e.child) {
					g = e.stateNode.containerInfo;
					e.child["return"] = e;
					e = e.child;
					continue
				}
			} else if (he(c, e), null !== e.child) {
				e.child["return"] = e;
				e = e.child;
				continue
			}
			if (e === d) break;
			for (; null === e.sibling;) {
				if (null === e["return"] || e["return"] === d) return;
				e = e["return"];
				4 === e.tag && (f = !1)
			}
			e.sibling["return"] = e["return"];
			e = e.sibling
		}
	}

	function oe(c, d) {
		switch (d.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				d = d.updateQueue;
				d = null !== d ? d.lastEffect : null;
				if (null !== d) {
					var e = d = d.next;
					do {
						if (3 === (e.tag & 3)) {
							var f = e.destroy;
							e.destroy = void 0;
							void 0 !== f && f()
						}
						e = e.next
					} while (e !== d)
				}
				return;
			case 1:
				return;
			case 5:
				e = d.stateNode;
				if (null != e) {
					f = d.memoizedProps;
					c = null !== c ? c.memoizedProps : f;
					var g = d.updateQueue;
					d.updateQueue = null;
					null !== g && e._applyProps(e, f, c)
				}
				return;
			case 6:
				if (null === d.stateNode) throw Error(n(162));
				return;
			case 3:
				return;
			case 12:
				return;
			case 13:
				e = d.memoizedState;
				null !== e && (Ce = F(), fe(d.child, !0));
				null !== e && (e = d.memoizedProps.suspenseCallback, "function" === typeof e && (f = d.updateQueue, null !== f && e(new Set(f))));
				pe(d);
				return;
			case 19:
				pe(d);
				return;
			case 17:
				return;
			case 21:
				Da();
				return;
			case 22:
			case 23:
				fe(d, null !== d.memoizedState);
				return
		}
		throw Error(n(163))
	}

	function pe(c) {
		var e = c.updateQueue;
		if (null !== e) {
			c.updateQueue = null;
			var f = c.stateNode;
			null === f && (f = c.stateNode = new $d());
			e.forEach(function(e) {
				var g = zf.bind(null, c, e);
				f.has(e) || (!0 !== e.__reactDoNotTraceInteractions && (g = d("scheduler/tracing").unstable_wrap(g)), f.add(e), e.then(g, g))
			})
		}
	}

	function qe(c, d) {
		return null !== c && (c = c.memoizedState, null === c || null !== c.dehydrated) ? (d = d.memoizedState, null !== d && null === d.dehydrated) : !1
	}
	var re = Math.ceil,
		se = o.ReactCurrentDispatcher,
		te = o.ReactCurrentOwner,
		U = 0,
		V = null,
		W = null,
		X = 0,
		ue = 0,
		ve = c(0),
		Y = 0,
		we = null,
		xe = 0,
		ye = 0,
		ze = 0,
		Ae = 0,
		Be = null,
		Ce = 0,
		De = Infinity,
		Z = null,
		Ee = !1,
		Fe = null,
		Ge = null,
		He = !1,
		Ie = null,
		Je = 90,
		Ke = 0,
		Le = [],
		Me = null,
		Ne = 0,
		Oe = null,
		Pe = null,
		Qe = -1,
		Re = 0,
		Se = 0,
		Te = null,
		Ue = !1;

	function $() {
		return 0 !== (U & 48) ? F() : -1 !== Qe ? Qe : Qe = F()
	}

	function Ve(c) {
		c = c.mode;
		if (0 === (c & 2)) return 1;
		if (0 === (c & 4)) return 99 === Ib() ? 1 : 2;
		if (!oa && 0 !== (U & 16) && 0 !== X) return X & -X;
		0 === Re && (Re = xe);
		if (0 !== Ob.transition) {
			0 !== Se && (Se = null !== Be ? Be.pendingLanes : 0);
			c = Re;
			var d = 4186112 & ~Se;
			d &= -d;
			0 === d && (c = 4186112 & ~c, d = c & -c, 0 === d && (d = 8192));
			return d
		}
		c = Ib();
		0 !== (U & 4) && 98 === c ? c = lb(12, Re) : (c = hb(c), c = lb(c, Re));
		return c
	}

	function We(c, d, e) {
		if (50 < Ne) throw Ne = 0, Oe = null, Error(n(185));
		c = Xe(c, d);
		if (null === c) return null;
		ob(c, d, e);
		c === V && ((oa || 0 === (U & 16)) && (ze |= d), 4 === Y && Ze(c, X));
		var f = Ib();
		1 === d ? 0 !== (U & 8) && 0 === (U & 48) ? (Df(c, d), $e(c)) : (aa(c, e), Df(c, d), 0 === U && (De = F() + 500, Mb())) : (0 === (U & 4) || 98 !== f && 99 !== f || (null === Me ? Me = new Set([c]) : Me.add(c)), aa(c, e), Df(c, d));
		Be = c
	}

	function Xe(c, d) {
		c.lanes |= d;
		var e = c.alternate;
		null !== e && (e.lanes |= d);
		e = c;
		for (c = c["return"]; null !== c;) c.childLanes |= d, e = c.alternate, null !== e && (e.childLanes |= d), e = c, c = c["return"];
		return 3 === e.tag ? e.stateNode : null
	}

	function aa(c, d) {
		for (var e = c.callbackNode, f = c.suspendedLanes, g = c.pingedLanes, h = c.expirationTimes, i = c.pendingLanes; 0 < i;) {
			var j = 31 - pb(i),
				k = 1 << j,
				l = h[j];
			if (-1 === l) {
				if (0 === (k & f) || 0 !== (k & g)) {
					l = d;
					gb(k);
					var m = D;
					h[j] = 10 <= m ? l + 250 : 6 <= m ? l + 5e3 : -1
				}
			} else l <= d && (c.expiredLanes |= k);
			i &= ~k
		}
		f = jb(c, c === V ? X : 0);
		d = D;
		if (0 === f) null !== e && (e !== Db && ub(e), c.callbackNode = null, c.callbackPriority = 0);
		else {
			if (null !== e) {
				if (c.callbackPriority === d) return;
				e !== Db && ub(e)
			}
			15 === d ? (e = $e.bind(null, c), null === E ? (E = [e], Fb = tb(yb, Nb)) : E.push(e), e = Db) : 14 === d ? e = Lb(99, $e.bind(null, c)) : (e = ib(d), e = Lb(e, Ye.bind(null, c)));
			c.callbackPriority = d;
			c.callbackNode = e
		}
	}

	function Ye(c, e) {
		Qe = -1;
		Se = Re = 0;
		if (0 !== (U & 48)) throw Error(n(327));
		var f = c.callbackNode;
		if (qf() && c.callbackNode !== f) return null;
		var g = jb(c, c === V ? X : 0);
		if (0 === g) return null;
		if (!sa && e) return c.expiredLanes |= g & c.pendingLanes, aa(c, F()), null;
		var h = g;
		e = U;
		U |= 16;
		var i = ef();
		(V !== c || X !== h) && (De = F() + 500, cf(c, h), Ef(c, h));
		h = ff(c);
		do try {
			kf();
			break
		} catch (d) {
			df(c, d)
		}
		while (1);
		Wb();
		d("scheduler/tracing").__interactionsRef.current = h;
		se.current = i;
		U = e;
		null !== W ? e = 0 : (V = null, X = 0, e = Y);
		if (0 !== (xe & ze)) cf(c, 0);
		else if (0 !== e) {
			2 === e && (U |= 64, c.hydrate && (c.hydrate = !1), g = kb(c), 0 !== g && (e = hf(c, g)));
			if (1 === e) throw f = we, cf(c, 0), Ze(c, g), aa(c, F()), f;
			c.finishedWork = c.current.alternate;
			c.finishedLanes = g;
			switch (e) {
				case 0:
				case 1:
					throw Error(n(345));
				case 2:
					nf(c);
					break;
				case 3:
					Ze(c, g);
					if ((g & 62914560) === g && (e = Ce + 500 - F(), 10 < e)) {
						if (0 !== jb(c, 0)) break;
						i = c.suspendedLanes;
						if ((i & g) !== g) {
							$();
							c.pingedLanes |= c.suspendedLanes & i;
							break
						}
						c.timeoutHandle = Oa(nf.bind(null, c), e);
						break
					}
					nf(c);
					break;
				case 4:
					Ze(c, g);
					if ((g & 4186112) === g) break;
					e = c.eventTimes;
					for (i = -1; 0 < g;) {
						var j = 31 - pb(g);
						h = 1 << j;
						j = e[j];
						j > i && (i = j);
						g &= ~h
					}
					g = i;
					g = F() - g;
					g = (120 > g ? 120 : 480 > g ? 480 : 1080 > g ? 1080 : 1920 > g ? 1920 : 3e3 > g ? 3e3 : 4320 > g ? 4320 : 1960 * re(g / 1960)) - g;
					if (10 < g) {
						c.timeoutHandle = Oa(nf.bind(null, c), g);
						break
					}
					nf(c);
					break;
				case 5:
					nf(c);
					break;
				default:
					throw Error(n(329))
			}
		}
		aa(c, F());
		return c.callbackNode === f ? Ye.bind(null, c) : null
	}

	function Ze(c, d) {
		d &= ~Ae;
		d &= ~ze;
		c.suspendedLanes |= d;
		c.pingedLanes &= ~d;
		for (c = c.expirationTimes; 0 < d;) {
			var e = 31 - pb(d),
				f = 1 << e;
			c[e] = -1;
			d &= ~f
		}
	}

	function $e(c) {
		if (0 !== (U & 48)) throw Error(n(327));
		qf();
		if (c === V && 0 !== (c.expiredLanes & X)) {
			var d = X,
				e = hf(c, d);
			0 !== (xe & ze) && (d = jb(c, d), e = hf(c, d))
		} else d = jb(c, 0), e = hf(c, d);
		0 !== c.tag && 2 === e && (U |= 64, c.hydrate && (c.hydrate = !1), d = kb(c), 0 !== d && (e = hf(c, d)));
		if (1 === e) throw e = we, cf(c, 0), Ze(c, d), aa(c, F()), e;
		c.finishedWork = c.current.alternate;
		c.finishedLanes = d;
		nf(c);
		aa(c, F());
		return null
	}

	function af(c, d) {
		z(ve, ue), ue |= d, xe |= d
	}

	function bf() {
		ue = ve.current, y(ve)
	}

	function cf(c, d) {
		c.finishedWork = null;
		c.finishedLanes = 0;
		var e = c.timeoutHandle; - 1 !== e && (c.timeoutHandle = -1, Pa(e));
		if (null !== W)
			for (e = W["return"]; null !== e;) {
				var f = e;
				switch (f.tag) {
					case 1:
						f = f.type.childContextTypes;
						null !== f && void 0 !== f && $a();
						break;
					case 3:
						zc();
						y(B);
						y(A);
						Ec();
						break;
					case 5:
						Bc(f);
						break;
					case 4:
						zc();
						break;
					case 13:
						y(K);
						break;
					case 19:
						y(K);
						break;
					case 10:
						Xb(f);
						break;
					case 22:
					case 23:
						bf()
				}
				e = e["return"]
			}
		V = c;
		W = Jf(c.current, null);
		X = ue = xe = d;
		Y = 0;
		we = null;
		Ae = ze = ye = 0;
		Pe = null
	}

	function df(c, d) {
		do {
			var e = W;
			try {
				Wb();
				Fc.current = hd;
				if (Hc) {
					for (var f = M.memoizedState; null !== f;) {
						var g = f.queue;
						null !== g && (g.pending = null);
						f = f.next
					}
					Hc = !1
				}
				Gc = 0;
				O = N = M = null;
				Ic = !1;
				te.current = null;
				if (null === e || null === e["return"]) {
					Y = 1;
					we = d;
					W = null;
					break
				}
				a: {
					g = c;f = e["return"];
					var h = e,
						i = d;d = X;h.flags |= 8192;h.firstEffect = h.lastEffect = null;
					if (null !== i && "object" === typeof i && "function" === typeof i.then) {
						var j = i;
						if (0 === (h.mode & 2)) {
							var k = h.alternate;
							k ? (h.updateQueue = k.updateQueue, h.memoizedState = k.memoizedState, h.lanes = k.lanes) : (h.updateQueue = null, h.memoizedState = null)
						}
						k = 0 !== (K.current & 1);
						var l = f;
						do {
							var m;
							if (m = 13 === l.tag) {
								var n = l.memoizedState;
								if (null !== n) m = null !== n.dehydrated ? !0 : !1;
								else {
									n = l.memoizedProps;
									m = void 0 === n.fallback ? !1 : !0 !== n.unstable_avoidThisFallback ? !0 : k ? !1 : !0
								}
							}
							if (m) {
								n = l.updateQueue;
								if (null === n) {
									m = new Set();
									m.add(j);
									l.updateQueue = m
								} else n.add(j);
								if (0 === (l.mode & 2) && l !== f) {
									l.flags |= 128;
									h.flags |= 65536;
									h.flags &= -10053;
									if (1 === h.tag)
										if (null === h.alternate) h.tag = 17;
										else {
											m = bc(-1, 1);
											m.tag = 2;
											cc(h, m)
										} h.lanes |= 1;
									break a
								}
								i = void 0;
								h = d;
								n = g.pingCache;
								null === n ? (n = g.pingCache = new Xd(), i = new Set(), n.set(j, i)) : (i = n.get(j), void 0 === i && (i = new Set(), n.set(j, i)));
								if (!i.has(h)) {
									i.add(h);
									m = wf.bind(null, g, j, h);
									j.then(m, m)
								}
								l.flags |= 16384;
								l.lanes = d;
								break a
							}
							l = l["return"]
						} while (null !== l);
						i = Error((na(h.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")
					}
					5 !== Y && (Y = 2);i = Vd(i, h);l = f;do {
						switch (l.tag) {
							case 3:
								g = i;
								l.flags |= 16384;
								d &= -d;
								l.lanes |= d;
								n = Yd(l, g, d);
								dc(l, n);
								break a;
							case 1:
								g = i;
								m = l.type;
								k = l.stateNode;
								if (0 === (l.flags & 128) && ("function" === typeof m.getDerivedStateFromError || null !== k && "function" === typeof k.componentDidCatch && (null === Ge || !Ge.has(k)))) {
									l.flags |= 16384;
									d &= -d;
									l.lanes |= d;
									j = Zd(l, g, d);
									dc(l, j);
									break a
								}
						}
						l = l["return"]
					} while (null !== l)
				}
				mf(e)
			} catch (c) {
				d = c;
				W === e && null !== e && (W = e = e["return"]);
				continue
			}
			break
		} while (1)
	}

	function ef() {
		var c = se.current;
		se.current = hd;
		return null === c ? hd : c
	}

	function ff(c) {
		var e = d("scheduler/tracing").__interactionsRef.current;
		d("scheduler/tracing").__interactionsRef.current = c.memoizedInteractions;
		return e
	}

	function gf() {
		(0 === Y || 3 === Y) && (Y = 4), null === V || 0 === (ye & 134217727) && 0 === (ze & 134217727) || Ze(V, X)
	}

	function hf(c, e) {
		var f = U;
		U |= 16;
		var g = ef();
		(V !== c || X !== e) && (cf(c, e), Ef(c, e));
		e = ff(c);
		do try {
			jf();
			break
		} catch (d) {
			df(c, d)
		}
		while (1);
		Wb();
		d("scheduler/tracing").__interactionsRef.current = e;
		U = f;
		se.current = g;
		if (null !== W) throw Error(n(261));
		V = null;
		X = 0;
		return Y
	}

	function jf() {
		for (; null !== W;) lf(W)
	}

	function kf() {
		for (; null !== W && !vb();) lf(W)
	}

	function lf(c) {
		var d = Af(c.alternate, c, ue);
		c.memoizedProps = c.pendingProps;
		null === d ? mf(c) : W = d;
		te.current = null
	}

	function mf(c) {
		var d = c;
		do {
			var e = d.alternate;
			c = d["return"];
			if (0 === (d.flags & 8192)) {
				e = Td(e, d, ue);
				if (null !== e) {
					W = e;
					return
				}
				null !== c && 0 === (c.flags & 8192) && (null === c.firstEffect && (c.firstEffect = d.firstEffect), null !== d.lastEffect && (null !== c.lastEffect && (c.lastEffect.nextEffect = d.firstEffect), c.lastEffect = d.lastEffect), 1 < (d.flags & -131073) && (null !== c.lastEffect ? c.lastEffect.nextEffect = d : c.firstEffect = d, c.lastEffect = d))
			} else {
				e = Ud(d);
				if (null !== e) {
					e.flags &= 8191;
					W = e;
					return
				}
				null !== c && (c.firstEffect = c.lastEffect = null, c.flags |= 8192, c.subtreeFlags = 0, c.deletions = null)
			}
			d = d.sibling;
			if (null !== d) {
				W = d;
				return
			}
			W = d = c
		} while (null !== d);
		0 === Y && (Y = 5)
	}

	function nf(c) {
		var d = Ib();
		Kb(99, of .bind(null, c, d));
		return null
	}

	function of (c, e) {
		do qf(); while (null !== Ie);
		if (0 !== (U & 48)) throw Error(n(327));
		var f = c.finishedWork,
			g = c.finishedLanes;
		if (null === f) return null;
		c.finishedWork = null;
		c.finishedLanes = 0;
		if (f === c.current) throw Error(n(177));
		c.callbackNode = null;
		var h = f.lanes | f.childLanes,
			i = h,
			j = c.pendingLanes & ~i;
		c.pendingLanes = i;
		c.suspendedLanes = 0;
		c.pingedLanes = 0;
		c.expiredLanes &= i;
		c.mutableReadLanes &= i;
		c.entangledLanes &= i;
		i = c.entanglements;
		for (var k = c.eventTimes, l = c.expirationTimes; 0 < j;) {
			var m = 31 - pb(j),
				o = 1 << m;
			i[m] = 0;
			k[m] = -1;
			l[m] = -1;
			j &= ~o
		}
		null !== Me && 0 === (h & 24) && Me.has(c) && Me["delete"](c);
		c === V && (W = V = null, X = 0);
		1 < f.flags ? null !== f.lastEffect ? (f.lastEffect.nextEffect = f, h = f.firstEffect) : h = f : h = f.firstEffect;
		if (null !== h) {
			i = U;
			U |= 32;
			k = ff(c);
			Te = te.current = null;
			Ue = !1;
			Z = h;
			do try {
				pf()
			} catch (c) {
				if (null === Z) throw Error(n(330));
				vf(Z, c);
				Z = Z.nextEffect
			}
			while (null !== Z);
			Te = null;
			Z = h;
			do try {
				for (l = c; null !== Z;) {
					o = Z.flags;
					if (o & 256) {
						var p = Z.alternate;
						if (null !== p) {
							p = p.ref;
							null !== p && ("function" === typeof p ? p(null) : p.current = null)
						}
						21 === Z.tag && ge(Z)
					}
					switch (o & 2062) {
						case 2:
							ke(Z);
							Z.flags &= -3;
							break;
						case 6:
							ke(Z);
							Z.flags &= -3;
							oe(Z.alternate, Z);
							break;
						case 2048:
							Z.flags &= -2049;
							break;
						case 2052:
							Z.flags &= -2049;
							oe(Z.alternate, Z);
							break;
						case 4:
							oe(Z.alternate, Z);
							break;
						case 8:
							p = Z.deletions;
							if (null !== p)
								for (j = 0; j < p.length; j++) {
									var q = p[j];
									q.flags &= -9;
									q.deletions = null;
									m = q;
									ne(l, m);
									q = m.alternate;
									ie(m);
									null !== q && ie(q)
								}
					}
					Z = Z.nextEffect
				}
			} catch (c) {
				if (null === Z) throw Error(n(330));
				vf(Z, c);
				Z = Z.nextEffect
			}
			while (null !== Z);
			c.current = f;
			Z = h;
			do try {
				for (o = c; null !== Z;) {
					q = Z.flags;
					q & 68 && ee(o, Z.alternate, Z);
					q & 256 && 21 !== Z.tag && ge(Z);
					Z = Z.nextEffect
				}
			} catch (c) {
				if (null === Z) throw Error(n(330));
				vf(Z, c);
				Z = Z.nextEffect
			}
			while (null !== Z);
			Z = null;
			Eb();
			d("scheduler/tracing").__interactionsRef.current = k;
			U = i
		} else c.current = f;
		if (q = He) He = !1, Ie = c, Ke = g, Je = e;
		else
			for (Z = h; null !== Z;) e = Z.nextEffect, Z.nextEffect = null, Z.flags & 8 && (o = Z, o.sibling = null, o.stateNode = null), Z = e;
		h = c.pendingLanes;
		if (0 !== h) {
			if (null !== Pe)
				for (e = Pe, Pe = null, o = 0; o < e.length; o++) Cf(c, e[o], c.memoizedInteractions);
			Df(c, h)
		} else Ge = null;
		q || Ff(c, g);
		0 !== (h & 1) ? c === Oe ? Ne++ : (Ne = 0, Oe = c) : Ne = 0;
		f = f.stateNode;
		if (fb && "function" === typeof fb.onCommitFiberRoot) try {
			fb.onCommitFiberRoot(eb, f, void 0, 128 === (f.current.flags & 128))
		} catch (c) {}
		aa(c, F());
		if (Ee) throw Ee = !1, c = Fe, Fe = null, c;
		if (0 !== (U & 8)) return null;
		Mb();
		return null
	}

	function pf() {
		for (; null !== Z;) {
			var c = Z.alternate;
			Ue || null === Te || (0 !== (Z.flags & 8) ? ya(Z, Te) && (Ue = !0) : 13 === Z.tag && qe(c, Z) && ya(Z, Te) && (Ue = !0));
			var d = Z.flags;
			0 !== (d & 512) && ce(c, Z);
			0 === (d & 1024) || He || (He = !0, Lb(97, function() {
				qf();
				return null
			}));
			Z = Z.nextEffect
		}
	}

	function qf() {
		if (90 !== Je) {
			var c = 97 < Je ? 97 : Je;
			Je = 90;
			pa && hb(c);
			return Kb(c, tf)
		}
		return !1
	}

	function rf() {
		He || (He = !0, Lb(97, function() {
			qf();
			return null
		}))
	}

	function sf(c, d) {
		Le.push(d, c), He || (He = !0, Lb(97, function() {
			qf();
			return null
		}))
	}

	function tf() {
		if (null === Ie) return !1;
		var c = Ie,
			e = Ke;
		Ie = null;
		Ke = 0;
		if (0 !== (U & 48)) throw Error(n(331));
		var f = U;
		U |= 32;
		var g = ff(c),
			h = Le;
		Le = [];
		for (var i = 0; i < h.length; i += 2) {
			var j = h[i],
				k = h[i + 1],
				l = j.destroy;
			j.destroy = void 0;
			if ("function" === typeof l) try {
				l()
			} catch (c) {
				if (null === k) throw Error(n(330));
				vf(k, c)
			}
		}
		for (ae = h = c.current; null !== ae;)
			if (i = ae, j = i.child, 0 !== (i.subtreeFlags & 1040) && null !== j) j["return"] = i, ae = j;
			else a: for (i = h; null !== ae;) {
				j = ae;
				if (0 !== (j.flags & 1024)) try {
					switch (j.tag) {
						case 0:
						case 11:
						case 15:
							de(5, j)
					}
				} catch (c) {
					vf(j, c)
				}
				if (j === i) {
					ae = null;
					break a
				}
				k = j.sibling;
				if (null !== k) {
					k["return"] = j["return"];
					ae = k;
					break a
				}
				ae = j["return"]
			}
		d("scheduler/tracing").__interactionsRef.current = g;
		Ff(c, e);
		U = f;
		Mb();
		return !0
	}

	function uf(c, d, e) {
		d = Vd(e, d), d = Yd(c, d, 1), cc(c, d), d = $(), c = Xe(c, 1), null !== c && (ob(c, 1, d), aa(c, d), Df(c, 1))
	}

	function vf(c, d) {
		if (3 === c.tag) uf(c, c, d);
		else
			for (var e = c["return"]; null !== e;) {
				if (3 === e.tag) {
					uf(e, c, d);
					break
				} else if (1 === e.tag) {
					var f = e.stateNode;
					if ("function" === typeof e.type.getDerivedStateFromError || "function" === typeof f.componentDidCatch && (null === Ge || !Ge.has(f))) {
						c = Vd(d, c);
						c = Zd(e, c, 1);
						cc(e, c);
						c = $();
						e = Xe(e, 1);
						null !== e && (ob(e, 1, c), aa(e, c), Df(e, 1));
						break
					}
				}
				e = e["return"]
			}
	}

	function wf(c, d, e) {
		var f = c.pingCache;
		null !== f && f["delete"](d);
		d = $();
		c.pingedLanes |= c.suspendedLanes & e;
		V === c && (X & e) === e && (4 === Y || 3 === Y && (X & 62914560) === X && 500 > F() - Ce ? cf(c, 0) : Ae |= e);
		aa(c, d);
		Df(c, e)
	}

	function xf(c, d) {
		0 === d && (d = c.mode, 0 === (d & 2) ? d = 1 : 0 === (d & 4) ? d = 99 === Ib() ? 1 : 2 : (0 === Re && (Re = xe), d = mb(62914560 & ~Re), 0 === d && (d = 4194304)));
		var e = $();
		c = Xe(c, d);
		null !== c && (ob(c, d, e), aa(c, e), Df(c, d))
	}

	function yf(c) {
		var d = c.memoizedState,
			e = 0;
		null !== d && (e = d.retryLane);
		xf(c, e)
	}

	function zf(c, d) {
		var e = 0;
		switch (c.tag) {
			case 13:
				var f = c.stateNode,
					g = c.memoizedState;
				null !== g && (e = g.retryLane);
				break;
			case 19:
				f = c.stateNode;
				break;
			default:
				throw Error(n(314))
		}
		null !== f && f["delete"](d);
		xf(c, e)
	}
	var Af;
	Af = function(e, d, c) {
		var f = d.lanes;
		if (null !== e)
			if (e.memoizedProps !== d.pendingProps || B.current) R = !0;
			else {
				if (0 === (c & f)) {
					R = !1;
					switch (d.tag) {
						case 3:
							ud(d);
							break;
						case 5:
							Ac(d);
							break;
						case 1:
							C(d.type) && cb(d);
							break;
						case 4:
							yc(d, d.stateNode.containerInfo);
							break;
						case 10:
							f = d.memoizedProps.value;
							var g = d.type._context;
							z(Sb, g._currentValue2);
							g._currentValue2 = f;
							break;
						case 13:
							f = d.memoizedState;
							if (null !== f) {
								if (null !== f.dehydrated) return z(K, K.current & 1), d.flags |= 128, null;
								if (0 !== (c & d.child.childLanes)) return wd(e, d, c);
								z(K, K.current & 1);
								d = Fd(e, d, c);
								return null !== d ? d.sibling : null
							}
							z(K, K.current & 1);
							break;
						case 19:
							f = 0 !== (c & d.childLanes);
							if (0 !== (e.flags & 128)) {
								if (f) return Ed(e, d, c);
								d.flags |= 128
							}
							g = d.memoizedState;
							null !== g && (g.rendering = null, g.tail = null, g.lastEffect = null);
							z(K, K.current);
							if (f) break;
							else return null;
						case 22:
						case 23:
							return d.lanes = 0, pd(e, d, c)
					}
					return Fd(e, d, c)
				}
				R = 0 !== (e.flags & 65536) ? !0 : !1
			}
		else R = !1;
		d.lanes = 0;
		switch (d.tag) {
			case 2:
				return f = d.type, null !== e && (e.alternate = null, d.alternate = null, d.flags |= 2), e = d.pendingProps, g = Za(d, A.current), Zb(d, c), e = Kc(null, d, f, e, g, c), d.flags |= 1, d.tag = 0, S(null, d, e, c), d = d.child, d;
			case 16:
				g = d.elementType;
				a: {
					null !== e && (e.alternate = null, d.alternate = null, d.flags |= 2);e = d.pendingProps;
					var h = g._init;g = h(g._payload);d.type = g;h = d.tag = If(g);e = H(g, e);
					switch (h) {
						case 0:
							d = rd(null, d, g, e, c);
							break a;
						case 1:
							d = sd(null, d, g, e, c);
							break a;
						case 11:
							d = md(null, d, g, e, c);
							break a;
						case 14:
							d = nd(null, d, g, H(g.type, e), f, c);
							break a
					}
					throw Error(n(306, g, ""))
				}
				return d;
			case 0:
				return f = d.type, g = d.pendingProps, g = d.elementType === f ? g : H(f, g), rd(e, d, f, g, c);
			case 1:
				return f = d.type, g = d.pendingProps, g = d.elementType === f ? g : H(f, g), sd(e, d, f, g, c);
			case 3:
				ud(d);
				f = d.updateQueue;
				if (null === e || null === f) throw Error(n(282));
				f = d.pendingProps;
				g = d.memoizedState;
				g = null !== g ? g.element : null;
				ac(e, d);
				ec(d, f, null, c);
				f = d.memoizedState.element;
				f === g ? d = Fd(e, d, c) : (S(e, d, f, c), d = d.child);
				return d;
			case 5:
				Ac(d);
				f = d.type;
				g = d.pendingProps;
				h = null !== e ? e.memoizedProps : null;
				var i = g.children;
				Qa(f, g) ? i = null : null !== h && Qa(f, h) && (d.flags |= 32);
				qd(e, d);
				S(e, d, i, c);
				return d.child;
			case 6:
				return null;
			case 13:
				return wd(e, d, c);
			case 4:
				return yc(d, d.stateNode.containerInfo), f = d.pendingProps, null === e ? d.child = sc(d, null, f, c) : S(e, d, f, c), d.child;
			case 11:
				return f = d.type, g = d.pendingProps, g = d.elementType === f ? g : H(f, g), md(e, d, f, g, c);
			case 7:
				return S(e, d, d.pendingProps, c), d.child;
			case 8:
				return S(e, d, d.pendingProps.children, c), d.child;
			case 12:
				return S(e, d, d.pendingProps.children, c), d.child;
			case 10:
				a: {
					f = d.type._context;g = d.pendingProps;i = d.memoizedProps;h = g.value;
					var j = d.type._context;z(Sb, j._currentValue2);j._currentValue2 = h;
					if (null !== i)
						if (j = i.value, h = G(j, h) ? 0 : ("function" === typeof f._calculateChangedBits ? f._calculateChangedBits(j, h) : 1073741823) | 0, 0 === h) {
							if (i.children === g.children && !B.current) {
								d = Fd(e, d, c);
								break a
							}
						} else
							for (i = d.child, null !== i && (i["return"] = d); null !== i;) {
								var k = i.dependencies;
								if (null !== k) {
									j = i.child;
									for (var l = k.firstContext; null !== l;) {
										if (l.context === f && 0 !== (l.observedBits & h)) {
											1 === i.tag && (l = bc(-1, c & -c), l.tag = 2, cc(i, l));
											i.lanes |= c;
											l = i.alternate;
											null !== l && (l.lanes |= c);
											Yb(i["return"], c);
											k.lanes |= c;
											break
										}
										l = l.next
									}
								} else if (10 === i.tag) j = i.type === d.type ? null : i.child;
								else if (18 === i.tag) {
									j = i["return"];
									if (null === j) throw Error(n(341));
									j.lanes |= c;
									k = j.alternate;
									null !== k && (k.lanes |= c);
									Yb(j, c);
									j = i.sibling
								} else j = i.child;
								if (null !== j) j["return"] = i;
								else
									for (j = i; null !== j;) {
										if (j === d) {
											j = null;
											break
										}
										i = j.sibling;
										if (null !== i) {
											i["return"] = j["return"];
											j = i;
											break
										}
										j = j["return"]
									}
								i = j
							}
					S(e, d, g.children, c);d = d.child
				}
				return d;
			case 9:
				return g = d.type, h = d.pendingProps, f = h.children, Zb(d, c), g = I(g, h.unstable_observedBits), f = f(g), d.flags |= 1, S(e, d, f, c), d.child;
			case 14:
				return g = d.type, h = H(g, d.pendingProps), h = H(g.type, h), nd(e, d, g, h, f, c);
			case 15:
				return od(e, d, d.type, d.pendingProps, f, c);
			case 17:
				return f = d.type, g = d.pendingProps, g = d.elementType === f ? g : H(f, g), null !== e && (e.alternate = null, d.alternate = null, d.flags |= 2), d.tag = 1, C(f) ? (e = !0, cb(d)) : e = !1, Zb(d, c), kc(d, f, g), mc(d, f, g, c), td(null, d, f, !0, e, c);
			case 19:
				return Ed(e, d, c);
			case 21:
				return S(e, d, d.pendingProps.children, c), d.child;
			case 22:
				return pd(e, d, c);
			case 23:
				return pd(e, d, c)
		}
		throw Error(n(156, d.tag))
	};

	function Bf(c) {
		null === Pe ? Pe = [c] : Pe.push(c)
	}

	function Cf(c, e, f) {
		if (0 < f.size) {
			var g = c.pendingInteractionMap,
				h = g.get(e);
			null != h ? f.forEach(function(c) {
				h.has(c) || c.__count++, h.add(c)
			}) : (g.set(e, new Set(f)), f.forEach(function(c) {
				c.__count++
			}));
			g = d("scheduler/tracing").__subscriberRef.current;
			null !== g && g.onWorkScheduled(f, 1e3 * e + c.interactionThreadID)
		}
	}

	function Df(c, e) {
		Cf(c, e, d("scheduler/tracing").__interactionsRef.current)
	}

	function Ef(c, e) {
		var f = new Set();
		c.pendingInteractionMap.forEach(function(c, d) {
			0 !== (e & d) && c.forEach(function(c) {
				return f.add(c)
			})
		});
		c.memoizedInteractions = f;
		if (0 < f.size) {
			var g = d("scheduler/tracing").__subscriberRef.current;
			if (null !== g) {
				c = 1e3 * e + c.interactionThreadID;
				try {
					g.onWorkStarted(f, c)
				} catch (c) {
					Lb(99, function() {
						throw c
					})
				}
			}
		}
	}

	function Ff(c, e) {
		var f = c.pendingLanes;
		try {
			var g = d("scheduler/tracing").__subscriberRef.current;
			null !== g && 0 < c.memoizedInteractions.size && g.onWorkStopped(c.memoizedInteractions, 1e3 * e + c.interactionThreadID)
		} catch (c) {
			Lb(99, function() {
				throw c
			})
		} finally {
			var h = c.pendingInteractionMap;
			h.forEach(function(c, d) {
				0 === (f & d) && (h["delete"](d), c.forEach(function(c) {
					c.__count--;
					if (null !== g && 0 === c.__count) try {
						g.onInteractionScheduledWorkCompleted(c)
					} catch (c) {
						Lb(99, function() {
							throw c
						})
					}
				}))
			})
		}
	}

	function Gf(c, d, e, f) {
		this.tag = c, this.key = e, this.sibling = this.child = this["return"] = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = d, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = f, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.subtreeFlags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
	}

	function ba(c, d, e, f) {
		return new Gf(c, d, e, f)
	}

	function Hf(c) {
		c = c.prototype;
		return !(!c || !c.isReactComponent)
	}

	function If(c) {
		if ("function" === typeof c) return Hf(c) ? 1 : 0;
		if (void 0 !== c && null !== c) {
			c = c.$$typeof;
			if (c === da) return 11;
			if (c === ga) return 14
		}
		return 2
	}

	function Jf(d, e) {
		var c = d.alternate;
		null === c ? (c = ba(d.tag, e, d.key, d.mode), c.elementType = d.elementType, c.type = d.type, c.stateNode = d.stateNode, c.alternate = d, d.alternate = c) : (c.pendingProps = e, c.type = d.type, c.flags = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null, c.subtreeFlags = 0, c.deletions = null);
		c.flags = d.flags & 131072;
		c.childLanes = d.childLanes;
		c.lanes = d.lanes;
		c.child = d.child;
		c.memoizedProps = d.memoizedProps;
		c.memoizedState = d.memoizedState;
		c.updateQueue = d.updateQueue;
		e = d.dependencies;
		c.dependencies = null === e ? null : {
			lanes: e.lanes,
			firstContext: e.firstContext
		};
		c.sibling = d.sibling;
		c.index = d.index;
		c.ref = d.ref;
		return c
	}

	function Kf(c, d, e, f, g, h) {
		var i = 2;
		f = c;
		if ("function" === typeof c) Hf(c) && (i = 1);
		else if ("string" === typeof c) i = 5;
		else a: switch (c) {
			case r:
				return Lf(e.children, g, h, d);
			case ia:
				i = 8;
				g |= 16;
				break;
			case s:
				i = 8;
				g |= 1;
				break;
			case t:
				return c = ba(12, e, d, g | 8), c.elementType = t, c.type = t, c.lanes = h, c;
			case ea:
				return c = ba(13, e, d, g), c.type = ea, c.elementType = ea, c.lanes = h, c;
			case fa:
				return c = ba(19, e, d, g), c.elementType = fa, c.lanes = h, c;
			case ja:
				return Mf(e, g, h, d);
			case ka:
				return c = ba(23, e, d, g), c.elementType = ka, c.lanes = h, c;
			case ha:
				return d = ba(21, e, d, g), d.type = c, d.elementType = c, d.lanes = h, d;
			default:
				if ("object" === typeof c && null !== c) switch (c.$$typeof) {
					case ca:
						i = 10;
						break a;
					case u:
						i = 9;
						break a;
					case da:
						i = 11;
						break a;
					case ga:
						i = 14;
						break a;
					case v:
						i = 16;
						f = null;
						break a
				}
				throw Error(n(130, null == c ? c : typeof c, ""))
		}
		d = ba(i, e, d, g);
		d.elementType = c;
		d.type = f;
		d.lanes = h;
		return d
	}

	function Lf(c, d, e, f) {
		c = ba(7, c, f, d);
		c.lanes = e;
		return c
	}

	function Mf(c, d, e, f) {
		c = ba(22, c, f, d);
		c.elementType = ja;
		c.lanes = e;
		return c
	}

	function Nf(c, d, e) {
		c = ba(6, c, null, d);
		c.lanes = e;
		return c
	}

	function Of(c, d, e) {
		d = ba(4, null !== c.children ? c.children : [], c.key, d);
		d.lanes = e;
		d.stateNode = {
			containerInfo: c.containerInfo,
			pendingChildren: null,
			implementation: c.implementation
		};
		return d
	}

	function Pf(c, e, f) {
		this.tag = e, this.containerInfo = c, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = f, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = nb(0), this.expirationTimes = nb(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = nb(0), this.interactionThreadID = d("scheduler/tracing").unstable_getThreadID(), this.memoizedInteractions = new Set(), this.pendingInteractionMap = new Map(), this.hydrationCallbacks = null
	}

	function Qf(c, d, e, f) {
		var g = d.current,
			h = $(),
			i = Ve(g);
		a: if (e) {
			e = e._reactInternals;
			b: {
				if (ta(e) !== e || 1 !== e.tag) throw Error(n(170));
				var j = e;do {
					switch (j.tag) {
						case 3:
							j = j.stateNode.context;
							break b;
						case 1:
							if (C(j.type)) {
								j = j.stateNode.__reactInternalMemoizedMergedChildContext;
								break b
							}
					}
					j = j["return"]
				} while (null !== j);
				throw Error(n(171))
			}
			if (1 === e.tag) {
				var k = e.type;
				if (C(k)) {
					e = bb(e, k, j);
					break a
				}
			}
			e = j
		} else e = Xa;
		null === d.context ? d.context = e : d.pendingContext = e;
		d = bc(h, i);
		d.payload = {
			element: c
		};
		f = void 0 === f ? null : f;
		null !== f && (d.callback = f);
		cc(g, d);
		We(g, i, h);
		return i
	}

	function Rf() {
		return null
	}
	d("art/modes/current").setCurrent(d("art/modes/fast-noSideEffects"));
	var Sf = Array.prototype.slice;
	e = function() {
		function c(c, d, e, f, g) {
			this._args = Sf.call(arguments)
		}
		c.prototype.applyFill = function(c) {
			c.fillLinear.apply(c, this._args)
		};
		return c
	}();
	w = function() {
		function c(c, d, e, f, g, h, i) {
			this._args = Sf.call(arguments)
		}
		c.prototype.applyFill = function(c) {
			c.fillRadial.apply(c, this._args)
		};
		return c
	}();
	f = function() {
		function c(c, d, e, f, g) {
			this._args = Sf.call(arguments)
		}
		c.prototype.applyFill = function(c) {
			c.fillImage.apply(c, this._args)
		};
		return c
	}();
	rc = function(c) {
		function e() {
			return c.apply(this, arguments) || this
		}
		l(e, c);
		var f = e.prototype;
		f.componentDidMount = function() {
			var c = this.props;
			this._surface = d("art/modes/current").Surface(+c.width, +c.height, this._tagRef);
			c = new Pf(this._surface, 0, !1);
			c.hydrationCallbacks = null;
			var e = ba(3, null, null, 0);
			c.current = e;
			e.stateNode = c;
			$b(e);
			this._mountNode = c;
			Qf(this.props.children, this._mountNode, this)
		};
		f.componentDidUpdate = function(c) {
			var d = this.props;
			d.height === c.height && d.width === c.width || this._surface.resize(+d.width, +d.height);
			Qf(this.props.children, this._mountNode, this);
			this._surface.render && this._surface.render()
		};
		f.componentWillUnmount = function() {
			Qf(null, this._mountNode, this)
		};
		f.render = function() {
			var c = this,
				e = this.props;
			return j.createElement(d("art/modes/current").Surface.tagName, {
				ref: function(d) {
					return c._tagRef = d
				},
				accessKey: e.accessKey,
				className: e.className,
				draggable: e.draggable,
				role: e.role,
				style: e.style,
				tabIndex: e.tabIndex,
				title: e.title
			})
		};
		return e
	}(j.Component);
	P = function(c) {
		function d(d) {
			var e = c.call(this, d) || this;
			["height", "width", "x", "y"].forEach(function(c) {
				Object.defineProperty(m(e), c, {
					get: function() {
						return this._text ? this._text[c] : void 0
					}
				})
			});
			return e
		}
		l(d, c);
		d.prototype.render = function() {
			var c = this;
			return j.createElement(za.TEXT, k({}, this.props, {
				ref: function(d) {
					return c._text = d
				}
			}), Ba(this.props.children))
		};
		return d
	}(j.Component);
	cd = {
		findFiberByHostInstance: function() {
			return null
		},
		bundleType: 0,
		version: "17.0.2-d37d7a4bb",
		rendererPackageName: "react-art"
	};
	ad = {
		bundleType: cd.bundleType,
		version: cd.version,
		rendererPackageName: cd.rendererPackageName,
		rendererConfig: cd.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: o.ReactCurrentDispatcher,
		findHostInstanceByFiber: function(c) {
			c = va(c);
			c = null !== c ? wa(c) : null;
			return null === c ? null : c.stateNode
		},
		findFiberByHostInstance: cd.findFiberByHostInstance || Rf,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null
	};
	if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
		Zc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!Zc.isDisabled && Zc.supportsFiber) try {
			eb = Zc.inject(ad), fb = Zc
		} catch (c) {}
	}
	dd = d("art/modes/current").Path;
	h.Transform = d("art/core/transform");
	h.ClippingRectangle = za.CLIPPING_RECTANGLE;
	h.Group = za.GROUP;
	h.LinearGradient = e;
	h.Path = dd;
	h.Pattern = f;
	h.RadialGradient = w;
	h.Shape = za.SHAPE;
	h.Surface = rc;
	h.Text = P
}), null);
__d("ReactART", ["ReactART-dev.classic", "ReactART-prod.classic"], (function(a, b, c, d, e, f) {
	a = b("ReactART-prod.classic");
	e.exports = a
}), null);
__d("ImagePattern.art", ["invariant", "ReactART", "Sprite.art", "coerceImageishSprited", "coerceImageishURL"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("ReactART").Pattern;
	a = function() {
		function a(a, c, d) {
			this.$8 = a;
			this.$2 = this.$4 = c || 0;
			this.$1 = this.$3 = d || 0;
			this.$5 = 0;
			this.$6 = 0;
			if (typeof a === "string") {
				this.$9 = a;
				return
			}
			c = b("coerceImageishSprited")(a);
			d = b("coerceImageishURL")(a);
			if (d != null) {
				this.$9 = d.uri;
				!this.$2 && !this.$1 && (this.$4 = this.$2 = d.width, this.$3 = this.$1 = d.height);
				return
			}
			c != null || g(0, 31705);
			c.type === "css" || g(0, 31651);
			a = b("Sprite.art").get(c.className);
			this.$9 = a.uri;
			this.$2 = a.boxSize[0] || 0;
			this.$1 = a.boxSize[1] || 0;
			this.$4 = a.imageSize[0] || 0;
			this.$3 = a.imageSize[1] || 0;
			this.$5 += a.offset[0];
			this.$6 += a.offset[1]
		}
		var c = a.prototype;
		c.applyFill = function(a) {
			this.$7 || (this.$7 = new h(this.$9, this.$4, this.$3, this.$5, this.$6)), this.$7.applyFill(a)
		};
		c.adjustOffsetX = function(a) {
			this.$5 += a
		};
		c.adjustOffsetY = function(a) {
			this.$6 += a
		};
		c.getBoxHeight = function() {
			return this.$1
		};
		c.getBoxWidth = function() {
			return this.$2
		};
		return a
	}();
	e.exports = a
}), null);
















__d("InsightsFormatterUtils", [], (function(a, b, c, d, e, f) {
	"use strict";
	f.unsupportedScale = a;

	function a(a, b) {
		return new Error(a.constructor.name + " is not a supported scale for " + b + "!")
	}
}), null);
__d("InsightsFormatters", ["fbt", "AdsCurrencyFormatter", "intlNumUtils", "intlSummarizeNumber"], (function(a, b, c, d, e, f, g) {
	"use strict";
	f.defaultFormatter = a;
	f.percentageFormatter = c;
	f.currencyFormatter = d;
	f.insightsNullableFormatter = e;
	f.insightsNullableFBTFormatter = h;
	f.largeCurrencyFormatter = i;
	f.summarizeBigNumber = j;

	function a(a) {
		return a != null ? String(a) : ""
	}

	function c(a) {
		a = a * 100;
		a = Math.abs(a) > 100 ? Math.round(a) : parseFloat(a.toPrecision(3));
		return a > 0 && a < .01 ? String(g._("> 0\u0025")) : String(g._("{percentage}\u0025", [g._param("percentage", a)]))
	}

	function d(a) {
		return b("AdsCurrencyFormatter").formatCurrencyWithOptionalDecimals("USD", a, !0)
	}

	function e(a) {
		return function(b) {
			return b == null ? "--" : a(b)
		}
	}

	function h(a) {
		return function(b) {
			return b == null ? "--" : a(b)
		}
	}

	function i(a) {
		return b("AdsCurrencyFormatter").formatCurrencyWithLargerNumber("USD", a)
	}

	function j(a, c) {
		return a > c - 1 ? b("intlSummarizeNumber")(a) : b("intlNumUtils").formatNumberWithThousandDelimiters(a)
	}
}), null);
__d("InsightsHelperFormatterFactoriesWithProps", ["invariant", "CandelaConstants", "DateTime", "InsightsNumUtils", "intlSummarizeNumber", "nearlyEqualNumbers"], (function(a, b, c, d, e, f, g) {
	"use strict";
	f.axisMarkTimeCondensedFormatterFactory = a;
	f.axisMarkTimeDefaultFormatterFactory = c;
	f.axisSubMarkTimeCondensedFormatterFactory = d;
	f.currencyFormatterFactory = e;
	f.numberFormatterFactory = l;
	var h = b("CandelaConstants").TimeInterval,
		i = b("CandelaConstants").TIME_INTERVALS_DESC.filter(function(a) {
			return a !== h.WEEK
		}),
		j = {
			skipPatternLocalization: !0
		},
		k = function(a) {
			a = Math.log(Math.abs(a)) / Math.LN10;
			var c = Math.round(a);
			return b("nearlyEqualNumbers")(a, c) ? c : a
		};

	function a(a, c) {
		var d = i.find(function(b) {
			return b <= a
		});
		d || g(0, 1685);
		return function(a) {
			typeof a === "number" && (a = b("DateTime").create(a, c));
			switch (d) {
				case h.YEAR:
					return a.format("Y", j);
				case h.MONTH:
					return a.format("M", j);
				case h.DAY:
					return a.format("j", j);
				case h.HOUR:
					return a.format("g A", j);
				case h.MIN:
					return a.format("i", j);
				case h.SEC:
					return a.format("s", j)
			}
			throw new Error("Invalid TimeInterval: " + String(d))
		}
	}

	function c(a, c) {
		var d = i.find(function(b) {
			return b <= a
		});
		d || g(0, 1685);
		return function(e) {
			typeof e === "number" && (e = b("DateTime").create(e, c));
			switch (d) {
				case h.YEAR:
					return e.format("Y", j);
				case h.MONTH:
					return e.format("M Y", j);
				case h.DAY:
					return e.format("M j", j);
				case h.HOUR:
					return e.format("D g A", j);
				case h.MIN:
					return e.format("g:i A", j);
				case h.SEC:
					return e.format("g:i:s A", j)
			}
			throw new Error("Invalid TimeInterval: " + String(a))
		}
	}

	function d(a, c) {
		var d = i.find(function(b) {
			return b <= a
		});
		d || g(0, 1685);
		return function(a) {
			typeof a === "number" && (a = b("DateTime").create(a, c));
			switch (d) {
				case h.YEAR:
					return "";
				case h.MONTH:
					return a.format("Y", j);
				case h.DAY:
					return a.format("M", j);
				case h.HOUR:
					return a.format("D", j);
				case h.MIN:
					return a.format("g A", j);
				case h.SEC:
					return a.format("g:i A", j)
			}
			throw new Error("Invalid TimeInterval: " + String(d))
		}
	}

	function e(a) {
		return function(c) {
			return b("InsightsNumUtils").prettyShortCurrency(a, c)
		}
	}

	function l(a, c, d) {
		var e;
		c !== 0 && Math.abs(c) < 1 && (e = Math.ceil(k(1 / c)));
		return function(a) {
			var c = e,
				d = a;
			if (c === void 0 && Math.abs(d) >= 1e3) {
				var f = Math.floor(k(d));
				c = 2 - f % 3;
				d /= Math.pow(10, f - f % 3)
			}
			d = Math.round(d * Math.pow(10, c));
			while (c && !(d % 10)) d /= 10, c--;
			return b("intlSummarizeNumber")(a, c)
		}
	}
}), null);
__d("InsightsFormatterFactories", ["invariant", "CandelaCategoryScale", "CandelaConstants", "CandelaCurrencyScale", "CandelaNumberScale", "CandelaPercentageScale", "CandelaScale", "CandelaScalingStrategyNumeric", "CandelaTimeScale", "DateTime", "InsightsFormatters", "InsightsFormatterUtils", "InsightsHelperFormatterFactoriesWithProps", "intlSummarizeNumber"], (function(a, b, c, d, e, f, g) {
	"use strict";
	f.getTimeInterval = o;
	f.axisMarkFormatterFactory = a;
	f.axisSubMarkFormatterFactory = c;
	f.barAreaLabelFormatterFactory = d;
	f.barLabelFormatterFactory = e;
	f.guideMarkFormatterFactory = p;
	f.legendFormatterFactory = q;
	var h = b("CandelaConstants").Orientation,
		i = b("CandelaConstants").TimeInterval,
		j = b("CandelaScale").getExtentValue,
		k = b("CandelaConstants").TIME_INTERVALS_DESC.filter(function(a) {
			return a !== i.WEEK
		}),
		l = {
			skipPatternLocalization: !0
		},
		m = 60;

	function n(a) {
		a.strategy instanceof b("CandelaScalingStrategyNumeric") || g(0, 3548);
		a = a.strategy.props;
		var c = a.inputStepInterval,
			d = a.steps;
		a = a.input;
		a = j(a);
		var e = 0;
		c && d.size > a && (e = Math.max(Math.ceil(Math.log(1 / c) / Math.LN10), 0));
		return e
	}

	function o(a) {
		var b = a.strategy.props.inputStepInterval;
		a = k.find(function(a) {
			return a <= b
		});
		a || g(0, 3549);
		return a
	}

	function a(a, c, d) {
		if (a instanceof b("CandelaCategoryScale")) return b("InsightsFormatters").defaultFormatter;
		if (a instanceof b("CandelaCurrencyScale")) return b("InsightsHelperFormatterFactoriesWithProps").currencyFormatterFactory(a.currencyCode);
		if (a instanceof b("CandelaTimeScale")) {
			d = a.strategy.props.inputStepInterval;
			return a.props.outputStepInterval < m && c === h.HORIZONTAL ? b("InsightsHelperFormatterFactoriesWithProps").axisMarkTimeCondensedFormatterFactory(d, a.timezoneID) : b("InsightsHelperFormatterFactoriesWithProps").axisMarkTimeDefaultFormatterFactory(d, a.timezoneID)
		}
		if (a instanceof b("CandelaPercentageScale")) return b("InsightsFormatters").percentageFormatter;
		if (a instanceof b("CandelaNumberScale")) {
			c = a.strategy.props;
			d = c.inputStepInterval;
			var e = c.steps;
			c = c.input;
			c = j(c);
			return b("InsightsHelperFormatterFactoriesWithProps").numberFormatterFactory(c, d, e.size)
		}
		throw b("InsightsFormatterUtils").unsupportedScale(a, "axismark")
	}

	function c(a, c, d) {
		if (a instanceof b("CandelaTimeScale") && c === h.HORIZONTAL && a.props.outputStepInterval < m) {
			d = a.strategy.props.inputStepInterval;
			return b("InsightsHelperFormatterFactoriesWithProps").axisSubMarkTimeCondensedFormatterFactory(d, a.timezoneID)
		}
		return function() {
			return ""
		}
	}

	function d(a, c) {
		if (a instanceof b("CandelaNumberScale")) return function(a, c) {
			return b("InsightsFormatters").percentageFormatter(a)
		};
		throw b("InsightsFormatterUtils").unsupportedScale(a, "bararealabel")
	}

	function e(a, c) {
		if (a instanceof b("CandelaCurrencyScale")) return b("InsightsHelperFormatterFactoriesWithProps").currencyFormatterFactory(a.currencyCode);
		if (a instanceof b("CandelaPercentageScale")) return function(a, c) {
			return b("InsightsFormatters").percentageFormatter(a)
		};
		if (a instanceof b("CandelaNumberScale")) return function(a, b) {
			return a.toLocaleString()
		};
		throw b("InsightsFormatterUtils").unsupportedScale(a, "bar>label")
	}

	function p(a, c) {
		if (a instanceof b("CandelaTimeScale")) {
			var d = o(a);
			return function(c) {
				typeof c === "number" && (a instanceof b("CandelaTimeScale") || g(0, 1531), c = b("DateTime").create(c, a.timezoneID));
				switch (d) {
					case i.YEAR:
					case i.MONTH:
					case i.DAY:
						return c.format("M j", l);
					case i.HOUR:
					case i.MIN:
					case i.SEC:
						return c.format("g:i:s", l)
				}
				throw new Error("Invalid TimeInterval: " + String(d))
			}
		}
		throw b("InsightsFormatterUtils").unsupportedScale(a, "guidemark")
	}

	function q(a, c) {
		if (a instanceof b("CandelaCategoryScale")) return b("InsightsFormatters").defaultFormatter;
		if (a instanceof b("CandelaCurrencyScale")) return b("InsightsHelperFormatterFactoriesWithProps").currencyFormatterFactory(a.currencyCode);
		if (a instanceof b("CandelaPercentageScale")) return b("InsightsFormatters").percentageFormatter;
		if (a instanceof b("CandelaTimeScale")) {
			var d = o(a);
			return function(c) {
				typeof c === "number" && (a instanceof b("CandelaTimeScale") || g(0, 1531), c = b("DateTime").create(c, a.timezoneID));
				switch (d) {
					case i.YEAR:
					case i.MONTH:
					case i.DAY:
						return c.format("M j, Y", l);
					case i.HOUR:
					case i.MIN:
					case i.SEC:
						return c.format("g:i:s", l)
				}
				throw new Error("Invalid TimeInterval: " + String(d))
			}
		}
		if (a instanceof b("CandelaNumberScale")) {
			var e = n(a);
			return function(a) {
				!e && a % 1 && (e = 2);
				return b("intlSummarizeNumber")(a, e)
			}
		}
		throw b("InsightsFormatterUtils").unsupportedScale(a, "legend")
	}
}), null);
__d("InsightsChartWithHoverCard.react", ["CandelaConstants", "InsightsFormatterFactories", "immutable", "Locale", "React", "prop-types", "ReactDOM", "CandelaTheme", "debounce", "isEmpty", "mapObject", "shallowEqual"], (function(a, b, c, d, e, f) {
	"use strict";
	var g, h, i = b("React"),
		j = b("CandelaConstants").Alignment,
		k = b("CandelaConstants").ShapeType,
		l = b("immutable").OrderedSet,
		m = b("immutable").Set;

	function a(a, b) {
		a = a[b];
		if (a) {
			if (!m.isSet(a)) return new Error("targetShapeTypes must be Immutable.Set");
			var c = (b = {}, b[k.BAR_GROUP] = null, b[k.BAR] = null, b[k.GUIDE] = null, b[k.BAR_AREA_LABEL] = null, b);
			b = a.find(function(a) {
				return !Object.prototype.hasOwnProperty.call(c, a)
			});
			if (b) return new Error("Not supported shapeType: " + b);
			if (a.includes(k.BAR) && a.includes(k.BAR_GROUP)) return new Error("targetShapeTypes cannot include both BAR and BAR_GROUP.")
		}
		return null
	}
	c = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var b, c;
			for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
			return (b = c = a.call.apply(a, [this].concat(e)) || this, c.state = {
				data: {},
				items: typeof c.props.items === "function" ? c.props.items(null) : c.props.items,
				shown: !1,
				theme: c.props.theme,
				title: c.props.title
			}, c.$14 = function(a) {
				var b = c.props.targetShapeTypes;
				b && b.includes(a.target.shapeType) && c.$12(a);
				b = c.props.onMouseMove;
				b && b(a);
				b = c.props.chart.props.onMouseMove;
				b && b(a)
			}, c.$15 = function(a) {
				var b = c.props.targetShapeTypes;
				b && b.includes(a.target.shapeType) && c.$12(a);
				b = c.props.onMouseEnter;
				b && b(a);
				b = c.props.chart.props.onMouseEnter;
				b && b(a)
			}, c.$16 = function() {
				c.setState({
					shown: !1
				})
			}, c.$17 = function(a) {
				var b = c.props.targetShapeTypes;
				(a.target.shapeType === k.PLOT_AREA || b && b.includes(a.target.shapeType)) && c.$13();
				b = c.props.onMouseLeave;
				b && b(a);
				b = c.props.chart.props.onMouseLeave;
				b && b(a)
			}, c.$18 = function() {
				c.$2()
			}, c.$19 = function() {
				c.$13()
			}, b) || babelHelpers.assertThisInitialized(c)
		}
		var d = c.prototype;
		d.componentWillUnmount = function() {
			this.$2()
		};
		d.$3 = function(a, b) {
			var c = this.props.formatterFactory;
			return a.map(function(a) {
				if (a.key in b) {
					var d = b[a.key],
						e = d.scale;
					d = d.value;
					if (d != null) {
						e = c && c(e, a.key, b);
						d = e ? e(d) : d
					}
					a = babelHelpers["extends"]({}, a, {
						value: d
					})
				}
				return a
			})
		};
		d.$4 = function(a, b) {
			a = this.props;
			var c = a.formatterFactory,
				d = a.titleElementGetter;
			a = a.titleKey;
			if (d) return d(b);
			d = this.props.title;
			if (!a || !(a in b)) return d;
			b = b[a];
			var e = b.scale;
			b = b.value;
			if (b != null) {
				c = c && c(e, a);
				d = c ? c(b) : d
			}
			return d
		};
		d.$5 = function(a, b) {
			var c = a.target.coords;
			if (!m.isSet(c) || c.isEmpty()) return {
				closestSeriesName: null,
				posX: 0,
				posY: 0
			};
			c = a.target.coords.filter(function(a) {
				return b.contains(a.series)
			}).minBy(function(b) {
				return Math.abs(a.y - b.y)
			});
			return !c ? {
				closestSeriesName: null,
				posX: 0,
				posY: 0
			} : {
				anchorRect: {
					height: 0,
					width: 0,
					x: c.x,
					y: c.y
				},
				closestSeriesName: c.series,
				posX: c.x,
				posY: c.y
			}
		};
		d.$6 = function(a) {
			var b = a.x,
				c = a.y,
				d = a.height,
				e = a.width,
				f = 0,
				g = 0;
			switch (this.props.position) {
				case "above":
					f = b + e / 2;
					g = c;
					break;
				case "below":
					f = b + e / 2;
					g = c + d;
					break;
				case "left":
					f = b;
					g = c + d / 2;
					break;
				case "right":
					f = b + e;
					g = c + d / 2;
					break
			}
			return {
				anchorRect: {
					height: a.height,
					width: a.width,
					x: a.x,
					y: a.y
				},
				posX: f,
				posY: g
			}
		};
		d.$7 = function(a) {
			return this.$6(a.target)
		};
		d.$8 = function(a) {
			return this.$6(a.target)
		};
		d.$9 = function(a, b) {
			b = a.target;
			var c = b.alignment,
				d = b.height,
				e = b.overlap,
				f = b.seriesOrder,
				g = b.width,
				h = b.x;
			b = b.y;
			var i = Infinity,
				k = -Infinity;
			f.forEach(function(b) {
				var c = 0;
				b.forEach(function(b) {
					b = a.data[b];
					var d = b.scale;
					b = b.value;
					c += b;
					var f = d.convert(d.props.origin);
					d = d.convert(e ? b : c);
					i = Math.min(i, d, f);
					k = Math.max(k, d, f)
				})
			});
			f = 0;
			var l = 0,
				m = 0,
				n = 0;
			switch (c) {
				case j.LEFT:
				case j.RIGHT:
					f = i;
					l = k;
					m = b;
					n = b + d;
					break;
				case j.TOP:
				case j.BOTTOM:
					f = h;
					l = h + g;
					m = i;
					n = k;
					break
			}
			return this.$6({
				x: f,
				y: m,
				height: n - m,
				width: l - f
			})
		};
		d.$10 = function(a, c) {
			var d = 0,
				e = 0;
			if (this.refs.chart) {
				var f = b("ReactDOM").findDOMNode(this.refs.chart).querySelector(b("CandelaConstants").CHART_ELEMENT_SELECTOR);
				f = f.getBoundingClientRect();
				switch (this.props.position) {
					case "above":
						d = a - .5 * f.width;
						e = c;
						break;
					case "below":
						d = a - .5 * f.width;
						e = c - f.height;
						break;
					case "left":
						d = b("Locale").isRTL() ? a - f.width : a;
						e = c;
						break;
					case "right":
						d = b("Locale").isRTL() ? a : a - f.width;
						e = c;
						break
				}
				b("Locale").isRTL() && (d = -d)
			}
			return {
				x: d,
				y: e
			}
		};
		d.$11 = function(a, c) {
			return b("shallowEqual")((g || (g = b("mapObject")))(a, function(a) {
				return a.value
			}), (g || (g = b("mapObject")))(c, function(a) {
				return a.value
			})) && b("shallowEqual")((g || (g = b("mapObject")))(a, function(a) {
				return a.scale
			}), (g || (g = b("mapObject")))(c, function(a) {
				return a.scale
			}))
		};
		d.$12 = function(a) {
			(h || (h = b("isEmpty")))(a.data) ? this.$13(): (this.$2(), this.setState({
				shown: !0
			}));
			if ((h || (h = b("isEmpty")))(a.data) || this.$11(a.data, this.state.data)) return;
			var c = typeof this.props.items === "function" ? this.props.items(a.data) : this.props.items,
				d = l(Object.keys(a.data));
			d = c.map(function(a) {
				return a.key
			}).intersect(d);
			var e = this.$4(c, a.data);
			c = this.$3(c, a.data);
			var f, g, i = 0,
				j = 0;
			switch (a.target.shapeType) {
				case k.BAR:
					var m = this.$7(a);
					i = m.posX;
					j = m.posY;
					f = m.anchorRect;
					break;
				case k.BAR_AREA_LABEL:
					m = this.$8(a);
					i = m.posX;
					j = m.posY;
					f = m.anchorRect;
					break;
				case k.BAR_GROUP:
					m = this.$9(a, d);
					i = m.posX;
					j = m.posY;
					f = m.anchorRect;
					break;
				case k.GUIDE:
					m = this.$5(a, d);
					g = m.closestSeriesName;
					i = m.posX;
					j = m.posY;
					f = m.anchorRect;
					break
			}
			d = this.$10(i, j);
			m = d.x;
			i = d.y;
			this.setState({
				anchorRect: b("shallowEqual")(f, this.state.anchorRect) ? this.state.anchorRect : f,
				closestSeriesName: g,
				data: a.data,
				items: c,
				shown: !!f,
				target: a.target,
				theme: a.theme,
				title: e,
				x: m,
				y: i
			})
		};
		d.$13 = function() {
			this.$1 = this.$1 || b("debounce")(this.$16, this.props.hoverHideDelay), this.$1()
		};
		d.$2 = function() {
			this.$1 && (this.$1.reset(), this.$1 = null)
		};
		d.render = function() {
			var a = i.cloneElement(this.props.chart, {
					anchorRect: this.state.anchorRect,
					onMouseMove: this.$14,
					onMouseEnter: this.$15,
					onMouseLeave: this.$17,
					ref: "chart"
				}),
				b = this.props.children && i.cloneElement(this.props.children, babelHelpers["extends"]({}, this.state, {
					chartNode: this.refs.chart,
					position: this.props.position,
					onMouseEnter: this.$18,
					onMouseLeave: this.$19
				}));
			return i.jsxs("div", {
				children: [a, b]
			})
		};
		return c
	}(i.PureComponent);
	e.exports = c;
	c.propTypes = {
		chart: (d = b("prop-types")).node.isRequired,
		children: d.node.isRequired,
		formatterFactory: d.func,
		hoverHideDelay: d.number,
		items: d.oneOfType([d.instanceOf(l), d.func]).isRequired,
		position: d.oneOf(["above", "below", "left", "right"]),
		targetShapeTypes: a,
		theme: d.instanceOf(b("CandelaTheme")),
		title: d.string,
		titleElementGetter: d.func,
		titleKey: d.string
	};
	c.defaultProps = {
		formatterFactory: b("InsightsFormatterFactories").legendFormatterFactory,
		hoverHideDelay: 300,
		position: "above",
		targetShapeTypes: m([k.GUIDE, k.BAR_GROUP])
	}
}), null);

__d("InsightsHoverCard.react", ["cx", "CandelaConstants", "CandelaHoverCard.react", "ContextualLayerAutoFlip", "React", "immutable", "prop-types", "isEmpty", "joinClasses"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h, i = b("React");
	a = b("immutable").OrderedSet;
	c = b("CandelaHoverCard.react").propTypes;
	c.children;
	d = babelHelpers.objectWithoutPropertiesLoose(c, ["children"]);
	f = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var b, c;
			for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
			return (b = c = a.call.apply(a, [this].concat(e)) || this, c.$2 = function(a) {
				return c.$1(a, !0)
			}, b) || babelHelpers.assertThisInitialized(c)
		}
		var d = c.prototype;
		d.$1 = function(a, b) {
			var c = a.constant,
				d = a.label,
				e = a.richLabel,
				f = a.value;
			if (f == null) return null;
			b = (b ? "auxiliary" : "") + (c ? " constant" : "") + " _3l0x";
			return i.jsxs("li", {
				className: b,
				"data-key": a.key,
				children: [i.jsx("div", {
					className: "_3l0y",
					children: f
				}), i.jsx("div", {
					className: "_3l0z",
					children: e || d
				})]
			}, a.key)
		};
		d.$3 = function() {
			var a = this,
				c = this.props,
				d = c.closestSeriesName,
				e = c.displayAllSeries,
				f = c.items;
			c = c.target;
			if (!f) return null;
			c = c.shapeType === b("CandelaConstants").ShapeType.GUIDE && !e;
			e = c ? f.filter(function(a) {
				return a.key === d
			}) : f;
			c = e.map(function(b) {
				return a.$1(b)
			});
			return c
		};
		d.$4 = function() {
			var a = this,
				c = this.props,
				d = c.auxiliaryItems;
			c = c.title;
			var e = b("joinClasses")("_3l0-", this.props.className);
			c = c ? i.jsx("div", {
				className: "_3l0_",
				children: c
			}) : null;
			return i.jsxs("div", {
				className: e,
				children: [c, i.jsxs("ul", {
					className: "_9hci",
					children: [this.$3(), d && d.map(function(b) {
						return a.$2(b)
					})]
				})]
			})
		};
		d.render = function() {
			var a = this.props,
				c = a.auxiliaryItems,
				d = a.target,
				e = a.items;
			a = a.title;
			return (h || (h = b("isEmpty")))(d) || !a && (!e || e.isEmpty()) && (!c || c.isEmpty()) ? null : i.jsx(b("CandelaHoverCard.react"), babelHelpers["extends"]({}, this.props, {
				children: this.$4()
			}))
		};
		return c
	}(i.PureComponent);
	e.exports = f;
	f.defaultProps = {
		behaviors: {
			ContextualLayerAutoFlip: b("ContextualLayerAutoFlip")
		}
	};
	f.propTypes = babelHelpers["extends"]({}, d, {
		auxiliaryItems: (g = b("prop-types")).instanceOf(a),
		closestSeriesName: g.string,
		items: g.instanceOf(a),
		onToggle: g.func,
		title: g.oneOfType([g.string, g.element]),
		displayAllSeries: g.bool
	})
}), null);





__d("InsightsItems", ["cx", "invariant", "CandelaImmutableObject", "CandelaUtils", "InsightsFormatterFactories", "immutable", "filterObject"], (function(a, b, c, d, e, f, g, h) {
	"use strict";
	var i = b("CandelaUtils").data.getSeriesValue;
	a = b("immutable").Record;
	var j = b("immutable").Set;

	function k(a, b) {
		return function(c, d, e, f) {
			c instanceof b || h(0, 1772, b.name, c.constructor.name);
			return a(c, d, e, f)
		}
	}
	var l = function(b) {
		babelHelpers.inheritsLoose(a, b);

		function a(a) {
			return b.call(this, a) || this
		}
		return a
	}(a({
		classNames: j(),
		labelColor: "auto",
		labelElement: null,
		labelText: "",
		valueColor: null,
		valueText: ""
	}));
	f.ItemDescriptor = l;
	var m = function(b) {
		babelHelpers.inheritsLoose(a, b);

		function a(a) {
			var c;
			c = b.call(this, a) || this;
			Object.assign(babelHelpers.assertThisInitialized(c), a);
			return c
		}
		var c = a.prototype;
		c.getItemDescriptor = function(a, b, c) {
			throw new Error("Not implemented")
		};
		return a
	}(b("CandelaImmutableObject"));
	f.BaseItem = m;
	c = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c(c) {
			return a.call(this, babelHelpers["extends"]({
				disabled: !1,
				key: c.defaultDescriptor.labelText + "-static",
				toggleable: !1
			}, b("filterObject")(c, function(a) {
				return a !== void 0
			}))) || this
		}
		var d = c.prototype;
		d.getItemDescriptor = function() {
			return this.defaultDescriptor
		};
		return c
	}(m);
	f.StaticItem = c;
	d = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c(c) {
			return a.call(this, babelHelpers["extends"]({
				disabled: !1,
				key: c.seriesName + "-dynamic",
				toggleable: !1
			}, b("filterObject")(c, function(a) {
				return a !== void 0
			}))) || this
		}
		var d = c.prototype;
		d.getItemDescriptor = function(a, b, c) {
			var d;
			this.defaultDescriptor.labelColor === "auto" ? d = this.labelColorSeriesName ? b.get(this.labelColorSeriesName) : null : d = this.defaultDescriptor.labelColor;
			var e = this.classNameGetter && this.classNameGetter(this, a, b, c);
			e = e ? this.defaultDescriptor.classNames.union(e) : this.defaultDescriptor.classNames;
			var f = this.labelTextGetter ? this.labelTextGetter(this, a, b, c) : this.defaultDescriptor.labelText;
			a = this.valueTextGetter ? this.valueTextGetter(this, a, b, c) : this.defaultDescriptor.valueText;
			b = this.defaultDescriptor;
			c = b.labelElement;
			b = b.valueColor;
			return new l({
				classNames: e,
				labelColor: d,
				labelElement: c,
				labelText: f,
				valueColor: b,
				valueText: a
			})
		};
		return c
	}(m);
	f.DynamicItem = d;
	e = function(a) {
		babelHelpers.inheritsLoose(c, a);
		c.getKeyForSeriesName = function(a) {
			return a + "-series"
		};

		function c(d) {
			var e = function(c, d) {
					var a = c.seriesName,
						e = c.valueFormatter,
						f = i(d, a);
					if (f == null) return c.defaultDescriptor.valueText;
					c = e || b("InsightsFormatterFactories").legendFormatterFactory(d[a].scale);
					return c(f)
				},
				f = d.comparisonForSeriesName,
				g = d.seriesName;
			return a.call(this, babelHelpers["extends"]({
				key: c.getKeyForSeriesName(g),
				labelColorSeriesName: f || g,
				toggleable: !0,
				valueTextGetter: k(e, c)
			}, b("filterObject")(d, function(a) {
				return a !== void 0
			}))) || this
		}
		return c
	}(d);
	f.SeriesDataItem = e;
	g = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c(d) {
			var e = function(a, b) {
					var c = a.comparisonValue;
					a = a.seriesName;
					b = i(b, a);
					if (b == null) return j();
					if (b > c) return j(["_4hg1"]);
					else if (b === c) return j(["_4hg2"]);
					else return j(["_4hg3"])
				},
				f = function(c, d) {
					var e = c.comparisonValue,
						a = c.seriesName,
						f = c.valueFormatter,
						g = i(d, a);
					if (g == null) return c.defaultDescriptor.valueText;
					c = f || b("InsightsFormatterFactories").legendFormatterFactory(d[a].scale);
					return c(Math.abs(g - e))
				},
				g = d.labelTextGetter,
				h = d.seriesName;
			return a.call(this, babelHelpers["extends"]({
				classNameGetter: k(e, c),
				key: h + "-value-compare",
				labelColorSeriesName: null,
				labelTextGetter: g && k(g, c),
				valueTextGetter: k(f, c)
			}, b("filterObject")(d, function(a) {
				return a !== void 0
			}))) || this
		}
		return c
	}(d);
	f.ValueComparisonItem = g;
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c(d) {
			var e = function(b, c) {
					var a = b.comparisonSeriesName;
					b = b.seriesName;
					b = i(c, b);
					c = i(c, a);
					if (b == null || c == null) return j();
					if (b > c) return j(["_4hg1"]);
					else if (b === c) return j(["_4hg2"]);
					else return j(["_4hg3"])
				},
				f = function(d, e) {
					var a = d.comparisonSeriesName,
						c = d.seriesName,
						f = d.valueFormatter,
						g = i(e, c);
					a = i(e, a);
					if (g == null || a == null) return d.defaultDescriptor.valueText;
					d = f || b("InsightsFormatterFactories").legendFormatterFactory(e[c].scale);
					return d(Math.abs(g - a))
				},
				g = d.comparisonSeriesName,
				h = d.labelTextGetter,
				l = d.seriesName;
			return a.call(this, babelHelpers["extends"]({
				classNameGetter: k(e, c),
				key: l + "-" + g + "-compare",
				labelColorSeriesName: null,
				labelTextGetter: h && k(h, c),
				valueTextGetter: k(f, c)
			}, b("filterObject")(d, function(a) {
				return a !== void 0
			}))) || this
		}
		return c
	}(d);
	f.SeriesComparisonItem = a;
	c = function(a) {
		return !(a instanceof m)
	};
	f.isLegacyItem = c
}), null);
__d("InsightsBaseLegend.react", ["cx", "CandelaLegend.react", "InsightsItems", "React", "Tooltip.react", "emptyFunction", "immutable", "joinClasses", "prop-types"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("React");
	a = b("immutable").Map;
	c = b("immutable").OrderedSet;
	d = b("immutable").Set;
	f = b("CandelaLegend.react").propTypes;
	f.children;
	g = babelHelpers.objectWithoutPropertiesLoose(f, ["children"]);
	f = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var c, d;
			for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++) f[g] = arguments[g];
			return (c = d = a.call.apply(a, [this].concat(f)) || this, d.$1 = function(a) {
				var c = d.props,
					e = c.auxiliaryItemRenderer;
				c = c.highlightedKeys;
				var f = a.constant;
				f = "auxiliary" + (f ? " constant" : "") + (c && c.size ? " muted" : "") + " _8dl";
				c = h.jsx(b("Tooltip.react"), {
					tooltip: a.label,
					children: a.richLabel || a.label
				});
				f = babelHelpers["extends"]({}, a, {
					className: f,
					labelWithTooltip: c
				});
				return e(f, a)
			}, d.$2 = function(a) {
				var c = d.props,
					e = c.autoColors,
					f = c.data,
					g = c.highlightedKeys,
					i = c.itemRenderer,
					j = c.target,
					k = c.onMouseEnter,
					l = c.onMouseLeave,
					m;
				!g ? m = !1 : a instanceof b("InsightsItems").SeriesDataItem ? m = g.has(a.seriesName) : b("InsightsItems").isLegacyItem(a) && (m = g.has(a.key));
				c = "clearfix" + (m ? " highlighted" : "") + (g && g.size && !m ? " muted" : "") + " _8dl";
				if (!e || !f) return null;
				if (b("InsightsItems").isLegacyItem(a)) {
					g = a.key;
					var n = a.label,
						o = a.richLabel;
					o = h.jsx(b("Tooltip.react"), {
						tooltip: n,
						children: o || n
					});
					n = {
						color: e.get(g)
					};
					g = babelHelpers["extends"]({}, a, {
						className: c,
						labelStyle: n,
						labelWithTooltip: o
					})
				} else {
					n = a.getItemDescriptor(f, e, j);
					o = n.classNames;
					f = n.labelColor;
					e = n.labelElement;
					j = n.labelText;
					var p = n.valueColor;
					n = n.valueText;
					var q = h.jsx(b("Tooltip.react"), {
						tooltip: j,
						children: e || j
					});
					f = f ? {
						color: f
					} : null;
					p = p ? {
						color: p
					} : null;
					g = {
						className: b("joinClasses").apply(void 0, o.toArray().concat([c])),
						key: a.key,
						label: j,
						labelStyle: f,
						labelWithTooltip: q,
						richLabel: e,
						value: n,
						valueStyle: p
					}
				}
				return i(babelHelpers["extends"]({}, g, {
					onMouseEnter: k && function() {
						return k(a)
					},
					onMouseLeave: l && function() {
						return l(a)
					}
				}), a)
			}, c) || babelHelpers.assertThisInitialized(d)
		}
		var d = c.prototype;
		d.render = function() {
			var a = this.props,
				c = a.auxiliaryItems,
				d = a.auxiliaryItemsPosition,
				e = a.items;
			a = babelHelpers.objectWithoutPropertiesLoose(a, ["auxiliaryItems", "auxiliaryItemsPosition", "items"]);
			var f = b("joinClasses")("_24q8", this.props.className);
			e = [e.map(this.$2), c && c.map(this.$1)];
			d === "left" && e.reverse();
			return h.jsx(b("CandelaLegend.react"), babelHelpers["extends"]({}, a, {
				className: f,
				children: e
			}))
		};
		return c
	}(h.Component);
	e.exports = f;
	f.propTypes = babelHelpers["extends"]({}, g, {
		disableHorizontalLayout: (e = b("prop-types")).bool,
		layoutInterval: e.number,
		minItemWidthPercentage: e.number,
		autoColors: e.instanceOf(a),
		auxiliaryItemRenderer: e.func.isRequired,
		auxiliaryItems: e.instanceOf(c),
		auxiliaryItemsPosition: e.oneOf(["left", "right"]),
		data: e.object,
		highlightedKeys: e.instanceOf(d),
		itemRenderer: e.func.isRequired,
		items: e.instanceOf(c).isRequired,
		onMouseEnter: e.func,
		onMouseLeave: e.func,
		target: e.object
	});
	f.defaultProps = {
		autoColors: a(),
		auxiliaryItemRenderer: g = b("emptyFunction"),
		auxiliaryItemsPosition: "right",
		data: {},
		highlightedKeys: d(),
		itemRenderer: g,
		onMouseEnter: g,
		onMouseLeave: g
	}
}), null);
__d("InsightsLegend.react", ["cx", "CandelaLegend.react", "InsightsBaseLegend.react", "React", "joinClasses"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("React"),
		i = b("CandelaLegend.react").CandelaLegendItem;
	a = b("InsightsBaseLegend.react").propTypes;
	a.auxiliaryItemRenderer;
	a.itemRenderer;
	c = babelHelpers.objectWithoutPropertiesLoose(a, ["auxiliaryItemRenderer", "itemRenderer"]);
	d = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.$1 = function(a) {
			return h.jsx(i, babelHelpers["extends"]({}, a, {
				className: b("joinClasses")(a.className, "_120o")
			}))
		};
		d.render = function() {
			var a = this.props,
				c = a.className;
			a = babelHelpers.objectWithoutPropertiesLoose(a, ["className"]);
			return h.jsx(b("InsightsBaseLegend.react"), babelHelpers["extends"]({}, a, {
				auxiliaryItemRenderer: this.$1,
				className: b("joinClasses")(c, "_5g0o"),
				itemRenderer: this.$1
			}))
		};
		return c
	}(h.PureComponent);
	e.exports = d;
	d.propTypes = babelHelpers["extends"]({}, c)
}), null);
__d("BUIInsightsThemeColors", ["cssVar"], (function(a, b, c, d, e, f, g) {
	"use strict";
	a = [
		["blue", "#3d6ad6"],
		["aqua", "#13bda6"],
		["purple", "#905ac7"],
		["orange", "#ff8051"],
		["fuchsia", "#ac2888"],
		["yellow", "#ffcc00"]
	];
	e.exports = a
}), null);
__d("BUIInsightsThemeStyleSheet", ["cssVar", "AdsInsightsConfig"], (function(a, b, c, d, e, f, g) {
	"use strict";
	a = Object.freeze({
		annotationanchor: {
			fill: "rgba(0,0,0,0)",
			radius: 9,
			stroke: "#bec2c9",
			strokeLinecap: "square",
			strokeWidth: 2
		},
		"annotationanchor:active": {
			cursor: "pointer",
			stroke: "blue"
		},
		"annotationanchor:active:hover": {
			cursor: "pointer",
			stroke: "blue"
		},
		"annotationanchor:drag": {
			opacity: .5
		},
		"annotationanchor:hover": {
			cursor: "pointer",
			stroke: "#4e5665"
		},
		annotationline: {
			stroke: "#bec2c9",
			strokeWidth: 1
		},
		"annotationline:active": {
			stroke: "blue"
		},
		"annotationline:active:hover": {
			stroke: "blue"
		},
		"annotationline:drag": {
			opacity: .5
		},
		"annotationline:hover": {
			stroke: "#4e5665"
		},
		'annotationline[draggable="true"]:hover': {
			cursor: "move"
		},
		annotationmarker: {
			fill: "auto",
			radius: 4
		},
		area: {
			fill: "auto",
			opacity: .08
		},
		"area:muted": {
			opacity: .06
		},
		"area.interval": {
			opacity: .2
		},
		"line.interval": {
			visibility: "hidden"
		},
		"guide>point.interval": {
			visibility: "hidden"
		},
		'axis[orientation="horizontal"]': {
			height: 40
		},
		'axis[orientation="horizontal"]>axisbucketmark': {
			textAlign: "center"
		},
		'axis[orientation="horizontal"]>axismark': {
			textAlign: "center"
		},
		'axis[orientation="horizontal"]>axistitle': {
			padding: 40
		},
		'axis[orientation="horizontal"][alignment="top"]>axisbucketmark': {
			padding: 29
		},
		'axis[orientation="horizontal"][alignment="top"]>axismark': {
			padding: 29
		},
		'axis[orientation="horizontal"][alignment="top"]>axismark:secondary': {
			padding: 45
		},
		'axis[orientation="vertical"]': {
			width: 40
		},
		'axis[orientation="vertical"]>axisbucketmark': {
			paddingTop: 13
		},
		'axis[orientation="vertical"]>axismark': {
			paddingTop: 13
		},
		'axis[orientation="vertical"]>axistitle': {
			padding: 65
		},
		'axis[orientation="vertical"][alignment="left"]>axisbucketmark': {
			textAlign: "right"
		},
		'axis[orientation="vertical"][alignment="left"]>axismark': {
			textAlign: "right"
		},
		'axis[orientation="vertical"][alignment="left"]>axistitle': {
			transform: "rotate(-90)"
		},
		'axis[orientation="vertical"][alignment="right"]>axistitle': {
			transform: "rotate(90)"
		},
		axisbucketmark: {
			color: "#485665",
			fontSize: 11,
			padding: 18
		},
		axismark: {
			color: "#485665",
			fontSize: 11,
			padding: 18
		},
		"axismark:secondary": {
			color: "#bec2c9",
			fontSize: 10,
			padding: 34
		},
		axistitle: {
			color: "#485665",
			fontSize: 13,
			height: 13,
			fontWeight: "bold",
			textAlign: "center",
			visibility: "hidden"
		},
		axisrule: {
			visibility: "hidden"
		},
		bar: {
			fill: "auto",
			margin: 1,
			padding: 5
		},
		"bar:muted": {
			opacity: .15
		},
		"bar:muted>barlabel": {
			opacity: .15
		},
		"bar:secondary": {
			fill: "#dddfe2"
		},
		"bar:secondary>barlabel": {
			visibility: "hidden"
		},
		"bargroup:hover": {
			fill: "#eee",
			opacity: .5
		},
		barlabel: {
			color: "auto",
			fontWeight: "bold"
		},
		'bar[alignment="bottom"]': {
			minHeight: 1
		},
		'bar[alignment="left"]': {
			minWidth: 1
		},
		'bar[alignment="right"]': {
			minWidth: 1
		},
		'bar[alignment="top"]': {
			minHeight: 1
		},
		'bar[alignment="bottom"]>barlabel': {
			textAlign: "center"
		},
		'bar[alignment="top"]>barlabel': {
			textAlign: "center"
		},
		'bar[comparison-shape="circle"]': {
			fill: "#dddfe2",
			opacity: 1,
			padding: 7
		},
		'bar[comparison-shape="line"]': {
			opacity: 1,
			stroke: "#000000",
			strokeWidth: 3
		},
		sankeynode: {
			borderColor: "#eee",
			borderWidth: 1,
			fill: "#bec2c9",
			marginBottom: 10,
			marginTop: 10,
			opacity: .75,
			width: 30
		},
		"sankeynode:hover": {
			opacity: 1
		},
		sankeylink: {
			fill: "auto",
			opacity: .5
		},
		"sankeylink:hover": {
			opacity: .75
		},
		chart: {
			backgroundColor: "#FFF",
			padding: 10
		},
		controlline: {
			stroke: "#bec2c9",
			strokeDasharray: null,
			strokeWidth: 1
		},
		gap: {
			fill: "#EBEDF0"
		},
		"gap:secondary": {
			fill: "url(" + b("AdsInsightsConfig").dashMaskImageURL + ")"
		},
		"gap:point": {
			margin: 4
		},
		gridline: {
			stroke: "#eee",
			strokeWidth: 1
		},
		guide: {
			fill: "#fff",
			opacity: 0
		},
		'guide[placement="center"]:hover': {
			opacity: .5
		},
		"guide>line": {
			stroke: "#90949c",
			strokeWidth: 1
		},
		"guide>point": {
			fill: "auto",
			radius: 4,
			stroke: "auto",
			strokeWidth: 2,
			visibility: "visible"
		},
		line: {
			stroke: "auto",
			strokeWidth: 2
		},
		"line:muted": {
			opacity: .5
		},
		point: {
			fill: "#fff",
			radius: 3,
			stroke: "auto",
			strokeWidth: 2,
			visibility: "hidden"
		},
		"point:muted": {
			opacity: .5
		},
		"point:hover": {
			opacity: .5
		},
		"reference>referencelabel": {
			color: "#90949c",
			fontSize: 11,
			fontWeight: "bold"
		},
		'reference[alignment="bottom"]>referencelabel': {
			paddingBottom: 15
		},
		'reference[alignment="left"]>referencelabel': {
			paddingLeft: 3
		},
		'reference[alignment="right"]>referencelabel': {
			paddingLeft: 3
		},
		'reference[alignment="top"]>referencelabel': {
			paddingBottom: 15
		},
		"reference>referenceline": {
			stroke: "#90949c",
			strokeDasharray: "8 4",
			strokeWidth: 1
		},
		'reference[placement="bottom"]>referencelabel': {
			visibility: "hidden"
		},
		"area.baseline:greater-than": {
			fill: "#42b72a"
		},
		"area.baseline:less-than": {
			fill: "#fa3e3e"
		},
		"bar.baseline:greater-than": {
			fill: "#42b72a"
		},
		"bar.baseline:equal-to": {
			fill: "#42b72a"
		},
		"bar.baseline:less-than": {
			fill: "#fa3e3e"
		},
		"bar.baseline:greater-than>barlabel": {
			color: "#42b72a"
		},
		"bar.baseline:equal-to>barlabel": {
			color: "#42b72a"
		},
		"bar.baseline:less-than>barlabel": {
			color: "#fa3e3e"
		},
		"guide>point.baseline:greater-than": {
			fill: "#42b72a",
			stroke: "#42b72a"
		},
		"guide>point.baseline:equal-to": {
			fill: "#42b72a",
			stroke: "#42b72a"
		},
		"guide>point.baseline:less-than": {
			fill: "#fa3e3e",
			stroke: "#fa3e3e"
		},
		"line.baseline:greater-than": {
			stroke: "#42b72a"
		},
		"line.baseline:less-than": {
			stroke: "#fa3e3e"
		},
		"point.baseline:greater-than": {
			fill: "#42b72a",
			stroke: "#42b72a"
		},
		"point.baseline:equal-to": {
			fill: "#42b72a",
			stroke: "#42b72a"
		},
		"point.baseline:less-than": {
			fill: "#fa3e3e",
			stroke: "#fa3e3e"
		},
		"bar.benchmark": {
			fill: "auto",
			opacity: .4
		},
		"bar.benchmark:secondary": {
			fill: "auto"
		},
		"guide>point.benchmark": {
			visibility: "hidden"
		},
		"line.benchmark": {
			opacity: .4
		},
		"reference.benchmark>referenceline": {
			opacity: .4,
			stroke: "auto",
			strokeDasharray: void 0,
			strokeWidth: 2
		},
		"reference.benchmark>referencezone": {
			visibility: "hidden"
		},
		"area.minimum-limit:less-than": {
			visibility: "hidden"
		},
		"bar.minimum-limit:less-than": {
			fill: "#bec2c9",
			opacity: .2
		},
		"bar.minimum-limit:less-than>barlabel": {
			visibility: "hidden"
		},
		"guide>line.minimum-limit:less-than": {
			visibility: "visible"
		},
		"guide>point.minimum-limit:less-than": {
			visibility: "hidden"
		},
		"line.minimum-limit:less-than": {
			visibility: "hidden"
		},
		"reference.minimum-limit>referencezone:less-than": {
			fill: "#f6f7f9",
			opacity: .5
		},
		"area.target:greater-than": {
			fill: "#42b72a"
		},
		"area.target:less-than": {
			fill: "#bec2c9"
		},
		"bar.target:greater-than": {
			fill: "#42b72a"
		},
		"bar.target:greater-than>barlabel": {
			color: "#42b72a"
		},
		"bar.target:equal-to": {
			fill: "#42b72a"
		},
		"bar.target:equal-to>barlabel": {
			color: "#42b72a"
		},
		"bar.target:less-than": {
			fill: "#bec2c9"
		},
		"bar.target:less-than>barlabel": {
			color: "#bec2c9"
		},
		"guide>point.target:greater-than": {
			fill: "#42b72a",
			stroke: "#42b72a"
		},
		"guide>point.target:equal-to": {
			fill: "#bec2c9",
			stroke: "#bec2c9"
		},
		"guide>point.target:less-than": {
			fill: "#bec2c9",
			stroke: "#bec2c9"
		},
		"line.target:greater-than": {
			stroke: "#42b72a"
		},
		"line.target:less-than": {
			stroke: "#bec2c9"
		},
		"reference.target>referencezone": {
			visibility: "hidden"
		},
		"bar:unavailable": {
			fill: "#bec2c9",
			strokeWidth: 1
		},
		zone: {
			fill: "#EBEDF0"
		},
		"zone:secondary": {
			fill: "url(" + b("AdsInsightsConfig").dashMaskImageURL + ")"
		}
	});
	c = a;
	e.exports = c
}), null);
__d("BUIInsightsTheme", ["BUIInsightsThemeColors", "BUIInsightsThemeStyleSheet", "CandelaTheme"], (function(a, b, c, d, e, f) {
	"use strict";
	a = b("CandelaTheme").fromJS({
		colors: b("BUIInsightsThemeColors"),
		styleSheet: b("BUIInsightsThemeStyleSheet")
	});
	e.exports = a
}), null);












__d("Rectangle.art", ["React", "ReactART", "prop-types"], (function(a, b, c, d, e, f) {
	var g = b("React"),
		h = b("ReactART").Shape,
		i = b("ReactART").Path;
	a = function(a) {
		"use strict";
		babelHelpers.inheritsLoose(b, a);

		function b() {
			return a.apply(this, arguments) || this
		}
		var c = b.prototype;
		c.render = function() {
			var a = this.props.width,
				b = this.props.height,
				c = this.props.radius ? this.props.radius : 0,
				d = this.props.radiusTopLeft ? this.props.radiusTopLeft : c,
				e = this.props.radiusTopRight ? this.props.radiusTopRight : c,
				f = this.props.radiusBottomRight ? this.props.radiusBottomRight : c;
			c = this.props.radiusBottomLeft ? this.props.radiusBottomLeft : c;
			var j = i();
			a < 0 && (j.move(a, 0), a = -a);
			b < 0 && (j.move(0, b), b = -b);
			d < 0 && (d = 0);
			e < 0 && (e = 0);
			f < 0 && (f = 0);
			c < 0 && (c = 0);
			d + e > a && (d = 0, e = 0);
			c + f > a && (c = 0, f = 0);
			d + c > b && (d = 0, c = 0);
			e + f > b && (e = 0, f = 0);
			j.move(0, d);
			d > 0 && j.arc(d, -d);
			j.line(a - (e + d), 0);
			e > 0 && j.arc(e, e);
			j.line(0, b - (e + f));
			f > 0 && j.arc(-f, f);
			j.line(-a + (f + c), 0);
			c > 0 && j.arc(-c, -c);
			j.line(0, -b + (c + d));
			return g.jsx(h, babelHelpers["extends"]({}, this.props, {
				d: j
			}))
		};
		return b
	}(g.Component);
	a.propTypes = {
		width: (c = b("prop-types")).number.isRequired,
		height: c.number.isRequired,
		radius: c.number,
		radiusTopLeft: c.number,
		radiusTopRight: c.number,
		radiusBottomRight: c.number,
		radiusBottomLeft: c.number
	};
	e.exports = a
}), null);









__d("Circle.art", ["React", "ReactART", "prop-types"], (function(a, b, c, d, e, f) {
	var g = b("React"),
		h = b("ReactART").Path,
		i = b("ReactART").Shape;
	a = function(a) {
		"use strict";
		babelHelpers.inheritsLoose(b, a);

		function b() {
			return a.apply(this, arguments) || this
		}
		var c = b.prototype;
		c.render = function() {
			var a = this.props.radius;
			a = h().moveTo(0, -a).arc(0, a * 2, a).arc(0, a * -2, a).close();
			return g.jsx(i, babelHelpers["extends"]({}, this.props, {
				d: a
			}))
		};
		return b
	}(g.Component);
	a.propTypes = {
		radius: b("prop-types").number.isRequired
	};
	e.exports = a
}), null);
__d("CandelaInteractivePoint.react", ["CandelaConstants", "CandelaInteractiveMixin", "Circle.art", "React", "createReactClass_DEPRECATED", "prop-types"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = b("CandelaConstants").Event;
	c = b("createReactClass_DEPRECATED")({
		displayName: "CandelaInteractivePoint",
		mixins: [b("CandelaInteractiveMixin")],
		propTypes: {
			hoverStyle: (a = b("prop-types")).object,
			proximityStyle: a.object,
			radius: a.number,
			style: a.object,
			x: a.number.isRequired,
			y: a.number.isRequired
		},
		getDefaultProps: function() {
			return {
				style: {}
			}
		},
		getInitialState: function() {
			return {
				hover: !1,
				proximity: !1
			}
		},
		_attachListeners: function() {
			var a = this.props,
				b = a.hoverStyle;
			a = a.proximityStyle;
			b && (this._attachSelfListener(h.SHAPE_ENTER, this._handleShapeEnter), this._attachSelfListener(h.SHAPE_LEAVE, this._handleShapeLeave));
			a && (this._attachSelfListener(h.SHAPE_ENTER_PROXIMITY, this._handleShapeEnterProximity), this._attachSelfListener(h.SHAPE_LEAVE_PROXIMITY, this._handleShapeLeaveProximity))
		},
		_handleShapeEnter: function(a) {
			this.setState({
				hover: !0
			})
		},
		_handleShapeEnterProximity: function(a) {
			this.setState({
				proximity: !0
			})
		},
		_handleShapeLeave: function(a) {
			this.setState({
				hover: !1
			})
		},
		_handleShapeLeaveProximity: function(a) {
			this.setState({
				proximity: !1
			})
		},
		_resolveStyleProp: function(a) {
			var b = this.state,
				c = b.hover;
			b = b.proximity;
			var d = this.props,
				e = d.hoverStyle,
				f = d.proximityStyle;
			d = d.style;
			if (c && e && e[a] !== void 0) return e[a];
			else if (b && f && f[a] !== void 0) return f[a];
			else if (d) return d[a];
			else return null
		},
		_buildPathImpl: function() {
			var a = this.props,
				b = a.radius,
				c = a.x;
			a = a.y;
			b = b || Number(this._resolveStyleProp("radius"));
			this.addCommand("ellipse", c, a, b, b)
		},
		render: function() {
			var a = this.props,
				c = a.radius,
				d = a.x;
			a = a.y;
			c = c || Number(this._resolveStyleProp("radius"));
			var e = this._resolveStyleProp("fill"),
				f = this._resolveStyleProp("opacity"),
				h = this._resolveStyleProp("stroke"),
				i = this._resolveStyleProp("strokeWidth");
			return !e && !h ? null : g.jsx(b("Circle.art"), {
				fill: e,
				opacity: f,
				radius: c,
				stroke: h,
				strokeWidth: i,
				x: d,
				y: a
			})
		}
	});
	e.exports = c
}), null);
__d("CandelaStructs", ["invariant", "CandelaConstants", "immutable"], (function(a, b, c, d, e, f, g) {
	"use strict";
	a = b("immutable").Record;
	c = function(a) {
		babelHelpers.inheritsLoose(b, a);

		function b(b) {
			return a.call(this, b) || this
		}
		return b
	}(a({
		className: "",
		flushToThreshold: !1,
		value: 0
	}));
	f.Threshold = c;
	d = function(a) {
		babelHelpers.inheritsLoose(b, a);

		function b(b) {
			return a.call(this, b) || this
		}
		return b
	}(a({
		className: "",
		label: "",
		placement: b("CandelaConstants").Placement.NONE,
		seriesName: "",
		value: 0
	}));
	f.Reference = d;
	e = function(a) {
		babelHelpers.inheritsLoose(b, a);

		function b(b) {
			b.dependentSeriesName != null || b.independentSeriesValue != null || g(0, 5580);
			return a.call(this, b) || this
		}
		return b
	}(a({
		dependentSeriesName: null,
		independentSeriesValue: null,
		placement: b("CandelaConstants").Placement.NONE
	}));
	f.Highlight = e;
	c = function(a) {
		babelHelpers.inheritsLoose(b, a);

		function b(b) {
			return a.call(this, b) || this
		}
		return b
	}(a({
		className: "",
		placement: b("CandelaConstants").Placement.NONE,
		independentEndValue: 0,
		independentSeriesName: "",
		independentStartValue: 0
	}));
	f.Zone = c
}), null);
__d("CandelaBars.react", ["CandelaConstants", "CandelaControlLines.react", "CandelaGlobalThemeRegistry", "CandelaInteractivePoint.react", "CandelaInteractiveRect.react", "CandelaInteractiveText.react", "CandelaPureRenderMixin", "CandelaStructs", "CandelaTheme", "CandelaUtils", "React", "ReactART", "createReactClass_DEPRECATED", "expectationViolation", "getObjectValues", "immutable", "prop-types"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = b("ReactART").Group,
		i = b("CandelaUtils").data.classNamesToSelector,
		j = b("CandelaUtils").data.computeHighlightPseudoClass,
		k = b("CandelaUtils").data.getClassNamesFromInputString;
	b("CandelaGlobalThemeRegistry").register({
		type: (a = b("CandelaConstants")).ShapeType.BAR,
		attributes: [a.Attribute.ALIGNMENT, a.Attribute.COMPARISON_SHAPE, a.Attribute.SERIES],
		pseudoClasses: [a.PseudoClass.EQUAL_TO, a.PseudoClass.GREATER_THAN, a.PseudoClass.HIGHLIGHTED, a.PseudoClass.HOVER, a.PseudoClass.LESS_THAN, a.PseudoClass.MUTED, a.PseudoClass.PRIMARY, a.PseudoClass.PROXIMITY, a.PseudoClass.SECONDARY, a.PseudoClass.UNAVAILABLE],
		styles: [a.Style.FILL, a.Style.MARGIN, a.Style.MAX_HEIGHT, a.Style.MAX_WIDTH, a.Style.MIN_HEIGHT, a.Style.MIN_WIDTH, a.Style.OPACITY, a.Style.PADDING, a.Style.STROKE, a.Style.STROKE_DASHARRAY, a.Style.STROKE_WIDTH],
		children: [{
			type: a.ShapeType.BAR_LABEL,
			pseudoClasses: [a.PseudoClass.HOVER],
			styles: [a.Style.BOTTOM, a.Style.COLOR, a.Style.FONT, a.Style.LEFT, a.Style.OPACITY, a.Style.PADDING, a.Style.POSITION, a.Style.RIGHT, a.Style.TEXT_ALIGN, a.Style.TOP, a.Style.VISIBILITY]
		}]
	});
	f = b("createReactClass_DEPRECATED")({
		displayName: "CandelaBars",
		mixins: [b("CandelaPureRenderMixin")],
		contextTypes: {
			schema: (c = b("prop-types")).instanceOf((d = b("immutable")).Map),
			theme: c.instanceOf(b("CandelaTheme"))
		},
		propTypes: {
			alignment: c.oneOf(b("getObjectValues")(a.Alignment)),
			barGroupStructs: c.arrayOf(c.shape({
				classNames: c.instanceOf(d.Set).isRequired,
				data: c.object.isRequired,
				rect: c.object.isRequired
			})).isRequired,
			comparisonShape: c.oneOf(b("getObjectValues")(a.ComparisonShape)),
			groupBy: c.string.isRequired,
			height: c.number.isRequired,
			hiddenSeries: c.instanceOf(d.Set),
			highlights: c.instanceOf(d.Set),
			hoverThreshold: c.number,
			labelComponent: c.element,
			labelFormatterFactory: c.func.isRequired,
			order: c.instanceOf(d.OrderedSet).isRequired,
			overlap: c.bool,
			placement: c.string,
			proximityThreshold: c.number,
			threshold: c.instanceOf(b("CandelaStructs").Threshold),
			width: c.number.isRequired,
			x: c.number.isRequired,
			y: c.number.isRequired
		},
		getDefaultProps: function() {
			return {
				alignment: b("CandelaConstants").Alignment.BOTTOM,
				barGroupStructs: [],
				comparisonShape: b("CandelaConstants").ComparisonShape.BAR,
				groupBy: "",
				height: 0,
				highlights: b("immutable").Set(),
				hoverThreshold: 0,
				order: b("immutable").OrderedSet(),
				proximityThreshold: 0,
				width: 0,
				x: 0,
				y: 0
			}
		},
		_computeBarRect: function(a, c, d, e, f, g, h) {
			var i = this.props,
				j = i.alignment;
			i = i.overlap;
			var k, l, m;
			if (j === b("CandelaConstants").Alignment.LEFT || j === b("CandelaConstants").Alignment.RIGHT) {
				var n = a.height / f;
				k = n - d.marginBottom - d.marginTop;
				l = g - c;
				d.minWidth && Math.abs(l) < d.minWidth && (l ? l = b("CandelaUtils").math.sign(l) * d.minWidth : l = j === b("CandelaConstants").Alignment.LEFT ? d.minWidth : -d.minWidth);
				var o = 0;
				d.maxHeight && d.maxHeight < k && (o = (k - d.maxHeight) / 2, k = d.maxHeight);
				i && (o += d.paddingTop * h, k -= (d.paddingBottom + d.paddingTop) * h);
				m = c;
				n = a.y + n * e + o + d.marginTop
			} else {
				o = a.width / f;
				k = g - c;
				l = o - d.marginLeft - d.marginRight;
				d.minHeight && Math.abs(k) < d.minHeight && (k ? k = b("CandelaUtils").math.sign(k) * d.minHeight : k = j === b("CandelaConstants").Alignment.TOP ? d.minHeight : -d.minHeight);
				f = 0;
				d.maxWidth && d.maxWidth < l && (f = (l - d.maxWidth) / 2, l = d.maxWidth);
				i && (f += d.paddingLeft * h, l -= (d.paddingLeft + d.paddingRight) * h);
				m = a.x + o * e + f + d.marginLeft;
				n = c
			}
			return {
				height: k,
				width: l,
				x: m,
				y: n
			}
		},
		_computeLabelPoint: function(a, c, d) {
			var e = this.props.alignment,
				f, g;
			d.position === "absolute" && (d.top != null ? (d.textAlign === "center" && (f = a.x + a.width / 2), g = a.y + d.top + d.paddingTop) : d.bottom != null ? (d.textAlign === "center" && (f = a.x + a.width / 2), g = a.y + a.height - d.bottom - d.paddingBottom) : d.left != null ? f = a.x + d.left + d.paddingLeft : d.right != null && (f = a.x + a.width - d.right - d.paddingRight));
			e === b("CandelaConstants").Alignment.LEFT || e === b("CandelaConstants").Alignment.RIGHT ? (f == null && (f = !c.width && e === b("CandelaConstants").Alignment.LEFT || c.width > 0 ? c.x + c.width + d.paddingLeft : c.x + c.width - d.paddingRight), g == null && (g = c.y + c.height / 2 + d.paddingTop - d.paddingBottom)) : (f == null && (f = c.x + c.width / 2 + d.paddingLeft - d.paddingRight), g == null && (g = !c.height && e === b("CandelaConstants").Alignment.TOP || c.height > 0 ? c.y + c.height + d.paddingTop : c.y + c.height - d.paddingBottom));
			return {
				x: f,
				y: g
			}
		},
		_handleShapeEvent: function(a, b, c) {
			c.target = b, c.data = babelHelpers["extends"]({}, c.data, a)
		},
		_coerceBorderRadius: function(a, b, c) {
			var d;
			return babelHelpers["extends"]({}, a, (d = {}, d[b] = Math.min((a = a[b]) != null ? a : 0, c), d))
		},
		_coerceAllBorderRadiusStyles: function(a, c) {
			var d = this,
				e = Math.abs(c.height) / 2,
				f = Math.abs(c.width) / 2;
			return a.map(function(a) {
				a = d._coerceBorderRadius(a, b("CandelaConstants").Style.BORDER_RADIUS_HORIZONTAL, e);
				return d._coerceBorderRadius(a, b("CandelaConstants").Style.BORDER_RADIUS_VERTICAL, f)
			})
		},
		_renderShape: function(a, c, d, e, f, h, i) {
			var j = this.context.theme,
				k = this.props,
				l = k.alignment,
				m = k.hoverThreshold;
			k = k.proximityThreshold;
			if (!e.height || !e.width) return null;
			var n = j.getHoverStyle(f);
			j = j.getProximityStyle(f);
			f = {
				alignment: l,
				shapeType: b("CandelaConstants").ShapeType.BAR,
				style: h
			};
			l = babelHelpers["extends"]({}, f, {
				style: n
			});
			f = this._handleShapeEvent.bind(this, c, f);
			l = this._handleShapeEvent.bind(this, c, l);
			n = this._coerceAllBorderRadiusStyles([h, n, j], e);
			j = n[0];
			var o = n[1];
			n = n[2];
			switch (a) {
				case b("CandelaConstants").ShapeType.BAR:
					return g.createElement(b("CandelaInteractiveRect.react"), babelHelpers["extends"]({}, e, {
						hoverStyle: o,
						hoverThreshold: m,
						key: d,
						onShapeClick: l,
						onShapeDown: l,
						onShapeEnter: f,
						onShapeHover: l,
						onShapeLeave: l,
						onShapeLongPress: l,
						onShapeUp: l,
						proximityStyle: n,
						proximityThreshold: k,
						regionID: d,
						style: j
					}));
				case b("CandelaConstants").ShapeType.POINT:
					m = (k = (m = h.paddingLeft) != null ? m : h.padding) != null ? k : 0;
					k = (k = (k = h.paddingRight) != null ? k : h.padding) != null ? k : 0;
					k = Math.max(e.width - m - k, 0) / 2;
					m = e.x + m + k;
					var p = e.y + e.height;
					return g.jsx(b("CandelaInteractivePoint.react"), {
						hoverStyle: o,
						onShapeClick: l,
						onShapeDown: l,
						onShapeEnter: f,
						onShapeLeave: l,
						onShapeUp: l,
						proximityStyle: n,
						radius: k,
						regionID: d,
						style: j,
						x: m,
						y: p
					}, d);
				case b("CandelaConstants").ShapeType.LINE:
					l = (f = (o = h.marginLeft) != null ? o : h.margin) != null ? f : 0;
					j = (k = (n = h.marginRight) != null ? n : h.margin) != null ? k : 0;
					o = (p = (m = h.paddingLeft) != null ? m : h.padding) != null ? p : 0;
					k = (n = (f = h.paddingRight) != null ? f : h.padding) != null ? n : 0;
					m = Math.max(e.width - l - j - o - k, 0);
					p = e.x + l + o;
					f = e.y + e.height;
					n = i || "";
					return g.jsx(b("CandelaControlLines.react"), {
						height: 0,
						style: h,
						values: [(j = c[i]) == null ? void 0 : j.value],
						variableName: n,
						width: m,
						x: p,
						y: f
					}, d);
				default:
					b("expectationViolation")("Can not render unsupported ShapeType: %s", a);
					return null
			}
		},
		_renderLabel: function(a, c, d, e, f, h, i, j, k, l) {
			var m = this.context.theme,
				n = this.props,
				o = n.alignment,
				p = n.hoverThreshold;
			n = n.labelComponent;
			m = m.getHoverStyle(e);
			(!a.width && o === b("CandelaConstants").Alignment.RIGHT || a.width < 0) && (f = babelHelpers["extends"]({}, f, {
				textAlign: b("CandelaConstants").Alignment.RIGHT
			}), m = babelHelpers["extends"]({}, m, {
				textAlign: b("CandelaConstants").Alignment.RIGHT
			}));
			if (n) return g.cloneElement(n, babelHelpers["extends"]({}, d, {
				formatter: h,
				hoverStyle: m,
				key: c,
				style: f,
				data: i,
				seriesName: j,
				groupBySeriesName: k
			}));
			e = i[k] && i[k].value;
			o = h(l, e);
			return g.createElement(b("CandelaInteractiveText.react"), babelHelpers["extends"]({}, d, {
				hoverStyle: m,
				hoverThreshold: p,
				key: c,
				proximityThreshold: 0,
				regionID: c,
				style: f
			}), o)
		},
		render: function() {
			var a = this,
				c = this.context,
				d = c.schema,
				e = c.theme;
			c = this.props;
			var f = c.alignment,
				l = c.barGroupStructs,
				m = c.comparisonShape,
				n = c.groupBy,
				o = c.height,
				p = c.hiddenSeries,
				q = c.highlights,
				r = c.labelFormatterFactory,
				s = c.order,
				t = c.overlap,
				u = c.threshold,
				v = c.width,
				w = c.x,
				x = c.y,
				y = [],
				z = [],
				A = [],
				B = [],
				C = {},
				D = s.filter(function(a) {
					return p == null || a.some(function(a) {
						return !p.has(a)
					})
				});
			l.forEach(function(c, g) {
				var h = c.classNames,
					l = c.data,
					p = c.rect;
				D.toIndexedSeq().forEach(function(c, s) {
					var E = 0,
						F = 0;
					c.toIndexedSeq().forEach(function(G, H) {
						var I = l[G].scale,
							J = l[G].value,
							K = J != null;
						K || (J = I.props.origin);
						F = t ? J : F + J;
						var L = b("CandelaConstants").PseudoClass.NONE;
						q && (L = j(q, G, l[n].value));
						var M = b("CandelaConstants").PseudoClass.NONE;
						t && (M = H ? b("CandelaConstants").PseudoClass.PRIMARY : b("CandelaConstants").PseudoClass.SECONDARY);
						var N = "";
						if (M === b("CandelaConstants").PseudoClass.SECONDARY) {
							var O;
							N = '[comparison-shape="' + ((O = m) != null ? O : a.getDefaultProps()[m]) + '"]'
						}
						O = b("CandelaConstants").PseudoClass.NONE;
						u && (F > u.get("value") ? O = b("CandelaConstants").PseudoClass.GREATER_THAN : F === u.get("value") ? O = b("CandelaConstants").PseudoClass.EQUAL_TO : O = b("CandelaConstants").PseudoClass.LESS_THAN);
						var P = b("CandelaConstants").PseudoClass.NONE;
						K || (P = b("CandelaConstants").PseudoClass.UNAVAILABLE);
						var Q = k(d.get(G).className),
							R = u ? k(u.get("className")) : b("immutable").Set();
						Q = h.union(Q).union(R);
						R = d.get(G).comparisonFor || G;
						Q = b("CandelaConstants").ShapeType.BAR + i(Q) + ('[series="' + R + '"]') + ('[alignment="' + f + '"]') + N + L + M + O + P;
						R = e.getStyle(Q);
						if (H === 0) {
							N = I.convert(I.props.origin);
							switch (f) {
								case b("CandelaConstants").Alignment.BOTTOM:
									E = Math.min(x + o, N);
									break;
								case b("CandelaConstants").Alignment.LEFT:
									E = Math.max(w, N);
									break;
								case b("CandelaConstants").Alignment.RIGHT:
									E = Math.min(w + v, N);
									break;
								case b("CandelaConstants").Alignment.TOP:
									E = Math.max(x, N);
									break
							}
						}
						L = u && u.get("flushToThreshold") ? I.convert(Math.max(u.get("value"), F)) : I.convert(F);
						O = a._computeBarRect(p, E, R, s, D.size, L, H);
						N = (P = {}, P[n] = babelHelpers["extends"]({}, l[n]), P[G] = babelHelpers["extends"]({}, l[G]), P);
						H = G + "-bar-" + g;
						if (m === b("CandelaConstants").ComparisonShape.CIRCLE && M === b("CandelaConstants").PseudoClass.SECONDARY) {
							P = G + "-circle-" + g;
							z.push(a._renderShape(b("CandelaConstants").ShapeType.POINT, N, P, O, Q, R, G))
						} else if (m === b("CandelaConstants").ComparisonShape.LINE && M === b("CandelaConstants").PseudoClass.SECONDARY) {
							P = G + "-line-" + g;
							A.push(a._renderShape(b("CandelaConstants").ShapeType.LINE, N, P, O, Q, R, G))
						} else y.push(a._renderShape(b("CandelaConstants").ShapeType.BAR, N, H, O, Q, R, G));
						if (G === c.last()) {
							M = Q + ">" + b("CandelaConstants").ShapeType.BAR_LABEL;
							P = e.getStyle(M);
							if (K && P.visibility !== "hidden") {
								N = a._computeLabelPoint(p, O, P);
								C[G] || (C[G] = r(I, G));
								B.push(a._renderLabel(O, H, N, M, P, C[G], l, G, n, J))
							}
						}
						t || (E = L)
					})
				})
			});
			c = y.concat.apply(y, z.concat(A));
			return g.jsxs(h, {
				children: [c, B]
			})
		}
	});
	a = f;
	e.exports = a
}), null);
__d("CandelaPanel.react", ["invariant", "CandelaConstants", "CandelaPureRenderMixin", "CandelaStyles", "CandelaUtils", "React", "ReactART", "Rectangle.art", "createReactClass_DEPRECATED", "isEmpty", "memoize", "prop-types"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h, i = b("React"),
		j = b("ReactART").Group,
		k = b("ReactART").Path,
		l = b("ReactART").Shape,
		m = b("CandelaConstants").Style,
		n = b("CandelaUtils").art.drawBorder,
		o = b("memoize")(function() {
			return b("CandelaStyles").getDefaultValues(m.BACKGROUND, m.BORDER, m.PADDING).toJS()
		});

	function p(a, c) {
		var d = {};
		if (!c || a.style !== c.style) {
			d.style = babelHelpers["extends"]({}, o());
			if (!(h || (h = b("isEmpty")))(a.style)) {
				var e = Object.assign.apply(Object, [{}].concat(Object.keys(a.style).map(function(c) {
					return b("CandelaStyles").get(c).normalize(a.style[c])
				})));
				Object.keys(e).forEach(function(a) {
					var b = e[a];
					b != null && (d.style[a] = b)
				})
			}
		}
		return d
	}
	c = b("createReactClass_DEPRECATED")({
		displayName: "CandelaPanel",
		mixins: [b("CandelaPureRenderMixin")],
		propTypes: {
			x: (a = b("prop-types")).number.isRequired,
			y: a.number.isRequired,
			height: a.oneOfType([a.number, a.string]).isRequired,
			width: a.oneOfType([a.number, a.string]).isRequired,
			top: a.element,
			bottom: a.element,
			left: a.element,
			right: a.element,
			center: a.oneOfType([a.array, a.element, a.object]),
			scales: a.object,
			series: a.object,
			style: a.shape(b("CandelaStyles").getPropTypes(m.BACKGROUND, m.BORDER, m.PADDING))
		},
		getDefaultProps: function() {
			return {
				height: 0,
				width: 0,
				x: 0,
				y: 0
			}
		},
		getInitialState: function() {
			return p(this.props)
		},
		UNSAFE_componentWillReceiveProps: function(a) {
			this.setState(p(a, this.props))
		},
		_computeChildDimensions: function() {
			var a = this.props,
				b = a.height,
				c = a.width,
				d = a.x;
			a = a.y;
			var e = this.state.style,
				f = e.borderBottomWidth,
				h = e.borderLeftWidth,
				i = e.borderRightWidth,
				j = e.borderTopWidth,
				k = e.paddingBottom,
				l = e.paddingLeft,
				m = e.paddingRight;
			e = e.paddingTop;
			typeof b === "number" || g(0, 4087);
			typeof c === "number" || g(0, 4088);
			b -= f + j + k + e;
			c -= h + i + l + m;
			d += h + l;
			a += j + e;
			return {
				height: b,
				width: c,
				x: d,
				y: a
			}
		},
		_renderRegions: function() {
			var a = this._computeChildDimensions(),
				b = {},
				c = this.props,
				d = c.top,
				e = c.bottom,
				f = c.left,
				h = c.right,
				k = c.scales;
			c = c.series;
			var l = this.props.center,
				m = {},
				n, o = {},
				p = {},
				q = {},
				r = a.x,
				s = r + a.width,
				t = a.y,
				u = t + a.height,
				v;
			d && (q.width = a.width, q.x = r, q.y = t, typeof d.props.height === "number" ? t += d.props.height : (v = parseFloat(d.props.height), q.height = v / 100 * a.height, t += q.height), d.props.scales || (q.scales = k), d.props.series || (q.series = c), b.top = i.cloneElement(d, q));
			e && (m.width = a.width, m.x = r, typeof e.props.height === "number" ? u -= e.props.height : (v = parseFloat(e.props.height), m.height = v / 100 * a.height, u -= m.height), e.props.scales || (m.scales = k), e.props.series || (m.series = c), m.y = u, b.bottom = i.cloneElement(e, m));
			f && (o.height = u - t, o.x = r, o.y = t, typeof f.props.width === "number" ? r += f.props.width : (v = parseFloat(f.props.width), o.width = v / 100 * a.width, r += o.width), f.props.scales || (o.scales = k), f.props.series || (o.series = c), b.left = i.cloneElement(f, o));
			h && (p.height = u - t, p.y = t, typeof h.props.width === "number" ? s -= h.props.width : (v = parseFloat(h.props.width), p.width = v / 100 * a.width, s -= p.width), h.props.scales || (p.scales = k), h.props.series || (p.series = c), p.x = s, b.right = i.cloneElement(h, p));
			d = this.props.children;
			d && (l && g(0, 4089), l = d);
			l && (n = {
				height: u - t,
				width: s - r,
				x: r,
				y: t
			}, b.center = i.Children.map(l, function(a) {
				return !a ? null : i.cloneElement(a, n)
			}), b.center = i.jsx(j, {
				children: b.center
			}));
			return i.jsxs(j, {
				children: [b.center, b.left, b.right, b.top, b.bottom]
			})
		},
		render: function() {
			var a = this.props,
				c = a.height,
				d = a.x,
				e = a.y;
			a = a.width;
			var f = this.state.style,
				h = f.backgroundColor,
				m = f.borderBottomColor,
				o = f.borderBottomStyle,
				p = f.borderBottomWidth,
				q = f.borderLeftColor,
				r = f.borderLeftStyle,
				s = f.borderLeftWidth,
				t = f.borderRightColor,
				u = f.borderRightStyle,
				v = f.borderRightWidth,
				w = f.borderTopColor,
				x = f.borderTopStyle;
			f = f.borderTopWidth;
			typeof c === "number" || g(0, 4087);
			typeof a === "number" || g(0, 4088);
			var y;
			h && (y = i.jsx(b("Rectangle.art"), {
				fill: h,
				height: c,
				width: a,
				x: d,
				y: e
			}));
			h = [];
			var z, A, B;
			f && (z = k(), A = {
				x: d,
				y: e + f / 2
			}, B = {
				x: d + a,
				y: e + f / 2
			}, n(z, x, f, A, B), h.push(i.jsx(l, {
				d: z,
				stroke: w,
				strokeCap: "butt",
				strokeWidth: f
			}, "borderTop")));
			v && (z = k(), A = {
				x: d + a - v / 2,
				y: e
			}, B = {
				x: d + a - v / 2,
				y: e + c
			}, n(z, u, v, A, B), h.push(i.jsx(l, {
				d: z,
				stroke: t,
				strokeCap: "butt",
				strokeWidth: v
			}, "borderRight")));
			p && (z = k(), A = {
				x: d,
				y: e + c - p / 2
			}, B = {
				x: d + a,
				y: e + c - p / 2
			}, n(z, o, p, A, B), h.push(i.jsx(l, {
				d: z,
				stroke: m,
				strokeCap: "butt",
				strokeWidth: p
			}, "borderBottom")));
			s && (z = k(), A = {
				x: d + p / 2,
				y: e
			}, B = {
				x: d + p / 2,
				y: e + c
			}, n(z, r, s, A, B), h.push(i.jsx(l, {
				d: z,
				stroke: q,
				strokeCap: "butt",
				strokeWidth: s
			}, "borderLeft")));
			return i.jsxs(j, {
				children: [y, h, this._renderRegions()]
			})
		}
	});
	e.exports = c
}), null);
__d("CandelaChartLayout.react", ["CandelaConstants", "CandelaGlobalThemeRegistry", "CandelaInteractiveRect.react", "CandelaPanel.react", "CandelaPureRenderMixin", "CandelaTheme", "React", "createReactClass_DEPRECATED", "getObjectValues", "prop-types"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React");
	c = (a = b("CandelaConstants")).Attribute;
	d = a.Placement;
	var h = a.ShapeType;
	f = a.Style;
	b("CandelaGlobalThemeRegistry").register({
		type: h.PLOT_AREA,
		attributes: [c.PLACEMENT],
		styles: [f.BACKGROUND, f.BORDER, f.PADDING]
	});
	c = b("createReactClass_DEPRECATED")({
		displayName: "CandelaChartLayout",
		mixins: [b("CandelaPureRenderMixin")],
		contextTypes: {
			theme: (a = b("prop-types")).instanceOf(b("CandelaTheme"))
		},
		propTypes: {
			height: a.number.isRequired,
			bottomXAxis: a.element,
			leftYAxis: a.element,
			plotArea: a.element.isRequired,
			placement: a.oneOf(b("getObjectValues")(d)),
			rightYAxis: a.element,
			topXAxis: a.element,
			width: a.number.isRequired,
			x: a.number.isRequired,
			y: a.number.isRequired
		},
		getDefaultProps: function() {
			return {
				height: 0,
				width: 0,
				x: 0,
				y: 0
			}
		},
		_handleShapeEvent: function(a, b) {
			b.target = a
		},
		_renderBottomPanel: function() {
			var a = this.props,
				c = a.bottomXAxis,
				d = a.leftYAxis;
			a = a.rightYAxis;
			var e = {};
			if (c) {
				d && (e.paddingLeft = d.props.width);
				a && (e.paddingRight = a.props.width);
				return g.jsx(b("CandelaPanel.react"), {
					center: c,
					height: c.props.height,
					style: e
				})
			}
			return null
		},
		_renderCenterPanel: function() {
			var a = this.props,
				c = a.placement;
			a = a.plotArea;
			var d = this.context.theme;
			d = d.getStyle('plotarea[placement="' + c + '"]');
			c = {
				shapeType: h.PLOT_AREA,
				style: d
			};
			c = this._handleShapeEvent.bind(this, c);
			return g.jsxs(b("CandelaPanel.react"), {
				style: d,
				children: [g.jsx(b("CandelaInteractiveRect.react"), {
					onShapeEnter: c,
					onShapeLeave: c
				}), a]
			})
		},
		_renderTopPanel: function() {
			var a = this.props,
				c = a.leftYAxis,
				d = a.rightYAxis;
			a = a.topXAxis;
			var e = {};
			if (a) {
				c && (e.paddingLeft = c.props.width);
				d && (e.paddingRight = d.props.width);
				return g.jsx(b("CandelaPanel.react"), {
					center: a,
					height: a.props.height,
					style: e
				})
			}
			return null
		},
		render: function() {
			var a = this.props,
				c = a.height,
				d = a.leftYAxis,
				e = a.rightYAxis,
				f = a.width,
				h = a.x;
			a = a.y;
			var i = this._renderBottomPanel(),
				j = this._renderCenterPanel(),
				k = this._renderTopPanel();
			return g.jsx(b("CandelaPanel.react"), {
				height: c,
				width: f,
				x: h,
				y: a,
				bottom: i,
				left: d,
				center: j,
				right: e,
				top: k
			})
		}
	});
	e.exports = c
}), null);
__d("CandelaRegionManagerDebugger.react", ["CandelaPlatformConstants", "CandelaRegionManager", "React", "ReactART", "Rectangle.art", "prop-types"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = b("CandelaPlatformConstants").DEFAULT_FONT_FAMILY,
		i = b("ReactART").Group,
		j = b("ReactART").Text;
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var b, c;
			for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
			return (b = c = a.call.apply(a, [this].concat(e)) || this, c.state = {
				regions: new Map()
			}, c.$1 = function() {
				var a = c.context.regionManager;
				a = a.getRegions();
				c.setState({
					regions: a
				})
			}, b) || babelHelpers.assertThisInitialized(c)
		}
		var d = c.prototype;
		d.componentDidMount = function() {
			var a = this,
				b = this.context.regionManager;
			b.addListener(function() {
				return a.$1()
			});
			this.$1()
		};
		d.render = function() {
			var a = this.state.regions,
				c = [];
			a.forEach(function(a, d) {
				a.forEach(function(a, e) {
					var f = a.getBoundingRect();
					c.push(g.jsxs(i, {
						children: [g.jsx(b("Rectangle.art"), babelHelpers["extends"]({
							stroke: "purple"
						}, f), d + "-debug-rect-" + e), g.jsx(j, {
							alignment: "right",
							x: f.x + f.width,
							y: f.y + f.height,
							fill: "purple",
							font: {
								fontSize: 11,
								fontFamily: h
							},
							children: a.getUID()
						}, d + "-debug-text-" + e)]
					}, d + "-debug-group-" + e))
				})
			});
			return g.jsx(i, {
				children: c.length ? c : null
			})
		};
		return c
	}(g.Component);
	a.contextTypes = {
		regionManager: b("prop-types").instanceOf(b("CandelaRegionManager"))
	};
	e.exports = a
}), null);










__d("InsightsHorizontalBarChart.react", ["invariant", "CandelaAxis.react", "CandelaBarGroups.react", "CandelaBars.react", "CandelaChartLayout.react", "CandelaChartSurface.react", "CandelaConstants", "CandelaGridLines.react", "CandelaGroupScaleBuilder", "CandelaLineAnnotations.react", "CandelaPanel.react", "CandelaReferences.react", "CandelaStackScaleBuilder", "CandelaStructs", "CandelaTheme", "InsightsFormatterFactories", "React", "immutable", "prop-types"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("React"),
		i = (a = b("immutable")).List,
		j = a.Map,
		k = a.OrderedSet,
		l = a.Set,
		m = (c = b("CandelaConstants")).Alignment,
		n = c.RenderAs,
		o = c.ShapeType,
		p = c.Visibility;
	d = b("CandelaStructs").Threshold;

	function q(a) {
		var b = a.annotations,
			c = a.data,
			d = a.plotX,
			e = a.plotY,
			f = a.references;
		a = a.schema;
		e = [e].concat(d);
		var g = [],
			h = [];
		b.forEach(function(a, b) {
			var c, d = a.renderAs,
				e = a.variableName,
				f = a.value;
			g.push((c = {}, c[e] = f, c));
			e = Array.isArray(d);
			f = babelHelpers["extends"]({}, a, {
				index: b
			});
			(d === n.LINE || e && d.indexOf(n.LINE) !== -1) && h.push(f)
		});
		f && f.forEach(function(a) {
			var b;
			g.push((b = {}, b[a.seriesName] = a.value, b))
		});
		return {
			auxiliaryData: k(g),
			data: k(c),
			lineAnnotations: i(h),
			scales: l(e),
			schema: j(a)
		}
	}
	f = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.render = function() {
			var a = this.props,
				c = a.alignment,
				d = a.anchorRect,
				e = a.axisMarkFormatterFactory,
				f = a.axisSubMarkFormatterFactory,
				i = a.barLabelFormatterFactory,
				j = a.barLabelComponent,
				n = a.height,
				r = a.highlights,
				s = a.interactive,
				t = a.onClick,
				u = a.onDrag,
				v = a.onDragEnd,
				w = a.onDragStart,
				x = a.onLongPress,
				y = a.onTouchEnd,
				z = a.onTouchEnter,
				A = a.onTouchLeave,
				B = a.onTouchMove,
				C = a.onTouchStart,
				aa = a.onMouseDown,
				ba = a.onMouseEnter,
				ca = a.onMouseLeave,
				da = a.onMouseMove,
				ea = a.onMouseOver,
				fa = a.onMouseOut,
				ga = a.onMouseUp,
				D = a.overlap,
				E = a.plotX,
				F = a.plotY,
				G = a.references,
				ha = a.selectedAnnotationIndex,
				H = a.theme,
				I = a.threshold;
			a = a.width;
			var J = q(this.props),
				K = J.lineAnnotations,
				ia = J.auxiliaryData,
				ja = J.data,
				ka = J.scales;
			J = J.schema;
			if (E.length > 2) {
				E.every(function(a) {
					return a instanceof b("CandelaStackScaleBuilder")
				}) || g(0, 2720);
				var L = E[0].getFrom(),
					M = E[0].getTo();
				L != null && M != null || g(0, 2721);
				E.every(function(a) {
					return a.getFrom() === L && a.getTo() === M
				}) || g(0, 2722)
			}
			I && (E.length === 1 || g(0, 2723), E[0].getSeriesNames().length === 1 || E[0] instanceof b("CandelaGroupScaleBuilder") || g(0, 2724));
			var N = E[0] instanceof b("CandelaGroupScaleBuilder"),
				O = F.getTitle(),
				la = E[0].getTitle(),
				ma = E.length > 1 ? E[1].getTitle() : null,
				P = E[0].getSeriesNames(),
				Q = E.length > 1 ? E[1].getSeriesNames() : [],
				R;
			D ? (N || g(0, 2725), R = k().withMutations(function(a) {
				E.forEach(function(b) {
					b = b.getSeriesNames().slice();
					while (b.length) a.add(k(b.splice(0, 2)))
				})
			})) : R = N ? k(E.map(function(a) {
				return k(a.getSeriesNames().map(function(a) {
					return k([a])
				}))
			})).flatten(!0) : k(E.map(function(a) {
				return k(a.getSeriesNames())
			}));
			N = F.getSeriesNames();
			F = H.getStyle('axis[orientation="horizontal"][alignment="bottom"]');
			var S = H.getStyle('axis[orientation="vertical"][alignment="left"]'),
				T = H.getStyle('axis[orientation="vertical"][alignment="right"]'),
				U = H.getStyle('axis[orientation="horizontal"][alignment="top"]'),
				V;
			F.visibility === "visible" && (V = h.jsx(b("CandelaAxis.react"), {
				alignment: m.BOTTOM,
				height: F.height,
				invert: c === m.RIGHT,
				markFormatterFactory: e,
				plot: P[0],
				subMarkFormatterFactory: f,
				title: la
			}));
			var W;
			c === m.LEFT && S.visibility === "visible" && (W = h.jsx(b("CandelaAxis.react"), {
				alignment: m.LEFT,
				invert: !0,
				markFormatterFactory: e,
				plot: N[0],
				subMarkFormatterFactory: f,
				title: O,
				width: S.width
			}));
			var X;
			G && H.getStyle("reference").visibility === "visible" && (X = h.jsx(b("CandelaReferences.react"), {
				alignment: c,
				plotX: R.flatten(),
				plotY: l(N),
				references: G
			}));
			var Y;
			K.size && H.getStyle(o.LINE_ANNOTATION).visibility === p.VISIBLE && (Y = h.jsx(b("CandelaLineAnnotations.react"), {
				annotations: K,
				selectedIndex: ha
			}));
			F = h.jsxs(b("CandelaPanel.react"), {
				children: [h.jsx(b("CandelaGridLines.react"), {
					invert: c === m.RIGHT,
					plotX: P[0]
				}), X, h.jsx(b("CandelaBarGroups.react"), {
					alignment: c,
					groupBy: N[0],
					highlights: r,
					hoverThreshold: 1,
					order: R,
					overlap: D,
					children: h.jsx(b("CandelaBars.react"), {
						labelComponent: j,
						labelFormatterFactory: i,
						threshold: I
					})
				}), Y]
			});
			var Z;
			c === m.RIGHT && T.visibility === "visible" && (Z = h.jsx(b("CandelaAxis.react"), {
				alignment: m.RIGHT,
				invert: !0,
				markFormatterFactory: e,
				plot: N[0],
				subMarkFormatterFactory: f,
				title: O,
				width: T.width
			}));
			var $;
			U.visibility === "visible" && ($ = h.jsx(b("CandelaAxis.react"), {
				alignment: m.TOP,
				height: U.height,
				invert: c === m.RIGHT,
				markFormatterFactory: e,
				plot: Q.length ? Q[0] : P[0],
				subMarkFormatterFactory: f,
				title: ma
			}));
			return h.jsx(b("CandelaChartSurface.react"), {
				anchorRect: d,
				auxiliaryData: ia,
				data: ja,
				height: n,
				interactive: s,
				onClick: t,
				onDrag: u,
				onDragEnd: v,
				onDragStart: w,
				onLongPress: x,
				onMouseDown: aa,
				onMouseEnter: ba,
				onMouseLeave: ca,
				onMouseMove: da,
				onMouseOut: fa,
				onMouseOver: ea,
				onMouseUp: ga,
				onTouchEnd: y,
				onTouchEnter: z,
				onTouchLeave: A,
				onTouchMove: B,
				onTouchStart: C,
				scales: ka,
				schema: J,
				theme: H,
				width: a,
				children: h.jsx(b("CandelaChartLayout.react"), {
					bottomXAxis: V,
					leftYAxis: W,
					plotArea: F,
					rightYAxis: Z,
					topXAxis: $
				})
			})
		};
		return c
	}(h.PureComponent);
	f.propTypes = {
		alignment: (a = b("prop-types")).oneOf([m.LEFT, m.RIGHT]).isRequired,
		annotations: a.instanceOf(i),
		axisMarkFormatterFactory: a.func,
		axisSubMarkFormatterFactory: a.func,
		barLabelFormatterFactory: a.func,
		barLabelComponent: a.element,
		data: a.array.isRequired,
		height: a.number.isRequired,
		interactive: a.bool,
		highlights: a.instanceOf(l),
		onClick: a.func,
		onDrag: a.func,
		onDragEnd: a.func,
		onDragStart: a.func,
		onLongPress: a.func,
		onTouchEnd: a.func,
		onTouchEnter: a.func,
		onTouchLeave: a.func,
		onTouchMove: a.func,
		onTouchStart: a.func,
		onMouseDown: a.func,
		onMouseEnter: a.func,
		onMouseLeave: a.func,
		onMouseMove: a.func,
		onMouseOver: a.func,
		onMouseOut: a.func,
		onMouseUp: a.func,
		overlap: a.bool,
		plotX: a.arrayOf(a.oneOfType([a.instanceOf(b("CandelaGroupScaleBuilder")), a.instanceOf(b("CandelaStackScaleBuilder"))])).isRequired,
		plotY: a.instanceOf(b("CandelaGroupScaleBuilder")).isRequired,
		references: a.instanceOf(l),
		schema: a.object.isRequired,
		selectedAnnotationIndex: a.number,
		theme: a.instanceOf(b("CandelaTheme")).isRequired,
		threshold: a.instanceOf(d),
		width: a.number.isRequired
	};
	f.defaultProps = {
		annotations: i(),
		alignment: m.LEFT,
		axisMarkFormatterFactory: b("InsightsFormatterFactories").axisMarkFormatterFactory,
		axisSubMarkFormatterFactory: b("InsightsFormatterFactories").axisSubMarkFormatterFactory,
		barLabelFormatterFactory: b("InsightsFormatterFactories").barLabelFormatterFactory
	};
	e.exports = f
}), null);
__d("InsightsThemeUtil", ["invariant", "CandelaStyleSheet", "immutable", "isEmpty"], (function(a, b, c, d, e, f, g) {
	"use strict";
	f.updateThemeFromProps = a;
	var h;
	b("immutable").Map;
	b("immutable").OrderedMap;

	function a(a, c) {
		var d = c.autoColors,
			e = c.colors,
			f = c.elements,
			i = c.styleSheet;
		c = c.styles;
		var j = {};
		d != null && (j.autoColors = d);
		e != null && (j.colors = e);
		f != null && (j.elements = f);
		i != null && (j.styleSheet = i);
		c != null && (j.styleSheet && g(0, 5545), j.styleSheet = b("CandelaStyleSheet").fromJS(c));
		return (h || (h = b("isEmpty")))(j) ? a : a.mergeDeep(j)
	}
}), null);
__d("InsightsThemeableChartMixin", ["invariant", "CandelaStyleSheet", "CandelaTheme", "InsightsThemeUtil", "React", "immutable", "prop-types"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("InsightsThemeUtil").updateThemeFromProps;
	b("React");
	var i = b("immutable").Map,
		j = b("immutable").OrderedMap;
	a = function(a) {
		typeof a === "function" || g(0, 5546);
		return {
			propTypes: {
				autoColors: b("prop-types").instanceOf(i),
				colors: b("prop-types").instanceOf(j),
				elements: b("prop-types").instanceOf(i),
				styleSheet: b("prop-types").instanceOf(b("CandelaStyleSheet")),
				styles: b("prop-types").object
			},
			getInitialState: function() {
				var c = a();
				this.constructor.getComponentTheming && (c = c.mergeDeep(b("CandelaTheme").fromJS(this.constructor.getComponentTheming())));
				c = h(c, this.props);
				return {
					theme: c
				}
			},
			UNSAFE_componentWillReceiveProps: function(a) {
				a = h(this.state.theme, a);
				a !== this.state.theme && this.setState({
					theme: a
				})
			}
		}
	};
	e.exports = a
}), null);
__d("BUIInsightsHorizontalBarChart.react", ["InsightsHorizontalBarChart.react", "InsightsThemeableChartMixin", "React", "ReactComponentWithPureRenderMixin", "createReactClass_DEPRECATED", "BUIInsightsTheme"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React");
	a = b("createReactClass_DEPRECATED")({
		displayName: "BUIInsightsHorizontalBarChart",
		mixins: [b("InsightsThemeableChartMixin")(function() {
			return b("BUIInsightsTheme")
		}), b("ReactComponentWithPureRenderMixin")],
		statics: {
			getComponentTheming: function() {
				return {
					styleSheet: {
						'axis[alignment="top"]': {
							visibility: "hidden"
						},
						bargroup: {
							margin: 5
						},
						barlabel: {
							padding: "0 5 5"
						}
					}
				}
			}
		},
		render: function() {
			return g.jsx(b("InsightsHorizontalBarChart.react"), babelHelpers["extends"]({}, this.props, {
				theme: this.state.theme
			}))
		}
	});
	c = a;
	e.exports = c
}), null);
__d("BUIInsightsHoverCardContextualDialogLayer.react", ["cx", "React", "ReactAbstractContextualDialog", "ReactLayer"], (function(a, b, c, d, e, f, g) {
	"use strict";
	b("React");
	a = {
		offset: 12,
		length: 16
	};
	c = b("ReactLayer").createClass(b("ReactAbstractContextualDialog").createSpec({
		displayName: "BUIInsightsHoverCard",
		theme: {
			wrapperClassName: "_2m8",
			arrowDimensions: a
		}
	}));
	c.arrowDimensions = a;
	d = c;
	e.exports = d
}), null);
__d("BUIInsightsHoverCard.react", ["cx", "BUIInsightsHoverCardContextualDialogLayer.react", "InsightsHoverCard.react", "React", "immutable", "joinClasses"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("React");
	b("immutable").OrderedSet;
	a = b("InsightsHoverCard.react").propTypes;
	a.contextualDialogLayer;
	c = babelHelpers.objectWithoutPropertiesLoose(a, ["contextualDialogLayer"]);
	d = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.render = function() {
			var a = b("joinClasses")("_2m9", this.props.className),
				c = this.props,
				d = c.items,
				e = c.theme;
			c = d.map(function(a) {
				var b = e.getAutoColorForSeries(a.key);
				if (a.richLabel || !b) return a;
				b = h.jsx("span", {
					style: {
						color: b
					},
					children: a.label
				});
				return babelHelpers["extends"]({}, a, {
					richLabel: b
				})
			});
			d = void 0;
			var f = this.props,
				g = f.auxiliaryItems,
				i = f.auxiliaryItemsFactory,
				j = f.data;
			f = f.closestSeriesName;
			i != null && j != null && (d = i(j, f));
			return h.jsx(b("InsightsHoverCard.react"), babelHelpers["extends"]({}, this.props, {
				auxiliaryItems: (j = (i = d) != null ? i : g) != null ? j : void 0,
				className: a,
				contextualDialogLayer: b("BUIInsightsHoverCardContextualDialogLayer.react"),
				items: c
			}))
		};
		return c
	}(h.Component);
	e.exports = d;
	d.propTypes = babelHelpers["extends"]({}, c)
}), null);
__d("BUIInsightsHoverCardChart.react", ["BUIInsightsHoverCard.react", "BUIInsightsTheme", "InsightsChartWithHoverCard.react", "React", "immutable", "prop-types"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React");
	a = b("immutable").OrderedSet;
	c = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.render = function() {
			var a = this.props,
				c = a.auxiliaryItems,
				d = a.auxiliaryItemsFactory,
				e = a.children,
				f = a.hoverCardClassName,
				h = a.displayAllSeries,
				i = a.hoverCardBehaviors,
				j = a.hoverCardPosition,
				k = a.isHoverCardActionable,
				l = a.onHoverCardToggle;
			a = babelHelpers.objectWithoutPropertiesLoose(a, ["auxiliaryItems", "auxiliaryItemsFactory", "children", "hoverCardClassName", "displayAllSeries", "hoverCardBehaviors", "hoverCardPosition", "isHoverCardActionable", "onHoverCardToggle"]);
			return g.jsx(b("InsightsChartWithHoverCard.react"), babelHelpers["extends"]({}, a, {
				chart: e,
				position: j,
				theme: b("BUIInsightsTheme"),
				children: g.jsx(b("BUIInsightsHoverCard.react"), {
					auxiliaryItems: c,
					auxiliaryItemsFactory: d,
					behaviors: i,
					className: f,
					displayAllSeries: h,
					isActionable: k,
					onToggle: l
				})
			}))
		};
		return c
	}(g.PureComponent);
	e.exports = c;
	c.propTypes = {
		auxiliaryItems: (d = b("prop-types")).instanceOf(a),
		auxiliaryItemsFactory: d.func,
		children: d.node,
		displayAllSeries: d.bool,
		formatterFactory: d.func,
		hoverCardBehaviors: d.object,
		hoverCardClassName: d.string,
		hoverCardPosition: d.oneOf(["above", "below", "left", "right"]),
		hoverHideDelay: d.number,
		isHoverCardActionable: d.bool,
		items: d.oneOfType([d.instanceOf(a), d.func]).isRequired,
		onHoverCardToggle: d.func,
		targetShapeTypes: b("InsightsChartWithHoverCard.react").propTypes.targetShapeTypes,
		title: d.node,
		titleElementGetter: d.func,
		titleKey: d.string
	}
}), null);
__d("BUIInsightsBaseLegend.react", ["cx", "React", "joinClasses", "prop-types"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("React");
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.render = function() {
			var a = this.props,
				c = a.children,
				d = a.size,
				e = a.title,
				f = a.titleSize;
			a = a.className;
			return h.cloneElement(h.Children.only(c), {
				className: b("joinClasses")("_5av0", a, d),
				title: e != null ? h.jsx("div", {
					className: b("joinClasses")("_5av1", f),
					children: e
				}) : void 0
			})
		};
		return c
	}(h.Component);
	e.exports = a;
	a.propTypes = {
		children: (c = b("prop-types")).element,
		className: c.string,
		listLayout: c.oneOf(["horizontal", "vertical"]),
		size: c.oneOf(["normal", "large"]),
		title: c.any,
		titleSize: c.oneOf(["small", "normal", "large"])
	};
	a.defaultProps = {
		size: "normal",
		titleSize: "small"
	}
}), null);
__d("BUIInsightsLegend.react", ["cx", "BUIInsightsBaseLegend.react", "InsightsLegend.react", "React", "joinClasses"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("React");
	a = b("BUIInsightsBaseLegend.react").propTypes;
	a.children;
	c = babelHelpers.objectWithoutPropertiesLoose(a, ["children"]);
	d = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.render = function() {
			var a = this.props,
				c = a.size,
				d = a.title,
				e = a.titleSize,
				f = a.className;
			a = babelHelpers.objectWithoutPropertiesLoose(a, ["size", "title", "titleSize", "className"]);
			return h.jsx(b("BUIInsightsBaseLegend.react"), {
				className: b("joinClasses")(f, "_3t76"),
				size: c,
				title: d,
				titleSize: e,
				children: h.jsx(b("InsightsLegend.react"), babelHelpers["extends"]({}, a))
			})
		};
		return c
	}(h.Component);
	e.exports = d;
	d.propTypes = babelHelpers["extends"]({}, c, b("InsightsLegend.react").propTypes)
}), null);
















__d("InsightsLineAreaChart.react", ["invariant", "CandelaAnchorAnnotations.react", "CandelaAreas.react", "CandelaAxis.react", "CandelaChartLayout.react", "CandelaChartSurface.react", "CandelaConstants", "CandelaDoubleCircularPoint.react", "CandelaGapGridLines.react", "CandelaGaps.react", "CandelaGridLines.react", "CandelaGroupScaleBuilder", "CandelaGuideLine.react", "CandelaGuides.react", "CandelaInteractivePulse.react", "CandelaLineAnnotations.react", "CandelaLines.react", "CandelaMarkerAnnotations.react", "CandelaPanel.react", "CandelaPoints.react", "CandelaReferences.react", "CandelaStackScaleBuilder", "CandelaStructs", "CandelaTheme", "CandelaZoneGridLines.react", "CandelaZones.react", "InsightsFormatterFactories", "React", "getObjectValues", "immutable", "prop-types"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("React"),
		i = (a = b("CandelaConstants")).Alignment;
	c = a.GuideXValueAlignment;
	d = a.MissingDataCondition;
	var j = a.NormalizedOutput,
		k = a.Orientation,
		l = a.Placement,
		m = a.RenderAs,
		n = a.Visibility,
		o = (f = b("immutable")).List,
		p = f.Map,
		q = f.OrderedSet,
		r = f.Set;
	a = b("CandelaStructs").Threshold;
	b("CandelaStructs").Zone;
	var s = (f = b("prop-types")).oneOfType([f.instanceOf(b("CandelaGroupScaleBuilder")), f.instanceOf(b("CandelaStackScaleBuilder"))]);

	function t(a) {
		var b = a.annotations,
			c = a.data,
			d = a.plotX,
			e = a.plotY,
			f = a.references;
		a = a.schema;
		var g = [],
			h = [],
			i = [],
			k = [],
			l = [];
		e = e.map(function(a) {
			return a.getNormalizedOutputWhenNoExtent() === void 0 ? a.normalizedOutputWhenNoExtent(j.MID) : a
		}).concat([d]);
		b.forEach(function(a, b) {
			var c, d = a.renderAs,
				e = a.variableName,
				f = a.value;
			l.push((c = {}, c[e] = f, c));
			e = Array.isArray(d);
			f = babelHelpers["extends"]({}, a, {
				index: b
			});
			(d === m.ANCHOR || e && d.indexOf(m.ANCHOR) !== -1) && g.push(f);
			(d === m.LINE || e && d.indexOf(m.LINE) !== -1) && h.push(f);
			(d === m.MARKER || e && d.indexOf(m.MARKER) !== -1) && i.push(f);
			(d === m.PULSE || e && d.indexOf(m.PULSE) !== -1) && k.push(f)
		});
		f && f.forEach(function(a) {
			var b;
			l.push((b = {}, b[a.seriesName] = a.value, b))
		});
		return {
			anchorAnnotations: o(g),
			auxiliaryData: q(l),
			data: q(c),
			lineAnnotations: o(h),
			markerAnnotations: o(i),
			pulseAnnotations: o(k),
			scales: r(e),
			schema: p(a)
		}
	}
	var u = function(c) {
		babelHelpers.inheritsLoose(a, c);

		function a() {
			var a, b;
			for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
			return (a = b = c.call.apply(c, [this].concat(e)) || this, b.state = t(b.props), a) || babelHelpers.assertThisInitialized(b)
		}
		var d = a.prototype;
		d.UNSAFE_componentWillReceiveProps = function(a) {
			this.setState(t(a))
		};
		d.$1 = function() {
			var a = this.props,
				c = a.axisMarkFormatterFactory,
				d = a.axisSubMarkFormatterFactory,
				e = a.plotX,
				f = a.theme,
				g = a.useDualIndenpendentAxes;
			a = a.xAxisAlignment;
			var j = e && e.getSeriesNames()[0];
			f = f.getStyle('axis[orientation="horizontal"][alignment="bottom"]');
			this.props.xAxisHeight && (f.height = this.props.xAxisHeight);
			e = e && e.getTitle();
			return (a === i.BOTTOM || g) && j && f.visibility === n.VISIBLE ? h.jsx(b("CandelaAxis.react"), {
				alignment: i.BOTTOM,
				height: f.height,
				markFormatterFactory: c,
				plot: j,
				subMarkFormatterFactory: d,
				title: e
			}) : null
		};
		d.$2 = function() {
			var a = this.props,
				c = a.axisMarkFormatterFactory,
				d = a.axisSubMarkFormatterFactory,
				e = a.plotY,
				f = a.theme;
			a = a.yAxisAlignment;
			a = a === i.LEFT ? 0 : 1;
			var g = e[a] && e[a].getSeriesNames()[0];
			f = f.getStyle('axis[orientation="vertical"][alignment="left"]');
			e = e[a] && e[a].getTitle();
			return g && f.visibility === n.VISIBLE ? h.jsx(b("CandelaAxis.react"), {
				alignment: i.LEFT,
				markFormatterFactory: c,
				orientation: k.VERTICAL,
				plot: g,
				subMarkFormatterFactory: d,
				title: e,
				width: f.width
			}) : null
		};
		d.$3 = function() {
			var a = this.props,
				c = a.highlights,
				d = a.includeNullValueInEvent,
				e = a.markerElement,
				f = a.minDensityThreshold,
				j = a.missingDataCondition,
				k = a.plotX,
				l = a.plotY,
				o = a.references,
				p = a.renderHighlightsOnTop,
				s = a.selectedAnnotationIndex,
				t = a.surfaceMouseOutTimeout,
				u = a.theme,
				v = a.threshold;
			a = a.zones;
			var w = this.state,
				x = w.lineAnnotations,
				y = w.markerAnnotations,
				z = w.schema;
			w = w.pulseAnnotations;
			v && (l.length === 1 || g(0, 3635), l[0].getSeriesNames().length === 1 || l[0] instanceof b("CandelaGroupScaleBuilder") || g(0, 3636));
			k = k && k.getSeriesNames()[0];
			var A = r([k]),
				B = c ? c.map(function(a) {
					return a.dependentSeriesName
				}) : r(),
				C = [],
				D = [];
			l.forEach(function(a) {
				var c = a.getSeriesNames().slice();
				B.size && p && c.sort(function(a) {
					return Number(B.has(a))
				});
				if (a instanceof b("CandelaStackScaleBuilder")) {
					a = z.get(c[0]);
					var d = a.renderAs;
					c.every(function(a) {
						return z.get(a).renderAs === d
					}) || g(0, 4084);
					a = d === m.AREA ? C : D;
					a.push(q(c))
				} else c.forEach(function(a) {
					var b = z.get(a);
					b = b.renderAs;
					b = b === m.AREA ? C : D;
					b.push(q([a]))
				})
			});
			var E = q(C.concat(D)),
				F, G, H, I, J, K, L, M, N, O, P, Q;
			C.length && (F = h.jsxs(b("CandelaPanel.react"), {
				children: [h.jsx(b("CandelaAreas.react"), {
					highlights: c,
					plotX: k,
					plotY: q(C),
					threshold: v
				}), h.jsx(b("CandelaLines.react"), {
					highlights: c,
					plotX: k,
					plotY: q(C),
					threshold: v
				})]
			}));
			D.length && (H = h.jsx(b("CandelaLines.react"), {
				highlights: c,
				plotX: k,
				plotY: q(D),
				threshold: v
			}));
			a && u.getStyle("zones").visibility === n.VISIBLE && (P = h.jsx(b("CandelaZones.react"), {
				zones: a
			}), Q = h.jsx(b("CandelaZoneGridLines.react"), {
				zones: a
			}));
			x.size && u.getStyle("annotationline").visibility === n.VISIBLE && (G = h.jsx(b("CandelaLineAnnotations.react"), {
				annotations: x,
				selectedIndex: s
			}));
			y.size && u.getStyle("annotationmarker").visibility === n.VISIBLE && (I = h.jsx(b("CandelaMarkerAnnotations.react"), babelHelpers["extends"]({
				annotations: y,
				plotX: k,
				plotY: E
			}, e ? {
				markerElement: e
			} : {})));
			w.size && u.getStyle("pulsemarker").visibility === n.VISIBLE && (J = h.jsx(b("CandelaMarkerAnnotations.react"), {
				annotations: w,
				markerElement: b("CandelaInteractivePulse.react"),
				plotX: k,
				plotY: E
			}));
			u.getStyle("gap").visibility === n.VISIBLE && (K = h.jsx(b("CandelaGaps.react"), {
				missingDataCondition: j,
				plotX: A,
				plotY: E
			}), L = h.jsx(b("CandelaGapGridLines.react"), {
				missingDataCondition: j,
				plotX: A,
				plotY: E
			}));
			u.getStyle("guide").visibility === n.VISIBLE && (M = h.jsx(b("CandelaGuides.react"), {
				guideX: h.jsx(b("CandelaGuideLine.react"), {}),
				guideXValueAlignment: this.props.guideXValueAlignment,
				guideY: h.jsx(b("CandelaDoubleCircularPoint.react"), {}),
				includeNullValueInEvent: d,
				onHide: this.props.onGuidesHide,
				plotX: k,
				plotY: E,
				surfaceMouseOutTimeout: t,
				threshold: v
			}));
			u.getStyle("point").visibility === n.VISIBLE && (N = h.jsx(b("CandelaPoints.react"), {
				minDensityThreshold: f,
				plotX: k,
				plotY: E
			}));
			l = o && o.filter(function(a) {
				return A.contains(a.seriesName) || E.flatten().contains(a.seriesName)
			});
			l && u.getStyle("reference").visibility === n.VISIBLE && (O = h.jsx(b("CandelaReferences.react"), {
				alignment: i.BOTTOM,
				plotX: A,
				plotY: E.flatten(),
				references: l
			}));
			return h.jsxs(b("CandelaPanel.react"), {
				children: [P, K, h.jsx(b("CandelaGridLines.react"), {
					plotX: k,
					plotY: E.first().first()
				}), Q, L, O, F, H, N, G, I, J, M]
			})
		};
		d.$4 = function() {
			var a = this.props,
				c = a.axisMarkFormatterFactory,
				d = a.axisSubMarkFormatterFactory,
				e = a.plotY,
				f = a.theme;
			a = a.yAxisAlignment;
			a = a === i.LEFT ? 1 : 0;
			var g = e[a] && e[a].getSeriesNames()[0];
			f = f.getStyle('axis[orientation="vertical"][alignment="right"]');
			e = e[a] && e[a].getTitle();
			return g && f.visibility === n.VISIBLE ? h.jsx(b("CandelaAxis.react"), {
				alignment: i.RIGHT,
				markFormatterFactory: c,
				orientation: k.VERTICAL,
				plot: g,
				subMarkFormatterFactory: d,
				title: e,
				width: f.width
			}) : null
		};
		d.$5 = function() {
			var a = this.props,
				c = a.axisMarkFormatterFactory,
				d = a.axisSubMarkFormatterFactory,
				e = a.plotX,
				f = a.selectedAnnotationIndex,
				j = a.theme,
				k = a.useDualIndenpendentAxes;
			a = a.xAxisAlignment;
			var m = this.state.anchorAnnotations,
				o = e && e.getSeriesNames()[0],
				p = j.getStyle('axis[orientation="horizontal"][alignment="top"]');
			e = e && e.getTitle();
			a = (a === i.TOP || k) && o;
			a && m && m.size && g(0, 5262);
			if (m && m.size) {
				k = j.getStyle("annotationanchor");
				j = k.radius * 2 + k.strokeWidth;
				return h.jsx(b("CandelaPanel.react"), {
					height: j,
					children: h.jsx(b("CandelaAnchorAnnotations.react"), {
						annotations: m,
						placement: l.TOP,
						selectedIndex: f
					})
				})
			}
			return a && p.visibility === n.VISIBLE ? h.jsx(b("CandelaAxis.react"), {
				alignment: i.TOP,
				height: p.height,
				markFormatterFactory: c,
				plot: o,
				subMarkFormatterFactory: d,
				title: e
			}) : null
		};
		d.render = function() {
			var a = this.props,
				c = a.anchorRect,
				d = a.dragPreventDefault,
				e = a.height,
				f = a.interactive,
				g = a.longPressTimeout,
				i = a.onClick,
				j = a.onDrag,
				k = a.onDragEnd,
				l = a.onDragStart,
				m = a.onLongPress,
				n = a.onTouchEnd,
				o = a.onTouchEnter,
				p = a.onTouchLeave,
				q = a.onTouchMove,
				r = a.onTouchStart,
				s = a.onMouseDown,
				t = a.onMouseEnter,
				u = a.onMouseLeave,
				v = a.onMouseMove,
				w = a.onMouseOver,
				x = a.onMouseOut,
				y = a.onMouseUp,
				z = a.theme;
			a = a.width;
			var A = this.state,
				B = A.auxiliaryData,
				C = A.data,
				D = A.scales;
			A = A.schema;
			var E = this.$1(),
				F = this.$2(),
				G = this.$3(),
				H = this.$4(),
				I = this.$5();
			return h.jsx(b("CandelaChartSurface.react"), {
				anchorRect: c,
				auxiliaryData: B,
				data: C,
				dragPreventDefault: d,
				height: e,
				interactive: f,
				longPressTimeout: g,
				onClick: i,
				onDrag: j,
				onDragEnd: k,
				onDragStart: l,
				onLongPress: m,
				onMouseDown: s,
				onMouseEnter: t,
				onMouseLeave: u,
				onMouseMove: v,
				onMouseOut: x,
				onMouseOver: w,
				onMouseUp: y,
				onTouchEnd: n,
				onTouchEnter: o,
				onTouchLeave: p,
				onTouchMove: q,
				onTouchStart: r,
				scales: D,
				schema: A,
				theme: z,
				width: a,
				children: h.jsx(b("CandelaChartLayout.react"), {
					bottomXAxis: E,
					leftYAxis: F,
					plotArea: G,
					rightYAxis: H,
					topXAxis: I
				})
			})
		};
		return a
	}(h.PureComponent);
	u.propTypes = {
		guideXValueAlignment: f.string,
		annotations: f.instanceOf(o),
		axisMarkFormatterFactory: f.func,
		axisSubMarkFormatterFactory: f.func,
		data: f.oneOfType([f.arrayOf(f.object)]).isRequired,
		height: f.number,
		highlights: f.instanceOf(r),
		interactive: f.bool,
		longPressTimeout: f.number,
		minDensityThreshold: f.number,
		missingDataCondition: f.oneOf(b("getObjectValues")(d)),
		onGuidesHide: f.func,
		onClick: f.func,
		onDrag: f.func,
		onDragEnd: f.func,
		onDragStart: f.func,
		onLongPress: f.func,
		onTouchEnd: f.func,
		onTouchEnter: f.func,
		onTouchLeave: f.func,
		onTouchMove: f.func,
		onTouchStart: f.func,
		onMouseDown: f.func,
		onMouseEnter: f.func,
		onMouseLeave: f.func,
		onMouseMove: f.func,
		onMouseOver: f.func,
		onMouseOut: f.func,
		onMouseUp: f.func,
		plotX: s.isRequired,
		plotY: f.arrayOf(s).isRequired,
		references: f.instanceOf(r),
		renderHighlightsOnTop: f.bool,
		selectedAnnotationIndex: f.number,
		schema: f.object.isRequired,
		surfaceMouseOutTimeout: f.number,
		theme: f.instanceOf(b("CandelaTheme")).isRequired,
		threshold: f.instanceOf(a),
		useDualIndenpendentAxes: f.bool,
		width: f.number.isRequired,
		xAxisAlignment: f.oneOf([i.BOTTOM, i.TOP]),
		xAxisHeight: f.number,
		yAxisAlignment: f.oneOf([i.LEFT, i.RIGHT]),
		zones: f.instanceOf(r)
	};
	u.defaultProps = {
		guideXValueAlignment: c.CLOSEST,
		annotations: o(),
		axisMarkFormatterFactory: b("InsightsFormatterFactories").axisMarkFormatterFactory,
		axisSubMarkFormatterFactory: b("InsightsFormatterFactories").axisSubMarkFormatterFactory,
		minDensityThreshold: 36,
		missingDataCondition: d.ALL_SERIES,
		renderHighlightsOnTop: !0,
		useDualIndenpendentAxes: !1,
		xAxisAlignment: i.BOTTOM,
		yAxisAlignment: i.LEFT
	};
	e.exports = u
}), null);
__d("BUIInsightsLineAreaChart.react", ["InsightsLineAreaChart.react", "InsightsThemeableChartMixin", "React", "ReactComponentWithPureRenderMixin", "createReactClass_DEPRECATED", "BUIInsightsTheme"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React");
	a = b("createReactClass_DEPRECATED")({
		displayName: "BUIInsightsLineAreaChart",
		mixins: [b("InsightsThemeableChartMixin")(function() {
			return b("BUIInsightsTheme")
		}), b("ReactComponentWithPureRenderMixin")],
		statics: {
			getComponentTheming: function() {
				return {
					styleSheet: {
						'gridline[orientation="horizontal"]:last-child': {
							visibility: "hidden"
						},
						'gridline[orientation="horizontal"]:last-child:only-child': {
							visibility: "visible"
						}
					}
				}
			}
		},
		render: function() {
			return g.jsx(b("InsightsLineAreaChart.react"), babelHelpers["extends"]({}, this.props, {
				theme: this.state.theme
			}))
		}
	});
	c = a;
	e.exports = c
}), null);
__d("InsightsVerticalBarChart.react", ["invariant", "CandelaAnchorAnnotations.react", "CandelaAxis.react", "CandelaBarGroups.react", "CandelaBars.react", "CandelaChartLayout.react", "CandelaChartSurface.react", "CandelaConstants", "CandelaGridLines.react", "CandelaGroupScaleBuilder", "CandelaLineAnnotations.react", "CandelaPanel.react", "CandelaReferences.react", "CandelaStackScaleBuilder", "CandelaStructs", "CandelaTheme", "InsightsFormatterFactories", "React", "immutable", "getObjectValues", "prop-types"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("React"),
		i = (a = b("CandelaConstants")).Alignment;
	c = a.ComparisonShape;
	var j = a.Orientation,
		k = a.Placement,
		l = a.RenderAs,
		m = a.ShapeType,
		n = a.Visibility,
		o = (d = b("immutable")).List,
		p = d.Map,
		q = d.OrderedSet,
		r = d.Set;
	f = b("CandelaStructs").Threshold;

	function s(a) {
		var b = a.annotations,
			c = a.data,
			d = a.plotX,
			e = a.plotY,
			f = a.references;
		a = a.schema;
		d = [d].concat(e);
		var g = [],
			h = [],
			i = [];
		b && b.forEach(function(a, b) {
			var c, d = a.renderAs,
				e = a.variableName,
				f = a.value;
			g.push((c = {}, c[e] = f, c));
			e = Array.isArray(d);
			f = babelHelpers["extends"]({}, a, {
				index: b
			});
			(d === l.ANCHOR || e && d.indexOf(l.ANCHOR) !== -1) && h.push(f);
			(d === l.LINE || e && d.indexOf(l.LINE) !== -1) && i.push(f)
		});
		f && f.forEach(function(a) {
			var b;
			g.push((b = {}, b[a.seriesName] = a.value, b))
		});
		return {
			anchorAnnotations: o(h),
			auxiliaryData: q(g),
			data: q(c),
			lineAnnotations: o(i),
			scales: r(d),
			schema: p(a)
		}
	}
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.render = function() {
			var a = this.props,
				c = a.alignment,
				d = a.anchorRect,
				e = a.axisMarkFormatterFactory,
				f = a.axisSubMarkFormatterFactory,
				l = a.barLabelFormatterFactory,
				o = a.comparisonShape,
				p = a.height,
				t = a.highlights,
				u = a.interactive,
				v = a.longPressTimeout,
				w = a.onClick,
				x = a.onDrag,
				y = a.onDragEnd,
				z = a.onDragStart,
				A = a.onLongPress,
				aa = a.onTouchEnd,
				ba = a.onTouchEnter,
				ca = a.onTouchLeave,
				da = a.onTouchMove,
				ea = a.onTouchStart,
				fa = a.onMouseDown,
				ga = a.onMouseEnter,
				ha = a.onMouseLeave,
				ia = a.onMouseMove,
				ja = a.onMouseOver,
				ka = a.onMouseOut,
				la = a.onMouseUp,
				B = a.overlap,
				C = a.plotX,
				D = a.plotY,
				E = a.references,
				ma = a.selectedAnnotationIndex,
				F = a.theme,
				G = a.threshold;
			a = a.width;
			var H = s(this.props),
				I = H.anchorAnnotations,
				na = H.auxiliaryData,
				oa = H.data,
				J = H.lineAnnotations,
				pa = H.scales;
			H = H.schema;
			if (D.length > 2) {
				D.every(function(a) {
					return a instanceof b("CandelaStackScaleBuilder")
				}) || g(0, 3632);
				var K = D[0].getFrom(),
					L = D[0].getTo();
				K != null && L != null || g(0, 3633);
				D.every(function(a) {
					return a.getFrom() === K && a.getTo() === L
				}) || g(0, 3634)
			}
			G && (D.length === 1 || g(0, 3635), D[0].getSeriesNames().length === 1 || D[0] instanceof b("CandelaGroupScaleBuilder") || g(0, 3636));
			var M = D[0] instanceof b("CandelaGroupScaleBuilder"),
				N = C.getTitle(),
				O = D[0].getTitle(),
				qa = D.length > 1 ? D[1].getTitle() : null,
				P = D[0].getSeriesNames(),
				Q = D.length > 1 ? D[1].getSeriesNames() : [],
				R;
			B ? (M || g(0, 2725), R = q().withMutations(function(a) {
				D.forEach(function(b) {
					b = b.getSeriesNames().slice();
					while (b.length) a.add(q(b.splice(0, 2)))
				})
			})) : R = M ? q(D.map(function(a) {
				return q(a.getSeriesNames().map(function(a) {
					return q([a])
				}))
			})).flatten(!0) : q(D.map(function(a) {
				return q(a.getSeriesNames())
			}));
			M = C.getSeriesNames();
			C = F.getStyle('axis[orientation="horizontal"][alignment="bottom"]');
			var S = F.getStyle('axis[orientation="vertical"][alignment="left"]'),
				T = F.getStyle('axis[orientation="vertical"][alignment="right"]'),
				U = F.getStyle('axis[orientation="horizontal"][alignment="top"]'),
				V;
			C.visibility === "visible" && (V = h.jsx(b("CandelaAxis.react"), {
				alignment: i.BOTTOM,
				height: C.height,
				markFormatterFactory: e,
				plot: M[0],
				subMarkFormatterFactory: f,
				title: N
			}));
			var W;
			S.visibility === "visible" && (W = h.jsx(b("CandelaAxis.react"), {
				alignment: i.LEFT,
				invert: c === i.TOP,
				markFormatterFactory: e,
				orientation: j.VERTICAL,
				plot: P[0],
				subMarkFormatterFactory: f,
				title: O,
				width: S.width
			}));
			var X;
			E && F.getStyle("reference").visibility === "visible" && (X = h.jsx(b("CandelaReferences.react"), {
				alignment: c,
				plotX: r(M),
				plotY: R.flatten(),
				references: E
			}));
			var Y;
			J.size && F.getStyle(m.LINE_ANNOTATION).visibility === n.VISIBLE && (Y = h.jsx(b("CandelaLineAnnotations.react"), {
				annotations: J
			}));
			C = h.jsxs(b("CandelaPanel.react"), {
				children: [h.jsx(b("CandelaGridLines.react"), {
					invert: c === i.TOP,
					plotY: P[0]
				}), X, h.jsx(b("CandelaBarGroups.react"), {
					alignment: c,
					groupBy: M[0],
					highlights: t,
					hoverThreshold: 1,
					order: R,
					overlap: B,
					children: h.jsx(b("CandelaBars.react"), {
						comparisonShape: o,
						labelFormatterFactory: l,
						threshold: G
					})
				}), Y]
			});
			var Z;
			T.visibility === "visible" && (Z = h.jsx(b("CandelaAxis.react"), {
				alignment: i.RIGHT,
				invert: c === i.TOP,
				markFormatterFactory: e,
				plot: Q.length ? Q[0] : P[0],
				subMarkFormatterFactory: f,
				title: qa,
				width: T.width
			}));
			var $;
			U.visibility === "visible" && ($ = h.jsx(b("CandelaAxis.react"), {
				alignment: i.TOP,
				height: U.height,
				markFormatterFactory: e,
				plot: M[0],
				subMarkFormatterFactory: f,
				title: N
			}));
			O = F.getStyle(m.ANCHOR_ANNOTATION);
			if (I.size && O.visibility === n.VISIBLE) {
				S = h.jsx(b("CandelaAnchorAnnotations.react"), {
					annotations: I,
					placement: k.TOP,
					selectedIndex: ma
				});
				E = O.radius * 2 + O.strokeWidth;
				$ ? $ = h.jsx(b("CandelaPanel.react"), {
					height: $.props.height + E,
					top: $,
					children: S
				}) : $ = h.jsx(b("CandelaPanel.react"), {
					height: E,
					children: S
				})
			}
			return h.jsx(b("CandelaChartSurface.react"), {
				anchorRect: d,
				auxiliaryData: na,
				data: oa,
				height: p,
				interactive: u,
				longPressTimeout: v,
				onClick: w,
				onDrag: x,
				onDragEnd: y,
				onDragStart: z,
				onLongPress: A,
				onMouseDown: fa,
				onMouseEnter: ga,
				onMouseLeave: ha,
				onMouseMove: ia,
				onMouseOut: ka,
				onMouseOver: ja,
				onMouseUp: la,
				onTouchEnd: aa,
				onTouchEnter: ba,
				onTouchLeave: ca,
				onTouchMove: da,
				onTouchStart: ea,
				scales: pa,
				schema: H,
				theme: F,
				width: a,
				children: h.jsx(b("CandelaChartLayout.react"), {
					bottomXAxis: V,
					leftYAxis: W,
					plotArea: C,
					rightYAxis: Z,
					topXAxis: $
				})
			})
		};
		return c
	}(h.PureComponent);
	a.propTypes = {
		alignment: (d = b("prop-types")).oneOf([i.BOTTOM, i.TOP]).isRequired,
		axisMarkFormatterFactory: d.func,
		axisSubMarkFormatterFactory: d.func,
		barLabelFormatterFactory: d.func,
		comparisonShape: d.oneOf(b("getObjectValues")(c)),
		data: d.array.isRequired,
		height: d.number.isRequired,
		highlights: d.instanceOf(r),
		interactive: d.bool,
		longPressTimeout: d.number,
		onClick: d.func,
		onLongPress: d.func,
		onTouchEnd: d.func,
		onTouchEnter: d.func,
		onTouchLeave: d.func,
		onTouchMove: d.func,
		onTouchStart: d.func,
		onMouseDown: d.func,
		onMouseEnter: d.func,
		onMouseLeave: d.func,
		onMouseMove: d.func,
		onMouseOver: d.func,
		onMouseOut: d.func,
		onMouseUp: d.func,
		overlap: d.bool,
		plotX: d.instanceOf(b("CandelaGroupScaleBuilder")).isRequired,
		plotY: d.arrayOf(d.oneOfType([d.instanceOf(b("CandelaGroupScaleBuilder")), d.instanceOf(b("CandelaStackScaleBuilder"))])).isRequired,
		references: d.instanceOf(r),
		schema: d.object.isRequired,
		theme: d.instanceOf(b("CandelaTheme")).isRequired,
		threshold: d.instanceOf(f),
		width: d.number.isRequired
	};
	a.defaultProps = {
		alignment: i.BOTTOM,
		axisMarkFormatterFactory: b("InsightsFormatterFactories").axisMarkFormatterFactory,
		axisSubMarkFormatterFactory: b("InsightsFormatterFactories").axisSubMarkFormatterFactory,
		barLabelFormatterFactory: b("InsightsFormatterFactories").barLabelFormatterFactory
	};
	e.exports = a
}), null);
__d("BUIInsightsVerticalBarChart.react", ["CandelaConstants", "InsightsThemeableChartMixin", "InsightsVerticalBarChart.react", "React", "ReactComponentWithPureRenderMixin", "createReactClass_DEPRECATED", "BUIInsightsTheme"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React");
	a = b("createReactClass_DEPRECATED")({
		displayName: "BUIInsightsVerticalBarChart",
		mixins: [b("InsightsThemeableChartMixin")(function() {
			return b("BUIInsightsTheme")
		}), b("ReactComponentWithPureRenderMixin")],
		defaultProps: {
			alignment: b("CandelaConstants").Alignment.BOTTOM
		},
		statics: {
			getComponentTheming: function() {
				return {
					styleSheet: {
						'axis[alignment="right"]': {
							visibility: "hidden"
						},
						'axis[alignment="top"]': {
							visibility: "hidden"
						},
						"gridline[orientation=vertical]": {
							visibility: "hidden"
						},
						bargroup: {
							margin: 15
						},
						barlabel: {
							padding: "5 15 15"
						}
					}
				}
			}
		},
		render: function() {
			return g.jsx(b("InsightsVerticalBarChart.react"), babelHelpers["extends"]({}, this.props, {
				theme: this.state.theme
			}))
		}
	});
	c = a;
	e.exports = c
}), null);