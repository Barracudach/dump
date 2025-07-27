import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";

function main() {
    var p, h, c, m, d, b;
    r._RF.push({}, "17221EbkF9AiLqWW04A2UxB", "Visitor", void 0);
    const {
        ccclass: f,
        property: g
    } = o;
    e("default", (p = g(s), h = g(a), f((d = t((m = class extends l {
        constructor(...e) {
            super(...e), i(this, "sprite", d, this), this._defaultPhoto = null, i(this, "nameLabel", b, this), this._url = void 0
        }
        onDestroy() {
            this.releaseImage()
        }
        onLoad() {
            this._defaultPhoto = this.sprite.spriteFrame
        }
        loadDefaultPhoto() {
            this.sprite.spriteFrame = this._defaultPhoto
        }
        releaseImage() {
            n(this.sprite) && this.sprite.webImageUrl && cc_mtt.vv.AssetsManager.releaseWebImage(this.sprite.webImageUrl)
        }
        load(e) {
            this.loadDefaultPhoto(), this._url = e, cc_mtt.vv.AssetsManager.loadWebImage(this.sprite, e, this._defaultPhoto, (e => {
                this.sprite.spriteFrame = new u, this.sprite.spriteFrame.texture = e
            }))
        }
        setupVisitor(e, t) {
            this.nameLabel.string = e, this.load(t)
        }
    }).prototype, "sprite", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = t(m.prototype, "nameLabel", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), c = m)) || c));
    r._RF.pop()
}