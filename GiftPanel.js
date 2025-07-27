import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as G from "./cc.js";
import * as f from "./cc.js";
import * as p from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as S from "./cc.js";
import * as _ from "./cc.js";
import * as w from "./cc.js";
import * as b from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as d from "./cc.js";
import * as R from "./cc.js";
import * as T from "./cc.js";
import * as y from "./cc.js";
import * as I from "./gs_protocol.mjs_cjs=&original=.js";
import * as v from "./cv.js";
import * as D from "./CircleSprite.js";
import * as B from "./TableView.js";
import * as E from "./CustomToggle.js";
import * as V from "./GiftGoodsHelp.js";
import * as k from "./GiftGoodsCount.js";
import * as M from "./GiftGoodsRecordItem.js";
import * as N from "./GiftGoodsRecordItem.js";
import * as A from "./GiftData.js";
import * as z from "./GiftData.js";
import * as P from "./GiftData.js";
import * as F from "./GiftGoodsItem.js";
import * as x from "./GiftAnimSend.js";
import * as H from "./GameSceneInstance.js";

function main() {
    var O, U, L, q, Y, $, W, j, Z, K, X, J, Q, tt, et, it, nt, ot, st, at, lt, rt, _t, ht, gt, ct, dt, pt, ut, ft, bt, mt, St, yt, Ct, Gt, Tt, wt, Rt, It, vt, Dt, Bt, Et, Vt, kt, Nt;
    n._RF.push({}, "31e25M5qKRENKV5BKwtqOZ7", "GiftPanel", void 0);
    var Mt = function(t) {
        return t[t.NONE = 0] = "NONE", t[t.GIFT = 1] = "GIFT", t[t.HISTORY = 2] = "HISTORY", t
    }(Mt || {});
    class At {
        constructor() {
            this.isLoading = !1, this.isBouncing = !1
        }
    }
    const {
        ccclass: zt,
        property: Pt
    } = r;
    t("GiftPanel", (O = Pt(o), U = Pt(o), L = Pt(o), q = Pt(s), Y = Pt(s), $ = Pt(s), W = Pt(s), j = Pt(a), Z = Pt(a), K = Pt(a), X = Pt(a), J = Pt([B]), Q = Pt(B), tt = Pt(B), et = Pt(D), it = Pt(D), nt = Pt(s), ot = Pt(s), st = Pt(l), at = Pt(s), lt = Pt(s), rt = x("GameDataInstance"), zt(((Nt = class t extends _ {
        constructor(...t) {
            super(...t), i(this, "prefab_goods_help", gt, this), i(this, "prefab_goods_count", ct, this), i(this, "prefab_send_anim", dt, this), i(this, "panel", pt, this), i(this, "panel_gift", ut, this), i(this, "panel_history", ft, this), i(this, "img_shield", bt, this), i(this, "btn_send_help", mt, this), i(this, "btn_send_count", St, this), i(this, "btn_send_normal", yt, this), i(this, "btn_send_special", Ct, this), i(this, "toggle_stars", Gt, this), i(this, "toggle_gift_give", Tt, this), i(this, "toggle_gift_receive", wt, this), i(this, "tableView_gift", Rt, this), i(this, "tableView_history", It, this), i(this, "panel_top_btn_gift", vt, this), i(this, "panel_top_btn_history", Dt, this), i(this, "panel_top_img_check", Bt, this), i(this, "panel_gift_panel_star", Et, this), i(this, "panel_history_panel_btn", Vt, this), this._isAutoActing = !1, this._panel_src_pos = h(0, 0, 1), this._panel_scr_size = new g(0, 0), this._tableView_history_src_widget_top = 0, this._tableView_history_scrolling_info = new At, this._gift_view_data = [], this._curPage = Mt.NONE, this._curRecordType = H.protocol.TipRecordType.TipRecordType_Default, this._curStarID = 0, this._curGiftID = 0, this._curGiftCount = 1, this._giftGoodsCountInst = null, this._sendAnimInst = null, i(this, "gameDataInstance", kt, this)
        }
        autoShow(t, e = !0) {
            this._init(), this._autoAnimFunc(!0, e, this._animFinish.bind(this)), this._onMsgStarsRecvReadStatus(t)
        }
        autoHide(e = !0) {
            I.MessageCenter.send(`${t.g_class_name}_hide`), this._autoAnimFunc(!1, e, this._animFinish.bind(this))
        }
        onSVEventScrolling(e) {
            let i = e.getScrollOffset(),
                n = e.getMaxScrollOffset();
            if (e.node.uuid === this.tableView_history.node.uuid && this._tableView_history_scrolling_info.isBouncing) {
                let o = (i, n) => {
                    let o = e.content,
                        a = `${t.g_class_name}_historyView_txt_loading`,
                        l = o.getChildByName(a),
                        r = new g(g.ZERO),
                        _ = l.getComponent(d);
                    if (!l) {
                        l = new s(a), l.getComponent(d).setAnchorPoint(w(.5, .5)), o.addChild(l);
                        let t = l.addComponent(S);
                        t.useSystemFont = !0, t.fontSize = 36, t.horizontalAlign = S.HorizontalAlign.CENTER, t.verticalAlign = S.VerticalAlign.CENTER, t.string = "loading...", r = I.resMgr.getLabelStringSize(t)
                    }
                    let h = 0,
                        c = o.getComponent(d);
                    i ? (h = (1 - c.anchorY) * c.height - n / 2, h += (.5 - _.anchorY) * r.height) : (h = (0 - c.anchorY) * c.height - n / 2, h -= (.5 - _.anchorY) * r.height), l.setPosition(0, h), l.active = !0, this._tableView_history_scrolling_info.isLoading = !0
                };
                if (i.y < 0) {
                    let e = i.y;
                    e <= -200 && (o(!0, e), console.log(`${t.g_class_name} - history view scroll bounce top start`))
                } else {
                    let e = i.y - n.y;
                    e >= 200 && (o(!1, e), console.log(`${t.g_class_name} - history view scroll bounce bottom start`))
                }
            }
        }
        onSVEventBounceTop(e) {
            if (e.node.uuid === this.tableView_history.node.uuid && this._tableView_history_scrolling_info.isLoading) {
                this._tableView_history_scrolling_info.isLoading = !1, this._tableView_history_scrolling_info.isBouncing = !1, this._requestHistoryRecord(!0);
                let i = e.content,
                    n = `${t.g_class_name}_historyView_txt_loading`,
                    o = i.getChildByName(n);
                o && (o.active = !1)
            }
        }
        onSVEventBounceBottom(e) {
            if (this._tableView_history_scrolling_info.isLoading) {
                this._tableView_history_scrolling_info.isLoading = !1, this._tableView_history_scrolling_info.isBouncing = !1, this._requestHistoryRecord(!1);
                let i = e.content,
                    n = `${t.g_class_name}_historyView_txt_loading`,
                    o = i.getChildByName(n);
                o && (o.active = !1)
            }
        }
        onSVEventScrollToTop(t) {
            t.node.uuid === this.tableView_history.node.uuid && (this._tableView_history_scrolling_info.isBouncing = !0)
        }
        onSVEventScrollToBottom(t) {
            t.node.uuid === this.tableView_history.node.uuid && (this._tableView_history_scrolling_info.isBouncing = !0)
        }
        _autoAnimFunc(t, e, i = null) {
            this.node.active = !0, this.panel.active = !0, c.stopAllByTarget(this.panel);
            let n = null,
                o = h(this._panel_src_pos),
                s = h(this._panel_src_pos);
            if (t) {
                s.y -= this.panel.getComponent(d).height * this.panel.scale.y * (1 - this.panel.getComponent(d).anchorY), this.panel.setPosition(s);
                let t = p().call((() => {
                    this._isAutoActing = !1, this.img_shield.getComponent(u).enabled = !1, this.img_shield.active = !1, this.panel.setPosition(o), i && i()
                }));
                if (e) {
                    let e = p().to(.1, {
                        position: o
                    }, {
                        easing: f.backOut
                    });
                    n = p().sequence(e, t)
                } else n = t
            } else {
                this.panel.setPosition(o), s.y -= this.panel.getComponent(d).height * this.panel.scale.y * (1 - this.panel.getComponent(d).anchorY);
                let t = p().call((() => {
                    this._isAutoActing = !1, this.img_shield.getComponent(u).enabled = !1, this.img_shield.active = !1, this.panel.setPosition(o), this.node.active = !1, i && i()
                }));
                if (e) {
                    let e = p().to(.1, {
                        position: s
                    }, {
                        easing: f.backIn
                    });
                    n = p().sequence(e, t)
                } else n = t
            }
            n && (this._isAutoActing = !0, n.target(this.panel).start(), this.img_shield.active = !0, this.img_shield.getComponent(u).enabled = !0)
        }
        onLoad() {
            I.resMgr.adaptWidget(this.node, !0), this.node.on(s.EventType.TOUCH_END, (() => {
                this.autoHide()
            })), this.panel_top_btn_gift.on("click", (() => {
                I.AudioMgr.playButtonSound("tab"), this._selectPage(Mt.GIFT)
            }), this), this.panel_top_btn_history.on("click", (() => {
                I.AudioMgr.playButtonSound("tab"), this._selectPage(Mt.HISTORY)
            }), this);
            for (let t = 0; t < this.toggle_stars.length; ++t) this.toggle_stars[t].node.on("toggle", (e => {
                this._onToggleStar(t, e)
            }), this);
            this.toggle_gift_give.node.on("toggle", (t => {
                this._onToggleGiftGR(H.protocol.TipRecordType.TipRecordType_Send, t)
            }), this), this.toggle_gift_receive.node.on("toggle", (t => {
                this._onToggleGiftGR(H.protocol.TipRecordType.TipRecordType_Recv, t)
            }), this), this.btn_send_help.node.on("click", this._onClickBtnSendHelp, this), this.btn_send_count.node.on("click", this._onClickBtnSendCount, this), this.btn_send_normal.node.on("click", this._onClickBtnSendGift, this), this.btn_send_special.node.on("click", this._onClickBtnSendGift, this), this._panel_scr_size = b(this.panel.getComponent(d).width, this.panel.getComponent(d).height), this._tableView_history_src_widget_top = this.tableView_history.getComponent(m).top, this.tableView_history.bindScrollEventTarget(this)
        }
        start() {
            this._updateStaticText()
        }
        onEnable() {
            this._registerEvent()
        }
        onDisable() {
            this._unregisterEvent()
        }
        _registerEvent() {
            I.MessageCenter.register(`${A.g_class_name}_click`, this._onClickGiftItem.bind(this), this.node), I.MessageCenter.register(`${V.g_class_name}_click`, this._onClickGiftCount.bind(this), this.node), I.MessageCenter.register(N.GIFT_MSG_RESP_RECORDS, this._onMsgHistoryRecord.bind(this), this.node), I.MessageCenter.register(N.GIFT_MSG_STARS_CHANGED, this._onMsgStarsChanged.bind(this), this.node), I.MessageCenter.register(N.GIFT_MSG_NOTICE_NEWS, this._onMsgGiftNews.bind(this), this.node), I.MessageCenter.register(N.GIFT_MSG_STARS_RECVREAD_STATUS, this._onMsgStarsRecvReadStatus.bind(this), this.node), I.MessageCenter.register(N.GIFT_MSG_UPDATE_FORBIDDEN, this._onMsgUpdateForbidden.bind(this), this.node)
        }
        _unregisterEvent() {
            I.MessageCenter.unregister(`${A.g_class_name}_click`, this.node), I.MessageCenter.unregister(`${V.g_class_name}_click`, this.node), I.MessageCenter.unregister(N.GIFT_MSG_RESP_RECORDS, this.node), I.MessageCenter.unregister(N.GIFT_MSG_STARS_CHANGED, this.node), I.MessageCenter.unregister(N.GIFT_MSG_NOTICE_NEWS, this.node), I.MessageCenter.unregister(N.GIFT_MSG_STARS_RECVREAD_STATUS, this.node), I.MessageCenter.unregister(N.GIFT_MSG_UPDATE_FORBIDDEN, this.node)
        }
        _init() {
            this.node.active = !0, this._curPage = Mt.NONE, this._layoutPanelSize();
            {
                let t = [],
                    e = 3,
                    i = null,
                    n = this.gameDataInstance.tGiftData.getGiftInfoList();
                for (let o = 0; o < n.length; ++o)
                    if (o % e == 0 && (i = new z, t.push({
                            prefab_type: 0,
                            prefab_component: A,
                            prefab_datas: i
                        })), i) {
                        let t = new P;
                        t.isCheck = !1, t.info = n[o], i.items.push(t)
                    } this._gift_view_data = t
            }
            this._selectPage(Mt.GIFT, !1)
        }
        _initGiftPage(t) {
            this.panel_gift.active = !0, this._curStarID = 0, this._curGiftID = 0, this._curGiftCount = 1;
            let e = I.dataHandler.getUserData().u32Uid,
                i = this.gameDataInstance.tGiftData.getStarInfosExceptByID(e);
            if (this.panel_gift_panel_star.active) {
                for (let t = 0; t < this.toggle_stars.length; ++t) {
                    let e = this.toggle_stars[t],
                        n = e.node.getChildByName("img_head"),
                        o = e.node.getChildByName("txt_name").getComponent(S);
                    e.isChecked = !1, t < i.length ? (o.string = i[t].name, v.setCircleSprite(n, i[t].headurl, i[t].plat), e.setTouchEnable(!0), 0 === t && (e.isChecked = !0, this._curStarID = i[t].uid)) : (o.string = "", v.setCircleSprite(n, ""), e.setTouchEnable(!1))
                }
                this._updateToggleStarSelectStatus()
            } else 1 === i.length && (this._curStarID = i[0].uid);
            if (this._updateSendBtnStatus(), t) {
                for (let t = 0; t < this._gift_view_data.length; ++t) {
                    let e = this._gift_view_data[t].prefab_datas;
                    for (let t = 0; t < e.items.length; ++t) e.items[t].isCheck = !1
                }
                this.tableView_gift.bindData(this._gift_view_data), this.tableView_gift.reloadView()
            }
        }
        _initHistoryPage(t) {
            this.panel_history.active = !0, this.panel_history_panel_btn.active ? (this.toggle_gift_receive.isChecked = !0, this._setToggleStarGiftGRStatus(this.toggle_gift_give, H.protocol.TipRecordType.TipRecordType_Send), this._setToggleStarGiftGRStatus(this.toggle_gift_receive, H.protocol.TipRecordType.TipRecordType_Recv), this._curRecordType = H.protocol.TipRecordType.TipRecordType_Recv) : this._curRecordType = H.protocol.TipRecordType.TipRecordType_Send, t && (this.tableView_history.clearView(), this._requestHistoryRecord(!0))
        }
        _selectPage(t, e = !0) {
            if (this._curPage === t) return;
            this._curPage = t;
            let i = y(138, 139, 144),
                n = y(251, 216, 136),
                o = this.panel_top_btn_gift.getChildByName("txt").getComponent(S),
                s = this.panel_top_btn_history.getChildByName("txt").getComponent(S);
            switch (o.node.getComponent(C).color = i, s.node.getComponent(C).color = i, this.panel_gift.active = !1, this.panel_history.active = !1, t) {
                case Mt.HISTORY: {
                    let t = new G(G.ZERO),
                        i = I.resMgr.getLabelStringSize(s).width;
                    s.node.getComponent(C).color = n, s.node.parent.getComponent(d).convertToWorldSpaceAR(s.node.position, t), this.panel_top_img_check.node.getComponent(d).setContentSize(i, this.panel_top_img_check.node.getComponent(d).height), this.panel_top_img_check.node.parent.getComponent(d).convertToNodeSpaceAR(t, t), this.panel_top_img_check.node.setPosition(h(t.x, this.panel_top_img_check.node.position.y, this.panel_top_img_check.node.position.z)), this._initHistoryPage(e)
                }
                break;
                case Mt.GIFT:
                default: {
                    let t = new G(G.ZERO),
                        i = I.resMgr.getLabelStringSize(o).width;
                    o.node.getComponent(C).color = n, o.node.parent.getComponent(d).convertToWorldSpaceAR(o.node.position, t), this.panel_top_img_check.node.getComponent(d).setContentSize(i, this.panel_top_img_check.node.getComponent(d).height), this.panel_top_img_check.node.parent.getComponent(d).convertToNodeSpaceAR(t, t), this.panel_top_img_check.node.setPosition(h(t.x, this.panel_top_img_check.node.position.y, this.panel_top_img_check.node.position.z)), this._initGiftPage(e)
                }
            }
        }
        _setBtnSendCount(t, e, i) {
            if (this.btn_send_count.node.active = e, e) {
                let e = I.config.getStringData("Gift_quantity"),
                    n = this.btn_send_count.node.getChildByName("txt").getComponent(S),
                    o = this.btn_send_count.node.getChildByName("img_triangle");
                n.string = `${e}: ${t}`, o.angle = i ? 180 : 0
            }
        }
        _setBtnSendEnable(t, e, i) {
            if ((t.uuid === this.btn_send_normal.uuid || t.uuid === this.btn_send_special.uuid) && (t.node.active = e, e)) {
                let e = t.node.getChildByName("txt"),
                    n = t.node.getChildByName("img_mask");
                this.gameDataInstance.tGiftData.isForbidden() ? (t.enabled = !1, t.interactable = !1, n.active = !1, e.getComponent(C).color = y(51, 47, 43)) : (t.enabled = i, t.interactable = i, n.active = !i, e.getComponent(C).color = i ? y(80, 66, 38) : y(51, 47, 43))
            }
        }
        _setToggleStarGiftGRStatus(t, e) {
            let i = t.node.getChildByName("txt"),
                n = t.node.getChildByName("img").getComponent(l),
                o = t.isChecked ? 2 : 1,
                s = (e === H.protocol.TipRecordType.TipRecordType_Send ? "img_gift_give_" : "img_gift_receive_") + o,
                a = N.GIFT_PLIST_PATH;
            n.spriteFrame = I.resMgr.getSpriteAtlasFrame(a, s), i.getComponent(C).color = t.isChecked ? y(255, 171, 0) : y(148, 149, 149)
        }
        _updateStaticText() {
            this.panel_top_btn_gift.getChildByName("txt").getComponent(S).string = I.config.getStringData("Gift");
            let t = this.panel_top_btn_history.getChildByName("txt").getComponent(S);
            t.string = I.config.getStringData("Gift_record");
            let e = this.panel_top_btn_history.getChildByName("img_dot");
            if (e) {
                let i = new T(T.ZERO),
                    n = w(20, 0),
                    o = I.resMgr.getLabelStringSize(t),
                    s = t.node.getComponent(d);
                i.x += t.node.position.x + o.width * (1 - s.anchorX);
                let a = e.getComponent(d);
                i.x += n.x, i.x += a.width * (a.anchorX - .5), i.y += t.node.position.y + o.height * (1 - s.anchorY), i.y += n.y, i.y += a.height * (a.anchorY - .5), e.setPosition(h(i.x, i.y, 0))
            }
            this.panel_gift_panel_star.getChildByName("txt_gift_to").getComponent(S).string = I.config.getStringData("Gift_to"), this.btn_send_count.node.getChildByName("txt").getComponent(S).string = I.config.getStringData("Gift_quantity"), this.btn_send_normal.node.getChildByName("txt").getComponent(S).string = I.config.getStringData("Gift_send"), this.btn_send_special.node.getChildByName("txt").getComponent(S).string = I.config.getStringData("Gift_send"), this.toggle_gift_give.node.getChildByName("txt").getComponent(S).string = I.config.getStringData("Gift_send_gift"), this.toggle_gift_receive.node.getChildByName("txt").getComponent(S).string = I.config.getStringData("Gift_receive_gift")
        }
        _updateToggleStarSelectStatus() {
            for (let t = 0; t < this.toggle_stars.length; ++t) {
                let e = this.toggle_stars[t];
                e.node.getChildByName("txt_name").getComponent(C).color = e.isChecked ? y(255, 171, 0) : y(138, 139, 144)
            }
        }
        _updateSendBtnStatus() {
            if (this._setBtnSendCount(1, !1, !1), this._setBtnSendEnable(this.btn_send_normal, !1, !1), this._setBtnSendEnable(this.btn_send_special, !1, !1), this._curGiftID > 0)
                if (this._curStarID > 0) this._curGiftID < 1e3 ? (this._setBtnSendCount(1, !0, !1), this._setBtnSendEnable(this.btn_send_normal, !0, !0)) : this._curGiftID > 1e3 && this._setBtnSendEnable(this.btn_send_special, !0, !0);
                else {
                    let t = I.dataHandler.getUserData().u32Uid;
                    this.gameDataInstance.tGiftData.isStarByUid(t) ? this._curGiftID < 1e3 ? (this._setBtnSendCount(1, !0, !1), this._setBtnSendEnable(this.btn_send_normal, !0, !1)) : this._curGiftID > 1e3 && this._setBtnSendEnable(this.btn_send_special, !0, !1) : this._setBtnSendEnable(this.btn_send_special, !0, !1)
                }
            else this._setBtnSendEnable(this.btn_send_special, !0, !1)
        }
        _layoutPanelSize() {
            let t = I.dataHandler.getUserData().u32Uid,
                e = this.gameDataInstance.tGiftData.getStarInfosExceptByID(t),
                i = this.gameDataInstance.tGiftData.isStarByUid(t);
            this.panel_gift_panel_star.active = e.length >= 2, this.panel_history_panel_btn.active = i;
            let n = this._panel_scr_size.height,
                o = this._tableView_history_src_widget_top;
            this.panel_gift_panel_star.active || (n -= this.panel_gift_panel_star.getComponent(d).height), this.panel_history_panel_btn.active || (o -= this.panel_history_panel_btn.getComponent(d).height), this.panel.getComponent(d).setContentSize(this.panel.getComponent(d).width, n), this.tableView_history.getComponent(m).top = o, I.resMgr.adaptWidget(this.panel, !0), this._panel_src_pos = h(this.panel.position), this.tableView_history.resetScrollVewSize(this.tableView_history.node.getComponent(d).contentSize, !0)
        }
        _onToggleStar(t, e) {
            this._updateToggleStarSelectStatus();
            let i = I.dataHandler.getUserData().u32Uid,
                n = this.gameDataInstance.tGiftData.getStarInfosExceptByID(i);
            t >= 0 && t < n.length && (this._curStarID = e.isChecked ? n[t].uid : 0), this._updateSendBtnStatus()
        }
        _onToggleGiftGR(t, e) {
            this._curRecordType !== t && (this._curRecordType = t, this._setToggleStarGiftGRStatus(this.toggle_gift_give, H.protocol.TipRecordType.TipRecordType_Send), this._setToggleStarGiftGRStatus(this.toggle_gift_receive, H.protocol.TipRecordType.TipRecordType_Recv), this.tableView_history.clearView(), this._requestHistoryRecord(!0))
        }
        _onClickBtnSendHelp() {
            I.AudioMgr.playButtonSound("button_click");
            let t = R(this.prefab_goods_help).getComponent(E);
            this.panel.addChild(t.node), t.autoShow(this.btn_send_help.node)
        }
        _onClickBtnSendCount(t) {
            I.AudioMgr.playButtonSound("button_click"), this._curGiftID > 0 && this._curGiftID < 1e3 && (this._giftGoodsCountInst || (this._giftGoodsCountInst = R(this.prefab_goods_count).getComponent(V), this.panel.addChild(this._giftGoodsCountInst.node)), this._setBtnSendCount(this._curGiftCount, !0, !0), this._giftGoodsCountInst.autoShow(this.btn_send_count.node, this._curGiftID, this._curGiftCount))
        }
        _onClickBtnSendGift() {
            var t;
            let e = this._curGiftID > 1e3,
                i = e ? this.btn_send_special.node : this.btn_send_normal.node;
            if (!this._sendAnimInst) {
                let t = R(this.prefab_send_anim);
                this.node.addChild(t), this._sendAnimInst = t.getComponent(F)
            }
            let n = new G(G.ZERO);
            i.getComponent(d).convertToWorldSpaceAR(n, n), this._sendAnimInst.play(n, i.getComponent(d).width, e), I.gameNet.RequestTip(null == (t = this.gameDataInstance) || null == (t = t.tRoomData) ? void 0 : t.u32RoomId, this._curStarID, this._curGiftID, this._curGiftCount);
            let o = new M;
            o.toUID = this._curStarID, o.giftID = this._curGiftID, o.giftCount = this._curGiftCount, I.MessageCenter.send(N.GIFT_MSG_SELF_SENDGIFT, o)
        }
        _animFinish() {
            if (this.node.active) switch (this._curPage) {
                case Mt.HISTORY:
                    this._requestHistoryRecord(!0);
                    break;
                case Mt.GIFT:
                default:
                    this.tableView_gift.bindData(this._gift_view_data), this.tableView_gift.reloadView()
            } else this._gift_view_data = [], this.tableView_gift.clearView(), this.tableView_history.clearView()
        }
        _onClickGiftItem(t) {
            let e = 0;
            for (let i = 0; i < this._gift_view_data.length; ++i) {
                let n = this._gift_view_data[i].prefab_datas;
                for (let i = 0; i < n.items.length; ++i) t.info.tipId === n.items[i].info.tipId ? n.items[i].isCheck = t.isCheck : n.items[i].isCheck = !1, n.items[i].isCheck && (e = n.items[i].info.tipId)
            }
            this.tableView_gift.bindData(this._gift_view_data), this.tableView_gift.reloadView(), this._curGiftID = e, this._curGiftCount = 1, this._updateSendBtnStatus()
        }
        _onClickGiftCount(t) {
            t && (this._curGiftCount = t.count, I.AudioMgr.playButtonSound("close")), this._setBtnSendCount(this._curGiftCount, !0, !1)
        }
        _requestHistoryRecord(t, e = 10) {
            var i;
            let n = 0,
                o = this.gameDataInstance.tGiftData.getGiftRecordsInfo(this._curRecordType);
            t && (e = 50, this.gameDataInstance.tGiftData.removeAllRecordsInfo(), this._curRecordType === H.protocol.TipRecordType.TipRecordType_Recv && I.MessageCenter.send(N.GIFT_MSG_STARS_RECVREAD_STATUS, !0)), t || o.length > 0 && (n = o[o.length - 1].id), I.gameNet.RequestTipRecord(null == (i = this.gameDataInstance) || null == (i = i.tRoomData) ? void 0 : i.u32RoomId, n, e, this._curRecordType)
        }
        _onMsgHistoryRecord() {
            let t = this.gameDataInstance.tGiftData.getGiftRecordsInfo(this._curRecordType),
                e = {
                    prefab_type: 0,
                    prefab_component: k,
                    prefab_datas: t
                };
            this.tableView_history.bindData(e), this.tableView_history.reloadView(!1)
        }
        _onMsgStarsChanged() {
            if (this._isAutoActing) return;
            let t = this._curPage;
            this._curPage = Mt.NONE, this._layoutPanelSize(), this._selectPage(t)
        }
        _onMsgGiftNews(t) {
            t.gift && (t.gift.newsType, H.protocol.NewsType.NewsType_Tip)
        }
        _onMsgStarsRecvReadStatus(t) {
            let e = this.toggle_gift_receive.node.getChildByName("img_dot");
            e && (e.active = !t);
            let i = this.panel_top_btn_history.getChildByName("img_dot");
            i && (i.active = !t)
        }
        _onMsgUpdateForbidden() {
            this._updateSendBtnStatus()
        }
    }).g_class_name = "GiftPanel", gt = e((ht = Nt).prototype, "prefab_goods_help", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ct = e(ht.prototype, "prefab_goods_count", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), dt = e(ht.prototype, "prefab_send_anim", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pt = e(ht.prototype, "panel", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ut = e(ht.prototype, "panel_gift", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ft = e(ht.prototype, "panel_history", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), bt = e(ht.prototype, "img_shield", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), mt = e(ht.prototype, "btn_send_help", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), St = e(ht.prototype, "btn_send_count", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), yt = e(ht.prototype, "btn_send_normal", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ct = e(ht.prototype, "btn_send_special", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Gt = e(ht.prototype, "toggle_stars", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Tt = e(ht.prototype, "toggle_gift_give", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), wt = e(ht.prototype, "toggle_gift_receive", [tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Rt = e(ht.prototype, "tableView_gift", [et], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), It = e(ht.prototype, "tableView_history", [it], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), vt = e(ht.prototype, "panel_top_btn_gift", [nt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Dt = e(ht.prototype, "panel_top_btn_history", [ot], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Bt = e(ht.prototype, "panel_top_img_check", [st], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Et = e(ht.prototype, "panel_gift_panel_star", [at], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Vt = e(ht.prototype, "panel_history_panel_btn", [lt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), kt = e(ht.prototype, "gameDataInstance", [rt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _t = ht)) || _t));
    n._RF.pop()
}