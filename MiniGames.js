import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as u from "./cv.js";
import * as C from "./HashMap.js";
import * as y from "./Enum.js";

function main() {
    var _, w, f, L, b, T, E, G;
    i._RF.push({}, "9ecb5x5R/tF4KL4lRrsluTo", "MiniGames", void 0);
    const {
        ccclass: A,
        property: M
    } = r;
    class S {
        constructor() {
            this.img_icon_path = "", this.game_title_key = ""
        }
    }
    e("MiniGames", (_ = M(n), w = M(n), f = M(s), A((T = t((b = class extends a {
        constructor(...e) {
            super(...e), o(this, "prefab_item_1", T, this), o(this, "prefab_item_2", E, this), o(this, "scrollView", G, this), this.isTop = !1, this.game_icon_path = ["cowboy_r", "br_r", "videocowboy_r", "pkds_r"], this.game_title_keys = ["COWBOY POKER", "BEAT THE BANK", "VIDEO TABLES", "MASTER"], this.table_type_keys = ["LOW END TABLES", "MID LEVEL TABLES", "HIGH LEVEL TABLES"], this.iconMap = new C, this.gameIdArray = [u.Enum.GameId.CowBoy, u.Enum.GameId.HumanBoy, u.Enum.GameId.VideoCowboy, u.Enum.GameId.PokerMaster], this.miniGameData = new C
        }
        onLoad() {
            u.resMgr.adaptWidget(this.node, !0);
            let e = this.gameIdArray.length;
            for (let t = 0; t < e; t++) {
                let e = new S;
                e.img_icon_path = "hall/lobby/" + this.game_icon_path[t], e.game_title_key = this.game_title_keys[t], this.iconMap.add(this.gameIdArray[t], e)
            }
            this._addObserver(), this.scrollView.node.on("scroll-to-top", (() => {
                this.isTop = !0
            }), this), this.scrollView.node.on("scroll-ended", (() => {
                this.isTop && (this.isTop = !1, u.worldNet.MiniGamesListRequest())
            }), this), this.ResponseRoomList(u.dataHandler.getMiniGameList())
        }
        onEnable() {
            u.worldNet.MiniGamesListRequest()
        }
        onDisable() {
            if (this.scrollView.isAutoScrolling()) {
                let e = this.scrollView.getScrollOffset().y,
                    t = this.scrollView.getMaxScrollOffset().y;
                e < 0 ? this.scrollView.setContentPosition(new l(0, .5 * this.scrollView.node.getComponent(h).height)) : e > t && this.scrollView.setContentPosition(new l(0, this.scrollView.content.getComponent(h).height - .5 * this.scrollView.node.getComponent(h).height))
            }
        }
        _addObserver() {
            u.MessageCenter.register(u.config.CHANGE_LANGUAGE, this._onMsgChangeLanguage.bind(this), this.node), u.MessageCenter.register("MiniGamesListResponse", this.ResponseRoomList.bind(this), this.node)
        }
        onDestroy() {
            u.MessageCenter.unregister(u.config.CHANGE_LANGUAGE, this.node), u.MessageCenter.unregister("MiniGamesListResponse", this.node)
        }
        _onMsgChangeLanguage() {
            this.ResponseRoomList([], !0)
        }
        ResponseRoomList(e, t) {
            if (this.scrollView.content.removeAllChildren(), !(t = 1 == t)) {
                let t = u.StringTools.getArrayLength(e);
                if (this.miniGameData.clear(), t <= 0) return;
                e.sort(this.sortRoomList);
                for (let o = 0; o < t; o++) {
                    let t = e[o],
                        i = this.miniGameData.get(t.sourceType);
                    i = null == i ? [] : i, i.push(t), this.miniGameData.add(t.sourceType, i)
                }
            }
            if (this.miniGameData.length <= 0) return;
            let o = 0,
                i = 0;
            this.miniGameData.forEach(((e, t, n) => {
                let r = u.StringTools.getArrayLength(t),
                    a = null;
                a = g(this.prefab_item_1), this.scrollView.content.addChild(a);
                let l = a.getChildByName("scrollView"),
                    c = l.getChildByName("content"),
                    d = c.getComponent(h).height,
                    C = c.getComponent(m).spacingY,
                    y = l.getChildByName("scrollBar"),
                    _ = a.getChildByName("scroll_bg"),
                    w = e => d * e + C * (e - 1);
                r <= 4 ? (a.getComponent(h).setContentSize(a.getComponent(h).width, a.getComponent(h).height + w(r)), _.getComponent(h).setContentSize(l.getComponent(h).width, w(r)), l.getComponent(h).setContentSize(l.getComponent(h).width, w(r)), l.removeComponent(s), y.active = !1, o += a.getComponent(h).height, i++) : (a.getComponent(h).setContentSize(a.getComponent(h).width, a.getComponent(h).height + w(4)), _.getComponent(h).setContentSize(l.getComponent(h).width, w(4)), l.getComponent(h).setContentSize(l.getComponent(h).width, w(4)), o += a.getComponent(h).height, i++), c.getComponent(h).setContentSize(c.getComponent(h).width, w(r));
                for (let o = 0; o < r; o++) {
                    let i = g(this.prefab_item_2);
                    i.on(p.EventType.TOUCH_END, (() => {
                        this.joinRoom(e, t[o].roomid)
                    }), this), c.addChild(i), this.setContent(i, t[o])
                }
                c.getComponent(m).updateLayout(), this.setIcon(a, e)
            })), this.scrollView.content.getComponent(m).updateLayout(), o += 18 * (i - 1), this.scrollView.content.getComponent(h).setContentSize(this.scrollView.content.getComponent(h).width, o > this.scrollView.node.getComponent(h).height ? o : this.scrollView.node.getComponent(h).height)
        }
        joinRoom(e, t) {
            u.security.tryJoinCasinoGameRoom((() => {
                u.roomManager.RequestJoinRoom(e, t)
            }))
        }
        sortRoomList(e, t) {
            return e.sourceType != t.sourceType ? e.sourceType - t.sourceType : e.deskType != t.deskType ? e.deskType - t.deskType : e.AmountLevel[0] != t.AmountLevel[0] ? e.AmountLevel[0] - t.AmountLevel[0] : e.roomid - t.roomid
        }
        setIcon(e, t) {
            let o = c("bg/game_icon_1", e),
                i = c("title", e).getComponent(d),
                n = this.iconMap.get(t);
            n && (i.string = u.config.getStringData(n.game_title_key), u.resMgr.setSpriteFrame(o, u.config.getLanguagePath(n.img_icon_path, y.zh_CN)))
        }
        setContent(e, t) {
            let o = e.getChildByName("score_lab").getChildByName("score"),
                i = e.getChildByName("people_lab").getChildByName("people"),
                n = e.getChildByName("level");
            o.getComponent(d).string = u.StringTools.serverGoldToShowString(t.AmountLevel[0]), i.getComponent(d).string = t.playerNum.toString(), n.getComponent(d).string = u.config.getStringData(this.table_type_keys[t.deskType - 1])
        }
    }).prototype, "prefab_item_1", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = t(b.prototype, "prefab_item_2", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = t(b.prototype, "scrollView", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = b)) || L));
    i._RF.pop()
}