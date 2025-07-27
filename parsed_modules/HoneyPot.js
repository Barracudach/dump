import * as n from "./cc.js";
import * as i from "./cc.js";
import * as e from "./cc.js";
import * as s from "./AnalyticsHandler.js";
import * as r from "./cv.js";
import * as a from "./HoneyPotHelper.js";

function main() {
    var o;
    i._RF.push({}, "25167LNFCdFG4tj4kSfHffO", "HoneyPot", void 0);
    const {
        ccclass: c
    } = e;
    t("default", c(o = class extends n {
        constructor(...t) {
            super(...t), this._isModifyingUI = !1, this._turnStartTime = void 0, this.handId = void 0, this._turnReaction = []
        }
        sendEvent(t) {
            s.getInstance().sendEvent(r.Enum.CurrentScreen.room, "HoneyPot", this.getGameType(), {
                turnReaction: this._turnReaction,
                handId: this.handId,
                changeTypes: a.getChangeTypes(),
                tableName: t
            })
        }
        clearTrackingCurrentTurn() {
            this._turnStartTime = void 0
        }
        startTurnTracking() {
            this.isSelfPlaying() && (this._turnStartTime = new Date)
        }
        stopTurnTracking(t) {
            this.isSelfPlaying() && (null != this._turnStartTime && this._turnReaction.push({
                turnStartTime: this._turnStartTime,
                turnEndTime: new Date,
                actionType: t,
                modifiedUI: this._isModifyingUI
            }), this._turnStartTime = void 0)
        }
        startHandTracking() {
            if (!this.isSelfPlaying()) return;
            const t = this.isMetProbability();
            !this._isModifyingUI && t ? (this._isModifyingUI = !0, this.modifyUI()) : this._isModifyingUI && !t && (this._isModifyingUI = !1, this.restoreUI())
        }
        stopHandTracking() {
            this.isSelfPlaying() && this._turnReaction.length > 0 && (this.sendEvent(this.getTableName()), this.clearTracking())
        }
        isMetProbability() {
            return Math.random() < a.config.modifyUIProbability
        }
        clearTracking() {
            this._turnReaction = [], this.handId = ""
        }
    }) || o);
    i._RF.pop()
}