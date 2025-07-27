import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as a from "./cv.js";
import * as r from "./JackfruitMain.js";
import * as c from "./JackfruitMenu.js";
import * as l from "./JackfruitReview.js";
import * as o from "./FaceView.js";
import * as s from "./GameSceneInstance.js";
import * as u from "./EmojiView.js";
import * as _ from "./EmojiLoader.js";

function main() {
    var p, h, f, m, g, b, d, P, k, T, j, E, S, R, C, w, v, y, D, L, z, M, F, O, N, J, x, G, Z, Y, A, I, U, H, V, q;
    n._RF.push({}, "513c36VBqpLVYkzSPP88tnz", "JackfruitScene", void 0);
    const {
        ccclass: B,
        property: K
    } = cc._decorator;
    e("JackfruitScene", (p = K(cc.Node), h = K(cc.Prefab), f = K(cc.Prefab), m = K(cc.Node), g = K(cc.Prefab), b = K(cc.Node), d = K(cc.Prefab), P = K(cc.Prefab), k = K(cc.Prefab), T = K(cc.Prefab), j = K(cc.Prefab), E = K(cc.Prefab), S = K(cc.Node), R = K(cc.Sprite), C = K(cc.Sprite), w = K(cc.Label), v = K(cc.Label), B((D = class extends cc.Component {
        constructor() {
            super(), t(this, "jackpot_number_panel", L, this), t(this, "jackPot_prefab", z, this), this.jackpot_Panel = null, t(this, "face_Panel_prefab", M, this), this.face_Panel = null, t(this, "emoji_fullscreen", F, this), this.emoji_Panel = null, t(this, "menu_Panel_prefab", O, this), this.menu_Panel = null, t(this, "gameMain_panel", N, this), t(this, "jackfruit_gamerule", J, this), this.gamerule_Panel = null, t(this, "jackfruit_setting", x, this), this.setting_Panel = null, t(this, "jackfruit_card_score", G, this), this.card_score_Panel = null, t(this, "currentTime_prefab", Z, this), this.currentTime_panel = null, t(this, "review_prefab", Y, this), this.review_panel = null, t(this, "jackfruit_tips_prefab", A, this), this.jackfruit_tips_panel = null, t(this, "voice_panel", I, this), t(this, "recordComplete_img", U, this), t(this, "recording_img", H, this), t(this, "recordTxt", V, this), t(this, "recordTimeTxt", q, this), this._time = 0, this._tipsTime = 0
        }
        onLoad() {
            var e;
            a.config.setCurrentScene(a.Enum.SCENE.JACKFRUIT_SCENE), a.config.adaptScreen(this.node), a.resMgr.adaptWidget(this.node, !0), this.menu_Panel = cc.instantiate(this.menu_Panel_prefab), this.node.addChild(this.menu_Panel), this.menu_Panel.active = !1, this.setting_Panel = cc.instantiate(this.jackfruit_setting), this.node.addChild(this.setting_Panel), this.setting_Panel.active = !1, this.jackpot_Panel = cc.instantiate(this.jackPot_prefab), this.node.addChild(this.jackpot_Panel), this.jackpot_Panel.active = !1, this.face_Panel = cc.instantiate(this.face_Panel_prefab), this.node.addChild(this.face_Panel, a.Enum.ZORDER_TYPE.ZORDER_7), this.face_Panel.getComponent(o).setParentNode(cc.find("chat_panel", this.gameMain_panel)), this.face_Panel.getComponent(o).setDanmuChanel([400, 500, -150, -250]), this.face_Panel.getComponent(o).setGameScene(this), this.gamerule_Panel = a.action.addChildToScene(this, this.jackfruit_gamerule, [], a.Enum.ZORDER_TYPE.ZORDER_TOP, !0), this.gamerule_Panel.active = !1, this.card_score_Panel = a.action.addChildToScene(this, this.jackfruit_card_score, [], a.Enum.ZORDER_TYPE.ZORDER_TOP, !0), this.card_score_Panel.active = !1, this.currentTime_panel = a.action.addChildToScene(this, this.currentTime_prefab, [], a.Enum.ZORDER_TYPE.ZORDER_TOP, !0), this.currentTime_panel.active = !1, this.review_panel = l.getSinglePrefabInst(this.review_prefab, null == (e = s.getInstance(null == this ? void 0 : this.node)) || null == (e = e.room) ? void 0 : e.gameScene), this.jackpot_number_panel.active = !1, this.jackfruit_tips_panel = cc.instantiate(this.jackfruit_tips_prefab), this.jackfruit_tips_panel.active = !1, this.node.addChild(this.jackfruit_tips_panel, a.Enum.ZORDER_TYPE.ZORDER_LOG), this.AdaptiveExpand(), this.menu_Panel.getComponent(c).setGameScene(this), this.gameMain_panel.getComponent(r).setGameScene(this), _.instance.initialize(), a.resMgr.loadPrefabFromBundle("prefabs/EmojiView", (e => {
                this.emoji_Panel = cc.instantiate(e), this.node.addChild(this.emoji_Panel, a.Enum.ZORDER_TYPE.ZORDER_7), this.emoji_Panel.name = "emojipanel", this.emoji_Panel.getComponent(u).setGame(this), this.emoji_Panel.getComponent(u).hideUi()
            }), (e => {}))
        }
        start() {
            0 == a.GameDataManager.bIsAuthMicphone && a.appConfig.getGameConfig().audioChatEnabled && (a.native.AuthMicphone(), a.GameDataManager.bIsAuthMicphone = !0), a.pushNotice.setPushNoticeType(PushNoticeType.PUSH_JACKFRUIT), this.initLanguage(), this._time = (new Date).getTime(), this._tipsTime = 0
        }
        onDestroy() {
            this._time = 0, this._tipsTime = 0
        }
        update() {
            if (0 == this._time) return;
            let e = (new Date).getTime(),
                t = a.numFix.minus(e, this._time) / 36e5,
                i = Math.floor(t);
            if (i > this._tipsTime) {
                this._tipsTime = i;
                let e = "";
                e = i > 5 ? a.config.getStringData("jackfruit_tips_protect_eyes_label_1") : a.StringTools.formatC(a.config.getStringData("jackfruit_tips_protect_eyes_label_0"), i), cc.find("bg/label", this.jackfruit_tips_panel).getComponent(cc.Label).string = e, this.showTips()
            }
        }
        showTips() {
            this.jackfruit_tips_panel.active = !0, this.jackfruit_tips_panel.scale = 0, this.jackfruit_tips_panel.runAction(cc.sequence(cc.scaleTo(.2, 1), cc.delayTime(3), cc.scaleTo(.2, 0)))
        }
        initLanguage() {
            a.StringTools.setLabelString(this.gameMain_panel, "game_end_panel/back_btn/back_label", "jackfruit_back_btn_label"), this.recordTxt.string = a.config.getStringData("GameScene_voice_panel_cdTime_recording_img_record_txt"), this.recordTimeTxt.string = a.config.getStringData("GameScene_voice_panel_cdTime_recording_img_recordTime_txt")
        }
        AdaptiveExpand() {
            if (a.config.IS_FULLSCREEN) {
                a.config.HEIGHT, a.config.FULLSCREEN_OFFSETY, a.config.HEIGHT;
                this.jackpot_number_panel.setPosition(this.jackpot_number_panel.position.x, this.jackpot_number_panel.position.y - a.config.FULLSCREEN_OFFSETY);
                let e = cc.find("gold_Panel", this.menu_Panel).position,
                    t = cc.find("menu_img0", this.menu_Panel);
                cc.find("gold_Panel", this.menu_Panel).setPosition(e.x, e.y - a.config.FULLSCREEN_OFFSETY), t.setPosition(t.position.x, t.position.y - a.config.FULLSCREEN_OFFSETY)
            }
        }
        sendNetJackPot() {
            a.jackfruitNet.requestJackpotData(a.JackfruitManager.tRoomData.param.ante), a.jackfruitNet.requestJackpotAwardList(a.JackfruitManager.tRoomData.param.ante)
        }
        showJackPort() {
            a.AudioMgr.playButtonSound("tab.mp3"), this.sendNetJackPot(), this.jackpot_Panel.active = !0
        }
    }, L = i(D.prototype, "jackpot_number_panel", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = i(D.prototype, "jackPot_prefab", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = i(D.prototype, "face_Panel_prefab", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = i(D.prototype, "emoji_fullscreen", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = i(D.prototype, "menu_Panel_prefab", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = i(D.prototype, "gameMain_panel", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = i(D.prototype, "jackfruit_gamerule", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = i(D.prototype, "jackfruit_setting", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = i(D.prototype, "jackfruit_card_score", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = i(D.prototype, "currentTime_prefab", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = i(D.prototype, "review_prefab", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = i(D.prototype, "jackfruit_tips_prefab", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = i(D.prototype, "voice_panel", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = i(D.prototype, "recordComplete_img", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = i(D.prototype, "recording_img", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = i(D.prototype, "recordTxt", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = i(D.prototype, "recordTimeTxt", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = D)) || y));
    n._RF.pop()
}