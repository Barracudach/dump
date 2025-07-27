import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as g from "./AnalyticsHandler.js";
import * as p from "./CurrencyValue.js";
import * as m from "./CircleSprite.js";
import * as f from "./cv.js";
import * as C from "./Enum.js";

function main() {
    var _, y, b, v, M, S, E, A, U, N, D, T, I, H, w, x;
    i._RF.push({}, "8f735yYzjREMpqC6M8yX0YR", "GoldView", void 0);
    const {
        ccclass: B,
        property: k
    } = o;
    e("GoldView", (_ = k(a), y = k(r), b = k(a), v = k(r), M = k(s), S = k(p), E = k(r), B((N = t((U = class extends u {
        constructor(...e) {
            super(...e), n(this, "gold_text", N, this), n(this, "usdt_node", D, this), n(this, "usdt_text", T, this), n(this, "avatarNode", I, this), n(this, "main_currency_sprite", H, this), n(this, "main_currency", w, this), n(this, "refreshBalance_node", x, this), this.addCallback = null, this.loadedTimestamp = 0
        }
        onLoad() {
            this.main_currency && (this.main_currency.node.active = !1), this.refreshBalance_node && (this.refreshBalance_node.active = !0), f.MessageCenter.register("update_info", this.UpdateUserInfo.bind(this), this.node), f.MessageCenter.register("update_gold", this.UpdateUserInfo.bind(this), this.node), f.MessageCenter.register("modify_info_succ", this.onMsgModifyInfo.bind(this), this.node), f.MessageCenter.register(f.Enum.MessageCenterAction.OnUserAvatarChanged, this.updateAvatarImage.bind(this), this.node), f.MessageCenter.register(f.Enum.MessageCenterAction.OnUserAvatarMaterialChanged, this.updateAvatarMaterial.bind(this), this.node), this.usdt_node && (this.usdt_node.active = f.appConfig.getWalletConfig().haveUSDTCurrency), this.UpdateUserInfo()
        }
        onMsgModifyInfo() {
            this.UpdateUserInfo()
        }
        start() {
            this.getComponentsInChildren(d).forEach((e => e.enabled = !0)), f.resMgr.adaptWidget(this.node, !0, !1), this.loadedTimestamp = l.totalTime
        }
        onDestroy() {
            f.MessageCenter.unregister("update_info", this.node), f.MessageCenter.unregister("update_gold", this.node), f.MessageCenter.unregister("modify_info_succ", this.node), f.MessageCenter.unregister(f.Enum.MessageCenterAction.OnUserAvatarChanged, this.node), f.MessageCenter.unregister(f.Enum.MessageCenterAction.OnUserAvatarMaterialChanged, this.node)
        }
        setGoldNumber(e) {
            f.dataHandler.getUserData().is_Total_amount_Update ? (this.refreshBalance_node && (this.refreshBalance_node.active = !1), this.main_currency && (this.main_currency.node.active = !0, this.main_currency.value = f.StringTools.numToFloatString(e), f.dataHandler.getUserData().goldCoinAmount = f.currencyManager.convert(this.main_currency.currencyShown, C.CNY, e))) : (this.main_currency_sprite && f.resMgr.setDefaultCurrencySprite(this.main_currency_sprite.node), this.gold_text && (this.gold_text.string = f.StringTools.numToFloatString(e)))
        }
        setUSDTNumber(e) {
            this.usdt_text && f.appConfig.getWalletConfig().haveUSDTCurrency && (this.usdt_text.string = f.StringTools.numToFloatString(e))
        }
        updateAvatar() {
            this.updateAvatarImage(f.dataHandler.getUserData().headUrl)
        }
        updateAvatarImage(e) {
            this.avatarNode && (e instanceof c ? m.setHeadTexture(this.avatarNode, e, 1) : m.setCircleSprite(this.avatarNode, e))
        }
        updateAvatarMaterial(e) {
            let t = m.getHeadNode(this.avatarNode);
            t && t.getComponent(s).setMaterial(e, 0)
        }
        UpdateUserInfo() {
            this.updateAvatar(), this.setGoldNumber(f.dataHandler.getUserData().total_amount), this.setUSDTNumber(f.dataHandler.getUserData().usdt), this.updateNickName()
        }
        updateNickName() {}
        setAddCallback(e) {
            this.addCallback = e
        }
        onBtnAddClick(e) {
            if (this.loadedTimestamp && !(l.totalTime - this.loadedTimestamp < 1e3) && (f.AudioMgr.playButtonSound("button_click.mp3"), f.appConfig.isWebApp || !f.dataHandler.getUserData().showTouristLimited("AddCoins_tourist_msg"))) {
                if (this.addCallback) this.addCallback();
                else {
                    let e = this.node.parent.getChildByName("noticeView");
                    h.isBrowser || h.os != h.OS.IOS && h.os != h.OS.ANDROID || (e && e.active ? (e.active = !1, f.SHOP.setExitCallFunc((() => {
                        e.active = !0
                    }))) : f.SHOP.setExitCallFunc((() => {}))), f.SHOP.RechargeClick()
                }
                if (f.config.getCurrentScene() == f.Enum.SCENE.HALL_SCENE) {
                    let e = {
                        item: "headerDepositButton"
                    };
                    g.getInstance().sendEvent(f.Enum.CurrentScreen.deposit, f.Enum.segmentEvent.DepositInitiated, f.Enum.Functionality.payments, e)
                } else if (f.config.getCurrentScene() == f.Enum.SCENE.GAME_SCENE) {
                    let e = {
                        item: "leftMenuDepositButton"
                    };
                    g.getInstance().sendEvent(f.Enum.CurrentScreen.room, f.Enum.segmentEvent.DepositInitiated, f.Enum.Functionality.payments, e)
                }
            }
        }
    }).prototype, "gold_text", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = t(U.prototype, "usdt_node", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = t(U.prototype, "usdt_text", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = t(U.prototype, "avatarNode", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = t(U.prototype, "main_currency_sprite", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = t(U.prototype, "main_currency", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = t(U.prototype, "refreshBalance_node", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = U)) || A));
    i._RF.pop()
}