import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as e from "./cc.js";
import * as c from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as l from "./cc.js";
import * as s from "./LoadingBlocker.js";
import * as d from "./DialogBoxController.js";
import * as h from "./MTTAudioPlayer.js";

function main() {
    var g, u, p, B, f, k, S, y, b, L;
    e._RF.push({}, "cc420Uf+hxJDIiSl4SNfTTP", "BasicScene", void 0);
    const {
        ccclass: C,
        property: P
    } = n;
    i("default", (g = P(l), u = P(r), p = P(l), B = P(r), C((S = o((k = class extends a {
        constructor(...i) {
            super(...i), t(this, "loadingBlockerPrefab", S, this), this.loadingBlockerScript = null, t(this, "loadingBlockerLayer", y, this), t(this, "dialogPrefab", b, this), t(this, "dialogLayer", L, this), this.dialogController = void 0, this.loadingStyle = 0, this.audioPlayer = void 0, this.prefix = "BasicScene", this.onHideAllDialog = () => {
                this.onHideAllDialogAction()
            }
        }
        onLoad() {}
        onDestroy() {}
        start() {}
        initBasicScene(i = !1) {
            if (this.dialogController || (this.dialogController = new d(this.node, this.dialogPrefab, this.dialogLayer, this.onHideAllDialog)), !this.loadingBlockerScript)
                if (cc_mtt.vv.BLLoadingBlocker) this.loadingBlockerScript = cc_mtt.vv.BLLoadingBlocker;
                else {
                    let o = null;
                    o = c(this.loadingBlockerPrefab), o && (this.loadingBlockerScript = o.getComponent(s), this.loadingBlockerScript.loadingController = this, i && (s._instance = this.loadingBlockerScript), this.dialogController && (this.loadingBlockerScript.dialogController = this.dialogController), o.parent = this.loadingBlockerLayer)
                } this.audioPlayer || (this.audioPlayer = new h(this))
        }
        destroyBasicScene() {
            this.audioPlayer && this.audioPlayer.stopAll()
        }
        showLoading(i = this.prefix, o, t) {
            this.loadingBlockerScript && this.loadingBlockerScript.show(i, o, t)
        }
        hideLoading(i = this.prefix, o = !1) {
            this.loadingBlockerScript && this.loadingBlockerScript.hide(i, o)
        }
        showLoadingContainer() {
            this.loadingBlockerScript && this.loadingBlockerScript.showContainer()
        }
        hideLoadingContainer() {
            this.loadingBlockerScript && this.loadingBlockerScript.hideContainer()
        }
        showLoadingContainerUI() {
            this.loadingBlockerScript && this.loadingBlockerScript.showContainerUI()
        }
        hideLoadingContainerUI() {
            this.loadingBlockerScript && this.loadingBlockerScript.hideContainerUI()
        }
        onHideAllDialogAction() {
            cc_mtt.vv.ConsoleLog.log("onHideAllDialogAction B")
        }
    }).prototype, "loadingBlockerPrefab", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = o(k.prototype, "loadingBlockerLayer", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = o(k.prototype, "dialogPrefab", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = o(k.prototype, "dialogLayer", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = k)) || f));
    e._RF.pop()
}