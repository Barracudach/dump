import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as o from "./cv.js";
import * as r from "./HumanboyDataMgr.js";
import * as a from "./JackPotNumber.js";
import * as c from "./HumanboyBaseSocket.js";
import * as l from "./HumanboyGameScene.js";

function main() {
    var s, u, g, h, b, p, m, _, d, f, y, w, k, C, T, P, S, L, v, N, E, R, z, x, H, j, B, O, I, J, D, A, M, V, W, K, Y, F, G, U, q, X, Q, Z, $, tt, et, it, nt, ot, rt, at, ct, lt, st, ut, gt, ht, bt, pt, mt, _t, dt, ft, yt, wt, kt, Ct, Tt, Pt, St, Lt, vt, Nt, Et, Rt, zt;
    n._RF.push({}, "db2b7vQQIlNIKi014ThpnnX", "HumanboyJackpot", void 0);
    var xt = function(t) {
        return t[t.JACKPOT_TYPE_NONE = 0] = "JACKPOT_TYPE_NONE", t[t.JACKPOT_TYPE_JACKPOT = 1] = "JACKPOT_TYPE_JACKPOT", t[t.JACKPOT_TYPE_RECORD = 2] = "JACKPOT_TYPE_RECORD", t[t.JACKPOT_TYPE_RULE = 3] = "JACKPOT_TYPE_RULE", t
    }(xt || {});
    const {
        ccclass: Ht,
        property: jt
    } = cc._decorator;
    t("HumanboyJackpot", (s = jt(cc.Node), u = jt(cc.Sprite), g = jt(cc.Button), h = jt(cc.Button), b = jt(cc.Button), p = jt(cc.Node), m = jt(cc.Node), _ = jt(cc.Node), d = jt(cc.Node), f = jt(cc.Node), y = jt(cc.Node), w = jt(cc.Node), k = jt(cc.Node), C = jt(cc.Node), T = jt(cc.Node), P = jt(cc.Node), S = jt(cc.Node), L = jt(cc.Node), v = jt(cc.Node), N = jt(cc.Prefab), E = jt(cc.Label), R = jt(cc.Label), z = jt(cc.Label), x = jt(cc.Label), H = jt(cc.Label), j = jt(cc.SpriteAtlas), B = jt(cc.Sprite), O = jt(cc.WebView), I = jt(cc.ProgressBar), J = jt(cc.ProgressBar), D = jt(cc.ProgressBar), A = jt(cc.Node), M = jt(cc.Node), V = jt(cc.Node), W = jt(cc.ScrollView), K = jt(cc.Prefab), Y = jt(cc.SpriteAtlas), Ht(((zt = class extends cc.Component {
        constructor(...t) {
            super(...t), e(this, "pageimg", U, this), e(this, "img_bg", q, this), e(this, "jackpotBtn", X, this), e(this, "signBtn", Q, this), e(this, "ruleBtn", Z, this), e(this, "jackpotbg", $, this), e(this, "signbg", tt, this), e(this, "rulebg", et, this), e(this, "awardType_txt", it, this), e(this, "awardPercent_txt", nt, this), e(this, "royalFlush_txt", ot, this), e(this, "straight_flush", rt, this), e(this, "four_txt", at, this), e(this, "bg_img", ct, this), e(this, "title_img", lt, this), e(this, "jackpot_panel", st, this), e(this, "sign_panel", ut, this), e(this, "rule_panel", gt, this), e(this, "_layout2", ht, this), this._JackPotNumberList = [], e(this, "jackNumber", bt, this), e(this, "jackPotInfo_text", pt, this), e(this, "bigWinnerName_text", mt, this), e(this, "bigWinnerCard_type_text", _t, this), e(this, "bigWinnerTime_text", dt, this), e(this, "bigWinnerNumber_text", ft, this), e(this, "humanboy_PLIST", yt, this), e(this, "img_shield", wt, this), e(this, "web", kt, this), e(this, "circle_0", Ct, this), e(this, "circle_1", Tt, this), e(this, "circle_2", Pt, this), e(this, "handLevel_0_text", St, this), e(this, "handLevel_1_text", Lt, this), e(this, "handLevel_2_text", vt, this), e(this, "scrollView", Nt, this), e(this, "item", Et, this), e(this, "num_PLIST", Rt, this), this._OptSelected = -1, this._viewType = xt.JACKPOT_TYPE_RECORD, this._atlas_hb_language = null
        }
        onLoad() {
            this._atlas_hb_language = o.resMgr.getSpriteAtlas(o.config.getLanguagePath("game/humanboyPlist/language")), this._layout2 = cc.find("Layout2", this.rule_panel);
            let t = o.domainMgr.getServerInfo().web_server + o.StringTools.formatC("index.php/user/Article/getRule?title=humanjackpot&clientType=%d&language=%s", o.config.GET_CLIENT_TYPE(), o.config.getCurrentLanguage());
            this.web.url = t;
            o.Enum.ZORDER_TYPE.ZORDER_TOP;
            if (this.img_shield.getComponent(cc.BlockInputEvents).enabled = !0, this.img_shield.node.on(cc.Node.EventType.TOUCH_END, this._onClickEnd, this), o.config.IS_FULLSCREEN) {
                let t = o.native.isScreenLandscape() ? o.viewAdaptive.IPHONEX_OFFSETY : 0;
                this.bg_img.setPosition(cc.winSize.width / 2 - this.bg_img.width / 2 - t + this.bg_img.width / 2, this.bg_img.getPosition().y)
            }
            let e = cc.find("jackpotImg/panel", this.jackpot_panel);
            for (let t = 0; t < 7; t++) {
                let i = cc.instantiate(this.jackNumber);
                e.addChild(i);
                let n = i.getComponent(a);
                n.init(!1);
                for (let t = 0; t < 10; ++t) {
                    let e = this.num_PLIST.getSpriteFrame(o.StringTools.formatC("um_%d", t));
                    n.setNumberImg(t, e)
                }
                n.setGameStyle(.37);
                let r = n.root.width * n.root.scaleX,
                    c = (n.root.height, n.root.scaleY, (e.width - 7 * r) / 6),
                    l = -e.width * e.anchorX + r * n.root.anchorX + (r + c) * t,
                    s = 0;
                n.node.setPosition(cc.v2(l, s)), n.hideBg(), this._JackPotNumberList.push(n)
            }
            this.onClickSelected(2), o.StringTools.setShrinkString(this.jackPotInfo_text.node, o.config.getStringData("GameJackPot_jackPotSign_panel_Panel_5_jackPotInfo_text")), o.resMgr.loadSpriteTextureByPlist(this._atlas_hb_language, this.title_img.getComponent(cc.Sprite), "humanboy_jackpot_title"), this.signbg.getChildByName("Label").getComponent(cc.Label).string = o.config.getStringData("GameJackPot_button_panel_jackpotRecord_button"), this.rulebg.getChildByName("Label").getComponent(cc.Label).string = o.config.getStringData("GameJackPot_button_panel_jackpotRule_button"), this.awardType_txt.getComponent(cc.Label).string = o.config.getStringData("GameJackPot_jackPot_panel_awardType_txt"), this.awardPercent_txt.getComponent(cc.Label).string = o.config.getStringData("GameJackPot_jackPot_panel_awardPercent_txt"), this.royalFlush_txt.getComponent(cc.Label).string = o.config.getStringData("M_UITitle122"), this.straight_flush.getComponent(cc.Label).string = o.config.getStringData("M_UITitle121"), this.four_txt.getComponent(cc.Label).string = o.config.getStringData("Humanboy_game_card_type_four_of_a_kind"), this.jackpotBtn.node.on("click", (function() {
                o.AudioMgr.playButtonSound("tab"), this.onClickSelected(1)
            }), this), this.signBtn.node.on("click", (function() {
                o.AudioMgr.playButtonSound("tab"), this.onClickSelected(2)
            }), this), this.ruleBtn.node.on("click", (function() {
                o.AudioMgr.playButtonSound("tab"), this.onClickSelected(3)
            }), this), this.circle_0.getComponent(cc.ProgressBar).progress = .5, this.circle_1.getComponent(cc.ProgressBar).progress = .2, this.circle_2.getComponent(cc.ProgressBar).progress = .1, c.getInstance().requestJackpotData(r.getHumanboyRoom().tCurRoom.deskType), this.addRegister()
        }
        addRegister() {
            o.MessageCenter.register("on_humanboy_jackpot_notify", this.onJackpot.bind(this), this.node), o.MessageCenter.register("on_humanboy_record_notify", this.onRecord.bind(this), this.node)
        }
        removeRegister() {
            o.MessageCenter.unregister("on_humanboy_jackpot_notify", this.node), o.MessageCenter.unregister("on_humanboy_record_notify", this.node)
        }
        onDestroy() {
            this.removeRegister()
        }
        _onClickEnd() {
            this.img_shield.node.off(cc.Node.EventType.TOUCH_END, this._onClickEnd, this), this.hide(!0)
        }
        onJackpot() {
            this.updateJackpotNum()
        }
        onRecord() {
            r.getHumanboyRoom().lastAwardData.length;
            let t = r.getHumanboyRoom().lastAwardData.length;
            this.scrollView.getComponent(cc.ScrollView).content.destroyAllChildren(), this.scrollView.getComponent(cc.ScrollView).content.removeAllChildren(!0), 85 * t >= this.scrollView.content.height && (this.scrollView.content.height = 745);
            for (let e = 0; e < t; e++) {
                let t = cc.instantiate(this.item);
                0 == e ? (t.getComponent("HumanboyJackpotItem").setFirstData(r.getHumanboyRoom().lastAwardData[0]), t.setPosition(cc.v2(0, -35))) : (t.getComponent("HumanboyJackpotItem").setData(r.getHumanboyRoom().lastAwardData[e]), t.setPosition(cc.v2(0, 55 * -(e + 1)))), this.scrollView.content.addChild(t)
            }
            if (o.StringTools.setShrinkString(this.bigWinnerName_text.node, r.getHumanboyRoom().luckyOne.name), r.getHumanboyRoom().luckyOne.handLevel >= 8 && r.getHumanboyRoom().luckyOne.handLevel <= 10 && o.StringTools.setShrinkString(this.bigWinnerCard_type_text.node, o.config.getStringData(o.StringTools.formatC("M_UITitle%d", 112 + r.getHumanboyRoom().luckyOne.handLevel))), r.getHumanboyRoom().lastAwardData.length > 0) {
                let t = o.StringTools.numberToString(o.StringTools.clientGoldByServer(r.getHumanboyRoom().luckyOne.amount));
                o.StringTools.setShrinkString(this.jackPotInfo_text.node, o.StringTools.formatC(o.config.getStringData("UIGameJackpotPlayerAward"), r.getHumanboyRoom().luckyOne.name, t), !1)
            }
        }
        updateJackpotNum() {
            this.circle_0.getComponent(cc.ProgressBar).progress = r.getHumanboyRoom().jackpotData.huangTongPer / 100, this.circle_1.getComponent(cc.ProgressBar).progress = r.getHumanboyRoom().jackpotData.tongHuaShunPer / 100, this.circle_2.getComponent(cc.ProgressBar).progress = r.getHumanboyRoom().jackpotData.siTiaoPer / 100, this.handLevel_0_text.getComponent(cc.Label).string = r.getHumanboyRoom().jackpotData.huangTongPer + "%", this.handLevel_1_text.getComponent(cc.Label).string = r.getHumanboyRoom().jackpotData.tongHuaShunPer + "%", this.handLevel_2_text.getComponent(cc.Label).string = r.getHumanboyRoom().jackpotData.siTiaoPer + "%";
            let t = r.getHumanboyRoom().llJackpotLeftMoney,
                e = Math.round(o.StringTools.serverGoldToShowNumber(t)),
                i = o.StringTools.formatC("%s", e),
                n = i.length,
                a = this._JackPotNumberList.length;
            for (let t = 0; t < a; ++t) t < n ? (this._JackPotNumberList[a - t - 1].showNum(Number(i[n - t - 1]), .1), i.substr(1, 2)) : this._JackPotNumberList[a - t - 1].showNum(0, .1)
        }
        setShieldLayerEnabled(t) {
            this.img_shield.getComponent(cc.BlockInputEvents).enabled = t, this.node.active = t
        }
        onClickSelected(t) {
            if (t == this._OptSelected) return;
            this._OptSelected = t;
            let e = this._OptSelected;
            this.setViewType(e)
        }
        setViewType(t) {
            this._viewType = t, this.updateView()
        }
        getViewType() {
            return this._viewType
        }
        updateView() {
            switch (this._viewType) {
                case xt.JACKPOT_TYPE_JACKPOT:
                    o.resMgr.loadSpriteTextureByPlist(this.humanboy_PLIST, this.pageimg.getComponent(cc.Sprite), "humanboy_jackpot_opt1"), this.jackpot_panel.active = !0, this.sign_panel.active = !1, this.rule_panel.active = !1, cc.find("Label", this.signbg).getComponent(cc.Label).node.color = cc.Color.WHITE, cc.find("Label", this.jackpotbg).getComponent(cc.Label).node.color = new cc.Color(45, 43, 63), cc.find("Label", this.rulebg).getComponent(cc.Label).node.color = cc.Color.WHITE, c.getInstance().requestJackpotData(r.getHumanboyRoom().tCurRoom.deskType);
                    break;
                case xt.JACKPOT_TYPE_RECORD:
                    o.resMgr.loadSpriteTextureByPlist(this.humanboy_PLIST, this.pageimg.getComponent(cc.Sprite), "humanboy_jackpot_opt2"), this.jackpot_panel.active = !1, this.sign_panel.active = !0, this.rule_panel.active = !1, this.scrollView.scrollToOffset(cc.v2(0, 0)), cc.find("Label", this.jackpotbg).getComponent(cc.Label).node.color = cc.Color.WHITE, cc.find("Label", this.signbg).getComponent(cc.Label).node.color = new cc.Color(45, 43, 63), cc.find("Label", this.rulebg).getComponent(cc.Label).node.color = cc.Color.WHITE;
                    break;
                case xt.JACKPOT_TYPE_RULE:
                    o.resMgr.loadSpriteTextureByPlist(this.humanboy_PLIST, this.pageimg.getComponent(cc.Sprite), "humanboy_jackpot_opt3"), this.jackpot_panel.active = !1, this.sign_panel.active = !1, this.rule_panel.active = !0, cc.find("Label", this.jackpotbg).getComponent(cc.Label).node.color = cc.Color.WHITE, cc.find("Label", this.rulebg).getComponent(cc.Label).node.color = new cc.Color(45, 43, 63), cc.find("Label", this.signbg).getComponent(cc.Label).node.color = cc.Color.WHITE, cc.find("Label", this.rulebg).getComponent(cc.Label).node.opacity = 255
            }
        }
        show(t) {
            this._autoAnimFunc(!0, t)
        }
        hide(t) {
            this._autoAnimFunc(!1, t)
        }
        _autoAnimFunc(t, e) {
            this.node.active = !0, this.img_bg.node.active = !0, this.img_bg.node.stopAllActions();
            let i = null,
                n = l.g_fullScreenOffset.x;
            if (t) {
                let t = cc.v2(cc.winSize.width / 2 + this.img_bg.node.width, cc.winSize.height / 2),
                    a = cc.v2(cc.winSize.width / 2 - n, cc.winSize.height / 2);
                this.img_bg.node.setPosition(t);
                let c = cc.callFunc((() => {
                    this.img_bg.node.setPosition(a), this.img_shield.getComponent(cc.BlockInputEvents).enabled = !1, this.img_shield.node.on(cc.Node.EventType.TOUCH_END, this._onClickEnd, this), o.humanboyNet.requestRecordData(r.getHumanboyRoom().tCurRoom.deskType)
                }));
                if (e) {
                    let t = cc.moveTo(.3, a).easing(cc.easeBackOut());
                    i = cc.sequence(t, c)
                } else i = c
            } else {
                let t = cc.v2(cc.winSize.width / 2 - n, cc.winSize.height / 2),
                    o = cc.v2(cc.winSize.width / 2 + this.img_bg.node.width, cc.winSize.height / 2);
                this.img_bg.node.setPosition(t);
                let r = cc.callFunc((() => {
                    this.img_bg.node.setPosition(o), this.img_shield.getComponent(cc.BlockInputEvents).enabled = !1, this.node.active = !1
                }));
                if (e) {
                    let t = cc.moveTo(.3, o).easing(cc.easeBackIn());
                    i = cc.sequence(t, r)
                } else i = r
            }
            i && (this.img_bg.node.runAction(i), this.img_shield.getComponent(cc.BlockInputEvents).enabled = !0)
        }
        start() {}
    }).eHumanboyJackpotListViewType = xt, U = i((G = zt).prototype, "pageimg", [s], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = i(G.prototype, "img_bg", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = i(G.prototype, "jackpotBtn", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = i(G.prototype, "signBtn", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = i(G.prototype, "ruleBtn", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = i(G.prototype, "jackpotbg", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), tt = i(G.prototype, "signbg", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), et = i(G.prototype, "rulebg", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), it = i(G.prototype, "awardType_txt", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), nt = i(G.prototype, "awardPercent_txt", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ot = i(G.prototype, "royalFlush_txt", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), rt = i(G.prototype, "straight_flush", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), at = i(G.prototype, "four_txt", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ct = i(G.prototype, "bg_img", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), lt = i(G.prototype, "title_img", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), st = i(G.prototype, "jackpot_panel", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ut = i(G.prototype, "sign_panel", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), gt = i(G.prototype, "rule_panel", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ht = i(G.prototype, "_layout2", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), bt = i(G.prototype, "jackNumber", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pt = i(G.prototype, "jackPotInfo_text", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), mt = i(G.prototype, "bigWinnerName_text", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _t = i(G.prototype, "bigWinnerCard_type_text", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), dt = i(G.prototype, "bigWinnerTime_text", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ft = i(G.prototype, "bigWinnerNumber_text", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), yt = i(G.prototype, "humanboy_PLIST", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), wt = i(G.prototype, "img_shield", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), kt = i(G.prototype, "web", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ct = i(G.prototype, "circle_0", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Tt = i(G.prototype, "circle_1", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Pt = i(G.prototype, "circle_2", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), St = i(G.prototype, "handLevel_0_text", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Lt = i(G.prototype, "handLevel_1_text", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), vt = i(G.prototype, "handLevel_2_text", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Nt = i(G.prototype, "scrollView", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Et = i(G.prototype, "item", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Rt = i(G.prototype, "num_PLIST", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = G)) || F));
    n._RF.pop()
}