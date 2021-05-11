if (self.CavalryLogger) {
    CavalryLogger.start_js(["8M\/ZZ"]);
}

__d("CometComposerActorProfilePicture_profile.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [{
            kind: "RootArgument",
            name: "scale"
        }],
        kind: "Fragment",
        metadata: null,
        name: "CometComposerActorProfilePicture_profile",
        selections: [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "name",
            storageKey: null
        }, {
            alias: null,
            args: [{
                kind: "Literal",
                name: "height",
                value: 40
            }, {
                kind: "Variable",
                name: "scale",
                variableName: "scale"
            }, {
                kind: "Literal",
                name: "width",
                value: 40
            }],
            concreteType: "Image",
            kind: "LinkedField",
            name: "profile_picture",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "uri",
                storageKey: null
            }],
            storageKey: null
        }, {
            kind: "InlineFragment",
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "url",
                storageKey: null
            }],
            type: "User",
            abstractKey: null
        }],
        type: "Profile",
        abstractKey: "__isProfile"
    };
    e.exports = a
}
), null);
__d("CometComposerMinutiaeBar_profile.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "scale"
        }],
        kind: "Fragment",
        metadata: null,
        name: "CometComposerMinutiaeBar_profile",
        selections: [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "name",
            storageKey: null
        }, {
            args: null,
            kind: "FragmentSpread",
            name: "CometComposerActorProfilePicture_profile"
        }],
        type: "Profile",
        abstractKey: "__isProfile"
    };
    e.exports = a
}
), null);
__d("CometComposerFormattedTextArea_formattedTextPreset.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "CometComposerFormattedTextArea_formattedTextPreset",
        selections: [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "preset_id",
            storageKey: null
        }, {
            args: null,
            kind: "FragmentSpread",
            name: "FeedComposerCometFormattedTextBackgroundRoot_data"
        }],
        type: "TextFormatMetadata",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("FeedComposerCometFormattedTextBackgroundRoot_data.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [{
            kind: "RootArgument",
            name: "scale"
        }],
        kind: "Fragment",
        metadata: null,
        name: "FeedComposerCometFormattedTextBackgroundRoot_data",
        selections: [{
            alias: null,
            args: [{
                kind: "Variable",
                name: "scale",
                variableName: "scale"
            }],
            concreteType: "Image",
            kind: "LinkedField",
            name: "background_image",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "uri",
                storageKey: null
            }],
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "background_color",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "background_gradient_color",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "background_gradient_direction",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "avatar_story_text_format_id",
            storageKey: null
        }],
        type: "TextFormatMetadata",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("useCometStatusAreaTextData_formattedTextPreset.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "useCometStatusAreaTextData_formattedTextPreset",
        selections: [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "color",
            storageKey: null
        }, {
            alias: null,
            args: null,
            concreteType: "InspirationsCustomFont",
            kind: "LinkedField",
            name: "inspirations_custom_font_object",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "font_name",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "preferred_font_size",
                storageKey: null
            }],
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "avatar_story_text_format_id",
            storageKey: null
        }],
        type: "TextFormatMetadata",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("CometComposerSwatchPickerMenuUsingRelayEntrypointQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "3126125130829475",
            metadata: {
                relayPreloadable: !0
            },
            name: "CometComposerSwatchPickerMenuUsingRelayEntrypointQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("FeedComposerCometToolbar_composer.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "FeedComposerCometToolbar_composer",
        selections: [{
            alias: null,
            args: [{
                kind: "Literal",
                name: "supported",
                value: ["CometComposerUploadMediaSprout", "CometComposerAnimatedImageSprout", "CometComposerWithTaggingSprout", "CometComposerProductTagSprout", "CometComposerLocationTaggingSprout", "CometComposerMinutiaeSprout", "FeedCometComposerLiveProducerSprout", "CometComposerFundraiserForStorySprout", "FeedCometComposerLivingRoomSprout", "FeedCometComposerBrandedContentSprout", "FeedCometComposerWoodhengeSupportSprout", "CometComposerVideoMeetupSprout", "CometComposerQuiltSprout", "CometComposerAMASprout", "FeedCometComposerGetMessagesSprout"]
            }],
            concreteType: null,
            kind: "LinkedField",
            name: "sprouts",
            plural: !0,
            selections: [{
                kind: "InlineFragment",
                selections: [{
                    documentName: "FeedComposerCometToolbar_composer",
                    fragmentName: "CometComposerUploadMediaSprout_sprout",
                    fragmentPropName: "sprout",
                    kind: "ModuleImport"
                }],
                type: "CometComposerUploadMediaSprout",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "FeedComposerCometToolbar_composer",
                    fragmentName: "CometComposerAnimatedImageSprout_sprout",
                    fragmentPropName: "sprout",
                    kind: "ModuleImport"
                }],
                type: "CometComposerAnimatedImageSprout",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "FeedComposerCometToolbar_composer",
                    fragmentName: "CometComposerWithTaggingSprout_sprout",
                    fragmentPropName: "sprout",
                    kind: "ModuleImport"
                }],
                type: "CometComposerWithTaggingSprout",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "FeedComposerCometToolbar_composer",
                    fragmentName: "CometComposerProductTagSprout_sprout",
                    fragmentPropName: "sprout",
                    kind: "ModuleImport"
                }],
                type: "CometComposerProductTagSprout",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "FeedComposerCometToolbar_composer",
                    fragmentName: "ComposerLocationTaggingSprout_sprout",
                    fragmentPropName: "sprout",
                    kind: "ModuleImport"
                }],
                type: "CometComposerLocationTaggingSprout",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "FeedComposerCometToolbar_composer",
                    fragmentName: "ComposerTabbedMinutiaeSprout_sprout",
                    fragmentPropName: "sprout",
                    kind: "ModuleImport"
                }],
                type: "CometComposerMinutiaeSprout",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "FeedComposerCometToolbar_composer",
                    fragmentName: "FeedLiveProducerCometComposerLiveSprout_sprout",
                    fragmentPropName: "sprout",
                    kind: "ModuleImport"
                }],
                type: "FeedCometComposerLiveProducerSprout",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "FeedComposerCometToolbar_composer",
                    fragmentName: "FundraiserForStorySprout_sprout",
                    fragmentPropName: "sprout",
                    kind: "ModuleImport"
                }],
                type: "CometComposerFundraiserForStorySprout",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "FeedComposerCometToolbar_composer",
                    fragmentName: "FeedCometComposerLivingRoomSprout_sprout",
                    fragmentPropName: "sprout",
                    kind: "ModuleImport"
                }],
                type: "FeedCometComposerLivingRoomSprout",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "FeedComposerCometToolbar_composer",
                    fragmentName: "FeedCometComposerBrandedContentSprout_sprout",
                    fragmentPropName: "sprout",
                    kind: "ModuleImport"
                }],
                type: "FeedCometComposerBrandedContentSprout",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "FeedComposerCometToolbar_composer",
                    fragmentName: "FeedCometComposerWoodhengeSupportSprout_sprout",
                    fragmentPropName: "sprout",
                    kind: "ModuleImport"
                }],
                type: "FeedCometComposerWoodhengeSupportSprout",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "FeedComposerCometToolbar_composer",
                    fragmentName: "CometComposerRoomsSprout_sprout",
                    fragmentPropName: "sprout",
                    kind: "ModuleImport"
                }],
                type: "CometComposerVideoMeetupSprout",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "FeedComposerCometToolbar_composer",
                    fragmentName: "CometComposerQuiltSprout_sprout",
                    fragmentPropName: "sprout",
                    kind: "ModuleImport"
                }],
                type: "CometComposerQuiltSprout",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "FeedComposerCometToolbar_composer",
                    fragmentName: "FeedCometComposerAMASprout_sprout",
                    fragmentPropName: "sprout",
                    kind: "ModuleImport"
                }],
                type: "CometComposerAMASprout",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "FeedComposerCometToolbar_composer",
                    fragmentName: "FeedCometComposerGetMessagesSprout_sprout",
                    fragmentPropName: "sprout",
                    kind: "ModuleImport"
                }],
                type: "FeedCometComposerGetMessagesSprout",
                abstractKey: null
            }],
            storageKey: 'sprouts(supported:["CometComposerUploadMediaSprout","CometComposerAnimatedImageSprout","CometComposerWithTaggingSprout","CometComposerProductTagSprout","CometComposerLocationTaggingSprout","CometComposerMinutiaeSprout","FeedCometComposerLiveProducerSprout","CometComposerFundraiserForStorySprout","FeedCometComposerLivingRoomSprout","FeedCometComposerBrandedContentSprout","FeedCometComposerWoodhengeSupportSprout","CometComposerVideoMeetupSprout","CometComposerQuiltSprout","CometComposerAMASprout","FeedCometComposerGetMessagesSprout"])'
        }],
        type: "FeedCometComposer",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("CometDefaultPrivacyNux_scope.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "CometDefaultPrivacyNux_scope",
        selections: [{
            args: null,
            kind: "FragmentSpread",
            name: "useCometPrivacySelectorPushView_scope"
        }, {
            args: null,
            kind: "FragmentSpread",
            name: "useCometPrivacySelectorDialog_scope"
        }],
        type: "PrivacyScope",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("FeedComposerSocialSentenceActivityObjectQuery.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "id"
        }]
          , b = [{
            kind: "Variable",
            name: "id",
            variableName: "id"
        }]
          , c = {
            kind: "InlineFragment",
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null
            }],
            type: "Profile",
            abstractKey: "__isProfile"
        };
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "FeedComposerSocialSentenceActivityObjectQuery",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [c],
                    storageKey: null
                }],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "FeedComposerSocialSentenceActivityObjectQuery",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "__typename",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    }, c],
                    storageKey: null
                }]
            },
            params: {
                id: "2954286151354931",
                metadata: {},
                name: "FeedComposerSocialSentenceActivityObjectQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("FeedComposerSocialSentenceLocationQuery.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "id"
        }]
          , b = [{
            kind: "Variable",
            name: "id",
            variableName: "id"
        }]
          , c = {
            kind: "InlineFragment",
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "contextual_name",
                storageKey: null
            }],
            type: "Page",
            abstractKey: null
        };
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "FeedComposerSocialSentenceLocationQuery",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [c],
                    storageKey: null
                }],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "FeedComposerSocialSentenceLocationQuery",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "__typename",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    }, c],
                    storageKey: null
                }]
            },
            params: {
                id: "2214833808632879",
                metadata: {},
                name: "FeedComposerSocialSentenceLocationQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("FeedComposerSocialSentenceTaggedUsersQuery.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "ids"
        }]
          , b = [{
            kind: "Variable",
            name: "ids",
            variableName: "ids"
        }]
          , c = {
            kind: "InlineFragment",
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null
            }],
            type: "Profile",
            abstractKey: "__isProfile"
        };
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "FeedComposerSocialSentenceTaggedUsersQuery",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "nodes",
                    plural: !0,
                    selections: [c],
                    storageKey: null
                }],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "FeedComposerSocialSentenceTaggedUsersQuery",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "nodes",
                    plural: !0,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "__typename",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    }, c],
                    storageKey: null
                }]
            },
            params: {
                id: "3155990737855661",
                metadata: {},
                name: "FeedComposerSocialSentenceTaggedUsersQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("FeedComposerSocialSentenceWithActivityQuery.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "activityLegacyID"
        }]
          , b = [{
            kind: "Variable",
            name: "legacy_api_id",
            variableName: "activityLegacyID"
        }]
          , c = [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "template_string",
            storageKey: null
        }, {
            alias: null,
            args: null,
            concreteType: "ActivityTemplateToken",
            kind: "LinkedField",
            name: "template_tokens",
            plural: !0,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "token_position",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "token_type",
                storageKey: null
            }],
            storageKey: null
        }]
          , d = {
            alias: "previewTemplate",
            args: null,
            concreteType: "TaggableActivityPreviewTemplate",
            kind: "LinkedField",
            name: "preview_template",
            plural: !1,
            selections: c,
            storageKey: null
        }
          , e = {
            kind: "Literal",
            name: "with_place",
            value: "SPECIFIC"
        }
          , f = {
            alias: "previewTemplateWithPlace",
            args: [e],
            concreteType: "TaggableActivityPreviewTemplate",
            kind: "LinkedField",
            name: "preview_template",
            plural: !1,
            selections: c,
            storageKey: 'preview_template(with_place:"SPECIFIC")'
        }
          , g = {
            kind: "Literal",
            name: "with_people",
            value: "SINGLE"
        }
          , h = {
            alias: "previewTemplateWithPerson",
            args: [g],
            concreteType: "TaggableActivityPreviewTemplate",
            kind: "LinkedField",
            name: "preview_template",
            plural: !1,
            selections: c,
            storageKey: 'preview_template(with_people:"SINGLE")'
        }
          , i = {
            kind: "Literal",
            name: "with_people",
            value: "MULTIPLE"
        }
          , j = {
            alias: "previewTemplateWithPeople",
            args: [i],
            concreteType: "TaggableActivityPreviewTemplate",
            kind: "LinkedField",
            name: "preview_template",
            plural: !1,
            selections: c,
            storageKey: 'preview_template(with_people:"MULTIPLE")'
        };
        g = {
            alias: "previewTemplateWithPlaceAndPerson",
            args: [g, e],
            concreteType: "TaggableActivityPreviewTemplate",
            kind: "LinkedField",
            name: "preview_template",
            plural: !1,
            selections: c,
            storageKey: 'preview_template(with_people:"SINGLE",with_place:"SPECIFIC")'
        };
        i = {
            alias: "previewTemplateWithPlaceAndPeople",
            args: [i, e],
            concreteType: "TaggableActivityPreviewTemplate",
            kind: "LinkedField",
            name: "preview_template",
            plural: !1,
            selections: c,
            storageKey: 'preview_template(with_people:"MULTIPLE",with_place:"SPECIFIC")'
        };
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "FeedComposerSocialSentenceWithActivityQuery",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: "TaggableActivity",
                    kind: "LinkedField",
                    name: "taggable_activity",
                    plural: !1,
                    selections: [d, f, h, j, g, i],
                    storageKey: null
                }],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "FeedComposerSocialSentenceWithActivityQuery",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: "TaggableActivity",
                    kind: "LinkedField",
                    name: "taggable_activity",
                    plural: !1,
                    selections: [d, f, h, j, g, i, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: "3251850478174059",
                metadata: {},
                name: "FeedComposerSocialSentenceWithActivityQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("FeedComposerSocialSentenceWithDraftForQuery.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "userID"
        }]
          , b = [{
            kind: "Variable",
            name: "id",
            variableName: "userID"
        }]
          , c = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "name",
            storageKey: null
        };
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "FeedComposerSocialSentenceWithDraftForQuery",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: "User",
                    kind: "LinkedField",
                    name: "user",
                    plural: !1,
                    selections: [c],
                    storageKey: null
                }],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "FeedComposerSocialSentenceWithDraftForQuery",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: "User",
                    kind: "LinkedField",
                    name: "user",
                    plural: !1,
                    selections: [c, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: "3104152796331321",
                metadata: {},
                name: "FeedComposerSocialSentenceWithDraftForQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("FeedComposerSocialSentenceWithTaggedSponsorQuery.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "sponsorID"
        }]
          , b = [{
            kind: "Variable",
            name: "id",
            variableName: "sponsorID"
        }]
          , c = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "name",
            storageKey: null
        };
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "FeedComposerSocialSentenceWithTaggedSponsorQuery",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "profile",
                    plural: !1,
                    selections: [c],
                    storageKey: null
                }],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "FeedComposerSocialSentenceWithTaggedSponsorQuery",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "profile",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "__typename",
                        storageKey: null
                    }, c, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: "2389886771114076",
                metadata: {},
                name: "FeedComposerSocialSentenceWithTaggedSponsorQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("AmaCreateAttachmentFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743077");
    c = b("FalcoLoggerInternal").create("ama_create_attachment", a);
    e.exports = c
}
), null);
__d("AmaHitMaxCharacterLimitFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743079");
    c = b("FalcoLoggerInternal").create("ama_hit_max_character_limit", a);
    e.exports = c
}
), null);
__d("AmaRemoveAttachmentFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743080");
    c = b("FalcoLoggerInternal").create("ama_remove_attachment", a);
    e.exports = c
}
), null);
__d("cometComposerAMACreationLogger", ["AmaCreateAttachmentFalcoEvent", "AmaHitMaxCharacterLimitFalcoEvent", "AmaRemoveAttachmentFalcoEvent", "TCometComposerTarget"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b, c) {
        switch (a.type) {
        case "AMA_CREATE_ATTACHMENT":
            g(a.fields, b, c);
            break;
        case "AMA_REMOVE_ATTACHMENT":
            h(a.fields, b, c);
            break;
        case "AMA_HIT_MAX_CHARACTER_LIMIT":
            i(a.fields, b, c);
            break;
        default:
            break
        }
    }
    function g(a, c, d) {
        b("AmaCreateAttachmentFalcoEvent").log(function() {
            return j(a, c, d)
        })
    }
    function h(a, c, d) {
        b("AmaRemoveAttachmentFalcoEvent").log(function() {
            return j(a, c, d)
        })
    }
    function i(a, c, d) {
        b("AmaHitMaxCharacterLimitFalcoEvent").log(function() {
            return j(a, c, d)
        })
    }
    function j(a, b, c) {
        return babelHelpers["extends"]({}, a, {
            creation_session_id: b,
            target_id: (a = c.target) == null ? void 0 : a.id,
            target_type: k((b = c.target) == null ? void 0 : b.type)
        })
    }
    function k(a) {
        if (a == null)
            return null;
        switch (a) {
        case b("TCometComposerTarget").ComposerTargetType.Group:
            return "group";
        case b("TCometComposerTarget").ComposerTargetType.Page:
            return "undirected_page";
        case b("TCometComposerTarget").ComposerTargetType.Feed:
        case b("TCometComposerTarget").ComposerTargetType.Profile:
            return "undirected_user";
        case b("TCometComposerTarget").ComposerTargetType.Event:
        case b("TCometComposerTarget").ComposerTargetType.Unknown:
            return "unknown"
        }
    }
}
), null);
__d("CometBCHSTStrings", ["fbt", "CometLink.react", "ContentRefComet", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    c = {
        dialogContentAffiliateLink: g._("B\u00e0i vi\u1ebft c\u1ee7a b\u1ea1n nh\u1eafc \u0111\u1ebfn m\u1ed9t doanh nghi\u1ec7p ho\u1eb7c s\u1ea3n ph\u1ea9m c\u1ee7a b\u00ean th\u1ee9 ba. Theo ch\u00ednh s\u00e1ch c\u1ee7a ch\u00fang t\u00f4i, n\u1ebfu vi\u1ebft b\u00e0i gi\u1edbi thi\u1ec7u \u0111\u1ed1i t\u00e1c kinh doanh ho\u1eb7c ch\u1ecbu \u1ea3nh h\u01b0\u1edfng c\u1ee7a h\u1ecd \u0111\u1ec3 nh\u1eadn l\u1ea1i l\u1ee3i \u00edch, b\u1ea1n ph\u1ea3i g\u1eafn th\u1ebb \u0111\u1ed1i t\u00e1c \u0111\u00f3 \u0111\u1ec3 n\u00eau r\u00f5 r\u1eb1ng n\u1ed9i dung c\u1ee7a b\u1ea1n \u0111\u01b0\u1ee3c t\u00e0i tr\u1ee3."),
        dialogContentBrandDetected: g._("B\u00e0i vi\u1ebft c\u1ee7a b\u1ea1n ch\u1ee9a th\u00f4ng tin th\u01b0\u1eddng xu\u1ea5t hi\u1ec7n trong n\u1ed9i dung c\u00f3 th\u01b0\u01a1ng hi\u1ec7u, bao g\u1ed3m t\u00ean c\u1ee7a nh\u00e0 t\u00e0i tr\u1ee3 ti\u1ec1m n\u0103ng. N\u1ebfu t\u00ean nh\u00e0 t\u00e0i tr\u1ee3 hi\u1ec3n th\u1ecb \u1edf \u0111\u00e2y kh\u00f4ng ch\u00ednh x\u00e1c, b\u1ea1n c\u00f3 th\u1ec3 g\u1ee1 \u0111i v\u00e0 nh\u1eadp l\u1ea1i t\u00ean \u0111\u00fang. {newline} N\u1ebfu b\u00e0i vi\u1ebft c\u1ee7a b\u1ea1n gi\u1edbi thi\u1ec7u ho\u1eb7c ch\u1ecbu \u1ea3nh h\u01b0\u1edfng c\u1ee7a \u0111\u1ed1i t\u00e1c kinh doanh \u0111\u1ec3 \u0111\u1ed5i l\u1ea5y gi\u00e1 tr\u1ecb, b\u1ea1n s\u1ebd ph\u1ea3i g\u1eafn th\u1ebb \u0111\u1ed1i t\u00e1c \u0111\u00f3 \u0111\u1ec3 th\u1ec3 hi\u1ec7n r\u1eb1ng n\u1ed9i dung c\u1ee7a b\u1ea1n \u0111\u01b0\u1ee3c t\u00e0i tr\u1ee3. \u0110\u00e2y l\u00e0 y\u00eau c\u1ea7u trong ch\u00ednh s\u00e1ch c\u1ee7a ch\u00fang t\u00f4i.", [g._param("newline", h.jsxs(h.Fragment, {
            children: [h.jsx("br", {}), h.jsx("br", {})]
        }))]),
        dialogContentSelfDisclosure: g._("B\u00e0i vi\u1ebft c\u1ee7a b\u1ea1n ch\u1ee9a th\u00f4ng tin th\u01b0\u1eddng xu\u1ea5t hi\u1ec7n trong n\u1ed9i dung c\u00f3 th\u01b0\u01a1ng hi\u1ec7u. Theo ch\u00ednh s\u00e1ch c\u1ee7a ch\u00fang t\u00f4i, n\u1ebfu b\u00e0i vi\u1ebft gi\u1edbi thi\u1ec7u v\u1ec1 \u0111\u1ed1i t\u00e1c kinh doanh ho\u1eb7c ch\u1ecbu \u1ea3nh h\u01b0\u1edfng c\u1ee7a h\u1ecd \u0111\u1ec3 nh\u1eadn l\u1ea1i l\u1ee3i \u00edch, b\u1ea1n ph\u1ea3i th\u00eam th\u1ebb \u0111\u1ec3 n\u00eau r\u00f5 r\u1eb1ng n\u1ed9i dung c\u1ee7a b\u1ea1n \u0111\u01b0\u1ee3c t\u00e0i tr\u1ee3. {Learn More link}", [g._param("Learn More link", h.jsx(a = b("CometLink.react"), {
            href: "/help/publisher/1396602470441939/",
            target: "_blank",
            children: g._("T\u00ecm hi\u1ec3u th\u00eam")
        }))]),
        dialogTitle: g._("C\u00f3 ph\u1ea3i b\u00e0i vi\u1ebft n\u00e0y \u0111\u01b0\u1ee3c t\u00e0i tr\u1ee3 kh\u00f4ng?"),
        publishWithTagLabel: g._("Th\u00eam th\u1ebb v\u00e0o b\u00e0i vi\u1ebft"),
        publishWithoutTagLabel: g._("\u0110\u0103ng, kh\u00f4ng g\u1eafn th\u1ebb"),
        scheduleWithTagLabel: g._("L\u00ean l\u1ecbch, c\u00f3 g\u1eafn th\u1ebb"),
        scheduleWithoutTagLabel: g._("L\u00ean l\u1ecbch, kh\u00f4ng g\u1eafn th\u1ebb")
    };
    f.intercept = c;
    d = {
        alertDialogText: function(a) {
            return a != null && a !== "" ? g._("{=[brandName]} ph\u1ea3i x\u00e1c nh\u1eadn r\u1eb1ng h\u1ecd c\u00f3 quan h\u1ec7 \u0111\u1ed1i t\u00e1c v\u1ec1 n\u1ed9i dung c\u00f3 th\u01b0\u01a1ng hi\u1ec7u v\u1edbi b\u1ea1n th\u00ec b\u00e0i vi\u1ebft c\u1ee7a b\u1ea1n m\u1edbi \u0111\u01b0\u1ee3c \u0111\u0103ng. H\u1ecd c\u00f3 th\u1ec3 xem b\u00e0i vi\u1ebft n\u00e0y tr\u01b0\u1edbc khi quy\u1ebft \u0111\u1ecbnh c\u00f3 ph\u00ea duy\u1ec7t Trang c\u1ee7a b\u1ea1n hay kh\u00f4ng.", [g._param("=[brandName]", h.jsx("b", {
                children: g._("{brandName}", [g._param("brandName", a)])
            }))]) : g._("\u0110\u1ed1i t\u00e1c kinh doanh \u0111\u01b0\u1ee3c g\u1eafn th\u1ebb c\u1ee7a b\u1ea1n ph\u1ea3i x\u00e1c nh\u1eadn r\u1eb1ng h\u1ecd c\u00f3 quan h\u1ec7 \u0111\u1ed1i t\u00e1c v\u1ec1 n\u1ed9i dung c\u00f3 th\u01b0\u01a1ng hi\u1ec7u v\u1edbi b\u1ea1n th\u00ec b\u00e0i vi\u1ebft c\u1ee7a b\u1ea1n m\u1edbi \u0111\u01b0\u1ee3c \u0111\u0103ng. H\u1ecd c\u00f3 th\u1ec3 xem b\u00e0i vi\u1ebft n\u00e0y tr\u01b0\u1edbc khi quy\u1ebft \u0111\u1ecbnh c\u00f3 ph\u00ea duy\u1ec7t Trang c\u1ee7a b\u1ea1n hay kh\u00f4ng.")
        },
        secondPostErrorMessage: g._("\u0110\u1ed1i t\u00e1c b\u1ea1n ch\u1ecdn ph\u1ea3i ph\u00ea duy\u1ec7t b\u00e0i vi\u1ebft ch\u1ee9a n\u1ed9i dung c\u00f3 th\u01b0\u01a1ng hi\u1ec7u b\u1ea1n \u0111\u00e3 g\u1eedi. Ch\u1ec9 khi \u0111\u00f3, b\u1ea1n m\u1edbi c\u00f3 th\u1ec3 g\u1eafn th\u1ebb h\u1ecd trong c\u00e1c b\u00e0i vi\u1ebft kh\u00e1c."),
        submitPostButtonLabel: g._("G\u1eedi b\u00e0i vi\u1ebft")
    };
    f.rbc = d;
    e = {
        allowBoostTooltip: g._("Trang m\u00e0 b\u1ea1n \u0111ang g\u1eafn th\u1ebb c\u00f3 th\u1ec3 qu\u1ea3ng c\u00e1o b\u00e0i vi\u1ebft c\u1ee7a b\u1ea1n tr\u00ean Facebook ho\u1eb7c Instagram. Khi \u0111\u00f3, b\u00e0i vi\u1ebft n\u00e0y s\u1ebd \u0111\u01b0\u1ee3c li\u00ean k\u1ebft v\u1edbi Trang Facebook ho\u1eb7c t\u00e0i kho\u1ea3n Instagram \u0111\u00e3 li\u00ean k\u1ebft c\u1ee7a b\u1ea1n. {Learn More Boost link}", [g._param("Learn More Boost link", h.jsx(a, {
            color: "highlight",
            href: "/help/publisher/2021526178075899/",
            target: "_blank",
            children: g._("T\u00ecm hi\u1ec3u th\u00eam")
        }))])
    };
    f.support = e;
    c = {
        allowBoostLabel: g._("Cho ph\u00e9p \u0111\u1ed1i t\u00e1c kinh doanh qu\u1ea3ng c\u00e1o b\u00e0i vi\u1ebft n\u00e0y"),
        allowBoostTooltip: g._("\u0110\u1ed1i t\u00e1c kinh doanh s\u1ebd c\u00f3 th\u1ec3 qu\u1ea3ng c\u00e1o b\u00e0i vi\u1ebft c\u1ee7a b\u1ea1n tr\u00ean Facebook ho\u1eb7c Instagram. Khi \u0111\u00f3, b\u00e0i vi\u1ebft n\u00e0y s\u1ebd \u0111\u01b0\u1ee3c li\u00ean k\u1ebft v\u1edbi Trang Facebook ho\u1eb7c t\u00e0i kho\u1ea3n Instagram \u0111\u00e3 li\u00ean k\u1ebft c\u1ee7a b\u1ea1n. {Learn More Boost link}", [g._param("Learn More Boost link", h.jsx(a, {
            color: "highlight",
            href: "/help/publisher/2021526178075899/",
            target: "_blank",
            children: g._("T\u00ecm hi\u1ec3u th\u00eam")
        }))]),
        allowSponsorAddCTA: g._("Cho ph\u00e9p \u0111\u1ed1i t\u00e1c kinh doanh th\u00eam n\u00fat k\u00eau g\u1ecdi h\u00e0nh \u0111\u1ed9ng t\u00f9y ch\u1ec9nh v\u00e0o b\u00e0i vi\u1ebft c\u1ee7a t\u00f4i"),
        allowSponsorAddCTATooltip: g._("N\u00fat k\u00eau g\u1ecdi h\u00e0nh \u0111\u1ed9ng t\u00f9y ch\u1ec9nh c\u1ee7a \u0111\u1ed1i t\u00e1c kinh doanh s\u1ebd li\u00ean k\u1ebft v\u1edbi m\u1ed9t trang \u0111\u00edch m\u00e0 h\u1ecd ch\u1ecdn, \u0111\u1ed3ng th\u1eddi v\u1eabn c\u00f3 trong b\u00e0i vi\u1ebft c\u1ee7a b\u1ea1n sau khi qu\u1ea3ng c\u00e1o xong. H\u1ecd c\u00f3 th\u1ec3 thay \u0111\u1ed5i n\u00fat m\u00e0 kh\u00f4ng c\u1ea7n b\u00e1o tr\u01b0\u1edbc ho\u1eb7c ch\u1edd ph\u00ea duy\u1ec7t. {newline} N\u1ebfu b\u1ea1n th\u00eam n\u00fat k\u00eau g\u1ecdi h\u00e0nh \u0111\u1ed9ng v\u00e0o b\u00e0i vi\u1ebft c\u00f3 \u1ea3nh, \u1ea3nh c\u00f3 th\u1ec3 b\u1ecb c\u1eaft b\u1edbt v\u00e0 li\u00ean k\u1ebft v\u1edbi c\u00f9ng trang \u0111\u00edch gi\u1ed1ng nh\u01b0 n\u00fat. {newline2}{Learn More Sponsor CTA link}", [g._param("newline", h.jsxs(h.Fragment, {
            children: [h.jsx("br", {}), h.jsx("br", {})]
        })), g._param("newline2", h.jsxs(h.Fragment, {
            children: [h.jsx("br", {}), h.jsx("br", {})]
        })), g._param("Learn More Sponsor CTA link", h.jsx(a, {
            color: "highlight",
            href: b("ContentRefComet").get("SPONSOR_CTA_HELP_LINK", "BRANDED_CONTENT"),
            target: "_blank",
            children: g._("T\u00ecm hi\u1ec3u th\u00eam")
        }))]),
        boostWithNoSponsorCTA: g._("Cho ph\u00e9p \u0111\u1ed1i t\u00e1c kinh doanh qu\u1ea3ng c\u00e1o b\u00e0i vi\u1ebft n\u00e0y m\u00e0 kh\u00f4ng c\u1ea7n n\u00fat k\u00eau g\u1ecdi h\u00e0nh \u0111\u1ed9ng"),
        boostWithSponsorCTA: g._("Cho ph\u00e9p \u0111\u1ed1i t\u00e1c kinh doanh qu\u1ea3ng c\u00e1o b\u00e0i vi\u1ebft n\u00e0y v\u00e0 th\u00eam n\u00fat k\u00eau g\u1ecdi h\u00e0nh \u0111\u1ed9ng"),
        campaignsList: g._("D\u1ef1 \u00e1n n\u1ed9i dung c\u00f3 th\u01b0\u01a1ng hi\u1ec7u m\u00e0 b\u1ea1n \u0111\u00e3 ch\u1ea5p nh\u1eadn"),
        campaignsTooltip: g._("B\u1ea1n c\u00f3 th\u1ec3 ch\u1ecdn m\u1ed9t trong c\u00e1c d\u1ef1 \u00e1n n\u1ed9i dung c\u00f3 th\u01b0\u01a1ng hi\u1ec7u \u0111\u01b0\u1ee3c n\u00eau \u1edf \u0111\u00e2y \u0111\u1ec3 g\u1eafn th\u1ebb b\u00e0i vi\u1ebft n\u00e0y, c\u0169ng nh\u01b0 ch\u1ecdn d\u1ef1 \u00e1n kh\u00e1c n\u1ebfu kh\u00f4ng t\u00ecm th\u1ea5y th\u1ee9 m\u00ecnh c\u1ea7n."),
        dontAllowSponsorAddCTA: g._("Kh\u00f4ng cho ph\u00e9p th\u00eam n\u00fat k\u00eau g\u1ecdi h\u00e0nh \u0111\u1ed9ng"),
        dontAllowboostLabel: g._("Kh\u00f4ng cho ph\u00e9p \u0111\u1ed1i t\u00e1c kinh doanh qu\u1ea3ng c\u00e1o b\u00e0i vi\u1ebft n\u00e0y"),
        paidPartnershipLabel: g._("M\u1ed1i quan h\u1ec7 t\u00e0i tr\u1ee3"),
        searchTooltip: g._("C\u00e1c Trang b\u1ea1n g\u1eafn th\u1ebb s\u1ebd nh\u1eadn \u0111\u01b0\u1ee3c th\u00f4ng b\u00e1o. \u0110\u1ed1i t\u00e1c kinh doanh s\u1ebd xem \u0111\u01b0\u1ee3c c\u00e1c s\u1ed1 li\u1ec7u v\u1ec1 b\u00e0i vi\u1ebft n\u00e0y. {See policies link}", [g._param("See policies link", h.jsx(a, {
            color: "highlight",
            href: "/policies/brandedcontent/",
            target: "_blank",
            children: g._("Xem ch\u00ednh s\u00e1ch")
        }))]),
        sproutTooltip: g._("G\u1eafn th\u1ebb nh\u00e0 t\u00e0i tr\u1ee3"),
        tagBasedOnActivity: g._("D\u1ef1a tr\u00ean ho\u1ea1t \u0111\u1ed9ng c\u1ee7a b\u1ea1n"),
        tagRelatedToPost: g._("Li\u00ean quan \u0111\u1ebfn b\u00e0i vi\u1ebft c\u1ee7a b\u1ea1n"),
        tagSponsorLabel: g._("G\u1eafn th\u1ebb nh\u00e0 t\u00e0i tr\u1ee3"),
        tagSponsorTypeaheadPlaceholder: g._("Nh\u1eadp t\u00ean ng\u01b0\u1eddi d\u00f9ng ho\u1eb7c Trang c\u1ee7a \u0111\u1ed1i t\u00e1c kinh doanh"),
        title: g._("G\u1eafn th\u1ebb nh\u00e0 t\u00e0i tr\u1ee3"),
        "with": g._("C\u00f9ng v\u1edbi")
    };
    f.tagging = c
}
), null);
__d("breakingNewsReducer", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b) {
        var c = a.breakingNews;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["breakingNews"]);
        var d = c == null ? void 0 : c.breakingNewsEditStartTime;
        switch (b.type) {
        case "ADD_BREAKING_NEWS":
            var e = b.breakingNewsDuration;
            return babelHelpers["extends"]({}, a, {
                breakingNews: {
                    breakingNewsChanged: !0,
                    breakingNewsDuration: e,
                    breakingNewsEditStartTime: d,
                    breakingNewsIsSettingUpEdit: !1
                }
            });
        case "REMOVE_BREAKING_NEWS":
            return babelHelpers["extends"]({}, a, {
                breakingNews: {
                    breakingNewsChanged: !0,
                    breakingNewsDuration: void 0,
                    breakingNewsEditStartTime: d,
                    breakingNewsIsSettingUpEdit: !1
                }
            });
        case "REMOVE_ATTACHMENT_TYPE":
            if (b.attachmentType === "LINK")
                return babelHelpers["extends"]({}, a, {
                    breakingNews: void 0
                });
            break;
        case "REMOVE_LINK_URL":
            return babelHelpers["extends"]({}, a, {
                breakingNews: void 0
            });
        case "ADD_LINK_URL":
            if ((c == null ? void 0 : c.breakingNewsIsSettingUpEdit) === !0)
                return babelHelpers["extends"]({}, a, {
                    breakingNews: {
                        breakingNewsChanged: !0,
                        breakingNewsDuration: c == null ? void 0 : c.breakingNewsDuration,
                        breakingNewsEditStartTime: d,
                        breakingNewsIsSettingUpEdit: !1
                    }
                });
            else
                return babelHelpers["extends"]({}, a, {
                    breakingNews: void 0
                })
        }
        return babelHelpers["extends"]({
            breakingNews: c
        }, a)
    }
}
), null);
__d("CometComposerPushPageGlimmer.react", ["CometProgressRingIndeterminate.react", "React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React"), i = {
        popover: {
            alignItems: "bp9cbjyn",
            boxSizing: "rq0escxv",
            display: "j83agx80",
            height: "sgwjjusx",
            justifyContent: "taijpn5t",
            width: "hdkcmrsv"
        },
        pushview: {
            alignItems: "bp9cbjyn",
            boxSizing: "rq0escxv",
            display: "j83agx80",
            height: "j707pzvn",
            justifyContent: "taijpn5t",
            width: "oh7imozk"
        }
    };
    function a(a) {
        var c = a.withPopover;
        a = a.xstyle;
        return h.jsx("div", {
            className: (g || (g = b("stylex")))(c && i.popover, !c && i.pushview, a),
            children: h.jsx(b("CometProgressRingIndeterminate.react"), {
                color: "disabled",
                size: 24
            })
        })
    }
}
), null);
__d("CometComposerActorProfilePicture.react", ["ix", "fbt", "CometImageIcon.react", "CometLink.react", "CometRelay", "React", "asset", "CometComposerActorProfilePicture_profile.graphql"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i, j = b("React"), k = g("762679");
    function a(a) {
        var c;
        a = a.profile$key;
        a = b("CometRelay").useFragment(i !== void 0 ? i : i = b("CometComposerActorProfilePicture_profile.graphql"), a);
        c = (c = a == null ? void 0 : (c = a.profile_picture) == null ? void 0 : c.uri) != null ? c : k;
        return (a == null ? void 0 : a.url) != null ? j.jsx(b("CometLink.react"), {
            href: a.url,
            label: h._("D\u00f2ng th\u1eddi gian c\u1ee7a {userName}", [h._param("userName", a == null ? void 0 : a.name)]),
            children: j.jsx(b("CometImageIcon.react"), {
                size: 40,
                src: c,
                style: "circle"
            })
        }) : j.jsx(b("CometImageIcon.react"), {
            size: 40,
            src: c,
            style: "circle"
        })
    }
}
), null);
__d("CometComposerDialogLayout.react", ["CometFeedWidthStyles", "CometScrollableArea.react", "React", "gkx", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React"), i = {
        body: {
            display: "j83agx80",
            flexDirection: "cbu4d94t",
            flexGrow: "buofh1pr"
        },
        footer: {
            paddingBottom: "ihqw7lf3",
            paddingTop: "discj3wi",
            position: "l9j0dhe7"
        },
        header: {
            paddingEnd: "hv4rvrfc",
            paddingStart: "dati1w0a"
        },
        root: {
            display: "j83agx80",
            flexDirection: "cbu4d94t",
            maxHeight: "f0kvp8a6",
            minHeight: "mfofr4af",
            position: "l9j0dhe7"
        },
        rootFixedWidth: {
            width: "oh7imozk"
        }
    };
    function a(a) {
        var c = a.body
          , d = a.footer;
        a = a.header;
        var e = b("CometFeedWidthStyles").getFeedWidthStyles()
          , f = b("gkx")("1642732");
        return h.jsxs("div", {
            className: (g || (g = b("stylex")))(i.root, f ? e.composerAndFeedWrapper : i.rootFixedWidth),
            children: [h.jsx("div", {
                className: g(i.header),
                children: a
            }), h.jsx(b("CometScrollableArea.react"), {
                horizontal: !1,
                vertical: !0,
                xstyle: i.body,
                children: c
            }), h.jsx("div", {
                className: g(i.footer),
                children: d
            })]
        })
    }
}
), null);
__d("CometComposerMinutiaeBarLayout.react", ["React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        return g.jsxs("div", {
            className: "a8nywdso ihqw7lf3 rz4wbd8a discj3wi j83agx80 bp9cbjyn",
            children: [g.jsx("div", {
                className: "g9en0fbe",
                children: a.profilePicture
            }), g.jsxs("div", {
                className: "cbu4d94t j83agx80",
                children: [a.body, a.meta != null && g.jsx("div", {
                    className: "dbvibxzo",
                    children: a.meta
                })]
            })]
        })
    }
}
), null);
__d("CometComposerMinutiaeBarMeta.react", ["CometBCHSTStrings", "CometMiddot.react", "React", "TetraText.react", "isStringNullOrEmpty", "stylex", "withComposerViewStatePart"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a) {
        var c = a.brandedContent;
        a = a.privacySelector;
        c = !b("isStringNullOrEmpty")(c == null ? void 0 : c.sponsorID) && (c == null ? void 0 : c.sponsorRelationship) === "PAID_RELATIONSHIP_WITH";
        return g.jsxs("div", {
            className: "j83agx80 bp9cbjyn",
            children: [c && g.jsxs(b("TetraText.react"), {
                type: "meta1",
                children: [b("CometBCHSTStrings").tagging.paidPartnershipLabel, g.jsx(b("CometMiddot.react"), {
                    className: "kkf49tns oi9244e8"
                })]
            }), a]
        })
    }
    c = b("withComposerViewStatePart")(a, function(a) {
        return {
            brandedContent: a.brandedContent
        }
    });
    e.exports = c
}
), null);
__d("FeedComposerSocialSentenceLocation.react", ["fbt", "CometLink.react", "CometRelay", "JSResource", "React", "TetraText.react", "lazyLoadComponent", "recoverableViolation", "useCometComposerPushPage", "FeedComposerSocialSentenceLocationQuery.graphql"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h, i = b("React"), j = b("lazyLoadComponent")(b("JSResource")("ComposerLocationListContainer.react").__setRef("FeedComposerSocialSentenceLocation.react"));
    function a(a) {
        a = a.id;
        var c = b("useCometComposerPushPage")()
          , d = i.useMemo(function() {
            return c == null ? null : function() {
                c(g._("B\u1ea1n \u0111ang \u1edf \u0111\u00e2u?"), function(a) {
                    a = a.onReturn;
                    return i.jsx(j, {
                        onClose: a,
                        withPopover: !1
                    })
                })
            }
        }, [c]);
        a = b("CometRelay").useLazyLoadQuery(h !== void 0 ? h : h = b("FeedComposerSocialSentenceLocationQuery.graphql"), {
            id: a
        });
        a = (a = a.node) == null ? void 0 : a.contextual_name;
        if (d != null)
            return i.jsx(b("CometLink.react"), {
                href: "#",
                onClick: d,
                children: i.jsx(b("TetraText.react"), {
                    color: "primary",
                    type: "headlineEmphasized4",
                    children: a
                })
            });
        else
            b("recoverableViolation")("push page should not be null", "comet_composer");
        return a
    }
}
), null);
__d("composerWithTagStateChecker", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b) {
        b = (b = b == null ? void 0 : b.withTagIDs) != null ? b : [];
        a = (a = a == null ? void 0 : a.withTagIDs) != null ? a : [];
        if (b.length !== a.length)
            return !0;
        var c = [].concat(b).sort();
        a = [].concat(a).sort();
        for (var d = 0; d < b.length; d++)
            if (c[d] !== a[d])
                return !0;
        return !1
    }
}
), null);
__d("FeedComposerSocialSentenceTaggedUsers.react", ["fbt", "CometComposerViewStateAlteredContext", "CometLink.react", "CometRelay", "JSResource", "React", "TetraText.react", "composerWithTagStateChecker", "intlList", "lazyLoadComponent", "recoverableViolation", "useCometComposerPushPage", "useContextRef", "useFeedComposerCometWithTagDataSource", "FeedComposerSocialSentenceTaggedUsersQuery.graphql"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h, i = b("React"), j = b("lazyLoadComponent")(b("JSResource")("CometComposerFriendListContainer.react").__setRef("FeedComposerSocialSentenceTaggedUsers.react"));
    function a(a) {
        a = a.ids;
        b("useContextRef")(b("composerWithTagStateChecker"), b("CometComposerViewStateAlteredContext"));
        var c = b("useCometComposerPushPage")()
          , d = b("useFeedComposerCometWithTagDataSource")({
            limit: 20
        })
          , e = i.useMemo(function() {
            return c == null ? null : function() {
                c(g._("G\u1eafn th\u1ebb b\u1ea1n b\u00e8"), function(a) {
                    a = a.onReturn;
                    return i.jsx(j, {
                        dataSource: d,
                        onClose: a,
                        withPopover: !1
                    })
                })
            }
        }, [c, d]);
        a = b("CometRelay").useLazyLoadQuery(h !== void 0 ? h : h = b("FeedComposerSocialSentenceTaggedUsersQuery.graphql"), {
            ids: a
        });
        if (e != null) {
            var f = b("intlList")(a.nodes.map(function(a) {
                return i.jsx(b("CometLink.react"), {
                    href: "#",
                    onClick: e,
                    children: i.jsx(b("TetraText.react"), {
                        color: "primary",
                        type: "headlineEmphasized4",
                        children: a.name
                    })
                })
            }));
            return f
        } else
            b("recoverableViolation")("push page should not be null", "comet_composer");
        return b("intlList")(a.nodes.map(function(a) {
            return i.jsx("span", {
                children: a.name
            })
        }))
    }
}
), null);
__d("FeedComposerGeminiSocialSentenceForAMA.react", ["ix", "fbt", "FeedComposerSocialSentenceLocation.react", "FeedComposerSocialSentenceTaggedUsers.react", "IconSource", "React", "TetraIcon.react", "TetraText.react", "asset"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i = b("React")
      , j = i.jsx(b("TetraIcon.react"), {
        icon: new (b("IconSource"))("FB",g("1342088"),20)
    });
    function k(a) {
        var c = a.location
          , d = a.taggedUserIDs;
        a = a.userName;
        if (d != null && c == null)
            return h._("{post author} \u0111ang {icon} t\u1ed5 ch\u1ee9c bu\u1ed5i Q&A v\u1edbi {tagged people (e.g. 'with Bob Foo and Alice Bar')}", [h._param("post author", a), h._param("icon", j), h._param("tagged people (e.g. 'with Bob Foo and Alice Bar')", i.jsx(b("FeedComposerSocialSentenceTaggedUsers.react"), {
                ids: d
            }))]);
        else if (d == null && c != null && c.isGeohub)
            return h._("{post author} \u0111ang {icon} t\u1ed5 ch\u1ee9c bu\u1ed5i H&\u0110 t\u1ea1i {location (e.g. 'in London')}", [h._param("post author", a), h._param("icon", j), h._param("location (e.g. 'in London')", i.jsx(b("FeedComposerSocialSentenceLocation.react"), {
                id: c.placeID
            }))]);
        else if (d == null && c != null && !c.isGeohub)
            return h._("{post author} \u0111ang {icon} t\u1ed5 ch\u1ee9c bu\u1ed5i H&\u0110 t\u1ea1i {location (e.g. 'at Facebook London')}", [h._param("post author", a), h._param("icon", j), h._param("location (e.g. 'at Facebook London')", i.jsx(b("FeedComposerSocialSentenceLocation.react"), {
                id: c.placeID
            }))]);
        else if (d != null && c != null && c.isGeohub)
            return h._("{post author} \u0111ang {icon} t\u1ed5 ch\u1ee9c bu\u1ed5i H&\u0110 v\u1edbi {tagged people (e.g. 'with Bob Foo and Alice Bar')} t\u1ea1i {location (e.g. 'in London')}", [h._param("post author", a), h._param("icon", j), h._param("tagged people (e.g. 'with Bob Foo and Alice Bar')", i.jsx(b("FeedComposerSocialSentenceTaggedUsers.react"), {
                ids: d
            })), h._param("location (e.g. 'in London')", i.jsx(b("FeedComposerSocialSentenceLocation.react"), {
                id: c.placeID
            }))]);
        else if (d != null && c != null && !c.isGeohub)
            return h._("{post author} \u0111ang {icon} t\u1ed5 ch\u1ee9c bu\u1ed5i H&\u0110 v\u1edbi {tagged people (e.g. 'with Bob Foo and Alice Bar')} t\u1ea1i {location (e.g. 'at Facebook London')}", [h._param("post author", a), h._param("icon", j), h._param("tagged people (e.g. 'with Bob Foo and Alice Bar')", i.jsx(b("FeedComposerSocialSentenceTaggedUsers.react"), {
                ids: d
            })), h._param("location (e.g. 'at Facebook London')", i.jsx(b("FeedComposerSocialSentenceLocation.react"), {
                id: c.placeID
            }))]);
        else
            return h._("{post author} \u0111ang {icon} t\u1ed5 ch\u1ee9c m\u1ed9t bu\u1ed5i H&\u0110", [h._param("post author", a), h._param("icon", j)])
    }
    function a(a) {
        var c = a.location
          , d = a.taggedUserIDs;
        a = a.userName;
        return i.jsx(b("TetraText.react"), {
            type: "headline4",
            children: k({
                location: c,
                taggedUserIDs: ((c = d == null ? void 0 : d.length) != null ? c : 0) > 0 ? d : null,
                userName: i.jsx(b("TetraText.react"), {
                    type: "headlineEmphasized4",
                    children: a
                })
            })
        })
    }
}
), null);
__d("FeedComposerSocialSentenceActivityObject.react", ["CometLink.react", "CometRelay", "React", "TetraText.react", "recoverableViolation", "useCometComposerPushMinutiaePage", "FeedComposerSocialSentenceActivityObjectQuery.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React");
    function a(a) {
        a = a.id;
        var c = b("useCometComposerPushMinutiaePage")();
        a = b("CometRelay").useLazyLoadQuery(g !== void 0 ? g : g = b("FeedComposerSocialSentenceActivityObjectQuery.graphql"), {
            id: a
        });
        a = (a = a.node) == null ? void 0 : a.name;
        if (c != null)
            return h.jsx(b("CometLink.react"), {
                href: "#",
                onClick: c,
                children: h.jsx(b("TetraText.react"), {
                    color: "primary",
                    type: "headlineEmphasized4",
                    children: a
                })
            });
        else
            b("recoverableViolation")("push page context should not be null", "comet_composer");
        return a
    }
}
), null);
__d("FeedComposerSocialSentenceWithActivity.react", ["fbt", "CometRelay", "FeedComposerSocialSentenceActivityObject.react", "FeedComposerSocialSentenceLocation.react", "FeedComposerSocialSentenceTaggedUsers.react", "React", "TetraText.react", "TetraTextPairing.react", "FeedComposerSocialSentenceWithActivityQuery.graphql"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h, i = b("React");
    function j(a, c) {
        var d = c.activityObjectID
          , e = c.locationID
          , f = c.taggedUsers;
        c = a == null ? void 0 : a.template_string;
        a = a == null ? void 0 : a.template_tokens;
        var g = 0
          , h = [];
        if (a != null && c != null) {
            var j = c.toLowerCase();
            h = a.reduce(function(a, c) {
                var h = c.token_position;
                c = c.token_type;
                if (h != null && c != null) {
                    a.push(j.substring(g, h));
                    switch (c) {
                    case "OBJECT":
                        a.push(i.jsx(b("FeedComposerSocialSentenceActivityObject.react"), {
                            id: d
                        }, c));
                        break;
                    case "PLACE":
                        a.push(e != null ? i.jsx(b("FeedComposerSocialSentenceLocation.react"), {
                            id: e
                        }, c) : null);
                        break;
                    case "PERSON":
                    case "PEOPLE":
                        a.push(f != null ? i.jsx(b("FeedComposerSocialSentenceTaggedUsers.react"), {
                            ids: f
                        }, c) : null);
                        break
                    }
                    g = h
                }
                return a
            }, h);
            h.push(j.substring(g))
        }
        return h
    }
    function a(a) {
        var c = a.activityLegacyID
          , d = a.activityObjectID
          , e = a.locationID
          , f = a.taggedUsers;
        a = a.userName;
        c = {
            activityLegacyID: c
        };
        c = b("CometRelay").useLazyLoadQuery(h !== void 0 ? h : h = b("FeedComposerSocialSentenceWithActivityQuery.graphql"), c);
        var k = e != null
          , l = f != null && f.length === 1
          , m = f != null && f.length > 1
          , n = null;
        if (!k && !l && !m) {
            var o;
            n = (o = c.taggable_activity) == null ? void 0 : o.previewTemplate
        } else if (!k && !l && m) {
            n = (o = c.taggable_activity) == null ? void 0 : o.previewTemplateWithPeople
        } else if (!k && l && !m) {
            n = (o = c.taggable_activity) == null ? void 0 : o.previewTemplateWithPerson
        } else if (k && !l && !m) {
            n = (o = c.taggable_activity) == null ? void 0 : o.previewTemplateWithPlace
        } else if (k && !l && m) {
            n = (o = c.taggable_activity) == null ? void 0 : o.previewTemplateWithPlaceAndPeople
        } else if (k && l && !m) {
            n = (o = c.taggable_activity) == null ? void 0 : o.previewTemplateWithPlaceAndPerson
        }
        return i.jsx("div", {
            children: i.jsx(b("TetraTextPairing.react"), {
                headline: g._("{userName} \u0111ang {activityInPresentTense}", [g._param("userName", i.jsx(b("TetraText.react"), {
                    type: "headlineEmphasized4",
                    children: a
                })), g._param("activityInPresentTense", i.jsx(i.Fragment, {
                    children: j(n, {
                        activityObjectID: d,
                        locationID: e,
                        taggedUsers: f
                    })
                }))]),
                level: 4,
                reduceEmphasis: !0
            })
        })
    }
}
), null);
__d("FeedComposerSocialSentenceWithDraftFor.react", ["fbt", "CometRelay", "FeedComposerSocialSentenceTaggedUsers.react", "React", "TetraText.react", "useNullthrowsViolation", "FeedComposerSocialSentenceWithDraftForQuery.graphql"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h, i = b("React");
    function a(a) {
        var c = a.drafteeName
          , d = a.drafterID;
        a = a.taggedUsers;
        d = b("CometRelay").useLazyLoadQuery(h !== void 0 ? h : h = b("FeedComposerSocialSentenceWithDraftForQuery.graphql"), {
            userID: d
        });
        d = b("useNullthrowsViolation")((d = d.user) == null ? void 0 : d.name);
        a != null && a.length > 0 ? a = g._("{drafterName} \u0111ang t\u1ea1o b\u1ea3n nh\u00e1p cho {drafteeName}, trong \u0111\u00f3 c\u00f3 g\u1eafn th\u1ebb {listOfTaggedPeople}", [g._param("drafterName", i.jsx(b("TetraText.react"), {
            type: "headlineEmphasized4",
            children: d
        })), g._param("drafteeName", i.jsx(b("TetraText.react"), {
            type: "headlineEmphasized4",
            children: c
        })), g._param("listOfTaggedPeople", i.jsx(b("FeedComposerSocialSentenceTaggedUsers.react"), {
            ids: a
        }))]) : a = g._("{drafterName} \u0111ang t\u1ea1o b\u1ea3n nh\u00e1p cho {drafteeName}", [g._param("drafterName", i.jsx(b("TetraText.react"), {
            type: "headlineEmphasized4",
            children: d
        })), g._param("drafteeName", i.jsx(b("TetraText.react"), {
            type: "headlineEmphasized4",
            children: c
        }))]);
        return i.jsx(b("TetraText.react"), {
            color: "secondary",
            type: "body3",
            children: a
        })
    }
}
), null);
__d("CometComposerBrandedContentStrings", ["fbt"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = g._("G\u1eafn th\u1ebb nh\u00e0 t\u00e0i tr\u1ee3");
    f.popoverTitle = a
}
), null);
__d("FeedComposerSocialSentenceWithTaggedSponsor.react", ["fbt", "CometComposerBrandedContentStrings", "CometLink.react", "CometRelay", "FeedComposerSocialSentenceLocation.react", "JSResourceForInteraction", "React", "TetraText.react", "TetraTextPairing.react", "lazyLoadComponent", "recoverableViolation", "useCometComposerPushPage", "FeedComposerSocialSentenceWithTaggedSponsorQuery.graphql"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h, i = b("React"), j = b("lazyLoadComponent")(b("JSResourceForInteraction")("CometComposerBrandedContentPopover.react").__setRef("FeedComposerSocialSentenceWithTaggedSponsor.react"));
    function a(a) {
        var c = a.placeID
          , d = a.sponsorID
          , e = a.sponsorRelationship;
        a = a.userName;
        var f = b("useCometComposerPushPage")();
        e = e === "SUPPORT";
        var k = c != null
          , l = i.useMemo(function() {
            return f == null ? null : function() {
                f(b("CometComposerBrandedContentStrings").popoverTitle, function(a) {
                    a = a.onReturn;
                    return i.jsx(j, {
                        onClose: a,
                        pushPage: f,
                        withPopover: !1
                    })
                }, {
                    hasCustomHeader: !0
                })
            }
        }, [f]);
        d = b("CometRelay").useLazyLoadQuery(h !== void 0 ? h : h = b("FeedComposerSocialSentenceWithTaggedSponsorQuery.graphql"), {
            sponsorID: d
        });
        var m = null;
        if (l != null) {
            m = i.jsx(b("CometLink.react"), {
                href: "#",
                onClick: l,
                children: i.jsx(b("TetraText.react"), {
                    color: "primary",
                    type: "headlineEmphasized4",
                    children: (l = d.profile) == null ? void 0 : l.name
                })
            })
        } else {
            b("recoverableViolation")("push page should not be null", "comet_composer");
            m = (l = d.profile) == null ? void 0 : l.name
        }
        if (!e && !k)
            return i.jsx(b("TetraTextPairing.react"), {
                headline: g._("{userName} c\u00f9ng v\u1edbi {taggedSponsor}", [g._param("userName", i.jsx(b("TetraText.react"), {
                    type: "headlineEmphasized4",
                    children: a
                })), g._param("taggedSponsor", i.jsx(b("TetraText.react"), {
                    type: "headlineEmphasized4",
                    children: m
                }))]),
                level: 4,
                reduceEmphasis: !0
            });
        else if (e && !k)
            return i.jsx(b("TetraTextPairing.react"), {
                headline: g._("{userName} \u1ee7ng h\u1ed9 {taggedSponsor}", [g._param("userName", i.jsx(b("TetraText.react"), {
                    type: "headlineEmphasized4",
                    children: a
                })), g._param("taggedSponsor", i.jsx(b("TetraText.react"), {
                    type: "headlineEmphasized4",
                    children: m
                }))]),
                level: 4,
                reduceEmphasis: !0
            });
        else if (!e && k && c != null)
            return i.jsx(b("TetraTextPairing.react"), {
                headline: g._("{userName} c\u00f9ng v\u1edbi {taggedSponsor} t\u1ea1i {location}", [g._param("userName", i.jsx(b("TetraText.react"), {
                    type: "headlineEmphasized4",
                    children: a
                })), g._param("taggedSponsor", i.jsx(b("TetraText.react"), {
                    type: "headlineEmphasized4",
                    children: m
                })), g._param("location", i.jsx(b("FeedComposerSocialSentenceLocation.react"), {
                    id: c
                }))]),
                level: 4,
                reduceEmphasis: !0
            });
        else if (e && k && c != null)
            return i.jsx(b("TetraTextPairing.react"), {
                headline: g._("{userName} \u1ee7ng h\u1ed9 {taggedSponsor} t\u1ea1i {location}", [g._param("userName", i.jsx(b("TetraText.react"), {
                    type: "headlineEmphasized4",
                    children: a
                })), g._param("taggedSponsor", i.jsx(b("TetraText.react"), {
                    type: "headlineEmphasized4",
                    children: m
                })), g._param("location", i.jsx(b("FeedComposerSocialSentenceLocation.react"), {
                    id: c
                }))]),
                level: 4,
                reduceEmphasis: !0
            });
        else
            return ""
    }
}
), null);
__d("composerActivityStateChecker", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b) {
        var c;
        a = a == null ? void 0 : a.activityMinutiae;
        b = b == null ? void 0 : b.activityMinutiae;
        ((c = b) == null ? void 0 : c.activityID) != null && ((c = b) == null ? void 0 : c.objectID) == null && (b = null);
        return (a == null ? void 0 : a.objectID) !== ((c = b) == null ? void 0 : c.objectID) || (a == null ? void 0 : a.activityID) !== ((c = b) == null ? void 0 : c.activityID)
    }
}
), null);
__d("composerActivityViewStateReducer", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function g(a, b) {
        return babelHelpers["extends"]({}, a, {
            activityMinutiae: void 0
        })
    }
    function h(a, b) {
        return babelHelpers["extends"]({}, a, {
            activityMinutiae: {
                activityID: b.id,
                activityLegacyID: b.legacyID,
                activityName: b.activityName,
                activityPrompt: b.activityPrompt
            }
        })
    }
    function i(a, b) {
        return babelHelpers["extends"]({}, a, {
            activityMinutiae: {
                activityID: b.activityID,
                activityLegacyID: b.activityLegacyID,
                iconURI: b.iconURI,
                objectID: b.objectID,
                objectName: b.objectName
            }
        })
    }
    function a(a, b) {
        switch (b.type) {
        case "REMOVE_ACTIVITY":
            return g(a, b);
        case "SELECT_ACTIVITY":
            return h(a, b);
        case "SELECT_ACTIVITY_OBJECT":
            return i(a, b)
        }
        return a
    }
}
), null);
__d("composerWithTagViewStateReducer", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b) {
        var c;
        switch (b.type) {
        case "add_with_tag_id":
            return babelHelpers["extends"]({}, a, {
                withTagIDs: ((c = a.withTagIDs) != null ? c : []).concat(b.with_tag_id)
            });
        case "remove_with_tag_id":
            return babelHelpers["extends"]({}, a, {
                withTagIDs: ((c = a.withTagIDs) != null ? c : []).filter(function(a) {
                    return a !== b.with_tag_id
                })
            });
        case "REMOVE_ALL_WITH_TAGS":
            return babelHelpers["extends"]({}, a, {
                withTagIDs: []
            })
        }
        return a
    }
}
), null);
__d("FeedComposerCometSocialSentence.react", ["fbt", "CometErrorBoundary.react", "CometPlaceholder.react", "FeedComposerGeminiSocialSentenceForAMA.react", "FeedComposerSocialSentenceLocation.react", "FeedComposerSocialSentenceTaggedUsers.react", "FeedComposerSocialSentenceWithActivity.react", "FeedComposerSocialSentenceWithDraftFor.react", "FeedComposerSocialSentenceWithTaggedSponsor.react", "JSResource", "React", "TetraText.react", "TetraTextPairing.react", "lazyLoadComponent", "composerActivityStateChecker", "composerActivityViewStateReducer", "composerAttachmentAreaChecker", "composerAttachmentAreaReducer", "composerLocationTaggingViewStateReducer", "composerWithTagStateChecker", "composerWithTagViewStateReducer", "isStringNullOrEmpty", "useComposerViewStateReducer", "withComposerViewStatePart"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = b("lazyLoadComponent")(b("JSResource")("FeedComposerSocialSentenceWithLocalAlert.react").__setRef("FeedComposerCometSocialSentence.react"));
    function a(a) {
        var c, d = a.activityMinutiae, e = a.brandedContentData, f = a.isWorkAMA, j = a.localAlert, k = a.locationMinutiae, l = a.taggedUsers, m = a.userName;
        a = a.workDraftFor;
        (c = b("useComposerViewStateReducer"))(b("composerLocationTaggingViewStateReducer"));
        c(b("composerAttachmentAreaReducer").composerAttachmentAreaReducer, b("composerAttachmentAreaChecker"));
        c(b("composerActivityViewStateReducer"), b("composerActivityStateChecker"));
        c(b("composerWithTagViewStateReducer"), b("composerWithTagStateChecker"));
        if (m == null)
            return null;
        c = l != null && l.length > 0;
        var n = d != null
          , o = d == null ? void 0 : d.activityLegacyID;
        d = d == null ? void 0 : d.objectID;
        var p = j != null
          , q = k != null
          , r = k == null ? void 0 : k.placeID
          , s = e == null ? void 0 : e.sponsorID;
        e = e == null ? void 0 : e.sponsorRelationship;
        var t = !b("isStringNullOrEmpty")(s);
        a = a == null ? void 0 : a.originalActorID;
        var u = null;
        a != null ? u = h.jsx(b("FeedComposerSocialSentenceWithDraftFor.react"), {
            drafteeName: m,
            drafterID: a,
            taggedUsers: l
        }) : f ? u = h.jsx(b("FeedComposerGeminiSocialSentenceForAMA.react"), {
            location: k,
            taggedUserIDs: l,
            userName: m
        }) : n && o != null && d != null ? u = h.jsx(b("FeedComposerSocialSentenceWithActivity.react"), {
            activityLegacyID: o,
            activityObjectID: d,
            locationID: k == null ? void 0 : k.placeID,
            taggedUsers: l,
            userName: m
        }) : !c && !q && !t && !p ? u = h.jsx(b("TetraText.react"), {
            type: "headlineEmphasized4",
            children: m
        }) : j != null ? u = h.jsx(b("CometPlaceholder.react"), {
            fallback: h.jsx(b("TetraTextPairing.react"), {
                headline: g._("{userName} \u0111ang \u0111\u0103ng m\u1ed9t c\u1ea3nh b\u00e1o t\u1ea1i \u0111\u1ecba ph\u01b0\u01a1ng", [g._param("userName", h.jsx(b("TetraText.react"), {
                    type: "headlineEmphasized4",
                    children: m
                }))]),
                level: 4,
                reduceEmphasis: !0
            }),
            children: h.jsx(i, {
                localAlert: j,
                userName: m
            })
        }) : !c && !t && q && r != null ? u = h.jsx(b("TetraTextPairing.react"), {
            headline: (k == null ? void 0 : k.isGeohub) ? g._("{userName} \u0111ang \u1edf {location}", [g._param("userName", h.jsx(b("TetraText.react"), {
                type: "headlineEmphasized4",
                children: m
            })), g._param("location", h.jsx(b("FeedComposerSocialSentenceLocation.react"), {
                id: r
            }))]) : g._("{userName} \u0111ang \u1edf {location}", [g._param("userName", h.jsx(b("TetraText.react"), {
                type: "headlineEmphasized4",
                children: m
            })), g._param("location", h.jsx(b("FeedComposerSocialSentenceLocation.react"), {
                id: r
            }))]),
            level: 4,
            reduceEmphasis: !0
        }) : c && !q && l != null ? u = h.jsx(b("TetraTextPairing.react"), {
            headline: g._("{userName} c\u00f9ng v\u1edbi {listOfTaggedPeople}", [g._param("userName", h.jsx(b("TetraText.react"), {
                type: "headlineEmphasized4",
                children: m
            })), g._param("listOfTaggedPeople", h.jsx(b("FeedComposerSocialSentenceTaggedUsers.react"), {
                ids: l
            }))]),
            level: 4,
            reduceEmphasis: !0
        }) : c && q && l != null && r != null ? u = h.jsx(b("TetraTextPairing.react"), {
            headline: (k == null ? void 0 : k.isGeohub) ? g._("{userName} \u0111ang \u1edf {location} c\u00f9ng v\u1edbi {listOfTaggedPeople}", [g._param("userName", h.jsx(b("TetraText.react"), {
                type: "headlineEmphasized4",
                children: m
            })), g._param("listOfTaggedPeople", h.jsx(b("FeedComposerSocialSentenceTaggedUsers.react"), {
                ids: l
            })), g._param("location", h.jsx(b("FeedComposerSocialSentenceLocation.react"), {
                id: r
            }))]) : g._("{userName} c\u00f9ng v\u1edbi {listOfTaggedPeople} t\u1ea1i {location}", [g._param("userName", h.jsx(b("TetraText.react"), {
                type: "headlineEmphasized4",
                children: m
            })), g._param("listOfTaggedPeople", h.jsx(b("FeedComposerSocialSentenceTaggedUsers.react"), {
                ids: l
            })), g._param("location", h.jsx(b("FeedComposerSocialSentenceLocation.react"), {
                id: r
            }))]),
            level: 4,
            reduceEmphasis: !0
        }) : t && !b("isStringNullOrEmpty")(s) && (u = h.jsx(b("FeedComposerSocialSentenceWithTaggedSponsor.react"), {
            placeID: r,
            sponsorID: s,
            sponsorRelationship: e,
            userName: m
        }));
        return h.jsx(b("CometErrorBoundary.react"), {
            fallback: function(a) {
                return h.jsx(b("TetraText.react"), {
                    type: "headlineEmphasized4",
                    children: m
                })
            },
            children: h.jsx(b("CometPlaceholder.react"), {
                fallback: h.jsx(b("TetraText.react"), {
                    type: "headlineEmphasized4",
                    children: m
                }),
                children: u
            })
        })
    }
    c = b("withComposerViewStatePart")(a, function(a) {
        var b;
        return {
            activityMinutiae: a.activityMinutiae,
            brandedContentData: a.brandedContent,
            isWorkAMA: ((b = a.workAMAMetadata) == null ? void 0 : b.isAMA) === !0,
            localAlert: a.localAlert,
            locationMinutiae: a.locationMinutiae,
            taggedUsers: a.withTagIDs,
            workDraftFor: a.workDraftFor
        }
    });
    e.exports = c
}
), null);
__d("CometComposerMinutiaeBar.react", ["CometComposerActorProfilePicture.react", "CometComposerMinutiaeBarLayout.react", "CometComposerMinutiaeBarMeta.react", "CometRelay", "FeedComposerCometSocialSentence.react", "React", "CometComposerMinutiaeBar_profile.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React");
    function a(a) {
        var c = a.privacySelector;
        a = a.profile$key;
        a = b("CometRelay").useFragment(g !== void 0 ? g : g = b("CometComposerMinutiaeBar_profile.graphql"), a);
        return h.jsx(b("CometComposerMinutiaeBarLayout.react"), {
            body: h.jsx(b("FeedComposerCometSocialSentence.react"), {
                userName: a.name
            }),
            meta: h.jsx(b("CometComposerMinutiaeBarMeta.react"), {
                privacySelector: c
            }),
            profilePicture: h.jsx(b("CometComposerActorProfilePicture.react"), {
                profile$key: a
            })
        })
    }
}
), null);
__d("CometComposerSavingIndicatorMask.react", ["fbt", "CometProgressIndicator.react", "React", "TetraText.react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        return h.jsxs("div", {
            className: "kavbgo14 kr520xx4 j9ispegn pmk7jnqg taijpn5t cbu4d94t n7fi1qx3 j83agx80 i09qtzwb l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 ms7hmo2b bp9cbjyn",
            children: [h.jsx("div", {
                "aria-atomic": "true",
                "aria-live": "assertive",
                className: "ozuftl9m n851cfcs tvfksri0 n1l5q3vz",
                children: h.jsx(b("TetraText.react"), {
                    type: "body1",
                    children: (a = a.body) != null ? a : g._("\u0110\u0103ng")
                })
            }), h.jsx(b("CometProgressIndicator.react"), {})]
        })
    }
}
), null);
__d("CometComposerSubmitButton.react", ["ix", "fbt", "CometButton_DEPRECATED.react", "JSResource", "React", "TetraButtonGroup.react", "fbicon", "lazyLoadComponent", "stylex", "useCometComposerPushPage", "useComposerValidationErrors", "withComposerViewStatePart"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React")
      , j = b("lazyLoadComponent")(b("JSResource")("PagesCometComposerScheduleView.react").__setRef("CometComposerSubmitButton.react"))
      , k = function(a) {
        var b = a.videoLiteComposerEligible;
        b = b === void 0 ? !1 : b;
        a = a.mediaAttachments;
        a = (a == null ? void 0 : a.length) ? a[0] : {};
        b = b && a.fileType === "VIDEO";
        return b
    }
      , l = function(a) {
        var b = a.disabled
          , c = a.props;
        a = a.scheduledPostDate;
        var d = c.children
          , e = h._("L\u00ean l\u1ecbch \u0111\u0103ng b\u00e0i");
        return {
            disabled: b,
            label: a ? e : d,
            onPress: c.onClick,
            testid: c.testid,
            type: "primary"
        }
    }
      , m = function(a) {
        var c = a.disabled
          , d = a.pushPage
          , e = a.scheduledPostDate;
        if (!d)
            return;
        a = h._("\u0110\u1ed5i l\u1ecbch \u0111\u0103ng b\u00e0i");
        return {
            disabled: c,
            icon: b("fbicon")._(g("481115"), 16),
            label: "",
            labelIsHidden: !0,
            onPress: function() {
                d(h._("L\u00ean l\u1ecbch \u0111\u0103ng b\u00e0i vi\u1ebft"), function(a) {
                    a = a.onReturn;
                    return i.jsx(j, {
                        initialDate: e,
                        onPressBack: a
                    })
                }, {
                    hasCustomHeader: !1
                })
            },
            tooltip: a
        }
    }
      , n = function(a) {
        if (!a)
            return null;
        var b = a == null ? void 0 : a.toDateString();
        a = a == null ? void 0 : a.toLocaleTimeString();
        return i.jsx("div", {
            className: "oqcyycmt discj3wi h73f3l24",
            children: h._("\u0110\u00e3 l\u00ean l\u1ecbch \u0111\u0103ng v\u00e0o {scheduled_post_date_string} l\u00fac {scheduled_post_time_string}.", [h._param("scheduled_post_date_string", b), h._param("scheduled_post_time_string", a)])
        })
    };
    function a(a) {
        var c = a.isDirty
          , d = a.videoLiteComposerEligible
          , e = a.mediaAttachments
          , f = a.scheduledPostDate;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["isDirty", "videoLiteComposerEligible", "mediaAttachments", "scheduledPostDate"]);
        e = k({
            mediaAttachments: e,
            videoLiteComposerEligible: d
        });
        d = b("useComposerValidationErrors")();
        var g = b("useCometComposerPushPage")();
        c = c === !1 || a.disabled === !0 || Object.keys(d).length > 0;
        if (!e)
            return i.jsx(b("CometButton_DEPRECATED.react"), babelHelpers["extends"]({}, a, {
                disabled: c,
                children: a.children
            }));
        d = l({
            disabled: c,
            props: a,
            scheduledPostDate: f
        });
        e = m({
            disabled: c,
            pushPage: g,
            scheduledPostDate: f
        });
        return i.jsxs(i.Fragment, {
            children: [i.jsx(b("TetraButtonGroup.react"), {
                paddingHorizontal: 0,
                paddingTop: 0,
                primary: d,
                secondaryIcon: e
            }), n(f)]
        })
    }
    c = b("withComposerViewStatePart")(a, function(a) {
        return {
            isDirty: a.isDirty,
            mediaAttachments: a.mediaAttachments,
            scheduledPostDate: a.scheduledPostDate
        }
    });
    e.exports = c
}
), null);
__d("CometComposerToolbar.react", ["React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        a = a.children;
        return g.jsx("div", {
            className: "scb9dxdr sj5x9vvc dflh9lhu cxgpxx05 dhix69tm wkznzc2l i1fnvgqd j83agx80 rq0escxv ibutc8p7 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 tr4kgdav eip75gnj ccnbzhu1 dwg5866k cwj9ozl2 bp9cbjyn",
            children: a
        })
    }
}
), null);
__d("CometComposerRemoveAttachmentButton.react", ["ix", "fbt", "React", "TetraCircleButton.react", "fbicon"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i = b("React");
    function a(a) {
        var c = a.buttonType;
        a = a.removeAttachment;
        return i.jsx(b("TetraCircleButton.react"), {
            color: "secondary",
            icon: b("fbicon")._(g("478233"), 20),
            label: h._("G\u1ee1 file \u0111\u00ednh k\u00e8m trong b\u00e0i vi\u1ebft"),
            onPress: a,
            size: 36,
            type: c
        })
    }
}
), null);
__d("useCometComposerAttachmentAreaConfig", ["CometComposerViewStateContext", "React", "qex", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = b("qex")._("1138950")
      , i = {
        amaRoot: {
            alignItems: "bp9cbjyn",
            display: "j83agx80",
            justifyContent: "taijpn5t",
            marginTop: "bcvklqu9",
            marginEnd: "oi9244e8",
            marginBottom: "bi6gxh9e",
            marginStart: "h676nmdw",
            overflowX: "hihg3u9x",
            overflowY: "ggxiycxj",
            position: "l9j0dhe7"
        },
        mediaBorder: {
            borderTop: "dwg5866k",
            borderEnd: "ccnbzhu1",
            borderBottom: "eip75gnj",
            borderStart: "tr4kgdav",
            borderTopStartRadius: "ue3kfks5",
            borderTopEndRadius: "pw54ja7n",
            borderBottomEndRadius: "uo3d90p7",
            borderBottomStartRadius: "l82x9zwi"
        },
        mediaCollageRoot: {
            alignItems: "bp9cbjyn",
            display: "j83agx80",
            justifyContent: "taijpn5t",
            marginTop: "bcvklqu9",
            marginEnd: "oi9244e8",
            marginBottom: "bi6gxh9e",
            marginStart: "h676nmdw",
            overflowX: "ni8dbmo4",
            overflowY: "stjgntxs",
            position: "l9j0dhe7"
        },
        mediaRoot: {
            alignItems: "bp9cbjyn",
            display: "j83agx80",
            height: "f0whzcxx",
            justifyContent: "taijpn5t",
            marginTop: "bcvklqu9",
            marginEnd: "oi9244e8",
            marginBottom: "bi6gxh9e",
            marginStart: "h676nmdw",
            paddingBottom: "ae35evdt",
            position: "l9j0dhe7"
        },
        root: {
            alignItems: "bp9cbjyn",
            borderTop: "dwg5866k",
            borderEnd: "ccnbzhu1",
            borderBottom: "eip75gnj",
            borderStart: "tr4kgdav",
            borderTopStartRadius: "ue3kfks5",
            borderTopEndRadius: "pw54ja7n",
            borderBottomEndRadius: "uo3d90p7",
            borderBottomStartRadius: "l82x9zwi",
            display: "j83agx80",
            justifyContent: "taijpn5t",
            marginTop: "bcvklqu9",
            marginEnd: "oi9244e8",
            marginBottom: "bi6gxh9e",
            marginStart: "h676nmdw",
            overflowX: "ni8dbmo4",
            overflowY: "stjgntxs",
            position: "l9j0dhe7"
        },
        videoMeetupRoot: {
            marginTop: "aov4n071",
            marginEnd: "oi9244e8",
            marginBottom: "oygrvhab",
            marginStart: "h676nmdw",
            paddingBottom: "ae35evdt",
            position: "l9j0dhe7"
        },
        workMultiAttachmentsRoot: {
            marginTop: "aov4n071",
            marginEnd: "oi9244e8",
            marginBottom: "oygrvhab",
            marginStart: "h676nmdw",
            overflowX: "ni8dbmo4",
            overflowY: "stjgntxs"
        }
    };
    function a() {
        var a, c = g.useContext(b("CometComposerViewStateContext"));
        a = (a = c.attachmentArea) == null ? void 0 : a.activeAttachmentType;
        var d = c.amaMetadata != null || c.quiltsMetadata != null;
        c = (c = c.photoLayout) != null ? c : "classic";
        var e = i.root;
        switch (a) {
        case "MEDIA":
            e = [h === !0 ? i.mediaCollageRoot : i.mediaRoot, c === "classic" && i.mediaBorder];
            break;
        case "VIDEO_MEETUP":
            e = i.videoMeetupRoot;
            break;
        case "WORK_MULTI_ATTACHMENTS":
            e = i.workMultiAttachmentsRoot;
            break;
        case "AMA":
        case "QUILT":
            e = i.amaRoot;
            break;
        case "VIEW_ONLY_FEED_ATTACHMENT":
            d && (e = i.amaRoot);
            break
        }
        return {
            rootStyles: e
        }
    }
}
), null);
__d("CometComposerAttachmentArea.react", ["CometComposerGenericAttachmentPendingPreview.react", "CometComposerRemoveAttachmentButton.react", "CometErrorBoundary.react", "CometFeedStoryRenderLocationContext", "CometPlaceholder.react", "React", "promiseDone", "qex", "stylex", "useCometComposerAttachmentAreaConfig", "useComposerViewStateDispatcher", "withComposerViewStatePart"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React"), i = b("qex")._("1138950"), j = {
        storyRenderLocation: "composer_preview"
    }, k = {
        amaRemoveButton: {
            end: "oqnctjl6",
            transform: "p6rql5qu"
        },
        collagePlaceholder: {
            height: "mdso800d"
        },
        collageRemoveButton: {
            end: "oqnctjl6",
            top: "fcg2cn6m"
        },
        mediaAreaRemoveButton: {
            end: "dfi94l0s",
            top: "c4lwxdfx"
        },
        notMediaAreaRemoveButton: {
            end: "lthxh50u",
            top: "bk00n993"
        },
        removeButton: {
            position: "pmk7jnqg",
            transform: "jk2qo03r"
        },
        roomsRemoveButton: {
            end: "hhcrnkbu",
            position: "pmk7jnqg",
            top: "tmxdrx1h",
            transform: "lo7qbyfk"
        }
    };
    function a(a) {
        var c = a.activeAttachmentType
          , d = a.children
          , e = a.isEditing
          , f = a.isMediaAttachmentsRequired
          , l = a.onRemove;
        e = ((a = e) != null ? a : !1) && c === "MEDIA";
        a = !e && f !== !0 && c !== "VIEW_ONLY_FEED_ATTACHMENT" && c !== "WORK_MULTI_ATTACHMENTS";
        e = c === "AMA" || c === "QUILT";
        var m = b("useComposerViewStateDispatcher")();
        f = h.useCallback(function() {
            if (c == null)
                return;
            if (l) {
                b("promiseDone")(l().then(function(a) {
                    a && m({
                        attachmentType: c,
                        type: "REMOVE_ATTACHMENT_TYPE"
                    })
                }));
                return
            }
            m({
                attachmentType: c,
                type: "REMOVE_ATTACHMENT_TYPE"
            })
        }, [c, l, m]);
        var n = b("useCometComposerAttachmentAreaConfig")();
        n = n.rootStyles;
        if (c != null) {
            var o = d(c);
            if (o != null)
                return h.jsx("div", {
                    className: (g || (g = b("stylex")))(n),
                    children: h.jsx(b("CometFeedStoryRenderLocationContext").Provider, {
                        value: j,
                        children: h.jsxs(b("CometPlaceholder.react"), {
                            fallback: h.jsx(b("CometComposerGenericAttachmentPendingPreview.react"), {
                                xstyle: c === "MEDIA" && i === !0 ? k.collagePlaceholder : null
                            }),
                            children: [h.jsx(b("CometErrorBoundary.react"), {
                                onError: f,
                                children: d(c)
                            }), c !== "SHARE" ? h.jsx("div", {
                                className: (g || (g = b("stylex")))(k.removeButton, c === "MEDIA" ? i === !0 ? k.collageRemoveButton : k.mediaAreaRemoveButton : k.notMediaAreaRemoveButton, c === "VIDEO_MEETUP" && k.roomsRemoveButton, e && k.amaRemoveButton),
                                children: a && h.jsx(b("CometComposerRemoveAttachmentButton.react"), {
                                    buttonType: c === "FILE" || c === "POLL" || c === "VIDEO_MEETUP" ? void 0 : "overlay",
                                    removeAttachment: f
                                })
                            }) : null]
                        })
                    })
                })
        }
        return null
    }
    c = b("withComposerViewStatePart")(a, function(a) {
        var b;
        return {
            activeAttachmentType: (b = a.attachmentArea) == null ? void 0 : b.activeAttachmentType,
            isMediaAttachmentsRequired: a.isMediaAttachmentsRequired,
            onRemove: (b = a.attachmentArea) == null ? void 0 : b.onRemove
        }
    });
    e.exports = c
}
), null);
__d("CometComposerPreAttachmentArea.react", ["CometComposerGenericAttachmentPendingPreview.react", "CometErrorBoundary.react", "CometPlaceholder.react", "React", "stylex", "useComposerViewStateDispatcher", "withComposerViewStatePart"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a) {
        var c = a.activePreAttachmentType;
        a = a.children;
        var d = b("useComposerViewStateDispatcher")()
          , e = g.useCallback(function() {
            if (c == null)
                return;
            d({
                preAttachmentType: c,
                type: "REMOVE_PRE_ATTACHMENT_TYPE"
            })
        }, [c, d]);
        if (c != null) {
            var f = a(c);
            if (f != null)
                return g.jsx("div", {
                    className: "l9j0dhe7 bi6gxh9e taijpn5t j83agx80 bp9cbjyn",
                    children: g.jsx(b("CometPlaceholder.react"), {
                        fallback: g.jsx(b("CometComposerGenericAttachmentPendingPreview.react"), {}),
                        children: g.jsx(b("CometErrorBoundary.react"), {
                            onError: e,
                            children: a(c)
                        })
                    })
                })
        }
        return null
    }
    c = b("withComposerViewStatePart")(a, function(a) {
        return {
            activePreAttachmentType: (a = a.preAttachmentArea) == null ? void 0 : a.activePreAttachmentType
        }
    });
    e.exports = c
}
), null);
__d("composerPreAttachmentAreaReducer", ["JSResource"], (function(a, b, c, d, e, f) {
    "use strict";
    f.composerPreAttachmentAreaReducer = a;
    c = {
        FUN_FACT: b("JSResource")("composerFunFactsTransform").__setRef("composerPreAttachmentAreaReducer")
    };
    f.transformerResourceForPreAttachmentType = c;
    function a(a, b) {
        var c;
        switch (b.type) {
        case "ACTIVATE_PRE_ATTACHMENT_TYPE":
            return ((c = a.preAttachmentArea) == null ? void 0 : c.activePreAttachmentType) === b.preAttachmentType ? a : babelHelpers["extends"]({}, a, {
                preAttachmentArea: babelHelpers["extends"]({}, a.preAttachmentArea, {
                    activePreAttachmentType: b.preAttachmentType
                })
            });
        case "REMOVE_PRE_ATTACHMENT_TYPE":
            return ((c = a.preAttachmentArea) == null ? void 0 : c.activePreAttachmentType) !== b.preAttachmentType ? a : babelHelpers["extends"]({}, a, {
                preAttachmentArea: babelHelpers["extends"]({}, a.preAttachmentArea, {
                    activePreAttachmentType: null
                })
            })
        }
        return a
    }
}
), null);
__d("useHandleSideloadedMedia", ["fbt", "CometComposerAttachmentPluginTypes", "React", "composerAttachmentAreaChecker", "composerAttachmentAreaReducer", "composerMediaAttachmentReducer", "isMimeTypeForMedia", "useComposerPluginIneligibility", "useComposerViewStateDispatcher", "useComposerViewStateReducer"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        a === void 0 && (a = !1);
        b("useComposerViewStateReducer")(b("composerAttachmentAreaReducer").composerAttachmentAreaReducer, b("composerAttachmentAreaChecker"));
        b("useComposerViewStateReducer")(b("composerMediaAttachmentReducer"));
        var c = b("useComposerViewStateDispatcher")()
          , d = b("useComposerPluginIneligibility")()
          , e = d.has(b("CometComposerAttachmentPluginTypes").MEDIA);
        return h.useCallback(function(d) {
            if (!e) {
                d = Array.from(d).filter(function(c) {
                    return b("isMimeTypeForMedia").isMimeTypeForPhoto(c.type) || b("isMimeTypeForMedia").isMimeTypeForVideo(c.type) && !a
                }).map(function(a) {
                    return a instanceof File ? a : new File([a],g._("File \u0111\u00e3 d\u00e1n").toString())
                });
                d.length > 0 && (c({
                    attachmentType: "MEDIA",
                    type: "ACTIVATE_ATTACHMENT_TYPE"
                }),
                c({
                    files: d,
                    type: "ADD_MEDIA_ATTACHMENT_ITEMS"
                }))
            }
        }, [e, a, c])
    }
}
), null);
__d("CometComposerMediaDropTarget.react", ["fbt", "React", "TetraText.react", "stylex", "useFileDragEvents", "useHandleSideloadedMedia"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        var c = a.children;
        a = a.disableVideo;
        a = a === void 0 ? !1 : a;
        var d = b("useHandleSideloadedMedia")(a)
          , e = h.useCallback(function(a) {
            switch (a) {
            case "text/plain":
            case "text/html":
            case "text/uri-list":
                return !0;
            default:
                return !1
            }
        }, []);
        a = h.useCallback(function(a) {
            a = ((a = a.dataTransfer) == null ? void 0 : a.items) || [];
            return a.length > 0 && !Array.from(a).find(function(a) {
                return e(a.type)
            })
        }, [e]);
        var f = b("useFileDragEvents")(function(a) {
            return !1
        }, document.documentElement, a)
          , i = h.useRef(null);
        b("useFileDragEvents")(function(a) {
            d(Array.from(a))
        }, i.current, a);
        return h.jsxs("div", {
            className: "k4urcfbm l9j0dhe7 datstx6m rq0escxv",
            ref: i,
            children: [c, f ? h.jsx("div", {
                className: "kr520xx4 j9ispegn pmk7jnqg taijpn5t n7fi1qx3 j83agx80 i09qtzwb rnr61an3 bp9cbjyn",
                children: h.jsx("div", {
                    className: "scb9dxdr sj5x9vvc dflh9lhu cxgpxx05",
                    children: h.jsx(b("TetraText.react"), {
                        type: "body1",
                        children: g._("Th\u1ea3 \u1ea3nh ho\u1eb7c video")
                    })
                })
            }) : null]
        })
    }
}
), null);
__d("cometComposerValidateMediaUploadStarted", ["fbt"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    function a(a) {
        var b;
        b = ((b = a.attachmentArea) == null ? void 0 : b.activeAttachmentType) !== "MEDIA" || a.mediaAttachments != null && a.mediaAttachments.length > 0;
        a = (a.mediaAttachments || []).some(function(a) {
            return a.state === "NEW"
        });
        return !b || a ? g._("B\u1ea1n kh\u00f4ng th\u1ec3 \u0111\u0103ng khi file ph\u01b0\u01a1ng ti\u1ec7n \u0111ang ch\u1edd t\u1ea3i l\u00ean") : null
    }
}
), null);
__d("CometComposerSATPContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext({
        emojiPickerIsHidden: !1,
        satpContainerIsResponsive: !1,
        satpExploreIsDisabled: !1,
        satpFontSize: 30,
        satpRemovalIsDisabled: !1,
        satpTextVerticalAlignment: "top"
    });
    e.exports = c
}
), null);
__d("decorateMultiStepContainerPushPage", ["CometComposerHeader.react", "CometComposerPushPageGlimmer.react", "CometHideLayerOnEscape.react", "CometPlaceholder.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        return a == null ? null : function(c, d, e) {
            var f = function(a) {
                var f;
                a = a.onReturn;
                return g.jsxs(b("CometHideLayerOnEscape.react"), {
                    onHide: a,
                    children: [(e == null ? void 0 : e.hasCustomHeader) === !0 ? null : g.jsx(b("CometComposerHeader.react"), {
                        onBack: a,
                        onClose: e == null ? void 0 : e.onClose,
                        testid: void 0,
                        title: c,
                        withBackButton: (f = e == null ? void 0 : e.withBackButton) != null ? f : !0,
                        withCloseButton: (f = e == null ? void 0 : e.withCloseButton) != null ? f : !1
                    }), g.jsx(b("CometPlaceholder.react"), {
                        fallback: g.jsx(b("CometComposerPushPageGlimmer.react"), {
                            withPopover: !1,
                            xstyle: e == null ? void 0 : e.xstyle
                        }),
                        children: g.jsx(d, {
                            onReturn: a
                        })
                    }, 1)]
                })
            };
            return a(f)
        }
    }
}
), null);
__d("useCometComposerSATPConfig", ["CometComposerSATPContext", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a() {
        return g.useContext(b("CometComposerSATPContext"))
    }
}
), null);
__d("getDeferredComposerLogger", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        return function(b, c, d) {
            a.loadImmediately(function(a) {
                a(b, c, d)
            })
        }
    }
}
), null);
__d("generateOptimisticResponse", ["CometRelay", "JSResource", "OptimisticLoadingTypeEnum", "ServerTime", "cometComposerLogger", "cometUniqueID", "gkx", "qex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = (c = b("JSResource"))("CometFeedUnitStoryStrategy.react").__setRef("generateOptimisticResponse")
      , h = c("CometFeedUnitStoryStrategy_feedUnit$normalization.graphql").__setRef("generateOptimisticResponse")
      , i = c("CometFeedStoryActorPhotoStrategy.react").__setRef("generateOptimisticResponse")
      , j = c("CometFeedStoryActorPhotoStrategy_actorPhoto$normalization.graphql").__setRef("generateOptimisticResponse")
      , k = c("CometFeedStoryDefaultContentStrategy.react").__setRef("generateOptimisticResponse")
      , l = c("CometFeedStoryDefaultContentStrategy_content$normalization.graphql").__setRef("generateOptimisticResponse")
      , m = c("CometFeedStoryLargeMessageRenderingStrategy_message$normalization.graphql").__setRef("generateOptimisticResponse")
      , n = c("CometFeedStoryLargeMessageRenderingStrategy.react").__setRef("generateOptimisticResponse")
      , o = c("CometFeedStoryMessageContainerRenderingStrategy_messageContainer$normalization.graphql").__setRef("generateOptimisticResponse")
      , p = c("CometFeedStoryMessageContainerRenderingStrategy.react").__setRef("generateOptimisticResponse")
      , q = c("CometFeedStoryDefaultLayoutStrategy_layout$normalization.graphql").__setRef("generateOptimisticResponse")
      , r = c("CometFeedStoryDefaultLayoutStrategy.react").__setRef("generateOptimisticResponse")
      , s = c("CometFeedStoryTimestampStrategy_timestamp$normalization.graphql").__setRef("generateOptimisticResponse")
      , t = c("CometFeedStoryTimestampStrategy.react").__setRef("generateOptimisticResponse")
      , u = c("CometFeedStoryTitleWithActorStrategy_contextTitle$normalization.graphql").__setRef("generateOptimisticResponse")
      , v = c("CometFeedStoryTitleWithActorStrategy.react").__setRef("generateOptimisticResponse")
      , w = c("CometFeedStoryDefaultContextLayoutStrategy_contextLayout$normalization.graphql").__setRef("generateOptimisticResponse")
      , x = c("CometFeedStoryDefaultContextLayoutStrategy.react").__setRef("generateOptimisticResponse")
      , y = b("qex")._("1221850") === !0
      , z = b("gkx")("1000924");
    function a(a, c, d, e) {
        var f, i = c == null ? void 0 : (f = c.message) == null ? void 0 : f.text, j = c == null ? void 0 : (f = c.attachments) == null ? void 0 : f.length;
        c = j != null && j !== 0;
        f = b("cometUniqueID")();
        var k = b("cometUniqueID")();
        d = d.mediaAttachments;
        var l = d != null ? d.map(function(a) {
            if (a.file == null)
                return null;
            if (a.fileType !== "FILE" && a.fileType !== "UNKNOWN" && a.state !== "CLIENT_PROCESSING" && a.state !== "CLIENT_PROCESSING_COMPLETE") {
                var b = URL.createObjectURL(a.file);
                return {
                    entID: a.state === "UPLOADED" ? a.entID : void 0,
                    objectURL: b,
                    type: a.fileType,
                    useCDNPreview: a.useCDNPreview
                }
            }
            return null
        }).filter(Boolean) : null;
        d = function() {
            if (l != null && y)
                return b("OptimisticLoadingTypeEnum").SHOW_POST_PREVIEW;
            else if (j != null && j !== 0)
                return b("OptimisticLoadingTypeEnum").SHOW_PROGRESS_BAR;
            else if (i != null && i !== "")
                return b("OptimisticLoadingTypeEnum").SHOW_POST_PREVIEW;
            else
                return b("OptimisticLoadingTypeEnum").SHOW_LOADER
        }
        ;
        d = d();
        if (z) {
            b("cometComposerLogger")({
                fields: {
                    publishFlowOptimisticStep: "CREATE_OPTIMISTIC_RESPONSE",
                    typeOfOptimisticPost: d
                },
                type: "COMPOSER_PUBLISH_FLOW_OPTIMISTIC_PROCESS"
            }, e);
            return {
                story_create: {
                    feed_story_edge: {
                        category: null,
                        cursor: null,
                        deduplication_key: null,
                        feed_backend_data: null,
                        node: b("CometRelay").createPayloadFor3DField("CometFeedUnitContainerSection_feedUnit", h, g, {
                            __isFeedUnit: !0,
                            __isNode: !0,
                            __isTrackableFeedUnit: "Story",
                            __typename: "Story",
                            attached_story: null,
                            call_to_action: null,
                            click_tracking_linkshim_cb: null,
                            client_view_config: null,
                            comet_sections: {
                                aymt_footer: null,
                                call_to_action: null,
                                content: A(k, f, i, c),
                                context_layout: D(a, f),
                                copyright_violation_header: null,
                                feedback: null,
                                footer: null,
                                header: null,
                                layout: H(),
                                outer_footer: null
                            },
                            creation_session_id: e,
                            debug_info: null,
                            encrypted_click_tracking: null,
                            encrypted_tracking: null,
                            feedback: {
                                associated_group: {
                                    id: null
                                },
                                id: k
                            },
                            id: f,
                            matched_terms: [],
                            optimistic_loading_type: d,
                            optimistic_media_attachments: l,
                            should_host_actor_link_in_watch: null,
                            sponsored_data: null,
                            trackingdata: {
                                id: null
                            },
                            viewability_config: []
                        })
                    },
                    fundraiser_feed_story_edge: void 0,
                    group_feed_story_edge: void 0,
                    logging_token: null,
                    story: {
                        attachments: [],
                        default_actor: null,
                        gemini_group_draft_summary: void 0,
                        id: f,
                        legacy_story_hideable_id: null,
                        social_learning_info_unit_module: void 0,
                        to: void 0
                    },
                    story_id: null,
                    timeline_feed_units_edge: void 0,
                    user: void 0
                }
            }
        }
        return null
    }
    function A(a, c, d, e) {
        return b("CometRelay").createPayloadFor3DField("CometFeedStory_story", l, k, {
            __isICometStorySection: !0,
            __typename: "CometFeedStoryDefaultContentStrategy",
            is_prod_eligible: !0,
            story: {
                actors: [],
                attached_story: null,
                attachments: [],
                comet_sections: {
                    above_message: null,
                    aggregated_stories: null,
                    attached_story: null,
                    attachment_overlay: null,
                    info_icon: null,
                    message: B(c, d, e),
                    message_container: C(c, d),
                    message_sticker: null,
                    message_suffix: null
                },
                encrypted_tracking: null,
                feedback: {
                    id: a
                },
                id: c,
                sponsored_data: null,
                text_format_metadata: null
            }
        })
    }
    function B(a, c, d) {
        return b("CometRelay").createPayloadFor3DField("CometFeedStoryMessageSection_story", m, n, {
            __isICometStorySection: !0,
            __typename: "CometFeedStoryLargeMessageRenderingStrategy",
            is_prod_eligible: !0,
            story: {
                id: a,
                is_text_only_story: d,
                message: {
                    aggregated_ranges: [],
                    color_ranges: [],
                    delight_ranges: [],
                    image_ranges: [],
                    inline_style_ranges: [],
                    ranges: [],
                    text: c
                }
            }
        })
    }
    function C(a, c) {
        return b("CometRelay").createPayloadFor3DField("CometFeedStoryMessageContainerSection_story", o, p, {
            __isICometStorySection: !0,
            __typename: "CometFeedStoryMessageContainerRenderingStrategy",
            is_prod_eligible: !0,
            story: {
                attachments: [],
                comet_sections: {
                    message: null
                },
                id: a,
                message: {
                    text: c
                },
                referenced_sticker: null,
                text_format_metadata: null
            }
        })
    }
    function D(a, c) {
        return b("CometRelay").createPayloadFor3DField("CometFeedStoryContextSection_story", w, x, {
            __isICometStorySection: !0,
            __typename: "CometFeedStoryDefaultContextLayoutStrategy",
            is_prod_eligible: !0,
            story: {
                actors: [],
                can_viewer_see_menu: !0,
                comet_sections: {
                    action_link: null,
                    actor_photo: E(c),
                    alert_badge: null,
                    audience: null,
                    badge_action_link: null,
                    classifier_dogfooding: null,
                    identity_badge: null,
                    location: null,
                    location_transparency: null,
                    page_admin_attribution: null,
                    paid_partnership_label: null,
                    sponsored_label: null,
                    timestamp: F(c),
                    title: G(a, c),
                    viewed_count: null,
                    work_intern_qa_question: null,
                    work_intern_task: null
                },
                debug_info: null,
                encrypted_tracking: null,
                id: c,
                serialized_frtp_identifiers: null
            }
        })
    }
    function E(a) {
        return b("CometRelay").createPayloadFor3DField("CometFeedStoryActorPhotoSection_story", j, i, {
            __isICometStorySection: !0,
            __typename: "CometFeedStoryActorPhotoStrategy",
            is_prod_eligible: !0,
            story: {
                actors: [],
                id: a
            }
        })
    }
    function F(a) {
        return b("CometRelay").createPayloadFor3DField("CometFeedStoryTimestampSection_story", s, t, {
            __isICometStorySection: !0,
            __typename: "CometFeedStoryTimestampStrategy",
            is_prod_eligible: !0,
            story: {
                creation_time: Math.round(b("ServerTime").getMillis() / 1e3),
                ghl_label: null,
                id: a,
                url: null
            }
        })
    }
    function G(a, c) {
        return b("CometRelay").createPayloadFor3DField("CometFeedStoryTitleSection_story", u, v, {
            __isICometStorySection: !0,
            __typename: "CometFeedStoryTitleWithActorStrategy",
            is_prod_eligible: !0,
            story: {
                actors: [{
                    __typename: "User",
                    id: a,
                    name: void 0,
                    url: void 0
                }],
                comet_sections: void 0,
                encrypted_tracking: null,
                id: c,
                title: null
            }
        })
    }
    function H() {
        return b("CometRelay").createPayloadFor3DField("CometFeedStory_story__layout", q, r, {
            __isICometStorySection: !0,
            __typename: "CometStoryDefaultLayoutStrategy",
            is_prod_eligible: !0
        })
    }
}
), null);
__d("useComposerSubmit", ["fbt", "CometRelay", "React", "VideoUploadSurface", "cometUniqueID", "generateOptimisticResponse", "getComposerLoggingPayload", "ifRequireable", "qex", "reduceComposerViewStateToCreationData", "requireCond", "requireDeferred", "cr:1526618", "useNotificationsTrackingString", "useTriggerAccessibilityAlert"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React")
      , i = b("requireDeferred")("ComposerStoryCreateMutation")
      , j = b("requireDeferred")("ComposerStoryEditMutation")
      , k = b("qex")._("1221850") === !0;
    function a(a) {
        var c = a.actorID
          , d = a.creationSessionID
          , e = b("CometRelay").useRelayEnvironment()
          , f = b("useTriggerAccessibilityAlert")()
          , l = h.useCallback(function(c) {
            b("cr:1526618") && b("cr:1526618").onSubmitPostError(c.creationSessionID, b("VideoUploadSurface").VideoUploadSurfaceIDs.FEED);
            return function(b) {
                a.onError(b, c)
            }
        }, [a])
          , m = h.useCallback(function(c) {
            var d;
            b("cr:1526618") && b("cr:1526618").onSubmitPostCompleted(c.creationSessionID, b("VideoUploadSurface").VideoUploadSurfaceIDs.FEED);
            d = (d = c.audience) == null ? void 0 : (d = d.privacy) == null ? void 0 : d.base_state;
            d === null || d === void 0 ? f(g._("\u0110\u00e3 chia s\u1ebb B\u00e0i vi\u1ebft c\u1ee7a b\u1ea1n")) : f(g._("\u0110\u00e3 chia s\u1ebb B\u00e0i vi\u1ebft c\u1ee7a b\u1ea1n v\u1edbi {audience}", [g._param("audience", d)]));
            return function(b) {
                a.onCompleted(b, c)
            }
        }, [a, f])
          , n = b("useNotificationsTrackingString")()
          , o = h.useCallback(function(h) {
            var o = h.storyID;
            if (o != null)
                b("reduceComposerViewStateToCreationData")(h, a.transformers, {
                    story_id: o
                }, function(b) {
                    b.tracking = b.tracking ? b.tracking.concat(n) : [n],
                    j.onReady(function(c) {
                        c = c.commit;
                        c(e, b, {
                            onCompleted: m(h),
                            onError: l(h),
                            variables: {
                                feedLocation: a.variables.feedLocation,
                                renderLocation: a.variables.renderLocation
                            }
                        })
                    })
                });
            else {
                o = null;
                var p = b("cometUniqueID")();
                if (a.composerType === "memories") {
                    var q;
                    q = ((q = h.linkAttachment) == null ? void 0 : q.storyId) != null ? "THROWBACK_POST" : "NOT_THROWBACK_POST";
                    var r = h.goodwillCometMetadata;
                    o = {
                        goodwill_comet_metadata: r,
                        is_throwback_post: q
                    }
                }
                var s = null;
                r = a.optimisticTransformers;
                var t = null;
                b("ifRequireable")("ComposerMediaFileUploader", function(a) {
                    t = a.getInstance(c),
                    b("cr:1526618") && b("cr:1526618").onSubmitPost(h.creationSessionID, b("VideoUploadSurface").VideoUploadSurfaceIDs.FEED)
                });
                var u = function(b) {
                    var c = new Error();
                    b.error != null && (c.description = g._("\u0110\u00e3 x\u1ea3y ra l\u1ed7i. Vui l\u00f2ng th\u1eed l\u1ea1i. C\u00f3 th\u1ec3 b\u1ea1n c\u1ea7n ki\u1ec3m tra k\u1ebft n\u1ed1i v\u00e0 k\u00edch th\u01b0\u1edbc file c\u1ee7a m\u00ecnh.").toString());
                    a && a.onError(c, h);
                    s && s.dispose()
                };
                k && r && b("reduceComposerViewStateToCreationData")(h, r, babelHelpers["extends"]({
                    composer_entry_point: a.composerEntryPoint,
                    composer_source_surface: a.composerSourceSurface,
                    composer_type: a.composerType,
                    idempotence_token: a.creationSessionID + "_" + a.requestType,
                    source: "WWW"
                }, o), function(f) {
                    f.logging = {
                        composer_session_id: d
                    },
                    f.tracking = f.tracking ? f.tracking.concat(n) : [n],
                    i.onReady(function(g) {
                        g = g.commitOptimistic;
                        t && t.errorObserver.subscribe(u);
                        s = g(e, f, {
                            optimisticResponse: b("generateOptimisticResponse")(c, f, h, d),
                            optimisticUpdater: function(b) {
                                return a.optimisticUpdater && a.optimisticUpdater(b, p)
                            },
                            variables: a.variables
                        }, {
                            payload: b("getComposerLoggingPayload").getFeedComposerLoggingPayload(h)
                        })
                    })
                });
                b("reduceComposerViewStateToCreationData")(h, a.transformers, babelHelpers["extends"]({
                    composer_entry_point: a.composerEntryPoint,
                    composer_source_surface: a.composerSourceSurface,
                    composer_type: a.composerType,
                    idempotence_token: a.creationSessionID + "_" + a.requestType,
                    source: "WWW"
                }, o), function(j) {
                    a.mutationDataValidator && a.mutationDataValidator(j),
                    j.logging = {
                        composer_session_id: d
                    },
                    j.tracking = j.tracking ? j.tracking.concat(n) : [n],
                    i.onReady(function(i) {
                        i = i.commit;
                        k ? i(e, j, {
                            onCompleted: function(c) {
                                s && s.dispose();
                                a && a.onCompleted(c, h);
                                t && t.errorObserver.unsubscribe(u);
                                b("cr:1526618") && b("cr:1526618").onSubmitPostCompleted(h.creationSessionID, b("VideoUploadSurface").VideoUploadSurfaceIDs.FEED);
                                c = (c = h.audience) == null ? void 0 : (c = c.privacy) == null ? void 0 : c.base_state;
                                c === null || c === void 0 ? f(g._("\u0110\u00e3 chia s\u1ebb B\u00e0i vi\u1ebft c\u1ee7a b\u1ea1n")) : f(g._("\u0110\u00e3 chia s\u1ebb B\u00e0i vi\u1ebft c\u1ee7a b\u1ea1n v\u1edbi {audience}", [g._param("audience", c)]))
                            },
                            onError: function(c) {
                                a && a.onError(c, h),
                                s && s.dispose(),
                                t && t.errorObserver.unsubscribe(u),
                                b("cr:1526618") && b("cr:1526618").onSubmitPostError(h.creationSessionID, b("VideoUploadSurface").VideoUploadSurfaceIDs.FEED)
                            },
                            updater: function(b) {
                                a.updater(b, p)
                            },
                            variables: a.variables
                        }, {
                            payload: b("getComposerLoggingPayload").getFeedComposerLoggingPayload(h)
                        }) : i(e, j, {
                            onCompleted: m(h),
                            onError: l(h),
                            optimisticResponse: b("generateOptimisticResponse")(c, j, h, d),
                            optimisticUpdater: a.optimisticUpdater,
                            updater: a.updater,
                            variables: a.variables
                        }, {
                            payload: b("getComposerLoggingPayload").getFeedComposerLoggingPayload(h)
                        })
                    })
                })
            }
        }, [a, e, m, l, d, c, f]);
        return o
    }
}
), null);
__d("useCometComposerMarkdown", ["emptyFunction", "requireCond", "cr:1606270"], (function(a, b, c, d, e, f) {
    "use strict";
    c = (a = b("cr:1606270")) != null ? a : b("emptyFunction").thatReturnsNull;
    d = c;
    e.exports = d
}
), null);
__d("cometComposerAttachmentsEligibilityChecker", ["CometComposerAttachmentPluginTypes", "CometComposerTaggerPluginTypes"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        var c = (a = a.attachmentArea) == null ? void 0 : a.activeAttachmentType;
        return c != null ? Object.prototype.hasOwnProperty.call(b("CometComposerTaggerPluginTypes"), c) ? new Set() : new Set(Object.keys(b("CometComposerAttachmentPluginTypes")).filter(function(a) {
            return !Object.prototype.hasOwnProperty.call(b("CometComposerTaggerPluginTypes"), a) && a !== c
        })) : new Set()
    }
}
), null);
__d("composerAttachmentAreaFeedTransform", ["composerAttachmentAreaReducer", "promiseDone"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c, d) {
        var e;
        e = (e = a.attachmentArea) == null ? void 0 : e.activeAttachmentType;
        e = e ? b("composerAttachmentAreaReducer").transformerResourceForAttachmentType[e] : null;
        e ? b("promiseDone")(e.load().then(function(b) {
            return b(a, babelHelpers["extends"]({}, c, {
                attachments: []
            }), d)
        })) : d(babelHelpers["extends"]({}, c, {
            attachments: []
        }))
    }
}
), null);
__d("composerPreAttachmentAreaFeedTransform", ["composerPreAttachmentAreaReducer", "promiseDone"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c, d) {
        var e;
        e = (e = a.preAttachmentArea) == null ? void 0 : e.activePreAttachmentType;
        e = e ? b("composerPreAttachmentAreaReducer").transformerResourceForPreAttachmentType[e] : null;
        e ? b("promiseDone")(e.load().then(function(b) {
            return b(a, babelHelpers["extends"]({}, c), d)
        })) : d(c)
    }
}
), null);
__d("composerAudienceFeedTransform", ["killswitch"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c, d) {
        var e;
        e = a == null ? void 0 : (e = a.albumData) == null ? void 0 : e.albumID;
        var f = (a == null ? void 0 : a.viewerEditPostFeatureCapabilities) ? a.viewerEditPostFeatureCapabilities.includes("POST_CONTAINER") : !1;
        e != null ? f ? d(babelHelpers["extends"]({}, c, {
            audience: {
                album_id: e
            }
        })) : b("killswitch")("ALBUM_PHOTO_EDIT_NOT_SENDING_AUDIENCE") ? d(babelHelpers["extends"]({}, c, {
            audience: a.audience
        })) : d(c) : d(babelHelpers["extends"]({}, c, {
            audience: a.audience
        }))
    }
}
), null);
__d("arePrivacyDataEqual", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = ["allow", "deny"];
    function a(a, b) {
        if (a == null && b == null)
            return !0;
        else if (a == null || b == null)
            return !1;
        if (a.base_state !== b.base_state)
            return !1;
        for (var c = g, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
            var f;
            if (d) {
                if (e >= c.length)
                    break;
                f = c[e++]
            } else {
                e = c.next();
                if (e.done)
                    break;
                f = e.value
            }
            f = f;
            var h = a[f] || []
              , i = b[f] || [];
            if (h.length !== i.length)
                return !1;
            if (h.length > 0) {
                f = function() {
                    var a = new Set(i);
                    if (!h.every(function(b) {
                        return a.has(b)
                    }))
                        return {
                            v: !1
                        }
                }();
                if (typeof f === "object")
                    return f.v
            }
        }
        return !0
    }
}
), null);
__d("composerPrivacyAudienceChecker", ["arePrivacyDataEqual"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c) {
        return !b("arePrivacyDataEqual")(a == null ? void 0 : (a = a.audience) == null ? void 0 : a.privacy, c == null ? void 0 : (a = c.audience) == null ? void 0 : a.privacy)
    }
}
), null);
__d("useComposerPrivacyAudienceReducer", ["requireCond", "useComposerViewStateReducer", "cr:1689439"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        b("useComposerViewStateReducer")(g, a === !0 && b("cr:1689439") != null ? b("cr:1689439") : void 0)
    }
    function g(a, b) {
        return "update_audience" === b.type ? babelHelpers["extends"]({}, a, {
            audience: b.audience
        }) : a
    }
}
), null);
__d("useComposerPrivacyChangeHandlers", ["React", "coercePrivacyData", "useComposerViewStateDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a() {
        var a = b("useComposerViewStateDispatcher")()
          , c = g.useCallback(function(b) {
            b.type === "init" || b.type === "success" ? h(a, b.privacyRowInput) : b.type === "error" ? h(a, null) : b.type
        }, [a])
          , d = g.useCallback(function(b) {
            h(a, b)
        }, [a]);
        return {
            onPrivacyChange: c,
            onPrivacyChangeStart: d
        }
    }
    function h(a, c) {
        a({
            audience: {
                privacy: b("coercePrivacyData")(c)
            },
            type: "update_audience"
        })
    }
}
), null);
__d("useComposerPrivacyTags", ["React", "useDebounced"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = 500;
    function a(a, c) {
        var d = g.useState(null)
          , e = d[0]
          , f = d[1]
          , j = b("useDebounced")(i, h);
        g.useEffect(function() {
            j(a, f, e)
        }, [j, a, f, e]);
        return g.useMemo(function() {
            if (e == null && c == null)
                return null;
            var a = new Set();
            if (e != null)
                for (var b = e, d = Array.isArray(b), f = 0, b = d ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                    var g;
                    if (d) {
                        if (f >= b.length)
                            break;
                        g = b[f++]
                    } else {
                        f = b.next();
                        if (f.done)
                            break;
                        g = f.value
                    }
                    g = g;
                    a.add(g)
                }
            if (c != null)
                for (var g = c, f = Array.isArray(g), d = 0, g = f ? g : g[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                    if (f) {
                        if (d >= g.length)
                            break;
                        b = g[d++]
                    } else {
                        d = g.next();
                        if (d.done)
                            break;
                        b = d.value
                    }
                    b = b;
                    a.add(b)
                }
            return Array.from(a)
        }, [e, c])
    }
    function i(a, b, c) {
        if (a == null || a.__type !== "editor-state-based")
            return;
        var d = new Set()
          , e = a.draftEditorState.getCurrentContent();
        e.getBlockMap().forEach(function(a) {
            a.findEntityRanges(function() {
                return !0
            }, function(b) {
                b = a.getEntityAt(b);
                if (b == null)
                    return;
                b = e.getEntity(b);
                if (b.getType() !== "MENTION")
                    return;
                b = b.getData();
                b = b.id;
                if (b == null)
                    return;
                d.add(b)
            })
        });
        a = c != null && d.size === c.size && Array.from(d).every(function(a) {
            return c.has(a)
        });
        a || b(d)
    }
}
), null);
__d("composerLinkAttachmentChecker", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b) {
        return (a == null ? void 0 : (a = a.linkAttachment) == null ? void 0 : a.url) !== (b == null ? void 0 : (a = b.linkAttachment) == null ? void 0 : a.url)
    }
}
), null);
__d("composerLinkAttachmentReducer", ["gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function g(a, c) {
        var d, e;
        if (((d = a.attachmentArea) == null ? void 0 : d.activeAttachmentType) === "FORMATTED_TEXT" || b("gkx")("1663744") && ((d = a.attachmentArea) == null ? void 0 : d.activeAttachmentType) === "SHARE")
            return a;
        d = ((d = a.linkAttachment) == null ? void 0 : d.previousUrls) || [];
        e = (e = a.linkAttachment) == null ? void 0 : e.url;
        c = c.url;
        if (e != null) {
            var f = e.length > c.length ? [c, e] : [e, c]
              , g = f[0];
            f = f[1];
            if (f.startsWith(g))
                return babelHelpers["extends"]({}, a, {
                    linkAttachment: babelHelpers["extends"]({}, a.linkAttachment, {
                        url: c
                    })
                })
        }
        f = e != null ? [].concat(d, [e]) : d;
        return babelHelpers["extends"]({}, a, {
            linkAttachment: babelHelpers["extends"]({}, a.linkAttachment, {
                previousUrls: f,
                url: c
            })
        })
    }
    function h(a, b) {
        var c;
        c = ((c = a.linkAttachment) == null ? void 0 : c.previousUrls) || [];
        if (c.length === 0) {
            b.onRemovedLast(!0);
            return babelHelpers["extends"]({}, a, {
                attachmentArea: {
                    activeAttachmentType: null
                },
                linkAttachment: void 0
            })
        }
        var d = c[c.length - 1];
        c = c.slice(0, -1);
        b.onRemovedLast(!1);
        return babelHelpers["extends"]({}, a, {
            linkAttachment: babelHelpers["extends"]({}, a.linkAttachment, {
                previousUrls: c,
                url: d
            })
        })
    }
    function i(a, b) {
        var c;
        if (a.useOriginalContentLinkAttachment === !0)
            return babelHelpers["extends"]({}, a, {
                originalContentLinkAttachment: babelHelpers["extends"]({}, a.originalContentLinkAttachment, {
                    linkPreview: {
                        share_scrape_data: b.shareScrapeData
                    },
                    url: b.url
                })
            });
        else if (((c = a.linkAttachment) == null ? void 0 : c.url) !== b.url)
            return a;
        return babelHelpers["extends"]({}, a, {
            linkAttachment: babelHelpers["extends"]({}, a.linkAttachment, {
                linkPreview: {
                    share_scrape_data: b.shareScrapeData
                },
                url: b.url
            })
        })
    }
    function j(a, b) {
        return babelHelpers["extends"]({}, a, {
            useOriginalContentLinkAttachment: b.useOriginalContentLinkAttachment
        })
    }
    function a(a, b) {
        switch (b.type) {
        case "ADD_LINK_URL":
            return g(a, b);
        case "REMOVE_LINK_URL":
            return h(a, b);
        case "SET_LINK_PREVIEW":
            return i(a, b);
        case "SET_USE_ORIGINAL_CONTENT":
            return j(a, b)
        }
        return a
    }
}
), null);
__d("CometComposerLinksPlugin.react", ["React", "breakingNewsReducer", "composerLinkAttachmentChecker", "composerLinkAttachmentReducer", "getEntityMatcher", "getImplicitURLMatches", "gkx", "requireCond", "stylex", "useCometComposerDecorator", "useComposerViewStateReducer", "cr:1709494"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = function(a) {
        var c = a.children;
        a = a.href;
        var d = g.useRef(!0)
          , e = b("cr:1709494")(a);
        g.useEffect(function() {
            b("gkx")("1702706") && d.current ? d.current = !1 : e()
        }, [e]);
        return g.jsx("span", {
            className: "py34i1dx",
            children: c
        })
    };
    c = function(a) {
        var b = a.children;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["children"]);
        var c = a.contentState;
        a = a.entityKey;
        c = a != null ? c.getEntity(a) : null;
        a = c != null ? c.getData() : null;
        a = (c = a == null ? void 0 : a.url) != null ? c : "";
        return g.jsx(h, {
            href: a,
            children: b
        })
    }
    ;
    d = function(a) {
        var b = a.children;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["children"]);
        a = a.decoratedText;
        a = a.startsWith("http://") || a.startsWith("https://") ? a : "https://" + a;
        return g.jsx(h, {
            href: a,
            children: b
        })
    }
    ;
    var i = {
        component: g.memo(d),
        priority: 0,
        props: {},
        strategy: b("getImplicitURLMatches")
    }
      , j = {
        component: g.memo(c),
        priority: 0,
        props: {},
        strategy: b("getEntityMatcher")(function(a) {
            return a.getType() === "LINK"
        })
    };
    function a(a) {
        b("useComposerViewStateReducer")(b("composerLinkAttachmentReducer"), b("composerLinkAttachmentChecker"));
        b("useComposerViewStateReducer")(b("breakingNewsReducer"));
        b("useCometComposerDecorator")(i);
        b("useCometComposerDecorator")(j);
        return null
    }
}
), null);
__d("useCometComposerLinkScrape", ["Promise", "React", "useComposerViewStateDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = b("useComposerViewStateDispatcher")();
        return g.useCallback(function() {
            c({
                type: "ADD_LINK_URL",
                url: a
            }),
            c({
                attachmentType: "LINK",
                onRemove: function() {
                    return new (b("Promise"))(function(a) {
                        c({
                            onRemovedLast: a,
                            type: "REMOVE_LINK_URL"
                        })
                    }
                    )
                },
                type: "ACTIVATE_ATTACHMENT_TYPE"
            })
        }, [c, a])
    }
}
), null);
__d("FeedComposerCometFormattedTextBackground.react", ["CometRelay", "React", "cometComposerFormattedBackground", "stylex", "useCometComposerSATPConfig", "FeedComposerCometFormattedTextBackgroundRoot_data.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h, i = b("React"), j = {
        avatarBackgroundImageContainer: {
            height: "jlycob7n"
        },
        backgroundImageContainer: {
            alignItems: "bp9cbjyn",
            backgroundSize: "j0d6stlx",
            display: "j83agx80",
            flexWrap: "lhclo0ds",
            height: "sgwjjusx",
            width: "oh7imozk"
        },
        responsiveBackgroundContainer: {
            backgroundPosition: "mufzhxvi",
            backgroundSize: "r4lidvzm",
            display: "j83agx80",
            flexWrap: "lhclo0ds",
            height: "datstx6m",
            width: "k4urcfbm"
        }
    };
    function a(a) {
        var c = a.data;
        c = b("CometRelay").useFragment(g !== void 0 ? g : g = b("FeedComposerCometFormattedTextBackgroundRoot_data.graphql"), c);
        var d = b("useCometComposerSATPConfig")();
        d = d.satpContainerIsResponsive;
        var e = (c == null ? void 0 : c.avatar_story_text_format_id) != null;
        c = {
            background_color: c == null ? void 0 : c.background_color,
            background_gradient_color: c == null ? void 0 : c.background_gradient_color,
            background_gradient_direction: c == null ? void 0 : c.background_gradient_direction,
            background_image: {
                uri: c == null ? void 0 : (c = c.background_image) == null ? void 0 : c.uri
            }
        };
        c = b("cometComposerFormattedBackground")(c);
        return i.jsx("div", {
            className: (h || (h = b("stylex")))(d ? j.responsiveBackgroundContainer : j.backgroundImageContainer, e && j.avatarBackgroundImageContainer, a.xstyle),
            style: c,
            children: a.children
        })
    }
}
), null);
__d("CometComposerFormattedTextArea.react", ["BaseGlimmer.react", "CometPlaceholder.react", "CometRelay", "FeedComposerCometFormattedTextBackground.react", "React", "stylex", "withComposerViewStatePart", "CometComposerFormattedTextArea_formattedTextPreset.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React");
    function a(a) {
        var c = a.children;
        a = a.formattedTextPreset;
        a = i(a);
        return a != null ? h.jsx(b("CometPlaceholder.react"), {
            fallback: h.jsx(j, {
                children: c
            }),
            children: h.jsx(b("FeedComposerCometFormattedTextBackground.react"), {
                data: a,
                children: c
            })
        }) : c
    }
    function i(a) {
        a = b("CometRelay").useFragment(g !== void 0 ? g : g = b("CometComposerFormattedTextArea_formattedTextPreset.graphql"), a);
        return a
    }
    function j(a) {
        a = a.children;
        return h.jsx(b("BaseGlimmer.react"), {
            className: "oh7imozk sgwjjusx j83agx80 bp9cbjyn",
            index: 1,
            children: a
        })
    }
    c = b("withComposerViewStatePart")(a, function(a) {
        return {
            formattedTextPreset: (a = a.formattedText) == null ? void 0 : a.currentFormattedTextPreset
        }
    });
    e.exports = c
}
), null);
__d("CometFormattedBackgroundAlterationStateChecker", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b) {
        var c;
        return (b == null ? void 0 : (c = b.formattedText) == null ? void 0 : c.currentFormattedTextPreset) !== (a == null ? void 0 : (c = a.formattedText) == null ? void 0 : c.currentFormattedTextPreset) && !((a == null ? void 0 : (c = a.formattedText) == null ? void 0 : c.currentFormattedTextPreset) == null && (b == null ? void 0 : (a = b.formattedText) == null ? void 0 : a.currentFormattedTextPreset) == null)
    }
}
), null);
__d("cometComposerFormattedTextReducers", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b) {
        var c;
        switch (b.type) {
        case "FORMATTED_TEXT_DISABLED":
            return babelHelpers["extends"]({}, a, {
                attachmentArea: {
                    activeAttachmentType: null
                },
                formattedText: {
                    currentFormattedTextPreset: null,
                    previousFormattedTextPreset: a == null ? void 0 : (c = a.formattedText) == null ? void 0 : c.currentFormattedTextPreset,
                    satpBarIsExpanded: (c = a.formattedText) == null ? void 0 : c.satpBarIsExpanded
                },
                formattingType: void 0
            });
        case "FORMATTED_TEXT_PRESET_RESET":
            return babelHelpers["extends"]({}, a, {
                attachmentArea: {
                    activeAttachmentType: "FORMATTED_TEXT"
                },
                formattedText: {
                    currentFormattedTextPreset: a == null ? void 0 : (c = a.formattedText) == null ? void 0 : c.previousFormattedTextPreset,
                    previousFormattedTextPreset: null,
                    satpBarIsExpanded: (c = a.formattedText) == null ? void 0 : c.satpBarIsExpanded
                },
                formattingType: "SATP"
            });
        case "FORMATTED_TEXT_PRESET_TOGGLE":
            return babelHelpers["extends"]({}, a, {
                attachmentArea: {
                    activeAttachmentType: b.formattedTextPreset == null ? null : "FORMATTED_TEXT"
                },
                formattedText: {
                    currentFormattedTextPreset: b.formattedTextPreset,
                    previousFormattedTextPreset: (c = a.formattedText) == null ? void 0 : c.previousFormattedTextPreset,
                    satpBarIsExpanded: (c = a.formattedText) == null ? void 0 : c.satpBarIsExpanded
                },
                formattingType: b.formattedTextPreset == null ? void 0 : "SATP"
            });
        case "SATP_BAR_EXPANDED_TOGGLE":
            return babelHelpers["extends"]({}, a, {
                formattedText: {
                    currentFormattedTextPreset: (c = a.formattedText) == null ? void 0 : c.currentFormattedTextPreset,
                    previousFormattedTextPreset: (b = a.formattedText) == null ? void 0 : b.previousFormattedTextPreset,
                    satpBarIsExpanded: !(a == null ? void 0 : (c = a.formattedText) == null ? void 0 : c.satpBarIsExpanded)
                }
            })
        }
        return a
    }
}
), null);
__d("cometFormattedTextIneligibilityCheck", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b) {
        var c;
        b === void 0 && (b = 130);
        var d = 3;
        return ((c = (c = a.match(/\n/g)) == null ? void 0 : c.length) != null ? c : 0) >= d || a.length > b
    }
}
), null);
__d("useCometSATPIneligibility", ["React", "useComposerViewStateDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a, c, d) {
        var e = b("useComposerViewStateDispatcher")();
        g.useEffect(function() {
            c && a != null ? e({
                type: "FORMATTED_TEXT_DISABLED"
            }) : !c && d != null && a == null && e({
                type: "FORMATTED_TEXT_PRESET_RESET"
            })
        }, [e, c, d, a])
    }
}
), null);
__d("FeedComposerCometFormattedTextArea.react", ["CometComposerAttachmentPluginTypes", "CometComposerFormattedTextArea.react", "CometFormattedBackgroundAlterationStateChecker", "React", "cometComposerFormattedTextReducers", "cometFormattedTextIneligibilityCheck", "getPlainTextFromDeferredDraftEditorState", "useCometComposerSATPConfig", "useCometSATPIneligibility", "useComposerPluginIneligibility", "useComposerViewStateReducer", "withComposerViewStatePart"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a) {
        var c = a.children
          , d = a.formattedTextPreset
          , e = a.isDisabled;
        a = a.previousFormattedTextPreset;
        b("useComposerViewStateReducer")(b("cometComposerFormattedTextReducers"), b("CometFormattedBackgroundAlterationStateChecker"));
        b("useCometSATPIneligibility")(d, e, a);
        return g.jsx(b("CometComposerFormattedTextArea.react"), {
            children: c
        })
    }
    c = b("withComposerViewStatePart")(a, function(a) {
        var c = a.editorState
          , d = b("useComposerPluginIneligibility")()
          , e = b("useCometComposerSATPConfig")();
        e = e.satpTextCharLimit;
        c = c != null && (b("cometFormattedTextIneligibilityCheck")(b("getPlainTextFromDeferredDraftEditorState")(c), e) || d.has(b("CometComposerAttachmentPluginTypes").FORMATTED_TEXT));
        return {
            formattedTextPreset: (e = a.formattedText) == null ? void 0 : e.currentFormattedTextPreset,
            isDisabled: c,
            previousFormattedTextPreset: (d = a.formattedText) == null ? void 0 : d.previousFormattedTextPreset
        }
    });
    e.exports = c
}
), null);
__d("FeedComposerCometStatusArea.react", ["CometComposerEditor.react", "React", "UnicodeUtils", "getPlainTextFromDeferredDraftEditorState", "stylex", "useHandleSideloadedMedia", "withComposerViewStatePart"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i = b("React"), j = 85;
    function a(a) {
        var c = a.alwaysShrinkText
          , d = a.children
          , e = a.formattedTextStyling
          , f = a.shouldShrink;
        a = a.testid;
        return i.jsx("div", {
            className: (g || (g = b("stylex"))).dedupe({
                "border-top-0.3": "gcieejh5",
                "border-end-0.3": "bn081pho",
                "border-bottom-0.3": "humdl8nn",
                "border-start-0.3": "izx4hr6d",
                "box-sizing-1": "rq0escxv",
                "color-1": "oo9gr5id",
                "cursor-1": "t5a262vz",
                "font-size-1": "o0t2es00",
                "font-weight-1": "b1v8xokw",
                "height-1": "datstx6m",
                "line-height-1": "f530mmz5",
                "outline-0.1": "lzcic4wl",
                "padding-top-1": "ecm0bbzt",
                "padding-end-1": "rz4wbd8a",
                "padding-bottom-1": "sj5x9vvc",
                "padding-start-1": "a8nywdso",
                "width-1": "k4urcfbm",
                "color-12": "o8yuz56k"
            }, f || c ? {
                "font-size-1": "jq4qci2q",
                "line-height-1": "a3bd9o3v"
            } : null),
            "data-testid": void 0,
            style: e,
            children: d
        })
    }
    var k = b("withComposerViewStatePart")(a, function(a, c) {
        var d;
        c = c.formattedTextStyling;
        var e = a.editorState != null ? b("getPlainTextFromDeferredDraftEditorState")(a.editorState) : "";
        d = (d = a.attachmentArea) == null ? void 0 : d.activeAttachmentType;
        e = (h || (h = b("UnicodeUtils"))).strlen(e) > j;
        e = (e || d != null) && c == null || a.formattingType === "RICHTEXT";
        return {
            shouldShrink: e
        }
    });
    function c(a, c) {
        var d = a.alwaysShrinkText;
        d = d === void 0 ? !1 : d;
        var e = a.autoFocus;
        e = e === void 0 ? !1 : e;
        var f = a.draftEditorRendering
          , g = a.formatPastedText
          , h = a.formattedTextStyling
          , j = a.onClose
          , l = a.placeholderText
          , m = a.stripPastedStyles;
        m = m === void 0 ? !0 : m;
        var n = a.testid;
        n = a.textAlignment;
        var o = b("useHandleSideloadedMedia")();
        return i.jsx(k, {
            alwaysShrinkText: d,
            formattedTextStyling: h,
            testid: void 0,
            children: i.jsx(b("CometComposerEditor.react"), {
                autoFocus: e,
                draftEditorRendering: f,
                formatPastedText: g,
                handlePastedFiles: function(a) {
                    o(a);
                    return "handled"
                },
                onEscape: j,
                placeholder: l == null ? void 0 : l.toString(),
                ref: c,
                stripPastedStyles: m,
                textAlignment: n,
                typingPerformanceID: "FeedComposerCometStatusArea"
            })
        })
    }
    d = i.forwardRef(c);
    e.exports = d
}
), null);
__d("useCometStatusAreaTextData", ["CometRelay", "useCometComposerSATPConfig", "useCometStatusAreaTextData_formattedTextPreset.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g;
    function a(a) {
        var c, d, e = b("useCometComposerSATPConfig")(), f = e.satpFontSize;
        e = e.satpLineHeightInPx;
        var h = b("CometRelay").useFragment(g !== void 0 ? g : g = b("useCometStatusAreaTextData_formattedTextPreset.graphql"), a)
          , i = h == null ? void 0 : h.inspirations_custom_font_object;
        c = (c = i == null ? void 0 : i.font_name) != null ? c : "";
        d = (d = h == null ? void 0 : h.color) != null ? d : "00000000";
        f = (i = (i = i == null ? void 0 : i.preferred_font_size) != null ? i : f) != null ? i : 30;
        i = (h == null ? void 0 : h.avatar_story_text_format_id) != null;
        h = a != null ? {
            color: "#" + d.substring(2) + d.substring(0, 2),
            fontFamily: c,
            fontSize: f,
            fontWeight: 700,
            lineHeight: e,
            marginBottom: i ? 150 : void 0
        } : {};
        if (a != null)
            return {
                formattedTextStyling: h,
                textAlignment: "center"
            }
    }
}
), null);
__d("FeedComposerCometStatusFormattedTextPlaceholder.react", ["React", "getPlainTextFromDeferredDraftEditorState", "stylex", "useCometComposerSATPConfig", "useCometStatusAreaTextData", "withComposerViewStatePart"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React");
    function a(a) {
        var c;
        c = (c = b("useCometStatusAreaTextData")(a.formattedTextPreset)) == null ? void 0 : c.formattedTextStyling;
        var d = b("useCometComposerSATPConfig")();
        d = d.satpContainerIsResponsive;
        return a.showPlaceholder ? h.jsx("div", {
            className: (g || (g = b("stylex"))).dedupe({
                "position-1": "pmk7jnqg",
                "top-1": "kr520xx4",
                "width-1": "mq6i96l2"
            }, d ? {
                "width-1": "dmwoc352"
            } : null),
            children: h.jsx("div", {
                className: "k4urcfbm oqcyycmt kgtf8isp taijpn5t j83agx80 bp9cbjyn",
                style: c,
                children: a.text
            })
        }) : null
    }
    c = b("withComposerViewStatePart")(a, function(a) {
        a = a.editorState != null ? b("getPlainTextFromDeferredDraftEditorState")(a.editorState) : "";
        return {
            showPlaceholder: a == null || a.length === 0
        }
    });
    e.exports = c
}
), null);
__d("getFeedComposerCometStatusAreaRelayPlaceholderText", ["fbt"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    function a(a, b) {
        return a ? b != null ? g._("{short name} \u01a1i, b\u1ea1n \u0111ang ngh\u0129 g\u00ec th\u1ebf?", [g._param("short name", b)]) : g._("B\u1ea1n \u0111ang ngh\u0129 g\u00ec?") : b != null ? g._("Vi\u1ebft g\u00ec \u0111\u00f3 cho {short name}...", [g._param("short name", b)]) : g._("B\u1ea1n vi\u1ebft g\u00ec \u0111i...")
    }
}
), null);
__d("FeedComposerCometFormattedTextStatusArea.react", ["FeedComposerCometStatusArea.react", "FeedComposerCometStatusFormattedTextPlaceholder.react", "React", "getFeedComposerCometStatusAreaRelayPlaceholderText", "useCometStatusAreaTextData"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a, c) {
        var d, e = b("useCometStatusAreaTextData")(a.formattedTextPreset);
        d = (d = a.placeholderText) != null ? d : b("getFeedComposerCometStatusAreaRelayPlaceholderText")(a.isViewerFeed, a.userShortName);
        var f;
        a.formattedTextPreset != null && (f = g.jsx(b("FeedComposerCometStatusFormattedTextPlaceholder.react"), {
            formattedTextPreset: a.formattedTextPreset,
            text: d
        }),
        d = "");
        return g.jsxs("div", {
            ref: a.statusContainerRef,
            children: [f, g.jsx(b("FeedComposerCometStatusArea.react"), babelHelpers["extends"]({
                alwaysShrinkText: a.alwaysShrinkText,
                autoFocus: a.autoFocus,
                draftEditorRendering: a.draftEditorRendering,
                formatPastedText: a.formatPastedText,
                isViewerFeed: a.isViewerFeed,
                onClose: a.onClose,
                placeholderText: d,
                ref: c,
                stripPastedStyles: a.stripPastedStyles,
                testid: void 0,
                userShortName: a.userShortName
            }, e))]
        })
    }
    c = g.forwardRef(a);
    e.exports = c
}
), null);
__d("cometComposerFormattedTextEligibilityChecker", ["CometComposerAttachmentPluginTypes", "cometFormattedTextIneligibilityCheck", "getPlainTextFromDeferredDraftEditorState"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        if (a.editorState != null) {
            if (a.formattingType === "RICHTEXT")
                return new Set([b("CometComposerAttachmentPluginTypes").FORMATTED_TEXT]);
            var c = b("getPlainTextFromDeferredDraftEditorState")(a.editorState);
            if (b("cometFormattedTextIneligibilityCheck")(c))
                return new Set([b("CometComposerAttachmentPluginTypes").FORMATTED_TEXT]);
            a = (c = a.attachmentArea) == null ? void 0 : c.activeAttachmentType;
            if (a === b("CometComposerAttachmentPluginTypes").LINK)
                return new Set([b("CometComposerAttachmentPluginTypes").FORMATTED_TEXT])
        }
        return new Set()
    }
}
), null);
__d("CometComposerSwatchPickerMenu.entrypoint", ["CometComposerSwatchPickerMenuUsingRelayEntrypointQuery$Parameters", "JSResource", "WebPixelRatio"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        getPreloadProps: function(a) {
            a = a.customSwatchCategory;
            return {
                queries: {
                    swatchPickerMenuQueryReference: {
                        parameters: b("CometComposerSwatchPickerMenuUsingRelayEntrypointQuery$Parameters"),
                        variables: {
                            containsCustomSwatchCategory: a != null,
                            customSwatchCategories: a != null ? [a] : void 0,
                            scale: b("WebPixelRatio").get()
                        }
                    }
                }
            }
        },
        root: b("JSResource")("CometComposerSwatchPickerMenuUsingRelayEntrypoint.react").__setRef("CometComposerSwatchPickerMenu.entrypoint")
    };
    e.exports = a
}
), null);
__d("CometComposerSwatchPickerMenuGlimmer.react", ["BaseGlimmer.react", "CometFlexibleRow.react", "React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = 10;
    function a() {
        var a = [];
        for (var c = 0; c < h; c++)
            a.push(g.jsx(b("BaseGlimmer.react"), {
                className: "bsnbvmp4 tvmbv18p k7cz35w2 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",
                index: c
            }, c));
        return g.jsx("div", {
            className: "gzy3xfl0 scb9dxdr dflh9lhu stjgntxs ni8dbmo4 j83agx80 gs1a9yip",
            children: g.jsx(b("CometFlexibleRow.react"), {
                columnMaxWidth: 32,
                columnMinWidth: 32,
                justify: "center",
                children: a
            })
        })
    }
}
), null);
__d("CometComposerSwatchPickerUsingRelayEntrypoint.react", ["ix", "fbt", "CometComposerAttachmentPluginTypes", "CometComposerSATPContext", "CometComposerSwatchPickerMenu.entrypoint", "CometComposerSwatchPickerMenuGlimmer.react", "CometImage.react", "CometPlaceholder.react", "CometPressable.react", "CometRelay", "React", "TetraIcon.react", "cometComposerFormattedTextReducers", "cometFormattedTextIneligibilityCheck", "fbicon", "getPlainTextFromDeferredDraftEditorState", "stylex", "useCometRelayEntrypointContextualEnvironmentProvider", "useComposerPluginIneligibility", "useComposerViewStateDispatcher", "useComposerViewStateReducer", "withComposerViewStatePart"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    function a(a) {
        var c = a.customSwatchCategory
          , d = a.formattedTextPreset
          , e = a.isDisabled;
        a = a.satpBarIsExpanded;
        var f = !!a;
        b("useComposerViewStateReducer")(b("cometComposerFormattedTextReducers"));
        var j = b("useComposerViewStateDispatcher")();
        a = i.useCallback(function(a) {
            j({
                formattedTextPreset: a,
                type: "FORMATTED_TEXT_PRESET_TOGGLE"
            })
        }, [j]);
        var k = b("useCometRelayEntrypointContextualEnvironmentProvider")()
          , l = b("CometRelay").useEntryPointLoader(k, b("CometComposerSwatchPickerMenu.entrypoint"))
          , m = l[0]
          , n = l[1];
        i.useEffect(function() {
            f && !m && n({
                customSwatchCategory: c
            })
        }, [c, k, f, m, n]);
        l = i.useCallback(function() {
            j({
                type: "SATP_BAR_EXPANDED_TOGGLE"
            })
        }, [j]);
        k = f ? h._("\u1ea8n c\u00e1c t\u00f9y ch\u1ecdn ph\u00f4ng n\u1ec1n") : h._("Hi\u1ec3n th\u1ecb c\u00e1c t\u00f9y ch\u1ecdn ph\u00f4ng n\u1ec1n");
        k = i.jsxs("div", {
            className: "k4urcfbm j83agx80 rq0escxv gs1a9yip",
            children: [i.jsx(b("CometPressable.react"), {
                "aria-label": k,
                onPress: l,
                overlayDisabled: !0,
                children: f ? i.jsx("div", {
                    className: "bsnbvmp4 taijpn5t k7cz35w2 j83agx80 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 g6srhlxm bp9cbjyn" + (d != null ? " c87oxz0k" : ""),
                    children: i.jsx(b("TetraIcon.react"), {
                        icon: b("fbicon")._(g("492485"), 16)
                    })
                }) : i.jsx("span", {
                    className: "hop8lmos rl04r1d5",
                    children: i.jsx(b("CometImage.react"), {
                        height: 38,
                        src: "/images/composer/SATP_Aa_square-2x.png"
                    })
                })
            }), f && m && i.jsx(b("CometPlaceholder.react"), {
                fallback: i.jsx(b("CometComposerSwatchPickerMenuGlimmer.react"), {}),
                children: i.jsx(b("CometRelay").EntryPointContainer, {
                    entryPointReference: m,
                    props: {
                        onSwatchSelected: a
                    }
                })
            })]
        });
        return !e ? k : null
    }
    c = b("withComposerViewStatePart")(a, function(a) {
        var c = a.editorState
          , d = b("useComposerPluginIneligibility")()
          , e = i.useContext(b("CometComposerSATPContext"));
        e = e.satpTextCharLimit;
        c = c != null && (b("cometFormattedTextIneligibilityCheck")(b("getPlainTextFromDeferredDraftEditorState")(c), e) || d.has(b("CometComposerAttachmentPluginTypes").FORMATTED_TEXT));
        return {
            formattedTextPreset: (e = a.formattedText) == null ? void 0 : e.currentFormattedTextPreset,
            isDisabled: c,
            satpBarIsExpanded: (d = a.formattedText) == null ? void 0 : d.satpBarIsExpanded
        }
    });
    e.exports = c
}
), null);
__d("cometComposerTaggerEligibilityChecker", ["CometComposerTaggerPluginTypes", "requireCond", "cr:1500338"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function g(a) {
        var c;
        if (((c = a.brandedContent) == null ? void 0 : c.sponsorID) != null)
            return new Set([b("CometComposerTaggerPluginTypes").TAG, a.brandedContent.sponsorRelationship === "SUPPORT" ? b("CometComposerTaggerPluginTypes").BRANDED_CONTENT : b("CometComposerTaggerPluginTypes").BC_SUPPORT]);
        if (a.withTagIDs != null && a.withTagIDs.length > 0 && (a.taggedProductIDs == null || a.taggedProductIDs.length === 0))
            return new Set([b("CometComposerTaggerPluginTypes").BRANDED_CONTENT, b("CometComposerTaggerPluginTypes").BC_SUPPORT]);
        if (a.activityMinutiae != null)
            return new Set([b("CometComposerTaggerPluginTypes").LOCAL_ALERT]);
        return a.localAlert != null ? new Set([b("CometComposerTaggerPluginTypes").MINUTIAE]) : new Set()
    }
    function a(a) {
        var c = g(a);
        a = b("cr:1500338") !== null ? b("cr:1500338")(a) : new Set();
        return new Set([].concat(Array.from(c), Array.from(a)))
    }
}
), null);
__d("cometComposerValidatePhoto3dAttachment", ["fbt"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    function a(a) {
        a = a.photo3dAttachment;
        if (a == null)
            return null;
        if (a.error !== void 0)
            return g._("An occurred while creating your 3D Photo");
        a = a.renderData;
        return a === void 0 ? g._("Please wait while we are creating your 3D Photo") : null
    }
}
), null);
__d("fundraiserForStoryTransform", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b, c) {
        a.nonprofit == null ? c(b) : c(babelHelpers["extends"]({}, b, {
            attachments: [{
                fundraiser_for_story: {
                    charity_id: a.nonprofit.nonprofitID
                }
            }]
        }))
    }
}
), null);
__d("ComposerEmojiTrigger.react", ["CometErrorBoundary.react", "CometLazyPopoverTrigger.react", "CometPopoverLoadingState.react", "JSResource", "React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = b("JSResource")("ComposerEmojiPopover.react").__setRef("ComposerEmojiTrigger.react")
      , i = {
        popoverFallback: {
            minWidth: "p01isnhg"
        }
    };
    function a(a) {
        var c = a.align;
        c = c === void 0 ? "middle" : c;
        var d = a.children
          , e = a.position;
        e = e === void 0 ? "above" : e;
        var f = a.setClicked
          , j = a.setHovered;
        a = a.visibleOnLoad;
        a = a === void 0 ? !1 : a;
        return g.jsx(b("CometErrorBoundary.react"), {
            children: g.jsx(b("CometLazyPopoverTrigger.react"), {
                align: c,
                autoAlign: !0,
                fallback: g.jsx(b("CometPopoverLoadingState.react"), {
                    withArrow: !0,
                    xstyle: i.popoverFallback
                }),
                popoverProps: {
                    setClicked: f,
                    setHovered: j
                },
                popoverResource: h,
                position: e,
                preloadTrigger: "button",
                tracePolicy: "comet.emojipicker",
                visibleOnLoad: a,
                children: d
            })
        })
    }
}
), null);
__d("ComposerEmojiPopoverButton.react", ["ix", "fbt", "CometComposerSproutButton.react", "CometComposerTaggerPluginTypes", "ComposerEmojiTrigger.react", "React", "asset", "stylex", "useCometStatusAreaTextData", "withComposerViewStatePart"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i, j = b("React");
    function a(a) {
        var c = a.formattedTextPreset;
        a = j.useState(!1);
        var d = a[0]
          , e = a[1];
        a = j.useState(!1);
        var f = a[0]
          , k = a[1];
        a = (a = b("useCometStatusAreaTextData")(c)) == null ? void 0 : a.formattedTextStyling;
        var l = !1;
        a = a == null ? void 0 : a.color;
        if (a != null)
            try {
                var m = parseInt(a.substring(1, 3), 16)
                  , n = parseInt(a.substring(3, 5), 16);
                a = parseInt(a.substring(5, 7), 16);
                m = Math.min(m, n, a);
                l = m > 128
            } catch (a) {
                l = !1
            }
        return j.jsx(b("ComposerEmojiTrigger.react"), {
            setClicked: e,
            setHovered: k,
            children: function(a, m, n, o, p, q) {
                n = function(a) {
                    o && o(a),
                    k(!0)
                }
                ;
                q = function() {
                    p && p(),
                    k(!1)
                }
                ;
                var r = function() {
                    e(!0),
                    m()
                };
                return j.jsx("div", {
                    className: (i || (i = b("stylex"))).dedupe({
                        "opacity-1": "kgtf8isp"
                    }, d || f ? {
                        "opacity-1": "pedkr2u6"
                    } : null, c != null ? {
                        "padding-bottom-1": "f10w8fjw"
                    } : null),
                    children: j.jsx(b("CometComposerSproutButton.react"), {
                        activeColor: "var(--fds-gray-70)",
                        disabledIcon: l ? g("792304") : g("615750"),
                        icon: l ? g("792304") : g("615750"),
                        isActive: !1,
                        label: h._("Bi\u1ec3u t\u01b0\u1ee3ng c\u1ea3m x\u00fac"),
                        loggingName: "minutiae_sprout",
                        onClick: r,
                        onHoverIn: n,
                        onHoverOut: q,
                        overlayDisabled: !0,
                        pluginName: b("CometComposerTaggerPluginTypes").MINUTIAE,
                        ref: a
                    })
                })
            }
        })
    }
    c = b("withComposerViewStatePart")(a, function(a) {
        return {
            formattedTextPreset: (a = a.formattedText) == null ? void 0 : a.currentFormattedTextPreset
        }
    });
    e.exports = c
}
), null);
__d("useGeminiComposerRichTextNodeRefs", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function() {
        var a = g.useRef(null)
          , b = g.useRef(null)
          , c = g.useRef(null);
        return g.useMemo(function() {
            return {
                context: a,
                popover: b,
                root: c
            }
        }, [])
    }
    ;
    c = a;
    e.exports = c
}
), null);
__d("FeedComposerCometStatusAreaClickHandler.react", ["BaseGlimmer.react", "CometComposerAttachmentPluginTypes", "CometComposerSwatchPickerUsingRelayEntrypoint.react", "CometPlaceholder.react", "CometRow.react", "CometRowItem.react", "ComposerEmojiPopoverButton.react", "React", "gkx", "requireCond", "stylex", "useCometComposerPushPage", "useCometComposerSATPConfig", "useComposerPluginIneligibility", "useGeminiComposerRichTextNodeRefs", "withComposerViewStatePart", "cr:1592679", "cr:1702031", "cr:1702032", "cr:1725551"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React"), i = (d = b("cr:1702032")) != null ? d : a;
    function a(a) {
        a = a.children;
        return a
    }
    var j = {
        insertionButtons: {
            bottom: "i09qtzwb",
            end: "qpd6qd77",
            position: "pmk7jnqg"
        },
        pressableArea: {
            cursor: "o6r2urh6",
            flexGrow: "buofh1pr",
            height: "datstx6m",
            position: "l9j0dhe7"
        },
        pressableAreaFixedWidth: {
            width: "oh7imozk"
        },
        pressableAreaVariableWidth: {
            width: "k4urcfbm"
        },
        pressableAreaWithFooterAttachment: {
            minHeight: "ss3p3tc4"
        },
        pressableAreaWithResponsiveSATP: {
            alignItems: "ll8tlv6m",
            minHeight: "qqep6wtg",
            width: "k4urcfbm"
        },
        pressableAreaWithResponsiveSATPCentered: {
            alignItems: "bp9cbjyn",
            minHeight: "qqep6wtg",
            width: "k4urcfbm"
        },
        pressableAreaWithSATP: {
            alignItems: "bp9cbjyn",
            display: "j83agx80"
        },
        root: {
            boxSizing: "rq0escxv",
            flexGrow: "buofh1pr",
            height: "df2bnetk",
            paddingEnd: "hv4rvrfc",
            paddingStart: "dati1w0a",
            position: "l9j0dhe7",
            width: "k4urcfbm",
            zIndex: "du4w35lb"
        },
        rootWithEmojiButtonFixedWidth: {
            maxWidth: "o0xt3n8b"
        },
        rootWithEmojiButtonVariableWidth: {
            paddingEnd: "ftjopcgk"
        },
        rootWithEmojiButtonVariableWidthRichTextBlockStyleMenu: {
            paddingEnd: "mop2gphu"
        },
        rootWithSwatchPicker: {
            paddingBottom: "gbhij3x4"
        },
        swatchPickerGlimmer: {
            borderTopStartRadius: "ue3kfks5",
            borderTopEndRadius: "pw54ja7n",
            borderBottomEndRadius: "uo3d90p7",
            borderBottomStartRadius: "l82x9zwi",
            height: "k7cz35w2",
            width: "bsnbvmp4"
        },
        toolbar: {
            bottom: "i09qtzwb",
            boxSizing: "rq0escxv",
            paddingEnd: "d1544ag0",
            paddingStart: "dati1w0a",
            position: "pmk7jnqg",
            start: "j9ispegn"
        },
        toolbarFixedWidth: {
            width: "mq6i96l2"
        },
        toolbarVariableWidth: {
            end: "rm21btxo"
        },
        toolbarWithSATP: {
            paddingBottom: "f10w8fjw"
        }
    };
    function c(a) {
        var c = a.children
          , d = a.hasFocus
          , e = a.hasFooterAttachment;
        e = e === void 0 ? !1 : e;
        var f = a.hasFormattedText
          , m = a.isSwatchPickerDisabled
          , n = a.isWorkAMAPost
          , o = a.showSwatchPicker;
        o = o === void 0 ? !0 : o;
        var p = a.statusAreaRef;
        a = b("gkx")("1642732") || b("gkx")("1224637");
        var q = b("useCometComposerSATPConfig")()
          , r = q.customSATPCategory
          , s = q.satpContainerIsResponsive;
        q = q.satpTextVerticalAlignment;
        var t = l()
          , u = h.useCallback(function() {
            var a = p.current;
            if (a == null)
                return;
            if (d)
                return;
            a.focusEnd()
        }, [d, p]);
        n = b("gkx")("1217157") && !n;
        r = o && !n ? h.jsx(b("CometComposerSwatchPickerUsingRelayEntrypoint.react"), {
            customSwatchCategory: r
        }) : null;
        var v = b("useGeminiComposerRichTextNodeRefs")();
        return h.jsxs("div", {
            className: (g || (g = b("stylex")))(j.pressableArea, a ? j.pressableAreaVariableWidth : j.pressableAreaFixedWidth, f && j.pressableAreaWithSATP, f && s && (q === "center" ? j.pressableAreaWithResponsiveSATPCentered : j.pressableAreaWithResponsiveSATP), o && e && j.pressableAreaWithFooterAttachment),
            onClick: u,
            role: "presentation",
            children: [h.jsx(i, {
                refs: v,
                children: h.jsx("div", {
                    className: g(j.root, t && m && (a ? j.rootWithEmojiButtonVariableWidth : j.rootWithEmojiButtonFixedWidth), b("gkx")("1702033") && (m || n) && j.rootWithEmojiButtonVariableWidthRichTextBlockStyleMenu, !m && r != null && j.rootWithSwatchPicker),
                    children: c
                })
            }), r != null ? h.jsx("div", {
                className: (g || (g = b("stylex")))(j.toolbar, a ? j.toolbarVariableWidth : j.toolbarFixedWidth, f && j.toolbarWithSATP),
                children: h.jsx(b("CometPlaceholder.react"), {
                    fallback: h.jsx(b("BaseGlimmer.react"), {
                        className: (g || (g = b("stylex")))(j.swatchPickerGlimmer),
                        index: 1
                    }),
                    children: r
                })
            }) : null, h.jsx(k, {}), b("cr:1702031") != null ? h.jsx(b("cr:1702031"), {
                refs: v
            }) : null]
        })
    }
    var k = function() {
        var a = l();
        return h.jsxs(b("CometRow.react"), {
            paddingHorizontal: 0,
            paddingVertical: 0,
            spacing: 0,
            xstyle: j.insertionButtons,
            children: [b("cr:1702031") == null && b("cr:1592679") != null ? h.jsx(b("CometRowItem.react"), {
                children: h.jsx(b("cr:1592679"), {})
            }) : null, a ? h.jsx(b("CometRowItem.react"), {
                children: h.jsx(b("ComposerEmojiPopoverButton.react"), {})
            }) : null, b("cr:1725551") != null && h.jsx(b("CometRowItem.react"), {
                children: h.jsx(b("cr:1725551"), {})
            })]
        })
    }
      , l = function() {
        var a = b("useCometComposerSATPConfig")();
        a = a.emojiPickerIsHidden;
        var c = b("useCometComposerPushPage")();
        return c != null && !a
    };
    f = b("withComposerViewStatePart")(c, function(a) {
        var c = !1
          , d = a.editorState;
        d != null && (d.__type === "plain-text" && (c = d.hasFocus),
        d.__type === "editor-state-based" && (c = d.draftEditorState.getSelection().getHasFocus()));
        d = b("useComposerPluginIneligibility")();
        d = d.has(b("CometComposerAttachmentPluginTypes").FORMATTED_TEXT);
        return {
            hasFocus: c,
            hasFormattedText: ((c = a.formattedText) == null ? void 0 : c.currentFormattedTextPreset) != null,
            isSwatchPickerDisabled: d,
            isWorkAMAPost: ((c = a.workAMAMetadata) == null ? void 0 : c.isAMA) === !0
        }
    });
    e.exports = f
}
), null);
__d("useComposerMaybePushMinutaeViewOnOpen", ["React", "useCometComposerPushMinutiaePage", "useStable"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = b("useCometComposerPushMinutiaePage")()
          , d = b("useStable")(function() {
            return c
        });
        g.useEffect(function() {
            d != null && a && d()
        }, [d, a])
    }
}
), null);
__d("FeedComposerCometToolbar.react", ["fbt", "CometComposerPushPageContext", "CometComposerSproutList.react", "CometComposerSproutListMatcher.react", "CometComposerToolbar.react", "CometPressable.react", "CometRelay", "FeedComposerFullSproutsList.react", "React", "TetraText.react", "blueVideoComposerReducer", "composerAttachmentAreaChecker", "composerAttachmentAreaReducer", "stylex", "useCometComposerPushPage", "useComposerMaybePushMinutaeViewOnOpen", "useComposerViewStateDispatcher", "useComposerViewStateReducer", "FeedComposerCometToolbar_composer.graphql"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h, i = b("React"), j = 6;
    function a(a) {
        var c = a.composer
          , d = a.composerType
          , e = a.feelingTaggerVisibleOnLoad
          , f = a.isSelfProfile
          , k = f === void 0 ? !0 : f;
        f = a.locationTaggerVisibleOnLoad;
        var l = a.onClose;
        a = a.withTaggerVisibleOnLoad;
        b("useComposerViewStateReducer")(b("composerAttachmentAreaReducer").composerAttachmentAreaReducer, b("composerAttachmentAreaChecker"));
        b("useComposerViewStateReducer")(b("blueVideoComposerReducer"));
        var m = b("useComposerViewStateDispatcher")();
        i.useEffect(function() {
            m({
                closeCometComposer: l,
                isActorAdmin: k,
                type: "blue_video_composer_init_data"
            })
        }, [m, k, l]);
        b("useComposerMaybePushMinutaeViewOnOpen")(e);
        var n = b("useCometComposerPushPage")();
        c = b("CometRelay").useFragment(h !== void 0 ? h : h = b("FeedComposerCometToolbar_composer.graphql"), c);
        e = e ? "feeling" : a ? "with_tagger" : f ? "location_tagger" : void 0;
        var o = b("CometComposerSproutListMatcher.react").CometComposerSproutListMatcher.useMatcher(c.sprouts, {
            composerType: d,
            onCloseComposer: l,
            pushedPageOnLoad: e
        })
          , p = g._("Th\u00eam v\u00e0o b\u00e0i vi\u1ebft");
        a = i.jsx(b("TetraText.react"), {
            type: "headlineEmphasized4",
            children: p
        });
        n != null ? f = i.jsx(b("CometPressable.react"), {
            label: p,
            onPress: function() {
                n(p, function(a) {
                    a = a.onReturn;
                    return i.jsx(b("CometComposerPushPageContext").Provider, {
                        value: n,
                        children: i.jsx(b("FeedComposerFullSproutsList.react"), {
                            popPage: a,
                            children: o
                        })
                    })
                })
            },
            overlayDisabled: !0,
            children: a
        }) : f = a;
        return i.jsxs(b("CometComposerToolbar.react"), {
            children: [i.jsx("div", {
                className: "scb9dxdr qt6c0cv9 dflh9lhu jb3vyjys",
                children: f
            }), i.jsx("div", {
                children: i.jsx(b("CometComposerSproutList.react"), {
                    numInlineSprouts: j,
                    sprouts: o
                })
            })]
        })
    }
}
), null);
__d("composerActivityMinutiaeTransform", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b, c) {
        if (a.activityMinutiae != null && a.activityMinutiae.objectID != null && a.activityMinutiae.activityID != null) {
            var d = a.activityMinutiae.hideAttachment === !0 ? "HIDDEN" : void 0;
            c(babelHelpers["extends"]({}, b, {
                inline_activities: [{
                    object_attachment_behavior: d,
                    object_id: a.activityMinutiae.objectID,
                    taggable_activity_id: a.activityMinutiae.activityID
                }]
            }))
        } else
            c(babelHelpers["extends"]({}, b, {
                inline_activities: []
            }))
    }
}
), null);
__d("usePushPageFromComposerPushPage", ["React", "stylex", "useCometComposerPushPage"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = b("useCometComposerPushPage")()
          , d = g.useMemo(function() {
            return c == null ? void 0 : function(b, d) {
                c(String(d == null ? void 0 : d.title), function(a) {
                    a = a.onReturn;
                    return g.jsx("div", {
                        className: "glvd648r",
                        children: g.jsx(b, {
                            onReturn: a,
                            setTitle: function() {}
                        })
                    })
                }, {
                    onClose: a,
                    withBackButton: !1,
                    withCloseButton: !0
                })
            }
        }, [c, a]);
        return d
    }
}
), null);
__d("CometDefaultPrivacyNux.react", ["fbt", "CometRelay", "React", "useCometPrivacySelectorDialog", "useCometPrivacySelectorPushView", "usePushPageFromComposerPushPage", "CometDefaultPrivacyNux_scope.graphql"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h, i = b("React");
    function a(a) {
        var c = a.onClose
          , d = a.onPrivacyChange
          , e = a.onPrivacyChangeStart;
        a = a.scopeRef;
        a = b("CometRelay").useFragment(h !== void 0 ? h : h = b("CometDefaultPrivacyNux_scope.graphql"), a);
        var f = i.useRef(!1)
          , j = b("usePushPageFromComposerPushPage")(c)
          , k = i.useCallback(function(a) {
            e && e(a)
        }, [e])
          , l = i.useCallback(function(a) {
            d && d(a)
        }, [d]);
        c = i.useMemo(function() {
            return {
                defaultPrivacySource: "DEFAULT_PRIVACY_OPT_IN_NUX",
                onPrivacyChange: l,
                onPrivacyChangeStart: k,
                pushPage: j,
                renderLocation: "COMET_DEFAULT_PRIVACY_NUX",
                tags: [],
                title: g._("Default Audience")
            }
        }, [l, k, j]);
        var m = b("useCometPrivacySelectorPushView")(a, c);
        c = b("useCometPrivacySelectorDialog")(a, {
            onPrivacyChange: l,
            onPrivacyChangeStart: k,
            renderLocation: "COMET_COMPOSER",
            tags: [],
            title: g._("Default Audience")
        });
        var n = c[0];
        i.useEffect(function() {
            if (f.current)
                return;
            f.current = !0;
            j != null && m != null ? m() : n != null && n()
        }, [n, m, j]);
        return null
    }
}
), null);
__d("composerLocationMinutiaeTransform", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b, c) {
        a.locationMinutiae != null ? c(babelHelpers["extends"]({}, b, {
            explicit_place_id: a.locationMinutiae.placeID,
            place_attachment_setting: b.place_attachment_setting === "SHOW_ATTACHMENT" ? "SHOW_ATTACHMENT" : "HIDE_ATTACHMENT"
        })) : c(babelHelpers["extends"]({}, b, {
            explicit_place_id: "0"
        }))
    }
}
), null);
__d("FeedComposerCometMentionsTypeaheadDataSource", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            a = a.compositeDataSource;
            this.$1 = !1;
            this.$2 = a
        }
        var b = a.prototype;
        b.bootstrap = function() {
            if (this.$1)
                return;
            this.$1 = !0;
            this.$2.bootstrap()
        }
        ;
        b.fetchCache = function(a) {
            return this.$2.fetchCache(a)
        }
        ;
        b.fetchNetwork = function(a) {
            return this.$2.fetchNetwork(a)
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("useFeedComposerCometMentionsTypeaheadDataSource", ["FeedComposerCometMentionsTypeaheadDataSource", "React", "useCometTypeaheadCompositeDataSource"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.bootstrapDataSource
          , d = a.limit;
        a = a.networkDataSource;
        var e = b("useCometTypeaheadCompositeDataSource")({
            bootstrapDataSource: c,
            limit: d,
            networkDataSource: a
        });
        return g.useMemo(function() {
            return new (b("FeedComposerCometMentionsTypeaheadDataSource"))({
                compositeDataSource: e
            })
        }, [e])
    }
}
), null);
__d("BrandedContentComposerInterceptReason", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        AFFILIATE_LINK: "affiliate_link",
        CREATOR_NOT_WHITELISTED: "creator_not_whitelisted",
        SELF_DISCLOSURE_KEYWORD_BASED: "self_disclosure",
        SELF_DISCLOSURE_MODEL_DETECTED: "self_disclosure_model_detected",
        BC_DETECTED_WITH_BRAND: "bc_detected_with_brand",
        KEYWORD_BASED_BRAND_PREFILL: "keyword_based_brand_prefill",
        MODEL_DETECTED_BRAND_PREFILL: "model_detected_brand_prefill",
        I18N_MODEL_DETECTED: "i18n_model_detected",
        I18N_MODEL_BRAND_PREFILL: "i18n_model_brand_prefill"
    });
    e.exports = a
}
), null);
__d("ISOCountryCode", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        AD: "AD",
        AE: "AE",
        AF: "AF",
        AG: "AG",
        AI: "AI",
        AL: "AL",
        AM: "AM",
        AN: "AN",
        AO: "AO",
        AQ: "AQ",
        AR: "AR",
        AS: "AS",
        AT: "AT",
        AU: "AU",
        AW: "AW",
        AX: "AX",
        AZ: "AZ",
        BA: "BA",
        BB: "BB",
        BD: "BD",
        BE: "BE",
        BF: "BF",
        BG: "BG",
        BH: "BH",
        BI: "BI",
        BJ: "BJ",
        BL: "BL",
        BM: "BM",
        BN: "BN",
        BO: "BO",
        BQ: "BQ",
        BR: "BR",
        BS: "BS",
        BT: "BT",
        BV: "BV",
        BW: "BW",
        BY: "BY",
        BZ: "BZ",
        CA: "CA",
        CC: "CC",
        CD: "CD",
        CF: "CF",
        CG: "CG",
        CH: "CH",
        CI: "CI",
        CK: "CK",
        CL: "CL",
        CM: "CM",
        CN: "CN",
        CO: "CO",
        CR: "CR",
        CU: "CU",
        CV: "CV",
        CW: "CW",
        CX: "CX",
        CY: "CY",
        CZ: "CZ",
        DE: "DE",
        DJ: "DJ",
        DK: "DK",
        DM: "DM",
        DO: "DO",
        DZ: "DZ",
        EC: "EC",
        EE: "EE",
        EG: "EG",
        EH: "EH",
        ER: "ER",
        ES: "ES",
        ET: "ET",
        FI: "FI",
        FJ: "FJ",
        FK: "FK",
        FM: "FM",
        FO: "FO",
        FR: "FR",
        GA: "GA",
        GB: "GB",
        GD: "GD",
        GE: "GE",
        GF: "GF",
        GG: "GG",
        GH: "GH",
        GI: "GI",
        GL: "GL",
        GM: "GM",
        GN: "GN",
        GP: "GP",
        GQ: "GQ",
        GR: "GR",
        GS: "GS",
        GT: "GT",
        GU: "GU",
        GW: "GW",
        GY: "GY",
        HK: "HK",
        HM: "HM",
        HN: "HN",
        HR: "HR",
        HT: "HT",
        HU: "HU",
        ID: "ID",
        IE: "IE",
        IL: "IL",
        IM: "IM",
        IN: "IN",
        IO: "IO",
        IQ: "IQ",
        IR: "IR",
        IS: "IS",
        IT: "IT",
        JE: "JE",
        JM: "JM",
        JO: "JO",
        JP: "JP",
        KE: "KE",
        KG: "KG",
        KH: "KH",
        KI: "KI",
        KM: "KM",
        KN: "KN",
        KP: "KP",
        KR: "KR",
        KW: "KW",
        KY: "KY",
        KZ: "KZ",
        LA: "LA",
        LB: "LB",
        LC: "LC",
        LI: "LI",
        LK: "LK",
        LR: "LR",
        LS: "LS",
        LT: "LT",
        LU: "LU",
        LV: "LV",
        LY: "LY",
        MA: "MA",
        MC: "MC",
        MD: "MD",
        ME: "ME",
        MF: "MF",
        MG: "MG",
        MH: "MH",
        MK: "MK",
        ML: "ML",
        MM: "MM",
        MN: "MN",
        MO: "MO",
        MP: "MP",
        MQ: "MQ",
        MR: "MR",
        MS: "MS",
        MT: "MT",
        MU: "MU",
        MV: "MV",
        MW: "MW",
        MX: "MX",
        MY: "MY",
        MZ: "MZ",
        NA: "NA",
        NC: "NC",
        NE: "NE",
        NF: "NF",
        NG: "NG",
        NI: "NI",
        NL: "NL",
        NO: "NO",
        NP: "NP",
        NR: "NR",
        NU: "NU",
        NZ: "NZ",
        OM: "OM",
        PA: "PA",
        PE: "PE",
        PF: "PF",
        PG: "PG",
        PH: "PH",
        PK: "PK",
        PL: "PL",
        PM: "PM",
        PN: "PN",
        PR: "PR",
        PS: "PS",
        PT: "PT",
        PW: "PW",
        PY: "PY",
        QA: "QA",
        RE: "RE",
        RO: "RO",
        RS: "RS",
        RU: "RU",
        RW: "RW",
        SA: "SA",
        SB: "SB",
        SC: "SC",
        SD: "SD",
        SE: "SE",
        SG: "SG",
        SH: "SH",
        SI: "SI",
        SJ: "SJ",
        SK: "SK",
        SL: "SL",
        SM: "SM",
        SN: "SN",
        SO: "SO",
        SR: "SR",
        SS: "SS",
        ST: "ST",
        SV: "SV",
        SX: "SX",
        SY: "SY",
        SZ: "SZ",
        TC: "TC",
        TD: "TD",
        TF: "TF",
        TG: "TG",
        TH: "TH",
        TJ: "TJ",
        TK: "TK",
        TL: "TL",
        TM: "TM",
        TN: "TN",
        TO: "TO",
        TR: "TR",
        TT: "TT",
        TV: "TV",
        TW: "TW",
        TZ: "TZ",
        UA: "UA",
        UG: "UG",
        UM: "UM",
        US: "US",
        UY: "UY",
        UZ: "UZ",
        VA: "VA",
        VC: "VC",
        VE: "VE",
        VG: "VG",
        VI: "VI",
        VN: "VN",
        VU: "VU",
        WF: "WF",
        WS: "WS",
        XK: "XK",
        YE: "YE",
        YT: "YT",
        ZA: "ZA",
        ZM: "ZM",
        ZW: "ZW"
    });
    e.exports = a
}
), null);
__d("composerBrandedContentTransform", ["BrandedContentComposerInterceptReason", "ISOCountryCode", "castToEnum", "enumUtils", "filterNulls", "orEmptyArray"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c, d) {
        var e, f;
        e = b("filterNulls")(b("orEmptyArray")((e = a.targetedPrivacyData) == null ? void 0 : (e = e.geo_locations) == null ? void 0 : e.countries).map(function(a) {
            return b("castToEnum")(a, b("ISOCountryCode"), void 0)
        }));
        e = {
            countries: e,
            min_age: (e = a.targetedPrivacyData) == null ? void 0 : e.age_min,
            region_ids: []
        };
        f = (f = a.brandedContent) == null ? void 0 : f.enforcementInterceptReason;
        f = f != null ? b("enumUtils").enumValueToKey(f, b("BrandedContentComposerInterceptReason")) : null;
        if (a.brandedContent != null) {
            var g, h = a.brandedContent.sponsorCanBoost === !0 ? "ALL_SHARED" : "NOT_SHARED";
            g = (g = a.brandedContent.sponsorRelationship) != null ? g : "PAID_RELATIONSHIP_WITH";
            e = babelHelpers["extends"]({}, c, {
                branded_content_data: {
                    composer_intercept_event: a.brandedContent.enforcementInterceptEvent,
                    composer_intercept_reason: f,
                    event_location: a.brandedContent.eventLocation,
                    funnel_session_id: a.brandedContent.funnelSessionID,
                    geo_age_gates: [e],
                    tagging_data: {
                        bcmp_campaign_agreement_id: a.brandedContent.bcmpCampaignAgreementID,
                        can_sponsor_add_cta: (f = a.brandedContent.sponsorCanAddCTA) != null ? f : !1,
                        shared_to_sponsor_status: h,
                        sponsor_page_id: a.brandedContent.sponsorID,
                        sponsor_relationship: g
                    }
                },
                direct_share_status: h,
                sponsor_id: a.brandedContent.sponsorID,
                sponsor_relationship: g
            });
            a.brandedContent.isReviewable === !0 && (e = babelHelpers["extends"]({}, e, {
                unpublished_content_data: {
                    unpublished_content_type: "REVIEWABLE_BRANDED_CONTENT"
                }
            }));
            d(e)
        } else
            d(c)
    }
}
), null);
__d("AddCollaborativePostInitialContributionCaptionFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1742890");
    c = b("FalcoLoggerInternal").create("add_collaborative_post_initial_contribution_caption", a);
    e.exports = c
}
), null);
__d("AddInitialContributionMediaFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1742891");
    c = b("FalcoLoggerInternal").create("add_initial_contribution_media", a);
    e.exports = c
}
), null);
__d("ClickCollaborativePostSentenceFragmentFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743360");
    c = b("FalcoLoggerInternal").create("click_collaborative_post_sentence_fragment", a);
    e.exports = c
}
), null);
__d("ClickDoneInCollaborativePostCreationFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743361");
    c = b("FalcoLoggerInternal").create("click_done_in_collaborative_post_creation", a);
    e.exports = c
}
), null);
__d("ComposerCollaborativePostAddPromptTextFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743445");
    c = b("FalcoLoggerInternal").create("composer_collaborative_post_add_prompt_text", a);
    e.exports = c
}
), null);
__d("ComposerCollaborativePostChangeBackgroundColorFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743446");
    c = b("FalcoLoggerInternal").create("composer_collaborative_post_change_background_color", a);
    e.exports = c
}
), null);
__d("ComposerCollaborativePostClickNextFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743447");
    c = b("FalcoLoggerInternal").create("composer_collaborative_post_click_next", a);
    e.exports = c
}
), null);
__d("ComposerCollaborativePostTapResponseCardFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743448");
    c = b("FalcoLoggerInternal").create("composer_collaborative_post_tap_response_card", a);
    e.exports = c
}
), null);
__d("EditCollaborativePostAttachmentFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743584");
    c = b("FalcoLoggerInternal").create("edit_collaborative_post_attachment", a);
    e.exports = c
}
), null);
__d("ExitCollaborativePostCreationFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743604");
    c = b("FalcoLoggerInternal").create("exit_collaborative_post_creation", a);
    e.exports = c
}
), null);
__d("PromptTextExceedsCharLimitFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744238");
    c = b("FalcoLoggerInternal").create("prompt_text_exceeds_char_limit", a);
    e.exports = c
}
), null);
__d("RemoveCollaborativePostAttachmentFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744258");
    c = b("FalcoLoggerInternal").create("remove_collaborative_post_attachment", a);
    e.exports = c
}
), null);
__d("RemoveCollaborativePostInitialContributionFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744259");
    c = b("FalcoLoggerInternal").create("remove_collaborative_post_initial_contribution", a);
    e.exports = c
}
), null);
__d("ViewCollaborativePostSentenceFragmentSheetFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744475");
    c = b("FalcoLoggerInternal").create("view_collaborative_post_sentence_fragment_sheet", a);
    e.exports = c
}
), null);
__d("cometComposerQuiltsCreationLogger", ["AddCollaborativePostInitialContributionCaptionFalcoEvent", "AddInitialContributionMediaFalcoEvent", "ClickCollaborativePostSentenceFragmentFalcoEvent", "ClickDoneInCollaborativePostCreationFalcoEvent", "ComposerCollaborativePostAddPromptTextFalcoEvent", "ComposerCollaborativePostChangeBackgroundColorFalcoEvent", "ComposerCollaborativePostClickNextFalcoEvent", "ComposerCollaborativePostTapResponseCardFalcoEvent", "EditCollaborativePostAttachmentFalcoEvent", "ExitCollaborativePostCreationFalcoEvent", "PromptTextExceedsCharLimitFalcoEvent", "RemoveCollaborativePostAttachmentFalcoEvent", "RemoveCollaborativePostInitialContributionFalcoEvent", "TCometComposerTarget", "ViewCollaborativePostSentenceFragmentSheetFalcoEvent", "recoverableViolation"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = "sprout";
    function a(a, c, d) {
        switch (a.type) {
        case "QUILTS_EDIT_ATTACHMENT":
            h(a.fields, c, d);
            break;
        case "QUILTS_ADD_PROMPT_TEXT":
            i(a.fields, c, d);
            break;
        case "QUILTS_CHANGE_BACKGROUND_COLOR":
            b("ComposerCollaborativePostChangeBackgroundColorFalcoEvent").log(function() {
                return l(a.fields, c, d)
            });
            break;
        case "QUILTS_PROMPT_PRESS_NEXT":
            b("ComposerCollaborativePostClickNextFalcoEvent").log(function() {
                return l(a.fields, c, d)
            });
            break;
        case "QUILTS_CONTRIBUTION_PRESS_MEDIA_UPLOAD":
            b("ComposerCollaborativePostTapResponseCardFalcoEvent").log(function() {
                return l(a.fields, c, d)
            });
            break;
        case "QUILTS_ADD_INITIAL_CONTRIBUTION":
            b("AddInitialContributionMediaFalcoEvent").log(function() {
                return l(a.fields, c, d)
            });
            break;
        case "QUILTS_REMOVE_INITIAL_CONTRIBUTION":
            b("RemoveCollaborativePostInitialContributionFalcoEvent").log(function() {
                return l(a.fields, c, d)
            });
            break;
        case "QUILTS_ADD_CONTRIBUTION_CAPTION":
            b("AddCollaborativePostInitialContributionCaptionFalcoEvent").log(function() {
                return l(a.fields, c, d)
            });
            break;
        case "QUILTS_CREATION_PRESS_DONE":
            j(a.fields, c, d);
            break;
        case "QUILTS_REMOVE_ATTACHMENT":
            b("RemoveCollaborativePostAttachmentFalcoEvent").log(function() {
                return l(a.fields, c, d)
            });
            break;
        case "QUILTS_EXIT_CREATION_FLOW":
            b("ExitCollaborativePostCreationFalcoEvent").log(function() {
                return l(a.fields, c, d)
            });
            break;
        case "QUILTS_PROMPT_EXCEEDS_LIMIT":
            b("PromptTextExceedsCharLimitFalcoEvent").log(function() {
                return l(a.fields, c, d)
            });
            break;
        case "QUILTS_VIEW_SENTENCE_FRAGMENTS":
            b("ViewCollaborativePostSentenceFragmentSheetFalcoEvent").log(function() {
                return l(a.fields, c, d)
            });
            break;
        case "QUILTS_CLICK_SENTENCE_FRAGMENT":
            k(a.fields, c, d);
            break;
        default:
            break
        }
    }
    function h(a, c, d) {
        b("EditCollaborativePostAttachmentFalcoEvent").log(function() {
            var b = l(a, c, d);
            return babelHelpers["extends"]({}, b, {
                source: (b = a.source) != null ? b : g
            })
        })
    }
    function i(a, c, d) {
        b("ComposerCollaborativePostAddPromptTextFalcoEvent").log(function() {
            return l(a, c, d)
        })
    }
    function j(a, c, d) {
        b("ClickDoneInCollaborativePostCreationFalcoEvent").log(function() {
            var b = l(a, c, d);
            return babelHelpers["extends"]({}, b, {
                creation_card: "response_card"
            })
        })
    }
    function k(a, c, d) {
        a.sentence_fragment == null && b("recoverableViolation")("Sentence fragment null value provided to logger on sentence fragment click", "community_collaborative"),
        b("ClickCollaborativePostSentenceFragmentFalcoEvent").log(function() {
            var b = l(a, c, d);
            return babelHelpers["extends"]({}, b, {
                sentence_fragment: (b = a.sentence_fragment) != null ? b : ""
            })
        })
    }
    function l(a, b, c) {
        return {
            creation_session_id: b,
            edit_session_id: a.edit_session_id,
            target_id: (a = (b = c.target) == null ? void 0 : b.id) != null ? a : "",
            target_type: m((b = c.target) == null ? void 0 : b.type)
        }
    }
    function m(a) {
        if (a != null)
            switch (a) {
            case b("TCometComposerTarget").ComposerTargetType.Group:
                return "group";
            case b("TCometComposerTarget").ComposerTargetType.Feed:
            case b("TCometComposerTarget").ComposerTargetType.Profile:
                return "undirected_user";
            case b("TCometComposerTarget").ComposerTargetType.Page:
                return "undirected_page";
            case b("TCometComposerTarget").ComposerTargetType.Event:
            case b("TCometComposerTarget").ComposerTargetType.Unknown:
                return null
            }
        return null
    }
}
), null);
__d("composerWoodhengeSupportTransform", ["Banzai"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = "logger:WoodhengeClientLoggerConfig";
    function a(a, c, d) {
        if (a.woodhengeCTAAdded !== !0)
            d(c);
        else {
            var e;
            b("Banzai").post(g, {
                creator_page_id: (e = a.fanFundingPromotionMetadata) == null ? void 0 : e.page_id,
                name: "funding_feed_composer_cta_attach"
            });
            d(babelHelpers["extends"]({}, c, {
                fan_funding_promotion_metadata: a.fanFundingPromotionMetadata
            }))
        }
    }
}
), null);
