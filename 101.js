if (self.CavalryLogger) {
    CavalryLogger.start_js(["ApT8F"]);
}

__d("AdsAdsPixelListPartialLoadDataAction", ["Laminar"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("Laminar").__createAction(function() {
        return []
    }, function() {
        return []
    }, "ADS_PIXEL.LIST.PARTIAL_LOAD");
    e.exports = a
}
), null);
__d("AdsAdsPixelListPartialLoadDataActionFlux", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = {
        actionType: "ADS_PIXEL.LIST.PARTIAL_LOAD"
    }
}
), null);
__d("AdsPixelListBatchLoadErrorDataAction", ["Laminar"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("Laminar").__createAction(function() {
        return []
    }, function() {
        return []
    }, "FLUX.ACTION.TYPE");
    e.exports = a
}
), null);
__d("AdsPixelListBatchLoadErrorDataActionFlux", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = {
        actionType: "FLUX.ACTION.TYPE"
    }
}
), null);
__d("AdsPixelListBatchLoadedDataAction", ["Laminar"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("Laminar").__createAction(function() {
        return []
    }, function() {
        return []
    }, "FLUX.ACTION.LOADED.TYPE");
    e.exports = a
}
), null);
__d("AdsPixelListBatchLoadedDataActionFlux", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = {
        actionType: "FLUX.ACTION.LOADED.TYPE"
    }
}
), null);
__d("PresmaUsageTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:PresmaUsageLoggerConfig", this.$1, b("Banzai").BASIC, a)
        }
        ;
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:PresmaUsageLoggerConfig", this.$1, b("Banzai").VITAL, a)
        }
        ;
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:PresmaUsageLoggerConfig", this.$1, {
                signal: !0
            }, a)
        }
        ;
        c.clear = function() {
            this.$1 = {};
            return this
        }
        ;
        c.getData = function() {
            return babelHelpers["extends"]({}, this.$1)
        }
        ;
        c.updateData = function(a) {
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        }
        ;
        c.setBusinessID = function(a) {
            this.$1.business_id = a;
            return this
        }
        ;
        c.setUsageEvent = function(a) {
            this.$1.usage_event = a;
            return this
        }
        ;
        c.updateExtraData = function(a) {
            a = b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));
            b("GeneratedLoggerUtils").checkExtraDataFieldNames(a, g);
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        }
        ;
        c.addToExtraData = function(a, b) {
            var c = {};
            c[a] = b;
            return this.updateExtraData(c)
        }
        ;
        return a
    }();
    var g = {
        business_id: !0,
        usage_event: !0
    };
    e.exports = a
}
), null);
__d("AdsPixelListDataManager", ["fbt", "AdsAdsPixelListPartialLoadDataAction", "AdsBaseListDataManager", "AdsGraphAPI", "AdsPixelListBatchLoadedDataAction", "AdsPixelListBatchLoadErrorDataAction", "GraphAPIPaging", "promiseDone"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = ["creation_time", "id"]
      , i = 100
      , j = 800;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.loadFor = function(a) {
            this.loadForAccount(a)
        }
        ;
        d.loadForAccount = function(a) {
            var c = this;
            b("promiseDone")(b("AdsGraphAPI").get(e.id).adaccount(a).edge("adspixels").batched().get({
                fields: h
            }).then(b("GraphAPIPaging").eachPage(function(b) {
                return c.$AdsPixelListDataManagerClass1(a, b.data)
            }, i)), this.__handleSuccess.bind(this, ["load"], a, null), this.__handleError.bind(this, ["load"], a, null))
        }
        ;
        d.loadForBusiness = function(a, c, d, f, g) {
            b("promiseDone")(b("AdsGraphAPI").get(e.id).object("business_id", c).edge("adspixels").batched().get({
                fields: h,
                name_filter: f,
                id_filter: g,
                limit: d || j
            }), this.__handleSuccess.bind(this, ["load"], a, null), this.__handleError.bind(this, ["load"], a, null))
        }
        ;
        d.$AdsPixelListDataManagerClass1 = function(a, c) {
            b("AdsAdsPixelListPartialLoadDataAction").dispatch({
                sourceID: a,
                adsPixels: c
            }, {
                line: "76",
                module: "AdsPixelListDataManager.js"
            })
        }
        ;
        d.__onBatchLoaded = function(a) {
            b("AdsPixelListBatchLoadedDataAction").dispatch({
                responses: a
            }, {
                line: "83",
                module: "AdsPixelListDataManager.js"
            })
        }
        ;
        d.__onBatchLoadError = function(a) {
            b("AdsPixelListBatchLoadErrorDataAction").dispatch({
                responses: a
            }, {
                line: "89",
                module: "AdsPixelListDataManager.js"
            })
        }
        ;
        d.__getObjectTypeLabel = function() {
            return g._("T\u00e0i kho\u1ea3n qu\u1ea3ng c\u00e1o")
        }
        ;
        return c
    }(b("AdsBaseListDataManager"));
    c = new a();
    d = c;
    e.exports = d
}
), null);
__d("AdsPixelListStore", ["AdsAdsPixelListPartialLoadDataActionFlux", "AdsBaseListStore_LEGACY", "AdsLoadState_LEGACY", "AdsLoadStateUtils_LEGACY", "AdsPixelListBatchLoadedDataActionFlux", "AdsPixelListBatchLoadErrorDataActionFlux", "AdsPixelListDataManager", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = ",";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.getDataManager = function() {
            return b("AdsPixelListDataManager")
        }
        ;
        d.getStorageKey = function(a, b, c, d) {
            return c === void 0 && b === void 0 && c === void 0 ? a : [a, b, c, d].join(g)
        }
        ;
        d.__getActionTypes = function() {
            return [b("AdsAdsPixelListPartialLoadDataActionFlux").actionType, b("AdsPixelListBatchLoadErrorDataActionFlux").actionType, b("AdsPixelListBatchLoadedDataActionFlux").actionType]
        }
        ;
        d.__onDispatch = function(a) {
            var c = this;
            a = a.action;
            switch (a.actionType) {
            case b("AdsAdsPixelListPartialLoadDataActionFlux").actionType:
                this.__handleDataFor(a.sourceID, a.adsPixels, b("AdsLoadState_LEGACY").LOADING);
                break;
            case b("AdsPixelListBatchLoadErrorDataActionFlux").actionType:
                a.responses.forEach(function(a, d) {
                    c.__handleDataFor(d, null, b("AdsLoadState_LEGACY").ERROR)
                });
                break;
            case b("AdsPixelListBatchLoadedDataActionFlux").actionType:
                a.responses.forEach(function(a, d) {
                    c.__handleDataFor(d, a.data, b("AdsLoadState_LEGACY").LOADED)
                });
                break
            }
        }
        ;
        d.getLoadObjectForBusiness = function(a, c, d, e) {
            return b("AdsLoadStateUtils_LEGACY").listObjectToLoadObject(this.getForBusiness(a, c, d, e))
        }
        ;
        d.getForBusiness = function(a, c, d, e) {
            var f = this.getStorageKey(a, c, d, e)
              , g = this.getCachedFor(f);
            if (g.loadState === b("AdsLoadState_LEGACY").NOT_LOADED) {
                b("AdsPixelListDataManager").loadForBusiness(f, a, c, d, e);
                this.__updateLoadingFor([f]);
                return {
                    loadState: b("AdsLoadState_LEGACY").LOADING,
                    list: []
                }
            }
            return g
        }
        ;
        return c
    }(b("AdsBaseListStore_LEGACY"));
    c = new a();
    d = c;
    e.exports = d
}
), null);
__d("adsGetUniformValueSelector", ["AdsBulkValueUtils", "adsCreateSelector", "memoizeWithArgsWeak"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    c = function(a, c) {
        return b("adsCreateSelector")([a], function(a) {
            return b("AdsBulkValueUtils").getUniformValueOrDefault(a, c)
        }, {
            name: e.id
        })
    }
    ;
    var g = b("memoizeWithArgsWeak")(c);
    function a(a, b) {
        return g(a, b)
    }
}
), null);
__d("adsUEditorCampaignGroupSelector", ["adsCreateStoreSelector"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("adsCreateStoreSelector")(function(a) {
        a = a.campaignGroupSelector;
        return a.getStores()
    }, function(a) {
        var b = a.campaignGroupID;
        a = a.campaignGroupSelector;
        return a(b)
    }, {
        isGetStoresPure: !0,
        name: e.id + ".selector"
    });
    c = a;
    e.exports = c
}
), null);
__d("adsUEditorCampaignSelector", ["adsCreateStoreSelector"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("adsCreateStoreSelector")(function(a) {
        a = a.campaignSelector;
        return a.getStores()
    }, function(a) {
        var b = a.campaignID;
        a = a.campaignSelector;
        return a(b)
    }, {
        isGetStoresPure: !0,
        name: e.id + ".selector"
    });
    c = a;
    e.exports = c
}
), null);
__d("adsUEditorSelectedCampaignIDsSelector", ["adsCreateStoreSelector"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("adsCreateStoreSelector")(function(a) {
        a = a.selectedCampaignIDsSelector;
        return a.getStores()
    }, function(a) {
        a = a.selectedCampaignIDsSelector;
        return a()
    }, {
        isGetStoresPure: !0,
        name: e.id + ".selector"
    });
    c = a;
    e.exports = c
}
), null);
__d("adsUEditorAdObjectsLoadObjectForSelectedCampaignsSelector", ["LoadObject", "adsCreateStoreSelector", "adsUEditorCampaignGroupSelector", "adsUEditorCampaignSelector", "adsUEditorSelectedCampaignIDsSelector", "shallowEqual"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = function(a, c) {
        return a.length === c.length && a.every(function(a, d) {
            return b("shallowEqual")(a, c[d])
        })
    }
      , h = []
      , i = b("LoadObject").withValue([])
      , j = [b("adsUEditorCampaignGroupSelector"), b("adsUEditorCampaignSelector"), b("adsUEditorSelectedCampaignIDsSelector")];
    a = b("adsCreateStoreSelector")(function(a) {
        return j.flatMap(function(b) {
            return b.getStores(a)
        })
    }, function(a) {
        var c = []
          , d = b("adsUEditorSelectedCampaignIDsSelector")(a);
        for (var d = d, e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
            var j;
            if (e) {
                if (f >= d.length)
                    break;
                j = d[f++]
            } else {
                f = d.next();
                if (f.done)
                    break;
                j = f.value
            }
            j = j;
            j = b("adsUEditorCampaignSelector")(babelHelpers["extends"]({}, a, {
                campaignID: j
            }));
            if (!j)
                return b("LoadObject").loading();
            var k = j.campaign_id;
            k = b("adsUEditorCampaignGroupSelector")(babelHelpers["extends"]({}, a, {
                campaignGroupID: k
            }));
            if (!k)
                return b("LoadObject").loading();
            c.push({
                campaign: j,
                campaignGroup: k
            })
        }
        if (g(h, c))
            return i;
        h = c;
        i = b("LoadObject").withValue(c);
        return i
    }, {
        isGetStoresPure: j.every(function(a) {
            return a.isGetStoresPure
        }),
        name: e.id + ".adsUEditorAdObjectsLoadObjectForSelectedCampaignsSelector"
    });
    c = a;
    e.exports = c
}
), null);
__d("adsUEditorAdObjectsForSelectedCampaignsSelector", ["FBLogger", "adsCreateSelector", "adsUEditorAdObjectsLoadObjectForSelectedCampaignsSelector"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("adsCreateSelector")([b("adsUEditorAdObjectsLoadObjectForSelectedCampaignsSelector")], function(a) {
        if (a.isDone() && a.hasValue())
            return a.getValueEnforcing();
        b("FBLogger")("ads").warn("This function is used before Campaign AdObjects are loaded!");
        return []
    }, {
        name: e.id + ".adsUEditorAdObjectsForSelectedCampaignsSelector"
    });
    c = a;
    e.exports = c
}
), null);
__d("adsUEditorBlockListAccountListSelector", ["AdsAccountStore", "AdsAdAccountPublisherBlockListsProvider", "adsCreateSelector"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = [];
    a = b("adsCreateSelector")([b("AdsAccountStore").getSelectedAccountID, b("AdsAdAccountPublisherBlockListsProvider").toFluxSelector()], function(a, b) {
        return a != null ? (b = b.get(a).getValue()) != null ? b : g : g
    }, {
        name: e.id + ".adsUEditorBlockListAccountListSelector"
    });
    c = a;
    e.exports = c
}
), null);
__d("adsUEditorSelectedRawCampaignsSelector", ["adsCreateStoreSelector"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("adsCreateStoreSelector")(function(a) {
        a = a.selectedRawCampaignsSelector;
        return a.getStores()
    }, function(a) {
        a = a.selectedRawCampaignsSelector;
        return a()
    }, {
        isGetStoresPure: !0,
        name: e.id + ".adsUEditorSelectedRawCampaignsSelector"
    });
    c = a;
    e.exports = c
}
), null);
__d("AdsUEditorCampaignSelectors", ["AdsAPICampaignRecordUtils", "AdsPlacementAPISpecReaderUtils", "AdsPlacementEligibilityInfoUtils", "AdsPromotedObjectTypeUIProvider", "adsCreateSelector", "adsCreateStoreSelector", "adsMemoizeByReference", "adsUEditorAccountSelector", "adsUEditorAdObjectsForSelectedCampaignsSelector", "adsUEditorBlockListAccountListSelector", "adsUEditorSelectedCampaignsSelector", "adsUEditorSelectedRawCampaignsSelector", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = [b("adsUEditorAccountSelector"), b("adsUEditorBlockListAccountListSelector"), b("adsUEditorAdObjectsForSelectedCampaignsSelector")];
    a = b("adsCreateStoreSelector")(function(a) {
        return g.flatMap(function(b) {
            return b.getStores(a)
        })
    }, function(a) {
        var c = b("adsUEditorAccountSelector")(a)
          , d = b("adsUEditorBlockListAccountListSelector")(a);
        a = b("adsUEditorAdObjectsForSelectedCampaignsSelector")(a);
        return {
            account: c,
            accountBlockLists: d,
            adObjectsList: a
        }
    }, {
        isGetStoresPure: g.every(function(a) {
            return a.isGetStoresPure
        }),
        name: e.id + ".eligibilityInformationDependencies"
    });
    d = (c = b("adsCreateSelector"))([a], function(a) {
        var c = a.account
          , d = a.accountBlockLists;
        a = a.adObjectsList;
        return b("AdsPlacementEligibilityInfoUtils").buildEligibilityInformationFromAdObjectsList(c.capabilities, d, a, c)
    }, {
        name: e.id + ".eligibilityInformation"
    });
    f.eligibilityInformation = d;
    d = c([a], function(a) {
        var c = a.account
          , d = a.accountBlockLists;
        a = a.adObjectsList;
        return b("immutable").Map(a.map(function(a) {
            var e, f = a.campaignGroup.buying_type, g = a.campaignGroup.objective;
            e = (e = a.campaign.promoted_object) == null ? void 0 : e.object_store_url;
            f = b("AdsPlacementEligibilityInfoUtils").buildEligibilityInformationFromCampaignSpec(a.campaign, f, c.capabilities, g, d, e, void 0, void 0, c);
            return [a.campaign.id, f]
        }))
    }, {
        name: e.id + ".eligibilityInformationMap"
    });
    f.eligibilityInformationMap = d;
    a = c([d], function(a) {
        return a.toArray()
    }, {
        name: e.id + ".eligibilityInformationArray"
    });
    f.eligibilityInformationArray = a;
    a = c([a], function(a) {
        return a.map(function(a) {
            return a.spec
        })
    }, {
        name: e.id + ".placementSpecs"
    });
    f.placementSpecs = a;
    a = c([b("adsUEditorSelectedRawCampaignsSelector")], function(a) {
        return a.map(function(a) {
            return b("AdsPlacementAPISpecReaderUtils").convertCampaignRecordToPlacementSpec(a)
        })
    }, {
        name: e.id + ".rawPlacementSpecs"
    });
    f.rawPlacementSpecs = a;
    a = c([b("adsUEditorSelectedRawCampaignsSelector")], function(a) {
        return b("immutable").Map(a.map(function(a) {
            return [a.id, b("AdsPlacementAPISpecReaderUtils").convertCampaignRecordToPlacementSpec(a)]
        }))
    }, {
        name: e.id + ".rawPlacementSpecsMap"
    });
    d = c([d, a], function(a, b) {
        return a.map(function(a, c) {
            c = b.get(c);
            return babelHelpers["extends"]({}, a, {
                spec: c
            })
        })
    }, {
        name: e.id + ".rawEligibilityInformationMap"
    });
    f.rawEligibilityInformationMap = d;
    var h = function(a) {
        return b("adsCreateSelector")([b("adsUEditorAdObjectsForSelectedCampaignsSelector")], function(b) {
            return b.some(a)
        }, {
            name: e.id
        })
    };
    a = function(a) {
        return b("adsCreateSelector")([b("adsUEditorAdObjectsForSelectedCampaignsSelector")], function(b) {
            return b.every(a)
        }, {
            name: e.id
        })
    }
    ;
    d = function(a) {
        return b("adsCreateSelector")([h(a)], function(a) {
            return !a
        }, {
            name: e.id
        })
    }
    ;
    var i = function(a) {
        return b("adsCreateSelector")([b("adsUEditorAdObjectsForSelectedCampaignsSelector")], function(b) {
            return b.filter(a)
        }, {
            name: e.id
        })
    }
      , j = function(a) {
        return b("adsCreateSelector")([b("adsUEditorAdObjectsForSelectedCampaignsSelector")], function(b) {
            return b.map(a)
        }, {
            name: e.id
        })
    }
      , k = function(a) {
        return b("adsCreateSelector")([b("adsUEditorAdObjectsForSelectedCampaignsSelector")], function(c) {
            return b("immutable").Map(c.map(function(b, c, d) {
                return [b.campaign.id, a(b, c, d)]
            }))
        }, {
            name: e.id
        })
    }
      , l = function(a) {
        return b("adsCreateSelector")([b("adsUEditorSelectedCampaignsSelector")], function(b) {
            return b.some(a)
        }, {
            name: e.id
        })
    }
      , m = function(a) {
        return b("adsCreateSelector")([b("adsUEditorSelectedCampaignsSelector")], function(b) {
            return b.every(a)
        }, {
            name: e.id
        })
    }
      , n = function(a) {
        return b("adsCreateSelector")([l(a)], function(a) {
            return !a
        }, {
            name: e.id
        })
    }
      , o = function(a) {
        return b("adsCreateSelector")([b("adsUEditorSelectedCampaignsSelector")], function(b) {
            return b.filter(a)
        }, {
            name: e.id
        })
    }
      , p = function(a) {
        return b("adsCreateSelector")([b("adsUEditorSelectedCampaignsSelector")], function(b) {
            return b.map(a)
        }, {
            name: e.id
        })
    }
      , q = function(a) {
        return b("adsCreateSelector")([b("adsUEditorSelectedCampaignsSelector")], function(c) {
            return b("immutable").Map(c.map(function(b, c, d) {
                return [b.id, a(b, c, d)]
            }))
        }, {
            name: e.id
        })
    };
    c = c([b("adsUEditorAdObjectsForSelectedCampaignsSelector"), b("AdsPromotedObjectTypeUIProvider").toFluxSelector()], function(a, c) {
        return b("immutable").Map(a.map(function(a) {
            var d = a.campaignGroup;
            a = a.campaign;
            d = d.objective;
            var e = c.get(a.id);
            return [a.id, b("AdsAPICampaignRecordUtils").getPromotedObjectType(d, a, e)]
        }))
    }, {
        name: e.id + ".derivedPromotedObjectTypesMap"
    });
    f.derivedPromotedObjectTypesMap = c;
    a = {
        some: (c = b("adsMemoizeByReference"))(h, e.id),
        every: c(a, e.id),
        none: c(d, e.id),
        filter: c(i, e.id),
        map: c(j, e.id),
        mapTransform: c(k, e.id)
    };
    f.adObjectsList = a;
    d = {
        some: c(l, e.id),
        every: c(m, e.id),
        none: c(n, e.id),
        filter: c(o, e.id),
        map: c(p, e.id),
        mapTransform: c(q, e.id)
    };
    f.campaigns = d
}
), null);
__d("adsUEditorSelectedCampaignGroupIDsSelector", ["adsCreateStoreSelector"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("adsCreateStoreSelector")(function(a) {
        a = a.selectedCampaignGroupIDsSelector;
        return a.getStores()
    }, function(a) {
        a = a.selectedCampaignGroupIDsSelector;
        return a()
    }, {
        isGetStoresPure: !0,
        name: e.id + ".adsUEditorSelectedCampaignGroupIDsSelector"
    });
    c = a;
    e.exports = c
}
), null);
__d("AdsApiScheduleObjectFields", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = {
        START_MINUTE: "start_minute",
        END_MINUTE: "end_minute",
        DAYS: "days",
        TIMEZONE_TYPE: "timezone_type"
    }
}
), null);
__d("DayPartingUtils", ["AdsApiScheduleObjectFields", "AdsBulkValueUtils", "Assert", "removeFromArray"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {
        DAYS_IN_WEEK: 7,
        HOURS_IN_DAY: 24,
        mergeDays: function(a) {
            b("Assert").isTrue(a.length === this.DAYS_IN_WEEK);
            var c = g.createArray(g.DAYS_IN_WEEK, function() {
                return 0
            })
              , d = [];
            while (!0) {
                var e, f = null, h = 0;
                while (h < this.DAYS_IN_WEEK) {
                    if (c[h] < a[h].length) {
                        f = a[h][c[h]];
                        c[h]++;
                        break
                    }
                    h++
                }
                if (f === null)
                    break;
                e = (e = {},
                e[b("AdsApiScheduleObjectFields").START_MINUTE] = f.start_minute,
                e[b("AdsApiScheduleObjectFields").END_MINUTE] = f.end_minute,
                e[b("AdsApiScheduleObjectFields").DAYS] = [h],
                e);
                var i = e[b("AdsApiScheduleObjectFields").DAYS];
                while (h < 7) {
                    if (c[h] < a[h].length) {
                        var j = a[h][c[h]];
                        j = j.start_minute === f.start_minute && j.end_minute === f.end_minute;
                        j && (i.push(h),
                        c[h]++)
                    }
                    h++
                }
                d.push((j = {},
                j[b("AdsApiScheduleObjectFields").START_MINUTE] = e[b("AdsApiScheduleObjectFields").START_MINUTE],
                j[b("AdsApiScheduleObjectFields").END_MINUTE] = e[b("AdsApiScheduleObjectFields").END_MINUTE],
                j[b("AdsApiScheduleObjectFields").DAYS] = i,
                j))
            }
            return d
        },
        normalizeDayparts: function(a) {
            if (!a.length)
                return [];
            var b = g.createArray(g.DAYS_IN_WEEK, function() {
                return []
            });
            a.forEach(function(a) {
                if (a.days == null)
                    return [];
                a.days.forEach(function(c) {
                    b[c].push({
                        start_minute: a.start_minute,
                        end_minute: a.end_minute
                    })
                })
            });
            for (var a = 0; a < this.DAYS_IN_WEEK; a++)
                b[a].sort(function(a, b) {
                    if (a.start_minute !== b.start_minute)
                        return a.start_minute - b.start_minute;
                    else
                        return a.end_minute - b.end_minute
                });
            var c = g.createArray(g.DAYS_IN_WEEK, function() {
                return []
            });
            for (a = 0; a < this.DAYS_IN_WEEK; a++)
                if (b[a].length > 0) {
                    var d = b[a][0];
                    for (var e = 1; e < b[a].length; e++)
                        b[a][e].start_minute <= d.end_minute ? d.end_minute = Math.max(d.end_minute, b[a][e].end_minute) : (c[a].push(d),
                        d = b[a][e]);
                    c[a].push(d)
                }
            return g.mergeDays(c)
        },
        createArray: function(a, b) {
            var c = new Array(a);
            for (var d = 0; d < a; d++)
                c[d] = b();
            return c
        },
        setPacingType: function(a, c, d) {
            b("removeFromArray")(a, "no_pacing");
            b("removeFromArray")(a, "standard");
            b("removeFromArray")(a, "probabilistic_pacing_v2");
            c ? a.push("no_pacing") : d ? a.push("probabilistic_pacing_v2") : a.length === 0 && a.push("standard");
            return a
        },
        setDayParting: function(a, c) {
            b("removeFromArray")(a, "day_parting");
            b("removeFromArray")(a, "standard");
            c ? a.push("day_parting") : a.length === 0 && a.push("standard");
            return a
        },
        setBulkDayParting: function(a, c) {
            var d = [];
            a.getValues().forEach(function(a) {
                d.push(g.setDayParting(Array.from(a), c))
            });
            return b("AdsBulkValueUtils").aggregate(d)
        }
    };
    e.exports = g
}
), null);
__d("AdsTargetingConstants", ["fbt"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        Grouper: 1,
        Ncpp: 2,
        Custom: 3,
        Lookalike: 4,
        Engaged: 5,
        Fans: 6,
        District: 11
    };
    f.AUDIENCE = a;
    b = 13;
    f.DEFAULT_MIN_SELECTABLE_AGE = b;
    c = 65;
    f.DEFAULT_MAX_SELECTABLE_AGE = c;
    d = {
        All: 0,
        Empty: -1,
        Men: 1,
        Women: 2
    };
    f.GENDERS = d;
    e = {
        Countries: 1,
        Regions: 2
    };
    f.LOCATION_TYPES = e;
    a = {
        1: "/ajax/typeahead/ads_countries.php",
        2: "/ajax/typeahead/ads_regions.php"
    };
    f.LOCATION_URIS = a;
    b = 25;
    f.MAX_LOCATION_ENTRIES = b;
    c = {
        NAME: "name",
        MIN_AGE: "minimum_age",
        MAX_AGE: "maximum_age",
        GENDER: "gender",
        COUNTRIES: "countries",
        REGIONS: "regions",
        CITIES: "cities",
        RADIUS: "radius",
        INTERESTS: "interests"
    };
    f.TARGETING_SPEC_KEYS = c;
    d = g._("T\u1ea5t c\u1ea3");
    f.ALL_LABEL = d;
    e = g._("Nam");
    f.MEN_LABEL = e;
    a = g._("N\u1eef");
    f.WOMEN_LABEL = a;
    b = g._("Gi\u1edbi t\u00ednh");
    f.GENDER_LABEL = b;
    c = "/ajax/admarket/typeahead/ad_search.php";
    f.KEYWORD_URI = c;
    d = "/ajax/typeahead_regions.php";
    f.PRIVACY_REGIONS_URI = d;
    e = 8;
    f.MAX_KEYWORDS_ENTRIES = e;
    a = 5;
    f.MAX_KEYWORDS_SUGGESTIONS = a;
    g = 0;
    f.DEFAULT_RADIUS = g;
    b = 15;
    f.MIN_RADIUS = b;
    c = 50;
    f.MAX_RADIUS = c;
    d = 180;
    f.DEFAULT_CUSTOM_AUDIENCE_MAXIMUM_RETENTION_DAYS = d;
    e = 180;
    f.DEFAULT_CUSTOM_AUDIENCE_RETENTION_DAYS = e;
    a = 730;
    f.ENGAGEMENT_CUSTOM_AUDIENCE_MAXIMUM_RETENTION_DAYS = a;
    g = "164749007013531";
    f.LOOKALIKE_AUDIENCE_CMS_ID = g
}
), null);
__d("AdsTargetingReachEstimateConstant", ["fbt"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = g._("Hi\u1ec7n kh\u00f4ng c\u00f3 d\u1eef li\u1ec7u.");
    f.ERROR_CONTENT = a;
    b = -1;
    f.ERROR_SIZE = b;
    c = -10;
    f.LOAD_ERROR_SIZE = c;
    d = g._("Ch\u01b0a x\u00e1c \u0111\u1ecbnh");
    f.AM_ERROR_CONTENT = d;
    e = g._("Ch\u01b0a x\u00e1c \u0111\u1ecbnh");
    f.AM_ERROR_CONTENT_NEW = e;
    a = 1e3;
    f.LOW_REACH_SIZE = a;
    b = g._("D\u01b0\u1edbi 1000");
    f.AM_LOW_REACH_CONTENT = b
}
), null);
__d("AdsCampaignGroupUtils", ["AdsAPICampaignGroupPaths", "AdsAPICampaignGroupRecordUtils", "AdsAPICampaignPaths", "AdsAPIObjectives", "AdsBulkValueUtils", "AdsBuyingTypes", "AdsEmptyValue", "AdsLWIProductUtils", "AdsLWIRestrictActionsInAdsManager", "AdsPromotedObjectTypes", "AdsSplitTestUtils", "QE2Logger", "ads-app-platforms", "adsRegulatedCategoriesGetSingleCategoryFromCategories", "compactArray", "first", "flattenArray", "immutable", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    f.containsLWICampaignGroup = a;
    f.containsRFCampaignGroup = c;
    f.getRegulatedCategory = d;
    f.containsCatalogSaleCampaignGroup = e;
    f.getBulkProductCatalogID = i;
    f.getBulkBudgetType = j;
    f.getBudgetAmount = k;
    f.getBulkBudgetAmount = l;
    f.hasBulkBudget = m;
    f.hasBulkBudgetTypes = n;
    f.rollDownCampaignGroupBudgetFields = o;
    f.getCampaignGroupBudgetRollDownFieldPaths = p;
    f.getDisabledAppPlatformsForCampaignGroupBudget = q;
    f.getCampaignGroupType = r;
    a = b("ads-app-platforms").MOBILE_STORE;
    var g = [{
        campaignGroupPath: (c = b("AdsAPICampaignGroupPaths")).BID_STRATEGY,
        campaignPath: (d = b("AdsAPICampaignPaths")).BID_STRATEGY
    }, {
        campaignGroupPath: c.IS_AUTOBID,
        campaignPath: d.IS_AUTOBID
    }, {
        campaignGroupPath: c.IS_AVERAGE_PRICE_PACING,
        campaignPath: d.IS_AVERAGE_PRICE_PACING
    }, {
        campaignGroupPath: c.PACING_TYPE,
        campaignPath: d.PACING_TYPE
    }]
      , h = b("immutable").Map((e = {},
    e[b("AdsPromotedObjectTypes").CANVAS_APP] = a.FB_CANVAS,
    e));
    function a(a) {
        b("QE2Logger").logExposureForUser("ads_lwi_restrict_actions_in_am_for_lwi_frontend_universe");
        if (!b("AdsLWIRestrictActionsInAdsManager").adsLWIRestrictActionInAdsManagerEnabled)
            return !1;
        a = (a = a.boosted_component_product) != null ? a : b("AdsEmptyValue").instance();
        return a instanceof b("AdsEmptyValue") ? !1 : a.getValues().some(function(a) {
            return b("AdsLWIProductUtils").isAdsLWIProduct(a)
        })
    }
    function c(a) {
        return a.buying_type.getValues().some(function(a) {
            return a === b("AdsBuyingTypes").RESERVED
        })
    }
    function d(a) {
        return b("adsRegulatedCategoriesGetSingleCategoryFromCategories")((a = b("first")(((a = a.special_ad_categories) != null ? a : b("AdsEmptyValue").instance()).getValues())) != null ? a : [])
    }
    function e(a) {
        return a.objective.getValues().some(function(a) {
            return a === b("AdsAPIObjectives").PRODUCT_CATALOG_SALES
        })
    }
    function i(a) {
        return (a = a == null ? void 0 : (a = a.promoted_object) == null ? void 0 : a.product_catalog_id) != null ? a : b("AdsEmptyValue").instance()
    }
    function j(a) {
        return b("AdsBulkValueUtils").aggregate(b("AdsBulkValueUtils").deaggregateDeepByID(a).map(b("AdsAPICampaignGroupRecordUtils").getBudgetType_LEGACY))
    }
    function k(a, b, c) {
        return a === "daily" ? parseFloat(b) || 0 : parseFloat(c) || 0
    }
    function l(a, c) {
        return b("AdsBulkValueUtils").aggregate(b("AdsBulkValueUtils").deaggregateDeepByID(c).map(function(b) {
            return k(a, b)
        }))
    }
    function m(a) {
        a = j(a).getValues();
        var b = !1
          , c = !0;
        a.forEach(function(a) {
            b = b || !!a,
            c = c && !!a
        });
        return {
            all: b && c,
            some: b
        }
    }
    function n(a) {
        a = j(a).getValues();
        var b = !1
          , c = !1
          , d = !1;
        a.forEach(function(a) {
            b = b || !!a,
            c = c || a === "daily",
            d = d || a === "lifetime"
        });
        return {
            someCampaignGroupsHaveBudget: b,
            hasDailyBudget: c,
            hasLifetimeBudget: d
        }
    }
    function o(a, c) {
        return c.withMutations(function(c) {
            if (!b("AdsAPICampaignGroupRecordUtils").hasBudget_LEGACY(a))
                return;
            g.forEach(function(b) {
                var d = b.campaignPath;
                b = b.campaignGroupPath;
                c.setIn(d, a.getIn(b))
            })
        })
    }
    function p() {
        return g
    }
    function q(a, c) {
        a = b("flattenArray")(Array.from(a.values()).map(function(a) {
            var d = a.id;
            d = b("nullthrows")(c.get(d));
            a = {
                isAutobid: !!a.is_autobid,
                isAveragePricePacing: !!a.is_average_price_pacing
            };
            return d.getDisabledPromotedObjectTypes(a).map(function(a) {
                return h.get(a)
            })
        }));
        return b("immutable").Set(b("compactArray")(a))
    }
    function r(a) {
        return b("AdsSplitTestUtils").hasSplitTest(a == null ? void 0 : a.split_test_config) ? "split_test" : "default"
    }
}
), null);
__d("PresenceAccountIntagramDialog", ["cx", "CSS", "DialogX", "LayerDestroyOnHide", "LayerFadeOnHide", "LayerFadeOnShow", "LayerHideOnEscape", "LayerRefocusOnHide"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 485;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c) {
            return a.call(this, {
                width: h,
                xui: !0,
                addedBehaviors: [b("LayerDestroyOnHide"), b("LayerFadeOnShow"), b("LayerFadeOnHide"), b("LayerHideOnEscape"), b("LayerRefocusOnHide")]
            }, c) || this
        }
        var d = c.prototype;
        d.getContentRoot = function() {
            var c = a.prototype.getContentRoot.call(this);
            b("CSS").addClass(c, "_3acm");
            return c
        }
        ;
        return c
    }(b("DialogX"));
    e.exports = a
}
), null);
__d("XPresenceAccountInstagramAuthenticateController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/presence/instagram/authenticate/", {})
}
), null);
__d("XPresenceAccountInstagramConnectionController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/presence/instagram/connect/", {})
}
), null);
__d("XPresenceAccountInstagramCreateAndConnectController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/presence/instagram/create_connect/", {})
}
), null);
__d("PresenceAccountInstagramAuthenticator", ["fbt", "invariant", "AsyncRequest", "FacebookAppIDs", "PresenceAccountInstagramAuthView.react", "PresenceAccountIntagramDialog", "React", "XPresenceAccountInstagramAuthenticateController", "XPresenceAccountInstagramConnectionController", "XPresenceAccountInstagramCreateAndConnectController"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    a = function() {
        a.authenticateWithCredential = function(c, d, e, f, g) {
            var h = b("XPresenceAccountInstagramConnectionController").getURIBuilder().getURI();
            a.$9(h, c, {
                username: d,
                password: e
            }, f, g)
        }
        ;
        a.authenticateAccountWithCredential = function(c, d, e, f, g, h) {
            var i = b("XPresenceAccountInstagramAuthenticateController").getURIBuilder().getURI();
            a.$9(i, c, {
                username: d,
                password: e,
                should_authenticate_page_linked_ig_biz: h
            }, f, g)
        }
        ;
        a.authenticateWithAccountCreation = function(c, d, e, f, g, h) {
            var i = b("XPresenceAccountInstagramCreateAndConnectController").getURIBuilder().getURI();
            a.$9(i, c, {
                username: d,
                email: e,
                phone_number: f
            }, g, h)
        }
        ;
        a.$9 = function(c, d, e, f, g) {
            new (b("AsyncRequest"))().setURI(c).setMethod("POST").setData(Object.assign({
                owner_id: d,
                presence_owner_id: d,
                app_id: b("FacebookAppIDs").FBPAGES
            }, e)).setHandler(function(a) {
                a = a.payload;
                a && a.ig_error_message ? g(a.ig_error_message) : f(a)
            }).setErrorHandler(function(b) {
                return g(a.getDefaultErrorMessage())
            }).send()
        }
        ;
        a.getDefaultErrorMessage = function() {
            return g._("R\u1ea5t ti\u1ebfc, \u0111\u00e3 x\u1ea3y ra l\u1ed7i kh\u00f4ng x\u00e1c \u0111\u1ecbnh. Vui l\u00f2ng th\u1eed l\u1ea1i.")
        }
        ;
        function a(a, b, c, d) {
            this.$1 = a,
            this.$2 = !1,
            this.$3 = b,
            this.$5 = d,
            this.$4 = c
        }
        var c = a.prototype;
        c.authenticate = function(a, b) {
            this.$2 && h(0, 1542),
            this.$7 = a,
            this.$8 = b,
            this.$10()
        }
        ;
        c.verifyAccess = function(a, b) {
            this.$2 && h(0, 1542),
            this.$7 = a,
            this.$8 = b,
            this.$11()
        }
        ;
        c.$12 = function() {
            this.$2 && h(0, 1542),
            this.$2 = !0,
            this.$6 && this.$6.hide()
        }
        ;
        c.$10 = function() {
            var a = this
              , c = i.jsx(b("PresenceAccountInstagramAuthView.react"), {
                presenceOwnerID: this.$3,
                onConnected: function(b) {
                    a.$7 && a.$7(b),
                    a.$12()
                },
                onClose: function() {
                    a.$8 && a.$8("USER_CLOSE_DIALOG"),
                    a.$12()
                },
                viewOptions: "signIn"
            });
            this.$6 = new (b("PresenceAccountIntagramDialog"))(c);
            this.$6.show()
        }
        ;
        c.$11 = function() {
            var a = this
              , c = null;
            this.$5 === "pages_composer" ? c = "pages_composer" : this.$5 === "business_content_manager" && (c = "business_content_manager");
            c = i.jsx(b("PresenceAccountInstagramAuthView.react"), {
                presenceOwnerID: this.$3,
                onConnected: function(b) {
                    a.$7 && a.$7(b),
                    a.$12()
                },
                onClose: function() {
                    a.$8 && a.$8("USER_CLOSE_DIALOG"),
                    a.$12()
                },
                viewOptions: "authenticate",
                entryPoint: c,
                username: this.$4
            });
            this.$6 = new (b("PresenceAccountIntagramDialog"))(c);
            this.$6.show()
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("PresenceAccountInstagramAuthView.react", ["cx", "fbt", "ix", "AbstractButton.react", "AbstractTextInput.react", "Image.react", "Keys", "Link.react", "PresmaUsageTypedLogger", "React", "ShimButton.react", "XUISpinner.react", "cxMargin", "fbglyph", "joinClasses", "PresenceAccountInstagramAuthenticator"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c) {
            var d;
            d = a.call(this, c) || this;
            d.$8 = function() {
                new (b("PresmaUsageTypedLogger"))().setUsageEvent("ig_connect_xout_clicked").setBusinessID(d.props.presenceOwnerID).log(),
                d.props.onClose()
            }
            ;
            d.$9 = function(a) {
                var c = d.$10();
                a.keyCode === b("Keys").RETURN && !c.isButtonDisabled() && (c.buttonAction(),
                new (b("PresmaUsageTypedLogger"))().setUsageEvent("ig_connect_login_clicked").setBusinessID(d.props.presenceOwnerID).log())
            }
            ;
            d.$1 = {
                signIn: {
                    subtitle: h._("\u0110\u0103ng nh\u1eadp Instagram \u0111\u1ec3 b\u1ea1n c\u00f3 th\u1ec3 k\u1ebft n\u1ed1i v\u1edbi nhi\u1ec1u kh\u00e1ch h\u00e0ng h\u01a1n ngay t\u1eeb Facebook"),
                    buttonLabel: h._("\u0110\u0103ng nh\u1eadp"),
                    buttonAction: function() {
                        new (b("PresmaUsageTypedLogger"))().setUsageEvent("ig_connect_login_clicked").setBusinessID(d.props.presenceOwnerID).log(),
                        d.$2()
                    },
                    isButtonDisabled: function() {
                        return !d.state.username || !d.state.password
                    },
                    renderForm: function() {
                        return d.$3()
                    },
                    promptSectionConfig: {
                        prompt: h._("B\u1ea1n kh\u00f4ng c\u00f3 t\u00e0i kho\u1ea3n \u01b0?"),
                        actionLabel: h._("\u0110\u0103ng k\u00fd"),
                        action: function() {
                            return d.setState({
                                errorMessage: null,
                                mode: "signUp"
                            })
                        }
                    }
                },
                signUp: {
                    subtitle: h._("\u0110\u0103ng k\u00fd \u0111\u1ec3 xem \u1ea3nh v\u00e0 video t\u1eeb b\u1ea1n b\u00e8"),
                    buttonLabel: h._("T\u1ea1o t\u00e0i kho\u1ea3n"),
                    buttonAction: function() {
                        new (b("PresmaUsageTypedLogger"))().setUsageEvent("ig_connect_sign_up_clicked").setBusinessID(d.props.presenceOwnerID).log(),
                        d.$4()
                    },
                    isButtonDisabled: function() {
                        return !d.state.username || !d.state.email || d.state.email !== d.state.reEnterEmail
                    },
                    renderForm: function() {
                        return d.$5()
                    },
                    promptSectionConfig: {
                        prompt: h._("Ba\u0323n \u0111a\u0303 co\u0301 ta\u0300i khoa\u0309n?"),
                        actionLabel: h._("\u0110\u0103ng nh\u1eadp"),
                        action: function() {
                            return d.setState({
                                errorMessage: null,
                                mode: "signIn"
                            })
                        }
                    }
                },
                authenticate: {
                    subtitle: d.$6(d.props.entryPoint),
                    buttonLabel: d.props.entryPoint === "pages_composer" || d.props.entryPoint === "business_content_manager" ? h._("\u0110\u0103ng nh\u1eadp") : h._("X\u00e1c minh"),
                    buttonAction: function() {
                        new (b("PresmaUsageTypedLogger"))().setUsageEvent("ig_connect_auth_clicked").setBusinessID(d.props.presenceOwnerID).log(),
                        d.$7()
                    },
                    isButtonDisabled: function() {
                        return !d.state.username || !d.state.password
                    },
                    renderForm: function() {
                        return d.$3()
                    },
                    PromptRenderConfig: null
                }
            };
            d.state = {
                username: d.props.username || "",
                password: "",
                email: "",
                reEnterEmail: "",
                phoneNumber: "",
                isRequesting: !1,
                errorMessage: null,
                mode: d.props.viewOptions
            };
            return d
        }
        var d = c.prototype;
        d.$6 = function(a) {
            switch (a) {
            case "pages_composer":
                return h._("To post to Instagram and view Instagram insights enter the username and password of the Instagram account connected to this Page. Once you connect, admins and editors of this Page will have access to the connected account and be able to create and edit posts as well as view posts and insights. All other Page roles will be able to view posts and insights.");
            case "business_content_manager":
                return h._("\u0110\u1ec3 xem th\u00f4ng tin chi ti\u1ebft v\u00e0 \u0111\u0103ng b\u00e0i tr\u00ean Instagram, h\u00e3y nh\u1eadp t\u00ean ng\u01b0\u1eddi d\u00f9ng v\u00e0 m\u1eadt kh\u1ea9u c\u1ee7a t\u00e0i kho\u1ea3n Instagram k\u1ebft n\u1ed1i v\u1edbi trang n\u00e0y. Sau khi b\u1ea1n k\u1ebft n\u1ed1i, qu\u1ea3n tr\u1ecb vi\u00ean v\u00e0 bi\u00ean t\u1eadp vi\u00ean c\u1ee7a Trang s\u1ebd c\u00f3 quy\u1ec1n truy c\u1eadp v\u00e0o t\u00e0i kho\u1ea3n \u0111\u00e3 k\u1ebft n\u1ed1i. \u0110\u1ed3ng th\u1eddi, h\u1ecd s\u1ebd xem \u0111\u01b0\u1ee3c b\u00e0i vi\u1ebft v\u00e0 th\u00f4ng tin chi ti\u1ebft, c\u0169ng nh\u01b0 t\u1ea1o v\u00e0 ch\u1ec9nh s\u1eeda b\u00e0i vi\u1ebft. T\u1ea5t c\u1ea3 c\u00e1c vai tr\u00f2 kh\u00e1c tr\u00ean Trang s\u1ebd xem \u0111\u01b0\u1ee3c b\u00e0i vi\u1ebft v\u00e0 th\u00f4ng tin chi ti\u1ebft.");
            default:
                return h._("B\u1ea1n chu\u1ea9n b\u1ecb thay \u0111\u1ed5i t\u00ean ng\u01b0\u1eddi d\u00f9ng instagram. Vui l\u00f2ng nh\u1eadp t\u00ean ng\u01b0\u1eddi d\u00f9ng v\u00e0 m\u1eadt kh\u1ea9u ban \u0111\u1ea7u \u0111\u1ec3 x\u00e1c minh danh t\u00ednh c\u1ee7a b\u1ea1n.")
            }
        }
        ;
        d.$10 = function() {
            if (this.state.mode === "authenticate")
                return this.$1.authenticate;
            else if (this.state.mode === "signUp")
                return this.$1.signUp;
            else
                return this.$1.signIn
        }
        ;
        d.componentDidMount = function() {
            new (b("PresmaUsageTypedLogger"))().setUsageEvent("ig_setting_view_loaded").setBusinessID(this.props.presenceOwnerID).log()
        }
        ;
        d.render = function() {
            var a = this.$10();
            a = this.state.isRequesting ? this.$11() : this.$12(a);
            return j.jsxs("div", {
                className: b("joinClasses")(this.props.className, "_2k3s"),
                children: [this.$13(), a]
            })
        }
        ;
        d.$14 = function(a) {
            var b = this;
            return function(c) {
                b.$15(a, c.target.value)
            }
        }
        ;
        d.$15 = function(a, b) {
            var c = {};
            c[a] = b;
            this.setState(c)
        }
        ;
        d.$13 = function() {
            return !this.state.errorMessage ? null : j.jsxs("div", {
                className: "_53n- _4auv _4auw",
                children: [j.jsx(b("Image.react"), {
                    src: i("114551")
                }), j.jsx("div", {
                    className: "_3-9a",
                    children: this.state.errorMessage
                })]
            })
        }
        ;
        d.$11 = function() {
            return j.jsx("div", {
                className: "_4aux _4auy",
                children: j.jsxs("div", {
                    className: "_2k3t _2k3u",
                    children: [j.jsx(b("Image.react"), {
                        src: i("96615"),
                        height: 46,
                        width: 160
                    }), j.jsx("div", {
                        className: "_3-8y",
                        children: j.jsx(b("XUISpinner.react"), {
                            className: "_4auz",
                            size: "large",
                            background: "dark"
                        })
                    })]
                })
            })
        }
        ;
        d.$16 = function() {
            return j.jsx(b("ShimButton.react"), {
                className: "_2k3x" + (this.state.isRequesting ? " hidden_elem" : ""),
                onClick: this.$8,
                children: j.jsx(b("Image.react"), {
                    src: i("114708")
                })
            })
        }
        ;
        d.$12 = function(a) {
            return j.jsxs("div", {
                className: "_4au- _4auv _4auy _2k3t",
                children: [this.$16(), j.jsx(b("Image.react"), {
                    src: i("96615"),
                    height: 46,
                    width: 160
                }), j.jsx("div", {
                    className: "_2k3y",
                    children: a.subtitle
                }), j.jsx("div", {
                    className: "_2k3z"
                }), a.renderForm(), j.jsx(b("AbstractButton.react"), {
                    className: "_2k43",
                    onClick: a.buttonAction,
                    label: a.buttonLabel,
                    disabled: a.isButtonDisabled()
                }), this.$17(a.promptSectionConfig)]
            })
        }
        ;
        d.$5 = function() {
            var a;
            return j.jsxs("div", {
                children: [j.jsx(a = b("AbstractTextInput.react"), {
                    className: "_2k3- _4au_",
                    placeholder: h._("t\u00ean ng\u01b0\u1eddi d\u00f9ng"),
                    value: this.state.username,
                    onChange: this.$14("username")
                }), j.jsx(a, {
                    className: "_2k3- _4au_",
                    placeholder: h._("email"),
                    value: this.state.email,
                    onChange: this.$14("email")
                }), j.jsx(a, {
                    className: "_2k3- _4au_",
                    placeholder: h._("nh\u1eadp l\u1ea1i email"),
                    value: this.state.reEnterEmail,
                    onChange: this.$14("reEnterEmail")
                }), j.jsx(a, {
                    className: "_2k3- _4au_",
                    placeholder: h._("s\u1ed1 \u0111i\u1ec7n tho\u1ea1i (t\u00f9y ch\u1ecdn)"),
                    value: this.state.phoneNumber,
                    onChange: this.$14("phoneNumber")
                })]
            })
        }
        ;
        d.$3 = function() {
            return j.jsxs("div", {
                children: [j.jsx(b("AbstractTextInput.react"), {
                    className: "_2k3- _4au_",
                    placeholder: h._("T\u00ean ng\u01b0\u1eddi d\u00f9ng"),
                    value: this.state.username,
                    onChange: this.$14("username"),
                    onKeyDown: this.$9
                }), j.jsx(b("AbstractTextInput.react"), {
                    className: "_2k3-",
                    type: "password",
                    placeholder: h._("M\u1eadt kh\u1ea9u"),
                    value: this.state.password,
                    onChange: this.$14("password"),
                    onKeyDown: this.$9
                })]
            })
        }
        ;
        d.$17 = function(a) {
            return this.state.mode === "authenticate" ? j.jsx("div", {
                className: "_4av0"
            }) : j.jsxs("div", {
                className: "_4av0",
                children: [j.jsx("span", {
                    children: a ? a.prompt : null
                }), j.jsx(b("Link.react"), {
                    onClick: a ? a.action : null,
                    children: a ? a.actionLabel : null
                })]
            })
        }
        ;
        d.$2 = function() {
            var a = this;
            this.setState({
                isRequesting: !0,
                errorMessage: null
            });
            b("PresenceAccountInstagramAuthenticator").authenticateWithCredential(this.props.presenceOwnerID, this.state.username, this.state.password, function(b) {
                a.props.onConnected(b),
                a.setState({
                    isRequesting: !1
                })
            }, function(b) {
                a.setState({
                    isRequesting: !1,
                    errorMessage: b
                })
            })
        }
        ;
        d.$7 = function() {
            var a = this;
            this.setState({
                isRequesting: !0,
                errorMessage: null
            });
            b("PresenceAccountInstagramAuthenticator").authenticateAccountWithCredential(this.props.presenceOwnerID, this.state.username, this.state.password, function(b) {
                a.props.onConnected(b),
                a.setState({
                    isRequesting: !1
                })
            }, function(b) {
                a.setState({
                    isRequesting: !1,
                    errorMessage: b
                })
            }, this.props.entryPoint === "pages_composer" || this.props.entryPoint === "business_content_manager")
        }
        ;
        d.$4 = function() {
            var a = this;
            this.setState({
                isRequesting: !0,
                errorMessage: null
            });
            b("PresenceAccountInstagramAuthenticator").authenticateWithAccountCreation(this.props.presenceOwnerID, this.state.username, this.state.email, this.state.phoneNumber, function(b) {
                a.props.onConnected(b),
                a.setState({
                    isRequesting: !1
                })
            }, function(b) {
                a.setState({
                    isRequesting: !1,
                    errorMessage: b
                })
            })
        }
        ;
        return c
    }(j.Component);
    e.exports = a
}
), null);
__d("XPresenceAccountDisconnectController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/presence/account/disconnect/", {})
}
), null);
__d("PresenceAccountUtilities", ["AsyncRequest", "FacebookAppIDs", "PresenceAccountInstagramAuthenticator", "XPresenceAccountDisconnectController"], (function(a, b, c, d, e, f) {
    "use strict";
    f.connectToAccountOfType = a;
    f.disconnectAccountOfType = c;
    f.verifyAccountOfType = d;
    function a(a, c, d, e) {
        switch (c) {
        case "instagram":
            new (b("PresenceAccountInstagramAuthenticator"))(window,a).authenticate(function(a) {
                return e(a, null)
            }, function(a) {
                return e(null, a)
            });
            return;
        default:
            throw new Error("Unsupported account type: " + c)
        }
    }
    function c(a, c, d, e) {
        var f = b("XPresenceAccountDisconnectController").getURIBuilder().getURI()
          , g = null;
        d == "instagram" && (g = b("FacebookAppIDs").FBPAGES);
        d && new (b("AsyncRequest"))().setURI(f).setMethod("POST").setData({
            owner_id: a,
            presence_account_type: d,
            app_id: g,
            page_id: c
        }).setHandler(function(a) {
            e(a.payload, null)
        }).setErrorHandler(function() {
            e(null, "DISCONNECT_FAILURE")
        }).send()
    }
    function d(a, c, d, e, f, g) {
        switch (d) {
        case "instagram":
            new (b("PresenceAccountInstagramAuthenticator"))(window,a,c,(e = g) != null ? e : "pages_composer").verifyAccess(function(a) {
                return f(a, null)
            }, function(a) {
                return f(null, a)
            });
            return;
        default:
            throw new Error("Unsupported account type: " + d)
        }
    }
}
), null);
