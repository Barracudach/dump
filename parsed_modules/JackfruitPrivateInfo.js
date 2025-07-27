import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./cc.js";
import * as n from "./cv.js";
import * as o from "./RoomData.js";
import * as s from "./FaceItem.js";
import * as r from "./GameSceneInstance.js";
import * as l from "./GameSceneInstance.js";

function main() {
    var c, _, h, u, d, p, b, f, g, y, m, v, D, N, k, x, w, U, S, I, C, P, T, L, z, O, M, F, R, V, H, E, J, j, A, B, q, G, X, Z, K, W, Y, Q, $, tt;
    a._RF.push({}, "5e750sH2oBPfr/dtqpMVN9y", "JackfruitPrivateInfo", void 0);
    const {
        ccclass: et,
        property: it
    } = cc._decorator;
    t("JackfruitPrivateInfo", (c = it(cc.Node), _ = it(cc.Label), h = it(cc.Label), u = it(cc.Label), d = it(cc.Label), p = it(cc.Label), b = it(cc.Label), f = it(cc.Label), g = it(cc.Label), y = it(cc.Label), m = it(cc.Node), v = it(cc.Node), D = it(cc.Node), N = it(cc.Node), k = it(cc.Node), x = it(cc.Node), w = it(cc.Node), U = it(cc.Node), S = it(cc.Prefab), I = it(cc.Label), C = l(), P = l("GameDataInstance"), et((L = class extends cc.Component {
        constructor(...t) {
            super(...t), e(this, "_replay_btn", z, this), e(this, "_replay_txt", O, this), e(this, "_fruit_totalhand_txt", M, this), e(this, "_totalhand_text", F, this), e(this, "_level_hand_txt", R, this), e(this, "_level_text", V, this), e(this, "_max_win_txt", H, this), e(this, "_max_win_text", E, this), e(this, "_all_win_rate_txt", J, this), e(this, "_all_win_rate_text", j, this), e(this, "_face_panel", A, this), e(this, "_root", B, this), e(this, "_fruit_panel", q, this), e(this, "_face_bg", G, this), e(this, "_panel_bg", X, this), e(this, "_headNode", Z, this), e(this, "_block_button", K, this), e(this, "_block_img", W, this), e(this, "faceItem", Y, this), e(this, "_roleName_text", Q, this), this._speakingVoice = !1, this._currPlayVoiceId = 0, this._currentUid = 0, this._opcityNum = 0, this._shade = null, this.canSendFace = !0, this._player = null, this._obplayer = null, this._enterType = 0, this._disturb = 2, e(this, "gameSceneInstance", $, this), e(this, "gameDataInstance", tt, this)
        }
        onLoad() {
            n.resMgr.adaptWidget(this.node, !0), this._shade = n.action.createShieldLayer(this.node.getParent(), "shieldLayer-jackfruitprivateInfo", n.Enum.ZORDER_TYPE.ZORDER_SHADER, cc.Color.BLACK, 100, function(t) {
                t.stopPropagation(), this.node.active = !1, this._shade.active = !1
            }.bind(this)), this._shade.active = !1, this._opcityNum = 300, this._speakingVoice = !1, this._root = cc.find("root", this.node), this._fruit_panel = cc.find("fruit_panel", this._root), this._face_bg = cc.find("face_panel/face_bg", this.node), this._panel_bg = cc.find("root/panelbg", this.node), this._replay_btn = cc.find("root/replay_button", this.node), this._block_button = cc.find("root/block_button", this.node), this._block_img = cc.find("root/block_img", this.node), this._block_img.active = !1, this._roleName_text = cc.find("root/roleName_text", this.node).getComponent(cc.Label), this._replay_btn.on(cc.Node.EventType.TOUCH_END, this.speak, this), this._replay_txt = cc.find("root/replay_button/replay_txt", this.node).getComponent(cc.Label), this._fruit_totalhand_txt = cc.find("fruit_panel/fruit_totalhand_txt", this._root).getComponent(cc.Label), this._totalhand_text = cc.find("fruit_panel/totalhand_text", this._root).getComponent(cc.Label), this._level_hand_txt = cc.find("fruit_panel/level_hand_txt", this._root).getComponent(cc.Label), this._level_text = cc.find("fruit_panel/level_text", this._root).getComponent(cc.Label), this._max_win_txt = cc.find("fruit_panel/max_win_txt", this._root).getComponent(cc.Label), this._max_win_text = cc.find("fruit_panel/max_win_text", this._root).getComponent(cc.Label), this._all_win_rate_txt = cc.find("fruit_panel/all_win_rate_txt", this._root).getComponent(cc.Label), this._all_win_rate_text = cc.find("fruit_panel/all_win_rate_text", this._root).getComponent(cc.Label), this._headNode = cc.find("head_panel/headNode", this._root), this._face_panel = cc.find("face_panel/face_panel", this.node), this._block_button.on(cc.Node.EventType.TOUCH_END, (t => {
                const e = r.getInstanceRoomId(null == this ? void 0 : this.node);
                0 == this._enterType ? n.jackfruitNet.requestNotDisturb(e, this._disturb, this._player.playerId) : 1 == this._enterType && n.jackfruitNet.requestNotDisturb(e, this._disturb, this._obplayer.playerid)
            }));
            for (let t = 0; t < 12; t++) {
                let e = cc.instantiate(this.faceItem);
                e.getComponent(s).setData(t, n.JackfruitManager.tRoomData.fee.emotionFee), t >= 6 ? e.setPosition(new cc.Vec2(145 * (t - 6) - 430, -320)) : e.setPosition(new cc.Vec2(145 * t - 430, -155)), this._face_panel.addChild(e)
            }
            this.node.on(cc.Node.EventType.TOUCH_END, (t => {
                t.stopPropagation(), this.node.active = !1, this._shade.active = !1
            }));
            let t = this.gameSceneInstance.gameNode.getChildByName("bighead");
            this._headNode.on(cc.Node.EventType.TOUCH_END, (e => {
                e.stopPropagation(), t.active = !0, this.node.active = !1
            }), this), t.on(cc.Node.EventType.TOUCH_END, (e => {
                e.stopPropagation(), t.active = !1, this.node.active = !0
            }), this), this.initLanguage(), n.MessageCenter.register("JFPrivateInfo", this._onMsgUpdatePrivateData.bind(this), this.node), n.MessageCenter.register("on_play_voice", this.speakOverFunc.bind(this), this.node), n.MessageCenter.register("effet_call", this.doOpcityX.bind(this), this.node), n.MessageCenter.register("NotDisturb", this.NotDisturb.bind(this), this.node)
        }
        _onMsgUpdatePrivateData(t) {
            let e = JSON.parse(t.data);
            this._totalhand_text.string = e.handcount, this._level_text.string = e.levelhand, this._max_win_text.string = n.StringTools.numberToString(n.StringTools.clientGoldByServer(e.maxwinscore)), this._all_win_rate_text.string = e.winallcount
        }
        onDestroy() {
            n.MessageCenter.unregister("JFPrivateInfo", this.node), n.MessageCenter.unregister("on_play_voice", this.node), n.MessageCenter.unregister("effet_call", this.node), n.MessageCenter.unregister("NotDisturb", this.node)
        }
        initLanguage() {
            this._replay_txt.string = n.config.getStringData("jackfruit_replay_label"), this._fruit_totalhand_txt.string = n.config.getStringData("jackfruit_total_hand_label"), this._level_hand_txt.string = n.config.getStringData("jackfruit_level_hand_label"), this._max_win_txt.string = n.config.getStringData("jackfruit_max_win_label"), this._all_win_rate_txt.string = n.config.getStringData("jackfruit_all_win_rate_label")
        }
        speak(t) {
            if (t.type == cc.Node.EventType.TOUCH_END)
                for (let t = 0; t < n.JackfruitManager.tRoomData.kTablePlayerList.length; t++) {
                    let e = n.JackfruitManager.tRoomData.kTablePlayerList[t];
                    if (this._currentUid == e.playerId) {
                        if (1 == this._speakingVoice) return void console.log("speaking is now.");
                        if (this._speakingVoice = !0, e.lastVoice.length > 0)
                            if (cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS) {
                                n.native.StopPlay();
                                let t = new o;
                                t.kUrl = e.lastVoice, t.kSender = this._roleName_text.getComponent(cc.Label).string, t.u32SeatId = e.seatId, n.native.PlayRoomVoice(t)
                            } else n.AudioMgr.stop(this._currPlayVoiceId), this.downloadVoice(e);
                        return
                    }
                }
        }
        speakOverFunc(t = null) {
            if (null == t) return void(this._speakingVoice = !1);
            let e = t.f32Time;
            this.scheduleOnce(function() {
                this._speakingVoice = !1
            }.bind(this), e)
        }
        downloadVoice(t) {
            let e = n.AudioMgr.getAudioID(t.lastVoice),
                i = n.AudioMgr.getDuration(e);
            this._currPlayVoiceId = e;
            let a = new o,
                s = t.lastVoice;
            if (-1 != s.indexOf("@")) {
                let t = s.split("@");
                a.kUrl = t[2]
            } else a.kUrl = t.lastVoice;
            a.kSender = this._roleName_text.getComponent(cc.Label).string, a.f32Time = i > 10 ? 10 : i, a.u32SeatId = t.seatId, n.httpHandler.DoDownloadVoice(a, this.speakOverFunc.bind(this))
        }
        Update(t) {
            if (this._opcityNum = this._opcityNum - 1, this._opcityNum <= 150) return this.node.active = !1, this._opcityNum = 300, void this.unschedule(this.Update);
            let e = this._opcityNum >= 255 ? 255 : this._opcityNum;
            this.doOpcity(this.node, e)
        }
        doOpcity(t, e) {
            if (!t) return;
            t.opacity = e;
            let i = t.childrenCount,
                a = t.children;
            for (let t = 0; t < i; t++) a[t].opacity = e, a[t].childrenCount > 0 && this.doOpcity(a[t], e)
        }
        doOpcityX(t) {
            this._root.active = !1, this._fruit_panel.active = !1, this._shade.active = !1, this._face_bg.active = !0, this.doOpcity(this.node, 255), this.unschedule(this.Update), this._opcityNum = 300, this.schedule(this.Update, 0)
        }
        show() {
            this.canSendFace = !1, this.doOpcity(this.node, 255), this._root.active = !0, this._fruit_panel.active = !0, this._face_bg.active = !1, this.unschedule(this.Update), this.node.active = !0, this._shade.active = !0, this.doOpcity(this._face_panel, 200), this._root.setPosition(0, 0), this._face_panel.active = !0, this._fruit_panel.setPosition(0, 225), this._panel_bg.setContentSize(cc.size(920, 810)), this._replay_btn.active = this._currentUid != n.dataHandler.getUserData().u32Uid, n.MessageCenter.send("FaceItem_canSendFace", this.canSendFace)
        }
        showob() {
            if (this._enterType = 1, this._obplayer = this.gameDataInstance.tRoomData.obPlayer, this._obplayer.playerid == n.dataHandler.getUserData().u32Uid) this._block_button.active = !1, this._block_img.active = !1;
            else {
                if (-1 != n.JackfruitManager.tRoomData.nSelfSeatID) {
                    this._block_button.active = !0;
                    let t = !1;
                    for (let e = 0; e < this.gameDataInstance.tRoomData.obPlayer.data.NotDisturbUids.length; e++)
                        if (n.dataHandler.getUserData().u32Uid == this.gameDataInstance.tRoomData.obPlayer.data.NotDisturbUids[e]) {
                            t = !0;
                            break
                        } 1 == t ? (this.DisturbOrNot(1, this.gameDataInstance.tRoomData.obPlayer.playerid), this._disturb = 2) : (this.DisturbOrNot(2, this.gameDataInstance.tRoomData.obPlayer.playerid), this._disturb = 1)
                } else this._block_button.active = !1, this._block_img.active = !1
            }
            this.canSendFace = !1, this.doOpcity(this.node, 255), this._root.active = !0, this._fruit_panel.active = !0, this._face_bg.active = !1, this.unschedule(this.Update), this.node.active = !0, this._shade.active = !0, this.doOpcity(this._face_panel, 200), this._root.setPosition(0, 0), this._face_panel.active = !0, this._fruit_panel.setPosition(0, 225), this._panel_bg.setContentSize(cc.size(920, 810)), this._replay_btn.active = this._currentUid != n.dataHandler.getUserData().u32Uid, n.MessageCenter.send("FaceItem_canSendFace", this.canSendFace)
        }
        setUidAndName(t, e) {
            this._currentUid = t, cc.find("root/roleName_text", this.node).getComponent(cc.Label).string = e
        }
        updateView(t, e) {
            if (this._enterType = 0, this._player = e, n.JackfruitManager.tRoomData.nSelfSeatID == t) return this.show(), this._face_panel.active = !1, this._block_button.active = !1, this._block_img.active = !1, this._root.setPosition(this._root.getPosition().x, -150), this._fruit_panel.setPosition(this._fruit_panel.getPosition().x, 225), void this._panel_bg.setContentSize(cc.size(920, 500));
            this._block_button.active = !0;
            let i = !1;
            for (let t = 0; t < e.NotDisturbUids.length; t++)
                if (n.dataHandler.getUserData().u32Uid == e.NotDisturbUids[t]) {
                    i = !0;
                    break
                } 1 == i ? (this.DisturbOrNot(1, e.playerId), this._disturb = 2) : (this.DisturbOrNot(2, e.playerId), this._disturb = 1), this._root.setPosition(0, 0), this._face_panel.active = !0, this._fruit_panel.setPosition(0, 225), this._panel_bg.setContentSize(cc.size(920, 810)), this.canSendFace = !0, this._root.active = !0, this._fruit_panel.active = !0, this._face_bg.active = !1, this.unschedule(this.Update), this.node.active = !0, this._shade.active = !0, this.doOpcity(this.node, 255), n.MessageCenter.send("FaceItem_canSendFace", this.canSendFace);
            for (let e = 0; e < n.JackfruitManager.tRoomData.kTablePlayerList.length; e++) {
                let i = n.JackfruitManager.tRoomData.kTablePlayerList[e];
                i.seatId == t && (this._currentUid = i.playerId, this._replay_btn.active = this._currentUid != n.dataHandler.getUserData().u32Uid)
            }
        }
        NotDisturb(t) {
            if (this.DisturbOrNot(t.operate, t.whoId), 1 == t.operate) {
                let t = n.config.getStringData("Star_block_tips");
                n.TT.showMsg(t, n.Enum.ToastType.ToastTypeInfo)
            } else if (2 == t.operate) {
                let t = n.config.getStringData("Star_block_cancel");
                n.TT.showMsg(t, n.Enum.ToastType.ToastTypeInfo)
            }
            if (0 == this._enterType) {
                if (1 == (1 == t.operate)) this._player.NotDisturbUids.push(n.dataHandler.getUserData().u32Uid);
                else
                    for (let t = 0; t < this._player.NotDisturbUids.length; t++)
                        if (n.dataHandler.getUserData().u32Uid == this._player.NotDisturbUids[t]) {
                            this._player.NotDisturbUids.splice(t, 1);
                            break
                        } n.JackfruitManager.tRoomData.updateTablePlayer(t.playerId, this._player)
            } else if (1 == this._enterType) {
                if (1 == (1 == t.operate)) this._obplayer.data.NotDisturbUids.push(n.dataHandler.getUserData().u32Uid);
                else
                    for (let t = 0; t < this._obplayer.data.NotDisturbUids.length; t++)
                        if (n.dataHandler.getUserData().u32Uid == this._obplayer.data.NotDisturbUids[t]) {
                            this._obplayer.data.NotDisturbUids.splice(t, 1);
                            break
                        } this.gameDataInstance.tRoomData.obPlayer = this._obplayer
            }
        }
        DisturbOrNot(t, e) {
            let i = this._block_button.getComponent(cc.Sprite),
                a = cc.find("Label", this._block_button).getComponent(cc.Label);
            1 == t ? (a.string = n.config.getStringData("Star_unblock"), this._block_img.active = !0, n.resMgr.setSpriteFrame(i.node, "zh_CN/game/jackfruit/privateinfo/icon_block_off"), this._disturb = 2) : 2 == t && (a.string = n.config.getStringData("Star_block"), this._block_img.active = !1, n.resMgr.setSpriteFrame(i.node, "zh_CN/game/jackfruit/privateinfo/icon_block_on"), this._disturb = 1)
        }
    }, z = i(L.prototype, "_replay_btn", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = i(L.prototype, "_replay_txt", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = i(L.prototype, "_fruit_totalhand_txt", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = i(L.prototype, "_totalhand_text", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = i(L.prototype, "_level_hand_txt", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = i(L.prototype, "_level_text", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = i(L.prototype, "_max_win_txt", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = i(L.prototype, "_max_win_text", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = i(L.prototype, "_all_win_rate_txt", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = i(L.prototype, "_all_win_rate_text", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = i(L.prototype, "_face_panel", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = i(L.prototype, "_root", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = i(L.prototype, "_fruit_panel", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = i(L.prototype, "_face_bg", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = i(L.prototype, "_panel_bg", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = i(L.prototype, "_headNode", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = i(L.prototype, "_block_button", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = i(L.prototype, "_block_img", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = i(L.prototype, "faceItem", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = i(L.prototype, "_roleName_text", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = i(L.prototype, "gameSceneInstance", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), tt = i(L.prototype, "gameDataInstance", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = L)) || T));
    a._RF.pop()
}