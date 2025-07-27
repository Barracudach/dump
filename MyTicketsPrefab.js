import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as u from "./MTTConnector.js";
import * as h from "./cv.js";
import * as g from "./MessageBroker.js";
import * as d from "./MttItemHelper.js";
import * as p from "./Pb.js";
import * as _ from "./MttPrefab.js";
import * as b from "./BagPrefab.js";
import * as f from "./BagTuplePrefab.js";
import * as k from "./MyTicketsTuplePrefab.js";
import * as T from "./LobbyTools.js";
import * as y from "./Enum.js";

function main() {
    var m, C, M, L, v, V, E, A, w, B, D, N;
    n._RF.push({}, "ace07Ez60RHX4UKku56cfte", "MyTicketsPrefab", void 0);
    const {
        ccclass: P,
        property: S
    } = a;
    t("default", (m = S(o), C = S(s), M = S(s), L = S(o), v = S(o), P((A = e((E = class extends b {
        constructor(...t) {
            super(...t), i(this, "loadingView", A, this), i(this, "total_tickets_label", w, this), i(this, "total_value_label", B, this), i(this, "total_tickets_node", D, this), i(this, "tournament_tickets_node", N, this), this.totalTickets_num = 0, this.totalValue_num = 0
        }
        onLoad() {
            super.onLoad(), h.appConfig.isLandscapeLayout || h.MessageCenter.register("hall_bottom_lobby_button_no_animation", this.onBackClicked.bind(this, !1, !0), this.node), h.appConfig.isWebApp && this.backButton && (this.backButton.node.active = !1, this.backButton.node.parent.active = !1)
        }
        update(t) {}
        onEnable() {
            super.onEnable(), this.headerContainer.active = !1, h.action.showAction(this.node, h.action.eMoveActionDir.EMAD_TO_LEFT, h.action.eMoveActionType.EMAT_FADE_IN), this.setupMessageCenter(), this.showLoading()
        }
        setupMessageCenter() {
            u.instance.registerMessageCenter(u.instance.config.BroadCast.MTT_TOKEN_UPDATE, this.onTokenUpdate, this.node), h.appConfig.isLandscapeLayout || (h.MessageCenter.register("hall_bottom_lobby_button", this.onBackClicked.bind(this, !0, !0), this.node), h.MessageCenter.register("hall_bottom_profile_button", this.onBackClicked.bind(this, !0, !1), this.node), h.MessageCenter.send("show_my_tickets", this)), h.appConfig.isWebApp && h.MessageCenter.register(h.Enum.MessageCenterAction.onGoBack, this.onBackClicked.bind(this, !0, !1), this.node)
        }
        onDisable() {
            u.instance.unregisterMessageCenter(u.instance.config.BroadCast.MTT_TOKEN_UPDATE, this.node), super.onDisable(), h.appConfig.isLandscapeLayout || h.MessageCenter.unregister("hall_bottom_profile_button", this.node), h.appConfig.isWebApp && h.MessageCenter.unregister(h.Enum.MessageCenterAction.onGoBack, this.node)
        }
        onDestroy() {
            super.onDestroy(), h.appConfig.isLandscapeLayout || h.MessageCenter.unregister("hall_bottom_lobby_button_no_animation", this.node)
        }
        hideAllTickets() {
            if (this.listView && this.listView[0])
                for (let t = 0; t < this.listView[0].content.children.length; t++) {
                    let e = this.listView[0].content.children[t];
                    e && (e.active = !1)
                }
        }
        showLoading(t) {
            this.loadingView.active = !0, this.emptyLabel[0].active = !1, this.hideAllTickets(), k.clearLastSelected(), this.totalTickets_num = 0;
            let e = "";
            for (let t = 0; t < this.total_tickets_label.string.length; t++) e += " ";
            this.total_tickets_label.string = e, this.totalValue_num = 0;
            let i = "";
            for (let t = 0; t < this.total_value_label.string.length; t++) i += " ";
            this.total_value_label.string = i
        }
        hideLoading(t, e) {
            this.loadingView.active = !1
        }
        updateToolListHttp(t, e) {
            h.dataHandler.getUserData().isTouristUser ? (e ? cc_mtt.vv.DataManager.backPackToolRecord = [] : cc_mtt.vv.DataManager.backPackTool = [], t && t()) : super.updateToolListHttp(t, e)
        }
        addList(t, e, i) {
            t && t.length > 0 && (this.dataList = this.groupTicketByCategory(t)), this.dataList ? (this.onExtendTupleClicked(), this.updateTotalTickets(t)) : this.scheduleOnce((() => {
                this.addList(t, e, i)
            }), 1)
        }
        onExtendTupleClicked() {
            this.listView[0].stopAutoScroll(), this.listView[0].content.setPosition(new l(this.listView[0].content.position.x, 0, this.listView[0].content.position.z));
            let t = 0;
            for (; t < this.dataList.length;) {
                if (t < this.listView[0].content.children.length) {
                    let e = this.listView[0].content.children[t];
                    const i = this.dataList[t];
                    e.getComponent(f).setInfo(i, !1, !1, !1), e.active = !0
                } else {
                    let e = r(this.tuplePrefab);
                    const i = this.dataList[t];
                    e.getComponent(f).setInfo(i, !1, !1, !1), this.listView[0].content.addChild(e)
                }
                t++
            }
            for (let e = t; e < this.listView[0].content.children.length; e++) this.listView[0].content.children[e].active = !1;
            this.emptyLabel[0].active = 0 === this.dataList.length, this.total_tickets_node && (this.total_tickets_node.active = !this.emptyLabel[0].active), this.tournament_tickets_node && (this.tournament_tickets_node.active = this.total_tickets_node.active)
        }
        refreshLobbyLevelList() {
            _.instance && _.instance.getLevelList()
        }
        getSyntaxFilter() {
            return "@@"
        }
        getTicketByCategoryKey(t) {
            return t.ToolId ? `${t.ToolId}${this.getSyntaxFilter()}${t.Value}${this.getSyntaxFilter()}${t.Config.ForCategory}` : `${t.Name}${this.getSyntaxFilter()}${t.Value}${this.getSyntaxFilter()}${t.Config.ForCategory}`
        }
        groupTicketByCategory(t) {
            let e = [],
                i = new Map;
            for (let n = 0; n < t.length; n++)
                if (t[n].Usable && (null == t[n].Expiry || t[n].Expiry.getTime() > cc_mtt.vv.DataManager.getNow().getTime())) {
                    let o = this.getTicketByCategoryKey(t[n]);
                    if (c(t[n].Name) && "" != t[n].Name && i.set(o, t[n].Name), o in e) e[o].num = e[o].num + 1, e[o].totalValue = e[o].totalValue + t[n].Value, e[o].list.push(t[n]);
                    else {
                        let i = Math.round(100 * t[n].Value) / 100,
                            s = [];
                        s.push(t[n]);
                        let a = {
                            [o]: {
                                num: 1,
                                category: t[n].Config.ForCategory,
                                toolId: t[n].ToolId,
                                ticketValue: i,
                                totalValue: i,
                                name: t[n].Name,
                                list: s
                            }
                        };
                        e = {
                            ...e,
                            ...a
                        }
                    }
                } Object.keys(e).forEach((t => {
                let n = i.get(t);
                !c(e[t].name) && c(n) && (e[t].name = n)
            })), e = this.sortTicketGroupByCategoryAndValue(e);
            let n = [];
            return Object.keys(e).forEach((t => {
                n.push(e[t])
            })), n
        }
        filterOwnedTickets(t) {
            const e = cc_mtt.vv.DataManager.GAME_LEVEL_LIST.MttTournaments;
            if (!e) return null;
            let i = [];
            for (let t of e) {
                let e = d.getToolsByMttDetail("", t.Detail, t);
                e && e.length > 0 && e.forEach((t => {
                    i.includes(t.ToolId) || i.push(t.ToolId)
                }))
            }
            let n = [];
            return t.forEach((t => {
                switch (t.category.length > 0 ? t.category[0] : 0) {
                    case p.commonProto.GAME_CATEGORY.MTT: {
                        let e = !1;
                        for (let o = 0; o < t.list.length; o++)
                            if (i.includes(t.list[o].ToolId)) {
                                n.push(t), e = !0;
                                break
                            } e || n.push(t)
                    }
                    break;
                    case p.commonProto.GAME_CATEGORY.SNG:
                        n.push(t)
                }
            })), n
        }
        sortTicketGroupByCategoryAndValue(t) {
            let e = [];
            Object.keys(t).forEach((t => {
                e.push(t)
            }));
            const i = this.getSyntaxFilter();
            e = e.sort(((t, e) => {
                if (Number(t.split(i)[2]) < Number(e.split(i)[2])) return -1
            })), e = e.sort(((t, e) => {
                const n = t.split(i),
                    o = e.split(i),
                    s = Number(n[1]),
                    a = Number(o[1]),
                    l = Number(n[2]),
                    r = Number(o[2]);
                return l == r && s < a ? -1 : l == r && s > a ? 1 : 0
            }));
            let n = [];
            return e.forEach((e => {
                let i = {
                    [e]: t[e]
                };
                n = {
                    ...n,
                    ...i
                }
            })), n
        }
        updateTotalTickets(t) {
            if (t && t.length > 0) {
                this.totalTickets_num = 0, this.totalValue_num = 0;
                const {
                    totalTicketsValue: t,
                    totalTicketsCount: e
                } = this.processTickets(this.dataList);
                this.totalTickets_num = e, this.totalValue_num = t, this.total_tickets_label.string = `x${this.totalTickets_num.toString()}`;
                const i = Math.round(100 * this.totalValue_num) / 100;
                this.total_value_label.string = "$" + i
            }
        }
        processTickets(t, e = y.USD) {
            let i = 0,
                n = 0;
            return t.forEach((t => {
                let o = y.None;
                if (t.list && t.list.length > 0 && t.list[0].Currency && (o = t.list[0].Currency), o === y.None) return;
                n += t.num;
                const s = h.appConfig.getWalletConfig().convertStringToCurrencyType(o),
                    a = T.convertCurrency(s, e, t.totalValue);
                i += a
            })), {
                totalTicketsValue: i,
                totalTicketsCount: n
            }
        }
        onBackClicked(t = !0, e = !1) {
            if (super.onBackClicked(), this.showLogoBack(), t) {
                let i;
                e ? i = h.action.delay_type.INSTANT : (i = h.action.delay_type.NORMAL, t.target && "backBtn" == t.target._name && h.AudioMgr.playButtonSound("back_button.mp3")), h.action.showAction(this.node, h.action.eMoveActionDir.EMAD_TO_RIGHT, h.action.eMoveActionType.EMAT_FADE_OUT, i, (() => {}), (() => {
                    h.MessageCenter.unregister("hall_bottom_lobby_button", this.node), this.node.active = !1, this.node.parent.active = !1
                }))
            } else this.node.active = !1, this.node.parent.active = !1;
            h.MessageCenter.send("hide_my_tickets", this)
        }
        showLogoBack() {
            h.appConfig.isWebApp ? g.getInstance().sendShowBackButton(!1) : h.MessageCenter.send(h.Enum.MessageCenterAction.EnableTopAppLogo)
        }
    }).prototype, "loadingView", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = e(E.prototype, "total_tickets_label", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = e(E.prototype, "total_value_label", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = e(E.prototype, "total_tickets_node", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(E.prototype, "tournament_tickets_node", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = E)) || V));
    n._RF.pop()
}