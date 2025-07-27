import * as s from "./cc.js";
import * as e from "./cv.js";

function main() {
    s._RF.push({}, "3bb14BpFuxDbar2wD7rQElU", "RemindData", void 0);
    let n = t("eRemindMsgType", function(t) {
            return t[t.RMSG_TYPE_NONE = 0] = "RMSG_TYPE_NONE", t[t.RMSG_TYPE_CLUB = 1] = "RMSG_TYPE_CLUB", t[t.RMSG_TYPE_TRANSFER_ACCOUNTS = 2] = "RMSG_TYPE_TRANSFER_ACCOUNTS", t[t.RMSG_TYPE_ALLIANCE = 3] = "RMSG_TYPE_ALLIANCE", t[t.RMSG_TYPE_CARD_GAME = 4] = "RMSG_TYPE_CARD_GAME", t[t.RMSG_TYPE_GLOBAL = 5] = "RMSG_TYPE_GLOBAL", t
        }({})),
        i = t("eRemindMsgStatus", function(t) {
            return t[t.RMSG_STATUS_NONE = 0] = "RMSG_STATUS_NONE", t[t.RMSG_STATUS_PENDING = 1] = "RMSG_STATUS_PENDING", t[t.RMSG_STATUS_RATIFIED = 2] = "RMSG_STATUS_RATIFIED", t[t.RMSG_STATUS_REFUSED = 3] = "RMSG_STATUS_REFUSED", t[t.RMSG_STATUS_TIMEOUT = 4] = "RMSG_STATUS_TIMEOUT", t[t.RMSG_STATUS_CANCEL = 5] = "RMSG_STATUS_CANCEL", t
        }({}));
    class m {
        constructor() {
            this.format_key = "", this.format_value1 = null, this.format_value2 = null, this.isFormat = !1
        }
        setData(t, s, e) {
            this.format_key = t, null == s && void 0 === s || (this.format_value1 = s), null == e && void 0 === e || (this.format_value2 = e)
        }
        equal(t) {
            return this.isFormat === t.isFormat && this.format_key === t.format_key && this.format_value1 === t.format_value1 && this.format_value2 === t.format_value2
        }
        copyFrom(t) {
            t && void 0 !== t && (this.isFormat = t.isFormat, this.format_key = t.format_key, this.format_value1 = t.format_value1, this.format_value2 = t.format_value2)
        }
    }
    t("RemindDataContentExtra", m);
    t("RemindData", class {
        constructor() {
            this.uuid = "", this.strTag = "", this.msgNew = !1, this.msgType = n.RMSG_TYPE_NONE, this.msgStatus = i.RMSG_STATUS_NONE, this.msgTime = 0, this.msgContenUp = new m, this.msgContenMiddle = new m, this.msgContenDown = new m, this.msgEnsureFunc = null, this.msgCancelFunc = null, this.msgStatusFunc = null, this.uuid = e.StringTools.generateUUID()
        }
        copyFrom(t) {
            t && void 0 !== t && (this.uuid = t.uuid, this.strTag = t.strTag, this.msgNew = t.msgNew, this.msgType = t.msgType, this.msgStatus = t.msgStatus, this.msgTime = t.msgTime, this.msgContenUp.copyFrom(t.msgContenUp), this.msgContenMiddle.copyFrom(t.msgContenMiddle), this.msgContenDown.copyFrom(t.msgContenDown), this.msgEnsureFunc = t.msgEnsureFunc, this.msgCancelFunc = t.msgCancelFunc, this.msgStatusFunc = t.msgStatusFunc)
        }
        equal(t) {
            return !!t && (!!(t.strTag === this.strTag && t.msgNew === this.msgNew && t.msgType === this.msgType && t.msgStatus === this.msgStatus && t.msgContenUp.equal(this.msgContenUp) && t.msgContenMiddle.equal(this.msgContenMiddle) && t.msgContenDown.equal(this.msgContenDown)) || void 0)
        }
    }), s._RF.pop()
}