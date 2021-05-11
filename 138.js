if (self.CavalryLogger) {
    CavalryLogger.start_js(["q4uEP"]);
}

__d("AdsRunStatusType", [], (function(a, b, c, d, e, f) {
    e.exports = {
        PENDING: "PENDING",
        ACTIVE: "ACTIVE",
        PAUSED: "PAUSED",
        DELETED: "DELETED",
        PENDING_REVIEW: "PENDING_REVIEW",
        DISAPPROVED: "DISAPPROVED",
        PREAPPROVED: "PREAPPROVED",
        PENDING_BILLING_INFO: "PENDING_BILLING_INFO",
        CAMPAIGN_PAUSED: "ADSET_PAUSED",
        ADGROUP_PAUSED: "AD_PAUSED",
        CAMPAIGN_GROUP_PAUSED: "CAMPAIGN_PAUSED",
        ARCHIVED: "ARCHIVED",
        ADSET_PAUSED: "INVALID_STATUS",
        ARCHIVED_IN_DRAFT: "ARCHIVED_IN_DRAFT",
        IN_PROCESS: "IN_PROCESS",
        WITH_ISSUES: "WITH_ISSUES"
    }
}
), null);
__d("AdsMessengerPartialAutomatedCreationTypes", ["$InternalEnum"], (function(a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
        ADVANCED: "advanced",
        CHAT: "chat"
    });
    f.AdsMessengerPartialAutomatedCreationTabs = a;
    c = Object.freeze({
        INTRO_MESSAGE: "introMessage",
        QUESTIONS: "questions",
        CONFIRMATION_MESSAGE: "confirmationMessage",
        DISQUALIFY_MESSAGE: "disqualifyMessage",
        FIELD_IDS: "fieldIDs",
        REMINDER: "reminder",
        PRIVACY_POLICY: "privacyPolicy",
        FOLLOW_UP: "followUp",
        GREETING: "greeting",
        STOP_QUESTION_MESSAGE: "stopQuestionMessage",
        TEMPLATE_NAME: "templateName",
        VALIDATION_MESSAGE: "validationMessage"
    });
    f.AdsMessengerPartialAutomatedCreationSections = c;
    d = Object.freeze({
        IN_PROGRESS: "inProgress",
        ERROR: "error",
        NO_ERROR: "noError"
    });
    f.AdsMessengerPartialAutomatedCreationSectionStatus = d;
    e = Object.freeze({
        MULTIPLE_CHOICE: "multipleChoice",
        CUSTOM: "custom"
    });
    f.AdsMessengerPartialAutomatedCreationNonPrefillAnswer = e;
    a = Object.freeze({
        NEXT_QUESTION: "nextQuestion",
        CONFIRMATION_MESSAGE: "confirmationMessage",
        DISQUALIFY_MESSAGE: "disqualifyMessage"
    });
    f.AdsMessengerPartialAutomatedCreationGoToOption = a;
    c = Object.freeze({
        TEXT: "text",
        MEDIA_CONTENT: "media_content",
        BUTTON_LABEL: "button_label",
        APP_INFO: "app_info",
        WEB_INFO: "web_info"
    });
    f.FollowUpSectionErrorSpecType = c;
    d = Object.freeze({
        CREATE_NEW: "createNew",
        JSON: "json",
        CTM_LEAD_GEN: "ctmLeadGen",
        FOLLOW_UP: "ctmFollowUp"
    });
    f.CreateNewSelectorValue = d;
    a = Object.freeze(["EMAIL", "PHONE", e.MULTIPLE_CHOICE]);
    f.AdsMessengerPartialAutomatedReplyValidationType = a;
    c = b("$InternalEnum").Mirrored(["CALL_BUSINESS", "DOWNLOAD", "NO_BUTTON", "VIEW_WEBSITE"]);
    f.AdsMessengerPartialAutomatedCreationCtaType = c
}
), null);
__d("PageRecommendationsScoreWithProfile.react", ["cx", "Image.react", "PageRecommendationsCircleScore.react", "PageRecommendationsCircleScoreType", "React", "URI"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props.srcs;
            return h.jsxs("div", {
                className: "_3td8",
                children: [h.jsx(b("PageRecommendationsCircleScore.react"), {
                    scoreType: this.props.scoreType,
                    pageIDString: this.props.pageID
                }), a != null && a[0] != null ? h.jsx(b("Image.react"), {
                    className: "_3td9 _3tdb",
                    src: a[0].valueOf()
                }) : null, a != null && a[1] != null ? h.jsx(b("Image.react"), {
                    className: "_3td9 _3tdc",
                    src: a[1].valueOf()
                }) : null]
            })
        }
        ;
        return c
    }(h.Component);
    e.exports = a
}
), null);
__d("PageRecommendationsPageMetaBox.react", ["cx", "PageRatingConfig", "PageRecommendationsCircleScoreType", "PageRecommendationsScoreWithProfile.react", "React", "URI"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = b("PageRecommendationsCircleScoreType").PAGE_METABOX;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props.srcs;
            return h.jsxs("div", {
                className: "_2v_5",
                children: [h.jsx(b("PageRecommendationsScoreWithProfile.react"), {
                    count: this.props.count,
                    rating: this.props.rating,
                    scoreType: i,
                    srcs: a,
                    pageID: this.props.pageID
                }), h.jsx("div", {
                    className: "_2w09" + (a != null && a[0] != null ? " _67lb" : "") + (a != null && a[1] != null ? " _67lc" : ""),
                    children: this.$1()
                })]
            })
        }
        ;
        d.$1 = function() {
            return b("PageRatingConfig").show_rating_circle ? this.$2() : this.$2()
        }
        ;
        d.$2 = function() {
            if (this.props.rating === 0)
                return h.jsx("div", {
                    children: h.jsx("span", {
                        className: "_2w0b",
                        children: this.props.opinionCountText
                    })
                });
            else
                return h.jsxs("div", {
                    children: [h.jsx("span", {
                        className: "_2w0a",
                        children: this.props.ratingScaleText
                    }), " \xb7 ", h.jsx("span", {
                        className: "_2w0b",
                        children: this.props.opinionCountText
                    })]
                })
        }
        ;
        return c
    }(h.Component);
    e.exports = a
}
), null);
