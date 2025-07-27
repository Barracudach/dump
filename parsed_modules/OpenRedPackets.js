import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as p from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as _ from "./cv.js";

function main() {
    var b, h, d, f, m, k, y, S, w, v, I, L, z, C, P, D, A, B, G;
    i._RF.push({}, "768ffPVaMJKn7kZHpRtXVIk", "OpenRedPackets", void 0);
    const {
        ccclass: R,
        property: H
    } = l;
    e("default", (b = H(r), h = H(a), d = H(r), f = H(r), m = H(a), k = H(a), y = H(r), S = H(r), R(((G = class e extends s {
        constructor(...e) {
            super(...e), n(this, "title", I, this), n(this, "number_panel", L, this), n(this, "number", z, this), n(this, "des", C, this), n(this, "tickets_panel", P, this), n(this, "tickets_img", D, this), n(this, "tickets_label", A, this), n(this, "btn_ok_label", B, this)
        }
        static getSinglePrefabInst(t, n) {
            let i = n;
            return i || (i = o.getScene().getComponentInChildren(u).node), e._g_prefabInst || (e._g_prefabInst = c(t)), i.getChildByUuid(e._g_prefabInst.uuid) || g(e._g_prefabInst, !0) || (e._g_prefabInst = c(t)), e._g_prefabInst
        }
        onLoad() {
            this._initLanguage(), _.MessageCenter.register(_.config.CHANGE_LANGUAGE, this._initLanguage.bind(this), this.node)
        }
        onDestroy() {
            _.MessageCenter.unregister(_.config.CHANGE_LANGUAGE, this.node)
        }
        _initLanguage() {
            this.title.string = _.config.getStringData("OpenRedPackets_title"), this.btn_ok_label.string = _.config.getStringData("HelpFriendView_btn_ok_label")
        }
        onBtnOK() {
            _.AudioMgr.playButtonSound("tab"), this.node.active = !1
        }
        show(e) {
            this.node.active = !0, this.number_panel.active = 0 == e.luck_warp_type, this.tickets_panel.active = 1 == e.luck_warp_type;
            let t = e.luck_warp_type;
            1 == e.red_type && (t = 2), this.des.string = _.config.getStringData("OpenRedPackets_des_" + t);
            let n = _.StringTools.serverGoldToShowString(e.amount);
            this.number.string = n, n.length < 4 ? this.number.node.setScale(new p(p.ONE)) : 4 == n.length ? this.number.node.setScale(new p(.75, .75, 1)) : this.number.node.setScale(new p(.7, .7, 1)), this.tickets_label.string = _.StringTools.getServerStrByLanguage(e.ticket_name) + "*" + e.ticket_count;
            let i = _.StringTools.getServerStrByLanguage(e.ticket_url);
            _.resMgr.downloadImg(_.dataHandler.getUserData().getImageUrlByPlat(i), this.tickets_img)
        }
    })._g_prefabInst = null, I = t((v = G).prototype, "title", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = t(v.prototype, "number_panel", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = t(v.prototype, "number", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = t(v.prototype, "des", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = t(v.prototype, "tickets_panel", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = t(v.prototype, "tickets_img", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = t(v.prototype, "tickets_label", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = t(v.prototype, "btn_ok_label", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = v)) || w));
    i._RF.pop()
}