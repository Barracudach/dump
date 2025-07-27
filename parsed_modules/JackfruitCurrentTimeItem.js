import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as i from "./cv.js";
import * as n from "./GameSceneInstance.js";

function main() {
    var c, l, s, a, u, d, h, p, y, g, m, b;
    r._RF.push({}, "ceea4K28wNOD7+od/Rc0nVL", "JackfruitCurrentTimeItem", void 0);
    const {
        ccclass: f,
        property: C
    } = cc._decorator;
    o("JackfruitCurrentTimeItem", (c = C({
        type: cc.Label,
        tooltip: "name"
    }), l = C({
        type: cc.Label,
        tooltip: "buy-in"
    }), s = C({
        type: cc.Label,
        tooltip: "points"
    }), a = C({
        type: cc.Layout,
        tooltip: "background"
    }), u = C({
        type: cc.Sprite,
        tooltip: "color"
    }), f((h = class extends cc.Component {
        constructor(...o) {
            super(...o), t(this, "yourname", p, this), t(this, "dairu", y, this), t(this, "score", g, this), t(this, "layout", m, this), t(this, "sprite_color", b, this)
        }
        setControlPos(o) {
            i.roomManager.checkGameIsZoom(n.getInstanceGameId(null == this ? void 0 : this.node)) && this.dairu.node.setPosition(o, this.dairu.node.getPosition().y)
        }
        showLight() {
            this.yourname.node.setContentSize(cc.size(164, 45)), this.yourname.node.color = cc.Color.WHITE, this.dairu.node.color = cc.Color.WHITE, this.score.node.color = cc.Color.WHITE, this.sprite_color.node.active = !0
        }
        hideLight() {
            this.layout.getComponent(cc.Layout).node.color = cc.Color.BLUE, this.sprite_color.node.active = !1
        }
        setdata(o, t) {
            let e = o.playerName,
                r = i.StringTools.toFixed(i.StringTools.serverGoldToShowNumber(o.totalBuyInScore), 1),
                n = i.StringTools.toFixed(i.StringTools.serverGoldToShowNumber(o.currRecordScore), 1);
            this.dairu.string = r.toString(), this.dairu.node.setPosition(t, this.dairu.node.getPosition().y), i.StringTools.setShrinkString(this.yourname.node, e), o.currRecord > 0 ? this.score.string = "+" + n.toString() : this.score.string = n.toString(), null == i.JackfruitManager.tRoomData.GetTablePlayer(o.playerId) ? (this.yourname.node.color = new cc.Color(110, 110, 110), this.dairu.node.color = new cc.Color(110, 110, 110), this.score.node.color = new cc.Color(110, 110, 110)) : (this.yourname.node.color = cc.Color.WHITE, this.dairu.node.color = cc.Color.WHITE, this.score.node.color = cc.Color.WHITE), o.playerId == i.dataHandler.getUserData().u32Uid ? this.showLight() : this.hideLight(), this.setControlPos(t)
        }
    }, p = e(h.prototype, "yourname", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = e(h.prototype, "dairu", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = e(h.prototype, "score", [s], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = e(h.prototype, "layout", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = e(h.prototype, "sprite_color", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = h)) || d));
    r._RF.pop()
}