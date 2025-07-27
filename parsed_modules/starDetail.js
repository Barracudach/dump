import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as _ from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as f from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as p from "./cv.js";

function main() {
    var d, b, C, m, I;
    s._RF.push({}, "18c23CqR3VGUojNWO9BXw2B", "starDetail", void 0);
    const {
        ccclass: D,
        property: R
    } = i;
    t("default", (d = R(r), D(((I = class t extends a {
        constructor(...t) {
            super(...t), this.msg = null, this.cur_s = 0, this.enterCallFunc = null, n(this, "btnGameTxt", m, this), this._touchTag = 0, this._starInfos = null
        }
        static getSinglePrefabInst(e) {
            let n = o.getScene();
            return t._g_prefabInst || (t._g_prefabInst = l(e)), n.getChildByUuid(t._g_prefabInst.uuid) || (h(t._g_prefabInst, !0) || (t._g_prefabInst = l(e)), n.addChild(t._g_prefabInst), t._g_prefabInst.setSiblingIndex(p.Enum.ZORDER_TYPE.ZORDER_TOP)), t._g_prefabInst
        }
        onLoad() {
            this.onChangeLanguage(), p.MessageCenter.register(p.config.CHANGE_LANGUAGE, this.onChangeLanguage.bind(this), this.node), p.MessageCenter.register("onStarDetailInfoResponse", this.onstarDetailResponse.bind(this), this.node)
        }
        start() {}
        onChangeLanguage() {
            this.btnGameTxt.string = p.config.getStringData("jackfruit_joinGame_label")
        }
        onDestroy() {
            p.MessageCenter.unregister("onStarDetailInfoResponse", this.node), p.MessageCenter.unregister(p.config.CHANGE_LANGUAGE, this.node)
        }
        onstarDetailResponse(t) {
            this.node.active = !0, this.msg = t;
            let e = this.msg.firstId;
            this._starInfos = this.msg.starInfo, this.cur_s = 0;
            for (let t = 0; t < this._starInfos.length; t++)
                if (e == this._starInfos[t].uid) {
                    this.cur_s = t;
                    break
                } 2 == this._touchTag && 0 == this.cur_s && (this._starInfos.reverse(), this.cur_s = 1);
            let n = this._starInfos[this.cur_s];
            this.refreshStarDeatail(n)
        }
        setData(t, e = 1) {
            this.enterCallFunc = t, this._touchTag = e
        }
        refreshStarDeatail(t) {
            let e = t.profilePic;
            if (null == e) return;
            let n = p.dataHandler.getUserData().getNewImageURL(e),
                s = g("content/detailPic", this.node).getComponent(c);
            s.spriteFrame = null, u.load(n, ((t, e) => {
                if (t) return void console.log(t.message || t);
                if (!s.node || !h(s.node, !0)) return;
                let n = new _;
                n.texture = e, s.spriteFrame = n
            }));
            let r = g("content/btnLeft", this.node),
                i = g("content/btnRight", this.node),
                a = "zh_CN/hall/lobby/arrow_bright",
                o = "zh_CN/hall/lobby/arrow_dark";
            1 == this._starInfos.length ? (r.getComponent(f).interactable = !1, i.getComponent(f).interactable = !1) : 0 == this.cur_s ? (r.getComponent(f).interactable = !1, i.getComponent(f).interactable = !0) : 1 == this.cur_s && (r.getComponent(f).interactable = !0, i.getComponent(f).interactable = !1);
            let l = 1 == r.getComponent(f).interactable ? a : o,
                d = 1 == i.getComponent(f).interactable ? a : o;
            p.resMgr.setSpriteFrame(r.getChildByName("sprite"), l), p.resMgr.setSpriteFrame(i.getChildByName("sprite"), d)
        }
        onBtnClickJoinRoom(t) {
            this.node.active = !1, this.enterCallFunc && this.enterCallFunc(null)
        }
        onClose(t) {
            this.node.active = !1
        }
        onBtnClickLeft() {
            if (this._starInfos.length <= 1) return;
            this.cur_s = 0;
            let t = this._starInfos[this.cur_s];
            t && this.refreshStarDeatail(t)
        }
        onBtnClickRight() {
            if (this._starInfos.length <= 1) return;
            this.cur_s = 1;
            let t = this._starInfos[this.cur_s];
            t && this.refreshStarDeatail(t)
        }
    })._g_prefabInst = null, m = e((C = I).prototype, "btnGameTxt", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = C)) || b));
    s._RF.pop()
}