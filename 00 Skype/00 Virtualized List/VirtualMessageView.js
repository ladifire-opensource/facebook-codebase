1840: function(e, t, s) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const i = s(1)
          , o = (s(3179),
        s(166))
          , n = s(1833)
          , r = s(86)
          , a = s(0)
          , l = s(6)
          , c = s(902)
          , d = s(2)
          , h = s(3)
          , u = s(38)
          , p = s(118)
          , g = s(121)
          , m = s(5)
          , S = s(376)
          , y = s(76)
          , f = s(1839)
          , _ = s(686)
          , v = s(433)
          , C = s(14)
          , b = _.SwiftSuggestionStyles.suggestionsBarHeight
          , T = m.lazyProperties({
            scrollOuterContainer: ()=>a.Styles.createViewStyle({
                flex: 1,
                alignSelf: "stretch",
                overflow: "visible"
            }),
            scrollInnerContainer: ()=>a.Styles.createViewStyle({
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0
            }),
            scrollInnerContainerAbsoluteFill: ()=>C.absoluteFill,
            scrollView: ()=>a.Styles.createScrollViewStyle({
                flex: 1,
                alignSelf: "stretch",
                flexDirection: "column"
            }),
            staticContainer: ()=>a.Styles.createViewStyle({
                flex: -1,
                opacity: 1,
                flexDirection: "column"
            }),
            compositeItemsListContainer: ()=>a.Styles.createViewStyle({
                flex: 1,
                flexDirection: "row"
            })
        })
          , M = {}
          , w = {};
        var I, P;
        !function(e) {
            e[e.UnmeasuredAbove = 0] = "UnmeasuredAbove",
            e[e.UnmeasuredBelow = 1] = "UnmeasuredBelow",
            e[e.UnmeasuredInside = 2] = "UnmeasuredInside",
            e[e.UnmeasuredInsideNoAnimation = 3] = "UnmeasuredInsideNoAnimation",
            e[e.Measured = 4] = "Measured"
        }(I || (I = {})),
        function(e) {
            e[e.Undefined = 0] = "Undefined",
            e[e.WaitingForScroll = 1] = "WaitingForScroll"
        }(P || (P = {}));
        class k {
            constructor() {
                this._average = 0,
                this._count = 0
            }
            input(e) {
                const t = 1 / (this._count + 1)
                  , s = t * this._count;
                this._average = e * t + this._average * s,
                this._count++
            }
            correct(e) {
                this._average += e / this._count
            }
            getAverage() {
                return Math.round(this._average)
            }
        }
        class A extends a.Component {
            constructor(e) {
                super(e),
                this._lastScrollTop = 0,
                this._lastScrollTopSetByUser = 0,
                this._lastScrollLeft = 0,
                this._viewportHeight = 0,
                this._oldViewportHeight = 0,
                this._viewportWidth = 0,
                this._lastContainerLayoutTime = 0,
                this._virtualListCells = {},
                this._virtualListCellRefCallbacks = {},
                this._scrollOuterContainerHeight = 0,
                this._contentWidth = -1,
                this._isMounted = !1,
                this._containerHeight = 0,
                this._containerHeightValue = new a.Animated.Value(this._containerHeight),
                this._containerAnimatedStyle = a.Styles.createAnimatedViewStyle({
                    height: this._containerHeightValue
                }),
                this._isInitialInnerScrollContainerHeightMeasured = !1,
                this._innerScrollContainerHeight = 0,
                this._innerScrollContainerHeightValue = new a.Animated.Value(this._innerScrollContainerHeight),
                this._scrollInnerContainerStyle = a.Styles.createAnimatedViewStyle({
                    height: this._innerScrollContainerHeightValue
                }),
                this._itemList = [],
                this._itemMap = {},
                this._isRenderDirty = !1,
                this._itemListChangedSinceLastVisibleRangeChange = !1,
                this._heightAboveRenderBlockEstimate = 0,
                this._heightAboveRenderBlockCorrection = 0,
                this._heightOfRenderBlock = 0,
                this._heightBelowRenderBlockEstimate = 0,
                this._heightBelowRenderBlockCorrection = 0,
                this._itemsAboveRenderBlock = 0,
                this._itemsInRenderBlock = 0,
                this._itemsBelowRenderBlock = 0,
                this._pendingMeasures = {},
                this._pendingMounts = {},
                this._pendingAnimations = {},
                this._filledViewableScreen = !1,
                this._heightCache = {},
                this._renderInfoCache = {},
                this._lastPartialTopVisibleItem = -1,
                this._lastPartialBottomVisibleItem = -1,
                this._lastWholeTopVisibleItem = -1,
                this._lastWholeBottomVisibleItem = -1,
                this._onListChangedQueue = [],
                this._onLayoutItemQueue = [],
                this._onAnimateStartStopItemQueue = [],
                this._scrollPositionsHistory = [],
                this._currentAverageHeight = 0,
                this._averageHeightCounter = new k,
                this._isScreenReaderEnabled = !1,
                this._onLayoutOuterScrollContainer = e=>{
                    if (h.log(d.LogTraceArea.VirtualMessageView, "onLayoutOuterScrollContainer: width " + e.width + " height " + e.height),
                    !this._isMounted)
                        return;
                    const t = 0 !== p.getUpdateInfo().height;
                    if (!this.props.allowKeyboardLayoutUpdates && t && this._isInitialInnerScrollContainerHeightMeasured)
                        return void h.log(d.LogTraceArea.VirtualMessageViewDebug, "onLayoutOuterScrollContainer: ignoring event because keyboard is shown, height: " + Math.round(e.height));
                    const s = Math.round(e.height);
                    0 !== s ? (t || (this._isInitialInnerScrollContainerHeightMeasured = !0),
                    this._scrollOuterContainerHeight = s,
                    0 === this._innerScrollContainerHeight ? (this._shouldStartFromTop() ? (this._innerScrollContainerHeightValue.setValue(this._heightOfRenderBlock),
                    this._containerHeightValue.setValue(this._heightOfRenderBlock)) : (this._innerScrollContainerHeight = s,
                    this._innerScrollContainerHeightValue.setValue(s)),
                    this._currentState.onLayoutListContainer(e, !0)) : this._currentState.onLayoutListContainer(e, !1)) : h.log(d.LogTraceArea.VirtualMessageViewDebug, "onLayoutOuterScrollContainer: height is 0 - probably transient event during rotation")
                }
                ,
                this._onScroll = (e,t)=>{
                    this._onScrollHandlerDebounced(e, t)
                }
                ,
                this._onScrollHandlerDebounced = i.debounce(this._onScrollHandler, 100),
                this._onReportUserScrollEvent = ()=>{
                    this._reportUserScrollEvent && (this._reportUserScrollEvent = !1,
                    this.props.onUserScroll && this.props.onUserScroll(this._lastScrollTop, this._lastScrollLeft))
                }
                ,
                this._onAnimateStartStopItem = (e,t)=>{
                    this._isMounted && (t ? this._pendingAnimations[e] = e : delete this._pendingAnimations[e])
                }
                ,
                this._onKeyPress = e=>{
                    if (e.keyCode !== g.UP && e.keyCode !== g.DOWN || !this._renderedItemKeys || !this._focusedItemKey)
                        return;
                    if (e.altKey || e.ctrlKey || e.shiftKey)
                        return;
                    const t = this._renderedItemKeys.filter(e=>e !== f.ItemListKey.Composing);
                    let s = t.indexOf(this._focusedItemKey)
                      , i = void 0;
                    s >= 0 && (i = this._virtualListCells[this._focusedItemKey]);
                    let o, n = void 0, r = void 0;
                    s >= 0 && (o = s + (e.keyCode === g.UP ? -1 : 1),
                    n = t[o]),
                    n || (o = this._renderedItemKeys.length - 1,
                    n = t[o]),
                    n && (r = this._virtualListCells[n]),
                    r && i !== r && (i && i.setFocusLimited(!0),
                    r.setFocusLimited(!1),
                    this._focusedItemKey = n,
                    r.focusCell(),
                    e.preventDefault(),
                    e.stopPropagation(),
                    r.props.focusable || this._onKeyPress(e))
                }
                ,
                this._onCellFocus = e=>{
                    this._isFocused = !!e
                }
                ,
                this._stateOnLayoutListContainer = e=>{
                    this._currentState && this._currentState.onLayoutListContainer(e, !0),
                    this._sheepIt && this._sheepIt.updateBoundaries()
                }
                ,
                this._stateOnScroll = (e,t)=>{
                    this._currentState && this._currentState.onScroll(e, t)
                }
                ,
                this._onScrollBeginDrag = ()=>{
                    h.log(d.LogTraceArea.VirtualMessageViewDebug, "onScrollBeginDrag"),
                    this._isDragging = !0
                }
                ,
                this._onScrollEndDrag = ()=>{
                    h.log(d.LogTraceArea.VirtualMessageViewDebug, "onScrollEndDrag"),
                    this._isDragging = !1,
                    this._currentState && this._currentState.onScrollEndDrag()
                }
                ,
                this._stateOnLayoutItem = (e,t)=>{
                    var s;
                    null === (s = this._currentState) || void 0 === s || s.onLayoutItem(e, t)
                }
                ,
                this._stateOnAnimateStartStopItem = (e,t)=>{
                    this._currentState && this._currentState.onAnimateStartStopItem(e, t)
                }
                ,
                this._stateControllerScrollPositionSet = ()=>{
                    this._currentState && this._currentState.onControllerScrollPositionSet()
                }
                ,
                this._stateOnListChanged = (e,t)=>{
                    this._currentState && (this._itemListChangedSinceLastVisibleRangeChange = !0,
                    this._currentState.onListChanged(e, t))
                }
                ,
                this._vmvControllerRefCallback = e=>{
                    this._vmvController = e
                }
                ,
                this._scrollViewRefCallback = e=>{
                    this._scrollView = e,
                    this._sheepItSetScrollView()
                }
                ,
                this._onSheepItRef = e=>{
                    this._sheepIt = e || void 0,
                    this._sheepItSetScrollView()
                }
                ,
                e.observableList.listChanged.subscribe(this._stateOnListChanged),
                this._screenReaderDetectionStoreToken = y.default.subscribe(()=>{
                    this._isScreenReaderEnabled = y.default.isMobileScreenReaderEnabled(),
                    this._isScreenReaderEnabled
                }
                ),
                this._isScreenReaderEnabled = y.default.isMobileScreenReaderEnabled(),
                this.setCurrentState(new A.Initialization(this), e)
            }
            setCurrentState(e, t) {
                this._currentState = e,
                this._currentState.init(t || this.props)
            }
            UNSAFE_componentWillReceiveProps(e, t) {
                u.default(this.props, e) || (this.props.contentMaxWidth,
                e.contentMaxWidth,
                this.props.observableList,
                e.observableList,
                this.props.leftSpacerWidth === e.leftSpacerWidth && this.props.rightSpacerWidth === e.rightSpacerWidth && this.props.useWideLayout === e.useWideLayout || this._resizeAllItems(e))
            }
            _getBottomSpacerHeight() {
                return this.props.canShowSuggestions ? b : 0
            }
            _initItemList(e, t) {
                this._renderInfoCache = {},
                this._pendingMeasures = {},
                this._pendingMounts = {},
                this._pendingAnimations = {},
                this._itemListChangedSinceLastVisibleRangeChange = !0,
                h.log(d.LogTraceArea.VirtualMessageView, "_initItemList: New count: " + e.length);
                const s = {};
                i.each(e, (e,t)=>{
                    s[e.key] = t
                }
                ),
                this._filledViewableScreen = !1;
                const o = this._calcHeightOfItems(e, 0, e.length - 1);
                this._itemsAboveRenderBlock = e.length,
                this._itemsInRenderBlock = 0,
                this._itemsBelowRenderBlock = 0,
                this._heightAboveRenderBlockCorrection = o,
                this._heightAboveRenderBlockEstimate = 0,
                this._heightOfRenderBlock = 0,
                this._heightBelowRenderBlockCorrection = 0,
                this._heightBelowRenderBlockEstimate = 0,
                this._itemMap = s,
                this._itemList = e,
                this._initialScrollIndex = t.initialScrollIndex
            }
            _isAndroidScreenReaderEnabled() {
                return this._isScreenReaderEnabled && !1
            }
            _itemsMoved(e, t) {
                this._itemMap = this._regenerateItemMap(e);
                const s = {
                    type: c.ListModificationType.RemoveItems,
                    removeIndex: t.removeIndex,
                    count: t.count
                };
                this._processItemsRemoved(this._itemList, s);
                const o = i.map(this._itemList, e=>e);
                o.splice(t.removeIndex, t.count),
                this._itemList = o;
                const n = [];
                for (let s = t.insertIndex; s < t.insertIndex + t.count; s++)
                    n.push(e[s]);
                const r = {
                    type: c.ListModificationType.AddItems,
                    insertIndex: t.insertIndex,
                    items: n
                };
                this._processItemsAdded(this._itemList, e, r),
                this._itemList = e
            }
            _regenerateItemMap(e) {
                const t = {};
                return i.each(e, (e,s)=>{
                    t[e.key] = s
                }
                ),
                t
            }
            _itemsAdded(e, t) {
                this._itemMap = this._regenerateItemMap(e),
                this._processItemsAdded(this._itemList, e, t),
                this._itemList = e
            }
            _processItemsAdded(e, t, s) {
                const o = s.insertIndex
                  , n = s.items
                  , r = this._itemsAboveRenderBlock + this._itemsInRenderBlock
                  , a = this._getMaxPendingMounts() - i.size(this._pendingMounts)
                  , l = s.options && !1 === s.options.animateFromBottom;
                if (o <= this._itemsAboveRenderBlock && 0 !== this._itemsInRenderBlock)
                    this._heightAboveRenderBlockCorrection += this._calcHeightOfItems(t, o, o + n.length - 1),
                    this._itemsAboveRenderBlock += n.length,
                    h.log(d.LogTraceArea.VirtualMessageViewDebug, "_processItemsAdded adding " + n.length + " above render block");
                else if ((o > r || o === r && n.length > a && l) && 0 !== this._itemsInRenderBlock)
                    this._itemsBelowRenderBlock += n.length,
                    this._heightBelowRenderBlockCorrection += this._calcHeightOfItems(t, o, o + n.length - 1),
                    h.log(d.LogTraceArea.VirtualMessageViewDebug, "_processItemsAdded adding " + n.length + " below render block");
                else {
                    const t = this._calcHeightOfItems(e, o, e.length - 1)
                      , s = this._containerHeight - this._getBottomSpacerHeight() - t;
                    i.each(n, e=>{
                        let t = this._getHeightOfItem(e);
                        const i = l ? I.UnmeasuredInsideNoAnimation : I.UnmeasuredInside;
                        this._allocateRenderBlockItem(e, i, t, s)
                    }
                    )
                }
            }
            _itemsReplaced(e, t) {
                this._itemMap = this._regenerateItemMap(e),
                this._processItemsRemoved(this._itemList, t);
                const s = i.map(this._itemList, e=>e);
                s.splice(t.removeIndex, t.count),
                this._itemList = s,
                this._processItemsAdded(this._itemList, e, t),
                this._itemList = e
            }
            _itemsRemoved(e, t) {
                this._itemMap = this._regenerateItemMap(e),
                this._processItemsRemoved(this._itemList, t),
                this._itemList = e
            }
            _processItemsRemoved(e, t) {
                const s = t.removeIndex
                  , i = t.removeIndex + t.count - 1
                  , o = this._itemsAboveRenderBlock
                  , n = this._itemsInRenderBlock;
                h.log(d.LogTraceArea.VirtualMessageViewDebug, "_processItemsRemoved _itemsAboveRenderBlock " + this._itemsAboveRenderBlock + " _itemsInRenderBlock " + this._itemsInRenderBlock + " _itemsBelowRenderBlock " + this._itemsBelowRenderBlock);
                for (let t = s; t < o && t <= i; t++) {
                    const s = e[t];
                    h.log(d.LogTraceArea.VirtualMessageViewDebug, "_processItemsRemoved removing item #" + t + " with key " + s.key + " above render block"),
                    this._heightAboveRenderBlockCorrection -= this._getHeightOfItem(s),
                    this._itemsAboveRenderBlock--,
                    this._deleteItemFromCaches(s.key, !0)
                }
                const r = o + n - 1
                  , a = this._getViewportBottom();
                for (let t = Math.max(s, o); t <= r && t <= i; t++) {
                    const s = e[t];
                    h.log(d.LogTraceArea.VirtualMessageViewDebug, "_processItemsRemoved removing item #" + t + " with key " + s.key + " from render block"),
                    this._itemsInRenderBlock--;
                    const i = this._getHeightOfItem(s);
                    this._heightOfRenderBlock -= i;
                    const o = this._renderInfoCache[s.key];
                    this._isRenderDirty = !0,
                    this._makeCellInvisibleDeferred(s.key),
                    this._deleteItemFromCaches(s.key, !0),
                    o && (o.top + i <= a + 30 ? this._adjustScrollPositionAfterReconcile(-i) : this._adjustScrollPositionUntilReconcile(-i))
                }
                for (let t = Math.max(s, r + 1); t <= i; t++) {
                    const s = e[t];
                    h.log(d.LogTraceArea.VirtualMessageViewDebug, "_processItemsRemoved removing item #" + t + " with key " + s.key + " below render block"),
                    this._heightBelowRenderBlockCorrection -= this._getHeightOfItem(s),
                    this._itemsBelowRenderBlock--,
                    this._deleteItemFromCaches(s.key, !0)
                }
            }
            _deleteItemFromCaches(e, t=!1) {
                t && delete this._heightCache[e],
                delete this._renderInfoCache[e],
                delete this._pendingMeasures[e],
                delete this._pendingMounts[e]
            }
            _updateViewportWidth(e) {
                e !== this._viewportWidth && (h.log(d.LogTraceArea.VirtualMessageView, "New viewport width: " + e),
                this._viewportWidth = e,
                this._resizeAllItems(this.props))
            }
            _updateViewportHeight(e) {
                e !== this._viewportHeight && (h.log(d.LogTraceArea.VirtualMessageView, "New viewport height: " + e),
                this._viewportHeight = e)
            }
            _onLayoutListContainer(e) {
                let t = Math.round(e.width);
                const s = Math.round(e.height);
                this._isMounted && 0 !== t && 0 !== s && (this.props.horizontalPadding && (t -= this.props.horizontalPadding.left + this.props.horizontalPadding.right),
                this._lastContainerLayoutTime = Date.now().valueOf(),
                this._updateViewportWidth(t),
                this._updateViewportHeight(s),
                this._renderIfDirty(),
                this.props.onLayout && this.props.onLayout(e))
            }
            _onLayoutItem(e, t) {
                if (!this._isMounted)
                    return !1;
                const s = this._itemMap[e];
                if (void 0 === s || void 0 === this._renderInfoCache[e])
                    return h.log(d.LogTraceArea.VirtualMessageViewDebug, "onLayout: unexpected event for item " + e),
                    !1;
                delete this._pendingMeasures[e],
                delete this._pendingMounts[e],
                t = Math.round(t);
                let i = this._itemList[s];
                const o = this._getHeightOfItem(i)
                  , n = t - o;
                if (this._isHeightOfItemKnown(i) && Math.abs(n) <= 1)
                    return !1;
                i.height || (this._isHeightOfItemKnown(i) ? this._averageHeightCounter.correct(n) : this._averageHeightCounter.input(t)),
                this._heightCache[e] = t;
                const r = this._renderInfoCache[e];
                return 0 === n && r.measureState === I.Measured || (h.log(d.LogTraceArea.VirtualMessageViewDebug, "onLayout: Item Height Changed: " + e + " - Old: " + o + ", New: " + t + ", measureState: " + I[r.measureState]),
                s < this._itemsAboveRenderBlock ? this._heightAboveRenderBlockCorrection += n : s >= this._itemsAboveRenderBlock + this._itemsInRenderBlock ? this._heightBelowRenderBlockCorrection -= n : (this._heightOfRenderBlock += n,
                r.measureState === I.UnmeasuredAbove ? this._adjustScrollPositionAfterReconcile(n) : r.measureState === I.UnmeasuredBelow ? this._adjustScrollPositionUntilReconcile(n) : r.measureState === I.UnmeasuredInside ? r.top <= this._getViewportBottom() + 30 ? this._adjustScrollPositionAfterReconcile(t) : this._adjustScrollPositionUntilReconcile(t) : r.measureState === I.UnmeasuredInsideNoAnimation ? this._adjustScrollPositionUntilReconcile(t) : r.measureState === I.Measured && (r.top + o <= this._getViewportBottom() ? this._adjustScrollPositionAfterReconcile(n) : this._adjustScrollPositionUntilReconcile(n))),
                r.measureState = I.Measured),
                0 !== n
            }
            _adjustScrollPositionAfterReconcile(e) {
                h.log(d.LogTraceArea.VirtualMessageViewDebug, "_adjustScrollPositionAfterReconcile " + e),
                this._heightAboveRenderBlockCorrection += e,
                this._heightAboveRenderBlockEstimate -= e
            }
            _adjustScrollPositionUntilReconcile(e) {
                h.log(d.LogTraceArea.VirtualMessageViewDebug, "_adjustScrollPositionUntilReconcile " + e),
                this._heightBelowRenderBlockCorrection += e,
                this._heightBelowRenderBlockEstimate -= e
            }
            _flushScrollPositionsHistory(e) {
                (this._scrollPositionsHistory.length >= 10 || e) && (h.log(d.LogTraceArea.VirtualMessageViewDebug, "Scroll positions history: " + i.reduce(this._scrollPositionsHistory, (e,t)=>e + t + ",", "")),
                this._scrollPositionsHistory = [])
            }
            _onScrollHandler(e, t) {
                e = Math.round(e),
                t = Math.round(t),
                this._scrollPositionsHistory.push(e),
                this._flushScrollPositionsHistory(!1),
                this._lastScrollTop !== e && (this._lastScrollTopSetByUser === e && this._lastScrollTop !== e || (this._reportUserScrollEvent = !0,
                this._lastScrollTopSetByUser = e,
                this._lastScrollTop = e,
                this._lastScrollLeft = t))
            }
            _allocateRenderBlockItem(e, t, s, i) {
                this._pendingMounts[e.key] = e.key,
                this._isHeightOfItemKnown(e) ? t = I.Measured : this._pendingMeasures[e.key] = e.key;
                const o = this._shouldShowItem(e);
                this._renderInfoCache[e.key] = {
                    top: i,
                    measureState: t,
                    isVisible: o,
                    shouldUpdate: !0
                },
                this._isRenderDirty = !0,
                this._itemsInRenderBlock++,
                this._heightOfRenderBlock += s,
                h.log(d.LogTraceArea.VirtualMessageViewDebug, "Allocating new render block item for " + e.key + " H=" + s + " Y=" + i, " V=" + o),
                this._forceUpdateCell(e.key)
            }
            _forceUpdateCell(e) {
                this._virtualListCells[e] && i.defer(()=>{
                    const t = this._virtualListCells[e];
                    t && this._isMounted && t.forceUpdate()
                }
                )
            }
            _getEffectiveScrollTop() {
                return 0 === this._containerHeight ? -this._viewportHeight : this._lastScrollTop
            }
            _removeItemsFromRenderBlock() {
                const e = this._getEffectiveScrollTop()
                  , t = Math.max(6 * this._viewportHeight, 3072)
                  , s = e - t
                  , i = e + this._viewportHeight + t;
                let o = this._containerHeight - this._getBottomSpacerHeight() - this._heightBelowRenderBlockEstimate
                  , n = o - this._heightOfRenderBlock;
                for (; this._itemsInRenderBlock > 0; ) {
                    const e = this._itemsAboveRenderBlock
                      , t = this._itemList[e];
                    if (!this._isHeightOfItemKnown(t))
                        break;
                    const i = this._getHeightOfItem(t);
                    if (n + i >= s)
                        break;
                    this._isRenderDirty = !0,
                    this._itemsInRenderBlock--,
                    this._heightOfRenderBlock -= i,
                    this._itemsAboveRenderBlock++,
                    this._heightAboveRenderBlockEstimate += i,
                    n += i,
                    this._deleteItemFromCaches(t.key),
                    h.log(d.LogTraceArea.VirtualMessageViewDebug, "Culled Item From Top: " + t.key)
                }
                for (; this._itemsInRenderBlock > 0; ) {
                    const e = this._itemsAboveRenderBlock + this._itemsInRenderBlock - 1
                      , t = this._itemList[e];
                    if (!this._isHeightOfItemKnown(t))
                        break;
                    const s = this._getHeightOfItem(t);
                    if (o - s <= i)
                        break;
                    this._isRenderDirty = !0,
                    this._itemsInRenderBlock--,
                    this._heightOfRenderBlock -= s,
                    this._itemsBelowRenderBlock++,
                    this._heightBelowRenderBlockEstimate += s,
                    o -= s,
                    this._deleteItemFromCaches(t.key),
                    h.log(d.LogTraceArea.VirtualMessageViewDebug, "Culled Item From Bottom: " + t.key)
                }
            }
            _addInitialItemToRenderBlock() {
                let e = !1
                  , t = 0
                  , s = this._itemList.length - 1;
                if (void 0 !== this._initialScrollIndex)
                    s = this._initialScrollIndex,
                    e = !this._filledViewableScreen,
                    t = this._getEffectiveScrollTop() + Math.floor(.25 * this._viewportHeight);
                else if (this._filledViewableScreen) {
                    let i = this._containerHeight - this._getBottomSpacerHeight()
                      , o = this._getEffectiveScrollTop() + this._viewportHeight;
                    for (; i >= o && s > 0; ) {
                        const e = this._itemList[s];
                        i -= this._getHeightOfItem(e),
                        s--
                    }
                    e = !0,
                    t = this._getEffectiveScrollTop() + this._viewportHeight - this._getHeightOfItem(this._itemList[s])
                }
                h.log(d.LogTraceArea.VirtualMessageView, "_addInitialItemToRenderBlock referenceIndex: " + s + " out of " + this._itemList.length);
                let i = this._itemList[s];
                this.props.shouldFocusInitialItem && (this._itemKeyToFocus = i.key),
                this.props.isMessageSearchPanelVisible && void 0 !== this._initialScrollIndex && this._itemKeyToFocusNext(i.key);
                const o = this._getHeightOfItem(i);
                this._heightAboveRenderBlockEstimate -= o,
                this._itemsInRenderBlock = 0,
                this._heightOfRenderBlock = 0,
                this._itemsAboveRenderBlock = s;
                const n = this._calcHeightOfItems(this._itemList, 0, s - 1);
                this._heightAboveRenderBlockCorrection = n - this._heightAboveRenderBlockEstimate,
                this._itemsBelowRenderBlock = this._itemList.length - this._itemsAboveRenderBlock - 1;
                const r = this._calcHeightOfItems(this._itemList, s + 1, this._itemList.length - 1);
                if (this._heightBelowRenderBlockCorrection = r - this._heightBelowRenderBlockEstimate,
                e) {
                    const e = t - this._heightAboveRenderBlockEstimate;
                    this._adjustScrollPositionAfterReconcile(-e),
                    this._adjustScrollPositionUntilReconcile(e)
                }
                const a = e ? I.UnmeasuredBelow : I.UnmeasuredAbove;
                this._allocateRenderBlockItem(i, a, o, this._heightAboveRenderBlockEstimate - this._getBottomSpacerHeight()),
                h.log(d.LogTraceArea.VirtualMessageView, "New item count above: " + this._itemsAboveRenderBlock)
            }
            _getMaxPendingMounts() {
                return S.isAnimationPending() ? 1 : 6
            }
            _expandRenderBlock(e, t) {
                const s = this._getEffectiveScrollTop()
                  , o = s - e
                  , n = s + this._viewportHeight + t
                  , r = this._getMaxPendingMounts();
                let a = this._containerHeight - this._getBottomSpacerHeight() - this._heightBelowRenderBlockEstimate
                  , l = a - this._heightOfRenderBlock;
                for (; this._itemsBelowRenderBlock > 0 && a < n; ) {
                    if (i.size(this._pendingMounts) >= r)
                        return;
                    const e = this._itemList[this._itemsAboveRenderBlock + this._itemsInRenderBlock]
                      , t = this._getHeightOfItem(e);
                    this._allocateRenderBlockItem(e, I.UnmeasuredBelow, t, a),
                    a += t,
                    this._itemsBelowRenderBlock--,
                    this._heightBelowRenderBlockEstimate -= t
                }
                for (; this._itemsAboveRenderBlock > 0 && l > o; ) {
                    if (i.size(this._pendingMounts) >= r)
                        return;
                    const e = this._itemList[this._itemsAboveRenderBlock - 1]
                      , t = this._getHeightOfItem(e);
                    this._allocateRenderBlockItem(e, I.UnmeasuredAbove, t, l - t),
                    l -= t,
                    this._itemsAboveRenderBlock--,
                    this._heightAboveRenderBlockEstimate -= t
                }
            }
            _calcNewRenderedItemState(e=!0, t=!0) {
                if (0 === this._itemList.length)
                    return;
                this._removeItemsFromRenderBlock();
                const s = 0 === this._itemsInRenderBlock;
                s && this._itemList.length > 0 && this._addInitialItemToRenderBlock();
                const i = e && this._filledViewableScreen && Date.now().valueOf() - this._lastContainerLayoutTime > 500;
                this._repositionCells({
                    animate: i
                });
                const o = t && !s && this._filledViewableScreen ? Math.min(Math.max(5 * this._viewportHeight, 2048), 4096) : 0;
                this._expandRenderBlock(o, o)
            }
            _getViewportBottom() {
                return this._lastScrollTop + this._viewportHeight - this._getBottomSpacerHeight()
            }
            _checkAndReportVisibleRangeChanges() {
                if (this.props.onVisibleRangeChanged && this._isMounted && this._filledViewableScreen) {
                    const e = this._lastScrollTop
                      , t = this._getViewportBottom();
                    let s = -1
                      , i = -1
                      , o = -1
                      , n = -1;
                    const r = this._containerHeight - this._getBottomSpacerHeight() - this._heightBelowRenderBlockEstimate
                      , a = r - this._heightOfRenderBlock;
                    if (a < t || r > e) {
                        let l = a;
                        for (let t = 0; t < this._itemsInRenderBlock; t++) {
                            const i = this._getHeightOfItem(this._itemList[t + this._itemsAboveRenderBlock]);
                            if (l >= e && -1 === o && (o = t + this._itemsAboveRenderBlock),
                            l += i,
                            l > e && -1 === s && (s = t + this._itemsAboveRenderBlock),
                            -1 !== s && -1 !== o)
                                break
                        }
                        l = r;
                        for (let e = this._itemsInRenderBlock - 1; e >= 0; e--) {
                            const s = this._getHeightOfItem(this._itemList[e + this._itemsAboveRenderBlock]);
                            if (l <= t && -1 === n && (n = e + this._itemsAboveRenderBlock),
                            l -= s,
                            l < t && -1 === i && (i = e + this._itemsAboveRenderBlock),
                            -1 !== i && -1 !== n)
                                break
                        }
                    }
                    (this._itemListChangedSinceLastVisibleRangeChange || this._lastPartialTopVisibleItem !== s || this._lastPartialBottomVisibleItem !== i || this._lastWholeTopVisibleItem !== o || this._lastWholeBottomVisibleItem !== n) && (this._itemListChangedSinceLastVisibleRangeChange = !1,
                    this._lastPartialTopVisibleItem = s,
                    this._lastPartialBottomVisibleItem = i,
                    this._lastWholeTopVisibleItem = o,
                    this._lastWholeBottomVisibleItem = n,
                    h.log(d.LogTraceArea.VirtualMessageViewDebug, "Visible Range Changed: Partial: " + this._lastPartialTopVisibleItem + "-" + this._lastPartialBottomVisibleItem + ", Whole: " + this._lastWholeTopVisibleItem + "-" + this._lastWholeBottomVisibleItem),
                    this.props.onVisibleRangeChanged(this._lastPartialTopVisibleItem, this._lastPartialBottomVisibleItem, this._lastWholeTopVisibleItem, this._lastWholeBottomVisibleItem))
                }
            }
            _setContainerHeight(e) {
                return this._containerHeight !== e && (h.log(d.LogTraceArea.VirtualMessageView, "setContainerHeight Old: " + this._containerHeight + " New: " + e),
                this._containerHeight = e,
                this._shouldStartFromTop() ? (this._containerHeightValue.setValue(this._heightOfRenderBlock),
                this._innerScrollContainerHeightValue.setValue(this._heightOfRenderBlock)) : this._containerHeightValue.setValue(e),
                !0)
            }
            _getNewContainerHeight() {
                const e = this._heightAboveRenderBlockEstimate + this._heightAboveRenderBlockCorrection + this._heightOfRenderBlock + this._heightBelowRenderBlockEstimate + this._heightBelowRenderBlockCorrection + this._getBottomSpacerHeight();
                return Math.max(e, this._viewportHeight)
            }
            _reconcileCorrections(e) {
                if (0 === this._itemList.length)
                    return !1;
                let t = !1;
                this._oldViewportHeight = this._viewportHeight,
                Math.abs(this._scrollOuterContainerHeight - this._innerScrollContainerHeight) > 1 && (h.log(d.LogTraceArea.VirtualMessageView, "Forcing recalculations because viewport size changed, old _viewportHeight: " + this._viewportHeight + " new _viewportHeight: " + this._scrollOuterContainerHeight),
                this._innerScrollContainerHeight = this._scrollOuterContainerHeight,
                this._viewportHeight = this._scrollOuterContainerHeight,
                this._innerScrollContainerHeightValue.setValue(this._scrollOuterContainerHeight),
                t = !0);
                let s = this._getNewContainerHeight();
                if (0 === this._heightAboveRenderBlockCorrection && 0 === this._heightBelowRenderBlockCorrection && this._containerHeight === s || (t = !0,
                h.log(d.LogTraceArea.VirtualMessageView, "Forcing recalculations because container size changed, _heightAboveRenderBlockCorrection: " + this._heightAboveRenderBlockCorrection + " _heightBelowRenderBlockCorrection: " + this._heightBelowRenderBlockCorrection + " _containerHeight: " + this._containerHeight + " newContainerHeight: " + s)),
                t) {
                    this._flushScrollPositionsHistory(!0),
                    this._applyNewAverageToEstimates(),
                    s = this._getNewContainerHeight();
                    const t = this._setContainerHeight(s);
                    return this._completeReconcileCorrections(e, t)
                }
                return !1
            }
            _applyNewAverageToEstimates() {
                const e = this._averageHeightCounter.getAverage();
                if (this._currentAverageHeight === e)
                    return;
                const t = e - this._currentAverageHeight
                  , s = t * this._calcUnknownHeightItemsCount(this._itemList, 0, this._itemsAboveRenderBlock - 1);
                this._heightAboveRenderBlockCorrection += s;
                const i = t * this._calcUnknownHeightItemsCount(this._itemList, this._itemsAboveRenderBlock + this._itemsInRenderBlock, this._itemList.length - 1);
                this._heightBelowRenderBlockCorrection += i,
                h.log(d.LogTraceArea.VirtualMessageViewDebug, " applyNewAverageToEstimates currentAverageHeight: " + this._currentAverageHeight + ", newAverageHeight " + e + ", aboveHeightAdjustment " + s + ", belowHeightAdjustment " + i),
                this._currentAverageHeight = e
            }
            _completeReconcileCorrections(e, t) {
                const s = this._viewportHeight - this._oldViewportHeight;
                let o = this._heightAboveRenderBlockCorrection - s;
                if (h.log(d.LogTraceArea.VirtualMessageView, "_reconcileCorrections: initial=" + e + " A=" + this._heightAboveRenderBlockCorrection + " B=" + this._heightBelowRenderBlockCorrection + " viewPortHeightDelta=" + s),
                this._heightAboveRenderBlockEstimate += this._heightAboveRenderBlockCorrection,
                this._heightAboveRenderBlockCorrection = 0,
                this._heightBelowRenderBlockEstimate += this._heightBelowRenderBlockCorrection,
                this._heightBelowRenderBlockCorrection = 0,
                e && !i.isUndefined(this._initialScrollIndex) && this._initialScrollIndex >= 0) {
                    if (this._initialScrollIndex >= this._itemsAboveRenderBlock && this._initialScrollIndex <= this._itemsAboveRenderBlock + this._itemsInRenderBlock) {
                        let e = this._containerHeight - this._getBottomSpacerHeight() - this._heightBelowRenderBlockEstimate - this._heightOfRenderBlock;
                        for (let t = this._itemsAboveRenderBlock; t < this._initialScrollIndex; t++)
                            e += this._getHeightOfItem(this._itemList[t]);
                        o = e - Math.floor(.25 * this._viewportHeight)
                    }
                    this._initialScrollIndex = void 0
                }
                return this._setNewScrollTop(this._lastScrollTop + o, !1),
                this._repositionCells({}),
                !1
            }
            _setNewScrollTop(e, t) {
                e = Math.round(e),
                e = Math.min(e, this._containerHeight - this._viewportHeight),
                (e = Math.max(e, 0)) !== this._lastScrollTop && (h.log(d.LogTraceArea.VirtualMessageViewDebug, "Setting scroll top: " + e),
                this._lastScrollTop = e,
                this._scrollView && (delete this._pendingSetScrollTop,
                this._setScrollTop(e, t)))
            }
            _adjustScrollTopAndRepositionCells(e, t) {
                if (e = Math.round(e),
                e = Math.min(e, this._containerHeight - this._viewportHeight - this._lastScrollTop),
                0 !== (e = Math.max(e, -this._lastScrollTop))) {
                    if (this._lastScrollTop += e,
                    h.log(d.LogTraceArea.VirtualMessageViewDebug, "Adjusting scroll top: " + e + " (absolute value " + this._lastScrollTop + ")"),
                    this._vmvController) {
                        const t = this._repositionCells({
                            sendToNative: !1
                        });
                        return this._vmvController.scrollBy(e, t, this._isAndroidScreenReaderEnabled()),
                        !0
                    }
                    this._scrollView && (t ? this._pendingSetScrollTop = this._lastScrollTop : this._setScrollTop(this._lastScrollTop, !1),
                    this._repositionCells({}))
                }
                return !1
            }
            _validateHeightInvariants(e=!0) {
                h.log(d.LogTraceArea.VirtualMessageViewDebug, " AE:" + this._heightAboveRenderBlockEstimate + " AC:" + this._heightAboveRenderBlockCorrection + " RB:" + this._heightOfRenderBlock + " BE:" + this._heightBelowRenderBlockEstimate + " BC:" + this._heightBelowRenderBlockCorrection);
                this._calcHeightOfItems(this._itemList, 0, this._itemsAboveRenderBlock - 1),
                this._calcHeightOfItems(this._itemList, this._itemsAboveRenderBlock + this._itemsInRenderBlock, this._itemList.length - 1),
                this._calcHeightOfItems(this._itemList, this._itemsAboveRenderBlock, this._itemsAboveRenderBlock + this._itemsInRenderBlock - 1),
                this._itemsAboveRenderBlock,
                this._itemsBelowRenderBlock,
                this._itemsInRenderBlock;
                if (this._containerHeight > 0 && e) {
                    const e = this._heightAboveRenderBlockEstimate + this._heightOfRenderBlock + this._heightBelowRenderBlockEstimate + this._getBottomSpacerHeight();
                    Math.max(e, this._viewportHeight)
                }
                return !0
            }
            _popInvisibleIntoView() {
                this._filledViewableScreen = !0;
                for (let e = 0; e < this._itemsInRenderBlock; e++) {
                    const t = this._itemList[this._itemsAboveRenderBlock + e];
                    let s = this._renderInfoCache[t.key];
                    s.isVisible || (s.isVisible = !0)
                }
                this._repositionCells({
                    dissallowVisibilityChanges: !1
                }),
                this.props.onInitialRenderComplete && this.props.onInitialRenderComplete()
            }
            _repositionCells(e) {
                const t = !!e.staggerAnimations
                  , s = !!i.isUndefined(e.sendToNative) || e.sendToNative
                  , o = []
                  , n = []
                  , r = this._containerHeight - this._getBottomSpacerHeight() - this._heightBelowRenderBlockEstimate;
                let a = r
                  , l = 0;
                for (let i = this._itemsInRenderBlock - 1; i >= 0; i--) {
                    const c = this._itemList[this._itemsAboveRenderBlock + i];
                    a -= this._getHeightOfItem(c),
                    t && (l = Math.floor(.1 * (r - a)));
                    const u = this._renderInfoCache[c.key];
                    if (!u) {
                        h.error(d.LogTraceArea.VirtualMessageViewDebug, "Missing renderInfo for " + c.key);
                        continue
                    }
                    const p = this._virtualListCells[c.key];
                    if (p && o.push({
                        component: p,
                        yPosition: a
                    }),
                    s) {
                        const t = e.dissallowVisibilityChanges ? u.isVisible : this._shouldShowItem(c);
                        this._setCellTopAndVisibility(c.key, t, a, l, e) && n.push({
                            key: c.key,
                            yPosition: a,
                            visibility: t
                        })
                    }
                }
                return s && i.size(n) > 0 && h.log(d.LogTraceArea.VirtualMessageViewDebug, "_repositionCells: " + i.reduce(n, (e,t)=>e + "(" + t.key + "," + t.yPosition + "," + (t.visibility ? "Y" : "N") + ")", "")),
                o
            }
            _setCellTopAndVisibility(e, t, s, i, o) {
                const n = !!o.animate;
                let a = this._renderInfoCache[e];
                if (!a)
                    return h.error(d.LogTraceArea.VirtualMessageViewDebug, "Missing renderInfo for " + e),
                    !1;
                const l = n && a.isVisible && !this._isAndroidScreenReaderEnabled();
                a.isVisible = t,
                a.top = s;
                const c = this._virtualListCells[e];
                let u = !1;
                return c && this._filledViewableScreen && (c.getTop() !== s && (c.setTop({
                    top: s,
                    animate: l,
                    animationDelay: i,
                    animationEasingFunction: r.Easing.SkypeEaseOut,
                    animationDuration: v.AnimationDuration.Short
                }),
                u = !0),
                c.isVisible() !== t && (c.setVisibility(t),
                u = !0)),
                u
            }
            _makeCellInvisibleDeferred(e) {
                i.defer(()=>{
                    const t = this._virtualListCells[e]
                      , s = this._renderInfoCache[e];
                    t && !s && t.setVisibility(!1)
                }
                )
            }
            _resizeAllItems(e) {
                if (this._viewportWidth <= 0)
                    return;
                const t = this._viewportWidth - (e.leftSpacerWidth || 0) - (e.rightSpacerWidth || 0)
                  , s = e.contentMaxWidth && t > e.contentMaxWidth ? e.contentMaxWidth : t;
                s > 0 && this._contentWidth !== s && (this._contentWidth = s,
                this._itemsInRenderBlock > 0 && (this._isRenderDirty = !0))
            }
            _renderIfDirty() {
                this._isRenderDirty && this._isMounted && this.forceUpdate()
            }
            _focusCellIfNeeded() {
                if (this._itemKeyToFocus) {
                    const e = this._virtualListCells[this._itemKeyToFocus];
                    e && (e.focusCell(),
                    this._itemKeyToFocus = void 0)
                }
            }
            _shouldStartFromTop() {
                return !!(this.props.startFromTop && this.props.streamContainerHeight && this.props.streamContainerHeight > this._heightOfRenderBlock)
            }
            render() {
                let e = [];
                h.log(d.LogTraceArea.VirtualMessageViewDebug, "Rendering " + this._itemsInRenderBlock + " items starting at " + this._itemsAboveRenderBlock),
                this._renderedItemKeys = [];
                for (let t = 0; t < this._itemsInRenderBlock; t++) {
                    const s = this._itemList[this._itemsAboveRenderBlock + t]
                      , i = this._renderInfoCache[s.key]
                      , n = this._isAndroidScreenReaderEnabled() ? "ac_" + s.key : s.key;
                    this._renderedItemKeys.push(s.key),
                    e.push(a.createElement(o.VirtualListCell, {
                        ref: this._getVirtualListCellRefCallback(s.key),
                        key: n,
                        onLayout: this._stateOnLayoutItem,
                        itemKey: s.key,
                        item: s,
                        width: this._contentWidth,
                        top: i ? i.top : 0,
                        isVisible: !!i && i.isVisible,
                        isActive: !0,
                        isFocused: !1,
                        onAnimateStartStop: this._stateOnAnimateStartStopItem,
                        useTransformOptimization: !this._isAndroidScreenReaderEnabled(),
                        shouldUpdate: !i || i.shouldUpdate,
                        renderItem: this.props.renderItem,
                        focusable: s.focusable,
                        onCellFocus: this._onCellFocus,
                        limitFocusWithin: a.Types.LimitFocusType.Accessible
                    })),
                    i && (i.shouldUpdate = !1)
                }
                h.log(d.LogTraceArea.VirtualMessageViewDebug, "Item Render Complete");
                const t = [T.staticContainer, this.props.style, this._containerAnimatedStyle, this._getItemContainerStyle(this.props.contentMaxWidth)];
                this.props.showOverflow && t.push(C.overflowVisible),
                this.props.horizontalPadding && this.props.horizontalPadding.left && t.push(a.Styles.createViewStyle({
                    marginLeft: this.props.horizontalPadding.left
                }, !1));
                let s = a.createElement(a.Animated.View, {
                    style: i.compact(t),
                    onLayout: e=>{
                        if (Math.trunc(e.height) === Math.trunc(this._containerHeight)) {
                            const e = this._pendingSetScrollTop;
                            delete this._pendingSetScrollTop,
                            e && this._scrollView && this._setScrollTop(e, !1)
                        }
                    }
                }, e);
                this.props.useWideLayout && (s = a.createElement(a.View, {
                    style: T.compositeItemsListContainer
                }, a.createElement(a.View, {
                    style: this._getSpacerStyle(this.props.leftSpacerWidth)
                }), s, a.createElement(a.View, {
                    style: this._getSpacerStyle(this.props.rightSpacerWidth)
                })));
                const r = [T.scrollInnerContainer, this._scrollInnerContainerStyle];
                return this._shouldStartFromTop() && r.push(T.scrollInnerContainerAbsoluteFill),
                a.createElement(a.View, {
                    style: T.scrollOuterContainer,
                    onLayout: this._onLayoutOuterScrollContainer
                }, a.createElement(a.Animated.View, {
                    style: r
                }, a.createElement(a.ScrollView, {
                    onLayout: this._stateOnLayoutListContainer,
                    onScroll: this._stateOnScroll,
                    keyboardDismissMode: this.props.keyboardDismissMode,
                    keyboardShouldPersistTaps: this.props.keyboardShouldPersistTaps,
                    ref: this._scrollViewRefCallback,
                    scrollEventThrottle: 32,
                    style: T.scrollView,
                    scrollsToTop: this.props.scrollsToTop,
                    scrollEnabled: this.props.scrollEnabled,
                    overScrollMode: "never",
                    onScrollBeginDrag: this._onScrollBeginDrag,
                    onScrollEndDrag: this._onScrollEndDrag,
                    onKeyPress: this._onKeyPress
                }, a.createElement(n.SheepIt, {
                    isEnabled: L,
                    id: "monkey",
                    isInsideScrollView: !0,
                    ref: this._onSheepItRef
                }), null, s)))
            }
            _setScrollTop(e, t) {
                var s;
                null === (s = this._scrollView) || void 0 === s || s.setScrollTop(e, t)
            }
            _getSpacerStyle(e) {
                return M[e] || (M[e] = a.Styles.createViewStyle({
                    flex: 1,
                    minWidth: e
                })),
                M[e]
            }
            _getItemContainerStyle(e) {
                return w[e] || (w[e] = a.Styles.createViewStyle({
                    width: e
                })),
                w[e]
            }
            _getVirtualListCellRefCallback(e) {
                return this._virtualListCellRefCallbacks[e] || (this._virtualListCellRefCallbacks[e] = t=>{
                    t ? this._virtualListCells[e] = t : (delete this._virtualListCells[e],
                    delete this._virtualListCellRefCallbacks[e])
                }
                ),
                this._virtualListCellRefCallbacks[e]
            }
            componentDidMount() {
                this._isMounted = !0,
                this._componentDidRender()
            }
            componentWillUnmount() {
                this._currentState = void 0,
                this._isMounted = !1,
                y.default.unsubscribe(this._screenReaderDetectionStoreToken)
            }
            componentDidUpdate(e, t, s) {
                this._componentDidRender()
            }
            _componentDidRender() {
                if (h.log(d.LogTraceArea.VirtualMessageViewDebug, "Component Did Render"),
                this._isRenderDirty = !1,
                this._renderedItemKeys) {
                    let e;
                    const t = this._renderedItemKeys.filter(e=>e !== f.ItemListKey.Composing);
                    if (this._focusedItemKey) {
                        if (e = t.indexOf(this._focusedItemKey),
                        e < 0 || !this._isFocused)
                            if (e >= 0) {
                                const s = this._virtualListCells[t[e]];
                                s && s.setFocusLimited(!0)
                            } else
                                e = t.length - 1
                    } else
                        e = t.length - 1;
                    if (this._focusedItemKey = t[e],
                    this._focusedItemKey) {
                        const e = this._virtualListCells[this._focusedItemKey];
                        e && e.setFocusLimited(!1)
                    }
                }
            }
            scrollToBottom() {
                this._currentState && this._currentState.onScrollToPosition(-1, !1)
            }
            scrollToPosition(e, t, s=!1) {
                this._currentState && (this._currentState.onScrollToPosition(e, s),
                this._itemKeyToFocusNext(t))
            }
            focusMessage(e) {
                let t;
                i.eachRight(this._virtualListCells, s=>{
                    s.props.item && i.endsWith(s.props.item.key, e) && (t = s)
                }
                ),
                t && t.focusCell()
            }
            _itemKeyToFocusNext(e) {
                const t = this._virtualListCells[e]
                  , s = this._virtualListCells[this._focusedItemKey];
                t && (t.setFocusLimited(!1),
                s && s.setFocusLimited(!0)),
                this._focusedItemKey = e
            }
            _shouldShowItem(e) {
                return this._filledViewableScreen && this._isHeightOfItemKnown(e) && 0 === i.size(this._pendingMeasures)
            }
            _calcHeightOfItems(e, t, s) {
                let i = 0;
                for (let o = t; o <= s; o++)
                    i += this._getHeightOfItem(e[o]);
                return i
            }
            _calcUnknownHeightItemsCount(e, t, s) {
                let i = 0;
                for (let o = t; o <= s; o++) {
                    const t = e[o];
                    i += t.height || this._isHeightOfItemKnown(t) ? 0 : 1
                }
                return i
            }
            _isHeightOfItemKnown(e) {
                return void 0 !== this._heightCache[e.key]
            }
            _getHeightOfItem(e) {
                return e ? void 0 !== this._heightCache[e.key] ? this._heightCache[e.key] : e.height ? e.height : this._currentAverageHeight : 0
            }
            _sheepItSetScrollView() {
                this._sheepIt && this._scrollView && this._sheepIt.setScrollView(this._scrollView)
            }
            _sheepItFall() {
                this._sheepIt && this._sheepIt.fall()
            }
        }
        let R;
        function L() {
            return void 0 === R && (R = l.default.getS4LUiFeaturesNoSubscription().enableMonkey),
            R
        }
        t.VirtualMessageView = A,
        A.Initialization = class {
            constructor(e) {
                this.view = e,
                this._initializationState = P.Undefined
            }
            init(e) {
                h.log(d.LogTraceArea.VirtualMessageViewDebug, "Initialization", "init"),
                this.view._initItemList(e.observableList.getItemList(), e)
            }
            onLayoutListContainer(e, t) {
                h.log(d.LogTraceArea.VirtualMessageViewDebug, "Initialization", "onLayoutListContainer"),
                t && this.view._onLayoutListContainer(e),
                this._moveToNextIfReady()
            }
            onListChanged(e, t) {
                h.log(d.LogTraceArea.VirtualMessageViewDebug, "Initialization", "onListChanged"),
                this.view._onListChangedQueue.push({
                    listModification: e,
                    updatedList: t
                })
            }
            onScrollToPosition(e, t) {
                this.view._onScrollToPositionEvent = e
            }
            onScroll(e, t) {}
            onLayoutItem(e, t) {
                this.view._onLayoutItem(e, t),
                this._moveToNextIfReady()
            }
            onAnimateStartStopItem(e, t) {}
            onControllerScrollPositionSet() {
                h.log(d.LogTraceArea.VirtualMessageViewDebug, "Initialization", "onControllerScrollPositionSet"),
                this._finishInitialization()
            }
            onScrollEndDrag() {}
            _canMoveNext() {
                return 0 === i.size(this.view._pendingMeasures) && this._initializationState !== P.WaitingForScroll && 0 !== this.view._viewportHeight
            }
            _moveToNextIfReady() {
                if (this._canMoveNext()) {
                    if (0 === this.view._itemList.length)
                        return this.view._filledViewableScreen = !0,
                        void this.view.setCurrentState(new A.Idle(this.view));
                    this.view._calcNewRenderedItemState(!1),
                    this.view._renderIfDirty(),
                    this._canMoveNext() && (h.log(d.LogTraceArea.VirtualMessageViewDebug, "Initialization", "starting reconcileCorrections"),
                    this.view._reconcileCorrections(!0),
                    this._finishInitialization())
                }
            }
            _finishInitialization() {
                h.log(d.LogTraceArea.VirtualMessageViewDebug, "Initialization", "starting popInvisibleIntoView"),
                this.view._popInvisibleIntoView(),
                this.view._scrollView && this.view._setScrollTop(this.view._lastScrollTop, !1),
                this.view.setCurrentState(new A.Wait(this.view,100))
            }
        }
        ,
        A.Idle = class {
            constructor(e) {
                this.view = e,
                this._needsReconcilation = !1,
                this._reconcileCorrectionsDebounced = i.debounce(()=>{
                    if (this.view._isMounted) {
                        if (i.size(this.view._pendingMeasures) > 0 || i.size(this.view._pendingAnimations) > 0 || this.view._isDragging)
                            return void this._reconcileCorrectionsDebounced();
                        this._reconcileCorrections()
                    }
                }
                , 250)
            }
            init(e) {
                for (h.log(d.LogTraceArea.VirtualMessageViewDebug, "Idle", "init"),
                i.each(this.view._onAnimateStartStopItemQueue, e=>{
                    h.log(d.LogTraceArea.VirtualMessageViewDebug, "Idle", "processing queued onAnimateStartStopItem for " + e.itemKey),
                    this.view._onAnimateStartStopItem(e.itemKey, e.animateStart)
                }
                ),
                this.view._onAnimateStartStopItemQueue = [],
                i.each(this.view._onLayoutItemQueue, e=>{
                    this.view._onLayoutItem(e.itemKey, e.newHeight)
                }
                ),
                this.view._onLayoutItemQueue = [],
                this.view._onLayoutListContainerEvent && (h.log(d.LogTraceArea.VirtualMessageViewDebug, "Idle", "processing queued onLayoutListContainer"),
                this.view._onLayoutListContainer(this.view._onLayoutListContainerEvent)),
                this.view._onLayoutListContainerEvent = void 0,
                this.view._reportUserScrollEvent && (h.log(d.LogTraceArea.VirtualMessageViewDebug, "Idle", "processing queued reportUserScrollEvent"),
                this.view._onReportUserScrollEvent()); i.size(this.view._onListChangedQueue) > 0; ) {
                    const e = this.view._onListChangedQueue.splice(0, 1)[0];
                    if (h.log(d.LogTraceArea.VirtualMessageView, "Idle", "processing queued onListChanged" + JSON.stringify(i.omit(e.listModification, ["items"])) + ", " + i.map(e.listModification.items, e=>e.key)),
                    this._processOnListChanged(e.listModification, e.updatedList))
                        return
                }
                this._processPendingOnScrollToPosition(),
                this._finishEventProcessing()
            }
            _processPendingOnScrollToPosition() {
                i.isUndefined(this.view._onScrollToPositionEvent) || (h.log(d.LogTraceArea.VirtualMessageViewDebug, "processing queued onScrollToPosition"),
                this._processOnScrollToPosition(this.view._onScrollToPositionEvent, !1),
                this.view._onScrollToPositionEvent = void 0)
            }
            onLayoutListContainer(e, t) {
                h.log(d.LogTraceArea.VirtualMessageViewDebug, "Idle", "onLayoutListContainer"),
                t && this.view._onLayoutListContainer(e),
                this._finishEventProcessing()
            }
            _finishEventProcessing(e=!1) {
                if (!this._needsReconcilation) {
                    const t = this.view._lastScrollTop <= 0 || this.view._lastScrollTop >= this.view._containerHeight - this.view._viewportHeight;
                    this._needsReconcilation = t && e
                }
                if (i.size(this.view._pendingAnimations) > 0)
                    return this._reconcileCorrectionsDebounced.cancel(),
                    void this.view.setCurrentState(new A.WaitForAnimation(this.view));
                if (i.size(this.view._pendingMeasures) > 0)
                    return;
                if (this._needsReconcilation && !this.view._isDragging)
                    return void this._reconcileCorrections();
                const t = !this._needsReconcilation;
                this.view._checkAndReportVisibleRangeChanges(),
                this.view._calcNewRenderedItemState(!0, t),
                this.view._renderIfDirty(),
                this.view._focusCellIfNeeded(),
                this._reconcileCorrectionsDebounced()
            }
            _reconcileCorrections() {
                return this._needsReconcilation = !1,
                this.view._repositionCells({
                    animate: !1
                }),
                this.view._reconcileCorrections(!1),
                this._processPendingOnScrollToPosition(),
                this.view._checkAndReportVisibleRangeChanges(),
                this.view._calcNewRenderedItemState(),
                this.view._renderIfDirty(),
                !1
            }
            onListChanged(e, t) {
                h.log(d.LogTraceArea.VirtualMessageView, "Idle", "onListChanged " + JSON.stringify(i.omit(e, ["items"])) + ", " + i.map(e.items, e=>e.key)),
                this._processOnListChanged(e, t) || (this.view._renderIfDirty(),
                this._finishEventProcessing())
            }
            _processOnListChanged(e, t) {
                if (i.each(t, e=>{
                    const t = this.view._renderInfoCache[e.key];
                    if (t && !t.shouldUpdate) {
                        const s = this.view._itemMap[e.key]
                          , i = this.view._itemList[s];
                        t.shouldUpdate = this.view.props.shouldUpdateItem(i, e)
                    }
                }
                ),
                e.type !== c.ListModificationType.Metadata && this.view._sheepItFall(),
                e.type === c.ListModificationType.AddItems) {
                    if (this.view._itemsAdded(t, e),
                    i.size(this.view._pendingMeasures) > 0)
                        return this._reconcileCorrectionsDebounced.cancel(),
                        this.view.setCurrentState(new A.WaitForModifiedItemsRender(this.view,e)),
                        this.view._renderIfDirty(),
                        !0
                } else if (e.type === c.ListModificationType.RemoveItems)
                    this.view._itemsRemoved(t, e),
                    this.view._repositionCells({
                        animate: !0
                    });
                else if (e.type === c.ListModificationType.ReplaceItems) {
                    if (this.view._itemsReplaced(t, e),
                    i.size(this.view._pendingMeasures) > 0)
                        return this._reconcileCorrectionsDebounced.cancel(),
                        this.view.setCurrentState(new A.WaitForModifiedItemsRender(this.view,e)),
                        this.view._renderIfDirty(),
                        !0
                } else
                    e.type === c.ListModificationType.MoveItems && this.view._itemsMoved(t, e);
                return this.view._isRenderDirty = !0,
                !1
            }
            onScrollToPosition(e, t) {
                if (h.log(d.LogTraceArea.VirtualMessageViewDebug, "Idle", "onScrollToPosition"),
                i.size(this.view._pendingMeasures) > 0 || i.size(this.view._pendingAnimations) > 0)
                    return this.view._onScrollToPositionEvent = e,
                    void (this._needsReconcilation = !0);
                this._reconcileCorrections() ? this.view._onScrollToPositionEvent = e : (this._processOnScrollToPosition(e, t),
                this._finishEventProcessing())
            }
            _processOnScrollToPosition(e, t) {
                const s = this.view._containerHeight - this.view._viewportHeight;
                if (-1 === e)
                    this.view._setNewScrollTop(s, t);
                else {
                    const i = this.view._itemList
                      , o = this.view._getHeightOfItem(this.view._itemList[e]);
                    let n = this.view._calcHeightOfItems(i, 0, e) - o - Math.floor(.25 * this.view._viewportHeight);
                    n = n > s ? s : n,
                    this.view._setNewScrollTop(n, t)
                }
            }
            onScroll(e, t) {
                this.view._onScroll(e, t),
                this.view._onReportUserScrollEvent(),
                this._finishEventProcessing(!0)
            }
            onLayoutItem(e, t) {
                (this.view._onLayoutItem(e, t) || 0 === i.size(this.view._pendingMounts)) && this._finishEventProcessing(!0)
            }
            onAnimateStartStopItem(e, t) {
                this.view._onAnimateStartStopItem(e, t),
                this._finishEventProcessing()
            }
            onControllerScrollPositionSet() {
                h.warn(d.LogTraceArea.VirtualMessageView, "Idle - onControllerScrollPositionSet - Unexpected event")
            }
            onScrollEndDrag() {
                this._finishEventProcessing(!0)
            }
        }
        ,
        A.WaitForModifiedItemsRender = class {
            constructor(e, t) {
                this._view = e,
                this._listModification = t
            }
            init(e) {
                h.log(d.LogTraceArea.VirtualMessageViewDebug, "WaitForModifiedItemsRender", "init")
            }
            onLayoutListContainer(e, t) {
                h.log(d.LogTraceArea.VirtualMessageViewDebug, "WaitForModifiedItemsRender", "onLayoutListContainer"),
                t && (this._view._onLayoutListContainerEvent = e)
            }
            onListChanged(e, t) {
                h.log(d.LogTraceArea.VirtualMessageViewDebug, "WaitForModifiedItemsRender", "onListChanged"),
                this._view._onListChangedQueue.push({
                    listModification: e,
                    updatedList: t
                })
            }
            onScrollToPosition(e, t) {
                h.log(d.LogTraceArea.VirtualMessageViewDebug, "WaitForModifiedItemsRender", "onScrollToPosition"),
                this._view._onScrollToPositionEvent = e
            }
            onScroll(e, t) {
                h.log(d.LogTraceArea.VirtualMessageViewDebug, "WaitForModifiedItemsRender", "onScroll"),
                this._view._onScroll(e, t)
            }
            onLayoutItem(e, t) {
                if (this._view._onLayoutItem(e, t),
                0 === i.size(this._view._pendingMeasures)) {
                    if (this._listModification.type === c.ListModificationType.AddItems) {
                        const t = this._listModification.options && this._listModification.options.animateFromBottom
                          , s = this._view._renderInfoCache[e].top;
                        if (s <= this._view._getViewportBottom() + 30 && s >= this._view._lastScrollTop) {
                            if (this._view._repositionCells({
                                animate: !0,
                                dissallowVisibilityChanges: !0
                            }),
                            t) {
                                const e = this._view._containerHeight - this._view._getBottomSpacerHeight() - this._view._heightBelowRenderBlockEstimate
                                  , t = {
                                    animate: !1
                                };
                                i.each(this._listModification.items, s=>{
                                    this._view._renderInfoCache[s.key] && this._view._setCellTopAndVisibility(s.key, !0, e, 0, t)
                                }
                                )
                            }
                            this._view._repositionCells({
                                animate: !0,
                                staggerAnimations: !0
                            })
                        }
                    } else
                        this._view._repositionCells({
                            animate: !0
                        });
                    i.size(this._view._pendingAnimations) > 0 ? this._view.setCurrentState(new A.WaitForAnimation(this._view)) : this._view.setCurrentState(new A.Idle(this._view))
                }
            }
            onAnimateStartStopItem(e, t) {
                this._view._onAnimateStartStopItem(e, t)
            }
            onControllerScrollPositionSet() {
                h.warn(d.LogTraceArea.VirtualMessageView, "WaitForModifiedItemsRender - onControllerScrollPositionSet - Unexpected event")
            }
            onScrollEndDrag() {}
        }
        ,
        A.Wait = class {
            constructor(e, t) {
                this._view = e,
                i.delay(()=>{
                    this._view._isMounted && this._view.setCurrentState(new A.Idle(this._view))
                }
                , t)
            }
            init(e) {
                h.log(d.LogTraceArea.VirtualMessageViewDebug, "Wait", "init")
            }
            onLayoutListContainer(e, t) {
                h.log(d.LogTraceArea.VirtualMessageViewDebug, "Wait", "onLayoutListContainer"),
                t && (this._view._onLayoutListContainerEvent = e)
            }
            onListChanged(e, t) {
                h.log(d.LogTraceArea.VirtualMessageViewDebug, "Wait", "onListChanged"),
                this._view._onListChangedQueue.push({
                    listModification: e,
                    updatedList: t
                })
            }
            onScrollToPosition(e, t) {
                h.log(d.LogTraceArea.VirtualMessageViewDebug, "Wait", "onScrollToPosition"),
                this._view._onScrollToPositionEvent = e
            }
            onScroll(e, t) {
                h.log(d.LogTraceArea.VirtualMessageViewDebug, "Wait", "onScroll"),
                this._view._onScroll(e, t)
            }
            onLayoutItem(e, t) {
                this._view._onLayoutItemQueue.push({
                    itemKey: e,
                    newHeight: t
                })
            }
            onAnimateStartStopItem(e, t) {
                h.log(d.LogTraceArea.VirtualMessageViewDebug, "Wait", "onAnimateStartStopItem"),
                this._view._onAnimateStartStopItem(e, t)
            }
            onControllerScrollPositionSet() {
                h.warn(d.LogTraceArea.VirtualMessageView, "Wait - onControllerScrollPositionSet - Unexpected event")
            }
            onScrollEndDrag() {}
        }
        ,
        A.WaitForAnimation = class {
            constructor(e) {
                this._view = e
            }
            init(e) {
                h.log(d.LogTraceArea.VirtualMessageViewDebug, "WaitForAnimation", "init")
            }
            onLayoutListContainer(e, t) {
                h.log(d.LogTraceArea.VirtualMessageViewDebug, "WaitForAnimation", "onLayoutListContainer"),
                t && (this._view._onLayoutListContainerEvent = e)
            }
            onListChanged(e, t) {
                h.log(d.LogTraceArea.VirtualMessageViewDebug, "WaitForAnimation", "onListChanged"),
                this._view._onListChangedQueue.push({
                    listModification: e,
                    updatedList: t
                })
            }
            onScrollToPosition(e, t) {
                h.log(d.LogTraceArea.VirtualMessageViewDebug, "WaitForAnimation", "onScrollToPosition"),
                this._view._onScrollToPositionEvent = e
            }
            onScroll(e, t) {
                h.log(d.LogTraceArea.VirtualMessageViewDebug, "WaitForAnimation", "onScroll"),
                this._view._onScroll(e, t)
            }
            onLayoutItem(e, t) {
                this._view._onLayoutItemQueue.push({
                    itemKey: e,
                    newHeight: t
                })
            }
            onAnimateStartStopItem(e, t) {
                h.log(d.LogTraceArea.VirtualMessageViewDebug, "WaitForAnimation", "onAnimateStartStopItem"),
                this._view._onAnimateStartStopItem(e, t),
                0 === i.size(this._view._pendingAnimations) && this._view.setCurrentState(new A.Idle(this._view))
            }
            onControllerScrollPositionSet() {
                h.warn(d.LogTraceArea.VirtualMessageView, "WaitForAnimation - onControllerScrollPositionSet - Unexpected event")
            }
            onScrollEndDrag() {}
        }
        ,
        A.WaitForScrollPositionSet = class {
            constructor(e) {
                this._view = e
            }
            init(e) {
                h.log(d.LogTraceArea.VirtualMessageViewDebug, "WaitForScrollPositionSet", "init")
            }
            onLayoutListContainer(e, t) {
                h.log(d.LogTraceArea.VirtualMessageViewDebug, "WaitForScrollPositionSet", "onLayoutListContainer"),
                t && (this._view._onLayoutListContainerEvent = e)
            }
            onListChanged(e, t) {
                h.log(d.LogTraceArea.VirtualMessageViewDebug, "WaitForScrollPositionSet", "onListChanged"),
                this._view._onListChangedQueue.push({
                    listModification: e,
                    updatedList: t
                })
            }
            onScrollToPosition(e, t) {
                h.log(d.LogTraceArea.VirtualMessageViewDebug, "WaitForScrollPositionSet", "onScrollToPosition"),
                this._view._onScrollToPositionEvent = e
            }
            onScroll(e, t) {}
            onLayoutItem(e, t) {
                this._view._onLayoutItemQueue.push({
                    itemKey: e,
                    newHeight: t
                })
            }
            onAnimateStartStopItem(e, t) {
                h.log(d.LogTraceArea.VirtualMessageViewDebug, "WaitForScrollPositionSet", "onAnimateStartStopItem"),
                this._view._onAnimateStartStopItem(e, t)
            }
            onControllerScrollPositionSet() {
                h.log(d.LogTraceArea.VirtualMessageViewDebug, "WaitForScrollPositionSet", "onControllerScrollPositionSet"),
                this._view._repositionCells({}),
                this._view.setCurrentState(new A.Idle(this._view))
            }
            onScrollEndDrag() {}
        }
        ,
        t.isMonkeyEnabled = L
    }