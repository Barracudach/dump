import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as R from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as P from "./cc.js";
import * as s from "./cc.js";
import * as E from "./cc.js";
import * as n from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as p from "./cc.js";
import * as a from "./cc.js";
import * as _ from "./Holdem_View.js";
import * as A from "./ResourcesLoader.js";
import * as O from "./soundEffect.js";
import * as T from "./PreloadProgress.js";
import * as L from "./Translator.js";
import * as H from "./mttconfig.js";
import * as S from "./MTTConnector.js";

function main() {
    var M, y, D, I, u, c;
    a._RF.push({}, "6d5576aVEhN8KfbwfdkV6aV", "Holdem_View_Web", void 0);
    const {
        ccclass: C,
        property: g
    } = r;
    t("default", (M = g(p), y = g(p), C((u = e((I = class extends _ {
        constructor(...t) {
            super(...t), o(this, "preloadProgressPrefab", u, this), o(this, "preloadPrefabList", c, this), this.preloadProgress = null, this.loadedURL = [], this.delayLoadPrefabTimeout = null, this.preloadURL = [{
                type: p,
                path: A.RES_PATH.PREFAB.COMMON.DIALOG_BOX
            }, {
                type: p,
                path: A.RES_PATH.PREFAB.COMMON.DIALOG_BOX_LANDSCAPE
            }, {
                type: p,
                path: A.RES_PATH.PREFAB.HOLDEM.GAME_END_POP_UP
            }, {
                type: p,
                path: A.RES_PATH.PREFAB.HOLDEM.GAME_OVER_WINDOW
            }, {
                type: p,
                path: A.RES_PATH.PREFAB.HOLDEM.GAME_END_POP_UP_REVIEW
            }, {
                type: p,
                path: A.RES_PATH.PREFAB.HOLDEM.GAME_ROUND_REVIEW_HAND
            }, {
                type: p,
                path: A.RES_PATH.PREFAB.HOLDEM.GAME_ROUND_REVIEW_PAGE
            }, {
                type: p,
                path: A.RES_PATH.PREFAB.HOLDEM.REAL_TIME_RECORD_ROW
            }, {
                type: p,
                path: A.RES_PATH.PREFAB.COMMON.VISITOR
            }, {
                type: p,
                path: A.RES_PATH.PREFAB.COMMON.SIGNUP_WITH_TOOLS_BLOCKER
            }, {
                type: p,
                path: A.RES_PATH.PREFAB.COMMON.PLAYER_SETTING
            }, {
                type: p,
                path: A.RES_PATH.PREFAB.HOLDEM.EMOTICONS
            }, {
                type: p,
                path: A.RES_PATH.PREFAB.HOLDEM.EMOTICONS_LIST
            }, {
                type: s,
                path: A.RES_PATH.SPRITE.HOLDEM.GAMBLING_CHIP
            }, {
                type: s,
                path: A.RES_PATH.SPRITE.HOLDEM.GAMBLING_CHIP_BIG
            }, {
                type: s,
                path: A.RES_PATH.SPRITE.HOLDEM.GAMBLING_CHIP_SMALL
            }, {
                type: s,
                path: A.RES_PATH.SPRITE.HOLDEM.MODE_HUNTERGAME
            }, {
                type: s,
                path: A.RES_PATH.SPRITE.HOLDEM.MODE_MTT
            }, {
                type: s,
                path: A.RES_PATH.SPRITE.HOLDEM.MODE_AOF
            }, {
                type: s,
                path: A.RES_PATH.SPRITE.HOLDEM.MODE_SNG
            }, {
                type: s,
                path: A.RES_PATH.SPRITE.HOLDEM.MODE_OMAHA
            }, {
                type: s,
                path: A.RES_PATH.SPRITE.HOLDEM.MODE_SHORTCARD
            }, {
                type: s,
                path: A.RES_PATH.SPRITE.HOLDEM.MODE_AIPT
            }, {
                type: p,
                path: A.RES_PATH.PREFAB.COMMON.PLAYER_SETTING
            }, {
                type: p,
                path: A.RES_PATH.PREFAB.COMMON.BIG_WIN
            }, {
                type: p,
                path: A.RES_PATH.PREFAB.COMMON.ATTACK_ICON
            }, {
                type: p,
                path: A.RES_PATH.PREFAB.COMMON.ATTACK_ICON_LIST
            }, {
                type: i,
                path: O.BoardCardDelivered
            }, {
                type: i,
                path: O.PlayerSitDown
            }, {
                type: i,
                path: O.PlayerStandUp
            }, {
                type: i,
                path: O.Check
            }, {
                type: i,
                path: O.ChipsToPot
            }, {
                type: i,
                path: O.ChipsToTable
            }, {
                type: i,
                path: O.DealCard
            }, {
                type: i,
                path: O.Fold
            }, {
                type: i,
                path: O.PlayerEnter
            }, {
                type: i,
                path: O.PlayerExit
            }, {
                type: i,
                path: O.PlayerTurn
            }, {
                type: i,
                path: O.SendAudio
            }, {
                type: i,
                path: O.GetProfit
            }, {
                type: i,
                path: O.TimeOverTip
            }, {
                type: i,
                path: O.SlideBarScroll
            }, {
                type: i,
                path: O.Silent
            }, {
                type: i,
                path: A.RES_PATH.AUDIO.HOLDEM.AFRAID_KING
            }, {
                type: i,
                path: A.RES_PATH.AUDIO.HOLDEM.ANGRY_KING
            }, {
                type: i,
                path: A.RES_PATH.AUDIO.HOLDEM.CRY_KING
            }, {
                type: i,
                path: A.RES_PATH.AUDIO.HOLDEM.GUN_KING
            }, {
                type: i,
                path: A.RES_PATH.AUDIO.HOLDEM.HAPPY_KING
            }, {
                type: i,
                path: A.RES_PATH.AUDIO.HOLDEM.HIP_KING
            }, {
                type: i,
                path: A.RES_PATH.AUDIO.HOLDEM.PROVOCATIVE_KING
            }, {
                type: i,
                path: A.RES_PATH.AUDIO.HOLDEM.SMILE_KING
            }, {
                type: i,
                path: A.RES_PATH.AUDIO.HOLDEM.SMIRKING_KING
            }, {
                type: i,
                path: A.RES_PATH.AUDIO.HOLDEM.SURRENDER_KING
            }, {
                type: i,
                path: A.RES_PATH.AUDIO.HOLDEM.SWEAT_KING
            }, {
                type: i,
                path: A.RES_PATH.AUDIO.HOLDEM.YEAH_KING
            }], this.loadedCount = 0, this.redownloadCount = 0, this.sceneName = "holdemFeature", this.retry = () => {
                this.redownloadCount = 0, this.loadedCount = this.loadedURL.length, this.preloadPrefab()
            }
        }
        start() {
            S.instance.enterScene(this.node, this.sceneName), cc_mtt.vv.AssetsManager.popupParent = this.node, H.writeWebLog && A.instance.loadRes("mtt/upload_web_log/UploadLog", p, null, ((t, e) => {
                if (!t) {
                    let t = n(e);
                    t.parent = l.getScene().getComponentInChildren(h).node, t.setPosition(new d(this.node.getComponent(E).width * this.node.getComponent(E).anchorX - t.getComponent(E).width * t.getComponent(E).anchorX - 50, 0 - this.node.getComponent(E).height * this.node.getComponent(E).anchorY + t.getComponent(E).height * t.getComponent(E).anchorY + 50, 0))
                }
            })), this.showPreloadProgress(), this.preloadPrefab()
        }
        onDestroy() {
            clearTimeout(this.delayLoadPrefabTimeout)
        }
        setStatusBar(t) {}
        showPreloadProgress() {
            let t = n(this.preloadProgressPrefab);
            t.parent = this.node, t.setPosition(P(d.ZERO)), this.preloadProgress = t.getComponent(T)
        }
        writeProgress(t) {
            this.preloadProgress.setProgress(Math.floor(100 * t))
        }
        loadPrefab() {
            super.loadPrefab(), R(this.preloadProgress, !0) && R(this.preloadProgress.node, !0) && (this.preloadProgress.node.active = !1)
        }
        preloadPrefab() {
            cc_mtt.vv.ConsoleLog.log("Holdem_View_Web loadpreloadPrefabed", this.loadedCount);
            for (let t = 0; t < this.preloadURL.length; t++) - 1 == this.loadedURL.indexOf(this.preloadURL[t].path) && A.instance.loadRes(this.preloadURL[t].path, this.preloadURL[t].type, null, ((e, o) => {
                if (this.loadedCount++, e || (this.loadedURL || (this.loadedURL = []), this.loadedURL.push(this.preloadURL[t].path), cc_mtt.vv.ConsoleLog.log("Holdem_View_Web loaded", this.preloadURL[t].path, this.loadedCount, this.loadedURL.length, this.preloadURL.length), this.writeProgress(this.loadedURL.length / this.preloadURL.length)), this.loadedCount >= this.preloadURL.length)
                    if (this.loadedURL.length != this.preloadURL.length)
                        if (this.redownloadCount < 5) this.loadedCount = this.loadedURL.length, cc_mtt.vv.ConsoleLog.error("cannot load", this.preloadURL, this.loadedURL, this.loadedCount, this.redownloadCount), this.redownloadCount++, this.preloadPrefab();
                        else {
                            let t = {
                                Translation: "LOADER.DATA_FAILED",
                                payload: t => L(t) + "\n" + e.message
                            };
                            cc_mtt.vv.AssetsManager.showDialogBox("ERROR_CODE_PKW.TITLE", t, !1, [{
                                type: 0,
                                text: "MESSAGE_DIALOG_BLOCKER.RETRY",
                                callback: this.retry
                            }]), cc_mtt.vv.ConsoleLog.log("Holdem_View_Web redownloadCount", this.redownloadCount, e)
                        }
                else clearTimeout(this.delayLoadPrefabTimeout), this.delayLoadPrefabTimeout = setTimeout((() => {
                    this.loadPrefab()
                }), 1)
            }), !1)
        }
    }).prototype, "preloadProgressPrefab", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), c = e(I.prototype, "preloadPrefabList", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), D = I)) || D));
    a._RF.pop()
}