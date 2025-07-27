import * as e from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as r from "./cv.js";
import * as c from "./HashMap.js";
import * as o from "./ActivityView.js";

function main() {
    var h, v;
    i._RF.push({}, "35682pXfERMx6RuaEBegO1k", "activityData", void 0);
    t("ActivityInfo", class {
        constructor() {
            this.alreadyShow = !1, this.activity_id = 0, this.activity_url = "", this.activity_pictrue = "", this.activity_type = 0, this.frequency = 0, this.resource = "", this.day_times = 0, this.action_type = 0, this.gameCode = "", this.gameID = 0, this.matchID = "", this.forcedJump = 0
        }
    });
    let y = t("ActivityType", function(t) {
        return t[t.NONE = -1] = "NONE", t[t.CustomAvatar = 2] = "CustomAvatar", t[t.GameAvatar = 3] = "GameAvatar", t[t.BANNER = 4] = "BANNER", t[t.JUNMP_MTT = 5] = "JUNMP_MTT", t[t.JUNMP_SPORT = 6] = "JUNMP_SPORT", t[t.JUNMP_ELECT_LIST = 7] = "JUNMP_ELECT_LIST", t[t.JUNMP_ELECT_GAME = 8] = "JUNMP_ELECT_GAME", t[t.JUNMP_MINI_GAME = 9] = "JUNMP_MINI_GAME", t[t.JUNMP_TOP_MATCHES = 10] = "JUNMP_TOP_MATCHES", t[t.JUNMP_HALL_BANK = 11] = "JUNMP_HALL_BANK", t
    }({}));
    const {
        ccclass: u,
        property: l
    } = e;
    t("default", u(((v = class t extends a {
        constructor(...t) {
            super(...t), this.isShow = !1, this.showType = -1, this.is_alert_avatar = !1, this.activityList = new c, this.webPngList = new c, this.AvatarCallBack = null
        }
        static getInstance() {
            return t.instance || (t.instance = new t), t.instance
        }
        addActivityInfo(t, i) {
            this.activityList.add(t, i)
        }
        getActivityInfo(t) {
            return this.activityList.get(t)
        }
        getActivityHaveNotShow() {
            if (this.activityList.length <= 0) return !1;
            for (let t = 0; t < this.activityList.length; ++t) {
                let i = this.activityList.get(t);
                if (!i.alreadyShow && i.activity_type != y.GameAvatar && i.activity_type != y.CustomAvatar) return !0
            }
            return !1
        }
        removeActivityInfo() {
            this.activityList.clear()
        }
        getWebPngTexture(t) {
            return this.webPngList.get(t)
        }
        haveAvatar(t, i, e = !0) {
            return !!this.isAvatar(e) || (this.isShow = !0, this.isTotalHandsOver() && (this.showType = i), t && (s.getScene().getComponentInChildren(n).node.getChildByName("activityView").getComponent(o).init(), s.getScene().getComponentInChildren(n).node.getChildByName("activityView").getComponent(o).showActivity(this.showType), this.isShow = !1, this.showType = y.NONE), !1)
        }
        isAvatar(t = !0) {
            if (r.config.isSiyuType()) return !0;
            if (r.dataHandler.getUserData().isTouristUser) return !0;
            let i = this.isSystemAvatar();
            return i && t ? !this.isTotalHandsOver() : !i
        }
        isSystemAvatar() {
            let t = r.dataHandler.getUserData().headUrl,
                i = t.lastIndexOf("/"),
                e = t.slice(i + 1);
            return r.StringTools.isNumber(e)
        }
        isTotalHandsOver() {
            return r.dataHandler.getUserData().totalHands >= 50
        }
    }).instance = void 0, h = v)) || h);
    i._RF.pop()
}