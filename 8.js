if (self.CavalryLogger) {
    CavalryLogger.start_js(["t+yuc"]);
}

__d("MessageSharedMediaIDStore.bs", ["bs_js_dict"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {};
    function a(a, b) {
        g[a] = b;
        return 0
    }
    function c(a) {
        a = b("bs_js_dict").get(g, a);
        if (a !== void 0)
            return a;
        else
            return null
    }
    f._store = g;
    f.setMessageIDForAttachmentID = a;
    f.getMessageIDForAttachmentID = c
}
), null);
__d("MessageUnsendabilityStatus.bs", ["MessageUnsendabilityStatus"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        if (a == null)
            return null;
        else
            switch (a) {
            case "can_unsend":
                return b("MessageUnsendabilityStatus").CAN_UNSEND;
            case "deny_blob_attachment":
                return b("MessageUnsendabilityStatus").DENY_BLOB_ATTACHMENT;
            case "deny_for_non_sender":
                return b("MessageUnsendabilityStatus").DENY_FOR_NON_SENDER;
            case "deny_log_message":
                return b("MessageUnsendabilityStatus").DENY_LOG_MESSAGE;
            case "deny_p2p_payment":
                return b("MessageUnsendabilityStatus").DENY_P2P_PAYMENT;
            case "deny_story_reaction":
                return b("MessageUnsendabilityStatus").DENY_STORY_REACTION;
            case "deny_tombstone_message":
                return b("MessageUnsendabilityStatus").DENY_TOMBSTONE_MESSAGE;
            default:
                return null
            }
    }
    f.fromNullableString = a
}
), null);
__d("MercuryAttachmentContentType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        PHOTO: "attach:image",
        VIDEO: "attach:video",
        MUSIC: "attach:music",
        VOICE: "attach:voice",
        TEXT: "attach:text",
        PDF: "attach:pdf",
        RICHTEXT: "attach:richtext",
        SPREADSHEET: "attach:spreadsheet",
        PRESENTATION: "attach:presentation",
        ARCHIVE: "attach:archive",
        MSWORD: "attach:ms:word",
        MSXLS: "attach:ms:xls",
        MSPPT: "attach:ms:ppt",
        ORION: "attach:orion",
        SHOERACK_INVITATION: "attach:shoerackinvite",
        UNKNOWN: "attach:unknown"
    });
    e.exports = a
}
), null);
__d("MercuryAttachmentType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        AUDIO: "audio",
        ERROR: "error",
        FILE: "file",
        PHOTO: "photo",
        STICKER: "sticker",
        SHARE: "share",
        UNKNOWN: "unknown",
        VIDEO: "video",
        ANIMATED_IMAGE: "animated_image",
        EMOJI_LIKE: "emoji_like",
        GIFT: "gift",
        THIRDPARTYSTICKER: "third_party_sticker"
    });
    e.exports = a
}
), null);
__d("FundsAvailability", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        NONE: 0,
        FUNDS_AVAILABILITY_NA: 65,
        FUNDS_AVAILABILITY_IMMEDIATE: 73,
        FUNDS_AVAILABILITY_SAME_DAY: 83,
        FUNDS_AVAILABILITY_NEXT_DAY: 78,
        FUNDS_AVAILABILITY_TWO_DAY: 80,
        FUNDS_AVAILABILITY_FIVE_DAY: 70,
        FUNDS_AVAILABILITY_UNKNOWN: 85,
        FUNDS_AVAILABILITY_ONE_THREE_DAY: 79,
        FUNDS_AVAILABILITY_CROSS_BORDER: 66,
        FUNDS_AVAILABILITY_CROSS_BORDER_FAST_FUNDS: 67,
        FUNDS_AVAILABILITY_DOMESTIC: 68,
        FUNDS_AVAILABILITY_DOMESTIC_FAST_FUNDS: 69
    })
}
), null);
__d("LeadGenInfoFieldTypes", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        CUSTOM: "CUSTOM",
        CITY: "CITY",
        COMPANY_NAME: "COMPANY_NAME",
        COUNTRY: "COUNTRY",
        DOB: "DOB",
        EMAIL: "EMAIL",
        GENDER: "GENDER",
        FIRST_NAME: "FIRST_NAME",
        FULL_ADDRESS: "FULL_ADDRESS",
        FULL_NAME: "FULL_NAME",
        JOB_TITLE: "JOB_TITLE",
        LAST_NAME: "LAST_NAME",
        MARITIAL_STATUS: "MARITIAL_STATUS",
        PHONE: "PHONE",
        POST_CODE: "POST_CODE",
        PROVINCE: "PROVINCE",
        RELATIONSHIP_STATUS: "RELATIONSHIP_STATUS",
        STATE: "STATE",
        STREET_ADDRESS: "STREET_ADDRESS",
        ZIP: "ZIP",
        WORK_EMAIL: "WORK_EMAIL",
        MILITARY_STATUS: "MILITARY_STATUS",
        WORK_PHONE_NUMBER: "WORK_PHONE_NUMBER",
        STORE_LOOKUP: "STORE_LOOKUP",
        STORE_LOOKUP_WITH_TYPEAHEAD: "STORE_LOOKUP_WITH_TYPEAHEAD",
        DATE_TIME: "DATE_TIME",
        ID_CPF: "ID_CPF",
        ID_AR_DNI: "ID_AR_DNI",
        ID_CL_RUT: "ID_CL_RUT",
        ID_CO_CC: "ID_CO_CC",
        ID_EC_CI: "ID_EC_CI",
        ID_PE_DNI: "ID_PE_DNI",
        ID_MX_RFC: "ID_MX_RFC"
    });
    e.exports = a
}
), null);
__d("MNCommerceBubbleType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        FB_RETAIL_RECEIPT: 1,
        FB_RETAIL_CANCELLATION: 2,
        FB_RETAIL_SHIPMENT: 3,
        FB_RETAIL_SHIPMENT_TRACKING_EVENT_ETA: 4,
        FB_RETAIL_SHIPMENT_TRACKING_EVENT_IN_TRANSIT: 5,
        FB_RETAIL_SHIPMENT_TRACKING_EVENT_OUT_FOR_DELIVERY: 6,
        FB_RETAIL_SHIPMENT_TRACKING_EVENT_DELAYED: 7,
        FB_RETAIL_SHIPMENT_TRACKING_EVENT_DELIVERED: 8,
        FB_RETAIL_SHIPMENT_FOR_UNSUPPORTED_CARRIER: 9,
        FB_RETAIL_SHIPMENT_ETA: 10,
        FB_RETAIL_NOW_IN_STOCK: 11,
        FB_RETAIL_AGENT_ITEM_SUGGESTION: 12,
        FB_RETAIL_AGENT_ITEM_RECEIPT: 13,
        FB_RETAIL_PROMOTIONAL_MSG: 14
    });
    e.exports = a
}
), null);
__d("MNCommerceCallToActionType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        OPEN_NATIVE: 1,
        OPEN_URL: 2,
        POSTBACK: 4,
        ACCOUNT_LINK: 5,
        SHARE: 7,
        PAYMENT: 8,
        FACEBOOK_REPORT_A_PROBLEM: 9,
        NAVIGATION: 11,
        EXTENSIBLE_SHARE: 12,
        OPEN_PAGE_ABOUT: 14,
        OPEN_BRANDED_CAMERA: 15,
        OPEN_THREAD: 16,
        OPEN_MARKETPLACE_PROFILE_REPORT: 17,
        OPEN_DIRECT_SEND_VIEW: 18,
        BOOKING: 19,
        BOOKING_ADD_TO_CALENDAR: 20,
        ACCOUNT_UNLINK: 21,
        RATE_SELLER: 22,
        ROOMS_SPEAKEASY_INVITE: 23,
        ROOMS_SPEAKEASY_INTERESTED: 24,
        ROOMS_SPEAKEASY_EDIT: 25,
        ROOMS_SPEAKEASY_UNDO: 26,
        ROOMS_SPEAKEASY_CALLBACK: 27,
        ROOMS_SPEAKEASY_COPY_LINK: 32,
        FB_LOGIN: 28,
        FEEDBACK_SEND: 29,
        SHOPS_PDP: 30,
        OPEN_DIALOG: 31,
        SUBSCRIPTION_PRESELECT: 10,
        OPEN_REACT_NATIVE_MINI_APP: 13,
        OPEN_CANCEL_RIDE_MUTATION: 3,
        MANAGE_MESSAGES: 6
    });
    e.exports = a
}
), null);
__d("P2PPaymentRequestStatus", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        INITED: 1,
        DECLINED: 2,
        TRANSFER_INITED: 3,
        TRANSFER_COMPLETED: 4,
        TRANSFER_FAILED: 5,
        CANCELED: 6,
        EXPIRED: 7
    });
    e.exports = a
}
), null);
__d("P2PTransferStatus", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        PENDING_SENDER_MANUAL_REVIEW: 1,
        PENDING_SENDER_VERIFICATION: 2,
        CANCELED_SENDER_RISK: 3,
        PENDING_RECIPIENT_NUX: 4,
        CANCELED_DECLINED: 5,
        PENDING_RECIPIENT_VERIFICATION: 6,
        PENDING_RECIPIENT_MANUAL_REVIEW: 7,
        PENDING_RECIPIENT_PROCESSING: 8,
        PENDING_PUSH_FAIL: 9,
        CANCELED_RECIPIENT_RISK: 10,
        CANCELED_SYSTEM_FAIL: 11,
        CANCELED_EXPIRED: 12,
        COMPLETED: 13,
        INTERMEDIATE_PROCESSING: 14,
        PENDING_SENDER_INITED: 15,
        CANCELED_SAME_CARD: 16,
        PENDING_SENDER_VERIFICATION_PROCESSING: 17,
        PENDING_RECIPIENT_VERIFICATION_PROCESSING: 18,
        CANCELED_SENDER_CANCEL: 19,
        PENDING_SENDER_IDV_REVIEW: 20,
        PENDING_RECEIVER_IDV_REVIEW: 21,
        PENDING_RTS_REVIEW: 22,
        CANCELED_RTS_FAIL: 23
    });
    e.exports = a
}
), null);
__d("ServicesCalendarSyncType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        CLIENT_ONLY: "client_only",
        NO_CALENDAR_SYNC: "no_calendar_sync",
        SERVER_CONTINUOUS: "server_continuous",
        SERVER_SINGLE: "server_single"
    });
    e.exports = a
}
), null);
__d("bs_char", ["bs_caml_bytes", "bs_caml_builtin_exceptions"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        if (a < 0 || a > 255)
            throw [b("bs_caml_builtin_exceptions").invalid_argument, "Char.chr"];
        return a
    }
    function c(a) {
        var c = 0;
        if (a >= 40)
            if (a !== 92)
                c = a >= 127 ? 1 : 2;
            else
                return "\\\\";
        else if (a >= 32)
            if (a >= 39)
                return "\\'";
            else
                c = 2;
        else if (a >= 14)
            c = 1;
        else
            switch (a) {
            case 8:
                return "\\b";
            case 9:
                return "\\t";
            case 10:
                return "\\n";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 11:
            case 12:
                c = 1;
                break;
            case 13:
                return "\\r"
            }
        switch (c) {
        case 1:
            c = [0, 0, 0, 0];
            c[0] = 92;
            c[1] = 48 + (a / 100 | 0) | 0;
            c[2] = 48 + (a / 10 | 0) % 10 | 0;
            c[3] = 48 + a % 10 | 0;
            return b("bs_caml_bytes").bytes_to_string(c);
        case 2:
            c = [0];
            c[0] = a;
            return b("bs_caml_bytes").bytes_to_string(c)
        }
    }
    function d(a) {
        if (a >= 65 && a <= 90 || a >= 192 && a <= 214 || a >= 216 && a <= 222)
            return a + 32 | 0;
        else
            return a
    }
    function e(a) {
        if (a >= 97 && a <= 122 || a >= 224 && a <= 246 || a >= 248 && a <= 254)
            return a - 32 | 0;
        else
            return a
    }
    function g(a) {
        if (a >= 65 && a <= 90)
            return a + 32 | 0;
        else
            return a
    }
    function h(a) {
        if (a >= 97 && a <= 122)
            return a - 32 | 0;
        else
            return a
    }
    function i(a, b) {
        return a - b | 0
    }
    function j(a, b) {
        return (a - b | 0) === 0
    }
    f.chr = a;
    f.escaped = c;
    f.lowercase = d;
    f.uppercase = e;
    f.lowercase_ascii = g;
    f.uppercase_ascii = h;
    f.compare = i;
    f.equal = j
}
), null);
__d("bs_bytes", ["bs_char", "bs_curry", "bs_caml_bytes", "bs_caml_primitive", "bs_caml_builtin_exceptions"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, c) {
        var d = b("bs_caml_bytes").caml_create_bytes(a);
        b("bs_caml_bytes").caml_fill_bytes(d, 0, a, c);
        return d
    }
    function c(a, c) {
        var d = b("bs_caml_bytes").caml_create_bytes(a);
        for (var e = 0, a = a - 1 | 0; e <= a; ++e)
            d[e] = b("bs_curry")._1(c, e);
        return d
    }
    var g = [];
    function h(a) {
        var c = a.length
          , d = b("bs_caml_bytes").caml_create_bytes(c);
        b("bs_caml_bytes").caml_blit_bytes(a, 0, d, 0, c);
        return d
    }
    function d(a) {
        return b("bs_caml_bytes").bytes_to_string(h(a))
    }
    function e(a) {
        return h(b("bs_caml_bytes").bytes_of_string(a))
    }
    function i(a, c, d) {
        if (c < 0 || d < 0 || c > (a.length - d | 0))
            throw [b("bs_caml_builtin_exceptions").invalid_argument, "String.sub / Bytes.sub"];
        var e = b("bs_caml_bytes").caml_create_bytes(d);
        b("bs_caml_bytes").caml_blit_bytes(a, c, e, 0, d);
        return e
    }
    function j(a, c, d) {
        return b("bs_caml_bytes").bytes_to_string(i(a, c, d))
    }
    function k(a, c) {
        var d = a + c | 0;
        a = a < 0;
        c = c < 0;
        var e = d < 0;
        if (a)
            if (c && !e)
                throw [b("bs_caml_builtin_exceptions").invalid_argument, "Bytes.extend"];
            else
                return d;
        else if (c)
            return d;
        else {
            if (e)
                throw [b("bs_caml_builtin_exceptions").invalid_argument, "Bytes.extend"];
            return d
        }
    }
    function l(a, c, d) {
        d = k(k(a.length, c), d);
        var e = b("bs_caml_bytes").caml_create_bytes(d);
        c = c < 0 ? [-c | 0, 0] : [0, c];
        var f = c[1];
        c = c[0];
        d = b("bs_caml_primitive").caml_int_min(a.length - c | 0, d - f | 0);
        d > 0 && b("bs_caml_bytes").caml_blit_bytes(a, c, e, f, d);
        return e
    }
    function m(a, c, d, e) {
        if (c < 0 || d < 0 || c > (a.length - d | 0))
            throw [b("bs_caml_builtin_exceptions").invalid_argument, "String.fill / Bytes.fill"];
        return b("bs_caml_bytes").caml_fill_bytes(a, c, d, e)
    }
    function n(a, c, d, e, f) {
        if (f < 0 || c < 0 || c > (a.length - f | 0) || e < 0 || e > (d.length - f | 0))
            throw [b("bs_caml_builtin_exceptions").invalid_argument, "Bytes.blit"];
        return b("bs_caml_bytes").caml_blit_bytes(a, c, d, e, f)
    }
    function o(a, c, d, e, f) {
        if (f < 0 || c < 0 || c > (a.length - f | 0) || e < 0 || e > (d.length - f | 0))
            throw [b("bs_caml_builtin_exceptions").invalid_argument, "String.blit / Bytes.blit_string"];
        return b("bs_caml_bytes").caml_blit_string(a, c, d, e, f)
    }
    function p(a, c) {
        for (var d = 0, e = c.length - 1 | 0; d <= e; ++d)
            b("bs_curry")._1(a, c[d]);
        return 0
    }
    function q(a, c) {
        for (var d = 0, e = c.length - 1 | 0; d <= e; ++d)
            b("bs_curry")._2(a, d, c[d]);
        return 0
    }
    function r(a, c) {
        if (a >= c)
            return a;
        else
            throw [b("bs_caml_builtin_exceptions").invalid_argument, "Bytes.concat"]
    }
    function s(a, b, c) {
        while (!0) {
            var d = c
              , e = a;
            if (d) {
                var f = d[1];
                d = d[0];
                if (f) {
                    c = f;
                    a = r((d.length + b | 0) + e | 0, e);
                    continue
                } else
                    return d.length + e | 0
            } else
                return e
        }
    }
    function t(a, c) {
        if (c) {
            var d = a.length
              , e = b("bs_caml_bytes").caml_create_bytes(s(0, d, c))
              , f = 0;
            a = a;
            d = d;
            c = c;
            while (!0) {
                var h = c
                  , i = f;
                if (h) {
                    var j = h[1];
                    h = h[0];
                    if (j) {
                        b("bs_caml_bytes").caml_blit_bytes(h, 0, e, i, h.length);
                        b("bs_caml_bytes").caml_blit_bytes(a, 0, e, i + h.length | 0, d);
                        c = j;
                        f = (i + h.length | 0) + d | 0;
                        continue
                    } else {
                        b("bs_caml_bytes").caml_blit_bytes(h, 0, e, i, h.length);
                        return e
                    }
                } else
                    return e
            }
        } else
            return g
    }
    function u(a, c) {
        var d = a.length
          , e = c.length
          , f = b("bs_caml_bytes").caml_create_bytes(d + e | 0);
        b("bs_caml_bytes").caml_blit_bytes(a, 0, f, 0, d);
        b("bs_caml_bytes").caml_blit_bytes(c, 0, f, d, e);
        return f
    }
    function v(a) {
        a = a - 9 | 0;
        if (a > 4 || a < 0)
            return a === 23;
        else
            return a !== 2
    }
    function w(a) {
        var b = a.length
          , c = 0;
        while (c < b && v(a[c]))
            c = c + 1 | 0;
        b = b - 1 | 0;
        while (b >= c && v(a[b]))
            b = b - 1 | 0;
        if (b >= c)
            return i(a, c, (b - c | 0) + 1 | 0);
        else
            return g
    }
    function x(a) {
        var c = 0;
        for (var d = 0, e = a.length - 1 | 0; d <= e; ++d) {
            var f = a[d];
            if (f >= 32) {
                var g = f - 34 | 0;
                g = g > 58 || g < 0 ? g >= 93 ? 4 : 1 : g > 57 || g < 1 ? 2 : 1
            } else
                g = f >= 11 ? f !== 13 ? 4 : 2 : f >= 8 ? 2 : 4;
            c = c + g | 0
        }
        if (c === a.length)
            return h(a);
        else {
            f = b("bs_caml_bytes").caml_create_bytes(c);
            c = 0;
            for (var g = 0, d = a.length - 1 | 0; g <= d; ++g) {
                e = a[g];
                var i = 0;
                if (e >= 35)
                    e !== 92 ? e >= 127 ? i = 1 : f[c] = e : i = 2;
                else if (e >= 32)
                    e >= 34 ? i = 2 : f[c] = e;
                else if (e >= 14)
                    i = 1;
                else
                    switch (e) {
                    case 8:
                        f[c] = 92;
                        c = c + 1 | 0;
                        f[c] = 98;
                        break;
                    case 9:
                        f[c] = 92;
                        c = c + 1 | 0;
                        f[c] = 116;
                        break;
                    case 10:
                        f[c] = 92;
                        c = c + 1 | 0;
                        f[c] = 110;
                        break;
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 11:
                    case 12:
                        i = 1;
                        break;
                    case 13:
                        f[c] = 92;
                        c = c + 1 | 0;
                        f[c] = 114;
                        break
                    }
                switch (i) {
                case 1:
                    f[c] = 92;
                    c = c + 1 | 0;
                    f[c] = 48 + (e / 100 | 0) | 0;
                    c = c + 1 | 0;
                    f[c] = 48 + (e / 10 | 0) % 10 | 0;
                    c = c + 1 | 0;
                    f[c] = 48 + e % 10 | 0;
                    break;
                case 2:
                    f[c] = 92;
                    c = c + 1 | 0;
                    f[c] = e;
                    break
                }
                c = c + 1 | 0
            }
            return f
        }
    }
    function y(a, c) {
        var d = c.length;
        if (d === 0)
            return c;
        else {
            var e = b("bs_caml_bytes").caml_create_bytes(d);
            for (var f = 0, d = d - 1 | 0; f <= d; ++f)
                e[f] = b("bs_curry")._1(a, c[f]);
            return e
        }
    }
    function z(a, c) {
        var d = c.length;
        if (d === 0)
            return c;
        else {
            var e = b("bs_caml_bytes").caml_create_bytes(d);
            for (var f = 0, d = d - 1 | 0; f <= d; ++f)
                e[f] = b("bs_curry")._2(a, f, c[f]);
            return e
        }
    }
    function A(a) {
        return y(b("bs_char").uppercase_ascii, a)
    }
    function B(a) {
        return y(b("bs_char").lowercase_ascii, a)
    }
    function C(a, c) {
        if (c.length === 0)
            return c;
        else {
            var d = h(c);
            d[0] = b("bs_curry")._1(a, c[0]);
            return d
        }
    }
    function D(a) {
        return C(b("bs_char").uppercase_ascii, a)
    }
    function E(a) {
        return C(b("bs_char").lowercase_ascii, a)
    }
    function F(a, c, d, e) {
        while (!0) {
            var f = d;
            if (f >= c)
                throw b("bs_caml_builtin_exceptions").not_found;
            if (a[f] === e)
                return f;
            else {
                d = f + 1 | 0;
                continue
            }
        }
    }
    function G(a, b) {
        return F(a, a.length, 0, b)
    }
    function H(a, b, c, d) {
        while (!0) {
            var e = c;
            if (e >= b)
                return;
            else if (a[e] === d)
                return e;
            else {
                c = e + 1 | 0;
                continue
            }
        }
    }
    function I(a, b) {
        return H(a, a.length, 0, b)
    }
    function J(a, c, d) {
        var e = a.length;
        if (c < 0 || c > e)
            throw [b("bs_caml_builtin_exceptions").invalid_argument, "String.index_from / Bytes.index_from"];
        return F(a, e, c, d)
    }
    function K(a, c, d) {
        var e = a.length;
        if (c < 0 || c > e)
            throw [b("bs_caml_builtin_exceptions").invalid_argument, "String.index_from_opt / Bytes.index_from_opt"];
        return H(a, e, c, d)
    }
    function L(a, c, d) {
        while (!0) {
            var e = c;
            if (e < 0)
                throw b("bs_caml_builtin_exceptions").not_found;
            if (a[e] === d)
                return e;
            else {
                c = e - 1 | 0;
                continue
            }
        }
    }
    function M(a, b) {
        return L(a, a.length - 1 | 0, b)
    }
    function N(a, c, d) {
        if (c < -1 || c >= a.length)
            throw [b("bs_caml_builtin_exceptions").invalid_argument, "String.rindex_from / Bytes.rindex_from"];
        return L(a, c, d)
    }
    function O(a, b, c) {
        while (!0) {
            var d = b;
            if (d < 0)
                return;
            else if (a[d] === c)
                return d;
            else {
                b = d - 1 | 0;
                continue
            }
        }
    }
    function P(a, b) {
        return O(a, a.length - 1 | 0, b)
    }
    function Q(a, c, d) {
        if (c < -1 || c >= a.length)
            throw [b("bs_caml_builtin_exceptions").invalid_argument, "String.rindex_from_opt / Bytes.rindex_from_opt"];
        return O(a, c, d)
    }
    function R(a, c, d) {
        var e = a.length;
        if (c < 0 || c > e)
            throw [b("bs_caml_builtin_exceptions").invalid_argument, "String.contains_from / Bytes.contains_from"];
        try {
            F(a, e, c, d);
            return !0
        } catch (a) {
            if (a === b("bs_caml_builtin_exceptions").not_found)
                return !1;
            else
                throw a
        }
    }
    function S(a, b) {
        return R(a, 0, b)
    }
    function T(a, c, d) {
        if (c < 0 || c >= a.length)
            throw [b("bs_caml_builtin_exceptions").invalid_argument, "String.rcontains_from / Bytes.rcontains_from"];
        try {
            L(a, c, d);
            return !0
        } catch (a) {
            if (a === b("bs_caml_builtin_exceptions").not_found)
                return !1;
            else
                throw a
        }
    }
    var U = b("bs_caml_primitive").caml_bytes_compare;
    function V(a) {
        return y(b("bs_char").uppercase, a)
    }
    function W(a) {
        return y(b("bs_char").lowercase, a)
    }
    function X(a) {
        return C(b("bs_char").uppercase, a)
    }
    function Y(a) {
        return C(b("bs_char").lowercase, a)
    }
    var Z = b("bs_caml_primitive").caml_bytes_equal
      , $ = b("bs_caml_bytes").bytes_to_string
      , aa = b("bs_caml_bytes").bytes_of_string;
    f.make = a;
    f.init = c;
    f.empty = g;
    f.copy = h;
    f.of_string = e;
    f.to_string = d;
    f.sub = i;
    f.sub_string = j;
    f.extend = l;
    f.fill = m;
    f.blit = n;
    f.blit_string = o;
    f.concat = t;
    f.cat = u;
    f.iter = p;
    f.iteri = q;
    f.map = y;
    f.mapi = z;
    f.trim = w;
    f.escaped = x;
    f.index = G;
    f.index_opt = I;
    f.rindex = M;
    f.rindex_opt = P;
    f.index_from = J;
    f.index_from_opt = K;
    f.rindex_from = N;
    f.rindex_from_opt = Q;
    f.contains = S;
    f.contains_from = R;
    f.rcontains_from = T;
    f.uppercase = V;
    f.lowercase = W;
    f.capitalize = X;
    f.uncapitalize = Y;
    f.uppercase_ascii = A;
    f.lowercase_ascii = B;
    f.capitalize_ascii = D;
    f.uncapitalize_ascii = E;
    f.compare = U;
    f.equal = Z;
    f.unsafe_to_string = $;
    f.unsafe_of_string = aa
}
), null);
__d("bs_string", ["bs_bytes", "bs_curry", "bs_caml_bytes", "bs_caml_primitive", "bs_caml_builtin_exceptions"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, c) {
        return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").make(a, c))
    }
    function c(a, c) {
        return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").init(a, c))
    }
    function d(a) {
        return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").copy(b("bs_caml_bytes").bytes_of_string(a)))
    }
    function g(a, c, d) {
        return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").sub(b("bs_caml_bytes").bytes_of_string(a), c, d))
    }
    function h(a, c) {
        if (a >= c)
            return a;
        else
            throw [b("bs_caml_builtin_exceptions").invalid_argument, "String.concat"]
    }
    function i(a, b, c) {
        while (!0) {
            var d = c
              , e = a;
            if (d) {
                var f = d[1];
                d = d[0];
                if (f) {
                    c = f;
                    a = h((d.length + b | 0) + e | 0, e);
                    continue
                } else
                    return d.length + e | 0
            } else
                return e
        }
    }
    function j(a, c, d, e, f) {
        while (!0) {
            var g = f
              , h = c;
            if (g) {
                var i = g[1];
                g = g[0];
                if (i) {
                    b("bs_caml_bytes").caml_blit_string(g, 0, a, h, g.length);
                    b("bs_caml_bytes").caml_blit_string(d, 0, a, h + g.length | 0, e);
                    f = i;
                    c = (h + g.length | 0) + e | 0;
                    continue
                } else {
                    b("bs_caml_bytes").caml_blit_string(g, 0, a, h, g.length);
                    return a
                }
            } else
                return a
        }
    }
    function e(a, c) {
        if (c) {
            var d = a.length;
            return b("bs_caml_bytes").bytes_to_string(j(b("bs_caml_bytes").caml_create_bytes(i(0, d, c)), 0, a, d, c))
        } else
            return ""
    }
    function k(a, c) {
        for (var d = 0, e = c.length - 1 | 0; d <= e; ++d)
            b("bs_curry")._1(a, c.charCodeAt(d));
        return 0
    }
    function l(a, c) {
        for (var d = 0, e = c.length - 1 | 0; d <= e; ++d)
            b("bs_curry")._2(a, d, c.charCodeAt(d));
        return 0
    }
    function m(a, c) {
        return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").map(a, b("bs_caml_bytes").bytes_of_string(c)))
    }
    function n(a, c) {
        return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").mapi(a, b("bs_caml_bytes").bytes_of_string(c)))
    }
    function o(a) {
        a = a - 9 | 0;
        if (a > 4 || a < 0)
            return a === 23;
        else
            return a !== 2
    }
    function p(a) {
        if (a === "" || !(o(a.charCodeAt(0)) || o(a.charCodeAt(a.length - 1 | 0))))
            return a;
        else
            return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").trim(b("bs_caml_bytes").bytes_of_string(a)))
    }
    function q(a) {
        var c = function(b) {
            while (!0) {
                var c = b;
                if (c >= a.length)
                    return !1;
                else {
                    var d = a.charCodeAt(c);
                    if (d >= 32) {
                        d = d - 34 | 0;
                        if (d > 58 || d < 0)
                            if (d >= 93)
                                return !0;
                            else {
                                b = c + 1 | 0;
                                continue
                            }
                        else if (d > 57 || d < 1)
                            return !0;
                        else {
                            b = c + 1 | 0;
                            continue
                        }
                    } else
                        return !0
                }
            }
        };
        if (c(0))
            return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").escaped(b("bs_caml_bytes").bytes_of_string(a)));
        else
            return a
    }
    function r(a, c, d, e) {
        while (!0) {
            var f = d;
            if (f >= c)
                throw b("bs_caml_builtin_exceptions").not_found;
            if (a.charCodeAt(f) === e)
                return f;
            else {
                d = f + 1 | 0;
                continue
            }
        }
    }
    function s(a, b) {
        return r(a, a.length, 0, b)
    }
    function t(a, b, c, d) {
        while (!0) {
            var e = c;
            if (e >= b)
                return;
            else if (a.charCodeAt(e) === d)
                return e;
            else {
                c = e + 1 | 0;
                continue
            }
        }
    }
    function u(a, b) {
        return t(a, a.length, 0, b)
    }
    function v(a, c, d) {
        var e = a.length;
        if (c < 0 || c > e)
            throw [b("bs_caml_builtin_exceptions").invalid_argument, "String.index_from / Bytes.index_from"];
        return r(a, e, c, d)
    }
    function w(a, c, d) {
        var e = a.length;
        if (c < 0 || c > e)
            throw [b("bs_caml_builtin_exceptions").invalid_argument, "String.index_from_opt / Bytes.index_from_opt"];
        return t(a, e, c, d)
    }
    function x(a, c, d) {
        while (!0) {
            var e = c;
            if (e < 0)
                throw b("bs_caml_builtin_exceptions").not_found;
            if (a.charCodeAt(e) === d)
                return e;
            else {
                c = e - 1 | 0;
                continue
            }
        }
    }
    function y(a, b) {
        return x(a, a.length - 1 | 0, b)
    }
    function z(a, c, d) {
        if (c < -1 || c >= a.length)
            throw [b("bs_caml_builtin_exceptions").invalid_argument, "String.rindex_from / Bytes.rindex_from"];
        return x(a, c, d)
    }
    function A(a, b, c) {
        while (!0) {
            var d = b;
            if (d < 0)
                return;
            else if (a.charCodeAt(d) === c)
                return d;
            else {
                b = d - 1 | 0;
                continue
            }
        }
    }
    function B(a, b) {
        return A(a, a.length - 1 | 0, b)
    }
    function C(a, c, d) {
        if (c < -1 || c >= a.length)
            throw [b("bs_caml_builtin_exceptions").invalid_argument, "String.rindex_from_opt / Bytes.rindex_from_opt"];
        return A(a, c, d)
    }
    function D(a, c, d) {
        var e = a.length;
        if (c < 0 || c > e)
            throw [b("bs_caml_builtin_exceptions").invalid_argument, "String.contains_from / Bytes.contains_from"];
        try {
            r(a, e, c, d);
            return !0
        } catch (a) {
            if (a === b("bs_caml_builtin_exceptions").not_found)
                return !1;
            else
                throw a
        }
    }
    function E(a, b) {
        return D(a, 0, b)
    }
    function F(a, c, d) {
        if (c < 0 || c >= a.length)
            throw [b("bs_caml_builtin_exceptions").invalid_argument, "String.rcontains_from / Bytes.rcontains_from"];
        try {
            x(a, c, d);
            return !0
        } catch (a) {
            if (a === b("bs_caml_builtin_exceptions").not_found)
                return !1;
            else
                throw a
        }
    }
    function G(a) {
        return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").uppercase_ascii(b("bs_caml_bytes").bytes_of_string(a)))
    }
    function H(a) {
        return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").lowercase_ascii(b("bs_caml_bytes").bytes_of_string(a)))
    }
    function I(a) {
        return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").capitalize_ascii(b("bs_caml_bytes").bytes_of_string(a)))
    }
    function J(a) {
        return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").uncapitalize_ascii(b("bs_caml_bytes").bytes_of_string(a)))
    }
    var K = b("bs_caml_primitive").caml_string_compare;
    function L(a, b) {
        var c = 0
          , d = b.length;
        for (var e = b.length - 1 | 0; e >= 0; --e)
            b.charCodeAt(e) === a && (c = [g(b, e + 1 | 0, (d - e | 0) - 1 | 0), c],
            d = e);
        return [g(b, 0, d), c]
    }
    function M(a) {
        return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").uppercase(b("bs_caml_bytes").bytes_of_string(a)))
    }
    function N(a) {
        return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").lowercase(b("bs_caml_bytes").bytes_of_string(a)))
    }
    function O(a) {
        return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").capitalize(b("bs_caml_bytes").bytes_of_string(a)))
    }
    function P(a) {
        return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").uncapitalize(b("bs_caml_bytes").bytes_of_string(a)))
    }
    var Q = b("bs_bytes").fill
      , R = b("bs_bytes").blit_string;
    function S(a, b) {
        return a === b
    }
    f.make = a;
    f.init = c;
    f.copy = d;
    f.sub = g;
    f.fill = Q;
    f.blit = R;
    f.concat = e;
    f.iter = k;
    f.iteri = l;
    f.map = m;
    f.mapi = n;
    f.trim = p;
    f.escaped = q;
    f.index = s;
    f.index_opt = u;
    f.rindex = y;
    f.rindex_opt = B;
    f.index_from = v;
    f.index_from_opt = w;
    f.rindex_from = z;
    f.rindex_from_opt = C;
    f.contains = E;
    f.contains_from = D;
    f.rcontains_from = F;
    f.uppercase = M;
    f.lowercase = N;
    f.capitalize = O;
    f.uncapitalize = P;
    f.uppercase_ascii = G;
    f.lowercase_ascii = H;
    f.capitalize_ascii = I;
    f.uncapitalize_ascii = J;
    f.compare = K;
    f.equal = S;
    f.split_on_char = L
}
), null);
__d("MessengerStoryAttachmentTransformer.bs", ["fbt", "URI", "bs_string", "bs_js_dict", "bs_caml_array", "bs_belt_Option", "bs_caml_format", "bs_caml_option", "CurrentUser", "FundsAvailability", "bs_js_null_undefined", "P2PTransferStatus", "MNCommerceBubbleType", "PaymentModulesClient", "MercuryAttachmentType", "bs_caml_builtin_exceptions", "P2PPaymentRequestStatus", "ServicesCalendarSyncType", "MNCommerceCallToActionType", "LeadGenInfoFieldTypes"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function i(a) {
        return a.map(function(a) {
            var c = a.user_confirmation;
            c = c == null ? [null, null, null, null, !1] : [c.cancel_button_label, c.continue_button_label, c.confirmation_message, c.confirmation_title, !0];
            var d = a.payment_metadata;
            return {
                action_link: a.action_link,
                action_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MNCommerceCallToActionType"), a.action_open_type)),
                action_objects: a.action_objects,
                title: a.title,
                confirmation_cancel_label: c[0],
                confirmation_continue_label: c[1],
                confirmation_message: c[2],
                confirmation_title: c[3],
                id: a.id,
                is_disabled: a.is_disabled,
                is_mutable_by_server: a.is_mutable_by_server,
                logging_token: a.logging_token,
                payment_metadata: d == null ? {
                    payment_module_config: null,
                    total_price: null
                } : {
                    payment_module_config: d.payment_module_config,
                    total_price: d.total_price
                },
                render_style: a.render_style,
                webview_metadata: {
                    fallback_url: a.webview_metadata.fallback_url,
                    messenger_extensions: a.webview_metadata.messenger_extensions,
                    webview_height_ratio: a.webview_metadata.webview_height_ratio,
                    webview_share_button: a.webview_metadata.webview_share_button
                },
                should_show_user_confirmation: c[4],
                page_id: a.page_id,
                cta_data: a.cta_data
            }
        })
    }
    function j(a) {
        return a.map(function(a) {
            var c = a.url;
            c = c == null ? null : new (h || (h = b("URI")))(c).getUnqualifiedURI().toString();
            return {
                title: a.title,
                uri: c
            }
        })
    }
    function a(a) {
        if (!(a == null) && a !== "")
            return "#" + b("bs_string").sub(a, 2, a.length - 2 | 0);
        else
            return null
    }
    function c(a) {
        if (a == null)
            return null;
        else
            return {
                url: a.uri,
                src: a.uri,
                width: a.width,
                height: a.height
            }
    }
    function k(a, b) {
        var c = b.cover_photo, d;
        if (c == null)
            d = [null, null, null];
        else {
            var e = c.photo.image;
            e = e == null ? [null, null] : [e.uri, {
                height: e.height,
                width: e.width
            }];
            d = [c.photo.id, e[0], e[1]]
        }
        c = b.location;
        e = c == null ? [null, null] : [c.latitude, c.longitude];
        c = b.overall_star_rating;
        return {
            address: b.address.single_line_full_address,
            category: b.top_category_name,
            coverPhotoID: d[0],
            coverPhotoURL: d[1],
            coverPhotoDimensions: d[2],
            latitude: e[0],
            longitude: e[1],
            name: b.name,
            rating: c == null ? null : c.value,
            pageID: b.id,
            priceRange: b.price_range_description,
            viewerID: a
        }
    }
    function l(a) {
        var b = a.group_commerce_item_seller, c = a.primary_photo, d;
        if (c == null)
            d = null;
        else {
            c = c.image;
            d = c == null ? null : c.uri
        }
        return {
            caption: a.group_commerce_item_description.text,
            desc: a.group_commerce_item_description.text,
            owner_id: b == null ? null : b.id,
            price: a.formatted_price.text,
            text: a.group_commerce_item_description.text,
            title: a.group_commerce_item_title,
            thumb_url: d,
            url: a.url
        }
    }
    function m(a) {
        return {
            app_name: a.application_name,
            artists: a.artist_names,
            audio_url: a.audio_url,
            duration_ms: a.duration_ms,
            title: a.music_title
        }
    }
    function n(a) {
        var c = a.payment;
        return {
            id: a.id,
            desc: a.desc,
            display_total_cost: a.total_cost,
            merchant_name: a.merchant_name,
            target_url: a.target_url,
            thumb_url: a.thumb_url,
            raw_amount: a.raw_amount,
            payment_id: c == null ? null : c.id,
            total_cost: {
                amount: b("bs_caml_format").caml_float_of_string(a.price_amount),
                currency: a.price_currency
            },
            name: a.name
        }
    }
    function o(a) {
        return {
            fundraiserID: a.fundraiserID,
            canDonate: a.canDonate,
            hasViewerDonated: a.hasViewerDonated,
            fundraiserDetailedProgressText: a.fundraiserDetailedProgressText,
            fundraiserSubtitleText: a.fundraiserSubtitleText,
            focusedCoverPhoto: a.focusedCoverPhoto
        }
    }
    function p(a) {
        return {
            id: a.id,
            name: a.name,
            is_malicious: a.is_malicious,
            attach_type: b("MercuryAttachmentType").FILE,
            url: a.uri,
            extension: a.extension,
            filesize: a.filesize
        }
    }
    function q(a) {
        return {
            id: a.id,
            url_shimhash: a.url_shimhash,
            attach_type: b("MercuryAttachmentType").VIDEO,
            url: a.playable_url,
            extension: a.extension,
            filesize: a.filesize,
            name: a.filename,
            height: a.height,
            width: a.width
        }
    }
    function r(a) {
        return {
            id: a.id,
            name: a.name,
            desc: a.desc,
            thumb_url: a.thumb_url,
            item_url: a.item_url,
            title: a.name,
            text: a.desc,
            source: a.source,
            image_aspect_ratio: a.image_aspect_ratio,
            metalines: {
                metaline_1: a.first_metaline,
                metaline_2: a.second_metaline,
                metaline_3: a.third_metaline
            },
            default_action: a.default_action,
            call_to_actions: i(a.call_to_actions)
        }
    }
    function s(a) {
        var c = function(a) {
            a = a.services_vertical_info;
            if (a == null)
                return;
            else
                return {
                    isEligibleForAppointmentCalendar: a.is_eligible_for_appointment_calendar,
                    timezoneName: a.time_zone_name
                }
        }
          , d = a.page;
        c = d == null ? [void 0, void 0, void 0] : [d.id, b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("ServicesCalendarSyncType"), d.calendar_sync_type)), c(d)];
        d = a.native_component_flow_request;
        var e;
        if (d == null)
            e = null;
        else {
            var f = d.page, h = d.page, i = d.page, j;
            if (i == null)
                j = void 0;
            else {
                i = i.profile_picture;
                j = i == null ? void 0 : i.uri
            }
            i = d.suggested_time_range;
            var k = d.user, l = d.user, m = d.job_application, n = d.user, o;
            if (n == null)
                o = void 0;
            else {
                n = n.profile_picture;
                o = n == null ? void 0 : n.uri
            }
            e = {
                additionalInfo: d.additional_info,
                appointmentAddress: d.appointment_address,
                archivedStatus: d.archived_status,
                availability: d.availability,
                consumer_phone_number: d.consumer_phone_number,
                hasSavedToCalendar: d.has_saved_to_calendar,
                recurMessage: d.recur_message,
                requestFlowType: d.request_flow_type,
                generalInfo: d.service_general_info,
                id: d.id,
                pageID: f == null ? void 0 : f.id,
                pageName: h == null ? void 0 : h.name,
                pageProfilePic: j,
                preferredTimeRange: i == null ? null : {
                    end: i.end,
                    start: i.start
                },
                productItems: d.services_product_items,
                reminderBubbleText: d.reminder_bubble_text,
                requestAdminApprovalType: d.request_admin_approval_type,
                requestedTime: d.requested_time,
                specialRequest: d.special_request,
                status: d.booking_status_value,
                statusLabel: d.status,
                userID: k == null ? void 0 : k.id,
                username: l == null ? void 0 : l.short_name,
                jobApplicationID: m == null ? void 0 : m.id,
                userProfilePic: o
            }
        }
        n = a.message_bubble_type;
        var p;
        switch (n) {
        case "CANCELLED":
            p = ["Cancelled", g._("\u0110a\u0303 hu\u0309y")];
            break;
        case "DECLINED":
            p = ["Declined", g._("\u0110\u00e3 t\u1eeb ch\u1ed1i")];
            break;
        case "NO_SHOW":
            p = ["No-Show", g._("V\u1eafng m\u1eb7t")];
            break;
        case "REQUESTED":
            p = ["Requested", g._("\u0110\u00e3 y\u00eau c\u1ea7u")];
            break;
        case "SCHEDULEED":
            p = ["Scheduled", g._("\u0110\u00e3 l\u00ean l\u1ecbch")];
            break;
        default:
            throw [b("bs_caml_builtin_exceptions").invalid_argument, "Erroneous target status"]
        }
        f = a.user;
        return {
            id: a.id,
            pageID: c[0],
            calendarSyncType: c[1],
            userID: f == null ? "0" : f.id,
            status: p[0],
            statusLabel: p[1],
            ls_xma_title: a.ls_xma_title,
            ls_xma_subtitle: a.ls_xma_subtitle,
            viewerID: b("CurrentUser").getAccountID(),
            requestMetadata: e,
            servicesVerticalInfo: c[2]
        }
    }
    function t(a) {
        return {
            id: a.id,
            page_id: a.page.id,
            user_id: a.consumer.id,
            time_ranges: a.formatted_available_time_ranges.map(function(a) {
                return {
                    start: a.start,
                    end: a.end
                }
            }),
            has_booking_request_created: a.has_booking_request_created
        }
    }
    function u(a) {
        return {
            id: a.id
        }
    }
    function v(a) {
        return {
            live_location_id: a.live_location_id,
            is_expired: a.is_expired,
            expiration_time: a.expiration_time,
            sender: a.sender,
            coordinate: a.coordinate,
            location_title: a.location_title,
            sender_destination: a.sender_destination,
            stop_reason: a.stop_reason
        }
    }
    function w(a) {
        return {
            sender_wec_number: a.sender_wec_number,
            sender_wec_number_formated: a.sender_wec_number_formated,
            sender_wec_number_fbid: a.sender_wec_number_fbid,
            sender_wec_name: a.sender_wec_name
        }
    }
    function x(a) {
        var b = a.preview;
        b = b == null ? null : b.uri;
        var c = a.large_preview;
        c = c == null ? null : c.uri;
        return {
            id: a.id,
            extension: a.extension,
            preview: a.preview,
            large_preview: a.large_preview,
            attach_type: "photo",
            large_preview_url: c,
            preview_url: b
        }
    }
    function y(a) {
        return {
            id: a.id,
            name: a.filename,
            url_shimhash: a.url_shimhash,
            attach_type: b("MercuryAttachmentType").AUDIO,
            url: a.playable_url,
            extension: a.extension,
            filesize: a.filesize,
            duration: a.duration
        }
    }
    function z(a) {
        var b = a.first_metaline;
        return {
            desc: a.description,
            id: a.id,
            image_aspect_ratio: a.image_aspect_ratio,
            item_url: a.target_url,
            metalines: b == null ? {} : {
                metaline_1: b
            },
            name: a.name,
            source: a.source_name,
            text: a.description,
            thumb_url: a.image_url,
            title: a.name,
            default_action: a.default_action,
            call_to_actions: i(a.call_to_actions),
            media_blob_attachments: a.media_blob_attachments
        }
    }
    function A(a) {
        var b = a.business_items.nodes.map(z)
          , c = i(a.call_to_actions);
        return {
            message: a.message,
            call_to_actions: c,
            items: b
        }
    }
    function B(a) {
        return {
            message: a.message,
            call_to_actions: i(a.call_to_actions),
            items: a.promotion_items.nodes.map(z)
        }
    }
    function C(a) {
        var c = a.structured_address.streets
          , d = a.partner_logo;
        return {
            account_holder_name: a.account_holder_name,
            adjustments: a.adjustments.map(function(a) {
                return {
                    adjustment_type: a.adjustment_type,
                    display_adjustment_amount: a.adjustment_amount
                }
            }),
            cancellation_url: a.cancellation_url,
            items: a.items.nodes.map(z),
            merchant_name: a.merchant_name,
            messenger_commerce_bubble_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MNCommerceBubbleType"), a.messenger_commerce_bubble_type)),
            order_id: a.order_id,
            order_time: a.order_time,
            order_url: a.order_url,
            payment_method: a.payment_method,
            receipt_id: a.receipt_id,
            recipient_name: a.recipient_name,
            shipping_cost: a.shipping_cost,
            shipping_method: a.shipping_method,
            status: a.status,
            structured_address: {
                city: a.structured_address.city,
                state: a.structured_address.state,
                country: a.structured_address.country,
                postal_code: a.structured_address.postal_code,
                street_1: b("bs_caml_array").caml_array_get(c, 0),
                street_2: b("bs_caml_array").caml_array_get(c, 1)
            },
            subtotal: a.subtotal,
            total_cost: a.total_cost,
            total_tax: a.total_tax,
            partner_logo: d == null ? void 0 : d.uri
        }
    }
    function D(a, c) {
        return {
            payment_modules_client: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("PaymentModulesClient"), c.payment_modules_client)),
            is_viewer_seller: c.is_viewer_seller,
            payment_snippet: c.payment_snippet,
            item_list: c.item_list.map(function(a) {
                return {
                    item_id: a.item_id,
                    name: a.name,
                    subtitle: a.subtitle,
                    description: a.description,
                    unit_price: a.unit_price,
                    image_urls: a.images.map(function(a) {
                        return a.uri
                    }),
                    quantity: a.quantity
                }
            }),
            components: c.components,
            payment_call_to_actions: c.payment_call_to_actions,
            click_action: c.click_action,
            summary_action: c.summary_action,
            actor_id: a,
            invoicer_id: c.invoicer_id,
            is_last_attachment: c.is_last_attachment,
            payment_total: c.payment_total,
            product_detail: c.product_detail,
            payment_status_icon: c.payment_status_icon,
            user_facing_payment_status: c.user_facing_payment_status,
            payment_sub_statuses: c.payment_sub_statuses,
            should_show_new_xma: c.should_show_new_xma,
            buyer_name: c.buyer_name
        }
    }
    var E = function(a) {
        var c = b("LeadGenInfoFieldTypes")
          , d = {}
          , e = [];
        for (var a = a.field_data_list, f = Array.isArray(a), g = 0, a = f ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
            var h;
            if (f) {
                if (g >= a.length)
                    break;
                h = a[g++]
            } else {
                g = a.next();
                if (g.done)
                    break;
                h = g.value
            }
            h = h;
            var i = h.field_type
              , j = h.label;
            h = h.values;
            i === c.CUSTOM || i === c.ZIP ? e.push({
                label: j,
                values: h
            }) : d[i] = {
                label: j,
                values: h
            }
        }
        d.questions = e;
        return d
    };
    function F(a, b) {
        var c = b.invite_recipient;
        c = c == null ? null : c.id;
        var d = b.invite_sender;
        d = d == null ? null : d.id;
        return {
            quick_invite_id: b.id,
            recipient_id: c,
            sender_id: d,
            is_viewer_recipient: a === c
        }
    }
    function G(a) {
        var b = function(a) {
            if (a == null)
                return null;
            else
                return a.uri
        }
          , c = a.listing_category;
        c = c == null ? [null, null] : [c.offer_image, c.request_image];
        return {
            listingType: a.listing_type,
            mapURI: b(a.map_image),
            offerURI: b(c[0]),
            requestURI: b(c[1])
        }
    }
    function H(a) {
        return {
            sender: a.sender,
            receiver: a.receiver,
            transfer_id: a.transfer_id,
            bubbleView: a.bubble_view
        }
    }
    function I(a) {
        var c = a.receiver_profile, d;
        if (c == null)
            d = null;
        else {
            var e = c.profile_picture;
            d = {
                id: c.id,
                name: c.short_name,
                full_name: c.name,
                picture: e == null ? null : e.uri,
                profile_url: c.url
            }
        }
        e = a.sender;
        if (e == null)
            c = {};
        else {
            var f = e.profile_picture;
            c = {
                id: e.id,
                name: e.name,
                full_name: e.full_name,
                picture: f == null ? null : f.uri,
                profile_uri: e.url
            }
        }
        f = a.transfer_context;
        if (f == null)
            e = [null, null];
        else {
            var g = f.transfer_theme;
            e = [f.memo_images.map(function(a) {
                a = a.image;
                if (a == null)
                    return null;
                else
                    return a.uri
            }), g == null ? null : g.id]
        }
        f = a.platform_item;
        g = f == null ? null : {
            name: f.name,
            description: f.description,
            image: f.photos.map(function(a) {
                a = a.image;
                if (a == null)
                    return null;
                else
                    return a.uri
            }),
            refURL: f.url
        };
        f = a.amount_fb_discount;
        return {
            sender: c,
            amountWithSymbol: a.transaction_amount.formatted_amount,
            status: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("P2PTransferStatus"), a.transfer_status)),
            receiver: d,
            transfer_id: a.transfer_id,
            completedTime: a.completedTime,
            updatedTime: a.updatedTime,
            creationTime: a.creationTime,
            amount: a.transaction_amount.amount,
            memoText: a.memo_text,
            memoPhotoURLs: e[0],
            themeID: e[1],
            discountAmount: f == null ? null : f.formatted,
            fundsAvailability: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("FundsAvailability"), a.funds_availability)),
            groupThreadFBID: a.group_thread_fbid,
            platform_item: g,
            statusDescription: {
                markup: a.status_description
            },
            bubbleView: a.bubble_view,
            currencyCode: a.currency_amount.currency
        }
    }
    function J(a) {
        var c = a.requester, d;
        if (c == null)
            d = void 0;
        else {
            var e = c.profile_picture;
            d = {
                id: c.id,
                name: c.short_name,
                full_name: c.name,
                picture: e == null ? null : e.uri,
                profile_url: c.url
            }
        }
        e = a.requestee;
        if (e == null)
            c = void 0;
        else {
            var f = e.profile_picture;
            c = {
                id: e.id,
                name: e.short_name,
                full_name: e.name,
                picture: f == null ? null : f.uri,
                profile_url: e.url
            }
        }
        f = b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("P2PPaymentRequestStatus"), a.request_status));
        e = a.transfer;
        e = e == null ? [null, ""] : [I(e), e.id];
        var g = a.request_theme;
        return {
            amount: a.transaction_amount.amount,
            amountWithSymbol: a.amount.formatted,
            requestee: c,
            requester: d,
            currentStatus: f,
            currency: a.amount.currency,
            creationTime: a.creation_time,
            groupThreadFBID: a.group_thread_fbid,
            id: a.id,
            memoText: a.memo_text,
            themeID: g == null ? null : g.id,
            transfer: e[0],
            transferID: e[1],
            updatedTime: a.updated_time,
            bubbleView: a.bubble_view,
            statusDescription: {
                markup: a.status_description
            }
        }
    }
    function K(a) {
        var b = J({
            amount: a.amount,
            transaction_amount: a.transaction_amount,
            requester: a.requester,
            requestee: a.requestee,
            request_status: a.request_status,
            request_theme: a.request_theme,
            id: a.id,
            memo_text: a.memo_text,
            transfer: a.transfer,
            creation_time: a.creation_time,
            group_thread_fbid: a.group_thread_fbid,
            updated_time: a.updated_time,
            bubble_view: a.bubble_view,
            status_description: a.status_description
        });
        a = {
            individualRequests: a.individual_requests.map(J)
        };
        return Object.assign(b, a)
    }
    function L(a, c, d) {
        var e = c.media
          , f = e == null ? null : e.animated_image
          , g = e == null ? null : e.image
          , h = {};
        c.properties.forEach(function(b) {
            var a = b.value;
            h[b.key] = a == null ? null : a.text;
            return 0
        });
        var i = c.target, z;
        if (i == null)
            z = null;
        else
            switch (i.tag | 0) {
            case 0:
                z = G(i[0]);
                break;
            case 1:
                z = H(i[0]);
                break;
            case 2:
                z = I(i[0]);
                break;
            case 3:
                z = K(i[0]);
                break;
            case 4:
                z = D(a, i[0]);
                break;
            case 5:
                z = B(i[0]);
                break;
            case 6:
                z = A(i[0]);
                break;
            case 8:
                z = E(i[0]);
                break;
            case 9:
                z = v(i[0]);
                break;
            case 10:
                z = F(a, i[0]);
                break;
            case 11:
                z = s(i[0]);
                break;
            case 12:
                z = t(i[0]);
                break;
            case 13:
                z = u(i[0]);
                break;
            case 14:
                var J = i[0]
                  , L = J.genie_sender;
                L = L == null ? [null, null] : [L.messaging_actor.id, L.messaging_actor.name];
                var N = L[0], O = {
                    action_links: [],
                    messaging_attribution: null,
                    messenger_call_to_actions: [],
                    xma_layout_info: null,
                    deduplication_key: null,
                    description: null,
                    media: null,
                    properties: [],
                    source: null,
                    style_list: [],
                    title_with_entities: null,
                    url: null,
                    subattachments: [],
                    target: null,
                    messenger_generic_xma_template_extra_info: null
                }, P = c.media, Q;
                if (P == null)
                    Q = null;
                else {
                    P = P.pack;
                    if (P == null) {
                        P = J.story_attachment;
                        Q = P == null || d == null ? null : M(a, {
                            legacy_attachment_id: N,
                            story_attachment: {
                                action_links: d.action_links,
                                messaging_attribution: d.messaging_attribution,
                                messenger_call_to_actions: d.messenger_call_to_actions,
                                xma_layout_info: d.xma_layout_info,
                                deduplication_key: d.deduplication_key,
                                description: d.description,
                                media: d.media,
                                properties: d.properties,
                                source: d.source,
                                style_list: d.style_list,
                                title_with_entities: d.title_with_entities,
                                url: d.url,
                                subattachments: d.subattachments,
                                target: d.target,
                                messenger_generic_xma_template_extra_info: d.messenger_generic_xma_template_extra_info
                            },
                            genie_attachment: {
                                genie_message: {
                                    story_attachment: O
                                }
                            }
                        })
                    } else
                        Q = d == null ? null : M(a, {
                            legacy_attachment_id: N,
                            story_attachment: O,
                            genie_attachment: {
                                genie_message: {
                                    story_attachment: O
                                }
                            }
                        })
                }
                z = {
                    genie_id: N,
                    genie_name: L[1],
                    attachment: Q
                };
                break;
            case 16:
                z = m(i[0]);
                break;
            case 18:
                z = r(i[0]);
                break;
            case 19:
                z = n(i[0]);
                break;
            case 20:
                z = o(i[0]);
                break;
            case 21:
                z = C(i[0]);
                break;
            case 23:
                z = l(i[0]);
                break;
            case 24:
                z = k(a, i[0]);
                break;
            case 36:
                z = w(i[0]);
                break;
            case 37:
                z = x(i[0]);
                break;
            case 38:
                z = y(i[0]);
                break;
            case 39:
                z = p(i[0]);
                break;
            case 40:
                z = q(i[0]);
                break;
            default:
                z = i[0]
            }
        J = c.target;
        P = J == null || J.tag !== 5 ? null : 0;
        d = c.description;
        O = c.source;
        N = c.title_with_entities;
        return {
            description: d == null ? null : d.text,
            media: {
                animated_image: f == null ? null : f.uri,
                animated_image_size: f == null ? {
                    height: null,
                    width: null
                } : {
                    height: f.height,
                    width: f.width
                },
                image: g == null ? null : g.uri,
                image_size: g == null ? {
                    height: null,
                    width: null
                } : {
                    height: g.height,
                    width: g.width
                },
                duration: e == null ? null : e.playable_duration,
                playable: e == null ? null : e.is_playable,
                source: e == null ? null : e.playable_url
            },
            source: O == null ? null : O.text,
            style_list: c.style_list,
            title: N == null ? null : N.text,
            action_links: j(c.action_links),
            messaging_attribution: c.messaging_attribution,
            messenger_ctas: c.messenger_call_to_actions.map(function(a) {
                return {
                    id: a.id,
                    page_id: b("bs_belt_Option").getWithDefault(b("bs_caml_option").nullable_to_opt(a.page_id), ""),
                    action_title: a.title,
                    action_url: a.action_link,
                    action_open_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MNCommerceCallToActionType"), a.action_open_type)),
                    is_high_confidence: b("bs_belt_Option").getWithDefault(b("bs_caml_option").nullable_to_opt(a.is_high_confidence), !1),
                    is_mutable_by_server: a.is_mutable_by_server,
                    native_url: a.native_url,
                    is_disabled: a.is_disabled,
                    webview_metadata: {
                        fallback_url: a.webview_metadata.fallback_url,
                        messenger_extensions: a.webview_metadata.messenger_extensions,
                        webview_height_ratio: a.webview_metadata.webview_height_ratio,
                        webview_share_button: a.webview_metadata.webview_share_button
                    }
                }
            }),
            xma_layout_info: c.xma_layout_info,
            properties: h,
            uri: c.url,
            deduplication_key: c.deduplication_key,
            target: z,
            label: P,
            messenger_generic_xma_template_extra_info: c.messenger_generic_xma_template_extra_info
        }
    }
    function M(a, c) {
        var d = c.genie_attachment, e;
        if (d == null)
            e = null;
        else {
            d = d.genie_message;
            if (d == null)
                e = null;
            else {
                d = d.story_attachment;
                e = d == null ? null : {
                    description: d.description,
                    media: d.media,
                    source: d.source,
                    style_list: d.style_list,
                    title_with_entities: d.title_with_entities,
                    properties: d.properties,
                    url: d.url,
                    deduplication_key: d.deduplication_key,
                    action_links: d.action_links,
                    messaging_attribution: d.messaging_attribution,
                    messenger_call_to_actions: d.messenger_call_to_actions,
                    xma_layout_info: d.xma_layout_info,
                    messenger_generic_xma_template_extra_info: d.messenger_generic_xma_template_extra_info,
                    target: d.target,
                    subattachments: d.subattachments
                }
            }
        }
        d = c.story_attachment;
        var f;
        if (d == null)
            f = null;
        else {
            var g = {
                description: null,
                media: null,
                source: null,
                style_list: [],
                title_with_entities: null,
                properties: [],
                url: null,
                deduplication_key: null,
                action_links: [],
                messaging_attribution: null,
                messenger_call_to_actions: [],
                xma_layout_info: null,
                target: null,
                subattachments: [],
                messenger_generic_xma_template_extra_info: null
            };
            c = {
                share_id: c.legacy_attachment_id,
                subattachments: d.subattachments.map(function(b) {
                    return L(a, b, g)
                })
            };
            var h = {
                description: d.description,
                media: d.media,
                source: d.source,
                style_list: d.style_list,
                title_with_entities: d.title_with_entities,
                properties: d.properties,
                url: d.url,
                deduplication_key: d.deduplication_key,
                action_links: d.action_links,
                messaging_attribution: d.messaging_attribution,
                messenger_call_to_actions: d.messenger_call_to_actions,
                xma_layout_info: d.xma_layout_info,
                target: d.target,
                messenger_generic_xma_template_extra_info: d.messenger_generic_xma_template_extra_info
            };
            d = e == null ? {
                description: d.description,
                media: d.media,
                source: d.source,
                style_list: d.style_list,
                title_with_entities: d.title_with_entities,
                properties: d.properties,
                url: d.url,
                deduplication_key: d.deduplication_key,
                action_links: d.action_links,
                messaging_attribution: d.messaging_attribution,
                messenger_call_to_actions: d.messenger_call_to_actions,
                xma_layout_info: d.xma_layout_info,
                target: d.target,
                subattachments: d.subattachments,
                messenger_generic_xma_template_extra_info: d.messenger_generic_xma_template_extra_info
            } : {
                description: e.description,
                media: e.media,
                source: e.source,
                style_list: e.style_list,
                title_with_entities: e.title_with_entities,
                properties: e.properties,
                url: e.url,
                deduplication_key: e.deduplication_key,
                action_links: e.action_links,
                messaging_attribution: e.messaging_attribution,
                messenger_call_to_actions: e.messenger_call_to_actions,
                xma_layout_info: e.xma_layout_info,
                target: e.target,
                subattachments: e.subattachments,
                messenger_generic_xma_template_extra_info: e.messenger_generic_xma_template_extra_info
            };
            f = Object.assign(c, L(a, h, d))
        }
        return {
            app_attribution: null,
            attach_type: b("MercuryAttachmentType").SHARE,
            name: null,
            url: null,
            rel: null,
            preview_url: null,
            preview_width: null,
            preview_height: null,
            large_preview_url: null,
            large_preview_width: null,
            large_preview_height: null,
            icon_type: null,
            metadata: null,
            share: f,
            thumbnail_url: null
        }
    }
    f._getCallToActions = i;
    f._getActionLinks = j;
    f._getColor = a;
    f._getLogo = c;
    f._getPageTarget = k;
    f._getGroupCommerceProductItemTarget = l;
    f._getExternalSongTarget = m;
    f._getAgentSuggestionItemTarget = n;
    f._getFundraiserTarget = o;
    f._getWECFileTarget = p;
    f._getWECMessageVideoTarget = q;
    f._getRetailItemTarget = r;
    f._getPagesPlatformBookingMessageTarget = s;
    f._getServicesAppointmentAvailabilityTarget = t;
    f._getServicesGenericAdminTextTarget = u;
    f._getMessageLiveLocationTarget = v;
    f._getWECMessageTarget = w;
    f._getWECMessageImageTarget = x;
    f._getWECMessageAudioTarget = y;
    f._getBusinessRetailItem = z;
    f._getMessengerBusinessMessageTarget = A;
    f._getMessengerRetailPromotionTarget = B;
    f._getMessengerRetailReceiptTarget = C;
    f._getPagesPlatformAttachmentTarget = D;
    f._getPagesPlatformLeadGenInfoTarget = E;
    f._getQuickInviteTarget = F;
    f._getCrisisListingTarget = G;
    f._getMoneyTransferTarget = H;
    f._getP2PTransferTarget = I;
    f._getP2PTransferRequestTarget = J;
    f._getP2PTransferRequestWithIndividualRequests = K;
    f.transformStoryAttachment = L;
    f.getExtensibleAttachmentPayload = M
}
), null);
__d("MessengerAttachmentTransformer.bs", ["fbt", "bs_caml_primitive", "MercuryAttachmentType", "MessageSharedMediaIDStore.bs", "MercuryAttachmentContentType", "MessengerStoryAttachmentTransformer.bs"], (function(a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
        if (a.is_malicious) {
            var c = g._("T\u1ec7p \u0111\u00ednh k\u00e8m n\u00e0y \u0111\u00e3 b\u1ecb \u0111\u00e1nh d\u1ea5u l\u00e0 \u0111\u1ed9c h\u1ea1i.");
            return {
                app_attribution: null,
                icon_type: b("MercuryAttachmentContentType").UNKNOWN,
                mime_type: null,
                metadata: null,
                name: null,
                preview_height: null,
                preview_url: null,
                preview_width: null,
                rel: null,
                share: null,
                thumbnail_url: null,
                url: null,
                attach_type: b("MercuryAttachmentType").ERROR,
                error_msg: c,
                message_file_fbid: null,
                url_shimhash: null,
                url_skipshim: null,
                preview: null
            }
        } else {
            c = a.attribution_app;
            var d;
            if (c == null)
                d = null;
            else {
                var e = c.square_logo;
                d = {
                    id: c.id,
                    icon_url: e == null ? null : e.uri,
                    metadata: a.attribution_metadata,
                    name: c.name
                }
            }
            e = a.url;
            return {
                app_attribution: d,
                icon_type: a.content_type,
                mime_type: a.mimetype,
                metadata: null,
                name: a.filename,
                preview_height: null,
                preview_url: a.preview_url,
                preview_width: null,
                rel: "ignore",
                share: null,
                thumbnail_url: null,
                url: e == null ? null : e,
                attach_type: b("MercuryAttachmentType").FILE,
                error_msg: void 0,
                message_file_fbid: a.message_file_fbid,
                url_shimhash: a.url_shimhash,
                url_skipshim: a.url_skipshim,
                preview: a.preview
            }
        }
    }
    function i(a, c, d) {
        var e = a.chat_image;
        e = e == null ? [null, null, null] : [e.uri, e.width, e.height];
        var f = e[0]
          , g = a.chat_image;
        g = g == null ? null : {
            width: g.width,
            height: g.height
        };
        var h = a.large_image;
        h = h == null ? [null, null] : [h.uri, {
            width: h.width,
            height: h.height
        }];
        var i = a.inbox_image;
        i = i == null ? [null, null] : [i.uri, {
            width: i.width,
            height: i.height
        }];
        var j = a.attribution_app, k;
        if (j == null)
            k = null;
        else {
            var l = j.square_logo;
            k = {
                id: j.id,
                icon_url: l == null ? null : l.uri,
                metadata: a.attribution_metadata,
                name: j.name
            }
        }
        return {
            app_attribution: k,
            attach_type: b("MercuryAttachmentType").VIDEO,
            name: a.filename,
            url: a.playable_url,
            rel: "async",
            preview_url: f,
            preview_width: e[1],
            preview_height: e[2],
            large_preview_url: null,
            large_preview_width: null,
            large_preview_height: null,
            icon_type: b("MercuryAttachmentContentType").VIDEO,
            metadata: {
                fbid: a.legacy_attachment_id,
                render_as_sticker: a.video_type === "SPEAKING_STICKER",
                dimensions: {
                    width: a.original_dimensions.x,
                    height: a.original_dimensions.y
                },
                duration: a.playable_duration_in_ms,
                large_size: h[1],
                large_preview: h[0],
                chat_size: g,
                chat_preview: f,
                inbox_size: i[1],
                inbox_preview: i[0],
                pageid: d ? c : void 0
            },
            thumbnail_url: f,
            share: null
        }
    }
    function j(a) {
        var c = a.attribution_app, d;
        if (c == null)
            d = null;
        else {
            var e = c.square_logo;
            d = {
                id: c.id,
                icon_url: e == null ? null : e.uri,
                metadata: a.attribution_metadata,
                name: c.name
            }
        }
        return {
            app_attribution: d,
            attach_type: b("MercuryAttachmentType").FILE,
            name: a.filename,
            url: a.playable_url,
            rel: "ignore",
            preview_url: null,
            preview_width: null,
            preview_height: null,
            large_preview_url: null,
            large_preview_width: null,
            large_preview_height: null,
            icon_type: b("MercuryAttachmentContentType").MUSIC,
            metadata: {
                duration: a.playable_duration_in_ms,
                isVoicemail: a.is_voicemail ? "1" : "0",
                type: a.audio_type === "VOICE_MESSAGE" ? "fb_voice_message" : a.audio_type === "VOICE_MESSAGE_WITH_TRANSCRIPT" ? "fb_voice_message_with_transcript" : "file_attachment"
            },
            thumbnail_url: null,
            share: null,
            url_shimhash: a.url_shimhash,
            url_skipshim: a.url_skipshim
        }
    }
    function k(a, c, d) {
        var e = a.preview_image;
        e = e == null ? [null, null, null] : [e.uri, e.width, e.height];
        var f = a.animated_image;
        f = f == null ? null : f.uri;
        var g = a.attribution_app, h;
        if (g == null)
            h = null;
        else {
            var i = g.square_logo;
            h = {
                id: g.id,
                icon_url: i == null ? null : i.uri,
                metadata: a.attribution_metadata,
                name: g.name
            }
        }
        return {
            app_attribution: h,
            attach_type: b("MercuryAttachmentType").ANIMATED_IMAGE,
            name: a.filename,
            url: f,
            rel: "async",
            preview_url: e[0],
            preview_width: e[1],
            preview_height: e[2],
            large_preview_url: null,
            large_preview_width: null,
            large_preview_height: null,
            icon_type: b("MercuryAttachmentContentType").PHOTO,
            metadata: {
                fbid: a.legacy_attachment_id,
                image: f,
                dimensions: String(a.original_dimensions.x) + ("," + String(a.original_dimensions.y)),
                pageid: d ? c : void 0
            },
            thumbnail_url: f,
            share: null
        }
    }
    function l(a) {
        var c = a.original_extension === "gif" ? b("MercuryAttachmentType").ANIMATED_IMAGE : a.render_as_sticker ? b("MercuryAttachmentType").THIRDPARTYSTICKER : b("MercuryAttachmentType").PHOTO
          , d = a.preview;
        d = d == null ? [null, null, null] : [d.uri, d.width, d.height];
        if (c === b("MercuryAttachmentType").PHOTO) {
            var e = a.large_preview;
            e = e == null ? [null, null, null] : [e.uri, e.width, e.height]
        } else
            e = [null, null, null];
        var f = a.attribution_app, g;
        if (f == null)
            g = null;
        else {
            var h = f.square_logo;
            g = {
                id: f.id,
                icon_url: h == null ? null : h.uri,
                metadata: a.attribution_metadata,
                name: f.name
            }
        }
        h = a.thumbnail;
        return {
            app_attribution: g,
            attach_type: c,
            blurred_image_uri: a.blurred_image_uri,
            name: a.filename,
            url: null,
            rel: "async",
            preview_url: d[0],
            preview_width: d[1],
            preview_height: d[2],
            large_preview_url: e[0],
            large_preview_width: e[1],
            large_preview_height: e[2],
            icon_type: b("MercuryAttachmentContentType").PHOTO,
            metadata: {
                fbid: a.legacy_attachment_id,
                dimensions: String(a.original_dimensions.x) + ("," + String(a.original_dimensions.y))
            },
            thumbnail_url: h == null ? null : h.uri,
            share: null,
            photo_encodings: a.photo_encodings
        }
    }
    function m(a, c) {
        var d = a
          , e = c;
        if (a >= c) {
            a = b("bs_caml_primitive").caml_float_min(120, d / 2);
            c = a / (d / 2);
            return [a | 0, e / 2 * c | 0]
        } else {
            a = b("bs_caml_primitive").caml_float_min(120, e / 2);
            c = a / (e / 2);
            return [d / 2 * c | 0, a | 0]
        }
    }
    function n(a) {
        var c = m(a.width, a.height)
          , d = a.pack
          , e = a.sprite_image
          , f = a.sprite_image_2x
          , g = a.padded_sprite_image
          , h = a.padded_sprite_image_2x;
        return {
            app_attribution: null,
            attach_type: b("MercuryAttachmentType").STICKER,
            name: null,
            url: a.url,
            rel: null,
            preview_url: null,
            preview_width: null,
            preview_height: null,
            large_preview_url: null,
            large_preview_width: null,
            large_preview_height: null,
            icon_type: b("MercuryAttachmentContentType").UNKNOWN,
            metadata: {
                accessibilityLabel: a.label,
                stickerID: a.id,
                packID: d == null ? null : d.id,
                frameCount: a.frame_count,
                frameRate: a.frame_rate,
                framesPerRow: a.frame_count > 1 ? a.frames_per_row : 1,
                framesPerCol: a.frame_count > 1 ? a.frames_per_column : 1,
                height: c[1],
                width: c[0],
                spriteURI: e == null ? null : e.uri,
                spriteURI2x: f == null ? null : f.uri,
                paddedSpriteURI: g == null ? null : g.uri,
                paddedSpriteURI2x: h == null ? null : h.uri,
                thumbnail_url: null,
                share: null
            }
        }
    }
    function o(a, c) {
        if (c == null)
            return 0;
        else
            return b("MessageSharedMediaIDStore.bs").setMessageIDForAttachmentID(a, c)
    }
    function a(a, c, d, e) {
        var f = [], g = {
            id: "",
            pack: null,
            label: "",
            frame_count: 0,
            frame_rate: 0,
            frames_per_row: 0,
            frames_per_column: 0,
            height: 0,
            padded_sprite_image: null,
            padded_sprite_image_2x: null,
            sprite_image_2x: null,
            sprite_image: null,
            url: null,
            width: 0
        }, m = c.extensible_attachment, p;
        if (m == null)
            p = g;
        else {
            m = m.story_attachment;
            if (m == null)
                p = g;
            else {
                m = m.media;
                p = m == null ? g : {
                    id: m.id,
                    pack: m.pack,
                    label: m.label,
                    frame_count: m.frame_count,
                    frame_rate: m.frame_rate,
                    frames_per_row: m.frames_per_row,
                    frames_per_column: m.frames_per_column,
                    height: m.height,
                    padded_sprite_image: m.padded_sprite_image,
                    padded_sprite_image_2x: m.padded_sprite_image_2x,
                    sprite_image_2x: m.sprite_image_2x,
                    sprite_image: m.sprite_image,
                    url: m.url,
                    width: m.width
                }
            }
        }
        g = p.id;
        !(g == null) && g !== "" && f.push(n(p));
        m = c.extensible_attachment;
        m == null || f.push(b("MessengerStoryAttachmentTransformer.bs").getExtensibleAttachmentPayload(a, m));
        g = c.sticker;
        g == null || f.push(n(g));
        p = c.blob_attachments;
        p == null || p.forEach(function(b) {
            switch (b.tag | 0) {
            case 0:
                var c = b[0];
                o(c.legacy_attachment_id, d);
                f.push(l(c));
                return 0;
            case 1:
                c = b[0];
                o(c.legacy_attachment_id, d);
                f.push(k(c, a, e));
                return 0;
            case 2:
                f.push(j(b[0]));
                return 0;
            case 3:
                c = b[0];
                o(c.legacy_attachment_id, d);
                f.push(i(c, a, e));
                return 0;
            case 4:
                f.push(h(b[0]));
                return 0
            }
        });
        return f
    }
    f._getFilePayload = h;
    f._getVideoPayload = i;
    f._getAudioPayload = j;
    f._getAnimatedImagePayload = k;
    f._getImagePayload = l;
    f._getStickerDimensions = m;
    f._getStickerPayload = n;
    f._storeAttachmentMapping = o;
    f.transformAttachment = a
}
), null);
__d("InstantGameUpdateXMATUpdateType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        UNKNOWN: "unknown",
        GAME_SCORE: "game_score",
        CUSTOM_MESSAGE: "custom_message"
    });
    e.exports = a
}
), null);
__d("MNCommerceMessageType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        TEXT: "text",
        IMAGE: "image",
        VIDEO: "video",
        AUDIO: "audio",
        FILE: "file",
        ROBOT_TEXT: "robot_text",
        LOCATION: "location",
        FORCED_FETCH_MESSAGE: "forced_fetch_message",
        SENDER_ACTION: "sender_action",
        SHOPS_PRODUCT: "shops_product",
        SHOPS_PRODUCT_HSCROLL: "shops_product_hscroll",
        RETAIL_PRODUCT_SUBSCRIPTION: "retail_product_subscription",
        RETAIL_PROMOTION: "retail_promotion",
        RETAIL_CANCELLATION: "retail_cancellation",
        RETAIL_SHIPMENT: "retail_shipment",
        SHIPMENT_TRACKING_EVENT: "shipment_tracking_event",
        AIRLINE_CHECKIN_REMINDER: "airline_checkin_reminder",
        AIRLINE_BOARDING_PASS: "airline_boarding_pass",
        AIRLINE_CHECKIN: "airline_checkin",
        AIRLINE_BOARDINGPASS: "airline_boardingpass",
        AIRLINE_UPDATE: "airline_update",
        AIRLINE_ITINERARY: "airline_itinerary",
        CONTENT_SUBSCRIPTION: "content_subscription",
        AD_ADMIN_TEXT: "ad_admin_text",
        AD_TEXT: "ad_text",
        AD_BUBBLE: "ad_bubble",
        NON_AD: "non_ad",
        UNKNOWN: "unknown",
        OTHER: "other",
        TEMPLATE: "template",
        OPEN_GRAPH: "open_graph",
        GENERIC: "generic",
        LIST: "list",
        COMPACT_LIST: "compact_list",
        BUTTON: "button",
        RECEIPT: "receipt",
        GENERIC_LEGACY: "generic_legacy",
        ICE_BREAKER: "ice_breaker",
        FALLBACK: "fallback",
        ONE_TIME_NOTIF_REQ: "one_time_notif_req",
        CUSTOMER_FEEDBACK: "customer_feedback",
        RIDE_INTENT: "ride_intent",
        RIDE_SIGNUP: "ride_signup",
        RIDE_WELCOME: "ride_welcome",
        RIDE_ORDER_CONFIRMATION: "ride_order_confirmation",
        RIDE_REQUESTED: "ride_requested",
        RIDE_DRIVER_ON_THE_WAY: "ride_driver_on_the_way",
        RIDE_NO_DRIVER: "ride_no_driver",
        RIDE_DRIVER_ARRIVING: "ride_driver_arriving",
        RIDE_DRIVER_CANCELED: "ride_driver_canceled",
        RIDE_RIDER_CANCELED: "ride_rider_canceled",
        RIDE_COMPLETE: "ride_complete",
        RIDE_ADMIN_MESSAGE: "ride_admin_message",
        RIDE_RECEIPT: "ride_receipt",
        RIDE_REENGAGEMENT_FIRST_RIDE: "ride_reengagement_first_ride",
        GET_RIDE: "give_get_ride",
        GIVE_RIDE: "send_give_get_ride",
        REFERER_PROMO: "referer_promo",
        INSTANT_GAMES_SHARE: "instant_games_share",
        INSTANT_GAMES_SCORE: "instant_games_score",
        INSTANT_GAMES_LIVE_STREAM: "instant_games_live_stream",
        INSTANT_GAMES_CUSTOM_UPDATE: "instant_games_custom_update",
        INSTANT_GAMES_CUSTOM_UPDATE_MEDIA: "instant_games_custom_update_media",
        INSTANT_GAMES_TOURNAMENT_UPDATE: "instant_games_tournament_update",
        GAMING_SERVICES_GAME_INVITE: "GAMING_SERVICES_GAME_INVITE",
        LINK: "link_admin_message",
        UNLINK: "unlink_admin_message",
        BLOCK_ALL: "block_all_admin_message",
        UNBLOCK_ALL: "unblock_all_admin_message",
        BLOCK_PROMOTION: "block_promotion_admin_message",
        UNBLOCK_PROMOTION: "unblock_promotion_admin_message",
        INITIAL_PROMOTION: "initial_promotion_admin_message",
        WEAK_CONSENT_ADMIN_MESSAGE: "weak_consent_admin_message",
        MESSENGER_TEAM_BOT_MESSAGE: "messenger_team_bot",
        MESSENGER_BOT_BASE_GENERIC: "messenger_bot_base_generic",
        COMMERCE_COMPACT_LIST: "commerce_compact_list",
        FEEDBACK: "feedback",
        FORM_PROGRESS: "form_progress",
        MEDIA: "media",
        PLACE_CARD: "place_card"
    });
    e.exports = a
}
), null);
__d("MercuryActionType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        ADD_GROUP_ADMINS: "ma-type:add_group_admins",
        ADD_PARTICIPANTS: "ma-type:add-participants",
        ADS_CONVERSION_UPDATE: "ma-type:ads_conversion_update",
        APPROVAL_MODE: "ma-type:approval-mode",
        APPROVAL_QUEUE: "ma-type:approval-queue",
        BLOCK_STATUS_CHANGED: "ma-type:block-status-changed",
        BLURRED_IMAGE_STATUS: "ma-type:blurred-image-status",
        CANCEL_ATTACHMENT_PLACEHOLDER: "ma-type:cancel-attachment-placeholder",
        CHANGE_ARCHIVED_STATUS: "ma-type:change-archived-status",
        CHANGE_FLAG: "ma-type:change_flag",
        CHANGE_FOLDER: "ma-type:change-folder",
        CHANGE_MUTE_SETTINGS: "ma-type:change-mute-settings",
        CHANGE_PAGE_FOLLOW_UP_STATUS: "ma-type:change-page-follow-up-status",
        CHANGE_PINNED_STATUS: "ma-type:change-pinned-status",
        CHANGE_READ_STATUS: "ma-type:change_read_status",
        CONFIRM_ATTACHMENT_PLACEHOLDER: "ma-type:confirm-attachment-placeholder",
        CREATE_OMNI_M_SUGGESTIONS: "ma-type:create-omni-m-suggestions",
        CREATE_PAGE_ADMIN_NOTE: "ma-type:create-page-admin-note",
        DELETE_MESSAGES: "ma-type:delete-messages",
        DELETE_MONTAGE_MESSAGES: "ma-type:delete-montage-messages",
        DELETE_THREAD: "ma-type:delete-thread",
        DESCRIPTION_CHANGED: "ma-type:description-changed",
        EVENT_RSVP_CHANGED: "ma-type:event-rsvp-changed",
        GROUPS_SYNC_METADATA_UPDATE: "ma-type:groups-sync-metadata-update",
        GROUPS_SYNC_STATUS_CHANGED: "ma-type:groups-sync-status-changed",
        IS_PIN_PROTECTED: "ma-type:is_pin_protected",
        JOINABLE_MODE: "ma-type:joinable-mode",
        LIVE_LOCATION_UPDATE: "ma-type:live-location-update",
        LOG_MESSAGE: "ma-type:log-message",
        MARK_THREAD_SEEN: "ma-type:mark_thread_seen",
        MONTAGE_DIRECT_EXPIRE: "ma-type:montage-direct-expire",
        MOVE_PENDING_TO_INBOX: "ma-type:move_pending_to_inbox",
        MUTATE_TAGS: "ma-type:mutate_tags",
        NEW_MONTAGE_MESSAGE: "ma-type:new-montage-message",
        PIN_MESSAGE: "ma-type:pin-message",
        PROMOTE_GROUP_ADMINS: "ma-type:promote-group-admins",
        REACTION_UPDATE: "ma-type:reaction-update",
        REMOVE_GROUP_ADMINS: "ma-type:remove_group_admins",
        REMOVE_MESSAGE: "ma-type:remove-message",
        REPLACE_MESSAGE: "ma-type:replace-message",
        SEND_MESSAGE: "ma-type:send-message",
        SUGGESTED_REPLY_UPDATE: "ma-type:suggested_reply_update",
        UNPIN_MESSAGE: "ma-type:unpin-message",
        UNSUBSCRIBE_STATUS_UPDATE: "ma-type:unsubscribe-status-update",
        UNWRAP_MESSAGE: "ma-type:unwrap-message",
        UPDATE_COMM_ITEM_OWNER: "ma-type:update-comm-item-owner",
        UPDATE_COMM_STATUS: "ma-type:update-comm-status",
        UPDATE_CONNECTIVITY_STATUS: "ma-type:update-connectivity-status",
        UPDATE_CUSTOM_LIKE: "ma-type:update_custom_like",
        UPDATE_JOINABLE_LINK: "ma-type:update-joinable-link",
        UPDATE_RTC_CALL_DATA: "ma-type:update-rtc-call-data",
        UPDATE_SNIPPET: "ma-type:update-snippet",
        UPDATE_THREAD_THEME: "ma-type:update-thread-theme",
        USER_GENERATED_MESSAGE: "ma-type:user-generated-message"
    });
    e.exports = a
}
), null);
__d("MercuryLogMessageType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        SUBSCRIBE: "log:subscribe",
        UNSUBSCRIBE: "log:unsubscribe",
        VIDEO_CALL: "log:video-call",
        PHONE_CALL: "log:phone-call",
        THREAD_NAME: "log:thread-name",
        THREAD_IMAGE: "log:thread-image",
        SERVER_ERROR: "log:error-msg",
        LIVE_LISTEN: "log:live-listen",
        WALLPAPER: "log:wallpaper",
        ORION: "log:orion",
        SWITCH_TO_WORK: "log:switch",
        PAGE_REPLY: "log:page-reply",
        GENERIC_ADMIN_TEXT: "log:generic-admin-text"
    });
    e.exports = a
}
), null);
__d("MercurySourceType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        CHAT_ORCA: "source:chat:orca",
        CHAT_LIGHT_SPEED: "source:chat:light_speed",
        CHAT_IPHONE: "source:chat:iphone",
        CHAT_JABBER: "source:chat:jabber",
        CHAT_MEEBO: "source:chat:meebo",
        CHAT_WEB: "source:chat:web",
        CHAT_TEST: "source:chat:test",
        CHAT_FORWARD_DIALOG: "source:chat:forward",
        CHAT: "source:chat",
        CONTACT_ADD_MUTATION: "source:contact_add:graphql_mutation",
        CONTACT_ADD_CYMK: "source:contact_add:cymk_suggestion",
        CONTEXTUAL_PROFILE_MESSAGE: "source:contextual_profile:message",
        COWORKER_GROUP: "source:work:coworker_group",
        COVID_HUB_MENTAL_HEALTH_UNIT: "source:covid_hub_mental_health",
        CUSTOMER_CHAT_PLUGIN: "source:discovery:customer_chat_plugin",
        EMAIL: "source:email",
        EVENT_MESSAGE_BLAST: "source:event_message_blast",
        EVENT_TICKETING: "source:event_ticket",
        EVENT_REMINDERS: "source:event_reminders",
        WHITEHAT_FBDL: "source:whitehat_fbdl",
        GENERIC_ADMIN_TEXT: "source:generic_admin_text",
        GIGABOXX_API: "source:gigaboxx:api",
        GIGABOXX_BLAST: "source:gigaboxx:blast",
        GIGABOXX_EMAIL_REPLY: "source:gigaboxx:emailreply",
        GIGABOXX_MOBILE: "source:gigaboxx:mobile",
        GIGABOXX_WAP: "source:gigaboxx:wap",
        GIGABOXX_WEB: "source:gigaboxx:web",
        GROUP_GENERAL_THREAD_AUTOJOIN: "source:group:general_thread_autojoin",
        INVITE: "source:invite",
        LEIA: "source:leia",
        MESSENGER_WEB: "source:messenger:web",
        MESSENGER_WEB_SEARCH: "source:messenger:web_search",
        MESSENGER_UNKNOWN: "source:messenger:unknown",
        REFERRALS_DIALOG: "source:referrals:dialog",
        SAM_UFI: "source:sam:ufi",
        SHARE_DIALOG: "source:share:dialog",
        SEND_PLUGIN: "source:sendplugin",
        SMS: "source:sms",
        SSI_RESOURCES: "source:ssi_resources",
        TEST: "source:test",
        TITAN_WAP: "source:titan:wap",
        TITAN_M_BASIC: "source:titan:m_basic",
        TITAN_M_FREE: "source:titan:m_free_basic",
        TITAN_M_JAPAN: "source:titan:m_japan",
        TITAN_M_MINI: "source:titan:m_mini",
        TITAN_M_TOUCH: "source:titan:m_touch",
        TITAN_M_APP: "source:titan:m_app",
        TITAN_M_TABLET: "source:titan:m_tablet",
        TITAN_M_ZERO: "source:titan:m_zero",
        TITAN_M_TALK: "source:titan:m_talk",
        TITAN_WEB: "source:titan:web",
        TITAN_FACEWEB_ANDROID: "source:titan:faceweb_android",
        TITAN_FACEWEB_BUFFY: "source:titan:faceweb_buffy",
        TITAN_FACEWEB_IPAD: "source:titan:faceweb_ipad",
        TITAN_FACEWEB_IPHONE: "source:titan:faceweb_iphone",
        TITAN_FACEWEB_UNKNOWN: "source:titan:faceweb_unknown",
        TITAN_API: "source:titan:api",
        TITAN_API_MOBILE: "source:titan:api_mobile",
        TITAN_ORCA: "source:titan:orca",
        TITAN_EMAIL_REPLY: "source:titan:emailreply",
        MOBILE: "source:mobile",
        PAGE_PLATFORM_API: "source:page_platform_api",
        PAGE_UNIFIED_INBOX: "source:page_unified_inbox",
        WHATSAPP_CALLBACK: "source:wa_callback",
        UNKNOWN: "source:unknown",
        WEB: "source:web",
        WESTWORLD: "source:westworld",
        TESTDATA: "source:testdata",
        HELPCENTER: "source:helpcenter",
        NEW_SHARE_DIALOG: "source:share:dialog:new",
        PAID_PROMOTION: "source:paid_promotion",
        BUFFY_SMS: "source:buffy:sms",
        WEBRTC_MOBILE: "source:webrtc:mobile",
        MESSENGER_COMMERCE: "source:messenger:commerce",
        MESSENGER_BOT: "source:bot",
        SERVICES_QPC_CTA_TRIGGER_MESSAGE: "source:services:qpc:cta:trigger:message",
        MESSENGER_EMPLOYEE_ONLY_BOT: "source:bot:employee_only",
        MESSENGER_OMNIM: "source:messenger:omnim",
        PAGES_PRIVATE_REPLY: "source:pages:private_reply",
        MESSENGER_FORWARD_DIALOG: "source:messenger:forward",
        MESSENGER_AD: "source:messenger:ad",
        MARKETPLACE: "source:marketplace",
        MARKETPLACE_CARE: "source:marketplace:care",
        MARKETPLACE_BOT: "source:marketplace:bot",
        CHEX_C2C: "source:chex:c2c",
        MESSENGER_LEAD_GEN: "source:messenger:lead_gen",
        PAGES_MESSAGE_SHORTLINK: "source:pages:message_shortlink",
        STICKER_SUBSCRIBE: "source:messenger:sticker_subscribe",
        PHOTO_TAG: "source:messenger:photo_tag",
        INTERNAL_TEST_INBOX: "source:internal:test_inbox",
        INTERNAL_TEST_PENDING: "source:internal:test_pending",
        INTERNAL_TEST_OTHER: "source:internal:test_other",
        INTERNAL_TEST_ML_ONLY: "source:internal:test_ml_only",
        JOB_SEARCH_APPLICATION: "source:job_search:application",
        JOB_SEARCH_JOB_OPENING: "source:job_search:job_opening",
        MESSENGER_JOINABLE_LINK: "source:messenger:joinable_link",
        MESSENGER_ADD_WITH_APPROVAL: "source:messenger:add_with_approval",
        MESSENGER_SMS_BRIDGE_CONVERT: "source:messenger:sms_bridge_conversion",
        TINCAN_ORCA: "source:tincan:orca",
        TINCAN_IOS: "source:tincan:ios",
        TINCAN_UNKNOWN: "source:tincan:unknown",
        FACEBOOK_GROUPS_CHANNELS: "source:groups:channels",
        GROUP_COMMERCE: "source:group_commerce",
        INTERNAL_TOOL: "source:internal:tool",
        PAGES_PLATFORM: "source:pages:platform",
        PAGES_RECOMMENDATION: "source:pages:recommendation",
        PAGES_ORDER_MANAGEMENT: "source:pages:order_management",
        PAGE_AUTO_RESPONSE: "source:pages:auto_response",
        PAGES_INVITE: "source:pages:invite",
        PAGES_CHAT_EXTENSION: "source:pages:chat_extension",
        PAGES_COMPOSER: "source:pages:composer",
        PTX: "source:ptx",
        SAVED_CHAT_EXTENSION: "source:saved:chat_extension",
        CREATOR_PAGE_INITIATE_TO_CREATOR_PAGE: "source:pages:creator_page_initiate_to_creator_page",
        LIVE_VIDEO_CHAT: "source:live_video_chat",
        GEMSTONE: "source:gemstone",
        WATCH_PARTY: "source:watch_party",
        WORK_ACTIVATION_CARD_GENERAL_GROUP_CHAT: "source:work:activation_card_general_group_chat",
        SCHOOL_COMMUNITY: "source:school_community",
        SCHOOL_COMMUNITY_COURSE: "source:school_community_course",
        SOCIAL_ASSISTANT: "source:social_assistant",
        BELL_RESEARCH: "source:bell_research",
        BELL_MESSENGER_LINKED: "source:bell_messenger_linked",
        BELL_MESSENGER_UNLINKED: "source:bell_messenger_unlinked",
        BELL_MESSENGER_ONBOARD: "source:bell_messenger_onboard",
        PROFILE_MEET_NEW_FRIENDS: "source:profile_meet_new_friends",
        PROFILE_MEET_NEW_FRIENDS_REPLY: "source:profile_meet_new_friends_reply",
        OCULUS_SHARE_TO_MESSENGER: "source:oculus_share_to_messenger",
        BFF_BOT: "source:bff:bot",
        FRIENDING_ADMIN_BUMP: "source:messenger_growth:friending_admin_bump",
        NEW_MESSENGER_USER_ADMIN_BUMP: "source:messenger_growth:new_messenger_user_admin_bump",
        EVENT_UPCOMING_BUMP: "source:messenger_growth:event_upcoming_bump",
        PHOTO_TAG_BUMP: "source:messenger_growth:photo_tag_bump",
        WALL_POST_BUMP: "source:messenger_growth:wall_post_bump",
        FRIENDVERSARY_BUMP: "source:messenger_growth:friendversary_bump",
        CUSTOMIZATION_UPSELL_BUMP: "source:messenger_growth:customization_upsell_bump",
        MESSENGER_BROADCASTFLOW: "source:messenger:broadcastflow",
        PAGE_COMMENT_MSG: "source:pages:question_triggered_convo",
        COMMENT_PIVOT: "source:messenger_growth:comment_pivot",
        PAGE_HOVERCARD: "source:pages:hovercard",
        INSTANT_GAMES_GAME_UPDATE: "source:instant_games_game_updates",
        INSTANT_GAMES_GAME_SHARE: "source:instant_games_game_share",
        INSTANT_GAMES_MATCH_MAKING: "source:instant_games_match_making",
        INSTANT_GAMES_GROUP_CREATION: "source:instant_games_group_creation",
        MOBILE_GAME_SHARE: "source:games_app:mobile_game_share",
        GAMES_SERVICE_GAME_INVITE: "source:games_service_game_invite",
        PAGE_EMAIL_REPLY: "source:pages:email_reply",
        PAGE_HOME_PAGE_PANEL: "source:page_home_page_panel",
        GROUPSYNC_MESSENGER_GROUP_CREATE: "source:groupsync:messenger_group_create",
        GROUPSYNC_SYNC_FROM_FB: "source:groupsync:sync_from_fb",
        GROUPSYNC_NAMING: "source:groupsync:naming",
        GROUPSYNC_THREAD_INFO_SYNC_FROM_FB: "source:groupsync:thread_info_sync",
        GROUPSYNC_THREAD_INFO_SYNC_FROM_FB_NON_PARTICIPANT: "source:groupsync:thread_info_sync_non_participant",
        WORK_GARDEN_CREATION: "source:work:garden:creation",
        WORK_GROUP_SYNCED_CHAT_CREATION: "source:work:groupchat:creation",
        WORK_DEFAULT_GROUP_SYNCED_CHAT_CREATION: "source:work:defaultgroupchat:creation",
        WORK_GROUP_SYNCED_CHAT_MEMBER_SYNC: "source:work:groupchat:member_sync",
        WORK_MEETING_SYNCED_CHAT_MEMBER_SYNC: "source:work:meetingchat:member_sync",
        WORK_GROUP_SYNCED_CHAT_DESCRIPTION_SYNC: "source:work:groupchat:description_sync",
        WORK_GROUP_SYNCED_CHAT_NAME_SYNC: "source:work:groupchat:name_sync",
        WORK_GROUP_SYNCED_CHAT_OPT_IN: "source:work:groupchat:opt_in",
        PAGE_PQI_MESSAGE: "source:pages:pqi_message",
        PAGE_PLUGIN_MESSAGE: "source:pages:page_plugin_message",
        WORKPLACE_ACTIVATION_GOLDIE_CUSTOM_INVITE: "source:workplace:activation_goldie_custom_invite",
        WORKPLACE_CHAT_DESKTOP: "source:workchat:desktop",
        WORKPLACE_QUICKCHAT: "source:workchat:quickchat",
        WORKPLACE_SIGNUP_PAGE_ADMIN_INVITE: "source:workplace:signup_page_admin_invite",
        WORKPLACE_APPROVALS: "source:workplace:approvals",
        WORKPLACE_TEAMWORK_CALL: "source:workplace:teamwork_call",
        WORKPLACE_TEAMWORK_TEST: "source:workplace:test",
        WORKPLACE_TEAMWORK_GROUP_POST: "source:workplace:group_post",
        CREATOR_STUDIO: "source:creator_studio",
        FB_GROUP_ADMINSHIP_SYNC: "source:fbgroup:adminship_sync",
        FB_GROUP_CHAT_MUTE_MEMBER: "source:fbgroup:mute_member",
        MESSENGER_ADS_PARTIAL_AUTOMATED_REMINDER: "source:ads_partial_automated:reminder",
        COMMUNITY_HELP_LISTING: "source:community_help_listing",
        FUNDRAISER_MESSAGE_BLAST: "source:fundraiser_message_blast",
        MENTORSHIP: "source:mentorship",
        MENTORSHIP_DISCUSSION_TOPIC: "source:mentorship_discussion_topic",
        MENTORSHIP_OUTREACH: "source:mentorship_outreach",
        VOLUNTEERING_ORGANIZER_REACHOUT: "source:volunteering_organizer_reachout",
        VOD_CONVERSATION: "source:vod_conversation",
        LOCAL_SEARCH_SERVICES: "source:local_search_services",
        YOUTH_VAULT: "source:youth_vault",
        MESSENGER_KIDS: "source:messenger_kids",
        MESSENGER_KIDS_ACTIVITY: "source:messenger_kids:activity",
        STORY_REPLY: "source:story_reply",
        LOCAL_DEV_PLATFORM: "source:local_dev_platform",
        INSTAGRAM_DIRECT: "source:instagram_direct",
        WA_MSGR_INTEROP: "source:wa-msgr-interop",
        C4G_CURRENT_GROUP_MEMBERS_ENTINTEGRITY: "source:c4g_current_group_members_entintegrity",
        CHATROOM: "source:chatroom",
        FB_GROUPS: "source:fb_groups",
        FB_INBOX: "source:messaging_inbox_in_blue",
        FB_JOINABLE_VIDEO_CHATS: "source:fb_joinable_video_chats",
        FB_PAGE: "source:fb_page",
        FB_PROFILE: "source:fb_profile",
        FB_STORY: "source:fb_story",
        FB_TOP_OF_FEED_UNIT: "source:fb_top_of_feed_unit",
        FEED: "source:feed",
        MIB_NOTIFICATION: "source:mib_notification",
        KOTOTORO: "source:kototoro",
        SHARESHEET: "source:sharesheet",
        UFI: "source:ufi",
        ROOMS_INVITE: "source:rooms_invite",
        FRIENDS_HOME: "source:friends_home",
        FRIENDS_HOME_SENDER_SIDE_POST_ACCEPT: "source:friends_home:sender_side_post_accept",
        NPE_WHALE: "source:npe_whale",
        NPE_POUTINE: "source:npe_poutine",
        NPE_HOBBI: "source:npe_hobbi",
        SHOPS_XMA_DOGFOODING: "source:shops_xma_dogfooding",
        CHAT_FOR_ROOM: "source:chat_for_room",
        WORK_AUTOMATION: "source:work_automation",
        WORK_ROOM_INCALL_CHAT: "source:work_room_incall_chat",
        MESSENGER_ROOM_INCALL_CHAT: "source:messenger_room_incall_chat",
        SECURITY_ACADEMY_BOT: "source:security_academy_bot",
        VR_MESSENGER: "source:vr_messenger",
        PRODUCT_PICKER: "product_picker"
    });
    e.exports = a
}
), null);
__d("MessagingGenericAdminTextType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        ALOHA_AUTOCONNECT_INVITED: "aloha_autoconnect_invited",
        ALOHA_CONTACT_ADDED: "aloha_contact_added",
        ALOHA_CONTACT_ADDED_TO_ALOHA_PROXY_USER: "aloha_contact_added_to_aloha_proxy_user",
        ALOHA_CONTACT_REMOVED: "aloha_contact_removed",
        ALOHA_INVITE_OWNER_ACCEPT: "aloha_invite_owner_accept",
        ALOHA_INVITE_OWNER_DECLINE: "aloha_invite_owner_decline",
        ALOHA_MEDIA_ADDED: "aloha_media_added",
        ALOHA_MEDIA_SENT: "aloha_media_sent",
        ALOHA_VISUAL_MEDIA_SENT: "aloha_visual_media_sent",
        ALOHA_OWNER_INVITED: "aloha_owner_invited",
        ALOHA_PROXY_USER_NAME_SET: "aloha_proxy_user_name_set",
        ALOHA_PROXY_USER_PROFILE_PHOTO_SET: "aloha_proxy_user_profile_photo_set",
        ALOHA_WIFI_CREDENTIALS_SET: "aloha_wifi_credentials_set",
        ALOHA_USER_JOINED_CALL_ON_ALOHA: "aloha_user_joined_call_on_aloha",
        ALOHA_CALL_ENDED_ON_ALOHA: "aloha_call_ended_on_aloha",
        ALOHA_CALL_INVITE: "aloha_call_invite",
        BCMP_RESPOND_TO_PROJECT_BRIEF: "bcmp_respond_to_project_brief",
        BCMP_BRAND_INITIATED_MESSAGE: "bcmp_brand_initiated_message",
        MADE_POLL_VOTE: "made_poll_vote",
        GROUP_POLL: "group_poll",
        ROLL_CALL_STICKER: "roll_call_sticker",
        GENERIC_NEW_CONNECTION: "generic_new_connection",
        CONFIRM_FRIEND_REQUEST: "confirm_friend_request",
        THREAD_CUSTOMIZATION_UPSELL: "thread_customization_upsell",
        PHONE_CONTACT_UPLOAD: "phone_contact_upload",
        RELATIONSHIP_CREATED: "relationship_created",
        ACCEPT_PENDING_THREAD: "accept_pending_thread",
        RAMP_UP_WELCOME_MESSAGE: "ramp_up_welcome_message",
        CHANGE_THREAD_THEME: "change_thread_theme",
        CHANGE_THREAD_ICON: "change_thread_icon",
        GROUP_THREAD_CREATED: "group_thread_created",
        THREAD_EPHEMERAL_SEND_MODE: "thread_ephemeral_send_mode",
        INVITE_ACCEPTED: "invite_accepted",
        MESSENGER_INVITE_SENT: "messenger_invite_sent",
        TURN_ON_PUSH: "turn_on_push",
        JOURNEY_PROMPT_COLOR: "journey_prompt_color",
        JOURNEY_PROMPT_LIKE: "journey_prompt_like",
        JOURNEY_PROMPT_NICKNAME: "journey_prompt_nickname",
        JOURNEY_PROMPT_SETUP: "journey_prompt_setup",
        CHANGE_THREAD_NICKNAME: "change_thread_nickname",
        NOTIFY_GROUP_MAYORSHIP: "notify_group_mayorship",
        PROMPT_GROUP_MAYORSHIP_CUSTOMIZATION: "prompt_group_mayorship_customization",
        MESSAGE_COUNT_MILESTONE_MESSAGE: "message_count_milestone_message",
        BOT_THREAD_SUBSCRIPTION: "bot_thread_subscription",
        RTC_CALL_LOG: "rtc_call_log",
        RTC_PAGE_CALLBACK: "rtc_page_callback",
        RTC_INSTANT_VIDEO_LIFECYCLE: "rtc_instant_video_lifecycle",
        JOURNEY_PROMPT_BOT: "journey_prompt_bot",
        RIDE_ORDERED_MESSAGE: "ride_ordered_message",
        DESTINATION_ETA_MESSAGE: "destination_eta_message",
        RIDE_ARRIVED_MESSAGE: "ride_arrived_message",
        JOURNEY_PROMPT_NEW_SETUP: "journey_prompt_new_setup",
        LIGHTWEIGHT_EVENT_CREATE: "lightweight_event_create",
        LIGHTWEIGHT_EVENT_DELETE: "lightweight_event_delete",
        LIGHTWEIGHT_EVENT_NOTIFY: "lightweight_event_notify",
        LIGHTWEIGHT_EVENT_NOTIFY_BEFORE_EVENT: "lightweight_event_notify_before_event",
        LIGHTWEIGHT_EVENT_RSVP: "lightweight_event_rsvp",
        LIGHTWEIGHT_EVENT_UPDATE: "lightweight_event_update",
        LIGHTWEIGHT_EVENT_UPDATE_LOCATION: "lightweight_event_update_location",
        LIGHTWEIGHT_EVENT_UPDATE_TIME: "lightweight_event_update_time",
        LIGHTWEIGHT_EVENT_UPDATE_TITLE: "lightweight_event_update_title",
        SAFETY_LOCATION_REQUEST_SENT: "safety_location_request_sent",
        SAFETY_LOCATION_REQUEST_RESPONDED: "safety_location_request_responded",
        SAFETY_LOCATION_REQUEST_DENIED: "safety_location_request_denied",
        AD_MANAGE_MESSAGE: "ad_manage_message",
        ADMIN_TEXT_WITH_LINK: "admin_text_with_link",
        AD_REPLY_MESSAGE: "ad_reply_message",
        TAGGED_PHOTO: "tagged_photo",
        GAME_SCORE: "game_score",
        INSTANT_GAME_UPDATE: "instant_game_update",
        INSTANT_GAME_BOT_INTRO: "instant_game_bot_intro",
        INSTANT_GAME_BOT_FEEDBACK: "instant_game_bot_feedback",
        INSTANT_GAME_WORLD_CUP_INTRO: "intant_games_world_cup_intro",
        INSTANT_GAME_CUSTOM_UPDATE_NUX_ADMIN_MESSAGE: "instant_game_custom_update_nux_admin_message",
        INSTANT_GAME_OFFLINE_MATCH_INTRO: "instant_game_offline_match_intro",
        INSTANT_GAME_TOURNAMENT_REMINDER: "instant_game_tournament_reminder",
        MEDIA_SUBSCRIPTION_MANAGE: "media_subscription_manage",
        M_AI_SURVEY: "m_ai_survey",
        PHONE_NUMBER_LOOKUP_NOTICE: "phone_number_lookup_notice",
        MESSENGER_PRECHECKED_PLUGIN: "messenger_prechecked_plugin",
        MESSENGER_THREAD_RESURRECTION_NOTICE: "messenger_thread_resurrection_notice",
        MESSENGER_ENTRY_BY_MDOTME_LINK_WITH_REF: "messenger_entry_by_mdotme_link_with_ref",
        ADD_CONTACT: "add_contact",
        PRODUCT_INVOICE_RECEIPT_REJECTED: "product_invoice_receipt_rejected",
        PRODUCT_INVOICE_PAID: "product_invoice_paid",
        PRODUCT_INVOICE_VOIDED: "product_invoice_voided",
        PRODUCT_INVOICE_SHIPPED: "product_invoice_shipped",
        PRODUCT_INVOICE_PAYMENT_EXPIRED: "product_invoice_payment_expired",
        PRODUCT_INVOICE_RECEIPT_UPLOADED: "product_invoice_receipt_uploaded",
        PRODUCT_INVOICE_PAYMENT_PROCESSING: "product_invoice_payment_processing",
        PRODUCT_INVOICE_PAYMENT_FAILED: "product_invoice_payment_failed",
        PRODUCT_INVOICE_SHIPPING_UPDATE: "product_invoice_shipping_update",
        PRODUCT_INVOICE_STATUS_UPDATE: "product_invoice_status_update",
        SELLER_NOT_ONBOARDED_FOR_PAYMENTS: "seller_not_onboarded_for_payments",
        CHANGE_JOINABLE_SETTING: "change_joinable_setting",
        CHANGE_THREAD_ADMINS: "change_thread_admins",
        CHANGE_THREAD_APPROVAL_MODE: "change_thread_approval_mode",
        CAPY_SESSION_BEGIN: "capy_session_begin",
        CAPY_SESSION_BOT_BEGIN: "capy_session_bot_begin",
        CAPY_SESSION_END: "capy_session_end",
        CAPY_AGENT_JOIN: "capy_agent_join",
        CAPY_AGENT_DUMPED: "capy_agent_dumped",
        CAPY_SESSION_UNAVAILABLE: "capy_session_unavailable",
        CAPY_SESSION_WAIT_TIME: "capy_session_wait_time",
        GROUP_SMS_PARTICIPANT_JOINED: "group_sms_participant_joined",
        GROUP_SMS_PARTICIPANT_CAPPED: "group_sms_participant_capped",
        SMS_PHONE_NUMBER_CHECK: "sms_phone_number_check",
        MESSENGER_BOT_REVIEW_SENT: "messenger_bot_review_sent",
        MESSENGER_CODE_SCAN: "messenger_code_scan",
        MESSENGER_LIVECHAT_PLUGIN_OPEN: "messenger_livechat_plugin_open",
        MESSENGER_LIVECHAT_PLUGIN_GUEST_END_CHAT: "messenger_livechat_plugin_guest_end_chat",
        MESSENGER_LIVECHAT_PLUGIN_GUEST_START_CHAT: "messenger_livechat_plugin_guest_start_chat",
        MN_ACCOUNT_LINKING_TEXT: "mn_account_linking_text",
        MN_ACCOUNT_UNLINKING_TEXT: "mn_account_unlinking_text",
        MN_ACCOUNT_FORCED_UNLINKING_TEXT: "mn_account_forced_unlinking_text",
        MN_REF_SEND_TEXT: "mn_ref_send_text",
        ADS_WELCOME_MSG: "ads_welcome_msg",
        THREAD_JOINABLE_PROMOTION_TEXT: "thread_joinable_promotion_text",
        PAGES_PLATFORM_REQUEST_TEXT: "pages_platform_request_text",
        MESSENGER_NEW_USER_GET_STARTED: "messenger_new_user_get_started",
        SMS_PHONE_NUMBER_TOGGLE: "sms_phone_number_toggle",
        PAGES_PLATFORM_CREATE_APPOINTMENT: "Pages_Platform_create_appointment",
        INTERNAL_CAREER_JOBSY_REACHOUT_CONNECTED: "internal_career_jobsy_reachout_connected",
        JOINABLE_GROUP_THREAD_CREATED: "joinable_group_thread_created",
        JOINABLE_ROOM_CREATED_WITH_CO_CREATORS: "joinable_room_created_with_co_creators",
        PAGES_PLATFORM_ACCEPT_APPOINTMENT: "pages_platform_accept_appointment",
        PAGES_PLATFORM_REFERRAL_CONFIRMED_APPOINTMENT: "pages_platform_referral_confirmed_appointment",
        PAGES_PLATFORM_DECLINE_APPOINTMENT: "pages_platform_decline_appointment",
        PAGES_PLATFORM_USER_CANCEL: "pages_platform_user_cancel",
        PAGES_PLATFORM_ADMIN_CANCEL: "pages_platform_admin_cancel",
        MESSENGER_OMNIM_CREATE_FLOW: "messenger_omnim_create_flow",
        MESSENGER_OMNIM_UPDATE_FLOW: "messenger_omnim_update_flow",
        MESSENGER_OMNIM_UPDATE_FLOW_STATE: "messenger_omnim_update_flow_state",
        MESSENGER_GROUP_DESCRITPION_UPDATE: "messenger_group_description_update",
        MESSENGER_GROUP_DESCRIPTION_UPDATE_V2: "messenger_group_description_update_v2",
        MESSENGER_EXTENSION_ADD_CART: "messenger_extension_add_cart",
        MESSENGER_EXTENSION_ADD_FAVORITE: "messenger_extension_add_favorite",
        MESSENGER_AD_CONTEXT: "messenger_ad_context",
        PAGES_PLATFORM_APPOINTMENT_REMINDER: "pages_platform_appointment_reminder",
        PAGES_PLATFORM_ADMIN_DECLINE: "pages_platform_admin_decline",
        POKE_RECEIVED: "poke_received",
        MESSENGER_STATION_SUBSCRIPTION: "messenger_station_subscription",
        MESSENGER_USER_ALSO_ON_MESSENGER: "messenger_user_also_on_messenger",
        MESSENGER_INBOX2_BIRTHDAY_BUMP: "messenger_inbox2_birthday_bump",
        MESSENGER_RESPOND_REMINDER_CONFIRMATION: "messenger_respond_reminder_confirmation",
        MESSENGER_RESPOND_REMINDER: "messenger_respond_reminder",
        MESSENGER_RESPOND_REMINDER_USER_CANCEL: "messenger_respond_reminder_user_cancel",
        MESSENGER_RESPOND_REMINDER_CANCEL_SUGGESTION: "messenger_respond_reminder_cancel_suggestion",
        STARTED_SHARING_VIDEO: "started_sharing_video",
        LIVE_VIDEO_CHAT: "live_video_chat",
        PARTICIPANT_JOINED_GROUP_CALL: "participant_joined_group_call",
        MESSENGER_ONLY_PHONE_JOINED_WITH_NEW_ACCOUNT: "messenger_only_phone_joined_with_new_account",
        PAGES_COMMERCE_PAYMENT_ENABLED: "pages_commerce_payment_enabled",
        GROUP_PAYMENT_REQUEST: "group_payment_request",
        P2P_CALL_ESCALATED_TO_GROUP_CALL: "p2p_call_escalated_to_group_call",
        INVITED_TO_ESCALATED_P2P_CALL: "invited_to_escalated_p2p_call",
        EVENT_UPCOMING: "event_upcoming",
        PAGES_VISITOR_POST_SEND_MESSAGE_UPSELL: "pages_visitor_post_send_message_upsell",
        PAGES_LOW_MESSAGE_RESPONSE_RATE: "pages_low_message_response_rate",
        PAGES_START_CALL: "pages_start_call",
        PARTIES_INVITE: "parties_invite",
        WORK_INVITE_CLAIMED: "work_invite_claimed",
        WORK_BOT_INSTALLED: "work_bot_installed",
        WORK_NEW_MULTI_COMPANY_CHAT: "work_new_multi_company_chat",
        PARTIAL_AUTOMATED_FEEDBACK: "partial_automated_feedback",
        P2P_PAYMENT_REQUEST_REMINDER: "p2p_payment_request_reminder",
        PHOTO_TAG_BUMP: "photo_tag_bump",
        MESSENGER_CALL_UPGRADE_LEGACY_CLIENT: "messenger_call_upgrade_legacy_client",
        DIRECTED_WALL_POST: "directed_wall_post",
        MESSENGER_CALL_LOG: "messenger_call_log",
        P2P_PAYMENT_MONEY_RAIN_GAME_ENTRY_POINT: "p2p_payment_money_rain_game_entry_point",
        MESSENGER_MONTAGE_MENTIONS: "messenger_montage_mentions",
        PAGES_MESSAGING_BLOCK_WORDS: "pages_messaging_block_words",
        SHIPPO_TRACKING_UPDATES: "shippo_tracking_updates",
        NEO_APPROVED_CONNECTION_ADDED: "neo_approved_connection_added",
        NEO_APPROVED_USERNAME: "neo_approved_username",
        NEO_PARENT_PROXY_CREATED: "neo_parent_proxy_created",
        NEO_PARENT_PROXY_FORWARDED: "neo_parent_proxy_forwarded",
        NEO_PARENT_UNLOCK_STICKER: "neo_parent_unlock_sticker",
        CHANGE_FAVORITE_COLOR: "change_favorite_color",
        VAULT_NEW_FRIEND: "vault_new_friend",
        VAULT_DELETE_THREAD: "vault_delete_thread",
        VAULT_SCREENSHOT_THREAD: "vault_screenshot_thread",
        MARKETPLACE_ITEM_CHANGED: "marketplace_item_changed",
        MARKETPLACE_SERVICES_INITIAL_MESSAGE_CONTEXT: "marketplace_services_initial_message_context",
        LINK_CTA: "link_cta",
        BUSINESS_FEEDBACK_FORM_CONFIRMATION: "business_feedback_form_confirmation",
        BUSINESS_FEEDBACK_FORM_EXPIRING: "business_feedback_form_expiring",
        SERVICES_VERTICAL_REDEEMED_REFERRAL: "services_vertical_redeemed_referral",
        SERVICES_VERTICAL_OPT_OUT_REQUESTS: "services_vertical_opt_out_requests",
        SERVICES_VERTICAL_OPT_OUT_REQUESTS_SUCCESS: "services_vertical_opt_out_requests_success",
        SERVICES_VERTICAL_LEAD_GEN_SURVEY: "services_vertical_lead_gen_survey",
        SERVICES_VERTICAL_LEAD_GEN_SURVEY_EDIT: "services_vertical_lead_gen_survey_edit",
        PAGES_MARK_AS_PAID: "pages_mark_as_paid",
        MIGRATED_TO_WORKPLACE: "migrated_to_workplace",
        MESSENGER_GROUP_EVENT_STATUS_UPDATE: "messenger_group_event_status_update",
        NEO_APPROVED_USER_REMOVED_FROM_GROUP: "neo_approved_user_removed_from_group",
        LIVE_CHAT_SUPPORT_AGENT_JOIN: "live_chat_support_agent_join",
        LIVE_CHAT_SUPPORT_SESSION_BEGIN: "live_chat_support_session_begin",
        LIVE_CHAT_SUPPORT_SESSION_END: "live_chat_support_session_end",
        MONTAGE_DIRECT_KEEP: "montage_direct_keep",
        MONTAGE_DIRECT_EXPIRE: "montage_direct_expire",
        CHSBOT_CONVERSATION_ENDED: "chsbot_conversation_ended",
        CHSBOT_LIVE_CHAT_SUPPORT_AGENT_BEGIN: "chsbot_live_chat_support_agent_begin",
        CHSBOT_LIVE_CHAT_SUPPORT_AGENT_END: "chsbot_live_chat_support_agent_end",
        CHSBOT_LIVE_PHONE_SUPPORT_AGENT_CALLING: "chsbot_live_phone_support_agent_calling",
        CHSBOT_SUPPORT_REQUESTED: "chsbot_support_requested",
        SUPPORT_BOT_SESSION_AGENT_JOIN: "support_bot_session_agent_join",
        SUPPORT_BOT_SESSION_AGENT_LEAVE: "support_bot_session_agent_leave",
        SUPPORT_BOT_SESSION_END: "support_bot_session_end",
        SUPPORT_BOT_CALL_BEGIN: "support_bot_call_begin",
        SUPPORT_BOT_CALL_END: "support_bot_call_end",
        MESSENGER_SUBSCRIBE_TO_UPDATES: "messenger_subscribe_to_updates",
        MESSENGER_UNSUBSCRIBE_FROM_UPDATES: "messenger_unsubscribe_from_updates",
        MESSENGER_BLOCK_MESSAGES: "messenger_block_messages",
        MESSENGER_UNBLOCK_MESSAGES: "messenger_unblock_messages",
        MESSENGER_TURN_ON_MESSAGES: "messenger_turn_on_messages",
        MESSENGER_TURN_OFF_MESSAGES: "messenger_turn_off_messages",
        THANKS_FOR_SHARING_MESSAGE_CONTEXT: "thanks_for_sharing_message_context",
        GROUP_ADMIN_MODEL_NUX: "group_admin_model_nux",
        MESSENGER_PAYMENT_INCENTIVE_INFO: "messenger_payment_incentive_info",
        MESSENGER_PLATFORM_PERSONA: "messenger_platform_persona",
        MESSENGER_GROUP_SYNC_OPT_IN: "messenger_group_sync_opt_in",
        MESSENGER_GROUP_SYNC_OPT_OUT: "messenger_group_sync_opt_out",
        MENTORSHIP_MATCH: "mentorship_match",
        MENTORSHIP_PROGRAM_MATCH: "mentorship_program_match",
        MENTORSHIP_PROGRAM_CONTINUE: "mentorship_program_continue",
        MENTORSHIP_PROGRAM_LEAVE: "mentorship_program_leave",
        MENTORSHIP_PROGRAM_LEAVE_PROMPT: "mentorship_program_leave_prompt",
        MENTORSHIP_CURRICULUM_STEP: "mentorship_curriculum_step",
        MENTORSHIP_DISCUSSION_TOPIC_SET_PROMPT: "mentorship_discussion_topic_set_prompt",
        MENTORSHIP_CHECK_IN_REMINDER: "mentorship_check_in_reminder",
        MENTORSHIP_DISCLAIMER: "mentorship_disclaimer",
        PAGES_CALL_DEFLECTION_UPSELL: "pages_call_deflection_upsell",
        RTC_PHOTOBOOTH: "rtc_photobooth",
        DELAYED_PHONE_NUMBER_MATCH: "delayed_phone_number_match",
        AUTOMATIC_TRANSLATION_ENABLED: "automatic_translation_enabled",
        AUTOMATIC_TRANSLATION_AUTO_ENABLED: "automatic_translation_auto_enabled",
        AUTOMATIC_TRANSLATION_DISABLED: "automatic_translation_disabled",
        AUTOMATIC_TRANSCRIPTION_ENABLED: "automatic_transcription_enabled",
        AUTOMATIC_TRANSCRIPTION_DISABLED: "automatic_transcription_disabled",
        MESSENGER_ROOM_MIGRATION: "messenger_room_migration",
        PAGE_ADMIN_RESPONSIVENESS_REMINDER: "page_admin_responsiveness_reminder",
        MESSENGER_GROWTH_GENERIC_ADMIN_TEXT: "messenger_growth_generic_admin_text",
        MESSENGER_TALK_TO_YOUR_MOM_REMINDER: "messenger_talk_to_your_mom_reminder",
        PAYMENT_INCENTIVE_RECEIVED: "payment_incentive_received",
        PAGES_THREAD_REMINDER: "pages_thread_reminder",
        MESSENGER_PLATFORM_PERSONA_LEAVE_THREAD: "messenger_platform_persona_leave_thread",
        STORY_REPLY_CONTEXT: "story_reply_context",
        PAGES_AUTOMATED_RESPONSE_RECOMMENDATION: "pages_automated_response_recommendation",
        PAGES_AUTOMATED_RESPONSE_SMART_REPLY: "pages_automated_response_smart_reply",
        PAGES_AUTOMATED_RESPONSE_JOB_APPLICATION: "pages_automated_response_job_APPLICATION",
        MESSENGER_ICEBREAKER_VOTE_CAST: "messenger_icebreaker_vote_cast",
        PARTIES_PRESENCE: "parties_presence",
        PAGE_THREAD_ADMIN_ASSIGNMENT_TEXT: "page_thread_admin_assignment_text",
        RTC_INSTANT_ACTIVITY_LIFECYCLE: "rtc_instant_activity_lifecycle",
        RTC_VIDEO_CHAT_LINK_LIFECYCLE: "rtc_video_chat_link_lifecycle",
        RTC_REDUCE_CALL_QUALITY: "rtc_reduce_call_quality",
        SHIBA_MOCK_BOT_RESTART_CHAT_TEXT: "shiba_mock_bot_restart_chat_text",
        MARKETPLACE_RENTALS_INITIAL_MESSAGE: "marketplace_rentals_initial_message",
        MARKETPLACE_RENTALS_SENDER_INFO: "marketplace_rentals_sender_info",
        PAGES_MARK_AS_PAID_NEW: "pages_mark_as_paid_new",
        MESSENGER_BUSINESS_REPORT_SPAM: "messenger_business_report_spam",
        MESSENGER_BUSINESS_REPORT_INAPPROPRIATE: "messenger_business_report_inappropriate",
        MESSENGER_BUSINESS_REPORT_OTHER_ABUSE: "messenger_business_report_other_abuse",
        FRIENDED_IN_MESSENGER: "friended_in_messenger",
        MARKETPLACE_REPLY_REMINDER: "marketplace_reply_reminder",
        VOD_CONVERSATION_SEND_MESSAGE: "vod_conversation_send_message",
        SENT_UNCONNECTED_MESSAGE: "sent_unconnected_message",
        MESSENGER_SHARED_WITH: "messenger_shared_with",
        PAGE_THREAD_ACTION_SYSTEM_ADD_DETAILS: "page_thread_action_system_add_details",
        PAGE_USER_MESSENGER_CONNECTED: "page_user_messenger_connected",
        FB_ONLY_BOT_TEXT: "fb_only_bot_text",
        MESSENGER_SCHOOL_CHAT_AUTO_ADD_USER: "messenger_school_chat_auto_add_user",
        LIVING_ROOM_MESSAGE: "living_room_message",
        MESSENGER_FRIENDVERSARY_SHARED_TO: "messenger_friendversary_shared_to",
        PARENT_APPROVED_NEW_FRIEND_CODE: "parent_approved_new_friend_code",
        CHAT_ENTICEMENT_JOINED: "chat_enticement_joined",
        EVENT_CONFIRMED_GOING: "event_confirmed_going",
        CHEX_ORDER_STATE_CHANGED: "chex_order_state_changed",
        TWEENS_MUTUAL_INTERESTS: "tweens_mutual_interests",
        MESSENGER_CARE_PII_PRIVACY_INTRO: "messenger_care_pii_privacy_intro",
        MESSENGER_CARE_AUTH_LINKS_REF: "messenger_care_auth_links_ref",
        MARKETPLACE_RATE_SELLER: "marketplace_rate_seller",
        GEMSTONE_THREAD_CREATION: "gemstone_thread_creation",
        GEMSTONE_FB_MESSENGER_THREAD_CREATION: "gemstone_fb_messenger_thread_creation",
        GEMSTONE_CONTACT_SHARE_UPSELL: "gemstone_contact_share_upsell",
        MNF_LIGHTWEIGHT_LIKE: "mnf_lightweight_like",
        WORKCHAT_REMINDER_ADMIN_TEXT: "workchat_reminder_admin_text",
        WORKCHAT_REMINDER_LINK_CTA: "workchat_reminder_link_cta",
        WORKCHAT_RECIPIENT_ON_DND_WARNING: "workchat_recipient_on_dnd_warning",
        WORKCHAT_PIN_MESSAGE_ACTION: "workchat_pin_message_action",
        WORKCHAT_UNPIN_MESSAGE_ACTION: "workchat_unpin_message_action",
        CHATS_IN_GROUPS_PRE_MIGRATION: "chats_in_groups_pre_migration",
        CHATS_IN_GROUPS_MIGRATION: "chats_in_groups_migration",
        POST_SHARED_FROM_GROUP: "post_shared_from_group",
        WORKCHAT_ACTIVATION_WELCOME_MESSAGE: "workchat_activation_welcome_message",
        WORKCHAT_SELF_CHAT_INITIATOR: "workchat_self_chat_initiator",
        WORKCHAT_ACTIVATION_UNCLAIMED_ACCOUNT_WELCOME_MESSAGE: "workchat_activation_unclaimed_account_welcome_message",
        MARKETPLACE_ASSISTANT_SUPPORT_CASE_START: "marketplace_assistant_support_case_start",
        MARKETPLACE_ASSISTANT_SUPPORT_CASE_END: "marketplace_assistant_support_case_end",
        SECURITY_HUB_AGENT_LEFT: "security_hub_agent_left",
        SECURITY_HUB_AGENT_JOINED: "security_hub_agent_joined",
        NEO_SEND_DGG: "neo_send_dgg",
        SECURITY_HUB_AGENT_REASSIGNED: "security_hub_agent_reassigned",
        MARKETPLACE_MESSAGE_ENHANCEMENT: "marketplace_message_enhancement",
        C4G_NEW_PARTICIPANT_JOIN: "c4g_new_participant_join",
        NEO_SHARE_VIRTUAL_PET: "neo_share_virtual_pet",
        NEO_SHARE_ASYNC_GAME_SCORE: "neo_share_async_game_score",
        NEO_UPDATE_EMOJI_STATUS: "neo_update_emoji_status",
        NEO_NOTIFY_PARENT_EMOJI_STATUS: "neo_notify_parent_emoji_status",
        NEO_BEACON_QUICK_REACTION: "neo_beacon_quick_reaction",
        NEO_BEACON_QUICK_REPLY: "neo_beacon_quick_reply",
        MARKETPLACE_PROFILE_DESCRIPTION: "marketplace_profile_description",
        THREAD_THEME_DEPRECATION: "thread_theme_deprecation",
        MAKETPLACE_SELLER_REQUEST_RATING: "maketplace_seller_request_rating",
        PRODUCT_INVOICE_CREATED: "PRODUCT_INVOICE_CREATED",
        REJOINED_GROUP_THREAD_AFTER_ERROR: "rejoined_group_thread_after_error",
        IG_DIRECT_CALL_LOG: "ig_direct_call_log",
        PAYMENT_REQUEST_REMINDER: "payment_request_reminder",
        MARKETPLACE_BSG_CONTACT_SELLER: "marketplace_bsg_contact_seller",
        MARKETPLACE_TXN_QUESTION: "marketplace_txn_question",
        MARKETPLACE_BUYER_TXN_QUESTION: "marketplace_buyer_txn_question",
        WORKCHAT_DETACH_SYNCED_GROUP_CHAT: "workchat_detach_synced_group_chat",
        CHAT_PLUGIN_GUEST_EXPIRATION: "chat_plugin_guest_expiration",
        MARKETPLACE_FOLLOW_SUGGESTION: "marketplace_follow_suggestion",
        CIP_REFERRAL_MESSAGE: "cip_referral_message",
        FB_LOGIN_B2P: "fb_login_b2p",
        GROUP_STORIES_STARTER: "group_stories_starter",
        GROUP_STORIES_GROUP_POLL_VOTE: "group_stories_group_poll_vote",
        UPDATE_EVENT_RSVP: "update_event_rsvp",
        EO_SRT_HELPDESK_TECHNICIAN_JOINED: "eo_srt_helpdesk_technician_joined",
        EO_SRT_HELPDESK_TECHNICIAN_LEFT: "eo_srt_helpdesk_technician_left",
        KICKOFF_EVENT_CHAT_THREAD: "kickoff_event_chat_thread",
        COMMUNITY_CHATS_DESCRITPION_UPDATE: "community_chats_description_update",
        COMMUNITY_CHATS_THREAD_CREATION: "community_chats_thread_creation",
        MARKETPLACE_MEETING_PLAN_DELETED: "marketplace_meeting_plan_deleted",
        MARKETPLACE_COMMERCE_POST_PRIVATE_REPLY: "marketplace_commerce_post_private_reply",
        PRIVATE_REPLY_ADMIN_TEXT_LOG: "private_reply_admin_text_log",
        CHAT_PLUGIN_UPGRADE_PAGE_SIDE: "chat_plugin_upgrade_page_side",
        MARKETPLACE_DRAFT_THREAD: "marketplace_draft_thread",
        PRODUCT_INVOICE_PAYMENT_DISPUTED: "product_invoice_payment_disputed",
        SHH_MODE_SCREENSHOT: "shh_mode_screenshot",
        MESSAGING_REACHABILITY_ONE_WAY_SEND: "messaging_reachability_one_way_send",
        NEO_LINK_SHARING: "neo_link_sharing",
        MARKETPLACE_REPLY_REMINDER_1_TO_1_THREAD: "marketplace_reply_reminder_1_to_1_thread",
        MARKETPLACE_COMMENT_TO_MESSAGING: "marketplace_comment_to_messaging",
        ADULT_MINOR_INTERACTION_ONE_WAY_SEND: "adult_minor_interaction_one_way_send"
    });
    e.exports = a
}
), null);
__d("MessagingTagUtils", ["MercurySourceType", "MessagingTagConstants"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getSourceFromTags = a;
    f.getSourceTags = c;
    var g = new Set(Object.values(b("MercurySourceType")));
    function a(a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            if (g.has(c))
                return c
        }
        return "source:unknown"
    }
    function h(a) {
        for (var c = 0; c < a.length; c++) {
            var d = a[c];
            d = d.split(b("MessagingTagConstants").app_id_root);
            if (d.length > 1)
                return d[1].trim()
        }
        return null
    }
    function c(a, c) {
        var d = []
          , e = h(a);
        e && b("MessagingTagConstants").orca_app_ids.indexOf(e) !== -1 && d.push("source:messenger");
        b("MessagingTagConstants").chat_sources.indexOf(c) !== -1 && d.push("source:chat");
        b("MessagingTagConstants").email_source === c && d.push("source:email");
        b("MessagingTagConstants").mobile_sources.indexOf(c) !== -1 && d.push("source:mobile");
        a.indexOf("source:workchat:desktop") !== -1 && d.push("source:workchat:desktop");
        return d
    }
}
), null);
__d("P2PPaymentLogMessageSubtype", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        SENT_IN_GROUP: "sent_in_group",
        CANCELED_SENDER_RISK: "canceled_sender_risk",
        CANCELED_DECLINED: "canceled_declined",
        CANCELED_RECIPIENT_RISK: "canceled_recipient_risk",
        CANCELED_EXPIRED: "canceled_expired",
        CANCELED_SAME_CARD: "canceled_same_card",
        CANCELED_CUSTOMER_SERVICE: "canceled_customer_service",
        CANCELED_CHARGEBACK: "canceled_chargeback",
        CANCELED_SYSTEM_FAIL: "canceled_system_fail",
        REQUEST_CANCELED_BY_REQUESTER: "request_canceled_by_requester",
        REQUEST_DECLINED_BY_REQUESTEE: "request_declined_by_requestee",
        REQUEST_EXPIRED: "request_expired",
        REQUEST_REMINDER: "request_reminder",
        MONEY_RAIN_GAME_ENTRY_POINT: "money_rain_game_entry_point"
    });
    e.exports = a
}
), null);
__d("StoryAttachmentStyle", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        FALLBACK: "fallback",
        SHARE: "share",
        SHARE_MEDIUM: "share_medium",
        SHARE_SEVERE: "share_severe",
        SHARE_PORTRAIT: "share_portrait",
        OG_COMPOSER_SIMPLE: "og_composer_simple",
        SPORTS_MATCHUP: "sports_matchup",
        SHARE_LARGE_IMAGE: "share_large_image",
        PHOTO: "photo",
        COVER_PHOTO: "cover_photo",
        INSPIRATION_PHOTO: "inspiration_photo",
        ALBUM: "album",
        NEW_ALBUM: "new_album",
        COUPON: "coupon",
        QUESTION: "question",
        ANSWER: "answer",
        OPTION: "option",
        GALLERY: "gallery",
        STREAM_PUBLISH: "stream_publish",
        MUSIC_AGGREGATION: "music_aggregation",
        ITEM_LIST: "list",
        HIGH_SCORE: "high_score",
        SCORE_LEADERBOARD: "score_leaderboard",
        FRIEND_LIST: "friend_list",
        POPULAR_OBJECTS: "popular_objects",
        AVATAR_LIST: "avatar_list",
        AVATAR: "avatar",
        AVATAR_WITH_VIDEO: "avatar_with_video",
        EVENT: "event",
        CANCELED_EVENT: "canceled_event",
        MINUTIAE_EVENT: "minutiae_event",
        EXPERIENCE: "experience",
        LIFE_EVENT: "life_event",
        GIFT: "gift",
        IMAGE_SHARE: "image_share",
        ANIMATED_IMAGE_SHARE: "animated_image_share",
        ANIMATED_IMAGE_AUTOPLAY: "animated_image_autoplay",
        ANIMATED_IMAGE_VIDEO: "animated_image_video",
        ANIMATED_IMAGE_VIDEO_AUTOPLAY: "animated_image_video_autoplay",
        NOTE: "note",
        TOPIC: "topic",
        TOPIC_FOLLOWING_TOPIC: "topic_following_topic",
        FILE_UPLOAD: "file_upload",
        FOLDER: "folder",
        NOTIFICATION_TARGET: "notification_target",
        UNAVAILABLE: "unavailable",
        PAGE_RECOMMENDATION: "page_recommendation",
        PAGE_VIDEO_PLAYLIST: "page_video_playlist",
        VIDEO: "video",
        VIDEO_INLINE: "video_inline",
        VIDEO_AUTOPLAY: "video_autoplay",
        VIDEO_SHARE: "video_share",
        VIDEO_SHARE_HIGHLIGHTED: "video_share_highlighted",
        VIDEO_SHARE_YOUTUBE: "video_share_youtube",
        VIDEO_DIRECT_RESPONSE: "video_direct_response",
        VIDEO_DIRECT_RESPONSE_AUTOPLAY: "video_direct_response_autoplay",
        VIDEO_SHOP: "video_shop",
        INSPIRATION_VIDEO: "inspiration_video",
        MULTI_VIDEOS_STITCHED: "multi_videos_stitched",
        MAP: "map",
        OG_MAP: "og_map",
        PRODUCT: "product",
        EXTERNAL_PRODUCT: "external_product",
        FITNESS_COURSE: "fitness_course",
        APPLICATION: "application",
        STICKER: "sticker",
        EXTERNAL_OG_PRODUCT: "external_og_product",
        TRAVEL_LOG: "travel_log",
        MULTI_SHARE: "multi_share",
        MULTI_SHARE_NO_END_CARD: "multi_share_no_end_card",
        MULTI_SHARE_NON_LINK_VIDEO: "multi_share_non_link_video",
        MULTI_SHARE_SEARCH_END_CARD: "multi_share_search_end_card",
        MULTI_SHARE_FIXED_TEXT: "multi_share_fixed_text",
        MULTI_SHARE_CAROUSEL_FREE_SCROLL: "multi_share_carousel_free_scroll",
        MULTI_SHARE_CAROUSEL_FREE_SCROLL_SNAP_CENTER: "multi_share_carousel_free_scroll_snap_center",
        MULTI_SHARE_LARGER_CAROUSEL: "multi_share_larger_carousel",
        MULTI_SHARE_WITH_INSTANT_EXPERIENCE: "multi_share_with_instant_experience",
        MULTI_SHARE_WITH_PROMO_CARD: "multi_share_with_promo_card",
        YEAR_IN_REVIEW: "year_in_review",
        AVATAR_LARGE_COVER: "avatar_large_cover",
        COMMERCE_PRODUCT_ITEM: "commerce_product_item",
        COMMERCE_STORE: "commerce_store",
        THIRD_PARTY_PHOTO: "third_party_photo",
        PROMPT: "prompt",
        BIRTHDAY: "birthday",
        BIRTHDAY_PERCEPTICONS: "birthday_percepticons",
        DISCUSSION_CONVERSATION: "discussion_conversation",
        DISCUSSION_COMMENT: "discussion_comment",
        GROUP_SELL_PRODUCT_ITEM: "group_sell_product_item",
        GROUP_SELL_PRODUCT_ITEM_MARK_AS_SOLD: "group_sell_mark_as_sold",
        GAMETIME: "gametime",
        GAMETIME_LEAGUE: "gametime_league",
        GAMETIME_PLAY: "gametime_play",
        GROUP_REPORTED_POST_QUEUE: "group_reported_post_queue",
        GROUP_PENDING_POST_QUEUE: "group_pending_post_queue",
        GROUP_JOIN_REQUEST_QUEUE: "group_join_request_queue",
        GREETING_CARD: "greeting_card",
        LEAD_GEN: "lead_gen",
        ATTACHED_STORY: "attached_story",
        POST_CHANNEL: "post_channel",
        TEXT_FOR_COLLAGE: "text_for_collage",
        SOUVENIR: "souvenir",
        SLIDESHOW: "slideshow",
        ORION: "orion",
        ORION_REQUEST: "orion_request",
        P2P_PAYMENT: "p2p_payment",
        P2P_SERVER_BUBBLE: "p2p_server_bubble",
        INSTANT_ARTICLE: "instant_article",
        MOMENTS_APP_INVITATION: "moments_app_invitation",
        MOMENTS_APP_PHOTO_REQUEST: "moments_app_photo_request",
        RIDE_ORDERED: "ride_ordered",
        RIDE_RECEIPT: "ride_receipt",
        BUSINESS_MESSAGE_ITEMS: "business_message_items",
        RETAIL_CANCELLATION: "retail_cancellation",
        RETAIL_PROMOTION: "retail_promotion",
        RETAIL_ITEM: "retail_item",
        RETAIL_NOW_IN_STOCK: "retail_now_in_stock",
        RETAIL_RECEIPT: "retail_receipt",
        RETAIL_SHIPMENT: "retail_shipment",
        RETAIL_SHIPMENT_FOR_SUPPORTED_CARRIER: "retail_shipment_for_supported_carrier",
        RETAIL_SHIPMENT_FOR_UNSUPPORTED_CARRIER: "retail_shipment_for_unsupported_carrier",
        RETAIL_SHIPMENT_TRACKING_EVENT: "retail_shipment_tracking_event",
        RETAIL_SHIPMENT_TRACKING_EVENT_ETA: "retail_shipment_tracking_event_eta",
        RETAIL_SHIPMENT_TRACKING_EVENT_IN_TRANSIT: "retail_shipment_tracking_event_in_transit",
        RETAIL_SHIPMENT_TRACKING_EVENT_OUT_FOR_DELIVERY: "retail_shipment_tracking_event_out_for_delivery",
        RETAIL_SHIPMENT_TRACKING_EVENT_DELAYED: "retail_shipment_tracking_event_delayed",
        RETAIL_SHIPMENT_TRACKING_EVENT_DELIVERED: "retail_shipment_tracking_event_delivered",
        SURVEY: "survey",
        MESSAGE_LOCATION: "message_location",
        GROUP_ADD_MEMBERS: "group_add_memebers",
        GROUP_MEMBER_ADDED: "group_member_added",
        RTC_CALL_LOG: "rtc_call_log",
        JOINABLE_CALL: "joinable_call",
        EVENTS_PENDING_POST_QUEUE: "events_pending_post_queue",
        EVENT_CALENDAR: "event_calendar",
        FACEPILE: "facepile",
        ATTRIBUTED_SHARE: "attributed_share",
        VIDEO_CINEMAGRAPH: "video_cinemagraph",
        LOCAL_CONTEXT_SHARE: "local_context_share",
        H_SCROLL: "h_scroll",
        EGO_HSCROLL: "ego_hscroll",
        MEDIA_QUESTION: "media_question",
        RICH_MEDIA: "rich_media",
        RICH_MEDIA_COLLECTION: "rich_media_collection",
        SQUARE_IMAGE_SHARE: "square_image_share",
        RETAIL_AGENT_ITEM_SUGGESTION: "retail_agent_item_suggestion",
        RETAIL_AGENT_ITEM_RECEIPT: "retail_agent_item_receipt",
        NOTE_COMPOSED: "note_composed",
        AVATAR_WITH_BIRTHDAY: "avatar_with_birthday",
        AIRLINE_FLIGHT_RESCHEDULE_UPDATE_BUBBLE: "airline_flight_reschedule_update_bubble",
        AIRLINE_CONFIRMATION: "airline_confirmation",
        AIRLINE_CHECK_IN: "airline_check_in",
        AIRLINE_BOARDING_PASS: "airline_boarding_pass",
        AIRLINE_FLIGHT_RESCHEDULE_UPDATE: "airline_flight_reschedule_update",
        LIGHTBOX_VIDEO: "lightbox_video",
        GLOBALLY_DELETED_MESSAGE_PLACEHOLDER: "globally_deleted_message_placeholder",
        GENIE_MESSAGE: "genie_message",
        MOVIE_BOT_MOVIE_LIST: "movie_bot_movie_list",
        MOVIE_BOT_MOVIE_SHOWTIME_LIST: "movie_bot_movie_showtime_list",
        GROUPSMASH_MEDIA: "groupsmash_media",
        AVATAR_WITH_EGO_ACTION: "avatar_with_ego_action",
        EVENT_TICKET_DEPRECATED: "event_ticket",
        VERTICAL_ATTACHMENT_LIST: "vertical_attachment_list",
        INSTANT_ARTICLE_LEGACY: "instant_article_legacy",
        FUNDRAISER_PAGE: "fundraiser_page",
        FINANCIAL_BILL_PAYMENT_REQUEST: "financial_bill_payment_request",
        GOODWILL_THROWBACK_FRIENDVERSARY_POLAROIDS_CARD: "goodwill_throwback_friendversary_polaroids_card",
        WELCOME_CARD_IMAGE: "welcome_card_image",
        LARGE_IMAGE_LIKE: "large_image_like",
        ASK_FRIENDS: "ask_friends",
        CULTURAL_MOMENT: "cultural_moment",
        TELEPHONE_CALL_LOG: "telephone_call_log",
        SUPER_EMOJI: "super_emoji",
        BOOK: "book",
        SUBTOPIC_CUSTOMIZATION_QUESTION: "subtopic_customization_question",
        SUBTOPIC_CUSTOMIZATION_OPTION: "subtopic_customization_option",
        RESTAURANT: "restaurant",
        CONNECTION_QUESTION: "connection_question",
        CONNECTION_QUESTION_OPTION: "connection_question_option",
        PYMI_ITEM: "pymi_item",
        GOODWILL_THROWBACK_FRIENDVERSARY_COLLAGE_CARD: "goodwill_throwback_friendversary_collage_card",
        CITY: "city",
        AVATAR_WITH_SHARE: "avatar_with_share",
        LIGHTWEIGHT_PLACE: "lightweight_place",
        QUOTED_SHARE: "quoted_share",
        SMS_LOG: "sms_log",
        CENTERED_TEXT: "centered_text",
        GOODWILL_THROWBACK_FRIENDVERSARY_DATA_CARD: "goodwill_throwback_friendversary_data_card",
        GOODWILL_THROWBACK_FACEVERSARY_COLLAGE_CARD: "goodwill_throwback_faceversary_collage_card",
        GOODWILL_THROWBACK_ANNIVERSARY_COLLAGE_CARD: "goodwill_throwback_anniversary_collage_card",
        MESSAGE_EVENT: "message_event",
        MESSAGE_THREAD: "message_thread",
        QUOTE: "quote",
        AIRLINE_ITINERARY: "airline_itinerary",
        AIRLINE_UPDATE: "airline_update",
        PLACE_LIST: "place_list",
        IMPLICIT_PLACE_LIST_CONVERSION: "implicit_place_list_conversion",
        AIRLINE_CHECKIN_REMINDER: "airline_checkin_reminder",
        MINUTIAE_UNIT: "minutiae_unit",
        INSTANT_ARTICLE_PHOTO: "instant_article_photo",
        INSTANT_ARTICLE_VIDEO: "instant_article_video",
        PHOTO_LINK_SHARE: "photo_link_share",
        PHOTO_LINK_SHARE_WITH_INSTAGRAM_CONTEXT: "photo_link_share_with_instagram_context",
        BUSINESS_LOCATION: "business_location",
        GOODWILL_WEATHER: "goodwill_weather",
        CULTURAL_MOMENT_HOLIDAY_CARD: "cultural_moment_holiday_card",
        GROUP: "group",
        COMMENT_PLACE_INFO: "comment_place_info",
        COMMENT_PRODUCT_INFO: "comment_product_info",
        GOODWILL_THROWBACK_FRIENDVERSARY_POLAROIDS_CARD_IPB: "goodwill_throwback_friendversary_polaroids_card_ipb",
        GOODWILL_THROWBACK_FRIENDVERSARY_COLLAGE_CARD_IPB: "goodwill_throwback_friendversary_collage_card_ipb",
        FUNDRAISER_PERSON_TO_CHARITY: "fundraiser_person_to_charity",
        FUNDRAISER_PERSON_FOR_PERSON: "fundraiser_person_for_person",
        FUNDRAISER_FOR_STORY: "fundraiser_for_story",
        FUNDRAISER_PROFILE_FOR_CHARITY: "fundraiser_profile_for_charity",
        MESSAGE_LIVE_LOCATION: "message_live_location",
        MESSENGER_INVITE: "messenger_invite",
        MESSENGER_NATIVE_TEMPLATES: "messenger_native_templates",
        GAMES_INSTANT_PLAY: "games_instant_play",
        PROFILE_MEDIA: "profile_media",
        NATIVE_TEMPLATES: "native_templates",
        NATIVE_TEMPLATES_FOX: "native_templates_fox",
        NATIVE_TEMPLATES_KEEP_ATTACHED: "native_templates_keep_attached",
        GOODWILL_THROWBACK_VIDEO_BASIC: "goodwill_throwback_video_basic",
        COMMERCE_PRODUCT_MINI: "commerce_product_mini",
        COMMERCE_PRODUCT_MINI_LIST: "commerce_product_mini_list",
        COMMENT: "comment",
        MESSENGER_TEAM_BOT_SHARE: "messenger_team_bot_share",
        LIVE_VIDEO_SCHEDULE: "live_video_schedule",
        PRODUCT_ITEM: "product_item",
        PLATFORM_INSTANT_APP: "platform_instant_app",
        YEAR_OVERVIEW: "year_overview",
        NATIVE_COMPONENT_FLOW_BOOKING_REQUEST: "native_component_flow_booking_request",
        FRIEND_REQUEST: "friend_request",
        MESSENGER_GROUP_JOINABLE_LINK: "messenger_group_joinable_link",
        MESSENGER_GROUP_JOINABLE_LINK_V2: "messenger_group_joinable_link_v2",
        SOCIAL_SEARCH_CONVERSION_PROMPT: "social_search_conversion_prompt",
        MDOTME_USER_LINK: "mdotme_user_link",
        DYNAMIC_MULTI_SHARE_ITEMS: "dynamic_multi_share_items",
        EVENT_REMINDER: "event_reminder",
        INSTANT_GAMES_SHARE_MESSAGE: "instant_games_share_message",
        INSTANT_GAMES_LEADERBOARD_UPDATE: "instant_games_leaderboard_update",
        INSTANT_GAMES_CUSTOM_UPDATE: "instant_games_custom_update",
        MESSENGER_PLATFORM_COMPACT_ITEM: "messenger_platform_compact_item",
        MESSENGER_PLATFORM_COVER_ITEM: "messenger_platform_cover_item",
        MULTI_SHARE_NON_LINK_VIDEO_AUTO_SCROLL: "multi_share_non_link_video_auto_scroll",
        OFFER_VIEW_LIVE_COUNTDOWN: "offer_view_live_countdown",
        ENHANCED_LINK_REDDIT_POST: "enhanced_link_reddit_post",
        MESSENGER_COMMERCE_COVER_ITEM: "messenger_commerce_cover_item",
        ENHANCED_LINK_YELP_BUSINESS: "enhanced_link_yelp_business",
        PAGES_PLATFORM_LEAD_GEN: "pages_platform_lead_gen",
        NATIVE_STORY: "native_story",
        MFS_BILL_PAY_CREATION_UPDATE: "mfs_bill_pay_creation_update",
        MFS_BILL_PAY_REFERENCE_CODE_UPDATE: "mfs_bill_pay_reference_code_update",
        MFS_BILL_PAY_AGENT_CASH_IN_UPDATE: "mfs_bill_pay_agent_cash_in_update",
        PAGES_PLATFORM_BOOKING_MESSAGE: "pages_platform_booking_message",
        EXTERNAL_GALLERY: "external_gallery",
        MEME_SHARE: "meme_share",
        MESSENGER_PLATFORM_ELEMENT: "messenger_platform_element",
        INSTANT_GAMES_SHARE_SCORE_MESSAGE: "instant_games_share_score_message",
        MESSENGER_PLATFORM_BUTTON_LIST: "messenger_platform_button_list",
        LIGHTWEIGHT_ACTION: "lightweight_action",
        TAROT_DIGEST: "tarot_digest",
        EVENT_TOUR: "event_tour",
        ADAPTIVE_MEDIA: "adaptive_media",
        DYNAMIC_GAME_BOARD: "dynamic_game_board",
        PAYMENT_PLATFORM: "payment_platform",
        OMNI_M_FLOW: "omni_m_flow",
        GROUP_QUIZ: "group_quiz",
        TRIAL_AD: "trial_ad",
        TEEM_COLLECTIONS: "teem_collections",
        CRISIS_DONATION: "crisis_donation",
        CRISIS_STATUS: "crisis_status",
        CRISIS_SHARE: "crisis_share",
        CRISIS_MARK_SAFE: "crisis_mark_safe",
        CRISIS_LISTING: "crisis_listing",
        CORONAVIRUS_HUB: "coronavirus_hub",
        CORONAVIRUS_FACTS: "coronavirus_facts",
        RACIAL_JUSTICE_HUB: "racial_justice_hub",
        FBPAY_OFFER: "fbpay_offer",
        APPLICATION_SHARE_REFERRAL: "application_share_referral",
        VR_CONTENT: "vr_content",
        VIDEO_RECOMMENDATION_HSCROLL: "video_recommendation_hscroll",
        VIDEO_TRAILER: "video_trailer",
        SHOW_PAGE_SHARE: "show_page_share",
        MFS_ATTACHMENT: "mfs_attachment",
        MFS_TIME_SENSITIVE_ATTACHMENT: "mfs_time_sensitive_attachment",
        VIDEO_RECOMMENDATION_SINGLETON: "video_recommendation_singleton",
        PAGE_REVIEW_PROMPT: "page_review_prompt",
        VIDEO_SHOW: "video_show",
        UNCONNECTED_VIDEO: "unconnected_video",
        SHOW_SHARE: "show_share",
        JOB_SEARCH_JOB_APPLICATION: "job_search_job_application",
        PAGE_MESSENGER_ATTACHMENT: "page_messenger_attachment",
        CONTACT_YOUR_REP: "contact_your_rep",
        LOCATION_EXTENSION: "location_extension",
        SERVICES_CONSUMER_HUB: "services_consumer_hub",
        PLACE_RECOMMENDATION: "place_recommendation",
        JOB_SEARCH_JOB_OPENING: "job_search_job_opening",
        PAGE_MESSAGE_ONLINE_INDICATOR: "page_message_online_indicator",
        LOCAL_PIVOT: "local_pivot",
        ORION_REQUEST_NEW: "orion_request_new",
        PHOTO_WITH_SHIELD: "photo_with_shield",
        PLAYABLE_AD: "playable_ad",
        FUN_FACT_PROMPT: "fun_fact_prompt",
        FUN_FACT_STACK: "fun_fact_stack",
        FATIGUED_SHARE: "fatigued_share",
        DISCUSSION_QUESTION: "discussion_question",
        PARTIES_INVITE: "parties_invite",
        PROFILE_INTRO_CARD_BIO: "profile_intro_card_bio",
        PAGES_SHARE: "pages_share",
        PRODUCT_RECOMMENDATION_LIST: "product_recommendation_list",
        VISUAL_POLL: "visual_poll",
        MULTI_PLACE_RECOMMENDATION: "multi_place_recommendation",
        PAGE_IN_COMMENT: "page_in_comment",
        PAGE_ANNOUNCEMENT: "page_announcement",
        MESSENGER_PLATFORM_MEDIA_ATTACHMENT: "messenger_platform_media_attachment",
        SCHEDULED_VIDEO_ANNOUNCEMENT: "scheduled_video_announcement",
        HSCROLL_ITEM: "hscroll_item",
        MESSENGER_CALL_LOG: "messenger_call_log",
        PAGE_REVIEW_UPDATE: "page_review_update",
        LOYALTY_CARD_OFFER: "loyalty_card_offer",
        GOODWILL_GRID: "goodwill_grid",
        TRAVEL_PLAN: "travel_plan",
        FIND_PLAYERS: "find_players",
        ASSET3D: "asset3d",
        MESSENGER_GROUP_PERSONAL_LINK: "messenger_group_personal_link",
        FREQUENTLY_ASKED_QUESTION: "frequently_asked_question",
        STORY_LIST: "story_list",
        GOODWILL_SHARED_CARD: "goodwill_shared_card",
        PAYMENT_BUBBLE_VIEW: "PAYMENT_BUBBLE_VIEW",
        POST_TO_EVENT_CREATE: "post_to_event_create",
        MONTAGE_DIRECT: "montage_direct",
        NEO_INVITATION: "NEO_INVITATION",
        NATIVE_TEMPLATES_LINK_SHARE_TEST: "native_templates_link_share_test",
        GOODWILL_HSCROLL: "goodwill_hscroll",
        NEO_KID_INITIATE_FRIENDING: "NEO_KID_INITIATE_FRIENDING",
        NEO_VIDEO_PROMPT: "NEO_VIDEO_PROMPT",
        EVENT_MICRO_ATTACHMENT: "event_micro_attachment",
        SAVED_LIST: "saved_list",
        LOCAL_GUIDE: "local_guide",
        MEET_UP_EVENT: "meet_up_event",
        DONATION: "donation",
        FUNDRAISER_FB_SEEDING_GIFT: "fundraiser_fb_seeding_gift",
        BREAKING_NEWS: "breaking_news",
        GOODWILL_COLLAGE: "goodwill_collage",
        LEAD_FORM: "lead_form",
        LEAD_FORM_USER_INFO: "lead_form_user_info",
        EVENT_TICKET_ORDER: "event_ticket_order",
        PROFILE_CHANNEL: "profile_channel",
        ICE_BREAKER: "ICE_BREAKER",
        MOVIE: "movie",
        ALOHA_CALL: "aloha_call",
        TIP_JAR_PAYMENT: "tip_jar_payment",
        SUBSCRIPTION_GIFT: "subscription_gift",
        COMMENT_MESSAGE_INFO: "comment_message_info",
        CASH_ON_DELIVERY_ORDER: "cash_on_delivery_order",
        CENSUS: "census",
        VOTE_BY_MAIL: "vote_by_mail",
        VOTER_REGISTRATION_DRIVE: "voter_registration_drive",
        VOTING_INFO: "voting_info",
        LIVING_ROOM: "living_room",
        ACHIEVEMENT_POST: "achievement_post",
        M_BIRTHDAY_REMINDER: "m_birthday_reminder",
        INSIGHTS_CHART: "insights_chart",
        GROUP_PROACTIVE_FLAGGED_POST_QUEUE: "group_proactive_flagged_post_queue",
        GROUP_ACCEPT_RULE_TO_UNMUTE: "group_accept_rule_to_unmute",
        SHOW_CLICK_TO_WATCH_TAB: "show_click_to_watch_tab",
        SHOW_CLICK_TO_WATCH_TAB_V2: "show_click_to_watch_tab_v2",
        SHOW_CLICK_TO_WATCH_TAB_V3: "show_click_to_watch_tab_v3",
        SHOW_CLICK_TO_WATCH_TAB_V4: "show_click_to_watch_tab_v4",
        SHOW_MASKED: "show_masked",
        SHOW_CONTINUE_WATCHING: "show_continue_watching",
        WATCH_CLICK_STORY_HEADER_TO_WATCH_TAB: "watch_click_story_header_to_watch_tab",
        FOX_ALBUM: "fox_album",
        TOOL_SHARE: "tool_share",
        PHONE_REMOVED_ACTION_LIST: "phone_removed_action_list",
        AMP: "amp",
        LDP_APP_INSTANCE: "ldp_app_instance",
        PAGE_RECOMMENDATION_V2: "page_recommendation_v2",
        PLAY_WITH_FRIENDS: "play_with_friends",
        BLOOD_REQUEST: "blood_request",
        BLOOD_DONATION_PARTNER_CTA: "blood_donation_partner_cta",
        HIGH_SCHOOL_COMMUNITY_INVITE: "high_school_community_invite",
        SCHEDULED_LIVE_VIDEO: "scheduled_live_video",
        GAMESHOW: "gameshow",
        GAMESHOW_INVITE: "gameshow_invite",
        MK_FRIEND_REQUEST: "mk_friend_request",
        GOODWILL_PHOTO_CIRCLE: "goodwill_photo_circle",
        SERVICES_APPOINTMENT_AVAILABILITY: "services_appointment_availability",
        NEO_SOCIAL_INVITATION: "neo_social_invitation",
        NEO_KID_INVITATION: "neo_kid_invitation",
        GROUP_SELL_PRODUCT_ITEM_CONDENSED: "group_sell_product_item_condensed",
        GROUP_SELL_PRODUCT_ITEM_MARK_AS_PENDING: "group_sell_product_item_mark_as_pending",
        GAMES_VIDEO: "games_video",
        MOVIE_WITH_SHOWTIMES: "movie_with_showtimes",
        WORK_CONTENT_ATTACHMENT: "work_content_attachment",
        GROUP_SAFETY_HUB: "group_safety_hub",
        NEWS_STORYLINE: "news_storyline",
        EVENT_TICKET_REQUEST: "event_ticket_request",
        GROUP_APPLICATION: "group_application",
        MESSAGE_MULTIPLE_LOCATIONS: "message_multiple_locations",
        TODO_LIST: "todo_list",
        PERSONAL_REMINDER: "personal_reminder",
        ARTICLE_MESSAGE: "article_message",
        PERSONAL_REMINDER_LIST: "personal_reminder_list",
        GAMES_APP: "games_app",
        GAMES_APP_SHARED: "games_app_shared",
        MOBILE_GAME_SHARE: "mobile_game_share",
        MONTAGE_MEDIA_EFFECT: "montage_media_effect",
        GROUPS_VOTER_REGISTRATION_DRIVE: "groups_voter_registration_drive",
        MONTAGE_SHARE: "montage_share",
        WEC_MESSAGE: "wec_message",
        INSTAGRAM_DIRECT_MESSAGE_ATTACHMENT: "instagram_direct_message_attachment",
        GROUP_APPLICATION_CTA: "group_application_cta",
        MENTORSHIP_CURRICULUM_STEP: "mentorship_curriculum_step",
        SCHEDULED_LIVING_ROOM: "scheduled_living_room",
        STORY_ADS_SURVEY: "story_ads_survey",
        MESSENGER_FORM_PROGRESS_ATTACHMENT: "messenger_form_progress_attachment",
        VIDEO_COMMERCE_INTEREST: "video_commerce_interest",
        PAGES_COMMERCE_BUYER_INTENT: "pages_commerce_buyer_intent",
        BREAKING_NEWS_STORY_GALLERY: "breaking_news_story_gallery",
        BRANDING_PLAYABLE_AD: "branding_playable_ad",
        PAGE_SURFACE_MENU_ITEM: "page_surface_menu_item",
        VIDEO_LIVING_ROOM_MESSENGER: "video_living_room_messenger",
        IMAGE_SHARE_NO_OVERLAY: "image_share_no_overlay",
        JOIN_GROUP_CTA: "join_group_cta",
        ASSISTANT_DRAFT_MESSAGE: "assistant_draft_message",
        ASSISTANT_CONTACT_INFO: "assistant_contact_info",
        NEO_DRAW_AND_GUESS_GAME_REQUEST: "neo_draw_and_guess_game_request",
        SOCIAL_LEARNING_UNIT_CREATED: "social_learning_unit_created",
        SOCIAL_LEARNING_UNIT_COMPLETED: "social_learning_unit_completed",
        GOODWILL_THROWBACK_SINGLE_PHOTO: "goodwill_throwback_single_photo",
        FAN_FUNDING_SUPPORT_CREATOR_CTA: "fan_funding_support_creator_cta",
        WOODHENGE_MEMBERSHIP_CARD: "woodhenge_membership_card",
        USER_PAY_REFERRALS_WWW: "user_pay_referrals_www",
        GOODWILL_VIDEO_SHARED_VIDEO: "goodwill_video_shared_video",
        INSTANT_GAMES_TOURNAMENT: "instant_games_tournament",
        INSTANT_GAMES_TOURNAMENT_ACTIVITY: "instant_games_tournament_activity",
        INSTANT_GAMES_UPDATE_COMMENT: "instant_games_update_comment",
        SCHEDULED_LIVE_VIDEO_POST: "scheduled_live_video_post",
        CHAT_COMMAND_RESULT: "chat_command_result",
        CROSSROADS: "crossroads",
        MOBILE_GAME_THREAD_SHARE: "mobile_game_thread_share",
        SHOW_CLICK_TO_WATCH_TOPIC: "show_click_to_watch_topic",
        LIFE_EVENT_FB_STORY: "life_event_fb_story",
        GROUP_KEYWORD_ALERTED_QUEUE: "group_keyword_alerted_queue",
        PARENT_APPROVED_PLAIN_TEXT_BOT_MESSAGE: "parent_approved_plain_text_bot_message",
        LIVE_VIDEO_REHEARSAL: "live_video_rehearsal",
        ASSISTANT_CONTACT_INFO_LIST: "assistant_contact_info_list",
        PARENT_APPROVED_IMAGE_AND_TEXT_BOT_MESSAGE: "parent_approved_image_and_text_bot_message",
        LIVE_VIDEO_SCHEDULED_REHEARSAL: "live_video_scheduled_rehearsal",
        LIVE_VIDEO_SCHEDULED_POST_REHEARSAL: "live_video_scheduled_post_rehearsal",
        GROUPS_LINKED_GROUP_FEED_HSCROLL: "groups_linked_group_feed_hscroll",
        SCHEDULED_LIVING_ROOM_POST: "scheduled_living_room_post",
        EVENT_ATTENDANCE_CONFIRMATION: "event_attendance_confirmation",
        ATTACHMENT_FOOTER_SIMPLE_HEADLINE: "attachment_footer_simple_headline",
        ATTACHMENT_FOOTER_CTA: "attachment_footer_cta",
        ATTACHMENT_FOOTER_ACCENT_COLOR: "attachment_footer_accent_color",
        CLICK_TO_WATCH_TAB_WARION_V1: "click_to_watch_tab_warion_v1",
        COMMERCE_UPSELL_MESSAGE: "commerce_upsell_message",
        PROFILE_SONG: "profile_song",
        MENTORSHIP_DISCUSSION_TOPIC_SET: "mentorship_discussion_topic_set",
        LINK_SOCIAL_CONTEXT: "link_social_context",
        POLITICAL_CANDIDATE_VIDEO: "political_candidate_video",
        TWEENS_WOULD_YOU_RATHER: "tweens_would_you_rather",
        TWEENS_INTEREST_CONTENT: "tweens_interest_content",
        SERVICES_GENERIC_ADMIN_TEXT: "services_generic_admin_text",
        MENTORSHIP_H_SCROLL: "mentorship_h_scroll",
        CRS_FEED_LINK_LARGE: "crs_feed_link_large",
        CRS_FEED_LINK_SMALL: "crs_feed_link_small",
        CRS_FEED_PHOTO_SMALL: "crs_feed_photo_small",
        CRS_FEED_PHOTO_LARGE: "crs_feed_photo_large",
        ANONYMOUS_AUTHOR_INFO: "anonymous_author_info",
        MENTORSHIP_XMA: "mentorship_xma",
        GEMSTONE_CENTERED_CONTENT: "gemstone",
        SHOW_EPISODE: "show_episode",
        PLAYLIST_VIDEO: "playlist_video",
        RECRUITING_CANDIDATE: "recruiting_candidate",
        RECRUITING_RESUME_REVIEW: "recruiting_resume_review",
        VIDEO_LIST: "video_list",
        GROUPS_BUY_SELL_TAB_SALE_ITEM: "groups_buy_sell_tab_sale_item",
        ALBUM_SALE_ITEM: "album_sale_item",
        PHOTO_SALE_ITEM: "photo_sale_item",
        MARKETPLACE_GENERIC_ADMIN_TEXT: "marketplace_generic_admin_text",
        PARENT_APPROVED_USER_SCHOOL_REQUEST: "parent_approved_user_school_request",
        PARENT_APPROVED_REMIX_PHOTO_REQUEST: "PARENT_APPROVED_REMIX_PHOTO_REQUEST",
        ANONYMOUS_POST_CONTENT: "anonymous_post_content",
        TWEENS_TOPIC_STORY: "tweens_topic_story",
        NEO_KID_PARENT_INVITATION: "neo_kid_parent_invitation",
        GAMING_VIDEO_CHAT_ATTACHMENT: "gaming_video_chat_attachment",
        GAMING_VIDEO_CLIP_ATTACHMENT: "gaming_video_clip_attachment",
        MARKETPLACE_RATE_SELLER_REQUEST: "marketplace_rate_seller_request",
        GROUP_INVITE_NONMEMBER_MENTIONED: "group_invite_nonmember_mentioned",
        AR_AD: "ar_ad",
        INSTANT_GAMES_INTERACTIVE_POLL: "instant_games_interactive_poll",
        CHATROOM: "chatroom",
        MARKETPLACE_ECOMM_PRODUCT_ITEM: "marketplace_ecomm_product_item",
        VOLUNTEERING_SUPPORT_RELATIONSHIP: "volunteering_support_relationship",
        MARKETPLACE_OFFER: "marketplace_offer",
        VIDEO_HOME_ELIGIBLE_VIDEO_ENDSCREEN: "video_home_eligible_video_endscreen",
        COMMERCE_ATTACHMENT: "commerce_attachment",
        GOODWILL_PRODUCT_SYSTEM_CAMPAIGN: "goodwill_product_system_campaign",
        WORK_SHIFT_SWAP: "work_shift_swap",
        FLIPPER_TRACE: "flipper_trace",
        MARKETPLACE_BOT_ORDER_DETAILS: "marketplace_bot_order_details",
        NEO_ASYNC_GAME_REQUEST: "neo_async_game_request",
        GROUP_PENDING_ANONYMOUS_POST_DISCLAIMER: "group_pending_anonymous_post_disclaimer",
        AVATAR_FEATURE: "avatar_feature",
        FIRST_PARTY_MUSIC: "first_party_music",
        STORY_CARD_PHOTO: "story_card_photo",
        STORY_CARD_VIDEO: "story_card_video",
        CRICKET_VIDEO: "cricket_video",
        C4G_THREAD_CREATION: "c4g_thread_creation",
        QUARANTINED_VIDEO: "quarantined_video",
        WORK_MAJOR_EVENT: "work_major_event",
        WORK_CHECKLIST: "work_checklist",
        MESSENGER_GENERIC_TEMPLATE: "messenger_generic_template",
        IG_ANIMATED_IMAGE_AUTOPLAY: "ig_animated_image_autoplay",
        VIDEO_MEETUP: "video_meetup",
        CRISIS_HUB: "crisis_hub",
        COLLABORATIVE_DOCUMENT: "collaborative_document",
        AMA_POST: "ama_post",
        ROOMS_SPEAKEASY_XMA: "rooms_speakeasy_xma",
        COLLAB_MEDIA: "collab_media",
        MARKETPLACE_TXN_QUESTION: "marketplace_txn_question",
        KNOWLEDGE_NOTE: "knowledge_note",
        KNOWLEDGE_COLLECTION: "knowledge_collection",
        GIFT_CARD: "gift_card",
        VIDEO_MEETUP_LINK: "video_meetup_link",
        COMMUNITY_PROMPT: "community_prompt",
        MARKETPLACE_GENERIC_XMA: "marketplace_generic_xma",
        TOURNAMENT_MATCH_SET: "tournament_match_set",
        FB_SHORTS: "fb_shorts",
        FB_SHORTS_CREATION: "fb_shorts_creation",
        C4G_MESSAGE: "c4g_message",
        COMMUNITY_QUESTIONS: "community_questions",
        MILAN_WORKOUT: "milan_workout",
        IN_THREAD_MULTIPHOTO_CAROUSEL: "in_thread_multiphoto_carousel",
        SHOP_PRODUCT_ITEM: "shop_product_item",
        NEO_SHORT_FORM_VIDEO: "neo_short_form_video",
        WORK_JOINABLE_CALL_INVITE: "work_joinable_call_invite",
        WORK_MEETING: "work_meeting",
        PROFILE_COMMERCE_POST: "profile_commerce_post",
        GAMING_COPLAY_SHARE_LINK: "gaming_coplay_share_link",
        ROOMS_SPEAKEASY_TOMBSTONE_XMA: "rooms_speakeasy_tombstone_xma",
        COMMUNITY_QA: "community_qa",
        FUNDRAISER_PERSON_TO_CHARITY_VIDEO: "fundraiser_person_to_charity_video",
        WORKPLACE_APPROVALS: "workplace_approvals",
        GROUP_VOTER_PLEDGE_DRIVE: "group_voter_pledge_drive",
        SHOP_ORDER_UPDATES: "shop_order_updates",
        SHOP_ORDER_UPDATES_COLLAPSED: "shop_order_updates_collapsed",
        PREVENTIVE_HEALTH_FLU_SHOT_PLEDGE: "preventive_health_flu_shot_pledge",
        GAMES_SERVICE_PLAYER_INVITE_MESSAGE: "games_service_player_invite_message",
        REPORTED_GROUP_EVENT: "reported_group_event",
        WORK_MEETING_TRANSCRIPT: "work_meeting_transcript",
        INTERACTIVE_MEDIA: "interactive_media",
        SHOP_STOREFRONT: "shop_storefront"
    });
    e.exports = a
}
), null);
__d("MessengerMessageTransformer.bs", ["bs_block", "bs_js_dict", "FBIDCheck", "getByPath", "MercuryIDs", "bs_caml_format", "bs_caml_option", "CurrentUser", "bs_js_null_undefined", "MercuryActionType", "MercurySourceType", "MessagingTagUtils", "StoryAttachmentStyle", "MNCommerceMessageType", "MercuryLogMessageType", "MessageProfileRangeType", "MessageUnsendabilityStatus.bs", "P2PPaymentLogMessageSubtype", "MessagingGenericAdminTextType", "MessengerAttachmentTransformer.bs", "InstantGameUpdateXMATUpdateType"], (function(a, b, c, d, e, f) {
    "use strict";
    function g(a) {
        a = a.blob_attachments;
        var c = [];
        a == null || a.forEach(function(a) {
            if (a.__typename === "MessageImage") {
                c.push(b("bs_block").__(0, [{
                    attribution_app: a.attribution_app,
                    attribution_metadata: a.attribution_metadata,
                    blurred_image_uri: a.blurred_image_uri,
                    filename: a.filename,
                    id: a.id,
                    preview: a.preview,
                    large_preview: a.large_preview,
                    thumbnail: a.thumbnail,
                    legacy_attachment_id: a.legacy_attachment_id,
                    original_dimensions: a.original_dimensions,
                    original_extension: a.original_extension,
                    render_as_sticker: a.render_as_sticker,
                    photo_encodings: a.photo_encodings
                }]));
                return 0
            } else if (a.__typename === "MessageAnimatedImage") {
                c.push(b("bs_block").__(1, [{
                    attribution_app: a.attribution_app,
                    attribution_metadata: a.attribution_metadata,
                    filename: a.filename,
                    animated_image: a.animated_image,
                    legacy_attachment_id: a.legacy_attachment_id,
                    preview_image: a.preview_image,
                    original_dimensions: a.original_dimensions
                }]));
                return 0
            } else if (a.__typename === "MessageAudio") {
                c.push(b("bs_block").__(2, [{
                    attribution_app: a.attribution_app,
                    attribution_metadata: a.attribution_metadata,
                    filename: a.filename,
                    playable_url: a.playable_url,
                    playable_duration_in_ms: a.playable_duration_in_ms,
                    is_voicemail: a.is_voicemail,
                    audio_type: a.audio_type,
                    url_shimhash: a.url_shimhash,
                    url_skipshim: a.url_skipshim
                }]));
                return 0
            } else if (a.__typename === "MessageVideo") {
                c.push(b("bs_block").__(3, [{
                    attribution_app: a.attribution_app,
                    attribution_metadata: a.attribution_metadata,
                    filename: a.filename,
                    playable_url: a.playable_url,
                    playable_duration_in_ms: a.playable_duration_in_ms,
                    legacy_attachment_id: a.legacy_attachment_id,
                    chat_image: a.chat_image,
                    video_type: a.video_type,
                    original_dimensions: a.original_dimensions,
                    large_image: a.large_image,
                    inbox_image: a.inbox_image
                }]));
                return 0
            } else if (a.__typename === "MessageFile") {
                c.push(b("bs_block").__(4, [{
                    attribution_app: a.attribution_app,
                    attribution_metadata: a.attribution_metadata,
                    filename: a.filename,
                    url: a.url,
                    mimetype: a.mimetype,
                    content_type: a.content_type,
                    is_malicious: a.is_malicious,
                    message_file_fbid: a.message_file_fbid,
                    url_shimhash: a.url_shimhash,
                    url_skipshim: a.url_skipshim,
                    preview_url: a.preview_url,
                    preview: a.preview
                }]));
                return 0
            } else
                return 0
        });
        return c
    }
    function h(a, c, d) {
        var e = c.call_capture_attachments;
        if (e == null)
            return [];
        else
            return b("MessengerAttachmentTransformer.bs").transformAttachment(a, {
                extensible_attachment: null,
                blob_attachments: g({
                    blob_attachments: e.edges.map(function(a) {
                        return a.node
                    })
                }),
                sticker: null
            }, c.message_id, d)
    }
    function i(a, c, d, e, f) {
        if (c.__typename === "GroupPollExtensibleMessageAdminText") {
            var g = c.question, i;
            if (g == null)
                i = [{}, null];
            else {
                var j = Object.assign({}, g);
                Object.assign(j, {
                    total_count: c.total_count,
                    options: g.options.nodes.map(function(a) {
                        var b = Object.assign({}, a);
                        return Object.assign(b, {
                            total_count: a.voters.nodes.length,
                            voters: a.voters.nodes.map(function(a) {
                                return a.id
                            })
                        })
                    })
                });
                i = [j, g.id]
            }
            j = {
                message_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MessagingGenericAdminTextType"), d)),
                untypedData: {
                    event_type: c.event_type.toLowerCase(),
                    question_id: i[1],
                    question_json: b("bs_js_null_undefined").fromOption(JSON.stringify(i[0]))
                }
            }
        } else if (c.__typename === "InstantGameUpdateExtensibleMessageAdminText") {
            j = {
                message_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MessagingGenericAdminTextType"), d)),
                untypedData: {
                    game_id: (g = b("getByPath"))(c, ["game", "id"]),
                    update_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("InstantGameUpdateXMATUpdateType"), c.update_type)),
                    collapsed_text: c.collapsed_text,
                    expanded_text: c.expanded_text,
                    leaderboard_json: c.leaderboard_json,
                    cta_url: g(c, ["instant_game_update_data", "cta_url"]),
                    cta_title: g(c, ["instant_game_update_data", "cta_title"]),
                    custom_image_url: g(c, ["instant_game_update_data", "photo", "image", "uri"]),
                    template: g(c, ["instant_game_update_data", "template"])
                }
            }
        } else if (c.__typename === "MessengerAdContextAdminText")
            j = {
                message_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MessagingGenericAdminTextType"), d)),
                untypedData: {
                    ad_url: c.ad_url
                }
            };
        else if (c.__typename === "AdExtensibleMessageAdminText")
            j = {
                message_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MessagingGenericAdminTextType"), d)),
                untypedData: {
                    ad_client_token: c.ad_client_token,
                    ad_id: c.ad_id,
                    ad_preferences_link: c.ad_preferences_link,
                    ad_properties: c.ad_properties
                }
            };
        else if (c.__typename === "MessengerCallLogExtensibleMessageAdminText")
            j = {
                message_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MessagingGenericAdminTextType"), d)),
                untypedData: Object.assign(Object.assign({}, c), {
                    call_capture_attachments: h(a, c, f)
                })
            };
        else if (c.__typename === "ThemeColorExtensibleMessageAdminText" || c.__typename === "ThreadIconExtensibleMessageAdminText" || c.__typename === "ThreadNicknameExtensibleMessageAdminText" || c.__typename === "AcceptPendingThreadExtensibleMessageAdminText" || c.__typename === "AddContactExtensibleMessageAdminText" || c.__typename === "RtcCallLogExtensibleMessageAdminText" || c.__typename === "GameScoreExtensibleMessageAdminText" || c.__typename === "ConfirmFriendRequestExtensibleMessageAdminText" || c.__typename === "MessengerGrowthGenericExtensibleMessageAdminText" || c.__typename === "PartiesInviteExtensibleMessageAdminText" || c.__typename === "AppointmentReminderExtensibleMessageAdminText" || c.__typename === "LinkCTAExtensibleMessageAdminText" || c.__typename === "GraphQLServicesAppointmentsOptOutExtensibleMessageAdminText" || c.__typename === "ServicesLeadGenSurveyExtensibleMessageAdminText" || c.__typename === "ServicesLeadGenSurveyEditExtensibleMessageAdminText" || c.__typename === "MessengerIcebreakerVoteCastExtensibleMessageAdminText" || c.__typename === "PagesMarkAsPaidExtensibleMessageAdminText" || c.__typename === "PagesMarkAsPaidNewExtensibleMessageAdminText" || c.__typename === "WorkBotInstalledExtensibleMessageAdminText" || c.__typename === "WorkChatReminderLinkCTAExtensibleMessageAdminText" || c.__typename === "PageThreadActionSystemAddDetailsXMAT" || c.__typename === "PostSharedFromGroupExtensibleMessageAdminText")
            j = {
                message_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MessagingGenericAdminTextType"), d)),
                untypedData: Object.assign({}, c)
            };
        else if (c.__typename === "LightweightEventCreateExtensibleMessageAdminText" || c.__typename === "LightweightEventDeleteExtensibleMessageAdminText" || c.__typename === "LightweightEventNotifyBeforeEventExtensibleMessageAdminText" || c.__typename === "LightweightEventNotifyExtensibleMessageAdminText" || c.__typename === "LightweightEventUpdateExtensibleMessageAdminText" || c.__typename === "LightweightEventUpdateLocationExtensibleMessageAdminText" || c.__typename === "LightweightEventUpdateTimeExtensibleMessageAdminText" || c.__typename === "LightweightEventUpdateTitleExtensibleMessageAdminText" || c.__typename === "LightweightEventRSVPExtensibleMessageAdminText") {
            i = c.event_reminder;
            if (i == null)
                g = void 0;
            else {
                a = i.lightweight_event_creator;
                f = a == null ? void 0 : a.id;
                a = i.location_page;
                a = a == null ? void 0 : a.id;
                var k = i.timezone_id;
                k = k == null ? void 0 : k.timezone;
                var l = i.location_coordinates;
                l = l == null ? {
                    latitude: void 0,
                    longitude: void 0
                } : l;
                var m = i.event_reminder_members;
                m = m == null ? void 0 : m.edges;
                g = {
                    event_creator_id: f,
                    event_id: i.id,
                    event_location_id: a,
                    event_location_name: i.location_name,
                    event_seconds_to_notify_before: i.seconds_to_notify_before,
                    event_time: i.time,
                    event_end_time: i.end_time,
                    event_timezone: k,
                    event_title: i.event_title,
                    event_type: i.lightweight_event_type,
                    event_track_rsvp: i.allows_rsvp,
                    latitude: l.latitude,
                    longitude: l.longitude,
                    guest_state_list: m,
                    guest_id: c.guest_id,
                    guest_status: c.guest_status
                }
            }
            j = {
                message_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MessagingGenericAdminTextType"), d)),
                untypedData: g
            }
        } else
            j = c.__typename === "AdReplyMessageAdminText" ? {
                message_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MessagingGenericAdminTextType"), d)),
                untypedData: {
                    ad_url: c.ad_url,
                    should_show_url: c.should_show_url
                }
            } : {
                message_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MessagingGenericAdminTextType"), d)),
                untypedData: void 0
            };
        return {
            log_message_body: e,
            log_message_data: j,
            log_message_type: b("MercuryLogMessageType").GENERIC_ADMIN_TEXT
        }
    }
    function j(a) {
        return a.map(function(a) {
            if (a === "p2p_transfer")
                return b("StoryAttachmentStyle").ORION;
            else if (a === "p2p_payment_request")
                return b("StoryAttachmentStyle").ORION_REQUEST;
            else
                return a
        })
    }
    function k(a) {
        var c = a.target, d;
        if (c == null)
            d = null;
        else if (c.__typename === "CrisisListing")
            d = b("bs_block").__(0, [{
                listing_type: c.listing_type,
                listing_category: c.listing_category,
                map_image: c.map_image
            }]);
        else if (c.__typename === "MoneyTransfer")
            d = b("bs_block").__(1, [{
                sender: c.sender,
                receiver: c.receiver,
                transfer_id: c.transfer_id,
                bubble_view: c.bubble_view
            }]);
        else if (c.__typename === "PeerToPeerTransfer")
            d = b("bs_block").__(2, [{
                sender: c.sender,
                receiver_profile: c.receiver_profile,
                transaction_amount: c.transaction_amount,
                transfer_status: c.transfer_status,
                transfer_id: c.transfer_id,
                completedTime: c.completedTime,
                updatedTime: c.updatedTime,
                creationTime: c.creationTime,
                transfer_context: c.transfer_context,
                amount_fb_discount: c.amount_fb_discount,
                funds_availability: c.funds_availability,
                group_thread_fbid: c.group_thread_fbid,
                platform_item: c.platform_item,
                id: c.id,
                status_description: c.status_description,
                bubble_view: c.bubble_view,
                currency_amount: c.currency_amount,
                memo_text: c.memo_text
            }]);
        else if (c.__typename === "PeerToPeerPaymentRequest")
            d = b("bs_block").__(3, [{
                amount: c.amount,
                transaction_amount: c.transaction_amount,
                requester: c.requester,
                requestee: c.requestee,
                request_status: c.request_status,
                request_theme: c.request_theme,
                id: c.id,
                memo_text: c.memo_text,
                transfer: c.transfer,
                creation_time: c.creation_time,
                group_thread_fbid: c.group_thread_fbid,
                updated_time: c.updated_time,
                status_description: c.status_description,
                bubble_view: c.bubble_view,
                individual_requests: c.individual_requests
            }]);
        else if (c.__typename === "PaymentPlatformAttachment")
            d = b("bs_block").__(4, [{
                payment_modules_client: c.payment_modules_client,
                is_viewer_seller: c.is_viewer_seller,
                payment_snippet: c.payment_snippet,
                item_list: c.item_list,
                components: c.components,
                payment_call_to_actions: c.payment_call_to_actions,
                click_action: c.click_action,
                summary_action: c.summary_action,
                invoicer_id: c.invoicer_id,
                is_last_attachment: c.is_last_attachment,
                payment_total: c.payment_total,
                product_detail: c.product_detail,
                payment_status_icon: c.payment_status_icon,
                user_facing_payment_status: c.user_facing_payment_status,
                payment_sub_statuses: c.payment_sub_statuses,
                should_show_new_xma: c.should_show_new_xma,
                buyer_name: c.buyer_name
            }]);
        else if (c.__typename === "MessengerRetailPromotion")
            d = b("bs_block").__(5, [{
                message: c.message,
                call_to_actions: c.call_to_actions,
                promotion_items: c.promotion_items
            }]);
        else if (c.__typename === "MessengerBusinessMessage")
            d = b("bs_block").__(6, [{
                message: c.message,
                call_to_actions: c.call_to_actions,
                business_items: c.business_items
            }]);
        else if (c.__typename === "Video")
            d = b("bs_block").__(7, [{
                video_id: c.video_id
            }]);
        else if (c.__typename === "PagesPlatformLeadGenInfo")
            d = b("bs_block").__(8, [{
                field_data_list: c.field_data_list
            }]);
        else if (c.__typename === "MessageLiveLocation")
            d = b("bs_block").__(9, [{
                live_location_id: c.live_location_id,
                is_expired: c.is_expired,
                expiration_time: c.expiration_time,
                sender: c.sender,
                coordinate: c.coordinate,
                location_title: c.location_title,
                sender_destination: c.sender_destination,
                stop_reason: c.stop_reason
            }]);
        else if (c.__typename === "QuickInvite")
            d = b("bs_block").__(10, [{
                id: c.id,
                invite_sender: c.invite_sender,
                invite_recipient: c.invite_recipient
            }]);
        else if (c.__typename === "PagesPlatformBookingMessage")
            d = b("bs_block").__(11, [{
                id: c.id,
                page: c.page,
                message_bubble_type: c.message_bubble_type,
                user: c.user,
                ls_xma_title: c.ls_xma_title,
                ls_xma_subtitle: c.ls_xma_subtitle,
                native_component_flow_request: c.native_component_flow_request
            }]);
        else if (c.__typename === "ServicesAppointmentAvailability")
            d = b("bs_block").__(12, [{
                id: c.id,
                page: c.page,
                consumer: c.consumer,
                formatted_available_time_ranges: c.formatted_available_time_ranges,
                has_booking_request_created: c.has_booking_request_created
            }]);
        else if (c.__typename === "ServicesGenericAdminText")
            d = b("bs_block").__(13, [{
                id: c.id
            }]);
        else if (c.__typename === "GenieMessage")
            d = b("bs_block").__(14, [{
                genie_sender: c.genie_sender,
                story_attachment: c.story_attachment
            }]);
        else if (c.__typename === "Event")
            d = b("bs_block").__(15, [{
                eventID: c.eventID,
                guestStatus: c.guestStatus,
                canViewerJoin: c.canViewerJoin,
                timeString: c.timeString,
                event_place: c.event_place,
                social_context: c.social_context,
                watchStatus: c.watchStatus,
                connection_style: c.connection_style,
                canViewerWatch: c.canViewerWatch,
                profile_picture: c.profile_picture,
                name: c.name,
                start_timestamp: c.start_timestamp
            }]);
        else if (c.__typename === "ExternalSong")
            d = b("bs_block").__(16, [{
                application_name: c.application_name,
                artist_names: c.artist_names,
                audio_url: c.audio_url,
                duration_ms: c.duration_ms,
                music_title: c.music_title
            }]);
        else if (c.__typename === "LightweightAction")
            d = b("bs_block").__(17, [{
                lwa_state: c.lwa_state,
                lwa_type: c.lwa_type
            }]);
        else if (c.__typename === "MessengerRetailItem")
            d = b("bs_block").__(18, [{
                id: c.id,
                name: c.name,
                desc: c.desc,
                thumb_url: c.thumb_url,
                item_url: c.item_url,
                source: c.source,
                image_aspect_ratio: c.image_aspect_ratio,
                first_metaline: c.first_metaline,
                second_metaline: c.second_metaline,
                third_metaline: c.third_metaline,
                default_action: c.default_action,
                call_to_actions: c.call_to_actions
            }]);
        else if (c.__typename === "AgentItemSuggestion")
            d = b("bs_block").__(19, [{
                id: c.id,
                desc: c.desc,
                total_cost: c.total_cost,
                merchant_name: c.merchant_name,
                target_url: c.target_url,
                thumb_url: c.thumb_url,
                raw_amount: c.raw_amount,
                payment: c.payment,
                price_amount: c.price_amount,
                price_currency: c.price_currency,
                name: c.name
            }]);
        else if (c.__typename === "FundraiserPersonToCharity" || c.__typename === "FundraiserPersonForPerson") {
            var e = c.fundraiser_detailed_progress_text
              , f = c.fundraiser_subtitle_text
              , g = c.focused_cover_photo;
            d = b("bs_block").__(20, [{
                fundraiserID: c.id,
                canDonate: c.can_donate,
                hasViewerDonated: c.has_viewer_donated,
                fundraiserDetailedProgressText: e == null ? null : e.text,
                fundraiserSubtitleText: f == null ? null : f.text,
                focusedCoverPhoto: g == null ? null : {
                    src: g.photo.image.uri,
                    data: {
                        height: g.photo.image.height,
                        width: g.photo.image.width
                    }
                }
            }])
        } else
            d = c.__typename === "MessengerRetailReceipt" ? b("bs_block").__(21, [{
                account_holder_name: c.account_holder_name,
                adjustments: c.retail_adjustments,
                cancellation_url: c.cancellation_url,
                items: c.retail_items,
                merchant_name: c.merchant_name,
                messenger_commerce_bubble_type: c.bubble_type,
                order_id: c.receipt_id,
                order_time: c.order_time_for_display,
                order_url: c.receipt_url,
                payment_method: c.order_payment_method,
                receipt_id: c.id,
                recipient_name: c.recipient_name,
                shipping_cost: c.shipping_cost,
                shipping_method: c.shipping_method,
                status: c.status,
                structured_address: c.structured_address,
                subtotal: c.subtotal,
                total_cost: c.total,
                total_tax: c.tax,
                partner_logo: c.partner_log
            }]) : c.__typename === "JobApplication" ? b("bs_block").__(22, [{
                id: c.id
            }]) : c.__typename === "GroupCommerceProductItem" ? b("bs_block").__(23, [{
                group_commerce_item_description: c.group_commerce_item_description,
                group_commerce_item_seller: c.group_commerce_item_seller,
                formatted_price: c.formatted_price,
                group_commerce_item_title: c.group_commerce_item_title,
                primary_photo: c.primary_photo,
                url: c.url
            }]) : c.__typename === "Page" ? b("bs_block").__(24, [{
                address: c.address,
                top_category_name: c.top_category_name,
                cover_photo: c.cover_photo,
                location: c.location,
                name: c.name,
                overall_star_rating: c.overall_star_rating,
                id: c.id,
                price_range_description: c.price_range_description
            }]) : c.__typename === "MessengerEventReminder" ? b("bs_block").__(25, [{
                is_active: c.is_active,
                event_title: c.event_title,
                time: c.time
            }]) : c.__typename === "FormProgressStoryAttachment" ? b("bs_block").__(50, [{
                progress: c.progress,
                url: c.url
            }]) : c.__typename === "AirlineBoardingPassCollectionMessageAttachment" ? b("bs_block").__(26, [{
                tint_color: c.tint_color,
                logo: c.logo,
                flight_label: c.flight_label,
                boarding_time_label: c.boarding_time_label,
                departure_label: c.departure_label,
                passenger_names_label: c.passenger_names_label,
                passenger_seat_label: c.passenger_seat_label,
                flight_terminal_label: c.flight_terminal_label,
                flight_gate_label: c.flight_gate_label,
                view_boarding_pass_cta_label: c.view_boarding_pass_cta_label,
                boarding_passes: c.boarding_passes,
                share_cta_label: c.share_cta_label,
                message_cta_label: c.message_cta_label,
                boarding_pass_title_label: c.boarding_pass_title_label,
                boarding_pass_error_title_label: c.boarding_pass_error_title_label
            }]) : c.__typename === "AirlineCheckInReminderMessageAttachment" ? b("bs_block").__(27, [{
                pnr_number: c.pnr_number,
                tint_color: c.tint_color,
                checkin_url: c.checkin_url,
                booking_number_label: c.booking_number_label,
                flight_label: c.flight_label,
                arrival_time_label: c.arrival_time_label,
                departure_time_label: c.departure_time_label,
                checkin_cta_label: c.checkin_cta_label,
                logo: c.logo,
                flight_infos: c.flight_infos
            }]) : c.__typename === "AirlineUpdateMessageAttachment" ? b("bs_block").__(28, [{
                pnr_number: c.pnr_number,
                tint_color: c.tint_color,
                update_type: c.update_type,
                departure_time_label: c.departure_time_label,
                arrival_time_label: c.arrival_time_label,
                booking_number_label: c.booking_number_label,
                flight_gate_label: c.flight_gate_label,
                flight_label: c.flight_label,
                flight_status_label: c.flight_status_label,
                passenger_names_label: c.passenger_names_label,
                passenger_seat_label: c.passenger_seat_label,
                logo: c.logo,
                flight_info: c.flight_info,
                hightlighted_labels: c.hightlighted_labels
            }]) : c.__typename === "AirlineItineraryMessageAttachment" ? b("bs_block").__(29, [{
                confirmation_number: c.confirmation_number,
                pnr_number: c.pnr_number,
                tint_color: c.tint_color,
                formatted_total: c.formatted_total,
                itemized_price_infos: c.itemized_price_infos,
                formatted_tax: c.formatted_tax,
                formatted_base_price: c.formatted_base_price,
                passenger_infos: c.passenger_infos,
                logo: c.logo,
                aircraft_type_label: c.aircraft_type_label,
                arrival_time_label: c.arrival_time_label,
                base_price_label: c.base_price_label,
                booking_number_label: c.booking_number_label,
                cabin_type_label: c.cabin_type_label,
                departure_time_label: c.departure_time_label,
                flight_confirmation_label: c.flight_confirmation_label,
                flight_date_label: c.flight_date_label,
                flight_label: c.flight_label,
                flight_terminal_label: c.flight_terminal_label,
                itinerary_error_title_label: c.itinerary_error_title_label,
                itinerary_title_label: c.itinerary_title_label,
                passenger_name_label: c.passenger_name_label,
                passenger_names_label: c.passenger_names_label,
                passenger_seat_label: c.passenger_seat_label,
                purchase_summary_label: c.purchase_summary_label,
                taxes_label: c.taxes_label,
                total_label: c.total_label,
                view_details_cta_label: c.view_details_cta_label,
                itinerary_legs: c.itinerary_legs
            }]) : c.__typename === "MessengerRetailShipmentTrackingEvent" ? b("bs_block").__(30, [{
                id: c.id,
                shipment: c.shipment,
                tracking_event_time_for_display: c.tracking_event_time_for_display,
                shipment_tracking_event_type: c.shipment_tracking_event_type,
                messenger_commerce_location: c.messenger_commerce_location,
                tracking_event_description: c.tracking_event_description,
                bubble_type: c.bubble_type
            }]) : c.__typename === "MessengerRetailShipment" ? b("bs_block").__(31, [{
                id: c.id,
                tracking_number: c.tracking_number,
                shipdate_for_display: c.shipdate_for_display,
                estimated_delivery_time_for_display: c.estimated_delivery_time_for_display,
                commerce_origin: c.commerce_origin,
                commerce_destination: c.commerce_destination,
                retail_carrier: c.retail_carrier,
                shipment_tracking_events: c.shipment_tracking_events,
                receipt: c.receipt,
                recipient: c.recipient,
                retail_shipment_items: c.retail_shipment_items,
                bubble_type: c.bubble_type
            }]) : c.__typename === "EventAttendanceConfirmation" ? b("bs_block").__(33, [{
                id: c.id,
                num_guests: c.num_guests,
                attendee_answers: c.attendee_answers,
                event: c.event
            }]) : c.__typename === "LeadGenDeepLinkData" ? b("bs_block").__(32, [{
                id: c.id,
                cover_image: c.cover_image,
                headline: c.headline,
                name: c.name,
                page: c.page
            }]) : c.__typename === "UserLeadGenInfo" ? b("bs_block").__(34, [{
                id: c.id,
                field_data: c.field_data
            }]) : c.__typename === "WECMessageAudio" ? b("bs_block").__(38, [{
                id: c.id,
                filename: c.filename,
                playable_url: c.playable_url,
                url_shimhash: c.url_shimhash,
                filesize: c.filesize,
                extension: c.extension,
                duration: c.duration
            }]) : c.__typename === "IceBreakerMessageAttachment" ? b("bs_block").__(35, [{
                ice_breaker_title: c.ice_breaker_title,
                ice_breaker_messages: c.ice_breaker_messages,
                ad_id: c.ad_id
            }]) : c.__typename === "WECMessage" ? b("bs_block").__(36, [{
                sender_wec_number: c.sender_wec_number,
                sender_wec_number_formated: c.sender_wec_number_formated,
                sender_wec_number_fbid: c.sender_wec_number_fbid,
                sender_wec_name: c.sender_wec_name
            }]) : c.__typename === "WECMessageImage" ? b("bs_block").__(37, [{
                id: c.id,
                extension: c.extension,
                preview: c.preview,
                large_preview: c.large_preview
            }]) : c.__typename === "WECMessageFile" ? b("bs_block").__(39, [{
                id: c.id,
                name: c.name,
                is_malicious: c.is_malicious,
                uri: c.uri,
                extension: c.extension,
                filesize: c.filesize
            }]) : c.__typename === "WECMessageVideo" ? b("bs_block").__(40, [{
                id: c.id,
                playable_url: c.playable_url,
                url_shimhash: c.url_shimhash,
                filesize: c.filesize,
                extension: c.extension,
                filename: c.filename,
                height: c.height,
                width: c.width
            }]) : c.__typename === "MontageDirect" ? b("bs_block").__(41, [{
                message_state: c.message_state,
                is_keep_disabled: c.is_keep_disabled,
                blob_media_type: c.blob_media_type,
                blob_media: c.blob_media,
                image: c.image
            }]) : c.__typename === "MBirthdayReminderAttachment" ? b("bs_block").__(42, [{
                friend_id: c.friend_id,
                confidence: c.confidence,
                birthday_date: c.birthday_date
            }]) : c.__typename === "MPersonalRemindersList" ? b("bs_block").__(43, [{
                has_more_upcoming_reminders: c.has_more_upcoming_reminders,
                personal_reminders: c.personal_reminders
            }]) : c.__typename === "MentorshipMessengerCurriculumStep" ? b("bs_block").__(44, [{
                id: c.id,
                module_name: c.module_name,
                mentorship_program: c.mentorship_program,
                program_name: c.program_name,
                curriculum_message: c.curriculum_message,
                prompt: c.prompt,
                step_count: c.step_count,
                total_steps: c.total_steps
            }]) : c.__typename === "MentorshipMessengerDiscussionTopicSet" ? b("bs_block").__(45, [{
                id: c.id,
                topics: c.topics
            }]) : c.__typename === "MentorshipMessengerLeavePrompt" ? b("bs_block").__(46, [{
                mentorship_program: c.mentorship_program,
                id: c.id,
                xma_type: c.xma_type
            }]) : c.__typename === "MentorshipMessengerReminder" ? b("bs_block").__(47, [{
                id: c.id,
                xma_type: c.xma_type
            }]) : c.__typename === "MentorshipMessengerSurvey" ? b("bs_block").__(48, [{
                id: c.id,
                xma_type: c.xma_type,
                xma_title: c.xma_title,
                xma_disclaimer: c.xma_disclaimer,
                mentorship_program: c.mentorship_program
            }]) : c.__typename === "MentorshipMessengerProgressTracker" ? b("bs_block").__(49, [{
                id: c.id,
                xma_type: c.xma_type,
                xma_title: c.xma_title,
                xma_body: c.xma_body
            }]) : c.__typename === "Story" ? b("bs_block").__(51, [{
                title: c.title,
                message_richtext: c.message_richtext,
                feedback: c.feedback,
                reaction_count_reduced: c.reaction_count_reduced,
                top_reactions: c.top_reactions,
                post_id: c.post_id,
                creation_time: c.creation_time,
                description: c.description,
                actors: c.actors,
                to: c.to,
                attachments: c.attachments,
                attached_story: c.attached_story
            }]) : c.__typename === "User" ? b("bs_block").__(52, [{
                type: c.__typename,
                id: c.id,
                name: c.name,
                profile_picture: c.profile_picture,
                cover_photo: c.cover_photo,
                work_info: c.work_info,
                subscribe_status: c.subscribe_status
            }]) : c.__typename === "Group" ? b("bs_block").__(53, [{
                type: c.__typename,
                id: c.id,
                name: c.name,
                cover_photo: c.cover_photo,
                visibility: c.visibility,
                visibility_sentence: c.visibility_sentence,
                viewer_join_state: c.viewer_join_state,
                group_general_chat: c.group_general_chat,
                work_groups_sync_metadata: c.work_groups_sync_metadata
            }]) : c.__typename === "AppContent" ? b("bs_block").__(54, [{
                type: c.__typename,
                id: c.id,
                attachment_type_name: c.attachment_type_name,
                privacy_status: c.privacy_status,
                file_type_category: c.file_type_category,
                app_integration: c.app_integration,
                attachment_icon: c.app_integration,
                content_uri: c.content_uri,
                link_preview_additional_data: c.link_preview_additional_data
            }]) : c.__typename === "OneVCMeetingPublic" ? b("bs_block").__(55, [{
                type: c.__typename,
                subject: c.subject,
                joinable_link: c.joinable_link
            }]) : c.__typename === "OfferItem" ? b("bs_block").__(56, [{
                type: c.__typename,
                id: c.id
            }]) : c.__typename === "CommerceProductItemShare" ? b("bs_block").__(57, [{
                type: c.__typename,
                default_action: c.default_action
            }]) : c.__typename === "ApplicationReferralXMA" ? b("bs_block").__(58, [{
                type: c.__typename,
                id: c.id,
                referral_offer_link: c.referral_offer_link
            }]) : c.__typename === "PostPurchaseOrderUpdateXma" ? b("bs_block").__(59, [{
                type: c.__typename,
                order_progress: c.order_progress
            }]) : c.__typename === "InThreadMultiphotoItemCTAData" ? b("bs_block").__(60, [{
                type: c.__typename,
                action_prefill: c.action_prefill,
                ad_id: c.ad_id,
                cta_title: c.cta_title,
                customer_id: c.customer_id,
                index: c.index,
                page_id: c.page_id,
                reply_image_uri: c.reply_image_uri
            }]) : null;
        return {
            description: a.description,
            media: a.media,
            source: a.source,
            style_list: j(a.style_list),
            title_with_entities: a.title_with_entities,
            properties: a.properties,
            url: a.url,
            deduplication_key: a.deduplication_key,
            action_links: a.action_links,
            messaging_attribution: a.messaging_attribution,
            messenger_call_to_actions: a.messenger_call_to_actions,
            xma_layout_info: a.xma_layout_info,
            messenger_generic_xma_template_extra_info: a.messenger_generic_xma_template_extra_info,
            target: d
        }
    }
    function l(a) {
        var b = k({
            description: a.description,
            media: a.media,
            source: a.source,
            style_list: a.style_list,
            title_with_entities: a.title_with_entities,
            properties: a.properties,
            url: a.url,
            deduplication_key: a.deduplication_key,
            action_links: a.action_links,
            messaging_attribution: a.messaging_attribution,
            messenger_call_to_actions: a.messenger_call_to_actions,
            xma_layout_info: a.xma_layout_info,
            messenger_generic_xma_template_extra_info: a.messenger_generic_xma_template_extra_info,
            target: a.target
        });
        if (b == null)
            return null;
        else {
            a = a.subattachments.map(k);
            return Object.assign({
                subattachments: a
            }, b)
        }
    }
    function m(a) {
        a = a.message;
        if (a == null)
            return [];
        else {
            var c = [];
            a.ranges.forEach(function(a) {
                var d = a.entity;
                if (d == null)
                    return 0;
                else {
                    var e = d.id
                      , f = d.thread_key;
                    if (e == null)
                        if (f == null)
                            return 0;
                        else {
                            f = f.thread_fbid;
                            if (f == null)
                                return 0;
                            else {
                                var g = d.__typename, h;
                                switch (g) {
                                case "MessengerViewerGroupThread":
                                    h = b("MessageProfileRangeType").THREAD;
                                    break;
                                case "User":
                                    h = b("MessageProfileRangeType").PROFILE;
                                    break;
                                default:
                                    h = b("MessageProfileRangeType").NONE
                                }
                                c.push({
                                    id: f,
                                    offset: a.offset,
                                    length: a.length,
                                    type: h
                                });
                                return 0
                            }
                        }
                    else {
                        g = d.__typename;
                        var i;
                        switch (g) {
                        case "MessengerViewerGroupThread":
                            i = b("MessageProfileRangeType").THREAD;
                            break;
                        case "User":
                            i = b("MessageProfileRangeType").PROFILE;
                            break;
                        default:
                            i = b("MessageProfileRangeType").NONE
                        }
                        c.push({
                            id: e,
                            offset: a.offset,
                            length: a.length,
                            type: i
                        });
                        return 0
                    }
                }
            });
            return c
        }
    }
    function n(a, c, d, e) {
        var f = {};
        c.message_reactions.forEach(function(a) {
            f[a.user.id] = a.reaction;
            return 0
        });
        var j = b("FBIDCheck").isUser_deprecated(c.message_sender.id)
          , k = j ? b("MessagingTagUtils").getSourceFromTags(c.tags_list) : b("MercurySourceType").UNKNOWN;
        j = j ? b("MessagingTagUtils").getSourceTags(c.tags_list, k) : [];
        var o = c.message_id
          , p = d.thread_id
          , q = d.thread_fbid
          , r = d.other_user_fbid;
        r = p == null ? q == null ? r == null ? null : b("MercuryIDs").getThreadIDFromUserID(r) : b("MercuryIDs").getThreadIDFromThreadFBID(q) : p;
        q = c.tags_list.some(function(a) {
            if (a === "action:copy_message" || a === "copy_self_message" || a === "action:copy_attachment")
                return !0;
            else
                return a === "copy_self_attachment"
        });
        p = c.commerce_message_type;
        var s = c.customizations, t = c.replied_to_message, u;
        if (t == null)
            u = null;
        else {
            var v = t.message;
            u = v == null ? {
                status: t.status,
                message: null
            } : {
                status: t.status,
                message: b("bs_js_null_undefined").fromOption(b("bs_caml_option").some(n(a, v, d, e)))
            }
        }
        t = c.error_data;
        v = c.unsent_timestamp_precise;
        v = v == null || v === "0" ? null : b("bs_js_null_undefined").fromOption(b("bs_caml_format").caml_float_of_string(v));
        var w = c.unsender;
        r = {
            thread_id: r,
            thread_fbid: d.thread_fbid,
            other_user_fbid: d.other_user_fbid,
            action_type: c.__typename === "UserMessage" ? b("MercuryActionType").USER_GENERATED_MESSAGE : b("MercuryActionType").LOG_MESSAGE,
            message_id: o,
            threading_id: null,
            offline_threading_id: c.offline_threading_id,
            author: b("MercuryIDs").getParticipantIDFromUserID(c.message_sender.id),
            author_email: c.message_sender.email,
            ephemeral_ttl_mode: c.ttl,
            timestamp: b("bs_caml_format").caml_float_of_string(c.timestamp_precise),
            is_unread: c.unread,
            is_filtered_content: c.tags_list.indexOf("filtered_content") !== -1,
            is_filtered_content_bh: c.tags_list.indexOf("filtered_content_bh") !== -1,
            is_filtered_content_account: c.tags_list.indexOf("filtered_content_account") !== -1,
            is_filtered_content_quasar: c.tags_list.indexOf("filtered_content_quasar") !== -1,
            is_filtered_content_invalid_app: c.tags_list.indexOf("filtered_content_invalid_app") !== -1,
            is_sponsored: c.is_sponsored,
            is_one_way_sent: c.tags_list.some(function(a) {
                return a === "one_way_message"
            }),
            ad_id: c.ad_id,
            ad_client_token: c.ad_client_token,
            commerce_message_type: p == null ? null : b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MNCommerceMessageType"), p)),
            customizations: s == null ? [] : s,
            source: k,
            source_tags: j,
            tags: c.tags_list,
            is_spoof_warning: c.tags_list.indexOf("MTA:dmarc:fail") !== -1 || c.tags_list.indexOf("spam:spoofing") !== -1 || c.tags_list.indexOf("MTA:spoof_warning") !== -1,
            folder: d.folder,
            platform_xmd: c.platform_xmd_encoded,
            m_suggestions: c.m_suggestions,
            message_source: c.message_source_data,
            montage_reply_data: c.montage_reply_data,
            replied_to_message: u,
            skip_bump_thread: !1,
            profile_ranges: m(c),
            reactions: f,
            error_data: t == null ? null : {
                description: t.description
            },
            removed_timestamp: v,
            unsender: w == null ? null : {
                id: b("MercuryIDs").getParticipantIDFromUserID(w.messaging_actor.id),
                name: w.messaging_actor.name,
                short_name: w.messaging_actor.short_name
            },
            verse_group_role_xmd: c.verse_group_role_xmd,
            mib_direct_message_data: c.mib_direct_message_data,
            message_unsendability_status: b("MessageUnsendabilityStatus.bs").fromNullableString(c.message_unsendability_status),
            has_attachment: null,
            attachments: null,
            raw_attachments: null,
            ranges: null,
            meta_ranges: null,
            status: null,
            log_message_type: null,
            log_message_data: null,
            log_message_body: null,
            body: null,
            subject: null,
            creator_info: null,
            is_forwarded: q,
            preview_attachments: null,
            sticker_id: null
        };
        if (c.__typename === "UserMessage") {
            p = g(c);
            s = c.extensible_attachment;
            if (s == null)
                k = null;
            else {
                j = s.story_attachment;
                u = s.genie_attachment;
                if (u == null)
                    t = null;
                else {
                    v = u.genie_message;
                    if (v == null)
                        w = null;
                    else {
                        q = v.story_attachment;
                        w = {
                            story_attachment: q == null ? null : l(q)
                        }
                    }
                    t = {
                        genie_message: w
                    }
                }
                k = {
                    legacy_attachment_id: s.legacy_attachment_id,
                    story_attachment: j == null ? null : l(j),
                    genie_attachment: t
                }
            }
            u = b("MessengerAttachmentTransformer.bs").transformAttachment(a, {
                extensible_attachment: k,
                blob_attachments: p,
                sticker: c.sticker
            }, o, e);
            v = c.message;
            q = c.page_admin_sender;
            Object.assign(r, {
                body: v == null ? null : v.text,
                creator_info: q == null ? null : {
                    creatorID: q.admin_id,
                    creatorName: q.name,
                    creatorType: q.sender_type,
                    labelType: q.label_type,
                    pageID: q.page_id,
                    profileURI: q.profile_uri
                },
                subject: null,
                has_attachment: u.length > 0,
                attachments: u,
                raw_attachments: null,
                ranges: void 0,
                meta_ranges: c.meta_ranges.map(function(a) {
                    return babelHelpers["extends"]({}, a, {
                        data: JSON.parse(a.data)
                    })
                })
            })
        } else if (c.__typename === "VoiceCallMessage" || c.__typename === "VideoCallMessage") {
            w = c.__typename;
            s = w === "VoiceCallMessage" ? b("MercuryLogMessageType").PHONE_CALL : b("MercuryLogMessageType").VIDEO_CALL;
            j = c.message_sender.id;
            t = d.other_user_fbid;
            k = t == null ? null : b("MercuryIDs").getParticipantIDFromUserID(j === t ? b("CurrentUser").getID() : t);
            p = c.answered;
            Object.assign(r, {
                log_message_type: s,
                log_message_data: {
                    answered: p == null ? !1 : p,
                    call_capture_attachments: h(a, c, e),
                    caller: b("MercuryIDs").getParticipantIDFromUserID(j),
                    callee: k
                },
                log_message_body: c.snippet
            })
        } else if (c.__typename === "ThreadNameMessage")
            Object.assign(r, {
                log_message_type: b("MercuryLogMessageType").THREAD_NAME,
                log_message_data: {
                    name: c.thread_name
                },
                log_message_body: c.snippet
            });
        else if (c.__typename === "ThreadImageMessage") {
            o = c.image_with_metadata;
            if (o == null)
                v = null;
            else {
                q = o.preview;
                v = {
                    preview_url: q == null ? null : q.uri,
                    metadata: {
                        fbid: o.legacy_attachment_id,
                        dimensions: String(o.original_dimensions.x) + ("," + String(o.original_dimensions.y))
                    }
                }
            }
            Object.assign(r, {
                log_message_type: b("MercuryLogMessageType").THREAD_IMAGE,
                log_message_data: {
                    image: v
                },
                log_message_body: c.snippet
            })
        } else if (c.__typename === "ParticipantsAddedMessage") {
            u = c.participants_added;
            Object.assign(r, {
                log_message_type: b("MercuryLogMessageType").SUBSCRIBE,
                log_message_data: {
                    added_participants: u == null ? [] : u.map(function(a) {
                        return b("MercuryIDs").getParticipantIDFromUserID(a.id)
                    })
                },
                log_message_body: c.snippet
            })
        } else if (c.__typename === "ParticipantLeftMessage") {
            w = c.participants_removed;
            Object.assign(r, {
                log_message_type: b("MercuryLogMessageType").UNSUBSCRIBE,
                log_message_data: {
                    removed_participants: w == null ? [] : w.map(function(a) {
                        return b("MercuryIDs").getParticipantIDFromUserID(a.id)
                    })
                },
                log_message_body: c.snippet
            })
        } else if (c.__typename === "GenericAdminTextMessage") {
            d = c.extensible_message_admin_text;
            t = c.extensible_message_admin_text_type;
            d == null ? t == null || Object.assign(r, {
                log_message_body: c.snippet,
                log_message_data: {
                    message_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MessagingGenericAdminTextType"), t)),
                    untypedData: void 0
                },
                log_message_type: b("MercuryLogMessageType").GENERIC_ADMIN_TEXT
            }) : t == null || Object.assign(r, i(a, d, t, c.snippet, e))
        } else if (c.__typename === "P2PPaymentRequestMessage" || c.__typename === "P2PPaymentMessage") {
            s = c.p2p_sender;
            p = c.p2p_receiver;
            j = c.amount;
            k = c.message_type;
            Object.assign(r, {
                log_message_body: c.snippet,
                log_message_data: {
                    transfer_id: c.transfer_id,
                    senderId: s == null ? null : b("MercuryIDs").getParticipantIDFromUserID(s.id),
                    receiverId: p == null ? null : b("MercuryIDs").getParticipantIDFromUserID(p.id),
                    formattedAmount: j == null ? null : j.formatted,
                    subtype: k == null ? null : b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("P2PPaymentLogMessageSubtype"), k))
                },
                log_message_type: b("MercuryLogMessageType").ORION
            })
        }
        return r
    }
    f.unsafeCastBlobAttachments = g;
    f._getCallCaptureAttachments = h;
    f._getGenericAdminTextMessage = i;
    f._getStyleList = j;
    f.unsafeCastExtensibleAttachmentWithoutSubattachments = k;
    f.unsafeCastExtensibleAttachment = l;
    f._getProfileRanges = m;
    f.transformMessage = n
}
), null);
