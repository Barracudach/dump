import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as a from "./cv.js";
import * as r from "./JackfruitData.js";
import * as o from "./ListView.js";
import * as s from "./JackfruitCurrentTimeItem.js";
import * as l from "./JackfruitObItem.js";
import * as u from "./JackfruitObMan.js";

function main() {
    var c, _, h, p, m, g, d, f, b, k, y, S, x, T, L, v, C, w, I, O, z, B;
    n._RF.push({}, "6e1c6ltTJdAzZH73g65ilfg", "JackfruitCurrentTime", void 0);
    const {
        ccclass: D,
        property: J
    } = cc._decorator;
    t("CurrentTime", (c = J(cc.Node), _ = J(cc.Label), h = J(cc.Label), p = J(cc.Label), m = J(cc.Label), g = J(cc.ScrollView), d = J(cc.Sprite), f = J(cc.Sprite), b = J(cc.Button), k = J(cc.Boolean), D((S = class extends cc.Component {
        constructor(...t) {
            super(...t), e(this, "_curentTime_panel", x, this), e(this, "_title_text", T, this), e(this, "_roleName_txt", L, this), e(this, "_buyinLimit_txt", v, this), e(this, "_buyin_txt", C, this), e(this, "_data_scrollview", w, this), e(this, "_shakeOn_img", I, this), e(this, "_shakeOff_img", O, this), e(this, "_shake_button", z, this), e(this, "_shakeStatus", B, this), this.pkStituation = null
        }
        onLoad() {
            if (a.resMgr.adaptWidget(this.node, !0), this._curentTime_panel = cc.find("curentTime_panel", this.node), this._title_text = cc.find("curentTime_panel/title_text", this.node).getComponent(cc.Label), this._roleName_txt = cc.find("curentTime_panel/roleName_txt", this.node).getComponent(cc.Label), this._buyinLimit_txt = cc.find("curentTime_panel/buyinLimit_txt", this.node).getComponent(cc.Label), this._buyin_txt = cc.find("curentTime_panel/buyin_txt", this.node).getComponent(cc.Label), this._data_scrollview = cc.find("curentTime_panel/data_ScrollView", this.node).getComponent(cc.ScrollView), this._shake_button = cc.find("set_panel/shake_button", this.node).getComponent(cc.Button), this._shakeOn_img = cc.find("set_panel/shake_img/shakeOn_img", this.node).getComponent(cc.Sprite), this._shakeOff_img = cc.find("set_panel/shake_img/shakeOff_img", this.node).getComponent(cc.Sprite), this._shakeStatus = !0, this.addEvent(), this.setButtonStatus(), this.initLanguage(), a.native.isFullScreen()) {
                var t;
                let e = null == (t = this._curentTime_panel) ? void 0 : t.getComponent(cc.Widget);
                e && (e.top = a.config.FULLSCREEN_OFFSETY)
            }
            a.resMgr.adaptWidget(this.node, !0), a.MessageCenter.register("on_jackfruit_situation", this.onRoomSituation.bind(this), this.node)
        }
        onDestroy() {
            a.MessageCenter.unregister("on_jackfruit_situation", this.node)
        }
        initLanguage() {
            this._title_text.string = a.config.getStringData("curentTime_curentTime_panel_title_text"), this._roleName_txt.string = a.config.getStringData("curentTime_curentTime_panel_roleName_txt"), this._buyinLimit_txt.string = a.config.getStringData("curentTime_curentTime_panel_buyinLimit_txt"), this._buyin_txt.string = a.config.getStringData("curentTime_curentTime_panel_buyin_txt"), a.StringTools.setLabelString(this.node, "set_panel/shake_img/shake_txt", "curentTime_curentTime_panel_shake_txt")
        }
        outRegion() {
            this.node.active = !1
        }
        onRoomSituation(t) {
            this.pkStituation = t;
            var e = [];
            for (let i = 0; i < t.playerBuyInInfo.length; ++i) {
                let n = t.playerBuyInInfo[i];
                e.push(n)
            }
            let i = 0;
            var n = [];
            for (let e = 0; e < t.observerList.length; ++e) {
                let a = t.observerList[e],
                    o = new r;
                o.name = a.name, o.playerid = a.playerId, o.marks = a.marks, o.isInroom = a.is_online, o.isInroom && i++, o.data = a, o.headPath = a.headUrl, o.plat = a.plat, n.push(o)
            }
            let a = [];
            e.sort(this.compareRecords);
            for (let t = 0; t < e.length; t++) a.push({
                type: 0,
                data: e[t]
            });
            a.push({
                type: 1,
                data: {
                    onlineNum: i,
                    totalNum: t.observerList.length
                }
            });
            let s = 0;
            for (let t = 0; t < n.length;) {
                let e = [];
                for (let i = 0; i < 4; i++) {
                    let a = i + 4 * s;
                    if (!(a < n.length)) break;
                    e.push(n[a]), t++
                }
                a.push({
                    type: 2,
                    data: e
                }), s++
            }
            this._data_scrollview.getComponent(o).init(this.bindcallfunc.bind(this), this.getItemType.bind(this)), this._data_scrollview.getComponent(o).notifyDataSetChanged(a)
        }
        bindcallfunc(t, e, i) {
            console.log(e), console.log(i), 0 == e.type ? t.getComponent(s).setdata(e.data, this._buyinLimit_txt.node.x) : 1 == e.type ? t.getComponent(u).setdata(e.data) : t.getComponent(l).setdata(e.data)
        }
        getItemType(t, e) {
            return t.type
        }
        compareRecords(t, e) {
            return e.curr_record - t.curr_record
        }
        addEvent() {
            this._shake_button.node.on("click", (function() {
                a.AudioMgr.playButtonSound("button_click.mp3"), this._shakeStatus = !this._shakeStatus, this.setButtonStatus()
            }), this)
        }
        isInroom(t) {
            let e = !1;
            for (let i = 0; i < this.pkStituation.byStanderList.length; ++i) t.playerId == this.pkStituation.byStanderList[i] && (e = !0);
            return e
        }
        setButtonStatus() {
            this._shakeStatus, this._shakeOn_img.node.active = this._shakeStatus, this._shakeOff_img.node.active = !this._shakeStatus
        }
        adaptiveExpand() {
            a.viewAdaptive.adaptiveIPhoneX(this._curentTime_panel, !0)
        }
    }, x = i(S.prototype, "_curentTime_panel", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = i(S.prototype, "_title_text", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = i(S.prototype, "_roleName_txt", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = i(S.prototype, "_buyinLimit_txt", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = i(S.prototype, "_buyin_txt", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = i(S.prototype, "_data_scrollview", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = i(S.prototype, "_shakeOn_img", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = i(S.prototype, "_shakeOff_img", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = i(S.prototype, "_shake_button", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = i(S.prototype, "_shakeStatus", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), y = S)) || y));
    n._RF.pop()
}