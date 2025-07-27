import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as l from "./HoldemReplayPrefab.js";
import * as d from "./mttconfig.js";
import * as p from "./Holdem_View_Web.js";
import * as u from "./ResourcesLoader.js";
import * as g from "./MTTConnector.js";
import * as h from "./NodeTools.js";

function main() {
    var f, m, y, v;
    n._RF.push({}, "da17dqC2PZBCr7i4ZqkvFrL", "HoldemReplayScene", void 0);
    const {
        ccclass: P,
        property: _
    } = r;
    e("HoldemReplayScene", (f = _(a), P((v = t((y = class extends p {
        constructor(...e) {
            super(...e), o(this, "replayPrefab", v, this), this._replay = null
        }
        start() {
            g.instance.enterScene(this.node, "hallReplayFeature"), cc_mtt.vv.AssetsManager.popupParent = this.node, d.writeWebLog && u.instance.loadRes("mtt/upload_web_log/UploadLog", a, null, ((e, t) => {
                if (!e) {
                    let e = s(t);
                    e.parent = c.getScene().getComponentInChildren(i).node, e.setPosition(h.getNodeWidth(this.node) * h.getNodeAnchorX(this.node) - h.getNodeWidth(e) * h.getNodeAnchorX(e) - 50, 0 - h.getNodeHeight(this.node) * h.getNodeAnchorX(this.node) + h.getNodeWidth(e) * h.getNodeAnchorY(e) + 50)
                }
            })), this.showPreloadProgress(), this.preloadPrefab()
        }
        loadPrefab() {
            let e = s(this.replayPrefab);
            e.parent = this.node, this._replay = e.getComponent(l), this._replay.setPage(cc_mtt.vv.DataManager.replayRecord, ((e, t) => {
                cc_mtt.vv.DataManager.currentGameInfo = cc_mtt.vv.DataManager.lastGameInfo, cc_mtt.vv.AssetsManager.loadScene(cc_mtt.vv.DataManager.currentReplayBackScene, (() => {
                    t && t()
                }))
            })), this.preloadProgress.node.active = !1
        }
    }).prototype, "replayPrefab", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = y)) || m));
    n._RF.pop()
}