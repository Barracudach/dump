import * as s from "./cc.js";
import * as i from "./CowboyEnum.js";

function main() {
    s._RF.push({}, "ca0ffi/nwNIwrq40j8Fpbx9", "CowBoyPlayerHandData", void 0);
    t("OptionOdds", class {
        constructor() {
            this.option = i.BetZoneOption_DUMMY, this.odds = 0
        }
    });
    class e {
        constructor() {
            this.u64GameUUID = 0, this.u32Roomid = 0, this.u32Desktype = 0, this.handnum = 0, this.startat = 0, this.endat = 0, this.gameid = 0, this.redHandCards = [], this.blueHandCards = [], this.publicHandCards = [], this.winHandCards = [], this.surpriseOption = [], this.result = 0, this.redLevel = 0, this.blueLevel = 0, this.totalBet = 0, this.sysWin = 0
        }
    }
    t("CowBoyGameHandRecord", e);
    t("PlayerBetSettle", class {
        constructor() {
            this.option = i.BetZoneOption_DUMMY, this.betAmount = 0, this.winAmount = 0
        }
    });
    class o {
        constructor() {
            this.u64GameUUID = 0, this.uid = 0, this.name = "", this.head = "", this.handnum = 0, this.settles = [], this.totalBet = 0, this.totalWinBet = 0
        }
    }
    t("CowBoyPlayerRecord", o);
    t("CowBoyPlayerHandData", class {
        constructor() {
            this.gameuuids = [], this.totalTodaybet = 0, this.totalTodaywin = 0, this.detail = new e, this.settle = new o
        }
    }), s._RF.pop()
}