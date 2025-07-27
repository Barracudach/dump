import * as n from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as P from "./cc.js";
import * as t from "./NativeEventMap.js";
import * as h from "./NativeEventMap.js";

function main() {
    i._RF.push({}, "bae46BASZxF5YijeGGlkfVm", "NativeHelper", void 0);
    const a = {
        "iPhone3,1": "iPhone 4",
        "iPhone3,2": "iPhone 4",
        "iPhone3,3": "iPhone 4",
        "iPhone4,1": "iPhone 4S",
        "iPhone5,1": "iPhone 5",
        "iPhone5,2": "iPhone 5",
        "iPhone5,3": "iPhone 5c",
        "iPhone5,4": "iPhone 5c",
        "iPhone6,1": "iPhone 5s",
        "iPhone6,2": "iPhone 5s",
        "iPhone7,1": "iPhone 6 Plus",
        "iPhone7,2": "iPhone 6",
        "iPhone8,1": "iPhone 6s",
        "iPhone8,2": "iPhone 6s Plus",
        "iPhone8,4": "iPhone SE",
        "iPhone9,1": "iPhone 7",
        "iPhone9,2": "iPhone 7 Plus",
        "iPhone9,3": "iPhone 7",
        "iPhone9,4": "iPhone 7 Plus",
        "iPhone10,1": "iPhone 8",
        "iPhone10,2": "iPhone 8 Plus",
        "iPhone10,3": "iPhone X",
        "iPhone10,4": "iPhone 8",
        "iPhone10,5": "iPhone 8 Plus",
        "iPhone10.6": "iPhone X",
        "iPhone11,2": "iPhone XS",
        "iPhone11,4": "iPhone XS Max",
        "iPhone11,6": "iPhone XS Max",
        "iPhone11,8": "iPhone XR",
        "iPhone12,1": "iPhone 11",
        "iPhone12,3": "iPhone 11 Pro",
        "iPhone12,5": "iPhone 11 Pro Max",
        "iPhone12,8": "iPhone SE 2nd Gen",
        "iPhone13,1": "iPhone 12 Mini",
        "iPhone13,2": "iPhone 12",
        "iPhone13,3": "iPhone 12 Pro",
        "iPhone13,4": "iPhone 12 Pro Max",
        "iPhone14,2": "iPhone 13 Pro",
        "iPhone14,3": "iPhone 13 Pro Max",
        "iPhone14,4": "iPhone 13 Mini",
        "iPhone14,5": "iPhone 13",
        "iPhone14,6": "iPhone SE 3rd Gen",
        "iPhone14,7": "iPhone 14",
        "iPhone14,8": "iPhone 14 Plus",
        "iPhone15,2": "iPhone 14 Pro",
        "iPhone15,3": "iPhone 14 Pro Max",
        "iPod1,1": "iPod Touch 1G",
        "iPod2,1": "iPod Touch 2G",
        "iPod3,1": "iPod Touch 3G",
        "iPod4,1": "iPod Touch 4G",
        "iPod5,1": "iPod Touch 5G",
        "iPad1,1": "iPad",
        "iPad2,1": "iPad 2",
        "iPad2,2": "iPad 2",
        "iPad2,3": "iPad 2",
        "iPad2,4": "iPad 2",
        "iPad2,5": "iPad mini",
        "iPad2,6": "iPad mini",
        "iPad2,7": "iPad mini",
        "iPad3,1": "iPad 3",
        "iPad3,2": "iPad 3",
        "iPad3,3": "iPad 3",
        "iPad3,4": "iPad 4",
        "iPad3,5": "iPad 4",
        "iPad3,6": "iPad 4"
    };
    let s, c;
    o.isNative && o.os === o.OS.IOS ? (s = "NativeEvent", c = "call_native:") : o.isNative && o.os === o.OS.ANDROID && (s = "org/cocos2dx/javascript/NativeEvent", c = "call_native");
    class r {
        static callNativeHelper(e, i, P, t, h) {
            const a = {
                    param: JSON.stringify(t),
                    isSync: h ? 1 : 0,
                    respMsgKey: P,
                    object: e,
                    method: i
                },
                r = JSON.stringify(a);
            let l = "";
            if (o.os === o.OS.IOS) l = n.reflection.callStaticMethod(s, c, r);
            else if (o.os === o.OS.ANDROID) {
                const e = "(Ljava/lang/String;)Ljava/lang/String;";
                l = n.reflection.callStaticMethod(s, c, e, r)
            }
            return l
        }
        static invoke(e, i, n = {}) {
            const P = t.METHOD_MAP[e];
            if (!P) return console.log("Expection: cannot find nativeKey:" + e), "";
            e !== h.KEY_IS_NETWORK_AVAILABLE && console.log("NativeHelper invoke event:", P.obj, P.method, P.respMsgKey);
            const a = P.obj,
                s = P.method,
                c = P.respMsgKey ? P.respMsgKey : "";
            let l = "";
            return a && s || console.log("Expection: object or method is nil, nativeKey:" + e), !o.isNative || o.os !== o.OS.ANDROID && o.os !== o.OS.IOS || (l = r.callNativeHelper(a, s, c, n, i)), l
        }
        static invokeSyncFunc(e, i = {}) {
            return r.invoke(e, i, !0)
        }
        static OnNativeHelperCallback(e) {
            const i = decodeURIComponent(e);
            P("OnNativeHelperCallback jsonStr:", i)
        }
        static getIOSDeviceModel() {
            if (o.os === o.OS.IOS) {
                return this.invokeSyncFunc(h.KEY_GETDEVICEMODEL)
            }
            return "Not a IOS model"
        }
        static getIOSDeviceName() {
            if (o.os === o.OS.IOS) {
                return a[r.getIOSDeviceModel()]
            }
            return "Not a IOS device"
        }
        static getSystemVersion() {
            let e = "";
            if (o.isNative && o.os === o.OS.ANDROID) e = n.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getVersion", "()Ljava/lang/String;");
            else if (o.isNative && o.os === o.OS.IOS) {
                e = this.invokeSyncFunc(h.KEY_GET_DEVICE_SYSTEM_VERSION)
            }
            return e
        }
    }
    e("NativeHelper", r), i._RF.pop()
}