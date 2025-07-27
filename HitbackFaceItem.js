import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as p from "./cv.js";
import * as l from "./GameSceneInstance.js";

function main() {
    var d, f, h, u;
    n._RF.push({}, "7ce3d6SVaVII7rCICE+vIpL", "HitbackFaceItem", void 0);
    const {
        ccclass: _,
        property: C
    } = a;
    e("HitbackFaceItem", (d = l("GameDataInstance"), _((u = t((h = class extends r {
        constructor(...e) {
            super(...e), this._index = 0, this._type = 0, this.canClick = !0, i(this, "gameDataInstance", u, this)
        }
        onEnable() {
            this.node.getComponent(o).opacity = 0
        }
        setData(e, t, i) {
            this.node.getComponent(o).opacity = 255, this._index = e, this._type = i;
            let n = s("number_text", this.node),
                a = s("free_text", this.node),
                r = s("Image_3", this.node),
                l = s("effect_img", this.node);
            0 == i ? a.getComponent(c).string = p.config.getStringData("Star_free_hitback") : 1 == i && (a.getComponent(c).string = p.config.getStringData("Star_free_welcome")), t <= 0 ? (r.active = !1, n.active = !1, a.active = !0) : (n.getComponent(c).string = this.gameDataInstance.tRoomData.getDataPointValue(p.StringTools.clientGoldByServer(t)), n.active = !0, r.active = !1, a.active = !1);
            let d = null;
            if (e < 6) p.resMgr.load("zh_CN/game/dzpoker/animation/icon/effect", m, (t => {
                d = t.getSpriteFrame(p.StringTools.formatC("animation-icon-icon%d", e)), l.getComponent(g).spriteFrame = d
            }), p.resMgr.CleanResLevel.LEVEL_SCENE);
            else {
                if (6 == e) return void p.resMgr.setSpriteFrame(l, "zh_CN/game/dzpoker/animation/icon/calmDown");
                if (e < 12) p.resMgr.load("zh_CN/game/dzpoker/animation/icon/effect", m, (t => {
                    d = t.getSpriteFrame(p.StringTools.formatC("animation-icon-icon%d", e - 1)), l.getComponent(g).spriteFrame = d
                }), p.resMgr.CleanResLevel.LEVEL_SCENE);
                else {
                    if (12 == e) return void p.resMgr.setSpriteFrame(l, "zh_CN/game/dzpoker/animation/icon/fist");
                    if (13 == e) return void p.resMgr.setSpriteFrame(l, "zh_CN/game/dzpoker/animation/icon/zhuaji");
                    if (14 == e) return void p.resMgr.setSpriteFrame(l, "zh_CN/game/dzpoker/animation/icon/flower");
                    if (15 == e) return void p.resMgr.setSpriteFrame(l, "zh_CN/game/dzpoker/animation/icon/money");
                    if (16 == e) return void p.resMgr.setSpriteFrame(l, "zh_CN/game/dzpoker/animation/icon/towel");
                    if (17 == e) return void p.resMgr.setSpriteFrame(l, "zh_CN/game/dzpoker/animation/icon/fan")
                }
            }
        }
        onBtnItemClick() {
            this.canClick && (p.MessageCenter.send("closehitback", this.gameDataInstance), p.MessageCenter.send("effect_hit_call", {
                index: this._index,
                type: this._type,
                gameData: this.gameDataInstance
            }))
        }
    }).prototype, "gameDataInstance", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = h)) || f));
    n._RF.pop()
}