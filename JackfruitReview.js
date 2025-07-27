import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as f from "./cc.js";
import * as p from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as S from "./cc.js";
import * as _ from "./cc.js";
import * as b from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as d from "./cc.js";
import * as w from "./cc.js";
import * as y from "./cc.js";
import * as v from "./cv.js";
import * as D from "./CircleSprite.js";
import * as T from "./Enum.js";
import * as E from "./GameSceneInstance.js";
import * as I from "./CommonTools.js";

function main() {
    var U, k, M, G, R, x, N, L, z, A, O, B, J, F, P, j, H, V, Y, K, Z, q, W, X, Q, $, ee, te, ie, ne, re, ae, se, oe, le, ce, he, ue, _e, de, ge, pe, fe, me, be, ye, Se, we, Ce, ve, De;
    n._RF.push({}, "57460jj9ltA5pszYvwKz8I/", "JackfruitReview", void 0);
    const {
        ccclass: Te,
        property: Ee
    } = l;
    e("JackfruitReview", (U = Ee(r), k = Ee(a), M = Ee(r), G = Ee(r), R = Ee(r), x = Ee(a), N = Ee(a), L = Ee(a), z = Ee(a), A = Ee(r), O = Ee(a), B = Ee(s), J = Ee(s), F = Ee(s), P = Ee(s), j = Ee(s), H = Ee(s), V = Ee(o), Y = Ee(o), K = Ee(o), Z = Ee(o), q = Ee(a), W = E(), X = E("GameDataInstance"), Te(((De = class e extends c {
        constructor(...e) {
            super(...e), i(this, "title_img", ee, this), i(this, "room_name", te, this), i(this, "self_cards", ie, this), i(this, "other_cards", ne, this), i(this, "public_cards", re, this), i(this, "self_card_types", ae, this), i(this, "other_card_types", se, this), i(this, "score_list", oe, this), i(this, "score_num_list", le, this), i(this, "score_img", ce, this), i(this, "all_win_list", he, this), i(this, "seat", ue, this), i(this, "fold_card_panel", _e, this), i(this, "btn_screenshot", de, this), i(this, "view_panle", ge, this), i(this, "view_panle_empty", pe, this), i(this, "button_panel", fe, this), i(this, "btn_first", me, this), i(this, "btn_last", be, this), i(this, "btn_before", ye, this), i(this, "btn_next", Se, this), i(this, "txt_page", we, this), this.index = 0, this._selfSeatID = 0, this._dataSourceType = T.EDST_NONE, this._vGameUUID = [], this._sCurGameUUID = "", this._pageTitle = "", this._shieldLayer = null, i(this, "gameSceneInstance", Ce, this), i(this, "gameDataInstance", ve, this)
        }
        onLoad() {
            if (v.config.IS_IPHONEX_SCREEN) {
                var e, t;
                let i = null == (e = this.view_panle) ? void 0 : e.getComponent(h);
                i && (i.top = v.config.FULLSCREEN_OFFSETY);
                let n = null == (t = u("title_panel", this.node)) ? void 0 : t.getComponent(h);
                n && (n.top = v.config.FULLSCREEN_OFFSETY)
            }
            v.resMgr.adaptWidget(this.node, !0), this.initLanguage(), v.config.isSiyuType() && (this.btn_screenshot.active = !1);
            for (let e = 0; e < 3; e++) {
                let t = this.other_card_types[e].node.getPosition(),
                    i = this.other_cards[2 * e].node.getPosition();
                this.other_card_types[e].node.setPosition(_(t.x, i.y - 52, this.other_card_types[e].node.position.z)), t = this.self_card_types[e].node.getPosition(), i = this.self_cards[2 * e].node.getPosition(), this.self_card_types[e].node.setPosition(_(t.x, i.y - 52, this.self_card_types[e].node.position.z))
            }
            v.MessageCenter.register("updata_record", this.onGameRecord.bind(this), this.node), v.MessageCenter.register("update_jackfruit_record", this.onGameRecord.bind(this), this.node), v.MessageCenter.register(v.config.CHANGE_LANGUAGE, this.initLanguage.bind(this), this.node)
        }
        onDestroy() {
            v.MessageCenter.unregister("updata_record", this.node), v.MessageCenter.unregister("update_jackfruit_record", this.node), v.MessageCenter.unregister(v.config.CHANGE_LANGUAGE, this.node)
        }
        initLanguage() {
            v.resMgr.setSpriteFrame(this.title_img.node, v.config.getLanguagePath("game/jackfruit/review/review_title"));
            for (let e = 0; e < this.fold_card_panel.length; e++) {
                let t = u("fold", this.fold_card_panel[e]);
                v.resMgr.setSpriteFrame(t, v.config.getLanguagePath("game/jackfruit/review/fold"))
            }
            for (let e = 0; e < 2; e++) this.score_list[e].string = v.config.getStringData("jackfruit_review_score_label");
            u("empty_label", this.view_panle_empty).getComponent(a).string = v.config.getStringData("jackfruit_review_empty_label"), u("label", this.btn_screenshot).getComponent(a).string = v.config.getStringData("jackfruit_review_btn_screenshot_label")
        }
        static getSinglePrefabInst(t, i) {
            if (!(t instanceof d)) return null;
            let n = (i ?? g.getScene()).getChildByName(e.gClassName);
            return n || (n = p(t), n.getComponent(e)) ? n : (n.destroy(), null)
        }
        _checkSelfrecord(e) {
            for (let t = 0; t < e.playersettle.length; t++)
                if (v.dataHandler.getUserData().u32Uid == e.playersettle[t].uid) return !0;
            return !1
        }
        _getGameUUIDs() {
            let e = [];
            switch (this._dataSourceType) {
                case T.EDST_NONE:
                case T.EDST_RECORD:
                    break;
                case T.EDST_GAMEROOM: {
                    let t = v.JackfruitManager.tRoomData.gameUUIDs;
                    e = t.slice(0, t.length);
                    break
                }
                case T.EDST_COLLECTION:
            }
            return e
        }
        onGameRecord() {
            let e = this._vGameUUID.length;
            this.view_panle_empty.active = e <= 0, this.button_panel.active = e > 0;
            let t = v.JackfruitManager.tRoomData.param;
            if (this.room_name.string = this._pageTitle.trim().length > 0 ? this._pageTitle : v.tools.displayChineseName(t.gameName), 0 == e) return;
            this.index = e > this.index ? this.index : e - 1, this.setBtnEnabled(this.btn_first, this.index > 0, "zh_CN/game/jackfruit/review/next_icon_1"), this.setBtnEnabled(this.btn_last, this.index < e - 1, "zh_CN/game/jackfruit/review/next_icon_1"), this.setBtnEnabled(this.btn_before, this.index > 0, "zh_CN/game/jackfruit/review/next_icon"), this.setBtnEnabled(this.btn_next, this.index < e - 1, "zh_CN/game/jackfruit/review/next_icon"), this.txt_page.string = (this.index + 1).toString() + "/" + e.toString(), this._sCurGameUUID = this._vGameUUID[this.index];
            let i = v.dataHandler.getUserData().u32Uid;
            switch (this._dataSourceType) {
                case T.EDST_NONE:
                    break;
                case T.EDST_RECORD:
                    if (v.JackfruitManager.tGameRecords.hasJsonValue(this._sCurGameUUID)) {
                        const e = v.JackfruitManager.tGameRecords.recordCaches.get(this._sCurGameUUID);
                        this.onUpdateView(e)
                    } else v.httpHandler.requestJackfruitGameRecord(i, this._sCurGameUUID, v.Enum.GameId.Jackfruit);
                    break;
                case T.EDST_GAMEROOM:
                    if (v.JackfruitManager.tGameRecords.hasJsonValue(this._sCurGameUUID)) {
                        let e = v.JackfruitManager.tGameRecords.recordCaches.get(this._sCurGameUUID);
                        this.onUpdateView(e)
                    } else v.httpHandler.requestJackfruitGameRecord(i, this._sCurGameUUID, v.Enum.GameId.Jackfruit);
                    break;
                case T.EDST_COLLECTION:
            }
        }
        onUpdateView(e) {
            this.view_panle.active = !0;
            let t = this._checkSelfrecord(e);
            for (let i = 0; i < e.playersettle.length; i++) {
                let n = e.playersettle[i],
                    r = n.seatid == this._selfSeatID;
                t && (r = n.uid == v.dataHandler.getUserData().u32Uid), this.setPlayerCards(r, n), this.setPlayerTypes(r, n), this.setScore(r, n.winscore), this.setSeat(r, n), this.setFoldCard(r, n)
            }
            for (let t = 0; t < this.public_cards.length; t++) {
                let i = this.public_cards[t],
                    n = e.pubCards[t];
                v.JackfruitManager.setCardImg(i.node, n)
            }
            this.index
        }
        setPlayerCards(e, t) {
            let i = e ? this.self_cards : this.other_cards;
            for (let e = 0; e < 2; e++) {
                let n = t.headcard[e];
                v.JackfruitManager.setCardImg(i[e].node, n)
            }
            for (let e = 0; e < 2; e++) {
                let n = t.middlecard[e];
                v.JackfruitManager.setCardImg(i[e + 2].node, n)
            }
            for (let e = 0; e < 2; e++) {
                let n = t.tailcard[e];
                v.JackfruitManager.setCardImg(i[e + 4].node, n)
            }
        }
        setPlayerTypes(e, t) {
            let i = e ? this.self_card_types : this.other_card_types,
                n = [];
            n.push(t.headlevel), n.push(t.middlelevel), n.push(t.taillevel);
            let r = [];
            r.push(t.headscore), r.push(t.midscore), r.push(t.tailscore);
            for (let e = 0; e < i.length; e++) i[e].string = v.JackfruitManager.getCardTypeStr(n[e]) + " " + this.getScoreStr(r[e]), i[e].node.getComponent(f).color = r[e] < 0 ? m(255, 255, 255) : m(255, 255, 0), i[e].node.getComponent(b).opacity = r[e] < 0 ? 127 : 255;
            let a = !0,
                s = !0;
            for (let e = 0; e < r.length; e++) r[e] > 0 ? s = !1 : r[e] < 0 ? a = !1 : (a = !1, s = !1);
            let o = e ? 0 : 1;
            a ? (this.all_win_list[o].node.active = !0, this.all_win_list[o].node.getComponent(f).color = m(255, 255, 0), this.all_win_list[o].string = v.config.getStringData("jackfruit_review_all_win_list_label")) : s ? (this.all_win_list[o].node.active = !0, this.all_win_list[o].node.getComponent(f).color = m(255, 255, 255), this.all_win_list[o].string = v.config.getStringData("jackfruit_review_all_lose_list_label")) : this.all_win_list[o].node.active = !1
        }
        setScore(e, t) {
            let i = e ? 0 : 1;
            this.score_num_list[i].string = this.getScoreStr(t), this.score_num_list[i].node.getComponent(f).color = m(255, 255, t < 0 ? 255 : 0)
        }
        setSeat(e, t) {
            let i = e ? 0 : 1,
                n = this.seat[i];
            v.StringTools.setShrinkString(u("name_text", n), t.nickname, !0), u("gold_label", n).getComponent(a).string = this.getShowScore(t.score).toString();
            let r = u("head_panel/headNode", n);
            D.setCircleSprite(r, t.headurl, t.plat, !1)
        }
        setFoldCard(e, t) {
            let i = e ? 0 : 1,
                n = this.fold_card_panel[i];
            v.JackfruitManager.setCardImg(u("fold_card", n), t.foldcard[0])
        }
        getScoreStr(e) {
            return (e = this.getShowScore(e)) >= 0 ? "+" + e.toString() : e.toString()
        }
        getShowScore(e) {
            return v.StringTools.toFixed(v.StringTools.serverGoldToShowNumber(e), 1)
        }
        show(t, i = 0, n, r) {
            this._dataSourceType = t, this._vGameUUID = n || this._getGameUUIDs(), this._selfSeatID = i, this._pageTitle = r || "";
            let a = this._vGameUUID.length;
            this.index = a > 0 ? a - 1 : a, this.view_panle.active = !1, this.onGameRecord();
            let s = this.gameSceneInstance.room.gameScene,
                o = v.Enum.ZORDER_TYPE.ZORDER_TOP;
            this._shieldLayer || (this._shieldLayer = v.action.createShieldLayer(s, "shieldLayer-JackfruitReview", o, y.BLACK, 100), this._shieldLayer.setSiblingIndex(o));
            let l = s.getChildByName(e.gClassName);
            l || (l = this.node, l.setSiblingIndex(o), l.name = e.gClassName, s.addChild(l)), this._shieldLayer.active = !0, v.action.showAction(this.node, v.action.eMoveActionDir.EMAD_TO_LEFT, v.action.eMoveActionType.EMAT_FADE_IN, v.action.delay_type.NORMAL, null, null, 1 / S.getFrameRate())
        }
        onBtnClose(e, t) {
            this.node.active && ("btn" == t && v.AudioMgr.playButtonSound("close.mp3"), this.node.active = !1, v.MessageCenter.send("show_mail_entrance"), this._shieldLayer && (this._shieldLayer.active = !1), v.action.showAction(this.node, v.action.eMoveActionDir.EMAD_TO_RIGHT, v.action.eMoveActionType.EMAT_FADE_OUT, v.action.delay_type.NORMAL))
        }
        obBtnFirst() {
            v.AudioMgr.playButtonSound("button_click.mp3"), this.index = 0, this.onGameRecord()
        }
        obBtnLast() {
            v.AudioMgr.playButtonSound("button_click.mp3");
            let e = this._vGameUUID.length;
            this.index = e > 0 ? e - 1 : e, this.onGameRecord()
        }
        obBtnBefore() {
            v.AudioMgr.playButtonSound("button_click.mp3"), 0 != this.index && (this.index--, this.onGameRecord())
        }
        obBtnNext() {
            v.AudioMgr.playButtonSound("button_click.mp3");
            let e = this._vGameUUID.length;
            this.index != e - 1 && (this.index++, this.onGameRecord())
        }
        setBtnEnabled(e, t, i) {
            e.enabled = t, v.resMgr.setSpriteFrame(u("icon", e.node), i + (t ? "" : "_disable"))
        }
        onBtnScreenshot() {
            I.takescreenshot({
                x: 0,
                y: 0,
                rt: !0
            }, (e => {
                if (0 != e.length) {
                    let t = !0;
                    if (w.os == w.OS.IOS) {
                        "false" == v.native.invokeSyncFunc(v.nativeCMD.KEY_SAVE_TO_ABLM, {
                            path: e
                        }) && (t = !1)
                    } else w.os == w.OS.ANDROID && (t = C.reflection.callStaticMethod("com/cocos/game/ImagePicker", "saveTophoto", "(Ljava/lang/String;)Z", e));
                    t ? v.TT.showMsg(v.config.getStringData("ClubSpreadTips0"), v.Enum.ToastType.ToastTypeInfo) : v.TT.showMsg(v.config.getStringData("ClubSpreadTips1"), v.Enum.ToastType.ToastTypeInfo)
                }
            }))
        }
        filpYImage(e, t, i) {
            let n = new Uint8Array(t * i * 4),
                r = 4 * t;
            for (let a = 0; a < i; a++) {
                let s = (i - 1 - a) * t * 4,
                    o = a * t * 4;
                for (let t = 0; t < r; t++) n[o + t] = e[s + t]
            }
            return n
        }
    }).gClassName = "JackfruitReview", ee = t(($ = De).prototype, "title_img", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), te = t($.prototype, "room_name", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ie = t($.prototype, "self_cards", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), ne = t($.prototype, "other_cards", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), re = t($.prototype, "public_cards", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), ae = t($.prototype, "self_card_types", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), se = t($.prototype, "other_card_types", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), oe = t($.prototype, "score_list", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), le = t($.prototype, "score_num_list", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), ce = t($.prototype, "score_img", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), he = t($.prototype, "all_win_list", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), ue = t($.prototype, "seat", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), _e = t($.prototype, "fold_card_panel", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), de = t($.prototype, "btn_screenshot", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ge = t($.prototype, "view_panle", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pe = t($.prototype, "view_panle_empty", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), fe = t($.prototype, "button_panel", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), me = t($.prototype, "btn_first", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), be = t($.prototype, "btn_last", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ye = t($.prototype, "btn_before", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Se = t($.prototype, "btn_next", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), we = t($.prototype, "txt_page", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ce = t($.prototype, "gameSceneInstance", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ve = t($.prototype, "gameDataInstance", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = $)) || Q));
    n._RF.pop()
}