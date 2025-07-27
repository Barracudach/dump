import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as u from "./cv.js";
import * as g from "./ScrollViewReuse.js";
import * as m from "./MiniGames.js";
import * as p from "./cb.js";
import * as d from "./GameSceneInstance.js";

function main() {
    var h, b, f, R, C, L;
    n._RF.push({}, "92a4cZhLD5FUaBeuQULYW77", "RoomScene", void 0);
    const {
        ccclass: y,
        property: T
    } = r;
    e("RoomScene", (h = T(i), b = T(s), y((C = t((R = class extends a {
        constructor(...e) {
            super(...e), o(this, "prefab_item", C, this), o(this, "scrollView", L, this)
        }
        onLoad() {
            u.config.adaptScreen(this.node.parent), u.resMgr.adaptWidget(this.node.parent, !0), u.config.setCurrentScene(u.Enum.SCENE.ROOM_SCENE)
        }
        start() {
            this._addObserver(), u.cowboyNet.GetMiniGameState();
            let e = this.scrollView.getComponent(g);
            if (e.bindPrefab(this.prefab_item, "MiniGameItem", []), e.generateItemPool(), e.bindScrollEventTarget(this), l("back_button", this.node).on("click", (() => {
                    document.location.href = "ccjs://back-normal"
                }), this), u.config.GET_CLIENT_TYPE() == u.Enum.ClientType.CowboyWeb && u.StringTools.getArrayLength(p.getCowboyRoom().backToMainTips) > 0) {
                let e = p.getCowboyRoom().backToMainTips;
                p.getCowboyRoom().backToMainTips = "", this.scheduleOnce((t => {
                    var o;
                    let n = null == (o = d.getInstance(null == this ? void 0 : this.node)) || null == (o = o.room) ? void 0 : o.gameScene;
                    u.TP.showMsg(e, !1, null, null, !1, !1, "", !1, c.HorizontalAlign.CENTER, !1, n)
                }), .3)
            }
        }
        _addObserver() {
            u.MessageCenter.register(u.config.CHANGE_LANGUAGE, this._onMsgChangeLanguage.bind(this), this.node), u.MessageCenter.register("RoomList_ResponseRoomList", this.ResponseRoomList.bind(this), this.node)
        }
        onDestroy() {
            u.MessageCenter.unregister(u.config.CHANGE_LANGUAGE, this.node), u.MessageCenter.unregister("RoomList_ResponseRoomList", this.node)
        }
        _onMsgChangeLanguage() {}
        ResponseRoomList(e) {
            let t = this.scrollView.getComponent(g),
                o = [],
                n = u.StringTools.getArrayLength(e.games);
            for (let t = 0; t < n; ++t) {
                let n = new m;
                u.StringTools.deepCopy(e.games[t], n), n.gameID = e.gameID, o.push(n)
            }
            o.length > 1 && o.sort(this.sortRoomList), t.rebindDataRef(o), t.reloadView()
        }
        sortRoomList(e, t) {
            return e.deskType === t.deskType ? e.AmountLevel[0] - t.AmountLevel[0] : e.deskType - t.deskType
        }
    }).prototype, "prefab_item", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = t(R.prototype, "scrollView", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = R)) || f));
    n._RF.pop()
}