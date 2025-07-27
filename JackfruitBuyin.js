import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./cc.js";
import * as n from "./cv.js";
import * as r from "./JackfruitBuyinExchange.js";

function main() {
    var a, l, s, c, u, g, h, b, _, d, S, f, T, p, m, y, x, C, k, B, D, w;
    o._RF.push({}, "669b8tA0stCA6MVtvWLN0Ai", "JackfruitBuyin", void 0);
    const {
        ccclass: N,
        property: v
    } = cc._decorator;
    t("default", (a = v(cc.Node), l = v(cc.Node), s = v(cc.Label), c = v(cc.Label), u = v(cc.RichText), g = v(cc.RichText), h = v(cc.RichText), b = v(cc.Node), _ = v(cc.Node), d = v(cc.Label), N((f = class extends cc.Component {
        constructor(...t) {
            super(...t), e(this, "tabButton", T, this), e(this, "tabNode", p, this), this.select_index = -1, this.color_lab_select = cc.color(229, 209, 146), this.color_lab_noSelect = cc.color(153, 153, 153), e(this, "gold_label", m, this), e(this, "score_label", y, this), e(this, "des_rich_text", x, this), e(this, "text_0", C, this), e(this, "text_1", k, this), e(this, "ok_button", B, this), e(this, "mode_panel", D, this), e(this, "ratio_label", w, this)
        }
        onLoad() {
            n.StringTools.setLabelString(this.ok_button, "label", "jackfruit_buyin_ok_button_label"), this.mode_panel.on(cc.Node.EventType.TOUCH_END, this.onClose.bind(this)), this.initTabLanguage(), n.MessageCenter.register("update_info", this.updateCoinAndUSDT.bind(this), this.node), n.MessageCenter.register("update_gold", this.updateCoinAndUSDT.bind(this), this.node)
        }
        onDestroy() {
            n.MessageCenter.unregister("update_info", this.node), n.MessageCenter.unregister("update_gold", this.node)
        }
        updateCoinAndUSDT() {
            let t = n.StringTools.numToFloatString(n.dataHandler.getUserData().u32Chips),
                e = n.StringTools.formatC(n.config.getStringData("jackfruit_buyin_des_rich_text"), t);
            n.StringTools.setRichTextString(this.des_rich_text.node, e)
        }
        show(t) {
            this.node.active = !0;
            let e = n.StringTools.numToFloatString(n.dataHandler.getUserData().u32Chips),
                i = n.StringTools.formatC(n.config.getStringData("jackfruit_buyin_des_rich_text"), e);
            if (n.StringTools.setRichTextString(this.des_rich_text.node, i), t.score > 0) i = n.StringTools.formatC(n.config.getStringData("jackfruit_buyin_des_rich_node_text_0"), n.StringTools.numToFloatString(t.score)), n.StringTools.setRichTextString(this.text_0.node, i), i = n.StringTools.formatC(n.config.getStringData("jackfruit_buyin_des_rich_node_text_1"), n.StringTools.numToFloatString(t.needScore)), n.StringTools.setRichTextString(this.text_1.node, i);
            else {
                let t = n.JackfruitManager.tRoomData.param.ruleCheckScore,
                    e = n.JackfruitManager.tRoomData.param.ruleAddToScore;
                i = n.StringTools.formatC(n.config.getStringData("jackfruit_buyin_des_rich_node_text_2"), n.StringTools.numToFloatString(t)), n.StringTools.setRichTextString(this.text_0.node, i), i = n.StringTools.formatC(n.config.getStringData("jackfruit_buyin_des_rich_node_text_3"), n.StringTools.numToFloatString(e)), n.StringTools.setRichTextString(this.text_1.node, i)
            }
            this.score_label.string = n.StringTools.numToFloatString(t.needScore), this.gold_label.string = n.StringTools.numToFloatString(t.needAmount);
            let o = n.JackfruitManager.tRoomData.param,
                r = n.StringTools.serverGoldToShowNumber(o.ante);
            this.ratio_label.string = "=" + r.toString(), this.switchTab(0)
        }
        onBtnOK() {
            n.AudioMgr.playButtonSound("button_click"), this.node.active = !1, n.jackfruitNet.requestBuyIn(n.StringTools.showStringToNumber(this.gold_label.string))
        }
        onClose(t) {
            this.node.active = !1
        }
        initTabLanguage() {
            this.tabButton[0].getChildByName("Label").getComponent(cc.Label).string = n.config.getStringData("USDTView_bring_num_label"), this.tabButton[1].getChildByName("Label").getComponent(cc.Label).string = n.config.getStringData("USDTView_exchange_coin_label")
        }
        onTabOne() {
            n.AudioMgr.playButtonSound("button_click"), this.switchTab(0)
        }
        onTabTwo() {
            n.AudioMgr.playButtonSound("button_click"), this.switchTab(1)
        }
        switchTab(t) {
            0 != t && 1 != t || this.select_index == t || (this.setBtnState(0, 0 == t), this.setBtnState(1, 1 == t), this.tabNode[0].active = 0 == t, this.tabNode[1].active = 1 == t, 1 == t && this.tabNode[1].getComponent(r).show())
        }
        setBtnState(t, e) {
            let i = this.tabButton[t];
            e ? (i.getChildByName("Label").color = this.color_lab_select, i.getChildByName("Background").active = !0) : (i.getChildByName("Label").color = this.color_lab_noSelect, i.getChildByName("Background").active = !1)
        }
    }, T = i(f.prototype, "tabButton", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), p = i(f.prototype, "tabNode", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), m = i(f.prototype, "gold_label", [s], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = i(f.prototype, "score_label", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = i(f.prototype, "des_rich_text", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = i(f.prototype, "text_0", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = i(f.prototype, "text_1", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = i(f.prototype, "ok_button", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = i(f.prototype, "mode_panel", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = i(f.prototype, "ratio_label", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = f)) || S));
    o._RF.pop()
}