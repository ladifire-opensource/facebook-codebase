if (self.CavalryLogger) {
    CavalryLogger.start_js(["D0dmy"]);
}

__d("routeBuilderUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.getPathParts = a;
    function a(a) {
        a = a.split("/");
        return a.filter(function(a) {
            return a !== ""
        }).map(function(a) {
            var b = a.split(/{|}/);
            if (b.length < 3)
                return {
                    isToken: !1,
                    part: a
                };
            else {
                a = b[0];
                var c = b[1];
                b = b[2];
                var d = c[0] === "?"
                  , e = c[d ? 1 : 0] === "*";
                c = c.substring((d ? 1 : 0) + (e ? 1 : 0));
                return {
                    isToken: !0,
                    optional: d,
                    prefix: a,
                    suffix: b,
                    token: c
                }
            }
        })
    }
}
), null);
__d("jsRouteBuilder", ["ConstUriUtils", "FBLogger", "routeBuilderUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c, d, e, f) {
        f === void 0 && (f = !1);
        var g = b("routeBuilderUtils").getPathParts(a);
        function h(f) {
            var h = e != null ? babelHelpers["extends"]({}, e, f) : f
              , i = {};
            f = "";
            var j = !1;
            f = g.reduce(function(a, b) {
                if (!b.isToken)
                    return a + "/" + b.part;
                else {
                    var d, e = b.optional, f = b.prefix, g = b.suffix;
                    b = b.token;
                    if (e && j)
                        return a;
                    d = (d = h[b]) != null ? d : c[b];
                    if (d == null && e) {
                        j = !0;
                        return a
                    }
                    if (d == null)
                        throw new Error("Missing required template parameter: " + b);
                    if (d === "")
                        throw new Error("Required template parameter is an empty string: " + b);
                    i[b] = !0;
                    return a + "/" + f + d + g
                }
            }, "");
            a.slice(-1) === "/" && (f += "/");
            f === "" && (f = "/");
            var k = b("ConstUriUtils").getUri(f);
            for (var l in h) {
                var m = h[l];
                !i[l] && m != null && k != null && (d != null && d.has(l) ? m !== !1 && (k = k.addQueryParam(l, null)) : k = k.addQueryParam(l, m))
            }
            return k == null ? f : k.toString()
        }
        return {
            buildURL: function(c) {
                try {
                    return h(c)
                } catch (e) {
                    c = e == null ? void 0 : e.message;
                    var d = b("FBLogger")("JSRouteBuilder").blameToPreviousFrame();
                    f && (d = d.blameToPreviousFrame());
                    d.mustfix("Failed building URL for base path: %s message: %s", a, c);
                    return "#"
                }
            }
        }
    }
}
), null);
__d("XCometContextualProfileControllerRouteBuilder", ["jsRouteBuilder"], (function(a, b, c, d, e, f) {
    a = b("jsRouteBuilder")("/groups/{group_id}/user/{member_id}/", Object.freeze({}), void 0);
    c = a;
    e.exports = c
}
), null);
__d("CometFRXQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "3731590350198129",
            metadata: {
                relayPreloadable: !0
            },
            name: "CometFRXQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("ActorURIConfig", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        PARAMETER_ACTOR: "av",
        ENCRYPTED_PARAMETER_ACTOR: "eav"
    })
}
), null);
__d("relay-runtime/store/ClientID", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = "client:";
    function a(a, b, c) {
        a = a + ":" + b;
        c != null && (a += ":" + c);
        a.indexOf(g) !== 0 && (a = g + a);
        return a
    }
    function b(a) {
        return a.indexOf(g) === 0
    }
    var h = 0;
    function c() {
        return g + "local:" + h++
    }
    e.exports = {
        generateClientID: a,
        generateUniqueClientID: c,
        isClientID: b
    }
}
), null);
__d("relay-runtime/util/RelayConcreteNode", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        CONDITION: "Condition",
        CLIENT_EXTENSION: "ClientExtension",
        DEFER: "Defer",
        CONNECTION: "Connection",
        FLIGHT_FIELD: "FlightField",
        FRAGMENT: "Fragment",
        FRAGMENT_SPREAD: "FragmentSpread",
        INLINE_DATA_FRAGMENT_SPREAD: "InlineDataFragmentSpread",
        INLINE_DATA_FRAGMENT: "InlineDataFragment",
        INLINE_FRAGMENT: "InlineFragment",
        LINKED_FIELD: "LinkedField",
        LINKED_HANDLE: "LinkedHandle",
        LITERAL: "Literal",
        LIST_VALUE: "ListValue",
        LOCAL_ARGUMENT: "LocalArgument",
        MODULE_IMPORT: "ModuleImport",
        REQUIRED_FIELD: "RequiredField",
        OBJECT_VALUE: "ObjectValue",
        OPERATION: "Operation",
        REQUEST: "Request",
        ROOT_ARGUMENT: "RootArgument",
        SCALAR_FIELD: "ScalarField",
        SCALAR_HANDLE: "ScalarHandle",
        SPLIT_OPERATION: "SplitOperation",
        STREAM: "Stream",
        TYPE_DISCRIMINATOR: "TypeDiscriminator",
        VARIABLE: "Variable"
    };
    e.exports = a
}
), null);
__d("relay-runtime/util/RelayDefaultHandleKey", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = {
        DEFAULT_HANDLE_KEY: ""
    }
}
), null);
__d("relay-runtime/util/getRelayHandleKey", ["invariant", "relay-runtime/util/RelayDefaultHandleKey"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("relay-runtime/util/RelayDefaultHandleKey").DEFAULT_HANDLE_KEY;
    function a(a, b, c) {
        if (b && b !== h)
            return "__" + b + "_" + a;
        c != null || g(0, 3311);
        return "__" + c + "_" + a
    }
    e.exports = a
}
), null);
__d("relay-runtime/util/stableCopy", [], (function(a, b, c, d, e, f) {
    "use strict";
    function g(a) {
        if (!a || typeof a !== "object")
            return a;
        if (Array.isArray(a))
            return a.map(g);
        var b = Object.keys(a).sort()
          , c = {};
        for (var d = 0; d < b.length; d++)
            c[b[d]] = g(a[b[d]]);
        return c
    }
    e.exports = g
}
), null);
__d("relay-runtime/store/RelayStoreUtils", ["invariant", "relay-runtime/util/RelayConcreteNode", "relay-runtime/util/getRelayHandleKey", "relay-runtime/util/stableCopy"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = (i = b("relay-runtime/util/RelayConcreteNode")).VARIABLE, k = i.LITERAL, l = i.OBJECT_VALUE, m = i.LIST_VALUE, n = "__module_component_", o = "__module_operation_";
    function p(a, b) {
        if (a.kind === j)
            return s(a.variableName, b);
        else if (a.kind === k)
            return a.value;
        else if (a.kind === l) {
            var c = {};
            a.fields.forEach(function(a) {
                c[a.name] = p(a, b)
            });
            return c
        } else if (a.kind === m) {
            var d = [];
            a.items.forEach(function(a) {
                a != null ? d.push(p(a, b)) : null
            });
            return d
        }
    }
    function q(a, b) {
        var c = {};
        a.forEach(function(a) {
            c[a.name] = p(a, b)
        });
        return c
    }
    function a(a, c) {
        var d = a.dynamicKey
          , e = a.handle
          , f = a.key
          , g = a.name
          , h = a.args
          , i = a.filters;
        a = b("relay-runtime/util/getRelayHandleKey")(e, f, g);
        e = null;
        h && i && h.length !== 0 && i.length !== 0 && (e = h.filter(function(a) {
            return i.indexOf(a.name) > -1
        }));
        d && (e = e != null ? [d].concat(e) : [d]);
        if (e === null)
            return a;
        else
            return r(a, q(e, c))
    }
    function c(a, b) {
        if (a.storageKey)
            return a.storageKey;
        var c = a.args;
        a = a.name;
        return c && c.length !== 0 ? r(a, q(c, b)) : a
    }
    function d(a, c) {
        return r(a, (h || (h = b("relay-runtime/util/stableCopy")))(c))
    }
    function r(a, b) {
        if (!b)
            return a;
        var c = [];
        for (var d in b)
            if (Object.prototype.hasOwnProperty.call(b, d)) {
                var e = b[d];
                if (e != null) {
                    c.push(d + ":" + ((e = JSON.stringify(e)) != null ? e : "undefined"))
                }
            }
        return c.length === 0 ? a : a + ("(" + c.join(",") + ")")
    }
    function s(a, c) {
        Object.prototype.hasOwnProperty.call(c, a) || g(0, 5557, a);
        return (h || (h = b("relay-runtime/util/stableCopy")))(c[a])
    }
    function f(a) {
        return "" + n + a
    }
    function t(a) {
        return "" + o + a
    }
    i = {
        FRAGMENTS_KEY: "__fragments",
        FRAGMENT_OWNER_KEY: "__fragmentOwner",
        FRAGMENT_PROP_NAME_KEY: "__fragmentPropName",
        MODULE_COMPONENT_KEY: "__module_component",
        ID_KEY: "__id",
        REF_KEY: "__ref",
        REFS_KEY: "__refs",
        ROOT_ID: "client:root",
        ROOT_TYPE: "__Root",
        TYPENAME_KEY: "__typename",
        INVALIDATED_AT_KEY: "__invalidated_at",
        IS_WITHIN_UNMATCHED_TYPE_REFINEMENT: "__isWithinUnmatchedTypeRefinement",
        formatStorageKey: r,
        getArgumentValue: p,
        getArgumentValues: q,
        getHandleStorageKey: a,
        getStorageKey: c,
        getStableStorageKey: d,
        getModuleComponentKey: f,
        getModuleOperationKey: t
    };
    e.exports = i
}
), null);
__d("relay-runtime/mutations/RelayRecordProxy", ["invariant", "relay-runtime/store/ClientID", "relay-runtime/store/RelayStoreUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("relay-runtime/store/ClientID").generateClientID
      , i = b("relay-runtime/store/RelayStoreUtils").getStableStorageKey;
    a = function() {
        function a(a, b, c) {
            this.$1 = c,
            this.$2 = b,
            this.$3 = a
        }
        var b = a.prototype;
        b.copyFieldsFrom = function(a) {
            this.$2.copyFields(a.getDataID(), this.$1)
        }
        ;
        b.getDataID = function() {
            return this.$1
        }
        ;
        b.getType = function() {
            var a = this.$2.getType(this.$1);
            a != null || g(0, 4314, this.$1);
            return a
        }
        ;
        b.getValue = function(a, b) {
            a = i(a, b);
            return this.$2.getValue(this.$1, a)
        }
        ;
        b.setValue = function(a, b, c) {
            j(a) || g(0, 4315, JSON.stringify(a));
            b = i(b, c);
            this.$2.setValue(this.$1, b, a);
            return this
        }
        ;
        b.getLinkedRecord = function(a, b) {
            a = i(a, b);
            b = this.$2.getLinkedRecordID(this.$1, a);
            return b != null ? this.$3.get(b) : b
        }
        ;
        b.setLinkedRecord = function(b, c, d) {
            b instanceof a || g(0, 4316, b);
            c = i(c, d);
            d = b.getDataID();
            this.$2.setLinkedRecordID(this.$1, c, d);
            return this
        }
        ;
        b.getOrCreateLinkedRecord = function(a, b, c) {
            var d = this.getLinkedRecord(a, c);
            if (!d) {
                var e, f = i(a, c);
                f = h(this.getDataID(), f);
                d = (e = this.$3.get(f)) != null ? e : this.$3.create(f, b);
                this.setLinkedRecord(d, a, c)
            }
            return d
        }
        ;
        b.getLinkedRecords = function(a, b) {
            var c = this;
            a = i(a, b);
            b = this.$2.getLinkedRecordIDs(this.$1, a);
            return b == null ? b : b.map(function(a) {
                return a != null ? c.$3.get(a) : a
            })
        }
        ;
        b.setLinkedRecords = function(a, b, c) {
            Array.isArray(a) || g(0, 4317, a);
            b = i(b, c);
            c = a.map(function(a) {
                return a && a.getDataID()
            });
            this.$2.setLinkedRecordIDs(this.$1, b, c);
            return this
        }
        ;
        b.invalidateRecord = function() {
            this.$3.markIDForInvalidation(this.$1)
        }
        ;
        return a
    }();
    function j(a) {
        return a == null || typeof a !== "object" || Array.isArray(a) && a.every(j)
    }
    e.exports = a
}
), null);
__d("relay-runtime/util/deepFreeze", [], (function(a, b, c, d, e, f) {
    "use strict";
    function g(a) {
        Object.freeze(a);
        Object.getOwnPropertyNames(a).forEach(function(b) {
            b = a[b];
            b && typeof b === "object" && !Object.isFrozen(b) && g(b)
        });
        return a
    }
    e.exports = g
}
), null);
__d("warning", ["requireCond", "cr:888908", "cr:1105154"], (function(a, b, c, d, e, f) {
    a = b("cr:888908");
    c = a;
    e.exports = c
}
), null);
__d("relay-runtime/store/RelayModernRecord", ["invariant", "areEqual", "relay-runtime/util/deepFreeze", "warning", "relay-runtime/store/ClientID", "relay-runtime/store/RelayStoreUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = b("relay-runtime/store/ClientID").isClientID, k = (j = b("relay-runtime/store/RelayStoreUtils")).ID_KEY, l = j.REF_KEY, m = j.REFS_KEY, n = j.TYPENAME_KEY, o = j.INVALIDATED_AT_KEY;
    j = j.ROOT_ID;
    function a(a) {
        return babelHelpers["extends"]({}, a)
    }
    function c(a, b) {
        for (var c in a)
            Object.prototype.hasOwnProperty.call(a, c) && (c !== k && c !== n && (b[c] = a[c]))
    }
    function d(a, b) {
        var c = {};
        c[k] = a;
        c[n] = b;
        return c
    }
    function f(a) {
        return a[k]
    }
    function p(a) {
        return a[n]
    }
    function q(a, b) {
        var c = a[b];
        c && typeof c === "object" && (!Object.prototype.hasOwnProperty.call(c, l) && !Object.prototype.hasOwnProperty.call(c, m) || g(0, 696, a[k], b, Object.prototype.hasOwnProperty.call(c, l) ? "a linked record" : "plural linked records"));
        return c
    }
    function r(a, b) {
        var c = a[b];
        if (c == null)
            return c;
        typeof c === "object" && c && typeof c[l] === "string" || g(0, 697, a[k], b, JSON.stringify(c));
        return c[l]
    }
    function s(a, b) {
        var c = a[b];
        if (c == null)
            return c;
        typeof c === "object" && Array.isArray(c[m]) || g(0, 698, a[k], b, JSON.stringify(c));
        return c[m]
    }
    function t(a) {
        if (a == null)
            return null;
        a = a[o];
        return typeof a !== "number" ? null : a
    }
    function u(a, c) {
        var d = null
          , e = Object.keys(c);
        for (var f = 0; f < e.length; f++) {
            var g = e[f];
            (d || !(h || (h = b("areEqual")))(a[g], c[g])) && (d = d !== null ? d : babelHelpers["extends"]({}, a),
            d[g] = c[g])
        }
        return d !== null ? d : a
    }
    function v(a, b) {
        return Object.assign({}, a, b)
    }
    function w(a) {
        (i || (i = b("relay-runtime/util/deepFreeze")))(a)
    }
    function x(a, b, c) {
        a[b] = c
    }
    function y(a, b, c) {
        var d = {};
        d[l] = c;
        a[b] = d
    }
    function z(a, b, c) {
        var d = {};
        d[m] = c;
        a[b] = d
    }
    e.exports = {
        clone: a,
        copyFields: c,
        create: d,
        freeze: w,
        getDataID: f,
        getInvalidationEpoch: t,
        getLinkedRecordID: r,
        getLinkedRecordIDs: s,
        getType: p,
        getValue: q,
        merge: v,
        setValue: x,
        setLinkedRecordID: y,
        setLinkedRecordIDs: z,
        update: u
    }
}
), null);
__d("relay-runtime/store/RelayRecordState", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        EXISTENT: "EXISTENT",
        NONEXISTENT: "NONEXISTENT",
        UNKNOWN: "UNKNOWN"
    };
    e.exports = a
}
), null);
__d("relay-runtime/mutations/RelayRecordSourceProxy", ["invariant", "relay-runtime/store/RelayModernRecord", "relay-runtime/mutations/RelayRecordProxy", "relay-runtime/store/RelayRecordState", "relay-runtime/store/RelayStoreUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = b("relay-runtime/store/RelayRecordState").EXISTENT, j = b("relay-runtime/store/RelayRecordState").NONEXISTENT, k = b("relay-runtime/store/RelayStoreUtils").ROOT_ID, l = b("relay-runtime/store/RelayStoreUtils").ROOT_TYPE;
    a = function() {
        function a(a, b, c) {
            this.__mutator = a,
            this.$1 = c || null,
            this.$2 = {},
            this.$3 = b,
            this.$4 = !1,
            this.$5 = new Set()
        }
        var c = a.prototype;
        c.publishSource = function(a, c) {
            var d = this
              , e = a.getRecordIDs();
            e.forEach(function(c) {
                var e = a.getStatus(c);
                if (e === i) {
                    var f = a.get(c);
                    f && (d.__mutator.getStatus(c) !== i && d.create(c, (h || (h = b("relay-runtime/store/RelayModernRecord"))).getType(f)),
                    d.__mutator.copyFieldsFromRecord(f, c))
                } else
                    e === j && d["delete"](c)
            });
            c && c.length && c.forEach(function(a) {
                var b = d.$1 && d.$1(a.handle);
                b || g(0, 681, a.handle);
                b.update(d, a)
            })
        }
        ;
        c.create = function(a, b) {
            this.__mutator.create(a, b);
            delete this.$2[a];
            b = this.get(a);
            b || g(0, 2120);
            return b
        }
        ;
        c["delete"] = function(a) {
            a !== k || g(0, 2121),
            delete this.$2[a],
            this.__mutator["delete"](a)
        }
        ;
        c.get = function(a) {
            if (!Object.prototype.hasOwnProperty.call(this.$2, a)) {
                var c = this.__mutator.getStatus(a);
                c === i ? this.$2[a] = new (b("relay-runtime/mutations/RelayRecordProxy"))(this,this.__mutator,a) : this.$2[a] = c === j ? null : void 0
            }
            return this.$2[a]
        }
        ;
        c.getRoot = function() {
            var a = this.get(k);
            a || (a = this.create(k, l));
            a && a.getType() === l || g(0, 21125, a == null ? "no root record found" : "found a root record of type `" + a.getType() + "`");
            return a
        }
        ;
        c.invalidateStore = function() {
            this.$4 = !0
        }
        ;
        c.isStoreMarkedForInvalidation = function() {
            return this.$4
        }
        ;
        c.markIDForInvalidation = function(a) {
            this.$5.add(a)
        }
        ;
        c.getIDsMarkedForInvalidation = function() {
            return this.$5
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("relay-runtime/mutations/RelayRecordSourceSelectorProxy", ["invariant", "relay-runtime/store/RelayStoreUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("relay-runtime/store/RelayStoreUtils").getStorageKey
      , i = b("relay-runtime/store/RelayStoreUtils").ROOT_TYPE;
    a = function() {
        function a(a, b, c) {
            this.__mutator = a,
            this.__recordSource = b,
            this.$1 = c
        }
        var b = a.prototype;
        b.create = function(a, b) {
            return this.__recordSource.create(a, b)
        }
        ;
        b["delete"] = function(a) {
            this.__recordSource["delete"](a)
        }
        ;
        b.get = function(a) {
            return this.__recordSource.get(a)
        }
        ;
        b.getRoot = function() {
            return this.__recordSource.getRoot()
        }
        ;
        b.getOperationRoot = function() {
            var a = this.__recordSource.get(this.$1.dataID);
            a || (a = this.__recordSource.create(this.$1.dataID, i));
            return a
        }
        ;
        b.$2 = function(a, b, c) {
            var d = a.node.selections.find(function(a) {
                return a.kind === "LinkedField" && a.name === b
            });
            d && d.kind === "LinkedField" || g(0, 1951, b, a.node.name);
            d.plural === c || g(0, 1952, b, c ? "plural" : "singular");
            return d
        }
        ;
        b.getRootField = function(a) {
            a = this.$2(this.$1, a, !1);
            a = h(a, this.$1.variables);
            return this.getOperationRoot().getLinkedRecord(a)
        }
        ;
        b.getPluralRootField = function(a) {
            a = this.$2(this.$1, a, !0);
            a = h(a, this.$1.variables);
            return this.getOperationRoot().getLinkedRecords(a)
        }
        ;
        b.invalidateStore = function() {
            this.__recordSource.invalidateStore()
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("RelayFBConnectionHandler_UNSTABLE", ["invariant", "relay-runtime/mutations/RelayRecordProxy", "relay-runtime/mutations/RelayRecordSourceProxy", "relay-runtime/mutations/RelayRecordSourceSelectorProxy", "relay-runtime/util/getRelayHandleKey"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "connection";
    function a(a, c, d, e) {
        e === void 0 && (e = h);
        var f = []
          , i = b("relay-runtime/util/getRelayHandleKey")(e, d, null);
        a instanceof b("relay-runtime/mutations/RelayRecordSourceSelectorProxy") && (a = a.__recordSource);
        c instanceof b("relay-runtime/mutations/RelayRecordProxy") && a instanceof b("relay-runtime/mutations/RelayRecordSourceProxy") || g(0, 14424);
        e = a.__mutator.unstable_getRawRecordWithChanges(c.getDataID());
        if (e == null)
            return e;
        Object.keys(e).forEach(function(a) {
            if (a !== i && a.indexOf(i + "(") !== 0)
                return;
            a = c.getLinkedRecord(a);
            a != null && f.push(a)
        });
        return f
    }
    e.exports = {
        unstable_getAllConnectionsWithKey: a
    }
}
), null);
__d("relay-runtime/handlers/connection/ConnectionInterface", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {
        after: !0,
        before: !0,
        find: !0,
        first: !0,
        last: !0,
        surrounds: !0
    }
      , h = {
        CLIENT_MUTATION_ID: "clientMutationId",
        CURSOR: "cursor",
        EDGES: "edges",
        END_CURSOR: "endCursor",
        HAS_NEXT_PAGE: "hasNextPage",
        HAS_PREV_PAGE: "hasPreviousPage",
        NODE: "node",
        PAGE_INFO_TYPE: "PageInfo",
        PAGE_INFO: "pageInfo",
        START_CURSOR: "startCursor"
    };
    a = {
        inject: function(a) {
            h = a
        },
        get: function() {
            return h
        },
        isConnectionCall: function(a) {
            return Object.prototype.hasOwnProperty.call(g, a.name)
        }
    };
    e.exports = a
}
), null);
__d("relay-runtime/handlers/connection/ConnectionHandler", ["invariant", "relay-runtime/handlers/connection/ConnectionInterface", "relay-runtime/util/getRelayHandleKey", "warning", "relay-runtime/store/ClientID"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("relay-runtime/store/ClientID").generateClientID
      , i = "connection"
      , j = "__connection_next_edge_index";
    function a(a, c) {
        var d, e = a.get(c.dataID);
        if (!e)
            return;
        var f = b("relay-runtime/handlers/connection/ConnectionInterface").get()
          , g = f.EDGES
          , i = f.END_CURSOR
          , k = f.HAS_NEXT_PAGE
          , l = f.HAS_PREV_PAGE
          , o = f.PAGE_INFO
          , p = f.PAGE_INFO_TYPE;
        f = f.START_CURSOR;
        var q = e.getLinkedRecord(c.fieldKey)
          , r = q && q.getLinkedRecord(o);
        if (!q) {
            e.setValue(null, c.handleKey);
            return
        }
        var s = h(e.getDataID(), c.handleKey)
          , t = e.getLinkedRecord(c.handleKey);
        d = (d = t) != null ? d : a.get(s);
        var u = d && d.getLinkedRecord(o);
        if (!d) {
            var v = a.create(s, q.getType());
            v.setValue(0, j);
            v.copyFieldsFrom(q);
            s = q.getLinkedRecords(g);
            s && (s = s.map(function(b) {
                return m(a, v, b)
            }),
            v.setLinkedRecords(s, g));
            e.setLinkedRecord(v, c.handleKey);
            u = a.create(h(v.getDataID(), o), p);
            u.setValue(!1, k);
            u.setValue(!1, l);
            u.setValue(null, i);
            u.setValue(null, f);
            r && u.copyFieldsFrom(r);
            v.setLinkedRecord(u, o)
        } else {
            t == null && e.setLinkedRecord(d, c.handleKey);
            var w = d;
            s = q.getLinkedRecords(g);
            s && (s = s.map(function(b) {
                return m(a, w, b)
            }));
            p = w.getLinkedRecords(g);
            t = w.getLinkedRecord(o);
            w.copyFieldsFrom(q);
            p && w.setLinkedRecords(p, g);
            t && w.setLinkedRecord(t, o);
            e = [];
            d = c.args;
            if (p && s)
                if (d.after != null)
                    if (u && d.after === u.getValue(i)) {
                        q = new Set();
                        n(p, e, q);
                        n(s, e, q)
                    } else {
                        b("warning")(!1, "Relay: Unexpected after cursor `%s`, edges must be fetched from the end of the list (`%s`).", d.after, u && u.getValue(i));
                        return
                    }
                else if (d.before != null)
                    if (u && d.before === u.getValue(f)) {
                        t = new Set();
                        n(s, e, t);
                        n(p, e, t)
                    } else {
                        b("warning")(!1, "Relay: Unexpected before cursor `%s`, edges must be fetched from the beginning of the list (`%s`).", d.before, u && u.getValue(f));
                        return
                    }
                else
                    e = s;
            else
                s ? e = s : e = p;
            e != null && e !== p && w.setLinkedRecords(e, g);
            if (u && r)
                if (d.after == null && d.before == null)
                    u.copyFieldsFrom(r);
                else if (d.before != null || d.after == null && d.last) {
                    u.setValue(!!r.getValue(l), l);
                    o = r.getValue(f);
                    typeof o === "string" && u.setValue(o, f)
                } else if (d.after != null || d.before == null && d.first) {
                    u.setValue(!!r.getValue(k), k);
                    c = r.getValue(i);
                    typeof c === "string" && u.setValue(c, i)
                }
        }
    }
    function c(a, c, d) {
        c = b("relay-runtime/util/getRelayHandleKey")(i, c, null);
        return a.getLinkedRecord(c, d)
    }
    function d(a, c, d) {
        var e = b("relay-runtime/handlers/connection/ConnectionInterface").get()
          , f = e.CURSOR;
        e = e.EDGES;
        var g = a.getLinkedRecords(e);
        if (!g) {
            a.setLinkedRecords([c], e);
            return
        }
        var h;
        if (d == null)
            h = g.concat(c);
        else {
            h = [];
            var i = !1;
            for (var j = 0; j < g.length; j++) {
                var k = g[j];
                h.push(k);
                if (k == null)
                    continue;
                k = k.getValue(f);
                d === k && (h.push(c),
                i = !0)
            }
            i || h.push(c)
        }
        a.setLinkedRecords(h, e)
    }
    function f(a, c, d, e) {
        var f = b("relay-runtime/handlers/connection/ConnectionInterface").get();
        f = f.NODE;
        c = h(c.getDataID(), d.getDataID());
        var g = a.get(c);
        g || (g = a.create(c, e));
        g.setLinkedRecord(d, f);
        return g
    }
    function k(a, c, d) {
        var e = b("relay-runtime/handlers/connection/ConnectionInterface").get()
          , f = e.CURSOR;
        e = e.EDGES;
        var g = a.getLinkedRecords(e);
        if (!g) {
            a.setLinkedRecords([c], e);
            return
        }
        var h;
        if (d == null)
            h = [c].concat(g);
        else {
            h = [];
            var i = !1;
            for (var j = 0; j < g.length; j++) {
                var k = g[j];
                if (k != null) {
                    var l = k.getValue(f);
                    d === l && (h.push(c),
                    i = !0)
                }
                h.push(k)
            }
            i || h.unshift(c)
        }
        a.setLinkedRecords(h, e)
    }
    function l(a, c) {
        var d = b("relay-runtime/handlers/connection/ConnectionInterface").get()
          , e = d.EDGES;
        d = d.NODE;
        var f = a.getLinkedRecords(e);
        if (!f)
            return;
        var g;
        for (var h = 0; h < f.length; h++) {
            var i = f[h]
              , j = i && i.getLinkedRecord(d);
            j != null && j.getDataID() === c ? g === void 0 && (g = f.slice(0, h)) : g !== void 0 && g.push(i)
        }
        g !== void 0 && a.setLinkedRecords(g, e)
    }
    function m(a, c, d) {
        if (d == null)
            return d;
        var e = b("relay-runtime/handlers/connection/ConnectionInterface").get();
        e = e.EDGES;
        var f = c.getValue(j);
        typeof f === "number" || g(0, 20561, j, f);
        e = h(c.getDataID(), e, f);
        a = a.create(e, d.getType());
        a.copyFieldsFrom(d);
        c.setValue(f + 1, j);
        return a
    }
    function n(a, c, d) {
        var e = b("relay-runtime/handlers/connection/ConnectionInterface").get();
        e = e.NODE;
        for (var f = 0; f < a.length; f++) {
            var g = a[f];
            if (!g)
                continue;
            var h = g.getLinkedRecord(e);
            h = h && h.getDataID();
            if (h) {
                if (d.has(h))
                    continue;
                d.add(h)
            }
            c.push(g)
        }
    }
    e.exports = {
        buildConnectionEdge: m,
        createEdge: f,
        deleteNode: l,
        getConnection: c,
        insertEdgeAfter: d,
        insertEdgeBefore: k,
        update: a
    }
}
), null);
__d("relay-runtime/handlers/connection/MutationHandlers", ["invariant", "relay-runtime/handlers/connection/ConnectionHandler", "warning"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    d = {
        update: function(a, b) {
            var c = a.get(b.dataID);
            if (c != null) {
                c = c.getValue(b.fieldKey);
                typeof c === "string" ? a["delete"](c) : Array.isArray(c) && c.forEach(function(b) {
                    typeof b === "string" && a["delete"](b)
                })
            }
        }
    };
    f = {
        update: function(a, c) {
            var d = a.get(c.dataID);
            if (d == null)
                return;
            var e = c.handleArgs.connections;
            e != null || g(0, 23070);
            d = d.getValue(c.fieldKey);
            c = Array.isArray(d) ? d : [d];
            c.forEach(function(c) {
                if (typeof c === "string")
                    for (var d = e, f = Array.isArray(d), g = 0, d = f ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                        var h;
                        if (f) {
                            if (g >= d.length)
                                break;
                            h = d[g++]
                        } else {
                            g = d.next();
                            if (g.done)
                                break;
                            h = g.value
                        }
                        h = h;
                        var i = a.get(h);
                        if (i == null) {
                            b("warning")(!1, "[Relay][Mutation] The connection with id '" + h + "' doesn't exist.");
                            continue
                        }
                        b("relay-runtime/handlers/connection/ConnectionHandler").deleteNode(i, c)
                    }
            })
        }
    };
    var i = {
        update: a((h = b("relay-runtime/handlers/connection/ConnectionHandler")).insertEdgeAfter)
    };
    a = {
        update: a(h.insertEdgeBefore)
    };
    var j = {
        update: c(h.insertEdgeAfter)
    };
    c = {
        update: c(h.insertEdgeBefore)
    };
    function a(a) {
        return function(c, d) {
            var e = c.get(d.dataID);
            if (e == null)
                return;
            var f = d.handleArgs.connections;
            f != null || g(0, 23070);
            e = e.getLinkedRecord(d.fieldKey, d.args);
            for (var d = f, f = Array.isArray(d), h = 0, d = f ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var i;
                if (f) {
                    if (h >= d.length)
                        break;
                    i = d[h++]
                } else {
                    h = d.next();
                    if (h.done)
                        break;
                    i = h.value
                }
                i = i;
                var j = c.get(i);
                if (j == null) {
                    b("warning")(!1, "[Relay][Mutation] The connection with id '" + i + "' doesn't exist.");
                    continue
                }
                i = b("relay-runtime/handlers/connection/ConnectionHandler").buildConnectionEdge(c, j, e);
                i != null || g(0, 23071);
                a(j, i)
            }
        }
    }
    function c(a) {
        return function(c, d) {
            var e = c.get(d.dataID);
            if (e == null)
                return;
            var f = d.handleArgs
              , h = f.connections;
            f = f.edgeTypeName;
            h != null || g(0, 23070);
            f != null || g(0, 26584);
            var i, j;
            try {
                i = e.getLinkedRecord(d.fieldKey, d.args)
            } catch (a) {}
            if (!i)
                try {
                    j = e.getLinkedRecords(d.fieldKey, d.args)
                } catch (a) {}
            i != null || j != null || g(0, 26583);
            d = (e = j) != null ? e : [i];
            for (var e = d, i = Array.isArray(e), d = 0, e = i ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var k;
                if (i) {
                    if (d >= e.length)
                        break;
                    k = e[d++]
                } else {
                    d = e.next();
                    if (d.done)
                        break;
                    k = d.value
                }
                k = k;
                if (k == null)
                    continue;
                for (var l = h, m = Array.isArray(l), n = 0, l = m ? l : l[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                    var o;
                    if (m) {
                        if (n >= l.length)
                            break;
                        o = l[n++]
                    } else {
                        n = l.next();
                        if (n.done)
                            break;
                        o = n.value
                    }
                    o = o;
                    var p = c.get(o);
                    if (p == null) {
                        b("warning")(!1, "[Relay][Mutation] The connection with id '" + o + "' doesn't exist.");
                        continue
                    }
                    o = b("relay-runtime/handlers/connection/ConnectionHandler").createEdge(c, p, k, f);
                    o != null || g(0, 23071);
                    a(p, o)
                }
            }
        }
    }
    e.exports = {
        AppendEdgeHandler: i,
        DeleteRecordHandler: d,
        PrependEdgeHandler: a,
        AppendNodeHandler: j,
        PrependNodeHandler: c,
        DeleteEdgeHandler: f
    }
}
), null);
__d("relay-runtime/handlers/RelayDefaultHandlerProvider", ["invariant", "relay-runtime/handlers/connection/ConnectionHandler", "relay-runtime/handlers/connection/MutationHandlers"], (function(a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
        switch (a) {
        case "connection":
            return b("relay-runtime/handlers/connection/ConnectionHandler");
        case "deleteRecord":
            return b("relay-runtime/handlers/connection/MutationHandlers").DeleteRecordHandler;
        case "deleteEdge":
            return b("relay-runtime/handlers/connection/MutationHandlers").DeleteEdgeHandler;
        case "appendEdge":
            return b("relay-runtime/handlers/connection/MutationHandlers").AppendEdgeHandler;
        case "prependEdge":
            return b("relay-runtime/handlers/connection/MutationHandlers").PrependEdgeHandler;
        case "appendNode":
            return b("relay-runtime/handlers/connection/MutationHandlers").AppendNodeHandler;
        case "prependNode":
            return b("relay-runtime/handlers/connection/MutationHandlers").PrependNodeHandler
        }
        g(0, 4515, a)
    }
    e.exports = a
}
), null);
__d("relay-runtime/mutations/RelayDeclarativeMutationConfig", ["relay-runtime/handlers/connection/ConnectionHandler", "warning"], (function(a, b, c, d, e, f) {
    "use strict";
    c = Object.freeze({
        RANGE_ADD: "RANGE_ADD",
        RANGE_DELETE: "RANGE_DELETE",
        NODE_DELETE: "NODE_DELETE"
    });
    d = Object.freeze({
        APPEND: "append",
        PREPEND: "prepend"
    });
    function a(a, b, c, d) {
        var e = c ? [c] : []
          , f = d ? [d] : [];
        a.forEach(function(a) {
            switch (a.type) {
            case "NODE_DELETE":
                var c = g(a, b);
                c && (e.push(c),
                f.push(c));
                break;
            case "RANGE_ADD":
                c = h(a, b);
                c && (e.push(c),
                f.push(c));
                break;
            case "RANGE_DELETE":
                c = i(a, b);
                c && (e.push(c),
                f.push(c));
                break
            }
        });
        return {
            optimisticUpdater: function(a, b) {
                e.forEach(function(c) {
                    c(a, b)
                })
            },
            updater: function(a, b) {
                f.forEach(function(c) {
                    c(a, b)
                })
            }
        }
    }
    function g(a, b) {
        var c = a.deletedIDFieldName
          , d = k(b);
        return !d ? null : function(a, b) {
            b = a.getRootField(d);
            if (!b)
                return;
            b = b.getValue(c);
            b = Array.isArray(b) ? b : [b];
            b.forEach(function(b) {
                b && typeof b === "string" && a["delete"](b)
            })
        }
    }
    function h(a, c) {
        var d = a.parentID
          , e = a.connectionInfo
          , f = a.edgeName;
        if (!d) {
            b("warning")(!1, "RelayDeclarativeMutationConfig: For mutation config RANGE_ADD to work you must include a parentID");
            return null
        }
        var g = k(c);
        return !e || !g ? null : function(a, c) {
            c = a.get(d);
            if (!c)
                return;
            var h = a.getRootField(g);
            if (!h)
                return;
            h = h.getLinkedRecord(f);
            for (var i = e, j = Array.isArray(i), k = 0, i = j ? i : i[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var l;
                if (j) {
                    if (k >= i.length)
                        break;
                    l = i[k++]
                } else {
                    k = i.next();
                    if (k.done)
                        break;
                    l = k.value
                }
                l = l;
                if (!h)
                    continue;
                var m = b("relay-runtime/handlers/connection/ConnectionHandler").getConnection(c, l.key, l.filters);
                if (!m)
                    continue;
                var n = b("relay-runtime/handlers/connection/ConnectionHandler").buildConnectionEdge(a, m, h);
                if (!n)
                    continue;
                switch (l.rangeBehavior) {
                case "append":
                    b("relay-runtime/handlers/connection/ConnectionHandler").insertEdgeAfter(m, n);
                    break;
                case "prepend":
                    b("relay-runtime/handlers/connection/ConnectionHandler").insertEdgeBefore(m, n);
                    break;
                default:
                    b("warning")(!1, "RelayDeclarativeMutationConfig: RANGE_ADD range behavior `%s` will not work as expected in RelayModern, supported range behaviors are 'append', 'prepend'.", l.rangeBehavior);
                    break
                }
            }
        }
    }
    function i(a, c) {
        var d = a.parentID
          , e = a.connectionKeys
          , f = a.pathToConnection
          , g = a.deletedIDFieldName;
        if (!d) {
            b("warning")(!1, "RelayDeclarativeMutationConfig: For mutation config RANGE_DELETE to work you must include a parentID");
            return null
        }
        var h = k(c);
        return !h ? null : function(a, b) {
            if (!b)
                return;
            var c = [];
            b = b[h];
            if (b && Array.isArray(g)) {
                for (var i = g, k = Array.isArray(i), l = 0, i = k ? i : i[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                    var m;
                    if (k) {
                        if (l >= i.length)
                            break;
                        m = i[l++]
                    } else {
                        l = i.next();
                        if (l.done)
                            break;
                        m = l.value
                    }
                    m = m;
                    b && typeof b === "object" && (b = b[m])
                }
                Array.isArray(b) ? b.forEach(function(a) {
                    a && a.id && typeof a === "object" && typeof a.id === "string" && c.push(a.id)
                }) : b && b.id && typeof b.id === "string" && c.push(b.id)
            } else
                b && typeof g === "string" && typeof b === "object" && (b = b[g],
                typeof b === "string" ? c.push(b) : Array.isArray(b) && b.forEach(function(a) {
                    typeof a === "string" && c.push(a)
                }));
            j(d, e, f, a, c)
        }
    }
    function j(a, c, d, e, f) {
        b("warning")(c != null, "RelayDeclarativeMutationConfig: RANGE_DELETE must provide a connectionKeys");
        e = e.get(a);
        if (!e)
            return;
        if (d.length < 2) {
            b("warning")(!1, "RelayDeclarativeMutationConfig: RANGE_DELETE pathToConnection must include at least parent and connection");
            return
        }
        var g = e;
        for (var e = 1; e < d.length - 1; e++)
            g && (g = g.getLinkedRecord(d[e]));
        if (!c || !g) {
            b("warning")(!1, "RelayDeclarativeMutationConfig: RANGE_DELETE pathToConnection is incorrect. Unable to find connection with parentID: %s and path: %s", a, d.toString());
            return
        }
        a = function() {
            if (i) {
                if (j >= h.length)
                    return "break";
                e = h[j++]
            } else {
                j = h.next();
                if (j.done)
                    return "break";
                e = j.value
            }
            var a = e
              , c = b("relay-runtime/handlers/connection/ConnectionHandler").getConnection(g, a.key, a.filters);
            c && f.forEach(function(a) {
                b("relay-runtime/handlers/connection/ConnectionHandler").deleteNode(c, a)
            })
        }
        ;
        for (var h = c, i = Array.isArray(h), j = 0, h = i ? h : h[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
            d = a();
            if (d === "break")
                break
        }
    }
    function k(a) {
        return a.fragment.selections && a.fragment.selections.length > 0 && a.fragment.selections[0].kind === "LinkedField" ? a.fragment.selections[0].name : null
    }
    e.exports = {
        MutationTypes: c,
        RangeOperations: d,
        convert: a
    }
}
), null);
__d("relay-runtime/query/GraphQLTag", ["invariant", "relay-runtime/util/RelayConcreteNode", "warning"], (function(a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
        g(0, 28205)
    }
    function h(a) {
        a = a;
        typeof a === "function" ? (a = a(),
        b("warning")(!1, "RelayGraphQLTag: node `%s` unexpectedly wrapped in a function.", a.kind === "Fragment" ? a.name : a.operation.name)) : a["default"] && (a = a["default"]);
        return a
    }
    function i(a) {
        a = h(a);
        return typeof a === "object" && a !== null && a.kind === b("relay-runtime/util/RelayConcreteNode").FRAGMENT
    }
    function j(a) {
        a = h(a);
        return typeof a === "object" && a !== null && a.kind === b("relay-runtime/util/RelayConcreteNode").REQUEST
    }
    function k(a) {
        a = h(a);
        return typeof a === "object" && a !== null && a.kind === b("relay-runtime/util/RelayConcreteNode").INLINE_DATA_FRAGMENT
    }
    function l(a) {
        a = h(a);
        i(a) || g(0, 20130, JSON.stringify(a));
        return a
    }
    function c(a) {
        var b;
        a = l(a);
        b = (b = a.metadata) == null ? void 0 : b.refetch;
        var c = b == null ? void 0 : b.connection;
        return b === null || typeof b !== "object" || c === null || typeof c !== "object" ? null : a
    }
    function d(a) {
        var b;
        a = l(a);
        b = (b = a.metadata) == null ? void 0 : b.refetch;
        return b === null || typeof b !== "object" ? null : a
    }
    function f(a) {
        a = h(a);
        j(a) || g(0, 20129, JSON.stringify(a));
        return a
    }
    function m(a) {
        a = h(a);
        k(a) || g(0, 20131, JSON.stringify(a));
        return a
    }
    e.exports = {
        getFragment: l,
        getNode: h,
        getPaginationFragment: c,
        getRefetchableFragment: d,
        getRequest: f,
        getInlineDataFragment: m,
        graphql: a,
        isFragment: i,
        isRequest: j,
        isInlineDataFragment: k
    }
}
), null);
__d("relay-runtime/store/RelayConcreteVariables", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, c) {
        var d;
        a.argumentDefinitions.forEach(function(e) {
            if (Object.prototype.hasOwnProperty.call(c, e.name))
                return;
            d = d || babelHelpers["extends"]({}, c);
            switch (e.kind) {
            case "LocalArgument":
                d[e.name] = e.defaultValue;
                break;
            case "RootArgument":
                if (!Object.prototype.hasOwnProperty.call(b, e.name)) {
                    d[e.name] = void 0;
                    break
                }
                d[e.name] = b[e.name];
                break;
            default:
                e,
                g(0, 3322, e.kind, a.name)
            }
        });
        return d || c
    }
    function b(a, b) {
        var c = {};
        a.argumentDefinitions.forEach(function(a) {
            var d = a.defaultValue;
            b[a.name] != null && (d = b[a.name]);
            c[a.name] = d
        });
        return c
    }
    e.exports = {
        getFragmentVariables: a,
        getOperationVariables: b
    }
}
), null);
__d("relay-runtime/store/RelayModernSelector", ["invariant", "areEqual", "warning", "relay-runtime/store/RelayConcreteVariables", "relay-runtime/store/RelayStoreUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = b("relay-runtime/store/RelayConcreteVariables").getFragmentVariables, k = (i = b("relay-runtime/store/RelayStoreUtils")).FRAGMENT_OWNER_KEY, l = i.FRAGMENTS_KEY, m = i.ID_KEY, n = i.IS_WITHIN_UNMATCHED_TYPE_REFINEMENT;
    function o(a, b) {
        typeof b === "object" && b !== null && !Array.isArray(b) || g(0, 4618, a.name, JSON.stringify(b));
        var c = b[m]
          , d = b[l]
          , e = b[k];
        b = b[n] === !0;
        if (typeof c === "string" && typeof d === "object" && d !== null && typeof d[a.name] === "object" && d[a.name] !== null && typeof e === "object" && e !== null) {
            e = e;
            d = d[a.name];
            d = j(a, e.variables, d);
            return x(a, c, d, e, b)
        }
        return null
    }
    function p(a, b) {
        var c = null;
        b.forEach(function(b, d) {
            d = b != null ? o(a, b) : null;
            d != null && (c = c || [],
            c.push(d))
        });
        if (c == null)
            return null;
        else
            return {
                kind: "PluralReaderSelector",
                selectors: c
            }
    }
    function q(a, b) {
        if (b == null)
            return b;
        else if (a.metadata && a.metadata.plural === !0) {
            Array.isArray(b) || g(0, 13882, a.name, JSON.stringify(b), a.name);
            return p(a, b)
        } else {
            Array.isArray(b) && g(0, 13879, a.name, JSON.stringify(b), a.name);
            return o(a, b)
        }
    }
    function a(a, b) {
        var c = {};
        for (var d in a)
            if (Object.prototype.hasOwnProperty.call(a, d)) {
                var e = a[d]
                  , f = b[d];
                c[d] = q(e, f)
            }
        return c
    }
    function c(a, b) {
        var c = {};
        for (var d in a)
            if (Object.prototype.hasOwnProperty.call(a, d)) {
                var e = a[d]
                  , f = b[d];
                c[d] = r(e, f)
            }
        return c
    }
    function r(a, b) {
        if (b == null)
            return b;
        else if (a.metadata && a.metadata.plural === !0) {
            Array.isArray(b) || g(0, 13882, a.name, JSON.stringify(b), a.name);
            return s(a, b)
        } else {
            Array.isArray(b) && g(0, 13881, a.name, JSON.stringify(b), a.name);
            return t(a, b)
        }
    }
    function s(a, b) {
        var c = null;
        b.forEach(function(b) {
            b = b != null ? t(a, b) : null;
            b != null && (c = c || [],
            c.push(b))
        });
        return c
    }
    function t(a, c) {
        typeof c === "object" && c !== null && !Array.isArray(c) || g(0, 4618, a.name, JSON.stringify(c));
        var d = c[m];
        if (typeof d === "string")
            return d;
        b("warning")(!1, "RelayModernSelector: Expected object to contain data for fragment `%s`, got `%s`. Make sure that the parent operation/fragment included fragment `...%s` without `@relay(mask: false)`, or `null` is passed as the fragment reference for `%s` if it's conditonally included and the condition isn't met.", a.name, JSON.stringify(c), a.name, a.name);
        return null
    }
    function d(a, b) {
        var c = {};
        for (var d in a)
            if (Object.prototype.hasOwnProperty.call(a, d)) {
                var e = a[d]
                  , f = b[d];
                e = u(e, f);
                Object.assign(c, e)
            }
        return c
    }
    function u(a, b) {
        var c;
        if (b == null)
            return {};
        else if (((c = a.metadata) == null ? void 0 : c.plural) === !0) {
            Array.isArray(b) || g(0, 13882, a.name, JSON.stringify(b), a.name);
            return w(a, b)
        } else {
            Array.isArray(b) && g(0, 13881, a.name, JSON.stringify(b), a.name);
            return v(a, b) || {}
        }
    }
    function v(a, b) {
        a = o(a, b);
        return !a ? null : a.variables
    }
    function w(a, b) {
        var c = {};
        b.forEach(function(b, d) {
            if (b != null) {
                d = v(a, b);
                d != null && Object.assign(c, d)
            }
        });
        return c
    }
    function f(a, c) {
        return a.owner === c.owner && a.dataID === c.dataID && a.node === c.node && (h || (h = b("areEqual")))(a.variables, c.variables)
    }
    function x(a, b, c, d, e) {
        e === void 0 && (e = !1);
        return {
            kind: "SingularReaderSelector",
            dataID: b,
            isWithinUnmatchedTypeRefinement: e,
            node: a,
            variables: c,
            owner: d
        }
    }
    function y(a, b, c) {
        return {
            dataID: b,
            node: a,
            variables: c
        }
    }
    e.exports = {
        areEqualSelectors: f,
        createReaderSelector: x,
        createNormalizationSelector: y,
        getDataIDsFromFragment: r,
        getDataIDsFromObject: c,
        getSingularSelector: o,
        getPluralSelector: p,
        getSelector: q,
        getSelectorsFromObject: a,
        getVariablesFromSingularFragment: v,
        getVariablesFromPluralFragment: w,
        getVariablesFromFragment: u,
        getVariablesFromObject: d
    }
}
), null);
__d("relay-runtime/util/getRequestIdentifier", ["invariant", "relay-runtime/util/stableCopy"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a, c) {
        var d = a.cacheID != null ? a.cacheID : a.id;
        d != null || g(0, 22755, a.name);
        return d + JSON.stringify((h || (h = b("relay-runtime/util/stableCopy")))(c))
    }
    e.exports = a
}
), null);
__d("relay-runtime/store/RelayModernOperationDescriptor", ["relay-runtime/util/deepFreeze", "relay-runtime/util/getRequestIdentifier", "relay-runtime/store/RelayConcreteVariables", "relay-runtime/store/RelayModernSelector", "relay-runtime/store/RelayStoreUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("relay-runtime/store/RelayConcreteVariables").getOperationVariables, i = b("relay-runtime/store/RelayModernSelector").createNormalizationSelector, j = b("relay-runtime/store/RelayModernSelector").createReaderSelector, k = b("relay-runtime/store/RelayStoreUtils").ROOT_ID;
    function a(a, b, c) {
        c === void 0 && (c = k);
        var d = a.operation;
        b = h(d, b);
        var e = l(a, b);
        a = {
            fragment: j(a.fragment, c, b, e),
            request: e,
            root: i(d, c, b)
        };
        return a
    }
    function l(a, c) {
        a = {
            identifier: b("relay-runtime/util/getRequestIdentifier")(a.params, c),
            node: a,
            variables: c
        };
        return a
    }
    e.exports = {
        createOperationDescriptor: a,
        createRequestDescriptor: l
    }
}
), null);
__d("relay-runtime/store/isRelayModernEnvironment", [], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        return Boolean(a && a["@@RelayModernEnvironment"])
    }
    e.exports = a
}
), null);
__d("relay-runtime/mutations/applyOptimisticMutation", ["invariant", "relay-runtime/mutations/RelayDeclarativeMutationConfig", "relay-runtime/store/isRelayModernEnvironment", "relay-runtime/query/GraphQLTag", "relay-runtime/store/RelayModernOperationDescriptor"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("relay-runtime/query/GraphQLTag").getRequest
      , i = b("relay-runtime/store/RelayModernOperationDescriptor").createOperationDescriptor;
    function a(a, c) {
        b("relay-runtime/store/isRelayModernEnvironment")(a) || g(0, 18234);
        var d = h(c.mutation);
        if (d.params.operationKind !== "mutation")
            throw new Error("commitMutation: Expected mutation operation");
        var e = c.optimisticUpdater
          , f = c.configs
          , j = c.optimisticResponse;
        c = c.variables;
        c = i(d, c);
        if (f) {
            f = b("relay-runtime/mutations/RelayDeclarativeMutationConfig").convert(f, d, e);
            e = f.optimisticUpdater
        }
        return a.applyMutation({
            operation: c,
            response: j,
            updater: e
        })
    }
    e.exports = a
}
), null);
__d("relay-runtime/mutations/commitLocalUpdate", [], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
        a.commitUpdate(b)
    }
    e.exports = a
}
), null);
__d("relay-runtime/mutations/validateMutation", ["warning"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {}
    ;
    e.exports = a
}
), null);
__d("relay-runtime/util/RelayFeatureFlags", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        ENABLE_VARIABLE_CONNECTION_KEY: !1,
        ENABLE_PARTIAL_RENDERING_DEFAULT: !1,
        ENABLE_RELAY_CONTAINERS_SUSPENSE: !1,
        ENABLE_PRECISE_TYPE_REFINEMENT: !1,
        ENABLE_REACT_FLIGHT_COMPONENT_FIELD: !1,
        ENABLE_REQUIRED_DIRECTIVES: !1,
        ENABLE_GETFRAGMENTIDENTIFIER_OPTIMIZATION: !1,
        ENABLE_FRIENDLY_QUERY_NAME_GQL_URL: !1
    };
    e.exports = a
}
), null);
__d("relay-runtime/mutations/commitMutation", ["invariant", "relay-runtime/mutations/RelayDeclarativeMutationConfig", "relay-runtime/util/RelayFeatureFlags", "relay-runtime/store/isRelayModernEnvironment", "relay-runtime/mutations/validateMutation", "warning", "relay-runtime/query/GraphQLTag", "relay-runtime/store/ClientID", "relay-runtime/store/RelayModernOperationDescriptor"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("relay-runtime/query/GraphQLTag").getRequest
      , i = b("relay-runtime/store/ClientID").generateUniqueClientID
      , j = b("relay-runtime/store/RelayModernOperationDescriptor").createOperationDescriptor;
    function a(a, c) {
        b("relay-runtime/store/isRelayModernEnvironment")(a) || g(0, 18234);
        var d = h(c.mutation);
        if (d.params.operationKind !== "mutation")
            throw new Error("commitMutation: Expected mutation operation");
        if (d.kind !== "Request")
            throw new Error("commitMutation: Expected mutation to be of type request");
        var e = c.optimisticResponse
          , f = c.optimisticUpdater
          , k = c.updater
          , l = c.configs
          , m = c.cacheConfig
          , n = c.onError
          , o = c.onUnsubscribe
          , p = c.variables
          , q = c.uploadables
          , r = j(d, p, i());
        typeof e === "function" && (e = e(),
        b("warning")(!1, "commitMutation: Expected `optimisticResponse` to be an object, received a function."));
        if (l) {
            p = b("relay-runtime/mutations/RelayDeclarativeMutationConfig").convert(l, d, f, k);
            f = p.optimisticUpdater;
            k = p.updater
        }
        var s = [];
        l = a.executeMutation({
            cacheConfig: m,
            operation: r,
            optimisticResponse: e,
            optimisticUpdater: f,
            updater: k,
            uploadables: q
        }).subscribe({
            next: function(a) {
                Array.isArray(a) ? a.forEach(function(a) {
                    a.errors && s.push.apply(s, a.errors)
                }) : a.errors && s.push.apply(s, a.errors)
            },
            complete: function() {
                var b = c.onCompleted;
                if (b) {
                    var d = a.lookup(r.fragment);
                    b(d.data, s.length !== 0 ? s : null)
                }
            },
            error: n,
            unsubscribe: o
        });
        return {
            dispose: l.unsubscribe
        }
    }
    e.exports = a
}
), null);
__d("relay-runtime/util/isPromise", [], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        return !!a && typeof a.then === "function"
    }
    e.exports = a
}
), null);
__d("relay-runtime/network/RelayObservable", ["Promise", "relay-runtime/util/isPromise"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = a
      , h = function() {
        a.create = function(b) {
            return new a(b)
        }
        ;
        function a(a) {
            this.$1 = a
        }
        a.onUnhandledError = function(a) {
            g = a
        }
        ;
        a.from = function(a) {
            return i(a) ? j(a) : b("relay-runtime/util/isPromise")(a) ? k(a) : l(a)
        }
        ;
        var c = a.prototype;
        c["catch"] = function(b) {
            var c = this;
            return a.create(function(a) {
                var d;
                c.subscribe({
                    start: function(a) {
                        d = a
                    },
                    next: a.next,
                    complete: a.complete,
                    error: function(c) {
                        try {
                            b(c).subscribe({
                                start: function(a) {
                                    d = a
                                },
                                next: a.next,
                                complete: a.complete,
                                error: a.error
                            })
                        } catch (b) {
                            a.error(b, !0)
                        }
                    }
                });
                return function() {
                    return d.unsubscribe()
                }
            })
        }
        ;
        c.concat = function(b) {
            var c = this;
            return a.create(function(a) {
                var d;
                c.subscribe({
                    start: function(a) {
                        d = a
                    },
                    next: a.next,
                    error: a.error,
                    complete: function() {
                        d = b.subscribe(a)
                    }
                });
                return function() {
                    d && d.unsubscribe()
                }
            })
        }
        ;
        c["do"] = function(b) {
            var c = this;
            return a.create(function(a) {
                var d = function(c) {
                    return function() {
                        try {
                            b[c] && b[c].apply(b, arguments)
                        } catch (a) {
                            g(a, !0)
                        }
                        a[c] && a[c].apply(a, arguments)
                    }
                };
                return c.subscribe({
                    start: d("start"),
                    next: d("next"),
                    error: d("error"),
                    complete: d("complete"),
                    unsubscribe: d("unsubscribe")
                })
            })
        }
        ;
        c["finally"] = function(b) {
            var c = this;
            return a.create(function(a) {
                var d = c.subscribe(a);
                return function() {
                    d.unsubscribe(),
                    b()
                }
            })
        }
        ;
        c.ifEmpty = function(b) {
            var c = this;
            return a.create(function(a) {
                var d = !1
                  , e = c.subscribe({
                    next: function(b) {
                        d = !0,
                        a.next(b)
                    },
                    error: a.error,
                    complete: function() {
                        d ? a.complete() : e = b.subscribe(a)
                    }
                });
                return function() {
                    e.unsubscribe()
                }
            })
        }
        ;
        c.subscribe = function(a) {
            return m(this.$1, a)
        }
        ;
        c.map = function(b) {
            var c = this;
            return a.create(function(a) {
                var d = c.subscribe({
                    complete: a.complete,
                    error: a.error,
                    next: function(c) {
                        try {
                            c = b(c);
                            a.next(c)
                        } catch (b) {
                            a.error(b, !0)
                        }
                    }
                });
                return function() {
                    d.unsubscribe()
                }
            })
        }
        ;
        c.mergeMap = function(b) {
            var c = this;
            return a.create(function(d) {
                var e = [];
                function f(a) {
                    this.$2 = a,
                    e.push(a)
                }
                function g() {
                    e.splice(e.indexOf(this.$2), 1),
                    e.length === 0 && d.complete()
                }
                c.subscribe({
                    start: f,
                    next: function(c) {
                        try {
                            d.closed || a.from(b(c)).subscribe({
                                start: f,
                                next: d.next,
                                error: d.error,
                                complete: g
                            })
                        } catch (a) {
                            d.error(a, !0)
                        }
                    },
                    error: d.error,
                    complete: g
                });
                return function() {
                    e.forEach(function(a) {
                        return a.unsubscribe()
                    }),
                    e.length = 0
                }
            })
        }
        ;
        c.poll = function(b) {
            var c = this;
            return a.create(function(a) {
                var d, e, f = function f() {
                    d = c.subscribe({
                        next: a.next,
                        error: a.error,
                        complete: function() {
                            e = setTimeout(f, b)
                        }
                    })
                };
                f();
                return function() {
                    clearTimeout(e),
                    d.unsubscribe()
                }
            })
        }
        ;
        c.toPromise = function() {
            var a = this;
            return new (b("Promise"))(function(b, c) {
                var d = !1;
                a.subscribe({
                    next: function(a) {
                        d || (d = !0,
                        b(a))
                    },
                    error: c,
                    complete: b
                })
            }
            )
        }
        ;
        return a
    }();
    function i(a) {
        return typeof a === "object" && a !== null && typeof a.subscribe === "function"
    }
    function j(a) {
        return a instanceof h ? a : h.create(function(b) {
            return a.subscribe(b)
        })
    }
    function k(a) {
        return h.create(function(b) {
            a.then(function(a) {
                b.next(a),
                b.complete()
            }, b.error)
        })
    }
    function l(a) {
        return h.create(function(b) {
            b.next(a),
            b.complete()
        })
    }
    function m(a, b) {
        var c = !1, d, e = function(a) {
            return Object.defineProperty(a, "closed", {
                get: function() {
                    return c
                }
            })
        };
        function f() {
            if (d) {
                if (d.unsubscribe)
                    d.unsubscribe();
                else
                    try {
                        d()
                    } catch (a) {
                        g(a, !0)
                    }
                d = void 0
            }
        }
        var h = e({
            unsubscribe: function() {
                if (!c) {
                    c = !0;
                    try {
                        b.unsubscribe && b.unsubscribe(h)
                    } catch (a) {
                        g(a, !0)
                    } finally {
                        f()
                    }
                }
            }
        });
        try {
            b.start && b.start(h)
        } catch (a) {
            g(a, !0)
        }
        if (c)
            return h;
        e = e({
            next: function(a) {
                if (!c && b.next)
                    try {
                        b.next(a)
                    } catch (a) {
                        g(a, !0)
                    }
            },
            error: function(a, d) {
                if (c || !b.error)
                    c = !0,
                    g(a, d || !1),
                    f();
                else {
                    c = !0;
                    try {
                        b.error(a)
                    } catch (a) {
                        g(a, !0)
                    } finally {
                        f()
                    }
                }
            },
            complete: function() {
                if (!c) {
                    c = !0;
                    try {
                        b.complete && b.complete()
                    } catch (a) {
                        g(a, !0)
                    } finally {
                        f()
                    }
                }
            }
        });
        try {
            d = a(e)
        } catch (a) {
            e.error(a, !0)
        }
        c && f();
        return h
    }
    function a(a, b) {}
    e.exports = h
}
), null);
__d("relay-runtime/network/ConvertToExecuteFunction", ["relay-runtime/network/RelayObservable"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        return function(c, d, e, f, g) {
            var h = a(c, d, e, f, g);
            return h instanceof Error ? b("relay-runtime/network/RelayObservable").create(function(a) {
                return a.error(h)
            }) : b("relay-runtime/network/RelayObservable").from(h)
        }
    }
    e.exports = {
        convertFetch: a
    }
}
), null);
__d("relay-runtime/network/RelayNetwork", ["invariant", "relay-runtime/network/ConvertToExecuteFunction"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("relay-runtime/network/ConvertToExecuteFunction").convertFetch;
    function a(a, b) {
        var c = h(a);
        function d(a, d, e, f, h) {
            if (a.operationKind === "subscription") {
                b || g(0, 5158);
                f && g(0, 5159);
                return b(a, d, e)
            }
            var i = e.poll;
            if (i != null) {
                f && g(0, 5160);
                return c(a, d, {
                    force: !0
                }).poll(i)
            }
            return c(a, d, e, f, h)
        }
        return {
            execute: d
        }
    }
    e.exports = {
        create: a
    }
}
), null);
__d("relay-runtime/network/RelayQueryResponseCache", ["invariant", "relay-runtime/util/stableCopy"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = function() {
        function a(a) {
            var b = a.size;
            a = a.ttl;
            b > 0 || g(0, 1167, b);
            a > 0 || g(0, 1168, a);
            this.$1 = new Map();
            this.$2 = b;
            this.$3 = a
        }
        var b = a.prototype;
        b.clear = function() {
            this.$1.clear()
        }
        ;
        b.get = function(a, b) {
            var c = this;
            a = i(a, b);
            this.$1.forEach(function(a, b) {
                j(a.fetchTime, c.$3) || c.$1["delete"](b)
            });
            b = this.$1.get(a);
            return b != null ? babelHelpers["extends"]({}, b.payload, {
                extensions: babelHelpers["extends"]({}, b.payload.extensions, {
                    cacheTimestamp: b.fetchTime
                })
            }) : null
        }
        ;
        b.set = function(a, b, c) {
            var d = Date.now();
            a = i(a, b);
            this.$1["delete"](a);
            this.$1.set(a, {
                fetchTime: d,
                payload: c
            });
            if (this.$1.size > this.$2) {
                b = this.$1.keys().next();
                b.done || this.$1["delete"](b.value)
            }
        }
        ;
        return a
    }();
    function i(a, c) {
        return JSON.stringify((h || (h = b("relay-runtime/util/stableCopy")))({
            queryID: a,
            variables: c
        }))
    }
    function j(a, b) {
        return a + b >= Date.now()
    }
    e.exports = a
}
), null);
__d("relay-runtime/query/PreloadableQueryRegistry", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = new Map(),
            this.$2 = new Map()
        }
        var b = a.prototype;
        b.set = function(a, b) {
            this.$1.set(a, b);
            a = this.$2.get(a);
            a != null && a.forEach(function(a) {
                try {
                    a(b)
                } catch (a) {
                    setTimeout(function() {
                        throw a
                    }, 0)
                }
            })
        }
        ;
        b.get = function(a) {
            return this.$1.get(a)
        }
        ;
        b.onLoad = function(a, b) {
            var c, d = (c = this.$2.get(a)) != null ? c : new Set();
            d.add(b);
            c = function() {
                d["delete"](b)
            }
            ;
            this.$2.set(a, d);
            return {
                dispose: c
            }
        }
        ;
        b.clear = function() {
            this.$1.clear()
        }
        ;
        return a
    }();
    b = new a();
    e.exports = b
}
), null);
__d("relay-runtime/query/fetchQuery", ["relay-runtime/store/RelayModernOperationDescriptor", "relay-runtime/query/GraphQLTag"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("relay-runtime/store/RelayModernOperationDescriptor").createOperationDescriptor
      , h = b("relay-runtime/query/GraphQLTag").getRequest;
    function a(a, b, c, d) {
        b = h(b);
        if (b.params.operationKind !== "query")
            throw new Error("fetchQuery: Expected query operation");
        var e = g(b, c);
        return a.execute({
            operation: e,
            cacheConfig: d
        }).map(function() {
            return a.lookup(e.fragment).data
        }).toPromise()
    }
    e.exports = a
}
), null);
__d("relay-runtime/util/RelayReplaySubject", ["invariant", "relay-runtime/network/RelayObservable"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a() {
            var a = this;
            this.$1 = !1;
            this.$2 = [];
            this.$3 = new Set();
            this.$5 = null;
            this.$4 = b("relay-runtime/network/RelayObservable").create(function(b) {
                a.$3.add(b);
                var c = a.$2;
                for (var d = 0; d < c.length; d++) {
                    if (b.closed)
                        break;
                    var e = c[d];
                    switch (e.kind) {
                    case "complete":
                        b.complete();
                        break;
                    case "error":
                        b.error(e.error);
                        break;
                    case "next":
                        b.next(e.data);
                        break;
                    default:
                        e.kind,
                        g(0, 14990, e.kind)
                    }
                }
                return function() {
                    a.$3["delete"](b)
                }
            })
        }
        var c = a.prototype;
        c.complete = function() {
            if (this.$1 === !0)
                return;
            this.$1 = !0;
            this.$2.push({
                kind: "complete"
            });
            this.$3.forEach(function(a) {
                return a.complete()
            })
        }
        ;
        c.error = function(a) {
            if (this.$1 === !0)
                return;
            this.$1 = !0;
            this.$2.push({
                kind: "error",
                error: a
            });
            this.$3.forEach(function(b) {
                return b.error(a)
            })
        }
        ;
        c.next = function(a) {
            if (this.$1 === !0)
                return;
            this.$2.push({
                kind: "next",
                data: a
            });
            this.$3.forEach(function(b) {
                return b.next(a)
            })
        }
        ;
        c.subscribe = function(a) {
            this.$5 = this.$4.subscribe(a);
            return this.$5
        }
        ;
        c.unsubscribe = function() {
            this.$5 && (this.$5.unsubscribe(),
            this.$5 = null)
        }
        ;
        c.getObserverCount = function() {
            return this.$3.size
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("relay-runtime/query/fetchQueryInternal", ["invariant", "Promise", "relay-runtime/network/RelayObservable", "relay-runtime/util/RelayReplaySubject"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f = typeof WeakMap === "function";
    var h = f ? new WeakMap() : new Map();
    function a(a, b, c) {
        return i(a, b.request.identifier, function() {
            return a.execute({
                operation: b,
                cacheConfig: c == null ? void 0 : c.networkCacheConfig
            })
        })
    }
    function i(a, c, d) {
        return b("relay-runtime/network/RelayObservable").create(function(e) {
            var f = l(a)
              , h = f.get(c);
            h || d()["finally"](function() {
                return f["delete"](c)
            }).subscribe({
                start: function(a) {
                    h = {
                        identifier: c,
                        subject: new (b("relay-runtime/util/RelayReplaySubject"))(),
                        subjectForInFlightStatus: new (b("relay-runtime/util/RelayReplaySubject"))(),
                        subscription: a
                    },
                    f.set(c, h)
                },
                next: function(a) {
                    var b = m(f, c);
                    b.subject.next(a);
                    b.subjectForInFlightStatus.next(a)
                },
                error: function(a) {
                    var b = m(f, c);
                    b.subject.error(a);
                    b.subjectForInFlightStatus.error(a)
                },
                complete: function() {
                    var a = m(f, c);
                    a.subject.complete();
                    a.subjectForInFlightStatus.complete()
                },
                unsubscribe: function(a) {
                    a = m(f, c);
                    a.subject.unsubscribe();
                    a.subjectForInFlightStatus.unsubscribe()
                }
            });
            h != null || g(0, 15078);
            return j(f, h).subscribe(e)
        })
    }
    function j(a, c) {
        return b("relay-runtime/network/RelayObservable").create(function(b) {
            var d = c.subject.subscribe(b);
            return function() {
                d.unsubscribe();
                var b = a.get(c.identifier);
                if (b) {
                    var e = b.subscription;
                    e != null && b.subject.getObserverCount() === 0 && (e.unsubscribe(),
                    a["delete"](c.identifier))
                }
            }
        })
    }
    function k(a, c, d) {
        return b("relay-runtime/network/RelayObservable").create(function(b) {
            var c = d.subjectForInFlightStatus.subscribe({
                error: b.error,
                next: function(c) {
                    if (!a.isRequestActive(d.identifier)) {
                        b.complete();
                        return
                    }
                    b.next()
                },
                complete: b.complete,
                unsubscribe: b.complete
            });
            return function() {
                c.unsubscribe()
            }
        })
    }
    function c(a, c) {
        var d = l(a)
          , e = d.get(c.identifier);
        if (!e)
            return null;
        return !a.isRequestActive(e.identifier) ? null : new (b("Promise"))(function(b, c) {
            var f = !1;
            k(a, d, e).subscribe({
                complete: b,
                error: c,
                next: function(a) {
                    f && b(a)
                }
            });
            f = !0
        }
        )
    }
    function d(a, b) {
        var c = l(a);
        b = c.get(b.identifier);
        if (!b)
            return null;
        return !a.isRequestActive(b.identifier) ? null : k(a, c, b)
    }
    function l(a) {
        var b = h.get(a);
        if (b != null)
            return b;
        b = new Map();
        h.set(a, b);
        return b
    }
    function m(a, b) {
        a = a.get(b);
        a != null || g(0, 15079);
        return a
    }
    e.exports = {
        fetchQuery: a,
        fetchQueryDeduped: i,
        getPromiseForActiveRequest: c,
        getObservableForActiveRequest: d
    }
}
), null);
__d("relay-runtime/store/RelayRecordSourceMapImpl", ["relay-runtime/store/RelayRecordState"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("relay-runtime/store/RelayRecordState").EXISTENT
      , h = b("relay-runtime/store/RelayRecordState").NONEXISTENT
      , i = b("relay-runtime/store/RelayRecordState").UNKNOWN;
    a = function() {
        function a(a) {
            var b = this;
            this.$1 = new Map();
            a != null && Object.keys(a).forEach(function(c) {
                b.$1.set(c, a[c])
            })
        }
        var b = a.prototype;
        b.clear = function() {
            this.$1 = new Map()
        }
        ;
        b["delete"] = function(a) {
            this.$1.set(a, null)
        }
        ;
        b.get = function(a) {
            return this.$1.get(a)
        }
        ;
        b.getRecordIDs = function() {
            return Array.from(this.$1.keys())
        }
        ;
        b.getStatus = function(a) {
            return !this.$1.has(a) ? i : this.$1.get(a) == null ? h : g
        }
        ;
        b.has = function(a) {
            return this.$1.has(a)
        }
        ;
        b.remove = function(a) {
            this.$1["delete"](a)
        }
        ;
        b.set = function(a, b) {
            this.$1.set(a, b)
        }
        ;
        b.size = function() {
            return this.$1.size
        }
        ;
        b.toJSON = function() {
            var a = {};
            for (var b = this.$1, c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var e;
                if (c) {
                    if (d >= b.length)
                        break;
                    e = b[d++]
                } else {
                    d = b.next();
                    if (d.done)
                        break;
                    e = d.value
                }
                e = e;
                var f = e[0];
                e = e[1];
                a[f] = e
            }
            return a
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("relay-runtime/store/RelayRecordSource", ["relay-runtime/store/RelayRecordSourceMapImpl"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(b) {
            return a.create(b)
        }
        a.create = function(a) {
            return new (b("relay-runtime/store/RelayRecordSourceMapImpl"))(a)
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("relay-runtime/store/ReactFlight", ["invariant", "relay-runtime/store/RelayModernRecord"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = (h || b("relay-runtime/store/RelayModernRecord")).getType;
    d = "queries";
    var j = "tree"
      , k = "ReactFlightComponent";
    function a(a) {
        return a == null || typeof a !== "object" || !Array.isArray(a.tree) || !Array.isArray(a.queries) ? null : a
    }
    function c(a) {
        i(a) === k || g(0, 23728, a);
        a = a[j];
        return a != null ? a : null
    }
    e.exports = {
        REACT_FLIGHT_QUERIES_STORAGE_KEY: d,
        REACT_FLIGHT_TREE_STORAGE_KEY: j,
        REACT_FLIGHT_TYPE_NAME: k,
        getReactFlightClientResponse: c,
        refineToReactFlightPayloadData: a
    }
}
), null);
__d("relay-runtime/store/TypeID", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = "client:__type:";
    c = "__TypeSchema";
    function a(a) {
        return g + a
    }
    function b(a) {
        return a.indexOf(g) === 0
    }
    e.exports = {
        generateTypeID: a,
        isTypeID: b,
        TYPE_SCHEMA_TYPE: c
    }
}
), null);
__d("relay-runtime/util/RelayProfiler", [], (function(a, b, c, d, e, f) {
    "use strict";
    function g() {}
    var h = {
        "*": []
    }
      , i = {
        "*": []
    }
      , j = {}
      , k = {
        stop: g
    }
      , l = function(a) {
        return a.charAt(0) !== "@"
    }
      , m = {
        instrumentMethods: function(a, b) {
            for (var c in b)
                Object.prototype.hasOwnProperty.call(b, c) && (typeof a[c] === "function" && (a[c] = m.instrument(b[c], a[c])))
        },
        instrument: function(a, b) {
            if (!l(a)) {
                b.attachHandler = g;
                b.detachHandler = g;
                return b
            }
            Object.prototype.hasOwnProperty.call(h, a) || (h[a] = []);
            var c = h["*"]
              , d = h[a]
              , e = []
              , f = []
              , i = function g() {
                var h = f[f.length - 1];
                h[0] ? (h[0]--,
                c[h[0]](a, g)) : h[1] ? (h[1]--,
                d[h[1]](a, g)) : h[2] ? (h[2]--,
                e[h[2]](a, g)) : h[5] = b.apply(h[3], h[4])
            }
              , k = function() {
                var a;
                if (d.length === 0 && e.length === 0 && c.length === 0)
                    a = b.apply(this, arguments);
                else {
                    f.push([c.length, d.length, e.length, this, arguments, j]);
                    i();
                    var g = f.pop();
                    a = g[5];
                    if (a === j)
                        throw new Error("RelayProfiler: Handler did not invoke original function.")
                }
                return a
            };
            k.attachHandler = function(a) {
                e.push(a)
            }
            ;
            k.detachHandler = function(a) {
                n(e, a)
            }
            ;
            k.displayName = "(instrumented " + a + ")";
            return k
        },
        attachAggregateHandler: function(a, b) {
            l(a) && (Object.prototype.hasOwnProperty.call(h, a) || (h[a] = []),
            h[a].push(b))
        },
        detachAggregateHandler: function(a, b) {
            l(a) && (Object.prototype.hasOwnProperty.call(h, a) && n(h[a], b))
        },
        profile: function(a, b) {
            var c = i["*"].length > 0
              , d = Object.prototype.hasOwnProperty.call(i, a);
            if (d || c) {
                c = d && c ? i[a].concat(i["*"]) : d ? i[a] : i["*"];
                var e;
                for (var d = c.length - 1; d >= 0; d--) {
                    var f = c[d];
                    f = f(a, b);
                    e = e || [];
                    e.unshift(f)
                }
                return {
                    stop: function(a) {
                        e && e.forEach(function(b) {
                            return b(a)
                        })
                    }
                }
            }
            return k
        },
        attachProfileHandler: function(a, b) {
            l(a) && (Object.prototype.hasOwnProperty.call(i, a) || (i[a] = []),
            i[a].push(b))
        },
        detachProfileHandler: function(a, b) {
            l(a) && (Object.prototype.hasOwnProperty.call(i, a) && n(i[a], b))
        }
    };
    function n(a, b) {
        b = a.indexOf(b);
        b !== -1 && a.splice(b, 1)
    }
    e.exports = m
}
), null);
__d("relay-runtime/store/RelayResponseNormalizer", ["invariant", "relay-runtime/util/RelayFeatureFlags", "relay-runtime/store/RelayModernRecord", "relay-runtime/util/RelayProfiler", "areEqual", "warning", "relay-runtime/util/RelayConcreteNode", "relay-runtime/store/ClientID", "relay-runtime/store/ReactFlight", "relay-runtime/store/RelayModernSelector", "relay-runtime/store/RelayStoreUtils", "relay-runtime/store/TypeID"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = (c = b("relay-runtime/util/RelayConcreteNode")).CONDITION, k = c.CLIENT_EXTENSION, l = c.DEFER, m = c.FLIGHT_FIELD, n = c.INLINE_FRAGMENT, o = c.LINKED_FIELD, p = c.LINKED_HANDLE, q = c.MODULE_IMPORT, r = c.SCALAR_FIELD, s = c.SCALAR_HANDLE, t = c.STREAM, u = c.TYPE_DISCRIMINATOR, v = b("relay-runtime/store/ClientID").generateClientID, w = b("relay-runtime/store/ClientID").isClientID, x = (d = b("relay-runtime/store/ReactFlight")).REACT_FLIGHT_QUERIES_STORAGE_KEY, y = d.REACT_FLIGHT_TREE_STORAGE_KEY, z = d.REACT_FLIGHT_TYPE_NAME, A = d.refineToReactFlightPayloadData, B = b("relay-runtime/store/RelayModernSelector").createNormalizationSelector, C = (f = b("relay-runtime/store/RelayStoreUtils")).getArgumentValues, D = f.getHandleStorageKey, E = f.getModuleComponentKey, F = f.getModuleOperationKey, G = f.getStorageKey, H = f.TYPENAME_KEY, I = f.ROOT_ID, J = f.ROOT_TYPE, K = b("relay-runtime/store/TypeID").generateTypeID, L = b("relay-runtime/store/TypeID").TYPE_SCHEMA_TYPE;
    function a(a, b, c, d) {
        var e = b.dataID
          , f = b.node;
        b = b.variables;
        a = new M(a,b,d);
        return a.normalizeResponse(f, e, c)
    }
    var M = function() {
        function a(a, b, c) {
            this.$1 = c.getDataID,
            this.$2 = [],
            this.$3 = c.treatMissingFieldsAsNull,
            this.$4 = [],
            this.$5 = !1,
            this.$6 = !1,
            this.$7 = [],
            this.$8 = c.path ? [].concat(c.path) : [],
            this.$9 = a,
            this.$10 = b,
            this.$11 = c.reactFlightPayloadDeserializer
        }
        var c = a.prototype;
        c.normalizeResponse = function(a, b, c) {
            var d = this.$9.get(b);
            d || g(0, 3565, b);
            this.$12(a, d, c);
            return {
                errors: null,
                fieldPayloads: this.$2,
                incrementalPlaceholders: this.$4,
                moduleImportPayloads: this.$7,
                source: this.$9,
                isFinal: !1
            }
        }
        ;
        c.$13 = function(a) {
            Object.prototype.hasOwnProperty.call(this.$10, a) || g(0, 3566, a);
            return this.$10[a]
        }
        ;
        c.$14 = function(a) {
            var b = a[H];
            b != null || g(0, 3567, JSON.stringify(a, null, 2));
            return b
        }
        ;
        c.$12 = function(a, c, d) {
            for (var e = 0; e < a.selections.length; e++) {
                var f = a.selections[e];
                switch (f.kind) {
                case r:
                case o:
                    this.$15(a, f, c, d);
                    break;
                case j:
                    var i = this.$13(f.condition);
                    i === f.passingValue && this.$12(f, c, d);
                    break;
                case n:
                    i = f.abstractKey;
                    if (i == null) {
                        var v = (h || (h = b("relay-runtime/store/RelayModernRecord"))).getType(c);
                        v === f.type && this.$12(f, c, d)
                    } else if (b("relay-runtime/util/RelayFeatureFlags").ENABLE_PRECISE_TYPE_REFINEMENT) {
                        v = Object.prototype.hasOwnProperty.call(d, i);
                        var w = (h || (h = b("relay-runtime/store/RelayModernRecord"))).getType(c);
                        w = K(w);
                        var x = this.$9.get(w);
                        x == null && (x = (h || (h = b("relay-runtime/store/RelayModernRecord"))).create(w, L),
                        this.$9.set(w, x));
                        h.setValue(x, i, v);
                        v && this.$12(f, c, d)
                    } else {
                        w = Object.prototype.hasOwnProperty.call(d, i);
                        x = this.$6;
                        this.$6 = this.$6 || !w;
                        this.$12(f, c, d);
                        this.$6 = x
                    }
                    break;
                case u:
                    if (b("relay-runtime/util/RelayFeatureFlags").ENABLE_PRECISE_TYPE_REFINEMENT) {
                        v = f.abstractKey;
                        i = Object.prototype.hasOwnProperty.call(d, v);
                        w = (h || (h = b("relay-runtime/store/RelayModernRecord"))).getType(c);
                        x = K(w);
                        w = this.$9.get(x);
                        w == null && (w = (h || (h = b("relay-runtime/store/RelayModernRecord"))).create(x, L),
                        this.$9.set(x, w));
                        h.setValue(w, v, i)
                    }
                    break;
                case p:
                case s:
                    x = f.args ? C(f.args, this.$10) : {};
                    w = G(f, this.$10);
                    v = D(f, this.$10);
                    this.$2.push({
                        args: x,
                        dataID: (h || (h = b("relay-runtime/store/RelayModernRecord"))).getDataID(c),
                        fieldKey: w,
                        handle: f.handle,
                        handleKey: v,
                        handleArgs: f.handleArgs ? C(f.handleArgs, this.$10) : {}
                    });
                    break;
                case q:
                    this.$16(a, f, c, d);
                    break;
                case l:
                    this.$17(f, c, d);
                    break;
                case t:
                    this.$18(f, c, d);
                    break;
                case k:
                    i = this.$5;
                    this.$5 = !0;
                    this.$12(f, c, d);
                    this.$5 = i;
                    break;
                case m:
                    if (b("relay-runtime/util/RelayFeatureFlags").ENABLE_REACT_FLIGHT_COMPONENT_FIELD)
                        this.$19(a, f, c, d);
                    else
                        throw new Error("Flight fields are not yet supported.");
                    break;
                default:
                    f,
                    g(0, 3569, f.kind)
                }
            }
        }
        ;
        c.$17 = function(a, c, d) {
            var e = a["if"] === null || this.$13(a["if"]);
            e === !1 ? this.$12(a, c, d) : this.$4.push({
                kind: "defer",
                data: d,
                label: a.label,
                path: [].concat(this.$8),
                selector: B(a, (h || (h = b("relay-runtime/store/RelayModernRecord"))).getDataID(c), this.$10),
                typeName: h.getType(c)
            })
        }
        ;
        c.$18 = function(a, c, d) {
            this.$12(a, c, d);
            d = a["if"] === null || this.$13(a["if"]);
            d === !0 && this.$4.push({
                kind: "stream",
                label: a.label,
                path: [].concat(this.$8),
                parentID: (h || (h = b("relay-runtime/store/RelayModernRecord"))).getDataID(c),
                node: a,
                variables: this.$10
            })
        }
        ;
        c.$16 = function(a, c, d, e) {
            typeof e === "object" && e || g(0, 13641);
            a = (h || (h = b("relay-runtime/store/RelayModernRecord"))).getType(d);
            var f = E(c.documentName)
              , i = e[f];
            h.setValue(d, f, (f = i) != null ? f : null);
            i = F(c.documentName);
            f = e[i];
            h.setValue(d, i, (c = f) != null ? c : null);
            f != null && this.$7.push({
                data: e,
                dataID: (h || (h = b("relay-runtime/store/RelayModernRecord"))).getDataID(d),
                operationReference: f,
                path: [].concat(this.$8),
                typeName: a,
                variables: this.$10
            })
        }
        ;
        c.$15 = function(a, c, d, e) {
            typeof e === "object" && e || g(0, 3570, c.name);
            a = c.alias || c.name;
            var f = G(c, this.$10);
            e = e[a];
            if (e == null) {
                if (e === void 0) {
                    var i = this.$5 || this.$6;
                    if (i)
                        return;
                    else if (!this.$3)
                        return
                }
                (h || (h = b("relay-runtime/store/RelayModernRecord"))).setValue(d, f, null);
                return
            }
            c.kind === r ? (h || (h = b("relay-runtime/store/RelayModernRecord"))).setValue(d, f, e) : c.kind === o ? (this.$8.push(a),
            c.plural ? this.$21(c, d, f, e) : this.$22(c, d, f, e),
            this.$8.pop()) : (c,
            g(0, 11863, c.kind))
        }
        ;
        c.$19 = function(a, c, d, e) {
            a = c.alias || c.name;
            var f = G(c, this.$10);
            e = e[a];
            if (e == null) {
                (h || (h = b("relay-runtime/store/RelayModernRecord"))).setValue(d, f, null);
                return
            }
            a = A(e);
            a != null || g(0, 23735, e);
            typeof this.$11 === "function" || g(0, 23734, this.$11);
            e = this.$11(a.tree);
            c = v((h || (h = b("relay-runtime/store/RelayModernRecord"))).getDataID(d), G(c, this.$10));
            var i = this.$9.get(c);
            i == null && (i = (h || (h = b("relay-runtime/store/RelayModernRecord"))).create(c, z),
            this.$9.set(c, i));
            h.setValue(i, y, e);
            e = [];
            for (var a = a.queries, j = Array.isArray(a), k = 0, a = j ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var l;
                if (j) {
                    if (k >= a.length)
                        break;
                    l = a[k++]
                } else {
                    k = a.next();
                    if (k.done)
                        break;
                    l = k.value
                }
                l = l;
                l.response.data != null && this.$7.push({
                    data: l.response.data,
                    dataID: I,
                    operationReference: l.module,
                    path: [],
                    typeName: J,
                    variables: l.variables
                });
                e.push({
                    module: l.module,
                    variables: l.variables
                })
            }
            h.setValue(i, x, e);
            h.setLinkedRecordID(d, f, c)
        }
        ;
        c.$22 = function(a, c, d, e) {
            var f;
            typeof e === "object" && e || g(0, 3571, d);
            f = this.$1(e, (f = a.concreteType) != null ? f : this.$14(e)) || (h || (h = b("relay-runtime/store/RelayModernRecord"))).getLinkedRecordID(c, d) || v((h || (h = b("relay-runtime/store/RelayModernRecord"))).getDataID(c), d);
            typeof f === "string" || g(0, 3572, d);
            (h || (h = b("relay-runtime/store/RelayModernRecord"))).setLinkedRecordID(c, d, f);
            c = this.$9.get(f);
            if (!c) {
                d = a.concreteType || this.$14(e);
                c = (h || (h = b("relay-runtime/store/RelayModernRecord"))).create(f, d);
                this.$9.set(f, c)
            }
            this.$12(a, c, e)
        }
        ;
        c.$21 = function(a, c, d, e) {
            var f = this;
            Array.isArray(e) || g(0, 3573, d);
            var i = (h || (h = b("relay-runtime/store/RelayModernRecord"))).getLinkedRecordIDs(c, d)
              , j = [];
            e.forEach(function(e, k) {
                var l;
                if (e == null) {
                    j.push(e);
                    return
                }
                f.$8.push(String(k));
                typeof e === "object" || g(0, 3574, d);
                l = f.$1(e, (l = a.concreteType) != null ? l : f.$14(e)) || i && i[k] || v((h || (h = b("relay-runtime/store/RelayModernRecord"))).getDataID(c), d, k);
                typeof l === "string" || g(0, 3575, d);
                j.push(l);
                k = f.$9.get(l);
                if (!k) {
                    var m = a.concreteType || f.$14(e);
                    k = (h || (h = b("relay-runtime/store/RelayModernRecord"))).create(l, m);
                    f.$9.set(l, k)
                }
                f.$12(a, k, e);
                f.$8.pop()
            });
            h.setLinkedRecordIDs(c, d, j)
        }
        ;
        c.$24 = function(a, c, d) {
            c = (c = c.concreteType) != null ? c : this.$14(d);
            d = (h || (h = b("relay-runtime/store/RelayModernRecord"))).getDataID(a);
            b("warning")(w(d) && d !== I || (h || (h = b("relay-runtime/store/RelayModernRecord"))).getType(a) === c, "RelayResponseNormalizer: Invalid record `%s`. Expected %s to be consistent, but the record was assigned conflicting types `%s` and `%s`. The GraphQL server likely violated the globally unique id requirement by returning the same id for different objects.", d, H, h.getType(a), c)
        }
        ;
        c.$20 = function(a, b, c) {}
        ;
        c.$23 = function(a, b, c, d) {}
        ;
        return a
    }();
    c = b("relay-runtime/util/RelayProfiler").instrument("RelayResponseNormalizer.normalize", a);
    e.exports = {
        normalize: c
    }
}
), null);
__d("relay-runtime/util/RelayError", [], (function(a, b, c, d, e, f) {
    "use strict";
    function g(a, b, c) {
        for (var d = arguments.length, e = new Array(d > 3 ? d - 3 : 0), f = 3; f < d; f++)
            e[f - 3] = arguments[f];
        var g = 0
          , h = c.replace(/%s/g, function() {
            return String(e[g++])
        })
          , i = new Error(h)
          , j = Object.assign(i, {
            name: b,
            messageFormat: c,
            messageParams: e,
            type: a,
            taalOpcodes: [2, 2]
        });
        if (j.stack === void 0)
            try {
                throw j
            } catch (a) {}
        return j
    }
    e.exports = {
        create: function(a, b) {
            for (var c = arguments.length, d = new Array(c > 2 ? c - 2 : 0), e = 2; e < c; e++)
                d[e - 2] = arguments[e];
            return g.apply(void 0, ["error", a, b].concat(d))
        },
        createWarning: function(a, b) {
            for (var c = arguments.length, d = new Array(c > 2 ? c - 2 : 0), e = 2; e < c; e++)
                d[e - 2] = arguments[e];
            return g.apply(void 0, ["warn", a, b].concat(d))
        }
    }
}
), null);
__d("relay-runtime/util/getOperation", ["relay-runtime/util/RelayConcreteNode"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("relay-runtime/util/RelayConcreteNode").REQUEST
      , h = b("relay-runtime/util/RelayConcreteNode").SPLIT_OPERATION;
    function a(a) {
        switch (a.kind) {
        case g:
            return a.operation;
        case h:
        default:
            return a
        }
    }
    e.exports = a
}
), null);
__d("relay-runtime/store/RelayModernQueryExecutor", ["invariant", "Promise", "relay-runtime/util/RelayError", "relay-runtime/store/RelayModernRecord", "relay-runtime/network/RelayObservable", "relay-runtime/store/RelayRecordSource", "relay-runtime/store/RelayResponseNormalizer", "relay-runtime/util/getOperation", "relay-runtime/util/stableCopy", "warning", "relay-runtime/store/ClientID", "relay-runtime/store/RelayModernSelector", "relay-runtime/store/RelayStoreUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = b("relay-runtime/store/ClientID").generateClientID, k = b("relay-runtime/store/RelayModernSelector").createNormalizationSelector, l = b("relay-runtime/store/RelayStoreUtils").ROOT_TYPE, m = b("relay-runtime/store/RelayStoreUtils").TYPENAME_KEY, n = b("relay-runtime/store/RelayStoreUtils").getStorageKey;
    function a(a) {
        return new o(a)
    }
    var o = function() {
        function a(a) {
            var b = this
              , c = a.operation
              , d = a.operationExecutions
              , e = a.operationLoader
              , f = a.optimisticConfig
              , g = a.publishQueue
              , h = a.scheduler
              , i = a.sink
              , j = a.source
              , k = a.store
              , l = a.updater
              , m = a.operationTracker
              , n = a.treatMissingFieldsAsNull
              , o = a.getDataID
              , p = a.isClientPayload;
            a = a.reactFlightPayloadDeserializer;
            this.$1 = o;
            this.$2 = n;
            this.$3 = !1;
            this.$4 = new Map();
            this.$5 = 0;
            this.$6 = c;
            this.$7 = d;
            this.$8 = e;
            this.$9 = m;
            this.$10 = new Map();
            this.$11 = null;
            this.$12 = 0;
            this.$13 = g;
            this.$15 = h;
            this.$16 = i;
            this.$17 = new Map();
            this.$18 = "started";
            this.$19 = k;
            this.$20 = new Map();
            this.$21 = l;
            this.$23 = p === !0;
            this.$14 = a;
            var q = this.$5++;
            j.subscribe({
                complete: function() {
                    return b.$24(q)
                },
                error: function(a) {
                    return b.$25(a)
                },
                next: function(a) {
                    try {
                        b.$26(q, a)
                    } catch (a) {
                        i.error(a)
                    }
                },
                start: function(a) {
                    return b.$27(q, a)
                }
            });
            f != null && this.$28(f.response != null ? {
                data: f.response
            } : null, f.updater, !1)
        }
        var c = a.prototype;
        c.cancel = function() {
            var a = this;
            if (this.$18 === "completed")
                return;
            this.$18 = "completed";
            this.$7["delete"](this.$6.request.identifier);
            this.$20.size !== 0 && (this.$20.forEach(function(a) {
                return a.unsubscribe()
            }),
            this.$20.clear());
            var b = this.$11;
            b !== null && (this.$11 = null,
            b.forEach(function(b) {
                return a.$13.revertUpdate(b)
            }),
            this.$13.run());
            this.$4.clear();
            this.$29();
            this.$22 && (this.$22.dispose(),
            this.$22 = null)
        }
        ;
        c.$30 = function() {
            var a;
            switch (this.$18) {
            case "started":
                a = "active";
                break;
            case "loading_incremental":
                a = "active";
                break;
            case "completed":
                a = "inactive";
                break;
            case "loading_final":
                a = this.$12 > 0 ? "active" : "inactive";
                break;
            default:
                this.$18,
                g(0, 20930)
            }
            this.$7.set(this.$6.request.identifier, a)
        }
        ;
        c.$31 = function(a) {
            var c = this
              , d = this.$15;
            if (d != null) {
                var e = this.$5++;
                b("relay-runtime/network/RelayObservable").create(function(b) {
                    var c = d.schedule(function() {
                        try {
                            a(),
                            b.complete()
                        } catch (a) {
                            b.error(a)
                        }
                    });
                    return function() {
                        return d.cancel(c)
                    }
                }).subscribe({
                    complete: function() {
                        return c.$24(e)
                    },
                    error: function(a) {
                        return c.$25(a)
                    },
                    start: function(a) {
                        return c.$27(e, a)
                    }
                })
            } else
                a()
        }
        ;
        c.$24 = function(a) {
            this.$20["delete"](a),
            this.$20.size === 0 && (this.cancel(),
            this.$16.complete())
        }
        ;
        c.$25 = function(a) {
            this.cancel(),
            this.$16.error(a)
        }
        ;
        c.$27 = function(a, b) {
            this.$20.set(a, b),
            this.$30()
        }
        ;
        c.$26 = function(a, b) {
            var c = this;
            this.$31(function() {
                c.$32(b),
                c.$33()
            })
        }
        ;
        c.$34 = function(a) {
            var c = this
              , d = [];
            a.forEach(function(a) {
                if (a.data === null && a.extensions != null && !Object.prototype.hasOwnProperty.call(a, "errors"))
                    return;
                else if (a.data == null) {
                    var e = Object.prototype.hasOwnProperty.call(a, "errors") && a.errors != null ? a.errors : null
                      , f = e ? e.map(function(a) {
                        a = a.message;
                        return a
                    }).join("\n") : "(No errors)";
                    f = b("relay-runtime/util/RelayError").create("RelayNetwork", "No data returned for operation `" + c.$6.request.node.params.name + "`, got error(s):\n" + f + "\n\nSee the error `source` property for more information.");
                    f.source = {
                        errors: e,
                        operation: c.$6.request.node,
                        variables: c.$6.request.variables
                    };
                    f.stack;
                    throw f
                } else {
                    e = a;
                    d.push(e)
                }
            });
            return d
        }
        ;
        c.$35 = function(a) {
            var b;
            if (a.length > 1) {
                a.some(function(a) {
                    return ((a = a.extensions) == null ? void 0 : a.isOptimistic) === !0
                }) && g(0, 20658);
                return !1
            }
            a = a[0];
            b = ((b = a.extensions) == null ? void 0 : b.isOptimistic) === !0;
            b && this.$18 !== "started" && g(0, 13474);
            if (b) {
                this.$28(a, null, this.$2);
                this.$16.next(a);
                return !0
            }
            return !1
        }
        ;
        c.$32 = function(a) {
            if (this.$18 === "completed")
                return;
            var b = Array.isArray(a) ? a : [a]
              , c = this.$34(b);
            if (c.length === 0) {
                b = b.some(function(a) {
                    return ((a = a.extensions) == null ? void 0 : a.is_final) === !0
                });
                b && (this.$18 = "loading_final",
                this.$30(),
                this.$3 = !1);
                this.$16.next(a);
                return
            }
            b = this.$35(c);
            if (b)
                return;
            b = p(c);
            c = b[0];
            b = b[1];
            if (c.length > 0) {
                c = this.$36(c);
                var d = this.$13.run(this.$6);
                this.$37(d);
                this.$38(c);
                this.$3 && !this.$22 && (this.$22 = this.$19.retain(this.$6))
            }
            if (b.length > 0) {
                d = this.$39(b);
                c = this.$13.run();
                this.$37(c);
                this.$38(d)
            }
            this.$16.next(a)
        }
        ;
        c.$28 = function(a, c, d) {
            var e = this;
            this.$11 === null || g(0, 11400);
            if (a == null && c == null)
                return;
            var f = [];
            if (a) {
                a = q(a, this.$6.root, l, {
                    getDataID: this.$1,
                    path: [],
                    reactFlightPayloadDeserializer: this.$14,
                    treatMissingFieldsAsNull: d
                });
                s(a);
                f.push({
                    operation: this.$6,
                    payload: a,
                    updater: c
                });
                this.$40(a, f)
            } else
                c && f.push({
                    operation: this.$6,
                    payload: {
                        errors: null,
                        fieldPayloads: null,
                        incrementalPlaceholders: null,
                        moduleImportPayloads: null,
                        source: b("relay-runtime/store/RelayRecordSource").create(),
                        isFinal: !1
                    },
                    updater: c
                });
            this.$11 = f;
            f.forEach(function(a) {
                return e.$13.applyUpdate(a)
            });
            this.$13.run()
        }
        ;
        c.$40 = function(a, b) {
            if (a.moduleImportPayloads && a.moduleImportPayloads.length) {
                a = a.moduleImportPayloads;
                var c = this.$8;
                c || g(0, 12578);
                for (var a = a, d = Array.isArray(a), e = 0, a = d ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                    var f;
                    if (d) {
                        if (e >= a.length)
                            break;
                        f = a[e++]
                    } else {
                        e = a.next();
                        if (e.done)
                            break;
                        f = e.value
                    }
                    f = f;
                    var h = c.get(f.operationReference);
                    if (h == null)
                        this.$41(c, f);
                    else {
                        h = this.$42(h, f);
                        b.push.apply(b, h)
                    }
                }
            }
        }
        ;
        c.$43 = function(a, b) {
            b = k(b, a.dataID, a.variables);
            return q({
                data: a.data
            }, b, a.typeName, {
                getDataID: this.$1,
                path: a.path,
                reactFlightPayloadDeserializer: this.$14,
                treatMissingFieldsAsNull: this.$2
            })
        }
        ;
        c.$42 = function(a, c) {
            a = b("relay-runtime/util/getOperation")(a);
            var d = [];
            c = this.$43(c, a);
            s(c);
            d.push({
                operation: this.$6,
                payload: c,
                updater: null
            });
            this.$40(c, d);
            return d
        }
        ;
        c.$41 = function(a, c) {
            var d = this;
            a.load(c.operationReference).then(function(a) {
                if (a == null || d.$18 !== "started")
                    return;
                a = d.$42(a, c);
                a.forEach(function(a) {
                    return d.$13.applyUpdate(a)
                });
                if (d.$11 == null)
                    b("warning")(!1, "RelayModernQueryExecutor: Unexpected ModuleImport optimisitc update in operation %s." + d.$6.request.node.params.name);
                else {
                    var e;
                    (e = d.$11).push.apply(e, a);
                    d.$13.run()
                }
            })
        }
        ;
        c.$36 = function(a) {
            var b = this;
            this.$11 !== null && (this.$11.forEach(function(a) {
                return b.$13.revertUpdate(a)
            }),
            this.$11 = null);
            this.$3 = !1;
            this.$4.clear();
            this.$17.clear();
            return a.map(function(a) {
                a = q(a, b.$6.root, l, {
                    getDataID: b.$1,
                    path: [],
                    reactFlightPayloadDeserializer: b.$14,
                    treatMissingFieldsAsNull: b.$2
                });
                b.$13.commitPayload(b.$6, a, b.$21);
                return a
            })
        }
        ;
        c.$38 = function(a) {
            var c = this;
            if (this.$18 === "completed")
                return;
            a.forEach(function(a) {
                var d = a.incrementalPlaceholders
                  , e = a.moduleImportPayloads
                  , f = a.isFinal;
                c.$18 = f ? "loading_final" : "loading_incremental";
                c.$30();
                f && (c.$3 = !1);
                if (e && e.length !== 0) {
                    var h = c.$8;
                    h || g(0, 12578);
                    e.forEach(function(a) {
                        c.$44(a, h)
                    })
                }
                if (d && d.length !== 0) {
                    c.$3 = c.$18 !== "loading_final";
                    d.forEach(function(b) {
                        c.$45(a, b)
                    });
                    if (c.$23 || c.$18 === "loading_final") {
                        b("warning")(c.$23, "RelayModernEnvironment: Operation `%s` contains @defer/@stream directives but was executed in non-streaming mode. See https://fburl.com/relay-incremental-delivery-non-streaming-warning.", c.$6.request.node.params.name);
                        var i = [];
                        d.forEach(function(a) {
                            a.kind === "defer" && i.push(c.$46(a.label, a.path, a, {
                                data: a.data
                            }))
                        });
                        if (i.length > 0) {
                            f = c.$13.run();
                            c.$37(f);
                            c.$38(i)
                        }
                    }
                }
            })
        }
        ;
        c.$33 = function() {
            var a = this.$6.request.node.params.operationKind === "subscription";
            if (!a)
                return;
            this.$12 === 0 && this.$3 === !1 && this.$29()
        }
        ;
        c.$44 = function(a, c) {
            var d = this
              , e = c.get(a.operationReference);
            if (e != null) {
                e = b("relay-runtime/util/getOperation")(e);
                this.$47(a, e);
                this.$33()
            } else {
                var f = this.$5++;
                this.$12++;
                var g = function() {
                    d.$12--,
                    d.$33()
                };
                b("relay-runtime/network/RelayObservable").from(new (b("Promise"))(function(b, d) {
                    c.load(a.operationReference).then(b, d)
                }
                )).map(function(c) {
                    c != null && d.$31(function() {
                        d.$47(a, b("relay-runtime/util/getOperation")(c))
                    })
                }).subscribe({
                    complete: function() {
                        d.$24(f),
                        g()
                    },
                    error: function(a) {
                        d.$25(a),
                        g()
                    },
                    start: function(a) {
                        return d.$27(f, a)
                    }
                })
            }
        }
        ;
        c.$47 = function(a, b) {
            a = this.$43(a, b);
            this.$13.commitPayload(this.$6, a);
            b = this.$13.run();
            this.$37(b);
            this.$38([a])
        }
        ;
        c.$45 = function(a, c) {
            var d = c.label
              , e = c.path;
            e = e.map(String).join(".");
            var f = this.$4.get(d);
            f == null && (f = new Map(),
            this.$4.set(d, f));
            d = f.get(e);
            d = d != null && d.kind === "response" ? d.responses : null;
            f.set(e, {
                kind: "placeholder",
                placeholder: c
            });
            var i;
            c.kind === "stream" ? i = c.parentID : c.kind === "defer" ? i = c.selector.dataID : (c,
            g(0, 19159, c.kind));
            f = a.source.get(i);
            c = ((e = a.fieldPayloads) != null ? e : []).filter(function(a) {
                var b = j(a.dataID, a.fieldKey);
                return a.dataID === i || b === i
            });
            f != null || g(0, 17119, i);
            a = this.$17.get(i);
            if (a != null) {
                e = (h || (h = b("relay-runtime/store/RelayModernRecord"))).update(a.record, f);
                var k = new Map()
                  , l = function(a) {
                    var b = r(a);
                    k.set(b, a)
                };
                a.fieldPayloads.forEach(l);
                c.forEach(l);
                a = Array.from(k.values())
            } else
                e = f,
                a = c;
            this.$17.set(i, {
                record: e,
                fieldPayloads: a
            });
            if (d != null) {
                l = this.$39(d);
                f = this.$13.run();
                this.$37(f);
                this.$38(l)
            }
        }
        ;
        c.$39 = function(a) {
            var b = this
              , c = [];
            a.forEach(function(a) {
                var d = a.label
                  , e = a.path
                  , f = a.response
                  , h = b.$4.get(d);
                h == null && (h = new Map(),
                b.$4.set(d, h));
                if (d.indexOf("$defer$") !== -1) {
                    var i = e.map(String).join(".")
                      , j = h.get(i);
                    if (j == null) {
                        j = {
                            kind: "response",
                            responses: [a]
                        };
                        h.set(i, j);
                        return
                    } else if (j.kind === "response") {
                        j.responses.push(a);
                        return
                    }
                    j = j.placeholder;
                    j.kind === "defer" || g(0, 13870, i, d, j.kind);
                    c.push(b.$46(d, e, j, f))
                } else {
                    i = e.slice(0, -2).map(String).join(".");
                    j = h.get(i);
                    if (j == null) {
                        j = {
                            kind: "response",
                            responses: [a]
                        };
                        h.set(i, j);
                        return
                    } else if (j.kind === "response") {
                        j.responses.push(a);
                        return
                    }
                    h = j.placeholder;
                    h.kind === "stream" || g(0, 13871, i, d, h.kind);
                    c.push(b.$48(d, e, h, f))
                }
            });
            return c
        }
        ;
        c.$46 = function(a, c, d, e) {
            a = d.selector.dataID;
            c = q(e, d.selector, d.typeName, {
                getDataID: this.$1,
                path: d.path,
                reactFlightPayloadDeserializer: this.$14,
                treatMissingFieldsAsNull: this.$2
            });
            this.$13.commitPayload(this.$6, c);
            d = this.$17.get(a);
            d != null || g(0, 14147, a);
            a = d.fieldPayloads;
            if (a.length !== 0) {
                a = {
                    errors: null,
                    fieldPayloads: a,
                    incrementalPlaceholders: null,
                    moduleImportPayloads: null,
                    source: b("relay-runtime/store/RelayRecordSource").create(),
                    isFinal: ((d = e.extensions) == null ? void 0 : d.is_final) === !0
                };
                this.$13.commitPayload(this.$6, a)
            }
            return c
        }
        ;
        c.$48 = function(a, c, d, e) {
            var f = d.parentID;
            a = d.node;
            var h = d.variables;
            a = a.selections[0];
            a != null && a.kind === "LinkedField" && a.plural === !0 || g(0, 13873);
            e = this.$49(e, f, a, h, c, d.path);
            a = e.fieldPayloads;
            var i = e.itemID
              , j = e.itemIndex
              , k = e.prevIDs;
            h = e.relayPayload;
            var l = e.storageKey;
            this.$13.commitPayload(this.$6, h, function(a) {
                var b = a.get(f);
                if (b == null)
                    return;
                var c = b.getLinkedRecords(l);
                if (c == null)
                    return;
                if (c.length !== k.length || c.some(function(a, b) {
                    return k[b] !== (a && a.getDataID())
                }))
                    return;
                c = [].concat(c);
                c[j] = a.get(i);
                b.setLinkedRecords(c, l)
            });
            if (a.length !== 0) {
                c = {
                    errors: null,
                    fieldPayloads: a,
                    incrementalPlaceholders: null,
                    moduleImportPayloads: null,
                    source: b("relay-runtime/store/RelayRecordSource").create(),
                    isFinal: !1
                };
                this.$13.commitPayload(this.$6, c)
            }
            return h
        }
        ;
        c.$49 = function(a, c, d, e, f, i) {
            var l, o = a.data;
            typeof o === "object" || g(0, 13872);
            l = (l = d.alias) != null ? l : d.name;
            var p = n(d, e)
              , r = this.$17.get(c);
            r != null || g(0, 13875, c);
            var s = r.record;
            r = r.fieldPayloads;
            var t = (h || (h = b("relay-runtime/store/RelayModernRecord"))).getLinkedRecordIDs(s, p);
            t != null || g(0, 13868, c, d.name);
            f = f[f.length - 1];
            var u = parseInt(f, 10);
            u === f && u >= 0 || g(0, 13876, f);
            f = (f = d.concreteType) != null ? f : o[m];
            typeof f === "string" || g(0, 13866, d.name);
            o = ((o = this.$1(o, f)) != null ? o : t && t[u]) || j(c, p, u);
            typeof o === "string" || g(0, 13865, p);
            d = k(d, o, e);
            e = h.clone(s);
            s = [].concat(t);
            s[u] = o;
            h.setLinkedRecordIDs(e, p, s);
            this.$17.set(c, {
                record: e,
                fieldPayloads: r
            });
            s = q(a, d, f, {
                getDataID: this.$1,
                path: [].concat(i, [l, String(u)]),
                reactFlightPayloadDeserializer: this.$14,
                treatMissingFieldsAsNull: this.$2
            });
            return {
                fieldPayloads: r,
                itemID: o,
                itemIndex: u,
                prevIDs: t,
                relayPayload: s,
                storageKey: p
            }
        }
        ;
        c.$37 = function(a) {
            this.$9 != null && a != null && a.length > 0 && this.$9.update(this.$6.request, new Set(a))
        }
        ;
        c.$29 = function() {
            this.$9 != null && this.$9.complete(this.$6.request)
        }
        ;
        return a
    }();
    function p(a) {
        var b = []
          , c = [];
        a.forEach(function(a) {
            if (a.path != null || a.label != null) {
                var d = a.label
                  , e = a.path;
                (d == null || e == null) && g(0, 13539);
                c.push({
                    label: d,
                    path: e,
                    response: a
                })
            } else
                b.push(a)
        });
        return [b, c]
    }
    function q(a, c, d, e) {
        var f = a.data
          , g = a.errors
          , i = b("relay-runtime/store/RelayRecordSource").create();
        d = (h || (h = b("relay-runtime/store/RelayModernRecord"))).create(c.dataID, d);
        i.set(c.dataID, d);
        d = b("relay-runtime/store/RelayResponseNormalizer").normalize(i, c, f, e);
        return babelHelpers["extends"]({}, d, {
            errors: g,
            isFinal: ((i = a.extensions) == null ? void 0 : i.is_final) === !0
        })
    }
    function r(a) {
        return (a = JSON.stringify((i || (i = b("relay-runtime/util/stableCopy")))(a))) != null ? a : ""
    }
    function s(a) {
        a = a.incrementalPlaceholders;
        a != null && a.length !== 0 && g(0, 18487)
    }
    e.exports = {
        execute: a
    }
}
), null);
__d("relay-runtime/store/RelayOperationTracker", ["invariant", "Promise"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = new Map(),
            this.$2 = new Map(),
            this.$3 = new Map()
        }
        var c = a.prototype;
        c.update = function(a, b) {
            if (b.size === 0)
                return;
            var c = new Set();
            for (var b = b, d = Array.isArray(b), e = 0, b = d ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var f;
                if (d) {
                    if (e >= b.length)
                        break;
                    f = b[e++]
                } else {
                    e = b.next();
                    if (e.done)
                        break;
                    f = e.value
                }
                f = f;
                var g = this.$1.get(f);
                g != null ? g.has(a) || (g.add(a),
                c.add(f)) : (this.$1.set(f, new Set([a])),
                c.add(f))
            }
            if (c.size === 0)
                return;
            g = this.$2.get(a) || new Set();
            for (var f = c, e = Array.isArray(f), d = 0, f = e ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                if (e) {
                    if (d >= f.length)
                        break;
                    b = f[d++]
                } else {
                    d = f.next();
                    if (d.done)
                        break;
                    b = d.value
                }
                c = b;
                this.$4(c);
                g.add(c)
            }
            this.$2.set(a, g)
        }
        ;
        c.complete = function(a) {
            var b = this.$2.get(a);
            if (b == null)
                return;
            var c = new Set()
              , d = new Set();
            for (var b = b, e = Array.isArray(b), f = 0, b = e ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var g;
                if (e) {
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
                var h = this.$1.get(g);
                if (!h)
                    continue;
                h["delete"](a);
                h.size > 0 ? d.add(g) : c.add(g)
            }
            for (var h = c, g = Array.isArray(h), f = 0, h = g ? h : h[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                if (g) {
                    if (f >= h.length)
                        break;
                    e = h[f++]
                } else {
                    f = h.next();
                    if (f.done)
                        break;
                    e = f.value
                }
                b = e;
                this.$4(b);
                this.$1["delete"](b)
            }
            for (var c = d, e = Array.isArray(c), b = 0, c = e ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                if (e) {
                    if (b >= c.length)
                        break;
                    f = c[b++]
                } else {
                    b = c.next();
                    if (b.done)
                        break;
                    f = b.value
                }
                g = f;
                this.$4(g)
            }
            this.$2["delete"](a)
        }
        ;
        c.$4 = function(a) {
            var b = this.$3.get(a);
            b != null && b.resolve();
            this.$3["delete"](a)
        }
        ;
        c.getPromiseForPendingOperationsAffectingOwner = function(a) {
            if (!this.$1.has(a))
                return null;
            var c = this.$3.get(a);
            if (c != null)
                return c.promise;
            var d;
            c = new (b("Promise"))(function(a) {
                d = a
            }
            );
            d != null || g(0, 16524);
            this.$3.set(a, {
                promise: c,
                resolve: d
            });
            return c
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("ErrorUtils", ["ErrorNormalizeUtils", "ErrorPubSub", "ErrorGuard", "getErrorSafe"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h;
    c = {
        history: (g || (g = b("ErrorPubSub"))).history,
        applyWithGuard: function(a, c, d, e, f, g) {
            return (h || (h = b("ErrorGuard"))).applyWithGuard(a, c, (a = d) != null ? a : [], {
                name: f,
                onNormalizedError: e,
                deferredSource: g == null ? void 0 : g.deferredSource
            })
        },
        guard: function(a, c, d) {
            a = (h || (h = b("ErrorGuard"))).guard(a, c != null ? {
                name: c
            } : null);
            d != null && (a = a.bind(d));
            return a
        },
        normalizeError: function(a) {
            var c;
            return (c = b("ErrorNormalizeUtils").ifNormalizedError(a)) != null ? c : b("ErrorNormalizeUtils").normalizeError(b("getErrorSafe")(a))
        }
    };
    e.exports = a.ErrorUtils = c;
    typeof __t === "function" && __t.setHandler && __t.setHandler((g || b("ErrorPubSub")).reportError)
}
), 3);
__d("relay-runtime/mutations/RelayRecordSourceMutator", ["invariant", "relay-runtime/store/RelayModernRecord", "relay-runtime/store/RelayRecordState"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = b("relay-runtime/store/RelayRecordState").EXISTENT;
    a = function() {
        function a(a, b) {
            this.__sources = [b, a],
            this.$1 = a,
            this.$2 = b
        }
        var c = a.prototype;
        c.unstable_getRawRecordWithChanges = function(a) {
            var c = this.$1.get(a);
            a = this.$2.get(a);
            if (a === void 0) {
                if (c == null)
                    return c;
                var d = (h || (h = b("relay-runtime/store/RelayModernRecord"))).clone(c);
                return d
            } else if (a === null)
                return null;
            else if (c != null) {
                d = (h || (h = b("relay-runtime/store/RelayModernRecord"))).update(c, a);
                return d
            } else {
                c = (h || (h = b("relay-runtime/store/RelayModernRecord"))).clone(a);
                return c
            }
        }
        ;
        c.$3 = function(a) {
            var c = this.$2.get(a);
            if (!c) {
                var d = this.$1.get(a);
                d || g(0, 977, a);
                c = (h || (h = b("relay-runtime/store/RelayModernRecord"))).create(a, h.getType(d));
                this.$2.set(a, c)
            }
            return c
        }
        ;
        c.copyFields = function(a, c) {
            var d = this.$2.get(a)
              , e = this.$1.get(a);
            d || e || g(0, 978, a);
            a = this.$3(c);
            e && (h || (h = b("relay-runtime/store/RelayModernRecord"))).copyFields(e, a);
            d && (h || (h = b("relay-runtime/store/RelayModernRecord"))).copyFields(d, a)
        }
        ;
        c.copyFieldsFromRecord = function(a, c) {
            c = this.$3(c);
            (h || (h = b("relay-runtime/store/RelayModernRecord"))).copyFields(a, c)
        }
        ;
        c.create = function(a, c) {
            this.$1.getStatus(a) !== i && this.$2.getStatus(a) !== i || g(0, 979, a);
            c = (h || (h = b("relay-runtime/store/RelayModernRecord"))).create(a, c);
            this.$2.set(a, c)
        }
        ;
        c["delete"] = function(a) {
            this.$2["delete"](a)
        }
        ;
        c.getStatus = function(a) {
            return this.$2.has(a) ? this.$2.getStatus(a) : this.$1.getStatus(a)
        }
        ;
        c.getType = function(a) {
            for (var c = 0; c < this.__sources.length; c++) {
                var d = this.__sources[c].get(a);
                if (d)
                    return (h || (h = b("relay-runtime/store/RelayModernRecord"))).getType(d);
                else if (d === null)
                    return null
            }
        }
        ;
        c.getValue = function(a, c) {
            for (var d = 0; d < this.__sources.length; d++) {
                var e = this.__sources[d].get(a);
                if (e) {
                    var f = (h || (h = b("relay-runtime/store/RelayModernRecord"))).getValue(e, c);
                    if (f !== void 0)
                        return f
                } else if (e === null)
                    return null
            }
        }
        ;
        c.setValue = function(a, c, d) {
            a = this.$3(a);
            (h || (h = b("relay-runtime/store/RelayModernRecord"))).setValue(a, c, d)
        }
        ;
        c.getLinkedRecordID = function(a, c) {
            for (var d = 0; d < this.__sources.length; d++) {
                var e = this.__sources[d].get(a);
                if (e) {
                    var f = (h || (h = b("relay-runtime/store/RelayModernRecord"))).getLinkedRecordID(e, c);
                    if (f !== void 0)
                        return f
                } else if (e === null)
                    return null
            }
        }
        ;
        c.setLinkedRecordID = function(a, c, d) {
            a = this.$3(a);
            (h || (h = b("relay-runtime/store/RelayModernRecord"))).setLinkedRecordID(a, c, d)
        }
        ;
        c.getLinkedRecordIDs = function(a, c) {
            for (var d = 0; d < this.__sources.length; d++) {
                var e = this.__sources[d].get(a);
                if (e) {
                    var f = (h || (h = b("relay-runtime/store/RelayModernRecord"))).getLinkedRecordIDs(e, c);
                    if (f !== void 0)
                        return f
                } else if (e === null)
                    return null
            }
        }
        ;
        c.setLinkedRecordIDs = function(a, c, d) {
            a = this.$3(a);
            (h || (h = b("relay-runtime/store/RelayModernRecord"))).setLinkedRecordIDs(a, c, d)
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("relay-runtime/store/RelayReader", ["invariant", "relay-runtime/util/RelayFeatureFlags", "relay-runtime/store/RelayModernRecord", "relay-runtime/util/RelayConcreteNode", "relay-runtime/store/ReactFlight", "relay-runtime/store/RelayStoreUtils", "relay-runtime/store/TypeID"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = (c = b("relay-runtime/util/RelayConcreteNode")).CLIENT_EXTENSION, j = c.CONDITION, k = c.DEFER, l = c.FLIGHT_FIELD, m = c.FRAGMENT_SPREAD, n = c.INLINE_DATA_FRAGMENT_SPREAD, o = c.INLINE_FRAGMENT, p = c.LINKED_FIELD, q = c.MODULE_IMPORT, r = c.REQUIRED_FIELD, s = c.SCALAR_FIELD, t = c.STREAM, u = b("relay-runtime/store/ReactFlight").getReactFlightClientResponse, v = (d = b("relay-runtime/store/RelayStoreUtils")).FRAGMENTS_KEY, w = d.FRAGMENT_OWNER_KEY, x = d.FRAGMENT_PROP_NAME_KEY, y = d.ID_KEY, z = d.IS_WITHIN_UNMATCHED_TYPE_REFINEMENT, A = d.MODULE_COMPONENT_KEY, B = d.ROOT_ID, C = d.getArgumentValues, D = d.getStorageKey, E = d.getModuleComponentKey, F = b("relay-runtime/store/TypeID").generateTypeID;
    function a(a, b) {
        a = new G(a,b);
        return a.read()
    }
    var G = function() {
        function a(a, b) {
            this.$1 = !1,
            this.$2 = !1,
            this.$3 = null,
            this.$4 = b.owner,
            this.$5 = a,
            this.$6 = {},
            this.$7 = b,
            this.$8 = b.variables
        }
        var c = a.prototype;
        c.read = function() {
            var a = this.$7
              , c = a.node
              , d = a.dataID;
            a = a.isWithinUnmatchedTypeRefinement;
            var e = c.abstractKey
              , f = this.$5.get(d);
            a = !a;
            if (a && e == null && f != null) {
                var g = (h || (h = b("relay-runtime/store/RelayModernRecord"))).getType(f);
                g !== c.type && d !== B && (a = !1)
            }
            if (a && e != null && f != null && b("relay-runtime/util/RelayFeatureFlags").ENABLE_PRECISE_TYPE_REFINEMENT) {
                g = (h || (h = b("relay-runtime/store/RelayModernRecord"))).getType(f);
                f = F(g);
                g = this.$5.get(f);
                f = g != null ? (h || (h = b("relay-runtime/store/RelayModernRecord"))).getValue(g, e) : null;
                f === !1 ? a = !1 : f == null && (this.$1 = !0)
            }
            this.$2 = !a;
            g = this.$9(c, d, null);
            return {
                data: g,
                isMissingData: this.$1 && a,
                seenRecords: this.$6,
                selector: this.$7,
                missingRequiredFields: this.$3
            }
        }
        ;
        c.$9 = function(a, b, c) {
            var d = this.$5.get(b);
            this.$6[b] = d;
            if (d == null) {
                d === void 0 && (this.$1 = !0);
                return d
            }
            b = c || {};
            c = this.$10(a.selections, d, b);
            return c ? b : null
        }
        ;
        c.$11 = function(a) {
            Object.prototype.hasOwnProperty.call(this.$8, a) || g(0, 1306, a);
            return this.$8[a]
        }
        ;
        c.$12 = function(a, b, c) {
            if (((c = this.$3) == null ? void 0 : c.action) === "THROW")
                return;
            c = this.$7.node.name;
            switch (b) {
            case "THROW":
                this.$3 = {
                    action: b,
                    field: {
                        path: a,
                        owner: c
                    }
                };
                return;
            case "LOG":
                this.$3 == null && (this.$3 = {
                    action: b,
                    fields: []
                });
                this.$3.fields.push({
                    path: a,
                    owner: c
                });
                return;
            default:
                b
            }
        }
        ;
        c.$10 = function(a, c, d) {
            for (var e = 0; e < a.length; e++) {
                var f = a[e];
                switch (f.kind) {
                case r:
                    b("relay-runtime/util/RelayFeatureFlags").ENABLE_REQUIRED_DIRECTIVES || g(0, 21838, f.path, this.$7.node.name);
                    var u = this.$13(f, c, d);
                    if (u == null) {
                        u = f.action;
                        u !== "NONE" && this.$12(f.path, u, c);
                        return !1
                    }
                    break;
                case s:
                    this.$14(f, c, d);
                    break;
                case p:
                    f.plural ? this.$15(f, c, d) : this.$16(f, c, d);
                    break;
                case j:
                    u = this.$11(f.condition);
                    if (u === f.passingValue) {
                        u = this.$10(f.selections, c, d);
                        if (!u)
                            return !1
                    }
                    break;
                case o:
                    u = f.abstractKey;
                    if (u == null) {
                        var v = (h || (h = b("relay-runtime/store/RelayModernRecord"))).getType(c);
                        if (v != null && v === f.type) {
                            v = this.$10(f.selections, c, d);
                            if (!v)
                                return !1
                        }
                    } else if (b("relay-runtime/util/RelayFeatureFlags").ENABLE_PRECISE_TYPE_REFINEMENT) {
                        v = this.$1;
                        var w = this.$2
                          , x = (h || (h = b("relay-runtime/store/RelayModernRecord"))).getType(c);
                        x = F(x);
                        x = this.$5.get(x);
                        x = x != null ? (h || (h = b("relay-runtime/store/RelayModernRecord"))).getValue(x, u) : null;
                        this.$2 = w || x === !1;
                        this.$10(f.selections, c, d);
                        this.$2 = w;
                        x === !1 ? this.$1 = v : x == null && (this.$1 = !0)
                    } else
                        this.$10(f.selections, c, d);
                    break;
                case m:
                    this.$17(f, c, d);
                    break;
                case q:
                    this.$18(f, c, d);
                    break;
                case n:
                    this.$19(f, c, d);
                    break;
                case k:
                case i:
                    u = this.$1;
                    w = this.$10(f.selections, c, d);
                    this.$1 = u;
                    if (!w)
                        return !1;
                    break;
                case t:
                    v = this.$10(f.selections, c, d);
                    if (!v)
                        return !1;
                    break;
                case l:
                    if (b("relay-runtime/util/RelayFeatureFlags").ENABLE_REACT_FLIGHT_COMPONENT_FIELD)
                        this.$20(f, c, d);
                    else
                        throw new Error("Flight fields are not yet supported.");
                    break;
                default:
                    f,
                    g(0, 1307, f.kind)
                }
            }
            return !0
        }
        ;
        c.$13 = function(a, b, c) {
            switch (a.field.kind) {
            case s:
                return this.$14(a.field, b, c);
            case p:
                if (a.field.plural)
                    return this.$15(a.field, b, c);
                else
                    return this.$16(a.field, b, c);
            default:
                a.field.kind,
                g(0, 1307, a.kind)
            }
        }
        ;
        c.$20 = function(a, c, d) {
            var e;
            e = (e = a.alias) != null ? e : a.name;
            a = D(a, this.$8);
            c = (h || (h = b("relay-runtime/store/RelayModernRecord"))).getLinkedRecordID(c, a);
            if (c == null) {
                d[e] = c;
                c === void 0 && (this.$1 = !0);
                return c
            }
            a = this.$5.get(c);
            if (a == null) {
                d[e] = a;
                a === void 0 && (this.$1 = !0);
                return a
            }
            c = u(a);
            d[e] = c;
            return c
        }
        ;
        c.$14 = function(a, c, d) {
            var e;
            e = (e = a.alias) != null ? e : a.name;
            a = D(a, this.$8);
            c = (h || (h = b("relay-runtime/store/RelayModernRecord"))).getValue(c, a);
            c === void 0 && (this.$1 = !0);
            d[e] = c;
            return c
        }
        ;
        c.$16 = function(a, c, d) {
            var e;
            e = (e = a.alias) != null ? e : a.name;
            var f = D(a, this.$8);
            f = (h || (h = b("relay-runtime/store/RelayModernRecord"))).getLinkedRecordID(c, f);
            if (f == null) {
                d[e] = f;
                f === void 0 && (this.$1 = !0);
                return f
            }
            var i = d[e];
            i == null || typeof i === "object" || g(0, 1308, e, (h || (h = b("relay-runtime/store/RelayModernRecord"))).getDataID(c), i);
            c = this.$9(a, f, i);
            d[e] = c;
            return c
        }
        ;
        c.$15 = function(a, c, d) {
            var e, f = this, i = (e = a.alias) != null ? e : a.name;
            e = D(a, this.$8);
            e = (h || (h = b("relay-runtime/store/RelayModernRecord"))).getLinkedRecordIDs(c, e);
            if (e == null) {
                d[i] = e;
                e === void 0 && (this.$1 = !0);
                return e
            }
            var j = d[i];
            j == null || Array.isArray(j) || g(0, 1309, i, (h || (h = b("relay-runtime/store/RelayModernRecord"))).getDataID(c), j);
            var k = j || [];
            e.forEach(function(d, e) {
                if (d == null) {
                    d === void 0 && (f.$1 = !0);
                    k[e] = d;
                    return
                }
                var j = k[e];
                j == null || typeof j === "object" || g(0, 1308, i, (h || (h = b("relay-runtime/store/RelayModernRecord"))).getDataID(c), j);
                k[e] = f.$9(a, d, j)
            });
            d[i] = k;
            return k
        }
        ;
        c.$18 = function(a, c, d) {
            var e = E(a.documentName);
            e = (h || (h = b("relay-runtime/store/RelayModernRecord"))).getValue(c, e);
            if (e == null) {
                e === void 0 && (this.$1 = !0);
                return
            }
            this.$17({
                kind: "FragmentSpread",
                name: a.fragmentName,
                args: null
            }, c, d);
            d[x] = a.fragmentPropName;
            d[A] = e
        }
        ;
        c.$17 = function(a, c, d) {
            var e = d[v];
            e == null && (e = d[v] = {});
            typeof e === "object" && e != null || g(0, 1310, e);
            d[y] == null && (d[y] = (h || (h = b("relay-runtime/store/RelayModernRecord"))).getDataID(c));
            e[a.name] = a.args ? C(a.args, this.$8) : {};
            d[w] = this.$4;
            b("relay-runtime/util/RelayFeatureFlags").ENABLE_PRECISE_TYPE_REFINEMENT && (d[z] = this.$2)
        }
        ;
        c.$19 = function(a, c, d) {
            var e = d[v];
            e == null && (e = d[v] = {});
            typeof e === "object" && e != null || g(0, 1310, e);
            d[y] == null && (d[y] = (h || (h = b("relay-runtime/store/RelayModernRecord"))).getDataID(c));
            d = {};
            this.$10(a.selections, c, d);
            e[a.name] = d
        }
        ;
        return a
    }();
    e.exports = {
        read: a
    }
}
), null);
__d("relay-runtime/store/RelayPublishQueue", ["invariant", "ErrorUtils", "relay-runtime/store/RelayReader", "relay-runtime/store/RelayRecordSource", "relay-runtime/mutations/RelayRecordSourceMutator", "relay-runtime/mutations/RelayRecordSourceProxy", "relay-runtime/mutations/RelayRecordSourceSelectorProxy", "warning", "relay-runtime/util/deepFreeze"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    a = function() {
        function a(a, b, c) {
            this.$4 = !1,
            this.$2 = b || null,
            this.$5 = !1,
            this.$6 = new Set(),
            this.$7 = new Set(),
            this.$1 = a,
            this.$8 = new Set(),
            this.$9 = null,
            this.$3 = c
        }
        var c = a.prototype;
        c.applyUpdate = function(a) {
            !this.$8.has(a) && !this.$7.has(a) || g(0, 680),
            this.$7.add(a)
        }
        ;
        c.revertUpdate = function(a) {
            this.$7.has(a) ? this.$7["delete"](a) : this.$8.has(a) && (this.$5 = !0,
            this.$8["delete"](a))
        }
        ;
        c.revertAll = function() {
            this.$5 = !0,
            this.$7.clear(),
            this.$8.clear()
        }
        ;
        c.commitPayload = function(a, b, c) {
            this.$5 = !0,
            this.$6.add({
                kind: "payload",
                operation: a,
                payload: b,
                updater: c
            })
        }
        ;
        c.commitUpdate = function(a) {
            this.$5 = !0,
            this.$6.add({
                kind: "updater",
                updater: a
            })
        }
        ;
        c.commitSource = function(a) {
            this.$5 = !0,
            this.$6.add({
                kind: "source",
                source: a
            })
        }
        ;
        c.run = function(a) {
            this.$5 && (this.$4 && (this.$1.restore(),
            this.$4 = !1));
            var b = this.$11();
            (this.$7.size || this.$5 && this.$8.size) && (this.$4 || (this.$1.snapshot(),
            this.$4 = !0),
            this.$12());
            this.$5 = !1;
            this.$8.size > 0 ? this.$9 || (this.$9 = this.$1.holdGC()) : this.$9 && (this.$9.dispose(),
            this.$9 = null);
            return this.$1.notify(a, b)
        }
        ;
        c.$13 = function(a) {
            var c = this
              , d = a.payload
              , e = a.operation;
            a = a.updater;
            var f = d.source;
            d = d.fieldPayloads;
            var h = new (b("relay-runtime/mutations/RelayRecordSourceMutator"))(this.$1.getSource(),f)
              , i = new (b("relay-runtime/mutations/RelayRecordSourceProxy"))(h,this.$3);
            d && d.length && d.forEach(function(a) {
                var b = c.$2 && c.$2(a.handle);
                b || g(0, 681, a.handle);
                b.update(i, a)
            });
            if (a) {
                d = e.fragment;
                d != null || g(0, 12580);
                e = new (b("relay-runtime/mutations/RelayRecordSourceSelectorProxy"))(h,i,d);
                h = j(f, d);
                a(e, h)
            }
            d = i.getIDsMarkedForInvalidation();
            this.$1.publish(f, d);
            return i.isStoreMarkedForInvalidation()
        }
        ;
        c.$11 = function() {
            var a = this;
            if (!this.$6.size)
                return !1;
            var c = !1;
            this.$6.forEach(function(d) {
                if (d.kind === "payload") {
                    var e = a.$13(d);
                    c = c || e
                } else if (d.kind === "source") {
                    e = d.source;
                    a.$1.publish(e)
                } else {
                    e = d.updater;
                    d = b("relay-runtime/store/RelayRecordSource").create();
                    var f = new (b("relay-runtime/mutations/RelayRecordSourceMutator"))(a.$1.getSource(),d);
                    f = new (b("relay-runtime/mutations/RelayRecordSourceProxy"))(f,a.$3);
                    (h || (h = b("ErrorUtils"))).applyWithGuard(e, null, [f], null, "RelayPublishQueue:commitData");
                    c = c || f.isStoreMarkedForInvalidation();
                    e = f.getIDsMarkedForInvalidation();
                    a.$1.publish(d, e)
                }
            });
            this.$6.clear();
            return c
        }
        ;
        c.$12 = function() {
            var a = this
              , c = b("relay-runtime/store/RelayRecordSource").create()
              , d = new (b("relay-runtime/mutations/RelayRecordSourceMutator"))(this.$1.getSource(),c)
              , e = new (b("relay-runtime/mutations/RelayRecordSourceProxy"))(d,this.$3,this.$2)
              , f = function(a) {
                if (a.storeUpdater) {
                    var c = a.storeUpdater;
                    (h || (h = b("ErrorUtils"))).applyWithGuard(c, null, [e], null, "RelayPublishQueue:applyUpdates")
                } else {
                    c = a.operation;
                    var f = a.payload;
                    a = a.updater;
                    var g = f.source;
                    f = f.fieldPayloads;
                    var i = new (b("relay-runtime/mutations/RelayRecordSourceSelectorProxy"))(d,e,c.fragment), k;
                    g && (e.publishSource(g, f),
                    k = j(g, c.fragment));
                    a && (h || (h = b("ErrorUtils"))).applyWithGuard(a, null, [i, k], null, "RelayPublishQueue:applyUpdates")
                }
            };
            this.$5 && this.$8.size && this.$8.forEach(f);
            this.$7.size && (this.$7.forEach(function(b) {
                f(b),
                a.$8.add(b)
            }),
            this.$7.clear());
            this.$1.publish(c)
        }
        ;
        return a
    }();
    function j(a, c) {
        a = b("relay-runtime/store/RelayReader").read(a, c).data;
        return a
    }
    e.exports = a
}
), null);
__d("relay-runtime/store/StoreInspector", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {}
    ;
    e.exports = {
        inspect: a
    }
}
), null);
__d("relay-runtime/store/ViewerPattern", ["relay-runtime/store/ClientID", "relay-runtime/store/RelayStoreUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("relay-runtime/store/ClientID").generateClientID;
    c = b("relay-runtime/store/RelayStoreUtils").ROOT_ID;
    d = a(c, "viewer");
    f = "Viewer";
    e.exports = {
        VIEWER_ID: d,
        VIEWER_TYPE: f
    }
}
), null);
__d("relay-runtime/store/defaultGetDataID", ["relay-runtime/store/ViewerPattern"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("relay-runtime/store/ViewerPattern").VIEWER_ID
      , h = b("relay-runtime/store/ViewerPattern").VIEWER_TYPE;
    function a(a, b) {
        return b === h ? a.id == null ? g : a.id : a.id
    }
    e.exports = a
}
), null);
__d("relay-runtime/util/generateID", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = 1e5;
    function a() {
        return g++
    }
    e.exports = a
}
), null);
__d("relay-runtime/store/RelayModernEnvironment", ["invariant", "relay-runtime/handlers/RelayDefaultHandlerProvider", "relay-runtime/util/RelayFeatureFlags", "relay-runtime/store/RelayModernQueryExecutor", "relay-runtime/network/RelayObservable", "relay-runtime/store/RelayOperationTracker", "relay-runtime/store/RelayPublishQueue", "relay-runtime/store/RelayRecordSource", "relay-runtime/store/defaultGetDataID", "relay-runtime/util/generateID", "relay-runtime/store/StoreInspector"], (function(a, b, c, d, e, f, g) {
    "use strict";
    c = function() {
        function c(c) {
            var d, e = this;
            this.configName = c.configName;
            var f = c.handlerProvider ? c.handlerProvider : b("relay-runtime/handlers/RelayDefaultHandlerProvider");
            this.$11 = c.treatMissingFieldsAsNull === !0;
            var g = c.operationLoader
              , i = c.reactFlightPayloadDeserializer;
            this.__log = (d = c.log) != null ? d : h;
            this.$1 = ((d = c.UNSTABLE_defaultRenderPolicy) != null ? d : b("relay-runtime/util/RelayFeatureFlags").ENABLE_PARTIAL_RENDERING_DEFAULT === !0) ? "partial" : "full";
            this.$2 = g;
            this.$12 = new Map();
            this.$4 = c.network;
            this.$10 = (d = c.UNSTABLE_DO_NOT_USE_getDataID) != null ? d : b("relay-runtime/store/defaultGetDataID");
            this.$5 = new (b("relay-runtime/store/RelayPublishQueue"))(c.store,f,this.$10);
            this.$6 = (g = c.scheduler) != null ? g : null;
            this.$7 = c.store;
            this.options = c.options;
            this.$13 = (d = c.isServer) != null ? d : !1;
            this.__setNet = function(a) {
                return e.$4 = a
            }
            ;
            f = typeof a !== "undefined" ? a : typeof window !== "undefined" ? window : void 0;
            g = f && f.__RELAY_DEVTOOLS_HOOK__;
            g && g.registerEnvironment(this);
            this.$8 = c.missingFieldHandlers;
            this.$9 = (d = c.operationTracker) != null ? d : new (b("relay-runtime/store/RelayOperationTracker"))();
            this.$3 = i
        }
        var d = c.prototype;
        d.getStore = function() {
            return this.$7
        }
        ;
        d.getNetwork = function() {
            return this.$4
        }
        ;
        d.getOperationTracker = function() {
            return this.$9
        }
        ;
        d.isRequestActive = function(a) {
            a = this.$12.get(a);
            return a === "active"
        }
        ;
        d.UNSTABLE_getDefaultRenderPolicy = function() {
            return this.$1
        }
        ;
        d.applyUpdate = function(a) {
            var b = this
              , c = function() {
                b.$14(function() {
                    b.$5.revertUpdate(a),
                    b.$5.run()
                })
            };
            this.$14(function() {
                b.$5.applyUpdate(a),
                b.$5.run()
            });
            return {
                dispose: c
            }
        }
        ;
        d.revertUpdate = function(a) {
            var b = this;
            this.$14(function() {
                b.$5.revertUpdate(a),
                b.$5.run()
            })
        }
        ;
        d.replaceUpdate = function(a, b) {
            var c = this;
            this.$14(function() {
                c.$5.revertUpdate(a),
                c.$5.applyUpdate(b),
                c.$5.run()
            })
        }
        ;
        d.applyMutation = function(a) {
            var c = this
              , d = b("relay-runtime/network/RelayObservable").create(function(d) {
                var e = b("relay-runtime/network/RelayObservable").create(function(a) {})
                  , f = b("relay-runtime/store/RelayModernQueryExecutor").execute({
                    operation: a.operation,
                    operationExecutions: c.$12,
                    operationLoader: c.$2,
                    optimisticConfig: a,
                    publishQueue: c.$5,
                    reactFlightPayloadDeserializer: c.$3,
                    scheduler: c.$6,
                    sink: d,
                    source: e,
                    store: c.$7,
                    updater: null,
                    operationTracker: c.$9,
                    getDataID: c.$10,
                    treatMissingFieldsAsNull: c.$11
                });
                return function() {
                    return f.cancel()
                }
            }).subscribe({});
            return {
                dispose: function() {
                    return d.unsubscribe()
                }
            }
        }
        ;
        d.check = function(a) {
            return this.$8 == null || this.$8.length === 0 ? this.$7.check(a) : this.$15(a, this.$8)
        }
        ;
        d.commitPayload = function(a, c) {
            var d = this;
            b("relay-runtime/network/RelayObservable").create(function(e) {
                var f = b("relay-runtime/store/RelayModernQueryExecutor").execute({
                    operation: a,
                    operationExecutions: d.$12,
                    operationLoader: d.$2,
                    optimisticConfig: null,
                    publishQueue: d.$5,
                    reactFlightPayloadDeserializer: d.$3,
                    scheduler: d.$6,
                    sink: e,
                    source: b("relay-runtime/network/RelayObservable").from({
                        data: c
                    }),
                    store: d.$7,
                    updater: null,
                    operationTracker: d.$9,
                    getDataID: d.$10,
                    isClientPayload: !0,
                    treatMissingFieldsAsNull: d.$11
                });
                return function() {
                    return f.cancel()
                }
            }).subscribe({})
        }
        ;
        d.commitUpdate = function(a) {
            var b = this;
            this.$14(function() {
                b.$5.commitUpdate(a),
                b.$5.run()
            })
        }
        ;
        d.lookup = function(a) {
            return this.$7.lookup(a)
        }
        ;
        d.subscribe = function(a, b) {
            return this.$7.subscribe(a, b)
        }
        ;
        d.retain = function(a) {
            return this.$7.retain(a)
        }
        ;
        d.isServer = function() {
            return this.$13
        }
        ;
        d.$15 = function(a, c) {
            var d = this
              , e = b("relay-runtime/store/RelayRecordSource").create();
            a = this.$7.check(a, {
                target: e,
                handlers: c
            });
            e.size() > 0 && this.$14(function() {
                d.$5.commitSource(e),
                d.$5.run()
            });
            return a
        }
        ;
        d.$14 = function(a) {
            var b = this.$6;
            b != null ? b.schedule(a) : a()
        }
        ;
        d.execute = function(a) {
            var c = this
              , d = a.operation
              , e = a.cacheConfig
              , f = a.updater;
            a = this.__createLogObserver(d.request.node.params, d.request.variables);
            var g = a[0]
              , h = a[1];
            return b("relay-runtime/network/RelayObservable").create(function(a) {
                var i = c.$4.execute(d.request.node.params, d.request.variables, e || {}, null, h)["do"](g)
                  , j = b("relay-runtime/store/RelayModernQueryExecutor").execute({
                    operation: d,
                    operationExecutions: c.$12,
                    operationLoader: c.$2,
                    optimisticConfig: null,
                    publishQueue: c.$5,
                    reactFlightPayloadDeserializer: c.$3,
                    scheduler: c.$6,
                    sink: a,
                    source: i,
                    store: c.$7,
                    updater: f,
                    operationTracker: c.$9,
                    getDataID: c.$10,
                    treatMissingFieldsAsNull: c.$11
                });
                return function() {
                    return j.cancel()
                }
            })
        }
        ;
        d.executeMutation = function(a) {
            var c = this
              , d = a.cacheConfig
              , e = a.operation
              , f = a.optimisticResponse
              , g = a.optimisticUpdater
              , h = a.updater
              , i = a.uploadables;
            a = this.__createLogObserver(e.request.node.params, e.request.variables);
            var j = a[0]
              , k = a[1];
            return b("relay-runtime/network/RelayObservable").create(function(a) {
                var l;
                (f || g) && (l = {
                    operation: e,
                    response: f,
                    updater: g
                });
                var m = c.$4.execute(e.request.node.params, e.request.variables, babelHelpers["extends"]({}, d, {
                    force: !0
                }), i, k)["do"](j)
                  , n = b("relay-runtime/store/RelayModernQueryExecutor").execute({
                    operation: e,
                    operationExecutions: c.$12,
                    operationLoader: c.$2,
                    optimisticConfig: l,
                    publishQueue: c.$5,
                    reactFlightPayloadDeserializer: c.$3,
                    scheduler: c.$6,
                    sink: a,
                    source: m,
                    store: c.$7,
                    updater: h,
                    operationTracker: c.$9,
                    getDataID: c.$10,
                    treatMissingFieldsAsNull: c.$11
                });
                return function() {
                    return n.cancel()
                }
            })
        }
        ;
        d.executeWithSource = function(a) {
            var c = this
              , d = a.operation
              , e = a.source;
            return b("relay-runtime/network/RelayObservable").create(function(a) {
                var f = b("relay-runtime/store/RelayModernQueryExecutor").execute({
                    operation: d,
                    operationExecutions: c.$12,
                    operationLoader: c.$2,
                    operationTracker: c.$9,
                    optimisticConfig: null,
                    publishQueue: c.$5,
                    reactFlightPayloadDeserializer: c.$3,
                    scheduler: c.$6,
                    sink: a,
                    source: e,
                    store: c.$7,
                    getDataID: c.$10,
                    treatMissingFieldsAsNull: c.$11
                });
                return function() {
                    return f.cancel()
                }
            })
        }
        ;
        d.toJSON = function() {
            var a;
            return "RelayModernEnvironment(" + ((a = this.configName) != null ? a : "") + ")"
        }
        ;
        d.__createLogObserver = function(a, c) {
            var d = b("relay-runtime/util/generateID")()
              , e = this.__log
              , f = {
                start: function(b) {
                    e({
                        name: "execute.start",
                        transactionID: d,
                        params: a,
                        variables: c
                    })
                },
                next: function(a) {
                    e({
                        name: "execute.next",
                        transactionID: d,
                        response: a
                    })
                },
                error: function(a) {
                    e({
                        name: "execute.error",
                        transactionID: d,
                        error: a
                    })
                },
                complete: function() {
                    e({
                        name: "execute.complete",
                        transactionID: d
                    })
                },
                unsubscribe: function() {
                    e({
                        name: "execute.unsubscribe",
                        transactionID: d
                    })
                }
            }
              , g = function(a) {
                e({
                    name: "execute.info",
                    transactionID: d,
                    info: a
                })
            };
            return [f, g]
        }
        ;
        return c
    }();
    c.prototype["@@RelayModernEnvironment"] = !0;
    function h() {}
    e.exports = c
}
), null);
__d("relay-runtime/store/cloneRelayHandleSourceField", ["invariant", "areEqual", "relay-runtime/util/RelayConcreteNode", "relay-runtime/store/RelayStoreUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = b("relay-runtime/util/RelayConcreteNode").LINKED_FIELD, j = b("relay-runtime/store/RelayStoreUtils").getHandleStorageKey;
    function a(a, c, d) {
        c = c.find(function(c) {
            return c.kind === i && c.name === a.name && c.alias === a.alias && (h || (h = b("areEqual")))(c.args, a.args)
        });
        c && c.kind === i || g(0, 2847, a.handle);
        d = j(a, d);
        return {
            kind: "LinkedField",
            alias: c.alias,
            name: d,
            storageKey: d,
            args: null,
            concreteType: c.concreteType,
            plural: c.plural,
            selections: c.selections
        }
    }
    e.exports = a
}
), null);
__d("relay-runtime/store/cloneRelayScalarHandleSourceField", ["invariant", "areEqual", "relay-runtime/util/RelayConcreteNode", "relay-runtime/store/RelayStoreUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = b("relay-runtime/util/RelayConcreteNode").SCALAR_FIELD, j = b("relay-runtime/store/RelayStoreUtils").getHandleStorageKey;
    function a(a, c, d) {
        c = c.find(function(c) {
            return c.kind === i && c.name === a.name && c.alias === a.alias && (h || (h = b("areEqual")))(c.args, a.args)
        });
        c && c.kind === i || g(0, 23146, a.handle);
        d = j(a, d);
        return {
            kind: "ScalarField",
            alias: c.alias,
            name: d,
            storageKey: d,
            args: null
        }
    }
    e.exports = a
}
), null);
__d("relay-runtime/store/DataChecker", ["invariant", "relay-runtime/util/RelayConcreteNode", "relay-runtime/util/RelayFeatureFlags", "relay-runtime/store/RelayModernRecord", "relay-runtime/mutations/RelayRecordSourceMutator", "relay-runtime/mutations/RelayRecordSourceProxy", "relay-runtime/store/RelayStoreUtils", "relay-runtime/store/cloneRelayHandleSourceField", "relay-runtime/store/cloneRelayScalarHandleSourceField", "relay-runtime/util/getOperation", "relay-runtime/store/ClientID", "relay-runtime/store/ReactFlight", "relay-runtime/store/RelayRecordState", "relay-runtime/store/TypeID"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = b("relay-runtime/store/ClientID").isClientID, j = b("relay-runtime/store/ReactFlight").REACT_FLIGHT_TREE_STORAGE_KEY, k = b("relay-runtime/store/ReactFlight").REACT_FLIGHT_QUERIES_STORAGE_KEY, l = b("relay-runtime/store/RelayRecordState").EXISTENT, m = b("relay-runtime/store/RelayRecordState").UNKNOWN, n = b("relay-runtime/store/TypeID").generateTypeID, o = (c = b("relay-runtime/util/RelayConcreteNode")).CONDITION, p = c.CLIENT_EXTENSION, q = c.DEFER, r = c.FLIGHT_FIELD, s = c.FRAGMENT_SPREAD, t = c.INLINE_FRAGMENT, u = c.LINKED_FIELD, v = c.LINKED_HANDLE, w = c.MODULE_IMPORT, x = c.SCALAR_FIELD, y = c.SCALAR_HANDLE, z = c.STREAM, A = c.TYPE_DISCRIMINATOR, B = (d = b("relay-runtime/store/RelayStoreUtils")).ROOT_ID, C = d.getModuleOperationKey, D = d.getStorageKey, E = d.getArgumentValues;
    function a(a, b, c, d, e, f) {
        var g = c.dataID
          , h = c.node;
        c = c.variables;
        a = new F(a,b,c,d,e,f);
        return a.check(h, g)
    }
    var F = function() {
        function a(a, c, d, e, f, g) {
            c = new (b("relay-runtime/mutations/RelayRecordSourceMutator"))(a,c);
            this.$2 = null;
            this.$1 = e;
            this.$3 = c;
            this.$4 = (e = f) != null ? e : null;
            this.$6 = new (b("relay-runtime/mutations/RelayRecordSourceProxy"))(c,g);
            this.$7 = !1;
            this.$8 = a;
            this.$9 = d
        }
        var c = a.prototype;
        c.check = function(a, b) {
            this.$10(a, b);
            return this.$7 === !0 ? {
                status: "missing",
                mostRecentlyInvalidatedAt: this.$2
            } : {
                status: "available",
                mostRecentlyInvalidatedAt: this.$2
            }
        }
        ;
        c.$11 = function(a) {
            Object.prototype.hasOwnProperty.call(this.$9, a) || g(0, 2044, a);
            return this.$9[a]
        }
        ;
        c.$12 = function() {
            this.$7 = !0
        }
        ;
        c.$13 = function(a, b) {
            return {
                args: a.args ? E(a.args, this.$9) : {},
                record: this.$8.get(b)
            }
        }
        ;
        c.$14 = function(a, b) {
            if (a.name === "id" && a.alias == null && i(b))
                return void 0;
            b = this.$13(a, b);
            var c = b.args;
            b = b.record;
            for (var d = this.$1, e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var g;
                if (e) {
                    if (f >= d.length)
                        break;
                    g = d[f++]
                } else {
                    f = d.next();
                    if (f.done)
                        break;
                    g = f.value
                }
                g = g;
                if (g.kind === "scalar") {
                    g = g.handle(a, b, c, this.$6);
                    if (g !== void 0)
                        return g
                }
            }
            this.$12()
        }
        ;
        c.$15 = function(a, b) {
            b = this.$13(a, b);
            var c = b.args;
            b = b.record;
            for (var d = this.$1, e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var g;
                if (e) {
                    if (f >= d.length)
                        break;
                    g = d[f++]
                } else {
                    f = d.next();
                    if (f.done)
                        break;
                    g = f.value
                }
                g = g;
                if (g.kind === "linked") {
                    g = g.handle(a, b, c, this.$6);
                    if (g !== void 0 && (g === null || this.$3.getStatus(g) === l))
                        return g
                }
            }
            this.$12()
        }
        ;
        c.$16 = function(a, b) {
            var c = this;
            b = this.$13(a, b);
            var d = b.args;
            b = b.record;
            for (var e = this.$1, f = Array.isArray(e), g = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var h;
                if (f) {
                    if (g >= e.length)
                        break;
                    h = e[g++]
                } else {
                    g = e.next();
                    if (g.done)
                        break;
                    h = g.value
                }
                h = h;
                if (h.kind === "pluralLinked") {
                    h = h.handle(a, b, d, this.$6);
                    if (h != null) {
                        var i = h.every(function(a) {
                            return a != null && c.$3.getStatus(a) === l
                        });
                        if (i)
                            return h
                    } else if (h === null)
                        return null
                }
            }
            this.$12()
        }
        ;
        c.$10 = function(a, c) {
            var d = this.$3.getStatus(c);
            d === m && this.$12();
            if (d === l) {
                d = this.$8.get(c);
                d = (h || (h = b("relay-runtime/store/RelayModernRecord"))).getInvalidationEpoch(d);
                d != null && (this.$2 = this.$2 != null ? Math.max(this.$2, d) : d);
                this.$17(a.selections, c)
            }
        }
        ;
        c.$17 = function(a, c) {
            var d = this;
            a.forEach(function(e) {
                switch (e.kind) {
                case x:
                    d.$18(e, c);
                    break;
                case u:
                    e.plural ? d.$19(e, c) : d.$20(e, c);
                    break;
                case o:
                    var f = d.$11(e.condition);
                    f === e.passingValue && d.$17(e.selections, c);
                    break;
                case t:
                    f = e.abstractKey;
                    if (f == null) {
                        var h = d.$3.getType(c);
                        h === e.type && d.$17(e.selections, c)
                    } else if (b("relay-runtime/util/RelayFeatureFlags").ENABLE_PRECISE_TYPE_REFINEMENT) {
                        h = d.$3.getType(c);
                        h != null || g(0, 22686, c);
                        h = n(h);
                        h = d.$3.getValue(h, f);
                        h === !0 ? d.$17(e.selections, c) : h == null && d.$12()
                    } else
                        d.$17(e.selections, c);
                    break;
                case v:
                    f = b("relay-runtime/store/cloneRelayHandleSourceField")(e, a, d.$9);
                    f.plural ? d.$19(f, c) : d.$20(f, c);
                    break;
                case y:
                    h = b("relay-runtime/store/cloneRelayScalarHandleSourceField")(e, a, d.$9);
                    d.$18(h, c);
                    break;
                case w:
                    d.$21(e, c);
                    break;
                case q:
                case z:
                    d.$17(e.selections, c);
                    break;
                case s:
                    g(0, 2045, e.kind);
                    break;
                case p:
                    f = d.$7;
                    d.$17(e.selections, c);
                    d.$7 = f;
                    break;
                case A:
                    if (b("relay-runtime/util/RelayFeatureFlags").ENABLE_PRECISE_TYPE_REFINEMENT) {
                        h = e.abstractKey;
                        f = d.$3.getType(c);
                        f != null || g(0, 22686, c);
                        f = n(f);
                        f = d.$3.getValue(f, h);
                        f == null && d.$12()
                    }
                    break;
                case r:
                    if (b("relay-runtime/util/RelayFeatureFlags").ENABLE_REACT_FLIGHT_COMPONENT_FIELD)
                        d.$22(e, c);
                    else
                        throw new Error("Flight fields are not yet supported.");
                    break;
                default:
                    e,
                    g(0, 2045, e.kind)
                }
            })
        }
        ;
        c.$21 = function(a, c) {
            var d = this.$4;
            d !== null || g(0, 13642);
            a = C(a.documentName);
            a = this.$3.getValue(c, a);
            if (a == null) {
                a === void 0 && this.$12();
                return
            }
            d = d.get(a);
            if (d != null) {
                a = b("relay-runtime/util/getOperation")(d);
                this.$10(a, c)
            } else
                this.$12()
        }
        ;
        c.$18 = function(a, b) {
            var c = D(a, this.$9)
              , d = this.$3.getValue(b, c);
            d === void 0 && (d = this.$14(a, b),
            d !== void 0 && this.$3.setValue(b, c, d))
        }
        ;
        c.$20 = function(a, b) {
            var c = D(a, this.$9)
              , d = this.$3.getLinkedRecordID(b, c);
            d === void 0 && (d = this.$15(a, b),
            d != null ? this.$3.setLinkedRecordID(b, c, d) : d === null && this.$3.setValue(b, c, null));
            d != null && this.$10(a, d)
        }
        ;
        c.$19 = function(a, b) {
            var c = this
              , d = D(a, this.$9)
              , e = this.$3.getLinkedRecordIDs(b, d);
            e === void 0 && (e = this.$16(a, b),
            e != null ? this.$3.setLinkedRecordIDs(b, d, e) : e === null && this.$3.setValue(b, d, null));
            e && e.forEach(function(b) {
                b != null && c.$10(a, b)
            })
        }
        ;
        c.$22 = function(a, c) {
            a = D(a, this.$9);
            c = this.$3.getLinkedRecordID(c, a);
            if (c == null) {
                if (c === void 0) {
                    this.$12();
                    return
                }
                return
            }
            a = this.$3.getValue(c, j);
            c = this.$3.getValue(c, k);
            if (a == null || !Array.isArray(c)) {
                this.$12();
                return
            }
            a = this.$4;
            a !== null || g(0, 23899);
            var d = this.$9;
            for (var c = c, e = Array.isArray(c), f = 0, c = e ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var h;
                if (e) {
                    if (f >= c.length)
                        break;
                    h = c[f++]
                } else {
                    f = c.next();
                    if (f.done)
                        break;
                    h = f.value
                }
                h = h;
                this.$9 = h.variables;
                h = a.get(h.module);
                if (h != null) {
                    h = b("relay-runtime/util/getOperation")(h);
                    this.$17(h.selections, B)
                } else
                    this.$12()
            }
            this.$9 = d
        }
        ;
        return a
    }();
    e.exports = {
        check: a
    }
}
), null);
__d("relay-runtime/store/RelayOptimisticRecordSource", ["relay-runtime/store/RelayRecordSource"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = Object.freeze({
        __UNPUBLISH_RECORD_SENTINEL: !0
    })
      , h = function() {
        function a(a) {
            this.$1 = a,
            this.$2 = b("relay-runtime/store/RelayRecordSource").create()
        }
        var c = a.prototype;
        c.has = function(a) {
            if (this.$2.has(a)) {
                var b = this.$2.get(a);
                return b !== g
            } else
                return this.$1.has(a)
        }
        ;
        c.get = function(a) {
            if (this.$2.has(a)) {
                var b = this.$2.get(a);
                if (b === g)
                    return void 0;
                else
                    return b
            } else
                return this.$1.get(a)
        }
        ;
        c.getStatus = function(a) {
            a = this.get(a);
            if (a === void 0)
                return "UNKNOWN";
            else if (a === null)
                return "NONEXISTENT";
            else
                return "EXISTENT"
        }
        ;
        c.clear = function() {
            this.$1 = b("relay-runtime/store/RelayRecordSource").create(),
            this.$2.clear()
        }
        ;
        c["delete"] = function(a) {
            this.$2["delete"](a)
        }
        ;
        c.remove = function(a) {
            this.$2.set(a, g)
        }
        ;
        c.set = function(a, b) {
            this.$2.set(a, b)
        }
        ;
        c.getRecordIDs = function() {
            return Object.keys(this.toJSON())
        }
        ;
        c.size = function() {
            return Object.keys(this.toJSON()).length
        }
        ;
        c.toJSON = function() {
            var a = this
              , b = babelHelpers["extends"]({}, this.$1.toJSON());
            this.$2.getRecordIDs().forEach(function(c) {
                var d = a.get(c);
                d === void 0 ? delete b[c] : b[c] = d
            });
            return b
        }
        ;
        return a
    }();
    function a(a) {
        return new h(a)
    }
    e.exports = {
        create: a
    }
}
), null);
__d("relay-runtime/store/RelayReferenceMarker", ["invariant", "relay-runtime/util/RelayConcreteNode", "relay-runtime/util/RelayFeatureFlags", "relay-runtime/store/RelayModernRecord", "relay-runtime/store/RelayStoreUtils", "relay-runtime/store/cloneRelayHandleSourceField", "relay-runtime/util/getOperation", "relay-runtime/store/ReactFlight", "relay-runtime/store/TypeID"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = b("relay-runtime/store/ReactFlight").REACT_FLIGHT_QUERIES_STORAGE_KEY, j = b("relay-runtime/store/TypeID").generateTypeID, k = (c = b("relay-runtime/util/RelayConcreteNode")).CONDITION, l = c.CLIENT_EXTENSION, m = c.DEFER, n = c.FLIGHT_FIELD, o = c.FRAGMENT_SPREAD, p = c.INLINE_FRAGMENT, q = c.LINKED_FIELD, r = c.MODULE_IMPORT, s = c.LINKED_HANDLE, t = c.SCALAR_FIELD, u = c.SCALAR_HANDLE, v = c.STREAM, w = c.TYPE_DISCRIMINATOR, x = b("relay-runtime/store/RelayStoreUtils").ROOT_ID, y = b("relay-runtime/store/RelayStoreUtils").getStorageKey, z = b("relay-runtime/store/RelayStoreUtils").getModuleOperationKey;
    function a(a, b, c, d) {
        var e = b.dataID
          , f = b.node;
        b = b.variables;
        a = new A(a,b,c,d);
        a.mark(f, e)
    }
    var A = function() {
        function a(a, b, c, d) {
            this.$1 = (d = d) != null ? d : null;
            this.$2 = null;
            this.$3 = a;
            this.$4 = c;
            this.$5 = b
        }
        var c = a.prototype;
        c.mark = function(a, b) {
            (a.kind === "Operation" || a.kind === "SplitOperation") && (this.$2 = a.name),
            this.$6(a, b)
        }
        ;
        c.$6 = function(a, b) {
            this.$4.add(b);
            b = this.$3.get(b);
            if (b == null)
                return;
            this.$7(a.selections, b)
        }
        ;
        c.$8 = function(a) {
            Object.prototype.hasOwnProperty.call(this.$5, a) || g(0, 5170, a);
            return this.$5[a]
        }
        ;
        c.$7 = function(a, c) {
            var d = this;
            a.forEach(function(e) {
                switch (e.kind) {
                case q:
                    e.plural ? d.$9(e, c) : d.$10(e, c);
                    break;
                case k:
                    var f = d.$8(e.condition);
                    f === e.passingValue && d.$7(e.selections, c);
                    break;
                case p:
                    if (e.abstractKey == null) {
                        f = (h || (h = b("relay-runtime/store/RelayModernRecord"))).getType(c);
                        f != null && f === e.type && d.$7(e.selections, c)
                    } else if (b("relay-runtime/util/RelayFeatureFlags").ENABLE_PRECISE_TYPE_REFINEMENT) {
                        f = (h || (h = b("relay-runtime/store/RelayModernRecord"))).getType(c);
                        f = j(f);
                        d.$4.add(f);
                        d.$7(e.selections, c)
                    } else
                        d.$7(e.selections, c);
                    break;
                case o:
                    g(0, 5171, e.name);
                case s:
                    f = b("relay-runtime/store/cloneRelayHandleSourceField")(e, a, d.$5);
                    f.plural ? d.$9(f, c) : d.$10(f, c);
                    break;
                case m:
                case v:
                    d.$7(e.selections, c);
                    break;
                case t:
                case u:
                    break;
                case w:
                    if (b("relay-runtime/util/RelayFeatureFlags").ENABLE_PRECISE_TYPE_REFINEMENT) {
                        f = (h || (h = b("relay-runtime/store/RelayModernRecord"))).getType(c);
                        f = j(f);
                        d.$4.add(f)
                    }
                    break;
                case r:
                    d.$11(e, c);
                    break;
                case l:
                    d.$7(e.selections, c);
                    break;
                case n:
                    if (b("relay-runtime/util/RelayFeatureFlags").ENABLE_REACT_FLIGHT_COMPONENT_FIELD)
                        d.$12(e, c);
                    else
                        throw new Error("Flight fields are not yet supported.");
                    break;
                default:
                    e,
                    g(0, 5172, e)
                }
            })
        }
        ;
        c.$11 = function(a, c) {
            var d, e = this.$1;
            e !== null || g(0, 23904, a.fragmentName, (d = this.$2) != null ? d : "(unknown)");
            d = z(a.documentName);
            a = (h || (h = b("relay-runtime/store/RelayModernRecord"))).getValue(c, d);
            if (a == null)
                return;
            d = e.get(a);
            if (d != null) {
                e = b("relay-runtime/util/getOperation")(d).selections;
                this.$7(e, c)
            }
        }
        ;
        c.$10 = function(a, c) {
            var d = y(a, this.$5);
            c = (h || (h = b("relay-runtime/store/RelayModernRecord"))).getLinkedRecordID(c, d);
            if (c == null)
                return;
            this.$6(a, c)
        }
        ;
        c.$9 = function(a, c) {
            var d = this
              , e = y(a, this.$5);
            c = (h || (h = b("relay-runtime/store/RelayModernRecord"))).getLinkedRecordIDs(c, e);
            if (c == null)
                return;
            c.forEach(function(b) {
                b != null && d.$6(a, b)
            })
        }
        ;
        c.$12 = function(a, c) {
            a = y(a, this.$5);
            c = (h || (h = b("relay-runtime/store/RelayModernRecord"))).getLinkedRecordID(c, a);
            if (c == null)
                return;
            this.$4.add(c);
            a = this.$3.get(c);
            if (a == null)
                return;
            c = h.getValue(a, i);
            if (!Array.isArray(c))
                return;
            a = this.$1;
            a !== null || g(0, 23917);
            var d = this.$5;
            for (var c = c, e = Array.isArray(c), f = 0, c = e ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var j;
                if (e) {
                    if (f >= c.length)
                        break;
                    j = c[f++]
                } else {
                    f = c.next();
                    if (f.done)
                        break;
                    j = f.value
                }
                j = j;
                this.$5 = j.variables;
                j = j.module;
                j = a.get(j);
                if (j != null) {
                    j = b("relay-runtime/util/getOperation")(j);
                    this.$6(j, x)
                }
            }
            this.$5 = d
        }
        ;
        return a
    }();
    e.exports = {
        mark: a
    }
}
), null);
__d("relay-runtime/store/hasOverlappingIDs", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = Object.prototype.hasOwnProperty;
    function a(a, b) {
        for (var c in a)
            if (g.call(a, c) && g.call(b, c))
                return !0;
        return !1
    }
    e.exports = a
}
), null);
__d("relay-runtime/util/recycleNodesInto", [], (function(a, b, c, d, e, f) {
    "use strict";
    function g(a, b) {
        if (a === b || typeof a !== "object" || !a || typeof b !== "object" || !b)
            return b;
        var c = !1
          , d = Array.isArray(a) ? a : null
          , e = Array.isArray(b) ? b : null;
        if (d && e)
            c = e.reduce(function(a, b, c) {
                var f = d[c];
                f = g(f, b);
                f !== e[c] && (e[c] = f);
                return a && f === d[c]
            }, !0) && d.length === e.length;
        else if (!d && !e) {
            var f = a
              , h = b
              , i = Object.keys(f)
              , j = Object.keys(h);
            c = j.reduce(function(a, b) {
                var c = f[b];
                c = g(c, h[b]);
                c !== h[b] && (h[b] = c);
                return a && c === f[b]
            }, !0) && i.length === j.length
        }
        return c ? a : b
    }
    e.exports = g
}
), null);
__d("relay-runtime/util/resolveImmediate", ["Promise"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("Promise").resolve();
    function a(a) {
        g.then(a)["catch"](h)
    }
    function h(a) {
        setTimeout(function() {
            throw a
        }, 0)
    }
    e.exports = a
}
), null);
__d("relay-runtime/store/RelayModernStore", ["invariant", "regeneratorRuntime", "relay-runtime/store/DataChecker", "relay-runtime/store/RelayModernRecord", "relay-runtime/store/RelayOptimisticRecordSource", "relay-runtime/util/RelayProfiler", "relay-runtime/store/RelayReader", "relay-runtime/store/RelayReferenceMarker", "relay-runtime/store/RelayStoreUtils", "relay-runtime/util/deepFreeze", "relay-runtime/store/defaultGetDataID", "relay-runtime/store/hasOverlappingIDs", "relay-runtime/util/recycleNodesInto", "relay-runtime/util/resolveImmediate"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j, k = b("relay-runtime/store/RelayStoreUtils").ROOT_ID, l = b("relay-runtime/store/RelayStoreUtils").ROOT_TYPE, m = 0;
    a = function() {
        function a(a, c) {
            var d = this, e;
            this.$23 = function() {
                d.$4 && (d.$4.next().done ? d.$4 = null : d.$5(d.$23))
            }
            ;
            this.$1 = 0;
            this.$2 = 0;
            this.$3 = (e = c == null ? void 0 : c.gcReleaseBufferSize) != null ? e : m;
            this.$4 = null;
            this.$5 = (e = c == null ? void 0 : c.gcScheduler) != null ? e : b("relay-runtime/util/resolveImmediate");
            this.$6 = (e = c == null ? void 0 : c.UNSTABLE_DO_NOT_USE_getDataID) != null ? e : b("relay-runtime/store/defaultGetDataID");
            this.$7 = null;
            this.$8 = new Set();
            this.$9 = new Set();
            this.__log = (e = c == null ? void 0 : c.log) != null ? e : null;
            this.$10 = c == null ? void 0 : c.queryCacheExpirationTime;
            this.$11 = (e = c == null ? void 0 : c.operationLoader) != null ? e : null;
            this.$12 = null;
            this.$13 = a;
            this.$14 = [];
            this.$15 = new Map();
            this.$16 = !1;
            this.$17 = new Set();
            this.$18 = {};
            n(this.$13)
        }
        var c = a.prototype;
        c.getSource = function() {
            var a;
            return (a = this.$12) != null ? a : this.$13
        }
        ;
        c.check = function(a, c) {
            var d, e = a.root;
            d = (d = this.$12) != null ? d : this.$13;
            var f = this.$7;
            a = this.$15.get(a.request.identifier);
            var g = a != null ? a.epoch : null;
            if (f != null && (g == null || g <= f))
                return {
                    status: "stale"
                };
            f = (f = c == null ? void 0 : c.target) != null ? f : d;
            c = (c = c == null ? void 0 : c.handlers) != null ? c : [];
            d = b("relay-runtime/store/DataChecker").check(d, f, e, c, this.$11, this.$6);
            return p(d, g, a == null ? void 0 : a.fetchTime, this.$10)
        }
        ;
        c.retain = function(a) {
            var b = this
              , c = a.request.identifier
              , d = !1
              , e = function() {
                if (d)
                    return;
                d = !0;
                var a = b.$15.get(c);
                if (a == null)
                    return;
                a.refCount--;
                if (a.refCount === 0) {
                    var e = b.$10;
                    a = a.fetchTime != null && e != null && a.fetchTime <= Date.now() - e;
                    if (a)
                        b.$15["delete"](c),
                        b.$19();
                    else {
                        b.$14.push(c);
                        if (b.$14.length > b.$3) {
                            e = b.$14.shift();
                            b.$15["delete"](e);
                            b.$19()
                        }
                    }
                }
            }
              , f = this.$15.get(c);
            f != null ? (f.refCount === 0 && (this.$14 = this.$14.filter(function(a) {
                return a !== c
            })),
            f.refCount += 1) : this.$15.set(c, {
                operation: a,
                refCount: 1,
                epoch: null,
                fetchTime: null
            });
            return {
                dispose: e
            }
        }
        ;
        c.lookup = function(a) {
            var c = this.getSource();
            c = b("relay-runtime/store/RelayReader").read(c, a);
            return c
        }
        ;
        c.notify = function(a, b) {
            var c = this
              , d = this.__log;
            d != null && d({
                name: "store.notify.start"
            });
            this.$1++;
            b === !0 && (this.$7 = this.$1);
            var e = this.getSource()
              , f = [];
            this.$17.forEach(function(a) {
                a = c.$20(e, a);
                a != null && f.push(a)
            });
            this.$8.forEach(function(a) {
                c.$21(a, b === !0)
            });
            d != null && d({
                name: "store.notify.complete",
                updatedRecordIDs: this.$18,
                invalidatedRecordIDs: this.$9
            });
            this.$18 = {};
            this.$9.clear();
            if (a != null) {
                d = a.request.identifier;
                var g = this.$15.get(d);
                if (g != null)
                    g.epoch = this.$1,
                    g.fetchTime = Date.now();
                else if (a.request.node.params.operationKind === "query" && this.$3 > 0 && this.$14.length < this.$3) {
                    g = {
                        operation: a,
                        refCount: 0,
                        epoch: this.$1,
                        fetchTime: Date.now()
                    };
                    this.$14.push(d);
                    this.$15.set(d, g)
                }
            }
            return f
        }
        ;
        c.publish = function(a, b) {
            var c;
            c = (c = this.$12) != null ? c : this.$13;
            o(c, a, this.$1 + 1, b, this.$18, this.$9);
            b = this.__log;
            b != null && b({
                name: "store.publish",
                source: a,
                optimistic: c === this.$12
            })
        }
        ;
        c.subscribe = function(a, b) {
            var c = this
              , d = {
                backup: null,
                callback: b,
                snapshot: a,
                stale: !1
            };
            b = function() {
                c.$17["delete"](d)
            }
            ;
            this.$17.add(d);
            return {
                dispose: b
            }
        }
        ;
        c.holdGC = function() {
            var a = this;
            this.$4 && (this.$4 = null,
            this.$16 = !0);
            this.$2++;
            var b = function() {
                a.$2 > 0 && (a.$2--,
                a.$2 === 0 && a.$16 && (a.$19(),
                a.$16 = !1))
            };
            return {
                dispose: b
            }
        }
        ;
        c.toJSON = function() {
            return "RelayModernStore()"
        }
        ;
        c.__getUpdatedRecordIDs = function() {
            return this.$18
        }
        ;
        c.$20 = function(a, c) {
            var d = c.backup
              , e = c.callback
              , f = c.snapshot
              , g = c.stale
              , h = (j || (j = b("relay-runtime/store/hasOverlappingIDs")))(f.seenRecords, this.$18);
            if (!g && !h)
                return;
            g = h || !d ? b("relay-runtime/store/RelayReader").read(a, f.selector) : d;
            h = b("relay-runtime/util/recycleNodesInto")(f.data, g.data);
            g = {
                data: h,
                isMissingData: g.isMissingData,
                seenRecords: g.seenRecords,
                selector: g.selector,
                missingRequiredFields: g.missingRequiredFields
            };
            c.snapshot = g;
            c.stale = !1;
            if (g.data !== f.data) {
                e(g);
                return f.selector.owner
            }
        }
        ;
        c.lookupInvalidationState = function(a) {
            var c = this
              , d = new Map();
            a.forEach(function(a) {
                var e = c.getSource().get(a);
                d.set(a, (a = (h || (h = b("relay-runtime/store/RelayModernRecord"))).getInvalidationEpoch(e)) != null ? a : null)
            });
            d.set("global", this.$7);
            return {
                dataIDs: a,
                invalidations: d
            }
        }
        ;
        c.checkInvalidationState = function(a) {
            var b = this.lookupInvalidationState(a.dataIDs);
            b = b.invalidations;
            var c = a.invalidations;
            if (b.get("global") !== c.get("global"))
                return !0;
            for (var a = a.dataIDs, d = Array.isArray(a), e = 0, a = d ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var f;
                if (d) {
                    if (e >= a.length)
                        break;
                    f = a[e++]
                } else {
                    e = a.next();
                    if (e.done)
                        break;
                    f = e.value
                }
                f = f;
                if (b.get(f) !== c.get(f))
                    return !0
            }
            return !1
        }
        ;
        c.subscribeToInvalidationState = function(a, b) {
            var c = this
              , d = {
                callback: b,
                invalidationState: a
            };
            b = function() {
                c.$8["delete"](d)
            }
            ;
            this.$8.add(d);
            return {
                dispose: b
            }
        }
        ;
        c.$21 = function(a, b) {
            var c = this
              , d = a.callback;
            a = a.invalidationState;
            a = a.dataIDs;
            b = b || a.some(function(a) {
                return c.$9.has(a)
            });
            if (!b)
                return;
            d()
        }
        ;
        c.snapshot = function() {
            var a = this;
            this.$12 == null || g(0, 19004);
            var c = this.__log;
            c != null && c({
                name: "store.snapshot"
            });
            this.$17.forEach(function(c) {
                if (!c.stale) {
                    c.backup = c.snapshot;
                    return
                }
                var d = c.snapshot
                  , e = b("relay-runtime/store/RelayReader").read(a.getSource(), d.selector);
                d = b("relay-runtime/util/recycleNodesInto")(d.data, e.data);
                e.data = d;
                c.backup = e
            });
            this.$4 && (this.$4 = null,
            this.$16 = !0);
            this.$12 = b("relay-runtime/store/RelayOptimisticRecordSource").create(this.getSource())
        }
        ;
        c.restore = function() {
            this.$12 != null || g(0, 19005);
            var a = this.__log;
            a != null && a({
                name: "store.restore"
            });
            this.$12 = null;
            this.$16 && this.$19();
            this.$17.forEach(function(a) {
                var b = a.backup;
                a.backup = null;
                b ? (b.data !== a.snapshot.data && (a.stale = !0),
                a.snapshot = {
                    data: a.snapshot.data,
                    isMissingData: b.isMissingData,
                    seenRecords: b.seenRecords,
                    selector: b.selector,
                    missingRequiredFields: b.missingRequiredFields
                }) : a.stale = !0
            })
        }
        ;
        c.$19 = function() {
            if (this.$2 > 0) {
                this.$16 = !0;
                return
            }
            if (this.$4)
                return;
            this.$4 = this.$22();
            this.$5(this.$23)
        }
        ;
        c.__gc = function() {
            if (this.$12 != null)
                return;
            var a = this.$22();
            while (!a.next().done)
                ;
        }
        ;
        c.$22 = b("regeneratorRuntime").mark(function a() {
            var c, d, e, f, g, h, i, j, k, l, m, n, o;
            return b("regeneratorRuntime").wrap(function(a) {
                while (1)
                    switch (a.prev = a.next) {
                    case 0:
                        c = this.$1,
                        d = new Set(),
                        (e = this.$15.values(),
                        f = Array.isArray(e),
                        g = 0,
                        e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]());
                    case 4:
                        if (!f) {
                            a.next = 10;
                            break
                        }
                        if (!(g >= e.length)) {
                            a.next = 7;
                            break
                        }
                        return a.abrupt("break", 24);
                    case 7:
                        h = e[g++];
                        a.next = 14;
                        break;
                    case 10:
                        g = e.next();
                        if (!g.done) {
                            a.next = 13;
                            break
                        }
                        return a.abrupt("break", 24);
                    case 13:
                        h = g.value;
                    case 14:
                        i = h;
                        j = i.operation;
                        k = j.root;
                        b("relay-runtime/store/RelayReferenceMarker").mark(this.$13, k, d, this.$11);
                        a.next = 20;
                        return;
                    case 20:
                        if (!(c !== this.$1)) {
                            a.next = 22;
                            break
                        }
                        return a.abrupt("continue", 0);
                    case 22:
                        a.next = 4;
                        break;
                    case 24:
                        l = this.__log;
                        l != null && l({
                            name: "store.gc",
                            references: d
                        });
                        if (d.size === 0)
                            this.$13.clear();
                        else {
                            m = this.$13.getRecordIDs();
                            for (n = 0; n < m.length; n++)
                                o = m[n],
                                d.has(o) || this.$13.remove(o)
                        }
                        return a.abrupt("return");
                    case 30:
                    case "end":
                        return a.stop()
                    }
            }, a, this)
        });
        return a
    }();
    function n(a) {
        if (!a.has(k)) {
            var c = (h || (h = b("relay-runtime/store/RelayModernRecord"))).create(k, l);
            a.set(k, c)
        }
    }
    function o(a, c, d, e, f, g) {
        e && e.forEach(function(e) {
            var i = a.get(e)
              , f = c.get(e);
            if (f === null)
                return;
            i != null ? i = (h || (h = b("relay-runtime/store/RelayModernRecord"))).clone(i) : i = f != null ? (h || (h = b("relay-runtime/store/RelayModernRecord"))).clone(f) : null;
            if (!i)
                return;
            (h || (h = b("relay-runtime/store/RelayModernRecord"))).setValue(i, b("relay-runtime/store/RelayStoreUtils").INVALIDATED_AT_KEY, d);
            g.add(e);
            a.set(e, i)
        });
        e = c.getRecordIDs();
        for (var i = 0; i < e.length; i++) {
            var j = e[i]
              , k = c.get(j)
              , l = a.get(j);
            if (k && l) {
                var m = (h || (h = b("relay-runtime/store/RelayModernRecord"))).update(l, k);
                m !== l && (f[j] = !0,
                a.set(j, m))
            } else
                k === null ? (a["delete"](j),
                l !== null && (f[j] = !0)) : k && (a.set(j, k),
                f[j] = !0)
        }
    }
    function p(a, b, c, d) {
        var e = a.mostRecentlyInvalidatedAt;
        a = a.status;
        if (typeof e === "number" && (b == null || e > b))
            return {
                status: "stale"
            };
        if (a === "missing")
            return {
                status: "missing"
            };
        if (c != null && d != null) {
            e = c <= Date.now() - d;
            if (e)
                return {
                    status: "stale"
                }
        }
        return {
            status: "available",
            fetchTime: (b = c) != null ? b : null
        }
    }
    b("relay-runtime/util/RelayProfiler").instrumentMethods(a.prototype, {
        lookup: "RelayModernStore.prototype.lookup"
    });
    e.exports = a
}
), null);
__d("relay-runtime/util/isScalarAndEqual", [], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
        return a === b && (a === null || typeof a !== "object")
    }
    e.exports = a
}
), null);
__d("relay-runtime/util/reportMissingRequiredFields", [], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
        switch (b.action) {
        case "THROW":
            var c = b.field
              , d = c.path;
            c = c.owner;
            throw new Error("Relay: Missing @required value at path '" + d + "' in '" + c + "'.");
        case "LOG":
            b.fields.forEach(function(c) {
                var b = c.path;
                c = c.owner;
                a.__log({
                    name: "read.missing_required_field",
                    owner: c,
                    fieldPath: b
                })
            });
            break;
        default:
            b.action
        }
    }
    e.exports = a
}
), null);
__d("relay-runtime/store/RelayModernFragmentSpecResolver", ["invariant", "relay-runtime/util/RelayFeatureFlags", "areEqual", "relay-runtime/util/isScalarAndEqual", "relay-runtime/util/reportMissingRequiredFields", "warning", "relay-runtime/query/fetchQueryInternal", "relay-runtime/store/RelayModernOperationDescriptor", "relay-runtime/store/RelayModernSelector"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = b("relay-runtime/query/fetchQueryInternal").getPromiseForActiveRequest, j = b("relay-runtime/store/RelayModernOperationDescriptor").createRequestDescriptor, k = b("relay-runtime/store/RelayModernSelector").areEqualSelectors, l = b("relay-runtime/store/RelayModernSelector").createReaderSelector, m = b("relay-runtime/store/RelayModernSelector").getSelectorsFromObject;
    a = function() {
        function a(a, b, c, d) {
            var e = this;
            this.$8 = function() {
                e.$7 = !0,
                typeof e.$1 === "function" && e.$1()
            }
            ;
            this.$1 = d;
            this.$2 = a;
            this.$3 = {};
            this.$4 = b;
            this.$5 = {};
            this.$6 = {};
            this.$7 = !1;
            this.setProps(c)
        }
        var c = a.prototype;
        c.dispose = function() {
            for (var a in this.$6)
                Object.prototype.hasOwnProperty.call(this.$6, a) && p(this.$6[a])
        }
        ;
        c.resolve = function() {
            if (this.$7) {
                var a = this.$3, c;
                for (var d in this.$6)
                    if (Object.prototype.hasOwnProperty.call(this.$6, d)) {
                        var e = this.$6[d]
                          , f = a[d];
                        if (e) {
                            e = e.resolve();
                            (c || e !== f) && (c = c || babelHelpers["extends"]({}, a),
                            c[d] = e)
                        } else {
                            e = this.$5[d];
                            e = e !== void 0 ? e : null;
                            (c || !b("relay-runtime/util/isScalarAndEqual")(e, f)) && (c = c || babelHelpers["extends"]({}, a),
                            c[d] = e)
                        }
                    }
                this.$3 = c || a;
                this.$7 = !1
            }
            return this.$3
        }
        ;
        c.setCallback = function(a) {
            this.$1 = a
        }
        ;
        c.setProps = function(a) {
            var b = m(this.$4, a);
            this.$5 = {};
            for (var c in b)
                if (Object.prototype.hasOwnProperty.call(b, c)) {
                    var d = b[c]
                      , e = this.$6[c];
                    d == null ? (e != null && e.dispose(),
                    e = null) : d.kind === "PluralReaderSelector" ? e == null ? e = new o(this.$2.environment,d,this.$8) : (e instanceof o || g(0, 4761, c),
                    e.setSelector(d)) : e == null ? e = new n(this.$2.environment,d,this.$8) : (e instanceof n || g(0, 4762, c),
                    e.setSelector(d));
                    this.$5[c] = a[c];
                    this.$6[c] = e
                }
            this.$7 = !0
        }
        ;
        c.setVariables = function(a, b) {
            for (var c in this.$6)
                if (Object.prototype.hasOwnProperty.call(this.$6, c)) {
                    var d = this.$6[c];
                    d && d.setVariables(a, b)
                }
            this.$7 = !0
        }
        ;
        return a
    }();
    var n = function() {
        function a(a, b, c) {
            var d = this;
            this.$8 = function(a) {
                d.$2 = a.data,
                d.$4 = a.isMissingData,
                d.$5 = a.missingRequiredFields,
                d.$1()
            }
            ;
            var e = a.lookup(b);
            this.$1 = c;
            this.$2 = e.data;
            this.$4 = e.isMissingData;
            this.$5 = e.missingRequiredFields;
            this.$3 = a;
            this.$6 = b;
            this.$7 = a.subscribe(e, this.$8)
        }
        var c = a.prototype;
        c.dispose = function() {
            this.$7 && (this.$7.dispose(),
            this.$7 = null)
        }
        ;
        c.resolve = function() {
            if (b("relay-runtime/util/RelayFeatureFlags").ENABLE_RELAY_CONTAINERS_SUSPENSE === !0 && this.$4 === !0) {
                var a;
                a = (a = i(this.$3, this.$6.owner)) != null ? a : this.$3.getOperationTracker().getPromiseForPendingOperationsAffectingOwner(this.$6.owner);
                if (a != null) {
                    b("warning")(!1, "Relay: Relay Container for fragment `%s` suspended. When using features such as @defer or @module, use `useFragment` instead of a Relay Container.", this.$6.node.name);
                    throw a
                }
            }
            this.$5 != null && b("relay-runtime/util/reportMissingRequiredFields")(this.$3, this.$5);
            return this.$2
        }
        ;
        c.setSelector = function(a) {
            if (this.$7 != null && k(a, this.$6))
                return;
            this.dispose();
            var b = this.$3.lookup(a);
            this.$2 = b.data;
            this.$4 = b.isMissingData;
            this.$5 = b.missingRequiredFields;
            this.$6 = a;
            this.$7 = this.$3.subscribe(b, this.$8)
        }
        ;
        c.setVariables = function(a, c) {
            if ((h || (h = b("areEqual")))(a, this.$6.variables))
                return;
            c = j(c, a);
            a = l(this.$6.node, this.$6.dataID, a, c);
            this.setSelector(a)
        }
        ;
        return a
    }()
      , o = function() {
        function a(a, b, c) {
            var d = this;
            this.$6 = function(a) {
                d.$5 = !0,
                d.$1()
            }
            ;
            this.$1 = c;
            this.$2 = [];
            this.$3 = a;
            this.$4 = [];
            this.$5 = !0;
            this.setSelector(b)
        }
        var b = a.prototype;
        b.dispose = function() {
            this.$4.forEach(p)
        }
        ;
        b.resolve = function() {
            if (this.$5) {
                var a = this.$2, b;
                for (var c = 0; c < this.$4.length; c++) {
                    var d = a[c]
                      , e = this.$4[c].resolve();
                    (b || e !== d) && (b = b || a.slice(0, c),
                    b.push(e))
                }
                !b && this.$4.length !== a.length && (b = a.slice(0, this.$4.length));
                this.$2 = b || a;
                this.$5 = !1
            }
            return this.$2
        }
        ;
        b.setSelector = function(a) {
            a = a.selectors;
            while (this.$4.length > a.length) {
                var b = this.$4.pop();
                b.dispose()
            }
            for (var b = 0; b < a.length; b++)
                b < this.$4.length ? this.$4[b].setSelector(a[b]) : this.$4[b] = new n(this.$3,a[b],this.$6);
            this.$5 = !0
        }
        ;
        b.setVariables = function(a, b) {
            this.$4.forEach(function(c) {
                return c.setVariables(a, b)
            }),
            this.$5 = !0
        }
        ;
        return a
    }();
    function p(a) {
        a && a.dispose()
    }
    e.exports = a
}
), null);
__d("relay-runtime/store/createFragmentSpecResolver", ["relay-runtime/store/RelayModernFragmentSpecResolver", "warning"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, c, d, e, f) {
        return new (b("relay-runtime/store/RelayModernFragmentSpecResolver"))(a,d,e,f)
    }
    e.exports = a
}
), null);
__d("relay-runtime/store/createRelayContext", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    function a(a) {
        h || (h = a.createContext(null),
        i = a);
        a === i || g(0, 14299, a.version);
        return h
    }
    e.exports = a
}
), null);
__d("relay-runtime/store/readInlineData", ["invariant", "relay-runtime/query/GraphQLTag", "relay-runtime/store/RelayStoreUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("relay-runtime/query/GraphQLTag").getInlineDataFragment
      , i = b("relay-runtime/store/RelayStoreUtils").FRAGMENTS_KEY;
    function a(a, b) {
        a = h(a);
        if (b == null)
            return b;
        typeof b === "object" || g(0, 17729, typeof b);
        b = (b = b[i]) == null ? void 0 : b[a.name];
        b != null || g(0, 17728, a.name);
        return b
    }
    e.exports = a
}
), null);
__d("relay-runtime/subscription/requestSubscription", ["relay-runtime/mutations/RelayDeclarativeMutationConfig", "warning", "relay-runtime/query/GraphQLTag", "relay-runtime/store/RelayModernOperationDescriptor"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("relay-runtime/query/GraphQLTag").getRequest
      , h = b("relay-runtime/store/RelayModernOperationDescriptor").createOperationDescriptor;
    function a(a, c) {
        var d = g(c.subscription);
        if (d.params.operationKind !== "subscription")
            throw new Error("requestSubscription: Must use Subscription operation");
        var e = c.configs
          , f = c.onCompleted
          , i = c.onError
          , j = c.onNext
          , k = c.variables
          , l = c.cacheConfig
          , m = h(d, k);
        b("warning")(!(c.updater && e), "requestSubscription: Expected only one of `updater` and `configs` to be provided");
        k = e ? b("relay-runtime/mutations/RelayDeclarativeMutationConfig").convert(e, d, null, c.updater) : c;
        e = k.updater;
        d = a.execute({
            operation: m,
            updater: e,
            cacheConfig: l
        }).map(function() {
            var b = a.lookup(m.fragment).data;
            return b
        }).subscribe({
            next: j,
            error: i,
            complete: f
        });
        return {
            dispose: d.unsubscribe
        }
    }
    e.exports = a
}
), null);
__d("relay-runtime/util/createPayloadFor3DField", ["relay-runtime/store/RelayStoreUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("relay-runtime/store/RelayStoreUtils").getModuleComponentKey
      , h = b("relay-runtime/store/RelayStoreUtils").getModuleOperationKey;
    function a(a, b, c, d) {
        d = babelHelpers["extends"]({}, d);
        d[g(a)] = c;
        d[h(a)] = b;
        return d
    }
    e.exports = a
}
), null);
__d("relay-runtime/util/getFragmentIdentifier", ["relay-runtime/util/RelayFeatureFlags", "relay-runtime/util/stableCopy", "relay-runtime/store/RelayModernSelector"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("relay-runtime/store/RelayModernSelector").getDataIDsFromFragment, i = b("relay-runtime/store/RelayModernSelector").getVariablesFromFragment, j = b("relay-runtime/store/RelayModernSelector").getSelector;
    function a(a, c) {
        var d = j(a, c);
        d = d == null ? "null" : d.kind === "SingularReaderSelector" ? d.owner.identifier : "[" + d.selectors.map(function(a) {
            return a.owner.identifier
        }).join(",") + "]";
        var e = i(a, c);
        c = h(a, c);
        if (b("relay-runtime/util/RelayFeatureFlags").ENABLE_GETFRAGMENTIDENTIFIER_OPTIMIZATION)
            return d + "/" + a.name + "/" + (e == null || k(e) ? "{}" : JSON.stringify((g || (g = b("relay-runtime/util/stableCopy")))(e))) + "/" + (typeof c === "undefined" ? "missing" : c == null ? "null" : Array.isArray(c) ? "[" + c.join(",") + "]" : c);
        else {
            return d + "/" + a.name + "/" + JSON.stringify((g || (g = b("relay-runtime/util/stableCopy")))(e)) + "/" + ((d = JSON.stringify(c)) != null ? d : "missing")
        }
    }
    function k(a) {
        for (var b in a)
            return !1;
        return !0
    }
    e.exports = a
}
), null);
__d("relay-runtime", ["Promise", "relay-runtime/handlers/connection/ConnectionHandler", "relay-runtime/handlers/connection/ConnectionInterface", "relay-runtime/query/GraphQLTag", "relay-runtime/handlers/connection/MutationHandlers", "relay-runtime/query/PreloadableQueryRegistry", "relay-runtime/util/RelayConcreteNode", "relay-runtime/store/RelayConcreteVariables", "relay-runtime/mutations/RelayDeclarativeMutationConfig", "relay-runtime/util/RelayDefaultHandleKey", "relay-runtime/handlers/RelayDefaultHandlerProvider", "relay-runtime/util/RelayError", "relay-runtime/util/RelayFeatureFlags", "relay-runtime/store/RelayModernEnvironment", "relay-runtime/store/RelayModernOperationDescriptor", "relay-runtime/store/RelayModernRecord", "relay-runtime/store/RelayModernSelector", "relay-runtime/store/RelayModernStore", "relay-runtime/network/RelayNetwork", "relay-runtime/network/RelayObservable", "relay-runtime/store/RelayOperationTracker", "relay-runtime/util/RelayProfiler", "relay-runtime/network/RelayQueryResponseCache", "relay-runtime/store/RelayRecordSource", "relay-runtime/util/RelayReplaySubject", "relay-runtime/store/RelayStoreUtils", "relay-runtime/store/ViewerPattern", "relay-runtime/mutations/applyOptimisticMutation", "relay-runtime/mutations/commitLocalUpdate", "relay-runtime/mutations/commitMutation", "relay-runtime/store/createFragmentSpecResolver", "relay-runtime/util/createPayloadFor3DField", "relay-runtime/store/createRelayContext", "relay-runtime/util/deepFreeze", "relay-runtime/query/fetchQuery", "relay-runtime/query/fetchQueryInternal", "relay-runtime/util/getFragmentIdentifier", "relay-runtime/util/getRelayHandleKey", "relay-runtime/util/getRequestIdentifier", "relay-runtime/util/isPromise", "relay-runtime/store/isRelayModernEnvironment", "relay-runtime/util/isScalarAndEqual", "relay-runtime/store/readInlineData", "relay-runtime/util/recycleNodesInto", "relay-runtime/util/reportMissingRequiredFields", "relay-runtime/subscription/requestSubscription", "relay-runtime/util/stableCopy", "relay-runtime/store/ClientID"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i;
    a = b("relay-runtime/store/ClientID").generateClientID;
    c = b("relay-runtime/store/ClientID").generateUniqueClientID;
    d = b("relay-runtime/store/ClientID").isClientID;
    e.exports = {
        Environment: b("relay-runtime/store/RelayModernEnvironment"),
        Network: b("relay-runtime/network/RelayNetwork"),
        Observable: b("relay-runtime/network/RelayObservable"),
        QueryResponseCache: b("relay-runtime/network/RelayQueryResponseCache"),
        RecordSource: b("relay-runtime/store/RelayRecordSource"),
        Record: g || (g = b("relay-runtime/store/RelayModernRecord")),
        ReplaySubject: b("relay-runtime/util/RelayReplaySubject"),
        Store: b("relay-runtime/store/RelayModernStore"),
        areEqualSelectors: b("relay-runtime/store/RelayModernSelector").areEqualSelectors,
        createFragmentSpecResolver: b("relay-runtime/store/createFragmentSpecResolver"),
        createNormalizationSelector: b("relay-runtime/store/RelayModernSelector").createNormalizationSelector,
        createOperationDescriptor: b("relay-runtime/store/RelayModernOperationDescriptor").createOperationDescriptor,
        createReaderSelector: b("relay-runtime/store/RelayModernSelector").createReaderSelector,
        createRequestDescriptor: b("relay-runtime/store/RelayModernOperationDescriptor").createRequestDescriptor,
        getDataIDsFromFragment: b("relay-runtime/store/RelayModernSelector").getDataIDsFromFragment,
        getDataIDsFromObject: b("relay-runtime/store/RelayModernSelector").getDataIDsFromObject,
        getNode: b("relay-runtime/query/GraphQLTag").getNode,
        getFragment: b("relay-runtime/query/GraphQLTag").getFragment,
        getInlineDataFragment: b("relay-runtime/query/GraphQLTag").getInlineDataFragment,
        getModuleComponentKey: b("relay-runtime/store/RelayStoreUtils").getModuleComponentKey,
        getModuleOperationKey: b("relay-runtime/store/RelayStoreUtils").getModuleOperationKey,
        getPaginationFragment: b("relay-runtime/query/GraphQLTag").getPaginationFragment,
        getPluralSelector: b("relay-runtime/store/RelayModernSelector").getPluralSelector,
        getRefetchableFragment: b("relay-runtime/query/GraphQLTag").getRefetchableFragment,
        getRequest: b("relay-runtime/query/GraphQLTag").getRequest,
        getRequestIdentifier: b("relay-runtime/util/getRequestIdentifier"),
        getSelector: b("relay-runtime/store/RelayModernSelector").getSelector,
        getSelectorsFromObject: b("relay-runtime/store/RelayModernSelector").getSelectorsFromObject,
        getSingularSelector: b("relay-runtime/store/RelayModernSelector").getSingularSelector,
        getStorageKey: b("relay-runtime/store/RelayStoreUtils").getStorageKey,
        getVariablesFromFragment: b("relay-runtime/store/RelayModernSelector").getVariablesFromFragment,
        getVariablesFromObject: b("relay-runtime/store/RelayModernSelector").getVariablesFromObject,
        getVariablesFromPluralFragment: b("relay-runtime/store/RelayModernSelector").getVariablesFromPluralFragment,
        getVariablesFromSingularFragment: b("relay-runtime/store/RelayModernSelector").getVariablesFromSingularFragment,
        reportMissingRequiredFields: b("relay-runtime/util/reportMissingRequiredFields"),
        graphql: b("relay-runtime/query/GraphQLTag").graphql,
        isFragment: b("relay-runtime/query/GraphQLTag").isFragment,
        isInlineDataFragment: b("relay-runtime/query/GraphQLTag").isInlineDataFragment,
        isRequest: b("relay-runtime/query/GraphQLTag").isRequest,
        readInlineData: b("relay-runtime/store/readInlineData"),
        MutationTypes: b("relay-runtime/mutations/RelayDeclarativeMutationConfig").MutationTypes,
        RangeOperations: b("relay-runtime/mutations/RelayDeclarativeMutationConfig").RangeOperations,
        DefaultHandlerProvider: b("relay-runtime/handlers/RelayDefaultHandlerProvider"),
        ConnectionHandler: b("relay-runtime/handlers/connection/ConnectionHandler"),
        MutationHandlers: b("relay-runtime/handlers/connection/MutationHandlers"),
        VIEWER_ID: b("relay-runtime/store/ViewerPattern").VIEWER_ID,
        VIEWER_TYPE: b("relay-runtime/store/ViewerPattern").VIEWER_TYPE,
        applyOptimisticMutation: b("relay-runtime/mutations/applyOptimisticMutation"),
        commitLocalUpdate: b("relay-runtime/mutations/commitLocalUpdate"),
        commitMutation: b("relay-runtime/mutations/commitMutation"),
        fetchQuery: b("relay-runtime/query/fetchQuery"),
        isRelayModernEnvironment: b("relay-runtime/store/isRelayModernEnvironment"),
        requestSubscription: b("relay-runtime/subscription/requestSubscription"),
        ConnectionInterface: b("relay-runtime/handlers/connection/ConnectionInterface"),
        PreloadableQueryRegistry: b("relay-runtime/query/PreloadableQueryRegistry"),
        RelayProfiler: b("relay-runtime/util/RelayProfiler"),
        createPayloadFor3DField: b("relay-runtime/util/createPayloadFor3DField"),
        RelayConcreteNode: b("relay-runtime/util/RelayConcreteNode"),
        RelayError: b("relay-runtime/util/RelayError"),
        RelayFeatureFlags: b("relay-runtime/util/RelayFeatureFlags"),
        DEFAULT_HANDLE_KEY: b("relay-runtime/util/RelayDefaultHandleKey").DEFAULT_HANDLE_KEY,
        FRAGMENTS_KEY: b("relay-runtime/store/RelayStoreUtils").FRAGMENTS_KEY,
        FRAGMENT_OWNER_KEY: b("relay-runtime/store/RelayStoreUtils").FRAGMENT_OWNER_KEY,
        ID_KEY: b("relay-runtime/store/RelayStoreUtils").ID_KEY,
        REF_KEY: b("relay-runtime/store/RelayStoreUtils").REF_KEY,
        REFS_KEY: b("relay-runtime/store/RelayStoreUtils").REFS_KEY,
        ROOT_ID: b("relay-runtime/store/RelayStoreUtils").ROOT_ID,
        ROOT_TYPE: b("relay-runtime/store/RelayStoreUtils").ROOT_TYPE,
        TYPENAME_KEY: b("relay-runtime/store/RelayStoreUtils").TYPENAME_KEY,
        deepFreeze: h || (h = b("relay-runtime/util/deepFreeze")),
        generateClientID: a,
        generateUniqueClientID: c,
        getRelayHandleKey: b("relay-runtime/util/getRelayHandleKey"),
        isClientID: d,
        isPromise: b("relay-runtime/util/isPromise"),
        isScalarAndEqual: b("relay-runtime/util/isScalarAndEqual"),
        recycleNodesInto: b("relay-runtime/util/recycleNodesInto"),
        stableCopy: i || (i = b("relay-runtime/util/stableCopy")),
        getFragmentIdentifier: b("relay-runtime/util/getFragmentIdentifier"),
        __internal: {
            OperationTracker: b("relay-runtime/store/RelayOperationTracker"),
            createRelayContext: b("relay-runtime/store/createRelayContext"),
            getOperationVariables: b("relay-runtime/store/RelayConcreteVariables").getOperationVariables,
            fetchQuery: b("relay-runtime/query/fetchQueryInternal").fetchQuery,
            fetchQueryDeduped: b("relay-runtime/query/fetchQueryInternal").fetchQueryDeduped,
            getPromiseForActiveRequest: b("relay-runtime/query/fetchQueryInternal").getPromiseForActiveRequest,
            getObservableForActiveRequest: b("relay-runtime/query/fetchQueryInternal").getObservableForActiveRequest
        }
    }
}
), null);
__d("CometNewsFeedConnectionHandler", ["FBLogger", "RelayFBConnectionHandler_UNSTABLE", "gkx", "relay-runtime", "unrecoverableViolation"], (function(a, b, c, d, e, f) {
    "use strict";
    f.update = a;
    f.getConnection = c;
    f.unstable_getAllConnectionsWithKey = d;
    f.buildConnectionEdge = e;
    var g = "comet_news_feed"
      , h = "__connection_next_edge_index"
      , i = "received_edges_count";
    function a(a, c) {
        var d, e = a.get(c.dataID);
        if (!e)
            return;
        var f = b("relay-runtime").ConnectionInterface.get();
        f = f.EDGES;
        if (c.args.before != null)
            throw b("unrecoverableViolation")("The newsfeed connection does not support backward pagination by design", "comet_feed");
        var g = e.getLinkedRecord(c.fieldKey);
        if (!g) {
            b("FBLogger")("comet_feed").mustfix("Newsfeed connection is null in the store, this means no feed stories will be shown");
            return
        }
        var l = b("relay-runtime").generateClientID(e.getDataID(), c.handleKey)
          , m = e.getLinkedRecord(c.handleKey);
        d = (d = m) != null ? d : a.get(l);
        if (!d) {
            var n = a.create(l, g.getType());
            n.setValue(0, h);
            n.copyFieldsFrom(g);
            l = g.getLinkedRecords(f);
            l && (l = l.map(function(c) {
                return b("relay-runtime").ConnectionHandler.buildConnectionEdge(a, n, c)
            }),
            n.setLinkedRecords(l, f),
            n.setValue(l.length, i));
            e.setLinkedRecord(n, c.handleKey);
            j(a, l, l, n, g);
            return
        }
        m == null && e.setLinkedRecord(d, c.handleKey);
        var o = d;
        l = g.getLinkedRecords(f);
        l && (l = l.map(function(c) {
            return b("relay-runtime").ConnectionHandler.buildConnectionEdge(a, o, c)
        }),
        o.setValue(l.length, i));
        m = o.getLinkedRecords(f);
        o.copyFieldsFrom(g);
        e = [];
        d = new Set();
        if (c.args.after != null || ((c = (c = l) == null ? void 0 : c.length) != null ? c : 0) === 0) {
            k((c = m) != null ? c : [], e, d)
        }
        k((m = l) != null ? m : [], e, d);
        o.setLinkedRecords(e, f);
        j(a, l, e, o, g)
    }
    function j(a, c, d, e, f) {
        var g = b("relay-runtime").ConnectionInterface.get()
          , h = g.END_CURSOR
          , i = g.HAS_NEXT_PAGE
          , j = g.HAS_PREV_PAGE
          , k = g.PAGE_INFO;
        g = g.PAGE_INFO_TYPE;
        f = f.getLinkedRecord(k);
        var l = e.getLinkedRecord(k);
        l == null && (l = a.create(b("relay-runtime").generateClientID(e.getDataID(), k), g),
        e.setLinkedRecord(l, k));
        a = f == null ? void 0 : f.getValue(h);
        l.setValue(!1, j);
        if (b("gkx")("1631636")) {
            l.setValue(((g = c == null ? void 0 : c.length) != null ? g : 0) > 0 || (f == null ? void 0 : f.getValue(i)) === !0, i)
        } else {
            l.setValue(((e = c == null ? void 0 : c.length) != null ? e : 0) > 0, i)
        }
        k = d != null ? d[d.length - 1] : null;
        j = null;
        k != null && (j = k.getValue("cursor"));
        if (j == null && a == null) {
            b("FBLogger")("comet_feed").info("Unable to set end_cursor as neither the server end cursor, or last edge cursor is defined, this can happen on initial load when there are no stories but shouldn't happen otherwise", "comet_feed");
            return
        }
        l.setValue((g = a) != null ? g : j, h)
    }
    function c(a, c, d) {
        c = b("relay-runtime").getRelayHandleKey(g, c, null);
        return a.getLinkedRecord(c, d)
    }
    function d(a, c, d) {
        return b("RelayFBConnectionHandler_UNSTABLE").unstable_getAllConnectionsWithKey(a, c, d, g)
    }
    function k(a, c, d) {
        var e = b("relay-runtime").ConnectionInterface.get();
        e = e.NODE;
        for (var f = 0; f < a.length; f++) {
            var g = a[f];
            if (!g)
                continue;
            var h = g.getLinkedRecord(e);
            h = h && h.getDataID();
            if (h == null) {
                b("FBLogger")("comet_feed").mustfix("Found edge without deduplication nodeID in comet_news_feed, this can lead to duplicate feed stories being rendered");
                c.push(g);
                continue
            }
            if (d.has(h))
                continue;
            d.add(h);
            c.push(g)
        }
    }
    function e(a, c, d, e) {
        if (d == null)
            return d;
        var f = b("relay-runtime").ConnectionInterface.get();
        f = f.EDGES;
        var g = c.getValue(h);
        if (!(typeof g === "number"))
            throw b("unrecoverableViolation")("CometNewsFeedConnectionHandler: Expected edgeIndex to be a number", "comet_feed");
        e = (e = e) != null ? e : b("relay-runtime").generateClientID(c.getDataID(), f, g);
        f = a.create(e, d.getType());
        f.copyFieldsFrom(d);
        c.setValue(g + 1, h);
        return f
    }
    a = b("relay-runtime").ConnectionHandler.insertEdgeBefore;
    f.insertEdgeBefore = a
}
), null);
__d("CometNotificationsThinClientConnectionHandler", ["relay-runtime", "unrecoverableViolation", "warning"], (function(a, b, c, d, e, f) {
    "use strict";
    f.update = a;
    f.getConnection = c;
    f.buildConnectionEdge = i;
    var g = "comet_notifications_thin_client"
      , h = "__connection_next_edge_index";
    function a(a, c) {
        var d, e = a.get(c.dataID);
        if (!e)
            return;
        var f = b("relay-runtime").ConnectionInterface.get()
          , g = f.EDGES
          , m = f.END_CURSOR
          , n = f.HAS_NEXT_PAGE
          , o = f.HAS_PREV_PAGE
          , p = f.PAGE_INFO
          , q = f.PAGE_INFO_TYPE;
        f = f.START_CURSOR;
        var r = e.getLinkedRecord(c.fieldKey)
          , s = r && r.getLinkedRecord(p);
        if (!r) {
            e.setValue(null, c.handleKey);
            return
        }
        var t = b("relay-runtime").generateClientID(e.getDataID(), c.handleKey)
          , u = e.getLinkedRecord(c.handleKey);
        d = (d = u) != null ? d : a.get(t);
        var v = d && d.getLinkedRecord(p);
        if (!d) {
            var w = a.create(t, r.getType());
            w.setValue(0, h);
            w.copyFieldsFrom(r);
            t = r.getLinkedRecords(g);
            if (t) {
                var x = b("relay-runtime").ConnectionInterface.get()
                  , y = x.NODE;
                t = t.reduce(function(b, c) {
                    if (!c)
                        return b;
                    var d = c.getLinkedRecord(y);
                    d = d == null ? void 0 : d.getType();
                    return d === "NotifPageCachedNotificationRow" ? b : b.concat(i(a, w, c))
                }, []);
                w.setLinkedRecords(t, g)
            }
            e.setLinkedRecord(w, c.handleKey);
            v = a.create(b("relay-runtime").generateClientID(w.getDataID(), p), q);
            v.setValue(!1, n);
            v.setValue(!1, o);
            v.setValue(null, m);
            v.setValue(null, f);
            s && v.copyFieldsFrom(s);
            w.setLinkedRecord(v, p)
        } else {
            u == null && e.setLinkedRecord(d, c.handleKey);
            var z = d;
            x = r.getLinkedRecords(g);
            x && (x = x.map(function(b) {
                return i(a, z, b)
            }));
            t = z.getLinkedRecords(g);
            q = z.getLinkedRecord(p);
            z.copyFieldsFrom(r);
            t && z.setLinkedRecords(t, g);
            q && z.setLinkedRecord(q, p);
            u = [];
            e = c.args;
            if (t && x)
                if (e.after != null)
                    if (v && e.after === v.getValue(m)) {
                        d = new Set();
                        j(t, u, d);
                        j(x, u, d)
                    } else {
                        b("warning")(!1, "Relay: Unexpected after cursor `%s`, edges must be fetched from the end of the list (`%s`).", e.after, v && v.getValue(m));
                        return
                    }
                else if (e.before != null)
                    if (v && e.before === v.getValue(f)) {
                        r = new Set();
                        j(x, u, r);
                        j(t, u, r)
                    } else {
                        b("warning")(!1, "Relay: Unexpected before cursor `%s`, edges must be fetched from the beginning of the list (`%s`).", e.before, v && v.getValue(f));
                        return
                    }
                else {
                    q = k(t);
                    p = new Set();
                    l(x, u, q, p)
                }
            else
                x ? u = x : u = t;
            u != null && u !== t && z.setLinkedRecords(u, g);
            if (v && s)
                if (e.after == null && e.before == null)
                    v.copyFieldsFrom(s);
                else if (e.before != null || e.after == null && e.last) {
                    v.setValue(!!s.getValue(o), o);
                    c = s.getValue(f);
                    typeof c === "string" && v.setValue(c, f)
                } else if (e.after != null || e.before == null && e.first) {
                    v.setValue(!!s.getValue(n), n);
                    d = s.getValue(m);
                    typeof d === "string" && v.setValue(d, m)
                }
        }
    }
    function c(a, c, d) {
        c = b("relay-runtime").getRelayHandleKey(g, c, null);
        return a.getLinkedRecord(c, d)
    }
    function i(a, c, d) {
        if (d == null)
            return d;
        var e = b("relay-runtime").ConnectionInterface.get();
        e = e.EDGES;
        var f = c.getValue(h);
        if (!(typeof f === "number"))
            throw b("unrecoverableViolation")("CometNotificationsThinClientConnectionHandler: Expected edgeIndex to be a number", "Notifications");
        e = b("relay-runtime").generateClientID(c.getDataID(), e, f);
        a = a.create(e, d.getType());
        a.copyFieldsFrom(d);
        c.setValue(f + 1, h);
        return a
    }
    function j(a, c, d) {
        var e = b("relay-runtime").ConnectionInterface.get();
        e = e.NODE;
        for (var f = 0; f < a.length; f++) {
            var g = a[f];
            if (!g)
                continue;
            var h = g.getLinkedRecord(e);
            h = h && h.getDataID();
            if (h != null) {
                if (d.has(h))
                    continue;
                d.add(h)
            }
            c.push(g)
        }
    }
    function k(a) {
        var c = {}
          , d = b("relay-runtime").ConnectionInterface.get();
        d = d.NODE;
        for (var e = 0; e < a.length; e++) {
            var f = a[e];
            if (!f)
                continue;
            f = f.getLinkedRecord(d);
            var g = f && f.getType();
            if (g === "NotifPageNotificationRow") {
                g = f == null ? void 0 : (g = f.getLinkedRecord("notif")) == null ? void 0 : g.getValue("id");
                typeof g === "string" && (c[g] = f)
            }
        }
        return c
    }
    function l(a, c, d, e) {
        var f = b("relay-runtime").ConnectionInterface.get();
        f = f.NODE;
        for (var g = 0; g < a.length; g++) {
            var h, i = a[g];
            if (!i)
                continue;
            var j = i.getLinkedRecord(f)
              , k = j && j.getDataID();
            if (k != null) {
                if (e.has(k))
                    continue;
                e.add(k)
            }
            k = j == null ? void 0 : j.getType();
            h = j == null ? void 0 : (h = j.getLinkedRecord("notif")) == null ? void 0 : h.getValue("id");
            if (j && k === "NotifPageCachedNotificationRow") {
                if (typeof h === "string") {
                    k = d[h];
                    k && (k.copyFieldsFrom(j),
                    i.setLinkedRecord(k, f),
                    c.push(i))
                }
            } else
                c.push(i)
        }
    }
}
), null);
__d("SilenceableErrorMessageUtils", ["killswitch"], (function(a, b, c, d, e, f) {
    "use strict";
    f.shouldHideErrorMessage = a;
    f.getMetadataFromError = c;
    function a(a) {
        return b("killswitch")("COMET_HIDE_SILENT_ERROR_MESSAGE") ? !1 : a.is_silent === !0
    }
    function c(a) {
        if (typeof a === "object" && a instanceof Error) {
            var b = a.description
              , c = a.source;
            return {
                is_silent: c == null ? void 0 : c.is_silent,
                message: b
            }
        }
        return {
            is_silent: (c = a.source) == null ? void 0 : c.is_silent,
            message: a.description
        }
    }
}
), null);
__d("errorCode", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        throw new Error('errorCode("' + a + '"): This should not happen. Oh noes!')
    }
}
), null);
__d("CometRelayErrorHandling", ["errorCode", "SilenceableErrorMessageUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.markErrorAsHandled = a;
    f.shouldSkipErrorSideEffects = c;
    var h;
    try {
        h = new WeakMap()
    } catch (a) {
        h = null
    }
    function a(a) {
        var b;
        (b = h) == null ? void 0 : b.set(a, !0)
    }
    function c(a) {
        var c, d = a == null ? void 0 : a.source;
        c = (c = d == null ? void 0 : d.errorCode) != null ? c : d == null ? void 0 : d.code;
        return c === 1357001 ? !1 : ((d = h) == null ? void 0 : d.get(a)) === !0 || b("SilenceableErrorMessageUtils").shouldHideErrorMessage(b("SilenceableErrorMessageUtils").getMetadataFromError(a))
    }
}
), null);
__d("CometRelayPerfStore", ["ExecutionEnvironment", "performanceNow", "setTimeout"], (function(a, b, c, d, e, f) {
    "use strict";
    f.log = a;
    var g, h = 5 * 6e4, i = {}, j = {}, k = {};
    function a(a) {
        if (!b("ExecutionEnvironment").canUseDOM)
            return;
        if (a.name === "execute.start") {
            var c = {
                flushes: [],
                name: a.params.name,
                start: (g || (g = b("performanceNow")))()
            };
            j[a.transactionID] = c;
            i[a.params.name] = c;
            b("setTimeout")(function() {
                delete j[a.transactionID],
                c && delete i[c.name]
            }, h)
        } else if (a.name === "execute.next") {
            var d = j[a.transactionID];
            if (d) {
                var e = a.response
                  , f = function(a) {
                    d.flushes.push({
                        label: (a = a.label) != null ? a : "root",
                        time: (g || (g = b("performanceNow")))()
                    })
                };
                e instanceof Array ? e.forEach(f) : f(e)
            }
        } else if (a.name === "execute.complete") {
            f = j[a.transactionID];
            f && (f.end = (g || (g = b("performanceNow")))())
        } else if (a.name === "queryresource.fetch") {
            if (a.operation.root.node.name != null) {
                e = a.operation.root.node.name;
                f = i[e];
                f != null && (k[a.resourceID] = f,
                b("setTimeout")(function() {
                    delete k[a.resourceID]
                }, h))
            }
        } else if (a.name === "queryresource.retain") {
            e = k[a.resourceID];
            if (e != null) {
                f = a.profilerContext;
                f.retainQuery && f.retainQuery(e)
            }
        } else if (a.name === "execute.info") {
            f = a.info;
            if (f instanceof Object && Object.prototype.hasOwnProperty.call(f, "prefetched")) {
                e = j[a.transactionID];
                e && (e.start = 0)
            }
        } else if (a.name === "entrypoint.root.consume") {
            f = a.profilerContext;
            typeof f.consumeBootload === "function" && f.consumeBootload(a.rootModuleID)
        }
    }
}
), null);
__d("CometRootInitServerFlag", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.enableServerEnvironment = a;
    f.isServerEnvironment = b;
    var g = !1;
    function a() {
        g = !0
    }
    function b() {
        return g
    }
}
), null);
__d("CometRouteCache", ["normalizeCometRouterUrl"], (function(a, b, c, d, e, f) {
    "use strict";
    f.install = a;
    f.getRoute = c;
    f.invalidatePath = d;
    var g = {};
    function a(a, c) {
        a = b("normalizeCometRouterUrl")(a);
        g[a] = c
    }
    function c(a) {
        a = b("normalizeCometRouterUrl")(a);
        return g[a]
    }
    function d(a) {
        Object.keys(g).forEach(function(b) {
            b.startsWith(a) && delete g[b]
        })
    }
    e = null;
    f.dump = e
}
), null);
__d("buildCometRouteFromDefinition", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b, c, d) {
        return babelHelpers["extends"]({}, a, {
            params: c,
            routePath: d,
            url: b
        })
    }
}
), null);
__d("buildRouteParams", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b, c) {
        return Object.keys(a).reduce(function(d, e) {
            var f = a[e];
            if (f != null && (c == null || f[c] === !0)) {
                var h, i = (h = g(b[e], f.coercibleType)) != null ? h : f["default"];
                d[e] = i;
                f.legacyNames.forEach(function(a) {
                    d[a] = i
                })
            }
            return d
        }, {})
    }
    function g(a, b) {
        if (a == null)
            return null;
        switch (b) {
        case "BOOL":
            if (typeof a === "boolean")
                return a;
            b = String(a).toLowerCase();
            return b === "0" || b === "false" ? !1 : Boolean(a)
        }
        return a
    }
}
), null);
__d("normalizeCometRouterConstUri", ["ConstUriUtils", "isCometRouterUrl", "memoizeStringOnly"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("memoizeStringOnly")(function(a) {
        if (!b("isCometRouterUrl")(a))
            return a;
        var c = b("ConstUriUtils").getUri(a);
        c != null && (c = c.getUnqualifiedUri());
        c != null && (c = c.stripTrailingSlash());
        c != null && !c.getPath().startsWith("/") && (c = c.setPath("/" + c.getPath()));
        return c != null ? c.toString() : a
    });
    e.exports = a
}
), null);
__d("stableStringify", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = h;
    function g(a) {
        return a !== null && Object.prototype.toString.call(a) === "[object Object]"
    }
    function h(a) {
        var b = Array.isArray(a)
          , c = g(a);
        if (b || c) {
            c = Object.keys(a);
            if (c.length) {
                c = c.sort().map(function(b) {
                    var c = a[b], d;
                    g(c) || Array.isArray(c) ? d = h(c) : d = JSON.stringify(c);
                    return b + ":" + d
                });
                if (b)
                    return "[" + c.join(",") + "]";
                else
                    return "{" + c.join(",") + "}"
            }
        }
        return JSON.stringify(a)
    }
}
), null);
__d("CometRouteMapper", ["ConstUriUtils", "buildCometRouteFromDefinition", "buildRouteParams", "normalizeCometRouterConstUri", "recoverableViolation", "stableStringify"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getRoute = k;
    f.installRoute = a;
    f.installRedirect = c;
    f.invalidatePath = d;
    var g = {};
    e = function(a) {
        return b("normalizeCometRouterConstUri")(a.getPath())
    }
    ;
    f.getURIPath = e;
    function h(a, c) {
        return b("stableStringify")(b("buildRouteParams")(a, c, "significant"))
    }
    function i(a) {
        var c = a.instanceParams
          , d = a.routeParams;
        a = a.routePath;
        c = b("buildRouteParams")(d, c, "path");
        return {
            pathParams: c,
            results: {},
            routeParams: d,
            routePath: a
        }
    }
    function j(a, c, d) {
        var e = h(c.routeParams, babelHelpers["extends"]({}, c.pathParams, d));
        e = c.results[e];
        if (e == null)
            return null;
        if (e.type === "routeMatch")
            return j(a, e.routeMatch, d);
        if (e.type === "routeRedirect") {
            var f = b("ConstUriUtils").getUri(e.routeRedirect.url);
            e.routeRedirect.useCurrentParams === !0 && f != null && (f = f.addQueryParams(new Map(Object.entries(d))));
            f != null && (f = f.removeQueryParams(e.routeRedirect.strip));
            f = f != null ? f.toString() : "";
            return k(f)
        }
        if (e.type === "routeDefinition") {
            f = babelHelpers["extends"]({}, c.pathParams, d);
            return b("buildCometRouteFromDefinition")(e.routeDefinition, a, b("buildRouteParams")(c.routeParams, f, null), c.routePath)
        }
        b("recoverableViolation")("CometRouteMapper encountered an invalid result type " + e.type, "comet_infra");
        return null
    }
    function k(a) {
        var c = ""
          , d = ""
          , e = {};
        c = b("normalizeCometRouterConstUri")(a);
        a = b("ConstUriUtils").getUri(c);
        a != null && (e = Object.fromEntries(a.getQueryParams()),
        d = a.getPath());
        a = g[d];
        return a == null ? null : j(c, a, e)
    }
    function l(a, c, d) {
        var e = ""
          , f = {};
        a = b("normalizeCometRouterConstUri")(a);
        a = b("ConstUriUtils").getUri(a);
        a != null && (f = Object.fromEntries(a.getQueryParams()),
        e = a.getPath());
        a = g[e];
        a == null && (a = g[e] = i(d[0]));
        var j = a;
        d.slice(1).forEach(function(a) {
            var b = j;
            b = b.results;
            var c = h(j.routeParams, babelHelpers["extends"]({}, j.pathParams, f));
            a = i(a);
            b[c] = {
                routeMatch: a,
                type: "routeMatch"
            };
            j = a
        });
        e = h(j.routeParams, babelHelpers["extends"]({}, j.pathParams, f));
        j.results[e] = c
    }
    function a(a, b, c) {
        b = {
            routeDefinition: b,
            type: "routeDefinition"
        };
        l(a, b, c)
    }
    function c(a, b, c) {
        b = {
            routeRedirect: b,
            type: "routeRedirect"
        };
        l(a, b, c)
    }
    function d(a) {
        Object.keys(g).forEach(function(b) {
            b.startsWith(a) && delete g[b]
        })
    }
    a = null;
    f.dump = a
}
), null);
__d("buildCometErrorRoute", ["JSResource"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("JSResource")("CometErrorRoot.react").__setRef("buildCometErrorRoute");
    function a(a) {
        return {
            hostableView: {
                allResources: [g],
                props: {},
                resource: g
            },
            params: {},
            rootView: {
                allResources: [g],
                props: {},
                resource: g
            },
            routePath: null,
            tracePolicy: "comet.error",
            url: a
        }
    }
}
), null);
__d("CometAsyncFetchError", [], (function(a, b, c, d, e, f) {
    "use strict";
    function g(a) {
        if (a == null)
            return "";
        if (typeof a === "string")
            return a;
        try {
            return String.fromCharCode.apply(null, new Uint16Array(a))
        } catch (a) {
            return "<error parsing ArrayBuffer>"
        }
    }
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b(b, c, d, e, f) {
            var g;
            g = a.call(this, b) || this;
            g.errorMsg = b;
            g.errorCode = c;
            g.errorRawResponseHeaders = d;
            g.errorRawTransport = e;
            g.errorType = f;
            return g
        }
        var c = b.prototype;
        c.toString = function() {
            var a;
            a = ((a = this.errorCode) != null ? a : "") + "." + g(this.errorMsg) + "." + ((a = this.errorRawResponseHeaders) != null ? a : "") + "." + ((a = this.errorRawTransport) != null ? a : "") + "." + ((a = this.errorType) != null ? a : "") + "." + ((a = this.errorRawTransportStatus) != null ? a : "");
            return "CometAyncFetchError: " + a
        }
        ;
        return b
    }(babelHelpers.wrapNativeSuper(Error));
    e.exports = a
}
), null);
__d("RelayAPIConfig", ["RelayAPIConfigDefaults", "URI"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = babelHelpers["extends"]({}, b("RelayAPIConfigDefaults"), {
        graphURI: new (g || (g = b("URI")))(b("RelayAPIConfigDefaults").graphURI),
        graphBatchURI: new g(b("RelayAPIConfigDefaults").graphBatchURI),
        subscriptionTopicURI: b("RelayAPIConfigDefaults").subscriptionTopicURI == null ? null : new (g || (g = b("URI")))(b("RelayAPIConfigDefaults").subscriptionTopicURI),
        DO_NOT_USE_setActorID: function(a) {
            h.actorID = a
        },
        setCSRFToken: function(a) {
            h.graphBatchURI.setQueryData({
                fb_dtsg: a
            }),
            h.graphURI.setQueryData({
                fb_dtsg: a
            })
        },
        setAPIVersion: function(a) {
            h.graphBatchURI.setPath("/" + a + "/graphqlbatch"),
            h.graphURI.setPath("/" + a + "/graphql")
        },
        setSandbox: function(a) {
            a = a === "prod" ? "graph" : "graph." + a;
            h.graphBatchURI.setSubdomain(a);
            h.graphURI.setSubdomain(a)
        },
        setWithCredentials: function(a) {
            h.withCredentials = a
        }
    });
    e.exports = h
}
), null);
__d("RelayAsyncStreamPool", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 0
      , i = 1
      , j = 2;
    a = function() {
        function a() {
            this.$1 = 0,
            this.$2 = new Map()
        }
        var b = a.prototype;
        b.forceComplete = function(a) {
            a = this.$3(a);
            if (a.status !== h)
                return;
            var b = a.observers;
            a.status = j;
            a.events.push({
                kind: "complete",
                sequenceNumber: a.events.length
            });
            a.observers = new Map();
            b.forEach(function(a) {
                return a.complete()
            })
        }
        ;
        b.forceError = function(a, b) {
            a = this.$3(a);
            if (a.status !== h)
                return;
            var c = a.observers;
            a.status = j;
            a.events.push({
                kind: "error",
                error: b,
                sequenceNumber: a.events.length
            });
            a.observers = new Map();
            c.forEach(function(a) {
                return a.error(b)
            })
        }
        ;
        b.complete = function(a, b) {
            Number.isInteger(b) && b >= 0 || g(0, 14878, b);
            var c = this.$3(a);
            if (c.status !== h)
                return;
            var d = c.events.length;
            if (b === d) {
                var e = c.observers;
                c.status = j;
                c.events.push({
                    kind: "complete",
                    sequenceNumber: b
                });
                c.observers = new Map();
                e.forEach(function(a) {
                    return a.complete()
                })
            } else
                b > d && !Object.prototype.hasOwnProperty.call(c.pendingEvents, b) || g(0, 14879, b, a),
                c.status = i,
                c.pendingEvents[b] = {
                    kind: "complete",
                    sequenceNumber: b
                }
        }
        ;
        b.error = function(a, b, c) {
            Number.isInteger(c) && c >= 0 || g(0, 14878, c);
            var d = this.$3(a);
            if (d.status !== h)
                return;
            var e = d.events.length;
            if (c === e) {
                var f = d.observers;
                d.status = j;
                d.events.push({
                    kind: "error",
                    error: b,
                    sequenceNumber: c
                });
                d.observers = new Map();
                f.forEach(function(a) {
                    return a.error(b)
                })
            } else
                c > e && !Object.prototype.hasOwnProperty.call(d.pendingEvents, c) || g(0, 14879, c, a),
                d.status = i,
                d.pendingEvents[c] = {
                    kind: "error",
                    error: b,
                    sequenceNumber: c
                }
        }
        ;
        b.next = function(a, b, c) {
            Number.isInteger(c) && c >= 0 || g(0, 14878, c);
            var d = this.$3(a);
            if (d.status === j)
                return;
            var e = d.events.length;
            if (c === e) {
                var f = d.observers;
                d.events.push({
                    kind: "next",
                    data: b,
                    sequenceNumber: c
                });
                f.forEach(function(a) {
                    return a.next(b)
                });
                var h = d.pendingEvents
                  , i = function(b) {
                    var c = h[b];
                    if (c == null)
                        return "break";
                    d.events.push(c);
                    switch (c.kind) {
                    case "complete":
                        d.status = j;
                        d.observers = new Map();
                        f.forEach(function(a) {
                            return a.complete()
                        });
                        return {
                            v: void 0
                        };
                    case "error":
                        d.status = j;
                        d.observers = new Map();
                        f.forEach(function(a) {
                            return a.error(c.error)
                        });
                        return {
                            v: void 0
                        };
                    case "next":
                        f.forEach(function(a) {
                            return a.next(c.data)
                        });
                        break;
                    default:
                        c.kind,
                        g(0, 14593, c.kind, a)
                    }
                };
                _loop: for (var k = e + 1; k < h.length; k++) {
                    var l = i(k);
                    switch (l) {
                    case "break":
                        break _loop;
                    default:
                        if (typeof l === "object")
                            return l.v
                    }
                }
            } else
                c > e && !Object.prototype.hasOwnProperty.call(d.pendingEvents, c) || g(0, 14879, c, a),
                d.pendingEvents[c] = {
                    kind: "next",
                    data: b,
                    sequenceNumber: c
                }
        }
        ;
        b.clear = function(a) {
            this.$2["delete"](a)
        }
        ;
        b.has = function(a) {
            return this.$2.has(a)
        }
        ;
        b.subscribe = function(a, b) {
            var c = this.$3(a)
              , d = this.$1++
              , e = c.events;
            e.length !== 0 && e.forEach(function(c) {
                switch (c.kind) {
                case "complete":
                    b.complete();
                    break;
                case "error":
                    b.error(c.error);
                    break;
                case "next":
                    b.next(c.data);
                    break;
                default:
                    c.kind,
                    g(0, 14593, c.kind, a)
                }
            });
            var f = c.observers;
            f.set(d, b);
            e = {
                unsubscribe: function() {
                    f["delete"](d)
                }
            };
            b.start(e);
            return e
        }
        ;
        b.$3 = function(a) {
            var b = this.$2.get(a);
            b == null && (b = {
                status: h,
                events: [],
                observers: new Map(),
                pendingEvents: []
            },
            this.$2.set(a, b));
            return b
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("clearImmediatePolyfill", ["ImmediateImplementation"], (function(a, b, c, d, e, f) {
    c = a.clearImmediate || b("ImmediateImplementation").clearImmediate;
    e.exports = c
}
), null);
__d("clearImmediate", ["clearImmediatePolyfill"], (function(a, b, c, d, e, f) {
    e.exports = a;
    function a(a) {
        b("clearImmediatePolyfill")(a)
    }
}
), null);
__d("stableStringifyPrefetchedRelayVariablesWithActor", ["stableStringify"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c) {
        a = ["$actorID:" + a];
        var d = Object.keys(c).sort();
        for (var e = 0; e < d.length; e++) {
            var f = d[e]
              , g = c[f];
            g != null && a.push(f + ": " + b("stableStringify")(g))
        }
        return "{" + a.join(",") + "}"
    }
}
), null);
__d("RelayPrefetchedStreamCache", ["ExecutionEnvironment", "FBLogger", "RelayAsyncStreamPool", "clearImmediate", "setImmediateAcrossTransitions", "stableStringifyPrefetchedRelayVariablesWithActor"], (function(a, b, c, d, e, f) {
    "use strict";
    f.clear = a;
    f.subscribe = c;
    f.next = d;
    f.error = e;
    f.registerPreloader = r;
    var g = new (b("RelayAsyncStreamPool"))()
      , h = {}
      , i = {}
      , j = {};
    function k(a, b) {
        return Object.prototype.hasOwnProperty.call(j, a) ? j[a][b] : null
    }
    function l(a, b, c) {
        Object.prototype.hasOwnProperty.call(j, a) ? j[a][b] = c : (j[a] = {},
        j[a][b] = c)
    }
    function m(a, b) {
        if (Object.prototype.hasOwnProperty.call(h, a)) {
            var c = h[a][b];
            c != null && g.clear(c);
            delete h[a][b];
            Object.keys(h[a]).length === 0 && delete h[a]
        }
        Object.prototype.hasOwnProperty.call(i, a) && (delete i[a][b],
        Object.keys(i[a]).length === 0 && delete i[a]);
        Object.prototype.hasOwnProperty.call(j, a) && (delete j[a][b],
        Object.keys(j[a]).length === 0 && delete j[a])
    }
    function n(a, c) {
        var d = k(a, c);
        d && (b("clearImmediate")(d),
        m(a, c))
    }
    function o(a, c) {
        k(a, c) || l(a, c, b("setImmediateAcrossTransitions")(function() {
            m(a, c)
        }))
    }
    function p(a, b) {
        return Object.prototype.hasOwnProperty.call(h, a) ? h[a][b] : null
    }
    function q(a, b, c) {
        Object.prototype.hasOwnProperty.call(h, a) || (h[a] = {}),
        Object.prototype.hasOwnProperty.call(i, a) || (i[a] = {}),
        i[a][b] = !1,
        h[a][b] = c
    }
    function a(a, c, d) {
        a = b("stableStringifyPrefetchedRelayVariablesWithActor")(a, d);
        o(c, a)
    }
    function c(a, c, d, e, f) {
        a = b("stableStringifyPrefetchedRelayVariablesWithActor")(a, d);
        d = p(c, a);
        if (d != null) {
            i[c][a] = !0;
            return g.subscribe(d, e)
        }
        if (h[c] && Object.values(i[c]).filter(function(a) {
            return !a
        }).length > 0) {
            var j;
            d = Object.keys(h[c]);
            b("FBLogger")("RelayQueryPreloader").addMetadata("RELAY_PRELOADER", "QUERY_ID", c).addMetadata("RELAY_PRELOADER", "QUERY_NAME", (j = f) != null ? j : "unknown").addToCategoryKey((j = f) != null ? j : c).warn("RelayPrefetchedStreamCache.subscribe(): Could not find preloader for query with actor ID and variables: `%s`\n\nbut had data for that query with actorID/variables:\n `%s`\n", a, d.join("||"))
        }
        if (!b("ExecutionEnvironment").canUseDOM) {
            b("FBLogger")("RelayQueryPreloader").addMetadata("RELAY_PRELOADER", "QUERY_ID", c).addMetadata("RELAY_PRELOADER", "QUERY_NAME", (j = f) != null ? j : "unknown").addToCategoryKey((d = f) != null ? d : c).mustfix("RelayPrefetchedStreamCache:.get: Missing relay query preloader for query: %s with actorID and variables %s. Make sure your relay preloaders are configured. https://fburl.com/comet_preloading", f != null ? f : c, a)
        }
        j = !1;
        d = {
            unsubscribe: function() {
                j = !0
            }
        };
        e.start(d);
        j || e.complete();
        return d
    }
    function d(a, c) {
        var d = null
          , e = 0
          , f = null;
        if (c != null) {
            var h;
            d = c.result;
            e = (h = c.sequence_number) != null ? h : 0;
            f = c.complete;
            typeof f !== "boolean" && b("FBLogger")("RelayQueryPreloader").mustfix("RelayPrefetchedStreamCache:.next: Expected GraphQL preloader `complete` field to be a boolean, got `%s` for preloader `%s`.", String(f), a)
        }
        d != null && g.next(a, d, e);
        h = d == null || f !== !1;
        h && g.complete(a, e + 1)
    }
    function e(a, b, c) {
        c === void 0 && (c = 0),
        c === 0 ? g.forceError(a, b) : g.error(a, b, c)
    }
    function r(a, c, d, e) {
        var f = b("stableStringifyPrefetchedRelayVariablesWithActor")(e, d);
        n(c, f);
        var h = p(c, f);
        h != null && (b("FBLogger")("RelayQueryPreloader").addMetadata("RELAY_PRELOADER", "QUERY_ID", c).warn("RelayPrefetchedStreamCache::registerPreloader(): You must not register more than one preloader for the query with ID `%s` and actorID/variables `%s`. This could result in stale data.", c, b("stableStringifyPrefetchedRelayVariablesWithActor")(e, d)),
        g.forceComplete(h),
        m(c, f));
        q(c, f, a)
    }
}
), null);
__d("Log", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.setLevel = a;
    var g = -1;
    b = {
        DEBUG: 3,
        INFO: 2,
        WARNING: 1,
        ERROR: 0
    };
    f.Level = b;
    c = function(a, b, c) {
        for (var d = arguments.length, e = new Array(d > 3 ? d - 3 : 0), f = 3; f < d; f++)
            e[f - 3] = arguments[f];
        var h = 0
          , i = c.replace(/%s/g, function() {
            return String(e[h++])
        })
          , j = window.console;
        j && g >= b && j[a in j ? a : "log"](i)
    }
    ;
    f.log = c;
    function a(a) {
        g = a
    }
    d = c.bind(null, "debug", b.DEBUG);
    f.debug = d;
    e = c.bind(null, "info", b.INFO);
    f.info = e;
    a = c.bind(null, "warn", b.WARNING);
    f.warn = a;
    d = c.bind(null, "error", b.ERROR);
    f.error = d
}
), null);
__d("XHRHttpError", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.getErrorCode = a;
    var g = "HTTP_CLIENT_ERROR";
    f.HTTP_CLIENT_ERROR = g;
    var h = "HTTP_PROXY_ERROR";
    f.HTTP_PROXY_ERROR = h;
    var i = "HTTP_SERVER_ERROR";
    f.HTTP_SERVER_ERROR = i;
    var j = "HTTP_TRANSPORT_ERROR";
    f.HTTP_TRANSPORT_ERROR = j;
    var k = "HTTP_UNKNOWN_ERROR";
    f.HTTP_UNKNOWN_ERROR = k;
    function a(a, b) {
        if (b === 0) {
            a = a.getProtocol();
            return a === "file" || a === "ftp" ? null : j
        } else if (b >= 100 && b < 200)
            return h;
        else if (b >= 200 && b < 300)
            return null;
        else if (b >= 400 && b < 500)
            return g;
        else if (b >= 500 && b < 600)
            return i;
        else if (b >= 12001 && b < 12156)
            return j;
        else
            return k
    }
}
), null);
__d("getAsyncHeaders", ["ZeroCategoryHeader", "isFacebookURI"], (function(a, b, c, d, e, f) {
    e.exports = a;
    function a(a) {
        var c = {};
        b("isFacebookURI")(a) && b("ZeroCategoryHeader").value && (c[b("ZeroCategoryHeader").header] = b("ZeroCategoryHeader").value);
        return c
    }
}
), null);
__d("xhrSimpleDataSerializer", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        var b = [];
        for (var c in a)
            b.push(encodeURIComponent(c) + "=" + encodeURIComponent(a[c]));
        return b.join("&")
    }
}
), null);
__d("XHRRequest", ["invariant", "DTSG", "DTSG_ASYNC", "DTSGUtils", "Env", "ErrorGuard", "ErrorXFBDebug", "FBLogger", "Log", "LSD", "NetworkStatus", "ResourceTimingsStore", "ResourceTypes", "SprinkleConfig", "TimeSlice", "URI", "XHRHttpError", "ZeroRewrites", "getAsyncHeaders", "xhrSimpleDataSerializer"], (function(a, b, c, d, e, f, g) {
    var h, i, j, k = !1, l = {
        loadedBytes: 0,
        totalBytes: 0
    };
    function m(a) {
        return b("ZeroRewrites").rewriteURI(new (h || (h = b("URI")))(a))
    }
    a = function() {
        "use strict";
        function a(a) {
            this.$3 = function() {
                return null
            }
            ,
            this.$19 = m(a),
            this.$7 = "POST",
            this.$6 = {},
            this.setResponseType(null),
            this.setTransportBuilder(b("ZeroRewrites").getTransportBuilderForURI(this.getURI())),
            this.setDataSerializer(b("xhrSimpleDataSerializer")),
            this.$11 = b("ResourceTimingsStore").getUID(b("ResourceTypes").XHR, a != null ? a.toString() : "")
        }
        var c = a.prototype;
        c.setURI = function(a) {
            this.$19 = m(a);
            return this
        }
        ;
        c.getURI = function() {
            return this.$19
        }
        ;
        c.setResponseType = function(a) {
            this.$13 = a;
            return this
        }
        ;
        c.setMethod = function(a) {
            this.$7 = a;
            return this
        }
        ;
        c.getMethod = function() {
            return this.$7
        }
        ;
        c.setData = function(a) {
            this.$2 = a;
            return this
        }
        ;
        c.getData = function() {
            return this.$2
        }
        ;
        c.setRawData = function(a) {
            this.$10 = a;
            return this
        }
        ;
        c.setRequestHeader = function(a, b) {
            this.$6[a] = b;
            return this
        }
        ;
        c.setTimeout = function(a) {
            this.$14 = a;
            return this
        }
        ;
        c.getTimeout = function() {
            return this.$14
        }
        ;
        c.setResponseHandler = function(a) {
            this.$12 = a;
            return this
        }
        ;
        c.getResponseHandler = function() {
            return this.$12
        }
        ;
        c.setErrorHandler = function(a) {
            this.$5 = a;
            return this
        }
        ;
        c.getErrorHandler = function() {
            return this.$5
        }
        ;
        c.setNetworkFailureHandler = function(a) {
            this.$8 = a;
            return this
        }
        ;
        c.getNetworkFailureHandler = function() {
            return this.$8
        }
        ;
        c.getResponseHeader = function(a) {
            var b = this.$9;
            return b ? b.getResponseHeader(a) : null
        }
        ;
        c.setAbortHandler = function(a) {
            this.$1 = a;
            return this
        }
        ;
        c.getAbortHandler = function() {
            return this.$1
        }
        ;
        c.setTimeoutHandler = function(a) {
            this.$15 = a;
            return this
        }
        ;
        c.getTimeoutHandler = function() {
            return this.$15
        }
        ;
        c.setUploadProgressHandler = function(a) {
            this.$18 = a;
            return this
        }
        ;
        c.setDownloadProgressHandler = function(a) {
            this.$4 = a;
            return this
        }
        ;
        c.setTransportBuilder = function(a) {
            !this.$17 || !b("ZeroRewrites").isRewritten(this.$19) ? this.$17 = a : b("FBLogger")("iorg-FOS").blameToPreviousFile().mustfix("can not set new TransportBuilder for the request %s", String(this.getURI()));
            return this
        }
        ;
        c.setDataSerializer = function(a) {
            this.$3 = a;
            return this
        }
        ;
        c.send = function() {
            var a = this.$14
              , c = this.$17;
            if (!c)
                return;
            var d = c();
            c = this.getURI();
            if (c.toString().includes("/../") || c.toString().includes("/..\\") || c.toString().includes("\\../") || c.toString().includes("\\..\\")) {
                b("Log").error("XHRRequest.send(): path traversal is not allowed.");
                return !1
            }
            if (k === !0)
                return;
            var e = new (h || (h = b("URI")))(c).getQualifiedURI().toString()
              , f = this.$11;
            b("ResourceTimingsStore").updateURI(b("ResourceTypes").XHR, f, e);
            b("ResourceTimingsStore").measureRequestSent(b("ResourceTypes").XHR, f);
            this.$9 = d;
            this.$7 === "POST" || !this.$10 || g(0, 2346, this.$10, c);
            e = (i || (i = b("Env"))).force_param;
            e && (this.$2 = babelHelpers["extends"]({}, this.getData() || {}, e));
            if (this.$7 === "GET" && b("DTSGUtils").shouldAppendToken(c)) {
                e = b("DTSG_ASYNC").getCachedToken ? b("DTSG_ASYNC").getCachedToken() : b("DTSG_ASYNC").getToken();
                e && (this.$2 ? this.$2.fb_dtsg_ag = e : this.$2 = {
                    fb_dtsg_ag: e
                },
                b("SprinkleConfig").param_name && (this.$2[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(e)))
            }
            if (this.$7 === "POST" && b("DTSGUtils").shouldAppendToken(c)) {
                e = b("DTSG").getCachedToken ? b("DTSG").getCachedToken() : b("DTSG").getToken();
                e && (this.$2 ? this.$2.fb_dtsg = e : this.$2 = {
                    fb_dtsg: e
                },
                b("SprinkleConfig").param_name && (this.$2[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(e)));
                b("LSD").token && (this.$2 ? this.$2.lsd = b("LSD").token : this.$2 = {
                    lsd: b("LSD").token
                },
                b("SprinkleConfig").param_name && !e && (this.$2[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(b("LSD").token)))
            }
            this.$7 === "GET" || this.$10 ? (c.addQueryData(this.$2),
            e = this.$10) : e = this.$3(this.$2);
            function j(a) {
                b("ResourceTimingsStore").measureResponseReceived(b("ResourceTypes").XHR, f);
                for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1; e < c; e++)
                    d[e - 1] = arguments[e];
                a.apply(this, d)
            }
            j = b("TimeSlice").guard(j, "XHRRequest response received", {
                propagationType: b("TimeSlice").PropagationType.CONTINUATION
            });
            d.onreadystatechange = this.$21(j);
            d.onerror = this.$22(j);
            d.upload && this.$18 && (d.upload.onprogress = this.$23.bind(this));
            this.$4 && (d.onprogress = this.$24.bind(this));
            a && (this.$16 = setTimeout(this.$25.bind(this), a));
            this.$20 != null && (d.withCredentials = this.$20);
            d.open(this.$7, c.toString(), !0);
            j = !1;
            if (this.$6)
                for (var l in this.$6)
                    l.toLowerCase() === "content-type" && (j = !0),
                    d.setRequestHeader(l, this.$6[l]);
            this.$7 == "POST" && !this.$10 && !j && d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            var m = b("getAsyncHeaders")(c);
            Object.keys(m).forEach(function(a) {
                d.setRequestHeader(a, m[a])
            });
            this.$13 === "arraybuffer" && ("responseType"in d ? d.responseType = "arraybuffer" : "overrideMimeType"in d ? d.overrideMimeType("text/plain; charset=x-user-defined") : "setRequestHeader"in d && d.setRequestHeader("Accept-Charset", "x-user-defined"));
            this.$13 === "blob" && (d.responseType = this.$13);
            d.send(e)
        }
        ;
        c.abort = function(a) {
            this.$26(),
            this.$1 && (j || (j = b("ErrorGuard"))).applyWithGuard(this.$1, null, [a], {
                name: "XHRRequest:_abortHandler"
            })
        }
        ;
        c.$26 = function() {
            var a = this.$9;
            a && (a.onreadystatechange = null,
            a.abort());
            this.$27()
        }
        ;
        c.$25 = function() {
            this.$26(),
            this.$15 && (j || (j = b("ErrorGuard"))).applyWithGuard(this.$15, null, [], {
                name: "XHRRequest:_abortHandler"
            })
        }
        ;
        c.$28 = function(a) {
            if (this.$13)
                if ("response"in a)
                    return a.response;
                else if (this.$13 === "arraybuffer" && window.VBArray)
                    return window.VBArray(a.responseBody).toArray();
            return a.responseText
        }
        ;
        c.$22 = function(a) {
            var c = this
              , d = this.$9;
            return function() {
                var e;
                e = {
                    errorCode: b("XHRHttpError").HTTP_TRANSPORT_ERROR,
                    errorMsg: "Network Failure.",
                    errorType: "Network",
                    errorRawResponseHeaders: null,
                    errorRawTransport: d == null ? void 0 : (e = d.constructor) == null ? void 0 : e.name,
                    errorRawTransportStatus: 0
                };
                c.$8 ? (j || (j = b("ErrorGuard"))).applyWithGuard(a.bind(void 0, c.$8), null, [e], {
                    name: "XHRRequest:_networkFailureHandler"
                }) : a(function() {});
                b("NetworkStatus").reportError()
            }
        }
        ;
        c.$21 = function(a) {
            var c = this
              , d = b("TimeSlice").guard(function(a) {
                for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++)
                    c[d - 1] = arguments[d];
                return a.apply(this, c)
            }, "XHRRequest onreadystatechange", {
                propagationType: b("TimeSlice").PropagationType.EXECUTION
            });
            return function() {
                var e = c.$9;
                if (e == null)
                    return;
                var f = e.readyState;
                if (f >= 2) {
                    var g = f === 4;
                    g && b("ErrorXFBDebug").addFromXHR(e);
                    var h = c.getURI();
                    h = b("XHRHttpError").getErrorCode(h, e.status);
                    var i = c.$12;
                    if (h != null) {
                        if (g) {
                            var k = {
                                errorCode: h,
                                errorMsg: c.$28(e),
                                errorRawTransport: e.constructor.name,
                                errorRawTransportStatus: e.status,
                                errorRawResponseHeaders: i && i.includeHeaders ? e.getAllResponseHeaders() : null,
                                errorType: e.status ? "HTTP " + e.status : "HTTP"
                            };
                            c.$5 ? (j || (j = b("ErrorGuard"))).applyWithGuard(a.bind(void 0, c.$5), null, [k], {
                                name: "XHRRequest:_errorHandler"
                            }) : a(function() {})
                        }
                    } else if (i) {
                        if (g || i.parseStreaming && f === 3) {
                            k = g ? a : d;
                            f = (i == null ? void 0 : i.includeHeaders) ? e.getAllResponseHeaders() : null;
                            (j || (j = b("ErrorGuard"))).applyWithGuard(k.bind(void 0, i), null, [c.$28(e), f, g], {
                                name: "XHRRequest:handler"
                            })
                        }
                    } else
                        g && a(function() {});
                    g && (h != "HTTP_TRANSPORT_ERROR" && b("NetworkStatus").reportSuccess(),
                    c.$27())
                }
            }
        }
        ;
        c.$23 = function(a) {
            l.loadedBytes = a.loaded,
            l.totalBytes = a.total,
            this.$18 && (j || (j = b("ErrorGuard"))).applyWithGuard(this.$18, null, [l], {
                name: "XHRRequest:_uploadProgressHandler"
            })
        }
        ;
        c.$24 = function(a) {
            a = {
                loadedBytes: a.loaded,
                totalBytes: a.total
            };
            this.$4 && (j || (j = b("ErrorGuard"))).applyWithGuard(this.$4, null, [a], {
                name: "XHRRequest:_downloadProgressHandler"
            })
        }
        ;
        c.$27 = function() {
            clearTimeout(this.$16),
            delete this.$9
        }
        ;
        a.disable = function() {
            k = !0
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("CometErrorOverlay", ["React", "ReactDOMComet", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    f.injectComponent = a;
    b("React");
    function g() {
        var a = document.body;
        if (a == null)
            return null;
        var b = document.createElement("div");
        a.appendChild(b);
        return b
    }
    function a(a) {
        var c = g();
        if (c != null) {
            var d = function() {
                window.setTimeout(function() {
                    e.unmount(),
                    c.remove()
                }, 0)
            }
              , e = b("gkx")("832370") ? b("ReactDOMComet").createBlockingRoot(c) : b("ReactDOMComet").createRoot(c);
            a = a(d);
            e.render(a);
            return d
        }
    }
}
), null);
__d("BaseModal.react", ["requireCond", "cr:994756", "cr:1088443"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("cr:1088443") != null ? b("cr:1088443") : b("cr:994756");
    e.exports = a
}
), null);
__d("BaseButtonOrLink_DEPRECATED.react", ["CometPressable.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a, c) {
        var d = a.fbclid
          , e = a.href
          , f = a.lynxMode
          , h = a.onClick
          , i = a.passthroughProps
          , j = a.preventLocalNavigation
          , k = a.rel
          , l = a.replace
          , m = a.routeTarget
          , n = a.target
          , o = a.to;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["fbclid", "href", "lynxMode", "onClick", "passthroughProps", "preventLocalNavigation", "rel", "replace", "routeTarget", "target", "to"]);
        e = (e = e) != null ? e : o == null ? void 0 : o.url;
        o = e != null ? {
            fbclid: d,
            lynxMode: f,
            passthroughProps: i,
            preventLocalNavigation: j,
            rel: k,
            replace: l,
            routeTarget: m,
            target: n,
            url: e
        } : void 0;
        return g.jsx(b("CometPressable.react"), babelHelpers["extends"]({}, a, {
            display: "inline",
            linkProps: o,
            onPress: h,
            overlayDisabled: !0,
            ref: c
        }))
    }
    c = g.forwardRef(a);
    e.exports = c
}
), null);
__d("CometButtonStyles_DEPRECATED.react", ["React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    b("React");
    var g = {
        disabled: {
            backgroundImage: "mf7ej076",
            cursor: "t5a262vz",
            ":hover": {
                backgroundImage: "ljzjr9fn",
                cursor: "tkdm7zml"
            },
            ":focus": {
                boxShadow: "mi62g4hq"
            }
        },
        expanded: {
            display: "pq6dq46d",
            justifyContent: "taijpn5t",
            minHeight: "sn7ne77z",
            minWidth: "oqhjfihn"
        },
        large: {
            fontSize: "a5q79mjw",
            lineHeight: "g1cxx5fr"
        },
        medium: {
            fontSize: "jq4qci2q",
            lineHeight: "m5l1wtfr"
        },
        primary: {
            backgroundColor: "s1i5eluu",
            color: "bwm1u5wc",
            ":active": {
                backgroundColor: "id6903cd"
            }
        },
        primaryDeemphasized: {
            backgroundColor: "oo1teu6h",
            color: "knomaqxo",
            ":active": {
                backgroundColor: "rudrce6k",
                color: "qzg4r8h7"
            }
        },
        primaryDeemphasizedDisabled: {
            backgroundColor: "c98fg2ug",
            color: "pipptul6"
        },
        primaryDisabled: {
            backgroundColor: "c98fg2ug",
            color: "erlsw9ld"
        },
        root: {
            alignItems: "bp9cbjyn",
            borderTopStartRadius: "beltcj47",
            borderTopEndRadius: "p86d2i9g",
            borderBottomEndRadius: "aot14ch1",
            borderBottomStartRadius: "kzx2olss",
            borderTopWidth: "rt8b4zig",
            borderEndWidth: "n8ej3o3l",
            borderBottomWidth: "agehan2d",
            borderStartWidth: "sk4xxmp2",
            boxSizing: "rq0escxv",
            cursor: "nhd2j8a9",
            display: "pq6dq46d",
            fontWeight: "lrazzd5p",
            outline: "lzcic4wl",
            paddingTop: "cxgpxx05",
            paddingEnd: "d1544ag0",
            paddingBottom: "sj5x9vvc",
            paddingStart: "tw6a2znq",
            position: "l9j0dhe7",
            textAlign: "oqcyycmt",
            textDecoration: "esuyzwwr",
            textShadow: "gigivrx4",
            verticalAlign: "sf5mxxl7",
            whiteSpace: "g0qnabr5",
            ":hover": {
                backgroundImage: "ehryuci6",
                textDecoration: "p8dawk7l"
            },
            ":focus": {
                boxShadow: "lrwzeq9o",
                outline: "iqfcb0g7"
            },
            ":active": {
                transform: "lsqurvkf"
            }
        },
        secondary: {
            backgroundColor: "tdjehn4e",
            color: "oo9gr5id",
            ":active": {
                backgroundColor: "kca3o15f"
            }
        },
        secondaryDeemphasized: {
            backgroundColor: "g5ia77u1",
            color: "knomaqxo",
            ":active": {
                backgroundColor: "cq6j33a1",
                color: "qzg4r8h7"
            }
        },
        secondaryDeemphasizedDisabled: {
            backgroundColor: "g5ia77u1",
            color: "erlsw9ld"
        },
        secondaryDisabled: {
            backgroundColor: "c98fg2ug",
            color: "erlsw9ld"
        },
        shadow: {
            boxShadow: "rdkkywzo"
        },
        white: {
            backgroundColor: "q2y6ezfg",
            color: "oo9gr5id",
            ":active": {
                backgroundColor: "cq6j33a1"
            }
        },
        whiteDeemphasized: {
            backgroundColor: "g5ia77u1",
            color: "knomaqxo",
            ":active": {
                backgroundColor: "cq6j33a1",
                color: "qzg4r8h7"
            }
        },
        whiteDeemphasizedDisabled: {
            backgroundColor: "g5ia77u1",
            color: "erlsw9ld"
        },
        whiteDisabled: {
            backgroundColor: "c98fg2ug",
            color: "bwm1u5wc"
        }
    };
    function a(a) {
        var b = a.children
          , c = a.deemphasized;
        c = c === void 0 ? !1 : c;
        var d = a.disabled;
        d = d === void 0 ? !1 : d;
        var e = a.expanded;
        e = e === void 0 ? !1 : e;
        var f = a.shadow;
        f = f === void 0 ? !1 : f;
        var h = a.size;
        h = h === void 0 ? "medium" : h;
        a = a.use;
        a = a === void 0 ? "primary" : a;
        return b([g.root, d && g.disabled, h === "large" && g.large, h === "medium" && g.medium, e === !0 && g.expanded, f === !0 && g.shadow, a === "primary" && g.primary, a === "primary" && d === !0 && g.primaryDisabled, a === "primary" && c === !0 && g.primaryDeemphasized, a === "primary" && c === !0 && d === !0 && g.primaryDeemphasizedDisabled, a === "secondary" && g.secondary, a === "secondary" && d === !0 && g.secondaryDisabled, a === "secondary" && c === !0 && g.secondaryDeemphasized, a === "secondary" && c === !0 && d === !0 && g.secondaryDeemphasizedDisabled, a === "white" && g.white, a === "white" && d === !0 && g.whiteDisabled, a === "white" && c === !0 && g.whiteDeemphasized, a === "white" && c === !0 && d === !0 && g.whiteDeemphasizedDisabled])
    }
}
), null);
__d("CometButton_DEPRECATED.react", ["BaseButtonOrLink_DEPRECATED.react", "CometButtonStyles_DEPRECATED.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a, c) {
        var d = a.children
          , e = a.deemphasized;
        e = e === void 0 ? !1 : e;
        var f = a.expanded;
        f = f === void 0 ? !1 : f;
        a.label;
        var h = a.shadow;
        h = h === void 0 ? !1 : h;
        var i = a.size;
        i = i === void 0 ? "medium" : i;
        var j = a.use;
        j = j === void 0 ? "primary" : j;
        var k = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "deemphasized", "expanded", "label", "shadow", "size", "use"]);
        a = a.disabled;
        a = a === void 0 ? !1 : a;
        return g.jsx(b("CometButtonStyles_DEPRECATED.react"), {
            deemphasized: e,
            disabled: a,
            expanded: f,
            shadow: h,
            size: i,
            use: j,
            children: function(a) {
                return g.jsx(b("BaseButtonOrLink_DEPRECATED.react"), babelHelpers["extends"]({}, k, {
                    ref: c,
                    xstyle: a,
                    children: d
                }))
            }
        })
    }
    c = g.forwardRef(a);
    e.exports = c
}
), null);
__d("CometExceptionDialog.react", ["fbt", "BaseModal.react", "CometButton_DEPRECATED.react", "CometCardedDialog.react", "React", "TetraText.react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        var c = a.errorDescription
          , d = a.errorSummary;
        a = a.onClose;
        return h.jsx(b("BaseModal.react"), {
            stackingBehavior: "above-everything",
            children: h.jsxs(b("CometCardedDialog.react"), {
                onClose: a,
                withCloseButton: !0,
                children: [h.jsx("div", {
                    className: "dati1w0a a5h7je3r n5gxf0i0 aodizinl",
                    children: h.jsx(b("TetraText.react"), {
                        type: "headlineEmphasized2",
                        children: d
                    })
                }), h.jsx("div", {
                    className: "dati1w0a jbae33se hv4rvrfc bjjx79mm",
                    children: h.jsx(b("TetraText.react"), {
                        color: "secondary",
                        type: "body2",
                        children: c
                    })
                }), h.jsx("div", {
                    className: "gjzvkazv dati1w0a f10w8fjw hv4rvrfc ecm0bbzt cbu4d94t j83agx80 c4hnarmi",
                    children: h.jsx(b("CometButton_DEPRECATED.react"), {
                        expanded: !0,
                        onClick: a,
                        use: "primary",
                        children: g._("OK")
                    })
                })]
            })
        })
    }
}
), null);
__d("CometGlobalKeyCommandWidget", ["createKeyCommandWidget"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("createKeyCommandWidget")(!1);
    e.exports = a
}
), null);
__d("getCometKey", ["CometKeys"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = {
        8: "Backspace",
        13: "Enter",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        46: "Delete"
    }
      , h = new Set(Object.values(b("CometKeys")));
    function a(a) {
        var b = a.key;
        a = a.which || a.keyCode;
        (a >= 48 && a <= 57 || a >= 65 && a <= 90) && (b = String.fromCharCode(a));
        a >= 96 && a <= 105 && (b = String.fromCharCode(a - 48));
        if (b != null && b !== "") {
            b = b.toLowerCase();
            if (h.has(b))
                return b
        }
        if (Object.prototype.hasOwnProperty.call(g, a)) {
            b = g[a].toLowerCase();
            if (h.has(b))
                return b
        }
        return null
    }
}
), null);
__d("getKeyCommand", ["UserAgent", "createKeyCommand", "getCometKey"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        var c = b("getCometKey")(a);
        if (c === void 0 || c === null)
            return null;
        var d = !1;
        b("UserAgent").isPlatform("Mac OS X") ? a.metaKey && (d = !0) : a.ctrlKey && (d = !0);
        d = {
            alt: a.altKey,
            command: d,
            key: c,
            shift: a.shiftKey
        };
        return b("createKeyCommand")(d)
    }
}
), null);
__d("applyKeyCommand", ["getKeyCommand"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c, d, e) {
        var f = b("getKeyCommand")(a);
        if (f === void 0 || f === null)
            return !1;
        c = c;
        while (c !== null && c !== void 0) {
            if (c && c.applyCommand(f, a))
                return !0;
            c = c && c.getParent()
        }
        if (d != null && d.applyCommand(f, a))
            return !0;
        return e != null && e.applyCommand(f, a) ? !0 : !1
    }
}
), null);
__d("getActiveCommands", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b, c) {
        var d = new Map();
        function e(a) {
            a.forEach(function(a, b) {
                var c = d.get(b);
                if (c) {
                    var e = c.every(function(a) {
                        return a.shouldStopPropagation === !1
                    });
                    e && c.push(a)
                } else
                    d.set(b, [a])
            })
        }
        a = a;
        while (a !== null && a !== void 0) {
            var f = a && a.getCommandMap();
            e(f);
            a = a && a.getParent()
        }
        b && e(b.getCommandMap());
        c && e(c.getCommandMap());
        return d
    }
}
), null);
__d("useGetComposingState", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a() {
        var a = g.useRef(!1)
          , b = g.useCallback(function(b) {
            a.current = !0
        }, [a])
          , c = g.useCallback(function(b) {
            a.current = !1
        }, [a]);
        g.useEffect(function() {
            window.addEventListener("compositionstart", b);
            window.addEventListener("compositionend", c);
            return function() {
                window.removeEventListener("compositionstart", b),
                window.removeEventListener("compositionend", c)
            }
        }, [c, b]);
        return function(b) {
            return b.isComposing || a.current
        }
    }
}
), null);
__d("useGlobalEventListener", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = {
        fullscreenchange: ["webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange", "fullscreenchange"]
    };
    a = function(a, b, c) {
        g.useEffect(function() {
            if (b != null) {
                var d, e = (d = h[a]) != null ? d : a;
                window.addEventListener(e, b, c);
                return function() {
                    window.removeEventListener(e, b, c)
                }
            }
        }, [b, a, c])
    }
    ;
    e.exports = a
}
), null);
__d("BaseKeyCommandListener.react", ["CometGlobalKeyCommandWidget", "CometKeyCommandUtilsContext", "React", "ReactDOMComet", "applyKeyCommand", "getActiveCommands", "getKeyCommand", "recoverableViolation", "useGetComposingState", "useGlobalEventListener"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function h(a, b) {
        var c;
        return function() {
            window.clearTimeout(c),
            c = window.setTimeout(a, b)
        }
    }
    var i = 100;
    function a(a) {
        var c = g.useRef(null)
          , d = g.useRef(null)
          , e = g.useRef(new Set())
          , f = g.useContext(b("CometGlobalKeyCommandWidget").Context)
          , j = g.useCallback(function(g) {
            if (!a.observersEnabled)
                return {
                    getActiveCommands: function() {
                        b("recoverableViolation")("Key Command observers are not supported in this context", "comet_ax");
                        return null
                    },
                    remove: function() {}
                };
            var h = e.current;
            h.add(g);
            return {
                getActiveCommands: function() {
                    return b("getActiveCommands")(d.current, c.current, f)
                },
                remove: function() {
                    h["delete"](g)
                }
            }
        }, [f, a.observersEnabled])
          , k = g.useCallback(function(b) {
            a.observersEnabled && e.current.forEach(function(a) {
                return a({
                    key: b,
                    type: "triggered"
                })
            })
        }, [a.observersEnabled])
          , l = g.useMemo(function() {
            return h(function() {
                a.observersEnabled && e.current.forEach(function(a) {
                    return a({
                        type: "update"
                    })
                })
            }, i)
        }, [a.observersEnabled])
          , m = g.useCallback(function(a) {
            var b = c.current !== a;
            c.current = a;
            b && l()
        }, [l])
          , n = g.useCallback(function(a) {
            var b = d.current !== a;
            d.current = a;
            b && l()
        }, [l]);
        j = g.useRef({
            addObserver: j,
            notifyCommandUpdate: l,
            setActiveLayer: m,
            setActiveWrapper: n
        });
        m = g.useCallback(function() {
            var a = d.current !== null;
            d.current = null;
            a && l()
        }, [l]);
        var o = b("useGetComposingState")();
        n = g.useCallback(function(a) {
            if (o(a))
                return;
            b("ReactDOMComet").flushSync(function() {
                var e = b("applyKeyCommand")(a, d.current, c.current, f);
                if (e) {
                    e = b("getKeyCommand")(a);
                    k(e)
                }
            })
        }, [o, f, k]);
        b("useGlobalEventListener")("keydown", n);
        b("useGlobalEventListener")("keyup", n);
        return g.jsx(b("CometKeyCommandUtilsContext").Provider, {
            value: j.current,
            children: g.jsx("div", {
                onBlurCapture: m,
                children: a.children
            })
        })
    }
}
), null);
__d("CometLayerKeyCommandWidget", ["createKeyCommandWidget"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("createKeyCommandWidget")(!1);
    e.exports = a
}
), null);
__d("SetActiveLayerIfAttached.react", ["CometKeyCommandUtilsContext", "CometLayerKeyCommandWidget", "HiddenSubtreeContext", "React", "recoverableViolation"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = g.useContext(b("HiddenSubtreeContext"));
        a = g.useContext(b("CometKeyCommandUtilsContext"));
        var d = a && a.setActiveLayer
          , e = g.useContext(b("CometLayerKeyCommandWidget").Context);
        g.useEffect(function() {
            if (!d) {
                b("recoverableViolation")("The current layer is not wrapped in a *KeyCommandListener", "comet_ax");
                return
            }
            if (!e) {
                b("recoverableViolation")("setActiveLayer not wrapped in CometLayerKeyCommandWidget.Wrapper", "comet_ax");
                return
            }
            c.hiddenOrBackgrounded || d(e)
        }, [e, c, d]);
        return null
    }
}
), null);
__d("CometLayerKeyCommandWrapper.react", ["CometKeyCommandContext", "CometLayerKeyCommandWidget", "React", "SetActiveLayerIfAttached.react"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        return g.jsxs(b("CometLayerKeyCommandWidget").Wrapper, {
            debugName: a.debugName,
            children: [g.jsx(b("SetActiveLayerIfAttached.react"), {
                debugName: a.debugName
            }), a.children]
        })
    }
}
), null);
__d("OutsideExceptionKeyCommandListener.react", ["BaseKeyCommandListener.react", "CometLayerKeyCommandWrapper.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        return g.jsx(b("BaseKeyCommandListener.react"), {
            observersEnabled: !1,
            children: g.jsx(b("CometLayerKeyCommandWrapper.react"), {
                debugName: "outside exception layer",
                children: a.children
            })
        })
    }
}
), null);
__d("handleCometErrorCodeSideEffects", ["errorCode", "CometErrorOverlay", "CometExceptionDialog.react", "OutsideExceptionKeyCommandListener.react", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React")
      , i = {};
    function a(a, c, d) {
        if (a === 1357001 || a === 1357032) {
            window.location.reload(!0);
            return
        }
        if (i[a])
            return;
        i[a] = !0;
        b("CometErrorOverlay").injectComponent(function(e) {
            return h.jsx(b("OutsideExceptionKeyCommandListener.react"), {
                children: h.jsx(b("CometExceptionDialog.react"), {
                    errorDescription: d,
                    errorSummary: c,
                    onClose: function() {
                        delete i[a],
                        e()
                    }
                })
            })
        })
    }
}
), null);
__d("cometAsyncFetch", ["Promise", "CometAsyncFetchError", "CSRFGuard", "DTSG", "DTSG_ASYNC", "NetworkStatus", "PHPQuerySerializer", "XHRRequest", "getAsyncParams", "handleCometErrorCodeSideEffects", "recoverableViolation", "setTimeout"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = 250, i = [];
    function a(a, c) {
        c === void 0 && (c = {
            data: {},
            method: "GET"
        });
        var d = 0, e;
        return new (b("Promise"))(function(f, j) {
            function k(c) {
                var d, e;
                c = c.trim();
                try {
                    b("CSRFGuard").exists(c) && (c = b("CSRFGuard").clean(c)),
                    c = JSON.parse(c)
                } catch (c) {
                    b("recoverableViolation")("Unable to parse uri." + a.toString() + " response", "comet_infra");
                    j(c);
                    return
                }
                if (c.error) {
                    b("handleCometErrorCodeSideEffects")(c.error, c.errorSummary, c.errorDescription);
                    j({
                        error: c.error,
                        errorMsg: c.errorDescription,
                        errorType: c.errorSummary
                    });
                    return
                }
                d = (d = c) == null ? void 0 : d.dtsgToken;
                e = (e = c) == null ? void 0 : e.dtsgAsyncGetToken;
                d && b("DTSG").setToken(d);
                e && b("DTSG_ASYNC").setToken(e);
                f((d = c) == null ? void 0 : d.payload)
            }
            function l(a) {
                var e = c.retryCount != null && c.retryCount > 0 && d <= c.retryCount;
                if (e)
                    b("setTimeout")(n, h);
                else {
                    e = new (b("CometAsyncFetchError"))(a.errorMsg,a.errorCode,a.errorRawResponseHeaders,a.errorRawTransport,a.errorType);
                    return j(e)
                }
            }
            function m() {
                var c = new (b("CometAsyncFetchError"))("Request to " + a + " was aborted",null,null,null,"Abort");
                return j(c)
            }
            function n() {
                var e, f = (e = c.requestHeaders) != null ? e : {};
                i.forEach(function(a) {
                    a = a();
                    f = Object.assign(a, f)
                });
                Object.keys(f).reduce(function(a, b) {
                    return a.setRequestHeader(b, f[b])
                }, new (b("XHRRequest"))(a)).setMethod(c.method).setData(babelHelpers["extends"]({}, c.data, b("getAsyncParams")(c.method))).setRawData(c.formData).setResponseHandler(k).setErrorHandler(l).setAbortHandler(m).setUploadProgressHandler(c.onUploadProgress).setDataSerializer((g || (g = b("PHPQuerySerializer"))).serialize).send();
                d++
            }
            b("NetworkStatus").isOnline() ? n() : e = b("NetworkStatus").onChange(function(a) {
                a = a.online;
                a && (n(),
                e.remove())
            })
        }
        )
    }
    a.registerHeaderProvider = function(a) {
        i.push(a)
    }
}
), null);
__d("createChunkedResponseParser", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = "\r\n"
      , i = 2;
    function a(a, b) {
        var c = 0
          , d = function(d, e, f) {
            b && (d = b(d),
            d == null || typeof d === "string" || g(0, 4071));
            if (d) {
                var j = d.length;
                while (c < j) {
                    var k = d.indexOf(h, c);
                    if (k < 0)
                        if (f)
                            k = j;
                        else
                            break;
                    k = d.slice(c, k);
                    c += k.length + i;
                    a(k, e, f && c >= j)
                }
            } else
                f && a("", e, !0)
        };
        d.parseStreaming = !0;
        return d
    }
}
), null);
__d("parseCometRouteFetchPayload", ["recoverableViolation", "replaceTransportMarkers"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function g(a) {
        if (a == null)
            return null;
        if (a.type === "route_redirect") {
            var c = a.exports
              , d = a.redirect_url
              , e = a.redirect_result
              , f = a.route_match_infos;
            if (f != null && Array.isArray(f) && f.length > 0 && c != null && d != null) {
                b("replaceTransportMarkers")({
                    relativeTo: null
                }, c);
                return {
                    redirectResult: g(e),
                    redirectUrl: d,
                    routeMatchInfos: f,
                    routeRedirect: c,
                    type: "routeRedirect"
                }
            }
        }
        if (a.type === "route_definition") {
            e = a.exports;
            d = a.route_match_infos;
            if (d != null && Array.isArray(d) && d.length > 0 && e != null) {
                b("replaceTransportMarkers")({
                    relativeTo: null
                }, e);
                return {
                    routeDefinition: e,
                    routeMatchInfos: d,
                    timeSpentMetaData: a.time_spent_meta_data,
                    type: "routeDefinition"
                }
            }
        }
        b("recoverableViolation")("parseCometRouteFetchPayload encountered a bad payload result: " + a, "comet_infra");
        return null
    }
    function a(a) {
        return a == null || a.error == null ? {
            error: !0
        } : {
            error: !1,
            result: g(a.result)
        }
    }
}
), null);
__d("fetchAnonymousCometRoute", ["Promise", "Bootloader", "CometAsyncFetchError", "CSRFGuard", "HasteResponse", "JSScheduler", "PHPQuerySerializer", "RelayAPIConfig", "RelayPrefetchedStreamCache", "ServerJS", "XHRRequest", "cometAsyncFetch", "createChunkedResponseParser", "err", "getAsyncParams", "parseCometRouteFetchPayload", "promiseDone", "recoverableViolation", "setTimeout", "unrecoverableViolation"], (function(a, b, c, d, e, f) {
    "use strict";
    f.assertRoutingPayload = o;
    f.responseHandler = p;
    f.retryFetchOnError = q;
    f.fetchAnonymousCometRouteForPreload = a;
    f.fetchAnonymousCometRouteForTransition = c;
    f.handleSRandJSModules = s;
    var g, h = {}, i = {}, j = null, k = [], l = 2, m = 3e3, n = 15;
    function o(a) {
        if (a != null && typeof a === "object" && Object.prototype.hasOwnProperty.call(a, "payloads") && Object.prototype.hasOwnProperty.call(a, "sr_payload"))
            return a;
        else {
            throw b("err")("Routing payload expected, but got " + ((a = JSON.stringify(a)) != null ? a : "<unstringifiable>"))
        }
    }
    function p(a) {
        var c = a == null ? void 0 : a.payloads;
        s((a = a == null ? void 0 : a.sr_payload) != null ? a : Object.freeze({}));
        var d = {};
        typeof c === "object" && c != null && Object.keys(c).forEach(function(a) {
            d[a] = b("parseCometRouteFetchPayload")(c[a])
        });
        return d
    }
    function q(a, c) {
        c === void 0 && (c = l);
        return a()["catch"](function(d) {
            if (c > 0)
                return new (b("Promise"))(function(d, e) {
                    b("setTimeout")(function() {
                        b("promiseDone")(q(a, c - 1), d, e)
                    }, m)
                }
                );
            throw d
        })
    }
    function r(a) {
        var c = function() {
            return b("cometAsyncFetch")("/ajax/bulk-route-definitions/", {
                data: {
                    route_urls: a
                },
                method: "POST"
            })
        };
        return q(c).then(function(a) {
            a = o(a);
            return p(a)
        })
    }
    function a(a) {
        if (i[a] != null)
            return i[a];
        var c = new (b("Promise"))(function(b, c) {
            k.push({
                reject: c,
                resolve: b,
                url: a
            })
        }
        );
        i[a] = c;
        c["finally"](function() {
            return delete i[a]
        });
        j == null && (j = b("JSScheduler").scheduleSpeculativeCallback(function() {
            j = null;
            var a = function() {
                var a = k.splice(0, n);
                b("promiseDone")(r(a.map(function(a) {
                    a = a.url;
                    return a
                })), function(c) {
                    a.forEach(function(a) {
                        var d = a.resolve;
                        a = a.url;
                        var e = c[a];
                        e == null ? (b("recoverableViolation")("Unable to find route for " + a, "comet_infra"),
                        d({
                            error: !0
                        })) : d(e)
                    })
                }, function(c) {
                    b("recoverableViolation")("Failed call to /ajax/bulk-route-definitions/: " + (c instanceof b("CometAsyncFetchError") ? c.toString() : c), "comet_infra"),
                    a.forEach(function(a) {
                        a = a.resolve;
                        return a({
                            error: !0
                        })
                    })
                })
            };
            while (k.length > 0)
                a()
        }));
        return c
    }
    function c(a, c) {
        if (h[a] != null)
            return h[a];
        var d = function() {
            return new (b("Promise"))(function(d, e) {
                var f = !1
                  , h = b("createChunkedResponseParser")(function(c) {
                    var e;
                    c = c.trim();
                    try {
                        b("CSRFGuard").exists(c) && (c = b("CSRFGuard").clean(c)),
                        e = JSON.parse(c)
                    } catch (a) {
                        f || b("recoverableViolation")("Unable to parse /ajax/route-definition/ response " + c + ", " + a, "comet_infra");
                        d({
                            error: !0
                        });
                        return
                    }
                    if ((!e || !e.__type) && !f) {
                        c = "Routing payload expected for " + a + ", but got " + ((c = JSON.stringify(e)) != null ? c : "<unstringifiable>");
                        b("recoverableViolation")(c, "comet_infra");
                        d({
                            error: !0
                        })
                    }
                    if (e.__type === "error_response") {
                        d({
                            error: !0
                        });
                        return
                    }
                    if (e.__type === "first_response") {
                        if (f)
                            throw b("unrecoverableViolation")("There cannot be two first responses to one request", "comet_infra");
                        f = !0;
                        t(e);
                        d(e.payload)
                    } else if (e.__type === "preloader") {
                        c = e.id;
                        var g = e.result;
                        g ? b("RelayPrefetchedStreamCache").next(c, g) : b("RelayPrefetchedStreamCache").error(c, {})
                    } else if (e.__type === "preloader_error") {
                        g = e.id;
                        b("RelayPrefetchedStreamCache").error(g, {})
                    }
                });
                new (b("XHRRequest"))("/ajax/route-definition/").setMethod("POST").setData(babelHelpers["extends"]({
                    client_previous_actor_id: c !== "0" ? c : null,
                    route_url: a
                }, b("getAsyncParams")("POST"))).setResponseHandler(h).setErrorHandler(function(a) {
                    e(a)
                }).setDataSerializer((g || (g = b("PHPQuerySerializer"))).serialize).send()
            }
            )
        };
        d = q(d).then(b("parseCometRouteFetchPayload"));
        h[a] = d;
        d["finally"](function() {
            return delete h[a]
        });
        return d
    }
    function s(a) {
        var c;
        b("HasteResponse").handleSRPayload((c = a.hsrp) != null ? c : {});
        b("Bootloader").loadResources((c = a.allResources) != null ? c : []);
        new (b("ServerJS"))().handle((c = a.jsmods) != null ? c : {})
    }
    function t(a) {
        var c;
        s((c = a.sr_payload) != null ? c : {});
        if (a.preloaders && a.preloaders.length)
            for (var c = a.preloaders, a = Array.isArray(c), d = 0, c = a ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var e;
                if (a) {
                    if (d >= c.length)
                        break;
                    e = c[d++]
                } else {
                    d = c.next();
                    if (d.done)
                        break;
                    e = d.value
                }
                e = e;
                b("RelayPrefetchedStreamCache").registerPreloader(e.preloaderID, e.queryID, e.variables, (e = e.actorID) != null ? e : b("RelayAPIConfig").actorID)
            }
    }
}
), null);
__d("getCometRouteKey", ["stableStringify"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = typeof WeakMap === "function" ? new WeakMap() : new Map();
    function a(a) {
        var c = g.get(a);
        if (c != null)
            return c;
        c = a.rootView.resource.getModuleId();
        c = c + "||" + b("stableStringify")(a.rootView.props);
        var d = a.hostableView;
        if (d != null) {
            var e = d.resource.getModuleId();
            c = c + "||" + e + "||" + b("stableStringify")(d.props)
        }
        e = a.actorID;
        e != null && (c = c + "||" + e);
        g.set(a, c);
        return c
    }
}
), null);
__d("notifyServerOnNavigation", ["Promise", "JSScheduler", "cometAsyncFetch", "fetchAnonymousCometRoute", "parseCometRouteFetchPayload", "promiseDone"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c) {
        var d = function() {
            return new (b("Promise"))(function(d, e) {
                b("JSScheduler").scheduleLoggingPriCallback(function() {
                    b("promiseDone")(b("cometAsyncFetch")("/ajax/navigation/", {
                        data: {
                            client_previous_actor_id: c !== "0" ? c : null,
                            route_url: a
                        },
                        method: "POST"
                    }), d, e)
                })
            }
            )
        };
        return b("fetchAnonymousCometRoute").retryFetchOnError(d).then(function(a) {
            b("fetchAnonymousCometRoute").handleSRandJSModules(a.sr_payload);
            return b("parseCometRouteFetchPayload")(a.payload)
        })
    }
}
), null);
__d("CometRouteStore", ["Promise", "CometRouteCache", "CometRouteMapper", "ConstUriUtils", "buildCometErrorRoute", "buildCometRouteFromDefinition", "buildRouteParams", "fetchAnonymousCometRoute", "getCometRouteKey", "gkx", "normalizeCometRouterConstUri", "normalizeCometRouterUrl", "notifyServerOnNavigation", "recoverableViolation", "setTimeout"], (function(a, b, c, d, e, f) {
    "use strict";
    f.parseCometRouteFetchResult = n;
    f.getRoute = p;
    f.fetch = a;
    f.fetchForNavigation = c;
    f.fetchForValidation = d;
    f.invalidatePath = e;
    f.handleRoutingPayload = s;
    var g = b("gkx")("1401861")
      , h = 15e3
      , i = ["__cft__", "__tn__", "fnr_t", "sw_fnr_id"]
      , j = new Map();
    function k(a) {
        var c;
        c = (c = b("ConstUriUtils").getUri(a)) == null ? void 0 : (c = c.removeQueryParams(i)) == null ? void 0 : c.toString();
        return b("normalizeCometRouterUrl")((c = c) != null ? c : a)
    }
    function l(a, c) {
        if (c == null)
            return;
        if (c.type === "routeRedirect") {
            b("CometRouteMapper").installRedirect(a, c.routeRedirect, c.routeMatchInfos);
            l(c.redirectUrl, c.redirectResult);
            return
        }
        if (c.type === "routeDefinition") {
            b("CometRouteMapper").installRoute(a, c.routeDefinition, c.routeMatchInfos);
            return
        }
        b("recoverableViolation")("CometRouteStore encountered a bad fetch result: " + c.type, "comet_infra");
        return
    }
    function m(a, b) {
        if (b.error)
            return;
        l(a, b.result)
    }
    function n(a, c) {
        if (c != null && c.type === "routeRedirect")
            return n(c.redirectUrl, c.redirectResult);
        if (c == null || c.type !== "routeDefinition")
            return {
                route: "UNMATCHED_TOKEN"
            };
        ({});
        var d = b("ConstUriUtils").getUri(b("normalizeCometRouterConstUri")(a));
        d = d != null ? Object.fromEntries(d.getQueryParams()) : {};
        var e = c.routeDefinition
          , f = c.routeMatchInfos;
        c = c.timeSpentMetaData;
        f = f[f.length - 1];
        var g = f.instanceParams
          , h = f.routeParams;
        f = f.routePath;
        g = babelHelpers["extends"]({}, g, d);
        return {
            initialTimeSpentMetaData: c,
            route: b("buildCometRouteFromDefinition")(e, a, b("buildRouteParams")(h, g, null), f)
        }
    }
    function o(a, c) {
        return c.error ? {
            route: b("buildCometErrorRoute")(a)
        } : n(a, c.result)
    }
    function p(a) {
        var c = b("CometRouteCache").getRoute(a);
        if (c != null)
            return c;
        c = b("CometRouteMapper").getRoute(a);
        if (c != null) {
            b("CometRouteCache").install(a, c);
            return c
        }
        return null
    }
    function a(a) {
        var c = p(a);
        if (c != null)
            return b("Promise").resolve(c);
        c = k(a);
        c = j.get(c);
        return c ? c.promise["catch"](function() {
            return q(a)
        }) : q(a)
    }
    function q(a) {
        return b("fetchAnonymousCometRoute").fetchAnonymousCometRouteForPreload(a).then(function(c) {
            var d = o(a, c);
            c.error || (m(a, c),
            b("CometRouteCache").install(a, d.route));
            return d.route
        })
    }
    function r(a, c) {
        var d = o(a, c);
        if (!c.error) {
            m(a, c);
            b("CometRouteCache").install(a, d.route);
            return d.route
        }
    }
    function c(a, c) {
        var d = p(a);
        return d != null ? b("Promise").resolve({
            route: d
        }) : b("fetchAnonymousCometRoute").fetchAnonymousCometRouteForTransition(a, c).then(function(c) {
            var d = o(a, c);
            m(a, c);
            b("CometRouteCache").install(a, d.route);
            return d
        })
    }
    function d(a, c, d) {
        return b("notifyServerOnNavigation")(c, d).then(function(d) {
            var e = o(c, d)
              , f = e.route;
            if (f !== "UNMATCHED_TOKEN" && b("getCometRouteKey")(f) === b("getCometRouteKey")(a))
                return null;
            m(c, d);
            b("CometRouteCache").install(c, e.route);
            return f
        })
    }
    function e(a) {
        var c = "";
        a = b("ConstUriUtils").getUri(b("normalizeCometRouterConstUri")(a));
        c = a != null ? a.getPath() : "";
        b("CometRouteMapper").invalidatePath(c);
        b("CometRouteCache").invalidatePath(c)
    }
    function s(a, c) {
        if (!g)
            return;
        Array.isArray(a) && a.forEach(function(a) {
            if (typeof a !== "string")
                return;
            var d = p(a);
            if (d != null)
                return;
            var e = k(a);
            if (!j.has(e)) {
                d = null;
                a = null;
                var f = new (b("Promise"))(function(b, c) {
                    d = c,
                    a = b
                }
                );
                if (d != null && a != null) {
                    var c = {
                        promise: f,
                        reject: d,
                        resolve: a
                    };
                    j.set(e, c);
                    b("setTimeout")(function() {
                        j["delete"](e),
                        c.reject()
                    }, h)
                }
            }
        });
        if (c != null) {
            a = b("fetchAnonymousCometRoute").assertRoutingPayload(c);
            c = b("fetchAnonymousCometRoute").responseHandler(a);
            for (var d in c) {
                a = k(d);
                var e = c[d];
                e = e != null ? r(d, e) : null;
                var f = j.get(a);
                f != null && (j["delete"](a),
                e != null ? f.resolve(e) : f.reject())
            }
        }
    }
}
), null);
__d("expectationViolation", ["ErrorNormalizeUtils", "FBLogger", "emptyFunction", "requireCond", "sprintf", "cr:840411"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    d = b("emptyFunction");
    function a(a) {
        var c;
        for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++)
            e[f - 1] = arguments[f];
        (c = b("FBLogger")("expectation_violation").blameToPreviousFrame()).warn.apply(c, [a].concat(e))
    }
    a.setHandler = c;
    function c(a) {
        d = a
    }
}
), null);
__d("PinnedCommentEventsConnectionHandler", ["expectationViolation", "relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    f.update = a;
    f.getEvents = i;
    f.deleteEvent = c;
    function a(a, b) {
        a = a.get(b.dataID);
        if (!a)
            return;
        var c = a.getLinkedRecords(b.fieldKey);
        if (!c) {
            a.setValue(null, b.handleKey);
            return
        }
        var d = a.getLinkedRecords(b.handleKey);
        if (!d) {
            a.setLinkedRecords(c, b.handleKey);
            return
        }
        var e;
        d == null ? e = c : c == null ? e = d : e = g(d, c);
        a.setLinkedRecords((d = e) != null ? d : [], b.handleKey)
    }
    function g(a, c) {
        var d = 0
          , e = 0
          , f = new Set()
          , g = []
          , h = function(a) {
            var c = a == null ? void 0 : a.getValue("id");
            if (c == null) {
                b("expectationViolation")("Pinned Comment Event should have id");
                return
            }
            if (f.has(c))
                return;
            f.add(c);
            g.push(a)
        };
        while (d < a.length && e < c.length) {
            var i, j;
            i = (i = a[d]) == null ? void 0 : i.getValue("vod_time_offset");
            j = (j = c[e]) == null ? void 0 : j.getValue("vod_time_offset");
            if (typeof i != "number") {
                d++;
                continue
            }
            if (typeof j != "number") {
                e++;
                continue
            }
            if (i > j) {
                h(a[d]);
                d++;
                continue
            }
            if (i < j) {
                h(c[e]);
                e++;
                continue
            }
            h(a[d]);
            h(c[e]);
            d++;
            e++
        }
        for (var i = d; i < a.length; i++)
            h(a[i]);
        for (var j = e; j < c.length; j++)
            h(c[j]);
        return g
    }
    function h(a) {
        return b("relay-runtime").getRelayHandleKey("pinned_comment_events", a, null)
    }
    function i(a, b, c) {
        return (a = a.getLinkedRecords(h(b), c)) != null ? a : []
    }
    function c(a, b, c, d) {
        a.setLinkedRecords(i(a, b, d).filter(function(a) {
            return (a == null ? void 0 : a.getValue("id")) !== c
        }), h(b));
        return
    }
}
), null);
__d("RelayFBConsoleLog", ["requireCond", "cr:1121434"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("cr:1121434") != null ? b("cr:1121434")() : null;
    c = a;
    e.exports = c
}
), null);
__d("react-relay/ReactRelayContext", ["react", "relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    a = g || b("react");
    c = b("relay-runtime").__internal.createRelayContext;
    e.exports = c(a)
}
), null);
__d("relay-experimental/useRelayEnvironment", ["invariant", "react-relay/ReactRelayContext", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    c = h || b("react");
    var i = c.useContext;
    function a() {
        var a = i(b("react-relay/ReactRelayContext"));
        a != null || g(0, 21945);
        return a.environment
    }
    e.exports = a
}
), null);
__d("RelayFBEnvironmentActorID", ["invariant", "relay-experimental/useRelayEnvironment"], (function(a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
        a = a.options;
        a != null && a.actorID != null || g(0, 20185);
        typeof a.actorID === "string" || g(0, void 0);
        return a.actorID
    }
    function a() {
        var a = b("relay-experimental/useRelayEnvironment")();
        return h(a)
    }
    e.exports = {
        getActorID: h,
        useActorID: a
    }
}
), null);
__d("RelayFBGCScheduler", ["JSScheduler"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        b("JSScheduler").scheduleLoggingPriCallback(a)
    }
}
), null);
__d("BizKitNotificationsThinClientConnectionHandler", ["relay-runtime", "unrecoverableViolation", "warning"], (function(a, b, c, d, e, f) {
    "use strict";
    f.update = a;
    f.getConnection = c;
    f.buildConnectionEdge = k;
    var g = "bizkit_notifications_thin_client"
      , h = "id"
      , i = function(a) {
        return a == null ? void 0 : (a = a.getLinkedRecord("notif")) == null ? void 0 : a.getValue(h)
    }
      , j = "__connection_next_edge_index";
    function a(a, c) {
        var d, e = a.get(c.dataID);
        if (!e)
            return;
        var f = b("relay-runtime").ConnectionInterface.get()
          , g = f.EDGES
          , h = f.END_CURSOR
          , i = f.HAS_NEXT_PAGE
          , o = f.HAS_PREV_PAGE
          , p = f.PAGE_INFO
          , q = f.PAGE_INFO_TYPE;
        f = f.START_CURSOR;
        var r = e.getLinkedRecord(c.fieldKey)
          , s = r && r.getLinkedRecord(p);
        if (!r) {
            e.setValue(null, c.handleKey);
            return
        }
        var t = b("relay-runtime").generateClientID(e.getDataID(), c.handleKey)
          , u = e.getLinkedRecord(c.handleKey);
        d = (d = u) != null ? d : a.get(t);
        var v = d && d.getLinkedRecord(p);
        if (!d) {
            var w = a.create(t, r.getType());
            w.setValue(0, j);
            w.copyFieldsFrom(r);
            t = r.getLinkedRecords(g);
            if (t) {
                var x = b("relay-runtime").ConnectionInterface.get()
                  , y = x.NODE;
                t = t.reduce(function(b, c) {
                    if (!c)
                        return b;
                    var d = c.getLinkedRecord(y);
                    d = d == null ? void 0 : d.getType();
                    return d === "NotifPageCachedNotificationRow" ? b : b.concat(k(a, w, c))
                }, []);
                w.setLinkedRecords(t, g)
            }
            e.setLinkedRecord(w, c.handleKey);
            v = a.create(b("relay-runtime").generateClientID(w.getDataID(), p), q);
            v.setValue(!1, i);
            v.setValue(!1, o);
            v.setValue(null, h);
            v.setValue(null, f);
            s && v.copyFieldsFrom(s);
            w.setLinkedRecord(v, p)
        } else {
            u == null && e.setLinkedRecord(d, c.handleKey);
            var z = d;
            x = r.getLinkedRecords(g);
            x && (x = x.map(function(b) {
                return k(a, z, b)
            }));
            t = z.getLinkedRecords(g);
            q = z.getLinkedRecord(p);
            z.copyFieldsFrom(r);
            t && z.setLinkedRecords(t, g);
            q && z.setLinkedRecord(q, p);
            u = [];
            e = c.args;
            if (t && x)
                if (e.after != null)
                    if (v && e.after === v.getValue(h)) {
                        d = new Set();
                        l(t, u, d);
                        l(x, u, d)
                    } else {
                        b("warning")(!1, "Relay: Unexpected after cursor `%s`, edges must be fetched from the end of the list (`%s`).", e.after, v && v.getValue(h));
                        return
                    }
                else if (e.before != null)
                    if (v && e.before === v.getValue(f)) {
                        r = new Set();
                        l(x, u, r);
                        l(t, u, r)
                    } else {
                        b("warning")(!1, "Relay: Unexpected before cursor `%s`, edges must be fetched from the beginning of the list (`%s`).", e.before, v && v.getValue(f));
                        return
                    }
                else {
                    q = m(t);
                    p = new Set();
                    n(x, u, q, p)
                }
            else
                x ? u = x : u = t;
            u != null && u !== t && z.setLinkedRecords(u, g);
            if (v && s)
                if (e.after == null && e.before == null)
                    v.copyFieldsFrom(s);
                else if (e.before != null || e.after == null && e.last) {
                    v.setValue(!!s.getValue(o), o);
                    c = s.getValue(f);
                    typeof c === "string" && v.setValue(c, f)
                } else if (e.after != null || e.before == null && e.first) {
                    v.setValue(!!s.getValue(i), i);
                    d = s.getValue(h);
                    typeof d === "string" && v.setValue(d, h)
                }
        }
    }
    function c(a, c, d) {
        c = b("relay-runtime").getRelayHandleKey(g, c, null);
        return a.getLinkedRecord(c, d)
    }
    function k(a, c, d) {
        if (d == null)
            return d;
        var e = b("relay-runtime").ConnectionInterface.get();
        e = e.EDGES;
        var f = c.getValue(j);
        if (!(typeof f === "number"))
            throw b("unrecoverableViolation")("CometNotificationsThinClientConnectionHandler: Expected edgeIndex to be a number", "Notifications");
        e = b("relay-runtime").generateClientID(c.getDataID(), e, f);
        a = a.create(e, d.getType());
        a.copyFieldsFrom(d);
        c.setValue(f + 1, j);
        return a
    }
    function l(a, c, d) {
        var e = b("relay-runtime").ConnectionInterface.get();
        e = e.NODE;
        for (var f = 0; f < a.length; f++) {
            var g = a[f];
            if (!g)
                continue;
            var h = g.getLinkedRecord(e);
            h = h && h.getDataID();
            if (h != null) {
                if (d.has(h))
                    continue;
                d.add(h)
            }
            c.push(g)
        }
    }
    function m(a) {
        var c = {}
          , d = b("relay-runtime").ConnectionInterface.get();
        d = d.NODE;
        for (var e = 0; e < a.length; e++) {
            var f = a[e];
            if (!f)
                continue;
            f = f.getLinkedRecord(d);
            var g = f && f.getType();
            if (g === "NotifPageNotificationRow") {
                g = i(f);
                typeof g === "string" && (c[g] = f)
            }
        }
        return c
    }
    function n(a, c, d, e) {
        var f = b("relay-runtime").ConnectionInterface.get();
        f = f.NODE;
        for (var g = 0; g < a.length; g++) {
            var h = a[g];
            if (!h)
                continue;
            var j = h.getLinkedRecord(f)
              , k = j && j.getDataID();
            if (k != null) {
                if (e.has(k))
                    continue;
                e.add(k)
            }
            k = j == null ? void 0 : j.getType();
            var l = i(j);
            if (j && k === "NotifPageCachedNotificationRow") {
                if (typeof l === "string") {
                    k = d[l];
                    k && (k.copyFieldsFrom(j),
                    h.setLinkedRecord(k, f),
                    c.push(h))
                }
            } else
                c.push(h)
        }
    }
}
), null);
__d("UFI2CommentsConnectionHandler", ["BanzaiODS", "RelayFBConnectionHandler_UNSTABLE", "gkx", "relay-runtime", "warning"], (function(a, b, c, d, e, f) {
    "use strict";
    f.update = a;
    f.getConnection = c;
    f.unstable_getAllConnectionsWithKey = d;
    var g = "ufi2_comments"
      , h = "__connection_next_edge_index"
      , i = "ufi2_connection_generation";
    function a(a, c) {
        var d, e = a.get(c.dataID);
        if (!e)
            return;
        var f = b("relay-runtime").ConnectionInterface.get()
          , g = f.EDGES
          , k = f.END_CURSOR
          , l = f.HAS_NEXT_PAGE
          , m = f.HAS_PREV_PAGE
          , n = f.PAGE_INFO
          , o = f.PAGE_INFO_TYPE;
        f = f.START_CURSOR;
        var p = e.getLinkedRecord(c.fieldKey)
          , q = p && p.getLinkedRecord(n);
        if (!p) {
            e.setValue(null, c.handleKey);
            return
        }
        var r = b("relay-runtime").generateClientID(e.getDataID(), c.handleKey)
          , s = e.getLinkedRecord(c.handleKey);
        d = (d = s) != null ? d : a.get(r);
        var t = d && d.getLinkedRecord(n);
        if (!d) {
            var u = a.create(r, p.getType());
            u.setValue(0, i);
            u.setValue(0, h);
            u.copyFieldsFrom(p);
            r = p.getLinkedRecords(g);
            r && (r = r.map(function(c) {
                return b("relay-runtime").ConnectionHandler.buildConnectionEdge(a, u, c)
            }),
            u.setLinkedRecords(r, g));
            e.setLinkedRecord(u, c.handleKey);
            t = a.create(b("relay-runtime").generateClientID(u.getDataID(), n), o);
            t.setValue(!1, l);
            t.setValue(!1, m);
            t.setValue(null, k);
            t.setValue(null, f);
            q && t.copyFieldsFrom(q);
            u.setLinkedRecord(t, n)
        } else {
            s == null && e.setLinkedRecord(d, c.handleKey);
            var v = d;
            r = p.getLinkedRecords(g);
            r && (r = r.map(function(c) {
                return b("relay-runtime").ConnectionHandler.buildConnectionEdge(a, v, c)
            }));
            o = v.getLinkedRecords(g);
            s = v.getLinkedRecord(n);
            v.copyFieldsFrom(p);
            o && v.setLinkedRecords(o, g);
            s && v.setLinkedRecord(s, n);
            e = [];
            d = c.args;
            if (t != null && d.after == null && d.before == null) {
                p = t.getValue(f);
                s = t.getValue(k);
                n = t.getValue(l);
                c = t.getValue(m);
                b("BanzaiODS").bumpFraction(2507, "ufi_connection_generation_incremented", b("gkx")("708253") ? "comet" : "blue", 0, 1);
                if (p != null || s != null || n !== !0 && c !== !0) {
                    b("BanzaiODS").bumpFraction(2507, "ufi_connection_generation_incremented", b("gkx")("708253") ? "comet" : "blue", 1, 0);
                    s = (p = Number(v.getValue(i))) != null ? p : 0;
                    v.setValue(s + 1, i)
                }
            }
            if (o && r)
                if (d.after != null)
                    if (t && d.after === t.getValue(k)) {
                        n = new Set();
                        j(o, e, n);
                        j(r, e, n)
                    } else {
                        b("warning")(!1, "Relay: Unexpected after cursor `%s`, edges must be fetched from the end of the list (`%s`).", d.after, t && t.getValue(k));
                        return
                    }
                else if (d.before != null)
                    if (t && d.before === t.getValue(f)) {
                        c = new Set();
                        j(r, e, c);
                        j(o, e, c)
                    } else {
                        b("warning")(!1, "Relay: Unexpected before cursor `%s`, edges must be fetched from the beginning of the list (`%s`).", d.before, t && t.getValue(f));
                        return
                    }
                else
                    e = r;
            else
                r ? e = r : e = o;
            e != null && e !== o && v.setLinkedRecords(e, g);
            if (t && q)
                if (d.after == null && d.before == null)
                    t.copyFieldsFrom(q);
                else if (d.before != null || d.after == null && d.last) {
                    t.setValue(!!q.getValue(m), m);
                    p = q.getValue(f);
                    typeof p === "string" && t.setValue(p, f)
                } else if (d.after != null || d.before == null && d.first) {
                    t.setValue(!!q.getValue(l), l);
                    s = q.getValue(k);
                    typeof s === "string" && t.setValue(s, k)
                }
        }
    }
    function c(a, c, d) {
        c = b("relay-runtime").getRelayHandleKey(g, c, null);
        return a.getLinkedRecord(c, d)
    }
    function d(a, c, d) {
        return b("RelayFBConnectionHandler_UNSTABLE").unstable_getAllConnectionsWithKey(a, c, d, g)
    }
    function j(a, c, d) {
        var e = b("relay-runtime").ConnectionInterface.get();
        e = e.NODE;
        for (var f = 0; f < a.length; f++) {
            var g = a[f];
            if (!g)
                continue;
            var h = g.getLinkedRecord(e);
            h = h && h.getDataID();
            if (h != null) {
                if (d.has(h))
                    continue;
                d.add(h)
            }
            c.push(g)
        }
    }
}
), null);
__d("RelayFBHandlerProvider", ["BizKitNotificationsThinClientConnectionHandler", "UFI2CommentsConnectionHandler", "relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        switch (a) {
        case "connection":
            return b("relay-runtime").ConnectionHandler;
        case "ufi2_comments":
            return b("UFI2CommentsConnectionHandler");
        case "bizkit_notifications_thin_client":
            return b("BizKitNotificationsThinClientConnectionHandler");
        case "deleteRecord":
            return b("relay-runtime").MutationHandlers.DeleteRecordHandler;
        case "deleteEdge":
            return b("relay-runtime").MutationHandlers.DeleteEdgeHandler;
        case "appendEdge":
            return b("relay-runtime").MutationHandlers.AppendEdgeHandler;
        case "prependEdge":
            return b("relay-runtime").MutationHandlers.PrependEdgeHandler;
        case "appendNode":
            return b("relay-runtime").MutationHandlers.AppendNodeHandler;
        case "prependNode":
            return b("relay-runtime").MutationHandlers.PrependNodeHandler
        }
        throw new Error("RelayFBHandlerProvider: No handler defined for `" + a + "`.")
    }
}
), null);
__d("RelayFBModuleLoader", ["invariant", "replaceTransportMarkers"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.get = a;
    f.load = c;
    f.read = d;
    f.getModuleReference = j;
    var h = new Map();
    function a(a) {
        a = j(a);
        return a.getModuleIfRequired()
    }
    function c(a) {
        a = j(a);
        return i(a)
    }
    function d(b) {
        b = j(b);
        var a = b.getModuleIfRequired();
        if (a == null)
            throw i(b);
        return a
    }
    function i(a) {
        var b = a.getModuleId()
          , c = h.get(b);
        c == null && (c = a.load()["finally"](function() {
            h["delete"](b)
        }),
        h.set(b, c));
        c.displayName = "3DModule(" + b + ")";
        return c
    }
    function j(a) {
        (a == null || typeof a !== "object") && g(0, 17188, a);
        if (typeof a.getModuleId === "function" && typeof a.getModuleIfRequired === "function" && typeof a.load === "function")
            return a;
        var c = {
            module: babelHelpers["extends"]({}, a)
        };
        b("replaceTransportMarkers")({
            relativeTo: null
        }, c, "module");
        c = c.module;
        c != null && typeof c === "object" && typeof c.getModuleId === "function" && typeof c.getModuleIfRequired === "function" && typeof c.preload === "function" && typeof c.load === "function" || g(0, 17189, JSON.stringify(a));
        return c
    }
}
), null);
__d("RelayFBOperationLoader", ["Promise", "RelayFBModuleLoader"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        get: function(a) {
            return a == null || typeof a !== "object" ? null : b("RelayFBModuleLoader").get(a)
        },
        load: function(a) {
            return a == null || typeof a !== "object" ? b("Promise").resolve(null) : b("RelayFBModuleLoader").load(a)
        }
    };
    c = a;
    e.exports = c
}
), null);
__d("RelayFBScheduler", ["ReactDOMComet"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        cancel: function() {},
        schedule: function(a) {
            b("ReactDOMComet").unstable_batchedUpdates(a);
            return ""
        }
    };
    c = a;
    e.exports = c
}
), null);
__d("processRelayPrefetchURIsPayload", ["ExecutionEnvironment", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        if (!b("ExecutionEnvironment").canUseDOM)
            return;
        if (b("gkx")("1766003"))
            return;
        a.forEach(function(a) {
            if (typeof a === "string") {
                var b = new Image();
                b.src = a
            }
        })
    }
}
), null);
__d("processRelaySRPayload", ["HasteResponse", "ifRequireable"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c) {
        var d = a.ddd;
        if (!d) {
            c && c();
            return
        }
        var e = function() {
            return b("HasteResponse").handle(d, c)
        };
        b("ifRequireable")("JSScheduler", function(a) {
            return a.runWithPriority(a.priorities.unstable_UserBlocking, e)
        }, e)
    }
}
), null);
__d("withLive", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
        var c = a.metadata;
        c = c.live;
        if (c != null && typeof c === "object") {
            c = h(a);
            a = i(a);
            c == null || a == null || g(0, 45, c, a);
            c != null || a != null || g(0, 46);
            if (c != null) {
                var d = b.poll;
                d == null || d === c || g(0, 47, d, c);
                return babelHelpers["extends"]({}, b, {
                    poll: c
                })
            }
            if (a != null) {
                d = b.liveConfigId;
                d == null || d === a || g(0, 48, d, a);
                return babelHelpers["extends"]({}, b, {
                    liveConfigId: a
                })
            }
        }
        return b
    }
    function h(a) {
        a = a.metadata;
        a = a.live;
        if (a != null && typeof a === "object") {
            a.polling_interval == null || typeof a.polling_interval === "number" || g(0, 49);
            return a.polling_interval
        }
        return null
    }
    function i(a) {
        a = a.metadata;
        a = a.live;
        if (a != null && typeof a === "object") {
            a.config_id == null || typeof a.config_id === "string" || g(0, 50);
            return a.config_id
        }
        return null
    }
    e.exports = a
}
), null);
__d("createRelayFBNetwork", ["Promise", "DTSG", "gkx", "killswitch", "processRelayPrefetchURIsPayload", "processRelaySRPayload", "relay-runtime", "requireCond", "withLive", "cr:1110430"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    b("cr:1110430");
    var g = b("killswitch")("RELAY_BLOCK_NETWORK_ON_3D_STATIC_RESOURCES") === !1 && !b("gkx")("708253");
    function h(a, c, d, e) {
        if (!a.extensions || a.extensions.__resources_processed) {
            c && c();
            return
        }
        a.extensions.__resources_processed = !0;
        if (a.extensions.__sr_unprocessed)
            throw b("relay-runtime").RelayError.create("GraphQLError", "Fatal Error: Found unprocessed static resource payload");
        var f = a.extensions.prefetch_uris;
        f != null && Array.isArray(f) && b("processRelayPrefetchURIsPayload")(f);
        f = a.extensions.prefetch_dash_segments;
        f != null && Array.isArray(f) && d && d(f);
        d = a.extensions.sr_payload;
        d != null && typeof d === "object" ? b("processRelaySRPayload")(d, c) : c && c();
        d = (f = a.extensions) == null ? void 0 : f.dtsgToken;
        d && typeof d === "string" && b("DTSG").setToken(d);
        if (e != null) {
            f = (c = a.extensions) == null ? void 0 : c.prefetch_comet_routing;
            if (f != null && typeof f === "object") {
                d = f.data;
                a = f.uris;
                (d != null || a != null) && e(a, d)
            }
        }
    }
    function i(a, c, d) {
        var e;
        e = (e = a.extensions) == null ? void 0 : e.sr_payload;
        if (e != null && typeof e === "object")
            return new (b("Promise"))(function(b) {
                h(a, function() {
                    b(a)
                }, c, d)
            }
            );
        h(a, null, c, d);
        return a
    }
    function a(a, c, d, e) {
        var f = b("relay-runtime").Network.create(a, c);
        return {
            execute: function(a, c, j, k, l) {
                j = b("withLive")(a, j);
                return g ? f.execute(a, c, j, k, l).mergeMap(function(a) {
                    return Array.isArray(a) ? a.map(function(a) {
                        return i(a, d, e)
                    }) : i(a, d, e)
                }) : f.execute(a, c, j, k, l)["do"]({
                    next: function(a) {
                        Array.isArray(a) ? a.forEach(function(a) {
                            h(a, null, d, e)
                        }) : h(a, null, d, e)
                    }
                })
            }
        }
    }
}
), null);
__d("forEachObject", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = Object.prototype.hasOwnProperty;
    function a(a, b, c) {
        for (var d in a) {
            var e = d;
            g.call(a, e) && b.call(c, a[e], e, a)
        }
    }
}
), null);
__d("getRelayAPIRequestHandler", ["ifRequireable", "requireCond", "cr:696703"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        var c = a;
        if (b("cr:696703")) {
            var d = b("cr:696703").getUserBlockingRunAtCurrentPriCallbackScheduler_DO_NOT_USE();
            c = function() {
                for (var c = arguments.length, e = new Array(c), f = 0; f < c; f++)
                    e[f] = arguments[f];
                d(b("ifRequireable")("JSTracing", function(b) {
                    return b.wrap(function() {
                        return a.apply(void 0, e)
                    }, "getRelayAPIRequestHandler")
                }, function() {
                    return function() {
                        return a.apply(void 0, e)
                    }
                }))
            }
            ;
            c.parseStreaming = a.parseStreaming
        }
        return c
    }
}
), null);
__d("RelayAPIRequest", ["invariant", "NetworkStatus", "URI", "XHRHttpError", "XHRRequest", "createChunkedResponseParser", "forEachObject", "getRelayAPIRequestHandler", "getSameOriginTransport", "warning"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function i(a) {
        return a === b("XHRHttpError").HTTP_TRANSPORT_ERROR || a === b("XHRHttpError").HTTP_SERVER_ERROR
    }
    a = function() {
        function a(a, c, d) {
            this.$1 = !1,
            this.setURI(a),
            this.setMethod("POST"),
            this.setTransportBuilder(b("getSameOriginTransport")),
            this.$14 = c,
            this.$15 = d
        }
        var c = a.prototype;
        c.setURI = function(a) {
            this.$1 && g(0, 2124);
            this.$2 = new (h || (h = b("URI")))(a);
            return this
        }
        ;
        c.setMethod = function(a) {
            this.$1 && g(0, 2125);
            this.$3 = a;
            return this
        }
        ;
        c.setData = function(a) {
            this.$1 && g(0, 2126);
            this.$4 = a;
            return this
        }
        ;
        c.setRawData = function(a) {
            this.$1 && g(0, 2127);
            this.$5 = a;
            return this
        }
        ;
        c.setTrackingName = function(a) {
            this.$8 = a;
            return this
        }
        ;
        c.setPerformanceLogger = function(a) {
            this.$16 = a;
            return this
        }
        ;
        c.setRequestHeaders = function(a) {
            this.$1 && g(0, 2128);
            this.$6 = a;
            return this
        }
        ;
        c.setTransportBuilder = function(a) {
            var b = this;
            this.$1 && g(0, 2129);
            var c = a;
            this.$9 = function() {
                var a = c();
                a.setTrackingName && a.setTrackingName(b.$8);
                a.setPerformanceLogger && b.$16 && a.setPerformanceLogger(b.$16);
                return a
            }
            ;
            return this
        }
        ;
        c.setResponseFilter = function(a) {
            this.$1 && g(0, 2130);
            this.$10 = a;
            return this
        }
        ;
        c.setResponseChunkHandler = function(a) {
            this.$1 && g(0, 2131);
            this.$11 = a;
            return this
        }
        ;
        c.setErrorHandler = function(a) {
            this.$1 && g(0, 2132);
            this.$12 = a;
            return this
        }
        ;
        c.setTimeoutHandler = function(a) {
            this.$1 && g(0, 2133);
            this.$13 = a;
            return this
        }
        ;
        c.setSkipRetry = function(a) {
            this.$7 = a;
            return this
        }
        ;
        c.send = function() {
            var a = this;
            this.$1 && g(0, 2134);
            this.$1 = !0;
            if (!this.$2 || !this.$2.toString()) {
                this.$12 && this.$12({
                    errorCode: "HTTP_CLIENT_ERROR",
                    errorType: "HTTP",
                    errorMsg: "No uri provided - make sure RelayAPIConfig is properly setup."
                });
                return {
                    abort: function() {}
                }
            }
            var c, d = 0, e = 0, f, h = function() {
                return !a.$7 && d <= a.$14.length
            }, j = function() {
                var b = a.$14[d - 1];
                b = e + b;
                var f = setTimeout(function() {
                    c = k()
                }, b - Date.now());
                c = {
                    abort: function() {
                        clearTimeout(f)
                    }
                }
            }, k = function() {
                d++;
                e = Date.now();
                var g;
                a.$11 && (g = b("createChunkedResponseParser")(a.$11, a.$10),
                g = b("getRelayAPIRequestHandler")(g));
                var k = a.$12
                  , l = function(a) {
                    h() && i(a.errorCode) ? (b("warning")(!1, "RelayAPIRequest: Transient HTTP error, retrying. %s %s %s", a.errorType || "", a.errorCode || "", a.errorMsg || ""),
                    !b("NetworkStatus").isOnline() ? (f = b("NetworkStatus").onChange(function(a) {
                        a = a.online;
                        a && (j(),
                        f.remove())
                    }),
                    c = {
                        abort: function() {
                            f.remove()
                        }
                    }) : j()) : k && k(a)
                }
                  , m = a.$13
                  , n = function() {
                    h() ? (b("warning")(!1, "RelayAPIRequest: HTTP timeout, retrying."),
                    j()) : m && m()
                }
                  , o = new (b("XHRRequest"))(a.$2).setMethod(a.$3).setData(a.$4).setTransportBuilder(a.$9).setErrorHandler(l).setResponseHandler(g).setTimeout(a.$15).setTimeoutHandler(n);
                a.$5 != null && o.setRawData(a.$5);
                a.$6 && b("forEachObject")(a.$6, function(a, b) {
                    o.setRequestHeader(b, a)
                });
                o.send();
                return o
            };
            c = k();
            return {
                abort: function() {
                    c && c.abort()
                }
            }
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("RelayRuntime", ["relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("relay-runtime")
}
), null);
__d("RelayGraphQLRequestUtils", ["CSRFGuard", "XHRHttpError", "RelayRuntime"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("RelayRuntime").RelayError;
    a = {
        createErrorFromPayload: function(a) {
            if (typeof a === "object")
                if (a.code || a.description) {
                    var b;
                    b = g.create("GraphQLError", "GraphQL server responded with error %s: %s\n%s", a.code, a.description, (b = a.debug_info) != null ? b : "")
                } else
                    b = g.create("GraphQLError", "GraphQL server responded with error: %s", JSON.stringify(a));
            else
                b = g.create("GraphQLError", "GraphQL server responded with an error: %s", a);
            b = b;
            b.source = a;
            typeof a === "object" && (b.code = a.code,
            b.description = a.description,
            b.summary = a.summary,
            b.debug_info = a.debug_info);
            return b
        },
        createErrorFromXHR: function(a, c) {
            var d;
            a.errorCode === b("XHRHttpError").HTTP_TRANSPORT_ERROR ? d = g.createWarning("NetworkTransportError", c) : a.errorCode === b("XHRHttpError").HTTP_CLIENT_ERROR && a.errorMsg && a.errorMsg.match(/OAuthException/) ? d = g.create("NetworkOAuthError", c) : d = g.create("NetworkRequestError", c);
            d.source = a;
            return d
        },
        getRelayAPIConfigHeaders: function(a, b, c) {
            a = babelHelpers["extends"]({}, a);
            b && (a["Content-Encoding"] = b);
            c && (a["User-Agent"] = c);
            return a
        },
        parsePayload: function(a) {
            if (b("CSRFGuard").exists(a)) {
                var c = h(b("CSRFGuard").clean(a));
                if (Object.prototype.hasOwnProperty.call(c, "data") || !Object.prototype.hasOwnProperty.call(c, "error"))
                    return c;
                var d = g.createWarning("GraphQLXControllerError", "GraphQL server responded with error %s: %s\n%s", c.error, c.errorSummary, c.errorDescription);
                d = d;
                d.source = c;
                d.code = c.error;
                d.description = c.errorDescription;
                d.summary = c.errorSummary;
                throw d
            }
            return h(a)
        }
    };
    function h(a) {
        try {
            return JSON.parse(a)
        } catch (b) {
            throw g.create("JSONParseError", "Response contained invalid JSON.\nReason: %s\n%s", b.message, a)
        }
    }
    e.exports = a
}
), null);
__d("RelayPrefetchedResponseProvider", ["RelayGraphQLRequestUtils", "RelayPrefetchedStreamCache", "RelayRuntime"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("RelayRuntime").Observable;
    a = {
        get: function(a, c, d, e, f) {
            return g.create(function(f) {
                var g = function(a) {
                    if (!a) {
                        f.complete();
                        return
                    }
                    if (a.errors)
                        for (var c = a.errors, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                            var g;
                            if (d) {
                                if (e >= c.length)
                                    break;
                                g = c[e++]
                            } else {
                                e = c.next();
                                if (e.done)
                                    break;
                                g = e.value
                            }
                            g = g;
                            if (g.severity === "CRITICAL") {
                                f.error(b("RelayGraphQLRequestUtils").createErrorFromPayload(g));
                                return
                            }
                        }
                    f.next(a)
                }
                  , h = b("RelayPrefetchedStreamCache").subscribe(a, c, d, {
                    complete: f.complete,
                    error: function(a) {
                        return f.complete()
                    },
                    next: g,
                    start: function() {}
                }, e);
                return function() {
                    h != null && (h.unsubscribe(),
                    h = null),
                    b("RelayPrefetchedStreamCache").clear(a, c, d)
                }
            })
        }
    };
    e.exports = a
}
), null);
__d("getAnalyticsTags", ["relay-runtime", "requireWeak"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a() {
        var a = [];
        b("requireWeak")("QPLUserFlow", function(b) {
            b = b.getActiveFlowIDs();
            b.length > 0 && a.push("qpl_active_flow_ids=" + b.sort().join(","))
        });
        return b("relay-runtime").Observable.from(a)
    }
}
), null);
__d("createRelayFBNetworkFetch", ["invariant", "RelayAPIConfig", "RelayAPIRequest", "RelayGraphQLRequestUtils", "RelayPrefetchedResponseProvider", "getAnalyticsTags", "getAsyncParams", "getCrossOriginTransport", "getSameOriginTransport", "nullthrows", "RelayRuntime"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = (d = b("RelayRuntime")).Observable
      , i = d.RelayError
      , j = d.RelayProfiler
      , k = d.RelayFeatureFlags;
    function l(a) {
        return a.operationKind === "mutation"
    }
    function m(a) {
        return a.operationKind === "query"
    }
    function n(b, c) {
        a.FormData != null || g(0, 19002);
        var d = new FormData();
        for (var e in b)
            Object.prototype.hasOwnProperty.call(b, e) && d.append(e, b[e]);
        for (var f in c)
            Object.prototype.hasOwnProperty.call(c, f) && d.append(f, c[f]);
        return d
    }
    function o(a) {
        a = a.cacheID ? a.cacheID : a.id;
        a != null || g(0, 22754);
        return a
    }
    function c(a) {
        var c = a.graphURI
          , d = a.transportBuilder
          , e = a.getAdditionalData
          , f = a.getAdditionalHeaders
          , h = a.queryResponseCache
          , i = a.whitelistMutationsForResponseCache
          , j = a.liveQueryFetchFn
          , l = a.wrapObservableFn
          , m = a.accessToken
          , n = a.actorID
          , o = a.customHeaders
          , u = a.fetchTimeout
          , v = a.getAnalyticsTags
          , w = v === void 0 ? b("getAnalyticsTags") : v
          , x = a.retryDelays
          , y = a.userAgent
          , z = a.xhrEncoding
          , A = a.useXController
          , B = a.tokenProxy;
        return function(a, v, C, D, E) {
            var F, G, H, I, J, K, L;
            F = (F = c) != null ? F : b("RelayAPIConfig").graphURI;
            var M = h;
            G = (G = n) != null ? G : b("RelayAPIConfig").actorID;
            H = (H = m) != null ? H : b("RelayAPIConfig").accessToken;
            I = (I = A) != null ? I : b("RelayAPIConfig").useXController;
            k.ENABLE_FRIENDLY_QUERY_NAME_GQL_URL && F.addQueryData({
                __query: a.name
            });
            J = (J = d) != null ? J : I ? b("getSameOriginTransport") : b("RelayAPIConfig").withCredentials ? b("getCrossOriginTransport").withCredentials : b("getCrossOriginTransport");
            I = e ? e() : I ? {
                av: G
            } : {
                access_token: H
            };
            K = f ? f() : b("RelayGraphQLRequestUtils").getRelayAPIConfigHeaders((K = o) != null ? K : b("RelayAPIConfig").customHeaders, (K = z) != null ? K : b("RelayAPIConfig").xhrEncoding, (K = y) != null ? K : b("RelayAPIConfig").userAgent);
            var N = {
                queryName: a.name,
                usedCache: !1,
                usedPrefetcher: !1,
                serverTimestamp: null,
                transactionId: C.transactionId
            };
            L = C == null ? void 0 : (L = C.metadata) == null ? void 0 : L.performanceLogger;
            var O = null;
            C.liveConfigId != null && (j != null || g(0, 17355, C.liveConfigId),
            O = j(a, v, {
                actor_id: G,
                access_token: H,
                config_id: C.liveConfigId
            }));
            J = t(F, J, K, a, v, D, I, w, (H = x) != null ? H : b("RelayAPIConfig").retryDelays, (F = u) != null ? F : b("RelayAPIConfig").fetchTimeout, B, L);
            M && (J = s(J, a, v, M, i));
            K = q(a, v, N, M, C, G, E, L);
            D = O ? K.concat(O) : K;
            if (M) {
                I = r(a, v, N, C, M, E);
                D = D.ifEmpty(I)
            }
            D = D.ifEmpty(J);
            H = l != null ? l(D) : D;
            return p(N, H)
        }
    }
    function p(a, b) {
        var c;
        return b["do"]({
            start: function() {
                c = j.profile("fetchRelayQuery", a)
            },
            next: function(b) {
                var d;
                if (!Array.isArray(b) && ((d = b.extensions) == null ? void 0 : d.server_metadata) != null && ((d = b.extensions.server_metadata) == null ? void 0 : d.request_start_time_ms) != null && ((d = b.extensions.server_metadata) == null ? void 0 : d.time_at_flush_ms) != null) {
                    d = b.extensions.server_metadata;
                    b = d.request_start_time_ms;
                    d = d.time_at_flush_ms;
                    a.serverTimestamp = {
                        startTime: Number(b),
                        endTime: Number(d)
                    }
                }
                c.stop()
            },
            error: function(a) {
                c.stop(a)
            }
        })
    }
    function q(a, c, d, e, f, i, j, k) {
        if (!m(a))
            return h.create(function(a) {
                return a.complete()
            });
        var l = o(a);
        f = f != null && f.metadata != null && f.metadata.prefetchedResponseProvider || void 0;
        f != null && (typeof f.get === "function" || g(0, 2666),
        f = f);
        f = (f = f) != null ? f : b("RelayPrefetchedResponseProvider");
        f = f.get(i, l, c, a.name, k);
        return f.map(function(a) {
            j != null && j({
                prefetched: !0
            });
            d.usedPrefetcher = !0;
            e && e.set(l, c, a);
            return a
        })
    }
    function r(a, b, c, d, e, f) {
        return h.create(function(g) {
            if (m(a) && !d.force) {
                var h = e.get(o(a), b);
                h && (f != null && f({
                    cached: !0
                }),
                c.usedCache = !0,
                g.next(h))
            }
            g.complete()
        })
    }
    function s(a, b, c, d, e) {
        return a["do"]({
            next: function(a) {
                if (l(b)) {
                    var f = b.name;
                    (e == null || !e[f]) && d.clear()
                } else
                    Array.isArray(a) || d.set(o(b), c, a)
            }
        })
    }
    function t(a, c, d, e, f, g, j, k, m, o, p, q) {
        p === void 0 && (p = !1);
        return h.create(function(r) {
            (!l(e) || k == null) && (k = function() {
                return h.from(null)
            }
            ),
            k().subscribe({
                next: function(h) {
                    var k = new (b("RelayAPIRequest"))(a,m,o).setMethod("POST").setSkipRetry(l(e)).setTrackingName("RelayFBNetwork_" + e.name).setPerformanceLogger(q).setTransportBuilder(c).setErrorHandler(function(a) {
                        var c;
                        r.error(b("RelayGraphQLRequestUtils").createErrorFromXHR(a, "Network request encountered error " + (((c = a.errorType) != null ? c : "") + " ") + (((c = a.errorCode) != null ? c : "") + ": " + ((c = a.errorMsg) != null ? c : ""))))
                    }).setTimeoutHandler(function() {
                        r.error(i.createWarning("NetworkTimeoutError", "Network request timed out. %s(%s): %s", e.name, e.id || "", JSON.stringify(f)))
                    }).setResponseChunkHandler(function(a, c, d) {
                        try {
                            c = b("RelayGraphQLRequestUtils").parsePayload(a)
                        } catch (a) {
                            return r.error(a)
                        }
                        if (!c)
                            return r.error(i.createWarning("EmptyResponseError", "Parsed network response is empty. %s(%s): %s", e.name, e.id || "", JSON.stringify(f)));
                        if (c.errors)
                            for (var a = c.errors, g = Array.isArray(a), h = 0, a = g ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                                var j;
                                if (g) {
                                    if (h >= a.length)
                                        break;
                                    j = a[h++]
                                } else {
                                    h = a.next();
                                    if (h.done)
                                        break;
                                    j = h.value
                                }
                                j = j;
                                if (j.severity === "CRITICAL")
                                    return r.error(b("RelayGraphQLRequestUtils").createErrorFromPayload(j))
                            }
                        r.next(c);
                        d && r.complete()
                    })
                      , s = babelHelpers["extends"]({}, j, b("getAsyncParams")("POST"), {
                        fb_api_caller_class: "RelayModern",
                        fb_api_req_friendly_name: e.name,
                        variables: JSON.stringify(f),
                        server_timestamps: !0
                    });
                    p && delete s.__csr;
                    e.id ? s.doc_id = e.id : s.doc = b("nullthrows")(e.text, "RelayFBNetwork: A query should have either an id or text, found neither.");
                    h != null && h.length > 0 && (s.fb_api_analytics_tags = JSON.stringify(h));
                    g != null ? k.setRawData(n(g, s)) : k.setData(s).setRequestHeaders(babelHelpers["extends"]({
                        "Content-Type": "application/x-www-form-urlencoded"
                    }, d));
                    return k.send().abort
                }
            })
        })
    }
    e.exports = c
}
), null);
__d("RelayRTIGraphQLSubscriptionTopicProvider", ["FBLogger", "RelayRuntime", "relay-runtime/query/GraphQLTag"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("RelayRuntime").getRequest
      , h = b("relay-runtime/query/GraphQLTag").isRequest;
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.registerProvider = function(a, c) {
            if (Object.prototype.hasOwnProperty.call(this.$1, a)) {
                b("FBLogger")("relay").mustfix("Multiple RTIGraphQLSubscription topic providers were registered for the query: %s", a);
                return
            }
            this.$1[a] = c
        }
        ;
        c.clearProvider = function(a) {
            Object.prototype.hasOwnProperty.call(this.$1, a) && delete this.$1[a]
        }
        ;
        c.registerProviderForQuery = function(a, c) {
            if (h(a) === !1) {
                b("FBLogger")("relay").blameToPreviousFile().warn("The `subscription` passed to `registerProvider()` must be a `ConcreteRequest`.");
                return
            }
            a = g(a);
            a = a.params.id;
            typeof a === "string" && this.registerProvider(a, c)
        }
        ;
        c.clearProviderForQuery = function(a) {
            a = g(a);
            a = a.params.id;
            typeof a === "string" && this.clearProvider(a)
        }
        ;
        c.getTopicForQuery = function(a, c) {
            var d = this.$1[a] || null;
            if (d == null)
                return null;
            var e = null;
            try {
                e = d(c)
            } catch (c) {
                b("FBLogger")("relay").catching(c).mustfix("TopicProvider for queryID %s threw an unexpected exception", a)
            }
            return (d = e) != null ? d : null
        }
        ;
        return a
    }();
    e.exports = new a()
}
), null);
__d("ActorURI", ["ActorURIConfig", "URI"], (function(a, b, c, d, e, f) {
    f.create = a;
    var g;
    function a(a, c) {
        return new (g || (g = b("URI")))(a).addQueryData(b("ActorURIConfig").PARAMETER_ACTOR, c)
    }
    c = b("ActorURIConfig").PARAMETER_ACTOR;
    f.PARAMETER_ACTOR = c
}
), null);
__d("ChannelClientID", ["MqttWebDeviceID", "uuid"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = (a = b("MqttWebDeviceID") == null ? void 0 : b("MqttWebDeviceID").clientID) != null ? a : b("uuid")();
    c = {
        getID: function() {
            return g
        }
    };
    e.exports = c
}
), null);
__d("CurrentLocale", ["LocaleInitialData"], (function(a, b, c, d, e, f) {
    a = {};
    a.get = function() {
        return b("LocaleInitialData").locale
    }
    ;
    c = a;
    e.exports = c
}
), null);
__d("GeneratedLoggerUtils", ["invariant", "Banzai", "getDataWithLoggerOptions"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = window.location.search.indexOf("showlog") > -1;
    function a(a, c, d, e) {
        c = b("getDataWithLoggerOptions")(c, e);
        b("Banzai").post(a, c, d);
        h
    }
    c = {
        log: a,
        serializeVector: function(a) {
            if (!a)
                return a;
            if (Array.isArray(a))
                return a;
            if (a.toArray) {
                var b = a;
                return b.toArray()
            }
            if (typeof a === "object" && a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"])
                return Array.from(a);
            g(0, 3874, a)
        },
        serializeMap: function(a) {
            if (!a)
                return a;
            if (a.toJS) {
                var b = a;
                return b.toJS()
            }
            if (typeof a === "object" && a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]) {
                b = a;
                var c = {};
                for (var b = b, d = Array.isArray(b), e = 0, b = d ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                    var f;
                    if (d) {
                        if (e >= b.length)
                            break;
                        f = b[e++]
                    } else {
                        e = b.next();
                        if (e.done)
                            break;
                        f = e.value
                    }
                    f = f;
                    c[f[0]] = f[1]
                }
                return c
            }
            if (Object.prototype.toString.call(a) === "[object Object]")
                return a;
            g(0, 3875, a)
        },
        checkExtraDataFieldNames: function(a, b) {
            Object.keys(a).forEach(function(a) {
                Object.prototype.hasOwnProperty.call(b, a) && g(0, 3876, a)
            })
        },
        warnForInvalidFieldNames: function(a, b, c, d) {},
        throwIfNull: function(a, b) {
            a || g(0, 3877, b);
            return a
        }
    };
    e.exports = c
}
), null);
__d("GraphQLSubscriptionsTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:GraphQLSubscriptionsLoggerConfig", this.$1, b("Banzai").BASIC, a)
        }
        ;
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:GraphQLSubscriptionsLoggerConfig", this.$1, b("Banzai").VITAL, a)
        }
        ;
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:GraphQLSubscriptionsLoggerConfig", this.$1, {
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
        c.setAppBackgrounded = function(a) {
            this.$1.app_backgrounded = a;
            return this
        }
        ;
        c.setAppState = function(a) {
            this.$1.app_state = a;
            return this
        }
        ;
        c.setAppID = function(a) {
            this.$1.appid = a;
            return this
        }
        ;
        c.setAppversion = function(a) {
            this.$1.appversion = a;
            return this
        }
        ;
        c.setAttemptCount = function(a) {
            this.$1.attempt_count = a;
            return this
        }
        ;
        c.setClientSampleWeight = function(a) {
            this.$1.client_sample_weight = a;
            return this
        }
        ;
        c.setClientUserID = function(a) {
            this.$1.client_userid = a;
            return this
        }
        ;
        c.setClienttime = function(a) {
            this.$1.clienttime = a;
            return this
        }
        ;
        c.setDebugData = function(a) {
            this.$1.debug_data = a;
            return this
        }
        ;
        c.setDeltaTime = function(a) {
            this.$1.delta_time = a;
            return this
        }
        ;
        c.setErrorRecoveryPolicyName = function(a) {
            this.$1.error_recovery_policy_name = a;
            return this
        }
        ;
        c.setErrorRetriesEnabled = function(a) {
            this.$1.error_retries_enabled = a;
            return this
        }
        ;
        c.setEvent = function(a) {
            this.$1.event = a;
            return this
        }
        ;
        c.setExceptionCategory = function(a) {
            this.$1.exception_category = a;
            return this
        }
        ;
        c.setExceptionData = function(a) {
            this.$1.exception_data = a;
            return this
        }
        ;
        c.setExceptionType = function(a) {
            this.$1.exception_type = a;
            return this
        }
        ;
        c.setFilterChain = function(a) {
            this.$1.filter_chain = a;
            return this
        }
        ;
        c.setForceLogContext = function(a) {
            this.$1.force_log_context = a;
            return this
        }
        ;
        c.setHandleType = function(a) {
            this.$1.handle_type = a;
            return this
        }
        ;
        c.setHeartbeatInterval = function(a) {
            this.$1.heartbeat_interval = a;
            return this
        }
        ;
        c.setHeartbeatSequenceID = function(a) {
            this.$1.heartbeat_sequence_id = a;
            return this
        }
        ;
        c.setIsemployee = function(a) {
            this.$1.isemployee = a;
            return this
        }
        ;
        c.setMqttClientCheckpoint = function(a) {
            this.$1.mqtt_client_checkpoint = a;
            return this
        }
        ;
        c.setMqttState = function(a) {
            this.$1.mqtt_state = a;
            return this
        }
        ;
        c.setMutationType = function(a) {
            this.$1.mutation_type = a;
            return this
        }
        ;
        c.setName = function(a) {
            this.$1.name = a;
            return this
        }
        ;
        c.setPublishCluster = function(a) {
            this.$1.publish_cluster = a;
            return this
        }
        ;
        c.setPublishID = function(a) {
            this.$1.publish_id = a;
            return this
        }
        ;
        c.setPublishTimeMs = function(a) {
            this.$1.publish_time_ms = a;
            return this
        }
        ;
        c.setQueryID = function(a) {
            this.$1.query_id = a;
            return this
        }
        ;
        c.setQueryParams = function(a) {
            this.$1.query_params = b("GeneratedLoggerUtils").serializeMap(a);
            return this
        }
        ;
        c.setRawclienttime = function(a) {
            this.$1.rawclienttime = a;
            return this
        }
        ;
        c.setReason = function(a) {
            this.$1.reason = a;
            return this
        }
        ;
        c.setResult = function(a) {
            this.$1.result = a;
            return this
        }
        ;
        c.setSessionID = function(a) {
            this.$1.session_id = a;
            return this
        }
        ;
        c.setShadowingPayloadCount = function(a) {
            this.$1.shadowing_payload_count = a;
            return this
        }
        ;
        c.setSubscriptionCall = function(a) {
            this.$1.subscription_call = a;
            return this
        }
        ;
        c.setSubscriptionLeg = function(a) {
            this.$1.subscription_leg = a;
            return this
        }
        ;
        c.setSubscriptionPayloadCount = function(a) {
            this.$1.subscription_payload_count = a;
            return this
        }
        ;
        c.setTimeSinceLastWindowShownMs = function(a) {
            this.$1.time_since_last_window_shown_ms = a;
            return this
        }
        ;
        c.setTopic = function(a) {
            this.$1.topic = a;
            return this
        }
        ;
        c.setTopicData = function(a) {
            this.$1.topic_data = b("GeneratedLoggerUtils").serializeMap(a);
            return this
        }
        ;
        return a
    }();
    c = {
        app_backgrounded: !0,
        app_state: !0,
        appid: !0,
        appversion: !0,
        attempt_count: !0,
        client_sample_weight: !0,
        client_userid: !0,
        clienttime: !0,
        debug_data: !0,
        delta_time: !0,
        error_recovery_policy_name: !0,
        error_retries_enabled: !0,
        event: !0,
        exception_category: !0,
        exception_data: !0,
        exception_type: !0,
        filter_chain: !0,
        force_log_context: !0,
        handle_type: !0,
        heartbeat_interval: !0,
        heartbeat_sequence_id: !0,
        isemployee: !0,
        mqtt_client_checkpoint: !0,
        mqtt_state: !0,
        mutation_type: !0,
        name: !0,
        publish_cluster: !0,
        publish_id: !0,
        publish_time_ms: !0,
        query_id: !0,
        query_params: !0,
        rawclienttime: !0,
        reason: !0,
        result: !0,
        session_id: !0,
        shadowing_payload_count: !0,
        subscription_call: !0,
        subscription_leg: !0,
        subscription_payload_count: !0,
        time_since_last_window_shown_ms: !0,
        topic: !0,
        topic_data: !0
    };
    e.exports = a
}
), null);
__d("RealtimeFrameworksCounterFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744251");
    c = b("FalcoLoggerInternal").create("realtime_frameworks_counter", a);
    e.exports = c
}
), null);
__d("RelayFBEnvironment", ["requireCond", "cr:1385201"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("cr:1385201");
    e.exports = a
}
), null);
__d("str2rstr", [], (function(a, b, c, d, e, f) {
    e.exports = a;
    function a(a) {
        var b = "", c, d;
        for (var e = 0; e < a.length; e++)
            c = a.charCodeAt(e),
            d = e + 1 < a.length ? a.charCodeAt(e + 1) : 0,
            55296 <= c && c <= 56319 && 56320 <= d && d <= 57343 && (c = 65536 + ((c & 1023) << 10) + (d & 1023),
            e++),
            c <= 127 ? b += String.fromCharCode(c) : c <= 2047 ? b += String.fromCharCode(192 | c >>> 6 & 31, 128 | c & 63) : c <= 65535 ? b += String.fromCharCode(224 | c >>> 12 & 15, 128 | c >>> 6 & 63, 128 | c & 63) : c <= 2097151 && (b += String.fromCharCode(240 | c >>> 18 & 7, 128 | c >>> 12 & 63, 128 | c >>> 6 & 63, 128 | c & 63));
        return b
    }
}
), null);
__d("md5", ["str2rstr"], (function(a, b, c, d, e, f) {
    e.exports = a;
    function g(a, b) {
        var c = a[0]
          , d = a[1]
          , e = a[2]
          , f = a[3];
        c = i(c, d, e, f, b[0], 7, -680876936);
        f = i(f, c, d, e, b[1], 12, -389564586);
        e = i(e, f, c, d, b[2], 17, 606105819);
        d = i(d, e, f, c, b[3], 22, -1044525330);
        c = i(c, d, e, f, b[4], 7, -176418897);
        f = i(f, c, d, e, b[5], 12, 1200080426);
        e = i(e, f, c, d, b[6], 17, -1473231341);
        d = i(d, e, f, c, b[7], 22, -45705983);
        c = i(c, d, e, f, b[8], 7, 1770035416);
        f = i(f, c, d, e, b[9], 12, -1958414417);
        e = i(e, f, c, d, b[10], 17, -42063);
        d = i(d, e, f, c, b[11], 22, -1990404162);
        c = i(c, d, e, f, b[12], 7, 1804603682);
        f = i(f, c, d, e, b[13], 12, -40341101);
        e = i(e, f, c, d, b[14], 17, -1502002290);
        d = i(d, e, f, c, b[15], 22, 1236535329);
        c = j(c, d, e, f, b[1], 5, -165796510);
        f = j(f, c, d, e, b[6], 9, -1069501632);
        e = j(e, f, c, d, b[11], 14, 643717713);
        d = j(d, e, f, c, b[0], 20, -373897302);
        c = j(c, d, e, f, b[5], 5, -701558691);
        f = j(f, c, d, e, b[10], 9, 38016083);
        e = j(e, f, c, d, b[15], 14, -660478335);
        d = j(d, e, f, c, b[4], 20, -405537848);
        c = j(c, d, e, f, b[9], 5, 568446438);
        f = j(f, c, d, e, b[14], 9, -1019803690);
        e = j(e, f, c, d, b[3], 14, -187363961);
        d = j(d, e, f, c, b[8], 20, 1163531501);
        c = j(c, d, e, f, b[13], 5, -1444681467);
        f = j(f, c, d, e, b[2], 9, -51403784);
        e = j(e, f, c, d, b[7], 14, 1735328473);
        d = j(d, e, f, c, b[12], 20, -1926607734);
        c = k(c, d, e, f, b[5], 4, -378558);
        f = k(f, c, d, e, b[8], 11, -2022574463);
        e = k(e, f, c, d, b[11], 16, 1839030562);
        d = k(d, e, f, c, b[14], 23, -35309556);
        c = k(c, d, e, f, b[1], 4, -1530992060);
        f = k(f, c, d, e, b[4], 11, 1272893353);
        e = k(e, f, c, d, b[7], 16, -155497632);
        d = k(d, e, f, c, b[10], 23, -1094730640);
        c = k(c, d, e, f, b[13], 4, 681279174);
        f = k(f, c, d, e, b[0], 11, -358537222);
        e = k(e, f, c, d, b[3], 16, -722521979);
        d = k(d, e, f, c, b[6], 23, 76029189);
        c = k(c, d, e, f, b[9], 4, -640364487);
        f = k(f, c, d, e, b[12], 11, -421815835);
        e = k(e, f, c, d, b[15], 16, 530742520);
        d = k(d, e, f, c, b[2], 23, -995338651);
        c = l(c, d, e, f, b[0], 6, -198630844);
        f = l(f, c, d, e, b[7], 10, 1126891415);
        e = l(e, f, c, d, b[14], 15, -1416354905);
        d = l(d, e, f, c, b[5], 21, -57434055);
        c = l(c, d, e, f, b[12], 6, 1700485571);
        f = l(f, c, d, e, b[3], 10, -1894986606);
        e = l(e, f, c, d, b[10], 15, -1051523);
        d = l(d, e, f, c, b[1], 21, -2054922799);
        c = l(c, d, e, f, b[8], 6, 1873313359);
        f = l(f, c, d, e, b[15], 10, -30611744);
        e = l(e, f, c, d, b[6], 15, -1560198380);
        d = l(d, e, f, c, b[13], 21, 1309151649);
        c = l(c, d, e, f, b[4], 6, -145523070);
        f = l(f, c, d, e, b[11], 10, -1120210379);
        e = l(e, f, c, d, b[2], 15, 718787259);
        d = l(d, e, f, c, b[9], 21, -343485551);
        a[0] = r(c, a[0]);
        a[1] = r(d, a[1]);
        a[2] = r(e, a[2]);
        a[3] = r(f, a[3])
    }
    function h(a, b, c, d, e, f) {
        b = r(r(b, a), r(d, f));
        return r(b << e | b >>> 32 - e, c)
    }
    function i(a, b, c, d, e, f, g) {
        return h(b & c | ~b & d, a, b, e, f, g)
    }
    function j(a, b, c, d, e, f, g) {
        return h(b & d | c & ~d, a, b, e, f, g)
    }
    function k(a, b, c, d, e, f, g) {
        return h(b ^ c ^ d, a, b, e, f, g)
    }
    function l(a, b, c, d, e, f, g) {
        return h(c ^ (b | ~d), a, b, e, f, g)
    }
    function m(a) {
        var b = a.length, c = [1732584193, -271733879, -1732584194, 271733878], d;
        for (d = 64; d <= a.length; d += 64)
            g(c, n(a.substring(d - 64, d)));
        a = a.substring(d - 64);
        var e = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (d = 0; d < a.length; d++)
            e[d >> 2] |= a.charCodeAt(d) << ((d & 3) << 3);
        e[d >> 2] |= 128 << ((d & 3) << 3);
        if (d > 55) {
            g(c, e);
            for (d = 0; d < 16; d++)
                e[d] = 0
        }
        e[14] = b * 8;
        g(c, e);
        return c
    }
    function n(a) {
        var b = []
          , c = 0;
        while (c < 64)
            b[c >> 2] = a.charCodeAt(c++) | a.charCodeAt(c++) << 8 | a.charCodeAt(c++) << 16 | a.charCodeAt(c++) << 24;
        return b
    }
    var o = "0123456789abcdef".split("");
    function p(a) {
        var b = ""
          , c = 0;
        for (; c < 4; c++)
            b += o[a >> (c << 3) + 4 & 15] + o[a >> (c << 3) & 15];
        return b
    }
    function q(a) {
        var b = [];
        for (var c = 0; c < a.length; c++)
            b[c] = p(a[c]);
        return b.join("")
    }
    var r = function(a, b) {
        return a + b & 4294967295
    };
    function a(a) {
        if (a == null)
            return null;
        a = a;
        for (var c = 0; c < a.length; c++)
            if (a[c] > "\x7f") {
                a = b("str2rstr")(a);
                break
            }
        return q(m(a))
    }
    a("hello") != "5d41402abc4b2a76b9719d911017c592" && (r = function(a, b) {
        var c = (a & 65535) + (b & 65535);
        a = (a >> 16) + (b >> 16) + (c >> 16);
        return a << 16 | c & 65535
    }
    )
}
), null);
__d("RelayRTIUtils", ["invariant", "Promise", "ActorURI", "BanzaiODS", "ChannelClientID", "CSRFGuard", "CurrentLocale", "CurrentUser", "FBLogger", "GraphQLSubscriptionsTypedLogger", "Random", "RealtimeFrameworksCounterFalcoEvent", "RelayAPIConfig", "RelayFBEnvironment", "XHRRequest", "getAsyncParams", "getCrossOriginTransport", "gkx", "md5", "requireDeferred"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.maybeLaunchGraphQLSubscriptionsFleetBeacon = a;
    f.logSubscriptionEvent = c;
    f.extractUseCaseFromTopic = n;
    f.getTopicAndTransformContext_DEPRECATED = d;
    f.computeRoutingHint = e;
    f.useJSScheduler = o;
    var h = b("requireDeferred")("FleetBeaconSubscriptionLauncher")
      , i = 1e4
      , j = 1
      , k = 1e4
      , l = "155160167952447";
    f.GRAPH_SERVICES_SDK_APP_ID = l;
    var m = "test_fleet_beacon_subscribe";
    function a(a) {
        if (!b("gkx")("1344998"))
            return !1;
        if (a == m)
            return !1;
        if (!b("Random").coinflip(k))
            return !1;
        h.onReady(function(c) {
            var d = c.CreateFleetBeaconTestSubscription;
            c = c.LaunchFleetBeaconTestSubscription;
            var e = b("RelayFBEnvironment");
            d = d(e, a, function(a) {});
            c(d)
        });
        return !0
    }
    function c(a, c, d, e, f, g) {
        if (b("gkx")("1358838")) {
            var h = null;
            switch (a) {
            case "client_subscribe":
                h = "client_subscribe";
                break;
            case "client_unsubscribe":
                h = "client_unsubscribe";
                break;
            case "receivepayload":
                h = "client_received_payload";
                break
            }
            h !== null && b("RealtimeFrameworksCounterFalcoEvent").log(function() {
                var a;
                return {
                    event: (a = h) != null ? a : "",
                    event_detail: "null",
                    use_case: c,
                    use_case_type: "gqls"
                }
            })
        }
        var k = b("gkx")("1243442") || e != null ? j : i;
        if (!b("Random").coinflip(k))
            return;
        var l = new (b("GraphQLSubscriptionsTypedLogger"))();
        l.setSubscriptionCall(c).setQueryParams({
            input: JSON.stringify(d.input)
        }).setForceLogContext(e).setEvent(a).setHandleType(f).setClienttime(Date.now() / 1e3).setClientSampleWeight(k).setQueryID(g).setSessionID(b("ChannelClientID").getID()).log()
    }
    function n(a) {
        return a.split("/").reverse()[1]
    }
    function d(a, c, d, e, f, h) {
        if (d != null && f != null) {
            var i = {
                locale: b("CurrentLocale").get(),
                queryID: String(d),
                serializedQueryParameters: JSON.stringify(e),
                viewerID: b("CurrentUser").getID(),
                pageID: h == b("CurrentUser").getID() ? null : h,
                useOSSResponseFormat: !0,
                appID: l
            };
            return b("Promise").resolve({
                topic: f,
                transformContext: i,
                useCase: n(f)
            })
        }
        c != null || d != null || g(0, 271);
        return new (b("Promise"))(function(f, g) {
            var i, j;
            i = babelHelpers["extends"]((j = {},
            j[b("ActorURI").PARAMETER_ACTOR] = (i = h) != null ? i : b("RelayAPIConfig").actorID,
            j.query_params = JSON.stringify(e),
            j), b("getAsyncParams")("POST"));
            d != null && (i.doc_id = d);
            c != null && (i.query = c);
            j = new (b("XHRRequest"))(a).setTransportBuilder(b("getCrossOriginTransport").withCredentials).setMethod("POST").setData(i).setErrorHandler(function(a) {
                g(new Error("getTopicAndTransformContext: Unable to retrieve topicID for subscription. HTTP Error [" + a.errorCode + "] " + a.errorType + " " + a.errorMsg))
            }).setResponseHandler(function(a) {
                try {
                    var c = JSON.parse(b("CSRFGuard").clean(a))
                      , d = c.payload.topic || c.payload.payload.topic;
                    c = JSON.parse(c.payload.transform_context || c.payload.payload.transform_context);
                    f({
                        topic: d,
                        transformContext: c,
                        useCase: n(d)
                    })
                } catch (b) {
                    g(new Error("getTopicAndTransformContext: encountered error " + b + " during " + ("parsing, raw response is \n" + a)))
                }
            });
            j.send()
        }
        )
    }
    function e(a, c) {
        c = Object.assign({}, c);
        delete c.client_subscription_id;
        c = (JSON.stringify(c).match(/[a-zA-Z0-9\-_]+/g) || []).concat(a).sort().join(":");
        return b("md5")(c)
    }
    function o(a) {
        return a === "pegasus_comment_create_subscribe" ? !0 : !1
    }
}
), null);
__d("BladeRunnerAllowList", [], (function(a, b, c, d, e, f) {
    function g(a) {
        return "FBGQLS:" + a.toUpperCase()
    }
    f.getGqlsMethodNameFromUseCase = g;
    function h(a) {
        a = a.split("/");
        return a.length > 2 ? g(a[1]) : null
    }
    f.getGqlsMethodNameFor = h;
    var i = ["gqls/test_actualized_subscribe/"];
    function a(a) {
        if (!a.startsWith("gqls/"))
            return null;
        for (var b = 0; b < i.length; b++) {
            var c = i[b];
            if (a.startsWith(c))
                return null
        }
        return h(a)
    }
    f.getRequestStreamMethodIfSupported = a
}
), null);
__d("BladeRunnerDeferredClient", ["Promise", "nullthrows", "requireDeferred"], (function(a, b, c, d, e, f) {
    a = function() {
        function a() {
            this.$1 = null
        }
        var c = a.prototype;
        c.requestStream = function(a, c, d, e) {
            this.$2();
            return b("nullthrows")(this.$1).then(function(b) {
                return b.requestStream(a, c, d, e)
            })
        }
        ;
        c.logInfo = function(a) {
            this.$2();
            return b("nullthrows")(this.$1).then(function(b) {
                b.logInfo(a)
            })
        }
        ;
        c.bumpCounter = function(a) {
            this.$2();
            return b("nullthrows")(this.$1).then(function(b) {
                b.bumpCounter(a)
            })
        }
        ;
        c.$2 = function() {
            this.$1 == null && (this.$1 = new (b("Promise"))(function(a) {
                b("requireDeferred")("BladeRunnerClient").onReady(function(b) {
                    a(new b())
                })
            }
            ))
        }
        ;
        return a
    }();
    c = new a();
    e.exports = c
}
), null);
__d("BladeRunnerStreamHandler", [], (function(a, b, c, d, e, f) {
    a = function() {
        function a(a, b, c, d, e) {
            this.$1 = a,
            this.$2 = b,
            this.$3 = c || function(a) {}
            ,
            this.$4 = d || function(a) {}
            ,
            this.$5 = e || function(a) {}
        }
        var b = a.prototype;
        b.onData = function(a) {
            var b = this.$1
              , c = this.$2;
            if (b != null)
                b(a.decodeData());
            else if (c != null) {
                b = atob(a.rawData());
                a = new Uint8Array(b.length);
                for (var d = 0; d < b.length; d++)
                    a[d] = b.charCodeAt(d);
                c(a.buffer)
            }
        }
        ;
        b.onStatusUpdate = function(a) {
            this.$3(a)
        }
        ;
        b.onLog = function(a) {
            this.$4(a)
        }
        ;
        b.onBatch = function(a) {
            this.$5(a)
        }
        ;
        b.onClientCancel = function() {}
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("BladeRunnerInstrumentedStreamHandler", ["BladeRunnerDeferredClient", "BladeRunnerStreamHandler", "BladeRunnerTypes", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    var g = 60 * 1e3;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c, d) {
            var e;
            e = a.call(this) || this;
            e.$BladeRunnerInstrumentedStreamHandler1 = c;
            e.$BladeRunnerInstrumentedStreamHandler2 = d;
            e.$BladeRunnerInstrumentedStreamHandler3 = Date.now();
            b("setTimeoutAcrossTransitions")(function() {
                e.$BladeRunnerInstrumentedStreamHandler4 == null && e.$BladeRunnerInstrumentedStreamHandler5(-1, Date.now())
            }, g);
            return e
        }
        var d = c.prototype;
        d.onData = function(a) {
            b("BladeRunnerDeferredClient").bumpCounter("received_data." + this.$BladeRunnerInstrumentedStreamHandler2),
            this.$BladeRunnerInstrumentedStreamHandler1.onData(a)
        }
        ;
        d.onStatusUpdate = function(a) {
            this.$BladeRunnerInstrumentedStreamHandler5(a, Date.now()),
            this.$BladeRunnerInstrumentedStreamHandler1.onStatusUpdate(a)
        }
        ;
        d.onLog = function(a) {
            this.$BladeRunnerInstrumentedStreamHandler1.onLog(a)
        }
        ;
        d.onBatch = function(a) {
            this.$BladeRunnerInstrumentedStreamHandler1.onBatch(a)
        }
        ;
        d.onClientCancel = function() {
            this.$BladeRunnerInstrumentedStreamHandler5(b("BladeRunnerTypes").StreamStatus.CLOSED, Date.now())
        }
        ;
        d.$BladeRunnerInstrumentedStreamHandler5 = function(a, c) {
            b("BladeRunnerDeferredClient").bumpCounter("received_status_" + a + "." + this.$BladeRunnerInstrumentedStreamHandler2);
            if (this.$BladeRunnerInstrumentedStreamHandler4 == null) {
                this.$BladeRunnerInstrumentedStreamHandler4 = c;
                a = Math.max(this.$BladeRunnerInstrumentedStreamHandler4 - this.$BladeRunnerInstrumentedStreamHandler3, 0);
                c = a >= 1e4 ? Math.round(Math.min(a / 1e4, 6)) * 10 : Math.round(Math.min(a / 1e3, 10));
                b("BladeRunnerDeferredClient").bumpCounter("status_latency." + this.$BladeRunnerInstrumentedStreamHandler2 + "." + c + ".s")
            }
        }
        ;
        return c
    }(b("BladeRunnerStreamHandler"));
    e.exports = a
}
), null);
__d("StreamStateMachineConstants", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        GQLS_STATE_CREATED: "created",
        GQLS_STATE_ACTIVE: "active",
        GQLS_STATE_PAUSED: "paused",
        GQLS_STATE_TERMINATED: "terminated"
    };
    f.states = a;
    b = {
        GQLS_STATE_TRANSIT_ON_CREATE: "onCreated",
        GQLS_STATE_TRANSIT_ON_ACTIVE: "onActive",
        GQLS_STATE_TRANSIT_ON_PAUSE: "onPause",
        GQLS_STATE_TRANSIT_ON_RESUME: "onResume",
        GQLS_STATE_TRANSIT_ON_TERMINATE: "onTerminate"
    };
    f.events = b
}
), null);
__d("SkywalkerManager", ["regeneratorRuntime", "Promise", "BladeRunnerAllowList", "BladeRunnerDeferredClient", "BladeRunnerInstrumentedStreamHandler", "BladeRunnerStreamHandler", "BladeRunnerTypes", "Bootloader", "StreamStateMachineConstants", "nullthrows", "promiseDone", "requireDeferred"], (function(a, b, c, d, e, f) {
    var g = "request_stream"
      , h = "mqtt_skywalker"
      , i = babelHelpers["extends"]({}, b("StreamStateMachineConstants").events, {
        GQLS_STATE_TRANSIT_ON_REJECT: "onReject"
    });
    a = function() {
        function a() {}
        var c = a.prototype;
        c.subscribeViaRequestStreamWithMobileStyleTopicTransform = function(a, c, d) {
            d === void 0 && (d = {});
            var e = this.$3(b("BladeRunnerAllowList").getGqlsMethodNameFromUseCase(a), null, c, d);
            b("promiseDone")(e);
            return {
                getTopic: function() {
                    throw new Error("Unimplemented getTopic called for mobile style GQLS")
                },
                getContext: function() {
                    throw new Error("Unimplemented getContext called for mobile style GQLS")
                },
                isUnsubscribed: function() {
                    return this.$4
                },
                unsubscribe: function() {
                    this.$4 = !0;
                    return e.then(function(a) {
                        return a.unsubscribe()
                    })
                },
                $4: !1
            }
        }
        ;
        c.subscribe = function(a, c, d) {
            d === void 0 && (d = {});
            var e = this.$5(a, c, d);
            b("promiseDone")(e);
            return {
                getTopic: function() {
                    return a
                },
                getContext: function() {
                    return d.context
                },
                isUnsubscribed: function() {
                    return this.$4
                },
                unsubscribe: function() {
                    this.$4 = !0;
                    return e.then(function(a) {
                        return a.unsubscribe()
                    })
                },
                $4: !1
            }
        }
        ;
        c.getSubscriptionType = function(a) {
            return this.$6(a) ? g : h
        }
        ;
        c.getSubscriptions = function() {
            var a = []
              , b = this.$1;
            b != null && (a = b.getSubscriptions().map(function(a) {
                return {
                    getTopic: function() {
                        return a.getTopic()
                    },
                    getMessageListener: function() {
                        return a.getMessageListener()
                    },
                    getCreationTime: function() {
                        return a.getCreationTime()
                    },
                    isUnsubscribed: function() {
                        return !b.isSubscribed(a)
                    }
                }
            }));
            return a
        }
        ;
        c.$5 = function(a, c, d) {
            var e;
            return b("regeneratorRuntime").async(function(f) {
                while (1)
                    switch (f.prev = f.next) {
                    case 0:
                        e = this.getSubscriptionType(a);
                        if (!(e === g)) {
                            f.next = 5;
                            break
                        }
                        return f.abrupt("return", this.$3(b("nullthrows")(b("BladeRunnerAllowList").getRequestStreamMethodIfSupported(a)), a, c, d));
                    case 5:
                        return f.abrupt("return", this.$7(a, c, d));
                    case 6:
                    case "end":
                        return f.stop()
                    }
            }, null, this)
        }
        ;
        c.$7 = function(a, c, d) {
            var e;
            return b("regeneratorRuntime").async(function(f) {
                while (1)
                    switch (f.prev = f.next) {
                    case 0:
                        f.next = 2;
                        return b("regeneratorRuntime").awrap(this.$8());
                    case 2:
                        e = f.sent;
                        return f.abrupt("return", e.subscribe(a, c, d));
                    case 4:
                    case "end":
                        return f.stop()
                    }
            }, null, this)
        }
        ;
        c.$6 = function(a) {
            return b("BladeRunnerAllowList").getRequestStreamMethodIfSupported(a) != null
        }
        ;
        c.$3 = function(a, c, d, e) {
            var f, g, h, j;
            return b("regeneratorRuntime").async(function(k) {
                while (1)
                    switch (k.prev = k.next) {
                    case 0:
                        k.next = 2;
                        return b("regeneratorRuntime").awrap(this.$9());
                    case 2:
                        f = k.sent;
                        g = f.patchContext(e.context);
                        h = babelHelpers["extends"]({}, e.headers || {}, {
                            method: a
                        });
                        c != null && (h.topic = c);
                        k.next = 8;
                        return b("regeneratorRuntime").awrap(b("BladeRunnerDeferredClient").requestStream(h, JSON.stringify(g), new (b("BladeRunnerInstrumentedStreamHandler"))(new (b("BladeRunnerStreamHandler"))(function(a) {
                            a = JSON.parse(a);
                            var b = c != null ? c : a.topic;
                            d({
                                topic: b,
                                payload: a.payload
                            })
                        }
                        ,null,function(a) {
                            if (e.gqlsLifecycleHandler) {
                                var c = "";
                                switch (a) {
                                case b("BladeRunnerTypes").StreamStatus.ACCEPTED:
                                    c = i.GQLS_STATE_TRANSIT_ON_CREATE;
                                    break;
                                case b("BladeRunnerTypes").StreamStatus.REJECTED:
                                    c = i.GQLS_STATE_TRANSIT_ON_REJECT;
                                    break;
                                case b("BladeRunnerTypes").StreamStatus.STARTED:
                                    c = i.GQLS_STATE_TRANSIT_ON_ACTIVE;
                                    break;
                                case b("BladeRunnerTypes").StreamStatus.PAUSED:
                                    c = i.GQLS_STATE_TRANSIT_ON_PAUSE;
                                    break;
                                case b("BladeRunnerTypes").StreamStatus.CLOSED:
                                    c = i.GQLS_STATE_TRANSIT_ON_TERMINATE;
                                    break
                                }
                                e.gqlsLifecycleHandler(c)
                            }
                        }
                        ,function(a) {}
                        ),a), e.instrumentationData));
                    case 8:
                        j = k.sent;
                        e.onSubscribe && e.onSubscribe({
                            data: {},
                            error: null
                        });
                        return k.abrupt("return", {
                            unsubscribe: function() {
                                return b("regeneratorRuntime").async(function(a) {
                                    while (1)
                                        switch (a.prev = a.next) {
                                        case 0:
                                            e.onUnsubscribeEager && e.onUnsubscribeEager(),
                                            j.cancel(),
                                            e.onUnsubscribe && e.onUnsubscribe({
                                                data: {},
                                                error: null
                                            });
                                        case 3:
                                        case "end":
                                            return a.stop()
                                        }
                                }, null, this)
                            }
                        });
                    case 11:
                    case "end":
                        return k.stop()
                    }
            }, null, this)
        }
        ;
        c.$8 = function() {
            var a, c;
            return b("regeneratorRuntime").async(function(d) {
                while (1)
                    switch (d.prev = d.next) {
                    case 0:
                        if (!(this.$1 != null)) {
                            d.next = 2;
                            break
                        }
                        return d.abrupt("return", this.$1);
                    case 2:
                        a = new (b("Promise"))(function(a) {
                            b("Bootloader").loadModules(["MqttSkywalkerManager"], a, "SkywalkerManager")
                        }
                        );
                        d.next = 5;
                        return b("regeneratorRuntime").awrap(a);
                    case 5:
                        c = d.sent;
                        this.$1 = c;
                        return d.abrupt("return", c);
                    case 8:
                    case "end":
                        return d.stop()
                    }
            }, null, this)
        }
        ;
        c.$9 = function() {
            var a, c;
            return b("regeneratorRuntime").async(function(d) {
                while (1)
                    switch (d.prev = d.next) {
                    case 0:
                        if (!(this.$2 != null)) {
                            d.next = 2;
                            break
                        }
                        return d.abrupt("return", this.$2);
                    case 2:
                        a = new (b("Promise"))(function(a) {
                            b("requireDeferred")("SkywalkerUtils").onReady(function(b) {
                                a(b)
                            })
                        }
                        );
                        d.next = 5;
                        return b("regeneratorRuntime").awrap(a);
                    case 5:
                        c = d.sent;
                        this.$2 = c;
                        return d.abrupt("return", c);
                    case 8:
                    case "end":
                        return d.stop()
                    }
            }, null, this)
        }
        ;
        return a
    }();
    c = new a();
    e.exports = c
}
), null);
__d("RelayRTIGraphQLSubscriber", ["invariant", "FBLogger", "JSScheduler", "Random", "RelayRTIGraphQLSubscriptionTopicProvider", "RelayRTIUtils", "RelayRuntime", "RTISubscriptionManagerConfig", "SkywalkerManager", "gkx", "nullthrows"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = (c = b("RelayRTIUtils")).computeRoutingHint
      , i = c.getTopicAndTransformContext_DEPRECATED
      , j = c.logSubscriptionEvent
      , k = c.maybeLaunchGraphQLSubscriptionsFleetBeacon
      , l = c.useJSScheduler
      , m = b("RelayRuntime").Observable
      , n = "no_logging"
      , o = "custom_logging"
      , p = "workplace_logging"
      , q = "gqls_workplace_logging_relay"
      , r = "default_logging"
      , s = "gqls_default_logging_relay"
      , t = 1e3
      , u = 100;
    new Set();
    var v = "155160167952447";
    function a(a, b, c, d, e) {
        return w(a, b, c, e)["do"]({
            next: function() {
                d && d.clear()
            }
        })
    }
    function w(a, c, d, e) {
        var f, h = (f = c.metadata) == null ? void 0 : f.subscriptionName;
        typeof h === "string" || g(0, 13280, c.name);
        f = "gqls/" + h + "/";
        var i = b("SkywalkerManager").getSubscriptionType(f);
        f = d.input["%options"];
        f = (f == null ? void 0 : f.client_logged_context) == null ? n : o;
        f === n && (b("gkx")("1383502") && b("Random").coinflip(u) && (f = p));
        f === n && ((b("gkx")("1388683") || b("gkx")("1382775") && b("Random").coinflip(t)) && (f = r));
        var l = y(c)
          , m = D(f, d, l ? "_sstt" : null);
        k(h);
        return E(a, c, d, f, e)["do"]({
            start: function() {
                j("client_subscribe", h, d, m, i, c.id)
            },
            next: function() {
                j("receivepayload", h, d, m, i, c.id)
            },
            unsubscribe: function() {
                j("client_unsubscribe", h, d, m, i, c.id)
            }
        })
    }
    var x = new Set([]);
    function y(a) {
        a = a.metadata.subscriptionName;
        if (typeof a !== "string")
            return !1;
        if (a === "feedback_typing_subscribe")
            return b("gkx")("1604051");
        if (a === "feedback_like_subscribe")
            return b("gkx")("1739138");
        if (a === "feedback_add_streaming_reaction_subscribe")
            return b("gkx")("1739139");
        if (a === "comment_create_subscribe")
            return b("gkx")("1739140");
        if (a === "comment_like_subscribe")
            return b("gkx")("1749562");
        if (a === "web_notification_receive_subscribe")
            return b("gkx")("1739141");
        if (x.has(a))
            return !1;
        a = (a = b("RTISubscriptionManagerConfig").is_intern) != null ? a : !1;
        return a ? b("gkx")("1701897") : b("gkx")("1293002")
    }
    function z(a, b, c) {
        if (a != null) {
            a = h(a, b.input);
            a != null && (c.routing_hint = a)
        }
        b.input.client_subscription_id != null && (c.requestId = b.input.client_subscription_id)
    }
    function A(a, b) {
        return a == null ? null : {
            requestId: b,
            forceLogContext: a
        }
    }
    function B(a, c, d) {
        return m.create(function(e) {
            var f, g, h = a.id;
            if (typeof h != "string")
                throw new Error("Found illegal docID in subscribeWithMobileStyleTopicTransform");
            h = {
                doc_id: h
            };
            ((f = b("RTISubscriptionManagerConfig").is_intern) != null ? f : !1) && (h.www_tier = "intern");
            f = a.metadata.subscriptionName;
            if (typeof f != "string")
                throw new Error("Found null useCase in subscribeWithMobileStyleTopicTransform");
            z(f, c, h);
            g = (g = c["%options"]) != null ? g : {};
            g.useOSSResponseFormat = !0;
            d != null && (g.client_logged_context = d);
            g.client_has_ods_usecase_counters = !0;
            g = babelHelpers["extends"]({
                context: babelHelpers["extends"]({}, c, {
                    "%options": g
                })
            }, h ? {
                headers: h
            } : {});
            h = A(d, c.input.client_subscription_id);
            h != null && (g = babelHelpers["extends"]({}, g, {
                instrumentationData: h
            }));
            var i = b("SkywalkerManager").subscribeViaRequestStreamWithMobileStyleTopicTransform(f, function(a) {
                try {
                    a = JSON.parse(a.payload);
                    e.next(a)
                } catch (a) {
                    e.error(a)
                }
            }, g);
            return function() {
                return i && i.unsubscribe()
            }
        })
    }
    function C(a) {
        var b = a.input;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["input"]);
        b["%options"];
        b = babelHelpers.objectWithoutPropertiesLoose(b, ["%options"]);
        return babelHelpers["extends"]({}, a, {
            input: b
        })
    }
    function D(a, b, c) {
        c === void 0 && (c = null);
        var d = null;
        a == p ? d = q : a == r ? d = s : a == o && (d = b.input["%options"].client_logged_context);
        d != null && c != null && (d += c);
        return d
    }
    function E(a, c, d, e, f) {
        var g = C(d)
          , h = y(c)
          , j = D(e, d, h ? "_sstt" : null);
        return h ? B(c, g, j) : m.create(function(e) {
            var h, k = c.id, m = k != null ? b("RelayRTIGraphQLSubscriptionTopicProvider").getTopicForQuery(k, g) : null;
            i(a, null, k, g, m, f).then(function(c) {
                var a = c.topic
                  , f = c.transformContext;
                c = c.useCase;
                if (e.closed)
                    return;
                f.appID = v;
                f.serializedQueryParameters != null && (j != null && (f.serializedQueryParameters = F(f.serializedQueryParameters, j)),
                f.serializedQueryParameters = G(f.serializedQueryParameters));
                var g = {};
                z(c, d, g);
                g = babelHelpers["extends"]({
                    context: {
                        transformContext: JSON.stringify(f)
                    }
                }, g ? {
                    headers: g
                } : {});
                var i = A(j, d.input.client_subscription_id);
                i != null && (g = babelHelpers["extends"]({}, g, {
                    instrumentationData: i
                }));
                var k = function(a) {
                    if (f == null ? void 0 : f.useOSSResponseFormat)
                        try {
                            var b = JSON.parse(a.payload);
                            e.next(b)
                        } catch (a) {
                            e.error(a)
                        }
                    else
                        e.next({
                            data: JSON.parse(a.payload)
                        })
                }
                  , m = l(c);
                h = b("SkywalkerManager").subscribe(b("nullthrows")(a), function(a) {
                    m ? b("JSScheduler").scheduleLoggingPriCallback(function() {
                        return k(a)
                    }) : k(a)
                }, g)
            })["catch"](e.error);
            return function() {
                return h && h.unsubscribe()
            }
        })
    }
    function F(a, c) {
        try {
            var d = JSON.parse(a);
            if (d != null) {
                d["%options"] != null ? d["%options"].client_logged_context = c : d["%options"] = {
                    client_logged_context: c
                };
                return JSON.stringify(d)
            } else
                return a
        } catch (c) {
            b("FBLogger")("GraphQLSubscriptions").catching(c).mustfix("serializedQueryParameters is invalid JSON when setting forceLogContext in RelayRTIGraphQLSubscriber");
            return a
        }
    }
    function G(a) {
        try {
            var c = JSON.parse(a);
            if (c != null) {
                c["%options"] != null ? c["%options"].client_has_ods_usecase_counters = !0 : c["%options"] = {
                    client_has_ods_usecase_counters: !0
                };
                return JSON.stringify(c)
            } else
                return a
        } catch (c) {
            b("FBLogger")("GraphQLSubscriptions").catching(c).mustfix("serializedQueryParameters is invalid JSON when setting clientHasUsecaseCounters in RelayRTIGraphQLSubscriber");
            return a
        }
    }
    e.exports = a
}
), null);
__d("RelayFBSubscribeFunction", ["GQLSHeartbeatConfig", "RelayAPIConfig", "RelayRTIGraphQLSubscriber", "RelayRuntime"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("GQLSHeartbeatConfig").heartbeat_interval;
    b("RelayRuntime").Observable;
    function a(a, c, d, e) {
        if (b("RelayAPIConfig").subscriptionTopicURI == null)
            throw new Error("RelayFBSubscribeFunction: `RelayAPIConfig.subscriptionTopicURI` should not be null on www");
        c["%options"] && c["%options"].heartbeat && (c["%options"].heartbeat = {
            interval: g
        });
        return b("RelayRTIGraphQLSubscriber")(b("RelayAPIConfig").subscriptionTopicURI, a, c, d, e)
    }
    e.exports = a
}
), null);
__d("createRelayFBSubscribeFunction", ["RelayFBSubscribeFunction"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        var c = a.queryResponseCache
          , d = a.actorID;
        return function(a, e) {
            return b("RelayFBSubscribeFunction")(a, e, c, d)
        }
    }
    e.exports = a
}
), null);
__d("getRelayFBMissingFieldHandlers", ["relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("relay-runtime").ROOT_TYPE;
    function a() {
        return [{
            kind: "linked",
            handle: function(a, b, c) {
                if (b != null && b.__typename === g && a.name === "node" && Object.prototype.hasOwnProperty.call(c, "id"))
                    return c.id
            }
        }, {
            kind: "linked",
            handle: function(a, b, c, d) {
                if (b != null && b.__typename === g && a.name.startsWith("fetch__") && Object.prototype.hasOwnProperty.call(c, "id")) {
                    b = c.id;
                    c = d.get(b);
                    if (c != null && c.getType() === a.name.substr(7))
                        return b
                }
            }
        }, {
            kind: "pluralLinked",
            handle: function(a, b, c) {
                if (b != null && b.__typename === g && a.name === "nodes" && Object.prototype.hasOwnProperty.call(c, "ids"))
                    return c.ids
            }
        }]
    }
    e.exports = a
}
), null);
__d("relayFBGetDataID", ["relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("relay-runtime").VIEWER_ID
      , h = b("relay-runtime").VIEWER_TYPE;
    function a(a, b) {
        if (b === h)
            return g;
        return b === "MessagingParticipant" || b === "BlockedUser" || b === "SRTUser" ? a.id == null ? null : b + ":" + a.id : a.id
    }
    e.exports = a
}
), null);
__d("RelayFBEnvironmentDefinitions", ["RelayFBConsoleLog", "RelayFBGCScheduler", "RelayFBHandlerProvider", "RelayFBOperationLoader", "RelayFBScheduler", "createRelayFBNetwork", "createRelayFBNetworkFetch", "createRelayFBSubscribeFunction", "getRelayFBMissingFieldHandlers", "relayFBGetDataID", "RelayFBEnvironmentActorID", "relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("RelayFBEnvironmentActorID").getActorID
      , h = (c = b("relay-runtime")).Environment
      , i = c.RecordSource
      , j = c.Store
      , k = c.QueryResponseCache;
    function l(a) {
        var c = a.actorID
          , d = a.handlerProvider;
        d = d === void 0 ? b("RelayFBHandlerProvider") : d;
        var e = a.log;
        e = e === void 0 ? b("RelayFBConsoleLog") : e;
        var f = a.missingFieldHandlers;
        f = f === void 0 ? b("getRelayFBMissingFieldHandlers")() : f;
        var g = a.operationLoader;
        g = g === void 0 ? b("RelayFBOperationLoader") : g;
        var l = a.store;
        l = l === void 0 ? new j(new i(),{
            UNSTABLE_DO_NOT_USE_getDataID: b("relayFBGetDataID"),
            gcReleaseBufferSize: 10,
            gcScheduler: b("RelayFBGCScheduler"),
            operationLoader: b("RelayFBOperationLoader"),
            queryCacheExpirationTime: 5 * 60 * 1e3
        }) : l;
        var m = a.scheduler;
        m = m === void 0 ? b("RelayFBScheduler") : m;
        var n = a.UNSTABLE_DO_NOT_USE_getDataID;
        n = n === void 0 ? b("relayFBGetDataID") : n;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["actorID", "handlerProvider", "log", "missingFieldHandlers", "operationLoader", "store", "scheduler", "UNSTABLE_DO_NOT_USE_getDataID"]);
        var o = {
            actorID: c
        };
        if (a.network)
            return new h(babelHelpers["extends"]({}, a, {
                handlerProvider: d,
                log: e,
                missingFieldHandlers: f,
                operationLoader: g,
                store: l,
                options: o,
                scheduler: m,
                UNSTABLE_DO_NOT_USE_getDataID: n
            }));
        else {
            var p, q = a.networkConfig;
            a = babelHelpers.objectWithoutPropertiesLoose(a, ["networkConfig"]);
            p = (p = q == null ? void 0 : q.queryResponseCache) != null ? p : new k({
                size: 10,
                ttl: 5 * 60 * 1e3
            });
            q = b("createRelayFBNetwork")(b("createRelayFBNetworkFetch")(babelHelpers["extends"]({}, q, {
                queryResponseCache: p,
                actorID: c
            })), b("createRelayFBSubscribeFunction")({
                queryResponseCache: p,
                actorID: c
            }));
            return new h(babelHelpers["extends"]({}, a, {
                handlerProvider: d,
                log: e,
                missingFieldHandlers: f,
                operationLoader: g,
                store: l,
                network: q,
                options: o,
                scheduler: m,
                UNSTABLE_DO_NOT_USE_getDataID: n
            }))
        }
    }
    function a(a) {
        var b = new Map();
        return {
            getForActorID: function(c, d) {
                var e;
                e = c + JSON.stringify((e = d) != null ? e : {});
                var f = b.get(e);
                f || (f = l(a(c, d)),
                b.set(e, f));
                return f
            },
            commitLocalUpdateForEachEnvironment: function(a) {
                var c = function() {
                    if (e) {
                        if (f >= d.length)
                            return "break";
                        h = d[f++]
                    } else {
                        f = d.next();
                        if (f.done)
                            return "break";
                        h = f.value
                    }
                    var b = h
                      , c = b[1];
                    c.commitUpdate(function(b) {
                        a(g(c), c, b)
                    })
                };
                for (var d = b, e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                    var h, i = c();
                    if (i === "break")
                        break
                }
            }
        }
    }
    e.exports = {
        createEnvironment: l,
        createEnvironmentFactory: a
    }
}
), null);
__d("RelayRequiredFieldLogger", ["FBLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    f.create = a;
    function a() {
        return function(a) {
            a.name === "read.missing_required_field" && b("FBLogger")("relay-required").blameToPreviousFrame().mustfix("Encountered a missing @required field at %s in %s", a.fieldPath, a.owner)
        }
    }
}
), null);
__d("mergeCommentEdgesSortedByTimestampInVideo", ["expectationViolation"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = function(a) {
        a = a == null ? void 0 : (a = a.getLinkedRecord("node")) == null ? void 0 : a.getValue("timestamp_in_video");
        return typeof a !== "number" ? null : a
    };
    function a(a, c) {
        var d = 0
          , e = 0
          , f = new Set()
          , h = []
          , i = function(a) {
            var c;
            c = a == null ? void 0 : (c = a.getLinkedRecord("node")) == null ? void 0 : c.getValue("id");
            if (c == null) {
                b("expectationViolation")("Node should have id");
                return
            }
            if (f.has(c))
                return;
            f.add(c);
            h.push(a)
        };
        while (d < a.length && e < c.length) {
            var j = g(a[d])
              , k = g(c[e]);
            if (j == null) {
                d++;
                continue
            }
            if (k == null) {
                e++;
                continue
            }
            if (j < k) {
                i(a[d]);
                d++;
                continue
            }
            if (j > k) {
                i(c[e]);
                e++;
                continue
            }
            i(a[d]);
            i(c[e]);
            d++;
            e++
        }
        for (var j = d; j < a.length; j++)
            i(a[j]);
        for (var k = e; k < c.length; k++)
            i(c[k]);
        return h
    }
}
), null);
__d("VideoTimestampedCommentsConnectionHandler", ["mergeCommentEdgesSortedByTimestampInVideo", "relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    f.update = a;
    f.getConnection = c;
    f.insertEdge = d;
    function a(a, c) {
        var d = a.get(c.dataID);
        if (!d)
            return;
        var e = d.getLinkedRecord(c.fieldKey);
        if (!e) {
            d.setValue(null, c.handleKey);
            return
        }
        var f = d.getLinkedRecord(c.handleKey);
        if (!f) {
            a = a.create(b("relay-runtime").generateClientID(d.getDataID(), c.handleKey), e.getType());
            a.copyFieldsFrom(e);
            d.setLinkedRecord(a, c.handleKey);
            return
        }
        d = e.getLinkedRecords("edges");
        a = f.getLinkedRecords("edges");
        a == null ? c = d : d == null ? c = a : c = b("mergeCommentEdgesSortedByTimestampInVideo")(a, d);
        f.setLinkedRecords((e = c) != null ? e : [], "edges")
    }
    function c(a, c, d) {
        c = b("relay-runtime").getRelayHandleKey("video_timestamped_comments", c, null);
        return a.getLinkedRecord(c, d)
    }
    function d(a, c) {
        var d = a.getLinkedRecords("edges");
        if (!d) {
            a.setLinkedRecords([c], "edges");
            return
        }
        d = b("mergeCommentEdgesSortedByTimestampInVideo")(d, [c]);
        a.setLinkedRecords((c = d) != null ? c : [], "edges");
        return
    }
}
), null);
__d("resolveImmediate", ["Promise"], (function(a, b, c, d, e, f) {
    e.exports = a;
    var g = b("Promise").resolve();
    function a(a) {
        g.then(a)["catch"](h)
    }
    function h(a) {
        setTimeout(function() {
            throw a
        }, 0)
    }
}
), null);
__d("createRelayFBLocalEnvironment", ["RelayFBHandlerProvider", "RelayFBOperationLoader", "RelayRuntime", "getRelayFBMissingFieldHandlers", "relayFBGetDataID", "resolveImmediate"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("RelayRuntime").Environment
      , h = b("RelayRuntime").RecordSource
      , i = b("RelayRuntime").Store
      , j = {
        execute: function(a) {
            throw new Error("RelayFBLocalEnvironment: Network requests are not allowed in the local environment, got: " + a.name)
        }
    };
    function a(a) {
        var c = a.handlerProvider
          , d = a.missingFieldHandlers
          , e = a.scheduler
          , f = a.store
          , k = a.configName
          , l = a.log
          , m = a.operationTracker;
        a = a.UNSTABLE_DO_NOT_USE_getDataID;
        c = new g({
            configName: (k = k) != null ? k : "RelayFBLocalEnvironment",
            handlerProvider: (k = c) != null ? k : b("RelayFBHandlerProvider"),
            missingFieldHandlers: (c = d) != null ? c : b("getRelayFBMissingFieldHandlers")(),
            operationLoader: b("RelayFBOperationLoader"),
            scheduler: e,
            store: (k = f) != null ? k : new i(new h(),{
                UNSTABLE_DO_NOT_USE_getDataID: b("relayFBGetDataID"),
                gcReleaseBufferSize: 10,
                gcScheduler: b("resolveImmediate"),
                operationLoader: b("RelayFBOperationLoader")
            }),
            network: j,
            operationTracker: m,
            log: l,
            UNSTABLE_DO_NOT_USE_getDataID: (d = a) != null ? d : b("relayFBGetDataID"),
            options: {
                isLocal: !0
            }
        });
        return c
    }
    e.exports = a
}
), null);
__d("GraphqlLiveQueryEventFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743656");
    c = b("FalcoLoggerInternal").create("graphql_live_query_event", a);
    e.exports = c
}
), null);
__d("LiveQueryEventsLoggingResolver", ["GraphqlLiveQueryEventFalcoEvent", "Random", "gkx", "RealtimeFrameworksCounterFalcoEvent"], (function(a, b, c, d, e, f) {
    f.tempResolveLoggingContext = a;
    f.logEvent = c;
    var g = "default"
      , h = "without_sampling";
    function a() {
        if (b("gkx")("1133447"))
            return {
                force_log_context: h,
                sampling_rate: 1,
                client_has_ods_usecase_counters: !0
            };
        else if (b("gkx")("1202011")) {
            if (b("Random").coinflip(1e4))
                return {
                    force_log_context: g,
                    sampling_rate: 1e4,
                    client_has_ods_usecase_counters: !0
                }
        } else
            return {
                client_has_ods_usecase_counters: !0
            }
    }
    function c(a, c, d, e, f, g, h, i) {
        g != null && g.sampling_rate != null && b("GraphqlLiveQueryEventFalcoEvent").log(function() {
            return {
                event: a,
                event_source: "web",
                event_reason: c,
                config_id: e,
                doc_id_str: d,
                force_log_context: g.force_log_context,
                logging_sampling_rate: g.sampling_rate,
                live_query_request_id: f,
                error_info: h,
                initial_response_latency_ms: i
            }
        }),
        b("RealtimeFrameworksCounterFalcoEvent").log(function() {
            return {
                event: a,
                event_detail: c,
                use_case: e,
                use_case_type: "live_query"
            }
        })
    }
}
), null);
__d("RealtimeGraphQLRequest", ["invariant", "regeneratorRuntime", "BladeRunnerDeferredClient", "BladeRunnerStreamHandler", "BladeRunnerTypes", "LiveQueryEnvironment", "nullthrows"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("BladeRunnerTypes").StreamFrameType
      , i = b("BladeRunnerTypes").StreamStatus;
    a = function() {
        function a(a) {
            var c = a.method
              , d = a.doc_id
              , e = a.is_intern
              , f = a.extra_headers;
            a = a.body;
            c = {
                method: c,
                doc_id: d
            };
            d = b("LiveQueryEnvironment").isIntern;
            e != null && (d = e);
            d && (c = babelHelpers["extends"]({}, c, {
                www_tier: "intern"
            }));
            b("LiveQueryEnvironment").sandboxDomain !== null && b("LiveQueryEnvironment").sandboxDomain !== "" && (c = babelHelpers["extends"]({}, c, {
                www_sandbox: b("LiveQueryEnvironment").sandboxDomain
            }));
            f != null && (c = babelHelpers["extends"]({}, c, f));
            this.$1 = c;
            this.$2 = JSON.stringify(a)
        }
        var c = a.prototype;
        c.onResponse = function(a) {
            this.$3 = a;
            return this
        }
        ;
        c.onError = function(a) {
            this.$4 = a;
            return this
        }
        ;
        c.onActive = function(a) {
            this.$5 = a;
            return this
        }
        ;
        c.onPause = function(a) {
            this.$6 = a;
            return this
        }
        ;
        c.onResume = function(a) {
            this.$7 = a;
            return this
        }
        ;
        c.send = function() {
            var a, c, d;
            return b("regeneratorRuntime").async(function(e) {
                while (1)
                    switch (e.prev = e.next) {
                    case 0:
                        this.$3 != null || g(0, 13516);
                        a = {
                            onResponse: b("nullthrows")(this.$3)
                        };
                        this.$4 != null && (a = babelHelpers["extends"]({}, a, {
                            onError: this.$4
                        }));
                        this.$5 != null && (a = babelHelpers["extends"]({}, a, {
                            onActive: this.$5
                        }));
                        this.$6 != null && (a = babelHelpers["extends"]({}, a, {
                            onPause: this.$6
                        }));
                        this.$7 != null && (a = babelHelpers["extends"]({}, a, {
                            onResume: this.$7
                        }));
                        c = new j(a);
                        e.next = 9;
                        return b("regeneratorRuntime").awrap(b("BladeRunnerDeferredClient").requestStream(this.$1, this.$2, new (b("BladeRunnerStreamHandler"))(null,null,null,null,function(a) {
                            return c.onStreamBatch(a)
                        }
                        )));
                    case 9:
                        d = e.sent;
                        return e.abrupt("return", {
                            cancel: function() {
                                d.cancel()
                            }
                        });
                    case 11:
                    case "end":
                        return e.stop()
                    }
            }, null, this)
        }
        ;
        return a
    }();
    var j = function() {
        function a(a) {
            var b = a.onResponse
              , c = a.onError
              , d = a.onActive
              , e = a.onPause;
            a = a.onResume;
            this.$1 = b;
            c != null && (this.$2 = c);
            d != null && (this.$3 = d);
            e != null && (this.$4 = e);
            a != null && (this.$5 = a);
            this.$6 = !1
        }
        var c = a.prototype;
        c.$8 = function(a, b) {
            if (this.$2 != null) {
                b.message != null ? b = b.message : b = "unknown error";
                this.$2(new Error("Query " + a + ": " + b))
            }
        }
        ;
        c.onStreamBatch = function(a) {
            for (var a = a.getFrames(), c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var e;
                if (c) {
                    if (d >= a.length)
                        break;
                    e = a[d++]
                } else {
                    d = a.next();
                    if (d.done)
                        break;
                    e = d.value
                }
                e = e;
                switch (e.type) {
                case h.DATA:
                    e.data != null && this.$1(e.data.decodeData());
                    break;
                case h.STATUS_UPDATE:
                    if (e.statusUpdate != null)
                        switch (e.statusUpdate.status) {
                        case i.REJECTED:
                            this.$8("rejected", e.statusUpdate);
                            break;
                        case i.STARTED:
                            if (this.$6) {
                                this.$7 != null || g(0, 13576);
                                var f = Date.now() - b("nullthrows")(this.$7);
                                this.$5 != null && this.$5(f)
                            } else
                                this.$6 = !0,
                                this.$3 != null && this.$3();
                            break;
                        case i.PAUSED:
                            this.$7 = Date.now();
                            this.$4 != null && this.$4(!1, !1);
                            break;
                        case i.CLOSED:
                            this.$8("failed", e.statusUpdate);
                            break;
                        default:
                            break
                        }
                    break;
                default:
                    break
                }
            }
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("makeGraphQLLiveQueryRequest", ["LiveQueryEnvironment", "RealtimeGraphQLRequest"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = "FBLQ";
    function a(a) {
        var c = a.doc_id
          , d = a.config_id
          , e = a.live_query_request_id
          , f = a.actor_id
          , h = a.variables
          , i = a.is_intern
          , j = a.access_token
          , k = a.logging_context
          , l = a.last_response_digest;
        a = a.priming_token;
        h = {
            method: g,
            doc_id: c,
            body: {
                variables: (c = h) != null ? c : {}
            }
        };
        i != null && (h = babelHelpers["extends"]({}, h, {
            is_intern: i
        }));
        c = {
            config_id: d,
            live_query_request_id: e
        };
        l != null && (c = babelHelpers["extends"]({}, c, {
            last_response_digest: l
        }));
        f != null && (c = babelHelpers["extends"]({}, c, {
            actor_id: f
        }));
        a != null && (c = babelHelpers["extends"]({}, c, {
            priming_token: a
        }));
        k != null && (c = babelHelpers["extends"]({}, c, {
            logging_context: k
        }));
        j != null && (c = babelHelpers["extends"]({}, c, {
            access_token: j
        }));
        ((i = b("LiveQueryEnvironment").enableRequestStreamLogging) != null ? i : !1) && (c = babelHelpers["extends"]({}, c, {
            enable_logging: !0
        }));
        h = babelHelpers["extends"]({}, h, {
            extra_headers: c
        });
        return new (b("RealtimeGraphQLRequest"))(h)
    }
    e.exports = a
}
), null);
__d("liveQueryFetch", ["invariant", "LiveQueryEventsLoggingResolver", "LiveQueryWebRelayKillList", "RelayGraphQLRequestUtils", "RelayRuntime", "makeGraphQLLiveQueryRequest", "nullthrows", "promiseDone", "uuid"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("RelayRuntime").Observable
      , i = b("RelayRuntime").RelayError;
    function a(a, c, d) {
        if (!l() || k(d.config_id))
            return h.create(function(a) {
                a.complete();
                return
            });
        var e = Date.now()
          , f = 0;
        a.id != null || g(0, 13279);
        var m = j();
        a.metadata.live != null && (typeof a.metadata.live.live_query_request_id === "string" && (m = a.metadata.live.live_query_request_id),
        typeof a.metadata.live.timeStamp === "number" && (e = a.metadata.live.timeStamp));
        var n = {
            doc_id: b("nullthrows")(a.id),
            config_id: d.config_id,
            actor_id: d.actor_id,
            variables: c,
            live_query_request_id: m
        };
        d.access_token !== "" && (n = babelHelpers["extends"]({}, n, {
            access_token: d.access_token
        }));
        var o = b("LiveQueryEventsLoggingResolver").tempResolveLoggingContext();
        o != null && (o = babelHelpers["extends"]({}, o, {
            client_send_request_timestamp: e
        }),
        n = babelHelpers["extends"]({}, n, {
            logging_context: o
        }));
        return h.create(function(a) {
            var c = b("makeGraphQLLiveQueryRequest")(n).onResponse(function(c) {
                var d = Date.now();
                try {
                    c = b("RelayGraphQLRequestUtils").parsePayload(c),
                    typeof c === "object" || g(0, 12937)
                } catch (c) {
                    b("LiveQueryEventsLoggingResolver").logEvent("client_update", "error_parsing_response", n.doc_id, n.config_id, m, o, c.message);
                    return a.error(c)
                }
                if (!("errors"in c) && !("data"in c)) {
                    b("LiveQueryEventsLoggingResolver").logEvent("client_update", "error_empty_response", n.doc_id, n.config_id, m, o, "Parsed network response is empty");
                    return a.error(i.createWarning("EmptyResponseError", "Parsed network response is empty"))
                }
                if (c.errors)
                    for (var h = c.errors, j = Array.isArray(h), k = 0, h = j ? h : h[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                        var l;
                        if (j) {
                            if (k >= h.length)
                                break;
                            l = h[k++]
                        } else {
                            k = h.next();
                            if (k.done)
                                break;
                            l = k.value
                        }
                        l = l;
                        if (l.severity === "CRITICAL") {
                            l = b("RelayGraphQLRequestUtils").createErrorFromPayload(l);
                            b("LiveQueryEventsLoggingResolver").logEvent("client_update", "error_in_response", n.doc_id, n.config_id, m, o, l.message);
                            return a.error(l)
                        }
                    }
                f == 0 ? b("LiveQueryEventsLoggingResolver").logEvent("client_update", "live_query_initial", n.doc_id, n.config_id, m, o, null, d - e) : b("LiveQueryEventsLoggingResolver").logEvent("client_update", "regular_response_update", n.doc_id, n.config_id, m, o);
                f += 1;
                a.closed || a.next(c)
            }).onError(function(c) {
                b("LiveQueryEventsLoggingResolver").logEvent("client_update", "error_received_from_live_server", n.doc_id, n.config_id, m, o, c.message),
                a.error(i.create("LiveServerError", "Received error for Live Query from Live Server: " + c.message))
            }).onActive(function() {
                b("LiveQueryEventsLoggingResolver").logEvent("client_subscribe", "initial_subscribe_request", n.doc_id, n.config_id, m, o)
            }).onPause(function(a, c) {
                b("LiveQueryEventsLoggingResolver").logEvent("client_unsubscribe", "subscription_paused", n.doc_id, n.config_id, m, o)
            }).onResume(function(a) {
                b("LiveQueryEventsLoggingResolver").logEvent("client_subscribe", "subscription_resumed", n.doc_id, n.config_id, m, o)
            }).send();
            return function() {
                b("promiseDone")(c, function(a) {
                    a.cancel(),
                    b("LiveQueryEventsLoggingResolver").logEvent("client_unsubscribe", "regular_unsubscribe", n.doc_id, n.config_id, m, o)
                })
            }
        })
    }
    function j() {
        return b("uuid")()
    }
    function k(a) {
        for (var c = b("LiveQueryWebRelayKillList").liveQueryWebRelayKillList, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
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
            if (a === f)
                return !0
        }
        return !1
    }
    function l() {
        return "WebSocket"in window
    }
    e.exports = a
}
), null);
__d("CometRelayEnvironmentFactory", ["requireCond", "ActorURIConfig", "CometNewsFeedConnectionHandler", "CometNotificationsThinClientConnectionHandler", "CometRelayConfig", "CometRelayErrorHandling", "CometRelayPerfStore", "CometRootInitServerFlag", "CometRouteStore", "JSTracing", "PinnedCommentEventsConnectionHandler", "RelayAPIConfig", "cr:1445039", "RelayFBEnvironmentDefinitions", "cr:1661072", "RelayFBGCScheduler", "RelayFBOperationLoader", "RelayRequiredFieldLogger", "cr:1467370", "UFI2CommentsConnectionHandler", "VideoTimestampedCommentsConnectionHandler", "cr:1579863", "cr:1121434", "createRelayFBLocalEnvironment", "createRelayFBNetwork", "createRelayFBNetworkFetch", "createRelayFBSubscribeFunction", "getRelayFBMissingFieldHandlers", "gkx", "cr:1345926", "liveQueryFetch", "qex", "relay-runtime", "relayFBGetDataID", "unrecoverableViolation"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("CometRelayErrorHandling").shouldSkipErrorSideEffects;
    c = b("RelayFBEnvironmentDefinitions").createEnvironmentFactory;
    var h = (d = b("relay-runtime")).ConnectionHandler
      , i = d.MutationHandlers
      , j = d.Observable
      , k = d.RecordSource
      , l = d.RelayError
      , m = d.ROOT_TYPE
      , n = d.Store
      , o = d.__internal.OperationTracker
      , p = d.getStorageKey
      , q = b("gkx")("1151941");
    function r(a) {
        switch (a) {
        case "connection":
            return h;
        case "video_timestamped_comments":
            return b("VideoTimestampedCommentsConnectionHandler");
        case "pinned_comment_events":
            return b("PinnedCommentEventsConnectionHandler");
        case "ufi2_comments":
            return b("UFI2CommentsConnectionHandler");
        case "comet_news_feed":
            return b("CometNewsFeedConnectionHandler");
        case "comet_notifications_thin_client":
            return b("CometNotificationsThinClientConnectionHandler");
        case "deleteRecord":
            return i.DeleteRecordHandler;
        case "appendEdge":
            return i.AppendEdgeHandler;
        case "prependEdge":
            return i.PrependEdgeHandler
        }
        throw b("unrecoverableViolation")("RelayCometEnvironment: No handler defined for `" + a + "`.", "comet_ui")
    }
    function s(a) {
        return j.create(function(c) {
            var d = b("JSTracing").wrap(function(a) {
                a && a()
            }, "CometRelayEnvironmentFactory:runOnNext")
              , e = b("JSTracing").wrap(function(a) {
                d(),
                a && a()
            }, "CometRelayEnvironmentFactory:runOnComplete");
            return a.subscribe({
                complete: function() {
                    for (var a = arguments.length, b = new Array(a), d = 0; d < a; d++)
                        b[d] = arguments[d];
                    e(function() {
                        c.complete.apply(c, b)
                    })
                },
                error: function() {
                    for (var a = arguments.length, b = new Array(a), d = 0; d < a; d++)
                        b[d] = arguments[d];
                    e(function() {
                        c.error.apply(c, b)
                    })
                },
                next: function() {
                    for (var a = arguments.length, b = new Array(a), e = 0; e < a; e++)
                        b[e] = arguments[e];
                    d(function() {
                        c.next.apply(c, b)
                    })
                },
                unsubscribe: function() {
                    e()
                }
            })
        })
    }
    function t() {
        if (!b("cr:1345926"))
            return s;
        else
            return function(a) {
                var c = s(a);
                a = j.create(function(a) {
                    return c.subscribe({
                        complete: a.complete,
                        error: function(c) {
                            var d, e, f, h = a.error(c);
                            if (g(c))
                                return h;
                            c = c == null ? void 0 : c.source;
                            d = (d = (d = c == null ? void 0 : c.errorCode) != null ? d : c == null ? void 0 : c.code) != null ? d : c == null ? void 0 : c.error;
                            e = (e = c == null ? void 0 : c.errorDescription) != null ? e : c == null ? void 0 : c.description;
                            f = (f = c == null ? void 0 : c.errorSummary) != null ? f : c == null ? void 0 : c.summary;
                            d && f && e && b("cr:1345926")(d, f, e);
                            return h
                        },
                        next: function(c) {
                            if (b("gkx")("1528907"))
                                if (Array.isArray(c))
                                    for (var d = c, e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                                        var g;
                                        if (e) {
                                            if (f >= d.length)
                                                break;
                                            g = d[f++]
                                        } else {
                                            f = d.next();
                                            if (f.done)
                                                break;
                                            g = f.value
                                        }
                                        g = g;
                                        g = u(g);
                                        if (g != null) {
                                            a.error(g);
                                            return
                                        }
                                    }
                                else {
                                    g = u(c);
                                    if (g != null) {
                                        a.error(g);
                                        return
                                    }
                                }
                            a.next(c)
                        }
                    })
                });
                return a
            }
    }
    function u(a) {
        var b = a.data;
        a = Object.prototype.hasOwnProperty.call(a, "errors") ? a.errors : void 0;
        if (Array.isArray(a))
            for (var a = a, c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var e;
                if (c) {
                    if (d >= a.length)
                        break;
                    e = a[d++]
                } else {
                    d = a.next();
                    if (d.done)
                        break;
                    e = d.value
                }
                e = e;
                if (e != null && typeof e === "object" && (e.severity === "CRITICAL" || e.severity === "ERROR") && Array.isArray(e.path) && e.path.length === 3 && e.path[0] === "viewer" && e.path[1] === "news_feed" && e.path[2] === "edges") {
                    e = b == null ? void 0 : (e = b.viewer) == null ? void 0 : e.news_feed;
                    var f = e == null ? void 0 : e.edges;
                    if (e != null && (f == null || Array.isArray(f) && f.length === 0))
                        return l.create("CometNewsFeed", "Error evaluating Comet News Feed, edges cannot be resolved.")
                }
            }
    }
    var v = [].concat(b("getRelayFBMissingFieldHandlers")(), [{
        handle: function(a, c, d, e) {
            if (c != null && c.__typename === m && a.name === "user" && Object.prototype.hasOwnProperty.call(d, "id"))
                return d.id;
            if (c != null && c.__typename === m && a.name === "story" && Object.prototype.hasOwnProperty.call(d, "story_id"))
                return d.story_id;
            if (c != null && c.__typename === "Story" && a.name === "comet_sections" && c[p(a, {
                renderLocation: "homepage_stream"
            })] != null) {
                var f = c[p(a, {
                    renderLocation: "homepage_stream"
                })];
                if (f != null && typeof f === "object" && Object.prototype.hasOwnProperty.call(f, "__ref") && typeof f.__ref === "string")
                    return f.__ref
            }
            if (c != null && typeof c.id === "string" && c.__typename === "Feedback" && a.name.startsWith("__UFI2CommentsProvider_feedback_display_comments_ufi2_comments")) {
                f = e.get(c.id);
                if (!f)
                    return void 0;
                f = b("UFI2CommentsConnectionHandler").getConnection(f, "UFI2CommentsProvider_feedback_display_comments", {
                    feedback_source: 1
                });
                return !f ? void 0 : f.getDataID()
            }
            if (c != null && typeof c.id === "string" && c.__typename === "Feedback" && a.name === "display_comments") {
                f = e.get(c.id);
                if (!f)
                    return void 0;
                e = f.getLinkedRecord("display_comments", d);
                if (e)
                    return e.getDataID();
                e = f.getLinkedRecord("display_comments");
                if (e)
                    return e.getDataID();
                Object.prototype.hasOwnProperty.call(d, "is_initial_fetch") && (e = f.getLinkedRecord("display_comments", babelHelpers["extends"]({}, d, {
                    is_initial_fetch: !d.is_initial_fetch
                })));
                return e ? e.getDataID() : void 0
            }
            return c != null && a.name === "video" && Object.prototype.hasOwnProperty.call(d, "id") ? d.id : void 0
        },
        kind: "linked"
    }]);
    f = 1e3 * 60 * 15;
    var w = b("qex")._("1393199") ? b("qex")._("1393200") : void 0;
    w != null && (w = Math.max(Math.min(w, f), 0));
    function x(a) {
        var c = new k();
        c = new n(c,{
            UNSTABLE_DO_NOT_USE_getDataID: b("relayFBGetDataID"),
            gcReleaseBufferSize: b("CometRelayConfig").gc_release_buffer_size,
            gcScheduler: b("RelayFBGCScheduler"),
            log: a,
            operationLoader: b("RelayFBOperationLoader"),
            queryCacheExpirationTime: w
        });
        q || c.holdGC();
        return c
    }
    function y(a) {
        var c = a.actorID;
        a = a.graphURI;
        a = a === void 0 ? void 0 : a;
        a = b("createRelayFBNetwork")(b("createRelayFBNetworkFetch")({
            actorID: c,
            getAdditionalData: function() {
                var a;
                return c == null ? {} : (a = {},
                a[b("ActorURIConfig").PARAMETER_ACTOR] = c,
                a)
            },
            graphURI: a,
            liveQueryFetchFn: b("liveQueryFetch"),
            wrapObservableFn: t()
        }), b("createRelayFBSubscribeFunction")({
            actorID: c
        }), b("cr:1579863"), function(a, c) {
            if (window.__comet_ssr_is_server_env_DO_NOT_USE === !0)
                return;
            b("CometRouteStore").handleRoutingPayload(a, c)
        });
        var d = b("cr:1121434") != null ? b("cr:1121434")() : null
          , e = b("cr:1445039") != null ? b("cr:1445039").create(String(c), 2e3) : null
          , f = b("RelayRequiredFieldLogger").create()
          , g = e != null ? function(a) {
            return e.log(a)
        }
        : null
          , h = b("RelayAPIConfig").actorID === c ? " DEFAULT" : "";
        return {
            UNSTABLE_DO_NOT_USE_getDataID: b("relayFBGetDataID"),
            UNSTABLE_defaultRenderPolicy: "partial",
            actorID: c,
            configName: "CometRelayEnvironment (" + String(c) + ")" + h,
            handlerProvider: r,
            isServer: b("CometRootInitServerFlag").isServerEnvironment(),
            log: function(a) {
                d && d(a),
                e && e.log(a),
                b("CometRelayPerfStore").log(a),
                f(a)
            },
            missingFieldHandlers: v,
            network: a,
            operationLoader: b("RelayFBOperationLoader"),
            operationTracker: new o(),
            reactFlightPayloadDeserializer: b("cr:1661072"),
            scheduler: b("cr:1467370"),
            store: x(g)
        }
    }
    d = c(function(a) {
        return y({
            actorID: a
        })
    });
    f = d.getForActorID(b("RelayAPIConfig").actorID);
    function a() {
        var a = b("createRelayFBLocalEnvironment")({
            configName: "CometRelayLocalEnvironment",
            handlerProvider: r,
            missingFieldHandlers: v,
            scheduler: null,
            store: x()
        });
        return a
    }
    e.exports = {
        cometHandlerProvider: r,
        commitLocalUpdateForEachEnvironment: d.commitLocalUpdateForEachEnvironment,
        configEnvironment: y,
        createLocalEnvironment: a,
        defaultEnvironment: f,
        getForActorID: d.getForActorID
    }
}
), null);
__d("CometRelayEnvironment", ["CometRelayEnvironmentFactory"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("CometRelayEnvironmentFactory").defaultEnvironment;
    e.exports = a
}
), null);
__d("BuildCometRoot", ["requireCond", "cr:1707460"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("cr:1707460").buildRootComponent;
    f.buildRootComponent = a
}
), null);
__d("CometEventTimings", ["performanceNavigationStart", "performanceNow"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getCurrentQueueTime = a;
    var g;
    function a(a) {
        var c = (g || (g = b("performanceNow")))()
          , d = null
          , e = document.createEvent("MouseEvent").timeStamp < b("performanceNavigationStart")();
        e && a != null && a < c && (d = c - a,
        c = a);
        return [c, d]
    }
}
), null);
__d("CometInteractionTracingLoggingOpts", [], (function(a, b, c, d, e, f) {
    "use strict";
    b = {
        liteQPLMapping: (a = {},
        a[29818881] = {
            "*": 53542916
        },
        a[29818882] = {
            "*": 53608451,
            "comet.mediaviewer.photo": 61276162,
            "comet.stories.viewer": 61276164,
            "comet.videos.tahoe": 61276163
        },
        a)
    };
    f.loggingOpts = b
}
), null);
__d("CometInteractionTracingConfig", ["CometInteractionTracingLoggingOpts", "requireCond", "cr:1486287", "cr:1604175"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        defaultTracePolicy: "comet.app",
        getMetadata: function() {
            return {
                darkMode: Number(b("cr:1486287").getDarkModePreference())
            }
        },
        loggingOpts: b("CometInteractionTracingLoggingOpts").loggingOpts,
        setupVcTracker: function(a) {
            b("cr:1604175") && a.onComplete(function(c) {
                c && c.trackedImages.forEach(function(c) {
                    b("cr:1604175").logImagePerf(c, a)
                })
            })
        }
    };
    f.tracingConfig = a
}
), null);
__d("CometVisualCompletionUtil", ["Visibility", "cancelAnimationFrame", "clearTimeout", "requestAnimationFrame", "setTimeout"], (function(a, b, c, d, e, f) {
    "use strict";
    f.foregroundRequestAnimationFrame = a;
    f.getPixels = g;
    f.getRectIntersection = h;
    f.getViewportSize = i;
    f.isInAboveTheFold = c;
    f.offsetTop = d;
    f.trimHash = e;
    function a(a) {
        if (b("Visibility").isHidden()) {
            var c = b("setTimeout")(a, 0);
            return function() {
                b("clearTimeout")(c)
            }
        } else {
            var d = b("requestAnimationFrame")(a);
            return function() {
                b("cancelAnimationFrame")(d)
            }
        }
    }
    function g(a) {
        return (a.right - a.left) * (a.bottom - a.top)
    }
    function h(a, b) {
        return {
            bottom: Math.max(Math.min(a.bottom, b.bottom), b.top),
            left: Math.min(Math.max(a.left, b.left), b.right),
            right: Math.max(Math.min(a.right, b.right), b.left),
            top: Math.min(Math.max(a.top, b.top), b.bottom)
        }
    }
    function i() {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        }
    }
    function c(a) {
        if (typeof a.getBoundingClientRect !== "function")
            return !1;
        var b = i();
        a = a.getBoundingClientRect();
        var c = a.bottom
          , d = a.left
          , e = a.right;
        a = a.top;
        c = g(h({
            bottom: c,
            left: d,
            right: e,
            top: a
        }, {
            bottom: b.height,
            left: 0,
            right: b.width,
            top: -window.scrollY
        }));
        return c > 0
    }
    function d(a, b) {
        var c = 0;
        a = a;
        while (a && a.offsetParent && typeof a.offsetTop === "number")
            c += a.offsetTop,
            a = a.offsetParent;
        if (a && a.offsetParent == null && typeof a.getBoundingClientRect === "function") {
            var d = a.getBoundingClientRect();
            d = d.top;
            d >= 0 ? c += d : a === document.body && (c -= b)
        }
        return c
    }
    function e(a) {
        return a.split("#")[0]
    }
}
), null);
__d("FBLoomEventBuffer", ["performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    a = function() {
        function a() {
            this.$1 = []
        }
        var c = a.prototype;
        c.addEvent = function(a, c) {
            this.$1.push({
                event: a,
                timestamp: (a = c) != null ? a : (g || (g = b("performanceAbsoluteNow")))()
            })
        }
        ;
        c.flushEvents = function() {
            return this.$1
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("FBLoomSampling", ["WebLoomConfig"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, c, d) {
        a = a === "QPL" ? b("WebLoomConfig").adaptive_config.qpl : b("WebLoomConfig").adaptive_config.interactions;
        d = d != null ? c + "." + d : "" + c;
        d = a.events[d];
        if (d != null)
            return d;
        a = (d = a.modules[c >> 16 & 65535]) != null ? d : 0;
        return a
    }
    e.exports = {
        getSampleRate: a
    }
}
), null);
__d("FBLoomSerializer", ["SnappyCompressUtil"], (function(a, b, c, d, e, f) {
    "use strict";
    f.isSupported = g;
    f.serialize = a;
    function g() {
        return !window.Uint8Array || !window.btoa ? !1 : !0
    }
    function a(a, c, d) {
        c = c.flushEvents();
        if (!g())
            return null;
        var e = a.start_time_us
          , f = a.end_time_us
          , h = e / 1e3
          , i = f / 1e3;
        if (d != null) {
            var j = h - d.stats.timeOrigin
              , k = i - d.stats.timeOrigin;
            d.trace.samples = d.trace.samples.filter(function(a) {
                return a.timestamp >= j && a.timestamp <= k
            })
        }
        var l = JSON.stringify(a) + "\n{}\n" + JSON.stringify(d || null) + "\n"
          , m = 0;
        c.forEach(function(a) {
            var b = Math.round(a.timestamp * 1e3);
            if (b < e || b > f)
                return;
            var c = b - m;
            m = b;
            b = a.event;
            a = [c, b.type];
            switch (b.type) {
            case "QPL_ANNOTATION":
                a.push(b.markerId);
                a.push(b.instanceKey);
                a.push(b.annotationKey);
                a.push(b.annotationValue);
                break;
            case "QPL_START":
                a.push(b.markerId);
                a.push(b.instanceKey);
                break;
            case "QPL_END":
                a.push(b.markerId);
                a.push(b.instanceKey);
                a.push(b.action);
                break;
            case "QPL_POINT":
                a.push(b.markerId);
                a.push(b.instanceKey);
                a.push(b.name);
                b.data != null && a.push(b.data);
                break;
            case "RESOURCE_TIMING_START":
                a.push(b.resourceType);
                a.push(b.resourceId);
                a.push(b.resourceName);
                a.push(b.encodedSize);
                a.push(b.decodedSize);
                a.push(b.transferSize);
                break;
            case "RESOURCE_TIMING_END":
                a.push(b.resourceType);
                a.push(b.resourceId);
                break;
            case "RESOURCE_TIMING_POINT":
                a.push(b.resourceType);
                a.push(b.resourceId);
                a.push(b.pointName);
                break;
            case "INTERACTION_TRACE_START":
                a.push(b.traceId);
                a.push(b.execUnitName);
                a.push(b.blockName);
                a.push(b.blockType);
                a.push(b.traceType);
                break;
            case "INTERACTION_TRACE_END":
                a.push(b.traceId);
                a.push(b.execUnitName);
                a.push(b.blockName);
                a.push(b.blockType);
                a.push(b.traceType);
                a.push(b.blockAnnotations);
                break;
            case "INTERACTION_TRACE_POINT":
                a.push(b.traceId);
                a.push(b.execUnitName);
                a.push(b.blockName);
                a.push(b.pointName);
                a.push(b.pointAnnotations);
                break;
            case "VISUAL_COMPLETION_RECT":
                a.push(b.elementType);
                a.push(b.depth);
                a.push(b.x);
                a.push(b.y);
                a.push(b.width);
                a.push(b.height);
                a.push(b.mutationType);
                break;
            case "VISUAL_COMPLETION_PROGRESS":
                a.push(b.progress);
                break;
            case "JS_SCHEDULER_QUEUE":
                a.push(b.priority);
                a.push(b.queueSize);
                break
            }
            l += JSON.stringify(a) + "\n"
        });
        return b("SnappyCompressUtil").compressStringToSnappy(l)
    }
}
), null);
__d("PerfXSharedFields", ["CurrentLocale", "Locale", "SiteData"], (function(a, b, c, d, e, f) {
    var g = {
        addCommonValues: function(a) {
            navigator && navigator.hardwareConcurrency !== void 0 && (a.num_cores = navigator.hardwareConcurrency);
            navigator && navigator.deviceMemory && (a.ram_gb = navigator.deviceMemory);
            navigator && navigator.connection && (typeof navigator.connection.downlink === "number" && (a.downlink_megabits = navigator.connection.downlink),
            typeof navigator.connection.effectiveType === "string" && (a.effective_connection_type = navigator.connection.effectiveType),
            typeof navigator.connection.rtt === "number" && (a.rtt_ms = navigator.connection.rtt));
            a.client_push_phase = b("SiteData").push_phase;
            a.client_revision = b("SiteData").client_revision;
            b("SiteData").server_revision != null && (a.server_revision = b("SiteData").server_revision);
            a.locale = b("CurrentLocale").get();
            a.isRTL = Number(b("Locale").isRTL());
            return a
        },
        getCommonData: function() {
            var a = {};
            g.addCommonValues(a);
            return a
        }
    };
    e.exports = g
}
), null);
__d("clamp", [], (function(a, b, c, d, e, f) {
    e.exports = a;
    function a(a, b, c) {
        if (a < b)
            return b;
        return a > c ? c : a
    }
}
), null);
__d("ResourceTimingLoomProvider", ["clamp", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    function h(a) {
        var b = a.indexOf("?");
        return b == -1 ? a : a.substring(0, b)
    }
    function i(a, b) {
        b = b.substring(b.lastIndexOf(".") + 1);
        if (b == "js" || b == "css")
            return b;
        else if (a == "img" || b == "png" || b == "jpg" || b == "ico")
            return "img";
        else
            return a
    }
    var j = function() {
        a.isSupported = function() {
            return window.performance && window.performance.getEntriesByType && window.performance.timing && window.performance.timing.navigationStart
        }
        ;
        function a(a) {
            this.$1 = a
        }
        var c = a.prototype;
        c.$2 = function(a) {
            var c = a.entry
              , d = a.resourceName
              , e = a.resourceId
              , f = a.resourceType
              , g = a.startTime
              , h = a.endTime
              , i = this.$1;
            if (i != null) {
                var j = performance.timing.navigationStart;
                a = c;
                i.buffer.addEvent({
                    type: "RESOURCE_TIMING_START",
                    resourceType: f,
                    resourceId: e,
                    resourceName: d,
                    encodedSize: a != null && typeof a.encodedBodySize === "number" ? a.encodedBodySize : 0,
                    decodedSize: a != null && typeof a.decodedBodySize === "number" ? a.decodedBodySize : 0,
                    transferSize: a != null && typeof a.transferSize === "number" ? a.transferSize : 0
                }, g);
                d = function(a, c) {
                    c = c + j;
                    i.buffer.addEvent({
                        type: "RESOURCE_TIMING_POINT",
                        resourceType: f,
                        resourceId: e,
                        pointName: a
                    }, b("clamp")(c, g, h))
                }
                ;
                d("requestStart", c.requestStart);
                d("responseStart", c.responseStart);
                i.buffer.addEvent({
                    type: "RESOURCE_TIMING_END",
                    resourceType: f,
                    resourceId: e
                }, h)
            }
        }
        ;
        c.loomTraceWillEnd = function() {
            var a = this
              , c = this.$1;
            if (c != null) {
                var d = c.startTime
                  , e = (g || (g = b("performanceAbsoluteNow")))()
                  , f = performance.timing.navigationStart;
                window.performance.getEntriesByType("resource").filter(function(a) {
                    return a.startTime < a.responseEnd && a.startTime + f >= d && a.responseEnd + f <= e
                }).forEach(function(g, c) {
                    var d = g.startTime + f
                      , e = g.responseEnd + f
                      , j = h(g.name)
                      , b = i(g.initiatorType, j);
                    a.$2({
                        entry: g,
                        resourceName: j,
                        resourceId: c,
                        resourceType: b,
                        startTime: d,
                        endTime: e
                    })
                });
                c = performance.getEntriesByType("navigation")[0];
                c = typeof PerformanceNavigationTiming !== "undefined" && c instanceof PerformanceNavigationTiming ? c : null;
                if (c != null && (c.responseEnd === 0 || c.responseEnd + f >= d)) {
                    var j = "document"
                      , k = -1
                      , l = d > f ? d : f
                      , m = c.responseEnd === 0 ? e : c.responseEnd + f;
                    this.$2({
                        entry: c,
                        resourceName: h(location.href),
                        resourceId: k,
                        resourceType: j,
                        startTime: l,
                        endTime: m
                    })
                }
            }
            this.$1 = null
        }
        ;
        return a
    }();
    e.exports = {
        loomProviderId: "ResourceTiming",
        isSupported: function() {
            return j.isSupported()
        },
        getInstance: function(a) {
            return new j(a)
        }
    }
}
), null);
__d("FBLoom", ["Promise", "requireCond", "Banzai", "CurrentUser", "FBLoomEventBuffer", "FBLoomSampling", "FBLoomSerializer", "cr:1094133", "cr:955714", "PerfXSharedFields", "QPLLoomProvider", "Random", "ResourceTimingLoomProvider", "SiteData", "clearTimeout", "gkx", "ifRequired", "performanceAbsoluteNow", "performanceNavigationStart", "performanceNow", "promiseDone", "recoverableViolation", "setTimeoutAcrossTransitions", "uuid"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i = b("performanceNavigationStart")(), j = 6e4, k = new Set(["InteractionTracing"]);
    a = function() {
        function a() {
            this.$4 = [b("ResourceTimingLoomProvider"), b("QPLLoomProvider"), b("cr:1094133")].filter(Boolean),
            b("cr:955714") != null && b("cr:955714").isSupported() && this.$4.push(b("cr:955714")),
            this.$3 = new Set(this.$4.map(function(a) {
                return a.loomProviderId
            })),
            this.$1 = new Map(),
            this.$2 = new Map(),
            this.$5 = b("FBLoomSerializer").isSupported(),
            this.$6 = !1,
            this.$7 = 1,
            this.$8 = new Map(),
            this.$9 = b("uuid")(),
            this.$10 = 1,
            this.$11 = new Map(),
            this.$12 = new Set()
        }
        var c = a.prototype;
        c.getNextSequenceNumber = function() {
            var a = this.$10;
            this.$10++;
            return a
        }
        ;
        c.getSessionId = function() {
            return this.$9
        }
        ;
        c.getActiveTraces = function() {
            return this.$1
        }
        ;
        c.addProvider = function(a) {
            this.$3.has(a.loomProviderId) || (this.$4.push(a),
            this.$3.add(a.loomProviderId))
        }
        ;
        c.addStatusListener = function(a) {
            var b = this
              , c = this.$7++;
            this.$8.set(c, a);
            return {
                dispose: function() {
                    b.$8["delete"](c)
                }
            }
        }
        ;
        c.maybeStartTraceForInteraction = function(a, c, d, e, f) {
            var g = b("FBLoomSampling").getSampleRate("INTERACTION", d, e);
            if (!b("Random").coinflip(g))
                return null;
            f = f + i;
            c = {
                interaction_class: c,
                interaction_id: a,
                qpl_marker_id: String(d),
                sample_rate: g,
                trace_policy: e,
                type: "INTERACTION"
            };
            return this.startTrace(a, c, f, b("gkx")("1164245") ? k : void 0)
        }
        ;
        c.endTraceForInteraction = function(a, c) {
            var d = a.traceId
              , e = Object.assign({}, a.metadata);
            e.qpl_action = c;
            c = a.completed;
            a = (a = a.markerPoints.visuallyComplete) == null ? void 0 : a.timestamp;
            a = c != null && a != null ? Math.max(c, a) : (c = (c = c) != null ? c : a) != null ? c : (g || (g = b("performanceNow")))();
            c = i + a;
            return this.endTrace(d, c, e)
        }
        ;
        c.$13 = function(a, b, c, d) {
            var e = a + "_" + b;
            a = {
                type: "QPL",
                qpl_marker_id: String(a),
                qpl_instance_key: b,
                sample_rate: d
            };
            return this.startTrace(e, a, c)
        }
        ;
        c.maybeStartTraceForQPL = function(a, c, d) {
            var e = b("FBLoomSampling").getSampleRate("QPL", a);
            return e && b("Random").coinflip(e) ? this.$13(a, c, d, e) : null
        }
        ;
        c.maybeEndTraceForQPL = function(a, b, c, d) {
            a = a + "_" + b;
            this.$1.has(a) && this.endTrace(a, c, d)
        }
        ;
        c.startManualTrace = function() {
            this.$13(45088769, 0, (h || (h = b("performanceAbsoluteNow")))(), 1)
        }
        ;
        c.endManualTrace = function() {
            this.maybeEndTraceForQPL(45088769, 0, (h || (h = b("performanceAbsoluteNow")))(), {
                qpl_action: 2
            })
        }
        ;
        c.startTrace = function(a, c, d, e) {
            var f = this;
            e === void 0 && (e = this.$3);
            if (!this.$5)
                return null;
            if (this.$1.has(a)) {
                b("recoverableViolation")("Already running trace for triggerId: " + a, "web_loom");
                return null
            }
            var g = this.$10++
              , i = {
                buffer: new (b("FBLoomEventBuffer"))(),
                triggerId: a,
                triggerInfo: c,
                startTime: d,
                sequenceNumber: g
            }
              , k = new Set()
              , l = [];
            this.$4.forEach(function(a) {
                e.has(a.loomProviderId) && a.isSupported() && (l.push(a.getInstance(i)),
                k.add(a.loomProviderId))
            });
            var m = "STARTED";
            this.$1.set(a, {
                traceContext: i,
                providerInstances: l,
                status: m,
                startURI: window.location.href
            });
            this.$8.forEach(function(a) {
                return a(i, m)
            });
            this.$11.set(a, b("setTimeoutAcrossTransitions")(function() {
                f.$12.add(a),
                f.endTrace(a, (h || (h = b("performanceAbsoluteNow")))(), {
                    qpl_action: 113,
                    active_continuations: b("ifRequired")("JSTracing", function(b) {
                        return b.dumpActiveContinuations(a)
                    }, function() {
                        return []
                    })
                })
            }, j));
            c = this.$9 + "_" + g;
            return {
                traceReferenceId: c,
                loomProviders: k
            }
        }
        ;
        c.endTrace = function(a, c, d) {
            var e = this
              , f = this.$1.get(a);
            if (!f) {
                this.$12.has(a) ? this.$12["delete"](a) : b("recoverableViolation")("No trace running for triggerId: " + a, "web_loom");
                return !1
            }
            var g = f.traceContext.sequenceNumber;
            this.$1["delete"](a);
            this.$2.set(g, f);
            this.$14(f, "END_PENDING");
            b("clearTimeout")(this.$11.get(a));
            var h = [];
            f.providerInstances.forEach(function(a) {
                a = a.loomTraceWillEnd();
                a && h.push(a)
            });
            var i = window.location.href;
            b("promiseDone")(b("Promise").all(h), function() {
                var a = b("PerfXSharedFields").getCommonData()
                  , h = f.traceContext.triggerInfo;
                a = {
                    app_id: b("CurrentUser").getAppID(),
                    start_time_us: Math.round(f.traceContext.startTime * 1e3),
                    end_time_us: Math.round(c * 1e3),
                    trigger_id: f.traceContext.triggerId,
                    trigger_info: h,
                    trigger_metadata: d,
                    device_num_cores: a.num_cores,
                    device_ram_bytes: a.ram_gb != null ? a.ram_gb * 1073741824 : null,
                    network_effective_connection_type: a.effective_connection_type,
                    network_downlink_bps: a.downlink_megabits != null && a.downlink_megabits * 1e6 < 1e20 ? a.downlink_megabits * 1e6 : null,
                    network_rtt_ms: a.rtt_ms,
                    client_rev: b("SiteData").client_revision,
                    server_rev: b("SiteData").server_revision,
                    spin_mode: b("SiteData").spin,
                    start_uri: f.startURI,
                    end_uri: i
                };
                a = b("FBLoomSerializer").serialize(a, f.traceContext.buffer, f.traceContext.jsSelfProfilerData);
                if (a != null) {
                    a = {
                        trace: a,
                        session_id: e.$9,
                        sequence_number: f.traceContext.sequenceNumber,
                        qpl_marker_id: h.qpl_marker_id,
                        trace_policy: h.trace_policy,
                        sample_rate: h.sample_rate
                    };
                    b("Banzai").post("loom_trace", a, {
                        compress: !1,
                        callback: function() {
                            e.$14(f, "COMPLETE"),
                            e.$2["delete"](g)
                        },
                        delay: e.$6 ? b("Banzai").VITAL_WAIT : b("Banzai").BASIC_WAIT
                    });
                    e.$14(f, "UPLOAD_PENDING")
                } else
                    e.$14(f, "COMPLETE"),
                    e.$2["delete"](g)
            }, function(a) {
                e.$14(f, "ERROR"),
                e.$2["delete"](g)
            });
            return !0
        }
        ;
        c.flush = function(a) {
            var c = new Set()
              , d = new Set();
            this.$2.forEach(function(a) {
                a.status === "END_PENDING" ? c.add(a.traceContext.sequenceNumber) : a.status === "UPLOAD_PENDING" && d.add(a.traceContext.sequenceNumber)
            });
            if (c.size > 0)
                var e = this.addStatusListener(function(d) {
                    c["delete"](d.sequenceNumber),
                    c.size === 0 && (b("Banzai").flush(a, a),
                    e.dispose())
                });
            else
                d.size > 0 ? b("Banzai").flush(a, a) : a && a()
        }
        ;
        c.setIsDevToolsConnected = function(a) {
            this.$6 = a
        }
        ;
        c.$14 = function(a, b) {
            a.status = b,
            this.$8.forEach(function(b) {
                return b(a.traceContext, a.status)
            })
        }
        ;
        return a
    }();
    e.exports = new a()
}
), null);
__d("QPLLoomProvider", ["QuickPerformanceLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = function() {
        function a(a) {
            var c = this;
            this.$2 = {};
            this.$1 = b("QuickPerformanceLogger").addListener({
                onMarkerStart: function(b, d, e) {
                    e >= a.startTime && a.buffer.addEvent({
                        type: "QPL_START",
                        markerId: b,
                        instanceKey: d
                    }, e),
                    c.$2[b] || (c.$2[b] = {}),
                    c.$2[b][d] = e
                },
                onMarkerEnd: function(b, c, d, e) {
                    e >= a.startTime && a.buffer.addEvent({
                        type: "QPL_END",
                        action: b,
                        markerId: c,
                        instanceKey: d
                    }, e)
                },
                onMarkerPoint: function(b, c, d, e, f) {
                    f >= a.startTime && a.buffer.addEvent({
                        type: "QPL_POINT",
                        markerId: b,
                        instanceKey: c,
                        name: d,
                        data: e
                    }, f)
                },
                onAnnotation: function(b, d, e, f) {
                    var g = c.$2[b];
                    g = g == null ? void 0 : g[d];
                    g != null && g >= a.startTime && a.buffer.addEvent({
                        type: "QPL_ANNOTATION",
                        markerId: b,
                        instanceKey: d,
                        annotationKey: e,
                        annotationValue: f
                    }, g)
                }
            })
        }
        var c = a.prototype;
        c.loomTraceWillEnd = function() {
            this.$1.dispose()
        }
        ;
        return a
    }();
    a = {
        loomProviderId: "QPL",
        isSupported: function() {
            return !0
        },
        getInstance: function(a) {
            return new g(a)
        }
    };
    e.exports = a
}
), null);
__d("PerfFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744178");
    c = b("FalcoLoggerInternal").create("perf", a);
    e.exports = c
}
), null);
__d("QuickLogConfigHelper", ["QuickLogConfig"], (function(a, b, c, d, e, f) {
    a = function() {
        "use strict";
        function a() {}
        var c = a.prototype;
        c.getEventDetails = function(a) {
            return b("QuickLogConfig").qpl_events[a]
        }
        ;
        c.isKillswitchOn = function() {
            return b("QuickLogConfig").killswitch
        }
        ;
        return a
    }();
    e.exports = new a()
}
), null);
__d("QuickPerformanceLoggerCore", [], (function(a, b, c, d, e, f) {
    "use strict";
    function g(a, b, c, d) {
        var e = b[a];
        if (!e || Object.entries(e).length === 0)
            return null;
        if (!d) {
            return b = {},
            b[a] = Object.assign({}, c && c[a], e),
            b
        }
        var f = {};
        Object.keys(e).forEach(function(a) {
            var b = e[a];
            f[a] = d(b)
        });
        return b = {},
        b[a] = Object.assign({}, c && c[a], f),
        b
    }
    function h(a, b) {
        if (a == null)
            return b;
        a = Object.assign({}, b, g("string", a, b), g("int", a, b, Math.trunc), g("double", a, b), g("bool", a, b), g("string_array", a, b), g("int_array", a, b, function(a) {
            return a.map(Math.trunc)
        }), g("double_array", a, b), g("bool_array", a, b));
        return Object.entries(a).length !== 0 ? a : null
    }
    function i(a) {
        var b = Array.from(new Set(a.map(function(a) {
            return a.name
        })));
        return b.map(function(b) {
            return a.find(function(a) {
                return a.name === b
            })
        }).filter(Boolean)
    }
    function j(a, b) {
        return b === !0 ? babelHelpers["extends"]({}, a, {
            tracked_for_loss: !0
        }) : a
    }
    function k(a, b) {
        if (!b)
            return a;
        var c = {};
        b.string && (c.annotations = b.string);
        b["int"] && (c.annotations_int = b["int"]);
        b["double"] && (c.annotations_double = b["double"]);
        b.bool && (c.annotations_bool = b.bool);
        b.string_array && (c.annotations_string_array = b.string_array);
        b.int_array && (c.annotations_int_array = b.int_array);
        b.double_array && (c.annotations_double_array = b.double_array);
        b.bool_array && (c.annotations_bool_array = b.bool_array);
        return babelHelpers["extends"]({}, a, c)
    }
    a = function() {
        function a(a, b, c, d) {
            this.$2 = 1,
            this.$3 = 100,
            this.$4 = new Map(),
            this.$5 = new Map(),
            this.$8 = {},
            this.activeMarkers = new Map(),
            this.$1 = a,
            this.$7 = b,
            this.$9 = c,
            this.$5 = d || new Map()
        }
        var b = a.prototype;
        b.getMarker = function(a, b) {
            var c;
            if ((c = this.$1.quickLogConfigHelper) == null ? void 0 : c.isKillswitchOn())
                return null;
            c = this.activeMarkers.get(a);
            if (!c)
                return null;
            a = c.get(b);
            return !a ? null : a
        }
        ;
        b.addMarker = function(a, b, c) {
            var d = this.activeMarkers.get(a);
            d || (d = new Map(),
            this.activeMarkers.set(a, d));
            d.set(b, c)
        }
        ;
        b.deleteMarker = function(a, b) {
            (a = this.activeMarkers.get(a)) == null ? void 0 : a["delete"](b)
        }
        ;
        b.markerStart = function(a, b, c, d) {
            var e;
            b === void 0 && (b = 0);
            c === void 0 && (c = this.currentTimestamp());
            d = d === void 0 ? {} : d;
            var f = d.cancelOnUnload;
            f = f === void 0 ? !1 : f;
            var g = d.trackedForLoss;
            g = g === void 0 ? !1 : g;
            d = d.type;
            d = d === void 0 ? 1 : d;
            if ((e = this.$1.quickLogConfigHelper) == null ? void 0 : e.isKillswitchOn())
                return;
            this.getMarker(a, b) && this.$7.warn("Duplicate QPL markerId: " + a + " & instanceKey: " + b);
            e = this.$10(a);
            var h = e[0];
            e = e[1];
            var i = {
                passesSampling: h,
                timestamp: c,
                sampleRate: e,
                points: [],
                cancelOnUnload: f,
                trackedForLoss: g,
                type: d
            };
            this.$4.forEach(function(d) {
                d.onMarkerStart(a, b, c)
            });
            this.$5.forEach(function(d) {
                d.onMarkerStartWithMarker(a, b, c, i)
            });
            h && this.addMarker(a, b, i);
            h && g === !0 && this.$11({
                marker_id: 27787271,
                action_id: 0,
                sample_rate: 1,
                value: 0,
                annotations_int: {
                    tracked_marker_id: a
                },
                marker_type: 1
            })
        }
        ;
        b.markerAnnotate = function(a, b, c) {
            c = c === void 0 ? {} : c;
            c = c.instanceKey;
            var d = c === void 0 ? 0 : c;
            this.$4.forEach(function(c) {
                Object.keys(b).forEach(function(e) {
                    var f = b[e];
                    if (!f)
                        return;
                    Object.keys(f).forEach(function(b) {
                        c.onAnnotation(a, d, b, f[b])
                    })
                })
            });
            c = this.getMarker(a, d);
            if (!c)
                return;
            c.annotations = h(b, c.annotations)
        }
        ;
        b.markerPoint = function(a, b, c) {
            c = c === void 0 ? {} : c;
            var d = c.instanceKey
              , e = d === void 0 ? 0 : d;
            d = c.data;
            var f = d === void 0 ? void 0 : d;
            d = c.timestamp;
            var g = d === void 0 ? this.currentTimestamp() : d;
            this.$4.forEach(function(c) {
                return c.onMarkerPoint(a, e, b, f == null ? void 0 : (c = f.string) == null ? void 0 : c.__key, g)
            });
            c = this.getMarker(a, e);
            if (!c)
                return;
            d = {
                name: b,
                timeSinceStart: Math.trunc(g - c.timestamp)
            };
            var i = h(f);
            i && (d.data = i);
            c.points.push(d)
        }
        ;
        b.markerEnd = function(a, b, c, d) {
            c === void 0 && (c = 0);
            d === void 0 && (d = this.currentTimestamp());
            this.$4.forEach(function(e) {
                return e.onMarkerEnd(b, a, c, d)
            });
            var e = this.getMarker(a, c);
            if (!e)
                return;
            if (e.passesSampling) {
                var f = Math.round(d - e.timestamp);
                if (e.timestampIsApproximate !== !0) {
                    var g = e.type === 2 ? e.points : i(e.points);
                    f = {
                        marker_id: a,
                        action_id: b,
                        instance_id: c,
                        sample_rate: e.sampleRate,
                        method: "random_sampling",
                        value: f,
                        points: g,
                        metadata: {
                            application_analytics: {
                                time_since_qpl_module_init: d - this.$1.moduleLoadTimestamp
                            }
                        },
                        marker_type: e.type
                    };
                    g = k(f, e.annotations);
                    f = j(g, e.trackedForLoss);
                    this.$11(f)
                }
                this.$6 === a && this.$1.onDebuggingIdEnded && this.$1.onDebuggingIdEnded()
            }
            this.deleteMarker(a, c)
        }
        ;
        b.markerDrop = function(a, b) {
            b === void 0 && (b = 0);
            this.deleteMarker(a, b);
            var c = this.currentTimestamp();
            this.$4.forEach(function(d) {
                d.onMarkerDrop && d.onMarkerDrop(a, b, c)
            })
        }
        ;
        b.markEvent = function(a, b, c, d) {
            var e;
            d = d === void 0 ? {} : d;
            var f = d.timestamp;
            f = f === void 0 ? this.currentTimestamp() : f;
            d = d.annotations;
            if ((e = this.$1.quickLogConfigHelper) == null ? void 0 : e.isKillswitchOn())
                return;
            e = this.$10(a);
            var g = e[0];
            e = e[1];
            if (!g)
                return;
            g = h(typeof d === "function" ? d() : d);
            d = {
                marker_id: a,
                action_id: 0,
                instance_id: 0,
                sample_rate: e,
                method: "random_sampling",
                value: 0,
                da_type: b,
                da_level: c,
                metadata: {
                    application_analytics: {
                        time_since_qpl_module_init: f - this.$1.moduleLoadTimestamp
                    }
                },
                marker_type: 1
            };
            this.$11(k(d, g))
        }
        ;
        b.dropAllMarkers = function() {
            this.activeMarkers.clear()
        }
        ;
        b.setAlwaysOnSampleRate = function(a, b) {
            this.$8[a] = b
        }
        ;
        b.currentTimestamp = function() {
            return this.$1.performanceNow()
        }
        ;
        b.enableDebug = function(a) {
            this.$6 = parseInt(a, 10)
        }
        ;
        b.disableDebug = function() {
            this.$6 = null
        }
        ;
        b.addListener = function(a) {
            var b = this
              , c = this.$2++;
            this.$4.set(c, a);
            return {
                dispose: function() {
                    b.$4["delete"](c)
                }
            }
        }
        ;
        b.$10 = function(a) {
            var b;
            if (this.$1.unsampleAllEvents && this.$1.unsampleAllEvents() || this.$6 === a)
                return [!0, 1];
            b = (b = (b = this.$1.quickLogConfigHelper) == null ? void 0 : b.getEventDetails(a)) != null ? b : {
                sampleRate: 0
            };
            b = (a = (a = this.$8[a]) != null ? a : b.sampleRate) != null ? a : this.$3;
            a = b !== 0 && (b <= 1 || Math.random() * b <= 1);
            return [a, b]
        }
        ;
        b.$11 = function(a) {
            var b = this.$1.decorateEventBeforeUpload ? this.$1.decorateEventBeforeUpload(a) : a;
            this.$9.send(a, b)
        }
        ;
        b.getActiveMarkerIDs = function(a) {
            var b = a.type
              , c = [];
            this.activeMarkers.forEach(function(a, d) {
                a.forEach(function(a) {
                    if (a.type === b) {
                        c.push(d);
                        return
                    }
                })
            });
            return c.sort()
        }
        ;
        return a
    }();
    e.exports = a;
    a.normalizeAnnotations = h
}
), null);
__d("QuickPerformanceLogger", ["Promise", "requireCond", "Arbiter", "Bootloader", "Env", "FBLogger", "FBLoom", "cr:1367102", "PerfFalcoEvent", "PerfXSharedFields", "QuickLogConfigHelper", "QuickPerformanceLoggerCore", "Run", "WebStorage", "gkx", "performanceAbsoluteNow", "performanceNavigationStart"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i;
    function j(a) {
        var c = b("PerfXSharedFields").getCommonData();
        c = {
            memory_stats: {
                total_mem: c.ram_gb != null ? c.ram_gb * 1073741824 : null
            },
            network_stats: {
                downlink_megabits: c.downlink_megabits,
                network_subtype: c.effective_connection_type,
                rtt_ms: c.rtt_ms
            },
            sitedata_info: {
                client_push_phase: c.client_push_phase,
                client_revision: c.client_revision,
                server_revision: c.server_revision
            },
            locale_info: {
                locale: c.locale,
                isRTL: c.isRTL
            }
        };
        b("gkx")("1224637") && (c.workplace_info = {
            is_gemini: b("gkx")("1217157")
        });
        return babelHelpers["extends"]({}, a, {
            metadata: babelHelpers["extends"]({}, a.metadata, c)
        })
    }
    function k(a, c) {
        return new (b("Promise"))(function() {
            var d = c || a;
            typeof window.__je2e_recordQPLMarker === "function" && window.__je2e_recordQPLMarker(d);
            (g || (g = b("Env"))).enable_qplinspector === !0 && b("Bootloader").loadModules(["QPLInspector"], function(a) {
                a.appendLog(d)
            }, "QuickPerformanceLogger");
            b("gkx")("1554827") || b("gkx")("708253") ? b("PerfFalcoEvent").logImmediately(function() {
                return d
            }) : b("PerfFalcoEvent").log(function() {
                return d
            })
        }
        )
    }
    function l() {
        return (g || (g = b("Env"))).enable_qplinspector === !0 || typeof window.__je2e_recordQPLMarker === "function" || b("gkx")("1738486")
    }
    function m() {
        b("Arbiter").inform("qpl_debugger_finished")
    }
    var n = (h || (h = b("performanceAbsoluteNow")))()
      , o = {
        debug: function(a, b, c) {},
        warn: function(a) {
            b("FBLogger")("qpl").blameToPreviousDirectory().warn(a)
        }
    }
      , p = "qpl"
      , q = new Map();
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c;
            c = a.call(this, {
                quickLogConfigHelper: b("QuickLogConfigHelper"),
                decorateEventBeforeUpload: j,
                unsampleAllEvents: l,
                onDebuggingIdEnded: m,
                performanceNow: h || (h = b("performanceAbsoluteNow")),
                moduleLoadTimestamp: n
            }, o, {
                send: k
            }, q) || this;
            c.$QuickPerformanceLogger1 = 100;
            c.$QuickPerformanceLogger2 = 1;
            b("Run").onUnload(function() {
                c.$QuickPerformanceLogger3(),
                c.$QuickPerformanceLogger4(706, {
                    respectUnloadPolicy: !0,
                    timestamp: c.currentTimestamp()
                })
            });
            c.$QuickPerformanceLogger5();
            c.initQplFlipperPlugin();
            c.initLoomStartTraceListener();
            c.initLoomEndTraceListener();
            return c
        }
        var d = c.prototype;
        d.$QuickPerformanceLogger5 = function() {
            var a = this
              , c = (i || (i = b("WebStorage"))).getSessionStorageForRead();
            if (!c) {
                this.$QuickPerformanceLogger6("_loadSavedState", "sessionStorage is not available");
                return
            }
            var d = c.getItem(p);
            if (d == null)
                return;
            c.removeItem(p);
            c = JSON.parse(d);
            if (c == null) {
                this.$QuickPerformanceLogger6("_loadSavedState", "Saved state failed to deserialize");
                return
            }
            if (c.markers == null || c.markers.length === 0) {
                this.$QuickPerformanceLogger6("_loadSavedState", "No saved markers found");
                return
            }
            c.markers.forEach(function(b) {
                var c = b[0]
                  , d = b[1];
                b = b[2];
                a.addMarker(c, d, b);
                a.$QuickPerformanceLogger6("_loadSavedState", "Marker " + c + " (instanceKey: " + d + ") resumed")
            })
        }
        ;
        d.$QuickPerformanceLogger3 = function() {
            var a = this
              , c = [];
            this.activeMarkers.forEach(function(a, b) {
                a.forEach(function(a, d) {
                    a.resumeAfterNavigation === !0 && (delete a.resumeAfterNavigation,
                    c.push([b, d, a]))
                })
            });
            if (c.length > 0) {
                var d = {
                    markers: c
                }
                  , e = (i || (i = b("WebStorage"))).getSessionStorage();
                e = i.setItemGuarded(e, p, JSON.stringify(d));
                e && (c.forEach(function(b) {
                    var c = b[0];
                    b = b[1];
                    a.markerEnd(c, 96, b)
                }),
                this.$QuickPerformanceLogger6("_storeSavedState", "Failed to store saved state: " + e.message),
                b("FBLogger")("qpl").catching(e).warn("Failed to store QPL state: " + JSON.stringify(d, null, 2)));
                c.forEach(function(b) {
                    var c = b[0];
                    b = b[1];
                    a.deleteMarker(c, b)
                })
            }
        }
        ;
        d.markerStoreBeforeNavigation = function(a, b) {
            b = b === void 0 ? {} : b;
            b = b.instanceKey;
            b = b === void 0 ? 0 : b;
            a = this.getMarker(a, b);
            if (!a)
                return;
            a.resumeAfterNavigation = !0
        }
        ;
        d.markerStartFromNavStart = function(a, c) {
            c === void 0 && (c = 0);
            var d = b("performanceNavigationStart")();
            this.markerStart(a, c, d);
            if (b("performanceNavigationStart").isPolyfilled) {
                d = this.getMarker(a, c);
                d && (d.timestampIsApproximate = !0)
            }
        }
        ;
        d.$QuickPerformanceLogger4 = function(a, b) {
            var c = this;
            b = b === void 0 ? {} : b;
            var d = b.timestamp
              , e = b.respectUnloadPolicy;
            this.activeMarkers.forEach(function(b, f) {
                b.forEach(function(b, g) {
                    (!e || b.cancelOnUnload === !0) && c.markerEnd(f, a, g, d)
                })
            })
        }
        ;
        d.$QuickPerformanceLogger6 = function(a, b, c) {
            o.debug(a, b, c)
        }
        ;
        d.initQplFlipperPlugin = function() {
            b("cr:1367102") != null && this.addListener(b("cr:1367102").qplFlipperPlugin.listener())
        }
        ;
        d.initLoomEndTraceListener = function() {
            var a = this;
            this.addListener({
                onMarkerStart: function() {},
                onMarkerEnd: function(c, d, e, f) {
                    var g = a.getMarker(d, e);
                    if (!g)
                        return;
                    b("FBLoom").maybeEndTraceForQPL(d, e, f, Object.assign({
                        qpl_action: c
                    }, (d = g.annotations) == null ? void 0 : d.string, (e = g.annotations) == null ? void 0 : e["int"], (f = g.annotations) == null ? void 0 : f["double"], (c = g.annotations) == null ? void 0 : c.bool, (d = g.annotations) == null ? void 0 : d.string_array, (e = g.annotations) == null ? void 0 : e.int_array, (f = g.annotations) == null ? void 0 : f.double_array, (c = g.annotations) == null ? void 0 : c.bool_array))
                },
                onMarkerPoint: function() {},
                onAnnotation: function() {},
                onMarkerDrop: function(a, c, d) {
                    b("FBLoom").maybeEndTraceForQPL(a, c, d, {
                        qpl_action: 216
                    })
                }
            })
        }
        ;
        d.initLoomStartTraceListener = function() {
            var a = this;
            this.$QuickPerformanceLogger7({
                onMarkerStartWithMarker: function(c, d, e, f) {
                    e = b("FBLoom").maybeStartTraceForQPL(c, d, e);
                    var g = e == null ? void 0 : e.loomProviders;
                    e = e == null ? void 0 : e.traceReferenceId;
                    !f.passesSampling && e != null && a.addMarker(c, d, f);
                    e != null && a.markerAnnotate(c, {
                        string: {
                            loomRefId: e
                        }
                    }, {
                        instanceKey: d
                    });
                    g != null && a.markerAnnotate(c, {
                        string_array: {
                            loomProviders: Array.from(g)
                        }
                    }, {
                        instanceKey: d
                    })
                }
            })
        }
        ;
        d.$QuickPerformanceLogger7 = function(a) {
            var b = this.$QuickPerformanceLogger2++;
            q.set(b, a);
            return {
                dispose: function() {
                    q["delete"](b)
                }
            }
        }
        ;
        return c
    }(b("QuickPerformanceLoggerCore"));
    c = new a();
    e.exports = c
}
), null);
__d("InteractionTracingLogger", ["QuickPerformanceLogger", "performance", "performanceNavigationStart"], (function(a, b, c, d, e, f) {
    "use strict";
    f.initQPL = a;
    f.logQPL = c;
    f.logServerTimings = d;
    var g, h = b("performanceNavigationStart")(), i = /^((server_)?adp_|Relay_)/, j = new Set(["hidden", "scrollY", "visuallyComplete", "FP", "TTFB", "vcWithoutImage", "INTERACTION_1_start", "cancelType", "height", "unsupportedFeedUnit", "feedUnitError", "tracePolicy", "navSequence", "revisit", "refresh", "maintained", "ScrollToTop", "mediaVC", "traceStart", "navigation_source", "vc98", "navigation_event", "client_push_phase", "pushRequestOverlay"]), k = new Set(["HeroTracing", "GraphAPI", "FluxAction"]), l = 4;
    function m(a, c, d) {
        b("QuickPerformanceLogger").markerAnnotate(a, {
            "int": {
                numReactCommit: c.size
            }
        }, {
            instanceKey: d
        })
    }
    function n(a, c, d, e, f) {
        b("QuickPerformanceLogger").markerAnnotate(a, {
            string: (a = {},
            a[c] = d,
            a)
        }, {
            instanceKey: e
        });
        if (f != null && f.columns.has(c)) {
            b("QuickPerformanceLogger").markerAnnotate(f.event, {
                string: (a = {},
                a[c] = d,
                a)
            }, {
                instanceKey: e
            })
        }
    }
    function o(a, c, d, e, f) {
        b("QuickPerformanceLogger").markerAnnotate(a, {
            "int": (a = {},
            a[c] = d,
            a)
        }, {
            instanceKey: e
        });
        if (f != null && f.columns.has(c)) {
            b("QuickPerformanceLogger").markerAnnotate(f.event, {
                "int": (a = {},
                a[c] = d,
                a)
            }, {
                instanceKey: e
            })
        }
    }
    function p(a, c, d, e, f) {
        b("QuickPerformanceLogger").markerAnnotate(a, {
            string_array: (a = {},
            a[c] = d,
            a)
        }, {
            instanceKey: e
        });
        if (f != null && f.columns.has(c)) {
            b("QuickPerformanceLogger").markerAnnotate(f.event, {
                string_array: (a = {},
                a[c] = d,
                a)
            }, {
                instanceKey: e
            })
        }
    }
    function q(a, c, d, e, f, g) {
        b("QuickPerformanceLogger").markerPoint(a, c, {
            data: d != null ? {
                string: {
                    __key: d
                }
            } : null,
            instanceKey: e,
            timestamp: f
        }),
        g != null && g.columns.has(c) && b("QuickPerformanceLogger").markerPoint(g.event, c, {
            instanceKey: e,
            timestamp: f
        })
    }
    function r(a, b, c, d) {
        for (var e in b.metadata) {
            var f = b.metadata[e];
            typeof f === "string" ? n(a, e, f, c, d) : typeof f === "number" && o(a, e, f, c, d)
        }
        for (var g in b.tagSet) {
            f = Array.from(b.tagSet[g]);
            p(a, g, f, c, d)
        }
    }
    function s(a, b, c, d, e) {
        for (var f in b) {
            var g = b[f]
              , i = g.data
              , j = g.timestamp;
            g = g.type;
            if (k.has(g) || d.exec(f))
                continue;
            q(a, f, i && Object.keys(i).length ? JSON.stringify(i) : void 0, c, j + h, e)
        }
    }
    function t(a, b, c, d, e) {
        for (var f in b) {
            if (d.exec(f))
                continue;
            for (var g = 0; g < b[f].length; g++) {
                var i = b[f][g]
                  , j = i.data
                  , m = i.end
                  , n = i.start;
                i = i.type;
                if (k.has(i))
                    continue;
                i = b[f].length === 1 ? f : f + "_" + (g >= l ? "MAX" : g + 1);
                q(a, i + "_start", void 0, c, n + h, e);
                q(a, i + "_end", Object.keys(j).length ? JSON.stringify(j) : void 0, c, m + h, e)
            }
        }
    }
    function u(a, b, c) {
        var d, e = c.liteQPLMapping;
        e && e[a] && (b != null && e[a][b] ? d = e[a][b] : d = e[a]["*"]);
        if (d != null) {
            return {
                event: d,
                columns: (b = c.liteQPLColumns) != null ? b : j
            }
        }
        return null
    }
    function a(a, c, d) {
        b("QuickPerformanceLogger").markerStart(a, d, c + h)
    }
    function c(a, c, d, e, f) {
        e = u(a, e, f);
        e != null && b("QuickPerformanceLogger").markerStart(e.event, d, c.start + h);
        f = (f = f.pointFilterRegex) != null ? f : i;
        m(a, c.commitSet, d);
        r(a, c, d, e);
        s(a, c.markerPoints, d, f, e);
        t(a, c.subSpans, d, f, e);
        f = c.metadata.isError ? 87 : c.wasOffline ? 160 : c.wasCanceled ? 4 : 2;
        b("QuickPerformanceLogger").markerEnd(a, f, d, ((a = c.completed) != null ? a : 0) + h);
        if (e != null) {
            b("QuickPerformanceLogger").markerEnd(e.event, f, d, ((a = c.completed) != null ? a : 0) + h)
        }
        return f
    }
    function d(a, c, d) {
        var e = typeof window.qpl_inl === "function" ? window.qpl_inl() : {};
        e = e[c + "-server"];
        if (e) {
            c = ((g || (g = b("performance"))) == null ? void 0 : (g || (g = b("performance"))).timing) || {};
            var f = h;
            c.requestStart && c.responseStart && e.earlyFlush && (f = (c.requestStart + c.responseStart - e.earlyFlush) / 2);
            b("QuickPerformanceLogger").markerStart(a, 0, f);
            r(a, d, 0);
            c = 0;
            for (var i in e)
                c = Math.max(c, e[i]),
                b("QuickPerformanceLogger").markerPoint(a, i, {
                    timestamp: e[i] + f
                });
            b("QuickPerformanceLogger").markerEnd(a, 2, 0, c + f)
        }
    }
}
), null);
__d("ResourceTimingStore", ["performance"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getEntries = c;
    var g, h = new Map();
    function i(a) {
        for (var a = a, b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
            var d;
            if (b) {
                if (c >= a.length)
                    break;
                d = a[c++]
            } else {
                c = a.next();
                if (c.done)
                    break;
                d = c.value
            }
            d = d;
            if (!(d instanceof PerformanceResourceTiming))
                return;
            var e = d.name
              , f = e.lastIndexOf("#");
            f !== -1 && (e = e.slice(0, f));
            h.set(e, d)
        }
    }
    function a(a) {
        i(a.getEntries())
    }
    var j = null;
    if (typeof PerformanceObserver !== "undefined") {
        j = new PerformanceObserver(a);
        try {
            j.observe({
                entryTypes: ["resource"]
            })
        } catch (a) {}
    }
    typeof (g || (g = b("performance"))).getEntriesByType === "function" && i((g || (g = b("performance"))).getEntriesByType("resource"));
    function c() {
        j && typeof j.takeRecords === "function" && i(j.takeRecords());
        return new Map(h)
    }
}
), null);
__d("HeroBootloadPerfStore", ["BootloaderEvents", "InteractionTracingMetrics", "ResourceTimingStore", "performanceNavigationStart"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getResourceStatsByTier = m;
    f.addResourceDownloadStats = a;
    var g = ["encodedBodySize", "transferSize", "totalCount", "cacheCount"]
      , h = ["t1", "t2", "t3"]
      , i = ["js", "css"]
      , j = new Map();
    b("BootloaderEvents").onBootload(function(a) {
        a.components.forEach(function(b) {
            j.set(b, a)
        })
    });
    function k(a, b) {
        if (b == null) {
            a.missingData++;
            return
        }
        b = b;
        if (!(b != null && typeof b === "object" && typeof b.encodedBodySize === "number" && typeof b.decodedBodySize === "number" && typeof b.transferSize === "number")) {
            a.missingData++;
            return
        }
        a.encodedBodySize += b.encodedBodySize;
        a.decodedBodySize += b.decodedBodySize;
        a.transferSize += b.transferSize;
        a.totalCount += 1;
        b.transferSize === 0 && (a.cacheCount += 1)
    }
    function l(a) {
        return a.src.indexOf("data") === 0
    }
    function m(a, c, d) {
        var e = new Map();
        function f(a) {
            var b;
            b = (b = e.get(a)) != null ? b : {
                cacheCount: 0,
                decodedBodySize: 0,
                encodedBodySize: 0,
                missingData: 0,
                totalCount: 0,
                transferSize: 0
            };
            e.set(a, b);
            return b
        }
        var g = b("ResourceTimingStore").getEntries();
        function h(a, b) {
            var e = b.src
              , h = e.lastIndexOf("#");
            h !== -1 && (e = e.slice(0, h));
            h = g.get(e);
            e = typeof PerformanceResourceTiming !== "undefined" && h instanceof PerformanceResourceTiming ? h : null;
            k(f("used_" + b.type), e);
            k(f("used_" + a), e);
            k(f("used_" + a + "_" + b.type), e);
            e != null && e.responseEnd >= c && e.responseEnd <= d && (k(f("downloaded_" + a), e),
            k(f("downloaded_" + b.type), e),
            k(f("downloaded_" + a + "_" + b.type), e))
        }
        function i(a, b) {
            a.decodedBodySize += b.length,
            a.totalCount += 1
        }
        function j(a, b) {
            i(f("inline_" + a), b.src),
            i(f("inline_" + b.type), b.src),
            i(f("inline_" + a + "_" + b.type), b.src)
        }
        var m = function() {
            if (o) {
                if (p >= n.length)
                    return "break";
                q = n[p++]
            } else {
                p = n.next();
                if (p.done)
                    return "break";
                q = p.value
            }
            var a = q
              , b = a[0];
            a = a[1];
            a.forEach(function(a, c) {
                if (!(a.type === "css" || a.type === "js"))
                    return;
                l(a) ? j(b, a) : h(b, a)
            })
        };
        for (var n = a, o = Array.isArray(n), p = 0, n = o ? n : n[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
            var q;
            a = m();
            if (a === "break")
                break
        }
        return e
    }
    function n(a, b, c) {
        var d;
        d = (d = a.get(b)) != null ? d : new Map();
        a.set(b, d);
        for (var a = c, b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
            var e;
            if (b) {
                if (c >= a.length)
                    break;
                e = a[c++]
            } else {
                c = a.next();
                if (c.done)
                    break;
                e = c.value
            }
            e = e;
            (e.type === "css" || e.type === "js") && d.set(e.src, e)
        }
    }
    function a(a) {
        var c;
        c = Array.from(new Set((c = []).concat.apply(c, a.heroBootloads.map(function(a) {
            return a.moduleIDs
        }))));
        var d = new Map()
          , e = new Map();
        c.forEach(function(a) {
            var b = j.get(a);
            b && e.set(a, b)
        });
        for (var c = e.values(), f = Array.isArray(c), k = 0, c = f ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
            var l;
            if (f) {
                if (k >= c.length)
                    break;
                l = c[k++]
            } else {
                k = c.next();
                if (k.done)
                    break;
                l = k.value
            }
            l = l;
            n(d, "t1", l.tierOne.values());
            n(d, "t2", l.tierTwo.values());
            n(d, "t3", l.tierThree.values())
        }
        var o = m(d, a.start, (l = a.completed) != null ? l : a.start);
        [].concat(i, h).forEach(function(c) {
            var d = o.get("downloaded_" + c);
            for (var e = 0; e < g.length; e++) {
                var f = g[e];
                b("InteractionTracingMetrics").addMetadata(a.traceId, "bootload_downloaded_" + c + "_" + f, (f = d == null ? void 0 : d[f]) != null ? f : 0)
            }
            f = o.get("inline_" + c);
            b("InteractionTracingMetrics").addMetadata(a.traceId, "bootload_inline_" + c + "_decodedBodySize", (e = f == null ? void 0 : f.decodedBodySize) != null ? e : 0)
        });
        a.heroBootloads.forEach(function(c) {
            var d = c.moduleIDs
              , e = c.pageletStack;
            d.forEach(function(c) {
                c = j.get(c);
                if (c) {
                    var d = new Map();
                    n(d, "t1", c.tierOne.values());
                    n(d, "t2", c.tierTwo.values());
                    n(d, "t3", c.tierThree.values());
                    d = m(d, a.start, (d = a.completed) != null ? d : a.start);
                    var f = {};
                    for (var k = h, l = Array.isArray(k), o = 0, k = l ? k : k[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                        var p;
                        if (l) {
                            if (o >= k.length)
                                break;
                            p = k[o++]
                        } else {
                            o = k.next();
                            if (o.done)
                                break;
                            p = o.value
                        }
                        p = p;
                        for (var q = i, r = Array.isArray(q), s = 0, q = r ? q : q[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                            var t;
                            if (r) {
                                if (s >= q.length)
                                    break;
                                t = q[s++]
                            } else {
                                s = q.next();
                                if (s.done)
                                    break;
                                t = s.value
                            }
                            t = t;
                            for (var u = 0; u < g.length; u++) {
                                var v = g[u]
                                  , w = "downloaded_" + p + "_" + t;
                                f["bootload_" + w + "_" + v] = (w = (w = d.get(w)) == null ? void 0 : w[v]) != null ? w : 0;
                                v = "inline_" + p + "_" + t;
                                f["bootload_" + v + "_decodedBodySize"] = (v = (w = d.get(v)) == null ? void 0 : w.decodedBodySize) != null ? v : 0
                            }
                        }
                    }
                    b("InteractionTracingMetrics").addSubspan(a.traceId, "Bootload: " + c.components.join(), "HeroTracing", Math.max(a.start, c.startTime - b("performanceNavigationStart")()), Math.min((w = a.completed) != null ? w : Infinity, c.callbackStart - b("performanceNavigationStart")()), babelHelpers["extends"]({
                        pagelet: e[e.length - 1],
                        pageletStack: e,
                        spanType: "Bootload"
                    }, f))
                }
            })
        })
    }
}
), null);
__d("InteractionTracingLoomProvider", ["InteractionTracingMetrics", "performanceNavigationStart"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("performanceNavigationStart")()
      , h = function() {
        var c = a.prototype;
        c.$2 = function(a, b) {
            var c = this.$1;
            if (!c)
                return;
            c.buffer.addEvent(a, g + b)
        }
        ;
        c.$3 = function(a, b, c) {
            var d = this
              , e = a.subSpans
              , f = function(f) {
                e[f].forEach(function(e, g) {
                    if (e.type === "AppTiming" || e.type === "CometHeroTiming" || e.type === "RelayQuery" || e.type === "HeroTracing" || e.type === "GraphAPI" || e.type === "FluxAction" || e.type === "DOMEventTiming") {
                        var h = e.data;
                        if (e.type === "CometHeroTiming" && (h == null || h.tracePolicy !== a.metadata.tracePolicy || c == null || h.event == null || !Array.isArray(h.event) || h.event.indexOf(c) === -1))
                            return;
                        h = {
                            blockName: f + "_" + g,
                            blockType: e.type,
                            execUnitName: f,
                            traceId: b,
                            traceType: a.type
                        };
                        d.$2(babelHelpers["extends"]({
                            type: "INTERACTION_TRACE_START"
                        }, h), e.start);
                        d.$2(babelHelpers["extends"]({
                            blockAnnotations: e.data,
                            type: "INTERACTION_TRACE_END"
                        }, h), e.end)
                    }
                })
            };
            for (var g in e)
                f(g)
        }
        ;
        c.$4 = function(a, b) {
            var c = this
              , d = a.reactRender
              , e = function(e) {
                d[e].forEach(function(d, f) {
                    f = {
                        blockName: e + "_" + f,
                        blockType: "ReactRender",
                        execUnitName: e,
                        traceId: b,
                        traceType: a.type
                    };
                    c.$2(babelHelpers["extends"]({
                        type: "INTERACTION_TRACE_START"
                    }, f), d.start);
                    c.$2(babelHelpers["extends"]({
                        blockAnnotations: {
                            actualDuration: d.actualDuration,
                            baseDuration: d.baseDuration,
                            phase: d.phase
                        },
                        type: "INTERACTION_TRACE_END"
                    }, f), d.end)
                })
            };
            for (var f in d)
                e(f)
        }
        ;
        c.$5 = function(a, b) {
            var c = a.payloadResources;
            for (var d in c) {
                var e = c[d]
                  , f = {
                    blockName: d,
                    blockType: "PayloadResources",
                    execUnitName: e.initiator,
                    traceId: b,
                    traceType: a.type
                };
                this.$2(babelHelpers["extends"]({
                    type: "INTERACTION_TRACE_START"
                }, f), e.start);
                this.$2({
                    blockName: d,
                    execUnitName: e.initiator,
                    pointAnnotations: {},
                    pointName: "requestStart",
                    traceId: b,
                    type: "INTERACTION_TRACE_POINT"
                }, e.requestStart);
                this.$2(babelHelpers["extends"]({
                    blockAnnotations: {
                        refs: e.refs.join(","),
                        transferSize: e.transferSize,
                        url: e.url
                    },
                    type: "INTERACTION_TRACE_END"
                }, f), e.end)
            }
        }
        ;
        c.$6 = function(a, b) {
            var c = a.imagePreloaderTimings;
            for (var d in c) {
                var e = c[d]
                  , f = {
                    blockName: d,
                    blockType: "ImagePreloaders",
                    execUnitName: e.playloadName,
                    traceId: b,
                    traceType: a.type
                };
                this.$2(babelHelpers["extends"]({
                    type: "INTERACTION_TRACE_START"
                }, f), e.start);
                this.$2({
                    blockName: d,
                    execUnitName: e.playloadName,
                    pointAnnotations: {},
                    pointName: "requestStart",
                    traceId: b,
                    type: "INTERACTION_TRACE_POINT"
                }, e.requestStart);
                this.$2(babelHelpers["extends"]({
                    blockAnnotations: {
                        url: d
                    },
                    type: "INTERACTION_TRACE_END"
                }, f), e.end)
            }
        }
        ;
        c.$7 = function(a, b) {
            var c = this
              , d = a.payloadTimings
              , e = function(e) {
                var f = d[e];
                if (f.start == null || f.end == null)
                    return {
                        v: void 0
                    };
                var g = {
                    blockName: e,
                    blockType: f.payloadType,
                    execUnitName: e,
                    traceId: b,
                    traceType: a.type
                };
                c.$2(babelHelpers["extends"]({
                    type: "INTERACTION_TRACE_START"
                }, g), f.start);
                Object.keys(f.points).forEach(function(a) {
                    c.$2({
                        blockName: e,
                        execUnitName: e,
                        pointAnnotations: {},
                        pointName: a,
                        traceId: b,
                        type: "INTERACTION_TRACE_POINT"
                    }, f.points[a])
                });
                var h = babelHelpers["extends"]({}, f.data);
                for (var i in f.pkgStat) {
                    var j = f.pkgStat[i];
                    for (var k in j)
                        h[i + "_" + k] = j[k]
                }
                c.$2(babelHelpers["extends"]({
                    blockAnnotations: h,
                    type: "INTERACTION_TRACE_END"
                }, g), f.end)
            };
            for (var f in d) {
                var g = e(f);
                if (typeof g === "object")
                    return g.v
            }
        }
        ;
        c.$8 = function(a, b, c) {
            var d = a.markerPoints;
            for (var e in d) {
                var f = d[e];
                if (f.type === "AppTiming" || f.type === "CometHeroTiming" || f.type === "RelayQuery" || f.type === "VisualCompletion" || f.type === "ServerTimings" || f.type === "NavigationTiming") {
                    var g = f.timestamp
                      , h = f.type
                      , i = f.data;
                    if (f.type === "CometHeroTiming" && (i == null || i.tracePolicy !== a.metadata.tracePolicy || c == null || i.event == null || !Array.isArray(i.event) || i.event.indexOf(c) === -1))
                        continue;
                    i = {
                        blockName: e,
                        blockType: h,
                        execUnitName: e,
                        traceId: b,
                        traceType: a.type
                    };
                    this.$2(babelHelpers["extends"]({
                        type: "INTERACTION_TRACE_START"
                    }, i), g);
                    this.$2(babelHelpers["extends"]({
                        blockAnnotations: f.data || {},
                        type: "INTERACTION_TRACE_END"
                    }, i), g)
                }
            }
        }
        ;
        c.$9 = function(a, b) {
            var c = a.requireDeferreds;
            for (var d in c) {
                var e = c[d]
                  , f = {
                    blockName: d,
                    blockType: "RequireDeferreds",
                    execUnitName: d,
                    traceId: b,
                    traceType: a.type
                }
                  , g = e.end;
                if (g == null)
                    continue;
                this.$2(babelHelpers["extends"]({
                    type: "INTERACTION_TRACE_START"
                }, f), e.start);
                this.$2(babelHelpers["extends"]({
                    blockAnnotations: {
                        alreadyRequired: Boolean(e.alreadyRequired)
                    },
                    type: "INTERACTION_TRACE_END"
                }, f), g)
            }
        }
        ;
        c.$10 = function(a, b) {
            var c = a.bootloads;
            for (var d in c) {
                var e = c[d]
                  , f = {
                    blockName: d,
                    blockType: "Bootloads",
                    execUnitName: d,
                    traceId: b,
                    traceType: a.type
                };
                this.$2(babelHelpers["extends"]({
                    type: "INTERACTION_TRACE_START"
                }, f), e.start);
                this.$2(babelHelpers["extends"]({
                    blockAnnotations: {
                        allResourcesDownloaded: e.allResourcesDownloaded
                    },
                    type: "INTERACTION_TRACE_END"
                }, f), e.end)
            }
        }
        ;
        c.$11 = function(a, b, c, d) {
            for (var e = 0; e < d.length; e++) {
                var f = {
                    blockName: a + "_" + e,
                    blockType: a,
                    execUnitName: a + "_" + e,
                    traceId: c,
                    traceType: b.type
                };
                this.$2(babelHelpers["extends"]({
                    type: "INTERACTION_TRACE_START"
                }, f), d[e].start);
                this.$2(babelHelpers["extends"]({
                    blockAnnotations: {},
                    type: "INTERACTION_TRACE_END"
                }, f), d[e].end)
            }
        }
        ;
        c.$12 = function(a) {
            var b = this;
            a.factoryTimings.forEach(function(c) {
                var d = {
                    blockName: c.name,
                    blockType: "Factories",
                    execUnitName: "Factories",
                    traceId: a.traceId,
                    traceType: a.type
                };
                b.$2(babelHelpers["extends"]({
                    type: "INTERACTION_TRACE_START"
                }, d), c.start);
                b.$2(babelHelpers["extends"]({
                    blockAnnotations: {},
                    type: "INTERACTION_TRACE_END"
                }, d), c.end)
            })
        }
        ;
        function a(a) {
            this.$1 = a
        }
        c.loomTraceWillEnd = function() {
            var a = this
              , c = this.$1;
            if (!c)
                return;
            var d = b("InteractionTracingMetrics").dump()
              , e = [];
            if (c.triggerInfo.type === "INTERACTION" && c.triggerInfo.interaction_id != null)
                e.push(c.triggerInfo.interaction_id);
            else
                for (var f in d) {
                    var h = d[f];
                    h = h.completed != null ? g + h.completed : null;
                    (h == null || h > c.startTime) && e.push(f)
                }
            e.forEach(function(b) {
                var c = d[b];
                a.$3(c, b, c.qplEvent);
                a.$8(c, b, c.qplEvent);
                a.$9(c, b);
                a.$10(c, b);
                a.$4(c, b);
                a.$5(c, b);
                a.$6(c, b);
                a.$7(c, b);
                a.$11("hidden", c, b, c.hiddenTimings);
                a.$11("offline", c, b, c.offlineTimings);
                a.$12(c)
            })
        }
        ;
        return a
    }();
    a = {
        getInstance: function(a) {
            return new h(a)
        },
        isSupported: function() {
            return !0
        },
        loomProviderId: "InteractionTracing"
    };
    e.exports = a
}
), null);
__d("JSTraceListener", ["ErrorGuard", "InteractionTracingMetrics", "removeFromArray"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = !1;
    function i() {
        if (h)
            return;
        h = !0;
        b("InteractionTracingMetrics").listen(l)
    }
    var j = {};
    function k(a, c) {
        h || i();
        Object.prototype.hasOwnProperty.call(j, a) || (j[a] = []);
        j[a].push(c);
        return function() {
            j[a] && (b("removeFromArray")(j[a], c),
            j[a].length || delete j[a])
        }
    }
    function l(a) {
        if (Object.prototype.hasOwnProperty.call(j, a.name)) {
            var c = a.name;
            c = j[c];
            c.length && c.slice().forEach(function(c) {
                (g || (g = b("ErrorGuard"))).applyWithGuard(c, null, [a], {
                    name: "JSTraceListener"
                })
            })
        }
    }
    function a(a) {
        var c = {
            onComplete: function(d) {
                var e = b("InteractionTracingMetrics").get(a);
                if (e && e.completed != null) {
                    d(e.completed, e);
                    return c
                }
                var f = k(a, function(a) {
                    a.__type === "complete" && (d(a.timestamp, a.interaction),
                    f())
                });
                return c
            }
        };
        return c
    }
}
), null);
__d("CometVCTracker", ["requireCond", "cr:1642790"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("cr:1642790")
}
), null);
__d("VisualCompletionLoomProvider", ["CometVCTracker"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("CometVCTracker").CometVisualCompletionTraceObserver
      , h = function() {
        a.isSupported = function() {
            return !0
        }
        ;
        function a(a) {
            var b = this;
            this.$2 = function(a) {
                var c = b.$1;
                if (c != null && a != null && a.startTime >= c.startTime) {
                    var d = new Map();
                    a.elements.forEach(function(a) {
                        var b;
                        d.set(a.timestamp, ((b = d.get(a.timestamp)) != null ? b : 0) + a.pixels)
                    });
                    Array.from(d.entries()).sort(function(a, b) {
                        return a[0] - b[0]
                    }).reduce(function(b, d) {
                        var e = d[0];
                        d = d[1];
                        b = b + d;
                        c.buffer.addEvent({
                            progress: b / a.paintedPixels,
                            type: "VISUAL_COMPLETION_PROGRESS"
                        }, e);
                        return b
                    }, 0);
                    b.$3(c, a, a.elements.filter(function(a) {
                        return a.parent == null
                    }), 0)
                }
            }
            ;
            this.$1 = a;
            g.subscribe(this.$2)
        }
        var b = a.prototype;
        b.$3 = function(a, b, c, d, e) {
            var f = this;
            e === void 0 && (e = null);
            c.slice().sort(function(a, b) {
                return a.timestamp - b.timestamp
            }).forEach(function(c) {
                var g = c.rectangle
                  , h = c.type === "component" || e == null ? c.timestamp : Math.max(c.timestamp, e.timestamp);
                a.buffer.addEvent({
                    depth: d,
                    elementType: c.type,
                    height: Math.floor(g.bottom - g.top),
                    mutationType: c.mutationType,
                    type: "VISUAL_COMPLETION_RECT",
                    width: Math.floor(g.right - g.left),
                    x: Math.floor(g.left),
                    y: Math.floor(g.top)
                }, h);
                c.children.length && f.$3(a, b, c.children, d + 1, c)
            })
        }
        ;
        b.loomTraceWillEnd = function() {
            g.unsubscribe(this.$2),
            this.$1 = null
        }
        ;
        return a
    }();
    a = {
        getInstance: function(a) {
            return new h(a)
        },
        isSupported: function() {
            return h.isSupported()
        },
        loomProviderId: "VisualCompletion"
    };
    e.exports = a
}
), null);
__d("InteractionTracing", ["CometHeroLogging", "CometHeroPendingPlaceholderTracker", "CurrentLocale", "FBLoom", "HeroBootloadPerfStore", "InteractionTracingLogger", "InteractionTracingLoomProvider", "InteractionTracingMetrics", "JSScheduler", "JSTraceListener", "JSTracing", "Locale", "NetworkStatus", "Run", "SiteData", "VisibilityListener", "VisualCompletionLoomProvider", "clearTimeout", "emptyFunction", "gkx", "performanceNavigationStart", "performanceNow", "requireCond", "setTimeoutAcrossTransitions", "uuid", "cr:683059", "cr:1075529", "cr:1725317", "cr:1401519"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("performanceNavigationStart")(), i = new Set(), j = null;
    b("FBLoom").addProvider(b("InteractionTracingLoomProvider"));
    b("FBLoom").addProvider(b("VisualCompletionLoomProvider"));
    var k = 6e4
      , l = {
        defaultTracePolicy: "default",
        useDocumentBodyForVCRoot: !0
    }
      , m = {
        addGlobalMetadata: function(a, b) {},
        addMarkerPoint: function(a, c, d) {
            d === void 0 && (g || (g = b("performanceNow")))()
        },
        addMetadata: function(a, b) {},
        addTag: function(a, b) {},
        getTraceId: function() {
            return ""
        },
        observeMutation: function(a) {},
        onComplete: function(a) {},
        onCompleteSync: function(a) {},
        setTracePolicy: function(a) {},
        trackLoadingState: function(a) {}
    }
      , n = new Set()
      , o = 1
      , p = null;
    if (b("gkx")("926112") && window.location.href.contains("browserLabTag=")) {
        a = new URLSearchParams(window.location.search);
        p = a.get("browserLabTag")
    }
    function q(a) {
        if (typeof window.qpl_tag === "function") {
            a.tagSet.CometTags || (a.tagSet.CometTags = new Set());
            var c = a.type === "INITIAL_LOAD" || a.type === "NAVIGATION"
              , d = a.tagSet.CometTags;
            a = window.qpl_tag();
            a && a.length && a.forEach(function(a) {
                a && a.length && a.forEach(function(a) {
                    d.add(a),
                    c && b("cr:683059") && b("cr:683059").addTag("CometTags", a)
                })
            })
        }
    }
    function r(a, c, d, e, f) {
        var g = c + h
          , i = d + h;
        c = b("VisibilityListener").getHiddenTimings(g, i);
        if (c != null && c.length > 0) {
            var j = []
              , k = null;
            c.filter(function(a) {
                return a.key >= g && a.key <= i
            }).forEach(function(a) {
                a.value && k == null ? k = a.key : !a.value && k != null && (j.push({
                    end: a.key - h,
                    start: k - h
                }),
                k = null)
            });
            k != null && j.push({
                end: d,
                start: k - h
            });
            b("InteractionTracingMetrics").addHiddenTiming(a, j);
            j.length > 0 && b("InteractionTracingMetrics").addMarkerPoint(a, "backgrounded", "AppTiming", j[0].start)
        }
        if (e.metadata.hidden === void 0 && e.completed != null) {
            c = b("VisibilityListener").getHiddenTime(e.start + h, e.completed + h);
            d = c != null && c > 0 ? 1 : 0;
            f.addMetadata("hidden", d)
        }
    }
    function s(a, c) {
        var d;
        d = (d = c.completed) != null ? d : (g || (g = b("performanceNow")))();
        var e = c.markerPoints.visuallyComplete ? c.markerPoints.visuallyComplete.timestamp : d
          , f = []
          , h = null;
        a.forEach(function(a) {
            !a.isOnline ? (h = a.timestamp,
            h < e && (c.wasOffline = !0)) : h != null && (f.push({
                end: a.timestamp,
                start: h
            }),
            h = null)
        });
        h != null && f.push({
            end: d,
            start: h
        });
        b("InteractionTracingMetrics").addOfflineTiming(c.traceId, f)
    }
    function t(a, c) {
        var d;
        c.interactionClass && a.addMetadata("interactionClass", c.interactionClass);
        p != null && p !== "" && a.addMetadata("browserLabTag", p);
        var e = c.start;
        d = (d = c.completed) != null ? d : (g || (g = b("performanceNow")))();
        r(c.traceId, e, d, c, a);
        a.addMetadata("locale", b("CurrentLocale").get());
        a.addMetadata("client_revision", b("SiteData").client_revision);
        a.addMetadata("client_push_phase", b("SiteData").push_phase);
        b("SiteData").server_revision != null && a.addMetadata("server_revision", b("SiteData").server_revision);
        a.addMetadata("isRTL", Number(b("Locale").isRTL()));
        a.addMetadata("navStartOffset", c.start)
    }
    var u = {
        checkAndMarkRevisit: function(a) {
            if (a == null)
                return !1;
            var b = n.has(a);
            n.add(a);
            return b
        },
        getCurrentTabTracePolicy: function() {
            var a;
            return (a = j) != null ? a : "comet.app"
        },
        setCurrentTabTracePolicy: function(a) {
            j = a
        },
        startInteraction: function(a, c) {
            c === void 0 && (c = b("emptyFunction"));
            var d = b("CometHeroLogging").genCometHeroInteractionUUIDAndMarkStart(a.interactionID);
            return u.trace(a.qplEvent, c, a.interactionClass, a.traceType, a.tracePolicy, d, a.startTime, a.eventQueueTime, a.tracingConfig)
        },
        trace: function(a) {
            function b(b, c, d, e, f, g, h, i, j) {
                return a.apply(this, arguments)
            }
            b.toString = function() {
                return a.toString()
            }
            ;
            return b
        }(function(a, c, d, e, f, n, p, r, u) {
            n === void 0 && (n = b("uuid")());
            r === void 0 && (r = null);
            u === void 0 && (u = l);
            var v = (p = p) != null ? p : e === "INITIAL_LOAD" ? 0 : (g || (g = b("performanceNow")))()
              , w = (p = u.loggingOpts) != null ? p : Object.freeze({})
              , x = []
              , y = j
              , z = o++
              , A = f
              , B = {
                addGlobalMetadata: function(a, c) {
                    b("InteractionTracingMetrics").addGlobalMetadata(n, a, c)
                },
                addMarkerPoint: function(a, c, d) {
                    d === void 0 && (d = (g || (g = b("performanceNow")))()),
                    b("InteractionTracingMetrics").addMarkerPoint(n, a, c, d)
                },
                addMetadata: function(a, c) {
                    b("InteractionTracingMetrics").addMetadata(n, a, c)
                },
                addTag: function(a, c) {
                    b("InteractionTracingMetrics").addTag(n, a, c)
                },
                getTraceId: function() {
                    return n
                },
                observeMutation: function(a) {
                    b("cr:1075529") && b("cr:1075529").observeMutation(n, a)
                },
                onComplete: function(a) {
                    F.push(a)
                },
                onCompleteSync: function(a) {
                    G.push(a)
                },
                setTracePolicy: function(c) {
                    if (c == null)
                        return;
                    A = c;
                    B.addMetadata("tracePolicy", A);
                    if (D == null) {
                        c = b("FBLoom").maybeStartTraceForInteraction(n, d, a, A, v);
                        D = c == null ? void 0 : c.traceReferenceId;
                        E = c == null ? void 0 : c.loomProviders
                    }
                    c = b("InteractionTracingMetrics").get(n);
                    c && c.vcTracker && c.vcTracker.setTracePolicy(A)
                },
                trackLoadingState: function(a) {
                    b("cr:1075529") && b("cr:1075529").observeLoadingState(n, a)
                }
            };
            if (b("gkx")("1409295") && e === "TAIL_LOAD") {
                c(m);
                return n
            }
            b("NetworkStatus").isOnline() || x.push({
                isOnline: !1,
                timestamp: (g || (g = b("performanceNow")))()
            });
            var C = b("NetworkStatus").onChange(function(a) {
                x.push({
                    isOnline: a.online,
                    timestamp: (g || (g = b("performanceNow")))()
                })
            }), D, E;
            if (A != null) {
                p = b("FBLoom").maybeStartTraceForInteraction(n, d, a, A, v);
                D = p == null ? void 0 : p.traceReferenceId;
                E = p == null ? void 0 : p.loomProviders
            }
            b("InteractionTracingLogger").initQPL(a, v, z);
            var F = []
              , G = []
              , H = null;
            b("cr:683059") && (H = b("cr:683059").addTracedInteraction(e, n, a));
            var I, J = b("setTimeoutAcrossTransitions")(function() {
                var a = b("JSTracing").dumpActiveContinuations(n);
                a.forEach(function(a) {
                    b("InteractionTracingMetrics").addTag(n, "pendingJsTracing", a)
                });
                a = b("CometHeroPendingPlaceholderTracker").dump(n);
                a.forEach(function(a) {
                    b("InteractionTracingMetrics").addTag(n, "pendingPlaceholder", a)
                })
            }, k);
            b("JSTraceListener")(n).onComplete(function(c, d) {
                b("clearTimeout")(J);
                if (d == null)
                    return;
                G.forEach(function(a) {
                    return a(d)
                });
                C.remove();
                e !== "INITIAL_LOAD" && e !== "NAVIGATION" && i["delete"](n);
                b("JSScheduler").scheduleLoggingPriCallback(function() {
                    A == null && B.addMetadata("tracePolicy", u.defaultTracePolicy);
                    y != null && B.addMetadata("referrer", y);
                    B.addMetadata("interactionId", n);
                    t(B, d);
                    b("cr:683059") && H != null && H();
                    var c = function() {
                        q(d);
                        F.forEach(function(a) {
                            a(d)
                        });
                        D != null && B.addMetadata("loomRefId", D);
                        E != null && E.forEach(function(a) {
                            return B.addTag("loomProviders", a)
                        });
                        var c = function() {
                            s(x, d);
                            b("HeroBootloadPerfStore").addResourceDownloadStats(d);
                            var c = b("InteractionTracingLogger").logQPL(a, d, z, A, w);
                            I && I.remove && I.remove();
                            D != null && b("FBLoom").endTraceForInteraction(d, c);
                            delete d.vcTracker;
                            b("cr:1725317") && b("cr:1725317").markInteraction(d, e)
                        }
                          , f = d.vcTracker;
                        f && !d.hasVcReport ? (f.onComplete(function() {
                            c()
                        }),
                        f.unlock(n)) : c()
                    };
                    d.type === "INITIAL_LOAD" && document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", function() {
                        c()
                    }) : c()
                })
            });
            b("JSTracing").trace(n, function() {
                I = b("Run").onBeforeUnload(function() {
                    var c = b("InteractionTracingMetrics").get(n);
                    if (c) {
                        var d;
                        G.forEach(function(a) {
                            return a(c)
                        });
                        F.forEach(function(a) {
                            a(c)
                        });
                        B.addMetadata("tracePolicy", (d = A) != null ? d : u.defaultTracePolicy);
                        B.addMetadata("cancelType", "unload");
                        c.hasVcReport || ((c.type === "INITIAL_LOAD" || c.type === "NAVIGATION") && b("cr:683059") ? b("cr:683059").logIncompleteVC(c, "unload") : (c.vcTracker && c.vcTracker.forceInstrumentation(),
                        c.wasCanceled = !0));
                        c.completed == null && (c.completed = (g || (g = b("performanceNow")))());
                        t(B, c);
                        s(x, c);
                        q(c);
                        b("InteractionTracingLogger").logQPL(a, c, z, A, w);
                        I.remove()
                    }
                }, !1);
                b("InteractionTracingMetrics").setInteractionType(n, d, e, a);
                var f = b("InteractionTracingMetrics").get(n);
                switch (e) {
                case "INITIAL_LOAD":
                    if (b("cr:683059")) {
                        var j = b("cr:683059").traceNavigation(n, h, "INITIAL_LOAD");
                        f && (f.vcTracker = j);
                        u.useDocumentBodyForVCRoot === !0 && j.observeMutation(window.document.body)
                    }
                    break;
                case "NAVIGATION":
                    i.forEach(function(a) {
                        var c = b("InteractionTracingMetrics").get(a);
                        c && c.vcTracker && !c.hasVcReport && (c.wasCanceled = !0,
                        c.metadata.cancelType = "navigation",
                        c.vcTracker.forceInstrumentation(),
                        b("gkx")("1409295") && b("InteractionTracingMetrics").complete(a))
                    });
                    if (b("cr:683059")) {
                        j = b("cr:683059").traceNavigation(n, h + v, "NAVIGATION");
                        f && (f.vcTracker = j);
                        u.useDocumentBodyForVCRoot === !0 && j.observeMutation(window.document.body)
                    }
                    break;
                case "INTERACTION":
                case "TAIL_LOAD":
                    i.add(n);
                    if (b("cr:1075529")) {
                        j = b("cr:1075529").startVisualCompletionTrace(n, h + v, e);
                        j.lock(n);
                        f && (f.vcTracker = j)
                    }
                    break
                }
                A != null && B.setTracePolicy(A);
                if (f && f.vcTracker) {
                    j = f.vcTracker;
                    b("cr:1401519") && j.onBeforeComplete(function(a) {
                        if (a)
                            for (var c = 0; c < a.elements.length; c++) {
                                var d, e = a.elements[c];
                                if ((d = e.pagelet) == null ? void 0 : d.excludeFromMainVC)
                                    continue;
                                if (e.lateMutation && e.element) {
                                    d = b("cr:1401519")(e.element);
                                    if (d != null) {
                                        e = d.indexOf("CometPageletImpl");
                                        e >= 0 && d.splice(e);
                                        e = a.markerPoints.get("visuallyComplete");
                                        if (e) {
                                            var f = e.data || {};
                                            f.reactStack = d;
                                            e.data = f
                                        }
                                    }
                                }
                                break
                            }
                    });
                    j.onComplete(function(a) {
                        a && (a.wasSuccessful || (f.wasCanceled = !0,
                        f.metadata.cancelType = "unsuccessfulVC"),
                        f.hasVcReport = !0,
                        a.annotations.forEach(function(a, b) {
                            f.metadata[b] = a
                        }),
                        a.markerPoints.forEach(function(a, b) {
                            var c = a.data;
                            a = a.timestamp;
                            f.markerPoints[b] = {
                                data: c,
                                timestamp: a + f.start,
                                type: "VisualCompletion"
                            }
                        }),
                        a.tagSet.forEach(function(a, b) {
                            a.forEach(function(a) {
                                B.addTag(b, a)
                            })
                        }))
                    });
                    u.setupVcTracker && u.setupVcTracker(j)
                }
                if (u.getMetadata) {
                    var k = u.getMetadata();
                    Object.keys(k).forEach(function(a) {
                        B.addMetadata(a, k[a])
                    })
                }
                c(B)
            }, v);
            if (r != null) {
                f = v;
                b("InteractionTracingMetrics").addSubspan(n, "EventQueued", "DOMEventTiming", f, f + r, {})
            }
            return n
        })
    };
    c = u;
    e.exports = c
}
), null);
__d("NavigationTracingUtils", ["InteractionTracingMetrics", "SiteData", "performance", "performanceNavigationStart"], (function(a, b, c, d, e, f) {
    "use strict";
    f.addNavigationTiming = a;
    f.addReferrer = c;
    f.addPkgCohort = d;
    var g, h = b("performanceNavigationStart")();
    function a(a) {
        var c, d = ((g || (g = b("performance"))) == null ? void 0 : (g || (g = b("performance"))).timing) || {};
        c = ((g || (g = b("performance"))) == null ? void 0 : (c = (g || (g = b("performance"))).navigation) == null ? void 0 : c.redirectCount) || 0;
        b("InteractionTracingMetrics").addMetadata(a, "redirectCount", c);
        c = typeof (g || (g = b("performance"))).getEntriesByType === "function" ? (g || (g = b("performance"))).getEntriesByType("navigation")[0] : null;
        (c == null ? void 0 : c.nextHopProtocol) && b("InteractionTracingMetrics").addMetadata(a, "httpProtocol", c.nextHopProtocol);
        (c == null ? void 0 : c.type) ? b("InteractionTracingMetrics").addMetadata(a, "navigationType", c.type) : ((c = (g || (g = b("performance"))).navigation) == null ? void 0 : c.type) != null && b("InteractionTracingMetrics").addMetadata(a, "navigationType", (g || (g = b("performance"))).navigation.type);
        for (var e in d)
            typeof d[e] === "number" && d[e] >= h && b("InteractionTracingMetrics").addMarkerPoint(a, e, "NavigationTiming", d[e] - h)
    }
    function c(a) {
        var c = document.referrer;
        if (typeof c === "string") {
            c = /^\w+:\/\/[^\/]+/.exec(c);
            c && c[0] && b("InteractionTracingMetrics").addMetadata(a, "referrer", c[0])
        }
    }
    function d(a) {
        b("InteractionTracingMetrics").addMetadata(a, "pkg_cohort", b("SiteData").pkg_cohort)
    }
}
), null);
__d("NavigationTracing", ["InteractionTracing", "InteractionTracingMetrics", "NavigationTracingUtils", "performanceNow"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getLastNavigation = a;
    f.traceInitialLoad = c;
    f.traceNavigation = d;
    var g, h = null;
    function i(a, c) {
        if (c != null) {
            b("InteractionTracing").setCurrentTabTracePolicy(c);
            c = b("InteractionTracing").checkAndMarkRevisit(c);
            c ? b("InteractionTracingMetrics").addMetadata(a, "revisit", 1) : b("InteractionTracingMetrics").addMetadata(a, "revisit", 0)
        }
    }
    function a() {
        return h
    }
    function c(a, c) {
        var d, e = (d = a.traceStartTime) != null ? d : (g || (g = b("performanceNow")))();
        return b("InteractionTracing").startInteraction(a, function(d) {
            d.onComplete(function(a) {
                h = a
            });
            var f = d.getTraceId();
            i(f, a.tracePolicy);
            d.setTracePolicy(a.tracePolicy);
            d.addMarkerPoint("traceStart", "AppTiming", e);
            d.onComplete(function(a) {
                b("NavigationTracingUtils").addNavigationTiming(f),
                b("NavigationTracingUtils").addReferrer(f),
                b("NavigationTracingUtils").addPkgCohort(f)
            });
            c && c(d)
        })
    }
    function d(a, c) {
        h = null;
        return b("InteractionTracing").startInteraction(a, function(b) {
            var d = b.getTraceId()
              , e = a.tracePolicy;
            b.onComplete(function(a) {
                h = a
            });
            var f = babelHelpers["extends"]({}, b, {
                setTracePolicy: function(a) {
                    if (e == null) {
                        a = a;
                        i(d, a);
                        a != null && b.setTracePolicy(a)
                    }
                }
            });
            c && c(f)
        })
    }
}
), null);
__d("QuickMarkers", ["Banzai", "GeneratedLoggerUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    f.log = a;
    function a(a) {
        b("GeneratedLoggerUtils").log("logger:QuickMarkersSrcLoggerConfig", a, b("Banzai").VITAL)
    }
}
), null);
__d("QuickMarkersComet", ["QuickMarkers", "QuickMarkersConfig", "performanceNow"], (function(a, b, c, d, e, f) {
    "use strict";
    f.init = a;
    f.mark = k;
    var g, h = b("QuickMarkersConfig").pageLoadEventId, i = b("QuickMarkersConfig").pageLoadScriptPath, j = b("QuickMarkersConfig").sampleWeight;
    function a() {
        k("ClientInit")
    }
    function k(a) {
        if (h == null || j == null)
            return;
        var c = Math.floor((g || (g = b("performanceNow")))());
        b("QuickMarkers").log({
            event_id: h,
            marker_id: a,
            marker_page_time: c,
            script_path: i,
            weight: j
        })
    }
}
), null);
__d("__getModuleTimeDetails", [], (function(a, b, c, d, e, f) {
    a = function() {
        return {}
    }
    ;
    e.exports = a
}
), null);
__d("CometNavigationTracing", ["CometEventTimings", "CometInteractionTracingConfig", "CometVisualCompletionUtil", "InteractionTracingLogger", "InteractionTracingMetrics", "NavigationTracing", "QuickMarkersComet", "__getModuleTimeDetails", "gkx", "performanceNavigationStart", "requireCond", "cr:1503634", "performance", "performanceNow", "uuid", "cr:719780", "cr:1703077", "NavigationTracingUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    f.traceInitialLoad = a;
    f.traceNavigation = c;
    var g, h, i, j = b("performanceNavigationStart")();
    function k(a, c) {
        Object.keys(c).forEach(function(d) {
            c[d].forEach(function(c) {
                b("InteractionTracingMetrics").addImagePreloader(a, c.name, {
                    end: c.responseEnd,
                    playloadName: d,
                    requestStart: c.requestStart,
                    start: c.startTime
                })
            })
        })
    }
    function l(a) {
        var c = {}
          , d = new Set()
          , e = document.querySelectorAll("link[rel=preload][as=image][data-preloader]");
        for (var f = 0; f < e.length; f++) {
            var h = e[f]
              , i = h.getAttribute("href");
            if (i != null) {
                i = (g || (g = b("CometVisualCompletionUtil"))).trimHash(i);
                if (!a.has(i) || d.has(i))
                    continue;
                d.add(i);
                h = h.dataset.preloader;
                i = a.get(i);
                i != null && (h in c ? c[h].push(i) : c[h] = [i])
            }
        }
        return c
    }
    function m(a, b) {
        b = l(b);
        if (b === void 0)
            return;
        k(a, b)
    }
    function n() {
        var a = new Map();
        if (typeof (h || (h = b("performance"))).getEntriesByType === "function") {
            var c = (h || (h = b("performance"))).getEntriesByType("resource");
            c.forEach(function(c) {
                var d = (g || (g = b("CometVisualCompletionUtil"))).trimHash(c.name);
                a.set(d, c)
            })
        }
        return a
    }
    function o(a, c, d, e) {
        if (!window.pldmp || !window.pldmp[c])
            return;
        var f = {
            css: {
                cacheCount: 0,
                encodedBodySize: 0,
                totalCount: 0,
                transferSize: 0
            },
            js: {
                cacheCount: 0,
                encodedBodySize: 0,
                totalCount: 0,
                transferSize: 0
            }
        }
          , h = window.pldmp[c];
        Object.keys(h).forEach(function(c) {
            var i, j = h[c].refs, k = (g || (g = b("CometVisualCompletionUtil"))).trimHash(h[c].url), l = e.get(k);
            if (!l)
                return;
            i = ((i = /\.(js|css)(\?|$)/.exec(k)) != null ? i : [])[1];
            i && (f[i].encodedBodySize += l.encodedBodySize,
            f[i].transferSize += l.transferSize,
            f[i].totalCount++,
            l.transferSize === 0 && f[i].cacheCount++);
            var m = {
                duration: l.responseEnd - l.requestStart,
                end: l.responseEnd,
                initiator: j[0],
                refs: j,
                requestStart: l.requestStart,
                start: l.startTime,
                transferSize: l.transferSize,
                url: k
            };
            j.forEach(function(a) {
                if (!d[a])
                    return;
                d[m.initiator] && d[a].points.InlineInit < d[m.initiator].points.InlineInit && (m.initiator = a);
                (typeof d[a].points.ResourceDone !== "number" || d[a].points.ResourceDone < m.end) && (d[a].points.LastResourceStart = m.start,
                d[a].points.ResourceDone = m.end)
            });
            d[m.initiator] && (typeof d[m.initiator].points.DownloadStart !== "number" || d[m.initiator].points.DownloadStart > m.start) && (d[m.initiator].points.DownloadStart = m.start);
            b("InteractionTracingMetrics").addPayloadResource(a, c, m);
            if (i && d[m.initiator]) {
                k = d[m.initiator].pkgStat[i];
                k.encodedBodySize += l.encodedBodySize;
                k.transferSize += l.transferSize;
                k.totalCount++;
                l.transferSize === 0 && k.cacheCount++
            }
        });
        Object.keys(d).forEach(function(c) {
            Object.keys(d[c].points).forEach(function(e) {
                d[c].start = Math.min(d[c].start, d[c].points[e]),
                d[c].end = Math.max(d[c].end, d[c].points[e]),
                e !== "ServerFlush" && b("InteractionTracingMetrics").addMarkerPoint(a, c + "_" + e, d[c].payloadType, d[c].points[e], e === "InlineInit" ? d[c].data : {})
            }),
            b("InteractionTracingMetrics").addPayloadTiming(a, c, d[c])
        });
        for (var i in f) {
            c = f[i];
            for (var j in c)
                b("InteractionTracingMetrics").addMetadata(a, "pageload_" + i + "_" + j, c[j])
        }
    }
    function p(a, c, d) {
        if (typeof window.qpl_inl === "function") {
            var e = window.qpl_inl(), f = e[c], g = window.plbs, i = 0, k = 0, l, m = typeof (h || (h = b("performance"))).getEntriesByType === "function" ? (h || (h = b("performance"))).getEntriesByType("navigation") : null;
            if (f) {
                var n = {};
                Object.keys(f).forEach(function(c) {
                    var d = f[c] - j
                      , e = {};
                    if (g && g[c]) {
                        var h = g[c]
                          , m = h[0];
                        h = h[1];
                        m != null && (e.bytes = m,
                        i += m);
                        h != null && (e.bytesCompressed = h,
                        k += h)
                    }
                    c.indexOf("ssr_") === 0 ? b("InteractionTracingMetrics").addMarkerPoint(a, c, "AppTiming", d, e) : (n[c] = {
                        data: e,
                        end: d,
                        payloadType: c.indexOf("adp_") === 0 ? "RelayPreloader" : "TierFlush",
                        pkgStat: {
                            css: {
                                cacheCount: 0,
                                encodedBodySize: 0,
                                totalCount: 0,
                                transferSize: 0
                            },
                            js: {
                                cacheCount: 0,
                                encodedBodySize: 0,
                                totalCount: 0,
                                transferSize: 0
                            }
                        },
                        points: {
                            InlineInit: d
                        },
                        start: d
                    },
                    (l == null || l.start < d) && (l = n[c]))
                });
                if (m && m[0]) {
                    m = m[0];
                    var p = m.decodedBodySize;
                    m = m.encodedBodySize;
                    b("InteractionTracingMetrics").addMetadata(a, "encodedBodySize", m);
                    b("InteractionTracingMetrics").addMetadata(a, "decodedBodySize", p);
                    l != null && l.data.bytes == null && (l.data.bytes = p - i,
                    l.data.bytesCompressed = m - k)
                }
                var q = e[c + "-server"];
                if (q) {
                    p = ((h || (h = b("performance"))) == null ? void 0 : (h || (h = b("performance"))).timing) || {};
                    var r = j;
                    p.requestStart && p.responseStart && q.earlyFlush && (r = (p.requestStart + p.responseStart - q.earlyFlush) / 2);
                    b("InteractionTracingMetrics").addMarkerPoint(a, "server_requestStart", "ServerTimings", r - j);
                    Object.keys(q).forEach(function(c) {
                        var d = q[c] + r - j;
                        b("InteractionTracingMetrics").addMarkerPoint(a, "server_" + c, "ServerTimings", d);
                        n[c] && (n[c].points.ServerFlush = d)
                    })
                }
                o(a, c, n, d)
            }
        }
    }
    function q(a, c) {
        var d = b("__getModuleTimeDetails")()
          , e = [];
        Object.keys(d).map(function(a) {
            a = d[a];
            a.factoryStart && a.factoryEnd && a.factoryEnd - j < c && e.push(a)
        });
        if (e.length === 0)
            return;
        e.sort(function(a, b) {
            return a.factoryStart - b.factoryStart
        });
        var f = null
          , g = 0;
        e.forEach(function(c) {
            (f == null || f.factoryEnd < c.factoryStart) && (f = c,
            g += c.factoryEnd - c.factoryStart,
            b("InteractionTracingMetrics").addFactoryTiming(a, {
                end: c.factoryEnd - j,
                name: c.id,
                start: c.factoryStart - j
            }))
        });
        b("InteractionTracingMetrics").addSubspan(a, "factoriesPriorToTrace", "JSFactories", e[0].factoryStart - j, e[e.length - 1].factoryEnd - j, {
            totalTime: g
        })
    }
    function a(a, c, d, e) {
        var f = (i || (i = b("performanceNow")))();
        b("InteractionTracingMetrics").init();
        b("cr:719780") && b("cr:719780").init(c);
        b("QuickMarkersComet").mark("NavigationTracingStart");
        b("NavigationTracing").traceInitialLoad({
            interactionClass: "contingent",
            interactionID: a,
            qplEvent: b("cr:1503634").INITIAL_LOAD,
            startTime: 0,
            tracePolicy: d.tracePolicy,
            traceStartTime: f,
            traceType: "INITIAL_LOAD",
            tracingConfig: b("CometInteractionTracingConfig").tracingConfig
        }, function(d) {
            b("QuickMarkersComet").mark("InteractionTracingStart"),
            d.onCompleteSync(function() {
                b("QuickMarkersComet").mark("InteractionTracingComplete")
            }),
            d.onComplete(function(d) {
                b("QuickMarkersComet").mark("InitialLoadComplete");
                var e = n();
                m(a, e);
                p(a, c, e);
                b("gkx")("1018547") && q(a, f);
                b("NavigationTracingUtils").addPkgCohort(a);
                b("InteractionTracingLogger").logServerTimings(b("cr:1503634").INITIAL_LOAD_SERVER, c, d);
                b("cr:719780") && b("cr:719780").log()
            }),
            e(d)
        })
    }
    function c(a, c, d, e, f) {
        f === void 0 && (f = b("uuid")());
        a = b("CometEventTimings").getCurrentQueueTime(d);
        d = a[0];
        a = a[1];
        b("cr:1703077") && b("cr:1703077").reset();
        b("NavigationTracing").traceNavigation({
            eventQueueTime: a,
            interactionClass: "responsive",
            interactionID: f,
            qplEvent: b("cr:1503634").NAVIGATION,
            startTime: d,
            tracePolicy: (a = c == null ? void 0 : c.tracePolicy) != null ? a : null,
            traceType: "NAVIGATION",
            tracingConfig: b("CometInteractionTracingConfig").tracingConfig
        }, e)
    }
}
), null);
__d("CometProductAttribution", ["WebSession", "recoverableViolation"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = function(a) {
        var c = a.bookmark_id
          , d = a.link_context
          , e = a.tap_point;
        a = a.trace_policy;
        return {
            bookmark_id: c,
            link_context: d,
            session: b("WebSession").getId(),
            subsession: 1,
            tap_point: e,
            timestamp: Date.now(),
            trace_policy: a
        }
    };
    f.getProductAttributionEntry = g;
    var h = function(a) {
        var b = a.productAttributionId;
        a = a.tracePolicy;
        if (typeof b === "string")
            return b;
        return typeof a === "string" ? "tp-" + a : "missing"
    };
    f.getProductAttributionIdFromRoute = h;
    a = function(a, b, c, d) {
        c = (c = c) != null ? c : {};
        c = c.tracePolicy;
        var e = typeof b === "string" ? {
            tap_point: b
        } : b;
        e = g({
            bookmark_id: e.bookmark_id != null ? String(e.bookmark_id) : h(a),
            link_context: d,
            tap_point: e.tap_point,
            trace_policy: c != null ? c : (d = a.tracePolicy) != null ? d : "missing"
        });
        a.productAttributionId != null && b.bookmark_id != null && a.productAttributionId !== String(b.bookmark_id) && (e = babelHelpers["extends"]({}, e, {
            route_bookmark_id: a.productAttributionId
        }));
        return {
            0: e
        }
    }
    ;
    f.getProductAttributionFromRoute = a;
    c = function(a, c) {
        if (c != null)
            switch (c) {
            case "rootView":
                return a.main;
            case "hostedView":
                c = a.hosted;
                if (c)
                    return c;
                b("recoverableViolation")("Navigation was dispatched from hostedView, but no hosted route in previous state", "comet_infra");
                break;
            case "pushView":
                c = a.pushViewStack;
                if (c && c.length > 0) {
                    c = c[c.length - 1];
                    c.depth;
                    c.key;
                    c = babelHelpers.objectWithoutPropertiesLoose(c, ["depth", "key"]);
                    return c
                }
                b("recoverableViolation")("Navigation was dispatched from pushView, but no push view route in previous state", "comet_infra");
                break
            }
        return a.main
    }
    ;
    f.getRouteInfoForDispatch = c
}
), null);
__d("CometErrorSystem", ["QuickMarkersComet", "requireCond", "requireDeferred", "cr:899007", "cr:1267207"], (function(a, b, c, d, e, f) {
    "use strict";
    f.init = a;
    var g = b("requireDeferred")("CometErrorLogging");
    function a(a) {
        g.onReady(function(b) {
            return b.init(a)
        }),
        b("cr:899007") && b("cr:899007").init(),
        b("cr:1267207") && b("cr:1267207")(),
        b("QuickMarkersComet").init()
    }
}
), null);
__d("CometInitialPresenceData", ["AvailableListInitialData", "CometRelayEnvironment", "PresencePrivacyInitialData"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        init: function() {
            if (b("PresencePrivacyInitialData").visibility !== 1)
                return;
            b("CometRelayEnvironment").commitUpdate(function(a) {
                var c = b("AvailableListInitialData").activeList;
                c != null && c.forEach(function(c) {
                    var d = a.get(c);
                    d == null && (d = a.create(c, "User"));
                    d != null && d.setValue("ACTIVE", "availability");
                    c = a.getRoot();
                    d = c.getOrCreateLinkedRecord("viewer", "Viewer");
                    d.setValue(b("PresencePrivacyInitialData").visibility === 1, "chat_visibility")
                });
                var d = b("AvailableListInitialData").lastActiveTimes;
                d && Object.keys(d).forEach(function(b) {
                    var c = a.get(b);
                    c == null && (c = a.create(b, "User"));
                    c != null && d[b] != null && d[b] !== 0 && c.setValue(d[b], "last_active_time")
                })
            })
        }
    };
    e.exports = a
}
), null);
__d("CometPixelRatioDetector", ["requireDeferred"], (function(a, b, c, d, e, f) {
    "use strict";
    f.initDetecting = a;
    var g = b("requireDeferred")("CometPixelRatioUpdater");
    function a() {
        g.onReady(function(a) {
            return a.startDetecting()
        })
    }
}
), null);
__d("IasUtsClientDebuggingFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743690");
    c = b("FalcoLoggerInternal").create("ias_uts_client_debugging", a);
    e.exports = c
}
), null);
__d("TimeSpentArray", ["Banzai", "CurrentUser", "IasUtsClientDebuggingFalcoEvent", "TimeSlice", "clearTimeout", "gkx", "pageID", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    f.init = a;
    f.update = c;
    f.get = d;
    f.ship = e;
    f.reset = D;
    f.testState = E;
    var g = 2, h = g * 32, i, j, k, l, m, n, o, p, q, r, s = {}, t;
    function u() {
        return {
            timeoutDelayMap: s,
            nextDelay: t,
            timeoutInSeconds: l
        }
    }
    function v() {
        if (i) {
            var a = Date.now();
            a > n && (p = Math.min(h, Math.ceil(a / 1e3 - m)));
            a = A();
            a && i(a, t)
        }
        z()
    }
    function w() {
        x(),
        k = b("setTimeoutAcrossTransitions")(b("TimeSlice").guard(v, "TimeSpentArray Timeout", {
            propagationType: b("TimeSlice").PropagationType.ORPHAN
        }), l * 1e3)
    }
    function x() {
        k && (b("clearTimeout")(k),
        k = null)
    }
    function y(a) {
        m = a;
        n = m * 1e3;
        o = [1];
        for (var a = 1; a < g; a++)
            o.push(0);
        p = 1;
        q += 1;
        r += 1;
        a = r.toString() + "_delay";
        t = s[a];
        t === void 0 && (t = s.delay);
        a = r.toString() + "_timeout";
        a = s[a];
        a === void 0 && (a = s.timeout);
        a = Math.min(a, h);
        l = a || h;
        w()
    }
    function z() {
        x(),
        o = null
    }
    function A() {
        return !o ? null : {
            tos_id: b("pageID"),
            start_time: m,
            tos_array: o.slice(0),
            tos_len: p,
            tos_seq: r,
            tos_cum: q
        }
    }
    function B(a) {
        if (a >= n && a - n < 1e3)
            return;
        if (b("gkx")("1427308")) {
            var c = b("CurrentUser").getID();
            b("IasUtsClientDebuggingFalcoEvent").log(function() {
                return {
                    source: "uts",
                    client_user_id: c,
                    activity_time: a,
                    last_activity_time: n
                }
            })
        }
        j && j(a);
        C(Math.floor(a / 1e3))
    }
    function C(a) {
        var b = a - m;
        (b < 0 || b >= h) && v();
        !o ? y(a) : (o[b >> 5] |= 1 << (b & 31),
        p = b + 1,
        q += 1,
        n = a * 1e3)
    }
    function a(a, c, d, e) {
        q = 0,
        r = -1,
        i = a,
        j = e,
        typeof c === "object" && c !== null ? s = c : s = {},
        y(Math.floor((d === void 0 || d === null || d === 0 ? Date.now() : d) / 1e3)),
        b("Banzai").subscribe(b("Banzai").SHUTDOWN, v)
    }
    function c(a) {
        B(a)
    }
    function d() {
        return A()
    }
    function e() {
        v()
    }
    function D() {
        z()
    }
    function E() {
        return u()
    }
}
), null);
__d("TimeSpentImmediateActiveSecondsLogger", ["requireCond", "cr:844180"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("cr:844180");
    e.exports = a
}
), null);
__d("CometTimeSpentBitArrayLogger", ["Banzai", "BanzaiODS", "Random", "TimeSpentArray", "TimeSpentImmediateActiveSecondsLogger", "TimeSpentWWWCometConfig", "WebSession", "isInIframe"], (function(a, b, c, d, e, f) {
    "use strict";
    f.init = a;
    f.updateTimeSpentArray = c;
    var g = b("TimeSpentImmediateActiveSecondsLogger").maybeReportActiveSecond
      , h = "";
    function i(a, c) {
        a.sid_raw = h,
        b("Banzai").post("time_spent_bit_array", a, {
            delay: typeof c === "number" ? c : b("Banzai").VITAL_WAIT,
            retry: !0
        })
    }
    function j(a) {
        a = k();
        a !== h && (b("TimeSpentArray").ship(),
        h = a)
    }
    function k() {
        b("WebSession").extend();
        return b("WebSession").getId()
    }
    function a() {
        if (b("isInIframe")())
            return;
        var a = Date.now();
        b("TimeSpentArray").init(i, b("TimeSpentWWWCometConfig").CONFIG, a, j);
        h = k();
        g(a);
        a = 772;
        b("Random").coinflip(a) && b("BanzaiODS").bumpEntityKey(2966, "ms.time_spent.qa.www", "time_spent.bits.js_initialized", a)
    }
    function c(a) {
        b("TimeSpentArray").update(a),
        g(a)
    }
}
), null);
__d("SearchCometGlobalResultPageTracePolicy", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        DEFAULT_TAB: "comet.search_results.default_tab",
        HASHTAG: "comet.search_results.hashtag",
        PHOTOS_TAB: "comet.search_results.photos_tab",
        PLACES_TAB: "comet.search_results.places_tab",
        TOP_TAB: "comet.search_results.top_tab"
    });
    e.exports = a
}
), null);
__d("isSearchCometGlobalResultPageTracePolicy", ["SearchCometGlobalResultPageTracePolicy"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        return Object.values(b("SearchCometGlobalResultPageTracePolicy")).includes(a)
    }
}
), null);
__d("CometVisitationManager", ["FBLogger", "isSearchCometGlobalResultPageTracePolicy", "pageID"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getCurrentVisitationId = a;
    f.init = c;
    f.update = d;
    var g = {
        "comet.marketplace.category": "comet.marketplace.home",
        "comet.marketplace.home.hoisted_pdp": "comet.marketplace.home",
        "comet.me": "comet.profile"
    }
      , h = {}
      , i = null
      , j = null
      , k = !1;
    function l(a) {
        return a.tracePolicy + ":" + a.instanceId + ":" + a.subsessionCount + ":" + a.timeStampMs / 1e3
    }
    function m(a) {
        if (a == null)
            return;
        a = g[a] ? g[a] : a;
        if (i === a)
            return;
        var c = h[a];
        c ? (c.subsessionCount++,
        c.timeStampMs = Date.now()) : h[a] = {
            instanceId: b("pageID"),
            subsessionCount: 1,
            timeStampMs: Date.now(),
            tracePolicy: a
        };
        j = i;
        i = a
    }
    function a() {
        if (!k) {
            b("FBLogger")("CometVisitationManager").mustfix("Attempting to get the current visitation id without initialization.");
            return null
        }
        if (!k || i == null || !h[i])
            return null;
        var a = l(h[i]);
        if (b("isSearchCometGlobalResultPageTracePolicy")(i) && j != null && h[j]) {
            var c = l(h[j]);
            return a + "|" + c
        }
        return a
    }
    function c(a) {
        if (k)
            return;
        m(a.tracePolicy);
        k = !0
    }
    function d(a) {
        if (!k) {
            b("FBLogger")("CometVisitationManager").mustfix("Updating the visitation manager without initialization");
            return
        }
        m(a.main.route.tracePolicy)
    }
}
), null);
__d("ProfileCometSessionConfig", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = "ps";
    f.PREFIX = a;
    b = 3e4;
    f.TIMEOUT_MS = b
}
), null);
__d("ProfileCometRoutingUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.isProfilePolicy = a;
    function a(a) {
        return a != null && (a.startsWith("comet.profile") || a.startsWith("comet.me"))
    }
}
), null);
__d("ProfileCometSessionUtil", ["ProfileCometRoutingUtils", "ProfileCometSessionConfig"], (function(a, b, c, d, e, f) {
    "use strict";
    f.isSameProfileSession = a;
    f.getStorageKeys = c;
    function g(a) {
        var b = a.tracePolicy, c;
        if (b != null)
            if (b.startsWith("comet.profile"))
                c = a.params.vanity;
            else if (b.startsWith("comet.me")) {
                c = (b = a.rootView.props) == null ? void 0 : b.userVanity
            }
        return typeof c === "string" ? c : null
    }
    function h(a) {
        var b = a.tracePolicy, c;
        if (b != null)
            if (b.startsWith("comet.profile"))
                c = a.params.id;
            else if (b.startsWith("comet.me")) {
                c = (b = a.rootView.props) == null ? void 0 : b.userID
            }
        return typeof c === "string" ? c : null
    }
    function a(a, c) {
        if (c == null)
            return !1;
        var d = c.tracePolicy;
        if (!b("ProfileCometRoutingUtils").isProfilePolicy(d))
            return !1;
        if (a == null)
            return !0;
        d = a.tracePolicy;
        if (!b("ProfileCometRoutingUtils").isProfilePolicy(d))
            return !1;
        d = g(c);
        var e = g(a);
        c = h(c);
        a = h(a);
        return d != null && d === e || c != null && c === a
    }
    function c(a) {
        var c = [];
        for (var d = 0; d < a.length; d++) {
            var e = a.key(d);
            e != null && e.startsWith(b("ProfileCometSessionConfig").PREFIX) && c.push(e)
        }
        return c
    }
}
), null);
__d("ProfileEngagementFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744234");
    c = b("FalcoLoggerInternal").create("profile_engagement", a);
    e.exports = c
}
), null);
__d("ProfileCometSession", ["ProfileCometSessionConfig", "ProfileCometSessionUtil", "ProfileEngagementFalcoEvent", "WebStorage", "uuid"], (function(a, b, c, d, e, f) {
    "use strict";
    f.extend = q;
    f.get = a;
    f.initOrExtend = c;
    f.navigate = d;
    var g;
    function h(a) {
        var c = i();
        return c === null ? null : b("ProfileCometSessionConfig").PREFIX + ":" + a + ":" + c
    }
    function i() {
        var a = (g || (g = b("WebStorage"))).getSessionStorageForRead();
        if (!a)
            return null;
        var c = b("ProfileCometSessionConfig").PREFIX + ":tabID";
        a = a.getItem(c);
        if (a == null) {
            a = b("uuid")();
            var d = (g || (g = b("WebStorage"))).getSessionStorage();
            if (!d)
                return null;
            d.setItem(c, a)
        }
        return a
    }
    function j(a) {
        if (a == null || a.tracePolicy == null)
            return "timeline";
        a = a.tracePolicy;
        if (a === "comet.profile.timeline.grid")
            return "timeline_overview";
        if (a.startsWith("comet.profile.collection.friend"))
            return "friends_page";
        return a.startsWith("comet.profile.collection") ? "about_page" : "timeline"
    }
    function k(a, c, d) {
        b("ProfileEngagementFalcoEvent").log(function() {
            return {
                content_id: null,
                profile_event_type: "profile_session_impression",
                profile_id: a,
                profile_product_bucket: "profile_core",
                profile_session_id: c,
                profile_surface: j(d)
            }
        })
    }
    function l(a, c) {
        var d = (g || (g = b("WebStorage"))).getLocalStorage();
        if (!d)
            return null;
        d = b("uuid")();
        p(a, d);
        k(a, d, c);
        return d
    }
    function m(a, b) {
        var c = o(a);
        return c === null ? l(a, b) : c
    }
    function n(a) {
        a = h(a);
        var c = (g || (g = b("WebStorage"))).getLocalStorageForRead();
        if (a === null || !c)
            return null;
        c = c.getItem(a);
        if (c == null)
            return null;
        a = c.split(":");
        c = a[0];
        a = a[1];
        a = parseInt(a, 10);
        return [c, a]
    }
    function o(a) {
        a = n(a);
        if (a !== null) {
            var c = a[0];
            a = a[1];
            if (Date.now() - a < b("ProfileCometSessionConfig").TIMEOUT_MS)
                return c
        }
        return null
    }
    function p(a, c) {
        var d = Date.now();
        a = h(a);
        var e = (g || (g = b("WebStorage"))).getLocalStorage();
        if (e && a !== null) {
            e.setItem(a, c + ":" + d);
            return c
        }
        return null
    }
    function q(a, b) {
        b = m(a, b);
        if (b == null)
            return null;
        p(a, b);
        return b
    }
    function a(a, b) {
        return m(a, b)
    }
    function c(a, b, c) {
        if (b != null) {
            var d = o(a);
            if (d === null) {
                k(a, b, c);
                return p(a, b)
            }
        }
        return q(a)
    }
    function d(a, c, d, e) {
        return b("ProfileCometSessionUtil").isSameProfileSession(c, d) || e === "popstate" || e === "initial" ? q(a, d) : l(a, d)
    }
}
), null);
__d("getCometEntityKey", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        var b = a.entityKeyConfig;
        return b == null ? null : g(b, a)
    }
    function g(a, b) {
        var c = {};
        for (var d in a)
            c[d] = h(a[d], b);
        return c
    }
    function h(a, b) {
        switch (a.source) {
        case "prop":
            var c = b.rootView.props;
            return c == null ? null : String(c[a.value]);
        case "param":
            return String(b.params[a.value]);
        case "constant":
            return a.value
        }
        return null
    }
}
), null);
__d("getEntityIDFromRoute", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        a = (a == null ? void 0 : (a = a.rootView) == null ? void 0 : a.props) || {};
        if (a.userID)
            return a.userID;
        if (a.pageID)
            return a.pageID;
        if (a.groupID)
            return a.groupID;
        return a.eventID ? a.eventID : null
    }
}
), null);
__d("CometTimeSpentNavigation", ["CometVisitationManager", "ProfileCometSession", "getCometEntityKey", "getEntityIDFromRoute"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = null
      , h = null
      , i = new Set();
    function j() {
        i.forEach(function(a) {
            return a({
                destPathInfo: h,
                sourcePathInfo: g
            })
        })
    }
    a = {
        changePath: function(a, c, d) {
            var e;
            d === void 0 && (d = null);
            g = h;
            e = (e = (e = b("getCometEntityKey")(a)) == null ? void 0 : e.entity_id) != null ? e : b("getEntityIDFromRoute")(a);
            if (d && d.profile_session_id != null && e != null) {
                var f;
                d.profile_session_id = (f = b("ProfileCometSession") && b("ProfileCometSession").initOrExtend(e, (f = d) == null ? void 0 : f.profile_session_id, a)) != null ? f : (f = d) == null ? void 0 : f.profile_session_id
            }
            f = babelHelpers["extends"]({
                pa: JSON.stringify(c),
                uri: a.url
            }, d);
            c = b("CometVisitationManager").getCurrentVisitationId();
            c != null && (f.visitation_id = c);
            f.container_id == null && (e != null && (f.container_id = e));
            h = {
                extraData: f,
                name: a.tracePolicy
            };
            j()
        },
        getPathInfo: function() {
            return h
        },
        getSourcePathInfo: function() {
            return g
        },
        listenToPathChange: function(a) {
            i.add(a);
            return {
                cancelListen: function() {
                    return i["delete"](a)
                }
            }
        }
    };
    e.exports = a
}
), null);
__d("CometTimeSpentNavigationLogger", ["Banzai", "CometTimeSpentNavigation", "ConstUriUtils", "WebSession", "isInIframe"], (function(a, b, c, d, e, f) {
    "use strict";
    f.init = a;
    var g = "comet_time_spent_navigations"
      , h = !1;
    function i(a) {
        b("Banzai").post(g, a, b("Banzai").VITAL)
    }
    function j(a, c, d) {
        b("WebSession").extend();
        if (!h || b("isInIframe")())
            return;
        var e = {
            cause: d,
            extra_data: {},
            sid_raw: b("WebSession").getId()
        };
        a && (e.source_path = a.name,
        Object.entries(a.extraData).forEach(function(a) {
            var b = a[0];
            a = a[1];
            return e.extra_data["source_" + b] = a
        }));
        c && (e.dest_path = c.name,
        Object.entries(c.extraData).forEach(function(a) {
            var b = a[0];
            a = a[1];
            return e.extra_data["dest_" + b] = a
        }));
        i(e)
    }
    function k() {
        var a = b("CometTimeSpentNavigation").getPathInfo();
        if (!a)
            return;
        a = babelHelpers["extends"]({}, a, {
            extraData: babelHelpers["extends"]({}, a.extraData, {
                referrer: document.referrer,
                subdomain: (a = b("ConstUriUtils").getUri(document.location.href)) == null ? void 0 : a.subdomain
            })
        });
        j(b("CometTimeSpentNavigation").getSourcePathInfo(), a, "load")
    }
    function l() {
        j(b("CometTimeSpentNavigation").getPathInfo(), null, "unload"),
        h = !1
    }
    function m(a, b) {
        j(a, b, "transition")
    }
    function n(a) {
        var b = a.sourcePathInfo;
        a = a.destPathInfo;
        if (!h || !b || !a)
            return;
        m(b, a)
    }
    function a(a, c, d) {
        c === void 0 && (c = null),
        h = !0,
        b("CometTimeSpentNavigation").changePath(a, d, c),
        k(),
        b("CometTimeSpentNavigation").listenToPathChange(n),
        b("Banzai").subscribe(b("Banzai").SHUTDOWN, l)
    }
}
), null);
__d("WebPerformanceDeviceInfo", ["regeneratorRuntime", "Promise", "WebDevicePerfClassData", "requireDeferred"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getDeviceLevel = a;
    f.getMobileYearClass = c;
    f.initWebDevicePerfLoggingPassive = d;
    f.initWebDevicePerfLoggingAndUpdateValue = e;
    var g = b("requireDeferred")("WebDevicePerfInfoLogging")
      , h = b("WebDevicePerfClassData").deviceLevel
      , i = null;
    function j() {
        var a, c;
        return b("regeneratorRuntime").async(function(d) {
            while (1)
                switch (d.prev = d.next) {
                case 0:
                    d.next = 2;
                    return b("regeneratorRuntime").awrap(new (b("Promise"))(function(a, b) {
                        g.onReady(function(b) {
                            a(b)
                        })
                    }
                    ));
                case 2:
                    a = d.sent;
                    d.next = 5;
                    return b("regeneratorRuntime").awrap(a.doLogPromise());
                case 5:
                    c = d.sent,
                    c && (h = c);
                case 7:
                case "end":
                    return d.stop()
                }
        }, null, this)
    }
    function a() {
        return h
    }
    function c() {
        return b("WebDevicePerfClassData").yearClass
    }
    function d() {
        g.onReady(function(a) {
            a.doLog()
        })
    }
    function e() {
        i == null && (i = j());
        return i
    }
}
), null);
__d("lowerDomainComet", ["ErrorGuard"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    a = (g || b("ErrorGuard")).guard(function() {
        var a;
        if (window.self !== window.top)
            return;
        if (((a = document.domain) != null ? a : "").toLowerCase().match(/(^|\.)(facebook|facebookcorewwwi|workplace)\..*/)) {
            a = window.location.hostname.match(/\.(facebook\.sg|facebookcorewwwi\.(?:test)?onion|workplace\.com)$/);
            a = a ? a[1] : "facebook.com";
            document.domain = a
        }
    });
    c = a;
    e.exports = c
}
), null);
__d("CometRootInit", ["ClientConsistency", "CometErrorSystem", "CometInitialPresenceData", "CometPixelRatioDetector", "CometTimeSpentBitArrayLogger", "CometTimeSpentNavigationLogger", "CometVisitationManager", "RelayAPIConfig", "RelayPrefetchedStreamCache", "WebPerformanceDeviceInfo", "lowerDomainComet", "requireCond", "requireDeferred", "cr:869493", "cr:1292596", "cr:1353431", "cr:1132918", "cr:1062779"], (function(a, b, c, d, e, f) {
    "use strict";
    f.init = a;
    f.initClient = c;
    f.initPreloaders = d;
    var g = b("requireDeferred")("CometBrowserDimensionsLogger")
      , h = b("requireDeferred")("CometGHLTestUBT");
    function a(a) {
        b("CometInitialPresenceData").init()
    }
    function c(a, c, d, e) {
        b("CometErrorSystem").init(a),
        b("cr:1292596") && b("cr:1292596").init(),
        b("lowerDomainComet")(),
        b("cr:869493") && b("cr:869493").init(),
        b("WebPerformanceDeviceInfo").initWebDevicePerfLoggingPassive(),
        g.onReady(function(a) {
            return a.init()
        }),
        b("ClientConsistency").init(),
        b("CometPixelRatioDetector").initDetecting(),
        b("CometVisitationManager").init(c),
        b("CometTimeSpentNavigationLogger").init(c, d, e),
        b("CometTimeSpentBitArrayLogger").init(),
        h.onReady(function(a) {
            return a()
        }),
        b("cr:1062779") && b("cr:1062779")(),
        b("cr:1132918") && b("cr:1132918").handleServerErrors(),
        b("cr:1353431") && b("cr:1353431").init()
    }
    function d(a) {
        if (a && a.length)
            for (var a = a, c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var e;
                if (c) {
                    if (d >= a.length)
                        break;
                    e = a[d++]
                } else {
                    d = a.next();
                    if (d.done)
                        break;
                    e = d.value
                }
                e = e;
                b("RelayPrefetchedStreamCache").registerPreloader(e.preloaderID, e.queryID, e.variables, (e = e.actorID) != null ? e : b("RelayAPIConfig").actorID)
            }
    }
}
), null);
__d("CometSSRLogger", ["CometVisualCompletionUtil"], (function(a, b, c, d, e, f) {
    "use strict";
    f.initNoopLogger = a;
    f.initLogger = c;
    var g;
    function a() {
        return {
            logPayloadReceivedFromInlineInjector: function() {},
            logSSRInjection: function() {},
            logSSRShown: function() {}
        }
    }
    function c(a) {
        return {
            logPayloadReceivedFromInlineInjector: function(b) {
                var c = b.clickEvents
                  , d = b.msg
                  , e = b.processedPayloads;
                b = b.status;
                a.addMetadata("ssr_inline_status", b + " " + (d || ""));
                a.addMetadata("ssr_inline_click_events", c.total);
                e.forEach(function(b) {
                    var c;
                    c = (c = b.id) != null ? c : "global_failure";
                    a.addMetadata("ssr_status_" + c, b.status)
                })
            },
            logSSRInjection: function(c) {
                a.addMetadata("ssr_injected", c ? 1 : 0),
                c && (a.addMarkerPoint("ssr_shown", "AppTiming"),
                (g || (g = b("CometVisualCompletionUtil"))).foregroundRequestAnimationFrame(function() {
                    a.addMarkerPoint("ssr_paint", "AppTiming")
                }))
            },
            logSSRShown: function(b) {
                a.addMarkerPoint("ssr_shown_" + b, "AppTiming")
            }
        }
    }
}
), null);
__d("jestOnlyViolation", ["FBLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c, d) {
        d = d === void 0 ? {} : d;
        d = d.error;
        c = b("FBLogger")(c);
        d && (c = c.catching(d));
        c.blameToPreviousFrame().fatal("Jest-Only Fatal: " + a);
        return null
    }
}
), null);
__d("CometSSRContentInjector", ["CometSSRHydrationMarkerUtils", "CometSSRLogger", "gkx", "jestOnlyViolation"], (function(a, b, c, d, e, f) {
    "use strict";
    f.__getDebugState = a;
    f.__onDebugStateChange = c;
    f.init = d;
    var g = b("CometSSRLogger").initNoopLogger()
      , h = {
        onContentInjected: function(a) {}
    }
      , i = null
      , j = {};
    function k(a) {
        switch (a) {
        case "fail_js_error":
            return "server_js_error";
        case "fail_infra_error":
            return "server_infra_error";
        case "fail_ssr_disabled":
            return "ssr_disabled";
        case "fail_feed_module_not_supported":
            return "feed_module_not_supported";
        case "fail_bad_preloaders":
            return "bad_preloaders";
        default:
            return "unknown"
        }
    }
    var l = {
        root: "pending"
    }
      , m = 0
      , n = new Map();
    function o() {
        return {
            boundaryErrorStatuses: babelHelpers["extends"]({}, j),
            boundaryStatuses: babelHelpers["extends"]({}, l),
            globalBoundaryErrorStatus: i
        }
    }
    function p() {
        if (n.size === 0)
            return;
        var a = o();
        n.forEach(function(b) {
            return b(a)
        })
    }
    function a() {
        return o()
    }
    function q(a) {
        a.style.visibility = "",
        a.style.display = ""
    }
    function c(a) {
        var b = m++;
        n.set(b, a);
        return {
            release: function() {
                n["delete"](b)
            }
        }
    }
    function d(a, c, d) {
        a;
        c && (g = b("CometSSRLogger").initLogger(c));
        var e = d == null ? void 0 : d.onContentInjected;
        e && (h.onContentInjected = e);
        b("CometSSRHydrationMarkerUtils").injectStyles != null && b("CometSSRHydrationMarkerUtils").injectStyles();
        window.__onSSRCompleted(function(c) {
            g.logPayloadReceivedFromInlineInjector(c);
            c.unbindListeners && c.unbindListeners();
            q(a);
            g.logSSRInjection(c.status === "INJECTED");
            if (c.status === "INJECTED") {
                var d = e || function(a) {}
                ;
                c.processedPayloads.forEach(function(a) {
                    a = a.id;
                    a && (g.logSSRShown(a),
                    l[a] = "content_injected",
                    d(a))
                })
            } else
                c.processedPayloads.forEach(function(a) {
                    var c = a.id;
                    a = a.status;
                    if (a !== "success") {
                        var d = k(a);
                        c && (j[c] = d,
                        l[c] = "client_rendered");
                        i = i === null || i === "unknown" ? d : i;
                        b("gkx")("1501502") && a !== "fail_ssr_disabled" && b("jestOnlyViolation")("Encountered error during server rendering: " + d + "! See slog for error details. (client rendering prevented since comet_ssr_fatal_on_error is enabled)", "comet_infra")
                    }
                });
            p()
        })
    }
}
), null);
__d("CometRootSSRClient", ["requireCond", "cr:1221377", "cr:1540330", "CometProductAttribution", "CometNavigationTracing", "CometRootInit", "CometSSRContentInjector", "cr:683059", "React", "ReactDOMComet", "gkx", "unrecoverableViolation", "uuid"], (function(a, b, c, d, e, f) {
    "use strict";
    f.initRoute = a;
    var g = b("cr:1221377").getDarkModePreference
      , h = b("cr:1221377").toggleDarkModeRootClass
      , i = b("React");
    function a(a, c, d, e, f, j) {
        var k = b("uuid")();
        b("cr:1540330") != null && b("cr:1540330").init();
        b("CometNavigationTracing").traceInitialLoad(k, d, e, function(l) {
            var m = document.getElementById(c);
            if (m == null)
                throw b("unrecoverableViolation")("React root mount point not found", "comet_infra");
            b("cr:683059") != null && b("cr:683059").observeMutation(m);
            var n = b("gkx")("832370") ? b("ReactDOMComet").createBlockingRoot(m, {
                hydrate: !0
            }) : b("ReactDOMComet").createRoot(m, {
                hydrate: !0
            })
              , o = g();
            h(o);
            var p = {
                current: !1
            };
            b("CometSSRContentInjector").init(m, l, {
                onContentInjected: function() {
                    if (p.current === !1) {
                        var a = document.querySelector(".suspended-feed");
                        a && (b("ReactDOMComet").unstable_scheduleHydration(a),
                        p.current = !0)
                    }
                }
            });
            b("CometRootInit").init(e);
            b("CometRootInit").initClient(d, e, j, b("CometProductAttribution").getProductAttributionFromRoute(e, "via_cold_start"));
            b("CometRootInit").initPreloaders(f);
            o = a.buildRootComponent(e, k, j);
            l.addMarkerPoint("reactStart", "AppTiming");
            n.render(i.jsx(o, {
                rootElement: m
            }))
        })
    }
}
), null);
__d("CometRoot", ["cx", "BuildCometRoot", "CometRootSSRClient", "ExecutionEnvironment", "requireDeferred"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.initDeferred = a;
    f.initRoute = c;
    var h = b("requireDeferred")("CometRootDeferred");
    function a(a) {
        h.onReady(function(b) {
            b.initDeferred(a)
        })
    }
    function c(a, c, d, e, f) {
        if (!b("ExecutionEnvironment").canUseDOM)
            return;
        b("CometRootSSRClient").initRoute({
            buildRootComponent: b("BuildCometRoot").buildRootComponent
        }, a, c, d, e, f)
    }
}
), null);
__d("CometAppNavigationConstants", ["gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    b("gkx")("1763357") ? a = 0 : b("gkx")("976093") && !b("gkx")("1441635") ? a = 92 : b("gkx")("1704153") ? a = 56 : a = 60;
    c = a;
    f.HEADER_HEIGHT = c
}
), null);
__d("CometRouterParentRouteContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext(null);
    e.exports = c
}
), null);
__d("CometRouteParams", ["useCurrentRoute"], (function(a, b, c, d, e, f) {
    "use strict";
    f.useRouteParams = a;
    function a() {
        var a;
        return (a = (a = b("useCurrentRoute")()) == null ? void 0 : a.params) != null ? a : {}
    }
}
), null);
__d("CometRouteRenderType", ["CometRouterRenderTypeContext", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    f.useIsPushView = h;
    f.useIsHosted = i;
    f.useIsMain = j;
    f.RouteIsPushView = a;
    f.RouteIsHosted = c;
    f.RouteIsMain = d;
    var g = b("React");
    function h() {
        var a = g.useContext(b("CometRouterRenderTypeContext"));
        return a === "pushView"
    }
    function i() {
        var a = g.useContext(b("CometRouterRenderTypeContext"));
        return a === "hosted"
    }
    function j() {
        var a = g.useContext(b("CometRouterRenderTypeContext"));
        return a === "main"
    }
    function a(a) {
        a = a.children;
        return a(h())
    }
    function c(a) {
        a = a.children;
        return a(i())
    }
    function d(a) {
        a = a.children;
        return a(j())
    }
}
), null);
__d("useCometRouteTracePolicy", ["useCurrentRoute"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = "comet.app";
    function a() {
        var a;
        return (a = (a = b("useCurrentRoute")()) == null ? void 0 : a.tracePolicy) != null ? a : g
    }
}
), null);
__d("useParentRoute", ["CometRouterParentRouteContext", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a() {
        return g.useContext(b("CometRouterParentRouteContext"))
    }
}
), null);
__d("CometBase.react", ["BaseView.react"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("BaseView.react")
}
), null);
__d("BaseImage.react", ["React", "RecoverableViolationWithComponentStack.react", "mergeRefs", "stylex", "testID"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React"), i = {
        contain: {
            objectFit: "r0294ipz"
        },
        cover: {
            objectFit: "bixrwtb6"
        },
        fill: {
            objectFit: "r50dw9up"
        }
    };
    function a(a, c) {
        var d = a.alt;
        d = d === void 0 ? "" : d;
        var e = a["aria-labelledby"]
          , f = a.objectFit;
        f = f === void 0 ? "none" : f;
        var j = a.onLoad
          , k = a.src
          , l = a.testid
          , m = a.xstyle;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["alt", "aria-labelledby", "objectFit", "onLoad", "src", "testid", "xstyle"]);
        var n = h.useRef(null)
          , o = h.useMemo(function() {
            return b("mergeRefs")(n, c)
        }, [n, c]);
        h.useEffect(function() {
            var a = n.current;
            j != null && a != null && a.complete && j()
        }, [j]);
        return k === "" ? h.jsx(b("RecoverableViolationWithComponentStack.react"), {
            errorMessage: "Invalid src provided to image",
            projectName: "comet_ui"
        }) : h.jsx("img", babelHelpers["extends"]({}, a, b("testID")(l), {
            alt: d,
            "aria-labelledby": e,
            className: f === "none" && m == null ? void 0 : (g || (g = b("stylex")))(f !== "none" && i[f], m),
            onLoad: j,
            ref: o,
            src: k
        }))
    }
    c = h.forwardRef(a);
    e.exports = c
}
), null);
__d("CometImageFromIXValue.react", ["BaseImage.react", "React", "RecoverableViolationWithComponentStack.react", "coerceImageishSprited", "coerceImageishURL", "joinClasses", "testID"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a, c) {
        var d = a.alt
          , e = a.source;
        a = a.testid;
        var f = b("coerceImageishSprited")(e);
        if (f != null) {
            var h = f.spriteCssClass;
            f = f.spriteMapCssClass;
            return g.jsx("i", babelHelpers["extends"]({}, b("testID")(a), {
                "aria-label": d === "" ? null : d,
                className: b("joinClasses")(f, h),
                ref: c,
                role: d === "" ? null : "img"
            }))
        }
        a = b("coerceImageishURL")(e);
        if (a != null) {
            f = a.height;
            h = a.uri;
            e = a.width;
            return g.jsx(b("BaseImage.react"), {
                alt: d,
                draggable: !1,
                height: f,
                ref: c,
                src: h,
                testid: void 0,
                width: e
            })
        }
        return g.jsx(b("RecoverableViolationWithComponentStack.react"), {
            errorMessage: "asset provided to CometImageFromIXValue cannot be transformed by Haste",
            projectName: "comet_ui"
        })
    }
    c = g.forwardRef(a);
    e.exports = c
}
), null);
__d("CometImage.react", ["BaseImage.react", "CometImageFromIXValue.react", "React", "useFeedImageErrorEventLoggerCbs"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a, c) {
        var d = a.alt
          , e = a.onError
          , f = a.onLoad
          , h = a.src
          , i = a.testid;
        i = babelHelpers.objectWithoutPropertiesLoose(a, ["alt", "onError", "onLoad", "src", "testid"]);
        a = b("useFeedImageErrorEventLoggerCbs")({
            onError: e,
            onLoad: f,
            src: h
        });
        e = a._onError;
        f = a._onLoad;
        return typeof h === "string" ? g.jsx(b("BaseImage.react"), babelHelpers["extends"]({}, i, {
            alt: d,
            onError: e,
            onLoad: f,
            ref: c,
            src: h,
            testid: void 0
        })) : g.jsx(b("CometImageFromIXValue.react"), {
            alt: d,
            ref: c,
            source: h,
            testid: void 0
        })
    }
    c = g.forwardRef(a);
    e.exports = c
}
), null);
__d("CometLink.react", ["BaseLink.react", "React", "TetraTextContext", "TetraTextTypography", "isCometRouterUrl", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = {
        disabled: {
            color: "erlsw9ld",
            ":hover": {
                textDecoration: "p8dawk7l"
            }
        },
        root: {
            color: "gmql0nx0",
            ":hover": {
                textDecoration: "gpro0wi8"
            }
        }
    }
      , i = {
        blueLink: {
            color: "py34i1dx"
        },
        highlight: {
            color: "q66pz984"
        },
        negative: {
            color: "jdix4yx3"
        },
        positive: {
            color: "g5o1ygfq"
        },
        primary: {
            color: "oo9gr5id"
        },
        secondary: {
            color: "m9osqain"
        },
        tertiary: {
            color: "pipptul6"
        },
        white: {
            color: "ljqsnud1"
        }
    }
      , j = {
        bold: {
            fontWeight: "hnhda86s"
        },
        medium: {
            fontWeight: "ekzkrbhg"
        },
        normal: {
            fontWeight: "b1v8xokw"
        },
        semibold: {
            fontWeight: "lrazzd5p"
        }
    }
      , k = {
        block: {
            display: "a8c37x1j"
        },
        "inline-block": {
            display: "q9uorilb"
        }
    };
    function a(a, c) {
        var d = a.color
          , e = a.disabled;
        e = e === void 0 ? !1 : e;
        var f = a.display;
        f = f === void 0 ? "inline" : f;
        var n = a.fbclid
          , o = a.href
          , p = a.lynxMode
          , q = a.role
          , r = a.target
          , s = a.weight
          , t = a.xstyle;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["color", "disabled", "display", "fbclid", "href", "lynxMode", "role", "target", "weight", "xstyle"]);
        var u = g.useContext(b("TetraTextContext"))
          , v = r === "_blank" || o != null && o !== "#" && !b("isCometRouterUrl")(o);
        d = (d = d) != null ? d : u != null ? l(u.type, v) : "inherit";
        s = (s = s) != null ? s : u != null ? m(u.type, v) : "inherit";
        u = q == null && (o == null || o === "#") ? "button" : q;
        return g.jsx(b("BaseLink.react"), babelHelpers["extends"]({}, a, {
            disabled: e,
            display: "inline",
            fbclid: n,
            href: o,
            lynxMode: p,
            ref: c,
            role: u,
            target: v ? "_blank" : r,
            xstyle: [h.root, d !== "inherit" && i[d], s !== "inherit" && j[s], e && h.disabled, f !== "inline" && k[f], t]
        }))
    }
    function l(a, b) {
        switch (a) {
        case "headline3":
        case "headline4":
        case "body1":
        case "body2":
        case "body3":
        case "body4":
            return b ? "blueLink" : "primary";
        case "meta1":
        case "meta2":
        case "meta3":
        case "meta4":
            return b ? "blueLink" : "inherit";
        default:
            return "inherit"
        }
    }
    function m(a, c) {
        if (!c) {
            c = n(a);
            return b("TetraTextTypography")[c].fontWeight
        }
        return "inherit"
    }
    function n(a) {
        switch (a) {
        case "headline3":
            return "headlineEmphasized3";
        case "headline4":
            return "headlineEmphasized4";
        case "body1":
            return "bodyLink1";
        case "body2":
            return "bodyLink2";
        case "body3":
            return "bodyLink3";
        case "body4":
            return "bodyLink4";
        default:
            return a
        }
    }
    c = g.forwardRef(a);
    e.exports = c
}
), null);
__d("BaseAccessibleElement_DEPRECATED.react", ["React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var b = a.children;
        a = a.id;
        return g.jsx("span", {
            className: "rfua0xdk pmk7jnqg pfx3uekm ay7djpcl ema1e40h q45zohi1",
            "data-html2canvas-ignore": "true",
            id: a,
            children: b
        })
    }
}
), null);
__d("CometComposerMediaAttachmentAreaResource", ["JSResourceForInteraction"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("JSResourceForInteraction")("CometComposerMediaAttachmentArea.react").__setRef("CometComposerMediaAttachmentAreaResource");
    c = a;
    e.exports = c
}
), null);
__d("CometRelayQueryProfiler", ["InteractionTracingMetrics", "emptyFunction", "performanceNow", "relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    f.install = a;
    var g;
    function h(a, c) {
        if (!c)
            return b("emptyFunction");
        var d = b("InteractionTracingMetrics").currentInteractionLogger()
          , e = (g || (g = b("performanceNow")))();
        d.addMarkerPoint("Relay_" + c.queryName + "_start", "RelayQuery", e);
        return function(a) {
            var f = {
                usedCache: c.usedCache,
                usedPrefetcher: c.usedPrefetcher
            };
            a && (f.error = a.message);
            d.forEach(function(a) {
                b("InteractionTracingMetrics").removeMarkerPoint(a.traceId, "Relay_" + c.queryName + "_start")
            });
            d.addSubspan("Relay_" + c.queryName, "RelayQuery", e, (g || (g = b("performanceNow")))(), f)
        }
    }
    function a() {
        b("relay-runtime").RelayProfiler.attachProfileHandler("fetchRelayQuery", h)
    }
}
), null);
__d("crc32", [], (function(a, b, c, d, e, f) {
    e.exports = b;
    function b(a) {
        var b = -1;
        for (var c = 0, d = a.length; c < d; c++)
            b = b >>> 8 ^ g[(b ^ a.charCodeAt(c)) & 255];
        return ~b
    }
    var g = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117];
    a.Int32Array !== void 0 && (g = new Int32Array(g))
}
), null);
__d("TimeSpentImmediateActiveSecondsLoggerComet", ["Banzai", "CometTimeSpentNavigation", "CurrentUser", "IasUtsClientDebuggingFalcoEvent", "crc32", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    f.maybeReportActiveSecond = a;
    var g = "immediate_active_seconds"
      , h = {
        retry: !0,
        signal: !0
    }
      , i = b("CurrentUser").getID()
      , j = i !== "" || i !== "0" ? 2003 : 0
      , k = (b("crc32")(i) >>> 0) % j
      , l = 0;
    function m(a) {
        if (j <= 0)
            return !1;
        a = Math.floor(a / 1e3) % j;
        return a === k
    }
    function a(a) {
        if (a >= l && a - l < 1e3)
            return;
        var c = m(a);
        if (c) {
            var d = b("CometTimeSpentNavigation").getPathInfo();
            d = {
                activity_time_ms: a,
                last_activity_time_ms: l,
                script_path: d ? d.name : ""
            };
            b("Banzai").post(g, d, h)
        }
        b("gkx")("1427308") && b("IasUtsClientDebuggingFalcoEvent").log(function() {
            return {
                activity_time: a,
                calculated_sampling_rate: j,
                client_user_id: i,
                ias_bucket: k,
                last_activity_time: l,
                should_report_ias: c,
                source: "ias"
            }
        });
        l = Math.floor(a / 1e3) * 1e3
    }
}
), null);
__d("useCometInteractionTracing", ["CometInteractionTracingConfig", "InteractionTracing", "React", "useCometRouteTracePolicy", "uuid"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a, c, d, e) {
        var f = (e = e) != null ? e : b("useCometRouteTracePolicy")();
        return g.useCallback(function(e, g, h, i) {
            var j = b("uuid")()
              , k = (i = i) != null ? i : f;
            b("InteractionTracing").trace(a, function(a) {
                var c = b("InteractionTracing").checkAndMarkRevisit(k);
                a.addMetadata("revisit", c ? 1 : 0);
                e(a)
            }, c, d, k, j, g, h, b("CometInteractionTracingConfig").tracingConfig)
        }, [a, c, d, f])
    }
}
), null);
__d("CometFeedNoRoutingNavigationEventsLoggerImpl", ["JSScheduler", "React", "requireDeferred"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = b("requireDeferred")("Banzai");
    function a(a, c, d) {
        var e = g.useCallback(function(b, e, f, g) {
            if (c == null || c === "")
                return;
            var h = babelHelpers["extends"]({}, b.VITAL, {
                signal: !0
            });
            b.post("comet_metrics:navigation", {
                dest_module: g,
                extra: d,
                href: f,
                tn: a.join(""),
                ts: e,
                xt: c
            }, h)
        }, [a, c, d]);
        return g.useCallback(function(a, c, d) {
            b("JSScheduler").scheduleLoggingPriCallback(function() {
                return h.onReady(function(b) {
                    return e(b, a, c, d)
                })
            })
        }, [e])
    }
}
), null);
__d("useCometFeedNoRoutingNavigationEventLogger", ["CometFeedLoggingExtraFieldsContext", "CometFeedNoRoutingNavigationEventsLoggerImpl", "CometTrackingCodeContext", "CometTrackingNodesContext", "React", "emptyFunction"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = g.useContext(b("CometTrackingNodesContext"))
          , d = g.useContext(b("CometTrackingCodeContext"));
        d = d.encrypted_tracking[0];
        var e = g.useContext(b("CometFeedLoggingExtraFieldsContext"));
        return d === null || d === void 0 ? b("emptyFunction") : b("CometFeedNoRoutingNavigationEventsLoggerImpl")((a = a) != null ? a : c, d, e)
    }
}
), null);
__d("ProfileCometLinkContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext({
        groupID: null
    });
    e.exports = c
}
), null);
__d("RelayFBCometMutations", ["recoverableViolation", "relay-runtime", "warning"], (function(a, b, c, d, e, f) {
    "use strict";
    f.addFBisms = a;
    var g = 1;
    function a(a) {
        return function(c, d, e) {
            var f = d.variables.input || {}
              , h = f.actor_id
              , i = f.client_mutation_id;
            f = babelHelpers.objectWithoutPropertiesLoose(f, ["actor_id", "client_mutation_id"]);
            b("warning")(i == null, "RelayFBCometMutations: Found `client_mutation_id` in mutation input`. In the Facebook context, `client_mutation_id` and `actor_id` are added automatically.");
            var j;
            c.options != null && c.options.actorID != null && typeof c.options.actorID === "string" ? j = c.options.actorID : b("recoverableViolation")("RelayFBCometMutations: Expected a non-nullable string actorID to be set on the Relay environment. https://fburl.com/wiki/m19zmtlh", "relay");
            if (h != null && h !== j) {
                var k = b("relay-runtime").getRequest(d.mutation);
                k = k.params.name;
                b("recoverableViolation")('You passed an actor_id parameter "' + h + '" to mutation "' + k + '", but the parameter was overridden by the actor_id "' + ((k = j) != null ? k : "") + '" defined in the ActorContext that wraps your React tree. Update your code to avoid passing the actor_id parameter to your mutation.', "relay");
                j = h
            }
            h = babelHelpers["extends"]({}, d.variables, {
                input: babelHelpers["extends"]({}, f, {
                    actor_id: j,
                    client_mutation_id: (k = i) != null ? k : "" + g++
                })
            });
            return a(c, {
                configs: d.configs,
                mutation: d.mutation,
                onCompleted: d.onCompleted,
                onError: d.onError,
                optimisticResponse: d.optimisticResponse,
                optimisticUpdater: d.optimisticUpdater,
                updater: d.updater,
                uploadables: d.uploadables,
                variables: h
            }, e)
        }
    }
}
), null);
__d("relay-experimental/MatchContainer", ["react"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = g || b("react"), i = h.useMemo;
    function a(a) {
        var b = a.fallback
          , c = a.loader
          , d = a.match;
        a = a.props;
        if (d != null && typeof d !== "object")
            throw new Error("MatchContainer: Expected `match` value to be an object or null/undefined.");
        d = (d = d) != null ? d : {};
        var e = d.__id
          , f = d.__fragments
          , g = d.__fragmentOwner
          , j = d.__fragmentPropName;
        d = d.__module_component;
        if (g != null && typeof g !== "object" || j != null && typeof j !== "string" || f != null && typeof f !== "object" || e != null && typeof e !== "string")
            throw new Error("MatchContainer: Invalid 'match' value, expected an object that has a '...SomeFragment' spread.");
        c = d != null ? c(d) : null;
        d = i(function() {
            if (j != null && e != null && f != null) {
                var a = {};
                a[j] = {
                    __id: e,
                    __fragments: f,
                    __fragmentOwner: g
                };
                return a
            }
            return null
        }, [e, f, g, j]);
        if (c != null && d != null)
            return h.jsx(c, babelHelpers["extends"]({}, a, d));
        else {
            return (c = b) != null ? c : null
        }
    }
    e.exports = a
}
), null);
__d("RelayFBMatchContainer", ["React", "RelayFBModuleLoader", "relay-experimental/MatchContainer"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.fallback
          , d = a.match;
        a = a.props;
        return g.jsx(b("relay-experimental/MatchContainer"), {
            fallback: c,
            loader: b("RelayFBModuleLoader").read,
            match: d,
            props: a
        })
    }
}
), null);
__d("RelayFBModuleResource", ["RelayFBModuleLoader", "unrecoverableViolation"], (function(a, b, c, d, e, f) {
    "use strict";
    f.read = a;
    f.getModuleId = c;
    function a(a) {
        if (a === null || typeof a !== "object")
            throw b("unrecoverableViolation")("ModuleResource.read(): Expected `match` value to be an object.", "relay");
        a = a.__module_component;
        return a == null ? null : b("RelayFBModuleLoader").read(a)
    }
    function c(a) {
        if (a === null || typeof a !== "object")
            throw b("unrecoverableViolation")("ModuleResource.getModuleId(): Expected `match` value to be an object.", "relay");
        a = a.__module_component;
        if (a == null)
            return null;
        a = b("RelayFBModuleLoader").getModuleReference(a);
        return a.getModuleId()
    }
}
), null);
__d("randomInt", ["invariant"], (function(a, b, c, d, e, f, g) {
    e.exports = a;
    function a(a, b) {
        a = b === void 0 ? [0, a] : [a, b];
        b = a[0];
        a = a[1];
        a > b || g(0, 1180, a, b);
        var c = this.random || Math.random;
        return Math.floor(b + c() * (a - b))
    }
}
), null);
__d("ClientIDs", ["randomInt"], (function(a, b, c, d, e, f) {
    f.getNewClientID = a;
    f.isExistingClientID = c;
    var g = new Set();
    function a() {
        var a = Date.now();
        a = a + ":" + (b("randomInt")(0, 4294967295) + 1);
        g.add(a);
        return a
    }
    function c(a) {
        return g.has(a)
    }
}
), null);
__d("RelayFBSubscription", ["ClientIDs", "warning"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        return function(c, d) {
            var e = d.variables.input
              , f = "client_subscription_id"in e;
            b("warning")(!f, "RelayFBSubscription: found `client_subscription_id` in `input`. In the Facebook context, `client_subscription_id` are added automatically.");
            f = babelHelpers["extends"]({}, d.variables, {
                input: babelHelpers["extends"]({}, e, {
                    client_subscription_id: b("ClientIDs").getNewClientID()
                })
            });
            return a(c, {
                variables: f,
                subscription: d.subscription,
                onCompleted: d.onCompleted,
                onError: d.onError,
                onNext: d.onNext,
                updater: d.updater,
                configs: d.configs
            })
        }
    }
    e.exports = {
        addFBisms: a
    }
}
), null);
__d("RelayFlight.hybrid", ["err", "relay-runtime/query/GraphQLTag"], (function(a, b, c, d, e, f) {
    "use strict";
    f.isServer_INTERNAL_DO_NOT_USE = a;
    f.setIsServer_INTERNAL_DO_NOT_USE = c;
    f.initialize_INTERNAL_DO_NOT_USE = d;
    f.clientComponent = e;
    f.useReadQuery = j;
    f.loadQueryForClient = k;
    var g = null
      , h = !1;
    function a() {
        return h
    }
    function c(a) {
        h = a
    }
    function i() {
        if (g == null)
            throw b("err")("Expected RelayFlight::initialize_INTERNAL_DO_NOT_USE() to be called before using other APIs.");
        return g
    }
    function d(a) {
        if (g != null)
            throw b("err")("RelayFlight::initialize_INTERNAL_DO_NOT_USE(): Already initialized, this module may not be initialized again.");
        g = a
    }
    function e(a, b) {
        var c = i();
        return c.clientComponent(a, b)
    }
    a = function() {
        var a = i();
        return a.readInlineData.apply(a, arguments)
    }
    ;
    f.readInlineData = a;
    c = function() {
        var a = i();
        return a.useFragment.apply(a, arguments)
    }
    ;
    f.useFragment = c;
    function j(a, b, c) {
        var d = i();
        return d.useReadQuery(a, b, c)
    }
    function k(a, b) {
        var c = i();
        return c.loadQueryForClient(a, b)
    }
    f.graphql = b("relay-runtime/query/GraphQLTag").graphql
}
), null);
__d("RelayFlightClientImpl.client", ["invariant", "relay-experimental/useFragment", "relay-experimental/useLazyLoadQuery", "relay-runtime"], (function(a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
        return b()
    }
    function c(a, c, d) {
        return b("relay-experimental/useLazyLoadQuery")(a, c, {
            fetchPolicy: "store-only",
            UNSTABLE_renderPolicy: d == null ? void 0 : d.UNSTABLE_renderPolicy
        })
    }
    function d(a, b) {
        a = a.params.id;
        a != null || g(0, 23333);
        return {
            id: a,
            variables: b
        }
    }
    f = {
        clientComponent: a,
        loadQueryForClient: d,
        useFragment: b("relay-experimental/useFragment"),
        useReadQuery: c,
        readInlineData: b("relay-runtime").readInlineData
    };
    e.exports = f
}
), null);
__d("configureRelayFlight", ["RelayFlight.hybrid", "RelayFlightClientImpl.client"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a() {
        b("RelayFlight.hybrid").isServer_INTERNAL_DO_NOT_USE() || b("RelayFlight.hybrid").initialize_INTERNAL_DO_NOT_USE(b("RelayFlightClientImpl.client"))
    }
}
), null);
__d("configureRelayFeatureFlagsForWWW", ["gkx", "relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a() {
        var a, c;
        (a = b("relay-runtime")).RelayFeatureFlags.ENABLE_RELAY_CONTAINERS_SUSPENSE = !1;
        a.RelayFeatureFlags.ENABLE_PARTIAL_RENDERING_DEFAULT = !(c = b("gkx"))("1070056");
        a.RelayFeatureFlags.ENABLE_PRECISE_TYPE_REFINEMENT = c("1465547");
        a.RelayFeatureFlags.ENABLE_REQUIRED_DIRECTIVES = !0;
        a.RelayFeatureFlags.ENABLE_REACT_FLIGHT_COMPONENT_FIELD = c("1661070");
        a.RelayFeatureFlags.ENABLE_FRIENDLY_QUERY_NAME_GQL_URL = c("1723588")
    }
}
), null);
__d("configureRelayForFB", ["relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("relay-runtime").ConnectionInterface;
    function a() {
        g.inject({
            CLIENT_MUTATION_ID: "client_mutation_id",
            CURSOR: "cursor",
            EDGES: "edges",
            END_CURSOR: "end_cursor",
            HAS_NEXT_PAGE: "has_next_page",
            HAS_PREV_PAGE: "has_previous_page",
            NODE: "node",
            PAGE_INFO_TYPE: "PageInfo",
            PAGE_INFO: "page_info",
            START_CURSOR: "start_cursor"
        })
    }
    e.exports = a
}
), null);
__d("configureRelayForWWW", ["FBLogger", "configureRelayFeatureFlagsForWWW", "configureRelayForFB", "relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a() {
        b("configureRelayForFB")(),
        b("configureRelayFeatureFlagsForWWW")(),
        b("relay-runtime").Observable.onUnhandledError(function(a, c) {
            var d = b("FBLogger")("relay");
            a instanceof Error ? (d.catching(a),
            c ? d.mustfix("An uncaught error was thrown inside `RelayObservable`.") : d.warn("An error was caught inside `RelayObservable`.")) : c ? d.mustfix("An uncaught error was thrown inside `RelayObservable` but it was not an instance of `Error`. Please change your code so that it throws a bonafide `Error` object instead of `%s`.", a) : d.warn("An error was caught inside `RelayObservable` but it was not aninstance of `Error`. Please change your code so that it throws a bonafide `Error` object instead of `%s`.", a)
        })
    }
}
), null);
__d("react-relay/assertFragmentMap", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
        b && typeof b === "object" || g(0, 5879, a, b);
        for (var c in b)
            if (Object.prototype.hasOwnProperty.call(b, c)) {
                var d = b[c];
                d && (typeof d === "object" || typeof d === "function") || g(0, 5880, a, c, d)
            }
    }
    e.exports = a
}
), null);
__d("createSuspensePaginationContainer_DEPRECATED", ["React", "areEqual", "createSuspenseFragmentContainer_DEPRECATED", "forEachObject", "mapObject", "relay-experimental/useRelayEnvironment", "relay-runtime", "unrecoverableViolation", "warning"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i = b("React");
    c = b("React");
    var j = c.useCallback
      , k = c.useEffect
      , l = c.useMemo
      , m = c.useReducer
      , n = c.useRef
      , o = (d = b("relay-runtime")).ConnectionInterface;
    f = d.__internal;
    var p = f.fetchQuery
      , q = f.getOperationVariables
      , r = d.createOperationDescriptor
      , s = d.getDataIDsFromObject
      , t = d.getFragment
      , u = d.getRequest
      , v = d.getSelector
      , w = "forward";
    function a(a, c, d) {
        var e = a.displayName || a.name || "Unknown"
          , f = (g || (g = b("mapObject")))(c, t)
          , h = A(f)
          , i = u(d.query);
        h = y(a, e, h.direction, B(h), d.getVariables);
        h = b("createSuspenseFragmentContainer_DEPRECATED")(h, c);
        c = x(a, e, f, d.getFragmentRefsFromResponse, i, h);
        return c
    }
    function x(a, c, d, e, f, g) {
        var l = "RelaySuspensePaginationContainer(" + c + ")";
        a = function(a, c) {
            var o = b("relay-experimental/useRelayEnvironment")()
              , t = {};
            b("forEachObject")(d, function(b, c) {
                b = v(b, a[c]);
                b = b != null && b.kind === "PluralReaderSelector" ? (c = (c = b.selectors[0]) == null ? void 0 : c.owner.variables) != null ? c : {} : (c = b == null ? void 0 : b.owner.variables) != null ? c : {};
                t = babelHelpers["extends"]({}, t, b)
            });
            var u = s(d, a)
              , w = m(z, {
                dataIDs: u,
                mirroredEnvironment: o,
                mirroredParentVariables: t,
                refetchFragmentRefs: {},
                refetchVariables: null
            })
              , x = w[0]
              , y = w[1]
              , A = n(!1)
              , B = n(null)
              , C = function() {
                B.current && (B.current.dispose(),
                B.current = null)
            };
            k(function() {
                return function() {
                    A.current = !0,
                    C()
                }
            }, []);
            (o !== x.mirroredEnvironment || !(h || (h = b("areEqual")))(t, x.mirroredParentVariables) || !(h || (h = b("areEqual")))(x.dataIDs, u)) && (C(),
            y({
                environment: o,
                dataIDs: u,
                parentVariables: t,
                type: "reset"
            }));
            w = j(function(a, c) {
                if (A.current === !0) {
                    b("warning")(!1, "Relay: Unexpected fetch on unmounted component `%s`. It looks like some instances of your container still trying to fetch data but they already unmounted. Please make sure you clear all timers, intervals, async calls, etc that may trigger a fetch.", l);
                    return null
                }
                a = q(f.operation, a);
                var d = r(f, a)
                  , g = null
                  , h = o.retain(d)
                  , i = {
                    dispose: function() {
                        var a = g;
                        g = null;
                        a && a.unsubscribe();
                        h.dispose()
                    }
                }
                  , j = function() {
                    var a = c && c.force ? {
                        force: !0
                    } : {}
                      , b = {
                        complete: function() {
                            C(),
                            y({
                                type: "complete"
                            }),
                            c && c.onComplete && c.onComplete(null)
                        },
                        error: function(a) {
                            function b(b) {
                                return a.apply(this, arguments)
                            }
                            b.toString = function() {
                                return a.toString()
                            }
                            ;
                            return b
                        }(function(a) {
                            C(),
                            y({
                                type: "abort"
                            }),
                            c && c.onComplete && c.onComplete(a)
                        }),
                        next: function() {
                            var a = o.lookup(d.fragment);
                            y({
                                fragmentRefs: e(a.data),
                                type: "next"
                            })
                        },
                        unsubscribe: function() {
                            if (A.current === !0)
                                return;
                            C();
                            y({
                                type: "abort"
                            })
                        }
                    };
                    g = p(o, d, {
                        networkCacheConfig: a
                    }).subscribe(b);
                    return i
                };
                C();
                B.current = j();
                y({
                    type: "fetch",
                    refetchVariables: a
                });
                return i
            }, [o]);
            return i.jsx(g, babelHelpers["extends"]({}, a, x.refetchFragmentRefs, {
                forwardedRef: c,
                isLoading: B.current != null,
                parentVariables: (u = x.refetchVariables) != null ? u : t,
                refetch: w
            }))
        }
        ;
        a.displayName = l;
        c = i.forwardRef(a);
        return c
    }
    function y(a, c, d, e, f) {
        return function(g) {
            var h, k = g.forwardedRef, m = g.isLoading, n = g.parentVariables, p = g.refetch;
            g.relay;
            var q = babelHelpers.objectWithoutPropertiesLoose(g, ["forwardedRef", "isLoading", "parentVariables", "refetch", "relay"])
              , r = b("relay-experimental/useRelayEnvironment")();
            g = e(q);
            var s = C(c, d, g)
              , t = j(function(a, c) {
                if (s == null || !s.hasMore) {
                    c && c.onComplete && c.onComplete(null);
                    return null
                }
                var e = o.get()
                  , g = e.END_CURSOR;
                e = e.START_CURSOR;
                var h = s.cursor;
                b("warning")(h, "Relay: Cannot `loadMore` without valid `%s` (got `%s`)", d === w ? g : e, h);
                return p(f(q, {
                    count: a,
                    cursor: h
                }, n), c)
            }, [s, p, q, n])
              , u = j(function(a, b, c) {
                return p(f(q, {
                    count: a,
                    cursor: null
                }, babelHelpers["extends"]({}, n, b || {})), babelHelpers["extends"]({}, c, {
                    force: !0
                }))
            }, [p, q, n])
              , v = !!(s && s.hasMore && s.cursor);
            g = l(function() {
                return {
                    environment: r,
                    hasMore: v,
                    isLoading: m,
                    loadMore: t,
                    refetchConnection: u
                }
            }, [r, v, m, t, u]);
            return i.jsx(a, babelHelpers["extends"]({}, q, {
                ref: (h = q.componentRef) != null ? h : k,
                relay: g
            }))
        }
    }
    function z(a, b) {
        var c;
        switch (b.type) {
        case "reset":
            c = {
                dataIDs: b.dataIDs,
                mirroredEnvironment: b.environment,
                mirroredParentVariables: b.parentVariables,
                refetchFragmentRefs: {},
                refetchVariables: null
            };
            break;
        case "fetch":
            c = babelHelpers["extends"]({}, a, {
                refetchVariables: b.refetchVariables
            });
            break;
        case "abort":
            c = babelHelpers["extends"]({}, a);
            break;
        case "next":
            c = babelHelpers["extends"]({}, a, {
                refetchFragmentRefs: b.fragmentRefs
            });
            break;
        case "complete":
        default:
            c = babelHelpers["extends"]({}, a);
            break
        }
        return c
    }
    function A(a) {
        var c = null;
        for (var d in a) {
            var e = a[d];
            e = e && e.metadata && e.metadata.connection;
            if (e != null) {
                if (!Array.isArray(e))
                    throw b("unrecoverableViolation")("SuspensePaginationContainer: Expected metadata to be array, got " + ("`" + typeof e + "` instead."), "relay");
                if (e.length !== 1)
                    throw b("unrecoverableViolation")("SuspensePaginationContainer: Only a single @connection is " + ("supported, `" + d + "` has " + e.length + "."), "relay");
                if (c)
                    throw b("unrecoverableViolation")("SuspensePaginationContainer: Only a single fragment with @connection is supported.", "relay");
                c = babelHelpers["extends"]({}, e[0], {
                    fragmentName: d
                })
            }
        }
        if (c === null)
            throw b("unrecoverableViolation")("SuspensePaginationContainer: A @connection directive must be present.", "relay");
        return c
    }
    function B(a) {
        var c = a.path;
        if (!c)
            throw b("unrecoverableViolation")("SuspensePaginationContainer: Unable to synthesize a getConnectionFromProps function.", "relay");
        return function(b) {
            b = b[a.fragmentName];
            for (var d = 0; d < c.length; d++) {
                if (!b || typeof b !== "object")
                    return null;
                b = b[c[d]]
            }
            return b
        }
    }
    function C(a, c, d) {
        if (d == null)
            return null;
        var e = o.get()
          , f = e.EDGES
          , g = e.END_CURSOR
          , h = e.HAS_NEXT_PAGE
          , i = e.HAS_PREV_PAGE
          , j = e.PAGE_INFO;
        e = e.START_CURSOR;
        if (typeof d !== "object")
            throw b("unrecoverableViolation")("SuspensePaginationContainer: Expected `getConnectionFromProps()` in " + ("`" + a + "` to return `null` or a plain object with ") + (f + " and " + j + " properties, got `" + d + "`."), "relay");
        var k = d[f];
        d = d[j];
        if (k == null || d == null)
            return null;
        if (!Array.isArray(k))
            throw b("unrecoverableViolation")("SuspensePaginationContainer: Expected `getConnectionFromProps()` in " + ("`" + a + "` to return an object with " + f + ": Array, got ") + ("`" + k + "`."), "relay");
        if (typeof d !== "object")
            throw b("unrecoverableViolation")("SuspensePaginationContainer: Expected `getConnectionFromProps()` in " + ("`" + a + "` to return an object with " + j + ": Object, ") + ("got `" + d + "`."), "relay");
        f = c === w ? d[h] : d[i];
        d = c === w ? d[g] : d[e];
        if (typeof f !== "boolean" || k.length !== 0 && d === void 0) {
            b("warning")(!1, "Relay: Cannot paginate without %s fields in `%s`. Be sure to fetch %s (got `%s`) and %s (got `%s`).", j, a, c === w ? h : i, f, c === w ? g : e, d);
            return null
        }
        return {
            cursor: d,
            edgeCount: k.length,
            hasMore: f
        }
    }
    e.exports = a
}
), null);
__d("createSuspenseQueryRenderer_DEPRECATED", ["React", "react-relay/ReactRelayContext", "relay-experimental/useLazyLoadQueryNode", "relay-experimental/useMemoOperationDescriptor", "relay-experimental/useRelayEnvironment", "relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = b("relay-runtime").getRequest(a)
          , d = "RelaySuspenseQueryRenderer(" + c.params.name + ")";
        function e(c) {
            var e = c.UNSTABLE_renderPolicy
              , f = c.children
              , i = c.fetchKey
              , j = c.fetchPolicy;
            c = c.variables;
            var k = b("relay-experimental/useRelayEnvironment")();
            c = b("relay-experimental/useMemoOperationDescriptor")(a, c);
            var l = g.useMemo(function() {
                return h(k)
            }, [k])
              , m = b("relay-experimental/useLazyLoadQueryNode")({
                componentDisplayName: d,
                fetchKey: i,
                fetchPolicy: j,
                query: c,
                renderPolicy: e
            });
            return g.jsx(b("react-relay/ReactRelayContext").Provider, {
                value: l,
                children: g.useMemo(function() {
                    return f(m)
                }, [f, m])
            })
        }
        e.displayName = d;
        return e
    }
    function h(a) {
        return {
            environment: a
        }
    }
}
), null);
__d("RelayMutationQueue", ["relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("relay-runtime").commitMutation
      , h = b("relay-runtime").createOperationDescriptor
      , i = b("relay-runtime").getRequest;
    a = function() {
        function a(a) {
            this.$2 = null,
            this.$3 = new Set(),
            this.$1 = a
        }
        var b = a.prototype;
        b.getQueuedMutations = function() {
            return this.$3
        }
        ;
        b.push = function(a) {
            var b = this, c;
            (a.optimisticResponse || a.optimisticUpdater) && (c = this.$1.applyMutation(this.$4(a)));
            var d = function(a) {
                a === void 0 && (a = function() {}
                ),
                b.$2 = null,
                c && c.dispose(),
                a(),
                b.$5()
            }
              , e = {
                configs: a.configs,
                mutation: a.mutation,
                uploadables: a.uploadables,
                updater: a.updater,
                variables: a.variables,
                onCompleted: function(b) {
                    d(function() {
                        a.onCompleted && a.onCompleted(b)
                    })
                },
                onError: function(b) {
                    d(function() {
                        a.onError && a.onError(b)
                    })
                }
            };
            this.$3.add(e);
            this.$5();
            return {
                dispose: function() {
                    if (b.$2 && b.$2.config === e) {
                        b.$2.disposable.dispose();
                        d();
                        return
                    }
                    var a = b.$3.has(e);
                    a && (b.$3["delete"](e),
                    c && c.dispose())
                }
            }
        }
        ;
        b.$5 = function() {
            if (this.$2)
                return;
            var a = j(this.$3);
            if (a === void 0)
                return;
            this.$2 = {
                config: a,
                disposable: this.$6(a)
            }
        }
        ;
        b.$6 = function(a) {
            return g(this.$1, a)
        }
        ;
        b.$7 = function(a) {
            var b = i(a.mutation);
            if (b.params.operationKind !== "mutation")
                throw TypeError("enqueueMutation: Expected a mutation");
            if (b.kind !== "Request")
                throw TypeError("enqueueMutation: Expected mutation to be of type request");
            return h(b, a.variables)
        }
        ;
        b.$4 = function(a) {
            return {
                operation: this.$7(a),
                response: a.optimisticResponse,
                updater: a.optimisticUpdater
            }
        }
        ;
        return a
    }();
    function j(a) {
        var b = a.values();
        b = b.next();
        if (b.done)
            return;
        a["delete"](b.value);
        return b.value
    }
    e.exports = a
}
), null);
__d("enqueueMutation", ["RelayMutationQueue"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = a();
    function a() {
        if (typeof WeakMap === "function")
            return new WeakMap();
        if (typeof Map === "function")
            return new Map();
        throw ReferenceError("Cannot use enqueueMutation in this environment. Either WeakMap or Map must be defined to use enqueueMutation.")
    }
    function c(a, c) {
        var d = g.get(a);
        d || (d = new (b("RelayMutationQueue"))(a),
        g.set(a, d));
        return d.push(c)
    }
    function d(a) {
        return g.get(a)
    }
    e.exports = {
        enqueueMutation: c,
        __internal: {
            getMutationQueue: d
        }
    }
}
), null);
__d("isRelayFBLocalEnvironment", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        return a.options != null && a.options.isLocal === !0 ? !0 : !1
    }
}
), null);
__d("relay-experimental/useBlockingPaginationFragment", ["invariant", "Promise", "scheduler", "relay-experimental/getPaginationMetadata", "relay-experimental/useLoadMoreFunction", "relay-experimental/useRefetchableFragmentNode", "relay-experimental/useStaticFragmentNodeWarning", "warning", "react", "relay-runtime"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    c = h || b("react");
    var i = c.useCallback
      , j = c.useEffect
      , k = c.useRef
      , l = c.useState
      , m = b("relay-runtime").getFragment
      , n = b("relay-runtime").getFragmentIdentifier;
    function a(a, c, d) {
        d === void 0 && (d = "useBlockingPaginationFragment()");
        a = m(a);
        b("relay-experimental/useStaticFragmentNodeWarning")(a, "first argument of " + d);
        var e = b("relay-experimental/getPaginationMetadata")(a, d)
          , f = e.connectionPathInFragmentData
          , h = e.identifierField
          , j = e.paginationRequest
          , k = e.paginationMetadata;
        e = e.stream;
        e === !1 || g(0, 18372);
        e = b("relay-experimental/useRefetchableFragmentNode")(a, c, d);
        c = e.fragmentData;
        var l = e.fragmentRef
          , p = e.refetch
          , q = e.disableStoreUpdates;
        e = e.enableStoreUpdates;
        var r = n(a, l)
          , s = o({
            componentDisplayName: d,
            connectionPathInFragmentData: f,
            direction: "backward",
            disableStoreUpdates: q,
            enableStoreUpdates: e,
            fragmentData: c,
            fragmentIdentifier: r,
            fragmentNode: a,
            fragmentRef: l,
            identifierField: h,
            paginationMetadata: k,
            paginationRequest: j
        })
          , t = s[0]
          , u = s[1]
          , v = s[2];
        s = o({
            componentDisplayName: d,
            connectionPathInFragmentData: f,
            direction: "forward",
            disableStoreUpdates: q,
            enableStoreUpdates: e,
            fragmentData: c,
            fragmentIdentifier: r,
            fragmentNode: a,
            fragmentRef: l,
            identifierField: h,
            paginationMetadata: k,
            paginationRequest: j
        });
        d = s[0];
        f = s[1];
        var w = s[2];
        q = i(function(a, b) {
            w();
            v();
            return p(a, babelHelpers["extends"]({}, b, {
                __environment: void 0
            }))
        }, [w, v, p]);
        return {
            data: c,
            loadNext: d,
            loadPrevious: t,
            hasNext: f,
            hasPrevious: u,
            refetch: q
        }
    }
    function o(a) {
        var c = a.disableStoreUpdates
          , d = a.enableStoreUpdates
          , e = babelHelpers.objectWithoutPropertiesLoose(a, ["disableStoreUpdates", "enableStoreUpdates"])
          , f = l(null)
          , g = f[0]
          , h = f[1]
          , m = k(null)
          , n = k(null)
          , o = function() {
            n.current != null && (n.current(),
            n.current = null)
        };
        f = function() {
            o()
        }
        ;
        var p = {
            complete: o,
            start: function() {
                c();
                var a = new (b("Promise"))(function(a) {
                    n.current = function() {
                        m.current = null,
                        a()
                    }
                }
                );
                m.current = a;
                h(a)
            },
            next: o,
            error: o
        };
        e = b("relay-experimental/useLoadMoreFunction")(babelHelpers["extends"]({}, e, {
            observer: p,
            onReset: f
        }));
        var q = e[0];
        p = e[1];
        f = e[2];
        if (g != null && g === m.current)
            throw g;
        j(function() {
            g !== m.current && d()
        }, [g]);
        e = i(function() {
            b("scheduler").unstable_getCurrentPriorityLevel() < b("scheduler").unstable_NormalPriority && b("warning")(!1, "Relay: Unexpected call to `%s` at a priority higher than expected on fragment `%s` in `%s`. It looks like you tried to call `refetch` under a high priority update, but updates that can cause the component to suspend should be scheduled at normal priority. Make sure you are calling `refetch` inside `startTransition()` from the `useSuspenseTransition()` hook.", a.direction === "forward" ? "loadNext" : "loadPrevious", a.fragmentNode.name, a.componentDisplayName);
            return q.apply(void 0, arguments)
        }, [q, a.componentDisplayName, a.direction, a.fragmentNode.name]);
        return [e, p, f]
    }
    e.exports = a
}
), null);
__d("relay-experimental/useIsParentQueryActive", ["relay-experimental/useIsOperationNodeActive", "relay-experimental/useStaticFragmentNodeWarning", "relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("relay-runtime").getFragment;
    function a(a, c) {
        a = g(a);
        b("relay-experimental/useStaticFragmentNodeWarning")(a, "first argument of useIsParentQueryActive()");
        return b("relay-experimental/useIsOperationNodeActive")(a, c)
    }
    e.exports = a
}
), null);
__d("RelayFBMutations", ["RelayAPIConfig", "warning"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = 1;
    function a(a) {
        return function(c, d, e) {
            var f = d.variables.input || {};
            b("warning")(!("client_mutation_id"in f), "RelayFBMutations: Found `client_mutation_id` in mutation input`. In the Facebook context, `client_mutation_id` and `actor_id` are added automatically.");
            var h;
            c.options != null && c.options.actorID != null ? h = c.options.actorID : (h = b("RelayAPIConfig").actorID,
            b("warning")(!1, "RelayFBMutations: Expected ActorID to be set on the Relay environment. Please use `createEnvironment` from `RelayModern` to create an environment with actorID."));
            h = babelHelpers["extends"]({}, d.variables, {
                input: babelHelpers["extends"]({
                    client_mutation_id: "" + g++,
                    actor_id: h
                }, f)
            });
            return a(c, {
                configs: d.configs,
                mutation: d.mutation,
                variables: h,
                onCompleted: d.onCompleted,
                onError: d.onError,
                optimisticUpdater: d.optimisticUpdater,
                optimisticResponse: d.optimisticResponse,
                updater: d.updater,
                uploadables: d.uploadables
            }, e)
        }
    }
    e.exports = {
        addFBisms: a
    }
}
), null);
__d("CometRelay", ["requireCond", "CometRelayQueryProfiler", "cr:894130", "RelayFBCometMutations", "RelayFBEnvironmentActorID", "RelayFBMatchContainer", "RelayFBModuleResource", "RelayFBSubscription", "RelayFlight.hybrid", "configureRelayFlight", "configureRelayForWWW", "createSuspenseFragmentContainer_DEPRECATED", "createSuspensePaginationContainer_DEPRECATED", "createSuspenseQueryRenderer_DEPRECATED", "enqueueMutation", "isRelayFBLocalEnvironment", "relay-experimental/EntryPointContainer.react", "relay-experimental/fetchQuery", "relay-experimental/loadEntryPoint", "relay-experimental/loadQuery", "relay-experimental/ProfilerContext", "relay-experimental/RelayEnvironmentProvider", "relay-experimental/useBlockingPaginationFragment", "relay-experimental/useEntryPointLoader", "relay-experimental/useFragment", "relay-experimental/useIsParentQueryActive", "relay-experimental/useLazyLoadQuery", "relay-experimental/usePaginationFragment", "relay-experimental/usePreloadedQuery", "relay-experimental/useQueryLoader", "relay-experimental/useRefetchableFragment", "relay-experimental/useRelayEnvironment", "relay-experimental/useSubscribeToInvalidationState", "relay-runtime", "useFBMutation", "useFBSubscription"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("RelayFBEnvironmentActorID").getActorID;
    c = b("enqueueMutation").enqueueMutation;
    d = b("relay-experimental/loadQuery").loadQuery;
    var g = (f = b("relay-runtime")).ConnectionHandler
      , h = f.MutationTypes
      , i = f.RangeOperations
      , j = f.RelayFeatureFlags
      , k = f.VIEWER_ID
      , l = f.applyOptimisticMutation
      , m = f.commitLocalUpdate
      , n = f.commitMutation
      , o = f.createPayloadFor3DField
      , p = f.generateUniqueClientID
      , q = f.graphql
      , r = f.readInlineData;
    f = f.requestSubscription;
    b("configureRelayForWWW")();
    b("configureRelayFlight")();
    !b("RelayFlight.hybrid").isServer_INTERNAL_DO_NOT_USE() && b("cr:894130") != null && b("cr:894130").install();
    b("RelayFlight.hybrid").isServer_INTERNAL_DO_NOT_USE() || b("CometRelayQueryProfiler").install();
    e.exports = {
        ConnectionHandler: g,
        EntryPointContainer: b("relay-experimental/EntryPointContainer.react"),
        MatchContainer: b("RelayFBMatchContainer"),
        ModuleResource: b("RelayFBModuleResource"),
        MutationTypes: h,
        ProfilerContext: b("relay-experimental/ProfilerContext"),
        RangeOperations: i,
        RelayEnvironmentProvider: b("relay-experimental/RelayEnvironmentProvider"),
        RelayFeatureFlags: j,
        VIEWER_ID: k,
        applyOptimisticMutation: l,
        commitLocalUpdate: m,
        createPayloadFor3DField: o,
        commitMutation: b("RelayFBCometMutations").addFBisms(n),
        enqueueMutation: b("RelayFBCometMutations").addFBisms(c),
        createSuspenseFragmentContainer_DEPRECATED: b("createSuspenseFragmentContainer_DEPRECATED"),
        createSuspensePaginationContainer_DEPRECATED: b("createSuspensePaginationContainer_DEPRECATED"),
        createSuspenseQueryRenderer_DEPRECATED: b("createSuspenseQueryRenderer_DEPRECATED"),
        fetchQuery: b("relay-experimental/fetchQuery"),
        generateUniqueClientID: p,
        graphql: q,
        loadEntryPoint: b("relay-experimental/loadEntryPoint"),
        loadQuery: d,
        readInlineData: r,
        requestSubscription: b("RelayFBSubscription").addFBisms(f),
        useBlockingPaginationFragment: b("relay-experimental/useBlockingPaginationFragment"),
        useEntryPointLoader: b("relay-experimental/useEntryPointLoader"),
        useFragment: b("relay-experimental/useFragment"),
        useIsParentQueryActive: b("relay-experimental/useIsParentQueryActive"),
        usePaginationFragment: b("relay-experimental/usePaginationFragment"),
        usePreloadedQuery: b("relay-experimental/usePreloadedQuery"),
        useQueryLoader: b("relay-experimental/useQueryLoader"),
        useRefetchableFragment: b("relay-experimental/useRefetchableFragment"),
        useSubscribeToInvalidationState: b("relay-experimental/useSubscribeToInvalidationState"),
        useRelayEnvironment: function() {
            return b("relay-experimental/useRelayEnvironment")()
        },
        useMutation: b("useFBMutation"),
        useSubscription: b("useFBSubscription"),
        getActorID: a,
        isLocalEnvironment: b("isRelayFBLocalEnvironment"),
        useLazyLoadQuery: b("relay-experimental/useLazyLoadQuery")
    }
}
), null);
__d("CometRelayScheduler", ["React", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = b("gkx")("1468700");
    a = {
        cancel: function() {},
        schedule: function(a) {
            h === !0 ? g.startTransition(a) : a();
            return ""
        }
    };
    e.exports = a
}
), null);
__d("CometFRX.entrypoint", ["CometFRXQuery$Parameters", "JSResource", "WebPixelRatio"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        getPreloadProps: function(a) {
            var c = a.entryPoint
              , d = a.id
              , e = a.location;
            a = a.responsible_id;
            return {
                queries: {
                    frx: {
                        parameters: b("CometFRXQuery$Parameters"),
                        variables: {
                            input: {
                                entry_point: c,
                                id: d,
                                location: e,
                                responsible_id: a
                            },
                            scale: b("WebPixelRatio").get()
                        }
                    }
                }
            }
        },
        root: b("JSResource")("CometFRX.react").__setRef("CometFRX.entrypoint")
    };
    e.exports = a
}
), null);
__d("warningComet", ["SiteData", "TAALOpcodes", "err", "requireCond", "cr:1072546", "cr:1072547", "cr:1072549", "cr:983844"], (function(a, b, c, d, e, f) {
    function a(a, b) {}
    b = a;
    c = b;
    e.exports = c
}
), null);
__d("debounceCore", ["TimeSlice"], (function(a, b, c, d, e, f) {
    e.exports = a;
    function a(a, c, d, e, f, g) {
        d === void 0 && (d = null);
        e === void 0 && (e = setTimeout);
        f === void 0 && (f = clearTimeout);
        g === void 0 && (g = !1);
        var h, i = !0;
        function j() {
            for (var k = arguments.length, l = new Array(k), m = 0; m < k; m++)
                l[m] = arguments[m];
            var n;
            if (g) {
                n = b("TimeSlice").guard(function() {
                    i = !0,
                    h = null
                }, "debounceCore");
                if (!i) {
                    f(h);
                    h = e(n, c);
                    return
                }
                i = !1;
                a.apply(d, l)
            } else
                j.reset(),
                n = b("TimeSlice").guard(function() {
                    h = null,
                    a.apply(d, l)
                }, "debounceCore");
            n.__SMmeta = a.__SMmeta;
            h = e(n, c)
        }
        j.reset = function() {
            f(h),
            h = null,
            i = !0
        }
        ;
        j.isPending = function() {
            return h != null
        }
        ;
        return j
    }
}
), null);
__d("isStringNullOrEmpty", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        return a == null || a === ""
    }
}
), null);
__d("asset", [], (function(a, b, c, d, e, f) {
    function a() {
        for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++)
            b[c] = arguments[c];
        throw new Error("asset(" + b.join(",") + "): Unexpected asset reference")
    }
    e.exports = a
}
), null);
__d("SubscriptionsHandler", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
        return a.remove || a.reset || a.unsubscribe || a.cancel || a.dispose
    }
    function i(a) {
        h(a).call(a)
    }
    a = function() {
        function a() {
            this.$1 = []
        }
        var b = a.prototype;
        b.addSubscriptions = function() {
            for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++)
                b[c] = arguments[c];
            b.every(h) || g(0, 3659);
            this.$1 != null ? this.$1 = this.$1.concat(b) : b.forEach(i)
        }
        ;
        b.engage = function() {
            this.$1 == null && (this.$1 = [])
        }
        ;
        b.release = function() {
            this.$1 != null && (this.$1.forEach(i),
            this.$1 = null)
        }
        ;
        b.releaseOne = function(a) {
            var b = this.$1;
            if (b == null)
                return;
            var c = b.indexOf(a);
            c !== -1 && (i(a),
            b.splice(c, 1),
            b.length === 0 && (this.$1 = null))
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("debounce", ["clearTimeout", "debounceCore", "setTimeout"], (function(a, b, c, d, e, f) {
    e.exports = a;
    function a(a, c, d, e, f) {
        c === void 0 && (c = 100);
        var g = function(a, c, d) {
            return b("setTimeout")(a, c, d, !e)
        };
        return b("debounceCore")(a, c, d, g, b("clearTimeout"), f)
    }
}
), null);
__d("orEmptyArray", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        return (a = a) != null ? a : []
    }
}
), null);
__d("MaybeNativePromise", ["Promise"], (function(a, b, c, d, e, f) {
    "use strict";
    c = a.Promise || b("Promise");
    b("Promise").resolve();
    d = c;
    e.exports = d
}
), null);
