import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as p from "./ListView.js";
import * as _ from "./ScrollViewReuse.js";
import * as m from "./cv.js";
import * as g from "./GameSceneInstance.js";
import * as f from "./MyRedpacketItem.js";

function main() {
    var b, w, y, S, k, R, D, V, I, M, T, z, E, v, L, C, B, P, A, O, N, G, F, H, U, j, q, x, W, K, Z, J, Q, X, Y, $, tt, et, it, rt;
    r._RF.push({}, "a3f99uEojZMLo+7D1MPUKOs", "StarRedpacketView", void 0);
    const {
        ccclass: at,
        property: nt
    } = o;
    t("default", (b = nt(a), w = nt(a), y = nt(n), S = nt(n), k = nt(n), R = nt(n), D = nt(n), V = nt(n), I = nt(n), M = nt(n), T = nt(l), z = nt(n), E = nt(n), v = nt(n), L = nt(l), C = nt(n), B = nt(s), P = nt(s), A = g("GameDataInstance"), at((G = e((N = class extends u {
        constructor(...t) {
            super(...t), i(this, "redpacket_panel", G, this), i(this, "my_panel", F, this), i(this, "redpacket_title", H, this), i(this, "redpacket_des", U, this), i(this, "time_title", j, this), i(this, "time_nums", q, this), i(this, "reward_title", x, this), i(this, "reward_num", W, this), i(this, "reward_num_des", K, this), i(this, "record_title", Z, this), i(this, "record_scrollView", J, this), i(this, "my_redpacket_btn_label", Q, this), i(this, "red_empty_label", X, this), i(this, "my_title", Y, this), i(this, "my_scrollView", $, this), i(this, "my_empty_label", tt, this), i(this, "MyRedpacketItem", et, this), i(this, "RecordItem", it, this), this._time = 0, this._list = [], i(this, "gameDataInstance", rt, this)
        }
        onLoad() {
            this._initLanguage()
        }
        start() {
            this._initRecordScrollView(), this._initMyScrollView(), m.MessageCenter.register("update_star_seat_draw_list", this.onUpdateStarSeatDrawList.bind(this), this.node), m.MessageCenter.register("update_self_star_seat_result_list", this.onUpdateSelfStarSeatDrawList.bind(this), this.node), c.on(h.EVENT_HIDE, this.OnAppEnterBackground, this), c.on(h.EVENT_SHOW, this.OnAppEnterForeground, this)
        }
        onDestroy() {
            d.getScheduler().unschedule(this.updataTime, this), m.MessageCenter.unregister("update_star_seat_draw_list", this.node), m.MessageCenter.unregister("update_self_star_seat_result_list", this.node), c.off(h.EVENT_HIDE, this.OnAppEnterBackground, this), c.off(h.EVENT_SHOW, this.OnAppEnterForeground, this)
        }
        updataTime(t) {
            if (this._time > 0) {
                let t = Math.floor(this._time / 3600),
                    e = Math.floor(this._time % 3600 / 60),
                    i = Math.floor(this._time % 60),
                    r = [];
                r.push(Math.floor(t / 10)), r.push(Math.floor(t % 10)), r.push(Math.floor(e / 10)), r.push(Math.floor(e % 10)), r.push(Math.floor(i / 10)), r.push(Math.floor(i % 10));
                for (let t = 0; t < this.time_nums.length; t++) this.time_nums[t].string = r[t];
                this._time -= 1
            } else {
                d.getScheduler().unschedule(this.updataTime, this);
                for (let t = 0; t < this.time_nums.length; t++) this.time_nums[t].string = "-";
                this.reward_num.string = "--", this.reward_num_des.string = ""
            }
        }
        _initLanguage() {
            this.time_title.string = m.config.getStringData("StarRedpacketView_time_title"), this.reward_title.string = m.config.getStringData("StarRedpacketView_reward_title"), this.red_empty_label.string = m.config.getStringData("StarRedpacketView_red_empty_label"), this.my_empty_label.string = m.config.getStringData("StarRedpacketView_my_empty_label"), this.record_title.string = m.config.getStringData("StarRedpacketView_record_title"), this.my_title.string = m.config.getStringData("MyRedPackets_btn_my"), this.my_redpacket_btn_label.string = m.config.getStringData("MyRedPackets_btn_my")
        }
        _initRecordScrollView() {
            let t = this.record_scrollView.getComponent(_);
            t.bindPrefab(this.RecordItem, "RecordItem", []), t.generateItemPool(), t.bindScrollEventTarget(this)
        }
        _initMyScrollView() {
            let t = this.my_scrollView.getComponent(p);
            t.bindScrollEventTarget(this), t.init(this.bindcallfunc.bind(this), this.getItemType.bind(this))
        }
        bindcallfunc(t, e, i) {
            t.getComponent(f).updateItemData(e.data)
        }
        getItemType(t, e) {
            return t.type
        }
        updateView() {
            m.gameNet.requestGetLuckStarSeatDrawList(), m.gameNet.requestGetSelfLuckStarSeatResultList(), 0 == m.StringTools.getArrayLength(this.gameDataInstance.tRoomData.starRedpacketInfo.title) ? this.redpacket_title.string = m.config.getStringData("StarRedpacketView_title") : this.redpacket_title.string = this.gameDataInstance.tRoomData.starRedpacketInfo.title, this.redpacket_des.string = this.gameDataInstance.tRoomData.starRedpacketInfo.desc;
            let t = Math.floor((new Date).getTime() / 1e3);
            this._time = this.gameDataInstance.tRoomData.starRedpacketInfo.left_time - t, this.updataTime(0), this._time > 0 && (d.getScheduler().unschedule(this.updataTime, this), d.getScheduler().schedule(this.updataTime, this, 1), this.reward_num.string = m.StringTools.serverGoldToShowString(this.gameDataInstance.tRoomData.starRedpacketInfo.total_luck_amount), this.reward_num_des.string = m.config.getStringData("unit"))
        }
        showView() {
            this.showRedPacket(), this.node.active = !0, this.updateView()
        }
        isShowView() {
            return this.node.active
        }
        hideView() {
            this.node.active = !1, d.getScheduler().unschedule(this.updataTime, this)
        }
        onBtnClose() {
            m.AudioMgr.playButtonSound("back_button"), this.hideView()
        }
        onBtnMyRedpacket() {
            m.AudioMgr.playButtonSound("button_click"), this.redpacket_panel.active = !1, this.my_panel.active = !0, this.my_scrollView.scrollToTop(.01)
        }
        onBtnBack() {
            m.AudioMgr.playButtonSound("button_click"), this.showRedPacket()
        }
        showRedPacket() {
            this.redpacket_panel.active = !0, this.my_panel.active = !1
        }
        onUpdateStarSeatDrawList(t) {
            1 === t.page && (this._list = []);
            for (let e = 0; e < t.draw_result_list.length; e++) this._list.push(t.draw_result_list[e]);
            if (t.total == this._list.length) {
                this.record_scrollView.getComponent(_).reloadView(this._list), this.red_empty_label.node.active = 0 == this._list.length
            }
        }
        onUpdateSelfStarSeatDrawList(t) {
            let e = [],
                i = [];
            for (let r = 0; r < t.length; r++) 0 == t[r].state ? e.push({
                type: 0 == e.length ? 0 : 1,
                data: t[r]
            }) : i.push({
                type: 0 == i.length ? 0 : 1,
                data: t[r]
            });
            let r = this.my_scrollView.getComponent(p),
                a = e.concat(i);
            r.notifyDataSetChanged(a), this.my_empty_label.node.active = 0 == a.length
        }
        OnAppEnterBackground() {}
        OnAppEnterForeground() {
            this.updateView()
        }
    }).prototype, "redpacket_panel", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = e(N.prototype, "my_panel", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = e(N.prototype, "redpacket_title", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = e(N.prototype, "redpacket_des", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = e(N.prototype, "time_title", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = e(N.prototype, "time_nums", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), x = e(N.prototype, "reward_title", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = e(N.prototype, "reward_num", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = e(N.prototype, "reward_num_des", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = e(N.prototype, "record_title", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = e(N.prototype, "record_scrollView", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = e(N.prototype, "my_redpacket_btn_label", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = e(N.prototype, "red_empty_label", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = e(N.prototype, "my_title", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = e(N.prototype, "my_scrollView", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), tt = e(N.prototype, "my_empty_label", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), et = e(N.prototype, "MyRedpacketItem", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), it = e(N.prototype, "RecordItem", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), rt = e(N.prototype, "gameDataInstance", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = N)) || O));
    r._RF.pop()
}