if (self.CavalryLogger) {
    CavalryLogger.start_js(["2\/Tqy"]);
}

__d("AdsVideoStatusSubscription.graphql", [], (function(a, b, c, d, e, f) {
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
            concreteType: "AdsVideoStatusSubscribeResponsePayload",
            kind: "LinkedField",
            name: "ads_video_status_subscribe",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "status",
                storageKey: null
            }],
            storageKey: null
        }];
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "AdsVideoStatusSubscription",
                selections: b,
                type: "Subscription",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "AdsVideoStatusSubscription",
                selections: b
            },
            params: {
                id: "2137331866335279",
                metadata: {
                    subscriptionName: "ads_video_status_subscribe"
                },
                name: "AdsVideoStatusSubscription",
                operationKind: "subscription",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("AdsVideoEncodingFormat", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
        NONSPHERICAL: "non-spherical",
        SPHERICAL: "spherical"
    });
    b = a;
    e.exports = b
}
), null);
__d("AdsVideoUploadEvents", ["keyMirror"], (function(a, b, c, d, e, f) {
    a = b("keyMirror")({
        UPLOAD_SUCCESS: null,
        UPLOAD_ERROR: null,
        UPLOAD_PROGRESS: null,
        ENCODING_SUCCESS: null,
        ENCODING_ERROR: null
    });
    c = a;
    e.exports = c
}
), null);
__d("SUIAtlasConstants", ["cssVar", "SUITypeStyle"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        black: "#000",
        blackOpacity40: "rgba(0, 0, 0, .4)",
        neutral80: "#394E5D",
        neutral72: "#466072",
        neutral50: "#788F9F",
        neutral30: "#A0B0BB",
        neutral15: "#D0DAE0",
        neutral06: "#EEEEEE",
        neutral03: "#F6F6F6",
        neutral02: "#F9F9F9",
        white: "#fff",
        green: "#4EC099",
        greenTint85: "#E4F5EF",
        greenTint50: "#A6DFCC",
        greenShade10: "#46AC89",
        greenShade25: "#3A8F72",
        greenStatus: "#9FD356",
        blue: "#27A9E1",
        blueLight: "#E6F2FF",
        blueTint85: "#DEF2FA",
        blueTint50: "#93D4F0",
        blueShade10: "#2397CA",
        blueShade25: "#1D7EA8",
        red: "#F55D5D",
        redTint85: "#FDE6E6",
        redTint50: "#FAAEAE",
        redShade10: "#DC5353",
        redShade25: "#B74545",
        yellow: "#FFA933",
        yellowTint85: "#FFF2E0",
        yellowTint50: "#FFD499",
        yellowShade10: "#E5972D",
        yellowShade25: "#BF7E26"
    };
    f.COLORS = a;
    d = {
        type40: new (c = b("SUITypeStyle"))({
            color: "#466072",
            fontFamily: "Freight Sans Bold, Helvetica, Arial, Lucida Grande, sans-serif",
            fontSize: "40px",
            textRendering: "optimizelegibility"
        }),
        type32: new c({
            color: "#788F9F",
            fontFamily: "Freight Sans Bold, Helvetica, Arial, Lucida Grande, sans-serif",
            fontSize: "32px",
            textRendering: "optimizelegibility"
        }),
        type32Value: new c({
            color: "#466072",
            fontFamily: "Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif",
            fontSize: "32px",
            fontWeight: "200"
        }),
        type24: new c({
            color: "#788F9F",
            fontFamily: "Freight Sans Bold, Helvetica, Arial, Lucida Grande, sans-serif",
            fontSize: "24px",
            textRendering: "optimizelegibility"
        }),
        type24Bold: new c({
            color: "#466072",
            fontFamily: "Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif",
            fontSize: "24px",
            fontWeight: "bold"
        }),
        type24Value: new c({
            color: "#466072",
            fontFamily: "Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif",
            fontSize: "24px",
            fontWeight: "200"
        }),
        type16: new c({
            color: "#466072",
            fontFamily: "Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif",
            fontSize: "16px"
        }),
        type12: new c({
            color: "#466072",
            fontFamily: "Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif",
            fontSize: "12px"
        }),
        type12Bold: new c({
            color: "#466072",
            fontFamily: "Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif",
            fontSize: "12px",
            fontWeight: "bold"
        }),
        type12Form: new c({
            color: "#000",
            fontFamily: "Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif",
            fontSize: "12px"
        }),
        type12Toast: new c({
            color: "#fff",
            fontFamily: "Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif",
            fontSize: "12px",
            fontWeight: "normal"
        }),
        type11: new c({
            color: "#466072",
            fontFamily: "Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif",
            fontSize: "11px"
        }),
        type11Bold: new c({
            color: "#466072",
            fontFamily: "Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif",
            fontSize: "11px",
            fontWeight: "700"
        })
    };
    f.TYPOGRAPHY = d
}
), null);
__d("SUIAtlasTheme", ["ix", "cssVar", "cx", "Image.react", "React", "SUIActionMenuUniform.business", "SUIAtlasConstants", "SUIAtlasIcon.react", "SUIDropdownMenuUniform.business", "SUITheme", "SUITypeStyle", "asset"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = b("React");
    a = function(a) {
        return j.jsx(b("SUIAtlasIcon.react"), babelHelpers["extends"]({}, a, {
            colorDefault: b("SUIAtlasConstants").COLORS.neutral50,
            colorDisabled: b("SUIAtlasConstants").COLORS.neutral15,
            colorHover: b("SUIAtlasConstants").COLORS.neutral72,
            name: "delete"
        }))
    }
    ;
    c = function(a) {
        return j.jsx(b("SUIAtlasIcon.react"), babelHelpers["extends"]({}, a, {
            colorDefault: b("SUIAtlasConstants").COLORS.neutral15,
            colorDisabled: b("SUIAtlasConstants").COLORS.neutral30,
            colorHover: b("SUIAtlasConstants").COLORS.neutral06,
            name: "delete"
        }))
    }
    ;
    d = function(a) {
        a = (a == null ? void 0 : a.name) === "chevronRight" ? g("492572") : g("492470");
        return j.jsx(b("Image.react"), {
            className: "_3-8z",
            src: a
        })
    }
    ;
    i = {
        SUIButton: {
            height: {
                normal: 32,
                "short": 32,
                tall: 48
            },
            padding: {
                normal: {
                    button: "16px",
                    icon: "6px",
                    onlyIcon: "19px"
                },
                "short": {
                    button: "16px",
                    icon: "6px",
                    onlyIcon: "19px"
                },
                tall: {
                    button: "16px",
                    icon: "6px",
                    onlyIcon: "19px"
                }
            },
            typeStyle: (f = b("SUIAtlasConstants")).TYPOGRAPHY.type12,
            use: {
                confirm: {
                    active: {
                        background: f.COLORS.blueShade25,
                        borderColor: f.COLORS.blueShade25,
                        color: f.COLORS.white
                    },
                    disabled: {
                        background: f.COLORS.neutral15,
                        borderColor: f.COLORS.neutral15,
                        color: f.COLORS.white
                    },
                    hover: {
                        background: f.COLORS.blueShade10,
                        borderColor: f.COLORS.blueShade10,
                        color: f.COLORS.white
                    },
                    normal: {
                        background: f.COLORS.blue,
                        borderColor: f.COLORS.blue,
                        color: f.COLORS.white
                    }
                },
                "default": {
                    active: {
                        background: f.COLORS.neutral06,
                        borderColor: f.COLORS.neutral15,
                        color: f.COLORS.neutral72
                    },
                    disabled: {
                        background: f.COLORS.neutral15,
                        borderColor: f.COLORS.neutral15,
                        color: f.COLORS.white
                    },
                    hover: {
                        background: f.COLORS.neutral03,
                        borderColor: f.COLORS.neutral15,
                        color: f.COLORS.neutral72
                    },
                    normal: {
                        background: f.COLORS.white,
                        borderColor: f.COLORS.neutral15,
                        color: f.COLORS.neutral72
                    }
                },
                special: {
                    active: {
                        background: f.COLORS.greenShade25,
                        borderColor: f.COLORS.greenShade25,
                        color: f.COLORS.white
                    },
                    disabled: {
                        background: f.COLORS.neutral15,
                        borderColor: f.COLORS.neutral15,
                        color: f.COLORS.white
                    },
                    hover: {
                        background: f.COLORS.greenShade10,
                        borderColor: f.COLORS.greenShade10,
                        color: f.COLORS.white
                    },
                    normal: {
                        background: f.COLORS.green,
                        borderColor: f.COLORS.green,
                        color: f.COLORS.white
                    }
                },
                flat: {
                    active: {
                        background: "transparent",
                        borderColor: "transparent",
                        color: f.COLORS.neutral72
                    },
                    disabled: {
                        background: "transparent",
                        borderColor: "transparent",
                        color: f.COLORS.neutral15
                    },
                    hover: {
                        background: "transparent",
                        borderColor: "transparent",
                        color: f.COLORS.neutral72
                    },
                    normal: {
                        background: "transparent",
                        borderColor: "transparent",
                        color: f.COLORS.neutral72
                    }
                },
                flatWhite: {
                    active: {
                        background: "transparent",
                        borderColor: "transparent",
                        color: f.COLORS.white
                    },
                    disabled: {
                        background: "transparent",
                        borderColor: "transparent",
                        color: "rgba(255, 255, 255, 0.3)"
                    },
                    hover: {
                        background: "transparent",
                        borderColor: "transparent",
                        color: f.COLORS.white
                    },
                    normal: {
                        background: "transparent",
                        borderColor: "transparent",
                        color: f.COLORS.white
                    }
                }
            }
        },
        SUIButtonIcon: {
            colorConfirm: f.COLORS.blueTint50,
            colorDefault: f.COLORS.neutral50,
            colorDisabled: f.COLORS.white,
            colorSpecial: f.COLORS.greenTint50,
            defaultSize: 18,
            iconComponent: h = b("SUIAtlasIcon.react")
        },
        SUICardDEPRECATED: {
            colors: {
                background: f.COLORS.white,
                border: f.COLORS.neutral06,
                footerBackground: f.COLORS.neutral02,
                innerBorder: f.COLORS.neutral15
            },
            typeStyles: {
                content: f.TYPOGRAPHY.type12,
                footer: f.TYPOGRAPHY.type12,
                header: f.TYPOGRAPHY.type24
            }
        },
        SUICard: {
            backgroundColor: f.COLORS.white,
            borderColor: f.COLORS.neutral06,
            borderRadius: "4px",
            borderWidth: 1,
            boxShadow: "0px 1px 0px 0px rgba(0, 0, 0, 0.10)",
            body: {
                paddingBottom: 24,
                paddingLeft: 24,
                paddingRight: 24,
                paddingTop: 24,
                typeStyle: f.TYPOGRAPHY.type12
            },
            header: {
                borderBottomColor: f.COLORS.neutral15,
                borderBottomWidth: 1,
                marginLeft: 24,
                marginRight: 24,
                paddingBottom: 16,
                paddingTop: 16
            },
            headerFullBleed: {
                borderBottomColor: f.COLORS.neutral15,
                borderBottomWidth: 1,
                paddingBottom: 16,
                paddingLeft: 24,
                paddingRight: 24,
                paddingTop: 16
            },
            footer: {
                backgroundColor: f.COLORS.neutral02,
                borderTopColor: f.COLORS.neutral15,
                borderTopWidth: 1,
                paddingBottom: 8,
                paddingLeft: 24,
                paddingRight: 24,
                paddingTop: 8,
                typeStyle: f.TYPOGRAPHY.type12
            },
            status: {
                backgroundColor: f.COLORS.neutral02,
                borderTopColor: f.COLORS.neutral15,
                borderTopWidth: 1,
                paddingBottom: 8,
                paddingLeft: 24,
                paddingRight: 24,
                paddingTop: 8,
                typeStyle: f.TYPOGRAPHY.type12
            },
            title: {
                typeStyle: f.TYPOGRAPHY.type24
            }
        },
        SUIThreeStateCheckboxInput: {
            activeCheckboxBackgroundColor: f.COLORS.white,
            activeCheckboxBorderColor: f.COLORS.blueTint50,
            checkboxBackgroundColor: f.COLORS.white,
            checkboxBorderColor: f.COLORS.neutral15,
            checkedIcon: j.jsx(h, {
                colorDefault: f.COLORS.neutral72,
                name: "check",
                size: 14
            }),
            disabledCheckboxBackgroundColor: f.COLORS.neutral15,
            disabledLabelColor: f.COLORS.neutral30,
            labelColor: f.COLORS.neutral72,
            partiallyCheckedIcon: j.jsx(h, {
                colorDefault: f.COLORS.neutral72,
                name: "dash",
                size: 14
            }),
            typeStyle: f.TYPOGRAPHY.type12
        },
        SUICloseButton: {
            dark: {
                large: a,
                small: a
            },
            light: {
                large: c,
                small: c
            },
            iconSize: {
                large: 18,
                small: 14
            }
        },
        SUICustomPopover_DEPRECATED: {
            backgroundColor: f.COLORS.white,
            borderColor: f.COLORS.neutral15,
            borderHighlightColor: f.COLORS.green,
            color: f.COLORS.neutral72
        },
        SUITooltip: {
            backgroundColor: f.COLORS.black,
            color: f.COLORS.white,
            showArrow: !0,
            typeStyle: babelHelpers["extends"]({}, f.TYPOGRAPHY.type12, {
                WebkitFontSmoothing: "auto"
            })
        },
        SUIDateInput: {
            inputIcon: j.jsx(h, {
                colorDefault: f.COLORS.neutral30,
                name: "calendarMonth",
                size: 24
            }),
            layerBackgroundColor: f.COLORS.white,
            layerBorderColor: f.COLORS.neutral15
        },
        SUICalendarPager: {
            dayColor: f.COLORS.neutral72,
            dayDisabledColor: f.COLORS.neutral30,
            dayNameColor: f.COLORS.neutral30,
            gridBorderColor: f.COLORS.neutral15,
            pagerBackgroundColor: f.COLORS.neutral03,
            pagerBorderColor: f.COLORS.neutral06,
            rangeBackgroundColor: f.COLORS.neutral06,
            selectedBackgroundColor: f.COLORS.blueTint50,
            typeStyle: f.TYPOGRAPHY.type12
        },
        SUIDateTimeRangePicker: {
            backgroundColor: f.COLORS.white,
            borderColor: f.COLORS.neutral15,
            typeStyle: f.TYPOGRAPHY.type12
        },
        SUIDecisionModal: {
            decisionOption: {
                backgroundColor: "#fff",
                borderColor: "#D0DAE0",
                hoverBackgroundColor: "#EEEEEE",
                titleStyle: babelHelpers["extends"]({}, f.TYPOGRAPHY.type16, {
                    color: "#2397CA"
                }),
                descriptionStyle: f.TYPOGRAPHY.type12
            }
        },
        SUIError: {
            error: {
                borderColor: f.COLORS.red,
                icon: j.jsx(h, {
                    colorDefault: f.COLORS.red,
                    name: "warning",
                    size: 24
                })
            },
            warning: {
                borderColor: f.COLORS.yellow,
                icon: j.jsx(h, {
                    colorDefault: f.COLORS.yellow,
                    name: "warning",
                    size: 24
                })
            }
        },
        SUIFileSelector: {
            backgroundColor: {
                "default": f.COLORS.white,
                hovering: f.COLORS.neutral03
            },
            borderColor: {
                "default": f.COLORS.neutral15,
                error: f.COLORS.red
            },
            typeStyles: {
                content: f.TYPOGRAPHY.type12,
                header: f.TYPOGRAPHY.type24Bold
            }
        },
        SUIFormRow: {
            childrenText: f.TYPOGRAPHY.type12,
            emphasizedBackgroundColor: f.COLORS.neutral06,
            labelText: f.TYPOGRAPHY.type12,
            positions: {
                helpPosition: "13px",
                requiredPosition: "16px",
                requiredPositionWithHelp: "32px"
            },
            requiredColor: f.COLORS.red
        },
        SUIHelpMessage: {
            icon: j.jsx(h, {
                name: "information",
                style: {
                    color: f.COLORS.neutral30
                }
            })
        },
        SUIHighlightedText: {
            backgroundColor: f.COLORS.greenTint50
        },
        SUIInlineNux: {
            borderColor: f.COLORS.blueTint50,
            icon: j.jsx(h, {
                colorDefault: f.COLORS.blue,
                name: "information",
                size: 20
            }),
            titleTypeStyle: f.TYPOGRAPHY.type12Bold,
            childrenTypeStyle: f.TYPOGRAPHY.type12
        },
        SUIInlineTypeahead: {
            dividerBorderColor: f.COLORS.neutral15,
            searchIcon: j.jsx(h, {
                colorDefault: f.COLORS.neutral50,
                name: "search"
            })
        },
        SUILoadingBar: {
            backgroundColor: f.COLORS.blue,
            movingColor: f.COLORS.blueTint50
        },
        SUILink: {
            hoverColor: f.COLORS.blueShade25,
            normalColor: f.COLORS.blue
        },
        SUIMessageBox: {
            filled: {
                backgroundColor: f.COLORS.blueTint85,
                border: "1px solid",
                borderColor: f.COLORS.neutral30
            },
            outline: {
                backgroundColor: f.COLORS.white,
                border: "1px solid",
                borderColor: f.COLORS.neutral30
            }
        },
        SUIModalDEPRECATED: {
            margin: 64
        },
        SUIModalBackgroundDEPRECATED: {
            backgroundColor: f.COLORS.blackOpacity40
        },
        SUIModalCardDEPRECATED: {
            boxShadow: "0px 1px 0px 0px rgba(0, 0, 0, 0.10)",
            colors: {
                background: f.COLORS.neutral02,
                border: f.COLORS.neutral06,
                footerBackground: f.COLORS.white,
                headerBackground: f.COLORS.white,
                innerBorder: f.COLORS.neutral15
            },
            fullWidthFooterDivider: !0,
            padding: {
                contentLightPadding: {
                    paddingBottom: "8px",
                    paddingLeft: "24px",
                    paddingRight: "24px",
                    paddingTop: "8px"
                },
                contentNormalPadding: {
                    paddingBottom: "24px",
                    paddingLeft: "24px",
                    paddingRight: "24px",
                    paddingTop: "24px"
                },
                footer: {
                    paddingBottom: "0",
                    paddingLeft: "24px",
                    paddingRight: "8px",
                    paddingTop: "0"
                },
                header: {
                    paddingBottom: "0",
                    paddingLeft: "24px",
                    paddingRight: "8px",
                    paddingTop: "0"
                }
            },
            typeStyles: {
                content: f.TYPOGRAPHY.type12,
                footer: f.TYPOGRAPHY.type16,
                header: f.TYPOGRAPHY.type16
            }
        },
        SUIModalCard: {
            backgroundColor: f.COLORS.neutral02,
            bodyHorizontalMargin: 24,
            bodyVerticalMargin: 24,
            cardBoxShadow: "0px 1px 0px 0px rgba(0, 0, 0, 0.10)",
            closeButtonPosition: 12,
            modalBoxShadow: "0px 1px 0px 0px rgba(0, 0, 0, 0.10)",
            typeStyle: f.TYPOGRAPHY.type12
        },
        SUILayerFooter: {
            isFullBleed: !1,
            topBorderColor: f.COLORS.neutral15
        },
        SUILayerHeader: {
            backgroundColor: f.COLORS.white,
            bottomBorderColor: f.COLORS.neutral15,
            errorIconMarginLeft: "8px",
            horizontalPadding: 12,
            typeStyle: f.TYPOGRAPHY.type16
        },
        SUINameCell: {
            description: {
                color: f.COLORS.neutral72,
                typeStyle: f.TYPOGRAPHY.type11
            },
            height: 48
        },
        SUINestedTable: {
            borderColor: f.COLORS.neutral15,
            evenBackgroundColor: f.COLORS.white,
            loadingBackgroundColor: f.COLORS.neutral03,
            loadingColor: f.COLORS.neutral30,
            oddBackgroundColor: f.COLORS.neutral02,
            rowIconClosedName: "chevronRight",
            rowIconComponent: d,
            rowIconOpenName: "chevronDown",
            highlightedBackgroundColor: f.COLORS.blueLight,
            textColor: f.COLORS.neutral72,
            textStyle: f.TYPOGRAPHY.type12
        },
        SUINotice: {
            textStyle: babelHelpers["extends"]({}, f.TYPOGRAPHY.type12, {
                lineHeight: "21px"
            }),
            type: {
                error: {
                    icon: j.jsx(h, {
                        colorDefault: f.COLORS.white,
                        name: "warning"
                    }),
                    iconBackgroundColor: f.COLORS.red,
                    messageBackgroundColor: f.COLORS.white,
                    messageBorderColor: f.COLORS.neutral15
                },
                information: {
                    icon: j.jsx(h, {
                        colorDefault: f.COLORS.white,
                        name: "information-open"
                    }),
                    iconBackgroundColor: f.COLORS.blue,
                    messageBackgroundColor: f.COLORS.white,
                    messageBorderColor: f.COLORS.neutral15
                },
                success: {
                    icon: j.jsx(h, {
                        colorDefault: f.COLORS.white,
                        name: "check"
                    }),
                    iconBackgroundColor: f.COLORS.blue,
                    messageBackgroundColor: f.COLORS.white,
                    messageBorderColor: f.COLORS.neutral15
                },
                warning: {
                    icon: j.jsx(h, {
                        colorDefault: f.COLORS.white,
                        name: "warning"
                    }),
                    iconBackgroundColor: f.COLORS.yellow,
                    messageBackgroundColor: f.COLORS.white,
                    messageBorderColor: f.COLORS.neutral15
                }
            }
        },
        SUIRadioList: {
            activeBackgroundColor: f.COLORS.neutral06,
            activeBorderColor: f.COLORS.neutral30,
            activeDotColor: f.COLORS.neutral80,
            backgroundColor: f.COLORS.white,
            borderColor: f.COLORS.neutral15,
            disabledBackgroundColor: f.COLORS.neutral06,
            disabledBorderColor: f.COLORS.neutral15,
            disabledDotColor: f.COLORS.neutral50,
            disabledTypeColor: f.COLORS.neutral30,
            dotColor: f.COLORS.neutral72,
            enabledTypeColor: f.COLORS.neutral72,
            typeStyle: f.TYPOGRAPHY.type12
        },
        SUIRemovableSearchableSelector: {
            removeButtonBackgroundColor: f.COLORS.neutral03,
            removeButtonBorderColor: f.COLORS.neutral15
        },
        SUISearchableSelector: {
            disabledSubtitleTypeStyle: f.TYPOGRAPHY.type12,
            disabledTitleTypeStyle: f.TYPOGRAPHY.type12,
            dropdownBackgroundColor: f.COLORS.white,
            dropdownBorderColor: f.COLORS.neutral15,
            headerBackgroundColor: f.COLORS.white,
            headerTypeStyle: f.TYPOGRAPHY.type12,
            subtitleColor: f.COLORS.neutral30,
            subtitleTypeStyle: f.TYPOGRAPHY.type12,
            titleTypeStyle: f.TYPOGRAPHY.type12
        },
        SUISearchInput: {
            cancelIcon: j.jsx(h, {
                colorDefault: f.COLORS.neutral15,
                colorHover: f.COLORS.neutral50,
                name: "delete"
            }),
            searchIcon: j.jsx(h, {
                colorDefault: f.COLORS.neutral15,
                colorFocused: f.COLORS.neutral50,
                name: "search",
                size: 24
            })
        },
        SUISectionHeading: {
            borderColor: f.COLORS.neutral15,
            color: f.COLORS.neutral50,
            typeStyle: f.TYPOGRAPHY.type24
        },
        SUISelector: {
            backgroundColor: f.COLORS.white,
            borderColor: f.COLORS.neutral15,
            boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.10)"
        },
        SUISelectorButton: {
            use: {
                "default": {
                    chevron: j.jsx(h, {
                        colorDefault: f.COLORS.neutral72,
                        colorDisabled: f.COLORS.neutral30,
                        name: "chevronDown",
                        size: 12
                    }),
                    disabled: {
                        background: f.COLORS.neutral02,
                        borderColor: f.COLORS.neutral15,
                        color: f.COLORS.neutral30
                    }
                }
            },
            padding: "12px"
        },
        SUISelectorOption: {
            activeBackgroundColor: f.COLORS.neutral02,
            activeColor: f.COLORS.neutral72,
            color: f.COLORS.neutral72,
            descriptionColor: f.COLORS.neutral50,
            descriptionSelectedColor: f.COLORS.neutral15,
            disabledBackgroundColor: f.COLORS.white,
            disabledColor: f.COLORS.neutral30,
            highlightedBackgroundColor: f.COLORS.neutral03,
            highlightedColor: f.COLORS.neutral72,
            padding: {
                bottom: "8px",
                left: "24px",
                right: "24px",
                top: "8px"
            },
            paddingWhenNoValue: {
                bottom: "8px",
                left: "12px",
                right: "24px",
                top: "8px"
            },
            selectedBackgroundColor: f.COLORS.blueTint85,
            selectedColor: f.COLORS.neutral72,
            selectedIcon: j.jsx(h, {
                name: "check",
                size: 16
            }),
            selectedIconMarginLeft: "-7px",
            selectedIconMarginRight: "3px",
            selectedTypeStyle: new (b("SUITypeStyle"))({
                color: "#466072",
                fontFamily: "Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif",
                fontSize: "12px",
                fontWeight: "bold"
            }),
            typeStyle: f.TYPOGRAPHY.type12
        },
        SUISelectorOptionGroup: {
            activeBackgroundColor: f.COLORS.neutral02,
            activeColor: f.COLORS.neutral72,
            collapsedIcon: j.jsx(h, {
                colorDefault: f.COLORS.neutral72,
                name: "chevronRight",
                size: 12
            }),
            color: f.COLORS.neutral72,
            expandedIcon: j.jsx(h, {
                colorDefault: f.COLORS.neutral72,
                name: "chevronDown",
                size: 12
            }),
            highlightedBackgroundColor: f.COLORS.neutral03,
            highlightedColor: f.COLORS.neutral72,
            typeStyle: f.TYPOGRAPHY.type12Bold
        },
        SUISelectorSeparator: {
            color: f.COLORS.neutral15,
            margin: {
                bottom: "12px",
                left: "12px",
                right: "12px",
                top: "12px"
            }
        },
        SUISpinner: {
            activeColor: f.COLORS.neutral50,
            backgroundColor: f.COLORS.neutral15,
            darkActiveColor: f.COLORS.neutral50,
            darkBackgroundColor: f.COLORS.neutral15,
            sizes: {
                large: {
                    border: 2,
                    diameter: 20
                },
                small: {
                    border: 1.5,
                    diameter: 14
                }
            }
        },
        SUISplitButton: {
            chevronPadding: "4px",
            use: {
                confirm: {
                    chevron: j.jsx(h, {
                        colorDefault: f.COLORS.white,
                        colorDisabled: f.COLORS.white,
                        name: "chevronDown",
                        style: {
                            padding: "0 5px"
                        }
                    }),
                    dividerColor: f.COLORS.white
                },
                "default": {
                    chevron: j.jsx(h, {
                        colorDefault: f.COLORS.neutral72,
                        colorDisabled: f.COLORS.white,
                        name: "chevronDown",
                        style: {
                            padding: "0 5px"
                        }
                    }),
                    dividerColor: f.COLORS.neutral15
                },
                special: {
                    chevron: j.jsx(h, {
                        colorDefault: f.COLORS.white,
                        colorDisabled: f.COLORS.white,
                        name: "chevronDown",
                        style: {
                            padding: "0 5px"
                        }
                    }),
                    dividerColor: f.COLORS.white
                },
                flat: {
                    chevron: j.jsx(h, {
                        colorDefault: f.COLORS.neutral72,
                        colorDisabled: f.COLORS.white,
                        name: "chevronDown",
                        style: {
                            padding: "0 5px"
                        }
                    }),
                    dividerColor: f.COLORS.neutral15
                },
                flatWhite: {
                    chevron: j.jsx(h, {
                        colorDefault: f.COLORS.white,
                        colorDisabled: f.COLORS.white,
                        name: "chevronDown",
                        style: {
                            padding: "0 5px"
                        }
                    }),
                    dividerColor: f.COLORS.white
                }
            }
        },
        SUIStatusIndicator: {
            colors: {
                active: f.COLORS.greenStatus,
                error: f.COLORS.red,
                empty: f.COLORS.white,
                inactive: f.COLORS.neutral15,
                warning: f.COLORS.yellow
            },
            size: {
                border: 2,
                diameter: 10
            }
        },
        SUITabGroup: {},
        SUITabItem: {
            activeBorderBottomColor: f.COLORS.neutral72,
            activeTypeStyle: f.TYPOGRAPHY.type12,
            disabledColor: f.COLORS.neutral30,
            height: 44,
            hoverBackgroundColor: f.COLORS.neutral03,
            iconMargin: 4,
            subtextTypeStyle: f.TYPOGRAPHY.type11,
            typeStyle: f.TYPOGRAPHY.type12
        },
        SUITableDEPRECATED: {
            cellPadding: 12,
            colors: {
                cell: f.COLORS.neutral72,
                cellBorder: f.COLORS.neutral03,
                cellErrorBackground: f.COLORS.redTint85,
                cellHoverBackground: f.COLORS.neutral06,
                cellModifiedBackground: f.COLORS.neutral15,
                cellSelectedBackground: f.COLORS.blueTint85,
                cellSelectedHoverBackground: f.COLORS.neutral06,
                cellWarningBackground: f.COLORS.yellowTint85,
                error: f.COLORS.red,
                heading: f.COLORS.neutral30,
                headingBackground: f.COLORS.white,
                headingRule: f.COLORS.neutral15,
                highlight: f.COLORS.blue,
                loading: f.COLORS.neutral30,
                loadingBackground: f.COLORS.neutral03,
                noItemsMessage: f.COLORS.neutral72,
                rowBackground: f.COLORS.white,
                rowStripe: f.COLORS.neutral02,
                text: f.COLORS.neutral72,
                warning: f.COLORS.yellow
            },
            textStyles: {
                cell: f.TYPOGRAPHY.type12,
                heading: f.TYPOGRAPHY.type12,
                table: f.TYPOGRAPHY.type12
            }
        },
        SUIText: {
            header1: {
                fontFamily: "Freight Sans Bold, Helvetica, Arial, Lucida Grande, sans-serif",
                fontSize: 24,
                lineHeight: 32
            },
            header2: {
                fontFamily: "Freight Sans Bold, Helvetica, Arial, Lucida Grande, sans-serif",
                fontSize: 20,
                lineHeight: 24
            },
            header3: {
                fontFamily: "Freight Sans Bold, Helvetica, Arial, Lucida Grande, sans-serif",
                fontSize: 16,
                lineHeight: 24
            },
            header4: {
                fontFamily: "Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif",
                fontSize: 14,
                lineHeight: 20
            },
            body1: {
                fontFamily: "Freight Sans Bold, Helvetica, Arial, Lucida Grande, sans-serif",
                fontSize: 14,
                lineHeight: 18
            },
            body1_DEPRECATED: {
                fontFamily: "Freight Sans Bold, Helvetica, Arial, Lucida Grande, sans-serif",
                fontSize: 16,
                lineHeight: 20
            },
            body2: {
                fontFamily: "Freight Sans Bold, Helvetica, Arial, Lucida Grande, sans-serif",
                fontSize: 13,
                lineHeight: 17
            },
            body2_DEPRECATED: {
                fontFamily: "Freight Sans Bold, Helvetica, Arial, Lucida Grande, sans-serif",
                fontSize: 14,
                lineHeight: 18
            },
            body3: {
                fontFamily: "Freight Sans Bold, Helvetica, Arial, Lucida Grande, sans-serif",
                fontSize: 12,
                lineHeight: 16
            },
            body3_DEPRECATED: {
                fontFamily: "Freight Sans Bold, Helvetica, Arial, Lucida Grande, sans-serif",
                fontSize: 12,
                lineHeight: 17
            },
            meta1: {
                fontFamily: "Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif",
                fontSize: 12,
                lineHeight: 17
            },
            display: {
                fontFamily: "Freight Sans Bold, Helvetica, Arial, Lucida Grande, sans-serif",
                fontSize: 40,
                lineHeight: 48
            },
            heading: {
                fontFamily: "Freight Sans Bold, Helvetica, Arial, Lucida Grande, sans-serif",
                fontSize: 24,
                lineHeight: 32
            },
            subheading: {
                fontFamily: "Freight Sans Bold, Helvetica, Arial, Lucida Grande, sans-serif",
                fontSize: 20,
                lineHeight: 24
            },
            headline: {
                fontFamily: "Freight Sans Bold, Helvetica, Arial, Lucida Grande, sans-serif",
                fontSize: 16,
                lineHeight: 24
            },
            regular: {
                fontFamily: "Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif",
                fontSize: 14,
                lineHeight: 20
            },
            regularUI: {
                fontFamily: "Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif",
                fontSize: 14,
                lineHeight: 16
            },
            large: {
                fontFamily: "Freight Sans Bold, Helvetica, Arial, Lucida Grande, sans-serif",
                fontSize: 24,
                lineHeight: 30
            },
            medium: {
                fontFamily: "Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif",
                fontSize: 16,
                lineHeight: 21
            },
            shade: {
                dark: f.COLORS.neutral72,
                light: f.COLORS.neutral30,
                link: f.COLORS.blue,
                medium: f.COLORS.neutral50,
                white: f.COLORS.white
            },
            small: {
                fontFamily: "Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif",
                fontSize: 12,
                lineHeight: 17
            },
            color: {
                blueLink: f.COLORS.blue,
                disabled: f.COLORS.neutral30,
                disabledDark: f.COLORS.neutral72,
                interactive: f.COLORS.blue,
                negative: f.COLORS.red,
                placeholder: f.COLORS.neutral30,
                positive: f.COLORS.green,
                primary: f.COLORS.neutral72,
                primaryDark: f.COLORS.neutral15,
                secondary: f.COLORS.neutral30,
                secondaryDark: f.COLORS.neutral50,
                white: f.COLORS.white
            },
            xlarge: {
                fontFamily: "Freight Sans Bold, Helvetica, Arial, Lucida Grande, sans-serif",
                fontSize: 32,
                lineHeight: 40
            },
            xsmall: {
                fontFamily: "Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif",
                fontSize: 11,
                lineHeight: 16
            },
            xxlarge: {
                fontFamily: "Freight Sans Bold, Helvetica, Arial, Lucida Grande, sans-serif",
                fontSize: 40,
                lineHeight: 50
            },
            letterSpacing: "normal"
        },
        SUITextArea: {
            disabled: {
                background: f.COLORS.neutral02,
                borderColor: f.COLORS.neutral15
            },
            enabled: {
                background: f.COLORS.white,
                borderColor: f.COLORS.neutral15
            },
            focusedBorderColor: "#4080ff",
            placeholderColor: f.COLORS.neutral30,
            placeholderColorFocused: f.COLORS.neutral15,
            typeStyle: f.TYPOGRAPHY.type12Form
        },
        SUITextInput: {
            characterCountTypeStyle: new (b("SUITypeStyle"))({
                color: f.COLORS.neutral30,
                fontFamily: "Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif",
                fontSize: "11px",
                fontWeight: "normal"
            }),
            disabled: {
                background: f.COLORS.neutral02,
                borderColor: f.COLORS.neutral15
            },
            enabled: {
                background: f.COLORS.white,
                borderColor: f.COLORS.neutral15
            },
            errorIconMargin: "3px",
            focusedBorderColor: "#4080ff",
            height: 32,
            maxLengthHighlightColor: "rgba(250, 62, 62, 0.3)",
            placeholderColor: f.COLORS.neutral30,
            placeholderColorFocused: f.COLORS.neutral15,
            typeStyle: f.TYPOGRAPHY.type12Form
        },
        SUIToast: {
            errorBackgroundColor: f.COLORS.red,
            errorIcon: j.jsx(h, {
                colorDefault: f.COLORS.white,
                name: "warning"
            }),
            informationBackgroundColor: f.COLORS.neutral72,
            informationIcon: j.jsx(h, {
                colorDefault: f.COLORS.white,
                name: "information"
            }),
            isSpinnerDark: !0,
            messageBackgroundColor: f.COLORS.neutral72,
            messageBorderColor: f.COLORS.neutral72,
            successBackgroundColor: f.COLORS.neutral72,
            successIcon: j.jsx(h, {
                colorDefault: f.COLORS.white,
                name: "check"
            }),
            typeStyle: f.TYPOGRAPHY.type12Toast,
            warningBackgroundColor: f.COLORS.yellow,
            warningIcon: j.jsx(h, {
                colorDefault: f.COLORS.white,
                name: "warning"
            })
        },
        SUIToggle: {
            height: 20,
            off: {
                hover: {
                    backgroundColor: f.COLORS.neutral30,
                    color: f.COLORS.neutral72
                },
                normal: {
                    backgroundColor: f.COLORS.neutral15,
                    color: f.COLORS.neutral50
                }
            },
            on: {
                hover: {
                    backgroundColor: f.COLORS.neutral72,
                    color: f.COLORS.neutral02
                },
                normal: {
                    backgroundColor: f.COLORS.neutral50,
                    color: f.COLORS.neutral02
                }
            },
            switchColor: f.COLORS.white,
            typeStyle: f.TYPOGRAPHY.type11Bold
        },
        SUIToggleButtonGroup: {
            selected: {
                backgroundColor: f.COLORS.neutral50,
                color: f.COLORS.white
            }
        },
        SUIToken: {
            backgroundColor: f.COLORS.blue,
            color: f.COLORS.white,
            typeStyle: f.TYPOGRAPHY.type12,
            closeButtonShade: "light"
        },
        SUITokenizer: {
            disabled: {
                backgroundColor: f.COLORS.neutral02,
                borderColor: f.COLORS.neutral15
            },
            enabled: {
                backgroundColor: f.COLORS.white,
                borderColor: f.COLORS.neutral15
            },
            errorIconMarginRight: "4px",
            typeaheadInput: {
                typeStyle: f.TYPOGRAPHY.type12
            }
        },
        SUITokenizerItem: {
            disabled: {
                color: f.COLORS.neutral30,
                subtitleColor: f.COLORS.neutral15
            },
            highlighted: {
                backgroundColor: f.COLORS.blueTint85,
                color: f.COLORS.neutral80,
                subtitleColor: f.COLORS.neutral50
            },
            normal: {
                color: f.COLORS.neutral72,
                subtitleColor: f.COLORS.neutral50
            },
            remove: {
                disabledIcon: j.jsx(h, {
                    colorDefault: f.COLORS.neutral30,
                    name: "delete",
                    size: 14
                }),
                highlightedIcon: j.jsx(h, {
                    colorDefault: f.COLORS.neutral80,
                    name: "delete",
                    size: 14
                }),
                normalIcon: j.jsx(h, {
                    colorDefault: f.COLORS.neutral72,
                    name: "delete",
                    size: 14
                }),
                selectedIcon: j.jsx(h, {
                    colorDefault: f.COLORS.white,
                    name: "delete",
                    size: 14
                })
            },
            selected: {
                backgroundColor: f.COLORS.blue,
                color: f.COLORS.white,
                disabledIcon: j.jsx(h, {
                    colorDefault: f.COLORS.neutral30,
                    name: "check",
                    size: 14
                }),
                highlightedIcon: j.jsx(h, {
                    colorDefault: f.COLORS.neutral80,
                    name: "check",
                    size: 14
                }),
                isIconShownForSingleSelection: !1,
                normalIcon: j.jsx(h, {
                    colorDefault: f.COLORS.neutral72,
                    name: "check",
                    size: 14
                }),
                selectedIcon: j.jsx(h, {
                    colorDefault: f.COLORS.white,
                    name: "check",
                    size: 14
                }),
                subtitleColor: f.COLORS.blueTint50
            }
        },
        SUITokenizerItemList: {
            backgroundColor: f.COLORS.white,
            borderColor: f.COLORS.neutral15,
            categoryHeader: {
                borderColor: f.COLORS.neutral06,
                typeStyle: f.TYPOGRAPHY.type16
            },
            typeStyle: f.TYPOGRAPHY.type12
        },
        SUITypeahead: {
            input: {
                backgroundColor: f.COLORS.white,
                borderColor: f.COLORS.neutral15,
                errorBorderColor: f.COLORS.red,
                focusedBorderColor: "#4080ff",
                typeStyle: f.TYPOGRAPHY.type12Form,
                height: 32
            },
            disabled: {
                backgroundColor: f.COLORS.neutral02,
                borderColor: f.COLORS.neutral15
            },
            dropdown: {
                backgroundColor: f.COLORS.white,
                borderColor: f.COLORS.neutral06,
                boxShadow: "0px 2px 1px -1px rgba(0, 0, 0, 0.10)",
                itemPadding: {
                    bottom: "8px",
                    left: "12px",
                    right: "12px",
                    top: "8px"
                }
            },
            highlight: {
                backgroundColor: f.COLORS.blueTint85
            }
        },
        SUIHorizontalLayout: {
            margin: 8
        },
        SUIDropdownMenu: b("SUIDropdownMenuUniform.business"),
        SUIActionMenu: b("SUIActionMenuUniform.business")
    };
    a = new (b("SUITheme"))({
        id: "atlas",
        components: i
    });
    c = a;
    e.exports = c
}
), null);
__d("SUIAtlasChromeTheme", ["cssVar", "React", "SUIAtlasConstants", "SUIAtlasIcon.react", "SUIAtlasTheme", "SUITheme", "SUITypeStyle"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = b("React");
    d = {
        SUIButton: {
            height: {
                normal: 32,
                "short": 32,
                tall: 48
            },
            padding: {
                normal: {
                    button: "16px",
                    icon: "6px",
                    onlyIcon: "19px"
                },
                "short": {
                    button: "16px",
                    icon: "6px",
                    onlyIcon: "19px"
                },
                tall: {
                    button: "16px",
                    icon: "6px",
                    onlyIcon: "19px"
                }
            },
            typeStyle: (c = b("SUIAtlasConstants")).TYPOGRAPHY.type12,
            use: {
                confirm: {
                    active: {
                        background: c.COLORS.blueShade25,
                        borderColor: c.COLORS.blueShade25,
                        color: c.COLORS.white
                    },
                    disabled: {
                        background: c.COLORS.neutral15,
                        borderColor: c.COLORS.neutral15,
                        color: c.COLORS.white
                    },
                    hover: {
                        background: c.COLORS.blueShade10,
                        borderColor: c.COLORS.blueShade10,
                        color: c.COLORS.white
                    },
                    normal: {
                        background: c.COLORS.blue,
                        borderColor: c.COLORS.blue,
                        color: c.COLORS.white
                    }
                },
                "default": {
                    active: {
                        background: c.COLORS.neutral15,
                        borderColor: c.COLORS.neutral15,
                        color: c.COLORS.neutral72
                    },
                    disabled: {
                        background: c.COLORS.neutral15,
                        borderColor: c.COLORS.neutral15,
                        color: c.COLORS.white
                    },
                    hover: {
                        background: c.COLORS.neutral06,
                        borderColor: c.COLORS.neutral06,
                        color: c.COLORS.neutral72
                    },
                    normal: {
                        background: c.COLORS.neutral03,
                        borderColor: c.COLORS.neutral03,
                        color: c.COLORS.neutral72
                    }
                },
                special: {
                    active: {
                        background: c.COLORS.greenShade25,
                        borderColor: c.COLORS.greenShade25,
                        color: c.COLORS.white
                    },
                    disabled: {
                        background: c.COLORS.neutral15,
                        borderColor: c.COLORS.neutral15,
                        color: c.COLORS.white
                    },
                    hover: {
                        background: c.COLORS.greenShade10,
                        borderColor: c.COLORS.greenShade10,
                        color: c.COLORS.white
                    },
                    normal: {
                        background: c.COLORS.green,
                        borderColor: c.COLORS.green,
                        color: c.COLORS.white
                    }
                },
                flat: b("SUIAtlasTheme").SUIButton.use.flat,
                flatWhite: b("SUIAtlasTheme").SUIButton.use.flatWhite
            }
        },
        SUIButtonIcon: {
            colorConfirm: c.COLORS.blueTint50,
            colorDefault: c.COLORS.neutral72,
            colorDisabled: c.COLORS.white,
            colorSpecial: c.COLORS.greenTint50,
            defaultSize: 18,
            iconComponent: b("SUIAtlasIcon.react")
        },
        SUISearchInput: {
            cancelIcon: a.jsx(b("SUIAtlasIcon.react"), {
                colorDefault: c.COLORS.neutral15,
                colorHover: c.COLORS.neutral50,
                name: "delete"
            }),
            searchIcon: a.jsx(b("SUIAtlasIcon.react"), {
                colorDefault: c.COLORS.neutral72,
                name: "search",
                size: 24
            })
        },
        SUITextInput: {
            characterCountTypeStyle: new (b("SUITypeStyle"))({
                color: c.COLORS.neutral30,
                fontFamily: "Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif",
                fontSize: "11px",
                fontWeight: "normal"
            }),
            disabled: {
                background: c.COLORS.neutral02,
                borderColor: c.COLORS.neutral15
            },
            enabled: {
                background: c.COLORS.neutral06,
                borderColor: c.COLORS.neutral06
            },
            errorIconMargin: "3px",
            focusedBorderColor: "#4080ff",
            height: 32,
            maxLengthHighlightColor: "rgba(250, 62, 62, 0.3)",
            placeholderColor: c.COLORS.neutral30,
            placeholderColorFocused: c.COLORS.neutral30,
            typeStyle: c.TYPOGRAPHY.type12Form
        }
    };
    f = new (b("SUITheme"))({
        id: "atlas_chrome",
        components: babelHelpers["extends"]({}, b("SUIAtlasTheme"), d)
    });
    e.exports = f
}
), null);
__d("Text.atlas", ["React", "Typography.atlas", "joinClasses"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = g.PureComponent;
    c = {
        display: "inline"
    };
    d = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props
              , c = a.color
              , d = a.size
              , e = a.weight;
            a = babelHelpers.objectWithoutPropertiesLoose(a, ["color", "size", "weight"]);
            d = b("joinClasses")(this.props.className, b("Typography.atlas").getClassName(d, e, c));
            return this.props.display === "block" ? g.jsx("div", babelHelpers["extends"]({}, a, {
                className: d,
                children: this.props.children
            })) : g.jsx("span", babelHelpers["extends"]({}, a, {
                className: d,
                children: this.props.children
            }))
        }
        ;
        return c
    }(a);
    e.exports = d;
    d.defaultProps = c
}
), null);
__d("AdsVideoUploadAsyncRequest", ["fbt", "AsyncResponse", "emptyFunction", "forEachObject"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a() {
            var a;
            this.$1 = {};
            this.$2 = {};
            this.$3 = null;
            this.$4 = a = b("emptyFunction");
            this.$5 = a;
            this.$6 = a;
            this.$7 = a
        }
        var c = a.prototype;
        c.setURI = function(a) {
            this.$8 = a;
            return this
        }
        ;
        c.setData = function(a) {
            this.$1 = a;
            return this
        }
        ;
        c.setRawData = function(a) {
            this.$3 = a;
            return this
        }
        ;
        c.setRequestHeader = function(a, b) {
            this.$2[a] = b;
            return this
        }
        ;
        c.setHandler = function(a) {
            this.$4 = a;
            return this
        }
        ;
        c.setErrorHandler = function(a) {
            this.$9 = a;
            return this
        }
        ;
        c.setTransportErrorHandler = function(a) {
            this.$6 = a;
            return this
        }
        ;
        c.setUploadProgressHandler = function(a) {
            this.$7 = a;
            return this
        }
        ;
        c.setAllowCrossOrigin = function(a) {
            return this
        }
        ;
        c.send = function() {
            this.$10 = new XMLHttpRequest();
            this.$11();
            this.$10.open("POST", this.$8, !0);
            var a = this.$10;
            b("forEachObject")(this.$2, function(b, c) {
                a.setRequestHeader(c, b)
            });
            this.$10.send(this.$12())
        }
        ;
        c.abort = function() {
            this.$13(),
            this.$10.abort()
        }
        ;
        c.$11 = function() {
            var a = this;
            this.$10.addEventListener("load", function(b) {
                return a.$14(b)
            });
            this.$10.addEventListener("error", function(b) {
                return a.$15(b)
            });
            this.$10.upload.addEventListener("progress", function(b) {
                return a.$16(b)
            })
        }
        ;
        c.$14 = function(a) {
            a = JSON.parse(this.$10.responseText);
            var c = new (b("AsyncResponse"))(null,a);
            if (this.$17(this.$10.status))
                this.$4(c);
            else {
                var d = 1, e = g._("\u0110\u00e3 x\u1ea3y ra l\u1ed7i kh\u00f4ng x\u00e1c \u0111\u1ecbnh"), f = null, h = !1, i;
                (i = a.error) ? (d = i.error_subcode || i.code,
                e = i.error_user_title || i.message,
                f = i.error_user_msg,
                f && (f += " (#" + d + ") "),
                h = i.is_transient) : a.error_code != null && (d = a.error_code,
                e = a.error_msg);
                f || (f = e);
                Object.assign(c, {
                    error: d,
                    errorSummary: e,
                    errorDescription: f,
                    transientError: h
                });
                this.$9(c)
            }
        }
        ;
        c.$15 = function(a) {
            a = JSON.parse(this.$10.responseText);
            a = new (b("AsyncResponse"))(null,a);
            if (navigator.onLine) {
                var c = g._("L\u1ed7i \u0111\u00e3 x\u1ea3y ra. Ch\u00fang t\u00f4i \u0111ang kh\u1eafc ph\u1ee5c s\u1edbm nh\u1ea5t c\u00f3 th\u1ec3. B\u1ea1n c\u00f3 th\u1ec3 th\u1eed l\u1ea1i sau.");
                Object.assign(a, {
                    error: 1004,
                    errorSummary: c,
                    errorDescription: c,
                    transientError: !0
                })
            } else {
                a.setError(1006);
                var d = g._("The browser went offline");
                Object.assign(a, {
                    error: 1006,
                    errorSummary: d,
                    errorDescription: d,
                    transientError: !0
                });
                a.setErrorDescription(c);
                a.setErrorSummary(c)
            }
            this.$6(a)
        }
        ;
        c.$16 = function(a) {
            this.$7(a)
        }
        ;
        c.$13 = function() {
            this.$10.removeEventListener("load", this.__successHandler),
            this.$10.removeEventListener("error", this.__errorHandler),
            this.$10.upload.removeEventListener("progress", this.__uploadProgressHandler)
        }
        ;
        c.$17 = function(a) {
            return a >= 200 && a <= 299
        }
        ;
        c.$12 = function() {
            var a = this.$3 === null ? new FormData() : this.$3;
            b("forEachObject")(this.$1, function(b, c) {
                a.append(c, b)
            });
            return a
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("AdsVideoUploadRequest", ["AdsVideoUploadAsyncRequest", "VideoUploadRequest"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.__getAsyncRequest = function() {
            return new (b("AdsVideoUploadAsyncRequest"))()
        }
        ;
        return c
    }(b("VideoUploadRequest"));
    e.exports = a
}
), null);
__d("AdsVideoUploadRequestContext", ["VideoUploadRequestContext"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.setChunkSessionID = function(a) {
            this.$AdsVideoUploadRequestContext1 = a;
            return this
        }
        ;
        c.getChunkSessionID = function() {
            return this.$AdsVideoUploadRequestContext1
        }
        ;
        c.reset = function() {
            a.prototype.reset.call(this),
            this.$AdsVideoUploadRequestContext1 = null
        }
        ;
        return b
    }(b("VideoUploadRequestContext"));
    e.exports = a
}
), null);
__d("VideoCreatorProductType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        LEGACY: 0,
        UNSPECIFIED: 1,
        CORE_VIDEOS: 2,
        LOOPS: 3,
        ANIMATED_GIFS: 4,
        SLIDESHOW: 5,
        PROFILE_VIDEO: 6,
        SPHERICAL: 7,
        LIVE_PHOTO: 8,
        BIRTHDAY_VIDEO: 9,
        STORYLINE: 10,
        FRIENDS_DAY_2016: 11,
        FRIENDVERSARY: 12,
        STORYLINE_WITH_EXTERNAL_MUSIC: 13,
        GOODWILL_VIDEO_BIRTHDAY: 14,
        GOODWILL_VIDEO_ANNIVERSARY: 15,
        GOODWILL_VIDEO_FACEVERSARY: 16,
        GOODWILL_VIDEO_YIR16: 17,
        GOODWILL_VIDEO_FRIENDSDAY17: 18,
        GOODWILL_VIDEO_FRIEND_BIRTHDAY_VIDEO: 19,
        VIDEO_ADS_ICEBERG: 20,
        GOODWILL_VIDEO_TWO_BILLION: 21,
        GOODWILL_VIDEO_RECAP: 22,
        GOODWILL_VIDEO_ANNIVERSARY_V2: 23,
        SPHERICAL_VID_DETECTOR: 24,
        ALOHA_SUPERFRAME: 25,
        GOODWILL_VIDEO_MEMORY: 26,
        ALOHA_CALL_VIDEO: 27,
        GOODWILL_VIDEO_YIR17: 28,
        GOODWILL_VIDEO_FRIENDSDAY18: 29,
        PROFILE_COVER_VIDEO: 30,
        ADS_ANIMATOR_VIDEO: 31,
        GOODWILL_VIDEO_COMMUNITY: 32,
        VCC_TEMPLATIZED_VIDEO: 33,
        VCE_EDITED_VIDEO: 34,
        GOODWILL_VIDEO_GENERAL: 35,
        MERCHANT_OVERLAYS_VIDEO: 36,
        GOODWILL_VIDEO_YIR18: 37,
        KOTOTORO: 38,
        INSTAGRAM_LOTUS: 39,
        NEKO_TEMPLATED_VIDEO: 40,
        GOODWILL_VIDEO_FRIENDSDAY19: 41,
        VCE_AUTO_CROPPING: 42,
        GOODWILL_VIDEO_COMMUNITY19: 43,
        OCULUS_CREATOR_PORTAL: 44,
        ADS_DCO_TRIMMED: 45,
        GOODWILL_VIDEO_SUMMARY: 46,
        VCE_MANUAL_TRIMMED: 47,
        STORIFY: 48,
        GOODWILL_VIDEO_FACEVERSARY19: 49,
        VCE_OVERLAY: 50,
        SHOWREEL_NATIVE_DUMMY_VIDEO: 51,
        STORIFY_AUTOMATED_TEMPLATES: 52,
        MUSIC_STORY: 53,
        VIDEO_SUPER_RESOLUTION: 54,
        VIDEO_PLAYBACK_SPEED: 55,
        FB_SHORTS: 56,
        GLADOS_VIDEO_TEMPLATE: 57
    });
    e.exports = a
}
), null);
__d("AdsVideoUploadPostRequestManager", ["AdsVideoUploadRequest", "AdsVideoUploadUtil", "VideoCreatorProductType", "VideoUploadPostRequestManager"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.__getVideoUploadRequest = function(a) {
            return new (b("AdsVideoUploadRequest"))(a)
        }
        ;
        d.__createRequestData = function(c) {
            var d = Object.keys(b("VideoCreatorProductType"))
              , e = d[0];
            d.forEach(function(a) {
                b("VideoCreatorProductType")[a] === c.getCreatorProduct() && (e = a)
            });
            d = a.prototype.__createRequestData.call(this, c);
            return babelHelpers["extends"]({}, d, {
                creator_product: e,
                waterfall_id: c.getWaterfallID(),
                upload_session_id: c.getChunkSessionID(),
                upload_phase: "finish",
                upload_source: c.getSource(),
                title: b("AdsVideoUploadUtil").getVideoTitle(c.getFile().getFile()),
                thumbnail_type: "generated_default"
            })
        }
        ;
        return c
    }(b("VideoUploadPostRequestManager"));
    e.exports = a
}
), null);
__d("AdsVideoUploadReceiveRequestManager", ["AdsVideoUploadRequest", "VideoUploadReceiveRequestManager"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.__getVideoUploadRequest = function(a) {
            return new (b("AdsVideoUploadRequest"))(a)
        }
        ;
        d.__createRequestData = function(b) {
            if (b.getUseParallelChunks()) {
                var c = a.prototype.__createRequestData.call(this, b);
                return babelHelpers["extends"]({}, c, {
                    start_offset: b.getStartOffset(),
                    end_offset: b.getEndOffset(),
                    waterfall_id: b.getWaterfallID(),
                    upload_session_id: b.getChunkSessionID(),
                    upload_phase: "transfer",
                    upload_source: b.getSource(),
                    partition_start_offset: b.getPartitionStartOffset(),
                    partition_end_offset: b.getPartitionEndOffset(),
                    upload_speed: b.getLastKnownUploadSpeed().toString()
                })
            } else
                return {
                    start_offset: b.getStartOffset(),
                    waterfall_id: b.getWaterfallID(),
                    upload_session_id: b.getChunkSessionID(),
                    upload_phase: "transfer"
                }
        }
        ;
        d.__handleSuccessResponse = function(b) {
            var c = b.getPayload();
            c.start_offset = parseInt(c.start_offset, 10);
            c.end_offset = parseInt(c.end_offset, 10);
            a.prototype.__handleSuccessResponse.call(this, b)
        }
        ;
        d.__handleServerFailureResponse = function(b) {
            if (a.prototype.__hasInvalidStartOffsetAndHasRetries.call(this, b.getError())) {
                var c = b.getPayload();
                c.start_offset = c.error.error_data.start_offset;
                c.end_offset = c.error.error_data.end_offset
            }
            a.prototype.__handleServerFailureResponse.call(this, b)
        }
        ;
        return c
    }(b("VideoUploadReceiveRequestManager"));
    e.exports = a
}
), null);
__d("AdsVideoUploadStartRequestManager", ["AdsVideoUploadRequest", "VideoCreatorProductType", "VideoUploadStartRequestManager"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.__getVideoUploadRequest = function(a) {
            return new (b("AdsVideoUploadRequest"))(a)
        }
        ;
        d.__getDataToSend = function(c) {
            var d = Object.keys(b("VideoCreatorProductType"))
              , e = d[0];
            d.forEach(function(a) {
                b("VideoCreatorProductType")[a] === c.getCreatorProduct() && (e = a)
            });
            if (c.getUseParallelChunks()) {
                d = a.prototype.__getDataToSend.call(this, c);
                return babelHelpers["extends"]({}, d, {
                    source: c.getSource(),
                    upload_source: c.getSource(),
                    file_size: c.getFile().getSize(),
                    waterfall_id: c.getWaterfallID(),
                    upload_phase: "start",
                    partition_start_offset: c.getPartitionStartOffset(),
                    partition_end_offset: c.getPartitionEndOffset(),
                    creator_product: e
                })
            } else
                return {
                    file_size: c.getFile().getSize(),
                    waterfall_id: c.getWaterfallID(),
                    upload_phase: "start",
                    creator_product: e
                }
        }
        ;
        d.__getSuccessInformData = function(a) {
            return {
                session_id: a.upload_session_id,
                video_id: a.video_id,
                start_offset: parseInt(a.start_offset, 10),
                end_offset: parseInt(a.end_offset, 10)
            }
        }
        ;
        return c
    }(b("VideoUploadStartRequestManager"));
    e.exports = a
}
), null);
__d("AdsVideoStatusSubscription", ["RelayFBEnvironment", "RelayModern", "AdsVideoStatusSubscription.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    f.subscribe = a;
    var g, h = g !== void 0 ? g : g = b("AdsVideoStatusSubscription.graphql");
    function a(a, c) {
        c === void 0 && (c = {});
        a = {
            input: a
        };
        return b("RelayModern").requestSubscription(b("RelayFBEnvironment"), {
            subscription: h,
            variables: a,
            onCompleted: c && c.onCompleted,
            onError: c && c.onError,
            onNext: c && c.onNext
        })
    }
}
), null);
__d("AdsVideoEncodingAsyncNotifier", ["AdsVideoFetcher", "AdsVideoStatusSubscription", "BanzaiODS", "clearTimeout", "emptyFunction", "promiseDone", "setTimeout"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = 1e3;
    a = function() {
        function a(a) {
            this.$1 = 0;
            this.$2 = 0;
            this.$6 = !1;
            this.$4 = a;
            this.$3 = 0;
            this.$7 = a = b("emptyFunction");
            this.$8 = a;
            this.$9 = a;
            this.$10 = a;
            this.$11 = a;
            this.$12 = a
        }
        var c = a.prototype;
        c.start = function() {
            this.$6 = !1,
            this.$1 === 0 && (this.$1 = Date.now()),
            this.$13()
        }
        ;
        c.abort = function() {
            this.$6 = !0,
            this.$5 !== null && b("clearTimeout")(this.$5)
        }
        ;
        c.getEncodingElapsedTime = function() {
            return this.$2
        }
        ;
        c.setOnStatusUpdateListener = function(a) {
            this.$9 = a
        }
        ;
        c.setOnFailedListener = function(a) {
            this.$7 = a
        }
        ;
        c.setOnFetchFailedListener = function(a) {
            this.$8 = a
        }
        ;
        c.setOnSuccessListener = function(a) {
            this.$10 = a
        }
        ;
        c.setOnEncodingStatusFetchStartListener = function(a) {
            this.$11 = a
        }
        ;
        c.setOnEncodingStatusFetchFinishListener = function(a) {
            this.$12 = a
        }
        ;
        c.subscribeToAdsVideoStatus = function() {
            var a = this;
            this.$1 === 0 && (this.$1 = Date.now());
            var c = b("AdsVideoStatusSubscription").subscribe({
                video_id: this.$4
            }, {
                onNext: function(b) {
                    b != null && b.ads_video_status_subscribe != null && b.ads_video_status_subscribe.status != null && a.$14(b.ads_video_status_subscribe.status)
                },
                onError: function(b) {
                    a.$8(),
                    c.dispose()
                }
            })
        }
        ;
        c.$13 = function() {
            var a = this;
            if (this.$6)
                return;
            var c = this.$3 + g;
            c = Math.max(0, c - Date.now());
            this.$5 = b("setTimeout")(function() {
                return a.$15()
            }, c)
        }
        ;
        c.$15 = function() {
            var a = this;
            this.$3 = Date.now();
            b("BanzaiODS").bumpEntityKey(2966, "video_ads_upload", "fetchVideoStatus-" + (!0).toString());
            b("promiseDone")(b("AdsVideoFetcher").genVideoStatus(this.$4), function(b) {
                return a.$14(b)
            })
        }
        ;
        c.$14 = function(a) {
            var c = this;
            a = typeof a === "string" ? a : a.video_status;
            a === "processing" ? (this.$9(),
            this.$13()) : a === "error" ? this.$7() : a === "ready" && (this.$11(),
            b("promiseDone")(b("AdsVideoFetcher").genSingleVideo(this.$4), function(a) {
                c.$2 = Date.now() - c.$1,
                c.$12(),
                c.$10(a)
            }, function() {
                c.$8()
            }))
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("AdsVideoUploadSession", ["AdsMgmtPerfScenarioController", "AdsVideoEncodingAsyncNotifier", "AdsVideoEncodingFormat", "AdsVideoUploadEvents", "AdsVideoUploadPostRequestManager", "AdsVideoUploadReceiveRequestManager", "AdsVideoUploadRequestContext", "AdsVideoUploadStartRequestManager", "VideoUploadLogger", "VideoUploadSession", "setTimeout"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = 12e4;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(b) {
            var c;
            c = a.call(this, b) || this;
            c.$AdsVideoUploadSession2 = b.encoding_format;
            return c
        }
        var d = c.prototype;
        d.start = function(b) {
            this.$AdsVideoUploadSession3 = !1,
            a.prototype.start.call(this, b)
        }
        ;
        d.cancel = function() {
            this.$AdsVideoUploadSession3 = !0,
            a.prototype.cancel.call(this),
            this.$AdsVideoUploadSession1 !== null && this.$AdsVideoUploadSession1 !== void 0 && this.$AdsVideoUploadSession1.abort()
        }
        ;
        d.abandon = function() {
            this.$AdsVideoUploadSession3 = !0,
            a.prototype.abandon.call(this),
            this.$AdsVideoUploadSession1 !== null && this.$AdsVideoUploadSession1 !== void 0 && this.$AdsVideoUploadSession1.abort()
        }
        ;
        d.getEncodingTime = function() {
            return this.$AdsVideoUploadSession1.getEncodingElapsedTime()
        }
        ;
        d.getIsSphericalVideo = function() {
            switch (this.$AdsVideoUploadSession2) {
            case b("AdsVideoEncodingFormat").SPHERICAL:
                return !0;
            case b("AdsVideoEncodingFormat").NONSPHERICAL:
                return !1;
            default:
                return a.prototype.getIsSphericalVideo.call(this)
            }
        }
        ;
        d.__handlePostRequestFinished = function(b, c) {
            a.prototype.__handlePostRequestFinished.call(this, b, c),
            this.$AdsVideoUploadSession4()
        }
        ;
        d.$AdsVideoUploadSession4 = function() {
            var a = this;
            if (this.$AdsVideoUploadSession3)
                return;
            this.$AdsVideoUploadSession5 = !1;
            this.$AdsVideoUploadSession6 = !1;
            this.$AdsVideoUploadSession1 = new (b("AdsVideoEncodingAsyncNotifier"))(this.getVideoID());
            this.$AdsVideoUploadSession1.setOnStatusUpdateListener(function() {
                return a.$AdsVideoUploadSession7()
            });
            this.$AdsVideoUploadSession1.setOnFailedListener(function() {
                return a.$AdsVideoUploadSession8()
            });
            this.$AdsVideoUploadSession1.setOnFetchFailedListener(function() {
                return a.$AdsVideoUploadSession9()
            });
            this.$AdsVideoUploadSession1.setOnSuccessListener(function(b) {
                return a.$AdsVideoUploadSession10(b)
            });
            this.$AdsVideoUploadSession1.setOnEncodingStatusFetchStartListener(function() {
                return a.$AdsVideoUploadSession11()
            });
            this.$AdsVideoUploadSession1.setOnEncodingStatusFetchFinishListener(function() {
                return a.$AdsVideoUploadSession12()
            });
            this.__logEvent(b("VideoUploadLogger").EVENT_ENCODING_SUBSCRIBE_TO_VIDEO_STATUS);
            this.$AdsVideoUploadSession1.subscribeToAdsVideoStatus();
            b("setTimeout")(function() {
                return a.$AdsVideoUploadSession13(a.$AdsVideoUploadSession1)
            }, g)
        }
        ;
        d.$AdsVideoUploadSession13 = function(a) {
            if (this.$AdsVideoUploadSession5)
                return;
            if (this.$AdsVideoUploadSession3)
                return;
            this.__logEvent(b("VideoUploadLogger").EVENT_ENCODING_POLLING_FALLBACK);
            a.start()
        }
        ;
        d.__createReceiveRequestContext = function(a, c, d) {
            d = new (b("AdsVideoUploadRequestContext"))();
            this.__setupReceiveRequestContext(d, a, c);
            return d
        }
        ;
        d.__setupReceiveRequestContext = function(b, c, d, e) {
            a.prototype.__setupReceiveRequestContext.call(this, b, c, d),
            this.$AdsVideoUploadSession14 = c.session_id,
            b.setChunkSessionID(this.$AdsVideoUploadSession14)
        }
        ;
        d.__createPostRequestContext = function(a) {
            var c = new (b("AdsVideoUploadRequestContext"))();
            this.__setupPostRequestContext(c, a);
            return c
        }
        ;
        d.__setupPostRequestContext = function(b, c) {
            a.prototype.__setupPostRequestContext.call(this, b, c),
            b.setChunkSessionID(this.$AdsVideoUploadSession14)
        }
        ;
        d.$AdsVideoUploadSession10 = function(a) {
            if (this.$AdsVideoUploadSession3) {
                this.__logEvent("encode.client.encoding_abort_observed");
                return
            }
            this.$AdsVideoUploadSession5 || (this.$AdsVideoUploadSession5 = !0,
            this.__logEvent(b("VideoUploadLogger").EVENT_ENCODING_SUCCESS_OBSERVED, {
                elapsed_time: Math.round(this.getEncodingTime())
            }),
            this.inform(b("AdsVideoUploadEvents").ENCODING_SUCCESS, a))
        }
        ;
        d.$AdsVideoUploadSession7 = function() {
            if (this.$AdsVideoUploadSession3) {
                this.__logEvent("encode.client.encoding_abort_observed");
                return
            }
            this.$AdsVideoUploadSession6 || (this.__logEvent(b("VideoUploadLogger").EVENT_ENCODING_START_OBSERVED),
            this.$AdsVideoUploadSession6 = !0)
        }
        ;
        d.$AdsVideoUploadSession8 = function() {
            this.__logEvent(b("VideoUploadLogger").EVENT_ENCODING_FAIL_OBSERVED),
            this.inform(b("AdsVideoUploadEvents").ENCODING_ERROR),
            b("AdsMgmtPerfScenarioController").endScenariosWithTrigger("ads_video_edit_fail", "outside_flux", null)
        }
        ;
        d.$AdsVideoUploadSession9 = function() {
            this.__logEvent(b("VideoUploadLogger").EVENT_FETCH_FAIL_OBSERVED),
            this.inform(b("AdsVideoUploadEvents").ENCODING_ERROR),
            b("AdsMgmtPerfScenarioController").endScenariosWithTrigger("ads_video_edit_fail", "outside_flux", null)
        }
        ;
        d.$AdsVideoUploadSession11 = function() {
            this.__logEvent(b("VideoUploadLogger").EVENT_STARTED_FETCHING_STATUS, {})
        }
        ;
        d.$AdsVideoUploadSession12 = function() {
            this.__logEvent(b("VideoUploadLogger").EVENT_FINISHED_FETCHING_STATUS, {})
        }
        ;
        d.__getVideoUploadStartRequestManager = function(a, c, d, e, f, g, h, i) {
            return new (b("AdsVideoUploadStartRequestManager"))(a,c,d,e,f,g,h,i)
        }
        ;
        d.__getVideoUploadReceiveRequestManager = function(a, c) {
            return new (b("AdsVideoUploadReceiveRequestManager"))(a,c.max_transport_retries,c.max_transport_retry_timeout,c.max_server_retries,c.response_timeout_enabled,c.max_response_timeout_retries,c.response_timeout_speed_variation_factor_ppt,c.transport_retry_interval_base,c.server_retry_interval_base,c.receive_errors_force_retry,c.access_token,c.resumability_enabled,c.resumability_async_enabled,c.resumable_service_name,c.resumable_service_domain,c.datr,c.resumability_min_file_size,c.resumable_service_proxy_receive,c.resumable_reset_transport_retries_on_progress,c.add_flow_capture_header)
        }
        ;
        d.__getVideoUploadPostRequestManager = function(a, c) {
            return new (b("AdsVideoUploadPostRequestManager"))(a,c.post_max_transport_retries,c.post_transport_retry_interval_base,c.post_max_server_retries,c.post_server_retry_interval_base)
        }
        ;
        return c
    }(b("VideoUploadSession"));
    e.exports = a
}
), null);
__d("ExtensibleSproutsItemType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        ACHIEVEMENT: "ACHIEVEMENT",
        ADVERTISE: "ADVERTISE",
        AIRBENDER_AVATAR: "AIRBENDER_AVATAR",
        APP_INTEGRATION_AODOCS: "APP_INTEGRATION_AODOCS",
        APP_INTEGRATION_BOX: "APP_INTEGRATION_BOX",
        APP_INTEGRATION_CORNERSTONE: "APP_INTEGRATION_CORNERSTONE",
        APP_INTEGRATION_DROPBOX: "APP_INTEGRATION_DROPBOX",
        APP_INTEGRATION_EGNYTE: "APP_INTEGRATION_EGNYTE",
        APP_INTEGRATION_GDRIVE: "APP_INTEGRATION_GDRIVE",
        APP_INTEGRATION_JIRA: "APP_INTEGRATION_JIRA",
        APP_INTEGRATION_ONEDRIVE: "APP_INTEGRATION_ONEDRIVE",
        APP_INTEGRATION_QUIP: "APP_INTEGRATION_QUIP",
        APP_INTEGRATION_SHAREPOINT: "APP_INTEGRATION_SHAREPOINT",
        APP_INTEGRATION_TASKS: "APP_INTEGRATION_TASKS",
        APP_INTEGRATION_TRELLO: "APP_INTEGRATION_TRELLO",
        APP_INTEGRATIONS_MENU: "APP_INTEGRATIONS_MENU",
        AUDIO: "AUDIO",
        BACKDATE: "BACKDATE",
        BC_SUPPORT: "BC_SUPPORT",
        BIRTHDAY_CAMERA: "BIRTHDAY_CAMERA",
        BIRTHDAY_STICKER: "BIRTHDAY_STICKER",
        BREAKING_NEWS: "BREAKING_NEWS",
        CHATROOM: "CHATROOM",
        COMMUNITY_HELP: "COMMUNITY_HELP",
        COMMUNITY_LIVE_CHAT: "COMMUNITY_LIVE_CHAT",
        COVID_BUSINESS_POST: "COVID_BUSINESS_POST",
        DOC: "DOC",
        DRAFT_FOR: "DRAFT_FOR",
        ELLIPSIS: "ELLIPSIS",
        EVENTS: "EVENTS",
        FACECAST: "FACECAST",
        FAN_SUBMISSION_REQUEST: "FAN_SUBMISSION_REQUEST",
        FB_GROUPS_CHATS: "FB_GROUPS_CHATS",
        FILE: "FILE",
        FUN_FACT: "FUN_FACT",
        FUNDRAISER: "FUNDRAISER",
        GET_MESSAGES: "GET_MESSAGES",
        GIF: "GIF",
        GIFT_CARD_PURCHASE: "GIFT_CARD_PURCHASE",
        GROUP_JOIN_CTA: "GROUP_JOIN_CTA",
        GROUP_MEET_UP: "GROUP_MEET_UP",
        GROUP_VOTER_PLEDGE_DRIVE: "GROUP_VOTER_PLEDGE_DRIVE",
        GROUP_WELCOME_POST: "GROUP_WELCOME_POST",
        INSPIRATION_CAMERA: "INSPIRATION_CAMERA",
        JOB: "JOB",
        LIFE_EVENT: "LIFE_EVENT",
        LIST: "LIST",
        LIVE_FORMAT: "LIVE_FORMAT",
        LIVING_ROOM: "LIVING_ROOM",
        LOCAL_ALERTS: "LOCAL_ALERTS",
        LOCAL_DEV_PLATFORM: "LOCAL_DEV_PLATFORM",
        LOCATION: "LOCATION",
        MARKDOWN: "MARKDOWN",
        MEDIA: "MEDIA",
        MILESTONE: "MILESTONE",
        MINUTIAE: "MINUTIAE",
        MOVIES: "MOVIES",
        MULTIMEDIA: "MULTIMEDIA",
        MUSIC: "MUSIC",
        NEON: "NEON",
        NOMINATIONS: "NOMINATIONS",
        NOTE: "NOTE",
        PAGE_SELL: "PAGE_SELL",
        PAID_VIRTUAL_EVENT_GATED_POST: "PAID_VIRTUAL_EVENT_GATED_POST",
        PHOTO: "PHOTO",
        PUBLISH_JOB_POST: "PUBLISH_JOB_POST",
        Q_AND_A: "Q_AND_A",
        RECOMMENDATION: "RECOMMENDATION",
        RECRUITING_CANDIDATE: "RECRUITING_CANDIDATE",
        REELS: "REELS",
        SCHEDULE_POST: "SCHEDULE_POST",
        SELL: "SELL",
        SELL_SOMETHING: "SELL_SOMETHING",
        SEND_GIFT: "SEND_GIFT",
        SHARE: "SHARE",
        SHIFT_SWAP: "SHIFT_SWAP",
        SPONSOR_TAG: "SPONSOR_TAG",
        STICKER: "STICKER",
        SUGGESTED_PHOTO: "SUGGESTED_PHOTO",
        SUPPORT_NOW: "SUPPORT_NOW",
        TAG_EVENT: "TAG_EVENT",
        TAG_EVENT_TICKET: "TAG_EVENT_TICKET",
        TAG_PRODUCT: "TAG_PRODUCT",
        TEXT_BACKGROUND: "TEXT_BACKGROUND",
        THREE_D_PHOTO: "THREE_D_PHOTO",
        THREESIXTY_CAPTURE: "THREESIXTY_CAPTURE",
        TODO_LIST: "TODO_LIST",
        VIDEO: "VIDEO",
        VIDEO_MEETUP: "VIDEO_MEETUP",
        VISUAL_POLLS: "VISUAL_POLLS",
        WITH_TAG: "WITH_TAG",
        WOODHENGE_SUPPORT: "WOODHENGE_SUPPORT",
        WORK_CHECKLIST: "WORK_CHECKLIST",
        WORK_FILE: "WORK_FILE",
        WORK_MULTI_ATTACHMENTS: "WORK_MULTI_ATTACHMENTS",
        WORK_SCHEDULE_LIVE: "WORK_SCHEDULE_LIVE",
        BLOOD_DONATION: "BLOOD_DONATION",
        AMA: "AMA",
        VIDEO_EDITOR: "VIDEO_EDITOR",
        SOTTO_CTA: "SOTTO_CTA",
        COLLABORATIVE_FORMAT: "COLLABORATIVE_FORMAT",
        INCENTIVES_AMA: "INCENTIVES_AMA",
        COMMUNITY_QNA: "COMMUNITY_QNA",
        WORK_AMA: "WORK_AMA",
        JOB_SEARCH: "JOB_SEARCH",
        MARKETPLACE_VEHICLE: "MARKETPLACE_VEHICLE",
        WRITE_POST: "WRITE_POST",
        DISCUSSION: "DISCUSSION",
        MORE: "MORE",
        POST_AS_ANONYMOUS_AUTHOR: "POST_AS_ANONYMOUS_AUTHOR",
        STORY_TEXT_BACKGROUND: "STORY_TEXT_BACKGROUND",
        STORY_SELFIE: "STORY_SELFIE",
        STORY_BOOMERANG: "STORY_BOOMERANG",
        STORY_POLL: "STORY_POLL",
        STORY_MUSIC: "STORY_MUSIC",
        STORY_LOCATION: "STORY_LOCATION",
        STORY_DARKROOM: "STORY_DARKROOM",
        STORY_PHOTOBOOTH: "STORY_PHOTOBOOTH",
        STORY_MOOD: "STORY_MOOD",
        STORY_OFFER_HELP: "STORY_OFFER_HELP",
        STORY_ARCHIVE: "STORY_ARCHIVE",
        ANIMATED_EFFECTS: "ANIMATED_EFFECTS",
        CIVIC_CTA: "CIVIC_CTA",
        CONTACT_YOUR_REPRESENTATIVE: "CONTACT_YOUR_REPRESENTATIVE",
        FIND_PLAYERS: "FIND_PLAYERS",
        GET_BOOKINGS: "GET_BOOKINGS",
        GET_QUOTE: "GET_QUOTE",
        GET_DIRECTIONS: "GET_DIRECTIONS",
        GET_TICKET: "GET_TICKET",
        GET_PHONE_CALLS: "GET_PHONE_CALLS",
        GET_SHOPS: "GET_SHOPS",
        GET_WHATSAPP_MESSAGES: "GET_WHATSAPP_MESSAGES",
        LIVING_ROOM_PAGE: "LIVING_ROOM_PAGE",
        LIVING_ROOM_PROFILE: "LIVING_ROOM_PROFILE",
        ORDER_FOOD: "ORDER_FOOD",
        PAGE_OFFER: "PAGE_OFFER",
        PAGE_RECOMMENDATIONS_ADD_TAGS: "PAGE_RECOMMENDATIONS_ADD_TAGS",
        PLAY_WITH_FRIENDS: "PLAY_WITH_FRIENDS",
        PLANETARIUM: "PLANETARIUM",
        QUILT: "QUILT",
        SELL_MULTIPLE_ITEMS: "SELL_MULTIPLE_ITEMS",
        SALES_PROMO: "SALES_PROMO",
        SPOTIFY_SHARE: "SPOTIFY_SHARE",
        SUGGESTED_PHOTO_CAPTION: "SUGGESTED_PHOTO_CAPTION",
        TRANSLITERATION: "TRANSLITERATION",
        VIDEO_SUGGESTIONS: "VIDEO_SUGGESTIONS"
    });
    e.exports = a
}
), null);
__d("OGComposerSuggestionMechanisms", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        MOVIE_THEATER_CHECKIN: "movie_theater_checkin",
        AIRPORT_CHECKIN: "airport_checkin",
        HOME_CHECKIN: "home_checkin",
        COOL_PLACE_CHECKIN: "cool_place_checkin",
        TRAIN_CHECKIN: "train_checkin",
        CURRENT_SONG: "current_song",
        RECENT_ACTION: "recent_action",
        AUDIO_FINGERPRINT: "audio_fingerprint",
        WHITELISTED_SUGGESTION: "whitelisted_suggestion",
        UNIT_TEST: "unit_test",
        FEED_SPECIFIC_SUGGESTION: "feed_specific_suggestion",
        DETECTED_FROM_TEXT_INPUT: "detected_from_text_input",
        EVENT_VENUE_CHECKIN: "event_venue_checkin",
        SUPPORTING_CLASSIFIER: "supportingclassifier",
        LISTENING_LINK_CLASSIFIER: "listeninglinkclassifier",
        LINK_TO_OG_CLASSIFIER: "link_to_og_classifier",
        GK_BASED_SUGGESTION_CLASSIFIER: "gk_based_suggestion_classifier",
        EVENT_TO_ATTEND: "event_to_attend",
        GK_BASED_PRODUCTION_PROMPT_CLASSIFIER: "gk_based_production_prompt_classifier",
        MOVIE_THEATER_CHECKIN_SUGGESTIFIER: "movie_theater_checkin_suggestifier",
        AIRPORT_CHECKIN_SUGGESTIFIER: "airport_checkin_suggestifier",
        COOL_PLACE_CHECKIN_SUGGESTIFIER: "cool_place_checkin_suggestifier",
        TRAIN_CHECKIN_SUGGESTIFIER: "train_checkin_suggestifier",
        EVENT_VENUE_CHECKIN_SUGGESTIFIER: "event_venue_checkin_suggestifier",
        EVENT_TO_ATTEND_SUGGESTIFIER: "event_to_attend_suggestifier",
        SPA_CHECKIN: "spa_checkin",
        SPA_CHECKIN_SUGGESTIFIER: "spa_checkin_suggestifier",
        MEDICAL_CHECKIN: "medical_checkin",
        MEDICAL_CHECKIN_SUGGESTIFIER: "medical_checkin_suggestifier",
        TRANSPORTATION_CHECKIN: "transportation_checkin",
        TRANSPORTATION_CHECKIN_SUGGESTIFIER: "transportation_checkin_suggestifier",
        SWEETS_SHOP_CHECKIN: "sweets_shop_checkin",
        SWEETS_SHOP_CHECKIN_SUGGESTIFIER: "sweets_shop_checkin_suggestifier",
        FAST_FOOD_CHECKIN: "fast_food_checkin",
        FAST_FOOD_CHECKIN_SUGGESTIFIER: "fast_food_checkin_suggestifier",
        SPECIFIC_CUISINE_CHECKIN: "specific_cuisine_checkin",
        SPECIFIC_CUISINE_SUGGESTIFIER: "specific_cuisine_checkin_suggestifier",
        TOPIC_BAR_CHECKIN: "topic_bar_checkin",
        TOPIC_BAR_CHECKIN_SUGGESTIFIER: "topic_bar_checkin_suggestifier",
        RESTAURANT_CHECKIN: "restaurant_checkin",
        RESTAURANT_CHECKIN_SUGGESTIFIER: "restaurant_checkin_suggestifier",
        COFFEE_SHOP_CHECKIN: "coffee_shop_checkin",
        COFFEE_SHOP_SUGGESTIFIER: "coffee_shop_checkin_suggestifier",
        MINUTIAE_TO_PLACE_MOVIE_THEATER_CHECKIN: "minutiae_to_place_movie_theater_checkin",
        MINUTIAE_TO_PLACE_TRAVELING_CHECKIN: "minutiae_to_place_traveling_checkin",
        MINUTIAE_TO_PLACE_EVENT_TO_ATTEND: "minutiae_to_place_event_to_attend",
        MINUTIAE_TO_PLACE_CELEBRATING: "minutiae_to_place_celebrating",
        MINUTIAE_TO_PLACE_FEELING_HUNGRY: "minutiae_to_place_feeling_hungry",
        MINUTIAE_TO_PLACE_GAME_STADIUM_CHECKIN: "minutiae_to_place_game_stadium_checkin",
        MINUTIAE_TO_PLACE_CONCERT_VENUE_CHECKIN: "minutiae_to_place_concert_venue_checkin",
        MINUTIAE_TO_PLACE_COOL_PLACE_CHECKIN: "minutiae_to_place_cool_place_checkin",
        MINUTIAE_TO_PLACE_FEELING_RELAXED: "minutiae_to_place_feeling_relaxed",
        MINUTIAE_TO_PLACE_CELEBRATING_HOLIDAY: "minutiae_to_place_celebrating_holiday",
        MINUTIAE_TO_PLACE_FEELING: "minutiae_to_place_feeling",
        MINUTIAE_TO_PLACE_FEELING_TO_HOTEL_CHECKIN: "minutiae_to_place_feeling_hotel_checking",
        MINUTIAE_TO_PLACE_CELEBRATING_EXPERIMENT: "minutiae_to_place_celebrating_experiment"
    });
    e.exports = a
}
), null);
__d("PUWMethods", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        DRAGDROP: "dragdrop",
        FILE_SELECTOR: "file_selector",
        VAULT: "vault",
        RECENT_PHOTOS: "recent_photos",
        PHOTOS_OF_YOU: "photos_of_you",
        METHOD_EDITOR: "editor",
        SUGGESTIONS: "suggestions",
        CAMERA: "camera",
        COPYPASTE: "copypaste",
        DISABLE_SPHERICAL: "disable_spherical"
    });
    e.exports = a
}
), null);
__d("PagesComposerCanvasVideoPostAttributes", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        CTA_LINK: "cta_link",
        CTA_TYPE: "cta_type",
        LINK_TITLE: "link_title",
        VIDEO_ID: "video_id"
    });
    e.exports = a
}
), null);
__d("PagesComposerCarouselPostChildAttachmentAttributes", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        PICTURE: "picture",
        NAME: "name",
        DESCRIPTION: "description",
        LINK: "link",
        SELECTED: "selected",
        SCRAPED: "scraped",
        IMAGE_FBID: "image_fbid",
        IMAGE_SOURCE: "image_source",
        ORIGINAL_DIMENSION_HEIGHT: "original_dimensions_height",
        ORIGINAL_DIMENSION_WIDTH: "original_dimensions_width",
        CROPPING_START_POINT_X: "cropping_startPoint_x",
        CROPPING_START_POINT_Y: "cropping_startPoint_y",
        CROPPING_SOURCE_DIMENSION_HEIGHT: "cropping_source_dimension_height",
        CROPPING_SOURCE_DIMENSION_WIDTH: "cropping_source_dimension_width",
        VIDEO_ID: "video_id",
        CTA_TYPE: "cta_type"
    });
    e.exports = a
}
), null);
__d("PagesComposerCarouselPostLogAttributes", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        USE_CAROUSEL_COMPOSER: "use_carousel_composer",
        CAROUSEL_INCOMPATIBLE: "carousel_incompatible",
        CAROUSEL_INCOMPATIBLE_TYPE: "carousel_incompatible_type",
        SCRAPED_IMAGE_NUM_OLD: "scraped_image_num_old",
        SCRAPED_URL: "scraped_url",
        SCRAPED_TIME: "scraped_time",
        COMPOSER_LOCATION: "composer_location",
        HIDE_END_CARD: "hide_end_card",
        SOURCE_ATTACHMENT: "source_attachment",
        PREFILL_SCRAPE_URL: "prefill_scrape_url"
    });
    e.exports = a
}
), null);
__d("PagesComposerDraftPostEditJSEvents", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        COMPOSER_POST: "composer_post",
        COMPOSER_ENTRY: "composer_entry"
    });
    e.exports = a
}
), null);
__d("PagesCrosspostChannel", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        GROUP: "group",
        INSTAGRAM: "instagram"
    });
    e.exports = a
}
), null);
__d("PlaceRecommendationEntrypoint", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        CHEVRON: "chevron",
        COMMENT: "comment",
        COMPARISON_CARD: "comparison_card",
        INTERACTIVE_STORY_CARD: "interactive_story_card",
        BOOKMARK: "bookmark",
        GROUP_COMPOSER: "group_composer",
        GROUP_TAB_COMPOSER: "group_tab_composer",
        SPROUT: "sprout",
        POST_UPSELL: "post_upsell",
        LEARN: "learn",
        PAST_REX: "past_rex",
        PLACE_PICKER: "place_picker",
        REX_BUTTON: "rex_button",
        UPSELL_CTA: "upsell_CTA",
        CITY_GUIDES: "city_guides",
        GROUP_COMPOSER_ACTION_BUTTON: "group_composer_action_button",
        FOLLOW_UP_UNIT_SHARE_NOW: "follow_up_unit_share_now",
        FOLLOW_UP_UNIT_EDIT_POST: "follow_up_unit_edit_post",
        FEED_UPSELL: "feed_upsell",
        FEED_IMPLICIT_UPSELL: "feed_implicit_upsell",
        FULL_MAP: "full_map",
        FULL_MAP_FEED_ATTACHMENT: "full_map_feed_attachment",
        FULL_MAP_PERMALINK: "full_map_permalink",
        FULL_MAP_ANNOTATION: "full_map_annotation",
        FULL_MAP_HSCROLL: "full_map_hscroll",
        FULL_MAP_MAPVIEW: "full_map_mapview",
        FULL_MAP_LISTVIEW: "full_map_listview",
        IMPLICIT_MAP: "implicit_map",
        LOOKING_FOR_MINUTIAE: "looking_for_minutiae",
        NEIGHBORHOOD_HELP: "neighborhood_help",
        NOTIFICATION: "notification",
        NUX: "nux",
        PLACE_SEARCH: "place_search",
        REJECT: "reject",
        SLOT: "slot",
        STORY: "story",
        UNSOLICITED: "unsolicited",
        XOUT: "xout",
        SERVICES_SOCIAL_REX_CROSSPOST: "services_social_rex_crosspost"
    });
    e.exports = a
}
), null);
__d("PrivacyBaseState", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        EVERYONE: "everyone",
        FRIENDS: "friends",
        FRIENDS_OF_FRIENDS: "friends_of_friends",
        SELF: "self"
    });
    e.exports = a
}
), null);
__d("QuestionPollTypeJSEnum", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        NON_POLL: 0,
        CHOOSE_ONE: 1,
        CHOOSE_MULTIPLE: 2,
        RANKED: 3,
        GIF_CHOOSE_ONE: 4,
        IMAGE_CHOOSE_ONE: 5,
        VISUAL_TEXT_CHOOSE_ONE: 6,
        IMAGE_CHOOSE_MULTIPLE: 7
    });
    e.exports = a
}
), null);
__d("ReactComposerFeatureType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        EVENT: "event",
        FILE: "file",
        LINK: "link",
        MENTION_TAG: "mention_tag",
        MILESTONE: "milestone",
        PAGE_CTA: "page_cta",
        PHOTO_TAG: "photo_tag",
        PRIVACY: "privacy",
        TEXT: "text",
        COLLECTIONS: "collections",
        COLLECTION_CREATION: "collection_creation",
        MESSAGING: "messaging",
        ALBUM: "album",
        BREAKING_NEWS: "breaking_news",
        ASSET_3D: "ASSET_3D",
        LOCAL_ALERTS: "local_alerts",
        GET_SHOWTIMES: "get_showtimes",
        PAGES_INTERCEPTION: "pages_interception",
        COVID_BUSINESS_POST: "covid_business_post"
    });
    e.exports = a
}
), null);
__d("ReactComposerLoggingName", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        ADVERTISE_SPROUT: "advertise_sprout",
        ALBUM: "album",
        ALBUM_SPROUT: "album_sprout",
        ALBUM_TAB_SELECTOR: "album_tab_selector",
        ALBUM_TAGGER: "album_tagger",
        AMA_SPROUT: "ama_sprout",
        APP_INTEGARTION_TASKS: "app_integration_tasks",
        APP_INTEGRATION_AODOCS: "app_integration_aodocs",
        APP_INTEGRATION_BOX: "app_integration_box",
        APP_INTEGRATION_CORNERSTONE: "app_integration_cornerstone",
        APP_INTEGRATION_DROPBOX: "app_integration_dropbox",
        APP_INTEGRATION_EGNYTE: "app_integration_egnyte",
        APP_INTEGRATION_GDRIVE: "app_integration_gdrive",
        APP_INTEGRATION_JIRA: "app_integration_jira",
        APP_INTEGRATION_ONEDRIVE: "app_integration_onedrive",
        APP_INTEGRATION_QUIP: "app_integration_quip",
        APP_INTEGRATION_SHAREPOINT: "app_integration_sharepoint",
        APP_INTEGRATION_TRELLO: "app_integration_trello",
        ASSET_3D: "asset_3d",
        AUDIENCE_SELECTOR: "audience_selector",
        AYMT_CTA_UPSELL: "aymt_cta_upsell",
        BACKDATE_TAG_SPROUT: "backdate_tag_sprout",
        BACKDATE_TAGGER: "backdate_tagger",
        BC_SUPPORT: "bc_support",
        BLOOD_DONATION: "blood_donation",
        BREAKING_NEWS: "breaking_news",
        BREAKING_NEWS_SPROUT: "breaking_news_sprout",
        CANVAS_EDITOR: "canvas_editor",
        CHATROOM: "chatroom",
        CHEVRON_MENU_EDIT_POST: "chevron_menu/edit_post",
        CIVIC_PROPOSAL: "civic_proposal",
        COLLECTION_CLEAR_BUTTON: "collection_clear_button",
        COLLECTION_SELECTED: "collection_selected",
        COLLECTIONS_CREATE_CANCEL_BUTTON: "collections_create_cancel_button",
        COLLECTIONS_CREATE_SHARING_SPACE_CANCEL_BUTTON: "collections_create_sharing_space_cancel_button",
        COLLECTIONS_CREATE_SHARING_SPACE_SUBMIT_BUTTON: "collections_create_sharing_space_submit_button",
        COLLECTIONS_CREATE_SUBMIT_BUTTON: "collections_create_submit_button",
        COLLECTIONS_SELECTOR_BUTTON: "collections_selector_button",
        COLLECTIONS_SELECTOR_CREATE_BUTTON: "collections_selector_create_button",
        COLLECTIONS_SELECTOR_CREATE_SHARING_SPACE_BUTTON: "collections_selector_create_sharing_space_button",
        CONTACT_YOUR_REPRESENTATIVE_SPROUT: "contact_your_representative_sprout",
        CONTACT_YOUR_REPRESENTATIVE_TAGGER: "contact_your_representative_tagger",
        CONTENT_WARNINGS_TAGGER: "content_warnings_tagger",
        COVID_BUSINESS_POST_SPROUT: "covid_business_post_sprout",
        CRISIS_BOOKMARK: "crisis_bookmark",
        CRISIS_PAGE: "crisis_page",
        CTA_UPSELL: "cta_upsell",
        DELETE_POST_EDIT_BUTTON: "delete_post_dialog/edit_post_button",
        DOC_SPROUT: "doc_sprout",
        DOC_TAB_SELECTOR: "doc_tab_selector",
        DRAFT_FOR_SPROUT: "draft_for_sprout",
        DRAFT_FOR_TAB_SELECTOR: "draft_for_tab_selector",
        ELLIPSIS_SPROUT: "ellipsis_sprout",
        ESCAPE_KEY: "escape_key",
        EVENT_IMPORT_BY_INTERCEPT: "event_import_by_intercept",
        EVENT_SPROUT: "event_sprout",
        EVENT_TAB_SELECTOR: "event_tab_selector",
        FILE_DROPPED: "file_dropped",
        FILE_SPROUT: "file_sprout",
        FILE_TAB_SELECTOR: "file_tab_selector",
        FIND_PLAYERS_SPROUT: "find_players_sprout",
        FORMATTED_TEXT_BUTTON: "formatted_text_button",
        FORMATTED_TEXT_SPROUT: "formatted_text_sprout",
        FORMATTED_TEXT_TAGGER: "formatted_text_tagger",
        FRIEND_TAG_SPROUT: "friend_tag_sprout",
        FUN_FACT: "fun_fact",
        FUN_FACT_SPROUT: "fun_fact_sprout",
        FUNDRAISER_SPROUT: "fundraiser_sprout",
        GAME_TAB_SELECTOR: "game_tab_selector",
        GET_BOOKINGS_SPROUT: "get_bookings_sprout",
        GET_DIRECTIONS_SPROUT: "get_directions_sprout",
        GET_MESSAGES_SPROUT: "get_messages_sprout",
        GET_PHONE_CALLS_SPROUT: "get_phone_calls_sprout",
        GET_QUOTE_SPROUT: "get_quote_sprout",
        GET_SHOPS_SPROUT: "get_shops_sprout",
        GET_SHOWTIMES_SPROUT: "get_showtimes_sprout",
        GET_SHOWTIMES_TAGGER: "get_showtimes_tagger",
        GET_TICKET_SPROUT: "get_ticket_sprout",
        GET_WHATSAPP_MESSAGES_SPROUT: "get_whatsapp_messages_sprout",
        GIF_SPROUT: "gif_sprout",
        GIFT_CARD_SPROUT: "gift_card_sprout",
        GROUP_ANONYMOUS_POST_INLINE_COMPOSER: "group_anonymous_post_inline_composer",
        GROUP_ANONYMOUS_POST_SELECTOR: "group_anonymous_post_selector",
        GROUP_JOIN_CTA: "group_join_cta",
        GROUP_MEET_UP: "group_meet_up",
        GROUP_MEET_UP_SELECTOR: "group_meet_up_selector",
        GROUP_MEETUP_EDIT_BUTTON: "group_meetup_edit_button",
        GROUP_POLL_SPROUT: "group_poll_sprout",
        GROUP_SELECTOR: "group_selector",
        GROUP_VOTER_PLEDGE_DRIVE_SPROUT: "group_voter_pledge_drive_sprout",
        INLINE_COMPOSER: "inline_composer",
        JOB_POST_ATTACHMENT: "job_post_attachment",
        JOBS_COMPOSER: "jobs_composer",
        JOBS_SPROUT: "jobs_sprout",
        JOBS_TAB_SELECTOR: "jobs_tab_selector",
        KNOWLEDGE_NOTES_SELECTOR: "knowledge_notes_selector",
        LEARNING_COURSE_TAB_SELECTOR: "learning_course_tab_selector",
        LEARNING_THIRD_PARTY_LINK_TAB_SELECTOR: "learning_third_party_link_tab_selector",
        LINK_DROPPED: "link_dropped",
        LINK_PASTED: "link_pasted",
        LINK_REMOVE_BUTTON: "link_remove_button",
        LINK_SPROUT: "link_sprout",
        LIST_SPROUT: "list_sprout",
        LIVE_VIDEO_SPROUT: "live_video_sprout",
        LIVE_VIDEO_TAB_SELECTOR: "live_video_tab_selector",
        LIVING_ROOM_GROUPS_PILL: "living_room_groups_pill",
        LIVING_ROOM_SHARE_BUTTON: "living_room_share_button",
        LIVING_ROOM_SPROUT: "living_room_sprout",
        LOCAL_ALERTS: "local_alerts",
        LOCAL_ALERTS_SPROUT: "local_alerts_sprout",
        LOCAL_DEV_PLATFORM_SPROUT: "local_dev_platform_sprout",
        LOCATION_TAG_SPROUT: "location_tag_sprout",
        LOCATION_TAGGER: "location_tagger",
        MARKDOWN_SPROUT: "markdown_sprout",
        MARKDOWN_TAGGER: "markdown_tagger",
        MARKETPLACE: "marketplace",
        MEDIA_ATTACHMENT_UPLOAD_BUTTON: "media_attachment_upload_button",
        MEDIA_COLLAGE_PLUS_BUTTON: "media_collage_plus_button",
        MEDIA_COMPOSER_ON_INIT: "media_composer_on_init",
        MEDIA_FILE_DROPPED: "media_file_dropped",
        MEDIA_FILE_PASTED: "media_file_pasted",
        MEDIA_FOLDER_DROPPED: "media_folder_dropped",
        MEDIA_INLINE_ENTRY: "media_inline_entry",
        MEDIA_SPROUT: "media_sprout",
        MEDIA_TAB_SELECTOR: "media_tab_selector",
        MEDIA_TAGGER: "media_tagger",
        MEDIA_UPLOADS_PLUS_BUTTON: "media_uploads_plus_button",
        MENTIONS_INPUT_FOCUS: "mentions_input_focus",
        MESSAGING_TAGGER: "messaging_tagger",
        MESSENGER_PHOTO_VIEWER_SHARE: "messenger_photo_viewer_share",
        MILESTONE_SPROUT: "milestone_sprout",
        MINUTIAE_SPROUT: "minutiae_sprout",
        MINUTIAE_TAGGER: "minutiae_tagger",
        MLE_TAB_SELECTOR: "mle_tab_selector",
        MODAL_PAGE_INVITE_DASHBOARD: "modal_page_invite_dashboard",
        MUSIC_SPROUT: "music_sprout",
        NOTES_SPROUT: "notes_sprout",
        NOTES_TAB_SELECTOR: "notes_tab_selector",
        ORDER_FOOD_SPROUT: "order_food_sprout",
        OTHERS: "others",
        PAGES_ACTION_BAR_RECOMMEND: "pages_action_bar_recommend",
        PAGES_CTA_SELECTOR: "pages_cta_selector",
        PAGES_EXTRA_TAB_SELECTOR: "pages_extra_tab_selector",
        PAGES_INTERCEPTION_TAGGER: "pages_interception_tagger",
        PAID_VIRTUAL_EVENT_GATED_POST_TAGGER: "paid_virtual_event_gated_post_tagger",
        PEOPLE_TAGGER: "people_tagger",
        PEOPLE_TAGGER_SPROUT: "people_tagger_sprout",
        PHOTO_SPROUT: "photo_sprout",
        PHOTO_UPLOAD_DONE: "photo_upload_done",
        PLAY_WITH_FRIENDS_SPROUT: "play_with_friends_sprout",
        PREFILL_HOLIDAY_CARD_SHARE_BUTTON: "prefill_holiday_card_share_button",
        PRODUCT_TAG_SPROUT: "product_tag_sprout",
        PRODUCT_TAGGER: "product_tagger",
        PRODUCT_TAGGER_BANNER_UPSELL: "product_tagger_banner_upsell",
        PRODUCTS_TAG_SPROUT: "products_tag_sprout",
        PROMPT: "prompt",
        PUBLISHER_ABTEST_HOLDOUT_TAGGER: "publisher_abtest_holdout_tagger",
        QA_TAB_SELECTOR: "qa_tab_selector",
        QANDA_SPROUT: "qanda_sprout",
        QANDA_TAB_SELECTOR: "qanda_tab_selector",
        QUESTION_SPROUT: "question_sprout",
        QUESTION_TAB_SELECTOR: "question_tab_selector",
        QUICKSILVER_SHARE_SCORE_BUTTON: "quicksilver_share_score_button",
        QUILT_SPROUT: "quilt_sprout",
        QUIZ_TAB_SELECTOR: "quiz_tab_selector",
        RECOMMENDATIONS_DASHBOARD: "recommendations_dashboard",
        RECOMMENDATIONS_SPROUT: "recommendations_sprout",
        RECOMMENDATIONS_TAB_SELECTOR: "recommendations_tab_selector",
        RECRUITING_CANDIDATE: "recruiting_candidate",
        REP_TAGGING: "rep_tagging",
        SALES_PROMO_SPROUT: "sales_promo_sprout",
        SALES_PROMO_TAB_SELECTOR: "sales_promo_tab_selector",
        SCHEDULE_POST_SPROUT: "schedule_post_sprout",
        SELL_SOMETHING_SPROUT: "sell_something_sprout",
        SELL_TAB_SELECTOR: "sell_tab_selector",
        SEND_GIFT_TAB_SELECTOR: "send_gift_tab_selector",
        SHARE_NOW_MENU_ADD_TO_STORY: "share_now_menu/add_to_story",
        SHARE_NOW_MENU_POST_TO_GROUP: "share_now_menu/post_to_group",
        SHARE_NOW_MENU_SEND_MESSAGE: "share_now_menu/send_message",
        SHARE_NOW_MENU_SHARE_FRIEND_TIMELINE: "share_now_menu/share_friend_timeline",
        SHARE_NOW_MENU_SHARE_TO_PAGE: "share_now_menu/share_to_page",
        SHARE_NOW_MENU_WRITE_POST: "share_now_menu/write_post",
        SHARING_SPACES_CREATE_NEW_ALBUM: "sharing_spaces_create_new_album",
        SHARING_SPACES_NEXT_BUTTON: "sharing_spaces_next_button",
        SHIFT_SWAP_CREATION: "shift_swap_creation",
        SOTTO_CTA_SPROUT: "sotto_cta_sprout",
        SPONSOR_SPROUT: "sponsor_sprout",
        SPONSOR_TAGGER: "sponsor_tagger",
        STARS_TAGGER: "stars_tagger",
        STATUS_TAB_SELECTOR: "status_tab_selector",
        STICKER_SPROUT: "sticker_sprout",
        SUPPORT_NOW_SPROUT: "support_now_sprout",
        SUPPORT_NOW_TAGGER: "support_now_tagger",
        TAG_EVENT: "tag_event",
        TAG_EVENT_TICKET: "tag_event_ticket",
        TAGGER_SUMMARY_CONTACT_YOUR_REPRESENTATIVE: "tagger_summary_row/contact_your_representative",
        TAGGER_SUMMARY_LOCATION: "tagger_summary_row/location_tagger",
        TAGGER_SUMMARY_MINUTIAE: "tagger_summary_row/minutiae_tagger",
        TAGGER_SUMMARY_PEOPLE: "tagger_summary_row/people_tagger",
        TAGGER_SUMMARY_ROW: "tagger_summary_row",
        TAGGER_SUMMARY_TAG_EVENT: "tagger_summary_row/event_tagger",
        TARGETING_TAGGER: "targeting_tagger",
        TASK_TAB_SELECTOR: "task_tab_selector",
        TEENS_AUDIENCE_SELECTOR: "teens_audience_selector",
        TODO_LIST: "todo_list",
        VIDEO_EDITOR: "video_editor",
        VIDEO_MEETUP_SPROUT: "video_meetup_sprout",
        VIDEO_SPROUT: "video_sprout",
        VIDEO_SUGGESTIONS: "video_suggestions",
        VISUAL_POLL_SPROUT: "visual_poll_sprout",
        WOODHENGE_SUPPORT_SPROUT: "woodhenge_support_sprout",
        WORK_ACHIEVEMENT_SELECTOR: "work_achievement_selector",
        WORK_AMA_SPROUT: "work_ama_sprout",
        WORK_CHECKLIST_SPROUT: "work_checklist_sprout",
        WORK_COLLABORATION: "work_collaboration",
        WORK_FILE: "work_file",
        WORK_HASHTAG_SUGGESTIONS: "work_hashtag_suggestions",
        WORK_MULTI_ATTACHMENTS_SPROUT: "work_multi_attachments_sprout",
        WORK_SCHEDULE_LIVE_SPROUT: "work_schedule_live_sprout",
        WORK_SHARE_WHATS_NEW: "work_share_whats_new"
    });
    e.exports = a
}
), null);
__d("SlideshowAudioUtil", ["ix", "Image.react", "React", "fbglyph"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = {
        getMusicCategoryGlyph: function(a) {
            switch (a) {
            case "All Tracks":
                return h.jsx(b("Image.react"), {
                    src: g("129467")
                });
            case "User Uploaded":
                return h.jsx(b("Image.react"), {
                    src: g("128769")
                });
            case "Recently Used":
                return h.jsx(b("Image.react"), {
                    src: g("129053")
                });
            case "Energetic":
                return h.jsx(b("Image.react"), {
                    src: g("128852")
                });
            case "Inspirational":
                return h.jsx(b("Image.react"), {
                    src: g("128909")
                });
            case "Fun":
                return h.jsx(b("Image.react"), {
                    src: g("129302")
                });
            case "Trustworthy":
                return h.jsx(b("Image.react"), {
                    src: g("128881")
                });
            case "Modern":
                return h.jsx(b("Image.react"), {
                    src: g("129337")
                });
            default:
                return null
            }
        },
        storylineMoodCompare: function(a, b) {
            if (!a && !b)
                return !0;
            else if (!a || !b)
                return !1;
            return a.fileName === b.fileName && a.moodID === b.moodID && JSON.stringify(a.categories) === JSON.stringify(b.categories)
        }
    };
    e.exports = a
}
), null);
__d("SlideshowImageUtil", ["invariant", "SlideshowConstants", "immutable"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.getCroppingSpec = a;
    f.shouldCropImages = c;
    f.getCrops = d;
    f.calculateCropsForFormat = e;
    f.calculateDefaultCoordinates = p;
    f.getPreviewBoxDimensions = q;
    f.getFullSizeImageBoxCroppingSpec = r;
    f.getDefaultCroppingSpec = s;
    f.getHorizontalAlignmentForAPI = t;
    f.getFontSize = u;
    f.getFontWeight = v;
    f.getLineHeight = w;
    f.getOpacity = x;
    f.getTextoverlayMaxEdge = y;
    f.getTextoverlayPadding = z;
    f.getTextoverlayMargin = A;
    f.getScaleMultiplierFromCrops = B;
    f.getScaleMultiplier = C;
    f.getOuterTextboxCoordinatesForAPI = D;
    f.getInnerTextboxCoordinatesForAPI = E;
    f.convertHexToRGBA = F;
    f.calculateTextboxCoordinates = G;
    var h = b("SlideshowConstants").formats
      , i = "-"
      , j = 24
      , k = 1.3
      , l = 10
      , m = 460
      , n = 32
      , o = .8;
    function a(a, c, d, e) {
        if (e && a) {
            e = Object.keys(a)[0];
            a = a[e];
            return {
                format: b("SlideshowConstants").formats.Original,
                topLeft: a[0],
                bottomRight: a[1]
            }
        }
        return this.getFullSizeImageBoxCroppingSpec({
            width: d.width ? d.width : 0,
            height: d.height ? d.height : 0
        }, {
            width: c.width,
            height: c.height
        })
    }
    function c(a) {
        var b = a[0].width
          , c = a[0].height;
        for (var d = 0; d < a.length; d++) {
            var e = a[d];
            if (e.width !== b || e.height !== c)
                return !0
        }
        return !1
    }
    function d(a, b, c) {
        a = this.calculateDefaultCoordinates(a, c);
        return c = {},
        c[b] = a,
        c
    }
    function e(a, c, d) {
        var e = this;
        if (!a.size)
            return b("immutable").Map();
        var f = b("immutable").Map();
        switch (c) {
        case h.Original:
            var g = a.first();
            g = d.get(g.key);
            var i = g.height
              , j = g.width;
            a.forEach(function(a) {
                f = f.set(a.key, e.getCrops(d.get(a.key), j + b("SlideshowConstants").SIZE_DELIMITER + i, j / i))
            });
            break;
        case h.Wide:
            a.forEach(function(a) {
                f = f.set(a.key, e.getCrops(d.get(a.key), c, b("SlideshowConstants").LANDSCAPE_ASPECT_RATIO))
            });
            break;
        case h.Square:
            a.forEach(function(a) {
                f = f.set(a.key, e.getCrops(d.get(a.key), c, b("SlideshowConstants").SQUARE_ASPECT_RATIO))
            });
            break;
        case h.Vertical:
            a.forEach(function(a) {
                f = f.set(a.key, e.getCrops(d.get(a.key), c, b("SlideshowConstants").VERTICAL_ASPECT_RATIO))
            });
            break;
        default:
        }
        return f
    }
    function p(a, b) {
        var c, d;
        a.width / b > a.height ? (c = a.height,
        d = a.height * b) : (d = a.width,
        c = a.width / b);
        b = (a.width - d) / 2;
        a = (a.height - c) / 2;
        var e = Math.floor(b) - b
          , f = Math.floor(a) - a;
        return [[b + e, a + f], [Math.round(b + d + e), Math.round(a + c + f)]]
    }
    function q(a, c) {
        var d = c
          , e = c;
        if (a.length > 0) {
            a = a[0];
            a = Object.keys(a)[0];
            switch (a) {
            case b("SlideshowConstants").formats.Wide:
                d = c / b("SlideshowConstants").LANDSCAPE_ASPECT_RATIO;
                break;
            case b("SlideshowConstants").formats.Vertical:
                e = c * b("SlideshowConstants").VERTICAL_ASPECT_RATIO;
                break;
            case b("SlideshowConstants").formats.Square:
                break;
            default:
                c = a.split(b("SlideshowConstants").SIZE_DELIMITER);
                a = Number(c[0]);
                c = Number(c[1]);
                a > c ? d = Math.floor(e * c / a) : e = Math.floor(d * a / c);
                break
            }
        }
        return {
            width: e,
            height: d
        }
    }
    function r(a, c) {
        c = c.width / c.height;
        a = this.calculateDefaultCoordinates(a, c);
        a.length === 2 || g(0, 1043);
        return {
            format: b("SlideshowConstants").formats.Original,
            topLeft: a[0],
            bottomRight: a[1]
        }
    }
    function s(a) {
        a = this.calculateDefaultCoordinates(a, 1);
        a.length === 2 || g(0, 1043);
        return {
            format: b("SlideshowConstants").formats.Square,
            topLeft: a[0],
            bottomRight: a[1]
        }
    }
    function t(a) {
        a = a.split(i);
        return a[1]
    }
    function u(a) {
        return Math.floor(j * a)
    }
    function v(a) {
        return a ? "bold" : "normal"
    }
    function w() {
        return k
    }
    function x() {
        return o
    }
    function y(a, b) {
        return a - n * b * 2 - l * b * 2
    }
    function z(a) {
        return l * a
    }
    function A(a) {
        return n * a
    }
    function B(a) {
        a = Object.keys(a)[0];
        a = a.split(b("SlideshowConstants").SIZE_DELIMITER);
        var c = Number(a[0]);
        a = Number(a[1]);
        return C(c, a)
    }
    function C(a, b) {
        return Math.max(a / m, b / m)
    }
    function D(a, c, d) {
        a = Object.keys(a)[0];
        a = a.split(b("SlideshowConstants").SIZE_DELIMITER);
        var e = Number(a[0]);
        a = Number(a[1]);
        e = G(a, e, c, d);
        return [Math.floor(e.marginLeft), Math.floor(a - e.marginTop - e.textHeight), Math.ceil(e.marginLeft + e.textWidth), Math.ceil(a - e.marginTop)]
    }
    function E(a, c, d) {
        a = Object.keys(a)[0];
        a = a.split(b("SlideshowConstants").SIZE_DELIMITER);
        var e = Number(a[0]);
        a = Number(a[1]);
        e = G(a, e, c, d);
        return [Math.floor(e.marginLeft), Math.floor(a - e.marginTop - e.textHeight), Math.ceil(e.marginLeft + e.textWidth), Math.ceil(a - e.marginTop)]
    }
    function F(a) {
        if (!a)
            return null;
        a = a.replace("#", "");
        var b = parseInt(a.substring(0, 2), 16)
          , c = parseInt(a.substring(2, 4), 16);
        a = parseInt(a.substring(4, 6), 16);
        return "rgba(" + b + "," + c + "," + a + "," + x() + ")"
    }
    function G(a, b, c, d) {
        var e = c.text_alignment.split(i)
          , f = e[1];
        e = e[0];
        var g = u(d)
          , h = y(b, d)
          , j = y(a, d)
          , k = document.createElement("div");
        k.textContent = c.textoverlay_content ? c.textoverlay_content : "";
        k.style.visibility = "hidden";
        k.style.display = "inline-block";
        k.style.wordWrap = "break-word";
        k.style.whiteSpace = "pre-wrap";
        k.style.fontFamily = c.font;
        k.style.fontWeight = v(c.bold);
        k.style.fontSize = g + "px";
        k.style.textAlign = f;
        k.style.maxWidth = h + "px";
        k.style.maxHeight = j + "px";
        k.style.lineHeight = w() * g + "px";
        k.style.padding = z(d) + "px";
        k.style.letterSpacing = "0.2px";
        document.body.appendChild(k);
        c = k.clientWidth;
        h = k.clientHeight;
        document.body.removeChild(k);
        j = n * d;
        g = n * d;
        k = b - n * d;
        var l = a - n * d;
        f == "center" ? j = Math.min((b - c) / 2, k) : f == "right" && (j = Math.min(b - n * d - c, k));
        e == "center" ? g = Math.min((a - h) / 2, l) : e == "bottom" && (g = Math.min(a - n * d - h, l));
        return {
            marginLeft: j,
            marginTop: g,
            textHeight: h,
            textWidth: c
        }
    }
}
), null);
__d("ComposerStoryEditMutationWebGraphQLMutation", ["WebGraphQLMutationBase"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        b.__getDocID = function() {
            return "1396480790477967"
        }
        ;
        b.getQueryID = function() {
            return "1942851846033412"
        }
        ;
        return b
    }(b("WebGraphQLMutationBase"))
}
), null);
__d("XAsset3DRenderSettingsCreateController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/3d/render_settings/create/", {
        asset3d_id: {
            type: "FBID",
            required: !0
        },
        background: {
            type: "Enum",
            required: !0,
            enumType: 1
        }
    })
}
), null);
__d("XComposerPublisherCreationHooksController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/async/publisher/creation-hooks/", {
        data: {
            type: "TypeAssert"
        },
        story_id: {
            type: "String"
        }
    })
}
), null);
__d("XComposerXMediaMarkdownInterceptController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/composerx/markdown_intercept/media/", {
        xhpc_composerid: {
            type: "String",
            required: !0
        },
        markdown_enabled: {
            type: "Bool",
            defaultValue: !1
        },
        xhpc_message: {
            type: "String"
        }
    })
}
), null);
__d("XCreateAsset3DController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/3d/create/", {})
}
), null);
__d("XCreatePhoto3DController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/3d/create_photo3d/", {})
}
), null);
__d("XCreatePhotoEncoding3DController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/encoding_3d/create/", {})
}
), null);
__d("XCreateProfessionalPhoto3DController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/3d/create_professional_photo3d/", {})
}
), null);
__d("XMarketplaceCreatePostController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/ajax/marketplace/create_post/", {
        xhpc_composerid: {
            type: "String",
            required: !0
        },
        xhpc_message: {
            type: "String"
        },
        xhpc_photos_optional: {
            type: "Bool",
            defaultValue: !1
        },
        xhpc_targetid: {
            type: "Int",
            required: !0
        }
    })
}
), null);
__d("XPagesProfilePostsController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/{page_token}/posts/", {
        page_token: {
            type: "String",
            required: !0
        },
        business_id: {
            type: "Int"
        },
        tipID: {
            type: "String"
        },
        ndid: {
            type: "String"
        },
        entry_point: {
            type: "Enum",
            enumType: 1
        },
        __nodl: {
            type: "Exists",
            defaultValue: !1
        },
        qr: {
            type: "String"
        },
        qr_code_id: {
            type: "FBID"
        },
        scan_session_id: {
            type: "String"
        },
        ref: {
            type: "String"
        },
        mt_nav: {
            type: "Bool",
            defaultValue: !1
        },
        referrer: {
            type: "String"
        },
        msite_tab_async: {
            type: "Bool",
            defaultValue: !1
        },
        _sref_: {
            type: "Int"
        },
        _vref_: {
            type: "Int"
        },
        privacy_mutation_token: {
            type: "String"
        }
    })
}
), null);
__d("XPagesSharingAdminPreferenceController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/pages/sharing/admin_preference/", {
        is_story_channel_selected: {
            type: "Bool",
            defaultValue: !1
        },
        is_newsfeed_channel_selected: {
            type: "Bool",
            defaultValue: !1
        }
    })
}
), null);
__d("XReactComposerCTAAttachmentBootstrapController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/react_composer/cta/bootstrap/", {
        composer_id: {
            type: "String",
            required: !0
        },
        composer_type: {
            type: "Enum",
            required: !0,
            enumType: 1
        },
        target_id: {
            type: "Int",
            required: !0
        },
        cta_type: {
            type: "String",
            required: !0
        },
        attachment_id: {
            type: "String"
        },
        preview_style: {
            type: "Enum",
            defaultValue: "full_size_preview",
            enumType: 1
        }
    })
}
), null);
__d("XReactComposerEventAttachmentController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/react_composer/event/attachment/", {
        composer_id: {
            type: "String",
            required: !0
        },
        event_id: {
            type: "String",
            required: !0
        }
    })
}
), null);
__d("XReactComposerMinutiaeAttachmentController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/react_composer/minutiae/attachment/", {
        composer_id: {
            type: "String",
            required: !0
        },
        action_id: {
            type: "String",
            required: !0
        },
        object_id: {
            type: "String",
            required: !0
        },
        target_id: {
            type: "String",
            required: !0
        },
        is_timeline: {
            type: "Bool",
            defaultValue: !1
        },
        explicit_place_tag_id: {
            type: "String"
        }
    })
}
), null);
__d("XReactComposerScrapedAttachmentController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/react_composer/scraper/", {
        composer_id: {
            type: "String",
            required: !0
        },
        target_id: {
            type: "String",
            required: !0
        },
        scrape_url: {
            type: "String",
            required: !0
        },
        carousel_params: {
            type: "String"
        },
        entry_point: {
            type: "String",
            required: !0
        },
        source_attachment: {
            type: "String",
            defaultValue: ""
        },
        source_logging_name: {
            type: "Enum",
            defaultValue: "others",
            enumType: 1
        },
        work_shared_draft_mode: {
            type: "Enum",
            enumType: 1
        },
        privacy_mutation_token: {
            type: "String"
        }
    })
}
), null);
__d("XReactComposerShareAttachmentController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/react_composer/share_attachment/", {
        composer_id: {
            type: "String",
            required: !0
        },
        target_id: {
            type: "String",
            required: !0
        },
        share_type: {
            type: "Int",
            required: !0
        },
        share_params: {
            type: "String",
            required: !0
        },
        source_attachment: {
            type: "String",
            defaultValue: ""
        },
        is_fb_photo_share: {
            type: "Bool",
            defaultValue: !1
        }
    })
}
), null);
__d("XSalesPromoCreateAsyncController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/sales_promo/create/", {
        availability_location: {
            type: "Enum",
            required: !0,
            enumType: 1
        },
        description: {
            type: "String",
            defaultValue: ""
        },
        destination_uri: {
            type: "String",
            defaultValue: ""
        },
        discount_code: {
            type: "String",
            defaultValue: ""
        },
        expiration_time: {
            type: "Int",
            required: !0
        },
        owner_id: {
            type: "FBID",
            required: !0
        },
        page_id: {
            type: "FBID"
        },
        photo_ids: {
            type: "FBIDVector"
        },
        referrer: {
            type: "String"
        },
        schedule_time: {
            type: "Int"
        },
        start_time: {
            type: "Int"
        },
        terms_and_conditions: {
            type: "String",
            defaultValue: ""
        },
        use_boost: {
            type: "Bool",
            defaultValue: !1
        },
        video_ids: {
            type: "FBIDVector"
        },
        promotion_value: {
            type: "Float"
        }
    })
}
), null);
__d("XVideoEditDialogSaveController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/video/edit/dialog/save/", {
        v: {
            type: "Int",
            required: !0
        },
        premiere_custom_profile_image_focus_x: {
            type: "Float"
        },
        premiere_custom_profile_image_focus_y: {
            type: "Float"
        },
        feed_background_image_focus_x: {
            type: "Float"
        },
        feed_background_image_focus_y: {
            type: "Float"
        },
        mature_content_rating: {
            type: "Enum",
            enumType: 0
        },
        funded_content_program: {
            type: "Enum",
            enumType: 0
        },
        deal_id: {
            type: "FBID"
        },
        commentating_permission: {
            type: "Enum",
            enumType: 1
        },
        enable_was_live_voting: {
            type: "Bool",
            defaultValue: !1
        },
        composer_entry_point_ref: {
            type: "Enum",
            enumType: 1
        },
        has_support_now_cta: {
            type: "Bool",
            defaultValue: !1
        }
    })
}
), null);
