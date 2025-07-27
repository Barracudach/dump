import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as c from "./borderGraphic.js";
import * as h from "./RoomData.js";
import * as d from "./cv.js";
import * as m from "./i18nText.js";
import * as g from "./mttController.js";
import * as b from "./MultipleGame.js";
import * as f from "./MttItemHelper.js";

function main() {
    var p, I, v, C, M, D, S, T, _, y, k, L, P, R;
    o._RF.push({}, "214eaHtViVAwZT+P25K1h7F", "MultiTableBarSelectorItem", void 0);
    const {
        ccclass: B,
        property: E
    } = r;
    class V {
        constructor(e, t, i) {
            this.tournamentId = void 0, this.isChecked = void 0, this.isDisable = void 0, this.type = b.HOLDEM, this.tournamentId = e, this.isChecked = t, this.isDisable = i
        }
        isSameData(e) {
            return this.tournamentId == e
        }
    }
    e("MultiTableBarSelectorItemInfoMtt", V);
    class z {
        constructor(e, t, i, o) {
            this.gameId = void 0, this.roomId = void 0, this.isChecked = void 0, this.isDisable = void 0, this.type = b.CASH, this.gameId = e, this.roomId = t, this.isChecked = i, this.isDisable = o
        }
        isSameData(e, t) {
            return this.gameId == e && this.roomId == t
        }
        getRoomInfo() {
            return new h(this.gameId, this.roomId)
        }
    }
    e("MultiTableBarSelectorItemInfoCash", z);
    e("default", (p = E(l), I = E(l), v = E(n), C = E(c), M = E(l), D = E(a), B((_ = t((T = class extends s {
        constructor(...e) {
            super(...e), i(this, "labelRoomName", _, this), i(this, "labelPpValue", y, this), i(this, "toggleSelect", k, this), i(this, "bgBorder", L, this), i(this, "labelSubInfo", P, this), i(this, "iconPp", R, this), this._info = null, this.onToggleCheckCb = null
        }
        get info() {
            return this._info
        }
        get isChecked() {
            return this.toggleSelect.isChecked
        }
        updateInfo(e) {
            this._info = e, this.reloadUI()
        }
        reloadUI() {
            if (!this.info) return;
            let e = this._info;
            if (e instanceof V) {
                var t, i;
                if (!cc_mtt.vv.DataManager.GAME_LEVEL_LIST) return void u(".................... cc_mtt.vv.DataManager.GAME_LEVEL_LIST is null");
                this.iconPp.active = !0, this.labelPpValue.node.active = !0, null == (t = this.labelSubInfo.node.getComponent(m)) || t.setKey("Mtt_Running", !0);
                let o = e.tournamentId;
                const l = g.selfTours.getTournamentById(o),
                    n = cc_mtt.vv.DataManager.GAME_LEVEL_LIST.MttTournaments,
                    a = null == n ? void 0 : n.find((e => {
                        var t;
                        return (null == e || null == (t = e.Detail) ? void 0 : t.Id) == o
                    }));
                let r = null == l ? void 0 : l.GameName;
                null != a && f.getTournamentLocalizeName(a) && (r = f.getTournamentLocalizeName(a)), this.labelRoomName.string = r, this.labelPpValue.string = (null == a || null == (i = a.JoinedCount) ? void 0 : i.toString()) || "0"
            } else if (e instanceof z) {
                this.iconPp.active = !1, this.labelPpValue.node.active = !1;
                let t = d.clubDataMgr.getClubData(e.gameId, e.roomId);
                if (!t) {
                    const i = d.roomManager.getRoomByIds(e.gameId, e.roomId);
                    i && (t = d.clubDataMgr.getClubData(e.gameId, i.firstId))
                }
                if (t) {
                    this.labelRoomName.string = t.room_name;
                    let [e, i] = d.roomManager.getRoomMetaData(t);
                    this.labelSubInfo.string = i
                } else console.error(".................... not found metadata info.roomId = " + e.roomId)
            }
            this.toggleSelect.isChecked = e.isChecked, this.bgBorder.customOpacity = e.isDisable ? 153 : 255, this.toggleSelect.interactable = !e.isDisable
        }
        onToggleChecked() {
            var e;
            this._info.isChecked = this.toggleSelect.isChecked, null == (e = this.onToggleCheckCb) || e.call(this, this)
        }
    }).prototype, "labelRoomName", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = t(T.prototype, "labelPpValue", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = t(T.prototype, "toggleSelect", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = t(T.prototype, "bgBorder", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = t(T.prototype, "labelSubInfo", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = t(T.prototype, "iconPp", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = T)) || S));
    o._RF.pop()
}