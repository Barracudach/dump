import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as f from "./cv.js";
import * as h from "./GameSceneInstance.js";
import * as p from "./GameJackPotNormalController.js";
import * as k from "./GameJackpotFallingMarsController.js";

function main() {
    var m, u, _, P, d, J, g, E, C, b, j, A, w, y;
    o._RF.push({}, "fe7af2mX6RMGL77fYTxvKga", "GameJackPotEventController", void 0);
    const {
        ccclass: v,
        property: M
    } = c;
    t("default", (m = M(i), u = M(i), _ = M(n), P = M(n), d = h("GameDataInstance"), J = h(), v((C = e((E = class extends s {
        constructor(...t) {
            super(...t), a(this, "normalJackpotEffectPrefab", C, this), a(this, "fallingMarsJackpotEffectPrefab", b, this), a(this, "fallingMarsJackpotEffectClipPortrait", j, this), a(this, "fallingMarsJackpotEffectClipLandscape", A, this), a(this, "gameDataInstance", w, this), a(this, "gameSceneInstance", y, this), this._jackpotInfos = [], this._jackPotEffectNode = null, this._jackPotAnim = null, this._moveAction = null, this._showPlayerJackpotAction = null, this._showJackpotActionFunc = null, this._mainPool = null, this._jackPotPanel = null, this._mainCamera = null
        }
        init() {
            this._addEvent();
            this.gameSceneInstance.room.gameScene
        }
        setEffectCamera(t) {
            this._mainCamera = t
        }
        setChipMoveAction(t, e, a) {
            this._moveAction = t, this._jackPotPanel = e, this._mainPool = a
        }
        setShowPlayerJackpotAction(t) {
            this._showPlayerJackpotAction = t
        }
        setShowJackpotActionFunc(t) {
            this._showJackpotActionFunc = t
        }
        resetJackpot() {
            this._jackPotEffectNode && (this._jackPotAnim.stop(), l.stopAllByTarget(this._jackPotEffectNode), this._jackPotEffectNode.removeFromParent(), this._jackPotEffectNode.destroy(), this._jackPotEffectNode = null), this._jackpotInfos = []
        }
        onDestroy() {
            this._removeEvent()
        }
        _addEvent() {
            f.MessageCenter.register("show_hit_jackPotCardType", this._showHitJackPotCardType.bind(this), this.node)
        }
        _removeEvent() {
            f.MessageCenter.unregister("show_hit_jackPotCardType", this.node)
        }
        _showJackpotAction() {
            0 !== this._jackpotInfos.length && null === this._jackPotEffectNode && (1 === this._jackpotInfos.length ? this._showNormalJackPotEffect() : this._showFallingMarsJackPotEffect())
        }
        _showNormalJackPotEffect() {
            let t = this._jackpotInfos[0];
            if (this.gameDataInstance.tRoomData.GetTablePlayer(t.award_playid)) {
                this._createJackPotEffect(this.normalJackpotEffectPrefab);
                const e = this._jackPotEffectNode.getComponent(p);
                this._jackPotAnim = e.anim, e.init(t), e.playAnim(), e.setOnAnimationCompleted(this._onJackpotAnimationComplete.bind(this)), this._showJackpotActionFunc()
            }
        }
        _showFallingMarsJackPotEffect() {
            let t = this._jackpotInfos;
            this._createJackPotEffect(this.fallingMarsJackpotEffectPrefab);
            const e = this._jackPotEffectNode.getComponent(k);
            this._jackPotAnim = e.anim, e.init(t), e.setupMainCameraAnim(this._mainCamera);
            const a = f.appConfig.isLandscapeLayout ? this.fallingMarsJackpotEffectClipLandscape : this.fallingMarsJackpotEffectClipPortrait;
            e.playAnim(a), e.setOnAnimationCompleted(this._onJackpotAnimationComplete.bind(this)), this._showJackpotActionFunc()
        }
        _showHitJackPotCardType() {
            let t = f.GameDataManager.tJackPot.noticeJackPotAwardInfo.awardInfo;
            f.StringTools.deepCopy(t, this._jackpotInfos), this._moveAction(this._jackPotPanel, this._mainPool, 0, this._showJackpotAction.bind(this))
        }
        _createJackPotEffect(t) {
            this._jackPotEffectNode = r(t), this.node.addChild(this._jackPotEffectNode)
        }
        _onJackpotAnimationComplete() {
            null !== this._jackPotEffectNode && (this.resetJackpot(), this._showPlayerJackpotAction())
        }
    }).prototype, "normalJackpotEffectPrefab", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = e(E.prototype, "fallingMarsJackpotEffectPrefab", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = e(E.prototype, "fallingMarsJackpotEffectClipPortrait", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = e(E.prototype, "fallingMarsJackpotEffectClipLandscape", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = e(E.prototype, "gameDataInstance", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = e(E.prototype, "gameSceneInstance", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = E)) || g));
    o._RF.pop()
}