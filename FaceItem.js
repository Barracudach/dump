import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as c from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as s from "./cc.js";
import * as o from "./cv.js";
import * as r from "./GameSceneInstance.js";

function main() {
    var l, m, d, u;
    i._RF.push({}, "52fb6JE3s9DUYEceMQXc9nz", "FaceItem", void 0);
    const {
        ccclass: g,
        property: f
    } = s;
    e("FaceItem", (l = r("GameDataInstance"), g((u = t((d = class extends a {
        constructor(...e) {
            super(...e), this._index = 0, this.canClick = !0, n(this, "gameDataInstance", u, this)
        }
        onLoad() {
            o.MessageCenter.register("FaceItem_canSendFace", this.setClick.bind(this), this.node)
        }
        onDestroy() {
            o.MessageCenter.unregister("FaceItem_canSendFace", this.node)
        }
        setGoldImageActive(e) {
            c("Image_3", this.node).active = e
        }
        setNumberNodeActive(e, t) {
            e.active = t
        }
        setNodePositionY(e, t) {
            e.setPosition(e.position.x, t, e.position.z)
        }
        getEffectImgNode() {
            return c("effect_img", this.node)
        }
        setData(e) {
            this._index = e;
            const t = this.getEffectImgNode();
            o.resMgr.setSpriteFrame(t, "zh_CN/game/dzpoker/animation/icon/item_" + e)
        }
        setClick(e) {
            this.canClick = e
        }
        onBtnItemClick() {
            this.canClick && o.MessageCenter.send("effet_call", {
                msg: this._index,
                gameData: this.gameDataInstance
            })
        }
    }).prototype, "gameDataInstance", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = d)) || m));
    i._RF.pop()
}