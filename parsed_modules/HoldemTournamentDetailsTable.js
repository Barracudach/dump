import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as r from "./CustomScrollView.js";
import * as c from "./HoldemTournamentDetailsRanking.js";
import * as u from "./HoldemTournamentDetailsTableRow.js";
import * as h from "./Translator.js";
import * as g from "./Holdem_Basic_Item.js";
import * as b from "./CustomWidget.js";
import * as m from "./ScrollItem.js";
import * as T from "./ThemeSystemForRichText.js";

function main() {
    var R, p, d, f, P, _, I, w, L, k, D, y;
    l._RF.push({}, "96c64k09RhO64rs1SlQL9jR", "HoldemTournamentDetailsTable", void 0);
    const {
        ccclass: A,
        property: E
    } = o;
    e("default", (R = E(a), p = E(r), d = E(m), f = E(c), P = E(n), A((w = t((I = class extends g {
        constructor(...e) {
            super(...e), i(this, "tablePageView", w, this), i(this, "tableScrollView", L, this), i(this, "scrollItem", k, this), i(this, "tableRankingPage", D, this), i(this, "tableRankingPageTitleRichText", y, this), this.pageMoveDuration = .3, this._tableList = []
        }
        onLoad() {
            let e = null;
            this.scrollItem ? (this.scrollItem.setItemFunc(0, ((e, t) => {
                let i = e.getComponent(u);
                i.setHoldemRoom(this.holdemRoom), i.setData(t)
            })), e = this.scrollItem.getComponentInChildren(s)) : e = this.tableScrollView.view, e && e.node.on(b.EventType.ALIGNMENT_UPDATE, (() => {
                this.updateTable(this._tableList)
            }))
        }
        start() {
            this.tablePageView._unregisterEvent()
        }
        setHoldemRoom(e) {
            super.setHoldemRoom(e), this.tableRankingPage.setHoldemRoom(e)
        }
        isDataEmpty() {
            return null == this._tableList || 0 == this._tableList.length
        }
        resetPage() {
            this.scrollItem ? this.scrollItem.changeItemData([], !0) : this.tableScrollView.content.destroyAllChildren(), this.closeTableRankingPage(!1), this.tableRankingPage.resetPage(), this._tableList = []
        }
        updateTable(e) {
            this._tableList = e, this.scrollItem ? this.scrollItem.changeItemData(this._tableList, !0) : this.tableScrollView.loadItem(this._tableList, (e => {
                e.getComponent(u).setHoldemRoom(this.holdemRoom)
            }))
        }
        updateTableRankingPage(e, t) {
            if (this.tableRankingPage.setRankingPlayers(e), this.tableRankingPageTitleRichText) {
                let e = h("TOURNAMENT_DETAIL.TAB.TABLE.TABLE_RANKING_TITLE_TABLE_NO").replace("%s", t.toString()),
                    i = h("TOURNAMENT_DETAIL.TAB.TABLE.TABLE_RANKING_TITLE");
                this.tableRankingPageTitleRichText.string = `<rtc=#0>${e}</rtc><rtc=#1> ${i}</rtc>`, this.tableRankingPageTitleRichText.getComponent(T).applyTheme()
            }
        }
        showTableRankingPage() {
            this.tablePageView.scrollToPage(1, this.pageMoveDuration)
        }
        closeTableRankingPage(e = !0) {
            e ? this.tablePageView.scrollToPage(0, this.pageMoveDuration) : this.tablePageView.scrollToPage(0, 0)
        }
    }).prototype, "tablePageView", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = t(I.prototype, "tableScrollView", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = t(I.prototype, "scrollItem", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = t(I.prototype, "tableRankingPage", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = t(I.prototype, "tableRankingPageTitleRichText", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = I)) || _));
    l._RF.pop()
}