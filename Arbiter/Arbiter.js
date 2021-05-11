__d("Arbiter", ["invariant", "ArbiterToken", "CallbackDependencyManager", "ErrorGuard",
 "EventEmitter", "EventEmitterWithHolding", "EventHolder"], (function (a, b, c, d, e, f, g) {
	"use strict";
	var h;

	function i(a) {
		return Array.isArray(a) ? a : [a]
	}

	function j(a) {
		return a instanceof k || a === k ? a : k
	}
	var k = function () {
			function a() {
				var a = new(b("EventEmitter"))();
				this.$3 = new l();
				this.$2 = new(b("EventEmitterWithHolding"))(a, this.$3);
				this.$1 = new(b("CallbackDependencyManager"))();
				this.$4 = []
			}
			var c = a.prototype;
			c.subscribe = function (a, c, d) {
				a = i(a);
				a.forEach(function (a) {
					a && typeof a === "string" || g(0, 1966, a)
				});
				typeof c === "function" || g(0, 1967, c);
				d = d || "all";
				d === "new" || d === "all" || g(0, 1968, d);
				a = a.map(function (a) {
					var b = this.$5.bind(this, c, a);
					b.__SMmeta = c.__SMmeta;
					if (d === "new") return this.$2.addListener(a, b);
					this.$4.push({});
					a = this.$2.addRetroactiveListener(a, b);
					this.$4.pop();
					return a
				}, this);
				return new(b("ArbiterToken"))(this, a)
			};
			c.$5 = function (a, c, d) {
				var e = this.$4[this.$4.length - 1];
				if (e[c] === !1) return;
				a = (h || (h = b("ErrorGuard"))).applyWithGuard(a, null, [c, d]);
				a === !1 && this.$2.releaseCurrentEvent();
				e[c] = a
			};
			c.unsubscribeCurrentSubscription = function () {
				this.$2.removeCurrentListener()
			};
			c.releaseCurrentPersistentEvent = function () {
				this.$2.releaseCurrentEvent()
			};
			c.subscribeOnce = function (a, b, c) {
				var d = this;
				a = this.subscribe(a, function (a, c) {
					d.unsubscribeCurrentSubscription();
					return b(a, c)
				}, c);
				return a
			};
			c.unsubscribe = function (a) {
				a.isForArbiterInstance(this) || g(0, 1969), a.unsubscribe()
			};
			c.inform = function (a, b, c) {
				var d = Array.isArray(a);
				a = i(a);
				c = c || "event";
				var e = c === "state" || c === "persistent";
				this.$4.push({});
				for (var f = 0; f < a.length; f++) {
					var h = a[f];
					h || g(0, 1970, h);
					this.$3.setHoldingBehavior(h, c);
					this.$2.emitAndHold(h, b);
					this.$6(h, b, e)
				}
				h = this.$4.pop();
				return d ? h : h[a[0]]
			};
			c.query = function (a) {
				var b = this.$3.getHoldingBehavior(a);
				!b || b === "state" || g(0, 1971, a);
				b = null;
				this.$3.emitToListener(a, function (a) {
					b = a
				});
				return b
			};
			c.registerCallback = function (a, b) {
				if (typeof a === "function") return this.$1.registerCallback(a, b);
				else return this.$1.addDependenciesToExistingCallback(a, b)
			};
			c.$6 = function (a, b, c) {
				if (b === null) return;
				c ? this.$1.satisfyPersistentDependency(a) : this.$1.satisfyNonPersistentDependency(a)
			};
			a.subscribe = function (b, c, d) {
				return a.prototype.subscribe.apply(j(this), arguments)
			};
			a.unsubscribeCurrentSubscription = function () {
				return a.prototype.unsubscribeCurrentSubscription.apply(j(this))
			};
			a.releaseCurrentPersistentEvent = function () {
				return a.prototype.releaseCurrentPersistentEvent.apply(j(this))
			};
			a.subscribeOnce = function (b, c, d) {
				return a.prototype.subscribeOnce.apply(j(this), arguments)
			};
			a.unsubscribe = function (b) {
				return a.prototype.unsubscribe.apply(j(this), arguments)
			};
			a.inform = function (b, c, d) {
				return a.prototype.inform.apply(j(this), arguments)
			};
			a.informSingle = function (b, c, d) {
				return a.prototype.inform.apply(j(this), arguments)
			};
			a.query = function (b) {
				return a.prototype.query.apply(j(this), arguments)
			};
			a.registerCallback = function (b, c) {
				return a.prototype.registerCallback.apply(j(this), arguments)
			};
			a.$6 = function (b, c, d) {
				return a.prototype.$6.apply(j(this), arguments)
			};
			a.$5 = function (b, c, d) {
				return a.prototype.$5.apply(j(this), arguments)
			};
			return a
		}(),
		l = function (b) {
			babelHelpers.inheritsLoose(a, b);

			function a() {
				var a;
				a = b.call(this) || this;
				a.$ArbiterEventHolder1 = {};
				return a
			}
			var c = a.prototype;
			c.setHoldingBehavior = function (a, b) {
				this.$ArbiterEventHolder1[a] = b
			};
			c.getHoldingBehavior = function (a) {
				return this.$ArbiterEventHolder1[a]
			};
			c.holdEvent = function (a) {
				var c = this.$ArbiterEventHolder1[a];
				c !== "persistent" && this.$ArbiterEventHolder2(a);
				if (c !== "event") {
					var d;
					for (var e = arguments.length, f = new Array(e > 1 ? e - 1 : 0), g = 1; g < e; g++) f[g - 1] = arguments[g];
					return (d = b.prototype.holdEvent).call.apply(d, [this, a].concat(f))
				}
				return void 0
			};
			c.$ArbiterEventHolder2 = function (a) {
				this.emitToListener(a, this.releaseCurrentEvent, this)
			};
			c.releaseEvent = function (a) {
				a && b.prototype.releaseEvent.call(this, a)
			};
			return a
		}(b("EventHolder"));
	k.call(k);
	e.exports = k
}), null);