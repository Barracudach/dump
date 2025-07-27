import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as _ from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as p from "./cv.js";
import * as h from "./ListView.js";
import * as g from "./BuyinListItem.js";

function main() {
    var m, d, b, y, f, x, T, w, v, C, L, S, z, E, B, D, I, N, P, F, A, G;
    n._RF.push({}, "93d43q6p05GrIOemMsHhyvC", "BuyinList", void 0);
    const {
        ccclass: M,
        property: R
    } = u;
    t("BuyinList", (m = R(o), d = R(r), b = R(r), y = R(a), f = R(r), x = R(r), T = R(r), w = R(l), v = R(o), C = R(r), M((z = e((S = class extends _ {
        constructor(...t) {
            super(...t), i(this, "_curentTime_panel", z, this), i(this, "_title_text", E, this), i(this, "_role_name_text", B, this), i(this, "_name_buyin_score_bg", D, this), i(this, "_lasttime_word_text", I, this), i(this, "_buyin_limit_text", N, this), i(this, "_buyin_text", P, this), i(this, "data_scrollview", F, this), i(this, "_data_panel", A, this), i(this, "_handcount_text", G, this)
        }
        onLoad() {
            if (this._curentTime_panel = s("curentTime_panel", this.node), this._data_panel = s("data_panel", this.node), this._handcount_text = s("curentTime_panel/handcount_text", this.node).getComponent(r), this._title_text = s("curentTime_panel/title_text", this.node).getComponent(r), this._role_name_text = s("curentTime_panel/roleName_txt", this.node).getComponent(r), this._name_buyin_score_bg = s("curentTime_panel/name_buyin_score_bg", this.node).getComponent(a), this._buyin_limit_text = s("curentTime_panel/buyinLimit_txt", this.node).getComponent(r), this._buyin_text = s("curentTime_panel/buyin_txt", this.node).getComponent(r), p.config.getCurrentLanguage() != p.Enum.LANGUAGE_TYPE.zh_CN && p.config.getCurrentLanguage() != p.Enum.LANGUAGE_TYPE.zh_TW && this._buyin_limit_text.node.setPosition(this._buyin_limit_text.node.getPosition().x + 40, this._buyin_limit_text.node.getPosition().y), this._role_name_text.string = p.config.getStringData("curentTime_curentTime_panel_roleName_txt"), this._title_text.string = p.config.getStringData("BuyinTitle"), this._buyin_limit_text.string = p.config.getStringData("BuyinLimitTitle"), this._buyin_text.string = p.config.getStringData("BuyinTotalTitle"), this._handcount_text.string = p.config.getStringData("curentTime_curentTime_panel_shouNum_text"), this.addEvent(), p.native.isFullScreen()) {
                var t;
                let e = null == (t = this._curentTime_panel) ? void 0 : t.getComponent(c);
                e && (e.top = p.config.FULLSCREEN_OFFSETY)
            }
            p.resMgr.adaptWidget(this.node, !0)
        }
        outRegion() {
            this.node.active = !1, p.StatusView.showSystemTime(!0)
        }
        adaptiveExpand() {
            p.viewAdaptive.adaptiveIPhoneX(this._curentTime_panel, !0)
        }
        addEvent() {
            p.MessageCenter.register("update_buyinInfo", this.updateBuyinInfo.bind(this), this.node)
        }
        updateBuyinInfo(t) {
            let e = [];
            for (let i = 0; i < t.length; i++) e.push({
                type: 0,
                data: t[i]
            });
            this.data_scrollview.getComponent(h).init(this.bindcallfunc.bind(this), this.getItemType.bind(this)), this.data_scrollview.getComponent(h).notifyDataSetChanged(e)
        }
        bindcallfunc(t, e, i) {
            if (console.log(e), console.log(i), 0 == e.type) {
                t.getComponent(g);
                t.getComponent(g).setdata(e.data, this._buyin_limit_text.node.position.x, this._handcount_text.node.position.x)
            }
        }
        getItemType(t, e) {
            return t.type
        }
        onDestroy() {
            p.MessageCenter.unregister("update_buyinInfo", this.node)
        }
    }).prototype, "_curentTime_panel", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = e(S.prototype, "_title_text", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = e(S.prototype, "_role_name_text", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = e(S.prototype, "_name_buyin_score_bg", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = e(S.prototype, "_lasttime_word_text", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(S.prototype, "_buyin_limit_text", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = e(S.prototype, "_buyin_text", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = e(S.prototype, "data_scrollview", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = e(S.prototype, "_data_panel", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = e(S.prototype, "_handcount_text", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = S)) || L));
    n._RF.pop()
}