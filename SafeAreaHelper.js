import * as t from "./cc.js";
import * as i from "./cc.js";
import * as r from "./cc.js";
import * as a from "./cc.js";
import * as n from "./NativeHelper.js";

function main() {
    t._RF.push({}, "d323cUbPNNIBZ/i7kQKTiQA", "SafeAreaHelper", void 0);
    class g {
        static getAllInfo() {
            return [`Device Info: ${g.getDeviceInfo()}`, `Frame Size: ${g.getFrameSize()}`, `Visible Size: ${g.getVisibleSize()}`, `Window Size: ${g.getWindowSize()}`, `SafeArea Rect: ${g.getSafeAreaRect()}`, `Upper SafeArea Offset: ${g.getUpperDangerZoneYOffset()}`, `Down SafeArea Offset: ${g.getDownDangerZoneYOffset()}`].join("\n")
        }
        static getDeviceInfo() {
            return `${n.getIOSDeviceName()}, ${n.getSystemVersion()}`
        }
        static getFrameSize() {
            const e = i.getFrameSize();
            return e.width.toString() + "*" + e.height.toString()
        }
        static getWindowSize() {
            return r.windowSize.toString()
        }
        static getVisibleSize() {
            const e = i.getVisibleSize();
            return e.width.toString() + "*" + e.height.toString()
        }
        static getSafeAreaRect() {
            return a.getSafeAreaRect()
        }
        static getDownDangerZoneYOffset() {
            return g.getSafeAreaRect().y
        }
        static getUpperDangerZoneYOffset() {
            return i.getVisibleSize().height - g.getSafeAreaRect().height - g.getSafeAreaRect().y
        }
        static getLeftDangerZoneXOffset() {
            return i.getVisibleSize().width - g.getSafeAreaRect().width - g.getSafeAreaRect().x
        }
    }
    e("SafeAreaHelper", g), g.isTestNotch = !1, t._RF.pop()
}