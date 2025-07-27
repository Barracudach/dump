import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as u from "./cv.js";
import * as p from "./CircleSprite.js";
import * as c from "./starDetail.js";
import * as S from "./CrashTracing.js";
import * as C from "./CrashTracing.js";

function main() {
    var f, _, b, T;
    o._RF.push({}, "879a1uPCWpPorlQQZuomlgn", "FindItemStar", void 0);
    const {
        ccclass: y,
        property: P
    } = s;
    t("default", (f = P(n), y((T = e((b = class extends r {
        constructor(...t) {
            super(...t), this.msg = null, this.needPassword = !1, i(this, "starDetail_prefab", T, this), this.headNodeX = 647
        }
        onLoad() {
            u.resMgr.adaptWidget(this.node, !0), u.MessageCenter.register(u.config.CHANGE_LANGUAGE, this.initLanguage.bind(this), this.node);
            let t = a("starInfo/starHead2", this.node);
            this.headNodeX = t.getPosition().x, u.MessageCenter.register("onCheckStarRoomResponse", this.onCheckStatus.bind(this), this.node)
        }
        onDestroy() {
            u.MessageCenter.unregister(u.config.CHANGE_LANGUAGE, this.node), u.MessageCenter.unregister("onCheckStarRoomResponse", this.node)
        }
        initLanguage() {
            this.msg && this.updateView()
        }
        updateItemData(t) {
            a("bg_image", this.node).getComponent(g).opacity = 255, this.msg = t, this.initLanguage()
        }
        updateView() {
            let t = u.roomManager.checkGameIsZoom(this.msg.game_id),
                e = a("roomStatus/room_name", this.node).getComponent(m);
            var i = this.msg.room_name.split("#");
            let o = u.config.getCurrentLanguageDetails().index;
            e.string = i[o] || i[1], u.resMgr.setSpriteFrame(a("bg_img", this.node), u.config.getLanguagePath("hall/lobby/common_starTable"));
            let n = a("manzhu/mangZhu_text", this.node),
                s = a("member_img/memberNum_text", this.node).getComponent(m);
            t ? (s.string = this.msg.player_count.toString(), u.resMgr.getLabelStringSize(s, s.string)) : a("member_img/memberNum_text", this.node).getComponent(m).string = this.msg.player_count + "/" + this.msg.player_count_max;
            let r = parseFloat(u.StringTools.numToFloatString(this.msg.buyin_min));
            if (this.msg.game_mode == u.Enum.CreateGameMode.CreateGame_Mode_Normal) {
                let t = parseFloat(u.StringTools.numToFloatString(this.msg.big_blind)),
                    e = parseFloat(u.StringTools.numToFloatString(this.msg.small_blind)),
                    i = parseFloat(u.StringTools.numToFloatString(this.msg.buyin_min)),
                    o = 2 * t,
                    s = t >= 1e3 ? u.StringTools.formatC("%sK", (t / 1e3).toString()) : t.toString(),
                    g = e >= 1e3 ? u.StringTools.formatC("%sK", (e / 1e3).toString()) : e.toString();
                if (n.getComponent(m).string = u.StringTools.formatC("%s/%s", g.toString(), s.toString()), this.msg.straddle && (n.getComponent(m).string = n.getComponent(m).string + "/" + (o >= 1e3 ? u.StringTools.formatC("%sK", (o / 1e3).toString()) : o.toString())), this.msg.game_id == u.Enum.GameId.Allin);
                else if (this.msg.game_id == u.Enum.GameId.Bet) {
                    let t = i >= 1e3 ? u.StringTools.formatC("%sK", (i / 1e3).toString()) : i.toString();
                    n.getComponent(m).string = u.StringTools.formatC(u.config.getStringData("FindItem_bet_mangZhu_text"), t)
                } else if (this.msg.game_id == u.Enum.GameId.Jackfruit) {
                    let t = a("jackfruit_node/minimum_img", this.node),
                        e = a("jackfruit_node/minimum_label", this.node);
                    e.getComponent(m).string = r >= 1e3 ? u.StringTools.formatC("%sK", (r / 1e3).toString()) : r.toString();
                    let i = u.resMgr.getLabelStringSize(e.getComponent(m)),
                        o = e.getPosition();
                    t.setPosition(l(o.x - i.width - 24, t.getPosition().y, t.getPosition().z))
                }
            } else if (this.msg.game_mode == u.Enum.CreateGameMode.CreateGame_Mode_Short)
                if (n.getComponent(m).string = "", this.msg.game_id == u.Enum.GameId.Allin) u.resMgr.setSpriteFrame(a("bg_img", this.node), u.config.getLanguagePath("hall/lobby/common_aofshort"));
                else if (this.msg.game_id == u.Enum.GameId.Jackfruit) {
                let t = a("jackfruit_node/minimum_img", this.node),
                    e = a("jackfruit_node/minimum_label", this.node);
                e.getComponent(m).string = r >= 1e3 ? u.StringTools.formatC("%sK", (r / 1e3).toString()) : r.toString();
                let i = u.resMgr.getLabelStringSize(e.getComponent(m)),
                    o = e.getPosition();
                t.setPosition(l(o.x - i.width - 24, t.getPosition().y, t.getPosition().z))
            }
            this.msg.ante && this.msg.game_id != u.Enum.GameId.Bet && ("" != n.getComponent(m).string ? n.getComponent(m).string += "(" + u.StringTools.numberToString(.01 * this.msg.ante) + ")" : n.getComponent(m).string += u.StringTools.numberToString(.01 * this.msg.ante));
            let g = a("member_img", this.node),
                h = n.parent.getPosition().x;
            g.setPosition(l(h + u.resMgr.getLabelStringSize(n.getComponent(m)).width + 40, g.getPosition().y, g.getPosition().z));
            let c = a("number", this.node).getComponent(m);
            c.string = this.msg.bystanderNum.toString();
            let S = a("viewsPerson", this.node);
            S.setPosition(l(c.node.getPosition().x - u.resMgr.getLabelStringSize(c.getComponent(m)).width - 5, S.getPosition().y, S.getPosition().z));
            let C = a("starInfo", this.node),
                f = this.msg.starData,
                _ = f.length > 2 ? 2 : f.length;
            this.resetStarItem();
            let b = !1;
            for (let t = 0; t < _; t++) {
                let e = a(u.StringTools.formatC("starHead%d", t + 1), C),
                    i = a(u.StringTools.formatC("starName%d", t + 1), C);
                e.active = !0;
                let o = e.getChildByName("starHead"),
                    n = i.getChildByName("starName"),
                    s = e.getChildByName("CelebrityFX"),
                    r = f[t].thumb;
                if (r && p.setCircleSprite(o, r, 0, !1), 1 == t) {
                    e.setPosition(l(this.headNodeX, e.position.y, e.position.z));
                    let t = e.position.x - e.getComponent(d).width / 2,
                        i = a("starName1", C),
                        o = i.position.x + i.getComponent(d).width;
                    t < o + 40 && e.setPosition(l(o + e.getComponent(d).width / 2 + 40, e.position.y, e.position.z))
                } else u.resMgr.adaptWidget(e, !0);
                if (f[t].nickname.length > 0) {
                    i.active = !0;
                    let o = n.getComponent(m);
                    o.string = f[t].nickname;
                    let s = u.resMgr.getLabelStringSize(o).width + 40;
                    i.getComponent(d).width = s, n.setPosition(l(s / 2, n.position.y, n.position.z)), i.setPosition(l(e.getPosition().x + e.getComponent(d).width / 2 - 10, i.position.y, i.position.z)), u.resMgr.adaptWidget(i, !0)
                } else i.active = !1;
                2 != f[t].status && (b = !0);
                let g = e.getChildByName("txtStatus");
                g.getComponent(m).string = u.config.getStringData("Star_live_offline");
                let h = e.getChildByName("maskDark");
                g.active = !1, h.active = !1, s.active = !0, u.config.getCurrentLanguage() == u.Enum.LANGUAGE_TYPE.zh_CN ? g.getComponent(m).fontSize = 36 : g.getComponent(m).fontSize = 26
            }
            let T = a("roomStatus/live_icon", this.node);
            b ? (e.node.setPosition(l(T.position.x + T.getComponent(d).width / 2 + 11, e.node.position.y)), T.active = !0) : (T.active = !1, e.node.setPosition(l(T.position.x - T.getComponent(d).width / 2, e.node.position.y)))
        }
        onCheckStatus(t) {
            let e = t.error,
                i = t.roomId,
                o = t.notifyTime;
            if (i != this.msg.room_id) return void console.log("onCheckStatus  star roomID is error _roomId=" + i);
            if (1 != e) {
                if (255 == e) {
                    let t = new Date(1e3 * o),
                        e = u.StringTools.formatC("%02d:%02d%s", t.getHours(), t.getMinutes(), u.config.getStringData("ServerErrorCode255"));
                    u.TT.showMsg(e, u.Enum.ToastType.ToastTypeInfo)
                } else 256 == e && u.TT.showMsg(u.config.getStringData("ServerErrorCode256"), u.Enum.ToastType.ToastTypeInfo);
                return
            }
            if (u.dataHandler.getUserData().isban) return void u.TT.showMsg(u.config.getStringData("ServerErrorCode501"), u.Enum.ToastType.ToastTypeInfo);
            if (!this.msg.anti_simulator && u.native.showSimulatorTips(this.msg.anti_simulator_ignore_cond, !0)) return;
            a("bg_image", this.node).getComponent(g).opacity = 170;
            let n = this.msg.join_password.length > 0,
                s = u.tools.GetStringByCCFile("hideJackfruitRule"),
                r = "" == s || null == s;
            if (this.msg.game_id == u.Enum.GameId.Jackfruit && r);
            else {
                const t = u.GameDataManager.getOrCreateDataInstance(this.msg.game_id, this.msg.room_id);
                t.tRoomData.entry_clubid = this.msg.club_id, t.tRoomData.u32GameID = this.msg.game_id, this.needPassword = n, u.roomManager.RequestJoinRoom(this.msg.game_id, this.msg.room_id, !1, n)
            }
        }
        onBtnItemClick(t) {
            u.security.tryJoinPokerRoom(this.joinRoom.bind(this))
        }
        joinRoom() {
            var t;
            this.msg ? !this.msg.anti_simulator && u.native.showSimulatorTips(this.msg.anti_simulator_ignore_cond, !0) || u.worldNet.CheckStarRoomRequest(this.msg.room_id) : null == (t = S.getInstance()) || t.trace(C.FlowJoinGame, "JoinStarRoomError", {
                endSpanEventName: "JoinStarRoomError",
                info: "There is no room details in lobby when hero try to join",
                thisObjExist: h(this.node, !0)
            })
        }
        resetStarItem() {
            let t = a("starInfo", this.node);
            for (let e = 0; e < 2; e++) {
                let i = a(u.StringTools.formatC("starHead%d", e + 1), t),
                    o = a(u.StringTools.formatC("starName%d", e + 1), t);
                i.active = !1, o.active = !1;
                let n = i.getChildByName("starHead");
                p.cleanHeadNode(n), i.getChildByName("CelebrityFX").active = !1
            }
        }
        onBtnClickStarHead1(t) {
            let e = this.msg.starData,
                i = [];
            if (e && e.length > 0) {
                e[0] && e[0].uid && i.push(e[0].uid), e[1] && e[1].uid && i.push(e[1].uid), u.worldNet.StarDetailInfoRequest(i), c.getSinglePrefabInst(this.starDetail_prefab).getComponent(c).setData(this.onBtnItemClick.bind(this), 1)
            }
        }
        onBtnClickStarHead2(t) {
            let e = this.msg.starData,
                i = [];
            if (e && e.length > 0) {
                if (!e[1] || !e[1].uid) return;
                i.push(e[1].uid), e[0] && e[0].uid && i.push(e[0].uid), c.getSinglePrefabInst(this.starDetail_prefab).getComponent(c).setData(this.onBtnItemClick.bind(this), 2), u.worldNet.StarDetailInfoRequest(i)
            }
        }
    }).prototype, "starDetail_prefab", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = b)) || _));
    o._RF.pop()
}