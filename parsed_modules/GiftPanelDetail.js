import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as G from "./cc.js";
import * as f from "./cc.js";
import * as p from "./cc.js";
import * as n from "./cc.js";
import * as N from "./cc.js";
import * as a from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as z from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as S from "./cc.js";
import * as _ from "./cc.js";
import * as M from "./cc.js";
import * as D from "./cc.js";
import * as T from "./cc.js";
import * as b from "./cc.js";
import * as A from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as d from "./cc.js";
import * as v from "./cc.js";
import * as I from "./cc.js";
import * as k from "./cc.js";
import * as w from "./cc.js";
import * as y from "./cc.js";
import * as R from "./gs_protocol.mjs_cjs=&original=.js";
import * as V from "./cv.js";
import * as E from "./Deque.js";
import * as O from "./HashMap.js";
import * as B from "./CircleSprite.js";
import * as x from "./GiftData.js";
import * as L from "./GiftPanelDetailItemSys.js";
import * as F from "./GiftPanelDetailItemSys.js";
import * as j from "./TableView.js";
import * as P from "./TableView.js";
import * as q from "./GiftPanelDetailItemMsg.js";
import * as mod11 from "./GiftRankItem.js";
import * as W from "./GameSceneInstance.js";

function main() {
    var Z, H, U, X, Y, J, K, Q, ee, te, ie, ne, se, ae, oe, le, re, _e, he, ge, pe, ce, me, de, ue, fe, we, be, ye, ve, ke, Ce, Me, Ne, Te, Se, Ie;
    n._RF.push({}, "ca3b4kBv9pNh41esb8iph/l", "GiftPanelDetail", void 0);
    var De = function(e) {
        return e[e.BANNER = 0] = "BANNER", e[e.ANNOUNCEMENT = 1] = "ANNOUNCEMENT", e[e.SCROLLVIEW_SYS = 2] = "SCROLLVIEW_SYS", e[e.SCROLLVIEW_MSG = 3] = "SCROLLVIEW_MSG", e
    }(De || {});
    class ze {
        constructor() {
            this.active = !1, this.pos = new A(A.ZERO), this.size = new d(d.ZERO), this.widget_top = 0, this.widget_bottom = 0
        }
    }
    class Ge {
        constructor() {
            this.turnOn = !1, this.frameTime = .2, this.frameCount = 0, this.objs_deque = new V, this.tmp_objs_deque = new V
        }
    }
    const {
        ccclass: Ae,
        property: Re
    } = a;
    e("GiftPanelDetail", (Z = Re(s), H = Re([s]), U = Re(s), X = Re(s), Y = Re(s), J = Re(s), K = Re(s), Q = Re(s), ee = Re(s), te = Re(s), ie = Re(s), ne = Re(s), se = Re(F), ae = Re(F), oe = Re(F), le = $(), re = $("GameDataInstance"), Ae(((Ie = class e extends o {
        constructor(...e) {
            super(...e), i(this, "img_shield", ge, this), i(this, "node_rank_tops", pe, this), i(this, "node_no_msg", ce, this), i(this, "node_no_rank", me, this), i(this, "node_no_ranklist", de, this), i(this, "panel_main", ue, this), i(this, "panel_detail", fe, this), i(this, "panel_rank", we, this), i(this, "panel_banner", be, this), i(this, "panel_announcement", ye, this), i(this, "btn_rank", ve, this), i(this, "btn_rank_back", ke, this), i(this, "scrollview_sys", Ce, this), i(this, "scrollview_msg", Me, this), i(this, "scrollview_rank", Ne, this), this._layoutNodeMap = new E, this._msg_objs = [], this._isAutoActing = !1, this._msgViewTmpNode1 = null, this._msgViewTmpNode2 = null, this._frameMsgInfo = new Ge, this._sys_identity_list = [1, 3], this._panel_main_src_pos = new l(l.ZERO), this._panel_detail_src_pos = new l(l.ZERO), this._panel_rank_src_pos = new l(l.ZERO), i(this, "gameSceneInstance", Te, this), i(this, "gameDataInstance", Se, this)
        }
        autoShow(e = !0) {
            this.node.active = !0, this.panel_detail.active = !0, this.panel_rank.active = !1, this._updateDetailView(!1);
            let t = e ? .2 : 0,
                i = r(this._panel_main_src_pos),
                n = r(this._panel_main_src_pos.x - this.panel_main.getComponent(_).width, this._panel_main_src_pos.y, 0);
            this._autoAnimFunc(this.panel_main, i, n, !0, t, this._showMainlPanelAnimFinish.bind(this))
        }
        autoHide(e = !0) {
            let t = e ? .2 : 0,
                i = r(this._panel_main_src_pos),
                n = r(this._panel_main_src_pos.x - this.panel_main.getComponent(_).width, this._panel_main_src_pos.y);
            this._autoAnimFunc(this.panel_main, i, n, !1, t, this._showMainlPanelAnimFinish.bind(this))
        }
        onLoad() {
            R.resMgr.adaptWidget(this.node, !0), this._init(), this._registerEvent(), this.node.on(s.EventType.TOUCH_END, (() => {
                this.autoHide()
            })), this.btn_rank.on("click", this._onClickRank, this), this.btn_rank_back.on("click", this._onClickRankBack, this), this.panel_banner.on(s.EventType.TOUCH_END, this._onClickPanelBanner, this)
        }
        start() {
            this._updateStaticText()
        }
        onDestroy() {
            this._unregisterEvent()
        }
        update() {
            if (this._frameMsgInfo.turnOn)
                if (this._frameMsgInfo.objs_deque.size() > 0) {
                    for (let e = 0; e < this._frameMsgInfo.frameCount; ++e) {
                        let e = this._frameMsgInfo.objs_deque.pop_front();
                        e && this._calculateFrameMsgView(e)
                    }
                    this._msgViewTmpNode1.active = !1, this._msgViewTmpNode2.active = !1
                } else if (this._frameMsgInfo.tmp_objs_deque.size() > 0) {
                for (let e = 0; e < this._frameMsgInfo.tmp_objs_deque.size(); ++e) {
                    let e = this._frameMsgInfo.tmp_objs_deque.pop_front();
                    this._frameMsgInfo.objs_deque.push_back(e), this._frameMsgInfo.turnOn = !0
                }
                let e = this._frameMsgInfo.frameTime * h.getFrameRate();
                this._frameMsgInfo.frameCount = Math.ceil(this._frameMsgInfo.objs_deque.size() / e), this._frameMsgInfo.frameCount = Math.max(this._frameMsgInfo.frameCount, 1)
            } else this._frameMsgInfo.turnOn = !1, this._msgViewTmpNode1.active = !1, this._msgViewTmpNode2.active = !1, this.scrollview_msg.bindData(this._msg_objs), this.scrollview_msg.scrollToDir(L.BOTTOM)
        }
        _registerEvent() {
            R.MessageCenter.register(B.GIFT_MSG_NOTICE_NEWS, this._onMsgGiftNews.bind(this), this.node), R.MessageCenter.register(B.GIFT_MSG_RESP_RANKLIST, this._onMsgRankList.bind(this), this.node)
        }
        _unregisterEvent() {
            R.MessageCenter.unregister(B.GIFT_MSG_NOTICE_NEWS, this.node), R.MessageCenter.unregister(B.GIFT_MSG_RESP_RANKLIST, this.node)
        }
        _init() {
            this._initLayout(), this._msgViewTmpNode1 || (this._msgViewTmpNode1 = g(this.scrollview_msg.prefabTypes[1]), this.scrollview_msg.node.addChild(this._msgViewTmpNode1), this._msgViewTmpNode1.active = !1), this._msgViewTmpNode2 || (this._msgViewTmpNode2 = g(this.scrollview_msg.prefabTypes[0]), this.scrollview_msg.node.addChild(this._msgViewTmpNode2), this._msgViewTmpNode2.active = !1);
            {
                this._frameMsgInfo.objs_deque.clear(), this._frameMsgInfo.tmp_objs_deque.clear();
                let e = this.gameDataInstance.tGiftData.getPlayerDynamicListByIdentity(this._sys_identity_list, !1);
                for (let t = 0; t < e.length; ++t) this._frameMsgInfo.objs_deque.push_back(e[t]);
                let t = this.gameDataInstance.tGiftData.getGiftNewsInfoByNewsType(W.protocol.NewsType.NewsType_Tip);
                for (let e = 0; e < t.length; ++e) this._frameMsgInfo.objs_deque.push_back(t[e]);
                let i = this.gameDataInstance.tGiftData.getGiftNewsInfoByBarrage();
                for (let e = 0; e < i.length; ++e) this._frameMsgInfo.objs_deque.push_back(i[e]);
                let n = this._frameMsgInfo.frameTime * h.getFrameRate();
                this._frameMsgInfo.frameCount = Math.ceil(this._frameMsgInfo.objs_deque.size() / n), this._frameMsgInfo.frameCount = Math.max(this._frameMsgInfo.frameCount, 1)
            }
        }
        _initLayout() {
            this._panel_main_src_pos = r(this.panel_main.position), this._panel_detail_src_pos = r(this.panel_detail.position), this._panel_rank_src_pos = r(this.panel_rank.position);
            {
                let e = new ze,
                    t = this.panel_banner.getComponent(p);
                e.pos = c(this.panel_banner.position.x, this.panel_banner.position.y), e.size = m(this.panel_banner.getComponent(_).contentSize.x), e.widget_top = t.top, e.widget_bottom = t.bottom, this._layoutNodeMap.add(De.BANNER, e)
            } {
                let e = new ze,
                    t = this.panel_announcement.getComponent(p);
                e.pos = c(this.panel_announcement.position.x, this.panel_announcement.position.y), e.size = m(this.panel_announcement.getComponent(_).contentSize), e.widget_top = t.top, e.widget_bottom = t.bottom, this._layoutNodeMap.add(De.ANNOUNCEMENT, e)
            } {
                let e = new ze,
                    t = this.scrollview_sys.getComponent(p);
                e.pos = c(this.scrollview_sys.node.position.x, this.scrollview_sys.node.position.y), e.size = m(this.scrollview_sys.node.getComponent(_).contentSize), e.widget_top = t.top, e.widget_bottom = t.bottom, this._layoutNodeMap.add(De.SCROLLVIEW_SYS, e)
            } {
                let e = new ze,
                    t = this.scrollview_msg.getComponent(p);
                e.pos = c(this.scrollview_msg.node.position.x, this.scrollview_msg.node.position.y), e.size = m(this.scrollview_msg.node.getComponent(_).contentSize), e.widget_top = t.top, e.widget_bottom = t.bottom, this._layoutNodeMap.add(De.SCROLLVIEW_MSG, e)
            }
        }
        _updateLayout(e = !0) {
            let t = 0,
                i = null,
                n = this.gameDataInstance.tGiftData.getGiftBanner(),
                s = this.gameDataInstance.tGiftData.getGiftAnnouncement(),
                a = this.gameDataInstance.tGiftData.getPlayerDynamicListByIdentity(this._sys_identity_list);
            {
                this.panel_banner.active = n.img.length > 0;
                let e = this._layoutNodeMap.get(De.BANNER);
                e.active = this.panel_banner.active, e.active || (t += e.size.height), i = e
            } {
                this.panel_announcement.active = `${s.title}${s.announce}`.length > 0;
                let e = this._layoutNodeMap.get(De.ANNOUNCEMENT);
                if (e.active = this.panel_announcement.active, i && !i.active) {
                    t += e.widget_top - i.widget_top - i.size.height
                }
                if (e.active) {
                    let i = this.panel_announcement.getComponent(p);
                    i.top = e.widget_top - t, i.bottom = e.widget_bottom + t
                } else t += e.size.height;
                i = e
            } {
                let e = 3,
                    n = new d(d.ZERO);
                this.scrollview_sys.node.active = a.length > 0;
                let s = this._layoutNodeMap.get(De.SCROLLVIEW_SYS);
                if (s.active = this.scrollview_sys.node.active, i && !i.active) {
                    t += s.widget_top - i.widget_top - i.size.height
                }
                if (s.active) {
                    if (n.width = s.size.width, n.height = s.size.height, a.length < e && (n.height /= e, n.height *= a.length), a.length > 1) {
                        let t = s.size.height - e * this.scrollview_sys.prefabTypes[0].data.height;
                        t = R.Number(t / (e - 1)), this.scrollview_sys.spacing = t, this.scrollview_sys.paddingStart = 0, this.scrollview_sys.paddingEnd = 0
                    } else {
                        let e = (n.height - this.scrollview_sys.prefabTypes[0].data.height) / 2;
                        this.scrollview_sys.spacing = 0, this.scrollview_sys.paddingStart = e, this.scrollview_sys.paddingEnd = e
                    }
                    this.scrollview_sys.node.getComponent(_).setContentSize(n);
                    let i = s.size.height - n.height,
                        o = this.scrollview_sys.getComponent(p);
                    o.top = s.widget_top - t, o.bottom = s.widget_bottom + t + i
                }
                t += s.size.height - n.height, i = s
            }
            if (this.scrollview_msg.node.active) {
                let e = this._layoutNodeMap.get(De.SCROLLVIEW_MSG);
                if (i && !i.active) {
                    t += e.widget_top - i.widget_top - i.size.height
                }
                let n = m(e.size.width, e.size.height + t);
                this.scrollview_msg.node.getComponent(_).setContentSize(n);
                let s = this.scrollview_msg.getComponent(p);
                s.top = e.widget_top - t, s.bottom = e.widget_bottom
            }
            R.resMgr.adaptWidget(this.panel_detail, !0), this.scrollview_sys.node.active && this.scrollview_sys.resetScrollVewSize(this.scrollview_sys.node.getComponent(_).contentSize, !0), this.scrollview_msg.node.active && this.scrollview_msg.resetScrollVewSize(this.scrollview_msg.node.getComponent(_).contentSize, !0), e && (this.scrollview_sys.scrollToDir(L.BOTTOM), this.scrollview_msg.scrollToDir(L.BOTTOM))
        }
        _calculateFrameMsgView(e) {
            this._msgViewTmpNode1.active = !0, this._msgViewTmpNode2.active = !0;
            let t = this.scrollview_msg.prefabTypes.length / 2,
                i = this._msgViewTmpNode1.getComponent(u),
                n = this._msgViewTmpNode2.getComponent(u),
                s = (e, t, i, n) => {
                    let s = 0;
                    e.maxWidth = e.node.getComponent(_).width, e.string = "", e.string = i;
                    let a = R.resMgr.getRichTextStringSize(e);
                    return s = Math.floor(a.height / e.lineHeight), s -= 1, s = Math.max(0, s), t.maxWidth = 0, t.string = "", t.string = i, a = R.resMgr.getRichTextStringSize(t), n.width = a.width, n.height = a.height, s
                },
                a = [];
            Array.isArray(e) ? a = e : a.push(e);
            for (let e = 0; e < a.length; ++e) {
                let o = a[e],
                    l = null;
                if (o.gift) {
                    let e = "",
                        a = 0,
                        r = new d(d.ZERO);
                    switch (o.gift.newsType) {
                        case W.protocol.NewsType.NewsType_Tip: {
                            let l = o.gift.tip.tipId,
                                _ = o.gift.tip.tipCount,
                                h = R.config.getStringData(`Gift_category_${l}`),
                                g = l > 1e3 ? ` <img src="gift_icon_${l}"/>` : ` x ${_}`,
                                p = R.config.getStringData("Gift_sent");
                            e = `${o.gift.player.nickname} ${p} ${`<img src="img_icon_star"/> <color=#FFCD7E>${o.gift.toPlayer.nickname}</color>`} ${h} ${g}`, a = s(i, n, e, r), l > 1e3 && (a += t)
                        }
                        break;
                        case W.protocol.NewsType.NewsType_PlayerDynamic:
                            if (2 === o.gift.player.identity) return;
                            e = `<color=#6B6D71>${o.gift.player.nickname} ${R.config.getStringData("Gift_welcome_to_room")}</color>`, a = s(i, n, e, r)
                    }
                    l = new P, l.text = e, l.width = r.width, l.typeIdx = a, l.isGiftMsg = !0
                } else if (o.barrage) {
                    let e = o.barrage.playerid === R.dataHandler.getUserData().u32Uid,
                        a = `<color=${e?"#CA7929":"#86592C"}>${o.barrage.nickname}</color>:`,
                        r = "";
                    o.barrage.at_list.length > 0 && (r = `<color=#FFAB00>${o.barrage.at_list[0]}</color> `);
                    let _ = "";
                    switch (o.barrage.ctype) {
                        case W.protocol.BarrageType.Enum_Liked:
                            _ = R.StringTools.formatC(R.config.getStringData("Star_danmu_like"), o.barrage.liked_nickname, o.barrage.nickname);
                            break;
                        case W.protocol.BarrageType.Enum_Custom:
                            _ = o.barrage.content;
                            break;
                        default:
                            _ = R.StringTools.isNumber(o.barrage.content) ? R.config.getStringData(`Faceview_danmu_text_${o.barrage.content}`) : o.barrage.content
                    }
                    let h = `${a} ${r} ${_}`,
                        g = new d(d.ZERO),
                        p = s(i, n, h, g);
                    e && (p += t), l = new P, l.text = h, l.width = g.width, l.typeIdx = p, l.isGiftMsg = !1
                }
                l && (this._msg_objs.length >= B.GIFT_NEWS_MAXCOUNT && this._msg_objs.splice(0, 1), this._msg_objs.push({
                    prefab_type: l.typeIdx,
                    prefab_component: j,
                    prefab_datas: l
                }))
            }
        }
        _updateStaticText() {
            {
                let e = 21,
                    t = this.btn_rank.getChildByName("img"),
                    i = this.btn_rank.getChildByName("txt").getComponent(f);
                i.string = R.config.getStringData("Gift_rank");
                let n = R.resMgr.getLabelStringSize(i).width,
                    s = t.getComponent(_),
                    a = s.width + e + n,
                    o = 0,
                    l = this.btn_rank.getComponent(_);
                l.setContentSize(a, l.height), o = l.width * (1 - l.anchorX), o -= s.width * (1 - s.anchorX), t.setPosition(r(o, t.position.y, t.position.z)), o -= s.width * s.anchorX, o -= e, o -= n * (1 - i.node.getComponent(_).anchorX), i.node.setPosition(r(o, i.node.position.y, i.node.position.z))
            }
            this.node_no_msg.getChildByName("txt").getComponent(f).string = R.config.getStringData("Gift_nomsg"), this.node_no_rank.getChildByName("txt").getComponent(f).string = R.config.getStringData("Gift_wait"), this.node_no_ranklist.getChildByName("txt").getComponent(f).string = R.config.getStringData("Gift_wait"), this.panel_rank.getChildByName("txt_title").getComponent(f).string = R.config.getStringData("Gift_rank")
        }
        _updateRankTops() {
            if (!this.node.active || !this.panel_detail.active) return;
            let e = this.gameDataInstance.tGiftData.getGiftRankListTops();
            this.node_no_rank.active = e.length <= 0;
            for (let t = 0; t < this.node_rank_tops.length; ++t) {
                if (this.node_rank_tops[t].active = t < e.length, t >= e.length) continue;
                let i = this.node_rank_tops[t].getChildByName("txt_name").getComponent(f),
                    n = this.node_rank_tops[t].getChildByName("txt_gold").getComponent(f);
                i.string = e[t].player.nickname, n.string = R.StringTools.numToFloatString(e[t].contr);
                let s = w("node_head/mask", this.node_rank_tops[t]);
                O.setCircleSprite(s, e[t].player.avatar, e[t].player.plat)
            }
        }
        _updateBanner() {
            let e = !1;
            if (this.node.active && this.panel_detail.active) {
                let t = this.gameDataInstance.tGiftData.getGiftBanner(),
                    i = this.panel_banner.active;
                if (this.panel_banner.active = t.img.length > 0, e = i !== this.panel_banner.active, this.panel_banner.active) {
                    let e = this.panel_banner.getComponent(b);
                    e || (e = this.panel_banner.addComponent(b), e.type = b.Type.SIMPLE, e.sizeMode = b.SizeMode.CUSTOM, e.trim = !1), e.spriteFrame = null, y.load(t.img, ((t, i) => {
                        if (e && v(e, !0)) {
                            if (t) return console.log(t.message || t), void R.resMgr.setSpriteFrame(e.node, R.tools.getBackgroundBannerImgPath());
                            e.spriteFrame = new k, e.spriteFrame.texture = i
                        }
                    }))
                }
            }
            return e
        }
        _onClickPanelBanner() {
            let t = this.gameDataInstance.tGiftData.getGiftBanner();
            if (!(t.link.length <= 0))
                if (C.isBrowser) window.open(t.link);
                else if (C.isNative) {
                let i = this.gameSceneInstance.room.gameScene,
                    n = `${e.g_class_name}_PanelBanner_Web_Node`,
                    a = i.getChildByName(n);
                if (!a) {
                    a = new s, a.name = n;
                    let e = a.getComponent(_);
                    e.setContentSize(M.getVisibleSize()), e.setAnchorPoint(c(.5, .5)), a.setPosition(M.getVisibleSize().width * e.anchorX, M.getVisibleSize().height * e.anchorY), i.addChild(a)
                }
                let o = a.getComponent(N);
                o || (o = a.addComponent(N)), o.url = t.link, o.setJavascriptInterfaceScheme("ccjs"), o.setOnJSCallback((() => {
                    -1 == o.url.search("ccjs://https") && -1 == o.url.search("ccjs://http") || (a.removeFromParent(), a.destroy())
                }))
            }
        }
        _updateAnnouncement() {
            let e = !1;
            if (this.node.active && this.panel_detail.active) {
                let t = this.gameDataInstance.tGiftData.getGiftAnnouncement(),
                    i = "";
                t.title.length > 0 && t.announce.length > 0 && (i = "\n");
                let n = this.panel_announcement.getComponent(T),
                    s = n.content.getChildByName("txt").getComponent(f),
                    a = `${t.title}${i}${t.announce}`,
                    o = R.StringTools.calculateAutoWrapString(s.node, a);
                s.string = o;
                let l = n.content.getComponent(_).contentSize,
                    r = R.resMgr.getLabelStringSize(s).height + 23,
                    h = r - l.height;
                r <= n.node.getComponent(_).height ? s.horizontalAlign = f.HorizontalAlign.CENTER : s.horizontalAlign = f.HorizontalAlign.LEFT, h > 0 && (l.height += h, n.content.getComponent(_).setContentSize(l));
                let g = this.panel_announcement.active;
                this.panel_announcement.active = s.string.length > 0, e = g !== this.panel_announcement.active
            }
            return e
        }
        _updateNewsSys() {
            let e = !1;
            if (this.node.active && this.panel_detail.active) {
                let t = this.gameDataInstance.tGiftData.getPlayerDynamicListByIdentity(this._sys_identity_list);
                if (t.length > 0) {
                    this.scrollview_sys.node.active = !0, t.length <= 3 && (e = !0);
                    let i = {
                        prefab_type: 0,
                        prefab_component: x,
                        prefab_datas: t
                    };
                    this.scrollview_sys.bindData(i), this.scrollview_sys.scrollToDir(L.BOTTOM)
                } else this.scrollview_sys.clearView(), this.scrollview_sys.node.active = !1, e = !0
            }
            return e
        }
        _updateNewsMsg(e) {
            if (this._frameMsgInfo.turnOn)
                if (Array.isArray(e))
                    for (let t = 0; t < e.length; ++t) this._frameMsgInfo.tmp_objs_deque.push_back(e[t]);
                else this._frameMsgInfo.tmp_objs_deque.push_back(e);
            else {
                if (Array.isArray(e))
                    for (let t = 0; t < e.length; ++t) this._frameMsgInfo.objs_deque.push_back(e[t]);
                else this._frameMsgInfo.objs_deque.push_back(e);
                let t = this._frameMsgInfo.frameTime * h.getFrameRate();
                this._frameMsgInfo.frameCount = Math.ceil(this._frameMsgInfo.objs_deque.size() / t), this._frameMsgInfo.frameCount = Math.max(this._frameMsgInfo.frameCount, 1), this._frameMsgInfo.turnOn = this.panel_detail.active
            }
        }
        _updateDetailView(e) {
            this._updateRankTops(), this._updateBanner(), this._updateAnnouncement(), this._updateNewsSys(), this._updateLayout(e);
            let t = this.gameDataInstance.tGiftData.getGiftNewsInfo();
            this.node_no_msg.active = t.length <= 0, this._msgViewTmpNode1.active = !1, this._msgViewTmpNode2.active = !1, e && (this._frameMsgInfo.turnOn = !0)
        }
        _resetDetailView() {
            this.scrollview_sys.clearView(), this.scrollview_msg.clearView(), this._msgViewTmpNode1.active = !1, this._msgViewTmpNode2.active = !1
        }
        _updateRankPanel() {
            if (!this.node.active || !this.panel_rank.active) return;
            let e = this.gameDataInstance.tGiftData.getGiftRankList();
            if (this.node_no_ranklist.active = e.length <= 0, e.length > 0) {
                let t = {
                    prefab_type: 0,
                    prefab_component: q,
                    prefab_datas: e
                };
                this.scrollview_rank.bindData(t), this.scrollview_rank.reloadView()
            } else this.scrollview_rank.clearView()
        }
        _onMsgGiftNews(e) {
            if (!e || this._isAutoActing) return;
            this.node_no_msg.active = !1;
            let t = !1;
            if (e.gift) switch (R.StringTools.getArrayLength(e.gift.rankChangePlayers) > 0 && this._updateRankTops(), e.gift.newsType) {
                case W.protocol.NewsType.NewsType_Banner:
                    t || (t = this._updateBanner());
                    break;
                case W.protocol.NewsType.NewsType_Announcement:
                    t || (t = this._updateAnnouncement());
                    break;
                case W.protocol.NewsType.NewsType_PlayerDynamic: {
                    let i = !1;
                    for (let t = 0; t < this._sys_identity_list.length; ++t)
                        if (e.gift.player.identity === this._sys_identity_list[t]) {
                            i = !0;
                            break
                        } i ? t || (t = this._updateNewsSys()) : this._updateNewsMsg(e)
                }
                break;
                case W.protocol.NewsType.NewsType_Tip:
                    this._updateNewsMsg(e)
            } else e.barrage && this._updateNewsMsg(e);
            t && this._updateLayout()
        }
        _onMsgRankList() {
            this._isAutoActing || this._updateRankPanel()
        }
        _onClickRank() {
            R.AudioMgr.playButtonSound("close"), this.panel_main.active = !0;
            let e = this.panel_main.getComponent(S);
            e || (e = this.panel_main.addComponent(S)), e.enabled = !0;
            let t = 0,
                i = new l(l.ZERO),
                n = new l(l.ZERO);
            i = r(this._panel_detail_src_pos.x, this._panel_detail_src_pos.y, 0), n = r(this._panel_detail_src_pos.x - this.panel_detail.getComponent(_).width, this._panel_detail_src_pos.y, 0), this._autoAnimFunc(this.panel_detail, i, n, !1, .2, this._showRankOrDetailAnimFinish.bind(this, ++t, !0), !1), i = r(this._panel_rank_src_pos), n = r(this._panel_rank_src_pos.x + this.panel_rank.getComponent(_).width, this._panel_rank_src_pos.y), this._autoAnimFunc(this.panel_rank, i, n, !0, .2, this._showRankOrDetailAnimFinish.bind(this, ++t, !0), !1)
        }
        _onClickRankBack() {
            R.AudioMgr.playButtonSound("close"), this.panel_main.active = !0;
            let e = this.panel_main.getComponent(S);
            e || (e = this.panel_main.addComponent(S)), e.enabled = !0;
            let t = 0,
                i = new l(l.ZERO),
                n = new l(l.ZERO);
            i = r(this._panel_detail_src_pos), n = r(this._panel_detail_src_pos.x - this.panel_detail.getComponent(_).width, this._panel_detail_src_pos.y), this._autoAnimFunc(this.panel_detail, i, n, !0, .2, this._showRankOrDetailAnimFinish.bind(this, ++t, !1), !1), i = r(this._panel_rank_src_pos), n = r(this._panel_rank_src_pos.x + this.panel_rank.getComponent(_).width, this._panel_rank_src_pos.y), this._autoAnimFunc(this.panel_rank, i, n, !1, .2, this._showRankOrDetailAnimFinish.bind(this, ++t, !1), !1)
        }
        _autoAnimFunc(e, t, i, n, s, a = null, o = !0) {
            this.node.active = !0, e.active = !0, I.stopAllByTarget(e);
            let l = null,
                r = s > 0;
            if (n) {
                e.setPosition(i);
                let _ = D().call((() => {
                    this._isAutoActing = !1, e.setPosition(t), a && a(n)
                }));
                if (r) {
                    let e = D().to(s, {
                        position: t
                    });
                    if (o) {
                        let e = D().to(s, {
                            position: t
                        }, {
                            easing: z.backOut
                        });
                        l = D().sequence(e, _)
                    } else l = D().sequence(e, _)
                } else l = _
            } else {
                e.setPosition(t);
                let _ = D().call((() => {
                    this._isAutoActing = !1, e.setPosition(t), e.active = !1, a && a(n)
                }));
                if (r) {
                    let e = D().to(s, {
                        position: i
                    });
                    if (o) {
                        let e = D().to(s, {
                            position: i
                        }, {
                            easing: z.backIn
                        });
                        l = D().sequence(e, _)
                    } else l = D().sequence(e, _)
                } else l = _
            }
            l && (this._isAutoActing = !0, l.target(e).start(), this.img_shield.active = !0, this.img_shield.getComponent(G).enabled = !0)
        }
        _showMainlPanelAnimFinish(e) {
            let t = this.panel_main.getComponent(S);
            t && (t.enabled = !1), this.img_shield.getComponent(G).enabled = !1, this.img_shield.active = !1, e ? this._updateDetailView(!0) : (this.node.active = !1, this.panel_detail.active = !1, this.panel_rank.active = !1, this._resetDetailView())
        }
        _showRankOrDetailAnimFinish(e, t, i) {
            if (2 !== e) return;
            let n = this.panel_main.getComponent(S);
            var s;
            (n && (n.enabled = !1), this.img_shield.getComponent(G).enabled = !1, this.img_shield.active = !1, t) ? (this._resetDetailView(), R.gameNet.RequestTipRank(null == (s = this.gameDataInstance) || null == (s = s.tRoomData) ? void 0 : s.u32RoomId)) : (this.scrollview_rank.clearView(), this._updateDetailView(!0))
        }
    }).g_class_name = "GiftPanelDetail", ge = t((he = Ie).prototype, "img_shield", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pe = t(he.prototype, "node_rank_tops", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), ce = t(he.prototype, "node_no_msg", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), me = t(he.prototype, "node_no_rank", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), de = t(he.prototype, "node_no_ranklist", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ue = t(he.prototype, "panel_main", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), fe = t(he.prototype, "panel_detail", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), we = t(he.prototype, "panel_rank", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), be = t(he.prototype, "panel_banner", [ee], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ye = t(he.prototype, "panel_announcement", [te], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ve = t(he.prototype, "btn_rank", [ie], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ke = t(he.prototype, "btn_rank_back", [ne], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ce = t(he.prototype, "scrollview_sys", [se], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Me = t(he.prototype, "scrollview_msg", [ae], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ne = t(he.prototype, "scrollview_rank", [oe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Te = t(he.prototype, "gameSceneInstance", [le], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Se = t(he.prototype, "gameDataInstance", [re], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _e = he)) || _e));
    n._RF.pop()
}