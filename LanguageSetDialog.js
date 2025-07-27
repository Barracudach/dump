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
import * as f from "./cc.js";
import * as b from "./cc.js";
import * as p from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as C from "./cv.js";
import * as w from "./GeneralConfig.js";
import * as B from "./TooltipsManager.js";

function main() {
    var y, m, S, T, D, L, v, k, I, E, N, P, z, O, M, U, x, A;
    a._RF.push({}, "7d7fdaIuThCD6IrokCoY9bM", "LanguageSetDialog", void 0);
    const {
        ccclass: H,
        property: V
    } = u;
    e("LanguageSetDialog", (y = V(i), m = V(o), S = V(g), T = V(l), D = V(i), L = V(g), v = V(g), k = V(g), H((N = t((E = class extends r {
        constructor(...e) {
            super(...e), n(this, "btn_back", N, this), n(this, "languageButtonPrefab", P, this), n(this, "languageButtonContainer", z, this), n(this, "currentLanguage", O, this), n(this, "changeLanguageButton", M, this), n(this, "languageSetDialog", U, this), n(this, "languageSetDialogBg", x, this), n(this, "arrowImageNode", A, this), this._listButtons = null, this._popupTween = null, this._isTweening = void 0
        }
        onLoad() {
            if (!C.appConfig.getGeneralConfig().canChangeLanguage) return void(this.node.active = !1);
            this.node.on(s.TOUCH_END, (e => {
                e.propagationStopped = !0
            }), this), this.btn_back.node.on(i.EventType.CLICK, this._onClickBack, this), this.changeLanguageButton.node.on(i.EventType.CLICK, this._onClickOpenLanguageSelector, this);
            let e = C.appConfig.getGeneralConfig().availableLanguages,
                t = [];
            this._listButtons = new Array;
            for (let t of e) {
                let e = p(this.languageButtonPrefab);
                e.parent = this.languageButtonContainer, e.getChildByName("text").getComponent(c).color = new h(255, 255, 255, 255), e.on(i.EventType.CLICK, (e => {
                    C.AudioMgr.playButtonSound("button_click.mp3"), this._OnChangeLanguage(t)
                }), this), e.on(g.EventType.TOUCH_END, (e => {
                    e.propagationStopped = !0
                })), e.name = t, this._listButtons.push(e)
            }
            for (let e of t) {
                let t = p(this.languageButtonPrefab);
                t.parent = this.languageButtonContainer, t.getChildByName("text").getComponent(c).color = (new h).fromHEX("#8B8B8B"), t.on(i.EventType.CLICK, (e => {
                    C.AudioMgr.playButtonSound("button_click.mp3")
                }), this), t.on(g.EventType.TOUCH_END, (e => {
                    e.propagationStopped = !0
                })), t.name = e, this._listButtons.push(t)
            }
            C.resMgr.adaptWidget(this.node), this.updateView()
        }
        updateView() {
            let e = C.config.getCurrentLanguage();
            for (let t of this._listButtons) {
                let n = t.getComponentInChildren(l);
                n.string = C.config.getStringData("LanguageView_" + w[t.name].code + "_button_text", !1, t.name), t.name == e ? (t.active = !1, this.currentLanguage.string = n.string) : t.active = !0
            }
            this._isTweening = !1
        }
        _OnChangeLanguage(e) {
            this._isTweening || (C.config.setCurrentLanguage(e), this.updateView(), this._tweenPopup(!1), C.resMgr.adaptWidget(C.tools.getRoot(this.node), !0, !1))
        }
        _onClickBack(e) {
            this._isTweening || (C.AudioMgr.playButtonSound("back_button.mp3"), this._tweenPopup(!1))
        }
        _tweenPopup(e) {
            if (null != this._popupTween && this._popupTween.stop(), e) {
                let e = this.languageSetDialogBg.getScale();
                e.y = 0, this.languageSetDialogBg.setScale(e), this.languageSetDialogBg.getComponent(d).opacity = 0, this._popupTween = f(this.languageSetDialogBg).set({
                    scale: b(1, 0, 1)
                }).to(.1, {
                    scale: b(_.ONE)
                }, {
                    onUpdate(e, t) {
                        e.getComponent(d).opacity = 255 * t
                    }
                })
            } else {
                let e = this.languageSetDialogBg.getScale();
                e.y = 1, this.languageSetDialogBg.setScale(e), this.languageSetDialogBg.getComponent(d).opacity = 255, this._popupTween = f(this.languageSetDialogBg).to(.1, {
                    scale: b(1, 0, 1)
                }, {
                    onUpdate(e, t) {
                        e.getComponent(d).opacity = 255 - 255 * t
                    }
                })
            }
            this._isTweening = !0, this._popupTween.call(this._onTweenFinish.bind(this)(e)).start()
        }
        _onTweenFinish(e) {
            0 == e ? (this.languageSetDialog.active = !1, this.arrowImageNode.angle += 180) : this.arrowImageNode.angle -= 180, this._isTweening = !1
        }
        _onClickOpenLanguageSelector(e) {
            1 != this.languageSetDialog.active && (this.languageSetDialog.active = !0, this._tweenPopup(!0), B.hideAllTooltips())
        }
    }).prototype, "btn_back", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = t(E.prototype, "languageButtonPrefab", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = t(E.prototype, "languageButtonContainer", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = t(E.prototype, "currentLanguage", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = t(E.prototype, "changeLanguageButton", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = t(E.prototype, "languageSetDialog", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = t(E.prototype, "languageSetDialogBg", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = t(E.prototype, "arrowImageNode", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = E)) || I));
    a._RF.pop()
}