"7XeY": function (e, t, a) {
	"use strict";
	a.d(t, "b", (function () {
		return h
	}));
	var n = a("zgq7"),
		r = a("FNl4"),
		i = a("ZpWa"),
		s = a("vfQU"),
		o = a("rWF5"),
		c = a("yU6Y"),
		l = a.n(c),
		d = Object(s.Kc)(),
		u = Object(r.a)() && Object(o.t)() && ("4.1.0-beta5" === d || "4.1.0-beta6" === d || "4.1.0" === d || Object(o.m)("4.1.1")) && l.a.osversion >= "10.14",
		p = Object(r.a)() && Object(o.G)() && d && (d.startsWith("4.4.0-") || Object(o.m)("4.4.0")),
		m = u || p,
		h = Object(r.a)() && m,
		b = Object(n.b)((e => !!h && !!Object(i.a)(e)));
	b.meta = {
		name: "getSystemSyncIsSupported",
		key: "actionsGetSystemSyncIsEnabledGetSystemSyncIsSupported"
	}, t.a = b
}, "7Xqt": function (e, t, a) {
	"use strict";
	a.d(t, "a", (function () {
		return DegradedList
	}));
	var n = a("q1tI"),
		r = a.n(n),
		i = a("TSYQ"),
		s = a.n(i),
		o = a("aK/h"),
		c = a("5WG+"),
		l = a("nNoG"),
		d = a("j6qi"),
		u = (a("2XjY"), new l.b("messages")),
		p = Object.assign({}, d.a.propTypes, {
			reachedStart: o.default.bool,
			reachedEnd: o.default.bool
		}),
		m = Object.assign({}, d.a.defaultProps, {
			reachedStart: !1,
			reachedEnd: !1
		});
	class DegradedList extends d.a {
		constructor(e) {
			super(e), this.pendingUpdate = null, this.recomputeOffsets(e), this.overscan = Math.max(200, e.height / 2)
		}
		componentDidUpdate() {
			super.componentDidUpdate(...arguments), 0 === this.props.keys.length && this.loadMore(), this.layout.setBottomMargin(this.getLoadingOffsetBottom()), this.pendingUpdate = !1
		}
		onKeyDownPageDown(e) {
			this.state.hasKeyboardFocus && this.isScrolledToBottom() && this.props.reachedEnd ? this.focusLastItemInView() : super.onKeyDownPageDown(e)
		}
		onKeyDownPageUp(e) {
			this.state.hasKeyboardFocus && this.isScrolledToTop() && this.props.reachedStart ? this.focusFirstItemInView() : super.onKeyDownPageUp(e)
		}
		getOffset() {
			var e = this.getLoadingOffsetTop();
			return this.startTop - e
		}
		getLoadingOffsetTop() {
			return this.props.keys.length ? this.props.reachedStart && 0 === this.state.start || this.layout.getTotalHeight() <= this.props.height ? 0 : 0 !== this.state.start ? 96 : 56 : 0
		}
		getLoadingOffsetBottom() {
			return this.props.keys.length ? this.props.reachedEnd && this.state.end === this.props.keys.length ? 0 : 96 : 0
		}
		getScrollTop() {
			return "number" == typeof this.scrollTop ? this.scrollTop : "number" == typeof this.pendingScrollTop ? this.pendingScrollTop : super.getScrollTop() + this.getOffset()
		}
		getContentHeight() {
			return this.endBottom - this.getOffset() + this.getLoadingOffsetBottom()
		}
		getTop(e) {
			return this.layout.getTop(e) - this.getOffset()
		}
		getBottom(e) {
			return this.layout.getBottom(e) - this.getOffset()
		}
		setScrollTop(e) {
			var t = e < this.getOffset(),
				a = e + this.props.height > this.endBottom + this.getLoadingOffsetBottom();
			if (t && 0 !== this.state.start || a && this.state.end !== this.props.keys.length) return this.scrollTop = e, void this.relayout();
			super.setScrollTop(e - this.getOffset())
		}
		scrollToOffset(e) {
			var {
				animate: t,
				absolute: a
			} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
			if (this.node && !this.pendingUpdate) {
				var n = a ? e : e - this.getOffset();
				!a && n > 0 && n < this.getLoadingOffsetTop() && (n = 0);
				var r = this.bracketScrollTop(n);
				a || r === n ? t ? this.scrollAnimation = this.node.scrollWithAnimation(r) : super.setScrollTop(r) : this.setScrollTop(e)
			}
		}
		bracketScrollTop(e) {
			return Math.max(0, Math.min(this.getContentHeight() - this.props.height, e))
		}
		resetRendered() {
			this.overscan = this.props.height / 2
		}
		loadMore() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.start,
				t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state.end,
				a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.props,
				n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.getScrollTop(),
				r = this.layout.getTotalHeight(),
				i = 0 === e && n < 1,
				s = t === a.keys.length && n + a.height > r - 1,
				o = !a.keys.length || r <= a.height || i,
				c = !a.keys.length || r <= a.height || s;
			return o && c ? a.loadAround() : o ? a.loadPre() : !!c && a.loadPost()
		}
		relayout() {
			this.setState(((e, t) => {
				if (t.isLoading) return null;
				var {
					start: a,
					end: n
				} = e, r = this.startKey, i = this.endKey;
				this.recomputeOffsets(t, a, n);
				var s = this.node ? this.node.scrollTop() : 0,
					o = this.getScrollTop(),
					c = s - 1 <= 0 || o - 1 <= this.getOffset(),
					l = s + 1 >= this.getContentHeight() - t.height || o + 1 >= this.endBottom - t.height,
					d = {
						start: a,
						end: n
					};
				if (this.startKey !== r || this.endKey !== i || c && 0 !== a || l && n !== t.keys.length) {
					e.hasKeyboardFocus ? this.resetRendered() : e.scrolling && (this.overscan = 8e3), d = this.computeBounds(t, o);
					var {
						start: u,
						end: p
					} = d;
					this.recomputeOffsets(t, u, p), c = o - 1 <= this.getOffset(), l = o + t.height + 1 >= this.endBottom + this.getLoadingOffsetBottom()
				}(c && 0 === d.start || l && d.end === t.keys.length || this.layout.getTotalHeight() < t.height && 0 === d.start) && this.loadMore(a, n, t);
				var m = this.layout.getTops();
				return d.start === a && d.end === n && m === e.tops ? null : (this.scrollAnimation && this.scrollAnimation.cancel(), this.pendingUpdate = !0, this.scrollTop = o, Object.assign({}, d, {
					tops: m
				}))
			}))
		}
		recomputeOffsets() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
				t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state.start,
				a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state.end,
				n = this.layout.getTotalHeight() <= e.height;
			this.startKey = e.keys[t], this.endKey = e.keys[a - 1], this.startTop = n ? 0 : this.layout.getTop(this.startKey) || 0, this.endBottom = this.layout.getBottom(this.endKey) || 0
		}
		computeBounds() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
				t = arguments.length > 1 ? arguments[1] : void 0,
				a = t - this.overscan,
				n = t + e.height + this.overscan,
				r = super.getBounds(a, n);
			return this.snapBounds(e, r)
		}
		snapBounds() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
				{
					start: t,
					end: a
				} = arguments.length > 1 ? arguments[1] : void 0;
			return {
				start: t < 20 ? 0 : t,
				end: e.keys.length - a < 20 ? e.keys.length : a
			}
		}
		renderLoading(e, t) {
			var a = e ? {
					top: 0,
					paddingTop: 40
				} : {
					bottom: 0,
					paddingBottom: 15
				},
				n = e ? "degradedLoadingTop" : "degradedLoadingBottom",
				i = this.props.featureOfflineMode && this.props.isOffline && !t,
				o = u.t("Loading history...");
			this.props.featureOfflineMode && i && (o = r.a.createElement("span", null, r.a.createElement(c.b, {
				type: "cloud-offline-small",
				size: "inherit"
			}), " ", r.a.createElement("strong", null, u.t("No connection.")), " ", u.t("Go online to load more messages.")));
			var l = s()("p-degraded_list__loading", {
				"p-degraded_list__loading--offline": i
			});
			return r.a.createElement("div", {
				key: n,
				className: l,
				style: a
			}, o)
		}
		renderItems() {
			var e = super.renderItems(),
				t = this.state.start > 0,
				a = this.state.end < this.props.keys.length,
				n = this.props.keys.length > 1 && (!this.props.reachedStart || t),
				r = this.props.keys.length > 1 && (!this.props.reachedEnd || a);
			return [n && this.renderLoading(!0, t), ...e, r && this.renderLoading(!1, a)]
		}
	}
	DegradedList.propTypes = p, DegradedList.defaultProps = m
}