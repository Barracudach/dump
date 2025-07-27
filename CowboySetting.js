import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as r from "./SettingToggleSwitchHandler.js";
import * as f from "./Enum.js";
import * as d from "./i18nText.js";
import * as h from "./cv.js";
import * as _ from "./GameSceneInstance.js";
import * as b from "./MiniGameSoundManager.js";

function main() {
    var m, g, p, C, y, S, E, M, k, w, G, I, O, L;
    i._RF.push({}, "728d70N0KZOD6jFjfe2citi", "CowboySetting", void 0);
    const {
        ccclass: T,
        property: v
    } = c;
    e("CowboySetting", (m = v(o), g = v(o), p = v(r), C = v(r), y = v(s), S = v(s), T((k = t((M = class extends l {
        constructor(...e) {
            super(...e), n(this, "btn_confirm", k, this), n(this, "btn_close", w, this), n(this, "ctl_effect", G, this), n(this, "ctl_music", I, this), n(this, "snd_effect_label", O, this), n(this, "snd_music_label", L, this), this._isMusicEnabled = !0, this._isSoundEffectEnabled = !0
        }
        onLoad() {
            this._isMusicEnabled = h.tools.IsMiniGameMusicOn(), this._isSoundEffectEnabled = h.tools.IsMiniGameSoundEffectOn(), this.initSwitch(), this.btn_confirm.node.on(o.EventType.CLICK, (e => {
                this.ctl_effect.getChecked() && b.playButtonSound("button_click"), this.confirm()
            }), this), this.btn_close.node.on(o.EventType.CLICK, (e => {
                this.ctl_effect.getChecked() && b.playButtonSound("close"), this.close()
            }), this)
        }
        initTxtConfirm() {
            let e = h.config.getCurrentLanguage();
            if (null == this.btn_confirm || null == this.btn_confirm.node || e == f.zh_CN) return;
            if (h.appConfig.getGameConfig().miniGameConfig.useOnlyEnglish) {
                let e = this.btn_confirm.node.children.length;
                for (let t = 0; t < e; t++) {
                    let e = this.btn_confirm.node.children[t];
                    if (e) {
                        let t = e.getComponent(d);
                        t && t.setOptionUseEngTextOnly(!0)
                    }
                }
            }
            const t = [this.snd_music_label, this.snd_effect_label],
                n = a("popup/Title", this.node);
            n && t.push(n.getComponent(s));
            for (const e of t)
                if (e) {
                    const t = e.node.getComponent(d);
                    t && t.setOptionUseEngTextOnly(!0)
                }
        }
        close() {
            this.node.active = !1
        }
        initSwitch() {
            this.ctl_music.setChecked(h.tools.IsMiniGameMusicOn()), this.ctl_effect.setChecked(h.tools.IsMiniGameSoundEffectOn()), this.changeLabelColor(this.snd_music_label, this.ctl_music.getChecked()), this.changeLabelColor(this.snd_effect_label, this.ctl_effect.getChecked())
        }
        changeLabelColor(e, t) {
            null != e && (e.node.getComponent(u).opacity = t ? 255 : 125)
        }
        onEffectSwitched() {
            this.ctl_effect.getChecked() && b.playButtonSound("tab"), this.changeLabelColor(this.snd_effect_label, this.ctl_effect.getChecked())
        }
        onMusicSwitched() {
            this.ctl_effect.getChecked() && b.playButtonSound("tab"), this.changeLabelColor(this.snd_music_label, this.ctl_music.getChecked())
        }
        confirm() {
            const e = this.ctl_music.getChecked(),
                t = this.ctl_effect.getChecked();
            switch (h.tools.SetMiniGameMusicOn(e), h.tools.SetMiniGameSoundEffectOn(t), _.getInstanceGameId(null == this ? void 0 : this.node)) {
                case h.Enum.GameId.CowBoy:
                    h.MessageCenter.send("on_minigame_background_music_enable_updated", e), h.MessageCenter.send("on_minigame_effect_enable_updated", t);
                    break;
                case h.Enum.GameId.VideoCowboy:
                    h.tools.setSoundEffect(t), h.tools.SetPlayMusic(e), h.MessageCenter.send("on_cowboy_sound_switch_notify");
                    break;
                case h.Enum.GameId.HumanBoy:
                    h.tools.setSoundEffect(t), h.tools.SetPlayMusic(e), h.MessageCenter.send("on_humanboy_sound_switch_notify");
                    break;
                case h.Enum.GameId.PokerMaster:
                    h.MessageCenter.send("on_minigame_background_music_enable_updated", e), h.MessageCenter.send("on_minigame_effect_enable_updated", t)
            }
            this.close()
        }
    }).prototype, "btn_confirm", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = t(M.prototype, "btn_close", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = t(M.prototype, "ctl_effect", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = t(M.prototype, "ctl_music", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = t(M.prototype, "snd_effect_label", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = t(M.prototype, "snd_music_label", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = M)) || E));
    i._RF.pop()
}