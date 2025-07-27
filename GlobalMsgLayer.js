import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as _ from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as p from "./cc.js";
import * as M from "./cc.js";
import * as v from "./cc.js";
import * as a from "./cc.js";
import * as I from "./cc.js";
import * as f from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as b from "./ws_protocol.mjs_cjs=&original=.js";
import * as L from "./cv.js";
import * as T from "./FakeMultipleGame.js";
import * as C from "./FakeMultipleGame.js";
import * as A from "./CrashTracing.js";
import * as w from "./ScrollViewReuse.js";
import * as S from "./ScrollViewReuse.js";
import * as E from "./ScrollViewReuse.js";
import * as D from "./GlobalMsgDataManager.js";
import * as F from "./RemindData.js";

function main() {
    var y, R, G, N, O, V, x, P, U, q, k, B, H;
    l._RF.push({}, "cb1dbMail5BH7ALKTs46aqG", "GlobalMsgLayer", void 0);
    class W {
        constructor() {
            this.cellIndex = 0, this.dataIndex = 0, this.cellType = E.GMSG_UI_TYPE_NONE, this.toplevel = w.GMSG_UI_LEVEL_NONE, this.remindData = null, this.mailData = null, this.msgTime = 0
        }
    }
    e("MsgViewCellFlag", W);
    const {
        ccclass: z,
        property: Y
    } = r;
    e("GlobalMsgLayer", (y = Y(n), R = Y(a), G = Y(o), N = Y(s), O = Y(s), z(((H = class e extends g {
        constructor(...e) {
            super(...e), i(this, "prefab_item", P, this), i(this, "btn_back", U, this), i(this, "scrollview", q, this), i(this, "empty_node", k, this), i(this, "loading_node", B, this), this._vCellFlagInfo = [], this._bRollToTopOnce = !1, this._lastRollToTopPos = c(_.ZERO), this._bInitScrollViewReuseOnce = !1, this.AVERAGE_BACK_WIDTH = 300, this.showActionComplete = !1, this.OFFSET_Y_DEFAULT = 126
        }
        static getSinglePrefabInst(t, i) {
            let l = i;
            return l || (l = h.getScene().children[0]), e._g_prefabInst || (e._g_prefabInst = d(t)), l.getChildByUuid(e._g_prefabInst.uuid) || u(e._g_prefabInst, !0) || (e._g_prefabInst = d(t)), e._g_prefabInst
        }
        static getLanguageIndex(t) {
            let i = -1,
                l = t.mail_title.length;
            return l > 0 && (i = e._g_iLanguageIndex, e._g_iLanguageIndex >= l && (i = l >= 2 ? 1 : 0)), i
        }
        static setLanguageIndex(t) {
            e._g_iLanguageIndex = t
        }
        static getReqMailListStatus() {
            return e._g_bReqMailListGlobalStatus
        }
        static markReqMailListStatus() {
            e._g_bReqMailListGlobalStatus = !0
        }
        static resetReqMailListStatus() {
            e._g_bReqMailListGlobalStatus = !1, e._removeFetchMailAttachmentIDAll()
        }
        static getMailMaxLimitCount() {
            return e._g_iMailMaxLimitCount
        }
        static getMailAttachmentDefaultIndex() {
            return e._g_iMailAttachmentDefaultIndex
        }
        static requestAnnounceList() {
            this._g_reqInProgress++, b.worldNet.requestAnnounceList()
        }
        static requestMailList(t) {
            let i = !0 === t ? 0 : b.globalMsgDataMgr.getMailList().length,
                l = !0 === t ? Math.max(0, b.globalMsgDataMgr.getMailList().length - 1) : i + e._g_iMailMaxCountPerPage;
            this._g_reqInProgress++, b.worldNet.requestMailList(i, l)
        }
        static fetchMail(t, i, l) {
            1 === i ? b.worldNet.requestFetchOneMail(t) : 2 !== i && 3 !== i && 4 !== i || b.worldNet.requestFetchOneAnnounce(t), l && e._addFetchMailAttachmentID(t)
        }
        autoShow(t, i = !0) {
            this.node.active || b.tools.triggerPopupShowEvent();
            try {
                var l;
                if (t || (t = h.getScene()), t.getChildByUuid(this.node.uuid) || t.addChild(this.node), this.node.active = !0, this.node.setSiblingIndex(t.children.length + 1), e._g_reqInProgress = 0, i ? (this.showActionComplete = !1, b.action.showAction(this.node, b.action.eMoveActionDir.EMAD_TO_LEFT, b.action.eMoveActionType.EMAT_FADE_IN, b.action.delay_type.NORMAL, ((e, t) => {}), ((t, i) => {
                        this.showActionComplete = !0, this._initScrollViewReuseOnce(), this._onMsgUpdateListView(), e._g_bReqMailListGlobalStatus = !1, this._reqAnounceMailListOnce(), b.MessageCenter.send(b.Enum.MessageCenterAction.NotificationShow, !0)
                    }))) : (M.stopAllByTarget(this.node), this._initScrollViewReuseOnce(), this._onMsgUpdateListView(), e._g_bReqMailListGlobalStatus = !1, this._reqAnounceMailListOnce(), b.MessageCenter.send(b.Enum.MessageCenterAction.NotificationShow, !0)), !b.appConfig.isLandscapeLayout) null == (l = L.instance) || l.moveHeaderToRight(this.AVERAGE_BACK_WIDTH)
            } catch (e) {
                var n;
                null == (n = C.getInstance()) || n.trace(T.NotificationCenter, "NotificationCenter", {
                    Reason: "Failed to show notification center popup",
                    ErrorMessage: null == e ? void 0 : e.message,
                    ErrorStack: null == e ? void 0 : e.stack
                })
            }
        }
        autoHide(e = !0) {
            var t;
            b.appConfig.isLandscapeLayout || (null == (t = L.instance) || t.moveHeaderToLeft());
            if (this.node.activeInHierarchy) try {
                let t = b.globalMsgDataMgr.getRemindList();
                for (let e = 0; e < t.length; ++e) {
                    let i = t[e];
                    i.msgStatus != D.RMSG_STATUS_PENDING && (i.msgNew = !1)
                }
                b.MessageCenter.send(b.Enum.MessageCenterAction.NotificationShow, !1), !1 !== e ? b.action.showAction(this.node, b.action.eMoveActionDir.EMAD_TO_RIGHT, b.action.eMoveActionType.EMAT_FADE_OUT, b.action.delay_type.NORMAL, ((e, t) => {}), ((e, t) => {
                    b.MessageCenter.send("updateListView", !1), b.MessageCenter.send("HideWebview_ShowWindows", !0)
                }), 1 / p.getFrameRate()) : (M.stopAllByTarget(this.node), this.node.active = !1, b.MessageCenter.send("updateListView", !1), b.MessageCenter.send("HideWebview_ShowWindows", !0)), this.showActionComplete || b.action.removeShowActionShieldLayer(this.node)
            } catch (e) {
                var i;
                null == (i = C.getInstance()) || i.trace(T.NotificationCenter, "NotificationCenter", {
                    Reason: "Failed to hide notification center popup",
                    ErrorMessage: null == e ? void 0 : e.message,
                    ErrorStack: null == e ? void 0 : e.stack
                })
            }
        }
        onSVEventScrolling(e) {
            if (this._lastRollToTopPos.y - this.scrollview.content.position.y >= 100 && !this._bRollToTopOnce) {
                this._bRollToTopOnce = !0;
                let e = this.scrollview.content.getChildByName("txt_loading");
                if (!e) {
                    e = new s("txt_loading");
                    let t = e.addComponent(m);
                    t.useSystemFont = !0, t.fontSize = 36, t.horizontalAlign = m.HorizontalAlign.CENTER, t.verticalAlign = m.VerticalAlign.CENTER, t.string = "Loading......", e.getComponent(I).setAnchorPoint(new f(.5, .5)), this.scrollview.content.addChild(e)
                }
                e.setPosition(new _(0, 50))
            }
        }
        onSVEventScrollToTop(e) {
            this._lastRollToTopPos = new _(this.scrollview.content.position)
        }
        onSVEventBounceTop(t) {
            this._bRollToTopOnce && e.requestMailList(!0)
        }
        onSVEventBounceBottom(t) {
            b.globalMsgDataMgr.getMailList().length < b.globalMsgDataMgr.getMailCountInfo().mail_total_num && e.requestMailList()
        }
        onSVEventScrollEnded(e) {
            this._bRollToTopOnce = !1, this._lastRollToTopPos = new _(_.ZERO);
            let t = this.scrollview.content.getChildByName("txt_loading");
            t && t.removeFromParent()
        }
        static _addFetchMailAttachmentID(t) {
            for (let i = 0; i < e._g_vFetchMailAttachmentID.length; ++i)
                if (e._g_vFetchMailAttachmentID[i] === t) return;
            e._g_vFetchMailAttachmentID.push(t)
        }
        static _isFetchMailAttachmentID(t) {
            for (let i = 0; i < e._g_vFetchMailAttachmentID.length; ++i)
                if (e._g_vFetchMailAttachmentID[i] === t) return !0;
            return !1
        }
        static _removeFetchMailAttachmentID(t) {
            for (let i = 0; i < e._g_vFetchMailAttachmentID.length; ++i)
                if (e._g_vFetchMailAttachmentID[i] === t) {
                    e._g_vFetchMailAttachmentID.splice(i, 1);
                    break
                }
        }
        static _removeFetchMailAttachmentIDAll() {
            e._g_vFetchMailAttachmentID.splice(0, e._g_vFetchMailAttachmentID.length), e._g_vFetchMailAttachmentID = []
        }
        onLoad() {
            this.updateWidget(), b.resMgr.adaptWidget(this.node), this.btn_back && this.btn_back.node.on("click", this._onClickBack, this), this.empty_node && (this.empty_node.active = !1), this.loading_node && (this.loading_node.active = !1), this._addObserver()
        }
        start() {}
        onDestroy() {
            this._removeObserver()
        }
        _addObserver() {
            b.MessageCenter.register("close_globalMsgLayer", this.autoHide.bind(this), this.node), b.MessageCenter.register("updateListView", this._onMsgUpdateListView.bind(this), this.node), b.MessageCenter.register("pb_noticefetchonemail", this._onMsgFetchOne.bind(this), this.node)
        }
        _removeObserver() {
            b.MessageCenter.unregister("close_globalMsgLayer", this.node), b.MessageCenter.unregister("updateListView", this.node), b.MessageCenter.unregister("pb_noticefetchonemail", this.node)
        }
        _onClickBack(e) {
            b.AudioMgr.playButtonSound("back_button.mp3"), this.autoHide()
        }
        _sortCheck() {
            let t = b.globalMsgDataMgr.getRemindList(),
                i = t.length,
                l = b.globalMsgDataMgr.getAnnounceList(),
                n = l.length,
                a = b.globalMsgDataMgr.getMailList(),
                o = a.length,
                s = i + n + o;
            this._vCellFlagInfo.splice(s);
            let r = 0;
            for (let e = 0; e < i; ++e) null == this._vCellFlagInfo[r] && (this._vCellFlagInfo[r] = new W), this._vCellFlagInfo[r].dataIndex = e, this._vCellFlagInfo[r].cellType = E.GMSG_UI_TYPE_REMIND, this._vCellFlagInfo[r].toplevel = t[e].msgNew ? w.GMSG_UI_LEVEL_IMMEDIATELY_UNREAD : w.GMSG_UI_LEVEL_IMMEDIATELY_READ, this._vCellFlagInfo[r].remindData = t[e], this._vCellFlagInfo[r].mailData = null, this._vCellFlagInfo[r].msgTime = t[e].msgTime, r++;
            for (let e = 0; e < n; ++e) null == this._vCellFlagInfo[r] && (this._vCellFlagInfo[r] = new W), this._vCellFlagInfo[r].dataIndex = e, this._vCellFlagInfo[r].cellType = E.GMSG_UI_TYPE_ANNOUNCE, this._vCellFlagInfo[r].toplevel = this._checkMailTopLevel(l[e]), this._vCellFlagInfo[r].remindData = null, this._vCellFlagInfo[r].mailData = l[e], this._vCellFlagInfo[r].msgTime = l[e].mail_sendtime, r++;
            for (let e = 0; e < o; ++e) null == this._vCellFlagInfo[r] && (this._vCellFlagInfo[r] = new W), this._vCellFlagInfo[r].dataIndex = e, this._vCellFlagInfo[r].cellType = E.GMSG_UI_TYPE_MAIL, this._vCellFlagInfo[r].toplevel = this._checkMailTopLevel(a[e]), this._vCellFlagInfo[r].remindData = null, this._vCellFlagInfo[r].mailData = a[e], this._vCellFlagInfo[r].msgTime = a[e].mail_sendtime, r++;
            this._vCellFlagInfo.sort(((e, t) => e.toplevel > t.toplevel ? -1 : e.toplevel === t.toplevel ? t.msgTime - e.msgTime : 1));
            for (let e = 0; e < r - 1; ++e) this._vCellFlagInfo[e].cellIndex = e;
            let g = 0 == r;
            this.scrollview.node.active = !g;
            let c = e._g_reqInProgress > 0;
            this.empty_node && (this.empty_node.active = !c && g), this.loading_node && (this.loading_node.active = c && g)
        }
        _checkMailTopLevel(e) {
            let t = w.GMSG_UI_LEVEL_NONE;
            switch (e.mail_state) {
                case 1:
                    switch (e.isexpired) {
                        case 1:
                            t = w.GMSG_UI_LEVEL_EXPIRED_READ;
                            break;
                        case 2:
                            t = w.GMSG_UI_LEVEL_SLOWLY_READ
                    }
                    break;
                case 2:
                    switch (e.isexpired) {
                        case 1:
                            t = w.GMSG_UI_LEVEL_EXPIRED_UNREAD;
                            break;
                        case 2:
                            t = w.GMSG_UI_LEVEL_SLOWLY_UNREAD
                    }
            }
            return t
        }
        _initScrollViewReuseOnce() {
            if (this._bInitScrollViewReuseOnce) return;
            this._bInitScrollViewReuseOnce = !0;
            let e = this.scrollview.getComponent(A);
            e.bindPrefab(this.prefab_item, "GlobalMsgItem"), e.bindScrollEventTarget(this), e.generateItemPool()
        }
        _onMsgUpdateListView(t = !1) {
            t && e._g_reqInProgress--, this._sortCheck();
            let i = this.scrollview.getComponent(A);
            i.isGenerateItemPool() && i.reloadView(this._vCellFlagInfo, !1)
        }
        _onMsgFetchOne(t) {
            if (!t) return;
            let i = b.globalMsgDataMgr.getMailInfoByID(t.mail_id);
            if (!i) return;
            switch (b.StringTools.deepCopy(F.pb.MailInfo.create(t), i), i.isexpired) {
                case 1:
                case 3: {
                    let e = b.config.getStringData("tips_mail_type_0");
                    i.mail_type === S.REGULAR_MAIL && (e = b.config.getStringData("tips_mail_type_1"));
                    let t = b.StringTools.formatC("tips_mail_isexpired_%u", i.isexpired);
                    t = b.config.getStringData(t), t = b.StringTools.formatC(t, e), b.TT.showMsg(t, b.Enum.ToastType.ToastTypeInfo)
                }
                break;
                case 2:
                    e._isFetchMailAttachmentID(i.mail_id) && b.TT.showMsg(b.config.getStringData("tips_mail_fetch_ok"), b.Enum.ToastType.ToastTypeInfo)
            }
            e._isFetchMailAttachmentID(i.mail_id) && e._removeFetchMailAttachmentID(i.mail_id), 3 === i.isexpired ? b.globalMsgDataMgr.removeMailInfoByID(i.mail_id) : i.mail_type === S.REGULAR_MAIL ? b.globalMsgDataMgr.addMailNewNum(-1) : i.mail_type !== S.ANNOUNCE_NON_IMM && i.mail_type !== S.ANNOUNCE_IMME && i.mail_type !== S.KYC_STATUS || b.globalMsgDataMgr.addAnnounceNewNum(-1), b.MessageCenter.send("update_notice_status");
            let l = this.scrollview.getComponent(A),
                n = new f(l.getScrollFixedPosition());
            this._onMsgUpdateListView(), l.scrollToFixedPosition(n)
        }
        _reqAnounceMailListOnce() {
            let t = b.config.getCurrentLanguageDetails().index;
            if (e.setLanguageIndex(t), e._g_bReqMailListGlobalStatus) return;
            e._g_bReqMailListGlobalStatus = !0;
            let i = this.scrollview.node.getComponent(I).contentSize,
                l = this.prefab_item.data.getContentSize();
            e._g_iMailMaxCountPerPage = Math.floor(i.height / l.height), this.empty_node && this.loading_node && this.empty_node.active && (this.empty_node.active = !1, this.loading_node.active = !0), e.requestAnnounceList(), e.requestMailList()
        }
        onDisable() {
            b.tools.triggerPopupHideEvent()
        }
        updateWidget() {
            const e = b.tools.calcTopOffsetToMove(this.OFFSET_Y_DEFAULT);
            if (e > 0) {
                const t = this.node.getComponent(v);
                t && (t.isAbsoluteTop = !0, t.top = e)
            }
        }
    })._g_prefabInst = null, H._g_iLanguageIndex = 0, H._g_bReqMailListGlobalStatus = !1, H._g_iMailMaxCountPerPage = 0, H._g_iMailMaxLimitCount = 99, H._g_iMailAttachmentDefaultIndex = 1, H._g_vFetchMailAttachmentID = [], H._g_reqInProgress = 0, P = t((x = H).prototype, "prefab_item", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = t(x.prototype, "btn_back", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = t(x.prototype, "scrollview", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = t(x.prototype, "empty_node", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = t(x.prototype, "loading_node", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = x)) || V));
    l._RF.pop()
}