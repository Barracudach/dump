import * as t from "./cc.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as s from "./Holdem_Room_ts.js";
import * as o from "./NewReplayerTableViewMobile.js";
import * as l from "./cv.js";
import * as r from "./GameMainLandscape.js";
import * as c from "./GameSceneLandscape.js";

function main() {
    var p;
    t._RF.push({}, "5c515n5j8BLEr3Ad6nm262N", "NewReplayerTableViewLandscape", void 0);
    const {
        ccclass: m,
        property: g
    } = n;
    e("NewReplayerTableViewLandscape", m("NewReplayerTableViewLandscape")(p = class extends o {
        setTableAndBackground() {
            if (!l.appConfig.getGameConfig().newReplayerFixedDefaultBackground) {
                if (this.game instanceof s) {
                    const e = this.game.lastRoomBgNode,
                        t = this.game.lastRoomTableNode;
                    if ((null == e ? void 0 : e.isValid) && (null == e ? void 0 : e.active) && (null == t ? void 0 : t.isValid) && (null == t ? void 0 : t.active)) {
                        const n = e.getComponent(a) ?? e.getComponentInChildren(a);
                        i(n) && (this.bgSprite.spriteFrame = n.spriteFrame);
                        const s = t.getComponent(a);
                        i(s) && (this.tableSprite.spriteFrame = s.spriteFrame)
                    } else {
                        const e = this.game.bg;
                        i(e) && (this.bgSprite.spriteFrame = e.spriteFrame);
                        const t = this.game.bgTable;
                        i(t) && (this.tableSprite.spriteFrame = t.spriteFrame)
                    }
                }
                if (this.game instanceof r) {
                    var e, t;
                    const s = null == (e = this.game) || null == (e = e.game) || null == (e = e.game_bg) ? void 0 : e.getComponent(a);
                    if (i(s) && (this.tableSprite.spriteFrame = s.spriteFrame), (null == (t = this.game) ? void 0 : t.game) instanceof c) {
                        var n;
                        const e = null == (n = this.game) || null == (n = n.game.game_table_background) ? void 0 : n.getComponent(a);
                        i(e) && (this.bgSprite.spriteFrame = e.spriteFrame)
                    }
                }
            }
        }
    }) || p);
    t._RF.pop()
}