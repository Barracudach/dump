import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as r from "./cv.js";
import * as c from "./GameSceneInstance.js";

function main() {
    var m, u, g, d;
    n._RF.push({}, "e9720qbXpBM66A1TI15tuEy", "GameJackpotItem", void 0);
    const {
        ccclass: p,
        property: h
    } = o;
    e("GameJackpotItem", (m = h(l), p((d = t((g = class extends a {
        constructor(...e) {
            super(...e), i(this, "levelList", d, this), this.lineLevelData = null
        }
        setdata(e) {
            this.lineLevelData = e;
            for (let t = 0; t < e.length; t++) this.setleveldata(e[t], t);
            let t = e.length;
            for (let e = 0; e < this.levelList.length; e++) this.levelList[e].active = e < t
        }
        setleveldata(e, t) {
            let i = this.levelList[t].getChildByName("amount_text").getComponent(s),
                n = this.levelList[t].getChildByName("blind_text").getComponent(s),
                l = this.levelList[t].getChildByName("level_text").getComponent(s),
                o = e.blind + 1,
                a = r.config.getStringData("ClubJackPotItem_Node_bindNum_text");
            l.string = r.StringTools.formatC(a.toUpperCase(), o.toString()), i.string = r.StringTools.fixedNumberToShowString(e.amount / 100, 0);
            let m = r.config.getblindString(e.blind);
            c.getInstanceGameData(null == this ? void 0 : this.node).tRoomData.pkRoomParam.game_mode == r.Enum.CreateGameMode.CreateGame_Mode_Short && (m = m.substr(0, m.indexOf("/"))), n.string = m.toString()
        }
    }).prototype, "levelList", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), u = g)) || u));
    n._RF.pop()
}