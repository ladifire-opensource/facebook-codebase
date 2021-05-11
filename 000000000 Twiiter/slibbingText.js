	wTX1: function(e, t, n) {
			"use strict";
			n("IAdD");
			var i = n("97Jx"),
				o = n.n(i),
				r = n("LdEA"),
				a = n.n(r),
				s = n("KEM+"),
				l = n.n(s),
				c = n("ERkP"),
				d = n("38/B"),
				h = n("t62R"),
				u = n("BcsE"),
				p = (n("aWzz"), n("rHpw")),
				m = n("MWbm");
			const b = "up",
				g = "down";
			class f extends c.Component {
				constructor(e, t) {
					super(e, t), l()(this, "_setupAnimation", () => {
						this.setState((e, t) => {
							const n = /*TODO: */isNumber(e.pendingCount) ? e.pendingCount > (e.count || 0) ? b : g : b;
							return {
								count: e.pendingCount,
								oldText: e.text,
								pendingCount: null,
								pendingText: null,
								text: e.pendingText,
								transitionDirection: n
							}
						})
					}), l()(this, "_animationFinished", () => {
						this._mounted && this.setState((e, t) => ({
							animating: !1,
							oldText: null
						}))
					}), this.state = {
						animating: !1,
						count: e.count,
						pendingCount: null,
						pendingText: null,
						oldText: null,
						text: e.children,
						transitionDirection: b
					}
				}
				componentDidMount() {
					this._mounted = !0
				}
				componentDidUpdate(e, t) {
					!1 === t.animating && !0 === this.state.animating ? setTimeout(this._animationFinished, 800) : null === t.oldText && this.state.oldText ? window.requestAnimationFrame(() => window.requestAnimationFrame(() => {
						this._mounted && this.setState((e, t) => ({
							animating: !0
						}))
					})) : !0 === t.animating && !1 === this.state.animating && this.state.pendingText && this._setupAnimation()
				}
				UNSAFE_componentWillReceiveProps(e) {
					if (e.children !== this.state.pendingText) {
						e.children === this.state.text || Object(u.a)(e.count) && this.state.count === e.count ? this.setState((e, t) => ({
							pendingCount: null,
							pendingText: null
						})) : (this.setState((t, n) => ({
							pendingCount: e.count,
							pendingText: e.children
						})), this.state.animating || this._setupAnimation())
					}
				}
				componentWillUnmount() {
					this._mounted = !1
				}
				shouldComponentUpdate(e, t) {
					return this.state !== t
				}
				render() {
					const e = this.props,
						{
							containerStyle: t,
							style: n
						} = e,
						i = a()(e, ["children", "containerStyle", "count", "style"]),
						{
							animating: r
						} = this.state,
						s = _[this.state.transitionDirection],
						l = this.state.oldText && !d.a.reducedMotionEnabled,
						u = !r && this.state.oldText && !d.a.reducedMotionEnabled;
					return c.createElement(m.a, {
						style: [y.root, t]
					}, l ? c.createElement(h.c, o()({}, i, {
						style: [y.oldText, r ? s.post : s.active, n]
					}), this.state.oldText) : null, c.createElement(h.c, o()({}, i, {
						style: [u ? s.pre : s.active, n]
					}), this.state.text))
				}
			}
			l()(f, "displayName", "@twitter/SlidingAppText"), f.propTypes = {};
			const _ = {};
			[b, g].forEach(e => {
				_[e] = p.a.create(t => ({
					active: {
						transitionProperty: "transform",
						transitionDuration: "0.3s",
						transform: [{
							translate3d: "0, 0, 0"
						}]
					},
					pre: {
						transform: [{
							translate3d: `0, ${e===b?"":"-"}${t.lineHeight}em, 0`
						}]
					},
					post: {
						transform: [{
							translate3d: `0, ${e===b?"-":""}${t.lineHeight}em, 0`
						}],
						transitionProperty: "transform",
						transitionDuration: "0.3s"
					}
				}))
			});
			const y = p.a.create({
				root: {
					overflow: "hidden"
				},
				oldText: {
					position: "absolute"
				}
			});
			t.a = f
		},