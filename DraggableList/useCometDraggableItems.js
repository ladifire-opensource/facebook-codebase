__d("useCometDraggableItems", ["React", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function h(a, b, c) {
		if (a === "vertical") {
			a = b.pageY - ((a = c == null ? void 0 : c.y) != null ? a : 0)
		} else {
			a = b.pageX - ((b = c == null ? void 0 : c.x) != null ? b : 0)
		}
		return a
	}

	function a(a) {
		var b = a.direction,
			c = a.expanded,
			d = a.items,
			e = a.onReorder,
			f = g.useRef(null),
			i = g.useRef(null);
		a = g.useState(-1);
		var j = a[0],
			k = a[1];
		a = g.useState(-1);
		var l = a[0],
			m = a[1],
			n = g.useRef(null),
			o = g.useMemo(function () {
				return d.map(function (a, b) {
					return {
						id: "item" + b,
						item: a
					}
				})
			}, [d]),
			p = g.useCallback(function (a) {
				var b = a.currentTarget;
				a.dataTransfer != null && a.dataTransfer.setData("text/plain", "This is some text");
				i.current = {
					x: a.pageX,
					y: a.pageY
				};
				var c = b.getBoundingClientRect(),
					d = c.bottom,
					e = c.left,
					f = c.right;
				c = c.top;
				c = a.clientY - c;
				d = d - a.clientY;
				e = a.clientX - e;
				f = f - a.clientX;
				n.current = {
					bottom: d,
					left: e,
					right: f,
					top: c
				};
				a = Number(b.dataset.key);
				if (isNaN(a)) return;
				m(a)
			}, []),
			q = g.useCallback(function (a) {
				var c;
				a.preventDefault();
				a.dataTransfer != null && (a.dataTransfer.dropEffect = "move");
				var d = a.currentTarget,
					e = Number(d.dataset.key);
				if (isNaN(e) || e === j) return;
				d = d.getBoundingClientRect();
				var f = h(b, a, i.current);
				c = (c = n.current) != null ? c : {};
				var g = c.bottom;
				g = g === void 0 ? 0 : g;
				var l = c.left;
				l = l === void 0 ? 0 : l;
				var m = c.right;
				m = m === void 0 ? 0 : m;
				c = c.top;
				c = c === void 0 ? 0 : c;
				b === "vertical" ? f < 0 ? a.clientY - c < d.top && k(e) : f > 0 && (a.clientY + g > d.bottom && k(e)) : f < 0 ? a.clientX - l < d.left && k(e) : f > 0 && (a.clientX + m > d.right && k(e));
				i.current = {
					x: a.pageX,
					y: a.pageY
				}
			}, [b, j]),
			r = g.useCallback(function (a) {
				if (j >= 0 && l >= 0 && j !== l) {
					a = Array.from(d);
					var b = a.splice(l, 1)[0];
					a.splice(j, 0, b);
					e(a, l, j)
				}
				m(-1);
				k(-1)
			}, [d, e, l, j]),
			s = g.useCallback(function (a) {
				a.stopPropagation(), a.preventDefault()
			}, []);
		a = g.useMemo(function () {
			var a = Array.from(o);
			if (l >= 0 && j >= 0 && l !== j) {
				var b = a.splice(l, 1)[0];
				a.splice(j, 0, b)
			}
			return a
		}, [o, l, j]);
		g.useLayoutEffect(function () {
			if (f.current == null) return;
			var a = f.current;
			for (var b = a, c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
				var e;
				if (c) {
					if (d >= b.length) break;
					e = b[d++]
				} else {
					d = b.next();
					if (d.done) break;
					e = d.value
				}
				e = e;
				e.addEventListener("dragstart", p);
				e.addEventListener("dragover", q);
				e.addEventListener("dragend", r);
				e.addEventListener("drop", s)
			}
			return function () {
				if (a != null)
					for (var b = a, c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
						var e;
						if (c) {
							if (d >= b.length) break;
							e = b[d++]
						} else {
							d = b.next();
							if (d.done) break;
							e = d.value
						}
						e = e;
						e.removeEventListener("dragstart", p);
						e.removeEventListener("dragover", q);
						e.removeEventListener("dragend", r);
						e.removeEventListener("drop", s)
					}
			}
		}, [a, s, r, q, p]);
		return a.map(function (a, b) {
			return g.jsx("div", {
				className: "abiwlrkh gw4tj676 a7woen2v rq0escxv prrx4l0j" + (b === j ? " jcgfde61 afxsp9o4 ed0hlay0 frvqaej8 jtyqvmfc bi3q80fp nl6ljbnk l95rl6t1 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 m6dego64 qexih2b6 rwgtamgd mut4tcmb" : "") + (c ? " k4urcfbm" : ""),
				"data-key": b,
				draggable: !0,
				ref: function (a) {
					f.current == null && (f.current = []), a != null && (f.current[b] = a)
				},
				children: g.jsx("div", {
					className: "rq0escxv" + (b === j ? " kr9hpln1" : ""),
					children: a.item
				})
			}, a.id)
		})
	}
}), null);