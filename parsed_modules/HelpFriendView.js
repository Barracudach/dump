import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as _ from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as g from "./cv.js";
import * as d from "./CircleSprite.js";

function main() {
    var p, b, f, h, m, y, v, C, w, H, k, S, D;
    n._RF.push({}, "72878621URHJrcGY++RfL9y", "HelpFriendView", void 0);
    const {
        ccclass: I,
        property: L
    } = s;
    e("default", (p = L(a), b = L(r), f = L(a), h = L(a), m = L(a), I(((D = class e extends l {
        constructor(...e) {
            super(...e), i(this, "title", C, this), i(this, "avatar", w, this), i(this, "name_label", H, this), i(this, "des_0", k, this), i(this, "btn_ok_label", S, this), this._data = null
        }
        static getSinglePrefabInst(t, i) {
            let n = i;
            return n || (n = o.getScene().getComponentInChildren(u).node), e._g_prefabInst || (e._g_prefabInst = c(t)), n.getChildByUuid(e._g_prefabInst.uuid) || _(e._g_prefabInst, !0) || (e._g_prefabInst = c(t)), e._g_prefabInst
        }
        onLoad() {
            this._initLanguage(), g.MessageCenter.register(g.config.CHANGE_LANGUAGE, this._initLanguage.bind(this), this.node)
        }
        onDestroy() {
            g.MessageCenter.unregister(g.config.CHANGE_LANGUAGE, this.node)
        }
        _close() {
            this.node.active = !1
        }
        _initLanguage() {
            this.title.string = g.config.getStringData("HelpFriendView_title"), this.des_0.string = g.config.getStringData("HelpFriendView_des_0"), this.btn_ok_label.string = g.config.getStringData("HelpFriendView_btn_ok_label")
        }
        onBtnOK() {
            g.AudioMgr.playButtonSound("tab"), this._close(), g.MessageCenter.send("showOpenRedPackets", this._data.user_prizes_data)
        }
        show(e) {
            this.node.active = !0, this._data = e;
            let t = g.dataHandler.getUserData().getRemarkData(e.user_id),
                i = "" == t.sRemark ? e.nick_name : t.sRemark;
            i = i.slice(0, 2) + "***", this.name_label.string = i, d.cleanHeadNode(this.avatar), d.setCircleSprite(this.avatar, e.avatar, 0, !1)
        }
    })._g_prefabInst = null, C = t((v = D).prototype, "title", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = t(v.prototype, "avatar", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = t(v.prototype, "name_label", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = t(v.prototype, "des_0", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = t(v.prototype, "btn_ok_label", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = v)) || y));
    n._RF.pop()
}