import * as e from "./cc.js";
import * as s from "./ws_protocol.mjs_cjs=&original=.js";
import * as l from "./cv.js";

function main() {
    e._RF.push({}, "94d36FKVGdJHIcORxUZ+PTP", "ClubData", void 0);
    class c {
        constructor() {
            this.club_owner_name = "", this.club_owner_thumb = "", this.cur_maxIncreaseIndex = 0, this.allianceInfo = l.pb.NoticeSearchAlliance.create(), this.club_member_list = [], this.club_member_search_list = [], this.allianceList = [], this.rest()
        }
        rest() {
            this.club_owner_name = "", this.club_owner_thumb = "", this.cur_maxIncreaseIndex = 0, this.allianceInfo = l.pb.NoticeSearchAlliance.create(), s.StringTools.clearArray(this.club_member_list), s.StringTools.clearArray(this.club_member_search_list), s.StringTools.clearArray(this.allianceList)
        }
        copyFrom(t) {
            s.StringTools.deepCopy(t, this)
        }
    }
    t("ClubData", class {
        constructor() {
            this.club = null, this.clubExtra = new c, this.reset()
        }
        reset() {
            let t = l.pb.ClubSnapshotListParams.toObject(l.pb.ClubSnapshotListParams.create(), {
                enums: Number,
                longs: Number,
                bytes: String,
                defaults: !0,
                arrays: !0,
                objects: !0,
                oneofs: !0
            });
            this.club = l.pb.ClubSnapshotListParams.fromObject(t), this.clubExtra.rest()
        }
        copyFrom(t) {
            s.StringTools.deepCopy(t, this)
        }
        isIncludedInAlliance(t) {
            let e = 0;
            if (t === this.clubExtra.allianceInfo.creater_club_id) e = 2;
            else
                for (let s = 0; s < this.clubExtra.allianceInfo.clubItems.length; ++s)
                    if (t === this.clubExtra.allianceInfo.clubItems[s].club_id) {
                        e = 1;
                        break
                    } return e
        }
    }), e._RF.pop()
}