import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as l from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as i from "./ConsoleLog.js";
import * as c from "./ImpokerHall.js";

function main() {
    var u, p, h, f;
    n._RF.push({}, "201d1WD0spNa7rnhSWzn7Us", "HallMain_ts", void 0);
    const {
        ccclass: _,
        property: m
    } = r;
    t("HallMain_ts", (u = m(a), _((f = e((h = class extends o {
        constructor(...t) {
            super(...t), l(this, "hallPrefab", f, this), this.hall = null
        }
        start() {
            cc_mtt.vv.DataManager.GAME_LEVEL_LIST = new c.commonProto.Game_Level_List, this.hall = s(this.hallPrefab), this.hall.parent = this.node, this.hall.getComponent(i).setHallMain(this)
        }
    }).prototype, "hallPrefab", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = h)) || p));
    n._RF.pop()
}