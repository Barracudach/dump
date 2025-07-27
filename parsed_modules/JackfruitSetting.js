import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as c from "./cv.js";

function main() {
    var s, l, a, r, o, _, h, u, d, g, b, f, p, w, m, S, C, y, N, v, k, B, z, M;
    n._RF.push({}, "a6380AsPqJNJqe0Rp5ohthj", "JackfruitSetting", void 0);
    const {
        ccclass: j,
        property: D
    } = cc._decorator;
    t("JackfruitSetting", (s = D(cc.Node), l = D(cc.Node), a = D(cc.Node), r = D(cc.Node), o = D(cc.Node), _ = D(cc.Node), h = D(cc.Node), u = D(cc.Node), d = D(cc.Node), g = D(cc.Node), b = D(cc.Node), j((p = class extends cc.Component {
        constructor(...t) {
            super(...t), e(this, "nd_tabs", w, this), e(this, "nd_contents", m, this), e(this, "nd_title_card_styles", S, this), e(this, "nd_card_styles", C, this), e(this, "nd_title_table_bgs", y, this), e(this, "nd_table_bgs", N, this), e(this, "nd_switch_effect", v, this), e(this, "nd_switch_music", k, this), e(this, "nd_switch_vibrate", B, this), e(this, "nd_switch_barrage", z, this), e(this, "nd_switch_voice", M, this)
        }
        onLoad() {
            this.nd_tabs.getChildByName("tab_table").getComponent(cc.Label).string = c.config.getStringData("jackfruit_setting_tab_table"), this.nd_tabs.getChildByName("tab_switch").getComponent(cc.Label).string = c.config.getStringData("jackfruit_setting_tab_switch"), this.nd_title_card_styles.getChildByName("title").getComponent(cc.Label).string = c.config.getStringData("GameScene_changeCard_panel_changeCardTitle_txt"), this.nd_title_table_bgs.getChildByName("title").getComponent(cc.Label).string = c.config.getStringData("jackfruit_setting_0"), this.nd_switch_effect.getChildByName("title").getComponent(cc.Label).string = c.config.getStringData("jackfruit_setting_sound_effects_btn_label"), this.nd_switch_music.getChildByName("title").getComponent(cc.Label).string = c.config.getStringData("jackfruit_setting_music_btn_label"), this.nd_switch_vibrate.getChildByName("title").getComponent(cc.Label).string = c.config.getStringData("jackfruit_setting_vibrate_btn_label"), this.nd_switch_barrage.getChildByName("title").getComponent(cc.Label).string = c.config.getStringData("Faceview_danmu_button_danmu"), c.StringTools.setLabelString(this.nd_switch_voice, "title", "curentTime_curentTime_panel_voice_txt"), this.onClickTab(null, String(0)), this.onClickCardStyle(null, String(c.tools.GetCardFaceJackfruit())), this.onClickTableBg(null, c.tools.GetStringByCCFile("jackfruit_bg")), this.initSwitches()
        }
        show() {
            this.node.active = !0
        }
        onClose() {
            this.node.active = !1
        }
        onClickTab(t, e) {
            let i = c.Number(e);
            for (let t = 0; t < this.nd_tabs.childrenCount; t++) {
                const e = this.nd_tabs.children[t];
                let n = t == i;
                e.color = n ? cc.color(251, 216, 136) : cc.color(138, 139, 144), cc.find("cursor", e).active = n
            }
            for (let t = 0; t < this.nd_contents.childrenCount; t++) {
                this.nd_contents.children[t].active = t == i
            }
            null != t && c.AudioMgr.playButtonSound("tab.mp3")
        }
        onClickCardStyle(t, e) {
            let i = c.Number(e);
            for (let t = 0; t < this.nd_card_styles.childrenCount; t++) {
                this.nd_card_styles.children[t].getChildByName("select").active = t == i
            }
            null != t && c.AudioMgr.playButtonSound("tab.mp3"), c.tools.SetCardFaceJackfruit(i), c.MessageCenter.send("change_cardface_jackfruit")
        }
        onClickTableBg(t, e) {
            let i = c.Number(e);
            for (let t = 0; t < this.nd_table_bgs.childrenCount; t++) {
                this.nd_table_bgs.children[t].getChildByName("select").active = t == i
            }
            null != t && c.AudioMgr.playButtonSound("tab.mp3"), c.tools.SaveStringByCCFile("jackfruit_bg", e), c.MessageCenter.send("change_game_bg", i)
        }
        initSwitches() {
            this.nd_switch_effect._isSelect = c.tools.isSoundEffectOpen(), this.nd_switch_music._isSelect = c.tools.isPlayMusic(), this.nd_switch_vibrate._isSelect = c.tools.isVibrate(), this.nd_switch_barrage._isSelect = c.tools.isShowBarrage(), this.nd_switch_voice._isSelect = c.tools.isPlayVoice(), this.updateSwitch(this.nd_switch_effect), this.updateSwitch(this.nd_switch_music), this.updateSwitch(this.nd_switch_vibrate), this.updateSwitch(this.nd_switch_barrage), this.updateSwitch(this.nd_switch_voice)
        }
        updateSwitch(t) {
            let e = t._isSelect,
                i = t.getChildByName("switch"),
                n = "zh_CN/game/jackfruit/setting/" + (e ? "img_switch_on" : "img_switch_off");
            c.resMgr.setSpriteFrame(i, n);
            let s = i.getChildByName("cursor").getComponent(cc.Widget),
                l = 0 != s.left ? s.left : s.right;
            s.isAlignLeft = !e, s.isAlignRight = e, s.left = l, s.right = l, s.updateAlignment()
        }
        onClickSwitch(t, e) {
            let i = t.target.parent;
            i._isSelect = !i._isSelect, this.updateSwitch(i), c.AudioMgr.playButtonSound("button_click.mp3"), i == this.nd_switch_effect ? c.tools.setSoundEffect(i._isSelect) : i == this.nd_switch_music ? (c.tools.SetPlayMusic(i._isSelect), c.MessageCenter.send("updataBGM")) : i == this.nd_switch_vibrate ? c.tools.setVibrate(i._isSelect) : i == this.nd_switch_barrage ? (c.tools.setShowBarrage(i._isSelect), c.MessageCenter.send("onClickDanmuSwitch")) : i == this.nd_switch_voice && c.tools.setPlayVoice(i._isSelect)
        }
    }, w = i(p.prototype, "nd_tabs", [s], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = i(p.prototype, "nd_contents", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = i(p.prototype, "nd_title_card_styles", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = i(p.prototype, "nd_card_styles", [r], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = i(p.prototype, "nd_title_table_bgs", [o], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = i(p.prototype, "nd_table_bgs", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = i(p.prototype, "nd_switch_effect", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = i(p.prototype, "nd_switch_music", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = i(p.prototype, "nd_switch_vibrate", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = i(p.prototype, "nd_switch_barrage", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = i(p.prototype, "nd_switch_voice", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = p)) || f));
    n._RF.pop()
}