import * as n from "./cc.js";
import * as e from "./SelfTournaments.js";
import * as r from "./mttconfig.js";

function main() {
    n._RF.push({}, "00cf8inYoJPQoLWkxp508oA", "mttController", void 0);
    class a {
        constructor() {
            this.selfTours = new e
        }
        init() {
            this.selfTours.init()
        }
        getAllTournamentDetail(t) {
            var n, e, a, l, o;
            switch (t) {
                case r.GAME_LEVEL_LIST_ID.PINEAPPLE_NORMAL:
                    return (null == (n = cc_mtt.vv.DataManager.GAME_LEVEL_LIST) ? void 0 : n.PpRooms) || [];
                case r.GAME_LEVEL_LIST_ID.PINEAPPLE_ROLL:
                    return (null == (e = cc_mtt.vv.DataManager.GAME_LEVEL_LIST) ? void 0 : e.PpLevels) || [];
                case r.GAME_LEVEL_LIST_ID.PINEAPPLE_COWBOY:
                    break;
                case r.GAME_LEVEL_LIST_ID.SNG:
                    return (null == (a = cc_mtt.vv.DataManager.GAME_LEVEL_LIST) ? void 0 : a.SngTournaments) || [];
                case r.GAME_LEVEL_LIST_ID.AOF:
                    return (null == (l = cc_mtt.vv.DataManager.GAME_LEVEL_LIST) ? void 0 : l.AofTournaments) || [];
                case r.GAME_LEVEL_LIST_ID.MTT:
                    return (null == (o = cc_mtt.vv.DataManager.GAME_LEVEL_LIST) ? void 0 : o.MttTournaments) || []
            }
            return []
        }
        getTournamentDetailById(t, n) {
            const e = this.getAllTournamentDetail(n);
            for (let n = 0; n < e.length; n++) {
                var r, a;
                if ((null == (r = e[n]) || null == (r = r.Detail) ? void 0 : r.Id) == t || (null == (a = e[n]) ? void 0 : a.RoomId) == t) return e[n]
            }
            return null
        }
    }
    t("mttControllerClass", a);
    t("default", new a);
    n._RF.pop()
}