import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./cc.js";
import * as s from "./cc.js";
import * as r from "./SizeContentSync.js";
import * as o from "./UserInfo.js";

function main() {
    var l, c, a, u;
    i._RF.push({}, "d38cdoB3sVBr4zrVLzxsqS2", "UserInfoLandscape", void 0);
    const {
        ccclass: p,
        property: d
    } = s;
    e("default", (l = d(r), p((u = n((a = class extends o {
        constructor(...e) {
            super(...e), t(this, "panelSizeContentSync", u, this)
        }
        onClickCloseButton() {
            this.hidePanelAnim(!0)
        }
        buildUserForm(e = null, n = null) {
            super.buildUserForm(e, n), this.syncPanelSize()
        }
        buildChallengeForm() {
            super.buildChallengeForm(), this.syncPanelSize()
        }
        syncPanelSize() {
            this.panelSizeContentSync && this.panelSizeContentSync.changeSourceNode(this.pages[this.pageIndex])
        }
    }).prototype, "panelSizeContentSync", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), c = a)) || c));
    i._RF.pop()
}