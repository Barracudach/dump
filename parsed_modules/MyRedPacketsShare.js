import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as _ from "./cv.js";
import * as d from "./CircleSprite.js";
import * as p from "./CommonTools.js";

function main() {
    var b, f, S, y, m, v, T, w, M, D, I, C, k, z, P, L, R, A, N, U, E, B, G;
    a._RF.push({}, "e2e3fTiS/tKwYUu3NV+eOii", "MyRedPacketsShare", void 0);
    const {
        ccclass: H,
        property: O
    } = s;
    e("default", (b = O(n), f = O(r), S = O(r), y = O(r), m = O(r), v = O(r), T = O(r), w = O(n), M = O(r), D = O(n), H(((G = class e extends l {
        constructor(...e) {
            super(...e), i(this, "share_bg", k, this), i(this, "title", z, this), i(this, "name_label", P, this), i(this, "des_0", L, this), i(this, "title_code", R, this), i(this, "code", A, this), i(this, "des_1", N, this), i(this, "share_avtar", U, this), i(this, "btn_share_label", E, this), i(this, "cash_panel", B, this), this._data = null
        }
        static getSinglePrefabInst(t, i) {
            let a = i;
            return a || (a = o.getScene().children[0]), e._g_prefabInst || (e._g_prefabInst = c(t)), a.getChildByUuid(e._g_prefabInst.uuid) || g(e._g_prefabInst, !0) || (e._g_prefabInst = c(t)), e._g_prefabInst
        }
        onLoad() {
            this._initLanguage(), _.MessageCenter.register(_.config.CHANGE_LANGUAGE, this._initLanguage.bind(this), this.node)
        }
        onDestroy() {
            _.MessageCenter.unregister(_.config.CHANGE_LANGUAGE, this.node)
        }
        close() {
            this.node.active = !1
        }
        _initLanguage() {
            this.title.string = _.config.getStringData("MyRedPacketsShare_title"), this.des_0.string = _.config.getStringData("MyRedPacketsShare_des_0"), this.title_code.string = _.config.getStringData("MyRedPacketsShare_title_code"), this.des_1.string = _.config.getStringData("MyRedPacketsShare_des_1"), this.btn_share_label.string = _.config.getStringData("MyRedPacketsShare_btn_share_label")
        }
        onBtnShare() {
            let e = this.share_bg.getContentSize(),
                t = {
                    x: 0,
                    y: 0,
                    w: e.width,
                    h: e.height,
                    rt: !0
                };
            p.takescreenshot(t, (e => {
                if (0 != e.length) {
                    let t = !0;
                    if (h.os == h.OS.IOS) {
                        "false" == _.native.invokeSyncFunc(_.nativeCMD.KEY_SAVE_TO_ABLM, {
                            path: e
                        }) && (t = !1)
                    } else h.os == h.OS.ANDROID && (t = u.reflection.callStaticMethod("com/cocos/game/ImagePicker", "saveTophoto", "(Ljava/lang/String;)Z", e));
                    t ? _.TT.showMsg(_.config.getStringData("ClubSpreadTips0"), _.Enum.ToastType.ToastTypeInfo) : _.TT.showMsg(_.config.getStringData("ClubSpreadTips1"), _.Enum.ToastType.ToastTypeInfo)
                }
                this.close()
            }))
        }
        show(e) {
            let t = _.dataHandler.getUserData();
            this.name_label.string = t.nick_name, this._data = e, this.code.string = e.captcha_data.code.toString(), d.cleanHeadNode(this.share_avtar), d.setCircleSprite(this.share_avtar, t.headUrl, 0, !1);
            let i = e.captcha_data.share_image_url;
            "string" == typeof i && i.length > 0 ? (i = _.dataHandler.getUserData().getImageUrlByPlat(_.StringTools.getServerStrByLanguage(i)), _.resMgr.downloadImg(i, this.share_bg, (() => {
                this.cash_panel.active = !1
            }))) : (_.resMgr.setSpriteFrame(this.share_bg, "zh_CN/hall/MyRedPackets/share"), this.cash_panel.active = !0), this.node.active = !0
        }
        filpYImage(e, t, i) {
            let a = new Uint8Array(t * i * 4),
                n = 4 * t;
            for (let r = 0; r < i; r++) {
                let s = (i - 1 - r) * t * 4,
                    l = r * t * 4;
                for (let t = 0; t < n; t++) a[l + t] = e[s + t]
            }
            return a
        }
    })._g_prefabInst = null, k = t((C = G).prototype, "share_bg", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = t(C.prototype, "title", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = t(C.prototype, "name_label", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = t(C.prototype, "des_0", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = t(C.prototype, "title_code", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = t(C.prototype, "code", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = t(C.prototype, "des_1", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = t(C.prototype, "share_avtar", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = t(C.prototype, "btn_share_label", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = t(C.prototype, "cash_panel", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = C)) || I));
    a._RF.pop()
}