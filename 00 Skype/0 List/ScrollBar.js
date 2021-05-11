class f extends c.default {
        constructor(e) {
            if (super(e),
            this._wrapComponent = null,
            this._mounted = !1,
            this._customScrollbarEnabled = !0,
            this._dragging = !1,
            this._onScroll = r.throttle(e=>{
                if (this._mounted)
                    if (this._customScrollbarEnabled && this._customScrollbar && this._customScrollbar.update(),
                    window.ResizeObserver) {
                        const e = this._rootComponent;
                        if (!e || !this.props.onScroll)
                            return;
                        this.props.onScroll(e.scrollTop, e.scrollLeft)
                    } else {
                        const e = this._checkAndReportLayout();
                        c.default._reportDeferredLayoutChanges(),
                        this.props.onScroll && e.then(()=>{
                            const e = this._rootComponent;
                            e && this.props.onScroll(e.scrollTop, e.scrollLeft)
                        }
                        )
                    }
            }
            , this.props.scrollEventThrottle || 1e3 / 60, {
                leading: !0,
                trailing: !0
            }),
            this._onWrapRef = e=>{
                this._wrapComponent = e
            }
            ,
            this._onTouchStart = ()=>{
                this._dragging || (this._dragging = !0,
                this.props.onScrollBeginDrag && this.props.onScrollBeginDrag())
            }
            ,
            this._onTouchEnd = ()=>{
                this._dragging = !1,
                this.props.onScrollEndDrag && this.props.onScrollEndDrag()
            }
            ,
            !d) {
                d = !0;
                const e = o.default.getNativeScrollbarWidth();
                p.verticalStyle = {
                    overflowY: "scroll",
                    paddingRight: 30 - e,
                    marginRight: -30,
                    minHeight: 0
                },
                p.horizontalStyle = {
                    display: "flex",
                    overflowX: "scroll",
                    paddingBottom: 30 - e,
                    marginBottom: -30,
                    minWidth: 0
                },
                p.bothStyle = s.default.combine([p.verticalStyle, p.horizontalStyle])
            }
        }
        componentDidUpdate() {
            super.componentDidUpdate(),
            this.props.onContentSizeChange && r.defer(()=>{
                if (this.props.onContentSizeChange) {
                    const e = this._rootComponent;
                    if (!e)
                        return;
                    this.props.onContentSizeChange(e.scrollWidth, e.scrollHeight)
                }
            }
            )
        }
        render() {
            return this._customScrollbarEnabled ? this._renderWithCustomScrollbar() : this._renderNormal()
        }
        UNSAFE_componentWillMount() {
            this._onPropsChange(this.props)
        }
        componentDidMount() {
            super.componentDidMount(),
            this._mounted = !0,
            this.createCustomScrollbarsIfNeeded(this.props)
        }
        UNSAFE_componentWillReceiveProps(e) {
            super.UNSAFE_componentWillReceiveProps(e),
            this._onPropsChange(e)
        }
        componentWillUnmount() {
            super.componentWillUnmount(),
            this._mounted = !1,
            this._customScrollbar && (this._customScrollbar.dispose(),
            this._customScrollbar = void 0)
        }
        _onPropsChange(e) {
            this._customScrollbarEnabled = u.default.useCustomScrollbars(),
            this.createCustomScrollbarsIfNeeded(e)
        }
        createCustomScrollbarsIfNeeded(e) {
            if (this._mounted && this._customScrollbarEnabled) {
                const t = !this.props.ignoreRTL && a.default.isRTL();
                if (this._customScrollbar) {
                    if (this.props.horizontal === e.horizontal && this.props.vertical === e.vertical && this.props.showsHorizontalScrollIndicator === e.showsHorizontalScrollIndicator && this.props.showsVerticalScrollIndicator === e.showsVerticalScrollIndicator && this._customScrollbar.isRTL() === t)
                        return;
                    this._customScrollbar.dispose(),
                    this._customScrollbar = void 0
                }
                this._wrapComponent && this._wrapComponent.ownerDocument && !this._wrapComponent.ownerDocument.defaultView ? r.defer(()=>this._initScrollbar(this._wrapComponent, this._rootComponent, t, e)) : this._initScrollbar(this._wrapComponent, this._rootComponent, t, e)
            }
        }
        _initScrollbar(e, t, n, r) {
            if (e && t && e.ownerDocument && e.ownerDocument.defaultView) {
                this._customScrollbar = new o.default(e,t);
                const i = r.horizontal && !1 === r.showsHorizontalScrollIndicator
                  , a = r.vertical && !1 === r.showsVerticalScrollIndicator;
                this._customScrollbar.init({
                    horizontal: r.horizontal && !i,
                    vertical: r.vertical && !a,
                    hiddenScrollbar: i || a,
                    isRTL: n
                })
            }
        }
        _getContainerStyle() {
            let e = [{
                display: "block"
            }]
              , t = this._customScrollbarEnabled ? p : l;
            e.push(t.defaultStyle),
            this.props.horizontal && this.props.vertical ? e.push(t.bothStyle) : this.props.horizontal ? e.push(t.horizontalStyle) : e.push(t.verticalStyle);
            let n = s.default.combine([e, this.props.style]);
            return !this.props.ignoreRTL && a.default.isRTL() && n && (n = s.default.rtlFlip(n)),
            n
        }
        _renderNormal() {
            return i.createElement("div", {
                ref: this._setRootRef,
                role: "none",
                onScroll: this._onScroll,
                onTouchStart: this._onTouchStart,
                onTouchEnd: this._onTouchEnd,
                style: this._getContainerStyle(),
                "data-test-id": this.props.testId
            }, this.props.children)
        }
        _renderWithCustomScrollbar() {
            let e = p.customScrollContainer
              , t = ["scrollViewport"];
            return this.props.horizontal && t.push("scrollViewportH"),
            (this.props.vertical || void 0 === this.props.vertical) && (t.push("scrollViewportV"),
            e = r.extend({}, p.customScrollVertical, e)),
            i.createElement("div", {
                role: "none",
                ref: this._onWrapRef,
                className: "rxCustomScroll",
                style: e,
                "data-test-id": this.props.testId,
                dir: this.props.ignoreRTL ? "ltr" : void 0
            }, i.createElement("div", {
                ref: this._setRootRef,
                role: "none",
                className: t.join(" "),
                onScroll: this._onScroll,
                style: this._getContainerStyle(),
                onKeyDown: this.props.onKeyPress,
                onFocus: this.props.onFocus,
                onBlur: this.props.onBlur,
                onTouchStart: this._onTouchStart,
                onTouchEnd: this._onTouchEnd
            }, this.props.children))
        }
        setScrollTop(e, t=!1) {
            const n = this._rootComponent;
            if (n)
                if (this._onScroll.cancel(),
                t) {
                    const t = n.scrollTop
                      , r = e - t
                      , i = 20
                      , o = 200
                      , a = e=>{
                        e += i;
                        var s = this._easeInOut(e, t, r, o);
                        n.scrollTop = s,
                        e < o && setTimeout((function() {
                            a(e)
                        }
                        ), i)
                    }
                    ;
                    a(0)
                } else
                    n.scrollTop = e
        }
        setScrollLeft(e, t=!1) {
            const n = this._rootComponent;
            if (n)
                if (this._onScroll.cancel(),
                t) {
                    const t = n.scrollLeft
                      , r = e - t
                      , i = 20
                      , o = 200
                      , a = e=>{
                        e += i;
                        var s = this._easeInOut(e, t, r, o);
                        n.scrollLeft = s,
                        e < o && setTimeout((function() {
                            a(e)
                        }
                        ), i)
                    }
                    ;
                    a(0)
                } else
                    n.scrollLeft = e
        }
        _easeInOut(e, t, n, r) {
            return (e /= r / 2) < 1 ? n / 2 * e * e + t : -n / 2 * ((e -= 1) * (e - 2) - 1) + t
        }
    }
    t.ScrollView = f,
    t.default = f
}