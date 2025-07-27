import * as e from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as n from "./Translator.js";
import * as r from "./httpApis.js";
import * as l from "./AndroidBackButton.js";
import * as h from "./CardRecordPrefab.js";
import * as d from "./CardRecordTupleMTTHallPrefab.js";
import * as c from "./Pb.js";
import * as u from "./mttconfig.js";
import * as _ from "./NodePage.js";
import * as p from "./NodeTools.js";

function main() {
    var m;
    e._RF.push({}, "ffbedx/7YpGF7lr7KiEYNpa", "CardRecordMTTHallPrefab", void 0);
    const {
        ccclass: g,
        property: R
    } = a;
    t("CardRecordMTTHallPrefab", g(m = class extends h {
        constructor(...t) {
            super(...t), this._userId = 0, this._userName = "", this._playerCount = 0, this._roomName = "", this._category = void 0, this._roomId = void 0, this._totalRounds = 0, this._playOnJoint = 0
        }
        updateHeaderLabel() {
            this.headerLabel && this._userName && (this.headerLabel.string = s.formatStr(n("PLAY_RECORD.TITLE_WITH_NAME"), this._userName))
        }
        decodeRoundData(t) {
            for (let e of t) e.GameRoundData = c.commonProto.Holdem_Record.decode(new Uint8Array(e.GameRoundData));
            return t
        }
        setData(t, e, s, i, a, n, r, h = 0) {
            o.isNative && o.os === o.OS.ANDROID && l.getInstance().addBackFunction("CardRecordPrefab", this.onBackClicked.bind(this)), this.gameResultId = t, this._gameMode = c.commonProto.MTT_GAME_MODE.NLH, this._userId = i, this._userName = a, this._playerCount = n, this._roomName = e, this._category = r, this._playOnJoint = h, this.replayAllButton.node.active = !0, this.setInfoDetail(e, s), this._hallScript.showLoading(), this.requestGameResultRounds(t).then((t => {
                this.dataList = this.decodeRoundData(t.GameDetailRounds), this._totalRounds = t.TotalRounds, this.addList(this.dataList), this._hallScript.hidLoading()
            })).catch((t => {
                this.addList([]), this._hallScript.hidLoading((() => {
                    this._hallScript.callPopUpBox(t, void 0)
                }))
            })), this.updateHeaderLabel()
        }
        requestGameResultRounds(t, e = this.dataList) {
            return new Promise(((s, o) => {
                let i = {
                    MttId: t,
                    UserId: this._userId,
                    offset: e.length,
                    limit: this._limitPerTime
                };
                cc_mtt.vv.ConsoleLog.log("requestGameResultRounds", t, this._userId, i.offset, i.limit), r.requestGameResultRoundsByMttIdUserId(i, (t => {
                    if (cc_mtt.vv.ConsoleLog.log("requestGameResultRounds_res", t), t.ErrorCode) {
                        let e = "ERROR_CODE_PKW." + t.ErrorCode;
                        o(e)
                    } else s(t)
                }), (() => {
                    o("MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR")
                }))
            }))
        }
        addList(t) {
            let e;
            p.setNodeHeight(this.scrollView.content, Math.max(0, (this._tupleHeight + this.spacing) * t.length - this.spacing)), this.scrollView.content.setPosition(this.scrollView.content.position.x, p.getNodeHeight(this.scrollView.content.parent) / 2), this.bufferZone = .5 * p.getNodeHeight(this.scrollView.node) + this._tupleHeight, this.emptyMessage.active = t.length < 1;
            for (let s = 0; s < this.spawnNum && s < t.length; s++) e = i(this.tuplePrefab), e.parent = this.scrollView.content, e.setPosition(0, -this._tupleHeight * (.5 + s) - this.spacing * s), e.getComponent(d).setInfo(t[s], s, c.commonProto.MTT_GAME_MODE.NLH, this._totalRounds - s, this._playerCount, this._roomName, this._category, this._userId), this.tuples.push(e)
        }
        updateTuplesPosition(t, e, s, o) {
            let i = s.content.position.y < o,
                a = (this._tupleHeight + this.spacing) * e.length;
            for (let o = 0; o < e.length; o++) {
                let n = _.getPositionInView(e[o], s.node),
                    r = e[o].getComponent(d);
                if (i) {
                    if (n.y < -this.bufferZone && e[o].position.y + a < 0) {
                        e[o].setPosition(e[o].position.x, e[o].position.y + a);
                        let s = r._tupleId - e.length;
                        r.setInfo(t[s], s, this._gameMode, this._totalRounds - s, this._playerCount, this._roomName, this._category, this._userId)
                    }
                } else if (n.y > this.bufferZone && e[o].position.y - a > -p.getNodeHeight(s.content)) {
                    e[o].setPosition(e[o].position.x, e[o].position.y - a);
                    let s = r._tupleId + e.length;
                    r.setInfo(t[s], s, this._gameMode, this._totalRounds - s, this._playerCount, this._roomName, this._category, this._userId)
                }
            }
            return s.content.position.y
        }
        handleReplaySetPage(t) {
            this.refreshPlayersName(t, (() => {
                let e = t.reverse();
                this.setReplayData(), cc_mtt.vv.DataManager.currentResultId = this.gameResultId, cc_mtt.vv.DataManager.replayRecord = e, cc_mtt.vv.DataManager.replayUserId = this._userId, this._gameMode === c.commonProto.MTT_GAME_MODE.PP ? cc_mtt.vv.AssetsManager.loadScene(u.SCENE_NAME.PINEAPPLE_REPLAY) : cc_mtt.vv.AssetsManager.loadScene(u.SCENE_NAME.HOLDEM_REPLAY)
            }))
        }
        setReplayData() {
            cc_mtt.vv.DataManager.replayGameResultDetail = {
                PlayerCount: this._playerCount,
                Name: this._roomName,
                GameMode: this._gameMode,
                TypeId: this._category,
                PlayOnJoint: this._playOnJoint
            }
        }
        onBackClicked() {
            o.isNative && o.os === o.OS.ANDROID && l.getInstance().removeBackFunction("CardRecordPrefab"), this._hallScript.blockLayer.active = !0, this._hallScript.movePageToRight(this.node, this._hallScript.hallLayer, (() => {
                this.resetPage(), this._hallScript.blockLayer.active = !1
            }))
        }
    }) || m);
    e._RF.pop()
}