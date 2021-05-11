if (self.CavalryLogger) {
    CavalryLogger.start_js(["2dSkl"]);
}

__d("getFilterFieldLabelConfig", ["ix", "fbt", "AdsPEFilterFields", "AdsPEFilterOperatorConfig", "AdsPETagsSearchSource", "SearchableEntry", "asset", "naturalComparator"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    function a(a) {
        var c = Array.from(a.values()).sort(function(a, c) {
            return b("naturalComparator")(a.name, c.name)
        }).map(function(a) {
            return {
                value: a.id,
                text: a.name
            }
        });
        return {
            text: h._("Th\u1ebb chi\u1ebfn d\u1ecbch"),
            field: b("AdsPEFilterFields").SEARCH_BY_LABEL,
            operators: [b("AdsPEFilterOperatorConfig").ANY, b("AdsPEFilterOperatorConfig").ALL, b("AdsPEFilterOperatorConfig").NONE],
            values: c,
            className: "tagsTypeahead",
            searchSource: new (b("AdsPETagsSearchSource"))(c),
            placeholder: h._("B\u1eaft \u0111\u1ea7u nh\u1eadp \u0111\u1ec3 ch\u1ecdn th\u1ebb"),
            valueRenderer: function(b) {
                var c = a.get(b);
                return c ? c.name : b
            },
            iconURI: g("647420"),
            converter: {
                toEntries: function(a, c) {
                    var d;
                    if (a && a[0]instanceof b("SearchableEntry"))
                        d = a;
                    else {
                        c = c.filter(function(b) {
                            return a.indexOf(b.value) > -1
                        });
                        d = c.map(function(a) {
                            return new (b("SearchableEntry"))({
                                uniqueID: a.value,
                                title: a.text
                            })
                        })
                    }
                    return d
                },
                toIds: function(a) {
                    return Array.isArray(a) && a[0]instanceof b("SearchableEntry") ? a.map(function(a) {
                        return a.getUniqueID()
                    }) : a
                }
            }
        }
    }
}
), null);
__d("PagesManagerWECInboxStore", ["FluxStore", "PagesManagerDispatcher", "PagesManagerInboxActionType"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c;
            c = a.call(this, b("PagesManagerDispatcher")) || this;
            c.$PagesManagerWECInboxStore1 = {
                shouldShowNewWECThread: !1,
                phoneNumber: ""
            };
            return c
        }
        var d = c.prototype;
        d.__onDispatch = function(a) {
            switch (a.type) {
            case b("PagesManagerInboxActionType").WEC.START_NEW_THREAD:
                this.$PagesManagerWECInboxStore1 = {
                    shouldShowNewWECThread: !0,
                    phoneNumber: a.phoneNumber
                },
                this.__emitChange()
            }
        }
        ;
        d.getNewWECThreadState = function() {
            return this.$PagesManagerWECInboxStore1
        }
        ;
        return c
    }(b("FluxStore"));
    a.__moduleID = e.id;
    c = new a();
    e.exports = c
}
), null);
__d("BusinessInboxThreadDeleteHeaderButtonClickFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743254");
    c = b("FalcoLoggerInternal").create("business_inbox_thread_delete_header_button_click", a);
    e.exports = c
}
), null);
__d("BusinessInboxThreadFollowupHeaderButtonClickFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743257");
    c = b("FalcoLoggerInternal").create("business_inbox_thread_followup_header_button_click", a);
    e.exports = c
}
), null);
__d("BusinessInboxThreadMarkFollowupThreadButtonClickFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743260");
    c = b("FalcoLoggerInternal").create("business_inbox_thread_mark_followup_thread_button_click", a);
    e.exports = c
}
), null);
__d("BusinessInboxThreadMarkReadUnreadHeaderButtonClickFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743261");
    c = b("FalcoLoggerInternal").create("business_inbox_thread_mark_read_unread_header_button_click", a);
    e.exports = c
}
), null);
__d("BusinessInboxThreadMoveToDoneHeaderButtonClickFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743262");
    c = b("FalcoLoggerInternal").create("business_inbox_thread_move_to_done_header_button_click", a);
    e.exports = c
}
), null);
__d("BusinessInboxThreadMoveToDoneThreadButtonClickFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743263");
    c = b("FalcoLoggerInternal").create("business_inbox_thread_move_to_done_thread_button_click", a);
    e.exports = c
}
), null);
__d("BusinessInboxThreadMoveToMainHeaderButtonClickFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743264");
    c = b("FalcoLoggerInternal").create("business_inbox_thread_move_to_main_header_button_click", a);
    e.exports = c
}
), null);
__d("BusinessInboxThreadMoveToMainThreadButtonClickFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743265");
    c = b("FalcoLoggerInternal").create("business_inbox_thread_move_to_main_thread_button_click", a);
    e.exports = c
}
), null);
__d("BusinessInboxThreadMoveToSpamHeaderButtonClickFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743266");
    c = b("FalcoLoggerInternal").create("business_inbox_thread_move_to_spam_header_button_click", a);
    e.exports = c
}
), null);
