import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as f from "./MttFilterPopupButton.js";
import * as w from "./cv.js";
import * as y from "./CurrencyValue.js";
import * as m from "./SlideView.js";
import * as C from "./DesignSystemButtonBase.js";
import * as b from "./DesignSystemButtonBase.js";
import * as T from "./DesignSystemControlSwitch.js";
import * as S from "./CrashTracing.js";
import * as O from "./CrashTracing.js";
import * as k from "./NodeTools.js";

function main() {
    var V, _, L, R, U, F, z, B, A, H, P, M, x, D, N, v, I, W, Y, X, E, G, j, K, Q, q, J, Z, $, tt, et, it;
    n._RF.push({}, "bf616L3cQtPsowmAik0lkLd", "GameListFilter", void 0);
    const {
        ccclass: nt,
        property: ot
    } = l, lt = t("GAME_OPTION", {
        NLH: "NLH",
        SD: "SHORT_DECK",
        Omaha: "OMAHA"
    });
    t("default", (V = ot(o), _ = ot(o), L = ot(o), R = ot(o), U = ot(o), F = ot(o), z = ot(y), B = ot(y), A = ot(y), H = ot(y), P = ot(y), M = ot(y), x = ot(T), D = ot(T), N = ot(m), nt((W = e((I = class extends s {
        constructor(...t) {
            super(...t), i(this, "popup", W, this), i(this, "title", Y, this), i(this, "gameOption", X, this), i(this, "typeOption", E, this), i(this, "speedOption", G, this), i(this, "buyinOption", j, this), i(this, "microUpperVal", K, this), i(this, "lowLowerVal", Q, this), i(this, "lowUpperVal", q, this), i(this, "midLowerVal", J, this), i(this, "midUpperVal", Z, this), i(this, "highLowerVal", $, this), i(this, "showRunningToggle", tt, this), i(this, "startingSoonToggle", et, this), i(this, "slideView", it, this), this._callback = null, this._isShowFullHeight = !0
        }
        setCallback(t) {
            this._callback = t, this.onShow()
        }
        onLoad() {
            if (this.checkTracing(), !r(this.showRunningToggle)) {
                const t = a("popup/popupPanel/toggle_layer/show_running/ControlSwitch", this.node);
                t && (this.showRunningToggle = t.getComponent(T))
            }
            if (!r(this.startingSoonToggle)) {
                const t = a("popup/popupPanel/toggle_layer/starting_soon/ControlSwitch", this.node);
                t && (this.startingSoonToggle = t.getComponent(T))
            }
            this.setFilterYPos()
        }
        resizeLayout() {
            let t = this.popup.getComponentsInChildren(g);
            for (let e = 0; e < t.length; ++e) t[e].updateLayout()
        }
        updateDelemeter() {
            let t = w.appConfig.getFilterDelemeterConfig();
            this.microUpperVal.updateVal(t.ui.microUpper, w.appConfig.getWalletConfig().defaultCurrency.type), this.lowLowerVal.updateVal(t.ui.lowLower, w.appConfig.getWalletConfig().defaultCurrency.type), this.lowUpperVal.updateVal(t.ui.lowUpper, w.appConfig.getWalletConfig().defaultCurrency.type), this.midLowerVal.updateVal(t.ui.midLower, w.appConfig.getWalletConfig().defaultCurrency.type), this.midUpperVal.updateVal(t.ui.midUpper, w.appConfig.getWalletConfig().defaultCurrency.type), this.highLowerVal.updateVal(t.ui.highLower, w.appConfig.getWalletConfig().defaultCurrency.type)
        }
        setFilterYPos() {
            this.node.position = new u(this.node.position.x, this.node.position.y - this.node.getComponent(p).height, this.node.position.z)
        }
        onItemClicked() {
            w.AudioMgr.playButtonSound("tab.mp3");
            let t = this.createOption();
            w.appConfig.isLandscapeLayout && this._callback && this._callback(t)
        }
        onShow() {
            this.updateDelemeter(), this._isShowFullHeight = !0, this.resizeLayout(), this.slideView.show(!1), this.checkTracing()
        }
        onHide() {
            this.slideView.hide()
        }
        onClickTopBar() {
            w.AudioMgr.playButtonSound("button_click.mp3");
            let t = this.node.getComponent(p).height / 2;
            this._isShowFullHeight && (t = -this.node.getComponent(p).height / 2), h(this.popup).by(.2, {
                position: c(0, t, 0)
            }).start(), this._isShowFullHeight = !this._isShowFullHeight
        }
        onClickClose() {
            w.AudioMgr.playButtonSound("close.mp3"), this.onHide()
        }
        setUnselected(t) {
            for (let e = 0; e < t.length; e++) {
                let i = t[e].getComponent(b);
                i.btnState = C.normal, i.isChecked = !1
            }
        }
        onClickReset() {
            w.AudioMgr.playButtonSound("button_click.mp3"), this.setUnselected(this.gameOption.children), this.setUnselected(this.typeOption.children), this.setUnselected(this.speedOption.children), this.setUnselected(this.buyinOption.children), this.resetSwitchToggle();
            let t = this.createOption();
            this._callback && this._callback(t), w.MessageCenter.send(w.Enum.MessageCenterAction.OnTournamentFilterReset)
        }
        resetOptions() {
            this.setUnselected(this.gameOption.children), this.setUnselected(this.typeOption.children), this.setUnselected(this.speedOption.children), this.setUnselected(this.buyinOption.children), this.resetSwitchToggle()
        }
        getFilterButtonComponent(t) {
            return t.getComponent(f)
        }
        resetSwitchToggle() {
            this.showRunningToggle.getComponent(d).isChecked = this.startingSoonToggle.getComponent(d).isChecked = !1
        }
        getOption(t, e = null) {
            let i = [];
            for (let n = 0; n < t.length; n++) {
                t[n].getComponent(b).isChecked && i.push(e ? e[t[n].name] : t[n].name)
            }
            return i
        }
        createOption() {
            return {
                name: {
                    string: [],
                    only: !1
                },
                game: this.getOption(this.gameOption.children, lt),
                type: this.getOption(this.typeOption.children),
                speed: this.getOption(this.speedOption.children),
                buyin: this.getOption(this.buyinOption.children),
                showRunning: this.showRunningToggle.isChecked,
                startingSoon: this.startingSoonToggle.isChecked
            }
        }
        onClickConfirm() {
            w.AudioMgr.playButtonSound("button_click.mp3");
            let t = this.createOption();
            this._callback && this._callback(t), this.clickConfirmPostAction()
        }
        clickConfirmPostAction() {
            this.onHide()
        }
        checkFilterButtons(t) {
            if (this.resetOptions(), t) {
                this.updateAllFilterButtons(this.gameOption.children, t.game, lt), this.updateAllFilterButtons(this.typeOption.children, t.type), this.updateAllFilterButtons(this.speedOption.children, t.speed), this.updateAllFilterButtons(this.buyinOption.children, t.buyin);
                let e = this.showRunningToggle.getComponent(d);
                e && (e.isChecked = t.showRunning);
                let i = this.startingSoonToggle.getComponent(d);
                i && (i.isChecked = t.startingSoon)
            }
        }
        updateAllFilterButtons(t, e, i) {
            if (e.length > 0)
                for (let n = 0; n < t.length; n++) {
                    let o = t[n].getComponent(b);
                    for (let l = 0; l < e.length; l++)(t[n].name == e[l] || i && i[t[n].name] == e[l]) && (o.btnState = C.pressed, o.isChecked = !0)
                }
        }
        checkTracing() {
            let t = {},
                e = !1;
            if (r(this.showRunningToggle)) {
                t.showRunningToggle = {}, t.showRunningToggle.issue = "";
                const i = this.showRunningToggle.node.getScale();
                (i.x < 1 || i.y < 1) && (t.showRunningToggle.scale = {
                    scaleX: i.x,
                    scaleY: i.y
                }, t.showRunningToggle.issue += "wrong_scale", e = !0);
                const n = this.showRunningToggle.node.getPosition();
                272 == n.x && 0 == n.y || (t.showRunningToggle.position = {
                    positionX: n.x,
                    positionY: n.y
                }, t.showRunningToggle.issue += " + wrong_position", e = !0);
                const o = k.getNodeOpacity(this.showRunningToggle.node);
                o <= 0 && (t.showRunningToggle.opacity = o, t.showRunningToggle.issue += " + wrong_opacity", e = !0)
            } else t.showRunningToggle = "null", e = !0;
            if (r(this.startingSoonToggle)) {
                t.startingSoonToggle = {}, t.startingSoonToggle.issue = "";
                const i = this.startingSoonToggle.node.getScale();
                (i.x < 1 || i.y < 1) && (t.startingSoonToggle.scale = {
                    scaleX: i.x,
                    scaleY: i.y
                }, t.startingSoonToggle.issue += "wrong_scale", e = !0);
                const n = this.startingSoonToggle.node.getPosition();
                272 == n.x && 0 == n.y || (t.startingSoonToggle.position = {
                    positionX: n.x,
                    positionY: n.y
                }, t.startingSoonToggle.issue += " + wrong_position", e = !0);
                const o = k.getNodeOpacity(this.startingSoonToggle.node);
                o <= 0 && (t.startingSoonToggle.opacity = o, t.startingSoonToggle.issue += " + wrong_opacity", e = !0)
            } else t.startingSoonToggle = "null", e = !0;
            S.hasInstance() && e && S.getInstance().trace(O.MTTLobby, "filter_knobs_invisible", t, !0)
        }
    }).prototype, "popup", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = e(I.prototype, "title", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = e(I.prototype, "gameOption", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = e(I.prototype, "typeOption", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = e(I.prototype, "speedOption", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = e(I.prototype, "buyinOption", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = e(I.prototype, "microUpperVal", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = e(I.prototype, "lowLowerVal", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = e(I.prototype, "lowUpperVal", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = e(I.prototype, "midLowerVal", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = e(I.prototype, "midUpperVal", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = e(I.prototype, "highLowerVal", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), tt = e(I.prototype, "showRunningToggle", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), et = e(I.prototype, "startingSoonToggle", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), it = e(I.prototype, "slideView", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = I)) || v));
    n._RF.pop()
}