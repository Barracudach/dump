import * as t from "./cc.js";
import * as g from "./cc.js";
import * as h from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as c from "./cv.js";
import * as S from "./Enum.js";

function main() {
    t._RF.push({}, "8d026TBdkNPvqDLZrX1neLO", "ViewAdaptive", void 0);
    class r {
        constructor() {
            this.IPHONEX_OFFSETY = 100, this.isselfchange = !1, this.cowboyroomid = 0, this.videoCowboyRoomId = 0, this.humanboyroomid = 0, this.pokerMasterRoomID = 0, this.enterHallJumpToIndex = S.None
        }
        static getInstance() {
            return r._g_instance || (r._g_instance = new r), r._g_instance
        }
        reset() {
            this.isselfchange = !1, this.cowboyroomid = 0, this.videoCowboyRoomId = 0, this.humanboyroomid = 0, this.pokerMasterRoomID = 0, this.enterHallJumpToIndex = S.None
        }
        AdaptiveWidt(e) {
            c.config.IS_WIDESCREEN && (e.getComponent(i).setContentSize(new n(o.getVisibleSize().width, e.getComponent(i).contentSize.height)), e.getComponent(i).setContentSize(new n(o.getVisibleSize().width, e.getComponent(i).contentSize.height)))
        }
        AdaptiveHeight(e) {
            e.getComponent(i).setContentSize(new n(e.getComponent(i).contentSize.width, o.getVisibleSize().height))
        }
        AdaptiveLeft(e, t = !0) {
            let i = 1;
            t && (i = c.config.DESIGN_WIDTH / o.getVisibleSize().width);
            let n = e.position.x - (o.getVisibleSize().width - c.config.DESIGN_WIDTH) * i / 2;
            e.setPosition(new s(n, e.position.y, e.position.z))
        }
        AdaptiveRight(e, t = !0) {
            if (!c.config.IS_WIDESCREEN) return;
            let i = 1;
            t && (i = c.config.DESIGN_WIDTH / o.getVisibleSize().width);
            e.position.x, o.getVisibleSize().width, c.config.DESIGN_WIDTH;
            e.setPosition(new s(e.position.x + (o.getVisibleSize().width - c.config.DESIGN_WIDTH) * i / 2, e.position.y, e.position.z))
        }
        AdaptiveMiddle(e) {
            c.config.IS_WIDESCREEN && e.setPosition(new s(1 * (o.getVisibleSize().width - c.config.DESIGN_WIDTH) / 2, e.position.y, e.position.z))
        }
        getAdaptiveLeftX(e, t) {
            if (!c.config.IS_WIDESCREEN) return e;
            let i = 1;
            return t && (i = o.getVisibleSize().width / c.config.DESIGN_WIDTH), console.log("winSize.width:" + o.getVisibleSize().width + "  cv.config.DESIGN_WIDTH:" + c.config.DESIGN_WIDTH), e * i
        }
        getAdaptiveRightX(e, t) {
            if (!c.config.IS_WIDESCREEN) return e;
            let i = 1;
            return t && (i = o.getVisibleSize().width / c.config.DESIGN_WIDTH), c.config.WIDTH - i * (c.config.DESIGN_WIDTH - e)
        }
        getPosByMidAnchorPoint(e, t) {
            return new g(t.x + (.5 - e.getComponent(i).anchorX) * e.getComponent(i).width, t.y - (.5 - e.getComponent(i).anchorY) * e.getComponent(i).height)
        }
        getAdaptivePositionX(e) {
            return e / c.config.DESIGN_WIDTH * o.getVisibleSize().width
        }
        getAdaptivePositionY(e, t) {
            let i = e / c.config.DESIGN_HEIGHT * o.getVisibleSize().height;
            return c.native.isFullScreen() && t && (i = e / c.config.DESIGN_HEIGHT * (o.getVisibleSize().height - this.IPHONEX_OFFSETY)), i
        }
        getAdaptivePosition(e, t) {
            let i = this.getAdaptivePositionX(e),
                n = this.getAdaptivePositionY(t, !0);
            return new g(i, n)
        }
        adaptiveIPhoneX(e, t) {
            if (!c.native.isFullScreen()) return;
            e.getComponent(i).contentSize.height;
            let o = new n(e.getComponent(i).contentSize.width, e.getComponent(i).contentSize.height - this.IPHONEX_OFFSETY),
                s = e.children,
                g = e.children.length;
            for (let e = 0; e < g; e++) {
                let n = s[e].getPosition().y / 2436 * o.height;
                if (s[e].setPosition(s[e].getPosition().x, n), t && s[e].getComponent(h) instanceof h) {
                    let t = s[e],
                        n = t.getComponent(i).contentSize;
                    t.getComponent(i).setContentSize(n.width, n.height - this.IPHONEX_OFFSETY)
                }
            }
        }
    }
    e("ViewAdaptive", r), r._g_instance = null, t._RF.pop()
}