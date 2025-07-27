import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as g from "./NewReplayerSeatLandscape.js";
import * as m from "./TablePositionContainerHandler.js";
import * as y from "./Enum.js";
import * as f from "./HandsRecordsManager.js";
import * as C from "./RecordType.js";
import * as P from "./cv.js";
import * as v from "./Card.js";

function main() {
    var w, S, k, I, R, T, U, _, D, H, M, F, B, L, V, z, E, N, A, x, W;
    n._RF.push({}, "d2007n52QxKUpehkeRZxLFv", "NewReplayerTableViewMobile", void 0);
    const {
        ccclass: J,
        property: O
    } = l;
    t("NewReplayerTableViewMobile", (w = J("NewReplayerTableViewMobile"), S = O(i), k = O(i), I = O(s), R = O(o), T = O(r), U = O([s]), _ = O(m), D = O(r), H = O(s), w((B = e((F = class extends d {
        constructor(...t) {
            super(...t), a(this, "bgSprite", B, this), a(this, "tableSprite", L, this), a(this, "totalPotContainer", V, this), a(this, "totalPotLabel", z, this), a(this, "cardPrefab", E, this), a(this, "publicCardContainers", N, this), a(this, "tablePosition", A, this), a(this, "seatPrefab", x, this), a(this, "seatContainer", W, this), this.tableViewUI = null, this.rightPanel = null, this.data = null, this.game = null, this.revealHandFee = null, this.coinMode = 0, this.dataPointInfo = null
        }
        onLoad() {
            this.totalPotContainer.active = !1, P.MessageCenter.register("onShownCardsByRevealHand", this.onShownCardsByRevealHand.bind(this), this.node), P.MessageCenter.register("on_replay_forceshow_error", this._onMsgForceShowError.bind(this), this.node)
        }
        onDestroy() {
            P.MessageCenter.unregister("on_replay_forceshow_error", this.node)
        }
        init(t, e, a, n, i, s) {
            this.data = t, this.game = e, this.tableViewUI = a, this.rightPanel = n, this.coinMode = i, this.dataPointInfo = s, this.data && this.dataPointInfo && (this.setTableAndBackground(), this.setTotalPot(), this.setPublicCards(), this.setPlayerSeats(), this.setRevealHandButton())
        }
        setCoinMode(t) {
            this.coinMode = t, this.data && this.dataPointInfo && (this.setTotalPot(), this.seatContainer.getComponentsInChildren(g).forEach((e => {
                e.setCoinMode(t)
            })))
        }
        switchAnonymousMode(t) {
            for (let e = 0; e < this.seatContainer.children.length; e++) {
                const a = this.seatContainer.children[e].getComponent(g);
                u(a) && a.switchAnonymousMode(t)
            }
        }
        setTableAndBackground() {}
        setTotalPot() {
            const t = this.coinMode;
            this.totalPotContainer.active = !0;
            let e = f.getInstance().formatMoneyText(this.data.type, this.dataPointInfo, t, this.data.totalPot);
            this.totalPotLabel.string = e
        }
        setPublicCards() {
            const t = this.data.publicCards;
            this.publicCardContainers.forEach((t => {
                t.children.forEach((t => t.active = !1))
            })), t.forEach(((t, e) => {
                const a = this.publicCardContainers[e];
                let n = a.getComponentInChildren(v);
                if (!u(n)) {
                    const t = h(this.cardPrefab);
                    t.parent = a, t.setPosition(c(p.ZERO)), n = t.getComponent(v)
                }
                n.setGameID(P.Enum.GameId.Texas), n.initDefaultValue(), n.node.active = !0, n.node.setContentSize(n.node.parent.getContentSize()), n.setContent(t.number, t.suit), n.setFace(!0)
            }))
        }
        setPlayerSeats() {
            const t = P.dataHandler.getUserData().user_id;
            let e = null;
            e = this.data.type === C.Cash ? this.data.players.find((e => e.uid == t.toString())) : this.data.players.find((t => t.uid == cc_mtt.vv.DataManager.userId.toString()));
            const a = e ? e.seat : 0,
                n = this.data.seatCount;
            for (let t = 0; t < n; t++) {
                const i = this.seatContainer.children.length > t ? this.seatContainer.children[t] : h(this.seatPrefab);
                if (i.parent = this.seatContainer, t < this.data.players.length) {
                    let s = this.data.players[t].seat;
                    if (e) {
                        const t = a;
                        s = s - t <= -1 ? n + s - t : s - t
                    }
                    i.active = !0;
                    const o = i.getComponent(g),
                        r = this.tablePosition.getSeatPosition(n, s, !0);
                    o.node.setPosition(o.node.parent.getComponent(b).convertToNodeSpaceAR(r));
                    const l = this.tablePosition.getChipsPosition(n, s, !0),
                        d = this.tablePosition.getChipsAnchorPoint(n, s);
                    o.initChipsPosition(l, d);
                    const u = this.tablePosition.getDealIconPosition(n, s, !0);
                    o.initDealerIconPosition(u), o.init(this.data.type, this.data.players[t], this.data.handCardType, this.dataPointInfo, this.coinMode, this.data.players[t].seat == this.data.dealer)
                } else i.active = !1
            }
        }
        setRevealHandButton() {
            var t, e, a, n;
            if (!u(this.tableViewUI)) return;
            if (this.data.type != C.Cash) return void this.tableViewUI.showRevealHandButton(!1, !1, 0, null);
            const i = this.game.gameDataInstance,
                s = i.tRoomData.spectatorRevealEnabled,
                o = this.data.players.some((t => t.uid == P.dataHandler.getUserData().getUserIdByGameID(this.data.cashGameId).toString())),
                r = s && !o;
            let l = r ? (null == i || null == (t = i.tRoomData) || null == (t = t.pkPayMoneyItem) ? void 0 : t.spectatorShowCardCount) + 1 : (null == i || null == (e = i.tRoomData) || null == (e = e.pkPayMoneyItem) ? void 0 : e.showCardCount) + 1,
                d = r ? null == i || null == (a = i.tRoomData) || null == (a = a.pkPayMoneyItem) ? void 0 : a.showCardCountsSpectatorFee : null == i || null == (n = i.tRoomData) || null == (n = n.pkPayMoneyItem) ? void 0 : n.showCardCountsFee;
            for (let t = 0; t < P.StringTools.getArrayLength(d); ++t)
                if (l >= d[t].startCount && l <= d[t].endCount) {
                    const e = i.tRoomData.neededFeeAsPerCurrency(d[t]);
                    this.revealHandFee = e;
                    break
                } if (this.data.forcedShowByRevealHand) this.tableViewUI.showRevealHandButton(!0, !1, this.revealHandFee, this.data.currency);
            else {
                let t = 2;
                this.data.handCardType == y.SHCT_PLO ? t = 4 : this.data.handCardType == y.SHCT_PLO5 && (t = 5);
                const e = !this.data.players.map((t => t.cards.filter((t => t.number >= 0 && t.suit >= 0)))).some((e => e.length < t));
                this.rightPanel.getCurrentItemIndex() + 1 <= 3 && !e ? this.tableViewUI.showRevealHandButton(r || o, !0, this.revealHandFee, this.data.currency) : this.tableViewUI.showRevealHandButton(!1, !1, this.revealHandFee, this.data.currency)
            }
            this.tableViewUI.setOnClickRevealHandCallback(this.onClickRevealHand.bind(this))
        }
        onClickRevealHand() {
            var t, e;
            null != this.revealHandFee && null != this.revealHandFee && P.popUp.showMsg({
                title: P.config.getStringData("new_replayer_reveal_cards", !1, "Reveal Cards"),
                txt: P.StringTools.formatC(P.config.getStringData("new_replayer_reveal_cards_message", !1, "Would you like to reveal opponents cards for %s?"), ((null == (t = this.data.currency) ? void 0 : t.shortSymbol) ?? (null == (e = this.data.currency) ? void 0 : e.symbol)) + P.StringTools.serverGoldToShowString(this.revealHandFee)),
                isTwoBtn: !0,
                isPopupDarkActive: !0,
                sureCallback: () => {
                    this.isValid && P.gameNet.RequestReplayForceShowCard(this.data.roomId, this.data.replayUUID)
                },
                cashGameScene: this.node.scene,
                cancelLabel: P.config.getStringData("POP_UP_BUTTON.CANCEL"),
                sureLabel: P.config.getStringData("POP_UP_BUTTON.CONFIRM"),
                useLabelForDarkText: !0
            })
        }
        onShownCardsByRevealHand(t) {
            var e, a;
            this.data && (null == (e = this.data) ? void 0 : e.replayUUID) === (null == (a = t.customData) ? void 0 : a.replayUUID) && (this.setPlayerSeats(), this.setRevealHandButton())
        }
        _onMsgForceShowError(t) {
            P.ToastError(null == t ? void 0 : t.msg.error, !1, null, null, null, this.node.scene)
        }
        mockDataForTesting() {
            this.data = {
                roomId: 0,
                type: C.Cash,
                replayUUID: "0",
                dealer: 4,
                seatCount: 8,
                handCardType: y.SHCT_TEXAS,
                isShortDeck: !1,
                ante: 2,
                bigBlind: 4,
                totalPot: 435332,
                publicCards: [{
                    number: 5,
                    suit: 3
                }, {
                    number: 10,
                    suit: 0
                }, {
                    number: 3,
                    suit: 1
                }, {
                    number: 7,
                    suit: 2
                }, {
                    number: 12,
                    suit: 2
                }],
                players: [{
                    uid: "1",
                    name: "kdtest1",
                    avatarUrl: "https://image.zqhxrz.com/head_3.png?avatarType=System",
                    label: "",
                    finalStake: 213123,
                    cards: [{
                        number: 3,
                        suit: 0
                    }, {
                        number: 6,
                        suit: 3
                    }],
                    seat: 3,
                    isWinning: !0,
                    winningPot: 1423999,
                    winningJackpot: 0
                }, {
                    uid: "2",
                    name: "kdtest2",
                    avatarUrl: "https://web.husainstudio.com/images/avatars/1730784531030.jpg",
                    finalStake: 213123,
                    label: "",
                    cards: [{
                        number: 3,
                        suit: 0
                    }, {
                        number: 6,
                        suit: 3
                    }],
                    seat: 7,
                    isWinning: !0,
                    winningPot: 323999,
                    winningJackpot: 0
                }, {
                    uid: "3",
                    name: "kdtest3",
                    avatarUrl: "https://image.feitianyayiba.top/head_1.png",
                    finalStake: 213123,
                    label: "",
                    cards: [{
                        number: 6,
                        suit: 1
                    }, {
                        number: 6,
                        suit: 2
                    }],
                    seat: 5,
                    isWinning: !0,
                    winningPot: 876278,
                    winningJackpot: 0
                }, {
                    uid: "4",
                    name: "kdtest4",
                    avatarUrl: "https://image.feitianyayiba.top/head_9.png?avatarType=System",
                    finalStake: 631233,
                    label: "",
                    cards: [{
                        number: 6,
                        suit: 1
                    }, {
                        number: 6,
                        suit: 2
                    }],
                    seat: 1,
                    isWinning: !0,
                    winningPot: 978345,
                    winningJackpot: 0
                }, {
                    uid: "5",
                    name: "kdtest5",
                    avatarUrl: "https://image.feitianyayiba.top/head_198.png",
                    finalStake: 111111,
                    label: "",
                    cards: [{
                        number: 6,
                        suit: 1
                    }, {
                        number: 6,
                        suit: 2
                    }],
                    seat: 0,
                    isWinning: !0,
                    winningPot: 222222,
                    winningJackpot: 0
                }, {
                    uid: "6",
                    name: "kdtest6",
                    avatarUrl: "avatar_7803326_1745392585.jpg",
                    finalStake: 12768,
                    label: "",
                    cards: [{
                        number: 9,
                        suit: 1
                    }, {
                        number: 1,
                        suit: 1
                    }],
                    seat: 4,
                    isWinning: !0,
                    winningPot: 999999,
                    winningJackpot: 0
                }, {
                    uid: "7",
                    name: "kdtest7",
                    avatarUrl: null,
                    label: "",
                    finalStake: 666666,
                    cards: [{
                        number: 2,
                        suit: 2
                    }, {
                        number: 2,
                        suit: 3
                    }],
                    seat: 6,
                    isWinning: !0,
                    winningPot: 777777,
                    winningJackpot: 0
                }, {
                    uid: "8",
                    name: "kdtest8",
                    avatarUrl: null,
                    label: "",
                    finalStake: 6612452,
                    cards: [{
                        number: 3,
                        suit: 2
                    }, {
                        number: 9,
                        suit: 3
                    }],
                    seat: 2,
                    isWinning: !0,
                    winningPot: 444444,
                    winningJackpot: 0
                }, {
                    uid: "9",
                    name: "kdtest9",
                    avatarUrl: null,
                    label: "",
                    finalStake: 9612452,
                    cards: [{
                        number: 3,
                        suit: 2
                    }, {
                        number: 9,
                        suit: 3
                    }],
                    seat: 8,
                    isWinning: !0,
                    winningPot: 111111,
                    winningJackpot: 0
                }]
            }
        }
    }).prototype, "bgSprite", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = e(F.prototype, "tableSprite", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = e(F.prototype, "totalPotContainer", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = e(F.prototype, "totalPotLabel", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = e(F.prototype, "cardPrefab", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(F.prototype, "publicCardContainers", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), A = e(F.prototype, "tablePosition", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(F.prototype, "seatPrefab", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = e(F.prototype, "seatContainer", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = F)) || M));
    n._RF.pop()
}