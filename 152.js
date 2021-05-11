if (self.CavalryLogger) {
    CavalryLogger.start_js(["aXM7b"]);
}

__d("PrivacyConst", [], (function(a, b, c, d, e, f) {
    e.exports = {
        BaseValue: {
            FRIENDS_AND_MUTUAL_GAME_PLAYERS: 200,
            FRIEND_LIST: 129,
            FRIENDS_PLUS_GAMER_FRIENDS: 128,
            FRIENDS_MINUS_ACQUAINTANCES: 127,
            FACEBOOK_EMPLOYEES: 112,
            FACEBOOK_EMPLOYEE_DOGFOODING: 113,
            CUSTOM: 111,
            EVERYONE: 80,
            NETWORKS_FRIENDS_OF_FRIENDS: 60,
            NETWORKS_FRIENDS: 55,
            FRIENDS_OF_FRIENDS: 50,
            ALL_FRIENDS: 40,
            SELF: 10,
            NOBODY: 0
        },
        CustomPrivacyTokens: {
            FRIENDS: 247124075410460,
            FRIENDS_OF_FRIENDS: 498125493540100,
            FRIENDS_AND_MUTUAL_GAME_PLAYERS: 280844843167017
        },
        FriendsValue: {
            FRIENDS_AND_MUTUAL_GAME_PLAYERS: 200,
            EVERYONE: 80,
            NETWORKS_FRIENDS: 55,
            FRIENDS_OF_FRIENDS: 50,
            ALL_FRIENDS: 40,
            SOME_FRIENDS: 30,
            SELF: 10,
            NO_FRIENDS: 0
        },
        PostParam: {
            EVERYONE: 300645083384735,
            NETWORKS_FRIENDS: 123780391104836,
            FRIENDS_OF_FRIENDS: 275425949243301,
            FRIENDS: 291667064279714,
            FRIENDS_MINUS_ACQUAINTANCES: 284920934947802,
            ONLY_ME: 286958161406148,
            FB_ONLY: 411331705596297,
            EVENT_PUBLIC: 1493271774218406,
            EVENT_INVITE_ONLY: 599950423437029,
            FRIENDS_AND_MUTUAL_GAME_PLAYERS: 680053436169734
        },
        PrivacyField: {
            CURRENT_COMPOSER: 8787670733,
            DEFAULT_COMPOSER: 875106179167765,
            TIMELINE_TAGGED_CONTENT_VISIBILITY: 8787530733,
            WALL_POSTS: 8787370733,
            TAG_EXPANDED_CONTENT: 8787795733,
            SEARCH_BY_PHONE: 8787815733,
            SEARCH_BY_EMAIL: 8787820733,
            CAN_FRIEND: 8787540733,
            DEPRECATED_APP_DEFAULT: 8787700733,
            SEARCH_BY_NAME: 8787755733,
            SEARCH_BY_CONTACT_INFO: 8787760733,
            SCREENNAME: 8787335733,
            CURRENT_ADDRESS: 8787355733,
            FRIENDS: 8787365733,
            WEBSITE: 8787375733,
            STATUS_UPDATES: 8787395733,
            BIRTHDAY: 8787510733,
            BIRTHYEAR: 8787805733,
            CAN_COMMENT: 8787535733,
            RELATIONSHIPS: 8787550733,
            PROFILE_PICTURE_ALBUM: 8787565733,
            DASHBOARD_ACTIVITY: 8787575733,
            FAMILY: 8787585733,
            INTERESTED_IN_LOOKING_FOR: 8787590733,
            PLACES: 8787620733,
            LANGUAGES: 8787625733,
            QUOTATIONS: 8787630733,
            ABOUT_ME: 8787635733,
            POLITICAL: 8787640733,
            RELIGIOUS: 8787645733,
            CURRENT_CITY: 8787650733,
            HOMETOWN: 8787655733,
            PROFILE_LIKES_AND_INTERESTS: 8787660733,
            BLURB: 8787665733,
            OTHER_LIKES_AND_INTERESTS: 8787680733,
            SUBSCRIBERS: 8787690733,
            SUBSCRIBED_TO: 8787695733,
            PERSONAL_CONTACT_DEFAULT: 8787765733,
            PAGE_CONTACT_DEFAULT: 8787770733,
            AUTO_GENERATED_FB_EMAIL: 8787775733,
            SKILLS: 8787780733,
            CUSTOM_GENDERS: 237760973066217,
            LOCATION_DO_NOT_WRITE_DIRECTLY: 8787785733,
            SOCIAL_ADS: 7719929599,
            PLATFORM_ADS: 126540474531,
            BASS_ADS: 183468681673909,
            ACTIVITIES: 144331422306930,
            INTERESTS: 113693108715766,
            MUSIC: 172372399483077,
            BOOKS: 100725463352700,
            GAMES: 199298603444535,
            MOVIES: 201146206594049,
            TV_SHOWS: 129665560441221,
            SPORTS_PLAYED: 129991670408857,
            FAVORITE_TEAMS: 225288534151802,
            FAVORITE_ATHLETES: 203380763033334,
            PEOPLE_I_ADMIRE: 210380795648667,
            FAVORITE_FOODS: 585935528106425,
            FAVORITE_RESTAURANTS: 172588449584647,
            FAVORITE_WEBSITES: 180412195459106,
            CLOTHING_BRANDS: 397391233714082,
            LAST_POST_PRIVACY: 314763985364212,
            SECOND_TO_LAST_POST_PRIVACY: 321179124722698,
            PREVIOUS_SECONDARY_COMPOSER: 864562253561430,
            RECENT_COMPOSER: 358304524327898,
            COMPOSER_CUSTOM_INCLUSION: 1067668039947624,
            COMPOSER_CUSTOM_EXCLUSION: 1082068668536535,
            NOW_COMPOSER: 421290164697736,
            BACKSTAGE_PRIVACY: 809506612451171,
            FACEREC_ENROLLMENT: 1709697052669794,
            DEVICE_PHOTO_PROCESSING: 1798505450455620,
            SPACES_VR_OFFLINE_VISIT_PRIVACY: 351913698615451,
            RESHARES_ON_TIMELINE_VISIBILITY: 230094651068076,
            CAN_POST_TRIBUTES: 298481070877996,
            CAN_SEE_TRIBUTE_POSTS: 1909416226028186,
            TRIBUTES_TAGGED_CONTENT_VISIBILITY: 322268258473567,
            RESHARE_TO_STORIES: 282421212606762,
            RESHARE_STORY_TO_STORIES: 855792411486922,
            REPLIES_TO_STORIES: 1362036977298100,
            EVENT_RESPONSE: 316303542562773,
            COLLECTIONS_STICKY_PRIVACY: 1032905720391450,
            EXAMPLE: 621736848675997
        },
        TagExpansion: {
            NONE: 0,
            TAGGEES: 1,
            FRIENDS_OF_TAGGEES: 2,
            FRIENDS_TAGGED: 6
        },
        ExpansionType: {
            NONE: 0,
            TAGS_ONLY: 1
        }
    }
}
), null);
__d("ConditionClassOnVisible", ["CSS", "Run", "intersectionObserverEntryIsIntersecting", "observeIntersection"], (function(a, b, c, d, e, f) {
    "use strict";
    f.track = a;
    function a(a, c, d) {
        var e = b("observeIntersection")(a, function(a) {
            b("CSS").conditionClass(a.target, c, d === b("intersectionObserverEntryIsIntersecting")(a))
        });
        b("Run").onLeave(function() {
            e.remove()
        })
    }
}
), null);
__d("PrivacySelectorNewDispatcher", ["Dispatcher_DEPRECATED"], (function(a, b, c, d, e, f) {
    var g = "selector";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.handleUpdateFromSelector = function(a) {
            this.dispatch(babelHelpers["extends"]({
                payloadSource: g
            }, a))
        }
        ;
        return b
    }(b("Dispatcher_DEPRECATED"));
    c = new a();
    d = c;
    e.exports = d
}
), null);
__d("TimeRanges", ["invariant"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a(a) {
            this.$1 = [],
            this.$1 = a
        }
        var b = a.prototype;
        b.start = function(a) {
            this.$1[a] || g(0, 2205);
            return this.$1[a].startTime
        }
        ;
        b.end = function(a) {
            this.$1[a] || g(0, 2205);
            return this.$1[a].endTime
        }
        ;
        b.length = function() {
            return this.$1.length
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("MosUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.getQualityLabel = g;
    f.getMosValue = h;
    f.parsePlaybackMos = a;
    f.filterTracksWithExpensiveMos = b;
    function g(a, b) {
        if (a === 0 || b === 0)
            return 0;
        if (a < b) {
            var c = a;
            a = b;
            b = c
        }
        c = a / b;
        return c > 16 / 9 ? Math.round(a / (16 / 9)) : b
    }
    function h(a, b) {
        var c = null
          , d = null
          , e = null
          , f = null;
        for (var g = 0; g < a.length; g++) {
            var h = a[g].qualityLabel;
            if (h <= b)
                e = a[g].mosValue,
                c = h;
            else {
                f = a[g].mosValue;
                d = h;
                break
            }
        }
        if (c === null && d === null)
            return 0;
        else if (c === null && f !== null)
            return f;
        else if (d === null && e !== null)
            return e;
        else if (f !== null && e !== null && c !== null && d !== null) {
            h = e + (b - c) * (f - e) / (d - c);
            return h < 0 ? 0 : h > 100 ? 100 : h
        }
        return 0
    }
    function a(a) {
        a = a.split(",");
        var b = [];
        for (var c = 0; c < a.length; c++) {
            var d = a[c].split(":");
            if (d.length !== 2)
                return null;
            var e = Number(d[0]);
            d = Number(d[1]);
            if (isNaN(e) || isNaN(d))
                return null;
            b.push({
                qualityLabel: e,
                mosValue: d
            })
        }
        return b
    }
    function b(a, b, c, d, e, f) {
        if (a.length < 2)
            return a;
        var i = a.map(function(a) {
            return {
                track: a,
                mosValue: a.playbackResolutionMos ? h(a.playbackResolutionMos, g(b, c)) : -1
            }
        })
          , j = []
          , k = e;
        for (var l = i.length - 1; l > 0; l--) {
            if (i[l].mosValue === -1 || i[l - 1].mosValue === -1)
                return a;
            var m = i[l].track.bandwidth || -1
              , n = i[l - 1].track.bandwidth || -1;
            if (m === -1 || n === -1)
                return a;
            if (i[l].mosValue < i[l - 1].mosValue && m >= n)
                continue;
            m = i[l - 1].track.bandwidth !== null ? i[l].mosValue - i[l - 1].mosValue : Infinity;
            if (m <= k && i[l].track.bandwidth && d / i[l].track.bandwidth <= f) {
                k -= m;
                continue
            } else
                k = e;
            j.push(i[l].track)
        }
        j.push(i[0].track);
        j.reverse();
        return j
    }
}
), null);
__d("VideoPlayerConnectionQuality", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {
        POOR: "POOR",
        MODERATE: "MODERATE",
        GOOD: "GOOD",
        EXCELLENT: "EXCELLENT"
    }
      , h = [{
        bandwidth: 5e5,
        connectionQuality: g.POOR
    }, {
        bandwidth: 2e6,
        connectionQuality: g.MODERATE
    }, {
        bandwidth: 1e7,
        connectionQuality: g.GOOD
    }]
      , i = 100
      , j = null
      , k = null;
    a = function(a) {
        if (j !== null && k !== null && j >= Date.now() - i)
            return k;
        a = a();
        var b = null;
        if (a != null)
            for (var c = 0; c < h.length; c++)
                if (a < h[c].bandwidth) {
                    b = h[c].connectionQuality;
                    break
                }
        b === null && (b = g.EXCELLENT);
        j = Date.now();
        k = b;
        return b
    }
    ;
    f.evaluate = a
}
), null);
__d("MarauderLogger", ["Banzai", "CacheStorage", "MarauderConfig"], (function(a, b, c, d, e, f) {
    var g = "client_event", h = "navigation", i = 18e4, j = "marauder", k = "marauder_last_event_time", l = "marauder_last_session_id", m = {}, n = [], o = !1, p = null, q = null, r = null, s = 0, t, u, v = !1, w = null;
    function a() {
        F().set(k, x())
    }
    b("Banzai").subscribe(b("Banzai").SHUTDOWN, a);
    function x() {
        t = t || F().get(k) || 0;
        return t
    }
    function y() {
        v || (u = F().get(l),
        v = !0);
        var a = Date.now();
        (!u || a - i > x()) && (u = a.toString(16) + "-" + (~~(Math.random() * 16777215)).toString(16),
        F().set(l, u));
        return u
    }
    function z() {
        return {
            user_agent: window.navigator.userAgent,
            screen_height: window.screen.availHeight,
            screen_width: window.screen.availWidth,
            density: window.screen.devicePixelRatio || null,
            platform: window.navigator.platform || null,
            locale: window.navigator.language || null
        }
    }
    function A() {
        return {
            locale: navigator.language
        }
    }
    function B(a, b, c, d, e, f, g) {
        var h = g != null && g != 0 ? g : Date.now();
        t = g != null && g != 0 ? Date.now() : h;
        g = b != null && b != "" ? b : p;
        return {
            name: a,
            time: h / 1e3,
            module: g,
            obj_type: d,
            obj_id: e,
            uuid: f,
            extra: c
        }
    }
    function C(a, b, c) {
        return B("content", null, {
            flags: b
        }, null, null, a, c)
    }
    function D(a) {
        var b = window.__mrdr;
        if (b)
            for (var c in b) {
                var d = b[c];
                if (d[3] !== 0) {
                    delete b[c];
                    if (c === "1")
                        if (r !== null)
                            c = r;
                        else
                            continue;
                    a.push(C(c, 1, d[1]));
                    a.push(C(c, 2, d[2]));
                    a.push(C(c, 3, d[3]))
                }
            }
    }
    function E(a, c) {
        D(a);
        if (a.length === 0)
            return;
        o && a.push(B("counters", null, m));
        var d = b("Banzai").BASIC;
        c === "vital" && (d = b("Banzai").VITAL);
        var e = b("MarauderConfig").gk_enabled;
        s === 0 && e && (a.push(B("device_status", null, A())),
        d = {
            delay: 5e3
        });
        c === "signal" && (d = {
            signal: !0
        });
        e && Math.random() < .01 && a.push(B("device_info", null, z()));
        if (r !== null)
            for (var c = 0; c < a.length; c++) {
                e = a[c];
                (e.uuid === null || e.uuid === void 0) && (e.uuid = r)
            }
        e = {
            app_ver: b("MarauderConfig").app_version,
            data: a,
            device_id: void 0,
            log_type: g,
            seq: s++,
            session_id: y()
        };
        c = F().get("device_id");
        c && (e.device_id = c);
        m = {};
        o = !1;
        b("Banzai").post(j, e, d)
    }
    function F() {
        w || (w = new (b("CacheStorage"))("localstorage",""));
        return w
    }
    function c(a) {
        m[a] || (m[a] = 0),
        m[a]++,
        o = !0
    }
    function G(b, a, c, d, f, g, h, i) {
        E([B(b, a, c, d, f, g, h)], i)
    }
    function H(a, b) {
        p !== b && (n.push(B(h, p, {
            dest_module: b,
            source_url: q,
            destination_url: a
        })),
        p = b,
        q = a)
    }
    function d(a, b) {
        p !== b && (r = null,
        H(a, b))
    }
    function f(a, b, c) {
        G(b ? "show_module" : "hide_module", a, c)
    }
    function I(a) {
        p = a
    }
    function J() {
        return p
    }
    function K(a) {
        r === null && (r = a,
        a !== null && (E(n),
        n = []))
    }
    e.exports = {
        count: c,
        log: G,
        navigateTo: d,
        navigateWithinSession: H,
        toggleModule: f,
        setUUID: K,
        setNavigationModule: I,
        getNavigationModule: J
    }
}
), null);
__d("HTMLMediaElementReadyStates", [], (function(a, b, c, d, e, f) {
    a = {
        HAVE_NOTHING: 0,
        HAVE_METADATA: 1,
        HAVE_CURRENT_DATA: 2,
        HAVE_FUTURE_DATA: 3,
        HAVE_ENOUGH_DATA: 4
    };
    b = a;
    e.exports = b
}
), null);
__d("XPrivacyCustomDialogController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/privacy/custom_dialog/", {
        id: {
            type: "String",
            required: !0
        },
        option_id: {
            type: "String",
            required: !0
        },
        autosave: {
            type: "Bool",
            defaultValue: !1
        },
        explain_tags: {
            type: "Bool",
            defaultValue: !1
        },
        limit_community: {
            type: "Bool",
            defaultValue: !1
        },
        limit_facebook: {
            type: "Bool",
            defaultValue: !1
        },
        limit_fof: {
            type: "Bool",
            defaultValue: !1
        },
        limit_tagexpand: {
            type: "Bool",
            defaultValue: !1
        },
        is_new_privacy_selector: {
            type: "Bool",
            defaultValue: !1
        },
        render_location_enum: {
            type: "Enum",
            enumType: 1
        },
        content_type: {
            type: "String"
        },
        post_param: {
            type: "String"
        },
        privacy_data: {
            type: "String"
        },
        source: {
            type: "String"
        },
        tags: {
            type: "IntVector"
        },
        saved_custom_opt_in: {
            type: "Bool",
            defaultValue: !1
        },
        __asyncDialog: {
            type: "Int"
        }
    })
}
), null);
