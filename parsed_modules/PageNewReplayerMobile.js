import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as r from "./cc.js";
import * as a from "./cc.js";
import * as h from "./RightPanelNewReplayerRenderer.js";
import * as c from "./Holdem_Room_ts.js";
import * as u from "./HandsRecordsManager.js";
import * as d from "./RecordType.js";
import * as o from "./GameMain.js";

function main() {
    var l, g, I, m, x;
    i._RF.push({}, "4303e+RN3FKxYrEjunTMZEW", "PageNewReplayerMobile", void 0);
    const {
        ccclass: p,
        property: L
    } = r;
    t("PageNewReplayerMobile", (l = p("PageNewReplayerMobile"), g = L(n), l((x = e((m = class extends h {
        constructor(...t) {
            super(...t), s(this, "txtPage", x, this), this.currentIndex = -1
        }
        onUpdateList(t) {
            this.roomId == t.roomId && (this.dataList = t.dataList, this.updateView())
        }
        updateView() {
            -1 != this.currentIndex && this.dataList.length - 1 >= this.currentIndex && (this.currentGameuuid = this.dataList[this.currentIndex].gameuuid_js), this.autoChoseItemFirstOrCurrent()
        }
        autoChoseItemFirstOrCurrent() {
            -1 == this.currentIndex ? this.dataList.length > 0 ? this.choseItem(this.dataList.length - 1) : this.txtPage.string = "-/-" : this.choseItem(this.currentIndex)
        }
        async choseItem(t) {
            let e = t => {
                null == this.dataList || 0 == this.dataList.length ? this.txtPage.string = "-/-" : this.txtPage.string = this.currentIndex + 1 + "/" + this.dataList.length
            }; - 1 != this.currentIndex && e(), this.currentIndex = t, this.currentItemData = this.dataList[this.currentIndex], this.currentGameuuid = this.currentItemData.gameuuid_js, e(), a(this.gameInstance) && (this.gameInstance instanceof c && this.requestGetRecord(this.currentGameuuid.toString(), d.Mtt), this.gameInstance instanceof o && this.requestGetRecord(this.currentGameuuid.toString(), d.Cash))
        }
        requestGetRecord(t, e) {
            u.getInstance().getRecord(t, e, this.currentItemData.gameId).then((t => {
                var e;
                null == (e = this.loadRecord) || e.call(this, t, this.gameInstance)
            }))
        }
        onBtnNext() {
            null != this.dataList && 0 != this.dataList.length && (this.currentIndex++, this.currentIndex > this.dataList.length - 1 && (this.currentIndex = this.dataList.length - 1), this.choseItem(this.currentIndex))
        }
        onBtnNextAll() {
            null != this.dataList && 0 != this.dataList.length && (this.currentIndex = this.dataList.length - 1, this.choseItem(this.currentIndex))
        }
        onBtnPre() {
            null != this.dataList && 0 != this.dataList.length && (this.currentIndex--, this.currentIndex < 0 && (this.currentIndex = 0), this.choseItem(this.currentIndex))
        }
        onBtnPreAll() {
            null != this.dataList && 0 != this.dataList.length && (this.currentIndex = 0, this.choseItem(this.currentIndex))
        }
    }).prototype, "txtPage", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = m)) || I));
    i._RF.pop()
}