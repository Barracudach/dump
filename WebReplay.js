import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as c from "./httpApis.js";
import * as d from "./mttconfig.js";
import * as h from "./Pb.js";
import * as g from "./DataManager.js";
import * as u from "./AssetsManager.js";
import * as m from "./LoadingBlocker.js";

function main() {
    var p, y, _, v, f, P;
    r._RF.push({}, "11f17CvxPpHeYlZC8vXDIZS", "WebReplay", void 0);
    const {
        ccclass: R,
        property: D
    } = s;
    e("WebReplay", (p = D(n), y = D(o), R((f = t((v = class extends i {
        constructor(...e) {
            super(...e), a(this, "loadingPrefab", f, this), this.loading = null, a(this, "loadingLayer", P, this), this.hideLoadingDelay = null, this.loadingDelay = .3, this._isPP = !1, this._replayURL = "", this._playerCount = 0, this._roomName = "", this._userId = 0, this._category = 0, this.error = e => {
                cc_mtt.vv.ConsoleLog.log("http request error", e)
            }, this.createReplay = e => {
                if (e) {
                    let t = null;
                    t = this._isPP ? h.commonProto.Pineapple_Round_Record.decode(e) : h.commonProto.Holdem_Record.decode(e), cc_mtt.vv.ConsoleLog.log(t);
                    let a = [{
                        GameRoundData: t
                    }];
                    cc_mtt.vv.DataManager.isWebReplay = !0, cc_mtt.vv.DataManager.replayGameResultDetail = {
                        PlayerCount: this._playerCount,
                        Name: this._roomName,
                        GameMode: t.gameId,
                        TypeId: this._category
                    };
                    let r = {
                        Detail: {
                            GameMode: t.gameId,
                            Id: t.roomId,
                            Seats: cc_mtt.vv.DataManager.replayGameResultDetail.PlayerCount,
                            TournamentName: cc_mtt.vv.DataManager.replayGameResultDetail.Name
                        }
                    };
                    cc_mtt.vv.DataManager.currentGameInfo = r, cc_mtt.vv.DataManager.userData = {
                        Id: this._userId
                    }, this.refreshPlayersName(a, (() => {
                        let e = a.reverse();
                        cc_mtt.vv.DataManager.replayRecord = e, this._isPP ? cc_mtt.vv.AssetsManager.loadScene(d.SCENE_NAME.PINEAPPLE_REPLAY) : cc_mtt.vv.AssetsManager.loadScene(d.SCENE_NAME.HOLDEM_REPLAY)
                    }))
                } else cc_mtt.vv.ConsoleLog.error("Replay data not found")
            }
        }
        onload() {}
        requestPlayersNickName(e, t) {
            var a = new XMLHttpRequest;
            a.responseType = "arraybuffer", a.onerror = this.error, a.onload = function() {
                if (4 == a.readyState && a.status >= 200 && a.status < 400) {
                    let e = new Uint8Array(a.response);
                    t && t instanceof Function && t(e)
                } else t(null)
            }, a.open("GET", e, !0), a.send()
        }
        validURL(e) {
            return !!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i").test(e)
        }
        start() {
            this.init(), this.showLoading(), this.getReplayData()
        }
        getReplayData() {
            try {
                var e = new URL(window.location.href);
                this._replayURL = e.searchParams.get("replayURL"), this._playerCount = parseInt(e.searchParams.get("playerCount")), this._roomName = decodeURI(e.searchParams.get("roomName")), this._userId = parseInt(e.searchParams.get("userId")), this._category = parseInt(e.searchParams.get("category")), this._replayURL ? (this._isPP = -1 != e.href.indexOf("pineapple"), this.requestPlayersNickName(this._replayURL, this.createReplay)) : cc_mtt.vv.ConsoleLog.error("Invalid Parameter")
            } catch (e) {
                cc_mtt.vv.ConsoleLog.error(e)
            }
        }
        refreshPlayersName(e, t) {
            let a = [];
            if (this._isPP) {
                for (let t = 0; t < e.length; t++) a = a.concat(Object.keys(e[t].GameRoundData.players));
                a.length > 0 ? c.requestPlayersNickName(a, (a => {
                    if (a) {
                        for (let t = 0; t < e.length; t++) {
                            let r = Object.keys(e[t].GameRoundData.players);
                            for (let n = 0; n < r.length; n++) e[t].GameRoundData.players[r[n]].userName = a[r[n]]
                        }
                        t()
                    }
                }), (() => {
                    t()
                })) : t()
            } else {
                for (let t = 0; t < e.length; t++) {
                    let r = Object.keys(e[t].GameRoundData.Players);
                    a = a.concat(r.map((a => e[t].GameRoundData.Players[a].userId)))
                }
                a.length > 0 ? c.requestPlayersNickName(a, (a => {
                    if (a) {
                        for (let t = 0; t < e.length; t++) {
                            let r = Object.keys(e[t].GameRoundData.Players);
                            for (let n = 0; n < r.length; n++) {
                                let o = e[t].GameRoundData.Players[r[n]].userId;
                                a[o] && (e[t].GameRoundData.Players[r[n]].nickname = a[o])
                            }
                        }
                        t()
                    }
                }), (() => {
                    t()
                })) : t()
            }
        }
        init() {
            cc_mtt.vv = {}, cc_mtt.vv.DataManager = g, cc_mtt.vv.AssetsManager = u, this.loading = l(this.loadingPrefab), this.loading.parent = this.loadingLayer
        }
        showLoading(e, t = 60) {
            cc_mtt.vv.ConsoleLog.log("showLoading"), this.loading || (this.loading = l(this.loadingPrefab), this.loading.parent = this.loadingLayer), e instanceof Function || (e = () => {
                this.hidLoading()
            }), this.loading && this.loading.getComponent(m).setLoading(e, t), this.loading.active || (this.loading.active = !0)
        }
        hidLoading(e) {
            let t = this;
            this.hideLoadingDelay = function() {
                t.loading && (t.loading.active = !1), e && e()
            }, this.scheduleOnce(this.hideLoadingDelay, this.loadingDelay)
        }
    }).prototype, "loadingPrefab", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = t(v.prototype, "loadingLayer", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = v)) || _));
    r._RF.pop()
}