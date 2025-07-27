import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./Emoticons_ts.js";
import * as a from "./ResourcesLoader.js";
import * as u from "./SlideView.js";
import * as d from "./GameEmoticonView.js";

function main() {
    var p, h, m, f, g, w, S, b;
    n._RF.push({}, "97ac94XC6hHmLK4Hux2gTBI", "GameEmoticons_ts", void 0);
    const {
        ccclass: E,
        property: _
    } = s;
    e("GameEmoticons", (p = _(u), h = _(o), E((g = i((f = class extends d {
        constructor(...e) {
            super(...e), t(this, "slideView", g, this), t(this, "showingSpeedInSecond", w, this), t(this, "hidingSpeedInSecond", S, this), this._gameEmoticonsStartPosition = null, this._gameEmoticonsStopPosition = null, this._off = null, t(this, "emoticonList", b, this)
        }
        onLoad() {}
        init() {
            super.init();
            let e = a.RES_PATH.PREFAB.HOLDEM.EMOTICONS;
            a.instance.loadRes(e, r, null, ((e, i) => {
                i.data.getComponentInChildren(Animation).getClips().forEach((e => {
                    let t = c(i),
                        n = t.getComponent(l);
                    t.parent = this.emoticonList, this.setEmoticon(n), n.setIcon(e.name)
                }))
            }))
        }
        show() {
            this.slideView.show()
        }
        onClose() {
            this._off && this._off(), this.slideView.hide()
        }
    }).prototype, "slideView", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = i(f.prototype, "showingSpeedInSecond", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return .1
        }
    }), S = i(f.prototype, "hidingSpeedInSecond", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return .1
        }
    }), b = i(f.prototype, "emoticonList", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = f)) || m));
    n._RF.pop()
}