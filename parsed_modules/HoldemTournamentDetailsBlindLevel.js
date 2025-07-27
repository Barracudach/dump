import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as r from "./cc.js";
import * as l from "./cc.js";
import * as s from "./cc.js";
import * as o from "./CustomScrollView.js";
import * as a from "./HoldemTournamentDetailsBlindLevelRow.js";
import * as u from "./Holdem_Basic_Item.js";
import * as d from "./mttconfig.js";
import * as c from "./Translator.js";
import * as h from "./CustomWidget.js";
import * as m from "./ScrollItem.js";

function main() {
    var L, b, _, T, D, I, E, p, f, g;
    l._RF.push({}, "7e916QII3BF37gA7zbKreBu", "HoldemTournamentDetailsBlindLevel", void 0);
    const {
        ccclass: B,
        property: A
    } = s;
    e("default", (L = A(o), b = A(m), _ = A(n), T = A(n), B((E = t((I = class extends u {
        constructor(...e) {
            super(...e), i(this, "blindScrollView", E, this), i(this, "scrollItem", p, this), i(this, "blindHeader", f, this), i(this, "blindDurationHeader", g, this), this.blindRiseType = 0, this._blindList = [], this._currentLevel = 0
        }
        get roomCurrentLevel() {
            return this.holdemRoom.store.currentBlindLevel
        }
        onLoad() {
            let e = null;
            this.scrollItem ? (this.scrollItem.setItemFunc(0, ((e, t) => {
                let i = e.getComponent(a);
                i.setHoldemRoom(this.holdemRoom), i.setData(t)
            })), e = this.scrollItem.getComponentInChildren(r)) : e = this.blindScrollView.view, e && e.node.on(h.EventType.ALIGNMENT_UPDATE, (() => {
                this.updateBlindLevelList(this._blindList)
            }))
        }
        start() {}
        init() {
            let e = this.holdemRoom;
            this.blindHeader.string = c(e._gameViewType == d.MTT_GAME_MODE.SHORT_DECK ? "TOURNAMENT_DETAIL.TAB.BLIND_LEVEL.HEADER.BUTTON" : "TOURNAMENT_DETAIL.TAB.BLIND_LEVEL.HEADER.BLIND")
        }
        setBlindRiseType(e) {
            this.blindRiseType = e, this.blindDurationHeader.string = e == d.BLIND_RISE_TYPE.HANDS ? c("TOURNAMENT_DETAIL.TAB.BLIND_LEVEL.HEADER.HANDS") : c("TOURNAMENT_DETAIL.TAB.BLIND_LEVEL.HEADER.DURATION")
        }
        isDataEmpty() {
            return null == this._blindList || 0 == this._blindList.length
        }
        resetPage() {
            this._blindList = [], this.scrollItem ? this.scrollItem.changeItemData([], !0) : this.blindScrollView.resetScrollView()
        }
        updateBlindLevelList(e) {
            let t = e.length === this._blindList.length;
            this._blindList = e, t ? this.refreshBlindLevelList() : (this.scrollItem ? this.scrollItem.changeItemData(this._blindList, !1) : this.blindScrollView.loadItem(this._blindList, (e => {
                e.getComponent(a).setHoldemRoom(this.holdemRoom)
            })), this._currentLevel = this.roomCurrentLevel)
        }
        refreshBlindLevelList() {
            this._currentLevel != this.roomCurrentLevel && (this.scrollItem ? this.scrollItem.changeItemData(this._blindList, !1) : this.blindScrollView.updateList(this._blindList), this._currentLevel = this.roomCurrentLevel)
        }
    }).prototype, "blindScrollView", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = t(I.prototype, "scrollItem", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = t(I.prototype, "blindHeader", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = t(I.prototype, "blindDurationHeader", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = I)) || D));
    l._RF.pop()
}