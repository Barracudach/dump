import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cv.js";
import * as r from "./RecallBuyin.js";
import * as u from "./GameSceneInstance.js";

function main() {
    var s, c, h, g, d, m, p, k, v, w, y, f;
    i._RF.push({}, "a6f35OUd3BM75emG24PvPd+", "AutoRecallBuyin", void 0);
    const {
        ccclass: M,
        property: R
    } = n;
    t("default", (s = R(o), c = R(o), h = R(o), g = R(o), d = R(o), M((k = a((p = class extends r {
        constructor(...t) {
            super(...t), e(this, "manualLayout", k, this), e(this, "automaticLayout", v, this), e(this, "toggleAutoCheckMark", w, this), e(this, "toggleManualCheckMark", y, this), e(this, "toggle", f, this)
        }
        start() {
            const t = u.getInstanceGameData(null == this ? void 0 : this.node);
            let a = l.dataHandler.getUserData().getUserIdByGameID(u.getInstanceGameId(null == this ? void 0 : this.node)),
                e = t.tRoomData.GetTablePlayer(a),
                i = !1;
            null != e && (i = e.is_auto_withdraw);
            let o = t.tRoomData.pkRoomParam.is_opened_drawback,
                n = t.tRoomData.pkRoomParam.auto_withdraw,
                r = t.tRoomData.pkRoomParam.forceWithdrawMode;
            this.toggle.active = (i || r || n) && o, i || r || n ? (this.toggleManualCheckMark.active = this.manualLayout.active = !1, this.toggleAutoCheckMark.active = this.automaticLayout.active = !0) : (this.toggleManualCheckMark.active = this.manualLayout.active = !0, this.toggleAutoCheckMark.active = this.automaticLayout.active = !1), this.calculate(), l.MessageCenter.register("withdraw_open", this.withdraw_open.bind(this), this.node)
        }
        onDestroy() {
            l.MessageCenter.unregister("withdraw_open", this.node)
        }
        updateTotal() {
            this.totalRecallNum.string = l.StringTools.serverGoldToShowString(l.dataHandler.getUserData().m_totalBuyOut)
        }
        setGameMain(t) {
            this.gameMain = t
        }
        withdraw_open(t) {
            this.toggleAutoCheckMark.active = this.automaticLayout.active = t, this.toggleManualCheckMark.active = this.manualLayout.active = !t;
            u.getInstanceGameData(null == this ? void 0 : this.node).tRoomData.pkRoomParam.is_opened_drawback
        }
        onAutoWithdrawSwitchClick(t) {
            var a;
            l.gameNet.RequestAutoWithdraw(null == (a = this.gameDataInstance) || null == (a = a.tRoomData) ? void 0 : a.u32RoomId, !0)
        }
        onManualWithdrawSwitchClick(t) {
            var a;
            l.gameNet.RequestAutoWithdraw(null == (a = this.gameDataInstance) || null == (a = a.tRoomData) ? void 0 : a.u32RoomId, !1)
        }
    }).prototype, "manualLayout", [s], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = a(p.prototype, "automaticLayout", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = a(p.prototype, "toggleAutoCheckMark", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = a(p.prototype, "toggleManualCheckMark", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = a(p.prototype, "toggle", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = p)) || m));
    i._RF.pop()
}