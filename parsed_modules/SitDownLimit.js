import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as s from "./cv.js";
import * as c from "./GameSceneInstance.js";

function main() {
    var _, r, u, g, d, m;
    i._RF.push({}, "ff9c4czWzhFM6f+JwiTGTh8", "SitDownLimit", void 0);
    const {
        ccclass: p,
        property: h
    } = a;
    t("default", (_ = h(o), r = h(o), p((d = e((g = class extends l {
        constructor(...t) {
            super(...t), n(this, "cancel_button_label", d, this), n(this, "sure_button_label", m, this), this._des_list = []
        }
        onLoad() {
            this.cancel_button_label.string = s.config.getStringData("GameScene_sitDownLimit_panel_view_panel_cancel_button"), this.sure_button_label.string = s.config.getStringData("GameScene_sitDownLimit_panel_view_panel_sure_button");
            let t = this.node.getChildByName("Image_bg");
            for (let e = 0; e < 4; e++) this._des_list[e] = t.getChildByName(s.StringTools.formatC("des_%d", e)).getComponent(o);
            this._des_list[0].string = s.config.getStringData("GameScene_sitDownLimit_panel_view_panel_des_1"), this._des_list[2].string = s.config.getStringData("GameScene_sitDownLimit_panel_view_panel_des_3"), this.cancel_button_label.fontSize = s.config.getCurrentLanguage() == s.Enum.LANGUAGE_TYPE.zh_CN || s.config.getCurrentLanguage() == s.Enum.LANGUAGE_TYPE.zh_TW ? 44 : 38
        }
        onSitDownLimitSure() {
            s.AudioMgr.playButtonSound("button_click.mp3"), this.node.active = !1, s.gameNet.RequestGetRoomLimitID(c.getInstanceRoomId(null == this ? void 0 : this.node))
        }
        onSitDownLimitCancel() {
            s.AudioMgr.playButtonSound("button_click.mp3"), this.node.active = !1
        }
        onShow(t, e) {
            this.node.active = !0;
            for (let t = 0; t < 4; t++) this._des_list[t].node.active = t < 3 ? !e : e;
            this._des_list[e ? 3 : 1].string = t
        }
    }).prototype, "cancel_button_label", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = e(g.prototype, "sure_button_label", [r], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), u = g)) || u));
    i._RF.pop()
}