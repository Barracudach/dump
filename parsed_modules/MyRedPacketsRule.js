import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as _ from "./cv.js";

function main() {
    var f, p, b, h, y, A, M, R, I, D, L, C, S;
    n._RF.push({}, "a4e4bgchw1Gs4o6I2adbIh/", "MyRedPacketsRule", void 0);
    const {
        ccclass: k,
        property: m
    } = s;
    t("default", (f = m(a), p = m(a), b = m(a), h = m(r), y = m(o), k(((S = class t extends l {
        constructor(...t) {
            super(...t), i(this, "txt_title", R, this), i(this, "title", I, this), i(this, "des", D, this), i(this, "layout", L, this), i(this, "safearea", C, this)
        }
        static getSinglePrefabInst(e, i) {
            let n = i;
            return n || (n = u.getScene().getComponentInChildren(c).node), t._g_prefabInst || (t._g_prefabInst = g(e)), n.getChildByUuid(t._g_prefabInst.uuid) || d(t._g_prefabInst, !0) || (t._g_prefabInst = g(e)), t._g_prefabInst
        }
        onLoad() {
            this._initLanguage(), _.MessageCenter.register(_.config.CHANGE_LANGUAGE, this._initLanguage.bind(this), this.node), _.resMgr.adaptWidget(this.node), this.setSafeArea()
        }
        onDestroy() {
            _.MessageCenter.unregister(_.config.CHANGE_LANGUAGE, this.node)
        }
        _initLanguage() {
            this.txt_title.string = _.config.getStringData("MyRedPacketsRule_txt_title"), this.title.string = _.config.getStringData("MyRedPacketsRule_title"), this.des.string = _.config.getStringData("MyRedPacketsRule_des")
        }
        onBtnBack() {
            _.AudioMgr.playButtonSound("back_button"), _.action.showAction(this.node, _.action.eMoveActionDir.EMAD_TO_RIGHT, _.action.eMoveActionType.EMAT_FADE_OUT, _.action.delay_type.NORMAL)
        }
        setSafeArea() {}
    })._g_prefabInst = null, R = e((M = S).prototype, "txt_title", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = e(M.prototype, "title", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = e(M.prototype, "des", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = e(M.prototype, "layout", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = e(M.prototype, "safearea", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = M)) || A));
    n._RF.pop()
}