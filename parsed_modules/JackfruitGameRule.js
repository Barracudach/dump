import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as o from "./cv.js";

function main() {
    var l, s, c, r, a, d;
    n._RF.push({}, "49f34R3UylA2osAKCUmxEli", "JackfruitGameRule", void 0);
    const {
        ccclass: h,
        property: g
    } = cc._decorator;
    e("JackfruitGameRule", (l = g(cc.Node), s = g(cc.ScrollView), h((r = class extends cc.Component {
        constructor(...e) {
            super(...e), t(this, "title_text", a, this), t(this, "scrollview", d, this), this._node_list = [], this.isinit = !1
        }
        onLoad() {
            if (o.config.IS_IPHONEX_SCREEN) {
                var e, t;
                let i = null == (e = cc.find("view_panel", this.node)) ? void 0 : e.getComponent(cc.Widget);
                i && (i.top = o.config.FULLSCREEN_OFFSETY);
                let n = null == (t = cc.find("title_panel", this.node)) ? void 0 : t.getComponent(cc.Widget);
                n && (n.top = o.config.FULLSCREEN_OFFSETY)
            }
            o.resMgr.setSpriteFrame(this.title_text, o.config.getLanguagePath("game/jackfruit/gamerule/game_rule_title"));
            for (let e = 0; e < 5; e++) {
                let t = this.getNewLable();
                t.string = e + 1 + ".";
                let i = this.getNewLable();
                if (i.string = o.config.getStringData("jackfruit_rule_label_" + e), this.scrollview.content.addChild(t.node), this.scrollview.content.addChild(i.node), this._node_list.push(t.node), this._node_list.push(i.node), e < 4) {
                    let t = new cc.Node;
                    t.addComponent(cc.Sprite), o.resMgr.setSpriteFrame(t, o.config.getLanguagePath("game/jackfruit/gamerule/game_rule_" + e)), this.scrollview.content.addChild(t), this._node_list.push(t)
                }
                if (2 == e) {
                    let t = this.getNewChildLable();
                    t.string = o.config.getStringData("jackfruit_rule_label_" + e + "_Child_0");
                    let i = this.getNewChildLable();
                    i.string = o.config.getStringData("jackfruit_rule_label_" + e + "_Child_1"), this.scrollview.content.addChild(t.node), this.scrollview.content.addChild(i.node), this._node_list.push(t.node), this._node_list.push(i.node)
                } else if (3 == e) {
                    let t = this.getNewChildLable();
                    t.string = o.config.getStringData("jackfruit_rule_label_" + e + "_Child"), this.scrollview.content.addChild(t.node), this._node_list.push(t.node)
                }
            }
        }
        onDestroy() {
            this.isinit = !1
        }
        getNewLable() {
            let e = (new cc.Node).addComponent(cc.Label);
            return e.node.opacity = 127, e.getComponent(cc.Label).fontSize = 42, e.getComponent(cc.Label).lineHeight = 60, e.node.setAnchorPoint(0, 1), e
        }
        getNewChildLable() {
            let e = (new cc.Node).addComponent(cc.Label);
            return e.node.opacity = 230, e.fontSize = 42, e.node.setAnchorPoint(0, 1), e
        }
        onBtnClose(e, t) {
            "btn" == t && o.AudioMgr.playButtonSound("close.mp3"), this.node.active = !1, this.node.active = !1
        }
        updateView() {
            if (this.isinit) return;
            this.isinit = !0;
            let e = 0,
                t = 0;
            for (let i = 0; i < 5; i++) e += 60, this._node_list[t++].setPosition(cc.v2(-430, -e)), this._node_list[t].setPosition(cc.v2(-370, -e)), e += o.resMgr.getLabelStringSize(this._node_list[t++].getComponent(cc.Label)).height + 10, i < 4 && (this._node_list[t].setPosition(cc.v2(-40, -e - this._node_list[t].getContentSize().height / 2)), e += this._node_list[t++].getContentSize().height), 2 == i ? (this._node_list[t].setPosition(cc.v2(-370, -e)), e += o.resMgr.getLabelStringSize(this._node_list[t++].getComponent(cc.Label)).height + 10, this._node_list[t].setPosition(cc.v2(-370, -e)), e += o.resMgr.getLabelStringSize(this._node_list[t++].getComponent(cc.Label)).height + 10) : 3 == i && (this._node_list[t].setPosition(cc.v2(-370, -e)), e += o.resMgr.getLabelStringSize(this._node_list[t++].getComponent(cc.Label)).height + 10);
            this.scrollview.content.setContentSize(cc.size(this.scrollview.content.getContentSize().width, e + 50))
        }
        show() {
            this.node.active = !0, this.updateView(), this.scrollview.content.setPosition(cc.v2(0, 0))
        }
    }, a = i(r.prototype, "title_text", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = i(r.prototype, "scrollview", [s], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), c = r)) || c));
    n._RF.pop()
}