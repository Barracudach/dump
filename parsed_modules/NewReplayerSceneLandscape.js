import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as w from "./GameMainLandscape.js";
import * as h from "./CommonTools.js";
import * as u from "./Translator.js";
import * as _ from "./Holdem_Room_ts.js";
import * as p from "./GameMain.js";
import * as g from "./cv.js";
import * as f from "./LocalizationController.js";
import * as m from "./LocalizationEvents.js";

function main() {
    var b, y, I, W, R, T;
    i._RF.push({}, "08d8374/aVA1p5+eYDi6aDr", "NewReplayerSceneLandscape", void 0);
    const {
        ccclass: C,
        property: L
    } = o;
    e("default", (b = L(a), y = L(s), C((R = n((W = class extends c {
        constructor(...e) {
            super(...e), t(this, "newReplayer_window_prefab", R, this), t(this, "newReplayer_window_node", T, this), this._gameInstance = null, this._scene = void 0
        }
        onLoad() {
            this.initContent()
        }
        onEnable() {
            f.getObserver().subscribe(m.CHANGE_LANGUAGE, this.onLanguageChange, this)
        }
        onDisable() {
            f.getObserver().unsubscribe(m.CHANGE_LANGUAGE, this.onLanguageChange, this)
        }
        start() {
            this.setupWindow()
        }
        getScene() {
            return l(this._scene) || (this._scene = h.instance.getParentScene(r, this.node)), this._scene
        }
        getWindowNode() {
            return this.newReplayer_window_node
        }
        initContent() {
            l(this.newReplayer_window_prefab) && !l(this.newReplayer_window_node) && (this.newReplayer_window_node = d(this.newReplayer_window_prefab), l(this.newReplayer_window_node) && this.node.addChild(this.newReplayer_window_node))
        }
        setupWindow() {
            window._resizingWindowIndex = this.getScene().windowID, window.dispatchEvent(new Event("resize"))
        }
        focusWindow() {
            let e = this.getScene().windowID;
            g.focusWindow(e)
        }
        updateData(e, n) {
            this._scene = e, this._gameInstance = n, this.updateWindowTitle(), this.setUpdateWindowTitleCallback()
        }
        setUpdateWindowTitleCallback() {
            this.getScene() && l(this._gameInstance) && (this._gameInstance instanceof _ ? this._gameInstance.store.setWindowTitleCallback(this.updateWindowTitle.bind(this)) : this._gameInstance instanceof w && this._gameInstance.setWindowTitleCallback(this.updateWindowTitle.bind(this)))
        }
        updateWindowTitle() {
            if (this.getScene() && l(this._gameInstance)) {
                let e = "";
                if (this._gameInstance instanceof _ ? e = this._gameInstance.store.getWindowTitle() ? this._gameInstance.store.getWindowTitle() : this._gameInstance.store.tournamentRoomName : this._gameInstance instanceof p && (e = this._gameInstance.getWindowTitle() ? this._gameInstance.getWindowTitle() : this._gameInstance.getTableName()), "" !== e) {
                    const n = `${u("selfview_HandsHistory")}: ${e}`,
                        t = this._scene.windowID;
                    r.setWindowTitle(t, n)
                }
            }
        }
        onLanguageChange() {
            this.updateWindowTitle()
        }
    }).prototype, "newReplayer_window_prefab", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = n(W.prototype, "newReplayer_window_node", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = W)) || I));
    i._RF.pop()
}