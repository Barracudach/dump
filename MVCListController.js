import * as t from "./cc.js";
import * as l from "./MVCController.js";
import * as i from "./MVCModel.js";
import * as s from "./MVCListView.js";
import * as o from "./cv.js";
import * as n from "./LobbyTools.js";
import * as r from "./HallPokerController.js";

function main() {
    t._RF.push({}, "59a44Xx7SVD9LfxjPPR5uNZ", "MVCListController", void 0);
    class m extends i {
        constructor(...e) {
            super(...e), this.items = void 0, this.lastSelectedItemId = -1
        }
    }
    e("MVCListModel", m);
    e("default", class extends l {
        get isUpdateItemWhenScrolling() {
            return this._isUpdateItemWhenScrolling
        }
        set isUpdateItemWhenScrolling(e) {
            this._isUpdateItemWhenScrolling = e
        }
        clearReselectItemTimeout() {
            this.reselectItemTimeout && (clearTimeout(this.reselectItemTimeout), this.reselectItemTimeout = null)
        }
        constructor(e, t, l, i, o = null, n = (() => null)) {
            super(s, m, i, o), this.itemControllers = [], this._isUpdateItemWhenScrolling = !0, this.reselectItemTimeout = null, this.onRequestRefreshList = e, this.onCreateItemController = t, this.onUpdateItemControllerByData = l, this.getItemId = n
        }
        onInitializeBegin(e) {
            var t, l;
            this.view.onUpdateItemDataWhenScrolling = null == (t = this.updateItemDataWhenScrolling) ? void 0 : t.bind(this), this.view.onTopRefresh = null == (l = this.onRequestRefreshList) ? void 0 : l.bind(this)
        }
        destroy() {
            this.clearReselectItemTimeout(), this.itemControllers.forEach((e => e.destroy()))
        }
        updateItemDataWhenScrolling(e, t, l) {
            if (!this.isUpdateItemWhenScrolling) return;
            let i = this.itemControllers.find((t => t.isAttachEngineView(e)));
            i || (i = this.createItemController(e), i.init(), this.itemControllers.push(i)), this.updateItemControllerByData(i, t)
        }
        setItems(e, t = !1) {
            this.model.items = e, this.view.updateView(this.model), o.appConfig.isLandscapeLayout && this.ReselectItem(t)
        }
        getSelectedItem() {
            if (this.model.items && this.model.items.length > 0) {
                let t = this.model.items.find((e => {
                    var t;
                    return null !== this.model.lastSelectedItemId && void 0 !== this.model.lastSelectedItemId && (null == (t = this.getItemId) ? void 0 : t.call(this, e)) === this.model.lastSelectedItemId && this.itemControllers.some((t => {
                        var l;
                        return t.isSameItem(null == (l = this.getItemId) ? void 0 : l.call(this, e))
                    }))
                }));
                var e;
                if (null == t) t = null == (e = this.model.items) ? void 0 : e[0];
                return t
            }
            return null
        }
        ReselectItem(e = !1) {
            if (o.appConfig.isLandscapeLayout) {
                const e = this.getSelectedItem();
                if (null != e) {
                    var t;
                    const l = (null == (t = this.getItemId) ? void 0 : t.call(this, e)) || null;
                    null !== l && n.emitMessage(r, l)
                }
            }
            this.clearReselectItemTimeout(), this.reselectItemTimeout = setTimeout((() => {
                if (this.model.items && this.model.items.length > 0) {
                    let l = this.getSelectedItem();
                    if (null != l) {
                        var t;
                        const i = (null == (t = this.getItemId) ? void 0 : t.call(this, l)) || null;
                        null !== i && this.onItemSelect(i, e)
                    }
                }
            }), 300)
        }
        getItems() {
            return this.model.items
        }
        getItemControllers() {
            return this.itemControllers
        }
        scrollToTop() {
            this.view.scrollToTop()
        }
        scrollToItem(e) {
            this.view.scrollToItem(e)
        }
        createItemController(e) {
            var t;
            return null == (t = this.onCreateItemController) ? void 0 : t.call(this, e, this)
        }
        updateItemControllerByData(e, t) {
            var l;
            return null == (l = this.onUpdateItemControllerByData) ? void 0 : l.call(this, e, t)
        }
        getSelectedItemId() {
            return this.model.lastSelectedItemId
        }
        onItemSelect(e, t = !0) {
            this.itemControllers.forEach((l => {
                null != l && l.isSameItem(e) || l.onSelected(!1, t)
            })), this.itemControllers.forEach((l => {
                null != l && l.isSameItem(e) && l.onSelected(!0, t)
            })), this.model.lastSelectedItemId = e
        }
    }), t._RF.pop()
}