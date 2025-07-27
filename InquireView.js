import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./cv.js";
import * as h from "./ws_protocol.mjs_cjs=&original=.js";
import * as u from "./HashMap.js";
import * as p from "./TabButton.js";
import * as d from "./InquireItem.js";
import * as _ from "./InquireItemDate.js";
import * as g from "./ListView.js";
import * as f from "./LayoutChildAutoSize.js";
import * as y from "./SlideView.js";
import * as m from "./Enum.js";

function main() {
    var b, T, C, w, S, V, R, D, v, I, A, x, E, L, B, M;
    s._RF.push({}, "bd4d3ts7olNMq8rUJVokPSc", "InquireView", void 0);
    const {
        ccclass: P,
        property: q
    } = a;
    t("InquireView", (b = q(_), T = q(n), C = q(n), w = q(n), S = q(u), V = q(n), R = q(f), P((I = e((v = class extends r {
        constructor(...t) {
            super(...t), i(this, "scrollViewReuse", I, this), i(this, "scrollWithSlider_Landscape", A, this), i(this, "tabsParent", x, this), i(this, "topContent", E, this), i(this, "btn_arr", L, this), i(this, "noList_icon", B, this), i(this, "panelView", M, this), this.select_index = -1, this.isView = !1, this.list_arr = new h, this.pre_pull = new h, this.no_pre_pull = new h, this.noList_iconUITransform = null, this.topContentUITransform = null, this.recordCount = 10, this.pageNumber = 0, this.transactionData = [], this.loadMoreTransaction = !0, this.loadingTransactions = !1, this.moneyTabIndex = 4, this.localConversionRates = new h, this.countryCurrency = y.None, this.ccValid = !1
        }
        onLoad() {
            this.noList_iconUITransform = this.noList_icon.getComponent(o), this.topContentUITransform = this.topContent.getComponent(o), this.registerMsg()
        }
        onEnable() {
            this.select_index >= 0 && this.onTabSelected(this.select_index)
        }
        onDisable() {
            c.MessageCenter.send(c.Enum.MessageCenterAction.onRecordPageDisable)
        }
        start() {
            var t;
            this.btn_arr[0].node.active = c.appConfig.getLobbyConfig().casino.showPrimary || c.appConfig.isPKW, this.btn_arr[1].node.active = this.btn_arr[2].node.active = c.appConfig.getLobbyConfig().casino.showPrimary, this.btn_arr[3].node.active = c.appConfig.getWalletConfig().haveUSDTCurrency, this.btn_arr[this.moneyTabIndex].node.active = !c.appConfig.isPKW;
            let e = this.btn_arr.length,
                i = 0,
                s = -1;
            for (let t = 0; t < e; t++) this.btn_arr[t].node.on("click", (() => {
                c.AudioMgr.playButtonSound("tab.mp3"), this.select_index != t && this.onTabSelected(t)
            }), this), this.btn_arr[t].node.active && (-1 == s && (s = t), i++);
            var n;
            (this.tabsParent.active = i > 1, null == (t = this.scrollViewReuse.getComponent(g)) || t.updateSize(), this.scrollWithSlider_Landscape) && (null == (n = this.scrollWithSlider_Landscape.getComponent(g)) || n.updateSize());
            if (this.scrollViewReuse.bindScrollEventTarget(this), this.scrollViewReuse.init(this.bindcallfunc.bind(this), this.getItemType.bind(this)), s >= 0 && this.onTabSelected(s), this.countryCurrency = c.dataHandler.getUserData().getCountryCurrency(), this.ccValid = c.appConfig.getWalletConfig().isValidCurrency(this.countryCurrency), this.ccValid) {
                let t = l.localStorage.getItem(this.countryCurrency.code);
                if (t) {
                    JSON.parse(t).forEach((t => {
                        this.localConversionRates.add(t.timestamp, t.rate)
                    }))
                }
            }
        }
        registerMsg() {
            c.MessageCenter.register("InquireView_QueryResponse", this.BankDetailsQueryResponse.bind(this), this.node)
        }
        onDestroy() {
            c.MessageCenter.unregister("InquireView_QueryResponse", this.node)
        }
        onTabSelected(t) {
            this.setBtnState(t), this.show(t)
        }
        onSVEventScrollToBottom(t) {
            this.select_index == this.moneyTabIndex ? this.loadingTransactions || this.fetchTransactionRecords() : this.BankDetailsQueryRequest(this.select_index, !1)
        }
        onSVEventScrollToTop(t) {
            this.select_index == this.moneyTabIndex ? this.loadingTransactions || this.resetMoneyTransactionsContent() : this.BankDetailsQueryRequest(this.select_index, !0)
        }
        setBtnState(t) {
            this.select_index != t && (this.select_index >= 0 && (this.btn_arr[this.select_index].isActive = !1), t >= 0 && (this.btn_arr[t].isActive = !0), this.select_index = t)
        }
        show(t) {
            this.isView = !1;
            let e = this.list_arr.get(t);
            e ? (this.reloadView(e, !0), this.updateViewState(e), e.length <= 0 && this.BankDetailsQueryRequest(t, !1)) : t == this.moneyTabIndex ? this.resetMoneyTransactionsContent() : this.BankDetailsQueryRequest(t, !1)
        }
        BankDetailsQueryRequest(t, e) {
            let i = (e ? this.pre_pull : this.no_pre_pull).get(t),
                s = null;
            s = i ? {
                detail_type: t,
                is_prev_pull: e,
                pull_count: 20,
                pull_pos: e ? i.first_inc_id : i.last_inc_id,
                begin_time: i.begin_time,
                end_time: i.end_time,
                table_suffix_time: i.table_suffix_time
            } : {
                detail_type: t,
                is_prev_pull: e,
                pull_count: 20,
                pull_pos: 0,
                begin_time: 0,
                end_time: 0,
                table_suffix_time: 0
            }, c.worldNet.BankDetailsQueryRequest(s)
        }
        BankDetailsQueryResponse(t) {
            let e = c.StringTools.getArrayLength(t.snapshots);
            if (e > 0) {
                let i = t.is_prev_pull ? this.pre_pull : this.no_pre_pull,
                    s = m.pb.BankDetailsQueryResponse.create(t);
                if (i.add(t.detail_type, s), t.is_prev_pull) {
                    let e = this.no_pre_pull.get(t.detail_type);
                    e || (e = m.pb.BankDetailsQueryResponse.create(t), e.is_prev_pull = !1, this.no_pre_pull.add(t.detail_type, e))
                } else {
                    let e = this.pre_pull.get(t.detail_type);
                    e || (e = m.pb.BankDetailsQueryResponse.create(t), e.is_prev_pull = !0, this.pre_pull.add(t.detail_type, e))
                }
                let n = this.list_arr.get(t.detail_type);
                if (n || (n = []), t.is_prev_pull)
                    for (let i = e - 1; i >= 0; i--) n.unshift(m.pb.BankDetailsSnapshot.create(t.snapshots[i]));
                else
                    for (let i = 0; i < e; i++) n.push(m.pb.BankDetailsSnapshot.create(t.snapshots[i]));
                this.list_arr.add(t.detail_type, n)
            }
            let i = this.list_arr.get(t.detail_type);
            i || (i = []), this.reloadView(i, !this.isView), this.updateViewState(i)
        }
        resetMoneyTransactionsContent() {
            this.reloadView(this.transactionData, !0), this.transactionData = [], this.pageNumber = 0, this.loadMoreTransaction = !0, this.fetchTransactionRecords()
        }
        fetchTransactionRecords() {
            if (this.loadMoreTransaction) {
                this.loadingTransactions = !0;
                let t = "?Order=desc&Sort=updatedAt&Page=" + this.pageNumber + "&Size=" + this.recordCount,
                    e = c.config.getStringData("WEB_API_PAYMENTS_TRANSACTIONS", !0) + t;
                c.http.sendRequestV2(e, {}, this.onTransactionRecordSuccess.bind(this), this.onTransactionRecordFailure.bind(this), c.http.HttpRequestType.GET), this.pageNumber++
            }
        }
        onTransactionRecordSuccess(t) {
            this.loadingTransactions = !1, t && t.items && t.items.length > 0 ? this.transactionData.push(...t.items) : this.loadMoreTransaction = !1, this.reloadView(this.transactionData, !this.isView), this.updateViewState(this.transactionData), this.ccValid && this.fetchCurrencyConversionRate(this.transactionData)
        }
        onTransactionRecordFailure(t) {
            c.popUp.showFirstServerError(t), this.loadMoreTransaction = !1, this.loadingTransactions = !1, this.updateViewState(this.transactionData)
        }
        reloadView(t, e) {
            e && this.scrollViewReuse.sv.scrollToTop(0), t.forEach((t => {
                t.dayEpoch = c.config.getTimeWithTimeZone(t.createdAt ? new Date(t.createdAt).getTime() : 1e3 * t.create_time).setHours(0, 0, 0, 0)
            }));
            let i = [],
                s = [];
            for (let e = 0; e < t.length; e++) s.includes(t[e].dayEpoch) || (i.push({
                type: 1,
                data: t[e]
            }), s.push(t[e].dayEpoch)), i.push({
                type: 0,
                data: t[e]
            });
            this.scrollViewReuse.notifyDataSetChanged(i)
        }
        updateViewState(t) {
            this.isView = c.StringTools.getArrayLength(t) > 0;
            let e = 0,
                i = !1;
            if (this.isView ? (this.noList_icon.active = !1, this.scrollViewReuse.node.active = !0, this.scrollWithSlider_Landscape && (this.scrollWithSlider_Landscape.active = !0), e = this.scrollViewReuse.itemsTotalHeight, i = !0) : (this.scrollViewReuse.node.active = !1, this.scrollWithSlider_Landscape && (this.scrollWithSlider_Landscape.active = !1), this.noList_icon.active = !0, e = this.noList_iconUITransform.height, i = !1), this.panelView) {
                let t = this.panelView.swipeIndicator.getComponent(o).height + this.topContentUITransform.height;
                this.panelView.defSize = t + e + .001, this.panelView.canSlideMax = i
            }
        }
        bindcallfunc(t, e, i) {
            0 == e.type ? t.getComponent(p).updateItemData(i, e.data, this.getCurrencyConversion(e.data)) : 1 == e.type && t.getComponent(d).updateItemData(i, e.data)
        }
        getItemType(t, e) {
            return t.type
        }
        fetchCurrencyConversionRate(t) {
            let e = [];
            if (t.forEach((t => {
                    const i = c.config.getTimeWithTimeZone(t.createdAt ? new Date(t.createdAt).getTime() : 1e3 * t.create_time).setUTCHours(0, 0, 0, 0);
                    e.includes(i) || this.localConversionRates.has(i) || e.push(i)
                })), !e.length) return;
            let i = Math.max(...e),
                s = Math.min(...e),
                n = c.config.getStringData("WEB_API_GET_BULK_EXCHANGE_RATE", !0);
            this.getExchangeRateAPI(n, c.appConfig.getWalletConfig().defaultCurrency, this.countryCurrency, s, i)
        }
        getExchangeRateAPI(t, e, i, s, n) {
            let a = t + "?from=" + e.code + "&to=" + i.code + "&fromDate=" + s + "&toDate=" + n;
            c.http.sendRequestV2(a, null, this.onFetchDataFromAPISuccess.bind(this), this.onFetchDataFromAPIFailed.bind(this), c.http.HttpRequestType.GET, c.http.HttpParseType.NONE, !1, !1, !1)
        }
        onFetchDataFromAPISuccess(t) {
            t.forEach((t => {
                this.localConversionRates.add(t.timestamp, t.rate, !0)
            })), l.localStorage.setItem(this.countryCurrency.code, JSON.stringify(t)), this.reloadView(this.transactionData, !this.isView)
        }
        onFetchDataFromAPIFailed(t) {
            this.reloadView(this.transactionData, !this.isView)
        }
        getCurrencyConversion(t) {
            let e = 0;
            const i = c.config.getTimeWithTimeZone(t.createdAt ? new Date(t.createdAt).getTime() : 1e3 * t.create_time).setUTCHours(0, 0, 0, 0);
            return this.localConversionRates.has(i) && (e = this.localConversionRates.get(i)), e
        }
    }).prototype, "scrollViewReuse", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = e(v.prototype, "scrollWithSlider_Landscape", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(v.prototype, "tabsParent", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = e(v.prototype, "topContent", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = e(v.prototype, "btn_arr", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), B = e(v.prototype, "noList_icon", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = e(v.prototype, "panelView", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = v)) || D));
    s._RF.pop()
}