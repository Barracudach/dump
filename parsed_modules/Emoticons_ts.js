import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as t from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as m from "./mttconfig.js";
import * as l from "./Pb.js";
import * as _ from "./GameEmoticons_ts.js";
import * as g from "./Holdem_Basic_Item.js";
import * as u from "./AppConfig.js";

function main() {
    var p, I, A, E, N, h, k, O, M, T, d, v, b;
    t._RF.push({}, "3254fBLjSZGNbEXhjlZiZsu", "Emoticons_ts", void 0);
    const {
        ccclass: f,
        property: y
    } = r;
    e("Emoticons", (p = y(n), I = y(a), A = y(n), E = y(n), N = y(c), f(((b = class e extends g {
        constructor(...e) {
            super(...e), o(this, "background", O, this), o(this, "animation", M, this), o(this, "animate", T, this), o(this, "chargeNode", d, this), o(this, "money", v, this), this._GameEmoticons = null
        }
        start() {}
        setAnimationCallBack() {
            this.animation.on(a.EventType.FINISHED, (function(e) {
                this.node.active = !1, this.node.destroy()
            }), this)
        }
        onEmoticonsClicked() {
            null != this._GameEmoticons && (cc_mtt.vv.DataManager.gameViewType == l.commonProto.MTT_GAME_MODE.PP ? (cc_mtt.vv.ConsoleLog.log("pineapple game emoji icon"), require(m.PineappleGame)._pineappleNetwork.requestEmoji({
                roomId: require(m.PineappleGame)._currentRoomID,
                body: this.node.name
            })) : cc_mtt.vv.DataManager.gameViewType != l.commonProto.MTT_GAME_MODE.NLH && cc_mtt.vv.DataManager.gameViewType != l.commonProto.MTT_GAME_MODE.OMAHA && cc_mtt.vv.DataManager.gameViewType != l.commonProto.MTT_GAME_MODE.SHORT_DECK || (cc_mtt.vv.ConsoleLog.log("holdem game emoji icon"), this.holdemRoom.store.sendEmojiReq(this.node.name)), u.Instance.isLandscapeLayout || this._GameEmoticons.getComponent(_).onClose()), cc_mtt.vv.ConsoleLog.log(this.node.name)
        }
        setIcon(i) {
            this.node.name = i, this.node.active = !0;
            let o = this.animation,
                t = 0;
            switch (i) {
                case e.EMOTICON_ANIMATION.YEAH:
                case e.EMOTICON_ANIMATION.GUN:
                case e.EMOTICON_ANIMATION.SMIRK:
                    t = 0;
                    break;
                case e.EMOTICON_ANIMATION.SURRENDER:
                    t = 22 / 60;
                    break;
                case e.EMOTICON_ANIMATION.HIP:
                    t = 65 / 60;
                    break;
                case e.EMOTICON_ANIMATION.SWEAT:
                    t = 35 / 60;
                    break;
                case e.EMOTICON_ANIMATION.CRY:
                case e.EMOTICON_ANIMATION.HAPPY:
                    t = 0;
                    break;
                case e.EMOTICON_ANIMATION.ANGRY:
                    t = 1;
                    break;
                case e.EMOTICON_ANIMATION.PROVOCATIVE:
                case e.EMOTICON_ANIMATION.AFRAID:
                case e.EMOTICON_ANIMATION.SMILE:
                    t = 0
            }
            o.on(a.EventType.PLAY, (() => {
                o.off(a.EventType.PLAY)
            })), o.play(i), o.getState(i).setTime(t)
        }
        playEmoticon(e) {
            this.node.name = e, this.node.active = !0, this.animation.play(e)
        }
        playEmoticonAudio(e) {
            if ("" != e && (cc_mtt.vv.ConsoleLog.log("Emoticon icon sfx : ", e), s(this.holdemRoom))) {
                let i = this.getAudioURL(e);
                this.holdemRoom.audioPlayer.playEffect(i, this.holdemRoom.store)
            }
        }
        getAudioURL(e) {
            let i = "zh_CN/game/dzpoker/audio/";
            switch (e) {
                case "afraid_king":
                    i += "voice_5";
                    break;
                case "angry_king":
                    i += "voice_3";
                    break;
                case "cry_king":
                    i += "voice_1";
                    break;
                case "gun_king":
                    i += "voice_8";
                    break;
                case "happy_king":
                    i += "voice_2";
                    break;
                case "hip_king":
                    i += "voice_11";
                    break;
                case "provocative_king":
                    i += "voice_4";
                    break;
                case "smile_king":
                    i += "voice_6";
                    break;
                case "smirking_king":
                    i += "voice_9";
                    break;
                case "surrender_king":
                    i += "voice_10";
                    break;
                case "sweat_king":
                    i += "voice_12";
                    break;
                case "yeah_king":
                    i += "voice_7"
            }
            return i
        }
    }).EMOTICON_ANIMATION = {
        YEAH: "yeah_king",
        GUN: "gun_king",
        SMIRK: "smirking_king",
        SURRENDER: "surrender_king",
        HIP: "hip_king",
        SWEAT: "sweat_king",
        CRY: "cry_king",
        HAPPY: "happy_king",
        ANGRY: "angry_king",
        PROVOCATIVE: "provocative_king",
        AFRAID: "afraid_king",
        SMILE: "smile_king"
    }, O = i((k = b).prototype, "background", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = i(k.prototype, "animation", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = i(k.prototype, "animate", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = i(k.prototype, "chargeNode", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = i(k.prototype, "money", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = k)) || h));
    t._RF.pop()
}