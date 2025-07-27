import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./CommonTools.js";
import * as u from "./MttItemHelper.js";
import * as _ from "./cv.js";

function main() {
    var w, h, m, p;
    i._RF.push({}, "78b8c0KMvhLCYdqGYvnzt0N", "MttDetailsSceneLandscape", void 0);
    const {
        ccclass: D,
        property: f
    } = s;
    t("default", (w = f(o), D((p = e((m = class extends a {
        constructor(...t) {
            super(...t), n(this, "mttDetails_window_prefab", p, this), this._mttDetails_window_node = null, this._tournamentId = void 0, this._tournamentData = void 0, this._tournamentDetailData = void 0, this._scene = void 0
        }
        onLoad() {
            this.initContent()
        }
        start() {
            this.setupWindow()
        }
        getScene() {
            return d(this._scene) || (this._scene = l.instance.getParentScene(r, this.node)), this._scene
        }
        getWindowNode() {
            return this._mttDetails_window_node
        }
        initContent() {
            d(this.mttDetails_window_prefab) && (this._mttDetails_window_node = c(this.mttDetails_window_prefab), d(this._mttDetails_window_node) && this.node.addChild(this._mttDetails_window_node))
        }
        setupWindow() {
            window._resizingWindowIndex = this.getScene().windowID, window.dispatchEvent(new Event("resize"))
        }
        focusWindow() {
            let t = this.getScene().windowID;
            _.focusWindow(t)
        }
        updateData(t, e, n, i) {
            this._scene = t, this._tournamentId = e, this._tournamentData = n, this._tournamentDetailData = i, this.updateWindowTitle()
        }
        updateWindowTitle() {
            if (this.getScene()) {
                let t = "";
                if (d(this._tournamentData)) t = u.getTournamentLocalizeName(this._tournamentData);
                else {
                    const e = _.lobbyService.getMttItemsByFilter(null).find((t => t.id == this._tournamentId));
                    t = u.getTournamentLocalizeName(e)
                }
                const e = this._scene.windowID;
                r.setWindowTitle(e, t)
            }
        }
    }).prototype, "mttDetails_window_prefab", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = m)) || h));
    i._RF.pop()
}