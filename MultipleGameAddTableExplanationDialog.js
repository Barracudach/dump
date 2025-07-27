import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as p from "./MultipleGame.js";
import * as d from "./MultipleRoomManager.js";

function main() {
    var h, f, g, m, y, L, k, B, M, w, R, T;
    l._RF.push({}, "d8dfeg7Q6VGtrrAOQ3NxTO+", "MultipleGameAddTableExplanationDialog", void 0);
    const {
        ccclass: v,
        property: z
    } = r;
    e("default", (h = z(n), f = z(n), g = z(a), m = z(o), y = z(a), v((B = t((k = class extends c {
        constructor(...e) {
            super(...e), i(this, "titleLabel", B, this), i(this, "captionLabel", M, this), i(this, "background", w, this), i(this, "addTableBtn", R, this), i(this, "blocker", T, this)
        }
        onLoad() {
            this.titleLabel.isBold = !0, this.captionLabel.isBold = !0
        }
        update() {
            this.addTableBtn.interactable = d.instance.listRoom.length < 3
        }
        onClickAddTableButton() {
            p.instance.showHall(d.instance.listRoom.length), this.close()
        }
        close() {
            this.blocker.active = !0, u(this.background).to(.2, {
                scale: s(b.ZERO)
            }).call((() => {
                this.node.destroy()
            })).start()
        }
    }).prototype, "titleLabel", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = t(k.prototype, "captionLabel", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = t(k.prototype, "background", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = t(k.prototype, "addTableBtn", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = t(k.prototype, "blocker", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = k)) || L));
    l._RF.pop()
}