if (self.CavalryLogger) {
    CavalryLogger.start_js(["trWSg"]);
}

__d("AdsMgmtScenarioSelectorLogger", ["AdsMgmtPerfScenarioQPLConfig", "AdsMgmtProfileTimeCounter", "AdsSelectorUtils", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    f.onScenarioStart = a;
    f.onScenarioEnd = c;
    var g, h = b("gkx")("1701686"), i = new Set(["change_level_in_editor", "instant_publish_inline", "open_editor", "save_changes"]), j = [];
    function a(a) {
        if (h && i.has(a)) {
            a = b("AdsMgmtPerfScenarioQPLConfig")[a];
            if (a != null) {
                b("AdsMgmtProfileTimeCounter").init(a);
                a = k.bind(null, a);
                (g || (g = b("AdsSelectorUtils"))).__registerGetStoreDurationListener(a);
                j.push(a)
            }
        }
    }
    function c(a) {
        if (h && i.has(a)) {
            a = b("AdsMgmtPerfScenarioQPLConfig")[a];
            if (a != null) {
                for (var a = 0; a < j.length; a++) {
                    var c = j[a];
                    (g || (g = b("AdsSelectorUtils"))).__removeGetStoreDurationListener(c)
                }
                j = []
            }
        }
    }
    function k(a, c) {
        b("AdsMgmtProfileTimeCounter").addDuration(a, "AdsSelectorUtils-getStores", c)
    }
}
), null);
__d("AdsHelpTraySearchQueryDataLoggerPlugin", ["AdsHelpTrayUILogger"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        log: function(a) {
            b("AdsHelpTrayUILogger").logSearch(a.query)
        }
    };
    c = a;
    e.exports = c
}
), null);
__d("AdsHelpTrayClearCaseIdDataReducerPlugin", ["AdsHelpTrayLaminarHelper"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        reduce: function(a) {
            var c;
            c = (c = a.prevContentType) != null ? c : "HOME";
            b("AdsHelpTrayLaminarHelper").fetchExistingJobs(c);
            return babelHelpers["extends"]({}, a, {
                currentContentCaseId: "",
                prevContentType: null,
                contentType: c
            })
        }
    };
    c = a;
    e.exports = c
}
), null);
__d("AdsHelpTraySearchQueryDataReducerPlugin", ["AdsHelpTrayLaminarHelper"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        reduce: function(a, c) {
            c = c.query;
            var d = c === "" ? "HOME" : "SEARCH";
            b("AdsHelpTrayLaminarHelper").fetchExistingJobs(d);
            return babelHelpers["extends"]({}, a, {
                contentType: d,
                currentQuery: c,
                suggestedQuery: "",
                searchIssueID: "",
                contentHistory: []
            })
        }
    };
    c = a;
    e.exports = c
}
), null);
__d("BCMPCreatorCampaignViews", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        PROJECT_BRIEFS: "project_briefs",
        INVITES: "invites"
    });
    e.exports = a
}
), null);
__d("videoComposerDialogUploadGetTypedPostDataPromises", ["Promise", "DateConsts", "VideoComposerStores", "VideoComposerTabs", "emptyObject"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c, d) {
        var e = [];
        for (var f = 0; f < d.length; f++) {
            var h = d[f];
            e.push(b("VideoComposerTabs").get(h).getTypedPostRequestDataToSend(a))
        }
        e.push(b("VideoComposerStores").getMetadataStore(a).getTypedPostRequestDataToSend());
        e.push(b("VideoComposerStores").getPublishingStore(a).getTypedPostRequestDataToSend());
        e.push(b("VideoComposerStores").getPremiereStore(a).getTypedPostRequestDataToSend());
        e.push(g(a));
        d.includes("distribution") || e.push(b("VideoComposerTabs").get("distribution").getTypedPostRequestDataToSend(a));
        var i = [];
        e.forEach(function(a) {
            i.push(a.then(function(a) {
                Object.assign(c, a)
            }))
        });
        return i
    }
    function g(a) {
        var c = b("VideoComposerStores").getTrimmingEditorStore(a).getVideoEditorConfigData();
        a = b("VideoComposerStores").getSoundEditorStore(a).getVideoEditorConfigData();
        var d = {};
        c && (d.trim_before_start = c.trim_before_start,
        d.trim_after_end = c.trim_after_end);
        a && (a.videoVolume != null && (d.video_volume = a.videoVolume),
        a.addedTracks != null && (d.audio_overlay_params = a.addedTracks.map(function(a) {
            return {
                audio_asset_id: a.sourceId,
                audio_start_time: a.itemStartTimeInMs / b("DateConsts").MS_PER_SEC,
                audio_duration: (a.itemEndTimeInMs - a.itemStartTimeInMs) / b("DateConsts").MS_PER_SEC,
                audio_volume: a.itemVolume,
                video_start_time: a.startTimeInMs
            }
        }).toArray()));
        return Object.keys(d).length !== 0 ? b("Promise").resolve({
            video_editor_config_json: JSON.stringify(d)
        }) : b("Promise").resolve(b("emptyObject"))
    }
}
), null);
