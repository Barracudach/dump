import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as C from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as b from "./CommonTools.js";
import * as d from "./cv.js";
import * as f from "./Translator.js";
import * as L from "./CrashTracing.js";
import * as m from "./CrashTracing.js";
import * as y from "./DataManager.js";
import * as F from "./CustomLocalizedLabel.js";

function main() {
    var P, k, A, v, T, x, D, z, S, _, w, B, E, I, N, O, G, M, H, U;
    n._RF.push({}, "7e5e6dvS5dKCLDrZyGQw58b", "DialogBox", void 0);
    const {
        ccclass: K,
        property: R
    } = s;
    t("DialogBox", (P = R(o), k = R(o), A = R(l), v = R(l), T = R(o), x = R([o]), D = R(o), z = R(l), K((w = e((_ = class extends r {
        constructor(...t) {
            super(...t), i(this, "mask", w, this), i(this, "blocker", B, this), i(this, "titleLabel", E, this), i(this, "contentLabel", I, this), i(this, "closeButton", N, this), i(this, "options", O, this), i(this, "bottom", G, this), i(this, "tempContent", M, this), i(this, "selfDialogStyle", H, this), i(this, "useCustomeSize", U, this), this.dialogKey = "", this.dialogController = null, this.dialogComplex = null, this.titleForPopup = null, this.titleForPopupContent = null, this.buttonArray = null, this.optionData = null, this._isNotClickBackgroundClose = !1
        }
        onLoad() {
            this.blocker.active = !1, this.closeButton.on(a.EventType.CLICK, this.hide.bind(this));
            for (const t of this.options) t.active = !1
        }
        onEnable() {
            d.MessageCenter.register(d.config.CHANGE_LANGUAGE, this.changeLanguageCallback.bind(this), this.node)
        }
        onDisable() {
            d.MessageCenter.unregister(d.config.CHANGE_LANGUAGE, this)
        }
        changeLanguageCallback() {
            if (this.contentLabel && this.titleForPopupContent && this.titleLabel) {
                this.executeChangeLanguage(this.optionData);
                for (let t = 0; t < this.buttonArray.length; t++) this.buttonArray[t].getComponentInChildren(l).string = f(this.optionData[t].text)
            }
        }
        executeChangeLanguage(t) {
            if (this.titleForPopupContent.payload) this.contentLabel.string = this.tempContent.string = this.titleForPopupContent.payload(this.titleForPopupContent.Translation), this.titleLabel.string = f(this.titleForPopup);
            else if (this.titleForPopupContent.resultArray) {
                let e = this.titleForPopupContent.resultArray(this.titleForPopupContent.Translation);
                this.titleLabel.string = e[0], this.contentLabel.string = e[1], this.tempContent.string = e[1];
                for (let i = 0; i < t.length; i++) e[i + 3] && (t[i].text = e[i + 3])
            } else if (this.titleForPopup.resultArrayWithVariation) {
                let e = this.titleForPopup.resultArrayWithVariation(this.titleForPopup.Translation);
                this.titleLabel.string = e[0], this.contentLabel.string = f(this.titleForPopupContent), this.tempContent.string = f(this.titleForPopupContent);
                for (let i = 0; i < t.length; i++) e[i + 3] && (t[i].text = e[i + 3])
            } else if (this.titleForPopupContent.dualTranslation) {
                let t = this.titleForPopupContent.dualResultArray(this.titleForPopupContent.dualTranslation);
                this.titleLabel.string = f(this.titleForPopup), this.contentLabel.string = t, this.tempContent.string = t
            } else if (this.titleForPopupContent.isTranslated) {
                let e = this.titleForPopupContent.resultArrayForTranslated(this.titleForPopupContent.Translation);
                this.titleLabel.string = e[0], this.contentLabel.string = e[1], this.tempContent.string = e[1];
                for (let i = 0; i < t.length; i++) e[i + 2] && (t[i].text = e[i + 2])
            } else this.contentLabel.string = f(this.titleForPopupContent), this.tempContent.string = f(this.titleForPopupContent), this.titleLabel.string = f(this.titleForPopup)
        }
        playAnimation(t) {
            if (h(this.node, !0)) {
                let e = this.node.getComponent(u);
                e.play(e.clips[t].name)
            }
        }
        show(t, e, i, n, o = "", l = null) {
            this.buttonArray = [], this.titleForPopup = t, this.titleForPopupContent = e, this.optionData = n, this.titleForPopup || (this.titleForPopup = ""), this.titleForPopupContent || (this.titleForPopupContent = ""), this.executeChangeLanguage(this.optionData), this.node.active = !0, this.blocker.active = !1, this.titleLabel.node.parent.active = "" !== this.titleLabel.string && "" !== this.titleForPopup, b.instance.updateRenderData(this.tempContent, !0);
            let s = this.tempContent.node.getComponent(p).width;
            if (this.tempContent.node.active = !1, !this.useCustomeSize) {
                s / this.contentLabel.node.getComponent(p).width <= 2 ? (this.contentLabel.fontSize = 48, this.contentLabel.lineHeight = 67) : (this.contentLabel.fontSize = 40, this.contentLabel.lineHeight = 56)
            }
            this.closeButton.parent.active = i, this.dialogKey = o, this.dialogController = l, this.dialogController && this.dialogController.add(this), this.initOptions(n);
            let r = this.bottom.getComponent(c);
            r && r.updateLayout(), this.playAnimation(0), this.logOnSessionExpired()
        }
        initOptions(t) {
            for (const e of t) this.createOption(e)
        }
        hide() {
            this.dialogComplex ? this.dialogComplex.hide() : this.hideAction()
        }
        hideAction() {
            h(this.blocker, !0) && (this.blocker.active = !0), this.buttonArray = [];
            let t = y.popUps,
                e = t.indexOf(this.node);
            e >= 0 && t.splice(e, 1), this.dialogController && this.dialogController.remove(this), this.playAnimation(1)
        }
        onShow() {}
        onHide() {
            this._isNotClickBackgroundClose || (this.dialogComplex ? this.dialogComplex.onHideAction(this) : this.node.destroy())
        }
        createOption(t) {
            t.isNotClickBackgroundClose ? this._isNotClickBackgroundClose = t.isNotClickBackgroundClose : this._isNotClickBackgroundClose = !1;
            let e = this.options[t.type],
                i = g(e);
            i.parent = e.parent, i.active = !0, t.stopCloseOnClick || i.on(a.EventType.CLICK, this.hide.bind(this)), t.callback && i.on(a.EventType.CLICK, (() => {
                t.callback()
            })), this.buttonArray.push(i);
            const n = i.getComponentInChildren(l);
            if (this.titleForPopupContent.isTranslated ? n.string = t.text : n.string = f(t.text), this.titleForPopupContent.resultArray) {
                const t = n.getComponent(F);
                t && (t.enabled = !1)
            }
            t.color && (i.getComponent(C).color = t.color)
        }
        logOnSessionExpired() {
            var t, e;
            (null == (t = this.contentLabel) ? void 0 : t.string) == f("GAME.LOGIN_TIME_OUT") && (null != m && m.IsActive() && (null == m || null == (e = m.getInstance()) || e.trace(L.MttIssues, "Show_Dialog_Session_Token_Expired", {
                Trace: m.getTrace(0, 20),
                Token: cc_mtt.vv.DataManager.token,
                LoginStatus: d.dataHandler.getUserData().m_bIsLoginServerSucc
            })))
        }
    }).prototype, "mask", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = e(_.prototype, "blocker", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = e(_.prototype, "titleLabel", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = e(_.prototype, "contentLabel", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(_.prototype, "closeButton", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = e(_.prototype, "options", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), G = e(_.prototype, "bottom", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = e(_.prototype, "tempContent", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = e(_.prototype, "selfDialogStyle", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), U = e(_.prototype, "useCustomeSize", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), S = _)) || S));
    n._RF.pop()
}