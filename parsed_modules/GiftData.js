import * as e from "./cc.js";
import * as s from "./cc.js";
import * as i from "./gs_protocol.mjs_cjs=&original=.js";
import * as n from "./cv.js";
import * as o from "./HashMap.js";

function main() {
    var f;
    s._RF.push({}, "c880di27tdFK5QOiEpsF+dz", "GiftData", void 0);
    t("GiftStarInfo", class {
        constructor() {
            this.uid = 0, this.name = "", this.headurl = "", this.plat = 0
        }
    });
    class r {
        constructor() {
            this.id = 0, this.count = 0, this.desc = "", this.isSelect = !1
        }
    }
    t("GiftCountInfo", r);
    t("GiftSelfSendInfo", class {
        constructor() {
            this.toUID = 0, this.giftID = 0, this.giftCount = 0
        }
    });
    class a {
        constructor() {
            this.gift = null, this.barrage = null
        }
    }
    t("GiftNewsInfo", a);
    class _ {
        constructor() {
            this.img = "", this.link = ""
        }
        copyFrom(t) {
            t && (this.img = i.String(t.img), this.link = i.String(t.link))
        }
        reset() {
            this.img = "", this.link = ""
        }
    }
    t("GiftBanner", _);
    class c {
        constructor() {
            this.title = "", this.announce = ""
        }
        copyFrom(t) {
            t && (this.title = i.String(t.title), this.announce = i.String(t.announce))
        }
        reset() {
            this.title = "", this.announce = ""
        }
    }
    t("GiftAnnouncement", c);
    class g {
        constructor() {
            this.id = 0, this.tType = o.protocol.TipRecordType.TipRecordType_Default, this.data = null
        }
    }
    t("GiftRecordInfo", g);
    class h {
        constructor() {
            this._giftInfoList = [], this._giftStarInfoList = [], this._giftNewsInfoList = [], this._giftRecordsInfoList = [], this._giftCountInfoList = new n, this._giftRankTops = [], this._giftRankList = [], this._banner = new _, this._announcement = new c, this._seatListRef = [], this._onlookers_wpos = new e(e.ZERO), this._isForbidden = !1, this.initGiftCountInfoList()
        }
        reset() {
            this._giftInfoList = [], this._giftStarInfoList = [], this._giftNewsInfoList = [], this._giftRecordsInfoList = [], this._giftRankTops = [], this._giftRankList = [], this._seatListRef = [], this._banner.reset(), this._announcement.reset(), this._isForbidden = !1
        }
        setSeatListRef(t) {
            this._seatListRef = t
        }
        getSeatListRef() {
            return this._seatListRef
        }
        setOnlookersPos(t) {
            this._onlookers_wpos.x = t.x, this._onlookers_wpos.y = t.y
        }
        getOnlookersPos() {
            return this._onlookers_wpos
        }
        setForbidden(t, s = !1) {
            this._isForbidden = -1 === t, s && i.MessageCenter.send(h.GIFT_MSG_UPDATE_FORBIDDEN)
        }
        isForbidden() {
            return this._isForbidden
        }
        addGiftInfoList(t) {
            let s = !1,
                e = i.StringTools.getArrayLength(t);
            for (let i = 0; i < e; ++i) {
                let e = t[i];
                for (let t = 0; t < this._giftInfoList.length; ++t)
                    if (e.tipId === this._giftInfoList[t].tipId) {
                        s = !0, this._giftInfoList[t] = e;
                        break
                    } s || this._giftInfoList.push(e)
            }
        }
        getGiftInfoList() {
            return this._giftInfoList
        }
        isStarByUid(t) {
            let s = !1;
            for (let e = 0; e < this._giftStarInfoList.length; ++e)
                if (t === this._giftStarInfoList[e].uid) {
                    s = !0;
                    break
                } return s
        }
        addStarsInfo(t) {
            let s = !1;
            for (let e = 0; e < this._giftStarInfoList.length; ++e)
                if (t.uid === this._giftStarInfoList[e].uid) {
                    s = !0;
                    break
                } s || (this._giftStarInfoList.push(t), i.MessageCenter.send(h.GIFT_MSG_STARS_CHANGED))
        }
        removeStarsInfo(t) {
            let s = !1;
            if (t !== i.dataHandler.getUserData().u32Uid) {
                for (let e = 0; e < this._giftStarInfoList.length; ++e)
                    if (t === this._giftStarInfoList[e].uid) {
                        this._giftStarInfoList.splice(e--, 1), s = !0;
                        break
                    } s && i.MessageCenter.send(h.GIFT_MSG_STARS_CHANGED)
            }
        }
        getStarInfoByID(t) {
            let s = null;
            for (let e = 0; e < this._giftStarInfoList.length; ++e)
                if (t === this._giftStarInfoList[e].uid) {
                    s = this._giftStarInfoList[e];
                    break
                } return s
        }
        getStarInfosExceptByID(t) {
            let s = this._giftStarInfoList.slice();
            for (let e = 0; e < s.length; ++e)
                if (t === s[e].uid) {
                    s.splice(e--, 1);
                    break
                } return s
        }
        initGiftCountInfoList() {
            {
                let t = 1,
                    s = [{
                        count: 1,
                        desc: ""
                    }, {
                        count: 2,
                        desc: ""
                    }, {
                        count: 3,
                        desc: ""
                    }, {
                        count: 4,
                        desc: ""
                    }, {
                        count: 5,
                        desc: ""
                    }],
                    e = [];
                for (let i = 0; i < s.length; ++i) {
                    let n = new r;
                    n.id = t, n.count = s[i].count, n.desc = s[i].desc, e.unshift(n)
                }
                this._giftCountInfoList.add(t, e)
            } {
                let t = 2,
                    s = [{
                        count: 1,
                        desc: "一见倾心"
                    }, {
                        count: 2,
                        desc: "两喜临门"
                    }, {
                        count: 3,
                        desc: "三生有幸"
                    }, {
                        count: 4,
                        desc: "四季平安"
                    }, {
                        count: 5,
                        desc: "五福临门"
                    }, {
                        count: 6,
                        desc: "六六大顺"
                    }, {
                        count: 7,
                        desc: "七星高照"
                    }, {
                        count: 8,
                        desc: "八方来财"
                    }, {
                        count: 9,
                        desc: "长长久久"
                    }, {
                        count: 10,
                        desc: "十全十美"
                    }],
                    e = [];
                for (let i = 0; i < s.length; ++i) {
                    let n = new r;
                    n.id = t, n.count = s[i].count, n.desc = s[i].desc, e.unshift(n)
                }
                this._giftCountInfoList.add(t, e)
            } {
                let t = 3,
                    s = [{
                        count: 1,
                        desc: "一见倾心"
                    }, {
                        count: 3,
                        desc: "三生有幸"
                    }, {
                        count: 6,
                        desc: "六六大顺"
                    }, {
                        count: 9,
                        desc: "长长久久"
                    }, {
                        count: 10,
                        desc: "十全十美"
                    }, {
                        count: 11,
                        desc: "一心一意"
                    }, {
                        count: 13,
                        desc: "一世情缘"
                    }, {
                        count: 18,
                        desc: "要发要发"
                    }, {
                        count: 22,
                        desc: "祝您好运"
                    }, {
                        count: 28,
                        desc: "我发我发"
                    }],
                    e = [];
                for (let i = 0; i < s.length; ++i) {
                    let n = new r;
                    n.id = t, n.count = s[i].count, n.desc = s[i].desc, e.unshift(n)
                }
                this._giftCountInfoList.add(t, e)
            }
        }
        getGiftCountInfoListByID(t) {
            let s = this._giftCountInfoList.get(t);
            return s || (s = []), s
        }
        addGiftNewsInfo(t, s) {
            let e = null;
            if (t instanceof o.protocol.RoomNews ? (e = new a, e.gift = t) : t instanceof o.protocol.NoticeSendBarrage && (e = new a, e.barrage = t), e) {
                if (e.gift) switch (i.StringTools.getArrayLength(e.gift.rankChangePlayers) > 0 && this.addGiftRankListTops(e.gift.rankChangePlayers), e.gift.newsType) {
                    case o.protocol.NewsType.NewsType_Banner:
                        this.setGiftBanner(e.gift.desc);
                        break;
                    case o.protocol.NewsType.NewsType_Announcement:
                        this.setGiftAnnouncement(e.gift.desc)
                }
                this._giftNewsInfoList.length >= h.GIFT_NEWS_MAXCOUNT && this._giftNewsInfoList.splice(0, 1), this._giftNewsInfoList.push(e), s && i.MessageCenter.send(h.GIFT_MSG_NOTICE_NEWS, e)
            }
        }
        getGiftNewsInfo() {
            return this._giftNewsInfoList
        }
        getGiftNewsInfoByNewsType(t) {
            let s = [];
            for (let e = 0; e < this._giftNewsInfoList.length; ++e) {
                let i = this._giftNewsInfoList[e].gift;
                i && i.newsType === t && s.push(this._giftNewsInfoList[e])
            }
            return s
        }
        getPlayerDynamicListByIdentity(t, s = !0) {
            let e = [].concat(t),
                i = [],
                n = o.protocol.NewsType.NewsType_PlayerDynamic,
                f = t => {
                    let i = !1;
                    if (s) {
                        for (let s = 0; s < e.length; ++s)
                            if (e[s] === t) {
                                i = !0;
                                break
                            }
                    } else {
                        i = !0;
                        for (let s = 0; s < e.length; ++s) i && (i = e[s] !== t)
                    }
                    return i
                };
            for (let t = 0; t < this._giftNewsInfoList.length; ++t) {
                let s = this._giftNewsInfoList[t].gift;
                s && s.newsType === n && f(s.player.identity) && i.push(this._giftNewsInfoList[t])
            }
            return i
        }
        getGiftNewsInfoByBarrage() {
            let t = [];
            for (let s = 0; s < this._giftNewsInfoList.length; ++s) {
                this._giftNewsInfoList[s].barrage && t.push(this._giftNewsInfoList[s])
            }
            return t
        }
        addGiftRecordsInfo(t) {
            let s = !1,
                e = i.StringTools.getArrayLength(t.data);
            if (e <= 0) return;
            let n = t => {
                let s = !1;
                for (let e = 0; e < this._giftRecordsInfoList.length; ++e)
                    if (t === this._giftRecordsInfoList[e].id) {
                        s = !0;
                        break
                    } return s
            };
            for (let i = 0; i < e; ++i) {
                let e = t.data[i];
                if (n(e.id)) continue;
                let o = new g;
                o.id = e.id, o.tType = t.tType, o.data = e, this._giftRecordsInfoList.push(o), s = !0
            }
            s && this._giftRecordsInfoList.sort(((t, s) => s.data.id - t.data.id)), i.MessageCenter.send(h.GIFT_MSG_RESP_RECORDS)
        }
        getGiftRecordsInfo(t) {
            let s = [];
            if (t === o.protocol.TipRecordType.TipRecordType_All) s = this._giftRecordsInfoList;
            else
                for (let e = 0; e < this._giftRecordsInfoList.length; ++e) {
                    let i = this._giftRecordsInfoList[e];
                    i.tType === t && s.push(i)
                }
            return s
        }
        removeAllRecordsInfo() {
            this._giftRecordsInfoList = []
        }
        addGiftRankListTops(t) {
            this._giftRankTops = [];
            let s = i.StringTools.getArrayLength(t);
            for (let e = 0; e < s; ++e) this._giftRankTops.push(t[e])
        }
        getGiftRankListTops() {
            return this._giftRankTops
        }
        addGiftRankList(t) {
            this._giftRankList = [];
            let s = i.StringTools.getArrayLength(t);
            for (let e = 0; e < s; ++e) this._giftRankList.push(t[e]);
            i.MessageCenter.send(h.GIFT_MSG_RESP_RANKLIST)
        }
        getGiftRankList() {
            return this._giftRankList
        }
        setGiftBanner(t) {
            t = i.String(t);
            try {
                this._banner.copyFrom(JSON.parse(t))
            } catch (t) {
                this._banner.reset()
            }
        }
        getGiftBanner() {
            return this._banner
        }
        setGiftAnnouncement(t) {
            t = i.String(t);
            try {
                this._announcement.copyFrom(JSON.parse(t))
            } catch (t) {
                this._announcement.reset()
            }
        }
        getGiftAnnouncement() {
            return this._announcement
        }
    }
    t("GiftData", h), f = h, h.g_class_name = "GiftData", h.GIFT_NEWS_MAXCOUNT = 500, h.GIFT_ANIMINS_TMAXCOUNT = 10, h.GIFT_PLIST_PATH = "zh_CN/game/dzpoker/gift/gift_plist", h.GIFT_AUDIO_PATH = "zh_CN/game/dzpoker/gift/audio/", h.GIFT_MSG_STARS_CHANGED = `${f.g_class_name}_msg_stars_changed`, h.GIFT_MSG_STARS_RECVREAD_STATUS = `${f.g_class_name}_msg_stars_recvread_status`, h.GIFT_MSG_NOTICE_NEWS = `${f.g_class_name}_msg_news`, h.GIFT_MSG_RESP_RECORDS = `${f.g_class_name}_msg_records`, h.GIFT_MSG_RESP_RANKLIST = `${f.g_class_name}_msg_ranklist`, h.GIFT_MSG_SELF_SENDGIFT = `${f.g_class_name}_msg_self_sendgift`, h.GIFT_MSG_UPDATE_FORBIDDEN = `${f.g_class_name}_update_forbidden`, s._RF.pop()
}