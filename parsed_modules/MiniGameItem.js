import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as u from "./MiniGames.js";
import * as g from "./cv.js";

function main() {
    var c, m, h, f, d, p, _, y;
    n._RF.push({}, "8e3d6qmlMxIiIyiMdfxOPQL", "MiniGameItem", void 0);
    const {
        ccclass: G,
        property: b
    } = s;
    e("MiniGameItem", (c = b(o), m = b(r), h = b(r), G((p = t((d = class extends a {
        constructor(...e) {
            super(...e), i(this, "level_img", p, this), i(this, "online_text", _, this), i(this, "difen_text", y, this), this.curRoomID = 0, this.curGameID = 0, this._isVideoRoom = !1, this.msg = null
        }
        onLoad() {
            g.MessageCenter.register(g.config.CHANGE_LANGUAGE, this.initLanguage.bind(this), this.node)
        }
        onDestroy() {
            g.MessageCenter.unregister(g.config.CHANGE_LANGUAGE, this.node)
        }
        initLanguage() {
            this.msg && this._updateCowBoyData(this.msg)
        }
        updateSVReuseData(e, t) {
            if (this.msg = null, t.length <= 0 || t.length - 1 < e) return;
            let i = t[e];
            this._updateCowBoyData(i), i instanceof u && (this.msg = new u, g.StringTools.deepCopy(i, this.msg))
        }
        onBtnItemClick() {
            g.security.tryJoinCasinoGameRoom((() => {
                g.roomManager.RequestJoinRoom(this.curGameID, this.curRoomID)
            }))
        }
        _updateCowBoyData(e) {
            if (!(e instanceof u)) return;
            let t = ["videoCowboy", "junior", "intermediate", "senior"];
            g.resMgr.setSpriteFrame(this.level_img.node, g.config.getLanguagePath("hall/lobby/" + (this._isVideoRoom ? t[0] : t[e.deskType]))), this.online_text.string = g.StringTools.numberToString(e.playerNum), this.difen_text.string = g.StringTools.numberToString(g.StringTools.clientGoldByServer(e.AmountLevel[0]));
            let i = g.config.getStringData("Cowboy_roomlist_item_base_score"),
                n = l("difen_txt", this.node).getComponent(r);
            n.string = i.slice(0, i.length - 1), g.config.getCurrentLanguage() == g.Enum.LANGUAGE_TYPE.zh_CN || g.config.getCurrentLanguage() == g.Enum.LANGUAGE_TYPE.zh_TW ? n.fontSize = 32 : n.fontSize = 28, this.curRoomID = e.roomid, this.curGameID = e.gameID
        }
    }).prototype, "level_img", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = t(d.prototype, "online_text", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = t(d.prototype, "difen_text", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = d)) || f));
    n._RF.pop()
}