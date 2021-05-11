if (self.CavalryLogger) {
    CavalryLogger.start_js(["zWSUz"]);
}

__d("contextPageToAvailablePage", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        return {
            id: a.id,
            name: a.name,
            thumbnail: a.thumbnail
        }
    }
}
), null);
__d("mediaManagerRoutingBrandedContentReducer", ["BCMPCreatorStudioRoutingUtils", "MediaManagerActionTypes", "MediaManagerAvailablePagesSelectors", "MediaManagerInstagramProfilesDataSelector", "MediaManagerNavigationStore", "MediaManagerQueryParametersTypes", "MediaManagerRoutingUtils", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c) {
        if (b("MediaManagerNavigationStore").selectedTab() === "monetization_branded_content" || b("MediaManagerNavigationStore").selectedTab() === "instagram_monetization_branded_content") {
            var d = a;
            switch (c.type) {
            case b("MediaManagerActionTypes").MediaManagerActionTypes.ON_CLICK_PAGE_ITEM:
                d = d.set(b("MediaManagerQueryParametersTypes").branded_content, b("BCMPCreatorStudioRoutingUtils").getBrandedContentParamsForPageID(c.page.id));
                b("MediaManagerRoutingUtils").updateURI(d);
                break;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SELECT_CONTEXT_DONE:
                if (b("BCMPCreatorStudioRoutingUtils").getBrandedContentQueryParam() == null) {
                    var e = b("MediaManagerNavigationStore").selectedMode() === "facebook" ? b("BCMPCreatorStudioRoutingUtils").getDefaultPageID(b("immutable").List(c.allPages)) : b("BCMPCreatorStudioRoutingUtils").getDefaultIGProfileID(b("immutable").List(c.instagramProfiles));
                    e != null && (d = d.set(b("MediaManagerQueryParametersTypes").branded_content, b("BCMPCreatorStudioRoutingUtils").getBrandedContentParamsForPageID(e)),
                    b("MediaManagerRoutingUtils").updateURI(d))
                }
                break;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.PICKER_SELECT_SINGLE_PAGE:
                d = d.set(b("MediaManagerQueryParametersTypes").branded_content, b("BCMPCreatorStudioRoutingUtils").getBrandedContentParamsForPageID(c.selectedSinglePageID));
                b("MediaManagerRoutingUtils").updateURI(d);
                break;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SELECT_SINGLE_IG_PROFILE:
                c.selectedSingleProfileID != null && (d = d.set(b("MediaManagerQueryParametersTypes").branded_content, b("BCMPCreatorStudioRoutingUtils").getBrandedContentParamsForPageID(c.selectedSingleProfileID)),
                b("MediaManagerRoutingUtils").updateURI(d));
                break;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SELECT_TAB:
                e = null;
                b("BCMPCreatorStudioRoutingUtils").getBrandedContentQueryParam() != null ? e = b("BCMPCreatorStudioRoutingUtils").getCreatorPageID(b("MediaManagerRoutingUtils").getQueryParamValueByKeys([b("MediaManagerQueryParametersTypes").branded_content]).get(b("MediaManagerQueryParametersTypes").branded_content)) : e = b("MediaManagerNavigationStore").selectedMode() === "facebook" ? b("BCMPCreatorStudioRoutingUtils").getDefaultPageID(b("MediaManagerAvailablePagesSelectors").availablePagesSelector().getValue()) : b("BCMPCreatorStudioRoutingUtils").getDefaultIGProfileID(b("MediaManagerInstagramProfilesDataSelector").allInstagramProfiles().getValue());
                e != null && (d = d.set(b("MediaManagerQueryParametersTypes").branded_content, b("BCMPCreatorStudioRoutingUtils").getBrandedContentParamsForPageID(e)),
                b("MediaManagerRoutingUtils").updateURI(d))
            }
            return d
        }
        return a
    }
}
), null);
__d("MediaManagerInboxPlusRoutingUtils", ["FBJSON", "MediaManagerQueryParametersTypes", "MediaManagerRoutingUtils", "PageCommItemFolder", "PageCommPlatform", "recollectParser"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getInboxPlusQueryParam = a;
    f.getInboxPlusSelecedItem = c;
    function a() {
        return b("MediaManagerRoutingUtils").getQueryParamValueByKeys([b("MediaManagerQueryParametersTypes").inbox_item]).get(b("MediaManagerQueryParametersTypes").inbox_item)
    }
    function c(a) {
        if (a == null)
            return null;
        try {
            a = b("FBJSON").parse(a);
            return !(a instanceof Object) ? null : {
                folder: b("recollectParser").required["enum"](a, ["folder"], b("PageCommItemFolder")),
                id: b("recollectParser").required.fbid(a, ["id"]),
                platform: b("recollectParser").required["enum"](a, ["platform"], b("PageCommPlatform"))
            }
        } catch (a) {
            return null
        }
    }
}
), null);
__d("CreatorStudioTopPriorityCardsActions", ["MediaManagerActionTypes", "MediaManagerDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.TOP_PRIORITY_CARDS_DISMISSAL,
            tipID: a
        })
    }
    ;
    f.dismissCard = a
}
), null);
__d("MediaManagerNotificationPillActions", ["MediaManagerActionTypes", "MediaManagerDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CLOSE_NOTIFICATION
        })
    }
    ;
    f.closeNotificationPill = a;
    c = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.PUSH_NOTIFICATION,
            notificationData: a
        })
    }
    ;
    f.pushNotificationPill = c
}
), null);
__d("MediaManagerShowsActions", ["MediaManagerActionTypes", "MediaManagerDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_SEASONS_TRAY_SELECT_TAB,
            selectedTab: a
        })
    }
    ;
    f.selectShowsSeasonsTrayTab = a;
    c = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_SELECT_PAGE,
            page: a
        })
    }
    ;
    f.selectPage = c;
    d = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_SET_DESCRIPTION,
            description: a
        })
    }
    ;
    f.setDescription = d;
    e = function(a, c) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_SET_COVER_PHOTO,
            coverPhotoURI: a,
            coverPhotoID: c
        })
    }
    ;
    f.setCoverPhoto = e;
    a = function(a, c) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_SET_POSTER_ART,
            posterArtURI: a,
            posterArtID: c
        })
    }
    ;
    f.setPosterArt = a;
    c = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_SET_SERIALIZED,
            serialized: a
        })
    }
    ;
    f.setSerialized = c;
    d = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_SET_TITLE,
            title: a
        })
    }
    ;
    f.setTitle = d;
    e = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_LAUNCH_CREATE_SHOW_TRAY
        })
    }
    ;
    f.launchCreateShowTray = e;
    a = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_EXIT_CREATE_OR_EDIT_SHOW_TRAY_ATTEMPT
        })
    }
    ;
    f.exitCreateOrEditShowTrayAttempt = a;
    c = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_EXIT_CREATE_OR_EDIT_SHOW_TRAY_ATTEMPT_CANCEL
        })
    }
    ;
    f.exitCreateOrEditShowTrayAttemptCancel = c;
    d = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_EXIT_CREATE_OR_EDIT_SHOW_TRAY_CONFIRM
        })
    }
    ;
    f.exitCreateOrEditShowTrayConfirm = d;
    e = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_EXIT_SHOW_DETAILS_TRAY_ATTEMPT
        })
    }
    ;
    f.exitShowDetailsTrayAttempt = e;
    a = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_EXIT_SHOW_DETAILS_TRAY_ATTEMPT_CANCEL
        })
    }
    ;
    f.exitShowDetailsTrayAttemptCancel = a;
    c = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_EXIT_SHOW_DETAILS_TRAY_DELETE_SHOW
        })
    }
    ;
    f.exitShowDetailsTrayDeleteShow = c;
    d = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_DELETE_SHOW_SUCCESS,
            showIDs: a
        })
    }
    ;
    f.deleteShowSuccess = d;
    e = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_CREATE_OR_EDIT_SHOW_CLICK
        })
    }
    ;
    f.createOrEditShowClick = e;
    a = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_CREATE_OR_EDIT_SHOW_SUCCESS,
            showID: a
        })
    }
    ;
    f.createOrEditShowSuccess = a;
    c = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_CREATE_OR_EDIT_SHOW_FAILURE,
            creationErrorCode: a
        })
    }
    ;
    f.createOrEditShowFailure = c;
    d = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_DELETE_SHOWS,
            showIDs: a
        })
    }
    ;
    f.deleteShows = d;
    e = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_DELETE_SEASONS,
            seasonIDs: a
        })
    }
    ;
    f.deleteSeasons = e;
    a = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_PUBLISH_SHOW_FOR_DOGFOODING_CLICK
        })
    }
    ;
    f.publishShowForDogfoodingClick = a;
    c = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_PUBLISH_SHOW_CLICK
        })
    }
    ;
    f.publishShowClick = c;
    d = function(a, c, d, e) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_PUBLISH_ACTION_SAVE_SUCCESS,
            showOrSeasonID: a,
            isActionOnSeason: c,
            publishingStateID: d,
            publishingStatus: e
        })
    }
    ;
    f.publishActionSaveSuccess = d;
    e = function(a, c) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_PUBLISH_SHOW_PROGRESSED,
            currentVideoIndex: a,
            totalVideosCount: c
        })
    }
    ;
    f.publishShowProgressed = e;
    a = function(a, c) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_PUBLISH_ACTION_SAVE_FAILURE,
            publishingErrorCode: a,
            isActionOnSeason: c
        })
    }
    ;
    f.publishActionSaveFailure = a;
    c = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_SAVE_AS_DRAFT_CLICK
        })
    }
    ;
    f.saveAsDraftClick = c;
    d = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_EDIT_METADATA_CLICK
        })
    }
    ;
    f.editMetadataClick = d;
    e = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_VIEW_SHOW_DETAILS_CLICKED,
            showMetadata: a
        })
    }
    ;
    f.viewShowDetailsClicked = e;
    a = function(a, c) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_LAUNCH_COMPOSER,
            fileInput: a,
            seasonID: c
        })
    }
    ;
    f.launchComposer = a;
    c = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_COMPOSER_INIT_SUCCESS,
            videoComposerID: a
        })
    }
    ;
    f.composerInitSuccess = c;
    d = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_CLOSE_COMPOSER_ATTEMPT
        })
    }
    ;
    f.closeComposerAttempt = d;
    e = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_CLOSE_COMPOSER_CONFIRM
        })
    }
    ;
    f.closeComposerConfirm = e;
    a = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_LAUNCH_TRAILER_COMPOSER,
            fileInput: a
        })
    }
    ;
    f.launchTrailerComposer = a;
    c = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_OPEN_ADD_VIDEOS_TRAY,
            seasonID: a
        })
    }
    ;
    f.openAddVideosTray = c;
    d = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_CLOSE_ADD_VIDEOS_TRAY
        })
    }
    ;
    f.closeAddVideosTray = d;
    e = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_LAUNCH_CREATE_SEASON_TRAY
        })
    }
    ;
    f.launchCreateSeasonTray = e;
    a = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_EXIT_CREATE_OR_EDIT_SEASON_TRAY_ATTEMPT
        })
    }
    ;
    f.exitCreateOrEditSeasonTrayAttempt = a;
    c = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_EXIT_CREATE_OR_EDIT_SEASON_TRAY_ATTEMPT_CANCEL
        })
    }
    ;
    f.exitCreateOrEditSeasonTrayAttemptCancel = c;
    d = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_EXIT_CREATE_OR_EDIT_SEASON_TRAY_CONFIRM
        })
    }
    ;
    f.exitCreateOrEditSeasonTrayConfirm = d;
    e = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_SAVE_ADDED_VIDEOS,
            videoIDs: a
        })
    }
    ;
    f.saveAddedVideos = e;
    a = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_SAVE_ADDED_VIDEOS_SUCCESS
        })
    }
    ;
    f.saveAddedVideosSuccess = a;
    c = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_SAVE_ADDED_VIDEOS_PARTIAL_SUCCESS,
            failedIDs: a
        })
    }
    ;
    f.saveAddedVideosPartialSuccess = c;
    d = function(a, c) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_SAVE_ADDED_VIDEOS_FAILURE,
            errorSummary: a,
            errorDescription: c
        })
    }
    ;
    f.saveAddedVideosFailure = d;
    e = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_VIEW_SEASON_DETAILS_CLICKED,
            seasonMetadata: a
        })
    }
    ;
    f.viewSeasonDetailsClicked = e;
    a = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_VIEW_SEASON_FROM_DROPDOWN_MENU_CLICKED,
            seasonMetadata: a
        })
    }
    ;
    f.viewSeasonFromDropdownMenuClicked = a;
    c = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_EXIT_SEASON_DETAILS_TRAY_ATTEMPT
        })
    }
    ;
    f.exitSeasonDetailsTrayAttempt = c;
    d = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_EXIT_SEASON_DETAILS_TRAY_ATTEMPT_CANCEL
        })
    }
    ;
    f.exitSeasonDetailsTrayAttemptCancel = d;
    e = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_SEASON_SAVE_AS_DRAFT_CLICK
        })
    }
    ;
    f.seasonSaveAsDraftClick = e;
    a = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_EXIT_SEASON_AND_DELETE_CLICK
        })
    }
    ;
    f.exitSeasonAndDeleteClick = a;
    c = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_DELETE_SEASONS_SUCCESS,
            seasonIDs: a
        })
    }
    ;
    f.deleteSeasonsSuccess = c;
    d = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_DELETE_SEASONS_FAILURE
        })
    }
    ;
    f.deleteSeasonsFailure = d;
    e = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_EDIT_SEASON_METADATA_CLICK
        })
    }
    ;
    f.editSeasonMetadataClick = e;
    a = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_UPLOAD_VIDEO_SUCCESS
        })
    }
    ;
    f.uploadVideoSuccess = a;
    c = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_UPLOAD_TRAILER_SUCCESS,
            videoID: a
        })
    }
    ;
    f.uploadTrailerSuccess = c;
    d = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_REMOVE_TRAILER,
            trailerID: a
        })
    }
    ;
    f.removeTrailer = d;
    e = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_REMOVE_TRAILER_SUCCESS,
            trailerID: a
        })
    }
    ;
    f.removeTrailerSuccess = e;
    a = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_REMOVE_TRAILER_FAILURE,
            error: a
        })
    }
    ;
    f.removeTrailerFailure = a;
    c = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_CLEAR_TRAILER_ID
        })
    }
    ;
    f.clearTrailerID = c;
    d = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_SET_SEASON_NUMBER,
            seasonNumber: a
        })
    }
    ;
    f.setSeasonNumber = d;
    e = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_SET_SEASON_TITLE,
            title: a
        })
    }
    ;
    f.setSeasonTitle = e;
    a = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_SET_SEASON_DESCRIPTION,
            description: a
        })
    }
    ;
    f.setSeasonDescription = a;
    c = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_HIDE_ADD_VIDEOS_FAILURE_DIALOG
        })
    }
    ;
    f.hideAddVideosFailureDialog = c;
    d = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_HIDE_ADD_VIDEOS_PARTIAL_SUCCESS_DIALOG
        })
    }
    ;
    f.hideAddVideosPartialSuccessDialog = d;
    e = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_HIDE_CREATE_OR_EDIT_FAILURE_DIALOG
        })
    }
    ;
    f.hideCreateOrEditSeriesFailureDialog = e;
    a = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_HIDE_CREATE_OR_EDIT_SEASON_FAILURE_DIALOG
        })
    }
    ;
    f.hideCreateOrEditSeasonFailureDialog = a;
    c = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_HIDE_REORDER_EPISODE_FAILURE_DIALOG
        })
    }
    ;
    f.hideReorderEpisodeFailureDialog = c;
    d = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_CREATE_OR_EDIT_SEASON_SAVE_CLICK
        })
    }
    ;
    f.createOrEditSeasonSaveClick = d;
    e = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_CREATE_OR_EDIT_SEASON_SUCCESS,
            seasonID: a
        })
    }
    ;
    f.createOrEditSeasonSuccess = e;
    a = function(a, c) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_CREATE_OR_EDIT_SEASON_FAILURE,
            errorSummary: a,
            errorDescription: c
        })
    }
    ;
    f.createOrEditSeasonFailure = a;
    c = function(a, c) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_SET_SEASON_COVER_PHOTO,
            coverPhotoURI: a,
            coverPhotoID: c
        })
    }
    ;
    f.setSeasonCoverPhoto = c;
    d = function(a, c) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_REMOVE_EPISODES,
            seasonID: a,
            episodeIDs: c
        })
    }
    ;
    f.removeEpisodes = d;
    e = function(a, c) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_REMOVE_EPISODES_SUCCESS,
            seasonID: a,
            episodeIDs: c
        })
    }
    ;
    f.removeEpisodesSuccess = e;
    a = function(a, c, d) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_REMOVE_EPISODES_FAILURE,
            seasonID: a,
            episodeIDs: c,
            error: d
        })
    }
    ;
    f.removeEpisodesFailure = a;
    c = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_LAUNCH_REORDER_TRAY,
            seasonID: a
        })
    }
    ;
    f.launchReorderTray = c;
    d = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_REORDER_TRAY_PLAYBACK_ORDER_CHANGE,
            isSerialized: a
        })
    }
    ;
    f.reorderTrayPlaybackOrderChange = d;
    e = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_REORDER_TRAY_ADD_EMPTY_ROW
        })
    }
    ;
    f.reorderTrayAddEmptyRow = e;
    a = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_REORDER_TRAY_REMOVE_ITEM,
            index: a
        })
    }
    ;
    f.reorderTrayRemoveItem = a;
    c = function(a, c) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_REORDER_TRAY_REORDER_EPISODES,
            sourceIndex: a,
            targetIndex: c
        })
    }
    ;
    f.reorderEpisodes = c;
    d = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_REORDER_TRAY_SAVE_CLICK
        })
    }
    ;
    f.reorderTraySaveClick = d;
    e = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_REORDER_TRAY_SAVE_SUCCESS
        })
    }
    ;
    f.reorderTraySaveSuccess = e;
    a = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_REORDER_TRAY_SAVE_FAILURE
        })
    }
    ;
    f.reorderTraySaveFailure = a;
    c = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_RESET
        })
    }
    ;
    f.reset = c;
    d = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_RESET_SEASON_TRAY
        })
    }
    ;
    f.resetSeasonTray = d;
    e = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_EXIT_REORDER_TRAY_ATTEMPT
        })
    }
    ;
    f.exitReorderTrayAttempt = e;
    a = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_PUBLISH_SEASON_FOR_DOGFOODING_CLICK
        })
    }
    ;
    f.publishSeasonForDogfoodingClick = a;
    c = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_PUBLISH_SEASON_CLICK
        })
    }
    ;
    f.publishSeasonClick = c;
    d = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_LAUNCH_SHOWMARK_TRAY
        })
    }
    ;
    f.launchShowmarkTray = d;
    e = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_EXIT_SHOWMARK_TRAY
        })
    }
    ;
    f.exitShowmarkTray = e;
    a = function(a, c) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_SET_SHOWMARK,
            showmarkURI: a,
            showmarkID: c
        })
    }
    ;
    f.setShowmark = a;
    c = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_DISPLAY_INVALID_EPISODE_CONFIRM_DIALOG
        })
    }
    ;
    f.displayInvalidEpisodeConfirmDialog = c;
    d = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_HIDE_INVALID_EPISODE_CONFIRM_DIALOG
        })
    }
    ;
    f.hideInvalidEpisodeConfirmDialog = d;
    e = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_SHOW_OR_SEASON_PUBLISHING_ERROR_DIALOG_CLOSE_CLICK
        })
    }
    ;
    f.showOrSeasonPublishingErrorDialogCloseClick = e;
    a = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_PUBLISH_DOGFOODED_SHOW_CLICK,
            showMetadata: a
        })
    }
    ;
    f.publishDogfoodedShowClick = a;
    c = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_PUBLISH_DOGFOODED_SHOW_CONFIRM,
            showMetadata: a
        })
    }
    ;
    f.publishDogfoodedShowConfirm = c;
    d = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_PUBLISH_DOGFOODED_SEASON,
            seasonMetadata: a
        })
    }
    ;
    f.publishDogfoodedSeasonClick = d;
    e = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_UPDATE_SHOW_OR_SEASON_SCHEDULE_PUBLISH_TIME,
            schedulePublishTime: a
        })
    }
    ;
    f.updateSeriesOrSeasonSchedulePublishTime = e;
    a = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_PUBLISHING_TYPE_SELECTED,
            publishingType: a
        })
    }
    ;
    f.publishingTypeSelected = a;
    c = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_SHOWS_PUBLISHING_TYPE_SAVE_CLICK
        })
    }
    ;
    f.publishingTypeSaveClick = c
}
), null);
__d("MediaManagerBulkUpload3PImporterActions", ["MediaManagerActionTypes", "MediaManagerDispatcher", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a, c) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.COMPOSER_BULK_UPLOAD_SHOW_YT_IMPORTER_EMPTY_PANEL,
            eventSource: a,
            sessionID: c
        })
    }
    ;
    f.showYTImporterEmptyPanel = a;
    c = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.COMPOSER_BULK_UPLOAD_HIDE_YT_IMPORTER_EMPTY_PANEL
        })
    }
    ;
    f.hideYTImporterEmptyPanel = c;
    d = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.COMPOSER_BULK_UPLOAD_ZIP_FILE_ADDED,
            zipFile: a
        })
    }
    ;
    f.zipFileAdded = d;
    e = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.COMPOSER_BULK_UPLOAD_PREPARE_ZIP_FILE_UPLOAD,
            page: a
        })
    }
    ;
    f.prepareZipFileUpload = e;
    a = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.COMPOSER_BULK_UPLOAD_BEGIN_ZIP_FILE_UPLOAD,
            zipFileNameToStatusEntID: a
        })
    }
    ;
    f.beginZipFileUpload = a;
    c = function(a, c, d, e) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.COMPOSER_BULK_UPLOAD_UPDATE_ZIP_UPLOAD_PROGRESS,
            status: a,
            progress: c,
            fileHandle: d,
            error: e
        })
    }
    ;
    f.updateZipUploadProgress = c;
    d = function(a, c, d) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.COMPOSER_BULK_UPLOAD_UPDATE_ZIP_IMPORT_PROGRESS,
            completedVideos: a,
            totalVideos: c,
            status: d
        })
    }
    ;
    f.updateZipImportProgress = d;
    e = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.COMPOSER_BULK_UPLOAD_COLLAPSE_PROGRESS_PANEL
        })
    }
    ;
    f.collapseProgressPanel = e;
    a = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.COMPOSER_BULK_UPLOAD_VIEW_PROGRESS_PANEL
        })
    }
    ;
    f.viewProgressPanel = a;
    c = function(a, c, d, e, f, g, h, i, j) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.COMPOSER_BULK_UPLOAD_INIT_YT_IMPORTER_PANEL_AFTER_RELOAD,
            zipFileName: a,
            zipStateEntID: c,
            sessionID: d,
            completedVideos: e,
            totalVideos: f,
            zipStatus: g,
            importerTargetPage: h,
            importErrorToVideoFileNamesMap: i,
            lastUpdateTime: j
        })
    }
    ;
    f.initYTImporterPanelAfterReload = c;
    d = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.COMPOSER_BULK_UPLOAD_CLICK_TOAST_CTA
        })
    }
    ;
    f.clickToastCTA = d;
    e = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.COMPOSER_BULK_UPLOAD_UPDATE_IMPORT_ERRORS_MAP,
            importErrorToVideoFileNamesMap: a
        })
    }
    ;
    f.updateImportErrorsMap = e;
    a = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.COMPOSER_BULK_UPLOAD_GO_TO_DRAFTS_AND_RESET
        })
    }
    ;
    f.goToDraftsAndReset = a;
    c = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.COMPOSER_BULK_UPLOAD_NAVIGATE_AWAY_FROM_UPLOAD_PROGRESS
        })
    }
    ;
    f.navigateAwayFromUploadProgress = c;
    d = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.COMPOSER_BULK_UPLOAD_EXIT_YT_IMPORTER_PANEL_ATTEMPT
        })
    }
    ;
    f.exitYTImporterPanelAttempt = d;
    e = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.COMPOSER_BULK_UPLOAD_EXIT_YT_IMPORTER_PANEL_CONFIRM
        })
    }
    ;
    f.exitYTImporterPanelConfirm = e;
    a = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.COMPOSER_BULK_UPLOAD_EXIT_YT_IMPORTER_PANEL_CANCEL
        })
    }
    ;
    f.exitYTImporterPanelCancel = a;
    c = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.COMPOSER_BULK_UPLOAD_SET_PROCESSING_TIMEOUT_HANDLE,
            processingTimeoutHandle: a
        })
    }
    ;
    f.setProcessingTimeoutHandle = c;
    d = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.COMPOSER_BULK_UPLOAD_SET_SUBSCRIPTION_TOKEN,
            subscriptionToken: a
        })
    }
    ;
    f.setSubscriptionToken = d;
    e = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.COMPOSER_BULK_UPLOAD_HIDE_EXCEEDED_FILE_SIZE_LIMIT_DIALOG
        })
    }
    ;
    f.hideExceededFileSizeLimitDialog = e
}
), null);
__d("MediaManagerInstagramAccountsPickerActions", ["MediaManagerActionTypes", "MediaManagerDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.OPEN_INSTAGRAM_ACCOUNTS_PICKER_MENU
        })
    }
    ;
    f.openInstagramAccountsPickerMenu = a;
    c = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CLOSE_INSTAGRAM_ACCOUNTS_PICKER_MENU
        })
    }
    ;
    f.closeInstagramAccountsPickerMenu = c;
    d = function(a, c) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.SELECT_INSTAGRAM_ACCOUNT,
            accountID: a,
            account: c
        })
    }
    ;
    f.selectInstagramAccount = d;
    e = function(a, c) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.SELECT_SINGLE_INSTAGRAM_ACCOUNT,
            accountID: a,
            account: c
        })
    }
    ;
    f.selectSingleInstagramAccount = e;
    a = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.APPLY_INSTAGRAM_ACCOUNTS,
            accounts: a
        })
    }
    ;
    f.applyInstagramAccounts = a;
    c = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.APPLY_SINGLE_INSTAGRAM_ACCOUNT,
            account: a
        })
    }
    ;
    f.applySingleInstagramAccounts = c;
    d = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.SELECT_ALL_ACCOUNTS,
            availableAccounts: a
        })
    }
    ;
    f.selectAllAccounts = d;
    e = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.UNSELECT_ALL_ACCOUNTS
        })
    }
    ;
    f.unselectAllAccounts = e
}
), null);
__d("MediaManagerErrorDialog.react", ["fbt", "GeoButton.react", "GeoModal.react", "GeoModalFooter.react", "GeoModalHeader.react", "GeoSection.react", "LayerFadeOnHide", "LayerHideOnEscape", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        var c = h.useState(!0)
          , d = c[0]
          , e = c[1];
        c = h.useCallback(function() {
            return e(!1)
        }, []);
        return h.jsx(b("GeoModal.react"), {
            behaviors: {
                LayerFadeOnHide: b("LayerFadeOnHide"),
                LayerHideOnEscape: b("LayerHideOnEscape")
            },
            footer: h.jsx(b("GeoModalFooter.react"), {
                primaryButton: h.jsx(b("GeoButton.react"), {
                    label: g._("OK"),
                    variant: "primary",
                    onClick: c
                })
            }),
            header: h.jsx(b("GeoModalHeader.react"), {
                heading: a.title
            }),
            isShown: d,
            onHide: c,
            children: h.jsx(b("GeoSection.react"), {
                children: a.body
            })
        })
    }
}
), null);
__d("showMediaManagerErrorDialog", ["DOM", "MediaManagerErrorDialog.react", "React", "ReactDOM"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a, c) {
        b("ReactDOM").render(g.jsx(b("MediaManagerErrorDialog.react"), {
            body: c,
            title: a
        }), b("DOM").create("div"))
    }
}
), null);
__d("MediaManagerMultipleContentTableBaseStore", ["CreatorStudioLoggerStoreUtils", "FluxReduceStore", "MediaManagerActionTypes", "MediaManagerDispatcher", "MediaManagerQueryParametersTypes", "MediaManagerRoutingUtils", "adsCreateSelector", "adsStoreToSelector"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c, d) {
            var f;
            f = a.call(this, b("MediaManagerDispatcher")) || this;
            f.selectedTableSelector = b("adsCreateSelector")([b("adsStoreToSelector")(babelHelpers.assertThisInitialized(f))], function() {
                return f.getSelectedTable()
            }, {
                name: e.id
            });
            f.$MediaManagerMultipleContentTableBaseStore1 = c;
            f.$MediaManagerMultipleContentTableBaseStore2 = d;
            return f
        }
        var d = c.prototype;
        d.reduce = function(a, c) {
            switch (c.type) {
            case b("MediaManagerActionTypes").MediaManagerActionTypes.INITIALIZE:
                var d = b("MediaManagerRoutingUtils").getQueryParamValueByKeys([b("MediaManagerQueryParametersTypes").content_table]).get(b("MediaManagerQueryParametersTypes").content_table);
                return this.$MediaManagerMultipleContentTableBaseStore3(a, d);
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SELECT_CONTENT_TABLE:
                b("CreatorStudioLoggerStoreUtils").creatorStudioSafelyLogEvent("select_content_table", "content_table");
                return this.$MediaManagerMultipleContentTableBaseStore3(a, c.contentTable);
            default:
                return a
            }
        }
        ;
        d.$MediaManagerMultipleContentTableBaseStore3 = function(a, b) {
            var c = this.$MediaManagerMultipleContentTableBaseStore1.find(function(a) {
                return a === b
            });
            return c ? a.set("selectedTable", c) : a
        }
        ;
        d.getSelectedTable = function() {
            return this.getState().get("selectedTable")
        }
        ;
        d.getTables = function() {
            return this.$MediaManagerMultipleContentTableBaseStore1
        }
        ;
        return c
    }(b("FluxReduceStore"));
    e.exports = a;
    a.__moduleID = e.id
}
), null);
__d("MediaManagerTablesByTab", ["flatMapArray", "immutable", "objectEntries"], (function(a, b, c, d, e, f) {
    "use strict";
    c = (a = {},
    a.content_posts = ["ALL_POSTS", "POSTED_POSTS", "SCHEDULED_POSTS", "DRAFT_POSTS", "EXPIRED_POSTS", "EXPIRING_POSTS"],
    a.content_shows = ["SHOWS"],
    a.content_playlists = ["PLAYLISTS"],
    a.instagram_content_posts = ["INSTAGRAM_POSTS", "INSTAGRAM_VIDEO_POSTS", "INSTAGRAM_PHOTO_POSTS", "INSTAGRAM_CAROUSEL_POSTS", "INSTAGRAM_STORIES_POSTS", "INSTAGRAM_IGTV_POSTS"],
    a.live_linear_video_channels = ["LIVE_LINEAR_VIDEO_CHANNELS"],
    a.rights_manager_reference_library = ["RIGHTS_MANAGER_REFERENCE_LIBRARY_ALL_FILES", "RIGHTS_MANAGER_SOUND_RECORDINGS_ALL_FILES", "RIGHTS_MANAGER_REFERENCE_LIBRARY_PMVS", "RIGHTS_MANAGER_REFERENCE_LIBRARY_CONFLICTS", "RIGHTS_MANAGER_REFERENCE_LIBRARY_POSSIBLE_CONFLICTS", "RIGHTS_MANAGER_REFERENCE_LIBRARY_RESOLUTIONS", "RIGHTS_MANAGER_REFERENCE_LIBRARY_ALL_IMAGES", "RIGHTS_MANAGER_REFERENCE_LIBRARY_IMAGE_CONFLICTS", "RIGHTS_MANAGER_REFERENCE_LIBRARY_IMAGE_RESOLUTIONS", "RIGHTS_MANAGER_REFERENCE_LIBRARY_SOUND_RECORDING_CONFLICTS", "RIGHTS_MANAGER_REFERENCE_LIBRARY_SOUND_RECORDING_RESOLUTIONS"],
    a.rights_manager_audio_releases = ["RIGHTS_MANAGER_AUDIO_RELEASES"],
    a.rights_manager_matching_videos = ["RIGHTS_MANAGER_MATCHING_VIDEOS_ALL_MATCHES", "RIGHTS_MANAGER_MATCHING_VIDEOS_MONITORED", "RIGHTS_MANAGER_MATCHING_VIDEOS_BLOCKED", "RIGHTS_MANAGER_MATCHING_VIDEOS_COLLECT_AD_EARNINGS", "RIGHTS_MANAGER_MATCHING_VIDEOS_TAKEDOWNS", "RIGHTS_MANAGER_PUBLISHER_MATCHING_VIDEOS_MANUAL_REVIEW"],
    a.rights_manager_match_rules = ["RIGHTS_MANAGER_MATCH_RULES"],
    a.rights_manager_manual_claim = ["RIGHTS_MANAGER_MANUAL_CLAIM_FACEBOOK", "RIGHTS_MANAGER_MANUAL_CLAIM_INSTAGRAM"],
    a.rights_manager_compositions = ["RIGHTS_MANAGER_COMPOSITIONS_ALL_FILES", "RIGHTS_MANAGER_COMPOSITIONS_CONFLICTS"],
    a);
    f.MAP = c;
    d = b("immutable").Map(b("flatMapArray")(b("objectEntries")(c), function(a) {
        var b = a[0];
        a = a[1];
        return a.map(function(a) {
            return [a, b]
        })
    }));
    f.INVERSE_MAP = d;
    a = (e = {},
    e.content_posts = "ALL_POSTS",
    e.content_shows = "SHOWS",
    e.content_playlists = "PLAYLISTS",
    e.instagram_content_posts = "INSTAGRAM_POSTS",
    e.live_linear_video_channels = "LIVE_LINEAR_VIDEO_CHANNELS",
    e.rights_manager_reference_library = "RIGHTS_MANAGER_REFERENCE_LIBRARY_ALL_FILES",
    e.rights_manager_audio_releases = "RIGHTS_MANAGER_AUDIO_RELEASES",
    e.rights_manager_matching_videos = "RIGHTS_MANAGER_MATCHING_VIDEOS_ALL_MATCHES",
    e.rights_manager_match_rules = "RIGHTS_MANAGER_MATCH_RULES",
    e.rights_manager_manual_claim = "RIGHTS_MANAGER_MANUAL_CLAIM_FACEBOOK",
    e.rights_manager_compositions = "RIGHTS_MANAGER_COMPOSITIONS_ALL_FILES",
    e);
    f.DEFAULT = a
}
), null);
__d("MediaManagerContentInstagramPostsStore", ["MediaManagerMultipleContentTableBaseStore", "MediaManagerTablesByTab", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        selectedTable: b("MediaManagerTablesByTab").DEFAULT.instagram_content_posts
    };
    var g = function(b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
            return b.apply(this, arguments) || this
        }
        return a
    }(b("immutable").Record(a));
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.call(this, b("MediaManagerTablesByTab").MAP.instagram_content_posts, "instagram_content_posts") || this
        }
        var d = c.prototype;
        d.getInitialState = function() {
            return new g()
        }
        ;
        return c
    }(b("MediaManagerMultipleContentTableBaseStore"));
    d = new c();
    e.exports = d
}
), null);
__d("MediaManagerContentInstantArticlesTabStore", ["MediaManagerMultipleContentTableBaseStore", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        selectedTable: "PRODUCTION_INSTANT_ARTICLES"
    };
    var g = function(b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
            return b.apply(this, arguments) || this
        }
        return a
    }(b("immutable").Record(a));
    c = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.call(this, ["PRODUCTION_INSTANT_ARTICLES", "DEVELOPMENT_INSTANT_ARTICLES", "INSTANT_ARTICLES_SETTINGS"], "content_instant_articles") || this
        }
        var c = b.prototype;
        c.getInitialState = function() {
            return new g()
        }
        ;
        return b
    }(b("MediaManagerMultipleContentTableBaseStore"));
    d = new c();
    e.exports = d
}
), null);
__d("MediaManagerContentPlaylistsStore", ["MediaManagerMultipleContentTableBaseStore", "MediaManagerTablesByTab", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        selectedTable: b("MediaManagerTablesByTab").DEFAULT.content_playlists
    };
    var g = function(b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
            return b.apply(this, arguments) || this
        }
        return a
    }(b("immutable").Record(a));
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.call(this, b("MediaManagerTablesByTab").MAP.content_playlists, "content_playlists") || this
        }
        var d = c.prototype;
        d.getInitialState = function() {
            return new g()
        }
        ;
        return c
    }(b("MediaManagerMultipleContentTableBaseStore"));
    d = new c();
    e.exports = d
}
), null);
__d("MediaManagerContentPostsStore", ["MediaManagerMultipleContentTableBaseStore", "MediaManagerTablesByTab", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        selectedTable: b("MediaManagerTablesByTab").DEFAULT.content_posts
    };
    var g = function(b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
            return b.apply(this, arguments) || this
        }
        return a
    }(b("immutable").Record(a));
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.call(this, b("MediaManagerTablesByTab").MAP.content_posts, "content_posts") || this
        }
        var d = c.prototype;
        d.getInitialState = function() {
            return new g()
        }
        ;
        return c
    }(b("MediaManagerMultipleContentTableBaseStore"));
    d = new c();
    e.exports = d
}
), null);
__d("XMediaManagerBatchPublishDraftPMVsOnPageController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/media/manager/pmv/batch_publish/", {
        page_id: {
            type: "FBID",
            required: !0
        }
    })
}
), null);
__d("XMediaManagerGetDraftPMVsCountController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/media/manager/pmv/drafts/", {
        page_id: {
            type: "FBID",
            required: !0
        }
    })
}
), null);
__d("MMContentTablePremiumMusicVideoAsyncRequests", ["fbt", "AsyncRequest", "MediaManagerContentActions", "XMediaManagerBatchPublishDraftPMVsOnPageController", "XMediaManagerGetDraftPMVsCountController", "promiseDone", "showMediaManagerConfirmationDialog", "showMediaManagerErrorDialog"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        var c = b("XMediaManagerGetDraftPMVsCountController").getURIBuilder().setFBID("page_id", a).getURI();
        c = new (b("AsyncRequest"))().setURI(c).exec().then(function(b) {
            h(a, b.payload.numDraftPMVs)
        });
        b("promiseDone")(c)
    }
    ;
    f.attemptPublishAllDraftPMVs = a;
    var h = function(a, c) {
        if (c < 1) {
            b("showMediaManagerErrorDialog")(g._("L\u1ed7i"), g._("Kh\u00f4ng t\u00ecm th\u1ea5y b\u1ea3n nh\u00e1p video nh\u1ea1c n\u00e0o."));
            return
        }
        c = g._({
            "*": "\u0110\u0103ng {number} video nh\u1ea1c?",
            "_1": "\u0110\u0103ng 1 video nh\u1ea1c?"
        }, [g._plural(c, "number")]);
        var d = g._("Nh\u1eefng video n\u00e0y s\u1ebd hi\u1ec3n th\u1ecb c\u00f4ng khai.");
        b("showMediaManagerConfirmationDialog")({
            title: c,
            body: d,
            confirmationLabel: g._("\u0110\u0103ng"),
            onConfirm: function() {
                return b("MediaManagerContentActions").confirmPublishAllDraftNoStoryPMVs(a)
            }
        })
    };
    c = function(a) {
        a = b("XMediaManagerBatchPublishDraftPMVsOnPageController").getURIBuilder().setFBID("page_id", a).getURI();
        a = new (b("AsyncRequest"))().setURI(a).setMethod("POST").exec().then(function(a) {
            i(!0)
        })["catch"](function(a) {
            i(!1)
        });
        b("promiseDone")(a)
    }
    ;
    f.confirmPublishAllDraftPMVs = c;
    var i = function(a) {
        a ? b("showMediaManagerErrorDialog")(g._("\u0110ang \u0111\u0103ng"), g._("Video s\u1eafp b\u1eaft \u0111\u1ea7u \u0111\u0103ng. B\u1ea1n s\u1ebd c\u1ea7n l\u00e0m m\u1edbi studio s\u00e1ng t\u1ea1o \u0111\u1ec3 nh\u00ecn th\u1ea5y c\u00e1c thay \u0111\u1ed5i.")) : b("showMediaManagerErrorDialog")(g._("\u0110\u00e3 x\u1ea3y ra l\u1ed7i"), g._("\u0110\u00e3 x\u1ea3y ra l\u1ed7i khi b\u1eaft \u0111\u1ea7u \u0111\u0103ng b\u1ea3n nh\u00e1p video nh\u1ea1c c\u1ee7a b\u1ea1n. Ch\u01b0a \u0111\u0103ng video n\u00e0o."))
    }
}
), null);
__d("getAvailablePageByID_DO_NOT_USE", ["MediaManagerAvailablePagesSelectors"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        var c = b("MediaManagerAvailablePagesSelectors").availablePagesSelector();
        return c.match({
            loading: function() {
                return null
            },
            error: function() {
                return null
            },
            loaded: function(b) {
                b = b.find(function(b) {
                    return b.id == a
                });
                return b !== null ? b : null
            }
        })
    }
}
), null);
__d("MMContentTableUtils", ["AdsGraphAPI", "CreatorStudioLoggerStoreUtils", "MediaManagerShowsConstants", "MMContentInstagramTableUtils", "Timezone", "VideoListPaginationLimits", "getAvailablePageByID_DO_NOT_USE", "gkx", "isEmpty", "mediaManagerPostIsVideo"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = ["id", "title", "description", "owner_id", "owner_name", "created_by", "created_by_role", "owner_thumbnail_src", "cover_photo_url", "series_name", "season_number", "episode_number", "last_added_timestamp", "last_edit_timestamp", "publish_timestamp", "scheduled_or_last_added_timestamp", "schedule_publish_timestamp", "schedule_expire_or_expired_timestamp", "post_type", "post_status", "post_alerts", "thumbnail_src", "duration_sec", "attributes", "attributes_with_metadata", "can_edit", "can_delete", "is_video_asset", "is_trailer", "post_token", "download_hd_url", "download_sd_url", "embeddable", "is_clips_enabled", "is_crossposting_eligible", "show_ad_break_block_list_settings", "can_edit_ad_break_block_list_settings", "mature_content_rating", "mature_content_rating_status", "permalink_url", "is_no_story", "is_publishing_with_video_list", "fuss_recommendation", "is_gaming_video", "eligible_actions", "is_profile_plus_owned_video", "canonical_url", "page_id_coerced", "profile_plus_id", "instant_article_errors"], i = ["aspect_ratio", "video_asset_id"], j = ["is_crosspost_to_ig_eligible_photos"], k = ["monetization_status", "demonetization_reasons", "ad_break_earnings", "ad_break_post_earnings", "ad_break_enabled_for_page", "ad_break_impressions", "video_asset_posts_status"], l = ["number_of_videos", "video_list_order", "is_dogfooded"], m = [("video_posts.fields(" + h.toString() + ")").replace(/\s+/g, "")], n = ["video_list_thumbnail_id", "is_serialized"], o = ["number_of_seasons", "number_of_episodes", "trailer_id", "showmark_url", "showmark_id", "is_dogfooded", "cover_photo_id", "poster_art_id", "poster_art_url"], p = ["cover_photo_id", "number_of_episodes", "is_dogfooded"], q = function(a) {
        return [("video_stats\n    .page_list(" + a.toString() + ")\n    .metrics(" + ["UPLOADED_VIEWS_3S", "UPLOADED_VIEWS_60S_ES", "LIFETIME_SOCIAL_ACTIONS", "UPLOADED_COMMENTS", "UPLOADED_REACTIONS", "UPLOADED_SHARES", "DISTRIBUTION_SCORE", b("gkx")("1399212") ? "UPLOADED_REACH" : null].filter(Boolean).toString() + ")\n    .fields(aggregate)\n    .view_mode(media_manager)\n    .requested_fields(aggregate)").replace(/\s+/g, "")]
    }, r = function(a) {
        return [("video_stats\n    .page_list(" + a.toString() + ")\n    .metrics(" + ["UPLOADED_VIEWS_60S", "REVENUE", "UPLOADED_VIEWS_3S", "UPLOADED_REACTIONS"].toString() + ")\n    .fields(aggregate)\n    .view_mode(media_manager)\n    .total_video_metrics(true)\n    .requested_fields(aggregate)").replace(/\s+/g, "")]
    }, s = function(a, c, d, e, f) {
        var i = "video_posts";
        d && (i = i.concat(".after(" + d + ")"));
        i = i.concat(".fields(" + h.concat(q(a)).concat(f || []).toString() + ")");
        c != null && !(g || (g = b("isEmpty")))(c) && (i = i.concat(".search_terms(" + c + ")"));
        e != null && (i = i.concat(".limit(" + e + ")"));
        return i.replace(/\s+/g, "")
    }, t = function(a, b) {
        a = a.find(function(a) {
            return a.key === b
        });
        return a ? a.value.raw_value : null
    };
    f.findMetricValue = t;
    var u = function(a) {
        var c = {};
        a.attributes && a.attributes.forEach(function(a) {
            return c[a.key] = a.value ? "on" : "off"
        });
        var d = {};
        a.attributes_with_metadata && a.attributes_with_metadata.forEach(function(a) {
            var b = {};
            a.value.is_enable ? b.isEnableString = "on" : b.isEnableString = "off";
            a.value.scheduled_time && (b.scheduled_time = a.value.scheduled_time);
            a.value.video_posts_counts && (b.videoPostsCounts = a.value.video_posts_counts);
            a.value.funded_content_status && (b.fundedContentStatus = a.value.funded_content_status);
            a.value.mature_content_rating && (b.matureContentRatingStatus = a.value.mature_content_rating);
            if (a.value.video_captions_status) {
                var c = {};
                c.status = a.value.video_captions_status;
                a.value.video_captions_accuracy_rating && (c.accuracyRating = a.value.video_captions_accuracy_rating);
                b.captionsMetadata = c
            }
            d[a.key] = b
        });
        var e = a.is_video_asset ? a.video_posts && a.video_posts.data ? a.video_posts.data.map(function(a) {
            return {
                id: a.id,
                postToken: a.post_token,
                pageID: a.owner_id,
                pageName: a.owner_name,
                pagePicture: a.owner_thumbnail_src,
                postStatus: a.post_status,
                postType: a.post_type,
                seriesName: a.series_name,
                coverPhotoURL: a.cover_photo_url,
                seasonNumber: a.season_number,
                canViewerEdit: a.can_edit,
                canViewerDelete: a.can_delete,
                lastAddedTime: Number(a.last_added_timestamp || 0),
                lastEditTime: Number(a.last_edit_timestamp || 0),
                publishTime: Number(a.publish_timestamp || 0),
                scheduledOrLastAddedTimestamp: Number(a.scheduled_or_last_added_timestamp || 0),
                scheduleExpireOrExpiredTimestamp: Number(a.schedule_expire_or_expired_timestamp || 0),
                schedulePublishTimestamp: Number(a.schedule_publish_timestamp || 0),
                title: a.title,
                description: a.description,
                thumbnailSrc: a.thumbnail_src,
                downloadSDUrl: a.download_sd_url,
                downloadHDUrl: a.download_hd_url,
                embeddable: a.embeddable,
                isClipsEnabled: a.is_clips_enabled,
                isCrosspostingEligible: a.is_crossposting_eligible,
                isTrailer: a.is_trailer,
                matureContentRating: a.mature_content_rating,
                matureContentRatingStatus: a.mature_content_rating_status,
                showAdBreakBlockListSettings: a.show_ad_break_block_list_settings,
                canEditAdBreakBlockListSettings: a.can_edit_ad_break_block_list_settings
            }
        }) : [] : void 0
          , f = a.page_ids_allowed_to_use ? a.page_ids_allowed_to_use.map(function(a) {
            return b("getAvailablePageByID_DO_NOT_USE")(a)
        }) : void 0
          , g = a.video_asset_posts_status ? {
            adBreakPrereviewPostsCount: a.video_asset_posts_status.ad_break_prereview_posts_count,
            draftPostsCount: a.video_asset_posts_status.draft_posts_count,
            expiredPostsCount: a.video_asset_posts_status.expired_posts_count,
            expiringPostsCount: a.video_asset_posts_status.expiring_posts_count,
            publishedPostsCount: a.video_asset_posts_status.published_posts_count,
            scheduledPostsCount: a.video_asset_posts_status.scheduled_posts_count,
            totalPostsCount: a.video_asset_posts_status.total_posts_count,
            state: a.video_asset_posts_status.state
        } : null;
        e = {
            id: a.id,
            postToken: a.post_token,
            postType: a.post_type,
            postStatus: a.post_status,
            postAlerts: a.post_alerts,
            lastAddedTime: Number(a.last_added_timestamp || 0),
            lastEditTime: Number(a.last_edit_timestamp || 0),
            publishTime: Number(a.publish_timestamp || 0),
            scheduledOrLastAddedTimestamp: Number(a.scheduled_or_last_added_timestamp || 0),
            scheduleExpireOrExpiredTimestamp: Number(a.schedule_expire_or_expired_timestamp || 0),
            schedulePublishTimestamp: Number(a.schedule_publish_timestamp || 0),
            pageID: a.owner_id,
            pageName: a.owner_name,
            createdBy: a.created_by,
            createdByRole: a.created_by_role,
            pagePicture: a.owner_thumbnail_src,
            seriesName: a.series_name,
            title: a.title,
            description: a.description,
            thumbnailSrc: a.thumbnail_src,
            duration: a.duration_sec,
            canViewerEdit: a.can_edit,
            canViewerDelete: a.can_delete,
            monetizationStatus: a.monetization_status,
            demonetizationReasons: a.demonetization_reasons,
            canUseAdBreaks: a.ad_break_enabled_for_page,
            adBreakEarnings: a.ad_break_earnings,
            adBreakPostEarnings: a.ad_break_post_earnings,
            adBreakImpressions: a.ad_break_impressions,
            downloadSDUrl: a.download_sd_url,
            downloadHDUrl: a.download_hd_url,
            embeddable: a.embeddable,
            isClipsEnabled: a.is_clips_enabled,
            isCrosspostingEligible: a.is_crossposting_eligible,
            isTrailer: a.is_trailer,
            showAdBreakBlockListSettings: a.show_ad_break_block_list_settings,
            numberOfVideos: a.number_of_videos,
            isSerialized: a.is_serialized,
            matureContentRating: a.mature_content_rating,
            matureContentRatingStatus: a.mature_content_rating_status,
            numberOfVideosInChannel: a.number_of_videos_in_channel,
            linearChannelContentItemValidationStatus: a.linear_channel_content_item_validation_status,
            videoListOrder: a.video_list_order,
            canEditAdBreakBlockListSettings: a.can_edit_ad_break_block_list_settings,
            attributes: c,
            attributesWithMetadata: d,
            subRows: e,
            pagesCanCrosspost: f,
            videoAssetPostsStatus: g,
            igMedia: {
                children: b("MMContentInstagramTableUtils").getIGMediaChildrenData((e = a.ig_media) == null ? void 0 : (f = e.children) == null ? void 0 : f.data),
                igtvSharePreviewToFeed: a.igtv_share_preview_to_feed,
                isIgPromotedPost: a.is_ig_promoted_post,
                commentsCount: a.comment_count || 0,
                commentsDisabled: a.comments_disabled,
                sponsorTags: a.ig_sponsor_tags,
                descriptionWithMentions: a.description_with_mentions,
                titleWithMentions: a.title_with_mentions,
                igLocationID: a.ig_media_location_id,
                igLocationName: a.ig_media_location_string,
                likeCount: a.like_count || 0,
                mediaType: a.post_type === "IGTV" ? a.ig_media_type : (g = a.ig_media) == null ? void 0 : g.media_type,
                mediaURL: a.post_type === "IGTV" ? a.ig_media_url : (e = a.ig_media) == null ? void 0 : e.media_url,
                permalinkURL: a.post_type === "IGTV" ? a.permalink_url : (f = a.ig_media) == null ? void 0 : f.permalink,
                reachCount: a.reach_count > 0 ? a.reach_count : 0,
                altText: (g = a.ig_media) == null ? void 0 : g.alt_text
            },
            igMediaPermalinks: b("MMContentInstagramTableUtils").getUnpublishedIGMediaChildren(a.id, a.ig_media_permalinks),
            igPublishedMediaSources: a.ig_published_media_sources,
            permalinkUrl: a.permalink_url,
            seasonNumber: a.season_number,
            episodeNumber: a.episode_number,
            numberOfSeasons: a.number_of_seasons,
            numberOfEpisodes: a.number_of_episodes,
            trailerID: a.trailer_id,
            videoListThumbnailID: a.video_list_thumbnail_id,
            showmarkURL: a.showmark_url,
            showmarkID: a.showmark_id,
            coverPhotoURL: a.cover_photo_url,
            coverPhotoID: a.cover_photo_id,
            posterArtURL: a.poster_art_url,
            posterArtID: a.poster_art_id,
            isDogfooded: a.is_dogfooded,
            publishWithVideoList: a.is_publishing_with_video_list,
            isNoStory: a.is_no_story,
            aspectRatio: a.aspect_ratio,
            isCrosspostToIGEligiblePhotos: a.is_crosspost_to_ig_eligible_photos,
            videoAssetID: a.video_asset_id,
            wagerStatus: a.wager_status,
            wagerOptions: a.wager_options,
            wagerTotalVotes: a.wager_num_total_votes,
            wagerEventQuestionsCount: a.wager_event_questions_count,
            fussRecommendation: a.fuss_recommendation,
            isGamingVideo: a.is_gaming_video,
            eligibleActions: a.eligible_actions,
            isProfilePlusOwnedVideo: a.is_profile_plus_owned_video,
            isRecentRecoveredIGPost: a.is_recent_recovered_ig_post,
            pageIDCoerced: a.page_id_coerced,
            profilePlusID: a.profile_plus_id
        };
        g = (f = a) != null ? (f = f.video_stats) != null ? (f = f.data) != null ? (f = f[0]) != null ? f.aggregate : f : f : f : f;
        g && (e.videoViews = t(g, "UPLOADED_VIEWS_3S"),
        e.videoViews60sES = t(g, "UPLOADED_VIEWS_60S_ES"),
        e.distributionScore = t(g, "DISTRIBUTION_SCORE"),
        e.engagement = {
            comments: t(g, "UPLOADED_COMMENTS"),
            reactions: t(g, "UPLOADED_REACTIONS"),
            shares: t(g, "UPLOADED_SHARES"),
            total: t(g, "LIFETIME_SOCIAL_ACTIONS")
        },
        e.viewCount60s = t(g, "UPLOADED_VIEWS_60S"),
        e.earningsWithSubsidy = t(g, "REVENUE"),
        e.reach = t(g, "UPLOADED_REACH"));
        a.broadcast_id && (e.broadcastId = a.broadcast_id);
        return e
    };
    a = function(a) {
        return a.map(function(a) {
            return u(a)
        })
    }
    ;
    f.defaultCreateRowData = a;
    c = function(a, c, d) {
        var f = h.concat(q(c)).concat(k).concat(m).concat(["page_ids_allowed_to_use"]);
        return b("AdsGraphAPI").get(e.id).root("media_manager").edge("contents").get({
            access_token: d,
            content_list: a,
            fields: f,
            page_list: c,
            view_mode: "media_manager"
        })
    }
    ;
    f.getContentsUpdatePromise = c;
    d = function(a, c, d) {
        var f = h.concat(q(c)).concat(k).concat(i).concat(j), g, l, m = a.getSelectedDateRange(), n = a.getAppliedCustomFilters();
        switch (a.get("type")) {
        case "ALL_POSTS":
        case "POSTED_POSTS":
        case "SCHEDULED_POSTS":
        case "DRAFT_POSTS":
        case "EXPIRED_POSTS":
        case "EXPIRING_POSTS":
        case "INSTAGRAM_LINKED_FACEBOOK_PAGE_OWNED_POSTS":
            g = a.getSelectedTypeFilter();
            break;
        case "VIDEO":
        case "INSTAGRAM_LINKED_FACEBOOK_PAGE_OWNED_VIDEOS":
            g = "VIDEOS";
            break;
        default:
            throw new Error("Invalid post type filter")
        }
        switch (a.get("type")) {
        case "SCHEDULED_POSTS":
            l = "SCHEDULED";
            break;
        case "DRAFT_POSTS":
            l = "DRAFT";
            break;
        case "EXPIRED_POSTS":
            l = "EXPIRED";
            break;
        case "EXPIRING_POSTS":
            l = "EXPIRING";
            break;
        default:
            switch (a.getSelectedStatusFilter()) {
            case "ALL":
                l = "ALL";
                break;
            case "ALL_PUBLISHED":
                l = "PUBLISHED";
                break;
            case "POSTED":
                l = "PUBLISHED";
                break;
            case "SCHEDULED":
                l = "SCHEDULED";
                break;
            case "EXPIRING":
                l = "EXPIRING";
                break;
            case "EXPIRED":
                l = "EXPIRED";
                break;
            case "DRAFT":
                l = "DRAFT";
                break;
            case "LIVE_NOW":
                l = "LIVE_NOW";
                break;
            case "SHARED":
                l = "SHARED";
                break;
            default:
                throw new Error("Invalid post status filter")
            }
        }
        var o = 0
          , p = Math.floor(Date.now() / 1e3);
        try {
            o = m.start.toInstant(b("Timezone").getEnvironmentTimezoneID()),
            p = m.end.toInstant(b("Timezone").getEnvironmentTimezoneID())
        } catch (a) {
            b("CreatorStudioLoggerStoreUtils").creatorStudioSafelyLogEvent("content_library_timestamp_exception", "content_table", function(c) {
                return c.updateExtraData({
                    timezone: String(b("Timezone").getEnvironmentTimezoneID()),
                    error_message: a.message
                })
            })
        }
        m = null;
        var r = a.get("orderBy")
          , s = a.get("orderDirection");
        switch (r) {
        case "creation_time_desc":
        case "creation_time_asc":
            m = s === "DESCENDING" ? "creation_time_desc" : "creation_time_asc";
            break;
        case "video_views_desc":
        case "video_views_asc":
            m = s === "DESCENDING" ? "video_views_desc" : "video_views_asc";
            break
        }
        r = v(l, a.get("type"));
        s = r === "media_manager_posts" ? {
            post_status: l
        } : null;
        return b("AdsGraphAPI").get(e.id).root("media_manager").edge(r).get(babelHelpers["extends"]({
            access_token: d,
            page_list: c
        }, s, {
            post_type: g,
            search_terms: a.getSearchString(),
            since: o,
            until: p,
            fields: f,
            filtering: n,
            sort_term: m,
            view_mode: "media_manager"
        }))
    }
    ;
    f.getPostsTableDataPromise = d;
    var v = function(a, c) {
        var d = "media_manager_posts";
        if (c != "ALL_POSTS" && c != "POSTED_POSTS" && c != "SCHEDULED_POSTS" && c != "DRAFT_POSTS" && c != "EXPIRED_POSTS" && c != "EXPIRING_POSTS" || !b("gkx")("1391933"))
            return d;
        switch (a) {
        case "PUBLISHED":
            return "media_manager_published_posts";
        case "SCHEDULED":
            return "media_manager_scheduled_posts";
        case "EXPIRING":
            return "media_manager_expiring_posts";
        case "EXPIRED":
            return "media_manager_expired_posts";
        case "DRAFT":
            return "media_manager_draft_posts";
        default:
            return d
        }
    };
    a = function(a, c, d) {
        var f = h.concat(q(c)).concat(m);
        return b("AdsGraphAPI").get(e.id).root("media_manager").edge("content_library").get({
            access_token: d,
            page_list: c,
            post_type: "VIDEO_ASSETS",
            search_terms: a.getSearchString(),
            fields: f,
            view_mode: "media_manager"
        })
    }
    ;
    f.getAssetsTableDataPromise = a;
    c = function(a, c, d) {
        var f = h.concat(k).concat(r(c)).concat(m);
        return b("AdsGraphAPI").get(e.id).root("media_manager").edge("ad_break_video_assets").get({
            access_token: d,
            page_list: c,
            search_terms: a.getSearchString(),
            fields: f,
            view_mode: "media_manager"
        })
    }
    ;
    f.getAdBreakVideoAssetsDataPromise = c;
    d = function(a, c, d) {
        var f = h.concat(["channel_id", "number_of_videos_in_channel", "channel_owner_name"]);
        return b("AdsGraphAPI").get(e.id).root("media_manager").edge("content_library").get({
            access_token: d,
            page_list: c,
            post_type: "LIVE_LINEAR_VIDEO_CHANNELS",
            search_terms: a.getSearchString(),
            fields: f,
            limit: 50,
            view_mode: "media_manager"
        })
    }
    ;
    f.getLiveLinearVideoChannelsTableDataPromise = d;
    a = function(a, c, d) {
        var f = h.concat(["linear_channel_content_item_validation_status"]);
        return b("AdsGraphAPI").get(e.id).root("media_manager").edge("content_library").get({
            access_token: d,
            post_type: "LIVE_LINEAR_VIDEO_CHANNEL_CONTENT_ITEMS",
            search_terms: a,
            content_list: [],
            page_list: c,
            fields: f,
            limit: 50,
            view_mode: "media_manager"
        })
    }
    ;
    f.getLiveLinearVideoChannelEditTableDataPromise = a;
    c = function(a, c, d, f) {
        a = h;
        return b("AdsGraphAPI").get(e.id).root("media_manager").edge("content_library").get({
            access_token: c,
            page_list: d,
            post_type: "LIVE_LINEAR_VIDEO_CHANNEL_ELIGIBLE_VIDEOS",
            search_terms: f.getSearchString(),
            fields: a,
            view_mode: "media_manager"
        })
    }
    ;
    f.getLiveLinearVideoChannelEligibleVideosTableDataPromise = c;
    d = function(a, c, d) {
        var f = h.concat(l).concat(n);
        return b("AdsGraphAPI").get(e.id).root("media_manager").edge(b("gkx")("1380049") ? "playlists_and_series" : "content_library").get({
            access_token: d,
            page_list: c,
            post_type: "PLAYLIST",
            search_terms: a.getSearchString(),
            fields: f,
            view_mode: "media_manager"
        })
    }
    ;
    f.getPlaylistsTableDataPromise = d;
    a = function(a, c) {
        var d = h.concat(l).concat(n);
        return b("AdsGraphAPI").get(e.id).root("media_manager").edge("contents").get({
            access_token: c,
            content_list: [a],
            fields: d,
            view_mode: "media_manager"
        })
    }
    ;
    f.getPlaylistsTableContentsUpdatePromise = a;
    c = function(a, c, d) {
        return b("AdsGraphAPI").get(e.id).root("media_manager").edge(b("gkx")("1380049") ? "playlists_and_series" : "content_library").get({
            access_token: d,
            page_list: c,
            post_type: "SHOW",
            search_terms: a.getSearchString(),
            fields: h.concat(o).concat(n),
            view_mode: "media_manager"
        })
    }
    ;
    f.getShowsTableDataPromise = c;
    d = function(a, c) {
        return b("AdsGraphAPI").get(e.id).root("media_manager").edge("contents").get({
            access_token: c,
            content_list: a,
            fields: h.concat(o).concat(n),
            view_mode: "media_manager"
        })
    }
    ;
    f.getShowsTableContentsUpdatePromise = d;
    a = function(a, c, d, f, g) {
        c = h.concat(s([c], a.getSearchString(), g, b("VideoListPaginationLimits").seasonless_show_limit));
        return b("AdsGraphAPI").get(e.id).root("media_manager").edge("contents").get({
            access_token: f,
            content_list: [d],
            fields: c,
            view_mode: "media_manager"
        }).then(function(a) {
            return a.data[0].video_posts || {
                data: []
            }
        })
    }
    ;
    f.getSeasonlessShowEpisodesTableDataPromise = a;
    c = function(a, c, d, f) {
        var g = "seasons";
        d !== "" && (g = g.concat(".search_terms(" + d + ")"));
        f && (g = g.concat(".after(" + f + ")"));
        g = g.concat(".fields(" + h.concat(n).concat(p).toString() + ")");
        d = ["id", g];
        return b("AdsGraphAPI").get(e.id).root("media_manager").edge("contents").get({
            access_token: c,
            content_list: [a],
            fields: d,
            view_mode: "media_manager"
        }).then(function(a) {
            return a.data[0].seasons || {
                data: []
            }
        })
    }
    ;
    f.getShowSeasonsTableDataPromise = c;
    d = function(a, c) {
        return b("AdsGraphAPI").get(e.id).root("media_manager").edge("contents").get({
            access_token: c,
            content_list: a,
            fields: h.concat(p).concat(n),
            view_mode: "media_manager"
        })
    }
    ;
    f.getShowSeasonsTableContentsUpdatePromise = d;
    a = function(a, c, d, f, g) {
        c = s([c], d, g, b("VideoListPaginationLimits").season_limit);
        return b("AdsGraphAPI").get(e.id).root("media_manager").edge("contents").get({
            access_token: f,
            content_list: [a],
            fields: c,
            view_mode: "media_manager"
        }).then(function(a) {
            return a.data[0].video_posts || {
                data: []
            }
        })
    }
    ;
    f.getShowSeasonEpisodesTableDataPromise = a;
    c = function(a) {
        return b("mediaManagerPostIsVideo")(a.postType)
    }
    ;
    f.isVideo = c;
    d = function(a, c, d, f, g) {
        d = h.concat(s([d], f, g, b("VideoListPaginationLimits").season_limit));
        return b("AdsGraphAPI").get(e.id).root("media_manager").edge("contents").get({
            access_token: a,
            content_list: [c],
            fields: d,
            view_mode: "media_manager"
        }).then(function(a) {
            return a.data[0].video_posts || {
                data: []
            }
        })
    }
    ;
    f.getPlaylistsVideosTableDataPromise = d;
    a = function(a, c, d) {
        var f = h.concat(q([c]));
        return b("AdsGraphAPI").get(e.id).root("media_manager").edge("content_library").get({
            access_token: a,
            page_list: [c],
            post_type: "VIDEOS_YOU_CAN_ADD_TO_PLAYLIST",
            search_terms: d.getSearchString(),
            fields: f,
            view_mode: "media_manager"
        })
    }
    ;
    f.getPlaylistsPagesOwnedVideosTableDataPromise = a;
    c = function(a) {
        a = a[0];
        a = ((a = a.video_posts) == null ? void 0 : a.data) || [];
        return a.map(function(a) {
            return u(a)
        })
    }
    ;
    f.createVideoListsVideosTableRowData = c;
    d = function() {
        return ["ALL", "VIDEOS", "LIVE", "PREMIERE", "PHOTOS", "LINK", "TEXT"]
    }
    ;
    f.getFiltersForFb = d
}
), null);
__d("MMRM4PCompositionsStore", ["MediaManagerMultipleContentTableBaseStore", "MediaManagerTablesByTab", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        selectedTable: b("MediaManagerTablesByTab").DEFAULT.rights_manager_compositions
    };
    var g = function(b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
            return b.apply(this, arguments) || this
        }
        return a
    }(b("immutable").Record(a));
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.call(this, b("MediaManagerTablesByTab").MAP.rights_manager_compositions, "rights_manager_compositions") || this
        }
        var d = c.prototype;
        d.getInitialState = function() {
            return new g()
        }
        ;
        return c
    }(b("MediaManagerMultipleContentTableBaseStore"));
    d = new c();
    e.exports = d
}
), null);
__d("MMRMManualClaimResultsStore", ["MediaManagerMultipleContentTableBaseStore", "MediaManagerTablesByTab", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = function(b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
            return b.apply(this, arguments) || this
        }
        return a
    }(b("immutable").Record({
        selectedTable: b("MediaManagerTablesByTab").DEFAULT.rights_manager_manual_claim
    }));
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.call(this, b("MediaManagerTablesByTab").MAP.rights_manager_manual_claim, "rights_manager_manual_claim") || this
        }
        var d = c.prototype;
        d.getInitialState = function() {
            return new g()
        }
        ;
        return c
    }(b("MediaManagerMultipleContentTableBaseStore"));
    c = new a();
    e.exports = c
}
), null);
__d("MMRMMatchRulesTableStore", ["MediaManagerMultipleContentTableBaseStore", "MediaManagerTablesByTab", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        selectedTable: b("MediaManagerTablesByTab").DEFAULT.rights_manager_match_rules
    };
    var g = function(b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
            return b.apply(this, arguments) || this
        }
        return a
    }(b("immutable").Record(a));
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.call(this, b("MediaManagerTablesByTab").MAP.rights_manager_match_rules, "rights_manager_match_rules") || this
        }
        var d = c.prototype;
        d.getInitialState = function() {
            return new g()
        }
        ;
        return c
    }(b("MediaManagerMultipleContentTableBaseStore"));
    d = new c();
    e.exports = d
}
), null);
__d("MMRMMatchingVideosStore", ["MediaManagerMultipleContentTableBaseStore", "MediaManagerTablesByTab", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        selectedTable: b("MediaManagerTablesByTab").DEFAULT.rights_manager_matching_videos
    };
    var g = function(b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
            return b.apply(this, arguments) || this
        }
        return a
    }(b("immutable").Record(a));
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.call(this, b("MediaManagerTablesByTab").MAP.rights_manager_matching_videos, "rights_manager_matching_videos") || this
        }
        var d = c.prototype;
        d.getInitialState = function() {
            return new g()
        }
        ;
        return c
    }(b("MediaManagerMultipleContentTableBaseStore"));
    d = new c();
    e.exports = d
}
), null);
__d("MMRMReferenceLibraryStore", ["MediaManagerActionTypes", "MediaManagerMultipleContentTableBaseStore", "MediaManagerTablesByTab", "getSelectedSinglePage_LEGACY", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        selectedTable: b("MediaManagerTablesByTab").DEFAULT.rights_manager_reference_library
    };
    var g = function(b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
            return b.apply(this, arguments) || this
        }
        return a
    }(b("immutable").Record(a));
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.call(this, b("MediaManagerTablesByTab").MAP.rights_manager_reference_library, "rights_manager_reference_library") || this
        }
        var d = c.prototype;
        d.getInitialState = function() {
            return new g()
        }
        ;
        d.$MMRMReferenceLibraryStore1 = function(a, b) {
            var c = "DEFAULT";
            if (b != null) {
                b = b.rightsManagerEligibility;
                b != null && (c = b.rmVersion)
            }
            if (c === "MUSIC_LABEL")
                return a.set("selectedTable", "RIGHTS_MANAGER_SOUND_RECORDINGS_ALL_FILES");
            else if (c === "IMAGE")
                return a.set("selectedTable", "RIGHTS_MANAGER_REFERENCE_LIBRARY_ALL_IMAGES");
            else
                return a.set("selectedTable", "RIGHTS_MANAGER_REFERENCE_LIBRARY_ALL_FILES")
        }
        ;
        d.reduce = function(a, c) {
            switch (c.type) {
            case b("MediaManagerActionTypes").MediaManagerActionTypes.LOAD_TAB_START:
                if (c.tab !== "rights_manager_reference_library")
                    return a;
                var d = b("getSelectedSinglePage_LEGACY")();
                return this.$MMRMReferenceLibraryStore1(a, d);
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SELECT_SINGLE_PAGE:
                return this.$MMRMReferenceLibraryStore1(a, c.contextPage);
            case b("MediaManagerActionTypes").MediaManagerActionTypes.PICKER_SELECT_SINGLE_PAGE:
                return this.$MMRMReferenceLibraryStore1(a, b("getSelectedSinglePage_LEGACY")());
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SELECT_RIGHTS_MANAGER_REFERENCE_LIBRARY_SUBTAB:
                switch (c.subTab) {
                case "all_files":
                    return a.set("selectedTable", "RIGHTS_MANAGER_REFERENCE_LIBRARY_ALL_FILES");
                case "conflicts":
                    return a.set("selectedTable", "RIGHTS_MANAGER_REFERENCE_LIBRARY_CONFLICTS");
                case "possible_conflicts":
                    return a.set("selectedTable", "RIGHTS_MANAGER_REFERENCE_LIBRARY_POSSIBLE_CONFLICTS");
                case "resolutions":
                    return a.set("selectedTable", "RIGHTS_MANAGER_REFERENCE_LIBRARY_RESOLUTIONS");
                case "sound_recordings":
                    return a.set("selectedTable", "RIGHTS_MANAGER_SOUND_RECORDINGS_ALL_FILES");
                case "premium_music_videos":
                    return a.set("selectedTable", "RIGHTS_MANAGER_REFERENCE_LIBRARY_PMVS");
                case "all_images":
                    return a.set("selectedTable", "RIGHTS_MANAGER_REFERENCE_LIBRARY_ALL_IMAGES");
                case "image_conflicts":
                    return a.set("selectedTable", "RIGHTS_MANAGER_REFERENCE_LIBRARY_IMAGE_CONFLICTS");
                case "image_resolutions":
                    return a.set("selectedTable", "RIGHTS_MANAGER_REFERENCE_LIBRARY_IMAGE_RESOLUTIONS");
                case "sound_recording_conflicts":
                    return a.set("selectedTable", "RIGHTS_MANAGER_REFERENCE_LIBRARY_SOUND_RECORDING_CONFLICTS");
                case "sound_recording_resolutions":
                    return a.set("selectedTable", "RIGHTS_MANAGER_REFERENCE_LIBRARY_SOUND_RECORDING_RESOLUTIONS");
                default:
                    return a
                }
            default:
                return a
            }
        }
        ;
        return c
    }(b("MediaManagerMultipleContentTableBaseStore"));
    d = new c();
    e.exports = d
}
), null);
__d("MediaManagerContentShowsStore", ["MediaManagerMultipleContentTableBaseStore", "MediaManagerTablesByTab", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        selectedTable: b("MediaManagerTablesByTab").DEFAULT.content_shows
    };
    var g = function(b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
            return b.apply(this, arguments) || this
        }
        return a
    }(b("immutable").Record(a));
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.call(this, b("MediaManagerTablesByTab").MAP.content_shows, "content_shows") || this
        }
        var d = c.prototype;
        d.getInitialState = function() {
            return new g()
        }
        ;
        return c
    }(b("MediaManagerMultipleContentTableBaseStore"));
    d = new c();
    e.exports = d
}
), null);
__d("MediaManagerContentTable", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        ALL_POSTS: "ALL_POSTS",
        VIDEO: "VIDEO",
        PHOTO: "PHOTO",
        TEXT: "TEXT",
        VIDEO_ASSET: "VIDEO_ASSET",
        VIDEO_ASSET_POST: "VIDEO_ASSET_POST",
        VIDEOS_YOU_CAN_CROSSPOST: "VIDEOS_YOU_CAN_CROSSPOST",
        AD_BREAK_VIDEO_ASSET: "AD_BREAK_VIDEO_ASSET",
        RIGHTS_MANAGER_DISPUTES: "RIGHTS_MANAGER_DISPUTES",
        RIGHTS_MANAGER_IMAGE_DISPUTES: "RIGHTS_MANAGER_IMAGE_DISPUTES",
        RIGHTS_MANAGER_REFERENCE_LIBRARY_ALL_FILES: "RIGHTS_MANAGER_REFERENCE_LIBRARY_ALL_FILES",
        RIGHTS_MANAGER_REFERENCE_LIBRARY_ALL_IMAGES: "RIGHTS_MANAGER_REFERENCE_LIBRARY_ALL_IMAGES",
        RIGHTS_MANAGER_REFERENCE_LIBRARY_CONFLICTS: "RIGHTS_MANAGER_REFERENCE_LIBRARY_CONFLICTS",
        RIGHTS_MANAGER_REFERENCE_LIBRARY_IMAGE_CONFLICTS: "RIGHTS_MANAGER_REFERENCE_LIBRARY_IMAGE_CONFLICTS",
        RIGHTS_MANAGER_REFERENCE_LIBRARY_IMAGE_RESOLUTIONS: "RIGHTS_MANAGER_REFERENCE_LIBRARY_IMAGE_RESOLUTIONS",
        RIGHTS_MANAGER_REFERENCE_LIBRARY_SOUND_RECORDING_CONFLICTS: "RIGHTS_MANAGER_REFERENCE_LIBRARY_SOUND_RECORDING_CONFLICTS",
        RIGHTS_MANAGER_REFERENCE_LIBRARY_SOUND_RECORDING_RESOLUTIONS: "RIGHTS_MANAGER_REFERENCE_LIBRARY_SOUND_RECORDING_RESOLUTIONS",
        RIGHTS_MANAGER_REFERENCE_LIBRARY_POSSIBLE_CONFLICTS: "RIGHTS_MANAGER_REFERENCE_LIBRARY_POSSIBLE_CONFLICTS",
        RIGHTS_MANAGER_REFERENCE_LIBRARY_RESOLUTIONS: "RIGHTS_MANAGER_REFERENCE_LIBRARY_RESOLUTIONS",
        RIGHTS_MANAGER_AUDIO_RELEASES: "RIGHTS_MANAGER_AUDIO_RELEASES",
        RIGHTS_MANAGER_AUDIO_RELEASES_PREMIUM_MUSIC_VIDEOS: "RIGHTS_MANAGER_AUDIO_RELEASES_PREMIUM_MUSIC_VIDEOS",
        RIGHTS_MANAGER_MATCHING_IMAGES_ALL_MATCHES: "RIGHTS_MANAGER_MATCHING_IMAGES_ALL_MATCHES",
        RIGHTS_MANAGER_MATCHING_IMAGES_MANUAL_REVIEW: "RIGHTS_MANAGER_MATCHING_IMAGES_MANUAL_REVIEW",
        RIGHTS_MANAGER_MATCHING_IMAGES_MONITORED: "RIGHTS_MANAGER_MATCHING_IMAGES_MONITORED",
        RIGHTS_MANAGER_MATCHING_IMAGES_TAKEDOWNS: "RIGHTS_MANAGER_MATCHING_IMAGES_TAKEDOWNS",
        RIGHTS_MANAGER_MATCHING_IMAGES_BLOCKED: "RIGHTS_MANAGER_MATCHING_IMAGES_BLOCKED",
        RIGHTS_MANAGER_MATCHING_VIDEOS_ALL_MATCHES: "RIGHTS_MANAGER_MATCHING_VIDEOS_ALL_MATCHES",
        RIGHTS_MANAGER_MATCHING_VIDEOS_COLLECT_AD_EARNINGS: "RIGHTS_MANAGER_MATCHING_VIDEOS_COLLECT_AD_EARNINGS",
        RIGHTS_MANAGER_MATCHING_VIDEOS_MONITORED: "RIGHTS_MANAGER_MATCHING_VIDEOS_MONITORED",
        RIGHTS_MANAGER_MATCHING_VIDEOS_BLOCKED: "RIGHTS_MANAGER_MATCHING_VIDEOS_BLOCKED",
        RIGHTS_MANAGER_MATCHING_VIDEOS_TAKEDOWNS: "RIGHTS_MANAGER_MATCHING_VIDEOS_TAKEDOWNS",
        RIGHTS_MANAGER_PUBLISHER_MATCHING_VIDEOS_MANUAL_REVIEW: "RIGHTS_MANAGER_PUBLISHER_MATCHING_VIDEOS_MANUAL_REVIEW",
        RIGHTS_MANAGER_TAKEDOWN_REQUESTS: "RIGHTS_MANAGER_TAKEDOWN_REQUESTS",
        RIGHTS_MANAGER_MANUAL_CLAIM_FACEBOOK: "RIGHTS_MANAGER_MANUAL_CLAIM_FACEBOOK",
        RIGHTS_MANAGER_MANUAL_CLAIM_INSTAGRAM: "RIGHTS_MANAGER_MANUAL_CLAIM_INSTAGRAM",
        RIGHTS_MANAGER_COMPOSITIONS_ALL_FILES: "RIGHTS_MANAGER_COMPOSITIONS_ALL_FILES",
        RIGHTS_MANAGER_COMPOSITIONS_CONFLICTS: "RIGHTS_MANAGER_COMPOSITIONS_CONFLICTS",
        RIGHTS_MANAGER_SOUND_RECORDINGS_ALL_FILES: "RIGHTS_MANAGER_SOUND_RECORDINGS_ALL_FILES",
        RIGHTS_MANAGER_REFERENCE_LIBRARY_PMVS: "RIGHTS_MANAGER_REFERENCE_LIBRARY_PMVS",
        RIGHTS_MANAGER_MATCH_RULES: "RIGHTS_MANAGER_MATCH_RULES",
        RIGHTS_MANAGER_OVERVIEW_TOP_MATCHING_POSTS: "RIGHTS_MANAGER_OVERVIEW_TOP_MATCHING_POSTS",
        RIGHTS_MANAGER_OVERVIEW_TOP_REFERENCE_FILES: "RIGHTS_MANAGER_OVERVIEW_TOP_REFERENCE_FILES",
        RIGHTS_MANAGER_OVERVIEW_PROTECTION_INSIGHTS_TOP_REFERENCE_FILES: "RIGHTS_MANAGER_OVERVIEW_PROTECTION_INSIGHTS_TOP_REFERENCE_FILES",
        RIGHTS_MANAGER_REFERENCE_FILE_INSIGHTS_TOP_MATCHING_POSTS: "RIGHTS_MANAGER_REFERENCE_FILE_INSIGHTS_TOP_MATCHING_POSTS",
        RIGHTS_MANAGER_REFERENCE_FILE_INSIGHTS_TOP_MATCHING_PAGES_OR_ACCOUNTS: "RIGHTS_MANAGER_REFERENCE_FILE_INSIGHTS_TOP_MATCHING_PAGES_OR_ACCOUNTS",
        LINK: "LINK",
        PLAYLISTS: "PLAYLISTS",
        PLAYLISTS_VIDEOS: "PLAYLISTS_VIDEOS",
        PLAYLISTS_PAGE_OWNED_VIDEOS: "PLAYLISTS_PAGE_OWNED_VIDEOS",
        INSTAGRAM_POSTS: "INSTAGRAM_POSTS",
        INSTAGRAM_VIDEO_POSTS: "INSTAGRAM_VIDEO_POSTS",
        INSTAGRAM_PHOTO_POSTS: "INSTAGRAM_PHOTO_POSTS",
        INSTAGRAM_CAROUSEL_POSTS: "INSTAGRAM_CAROUSEL_POSTS",
        INSTAGRAM_STORIES_POSTS: "INSTAGRAM_STORIES_POSTS",
        INSTAGRAM_IGTV_POSTS: "INSTAGRAM_IGTV_POSTS",
        INSTAGRAM_LINKED_FACEBOOK_PAGE_OWNED_VIDEOS: "INSTAGRAM_LINKED_FACEBOOK_PAGE_OWNED_VIDEOS",
        INSTAGRAM_LINKED_FACEBOOK_PAGE_OWNED_POSTS: "INSTAGRAM_LINKED_FACEBOOK_PAGE_OWNED_POSTS",
        POSTED_POSTS: "POSTED_POSTS",
        SCHEDULED_POSTS: "SCHEDULED_POSTS",
        DRAFT_POSTS: "DRAFT_POSTS",
        EXPIRED_POSTS: "EXPIRED_POSTS",
        EXPIRING_POSTS: "EXPIRING_POSTS",
        SHOWS: "SHOWS",
        SHOW_SEASONS: "SHOW_SEASONS",
        SEASONLESS_SHOW_EPISODES: "SEASONLESS_SHOW_EPISODES",
        SHOW_SEASON_EPISODES: "SHOW_SEASON_EPISODES",
        SHOWS_PAGE_OWNED_VIDEOS: "SHOWS_PAGE_OWNED_VIDEOS",
        SHOW_TRAILER: "SHOW_TRAILER",
        HOME_RECENT_DATA_WIDGET_ALL_POSTS: "HOME_RECENT_DATA_WIDGET_ALL_POSTS",
        LIVE_LINEAR_VIDEO_CHANNELS: "LIVE_LINEAR_VIDEO_CHANNELS",
        LIVE_LINEAR_VIDEO_CHANNEL_EDIT: "LIVE_LINEAR_VIDEO_CHANNEL_EDIT",
        LIVE_LINEAR_VIDEO_CHANNEL_ELIGIBLE_VIDEOS: "LIVE_LINEAR_VIDEO_CHANNEL_ELIGIBLE_VIDEOS",
        MONETIZATION_STARS: "MONETIZATION_STARS",
        ALL_FBSTORIES: "ALL_FBSTORIES",
        VIDEO_CLIPS: "VIDEO_CLIPS",
        HIGHLIGHT_REEL_VIDEO_CLIPS: "HIGHLIGHT_REEL_VIDEO_CLIPS",
        HIGHLIGHT_VIDEOS: "HIGHLIGHT_VIDEOS",
        PRODUCTION_INSTANT_ARTICLES: "PRODUCTION_INSTANT_ARTICLES",
        DEVELOPMENT_INSTANT_ARTICLES: "DEVELOPMENT_INSTANT_ARTICLES",
        INSTANT_ARTICLES_SETTINGS: "INSTANT_ARTICLES_SETTINGS",
        EXTENDED_BREAKS_ADD_VIDEOS_TABLE: "EXTENDED_BREAKS_ADD_VIDEOS_TABLE",
        EXTENDED_BREAKS_VIEW_VIDEOS_TABLE: "EXTENDED_BREAKS_VIEW_VIDEOS_TABLE"
    });
    e.exports = a
}
), null);
__d("MediaManagerContentTableState", ["DateTime", "LocalDate", "LocalDateInterval", "Timezone", "guid", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("Timezone").getEnvironmentTimezoneID() || b("Timezone").PST8PDT;
    var g = b("LocalDate").fromInstant(123084e4, a);
    c = {
        selectedPreset: null,
        type: b("guid")(),
        rows: b("immutable").List([]),
        searchString: "",
        statusFilterValue: "ALL",
        typeFilterValue: "ALL",
        newCustomFilterField: null,
        appliedCustomFilterFields: b("immutable").List([]),
        currentPromise: null,
        nextPagePromise: null,
        orderBy: null,
        orderDirection: null,
        summary: null,
        loading: !1,
        selectedRowIDs: b("immutable").List([]),
        refreshingRowIDs: b("immutable").List([]),
        selectedDateRange: null,
        error: null,
        customFilterConfig: {},
        isSelectAllEnabled: !1
    };
    d = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b;
            b = a.call(this) || this;
            return b.set("selectedDateRange", c.getInitialDateRange()) || babelHelpers.assertThisInitialized(b)
        }
        var d = c.prototype;
        d.getSelectedStatusFilter = function() {
            return this.get("statusFilterValue")
        }
        ;
        d.getSelectedTypeFilter = function() {
            return this.get("typeFilterValue")
        }
        ;
        d.getSearchString = function() {
            return this.get("searchString")
        }
        ;
        d.getRows = function() {
            return this.get("rows").toArray()
        }
        ;
        d.getSelectedRows = function() {
            var a = new Set(this.get("selectedRowIDs").toArray());
            return this.get("rows").filter(function(b) {
                return a.has(b.id)
            }).toArray()
        }
        ;
        d.getUnselectedRows = function() {
            var a = new Set(this.get("selectedRowIDs").toArray());
            return this.get("rows").filter(function(b) {
                return !a.has(b.id)
            }).toArray()
        }
        ;
        c.getInitialDateRange = function() {
            var a = b("LocalDate").fromDateTime(b("DateTime").now(b("Timezone").getEnvironmentTimezoneID()).endOfDay()).addDays(1);
            return new (b("LocalDateInterval"))(g,a)
        }
        ;
        d.getSelectedDateRange = function() {
            return this.get("selectedDateRange") || c.getInitialDateRange()
        }
        ;
        d.getSort = function() {
            var a = this.get("orderBy")
              , b = this.get("orderDirection")
              , c = [];
            if (a) {
                b = "_" + b.toLowerCase();
                c = [a + b]
            }
            return c
        }
        ;
        d.getTotalCount = function() {
            var a;
            return ((a = this.get("summary")) == null ? void 0 : a.total_count) || 0
        }
        ;
        d.getUnseenCount = function() {
            var a;
            return ((a = this.get("summary")) == null ? void 0 : a.unseen_count) || 0
        }
        ;
        d.getAppliedCustomFilters = function() {
            var a = this
              , b = this.get("appliedCustomFilterFields")
              , c = [];
            b.forEach(function(b) {
                var d = b.field.name
                  , e = b.operator;
                b = b.value;
                if (b != null && b.length !== 0) {
                    var f = a.get("customFilterConfig").fieldsConfig[d].toApiValueConverter;
                    f != null && (b = f(b));
                    f = {
                        field: d,
                        operator: e,
                        value: b
                    };
                    c.push(f)
                }
            });
            return c
        }
        ;
        return c
    }(b("immutable").Record(c));
    e.exports = d
}
), null);
__d("MediaManagerLiveLinearVideoChannelsPostStore.react", ["MediaManagerMultipleContentTableBaseStore", "MediaManagerTablesByTab", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        selectedTable: b("MediaManagerTablesByTab").DEFAULT.live_linear_video_channels
    };
    var g = function(b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
            return b.apply(this, arguments) || this
        }
        return a
    }(b("immutable").Record(a));
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.call(this, b("MediaManagerTablesByTab").MAP.live_linear_video_channels, "live_linear_video_channels") || this
        }
        var d = c.prototype;
        d.getInitialState = function() {
            return new g()
        }
        ;
        d.getChannelTable = function() {
            return "LIVE_LINEAR_VIDEO_CHANNELS"
        }
        ;
        d.getEditTable = function() {
            return "LIVE_LINEAR_VIDEO_CHANNEL_EDIT"
        }
        ;
        d.getEligibleVideoTable = function() {
            return "LIVE_LINEAR_VIDEO_CHANNEL_ELIGIBLE_VIDEOS"
        }
        ;
        return c
    }(b("MediaManagerMultipleContentTableBaseStore"));
    d = new c();
    e.exports = d
}
), null);
__d("mediaManagerIsRefactoredTable", ["MediaManagerContentInstantArticlesTabStore", "MediaManagerContentPostsStore"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("MediaManagerContentPostsStore").getTables()
      , h = b("MediaManagerContentInstantArticlesTabStore").getTables();
    function a(a) {
        return g.includes(a) || h.includes(a) || a === "SHOW_TRAILER" || a === "SHOWS_PAGE_OWNED_VIDEOS" || a === "VIDEOS_YOU_CAN_CROSSPOST"
    }
}
), null);
__d("MediaManagerContentTableStore", ["invariant", "CreatorStudioLoggerStoreUtils", "ExceptionDialog", "FluxReduceStore", "MediaManagerActionTypes", "MediaManagerContentActions", "MediaManagerContentInstagramPostsStore", "MediaManagerContentPlaylistsStore", "MediaManagerContentPostsStore", "MediaManagerContentShowsStore", "MediaManagerContentTable", "MediaManagerContentTableState", "MediaManagerDispatcher", "MediaManagerFacebookPagePickerStore", "MediaManagerGlobalActions", "MediaManagerGlobalStore", "MediaManagerLegacyPageSelectors", "MediaManagerLiveLinearVideoChannelsPostStore.react", "MediaManagerTablesByTab", "MediaManagerUtils", "MMContentTablePremiumMusicVideoAsyncRequests", "MMContentTableUtils", "MMRM4PCompositionsStore", "MMRMManualClaimResultsStore", "MMRMMatchingVideosStore", "MMRMMatchRulesTableStore", "MMRMReferenceLibraryStore", "QuickPerformanceLogger", "RMDegradedServiceLogging", "getSelectedSinglePage_LEGACY", "immutable", "mediaManagerIsRefactoredTable", "mediaManagerSelectedTabConfigSelector", "objectKeys", "promiseDone", "setImmediate"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        tableConfigs: {},
        tables: b("immutable").Map()
    };
    var h = ["PLAYLISTS", "PLAYLISTS_VIDEOS", "PLAYLISTS_PAGE_OWNED_VIDEOS", "AD_BREAK_VIDEO_ASSET", "INSTAGRAM_POSTS", "INSTAGRAM_VIDEO_POSTS", "INSTAGRAM_PHOTO_POSTS", "INSTAGRAM_CAROUSEL_POSTS", "INSTAGRAM_STORIES_POSTS", "INSTAGRAM_IGTV_POSTS", "INSTAGRAM_LINKED_FACEBOOK_PAGE_OWNED_VIDEOS", "INSTAGRAM_LINKED_FACEBOOK_PAGE_OWNED_POSTS", "SHOWS", "SEASONLESS_SHOW_EPISODES", "SHOW_SEASONS", "SHOW_SEASON_EPISODES", "LIVE_LINEAR_VIDEO_CHANNELS", "LIVE_LINEAR_VIDEO_CHANNEL_EDIT", "LIVE_LINEAR_VIDEO_CHANNEL_ELIGIBLE_VIDEOS", "RIGHTS_MANAGER_REFERENCE_LIBRARY_CONFLICTS"]
      , i = function(b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
            return b.apply(this, arguments) || this
        }
        return a
    }(b("immutable").Record(a));
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.getInitialState = function() {
            return new i()
        }
        ;
        d.reduce = function(a, c) {
            var d = this;
            if (c.type === b("MediaManagerActionTypes").MediaManagerActionTypes.LOAD_TAB_START)
                return this.$MediaManagerContentTableStore1(c.tab, a);
            if (c.table) {
                var e = c.table;
                if (!a.get("tables").has(e))
                    return a
            }
            b("MediaManagerDispatcher").waitFor([b("MediaManagerGlobalStore").getDispatchToken()]);
            var f;
            switch (c.type) {
            case b("MediaManagerActionTypes").MediaManagerActionTypes.INITIALIZE_OLD_TABLE_CONFIGS:
                return this.$MediaManagerContentTableStore2(a, c.tableConfigs);
            case b("MediaManagerActionTypes").MediaManagerActionTypes.LOAD_CONTENT_TABLE_START:
                f = c.table;
                return a.updateIn(["tables", f], function(a) {
                    return d.$MediaManagerContentTableStore3(f, a)
                });
            case b("MediaManagerActionTypes").MediaManagerActionTypes.LOAD_CONTENT_TABLE_FINISHED:
                f = c.table;
                e = b("immutable").List(c.rows);
                e = this.getTableState(f).rows.concat(e);
                this.$MediaManagerContentTableStore4(f, e.size, c.nextPagePromise);
                var g = a.setIn(["tables", f, "rows"], e).setIn(["tables", f, "nextPagePromise"], c.nextPagePromise).setIn(["tables", f, "summary"], c.summary).setIn(["tables", f, "loading"], !1);
                e = a.getIn(["tables", c.table, "isSelectAllEnabled"]);
                e && (g = g.setIn(["tables", c.table, "selectedRowIDs"], this.$MediaManagerContentTableStore5(c.table, c.rows.map(function(a) {
                    return a.id
                }))));
                this.$MediaManagerContentTableStore6(f, g);
                b("CreatorStudioLoggerStoreUtils").creatorStudioSafelyLogEvent("load_content_table_finished", "content_table", function(a) {
                    return a.updateExtraData(d.$MediaManagerContentTableStore7(f, g))
                });
                return g;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_TABLE_SORT_CHANGED:
                f = c.table;
                var h = c.orderBy;
                e = c.defaultOrderDirection;
                var i = a.getIn(["tables", f, "orderBy"])
                  , k = a.getIn(["tables", f, "orderDirection"]);
                i = h === i ? k === "ASCENDING" ? "DESCENDING" : "ASCENDING" : e || "DESCENDING";
                b("CreatorStudioLoggerStoreUtils").creatorStudioSafelyLogEvent("content_table_sort_changed", "content_table", function(a) {
                    a.updateExtraData({
                        table: f,
                        sortBy: h
                    });
                    return a
                });
                return a.setIn(["tables", f, "orderBy"], h).setIn(["tables", f, "orderDirection"], i);
            case b("MediaManagerActionTypes").MediaManagerActionTypes.LOAD_CONTENT_TABLE_NEXT_PAGE:
                f = c.table;
                return a.updateIn(["tables", f], function(a) {
                    return d.$MediaManagerContentTableStore8(f, a)
                });
            case b("MediaManagerActionTypes").MediaManagerActionTypes.LOAD_CONTENT_TABLE_ERROR:
                f = c.table;
                return a.setIn(["tables", f, "error"], c.error).setIn(["tables", f, "loading"], !1);
            case b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_TABLE_SELECT_ROWS:
                return a.setIn(["tables", c.table, "selectedRowIDs"], this.$MediaManagerContentTableStore5(c.table, c.rows));
            case b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_TABLE_UNSELECT_ROWS:
                return a.setIn(["tables", c.table, "selectedRowIDs"], this.$MediaManagerContentTableStore9(c.table, c.rows));
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SELECT_CONTENT_STATUS_FILTER:
                return a.setIn(["tables", c.table, "statusFilterValue"], c.status);
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SELECT_CONTENT_TYPE_FILTER:
                return a.setIn(["tables", c.table, "typeFilterValue"], c.contentType);
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SELECT_CONTENT_CUSTOM_FILTER:
                return a.setIn(["tables", c.table, "newCustomFilterField"], c.field);
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SELECT_COLUMN_PRESET:
                return a.setIn(["tables", c.table, "selectedPreset"], c.selectedPreset);
            case b("MediaManagerActionTypes").MediaManagerActionTypes.APPLY_CONTENT_CUSTOM_FILTER:
                f = c.table;
                var l = c.filters
                  , m = c.customFilterActionType;
                return a.updateIn(["tables", f], function(a) {
                    return d.$MediaManagerContentTableStore10(l, m, a)
                });
            case b("MediaManagerActionTypes").MediaManagerActionTypes.APPLY_CONTENT_CUSTOM_FILTER_WITH_OPTIONS:
                f = c.table;
                var n = c.filter;
                return a.updateIn(["tables", f], function(a) {
                    return d.$MediaManagerContentTableStore11(n, a)
                });
            case b("MediaManagerActionTypes").MediaManagerActionTypes.CLEAR_CONTENT_TABLE_FILTERS:
                return a.updateIn(["tables", c.table], function(a) {
                    return d.$MediaManagerContentTableStore12(a)
                });
            case b("MediaManagerActionTypes").MediaManagerActionTypes.CLEAR_CONTENT_TABLE_SEARCH_STRING:
                return a.updateIn(["tables", c.table], function(a) {
                    return d.$MediaManagerContentTableStore13(a)
                });
            case b("MediaManagerActionTypes").MediaManagerActionTypes.CLEAR_CONTENT_TABLE:
                return a.updateIn(["tables", c.table], j);
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SELECT_PAGES:
            case b("MediaManagerActionTypes").MediaManagerActionTypes.PICKER_SELECT_PAGES:
            case b("MediaManagerActionTypes").MediaManagerActionTypes.PICKER_SELECT_COLLECTION:
                a = this.$MediaManagerContentTableStore14();
                a = this.$MediaManagerContentTableStore15(a);
                return a;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SELECT_SINGLE_PAGE:
            case b("MediaManagerActionTypes").MediaManagerActionTypes.PICKER_SELECT_SINGLE_PAGE:
                a = this.$MediaManagerContentTableStore15(a);
                return a;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SELECT_CONTEXT_DONE:
                a = this.$MediaManagerContentTableStore15(a);
                return a;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SELECT_SAME_TAB:
                return this.$MediaManagerContentTableStore16(c.tab, a);
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SELECT_CONTENT_DATE_RANGE:
                return a.setIn(["tables", c.table, "selectedDateRange"], c.dateRange);
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SET_CONTENT_SEARCH_STRING:
                return a.setIn(["tables", c.table, "searchString"], c.searchString);
            case b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_TABLE_REMOVE_ROWS:
                a = a.setIn(["tables", c.table, "selectedRowIDs"], this.$MediaManagerContentTableStore9(c.table, c.rows));
                return a.setIn(["tables", c.table, "rows"], this.$MediaManagerContentTableStore17(c.table, c.rows));
            case b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_TABLE_REFRESH_ROWS_START:
                return a.setIn(["tables", c.table, "refreshingRowIDs"], this.$MediaManagerContentTableStore18(c.table, c.rows, c.onFulfillHandler));
            case b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_TABLE_REFRESH_ROWS_FINISHED:
                f = c.table;
                var o = c.rowsByIDs;
                return a.updateIn(["tables", f], function(a) {
                    return d.$MediaManagerContentTableStore19(f, a, o)
                });
            case b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_TABLE_PREPEND_ROWS_TO_LOAD:
                f = c.table;
                var p = c.rowsToLoad;
                return a.updateIn(["tables", f], function(a) {
                    return d.$MediaManagerContentTableStore20(f, a, p)
                });
            case b("MediaManagerActionTypes").MediaManagerActionTypes.ADD_ROW_TO_REFRESHING_ROWS:
                return a.setIn(["tables", c.table, "refreshingRowIDs"], this.$MediaManagerContentTableStore21(c.table, c.rows));
            case b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_RESET:
                return this.$MediaManagerContentTableStore22("PLAYLISTS_VIDEOS", a);
            case b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_CLOSE_ADD_VIDEOS_TRAY:
            case b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_ADD_VIDEOS_SUCCESS:
                return this.$MediaManagerContentTableStore22("PLAYLISTS_PAGE_OWNED_VIDEOS", a);
            case b("MediaManagerActionTypes").MediaManagerActionTypes.PMV_ATTEMPT_PUBLISH_ALL_NO_STORY_DRAFTS:
                b("MMContentTablePremiumMusicVideoAsyncRequests").attemptPublishAllDraftPMVs(c.pageID);
                return a;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.PMV_CONFIRM_PUBLISH_ALL_NO_STORY_DRAFTS:
                b("MMContentTablePremiumMusicVideoAsyncRequests").confirmPublishAllDraftPMVs(c.pageID);
                return a;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SET_CONTENT_TABLE_SELECT_ALL:
                return a.updateIn(["tables", c.table], function(a) {
                    return d.$MediaManagerContentTableStore23(a, c.table, c.isSelectAllEnabled)
                });
            default:
                return a
            }
        }
        ;
        d.$MediaManagerContentTableStore7 = function(a, b) {
            b = b.get("tables").get(a);
            var c = b.selectedDateRange;
            return {
                contentTable: a,
                selectedDateRange: c == null ? void 0 : c.toString(),
                selectedDateRangeInterval: c != null ? String(c.measure("day")) : null,
                statusFilterValue: b.statusFilterValue,
                searchString: b.searchString
            }
        }
        ;
        d.$MediaManagerContentTableStore14 = function() {
            return this.$MediaManagerContentTableStore2(this.getInitialState(), this.getState().tableConfigs)
        }
        ;
        d.$MediaManagerContentTableStore22 = function(a, b) {
            return b.updateIn(["tables", a], function(a) {
                return a.set("searchString", "")
            })
        }
        ;
        d.$MediaManagerContentTableStore24 = function(a) {
            switch (a) {
            case "VIDEO":
                return "CONTENT_VIDEO_TABLE";
            case "AD_BREAK_VIDEO_ASSET":
                return "MONETIZATION_AD_BREAK_VIDEOS";
            case "RIGHTS_MANAGER_REFERENCE_LIBRARY_ALL_FILES":
                return "RIGHTS_MANAGER_REFERENCE_LIBRARY_ALL_FILES";
            case "RIGHTS_MANAGER_REFERENCE_LIBRARY_ALL_IMAGES":
                return "RIGHTS_MANAGER_REFERENCE_LIBRARY_ALL_IMAGES";
            case "RIGHTS_MANAGER_REFERENCE_LIBRARY_CONFLICTS":
                return "RIGHTS_MANAGER_REFERENCE_LIBRARY_CONFLICTS";
            case "RIGHTS_MANAGER_REFERENCE_LIBRARY_IMAGE_CONFLICTS":
                return "RIGHTS_MANAGER_REFERENCE_LIBRARY_IMAGE_CONFLICTS";
            case "RIGHTS_MANAGER_REFERENCE_LIBRARY_IMAGE_RESOLUTIONS":
                return "RIGHTS_MANAGER_REFERENCE_LIBRARY_IMAGE_RESOLUTIONS";
            case "RIGHTS_MANAGER_REFERENCE_LIBRARY_SOUND_RECORDING_CONFLICTS":
                return "RIGHTS_MANAGER_REFERENCE_LIBRARY_SOUND_RECORDING_CONFLICTS";
            case "RIGHTS_MANAGER_REFERENCE_LIBRARY_SOUND_RECORDING_RESOLUTIONS":
                return "RIGHTS_MANAGER_REFERENCE_LIBRARY_SOUND_RECORDING_RESOLUTIONS";
            case "RIGHTS_MANAGER_REFERENCE_LIBRARY_POSSIBLE_CONFLICTS":
                return "RIGHTS_MANAGER_REFERENCE_LIBRARY_POSSIBLE_CONFLICTS";
            case "RIGHTS_MANAGER_REFERENCE_LIBRARY_RESOLUTIONS":
                return "RIGHTS_MANAGER_REFERENCE_LIBRARY_RESOLUTIONS";
            case "RIGHTS_MANAGER_MATCHING_IMAGES_ALL_MATCHES":
                return "RIGHTS_MANAGER_MATCHING_IMAGES_ALL_MATCHES";
            case "RIGHTS_MANAGER_MATCHING_IMAGES_BLOCKED":
                return "RIGHTS_MANAGER_MATCHING_IMAGES_BLOCKED";
            case "RIGHTS_MANAGER_MATCHING_IMAGES_MANUAL_REVIEW":
                return "RIGHTS_MANAGER_MATCHING_IMAGES_MANUAL_REVIEW";
            case "RIGHTS_MANAGER_MATCHING_IMAGES_MONITORED":
                return "RIGHTS_MANAGER_MATCHING_IMAGES_MONITORED";
            case "RIGHTS_MANAGER_MATCHING_IMAGES_TAKEDOWNS":
                return "RIGHTS_MANAGER_MATCHING_IMAGES_TAKEDOWNS";
            case "RIGHTS_MANAGER_MATCHING_VIDEOS_ALL_MATCHES":
                return "RIGHTS_MANAGER_MATCHING_VIDEOS_ALL_MATCHES";
            case "RIGHTS_MANAGER_MATCHING_VIDEOS_MONITORED":
                return "RIGHTS_MANAGER_MATCHING_VIDEOS_MONITORED";
            case "RIGHTS_MANAGER_MATCHING_VIDEOS_BLOCKED":
                return "RIGHTS_MANAGER_MATCHING_VIDEOS_BLOCKED";
            case "RIGHTS_MANAGER_MATCHING_VIDEOS_COLLECT_AD_EARNINGS":
                return "RIGHTS_MANAGER_MATCHING_VIDEOS_COLLECT_AD_EARNINGS";
            case "RIGHTS_MANAGER_MATCHING_VIDEOS_TAKEDOWNS":
                return "RIGHTS_MANAGER_MATCHING_VIDEOS_TAKEDOWNS";
            case "RIGHTS_MANAGER_PUBLISHER_MATCHING_VIDEOS_MANUAL_REVIEW":
                return "RIGHTS_MANAGER_PUBLISHER_MATCHING_VIDEOS_MANUAL_REVIEW";
            case "RIGHTS_MANAGER_DISPUTES":
                return "RIGHTS_MANAGER_DISPUTES";
            case "RIGHTS_MANAGER_IMAGE_DISPUTES":
                return "RIGHTS_MANAGER_IMAGE_DISPUTES";
            case "RIGHTS_MANAGER_TAKEDOWN_REQUESTS":
                return "RIGHTS_MANAGER_TAKEDOWN_REQUESTS";
            case "RIGHTS_MANAGER_COMPOSITIONS_ALL_FILES":
                return "RIGHTS_MANAGER_COMPOSITIONS_ALL_FILES";
            case "RIGHTS_MANAGER_COMPOSITIONS_CONFLICTS":
                return "RIGHTS_MANAGER_COMPOSITIONS_CONFLICTS";
            case "RIGHTS_MANAGER_SOUND_RECORDINGS_ALL_FILES":
                return "RIGHTS_MANAGER_SOUND_RECORDINGS_ALL_FILES";
            case "RIGHTS_MANAGER_REFERENCE_LIBRARY_PMVS":
                return "RIGHTS_MANAGER_REFERENCE_LIBRARY_PMVS";
            case "RIGHTS_MANAGER_MANUAL_CLAIM_FACEBOOK":
                return "RIGHTS_MANAGER_MANUAL_CLAIM_FB";
            case "RIGHTS_MANAGER_MANUAL_CLAIM_INSTAGRAM":
                return "RIGHTS_MANAGER_MANUAL_CLAIM_IG";
            case "RIGHTS_MANAGER_MATCH_RULES":
                return "RIGHTS_MANAGER_MATCH_RULES";
            case "RIGHTS_MANAGER_AUDIO_RELEASES":
                return "RIGHTS_MANAGER_AUDIO_RELEASES";
            case "RIGHTS_MANAGER_AUDIO_RELEASES_PREMIUM_MUSIC_VIDEOS":
                return "RIGHTS_MANAGER_AUDIO_RELEASES_PREMIUM_MUSIC_VIDEOS";
            case "RIGHTS_MANAGER_OVERVIEW_TOP_MATCHING_POSTS":
                return "RIGHTS_MANAGER_OVERVIEW_TOP_MATCHING_POSTS";
            case "RIGHTS_MANAGER_OVERVIEW_TOP_REFERENCE_FILES":
                return "RIGHTS_MANAGER_OVERVIEW_TOP_REFERENCE_FILES";
            case "RIGHTS_MANAGER_OVERVIEW_PROTECTION_INSIGHTS_TOP_REFERENCE_FILES":
                return "RIGHTS_MANAGER_OVERVIEW_PROTECTION_INSIGHTS_TOP_REFERENCE_FILES";
            case "RIGHTS_MANAGER_REFERENCE_FILE_INSIGHTS_TOP_MATCHING_POSTS":
                return "RIGHTS_MANAGER_REFERENCE_FILE_INSIGHTS_TOP_MATCHING_POSTS";
            case "RIGHTS_MANAGER_REFERENCE_FILE_INSIGHTS_TOP_MATCHING_PAGES_OR_ACCOUNTS":
                return "RIGHTS_MANAGER_REFERENCE_FILE_INSIGHTS_TOP_MATCHING_PAGES_OR_ACCOUNTS";
            case "PLAYLISTS":
                return "CONTENT_PLAYLISTS_TABLE";
            case "SHOWS":
                return "CONTENT_SHOWS_TABLE";
            case "SEASONLESS_SHOW_EPISODES":
                return "CONTENT_SEASONLESS_SHOW_EPISODES_TABLE";
            case "SHOW_SEASON_EPISODES":
                return "CONTENT_SHOW_SEASON_EPISODES_TABLE";
            case "SHOW_SEASONS":
                return "CONTENT_SHOW_SEASONS_TABLE";
            case "PLAYLISTS_VIDEOS":
                return "CONTENT_PLAYLISTS_VIDEOS_TABLE";
            case "PLAYLISTS_PAGE_OWNED_VIDEOS":
                return "CONTENT_PLAYLISTS_PAGE_OWNED_VIDEOS_TABLE";
            case "INSTAGRAM_POSTS":
                return "INSTAGRAM_POSTS";
            case "INSTAGRAM_VIDEO_POSTS":
                return "INSTAGRAM_VIDEO_POSTS";
            case "INSTAGRAM_PHOTO_POSTS":
                return "INSTAGRAM_PHOTO_POSTS";
            case "INSTAGRAM_CAROUSEL_POSTS":
                return "INSTAGRAM_CAROUSEL_POSTS";
            case "INSTAGRAM_STORIES_POSTS":
                return "INSTAGRAM_STORIES_POSTS";
            case "INSTAGRAM_IGTV_POSTS":
                return "INSTAGRAM_IGTV_POSTS";
            case "INSTAGRAM_LINKED_FACEBOOK_PAGE_OWNED_VIDEOS":
                return "INSTAGRAM_LINKED_FACEBOOK_PAGE_OWNED_VIDEOS";
            case "INSTAGRAM_LINKED_FACEBOOK_PAGE_OWNED_POSTS":
                return "INSTAGRAM_LINKED_FACEBOOK_PAGE_OWNED_POSTS";
            case "LIVE_LINEAR_VIDEO_CHANNELS":
                return "LIVE_LINEAR_VIDEO_CHANNEL";
            case "LIVE_LINEAR_VIDEO_CHANNEL_EDIT":
                return "LIVE_LINEAR_VIDEO_CHANNEL_EDIT";
            case "LIVE_LINEAR_VIDEO_CHANNEL_ELIGIBLE_VIDEOS":
                return "LIVE_LINEAR_VIDEO_CHANNEL_ELIGIBLE_VIDEOS";
            default:
                throw new Error("Unsupported table type " + a)
            }
        }
        ;
        d.$MediaManagerContentTableStore25 = function(a) {
            return this.getState().tableConfigs[a]
        }
        ;
        d.$MediaManagerContentTableStore26 = function(a) {
            switch (a) {
            case "content_posts":
                return new Set(b("MediaManagerContentPostsStore").getTables());
            case "content_playlists":
                return new Set(b("MediaManagerContentPlaylistsStore").getTables());
            case "content_shows":
                return new Set(b("MediaManagerContentShowsStore").getTables());
            case "monetization_ad_breaks":
                return new Set(["AD_BREAK_VIDEO_ASSET"]);
            case "rights_manager_reference_library":
                return new Set(b("MMRMReferenceLibraryStore").getTables());
            case "rights_manager_audio_releases":
                return new Set(["RIGHTS_MANAGER_AUDIO_RELEASES", "RIGHTS_MANAGER_AUDIO_RELEASES_PREMIUM_MUSIC_VIDEOS"]);
            case "rights_manager_matching_images":
                return new Set(["RIGHTS_MANAGER_MATCHING_IMAGES_ALL_MATCHES", "RIGHTS_MANAGER_MATCHING_IMAGES_BLOCKED", "RIGHTS_MANAGER_MATCHING_IMAGES_MANUAL_REVIEW", "RIGHTS_MANAGER_MATCHING_IMAGES_MONITORED", "RIGHTS_MANAGER_MATCHING_IMAGES_TAKEDOWNS"]);
            case "rights_manager_matching_videos":
                return new Set(b("MMRMMatchingVideosStore").getTables());
            case "rights_manager_disputes":
                return new Set(["RIGHTS_MANAGER_DISPUTES"]);
            case "rights_manager_image_disputes":
                return new Set(["RIGHTS_MANAGER_IMAGE_DISPUTES"]);
            case "rights_manager_takedown_requests":
                return new Set(["RIGHTS_MANAGER_TAKEDOWN_REQUESTS"]);
            case "rights_manager_compositions":
                return new Set(b("MMRM4PCompositionsStore").getTables());
            case "rights_manager_manual_claim":
                return new Set(b("MMRMManualClaimResultsStore").getTables());
            case "rights_manager_match_rules":
                return new Set(b("MMRMMatchRulesTableStore").getTables());
            case "rights_manager_overview":
                return new Set(["RIGHTS_MANAGER_OVERVIEW_TOP_MATCHING_POSTS", "RIGHTS_MANAGER_OVERVIEW_TOP_REFERENCE_FILES"]);
            case "instagram_content_posts":
                return new Set(b("MediaManagerContentInstagramPostsStore").getTables());
            case "live_linear_video_channels":
                return new Set(b("MediaManagerLiveLinearVideoChannelsPostStore.react").getTables());
            default:
                return new Set()
            }
        }
        ;
        d.$MediaManagerContentTableStore1 = function(a, b) {
            var c = this
              , d = this.$MediaManagerContentTableStore26(a);
            return b.updateIn(["tables"], function(a) {
                a = a.map(function(a) {
                    return d.has(a.type) ? c.$MediaManagerContentTableStore3(a.type, a.set("searchString", "")) : a
                });
                return a
            })
        }
        ;
        d.$MediaManagerContentTableStore27 = function(a, c, d) {
            var e = this.getState().tableConfigs[a]
              , f = e.createRowData ? e.createRowData(d.data) : b("MMContentTableUtils").defaultCreateRowData(d.data)
              , g = e.getNextPagePromise
              , h = g != null ? function() {
                return g(d)
            }
            : d.next;
            b("MediaManagerContentActions").loadContentTableFinished(a, this.$MediaManagerContentTableStore28(e, c, f, a, h != null), h ? h() : null, d.summary)
        }
        ;
        d.$MediaManagerContentTableStore28 = function(a, c, d, e, f) {
            d = d;
            (c.length === 0 || f === !1) && b("QuickPerformanceLogger").markerEnd(26869764, 2, this.$MediaManagerContentTableStore29(e));
            if (!a.dedupeRowsByID)
                return d;
            var g = {};
            d.map(function(a) {
                return g[a.id] = a
            });
            return Object.keys(g).map(function(a) {
                return g[a]
            })
        }
        ;
        d.$MediaManagerContentTableStore8 = function(a, c) {
            var d = this
              , e = c.get("nextPagePromise");
            if (e) {
                var f = c.get("currentPromise");
                f && f.cancel();
                f = b("MediaManagerUtils").getNewPromiseID();
                var g = b("MediaManagerUtils").makeCancelablePromise(f, e, this.$MediaManagerContentTableStore24(a), function(b) {
                    var e;
                    g.id !== ((e = d.getTableState(a).get("currentPromise")) == null ? void 0 : e.id) ? g.cancel() : d.$MediaManagerContentTableStore27(a, c.get("rows").toArray(), b)
                }, function(c) {
                    c.isCanceled || (b("RMDegradedServiceLogging").logTableEvent(c, c.stack, a),
                    b("MediaManagerContentActions").loadContentTableError(a, {
                        error: c,
                        trace: c.stack
                    }))
                }, b("MediaManagerFacebookPagePickerStore").selectedPageIDs().toArray());
                b("promiseDone")(g.promise);
                return c.set("loading", !0).set("nextPagePromise", null).set("currentPromise", g)
            }
            return c
        }
        ;
        d.$MediaManagerContentTableStore4 = function(a, c, d) {
            h.includes(a) && c < 25 && d !== null && b("setImmediate")(b("MediaManagerContentActions").loadNextPage.bind(this, a))
        }
        ;
        d.$MediaManagerContentTableStore3 = function(a, c) {
            var d = this;
            if (b("mediaManagerIsRefactoredTable")(a))
                return c;
            var e = c.get("currentPromise");
            e && (b("QuickPerformanceLogger").markerEnd(26869764, 477, this.$MediaManagerContentTableStore29(a)),
            e.cancel());
            e = this.$MediaManagerContentTableStore25(a);
            var f = b("MediaManagerUtils").getNewPromiseID();
            try {
                var g, h;
                (h = b("QuickPerformanceLogger")).markerStart(26869764, this.$MediaManagerContentTableStore29(a));
                h.markerAnnotate(26869764, {
                    string: (g = {},
                    g.TABLE = a,
                    g)
                }, {
                    instanceKey: this.$MediaManagerContentTableStore29(a)
                });
                h.markerAnnotate(26869764, {
                    "int": (g = {},
                    g.PAGE_COUNT = b("MediaManagerFacebookPagePickerStore").selectedPageIDs().size,
                    g)
                }, {
                    instanceKey: this.$MediaManagerContentTableStore29(a)
                });
                h.markerAnnotate(26869764, {
                    "int": (g = {},
                    g.HAS_SEARCH = c.get("searchString") !== "" ? 1 : 0,
                    g)
                }, {
                    instanceKey: this.$MediaManagerContentTableStore29(a)
                });
                b("QuickPerformanceLogger").markerAnnotate(26869764, {
                    string: (h = {},
                    h.POST_TYPE = c.get("typeFilterValue"),
                    h)
                }, {
                    instanceKey: this.$MediaManagerContentTableStore29(a)
                });
                b("QuickPerformanceLogger").markerAnnotate(26869764, {
                    string: (g = {},
                    g.STATUS_FILTER = c.get("statusFilterValue"),
                    g)
                }, {
                    instanceKey: this.$MediaManagerContentTableStore29(a)
                })
            } catch (a) {
                b("CreatorStudioLoggerStoreUtils").creatorStudioSafelyLogJSError("load_content_table_start", "content_table", a, "content_table_store")
            }
            h = c.get("appliedCustomFilterFields");
            g = [];
            h != null && (g = h.toArray().map(function(a) {
                return a.field.name
            }));
            if (g.length > 0)
                try {
                    b("QuickPerformanceLogger").markerAnnotate(26869764, {
                        string: (h = {},
                        h.CUSTOM_FILTERS = g.sort().join(","),
                        h)
                    }, {
                        instanceKey: this.$MediaManagerContentTableStore29(a)
                    })
                } catch (a) {
                    b("CreatorStudioLoggerStoreUtils").creatorStudioSafelyLogJSError("load_content_table_start", "content_table", a, "content_table_store")
                }
            var i = b("MediaManagerUtils").makeCancelablePromise(f, e.getDataPromise(), this.$MediaManagerContentTableStore24(a), function(b) {
                i.id !== d.getTableState(a).get("currentPromise").id ? i.cancel() : d.$MediaManagerContentTableStore27(a, [], b)
            }, function(c) {
                c.isCanceled || (b("RMDegradedServiceLogging").logTableEvent(c, c.stack, a),
                b("MediaManagerContentActions").loadContentTableError(a, {
                    error: c,
                    trace: c.stack
                }))
            }, b("MediaManagerFacebookPagePickerStore").selectedPageIDs().toArray());
            b("promiseDone")(i.promise, null, function(a) {});
            if (!Object.keys(c.customFilterConfig).length) {
                g = this.getSelectedPages();
                c = c.set("customFilterConfig", e.customFilterConfigFunc && e.customFilterConfigFunc(g) || {})
            }
            return j(c).set("currentPromise", i).set("loading", !0)
        }
        ;
        d.$MediaManagerContentTableStore2 = function(a, c) {
            a = a.set("tableConfigs", c).set("tables", b("immutable").Map(Object.keys(b("MediaManagerContentTable")).map(function(a) {
                if (b("mediaManagerIsRefactoredTable")(a))
                    return [b("MediaManagerContentTable")[a], new (b("MediaManagerContentTableState"))()];
                var d = c[a] || {}
                  , e = d.selectedPreset
                  , f = d.defaultOrderBy;
                d = d.defaultOrderDirection;
                e = new (b("MediaManagerContentTableState"))().set("selectedPreset", e).set("type", b("MediaManagerContentTable")[a]).set("orderBy", f).set("orderDirection", d);
                a === "POSTED_POSTS" && (e = e.set("statusFilterValue", "POSTED"));
                return [b("MediaManagerContentTable")[a], e]
            })));
            return a
        }
        ;
        d.$MediaManagerContentTableStore29 = function(a) {
            return b("objectKeys")(this.getState().tableConfigs).indexOf(a)
        }
        ;
        d.$MediaManagerContentTableStore23 = function(a, b, c) {
            var d = a.set("isSelectAllEnabled", c);
            c ? d = d.set("selectedRowIDs", this.$MediaManagerContentTableStore5(b, a.get("rows").map(function(a) {
                return a.id
            }))) : d = d.set("selectedRowIDs", this.$MediaManagerContentTableStore9(b, this.getTableState(b).get("selectedRowIDs")));
            return d
        }
        ;
        d.$MediaManagerContentTableStore9 = function(a, b) {
            a = this.getTableState(a).get("selectedRowIDs");
            var c = new Set(b);
            return a.filter(function(a) {
                return !c.has(a)
            })
        }
        ;
        d.$MediaManagerContentTableStore5 = function(a, c) {
            if (this.$MediaManagerContentTableStore25(a).allowBulkAction) {
                var d = this.$MediaManagerContentTableStore9(a, c);
                return d.concat(c)
            } else if (c.length === 1)
                return b("immutable").List(c);
            else
                return this.getTableState(a).get("selectedRowIDs")
        }
        ;
        d.$MediaManagerContentTableStore17 = function(a, b) {
            a = this.getTableState(a).get("rows");
            return a.filter(function(a) {
                return b.indexOf(a.id) === -1
            })
        }
        ;
        d.$MediaManagerContentTableStore18 = function(a, c, d) {
            var e = this.$MediaManagerContentTableStore25(a);
            (e == null ? void 0 : e.getContentsUpdatePromise) != null || g(0, 4608, a);
            var f = e.getContentsUpdatePromise(c)
              , h = this.getTableState(a).get("refreshingRowIDs").toSet();
            f && (h = h.union(c),
            b("promiseDone")(f, function(f) {
                f = e.createRowData ? e.createRowData(f.data) : b("MMContentTableUtils").defaultCreateRowData(f.data);
                var g = {};
                c.forEach(function(a) {
                    return g[a] = null
                });
                f.forEach(function(a) {
                    return g[a.id] = a
                });
                b("MediaManagerContentActions").refreshRowsFinished(a, g);
                d && d()
            }, function(d) {
                b("RMDegradedServiceLogging").logTableEvent(d, d.stack, a);
                b("ExceptionDialog").show(d.message, d.message);
                var e = {};
                c.forEach(function(a) {
                    return e[a] = null
                });
                b("MediaManagerContentActions").refreshRowsFinished(a, e)
            }));
            return h.toList()
        }
        ;
        d.$MediaManagerContentTableStore21 = function(a, b) {
            a = this.getTableState(a).get("refreshingRowIDs").toSet();
            a = a.union(b);
            return a.toList()
        }
        ;
        d.$MediaManagerContentTableStore19 = function(a, b, c) {
            b = b.updateIn(["rows"], function(a) {
                return a.map(function(a) {
                    return c[a.id] !== void 0 ? c[a.id] : a
                }).filter(function(a) {
                    return a
                })
            });
            b = b.updateIn(["refreshingRowIDs"], function(a) {
                return a.filter(function(a) {
                    return c[a] === void 0
                })
            });
            return b
        }
        ;
        d.$MediaManagerContentTableStore20 = function(a, c, d) {
            var e = this;
            d = d.filter(function(a) {
                return e.$MediaManagerContentTableStore30(a.pageID)
            });
            c = c.set("rows", b("immutable").List(d).concat(c.get("rows")));
            c = c.set("refreshingRowIDs", this.$MediaManagerContentTableStore18(a, d.map(function(a) {
                return a.id
            })));
            return c
        }
        ;
        d.$MediaManagerContentTableStore10 = function(a, c, d) {
            return d.set("appliedCustomFilterFields", b("immutable").List(a))
        }
        ;
        d.$MediaManagerContentTableStore11 = function(a, b) {
            var c = b.get("appliedCustomFilterFields");
            c = c.filter(function(b) {
                return b.field.name !== a.field.name
            });
            c = c.push(a);
            b = b.set("appliedCustomFilterFields", c);
            return b
        }
        ;
        d.$MediaManagerContentTableStore12 = function(a) {
            a = a.set("newCustomFilterField", null);
            a = a.set("appliedCustomFilterFields", b("immutable").List([]));
            return a
        }
        ;
        d.$MediaManagerContentTableStore13 = function(a) {
            a = a.set("searchString", "");
            return a
        }
        ;
        d.$MediaManagerContentTableStore15 = function(a) {
            var c = this
              , d = a
              , e = this.getSelectedPages();
            Object.keys(b("MediaManagerContentTable")).forEach(function(a) {
                var b = c.$MediaManagerContentTableStore25(a) || {};
                d = d.updateIn(["tables", a], function(a) {
                    a = a.set("customFilterConfig", b.customFilterConfigFunc && b.customFilterConfigFunc(e) || {});
                    return a
                });
                return d
            });
            return d
        }
        ;
        d.$MediaManagerContentTableStore16 = function(a, c) {
            var d = c;
            c = this.$MediaManagerContentTableStore26(a);
            c.forEach(function(a) {
                d = d.updateIn(["tables", a], function(a) {
                    a = a;
                    a = a.set("searchString", "");
                    a = a.set("newCustomFilterField", null);
                    a = a.set("appliedCustomFilterFields", b("immutable").List([]));
                    return a
                })
            });
            return d
        }
        ;
        d.getSelectedPages = function() {
            return b("mediaManagerSelectedTabConfigSelector")().canSelectOnlySinglePage ? [b("getSelectedSinglePage_LEGACY")()].filter(Boolean) : b("MediaManagerLegacyPageSelectors").selectedPages_DO_NOT_USE()
        }
        ;
        d.getTableState = function(a) {
            return this.getState().get("tables").get(a)
        }
        ;
        d.getCustomFilterConfigForTable = function(a) {
            return this.getTableState(a).get("customFilterConfig")
        }
        ;
        d.getAppliedCustomFilterForTable = function(a) {
            return this.getTableState(a).get("appliedCustomFilterFields")
        }
        ;
        d.isTableLoading = function(a) {
            return this.getTableState(a).get("loading")
        }
        ;
        d.$MediaManagerContentTableStore6 = function(a, c) {
            var d = b("MediaManagerTablesByTab").INVERSE_MAP.get(a);
            a = d != null ? b("MediaManagerTablesByTab").MAP[d] : null;
            if (a != null) {
                a = a.reduce(function(b, a) {
                    return b || c.get("tables").get(a).get("loading")
                }, !1);
                a || b("setImmediate")(function() {
                    return b("MediaManagerGlobalActions").loadTabFinished(d)
                })
            }
        }
        ;
        d.$MediaManagerContentTableStore30 = function(a) {
            var c = b("MediaManagerFacebookPagePickerStore").selectedPageIDs().toArray();
            return c.includes(a)
        }
        ;
        return c
    }(b("FluxReduceStore"));
    c.__moduleID = e.id;
    var j = function(a) {
        return a.set("rows", b("immutable").List([])).set("nextPagePromise", null).set("refreshingRowIDs", b("immutable").List([])).set("selectedRowIDs", b("immutable").List([])).set("error", null)
    };
    d = new c(b("MediaManagerDispatcher"));
    e.exports = d
}
), null);
__d("MediaManagerContentPlaylistsActions", ["MediaManagerActionTypes", "MediaManagerDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_CLOSE_ADD_VIDEOS_TRAY
        })
    }
    ;
    f.closeAddVideosTray = a;
    c = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_CLOSE_REORDER_VIDEOS_TRAY
        })
    }
    ;
    f.closeReorderVideosTray = c;
    d = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_CLOSE_ERROR_MESSAGE_DIALOG
        })
    }
    ;
    f.closeErrorDialog = d;
    e = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_CLOSE_NOTIFICATION_PILL
        })
    }
    ;
    f.closeNotificationPill = e;
    a = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_DELETE_PLAYLISTS,
            ids: a
        })
    }
    ;
    f.deletePlaylists = a;
    c = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_PUBLISH_DOGFOODED_PLAYLISTS,
            ids: a
        })
    }
    ;
    f.publishDogfoodedPlaylists = c;
    d = function(a, c) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_OPEN_ADD_VIDEOS_TRAY,
            playlistID: a,
            pageID: c
        })
    }
    ;
    f.openAddVideosTray = d;
    e = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_CREATE_PLAYLIST_CLICK
        })
    }
    ;
    f.createPlaylistClick = e;
    a = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_SET_OWNER_PAGE,
            page: a
        })
    }
    ;
    f.setOwnerPage = a;
    c = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_SET_TITLE,
            title: a
        })
    }
    ;
    f.setTitle = c;
    d = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_SET_DESCRIPTION,
            description: a
        })
    }
    ;
    f.setDescription = d;
    e = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_SET_VIDEO_LIST_ORDER,
            videoListOrder: a
        })
    }
    ;
    f.setVideoListOrder = e;
    a = function(a, c) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_SET_PLAYLIST_THUMBNAIL,
            thumbnailURI: a,
            thumbnailID: c
        })
    }
    ;
    f.setPlaylistThumbnail = a;
    c = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_CREATE_PLAYLIST_SUCCESS,
            playlistID: a
        })
    }
    ;
    f.saveNewPlaylistSuccess = c;
    d = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_EDIT_PLAYLIST_METADATA_SUCCESS,
            playlistID: a
        })
    }
    ;
    f.saveEditPlaylistMetadataSuccess = d;
    e = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_SAVE_PLAYLIST_FAILURE
        })
    }
    ;
    f.savePlaylistFailure = e;
    a = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_EDIT_PLAYLIST_METADATA_CLICK
        })
    }
    ;
    f.editPlaylistMetadataClick = a;
    c = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_EDIT_PLAYLIST_CLICK,
            playlist: a
        })
    }
    ;
    f.editPlaylistClick = c;
    d = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_SAVE_AS_DRAFT_CLICK
        })
    }
    ;
    f.saveAsDraftClick = d;
    e = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_SAVE_AS_DRAFT_SUCCESS
        })
    }
    ;
    f.saveAsDraftSuccess = e;
    a = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_PUBLISH_PLAYLIST_CLICK
        })
    }
    ;
    f.publishPlaylistClick = a;
    c = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_PUBLISH_PLAYLIST_FOR_DOGFOODING_CLICK
        })
    }
    ;
    f.publishPlaylistForDogfoodingClick = c;
    d = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_PUBLISH_PLAYLIST_SUCCESS
        })
    }
    ;
    f.publishPlaylistSuccess = d;
    e = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_PUBLISH_PLAYLIST_FAILURE
        })
    }
    ;
    f.publishPlaylistFailure = e;
    a = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_OPEN_REORDER_VIDEOS_TRAY
        })
    }
    ;
    f.openReorderVideosTray = a;
    c = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_REMOVE_VIDEOS,
            videoIDs: a
        })
    }
    ;
    f.removeVideos = c;
    d = function(a, c) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_REORDER_VIDEOS_TRAY_REORDER_VIDEO,
            sourceID: a,
            targetID: c
        })
    }
    ;
    f.reorderVideo = d;
    e = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_REORDER_VIDEOS_TRAY_REMOVE_VIDEO,
            removeID: a
        })
    }
    ;
    f.reorderVideosTrayRemoveVideo = e;
    a = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_SAVE_ADD_VIDEOS_TRAY,
            videoIDs: a
        })
    }
    ;
    f.saveAddVideosTray = a;
    c = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_ADD_VIDEOS_SUCCESS,
            videoIDs: a
        })
    }
    ;
    f.addVideosSuccess = c;
    d = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_CREATE_OR_EDIT_PLAYLIST_CANCEL_ATTEMPT
        })
    }
    ;
    f.createOrEditPlaylistCancelAttempt = d;
    e = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_CREATE_OR_EDIT_PLAYLIST_CANCEL_ABORT
        })
    }
    ;
    f.createOrEditPlaylistCancelAbort = e;
    a = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_CREATE_OR_EDIT_PLAYLIST_CANCEL_CONFIRM
        })
    }
    ;
    f.createOrEditPlaylistCancelConfirm = a;
    c = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_DETAILS_TRAY_EXIT_ATTEMPT
        })
    }
    ;
    f.detailsTrayExitAttempt = c;
    d = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_DETAILS_TRAY_EXIT_ABORT
        })
    }
    ;
    f.detailsTrayExitAbort = d;
    e = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_DETAILS_TRAY_EXIT_DELETE_PLAYLIST
        })
    }
    ;
    f.detailsTrayExitDeletePlaylist = e;
    a = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_DETAILS_TRAY_EXIT_SAVE_AS_DRAFT
        })
    }
    ;
    f.detailsTrayExitSaveAsDraft = a;
    c = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_DELETE_PLAYLIST_SUCCESS,
            id: a
        })
    }
    ;
    f.deletePlaylistSuccess = c;
    d = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_PUBLISH_DOGFOODED_PLAYLISTS_SUCCESS,
            ids: a
        })
    }
    ;
    f.publishDogfoodedPlaylistsSuccess = d;
    e = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_SAVE_CREATE_OR_EDIT_PLAYLIST_TRAY
        })
    }
    ;
    f.saveCreateOrEditPlaylistTray = e;
    a = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_SAVE_REORDER_VIDEOS_TRAY
        })
    }
    ;
    f.saveReorderVideosTray = a;
    c = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_SHOW_ERROR_MESSAGE_DIALOG,
            errorMessage: a
        })
    }
    ;
    f.showErrorDialog = c;
    d = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_TOGGLE_REORDER_VIDEOS_ORDERING_SELECTOR,
            value: a
        })
    }
    ;
    f.toggleReorderVideosOrderingSelector = d;
    e = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_REORDER_SUCCESS
        })
    }
    ;
    f.reorderSuccess = e;
    a = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_REORDER_FAILURE
        })
    }
    ;
    f.reorderFailure = a;
    c = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_RESET
        })
    }
    ;
    f.reset = c;
    d = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerActionTypes").MediaManagerActionTypes.CONTENT_PLAYLISTS_TRAY_SELECT_TAB,
            selectedTab: a
        })
    }
    ;
    f.selectTab = d
}
), null);
__d("SoundCollectionActionTypes", ["keyMirror"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("keyMirror")({
        SET_SOUND_COLLECTION_RESULTS: "",
        SET_SOUND_COLLECTION_FILTERSELECTION: "",
        SET_SOUND_COLLECTION_TRACKS_SEARCHSTRING: "",
        SET_SOUND_COLLECTION_EFFECTS_SEARCHSTRING: "",
        SUBMIT_SOUND_COLLECTION_TRACKS_SEARCHSTRING: "",
        SUBMIT_SOUND_COLLECTION_EFFECTS_SEARCHSTRING: "",
        SOUND_COLLECTION_PLAY_TRACK: "",
        SET_SOUND_COLLECTION_IS_PLAYING: "",
        SET_SOUND_COLLECTION_NEXT_PAGE_PROMISE: "",
        SOUND_COLLECTION_LOAD_NEXT_PAGE: "",
        SET_SOUND_COLLECTION_TAB: "",
        SOUND_COLLECTION_TAB_LOADING_DONE: "",
        SOUND_COLLECTION_TAB_LOADING_ERROR: "",
        SOUND_COLLECTION_SKIP_TO_NEXT: "",
        SOUND_COLLECTION_SKIP_TO_PREVIOUS: "",
        SOUND_COLLECTION_SET_AUDIO_PLAYER: ""
    });
    c = a;
    e.exports = c
}
), null);
__d("MediaManagerRoutingStore", ["BCMPCreatorStudioRoutingUtils", "FluxReduceStore", "MediaManagerActionTypes", "MediaManagerContentInstagramPostsStore", "MediaManagerContentPostsStore", "MediaManagerContentTableStore", "MediaManagerDispatcher", "MediaManagerFacebookPagePickerStore", "MediaManagerInboxPlusRoutingUtils", "MediaManagerNavigationStore", "MediaManagerQueryParametersTypes", "MediaManagerRoutingStreamerDashboardReducer", "MediaManagerRoutingUtils", "MediaManagerStreamerDashboardRoutingUtils", "SoundCollectionActionTypes", "SoundCollectionStore", "gkx", "immutable", "isMediaManagerRoutedTab", "mediaManagerRoutingBrandedContentReducer"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$MediaManagerRoutingStore1 = function(a, c) {
                var e = a;
                switch (c.type) {
                case b("MediaManagerActionTypes").MediaManagerActionTypes.INITIALIZE:
                case b("MediaManagerActionTypes").MediaManagerActionTypes.SELECT_MODE:
                case b("MediaManagerActionTypes").MediaManagerActionTypes.SELECT_TAB:
                    if (b("gkx")("1619304"))
                        return a;
                    e = d.$MediaManagerRoutingStore2();
                    b("MediaManagerRoutingUtils").updateURI(e);
                    return e;
                case b("MediaManagerActionTypes").MediaManagerActionTypes.SELECT_CONTEXT_DONE:
                    e = e.set(b("MediaManagerQueryParametersTypes").collection_id, c.collectionID);
                    b("MediaManagerRoutingUtils").updateURI(e);
                    return e;
                case b("MediaManagerActionTypes").MediaManagerActionTypes.SELECT_CONTENT_TABLE:
                    e = e.set(b("MediaManagerQueryParametersTypes").content_table, c.contentTable);
                    b("MediaManagerRoutingUtils").updateURI(e);
                    return e;
                case b("MediaManagerActionTypes").MediaManagerActionTypes.SELECT_CONTENT_STATUS_FILTER:
                    e = e.set(b("MediaManagerQueryParametersTypes").post_status, c.status);
                    b("MediaManagerRoutingUtils").updateURI(e);
                    return e;
                case b("MediaManagerActionTypes").MediaManagerActionTypes.SELECT_CONTENT_TYPE_FILTER:
                    e = e.set(b("MediaManagerQueryParametersTypes").post_type, c.contentType);
                    b("MediaManagerRoutingUtils").updateURI(e);
                    return e;
                case b("MediaManagerActionTypes").MediaManagerActionTypes.SET_BRANDED_CONTENT_ROUTING:
                    e = e.set(b("MediaManagerQueryParametersTypes").branded_content, c.routing);
                    b("MediaManagerRoutingUtils").updateURI(e);
                    return e;
                case b("MediaManagerActionTypes").MediaManagerActionTypes.SET_VIDEO_DETAILS_EXPLORER_ROUTING:
                    e = e.set(b("MediaManagerQueryParametersTypes").video_details_explorer, c.routing);
                    b("MediaManagerRoutingUtils").updateURI(e);
                    return e;
                case b("SoundCollectionActionTypes").SET_SOUND_COLLECTION_TAB:
                    e = e.set(b("MediaManagerQueryParametersTypes").sound_collection_tab, c.soundcollectionTab);
                    b("MediaManagerRoutingUtils").updateURI(e);
                    return e;
                case b("MediaManagerActionTypes").MediaManagerActionTypes.ADAPTIVE_COLLECTION_APPLY_PAGE_SELECTION:
                case b("MediaManagerActionTypes").MediaManagerActionTypes.PICKER_SELECT_PAGES:
                    e = e.set(b("MediaManagerQueryParametersTypes").collection_id, "free_form_collection");
                    b("MediaManagerRoutingUtils").updateURI(e);
                    return e;
                case b("MediaManagerActionTypes").MediaManagerActionTypes.PICKER_SELECT_COLLECTION:
                    e = e.set(b("MediaManagerQueryParametersTypes").collection_id, c.selectedCollectionID);
                    b("MediaManagerRoutingUtils").updateURI(e);
                    return e;
                case b("MediaManagerActionTypes").MediaManagerActionTypes.ADAPTIVE_COLLECTION_SELECT_COLLECTION:
                    e = e.set(b("MediaManagerQueryParametersTypes").collection_id, c.selectedCollection.id);
                    b("MediaManagerRoutingUtils").updateURI(e);
                    return e;
                case b("MediaManagerActionTypes").MediaManagerActionTypes.UNSELECT_MH_ONBOARDING_SUB_TAB:
                    e = e.set(b("MediaManagerQueryParametersTypes").sub_tab, null);
                    b("MediaManagerRoutingUtils").updateURI(e);
                    return e;
                case b("MediaManagerActionTypes").MediaManagerActionTypes.CLEAR_MTA_ONBOARDING_PARAMS:
                    e = e.set(b("MediaManagerQueryParametersTypes").mta_onboarding_product, null).set(b("MediaManagerQueryParametersTypes").mta_onboarding_selected_pages, null).set(b("MediaManagerQueryParametersTypes").mta_onboarding_task, null).set(b("MediaManagerQueryParametersTypes").mta_onboarding_includes_brand_collabs, null).set(b("MediaManagerQueryParametersTypes").mta_onboarding_entry_point, null);
                    b("MediaManagerRoutingUtils").updateURI(e);
                    return e;
                case b("MediaManagerActionTypes").MediaManagerActionTypes.SET_EARNINGS_SELECTED_INSIGHTS_TAB:
                    e = e.set(b("MediaManagerQueryParametersTypes").insights_earnings_product, c.selectedInsightsTab);
                    b("MediaManagerRoutingUtils").updateURI(e);
                    return e;
                case b("MediaManagerActionTypes").MediaManagerActionTypes.MONETIZATION_STARS_CHANGE_SUBTAB:
                    e = e.set(b("MediaManagerQueryParametersTypes").stars_sub_tab, c.starsSubTab);
                    b("MediaManagerRoutingUtils").updateURI(e);
                    return e;
                case b("MediaManagerActionTypes").MediaManagerActionTypes.SELECT_CLIPS_LIBRARY_TAB:
                    e = e.set(b("MediaManagerQueryParametersTypes").clips_library_tab, c.tab);
                    b("MediaManagerRoutingUtils").updateURI(e);
                    return e;
                case b("MediaManagerActionTypes").MediaManagerActionTypes.SET_STREAMER_DASHBOARD_ROUTING:
                    e = e.set(b("MediaManagerQueryParametersTypes").streamer_home, c.routing);
                    b("MediaManagerRoutingUtils").updateURI(e);
                    return e;
                default:
                    return e
                }
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.getInitialState = function() {
            var a = b("MediaManagerRoutingUtils").getQueryParamValue();
            return b("immutable").Map(a)
        }
        ;
        d.reduce = function(a, c) {
            var d = b("MediaManagerNavigationStore").selectedTab();
            if (b("gkx")("1619304") && b("isMediaManagerRoutedTab")(d))
                return a;
            b("MediaManagerDispatcher").waitFor([b("MediaManagerFacebookPagePickerStore").getDispatchToken(), b("SoundCollectionStore").getDispatchToken(), b("MediaManagerContentPostsStore").getDispatchToken(), b("MediaManagerContentTableStore").getDispatchToken(), b("MediaManagerContentInstagramPostsStore").getDispatchToken()]);
            d = [this.$MediaManagerRoutingStore1, b("mediaManagerRoutingBrandedContentReducer"), b("MediaManagerRoutingStreamerDashboardReducer")];
            return d.reduce(function(a, b) {
                return b(a, c)
            }, a)
        }
        ;
        d.$MediaManagerRoutingStore3 = function() {
            var a = b("MediaManagerRoutingUtils").getQueryParamValueByKeys([b("MediaManagerQueryParametersTypes").gk_enable, b("MediaManagerQueryParametersTypes").gk_disable, b("MediaManagerQueryParametersTypes").sri]);
            return b("immutable").Map(a)
        }
        ;
        d.$MediaManagerRoutingStore2 = function() {
            var a, c = this.$MediaManagerRoutingStore3(), d = b("MediaManagerNavigationStore").selectedTab();
            c = c.merge((a = {},
            a[b("MediaManagerQueryParametersTypes").tab] = d,
            a));
            a = b("MediaManagerFacebookPagePickerStore").selectedCollectionID();
            if (a !== null && a !== "") {
                var e;
                c = c.merge((e = {},
                e[b("MediaManagerQueryParametersTypes").collection_id] = a,
                e))
            }
            switch (d) {
            case "content_posts":
                a = b("MediaManagerContentPostsStore").getSelectedTable();
                c = c.merge((e = {},
                e[b("MediaManagerQueryParametersTypes").content_table] = a,
                e));
                break;
            case "instagram_content_posts":
                d = b("MediaManagerContentInstagramPostsStore").getSelectedTable();
                c = c.merge((a = {},
                a[b("MediaManagerQueryParametersTypes").content_table] = d,
                a));
                break;
            case "sound_collection":
            case "ct_sound_collection":
                c = c.merge((e = {},
                e[b("MediaManagerQueryParametersTypes").sound_collection_tab] = b("SoundCollectionStore").getSelectedSoundCollectionTab(),
                e[b("MediaManagerQueryParametersTypes").search] = b("SoundCollectionStore").getSearchedQuery() || void 0,
                e));
                break;
            case "monetization_branded_content":
            case "instagram_monetization_branded_content":
                c = c.merge((d = {},
                d[b("MediaManagerQueryParametersTypes").branded_content] = b("BCMPCreatorStudioRoutingUtils").getBrandedContentQueryParam(),
                d));
                break;
            case "monetization_home":
                c = c.merge((a = {},
                a[b("MediaManagerQueryParametersTypes").sub_tab] = b("MediaManagerRoutingUtils").getSubTabQueryParam(),
                a[b("MediaManagerQueryParametersTypes").mta_onboarding_product] = b("MediaManagerRoutingUtils").getMTAOnboardingProductParam(),
                a[b("MediaManagerQueryParametersTypes").mta_onboarding_task] = b("MediaManagerRoutingUtils").getMTAOnboardingTaskParam(),
                a[b("MediaManagerQueryParametersTypes").mta_onboarding_includes_brand_collabs] = b("MediaManagerRoutingUtils").getMTAOnboardingIncludesBrandCollabsParam(),
                a[b("MediaManagerQueryParametersTypes").mta_onboarding_selected_pages] = b("MediaManagerRoutingUtils").getMTAOnboardingSelectedPagesParam(),
                a[b("MediaManagerQueryParametersTypes").mta_onboarding_entry_point] = b("MediaManagerRoutingUtils").getMTAOnboardingEntryPointParam(),
                a));
                break;
            case "inbox_plus":
                c = c.merge((e = {},
                e[b("MediaManagerQueryParametersTypes").inbox_item] = b("MediaManagerInboxPlusRoutingUtils").getInboxPlusQueryParam(),
                e));
                break;
            case "insights_earnings":
                c = c.merge((d = {},
                d[b("MediaManagerQueryParametersTypes").insights_earnings_product] = b("MediaManagerRoutingUtils").getInsightsEarningsProduct(),
                d));
                break;
            case "monetization_stars":
                c = c.merge((a = {},
                a[b("MediaManagerQueryParametersTypes").stars_sub_tab] = b("MediaManagerRoutingUtils").getStarsSubTab(),
                a));
                break;
            case "content_clips":
                c = c.merge((e = {},
                e[b("MediaManagerQueryParametersTypes").clips_library_tab] = b("MediaManagerRoutingUtils").getClipsLibraryTab(),
                e));
                break;
            case "streaming_live_dashboard":
                c = c.merge((d = {},
                d[b("MediaManagerQueryParametersTypes").streamer_home] = b("MediaManagerStreamerDashboardRoutingUtils").getStreamerDashboardQueryParam(),
                d));
                break;
            default:
                break
            }
            return c
        }
        ;
        d.getQueryParam = function(a) {
            return this.getState().get(a)
        }
        ;
        return c
    }(b("FluxReduceStore"));
    a.__moduleID = e.id;
    c = new a(b("MediaManagerDispatcher"));
    e.exports = c
}
), null);
__d("SoundCollectionActions", ["MediaManagerDispatcher", "SoundCollectionActionTypes"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a, c, d) {
        b("MediaManagerDispatcher").dispatch({
            type: b("SoundCollectionActionTypes").SET_SOUND_COLLECTION_RESULTS,
            results: a,
            resultType: c,
            totalResultsCount: d
        })
    }
    ;
    f.setResults = a;
    c = function(a, c) {
        b("MediaManagerDispatcher").dispatch({
            type: b("SoundCollectionActionTypes").SET_SOUND_COLLECTION_FILTERSELECTION,
            tagtype: a,
            value: c
        })
    }
    ;
    f.setFilterSelected = c;
    d = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("SoundCollectionActionTypes").SET_SOUND_COLLECTION_TRACKS_SEARCHSTRING,
            value: a
        })
    }
    ;
    f.setTracksSearchString = d;
    e = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("SoundCollectionActionTypes").SET_SOUND_COLLECTION_EFFECTS_SEARCHSTRING,
            value: a
        })
    }
    ;
    f.setEffectsSearchString = e;
    a = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("SoundCollectionActionTypes").SUBMIT_SOUND_COLLECTION_TRACKS_SEARCHSTRING,
            value: a
        })
    }
    ;
    f.submitTracksSearchString = a;
    c = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("SoundCollectionActionTypes").SUBMIT_SOUND_COLLECTION_EFFECTS_SEARCHSTRING,
            value: a
        })
    }
    ;
    f.submitEffectsSearchString = c;
    d = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("SoundCollectionActionTypes").SOUND_COLLECTION_PLAY_TRACK,
            track: a
        })
    }
    ;
    f.playTrack = d;
    e = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("SoundCollectionActionTypes").SET_SOUND_COLLECTION_IS_PLAYING,
            isPlaying: a
        })
    }
    ;
    f.setIsPlaying = e;
    a = function(a, c) {
        b("MediaManagerDispatcher").dispatch({
            type: b("SoundCollectionActionTypes").SET_SOUND_COLLECTION_NEXT_PAGE_PROMISE,
            promise: a,
            soundcollectionTab: c
        })
    }
    ;
    f.setNextPagePromise = a;
    c = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("SoundCollectionActionTypes").SOUND_COLLECTION_LOAD_NEXT_PAGE
        })
    }
    ;
    f.loadNextPage = c;
    d = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("SoundCollectionActionTypes").SET_SOUND_COLLECTION_TAB,
            soundcollectionTab: a
        })
    }
    ;
    f.setSoundCollectionTab = d;
    e = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("SoundCollectionActionTypes").SOUND_COLLECTION_TAB_LOADING_DONE,
            soundcollectionTab: a
        })
    }
    ;
    f.tabLoadingDone = e;
    a = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("SoundCollectionActionTypes").SOUND_COLLECTION_TAB_LOADING_ERROR,
            soundcollectionTab: a
        })
    }
    ;
    f.setErrorTab = a;
    c = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("SoundCollectionActionTypes").SOUND_COLLECTION_SKIP_TO_NEXT
        })
    }
    ;
    f.skipToNext = c;
    d = function() {
        b("MediaManagerDispatcher").dispatch({
            type: b("SoundCollectionActionTypes").SOUND_COLLECTION_SKIP_TO_PREVIOUS
        })
    }
    ;
    f.skipToPrevious = d;
    e = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: b("SoundCollectionActionTypes").SOUND_COLLECTION_SET_AUDIO_PLAYER,
            audioPlayer: a
        })
    }
    ;
    f.setAudioPlayerRef = e
}
), null);
__d("SoundCollectionStore", ["invariant", "DateConsts", "FluxReduceStore", "GraphAPI", "GraphAPIFieldUtils", "MediaManagerActionTypes", "MediaManagerDispatcher", "MediaManagerFacebookPagePickerStore", "MediaManagerGlobalActions", "MediaManagerGlobalStore", "MediaManagerQueryParametersTypes", "MediaManagerRoutingStore", "MediaManagerStatics", "MediaManagerUtils", "SoundCollectionActions", "SoundCollectionActionTypes", "SoundCollectionConfig", "SoundCollectionConstants", "SoundCollectionTabState", "SoundCollectionTabStateToStoreKey", "gkx", "immutable", "promiseDone"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        downloadLink: "",
        id: 0,
        lengthInSec: 0,
        mediaTags: [],
        title: "",
        type: "sound_tracks"
    };
    a = {
        audioPlayer: null,
        categorySelected: null,
        isPlaying: !1,
        genreSelected: null,
        moodSelected: null,
        playTrack: h,
        query: "",
        soundcollectionTab: "sound_tracks",
        vocalSelected: null,
        trackTab: new (b("SoundCollectionTabState"))("sound_tracks"),
        effectTab: new (b("SoundCollectionTabState"))("sound_effects")
    };
    var i = b("gkx")("773018") ? "ct_sound_collection" : "sound_collection"
      , j = function(b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
            return b.apply(this, arguments) || this
        }
        return a
    }(b("immutable").Record(a));
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.getInitialState = function() {
            return new j()
        }
        ;
        d.$SoundCollectionStore1 = function(a) {
            var c = this.$SoundCollectionStore2()
              , d = this.$SoundCollectionStore3(c);
            a = a.set("genreSelected", null).set("moodSelected", null).set("vocalSelected", null).set("categorySelected", null).set("soundcollectionTab", c).set("trackTab", new (b("SoundCollectionTabState"))("sound_tracks")).set("effectTab", new (b("SoundCollectionTabState"))("sound_effects"));
            for (var c = b("SoundCollectionConstants").TAB_KEYS, e = Array.isArray(c), f = 0, c = e ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var g;
                if (e) {
                    if (f >= c.length)
                        break;
                    g = c[f++]
                } else {
                    f = c.next();
                    if (f.done)
                        break;
                    g = f.value
                }
                g = g;
                var h = d.get(g);
                h && (a = a.set(g, a.get(g).set("searchString", h)))
            }
            return a
        }
        ;
        d.$SoundCollectionStore4 = function(a, c) {
            var d = a.get(c)
              , e = d.get("currentPromise");
            e && e.isOngoing() && e.cancel();
            var f = b("MediaManagerUtils").getNewPromiseID();
            e = this.$SoundCollectionStore5(a, c, f);
            d = this.$SoundCollectionStore6(d, e);
            return a.set(c, d.set("currentPromise", e))
        }
        ;
        d.$SoundCollectionStore7 = function(a, b, c) {
            return c === void 0 ? a : a.set(b, a.get(b).set("searchString", c))
        }
        ;
        d.reduce = function(a, c) {
            if (c.tab !== null && c.tab !== void 0 && c.tab !== i && c.tab !== "creative_tools")
                return a;
            var d = c.soundcollectionTab || c.resultType || a.soundcollectionTab;
            d === "sound_tracks" || d === "sound_effects" || g(0, 3191);
            var e = b("SoundCollectionTabStateToStoreKey")[d]
              , f = e ? a.get(e) : new (b("SoundCollectionTabState"))();
            b("MediaManagerDispatcher").waitFor([b("MediaManagerGlobalStore").getDispatchToken()]);
            switch (c.type) {
            case b("MediaManagerActionTypes").MediaManagerActionTypes.LOAD_TAB_START:
                for (var j = b("SoundCollectionConstants").TAB_KEYS, k = Array.isArray(j), l = 0, j = k ? j : j[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                    var m;
                    if (k) {
                        if (l >= j.length)
                            break;
                        m = j[l++]
                    } else {
                        l = j.next();
                        if (l.done)
                            break;
                        m = l.value
                    }
                    m = m;
                    m = a.get(m).get("currentPromise");
                    m && m.isOngoing() && m.cancel()
                }
                a = this.$SoundCollectionStore1(a);
                m = b("MediaManagerUtils").getNewPromiseID();
                l = [];
                for (var k = b("SoundCollectionConstants").TAB_KEYS, j = Array.isArray(k), n = 0, k = j ? k : k[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                    var o;
                    if (j) {
                        if (n >= k.length)
                            break;
                        o = k[n++]
                    } else {
                        n = k.next();
                        if (n.done)
                            break;
                        o = n.value
                    }
                    o = o;
                    var p = this.$SoundCollectionStore5(a, o, m)
                      , q = a.get(o).set("loading", !0).set("currentPromise", p).set("errorInTab", !1);
                    a = a.set(o, q);
                    l.push({
                        currentPromise: p,
                        tabKey: o
                    })
                }
                this.$SoundCollectionStore8(l, m);
                return a;
            case b("SoundCollectionActionTypes").SOUND_COLLECTION_TAB_LOADING_DONE:
                if (!e)
                    return a;
                f = f.set("loading", !1);
                return a.set(e, f);
            case b("SoundCollectionActionTypes").SET_SOUND_COLLECTION_TAB:
                a = a.set("soundcollectionTab", c.soundcollectionTab);
                return a;
            case b("SoundCollectionActionTypes").SET_SOUND_COLLECTION_RESULTS:
                if (!e)
                    return a;
                f = f.set("results", c.results).set("totalResultsCount", c.totalResultsCount);
                return a.set(e, f);
            case b("SoundCollectionActionTypes").SET_SOUND_COLLECTION_FILTERSELECTION:
                if (!e)
                    return a;
                a.get(c.tagtype) !== void 0 ? a = a.set(c.tagtype, c.value) : (f = f.set(c.tagtype, c.value),
                a = a.set(e, f));
                return this.$SoundCollectionStore4(a, e);
            case b("SoundCollectionActionTypes").SET_SOUND_COLLECTION_TRACKS_SEARCHSTRING:
                return this.$SoundCollectionStore7(a, "trackTab", c.value);
            case b("SoundCollectionActionTypes").SET_SOUND_COLLECTION_EFFECTS_SEARCHSTRING:
                return this.$SoundCollectionStore7(a, "effectTab", c.value);
            case b("SoundCollectionActionTypes").SUBMIT_SOUND_COLLECTION_EFFECTS_SEARCHSTRING:
                a = this.$SoundCollectionStore7(a, "effectTab", c.value);
                return this.$SoundCollectionStore4(a, "effectTab");
            case b("SoundCollectionActionTypes").SUBMIT_SOUND_COLLECTION_TRACKS_SEARCHSTRING:
                a = this.$SoundCollectionStore7(a, "trackTab", c.value);
                return this.$SoundCollectionStore4(a, "trackTab");
            case b("SoundCollectionActionTypes").SOUND_COLLECTION_PLAY_TRACK:
                a = a.set("playTrack", c.track).set("isPlaying", !0);
                return a;
            case b("SoundCollectionActionTypes").SET_SOUND_COLLECTION_IS_PLAYING:
                a = a.set("isPlaying", c.isPlaying);
                q = a.get("audioPlayer");
                q && q.setPlayPauseTo(c.isPlaying);
                return a;
            case b("SoundCollectionActionTypes").SOUND_COLLECTION_SKIP_TO_NEXT:
                return this.$SoundCollectionStore9(a, f, e, d);
            case b("SoundCollectionActionTypes").SOUND_COLLECTION_SKIP_TO_PREVIOUS:
                return this.$SoundCollectionStore10(a, f, e, d);
            case b("SoundCollectionActionTypes").SOUND_COLLECTION_SET_AUDIO_PLAYER:
                a = a.set("audioPlayer", c.audioPlayer);
                return a;
            case b("SoundCollectionActionTypes").SET_SOUND_COLLECTION_NEXT_PAGE_PROMISE:
                if (!e)
                    return a;
                f = f.set("nextPagePromise", c.promise);
                return a.set(e, f);
            case b("SoundCollectionActionTypes").SOUND_COLLECTION_LOAD_NEXT_PAGE:
                return this.$SoundCollectionStore11(a, f, e, d);
            case b("SoundCollectionActionTypes").SOUND_COLLECTION_TAB_LOADING_ERROR:
                if (!e)
                    return a;
                f = f.set("errorInTab", !0).set("loading", !1);
                return a.set(e, f);
            case b("MediaManagerActionTypes").MediaManagerActionTypes.LOAD_TAB_FINISHED:
                for (var p = b("SoundCollectionConstants").TAB_KEYS, o = Array.isArray(p), n = 0, p = o ? p : p[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                    if (o) {
                        if (n >= p.length)
                            break;
                        j = p[n++]
                    } else {
                        n = p.next();
                        if (n.done)
                            break;
                        j = n.value
                    }
                    k = j;
                    f = a.get(k).set("loading", !1);
                    a = a.set(k, f)
                }
                return a;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SELECT_TAB:
                return a.set("isPlaying", !1).set("playTrack", h);
            default:
                return a
            }
        }
        ;
        d.$SoundCollectionStore11 = function(a, c, d, e) {
            if (!d)
                return a;
            var f = c.get("nextPagePromise");
            f && (c = c.set("nextPagePromise", null).set("loading", !0),
            f.then(this.$SoundCollectionStore12.bind(this, c.get("results"), e)).done(function() {
                b("SoundCollectionActions").tabLoadingDone(e)
            }, function() {
                b("SoundCollectionActions").setErrorTab(e)
            }));
            return a.set(d, c)
        }
        ;
        d.$SoundCollectionStore9 = function(a, b, c, d) {
            return this.$SoundCollectionStore13(a, b, c, d, 1)
        }
        ;
        d.$SoundCollectionStore10 = function(a, b, c, d) {
            return this.$SoundCollectionStore13(a, b, c, d, -1)
        }
        ;
        d.$SoundCollectionStore13 = function(a, c, d, e, f) {
            var g = a[b("SoundCollectionTabStateToStoreKey")[a.soundcollectionTab]].results
              , h = g.length;
            if (!h)
                return a;
            var i = g.find(function(b) {
                return b.id === a.playTrack.id
            });
            if (!i)
                i = g[0];
            else {
                var j = g.findIndex(function(b) {
                    return b.id === a.playTrack.id
                });
                j >= h - 5 && (a = this.$SoundCollectionStore11(a, c, d, e));
                d = j + f;
                d === h && !c.get("nextPagePromise") && (d = 0);
                i = g[Math.max(0, Math.min(d, h - 1))]
            }
            return a.set("playTrack", i)
        }
        ;
        d.$SoundCollectionStore2 = function() {
            var a = b("MediaManagerRoutingStore").getQueryParam(b("MediaManagerQueryParametersTypes").sound_collection_tab);
            switch (a) {
            case "sound_effects":
                return "sound_effects";
            case "sound_tracks":
                return "sound_tracks";
            default:
                return "sound_tracks"
            }
        }
        ;
        d.$SoundCollectionStore3 = function(a) {
            var c = b("MediaManagerRoutingStore").getQueryParam(b("MediaManagerQueryParametersTypes").search);
            c || (c = "");
            var d = new Map();
            return d.set(b("SoundCollectionTabStateToStoreKey")[a], c)
        }
        ;
        d.getSelectedSoundCollectionTab = function() {
            return this.getState().get("soundcollectionTab")
        }
        ;
        d.$SoundCollectionStore14 = function(a) {
            if (a.artist_page) {
                var b;
                return {
                    id: a.artist_page.id,
                    name: a.artist_page.name,
                    link: a.artist_page.link,
                    profilePicURI: (b = a.artist_page.picture) == null ? void 0 : b.data.url,
                    coverPhotoURI: (b = a.artist_page.cover) == null ? void 0 : b.source,
                    bio: a.artist_page.about,
                    fanCount: a.artist_page.fan_count,
                    website: a.artist_page.website,
                    category: a.artist_page.category,
                    username: a.artist_page.username
                }
            } else
                return null
        }
        ;
        d.$SoundCollectionStore12 = function(a, c, d) {
            var e = this
              , f = [];
            d.data.forEach(function(a) {
                a.title && f.push({
                    artistCardInfo: e.$SoundCollectionStore14(a),
                    artistName: a.display_artist,
                    downloadLink: a.download_hd_url,
                    id: a.id,
                    lengthInSec: Math.round(a.duration_in_ms / b("DateConsts").MS_PER_SEC),
                    mediaTags: a.media_tags ? a.media_tags.data : [],
                    title: a.title,
                    type: c
                })
            });
            d.next && b("SoundCollectionActions").setNextPagePromise(d.next(), c);
            b("SoundCollectionActions").setResults(a.concat(f), c, d.summary.total_count)
        }
        ;
        d.$SoundCollectionStore15 = function() {
            return ["title", "display_artist", b("GraphAPIFieldUtils").getFieldWithSubfields("artist_page", ["picture.type(normal)", b("GraphAPIFieldUtils").getFieldWithSubfields("cover", ["source"]), "about", "fan_count", "website", "category", "name", "link", "username", "id"]), b("GraphAPIFieldUtils").getFieldWithSubfields("media_tags.limit(100)", ["local_name", "media_tag_type"]), "duration_in_ms", "download_hd_url"]
        }
        ;
        d.$SoundCollectionStore5 = function(a, c, d) {
            c = a.get(c);
            var f = c.lengthSelected
              , g = c.type
              , h = b("SoundCollectionConstants").TAB_TIME_DICT[g] || {}
              , i = null
              , j = null;
            f && h[f] && (i = h[f][0],
            j = h[f][1]);
            h = {
                access_token: b("MediaManagerStatics").accessToken,
                audio_type: g,
                fields: this.$SoundCollectionStore15(),
                title_or_artist: c.searchString,
                time_min: i,
                time_max: j,
                limit: b("SoundCollectionConfig").rowsPerPage,
                summary: ["total_count"]
            };
            f = "SOUND_COLLECTION_TRACKS";
            var k = null;
            switch (g) {
            case "sound_tracks":
                h = babelHelpers["extends"]({}, h, {
                    genre: a.genreSelected,
                    mood: a.moodSelected,
                    vocal: a.vocalSelected
                });
                f = "SOUND_COLLECTION_TRACKS";
                k = new Error("Failed to get sound tracks data");
                break;
            case "sound_effects":
                h = babelHelpers["extends"]({}, h, {
                    sound_effects_category: a.categorySelected
                });
                f = "SOUND_COLLECTION_EFFECTS";
                k = new Error("Failed to get sound effects data");
                break
            }
            return b("MediaManagerUtils").makeCancelablePromise(d, b("GraphAPI")("2.10", e.id).root("sound_collection").edge("audio_assets").get(h), f, this.$SoundCollectionStore12.bind(this, [], g), function(a) {
                a = {
                    error: k,
                    fbtrace: a.fbtrace_id
                };
                throw a
            }, b("MediaManagerFacebookPagePickerStore").selectedPageIDs().toArray())
        }
        ;
        d.$SoundCollectionStore6 = function(a, c) {
            var d = this
              , e = a
              , f = e.type
              , g = b("SoundCollectionTabStateToStoreKey")[f];
            a = a.set("results", []).set("totalResultsCount", 0).set("nextPagePromise", null).set("loading", !0);
            b("promiseDone")(c.promise, function() {
                c.id === d.getState().get(g).get("currentPromise").id ? b("SoundCollectionActions").tabLoadingDone(f) : c.cancel()
            }, function(a) {
                a.isCanceled || b("SoundCollectionActions").setErrorTab(f)
            });
            return a
        }
        ;
        d.$SoundCollectionStore8 = function(a, c) {
            var d = this
              , e = b("MediaManagerUtils").combineCancelablePromises(c, a.map(function(a) {
                return a.currentPromise
            }), "SOUND_COLLECTION_TAB", b("MediaManagerFacebookPagePickerStore").selectedPageIDs().toArray());
            b("promiseDone")(e.promise, function() {
                var c = !0;
                for (var f = 0; f < a.length; f++) {
                    var g = a[f];
                    if (g.currentPromise.id !== d.getState().get(g.tabKey).get("currentPromise").id) {
                        c = !1;
                        break
                    }
                }
                c ? b("MediaManagerGlobalActions").loadTabFinished(i) : e.cancel()
            }, function(a) {
                a.isCanceled || b("MediaManagerGlobalActions").loadTabError(i, a)
            })
        }
        ;
        d.getSearchedQuery = function() {
            var a = this.getState().get("soundcollectionTab");
            return this.getState().get(b("SoundCollectionTabStateToStoreKey")[a]).get("searchString")
        }
        ;
        return c
    }(b("FluxReduceStore"));
    c.__moduleID = e.id;
    d = new c(b("MediaManagerDispatcher"));
    e.exports = d
}
), null);
__d("XMediaManagerComposerController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/media/manager/composer/", {
        composer_id: {
            type: "String"
        },
        page_id: {
            type: "FBID",
            required: !0
        },
        expand_on_init: {
            type: "Bool",
            defaultValue: !1
        },
        entry_point_ref: {
            type: "Enum",
            defaultValue: "media_manager",
            enumType: 1
        },
        selected_content_table: {
            type: "Enum",
            enumType: 1
        }
    })
}
), null);
__d("MediaManagerPostCreationStore", ["fbt", "ActorURI", "Arbiter", "AsyncRequest", "CreatorStudioComposerActions", "CreatorStudioLoggerStoreUtils", "FluxReduceStore", "ImmutableRecordWithV4Types", "LiveVideoBroadcastConstants", "LiveVideoPublisherToolsFunnelLogger", "MediaManagerActionTypes", "MediaManagerBulkUpload3PImporterActions", "MediaManagerBulkUploadActions", "MediaManagerDispatcher", "MediaManagerLoadingTypedLogger", "MediaManagerNotificationPillActions", "MediaManagerQueryParametersTypes", "MediaManagerRefreshActions", "MediaManagerRoutingStore", "Random", "ReactComposerEvents", "VideoComposerActions", "VideoComposerUploadBootloader", "XLiveVideoBroadcastLaunchComposerController", "XMediaManagerComposerController", "immutable", "nullthrows", "promiseDone", "setTimeout", "setupDefaultComposerInstance"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("ImmutableRecordWithV4Types").Record({
        videoComposerID: "",
        asyncRequest: null,
        basicComposerID: "",
        entryPoint: null,
        exitDialogShown: !1,
        fileInput: null,
        isComposerInitializing: !1,
        postType: null,
        publishSuccessTokens: b("immutable").List(),
        selfCertificationTrayShown: !1,
        sessionID: "",
        targetPage: null,
        trayShown: !1,
        videoPublishConfirmDialogShown: !1
    });
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$MediaManagerPostCreationStore10 = function() {
                return d.getState().publishSuccessTokens.forEach(b("Arbiter").unsubscribe)
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.getInitialState = function() {
            return h()
        }
        ;
        d.reduce = function(a, c) {
            var d = a;
            switch (c.type) {
            case b("MediaManagerActionTypes").MediaManagerActionTypes.COMPOSER_GO_LIVE_ERROR:
                d = a.set("trayShown", !1).set("targetPage", null).set("isComposerInitializing", !1);
                this.$MediaManagerPostCreationStore1("post_compose_error", d);
                return d;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.COMPOSER_GO_LIVE_INITIALIZED:
                d = a.set("trayShown", !1).set("targetPage", null).set("isComposerInitializing", !1);
                this.$MediaManagerPostCreationStore1("post_compose_initialized", d);
                return d;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.COMPOSER_LAUNCH_BASIC_POST:
                d = a.set("entryPoint", c.entryPoint).set("postType", "basic_post").set("trayShown", !0);
                this.$MediaManagerPostCreationStore1("post_compose_entry_click", d);
                return d;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.COMPOSER_LAUNCH_SINGLE_VIDEO:
                d = a.set("sessionID", this.$MediaManagerPostCreationStore2());
                d = this.$MediaManagerPostCreationStore3(c.fileInput, c.entryPoint, d);
                this.$MediaManagerPostCreationStore1("post_compose_single_video_entry_click", d);
                return d;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.COMPOSER_LAUNCH_GO_LIVE_POST:
                d = a.set("entryPoint", c.entryPoint).set("postType", "go_live").set("trayShown", !0);
                this.$MediaManagerPostCreationStore1("post_compose_entry_click", d);
                return d;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.COMPOSER_SET_TARGET_PAGE:
                var e = !a.targetPage || a.targetPage.id !== c.targetPage.id;
                d = a.set("targetPage", c.targetPage);
                if (e)
                    if (a.postType === "single_video")
                        b("VideoComposerActions").resetComposer(a.videoComposerID),
                        d = this.$MediaManagerPostCreationStore4(d, b("nullthrows")(d.fileInput), c.targetPage.id);
                    else if (a.postType === "basic_post")
                        d = this.$MediaManagerPostCreationStore5(d);
                    else if (a.postType === "go_live")
                        d = this.$MediaManagerPostCreationStore6(d);
                    else if (a.postType === "bulk_upload") {
                        this.$MediaManagerPostCreationStore7(c.targetPage);
                        return a.set("trayShown", !1)
                    } else if (a.postType === "bulk_upload_importer") {
                        this.$MediaManagerPostCreationStore8(c.targetPage);
                        return a.set("trayShown", !1)
                    }
                this.$MediaManagerPostCreationStore1("post_compose_set_target_page", d);
                return d;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.COMPOSER_VIDEO_COMPOSER_INITIALIZED:
                d = a.set("isComposerInitializing", !1).set("videoComposerID", c.videoComposerID);
                this.$MediaManagerPostCreationStore1("post_compose_initialized", d);
                return d;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.COMPOSER_BASIC_POST_COMPOSER_INITIALIZED:
                d = a.set("isComposerInitializing", !1);
                this.$MediaManagerPostCreationStore1("post_compose_initialized", d);
                e = b("immutable").List([b("Arbiter").subscribeOnce(b("ReactComposerEvents").POST_SUCCEEDED + a.basicComposerID, function() {
                    b("CreatorStudioComposerActions").basicPostSuccess()
                }), b("Arbiter").subscribeOnce("LitestandComposer/publishTemp", function() {
                    b("CreatorStudioComposerActions").basicPostSuccess(),
                    b("MediaManagerNotificationPillActions").pushNotificationPill({
                        label: g._("\u0110\u00e3 \u0111\u0103ng xong! Gi\u1edd b\u1ea1n c\u00f3 th\u1ec3 xem b\u00e0i vi\u1ebft trong th\u01b0 vi\u1ec7n n\u1ed9i dung."),
                        isSuccess: !0
                    }),
                    b("MediaManagerRefreshActions").refreshTab("content_posts")
                })]);
                return d.set("publishSuccessTokens", e);
            case b("MediaManagerActionTypes").MediaManagerActionTypes.COMPOSER_BASIC_POST_BOOTLOAD_ERROR:
                d = a.set("targetPage", null).set("isComposerInitializing", !1);
                this.$MediaManagerPostCreationStore1("post_compose_error", d);
                return d;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.COMPOSER_CLOSE_TRAY_ATTEMPT:
                this.$MediaManagerPostCreationStore1("post_compose_close_tray_attempt", a);
                if (a.targetPage === null)
                    return this.$MediaManagerPostCreationStore9(a);
                if (a.postType === "single_video" && !a.isComposerInitializing) {
                    b("VideoComposerActions").exitDialogAttempt(a.videoComposerID);
                    return a
                } else if (a.postType === "basic_post")
                    return a.set("exitDialogShown", !0);
                return this.getInitialState();
            case b("MediaManagerActionTypes").MediaManagerActionTypes.COMPOSER_CLOSE_TRAY_CANCEL:
                return a.set("exitDialogShown", !1);
            case b("MediaManagerActionTypes").MediaManagerActionTypes.COMPOSER_CLOSE_TRAY_CONFIRM:
                this.$MediaManagerPostCreationStore10();
                return this.$MediaManagerPostCreationStore9(a).set("publishSuccessTokens", b("immutable").List());
            case b("MediaManagerActionTypes").MediaManagerActionTypes.COMPOSER_BASIC_POST_SUCCESS:
                this.$MediaManagerPostCreationStore1("post_compose_success", a);
                this.$MediaManagerPostCreationStore10();
                return this.getInitialState();
            case b("MediaManagerActionTypes").MediaManagerActionTypes.COMPOSER_VIDEO_COMPOSER_PUBLISH_SUCCESS:
                this.$MediaManagerPostCreationStore1("post_compose_success", a);
                this.$MediaManagerPostCreationStore10();
                a.fileInput && a.fileInput.input && a.fileInput.clear();
                return this.getInitialState().set("videoPublishConfirmDialogShown", !0);
            case b("MediaManagerActionTypes").MediaManagerActionTypes.LLVC_LAUNCH_CHANNEL_COMPOSER:
                return a.set("trayShown", !0).set("postType", "live_linear_video_channel");
            case b("MediaManagerActionTypes").MediaManagerActionTypes.LLVC_DISMISS_CHANNEL_COMPOSER:
                return a.set("trayShown", !1).set("postType", "live_linear_video_channel");
            case b("MediaManagerActionTypes").MediaManagerActionTypes.COMPOSER_SHOW_PAGE_SELECTOR_TRAY:
                return a.set("trayShown", !0).set("postType", c.postType);
            case b("MediaManagerActionTypes").MediaManagerActionTypes.OPEN_SELF_CERTIFICATION_TRAY:
                return a.set("selfCertificationTrayShown", !0);
            case b("MediaManagerActionTypes").MediaManagerActionTypes.CLOSE_SELF_CERTIFICATION_TRAY:
                return a.set("selfCertificationTrayShown", !1);
            default:
                return a
            }
        }
        ;
        d.$MediaManagerPostCreationStore1 = function(a, c) {
            var d, e = c == null ? void 0 : (d = c.targetPage) == null ? void 0 : d.id;
            b("CreatorStudioLoggerStoreUtils").creatorStudioSafelyLogEvent(a, c == null ? void 0 : c.entryPoint, function(a) {
                return a.setFunnelSessionID(c == null ? void 0 : c.sessionID).setPostType(c == null ? void 0 : c.postType).setSelectedPageIds(e == null ? [] : [e])
            })
        }
        ;
        d.$MediaManagerPostCreationStore11 = function(a) {
            var b = a.get("asyncRequest");
            b && b.abort();
            return a.set("asyncRequest", null)
        }
        ;
        d.$MediaManagerPostCreationStore5 = function(a) {
            var c = a.targetPage;
            if (c === null || c === void 0) {
                b("CreatorStudioComposerActions").setBasicPostBootloadError();
                return a
            }
            var d = this.$MediaManagerPostCreationStore11(a);
            a = this.$MediaManagerPostCreationStore12(b("nullthrows")(a.entryPoint), b("nullthrows")(a.postType));
            var e = this.$MediaManagerPostCreationStore13(a);
            d = d.set("basicComposerID", e);
            a = b("XMediaManagerComposerController").getURIBuilder().setFBID("page_id", c.id).setBool("expand_on_init", !0).setEnum("entry_point_ref", a).setString("composer_id", e).setEnum("selected_content_table", b("MediaManagerRoutingStore").getState().get(b("MediaManagerQueryParametersTypes").content_table)).getURI();
            e = b("ActorURI").create(a, c.id);
            a = new (b("AsyncRequest"))().setMethod("GET").setReadOnly(!0).setURI(e).setHandler(function(a) {
                b("CreatorStudioComposerActions").basicPostComposerInitialized()
            }).setErrorHandler(function(a) {
                new (b("MediaManagerLoadingTypedLogger"))().setPromiseType("COMPOSER").setEvent("ERROR").setError(a.toError().summary.toString()).setSelectedPageIds([c.id]).log(),
                b("CreatorStudioComposerActions").setBasicPostBootloadError()
            });
            a.send();
            return d.set("asyncRequest", a).set("isComposerInitializing", !0)
        }
        ;
        d.$MediaManagerPostCreationStore3 = function(a, c, d) {
            var e = "single_video"
              , f = b("setupDefaultComposerInstance")();
            b("VideoComposerActions").initializeComposerPreview(f, this.$MediaManagerPostCreationStore12(c, e), a.getInput().files[0], {
                onExitConfirm: function() {
                    return b("CreatorStudioComposerActions").closeTrayConfirm()
                }
            });
            return d.set("entryPoint", c).set("postType", e).set("fileInput", a).set("trayShown", !0).set("videoComposerID", f)
        }
        ;
        d.$MediaManagerPostCreationStore6 = function(a) {
            var c = a.targetPage;
            if (c === null || c === void 0) {
                b("CreatorStudioComposerActions").goLiveComposerError();
                return a
            }
            var d = this.$MediaManagerPostCreationStore11(a);
            b("LiveVideoPublisherToolsFunnelLogger").startFromCreatorStudioWithUnifiedUI();
            a = b("XLiveVideoBroadcastLaunchComposerController").getURIBuilder().setString("default_input_source", b("LiveVideoBroadcastConstants").INPUT_SOURCE.API).setString("composer_entry_point", this.$MediaManagerPostCreationStore12(b("nullthrows")(a.entryPoint), b("nullthrows")(a.postType))).setFBID("page_id", c.id).getURI();
            a = new (b("AsyncRequest"))().setURI(a).setHandler(function(a) {
                b("CreatorStudioComposerActions").goLiveComposerInitialized()
            }).setErrorHandler(function(a) {
                new (b("MediaManagerLoadingTypedLogger"))().setPromiseType("COMPOSER").setEvent("ERROR").setError(a.toError().summary.toString()).setSelectedPageIds([c.id]).log(),
                b("CreatorStudioComposerActions").goLiveComposerError()
            });
            a.send();
            return d.set("asyncRequest", a).set("isComposerInitializing", !0)
        }
        ;
        d.$MediaManagerPostCreationStore12 = function(a, b) {
            switch (a) {
            case "home_composer_entry_point":
                if (b === "basic_post")
                    return "cs_home_basic_post";
                if (b === "single_video")
                    return "cs_home_upload_video";
                if (b === "go_live")
                    return "cs_home_go_live";
                throw new Error("Unhandled combination");
            case "global_composer_circle_entry_point":
            case "global_composer_create_post_cta":
                if (b === "basic_post")
                    return "cs_global_basic_post";
                if (b === "single_video")
                    return "cs_global_upload_video";
                if (b === "go_live")
                    return "cs_global_go_live";
                throw new Error("Unhandled combination");
            case "content_library_posts":
                if (b === "single_video")
                    return "cs_content_library_upload_videos";
                throw new Error("Unhandled combination");
            case "announcement_card":
            case "home_revamp_recent_data_widget":
                if (b === "basic_post")
                    return "cs_home_basic_post";
                throw new Error("Unhandled combination");
            case "boost_playlist":
                if (b === "single_video")
                    return "cs_global_upload_video";
                throw new Error("Unhandled combination");
            default:
                throw new Error("Unhandled entryPoint!")
            }
        }
        ;
        d.$MediaManagerPostCreationStore4 = function(a, c, d) {
            var e = a;
            e = e.set("isComposerInitializing", !0);
            var f = {
                entryPointRef: this.$MediaManagerPostCreationStore12(b("nullthrows")(a.entryPoint), b("nullthrows")(a.postType)),
                file: c.getInput().files[0],
                pageID: d,
                eventCallbacks: {
                    onExitConfirm: function() {
                        return b("CreatorStudioComposerActions").closeTrayConfirm()
                    },
                    onPublishSuccess: function(a, c) {
                        b("CreatorStudioComposerActions").videoComposerPublishSuccess(),
                        b("MediaManagerRefreshActions").refreshTab("content_posts")
                    },
                    onSelfCertificationTrayTransition: function(a) {
                        a ? b("CreatorStudioComposerActions").closeSelfCertificationTray() : b("CreatorStudioComposerActions").openSelfCertificationTray()
                    }
                }
            };
            b("promiseDone")(b("VideoComposerUploadBootloader").videoComposerFetchUploadInitializationData(f).then(function(a) {
                var c = b("setupDefaultComposerInstance")();
                b("VideoComposerActions").initializeComposer(c, f, a);
                b("CreatorStudioComposerActions").videoComposerInitialized(c)
            }));
            return e
        }
        ;
        d.$MediaManagerPostCreationStore7 = function(a) {
            b("setTimeout")(function() {
                b("MediaManagerBulkUploadActions").startUploadForPage(a)
            })
        }
        ;
        d.$MediaManagerPostCreationStore8 = function(a) {
            b("setTimeout")(function() {
                b("MediaManagerBulkUpload3PImporterActions").prepareZipFileUpload(a)
            })
        }
        ;
        d.$MediaManagerPostCreationStore13 = function(a) {
            var c = b("Random").random().toString(36).substring(2);
            return a + "_" + c
        }
        ;
        d.$MediaManagerPostCreationStore9 = function(a) {
            a.postType === "single_video" && (a.fileInput && a.fileInput.input && a.fileInput.clear());
            return this.getInitialState()
        }
        ;
        d.$MediaManagerPostCreationStore2 = function() {
            return b("Random").random().toString(36).substring(2)
        }
        ;
        return c
    }(b("FluxReduceStore"));
    a.__moduleID = e.id;
    c = new a(b("MediaManagerDispatcher"));
    e.exports = c
}
), null);
__d("XCreatorStudioSavedCollectionCreateController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/creator/studio/saved_collection/create/", {
        display_name: {
            type: "String",
            required: !0
        },
        item_ids: {
            type: "FBIDVector",
            required: !0
        }
    })
}
), null);
__d("XCreatorStudioSavedCollectionDeleteController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/creator/studio/saved_collection/delete/", {
        collection_id: {
            type: "FBID",
            required: !0
        }
    })
}
), null);
__d("XCreatorStudioSavedCollectionEditController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/creator/studio/saved_collection/edit/", {
        collection_id: {
            type: "FBID",
            required: !0
        },
        display_name: {
            type: "String",
            required: !0
        },
        item_ids: {
            type: "FBIDVector",
            required: !0
        }
    })
}
), null);
__d("XMediaManagerAvailablePagesController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/media/manager/available_pages/", {
        business_id: {
            type: "String"
        },
        exclude_unpublished_pages: {
            type: "Bool",
            defaultValue: !1
        },
        required_role: {
            type: "String",
            defaultValue: "INSIGHTS_ANALYST"
        }
    })
}
), null);
__d("CreatorStudioSavedCollectionStore", ["Promise", "AsyncRequest", "CreatorStudioLoggerStoreUtils", "CreatorStudioSavedCollectionActions", "FluxReduceStore", "ImmutableRecordWithV4Types", "MediaManagerActionTypes", "MediaManagerAdaptivePickerConstants", "MediaManagerDispatcher", "MediaManagerGlobalActions", "MediaManagerInstagramAccountsPickerActions", "MediaManagerNavigationStore", "MediaManagerPagePickerConstants", "MediaManagerUtils", "XCreatorStudioSavedCollectionCreateController", "XCreatorStudioSavedCollectionDeleteController", "XCreatorStudioSavedCollectionEditController", "XMediaManagerAvailablePagesController", "XMediaManagerContextSwitchController", "XMediaManagerSaveCurrentContextController", "adsCreateSelector", "adsCreateStoreSelector", "immutable", "mediaManagerSelectedTabConfigSelector", "nullthrows", "promiseDone", "setImmediate"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("ImmutableRecordWithV4Types").Record({
        availablePages: null,
        currentPromise: null,
        collectionData: (a = b("immutable")).List(),
        createModeAttempt: !1,
        displayName: "",
        editorError: null,
        editorMode: "NULL_STATE",
        exitAttempt: !1,
        filteredItemIDs: a.List(),
        filteredItems: a.List(),
        hasPendingChanges: !1,
        isDeleting: !1,
        isEditorOpen: !1,
        isLoadingCollection: !1,
        isSaving: !1,
        items: a.Map(),
        pendingCollection: null,
        pickerSelectedPages: a.List(),
        searchQuery: "",
        selectedCollection: null,
        _selectedCollectionID: null,
        showDeleteDialog: !1,
        showUnsavedChangesDialog: !1
    })
      , h = 4;
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var f = arguments.length, g = new Array(f), i = 0; i < f; i++)
                g[i] = arguments[i];
            return (c = d = a.call.apply(a, [this].concat(g)) || this,
            d.getCollections = b("adsCreateStoreSelector")([babelHelpers.assertThisInitialized(d)], function() {
                return d.getState().get("collectionData")
            }, {
                name: e.id
            }),
            d.shouldUseNoCollectionsMode = b("adsCreateSelector")([d.getCollections], function(a) {
                a = a.find(function(a) {
                    return a.id === "all_pages"
                });
                if (a != null)
                    return a.items.size <= h;
                else
                    return !1
            }, {
                name: e.id
            }),
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.getInitialState = function() {
            return g()
        }
        ;
        d.reduce = function(a, c) {
            var d = a;
            switch (c.type) {
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SELECT_CONTEXT:
                var e = c.source;
                b("promiseDone")(this.$CreatorStudioSavedCollectionStore1(c.collectionID), function(a) {
                    a && b("MediaManagerGlobalActions").selectContextDone(a.allPages, a.selectedContext.selectedCollectionID, a.collectionPages, a.collectionData, a.instagramProfiles, e)
                });
                return a.set("isLoadingCollection", !0);
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SELECT_CONTEXT_DONE:
                var f = c.availablePages.map(function(a) {
                    return a.id
                });
                this.$CreatorStudioSavedCollectionStore2(c.collectionID, f);
                d = d.set("collectionData", c.collectionData).set("_selectedCollectionID", c.collectionID).set("isLoadingCollection", !1);
                return d;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SELECT_TAB:
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SELECT_MODE:
                return a;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SAVED_COLLECTION_PICKER_SELECT_PAGES:
                d = this.$CreatorStudioSavedCollectionStore3(d, c.selectedPages);
                return d;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.ADAPTIVE_COLLECTION_PICKER_SELECT_PAGES:
                d = this.$CreatorStudioSavedCollectionStore4(d, c.pages);
                return d;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.ADAPTIVE_COLLECTION_PICKER_DESELECT_PAGES:
                d = this.$CreatorStudioSavedCollectionStore5(d, c.pages);
                return d;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SAVED_COLLECTION_AVAILABLE_PAGES_LOADED:
                d = a.set("availablePages", c.pages).set("items", b("immutable").Map(c.pages.map(function(a) {
                    return [a.id, !1]
                })));
                return d;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SAVED_COLLECTION_CANCEL_DELETE_COLLECTION:
                d = a.set("showDeleteDialog", !1);
                return d;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SAVED_COLLECTION_CANCEL_EDITOR_CLOSE:
                d = a.set("createModeAttempt", !1).set("exitAttempt", !1).set("pendingCollection", null).set("showUnsavedChangesDialog", !1);
                return d;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SAVED_COLLECTION_CLOSE_EDITOR_ATTEMPT:
                d = this.$CreatorStudioSavedCollectionStore6(a);
                return d;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SAVED_COLLECTION_DELETE_COLLECTION:
                d = this.$CreatorStudioSavedCollectionStore7(a);
                return d;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SAVED_COLLECTION_DELETE_COLLECTION_ATTEMPT:
                d = a.set("showDeleteDialog", !0);
                return d;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SAVED_COLLECTION_DELETE_COLLECTION_DONE:
                if (c.success && a.selectedCollection) {
                    var g = a.selectedCollection;
                    f = g.id === a.get("_selectedCollectionID");
                    var h = this.getCollections().filter(function(a) {
                        return a.id !== g.id
                    });
                    this.$CreatorStudioSavedCollectionStore8(a, g);
                    d = a.set("collectionData", h).set("editorMode", "NULL_STATE").set("isDeleting", !1).set("selectedCollection", null).set("showDeleteDialog", !1);
                    f && b("setImmediate")(function() {
                        return b("MediaManagerGlobalActions").selectContext()
                    })
                } else
                    d = a.set("editorError", "DELETE").set("isDeleting", !1).set("showDeleteDialog", !1);
                return d;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SAVED_COLLECTION_DESELECT_ALL:
                d = a.set("items", a.items.map(function(b, c) {
                    return a.filteredItemIDs.includes(c) ? !1 : b
                }));
                d = this.$CreatorStudioSavedCollectionStore9(d);
                return d;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SAVED_COLLECTION_DISCARD:
                d = this.$CreatorStudioSavedCollectionStore10(a);
                return d;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SAVED_COLLECTION_EDITOR_ERROR:
                d = a.set("editorError", c.error).set("isDeleting", !1).set("isSaving", !1).set("showDeleteDialog", !1);
                return d;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SAVED_COLLECTION_OPEN_EDITOR:
                d = a.set("availablePages", null).set("isEditorOpen", !0);
                b("promiseDone")(this.$CreatorStudioSavedCollectionStore11(), function(a) {
                    b("CreatorStudioSavedCollectionActions").availablePagesLoaded(a)
                }, function(a) {
                    b("CreatorStudioSavedCollectionActions").editorError("AVAILABLE_PAGES")
                });
                return d;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SAVED_COLLECTION_RESET_EDITOR:
                d = this.$CreatorStudioSavedCollectionStore12(a);
                return d;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SAVED_COLLECTION_SAVE:
                d = this.$CreatorStudioSavedCollectionStore13(a);
                return d;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SAVED_COLLECTION_SAVE_DONE:
                return this.$CreatorStudioSavedCollectionStore14(a, c.collection);
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SAVED_COLLECTION_SELECT_ALL:
                h = a.items.map(function(b, c) {
                    return a.filteredItemIDs.includes(c) || b
                });
                h.filter(function(a) {
                    return a
                }).size <= b("MediaManagerPagePickerConstants").MAX_PAGES_IN_COLLECTION && (d = a.set("items", h),
                d = this.$CreatorStudioSavedCollectionStore9(d));
                return d;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SAVED_COLLECTION_SELECT_COLLECTION_ATTEMPT_EDITOR:
                d = this.$CreatorStudioSavedCollectionStore15(a, c.selectedCollection);
                return d;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SAVED_COLLECTION_SELECT_COLLECTION:
                b("CreatorStudioLoggerStoreUtils").creatorStudioSafelyLogEvent("collections_select_page_picker", "page_collections", function(a) {
                    return a.setCollectionID(c.selectedCollection.id).setSelectedPageIds(c.selectedCollection.items.toArray())
                });
                b("setImmediate")(function() {
                    return b("MediaManagerGlobalActions").selectContext(c.selectedCollection.id)
                });
                return a;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SAVED_COLLECTION_SELECT_PENDING_COLLECTION:
                a.pendingCollection && (d = this.$CreatorStudioSavedCollectionStore16(a, a.pendingCollection));
                return d;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SAVED_COLLECTION_SET_DISPLAY_NAME:
                d = a.set("displayName", c.displayName);
                d = this.$CreatorStudioSavedCollectionStore9(d);
                return d;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SAVED_COLLECTION_SET_EDITOR_MODE_ATTEMPT:
                return this.$CreatorStudioSavedCollectionStore17(a, c.editorMode);
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SAVED_COLLECTION_SET_SEARCH_QUERY:
                d = a.set("searchQuery", c.searchQuery);
                d = this.$CreatorStudioSavedCollectionStore18(d);
                return d;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.SAVED_COLLECTION_TOGGLE_ITEM:
                f = a.items.get(c.item);
                h = a.items.filter(function(a) {
                    return a
                }).size;
                (f || !f && h < b("MediaManagerPagePickerConstants").MAX_PAGES_IN_COLLECTION) && (d = a.set("items", a.items.set(c.item, !f)),
                d = this.$CreatorStudioSavedCollectionStore9(d));
                return d;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.APPLY_PAGE_SELECTION:
                this.$CreatorStudioSavedCollectionStore19(c.pickerSelectedPages);
                return d;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.ADAPTIVE_COLLECTION_SELECT_COLLECTION:
                b("CreatorStudioLoggerStoreUtils").creatorStudioSafelyLogEvent("collections_select_page_picker", "page_collections", function(a) {
                    return a.setCollectionID(c.selectedCollection.id).setSelectedPageIds(c.selectedCollection.items.toArray())
                });
                this.$CreatorStudioSavedCollectionStore20(a.get("isLoadingCollection"), c.selectedCollection);
                return d;
            case b("MediaManagerActionTypes").MediaManagerActionTypes.ADAPTIVE_COLLECTION_APPLY_PAGE_SELECTION:
                this.$CreatorStudioSavedCollectionStore19(c.pickerSelectedPages);
                return a.set("_selectedCollectionID", "free_form_collection");
            default:
                return d
            }
        }
        ;
        d.$CreatorStudioSavedCollectionStore20 = function(a, c) {
            var d = this.getSelectedCollection();
            if (a || c === d)
                return;
            b("setImmediate")(function() {
                b("MediaManagerGlobalActions").selectContext(c.id),
                b("MediaManagerGlobalActions").closePagesSelector()
            })
        }
        ;
        d.$CreatorStudioSavedCollectionStore1 = function(a) {
            return new (b("Promise"))(function(c, d) {
                var e = b("XMediaManagerContextSwitchController").getURIBuilder().setString("collection_id", a).getURI();
                new (b("AsyncRequest"))().setURI(e).setMethod("POST").setReadOnly(!0).setHandler(function(a) {
                    var e = a.payload.allPages
                      , f = a.payload.collectionData
                      , g = a.payload.collectionPages
                      , h = a.payload.IGProfiles
                      , i = a.payload.selectedContext;
                    if (!e || !f || !g || !i || !h || a.error) {
                        d();
                        return
                    }
                    a = f.map(function(a) {
                        return {
                            id: a.id,
                            displayName: a.displayName,
                            items: b("immutable").List(a.items),
                            isDynamic: a.isDynamic,
                            threeThumbnailUris: b("immutable").List(a.threeThumbnailUris)
                        }
                    });
                    c({
                        allPages: e,
                        collectionData: b("immutable").List(a),
                        collectionPages: g,
                        instagramProfiles: h,
                        selectedContext: i
                    })
                }).setErrorHandler(function(a) {
                    b("CreatorStudioLoggerStoreUtils").creatorStudioSafelyLogAsyncRequestError("select_context", "page_collections", a),
                    d()
                }).send()
            }
            )
        }
        ;
        d.getAllPages = function() {
            var a, b = this.getState().collectionData;
            a = (a = b.find(function(a) {
                return a.id === "all_pages"
            })) != null ? a : b.find(function(a) {
                return a.id === "partner_insights_pages"
            });
            return a == null ? null : a.items
        }
        ;
        d.getContextCollectionData = function() {
            return this.getState().collectionData
        }
        ;
        d.$CreatorStudioSavedCollectionStore6 = function(a) {
            if (this.getContextCollectionData().size == 0 && a.availablePages != null && a.availablePages.length > 0)
                return a;
            if (a.hasPendingChanges)
                return a.set("exitAttempt", !0).set("showUnsavedChangesDialog", !0);
            else
                return this.$CreatorStudioSavedCollectionStore21(a)
        }
        ;
        d.$CreatorStudioSavedCollectionStore21 = function(a) {
            var c = this.$CreatorStudioSavedCollectionStore12(a);
            c = c.set("exitAttempt", !1).set("isEditorOpen", !1).set("showUnsavedChangesDialog", !1);
            a = (a = a.collectionData) != null ? a : b("immutable").List();
            a.size && !this.getState().get("_selectedCollectionID") && b("setImmediate")(b("MediaManagerGlobalActions").selectContext.bind(this, a.get(0).id));
            return c
        }
        ;
        d.$CreatorStudioSavedCollectionStore7 = function(a) {
            var c = this
              , d = a.currentPromise;
            a;
            d && d.isOngoing() && d.cancel();
            var e = this.$CreatorStudioSavedCollectionStore22(a);
            b("promiseDone")(e.promise, function() {
                var a = c.getState().currentPromise;
                (!a || e.id !== a.id) && e.cancel()
            });
            d = a.set("currentPromise", e).set("editorError", null).set("isDeleting", !0);
            return d
        }
        ;
        d.$CreatorStudioSavedCollectionStore18 = function(a) {
            if (!a.availablePages)
                return a;
            var c = a.availablePages.filter(function(b) {
                return b.name.toLowerCase().includes(a.searchQuery.trim().toLowerCase())
            });
            c.sort(function(a, b) {
                return a.name.localeCompare(b.name)
            });
            c.sort(function(b, c) {
                return (a.items.get(c.id) ? 1 : 0) - (a.items.get(b.id) ? 1 : 0)
            });
            var d = c.map(function(a) {
                return a.id
            });
            return a.set("filteredItems", b("immutable").List(c)).set("filteredItemIDs", b("immutable").List(d))
        }
        ;
        d.$CreatorStudioSavedCollectionStore11 = function() {
            return new (b("Promise"))(function(a, c) {
                var d = b("XMediaManagerAvailablePagesController").getURIBuilder().getURI();
                new (b("AsyncRequest"))().setURI(d).setMethod("POST").setReadOnly(!0).setHandler(function(b) {
                    var d = b.payload;
                    if (!d || b.error) {
                        c([]);
                        return
                    }
                    a(d)
                }).setErrorHandler(function(a) {
                    b("CreatorStudioLoggerStoreUtils").creatorStudioSafelyLogAsyncRequestError("manage_collections", "page_collections", a),
                    c([])
                }).send()
            }
            )
        }
        ;
        d.$CreatorStudioSavedCollectionStore22 = function(a) {
            var c = b("MediaManagerUtils").getNewPromiseID();
            a = b("nullthrows")(a.selectedCollection);
            a = b("XCreatorStudioSavedCollectionDeleteController").getURIBuilder().setFBID("collection_id", a.id).getRequest_LEGACY_UNTYPED(new (b("AsyncRequest"))()).setMethod("POST").setReadOnly(!0).exec().then(function(a) {
                b("CreatorStudioSavedCollectionActions").deleteCollectionDone(a.payload)
            })["catch"](function(a) {
                b("CreatorStudioSavedCollectionActions").editorError("DELETE")
            });
            return b("MediaManagerUtils").makeCancelablePromise(c, a, "SAVED_COLLECTION_EDITOR", function(a) {}, function(a) {}, [])
        }
        ;
        d.$CreatorStudioSavedCollectionStore23 = function(a) {
            var c = b("MediaManagerUtils").getNewPromiseID()
              , d = new (b("Promise"))(function(c, d) {
                var e = a.selectedCollection;
                c = e ? b("XCreatorStudioSavedCollectionEditController").getURIBuilder().setFBID("collection_id", e.id) : b("XCreatorStudioSavedCollectionCreateController").getURIBuilder();
                c = c.setString("display_name", a.displayName.trim()).setFBIDVector("item_ids", a.items.filter(function(a) {
                    return a
                }).keySeq().toArray()).getRequest_LEGACY_UNTYPED(new (b("AsyncRequest"))());
                c.setMethod("POST").setReadOnly(!0).setReplaceTransportMarkers().setPayloadHandler(function(a) {
                    b("CreatorStudioSavedCollectionActions").saveDone(a.collection)
                }).setErrorHandler(function(a) {
                    b("CreatorStudioSavedCollectionActions").editorError(e ? "EDIT" : "CREATE"),
                    d({
                        error: new Error(a.errorDescription)
                    })
                }).send()
            }
            );
            return b("MediaManagerUtils").makeCancelablePromise(c, d, "SAVED_COLLECTION_EDITOR", function(a) {}, function(a) {}, [])
        }
        ;
        d.getSelectedCollection = function() {
            var a = this.getContextCollectionData()
              , b = this.getState().get("_selectedCollectionID")
              , c = null;
            if (a.size) {
                a = a.filter(function(a) {
                    return a.id === b
                });
                a.size && (c = a.get(0))
            }
            return c
        }
        ;
        d.$CreatorStudioSavedCollectionStore10 = function(a) {
            if (a.exitAttempt)
                return this.$CreatorStudioSavedCollectionStore21(a);
            else if (a.pendingCollection)
                return this.$CreatorStudioSavedCollectionStore16(a, a.pendingCollection);
            else if (a.createModeAttempt)
                return this.$CreatorStudioSavedCollectionStore24(a, "CREATE");
            return a
        }
        ;
        d.$CreatorStudioSavedCollectionStore9 = function(a) {
            var c = !1
              , d = !1
              , e = !0;
            if (a.displayName.trim() === "" || !a.items.filter(function(a) {
                return a
            }).count())
                e = !1;
            else if (a.selectedCollection) {
                a.displayName !== a.selectedCollection.displayName && (c = !0);
                var f = b("immutable").Map(a.selectedCollection.items.map(function(a) {
                    return [a, !0]
                }));
                f.equals(a.items.filter(function(a) {
                    return a
                })) || (d = !0)
            }
            return a.set("hasPendingChanges", e && (a.editorMode === "CREATE" || c || d))
        }
        ;
        d.$CreatorStudioSavedCollectionStore12 = function(a) {
            var b = a.currentPromise;
            a;
            b && b.isOngoing() && b.cancel();
            b = a.set("currentPromise", null).set("hasPendingChanges", !1).set("isDeleting", !1).set("isSaving", !1).set("items", a.items.map(function(a) {
                return !1
            })).set("editorError", null).set("editorMode", "NULL_STATE").set("selectedCollection", null);
            return b
        }
        ;
        d.$CreatorStudioSavedCollectionStore13 = function(a) {
            var c = this
              , d = a.currentPromise;
            a;
            d && d.isOngoing() && d.cancel();
            var e = this.$CreatorStudioSavedCollectionStore23(a);
            b("promiseDone")(e.promise, function() {
                var a = c.getState().currentPromise;
                (!a || e.id !== a.id) && e.cancel()
            });
            d = a.set("currentPromise", e).set("editorError", null).set("isSaving", !0).set("showUnsavedChangesDialog", !1);
            d = this.$CreatorStudioSavedCollectionStore10(d);
            return d
        }
        ;
        d.$CreatorStudioSavedCollectionStore14 = function(a, c) {
            var d = this.getCollections().filter(function(a) {
                return a.id !== c.id
            });
            d = d.push(c);
            this.$CreatorStudioSavedCollectionStore25(a, c);
            d = d.sort(function(a, b) {
                return a.displayName.localeCompare(b.displayName)
            });
            a = a.set("collectionData", d).set("hasPendingChanges", !1).set("isSaving", !1).set("isEditorOpen", !1).set("exitAttempt", !1).set("showUnsavedChangesDialog", !1);
            b("setImmediate")(function() {
                return b("MediaManagerGlobalActions").closePagesSelector()
            });
            b("setImmediate")(function() {
                return b("MediaManagerGlobalActions").selectContext(c.id)
            });
            return a
        }
        ;
        d.$CreatorStudioSavedCollectionStore25 = function(a, c) {
            a = this.getCollections().filter(function(a) {
                return a.id === c.id
            }).size !== 0;
            a = a ? "collection_tray_edit_collection_success" : "collection_tray_create_collection_success";
            b("CreatorStudioLoggerStoreUtils").creatorStudioSafelyLogEvent(a, "page_collections", function(a) {
                return a.setCollectionID(c.id)
            })
        }
        ;
        d.$CreatorStudioSavedCollectionStore8 = function(a, c) {
            b("CreatorStudioLoggerStoreUtils").creatorStudioSafelyLogEvent("collection_tray_delete_collection_success", "page_collections", function(a) {
                return a.setSelectedPageIds(c == null ? [] : c.items.toArray()).setCollectionID(c.id)
            })
        }
        ;
        d.$CreatorStudioSavedCollectionStore16 = function(a, b) {
            a = a.set("displayName", b.displayName).set("editorError", null).set("editorMode", "VIEW").set("hasPendingChanges", !1).set("items", a.items.map(function(a, c) {
                return b.items.includes(c)
            })).set("pendingCollection", null).set("searchQuery", "").set("selectedCollection", b).set("showUnsavedChangesDialog", !1);
            a = this.$CreatorStudioSavedCollectionStore18(a);
            return a
        }
        ;
        d.$CreatorStudioSavedCollectionStore15 = function(a, b) {
            var c = a;
            a.hasPendingChanges ? c = c.set("pendingCollection", b).set("showUnsavedChangesDialog", !0) : c = this.$CreatorStudioSavedCollectionStore16(c, b);
            return c
        }
        ;
        d.$CreatorStudioSavedCollectionStore17 = function(a, b) {
            var c;
            a;
            a.hasPendingChanges && b === "CREATE" ? c = a.set("createModeAttempt", !0).set("showUnsavedChangesDialog", !0) : c = this.$CreatorStudioSavedCollectionStore24(a, b);
            return c
        }
        ;
        d.$CreatorStudioSavedCollectionStore24 = function(a, b) {
            var c = a.set("createModeAttempt", !1).set("editorError", null).set("editorMode", b).set("hasPendingChanges", !1).set("searchQuery", "").set("showUnsavedChangesDialog", !1);
            c = this.$CreatorStudioSavedCollectionStore18(c);
            if (b === "CREATE")
                c = c.set("displayName", "").set("items", a.items.map(function(a) {
                    return !1
                })).set("selectedCollection", null);
            else if (b === "VIEW" && a.selectedCollection) {
                var d = a.selectedCollection;
                c = c.set("displayName", d.displayName).set("items", a.items.map(function(a, b) {
                    return d.items.includes(b)
                })).set("hasPendingChanges", !1)
            }
            a.editorMode === "CREATE" && b === "VIEW" && (c = c.set("editorMode", "NULL_STATE").set("hasPendingChanges", !1));
            return c
        }
        ;
        d.$CreatorStudioSavedCollectionStore3 = function(a, c) {
            var d = b("MediaManagerNavigationStore").selectedMode();
            if (d === "facebook")
                return a.set("pickerSelectedPages", b("immutable").List(c));
            else
                d === "instagram" && b("MediaManagerInstagramAccountsPickerActions").selectAllAccounts(c);
            return a
        }
        ;
        d.$CreatorStudioSavedCollectionStore4 = function(a, c) {
            var d = b("MediaManagerNavigationStore").selectedMode();
            if (d === "facebook") {
                var e, f = a.pickerSelectedPages, g = f.map(function(a) {
                    return a.id
                }), h = c.filter(function(a) {
                    return !g.contains(a.id)
                });
                f = (e = f).push.apply(e, h);
                return a.set("pickerSelectedPages", f)
            } else
                d === "instagram" && b("MediaManagerInstagramAccountsPickerActions").selectAllAccounts(c);
            return a
        }
        ;
        d.$CreatorStudioSavedCollectionStore5 = function(a, c) {
            var d = b("MediaManagerNavigationStore").selectedMode();
            if (d === "facebook") {
                var e = a.pickerSelectedPages
                  , f = c.map(function(a) {
                    return a.id
                });
                return a.set("pickerSelectedPages", e.filter(function(a) {
                    return f.indexOf(a.id) === -1
                }))
            } else
                d === "instagram" && b("MediaManagerInstagramAccountsPickerActions").selectAllAccounts([]);
            return a
        }
        ;
        d.$CreatorStudioSavedCollectionStore19 = function(a) {
            var c = b("MediaManagerNavigationStore").selectedMode()
              , d = b("mediaManagerSelectedTabConfigSelector")();
            d = d.canSelectOnlySinglePage;
            c === "facebook" ? (b("setImmediate")(function() {
                return b("MediaManagerGlobalActions").closePagesSelector()
            }),
            d === !0 ? b("setImmediate")(function() {
                return b("MediaManagerGlobalActions").selectPages(a)
            }) : b("setImmediate")(function() {
                return b("MediaManagerGlobalActions").selectPages(a)
            })) : c === "instagram" && (b("setImmediate")(function() {
                return b("MediaManagerInstagramAccountsPickerActions").closeInstagramAccountsPickerMenu()
            }),
            d === !0 ? b("setImmediate")(function() {
                return b("MediaManagerInstagramAccountsPickerActions").applySingleInstagramAccounts(a[0])
            }) : b("setImmediate")(function() {
                return b("MediaManagerInstagramAccountsPickerActions").applyInstagramAccounts(a)
            }))
        }
        ;
        d.$CreatorStudioSavedCollectionStore2 = function(a, c) {
            if (c.length !== 0) {
                var d = b("XMediaManagerSaveCurrentContextController").getURIBuilder().getURI();
                new (b("AsyncRequest"))().setURI(d).setData({
                    associated_ids: c,
                    type: b("MediaManagerAdaptivePickerConstants").MY_PAGES_CONTEXT,
                    collection_id: a
                }).setMethod("POST").send()
            }
        }
        ;
        return c
    }(b("FluxReduceStore"));
    c.__moduleID = e.id;
    d = new c(b("MediaManagerDispatcher"));
    e.exports = d
}
), null);
__d("InstreamVideosSensitiveAdsBlockListConfirmationDataStoreUtils", ["CurrentUser", "InstreamVideosSensitiveAdsBlockListConfirmationDataStore", "MediaManagerAdaptivePickerConstants"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getReviewStatus = a;
    function a() {
        var a = {
            businessID: b("MediaManagerAdaptivePickerConstants").MY_PAGES_CONTEXT,
            pageID: "0",
            sourceApp: "creator_studio",
            userID: b("CurrentUser").getAccountID()
        };
        return b("InstreamVideosSensitiveAdsBlockListConfirmationDataStore").getReviewStatus(a)
    }
}
), null);
__d("CreatorStudioTopPriorityTipUtils", ["AYMTClientSideLogging", "CreatorStudioComposerActions", "CreatorStudioMultipostActions", "CreatorStudioTopPriorityCardsActions", "InstreamVideosSensitiveAdsBlockListConfirmationDataStoreUtils", "MediaManagerBulkUploadActions", "MediaManagerContentActions", "MediaManagerContentPlaylistsActions", "MediaManagerGlobalActions", "MediaManagerLazyLoadActions", "MediaManagerLazyLoadedSection", "MediaManagerRefreshActions", "MediaManagerShowsActions", "MHOnboardingAction", "URI", "WoodhengeCreatorOnboardingActions", "WoodhengeCreatorOnboardingAPIUtils", "WoodhengeCreatorOnboardingConstants", "XAdBreaksOpenProgramOnboardingController", "XCometLiveProducerScheduleControllerRouteBuilder", "XCometPaidOnlineEventsOnboardingControllerRouteBuilder", "XCreatorMonetizationOnboardingController", "XMediaManagerController", "gkx", "immutable"], (function(a, b, c, d, e, f) {
    f.creatorStudioTopPriorityTipLogEvents = j;
    var g, h = b("WoodhengeCreatorOnboardingConstants").WoodhengeCreatorStatus;
    a = function(a) {
        var c;
        return c = {},
        c.GOTO_AD_BREAK_ONBOARDING = function() {
            if (b("gkx")("1246718"))
                b("MHOnboardingAction").openMonetizationHomeOnboarding("ad_breaks_open_program", "from_cs_top_pri_card", null);
            else {
                var a = b("XAdBreaksOpenProgramOnboardingController").getURIBuilder().setEnum("entrypoint", "from_cs_top_pri_card").getURI();
                new (g || (g = b("URI")))(a).go()
            }
        }
        ,
        c.GOTO_BRS_COVID19_CLOSURE_ARTICLE = function() {
            new (g || (g = b("URI")))("https://www.facebook.com/help/publisher/497365517601781").go()
        }
        ,
        c.OPEN_NEAR_RESERVE_SLIDER_TRAY = function() {
            a.tip != null && j("click", a.tipID, a.channelID, a.tipIDList)
        }
        ,
        c.CONTENT_LIBRARY_DRAFT_APPROVED = i("DRAFT_POSTS", "approved_funded_content", a.tipID, a.channelID, a.tip != null ? a.tip.tip_id_list : null),
        c.CONTENT_LIBRARY_SCHEDULED_APPROVED = i("SCHEDULED_POSTS", "approved_funded_content", a.tipID, a.channelID, a.tip != null ? a.tip.tip_id_list : null),
        c.CONTENT_LIBRARY_DRAFT_FAILED = i("DRAFT_POSTS", "failed_funded_content", a.tipID, a.channelID, a.tip != null ? a.tip.tip_id_list : null),
        c.CONTENT_LIBRARY_FAILED = i("SCHEDULED_POSTS", "failed_funded_content", a.tipID, a.channelID, a.tip != null ? a.tip.tip_id_list : null),
        c.CONTENT_LIBRARY_SCHEDULED_FAILED = i("SCHEDULED_POSTS", "failed_funded_content", a.tipID, a.channelID, a.tip != null ? a.tip.tip_id_list : null),
        c.SHOW_ADBREAKS_ELIGIBILITY_WIDGET = function() {
            return k("ad_breaks_open_program")
        }
        ,
        c.WATCH_CAPP_VIDEO = function() {
            j("conversion", a.tipID, a.channelID, a.tipIDList),
            (g || (g = b("URI"))).goURIOnNewWindow(g.getRequestURI().setPath("/cappvideoacademy/videos/610864556378608"))
        }
        ,
        c.SHOW_FAN_SUBS_ELIGIBILITY_WIDGET = function() {
            return k("fan_funding")
        }
        ,
        c.ACTIVATE_FAN_SUBSCRIPTION = function() {
            var c = function() {
                b("WoodhengeCreatorOnboardingActions").setCreatorStatus(h.LIVE),
                b("WoodhengeCreatorOnboardingActions").setIsSubmitting(!1),
                j("conversion", a.tipID, a.channelID, a.tipIDList),
                b("CreatorStudioTopPriorityCardsActions").dismissCard(a.tipID)
            }
              , d = function() {
                b("WoodhengeCreatorOnboardingActions").setIsSubmitting(!1)
            };
            if (a.tip != null && a.tip.page_id != null) {
                var e = a.tip.page_id;
                b("WoodhengeCreatorOnboardingAPIUtils").setCreatorLive(d, c, e || "", "creator_studio_top_priority_card");
                b("MediaManagerGlobalActions").selectTab("monetization_fan_subscriptions", "top_priority_card")
            }
        }
        ,
        c.OPEN_POST_TESTING = function() {
            j("conversion", a.tipID, a.channelID, a.tipIDList),
            b("MediaManagerGlobalActions").selectTab("post_tests", "announcement_card")
        }
        ,
        c.GOTO_RESERVE_HELP_CENTER_ARTICLE = function() {
            j("click", a.tipID, a.channelID, a.tipIDList),
            (g || (g = b("URI"))).goURIOnNewWindow(g.getRequestURI().setPath("/help/publisher/267787810768958"))
        }
        ,
        c.TOP_FAN_POST_CREATION = function() {
            j("click", a.tipID, a.channelID, a.tipIDList),
            b("MediaManagerLazyLoadActions").lazyLoadSection(b("MediaManagerLazyLoadedSection").VIDEO_COMPOSER, function() {
                return b("CreatorStudioComposerActions").launchBasicPostTray("announcement_card")
            })
        }
        ,
        c.GOTO_POE_ONBOARDING = function() {
            (g || (g = b("URI"))).goURIOnNewWindow(new g(b("XCometPaidOnlineEventsOnboardingControllerRouteBuilder").buildURL({
                entrypoint: "creator_studio_announcement_card"
            })).getQualifiedURI().setDomain("www.facebook.com").toString())
        }
        ,
        c.BOOST_PLAYLIST = function() {
            j("conversion", a.tipID, a.channelID, a.tipIDList),
            b("MediaManagerGlobalActions").selectTab("content_playlists", "announcement_card")
        }
        ,
        c.OPEN_LIVE_PRODUCER_SCHEDULE = function() {
            a.tip != null && a.tip.page_id != null && ((g || (g = b("URI"))).goURIOnNewWindow(new g(b("XCometLiveProducerScheduleControllerRouteBuilder").buildURL({
                target_id: a.tip.page_id
            })).getQualifiedURI().setDomain("www.facebook.com").toString()),
            j("click", a.tipID, a.channelID, a.tipIDList))
        }
        ,
        c.GOTO_STARS_GOAL_TAB = function() {
            var c;
            c = (c = a.tip) == null ? void 0 : c.page_id;
            c != null && ((g || (g = b("URI"))).go(b("XMediaManagerController").getURIBuilder().setFBID("selected_single_page_id", c.toString()).setString("tab", "monetization_stars").setEnum("stars_sub_tab", "goals").getURI().toString()),
            j("click", a.tipID, a.channelID, a.tipIDList))
        }
        ,
        c
    }
    ;
    f.creatorStudioTopPriorityTipActions = a;
    (function(a, c, d) {
        return function() {
            b("MediaManagerGlobalActions").selectContext("all_pages", "sensitive_ads_block_list_modal");
            var e = b("InstreamVideosSensitiveAdsBlockListConfirmationDataStoreUtils").getReviewStatus().shouldReviewBlockList;
            e || (j("conversion", a, c, d),
            b("CreatorStudioTopPriorityCardsActions").dismissCard(a))
        }
    }
    );
    var i = function(a, c, d, e, f) {
        return function() {
            j("conversion", d, e, f),
            b("CreatorStudioTopPriorityCardsActions").dismissCard(d),
            b("MediaManagerGlobalActions").selectTab("content_posts", "top_priority_card"),
            b("MediaManagerContentActions").selectContentTable(a, "top_priority_card")
        }
    };
    function j(a, c, d, e, f) {
        e = e != null ? e : [c];
        var g = JSON.stringify(f);
        switch (a) {
        case "impression":
            e.forEach(function(a) {
                return b("AYMTClientSideLogging").logImpression(a, d, g)
            });
            break;
        case "click":
            e.forEach(function(a) {
                return b("AYMTClientSideLogging").logClick(a, d, g)
            });
            break;
        case "conversion":
            e.forEach(function(a) {
                return b("AYMTClientSideLogging").logConversion(a, d)
            });
            break;
        case "xout":
            e.forEach(function(a) {
                return b("AYMTClientSideLogging").logXout(a, d, !0, g)
            });
            break
        }
    }
    function k(a) {
        a = b("XCreatorMonetizationOnboardingController").getURIBuilder().setEnum("creator_monetization_product", a).setEnum("entrypoint", "from_aymt").setEnum("mta_entry_point", "FROM_AYMT").getURI();
        (g || (g = b("URI"))).goURIOnNewWindow(a)
    }
}
), null);
__d("MediaManagerPostTypeFilter", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        ALL: "ALL",
        LIVE: "LIVE",
        PREMIERE: "PREMIERE",
        PHOTOS: "PHOTOS",
        TEXT: "TEXT",
        VIDEOS: "VIDEOS",
        VIDEO_ASSETS: "VIDEO_ASSETS",
        VIDEOS_YOU_CAN_USE: "VIDEOS_YOU_CAN_USE",
        AD_BREAK_VIDEO_ASSETS: "ad_break_video_assets",
        LINK: "LINK",
        PLAYLIST: "PLAYLIST",
        SHOW: "SHOW",
        VIDEOS_YOU_CAN_ADD_TO_PLAYLIST: "VIDEOS_YOU_CAN_ADD_TO_PLAYLIST",
        CAROUSELS: "CAROUSELS",
        IG_STORIES: "IG_STORIES",
        IGTV: "IGTV",
        VIDEOS_YOU_CAN_ADD_TO_SHOW_OR_SEASON: "VIDEOS_YOU_CAN_ADD_TO_SHOW_OR_SEASON",
        SHOW_TRAILER: "SHOW_TRAILER",
        LIVE_LINEAR_VIDEO_CHANNELS: "LIVE_LINEAR_VIDEO_CHANNELS",
        LIVE_LINEAR_VIDEO_CHANNEL_CONTENT_ITEMS: "LIVE_LINEAR_VIDEO_CHANNEL_CONTENT_ITEMS",
        LIVE_LINEAR_VIDEO_CHANNEL_ELIGIBLE_VIDEOS: "LIVE_LINEAR_VIDEO_CHANNEL_ELIGIBLE_VIDEOS",
        PREMIUM_MUSIC_VIDEO: "PREMIUM_MUSIC_VIDEO",
        VIDEO_CLIPS: "VIDEO_CLIPS",
        FB_STORIES: "FB_STORIES",
        INSTANT_ARTICLES: "INSTANT_ARTICLES",
        VIDEOS_YOU_CAN_ADD_TO_EXTENDED_BREAK: "VIDEOS_YOU_CAN_ADD_TO_EXTENDED_BREAK",
        EXTENDED_BREAK_VIDEOS: "EXTENDED_BREAK_VIDEOS",
        GAMING_HIGHLIGHT_VIDEOS: "GAMING_HIGHLIGHT_VIDEOS"
    });
    e.exports = a
}
), null);
