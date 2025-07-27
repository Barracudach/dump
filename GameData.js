import * as i from "./cc.js";
import * as e from "./cc.js";

function main() {
    var s;
    i._RF.push({}, "f04c6GxBy9O6ZKAyAWg7Fx0", "GameData", void 0);
    const {
        ccclass: u,
        property: h
    } = e;
    t("GameData", u(s = class {
        constructor() {
            this.i32RoomId = -1, this.i32DealerSId = -1, this.i32SBSid = -1, this.i32BBSid = -1, this.i32Ante = -1, this.u32DeadPot = 0, this.m_u32MiniRaise = 0, this.m_u32StakeNow = 0, this.m_u32RoundBet = 0, this.m_u32NeedCall = 0, this.m_u32FullPot = 0, this.PotList = void 0, this.HandID = "", this.m_u32ActionSeq = 0, this.m_u32InsuranceSeq = 0, this.m_u32GreatestBet = 0, this.m_u32AddTimeCount = 0, this.m_bIsOnSelfAction = !1, this.club_createrids = [], this.m_u32DelayTime = 0, this.m_bIsAnte = !1, this.game_settlement_uuid = ""
        }
        reset() {
            this.i32RoomId = -1, this.i32DealerSId = -1, this.i32SBSid = -1, this.i32BBSid = -1, this.i32Ante = -1, this.u32DeadPot = 0, this.m_u32MiniRaise = 0, this.m_u32StakeNow = 0, this.m_u32RoundBet = 0, this.m_u32NeedCall = 0, this.m_u32FullPot = 0, this.PotList, this.HandID = "", this.m_u32ActionSeq = 0, this.m_u32InsuranceSeq = 0, this.m_u32GreatestBet = 0, this.m_u32AddTimeCount = 0, this.m_bIsOnSelfAction = !1, this.club_createrids = [], this.game_settlement_uuid = ""
        }
        isHavePriviledge(t) {
            for (let i = 0; i < this.club_createrids.length; i++)
                if (this.club_createrids[i] == t) return !0;
            return !1
        }
    }) || s);
    i._RF.pop()
}