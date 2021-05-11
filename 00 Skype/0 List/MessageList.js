3141: function(e, t, s) {
        "use strict";
        const i = s(33)
          , o = s(1)
          , n = s(3142)
          , r = s(36)
          , a = s(1833)
          , l = s(86)
          , c = s(0)
          , d = s(6)
          , h = s(3146)
          , u = s(1361)
          , p = s(114)
          , g = s(78)
          , m = s(79)
          , S = s(153)
          , y = s(46)
          , f = s(191)
          , _ = s(16)
          , v = s(10)
          , C = s(273)
          , b = s(857)
          , T = s(1830)
          , M = s(229)
          , w = s(30)
          , I = s(130)
          , P = s(228)
          , k = s(71)
          , A = s(1836)
          , R = s(902)
          , L = s(56)
          , E = s(2)
          , F = s(525)
          , x = s(713)
          , D = s(3)
          , O = s(3147)
          , V = s(38)
          , B = s(3148)
          , U = s(5)
          , N = s(175)
          , H = s(4)
          , z = s(447)
          , W = s(3149)
          , j = s(147)
          , G = s(828)
          , K = s(775)
          , q = s(113)
          , Q = s(1124)
          , X = s(127)
          , J = s(127)
          , Y = s(132)
          , $ = s(173)
          , Z = s(194)
          , ee = s(54)
          , te = s(32)
          , se = s(62)
          , ie = s(20)
          , oe = s(17)
          , ne = s(22)
          , re = s(3150)
          , ae = s(439)
          , le = s(1837)
          , ce = s(87)
          , de = s(813)
          , he = s(3151)
          , ue = s(24)
          , pe = s(34)
          , ge = s(106)
          , me = s(307)
          , Se = s(310)
          , ye = s(456)
          , fe = s(3152)
          , _e = s(1831)
          , ve = s(308)
          , Ce = s(1238)
          , be = s(1838)
          , Te = s(3153)
          , Me = s(1239)
          , we = s(3170)
          , Ie = s(1839)
          , Pe = s(3172)
          , ke = s(3173)
          , Ae = s(19)
          , Re = s(394)
          , Le = s(3176)
          , Ee = s(66)
          , Fe = s(18)
          , xe = (s(14),
        s(248))
          , De = s(15)
          , Oe = s(12)
          , Ve = s(29)
          , Be = s(95)
          , Ue = s(67)
          , Ne = s(45)
          , He = s(9)
          , ze = s(1840)
          , We = s(696);
        class je {
            constructor(e, t, s, i) {
                this.key = e,
                this.skypeMessage = t,
                this.shouldItemFocusOnMobile = s,
                this.height = i,
                this.focusable = !0
            }
        }
        class Ge {
            constructor(e, t, s, i=24) {
                this.key = e,
                this.readReceiptsHeads = t,
                this.readReceiptsSum = s,
                this.height = i,
                this.focusable = !0
            }
        }
        class Ke {
            constructor(e, t, s=36) {
                this.key = e,
                this.dateOfMarker = t,
                this.height = s,
                this.focusable = !1
            }
        }
        class qe {
            constructor(e, t, s=Ie.ItemListKey.Composing, i=45) {
                this.composingMris = e,
                this.conversationId = t,
                this.key = s,
                this.height = i,
                this.focusable = !1
            }
        }
        class Qe {
            constructor(e=Ie.ItemListKey.UnreadMarker, t=36, s=!1) {
                this.key = e,
                this.height = t,
                this.focusItemOnMountOnMobile = s,
                this.focusable = !0
            }
        }
        class Xe {
            constructor(e=Ie.ItemListKey.NewConnection, t=32, s=!1) {
                this.key = e,
                this.height = t,
                this.focusItemOnMount = s,
                this.focusable = !0
            }
        }
        class Je {
            constructor(e, t=Ie.ItemListKey.ReadOnlyChatHeader, s=300) {
                this.conversationId = e,
                this.key = t,
                this.height = s,
                this.focusable = !0
            }
        }
        class Ye {
            constructor(e=Ie.ItemListKey.ContactInviteHeaderItem, t, s, i, o, n, r) {
                this.key = e,
                this.height = t,
                this.showWave = s,
                this.isContactInviteAccepted = i,
                this.isContactInvitePending = o,
                this.isEncryptedConversationEstablished = n,
                this.isAnyMessageInTheStream = r,
                this.focusable = !0
            }
        }
        class $e {
            constructor(e, t=Ie.ItemListKey.InviteMorePeople, s=60) {
                this.conversationId = e,
                this.key = t,
                this.height = s,
                this.focusable = !0
            }
        }
        class Ze {
            constructor(e, t=Ie.ItemListKey.InviteMorePeople, s=480) {
                this.conversationId = e,
                this.key = t,
                this.height = s,
                this.focusable = !0
            }
        }
        class et {
            constructor(e, t=Ie.ItemListKey.InviteMorePeople, s=480) {
                this.conversationId = e,
                this.key = t,
                this.height = s,
                this.focusable = !0
            }
        }
        class tt {
            constructor(e, t=Ie.ItemListKey.SpeechConsent, s=480) {
                this.conversationId = e,
                this.key = t,
                this.height = s,
                this.focusable = !0
            }
        }
        const st = Number.MAX_VALUE
          , it = U.lazyProperties({
            contentOuterContainer: ()=>c.Styles.createViewStyle({
                flex: 1,
                alignSelf: "stretch",
                backgroundColor: "transparent"
            }),
            spinnerContainer: ()=>c.Styles.createViewStyle({
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
            }),
            contactInviteUserIcon: ()=>c.Styles.createViewStyle({
                alignSelf: "center",
                marginVertical: 4
            }),
            composingIndicatorContainerMobile: ()=>c.Styles.createViewStyle({
                marginHorizontal: 10
            }),
            composingIndicatorContainerDesktop: ()=>c.Styles.createViewStyle({
                marginHorizontal: 0
            }),
            actionsDesktopContainer: ()=>c.Styles.createViewStyle({
                flex: -1,
                flexDirection: "row",
                overflow: "visible"
            }),
            noMessagesContainer: ()=>c.Styles.createViewStyle({
                position: "absolute",
                top: 0,
                left: 20,
                right: 20,
                bottom: 0,
                justifyContent: "center"
            }),
            contentAreaContainer: ()=>c.Styles.createViewStyle({
                flex: 1,
                height: 200
            }),
            groupEngagementButtons: ()=>c.Styles.createViewStyle({
                flex: 0,
                flexDirection: "row",
                paddingHorizontal: 25,
                alignSelf: "stretch",
                justifyContent: "center",
                flexWrap: "wrap",
                alignItems: "stretch"
            }),
            groupEngageButtonStyle: ()=>c.Styles.createButtonStyle({
                marginHorizontal: 5,
                marginVertical: 10,
                minWidth: 200
            }),
            newConnectionContainer: ()=>c.Styles.createViewStyle({
                flex: 1,
                alignItems: "center",
                height: 32,
                paddingTop: 5
            })
        })
          , ot = {};
        class nt extends Oe.default {
            constructor() {
                super(...arguments),
                this._lockUpdatesToConsumptionHorizon = !1,
                this._topPartialViewIndex = -1,
                this._topWholeViewIndex = -1,
                this._bottomWholeViewIndex = -1,
                this._bottomPartialViewIndex = -1,
                this._lastViewIndex = 0,
                this._lastReceivedMessageTimestamp = 0,
                this._lastSentMessageTimestamp = 0,
                this._lastMessageTimestamp = 0,
                this._lastSentMessageTimestampInitial = 0,
                this._skypeMessages = [],
                this._unreadMarkerShown = !1,
                this._unreadMarkerTimestamp = 0,
                this._unreadMarkerMessageIndex = -1,
                this._unreadMarkerViewIndex = -1,
                this._isUserPresentInApp = !0,
                this._isUserScrolling = !1,
                this._readOnlyConversation = !1,
                this._oldConsumptionHorizonTimestamp = st,
                this._currentConsumptionHorizonTimestamp = st,
                this._composingMris = [],
                this._contentRendered = !1,
                this._disallowFetchingMoreMessagesFromStore = !1,
                this._isFocusInsideMessageStreamOnMount = !1,
                this._isMessageStreamFocusStatusNotified = !1,
                this._virtualMessageViewRefCount = 0,
                this._openAnimationCompleted = !1,
                this._readReceiptsKeysCounter = 0,
                this._firstUpdateCompleteForMutliSelect = !1,
                this._readReceiptsThrottleTimeout = d.default.getS4LMessagingFeaturesNoSubscription().messageReadEventTimeout,
                this._sendMessageReadEventThrottled = D.throttleTrack(this._readReceiptsThrottleTimeout),
                this._statusPillInstance = new Ce.default,
                this._lastMessageFullyVisible = !1,
                this._shouldFocusLastMessage = !1,
                this._streamItemRefs = {},
                this._speechConsentSuggestionSeenAt = -1,
                this._instrumentationCallback = (e,t,s)=>{
                    t && t !== E.LogTraceArea.MessageStream && t !== E.LogTraceArea.MessageStreamDebug && t !== E.LogTraceArea.MessageStreamStore && t !== E.LogTraceArea.MessageStreamStoreDebug && t !== E.LogTraceArea.VirtualMessageView && t !== E.LogTraceArea.VirtualMessageViewDebug && t !== E.LogTraceArea.ConsumptionHorizon && o.defer(()=>{
                        if (this.isComponentMounted()) {
                            const n = e === i.LogLevel.Error ? "Error" : e === i.LogLevel.Warning ? "Warning" : e === i.LogLevel.Trace ? E.LogTraceArea[t] : e === i.LogLevel.Debug1 ? "Info" : e === i.LogLevel.Debug3 ? "Log" : e === i.LogLevel.Debug4 ? "Debug" : "Unknown"
                              , r = I.createMessageInfoFromEscapedText(_.SkonsoleMri, E.PostSource.EphemeralMessage, "[" + n + "] " + o.map(s, e=>e + "").join(""));
                            this._checkMessageStreamStoreAndUpdate(this.props, this.state.scrollRequest, "in defer call of _instrumentationCallback"),
                            this.feedEphemeralMessage(r)
                        }
                    }
                    )
                }
                ,
                this._onMessageStreamStoreTrigger = ()=>this.isComponentMounted() && !this.props.isInvisible ? this._updateStreamItemsAndReturnNewState(this.props) : {},
                this._applyModificationsDebounced = o.debounce((e,t,s=this.props,i)=>{
                    this.isComponentMounted() && !this.props.isInvisible && (this._checkMessageStreamStoreAndUpdate(s, i ? {
                        id: He.newGuid(),
                        messageTimestamp: i
                    } : void 0, "in debounced call of _applyModificationsDebounced"),
                    this._applyModifications(e, t, s, i))
                }
                , 100),
                this._equalsItemInfo = (e,t)=>e instanceof je && t instanceof je ? e.key === t.key && e.skypeMessage === t.skypeMessage : C.default.comparator(e, t),
                this._onMountItem = (e,t)=>{
                    t && (this._mountedItemToFocus = e)
                }
                ,
                this._onVisibleRangeChanged = (e,t,s,i)=>{
                    if (!this.isComponentMounted() || this.props.isInvisible)
                        return;
                    const n = this._dataItemsInfo.getItemList();
                    this._lastViewIndex = n.length - 1;
                    const r = this._topWholeViewIndex !== s
                      , a = n[i >= 0 ? i : t];
                    a instanceof je && this._reportRenderItemQoS(a.skypeMessage, !0),
                    this._topPartialViewIndex = e,
                    this._bottomPartialViewIndex = t,
                    this._bottomWholeViewIndex = i,
                    this._topWholeViewIndex = s,
                    this._checkForConsumptionHorizonChange(),
                    this._checkForReactionConsumptionHorizonChange();
                    const l = this.state.scrollToItemViewIndex;
                    if ((this._scrollToMessage || this._scrollToUnreadMarker || this.props.isIncomingContactInvitePending) && o.isNumber(l)) {
                        l <= t && l >= e && (this._scrollToMessage = !1,
                        this._scrollToUnreadMarker = !1)
                    }
                    const c = 0 === s
                      , d = i === this._lastViewIndex
                      , h = !this._messageStreamStore.isLatestMessageTheEnd() || i <= this._lastViewIndex - 5;
                    if (this._lastMessageFullyVisible !== d && this.state.canShowSuggestions && (this._lastMessageFullyVisible = d,
                    this._suggestionsListView && this._suggestionsListView.animateSuggestions(d)),
                    !this._isMessageStreamFocusStatusNotified) {
                        let e = !1;
                        this._isFocusInsideMessageStreamOnMount && (e = !0),
                        this.props.onMessageStreamScreenReaderFocusUpdated && this.props.onMessageStreamScreenReaderFocusUpdated(e),
                        this._isMessageStreamFocusStatusNotified = !0
                    }
                    o.defer(()=>{
                        if (this.isComponentMounted() && !this.props.isInvisible) {
                            this._checkMessageStreamStoreAndUpdate(this.props, this.state.scrollRequest, "in defer call of _onVisibleRangeChanged");
                            const s = this._convertViewIndexToMessage(this._topPartialViewIndex, !0);
                            this._topVisibleItemInfo !== s && (this._topVisibleItemInfo = s,
                            this._topVisibleItemInfo && this._topVisibleItemInfo.skypeMessage && (this._statusPillInstance.setTopPartiallyVisibleMessage(this._topVisibleItemInfo.skypeMessage),
                            this._statusPillInstance.setUnread(this._unreadMarkerShown && this._topVisibleItemInfo.metadata.viewIndex > this._unreadMarkerViewIndex)));
                            const i = -1 !== e && e < 21;
                            !c && !i || this._messageStreamStore.isEarliestMessageTheBeginning() || this._messageStreamStore.cannotGetEarlierMessages() || this._disallowFetchingMoreMessagesFromStore ? this.props.onUserScrolledToTheTop && !o.isUndefined(this._currentScrollTop) && c && r && (this._messageStreamStore.isEarliestMessageTheBeginning() || this._messageStreamStore.cannotGetEarlierMessages()) && this.props.onUserScrolledToTheTop() : this._messageStreamStore.fetchEarlierMessages();
                            const n = this._lastViewIndex - 21
                              , a = -1 !== t && t > n;
                            let l = h;
                            D.log(E.LogTraceArea.MessageStream, 'Should show "jump to end" button', l),
                            !d && !a || this._messageStreamStore.isLatestMessageTheEnd() || this._disallowFetchingMoreMessagesFromStore ? d && this._messageStreamStore.isLatestMessageTheEnd() && (D.log(E.LogTraceArea.MessageStream, 'Do not show "jump to end" button because we are at the end of the stream'),
                            this._onScrolledToTheBottom(!0),
                            l = !1) : this._messageStreamStore.fetchLaterMessages(),
                            !l && this._shouldFocusLastMessage && this._listView && this.state.lastMessage && (this._listView.focusMessage(this.state.lastMessage.cuid),
                            this._shouldFocusLastMessage = !1),
                            this._jumpToEndButton && this._jumpToEndButton.setVisible(l)
                        }
                    }
                    )
                }
                ,
                this._updateConsumptionHorizonToLastVisibleItem = ()=>{
                    this._lastVisibleItemForConsumptionHorizon && (D.log(E.LogTraceArea.ConsumptionHorizon, "Actually updating consumption horizon to: " + this._lastVisibleItemForConsumptionHorizon.getConsumptionHorizonString()),
                    this._consumptionHorizonUpdateDebounceTimer && (Ve.clearTimeout(this._consumptionHorizonUpdateDebounceTimer),
                    this._consumptionHorizonUpdateDebounceTimer = void 0),
                    m.setConsumptionHorizonToMessage(this.props.conversationId, this._lastVisibleItemForConsumptionHorizon),
                    this._lastVisibleItemForConsumptionHorizon = void 0)
                }
                ,
                this._checkForReactionConsumptionHorizonChange = ()=>{
                    this._reactionConsumptionHorizonUpdateDebounceTimer && Ve.clearTimeout(this._reactionConsumptionHorizonUpdateDebounceTimer),
                    this._reactionConsumptionHorizonUpdateDebounceTimer = Ve.setTimeout(this._updateReactionConsumptionHorizon, 1500)
                }
                ,
                this._updateReactionConsumptionHorizon = ()=>{
                    let e = 0;
                    const t = this._dataItemsInfo.getItemList();
                    for (let s = this._topWholeViewIndex; s <= this._bottomWholeViewIndex; s++) {
                        const i = t[s];
                        let o;
                        i instanceof je && (o = i.skypeMessage),
                        o && ae.isLastMessageUpdateReaction(o) && (S.markReactionsAsRead(o),
                        e++)
                    }
                    D.log(E.LogTraceArea.ConsumptionHorizon, "MessageStream - Updating of reaction consumption horizon for messages in viewport. Updated " + e),
                    this._reactionConsumptionHorizonUpdateDebounceTimer && (Ve.clearTimeout(this._reactionConsumptionHorizonUpdateDebounceTimer),
                    this._reactionConsumptionHorizonUpdateDebounceTimer = void 0)
                }
                ,
                this._onCopyContextMenu = ()=>!!this._copyListenerRef && this._copyListenerRef.triggerCopy(),
                this._onQuoteSelectionContextMenu = ()=>{
                    this.props.onQuoteSelectionContextMenu(g.chain(o.map(this._streamItemRefs, ({ref: e, message: t})=>{
                        const s = e.quoteSelection();
                        return s ? t.mergePartialUpdate({
                            content: s
                        }) : void 0
                    }
                    ), o.flatten, o.compact))
                }
                ,
                this._onCopy = e=>{
                    const t = g.chain(o.map(this._streamItemRefs, ({ref: t})=>t.copySelection(e)), o.flatten, o.compact, o.size);
                    t > 0 && (Y.default.scheduleTextMessage(H.getString("MessageStream.MessageCopied"), void 0, this._getRootViewId()),
                    D.track(new X.KeyboardMessagesTelemetry(this.props.conversationId,{
                        messagesCount: t,
                        actionType: J.KeyboardActionType.KeyboardCopy
                    })))
                }
                ,
                this._onOuterContainerLayout = e=>{
                    this.setState({
                        streamHeight: e.height
                    })
                }
                ,
                this._onSuggestionsListViewRef = e=>{
                    this._suggestionsListView = e || void 0,
                    this._suggestionsListView && this.state.canShowSuggestions && this._suggestionsListView.animateSuggestions(this._lastMessageFullyVisible)
                }
                ,
                this._onInitialRenderComplete = ()=>{
                    this.props.onInitialRenderComplete && this.props.onInitialRenderComplete(),
                    this._markHub2StreamScenarioStepCompleted("InitialRenderComplete"),
                    this.isComponentMounted() && this.setState({
                        initialRenderComplete: !0
                    }),
                    this._openAnimationCompleted && oe.finishScenario(this.props.conversationId),
                    ve.default.messageStreamRendered(),
                    this._toggleVirtualMessageView(!0)
                }
                ,
                this._openAnimationComplete = ()=>{
                    this._openAnimationCompleted = !0,
                    this.state.initialRenderComplete && (this._markHub2StreamScenarioStepCompleted("WaitingForAnimationEnd"),
                    oe.finishScenario(this.props.conversationId))
                }
                ,
                this._updateStatusPill = o.throttle(()=>{
                    this._statusPill && this._statusPill.setEnabledForInfo(!0).touch()
                }
                , 500),
                this._onScroll = (e,t)=>{
                    this._lockUpdatesToConsumptionHorizon = !1,
                    this._onScrollTimer && (Ve.clearTimeout(this._onScrollTimer),
                    this._onScrollTimer = void 0),
                    this._onScrollTimer = Ve.setTimeout(this._onScrollStoppedDebounced, 1500),
                    this._isUserScrolling = !0,
                    this._updateStatusPill();
                    const s = this._bottomWholeViewIndex === this._lastViewIndex && this._messageStreamStore.isLatestMessageTheEnd();
                    this._onScrolledToTheBottom(s),
                    this.props.onScroll && this.props.onScroll(e, this._currentScrollTop || 0),
                    this._currentScrollTop = e
                }
                ,
                this._onScrollStoppedDebounced = ()=>{
                    this._isUserScrolling = !1,
                    this._onScrollTimer = void 0
                }
                ,
                this._onOverrideConsumptionHorizon = e=>{
                    this._consumptionHorizonTimestampOverride = e
                }
                ,
                this._shouldUpdateItem = (e,t)=>e instanceof je && t instanceof je ? e.key !== t.key || e.skypeMessage !== t.skypeMessage || t.metadata.shouldUpdate : !V.default(e, t),
                this._renderItem = (e,t)=>{
                    if (e instanceof Je)
                        return c.createElement(Be.UserIcon, {
                            key: e.key,
                            style: it.contactInviteUserIcon,
                            userMri: e.conversationId,
                            size: Ue.UserIconSize.Size120,
                            conversationId: this.props.conversationId
                        });
                    if (e instanceof Ye)
                        return c.createElement(T, {
                            key: e.key,
                            conversationId: this.props.conversationId,
                            otherPartyMri: this.props.otherPartyMri,
                            isIncomingContactInvitePending: this.props.isIncomingContactInvitePending,
                            isOutgoingContactInviteAccepted: this.props.isContactInviteAccepted,
                            onIncomingContactInviteAccepted: this.props.onContactInviteAccepted,
                            inviteToken: this.props.inviteToken,
                            isEncryptedConversationEstablished: this.props.isEncryptedConversationEstablished,
                            isAnyMessageInTheStream: e.isAnyMessageInTheStream,
                            showWave: e.showWave,
                            onGreet: this.props.onGreet
                        });
                    if (e instanceof qe) {
                        const t = [];
                        return this.state.isUsingStackNavigationContext ? t.push(it.composingIndicatorContainerMobile) : t.push(it.composingIndicatorContainerDesktop),
                        c.createElement(c.View, {
                            key: "-composingIndicator",
                            style: t
                        }, c.createElement(we, {
                            typingMris: e.composingMris,
                            conversationId: e.conversationId,
                            isUsingStackNavigationContext: this.state.isUsingStackNavigationContext
                        }))
                    }
                    if (e instanceof Qe) {
                        const t = _.isPhoneMri(this.props.conversationId) ? H.getString("MessageStream.UnreadSmsMarkerDivider") : H.getString("MessageStream.UnreadMarkerDivider");
                        return c.createElement(Te, {
                            text: t,
                            dividerTypeIsLastRead: !0,
                            messageStreamFontSize: this.state.messageStreamFontSize,
                            focusStreamItemTextForMobileScreenReader: e.focusItemOnMountOnMobile,
                            onMountItem: this._onMountItem
                        })
                    }
                    if (e instanceof Ke) {
                        const t = ()=>A.default.getDisplayDateString(e.dateOfMarker);
                        return c.createElement(Te, {
                            textGetter: t,
                            dividerTypeIsLastRead: !1,
                            messageStreamFontSize: this.state.messageStreamFontSize
                        })
                    }
                    if (e instanceof Ge)
                        return c.createElement(ke.StreamItemReadReceipts, {
                            key: e.key,
                            conversationId: this.props.conversationId,
                            readReceiptsHeads: e.readReceiptsHeads,
                            readReceiptsSum: e.readReceiptsSum,
                            availableHeight: e.height
                        });
                    if (e instanceof je)
                        return K.default.notifyMessageRendered(e.skypeMessage.getOriginalClientMessageId(), ne.default.isUsingStackNavigationContext()),
                        D.debug(()=>["DIM_CALC - message stream containerInitialDimensions", this.props.containerInitialDimensions]),
                        this._reportRenderItemQoS(e.skypeMessage, !1),
                        c.createElement(Me.StreamItem, Object.assign({
                            ref: this._onStreamItemRef(e.skypeMessage)
                        }, e.metadata.itemRenderInfo, {
                            key: "stream-item-" + e.skypeMessage.cuid,
                            message: e.skypeMessage,
                            renderOrigin: this.props.renderOrigin || L.MessageRenderOrigin.ChatCanvas,
                            isConversationAccepted: this.props.isConversationAccepted,
                            isLastMessage: this.state.lastMessage === e.skypeMessage,
                            containerInitialDimensions: this.props.containerInitialDimensions,
                            disableForward: this.props.disableForward,
                            disableMarkUnread: this.props.isHighlightCommentMode,
                            disableReactions: this.props.isHighlightCommentMode,
                            disableSelectMultipleMessages: this.props.disableSelectMultipleMessages,
                            disableReportMessage: this.props.disableReportMessage,
                            disablePlugins: this.props.disablePlugins,
                            onDisableScroll: this._onDisableScroll,
                            onMarkAsUnread: this._onOverrideConsumptionHorizon,
                            onItemPress: this.props.onItemPress,
                            onMountContent: this.props.onMountContent,
                            onMountItem: this._onMountItem,
                            onQuote: this.props.onQuoteMessage,
                            onEdit: this.props.onMessageEdit,
                            onCopyContextMenu: this.state.enableMultiMessageQuoteOnKeyboard ? this._onCopyContextMenu : void 0,
                            onQuoteSelectionContextMenu: this.state.enableMultiMessageQuoteOnKeyboard ? this._onQuoteSelectionContextMenu : void 0,
                            focusStreamItemForMobileScreenReader: e.shouldItemFocusOnMobile,
                            isSelectMessagesModeActive: this.props.isSelectMessagesModeActive,
                            getRootWindowComponent: this._getListView,
                            messageStreamFontSize: this.state.messageStreamFontSize,
                            linkedMessages: this._getLinkedMessages(e.skypeMessage),
                            isTranslatedConversation: this.props.isTranslatedConversation,
                            searchStore: this.props.searchStore
                        }));
                    if (e instanceof $e) {
                        const t = c.createElement(O, {
                            conversationId: e.conversationId,
                            style: it.groupEngageButtonStyle,
                            origin: F.InviteMorePeopleButtonOrigin.MessageStream,
                            messageStreamFontSize: this.state.messageStreamFontSize
                        })
                          , s = this.state.enableGroupShareButton ? c.createElement(x, {
                            conversationId: e.conversationId,
                            useSXButton: !0,
                            style: it.groupEngageButtonStyle,
                            origin: F.ShareGroupButtonOrigin.MessageStream
                        }) : void 0;
                        return c.createElement(c.View, {
                            style: it.groupEngagementButtons
                        }, t, s)
                    }
                    return e instanceof Xe ? c.createElement(c.View, {
                        style: it.newConnectionContainer
                    }, c.createElement(De.Caption, null, this._getNewConnectionString())) : e instanceof Ze ? c.createElement(re.default, {
                        conversationId: e.conversationId,
                        memberCount: this._conversation.getMemberCount()
                    }) : e instanceof et ? c.createElement(W.default, {
                        threadId: e.conversationId,
                        origin: $.MeetNowOrigin.MessageStream
                    }) : e instanceof tt ? c.createElement(fe.default, null) : c.createElement(c.View, null)
                }
                ,
                this._onStreamItemRef = e=>t=>{
                    const s = e.cuid;
                    t ? this._streamItemRefs[e.cuid] = {
                        ref: t,
                        message: e
                    } : delete this._streamItemRefs[s]
                }
                ,
                this._onCopyListenerRef = e=>this._copyListenerRef = e || void 0,
                this._getListView = ()=>this._listView,
                this._getLinkedMessages = e=>e.isAlbum() ? z.default.getNotFailedMediaMessagesForAlbum(e.getAlbumId()) : [],
                this._getReadReceiptsSummary = e=>{
                    let t = [];
                    return o.eachRight(this._readReceiptsMarks, (s,i)=>(t.push(...s.readReceipts),
                    i !== e.toString())),
                    t
                }
                ,
                this._onJumpToEndButtonRef = e=>{
                    this._jumpToEndButton = e || void 0
                }
                ,
                this._onJumpToEndButtonPress = e=>{
                    let t;
                    this._shouldFocusLastMessage = !0,
                    this._messageStreamStore.isLatestMessageTheEnd() ? (t = this._lastViewIndex - this._bottomWholeViewIndex,
                    this._scrollToBottom()) : (this._scrollToBottomOfRefreshedStream(),
                    D.log(E.LogTraceArea.MessageStreamDebug, "Refresh store reason: User jumped to end from a position where last messages were not loaded in view")),
                    this.props.onJumpToEndPress && this.props.onJumpToEndPress(),
                    D.track(new X.JumpToEnd(this.props.conversationId,t,e))
                }
                ,
                this._onDisableScroll = e=>{
                    this.setState({
                        isScrollDisabled: e
                    })
                }
                ,
                this._statusPillRef = e=>{
                    this._statusPill = e || void 0
                }
                ,
                this._onListViewRef = e=>{
                    this._listView = e || void 0
                }
                ,
                this._onAnimatedVirtualMessageViewRef = e=>{
                    this._animatedView = e || void 0
                }
                ,
                this._onLoadingPlaceholderRef = e=>{
                    this._loadingPlaceholderView = e || void 0
                }
                ,
                this._trackMonkey = e=>{
                    D.track(new X.MonkeySeeMonkeyDo(this.props.conversationId,e))
                }
            }
            componentDidMount() {
                super.componentDidMount(),
                this._postCreatedSubscriptionToken = ce.default.postCreated.subscribe(e=>{
                    this.isComponentMounted() && this._contentRendered && !e.editedMessageCuid && o.includes(e.conversationIds, this.props.conversationId) && this._messageStreamStore && (this._checkMessageStreamStoreAndUpdate(this.props, this.state.scrollRequest, "in async call of PostingService.postCreated"),
                    this._messageStreamStore.isLatestMessageTheEnd() ? this._scrollToBottom() : this._scrollToBottomOfRefreshedStream())
                }
                )
            }
            componentDidUpdate(e, t, s) {
                super.componentDidUpdate(e, t, s),
                this._shouldSkipSound() ? this._newMessageSound = void 0 : r.default.getRingerMode().then(e=>{
                    if (!this.isComponentMounted() || this._shouldSkipSound())
                        return void (this._newMessageSound = void 0);
                    const t = He.newCauseId();
                    switch (D.log(E.LogTraceArea.MessageStream, "componentDidUpdate maybe playing new message sound causeId: " + t),
                    e) {
                    case r.DeviceRingerMode.Unknown:
                    case r.DeviceRingerMode.Normal:
                        this._newMessageSound.playOnce(t),
                        this._newMessageSound = void 0
                    }
                }
                , e=>{
                    D.warn(E.LogTraceArea.MessageStream, "DeviceUtilities getRingerMode failed: " + Ae.errorAsString(e)),
                    this._newMessageSound = void 0
                }
                ),
                e.isSelectMessagesModeActive !== this.props.isSelectMessagesModeActive && (this._firstUpdateCompleteForMutliSelect = !0,
                this._viewItemsListDirty = !0,
                this._regenerateItemListIfDirty(this.props, this.state)),
                e.isTranslatedConversation !== this.props.isTranslatedConversation && (this._viewItemsListDirty = !0,
                this._shouldUpdateForTranslationChange = !0,
                this._regenerateItemListIfDirty(this.props, this.state)),
                this._maybeAnimateScrollToPosition(t.scrollRequest, this.state.scrollRequest)
            }
            componentWillUnmount() {
                super.componentWillUnmount(),
                this._instrumentationSubscription && (this._instrumentationSubscription.unsubscribe(),
                this._instrumentationSubscription = void 0),
                this._consumptionHorizonUpdateDebounceTimer && (Ve.clearTimeout(this._consumptionHorizonUpdateDebounceTimer),
                this._consumptionHorizonUpdateDebounceTimer = void 0),
                this._lastVisibleItemForConsumptionHorizon && this._updateConsumptionHorizonToLastVisibleItem(),
                this._onScrollTimer && (Ve.clearTimeout(this._onScrollTimer),
                this._onScrollTimer = void 0),
                this._postCreatedSubscriptionToken && this._postCreatedSubscriptionToken.unsubscribe(),
                this._statusPillInstance && this._statusPillInstance.destroy(),
                this._sendMessageReadEventThrottled.flush(),
                this.state.showSpeechConsentSuggestion && this.props.renderOrigin !== L.MessageRenderOrigin.CallCanvas && ye.default.hideSpeechConsentSuggestion()
            }
            _buildState(e, t) {
                var s, i, n, r, a, l;
                const c = d.default.getS4LMessagingFeatures()
                  , h = d.default.getS4LContactsFeatures()
                  , u = d.default.getS4LCMCFeatures()
                  , p = te.default.getUserPreferencesLocal()
                  , g = this.props;
                this._conversation = w.default.getConversation(e.conversationId);
                const m = M.default.getMessageCountsForConversation(e.conversationId)
                  , S = null === (s = this._conversation) || void 0 === s ? void 0 : s.memberConsumptionHorizonsSorted
                  , y = this._getRootViewId()
                  , f = Re.canShowSuggestions()
                  , v = ne.default.isUsingStackNavigationContext();
                let C = {
                    useCompactLayout: ue.default.isSmallDevice(y) || !!this._getContext().isPresentedInDesktopSubview,
                    isUsingStackNavigationContext: v,
                    inAppSoundsEnabled: p.enableNotificationSounds && c.enableMessageSounds,
                    readReceiptsEnabled: c.enableReadReceipts && !_.isAgent(e.conversationId) && se.default.getReadReceiptsEnabled() && e.isConversationAccepted,
                    memberConsumptionHorizonsSorted: S,
                    isOneOnOne: null === (i = this._conversation) || void 0 === i ? void 0 : i.isOneOnOne(),
                    enableGreetingCard: c.enableGreetingCard,
                    enableGroupShareButton: h.enableGroupShareButtonInChat,
                    enableMultiMessageQuoteOnKeyboard: c.enableMultiMessageQuoteOnKeyboard && p.pasteAsQuotesEnabled,
                    newConnectionMessageId: null === (n = this._conversation) || void 0 === n ? void 0 : n.getConversationProperty(_.ConversationProps.NewConnectionMessageId),
                    isNewConnectionMessageEnabled: h.enableNewConnectionMessage,
                    enableLoadingPlaceholder: c.enableLoadingPlaceholder,
                    canShowSuggestions: f,
                    messageStreamFontSize: te.default.getMessageStreamFontSize(),
                    scrollRequest: c.enableUnifiedScrollToTimestamp && e.searchStore ? e.searchStore.getTimestamp() : void 0,
                    enableNewConversationCreation: c.enableNewConversationCreation,
                    isBookmarksStreamFromTopEnabled: c.enableBookmarksStreamFromTop,
                    isMeetNowConversation: u.enableMeetNow && (null === (r = this._conversation) || void 0 === r ? void 0 : r.isMeetNowThread()),
                    isJoinEnabled: null === (a = this._conversation) || void 0 === a ? void 0 : a.isJoinEnabled(),
                    isRegularMemberInModeratedGroup: this._conversation && Z.isRegularMemberInModeratedGroup(this._conversation),
                    showSpeechConsentSuggestion: ye.default.showSpeechConsentSuggestingInConversation()
                };
                t || this.state.messageStreamFontSize === C.messageStreamFontSize || this._virtualMessageViewRefCount++,
                e.isSelectMessagesModeActive !== g.isSelectMessagesModeActive && (this._firstUpdateCompleteForMutliSelect = !1),
                this._isUserPresentInApp = P.isCurrentUserActive() && (!ne.default.isUsingSplitView() || this._getRootViewId() === We.default.splitViewInFocus()),
                this._oldConsumptionHorizonTimestamp = this._currentConsumptionHorizonTimestamp,
                this._currentConsumptionHorizonTimestamp = o.isNumber(m.consumptionHorizonTimestamp) ? m.consumptionHorizonTimestamp : st;
                const T = !(!_.isReadOnlyConversation(e.conversationId) && !(null === (l = this._conversation) || void 0 === l ? void 0 : l.isEncryptedThread())) && !e.isEncryptedConversationEstablished;
                T !== this._readOnlyConversation && (D.log(E.LogTraceArea.MessageStreamDebug, "Conversation readonly state changed - need to regenerate list of items"),
                this._viewItemsListDirty = !0),
                this._readOnlyConversation = T;
                const I = b.getComposingUsers(e.conversationId);
                V.default(I, this._composingMris) || (D.log(E.LogTraceArea.MessageStreamDebug, "Composing MRIs changed - need to regenerate list of items"),
                this._viewItemsListDirty = !0),
                this._composingMris = I,
                this.state && !V.default(S, this.state.memberConsumptionHorizonsSorted) && (D.log(E.LogTraceArea.MessageStreamDebug, "Member consumption horizons changed - need to regenerate list of items"),
                this._viewItemsListDirty = !0),
                t || V.default(g.isContactInviteAccepted, e.isContactInviteAccepted) || (D.log(E.LogTraceArea.MessageStreamDebug, "isContactInviteAccepted changed - need to regenerate list of items"),
                this._viewItemsListDirty = !0),
                t || V.default(g.isEncryptedConversationEstablished, e.isEncryptedConversationEstablished) || (D.log(E.LogTraceArea.MessageStreamDebug, "isEncryptedConversationEstablished changed - need to regenerate list of items"),
                this._viewItemsListDirty = !0),
                V.default(g.isSelectMessagesModeActive, e.isSelectMessagesModeActive) || (D.log(E.LogTraceArea.MessageStreamDebug, "showCheckboxUiChange - need to regenerate list of items"),
                this._viewItemsListDirty = !0),
                t || !this.state || V.default(C.showSpeechConsentSuggestion, this.state.showSpeechConsentSuggestion) || (this._viewItemsListDirty = !0),
                this._messageReadDelay = c.messageReadDelay,
                D.log(E.LogTraceArea.MessageStreamDebug, "UnreadMessageDetails: CurrentConsumptionHorizonTimestamp:" + m.consumptionHorizonTimestamp + " UnreadCount:" + m.unreadCount),
                t && (C.isScrollDisabled = !1);
                let k = !1;
                const A = this.state && !o.isUndefined(C.scrollRequest) && !V.default(this.state.scrollRequest, C.scrollRequest);
                let R = !1
                  , L = -1;
                return t || !A || o.isUndefined(C.scrollRequest) || (L = o.findIndex(this._dataItemsInfo.getItemList(), e=>e instanceof je && void 0 !== C.scrollRequest && e.skypeMessage.createdTime === C.scrollRequest.messageTimestamp),
                R = L > -1),
                (t || e.conversationId !== g.conversationId || A && !R || g.focusedMessageCuid !== e.focusedMessageCuid || this.state && C.readReceiptsEnabled !== this.state.readReceiptsEnabled || this.state && C.canShowSuggestions !== this.state.canShowSuggestions) && (k = !0,
                D.log(E.LogTraceArea.MessageStreamDebug, "Refresh store reason:  initialBuild:" + t + " ConversationId differs:" + (e.conversationId !== g.conversationId) + " ScrollToTimestamp differs:" + A + " NewTargetMessageIndex:" + L + " FocusMessageId differs:" + (e.focusedMessageCuid !== g.focusedMessageCuid) + " ReadReceipts settings differs:" + (this.state && C.readReceiptsEnabled !== this.state.readReceiptsEnabled))),
                k && !t && this._toggleVirtualMessageView(!1),
                t && (C.streamHeight = 0),
                C = this._refreshConversationProperties(e, C, k, !1, m.unreadCount),
                !t && this.state && C.readReceiptsEnabled !== this.state.readReceiptsEnabled && (this._lockUpdatesToConsumptionHorizon = !0),
                t || this._checkForConsumptionHorizonChange(),
                e.conversationId === _.SkonsoleMri ? this._instrumentationSubscription || (this._instrumentationSubscription = D.output.subscribe(this._instrumentationCallback),
                o.defer(()=>{
                    const e = D.getLogHistory();
                    o.each(e, e=>this._instrumentationCallback(e.level, e.traceArea, e.args))
                }
                )) : this._instrumentationSubscription && (this._instrumentationSubscription.unsubscribe(),
                this._instrumentationSubscription = void 0),
                C
            }
            _refreshConversationProperties(e, t, s, i, o) {
                let n = t || {};
                const r = o || M.default.getMessageCountsForConversation(e.conversationId).unreadCount;
                return s ? (D.log(E.LogTraceArea.MessageStreamDebug, "Resetting properties for the conversationId:" + pe.mriOrId(e.conversationId)),
                this._hideUnreadMarker(),
                r > 0 && !i && this._showUnreadMarker(this._currentConsumptionHorizonTimestamp),
                n.isReactionDetailsOn = !1,
                this._scrollToMessage = !!n.scrollRequest && !i,
                this._scrollToUnreadMarker = r > 0 && !this._scrollToMessage && !!this._currentConsumptionHorizonTimestamp && !e.isIncomingContactInvitePending && !i,
                this._highlightScrollToTarget = this._scrollToMessage,
                this._topPartialViewIndex = -1,
                this._bottomWholeViewIndex = -1,
                this._topWholeViewIndex = -1,
                this._bottomPartialViewIndex = -1,
                this._consumptionHorizonTimestampOverride = void 0,
                this._lockUpdatesToConsumptionHorizon = !1,
                this._lastReceivedMessageTimestamp = 0,
                this._lastMessageTimestamp = 0,
                this._lastViewIndex = 0,
                this._skypeMessages = [],
                this._readReceiptsMarks = {},
                this._virtualMessageViewRefCount++,
                this._contentRendered = !1,
                this._disallowFetchingMoreMessagesFromStore = !1,
                this._dataItemsInfo = new le.default,
                this._updateMessageStreamStore(e, n.scrollRequest && n.scrollRequest.messageTimestamp, i),
                t.isUsingStackNavigationContext ? oe.setStackNavigationCompleteCallback(this._openAnimationComplete) : this._openAnimationCompleted = !0,
                this._markHub2StreamScenarioStepCompleted("InitialBuild"),
                this._updateStreamItemsAndReturnNewState(e, n)) : (this._updateStreamIndexes(n, !0),
                n = this._regenerateItemListIfDirty(e, n),
                n)
            }
            _updateMessageStreamStore(e, t, s=!1) {
                let i;
                this._messageStreamStore && this._removeSubscription(this._messageStreamStoreSubscription),
                s ? i = void 0 : this._scrollToMessage ? i = t : this._scrollToUnreadMarker && (i = this._currentConsumptionHorizonTimestamp),
                this._messageStreamStore = Q.default.cachedStoreFor(e.conversationId, i),
                this._messageStreamStoreSubscription = {
                    store: this._messageStreamStore,
                    callbackBuildState: this._onMessageStreamStoreTrigger
                },
                this._addSubscription(this._messageStreamStoreSubscription)
            }
            _hideUnreadMarker() {
                this._unreadMarkerShown = !1,
                this._unreadMarkerTimestamp = -1,
                this._unreadMarkerMessageIndex = -1,
                this._unreadMarkerViewIndex = -1,
                this._viewItemsListDirty = !0
            }
            _showUnreadMarker(e) {
                this._unreadMarkerShown = !0,
                this._unreadMarkerTimestamp = e,
                this._unreadMarkerMessageIndex = -1,
                this._unreadMarkerViewIndex = -1,
                this._viewItemsListDirty = !0
            }
            _updateStreamIndexes(e, t=!1) {
                if (!(e.isInitialMessagesLoaded || this.state && this.state.isInitialMessagesLoaded))
                    return;
                const s = this._lastReceivedMessageTimestamp
                  , i = this._lastMessageTimestamp
                  , n = this._lastSentMessageTimestamp
                  , r = this._skypeMessages.length - 1;
                let a = !1
                  , l = !1;
                this._lastSentMessageTimestamp = 0,
                o.eachRight(this._skypeMessages, (e,t)=>(t === r && (this._lastMessageTimestamp = e.createdTime),
                ie.isMyMri(e.creator) || y.isThreadActivityType(e.messagetype) || l || (this._lastReceivedMessageTimestamp = e.createdTime,
                l = !0),
                !ie.isMyMri(e.creator) || y.isThreadActivityType(e.messagetype) || a || (this._lastSentMessageTimestamp = e.createdTime,
                a = !0),
                !(l && a)));
                const c = this._unreadMarkerViewIndex > 0 && this._topPartialViewIndex > this._unreadMarkerViewIndex
                  , d = this._unreadMarkerViewIndex > 0 && this._bottomPartialViewIndex < this._unreadMarkerViewIndex
                  , h = c || d
                  , u = o.isUndefined(e.isLatestMessageTheEnd) ? this.state.isLatestMessageTheEnd : e.isLatestMessageTheEnd
                  , p = o.isUndefined(e.isEarliestMessageTheBeginning) ? this.state.isEarliestMessageTheBeginning : e.isEarliestMessageTheBeginning
                  , g = this._currentConsumptionHorizonTimestamp >= this._lastReceivedMessageTimestamp && u
                  , m = this._currentConsumptionHorizonTimestamp >= s && u
                  , S = i > 0 && this._lastMessageTimestamp > i && u
                  , f = s > 0 && this._lastReceivedMessageTimestamp > s && u;
                0 === this._lastSentMessageTimestampInitial && this._lastSentMessageTimestamp && u && (this._lastSentMessageTimestampInitial = this._lastSentMessageTimestamp);
                const _ = 0 === this._lastViewIndex || this._lastViewIndex === this._bottomPartialViewIndex
                  , v = f && !_
                  , C = this._oldConsumptionHorizonTimestamp !== st && this._currentConsumptionHorizonTimestamp < this._oldConsumptionHorizonTimestamp
                  , b = this._consumptionHorizonTimestampOverride === this._currentConsumptionHorizonTimestamp;
                if (D.log(E.LogTraceArea.MessageStreamDebug, "_checkStreamIndexes:isUnreadMarkerOutsideViewport:" + h + ";allMessagesRead:" + g + ";allOldMessagesRead:" + m + ";newMessagesInStream:" + S + ";newReceivedMessagesInStream:" + f + ";isUserActive:" + this._isUserActive() + ";oldLastItemVisible:" + _ + ";consumptionHorizonMovedBackInTime:" + C + ";consumptionHorizonSetManually:" + b),
                this._isUserActive()) {
                    if (this._unreadMarkerShown) {
                        this._unreadMarkerTimestamp > 0 && this._lastReceivedMessageTimestamp > 0 && this._lastReceivedMessageTimestamp <= this._unreadMarkerTimestamp && u && this._hideUnreadMarker();
                        const e = n > 0 && this._lastSentMessageTimestamp > this._lastSentMessageTimestampInitial && this._lastSentMessageTimestamp > n && this._lastSentMessageTimestamp > this._lastReceivedMessageTimestamp && u;
                        D.log(E.LogTraceArea.MessageStreamDebug, "hideUnreadMarkernewSentMessagesInStream:" + e),
                        e && this._hideUnreadMarker(),
                        h && m && (v ? this._showUnreadMarker(this._currentConsumptionHorizonTimestamp) : S && this._hideUnreadMarker())
                    } else
                        v && this._showUnreadMarker(this._currentConsumptionHorizonTimestamp);
                    (C || b) && (this._consumptionHorizonTimestampOverride = void 0,
                    this._lockUpdatesToConsumptionHorizon = !0,
                    this._showUnreadMarker(this._currentConsumptionHorizonTimestamp))
                } else
                    f && !this._unreadMarkerShown && this._showUnreadMarker(this._currentConsumptionHorizonTimestamp);
                let T = !this._unreadMarkerShown
                  , M = !1;
                this._unreadMarkerMessageIndex = -1,
                this._currentConsumptionHorizonItemIndex = -1,
                o.each(this._skypeMessages, (e,t)=>{
                    0 === t && e.createdTime > this._unreadMarkerTimestamp && !p && (T = !0),
                    this._unreadMarkerShown && !T && e.createdTime > this._unreadMarkerTimestamp && e.countsForUnreadCounts() && (this._unreadMarkerMessageIndex = t,
                    this._viewItemsListDirty = !0,
                    T = !0),
                    !M && e.isAnyVersionKnownByServer() && (e.createdTime <= this._currentConsumptionHorizonTimestamp ? this._currentConsumptionHorizonItemIndex = t : M = !0)
                }
                ),
                this._updateReadReceipts(e, t)
            }
            _updateReadReceipts(e, t) {
                if (o.isUndefined(e.readReceiptsEnabled) ? !!this.state && this.state.readReceiptsEnabled : e.readReceiptsEnabled) {
                    const s = e.isOneOnOne || !!this.state && this.state.isOneOnOne
                      , i = (e.memberConsumptionHorizonsSorted ? e.memberConsumptionHorizonsSorted : this.state ? this.state.memberConsumptionHorizonsSorted : void 0) || []
                      , n = he.computeMarks(this._skypeMessages, i)
                      , r = o.map(this._readReceiptsMarks, e=>o.pick(e, ["mris"]))
                      , a = o.map(n, e=>o.pick(e, ["mris"]))
                      , l = o.keys(n);
                    if (!V.default(o.keys(this._readReceiptsMarks), l) || !V.default(r, a)) {
                        o.each(this._readReceiptsMarks, (e,t)=>{
                            if (n[t] && !n[t].key)
                                n[t].key = e.key;
                            else {
                                const t = o.find(n, t=>V.default(t.readReceipts, e.readReceipts));
                                t && (t.key = e.key)
                            }
                        }
                        ),
                        o.each(n, e=>{
                            e.key || (e.key = Ie.ItemListKey.ReadReceiptPrefix + this._readReceiptsKeysCounter++)
                        }
                        );
                        const e = l.length && t && s ? this._skypeMessages[Number(l[0])] : void 0;
                        if (e) {
                            const t = new X.MessageRead(e,this.props.conversationId);
                            this._sendMessageReadEventThrottled(t)
                        }
                        this._readReceiptsMarks = n,
                        D.log(E.LogTraceArea.ReadReceipts, "member CH: " + JSON.stringify(o.map(this._readReceiptsMarks, e=>({
                            mris: e.readReceipts.map(e=>pe.mriOrId(e.mri)),
                            key: e.key
                        }))))
                    }
                }
            }
            static _getSoundForNewMessage(e, t, s, i, n) {
                if (!t || !e || n || !i)
                    return;
                let r;
                const a = e && t && t.cuid !== e.cuid
                  , l = a && o.some(s, t=>e.cuid === t.cuid);
                if (a) {
                    if (!l && e.createdTime > t.createdTime) {
                        r = ie.isMyMri(e.creator) ? Se.default.SkypeMessageSent : e.messagetype === y.MessageTypes.Money ? Se.default.SkypeMoneyReceived : Se.default.SkypeMsgReceived
                    }
                    return r
                }
            }
            _updateStreamItemsAndReturnNewState(e, t) {
                const s = t || {};
                let i = u.updateCallEventMessages(this._messageStreamStore.getMessages());
                const n = s.lastMessage || this.state ? this.state.lastMessage : void 0;
                if (i = d.default.getS4LMessagingFeatures().enableMediaAlbums ? o.filter(i, e=>{
                    if (e.hasAlbumId()) {
                        const t = z.default.getNotFailedMediaMessagesForAlbum(e.getAlbumId());
                        return e.isAlbum() ? t.length > 1 : !!e.isSendRejected() || t.length < 2
                    }
                    return !0
                }
                ) : o.filter(i, e=>e.messagetype !== y.MessageTypes.MediaAlbum),
                void 0 === s.enableGreetingCard && (s.enableGreetingCard = this.state ? this.state.enableGreetingCard : void 0),
                s.isLatestMessageTheEnd = this._messageStreamStore.isLatestMessageTheEnd(),
                s.lastMessage = o.last(i),
                o.isUndefined(this._wasLatestMessageTheEndPreviously) && (this._wasLatestMessageTheEndPreviously = s.isLatestMessageTheEnd),
                s.isEarliestMessageTheBeginning = this._messageStreamStore.isEarliestMessageTheBeginning(),
                s.cannotGetEarlierMessages = this._messageStreamStore.cannotGetEarlierMessages(),
                s.lastMessage && K.default.notifyMessagePickedFromMessageViewStoreIntoView(s.lastMessage.getOriginalClientMessageId()),
                this._scrollToUnreadMarker && !s.isLatestMessageTheEnd) {
                    const e = o.findLast(i, e=>e.countsForUnreadCounts())
                      , t = e && e.createdTime > this._currentConsumptionHorizonTimestamp;
                    t || this._messageStreamStore.fetchLaterMessages(),
                    s.isInitialMessagesLoaded = this._messageStreamStore.isInitialMessagesLoaded() && t
                } else
                    s.isInitialMessagesLoaded = this._messageStreamStore.isInitialMessagesLoaded();
                return this._newMessageSound = nt._getSoundForNewMessage(s.lastMessage, n, this._skypeMessages, s.isLatestMessageTheEnd, this._messageStreamStore.isLoadingItems()),
                this._skypeMessages = i,
                D.log(E.LogTraceArea.MessageStream, "Updated items from the store: isInitialMessagesLoaded: " + s.isInitialMessagesLoaded + ", isLatestMessageTheEnd: " + s.isLatestMessageTheEnd + ", skypeMessages.length: " + this._skypeMessages.length),
                e.onSkypeMessagesUpdated && e.onSkypeMessagesUpdated(i),
                this._viewItemsListDirty = !0,
                this._updateStreamIndexes(s),
                this._regenerateItemListIfDirty(e, s)
            }
            _isInitialMessagesLoaded(e) {
                return o.isUndefined(e.isInitialMessagesLoaded) ? this.state && this.state.isInitialMessagesLoaded : e.isInitialMessagesLoaded
            }
            _regenerateItemListIfDirty(e, t) {
                if (!this._viewItemsListDirty)
                    return t;
                const s = this._skypeMessages.length
                  , i = _.isGroupConversation(e.conversationId);
                let n = [];
                t.scrollToItemViewIndex = -1;
                let r = !1
                  , a = !1;
                this._unreadMarkerViewIndex = -1;
                const l = this._unreadMarkerShown && this._unreadMarkerMessageIndex >= 0
                  , c = o.isUndefined(t.isLatestMessageTheEnd) ? !(!this.state || !this.state.isLatestMessageTheEnd) : t.isLatestMessageTheEnd
                  , h = o.isUndefined(t.isEarliestMessageTheBeginning) ? this.state && this.state.isEarliestMessageTheBeginning : t.isEarliestMessageTheBeginning
                  , u = o.isUndefined(t.cannotGetEarlierMessages) ? this.state && this.state.cannotGetEarlierMessages : t.cannotGetEarlierMessages;
                this._isInitialMessagesLoaded(t) && (e.conversationId !== d.default.getConfigSettings().cortana.mri || s ? e.isConversationAccepted && !e.isContactInviteAccepted || !this._readOnlyConversation || e.showInviteHeaderForEncryptedThread || n.push(new Je(e.conversationId)) : (n.push(new Ye(Ie.ItemListKey.ContactInviteHeaderItem,t.enableGreetingCard ? 535 : 325,t.enableGreetingCard,!1,e.isIncomingContactInvitePending,e.isEncryptedConversationEstablished,s > 0)),
                t.scrollToItemViewIndex = 0,
                a = !0));
                let g = !1
                  , m = !1;
                const S = this._shouldDisplayContactInviteViewItemInfo(e, t);
                let f = S ? 0 : -1
                  , v = -1
                  , C = !1;
                const b = o.isUndefined(t.isNewConnectionMessageEnabled) ? this.state && this.state.isNewConnectionMessageEnabled : t.isNewConnectionMessageEnabled
                  , T = o.isUndefined(t.newConnectionMessageId) ? this.state && this.state.newConnectionMessageId : t.newConnectionMessageId;
                b && T === _.newConnectionAcceptedPropValue && n.push(new Xe(Ie.ItemListKey.NewConnection,32));
                const M = o.isUndefined(t.scrollRequest) ? this.state && this.state.scrollRequest : t.scrollRequest
                  , w = d.default.getS4LMessagingFeatures().enableMediaAlbums;
                let I = -1;
                for (let o = 0; o < s; o++) {
                    const s = this._skypeMessages[o]
                      , c = o > 0 ? this._skypeMessages[o - 1] : void 0;
                    if (j.MeetNowHelpers.shouldServerMessageBeFilteredOut(s, this._conversation))
                        continue;
                    if (l && !r && this._unreadMarkerMessageIndex <= o && !ie.isMyMri(s.creator) && !e.isHighlightCommentMode && (this._unreadMarkerViewIndex = n.length,
                    this._scrollToUnreadMarker && (D.log(E.LogTraceArea.MessageStreamDebug, "Scroll to unread indicator:" + o),
                    t.scrollToItemViewIndex = n.length),
                    n.push(new Qe(Ie.ItemListKey.UnreadMarker,36,m)),
                    r = !0),
                    !this._conversation.isBookmarksThread()) {
                        if ((0 === o && (h || u || a || S) || c && !k.isSameDay(s.createdTime, c.createdTime)) && !e.isHighlightCommentMode) {
                            const e = k.getMidnight(s.createdTime);
                            n.push(new Ke(Ie.ItemListKey.DateMarkerPrefix + e,e)),
                            -1 === I && (I = n.length - 1)
                        }
                    }
                    i && G.isAddCurrentUserThreadActivity(s) && (S ? f = n.length : (v = n.length,
                    C = !0)),
                    v >= 0 && C && (y.isThreadActivityType(s.messagetype) ? v++ : C = !1);
                    const d = M && s.createdTime === M.messageTimestamp
                      , p = s.cuid === e.focusedMessageCuid
                      , _ = w && s.isAlbum() && e.focusedMessageCuid && z.default.albumContainsMessage(s.getAlbumId(), e.focusedMessageCuid);
                    this._scrollToMessage && (d || p || _) && (M && w && s.isAlbum() && (M.messageTimestamp = s.createdTime),
                    D.log(E.LogTraceArea.MessageStreamDebug, "Scroll to message index:" + o),
                    t.scrollToItemViewIndex = n.length,
                    t.shouldFocusScrolledMessageCell = !0,
                    this._isFocusInsideMessageStreamOnMount = !0),
                    n.push(new je(Ie.ItemListKey.MessagePrefix + s.cuid,s,g));
                    const P = this._readReceiptsMarks[o];
                    P && n.push(new Ge(P.key,P.readReceipts,this._getReadReceiptsSummary(o))),
                    b && T === s.cuid && n.push(new Xe(Ie.ItemListKey.NewConnection + s.cuid,32)),
                    (g || m) && (g = !1,
                    m = !1,
                    this._isFocusInsideMessageStreamOnMount = !0)
                }
                if (!a && f >= 0) {
                    i && 0 === f && (f = n.length);
                    const o = t.enableGreetingCard && !e.isIncomingContactInvitePending && !_.isEncryptedThread(e.conversationId) && !_.isPhoneMri(e.conversationId) && !s;
                    D.log(E.LogTraceArea.MessageStream, "Show wave:" + o + " enableGreetingCard:" + t.enableGreetingCard + " isIncomingContactInvitePending:" + e.isIncomingContactInvitePending + " isEncryptedThread:" + _.isEncryptedThread(e.conversationId) + " isPhoneMri:" + _.isPhoneMri(e.conversationId) + " skypeMessagesLength: " + s);
                    const r = [new Ye(Ie.ItemListKey.ContactInviteHeaderItem,o ? 535 : 325,o,e.isContactInviteAccepted,e.isIncomingContactInvitePending,e.isEncryptedConversationEstablished,s > 0)];
                    n.splice(f, 0, ...r),
                    this._scrollToMessage && (t.scrollToItemViewIndex = f),
                    a = !0
                }
                const {isJoinEnabled: P, isMeetNowConversation: A, isRegularMemberInModeratedGroup: R} = this.state || t;
                A && P ? n.splice(-1 === I ? 0 : I + 1, 0, new et(e.conversationId)) : v >= 0 && p.default.contacts().canInvitePeople && !R && ((this.state ? this.state.enableNewConversationCreation : t.enableNewConversationCreation) ? n.splice(v, 0, new Ze(e.conversationId)) : n.splice(v, 0, new $e(e.conversationId))),
                this._shouldShowSpeechConsentItemInfo(this.state, t, n.length) && n.push(new tt(e.conversationId));
                const L = o.filter(this._composingMris, e=>!ie.isMyMri(e));
                e.disableComposingIndicator ? !e.disableComposingIndicator && L.length > 0 && n.push(new qe(this._composingMris,e.conversationId)) : n.push(new qe(L,e.conversationId));
                const F = this.props;
                if (this._contentRendered && V.default(F.isSelectMessagesModeActive, e.isSelectMessagesModeActive) ? (this._disallowFetchingMoreMessagesFromStore = !0,
                this._applyModificationsDebounced(n, c, e, M && M.messageTimestamp)) : this._applyModifications(n, c, e, M && M.messageTimestamp),
                this._viewItemsListDirty = !1,
                D.log(E.LogTraceArea.MessageStreamDebug, " Unread marker:unreadMarkerShown:" + this._unreadMarkerShown + ";unreadMarkerTimestamp:" + this._unreadMarkerTimestamp + ";unreadMarkerMessageIndex:" + this._unreadMarkerMessageIndex + ";unreadMarkerViewIndex:" + this._unreadMarkerViewIndex),
                this._scrollToMessage && t.isInitialMessagesLoaded && t.scrollToItemViewIndex < 0) {
                    const t = "Unable to find the scroll to message with cuid: " + e.focusedMessageCuid + ". ScrollToTimestamp: " + (M && M.messageTimestamp) + ". Please let the dev team know.";
                    D.warn(E.LogTraceArea.MessageStream, t)
                }
                return t
            }
            _shouldShowSpeechConsentItemInfo(e, t, s) {
                const i = o.isUndefined(t) || o.isUndefined(t.showSpeechConsentSuggestion) ? e.showSpeechConsentSuggestion : t.showSpeechConsentSuggestion;
                return i && -1 === this._speechConsentSuggestionSeenAt && (this._speechConsentSuggestionSeenAt = s),
                i || (this._speechConsentSuggestionSeenAt = -1),
                i && this._speechConsentSuggestionSeenAt === s
            }
            _shouldDisplayContactInviteViewItemInfo(e, t) {
                const s = t.isUsingStackNavigationContext || void 0 === t.isUsingStackNavigationContext && this.state.isUsingStackNavigationContext
                  , i = !this._readOnlyConversation && (e.isIncomingContactInvitePending || !e.isConversationAccepted || e.isContactInviteAccepted);
                return s && (i || e.showInviteHeaderForEncryptedThread) || _.isPhoneMri(this.props.conversationId)
            }
            _applyModifications(e, t, s=this.props, i) {
                this._disallowFetchingMoreMessagesFromStore = !1;
                const o = this._dataItemsInfo.getItemList()
                  , n = R.default.calculateModifications(o, e, !0, !0, this._equalsItemInfo, this._canSubstituteItemsInfo)
                  , r = R.default.convertToListModifications(n);
                s.isSelectMessagesModeActive && this._updateSelectedMessages(r),
                this._dataItemsInfo.applyMany(r, e=>this._regenerateMetadata(e, s, i), (e,t)=>this._setOptions(e, t)),
                this._wasLatestMessageTheEndPreviously = t,
                this._shouldUpdateForTranslationChange = !1
            }
            _setOptions(e, t) {
                const s = this._wasLatestMessageTheEndPreviously;
                e.type === R.ListModificationType.AddItems && e.insertIndex === t.length && (e.options = {
                    animateFromBottom: s
                })
            }
            _updateSelectedMessages(e) {
                if (o.some(e, e=>e.type === R.ListModificationType.RemoveItems)) {
                    const e = me.default.getSelectedMessages();
                    o.each(e, e=>{
                        !o.some(this._skypeMessages, t=>t.cuid === e.message.cuid) && me.default.removeSelectedMessage(e)
                    }
                    )
                }
            }
            _regenerateMetadata(e, t, s) {
                let i = 0;
                const n = [];
                let r;
                o.each(e, (e,t)=>{
                    e instanceof je && (e.metadata = o.assign(e.metadata, {
                        streamItemIndex: i++,
                        viewIndex: t
                    }),
                    n.push(e))
                }
                ),
                o.eachRight(n, e=>{
                    const t = e.skypeMessage;
                    return !(ie.isMyMri(t.creator) && !t.isMessageLie() && y.getMessageTypeGroup(t) === y.MessageTypeGroups.Picture) || (r = t.cuid,
                    !1)
                }
                ),
                o.each(n, (i,o)=>{
                    const a = o > 0 ? n[o - 1] : void 0
                      , l = a ? a.skypeMessage : void 0
                      , c = o + 1 < n.length ? n[o + 1] : void 0
                      , d = c ? c.skypeMessage : void 0
                      , h = i.skypeMessage
                      , u = ie.isMyMri(h.creator)
                      , p = l && ie.isMyMri(l.creator);
                    let g = 0;
                    const m = o > 0 && e[i.metadata.viewIndex - 1]instanceof Ge;
                    let S = !(!a || m) && i.metadata.viewIndex - a.metadata.viewIndex > 1;
                    const f = y.isThreadActivityType(h.messagetype);
                    l && (g = l.createdTime,
                    S = S || f || y.getMessageTypeGroup(l) === y.MessageTypeGroups.Calling || l.isEmote());
                    const _ = h.createdTime - g >= 3e5
                      , v = d && d.createdTime - h.createdTime >= 3e5
                      , C = !l || S || _ || (u ? !p : l.creator !== h.creator)
                      , b = o === n.length - 1 || v || !d || d.creator !== h.creator;
                    let T = C && !u
                      , M = T
                      , w = T || C && u || C && b;
                    C && (f || h.isEmote()) && (T = !1,
                    M = !1,
                    w = !1);
                    const I = this._highlightScrollToTarget && (s === h.createdTime || t.focusedMessageCuid === h.cuid);
                    I && (this._highlightScrollToTarget = !1);
                    const P = !a || !a.skypeMessage.isMessageLie()
                      , k = y.getMessageTypeGroup(i.skypeMessage) === y.MessageTypeGroups.Text && (P || a.metadata.itemRenderInfo.canPretendBeingSent)
                      , A = this.props;
                    let R = !1;
                    if (t.isSelectMessagesModeActive !== A.isSelectMessagesModeActive || this._firstUpdateCompleteForMutliSelect) {
                        const e = i.metadata.viewIndex > this._topWholeViewIndex - 3 && i.metadata.viewIndex < this._bottomWholeViewIndex + 3;
                        R = t.isSelectMessagesModeActive ? e || this._firstUpdateCompleteForMutliSelect : !e && !this._firstUpdateCompleteForMutliSelect
                    }
                    const L = {
                        isFirstInGroup: C,
                        isLastInGroup: b,
                        showUserIcon: M,
                        showUserName: T,
                        showTimestamp: w,
                        isHighlighted: I,
                        isReadOnly: this._readOnlyConversation,
                        hasUnderlay: t.hasUnderlay,
                        isLastPhotoByCurrentUser: !!r && h.cuid === r,
                        canPretendBeingSent: k,
                        showSelectMessageCheckbox: R
                    };
                    i.metadata.shouldUpdate = !V.default(L, i.metadata.itemRenderInfo) || this._shouldUpdateForTranslationChange,
                    i.metadata.itemRenderInfo = L
                }
                )
            }
            _canSubstituteItemsInfo(e, t) {
                return e.key === t.key
            }
            _convertViewIndexToMessage(e, t) {
                const s = this._dataItemsInfo.getItemList();
                if (!(e < 0))
                    if (t)
                        for (; e < s.length; ) {
                            const t = s[e];
                            if (t instanceof je)
                                return t;
                            e++
                        }
                    else
                        for (; e >= 0; ) {
                            const t = s[e];
                            if (t instanceof je)
                                return t;
                            e--
                        }
            }
            _focusMountedItemOnMobile() {
                this._mountedItemToFocus ? this._mountedItemToFocus.focusItemForScreenReader() : D.warn(E.LogTraceArea.MessageStream, "Focus should be on message stream, but no item mounted")
            }
            _checkForConsumptionHorizonChange() {
                var e;
                if (D.log(E.LogTraceArea.ConsumptionHorizon, "MessageStream convId=" + pe.mriOrId(this.props.conversationId) + " _checkForConsumptionHorizonChange"),
                this.props.conversationId === _.SkonsoleMri)
                    return;
                if (0 === this._dataItemsInfo.getItemList().length)
                    return void D.log(E.LogTraceArea.ConsumptionHorizon, "MessageStream convId=" + pe.mriOrId(this.props.conversationId) + " no messages displayed");
                if (!this._isUserActive())
                    return void D.log(E.LogTraceArea.ConsumptionHorizon, "MessageStream convId=" + pe.mriOrId(this.props.conversationId) + " user not active");
                if (this._lockUpdatesToConsumptionHorizon)
                    return void D.log(E.LogTraceArea.ConsumptionHorizon, "MessageStream convId=" + pe.mriOrId(this.props.conversationId) + " locked updates to CH");
                let t;
                for (let e = this._bottomPartialViewIndex; e >= 0; e--) {
                    const s = this._convertViewIndexToMessage(e, !1);
                    if (!s)
                        continue;
                    if (t = s.skypeMessage,
                    s.metadata.streamItemIndex <= this._currentConsumptionHorizonItemIndex)
                        break;
                    const i = d.default.getS4LMessagingFeatures().enableMediaAlbums && s.skypeMessage.isAlbumItem() && 1 === z.default.getNotFailedMediaMessagesForAlbum(s.skypeMessage.getAlbumId()).length;
                    if (s.skypeMessage.countsForUnreadCounts() || i)
                        break
                }
                const s = null === (e = this._conversation) || void 0 === e ? void 0 : e.getConsumptionHorizonTimestamp();
                t ? (D.log(E.LogTraceArea.ConsumptionHorizon, "lastVisibleItem.createdTime:", t.createdTime, "chTimestamp:", s, "_lastVisibleItemForConsumptionHorizon.createdTime:", this._lastVisibleItemForConsumptionHorizon ? this._lastVisibleItemForConsumptionHorizon.createdTime : "_lastVisibleItemForConsumptionHorizon is undefined"),
                t.createdTime > s && (!this._lastVisibleItemForConsumptionHorizon || t.createdTime > this._lastVisibleItemForConsumptionHorizon.createdTime) && (this._lastVisibleItemForConsumptionHorizon = t,
                D.log(E.LogTraceArea.ConsumptionHorizon, "MessageStream - scheduling update of consumption horizon to: " + t.getConsumptionHorizonString() + " convId=" + pe.mriOrId(this.props.conversationId) + " CHindex=" + this._currentConsumptionHorizonItemIndex + " BottomWholeViewIndex=" + this._bottomWholeViewIndex + " ConsumptionHorizonTimestamp=" + s + " current lastVisibleItem.createdTime=" + (this._lastVisibleItemForConsumptionHorizon ? this._lastVisibleItemForConsumptionHorizon.createdTime : null) + " new lastVisibleItem.createdTime=" + t.createdTime),
                this._consumptionHorizonUpdateDebounceTimer && Ve.clearTimeout(this._consumptionHorizonUpdateDebounceTimer),
                this._consumptionHorizonUpdateDebounceTimer = Ve.setTimeout(this._updateConsumptionHorizonToLastVisibleItem, this._messageReadDelay))) : D.log(E.LogTraceArea.ConsumptionHorizon, "lastVisibleItem is undefined")
            }
            _renderOldConversationEmptyState() {
                return c.createElement(c.View, {
                    style: it.noMessagesContainer
                }, c.createElement(_e.default, {
                    conversationId: this.props.conversationId,
                    displayName: this.props.recipientDisplayName,
                    gender: Ne.getFullUserProfileByMriNoSubscription(this.props.conversationId).gender,
                    onGreet: this.props.onGreet,
                    showBorder: !1,
                    alwaysForceEmoticon: !0
                }))
            }
            _renderBookmarkConversationEmptyState() {
                return c.createElement(h, {
                    isUsingStackNavigationContext: this.state.isUsingStackNavigationContext
                })
            }
            render() {
                let e, t = null, s = null;
                if (this.state.isInitialMessagesLoaded)
                    if (this._conversation.isBookmarksThread() && 0 === this._skypeMessages.length)
                        t = this._renderBookmarkConversationEmptyState();
                    else if (this.props.isConversationAccepted && !this.props.isIncomingContactInvitePending && !this._readOnlyConversation && f.default.haveAllMessagesForConversation(this.props.conversationId) && 0 === this._skypeMessages.length)
                        t = _.isThread(this.props.conversationId) || _.isConversationWithPhoneNumber(this.props.conversationId) ? null : this._renderOldConversationEmptyState();
                    else {
                        this.props.isHighlightCommentMode || this._conversation.isBookmarksThread() || (s = c.createElement(be.StatusPillView, {
                            statusPillInstance: this._statusPillInstance,
                            messageStreamStore: this._messageStreamStore,
                            ref: this._statusPillRef,
                            conversationId: this.props.conversationId,
                            messageStreamFontSize: this.state.messageStreamFontSize
                        }));
                        const e = this.state.scrollToItemViewIndex >= 0 ? this.state.scrollToItemViewIndex : void 0;
                        this._contentRendered || this._markHub2StreamScenarioStepCompleted("StartVMVRendering"),
                        this._contentRendered = !0;
                        const i = this.state.isBookmarksStreamFromTopEnabled && this._conversation.isBookmarksThread() ? this.state.streamHeight : void 0;
                        t = c.createElement(ze.VirtualMessageView, {
                            key: this._virtualMessageViewRefCount,
                            ref: this._onListViewRef,
                            observableList: this._dataItemsInfo,
                            renderItem: this._renderItem,
                            shouldUpdateItem: this._shouldUpdateItem,
                            contentMaxWidth: q.messageStreamMaxContentWidth,
                            onVisibleRangeChanged: this._onVisibleRangeChanged,
                            initialScrollIndex: e,
                            shouldFocusInitialItem: this.state.shouldFocusScrolledMessageCell && !this.props.isMessageSearchPanelVisible || this._conversation.isBookmarksThread(),
                            isMessageSearchPanelVisible: this.props.isMessageSearchPanelVisible,
                            allowKeyboardLayoutUpdates: this.props.isMessageSearchPanelVisible,
                            onUserScroll: this._onScroll,
                            onLayout: this.props.onMessageStreamLayout,
                            onInitialRenderComplete: this._onInitialRenderComplete,
                            keyboardShouldPersistTaps: !0,
                            keyboardDismissMode: Fe.getPlatformType() === E.PlatformType.Android ? "none" : "on-drag",
                            scrollsToTop: !this.state.isReactionDetailsOn,
                            scrollEnabled: !this.state.isScrollDisabled,
                            horizontalPadding: this.props.safeAreaHorizontalInsets,
                            canShowSuggestions: this.state.canShowSuggestions,
                            leftSpacerWidth: this.props.leftSpacerWidth,
                            rightSpacerWidth: this.props.rightSpacerWidth,
                            useWideLayout: !this.state.isUsingStackNavigationContext,
                            startFromTop: this.state.isBookmarksStreamFromTopEnabled && this._conversation.isBookmarksThread(),
                            streamContainerHeight: i
                        }),
                        this.state.enableMultiMessageQuoteOnKeyboard && (t = c.createElement(n.default, {
                            ref: this._onCopyListenerRef,
                            handler: this._onCopy
                        }, t))
                    }
                else
                    t = this._showLoadingPlaceholder() ? null : c.createElement(c.View, {
                        style: it.spinnerContainer
                    }, c.createElement(Ee.default, {
                        size: v.SXActivityIndicatorSize.Medium,
                        tintColor: ee.getPrimaryColorNoSubscription(),
                        deferTimeMs: 1e3
                    }));
                const i = !this._conversation.isSkypeSMSConversation() && !this._conversation.isEncryptedThread()
                  , o = !this.props.hideSuggestions && this.state.isLatestMessageTheEnd && !!this.state.lastMessage && i && !this._conversation.isBookmarksThread()
                  , r = this.state.isUsingStackNavigationContext && this.props.isMessageSearchPanelVisible;
                this.state.initialRenderComplete && o && this.state.lastMessage && (e = c.createElement(Le, {
                    key: "SwiftQuickReplyListView",
                    conversationId: this.props.conversationId,
                    lastMessage: this.state.lastMessage,
                    useCompactLayout: this.state.useCompactLayout,
                    isUsingStackNavigationContext: this.state.isUsingStackNavigationContext,
                    onCardSuggestionAction: this.props.onCardSuggestionAction,
                    disableQuickReply: this.props.isSelectMessagesModeActive || r,
                    onSuggestionClicked: this.props.onSuggestionClicked,
                    ref: this._onSuggestionsListViewRef
                }),
                this.state.isUsingStackNavigationContext || (e = c.createElement(c.View, {
                    style: it.actionsDesktopContainer
                }, c.createElement(c.View, {
                    style: this._getSpacerStyle(this.props.leftSpacerWidth)
                }), e, c.createElement(c.View, {
                    style: this._getSpacerStyle(this.props.rightSpacerWidth)
                }))));
                let d, h = [it.contentAreaContainer];
                this.props.isSelectMessagesModeActive || (d = c.createElement(B.default, {
                    key: "jumpToEndButton",
                    ref: this._onJumpToEndButtonRef,
                    onPressCallback: this._onJumpToEndButtonPress,
                    conversationId: this.props.conversationId,
                    horizontalPadding: this.props.safeAreaHorizontalInsets
                }));
                const u = this.props.renderDivider ? this.props.renderDivider() : void 0
                  , p = this.props.preventAccessibilityFocus ? c.Types.ImportantForAccessibility.NoHideDescendants : void 0
                  , g = this._showLoadingPlaceholder() ? c.createElement(Pe.default, {
                    ref: this._onLoadingPlaceholderRef
                }) : void 0;
                return c.createElement(c.View, {
                    style: it.contentOuterContainer,
                    importantForAccessibility: p,
                    onLayout: this._onOuterContainerLayout
                }, c.createElement(l.View, {
                    ref: this._onAnimatedVirtualMessageViewRef,
                    style: h,
                    opacity: this._showLoadingPlaceholder() ? 0 : 1,
                    y: this._showLoadingPlaceholder() ? 53 : 0
                }, t, s, d), u, e, g, this.state.initialRenderComplete ? c.createElement(a.SheepIt, {
                    isEnabled: ze.isMonkeyEnabled,
                    id: "monkey",
                    track: this._trackMonkey
                }) : void 0)
            }
            _showLoadingPlaceholder() {
                return this.state.enableLoadingPlaceholder
            }
            _getSpacerStyle(e) {
                return ot[e] || (ot[e] = c.Styles.createViewStyle({
                    flex: 1,
                    minWidth: e
                })),
                ot[e]
            }
            _onScrolledToTheBottom(e) {
                this.props.onScrolledToTheBottom && this.props.onScrolledToTheBottom(e)
            }
            _scrollToBottomOfRefreshedStream() {
                const e = this._refreshConversationProperties(this.props, this.state, !0, !0);
                this.setState(e)
            }
            _reportRenderItemQoS(e, t) {
                const s = de.default.getTelemetryScenarioForMessage(e.conversationId, e.cuid);
                if (!s)
                    return;
                const i = s.getSecondaryScenario(ge.ScenarioName.SendTextMessageTimeToAppearInChat);
                i && (t ? (i.markStepCompleted("AnimationCompleted"),
                i.finish()) : i.isStepMarked("Render") || i.markStepCompleted("Render"));
                const o = e.isMessageLie();
                let n = s.getSecondaryScenario(ge.ScenarioName.SendTextMessageUI);
                if (n || (n = s.getSecondaryScenario(ge.ScenarioName.SendPictureUI)),
                !n)
                    return;
                const r = "Visible" + (o ? "Lie" : "Real") + "ItemRender";
                o ? n.isStepMarked(r) || n.markStepCompleted(r, void 0, void 0, !0) : n.markPerfTargetStepCompleted(r),
                o || n.finish()
            }
            _scrollToBottom() {
                this._listView && this._listView.scrollToBottom(),
                this._lockUpdatesToConsumptionHorizon = !1
            }
            _markHub2StreamScenarioStepCompleted(e) {
                this._getContext().isPresentedInDesktopSubview || oe.markScenarioStepCompleted(this.props.conversationId, e)
            }
            _shouldSkipSound() {
                return this.props.isInvisible || !this.state.inAppSoundsEnabled || !this._newMessageSound || c.App.getActivationState() !== c.Types.AppActivationState.Active
            }
            _getNewConnectionString() {
                const e = Ne.getFullUserProfileByMri(this.props.conversationId)
                  , t = N.getLocalizeParamForGender(e.gender);
                return H.getString("NewConnectionIndicator.UserAddedToContactList", {
                    user: e.getShortName(),
                    gender: t
                })
            }
            getSkypeMessages() {
                return this._skypeMessages
            }
            feedEphemeralMessage(e) {
                this._messageStreamStore && this._messageStreamStore.feedEphemeralMessage(e)
            }
            _checkMessageStreamStoreAndUpdate(e, t, s) {
                this._messageStreamStore && t && this._messageStreamStore.isDestroyed() && (this._updateMessageStreamStore(e, t.messageTimestamp, !1),
                D.log(E.LogTraceArea.MessageStreamDebug, "Update MessageStreamStore object reason: " + s),
                D.track(new xe.DevAlert("MessageStreamStore reference leak")))
            }
            _isUserActive() {
                return this._isUserPresentInApp || this._isUserScrolling
            }
            _toggleVirtualMessageView(e) {
                if (!this._showLoadingPlaceholder())
                    return;
                const t = He.newCauseId();
                if (D.log(E.LogTraceArea.MessageStream, "_toggleVirtualMessageView causeId: " + t),
                this.isComponentMounted() && this._animatedView) {
                    this._loadingPlaceholderView && this._loadingPlaceholderView.fadeAnimation(!e);
                    const s = {
                        opacity: 1,
                        y: 0
                    }
                      , i = {
                        opacity: 0,
                        y: 53
                    };
                    e ? (this._animation = this._animatedView.getAnimation(s, t),
                    this._animation.start(()=>{
                        delete this._animation
                    }
                    )) : this._animatedView.setValue(i, t)
                }
            }
            _maybeAnimateScrollToPosition(e, t) {
                if (!V.default(e, t) && !o.isUndefined(t) && t.messageTimestamp) {
                    const e = o.findIndex(this._dataItemsInfo.getItemList(), e=>e instanceof je && e.skypeMessage.createdTime === t.messageTimestamp);
                    if (e > -1 && this._listView) {
                        const t = this._dataItemsInfo.getItemList()[e].key;
                        this._listView.scrollToPosition(e, t, !0)
                    }
                }
            }
        }
        e.exports = nt
    }