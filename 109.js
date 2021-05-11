if (self.CavalryLogger) {
    CavalryLogger.start_js(["ozslF"]);
}

__d("EncryptedImg", ["EncryptedImgUtils", "URI", "XHRRequest", "getCrossOriginTransport"], (function(a, b, c, d, e, f) {
    var g, h = babelHelpers["extends"]({
        insertIntoStyleBackgroundImage: function(a, b) {
            b = function(a, b) {
                a && (a.style.backgroundImage = "url('" + b + "')")
            }
            .bind(void 0, b);
            h.load(a, b)
        },
        insertIntoDOM: function(a, b) {
            b = function(a, b) {
                a && a.setAttribute("src", b)
            }
            .bind(void 0, b);
            h.load(a, b)
        },
        load: function(a, c, d) {
            d === void 0 && (d = !0);
            a = new (g || (g = b("URI")))(a);
            var e = b("EncryptedImgUtils").extractKey(a);
            e = i.bind(void 0, e, c, d);
            e.includeHeaders = !0;
            new (b("XHRRequest"))(a.toString()).setTransportBuilder(b("getCrossOriginTransport")).setMethod("GET").setResponseType("arraybuffer").setResponseHandler(e).send()
        },
        dataUrlPrefix: function(a, b) {
            b === void 0 && (b = 32);
            if (!a.startsWith("data:"))
                return a;
            var c = a.indexOf(",");
            (c < 0 || c > b) && (c = b);
            return a.slice(0, c)
        }
    }, b("EncryptedImgUtils"));
    a = h;
    e.exports = a;
    function i(a, b, c, d, e) {
        if (!a) {
            b(l(d, k(e)));
            return
        }
        a = j(a);
        var f = new Uint8Array(d);
        d = f.subarray(2, 14);
        f = f.subarray(14, f.length);
        var g = {
            name: "AES-GCM",
            iv: d,
            tagLength: 128
        };
        window.crypto.subtle.importKey("raw", a, g, !1, ["encrypt", "decrypt"]).then(function(a) {
            return window.crypto.subtle.decrypt(g, a, f)
        }).then(function(a) {
            c ? b(l(a, k(e))) : b(a)
        })["catch"](function() {})
    }
    function j(a) {
        if (typeof a === "string") {
            var b = new Uint8Array(Math.floor(a.length / 2))
              , c = 0;
            a.replace(/(..)/g, function(a) {
                b[c++] = parseInt(a, 16)
            });
            return b
        }
        return null
    }
    function k(a) {
        var b = "image/jpeg";
        a = a.toLowerCase().match(/content-type:\s?([\w\/]*)\s/);
        a && a.length > 1 && (b = a[1]);
        return b
    }
    function l(a, b) {
        a = new Uint8Array(a);
        var c = "";
        for (var d = 0, e = a.byteLength; d < e; ++d)
            c += String.fromCharCode(a[d]);
        return "data:" + b + ";base64," + window.btoa(c)
    }
}
), null);
__d("cssURL", [], (function(a, b, c, d, e, f) {
    e.exports = a;
    function a(a) {
        return "url('" + a.replace(/[\ud800-\udfff].|[^-a-zA-Z0-9./_?]/g, function(a) {
            return "\\" + a.codePointAt(0).toString(16) + " "
        }) + "')"
    }
}
), null);
__d("CssBackgroundImage.react", ["EncryptedImg", "React", "createCancelableFunction", "cssURL"], (function(a, b, c, d, e, f) {
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.state = {
                image: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
            },
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.$2 = function(a) {
            var c = this;
            this.$1 && this.$1.cancel();
            this.$1 = b("createCancelableFunction")(function(b) {
                a === c.props.imageURI && c.setState({
                    image: b
                })
            });
            b("EncryptedImg").load(a, this.$1)
        }
        ;
        c.getDerivedStateFromProps = function(a) {
            a = a.imageURI;
            return a != null && !b("EncryptedImg").isEncrypted(a) ? {
                image: a
            } : null
        }
        ;
        d.componentDidMount = function() {
            var a = this.props.imageURI;
            a != null && b("EncryptedImg").isEncrypted(a) && this.$2(a)
        }
        ;
        d.componentDidUpdate = function(a) {
            var c = this.props.imageURI;
            c !== a.imageURI && c != null && b("EncryptedImg").isEncrypted(c) && this.$2(c)
        }
        ;
        d.componentWillUnmount = function() {
            this.$1 && this.$1.cancel()
        }
        ;
        d.render = function() {
            var a = this.props;
            a.imageURI;
            var c = a.backgroundPosition
              , d = a.height
              , e = a.width
              , f = a.style;
            a = babelHelpers.objectWithoutPropertiesLoose(a, ["imageURI", "backgroundPosition", "height", "width", "style"]);
            return g.jsx("div", babelHelpers["extends"]({
                style: babelHelpers["extends"]({}, f, {
                    backgroundImage: b("cssURL")(this.state.image),
                    backgroundPosition: c || f.backgroundPosition,
                    height: d || f.height,
                    width: e || f.width
                })
            }, a))
        }
        ;
        return c
    }(g.Component);
    e.exports = a;
    a.defaultProps = {
        backgroundPosition: "0% 0%",
        style: {}
    }
}
), null);
__d("fbjs/lib/CSSCore", ["CSSCore"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("CSSCore")
}
), null);
__d("VideoThumbnailSlideShow.react", ["cx", "CssBackgroundImage.react", "Image.react", "React", "ReactCSSTransitionGroup"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(b) {
            var c;
            c = a.call(this, b) || this;
            c.state = {
                curIndex: 0
            };
            c.$2 = [];
            c.props.imageSources.forEach(function(a) {
                var b = new Image();
                b.src = a;
                c.$2.push(b)
            });
            return c
        }
        var d = c.prototype;
        d.UNSAFE_componentWillReceiveProps = function(a) {
            this.props.started && !a.started ? this.$3() : !this.props.started && a.started && this.$4()
        }
        ;
        d.componentDidMount = function() {
            this.props.started && this.$4()
        }
        ;
        d.componentWillUnmount = function() {
            this.$3()
        }
        ;
        d.render = function() {
            var a = this.props.imageSources;
            if (a.length < 1)
                return null;
            a = {
                enter: "_3txw",
                enterActive: "_3txx",
                leave: "_3txz",
                leaveActive: "_3tx-"
            };
            var c = this.props.showPlayButtonOnHover && this.props.started ? h.jsx(b("Image.react"), {
                src: "/images/video/play_48dp.png",
                className: "_3ty2"
            }) : null
              , d = this.props.started ? h.jsx("div", {
                className: "_3ty4",
                style: {
                    width: this.props.width,
                    height: this.props.height
                }
            }) : null;
            return h.jsxs("div", {
                className: "_3ty3",
                style: {
                    width: this.props.width,
                    height: this.props.height
                },
                children: [d, h.jsx(b("ReactCSSTransitionGroup"), {
                    transitionName: a,
                    transitionEnterTimeout: 200,
                    transitionLeaveTimeout: 200,
                    children: h.jsx(b("CssBackgroundImage.react"), {
                        imageURI: this.props.imageSources[this.state.curIndex],
                        width: this.props.width,
                        height: this.props.height,
                        className: "_3ty5"
                    }, this.state.curIndex)
                }), c]
            })
        }
        ;
        d.$3 = function() {
            var a = this.$1;
            a && (this.setState({
                curIndex: 0
            }),
            clearInterval(a),
            this.$1 = null)
        }
        ;
        d.$4 = function() {
            var a = this;
            this.$5();
            this.$1 || (this.$1 = setInterval(function() {
                a.props.started && a.$5()
            }, this.props.slideShowInterval))
        }
        ;
        d.$5 = function() {
            var a = (this.state.curIndex + 1) % this.props.imageSources.length;
            this.setState({
                curIndex: a
            })
        }
        ;
        return c
    }(h.Component);
    e.exports = a;
    a.defaultProps = {
        showPlayButtonOnHover: !0
    }
}
), null);
__d("VideoThumbnailSlideShowShowOnHoverContainer.react", ["cx", "CssBackgroundImage.react", "Image.react", "React", "VideoThumbnailSlideShow.react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(b) {
            var c;
            c = a.call(this, b) || this;
            c.$1 = function() {
                c.setState({
                    isBeingHovered: !0
                }),
                c.state.hasBeenHovered || c.setState({
                    hasBeenHovered: !0
                })
            }
            ;
            c.state = {
                isBeingHovered: !1,
                hasBeenHovered: !1
            };
            return c
        }
        var d = c.prototype;
        d.render = function() {
            var a = this
              , c = this.props.imageSources;
            return c.length < 1 ? null : h.jsxs("div", {
                onMouseEnter: this.$1,
                onMouseLeave: function() {
                    return a.setState({
                        isBeingHovered: !1
                    })
                },
                children: [h.jsx(b("CssBackgroundImage.react"), babelHelpers["extends"]({}, this.props, {
                    className: "_2pqe",
                    imageURI: c[0]
                })), this.state.hasBeenHovered ? h.jsxs("div", {
                    children: [h.jsx("div", {
                        className: "_8zm4" + (this.state.isBeingHovered ? "" : " hidden_elem"),
                        children: h.jsx(b("Image.react"), {
                            src: "/images/video/play_48dp.png",
                            width: 48
                        })
                    }), h.jsx(b("VideoThumbnailSlideShow.react"), babelHelpers["extends"]({}, this.props, {
                        imageSources: c,
                        started: this.state.isBeingHovered
                    }))]
                }) : null]
            })
        }
        ;
        return c
    }(h.Component);
    e.exports = a
}
), null);
__d("Video.react", ["React", "ReactDOM", "prop-types"], (function(a, b, c, d, e, f) {
    var g = b("React");
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            var a = b("ReactDOM").findDOMNode(this.refs.video);
            this.props.paused && a && a.pause && a.pause()
        }
        ;
        d.UNSAFE_componentWillUpdate = function(a, c) {
            c = b("ReactDOM").findDOMNode(this.refs.video);
            a.playbackRate && (c.playbackRate = a.playbackRate);
            a.paused != this.props.paused && c && (a.paused && c.pause ? c.pause() : c.play && c.play())
        }
        ;
        d.render = function() {
            return g.jsx("video", babelHelpers["extends"]({}, this.props, {
                ref: "video"
            }))
        }
        ;
        return c
    }(g.Component);
    a.propTypes = {
        autoPlay: (c = b("prop-types")).bool,
        paused: c.bool,
        controls: c.bool,
        height: c.oneOfType([c.string, c.number]),
        loop: c.bool,
        muted: c.bool,
        onAbort: c.func,
        onCanPlay: c.func,
        onCanPlayThrough: c.func,
        onDurationChange: c.func,
        onEmptied: c.func,
        onEncrypted: c.func,
        onEnded: c.func,
        onError: c.func,
        onLoadedData: c.func,
        onLoadedMetadata: c.func,
        onLoadStart: c.func,
        onPause: c.func,
        onPlay: c.func,
        onPlaying: c.func,
        onProgress: c.func,
        onRateChange: c.func,
        onSeeked: c.func,
        onSeeking: c.func,
        onStalled: c.func,
        onSuspend: c.func,
        onTimeUpdate: c.func,
        onVolumeChange: c.func,
        onWaiting: c.func,
        playbackRate: c.number,
        poster: c.string,
        src: c.string.isRequired,
        width: c.oneOfType([c.string, c.number])
    };
    e.exports = a
}
), null);
__d("XUIVideoLinkThumbnailWithSmartPreview.react", ["cx", "CssBackgroundImage.react", "Image.react", "React", "Video.react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.state = {
                isBeingHovered: !1,
                hasBeenHovered: !1
            },
            c.$1 = function() {
                c.setState({
                    isBeingHovered: !0
                }),
                c.state.hasBeenHovered || c.setState({
                    hasBeenHovered: !0
                })
            }
            ,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.render = function() {
            var a = this;
            return h.jsxs("div", {
                onMouseEnter: this.$1,
                onMouseLeave: function() {
                    return a.setState({
                        isBeingHovered: !1
                    })
                },
                children: [h.jsx(b("CssBackgroundImage.react"), babelHelpers["extends"]({}, this.props, {
                    className: "_2pqe",
                    imageURI: this.props.mainThumbURI
                })), this.state.isBeingHovered ? this.$2() : null]
            })
        }
        ;
        d.$2 = function() {
            if (!this.state.hasBeenHovered)
                return null;
            var a = this.state.isBeingHovered;
            return h.jsxs("div", {
                className: "_391r" + (a ? "" : " hidden_elem"),
                children: [h.jsx("div", {
                    className: "_8zmp" + (a ? "" : " hidden_elem"),
                    children: h.jsx(b("Image.react"), {
                        src: "/images/video/play_48dp.png",
                        width: 48
                    })
                }), h.jsx(b("Video.react"), babelHelpers["extends"]({}, this.props, {
                    src: this.props.videoSrc,
                    loop: !0,
                    muted: !0,
                    autoPlay: a
                }))]
            })
        }
        ;
        return c
    }(h.Component);
    e.exports = a
}
), null);
