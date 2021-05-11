if (self.CavalryLogger) {
    CavalryLogger.start_js(["Tu2W4"]);
}

__d("XCometLiveProducerControllerRouteBuilder", ["jsRouteBuilder"], (function(a, b, c, d, e, f) {
    a = b("jsRouteBuilder")("/live/producer/{?videoID}/", Object.freeze({
        is_rehearsal: !1
    }), void 0);
    c = a;
    e.exports = c
}
), null);
__d("ReactCSSTransitionGroupChild", ["React", "ReactDOM", "ReactTransitionEvents", "createReactClass_DEPRECATED", "fbjs/lib/CSSCore", "prop-types"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = 17;
    c = b("createReactClass_DEPRECATED")({
        displayName: "ReactCSSTransitionGroupChild",
        propTypes: {
            name: (a = b("prop-types")).oneOfType([a.string, a.shape({
                enter: a.string,
                leave: a.string,
                active: a.string
            }), a.shape({
                enter: a.string,
                enterActive: a.string,
                leave: a.string,
                leaveActive: a.string,
                appear: a.string,
                appearActive: a.string
            })]).isRequired,
            appear: a.bool,
            enter: a.bool,
            leave: a.bool,
            appearTimeout: a.number,
            enterTimeout: a.number,
            leaveTimeout: a.number
        },
        transition: function(a, c, d) {
            var e = b("ReactDOM").findDOMNode(this);
            if (!e) {
                c && c();
                return
            }
            var f = this.props.name[a] || this.props.name + "-" + a
              , g = this.props.name[a + "Active"] || f + "-active"
              , h = null;
            a = function a(d) {
                if (d && d.target !== e)
                    return;
                clearTimeout(h);
                b("fbjs/lib/CSSCore").removeClass(e, f);
                b("fbjs/lib/CSSCore").removeClass(e, g);
                b("ReactTransitionEvents").removeEndEventListener(e, a);
                c && c()
            }
            ;
            b("fbjs/lib/CSSCore").addClass(e, f);
            this.queueClassAndNode(g, e);
            d ? (h = setTimeout(a, d),
            this.transitionTimeouts.push(h)) : b("ReactTransitionEvents").addEndEventListener(e, a)
        },
        queueClassAndNode: function(a, b) {
            this.classNameAndNodeQueue.push({
                className: a,
                node: b
            }),
            this.timeout || (this.timeout = setTimeout(this.flushClassNameAndNodeQueue, h))
        },
        flushClassNameAndNodeQueue: function() {
            this.isMounted() && this.classNameAndNodeQueue.forEach(function(a) {
                b("fbjs/lib/CSSCore").addClass(a.node, a.className)
            }),
            this.classNameAndNodeQueue.length = 0,
            this.timeout = null
        },
        UNSAFE_componentWillMount: function() {
            this.classNameAndNodeQueue = [],
            this.transitionTimeouts = []
        },
        componentWillUnmount: function() {
            this.timeout && clearTimeout(this.timeout),
            this.transitionTimeouts.forEach(function(a) {
                clearTimeout(a)
            }),
            this.classNameAndNodeQueue.length = 0
        },
        componentWillAppear: function(a) {
            this.props.appear ? this.transition("appear", a, this.props.appearTimeout) : a()
        },
        componentWillEnter: function(a) {
            this.props.enter ? this.transition("enter", a, this.props.enterTimeout) : a()
        },
        componentWillLeave: function(a) {
            this.props.leave ? this.transition("leave", a, this.props.leaveTimeout) : a()
        },
        render: function() {
            return g.Children.only(this.props.children)
        }
    });
    e.exports = c
}
), null);
__d("ReactTransitionChildMapping", ["React", "emptyFunction", "warning"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = b("emptyFunction");
    c = {
        getChildMapping: function(a) {
            if (!a)
                return a;
            var b = {};
            g.Children.toArray(a).forEach(function(a) {
                var c = a.key
                  , d = b[c] === void 0;
                d && (b[c] = a)
            });
            return b
        },
        mergeChildMappings: function(a, b) {
            a = a || {};
            b = b || {};
            function c(c) {
                if (Object.prototype.hasOwnProperty.call(b, c))
                    return b[c];
                else
                    return a[c]
            }
            var d = {}
              , e = [];
            for (var f in a)
                Object.prototype.hasOwnProperty.call(b, f) ? e.length && (d[f] = e,
                e = []) : e.push(f);
            var g, h = {};
            for (var i in b) {
                if (Object.prototype.hasOwnProperty.call(d, i))
                    for (g = 0; g < d[i].length; g++) {
                        var j = d[i][g];
                        h[d[i][g]] = c(j)
                    }
                h[i] = c(i)
            }
            for (g = 0; g < e.length; g++)
                h[e[g]] = c(e[g]);
            return h
        }
    };
    e.exports = c
}
), null);
__d("ReactTransitionGroup", ["React", "ReactTransitionChildMapping", "fbjs/lib/emptyFunction", "prop-types"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.currentlyTransitioningKeys = {},
            d.keysToEnter = [],
            d.keysToLeave = [],
            d.state = {
                children: b("ReactTransitionChildMapping").getChildMapping(d.props.children)
            },
            d.performEnter = function(a) {
                d.currentlyTransitioningKeys[a] = !0;
                var b = d.refs[a];
                b.componentWillEnter ? b.componentWillEnter(d.$2.bind(babelHelpers.assertThisInitialized(d), a)) : d.$2(a)
            }
            ,
            d.performLeave = function(a) {
                d.currentlyTransitioningKeys[a] = !0;
                var b = d.refs[a];
                b.componentWillLeave ? b.componentWillLeave(d.$3.bind(babelHelpers.assertThisInitialized(d), a)) : d.$3(a)
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.UNSAFE_componentWillMount = function() {
            this.currentlyTransitioningKeys = {},
            this.keysToEnter = [],
            this.keysToLeave = []
        }
        ;
        d.componentDidMount = function() {
            var a = this.state.children;
            for (var b in a)
                a[b] && this.performAppear(b)
        }
        ;
        d.UNSAFE_componentWillReceiveProps = function(a) {
            a = b("ReactTransitionChildMapping").getChildMapping(a.children);
            var c = this.state.children;
            this.setState({
                children: b("ReactTransitionChildMapping").mergeChildMappings(c, a)
            });
            var d;
            for (d in a) {
                var e = c && Object.prototype.hasOwnProperty.call(c, d);
                a[d] && !e && !this.currentlyTransitioningKeys[d] && this.keysToEnter.push(d)
            }
            for (d in c) {
                e = a && Object.prototype.hasOwnProperty.call(a, d);
                c[d] && !e && !this.currentlyTransitioningKeys[d] && this.keysToLeave.push(d)
            }
        }
        ;
        d.componentDidUpdate = function() {
            var a = this.keysToEnter;
            this.keysToEnter = [];
            a.forEach(this.performEnter);
            a = this.keysToLeave;
            this.keysToLeave = [];
            a.forEach(this.performLeave)
        }
        ;
        d.performAppear = function(a) {
            this.currentlyTransitioningKeys[a] = !0;
            var b = this.refs[a];
            b.componentWillAppear ? b.componentWillAppear(this.$1.bind(this, a)) : this.$1(a)
        }
        ;
        d.$1 = function(a) {
            var c = this.refs[a];
            c.componentDidAppear && c.componentDidAppear();
            delete this.currentlyTransitioningKeys[a];
            c = b("ReactTransitionChildMapping").getChildMapping(this.props.children);
            (!c || !Object.prototype.hasOwnProperty.call(c, a)) && this.performLeave(a)
        }
        ;
        d.$2 = function(a) {
            var c = this.refs[a];
            c.componentDidEnter && c.componentDidEnter();
            delete this.currentlyTransitioningKeys[a];
            c = b("ReactTransitionChildMapping").getChildMapping(this.props.children);
            (!c || !Object.prototype.hasOwnProperty.call(c, a)) && this.performLeave(a)
        }
        ;
        d.$3 = function(a) {
            var c = this.refs[a];
            c.componentDidLeave && c.componentDidLeave();
            delete this.currentlyTransitioningKeys[a];
            c = b("ReactTransitionChildMapping").getChildMapping(this.props.children);
            c && Object.prototype.hasOwnProperty.call(c, a) ? this.performEnter(a) : this.setState(function(b) {
                b = Object.assign({}, b.children);
                delete b[a];
                return {
                    children: b
                }
            })
        }
        ;
        d.render = function() {
            var a = [];
            for (var b in this.state.children) {
                var c = this.state.children[b];
                c && a.push(g.cloneElement(this.props.childFactory(c), {
                    ref: b,
                    key: b
                }))
            }
            c = Object.assign({}, this.props);
            delete c.transitionLeave;
            delete c.transitionName;
            delete c.transitionAppear;
            delete c.transitionEnter;
            delete c.childFactory;
            delete c.transitionLeaveTimeout;
            delete c.transitionEnterTimeout;
            delete c.transitionAppearTimeout;
            delete c.component;
            return g.createElement(this.props.component, c, a)
        }
        ;
        return c
    }(g.Component);
    a.displayName = "ReactTransitionGroup";
    a.propTypes = {
        component: b("prop-types").any,
        childFactory: b("prop-types").func
    };
    a.defaultProps = {
        children: null,
        component: "span",
        childFactory: b("fbjs/lib/emptyFunction").thatReturnsArgument
    };
    e.exports = a
}
), null);
__d("ReactCSSTransitionGroup", ["React", "ReactCSSTransitionGroupChild", "ReactTransitionGroup", "prop-types"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a) {
        var b = "transition" + a + "Timeout"
          , c = "transition" + a;
        return function(a) {
            if (a[c])
                if (a[b] == null)
                    return new Error(b + " wasn't supplied to ReactCSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");
                else if (typeof a[b] !== "number")
                    return new Error(b + " must be a number (in milliseconds)")
        }
    }
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), h = 0; h < e; h++)
                f[h] = arguments[h];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$1 = function(a) {
                return g.createElement(b("ReactCSSTransitionGroupChild"), {
                    name: d.props.transitionName,
                    appear: d.props.transitionAppear,
                    enter: d.props.transitionEnter,
                    leave: d.props.transitionLeave,
                    appearTimeout: d.props.transitionAppearTimeout,
                    enterTimeout: d.props.transitionEnterTimeout,
                    leaveTimeout: d.props.transitionLeaveTimeout
                }, a)
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.render = function() {
            return g.createElement(b("ReactTransitionGroup"), Object.assign({}, this.props, {
                childFactory: this.$1
            }))
        }
        ;
        return c
    }(g.Component);
    c.displayName = "ReactCSSTransitionGroup";
    c.propTypes = {
        transitionName: b("ReactCSSTransitionGroupChild").propTypes.name,
        transitionAppear: b("prop-types").bool,
        transitionEnter: b("prop-types").bool,
        transitionLeave: b("prop-types").bool,
        transitionAppearTimeout: a("Appear"),
        transitionEnterTimeout: a("Enter"),
        transitionLeaveTimeout: a("Leave")
    };
    c.defaultProps = {
        transitionAppear: !1,
        transitionEnter: !0,
        transitionLeave: !0
    };
    e.exports = c
}
), null);
