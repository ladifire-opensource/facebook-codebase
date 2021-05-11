tQ8E: function (e, t, a) {
	"use strict";
	a.d(t, "a", (function () {
		return list_List
	}));
	var n = a("wx14"),
		r = a("ifKl"),
		i = (a("aK/h"), a("q1tI")),
		s = a.n(i),
		o = a("TSYQ"),
		c = a.n(o),
		l = a("LxWA"),
		d = a("L2yB"),
		u = (a("2ghN"), {
			children: void 0,
			contentHeight: void 0,
			trackTop: 4,
			trackBottom: 4,
			color: void 0,
			className: void 0,
			alwaysVisible: !1,
			role: "presentation",
			"aria-label": void 0,
			"aria-describedby": void 0,
			onScroll: void 0,
			initialScrollTop: 0,
			id: void 0,
			inheritSize: !1,
			onContextMenu: r.a
		});
	class scrollbar_v2_ScrollbarV2 extends i.PureComponent {
		constructor(e) {
			super(e), this.onTrackDown = this.onTrackDown.bind(this), this.onThumbDown = this.onThumbDown.bind(this), this.onThumbDrag = this.onThumbDrag.bind(this), this.onThumbUp = this.onThumbUp.bind(this), this.scrollRef = s.a.createRef(), this.delta = {}
		}
		componentDidMount() {
			this.props.initialScrollTop && this.scrollRef.current && (this.scrollRef.current.scrollTop = this.props.initialScrollTop)
		}
		onThumbDown(e) {
			e.preventDefault(), e.stopPropagation();
			var t = this.props.contentHeight,
				a = this.props.height;
			this.delta.y = e.clientY, this.delta.top = this.scrollTop(), this.delta.speed = t / a, document.addEventListener("mousemove", this.onThumbDrag), document.addEventListener("mouseup", this.onThumbUp), document.addEventListener("mouseleave", this.onThumbUp)
		}
		onThumbDrag(e) {
			e.preventDefault(), e.stopPropagation();
			var t = (e.clientY - this.delta.y) * this.delta.speed,
				a = this.delta.top + t;
			this.scrollTop(a)
		}
		onThumbUp() {
			document.removeEventListener("mousemove", this.onThumbDrag), document.removeEventListener("mouseup", this.onThumbUp), document.removeEventListener("mouseleave", this.onThumbUp)
		}
		onTrackDown(e) {
			var t = e.nativeEvent.offsetY - this.scrollTop(),
				a = Math.max(this.props.height ** 2 / this.props.contentHeight, 50),
				n = (t - a / 2) / (this.props.height - a);
			this.scrollRef.current.scrollTop = n * (this.props.contentHeight - this.props.height)
		}
		getBoundingClientRect() {
			return this.scrollRef.current.getBoundingClientRect()
		}
		scrollTop(e) {
			return this.scrollRef.current ? (void 0 !== e && (this.scrollRef.current.scrollTop = e), this.scrollRef.current.scrollTop) : null
		}
		render() {
			var {
				width: e,
				height: t,
				contentHeight: a,
				className: n,
				inheritSize: r,
				trackTop: i,
				trackBottom: o,
				alwaysVisible: l,
				id: d,
				role: u,
				onContextMenu: p,
				onScroll: m,
				children: h,
				color: b
			} = this.props, f = Math.max(t ** 2 / a, 50), g = (a - t) / (t - f - i - o), _ = r ? void 0 : {
				width: e,
				height: t
			};
			return s.a.createElement("div", {
				className: c()(n, "c-scrollbar2", {
					"c-scrollbar2--hidden": t >= a,
					"c-scrollbar2--visible": l
				}),
				id: d,
				style: _,
				role: u,
				"aria-label": this.props["aria-label"],
				"aria-describedby": this.props["aria-describedby"],
				onContextMenu: p
			}, s.a.createElement("div", {
				className: "c-scrollbar2__hider",
				style: {
					width: e + 50
				},
				role: "presentation",
				onScroll: m,
				ref: this.scrollRef
			}, s.a.createElement("div", {
				className: "c-scrollbar2__content"
			}, h, s.a.createElement("div", {
				className: "c-scrollbar2__track",
				role: "presentation",
				onMouseDown: this.onTrackDown
			})), s.a.createElement("div", {
				className: "c-scrollbar2__thumb",
				style: {
					height: f,
					background: b,
					transform: "\n\t\t\t\t\t\t\tscale(" + g + ")\n\t\t\t\t\t\t\tmatrix3d(\n\t\t\t\t\t\t\t\t1,0,0,0,\n\t\t\t\t\t\t\t\t0,1,0,0,\n\t\t\t\t\t\t\t\t0,0,1,0,\n\t\t\t\t\t\t\t\t0,0,0,-1\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\ttranslateZ(-" + (g + 1) + "px)\n\t\t\t\t\t\t\ttranslateX(" + (e - 8 - 4) + "px)\n\t\t\t\t\t\t\ttranslateY(" + i + "px)\n\t\t\t\t\t\t"
				},
				role: "presentation",
				onMouseDown: this.onThumbDown
			})))
		}
	}
	scrollbar_v2_ScrollbarV2.displayName = "ScrollbarV2", scrollbar_v2_ScrollbarV2.defaultProps = u;
	var p = a("nUcG"),
		m = a("z0G2"),
		h = (a("58KB"), {
			className: "",
			containerClassName: "",
			layout: void 0,
			role: "list",
			"aria-label": void 0,
			"aria-describedby": void 0,
			persistentKeys: [],
			usePersistentOrder: !1,
			fadeScrollbar: !1,
			onScroll: r.a,
			onContentScroll: r.a,
			onSelectionChange: r.a,
			onItemContextMenu: r.a,
			getPropsForItem: r.a,
			shouldHorizontallyScroll: !1,
			scrollbarAlwaysVisible: !1,
			id: void 0,
			useStaticHeightForListItems: !1,
			useFixedTrackHeightForScrollbar: !1,
			useScrollbarV2: !1,
			initialScrollTop: 0,
			siblingNode: null
		});
	class list_List extends i.PureComponent {
		constructor(e) {
			super(e), this.onScroll = this.onScroll.bind(this), 
			this.onContentScroll = this.onContentScroll.bind(this), 
			this.onSelectionChange = this.onSelectionChange.bind(this), 
			this.setRef = this.setRef.bind(this), 
			this.setContentRef = this.setContentRef.bind(this), 
			this.setHeight = this.setHeight.bind(this), 
			this.getScrollTop = this.getScrollTop.bind(this), 
			this.getVisibleRange = this.getVisibleRange.bind(this), 
			this.isItemInView = this.isItemInView.bind(this), 
			this.onScrollStart = this.onScrollStart.bind(this), 
			this.onScrollEnd = Object(l.a)(this.onScrollEnd.bind(this), 50), 
			this.onItemContextMenu = this.onItemContextMenu.bind(this), 
			this.onContentContextMenu = this.onContentContextMenu.bind(this), this.layout = e.layout || new m.a, this.node = null, this.contentNode = null, this.isSelecting = !1, this.selectionStart = null, this.selectionEnd = null, this.scrollStartTimeout = null, this.layout.setKeys(e.keys);
			var {
				start: t,
				end: a
			} = this.getBounds(0, e.height);
			this.state = {
				start: t,
				end: a,
				scrolling: !1
			}
		}
		componentDidMount() {
			document.addEventListener("selectionchange", this.onSelectionChange)
		}
		UNSAFE_componentWillReceiveProps(e) {
			e.width !== this.props.width && this.layout.heightCache.invalidate(), this.layout.setKeys(e.keys), this.relayout()
		}
		componentWillUnmount() {
			this.scrollStartTimeout && clearTimeout(this.scrollStartTimeout), document.removeEventListener("selectionchange", this.onSelectionChange)
		}
		onContentScroll(e) {
			this.props.onContentScroll(e)
		}
		onScroll(e) {
			this.onScrollEnd(), this.scrollStartTimeout || this.isScrolling() || e.target !== this.getScrollerRef() || (this.scrollStartTimeout = setTimeout(this.onScrollStart, 100)), this.relayout(), this.props.onScroll(e, {
				scrollTop: this.getScrollTop(),
				scrollHeight: this.getContentHeight(),
				clientHeight: this.props.height
			})
		}
		onContentContextMenu() {}
		onScrollEnd() {
			this.scrollStartTimeout && (clearTimeout(this.scrollStartTimeout), this.scrollStartTimeout = null), this.setState((e => e.scrolling ? {
				scrolling: !1
			} : null))
		}
		onScrollStart() {
			this.setState((() => ({
				scrolling: !0
			})), this.onScrollEnd), this.scrollStartTimeout = null
		}
		onSelectionChange() {
			this.node && (window.getSelection && "Range" === window.getSelection().type && this.contentNode && this.contentNode.contains(window.getSelection().anchorNode) ? (this.isSelecting = !0, this.selectionStart = this.props.keys[this.state.start], this.selectionEnd = this.props.keys[this.state.end - 1]) : (this.isSelecting = !1, this.selectionStart = null, this.selectionEnd = null), this.props.onSelectionChange(this.isSelecting))
		}
		onItemContextMenu(e, t) {
			this.props.onItemContextMenu(e, t)
		}
		getBottom(e) {
			return this.layout.getBottom(e)
		}
		getBounds(e, t) {
			this.onSelectionChange();
			var a = e,
				n = t;
			return this.selectionStart && (a = Math.min(a, this.layout.getTop(this.selectionStart))), this.selectionEnd && (n = Math.max(n, this.layout.getTop(this.selectionEnd))), this.layout.getBounds(a, n)
		}
		getBoundingClientRect() {
			return this.getScrollerRef().getBoundingClientRect()
		}
		getClassName() {
			return c()("c-virtual_list", "c-virtual_list--scrollbar", this.props.className)
		}
		getContainerHeight() {
			return this.props.height
		}
		getContentHeight() {
			return this.layout.getTotalHeight()
		}
		getContentsClassName() {
			return c()("c-virtual_list__scroll_container", this.props.containerClassName, {
				"c-virtual_list__scroll_container--scrolling": this.isScrolling() && !this.isSelecting
			})
		}
		getScrollTop() {
			return this.node ? this.node.scrollTop() : null
		}
		getScrollerRef() {
			var e, t, a;
			return this.props.useScrollbarV2 ? null === (t = this.node) || void 0 === t || null === (a = t.scrollRef) || void 0 === a ? void 0 : a.current : null === (e = this.node) || void 0 === e ? void 0 : e.scroller
		}
		getTop(e) {
			return this.layout.getTop(e)
		}
		getVisibleRange() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getScrollTop(),
				t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
				{
					keys: a,
					height: n
				} = this.props,
				{
					start: r,
					end: i
				} = this.layout.getBounds(e, e + n);
			if (t) return {
				start: r,
				end: i
			};
			var s = this.layout.getTop(a[r]) < e - 1 ? r + 1 : r,
				o = this.layout.getBottom(a[i - 1]) > e + n + 1 ? i - 1 : i,
				c = Math.min(s, a.length - 1);
			return {
				start: c,
				end: Math.max(o, c)
			}
		}
		setContentRef(e) {
			this.contentNode = e
		}
		setHeight(e, t) {
			e && (Math.abs(t - this.layout.getHeight(e)) < .5 || (this.layout.setHeight(e, t), this.relayout()))
		}
		setRef(e) {
			this.node = e
		}
		setScrollTop(e) {
			this.node && this.node.scrollTop(Math.ceil(e))
		}
		bracketScrollTop(e) {
			return Math.max(0, Math.min(this.getContentHeight() - this.props.height, e))
		}
		isItemAboveView(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
				a = this.getScrollTop() + t;
			return this.layout.getBottom(e) < a
		}
		isItemBelowView(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
				a = this.getScrollTop();
			return this.layout.getTop(e) > a + (this.props.height - t)
		}
		isItemInView(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
				a = this.getScrollTop(),
				n = this.layout.getTop(e);
			return n >= a + t && n <= a + (this.props.height - t)
		}
		isScrolledToBottom() {
			return this.getScrollTop() + this.getContainerHeight() >= this.layout.getTotalHeight() - 1
		}
		isScrolledToTop() {
			return Math.floor(this.getScrollTop()) <= 1
		}
		isScrolling() {
			return this.state.scrolling
		}
		relayout() {
			this.setState(((e, t) => {
				var a = this.getScrollTop(),
					n = t.height / 2,
					r = a - n,
					i = a + t.height + n,
					{
						start: s,
						end: o
					} = this.getBounds(r, i),
					c = this.layout.getTops();
				return s === e.start && o === e.end && c === e.tops ? null : {
					start: s,
					end: o,
					tops: c
				}
			}))
		}
		scrollToKey(e) {
			var {
				lazy: t,
				animate: a,
				offset: n = 0
			} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
			if (!t || !this.isItemInView(e)) {
				var r = this.layout.getOffsetForKey(e);
				this.scrollToOffset(r + n, {
					animate: a
				})
			}
		}
		scrollToOffset(e) {
			var {
				animate: t
			} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
			if (this.node) {
				var a = this.bracketScrollTop(e);
				t ? this.node.scrollWithAnimation(a) : (this.scrollTop = a, this.setScrollTop(a))
			}
		}
		renderContents() {
			var e = this.getContentsClassName(),
				t = this.getContentHeight(),
				a = this.renderItems();
			return s.a.createElement("div", {
				"data-qa": "slack_kit_list",
				ref: this.setContentRef,
				className: e,
				role: "presentation",
				style: {
					position: "relative",
					height: t
				}
			}, a)
		}
		renderItem(e, t) {
			var a = this.getTop(e),
				r = this.layout.getHeight(e),
				i = this.layout.getHeightValidity(e),
				{
					rowRenderer: o,
					getPropsForItem: c,
					shouldHorizontallyScroll: l
				} = this.props,
				d = c({
					key: e,
					index: t
				}) || {};
			return s.a.createElement(p.a, Object(n.a)({}, d, {
				id: e,
				itemKey: e,
				key: e,
				height: r,
				style: {
					top: a
				},
				onHeightChange: this.setHeight,
				onContextMenu: this.onItemContextMenu,
				validity: i,
				shouldHorizontallyScroll: l,
				useStaticHeight: this.props.useStaticHeightForListItems
			}), o(t, {
				key: e,
				isExpanded: d["aria-expanded"]
			}))
		}
		renderItems() {
			var {
				keys: e,
				persistentKeys: t,
				usePersistentOrder: a
			} = this.props, {
				start: n,
				end: r
			} = this.state, i = [];
			if (a) {
				for (var s = {}, o = 0; o < t.length; o++) s[t[o]] = !0;
				for (var c = 0; c < e.length; c++) {
					var l = e[c];
					l && (s[l] || c >= n && c <= r) && i.push(this.renderItem(l, c))
				}
			} else {
				for (var d = n; d < r; d++) {
					var u = e[d];
					u && i.push(this.renderItem(u, d))
				}
				t.forEach((t => {
					var a = e.indexOf(t);
					a < 0 || a >= n && a < r || i.push(this.renderItem(t, a))
				}))
			}
			return i
		}
		render() {
			var {
				width: e,
				height: t
			} = this.props;
			if (0 === e || 0 === t) return null;
			var a = this.getClassName(),
				n = this.renderContents(),
				r = this.props.useScrollbarV2 ? scrollbar_v2_ScrollbarV2 : d.a;
			return s.a.createElement(r, {
				className: a,
				width: e,
				height: this.getContainerHeight(),
				contentHeight: this.getContentHeight(),
				trackTop: 12,
				onTrackClick: d.a.track.page,
				onScroll: this.onScroll,
				onContentScroll: this.onContentScroll,
				onContextMenu: this.onContentContextMenu,
				anchor: "bottom",
				role: this.props.role,
				"aria-label": this.props["aria-label"],
				"aria-describedby": this.props["aria-describedby"],
				id: this.props.id,
				ref: this.setRef,
				fade: this.props.fadeScrollbar,
				useFixedTrackHeight: this.props.useFixedTrackHeightForScrollbar,
				alwaysVisible: this.props.scrollbarAlwaysVisible || this.state.hasKeyboardFocus,
				initialScrollTop: this.props.initialScrollTop
			}, n, this.props.siblingNode)
		}
	}
	list_List.displayName = "List", list_List.defaultProps = h
}