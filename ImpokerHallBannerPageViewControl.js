import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as f from "./cc.js";
import * as m from "./cc.js";
import * as p from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as B from "./mttconfig.js";
import * as S from "./mttconfig.js";
import * as P from "./httpApis.js";
import * as w from "./ImpokerHall.js";
import * as _ from "./CommonTools.js";
import * as C from "./ImpokerHallBannerPage.js";

function main() {
    var I, V, v, b, k, L;
    i._RF.push({}, "e5091zB3GhE1YX+HY0zHiCm", "ImpokerHallBannerPageViewControl", void 0);
    const {
        ccclass: y,
        property: T
    } = o, A = e("BannerPosition", {
        HALL_TOP: 0,
        LOGIN_POPUP: 1
    });
    e("ImpokerHallBannerPageViewControl", (I = T(a), V = T(r), y((k = t((b = class extends s {
        constructor(...e) {
            super(...e), n(this, "pageView", k, this), n(this, "defaultBanner", L, this), this._current = 0, this.topBanners = [], this.bannerSpriteFrame = [], this.loaded = !1, this._hallScript = void 0, this._updateTimer = 0, this._scrollSpeed = .1, this._bannerLoaded = !1
        }
        onDestroy() {
            this.unscheduleAllCallbacks()
        }
        onLoad() {
            let e = this.pageView.content.children;
            for (let t = 0; t < e.length; t++) {
                e[t].getComponent(C).bannerId = t
            }
            this._hallScript = _.instance.getParentScene(l, this.node).getComponentInChildren(w)
        }
        start() {
            this.checkToLoadBanners(), this.pageView.scrollToPage(1, .01), this.addEvents()
        }
        addEvents() {
            this.pageView.content.on(h.EventType.POSITION_CHANGED, (() => {
                this._updateTimer = 0
            })), this.node.on(B.topBannerEvent, (e => {
                this.handleTopBannerEvent(e.getUserData()), e.propagationStopped = !0
            }))
        }
        update(e) {
            this._updateTimer += e, this._updateTimer > 5 && (this._updateTimer = 0, this.autoScrollBanner()), this.updateBannerPosition()
        }
        updateBannerPosition() {
            let e, t = this.pageView.content.children;
            switch (this.pageView.getCurrentPageIndex()) {
                case 0:
                    e = this.pageView.getPages()[t.length - 1], this.pageView.removePage(e), this.pageView.insertPage(e, 0), this.handleBannerId(e, -1), this.pageView.content.getComponent(p).updateLayout(), this.pageView._autoScrollStartPosition.x -= this.pageView.content.parent.getComponent(c).width, this.pageView._processAutoScrolling(0), this.pageView.setCurrentPageIndex(1);
                    break;
                case t.length - 1:
                    e = this.pageView.getPages()[0], this.pageView.removePage(e), this.pageView.addPage(e), this.handleBannerId(e, 1), this.pageView.content.getComponent(p).updateLayout(), this.pageView._autoScrollStartPosition.x += this.pageView.content.parent.getComponent(c).width, this.pageView._processAutoScrolling(0), this.pageView.setCurrentPageIndex(t.length - 2)
            }
        }
        autoScrollBanner() {
            this._hallScript.checkSidePagesDisable() && this.pageView.scrollToPage(2, this._scrollSpeed)
        }
        checkToLoadBanners() {
            const e = () => (this.getTopBanners() && (this._bannerLoaded = !0, this.getBannerSpriteFrame()), !this._bannerLoaded);
            e() && this.scheduleOnce(e, 3)
        }
        getTopBanners() {
            for (let e of cc_mtt.vv.DataManager.banners) e.Position && e.Position != A.HALL_TOP || this.topBanners.push(e);
            return this.topBanners.length > 0
        }
        getBannerSpriteFrame() {
            let e = [];
            for (let t of this.topBanners) e.push(this.loadBanner(t.BannerPath));
            Promise.all(e).then((e => {
                for (let t = 0; t < e.length; t++) e[t] || (e[t] = this.defaultBanner);
                this.bannerSpriteFrame = e, this.initBannerSpriteFrame()
            }))
        }
        initBannerSpriteFrame() {
            let e = this.pageView.content.children;
            for (let t = 0; t < this.pageView.getPages().length; t++) this.setBannerSpriteFrame(e[t], t);
            this.loaded = !0
        }
        loadBanner(e) {
            let t = S.avatarHost + e;
            return new Promise((n => {
                e.length <= 0 && n(null), g.loadRemote(t, ((e, i) => {
                    if (e && (cc_mtt.vv.ConsoleLog.log("loadBanner error!\nurl: " + t + "\n" + JSON.stringify(e)), n(null)), i instanceof d) {
                        let e = new r;
                        e.texture = i, n(e)
                    } else cc_mtt.vv.ConsoleLog.log("loadBanner error!\nurl: " + t + "\n" + JSON.stringify(e)), n(null)
                }))
            }))
        }
        isUrl(e) {
            return new RegExp("[.]").test(e)
        }
        checkBannerId(e) {
            let t = this.bannerSpriteFrame.length;
            if (t < 1) {
                return 0
            }
            for (; e < 0;) e += t;
            return e % t
        }
        handleBannerId(e, t) {
            if (this.loaded) {
                let n = e.getComponent(C).bannerId + 3 * t;
                this.setBannerSpriteFrame(e, n)
            }
        }
        setBannerSpriteFrame(e, t) {
            let n = e.getComponent(C),
                i = this.checkBannerId(t);
            n.bannerId = i, this.bannerSpriteFrame.length > 0 && (n.banner.getComponent(u).spriteFrame = this.bannerSpriteFrame[i])
        }
        _onEnterRoomInfoAction(e) {
            e && null != e.game_type && this._hallScript.openHall(e.game_type, e.room_id, e.game_mode, e.allIn)
        }
        handleTopBannerEvent(e) {
            let t = this.topBanners[e];
            if (t)
                if (t.ClickUrl)
                    if (this.isUrl(t.ClickUrl))
                        if (m.isNative) try {
                            m.os === m.OS.ANDROID ? f.reflection.callStaticMethod("com/cocos/game/AppActivity", "openBrowser", "(Ljava/lang/String;)V", t.ClickUrl) : m.os === m.OS.IOS && f.reflection.callStaticMethod("AppController", "openBrowser:", t.ClickUrl)
                        } catch (e) {
                            cc_mtt.vv.ConsoleLog.log(e.stack.split("\n"))
                        } else m.openURL(t.ClickUrl);
                        else P.requestInvitationCode(t.ClickUrl, (e => {
                            cc_mtt.vv.ConsoleLog.log("ImpokerHall", this._onEnterRoomInfoAction), this._onEnterRoomInfoAction && this._onEnterRoomInfoAction(e)
                        }), (() => {}));
            else if (t.ImagePath.length > 0) {
                let e = l.getScene().getComponentInChildren(w);
                e.callBannerDetailPage(e.hallLayer, t.ImagePath)
            }
        }
    }).prototype, "pageView", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = t(b.prototype, "defaultBanner", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = b)) || v));
    i._RF.pop()
}