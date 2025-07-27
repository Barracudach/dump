import * as e from "./cc.js";
import * as a from "./cc.js";
import * as s from "./cc.js";

function main() {
    var i, o;
    s._RF.push({}, "6234aQU9oFOhJYXmKO9vz+M", "JackpotData", void 0);
    const {
        ccclass: n,
        property: c
    } = a;
    t("JackpotData", n(((o = class t extends e {
        constructor(...t) {
            super(...t), this.club_id = 0, this.club_name = "", this.club_avatar = "", this.club_area = "", this.baseJackpotInfos = [], this.jackpotSettings = [], this.jackpotAwardTypes = [], this.toClubPercent = 0, this.Push_club_id = 0, this.Push_blind_level = 0, this.Push_prev_amount = 0, this.Push_current_amout = 0, this.currentRoomJackpot = new r, this.award_players = [], this.luckyDog = new d, this.InjectAmount = void 0, this.noticeInjectAmount = new k, this.noticeJackPotAwardInfo = new b
        }
        static getInstance() {
            return t.g_instance || (t.g_instance = new t), t.g_instance
        }
        reset() {
            this.club_id = 0, this.club_name = "", this.club_avatar = "", this.club_area = "", this.baseJackpotInfos = [], this.jackpotSettings = [], this.jackpotAwardTypes = [], this.Push_club_id = 0, this.Push_blind_level = 0, this.Push_prev_amount = 0, this.Push_current_amout = 0, this.currentRoomJackpot.clear(), this.award_players = [], this.luckyDog = null
        }
        getJackPotSetTingsData(t, s) {
            for (let a = 0; a < this.jackpotSettings.length; a++)
                if (this.jackpotSettings[a].blind_level == t && this.jackpotSettings[a].club_id == s) return this.jackpotSettings[a];
            let a = new l;
            return a.blind_level = -1, a.club_id = s, a
        }
        eraseJackPotSetAmountdata(t, s) {
            for (let a = 0; a < this.jackpotSettings.length; a++)
                if (this.jackpotSettings[a].blind_level == t + 1 && this.jackpotSettings[a].club_id == s) return void this.jackpotSettings.splice(a, 1)
        }
        updateDateJackPotSetAmountData(t, s, a) {
            let e = !1;
            for (let i = 0; i < this.jackpotSettings.length; i++) this.jackpotSettings[i].blind_level == t && this.jackpotSettings[i].club_id == s && (this.jackpotSettings[i].amount = a, e = !0);
            if (!e) {
                let e = new h;
                e.amount = a, e.blind_level = t, e.club_id = s, this.jackpotSettings.push(e)
            }
        }
        getHandLevelScale(t) {
            for (let s = 0; s < this.jackpotAwardTypes.length; s++)
                if (this.jackpotAwardTypes[s].hand_level == t) return this.jackpotAwardTypes[s].award_percent;
            return 0
        }
        getJackpotAmountByBlind(t, s) {
            for (let a = 0; a < this.baseJackpotInfos.length; a++)
                if (this.baseJackpotInfos[a].blind_level == t && this.baseJackpotInfos[a].club_id == s) return this.baseJackpotInfos[a].amount;
            return 0
        }
        updateDateBaseInfoAmountData(t, s, a) {
            for (let e = 0; e < this.baseJackpotInfos.length; e++) this.baseJackpotInfos[e].blind_level == t && this.baseJackpotInfos[e].club_id == s && (this.baseJackpotInfos[e].amount = a)
        }
        eraseBaseJackpotInfos(t, s) {
            for (let a = 0; a < this.baseJackpotInfos.length; a++)
                if (this.baseJackpotInfos[a].blind_level == t + 1 && this.baseJackpotInfos[a].club_id == s) return void this.baseJackpotInfos.splice(a, 1)
        }
        pushJackPot(t, s, a) {
            let e = new l;
            e.club_id = a, e.blind_level = s, e.amount = t, this.baseJackpotInfos.push(e)
        }
        eraseBaseJackpotInfosByClubId(t) {
            t && (this.baseJackpotInfos = this.baseJackpotInfos.filter((s => s.club_id != t)))
        }
        pusHaward_players(t) {
            let s = t;
            this.award_players.push(s)
        }
        lucky_Dog(t) {
            let s = t;
            this.luckyDog = s
        }
    }).g_instance = void 0, i = o)) || i);
    class r {
        constructor() {
            this.profit_scale = void 0, this.drawin_amout = void 0, this.CurrentRoomAwardTypes = void 0
        }
        clear() {
            this.profit_scale = 0, this.drawin_amout = 0, this.CurrentRoomAwardTypes = []
        }
        pushCurrentRoomJackpot(t, s) {
            let a = new u;
            a.award_percent = t, a.hand_level = s, this.CurrentRoomAwardTypes.push(a)
        }
    }
    t("CurrentRoomJackpot", r);
    class l {
        constructor() {
            this.amount = 0, this.blind_level = 0, this.club_id = 0
        }
    }
    t("Jackpot", l);
    class h {
        constructor() {
            this.amount = 0, this.blind_level = 0, this.profit_scale = 0, this.drawin_amout = 0, this.club_id = 0
        }
    }
    t("JackpotInfo", h);
    class u {
        constructor() {
            this.hand_level = 0, this.award_percent = 0
        }
    }
    t("AwardType", u);
    t("currentRoomJackpot", class {
        constructor() {
            this.amount = 0, this.blind_level = 0, this.profit_scale = 0, this.drawin_amout = 0
        }
    });
    let p = t("AwardPlayerJackpotType", function(t) {
        return t[t.None = 0] = "None", t[t.Normal = 1] = "Normal", t[t.Earth = 2] = "Earth", t[t.Mars = 3] = "Mars", t
    }({}));
    class _ {
        constructor() {
            this.player_id = 0, this.hand_level = 0, this.award_amount = 0, this.award_time = 0, this.player_name = "", this.type = p.Normal, this.game_uuid = 0
        }
    }
    t("AwardInfo", _);
    class d extends _ {
        constructor(...t) {
            super(...t), this.avatar = ""
        }
    }
    t("LuckDogAwardInfo", d);
    class k {
        constructor() {
            this.club_id = 0, this.blind_level = 0, this.amount = 0
        }
    }
    t("NoticeJackpotInjectAmount", k);
    class b {
        constructor() {
            this.awardInfo = [], this.cur_time = 0, this.msg_type = 0, this.blind_level = 0, this.sys_msg_type = 0
        }
    }
    t("NoticeJackPotAwardInfo", b);
    t("AwardInfos", class {
        constructor() {
            this.award_playid = 0, this.award_amount = 0, this.hand_level = 0, this.award_player_name = "", this.type = p.Normal
        }
    }), s._RF.pop()
}