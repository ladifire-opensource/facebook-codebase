__d("CometToasterStateManager", [
	"CometMaxEnqueuedToastsSitevarConfig", 
	"requireCond", 
	"JSScheduler", 
	"cr:724654", 
	"emptyObject", "once", "removeFromArray", "cr:724655", "unrecoverableViolation"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("CometMaxEnqueuedToastsSitevarConfig").max;
	///// 
	// ["CometMaxEnqueuedToastsSitevarConfig", [], {
	// 				"max": 2
	// 			}, 4763],
	///////////////

	a = function () {
		function a() {
			this.$1 = 0, this.$2 = new Map(), this.$3 = [], this.$4 = [], this.$5 = null
		}
		var c = a.prototype;
		c.push = function (a, b) {
			var c = "toast-" + this.$1++;
			b = {
				duration: b,
				expired: !1,
				id: c,
				shown: !1,
				timer: null,
				value: a
			};
			this.$6({
				node: b,
				type: "PUSH"
			});
			return c
		};
		c.shown = function (a) {
			this.$6({
				id: a,
				type: "SHOWN"
			})
		};
		c["delete"] = function (a) {
			this.$6({
				id: a,
				type: "DELETE"
			})
		};
		c.expire = function (a) {
			this.$6({
				id: a,
				type: "EXPIRE"
			})
		};
		c.hidden = function (a) {
			this.$6({
				id: a,
				type: "HIDDEN"
			})
		};
		c.stopTimer = function (a) {
			this.$6({
				id: a,
				type: "STOP_TIMER"
			})
		};
		c.resetTimer = function (a) {
			this.$6({
				id: a,
				type: "RESET_TIMER"
			})
		};
		c.getState = function () {
			return Object.fromEntries(this.$2)
		};
		c.getEmptyState = function () {
			return b("emptyObject")
		};
		c.addListener = function (a) {
			var c = this;
			this.$3.push(a);
			return {
				remove: b("once")(function () {
					b("removeFromArray")(c.$3, a)
				})
			}
		};
		c.$7 = function (a) {
			(this.$5 == null || a.priority > this.$5.priority) && (this.$5 = a)
		};
		c.registerView = function (a, c) {
			var d = this;
			c === void 0 && (c = 1);
			var e = {
				handler: a,
				priority: c
			};
			this.$4.push(e);
			this.$7(e);
			this.$8();
			return {
				remove: b("once")(function () {
					b("removeFromArray")(d.$4, e), d.$5 === e && (d.$5 = null, d.$4.forEach(function (a) {
						return d.$7(a)
					}))
				})
			}
		};
		c.$6 = function (a) {
			var b = this.$2;
			switch (a.type) {
				case "PUSH":
					var c = a.node;
					this.$2 = new Map([].concat(Array.from(this.$2), [
						[c.id, c]
					]));
					if (g !== 0) {
						c = Array.from(this.$2.values()).filter(function (a) {
							return !a.shown && !a.expired
						});
						if (c.length > g) {
							c = c[0];
							this["delete"](c.id)
						}
					}
					break;
				case "SHOWN":
					if (this.$2.has(a.id) && !this.$9(a.id).shown) {
						c = babelHelpers["extends"]({}, this.$9(a.id), {
							shown: !0
						});
						this.$2 = new Map([].concat(Array.from(this.$2), [
							[a.id, this.$10(c)]
						]))
					}
					break;
				case "EXPIRE":
					if (this.$2.has(a.id)) {
						c = babelHelpers["extends"]({}, this.$9(a.id), {
							expired: !0
						});
						this.$2 = new Map([].concat(Array.from(this.$2), [
							[a.id, this.$11(c)]
						]));
						this.$12(c)
					}
					break;
				case "HIDDEN":
					if (this.$2.has(a.id)) {
						c = this.$9(a.id);
						(c.shown || c.expired) && (this.$2 = new Map(this.$2), this.$2["delete"](a.id), this.$11(c))
					}
					break;
				case "DELETE":
					if (this.$2.has(a.id)) {
						c = this.$9(a.id);
						this.$2 = new Map(this.$2);
						this.$2["delete"](a.id);
						this.$11(c)
					}
					break;
				case "STOP_TIMER":
					if (this.$2.has(a.id) && this.$13(this.$9(a.id))) {
						c = babelHelpers["extends"]({}, this.$9(a.id));
						this.$2 = new Map([].concat(Array.from(this.$2), [
							[a.id, this.$11(c)]
						]))
					}
					break;
				case "RESET_TIMER":
					if (this.$2.has(a.id) && !this.$13(this.$9(a.id))) {
						c = babelHelpers["extends"]({}, this.$9(a.id));
						this.$2 = new Map([].concat(Array.from(this.$2), [
							[a.id, this.$10(c)]
						]))
					}
					break;
				default:
					a.type
			}
			b !== this.$2 && this.$8()
		};
		c.$8 = function () {
			var a = this;
			this.$3.forEach(function (a) {
				return b("JSScheduler").scheduleNormalPriCallback(function () {
					a()
				})
			});
			this.$4.forEach(function (c) {
				return b("JSScheduler").scheduleNormalPriCallback(function () {
					c.handler(c === a.$5 ? a.getState() : a.getEmptyState())
				})
			})
		};
		c.$10 = function (a) {
			var c = this;
			a.duration !== null && a.timer == null && (a.timer = b("cr:724655")(function () {
				c.expire(a.id)
			}, a.duration));
			return a
		};
		c.$11 = function (a) {
			a.timer != null && (b("cr:724654")(a.timer), a.timer = null);
			return a
		};
		c.$12 = function (a) {
			var c = this;
			this.$11(a);
			var d = a.id;
			b("cr:724655")(function () {
				c["delete"](d)
			}, 1e3)
		};
		c.$13 = function (a) {
			return a.timer != null
		};
		c.$9 = function (a) {
			a = this.$2.get(a);
			if (a == null) throw b("unrecoverableViolation")("Toast with given identifier was not found", "comet_ui");
			return a
		};
		a.getInstance = function () {
			a.$14 == null && (a.$14 = new a());
			return a.$14
		};
		a.resetInstance_DO_NOT_USE = function () {
			a.$14 = null
		};
		return a
	}();
	e.exports = a
}), null);