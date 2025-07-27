import * as n from "./cc.js";
import * as i from "./cc.js";
import * as _ from "./ws_protocol.mjs_cjs=&original=.js";
import * as e from "./RemindData.js";
import * as a from "./GlobalMsgLayer.js";
import * as s from "./cv.js";

function main() {
    i._RF.push({}, "3bb26K2ZotKKamIB/37bZ2h", "GlobalMsgDataManager", void 0);
    let l = t("eGlobalMsgUIType", function(t) {
            return t[t.GMSG_UI_TYPE_NONE = 0] = "GMSG_UI_TYPE_NONE", t[t.GMSG_UI_TYPE_REMIND = 1] = "GMSG_UI_TYPE_REMIND", t[t.GMSG_UI_TYPE_MAIL = 2] = "GMSG_UI_TYPE_MAIL", t[t.GMSG_UI_TYPE_ANNOUNCE = 3] = "GMSG_UI_TYPE_ANNOUNCE", t
        }({})),
        o = (t("eGlobalMsgUITopLevel", function(t) {
            return t[t.GMSG_UI_LEVEL_NONE = 0] = "GMSG_UI_LEVEL_NONE", t[t.GMSG_UI_LEVEL_EXPIRED_READ = 1] = "GMSG_UI_LEVEL_EXPIRED_READ", t[t.GMSG_UI_LEVEL_EXPIRED_UNREAD = 2] = "GMSG_UI_LEVEL_EXPIRED_UNREAD", t[t.GMSG_UI_LEVEL_IMMEDIATELY_READ = 3] = "GMSG_UI_LEVEL_IMMEDIATELY_READ", t[t.GMSG_UI_LEVEL_SLOWLY_READ = 4] = "GMSG_UI_LEVEL_SLOWLY_READ", t[t.GMSG_UI_LEVEL_IMMEDIATELY_UNREAD = 5] = "GMSG_UI_LEVEL_IMMEDIATELY_UNREAD", t[t.GMSG_UI_LEVEL_SLOWLY_UNREAD = 6] = "GMSG_UI_LEVEL_SLOWLY_UNREAD", t[t.GMSG_UI_LEVEL_TOP = 7] = "GMSG_UI_LEVEL_TOP", t
        }({})), t("eMailType", function(t) {
            return t[t.REGULAR_MAIL = 1] = "REGULAR_MAIL", t[t.ANNOUNCE_IMME = 2] = "ANNOUNCE_IMME", t[t.ANNOUNCE_NON_IMM = 3] = "ANNOUNCE_NON_IMM", t[t.KYC_STATUS = 4] = "KYC_STATUS", t
        }({})));
    class u {
        constructor() {
            this._vRemindList = [], this._vMailList = [], this._vAnnounceList = [], this._tMailCountInfo = s.pb.NotifyUserMailNum.create(), this._kyc_status = ""
        }
        get kyc_status() {
            return this._kyc_status
        }
        set kyc_status(t) {
            this._kyc_status = t
        }
        static getInstance() {
            return u._g_instance || (u._g_instance = new u), u._g_instance
        }
        addRemindData(t, i) {
            if (!i)
                for (let i = 0; i < this._vRemindList.length; ++i)
                    if (this._vRemindList[i].equal(t)) return;
            let n = new _;
            n.copyFrom(t), this._vRemindList.push(n), a.AudioMgr.playButtonSound("notice.mp3")
        }
        getRemindInfoByID(t) {
            let i = null;
            for (let n = 0; n < this._vRemindList.length; ++n)
                if (t === this._vRemindList[n].uuid) {
                    i = this._vRemindList[n];
                    break
                } return i
        }
        getRemindInfoByStrTag(t) {
            let i = null;
            for (let n = 0; n < this._vRemindList.length; ++n)
                if (t === this._vRemindList[n].strTag) {
                    i = this._vRemindList[n];
                    break
                } return i
        }
        getRemindList() {
            return this._vRemindList
        }
        clearRemindList() {
            this._vRemindList.splice(0, this._vRemindList.length), this._vRemindList = []
        }
        getMailList() {
            return this._vMailList
        }
        getAnnounceList() {
            return this._vAnnounceList
        }
        addMailData(t, i = !1, n = !0) {
            if (n) {
                for (let i = 0; i < this._vMailList.length; ++i)
                    if (t.mail_id === this._vMailList[i].mail_id) return !1;
                for (let i = 0; i < this._vAnnounceList.length; ++i)
                    if (t.mail_id === this._vAnnounceList[i].mail_id) return !1
            }
            let _ = s.pb.MailInfo.create(t);
            if ((_.mail_type === o.REGULAR_MAIL ? this._vMailList : this._vAnnounceList).push(_), i) {
                2 === _.mail_state && 2 === _.isexpired && (_.mail_type === o.REGULAR_MAIL ? this.addMailNewNum(1) : _.mail_type !== o.ANNOUNCE_NON_IMM && _.mail_type !== o.ANNOUNCE_IMME && _.mail_type !== o.KYC_STATUS || this.addAnnounceNewNum(1)), _.mail_type === o.REGULAR_MAIL ? this.addMailTotalNum(1) : _.mail_type !== o.ANNOUNCE_NON_IMM && _.mail_type !== o.ANNOUNCE_IMME && _.mail_type !== o.KYC_STATUS || this.addAnnounceTotalNum(1)
            }
            return !0
        }
        removeMailInfoByID(t) {
            for (let i = 0; i < this._vMailList.length; ++i)
                if (this._vMailList[i].mail_id === t) return this.addMailTotalNum(-1), 2 === this._vMailList[i].mail_state && this.addMailNewNum(-1), this._vMailList.splice(i, 1), !0;
            for (let i = 0; i < this._vAnnounceList.length; ++i)
                if (this._vAnnounceList[i].mail_id === t) return this.addAnnounceTotalNum(-1), 2 === this._vAnnounceList[i].mail_state && this.addAnnounceNewNum(-1), this._vAnnounceList.splice(i, 1), !0;
            return !1
        }
        getMailInfoByID(t) {
            let i = null;
            for (let n = 0; n < this._vMailList.length; ++n)
                if (this._vMailList[n].mail_id === t) return i = this._vMailList[n], i;
            for (let n = 0; n < this._vAnnounceList.length; ++n)
                if (this._vAnnounceList[n].mail_id === t) return i = this._vAnnounceList[n], i;
            return i
        }
        clearMailList() {
            this._vMailList.splice(0, this._vMailList.length), this._vMailList = [], this._vAnnounceList.splice(0, this._vAnnounceList.length), this._vAnnounceList = []
        }
        setMailCountInfo(t) {
            this._tMailCountInfo = s.pb.NotifyUserMailNum.create(t)
        }
        getMailCountInfo() {
            return this._tMailCountInfo
        }
        addMailNewNum(t) {
            this._tMailCountInfo.mail_new_num = Math.min(e.getMailMaxLimitCount(), this._tMailCountInfo.mail_new_num + t), this._tMailCountInfo.mail_new_num = Math.max(0, this._tMailCountInfo.mail_new_num)
        }
        addMailTotalNum(t) {
            this._tMailCountInfo.mail_total_num = Math.min(e.getMailMaxLimitCount(), this._tMailCountInfo.mail_total_num + t), this._tMailCountInfo.mail_total_num = Math.max(0, this._tMailCountInfo.mail_total_num)
        }
        addAnnounceNewNum(t) {
            this._tMailCountInfo.anounce_new_num = Math.min(e.getMailMaxLimitCount(), this._tMailCountInfo.anounce_new_num + t), this._tMailCountInfo.anounce_new_num = Math.max(0, this._tMailCountInfo.anounce_new_num)
        }
        addAnnounceTotalNum(t) {
            this._tMailCountInfo.anounce_total_num = Math.min(e.getMailMaxLimitCount(), this._tMailCountInfo.anounce_total_num + t), this._tMailCountInfo.anounce_total_num = Math.max(0, this._tMailCountInfo.anounce_total_num)
        }
        getUnreadMsgCount(t) {
            let i = 0;
            switch (t) {
                case l.GMSG_UI_TYPE_REMIND:
                    for (let t = 0; t < this._vRemindList.length; ++t) this._vRemindList[t].msgNew && ++i;
                    break;
                case l.GMSG_UI_TYPE_MAIL:
                    i = this._tMailCountInfo.mail_new_num;
                    break;
                case l.GMSG_UI_TYPE_ANNOUNCE:
                    i = this._tMailCountInfo.anounce_new_num;
                    break;
                case l.GMSG_UI_TYPE_NONE:
                default:
                    for (let t = 0; t < this._vRemindList.length; ++t) this._vRemindList[t].msgNew && ++i;
                    i += this._tMailCountInfo.mail_new_num, i += this._tMailCountInfo.anounce_new_num
            }
            return i
        }
        clearMailGlobalData() {
            this.clearMailList(), this._tMailCountInfo = s.pb.NotifyUserMailNum.create(), e.resetReqMailListStatus()
        }
        clearData() {
            this.clearRemindList(), this.clearMailGlobalData()
        }
        showKYCAnnouncementPopup(t) {
            this.kyc_status = t, n.isNative && a.appConfig.isLandscapeLayout && a.appConfig.getGeneralConfig().multiWindowEnabled && a.focusWindow(1), a.MessageCenter.send(a.Enum.MessageCenterAction.onKYCNotificationStatus, this.kyc_status)
        }
    }
    t("GlobalMsgDataManager", u), u._g_instance = null, i._RF.pop()
}