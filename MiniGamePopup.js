import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./cv.js";
import * as u from "./ScrollViewReuse.js";

function main() {
    var h, p, d, b, f, m;
    s._RF.push({}, "e0babhqv1xJhqQ+c6Q9cg5p", "MiniGamePopup", void 0);
    const {
        ccclass: g,
        property: y
    } = n;
    e("default", (h = y(u), p = y(o), g((f = t((b = class extends r {
        constructor(...e) {
            super(...e), i(this, "scrollView", f, this), i(this, "itemPrefab", m, this), this._onHide = void 0, this.REFRESH_DURATION = 10
        }
        onLoad() {
            this.changeItemPrefab(this.itemPrefab)
        }
        onEnable() {
            this.scrollView.scrollToFixedPosition(a(l.ZERO)), this.schedule(this.updateMinigameList, this.REFRESH_DURATION)
        }
        onDisable() {
            this.unschedule(this.updateMinigameList)
        }
        hide() {
            this.node.active = !1
        }
        setData(e) {
            return this.updateData(e), this
        }
        updateData(e) {
            this.scrollView.reloadView(e, !0), c.MessageCenter.send("onRefeshLayout")
        }
        onCloseClicked() {
            c.AudioMgr.playButtonSound("button_click.mp3"), this.processClose()
        }
        processClose() {
            this._onHide(), this.node.parent.destroy(), this.node.destroy()
        }
        setOnHide(e) {
            this._onHide = e
        }
        updateMinigameList() {
            c.worldNet.MiniGamesListRequest()
        }
        applyLayoutStyle(e) {
            return this
        }
        changeItemPrefab(e) {
            this.scrollView.bindPrefab(e, "MiniGamePopupItem"), this.scrollView.generateItemPool(), this.scrollView.bindScrollEventTarget(this)
        }
    }).prototype, "scrollView", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = t(b.prototype, "itemPrefab", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = b)) || d));
    s._RF.pop()
}