import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
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
import * as m from "./cv.js";
import * as C from "./RoleInfoSet.js";
import * as d from "./APAspectRatioFitter.js";

function main() {
    var g, w, y, P, b, f, V, I, S, v, E, _, F, T, L, N;
    l._RF.push({}, "80365rYhJtCsIOzj49wwpgV", "PlayerProfileItem", void 0);
    const {
        ccclass: A,
        property: B
    } = s;
    e("PlayerProfileItem", (g = B(n), w = B(n), y = B(n), P = B(n), b = B(n), f = B(o), V = B(o), A((v = i((S = class extends r {
        constructor(...e) {
            super(...e), t(this, "phoneCellView", v, this), t(this, "normalCellView", E, this), t(this, "securityCellView", _, this), t(this, "checkmarkIcon", F, this), t(this, "noticeIcon", T, this), t(this, "hidePassword", L, this), t(this, "showPassword", N, this), this.isPasswordVisible = !1
        }
        updateSVReuseData(e, i) {
            if (i.length <= 0 || i.length - 1 < e) return;
            this.securityCellView.active = !1, this.phoneCellView.active = !1, this.normalCellView.active = !1;
            let t = i[e];
            var l = null;
            t.cellType == C.PHONE_CELL_TYPE ? (this.phoneCellView.active = !0, l = this.phoneCellView) : t.cellType == C.NORMAL_CELL_TYPE || t.cellType == C.PASSWORD_CELL_TYPE ? (this.normalCellView.active = !0, l = this.normalCellView) : t.cellType == C.SECURITY_QUESTION_CELL_TYPE && (this.securityCellView.active = !0, l = this.securityCellView);
            let n = a("iconP/icon", l);
            n.getComponent(c).spriteFrame = t.itemIcon, n.getComponent(d).onSizeChanged();
            var o = l.getChildByName("InfoLabel");
            o && (o.active = !1, t.itemInfo.length > 0 && (o.active = !0, o.getComponent(u).string = t.itemInfo, o.getComponent(p).opacity = t.isPlaceholder ? 55 : 255));
            var s = l.getChildByName("showPassword");
            s && (s.active = !1, t.cellType == C.PASSWORD_CELL_TYPE && (l.getChildByName("DisplayField").getComponent(h).inputFlag = h.InputFlag.PASSWORD, s.active = !0)), this.checkmarkIcon.active = t.showCheckmark, this.noticeIcon.active = t.showNotice, t.cellType != C.SECURITY_QUESTION_CELL_TYPE && (l.getChildByName("DisplayField").getComponent(h).string = t.value, l.getChildByName("DisplayField").getComponent(p).opacity = t.isPlaceholder ? 55 : 255)
        }
        showHidePasswordCallback(e, i) {
            var t = this.normalCellView.getChildByName("DisplayField");
            let l = this.normalCellView.getChildByName("showPassword").getChildByName("Background");
            t && this.isPasswordVisible ? (this.isPasswordVisible = !this.isPasswordVisible, t.getComponent(h).inputFlag = h.InputFlag.PASSWORD, l.getComponent(c).spriteFrame = this.showPassword) : t && !this.isPasswordVisible && (this.isPasswordVisible = !this.isPasswordVisible, t.getComponent(h).inputFlag = h.InputFlag.DEFAULT, l.getComponent(c).spriteFrame = this.hidePassword), l.getComponent(d).onSizeChanged()
        }
        openSecurityView(e, i) {
            m.AudioMgr.playButtonSound("button_click.mp3"), m.MessageCenter.send(m.Enum.MessageCenterAction.OpenSecurityQuestion)
        }
        onBtnNotice() {
            m.AudioMgr.playButtonSound("button_click.mp3"), m.MessageCenter.send(m.Enum.MessageCenterAction.OpenValidateEmail)
        }
    }).prototype, "phoneCellView", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = i(S.prototype, "normalCellView", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = i(S.prototype, "securityCellView", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = i(S.prototype, "checkmarkIcon", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = i(S.prototype, "noticeIcon", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = i(S.prototype, "hidePassword", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = i(S.prototype, "showPassword", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = S)) || I));
    l._RF.pop()
}