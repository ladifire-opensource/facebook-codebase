if (self.CavalryLogger) {
    CavalryLogger.start_js(["a1a+A"]);
}

__d("AdsBusinessImageSourceImageListProviderPlugin", ["AdsBusinessImageSourceDataLoader", "LoadObject", "PaginationLoadObjectMap", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        initialState: function(a) {
            return new (b("PaginationLoadObjectMap"))({
                imageIDs: b("immutable").OrderedSet([]),
                after: null
            },b("AdsBusinessImageSourceDataLoader").load,function(c, d) {
                a(function(a) {
                    var e = a.get(c).getValueEnforcing().imageIDs.union(d.imageIDs);
                    return a.set(c, b("LoadObject").withValue({
                        imageIDs: e,
                        after: d.after
                    }))
                })
            }
            )
        }
    };
    c = a;
    e.exports = c
}
), null);
__d("AdsBusinessImageSourceImageListProvider", ["Laminar", "AdsBusinessImageSourceImageListProviderPlugin"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("Laminar").__createProvider(b("AdsBusinessImageSourceImageListProviderPlugin"), "AdsBusinessImageSourceImageListProviderPlugin")
}
), null);
__d("AdsCreativesSmartCropProvider", ["Laminar", "AdsCreativesSmartCropProviderPlugin"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("Laminar").__createProvider(b("AdsCreativesSmartCropProviderPlugin"), "AdsCreativesSmartCropProviderPlugin")
}
), null);
__d("AdsSetCreativeSmartCropReducerPlugin", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        reduce: function(a, b) {
            return a.setMultipleValueOrError(b.smartCropsMap)
        }
    };
    b = a;
    e.exports = b
}
), null);
__d("AdsSetCreativeSmartCropDataAction", ["Laminar", "AdsSetCreativeSmartCropReducerPlugin", "AdsCreativesSmartCropProvider"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("Laminar").__createAction(function() {
        return [b("Laminar").__createReducer(b("AdsSetCreativeSmartCropReducerPlugin"), b("AdsCreativesSmartCropProvider"), {}, "")]
    }, function() {
        return []
    }, "AdsSetCreativeSmartCropDataActionPlugin");
    e.exports = a
}
), null);
__d("AdsCreativesSmartCropProviderPlugin", ["AdsImageInfoStoreUtils", "AdsImageSmartCropUtils", "LoadObjectMap", "adsUEditorAccountIDSelector", "immutable", "promiseDone", "promiseLoadObjectsFromKeys"], (function(a, b, c, d, e, f) {
    "use strict";
    function g(a) {
        var c = b("adsUEditorAccountIDSelector")();
        return b("AdsImageSmartCropUtils").getSmartCropAsyncRequestPromise(c, [a])
    }
    a = {
        initialState: function(a) {
            return b("LoadObjectMap").createKeyed(function(c) {
                a(function(a) {
                    return a.setLoading(c)
                }),
                b("promiseDone")(b("promiseLoadObjectsFromKeys")(c, g), function(c) {
                    return a(function(a) {
                        return a.merge(b("immutable").Map(c).entrySeq().map(function(a) {
                            var c = a[0];
                            a = a[1];
                            return [c, a.mapValue(function(a) {
                                return b("AdsImageSmartCropUtils").loadSmartCropsPayloadToMap(c, a)
                            })]
                        }))
                    })
                })
            }, function(a) {
                return b("AdsImageInfoStoreUtils").getImageHashOrURIFromImageID(a)
            })
        }
    };
    c = a;
    e.exports = c
}
), null);
__d("XAdsDynamicCreativeBatchSmartCropsAsyncController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/ads/tools/dco_batch_crops/async/", {
        ad_account_id: {
            type: "FBID",
            required: !0
        },
        image_hashes: {
            type: "StringSet",
            defaultValue: []
        },
        image_uris: {
            type: "StringSet",
            defaultValue: []
        },
        algorithm: {
            type: "Enum",
            enumType: 1
        }
    })
}
), null);
__d("AdsImageSmartCropUtils", ["AdsImageAspectRatioUtils", "AdsImageIDClasses", "AdsImageInfoStoreUtils", "AdsSetCreativeSmartCropDataAction", "AsyncTypedRequest", "XAdsDynamicCreativeBatchSmartCropsAsyncController", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getSmartCropAsyncRequestPromise = a;
    f.loadSmartCropsPayloadToMap = c;
    var g = b("immutable").Map()
      , h = 6e3;
    function a(a, c) {
        var d = c.reduce(function(a, c) {
            var d = a[0];
            a = a[1];
            var e = b("AdsImageInfoStoreUtils").getImageHashOrURIFromImageID(c);
            return c instanceof b("AdsImageIDClasses").AdsAccountImageID ? [[].concat(d, [e]), a] : [d, [].concat(a, [e])]
        }, [[], []])
          , e = d[0];
        d = d[1];
        return new (b("AsyncTypedRequest"))(b("XAdsDynamicCreativeBatchSmartCropsAsyncController").getURIBuilder().setFBID("ad_account_id", a).setStringSet("image_hashes", e).setStringSet("image_uris", d).setEnum("algorithm", "FB_SALIENCY_V1_CROP_TYPE_B").getURI()).setTimeoutHandler(h, function() {
            var a = new Error("smart crop request timeout");
            b("AdsSetCreativeSmartCropDataAction").dispatch({
                smartCropsMap: new Map(c.map(function(b) {
                    return [b, a]
                }))
            }, {
                line: "59",
                module: "AdsImageSmartCropUtils.js"
            })
        }).setMethod("GET").setReadOnly(!0).promisePayload()
    }
    function c(a, c) {
        c = c.image_to_smart_crops;
        a = b("AdsImageInfoStoreUtils").getImageHashOrURIFromImageID(a);
        c = b("immutable").Map(c == null ? void 0 : c.get(a));
        a = g;
        c != null && (a = j(c));
        return a
    }
    function i(a) {
        return [[a.left, a.top], [a.right, a.bottom]]
    }
    function j(a) {
        return a.mapEntries(function(a) {
            var c = a[0];
            a = a[1];
            return [b("AdsImageAspectRatioUtils").getAspectRatioTypeFromCropKey(c), i(a)]
        })
    }
}
), null);
__d("AdsImageSelectorV2AddSelectedActionFlux", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = {
        actionType: "ADS_IMAGE_SELECTOR_V2_ADD_SELECTED"
    }
}
), null);
__d("AdsImageSelectorV2BackClickedAction", ["Laminar"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("Laminar").__createAction(function() {
        return []
    }, function() {
        return []
    }, "ADS_IMAGE_SELECTOR_V2_BACK_CLICKED");
    e.exports = a
}
), null);
__d("AdsImageSelectorV2BackClickedActionFlux", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = {
        actionType: "ADS_IMAGE_SELECTOR_V2_BACK_CLICKED"
    }
}
), null);
__d("AdsImageSelectorV2ModalClosedActionFlux", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = {
        actionType: "ADS_IMAGE_SELECTOR_V2_MODAL_CLOSED"
    }
}
), null);
__d("AdsImageSelectorV2NextClickedAction", ["Laminar"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("Laminar").__createAction(function() {
        return []
    }, function() {
        return []
    }, "ADS_IMAGE_SELECTOR_V2_NEXT_CLICKED");
    e.exports = a
}
), null);
__d("AdsImageSelectorV2NextClickedActionFlux", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = {
        actionType: "ADS_IMAGE_SELECTOR_V2_NEXT_CLICKED"
    }
}
), null);
__d("AdsImageSelectorV2RemoveSelectedAction", ["Laminar"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("Laminar").__createAction(function() {
        return []
    }, function() {
        return []
    }, "ADS_IMAGE_SELECTOR_V2_REMOVE_SELECTED");
    e.exports = a
}
), null);
__d("AdsImageSelectorV2RemoveSelectedActionFlux", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = {
        actionType: "ADS_IMAGE_SELECTOR_V2_REMOVE_SELECTED"
    }
}
), null);
__d("AdsMediaPickerImageCustomizationDataProviderPlugin", ["immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        initialState: {
            customizationMap: b("immutable").Map([]),
            originalImageID: null,
            selectedAspectRatio: null
        }
    };
    c = a;
    e.exports = c
}
), null);
__d("AdsMediaPickerImageCustomizationDataProvider", ["Laminar", "AdsMediaPickerImageCustomizationDataProviderPlugin"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("Laminar").__createProvider(b("AdsMediaPickerImageCustomizationDataProviderPlugin"), "AdsMediaPickerImageCustomizationDataProviderPlugin")
}
), null);
__d("adsAccountMatchesAnyBusinessSegment", ["AdsAccountUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c) {
        return c.some(function(c) {
            switch (c) {
            case "NULL":
                return b("AdsAccountUtils").hasCapability(a, "BUSINESS_SEGMENT_IS_NULL");
            case "TAIL":
                return b("AdsAccountUtils").hasCapability(a, "BUSINESS_SEGMENT_IS_TAIL");
            case "TORSO":
                return b("AdsAccountUtils").hasCapability(a, "BUSINESS_SEGMENT_IS_TORSO");
            case "HEAD":
                return b("AdsAccountUtils").hasCapability(a, "BUSINESS_SEGMENT_IS_HEAD");
            case "HAIR":
                return b("AdsAccountUtils").hasCapability(a, "BUSINESS_SEGMENT_IS_HAIR");
            default:
                c
            }
        })
    }
}
), null);
__d("adsUEditorAdgroupImageEligibleAspectRatiosSelector", ["AdsMediaAspectRatioUtils", "AdsPlacementMediaRecommendationUtils", "AdsUEditorCampaignSelectors", "adsCreateSelector", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("adsCreateSelector")([b("AdsUEditorCampaignSelectors").placementSpecs], function(a) {
        return b("AdsMediaAspectRatioUtils").sortAspectRatios(a.reduce(function(a, c) {
            return a.union(b("AdsPlacementMediaRecommendationUtils").getRecommendedAspectRatiosFromPlacementSpec(c, "image"))
        }, b("immutable").Set().asMutable()).asImmutable())
    }, {
        name: e.id + ".adsUEditorAdgroupImageEligibleAspectRatiosSelector"
    });
    c = a;
    e.exports = c
}
), null);
__d("adsUEditorAdgroupIsImageEnhancementOptInSelector", ["AdsSettingsStore", "adsCreateSelector", "adsCreateStoreThunkSelector", "adsUEditorAccountIDSelector"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("adsCreateSelector")([b("adsUEditorAccountIDSelector"), b("adsCreateStoreThunkSelector")(b("AdsSettingsStore"), function(a) {
        return b("AdsSettingsStore").getByFields(a, ["should_default_image_auto_crop_optimization"])
    })], function(a, b) {
        return b(a).should_default_image_auto_crop_optimization === !0
    }, {
        name: e.id + ".adsUEditorAdgroupIsImageEnhancementOptInSelector"
    });
    c = a;
    e.exports = c
}
), null);
__d("AdsUEditorAdgroupImageCustomizationsSelectors", ["AdsAspectRatioTypes", "AdsCreativesSmartCropProvider", "AdsImageAspectRatioUtils", "AdsImageDimensionProvider", "AdsImageDimensionUtils", "AdsImageIDClasses", "AdsImageInfoStore", "AdsImageLegacyUtils", "AdsLoadObjectUtils", "AdsMediaPickerImageCustomizationDataProvider", "AdsPlacementAssetCustomizationSelectors", "AdsPlacementAssetEligibilityUtils", "AdsPlacementAssetUtils", "AdsPlacementMediaRecommendationUtils", "AdsSettingsStore", "LoadObject", "adsAccountMatchesAnyBusinessSegment", "adsChooseSelector", "adsCreateAdAccountGKSelector", "adsCreateSelector", "adsCreateStoreThunkSelector", "adsUEditorAccountSelector", "adsUEditorAdgroupImageEligibleAspectRatiosSelector", "adsUEditorAdgroupIsImageEnhancementOptInSelector", "adsUEditorImageSourceCustomizePlacementsAutoCropOptimizationEligibleSelector", "adsUEditorPlacementCustomizationCanUseMixedFormatsSelector", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("AdsImageDimensionProvider").toFluxSelector();
    c = b("AdsMediaPickerImageCustomizationDataProvider").toFluxSelector();
    var g = []
      , h = ["TAIL", "NULL"];
    d = b("adsCreateAdAccountGKSelector")._("2lKlB7HrI");
    f.canUseNativeCreativeFlowSelector = d;
    var i = b("adsCreateAdAccountGKSelector")._("yR4XfI6A");
    f.canUseSmartCropSelector = i;
    var j = (d = b("adsCreateSelector"))([b("adsUEditorAccountSelector"), b("adsCreateStoreThunkSelector")(b("AdsSettingsStore"), function(a) {
        return b("AdsSettingsStore").getByFields(a, ["should_default_image_auto_crop", "should_default_image_auto_crop_for_tail"])
    })], function(a, c) {
        c = c(a.account_id);
        a = b("adsAccountMatchesAnyBusinessSegment")(a, h);
        return a ? c.should_default_image_auto_crop_for_tail : c.should_default_image_auto_crop
    }, {
        name: e.id + ".isOptInSelector"
    });
    f.isOptInSelector = j;
    j = d([b("adsUEditorImageSourceCustomizePlacementsAutoCropOptimizationEligibleSelector"), b("adsUEditorAdgroupIsImageEnhancementOptInSelector"), j], function(a, b, c) {
        return c && a && b
    }, {
        name: e.id + ".isAutoCropOptimizationEnabledSelector"
    });
    f.isAutoCropOptimizationEnabledSelector = j;
    j = d([c], function(a) {
        a = a.selectedAspectRatio;
        return a
    }, {
        name: e.id + ".selectedAspectRatioSelector"
    });
    f.selectedAspectRatioSelector = j;
    j = d([b("adsUEditorAdgroupImageEligibleAspectRatiosSelector"), c], function(a, b) {
        var c = b.originalImageID
          , d = b.customizationMap;
        if (!c)
            return null;
        var e = {
            crops: null,
            imageID: c,
            useDefaultCrop: !0
        };
        return a.toOrderedMap().map(function(a) {
            return d.get(a, e)
        })
    }, {
        name: e.id + ".customizationsSelector"
    });
    a = d([j, (j = b("AdsImageInfoStore")).getFullSizeSelector, a], function(a, c, d) {
        return !a ? b("immutable").OrderedMap([]) : a.map(function(a, e) {
            var f = a.crops
              , g = a.imageID;
            a = a.useDefaultCrop;
            a = a === void 0 ? !1 : a;
            if (!a)
                return b("LoadObject").withValue({
                    crops: f,
                    imageID: g,
                    isDefaultCrop: !1
                });
            a = b("AdsImageDimensionUtils").getImageDimensionFromImageID(g, d, c);
            return a.mapValue(function(a) {
                var c = a.height;
                a = a.width;
                var d = b("AdsImageAspectRatioUtils").getAspectRatioTypeFromImage({
                    height: c,
                    width: a
                });
                a = b("AdsImageAspectRatioUtils").getValidCenterCropsForAspectRatioType(e, a, c);
                return {
                    crops: d === e ? null : a,
                    imageID: g,
                    isDefaultCrop: !0
                }
            })
        })
    }, {
        name: e.id + ".customizationsWithDefaultCenterCropsSelector"
    });
    f.customizationsWithDefaultCenterCropsSelector = a;
    var k = d([a, b("AdsCreativesSmartCropProvider").toFluxSelector()], function(a, c) {
        return a.map(function(a, d) {
            return a.mapValue(function(a) {
                if (!a.isDefaultCrop || !a.crops)
                    return a;
                var e = c.get(a.imageID);
                if (!e.hasValueWithoutError())
                    return e.hasError() ? a : b("LoadObject").loading();
                e = b("AdsImageAspectRatioUtils").getValidSmartCropsForAspectRatioType(d, e.getValueEnforcing());
                return e == null ? a : {
                    crops: e,
                    imageID: a.imageID,
                    isDefaultCrop: !1
                }
            })
        })
    }, {
        name: e.id + ".customizationsWithDefaultSmartCropsSelector"
    });
    f.customizationsWithDefaultSmartCropsSelector = k;
    k = b("adsChooseSelector")(function() {
        return i()
    }, k, a, !1, e.id + ".customizationsWithDefaultCropsSelector");
    var l = d([k], function(a) {
        return b("AdsLoadObjectUtils").allByOrderedKey(a.map(function(a) {
            return a.mapValue(function(a) {
                var b = a.crops;
                a = a.imageID;
                return {
                    crops: b,
                    imageID: a
                }
            })
        }))
    }, {
        name: e.id + ".customizationsWithDefaultCropsSelector_DEPRECATED"
    });
    l = d([l, j.getFullSizeURLSelector], function(a, c) {
        return a.map(function(a) {
            return a.map(function(a) {
                var d = a.crops;
                a = a.imageID;
                return {
                    crops: d,
                    hash: a instanceof b("AdsImageIDClasses").AdsAccountImageID ? a.getHash() : null,
                    url: c(a).getValue()
                }
            })
        })
    }, {
        name: e.id + ".imageCustomizationsSelector"
    });
    f.imageCustomizationsSelector = l;
    l = d([b("adsUEditorAccountSelector"), b("adsUEditorAdgroupImageEligibleAspectRatiosSelector"), b("AdsPlacementAssetCustomizationSelectors").candidateAssetGroupSelector, b("adsUEditorPlacementCustomizationCanUseMixedFormatsSelector")], function(a, c, d, e) {
        d = b("AdsPlacementAssetUtils").getFilteredImageSupportedAssetGroups((d = d == null ? void 0 : d.assetGroups) != null ? d : g, e);
        var f = b("AdsPlacementAssetUtils").getPlacementsFromAssetGroups(d).filter(function(c) {
            return b("AdsPlacementAssetEligibilityUtils").isEligiblePlacementForPlacementAssetCustomizationPhase2(c, a.capabilities)
        });
        return c.toMap().map(function(a) {
            a = b("AdsPlacementMediaRecommendationUtils").getPlacementsFromImageRecommendedAspectRatio(a);
            return a.filter(function(a) {
                return f.some(function(b) {
                    return a.platform === b.platform && a.position === b.position
                })
            })
        }).filter(function(a) {
            return !a.isEmpty()
        })
    }, {
        name: e.id + ".imagePlacementsByAspectRatioSelector"
    });
    f.imagePlacementsByAspectRatioSelector = l;
    l = d([l], function(a) {
        return a.map(function(a) {
            return b("AdsPlacementAssetUtils").getAssetGroupsFromPlacements(a)
        })
    }, {
        name: e.id + ".imageAssetGroupsByAspectRatioSelector"
    });
    f.imageAssetGroupsByAspectRatioSelector = l;
    l = d([j.getFullSizeLegacyImageSelector_DEPRECATED, j.getThumbnailSelector, j.getHighResThumbnailSelector, k], function(a, c, d, e) {
        return e.map(function(e) {
            var f = e.mapValue(function(a) {
                a = a.imageID;
                return a
            })
              , g = e.mapValue(function(b) {
                var c = b.crops;
                b = b.imageID;
                return a(b, c)
            })
              , h = e.mapValue(function(a) {
                a = a.imageID;
                return !(a instanceof b("AdsImageIDClasses").AdsExternalImageID) ? d(a).map(function(a) {
                    a = a.displayImage;
                    return a.getTyped()
                }) : b("LoadObject").empty()
            });
            e = e.mapValue(function(a) {
                a = a.imageID;
                return c(a).map(function(a) {
                    a = a.displayImage;
                    return a.getTyped()
                })
            });
            return {
                highResThumbnail: h,
                image: g,
                imageID: f,
                thumbnail: e.hasValueWithoutError() ? e : g.mapValue(function(a) {
                    return b("AdsImageLegacyUtils").convertToSimpleImage(a)
                })
            }
        })
    }, {
        name: e.id + ".aspectRatioTypeToImageSelector"
    });
    f.aspectRatioTypeToImageSelector = l;
    k = d([c, b("adsUEditorAdgroupImageEligibleAspectRatiosSelector")], function(a, c) {
        a = a.originalImageID;
        return a != null && c.has(b("AdsAspectRatioTypes").SQUARE) && c.size > 1
    }, {
        name: e.id + ".isPACFlowSelector"
    });
    f.isPACFlowSelector = k;
    k = d([a], function(a) {
        a = a.get(b("AdsAspectRatioTypes").SQUARE, b("LoadObject").empty());
        a = a.hasValueWithoutError() ? a.getValueEnforcing().crops : null;
        return a === null
    }, {
        name: e.id + ".isSquareCropSameAsOriginalImageSelector"
    });
    f.isSquareCropSameAsOriginalImageSelector = k;
    k = d([c, l], function(a, c) {
        a = a.originalImageID;
        if (c.size === 0)
            return !1;
        if (c.size === 1) {
            c = c.entrySeq().first();
            var d = c[0];
            c = c[1];
            var e = c.imageID;
            c = c.image;
            e = e.getValue();
            c = c.getValue();
            if (!e)
                return !1;
            if (e === a)
                return c != null && b("AdsImageAspectRatioUtils").getAspectRatioTypeFromImage(c) !== d
        }
        return !0
    }, {
        name: e.id + ".isAutoCropNecessarySelector"
    });
    f.isAutoCropNecessarySelector = k;
    c = d([j.getFullSizeLegacyImageSelector_DEPRECATED, a], function(a, c) {
        return b("immutable").List(c.map(function(c, d) {
            c = c.mapValue(function(b) {
                var c = b.crops;
                b = b.imageID;
                return a(b, c)
            });
            return c.hasValueWithoutError() && b("AdsImageAspectRatioUtils").isImageWithRecommendedAspectRatio(d, c.getValue())
        }).filter(Boolean).keySeq())
    }, {
        name: e.id + ".validAspectRatioGroupsSelector"
    });
    f.validAspectRatioGroupsSelector = c
}
), null);
__d("AdsMediaPickerImageCustomizationReducerPlugins", ["AdsImageIDClasses", "AdsUEditorAdgroupImageCustomizationsSelectors", "Laminar", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("immutable").Map([])
      , h = {
        customizationMap: g,
        originalImageID: null,
        selectedAspectRatio: null
    };
    function i(a, b) {
        if (a.selectedAspectRatio != null) {
            var c = a.customizationMap
              , d = a.selectedAspectRatio;
            return babelHelpers["extends"]({}, a, {
                selectedAspectRatio: null,
                customizationMap: c.set(d, {
                    imageID: b,
                    useDefaultCrop: !0
                })
            })
        }
        return {
            customizationMap: g,
            originalImageID: b,
            selectedAspectRatio: null
        }
    }
    a = {
        reduce: b("Laminar").withFluxSelectors({
            canUseNativeCreativeFlow: b("AdsUEditorAdgroupImageCustomizationsSelectors").canUseNativeCreativeFlowSelector
        }, function(a, c, d) {
            d = d.canUseNativeCreativeFlow;
            if (!d)
                return a;
            d = c.imageIDs;
            var e = c.isAutoCropEligible
              , f = d.some(function(a) {
                return a instanceof b("AdsImageIDClasses").AdsShutterstockImageID
            });
            if (d.size !== 1 || e !== !0 || f)
                return h;
            d = c.imageIDs.first();
            return i(a, d)
        })
    };
    f.onSetSelected = a;
    c = {
        reduce: b("Laminar").withFluxSelectors({
            canUseNativeCreativeFlow: b("AdsUEditorAdgroupImageCustomizationsSelectors").canUseNativeCreativeFlowSelector
        }, function(a, c, d) {
            d = d.canUseNativeCreativeFlow;
            if (!d)
                return a;
            d = c.imageData;
            if (d.isAutoCropEligible !== !0)
                return h;
            c = b("AdsImageIDClasses").AdsImageID.fromAcountAndHash(d.accountID, d.hash);
            return i(a, c)
        })
    };
    f.onUploadSuccess = c
}
), null);
__d("AdsImageSelectorV2SetSelectedAction", ["Laminar", "AdsMediaPickerImageCustomizationReducerPlugins", "AdsMediaPickerImageCustomizationDataProvider"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("Laminar").__createAction(function() {
        return [b("Laminar").__createReducer(b("AdsMediaPickerImageCustomizationReducerPlugins").onSetSelected, b("AdsMediaPickerImageCustomizationDataProvider"), {}, "")]
    }, function() {
        return []
    }, "ADS_IMAGE_SELECTOR_V2_SET_SELECTED");
    e.exports = a
}
), null);
__d("AdsImageSelectorV2SetSelectedActionFlux", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = {
        actionType: "ADS_IMAGE_SELECTOR_V2_SET_SELECTED"
    }
}
), null);
__d("AdsInstagramMediaSourceClearQueryOnSourceChangeReducerPlugin", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        reduce: function(a, b) {
            b = a.query ? a.query.set("captionText", "") : null;
            return babelHelpers["extends"]({}, a, {
                query: b
            })
        }
    };
    b = a;
    e.exports = b
}
), null);
__d("AdsImageSelectorV2SetSelectedSourceTypeAction", ["Laminar", "AdsInstagramMediaSourceClearQueryOnSourceChangeReducerPlugin", "AdsInstagramMediaQueryProvider"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("Laminar").__createAction(function() {
        return [b("Laminar").__createReducer(b("AdsInstagramMediaSourceClearQueryOnSourceChangeReducerPlugin"), b("AdsInstagramMediaQueryProvider"), {}, "")]
    }, function() {
        return []
    }, "ADS_IMAGE_SELECTOR_V2_SET_SELECTED_SOURCE_TYPE");
    e.exports = a
}
), null);
__d("AdsImageSelectorV2SetSelectedSourceTypeActionFlux", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = {
        actionType: "ADS_IMAGE_SELECTOR_V2_SET_SELECTED_SOURCE_TYPE"
    }
}
), null);
__d("AdsImageSelectorV2SetSourceTypesAction", ["Laminar"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("Laminar").__createAction(function() {
        return []
    }, function() {
        return []
    }, "ADS_IMAGE_SELECTOR_V2_SET_SOURCE_TYPES");
    e.exports = a
}
), null);
__d("AdsImageSelectorV2SetSourceTypesActionFlux", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = {
        actionType: "ADS_IMAGE_SELECTOR_V2_SET_SOURCE_TYPES"
    }
}
), null);
__d("AdsImageUploadUploadSuccessDataActionFlux", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = {
        actionType: "IMAGE_UPLOAD.UPLOAD_SUCCESS"
    }
}
), null);
__d("AdsImageSourceRenderer.react", ["fbt", "invariant", "AdsImageSelectorV2Types", "CenteredContainer.react", "CometPlaceholder.react", "GeoSpinner.react", "JSResource", "React", "immutable", "lazyLoadComponent"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i = b("React")
      , j = (c = b("lazyLoadComponent"))((d = b("JSResource"))("AdsAccountImageSourceContainer.react").__setRef("AdsImageSourceRenderer.react"))
      , k = c(d("AdsBusinessImageSourceContainer.react").__setRef("AdsImageSourceRenderer.react"))
      , l = c(d("AdsInstagramImageSourceContainer.react").__setRef("AdsImageSourceRenderer.react"))
      , m = c(d("AdsPageImageSourceContainer.react").__setRef("AdsImageSourceRenderer.react"))
      , n = c(d("AdsStockImageSourceContainer.react").__setRef("AdsImageSourceRenderer.react"))
      , o = c(d("AdsUploadImageSourceContainer.react").__setRef("AdsImageSourceRenderer.react"));
    function a(a) {
        var c = i.jsx(b("CenteredContainer.react"), {
            fullHeight: !0,
            horizontal: !0,
            vertical: !0,
            children: i.jsx(b("GeoSpinner.react"), {})
        });
        switch (a.source.type) {
        case b("AdsImageSelectorV2Types").AdsImageSource.ACCOUNT_IMAGE:
            return i.jsx(b("CometPlaceholder.react"), {
                fallback: c,
                children: i.jsx(j, babelHelpers["extends"]({
                    account: a.account,
                    placementSpecs: a.placementSpecs,
                    source: a.source.type,
                    sourceConfigs: a.sourceConfigs,
                    uploadProps: a.uploadProps
                }, a.source.accountImageSourceProps))
            });
        case b("AdsImageSelectorV2Types").AdsImageSource.BUSINESS_IMAGE:
            return i.jsx(b("CometPlaceholder.react"), {
                fallback: c,
                children: i.jsx(k, babelHelpers["extends"]({
                    account: a.account,
                    placementSpecs: a.placementSpecs,
                    sourceConfigs: a.sourceConfigs,
                    uploadProps: a.uploadProps
                }, a.source.businessImageSourceProps))
            });
        case b("AdsImageSelectorV2Types").AdsImageSource.STOCK_IMAGE:
            return i.jsx(b("CometPlaceholder.react"), {
                fallback: c,
                children: i.jsx(n, babelHelpers["extends"]({
                    account: a.account,
                    placementSpecs: a.placementSpecs,
                    sourceConfigs: a.sourceConfigs
                }, a.source.stockImageSourceProps))
            });
        case b("AdsImageSelectorV2Types").AdsImageSource.PAGE_IMAGE:
            return i.jsx(b("CometPlaceholder.react"), {
                fallback: c,
                children: i.jsx(m, babelHelpers["extends"]({
                    account: a.account,
                    isDelegatePageForProfile: a.isDelegatePageForProfile,
                    placementSpecs: a.placementSpecs,
                    source: a.source.type,
                    sourceConfigs: a.sourceConfigs
                }, a.source.pageImageSourceProps))
            });
        case b("AdsImageSelectorV2Types").AdsImageSource.EXTERNAL_IMAGE:
            return i.jsx("div", {
                children: g._("Ch\u00e8n ngu\u1ed3n b\u00ean ngo\u00e0i t\u1ea1i \u0111\u00e2y")
            });
        case b("AdsImageSelectorV2Types").AdsImageSource.UPLOAD_IMAGE:
            return i.jsx(b("CometPlaceholder.react"), {
                fallback: c,
                children: i.jsx(o, babelHelpers["extends"]({
                    placementSpecs: a.placementSpecs
                }, a.source.uploadImageSourceProps))
            });
        case b("AdsImageSelectorV2Types").AdsImageSource.INSTAGRAM_IMAGE:
            return i.jsx(b("CometPlaceholder.react"), {
                fallback: c,
                children: i.jsx(l, babelHelpers["extends"]({
                    account: a.account,
                    placementSpecs: a.placementSpecs,
                    source: a.source.type,
                    sourceConfigs: a.sourceConfigs
                }, a.source.instagramImageSourceProps))
            })
        }
        h(0, 1830, a.source.type)
    }
}
), null);
__d("AdsImageSelectorV2.react", ["cx", "AdsImageSourceRenderer.react", "React", "immutable"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            return h.jsx("div", {
                className: "_2afv",
                "data-testid": void 0,
                children: h.jsx("div", {
                    className: "_1-vi _6_hi",
                    children: h.jsx(b("AdsImageSourceRenderer.react"), {
                        account: this.props.account,
                        isDelegatePageForProfile: this.props.isDelegatePageForProfile,
                        placementSpecs: this.props.placementSpecs,
                        source: this.props.selectedSource,
                        sourceConfigs: this.props.sourceConfigs,
                        uploadProps: this.props.uploadProps
                    })
                })
            })
        }
        ;
        return c
    }(h.PureComponent);
    e.exports = a
}
), null);
__d("AdsImageSelectorV2Step", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
        SELECT_IMAGE: "select_image",
        VIDEO_PREVIEW: "video_preview"
    });
    e.exports = a
}
), null);
__d("AdsImageSelectorV2StateStoreRecord", ["AdsImageSelectorV2Step", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("immutable").Record({
        maxSelectedImageIDs: 1,
        selectedImageIDs: b("immutable").OrderedSet(),
        imageIDsForVideoGeneration: b("immutable").OrderedSet(),
        selectedSourceType: null,
        sourceTypes: null,
        videoGenerationChecked: !1,
        step: b("AdsImageSelectorV2Step").SELECT_IMAGE
    });
    c = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        return b
    }(a);
    e.exports = c
}
), null);
__d("AdsImageSelectorV2StateStore", ["invariant", "AdsDataAtom", "AdsImageIDClasses", "AdsImageSelectorV2AddSelectedActionFlux", "AdsImageSelectorV2BackClickedActionFlux", "AdsImageSelectorV2ModalClosedActionFlux", "AdsImageSelectorV2NextClickedActionFlux", "AdsImageSelectorV2RemoveSelectedActionFlux", "AdsImageSelectorV2SetSelectedActionFlux", "AdsImageSelectorV2SetSelectedSourceTypeActionFlux", "AdsImageSelectorV2SetSourceTypesActionFlux", "AdsImageSelectorV2StateStoreRecord", "AdsImageSelectorV2Step", "AdsImageSelectorV2Types", "AdsImageUploadUploadSuccessDataActionFlux", "FBLogger", "FluxReduceStore", "adsCreateStoreSelector", "immutable"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var f = arguments.length, g = new Array(f), h = 0; h < f; h++)
                g[h] = arguments[h];
            return (c = d = a.call.apply(a, [this].concat(g)) || this,
            d.getSelectedImageIDsSelector = b("adsCreateStoreSelector")([babelHelpers.assertThisInitialized(d)], function() {
                return d.getSelectedImageIDs()
            }, {
                name: e.id
            }),
            d.getMaxSelectedImageIDsSelector = b("adsCreateStoreSelector")([babelHelpers.assertThisInitialized(d)], function() {
                return d.getMaxSelectedImageIDs()
            }, {
                name: e.id
            }),
            d.getSelectedSourceSelector = b("adsCreateStoreSelector")([babelHelpers.assertThisInitialized(d)], function() {
                return d.getSelectedSourceType()
            }, {
                name: e.id
            }),
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.getInitialState = function() {
            return new (b("AdsImageSelectorV2StateStoreRecord"))()
        }
        ;
        d.getSelectedImageIDs = function() {
            return this.getState().get("selectedImageIDs")
        }
        ;
        d.getImageIDsForVideoGeneration = function() {
            return this.getState().get("imageIDsForVideoGeneration")
        }
        ;
        d.getMaxSelectedImageIDs = function() {
            return this.getState().get("maxSelectedImageIDs")
        }
        ;
        d.getSourceTypes = function() {
            return this.getState().get("sourceTypes")
        }
        ;
        d.getSelectedSourceType = function() {
            return this.getState().get("selectedSourceType")
        }
        ;
        d.getVideoGenerationChecked = function() {
            return this.getState().get("videoGenerationChecked")
        }
        ;
        d.getStep = function() {
            return this.getState().get("step")
        }
        ;
        d.__getActionTypes = function() {
            return [b("AdsImageSelectorV2AddSelectedActionFlux").actionType, b("AdsImageSelectorV2BackClickedActionFlux").actionType, b("AdsImageSelectorV2ModalClosedActionFlux").actionType, b("AdsImageSelectorV2NextClickedActionFlux").actionType, b("AdsImageSelectorV2RemoveSelectedActionFlux").actionType, b("AdsImageSelectorV2SetSelectedActionFlux").actionType, b("AdsImageSelectorV2SetSelectedSourceTypeActionFlux").actionType, b("AdsImageSelectorV2SetSourceTypesActionFlux").actionType, b("AdsImageUploadUploadSuccessDataActionFlux").actionType]
        }
        ;
        d.reduce = function(a, c) {
            c = c.action;
            var d;
            a;
            switch (c.type) {
            case b("AdsImageSelectorV2AddSelectedActionFlux").actionType:
                d = this.$AdsImageSelectorV2StateStore1(a, c.imageID);
                return this.$AdsImageSelectorV2StateStore2(d, c.imageID);
            case b("AdsImageSelectorV2RemoveSelectedActionFlux").actionType:
                d = this.$AdsImageSelectorV2StateStore3(a, c.imageID);
                return this.$AdsImageSelectorV2StateStore4(d, c.imageID);
            case b("AdsImageSelectorV2SetSelectedActionFlux").actionType:
                var e = c.max != null ? c.max : 0;
                d = this.$AdsImageSelectorV2StateStore5(a, e || a.get("maxSelectedImageIDs"));
                return this.$AdsImageSelectorV2StateStore6(d, c.imageIDs);
            case b("AdsImageSelectorV2SetSourceTypesActionFlux").actionType:
                d = this.$AdsImageSelectorV2StateStore7(a, c.sourceTypes);
                d = this.$AdsImageSelectorV2StateStore8(d, c.selectedSourceType || a.get("selectedSourceType"));
                return this.$AdsImageSelectorV2StateStore9(d);
            case b("AdsImageSelectorV2SetSelectedSourceTypeActionFlux").actionType:
                d = this.$AdsImageSelectorV2StateStore8(a, c.selectedSourceType);
                return this.$AdsImageSelectorV2StateStore9(d);
            case b("AdsImageUploadUploadSuccessDataActionFlux").actionType:
                if (c.imageData !== void 0) {
                    d = this.$AdsImageSelectorV2StateStore10(a, c.imageData);
                    return this.$AdsImageSelectorV2StateStore11(d)
                }
                return a;
            case b("AdsImageSelectorV2NextClickedActionFlux").actionType:
                return a.set("step", b("AdsImageSelectorV2Step").VIDEO_PREVIEW);
            case b("AdsImageSelectorV2BackClickedActionFlux").actionType:
                return a.set("step", b("AdsImageSelectorV2Step").SELECT_IMAGE);
            case b("AdsImageSelectorV2ModalClosedActionFlux").actionType:
                return a.set("step", b("AdsImageSelectorV2Step").SELECT_IMAGE).set("videoGenerationChecked", !1);
            default:
                return a
            }
        }
        ;
        d.$AdsImageSelectorV2StateStore1 = function(a, b) {
            var c = a.get("selectedImageIDs");
            b = this.$AdsImageSelectorV2StateStore12(c.add(b), a.get("maxSelectedImageIDs"));
            return c.size === b.size ? a : a.set("selectedImageIDs", b)
        }
        ;
        d.$AdsImageSelectorV2StateStore3 = function(a, b) {
            var c = a.get("selectedImageIDs");
            b = c.remove(b);
            return c === b ? a : a.set("selectedImageIDs", b)
        }
        ;
        d.$AdsImageSelectorV2StateStore2 = function(a, b) {
            var c = a.get("imageIDsForVideoGeneration")
              , d = a.get("selectedImageIDs");
            if (!d.has(b))
                return a;
            d = c.add(b);
            return c.size === d.size ? a : a.set("imageIDsForVideoGeneration", d)
        }
        ;
        d.$AdsImageSelectorV2StateStore4 = function(a, b) {
            var c = a.get("imageIDsForVideoGeneration");
            b = c.remove(b);
            return c.size === b.size ? a : a.set("imageIDsForVideoGeneration", b)
        }
        ;
        d.$AdsImageSelectorV2StateStore6 = function(a, c) {
            c = this.$AdsImageSelectorV2StateStore12(c, a.get("maxSelectedImageIDs"));
            var d = a.get("selectedImageIDs");
            return b("immutable").is(d, c) ? a : a.set("selectedImageIDs", c).set("imageIDsForVideoGeneration", c)
        }
        ;
        d.$AdsImageSelectorV2StateStore5 = function(a, b) {
            var c = this
              , d = a.get("maxSelectedImageIDs");
            if (d === b)
                return a;
            else {
                d = a.set("maxSelectedImageIDs", b);
                return d.update("selectedImageIDs", function(a) {
                    return c.$AdsImageSelectorV2StateStore12(a, b)
                })
            }
        }
        ;
        d.$AdsImageSelectorV2StateStore7 = function(a, c) {
            var d = a.get("sourceTypes");
            return b("immutable").is(d, c) ? a : a.set("sourceTypes", c)
        }
        ;
        d.$AdsImageSelectorV2StateStore8 = function(a, b) {
            var c = a.get("selectedSourceType");
            return c === b ? a : a.set("selectedSourceType", b)
        }
        ;
        d.$AdsImageSelectorV2StateStore10 = function(a, c) {
            c = b("AdsImageIDClasses").AdsImageID.fromAcountAndHash(c.accountID, c.hash);
            if (a.maxSelectedImageIDs !== 1)
                return this.$AdsImageSelectorV2StateStore1(a, c);
            else {
                c = this.$AdsImageSelectorV2StateStore6(a, b("immutable").OrderedSet([c]));
                this.$AdsImageSelectorV2StateStore13(a, b("AdsImageSelectorV2Types").AdsImageSource.ACCOUNT_IMAGE) && (c = this.$AdsImageSelectorV2StateStore8(c, b("AdsImageSelectorV2Types").AdsImageSource.ACCOUNT_IMAGE));
                return c
            }
        }
        ;
        d.$AdsImageSelectorV2StateStore12 = function(a, c) {
            if (0 <= c && c < a.size) {
                b("FBLogger")("ads").warn("Selected Images Exceeds Maximum Size Property: %s", c);
                return a.slice(0, c)
            }
            return a
        }
        ;
        d.$AdsImageSelectorV2StateStore13 = function(a, b) {
            a = a.get("sourceTypes");
            return !!a && !!a.find(function(a) {
                return a === b
            })
        }
        ;
        d.$AdsImageSelectorV2StateStore11 = function(a) {
            var c = a.get("selectedImageIDs").size
              , d = a.get("maxSelectedImageIDs");
            if (0 <= d && d < c) {
                b("FBLogger")("ads").warn("Selected Images Exceeds Maximum Size Property: %s", d);
                return this.$AdsImageSelectorV2StateStore6(a, a.get("selectedImageIDs").slice(0, d))
            }
            return a
        }
        ;
        d.$AdsImageSelectorV2StateStore9 = function(a) {
            var b = a.get("selectedSourceType");
            b && (this.$AdsImageSelectorV2StateStore13(a, b) || g(0, 768, b));
            return a
        }
        ;
        return c
    }(b("FluxReduceStore"));
    a.__moduleID = e.id;
    c = new a(b("AdsDataAtom"));
    e.exports = c
}
), null);
__d("AdsImageSelectorV2Container.react", ["AdsAccountStore", "AdsFluxContainer", "AdsImageSelectorV2.react", "AdsImageSelectorV2RemoveSelectedAction", "AdsImageSelectorV2SetSelectedSourceTypeAction", "AdsImageSelectorV2SetSourceTypesAction", "AdsImageSelectorV2StateStore", "AdsImageSelectorV2Types", "AdsInteractions", "React", "SUIBusinessThemeContainer.react", "adsCreateSelector", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = b("adsCreateSelector")([b("AdsAccountStore").getSelectedAccount, b("AdsImageSelectorV2StateStore").getSelectedImageIDsSelector, b("AdsImageSelectorV2StateStore").getMaxSelectedImageIDsSelector, b("AdsImageSelectorV2StateStore").getSelectedSourceSelector], function(a, b, c, d) {
        return {
            account: a.getValue(),
            selectedImageIDs: b,
            maxSelectedImageIDs: c,
            selectedSourceType: d
        }
    }, {
        name: e.id + ".adsImageSelectorV2ContainerSelector"
    });
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        c.getStores = function() {
            return h.getStores()
        }
        ;
        c.calculateState = function() {
            return h()
        }
        ;
        var d = c.prototype;
        d.UNSAFE_componentWillMount = function() {
            var a = this.props.sources.map(function(a) {
                return a.type
            });
            b("AdsImageSelectorV2SetSourceTypesAction").dispatch({
                selectedSourceType: this.props.initialSource,
                sourceTypes: a
            }, {
                line: "83",
                module: "AdsImageSelectorV2Container.react.js"
            })
        }
        ;
        d.render = function() {
            var a;
            a = this.$1((a = this.state.selectedSourceType) != null ? a : this.props.initialSource);
            var c = this.$1(b("AdsImageSelectorV2Types").AdsImageSource.UPLOAD_IMAGE);
            c = c && c.type === b("AdsImageSelectorV2Types").AdsImageSource.UPLOAD_IMAGE ? c.uploadImageSourceProps : null;
            return g.jsx(b("SUIBusinessThemeContainer.react"), {
                children: g.jsx(b("AdsImageSelectorV2.react"), {
                    account: this.state.account,
                    adEditWarningMessage: this.props.adEditWarningMessage,
                    isDelegatePageForProfile: this.props.isDelegatePageForProfile,
                    maxSelectedImageIDs: this.state.maxSelectedImageIDs,
                    placementSpecs: this.props.placementSpecs,
                    selectedImageIDs: this.state.selectedImageIDs,
                    selectedSource: a,
                    sourceConfigs: this.props.sources,
                    uploadProps: c,
                    onRemove: this.$2,
                    onSourceChange: this.$3
                })
            })
        }
        ;
        d.$1 = function(a) {
            return this.props.sources.find(function(b) {
                return b.type === a
            })
        }
        ;
        d.$3 = function(a) {
            b("AdsInteractions").singleFrameInteraction("ad_mediapicker_image_switch_source_tab"),
            b("AdsImageSelectorV2SetSelectedSourceTypeAction").dispatch({
                selectedSourceType: a
            }, {
                line: "126",
                module: "AdsImageSelectorV2Container.react.js"
            })
        }
        ;
        d.$2 = function(a) {
            b("AdsImageSelectorV2RemoveSelectedAction").dispatch({
                imageID: a
            }, {
                line: "132",
                module: "AdsImageSelectorV2Container.react.js"
            })
        }
        ;
        return c
    }(g.PureComponent);
    c = b("AdsFluxContainer").create(a, {
        withProps: !0,
        name: e.id
    });
    e.exports = c
}
), null);
__d("AdsImageDialogPanelConstants", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
        CANCEL: "CANCEL",
        CONFIRM: "CONFIRM"
    });
    f.AdsImageDialogPanelCloseSubEvents = a
}
), null);
__d("AdsMediaSourceSelectionLoggerEvents", ["AdsImageSelectorV2Types", "AdsVideoSelectionHeaderTabTypes"], (function(a, b, c, d, e, f) {
    "use strict";
    f = (a = {},
    a[(c = b("AdsImageSelectorV2Types")).AdsImageSource.ACCOUNT_IMAGE] = "image_source_select_account",
    a[c.AdsImageSource.BUSINESS_IMAGE] = "image_source_select_business",
    a[c.AdsImageSource.EXTERNAL_IMAGE] = "image_source_select_external",
    a[c.AdsImageSource.INSTAGRAM_IMAGE] = "image_source_select_instagram",
    a[c.AdsImageSource.PAGE_IMAGE] = "image_source_select_page",
    a[c.AdsImageSource.STOCK_IMAGE] = "image_source_select_stock",
    a[c.AdsImageSource.UPLOAD_IMAGE] = "image_source_select_upload",
    a[(d = b("AdsVideoSelectionHeaderTabTypes")).ACCOUNT] = "video_source_select_account",
    a[d.BUSINESS] = "video_source_select_business",
    a[d.IMPORT] = "video_source_select_import",
    a[d.LIBRARY] = "video_source_select_library",
    a[d.PAGE] = "video_source_select_page",
    a[d.UPLOAD] = "video_source_select_upload",
    a);
    c = f;
    e.exports = c
}
), null);
__d("AdsMediaSourceSelectionLoggingUtils", ["AdsInterfacesLogEvents", "AdsInterfacesLogger", "AdsMediaSourceSelectionLoggerEvents"], (function(a, b, c, d, e, f) {
    "use strict";
    f.onLogSourceChange = a;
    function a(a) {
        a = b("AdsMediaSourceSelectionLoggerEvents")[a];
        if (!a)
            return;
        b("AdsInterfacesLogger").log({
            eventName: a,
            eventCategory: b("AdsInterfacesLogEvents").EventCategory.USER_ACTION
        })
    }
}
), null);
__d("AdsImageSelectorV2Modal.react", ["AdsImageDialogPanelConstants", "AdsImageSelectorV2Container.react", "AdsImageSelectorV2ModalEntryPoint", "AdsImageSelectorV2SetSelectedSourceTypeAction", "AdsImageSelectorV2Step", "AdsInteractions", "AdsInterfacesLogEvents", "AdsInterfacesLogger", "AdsMediaSourceSelectionLoggingUtils", "CenteredContainer.react", "CometPlaceholder.react", "GeoSpinner.react", "JSResource", "React", "SUIBusinessThemeContainer.react", "immutable", "lazyLoadComponent"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = b("lazyLoadComponent")(b("JSResource")("AdsImageSelectorV2VideoPreview.react").__setRef("AdsImageSelectorV2Modal.react"))
      , i = b("lazyLoadComponent")(b("JSResource")("AdsMediaPickerImageDialogWrapperContainer.react").__setRef("AdsImageSelectorV2Modal.react"))
      , j = function() {
        var a = 0;
        return function() {
            return a++
        }
    }();
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$1 = function() {
                d.$2(b("AdsImageDialogPanelConstants").AdsImageDialogPanelCloseSubEvents.CONFIRM),
                d.props.onConfirm(),
                d.props.onHide()
            }
            ,
            d.$3 = function() {
                d.$2(b("AdsImageDialogPanelConstants").AdsImageDialogPanelCloseSubEvents.CANCEL),
                d.props.onHide()
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.$2 = function(a) {
            var c;
            b("AdsInterfacesLogger").log({
                data: (c = {},
                c.sub_event = a,
                c.sub_session_id = this.state.subSessionID.toString(),
                c.custom_event_type = this.props.currentSourceID,
                c),
                eventName: "image_dialog_hide_dialog",
                eventCategory: b("AdsInterfacesLogEvents").EventCategory.USER_ACTION
            })
        }
        ;
        d.$4 = function() {
            var a, c = j();
            b("AdsInterfacesLogger").log({
                data: (a = {},
                a.sub_session_id = c.toString(),
                a),
                eventName: "image_dialog_show_dialog",
                eventCategory: b("AdsInterfacesLogEvents").EventCategory.USER_ACTION
            });
            this.setState({
                subSessionID: c
            })
        }
        ;
        d.$5 = function(a) {
            b("AdsInteractions").singleFrameInteraction("ad_mediapicker_image_switch_source_tab"),
            b("AdsImageSelectorV2SetSelectedSourceTypeAction").dispatch({
                selectedSourceType: a
            }, {
                line: "128",
                module: "AdsImageSelectorV2Modal.react.js"
            }),
            b("AdsMediaSourceSelectionLoggingUtils").onLogSourceChange(a)
        }
        ;
        d.componentDidUpdate = function(a) {
            this.props.isShown && !a.isShown && this.$4()
        }
        ;
        d.componentDidMount = function() {
            this.props.isShown && this.$4()
        }
        ;
        d.render = function() {
            var a = g.jsx(b("CenteredContainer.react"), {
                fullHeight: !0,
                horizontal: !0,
                vertical: !0,
                children: g.jsx(b("GeoSpinner.react"), {})
            })
              , c = this.props
              , d = c.adEditWarningMessage
              , e = c.initialSource
              , f = c.isShown
              , j = c.sources;
            c = c.step;
            c = f ? c === b("AdsImageSelectorV2Step").VIDEO_PREVIEW ? g.jsx(b("CometPlaceholder.react"), {
                fallback: a,
                children: g.jsx(h, {})
            }) : g.jsx(b("AdsImageSelectorV2Container.react"), {
                adEditWarningMessage: d,
                initialSource: e,
                isDelegatePageForProfile: this.props.isDelegatePageForProfile,
                placementSpecs: this.props.placementSpecs,
                sources: j
            }) : null;
            a = "";
            this.props.entryPoint === b("AdsImageSelectorV2ModalEntryPoint").SLIDESHOW_IMAGE_UPLOAD_FROM_ADD_PHOTOS_BUTTON && (a = "image-library-from-add-photos");
            return g.jsx(b("CometPlaceholder.react"), {
                fallback: g.jsx("div", {}),
                children: g.jsx(i, {
                    adEditWarningMessage: this.props.adEditWarningMessage,
                    initialSource: this.props.initialSource,
                    isShown: f,
                    sources: j,
                    onChangeSource: this.$5,
                    onConfirm: this.$1,
                    onHide: this.$3,
                    children: g.jsx(b("SUIBusinessThemeContainer.react"), {
                        children: g.jsx("div", {
                            "data-testid": void 0,
                            children: c
                        })
                    })
                })
            })
        }
        ;
        return c
    }(g.PureComponent);
    e.exports = a
}
), null);
__d("XBusinessIntegrityPreApprovalSurveyController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/ads/integrity/pre_approval_survey/", {
        account_id: {
            type: "String",
            required: !0
        }
    })
}
), null);
__d("AdsPreApprovalSurvey", ["AsyncRequest", "XBusinessIntegrityPreApprovalSurveyController"], (function(a, b, c, d, e, f) {
    "use strict";
    f.requestPreApprovalSurvey = a;
    function a(a) {
        a = b("XBusinessIntegrityPreApprovalSurveyController").getURIBuilder().setString("account_id", a).getURI();
        new (b("AsyncRequest"))().setURI(a).exec()
    }
}
), null);
__d("AdsImageSelectorV2ConfigUtils", ["AdsImageSelectorV2Types", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getAccountImageConfig = g;
    f.getPageImageConfig = h;
    f.getBusinessImageConfig = a;
    f.getStockImageConfig = c;
    f.getUploadImageConfig = i;
    f.getInstagramImageConfig = j;
    f.getSourcesForDCOAdgroup = d;
    f.getSourcesForDLOAdgroup = e;
    function g(a, c, d) {
        return {
            type: b("AdsImageSelectorV2Types").AdsImageSource.ACCOUNT_IMAGE,
            accountImageSourceProps: {
                accountID: a,
                imageSpecs: c,
                usePhotoArrange: d
            }
        }
    }
    function h(a, c, d) {
        return {
            type: b("AdsImageSelectorV2Types").AdsImageSource.PAGE_IMAGE,
            pageImageSourceProps: {
                pageID: a,
                imageSpecs: c,
                usePhotoArrange: d
            }
        }
    }
    function a(a, c, d) {
        return {
            type: b("AdsImageSelectorV2Types").AdsImageSource.BUSINESS_IMAGE,
            businessImageSourceProps: {
                businessID: a,
                imageSpecs: c,
                usePhotoArrange: d
            }
        }
    }
    function c(a) {
        return {
            type: b("AdsImageSelectorV2Types").AdsImageSource.STOCK_IMAGE,
            stockImageSourceProps: {
                defaultStockSearchText: a
            }
        }
    }
    function i(a, c, d, e) {
        return {
            type: b("AdsImageSelectorV2Types").AdsImageSource.UPLOAD_IMAGE,
            uploadImageSourceProps: {
                accountID: a,
                allowMultiImage: d,
                imageSpec: c,
                useMediaPanelRedesign: e
            }
        }
    }
    function j(a, c, d) {
        return {
            type: b("AdsImageSelectorV2Types").AdsImageSource.INSTAGRAM_IMAGE,
            instagramImageSourceProps: {
                instagramAccountID: a,
                imageSpecs: c,
                usePhotoArrange: d
            }
        }
    }
    function d(a, c) {
        return b("immutable").List([g(a, c, !0), i(a, c.first(), !0)])
    }
    function e(a, c, d, e) {
        return b("immutable").List([g(a, e, !0), h(c, e, !0), i(a, e.first()), j(d, e, !0)])
    }
}
), null);
__d("AdsBusinessImagesQuery", ["immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("immutable").Record({
        adAccountID: void 0,
        businessID: void 0,
        pageLimit: 25,
        folderID: void 0,
        hasIntegrityViolation: void 0,
        title: void 0,
        minAspectRatio: null,
        maxAspectRatio: null,
        minWidth: 0,
        minHeight: 0,
        sortBy: ""
    });
    c = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        return b
    }(a);
    e.exports = c
}
), null);
__d("adsBusinessImageListDataSelector", ["AdsAccountStore", "AdsBusinessImageSourceImageListProvider", "AdsBusinessImagesQuery", "LoadObject", "adsCreateSelector", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("LoadObject").withValue(Object.freeze({
        after: null,
        imageIDs: b("immutable").OrderedSet()
    }));
    a = b("adsCreateSelector")([b("AdsAccountStore").getSelectedBusinessID, b("AdsBusinessImageSourceImageListProvider").toFluxSelector()], function(a, c) {
        if (a == null || a === "")
            return g;
        a = new (b("AdsBusinessImagesQuery"))({
            businessID: a
        });
        c = c.get(a);
        return c.isEmpty() ? g : c.map(function(a) {
            return {
                after: a.after,
                imageIDs: a.imageIDs
            }
        })
    }, {
        name: e.id + ".adsBusinessImageListDataSelector"
    });
    c = a;
    e.exports = c
}
), null);
__d("adsImageBusinessImageSourceSelector", ["AdImageSpecsUtils", "AdsAccountStore", "AdsImageSelectorV2ConfigUtils", "adsBusinessImageListDataSelector", "adsCreateSelector", "adsCreateStoreSelector", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("adsCreateStoreSelector")([], function(a) {
        return a
    }, {
        name: e.id + ".propsSelector"
    });
    c = b("adsCreateSelector")([a, b("adsBusinessImageListDataSelector")], function(a, c) {
        var d = a.sources;
        a = a.placementSpecs;
        var e = d;
        c = c.hasValue() && !c.getValueEnforcing().imageIDs.isEmpty();
        if (c) {
            c = a;
            a = b("AdImageSpecsUtils").reduceAndMergeImageSpec(c);
            e = d.push(b("AdsImageSelectorV2ConfigUtils").getBusinessImageConfig(b("AdsAccountStore").getSelectedBusinessID(), a, !0))
        }
        return e
    }, {
        name: e.id + ".adsImageBusinessImageSourceSelector"
    });
    d = c;
    e.exports = d
}
), null);
__d("AdsImageSelectorV2ModalContainer.react", ["Promise", "AdsFluxContainer", "AdsImageInfoStore", "AdsImageSelectorV2BackClickedAction", "AdsImageSelectorV2Modal.react", "AdsImageSelectorV2NextClickedAction", "AdsImageSelectorV2SetSelectedAction", "AdsImageSelectorV2SetSourceTypesAction", "AdsImageSelectorV2StateStore", "AdsPreApprovalSurvey", "AdsSelectorUtils", "React", "SUIBusinessThemeContainer.react", "WaitTimeArea.react", "adsImageBusinessImageSourceSelector", "emptyFunction", "immutable", "promiseDone", "promiseStoreGet"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$2 = function() {
                var a = d.state.selectedImageIDs
                  , c = d.props.onConfirmLegacy;
                if (c) {
                    d.props.onLoadingImages && d.props.onLoadingImages();
                    var e = a.map(function(a) {
                        var c = function() {
                            return b("AdsImageInfoStore").getFullSizeLegacyImage_DEPRECATED(a, null, null)
                        };
                        return b("promiseStoreGet")(b("AdsImageInfoStore"), c)
                    });
                    b("promiseDone")(b("Promise").all(e.toArray()), function(a) {
                        return c(b("immutable").OrderedSet(a))
                    })
                } else
                    d.props.onConfirm(a);
                d.props.accountID !== void 0 && b("AdsPreApprovalSurvey").requestPreApprovalSurvey(d.props.accountID)
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        c.getStores = function() {
            return [b("AdsImageSelectorV2StateStore")].concat((g || (g = b("AdsSelectorUtils"))).getStores([b("adsImageBusinessImageSourceSelector")]))
        }
        ;
        c.calculateState = function(a, c) {
            a = b("AdsImageSelectorV2StateStore").getSelectedImageIDs();
            var d = !a.isEmpty()
              , e = c.sources
              , f = c.placementSpecs;
            e = b("adsImageBusinessImageSourceSelector")({
                sources: e,
                placementSpecs: f
            });
            f = b("AdsImageSelectorV2StateStore").getSelectedSourceType() || c.initialSource;
            return {
                canConfirmModal: d,
                currentSourceID: f,
                selectedImageIDs: a,
                step: b("AdsImageSelectorV2StateStore").getStep(),
                sources: e
            }
        }
        ;
        var d = c.prototype;
        d.componentDidMount = function() {
            this.props.isShown && b("AdsImageSelectorV2SetSelectedAction").dispatch({
                imageIDs: this.props.selectedImageIDs,
                isAutoCropEligible: this.props.isAutoCropEligible,
                max: this.props.maxSelectedImageIDs
            }, {
                line: "121",
                module: "AdsImageSelectorV2ModalContainer.react.js"
            })
        }
        ;
        d.UNSAFE_componentWillReceiveProps = function(a) {
            !this.props.isShown && a.isShown && b("AdsImageSelectorV2SetSelectedAction").dispatch({
                imageIDs: a.selectedImageIDs,
                isAutoCropEligible: a.isAutoCropEligible,
                max: a.maxSelectedImageIDs
            }, {
                line: "131",
                module: "AdsImageSelectorV2ModalContainer.react.js"
            })
        }
        ;
        d.componentDidUpdate = function(a, c) {
            if (this.state.sources.size !== c.sources.size) {
                a = this.state.sources.map(function(a) {
                    return a.type
                });
                b("AdsImageSelectorV2SetSourceTypesAction").dispatch({
                    selectedSourceType: this.props.initialSource,
                    sourceTypes: a
                }, {
                    line: "142",
                    module: "AdsImageSelectorV2ModalContainer.react.js"
                })
            }
        }
        ;
        d.render = function() {
            return h.jsx(b("WaitTimeArea.react"), {
                name: "AdsImageSelectorV2ModalContainer",
                owner: "ads_advertiser_experience",
                children: h.jsx(b("SUIBusinessThemeContainer.react"), {
                    children: h.jsx(b("AdsImageSelectorV2Modal.react"), {
                        adEditWarningMessage: this.props.adEditWarningMessage,
                        canConfirmModal: this.state.canConfirmModal,
                        currentSourceID: this.state.currentSourceID,
                        entryPoint: this.props.entryPoint,
                        header: this.props.header,
                        initialSource: this.props.initialSource,
                        isDelegatePageForProfile: this.props.isDelegatePageForProfile,
                        isShown: this.props.isShown,
                        maxSelectedImageIDs: this.props.maxSelectedImageIDs,
                        placementSpecs: this.props.placementSpecs,
                        sources: this.state.sources,
                        step: this.state.step,
                        onBack: this.$1,
                        onConfirm: this.$2,
                        onHide: this.props.onHide,
                        onNext: this.$3
                    })
                })
            })
        }
        ;
        d.$3 = function() {
            b("AdsImageSelectorV2NextClickedAction").dispatch({}, {
                line: "179",
                module: "AdsImageSelectorV2ModalContainer.react.js"
            })
        }
        ;
        d.$1 = function() {
            b("AdsImageSelectorV2BackClickedAction").dispatch({}, {
                line: "183",
                module: "AdsImageSelectorV2ModalContainer.react.js"
            })
        }
        ;
        return c
    }(h.PureComponent);
    a.defaultProps = {
        isAutoCropEligible: !1,
        maxSelectedImageIDs: 1,
        selectedImageIDs: b("immutable").OrderedSet(),
        onConfirm: b("emptyFunction")
    };
    c = b("AdsFluxContainer").create(a, {
        withProps: !0,
        name: e.id
    });
    e.exports = c
}
), null);
__d("AdsImageSelectorV2Selectors", ["AdsBulkValueUtils", "AdsUEditorAdgroupBulkSelectors", "AdsUnifiedCreativeAPIFields", "adsCreateSelector"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("adsCreateSelector")([b("AdsUEditorAdgroupBulkSelectors").selectorByCreativeField(b("AdsUnifiedCreativeAPIFields").pageID)], function(a) {
        a = b("AdsBulkValueUtils").getUniformValue(a);
        return a
    }, {
        name: e.id
    });
    f.pageID = a;
    c = b("adsCreateSelector")([b("AdsUEditorAdgroupBulkSelectors").selectorByCreativeField(b("AdsUnifiedCreativeAPIFields").instagramActorID)], function(a) {
        a = b("AdsBulkValueUtils").getUniformValue(a);
        return a
    }, {
        name: e.id
    });
    f.instagramAccountID = c;
    d = b("adsCreateSelector")([c, a], function(a, b) {
        return {
            instagramAccountID: a,
            pageID: b
        }
    }, {
        name: e.id
    });
    f.pageAndInstagramAccountID = d
}
), null);
__d("AdsUEditorImageSelectorV2Container.react", ["invariant", "AdImageSpecsUtils", "AdsFluxContainer", "AdsImageSelectorV2ConfigUtils", "AdsImageSelectorV2ModalContainer.react", "AdsImageSelectorV2Selectors", "AdsImageSelectorV2Types", "AdsUEditorContextType", "React", "immutable"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        c.getStores = function(a, c) {
            c.adgroupEditorContext || g(0, 279);
            return [].concat(b("AdsImageSelectorV2Selectors").pageAndInstagramAccountID.getStores(c.adgroupEditorContext))
        }
        ;
        c.calculateState = function(a, c, d) {
            return b("AdsImageSelectorV2Selectors").pageAndInstagramAccountID(d.adgroupEditorContext)
        }
        ;
        var d = c.prototype;
        d.render = function() {
            var a = this, c, d = b("AdImageSpecsUtils").reduceAndMergeImageSpec(this.props.specs);
            c = b("immutable").List([(c = b("AdsImageSelectorV2ConfigUtils")).getAccountImageConfig(this.props.accountID, d, !0), c.getStockImageConfig(), c.getPageImageConfig(this.state.pageID, d, !0), c.getUploadImageConfig(this.props.accountID, d.first()), c.getInstagramImageConfig(this.state.instagramAccountID, d, !0)]);
            c = c.filter(function(b) {
                return a.props.sourceTypeList.includes(b.type)
            });
            return h.jsx(b("AdsImageSelectorV2ModalContainer.react"), {
                adEditWarningMessage: this.props.adEditWarningMessage,
                header: this.props.header,
                initialSource: this.props.initialSource,
                isShown: this.props.isShown,
                maxSelectedImageIDs: this.props.maxSelectedImageIDs,
                placementSpecs: this.props.specs,
                selectedImageIDs: this.props.selectedImageIDs,
                sources: c,
                onConfirm: this.props.onConfirm,
                onConfirmLegacy: this.props.onConfirmLegacy,
                onHide: this.props.onHide
            })
        }
        ;
        return c
    }(h.PureComponent);
    a.defaultProps = {
        sourceTypeList: b("AdsImageSelectorV2Types").DEFAULT_SOURCE_TYPE_LIST,
        specs: []
    };
    a.contextTypes = b("AdsUEditorContextType").adgroup;
    c = b("AdsFluxContainer").create(a, {
        withProps: !0,
        withContext: !0,
        name: e.id
    });
    e.exports = c
}
), null);
__d("getUniqueValuesForStringArray", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        var b = {}
          , c = [];
        a.forEach(function(a) {
            Object.prototype.hasOwnProperty.call(b, a) || (c.push(a),
            b[a] = !0)
        });
        return c
    }
}
), null);
__d("HighlightedText.atlas", ["cx", "React", "joinClasses"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = h.PureComponent;
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            return h.jsx("span", {
                className: b("joinClasses")(this.props.className, "_pi"),
                children: this.props.children
            })
        }
        ;
        return c
    }(a);
    e.exports = c
}
), null);
__d("TextWithHighlights.atlas", ["HighlightedText.atlas", "React", "Text.atlas", "TextSearchUtil"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = g.PureComponent;
    c = babelHelpers["extends"]({}, b("Text.atlas").defaultProps, {
        highlight: ""
    });
    d = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props, c;
            if (!a.highlight)
                c = a.text;
            else {
                a = b("TextSearchUtil").getTokens(a.text, a.highlight);
                c = a.map(function(a, c) {
                    return a.isHighlighted ? g.jsx(b("HighlightedText.atlas"), {
                        children: a.text
                    }, c) : a.text
                })
            }
            return g.jsx(b("Text.atlas"), babelHelpers["extends"]({}, this.props, {
                children: c
            }))
        }
        ;
        return c
    }(a);
    d.defaultProps = c;
    e.exports = d
}
), null);
__d("SearchableListPrompt.contrib", ["cx", "AbstractSearchSource", "AbstractTypeahead.react", "Layout.react", "React", "ReactComponentWithPureRenderMixin", "ReactDOM", "Scroll", "ScrollableArea.react", "SearchableEntry", "Text.atlas", "TextWithHighlights.atlas", "TypeaheadViewItem", "createReactClass_DEPRECATED", "joinClasses", "prop-types"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("Layout.react").Column
      , i = b("Layout.react").FillColumn
      , j = b("React")
      , k = {
        queryString: ""
    };
    a = {
        maxEntries: 100,
        resetQueryStringOnSelect: !1
    };
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.state = k,
            c.$1 = function(a) {
                a = a.target;
                c.setState({
                    queryString: a.value
                })
            }
            ,
            c.$2 = function(a) {
                c.props.onSelect(a),
                c.props.resetQueryStringOnSelect && c.setState({
                    queryString: ""
                })
            }
            ,
            c.focusInput = function() {
                c.refs && c.refs.typeahead.focusInput()
            }
            ,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.render = function() {
            return j.jsx("div", {
                className: b("joinClasses")(this.props.className, "_4ktx"),
                children: j.jsx(m, {
                    disabledEntryIDs: this.props.disabledEntryIDs,
                    emptySearchResultsText: this.props.emptySearchResultsText,
                    excludedEntries: this.props.excludedEntries,
                    header: this.props.header,
                    headerClassName: this.props.headerClassName,
                    maxEntries: this.props.maxEntries,
                    onChange: this.$1,
                    onSelectAttempt: this.$2,
                    placeholder: this.props.placeholder,
                    queryString: this.state.queryString,
                    ref: "typeahead",
                    searchSource: this.props.searchSource,
                    searchSourceOptions: this.props.searchSourceOptions,
                    selectedEntry: this.props.selectedEntry,
                    showEntriesBeforeSearch: this.props.showEntriesBeforeSearch,
                    getLeftContentForEntry: this.props.getLeftContentForEntry
                })
            })
        }
        ;
        return c
    }(j.PureComponent);
    e.exports = c;
    c.propTypes = {
        maxEntries: (d = b("prop-types")).number.isRequired,
        onSelect: d.func.isRequired,
        resetQueryStringOnSelect: d.bool.isRequired,
        searchSource: d.instanceOf(b("AbstractSearchSource")).isRequired,
        disabledEntryIDs: d.instanceOf(Set),
        emptySearchResultsText: d.node,
        excludedEntries: d.object,
        header: d.node,
        placeholder: d.node,
        searchSourceOptions: d.object,
        selectedEntry: d.instanceOf(b("SearchableEntry")),
        showEntriesBeforeSearch: d.bool
    };
    c.defaultProps = a;
    var l = {
        isFocused: !1
    }
      , m = function(c) {
        babelHelpers.inheritsLoose(a, c);
        function a() {
            var a, b;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (a = b = c.call.apply(c, [this].concat(e)) || this,
            b.state = l,
            b.$1 = function() {
                b.setState({
                    isFocused: !0
                }),
                b.props.onFocus && b.props.onFocus()
            }
            ,
            b.$2 = function() {
                b.setState({
                    isFocused: !1
                }),
                b.props.onBlur && b.props.onBlur()
            }
            ,
            b.focusInput = function() {
                b.refs.typeahead.focusInput()
            }
            ,
            a) || babelHelpers.assertThisInitialized(b)
        }
        var d = a.prototype;
        d.render = function() {
            var a = "_4kty" + (this.state.isFocused ? " _4ktz" : "") + (this.props.header ? " _5lly" : "");
            return j.jsxs("div", {
                className: this.props.className,
                "data-testid": void 0,
                children: [this.props.header ? j.jsx(b("Text.atlas"), {
                    className: b("joinClasses")("_2pi3 _2pi9", this.props.headerClassName),
                    color: "dark",
                    display: "block",
                    size: "s",
                    children: this.props.header
                }) : null, j.jsx(b("AbstractTypeahead.react"), {
                    autoHighlight: !0,
                    excludedEntries: this.props.excludedEntries,
                    hideViewWithEntries: !1,
                    inputClassName: a,
                    onBlur: this.$2,
                    onChange: this.props.onChange,
                    onFocus: this.$1,
                    onSelectAttempt: this.props.onSelectAttempt,
                    placeholder: this.props.placeholder,
                    presenter: {
                        ViewRenderer: n,
                        alwaysVisibleOnFocus: !!this.props.emptySearchResultsText,
                        extraRendererProps: {
                            disabledEntryIDs: this.props.disabledEntryIDs,
                            emptySearchResultsText: this.props.emptySearchResultsText,
                            showEntriesBeforeSearch: this.props.showEntriesBeforeSearch,
                            getLeftContentForEntry: this.props.getLeftContentForEntry
                        },
                        maxEntries: this.props.maxEntries,
                        useLayer: !1
                    },
                    queryString: this.props.queryString,
                    ref: "typeahead",
                    searchSource: this.props.searchSource,
                    searchSourceOptions: this.props.searchSourceOptions,
                    selectedEntry: this.props.selectedEntry,
                    selectOnBlur: !1,
                    showEntriesOnFocus: !0
                })]
            })
        }
        ;
        return a
    }(j.PureComponent);
    m.propTypes = {
        onChange: d.func.isRequired,
        onSelectAttempt: d.func.isRequired,
        searchSource: d.object.isRequired,
        disabledEntryIDs: d.instanceOf(Set),
        emptySearchResultsText: d.string,
        excludedEntries: d.object,
        header: d.node,
        maxEntries: d.number,
        onBlur: d.func,
        onFocus: d.func,
        placeholder: d.string,
        queryString: d.string,
        searchSourceOptions: d.object,
        selectedEntry: d.instanceOf(b("SearchableEntry")),
        showEntriesBeforeSearch: d.bool
    };
    var n = function(c) {
        babelHelpers.inheritsLoose(a, c);
        function a() {
            var a, b;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (a = b = c.call.apply(c, [this].concat(e)) || this,
            b.$1 = function(a) {
                var c = a.getUniqueID()
                  , d = b.props.highlightedEntry ? b.props.highlightedEntry.getUniqueID() : null
                  , e = b.props.selectedEntry ? b.props.selectedEntry.getUniqueID() : null;
                d = c === d;
                e = c === e;
                c = b.props.disabledEntryIDs && b.props.disabledEntryIDs.has(c);
                return j.jsx(o, {
                    disabled: c,
                    entry: a,
                    highlighted: d,
                    selected: e,
                    onSelect: b.props.onSelect,
                    onHighlight: b.props.onHighlight,
                    onRenderHighlight: b.props.onRenderHighlight,
                    queryString: b.props.queryString,
                    getLeftContentForEntry: b.props.getLeftContentForEntry
                }, a.getUniqueID())
            }
            ,
            b.$2 = function(a) {
                b.props.onHighlight && b.props.onHighlight(null, a)
            }
            ,
            a) || babelHelpers.assertThisInitialized(b)
        }
        var d = a.prototype;
        d.render = function() {
            var a = null
              , c = this.props.entries.length && (this.props.showEntriesBeforeSearch || this.props.queryString);
            c ? a = this.props.entries.map(this.$1) : this.props.queryString && (a = j.jsx("div", {
                children: j.jsx(b("Text.atlas"), {
                    className: "_4kt-",
                    color: "light",
                    size: "s",
                    children: this.props.emptySearchResultsText
                })
            }));
            return j.jsx(b("ScrollableArea.react"), {
                className: b("joinClasses")(this.props.className, "_4kt_"),
                "data-testid": void 0,
                onMouseLeave: this.$2,
                shadow: !1,
                maxHeight: 320,
                children: a
            })
        }
        ;
        return a
    }(j.PureComponent);
    n.propTypes = {
        entries: d.array.isRequired,
        onSelect: d.func.isRequired,
        disabledEntryIDs: d.instanceOf(Set),
        emptySearchResultsText: d.string,
        highlightedEntry: d.object,
        onHighlight: d.func,
        onRenderHighlight: d.func,
        queryString: d.string,
        selectedEntry: d.object,
        showEntriesBeforeSearch: d.bool
    };
    n.defaultProps = {
        showEntriesBeforeSearch: !0
    };
    var o = b("createReactClass_DEPRECATED")({
        displayName: "InlineTypeaheadViewItem",
        mixins: [babelHelpers["extends"]({}, b("TypeaheadViewItem").Mixin, b("ReactComponentWithPureRenderMixin"))],
        propTypes: babelHelpers["extends"]({}, b("TypeaheadViewItem").propTypes, {
            disabled: d.bool,
            getLeftContentForEntry: d.func
        }),
        componentDidUpdate: function() {
            var a = b("ReactDOM").findDOMNode(this);
            if (this.props.highlighted) {
                var c = a.offsetParent;
                c = c && a.offsetTop < b("Scroll").getTop(c) + c.offsetHeight && a.offsetTop + a.offsetHeight > b("Scroll").getTop(c);
                c || a.scrollIntoView(!1)
            }
        },
        render: function() {
            var a = this.props.entry.getSubtitle()
              , c = j.jsxs("div", {
                children: [this.props.getLeftContentForEntry ? this.props.getLeftContentForEntry(this.props.entry, this.props.selected) : null, j.jsx(b("TextWithHighlights.atlas"), {
                    className: "_4ku0",
                    highlight: this.props.queryString,
                    text: this.props.entry.getTitle(),
                    size: "s",
                    color: this.props.disabled ? "light" : "dark",
                    display: this.props.getLeftContentForEntry ? "inline" : "block"
                }), a ? j.jsx(b("TextWithHighlights.atlas"), {
                    className: "_4ku1",
                    color: "light",
                    display: "block",
                    highlight: this.props.queryString,
                    size: "s",
                    text: a
                }) : null]
            });
            c = this.props.disabled ? j.jsxs(b("Layout.react"), {
                children: [j.jsx(i, {
                    children: c
                }), j.jsx(h, {
                    children: j.jsxs(b("Text.atlas"), {
                        size: "s",
                        color: "light",
                        display: "block",
                        children: [" ", "?", " "]
                    })
                })]
            }) : c;
            a = "_4ku2" + (this.props.highlighted ? " _4ku3" : "") + (this.props.selected ? " _4ku4" : "") + (a ? "" : " _4ku5");
            return j.jsx("div", {
                className: a,
                "data-testid": void 0,
                onMouseDown: this.props.disabled ? null : this._onSelect,
                onMouseEnter: this._onHighlight,
                children: c
            })
        }
    })
}
), null);
__d("SearchableDropdownInput.contrib", ["cx", "AbstractSearchSource", "ContextualLayer.react", "ContextualLayerAutoFlip", "ContextualLayerHideOnScrollOverHeader.atlas", "ContextualLayerUpdateOnScroll", "Keys", "LayerAutoFocus", "LayerHideOnBlur", "LayerHideOnEscape", "React", "ReactComponentWithPureRenderMixin", "ReactDOM", "ReactLayeredComponentMixin_DEPRECATED", "SearchableListPrompt.contrib", "SUIAtlasTheme", "SUICardDEPRECATED.react", "Text.atlas", "XUIPopoverButton.react", "createReactClass_DEPRECATED", "joinClasses", "prop-types"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    c = b("createReactClass_DEPRECATED")({
        displayName: "SearchableDropdownInput",
        propTypes: {
            onSelect: (a = b("prop-types")).func.isRequired,
            resetQueryStringOnSelect: a.bool.isRequired,
            searchSource: a.instanceOf(b("AbstractSearchSource")).isRequired,
            showSelectedSubtitle: a.bool.isRequired,
            "data-testid": a.string,
            customHeader: a.element,
            chevron: a.element,
            disabled: a.bool,
            disabledEntryIDs: a.instanceOf(Set),
            dropdownWidth: a.number,
            emptySearchResultsText: a.node,
            excludedEntries: a.object,
            header: a.node,
            headerClassName: a.string,
            maxEntries: a.number,
            placeholder: a.node,
            searchSourceOptions: a.object,
            showEntriesBeforeSearch: a.bool,
            skipAutoWidth: a.bool,
            title: a.string,
            maxWidth: a.number,
            getLeftContentForEntry: a.func,
            searchPlaceholder: a.node
        },
        mixins: [b("ReactComponentWithPureRenderMixin"), b("ReactLayeredComponentMixin_DEPRECATED")],
        getDefaultProps: function() {
            return {
                resetQueryStringOnSelect: !1,
                showSelectedSubtitle: !0
            }
        },
        getInitialState: function() {
            return {
                isShowing: !1
            }
        },
        _onLayerToggle: function(a) {
            !a && this.state.isShowing && (this.setState({
                isShowing: !1
            }),
            this.focusInput())
        },
        _toggleLayer: function() {
            this.props.disabled || this.setState({
                isShowing: !this.state.isShowing
            })
        },
        _onKeyDown: function(a) {
            switch (a.keyCode) {
            case b("Keys").DOWN:
            case b("Keys").UP:
            case b("Keys").SPACE:
                this.setState({
                    isShowing: !0
                });
                break
            }
        },
        open: function() {
            this.setState({
                isShowing: !0
            })
        },
        close: function() {
            this.setState({
                isShowing: !1
            })
        },
        focusInput: function() {
            this.refs && b("ReactDOM").findDOMNode(this.refs.button).focus()
        },
        _onSelect: function(a) {
            this.setState({
                isShowing: !1
            }),
            this.focusInput(),
            this.props.onSelect(a)
        },
        renderLayers: function() {
            var a = this, c;
            this.props.skipAutoWidth || (c = b("ReactDOM").findDOMNode(this.refs.button).offsetWidth);
            c = this.props.dropdownWidth || c || null;
            return {
                prompt: h.jsx(b("ContextualLayer.react"), {
                    behaviors: {
                        ContextualLayerAutoFlip: b("ContextualLayerAutoFlip"),
                        ContextualLayerUpdateOnScroll: b("ContextualLayerUpdateOnScroll"),
                        ContextualLayerHideOnScrollOverHeader: b("ContextualLayerHideOnScrollOverHeader.atlas"),
                        LayerAutoFocus: b("LayerAutoFocus"),
                        LayerHideOnBlur: b("LayerHideOnBlur"),
                        LayerHideOnEscape: b("LayerHideOnEscape")
                    },
                    contextRef: function() {
                        return a.refs.button
                    },
                    position: "below",
                    alignment: "left",
                    offsetY: 4,
                    shown: this.state.isShowing,
                    autofocus: !0,
                    onToggle: this._onLayerToggle,
                    children: h.jsx("div", {
                        style: {
                            width: c
                        },
                        className: this.props.divClassName,
                        onFocus: this.props.onFocus,
                        children: h.jsxs(b("SUICardDEPRECATED.react"), {
                            className: this.props.listClassName,
                            theme: b("SUIAtlasTheme"),
                            type: "fullbleed",
                            children: [this.props.customHeader, h.jsx(b("SearchableListPrompt.contrib"), {
                                disabledEntryIDs: this.props.disabledEntryIDs,
                                emptySearchResultsText: this.props.emptySearchResultsText,
                                excludedEntries: this.props.excludedEntries,
                                header: this.props.header,
                                headerClassName: this.props.headerClassName,
                                maxEntries: this.props.maxEntries,
                                onSelect: this._onSelect,
                                resetQueryStringOnSelect: this.props.resetQueryStringOnSelect,
                                searchSource: this.props.searchSource,
                                placeholder: this.props.searchPlaceholder,
                                searchSourceOptions: this.props.searchSourceOptions,
                                selectedEntry: this.props.value,
                                showEntriesBeforeSearch: this.props.showEntriesBeforeSearch,
                                getLeftContentForEntry: this.props.getLeftContentForEntry
                            })]
                        })
                    })
                })
            }
        },
        render: function() {
            var a = this.props.placeholder
              , c = this.props.value;
            if (c) {
                var d = this.props.title || c.getTitle();
                c = this.props.showSelectedSubtitle && c.getSubtitle() ? h.jsxs(b("Text.atlas"), {
                    color: "light",
                    size: "s",
                    children: [" ", c.getSubtitle()]
                }) : null;
                a = h.jsxs("span", {
                    children: [d, c]
                })
            }
            return h.jsx(b("XUIPopoverButton.react"), {
                className: b("joinClasses")(this.props.className, "__yl"),
                chevron: this.props.chevron,
                "data-testid": void 0,
                disabled: this.props.disabled,
                ref: "button",
                label: a,
                onClick: this._toggleLayer,
                onKeyDown: this._onKeyDown,
                size: "large",
                maxwidth: this.props.maxWidth ? this.props.maxWidth : null
            })
        }
    });
    d = c;
    e.exports = d
}
), null);
__d("JobsFBLogger", ["FBLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("FBLogger")("job_search");
    e.exports = a
}
), null);
__d("JobOpeningSource", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        CATALOG: "catalog",
        JOBS_MANAGER: "jobs_manager",
        OTHER: "other",
        PAGE_COMPOSER: "page_composer",
        PAGE_POST: "page_post",
        PLATFORM: "platform",
        PLATFORM_PROVISIONED_API: "platform_provisioned_api",
        PLATFORM_PROVISIONED_FEED: "platform_provisioned_feed",
        SCRAPE: "scrape",
        TEST: "test",
        USER: "user_v2",
        USER_DEPRECATED_DO_NOT_USE: "user"
    });
    e.exports = a
}
), null);
__d("XPagesManagerManageJobsController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/{page_token}/manage_jobs/", {
        page_token: {
            type: "String",
            required: !0
        },
        business_id: {
            type: "Int"
        },
        init_composer: {
            type: "Bool",
            defaultValue: !1
        },
        init_composer_job_id: {
            type: "FBID"
        },
        init_composer_mode: {
            type: "Enum",
            enumType: 1
        },
        tab: {
            type: "Enum",
            enumType: 1
        },
        job_application_id: {
            type: "FBID"
        },
        referer_mechanism: {
            type: "Enum",
            enumType: 1
        },
        source: {
            type: "Enum",
            enumType: 1
        },
        post_text: {
            type: "String"
        },
        show_unread_only: {
            type: "Bool",
            defaultValue: !1
        }
    })
}
), null);
