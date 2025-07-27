import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as d from "./ListView.js";
import * as p from "./MttGameItemController.js";
import * as g from "./MttItemHelper.js";
import * as m from "./CommonTools.js";
import * as w from "./Translator.js";
import * as L from "./cv.js";

function main() {
    var f, C, v, A, b, T, _, V, S;
    n._RF.push({}, "ff342FaCm9L0YZgyZVCoONv", "MttHallDetailFeederComp", void 0);
    const {
        ccclass: H,
        property: M
    } = s;
    t("MttHallDetailFeederComp", (f = H("MttHallDetailFeederComp"), C = M(d), v = M(l), A = M(o), f((_ = e((T = class extends a {
        constructor(...t) {
            super(...t), i(this, "listView", _, this), i(this, "showAllButton", V, this), i(this, "showAllButtonTxt", S, this), this.controllerList = {}, this._data = null, this._onClickShowAll = null, this._maxListViewHeight = 650, this.callbackOnClick = void 0
        }
        registerOnClickShowAllCallback(t) {
            this._onClickShowAll = t
        }
        setMaxListViewHeight(t) {
            this._maxListViewHeight = t
        }
        onLoad() {
            this.listView.bindScrollEventTarget(this), this.listView.init(this.updateItem.bind(this)), this.listView.sv.content.on(h.EventType.SIZE_CHANGED, (() => {
                const t = this.listView.getComponent(r),
                    e = this.listView.sv.content.getComponent(r);
                t.height = Math.min(this.getListViewMaxHeight(), e.height + 1), m.instance.updateAlignments(this.listView.sv.content.parent), this.showAllButton.node.active = t.height < e.height
            }))
        }
        render(t) {
            this._data = t, this.setMttList(t.mttList)
        }
        convertData(t) {
            return t.map((t => g.convertMttTournamentInfoToMttLobbyItem(t)))
        }
        setMttList(t) {
            this.node.active = t.length > 0;
            const e = this.convertData(t);
            this.listView.notifyDataSetChanged(e), this.setShowAllButtonTxt(c.formatStr(w("MTT_HALL.SHOW_ALL"), t.length))
        }
        updateItem(t, e, i) {
            let n = this.controllerList[e.Detail.Id];
            n || (n = new p(void 0, t, void 0), n.setCustomOnClick(this.callbackOnClick), n.init(), this.controllerList[e.Detail.Id] = n), n.updateItemDataWhenScrolling(e)
        }
        setCallbackOnClick(t) {
            this.callbackOnClick = t
        }
        setShowAllButtonTxt(t) {
            this.showAllButtonTxt.string = t
        }
        updateShowAllButtonTxt() {
            var t, e;
            null != (t = this._data) && t.mttList && null != (e = this.showAllButton) && e.node.active && this.setShowAllButtonTxt(c.formatStr(w("MTT_HALL.SHOW_ALL"), this._data.mttList.length))
        }
        reset() {
            Object.values(this.controllerList).forEach((t => {
                t.destroy()
            })), this.controllerList = {}, this._data = null, this.listView.clear()
        }
        onClickShowAll() {
            var t;
            null == (t = this._onClickShowAll) || t.call(this)
        }
        onLanguageChange() {
            this.updateShowAllButtonTxt()
        }
        getListViewMaxHeight() {
            if (!L.appConfig.isWebApp) return this._maxListViewHeight;
            const t = this.node.parent.getComponent(r);
            let e = this.node.children.reduce(((t, e) => {
                var i;
                e.uuid !== this.listView.node.uuid && (t += (null == (i = e.getComponent(r)) ? void 0 : i.height) || 0);
                return t
            }), 0);
            const i = this.node.getComponent(u);
            i && (e += i.paddingBottom + i.paddingTop, e += i.spacingY * (this.node.children.length - 1));
            let n = t.height - e;
            return n = Math.min(n, this._maxListViewHeight), n
        }
    }).prototype, "listView", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = e(T.prototype, "showAllButton", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = e(T.prototype, "showAllButtonTxt", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = T)) || b));
    n._RF.pop()
}