import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as _ from "./cv.js";
import * as m from "./RoomData.js";
import * as b from "./RoomData.js";
import * as g from "./ListView.js";
import * as f from "./CurrentTimeItem.js";
import * as w from "./obItems.js";
import * as C from "./obManNumber.js";
import * as v from "./ResourceManager.js";
import * as y from "./BottomMenuHandler.js";
import * as R from "./GameSceneInstance.js";
import * as S from "./GameSceneInstance.js";

function main() {
    var T, D, O, W, I, M, L, z, B, U, A, E, N, k, H, F, x, G, P, V, j, Z, J, Y;
    n._RF.push({}, "cac71zYJFVOSrITso3BPVMB", "CurrentTime", void 0);
    const {
        ccclass: q,
        property: K
    } = l;
    t("CurrentTime", (T = K(o), D = K(s), O = K(o), W = K(o), I = K(o), M = K(o), L = K(o), z = K(o), B = K(a), U = K(a), A = R("GameDataInstance"), q((k = e((N = class extends r {
        constructor(...t) {
            super(...t), i(this, "nodeWidget", k, this), i(this, "blind_text", H, this), i(this, "data_scrollview", F, this), i(this, "data_win_scrollview", x, this), i(this, "obMain_panel", G, this), i(this, "blur_bottom_menu", P, this), i(this, "header_menu", V, this), i(this, "no_spectator_panel", j, this), i(this, "spCtrlOn", Z, this), i(this, "spCtrlOff", J, this), this.dataListWinAll = [], this.dataListWinDesktop = [], i(this, "gameDataInstance", Y, this), this.list_scrollview = null, this.list_win_scrollview = null
        }
        onLoad() {
            this.list_scrollview = this.data_scrollview.getComponent(g), this.list_win_scrollview = this.data_win_scrollview.getComponent(g), this.registerMsg(), this.setShowCtrlDefault();
            const t = "TRUE" === _.tools.GetStringByCCFile("CURRENTSHOWCTRL");
            this.spCtrlOn.active = t, this.spCtrlOff.active = !t
        }
        setShowCtrlDefault() {
            null === _.tools.GetStringByCCFile("CURRENTSHOWCTRL") && _.tools.SaveStringByCCFile("CURRENTSHOWCTRL", "TRUE")
        }
        onRoomSituation(t) {
            if (S.isInvalidRoomMultiWindow(t.gameData, null == this ? void 0 : this.node)) return;
            let e = t.msg;
            const i = _.config.getblindString(this.gameDataInstance.tRoomData.pkRoomParam.rule_blind_enum - 1);
            this.blind_text.string = _.config.getStringData("UIGameBlind").replace("%s", i).toUpperCase();
            e.buyin_player_list.find((t => t.playerid === _.dataHandler.getUserData().u32Uid)) && (this.gameDataInstance.tRoomData.isBuyin = !0, _.MessageCenter.send("onSetShowAuditState", !0));
            e.check_out_list.find((t => t === _.dataHandler.getUserData().u32Uid)) && (this.gameDataInstance.tRoomData.isBuyin = !1, _.MessageCenter.send("onSetShowAuditState", !0));
            const n = [],
                o = [];
            for (let t = 0; t < e.observer_list.length; ++t) {
                const i = e.observer_list[t],
                    s = new m;
                s.name = i.name, s.playerid = i.playerid, s.marks = i.marks, s.isInroom = i.is_online, s.data = i, s.headPath = i.headurl, s.plat = i.plat, s.is_online = i.is_online, s.user_join_room_time = i.user_join_room_time, n.push(s);
                const a = new v;
                a.url = i.headurl, a.plat = i.plat, a.isOB = !0, o.push(a)
            }
            _.resMgr.addRemoteHeadInfo(o, !0), this.dataListWinAll = [], this.dataListWinDesktop = [];
            const s = [],
                a = Object.assign([], e.buyin_player_list);
            a.sort(this.compareRecords);
            for (let t = 0; t < a.length; t++) {
                this.dataListWinAll.push({
                    type: 0,
                    data: a[t]
                });
                null != this.gameDataInstance.tRoomData.GetTablePlayer(a[t].playerid) && this.dataListWinDesktop.push({
                    type: 0,
                    data: a[t]
                })
            }
            const l = new b;
            null != e.observer_info && (l.onlineNum = e.observer_info.online_count, l.totalNum = e.observer_info.total_count), s.push({
                type: 1,
                data: l
            });
            for (let t = 0; t < n.length; t += 4) {
                const e = n.slice(t, t + 4);
                s.push({
                    type: 2,
                    data: e
                })
            }
            this.updateTextOb(s), this.list_win_scrollview.init(this.bindcallfuncWin.bind(this), this.getItemTypeWin.bind(this)), "TRUE" === _.tools.GetStringByCCFile("CURRENTSHOWCTRL") ? this.list_win_scrollview.notifyDataSetChanged(this.dataListWinDesktop) : this.list_win_scrollview.notifyDataSetChanged(this.dataListWinAll), this.list_scrollview.init(this.bindcallfunc.bind(this), this.getItemType.bind(this)), this.list_scrollview.notifyDataSetChanged(s)
        }
        updateTextOb(t) {
            const e = t.find((t => 1 === t.type));
            if (e) {
                if (u(this.obMain_panel)) {
                    const t = this.obMain_panel.getComponent(C);
                    u(t) && e.data && t.setdata(e.data)
                }
                this.no_spectator_panel.node.active = 0 === e.data.totalNum
            } else this.no_spectator_panel.node.active = !1
        }
        bindcallfuncWin(t, e, i) {
            0 === e.type && t.getComponent(f).setdata(e.data, i)
        }
        getItemTypeWin(t, e) {
            return t.type
        }
        bindcallfunc(t, e, i) {
            2 === e.type && t.getComponent(w).setdata(e.data)
        }
        getItemType(t, e) {
            return t.type
        }
        compareRecords(t, e) {
            return e.curr_record - t.curr_record
        }
        onShowListCtrl() {
            _.AudioMgr.playButtonSound("button_click"), !0 === this.spCtrlOn.active ? (this.spCtrlOn.active = !1, this.spCtrlOff.active = !0, _.tools.SaveStringByCCFile("CURRENTSHOWCTRL", "FALSE"), this.list_win_scrollview.notifyDataSetChanged(this.dataListWinAll)) : (this.spCtrlOn.active = !0, this.spCtrlOff.active = !1, _.tools.SaveStringByCCFile("CURRENTSHOWCTRL", "TRUE"), this.list_win_scrollview.notifyDataSetChanged(this.dataListWinDesktop))
        }
        onUpdateResize(t) {
            switch (t) {
                case y.Maximize:
                    this.nodeWidget.isAlignBottom = !0, this.nodeWidget.bottom = 0, this.header_menu.top = 154, this.data_win_scrollview.top = 214, this.data_win_scrollview.isAbsoluteBottom = !1, this.data_win_scrollview.bottom = .415, this.data_scrollview.isAbsoluteTop = !1, this.data_scrollview.top = .69, this.obMain_panel.isAbsoluteTop = !1, this.obMain_panel.top = .61;
                    var e = this.blur_bottom_menu.node.getComponent(c);
                    e.setContentSize(e.width, 136), this.blur_bottom_menu.node.getComponent(c).setContentSize(this.blur_bottom_menu.node.getComponent(c).width, 136), this.data_scrollview.node.getComponent(h).opacity = 255, this.data_scrollview.getComponent(d).content.active = !0;
                    break;
                case y.Normal:
                    this.nodeWidget.isAlignBottom = !1;
                    let t = this.node.getComponent(c);
                    t.setContentSize(t.width, 506), this.header_menu.top = 118, this.data_win_scrollview.top = 178, this.data_win_scrollview.isAbsoluteBottom = !1, this.data_win_scrollview.bottom = .22, this.obMain_panel.isAbsoluteTop = !1, this.obMain_panel.top = .81;
                    var i = this.blur_bottom_menu.node.getComponent(c);
                    i.setContentSize(i.width, 44), this.data_scrollview.node.getComponent(h).opacity = 0, this.data_scrollview.getComponent(d).content.active = !1
            }
            this.scheduleOnce(function() {
                var t, e, i, n;
                null == (t = this.list_win_scrollview) || t.sv.scrollToOffset(p.ZERO), null == (e = this.list_scrollview) || e.sv.scrollToOffset(p.ZERO), null == (i = this.list_win_scrollview) || i.updateDisplay(), null == (n = this.list_scrollview) || n.updateDisplay()
            }.bind(this), 0)
        }
        registerMsg() {
            _.MessageCenter.register("on_room_situation", this.onRoomSituation.bind(this), this.node)
        }
        unregisterMsg() {
            _.MessageCenter.unregister("on_room_situation", this.node)
        }
        onDestroy() {
            this.unregisterMsg()
        }
    }).prototype, "nodeWidget", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = e(N.prototype, "blind_text", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = e(N.prototype, "data_scrollview", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(N.prototype, "data_win_scrollview", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = e(N.prototype, "obMain_panel", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = e(N.prototype, "blur_bottom_menu", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = e(N.prototype, "header_menu", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = e(N.prototype, "no_spectator_panel", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = e(N.prototype, "spCtrlOn", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = e(N.prototype, "spCtrlOff", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = e(N.prototype, "gameDataInstance", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = N)) || E));
    n._RF.pop()
}