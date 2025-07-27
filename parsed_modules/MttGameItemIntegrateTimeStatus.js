import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./MttItemHelper.js";
import * as T from "./MttItemRenderHelper.js";
import * as h from "./Pb.js";
import * as S from "./Translator.js";
import * as m from "./cv.js";
import * as d from "./ThemeSystem.js";

function main() {
    var c, p, _, g, b, P, y, M, A, E, I, R, f, G, L;
    a._RF.push({}, "50c92ME3MBKHJpR1WrhIKXc", "MttGameItemIntegrateTimeStatus", void 0);
    const {
        ccclass: D,
        property: C
    } = u;
    t("MttGameItemTimeStatusData", class {
        constructor() {
            this.status = 0, this.roomStatusI18nKey = "", this.startingTime = null, this.timeStampLateReg = -1, this.duration = 0, this.allowSignupDate = null, this.timerStop = !1, this.playingPlayersCount = 0, this.registeredPlayer = 0, this.willPlayStartTime = -1, this.playerOnJoint = 0, this.rebuyStatus = 0
        }
    });
    t("MttGameItemIntegrateTimeStatus", (c = D("MttGameItemIntegrateTimeStatus"), p = C(i), _ = C(i), g = C(i), b = C(d), P = C(d), y = C(d), c((E = e((A = class extends o {
        constructor(...t) {
            super(...t), s(this, "labelDateInfo", E, this), s(this, "subTitle", I, this), s(this, "statusTitle", R, this), s(this, "statusBgColor", f, this), s(this, "statusTextColor", G, this), s(this, "statusTimeTextColor", L, this), this._data = null, this.statusTimeTitleKey = ""
        }
        onLoad() {
            m.MessageCenter.register(m.config.CHANGE_LANGUAGE, this.onLanguageChanged.bind(this), this.node)
        }
        start() {}
        onDestroy() {
            m.MessageCenter.unregister(m.config.CHANGE_LANGUAGE, this.node)
        }
        onLanguageChanged() {}
        handleColorStatus() {
            this.setColorStatus(this._data.status, this.isPasued())
        }
        applyData(t) {
            switch (this._data = t, this._data.rebuyStatus == h.commonProto.Rebuy_Status_STATE.Rebuy_Status_Add_ons && this._data.status == h.commonProto.MTT_GAME_STATUS.STARTED && (this._data.status = h.commonProto.MTT_GAME_STATUS.STOP_SIGNUP), this.handleColorStatus(), this.setRoomStatusLabel(this._data.roomStatusI18nKey), this.unschedule(this.updateAllowSignupTimer), this.unschedule(this.updateStartTimer), this.unschedule(this.updateLateReg), this.unschedule(this.updateStartedScheduler), this.unschedule(this.updatePasued), this._data.status) {
                case h.commonProto.MTT_GAME_STATUS.NOT_STARTED:
                    this._data.playerOnJoint > 0 ? (this.statusTimeTitleKey = "", this.setDateInfo("N/A")) : l.checkStartingTime(this._data.startingTime) && (this.updateStartTimer(), this.schedule(this.updateStartTimer, 1, r.REPEAT_FOREVER), this._data.startingTime.getTime() - cc_mtt.vv.DataManager.getNow().getTime() > 864e5 ? this.statusTimeTitleKey = "PKWMTT.GAMELIST.START_ON" : this.statusTimeTitleKey = "PKWMTT.GAMELIST.START_IN");
                    break;
                case h.commonProto.MTT_GAME_STATUS.STARTED:
                    this.isPasued() ? this.setPasuedStatusUI() : t.rebuyStatus == h.commonProto.Rebuy_Status_STATE.Rebuy_Status_Rebuy ? (this.statusTimeTitleKey = "", this.updateRebuyStatus()) : (this.updateLateReg(), this.schedule(this.updateLateReg, 1, r.REPEAT_FOREVER), this.statusTimeTitleKey = "PKWMTT.GAMELIST.CLOSE_IN");
                    break;
                case h.commonProto.MTT_GAME_STATUS.STOP_SIGNUP:
                    this.isPasued() ? this.setPasuedStatusUI() : (this.statusTimeTitleKey = "", this.updateStarted());
                    break;
                case h.commonProto.MTT_GAME_STATUS.STARTED + 100:
                case h.commonProto.MTT_GAME_STATUS.STOP_SIGNUP + 100:
                    this.setPasuedStatusUI();
                    break;
                case h.commonProto.MTT_GAME_STATUS.ENDED:
                    this.statusTimeTitleKey = "", this.setDateInfo("N/A")
            }
            this.setStatusTimeTitle(this.statusTimeTitleKey)
        }
        setPasuedStatusUI() {
            this.statusTimeTitleKey = "PKWMTT.GAMELIST.RESUME_IN", this.updatePasued(), this.schedule(this.updatePasued, 1, r.REPEAT_FOREVER)
        }
        updateStartTimer() {
            T.setMttStatusTimeLabel_registering(this.labelDateInfo, this._data.startingTime)
        }
        updateAllowSignupTimer() {
            T.setMttStatusTimeLabel_registering(this.labelDateInfo, this._data.allowSignupDate)
        }
        updateLateReg() {
            let t = this.getLateRegRemainSec();
            t < 0 && (t = 0);
            const e = l.getRemainTimeInHoursString(t);
            this.setDateInfo(e), 0 == t && this.unschedule(this.updateLateReg)
        }
        updateStartedScheduler() {
            this.updateStarted()
        }
        updatePasued() {
            0 == T.setMttStatusTimeLabel_pasued(this.labelDateInfo, this._data.willPlayStartTime) && this.unschedule(this.updatePasued)
        }
        updateStarted() {
            T.setMttStatusTimeLabel_running(this.labelDateInfo, this._data.playingPlayersCount, this._data.registeredPlayer)
        }
        updateRebuyStatus() {
            this.labelDateInfo.string = ""
        }
        getLateRegRemainSec() {
            return l.timeStampToTimeLeftSec(this._data.timeStampLateReg)
        }
        setDateInfo(t) {
            this.labelDateInfo.string = t
        }
        setStatusTimeTitle(t) {
            n(this.subTitle) && (t.length > 0 ? (this.subTitle.node.active = !0, this.subTitle.string = S(t).toLocaleUpperCase()) : (this.subTitle.string = "", this.subTitle.node.active = !1))
        }
        setStatusTitle(t) {
            this.statusTitle.string = t
        }
        setColorStatus(t, e) {
            const s = [this.statusBgColor, this.statusTextColor, this.statusTimeTextColor];
            t != h.commonProto.MTT_GAME_STATUS.STARTED && t != h.commonProto.MTT_GAME_STATUS.STOP_SIGNUP || e && (t += 100), T.applyGameStatusColorLstMtt(t, s)
        }
        setRoomStatusLabel(t) {
            this.statusTitle.string = m.StringTools.convertText(S(t), 4)
        }
        isPasued() {
            return this._data.status > 100 || this._data.willPlayStartTime && this._data.willPlayStartTime > 0
        }
        update(t) {}
    }).prototype, "labelDateInfo", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = e(A.prototype, "subTitle", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = e(A.prototype, "statusTitle", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = e(A.prototype, "statusBgColor", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = e(A.prototype, "statusTextColor", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = e(A.prototype, "statusTimeTextColor", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = A)) || M));
    a._RF.pop()
}