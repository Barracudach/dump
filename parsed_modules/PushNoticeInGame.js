import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as a from "./PushNotice.js";

function main() {
    var u, h, _, p, b, d, N, f;
    n._RF.push({}, "3d22fmWrmpP0JIvZ1gXNAIR", "PushNoticeInGame", void 0);
    const {
        ccclass: g,
        property: m
    } = c;
    e("default", (u = m(o), h = m(s), _ = m(s), g((d = t((b = class extends a {
        constructor(...e) {
            super(...e), i(this, "pushNotice_panelNode", d, this), i(this, "notice_text_label", N, this), i(this, "notice_text_label_1", f, this)
        }
        onLoad() {
            this._bPuchNoticeIsShowIng = !1, this._pushNotice_panel = this.pushNotice_panelNode, this._notice_text = this.notice_text_label, this._notice_text_1 = this.notice_text_label_1, this._pushNotice_panel.active = !1, this.msgNode = this.node, this.schedule(this.Update.bind(this), 1), l.on(r.EVENT_HIDE, this.OnAppEnterBackground, this)
        }
    }).prototype, "pushNotice_panelNode", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = t(b.prototype, "notice_text_label", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = t(b.prototype, "notice_text_label_1", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = b)) || p));
    n._RF.pop()
}