import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as v from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as f from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as b from "./cc.js";
import * as p from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as I from "./cv.js";
import * as M from "./GameSceneInstance.js";
import * as y from "./GameSceneInstance.js";

function main() {
    var k, _, S, A, w, T, O, x, z, N, D, R, L, E, U, V, F, K;
    i._RF.push({}, "ef797MXiplFNaJgCeU31Nvz", "Commentator", void 0);
    const {
        ccclass: P,
        property: j
    } = h;
    e("default", (k = j(a), _ = j(a), S = j(a), A = j(l), w = j(o), T = j(s), O = j(o), x = M("GameDataInstance"), P((D = t((N = class extends r {
        constructor(...e) {
            super(...e), n(this, "spOff", D, this), n(this, "spOn", R, this), n(this, "spIcon", L, this), n(this, "txtChannel", E, this), n(this, "animNode", U, this), n(this, "btnTalk", V, this), n(this, "channelSetting", F, this), this.role = 0, this.openMike = !1, this.volume = 0, this.anim = null, this.audioChannels = [], this.audioChannelKeys = ["mute", "ch", "en", "yn", "th", "ab", "hd"], this.audioChannel = 0, this.audioChannelMute = 0, this.channelItems = [], this.itemColor1 = u(59, 59, 59, 255), this.itemColor2 = u(160, 160, 160, 255), n(this, "gameDataInstance", K, this)
        }
        onLoad() {
            this.role = 0, this.openMike = !1, this.volume = 0, this.btnTalk.node.on(s.EventType.CLICK, this.onTalk, this), this.anim = this.animNode.getComponent(c), m("layer_touch", this.node).on(o.EventType.TOUCH_END, function(e) {
                this.channelSetting.active = !1
            }.bind(this))
        }
        onTalk(e) {
            if (this.btnTalk.interactable = !1, p(this.btnTalk.node).delay(.5).call((() => {
                    this.btnTalk.interactable = !0
                })).start(), 2 == this.role) I.gameNet.requestOpenMike(y.getInstanceRoomId(null == this ? void 0 : this.node), this.openMike ? 0 : 1);
            else if (1 == this.role) {
                let e = this.audioChannels.length;
                if (e > 1) this.channelSetting.active = !this.channelSetting.active;
                else if (1 == e) {
                    let e = this.audioChannel == this.audioChannelMute ? this.audioChannels[0] : this.audioChannelMute;
                    this.onAudioChannel(e)
                }
            }
        }
        setRole(e, t = null) {
            0 == this.role ? (this.role = 2 == e ? 2 : 1, this.audioChannels = null != t ? t : [], this.updateChannelSetting()) : console.log("setRole::已经设置角色")
        }
        getRole() {
            return this.role
        }
        setViewStyle(e) {
            let t = m("view_1", this.node),
                n = m("view_2", this.node),
                i = null;
            1 == e ? (t.active = !0, n.active = !1, i = t) : (t.active = !1, n.active = !0, i = n), this.spIcon = m("sprite_Icon", i).getComponent(a), this.spOff = m("sprite_off", i).getComponent(a), this.spOn = m("sprite_on", i).getComponent(a)
        }
        isEnableMike() {
            return this.openMike
        }
        enableMike(e) {
            this.openMike = e, this.spOff.node.active = !e, this.audioChannels.length > 1 ? (this.spOn.node.active = !1, this.spIcon.node.active = e, this.txtChannel.node.active = e) : (this.spOn.node.active = e, this.spIcon.node.active = !1, this.txtChannel.node.active = !1)
        }
        setAudioVolume(e) {
            if (e = e > 0 ? 1 : 0, this.volume != e)
                if (e > 0) {
                    this.animNode.active = !0, this.anim.play();
                    let e = this.anim.getState(this.anim.defaultClip.name);
                    e.wrapMode = d.WrapMode.Loop, e.repeatCount = 1 / 0, this.volume = 1
                } else this.animNode.active = !1, this.anim.stop(), this.volume = 0
        }
        getAudioVolume() {
            return this.volume
        }
        updateChannelSetting() {
            let e = this.audioChannels.length;
            if (e <= 1) return;
            let t = m("channel_mute", this.channelSetting);
            t.on("click", (() => {
                this.onAudioChannel(this.audioChannelMute)
            }), this), this.channelItems.push(t);
            let n = m("channel_list", this.channelSetting).getComponent(C),
                i = m("channel_item_1", n.content).getComponent(g).height,
                a = 0,
                o = 0,
                h = [!1, !1, !1, !1, !1, !1];
            for (let t = 0; t < e; ++t) {
                let e = this.audioChannels[t],
                    r = m("channel_item_" + e, n.content);
                r && (++o, h[e - 1] = !0, m("num", r).getComponent(l).string = "" + (t + 1), a -= .5 * i, r.setPosition(f(0, a, 0)), r.active = !0, a -= .5 * i + 30, r.on(s.EventType.CLICK, (() => {
                    this.onAudioChannel(e)
                }), this)), this.channelItems.push(r)
            }
            for (let e = 0; e < h.length; ++e)
                if (!h[e]) {
                    m("channel_item_" + (e + 1), n.content).active = !1
                } let r = (i + 30) * o - 30;
            n.content.getComponent(g).height = r, r = o > 4 ? 4 * (i + 30) - 30 : r, n.content.parent.getComponent(g).height = r, n.content.parent.getComponent(b).enabled = o > 4, n.node.getComponent(g).height = r
        }
        onAudioChannel(e) {
            this.enableMike(e != this.audioChannelMute), this.setAudioChannel(e), this.channelSetting.active = !1
        }
        getAudioChannelIndex(e) {
            for (let t = this.audioChannels.length - 1; t >= 0; --t)
                if (this.audioChannels[t] == e) return t;
            return -1
        }
        enableAllChannelItems() {
            for (let e = this.channelItems.length - 1; e >= 0; --e) this.enableChannelItem(this.channelItems[e], !0)
        }
        enableChannelItem(e, t) {
            null != e && (e.getComponent(s).interactable = t, m("num", e) && (m("num", e).getComponent(v).color = t ? this.itemColor1 : this.itemColor2))
        }
        setAudioChannel(e) {
            if (0 != this.role) {
                if (this.audioChannel = e, this.enableAllChannelItems(), e == this.audioChannelMute) this.enableChannelItem(this.channelItems[0], !1), this.txtChannel.getComponent(l).string = "";
                else {
                    let t = this.getAudioChannelIndex(e);
                    this.txtChannel.getComponent(l).string = "" + (t + 1), t >= 0 && this.enableChannelItem(this.channelItems[t + 1], !1)
                }
                I.MessageCenter.send("commentatorChannel", {
                    msg: e,
                    gameData: this.gameDataInstance
                })
            }
        }
        getAudioChannel() {
            return this.audioChannel
        }
    }).prototype, "spOff", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = t(N.prototype, "spOn", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = t(N.prototype, "spIcon", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = t(N.prototype, "txtChannel", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = t(N.prototype, "animNode", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = t(N.prototype, "btnTalk", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = t(N.prototype, "channelSetting", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = t(N.prototype, "gameDataInstance", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = N)) || z));
    i._RF.pop()
}