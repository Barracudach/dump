import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as m from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as h from "./ThemeSystem.js";
import * as g from "./cv.js";
import * as p from "./CurrencyValue.js";
import * as d from "./GameSceneInstance.js";
import * as b from "./GameSceneInstance.js";
import * as _ from "./ColorSystemType.js";
import * as f from "./ColorSystemWeight.js";
import * as y from "./ColorSystemTypeOther.js";
import * as S from "./FormatParser.js";

function main() {
    var T, C, w, x, D, z, I, v, L, W, G, R, k, B, F, N, P, V, H, E;
    i._RF.push({}, "963e0LybqZEkKxwt6isheIH", "ZoomCurentTime", void 0);
    const {
        ccclass: M,
        property: O
    } = l;
    t("default", (T = O(o), C = O(p), w = O(o), x = O(o), D = O(r), z = O(s), I = O(h), v = O(a), L = b("GameDataInstance"), M((R = e((G = class extends u {
        constructor(...t) {
            super(...t), n(this, "all_number", R, this), n(this, "win_number", k, this), n(this, "title_text", B, this), n(this, "btn_text", F, this), n(this, "gold_icon", N, this), n(this, "ok_button", P, this), n(this, "winNumberThemeSystem", V, this), n(this, "des_rich_text", H, this), this.popupExpireTime = 120, n(this, "gameDataInstance", E, this)
        }
        onLoad() {
            this.adaptWidget(), this.title_text.string = g.config.getStringData("selfView_ScrollView_Button_3_Text_3_0"), this.ok_button.node.on(s.EventType.CLICK, (t => {
                this.onLeaveRoom()
            }), this)
        }
        onEnable() {
            this.schedule(this.GameHeartBeat, 12), this.scheduleOnce(this.onLeaveRoom, this.popupExpireTime)
        }
        onDisable() {
            this.unschedule(this.GameHeartBeat)
        }
        GameHeartBeat() {
            var t;
            c(this.node) && null != (t = this.gameDataInstance) && t.tRoomData && g.gameNet.requestHeartBeat(this.gameDataInstance.tRoomData.u32GameID)
        }
        onLeaveRoom() {
            c(this.node) && (g.AudioMgr.playButtonSound("button_click.mp3"), g.MessageCenter.send("on_leave_room_succ", this.gameDataInstance))
        }
        adaptWidget() {
            g.resMgr.adaptWidget(this.node, !0)
        }
        start() {}
        updateView(t) {
            let e = t.CurrStake,
                n = t.SettleStake,
                i = t.InGameTime,
                o = t.HandCount;
            this.all_number.string = g.StringTools.numToFloatString(e);
            let r = this.gold_icon.getComponent(m).contentSize.width + this.all_number.node.getComponent(m).contentSize.width,
                s = this.gold_icon.getPosition();
            this.gold_icon.setPosition(this.gold_icon.parent.getComponent(m).contentSize.width / 2 - r / 2 - 5, s.y), s = this.all_number.node.getPosition(), this.all_number.node.setPosition(this.gold_icon.position.x + this.gold_icon.getComponent(m).contentSize.width + 10, s.y), this.setWinNumber(n);
            const a = S.changeSecToTime(i);
            this.setDesText(a, o)
        }
        setDesText(t, e) {
            g.StringTools.setRichTextString(this.des_rich_text.node, g.StringTools.formatC(g.config.getStringData("ZoomCurrentTime_des_rich_text"), e, t))
        }
        setWinNumber(t) {
            let e = "";
            0 == t ? (e = g.StringTools.numToFloatString(t), this.setLoseColor()) : t > 0 ? (e = "+" + g.StringTools.numToFloatString(t), this.setWinColor()) : (e = g.StringTools.numToFloatString(t), this.setLoseColor()), this.win_number.updateVal(e, d.getInstanceGameData(null == this ? void 0 : this.node).tRoomData.currency.type)
        }
        setLoseColor() {
            this.winNumberThemeSystem.setColorSystemWeight(_.Vulcano, f.W400)
        }
        setWinColor() {
            this.winNumberThemeSystem.setColorScheme(_.Other, y.GameGold)
        }
    }).prototype, "all_number", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = e(G.prototype, "win_number", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = e(G.prototype, "title_text", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = e(G.prototype, "btn_text", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(G.prototype, "gold_icon", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = e(G.prototype, "ok_button", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = e(G.prototype, "winNumberThemeSystem", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = e(G.prototype, "des_rich_text", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = e(G.prototype, "gameDataInstance", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = G)) || W));
    i._RF.pop()
}