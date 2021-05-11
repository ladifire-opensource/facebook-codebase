if (self.CavalryLogger) {
    CavalryLogger.start_js(["504Jr"]);
}

__d("mediaManagerFacebookPagePickerBrandedContentReducer", ["BCMPCreatorStudioRoutingUtils", "MediaManagerActionTypes", "MediaManagerAvailablePagesSelectors", "MediaManagerQueryParametersTypes", "MediaManagerRoutingUtils", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c) {
        switch (c.type) {
        case b("MediaManagerActionTypes").MediaManagerActionTypes.INITIALIZE_PAGE_PICKER:
            var d = b("BCMPCreatorStudioRoutingUtils").getCreatorPageID(b("MediaManagerRoutingUtils").getQueryParamValueByKeys([b("MediaManagerQueryParametersTypes").branded_content]).get(b("MediaManagerQueryParametersTypes").branded_content));
            if (d != null)
                return a.set("selectedSinglePageID", d).set("selectedPageIDs", b("immutable").List([d]));
            break;
        case b("MediaManagerActionTypes").MediaManagerActionTypes.SELECT_CONTEXT_DONE:
            d = b("BCMPCreatorStudioRoutingUtils").getBrandedContentQueryParam() != null ? b("BCMPCreatorStudioRoutingUtils").getCreatorPageID(b("MediaManagerRoutingUtils").getQueryParamValueByKeys([b("MediaManagerQueryParametersTypes").branded_content]).get(b("MediaManagerQueryParametersTypes").branded_content)) : b("BCMPCreatorStudioRoutingUtils").getDefaultPageID(b("immutable").List(c.allPages));
            if (d != null)
                return a.set("selectedSinglePageID", d).set("selectedPageIDs", b("immutable").List([d]));
            break;
        case b("MediaManagerActionTypes").MediaManagerActionTypes.SELECT_TAB:
            c = b("BCMPCreatorStudioRoutingUtils").getBrandedContentQueryParam() != null ? b("BCMPCreatorStudioRoutingUtils").getCreatorPageID(b("MediaManagerRoutingUtils").getQueryParamValueByKeys([b("MediaManagerQueryParametersTypes").branded_content]).get(b("MediaManagerQueryParametersTypes").branded_content)) : b("BCMPCreatorStudioRoutingUtils").getDefaultPageID(b("MediaManagerAvailablePagesSelectors").availablePagesSelector().getValue());
            if (c != null)
                return a.set("selectedSinglePageID", c)
        }
        return a
    }
}
), null);
__d("mediaManagerInstagramPagePickerBrandedContentReducer", ["BCMPCreatorStudioRoutingUtils", "MediaManagerActionTypes", "MediaManagerInstagramProfilesDataSelector", "MediaManagerQueryParametersTypes", "MediaManagerRoutingUtils", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c) {
        switch (c.type) {
        case b("MediaManagerActionTypes").MediaManagerActionTypes.INITIALIZE_IG_PAGE_PICKER:
            var d = b("BCMPCreatorStudioRoutingUtils").getCreatorPageID(b("MediaManagerRoutingUtils").getQueryParamValueByKeys([b("MediaManagerQueryParametersTypes").branded_content]).get(b("MediaManagerQueryParametersTypes").branded_content));
            if (d != null)
                return a.set("selectedSingleProfileID", d).set("selectedProfileIDs", b("immutable").List([d]));
            break;
        case b("MediaManagerActionTypes").MediaManagerActionTypes.SELECT_CONTEXT_DONE:
            d = b("BCMPCreatorStudioRoutingUtils").getBrandedContentQueryParam() != null ? b("BCMPCreatorStudioRoutingUtils").getCreatorPageID(b("MediaManagerRoutingUtils").getQueryParamValueByKeys([b("MediaManagerQueryParametersTypes").branded_content]).get(b("MediaManagerQueryParametersTypes").branded_content)) : b("BCMPCreatorStudioRoutingUtils").getDefaultIGProfileID(b("immutable").List(c.instagramProfiles));
            if (d != null)
                return a.set("selectedSingleProfileID", d).set("selectedProfileIDs", b("immutable").List([d]));
            break;
        case b("MediaManagerActionTypes").MediaManagerActionTypes.SELECT_TAB:
            c = b("BCMPCreatorStudioRoutingUtils").getBrandedContentQueryParam() != null ? b("BCMPCreatorStudioRoutingUtils").getCreatorPageID(b("MediaManagerRoutingUtils").getQueryParamValueByKeys([b("MediaManagerQueryParametersTypes").branded_content]).get(b("MediaManagerQueryParametersTypes").branded_content)) : b("BCMPCreatorStudioRoutingUtils").getDefaultIGProfileID(b("MediaManagerInstagramProfilesDataSelector").allInstagramProfiles().getValue());
            if (c != null)
                return a.set("selectedSingleProfileID", c)
        }
        return a
    }
}
), null);
__d("MediaManagerABTestingComposerIntegrationActions", ["MediaManagerActionTypes", "MediaManagerDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.COMPOSER_AB_TESTING_ON_CREATION_BUTTON_ENTRYPOINT_CLICK,
            entryPoint: a
        })
    }
    ;
    f.launchABTestingTray = a;
    c = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.COMPOSER_AB_TESTING_ON_CREATION_ENTRYPOINT_SELECT_PAGE_TRAY_HIDE,
            entryPoint: a
        })
    }
    ;
    f.hideABTestingTray = c
}
), null);
__d("XVideoComposerThumbnailUploadController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/video/composer/thumbnail_upload/", {})
}
), null);
