import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as g from "./FontSystemForRichText.js";
import * as p from "./CurrencyManager.js";
import * as l from "./CurrencyValue.js";
import * as f from "./Enum.js";
import * as y from "./AppConfig.js";
import * as h from "./i18nText.js";
import * as C from "./cv.js";

function main() {
    var d, m, L, x, b, M, S, D, I, N;
    i._RF.push({}, "3b63bIMNydMwr99f7/n0o0V", "IntroMinigamePopup", void 0);
    const {
        ccclass: z,
        property: _
    } = r;
    t("default", (d = _(o), m = _(l), L = _(h), x = _(a), z((S = e((M = class extends s {
        constructor(...t) {
            super(...t), n(this, "textDisplayRate", S, this), n(this, "exchangeCurrency", D, this), n(this, "mxnCurrencyInfo", I, this), n(this, "contentLayout", N, this)
        }
        onLoad() {
            this.exchangeCurrency.updateVal("1", f.CNY, !0, f.USD)
        }
        start() {
            let t = y.Instance.isLandscapeLayout ? .88 : 1;
            this.node.parent.scale = new c(t, t, 1)
        }
        onEnable() {
            this.initMexicoInfo(), this.onLanguageChange(), C.MessageCenter.register(C.config.CHANGE_LANGUAGE, this.onLanguageChange.bind(this), this)
        }
        onDisable() {
            C.MessageCenter.unregister(C.config.CHANGE_LANGUAGE, this)
        }
        processClose() {
            C.MessageCenter.send("onPopupClose")
        }
        onLanguageChange() {
            if (C.dataHandler.getUserData().getCountryCurrency().type === f.MXN && C.appConfig.getLobbyConfig().casino.showMXNInfo) {
                const t = p.getInstance().convert(f.MXN, f.CNY, 1).toFixed(2),
                    e = C.config.getStringData("minigame_exchange_rate").replace("$1", "1 MXN");
                this.textDisplayRate.string = C.StringTools.formatC(e, t)
            } else this.textDisplayRate.string = C.StringTools.formatC(C.config.getStringData("minigame_exchange_rate"), this.exchangeCurrency.getReverseAmount(1))
        }
        initMexicoInfo() {
            const t = C.dataHandler.getUserData().getCountryCurrency().type === f.MXN && C.appConfig.getLobbyConfig().casino.showMXNInfo;
            if (this.mxnCurrencyInfo.node.active = t, t && this.contentLayout) {
                const t = {
                    fontSize: 24.6,
                    lineHeight: 30.5,
                    contentSpacing: 15,
                    parentPadingTop: 30,
                    parentPadingBottom: 30,
                    parentSpacing: 30
                };
                this._adaptContentLayout(t)
            }
        }
        _adaptContentLayout(t) {
            if (this.contentLayout) {
                var e;
                this.contentLayout.spacingY = t.contentSpacing, this.textDisplayRate.fontSize = t.fontSize, this.textDisplayRate.lineHeight = t.lineHeight, this.contentLayout.getComponentsInChildren(u).forEach((e => {
                    e.fontSize = t.fontSize, e.lineHeight = t.lineHeight;
                    const n = e.getComponent(g);
                    n && (n.fontSize = t.fontSize)
                })), this.contentLayout.updateLayout();
                const n = null == (e = this.contentLayout.node.parent) ? void 0 : e.getComponent(a);
                n && (n.paddingTop = t.parentPadingTop, n.paddingBottom = t.parentPadingBottom, n.spacingY = t.parentSpacing, n.updateLayout())
            }
        }
    }).prototype, "textDisplayRate", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = e(M.prototype, "exchangeCurrency", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = e(M.prototype, "mxnCurrencyInfo", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(M.prototype, "contentLayout", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = M)) || b));
    i._RF.pop()
}