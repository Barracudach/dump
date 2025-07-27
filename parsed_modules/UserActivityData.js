import * as e from "./cc.js";
import * as i from "./Enum.js";
import * as n from "./cv.js";
import * as r from "./HashMap.js";

function main() {
    e._RF.push({}, "8a9adPQpzNKzYDna1v1s7gM", "UserActivityData", void 0);
    class s {
        constructor() {
            this.at = void 0, this.userAgent = "", this.ip = "", this.userActionType = void 0, this.country = "", this.at = new Date, this.userActionType = void 0
        }
        get atPretty() {
            return n.StringTools.formatDateTimeByCountry(this.at.getTime(), !0, !0)
        }
    }
    t("UserActivityLogEntry", s);
    var a = t("parseUserActivityLogEntry", (function(t) {
        if (null == t) return;
        if (null == t.at || null == t.userActionType) return;
        let e = new s;
        return e.at = new Date(t.at), null != e.at && (e.userActionType = i[t.userActionType], null != e.userActionType) ? (null != t.userAgent && (e.userAgent = t.userAgent), null != t.ip && (e.ip = t.ip), null != t.country && (e.country = t.country), e) : void 0
    }));
    class u {
        constructor() {
            this.activityList = new r
        }
        static getInstance() {
            return u.instance || (u.instance = new u), u.instance
        }
        add(t) {
            if (Array.isArray(t)) {
                let e = n.StringTools.getArrayLength(t),
                    i = [];
                for (let n = 0; n < e; n++) {
                    let e = this.add(t[n]);
                    null != e && (i = i.concat(e))
                }
                return i
            } {
                let e = a(t);
                if (e && (this.activityList.has(e.userActionType) || this.activityList.add(e.userActionType, []), !0 === this.addUniqueActivity(this.activityList.get(e.userActionType), e))) return [e]
            }
            return []
        }
        addUniqueActivity(t, e) {
            let i = t.length;
            if (0 == i) return t.push(e), !0;
            let n = e.at.getTime();
            if (n > t[0].at.getTime()) return t.unshift(e), !0;
            if (n < t[i - 1].at.getTime()) return t.push(e), !0;
            for (let r = 0; r < i - 1; r++)
                if (n < t[r].at.getTime() && n > t[r + 1].at.getTime()) return t.splice(r + 1, 0, e), !0;
            return !1
        }
        getLast(t, e = 0) {
            let i = this.getActivities(t);
            return null != i ? i.length > e ? i[e] : i[0] : null
        }
        updateLastLoginLabel(t) {
            if (!t) return;
            let e = this.getLast(n.Enum.UserActionType.Login, 1);
            e ? (t.node.parent.active = !0, t.string = e ? e.atPretty : "-") : t.node.parent.active = !1
        }
        getActivities(t) {
            return this.activityList.get(t)
        }
        clearData() {
            this.activityList.clear()
        }
    }
    t("UserActivityData", u), u.instance = null, e._RF.pop()
}