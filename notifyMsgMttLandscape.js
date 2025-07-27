import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./NotifyMsg.js";
import * as c from "./ColorSystemType.js";
import * as l from "./LobbyTools.js";
import * as d from "./cv.js";

function main() {
    var p, g, u, m, y;
    s._RF.push({}, "e714f/jMChMqYyudGygCP7y", "notifyMsgMttLandscape", void 0);
    const {
        ccclass: f,
        property: S
    } = n;
    t("notifyMsgMttLandscape", (p = f("notifyMsgMttLandscape"), g = S({
        type: o
    }), p((y = e((m = class extends a {
        constructor(...t) {
            super(...t), i(this, "descriptionText", y, this), this.descriptionTextLabel = void 0, this.originalPos = void 0
        }
        onLoad() {
            super.onLoad(), this.descriptionTextLabel = this.descriptionText.getComponent(r), this.originalPos = this.node.getPosition()
        }
        start() {
            this.hideImmediately()
        }
        hideImmediately() {
            this.node.active = !1
        }
        hide() {
            l.moveOut_Left(this.node, this.node, (() => {
                this.node.active = !1
            }))
        }
        getReadingTime() {
            return 2 * d.StringTools.readingTime(this.descriptionTextLabel.string)
        }
        showWithDescription(t, e, i) {
            this.node.active = !0, this.hintTextLabel.string = t, this.descriptionTextLabel.string = e, i ? (this.hintIconTS.setColorScheme(c.Other, this.invalidColorScheme), this.progressBarTS.setColorScheme(c.Other, this.invalidColorScheme), this.hintIconSprite.spriteFrame = this.iconInvalid, this.bgSprite.spriteFrame = this.bgInvalid) : (this.hintIconTS.setColorScheme(c.Other, this.validColorScheme), this.progressBarTS.setColorScheme(c.Other, this.validColorScheme), this.hintIconSprite.spriteFrame = this.iconValid, this.bgSprite.spriteFrame = this.bgValid), this.startProgressBar(), this.node.getComponent(h).opacity = 0, this.scheduleOnce((() => {
                l.moveIn_Left(this.node, this.node, this.originalPos)
            }), .1)
        }
    }).prototype, "descriptionText", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
    }), u = m)) || u));
    s._RF.pop()
}