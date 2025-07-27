import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as f from "./cc.js";
import * as p from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as m from "./cc.js";
import * as S from "./cc.js";
import * as _ from "./cc.js";
import * as b from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as d from "./cc.js";
import * as w from "./cc.js";
import * as y from "./cc.js";
import * as P from "./cv.js";
import * as C from "./CircleSprite.js";
import * as M from "./MyRedPacketsRule.js";
import * as R from "./MyRedPacketsShare.js";
import * as T from "./HelpFriendView.js";
import * as k from "./OpenRedPackets.js";

function main() {
    var v, z, D, A, H, B, L, E, F, V, N, I, O, x, U, W, G, K, Y, q, j, J, Q, X, Z, $, ee, te, ie, ne, ae, le, re, oe, se, _e, he, pe, ce, ue, de, ge, be, fe, me, ye, we, Se, Pe, Ce, Me, Re, Te, ke, ve, ze, De, Ae, He, Be, Le, Ee, Fe, Ve, Ne, Ie, Oe, xe, Ue, We, Ge, Ke, Ye, qe, je, Je, Qe, Xe, Ze, $e, et, tt, it, nt, at, lt, rt, ot, st, _t, ht;
    n._RF.push({}, "e6389oucdpMK64Bn0DpRWWU", "MyRedPackets", void 0);
    const {
        ccclass: pt,
        property: ct
    } = p;
    let ut = e("MyRedPacketsViewType", function(e) {
        return e[e.MY_RED_PACKETS = 0] = "MY_RED_PACKETS", e[e.HELP_FRIEND = 1] = "HELP_FRIEND", e
    }({}));
    e("default", (v = ct(a), z = ct(l), D = ct(a), A = ct(a), H = ct(a), B = ct(a), L = ct(a), E = ct(l), F = ct(r), V = ct(a), N = ct(a), I = ct(a), O = ct(a), x = ct(a), U = ct(a), W = ct(a), G = ct(a), K = ct(a), Y = ct(a), q = ct(a), j = ct(o), J = ct(a), Q = ct(a), X = ct(l), Z = ct(r), $ = ct(a), ee = ct(a), te = ct(l), ie = ct(l), ne = ct(s), ae = ct(l), le = ct(l), re = ct(a), oe = ct(_), se = ct(_), _e = ct(_), he = ct(_), pe = ct(a), ce = ct(h), ue = ct(a), de = ct(a), ge = ct(a), be = ct(a), fe = ct(a), pt(((ht = class e extends c {
        constructor(...e) {
            super(...e), i(this, "img_bg_top", we, this), i(this, "txt_title", Se, this), i(this, "share_label", Pe, this), i(this, "btn_my", Ce, this), i(this, "btn_help_friend", Me, this), i(this, "my_panel", Re, this), i(this, "tips_panel", Te, this), i(this, "tips_label", ke, this), i(this, "title_scrollView", ve, this), i(this, "title_item", ze, this), i(this, "number_panel", De, this), i(this, "image_panel", Ae, this), i(this, "btn_open", He, this), i(this, "code_panel", Be, this), i(this, "dos_label", Le, this), i(this, "dos_img", Ee, this), i(this, "btn_help", Fe, this), i(this, "title_bg", Ve, this), i(this, "full_label", Ne, this), i(this, "title_node", Ie, this), i(this, "progressBar", Oe, this), i(this, "item_img", xe, this), i(this, "mask_node", Ue, this), i(this, "dos", We, this), i(this, "finds_scrollView", Ge, this), i(this, "item_finds", Ke, this), i(this, "friend_panel", Ye, this), i(this, "title_0", qe, this), i(this, "title_1", je, this), i(this, "editBox", Je, this), i(this, "des_0", Qe, this), i(this, "des_1", Xe, this), i(this, "btn_add_helper", Ze, this), i(this, "prefab_MyRedPackets_Rule", $e, this), i(this, "prefab_MyRedPackets_Share", et, this), i(this, "prefab_HelpFriendView", tt, this), i(this, "prefab_OpenRedPackets", it, this), i(this, "myRedPackets", nt, this), i(this, "layout", at, this), i(this, "safearea", lt, this), i(this, "imgBgTop", rt, this), i(this, "myPanel", ot, this), i(this, "friendPanel", st, this), i(this, "topSubTitle", _t, this), this._time_label = null, this._title_list = [], this._viewType = ut.MY_RED_PACKETS, this._myList = [], this._show_code = 0, this._newProgressFill = 0
        }
        static getSinglePrefabInst(t, i) {
            let n = i;
            return n || (n = u.getScene().children[0]), e._g_prefabInst || (e._g_prefabInst = d(t)), n.getChildByUuid(e._g_prefabInst.uuid) || g(e._g_prefabInst, !0) || (e._g_prefabInst = d(t)), e._g_prefabInst
        }
        onLoad() {
            this.item_img.active = !1, this._initLanguage(), P.MessageCenter.register(P.config.CHANGE_LANGUAGE, this._initLanguage.bind(this), this.node), P.MessageCenter.register("update_help_Warp_list", this._updateHelpWarpList.bind(this), this.node), P.MessageCenter.register("update_left_help_count", this._updateLeftHelpCount.bind(this), this.node), P.MessageCenter.register("updata_total_history_amount", this._updataTotalHistoryAmount.bind(this), this.node), P.MessageCenter.register("showOpenRedPackets", this.onShowOpenRedPackets.bind(this), this.node), P.MessageCenter.register("showHelpFriendView", this.onShowHelpFriendView.bind(this), this.node), this.progressBar.totalLength = this.progressBar.node.getComponent(b).width, this.updateView(), this.setSafeAreaAndPanelHeight(), this.SetNewProgressBarFill()
        }
        onDestroy() {
            P.MessageCenter.unregister(P.config.CHANGE_LANGUAGE, this.node), P.MessageCenter.unregister("update_help_Warp_list", this.node), P.MessageCenter.unregister("update_left_help_count", this.node), P.MessageCenter.unregister("updata_total_history_amount", this.node), P.MessageCenter.unregister("showOpenRedPackets", this.node), P.MessageCenter.unregister("showHelpFriendView", this.node)
        }
        update() {
            let e = Math.round((new Date).getTime() / 1e3);
            if (this._myList.length > 0)
                for (let t of this._myList) {
                    let i = t.captcha_data.create_time + t.captcha_data.expire_time - e;
                    if (t.captcha_data.help_count != t.helper_data.length && !t.captcha_data.is_available)
                        if (i <= 0) {
                            let e = this._myList.indexOf(t);
                            this._myList.splice(e, 1);
                            let i = this._title_list.splice(e, 1);
                            i[0].removeFromParent(), i[0].destroy(), this.title_scrollView.content.getComponent(b).width -= i[0].getComponent(b).width + 11, t.captcha_data.code == this._show_code && (this._myList.length > 0 && (this._show_code = this._myList[0].captcha_data.code), this.title_scrollView.scrollToLeft(), this.updateView(), this.setSafeAreaAndPanelHeight(), this.SetNewProgressBarFill())
                        } else if (t.captcha_data.code == this._show_code && this._time_label) {
                        let e = P.tools.getStringByDay(i);
                        this._time_label.string = P.StringTools.formatC(P.config.getStringData("MyRedPackets_time_label"), e)
                    }
                }
        }
        show() {
            P.worldNet.GetTotalHistoryAmountRequest(), this._viewType = ut.MY_RED_PACKETS, this._updateHelpWarpList()
        }
        onBack(e) {
            P.AudioMgr.playButtonSound("back_button"), this.editBox.string = "", P.action.showAction(this.node, P.action.eMoveActionDir.EMAD_TO_RIGHT, P.action.eMoveActionType.EMAT_FADE_OUT, P.action.delay_type.NORMAL, ((e, t) => {}), ((e, t) => {
                P.MessageCenter.send("show_mail_entrance", !0), P.MessageCenter.send("updata_my_redpackets_pos")
            }))
        }
        _initLanguage() {
            P.resMgr.setSpriteFrame(this.dos_img, P.config.getLanguagePath("hall/MyRedPackets/word_tips")), this.txt_title.string = P.config.getStringData("MyRedPackets_txt_title"), this.btn_my.getComponent(l).string = P.config.getStringData("MyRedPackets_btn_my"), this.btn_help_friend.getComponent(l).string = P.config.getStringData("MyRedPackets_btn_help_friend"), f("Label", this.btn_open).getComponent(l).string = P.config.getStringData("MyRedPackets_btn_open_label"), this.title_0.string = P.config.getStringData("MyRedPackets_friend_panel_title_0"), this.title_1.string = P.config.getStringData("MyRedPackets_friend_panel_title_1"), f("Label", this.btn_add_helper).getComponent(l).string = P.config.getStringData("MyRedPackets_friend_panel_btn_add_helper_label"), this.editBox.placeholder = P.config.getStringData("MyRedPackets_friend_panel_editbox_holder"), this.full_label.getComponent(l).string = P.config.getStringData("MyRedPackets_full_label"), this.dos_label.getComponent(l).string = P.config.getStringData("MyRedPackets_dos_label"), this.dos_label.getComponent(l).isBold = !0, this.share_label.getComponent(m).string = "<b>" + P.config.getStringData("MyRedPackets_btn_help_label") + "</b>", P.resMgr.getLabelStringSize(this.full_label.getComponent(l))
        }
        _showViewByType(e) {
            this.my_panel.active = e == ut.MY_RED_PACKETS, this.friend_panel.active = e == ut.HELP_FRIEND, e == ut.MY_RED_PACKETS ? (this.btn_my.getComponent(y).color = new w(229, 209, 146), this.btn_help_friend.getComponent(y).color = new w(w.WHITE), this._updateMyRedPackets()) : (this.btn_my.getComponent(y).color = new w(w.WHITE), this.btn_help_friend.getComponent(y).color = new w(229, 209, 146), this._updateHelpFriend())
        }
        _updataTotalHistoryAmount() {
            if (P.dataHandler.getUserData().total_history_amount > 0) {
                let e = P.StringTools.serverGoldToShowString(P.dataHandler.getUserData().total_history_amount);
                this.tips_label.string = P.StringTools.formatC(P.config.getStringData("MyRedPackets_my_panel_tips_panel_tips_label"), e), this.tips_panel.active = !0
            } else this.tips_panel.active = !1
        }
        _updateMyRedPackets() {
            if (0 == this._myList.length || !this.node.active) return;
            this._updataTotalHistoryAmount();
            let e = P.dataHandler.getUserData().getHelpWarpByID(this._show_code);
            null == e && (e = this._myList[0], this._show_code = e.captcha_data.code), this._setTitleScrollView(), this._setFindsScrollView(e);
            let t = e.captcha_data.user_prizes_data;
            if (this.number_panel.active = 0 == t.luck_warp_type, this.image_panel.active = 1 == t.luck_warp_type, 0 == t.luck_warp_type) {
                this._time_label = f("time_label", this.number_panel).getComponent(l), f("number_node/number", this.number_panel).getComponent(l).string = P.StringTools.numToFloatString(t.amount)
            } else {
                this._time_label = f("time_label", this.image_panel).getComponent(l), f("name", this.image_panel).getComponent(l).string = P.StringTools.getServerStrByLanguage(t.ticket_name) + "*" + t.ticket_count;
                let e = f("icon", this.image_panel),
                    i = P.StringTools.getServerStrByLanguage(t.ticket_url);
                P.resMgr.downloadImg(P.dataHandler.getUserData().getImageUrlByPlat(i), e)
            }
            this._time_label.node.active = e.captcha_data.help_count > e.helper_data.length, this.btn_open.active = e.captcha_data.is_available, this.code_panel.active = !e.captcha_data.is_available, this.dos_label.active = !e.captcha_data.is_available, f("code", this.code_panel).getComponent(l).string = e.captcha_data.code.toString();
            let i = e.captcha_data.help_count - e.helper_data.length;
            if (this.full_label.active = i <= 0, this.title_node.active = i > 0, i > 0) {
                let e = f("label_0", this.title_node).getComponent(m),
                    t = f("label_1", this.title_node).getComponent(m);
                e.string = P.StringTools.formatC(P.config.getStringData("MyRedPackets_title_node_label_0"), i), t.string = P.config.getStringData("MyRedPackets_title_node_label_1");
                let n = P.resMgr.getRichTextStringSize(e).width + P.resMgr.getRichTextStringSize(t).width + 64;
                this.title_bg.getComponent(b).width = n + 100
            } else this.title_bg.getComponent(b).width = this.full_label.getComponent(b).width + 100;
            this.dos.string = P.StringTools.formatC(P.config.getStringData("MyRedPackets_dos_panel_dos"), e.helper_data.length), this._newProgressFill = e.helper_data.length / e.captcha_data.help_count, this.mask_node.destroyAllChildren(), this.mask_node.removeAllChildren();
            let n = e.captcha_data.help_count,
                a = this.mask_node.getComponent(b).width / n;
            for (let e = 0; e < n - 1; e++) {
                let t = d(this.item_img);
                t.active = !0, this.mask_node.addChild(t), t.setPosition(new S(a + a * e, 0, t.position.z))
            }
        }
        SetNewProgressBarFill() {
            this.progressBar.totalLength = this.progressBar.node.getComponent(b).width, this.progressBar.progress = this._newProgressFill
        }
        _initTitleScrollView() {
            this._title_list = [];
            let e = this._myList;
            this.title_item.active = !1, this.title_scrollView.content.getComponent(b).width = 45, this.title_scrollView.content.destroyAllChildren(), this.title_scrollView.content.removeAllChildren();
            for (let t = 0; t < e.length; t++) {
                let i = e[t],
                    n = d(this.title_item);
                n.name = i.captcha_data.code.toString(), n.active = !0;
                let a = i.captcha_data.is_available ? "img_dlq" : "img_djh";
                P.resMgr.setSpriteFrame(f("title_img", n), P.config.getLanguagePath("hall/MyRedPackets/" + a));
                let r = 0 == i.captcha_data.user_prizes_data.luck_warp_type,
                    o = r ? "bg_title_choose" : "bg_title_blue";
                o = this._show_code == i.captcha_data.code ? o : "bg_title_redline", P.resMgr.setSpriteFrame(n, "zh_CN/hall/MyRedPackets/" + o);
                let s = f("number_node", n),
                    _ = f("tickets_label", n),
                    h = 0;
                if (_.active = !r, s.active = r, r) {
                    let e = f("number", s);
                    e.getComponent(l).string = P.StringTools.numToFloatString(i.captcha_data.user_prizes_data.amount), h = P.resMgr.getLabelStringSize(e.getComponent(l)).width - 160
                } else {
                    _.getComponent(l).string = P.StringTools.getServerStrByLanguage(i.captcha_data.user_prizes_data.ticket_title), h = P.resMgr.getLabelStringSize(_.getComponent(l)).width - 190
                }
                h > 0 && (n.getComponent(b).width = 234 + h, P.resMgr.adaptWidget(n, !0), _.setPosition(new S(n.getComponent(b).width / 2 + 13, _.position.y, _.position.z))), this.title_scrollView.content.getComponent(b).width += 11 + n.getComponent(b).width, this.title_scrollView.content.addChild(n), this._title_list.push(n)
            }
        }
        _setTitleScrollView() {
            let e = this._myList;
            for (let t = 0; t < e.length; t++) {
                let i = this._title_list[t],
                    n = e[t],
                    a = 0 == n.captcha_data.user_prizes_data.luck_warp_type ? "bg_title_choose" : "bg_title_blue";
                a = this._show_code == n.captcha_data.code ? a : "bg_title_redline", P.resMgr.setSpriteFrame(i, "zh_CN/hall/MyRedPackets/" + a)
            }
        }
        _setFindsScrollView(e) {
            let t = e.helper_data,
                i = e.captcha_data.help_count,
                n = 110;
            this.item_finds.active = !1, this.finds_scrollView.content.getComponent(b).width = 0, this.finds_scrollView.content.destroyAllChildren(), this.finds_scrollView.content.removeAllChildren();
            for (let e = 0; e < i; e++) {
                let i = d(this.item_finds);
                i.active = !0, this.finds_scrollView.content.addChild(i), i.setPosition(n, 0), n += i.getComponent(b).width, this.finds_scrollView.content.getComponent(b).width = n, f("avatar_empty", i).active = e >= t.length;
                let a = f("name", i),
                    r = f("avatar_bg", i),
                    o = f("avatar", i);
                if (a.active = e < t.length, r.active = e < t.length, o.active = e < t.length, e < t.length) {
                    let i = t[e],
                        n = P.dataHandler.getUserData().getRemarkData(i.user_id),
                        r = "" == n.sRemark ? i.nick_name : n.sRemark;
                    a.getComponent(l).string = r, C.cleanHeadNode(o), C.setCircleSprite(o, i.avatar, 0, !1)
                }
            }
        }
        _updateHelpFriend() {
            this._updateLeftHelpCount()
        }
        _updateHelpWarpList() {
            this._myList = P.dataHandler.getUserData().getHelpWarpList(), this._initTitleScrollView(), this.updateView(), this.setSafeAreaAndPanelHeight(), this.SetNewProgressBarFill()
        }
        _updateLeftHelpCount() {
            let e = P.dataHandler.getUserData().left_help_count;
            this.des_0.string = P.StringTools.formatC(P.config.getStringData("MyRedPackets_friend_panel_des_0"), e)
        }
        updateView() {
            let e = this._viewType;
            0 == this._myList.length ? (this.topSubTitle.active = !1, e = ut.HELP_FRIEND) : this.topSubTitle.active = !0, this._showViewByType(e)
        }
        onBtnMy() {
            this._viewType != ut.MY_RED_PACKETS && (P.AudioMgr.playButtonSound("tab"), this._viewType = ut.MY_RED_PACKETS, this.updateView(), this.setSafeAreaAndPanelHeight(), this.SetNewProgressBarFill())
        }
        onBtnHelpFriend() {
            this._viewType != ut.HELP_FRIEND && (P.AudioMgr.playButtonSound("tab"), this._viewType = ut.HELP_FRIEND, this.updateView(), this.setSafeAreaAndPanelHeight(), this.SetNewProgressBarFill())
        }
        onBtnOpen() {
            0 != this._show_code && (P.AudioMgr.playButtonSound("tab"), P.worldNet.UserReceiveHelpWarpRequest(this._show_code))
        }
        onBtnAddHelper() {
            P.AudioMgr.playButtonSound("tab");
            let e = this.editBox.string;
            P.dataHandler.getUserData().left_help_count < 1 ? P.TT.showMsg(P.config.getStringData("ServerErrorCode286"), P.Enum.ToastType.ToastTypeError) : e.length < 6 ? P.TP.showMsg(P.config.getStringData("MyRedPackets_code_error"), P.Enum.ButtonStyle.GOLD_BUTTON, null) : P.worldNet.AddHelperRequest(P.Number(e))
        }
        onBtnRule() {
            let e = M.getSinglePrefabInst(this.prefab_MyRedPackets_Rule);
            P.action.addChildToSceneOnce(e), P.action.showAction(e, P.action.eMoveActionDir.EMAD_TO_LEFT, P.action.eMoveActionType.EMAT_FADE_IN, P.action.delay_type.NORMAL)
        }
        onBtnShare() {
            let e = R.getSinglePrefabInst(this.prefab_MyRedPackets_Share);
            P.action.addChildToSceneOnce(e);
            let t = P.dataHandler.getUserData().getHelpWarpByID(this._show_code);
            e.getComponent(R).show(t)
        }
        onShowHelpFriendView(e) {
            let t = T.getSinglePrefabInst(this.prefab_HelpFriendView);
            P.action.addChildToSceneOnce(t), t.getComponent(T).show(e), this.editBox.string = "", this._updateHelpFriend()
        }
        onShowOpenRedPackets(e) {
            let t = k.getSinglePrefabInst(this.prefab_OpenRedPackets);
            P.action.addChildToSceneOnce(t), t.getComponent(k).show(e), this._updateMyRedPackets(), this.SetNewProgressBarFill()
        }
        onBtnTitle(e) {
            let t = P.Number(e.currentTarget.name);
            this._show_code != t && (this._show_code = t, this._updateMyRedPackets(), this.SetNewProgressBarFill())
        }
        setSafeAreaAndPanelHeight() {}
    })._g_prefabInst = null, we = t((ye = ht).prototype, "img_bg_top", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Se = t(ye.prototype, "txt_title", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Pe = t(ye.prototype, "share_label", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ce = t(ye.prototype, "btn_my", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Me = t(ye.prototype, "btn_help_friend", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Re = t(ye.prototype, "my_panel", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Te = t(ye.prototype, "tips_panel", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ke = t(ye.prototype, "tips_label", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ve = t(ye.prototype, "title_scrollView", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ze = t(ye.prototype, "title_item", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), De = t(ye.prototype, "number_panel", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ae = t(ye.prototype, "image_panel", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), He = t(ye.prototype, "btn_open", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Be = t(ye.prototype, "code_panel", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Le = t(ye.prototype, "dos_label", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ee = t(ye.prototype, "dos_img", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Fe = t(ye.prototype, "btn_help", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ve = t(ye.prototype, "title_bg", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ne = t(ye.prototype, "full_label", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ie = t(ye.prototype, "title_node", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Oe = t(ye.prototype, "progressBar", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), xe = t(ye.prototype, "item_img", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ue = t(ye.prototype, "mask_node", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), We = t(ye.prototype, "dos", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ge = t(ye.prototype, "finds_scrollView", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ke = t(ye.prototype, "item_finds", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ye = t(ye.prototype, "friend_panel", [ee], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), qe = t(ye.prototype, "title_0", [te], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), je = t(ye.prototype, "title_1", [ie], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Je = t(ye.prototype, "editBox", [ne], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Qe = t(ye.prototype, "des_0", [ae], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Xe = t(ye.prototype, "des_1", [le], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ze = t(ye.prototype, "btn_add_helper", [re], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $e = t(ye.prototype, "prefab_MyRedPackets_Rule", [oe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), et = t(ye.prototype, "prefab_MyRedPackets_Share", [se], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), tt = t(ye.prototype, "prefab_HelpFriendView", [_e], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), it = t(ye.prototype, "prefab_OpenRedPackets", [he], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), nt = t(ye.prototype, "myRedPackets", [pe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), at = t(ye.prototype, "layout", [ce], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), lt = t(ye.prototype, "safearea", [ue], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), rt = t(ye.prototype, "imgBgTop", [de], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ot = t(ye.prototype, "myPanel", [ge], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), st = t(ye.prototype, "friendPanel", [be], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _t = t(ye.prototype, "topSubTitle", [fe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), me = ye)) || me));
    n._RF.pop()
}