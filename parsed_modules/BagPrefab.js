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
import * as f from "./cc.js";
import * as n from "./cc.js";
import * as T from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as k from "./BagTuplePrefab.js";
import * as m from "./NodePage.js";
import * as b from "./Translator.js";
import * as P from "./AndroidBackButton.js";
import * as C from "./mttconfig.js";
import * as v from "./Pb.js";
import * as E from "./NestableScrollView_Outer_ts.js";
import * as I from "./NestableScrollView_Inner_ts.js";
import * as B from "./TicketTuplePrefab.js";
import * as N from "./GiftDialog.js";
import * as D from "./UserDetailTuple.js";
import * as L from "./BasicScene.js";
import * as y from "./httpApis.js";
import * as U from "./MTTConnector.js";
import * as w from "./cv.js";
import * as R from "./CrashTracing.js";
import * as S from "./CrashTracing.js";
import * as M from "./NodeTools.js";
import * as x from "./AppUpdate.js";
import * as A from "./MttPrefab.js";

function main() {
    var O, V, H, G, W, K, F, q, z, Y, j, Q, $, Z, J, X, tt, et, it, ot, st, nt, at, rt, lt, ct, ht, dt, gt, ut, pt, Tt, ft, _t, kt, mt, bt, Pt, Ct, vt;
    o._RF.push({}, "fe18d3id2xMqZci3PRO0Srj", "BagPrefab", void 0);
    const {
        ccclass: Et,
        property: It
    } = h;
    t("BagPrefab", (O = It(s), V = It(s), H = It(n), G = It(a), W = It(r), K = It(r), F = It(r), q = It(l), z = It(l), Y = It(s), j = It(s), Q = It(s), $ = It([l]), Z = It(l), J = It(E), X = It([I]), tt = It([l]), et = It(c), it = It(l), Et((nt = e((st = class extends L {
        constructor(...t) {
            super(...t), i(this, "backButton", nt, this), i(this, "recordButton", at, this), i(this, "pageHeader", rt, this), i(this, "scrollView", lt, this), i(this, "tuplePrefab", ct, this), i(this, "ticketPrefab", ht, this), i(this, "giftDialogPrefab", dt, this), i(this, "headerContainer", gt, this), i(this, "innerNode", ut, this), i(this, "searchUserButton", pt, this), i(this, "confirmSendButton", Tt, this), i(this, "selectTicketButton", ft, this), i(this, "subPageHeader", _t, this), i(this, "underline", kt, this), i(this, "pageView", mt, this), i(this, "listView", bt, this), i(this, "emptyLabel", Pt, this), i(this, "searchBar", Ct, this), i(this, "userDetailNode", vt, this), this.selectedToolId = 0, this.selectedUserId = 0, this.selectedForeignId = 0, this.selectedTicketName = "", this.selectedTicketCheck = !1, this.selectedTicketNumber = 0, this.selectedTicketMax = 0, this.groupTicketOj = {}, this.tempSelectTicketCheck = !1, this.tempSelectedToolId = 0, this.tempSelectedTicketName = "", this.tempSelectedTicketMax = 0, this._hallScript = null, this._parentPage = null, this._bagRecordPage = null, this.tupleLimit = 12, this.extendNum = 6, this.dataList = [], this.updateTimer = 0, this.updateInterval = .2, this._isRecord = !1, this._currentPage = 0, this._dialog = null, this.mttSetTimeout = null, this.appUpdate = void 0, this._hasAppUpdate = !1, this._appUpdateSuccess = !1, this._spacing = 0, this._titleHeight = 0, this._tupleHeight = 0, this._tuplePerPage = 0, this._lastContentY = 0, this._logTimes = 0, this._retryTimeout = null, this._retryInterval = 3e3, this._isRequestingAPI = !1, this.initStartPage = () => {
                this._appUpdateSuccess = !0, d(this) && this.setPage()
            }, this.failGetUrlConfigVersion = () => {
                this.showNetworkErrorDialog()
            }, this.setPage = t => {
                if (cc_mtt.vv.ConsoleLog.log("setPage", cc_mtt.vv.DataManager.token), cc_mtt.vv.DataManager.token && this._appUpdateSuccess && !this._isRequestingAPI) {
                    this._isRequestingAPI = !0, cc_mtt.vv.ConsoleLog.log("cc_mtt.vv.DataManager.token", cc_mtt.vv.DataManager.token), g.isNative && g.os === g.OS.ANDROID && P.getInstance().addBackFunction("BagPrefab", this.onBackClicked.bind(this)), this.showLoading();
                    const e = () => {
                        this._isRequestingAPI = !1, d(this) && (cc_mtt.vv.ConsoleLog.log("check->", cc_mtt.vv.DataManager.backPackTool), this.dataList = this.sortList(), this.addList(this.dataList, this.listView[0].content, !1), this.hideLoading(), this.clearNewBags(), t && t instanceof Function && t())
                    };
                    this.updateToolListHttp((() => {
                        A.instance ? A.instance.switchToFullList(e, e) : e()
                    }))
                } else d(this.node) && this.onTokenError(U.instance.config.tokenErrorMsg.NO_TOKEN)
            }, this.retryUpdateToolListHttp = null, this.retryRequestToken = () => {
                U.instance.requestToken()
            }, this.onTokenEnd = () => {
                cc_mtt.vv.ConsoleLog.log("MTTBackpack BagPrefab onTokenUpdate", cc_mtt.vv.DataManager.token, d(this.node)), d(this.node) && (clearTimeout(this._retryTimeout), this.connect())
            }, this.onTokenUpdate = () => {
                cc_mtt.vv.ConsoleLog.log("MTTBackpack BagPrefab onTokenUpdate", cc_mtt.vv.DataManager.token, d(this.node)), d(this.node) && d(this.retryUpdateToolListHttp) && (this.retryUpdateToolListHttp(), this.retryUpdateToolListHttp = null)
            }, this.onTokenError = t => {
                cc_mtt.vv.ConsoleLog.log("MTTBackpack BagPrefab onTokenError", cc_mtt.vv.DataManager.token, t, d(this.node), this.node.active), d(this.node) && (t != U.instance.config.tokenErrorMsg.REQUEST_TOKEN_FAIL && this._logTimes < 5 && this._logTimes++, this.node.active && (clearTimeout(this._retryTimeout), t == U.instance.config.tokenErrorMsg.REQUEST_TOKEN_FAIL ? this._retryTimeout = setTimeout(this.retryRequestToken, this._retryInterval) : this.retryRequestToken()))
            }
        }
        onLoad() {
            super.onLoad(), this.appUpdate = new x, this.initBasicScene(), this.hideHeader(), this.presetPage(), this.pageView.node.on(u.EventType.PAGE_TURNING, (() => {
                let t = this.pageView.content.getComponent(p),
                    e = this.pageView.getCurrentPageIndex();
                t.left = -e, t.right = e + 1 - this.listView.length;
                let i = this.underline.getComponent(p);
                i.left = e / this.listView.length, i.right = (e + 1) % this.listView.length / this.listView.length;
                for (let t = 0; t < this.subPageHeader.length; t++) M.changeNodeColor(this.subPageHeader[t], t === e ? U.instance.config.mttColor.bagPrefab.headerOn : U.instance.config.mttColor.bagPrefab.headerOff);
                cc_mtt.vv.ConsoleLog.log("curr ppp", this._currentPage, e), this._currentPage !== e && (this._currentPage = e, 0 == this._currentPage && (this.resetConfirmData(), this.setPage()))
            })), this.getUrlConfigVersion()
        }
        onEnable() {
            U.instance.registerMessageCenter(U.instance.config.BroadCast.MTT_TOKEN_END, this.onTokenEnd, this.node), U.instance.registerMessageCenter(U.instance.config.BroadCast.MTT_TOKEN_ERROR, this.onTokenError, this.node)
        }
        onDisable() {
            U.instance.unregisterMessageCenter(U.instance.config.BroadCast.MTT_TOKEN_END, this.node), U.instance.unregisterMessageCenter(U.instance.config.BroadCast.MTT_TOKEN_ERROR, this.node)
        }
        connect() {
            this._hasAppUpdate ? this.initStartPage() : this.getUrlConfigVersion()
        }
        onDestroy() {
            super.onDestroy(), U.instance.unregisterMessageCenter(U.instance.config.BroadCast.MTT_TOKEN_END, this.node), U.instance.unregisterMessageCenter(U.instance.config.BroadCast.MTT_TOKEN_ERROR, this.node), this.destroyBasicScene()
        }
        getUrlConfigVersion() {
            this._hasAppUpdate || (this._hasAppUpdate = !0, this.appUpdate.getUrlConfigVersion(this.initStartPage, this.failGetUrlConfigVersion))
        }
        showNetworkErrorDialog() {
            this.hideLoading("All");
            let t = this;
            this._hasAppUpdate = !1, d(this.node) && this.enabledInHierarchy && w.popUp.showMsg({
                title: b("ERROR_CODE_PKW.TITLE"),
                txt: b("MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR"),
                sureLabel: b("NETWORK.RECONNECT"),
                sureCallback: () => {
                    cc_mtt.vv.ConsoleLog.log("App update error retry"), t.getUrlConfigVersion()
                },
                cancelCallback: this.onBackClicked.bind(this),
                msgType: w.Enum.ToastType.ToastTypeWarning
            })
        }
        resetConfirmData() {
            this.selectedUserId = 0, this.selectedForeignId = 0, this.selectedTicketNumber = 0, this.selectedTicketName = "", this.selectedTicketMax = 0, this.selectedToolId = 0, this.selectedTicketCheck = !1, this.userDetailNode.active = !1, this.searchBar.string = ""
        }
        resetBagPage(t = !0) {
            this._dialog && (this._dialog.active = !1, this._dialog = null), this.closeAllPopUp(), 0 == this._currentPage ? (t && this.resetPage(), this.setPage()) : this.resetConfirmData(), this._hasAppUpdate || this.connect()
        }
        start() {}
        update(t) {
            if (this.node.active) {
                let t = -M.getNodeWidth(this.pageView.node) / 2,
                    e = M.getNodeWidth(this.underline) / 2 + t,
                    i = (M.getNodeWidth(this.subPageHeader[0].parent) - M.getNodeWidth(this.underline)) / 2;
                if (this.underline.setPosition(e - (this.pageView.content.position.x - t) * (M.getNodeWidth(this.subPageHeader[0].parent.parent) / M.getNodeWidth(this.pageView.content)) + i, this.underline.position.y), this.listView[0].content.children.length > 0) {
                    const t = this.listView[0].content.position.y,
                        e = M.getNodeHeight(this.listView[0].node),
                        i = t - this._lastContentY,
                        o = i > 0,
                        s = i < 0,
                        n = this.listView[0].content.children[0],
                        a = this.listView[0].content.children[this.listView[0].content.children.length - 1];
                    if (o) {
                        if (t + n.position.y > M.getNodeHeight(n)) {
                            const t = n.getComponent(k),
                                e = this._tuplePerPage * ++t._currentPage + +t._index;
                            if (!(e >= 0 && e < this.dataList.length)) return void--t._currentPage;
                            {
                                T("Data Index Up: " + e);
                                const i = this.dataList[e];
                                void 0 !== i && t.setInfo(i, !1, !1, !1), n.setPosition(n.position.x, a.position.y - M.getNodeHeight(a) - this._spacing), n.setSiblingIndex(this.listView[0].content.children.length)
                            }
                        }
                    } else if (s && t + a.position.y < -e) {
                        const t = a.getComponent(k),
                            e = this._tuplePerPage * --t._currentPage + t._index;
                        if (!(e >= 0 && e < this.dataList.length)) return void++t._currentPage;
                        {
                            const i = this.dataList[e];
                            T("Data Index Down: " + e), void 0 !== i && t.setInfo(i, !1, !1, !1), a.setPosition(a.position.x, n.position.y + M.getNodeHeight(a) + this._spacing), a.setSiblingIndex(0)
                        }
                    }
                    this._lastContentY = t
                }
            }
        }
        addTuple(t, e, i = !1) {}
        hideTuplesOutsideView(t) {
            for (let e of t.content.children) {
                let i = m.getPositionInView(e, this.listView[0].node),
                    o = i.y - M.getNodeHeight(e) > 1.3 * M.getNodeHeight(t.content.parent) / 2,
                    s = i.y < -1.3 * M.getNodeHeight(t.content.parent) / 2;
                M.setNodeOpacity(e, o || s ? 0 : 255)
            }
        }
        sortList() {
            let t = cc_mtt.vv.DataManager.backPackTool;
            return this.sortTicketByExpiryDate(t)
        }
        sortListRecord() {
            return cc_mtt.vv.DataManager.backPackToolRecord.sort(((t, e) => (e.Consumed ? e.Consumed.getTime() : e.Expiry.getTime()) - (t.Consumed ? t.Consumed.getTime() : t.Expiry.getTime())))
        }
        clearNewBags() {
            cc_mtt.vv.DataManager.newBagsCount = 0;
            let t = [];
            for (let e of cc_mtt.vv.DataManager.backPackTool) t.push(e.Id);
            m.setItemToLocal(C.OLD_BAG_ID, t)
        }
        setParentPage(t) {
            this._parentPage = t
        }
        presetPage() {
            this.pageHeader.string = b("BAG.HEADER.BAG")
        }
        presetPageRecord(t) {
            this.recordButton.node.active = !1, this.pageHeader.string = b("BAG.HEADER.RECORD")
        }
        resetPage() {
            this.listView[0].scrollToTop(0), this.removeList()
        }
        addList(t, e, i) {
            if (i) {
                let o = this.groupTicket(t);
                this.groupTicketOj = o, e.parent.children[0].active = o.length <= 0, Object.keys(o).forEach((t => {
                    let s = f(this.ticketPrefab),
                        n = s.getComponent(B);
                    n.setClickable(i), n.ticketName.string = o[t].name, n.ticketNumber.string = `x${o[t].num}`, n.toolId = o[t].toolId, n.bagPrefab = this, o[t].toolId == this.selectedToolId && (this.selectedTicketCheck = !0, n.ticketActive(!0)), s.parent = e
                }))
            } else this.onExtendTupleClicked()
        }
        groupTicket(t) {
            let e = [];
            for (let i = 0; i < t.length; i++)
                if (t[i].Usable && (null == t[i].Expiry || t[i].Expiry.getTime() > cc_mtt.vv.DataManager.getNow().getTime()))
                    if (t[i].ToolId in e) e[t[i].ToolId].num = e[t[i].ToolId].num + 1, e[t[i].ToolId].idArr.push(t[i].Id);
                    else {
                        let o = this.limitSub(t[i].Name, 26),
                            s = {
                                [t[i].ToolId]: {
                                    num: 1,
                                    name: o,
                                    toolId: t[i].ToolId,
                                    idArr: [t[i].Id]
                                }
                            };
                        e = {
                            ...e,
                            ...s
                        }
                    } return e
        }
        limitSub(t, e) {
            var i = /[\u4e00-\u9fa5]/g;
            if (t.replace(i, "**").length > e)
                for (var o = Math.floor(e / 2), s = t.length; o < s; o++)
                    if (t.substr(0, o).replace(i, "**").length >= e) return t.substr(0, o) + "...";
            return t
        }
        removeList() {
            this.listView[0].content.destroyAllChildren()
        }
        hideHeader() {
            this.headerContainer.active = !1;
            let t = this.innerNode.getComponent(p);
            d(t) && (t.top = 0)
        }
        onExtendTupleClicked() {
            this._spacing = this.listView[0].content.getComponent(_).spacingY, this._titleHeight = this.tuplePrefab.data.getChildByName("tuple_header").height + this._spacing, this._tupleHeight = this.tuplePrefab.data.getChildByName("background").height + this._spacing, this._tuplePerPage = Math.ceil(M.getNodeHeight(this.listView[0].node) / this._tupleHeight) + 2;
            let t = 0;
            this.listView[0].stopAutoScroll(), this.listView[0].content.setPosition(this.listView[0].content.position.x, 0);
            const e = 1 + this._tuplePerPage,
                i = this.listView[0].content.children.length;
            let o;
            for (let s = 1; s < e || s - 1 < this.dataList.length; s++) {
                const n = s - 1;
                s < i ? o = this.listView[0].content.children[s] : s <= e && (o = f(this.tuplePrefab), o.parent = this.listView[0].content), o.name = `${n}`;
                const a = o.getComponent(k);
                if (a.setIndex(n), 0 === s) a.setInfo(b("PKW_BAG.ALL_TOOL"), !0, !1, !1), o.setPosition(o.position.x, t), t += this._titleHeight;
                else {
                    const e = this.dataList[n];
                    void 0 !== e ? (a.setInfo(e, !1, !1, !1), o.setPosition(o.position.x, -t), t += M.getNodeHeight(o) + this._spacing) : o.setPosition(o.position.x, -(t + this._tupleHeight * (n - this.dataList.length)))
                }
                s === this.dataList.length && s >= e && (o.parent = null, o.destroy())
            }
            M.setNodeHeight(this.listView[0].content, t), this.emptyLabel[0].active = 0 === this.dataList.length
        }
        onRecordClicked() {}
        onBackClicked(t = !1) {
            g.isNative && g.os === g.OS.ANDROID && P.getInstance().removeBackFunction(t ? "BagRecordPrefab" : "BagPrefab")
        }
        onClickSubHeader(t, e) {
            this.changeSubPage(parseInt(e))
        }
        changeSubPage(t, e = !1) {
            (e || this.pageView.getCurrentPageIndex() !== t) && this.pageView.scrollToPage(t, .3)
        }
        chooseTicketDialogClick() {
            this.buttonClickable(this.selectTicketButton), this.openDialog(2)
        }
        onConfirmClick() {
            this.buttonClickable(this.confirmSendButton), this.openDialog(1)
        }
        openDialog(t) {
            if (1 == t) {
                if (cc_mtt.vv.ConsoleLog.log("openDialog", this.selectedTicketName), "" == this.selectedTicketName) return void this.callPopUpBox("PKW_BAG.TICKET_EMPTY", void 0);
                let e = f(this.giftDialogPrefab);
                e.parent = this.node.parent, this._dialog = e;
                let i = e.getComponent(N);
                i.setDialogType(t);
                let o = this.userDetailNode.getComponent(D);
                this.selectedTicketNumber = o._currentNum, i.setAvatar(o.avatar.spriteFrame), i.updateConfirmPage(o.userName.string, this.selectedForeignId, this.selectedTicketName, o._currentNum), i.callback = () => {
                    this.sendGift(), this._dialog = null
                }
            }
            2 == t && this.updateToolListHttp((() => {
                if (!d(this)) return;
                cc_mtt.vv.ConsoleLog.log("check->", cc_mtt.vv.DataManager.backPackTool), this.dataList = this.sortList();
                let e = this.groupTicket(this.dataList);
                if (this.dataList.length < 1 || e.length < 1) return void this.callPopUpBox("PKW_BAG.NO_TOOL", void 0);
                let i = f(this.giftDialogPrefab);
                i.parent = this.node.parent, this._dialog = i, i.getComponent(N).setDialogType(t), i.getComponent(N).callback = () => {
                    this.updateUserDetail(), this._dialog = null
                }, this.selectedTicketCheck = !1, this.tempSelectTicketCheck = !1, this.addList(this.dataList, i.getComponent(N).ticketsNode, !0)
            }))
        }
        buttonClickable(t) {
            t.interactable = !1, this.scheduleOnce((() => {
                t.interactable = !0
            }), 1)
        }
        searchButtonClick() {
            if (this.buttonClickable(this.searchUserButton), "" == this.searchBar.string) return void this.callPopUpBox("PKW_BAG.USER_ID_EMPTY", void 0);
            if (this.searchBar.string == U.instance.cv.dataHandler.getUserData().u32Uid.toString()) return void this.callPopUpBox("PKW_BAG.SEARCH_EMPTY", void 0);
            let t = {
                SearchForeignId: this.searchBar.string
            };
            this.resetConfirmData(), y.requestUserSearch(t, (t => {
                if (cc_mtt.vv.ConsoleLog.log(t), t.ErrorCode) {
                    let e = "ERROR_CODE_PKW." + t.ErrorCode;
                    t.ErrorCode == v.commonProto.ErrorCode.User_Not_Exist && (e = "PKW_BAG.SEARCH_EMPTY"), this.callPopUpBox(e, void 0)
                } else this.userDetailNode.active = !0, this.selectedUserId = t.UserId, this.selectedForeignId = parseInt(t.ForeignId), this.userDetailNode.getComponent(D).initUserDetail(t, "")
            }), (() => {
                console.log("httpApis.requestUserSearch onerror"), this.callPopUpBox("WITHDRAW_POPUP.WARNING.NETWORK_FAILURE", (() => {}))
            }))
        }
        handleTempSelectTicket(t, e, i) {
            this.tempSelectedToolId = t, this.tempSelectedTicketName = e, this.tempSelectedTicketMax = i, this.selectedTicketCheck = !0, this.tempSelectTicketCheck = !0
        }
        updateUserDetail() {
            cc_mtt.vv.ConsoleLog.log("updateUserDetail", this.selectedTicketMax), this.tempSelectTicketCheck && (this.selectedToolId = this.tempSelectedToolId, this.selectedTicketName = this.tempSelectedTicketName, this.selectedTicketMax = this.tempSelectedTicketMax), this.userDetailNode.getComponent(D).updateTicketInfo(this.selectedTicketName, this.selectedTicketMax)
        }
        sendGift() {
            if (this.selectedToolId) {
                cc_mtt.vv.ConsoleLog.log("sendGift", this.selectedToolId);
                let t, e = this.groupTicketOj[this.selectedToolId].idArr;
                this.selectedTicketNumber <= e.length && (t = e.slice(0, this.selectedTicketNumber));
                let i = {
                    ToUserId: this.selectedUserId,
                    ToolInBackpackIds: t
                };
                y.requestToolInBackpackGift(i, (t => {
                    cc_mtt.vv.ConsoleLog.log(t), t.ErrorCode ? 307 == t.ErrorCode ? this.callPopUpBox("PKW_BAG.SEND_GIFT_TEMP_BLOCK", void 0) : this.callPopUpBox("ERROR_CODE_PKW." + t.ErrorCode, void 0) : (this.callPopUpBox("POPUP_HINTS.GIFT.HANDSEL_SUCCESSFUL", void 0), this.resetConfirmData())
                }), (t => {
                    var e;
                    console.log("httpApis.requestToolInBackpackGift onerror"), this.callPopUpBox("WITHDRAW_POPUP.WARNING.NETWORK_FAILURE", (() => {})), null == (e = R.getInstance()) || e.trace(S.RequestToolBackPackGiftFail, "RequestToolBackPackGiftFail", t)
                }))
            } else cc_mtt.vv.ConsoleLog.log("sendGift no tool id")
        }
        callPopUpBox(t, e, i = null, o = "ERROR_CODE_PKW.TITLE") {
            cc_mtt.vv.ConsoleLog.log("callPopUpBox", t), i || (i = [{
                type: 0,
                text: b("MESSAGE_DIALOG_BLOCKER.OK"),
                callback: e
            }]);
            let s = i.length > 1;
            w.popUp.showMsg({
                title: b(o),
                txt: b(t),
                isTwoBtn: s,
                sureLabel: i[0].text,
                sureCallback: i[0].callback,
                cancelLabel: s ? i[1].text : "",
                cancelCallback: s ? i[1].callback : null,
                msgType: w.Enum.ToastType.ToastTypeWarning
            })
        }
        closeAllPopUp() {}
        updateToolListHttp(t, e = !1) {
            let i = [];
            y.requestUserToolInBackPack((o => {
                cc_mtt.vv.ConsoleLog.log("getMyToolIds_RES:", o.ErrorCode, e ? o.ToolConsumptions.length : o.ToolInBackpacks.length);
                for (const t of e ? o.ToolConsumptions : o.ToolInBackpacks) i.push(t.ToolId);
                if (i.length > 0) {
                    let s = {
                        ToolIds: i
                    };
                    y.requestToolInfo(s, (i => {
                        cc_mtt.vv.ConsoleLog.log("getMyToolsInfo_RES:", i.ErrorCode, i.ToolInfos.length);
                        let s = [];
                        for (const t of e ? o.ToolConsumptions : o.ToolInBackpacks) {
                            let o = i.ToolInfos.find((e => e.Id == t.ToolId));
                            if (o) {
                                const i = cc_mtt.vv.DataManager.fillBackPackData(t, o, e);
                                s.push(i)
                            }
                        }
                        s = this.sortTicketByExpiryDate(s), e ? cc_mtt.vv.DataManager.backPackToolRecord = s : cc_mtt.vv.DataManager.backPackTool = s, t && t()
                    }), (i => {
                        this.onErrorUpdateToolListHttp(t, e, i)
                    }))
                } else e ? cc_mtt.vv.DataManager.backPackToolRecord = [] : cc_mtt.vv.DataManager.backPackTool = [], t && t()
            }), (i => {
                this.onErrorUpdateToolListHttp(t, e, i)
            }))
        }
        onErrorUpdateToolListHttp(t, e = !1, i = null) {
            var o;
            this._isRequestingAPI = !1, this.onTokenError(U.instance.config.tokenErrorMsg.NETWORK_ERROR), this.retryUpdateToolListHttp = () => {
                this.updateToolListHttp(t, e)
            }, null == (o = R.getInstance()) || o.trace(S.RequestToolBackPackFail, "RequestToolBackPackFail", i)
        }
        sortTicketByExpiryDate(t) {
            let e = (t = t.sort(((t, e) => e.Created.getTime() - t.Created.getTime()))).reduce((function(t, e) {
                return -1 === t.indexOf(e.ToolId) && t.push(e.ToolId), t
            }), []);
            let i = function(t, e) {
                    return t.reduce((function(t, i) {
                        let o = i[e];
                        return t[o] || (t[o] = []), t[o].push(i), t
                    }), {})
                }(t, "ToolId"),
                o = [];
            return e.forEach((t => {
                let e = i[t];
                e.sort(((t, e) => t.Expiry ? e.Expiry && t.Expiry.getTime() >= e.Expiry.getTime() ? 1 : -1 : 1)), e.forEach((t => {
                    o.push(t)
                }))
            })), o
        }
    }).prototype, "backButton", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), at = e(st.prototype, "recordButton", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), rt = e(st.prototype, "pageHeader", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), lt = e(st.prototype, "scrollView", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ct = e(st.prototype, "tuplePrefab", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ht = e(st.prototype, "ticketPrefab", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), dt = e(st.prototype, "giftDialogPrefab", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), gt = e(st.prototype, "headerContainer", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ut = e(st.prototype, "innerNode", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pt = e(st.prototype, "searchUserButton", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Tt = e(st.prototype, "confirmSendButton", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ft = e(st.prototype, "selectTicketButton", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _t = e(st.prototype, "subPageHeader", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), kt = e(st.prototype, "underline", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), mt = e(st.prototype, "pageView", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), bt = e(st.prototype, "listView", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Pt = e(st.prototype, "emptyLabel", [tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Ct = e(st.prototype, "searchBar", [et], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), vt = e(st.prototype, "userDetailNode", [it], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ot = st)) || ot));
    o._RF.pop()
}