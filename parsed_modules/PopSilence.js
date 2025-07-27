import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as m from "./cc.js";
import * as p from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as h from "./cv.js";
import * as f from "./MiniGameSoundManager.js";

function main() {
    var S, D, b, C, _, w, E, T, y, L, I, B, N, G, z, A, k;
    i._RF.push({}, "a82f0awn/pMo5b4x2XKW9Rk", "PopSilence", void 0);
    const {
        ccclass: H,
        property: O
    } = s;
    e("default", (S = O(o), D = O(o), b = O(o), C = O(a), _ = O(o), w = O(a), E = O(a), H(((k = class e extends r {
        constructor(...e) {
            super(...e), n(this, "title", L, this), n(this, "desc1", I, this), n(this, "desc2", B, this), n(this, "icon", N, this), n(this, "txtTimeDown", G, this), n(this, "btnCancel", z, this), n(this, "btnQuit", A, this), this.CalmDownDeadLineTimeStamp = 0, this.calmDownLeftSeconds = 0, this.curPopType = h.Enum.popSilenceType.countDownGame
        }
        static getSinglePrefabInst(t, n) {
            let i = n;
            return i || (i = l.getScene()), e._g_prefabInst || (e._g_prefabInst = c(t)), i.getChildByUuid(e._g_prefabInst.uuid) || u(e._g_prefabInst, !0) || (e._g_prefabInst = c(t)), e._g_prefabInst
        }
        autoShow(e, t, n, i) {
            let o = n;
            o || (o = l.getScene()), o.getChildByUuid(this.node.uuid) || o.addChild(this.node), i && this.node.setSiblingIndex(i), this.curPopType = e, this.adjustScreen(), this.calmDownLeftSeconds = t.CalmDownLeftSeconds ? t.CalmDownLeftSeconds : 0, this.CalmDownDeadLineTimeStamp = t.CalmDownDeadLineTimeStamp ? t.CalmDownDeadLineTimeStamp : 0, this.updateCalmDownTime(), this.unscheduleAllCallbacks(), this.schedule((function() {
                this.updateCalmDownTime()
            }), 1)
        }
        onLoad() {
            this.initLanguage(), g.on(p.EVENT_HIDE, this.OnAppEnterBackground, this), g.on(p.EVENT_SHOW, this.OnAppEnterForeground, this)
        }
        onDestroy() {
            g.off(p.EVENT_HIDE, this.OnAppEnterBackground, this), g.off(p.EVENT_SHOW, this.OnAppEnterForeground, this)
        }
        OnAppEnterBackground() {
            console.log("OnAppEnterBackground popSilence.")
        }
        OnAppEnterForeground() {
            console.log("OnAppEnterForeground popSilence.");
            let e = Date.now(),
                t = this.CalmDownDeadLineTimeStamp - e / 1e3;
            t > 0 ? this.calmDownLeftSeconds = t : this.closeDlg()
        }
        start() {}
        initLanguage() {
            this.title.string = h.config.getStringDataCasino("pop_silence_title"), this.btnCancel.getChildByName("Background").getChildByName("Label").getComponent(o).string = h.config.getStringDataCasino("pop_silence_btn_continue"), this.btnQuit.getChildByName("Background").getChildByName("Label").getComponent(o).string = h.config.getStringDataCasino("pop_silence_btn_quit"), this.desc1.getComponent(o).string = h.StringTools.formatC(h.config.getStringDataCasino("pop_silence_tips1")), this.desc2.getComponent(o).string = h.StringTools.formatC(h.config.getStringDataCasino("pop_silence_tips2")), h.config.getCurrentLanguage() == h.Enum.LANGUAGE_TYPE.zh_CN || h.config.getCurrentLanguage() == h.Enum.LANGUAGE_TYPE.zh_TW ? this.desc1.fontSize = 48 : this.desc1.fontSize = 44
        }
        updateCalmDownTime() {
            this.txtTimeDown.getComponent(o).string = "（" + h.StringTools.countTime(this.calmDownLeftSeconds, h.Enum.eTimeType.Hour_Min_Sec) + "）", this.calmDownLeftSeconds <= 0 && this.closeDlg(), this.calmDownLeftSeconds--
        }
        adjustScreen() {
            h.native.isScreenLandscape() ? this.node.getComponent(d).setContentSize(m(h.config.DESIGN_HEIGHT, h.config.DESIGN_WIDTH)) : this.node.getComponent(d).setContentSize(m(h.config.DESIGN_WIDTH, h.config.DESIGN_HEIGHT))
        }
        onBtnCancel() {
            f.playButtonSound("button_click"), h.worldNet.requestCalmDownConfirm(!1), this.closeDlg()
        }
        onBtnQuit() {
            f.playButtonSound("button_click"), h.roomManager.RequestLeaveRoom(h.Enum.GameId.CowBoy, h.roomManager.getMiniGameRoomIdTemplate(h.Enum.GameId.CowBoy))
        }
        closeDlg() {
            this.unscheduleAllCallbacks(), this.node.removeFromParent(), this.node.destroy()
        }
    })._g_prefabInst = null, L = t((y = k).prototype, "title", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = t(y.prototype, "desc1", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = t(y.prototype, "desc2", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = t(y.prototype, "icon", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = t(y.prototype, "txtTimeDown", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = t(y.prototype, "btnCancel", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = t(y.prototype, "btnQuit", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = y)) || T));
    i._RF.pop()
}