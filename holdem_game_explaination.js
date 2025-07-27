import * as e from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as d from "./AndroidBackButton.js";
import * as l from "./Holdem_Basic_Item.js";

function main() {
    var h;
    e._RF.push({}, "2243a5ZbG5MXaL7b0AbxcXw", "holdem_game_explaination", void 0);
    const {
        ccclass: r,
        property: u
    } = c;
    t("default", r(h = class extends l {
        constructor(...t) {
            super(...t), this.showPosition = new o(o.ZERO), this.hidePosition = new o(o.ZERO)
        }
        onLoad() {
            this.hidePosition = new o(-this.node.getComponent(n).width, 0)
        }
        start() {}
        updateShortDeskPos() {}
        updateGameRule(t) {
            t && this.updateShortDeskPos()
        }
        updateCurrentPage() {}
        onClickTournament() {
            this.onClose(), this.holdemRoom.onClickTournament()
        }
        onClickHistory() {
            this.onClose(), this.holdemRoom.onClickHistory()
        }
        selectPokerHandRankingsTipsPage() {}
        selectGameBasicRulesPage() {}
        onClose() {
            i(this.node).to(.1, {
                position: this.hidePosition
            }).call((() => {
                this.node.destroy(), s.isNative && s.os === s.OS.ANDROID && d.getInstance().removeBackFunction("holdem_game_explaination")
            })).start()
        }
        show() {
            let t = this.node.getComponent(a);
            t.left = -1, t.right = 1, t.updateAlignment(), i(this.node).to(.1, {
                position: this.showPosition
            }).call((() => {
                t.left = t.right = 0, t.updateAlignment(), s.isNative && s.os === s.OS.ANDROID && d.getInstance().addBackFunction("holdem_game_explaination", this.onClose.bind(this))
            })).start()
        }
    }) || h);
    e._RF.pop()
}