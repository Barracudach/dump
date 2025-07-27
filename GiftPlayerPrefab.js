import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as _ from "./cc.js";
import * as l from "./cc.js";
import * as P from "./cc.js";
import * as S from "./cc.js";
import * as f from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as I from "./ImpokerHall.js";
import * as v from "./mttconfig.js";
import * as b from "./mttconfig.js";
import * as T from "./NodePage.js";
import * as y from "./GiftPlayerTuple.js";
import * as L from "./Translator.js";
import * as N from "./worldWebsocket.js";
import * as w from "./Pb.js";
import * as G from "./AndroidBackButton.js";
import * as C from "./CommonTools.js";

function main() {
    var E, k, B, D, O, R, A, M, H, U, F, x, V, z, W, K, q, Y, Z, j, Q, J;
    o._RF.push({}, "34585uppKtCPbTCW8CPBPKQ", "GiftPlayerPrefab", void 0);
    const {
        ccclass: X,
        property: $
    } = u;
    t("GiftPlayerPrefab", (E = $(s), k = $(l), B = $(a), D = $(a), O = $(n), R = $(a), A = $(r), M = $(h), H = $(c), U = $(p), X((V = e((x = class extends d {
        constructor(...t) {
            super(...t), i(this, "avatar", V, this), i(this, "defaultAvatar", z, this), i(this, "playerName", W, this), i(this, "playerId", K, this), i(this, "giftGoldInput", q, this), i(this, "remainGold", Y, this), i(this, "scrollView", Z, this), i(this, "tuplePrefab", j, this), i(this, "emptyMessage", Q, this), i(this, "handselButton", J, this), this.returnPage = null, this._hallScript = void 0, this.dataList = [], this._tupleHeight = 0, this.spawnNum = 8, this.spacing = 3, this.tuples = [], this.updateTimer = 0, this.updateInterval = .2, this.bufferZone = 0, this.lastContentPosY = 0, this.toolList = [], this.toolsSelected = [], this._player = void 0
        }
        onLoad() {
            this._hallScript = C.instance.getParentScene(g, this.node).getComponentInChildren(I), this._tupleHeight = this.tuplePrefab.data.height
        }
        start() {
            this.node.on(v.selectGiftToolsEvent, (t => {
                this.handleToolsSelected(t.getUserData()), t.propagationStopped = !0
            }))
        }
        update(t) {
            this.updateTimer += t, this.updateTimer > this.updateInterval && (this.updateTimer = 0, this.lastContentPosY = this.updateTuplesPosition(this.toolList, this.tuples, this.scrollView, this.lastContentPosY))
        }
        updateTuplesPosition(t, e, i, o) {
            let s = i.content.position.y < o,
                l = (this._tupleHeight + this.spacing) * e.length;
            for (let o = 0; o < e.length; o++) {
                let a = T.getPositionInView(e[o], i.node);
                if (s) {
                    if (a.y < -this.bufferZone && e[o].position.y + l < 0) {
                        e[o].position = new f(e[o].position.x, e[o].position.y + l, e[o].position.z);
                        let i = e[o].getComponent(y),
                            s = i._tupleId - e.length;
                        i.setInfo(t[s], s, this.toolsSelected)
                    }
                } else if (a.y > this.bufferZone && e[o].position.y - l > -i.content.getComponent(m).height) {
                    e[o].position = new f(e[o].position.x, e[o].position.y - l, e[o].position.z);
                    let i = e[o].getComponent(y),
                        s = i._tupleId + e.length;
                    i.setInfo(t[s], s, this.toolsSelected)
                }
            }
            return i.content.position.y
        }
        addList(t, e = this.toolsSelected) {
            let i;
            this.scrollView.content.getComponent(m).height = (this._tupleHeight + this.spacing) * t.length - this.spacing, this.scrollView.content.position = new f(this.scrollView.content.position.x, this.scrollView.content.parent.getComponent(m).height / 2, this.scrollView.content.position.z), this.bufferZone = .5 * this.scrollView.node.getComponent(m).height + 1.5 * this._tupleHeight, this.emptyMessage.active = t.length <= 0;
            for (let o = 0; o < t.length && o < this.spawnNum; o++) i = _(this.tuplePrefab), i.parent = this.scrollView.content, i.setPosition(0, -this._tupleHeight * (.5 + o) - this.spacing * o), i.getComponent(y).setInfo(t[o], o, e), this.tuples.push(i)
        }
        removeList() {
            this.dataList = [], this.tuples = [], this.scrollView.content.destroyAllChildren()
        }
        sortList() {
            return cc_mtt.vv.DataManager.backPackTool.sort(((t, e) => e.Id - t.Id))
        }
        updateToolList(t) {
            cc_mtt.vv.DataManager.updateToolList((() => {
                P(this) && (this.toolList = this.sortList(), this.removeList(), this.addList(this.toolList), t instanceof Function && t())
            }))
        }
        setPage(t, e) {
            S.isNative && S.os === S.OS.ANDROID && G.getInstance().addBackFunction("GiftPlayerPrefab", this.onBackClicked.bind(this)), this._hallScript.showLoading(), this.returnPage = t, this._player = e.data, this.avatar.spriteFrame = e.avatar, this.playerName.string = this._player.nickname, this.playerId.string = L("PROFILE.ID") + this._player.userId, this.updateGold(), this.updateToolList((() => {
                this._hallScript.hidLoading()
            }))
        }
        resetPage() {
            this.removeList(), this.releaseImages(), this.avatar.spriteFrame = this.defaultAvatar, this.playerName.string = "", this.playerId.string = "", this.updateGold(!0), this.toolsSelected = [], this.giftGoldInput.string = ""
        }
        releaseImages() {
            for (let t of this.toolList) t.IconUrl && T.releaseImage(b.avatarHost + t.IconUrl)
        }
        updateGold(t = !1) {
            this.remainGold.string = t ? "0" : cc_mtt.vv.DataManager.userData.Gold
        }
        handleToolsSelected(t) {
            if (t >= 0) {
                this.toolsSelected.indexOf(Math.abs(t)) < 0 && this.toolsSelected.push(t)
            } else {
                let e = this.toolsSelected.indexOf(Math.abs(t));
                e >= 0 && this.toolsSelected.splice(e, 1)
            }
            cc_mtt.vv.ConsoleLog.log("Gift:ToolSelected:", this.toolsSelected)
        }
        refreshPage() {
            this._hallScript.showLoading(), this.updateGold(), this.toolsSelected = [], this.updateToolList((() => {
                this._hallScript.hidLoading((() => {
                    this._hallScript.getNewBagsCount(cc_mtt.vv.DataManager.backPackTool), this._hallScript.checkForNewBags()
                }))
            }))
        }
        sendHandselRequest(t) {
            if (N.checkNetwork("requestUserGift")) return cc_mtt.vv.ConsoleLog.log("Handsel::NoNetwork"), void this._hallScript.callPopUpBox("PERSONAL_SETTING.GENERAL.DIALOG.NETWORK_ERROR", (() => {}));
            this._hallScript.showLoading();
            let e = {
                FromUserId: cc_mtt.vv.DataManager.userId,
                ToUserId: this._player.userId,
                AssoId: cc_mtt.vv.DataManager.loginData.OwnAssociationId,
                Coins: t,
                ToolInBackpackIds: this.toolsSelected
            };
            cc_mtt.vv.DataManager.worldNetwork.requestUserGift(e, (t => {
                if (t.ErrorCode) {
                    let e = "";
                    e = t.ErrorCode === w.commonProto.ErrorCode.Temporary_Disabled ? "POPUP_HINTS.GIFT.TEMPORARY_DISABLED" : "ERROR_CODE_PKW." + t.ErrorCode, this._hallScript.hidLoading((() => {
                        this._hallScript.callPopUpBox(e, void 0)
                    }))
                } else this.updateGold(), this.toolsSelected = [], this.updateToolList((() => {
                    this._hallScript.hidLoading((() => {
                        this._hallScript.callPopUpBox("POPUP_HINTS.GIFT.HANDSEL_SUCCESSFUL", (() => {
                            this.onBackClicked()
                        }), "POPUP_TITLE.REMIND"), this._hallScript.getNewBagsCount(cc_mtt.vv.DataManager.backPackTool), this._hallScript.checkForNewBags()
                    }))
                }))
            }))
        }
        onHandselClicked() {
            if (T.coolDownButton(this.handselButton, this), N.checkNetwork("Gift::onHandselClicked") && cc_mtt.vv.DataManager.worldNetwork.stopAllConnect) return void this._hallScript.callPopUpBox("PERSONAL_SETTING.GENERAL.DIALOG.NETWORK_ERROR", (() => {}));
            let t, e = parseFloat(this.giftGoldInput.string);
            if (e = isNaN(e) ? 0 : Math.max(e, 0), e > 0) {
                if (e > cc_mtt.vv.DataManager.userData.Gold) return t = "GIFT.ABORT_MESSAGE.NOT_ENOUGH_COIN", void this._hallScript.callPopUpBox(t, void 0)
            } else if (this.toolsSelected.length <= 0) return t = "GIFT.ABORT_MESSAGE.NO_GIFT_SELECT", void this._hallScript.callPopUpBox(t, void 0);
            t = "POPUP_HINTS.GIFT.HANDSEL_CONFIRM", this._hallScript.callPopUpBoxWithTwoOptions(t, (() => {
                this.sendHandselRequest(e)
            }), void 0, "POPUP_TITLE.REMIND")
        }
        onEditEnded() {
            let t = parseFloat(this.giftGoldInput.string),
                e = isNaN(t) ? "0" : T.roundValue(Math.max(t, 0)).toString();
            this.giftGoldInput.string = e
        }
        onBackClicked() {
            S.isNative && S.os === S.OS.ANDROID && G.getInstance().removeBackFunction("GiftPlayerPrefab"), this._hallScript.controlHallBlockLayer(!0, this.name), this._hallScript.movePageToRight(this.node, this.returnPage, (() => {
                setTimeout((() => {
                    this.resetPage(), this._hallScript.controlHallBlockLayer(!1, this.name)
                }), 100 * this._hallScript.pageActionSpeed)
            }))
        }
    }).prototype, "avatar", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = e(x.prototype, "defaultAvatar", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = e(x.prototype, "playerName", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = e(x.prototype, "playerId", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = e(x.prototype, "giftGoldInput", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = e(x.prototype, "remainGold", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = e(x.prototype, "scrollView", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = e(x.prototype, "tuplePrefab", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = e(x.prototype, "emptyMessage", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = e(x.prototype, "handselButton", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = x)) || F));
    o._RF.pop()
}