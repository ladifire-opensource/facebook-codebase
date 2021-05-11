if (self.CavalryLogger) {
    CavalryLogger.start_js(["UjRS7"]);
}

__d("UFI2CometRelayCreateFragmentContainer", ["relay-runtime", "requireCond", "cr:936168"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        createFragmentContainer: b("cr:936168").createFragmentContainer,
        graphql: b("relay-runtime").graphql
    };
    e.exports = a
}
), null);
__d("OnVisible.react", ["FBLogger", "React", "ReactDOM", "intersectionObserverEntryIsIntersecting", "observeIntersection"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.$1 = null,
            c.$2 = !1,
            c.$3 = null,
            c.state = {
                visible: !1
            },
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            this.$2 = !0,
            this.$4()
        }
        ;
        d.componentDidUpdate = function(a) {
            this.$4(a)
        }
        ;
        d.componentWillUnmount = function() {
            this.$2 = !1,
            this.$5()
        }
        ;
        d.$4 = function(a) {
            var c = this, d;
            try {
                d = b("ReactDOM").findDOMNode(this)
            } catch (a) {
                return
            }
            this.$3 && (!a || a.buffer !== this.props.buffer || d !== this.$1) && this.$5();
            if (!this.$3) {
                if (!(d instanceof Element)) {
                    this.$1 = null;
                    return
                }
                this.$1 = d;
                this.$3 = b("observeIntersection")(d, function(a) {
                    a = b("intersectionObserverEntryIsIntersecting")(a);
                    var d = a ? c.props.onVisible : c.props.onHidden;
                    c.setState({
                        visible: a
                    });
                    d && d()
                }, {
                    rootMargin: this.props.buffer != null ? this.props.buffer + "px" : "0px"
                })
            }
        }
        ;
        d.$5 = function() {
            this.$3 && (this.$3.remove(),
            this.$3 = null)
        }
        ;
        d.check = function() {
            b("FBLogger")("onvisible").mustfix("Deprecated method `check()` was called. Remove the call immediately.")
        }
        ;
        d.reset = function() {
            if (this.$2 === !1)
                return;
            this.$5();
            this.$4()
        }
        ;
        d.render = function() {
            var a = this.props.children;
            a = typeof a === "function" ? a(this.state.visible) : a;
            return g.Children.only(a)
        }
        ;
        return c
    }(g.Component);
    e.exports = a
}
), null);
