import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as r from "./cv.js";
import * as s from "./GameSceneInstance.js";

function main() {
    var o, a, l, u, c, h, g, _, m, b, d, f, p, v, R, w, y, S, k, C, P;
    n._RF.push({}, "60300docs5AMa+7gvg1dxVP", "JackfruitRule", void 0);
    const {
        ccclass: z,
        property: N
    } = cc._decorator;
    e("default", (o = N(cc.Node), a = N(cc.Sprite), l = N(cc.Node), u = N(cc.Node), c = N(cc.Label), h = N(cc.Sprite), g = N(cc.Node), _ = N(cc.Node), m = N(cc.Label), z(((P = class e extends cc.Component {
        constructor(...e) {
            super(...e), t(this, "rule_list", f, this), t(this, "title_img", p, this), t(this, "joinGame_btn", v, this), t(this, "neverRemind_btn", R, this), t(this, "neverRemind_label", w, this), t(this, "neverRemind_img", y, this), t(this, "next_btn", S, this), t(this, "last_btn", k, this), t(this, "number_label", C, this), this.needPassword = !1, this.msg = null, this.isNextClose = !1, this.isInit = !1, this.isShow = !1, this._view_number = 0
        }
        static getSinglePrefabInst(t, i) {
            return e._g_prefabInst || (e._g_prefabInst = cc.instantiate(t)), i.getChildByUuid(e._g_prefabInst.uuid) || (cc.isValid(e._g_prefabInst, !0) || (e._g_prefabInst = cc.instantiate(t)), i.addChild(e._g_prefabInst, r.Enum.ZORDER_TYPE.ZORDER_TOP)), e._g_prefabInst
        }
        onLoad() {
            r.MessageCenter.register(r.config.CHANGE_LANGUAGE, this.initLanguage.bind(this), this.node), this.initLanguage(), this._initButtonClick()
        }
        start() {
            this.isInit = !0, this.isShow && this.show()
        }
        onDestroy() {
            r.MessageCenter.unregister(r.config.CHANGE_LANGUAGE, this.node)
        }
        _initButtonClick() {
            this.joinGame_btn.on("click", (e => {
                r.AudioMgr.playButtonSound("button_click.mp3"), this.onJoinRoom()
            }), this), this.neverRemind_btn.on("click", (e => {
                r.AudioMgr.playButtonSound("button_click.mp3"), this.isNextClose = !this.isNextClose, this.isNextClose ? (r.tools.SaveStringByCCFile("hideJackfruitRule", "1"), r.resMgr.setSpriteFrame(this.neverRemind_img.node, "zh_CN/game/jackfruit/rule/checkbox_off")) : (r.tools.RemoveStringByCCFile("hideJackfruitRule"), r.resMgr.setSpriteFrame(this.neverRemind_img.node, "zh_CN/game/jackfruit/rule/checkbox_on"))
            }), this)
        }
        initLanguage() {
            cc.find("joinGame_label", this.joinGame_btn).getComponent(cc.Label).string = r.config.getStringData("jackfruit_joinGame_label"), r.resMgr.setSpriteFrame(this.title_img.node, r.config.getLanguagePath("game/jackfruit/rule/tule_title_text"));
            for (let e = 0; e < this.rule_list.length; e++) {
                let t = this.rule_list[e];
                r.resMgr.setSpriteFrame(cc.find("rule_img", t), r.config.getLanguagePath("game/jackfruit/rule/rule_" + e))
            }
            r.resMgr.setSpriteFrame(this.next_btn, r.config.getLanguagePath("game/jackfruit/rule/next_button")), r.resMgr.setSpriteFrame(this.last_btn, r.config.getLanguagePath("game/jackfruit/rule/last_button")), this.neverRemind_label.string = r.config.getStringData("jackfruit_rule_neverRemind_label");
            let e = r.resMgr.getLabelStringSize(this.neverRemind_label),
                t = this.neverRemind_img.node.getContentSize();
            this.neverRemind_btn.setContentSize(cc.size(e.width + 22 + t.width, this.neverRemind_btn.getContentSize().height)), this.neverRemind_label.node.setPosition(cc.v2(t.width / 2 + 11, this.neverRemind_label.node.getPosition().y)), this.neverRemind_img.node.setPosition(cc.v2(-e.width / 2 - 11, this.neverRemind_img.node.getPosition().y))
        }
        setData(e) {
            this.msg = e
        }
        setNeedPassword(e) {
            this.needPassword = e
        }
        onJoinRoom() {
            this.isShow = !1, this.node.active = !1;
            const e = s.getInstanceGameData(null == this ? void 0 : this.node);
            e.tRoomData.entry_clubid = this.msg.club_id, e.tRoomData.u32GameID = this.msg.game_id, r.roomManager.RequestJoinRoom(this.msg.game_id, this.msg.room_id, !1, this.needPassword)
        }
        show() {
            this.isShow = !0, this.isInit && (this.node.active = !0, this.setViewByType(0))
        }
        onBtnNext(e, t) {
            r.AudioMgr.playButtonSound("button_click.mp3"), this.setViewByType(this._view_number + 1)
        }
        onBtnLast(e, t) {
            r.AudioMgr.playButtonSound("button_click.mp3"), this.setViewByType(this._view_number - 1)
        }
        setViewByType(e) {
            this._view_number = e;
            for (let t = 0; t < this.rule_list.length; t++) this.rule_list[t].active = t == e;
            this.next_btn.active = this._view_number < 2, this.last_btn.active = this._view_number > 0, this.number_label.string = e + 1 + "/3"
        }
    })._g_prefabInst = null, f = i((d = P).prototype, "rule_list", [o], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), p = i(d.prototype, "title_img", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = i(d.prototype, "joinGame_btn", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = i(d.prototype, "neverRemind_btn", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = i(d.prototype, "neverRemind_label", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = i(d.prototype, "neverRemind_img", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = i(d.prototype, "next_btn", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = i(d.prototype, "last_btn", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = i(d.prototype, "number_label", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = d)) || b));
    n._RF.pop()
}