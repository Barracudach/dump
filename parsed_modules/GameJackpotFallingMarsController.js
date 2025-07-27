import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as c from "./Particle_3D.js";
import * as p from "./cv.js";
import * as m from "./GameJackPotBaseController.js";
import * as h from "./JackpotData.js";
import * as y from "./AudioEngine.js";

function main() {
    var b, f, d, g, P, C, A, L, _, w, T, S, v, z, D, W, k, M, J, G, E, N, F, I;
    r._RF.push({}, "74672M/jVZAcbAsPPZK18rg", "GameJackpotFallingMarsController", void 0);
    const {
        ccclass: U,
        property: B
    } = s;
    e("default", (b = B(i), f = B(n), d = B(c), g = B([l]), P = B(o), C = B(o), A = B(o), L = B([o]), _ = B([o]), w = B([o]), T = B(o), U((z = t((v = class extends m {
        constructor(...e) {
            super(...e), a(this, "cameraAnimClip", z, this), a(this, "effectAudioClip", D, this), a(this, "particle3d", W, this), a(this, "marsPlayerNodes", k, this), a(this, "earthPlayerLabel", M, this), a(this, "earthPlayerCardTypeLabel", J, this), a(this, "earthPlayerWinAmountLabel", G, this), a(this, "marsPlayerLabels", E, this), a(this, "marsPlayerCardTypeLabels", N, this), a(this, "marsPlayerWinAmountLabels", F, this), a(this, "totalWinLabel", I, this), this._mainCameraAnim = null
        }
        init(e) {
            const t = e.filter((e => e.type === h.Earth))[0];
            this._setupEarthPlayer(t);
            const a = e.filter((e => e.type === h.Mars));
            this.marsPlayerNodes.forEach((e => {
                e.active = !1
            })), this._setupMarsPlayer(a);
            const r = e.reduce(((e, t) => e + t.award_amount), 0);
            this.totalWinLabel.string = p.StringTools.serverGoldToShowString(r)
        }
        setupMainCameraAnim(e) {
            const t = e.node.parent,
                a = t.getComponent(u);
            if (this._mainCameraAnim = a, !a) {
                const e = t.addComponent(u);
                this._mainCameraAnim = e, e.addClip(this.cameraAnimClip)
            }
        }
        playAnim(e) {
            this.node.active = !0, this.anim.play(e.name), this._mainCameraAnim.play("CameraShake_BigWinMars"), y.play(this.effectAudioClip, !1, 1, !1), this.particle3d.playParticles3D()
        }
        _setupEarthPlayer(e) {
            const t = e.award_player_name,
                a = p.config.getStringData(`UITitle${112+e.hand_level}`);
            this.earthPlayerLabel.string = t, this.earthPlayerCardTypeLabel.string = p.StringTools.formatC(p.config.getStringData("UIJackpotHitCardType"), a), this.earthPlayerWinAmountLabel.string = p.StringTools.serverGoldToShowString(e.award_amount)
        }
        _setupMarsPlayer(e) {
            for (let t = 0; t < e.length; t++) {
                const a = e[t].award_player_name,
                    r = p.config.getStringData(`UITitle${112+e[t].hand_level}`);
                this.marsPlayerLabels[t].string = a, this.marsPlayerCardTypeLabels[t].string = p.StringTools.formatC(p.config.getStringData("UIJackpotHitCardType"), r), this.marsPlayerWinAmountLabels[t].string = p.StringTools.serverGoldToShowString(e[t].award_amount), this.marsPlayerNodes[t].active = !0
            }
        }
    }).prototype, "cameraAnimClip", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = t(v.prototype, "effectAudioClip", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = t(v.prototype, "particle3d", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = t(v.prototype, "marsPlayerNodes", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), M = t(v.prototype, "earthPlayerLabel", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = t(v.prototype, "earthPlayerCardTypeLabel", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = t(v.prototype, "earthPlayerWinAmountLabel", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = t(v.prototype, "marsPlayerLabels", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), N = t(v.prototype, "marsPlayerCardTypeLabels", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), F = t(v.prototype, "marsPlayerWinAmountLabels", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), I = t(v.prototype, "totalWinLabel", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = v)) || S));
    r._RF.pop()
}