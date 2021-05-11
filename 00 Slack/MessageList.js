S9ky: function (e, t, n) {
	e.exports = n.p + "member_WREAL0002-32-2bc7a0a.jpg"
}, SB4q: function (e, t, n) {
	"use strict";
	var a = n("aK/h"),
		s = n("6jsb"),
		r = n("uvIC"),
		i = n("4phY"),
		o = n("N0/W"),
		c = n("P9LH"),
		l = n("HvGc");
	const d = Object(s.c)("Ensure a file exists and open it in the full screen file viewer", (function (e, t) {
		let {
			fileId: n,
			ts: a,
			channelId: s,
			threadTs: r,
			viewContext: i,
			isStackable: c
		} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
		u(e, t, {
			fileId: n,
			ts: a,
			channelId: s,
			threadTs: r,
			viewContext: i,
			isStackable: c
		}) || e(Object(o.e)({
			fileId: n,
			reason: "file-image-thumbnail.ensureFileAndOpenViewer"
		})).then((() => {
			u(e, t, {
				fileId: n,
				ts: a,
				channelId: s,
				threadTs: r,
				viewContext: i,
				isStackable: c
			})
		}))
	}));

	function u(e, t) {
		let {
			fileId: n,
			ts: a,
			channelId: s,
			threadTs: o,
			viewContext: d,
			isStackable: u
		} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
		const p = Object(r.c)(t(), n);
		return !!p && (Object(c.cb)(p) ? (e(Object(l.d)({
			fileId: n
		})), !0) : (e(Object(i.a)({
			fileId: n,
			ts: a,
			channelId: s,
			threadTs: o,
			viewContext: d,
			isStackable: u
		})), !0))
	}
	d.meta = {
		name: "ensureFileAndOpenViewer",
		key: "actionsEnsureFileAndOpenViewerEnsureFileAndOpenViewer",
		description: "Ensure a file exists and open it in the full screen file viewer"
	}, d.propTypes = {
		fileId: a.default.string
	}, t.a = d
}, SDRE: function (e, t, n) {
	"use strict";

	function a() {
		let {
			text: e,
			type: t
		} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
		return !(!e || e.trim()) || ("paragraph_break" === t || ("line_break" === t || "space_hard" === t))
	}
	n.d(t, "a", (function () {
		return a
	}))
}, SFtT: function (e, t, n) {
	"use strict";
	n.d(t, "a", (function () {
		return i
	}));
	var a = n("wNji"),
		s = n("zgq7");
	const r = Object(s.b)((e => e.links || {}));
	r.meta = {
		name: "getLinkState",
		key: "linksStoreSelectorsGetLinkState"
	};
	Object(s.b)(((e, t) => r(e)[t])).meta = {
		name: "getLinkByUrl",
		key: "linksStoreSelectorsGetLinkByUrl"
	};
	const i = Object(a.a)([r], (e => Object.values(e).filter((e => !e.fileId)).sort(((e, t) => (t.timestamp || 0) - (e.timestamp || 0)))))
}, SHa9: function (e, t, n) {
	"use strict";
	n.d(t, "a", (function () {
		return MessageList
	}));
	var a = n("qAkX"),
		s = n("F294"),
		r = n("ifKl"),
		i = n("4Z3G"),
		o = n("q1tI"),
		c = (n("aK/h"), n("YLnb")),
		l = n("LxWA");
	const d = {
		oldest: void 0,
		latest: void 0,
		startTs: !1,
		startTsOffset: 0,
		highlightKey: void 0,
		requestHistory: r.a,
		reachedStart: !0,
		reachedEnd: !0,
		layout: void 0,
		isFileExpanding: !1,
		onVisibleRowsChanged: r.a
	};
	class MessageList extends o.PureComponent {
		constructor(e) {
			super(e), this.onScroll = this.onScroll.bind(this), this.setListRef = this.setListRef.bind(this), this.loadAround = this.loadAround.bind(this), this.loadPre = this.loadPre.bind(this), this.loadPost = this.loadPost.bind(this), this.focus = this.focus.bind(this), this.onListScrolled = this.onListScrolled.bind(this), this.debouncedOnListScrolled = Object(l.a)(this.onListScrolled, 150), this.list = null, this.layout = e.layout || new c.a, this.layout.setAnchor(e.startTs), e.startTsOffset && (this.layout.anchorOffset = e.startTsOffset), this.layout.setStickToBottom(e.reachedEnd), this.state = {
				isLoading: !1
			}
		}
		UNSAFE_componentWillReceiveProps(e) {
			if (!this.list) throw new Error("MessageList needs a ref to List");
			(e.startTs !== this.props.startTs || e.highlightKey && e.highlightKey !== this.props.highlightKey) && (e.timestamps === this.props.timestamps ? this.list.scrollToKey(e.startTs, {
				lazy: !0
			}) : this.layout.setAnchor(e.startTs))
		}
		componentDidUpdate(e) {
			!e.reachedEnd && this.props.reachedEnd && this.layout.setAnchor(!1);
			!!e.isFileExpanding && !this.props.isFileExpanding ? this.layout.setStickToBottom(!1) : this.layout.setStickToBottom(this.props.reachedEnd), this.updateVisibleRows()
		}
		onListScrolled() {
			this.updateVisibleRows()
		}
		onScroll() {
			this.layout.setAnchor(!1), this.debouncedOnListScrolled()
		}
		getScrollmark() {
			if (!this.list) return null;
			const e = this.list.getScrollTop(),
				t = this.layout.shouldStickToBottom(e),
				n = this.props.timestamps,
				a = this.layout.findAnchor(n, n, e);
			return {
				mark: a,
				offset: this.layout.getTop(a) - e,
				stickToBottom: t
			}
		}
		setListRef(e) {
			this.list = e
		}
		focus() {
			this.list && this.list.focus()
		}
		loadAround() {
			if (this.state.isLoading) return !1;
			const {
				oldest: e,
				latest: t,
				reachedStart: n,
				reachedEnd: r,
				timestamps: o,
				startTs: c
			} = this.props;
			if (r) return this.loadPre();
			if (n) return this.loadPost();
			const l = t || Object(s.a)(o) || c,
				d = e || Object(a.a)(o) || c,
				u = this.props.requestHistory({
					latest: l,
					oldest: d
				});
			return u && (u.finally((() => i.a.delay(250))).then((() => this.setState((() => ({
				isLoading: !1
			}))))), this.setState((() => ({
				isLoading: "around"
			})))), u
		}
		loadPost() {
			if (this.state.isLoading) return !1;
			const {
				latest: e,
				reachedEnd: t,
				timestamps: n,
				startTs: s
			} = this.props;
			if (t) return !1;
			this.isLoading = !0;
			const r = e || Object(a.a)(n) || s,
				o = this.props.requestHistory({
					oldest: r
				});
			return o && (o.finally((() => i.a.delay(250))).then((() => this.setState((() => ({
				isLoading: !1
			}))))), this.setState((() => ({
				isLoading: "pre"
			})))), o
		}
		loadPre() {
			if (this.state.isLoading) return !1;
			const {
				oldest: e,
				reachedStart: t,
				timestamps: n,
				startTs: a
			} = this.props;
			if (t) return !1;
			const r = e || Object(s.a)(n) || a,
				o = this.props.requestHistory({
					latest: r
				});
			return o && (o.finally((() => i.a.delay(250))).then((() => this.setState((() => ({
				isLoading: !1
			}))))), this.setState((() => ({
				isLoading: "pre"
			})))), o
		}
		updateVisibleRows() {
			if (!this.list) return;
			const {
				start: e,
				end: t
			} = this.list.getVisibleRange(void 0, !1), {
				start: n,
				end: a
			} = this.list.getVisibleRange(void 0, !0);
			this.props.onVisibleRowsChanged(this.props.timestamps.slice(e, t), this.props.timestamps.slice(n, a))
		}
		render() {
			const {
				reachedStart: e,
				reachedEnd: t,
				timestamps: n
			} = this.props;
			return this.props.listRenderer({
				reachedStart: e,
				reachedEnd: t,
				keys: n,
				layout: this.layout,
				onScroll: this.onScroll,
				loadAround: this.loadAround,
				loadPre: this.loadPre,
				loadPost: this.loadPost,
				ref: this.setListRef
			})
		}
	}
	MessageList.displayName = "MessageList", MessageList.defaultProps = d
}