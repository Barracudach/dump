import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as l from "./cc.js";
import * as u from "./mttconfig.js";
import * as h from "./mttconfig.js";
import * as p from "./NodePage.js";
import * as f from "./Pb.js";
import * as I from "./Translator.js";
import * as T from "./EventCustom.js";

function main() {
    var b, g, d, m, P, E, _, O, S, v, B, y;
    n._RF.push({}, "33f620+ckdHT4W6aWRaPhVc", "GiftPlayerTuple", void 0);
    const {
        ccclass: L,
        property: G
    } = r;
    t("GiftPlayerTuple", (b = G(i), g = G(s), d = G(s), m = G(l), P = G([c]), L((O = o((_ = class extends a {
        constructor(...t) {
            super(...t), e(this, "toolIcon", O, this), e(this, "toolName", S, this), e(this, "toolSpec", v, this), e(this, "selectionButton", B, this), e(this, "buttonIcons", y, this), this.defaultIcon = null, this._tupleId = 0, this._toolId = 0, this._toolUrl = ""
        }
        onLoad() {
            this.defaultIcon = this.toolIcon.spriteFrame.clone()
        }
        start() {}
        controlButtonIcon(t) {
            this.buttonIcons[0].active = !(this.buttonIcons[1].active = t)
        }
        showToolSpec(t) {
            switch (t.Type) {
                case f.commonProto.TOOL_TYPE.ticket:
                    this.toolSpec.string = I("BAG.TOOL_TYPE.TICKET");
                    break;
                case f.commonProto.TOOL_TYPE.redPocket:
                    this.toolSpec.string = I("BAG.TOOL_TYPE.RED_POCKET");
                    break;
                case f.commonProto.TOOL_TYPE.gift:
                    this.toolSpec.string = I("BAG.TOOL_TYPE.GIFT");
                    break;
                case f.commonProto.TOOL_TYPE.coupon:
                    this.toolSpec.string = I("BAG.TOOL_TYPE.COUPON");
                    break;
                default:
                    this.toolSpec.string = ""
            }
            t.SellRatio > 0 ? this.toolSpec.string += (this.toolSpec.string.length > 0 ? "/" : "") + I("BAG.REDEEM_TYPE.TRUE") : this.toolSpec.string += (this.toolSpec.string.length > 0 ? "/" : "") + I("BAG.REDEEM_TYPE.FALSE")
        }
        setInfo(t, o, e) {
            if (this._tupleId = o, this._toolId = t.Id, this.controlButtonIcon(e.indexOf(t.Id) >= 0), t.IconUrl && t.IconUrl.length > 1) {
                this._toolUrl = u.avatarHost + t.IconUrl, cc_mtt.vv.AssetsManager.loadWebImage(this.toolIcon, this._toolUrl) || (this.toolIcon.spriteFrame = this.defaultIcon)
            } else this.toolIcon.spriteFrame = this.defaultIcon;
            this.toolName.string = t.Name, this.showToolSpec(t)
        }
        onSelectionClicked() {
            p.coolDownButton(this.selectionButton, this), this.controlButtonIcon(!this.buttonIcons[1].active);
            let t = new T(h.selectGiftToolsEvent, !0);
            t.setUserData(this.buttonIcons[0].active ? -this._toolId : this._toolId), this.node.dispatchEvent(t)
        }
    }).prototype, "toolIcon", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = o(_.prototype, "toolName", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = o(_.prototype, "toolSpec", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = o(_.prototype, "selectionButton", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = o(_.prototype, "buttonIcons", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), E = _)) || E));
    n._RF.pop()
}