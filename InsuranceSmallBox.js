import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as u from "./cv.js";
import * as h from "./GameSceneInstance.js";
import * as m from "./GameSceneInstance.js";

function main() {
    var _, d, g, p, T, D, f, b, w, x, I, S, y;
    i._RF.push({}, "7e006H51y5Lg7Xkgte3Bvmb", "InsuranceSmallBox", void 0);
    const {
        ccclass: k,
        property: v
    } = r;
    e("InsuranceSmallBox", (_ = v(s), d = v(a), g = v(a), p = v(a), T = m("GameDataInstance"), k(((y = class extends o {
        constructor(...e) {
            super(...e), n(this, "panel", b, this), n(this, "txt_name", w, this), n(this, "txt_time", x, this), n(this, "txt_desc", I, this), this._callback = null, this._nTimeDown = 0, this.nodeUITransform = null, this.parentNodeUITransform = null, n(this, "gameDataInstance", S, this)
        }
        show(e, t, n, i) {
            this.node.active = !0, this._callback = i, this._resetTimeDown(n), this._updateView(t, n)
        }
        hide(e) {
            l.getScheduler().unscheduleAllForTarget(this.node), this.node.active = !1
        }
        onLoad() {
            this.nodeUITransform = this.node.getComponent(c), this.parentNodeUITransform = this.panel.getComponent(c), u.resMgr.adaptWidget(this.node), this.panel.on("click", this._onClickSmallBoxPanel, this)
        }
        start() {
            u.MessageCenter.register("update_insurance_time", this._onMsgUpdateInsuranceTime.bind(this), this.node)
        }
        onDestroy() {
            u.MessageCenter.unregister("update_insurance_time", this.node)
        }
        _updateView(e, t) {
            this.txt_desc.string = u.config.getStringData(this.getDescStringKey()), this.txt_name.string = u.String(e)
        }
        getDescStringKey() {
            return "GameScene_insurance_button_cdTime_buyInsurance_txt"
        }
        _resetTimeDown(e) {
            this._nTimeDown = Math.max(0, u.Number(e)), this._setTimeDown(this._nTimeDown), this.unschedule(this._onScheduleTimeDown), this._nTimeDown > 0 && this.schedule(this._onScheduleTimeDown, 1)
        }
        _setTimeDown(e) {
            e = u.Number(e), this.setTextTime(e)
        }
        setTextTime(e) {
            this.txt_time.string = u.StringTools.formatC(u.config.getStringData("UIInsuranceButton"), e)
        }
        _onScheduleTimeDown(e) {
            --this._nTimeDown, this._nTimeDown <= 0 && (this._nTimeDown = 0, this.unschedule(this._onScheduleTimeDown)), this._setTimeDown(this._nTimeDown)
        }
        _onMsgUpdateInsuranceTime(e) {
            h.isInvalidGameDataMultiWindow(e.gameData, this.gameDataInstance) || this._resetTimeDown(e.nLeftTime)
        }
        _onClickSmallBoxPanel(e) {
            this.hide(!1), this._callback && this._callback()
        }
    }).gClassName = "InsuranceSmallBox", b = t((f = y).prototype, "panel", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = t(f.prototype, "txt_name", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = t(f.prototype, "txt_time", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = t(f.prototype, "txt_desc", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = t(f.prototype, "gameDataInstance", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = f)) || D));
    i._RF.pop()
}