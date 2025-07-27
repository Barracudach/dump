import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as f from "./gs_protocol.mjs_cjs=&original=.js";
import * as _ from "./cv.js";
import * as d from "./GiftData.js";
import * as g from "./GiftPanelDetail.js";
import * as w from "./GiftSmallBoxItem.js";
import * as b from "./GiftSmallBoxItem.js";
import * as m from "./TableView.js";
import * as y from "./GameSceneInstance.js";

function main() {
    var v, T, G, S, E, D, I, N, C, x;
    n._RF.push({}, "3ba8aFUeOtORJ6Qe2I92SaV", "GiftSmallBox", void 0);
    const {
        ccclass: O,
        property: V
    } = s;
    e("GiftSmallBox", (v = V(o), T = V(l), G = V(b), S = V(a), O((I = t((D = class extends r {
        constructor(...e) {
            super(...e), i(this, "prefab_detail", I, this), i(this, "icon", N, this), i(this, "view", C, this), i(this, "shield", x, this), this._panel_detail = null
        }
        onLoad() {
            this.node.on("click", this._onClick, this), this.shield.on(a.EventType.TOUCH_END, this._onClick, this)
        }
        start() {
            this._updateView()
        }
        onEnable() {
            this._registerEvent()
        }
        onDisable() {
            this._unregisterEvent()
        }
        _registerEvent() {
            f.MessageCenter.register(_.GIFT_MSG_NOTICE_NEWS, this._onMsgGiftNews.bind(this), this.node)
        }
        _unregisterEvent() {
            f.MessageCenter.unregister(_.GIFT_MSG_NOTICE_NEWS, this.node)
        }
        _updateView() {
            let e = m.getInstanceGameData(null == this ? void 0 : this.node).tGiftData.getGiftNewsInfoByNewsType(y.protocol.NewsType.NewsType_Tip);
            if (this.icon.node.active = e.length <= 0, this.view.node.active = e.length > 0, this.view.node.active) {
                let t = {
                    prefab_type: 0,
                    prefab_component: g,
                    prefab_datas: e
                };
                this.view.bindData(t), this.view.reloadView(), this.view.scrollToDir(w.BOTTOM)
            }
        }
        _onMsgGiftNews(e) {
            e.gift && e.gift.newsType === y.protocol.NewsType.NewsType_Tip && this._updateView()
        }
        _createInst(e, t, i, n) {
            if (!f.tools.isValidNode(e)) return null;
            let l = new c(c.ZERO),
                a = new c(c.ZERO),
                s = i.getComponent(u);
            l.x = s.width, l.y = s.height, a.x = i.scale.x, a.y = i.scale.y, t = t || 0;
            let r = null;
            return r = e instanceof o ? p(e) : e, n = n || r.getComponent(u).anchorPoint.subtract(s.anchorPoint).multiply(l).multiply(a), r.setPosition(h(n.x, n.y, 0)), i.addChild(r), r.setSiblingIndex(t), r
        }
        _onClick() {
            if (f.AudioMgr.playButtonSound("button_click"), !this._panel_detail) {
                let e = this._createInst(this.prefab_detail, f.Enum.ZORDER_TYPE.ZORDER_4, m.getInstance(this.node).room.gameScene);
                this._panel_detail = e.getComponent(d), this._panel_detail.node.active = !0
            }
            this._panel_detail.autoShow()
        }
    }).prototype, "prefab_detail", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = t(D.prototype, "icon", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = t(D.prototype, "view", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = t(D.prototype, "shield", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = D)) || E));
    n._RF.pop()
}