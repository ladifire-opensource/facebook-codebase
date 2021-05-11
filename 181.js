if (self.CavalryLogger) {
    CavalryLogger.start_js(["4jQLE"]);
}

__d("AdsUEditorCampaignPlacementRemoveActionFlux", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = {
        actionType: "ADS_CAMPAIGN_EDITOR_PLACEMENT.REMOVE"
    }
}
), null);
__d("ReactComposerSponsorTaggerNullstateCampaignSearchSourceQuery.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "pageID"
        }]
          , b = [{
            kind: "Variable",
            name: "id",
            variableName: "pageID"
        }]
          , c = [{
            kind: "Literal",
            name: "status",
            value: "ACCEPTED"
        }]
          , d = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        }
          , e = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "name",
            storageKey: null
        }
          , f = {
            alias: null,
            args: null,
            concreteType: "Page",
            kind: "LinkedField",
            name: "brand_page",
            plural: !1,
            selections: [d, e, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "profile_pic_uri",
                storageKey: null
            }],
            storageKey: null
        }
          , g = {
            alias: null,
            args: null,
            concreteType: "BCMPCampaignAgreementPermission",
            kind: "LinkedField",
            name: "permissions",
            plural: !1,
            selections: [d, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "can_sponsor_add_cta",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "can_sponsor_direct_boost",
                storageKey: null
            }],
            storageKey: null
        };
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "ReactComposerSponsorTaggerNullstateCampaignSearchSourceQuery",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: "Page",
                    kind: "LinkedField",
                    name: "page",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: c,
                        concreteType: "PageCampaignAgreementsConnection",
                        kind: "LinkedField",
                        name: "campaign_agreements",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "BCMPCampaignAgreement",
                            kind: "LinkedField",
                            name: "nodes",
                            plural: !0,
                            selections: [d, f, {
                                alias: null,
                                args: null,
                                concreteType: "BCMPCampaign",
                                kind: "LinkedField",
                                name: "campaign",
                                plural: !1,
                                selections: [e],
                                storageKey: null
                            }, g],
                            storageKey: null
                        }],
                        storageKey: 'campaign_agreements(status:"ACCEPTED")'
                    }],
                    storageKey: null
                }],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "ReactComposerSponsorTaggerNullstateCampaignSearchSourceQuery",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: "Page",
                    kind: "LinkedField",
                    name: "page",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: c,
                        concreteType: "PageCampaignAgreementsConnection",
                        kind: "LinkedField",
                        name: "campaign_agreements",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "BCMPCampaignAgreement",
                            kind: "LinkedField",
                            name: "nodes",
                            plural: !0,
                            selections: [d, f, {
                                alias: null,
                                args: null,
                                concreteType: "BCMPCampaign",
                                kind: "LinkedField",
                                name: "campaign",
                                plural: !1,
                                selections: [e, d],
                                storageKey: null
                            }, g],
                            storageKey: null
                        }],
                        storageKey: 'campaign_agreements(status:"ACCEPTED")'
                    }, d],
                    storageKey: null
                }]
            },
            params: {
                id: "3393463074052518",
                metadata: {},
                name: "ReactComposerSponsorTaggerNullstateCampaignSearchSourceQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("VideoComposerVideoPublishingMutation.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "input"
        }]
          , b = [{
            alias: null,
            args: [{
                kind: "Variable",
                name: "data",
                variableName: "input"
            }],
            concreteType: "VideoPublishResponsePayload",
            kind: "LinkedField",
            name: "video_publish",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "video_asset_id",
                storageKey: null
            }],
            storageKey: null
        }];
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "VideoComposerVideoPublishingMutation",
                selections: b,
                type: "Mutation",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "VideoComposerVideoPublishingMutation",
                selections: b
            },
            params: {
                id: "2794099187357617",
                metadata: {},
                name: "VideoComposerVideoPublishingMutation",
                operationKind: "mutation",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("AdsMessagesSponsoredMessagesAdgroupSpecPathPlugin", ["AdsAPIObjectives", "AdsDefaultAdgroupSpecPathPlugin", "AdsMessengerAdgroupSpecPathPluginCommon", "AdsPromotedObjectTypes"], (function(a, b, c, d, e, f) {
    "use strict";
    a = babelHelpers["extends"]({}, b("AdsDefaultAdgroupSpecPathPlugin"), b("AdsMessengerAdgroupSpecPathPluginCommon"), {
        type: "adgroup/spec-path",
        key: "messages/sponsored-messages",
        pivots: {
            objective: b("AdsAPIObjectives").MESSAGES,
            promotedObjectType: b("AdsPromotedObjectTypes").SPONSORED_MESSAGES
        }
    });
    c = a;
    e.exports = c
}
), null);
__d("GraphQLVideoPublisherInputDataHandlerBase", ["invariant", "gkx"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.hasAPISupport = h;
    a = function() {
        function a(a, b) {
            this.postData = a,
            this.extraData = b
        }
        var b = a.prototype;
        b.mapPostDataToGraphQLInputObject = function() {
            g(0, 85)
        }
        ;
        b.hasAPISupport = function() {
            return h(this.postData)
        }
        ;
        b.uploadables = function() {
            g(0, 85)
        }
        ;
        return a
    }();
    f.GraphQLVideoPublisherInputDataHandlerBase = a;
    function h(a) {
        return b("gkx")("1687206")
    }
}
), null);
__d("ExpirationType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        NONE: 0,
        DELETE: 1,
        HIDE: 2,
        ONLY_ME: 3
    });
    e.exports = a
}
), null);
__d("VideoAssetMatureContentRating", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        UNSET: 0,
        SUITABLE_FOR_ALL: 1,
        FOURTEEN_PLUS: 2,
        EIGHTEEN_PLUS: 3
    });
    e.exports = a
}
), null);
__d("GraphQLVideoPublisherVideoUploaderInputDataHandler", ["BrandedContentSharedToSponsorStatus", "BrandedContentSponsorRelationship", "CallToActionTypes", "ClientIDs", "ExpirationType", "GraphQLVideoPublisherInputDataHandlerBase", "VideoAssetMatureContentRating", "VideoCommentatingPermission", "VideoFundedContentFlagProgram", "VideoProjection", "VideoStereoFormat", "enumUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.mapPostDataToGraphQLInputObject = function() {
            var a = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler1()
              , c = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler2()
              , d = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler3()
              , e = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler4()
              , f = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler5()
              , g = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler6()
              , h = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler7()
              , i = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler8()
              , j = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler9()
              , k = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler10()
              , l = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler11()
              , m = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler12()
              , n = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler13()
              , o = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler14();
            return {
                actor_id: this.extraData.target_id,
                basic_data: a,
                client_mutation_id: b("ClientIDs").getNewClientID(),
                thumbnail_data: c,
                ad_break_data: e,
                post_status_data: d,
                main_composer_tab_data: f,
                distribution_data: g,
                stars_data: h,
                metadata_data: i,
                questions_data: j,
                polls_data: k,
                tracking_data: l,
                captions_data: m,
                spherical_data: n,
                live_premiere_data: o,
                video_editor_config_json: this.postData.video_editor_config_json
            }
        }
        ;
        d.uploadables = function() {
            return babelHelpers["extends"]({}, this.$GraphQLVideoPublisherVideoUploaderInputDataHandler15(), this.$GraphQLVideoPublisherVideoUploaderInputDataHandler16(), this.$GraphQLVideoPublisherVideoUploaderInputDataHandler17())
        }
        ;
        d.$GraphQLVideoPublisherVideoUploaderInputDataHandler1 = function() {
            var a;
            return {
                source: this.extraData.source,
                target_id: this.extraData.target_id,
                video_id: this.extraData.video_id,
                video_title: this.postData.video_title,
                waterfall_id: this.extraData.waterfall_id,
                xhpc_message: this.postData.xhpc_message,
                creator_product: (a = this.extraData.creator_product) == null ? void 0 : a.toString(),
                composer_entry_point_ref: this.extraData.composer_entry_point_ref,
                composer_dialog_version: this.extraData.composer_dialog_version,
                has_file_been_replaced: this.extraData.has_file_been_replaced,
                supports_chunking: this.extraData.supports_chunking
            }
        }
        ;
        d.$GraphQLVideoPublisherVideoUploaderInputDataHandler2 = function() {
            return {
                thumbnail_type: this.postData.thumbnail_type
            }
        }
        ;
        d.$GraphQLVideoPublisherVideoUploaderInputDataHandler16 = function() {
            return this.postData.thumbnail_uploadable
        }
        ;
        d.$GraphQLVideoPublisherVideoUploaderInputDataHandler17 = function() {
            var a = {}
              , b = this.postData.schedule_custom_background_image
              , c = this.postData.schedule_custom_profile_image
              , d = this.postData.schedule_feed_background_image;
            b != null && (a.schedule_custom_background_image = b);
            c != null && (a.schedule_custom_profile_image = c);
            d != null && (a.schedule_feed_background_image = d);
            return a
        }
        ;
        d.$GraphQLVideoPublisherVideoUploaderInputDataHandler4 = function() {
            return {
                ad_breaks: this.postData.ad_breaks,
                ad_break_prereview: this.postData.ad_break_prereview,
                ad_breaks_experiment_revenue_loss_threshold: this.postData.ad_breaks_experiment_revenue_loss_threshold,
                enable_ad_breaks_experiment: this.postData.enable_ad_breaks_experiment,
                ad_breaks_block_lists: this.postData.ad_breaks_block_lists,
                has_ad_breaks_block_lists: this.postData.has_ad_breaks_block_lists,
                should_auto_adjust_manual_ad_breaks: this.postData.should_auto_adjust_manual_ad_breaks,
                should_auto_insert_ad_breaks: this.postData.should_auto_insert_ad_breaks,
                should_use_image_ads: this.postData.should_use_image_ads
            }
        }
        ;
        d.$GraphQLVideoPublisherVideoUploaderInputDataHandler3 = function() {
            return {
                dogfooding: this.postData.dogfooding,
                draft: this.postData.draft,
                is_reviewable_branded_content: this.postData.is_reviewable_branded_content,
                scheduled: this.postData.scheduled,
                future_date: this.postData.future_date,
                future_time: this.postData.future_time,
                expiring: this.postData.expiring,
                expire_type: this.postData.expire_type != null ? b("enumUtils").enumValueToKeyEnforcing(this.postData.expire_type, b("ExpirationType")) : null,
                expire_time: this.postData.expire_time,
                backdated_date: this.postData.backdated_date,
                hide_from_newsfeed: this.postData.hide_from_newsfeed
            }
        }
        ;
        d.$GraphQLVideoPublisherVideoUploaderInputDataHandler18 = function() {
            var a = this.postData.branded_content_data;
            if (a == null)
                return null;
            var c = a.tagging_data;
            c != null && (c = babelHelpers["extends"]({}, c, {
                shared_to_sponsor_status: c.shared_to_sponsor_status != null ? b("enumUtils").enumValueToKeyEnforcing(c.shared_to_sponsor_status, b("BrandedContentSharedToSponsorStatus")) : null,
                sponsor_relationship: c.sponsor_relationship != null ? b("enumUtils").enumValueToKeyEnforcing(c.sponsor_relationship, b("BrandedContentSponsorRelationship")) : null
            }));
            return babelHelpers["extends"]({}, a, {
                tagging_data: c
            })
        }
        ;
        d.$GraphQLVideoPublisherVideoUploaderInputDataHandler5 = function() {
            return {
                action_type_id: this.postData.action_type_id,
                branded_content_data: this.$GraphQLVideoPublisherVideoUploaderInputDataHandler18(),
                composertags_place_name: this.postData.composertags_place_name,
                composertags_place: this.postData.composertags_place,
                composertags_product_items: this.postData.composertags_product_items,
                composertags_sponsor: this.postData.composertags_sponsor,
                composertags_with: this.postData.composertags_with,
                content_tags: this.postData.content_tags,
                cta_type: this.postData.cta_type != null ? b("enumUtils").enumValueToKeyEnforcing(this.postData.cta_type, b("CallToActionTypes")) : null,
                deal_id: this.postData.deal_id,
                direct_share_status: this.postData.direct_share_status != null ? b("enumUtils").enumValueToKeyEnforcing(this.postData.direct_share_status, b("BrandedContentSharedToSponsorStatus")) : null,
                episode_data_json: this.postData.episode_data_json,
                external_movie_data: this.postData.external_movie_data,
                feed_targeted_data: this.$GraphQLVideoPublisherVideoUploaderInputDataHandler19(),
                fan_funding_promotion_metadata: this.postData.fan_funding_promotion_metadata,
                free_form_tags: this.postData.free_form_tags,
                funded_content_program: this.postData.funded_content_program ? b("enumUtils").enumValueToKeyEnforcing(this.postData.funded_content_program, b("VideoFundedContentFlagProgram")) : null,
                fundraiser_for_story_charity_id: this.postData.fundraiser_for_story_charity_id,
                fundraiser_for_story_charity_type: this.postData.fundraiser_for_story_charity_type,
                game_id: this.postData.game_id,
                icon_id: this.postData.icon_id,
                is_explicitly_tagged_as_gaming_video: this.postData.is_explicitly_tagged_as_gaming_video,
                is_stars_enabled_for_post: this.postData.is_stars_enabled_for_post,
                multilingual_specified_lang: this.postData.multilingual_specified_lang,
                multilingual_status_langs: this.postData.multilingual_status_langs,
                multilingual_statuses: this.postData.multilingual_statuses,
                object_id: this.postData.object_id,
                object_str: this.postData.object_str,
                playlistIDs: this.postData.playlistIDs,
                share_to_parent_page_option_selected: this.postData.share_to_parent_page_option_selected,
                sponsor_relationship: this.postData.sponsor_relationship ? b("enumUtils").enumValueToKeyEnforcing(this.postData.sponsor_relationship, b("BrandedContentSponsorRelationship")) : null
            }
        }
        ;
        d.$GraphQLVideoPublisherVideoUploaderInputDataHandler19 = function() {
            var a = babelHelpers["extends"]({}, this.postData.feed_targeted_data);
            this.postData.relevant_until_date != null && (a["relevant-until-date"] = this.postData.relevant_until_date);
            this.postData.relevant_until_time != null && (a["relevant-until-time"] = this.postData.relevant_until_time);
            Object.keys(a).length === 0 && (a = void 0);
            return JSON.stringify(a)
        }
        ;
        d.$GraphQLVideoPublisherVideoUploaderInputDataHandler6 = function() {
            return {
                commentating_permission: this.postData.commentating_permission != null ? b("enumUtils").enumValueToKeyEnforcing(this.postData.commentating_permission, b("VideoCommentatingPermission")) : null,
                crossposting_config: this.postData.crossposting_config,
                disturbing: this.postData.disturbing,
                embeddable: this.postData.embeddable,
                enable_drm: this.postData.enable_drm,
                exclude_from_watch: this.postData.exclude_from_watch,
                mature_content_rating: this.postData.mature_content_rating != null ? b("enumUtils").enumValueToKeyEnforcing(this.postData.mature_content_rating, b("VideoAssetMatureContentRating")) : null,
                no_story: this.postData.no_story,
                secret: this.postData.secret,
                shows_v2_episode_data: this.postData.shows_v2_episode_data,
                social_actions: this.postData.social_actions
            }
        }
        ;
        d.$GraphQLVideoPublisherVideoUploaderInputDataHandler7 = function() {
            return {
                is_receiving_stars_enabled: this.postData.is_receiving_stars_enabled,
                stars_goal_id: this.postData.stars_goal_id,
                stars_cue_trigger_timestamp: this.postData.stars_cue_trigger_timestamp
            }
        }
        ;
        d.$GraphQLVideoPublisherVideoUploaderInputDataHandler11 = function() {
            return {
                custom_labels: this.postData.custom_labels,
                external_video_id: this.postData.external_video_id
            }
        }
        ;
        d.$GraphQLVideoPublisherVideoUploaderInputDataHandler9 = function() {
            return {
                questions: this.postData.questions
            }
        }
        ;
        d.$GraphQLVideoPublisherVideoUploaderInputDataHandler10 = function() {
            return {
                polls: this.postData.polls
            }
        }
        ;
        d.$GraphQLVideoPublisherVideoUploaderInputDataHandler20 = function(a) {
            return a.getIsDefault() ? "captions_default" : "captions_file"
        }
        ;
        d.$GraphQLVideoPublisherVideoUploaderInputDataHandler12 = function() {
            var a, b = this;
            a = (a = this.postData.captions) == null ? void 0 : a.map(function(a, c) {
                return b.$GraphQLVideoPublisherVideoUploaderInputDataHandler20(a) + c
            });
            return {
                autopublish_captions: this.postData.autopublish_captions,
                captions: a,
                spoken_locale: this.postData.spoken_locale
            }
        }
        ;
        d.$GraphQLVideoPublisherVideoUploaderInputDataHandler15 = function() {
            var a, b = this, c = {};
            (a = this.postData.captions) == null ? void 0 : a.forEach(function(a, d) {
                c[b.$GraphQLVideoPublisherVideoUploaderInputDataHandler20(a) + d] = a.getFile()
            });
            return c
        }
        ;
        d.$GraphQLVideoPublisherVideoUploaderInputDataHandler8 = function() {
            return {
                is_vu_experiment_eligible: this.postData.is_vu_experiment_eligible
            }
        }
        ;
        d.$GraphQLVideoPublisherVideoUploaderInputDataHandler13 = function() {
            return {
                initialHeading: this.postData.initialHeading,
                initialPitch: this.postData.initialPitch,
                fov: this.postData.fov,
                guide_enabled: this.postData.guide_enabled,
                guide_keyframes: this.postData.guide_keyframes,
                enable_omnistab: this.postData.enable_omnistab,
                spherical: this.postData.spherical,
                projection: this.postData.projection != null ? b("enumUtils").enumValueToKeyEnforcing(this.postData.projection, b("VideoProjection")) : null,
                stereoMode: this.postData.stereoMode != null ? b("enumUtils").enumValueToKeyEnforcing(this.postData.stereoMode, b("VideoStereoFormat")) : null
            }
        }
        ;
        d.$GraphQLVideoPublisherVideoUploaderInputDataHandler14 = function() {
            return {
                premiere_time_ms: this.postData.premiere_time_ms,
                should_premiere: this.postData.should_premiere,
                premiere_in_living_room_video_ids: this.postData.premiere_in_living_room_video_ids,
                premiere_custom_profile_image_focus: this.postData.premiere_custom_profile_image_focus,
                feed_background_focus: this.postData.feed_background_focus,
                premiere_audience: this.postData.premiere_audience
            }
        }
        ;
        return c
    }(b("GraphQLVideoPublisherInputDataHandlerBase").GraphQLVideoPublisherInputDataHandlerBase);
    e.exports = a
}
), null);
__d("VideoComposerVideoPublishingMutation", ["RelayModern", "RelayRuntime", "VideoComposerVideoPublishingMutation.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    f.commit = a;
    var g, h = b("RelayRuntime").commitMutation, i = g !== void 0 ? g : g = b("VideoComposerVideoPublishingMutation.graphql");
    function a(a, b, c, d, e) {
        return h(b, {
            uploadables: c,
            mutation: i,
            variables: {
                input: a
            },
            onCompleted: d,
            onError: e
        })
    }
}
), null);
__d("VideoComposerVideoPublisher", ["RelayFBEnvironmentFactory", "VideoComposerVideoPublishingMutation", "err"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = a.mapPostDataToGraphQLInputObject(),
            this.$3 = a.hasAPISupport(),
            this.$2 = a.uploadables()
        }
        var c = a.prototype;
        c.publish = function(a, c) {
            if (!this.$3)
                throw b("err")("This api does not support your publishing use case");
            b("VideoComposerVideoPublishingMutation").commit(this.$1, b("RelayFBEnvironmentFactory").getForActorID(this.$1.basic_data.target_id), this.$2, a, c)
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("VideoUploadGraphQLPostRequestManager", ["GraphQLVideoPublisherInputDataHandlerBase", "GraphQLVideoPublisherVideoUploaderInputDataHandler", "VideoComposerVideoPublisher", "err", "mixin", "requireCond", "cr:909282"], (function(a, b, c, d, e, f) {
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.sendRequest = function(a) {
            this.$VideoUploadGraphQLPostRequestManager1(a.getMetadata(), this.__createRequestData(a)),
            this.inform("request-started")
        }
        ;
        d.$VideoUploadGraphQLPostRequestManager1 = function(a, c) {
            a = new (b("GraphQLVideoPublisherVideoUploaderInputDataHandler"))(a,c);
            c = new (b("VideoComposerVideoPublisher"))(a);
            c.publish(this.$VideoUploadGraphQLPostRequestManager2.bind(this), this.$VideoUploadGraphQLPostRequestManager3.bind(this))
        }
        ;
        d.__createRequestData = function(a) {
            var c = a.getVideoID()
              , d = a.getTargetID();
            if (c == null)
                throw b("err")("Video id cannot be null");
            if (d == null)
                throw b("err")("Target id cannot be null");
            return {
                video_id: c,
                target_id: d,
                source: "COMPOSER",
                waterfall_id: a.getWaterfallID() || "",
                creator_product: a.getCreatorProduct(),
                composer_entry_point_ref: a.getComposerEntryPointRef && a.getComposerEntryPointRef(),
                composer_dialog_version: a.getComposerDialogVersion(),
                has_file_been_replaced: a.getHasFileBeenReplaced(),
                supports_chunking: a.getSupportsChunking()
            }
        }
        ;
        d.$VideoUploadGraphQLPostRequestManager2 = function(a) {
            this.inform("request-finished", {
                video_asset_id: (a = a.video_publish) == null ? void 0 : a.video_asset_id
            })
        }
        ;
        d.$VideoUploadGraphQLPostRequestManager3 = function(a) {
            this.inform("request-failed", {
                error_code: a.number,
                error_description: a.message,
                error_summary: a.name,
                error_object: a
            })
        }
        ;
        d.hasAPISupport = function(a) {
            return b("GraphQLVideoPublisherInputDataHandlerBase").hasAPISupport(a)
        }
        ;
        return c
    }(b("mixin")(b("cr:909282")));
    e.exports = a
}
), null);
__d("MediaUploadSingleAssetPublisher", ["Promise", "VideoUploadGraphQLPostRequestManager", "VideoUploadPostRequestManager", "VideoUploadRequestContext", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {}
        a.publish = function(b) {
            a.$1 == null && (a.$1 = new a());
            return a.$1.publish(b)
        }
        ;
        var c = a.prototype;
        c.publish = function(a) {
            var c = this;
            return new (b("Promise"))(function(d) {
                var e = c.$2(a.sessionSnapshot, a.assetSnapshot, a.postData), f;
                if (b("gkx")("1687206")) {
                    var g = c.$3();
                    g.hasAPISupport(a.postData) && (f = g)
                }
                f == null && (f = c.$4(a.postRequestManagerParams));
                c.$5(f, d);
                f.sendRequest(e)
            }
            )
        }
        ;
        c.$4 = function(a) {
            return new (b("VideoUploadPostRequestManager"))(a == null ? void 0 : a.chunk_post_uri,a == null ? void 0 : a.post_max_transport_retries,a == null ? void 0 : a.post_transport_retry_interval_base,a == null ? void 0 : a.post_max_server_retries,a == null ? void 0 : a.post_server_retry_interval_base)
        }
        ;
        c.$3 = function() {
            return new (b("VideoUploadGraphQLPostRequestManager"))()
        }
        ;
        c.$5 = function(a, b) {
            a.subscribe("request-finished", function(a, c) {
                a = {
                    event: a,
                    payload: c
                };
                b({
                    isSuccessful: !0,
                    rawResponse: a
                })
            }),
            a.subscribe("request-failed", function(a, c) {
                a = {
                    event: a,
                    payload: c
                };
                b({
                    isSuccessful: !1,
                    errorCode: c == null ? void 0 : c.error_code,
                    rawErrorObject: c == null ? void 0 : c.error_object,
                    rawResponse: a
                })
            })
        }
        ;
        c.$2 = function(a, c, d) {
            return new (b("VideoUploadRequestContext"))().setVideoID(c.videoID).setTargetID(c.request.attributes.targetID).setSource(a.entryPoint.sourceType).setWaterfallID(a.sessionID).setCreatorProduct(c.request.attributes.creatorProduct).setComposerEntryPointRef(a.entryPoint.entryPointRef).setComposerDialogVersion(c.request.attributes.composerDialogVersion).setHasFileBeenReplaced((a = c.request.attributes.hasFileBeenReplaced) != null ? a : !1).setSupportsChunking(!0).setMetadata(d)
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("ReactComposerBrandedContentCampaignUtil", ["SearchableEntry", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getCampaignIDFromEntries = a;
    f.getBrandPageIDFromEntries = c;
    f.getPermissionFromEntries = d;
    function a(a) {
        if (!b("gkx")("1760645"))
            return null;
        try {
            return a instanceof Array ? (a = g(a[0])) == null ? void 0 : (a = a.campaign) == null ? void 0 : a.id : null
        } catch (a) {
            return null
        }
    }
    function c(a) {
        if (!b("gkx")("1760645"))
            return null;
        try {
            return a instanceof Array ? (a = g(a[0])) == null ? void 0 : (a = a.campaign) == null ? void 0 : a.brandPageID : null
        } catch (a) {
            return null
        }
    }
    function d(a) {
        if (!b("gkx")("1760645"))
            return null;
        try {
            return a instanceof Array ? (a = g(a[0])) == null ? void 0 : (a = a.campaign) == null ? void 0 : a.permission : null
        } catch (a) {
            return null
        }
    }
    function g(a) {
        return a instanceof b("SearchableEntry") ? a.getAuxiliaryData() : null
    }
}
), null);
__d("ReactComposerSponsorTaggerNullstateCampaignSearchSource", ["AbstractSearchSource", "RelayFBEnvironment", "RelayHooks", "SearchableEntry", "isStringNullOrEmpty", "orEmptyArray", "promiseDone", "ReactComposerSponsorTaggerNullstateCampaignSearchSourceQuery.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    f.ReactComposerSponsorTaggerNullstateCampaignSearchSource = a;
    var g;
    function h(a) {
        return b("orEmptyArray")(a == null ? void 0 : (a = a.page) == null ? void 0 : (a = a.campaign_agreements) == null ? void 0 : a.nodes).map(function(a) {
            var c = a == null ? void 0 : a.brand_page
              , d = c == null ? void 0 : c.name
              , e = c == null ? void 0 : c.id
              , f = c == null ? void 0 : c.profile_pic_uri
              , g = a == null ? void 0 : a.id
              , h = a == null ? void 0 : a.permissions;
            a = a == null ? void 0 : (a = a.campaign) == null ? void 0 : a.name;
            return c == null || d == null || e == null || g == null || (h == null ? void 0 : h.id) == null || (h == null ? void 0 : h.can_sponsor_add_cta) == null || (h == null ? void 0 : h.can_sponsor_direct_boost) == null || a == null ? null : new (b("SearchableEntry"))({
                title: d,
                subtitle: a,
                uniqueID: g,
                photo: f,
                auxiliaryData: {
                    campaign: {
                        brandPageID: e,
                        id: g,
                        name: a,
                        permission: {
                            id: h == null ? void 0 : h.id,
                            sponsorCanAddCTA: h == null ? void 0 : h.can_sponsor_add_cta,
                            sponsorCanBoost: h == null ? void 0 : h.can_sponsor_direct_boost
                        }
                    }
                }
            })
        }).filter(Boolean)
    }
    var i;
    function a(a) {
        if (!i || i instanceof j && i.getPageID() !== a) {
            i = new j(a);
            return i
        }
        return i
    }
    var j = function(c) {
        babelHelpers.inheritsLoose(a, c);
        function a(a) {
            var b;
            b = c.call(this) || this;
            b.$SearchSource1 = a;
            return b
        }
        var d = a.prototype;
        d.getPageID = function() {
            return this.$SearchSource1
        }
        ;
        d.searchImpl = function(a, c, d) {
            if (!b("isStringNullOrEmpty")(a))
                return c([], a);
            b("promiseDone")(b("RelayHooks").fetchQuery(b("RelayFBEnvironment"), g !== void 0 ? g : g = b("ReactComposerSponsorTaggerNullstateCampaignSearchSourceQuery.graphql"), {
                pageID: this.$SearchSource1
            }, {
                fetchPolicy: "store-or-network"
            }).toPromise(), function(b) {
                c(h(b), a)
            })
        }
        ;
        return a
    }(b("AbstractSearchSource"))
}
), null);
__d("ReactComposerSponsorTaggerNullstateCampaignTypeaheadViewRenderer.react", ["fbt", "FlexLayout.react", "FlexLayoutItem.react", "React", "XUIText.react", "XUITypeaheadViewContainer.react", "XUITypeaheadViewItem.react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h, i = b("React");
    (h || (h = b("stylex"))).inject(".j0k7ypqs{margin-left:12px}", 1, ".j0k7ypqs{margin-right:12px}");
    h.inject(".p8bdhjjv{margin-bottom:16px}", 1);
    h.inject(".fixvnt9j{min-width:240px}", 1);
    h.inject(".qk575ew7{min-width:278px}", 1);
    h.inject(".flaopk6l{min-width:302px}", 1);
    function a(a) {
        return a.entries.length === 0 ? null : i.jsx(b("XUITypeaheadViewContainer.react"), {
            className: "flaopk6l",
            controlleeID: a.controlleeID,
            label: a.label,
            role: a.role,
            children: i.jsxs(b("FlexLayout.react"), {
                direction: "vertical",
                children: [i.jsx(b("FlexLayoutItem.react"), {
                    className: "fixvnt9j p8bdhjjv j0k7ypqs",
                    children: i.jsx(b("XUIText.react"), {
                        size: "body3",
                        display: "block",
                        weight: "bold",
                        children: g._("D\u1ef1 \u00e1n n\u1ed9i dung c\u00f3 th\u01b0\u01a1ng hi\u1ec7u m\u00e0 b\u1ea1n \u0111\u00e3 ch\u1ea5p nh\u1eadn")
                    })
                }), a.entries.map(function(c) {
                    var d;
                    return i.jsx(b("XUITypeaheadViewItem.react"), {
                        className: "qk575ew7",
                        entry: c,
                        highlighted: c === a.highlightedEntry,
                        onSelect: a.onSelect,
                        onHighlight: a.onHighlight,
                        onRenderHighlight: a.onRenderHighlight,
                        backgroundSize: a.photoBackgroundSize,
                        photoHeight: a.photoHeight,
                        photoWidth: a.photoWidth,
                        radiusImage: (d = a.viewProps) == null ? void 0 : d.radiusImage
                    }, c.getUniqueID())
                })]
            })
        })
    }
}
), null);
__d("VideoComposerAdBreakCopyrightClaimNotice.react", ["fbt", "FDSGuidanceCard.react", "FDSGuidanceCardContent.react", "FDSGuidanceCardContentLink.react", "FDSGuidanceCardContentText.react", "FDSGuidanceCardHeader.react", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            return h.jsxs(b("FDSGuidanceCard.react"), {
                category: "warning",
                children: [h.jsx(b("FDSGuidanceCardHeader.react"), {
                    children: g._("Monetization May Be Limited Due to a Copyright Claim")
                }), h.jsxs(b("FDSGuidanceCardContent.react"), {
                    children: [h.jsx(b("FDSGuidanceCardContentText.react"), {
                        children: g._("A rights holder claimed this video and can now choose their own monetization settings, block list and country restrictions. The rights holder may also collect ad earnings in locations where they own the rights.")
                    }), h.jsx(b("FDSGuidanceCardContentLink.react"), {
                        href: "https://www.facebook.com/help/publisher/1979171292197867",
                        children: g._("View Details")
                    })]
                })]
            })
        }
        ;
        return c
    }(h.Component);
    c = a;
    e.exports = c
}
), null);
__d("MediaManagerLoadPageAccessTokenActionTypes", ["keyMirror"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("keyMirror")({
        SET_PAGE_ACCESS_TOKEN: "",
        SET_PAGE_ACCESS_TOKEN_ERROR: ""
    });
    c = a;
    e.exports = c
}
), null);
__d("MediaManagerPageAccessTokenStore", ["Promise", "AsyncRequest", "CreatorStudioLoggerStoreUtils", "FluxMapStore", "MediaManagerDispatcher", "MediaManagerLoadPageAccessTokenActionTypes", "XMediaManagerPageAccessTokenController", "immutable", "isEmpty"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.__getActionTypes = function() {
            return [b("MediaManagerLoadPageAccessTokenActionTypes").SET_PAGE_ACCESS_TOKEN, b("MediaManagerLoadPageAccessTokenActionTypes").SET_PAGE_ACCESS_TOKEN_ERROR]
        }
        ;
        d.reduce = function(a, c) {
            switch (c.type) {
            case b("MediaManagerLoadPageAccessTokenActionTypes").SET_PAGE_ACCESS_TOKEN:
                return a.set(c.pageID, c.accessToken);
            case b("MediaManagerLoadPageAccessTokenActionTypes").SET_PAGE_ACCESS_TOKEN_ERROR:
                return a.set(c.pageID, "");
            default:
                return a
            }
        }
        ;
        d.getPageAccessTokenByID = function(a) {
            var c;
            c = (c = this.getState().get(a)) != null ? c : "";
            return c !== "" ? b("Promise").resolve(c) : new (b("Promise"))(function(c, d) {
                var e = b("XMediaManagerPageAccessTokenController").getURIBuilder().setFBID("page_id", a).getURI();
                new (b("AsyncRequest"))().setURI(e).setMethod("POST").setReadOnly(!0).setHandler(function(e) {
                    if (e.error) {
                        d("");
                        return
                    }
                    e = (e = (e = e.payload) == null ? void 0 : e.access_token) != null ? e : "";
                    if ((g || (g = b("isEmpty")))(e)) {
                        d("");
                        return
                    }
                    h(a, e);
                    c(e)
                }).setErrorHandler(function(c) {
                    i(a, c.toError()),
                    b("CreatorStudioLoggerStoreUtils").creatorStudioSafelyLogAsyncRequestError("page_access_token_api_call", "internal", c, function(b) {
                        return b.setSelectedPageIds([a])
                    }),
                    d("")
                }).send()
            }
            )
        }
        ;
        return c
    }(b("FluxMapStore"));
    a.__moduleID = e.id;
    function h(a, c) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerLoadPageAccessTokenActionTypes").SET_PAGE_ACCESS_TOKEN,
            pageID: a,
            accessToken: c
        })
    }
    function i(a, c) {
        b("MediaManagerDispatcher").dispatch({
            type: b("MediaManagerLoadPageAccessTokenActionTypes").SET_PAGE_ACCESS_TOKEN_ERROR,
            pageID: a,
            error: c
        })
    }
    c = new a(b("MediaManagerDispatcher"));
    e.exports = c
}
), null);
__d("JobConstants", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        JOB_APPLICATION_TRACKING_SYSTEM_PAGINATE_COUNT: 10,
        JOB_BROWSER_LOCATION_MAX_RADIUS_MILES: 100,
        JOB_BROWSER_LOCATION_MIN_RADIUS_MILES: 2,
        JOB_BROWSER_LOCATION_MAX_RADIUS_KM: 150,
        JOB_BROWSER_LOCATION_MIN_RADIUS_KM: 2,
        JOB_BROWSER_PAGINATE_JOB_COUNT: 10,
        JOB_POST_EXPIRATION_REMINDER_OFFSET: 604800,
        JOB_POST_DEFAULT_DAYS_TILL_EXPIRATION: 30,
        JOB_POST_EXPIRATION_TIME: 2592e3,
        JOB_POST_LIMIT_PER_DAY: 10,
        JOB_URL_DEFAULT_FILTER_VALUE_ALL: "all",
        JOB_URL_DEFAULT_FILTER_VALUE_NEARBY: "nearby",
        JOB_URL_MULTIPLE_FILTER_DELIMITER: ".",
        JOB_URL_NAME_ID_SEPARATOR: "-",
        JOB_APPLICATION_ABANDON_SURVEY_INTEGRATION_POINT_ID: 189507891530064,
        JOB_EMAIL_REGEX_STRING: "[A-Za-z0-9_!#$%&'*+/=?^`{|}~-]+(?:\\.[A-Za-z0-9_!#$%&'*+/=?^`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?",
        COVER_PHOTO_HEIGHT_WIDTH_RATIO: .56,
        JOBS_LOCATION_TYPEAHEAD_PRODUCT_TAG: "job_search",
        JOB_BROWSER_EMPLOYER_PHOTO_SIZE: 40,
        JOB_BROWSER_DEFAULT_RADIUS_METERS: 64e3,
        CUSTOM_RESPONSE_HEADER: "customResponse",
        JOB_OPENING_MARK_AS_CLOSED_SURVEY_INTEGRATION_POINT_ID: 836188723200866,
        SIMILAR_JOBS_NUM_FETCH: 5,
        JOB_INTERVIEW_DEFAULT_DURATION_MINUTES: 30,
        JOBS_COMPOSER_COVER_PHOTO_HEIGHT: 245,
        JOBS_COMPOSER_COVER_PHOTO_WIDTH: 470,
        JOBS_COMPOSER_PROFILE_PICTURE_SIZE: 90,
        JOBS_POLICY_LINK: "https://www.facebook.com/policies/pages_groups_events/jobs_on_pages",
        JOBS_DISCRIMINATION_POLICY_LINK: "https://www.facebook.com/policies/pages_groups_events/jobs_on_pages/discrimination",
        JOB_OPENING_DETAIL_VIEW_JOB_PHOTO_HEIGHT: 260,
        JOB_OPENING_DETAIL_VIEW_JOB_PHOTO_WIDTH: 500,
        JOB_OPENING_DETAIL_VIEW_EMPLOYER_PHOTO_SIZE: 80,
        JOB_POSTS_ITEM_JOB_PHOTO_WIDTH: 155,
        JOB_POSTS_ITEM_JOB_PHOTO_HEIGHT: 80,
        PAGE_JOBS_TAB_PAGINATE_JOB_COUNT: 10,
        JOB_DETAIL_VIEW_SEND_FEEDBACK_FORM_ID: 128404151166229,
        JOBS_COMPOSER_DISABLE_EDIT_OF_REJECTED_JOBS_QE: "disable_edits_for_rejected_jobs",
        JOBS_COMPOSER_REMOVE_OPTIONAL_FIELDS_QE_UNIVERSE: "jobs_groups_minimal_composer",
        JOBS_COMPOSER_SALARY_INPUT_QE_UNIVERSE: "jobs_composer_salary_input",
        JOBS_COMPOSER_POLICY_POPOVER_QE_UNIVERSE: "jobs_search_pages_confirmation_policy",
        JOBS_COMPOSER_DROPOFF_FROM_NOTIF_INTEGRATION_POINT: 879284665794797,
        JOBS_COMPOSER_DROPOFF_FROM_GROUP_COMPOSER_INTEGRATION_POINT: 557895008022711,
        JOBS_COMPOSER_DROPOFF_INTEGRATION_POINT: 2360027310729383,
        JOB_BROWSER_ROW_NEW_THRESHOLD_DAYS: 5,
        JOBS_IN_GROUPS_BROWSER_OPT_OUT_SURVEY_INTEGRATION_POINT: 731627674024440,
        JOB_CREATOR_FEEDBACK_UNIVERSE: "job_creator_feedback"
    })
}
), null);
