import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as _ from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as m from "./cc.js";
import * as b from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as p from "./i18nText.js";
import * as f from "./cv.js";
import * as y from "./GoldView.js";

function main() {
    var v, w, x, S, C, z, B, M, E, P, T, A, D, L, k, F, H, O, I, U;
    i._RF.push({}, "7a441GQDX5LBZb2Mb7EP8ci", "HumanboyMenu", void 0);
    const {
        ccclass: G,
        property: R
    } = r;
    e("HumanboyMenu", (v = R(l), w = R(l), x = R(o), S = R(s), C = R(s), z = R(s), B = R(s), M = R(s), E = R([p]), G((A = t((T = class extends a {
        constructor(...e) {
            super(...e), n(this, "img_shield", A, this), n(this, "img_menu_bg", D, this), n(this, "goldview", L, this), n(this, "btn_exchange", k, this), n(this, "btn_rule", F, this), n(this, "btn_sound_setting", H, this), n(this, "btn_advanced_setting", O, this), n(this, "btn_exit", I, this), n(this, "labels", U, this)
        }
        show(e) {
            this._autoAnimFunc(!0, e)
        }
        hide(e = !1) {
            this._autoAnimFunc(!1, e)
        }
        getBtnExchange() {
            return this.btn_exchange
        }
        getBtnRule() {
            return this.btn_rule
        }
        getBtnSoundSetting() {
            return this.btn_sound_setting
        }
        getBtnAdvancedSetting() {
            return this.btn_advanced_setting
        }
        getBtnExit() {
            return this.btn_exit
        }
        setMenuPosition(e) {
            this.img_menu_bg.node.setPosition(e)
        }
        getMenuPosition() {
            return this.img_menu_bg.node.position
        }
        onLoad() {
            let e = u(this.goldview);
            e.getComponent(y).setAddCallback((() => {
                f.MessageCenter.send("goldViewShop")
            })), g("img_menu_bg/gold_Panel", this.node).addChild(e), this.LoadSpriteItemMenu(), this.node.on(c.EventType.TOUCH_END, (e => {
                this.hide(!0)
            }))
        }
        LoadSpriteItemMenu() {}
        setAllLabelUseEngOnly() {
            this.labels.forEach((e => {
                null == e || e.setOptionUseEngTextOnly(!0)
            }))
        }
        start() {
            this.btn_exchange.node.active = f.appConfig.getWalletConfig().haveUSDTCurrency
        }
        _autoAnimFunc(e, t) {
            this.node.active = !0, this.img_menu_bg.node.active = !0, b.stopAllByTarget(this.img_menu_bg.node);
            let n = null;
            if (e) {
                this.img_menu_bg.node.setScale(h(0, 0, 0));
                let e = () => {
                    this.img_menu_bg.node.setScale(h(1, 1, 1)), this.img_shield.getComponent(m).enabled = !1
                };
                n = t ? d().to(.5, {
                    scale: h(1, 1, 1)
                }, {
                    easing: _.backOut
                }).call(e) : d().call(e)
            } else {
                this.img_menu_bg.node.setScale(h(1, 1, 1));
                let e = () => {
                    this.img_menu_bg.node.setScale(h(0, 0, 0)), this.img_shield.getComponent(m).enabled = !1, this.node.active = !1
                };
                n = t ? d().to(.5, {
                    scale: h(0, 0, 0)
                }, {
                    easing: _.backIn
                }).call(e) : d().call(e)
            }
            n && (n.target(this.img_menu_bg.node).start(), this.img_shield.getComponent(m).enabled = !0)
        }
    }).prototype, "img_shield", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = t(T.prototype, "img_menu_bg", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = t(T.prototype, "goldview", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = t(T.prototype, "btn_exchange", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = t(T.prototype, "btn_rule", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = t(T.prototype, "btn_sound_setting", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = t(T.prototype, "btn_advanced_setting", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = t(T.prototype, "btn_exit", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = t(T.prototype, "labels", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), P = T)) || P));
    i._RF.pop()
}