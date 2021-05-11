if (self.CavalryLogger) {
    CavalryLogger.start_js(["Kv06C"]);
}

__d("P2PLinkConstants", [], (function(a, b, c, d, e, f) {
    e.exports = {
        receiverIneligibleHelpURI: "http://www.facebook.com/help/1495718484027862",
        addDebitCardHelpURI: "http://www.facebook.com/help/200298266807261",
        helpCenterURI: "http://www.facebook.com/help/863171203733904?ref=learn_more",
        contactSupportURI: "http://www.facebook.com/help/contact/1333677766662195",
        disabledPaymentsSupportURI: "http://www.facebook.com/help/contact/223254857690713",
        complianceLearnMoreURI: "http://www.facebook.com/help/1555715811351399",
        complianceLearnMoreMsiteURI: "http://www.facebook.com/help/messenger-app/369959656515129",
        securePayInfoLearnMoreURI: "http://www.facebook.com/help/146373702454423",
        contactFraudTeamURI: "http://www.facebook.com/help/contact/370238886476028",
        payerProtectionURI: "http://www.facebook.com/payer_protection/",
        helpTransferSystemFailureURI: "http://www.facebook.com/help/contact/614010102040957",
        helpTransferManualReviewURI: "http://www.facebook.com/help/messenger-app/1463256903894928",
        helpTransferRecipientCanceledURI: "http://www.facebook.com/help/messenger-app/1564459413784472",
        helpTransferCompletedURI: "http://www.facebook.com/help/messenger-app/750020781733477",
        helpTransferCanceledSameCardURI: "http://www.facebook.com/help/messenger-app/818512131561533",
        helpTransferPushFailURI: "http://www.facebook.com/help/1386991644944095",
        settingsWWWURI: "http://secure.facebook.com/settings/?tab=payments",
        mTermsURI: "http://www.facebook.com/legal/m",
        mHelpURI: "http://www.facebook.com/help/messenger-app/870471599656315",
        disputeURI: "http://www.facebook.com/help/contact/828169843971429",
        paymentMethodsURI: "https://www.facebook.com/settings?tab=payments&section=settings",
        paymentHistoryURI: "https://www.facebook.com/settings?tab=payments&section=history",
        paymentsTermsURI: "http://www.facebook.com/payments_terms/"
    }
}
), null);
__d("PageInstagramDirectSyncProtocolTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:PageInstagramDirectSyncProtocolLoggerConfig", this.$1, b("Banzai").BASIC, a)
        }
        ;
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:PageInstagramDirectSyncProtocolLoggerConfig", this.$1, b("Banzai").VITAL, a)
        }
        ;
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:PageInstagramDirectSyncProtocolLoggerConfig", this.$1, {
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
        c.setEvent = function(a) {
            this.$1.event = a;
            return this
        }
        ;
        c.setInstagramUserID = function(a) {
            this.$1.instagram_user_id = a;
            return this
        }
        ;
        c.setPageID = function(a) {
            this.$1.page_id = a;
            return this
        }
        ;
        c.setSessionID = function(a) {
            this.$1.session_id = a;
            return this
        }
        ;
        c.updateExtraData = function(a) {
            a = b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));
            b("GeneratedLoggerUtils").checkExtraDataFieldNames(a, g);
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        }
        ;
        c.addToExtraData = function(a, b) {
            var c = {};
            c[a] = b;
            return this.updateExtraData(c)
        }
        ;
        return a
    }();
    var g = {
        event: !0,
        instagram_user_id: !0,
        page_id: !0,
        session_id: !0
    };
    e.exports = a
}
), null);
__d("OrderManagementSimplifiedFulfillAction_order.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        };
        return {
            argumentDefinitions: [],
            kind: "Fragment",
            metadata: null,
            name: "OrderManagementSimplifiedFulfillAction_order",
            selections: [a, {
                alias: null,
                args: null,
                concreteType: "User",
                kind: "LinkedField",
                name: "invoice_customer",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "name",
                    storageKey: null
                }, a],
                storageKey: null
            }],
            type: "PaymentInvoiceable",
            abstractKey: "__isPaymentInvoiceable"
        }
    }();
    e.exports = a
}
), null);
__d("OrderManagementSimplifiedFulfillAction_page.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "OrderManagementSimplifiedFulfillAction_page",
        selections: [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        }, {
            alias: "shippingCarriers",
            args: null,
            concreteType: "CHEXShippingCarrier",
            kind: "LinkedField",
            name: "shipping_carriers",
            plural: !0,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "slug",
                storageKey: null
            }],
            storageKey: null
        }, {
            alias: "isShipmentTrackingEnabled",
            args: [{
                kind: "Literal",
                name: "gk_name",
                value: "mcom_page_mark_as_shipped_with_aftership"
            }],
            concreteType: "EntGKCheck",
            kind: "LinkedField",
            name: "gk_check",
            plural: !1,
            selections: [{
                alias: "passes",
                args: null,
                kind: "ScalarField",
                name: "passes_gk",
                storageKey: null
            }],
            storageKey: 'gk_check(gk_name:"mcom_page_mark_as_shipped_with_aftership")'
        }],
        type: "Page",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("OrderManagementInvoiceStatusUpdateMutation.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "data"
        }]
          , b = [{
            kind: "Variable",
            name: "data",
            variableName: "data"
        }]
          , c = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "product_id",
            storageKey: null
        }
          , d = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null
        }
          , e = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        }
          , f = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "name",
            storageKey: null
        }
          , g = [{
            alias: "formattedAmount",
            args: null,
            kind: "ScalarField",
            name: "formatted_amount",
            storageKey: null
        }]
          , h = [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null
        }]
          , i = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "url",
            storageKey: null
        }
          , j = {
            alias: "creationTime",
            args: null,
            kind: "ScalarField",
            name: "creation_time",
            storageKey: null
        }
          , k = [{
            kind: "Literal",
            name: "height",
            value: 60
        }, {
            kind: "Literal",
            name: "width",
            value: 60
        }]
          , l = [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "location",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "status",
            storageKey: null
        }, {
            alias: "statusTime",
            args: null,
            kind: "ScalarField",
            name: "status_time",
            storageKey: null
        }, {
            alias: "detailedStatus",
            args: null,
            kind: "ScalarField",
            name: "status_detail",
            storageKey: null
        }];
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "OrderManagementInvoiceStatusUpdateMutation",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: "PaymentInvoiceUpdateActionResponsePayload",
                    kind: "LinkedField",
                    name: "payment_invoice_update_action",
                    plural: !1,
                    selections: [c, {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "invoice",
                        plural: !1,
                        selections: [{
                            args: null,
                            kind: "FragmentSpread",
                            name: "MessagingCommerceOrderDetailView_order"
                        }, {
                            args: null,
                            kind: "FragmentSpread",
                            name: "MessagingCommerceOrdersListRow_order"
                        }],
                        storageKey: null
                    }],
                    storageKey: null
                }],
                type: "Mutation",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "OrderManagementInvoiceStatusUpdateMutation",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: "PaymentInvoiceUpdateActionResponsePayload",
                    kind: "LinkedField",
                    name: "payment_invoice_update_action",
                    plural: !1,
                    selections: [c, {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "invoice",
                        plural: !1,
                        selections: [d, {
                            kind: "TypeDiscriminator",
                            abstractKey: "__isPaymentInvoiceable"
                        }, {
                            alias: "status",
                            args: null,
                            kind: "ScalarField",
                            name: "invoice_status",
                            storageKey: null
                        }, {
                            alias: "displayStatus",
                            args: null,
                            kind: "ScalarField",
                            name: "display_order_status",
                            storageKey: null
                        }, e, {
                            alias: null,
                            args: null,
                            concreteType: "User",
                            kind: "LinkedField",
                            name: "invoice_customer",
                            plural: !1,
                            selections: [f, e],
                            storageKey: null
                        }, {
                            alias: "buyerName",
                            args: null,
                            kind: "ScalarField",
                            name: "invoice_customer_name",
                            storageKey: null
                        }, {
                            alias: "totalAmount",
                            args: null,
                            concreteType: "CurrencyAmount",
                            kind: "LinkedField",
                            name: "total_amount",
                            plural: !1,
                            selections: g,
                            storageKey: null
                        }, {
                            kind: "InlineFragment",
                            selections: [{
                                alias: "invoiceCustomer",
                                args: null,
                                concreteType: "User",
                                kind: "LinkedField",
                                name: "invoice_customer",
                                plural: !1,
                                selections: [e, f, {
                                    alias: "image",
                                    args: [{
                                        kind: "Literal",
                                        name: "height",
                                        value: 40
                                    }, {
                                        kind: "Literal",
                                        name: "width",
                                        value: 40
                                    }],
                                    concreteType: "Image",
                                    kind: "LinkedField",
                                    name: "profile_picture",
                                    plural: !1,
                                    selections: h,
                                    storageKey: "profile_picture(height:40,width:40)"
                                }, i],
                                storageKey: null
                            }, {
                                alias: "phoneNumber",
                                args: null,
                                concreteType: "PhoneNumber",
                                kind: "LinkedField",
                                name: "buyer_phone_number",
                                plural: !1,
                                selections: [{
                                    alias: "displayNumber",
                                    args: null,
                                    kind: "ScalarField",
                                    name: "display_number",
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: "invoiceStatusHistory",
                                args: null,
                                concreteType: "PaymentInvoiceStatusEvent",
                                kind: "LinkedField",
                                name: "invoice_status_history",
                                plural: !0,
                                selections: [j, {
                                    alias: "invoiceStatus",
                                    args: null,
                                    kind: "ScalarField",
                                    name: "invoice_status",
                                    storageKey: null
                                }, {
                                    alias: "invoiceStatusCurrentDisplayFormatted",
                                    args: null,
                                    kind: "ScalarField",
                                    name: "invoice_status_current_display_formatted",
                                    storageKey: null
                                }, {
                                    alias: "invoiceStatusPastDisplayFormatted",
                                    args: null,
                                    kind: "ScalarField",
                                    name: "invoice_status_past_display_formatted",
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: "isEligibleForPurchaseProtection",
                                args: null,
                                kind: "ScalarField",
                                name: "is_eligible_for_purchase_protection",
                                storageKey: null
                            }, {
                                alias: "isEligibleForRefund",
                                args: null,
                                kind: "ScalarField",
                                name: "is_eligible_for_refund",
                                storageKey: null
                            }, {
                                alias: "purchaseProtectionText",
                                args: null,
                                concreteType: "TextWithEntities",
                                kind: "LinkedField",
                                name: "purchase_protection_text_with_entities",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "text",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "EntityAtRange",
                                    kind: "LinkedField",
                                    name: "ranges",
                                    plural: !0,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "override_uri",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "length",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "offset",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "entity",
                                        plural: !1,
                                        selections: [d, i, {
                                            kind: "InlineFragment",
                                            selections: [e],
                                            type: "Node",
                                            abstractKey: "__isNode"
                                        }],
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: "shippingLabelDetails",
                                args: null,
                                concreteType: "MCOMShippingLabelDetails",
                                kind: "LinkedField",
                                name: "shipping_label_details",
                                plural: !1,
                                selections: [{
                                    alias: "shippingIncentiveDescription",
                                    args: null,
                                    kind: "ScalarField",
                                    name: "shipping_incentive_description",
                                    storageKey: null
                                }, {
                                    alias: "shippingIncentiveURL",
                                    args: null,
                                    kind: "ScalarField",
                                    name: "shipping_incentive_url",
                                    storageKey: null
                                }],
                                storageKey: null
                            }, j, {
                                alias: "invoiceCustomerName",
                                args: null,
                                kind: "ScalarField",
                                name: "invoice_customer_name",
                                storageKey: null
                            }, {
                                alias: "totalAmount",
                                args: null,
                                concreteType: "CurrencyAmount",
                                kind: "LinkedField",
                                name: "total_amount",
                                plural: !1,
                                selections: [{
                                    alias: "formatted",
                                    args: null,
                                    kind: "ScalarField",
                                    name: "formatted_amount",
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                kind: "InlineFragment",
                                selections: [{
                                    alias: "memo",
                                    args: null,
                                    kind: "ScalarField",
                                    name: "invoice_buyer_notes",
                                    storageKey: null
                                }, {
                                    alias: "invoiceImages",
                                    args: null,
                                    concreteType: "PaymentInvoiceProduct",
                                    kind: "LinkedField",
                                    name: "invoice_items",
                                    plural: !0,
                                    selections: [{
                                        alias: "customImages",
                                        args: k,
                                        concreteType: "Image",
                                        kind: "LinkedField",
                                        name: "custom_images",
                                        plural: !0,
                                        selections: h,
                                        storageKey: "custom_images(height:60,width:60)"
                                    }, e],
                                    storageKey: null
                                }, {
                                    alias: "invoiceItems",
                                    args: null,
                                    concreteType: "PaymentInvoiceProduct",
                                    kind: "LinkedField",
                                    name: "invoice_items",
                                    plural: !0,
                                    selections: [{
                                        alias: null,
                                        args: k,
                                        concreteType: "Image",
                                        kind: "LinkedField",
                                        name: "images",
                                        plural: !0,
                                        selections: h,
                                        storageKey: "images(height:60,width:60)"
                                    }, f, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "quantity",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "variation",
                                        storageKey: null
                                    }, e],
                                    storageKey: null
                                }, {
                                    kind: "InlineFragment",
                                    selections: [{
                                        alias: "isSimplifiedInvoice",
                                        args: null,
                                        kind: "ScalarField",
                                        name: "is_simplified_invoice",
                                        storageKey: null
                                    }, {
                                        alias: "address",
                                        args: null,
                                        concreteType: "StructuredAddress",
                                        kind: "LinkedField",
                                        name: "customer_address",
                                        plural: !1,
                                        selections: [{
                                            alias: "lineOne",
                                            args: null,
                                            kind: "ScalarField",
                                            name: "address_line_one",
                                            storageKey: null
                                        }, {
                                            alias: "lineTwo",
                                            args: null,
                                            kind: "ScalarField",
                                            name: "address_line_two",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "city",
                                            storageKey: null
                                        }, {
                                            alias: "postalCode",
                                            args: null,
                                            kind: "ScalarField",
                                            name: "postal_code",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "state",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "country",
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }, {
                                        alias: "shippingOption",
                                        args: null,
                                        concreteType: "TransactionShippingOption",
                                        kind: "LinkedField",
                                        name: "invoice_selected_shipping_option",
                                        plural: !1,
                                        selections: [{
                                            alias: "displayName",
                                            args: null,
                                            kind: "ScalarField",
                                            name: "display_name",
                                            storageKey: null
                                        }, e],
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "PaymentInvoiceShipment",
                                        kind: "LinkedField",
                                        name: "shipments",
                                        plural: !0,
                                        selections: [{
                                            alias: "shipmentProvider",
                                            args: null,
                                            kind: "ScalarField",
                                            name: "shipment_provider",
                                            storageKey: null
                                        }, {
                                            alias: "shipmentTrackingId",
                                            args: null,
                                            kind: "ScalarField",
                                            name: "shipment_tracking_id",
                                            storageKey: null
                                        }, {
                                            alias: "shipmentTrackingInformation",
                                            args: null,
                                            concreteType: "MCOMShipmentTrackingInformation",
                                            kind: "LinkedField",
                                            name: "shipment_tracking_information",
                                            plural: !1,
                                            selections: [{
                                                alias: "currentStatus",
                                                args: null,
                                                concreteType: "CHEXOrderTrackingStatus",
                                                kind: "LinkedField",
                                                name: "current_status",
                                                plural: !1,
                                                selections: l,
                                                storageKey: null
                                            }, {
                                                alias: "trackingHistory",
                                                args: null,
                                                concreteType: "CHEXOrderTrackingStatus",
                                                kind: "LinkedField",
                                                name: "tracking_history",
                                                plural: !0,
                                                selections: l,
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }, e],
                                        storageKey: null
                                    }, {
                                        alias: "invoiceAmounts",
                                        args: null,
                                        concreteType: "PaymentInvoiceAmount",
                                        kind: "LinkedField",
                                        name: "invoice_amounts",
                                        plural: !0,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "type",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "CurrencyAmount",
                                            kind: "LinkedField",
                                            name: "amount",
                                            plural: !1,
                                            selections: g,
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }, {
                                        alias: "invoiceReceipt",
                                        args: null,
                                        concreteType: "Photo",
                                        kind: "LinkedField",
                                        name: "invoice_receipt_image",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "Image",
                                            kind: "LinkedField",
                                            name: "image",
                                            plural: !1,
                                            selections: h,
                                            storageKey: null
                                        }, e],
                                        storageKey: null
                                    }, {
                                        alias: "invoiceType",
                                        args: null,
                                        kind: "ScalarField",
                                        name: "invoice_type",
                                        storageKey: null
                                    }, {
                                        alias: "paymentMethods",
                                        args: null,
                                        kind: "ScalarField",
                                        name: "display_payment_methods",
                                        storageKey: null
                                    }],
                                    type: "PagesCommercePaymentInvoice",
                                    abstractKey: null
                                }],
                                type: "PaymentInvoiceable",
                                abstractKey: "__isPaymentInvoiceable"
                            }],
                            type: "PagesCommercePaymentInvoice",
                            abstractKey: null
                        }],
                        storageKey: null
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: "4525024184236913",
                metadata: {},
                name: "OrderManagementInvoiceStatusUpdateMutation",
                operationKind: "mutation",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("OrderManagementRefundInvoiceMutation.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "input"
        }]
          , b = [{
            kind: "Variable",
            name: "data",
            variableName: "input"
        }]
          , c = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null
        }
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
          , f = [{
            alias: "formattedAmount",
            args: null,
            kind: "ScalarField",
            name: "formatted_amount",
            storageKey: null
        }]
          , g = [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null
        }]
          , h = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "url",
            storageKey: null
        }
          , i = {
            alias: "creationTime",
            args: null,
            kind: "ScalarField",
            name: "creation_time",
            storageKey: null
        }
          , j = [{
            kind: "Literal",
            name: "height",
            value: 60
        }, {
            kind: "Literal",
            name: "width",
            value: 60
        }]
          , k = [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "location",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "status",
            storageKey: null
        }, {
            alias: "statusTime",
            args: null,
            kind: "ScalarField",
            name: "status_time",
            storageKey: null
        }, {
            alias: "detailedStatus",
            args: null,
            kind: "ScalarField",
            name: "status_detail",
            storageKey: null
        }];
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "OrderManagementRefundInvoiceMutation",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: "InitiateRefundForMcomInvoicesResponsePayload",
                    kind: "LinkedField",
                    name: "initiate_refund_for_mcom_invoices",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "page_invoice",
                        plural: !1,
                        selections: [{
                            args: null,
                            kind: "FragmentSpread",
                            name: "MessagingCommerceOrderDetailView_order"
                        }, {
                            args: null,
                            kind: "FragmentSpread",
                            name: "MessagingCommerceOrdersListRow_order"
                        }],
                        storageKey: null
                    }],
                    storageKey: null
                }],
                type: "Mutation",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "OrderManagementRefundInvoiceMutation",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: "InitiateRefundForMcomInvoicesResponsePayload",
                    kind: "LinkedField",
                    name: "initiate_refund_for_mcom_invoices",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "page_invoice",
                        plural: !1,
                        selections: [c, {
                            kind: "TypeDiscriminator",
                            abstractKey: "__isPaymentInvoiceable"
                        }, {
                            alias: "status",
                            args: null,
                            kind: "ScalarField",
                            name: "invoice_status",
                            storageKey: null
                        }, {
                            alias: "displayStatus",
                            args: null,
                            kind: "ScalarField",
                            name: "display_order_status",
                            storageKey: null
                        }, d, {
                            alias: null,
                            args: null,
                            concreteType: "User",
                            kind: "LinkedField",
                            name: "invoice_customer",
                            plural: !1,
                            selections: [e, d],
                            storageKey: null
                        }, {
                            alias: "buyerName",
                            args: null,
                            kind: "ScalarField",
                            name: "invoice_customer_name",
                            storageKey: null
                        }, {
                            alias: "totalAmount",
                            args: null,
                            concreteType: "CurrencyAmount",
                            kind: "LinkedField",
                            name: "total_amount",
                            plural: !1,
                            selections: f,
                            storageKey: null
                        }, {
                            kind: "InlineFragment",
                            selections: [{
                                alias: "invoiceCustomer",
                                args: null,
                                concreteType: "User",
                                kind: "LinkedField",
                                name: "invoice_customer",
                                plural: !1,
                                selections: [d, e, {
                                    alias: "image",
                                    args: [{
                                        kind: "Literal",
                                        name: "height",
                                        value: 40
                                    }, {
                                        kind: "Literal",
                                        name: "width",
                                        value: 40
                                    }],
                                    concreteType: "Image",
                                    kind: "LinkedField",
                                    name: "profile_picture",
                                    plural: !1,
                                    selections: g,
                                    storageKey: "profile_picture(height:40,width:40)"
                                }, h],
                                storageKey: null
                            }, {
                                alias: "phoneNumber",
                                args: null,
                                concreteType: "PhoneNumber",
                                kind: "LinkedField",
                                name: "buyer_phone_number",
                                plural: !1,
                                selections: [{
                                    alias: "displayNumber",
                                    args: null,
                                    kind: "ScalarField",
                                    name: "display_number",
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: "invoiceStatusHistory",
                                args: null,
                                concreteType: "PaymentInvoiceStatusEvent",
                                kind: "LinkedField",
                                name: "invoice_status_history",
                                plural: !0,
                                selections: [i, {
                                    alias: "invoiceStatus",
                                    args: null,
                                    kind: "ScalarField",
                                    name: "invoice_status",
                                    storageKey: null
                                }, {
                                    alias: "invoiceStatusCurrentDisplayFormatted",
                                    args: null,
                                    kind: "ScalarField",
                                    name: "invoice_status_current_display_formatted",
                                    storageKey: null
                                }, {
                                    alias: "invoiceStatusPastDisplayFormatted",
                                    args: null,
                                    kind: "ScalarField",
                                    name: "invoice_status_past_display_formatted",
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: "isEligibleForPurchaseProtection",
                                args: null,
                                kind: "ScalarField",
                                name: "is_eligible_for_purchase_protection",
                                storageKey: null
                            }, {
                                alias: "isEligibleForRefund",
                                args: null,
                                kind: "ScalarField",
                                name: "is_eligible_for_refund",
                                storageKey: null
                            }, {
                                alias: "purchaseProtectionText",
                                args: null,
                                concreteType: "TextWithEntities",
                                kind: "LinkedField",
                                name: "purchase_protection_text_with_entities",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "text",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "EntityAtRange",
                                    kind: "LinkedField",
                                    name: "ranges",
                                    plural: !0,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "override_uri",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "length",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "offset",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "entity",
                                        plural: !1,
                                        selections: [c, h, {
                                            kind: "InlineFragment",
                                            selections: [d],
                                            type: "Node",
                                            abstractKey: "__isNode"
                                        }],
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: "shippingLabelDetails",
                                args: null,
                                concreteType: "MCOMShippingLabelDetails",
                                kind: "LinkedField",
                                name: "shipping_label_details",
                                plural: !1,
                                selections: [{
                                    alias: "shippingIncentiveDescription",
                                    args: null,
                                    kind: "ScalarField",
                                    name: "shipping_incentive_description",
                                    storageKey: null
                                }, {
                                    alias: "shippingIncentiveURL",
                                    args: null,
                                    kind: "ScalarField",
                                    name: "shipping_incentive_url",
                                    storageKey: null
                                }],
                                storageKey: null
                            }, i, {
                                alias: "invoiceCustomerName",
                                args: null,
                                kind: "ScalarField",
                                name: "invoice_customer_name",
                                storageKey: null
                            }, {
                                alias: "totalAmount",
                                args: null,
                                concreteType: "CurrencyAmount",
                                kind: "LinkedField",
                                name: "total_amount",
                                plural: !1,
                                selections: [{
                                    alias: "formatted",
                                    args: null,
                                    kind: "ScalarField",
                                    name: "formatted_amount",
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                kind: "InlineFragment",
                                selections: [{
                                    alias: "memo",
                                    args: null,
                                    kind: "ScalarField",
                                    name: "invoice_buyer_notes",
                                    storageKey: null
                                }, {
                                    alias: "invoiceImages",
                                    args: null,
                                    concreteType: "PaymentInvoiceProduct",
                                    kind: "LinkedField",
                                    name: "invoice_items",
                                    plural: !0,
                                    selections: [{
                                        alias: "customImages",
                                        args: j,
                                        concreteType: "Image",
                                        kind: "LinkedField",
                                        name: "custom_images",
                                        plural: !0,
                                        selections: g,
                                        storageKey: "custom_images(height:60,width:60)"
                                    }, d],
                                    storageKey: null
                                }, {
                                    alias: "invoiceItems",
                                    args: null,
                                    concreteType: "PaymentInvoiceProduct",
                                    kind: "LinkedField",
                                    name: "invoice_items",
                                    plural: !0,
                                    selections: [{
                                        alias: null,
                                        args: j,
                                        concreteType: "Image",
                                        kind: "LinkedField",
                                        name: "images",
                                        plural: !0,
                                        selections: g,
                                        storageKey: "images(height:60,width:60)"
                                    }, e, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "quantity",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "variation",
                                        storageKey: null
                                    }, d],
                                    storageKey: null
                                }, {
                                    kind: "InlineFragment",
                                    selections: [{
                                        alias: "isSimplifiedInvoice",
                                        args: null,
                                        kind: "ScalarField",
                                        name: "is_simplified_invoice",
                                        storageKey: null
                                    }, {
                                        alias: "address",
                                        args: null,
                                        concreteType: "StructuredAddress",
                                        kind: "LinkedField",
                                        name: "customer_address",
                                        plural: !1,
                                        selections: [{
                                            alias: "lineOne",
                                            args: null,
                                            kind: "ScalarField",
                                            name: "address_line_one",
                                            storageKey: null
                                        }, {
                                            alias: "lineTwo",
                                            args: null,
                                            kind: "ScalarField",
                                            name: "address_line_two",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "city",
                                            storageKey: null
                                        }, {
                                            alias: "postalCode",
                                            args: null,
                                            kind: "ScalarField",
                                            name: "postal_code",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "state",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "country",
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }, {
                                        alias: "shippingOption",
                                        args: null,
                                        concreteType: "TransactionShippingOption",
                                        kind: "LinkedField",
                                        name: "invoice_selected_shipping_option",
                                        plural: !1,
                                        selections: [{
                                            alias: "displayName",
                                            args: null,
                                            kind: "ScalarField",
                                            name: "display_name",
                                            storageKey: null
                                        }, d],
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "PaymentInvoiceShipment",
                                        kind: "LinkedField",
                                        name: "shipments",
                                        plural: !0,
                                        selections: [{
                                            alias: "shipmentProvider",
                                            args: null,
                                            kind: "ScalarField",
                                            name: "shipment_provider",
                                            storageKey: null
                                        }, {
                                            alias: "shipmentTrackingId",
                                            args: null,
                                            kind: "ScalarField",
                                            name: "shipment_tracking_id",
                                            storageKey: null
                                        }, {
                                            alias: "shipmentTrackingInformation",
                                            args: null,
                                            concreteType: "MCOMShipmentTrackingInformation",
                                            kind: "LinkedField",
                                            name: "shipment_tracking_information",
                                            plural: !1,
                                            selections: [{
                                                alias: "currentStatus",
                                                args: null,
                                                concreteType: "CHEXOrderTrackingStatus",
                                                kind: "LinkedField",
                                                name: "current_status",
                                                plural: !1,
                                                selections: k,
                                                storageKey: null
                                            }, {
                                                alias: "trackingHistory",
                                                args: null,
                                                concreteType: "CHEXOrderTrackingStatus",
                                                kind: "LinkedField",
                                                name: "tracking_history",
                                                plural: !0,
                                                selections: k,
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }, d],
                                        storageKey: null
                                    }, {
                                        alias: "invoiceAmounts",
                                        args: null,
                                        concreteType: "PaymentInvoiceAmount",
                                        kind: "LinkedField",
                                        name: "invoice_amounts",
                                        plural: !0,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "type",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "CurrencyAmount",
                                            kind: "LinkedField",
                                            name: "amount",
                                            plural: !1,
                                            selections: f,
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }, {
                                        alias: "invoiceReceipt",
                                        args: null,
                                        concreteType: "Photo",
                                        kind: "LinkedField",
                                        name: "invoice_receipt_image",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "Image",
                                            kind: "LinkedField",
                                            name: "image",
                                            plural: !1,
                                            selections: g,
                                            storageKey: null
                                        }, d],
                                        storageKey: null
                                    }, {
                                        alias: "invoiceType",
                                        args: null,
                                        kind: "ScalarField",
                                        name: "invoice_type",
                                        storageKey: null
                                    }, {
                                        alias: "paymentMethods",
                                        args: null,
                                        kind: "ScalarField",
                                        name: "display_payment_methods",
                                        storageKey: null
                                    }],
                                    type: "PagesCommercePaymentInvoice",
                                    abstractKey: null
                                }],
                                type: "PaymentInvoiceable",
                                abstractKey: "__isPaymentInvoiceable"
                            }],
                            type: "PagesCommercePaymentInvoice",
                            abstractKey: null
                        }],
                        storageKey: null
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: "3831375150225626",
                metadata: {},
                name: "OrderManagementRefundInvoiceMutation",
                operationKind: "mutation",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("ServicesShipOrderDialogListQuery.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "pageID"
        }, {
            defaultValue: null,
            kind: "LocalArgument",
            name: "userID"
        }]
          , b = [{
            kind: "Variable",
            name: "id",
            variableName: "pageID"
        }]
          , c = [{
            kind: "Variable",
            name: "user_id",
            variableName: "userID"
        }, {
            kind: "Literal",
            name: "with_status",
            value: "COMPLETED"
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
            concreteType: "CurrencyAmount",
            kind: "LinkedField",
            name: "total_amount",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "amount",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "currency",
                storageKey: null
            }],
            storageKey: null
        }
          , f = {
            alias: null,
            args: null,
            concreteType: "User",
            kind: "LinkedField",
            name: "invoice_customer",
            plural: !1,
            selections: [d, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null
            }],
            storageKey: null
        }
          , g = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "updated_time",
            storageKey: null
        };
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "ServicesShipOrderDialogListQuery",
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
                        concreteType: "PageToOldAndNewInvoicesConnection",
                        kind: "LinkedField",
                        name: "payment_invoices",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "PageToOldAndNewInvoicesEdge",
                            kind: "LinkedField",
                            name: "edges",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "node",
                                plural: !1,
                                selections: [d, e, f, g],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
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
                name: "ServicesShipOrderDialogListQuery",
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
                        concreteType: "PageToOldAndNewInvoicesConnection",
                        kind: "LinkedField",
                        name: "payment_invoices",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "PageToOldAndNewInvoicesEdge",
                            kind: "LinkedField",
                            name: "edges",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
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
                                }, d, e, f, g],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }, d],
                    storageKey: null
                }]
            },
            params: {
                id: "2926231817456153",
                metadata: {},
                name: "ServicesShipOrderDialogListQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("CMTSegmentationForUpsellImpressionMutation.graphql", [], (function(a, b, c, d, e, f) {
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
            concreteType: "LogCmtSegmenttionImpressionResponsePayload",
            kind: "LinkedField",
            name: "log_cmt_segmenttion_impression",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                concreteType: "CMTSegmentationUpsellCardsConfig",
                kind: "LinkedField",
                name: "cmt_segmentation_config",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "id",
                    storageKey: null
                }],
                storageKey: null
            }],
            storageKey: null
        }];
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "CMTSegmentationForUpsellImpressionMutation",
                selections: b,
                type: "Mutation",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "CMTSegmentationForUpsellImpressionMutation",
                selections: b
            },
            params: {
                id: "3361358623916633",
                metadata: {},
                name: "CMTSegmentationForUpsellImpressionMutation",
                operationKind: "mutation",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("CMTSegmentationForUpsellTempDismissMutation.graphql", [], (function(a, b, c, d, e, f) {
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
            concreteType: "LogCmtSegmenttionTemporaryDismissResponsePayload",
            kind: "LinkedField",
            name: "log_cmt_segmenttion_temporary_dismiss",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                concreteType: "CMTSegmentationUpsellCardsConfig",
                kind: "LinkedField",
                name: "cmt_segmentation_config",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "id",
                    storageKey: null
                }],
                storageKey: null
            }],
            storageKey: null
        }];
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "CMTSegmentationForUpsellTempDismissMutation",
                selections: b,
                type: "Mutation",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "CMTSegmentationForUpsellTempDismissMutation",
                selections: b
            },
            params: {
                id: "1816446568479182",
                metadata: {},
                name: "CMTSegmentationForUpsellTempDismissMutation",
                operationKind: "mutation",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("SmartComposeTypeaheadHelperQuery.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "queryParams"
        }]
          , b = [{
            alias: null,
            args: [{
                kind: "Variable",
                name: "query_params",
                variableName: "queryParams"
            }],
            concreteType: "AssistantSmartComposeCandidate",
            kind: "LinkedField",
            name: "typeahead_list",
            plural: !0,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "confidence",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "typeahead",
                storageKey: null
            }],
            storageKey: null
        }];
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "SmartComposeTypeaheadHelperQuery",
                selections: b,
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "SmartComposeTypeaheadHelperQuery",
                selections: b
            },
            params: {
                id: "2326980770744887",
                metadata: {},
                name: "SmartComposeTypeaheadHelperQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("CommerceManagerClientFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743404");
    c = b("FalcoLoggerInternal").create("commerce_manager_client", a);
    e.exports = c
}
), null);
__d("CommerceManagerLoggingHooks", ["CommerceManagerClientFalcoEvent", "CommerceManagerContext", "CommerceManagerUiFalcoEvent", "ErrorNormalizeUtils", "React", "isEmpty"], (function(a, b, c, d, e, f) {
    "use strict";
    f.useEventLogging = i;
    f.useImpressionLogging = a;
    f.useClickLogging = c;
    f.useClickLoggingWithDynamicParams = d;
    f.useErrorLogging = e;
    f.useFocusLogging = j;
    f.useFocusLoggingWithDynamicParams = k;
    f.useSubmitLogging = l;
    f.useSubmitLoggingWithDynamicParams = m;
    var g, h = b("React");
    function i() {
        var a = h.useContext(b("CommerceManagerContext"));
        a = a.accountID;
        var c = (g || (g = b("isEmpty")))(a) || a === "0" ? null : a;
        return h.useCallback(function(a) {
            b("CommerceManagerClientFalcoEvent").logImmediately(function() {
                var b;
                return {
                    additional_data: a.additionalData != null ? JSON.stringify(a.additionalData) : null,
                    cms_id: c,
                    component: a.component,
                    event: a.event,
                    flow_name: a.flowName,
                    flow_step: a.flowStep,
                    error_message: (b = (b = a.error) == null ? void 0 : b.message) != null ? b : null,
                    error_code: (b = (b = a.error) == null ? void 0 : b.number) != null ? b : null
                }
            });
            var d = {};
            if (a.additionalData !== null)
                for (var e in a.additionalData)
                    a.additionalData !== null && Object.prototype.hasOwnProperty.call(a.additionalData, e) && (d[e] = String(a.additionalData[e]));
            b("CommerceManagerUiFalcoEvent").log(function() {
                var b;
                return {
                    additional_data: d,
                    cms_id: c,
                    error_code: (b = (b = a.error) == null ? void 0 : (b = b.number) == null ? void 0 : b.toString()) != null ? b : null,
                    error_message: (b = (b = a.error) == null ? void 0 : b.message) != null ? b : null,
                    error_trace: (b = (b = a.error) == null ? void 0 : b.stack) != null ? b : null,
                    event: a.event,
                    flow_name: a.flowName,
                    oncall: a.oncall
                }
            })
        }, [c])
    }
    function a() {
        var a = i();
        return h.useCallback(function(b) {
            a(babelHelpers["extends"]({
                event: "IMPRESSION"
            }, b))
        }, [a])
    }
    function c(a, b) {
        var c = i();
        return h.useCallback(function() {
            c(babelHelpers["extends"]({
                event: "CLICK"
            }, b));
            return a.apply(void 0, arguments)
        }, [a, c, b])
    }
    function d(a, b) {
        var c = i();
        return h.useCallback(function() {
            var d = b.apply(void 0, arguments);
            c(babelHelpers["extends"]({
                event: "CLICK"
            }, d));
            return a.apply(void 0, arguments)
        }, [a, c, b])
    }
    function e() {
        var a = i();
        return h.useCallback(function(c) {
            var d = c.error
              , e = c.additionalData;
            c = babelHelpers.objectWithoutPropertiesLoose(c, ["error", "additionalData"]);
            var f = d != null ? b("ErrorNormalizeUtils").normalizeError(d) : null;
            a(babelHelpers["extends"]({
                additionalData: babelHelpers["extends"]({}, e, {
                    normalizedError: f
                }),
                error: d,
                event: "ERROR"
            }, c))
        }, [a])
    }
    function j(a, b) {
        var c = i();
        return h.useCallback(function() {
            c(babelHelpers["extends"]({
                event: "FOCUS"
            }, b));
            return a.apply(void 0, arguments)
        }, [a, c, b])
    }
    function k(a, b) {
        var c = i();
        return h.useCallback(function() {
            var d = b.apply(void 0, arguments);
            c(babelHelpers["extends"]({
                event: "FOCUS"
            }, d));
            return a.apply(void 0, arguments)
        }, [a, c, b])
    }
    function l(a, b) {
        var c = i();
        return h.useCallback(function() {
            c(babelHelpers["extends"]({
                event: "SUBMIT"
            }, b));
            return a.apply(void 0, arguments)
        }, [a, c, b])
    }
    function m(a, b) {
        var c = i();
        return h.useCallback(function() {
            var d = b.apply(void 0, arguments);
            c(babelHelpers["extends"]({
                event: "SUBMIT"
            }, d));
            return a.apply(void 0, arguments)
        }, [a, c, b])
    }
}
), null);
__d("useGeoPrivateToastStyle", ["stylex", "useGeoTheme"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = {
        root: {
            display: "rwb8dzxj",
            width: "nic5v6m2"
        }
    };
    function h(a) {
        if (a === "success" || a === "indeterminate")
            return "content";
        else
            return a
    }
    function a(a) {
        a = a.status;
        var c = b("useGeoTheme")()
          , d = c.selectBorderRadius
          , e = c.selectSpacing;
        c = c.selectStaticBackgroundColor;
        a = h(a);
        return [g.root, a === "error" && c({
            surface: "error"
        }), a === "content" && c({
            isInverted: !0,
            surface: "content"
        }), d({
            context: "content"
        }), e({
            context: "container",
            bounds: "internal",
            relation: "component"
        })]
    }
}
), null);
__d("GeoToast.react", ["GeoBaseSpacingLayout.react", "GeoBaseText.react", "GeoCloseButton.react", "GeoPrivateInvertThemeContext", "GeoPrivateMakeComponent", "GeoPrivateToastContext", "GeoSpinner.react", "GeoStatusIcon.react", "React", "geoOffset", "stylex", "useGeoPrivateToastStyle"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React");
    function a(a, c) {
        var d = a.action
          , e = a["data-testid"];
        e = a.description;
        var f = a.hasIcon;
        f = f === void 0 ? !0 : f;
        var k = a.heading
          , l = a.onHide;
        a = a.status;
        a = a === void 0 ? "success" : a;
        var m = b("useGeoPrivateToastStyle")({
            status: a
        })
          , n = h.useContext(b("GeoPrivateToastContext"));
        n = n.onHideFactory;
        var o = (n = n == null ? void 0 : n(l)) != null ? n : l;
        n = f === !0 ? i(a) : null;
        return h.jsx(b("GeoPrivateInvertThemeContext").Provider, {
            value: !0,
            children: h.jsx("div", {
                "aria-atomic": "true",
                "aria-live": "polite",
                className: (g || (g = b("stylex")))(m),
                "data-testid": void 0,
                ref: c,
                children: h.jsxs(b("GeoBaseSpacingLayout.react"), {
                    align: "center",
                    grow: "fill",
                    children: [n && h.jsx("div", {
                        className: (g || (g = b("stylex")))(j.icon),
                        children: n
                    }), h.jsxs("div", {
                        className: g(j.textPairing),
                        children: [h.jsx(b("GeoBaseText.react"), {
                            color: "inverted",
                            size: "value",
                            children: k
                        }), h.jsx(b("GeoBaseText.react"), {
                            color: "inverted",
                            overflowWrap: "normal",
                            size: "value",
                            children: e
                        })]
                    }), h.jsxs("div", {
                        className: g(b("geoOffset").cardEndAction, j.actionWrapper),
                        children: [h.jsx("div", {
                            className: g(j.action),
                            children: d
                        }), h.jsx(b("GeoCloseButton.react"), {
                            onClick: function() {
                                return o == null ? void 0 : o("layerCancelButton")
                            }
                        })]
                    })]
                })
            })
        })
    }
    function i(a) {
        var c;
        switch (a) {
        case "indeterminate":
            c = h.jsx(b("GeoSpinner.react"), {
                shade: "light",
                size: "small"
            });
            break;
        default:
            c = h.jsx(b("GeoStatusIcon.react"), {
                color: "inherit",
                status: a
            })
        }
        return h.jsx("div", {
            className: (g || (g = b("stylex")))(j.icon),
            children: c
        })
    }
    var j = {
        action: {
            flexShrink: "duy2mlcu",
            flexGrow: "hkvtgs2m",
            maxWidth: "j3hwk2yx"
        },
        actionWrapper: {
            display: "rwb8dzxj"
        },
        icon: {
            alignItems: "dfy4e4am",
            color: "pm1f9y2c",
            flexGrow: "hkvtgs2m",
            flexShrink: "nlmdo9b9",
            height: "akrhewu5"
        },
        textPairing: {
            display: "rwb8dzxj",
            flexDirection: "hv94jbsx",
            flexGrow: "yukb02kx",
            flexShrink: "duy2mlcu",
            flexWrap: "hts34b0n",
            wordBreak: "p66o6c86"
        }
    };
    c = b("GeoPrivateMakeComponent").makeGeoComponent("GeoToast", h.forwardRef(a));
    e.exports = c
}
), null);
__d("AssignedInstagramUserSerializedCryptoAuthTokenQuery", ["RelayFBEnvironment", "RelayModern", "promiseDone", "AssignedInstagramUserSerializedCryptoAuthTokenQuery.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = g !== void 0 ? g : g = b("AssignedInstagramUserSerializedCryptoAuthTokenQuery.graphql");
    a = function(a, c) {
        b("promiseDone")(b("RelayModern").fetchQuery(b("RelayFBEnvironment"), h, {
            pageID: a
        }), function(a) {
            c((a = a.page) == null ? void 0 : (a = a.admin_info) == null ? void 0 : a.assigned_instagram_user_serialized_crypto_auth_token)
        })
    }
    ;
    f.getAssignedInstagramUserSerializedCryptoAuthToken = a
}
), null);
__d("IGMessagingLocalIDs", ["randomInt"], (function(a, b, c, d, e, f) {
    "use strict";
    f.generateOfflineThreadingID = a;
    function a(a) {
        a = a || Date.now();
        var c = b("randomInt")(0, 4294967295);
        c = ("0000000000000000000000" + c.toString(2)).slice(-22);
        a = a.toString(2) + c;
        return g(a.slice(-63))
    }
    function g(a) {
        var b = "";
        a = a;
        while (a !== "0") {
            var c = 0
              , d = "";
            for (var e = 0; e < a.length; e++)
                c = 2 * c + parseInt(a[e], 10),
                c >= 10 ? (d += "1",
                c -= 10) : d += "0";
            b = c.toString() + b;
            a = d.slice(d.indexOf("1"))
        }
        return b
    }
}
), null);
__d("IGMqttChannel", ["FacebookAppIDs", "MqttChannel", "MqttEnvInitializer", "MqttWebConfig"], (function(a, b, c, d, e, f) {
    "use strict";
    b("MqttEnvInitializer").initialize();
    e.exports = new (b("MqttChannel"))({
        endpoint: (a = b("MqttWebConfig")).endpoint,
        pollingEndpoint: a.pollingEndpoint,
        userFbid: a.fbid,
        appId: b("FacebookAppIDs").PAGE_INBOX,
        initialSubscribedTopics: a.subscribedTopics,
        capabilities: a.capabilities,
        clientCapabilities: a.clientCapabilities,
        chatVisibility: !0
    })
}
), null);
__d("XMarketplaceShopsItemPermalinkController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/marketplace/shops/item/{item_id}/", {
        rid: {
            type: "Int"
        },
        rt: {
            type: "Enum",
            enumType: 0
        },
        location: {
            type: "Enum",
            enumType: 1
        },
        share_id: {
            type: "Int"
        },
        surface: {
            type: "String"
        },
        ref: {
            type: "String"
        },
        referral_story_type: {
            type: "Enum",
            enumType: 1
        },
        referral_code: {
            type: "String"
        },
        marketplace_initial_tracking: {
            type: "String"
        },
        marketplace_referral_story_type: {
            type: "Enum",
            enumType: 1
        },
        marketplace_tracking: {
            type: "String"
        },
        item_id: {
            type: "Int",
            required: !0
        }
    })
}
), null);
__d("InstagramDirectDeltaHandler", ["fbt", "IGMessageDataMutateAction", "IGMessageInboxStore", "PagesCommsInboxTypedLogger", "URI", "XMarketplaceShopsItemPermalinkController"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = "add", j = "replace", k = "remove", l = 1, m = 2, n = 8;
    a = {
        _convertToItemTypeEnum: function(a) {
            switch (a) {
            case "text":
                return "TEXT";
            case "media":
                return "MEDIA";
            case "like":
                return "LIKE";
            case "voice_media":
                return "VOICE_MEDIA";
            case "raven_media":
                return "RAVEN_MEDIA";
            case "media_share":
                return "MEDIA_SHARE";
            case "story_share":
                return "STORY_SHARE";
            case "reel_share":
                return "REEL_SHARE";
            case "profile":
                return "PROFILE";
            case "felix_share":
                return "FELIX_SHARE";
            case "action_log":
                return "ACTION_LOG";
            case "placeholder":
                return "PLACEHOLDER";
            case "link":
                return "LINK";
            case "animated_media":
                return "ANIMATED_MEDIA";
            case "product_share":
                return "PRODUCT_SHARE";
            case "hscroll_share":
                return "HSCROLL_SHARE";
            default:
                return "UNSUPPORTED"
            }
        },
        _getThreadIDFromPath: function(a) {
            a = a.split("/");
            for (var b = 0; b < a.length; ++b)
                if (a[b] === "threads")
                    return a[b + 1];
            return ""
        },
        _getIsMarkAsSeenFromPath: function(a) {
            a = a.split("/");
            return a[a.length - 1] === "has_seen"
        },
        _getUserIdFromPath: function(a) {
            a = a.split("/");
            for (var b = 0; b < a.length; ++b)
                if (a[b] === "participants")
                    return a[b + 1];
            return ""
        },
        _getBestVideoURLAndDimensions: function(a) {
            if (a === null || a === void 0 || a.length === 0)
                return null;
            var b = 0
              , c = !1;
            for (var d = 0; d < a.length; ++d)
                if (a[d].width === 480) {
                    c = !0;
                    d === 0 ? b = d : b = d - 1;
                    break
                }
            c === !1 && (b = a.length - 1);
            return {
                uri: a[b].url,
                width: a[b].width,
                height: a[b].height
            }
        },
        _getBestImageURLAndDimensions: function(a) {
            if (a.candidates === null || a.candidates === void 0 || a.candidates.length === 0)
                return null;
            var b = !1;
            for (var c = 0; c < a.candidates.length; ++c)
                if (a.candidates[c].width === 480)
                    if (c === 0)
                        return {
                            uri: a.candidates[c].url,
                            width: a.candidates[c].width,
                            height: a.candidates[c].height
                        };
                    else
                        return {
                            uri: a.candidates[c - 1].url,
                            width: a.candidates[c - 1].width,
                            height: a.candidates[c - 1].height
                        };
            if (b === !1)
                return {
                    uri: a.candidates[a.candidates.length - 1].url,
                    width: a.candidates[a.candidates.length - 1].width,
                    height: a.candidates[a.candidates.length - 1].height
                }
        },
        _getMediaTypeString: function(a) {
            switch (a) {
            case 1:
                return "IMAGE";
            case 2:
                return "VIDEO";
            default:
                return ""
            }
        },
        _getRavenMediaViewMode: function(a) {
            switch (a) {
            case "replayable":
                return "REPLAYABLE";
            case "permanent":
                return "PERMANENT";
            case "once":
                return "VIEW_ONCE"
            }
        },
        _getMediaPayload: function(a) {
            return a === null || a === void 0 ? null : {
                media_type: this._getMediaTypeString(a.media_type),
                image_source: this._getBestImageURLAndDimensions(a.image_versions2),
                video_source: this._getBestVideoURLAndDimensions(a.video_versions),
                expiring_at: a.expiring_at
            }
        },
        _getReactions: function(a, c, d) {
            if (a === null || a === void 0)
                return {
                    likes_count: 0
                };
            c = b("IGMessageInboxStore").getThread(c, d).getValue();
            if (c === null)
                return;
            var e = (d = c) != null ? (d = d.thread_users) != null ? d.nodes : d : d;
            if (e === null || e === void 0)
                return;
            c = a.likes.map(function(a) {
                var b;
                return {
                    instagram_user_id: a.sender_id.toString(),
                    profile_picture: {
                        uri: (b = e.find(function(b) {
                            return b.instagram_user_id === a.sender_id.toString()
                        })) != null ? (b = b.profile_picture) != null ? b.uri : b : b
                    }
                }
            });
            return {
                likes_count: a.likes_count,
                likes: c
            }
        },
        _getMediaShareMediaSource: function(a) {
            switch (a.media_type) {
            case l:
                return {
                    media_type: this._getMediaTypeString(a.media_type),
                    image_source: this._getBestImageURLAndDimensions(a.image_versions2),
                    video_source: null
                };
            case m:
                return {
                    media_type: this._getMediaTypeString(a.media_type),
                    image_source: this._getBestImageURLAndDimensions(a.image_versions2),
                    video_source: this._getBestVideoURLAndDimensions(a.video_versions)
                }
            }
        },
        _getMediaShareSources: function(a) {
            var b = this;
            switch (a.media_type) {
            case l:
            case m:
                return [this._getMediaShareMediaSource(a)];
            case n:
                return a.carousel_media.map(function(a) {
                    return b._getMediaShareMediaSource(a)
                })
            }
            return []
        },
        _getProfileSharePayload: function(a) {
            var b = this
              , c = a.profile;
            if (c === null || c === void 0)
                return null;
            a = a.preview_medias === null || a.preview_medias === void 0 ? null : a.preview_medias.map(function(a) {
                return b._getBestImageURLAndDimensions(a.image_versions2)
            });
            return {
                user: {
                    instagram_user_id: c.pk,
                    username: c.username,
                    name: c.full_name,
                    profile_picture: {
                        uri: c.profile_pic_url
                    }
                },
                media: a
            }
        },
        _getMediaSharePayload: function(a) {
            return a === null || a === void 0 ? null : {
                user: {
                    instagram_user_id: a.user.pk,
                    username: a.user.username,
                    name: a.user.full_name,
                    profile_picture: {
                        uri: a.user.profile_pic_url
                    }
                },
                media: this._getMediaShareSources(a),
                text: (a = (a = a) != null ? (a = a.caption) != null ? a.text : a : a) != null ? a : ""
            }
        },
        _getUserFromShare: function(a) {
            return a === null || a === void 0 ? null : {
                instagram_user_id: a.pk.toString(),
                username: a.username,
                name: a.full_name,
                profile_picture: {
                    uri: a.profile_pic_url
                }
            }
        },
        _getStoryMedia: function(a) {
            return a === null || a === void 0 ? null : [{
                media_type: this._getMediaTypeString(a.media_type),
                image_source: this._getBestImageURLAndDimensions(a.image_versions2),
                video_source: this._getBestVideoURLAndDimensions(a.video_versions),
                expiring_at: a.expiring_at,
                media_owner: this._getUserFromShare(a.user)
            }]
        },
        __getFelixShareMedia: function(a) {
            return a === null || a === void 0 ? null : [{
                media_type: a.media_type,
                image_source: this._getBestImageURLAndDimensions(a.image_versions2),
                video_source: this._getBestVideoURLAndDimensions(a.video_versions)
            }]
        },
        _getStoryType: function(a) {
            switch (a) {
            case "user_reel":
                return "USER_STORY";
            case "highlight_reel":
                return "HIGHLIGHT_STORY";
            case "ads_reel":
                return "ADS_STORY"
            }
        },
        _getStorySharePayload: function(a) {
            if (a === null || a === void 0)
                return null;
            var b = this._getStoryMedia(a.media);
            return {
                media: b,
                user: this._getUserFromShare((b = a) != null ? (b = b.media) != null ? b.user : b : b),
                story_type: this._getStoryType(a.reel_type),
                text: a.text,
                title: a.title,
                message: a.message
            }
        },
        _getFelixSharePayload: function(a) {
            if (a === null || a === void 0)
                return null;
            var b = this.__getFelixShareMedia(a.video);
            return {
                media: b,
                user: this._getUserFromShare((b = a) != null ? (b = b.video) != null ? b.user : b : b),
                text: a.text,
                title: a.video.title
            }
        },
        _getReelSharePayload: function(a) {
            var b;
            if (a === null || a === void 0)
                return null;
            var c = this._getStoryMedia(a.media), d;
            switch (a.type) {
            case "mention":
                b = a.mentioned_user_id === a.reel_owner_id ? (b = c) != null ? (b = b.media_owner) != null ? b.username : b : b : "";
                d = {
                    instagram_user_id: a.mentioned_user_id.toString(),
                    username: b
                };
                break;
            case "reply":
                d = (b = c) != null ? (b = b[0]) != null ? b.media_owner : b : b
            }
            return {
                media: c,
                user: d,
                story_type: this._getStoryType(a.reel_type),
                type: a.type.toUpperCase(),
                text: a.text,
                title: a.title,
                message: a.message
            }
        },
        __getProductShareMedia: function(a) {
            return a == null ? null : [{
                media_type: this._getMediaTypeString(l),
                image_source: this._getBestImageURLAndDimensions(a.image_versions2)
            }]
        },
        _getProductSharePayload: function(a) {
            if (a == null)
                return null;
            a = a.product;
            if (a === null)
                return null;
            var c = a.current_price
              , d = a.full_price
              , e = "";
            c === d ? e = c : e = g._("{currentPrice} (gi\u00e1 c\u0169: {originalPrice})", [g._param("currentPrice", c), g._param("originalPrice", d)]);
            c = "";
            a.product_id && (c = b("XMarketplaceShopsItemPermalinkController").getURIBuilder().setInt("item_id", a.product_id).getURI().setDomain("m.facebook.com").setProtocol((h || (h = b("URI"))).getRequestURI().getProtocol()).toString());
            d = this.__getProductShareMedia(a.main_image);
            var f = this._getUserFromShare(a.merchant);
            return {
                media: d,
                user: f,
                title: a.name,
                subtitle: e,
                uri: c,
                text: ""
            }
        },
        _getSharePayload: function(a) {
            switch (a.item_type) {
            case "media_share":
                return this._getMediaSharePayload(a.media_share);
            case "story_share":
                return this._getStorySharePayload(a.story_share);
            case "reel_share":
                return this._getReelSharePayload(a.reel_share);
            case "felix_share":
                return this._getFelixSharePayload(a.felix_share);
            case "product_share":
                return this._getProductSharePayload(a.product_share)
            }
        },
        _getActionLogPayload: function(a) {
            return a === null || a === void 0 || a.hide_in_thread === 1 ? null : {
                description: a.description,
                bold: a.bold
            }
        },
        _getLinkPayload: function(a) {
            return a === null || a === void 0 ? null : {
                client_context: a.client_context,
                text: a.text,
                link_context: this._getLinkContext(a.link_context)
            }
        },
        _getLinkContext: function(a) {
            return a === null || a == void 0 ? null : {
                link_url: a.link_url,
                link_title: a.link_title,
                link_summary: a.link_summary,
                link_image_url: a.link_image_url
            }
        },
        _getRavenMediaPayload: function(a) {
            var b = a.raven_media;
            if (b === null || b === void 0)
                return null;
            var c = this._getRavenMediaViewMode(a.view_mode), d;
            c === "PERMANENT" && (b.expiring_at = b.url_expire_at_secs,
            d = [this._getMediaPayload(b)]);
            return {
                media_type: this._getMediaTypeString(b.media_type),
                media: d,
                seen_user_ids: a.seen_user_ids,
                view_mode: c,
                seen_count: a.seen_count
            }
        },
        _getVisualMediaPayload: function(a) {
            a = a.visual_media;
            if (a === null || a === void 0)
                return null;
            var b = this._getRavenMediaViewMode(a.view_mode)
              , c = [];
            b === "PERMANENT" && (a.expiring_at = a.url_expire_at_secs,
            c.push(this._getMediaPayload(a)));
            return {
                media_type: this._getMediaTypeString(a.media.media_type),
                media: c,
                seen_user_ids: a.seen_user_ids,
                view_mode: b,
                seen_count: a.seen_count
            }
        },
        _getPlaceholderPayload: function(a) {
            return a === null || a === void 0 ? null : {
                title: a.title,
                message: a.message
            }
        },
        _getAnimatedMediaPayload: function(a) {
            var b;
            return !a ? null : {
                width: (b = (b = a) != null ? (b = b.images) != null ? (b = b.fixed_height) != null ? b.width : b : b : b) != null ? b : null,
                height: (b = (b = a) != null ? (b = b.images) != null ? (b = b.fixed_height) != null ? b.height : b : b : b) != null ? b : null,
                uri: (a = (b = a) != null ? (b = b.images) != null ? (b = b.fixed_height) != null ? b.url : b : b : b) != null ? a : null
            }
        },
        _getVoiceMediaPayload: function(a) {
            var b;
            return !a ? null : {
                audio_src: (b = a) != null ? (b = b.media) != null ? (b = b.audio) != null ? b.audio_src : b : b : b,
                duration: (b = a) != null ? (b = b.media) != null ? (b = b.audio) != null ? b.duration : b : b : b
            }
        },
        _getHScrollSharePayload: function(a) {
            var c = a.hscroll_share
              , d = a.product_ids;
            return c == null || c.length === 0 || d == null || d.length === 0 || c.length !== d.length ? null : c.map(function(a, c) {
                return {
                    title: a.title_text,
                    subtitle: a.subtitle_text,
                    uri: b("XMarketplaceShopsItemPermalinkController").getURIBuilder().setInt("item_id", d[c]).getURI().setDomain("m.facebook.com").setProtocol((h || (h = b("URI"))).getRequestURI().getProtocol()).toString(),
                    media: {
                        media_type: "IMAGE",
                        image_source: {
                            uri: a.preview_url,
                            width: a.preview_width,
                            height: a.preview_height
                        }
                    }
                }
            })
        },
        getDeltaItem: function(a, b) {
            return {
                token: a,
                item_id: b.item_id,
                sender_id: b.user_id.toString(),
                time_stamp: b.timestamp.toString(),
                ig_item_type: this._convertToItemTypeEnum(b.item_type),
                text: b.text,
                client_context: b.client_context,
                ig_placeholder: this._getPlaceholderPayload(b.placeholder),
                profileshare: this._getProfileSharePayload(b),
                ig_reaction: null,
                share: this._getSharePayload(b),
                action_log: this._getActionLogPayload(b.action_log),
                ig_thread_item_media: this._getMediaPayload(b.media),
                raven_media: this._getRavenMediaPayload(b) || this._getVisualMediaPayload(b),
                link_source: this._getLinkPayload(b.link),
                animated_media: this._getAnimatedMediaPayload(b.animated_media),
                voice_media: this._getVoiceMediaPayload(b.voice_media),
                hscroll_share: this._getHScrollSharePayload(b)
            }
        },
        processDeltaItem: function(a, c, d) {
            var e, f = d.value && JSON.parse(d.value), g = this._getThreadIDFromPath(d.path);
            e = b("IGMessageInboxStore").getItemToken(a, g, (e = f == null ? void 0 : f.item_id) != null ? e : d == null ? void 0 : d.value);
            new (b("PagesCommsInboxTypedLogger"))().setFunnel("user_send_to_page").setCustomerID(g).setMessageID(e).setEvent("received_new_delta").setClientTime(Date.now()).setPageID(c).setMessagingPlatform("instagram_direct").log();
            switch (d.op) {
            case i:
                var h = this.getDeltaItem(e, f);
                b("IGMessageDataMutateAction").createThreadItem(c, g, h);
                break;
            case j:
                if (this._getIsMarkAsSeenFromPath(d.path)) {
                    h = f.item_id;
                    b("IGMessageDataMutateAction").markThreadAsSeen(c, g, h, f.timestamp.toString(), this._getUserIdFromPath(d.path));
                    break
                }
                b("IGMessageDataMutateAction").updateThreadReadStatus(c, g, f.read_state === 0);
                b("IGMessageDataMutateAction").updateThreadFollowUpStatus(c, g, f.thread_label === 1);
                if (f.thread_id && f.items && f.items[0]) {
                    h = b("IGMessageInboxStore").getItemToken(a, f.thread_id, f.items[0].item_id);
                    d = this.getDeltaItem(h, f.items[0]);
                    b("IGMessageDataMutateAction").createThreadItem(c, g, d);
                    break
                }
                a = this._getReactions(f.reactions, c, g);
                h = this._getRavenMediaPayload(f) || this._getVisualMediaPayload(f);
                b("IGMessageDataMutateAction").updateThreadItem(c, g, e, {
                    ig_reaction: a,
                    raven_media: h
                });
                break;
            case k:
                if (g && !f) {
                    b("IGMessageDataMutateAction").deleteThread(c, g);
                    break
                }
                b("IGMessageDataMutateAction").deleteThreadItem(c, g, e);
                break;
            default:
                return
            }
        }
    };
    e.exports = a
}
), null);
__d("PageInstagramDirectSyncProtocolEvent", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        MQTT_CONNECTED: "mqtt_connected",
        MQTT_ERROR_RECEIVED: "mqtt_error_received",
        AUTH_TOKEN_FETCHED: "auth_token_fetched",
        IRIS_CONNECTION_REQUEST: "iris_connection_request",
        IRIS_SUBSCRIPTION_PUBLISHED: "iris_subscription_published",
        IRIS_SUBSCRIPTION_RESPONSE_EMPTY: "iris_subscription_response_empty",
        IRIS_SUBSCRIPTION_RESPONSE_RECEIVED: "iris_subscription_response_received"
    });
    e.exports = a
}
), null);
__d("InstagramDirectMessageEventStream", ["AssignedInstagramUserSerializedCryptoAuthTokenQuery", "IGMessageDataMutateAction", "IGMessagingLocalIDs", "IGMqttChannel", "InstagramDirectDeltaHandler", "MercurySingletonProvider", "MercurySyncDeltaHolder", "MqttLogger", "PageInstagramDirectSyncProtocolEvent", "PageInstagramDirectSyncProtocolTypedLogger", "PagesManagerInboxStore", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        a.getForFBID = function(a) {
            return g.getForFBID(a)
        }
        ;
        function a(a) {
            var c = this;
            this.$18 = function(a) {
                new (b("PageInstagramDirectSyncProtocolTypedLogger"))().setEvent(b("PageInstagramDirectSyncProtocolEvent").AUTH_TOKEN_FETCHED).setInstagramUserID(c.$8).setPageID(c.$1).setSessionID(c.$11).log();
                a = {
                    seq_id: c.$5,
                    snapshot_at_ms: c.$10 !== null && c.$10 !== void 0 ? c.$10 : Date.now(),
                    subscription_type: "all_message",
                    serialized_crypto_auth_token: a
                };
                c.$3.publish("/ig_sub_iris", JSON.stringify(a));
                new (b("PageInstagramDirectSyncProtocolTypedLogger"))().setEvent(b("PageInstagramDirectSyncProtocolEvent").IRIS_SUBSCRIPTION_PUBLISHED).setInstagramUserID(c.$8).setPageID(c.$1).setSessionID(c.$11).log()
            }
            ;
            this.$4 = "Disconnected";
            this.$6 = [];
            this.$2 = b("MqttLogger").getInstance();
            this.$7 = b("MercurySyncDeltaHolder").getForFBID(a);
            this.$5 = 0;
            this.$9 = !1;
            this.$12 = !1;
            this.$13 = !0
        }
        var c = a.prototype;
        c.getLatestIrisSeqID = function() {
            return this.$5
        }
        ;
        c.addDeltaStreamListener = function(a) {
            this.$6.push(a)
        }
        ;
        c.onInboxLoad = function(a, c, d, e, f, g) {
            var h = this;
            e === void 0 && (e = null);
            f === void 0 && (f = null);
            this.$5 = a;
            this.$8 = c;
            this.$1 = d;
            this.$9 = !1;
            this.$7.updateLastSeqIDAndClearHistory(a);
            this.$10 = f;
            this.$12 = g;
            (this.$3 === null || this.$3 === void 0) && (this.$11 = b("IGMessagingLocalIDs").generateOfflineThreadingID(Date.now()),
            this.$3 = e || b("IGMqttChannel"),
            this.$3.subscribeChannelEvents({
                onMQTTStateChanged: function(a) {
                    h.$4 !== "Connected" && a === "Connected" && (new (b("PageInstagramDirectSyncProtocolTypedLogger"))().setEvent(b("PageInstagramDirectSyncProtocolEvent").MQTT_CONNECTED).setPageID(h.$1).setInstagramUserID(h.$8).setSessionID(h.$11).log(),
                    h.$14()),
                    h.$4 = a
                },
                onJSError: function(a) {
                    new (b("PageInstagramDirectSyncProtocolTypedLogger"))().setEvent(b("PageInstagramDirectSyncProtocolEvent").MQTT_ERROR_RECEIVED).setPageID(h.$1).addToExtraData("error", a.message).setInstagramUserID(h.$8).setSessionID(h.$11).log(),
                    h.$15(a.message)
                }
            }),
            this.$3.subscribe("/ig_sub_iris_response", function(a) {
                return h.$16(a)
            }),
            this.$3.subscribe("/ig_message_sync", function(a) {
                return h.$17(a)
            }),
            this.$3.subscribe("/notify_disconnect", function(a) {
                return h.$15(a)
            }))
        }
        ;
        c.setAllowForceFetch = function(a) {
            this.$13 = a
        }
        ;
        c.$14 = function() {
            if (this.$12) {
                var a;
                a = (a = b("PagesManagerInboxStore").getBusinessInboxAppConfig()) == null ? void 0 : (a = a.instagramDirectConfig) == null ? void 0 : a.chatToken;
                this.$18(a)
            } else
                b("AssignedInstagramUserSerializedCryptoAuthTokenQuery").getAssignedInstagramUserSerializedCryptoAuthToken(this.$1, this.$18)
        }
        ;
        c.$19 = function(a) {
            var b = null;
            try {
                b = JSON.parse(a)
            } catch (a) {
                this.$2.logError(a, "Unable to process data")
            }
            return b
        }
        ;
        c.$16 = function(a) {
            a = this.$19(a);
            if (a === null || a === void 0) {
                new (b("PageInstagramDirectSyncProtocolTypedLogger"))().setEvent(b("PageInstagramDirectSyncProtocolEvent").IRIS_SUBSCRIPTION_RESPONSE_EMPTY).setInstagramUserID(this.$8).setPageID(this.$1).setSessionID(this.$11).log();
                return
            }
            new (b("PageInstagramDirectSyncProtocolTypedLogger"))().setEvent(b("PageInstagramDirectSyncProtocolEvent").IRIS_SUBSCRIPTION_RESPONSE_RECEIVED).setInstagramUserID(this.$8).setPageID(this.$1).setSessionID(this.$11).log()
        }
        ;
        c.$17 = function(a) {
            var b = this;
            a = this.$19(a);
            if (a === null || a === void 0)
                return;
            a.forEach(function(a) {
                a.data.forEach(function(c) {
                    b.$7.push(a.seq_id, c),
                    b.$20()
                })
            })
        }
        ;
        c.$20 = function() {
            if (this.$9)
                return;
            var a = this.$7.peek();
            if (a === null || a === void 0)
                return;
            a = a - this.$7.getLastSeqID();
            if (a === 1) {
                var c = this.$7.pop();
                if (!c)
                    return;
                var d = c.seqID;
                c = c.delta;
                this.$5 = d;
                this.$7.updateLastSeqID(d);
                b("InstagramDirectDeltaHandler").processDeltaItem(this.$8, this.$1, c);
                this.$20()
            } else
                a <= 0 ? (this.$7.pop(),
                this.$20()) : (this.$13 || !b("gkx")("1603232")) && (this.$9 = !0,
                b("IGMessageDataMutateAction").forceFetchInbox(this.$1, 20, "TODO", !1, !1, null, this.$12))
        }
        ;
        c.$15 = function(a) {
            this.$4 = "Disconnected",
            this.$2.logWarn("_handleNotifyDisconnect", "Disconnecting reason: " + a),
            this.$2.bumpCounter(a + "_request"),
            this.$6.forEach(function(b) {
                return b.onStreamDisconnect(a)
            })
        }
        ;
        return a
    }();
    e.exports = a;
    var g = new (b("MercurySingletonProvider"))(a)
}
), null);
__d("IGMessageConnectionUtils", ["InstagramDirectMessageEventStream"], (function(a, b, c, d, e, f) {
    "use strict";
    f.processInstagramMessageEventStream = a;
    function a(a, c, d, e, f) {
        e === void 0 && (e = null);
        f === void 0 && (f = !1);
        var g = b("InstagramDirectMessageEventStream").getForFBID(a).getLatestIrisSeqID();
        d != null && parseInt(d.sync_sequence_id, 10) > g && b("InstagramDirectMessageEventStream").getForFBID(a).onInboxLoad(parseInt(d.sync_sequence_id, 10), a, c, e, null, f)
    }
}
), null);
__d("OrderManagementInvoiceStatusUpdateMutation", ["RelayModern", "OrderManagementInvoiceStatusUpdateMutation.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    f.commit = a;
    var g, h = g !== void 0 ? g : g = b("OrderManagementInvoiceStatusUpdateMutation.graphql");
    function a(a, c) {
        return b("RelayModern").commitMutation(a, babelHelpers["extends"]({
            mutation: h
        }, c))
    }
}
), null);
__d("OrderManagementRefundInvoiceMutation", ["RelayModern", "OrderManagementRefundInvoiceMutation.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = g !== void 0 ? g : g = b("OrderManagementRefundInvoiceMutation.graphql");
    function a(a, c) {
        var d = c.variables;
        return b("RelayModern").commitMutation(a, babelHelpers["extends"]({
            mutation: h
        }, c, {
            variables: {
                input: babelHelpers["extends"]({}, d)
            }
        }))
    }
}
), null);
__d("PaymentActivityActionIdentifierEnum", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        MARK_AS_PAID: "mark_as_paid",
        CANCEL: "cancel",
        CANCEL_REQUEST: "cancel_request",
        MARK_AS_SHIPPED: "mark_as_shipped",
        CONFIRM_PICKUP: "confirm_pickup",
        CONTACT_CUSTOMER_SUPPORT: "contact_customer_support",
        GET_HELP: "get_help",
        CLAIM_CREATION: "claim_creation",
        VIEW_CLAIMS: "view_claims",
        TRACK: "track_order",
        PURCHASE_PROTECTION: "purchase_protection",
        WRITE_REVIEW: "write_review",
        VIEW_MERCHANT_TERMS: "view_merchant_terms",
        VIEW_MERCHANT_INFORMATION: "view_merchant_information",
        OPP_UPDATE_CARD: "opp_update_card",
        EARLY_CLAIM_CREATION: "early_claim_creation",
        LATE_CLAIM_CREATION: "late_claim_creation",
        ISSUE_RESOLVED: "issue_resolved",
        VIEW_OPEN_CLAIM: "view_open_claim",
        VIEW_CLOSED_CLAIM: "view_closed_claim",
        VIEW_NO_PP_CLAIM: "view_no_pp_claim",
        VIEW_REFUNDED_CLAIM: "view_refunded_claim",
        VIEW_CLAIM_REDIRECT: "view_claim_redirect",
        PAYMENT_CAPTURE_FAILURE: "payment_capture_failure",
        REQUEST_NEW_RECEIPT: "request_new_receipt",
        ATTACH_NEW_RECEIPT: "attach_new_receipt",
        VIEW_RECEIPT: "view_receipt",
        COMMERCE_PAY_REQUEST: "commerce_pay_request",
        CLICK_BANNER: "click_banner",
        CLOSE_BANNER: "close_banner",
        MFS_CANCEL_TRANSFER: "mfs_cancel_transfer",
        MFS_CONTACT_SUPPORT: "mfs_contact_support",
        MFS_DECLINE_TRANSFER: "mfs_decline_transfer",
        MFS_OPEN_NUX: "mfs_open_nux",
        MFS_MANAGE_MONEY: "mfs_manage_money",
        MFS_DEEPLINK: "mfs_deeplink",
        LAUNCH_IDENTITY_VERIFICATION: "launch_identity_verification",
        SHARE: "share",
        INVITE: "invite",
        VIEW_SELLER: "view_seller",
        VIEW_ITEM: "view_item",
        VIEW_ORDER: "view_order",
        VIEW_ORDERS: "view_orders",
        VIEW_ORDER_DETAILS: "view_order_details",
        VIEW_PDP: "view_pdp",
        VIEW_SHOP_ORDER: "view_shop_order",
        VIEW_RETURN_LABEL: "view_return_label",
        GO_TO_MESSAGE_THREAD: "go_to_message_thread",
        P2P_PAY_REQUEST: "p2p_pay_request",
        P2P_DECLINE_REQUEST: "p2p_decline_request",
        P2P_CANCEL_REQUEST: "p2p_cancel_request",
        P2P_DECLINE_TRANSFER: "p2p_decline_transfer",
        P2P_OPEN_RECEIPT: "p2p_open_receipt",
        P2P_VERIFY_INFO: "p2p_verify_info",
        P2P_ACCEPT_MONEY: "p2p_accept_money",
        P2P_UPDATE_CARD: "p2p_update_card",
        P2P_TRIGGER_RECEIVE: "p2p_trigger_receive",
        P2P_GENERAL_LINK: "p2p_general_link",
        P2P_GENERAL_CONTINUE: "p2p_general_continue",
        P2P_DISMISS_FLOW: "p2p_dismiss_flow",
        P2P_OPEN_DIALOG: "p2p_open_dialog",
        MCOM_SEND_MESSAGE: "mcom_send_message",
        MCOM_REQUEST_PAYMENT: "mcom_request_payment",
        MCOM_MARK_AS_PAID: "mcom_mark_as_paid",
        MCOM_MARK_AS_SHIPPED: "mcom_mark_as_shipped",
        MCOM_MAKE_PAYMENT: "mcom_make_payment",
        MCOM_ADD_SHIPPING_INFO: "mcom_add_shipping_info",
        MCOM_MARK_AS_RECEIVED: "mcom_mark_as_received",
        MCOM_SEE_DETAILS: "mcom_see_details",
        MCOM_REMIND_BUYER: "mcom_remind_buyer",
        MCOM_LEAVE_RATING: "mcom_leave_rating",
        MCOM_EXPAND_ACTIONS: "mcom_expand_actions",
        MCOM_GENERAL_LINK: "mcom_general_link",
        MCOM_MESSAGE_SELLER: "mcom_message_seller",
        MCOM_SEND_REFUND: "mcom_send_refund",
        MCOM_START_DISPUTE: "mcom_start_dispute",
        MCOM_MANAGE_DISPUTE: "mcom_manage_dispute",
        MCOM_REPORT_TO_FB: "mcom_report_to_fb",
        MCOM_RECEIVED_BUT_DAMAGED: "mcom_received_but_damaged",
        MCOM_RECEIVED_BUT_NOT_AS_DESCRIBED: "mcom_received_but_not_as_described",
        MCOM_ORDER_NOT_DELIVERED: "mcom_order_not_delivered",
        GROUP_PAYMENT_GIFT_CLAIM: "group_payment_gift_claim",
        MANAGE_SUBSCRIPTION: "manage_subscription",
        CANCEL_SUBSCRIPTION: "cancel_subscription",
        CHANGE_SUBSCRIPTION_CREDENTIAL: "change_subscription_credential",
        EDIT_SUBSCRIPTION_CREDIT_CARD: "edit_subscription_credit_card",
        HELP_CENTER_SUBSCRIPTION: "help_center_subscription",
        PAUSE_SUBSCRIPTION: "pause_subscription",
        RECEIPT_STATUS_COMPONENT: "receipt_status_component",
        RESTART_SUBSCRIPTION: "restart_subsciption",
        RESTORE_SUBSCRIPTION: "restore_subscription",
        RESUBSCRIBE_SUBSCRIPTION: "resubscribe_subscription",
        UNPAUSE_SUBSCRIPTION: "unpause_subscription",
        ITEM_LATE_OR_MISSING: "cs_item_late_or_missing",
        ITEM_DAMAGED_OR_NOT_AS_DESCRIBED: "cs_item_damaged_or_not_as_described",
        CHANGE_SHIPPING_ADDRESS: "cs_change_shipping_address",
        UPDATE_ORDER: "cs_update_order",
        UPDATE_EMAIL: "cs_update_email",
        ANOTHER_QUESTION: "cs_another_question",
        CO_CHANGED_MY_MIND: "co_changed_my_mind",
        CO_ORDERED_BY_ACCIDENT: "co_ordered_by_accident",
        CO_FOUND_A_BETTER_PRICE: "co_found_a_better_price",
        CO_CHANGE_SHIPPING_ADDRESS: "co_change_shipping_address",
        CO_CHANGE_PAYMENT_METHOD: "co_change_payment_method",
        CO_SOMETHING_ELSE: "co_something_else",
        CS_UNAUTHORIZED_ORDER: "cs_unauthorized_order",
        CS_GENERAL_INQUIRY: "cs_general_inquiry",
        CS_RECONTACT_MARK_AS_RESOLVED: "cs_recontact_mark_as_resolved",
        CS_RECONTACT_MARK_AS_UNRESOLVED: "cs_recontact_mark_as_unresolved",
        CS_RECONTACT_ESCALATE: "cs_recontact_escalate",
        CS_MESSAGE_MERCHANT_ABOUT_ITEM: "cs_message_merchant_about_item",
        CS_CONTACT_MERCHANT: "cs_contact_merchant",
        CS_CONTACT_MERCHANT_LATE_OR_MISSING_ORDER: "cs_contact_merchant_late_or_missing_order",
        CS_CONTACT_MERCHANT_DAMAGED_NOT_AS_DESCRIBED_ORDER: "cs_contact_merchant_damaged_not_as_described_order",
        CS_CONTACT_MERCHANT_ORDER_MADE_BY_OTHERS: "cs_contact_merchant_order_made_by_others",
        CS_CONTACT_MERCHANT_OTHER_QUESTION: "cs_contact_merchant_other_question",
        BUYER_ORDER_CANCEL: "buyer_order_cancel",
        BUYER_ORDER_RETURN: "buyer_order_return",
        BUYER_ORDER_UPDATE: "buyer_order_update",
        BUYER_SEE_RETURN_DETAILS: "buyer_see_return_details",
        BUYER_DPO_CONTACT_SUPPORT: "buyer_dpo_contact_support",
        BUYER_ORDER_CANCEL_REQUEST: "buyer_order_cancel_request",
        BUYER_ORDER_UPDATE_REQUEST: "buyer_order_update_request",
        BUYER_ORDER_INQUIRY_RECONTACT_CLAIM: "buyer_order_inquiry_recontact_claim",
        SELLER_CHARGEBACK_REPRESENTMENT: "seller_chargeback_representment",
        SELLER_CLAIM_APPEALS: "seller_claim_appeals",
        VIEW_GIFTCARD: "view_giftcard",
        MANAGE_TICKET_THROUGH_THIRD_PARTY: "manage_ticket_through_third_party",
        CLAIM_TICKET: "claim_ticket",
        CONTACT_FACEBOOK_SUPPORT: "contact_facebook_support",
        OPEN_PURCHASE_PROTECTION_CLAIM: "open_purchase_protection_claim",
        PAY_CONFIRMATION_CONFIGURATION_DONE: "pay_confirmation_configuration_done",
        PAY_CONFIRMATION_CONFIGURATION_VIEW_DETAILS: "pay_confirmation_configuration_view_details",
        PAY_CONFIRMATION_CONFIGURATION_SETUP_FBPAY_PIN: "pay_confirmation_configuration_setup_fbpay_pin",
        SUPPORT_EXPERIENCE_RATING_SUBMITTED: "support_experience_rating_submitted",
        CHECKOUT_OFFER_STATUS_MAKE_ANOTHER_OFFER: "checkout_offer_status_make_another_offer",
        CHECKOUT_OFFER_STATUS_BUY_FOR_LISTING_PRICE: "checkout_offer_status_buy_for_listing_price",
        CHECKOUT_OFFER_STATUS_VIEW_ORDER: "checkout_offer_status_view_order"
    });
    e.exports = a
}
), null);
__d("OrderManagementMutationsUtil", ["OrderManagementInvoiceStatusUpdateMutation", "OrderManagementRefundInvoiceMutation", "PaymentActivityActionIdentifierEnum", "PaymentModulesClient", "RelayFBEnvironment", "keyMirror"], (function(a, b, c, d, e, f) {
    "use strict";
    f.triggerCancelInvoiceMutation = a;
    f.triggerMarkAsShippedMutation = c;
    f.triggerRefundInvoiceMutation = d;
    var g = b("keyMirror")(b("PaymentModulesClient"))
      , h = b("keyMirror")(b("PaymentActivityActionIdentifierEnum"));
    function a(a, c, d, e) {
        b("OrderManagementInvoiceStatusUpdateMutation").commit(b("RelayFBEnvironment"), {
            variables: {
                data: {
                    product_id: a,
                    product_type: g.PAGES_COMMERCE,
                    actor_id: c,
                    action_identifier: h.CANCEL,
                    client_mutation_id: "1",
                    action_data: [{
                        key: "order_id",
                        value: a
                    }]
                }
            },
            onCompleted: e || null,
            onError: d || null
        })
    }
    function c(a, c, d, e, f, i, j, k) {
        var l = [];
        j != null ? l = [{
            key: "order_id",
            value: a
        }, {
            key: "shipment_provider",
            value: d
        }, {
            key: "shipment_tracking_number",
            value: e
        }, {
            key: "ad_interaction_id",
            value: j
        }] : k != null ? l = [{
            key: "order_id",
            value: a
        }, {
            key: "shipment_provider",
            value: d
        }, {
            key: "shipment_tracking_number",
            value: e
        }, {
            key: "user_id",
            value: k
        }] : l = [{
            key: "order_id",
            value: a
        }, {
            key: "shipment_provider",
            value: d
        }, {
            key: "shipment_tracking_number",
            value: e
        }];
        b("OrderManagementInvoiceStatusUpdateMutation").commit(b("RelayFBEnvironment"), {
            variables: {
                data: {
                    product_id: a,
                    product_type: g.PAGES_COMMERCE,
                    actor_id: c,
                    action_identifier: h.MARK_AS_SHIPPED,
                    client_mutation_id: "1",
                    action_data: l
                }
            },
            onCompleted: i || null,
            onError: f || null
        })
    }
    function d(a, c, d, e) {
        b("OrderManagementRefundInvoiceMutation")(b("RelayFBEnvironment"), {
            variables: {
                actor_id: c,
                invoice_id: a
            },
            onCompleted: e || null,
            onError: d || null
        })
    }
}
), null);
__d("PagesInboxThreadActionSystemDispatcher", ["ExplicitRegistrationDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    a = new (b("ExplicitRegistrationDispatcher"))({
        strict: !1
    });
    e.exports = a
}
), null);
__d("ServicesShipOrderDialogItem.react", ["ix", "cx", "fbt", "AdsCurrencyFormatter", "DateTime", "FDSButton.react", "Image.react", "LeftRight.react", "React", "Timezone", "asset"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = b("React")
      , k = b("Timezone").getEnvironmentTimezoneID() || b("Timezone").UTC;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.$1 = function() {
                c.props.onSelectClick(c.props.order)
            }
            ,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.render = function() {
            return j.jsxs(b("LeftRight.react"), {
                children: [j.jsxs(b("LeftRight.react"), {
                    children: [this.props.orderUrl != null ? j.jsx(b("Image.react"), {
                        className: "_8a-0",
                        src: this.props.orderUrl
                    }) : j.jsx("div", {
                        className: "_8azm",
                        children: j.jsx(b("Image.react"), {
                            src: g("994826")
                        })
                    }), j.jsxs("div", {
                        children: [j.jsx("div", {
                            className: "_8azn",
                            children: b("DateTime").create(this.props.unixTimestamp, k).format("M j, Y") + " \u2022 " + b("AdsCurrencyFormatter").formatCurrency(this.props.paymentCurrency, this.props.paymentAmount * 100)
                        }), j.jsx("div", {
                            className: "_8azr",
                            children: "#" + this.props.invoiceID
                        })]
                    })]
                }), j.jsx("div", {
                    className: "_8azs",
                    children: j.jsx(b("FDSButton.react"), {
                        label: i._("Select"),
                        onClick: this.$1,
                        use: "default"
                    })
                })]
            })
        }
        ;
        return c
    }(j.PureComponent);
    e.exports = a
}
), null);
__d("ServicesShipOrderDialog.react", ["cx", "fbt", "FDSSection.react", "FDSSpinner.react", "OrderManagementLoggingUtil", "React", "RelayFBEnvironment", "RelayModern", "ServicesShipOrderDialogItem.react", "SUIBusinessThemeContainer.react", "ServicesShipOrderDialogListQuery.graphql"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i, j = b("React"), k = i !== void 0 ? i : i = b("ServicesShipOrderDialogListQuery.graphql");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$1 = function(a) {
                var c = a.error;
                a = a.props;
                if (c) {
                    b("OrderManagementLoggingUtil").getManageShopLogger(d.props.pageID).setFlowStep("load_thread_action_system_orders_list").setEventName("fail").setErrorMessage(c.toString()).log();
                    return h._("Sorry! Something went wrong!")
                }
                if (!a)
                    return j.jsx(b("FDSSpinner.react"), {
                        center: !0
                    });
                b("OrderManagementLoggingUtil").getManageShopLogger(d.props.pageID).setFlowStep("load_thread_action_system_orders_list").setEventName("success").log();
                var e = a.page.payment_invoices.edges;
                return e.length === 0 ? h._("There are no orders to ship.") : e.map(function(a, c) {
                    var f = "_8bfa";
                    c === 0 && (f = "_8bmv");
                    c === e.length - 1 && (f = "_8bmw");
                    return j.jsx("div", {
                        className: f,
                        children: j.jsx(b("ServicesShipOrderDialogItem.react"), {
                            invoiceID: a.node.id,
                            onSelectClick: d.props.onSelectClick,
                            order: a.node,
                            paymentAmount: a.node.total_amount.amount,
                            paymentCurrency: a.node.total_amount.currency,
                            unixTimestamp: a.node.updated_time
                        })
                    }, a.node.id)
                })
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.render = function() {
            var a = j.jsx(b("RelayModern").QueryRenderer, {
                environment: b("RelayFBEnvironment"),
                query: k,
                render: this.$1,
                variables: {
                    pageID: this.props.pageID,
                    userID: this.props.userID
                }
            });
            return j.jsx(b("SUIBusinessThemeContainer.react"), {
                children: j.jsx(b("FDSSection.react"), {
                    children: j.jsx("div", {
                        className: "_8bfb",
                        children: a
                    })
                })
            })
        }
        ;
        return c
    }(j.PureComponent);
    e.exports = a
}
), null);
__d("OrderManagementSimplifiedFulfillAction.react", ["fbt", "FDSButton.react", "FDSCancelButton.react", "FDSModal.react", "FDSModalFooter.react", "FDSModalHeader.react", "FDSSection.react", "FDSSelector.react", "FDSSelectorItem.react", "FDSText.react", "FDSTextInput.react", "OrderManagementLoggingUtil", "OrderManagementMutationsUtil", "PagesInboxThreadActionSystemDispatcher", "React", "RelayModern", "SEModalError.react", "ServicesShipOrderDialog.react", "ShopManagementContactSupportLink.react", "ShopsOnboardingLoadingOverlay", "SUIBusinessThemeContainer.react", "cxMargin", "OrderManagementSimplifiedFulfillAction_order.graphql", "OrderManagementSimplifiedFulfillAction_page.graphql"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), h = 0; h < e; h++)
                f[h] = arguments[h];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.state = {
                isLoading: !1,
                isThreadActionSystem: !1,
                modalErrorMessage: null,
                shippingProvider: "",
                trackingNumber: "",
                order: null
            },
            d.onSuccessHandler = function() {
                var a = d.props.pageID
                  , c = d.props.order ? d.props.order : d.state.order;
                c = c == null ? void 0 : c.id;
                var e = d.state.isThreadActionSystem ? b("OrderManagementLoggingUtil").ORDER_DETAIL_ENTRY_POINT.CTM_THREAD_ACTION_SYSTEM : b("OrderManagementLoggingUtil").ORDER_DETAIL_ENTRY_POINT.WWW_ORDER_MANAGEMENT;
                b("OrderManagementLoggingUtil").getManageShopLogger(a, c).setFlowStep("action_mark_as_shipped").setEventName("success").setEmMktExtraData(JSON.stringify({
                    surface: e,
                    shipping_provider: d.state.shippingProvider,
                    tracking_number: d.state.trackingNumber
                })).log();
                b("PagesInboxThreadActionSystemDispatcher").dispatch(!0);
                d.setState({
                    isThreadActionSystem: !1
                });
                d.props.onClose()
            }
            ,
            d.onErrorHandler = function(a) {
                var c = d.props
                  , e = c.pageID;
                c = c.order;
                c = c == null ? void 0 : c.id;
                var f = d.state.isThreadActionSystem ? b("OrderManagementLoggingUtil").ORDER_DETAIL_ENTRY_POINT.CTM_THREAD_ACTION_SYSTEM : b("OrderManagementLoggingUtil").ORDER_DETAIL_ENTRY_POINT.WWW_ORDER_MANAGEMENT;
                d.setState({
                    isLoading: !1,
                    isThreadActionSystem: !1,
                    modalErrorMessage: a.description
                });
                e = b("OrderManagementLoggingUtil").getManageShopLogger(e, c).setFlowStep("action_mark_as_shipped").setEventName("fail").setEmMktExtraData(JSON.stringify({
                    surface: f,
                    shipping_provider: d.state.shippingProvider,
                    tracking_number: d.state.trackingNumber
                })).setErrorMessage(a.description);
                a.code !== null && a.code !== void 0 && e.setErrorCode(a.code.toString());
                e.log()
            }
            ,
            d.onSave = function() {
                var a = d.props.pageID
                  , c = d.props.order ? d.props.order : d.state.order
                  , e = c == null ? void 0 : c.id
                  , f = d.state.isThreadActionSystem ? b("OrderManagementLoggingUtil").ORDER_DETAIL_ENTRY_POINT.CTM_THREAD_ACTION_SYSTEM : b("OrderManagementLoggingUtil").ORDER_DETAIL_ENTRY_POINT.WWW_ORDER_MANAGEMENT;
                b("OrderManagementLoggingUtil").getManageShopLogger(a, e).setFlowStep("action_mark_as_shipped").setEventName("init").setEmMktExtraData(JSON.stringify({
                    surface: f,
                    has_tracking_info: d.state.shippingProvider !== "" && d.state.trackingNumber !== "",
                    shipping_provider: d.state.shippingProvider,
                    tracking_number: d.state.trackingNumber
                })).log();
                f = g._("We are unable to mark the order as shipped at this time.");
                if (e == null || a == null) {
                    d.setState({
                        modalErrorMessage: f
                    });
                    b("OrderManagementLoggingUtil").getManageShopLogger(a, e).setFlowStep("action_mark_as_shipped").setEventName("fail").setEmMktExtraData(JSON.stringify({
                        shipping_provider: d.state.shippingProvider,
                        tracking_number: d.state.trackingNumber
                    })).setErrorMessage("Null orderID or pageID").setErrorCode("0").log();
                    return
                }
                d.setState({
                    isLoading: !0
                }, function() {
                    var f;
                    b("OrderManagementMutationsUtil").triggerMarkAsShippedMutation(e, a, d.state.shippingProvider, d.state.trackingNumber, d.onErrorHandler, d.onSuccessHandler, null, c == null ? void 0 : (f = c.invoice_customer) == null ? void 0 : f.id)
                })
            }
            ,
            d.$1 = function(a) {
                d.setState({
                    order: a
                })
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.renderOrders = function() {
            return j.jsx(b("ServicesShipOrderDialog.react"), {
                onSelectClick: this.$1,
                pageID: this.props.pageID,
                userID: this.props.userID
            })
        }
        ;
        d.renderForm = function() {
            var a = this
              , c = g._("Shipping Provider")
              , d = this.props.page
              , e = d == null ? void 0 : d.shippingCarriers.map(function(a) {
                var c;
                return j.jsx(b("FDSSelectorItem.react"), {
                    label: (c = a.name) != null ? c : "",
                    value: (c = a.slug) != null ? c : ""
                }, "provider-" + ((c = a.slug) != null ? c : ""))
            });
            d = j.jsx("div", {
                className: "_3-8n",
                children: ((d = d == null ? void 0 : (d = d.isShipmentTrackingEnabled) == null ? void 0 : d.passes) != null ? d : !1) ? j.jsx(b("FDSSelector.react"), {
                    "data-button-testid": "fds-selector-button",
                    label: c,
                    value: this.state.shippingProvider,
                    onChange: function(b) {
                        a.setState({
                            shippingProvider: b
                        })
                    },
                    children: e
                }) : j.jsx(b("FDSTextInput.react"), {
                    label: c,
                    labelIsHidden: !0,
                    value: this.state.shippingProvider,
                    onChange: function(b) {
                        a.setState({
                            shippingProvider: b
                        })
                    }
                })
            });
            e = j.jsx("div", {
                className: "_3-8n",
                children: j.jsx(b("FDSTextInput.react"), {
                    label: g._("S\u1ed1 theo d\u00f5i"),
                    labelIsHidden: !0,
                    value: this.state.trackingNumber,
                    onChange: function(b) {
                        a.setState({
                            trackingNumber: b
                        })
                    }
                })
            });
            return j.jsxs(j.Fragment, {
                children: [j.jsx(b("FDSText.react"), {
                    color: "primary",
                    display: "block",
                    size: "body3",
                    weight: "bold",
                    children: g._("Shipping Provider (optional)")
                }), d, j.jsx(b("FDSText.react"), {
                    color: "primary",
                    display: "block",
                    margin: "_3-8z",
                    size: "body3",
                    weight: "bold",
                    children: g._("Tracking Number (optional)")
                }), e]
            })
        }
        ;
        d.renderModalContent = function() {
            var a, c;
            a = this.state.isThreadActionSystem ? (a = this.state.order) == null ? void 0 : (a = a.invoice_customer) == null ? void 0 : a.name : (a = this.props.order) == null ? void 0 : (a = a.invoice_customer) == null ? void 0 : a.name;
            c = ((c = (c = this.props.page) == null ? void 0 : (c = c.isShipmentTrackingEnabled) == null ? void 0 : c.passes) != null ? c : !1) ? j.jsx(b("FDSText.react"), {
                display: "block",
                margin: "_3-8p",
                size: "body1",
                children: g._("{buyerName} s\u1ebd \u0111\u01b0\u1ee3c th\u00f4ng b\u00e1o khi b\u1ea1n \u0111\u00e1nh d\u1ea5u \u0111\u01a1n \u0111\u1eb7t h\u00e0ng n\u00e0y l\u00e0 \u0111\u00e3 v\u1eadn chuy\u1ec3n. N\u1ebfu b\u1ea1n th\u00eam s\u1ed1 theo d\u00f5i h\u1ee3p l\u1ec7, h\u1ecd s\u1ebd t\u1ef1 \u0111\u1ed9ng nh\u1eadn \u0111\u01b0\u1ee3c th\u00f4ng tin m\u1edbi c\u1ee7a h\u00e3ng v\u1eadn chuy\u1ec3n.", [g._param("buyerName", a)])
            }) : j.jsx(b("FDSText.react"), {
                display: "block",
                margin: "_3-8p",
                size: "body1",
                children: g._("Ch\u00fang t\u00f4i s\u1ebd g\u1eedi th\u00f4ng b\u00e1o cho kh\u00e1ch h\u00e0ng c\u1ee7a b\u1ea1n \u0111\u1ec3 h\u1ecd bi\u1ebft r\u1eb1ng \u0111\u01a1n h\u00e0ng c\u1ee7a h\u1ecd \u0111\u00e3 \u0111\u01b0\u1ee3c v\u1eadn chuy\u1ec3n. S\u1ed1 theo d\u00f5i n\u00e0y s\u1ebd \u0111\u01b0\u1ee3c c\u1eadp nh\u1eadt trong ph\u1ea7n th\u00f4ng tin chi ti\u1ebft v\u1ec1 \u0111\u01a1n h\u00e0ng.")
            });
            return j.jsxs(b("SUIBusinessThemeContainer.react"), {
                children: [j.jsx(b("SEModalError.react"), {
                    message: this.state.modalErrorMessage
                }), c, this.renderForm(), j.jsx(b("ShopsOnboardingLoadingOverlay"), {
                    isLoading: this.state.isLoading
                })]
            })
        }
        ;
        d.render = function() {
            var a = this
              , c = j.jsx(b("FDSButton.react"), {
                isDisabled: this.state.isLoading || !this.state.order && !this.props.order,
                label: g._("\u0110\u00e1nh d\u1ea5u l\u00e0 \u0110\u00e3 v\u1eadn chuy\u1ec3n"),
                use: "primary",
                onClick: this.onSave
            })
              , d = j.jsx(b("FDSCancelButton.react"), {
                isDisabled: this.state.isLoading,
                onClick: this.props.onClose
            })
              , e = j.jsx(b("FDSModalHeader.react"), {
                title: g._("\u0110\u00e1nh d\u1ea5u l\u00e0 \u0110\u00e3 v\u1eadn chuy\u1ec3n")
            });
            c = j.jsx(b("FDSModalFooter.react"), {
                leftContent: j.jsx(b("ShopManagementContactSupportLink.react"), {}),
                primaryButton: c,
                secondaryButton: d
            });
            d = g._("\u0110\u00e1nh d\u1ea5u l\u00e0 \u0110\u00e3 v\u1eadn chuy\u1ec3n");
            this.props.order || this.setState({
                isThreadActionSystem: !0
            });
            if (!this.props.order && !this.state.order)
                return j.jsx(b("FDSModal.react"), {
                    footer: c,
                    header: e,
                    isShown: !0,
                    label: d,
                    onHide: function() {
                        a.state.isLoading || a.props.onClose()
                    },
                    children: j.jsx(b("FDSSection.react"), {
                        children: this.renderOrders()
                    })
                });
            else
                return j.jsx(b("FDSModal.react"), {
                    footer: c,
                    header: e,
                    isShown: !0,
                    label: d,
                    onHide: function() {
                        a.state.isLoading || a.props.onClose()
                    },
                    children: j.jsx(b("FDSSection.react"), {
                        children: this.renderModalContent()
                    })
                })
        }
        ;
        return c
    }(j.PureComponent);
    c = b("RelayModern").createFragmentContainer(a, {
        order: h !== void 0 ? h : h = b("OrderManagementSimplifiedFulfillAction_order.graphql"),
        page: i !== void 0 ? i : i = b("OrderManagementSimplifiedFulfillAction_page.graphql")
    });
    e.exports = c
}
), null);
__d("CMTSegmentationType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        ALL_CUSTOMER: "all_customer",
        INBOX_MESSENGER_FOLLOW_UP: "inbox_messenger_follow_up",
        INBOX_MESSENGER_UNREAD: "inbox_messenger_unread",
        INBOX_MESSENGER_NOT_REPLIED: "inbox_messenger_not_replied",
        INBOX_CTM_AD: "inbox_ctm_ad",
        INBOX_RECENT_PAID: "inbox_recent_paid",
        LEAD_CENTER_AUDIENCE_EXPANSION_RAW_LEADS: "lead_center_audience_expansion_raw_leads",
        LEAD_CENTER_AUDIENCE_EXPANSION_CONVERTED_LEADS: "lead_center_audience_expansion_converted_leads",
        LEAD_CENTER_REMARKETING_ADS_UPSELL: "lead_center_remarketing_ads_upsell"
    });
    e.exports = a
}
), null);
__d("CMTSegmentationForUpsellImpressionMutation.react", ["CMTSegmentationType", "RelayModern", "keyMirror", "CMTSegmentationForUpsellImpressionMutation.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    f.commitCardImpression = a;
    var g, h = b("keyMirror")(b("CMTSegmentationType")), i = g !== void 0 ? g : g = b("CMTSegmentationForUpsellImpressionMutation.graphql");
    function a(a, c, d, e) {
        c = h[c];
        a = {
            input: {
                bpn_id: a,
                cmt_segmentation_type: c
            }
        };
        return b("RelayModern").commitMutation(d, {
            mutation: i,
            variables: a,
            onCompleted: e == null ? void 0 : e.onSuccess,
            onError: e == null ? void 0 : e.onFailure
        })
    }
}
), null);
__d("CMTSegmentationForUpsellTempDismissMutation.react", ["CMTSegmentationType", "RelayModern", "keyMirror", "CMTSegmentationForUpsellTempDismissMutation.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    f.commitCardTemporaryDismiss = a;
    var g, h = b("keyMirror")(b("CMTSegmentationType")), i = g !== void 0 ? g : g = b("CMTSegmentationForUpsellTempDismissMutation.graphql");
    function a(a, c, d, e) {
        c = h[c];
        a = {
            input: {
                bpn_id: a,
                cmt_segmentation_type: c
            }
        };
        return b("RelayModern").commitMutation(d, {
            mutation: i,
            variables: a,
            onCompleted: e == null ? void 0 : e.onSuccess,
            onError: e == null ? void 0 : e.onFailure
        })
    }
}
), null);
__d("IGDirectMessageThreadPreviewView.react", ["ix", "cx", "fbt", "Image.react", "React", "asset", "cxMargin", "nullthrows"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = b("React")
      , k = "HIGHLIGHT_STORY"
      , l = "REACTION"
      , m = "REPLY";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a, c, d, e = this.props.item.sender_id === this.props.igID;
            switch (this.props.item.ig_item_type) {
            case "TEXT":
                return j.jsx("div", {
                    children: e ? j.jsxs("span", {
                        children: [i._("B\u1ea1n:"), " ", (d = this.props.item) != null ? d.text : d]
                    }) : j.jsx("span", {
                        children: (d = this.props.item) != null ? d.text : d
                    })
                });
            case "LINK":
                d = b("nullthrows")((d = this.props) != null ? (d = d.item) != null ? (d = d.link_source) != null ? d.text : d : d : d);
                return j.jsx("div", {
                    children: e ? j.jsxs("span", {
                        children: [i._("B\u1ea1n:"), " ", d]
                    }) : j.jsx("span", {
                        children: d
                    })
                });
            case "ANIMATED_MEDIA":
                return j.jsx("div", {
                    children: e ? i._("B\u1ea1n \u0111\u00e3 chia s\u1ebb m\u1ed9t file GIF.") : i._("\u0110\u00e3 chia s\u1ebb m\u1ed9t file GIF.")
                });
            case "MEDIA":
                d = (d = this.props.item) != null ? (d = d.ig_thread_item_media) != null ? d.media_type : d : d;
                switch (d) {
                case "IMAGE":
                    return e ? i._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t \u1ea3nh") : i._("\u0110\u00e3 g\u1eedi m\u1ed9t \u1ea3nh");
                case "VIDEO":
                    return e ? i._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t video") : i._("\u0110\u00e3 g\u1eedi m\u1ed9t video")
                }
                break;
            case "MEDIA_SHARE":
                return e ? i._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t b\u00e0i vi\u1ebft") : i._("\u0110\u00e3 g\u1eedi m\u1ed9t b\u00e0i vi\u1ebft");
            case "STORY_SHARE":
                d = (d = this.props.item) != null ? (d = d.share) != null ? d.story_type : d : d;
                c = (c = this.props.item) != null ? (c = c.share) != null ? (c = c.user) != null ? c.username : c : c : c;
                a = (a = this.props.item) != null ? (a = a.share) != null ? a.title : a : a;
                if (c === null)
                    return a;
                if (d === "USER_STORY" || d === "ADS_STORY")
                    if (e)
                        return i._("B\u1ea1n \u0111\u00e3 g\u1eedi tin c\u1ee7a {username}", [i._param("username", c)]);
                    else
                        return i._("\u0110\u00e3 g\u1eedi tin c\u1ee7a {username}", [i._param("username", c)]);
                if (e)
                    return i._("B\u1ea1n \u0111\u00e3 g\u1eedi tin n\u1ed5i b\u1eadt c\u1ee7a {username}", [i._param("username", c)]);
                else
                    return i._("\u0110\u00e3 g\u1eedi tin n\u1ed5i b\u1eadt c\u1ee7a {username}", [i._param("username", c)]);
            case "FELIX_SHARE":
                if (e)
                    return i._("B\u1ea1n \u0111\u00e3 chia s\u1ebb m\u1ed9t video IGTV");
                else
                    return i._("\u0110\u00e3 chia s\u1ebb m\u1ed9t video tr\u00ean IGTV");
            case "RAVEN_MEDIA":
                d = (a = this.props.item) != null ? (a = a.raven_media) != null ? a.media_type : a : a;
                switch (d) {
                case "IMAGE":
                    return e ? i._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t \u1ea3nh") : i._("\u0110\u00e3 g\u1eedi m\u1ed9t \u1ea3nh");
                case "VIDEO":
                    return e ? i._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t video") : i._("\u0110\u00e3 g\u1eedi m\u1ed9t video")
                }
                break;
            case "PROFILE":
                return j.jsx("div", {
                    children: e ? j.jsxs("span", {
                        children: [i._("B\u1ea1n:"), " ", "@", (c = this.props.item) != null ? (c = c.profileshare) != null ? (c = c.user) != null ? c.username : c : c : c]
                    }) : j.jsxs("span", {
                        children: ["@", (a = this.props.item) != null ? (a = a.profileshare) != null ? (a = a.user) != null ? a.username : a : a : a]
                    })
                });
            case "LIKE":
                return e ? j.jsxs("div", {
                    className: "_76uz",
                    children: [i._("B\u1ea1n:"), j.jsx(b("Image.react"), {
                        className: "_3-99",
                        src: g("562747")
                    })]
                }) : j.jsx(b("Image.react"), {
                    src: g("562747")
                });
            case "ACTION_LOG":
                return (d = this.props.item) != null ? (d = d.action_log) != null ? d.description : d : d;
            case "REEL_SHARE":
                a = (c = this.props) != null ? (c = c.item) != null ? (c = c.share) != null ? c.type : c : c : c;
                c = (d = this.props) != null ? (d = d.item) != null ? (d = d.share) != null ? d.story_type : d : d : d;
                if (e) {
                    if (a === m)
                        return c === k ? i._("B\u1ea1n \u0111\u00e3 tr\u1ea3 l\u1eddi tin n\u1ed5i b\u1eadt c\u1ee7a h\u1ecd") : i._("B\u1ea1n \u0111\u00e3 tr\u1ea3 l\u1eddi tin c\u1ee7a h\u1ecd");
                    if (a === l) {
                        d = (d = this.props) != null ? (d = d.item) != null ? (d = d.share) != null ? d.text : d : d : d;
                        return c === k ? i._("B\u1ea1n \u0111\u00e3 b\u00e0y t\u1ecf c\u1ea3m x\u00fac {reaction} v\u1ec1 tin n\u1ed5i b\u1eadt c\u1ee7a h\u1ecd", [i._param("reaction", d)]) : i._("B\u1ea1n \u0111\u00e3 b\u00e0y t\u1ecf c\u1ea3m x\u00fac {reaction} v\u1ec1 tin c\u1ee7a h\u1ecd", [i._param("reaction", d)])
                    }
                    d = (d = this.props) != null ? (d = d.item) != null ? (d = d.share) != null ? (d = d.user) != null ? d.username : d : d : d : d;
                    return i._("\u0110\u00e3 nh\u1eafc \u0111\u1ebfn {username} trong tin c\u1ee7a b\u1ea1n", [i._param("username", d)])
                } else {
                    d = (d = this.props) != null ? (d = d.item) != null ? (d = d.share) != null ? (d = d.user) != null ? d.instagram_user_id : d : d : d : d;
                    if (a === m) {
                        if (d === this.props.igID)
                            return c === k ? i._("\u0110\u00e3 tr\u1ea3 l\u1eddi tin n\u1ed5i b\u1eadt c\u1ee7a b\u1ea1n") : i._("\u0110\u00e3 tr\u1ea3 l\u1eddi tin c\u1ee7a b\u1ea1n")
                    } else if (a === l) {
                        a = (d = this.props) != null ? (d = d.item) != null ? (d = d.share) != null ? d.text : d : d : d;
                        return c === k ? i._("\u0110\u00e3 b\u00e0y t\u1ecf c\u1ea3m x\u00fac {reaction} v\u1ec1 tin n\u1ed5i b\u1eadt c\u1ee7a b\u1ea1n", [i._param("reaction", a)]) : i._("\u0110\u00e3 b\u00e0y t\u1ecf c\u1ea3m x\u00fac {reaction} v\u1ec1 tin c\u1ee7a b\u1ea1n", [i._param("reaction", a)])
                    } else
                        return i._("\u0110\u00e3 nh\u1eafc \u0111\u1ebfn b\u1ea1n trong tin c\u1ee7a m\u00ecnh")
                }
                break;
            case "VOICE_MEDIA":
                return e ? i._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t tin nh\u1eafn tho\u1ea1i") : i._("\u0110\u00e3 g\u1eedi m\u1ed9t tin nh\u1eafn tho\u1ea1i");
            case "PRODUCT_SHARE":
                return e ? i._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t s\u1ea3n ph\u1ea9m") : i._("\u0110\u00e3 g\u1eedi m\u1ed9t s\u1ea3n ph\u1ea9m")
            }
            return e ? i._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t tin nh\u1eafn") : i._("\u0110\u00e3 g\u1eedi m\u1ed9t tin nh\u1eafn")
        }
        ;
        return c
    }(j.PureComponent);
    e.exports = a
}
), null);
__d("SmartComposeCandidatesGeneratedFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744378");
    c = b("FalcoLoggerInternal").create("smart_compose_candidates_generated", a);
    e.exports = c
}
), null);
__d("SmartComposeMatchingSuggestionFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744380");
    c = b("FalcoLoggerInternal").create("smart_compose_matching_suggestion", a);
    e.exports = c
}
), null);
__d("SmartComposeSuggestionClickedFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744381");
    c = b("FalcoLoggerInternal").create("smart_compose_suggestion_clicked", a);
    e.exports = c
}
), null);
__d("SmartComposeSuggestionDisplayedFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744382");
    c = b("FalcoLoggerInternal").create("smart_compose_suggestion_displayed", a);
    e.exports = c
}
), null);
__d("SmartComposeTypeaheadHelper", ["CancelablePromise", "Random", "React", "RelayModern", "SmartComposeCandidatesGeneratedFalcoEvent", "SmartComposeMatchingSuggestionFalcoEvent", "SmartComposeSuggestionClickedFalcoEvent", "SmartComposeSuggestionDisplayedFalcoEvent", "clearImmediate", "promiseDone", "setImmediate", "stylex", "SmartComposeTypeaheadHelperQuery.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React"), i = 6, j = 100, k = g !== void 0 ? g : g = b("SmartComposeTypeaheadHelperQuery.graphql");
    a = function() {
        function a(a, b, c) {
            var d = this;
            this.$1 = !1;
            this.$2 = null;
            this.$3 = "";
            this.$4 = "";
            this.$5 = "";
            this.$6 = "";
            this.$7 = null;
            this.$8 = new Set();
            this.$9 = [];
            this.$12 = null;
            this.$13 = null;
            this.$16 = new Date();
            this.$17 = -1;
            this.$18 = -1;
            this.$19 = !1;
            this.$20 = "";
            this.$21 = "";
            this.$22 = !1;
            this.$23 = null;
            this.$10 = a;
            this.$14 = b;
            this.$11 = c;
            this.$15 = {
                component: function(a) {
                    var b = d.getSuggestion();
                    return h.jsxs(h.Fragment, {
                        children: [a.children, b.length > 0 && h.jsx("span", {
                            className: "ll82wnt6 g3x53x41",
                            children: b
                        })]
                    })
                },
                strategy: function(a, b, c) {
                    if (d.getSuggestion().length === 0 || d.$22 && a.getKey() !== d.$20)
                        return;
                    c = d.$22 ? d.$21.length : d.$6.length;
                    b(c - 1, c)
                }
            }
        }
        var c = a.prototype;
        c.updateTypeSpeed = function() {
            var a = new Date();
            this.$17 = a - this.$16;
            this.$16 = a;
            return this
        }
        ;
        c.setEnteredText = function(a) {
            a !== this.$6 && (this.$24('updating entered text: "' + a + '"'),
            this.$5 = this.$6,
            this.$6 = a,
            this.$25(),
            this.$26());
            return this
        }
        ;
        c.setCursorAtEnd = function(a) {
            a !== this.$19 && (this.$24("updating cursor at end: " + a.toString()),
            this.$19 = a,
            this.$25());
            return this
        }
        ;
        c.setLastBlockKey = function(a) {
            this.$20 = a;
            return this
        }
        ;
        c.setLastBlockEnteredText = function(a) {
            this.$21 = a;
            return this
        }
        ;
        c.setIsEditorStateBased = function(a) {
            this.$22 = a;
            return this
        }
        ;
        c.getSuggestion = function() {
            var a;
            return (a = (a = this.$7) == null ? void 0 : a.filteredText) != null ? a : ""
        }
        ;
        c.isDeleting = function() {
            return this.$6.length < this.$5.length
        }
        ;
        c.getCandidates = function() {
            return this.$9.map(function(a) {
                return babelHelpers["extends"]({}, a)
            })
        }
        ;
        c.getCurrentQuery = function() {
            return this.$3
        }
        ;
        c.getLastQuery = function() {
            return this.$4
        }
        ;
        c.getFeedbackID = function() {
            return this.$11
        }
        ;
        c.getSurface = function() {
            return this.$10
        }
        ;
        c.getDraftDecorator = function() {
            return this.$15
        }
        ;
        c.onDebugEvent = function(a) {
            var b = this;
            this.$12 = a;
            return {
                cancel: function() {
                    b.$12 = null
                }
            }
        }
        ;
        c.onSuggestionChange = function(a) {
            var b = this;
            this.$13 = a;
            return {
                cancel: function() {
                    b.$13 = null
                }
            }
        }
        ;
        c.logSuggestionInserted = function() {
            var a = this
              , c = this.$7;
            if (c == null)
                return;
            b("SmartComposeSuggestionClickedFalcoEvent").log(function() {
                return {
                    complete_text: c.candidate.text,
                    confidence: c.candidate.confidence,
                    processing_time: c.candidate.processingTime,
                    suggestion_text: c.filteredText,
                    surface: a.$10,
                    type_speed: a.$18
                }
            })
        }
        ;
        c.reset = function() {
            this.$2 && this.$2.cancel(),
            this.$2 = null,
            this.$13 = null
        }
        ;
        c.$25 = function() {
            var a, b = this.$27();
            if ((b == null ? void 0 : b.filteredText) !== ((a = this.$7) == null ? void 0 : a.filteredText)) {
                this.$24('updating suggestion text: "' + ((a = b == null ? void 0 : b.filteredText) != null ? a : "") + '"');
                this.$7 = b;
                this.$28((a = b == null ? void 0 : b.filteredText) != null ? a : "")
            }
        }
        ;
        c.$24 = function(a) {
            this.$12 && this.$12(a)
        }
        ;
        c.$28 = function(a) {
            var c = this;
            this.$23 != null && b("clearImmediate")(this.$23);
            this.$23 = b("setImmediate")(function() {
                c.$13 && c.$13(a)
            })
        }
        ;
        c.$27 = function(a) {
            var c = this;
            a = a || this.$9;
            if (a.length === 0 || this.$6.indexOf(this.$4) < 0 || this.isDeleting() || !this.$19)
                return null;
            var d = this.$6.substring(this.$4.length, this.$6.length).toLowerCase();
            if (d.length === 0)
                return null;
            var e = a.find(function(a) {
                return a.text.toLowerCase().indexOf(d) === 0
            });
            if (e == null)
                return null;
            if (e.text.length <= d.length && this.$8.has(e.text)) {
                b("SmartComposeMatchingSuggestionFalcoEvent").log(function() {
                    return {
                        confidence: e.confidence,
                        suggestion_text: e.text,
                        suggestion_text_length: e.text.length,
                        surface: c.$10,
                        type_speed: c.$17
                    }
                });
                return null
            }
            if (!this.$8.has(e.text) && (e.text.length - d.length < i || this.$17 !== -1 && this.$17 < j))
                return null;
            var f = {
                candidate: babelHelpers["extends"]({}, e),
                filteredText: e.text.substring(d.length, e.text.length)
            };
            this.$8.has(e.text) || (this.$8.add(e.text),
            this.$18 = this.$17,
            b("SmartComposeSuggestionDisplayedFalcoEvent").log(function() {
                return {
                    complete_text: e.text,
                    confidence: e.confidence,
                    processing_time: e.processingTime,
                    suggestion_text: f.filteredText,
                    surface: c.$10,
                    type_speed: c.$18
                }
            }));
            return f
        }
        ;
        c.$26 = function() {
            var a = this;
            if (!this.$1 && this.$6.length > 0) {
                this.$24("Initializing prefetch");
                this.$29("");
                this.$1 = !0;
                return
            }
            if (this.$6.trim() === "" || !/[^\s]+\s$/.test(this.$6) || this.$3 === this.$6 || this.$4 === this.$6 || this.isDeleting() || this.$7 != null)
                return;
            this.$29(this.$6, function(c) {
                var d = c.length > 0 && (a.$7 == null || a.$27(c) != null);
                d && (a.$24("Updating stored candidates"),
                a.$4 = a.$3,
                a.$9 = c,
                a.$8 = new Set(),
                b("SmartComposeCandidatesGeneratedFalcoEvent").log(function() {
                    return {
                        candidates_blob: JSON.stringify(c),
                        processing_time: c[0].processingTime.toString(),
                        surface: a.$10
                    }
                }),
                a.$25())
            })
        }
        ;
        c.$29 = function(a, c) {
            var d = this
              , e = Date.now()
              , f = Math.round(b("Random").random() * 999);
            this.$3 = a;
            this.$2 && this.$2.cancel();
            this.$24("query started (id: " + f + ")");
            this.$2 = new (b("CancelablePromise"))(b("RelayModern").fetchQuery(this.$14, k, {
                queryParams: {
                    feedback_id: this.$11,
                    surface: this.$10,
                    text: a
                }
            }));
            b("promiseDone")(this.$2.getPromise(), function(a) {
                var b = Date.now() - e;
                a = (a = a.typeahead_list) != null ? a : [];
                d.$24("query " + f + " completed in " + b + "ms, " + a.length + " candidates received");
                c != null && c(a.map(function(a) {
                    return {
                        confidence: Math.round(1e4 * a.confidence),
                        processingTime: b,
                        text: a.typeahead
                    }
                }))
            }, function(a) {
                d.$24("query " + f + " failed or cancelled")
            })
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
