oUPN: function (e, t, a) {
	"use strict";
	a.d(t, "a", (function () {
		return KeyboardNavigableList
	}));
	var n = a("wx14"),
		r = a("3Hq1"),
		i = a("ifKl"),
		s = a("qAkX"),
		o = a("q1tI"),
		c = a.n(o),
		l = a("aK/h"),
		d = a("rWF5"),
		u = a("k0G2"),
		p = a("VymY"),
		m = a("tn36"),
		h = a("RMmo"),
		b = a("YjxU"),
		f = a("ihLf"),
		g = a("tQ8E"),
		_ = a("nUcG"),
		v = Object.assign({}, g.a.propTypes, {
			activeItem: l.default.string,
			initialActiveItem: l.default.string,
			isFocusableItem: l.default.func,
			shouldIgnoreScrollKeys: l.default.func,
			shouldIgnoreArrowKeys: l.default.func,
			onFocusEnter: l.default.func,
			onFocusLeave: l.default.func,
			onPageUp: l.default.func,
			onPageDown: l.default.func,
			onHome: l.default.func,
			onEnd: l.default.func,
			onItemClick: l.default.func,
			onItemKeyDown: l.default.func,
			onItemTabWithin: l.default.func,
			onItemFocusEnter: l.default.func,
			onItemFocusWithin: l.default.func,
			onItemContextMenu: l.default.func,
			onActiveItemChange: l.default.func,
			keyCommands: l.default.array,
			hideHiddenStopTabs: l.default.bool,
			pageHeight: l.default.number,
			ignoreKeyCommandsOnInputs: l.default.bool,
			getPropsForItem: l.default.func,
			useHiddenTabStops: l.default.bool,
			preventTabKeyNavigationIntoList: l.default.bool
		}),
		O = Object.assign({}, g.a.defaultProps, {
			activeItem: void 0,
			initialActiveItem: void 0,
			isFocusableItem: () => !0,
			onFocusEnter: i.a,
			onFocusLeave: i.a,
			onPageUp: i.a,
			onPageDown: i.a,
			onHome: i.a,
			onEnd: i.a,
			onItemClick: i.a,
			onItemKeyDown: i.a,
			onItemTabWithin: i.a,
			onItemFocusEnter: i.a,
			onItemFocusWithin: i.a,
			onItemContextMenu: i.a,
			onActiveItemChange: i.a,
			keyCommands: void 0,
			hideHiddenStopTabs: !1,
			shouldIgnoreScrollKeys(e) {
				var t;
				return !this.node || !(null === (t = this.getScrollerRef()) || void 0 === t ? void 0 : t.contains(e.target))
			},
			shouldIgnoreArrowKeys(e) {
				var t;
				return !this.node || !(null === (t = this.getScrollerRef()) || void 0 === t ? void 0 : t.contains(e.target))
			},
			pageHeight: void 0,
			ignoreKeyCommandsOnInputs: !0,
			getPropsForItem: i.a,
			useHiddenTabStops: !0,
			preventTabKeyNavigationIntoList: !1
		});
	class KeyboardNavigableList extends g.a {
		constructor(e) {
			super(e), Object(m.a)(this, ["onFocusEnter", "onFocusLeave", "onFocusedElementRemoved", "onItemMouseDown", "onItemFocusEnter", "onItemFocusWithin", "onItemFocusLeave", "onItemTabWithin", "focus", "setFirstHiddenTabStopRef", "setLastHiddenTabStopRef"]), this.previousActiveItem = null, this.state = Object.assign({}, this.state, {
				initialActiveItem: null,
				activeItem: null,
				hasKeyboardFocus: !1,
				isInitialFocusInRange: !1
			})
		}
		componentDidMount() {
			super.componentDidMount();
			var {
				ignoreKeyCommandsOnInputs: e,
				shouldIgnoreScrollKeys: t
			} = this.props, a = t.bind(this), n = [{
				keys: ["pageup"],
				handler: this.onKeyDownPageUp.bind(this),
				filter: a
			}, {
				keys: ["pagedown"],
				handler: this.onKeyDownPageDown.bind(this),
				filter: a
			}, {
				keys: ["home"],
				handler: this.onKeyDownHome.bind(this),
				action: "keydown",
				filter: a
			}, {
				keys: ["end"],
				handler: this.onKeyDownEnd.bind(this),
				action: "keydown",
				filter: a
			}, {
				keys: ["home"],
				handler: this.onKeyUpHome.bind(this),
				action: "keyup"
			}, {
				keys: ["end"],
				handler: this.onKeyUpEnd.bind(this),
				action: "keyup"
			}, {
				keys: ["up", "down"],
				handler: this.onArrowKeyDown.bind(this),
				ignoreInputs: e,
				filter: this.props.shouldIgnoreArrowKeys.bind(this)
			}], r = this.props.keyCommands ? n.concat(this.props.keyCommands) : n;
			this.keyCommands = new h.a, this.keyCommands.bindAll(r)
		}
		componentWillUnmount() {
			super.componentWillUnmount(), this.keyCommands.reset(), this.keyCommands = null, this.node = null, clearTimeout(this.focusTimerId)
		}
		componentDidUpdate(e, t) {
			var {
				activeItem: a,
				preventTabKeyNavigationIntoList: n
			} = this.props, {
				hasKeyboardFocus: r
			} = this.state;
			if (n && !r && this.removeAllItemsFromTabFlow(), this.possiblyUpdateInitialActiveItem(), a && a !== e.activeItem && (this.setActiveItem(a, !0), this.isItemInView(a) || this.scrollToKey(a)), t.activeItem && this.state.activeItem && this.state.activeItem !== t.activeItem && this.props.onActiveItemChange(this.state.activeItem), r) {
				if (this.shouldUpdateTabIndexes && !this.isScrolling()) {
					if (this.removeItemsOutOfViewFromTabFlow(), this.shouldUpdateTabIndexes = !1, this.focusFirstTabStopInView) return this.moveFocusToFirstTabStopInView(), void(this.focusFirstTabStopInView = !1);
					this.focusLastTabStopInView && (this.moveFocusToLastTabStopInView(), this.focusLastTabStopInView = !1)
				}
				this.possiblyUpdateKeyboardFocus(e)
			}
		}
		possiblyUpdateInitialActiveItem() {
			var {
				keys: e,
				initialActiveItem: t
			} = this.props;
			this.state.hasKeyboardFocus || (Object(r.a)(t) || null === t || -1 !== e.indexOf(t)) && t !== this.state.initialActiveItem && null === this.state.initialActiveItem && this.setState((e => ({
				initialActiveItem: e.initialActiveItem
			})))
		}
		possiblyUpdateKeyboardFocus(e) {
			if (!this.props.activeItem && this.state.hasKeyboardFocus && this.state.initialActiveItem && !this.props.keys.includes(this.state.initialActiveItem)) {
				var t = e.keys.indexOf(this.state.activeItem),
					a = this.props.keys[t] || Object(s.a)(this.props.keys);
				a && this.focusOnKey(a)
			}
		}
		getPageHeight() {
			var {
				pageHeight: e,
				height: t
			} = this.props;
			return e || t - 21
		}
		getKeysForFocusableItems() {
			var {
				keys: e,
				isFocusableItem: t
			} = this.props;
			return e.filter(((e, a) => t({
				index: a,
				key: e
			})))
		}
		getListItemTabIndex(e) {
			var {
				initialActiveItem: t
			} = this.state;
			return null !== t && null !== this.previousActiveItem && this.previousActiveItem === t && t === e ? 0 : -1
		}
		onKeyDownPageUp(e) {
			if (e.preventDefault(), !1 !== this.props.onPageUp(e)) {
				var t = this.getScrollTop() - this.getPageHeight();
				this.state.hasKeyboardFocus ? this.isScrolledToTop() ? this.focusFirstItemInView() : this.scrollToAndFocusFirstItemInView(t) : this.scrollToOffset(t)
			}
		}
		onKeyDownPageDown(e) {
			if (e.preventDefault(), !1 !== this.props.onPageDown(e)) {
				var t = this.getScrollTop() + this.getPageHeight();
				if (this.state.hasKeyboardFocus)
					if (this.isScrolledToBottom()) this.focusLastItemInView();
					else {
						var a = this.getNextLastFocusableItemInView(t);
						this.setActiveItem(a, !0), this.scrollToOffset(t)
					}
				else this.scrollToOffset(t)
			}
		}
		onKeyDownHome(e) {
			if (!this.isHomeKeyPressed && (this.isHomeKeyPressed = !0, e.preventDefault(), !1 !== this.props.onHome(e)))
				if (this.state.hasKeyboardFocus)
					if (this.isScrolledToTop()) this.focusFirstItemInView();
					else {
						var t = this.getKeysForFocusableItems()[0];
						this.setActiveItem(t, !0), this.scrollToKey(t)
					}
			else this.scrollToOffset(0, {
				absolute: !0
			})
		}
		onKeyDownEnd(e) {
			if (!this.isEndKeyPressed && (this.isEndKeyPressed = !0, e.preventDefault(), !1 !== this.props.onEnd(e)))
				if (this.state.hasKeyboardFocus)
					if (this.isScrolledToBottom()) this.focusLastItemInView();
					else {
						var t = this.getKeysForFocusableItems(),
							a = t[t.length - 1];
						this.setActiveItem(a, !0), this.scrollToKey(a)
					}
			else this.scrollToOffset(1 / 0, {
				absolute: !0
			})
		}
		onArrowKeyDown(e) {
			e.defaultPrevented || (e.preventDefault(), this.focusNextItem(e.keyCode))
		}
		onKeyUpHome() {
			this.isHomeKeyPressed = !1
		}
		onKeyUpEnd() {
			this.isEndKeyPressed = !1
		}
		onItemFocusEnter(e) {
			var {
				id: t,
				relatedEvent: a,
				currentTarget: n,
				target: r
			} = e;
			if (!this.haveActiveItem() && r === n) this.setActiveItem(t);
			else {
				var i = !this.haveActiveItem() && !a && n.contains(r),
					{
						keys: s,
						isFocusableItem: o
					} = this.props,
					c = o({
						index: s.indexOf(t),
						key: t
					}) ? t : this.state.initialActiveItem;
				i && this.setState((() => ({
					activeItem: null,
					initialActiveItem: c
				}))), this.props.onItemFocusEnter(e)
			}
		}
		onItemFocusWithin(e) {
			var {
				id: t,
				currentTarget: a,
				target: n
			} = e;
			if (n !== a) {
				var {
					keys: r,
					isFocusableItem: i
				} = this.props, s = i({
					index: r.indexOf(t),
					key: t
				}) ? t : this.state.initialActiveItem;
				this.setState((() => ({
					activeItem: null,
					initialActiveItem: s
				})))
			} else this.setActiveItem(t)
		}
		onItemFocusLeave() {
			this.previousActiveItem = null
		}
		onItemTabWithin(e) {
			var {
				id: t,
				shiftKey: a,
				currentTarget: n,
				target: r
			} = e, {
				activeItem: i
			} = this.state, {
				keys: s,
				isFocusableItem: o,
				onItemTabWithin: c
			} = this.props;
			if (a && n === r && !i && this.state.initialActiveItem === t) return this.setActiveItem(t), void c(e);
			var l = o({
				index: s.indexOf(t),
				key: t
			}) ? t : this.state.initialActiveItem;
			this.shouldUpdateTabIndexes || (this.shouldUpdateTabIndexes = !0), this.setState((() => ({
				activeItem: null,
				initialActiveItem: l
			}))), this.previousActiveItem = null !== i && i, c(e)
		}
		onFocusEnter(e) {
			var {
				relatedEvent: t,
				target: a
			} = e;
			if (!(t && "mousedown" === t.type || a && (a instanceof HTMLMediaElement || a.dataset.mediaFocusContainer))) {
				var n = a === this.firstHiddenTabStop,
					r = a === this.lastHiddenTabStop,
					i = !t,
					s = !i && (n || r),
					o = t && "keydown" === t.type || i;
				o ? (s && (n && (this.setState((() => ({
					hasKeyboardFocus: o
				}))), this.shouldUpdateTabIndexes = !0, this.focusFirstTabStopInView = !0), r && (this.setState((() => ({
					hasKeyboardFocus: o
				}))), this.shouldUpdateTabIndexes = !0, this.focusLastTabStopInView = !0)), this.props.onFocusEnter(Object.assign({
					isKeyboardFocus: o
				}, e))) : this.props.onFocusEnter(e)
			}
		}
		onFocusLeave(e) {
			var {
				preventTabKeyNavigationIntoList: t,
				onFocusLeave: a
			} = this.props, n = this.state.activeItem, r = this.haveActiveItem() ? {
				activeItem: null,
				hasKeyboardFocus: !1,
				initialActiveItem: n,
				isInitialFocusInRange: !1
			} : {
				activeItem: null,
				hasKeyboardFocus: !1,
				isInitialFocusInRange: !1
			}, i = Object.assign({
				activeItem: n
			}, e);
			t && this.removeAllItemsFromTabFlow(), this.setState((() => r), (() => {
				a(i)
			}))
		}
		onFocusedElementRemoved() {
			this.state.hasKeyboardFocus && this.focus()
		}
		onItemMouseDown(e, t) {
			this.setState((() => ({
				hasKeyboardFocus: !1,
				activeItem: null,
				initialActiveItem: t
			})))
		}
		onContentContextMenu(e) {
			var {
				target: t,
				currentTarget: a
			} = e, {
				activeItem: n
			} = this.state;
			n && t === a && this.props.onItemContextMenu(e, n)
		}
		focus() {
			this.props.preventTabKeyNavigationIntoList && (this.shouldUpdateTabIndexes = !0);
			var e = this.state.initialActiveItem;
			(!e || this.isItemInView(e)) && e ? this.setActiveItem(e, !0) : this.scrollToAndFocusFirstItemInView()
		}
		focusOnKey(e) {
			var {
				keys: t
			} = this.props;
			return !(!e || -1 === t.indexOf(e)) && (this.setActiveItem(e, !0), this.isItemInView(e) || this.scrollToKey(e), !0)
		}
		scrollToAndFocusFirstItemInView(e) {
			var t = this.getNextFirstFocusableItemInView(e);
			t && (this.setActiveItem(t, !0), this.scrollToKey(t))
		}
		blur() {
			var e, t = document.activeElement;
			(null === (e = this.getScrollerRef()) || void 0 === e ? void 0 : e.contains(t)) && t.blur()
		}
		getActiveItem() {
			return this.state.activeItem
		}
		setFirstHiddenTabStopRef(e) {
			this.firstHiddenTabStop = e
		}
		setLastHiddenTabStopRef(e) {
			this.lastHiddenTabStop = e
		}
		moveFocusToFirstTabStopInView() {
			if (this.node) {
				var e = this.getScrollerRef(),
					t = Object(p.d)(e);
				t && t.focus()
			}
		}
		moveFocusToLastTabStopInView() {
			if (this.node) {
				var e = this.getScrollerRef(),
					t = Object(p.e)(e);
				t && t.focus()
			}
		}
		isNodeScrolledOutOfView(e, t) {
			var a = e.getBoundingClientRect();
			return !(a.top >= t.top && a.bottom <= t.bottom && a.left >= t.left && a.right <= t.right)
		}
		removeAllItemsFromTabFlow() {
			var e = this.getScrollerRef();
			e && Object(p.a)(e).forEach((e => {
				(null == e ? void 0 : e.classList.contains("c-virtual_list__item")) || (e.setAttribute("tabindex", "-1"), e.dataset.removeTabIndex = "true")
			}))
		}
		removeItemsOutOfViewFromTabFlow() {
			if (this.state.hasKeyboardFocus && this.node) {
				var e = this.getScrollerRef(),
					t = e.getBoundingClientRect();
				e.querySelectorAll("[data-remove-tab-index]").forEach((e => {
					e.removeAttribute("tabindex"), delete e.dataset.removeTabIndex
				})), Object(p.a)(e).forEach((e => {
					(null == e ? void 0 : e.classList.contains("c-virtual_list__item")) || e.getAttribute("data-keep-tabindex") || this.isNodeScrolledOutOfView(e, t) && (e.setAttribute("tabindex", "-1"), e.dataset.removeTabIndex = "true")
				}))
			}
		}
		setActiveItem(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
			this.setState((() => ({
				hasKeyboardFocus: !0,
				activeItem: e,
				initialActiveItem: e,
				isInitialFocusInRange: t
			})))
		}
		haveActiveItem() {
			return null !== this.state.activeItem
		}
		getUniqueItemId(e) {
			var {
				id: t
			} = this.props;
			return t ? t + "_" + e : e
		}
		focusFirstItemInView() {
			var e = this.getFocusableItemsInView()[0];
			this.state.activeItem !== e && this.setActiveItem(e, !0)
		}
		focusLastItemInView() {
			var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
				t = this.getFocusableItemsInView(void 0, e),
				a = t[t.length - 1];
			this.state.activeItem !== a && this.setActiveItem(a, !0)
		}
		focusNextItem(e) {
			var t = this.getNextActiveItem(e, this.state.activeItem);
			t && (this.setActiveItem(t, !1), this.isItemInView(t, this.layout.anchorOffset) || this.scrollToKey(t))
		}
		getFocusableItemsInView(e, t) {
			var {
				keys: a,
				isFocusableItem: n
			} = this.props, {
				start: r,
				end: i
			} = this.getVisibleRange(e, t);
			return (r === i ? a.slice(r, r + 1) : a.slice(r, i)).filter((e => n({
				index: a.indexOf(e),
				key: e
			})))
		}
		getNextFirstFocusableItemInView(e) {
			var t = this.state.activeItem,
				a = this.getFocusableItemsInView(e)[0];
			return a && a === t || !a && t ? this.getNextActiveItem(u.n, t) : a
		}
		getNextLastFocusableItemInView(e) {
			var t = this.state.activeItem,
				a = this.getFocusableItemsInView(e),
				n = a[a.length - 1];
			return n && n === t || !n && t ? this.getNextActiveItem(u.c, t) : n
		}
		getInitialActiveItem() {
			return this.state.initialActiveItem
		}
		getNextActiveItem(e, t) {
			var a = this.state.initialActiveItem;
			if (!this.haveActiveItem()) return a && !this.isItemInView(a) ? this.getNextFirstFocusableItemInView() : a || this.getNextFirstFocusableItemInView();
			var n = t,
				r = this.props.keys.indexOf(n),
				i = e === u.n ? r - 1 : r + 1,
				s = this.props.keys[i];
			return s && !this.props.isFocusableItem({
				index: i,
				key: s
			}) ? this.getNextActiveItem(e, s) : s
		}
		renderItem(e, t) {
			var {
				activeItem: a,
				initialActiveItem: r,
				hasKeyboardFocus: i
			} = this.state, s = this.getTop(e), o = this.layout.getHeight(e), l = a === e, d = null === a && i && r === e, u = this.isItemInView(e), p = this.layout.getHeightValidity(e), m = i && !this.isScrolling() && this.getNextFirstFocusableItemInView(), {
				rowRenderer: h,
				getPropsForItem: b,
				onItemClick: f,
				onItemContextMenu: g,
				onItemKeyDown: v,
				shouldHorizontallyScroll: O,
				useStaticHeightForListItems: y,
				width: j
			} = this.props, S = this.getUniqueItemId(e), E = b({
				key: e,
				index: t,
				isInitialFocusInRange: l && this.state.isInitialFocusInRange,
				hasFocus: l,
				activeItem: a,
				initialActiveItem: r,
				firstItemInView: m
			}) || {};
			return c.a.createElement(_.a, Object(n.a)({
				tabIndex: this.getListItemTabIndex(e)
			}, E, {
				id: e,
				itemKey: e,
				key: e,
				height: o,
				validity: p,
				style: {
					top: s
				},
				hasFocus: l,
				hasFocusWithin: d,
				onFocusEnter: this.onItemFocusEnter,
				onFocusWithin: this.onItemFocusWithin,
				onFocusLeave: this.onItemFocusLeave,
				onTabWithin: this.onItemTabWithin,
				onHeightChange: this.setHeight,
				onMouseDown: this.onItemMouseDown,
				onContextMenu: g,
				onClick: f,
				onKeyDown: v,
				shouldHorizontallyScroll: O,
				useStaticHeight: y
			}), h(t, {
				key: e,
				hasFocus: l,
				hasFocusWithin: d,
				itemId: S,
				isExpanded: E["aria-expanded"],
				listWidth: j,
				isInView: u
			}))
		}
		renderHiddenTabStop(e) {
			var {
				key: t,
				tabIndex: a,
				ref: n
			} = e;
			if (this.props.hideHiddenStopTabs) return null;
			return c.a.createElement("div", {
				key: t,
				ref: n,
				tabIndex: a,
				style: {
					position: "absolute",
					width: "1px",
					height: "1px",
					outline: "none",
					boxShadow: "none",
					top: 0
				}
			})
		}
		render() {
			var {
				useHiddenTabStops: e,
				preventTabKeyNavigationIntoList: t
			} = this.props, {
				hasKeyboardFocus: a
			} = this.state, n = a ? "-1" : "0", r = !t && e, s = r ? this.renderHiddenTabStop({
				key: "first-hidden-tab-stop",
				tabIndex: n,
				ref: this.setFirstHiddenTabStopRef
			}) : null, o = r ? this.renderHiddenTabStop({
				key: "last-hidden-tab-stop",
				tabIndex: n,
				ref: this.setLastHiddenTabStopRef
			}) : null, l = Object(d.F)() ? "application" : "presentation";
			return c.a.createElement(b.a, {
				onFocusEnter: this.onFocusEnter,
				onFocusLeave: this.onFocusLeave
			}, c.a.createElement(f.a, {
				onFocus: i.a,
				onBlur: i.a,
				onFocusedElementRemoved: this.onFocusedElementRemoved
			}, c.a.createElement("div", {
				role: l,
				id: this.props.id
			}, s, super.render(), o)))
		}
	}
	KeyboardNavigableList.displayName = "KeyboardNavigableList", KeyboardNavigableList.propTypes = v, KeyboardNavigableList.defaultProps = O
}, oV5z: function (e, t, a) {}, oVGS: function (e, t, a) {}, oWWe: function (e, t, a) {
	"use strict";
	a.d(t, "a", (function () {
		return l
	}));
	var n = a("BeL+"),
		r = a("aK/h"),
		i = a("6jsb"),
		s = a("Mj3f"),
		o = a("9soY"),
		c = a("8YAP"),
		l = Object(i.c)("Channel/people search: fetch shared teams", (function (e, t) {
			var {
				reason: a,
				includeAll: r = !0
			} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = t(), l = "treatment" === Object(c.a)(i, "refine_your_search_filters"), d = l ? 5 : 3;
			return e(Object(s.I)()), e(Object(o.d)({
				includeAll: r,
				reason: a
			})).then((t => {
				if (!t.ok) throw new Error(t);
				var a = Object(n.a)(t.teams.map((e => e.id)));
				e(Object(s.J)({
					teamIds: a
				})), e(Object(s.l)({
					teamIds: a.slice(0, d)
				})), e(Object(s.A)({
					teamIds: a.slice(0, d)
				}))
			})).catch((() => {
				e(Object(s.H)())
			}))
		}));
	l.meta = {
		name: "fetchSharedTeams",
		key: "actionsUniversalSearchFetchSharedTeamsFetchSharedTeams",
		description: "Channel/people search: fetch shared teams"
	}, l.propTypes = {
		reason: r.default.string
	}
}