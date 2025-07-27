import * as t from "./cc.js";
import * as i from "./Enum.js";
import * as r from "./Enum.js";
import * as n from "./ConfigVariatorEnums.js";
import * as o from "./ConfigVariatorEnums.js";
import * as e from "./ConfigVariatorEnums.js";
import * as s from "./GeneralConfig.js";

function main() {
    t._RF.push({}, "47787Rh42tBLK39uVO/y/n0", "VariantConfigData", void 0);
    class l {
        static getData() {
            return this.variableConfigData
        }
    }
    a("VariantConfigData", l), l.variableConfigData = [{
        variantTarget: "generalConfig",
        layout: ["landscape", "mobile"],
        variantPath: "isWebApp",
        variants: [{
            variantsList: {
                [e.IS_WEB_APP]: !0
            },
            variantValue: !0
        }]
    }, {
        variantTarget: "generalConfig",
        layout: ["landscape", "mobile"],
        variantPath: "loadOnlyResourceHallScene",
        variants: [{
            variantsList: {
                [e.IS_WEB_APP]: !0
            },
            variantValue: !0
        }]
    }, {
        variantTarget: "loginConfig",
        layout: ["landscape", "mobile"],
        variantPath: "guestAutoLogin",
        variants: [{
            variantsList: {
                [e.IS_WEB_APP]: !0
            },
            variantValue: !0
        }]
    }, {
        variantTarget: "generalConfig",
        layout: ["landscape", "mobile"],
        variantPath: "assetsNeedPreloadBeforeLoadScene",
        variants: [{
            variantsList: {
                [e.IS_WEB_APP]: !0
            },
            variantValue: new Map([
                [i.HALL_SCENE, []]
            ])
        }]
    }, {
        variantTarget: "gameConfig",
        layout: ["mobile"],
        variantPath: "gameTablesConcurrent",
        variants: [{
            variantsList: {
                [e.IS_WEB_APP]: !0
            },
            variantValue: {
                maxConcurrent: 1,
                mtt: 1,
                sng: 1,
                cashGame: 1,
                zoom: 1,
                plo: 1,
                plo5: 1,
                pokerFlips: 1,
                sportsBook: 1
            }
        }]
    }, {
        variantTarget: "modulesConfig",
        layout: ["mobile"],
        variantPath: "crowdinConfig",
        variants: [{
            variantsList: {
                [e.IS_WEB_APP]: !0
            },
            variantValue: {
                enableCrowdinUsage: !0,
                enableCachingForCrowdin: !1,
                crowdinDistributionKey_stg: "c44ec4e946bc731e756efe9n010",
                crowdinDistributionKey_prod: "32d445f380c11cae042efa9n010"
            }
        }]
    }, {
        variantTarget: "lobbyConfig",
        layout: ["landscape", "mobile"],
        variantPath: "isEnableBanner",
        variants: [{
            variantsList: {
                [e.IS_WEB_APP]: !0
            },
            variantValue: !1
        }]
    }, {
        variantTarget: "generalConfig",
        layout: ["landscape", "mobile"],
        variantPath: "resourceCommonConfig",
        variants: [{
            variantsList: {
                [e.IS_WEB_APP]: !0
            },
            variantValue: []
        }]
    }, {
        variantTarget: "generalConfig",
        layout: ["landscape", "mobile"],
        variantPath: "enableStatusView",
        variants: [{
            variantsList: {
                [e.IS_WEB_APP]: !0
            },
            variantValue: !1
        }]
    }, {
        variantTarget: "generalConfig",
        layout: ["landscape", "mobile"],
        variantPath: "delayFetchUserData",
        variants: [{
            variantsList: {
                [e.IS_WEB_APP]: !0
            },
            variantValue: !0
        }]
    }, {
        variantTarget: "generalConfig",
        layout: ["landscape", "mobile"],
        variantPath: "delayFetchCurrencyData",
        variants: [{
            variantsList: {
                [e.IS_WEB_APP]: !0
            },
            variantValue: !0
        }]
    }, {
        variantTarget: "userProfileConfig",
        layout: ["mobile"],
        variantPath: "canSetDarkMode",
        variants: [{
            variantsList: {
                [e.IS_WEB_APP]: !0
            },
            variantValue: !1
        }]
    }, {
        variantTarget: "generalConfig",
        layout: ["mobile", "landscape"],
        variantPath: "enablePreloadHallScene",
        variants: [{
            variantsList: {
                [e.IS_WEB_APP]: !0
            },
            variantValue: !1
        }]
    }, {
        variantTarget: "generalConfig",
        layout: ["mobile", "landscape"],
        variantPath: "enableCheckLoadAppServerConfig",
        variants: [{
            variantsList: {
                [e.IS_WEB_APP]: !0
            },
            variantValue: !1
        }]
    }, {
        variantTarget: "lobbyConfig",
        layout: ["landscape", "mobile"],
        variantPath: "showNotificationIcon",
        variants: [{
            variantsList: {
                [e.COUNTRY]: n.JP
            },
            variantValue: !1
        }]
    }, {
        variantTarget: "userProfileConfig",
        layout: ["landscape", "mobile"],
        variantPath: "showInviteFriends",
        variants: [{
            variantsList: {
                [e.COUNTRY]: n.KR,
                [e.JURISDICTION]: s.ROW
            },
            variantValue: !1
        }, {
            variantsList: {
                [e.COUNTRY]: n.VN,
                [e.JURISDICTION]: s.ROW
            },
            variantValue: !1
        }]
    }, {
        variantTarget: "userProfileConfig",
        layout: ["landscape", "mobile"],
        variantPath: "showMyStats",
        variants: [{
            variantsList: {
                [e.IS_WEB_APP]: !0
            },
            variantValue: !1
        }, {
            variantsList: {
                [e.COUNTRY]: n.VN
            },
            variantValue: !0
        }, {
            variantsList: {
                [e.COUNTRY]: n.PH
            },
            variantValue: !0
        }]
    }, {
        variantTarget: "userProfileConfig",
        layout: ["landscape", "mobile"],
        variantPath: "freshchatTag",
        variants: [{
            variantsList: {
                [e.COUNTRY]: n.MX
            },
            variantValue: "proactiveops_spanish_mx"
        }, {
            variantsList: {
                [e.COUNTRY]: n.JP
            },
            variantValue: "proactiveops_japanese_jp"
        }]
    }, {
        variantTarget: "userProfileConfig",
        layout: ["landscape", "mobile"],
        variantPath: "InviteFriendsWebsite_url",
        variants: [{
            variantsList: {
                [e.LANGUAGE]: r.en_US
            },
            variantValue: "https://wptglobal.com/poker-promotions/invite-a-friend"
        }, {
            variantsList: {
                [e.LANGUAGE]: r.es_MX
            },
            variantValue: "https://wptglobal.com/es/promociones-de-poker/invite-a-un-amigo"
        }, {
            variantsList: {
                [e.LANGUAGE]: r.pt_BR
            },
            variantValue: "https://wptglobal.com/pt/promocoes-de-poker/convide-um-amigo"
        }, {
            variantsList: {
                [e.LANGUAGE]: r.fr_CA
            },
            variantValue: "https://wptglobal.com/fr/promotions-de-poker/invitez-vos-amis"
        }, {
            variantsList: {
                [e.LANGUAGE]: r.ja_JP
            },
            variantValue: "https://wptglobal.com/ja/poker-promotions-ja/invite-a-friend-ja"
        }, {
            variantsList: {
                [e.LANGUAGE]: r.ko_KR
            },
            variantValue: "https://wptglobal.com/ko/poker-promotions/invite-a-friend-ko"
        }, {
            variantsList: {
                [e.LANGUAGE]: r.th_TH
            },
            variantValue: "https://wptglobal.com/th/poker-promotions/invite-a-friend-th"
        }]
    }, {
        variantTarget: "generalConfig",
        layout: ["landscape", "mobile"],
        variantPath: "FAQ_url",
        variants: [{
            variantsList: {
                [e.JURISDICTION]: s.KR
            },
            variantValue: "https://wptgo.com/faq"
        }, {
            variantsList: {
                [e.LANGUAGE]: r.en_US
            },
            variantValue: "https://wptglobal.com/faq"
        }, {
            variantsList: {
                [e.LANGUAGE]: r.es_MX
            },
            variantValue: "https://wptglobal.com/es/faq"
        }, {
            variantsList: {
                [e.LANGUAGE]: r.fr_CA
            },
            variantValue: "https://wptglobal.com/fr/faq"
        }, {
            variantsList: {
                [e.LANGUAGE]: r.pt_BR
            },
            variantValue: "https://wptglobal.com/pt/faq"
        }, {
            variantsList: {
                [e.LANGUAGE]: r.ja_JP
            },
            variantValue: "https://wptglobal.com/ja/faq"
        }, {
            variantsList: {
                [e.LANGUAGE]: r.ko_KR
            },
            variantValue: "https://wptglobal.com/ko/faq"
        }, {
            variantsList: {
                [e.LANGUAGE]: r.th_TH
            },
            variantValue: "https://wptglobal.com/th/faq"
        }, {
            variantsList: {
                [e.LANGUAGE]: r.vi_VN
            },
            variantValue: "https://wptglobal.com/vi/faq"
        }, {
            variantsList: {
                [e.LANGUAGE]: r.zh_TW
            },
            variantValue: "https://wptglobal.com/zh-TW/faq"
        }, {
            variantsList: {
                [e.LANGUAGE]: r.id_ID
            },
            variantValue: "https://wptglobal.com/id/faq"
        }]
    }, {
        variantTarget: "generalConfig",
        layout: ["landscape", "mobile"],
        variantPath: "FeedbackBtn_Url",
        variants: [{
            variantsList: {
                [e.LANGUAGE]: r.en_US
            },
            variantValue: "https://wptglobal.com/feedback"
        }, {
            variantsList: {
                [e.LANGUAGE]: r.es_MX
            },
            variantValue: "https://wptglobal.com/es/feedback"
        }, {
            variantsList: {
                [e.LANGUAGE]: r.fr_CA
            },
            variantValue: "https://wptglobal.com/fr/feedback"
        }, {
            variantsList: {
                [e.LANGUAGE]: r.pt_BR
            },
            variantValue: "https://wptglobal.com/pt/feedback"
        }, {
            variantsList: {
                [e.LANGUAGE]: r.ja_JP
            },
            variantValue: "https://wptglobal.com/ja/feedback"
        }, {
            variantsList: {
                [e.LANGUAGE]: r.ko_KR
            },
            variantValue: "https://wptglobal.com/ko/feedback"
        }, {
            variantsList: {
                [e.LANGUAGE]: r.th_TH
            },
            variantValue: "https://wptglobal.com/th/feedback"
        }, {
            variantsList: {
                [e.LANGUAGE]: r.vi_VN
            },
            variantValue: "https://wptglobal.com/vi/feedback"
        }, {
            variantsList: {
                [e.LANGUAGE]: r.zh_TW
            },
            variantValue: "https://wptglobal.com/zh-TW/feedback"
        }, {
            variantsList: {
                [e.LANGUAGE]: r.id_ID
            },
            variantValue: "https://wptglobal.com/id/feedback"
        }]
    }, {
        variantTarget: "generalConfig",
        layout: ["landscape", "mobile"],
        variantPath: "playerSupportLiveChat",
        variants: [{
            variantsList: {
                [e.COUNTRY]: n.VN
            },
            variantValue: !0
        }, {
            variantsList: {
                [e.COUNTRY]: n.MY
            },
            variantValue: !0
        }, {
            variantsList: {
                [e.COUNTRY]: n.JP
            },
            variantValue: !0
        }, {
            variantsList: {
                [e.COUNTRY]: n.KR
            },
            variantValue: !0
        }, {
            variantsList: {
                [e.COUNTRY]: n.PH
            },
            variantValue: !0
        }, {
            variantsList: {
                [e.COUNTRY]: n.TW
            },
            variantValue: !0
        }, {
            variantsList: {
                [e.COUNTRY]: n.TH
            },
            variantValue: !0
        }]
    }, {
        variantTarget: "generalConfig",
        layout: ["landscape", "mobile"],
        variantPath: "enableFreshchat",
        variants: [{
            variantsList: {
                [e.COUNTRY]: n.JP
            },
            variantValue: !1
        }, {
            variantsList: {
                [e.COUNTRY]: n.KR
            },
            variantValue: !1
        }, {
            variantsList: {
                [e.COUNTRY]: n.PH
            },
            variantValue: !1
        }]
    }, {
        variantTarget: "generalConfig",
        layout: ["landscape", "mobile"],
        variantPath: "showPlayerSupportBottomLayout",
        variants: [{
            variantsList: {
                [e.COUNTRY]: n.JP
            },
            variantValue: !1
        }]
    }, {
        variantTarget: "gameConfig",
        layout: ["landscape"],
        variantPath: "gameTablesConcurrent",
        variants: [{
            variantsList: {
                [e.IS_WEB_APP]: !0
            },
            variantValue: {
                maxConcurrent: 1,
                mtt: 1,
                sng: 1,
                cashGame: 1,
                zoom: 1,
                plo: 1,
                plo5: 1,
                pokerFlips: 1,
                sportsBook: 1
            }
        }, {
            variantsList: {
                [e.PLATFORM]: o.windows
            },
            variantValue: {
                maxConcurrent: 7,
                mtt: 7,
                sng: 7,
                cashGame: 4,
                zoom: 1,
                plo: 4,
                plo5: 4,
                pokerFlips: 1,
                sportsBook: 1
            }
        }, {
            variantsList: {
                [e.PLATFORM]: o.os_x
            },
            variantValue: {
                maxConcurrent: 7,
                mtt: 7,
                sng: 7,
                cashGame: 4,
                zoom: 1,
                plo: 4,
                plo5: 4,
                pokerFlips: 1,
                sportsBook: 1
            }
        }]
    }, {
        variantTarget: "lobbyConfig",
        layout: ["landscape", "mobile"],
        variantPath: "showSportsBook",
        variants: [{
            variantsList: {
                [e.COUNTRY]: n.JP
            },
            variantValue: !1
        }, {
            variantsList: {
                [e.COUNTRY]: n.PH
            },
            variantValue: !1
        }, {
            variantsList: {
                [e.COUNTRY]: n.TW
            },
            variantValue: !1
        }]
    }, {
        variantTarget: "lobbyConfig",
        layout: ["landscape"],
        variantPath: "showInviteFriendDesktop",
        variants: [{
            variantsList: {
                [e.COUNTRY]: n.KR,
                [e.JURISDICTION]: s.ROW
            },
            variantValue: !1
        }, {
            variantsList: {
                [e.COUNTRY]: n.VN,
                [e.JURISDICTION]: s.ROW
            },
            variantValue: !1
        }]
    }, {
        variantTarget: "lobbyConfig",
        layout: ["mobile"],
        variantPath: "showInviteFriendMobile",
        variants: [{
            variantsList: {
                [e.COUNTRY]: n.KR,
                [e.JURISDICTION]: s.ROW
            },
            variantValue: !1
        }, {
            variantsList: {
                [e.COUNTRY]: n.VN,
                [e.JURISDICTION]: s.ROW
            },
            variantValue: !1
        }]
    }, {
        variantTarget: "lobbyConfig",
        layout: ["landscape", "mobile"],
        variantPath: "banner.showCowboyBanner",
        variants: [{
            variantsList: {
                [e.COUNTRY]: n.JP
            },
            variantValue: !1
        }]
    }, {
        variantTarget: "generalConfig",
        layout: ["landscape", "mobile"],
        variantPath: "availableLanguages",
        variants: [{
            variantsList: {
                [e.IS_WEB_APP]: !0
            },
            variantValue: [r.en_US, r.ko_KR, r.vi_VN, r.th_TH]
        }]
    }, {
        variantTarget: "generalConfig",
        layout: ["landscape", "mobile"],
        variantPath: "helpLine.email",
        variants: [{
            variantsList: {
                [e.COUNTRY]: n.VN,
                [e.JURISDICTION]: s.ROW
            },
            variantValue: {
                name: "customercarevn@wptglobal.com",
                value: "customercarevn@wptglobal.com"
            }
        }, {
            variantsList: {
                [e.COUNTRY]: n.KR,
                [e.JURISDICTION]: s.ROW
            },
            variantValue: {
                name: "customercarekr@wptglobal.com",
                value: "customercarekr@wptglobal.com"
            }
        }, {
            variantsList: {
                [e.COUNTRY]: n.MY,
                [e.JURISDICTION]: s.ROW
            },
            variantValue: {
                name: "customercaremy@wptglobal.com",
                value: "customercaremy@wptglobal.com"
            }
        }, {
            variantsList: {
                [e.COUNTRY]: n.TH,
                [e.JURISDICTION]: s.ROW
            },
            variantValue: {
                name: "customercareth@wptglobal.com",
                value: "customercareth@wptglobal.com"
            }
        }, {
            variantsList: {
                [e.COUNTRY]: n.TW,
                [e.JURISDICTION]: s.ROW
            },
            variantValue: {
                name: "customercaretw@wptglobal.com",
                value: "customercaretw@wptglobal.com"
            }
        }, {
            variantsList: {
                [e.COUNTRY]: n.VN,
                [e.JURISDICTION]: s.KR
            },
            variantValue: {
                name: "customercarevn@wptgo.com",
                value: "customercarevn@wptgo.com"
            }
        }, {
            variantsList: {
                [e.COUNTRY]: n.KR,
                [e.JURISDICTION]: s.KR
            },
            variantValue: {
                name: "customercarekr@wptgo.com",
                value: "customercarekr@wptgo.com"
            }
        }, {
            variantsList: {
                [e.COUNTRY]: n.BR,
                [e.JURISDICTION]: s.KR
            },
            variantValue: {
                name: "customercarebr@wptgo.com",
                value: "customercarebr@wptgo.com"
            }
        }, {
            variantsList: {
                [e.COUNTRY]: n.TW,
                [e.JURISDICTION]: s.KR
            },
            variantValue: {
                name: "customercaretw@wptgo.com",
                value: "customercaretw@wptgo.com"
            }
        }, {
            variantsList: {
                [e.COUNTRY]: n.TH,
                [e.JURISDICTION]: s.KR
            },
            variantValue: {
                name: "customercareth@wptgo.com",
                value: "customercareth@wptgo.com"
            }
        }]
    }, {
        variantTarget: "generalConfig",
        layout: ["landscape", "mobile"],
        variantPath: "helpLine.emailPaymentRelated",
        variants: [{
            variantsList: {
                [e.COUNTRY]: n.VN,
                [e.JURISDICTION]: s.ROW
            },
            variantValue: {
                name: "customercarevn@wptglobal.com",
                value: "customercarevn@wptglobal.com"
            }
        }, {
            variantsList: {
                [e.COUNTRY]: n.KR,
                [e.JURISDICTION]: s.ROW
            },
            variantValue: {
                name: "customercarekr@wptglobal.com",
                value: "customercarekr@wptglobal.com"
            }
        }, {
            variantsList: {
                [e.COUNTRY]: n.MY,
                [e.JURISDICTION]: s.ROW
            },
            variantValue: {
                name: "customercaremy@wptglobal.com",
                value: "customercaremy@wptglobal.com"
            }
        }, {
            variantsList: {
                [e.COUNTRY]: n.TH,
                [e.JURISDICTION]: s.ROW
            },
            variantValue: {
                name: "customercareth@wptglobal.com",
                value: "customercareth@wptglobal.com"
            }
        }, {
            variantsList: {
                [e.COUNTRY]: n.TW,
                [e.JURISDICTION]: s.ROW
            },
            variantValue: {
                name: "customercaretw@wptglobal.com",
                value: "customercaretw@wptglobal.com"
            }
        }]
    }, {
        variantTarget: "lobbyConfig",
        layout: ["landscape", "mobile"],
        variantPath: "cashier.paymentSupportPopupEnabled",
        variants: [{
            variantsList: {
                [e.COUNTRY]: n.CA
            },
            variantValue: !0
        }, {
            variantsList: {
                [e.COUNTRY]: n.IE
            },
            variantValue: !0
        }, {
            variantsList: {
                [e.COUNTRY]: n.TH
            },
            variantValue: !0
        }, {
            variantsList: {
                [e.COUNTRY]: n.TW
            },
            variantValue: !0
        }]
    }], t._RF.pop()
}