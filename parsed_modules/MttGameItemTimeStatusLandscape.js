import * as e from "./cc.js";
import * as a from "./cc.js";
import * as s from "./MttGameItemIntegrateTimeStatus.js";
import * as i from "./Translator.js";
import * as u from "./MttItemHelper.js";
import * as n from "./MttItemRenderHelper.js";

function main() {
    var d;
    e._RF.push({}, "7fadejzNKZAd4p71+Pd8m6w", "MttGameItemTimeStatusLandscape", void 0);
    const {
        ccclass: l,
        property: r
    } = a;
    t("MttGameItemTimeStatusLandscape", l("MttGameItemTimeStatusLandscape")(d = class extends s {
        handleColorStatus() {
            let t = u.handleColorStatusMttDetail(this._data.status, this._data.startingTime, this._data.allowSignupDate);
            this.setColorStatus(t, this.isPasued())
        }
        onLanguageChanged() {
            this._data && (this.setRoomStatusLabel(this._data.roomStatusI18nKey), this.setStatusTimeTitle(this.statusTimeTitleKey), this.isPasued() && this.updatePasued())
        }
        updateAllowSignupTimer() {
            n.setMttStatusTimeLabel_registering_landscape(this.statusTitle, this._data.allowSignupDate)
        }
        updateStartTimer() {
            n.setMttStatusTimeLabel_registering_landscape(this.statusTitle, this._data.startingTime)
        }
        updateLateReg() {
            let t = this.getLateRegRemainSec();
            t < 0 && (t = 0);
            const e = u.getRemainTimeInHoursStringLandscape(t);
            this.setStatusTitle(i("PKWMTT.OVERVIEW.LATE_REG") + " (" + e + ")")
        }
        updateStarted() {
            n.setMttStatusTimeLabel_running(this.statusTitle, this._data.playingPlayersCount, this._data.registeredPlayer, !0)
        }
        updatePasued() {
            0 == n.setMttStatusTimeLabel_paused_landscape(this.statusTitle, this._data.willPlayStartTime) && this.unschedule(this.updatePasued)
        }
    }) || d);
    e._RF.pop()
}