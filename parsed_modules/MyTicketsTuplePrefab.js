import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as _ from "./BagTuplePrefab.js";
import * as m from "./cv.js";
import * as g from "./Pb.js";
import * as p from "./ThemeSystem.js";
import * as f from "./ColorSystemTypeOther.js";
import * as b from "./ColorSystemType.js";
import * as T from "./ImpokerHall.js";
import * as E from "./mttconfig.js";
import * as S from "./MTTConnector.js";
import * as M from "./FormatParser.js";
import * as y from "./JackpotSngGameListSpinItem.js";
import * as D from "./MttPrefab.js";
import * as L from "./GameListTuplePkw.js";
import * as v from "./MttPrefabLandscape.js";
import * as x from "./MttItemHelper.js";
import * as C from "./Enum.js";
import * as I from "./LoadingBlocker.js";

function main() {
    var A, k, G, w, P, B, z, O, R, F, V, N, Y, H, U, j, q, J, X, W, Z, $, K, Q, tt, et, nt, it, ot, at, st, rt, lt, ct, ut, dt, ht, _t, mt, gt, pt, ft, bt;
    i._RF.push({}, "9a5b1TfHIhATJBqUaJ4wZr3", "MyTicketsTuplePrefab", void 0);
    const {
        ccclass: Tt,
        property: Et
    } = l;
    t("default", (A = Et(o), k = Et(a), G = Et(o), w = Et(a), P = Et(a), B = Et(p), z = Et(p), O = Et(s), R = Et(s), F = Et(a), V = Et(a), N = Et(a), Y = Et(a), H = Et(a), U = Et(a), j = Et(a), q = Et(a), J = Et(r), X = Et(r), W = Et(o), Tt(((bt = class t extends _ {
        constructor(...t) {
            super(...t), n(this, "expDate", K, this), n(this, "ticketAmount_node", Q, this), n(this, "ticketAmount_label", tt, this), n(this, "expandButton_node", et, this), n(this, "expandButton_icon", nt, this), n(this, "expandButton_BgTheme", it, this), n(this, "expandButton_IconTheme", ot, this), n(this, "mtt_icon", at, this), n(this, "sng_icon", st, this), n(this, "expandExtraBackground", rt, this), n(this, "root_node", lt, this), n(this, "mtt_node", ct, this), n(this, "sng_node", ut, this), n(this, "no_tournaments_node", dt, this), n(this, "sng_grid_node", ht, this), n(this, "mtt_loading_node", _t, this), n(this, "sng_loading_node", mt, this), n(this, "mtt_itemPrefab", gt, this), n(this, "sng_itemPrefab", pt, this), n(this, "no_tournaments_text", ft, this), this.MAX_GAME_LIST = 5, this.controller = null, this._currentCategory = 1, this._isExpanded = !1
        }
        static clearLastSelected() {
            t.s_lastTicketSelected = null
        }
        get IsExpanded() {
            return this._isExpanded
        }
        set IsExpanded(t) {
            this._isExpanded = t, this.expandButton_icon.angle = t ? 0 : -180, t ? (this.expandButton_BgTheme.setColorScheme(b.Other, f.myTicketsExpandBg), this.expandButton_IconTheme.setColorScheme(b.Other, f.myTicketsExpandIconCollapse), this.expandExtraBackground.active = !0) : (this.expandButton_BgTheme.setColorScheme(b.Other, f.myTicketsExpandBg), this.expandButton_IconTheme.setColorScheme(b.Other, f.myTicketsExpandIcon), this.expandExtraBackground.active = !1)
        }
        onLoad() {
            super.onLoad(), this.toolSpecific.node.active = !1, this.IsExpanded = !1, this.mtt_node.active = !1, this.sng_node.active = !1, this.mtt_loading_node && (this.mtt_loading_node.active = !1), this.sng_loading_node && (this.sng_loading_node.active = !1)
        }
        onEnable() {
            m.MessageCenter.register(C.MttLevelListRefresh, this.onMttLevelLishRefresh.bind(this), this)
        }
        onDisable() {
            m.MessageCenter.unregister(m.Enum.MessageCenterAction.MttLevelListRefresh, this.node)
        }
        start() {
            super.start(), this.updateTranslation()
        }
        updateTranslation() {}
        setInfoValues(t, e) {
            switch (this._currentCategory = this._tupleData.category.length > 0 ? this._tupleData.category[0] : 0, this._currentCategory) {
                case g.commonProto.GAME_CATEGORY.MTT:
                    this.toolName.string = this._tupleData.name, this.toolIcon.spriteFrame = this.mtt_icon;
                    break;
                case g.commonProto.GAME_CATEGORY.SNG:
                    this.toolName.string = this._tupleData.name, this.toolIcon.spriteFrame = this.sng_icon;
                    break;
                default:
                    this.toolName.string = this._tupleData.name, this.toolIcon.spriteFrame = this.mtt_icon
            }
            this.ticketAmount_label.string = `x${this._tupleData.num}`, this.ticketAmount_node.active = this._tupleData.num > 1, this.updateExpiredDate()
        }
        getTicketValue() {
            return M.RoundToDecimal(this._tupleData.ticketValue, 2)
        }
        updateExpiredDate() {
            if (1 == this._tupleData.list.length) this.showExpiredDate(!!this._tupleData.list[0].Expiry, this._tupleData.list[0].Expiry);
            else {
                let t = [];
                this._tupleData.list.forEach((e => {
                    e.Usable && e.Expiry && t.push(e)
                })), t = t.sort(((t, e) => t.Expiry.getTime() >= e.Expiry.getTime() ? 1 : -1)), t.length > 0 ? this.showExpiredDate(!0, t[0].Expiry) : this.showExpiredDate(!1, null)
            }
        }
        showExpiredDate(t, e) {
            t ? (this.expiredDate.string = m.StringTools.formatC(m.config.getStringData("my_tickets_valid_until")), this.expDate.string = e ? m.config.getDateWithFormat(e, "DD.MM.YYYY") : "", this.activeExpiredObject(!0)) : this.activeExpiredObject(!1)
        }
        activeExpiredObject(t) {
            this.toolSpecific.node.parent.active = t
        }
        showMttGames() {
            const t = cc_mtt.vv.DataManager.GAME_LEVEL_LIST.MttTournaments;
            if (t) {
                this.mtt_node.active = !0;
                let e = [];
                for (let n of t) {
                    let t = x.getToolsByMttDetail("", n.Detail, n);
                    if (t && t.some((t => t.ToolId == this._tupleData.toolId)) && n.Detail) switch (n.Detail.Status) {
                        case g.commonProto.MTT_GAME_STATUS.NOT_STARTED:
                        case g.commonProto.MTT_GAME_STATUS.STARTED:
                        case g.commonProto.MTT_GAME_STATUS.STARTED + 100:
                            e.push(n)
                    }
                }
                e = e.sort(((t, e) => t.Detail.StartingTime.getTime() > e.Detail.StartingTime.getTime() ? 1 : -1));
                let n = 0,
                    i = !1;
                for (; n < e.length;) {
                    if (n < this.mtt_node.children.length) {
                        let t = this.mtt_node.children[n];
                        const o = e[n],
                            a = t.getComponent(L);
                        a.updateInfo(o, E.GAME_LEVEL_LIST_ID.MTT, null, D.instance.getConvertOption(), !1, this.onMttGameClicked.bind(this, o)), a.updateMyTicketSchedule(), t.active = !0, i = !0
                    } else {
                        let t = c(this.mtt_itemPrefab);
                        const o = e[n],
                            a = t.getComponent(L);
                        t.getComponent(L).updateInfo(o, E.GAME_LEVEL_LIST_ID.MTT, null, D.instance.getConvertOption(), !1, this.onMttGameClicked.bind(this, o)), a.updateMyTicketSchedule(), this.mtt_node.addChild(t), i = !0
                    }
                    if (n++, n >= this.MAX_GAME_LIST) break
                }
                for (let t = n; t < this.mtt_node.children.length; t++) this.mtt_node.children[t].active = !1;
                i ? this.no_tournaments_node.active = !1 : (this.mtt_node.active = !1, this.no_tournaments_node.active = !0)
            }
        }
        onMttLevelLishRefresh() {
            var t;
            null != (t = this.mtt_node) && t.active && this.showMttGames()
        }
        syncMttDetailInfo(t) {
            if (t) {
                const e = m.lobbyService.getMttItemsByFilter(null).find((e => {
                    var n;
                    return (null == (n = e.Detail) ? void 0 : n.Id) == t._tupleInfo.Detail.Id
                }));
                e && (t.updateRegisteredPlayers(x.getEntrantsCount(e)), t.setPrizePool(x.getPrizePool(e), e.Detail.currency, e.Detail.DisplayCurrency))
            }
        }
        requestSngGames(t) {
            const e = {
                ListId: E.GAME_LEVEL_LIST_ID.SNG,
                platForm: S.instance.PLATFORM.WPTG
            };
            T.instance && T.instance.getLevelList("sngList", e, t, (() => {}), !1)
        }
        showSngGames(t = !0) {
            if (this.sng_node.active = !0, t && (!cc_mtt.vv.DataManager.GAME_LEVEL_LIST || !cc_mtt.vv.DataManager.GAME_LEVEL_LIST.SngTournaments || 0 == cc_mtt.vv.DataManager.GAME_LEVEL_LIST.SngTournaments.length)) return this.sng_loading_node.active = !0, this.sng_grid_node.active = !1, void this.requestSngGames((() => {
                this.showSngGames(!1)
            }));
            if (this.sng_loading_node.active = !1, cc_mtt.vv.DataManager.GAME_LEVEL_LIST.SngTournaments && 0 != cc_mtt.vv.DataManager.GAME_LEVEL_LIST.SngTournaments.length) {
                this.sng_grid_node.active = !0;
                let t = cc_mtt.vv.DataManager.GAME_LEVEL_LIST.SngTournaments.filter((t => t.Detail.RegFee == this.getTicketValue())),
                    e = !1;
                if (t) {
                    let n = 0;
                    for (; n < t.length;) {
                        if (n < this.sng_grid_node.children.length) {
                            let i = this.sng_grid_node.children[n];
                            const o = t[n];
                            i.getComponent(y).setData(o, !1, !0, this.onSngGameClicked.bind(this, o)), i.active = !0, e = !0
                        } else {
                            let i = c(this.sng_itemPrefab);
                            const o = t[n];
                            i.getComponent(y).setData(o, !1, !0, this.onSngGameClicked.bind(this, o)), this.setScaleSngGameItem(i), this.sng_grid_node.addChild(i), e = !0
                        }
                        if (n++, n >= this.MAX_GAME_LIST) break
                    }
                    for (let t = n; t < this.sng_grid_node.children.length; t++) this.sng_grid_node.children[t].active = !1;
                    e ? this.no_tournaments_node.active = !1 : (this.sng_node.active = !1, this.no_tournaments_node.active = !0)
                }
            } else this.sng_node.active = !1
        }
        setScaleSngGameItem(t) {
            t && (t.scale = new u(u.ONE))
        }
        expandAction(e = !0, n = !1) {
            if (e ? (this.IsExpanded = !this._isExpanded, null !== t.s_lastTicketSelected && t.s_lastTicketSelected !== this && t.s_lastTicketSelected.expandAction(!1, !1), t.s_lastTicketSelected = this) : this.IsExpanded = n, this.IsExpanded) switch (this._currentCategory) {
                case g.commonProto.GAME_CATEGORY.MTT:
                    this.showMttGames();
                    break;
                case g.commonProto.GAME_CATEGORY.SNG:
                    this.showSngGames()
            } else this.mtt_node.active = !1, this.sng_node.active = !1, this.no_tournaments_node.active = !1;
            this.updateLayout()
        }
        updateLayout() {
            let t = null;
            switch (this._currentCategory) {
                case g.commonProto.GAME_CATEGORY.MTT:
                    t = this.mtt_node;
                    break;
                case g.commonProto.GAME_CATEGORY.SNG:
                    t = this.sng_node
            }
            var e, n, i;
            t && (null == (e = t.getComponent(d)) || e.updateLayout(), null == (n = this.root_node) || null == (n = n.getComponent(d)) || n.updateLayout(), null == (i = this.getComponent(d)) || i.updateLayout())
        }
        onMttGameClicked(t) {
            var e;
            (m.AudioMgr.playButtonSound("button_click.mp3"), m.MessageCenter.send("hall_bottom_lobby_button_no_animation"), m.appConfig.isLandscapeLayout && (v.notNeedSelectFirstItemOnChangePage = !0), D.instance.ignoreSelectFirstItem = !0, m.dataHandler.getUserData().autoShowBuyInMttId = t.Detail.Id, m.appConfig.isLandscapeLayout) ? m.MessageCenter.send("jumpToMtt", "All"): I.instance.show("showMttDetailLobbyFromDeepLink", null == (e = h.getScene().getComponentInChildren("HallScene")) ? void 0 : e.node);
            m.MessageCenter.send("showMttDetailLobbyV2FromDeepLink", t.Detail.Id)
        }
        onSngGameClicked(t) {
            m.AudioMgr.playButtonSound("button_click.mp3"), m.MessageCenter.send("hall_bottom_lobby_button_no_animation"), m.dataHandler.getUserData().autoShowBuyInSNGValue = t.Detail.RegFee, m.MessageCenter.send("jumpToSng")
        }
        onExpandClicked() {
            m.AudioMgr.playButtonSound("button_click.mp3"), this.expandAction()
        }
    }).s_lastTicketSelected = null, K = e(($ = bt).prototype, "expDate", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = e($.prototype, "ticketAmount_node", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), tt = e($.prototype, "ticketAmount_label", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), et = e($.prototype, "expandButton_node", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), nt = e($.prototype, "expandButton_icon", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), it = e($.prototype, "expandButton_BgTheme", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ot = e($.prototype, "expandButton_IconTheme", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), at = e($.prototype, "mtt_icon", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), st = e($.prototype, "sng_icon", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), rt = e($.prototype, "expandExtraBackground", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), lt = e($.prototype, "root_node", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ct = e($.prototype, "mtt_node", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ut = e($.prototype, "sng_node", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), dt = e($.prototype, "no_tournaments_node", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ht = e($.prototype, "sng_grid_node", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _t = e($.prototype, "mtt_loading_node", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), mt = e($.prototype, "sng_loading_node", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), gt = e($.prototype, "mtt_itemPrefab", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pt = e($.prototype, "sng_itemPrefab", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ft = e($.prototype, "no_tournaments_text", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = $)) || Z));
    i._RF.pop()
}