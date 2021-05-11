j6qi: function (e, t, a) {
	"use strict";
	a.d(t, "a", (function () {
		return StickyList
	}));
	var n = a("wx14"),
		r = a("3/My"),
		i = a("7EGn"),
		s = a("q1tI"),
		o = a.n(s),
		c = a("aK/h"),
		l = a("TSYQ"),
		d = a.n(l),
		u = a("eK0w"),
		p = a("nUcG");

	function m(e) {
		for (var t = {}, a = 0; a < e.length; a++) t[e[a].key] = {
			index: e[a].index,
			next: Object(i.a)(e[a + 1], "key")
		};
		return t
	}
	var h = Object.assign({}, u.a.propTypes, {
			stickyItems: c.default.arrayOf(c.default.shape({
				key: c.default.string,
				index: c.default.number
			})),
			stickyOffsetTop: c.default.number,
			stickyZIndex: c.default.number
		}),
		b = Object.assign({}, u.a.defaultProps, {
			stickyItems: [],
			stickyOffsetTop: 0,
			stickyZIndex: null
		});
	class StickyList extends u.a {
		constructor(e) {
			super(e), this.stickyItems = m(e.stickyItems)
		}
		UNSAFE_componentWillReceiveProps(e) {
			super.UNSAFE_componentWillReceiveProps(e), this.stickyItems = m(e.stickyItems)
		}
		renderItem(e, t) {
			if (!(e in this.stickyItems)) return super.renderItem(e, t);
			var {
				activeItem: a,
				initialActiveItem: r,
				hasKeyboardFocus: i
			} = this.state, s = 0 === t ? -100 : this.getTop(e), c = this.layout.getHeight(e), l = this.layout.getHeightValidity(e), u = this.getContentHeight(), m = this.stickyItems[e].next, h = m ? this.getTop(m) : u, b = Math.max(0, u - h), f = this.state.activeItem === e, g = null === a && i && r === e, _ = this.isItemInView(e), {
				rowRenderer: v,
				getPropsForItem: O,
				onItemClick: y,
				onItemContextMenu: j,
				onItemKeyDown: S,
				shouldHorizontallyScroll: E,
				useStaticHeightForListItems: C,
				width: k
			} = this.props, I = this.getUniqueItemId(e), w = O({
				key: e,
				index: t,
				isInitialFocusInRange: f && this.state.isInitialFocusInRange,
				hasFocus: f,
				activeItem: a,
				firstItemInView: i && !this.isScrolling() && this.getNextFirstFocusableItemInView(),
				initialActiveItem: r
			}) || {}, T = d()(w.className, "c-virtual_list__item--sticky"), A = "" + e + this.props.width + this.props.height, N = d()("c-virtual_list__sticky_container", {
				"c-virtual_list__sticky_container--focus": f
			});
			return o.a.createElement("div", {
				key: A,
				className: N,
				role: "presentation",
				style: {
					top: s,
					bottom: b
				}
			}, o.a.createElement(p.a, Object(n.a)({
				tabIndex: this.getListItemTabIndex(e)
			}, w, {
				id: e,
				itemKey: e,
				key: e,
				height: c,
				validity: l,
				className: T,
				style: {
					top: this.props.stickyOffsetTop,
					zIndex: this.props.stickyZIndex
				},
				hasFocus: f,
				hasFocusWithin: g,
				onFocusEnter: this.onItemFocusEnter,
				onFocusWithin: this.onItemFocusWithin,
				onFocusLeave: this.onItemFocusLeave,
				onTabWithin: this.onItemTabWithin,
				onHeightChange: this.setHeight,
				onClick: y,
				onKeyDown: S,
				onContextMenu: j,
				onMouseDown: this.onItemMouseDown,
				shouldHorizontallyScroll: E,
				useStaticHeight: C
			}), v(t, {
				key: e,
				hasFocus: f,
				hasFocusWithin: g,
				isExpanded: w["aria-expanded"],
				itemId: I,
				listWidth: k,
				isInView: _
			})))
		}
		renderItems() {
			var e = super.renderItems(),
				t = this.state.start,
				a = Object(r.a)(this.props.stickyItems, {
					index: t
				}, (e => e.index)) - 1,
				n = this.props.stickyItems[a];
			return n && e.unshift(this.renderItem(n.key, n.index)), e
		}
	}
	StickyList.propTypes = h, StickyList.defaultProps = b
}, j874: function (e, t, a) {
	"use strict";
	a.r(t);
	var n = a("aK/h"),
		r = a("AFNo"),
		i = a("LUg0"),
		s = Object(r.f)("Create a post shortcut - dispatches action to create post", ((e, t, a) => {
			var {
				channelId: n
			} = a;
			e(Object(i.a)({
				channelId: n
			}))
		}));
	s.meta = {
		name: "createPostShortcut",
		key: "componentsShortcutsMenuV2ShortcutsCreatePostShortcutCreatePostShortcut",
		description: "Create a post shortcut - dispatches action to create post"
	}, s.propTypes = {
		channelId: n.default.string
	}, t.default = s
}