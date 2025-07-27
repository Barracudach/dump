import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as _ from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as p from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as u from "./mttconfig.js";
import * as m from "./httpApis.js";
import * as b from "./ImpokerHall.js";

function main() {
    var f, I, A, C, v, k, w;
    i._RF.push({}, "d7e82C4j31IVYQbLq5ruMmf", "HallNotification", void 0);
    const {
        ccclass: H,
        property: P
    } = a;
    e("HallNotification", (f = P(o), I = P(s), H(((w = class e extends r {
        constructor(...e) {
            super(...e), n(this, "sprite", v, this), n(this, "hideCheckbox", k, this), this._banner = null, this._onShowAction = null, this._onCloseAction = null, this._onEnterRoomInfoAction = null, this._bannerInitPos = void 0, this._bannerHidePos = void 0
        }
        onLoad() {
            this._bannerInitPos = this.sprite.node.position, this._bannerHidePos = new l(0, this.node.getComponent(h).height)
        }
        init(e, t, n, i) {
            this._banner = e, this._onShowAction = t, this._onCloseAction = n, this._onEnterRoomInfoAction = i, this.setBanner()
        }
        show() {
            this._onShowAction && c(this.node) && this._onShowAction(this)
        }
        closeAnimation(e) {
            d(this.sprite.node).to(cc_mtt.vv.DataManager.pageActionSpeed, {
                position: this._bannerHidePos
            }, {
                easing: p.sineInOut
            }).call((() => {
                this.node.active = !1, this.sprite.node.setPosition(this._bannerInitPos), e instanceof Function && e()
            })).start()
        }
        setBanner() {
            cc_mtt.vv.ConsoleLog.log("setBanner", this._banner), this._banner && this.setSprite(u.avatarHost + this._banner.BannerPath)
        }
        setSprite(t) {
            e.loadedImageUrl || (e.loadedImageUrl = []), e.loadedImageUrl.push(t), cc_mtt.vv.AssetsManager.loadWebImage(this.sprite, t, null, (e => {
                b.instance && c(b.instance.node) && b.instance.hallLayer.active ? (this.sprite.spriteFrame = new _, this.sprite.spriteFrame.texture = e, this.show()) : cc_mtt.vv.ConsoleLog.log("HallNotification show error", null != b.instance, c(b.instance.node), b.instance.hallLayer.active)
            }))
        }
        onSpriteClicked() {
            if (this._banner)
                if (this._banner.ClickUrl) m.requestInvitationCode(this._banner.ClickUrl, (e => {
                    cc_mtt.vv.ConsoleLog.log("ImpokerHall", this._onEnterRoomInfoAction), this._onEnterRoomInfoAction && this._onEnterRoomInfoAction(e), this.onCloseClicked()
                }), (() => {}));
                else if (this._banner.ImagePath.length > 0) {
                let e = g.getScene().getComponentInChildren(b);
                e.callBannerDetailPage(e.hallLayer, this._banner.ImagePath)
            }
        }
        releaseAllImage() {
            for (; e.loadedImageUrl.length > 0;) cc_mtt.vv.AssetsManager.releaseWebImage(e.loadedImageUrl.pop());
            e.loadedImageUrl = []
        }
        onDestroy() {
            this.releaseAllImage()
        }
        reset() {
            this._banner = null, this._onShowAction = null, this._onCloseAction = null, this._onEnterRoomInfoAction = null
        }
        hideAction(e = !1) {
            this._onCloseAction && c(this.node) ? (this._onCloseAction(this, e), this.reset()) : (this.reset(), this.node.destroy())
        }
        onHideClicked() {
            this.hideAction()
        }
        onCloseClicked() {
            this.hideAction(this.hideCheckbox.isChecked)
        }
    }).loadedImageUrl = [], v = t((C = w).prototype, "sprite", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = t(C.prototype, "hideCheckbox", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = C)) || A));
    i._RF.pop()
}