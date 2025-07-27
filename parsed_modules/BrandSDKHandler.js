import * as n from "./cc.js";
import * as t from "./cc.js";
import * as e from "./cc.js";

function main() {
    n._RF.push({}, "d686fgs25FBpbpVsuLlOE4h", "BrandSDKHandler", void 0);
    let r = a("BranchStandardEventTS", function(a) {
        return a.BranchStandardEventAddToCart = "BranchStandardEventAddToCart", a.BranchStandardEventAddToWishlist = "BranchStandardEventAddToWishlist", a.BranchStandardEventViewCart = "BranchStandardEventViewCart", a.BranchStandardEventInitiatePurchase = "BranchStandardEventInitiatePurchase", a.BranchStandardEventAddPaymentInfo = "BranchStandardEventAddPaymentInfo", a.BranchStandardEventPurchase = "BranchStandardEventPurchase", a.BranchStandardEventSpendCredits = "BranchStandardEventSpendCredits", a.BranchStandardEventSubscribe = "BranchStandardEventSubscribe", a.BranchStandardEventStartTrial = "BranchStandardEventStartTrial", a.BranchStandardEventClickAd = "BranchStandardEventClickAd", a.BranchStandardEventViewAd = "BranchStandardEventViewAd", a.BranchStandardEventSearch = "BranchStandardEventSearch", a.BranchStandardEventViewItem = "BranchStandardEventViewItem", a.BranchStandardEventViewItems = "BranchStandardEventViewItems", a.BranchStandardEventRate = "BranchStandardEventRate", a.BranchStandardEventShare = "BranchStandardEventShare", a.BranchStandardEventCompleteRegistration = "BranchStandardEventCompleteRegistration", a.BranchStandardEventCompleteTutorial = "BranchStandardEventCompleteTutorial", a.BranchStandardEventAchieveLevel = "BranchStandardEventAchieveLevel", a.BranchStandardEventUnlockAchievement = "BranchStandardEventUnlockAchievement", a.BranchStandardEventInvite = "BranchStandardEventInvite", a.BranchStandardEventLogin = "BranchStandardEventLogin", a.BranchStandardEventReserve = "BranchStandardEventReserve", a.BranchStandardEventOptIn = "BranchStandardEventOptIn", a.BranchStandardEventOptOut = "BranchStandardEventOptOut", a
    }({}));
    r = a("BranchStandardEventTS", function(a) {
        return a.BranchEventAdTypeNone = "BranchEventAdTypeNone", a.BranchEventAdTypeBanner = "BranchEventAdTypeBanner", a.BranchEventAdTypeInterstitial = "BranchEventAdTypeInterstitial", a.BranchEventAdTypeRewardedVideo = "BranchEventAdTypeRewardedVideo", a.BranchEventAdTypeNative = "BranchEventAdTypeNative", a
    }(r || {}));
    class c {
        static getInstance() {
            return c.instance || (c.instance = new c), c.instance
        }
        BrandSDKLogin(a) {
            t.isNative && t.os === t.OS.IOS ? e.reflection.callStaticMethod("BranchSDK", "BranchSDKLogin:", a) : t.isNative && t.os === t.OS.OSX && e.reflection.callStaticMethod("BranchSDKMac", "BranchSDKLogin:", a)
        }
        BrandSDKLogout(a) {
            t.isNative && t.os === t.OS.IOS ? e.reflection.callStaticMethod("BranchSDK", "BranchSDKLogout:", a) : t.isNative && t.os === t.OS.OSX && e.reflection.callStaticMethod("BranchSDKMac", "BranchSDKLogout:", a)
        }
        BranchSDKSaveLocalDataString(a) {
            t.isNative && t.os === t.OS.IOS ? e.reflection.callStaticMethod("BranchSDK", "BranchSDKSaveLocalData:", a) : t.isNative && t.os === t.OS.OSX ? e.reflection.callStaticMethod("BranchSDKMac", "BranchSDKSaveLocalData:", a) : t.isNative && t.os === t.OS.ANDROID ? e.reflection.callStaticMethod("com/cocos/game/BranchSDK", "BranchSDKSaveLocalData", "(Ljava/lang/String;)V", a) : t.isNative && t.os === t.OS.WINDOWS && e.cppbridge.sendMessage("BranchSDK", "BranchSDKSaveLocalData", a)
        }
        BranchSDKGetLocalDataString() {
            var a;
            return t.isNative && t.os === t.OS.IOS ? a = e.reflection.callStaticMethod("BranchSDK", "BranchSDKGetLocalData:", "") : t.isNative && t.os === t.OS.OSX ? a = e.reflection.callStaticMethod("BranchSDKMac", "BranchSDKGetLocalData:", "") : t.isNative && t.os === t.OS.ANDROID ? a = e.reflection.callStaticMethod("com/cocos/game/BranchSDK", "BranchSDKGetLocalData", "()Ljava/lang/String;") : t.isNative && t.os === t.OS.WINDOWS && (a = e.cppbridge.sendMessage("BranchSDK", "BranchSDKGetLocalData")), a
        }
        BranchSDKSaveDeviceInfoDataString(a) {
            t.isNative && t.os === t.OS.IOS ? e.reflection.callStaticMethod("BranchSDK", "BranchSDKSaveDeviceInfoData:", a) : t.isNative && t.os === t.OS.OSX ? e.reflection.callStaticMethod("BranchSDKMac", "BranchSDKSaveDeviceInfoData:", a) : t.isNative && t.os === t.OS.ANDROID ? e.reflection.callStaticMethod("com/cocos/game/BranchSDK", "BranchSDKSaveDeviceInfoData", "(Ljava/lang/String;)V", a) : t.isNative && t.os === t.OS.WINDOWS && e.cppbridge.sendMessage("BranchSDK", "BranchSDKSaveDeviceInfoData", a)
        }
        BranchSDKGetDeviceInfoDataString() {
            var a;
            return t.isNative && t.os === t.OS.IOS ? a = e.reflection.callStaticMethod("BranchSDK", "BranchSDKGetDeviceInfoData:", "") : t.isNative && t.os === t.OS.OSX ? a = e.reflection.callStaticMethod("BranchSDKMac", "BranchSDKGetDeviceInfoData:", "") : t.isNative && t.os === t.OS.ANDROID ? a = e.reflection.callStaticMethod("com/cocos/game/BranchSDK", "BranchSDKGetDeviceInfoData", "()Ljava/lang/String;") : t.isNative && t.os === t.OS.WINDOWS && (a = e.cppbridge.sendMessage("BranchSDK", "BranchSDKGetDeviceInfoData")), a
        }
        BrachSDKTrackingCustomEventsWithEventName(a, n, r) {
            t.isNative && t.os === t.OS.IOS ? e.reflection.callStaticMethod("BranchSDK", "BrachSDKTrackingCustomEventsWithEventName:andCustomData:andCustomAlias:", a, n, r) : t.isNative && t.os === t.OS.OSX && e.reflection.callStaticMethod("BranchSDKMac", "BrachSDKTrackingCustomEventsWithEventName:andCustomData:", a, n)
        }
        BranchSDKTrackingEventsWithEventName(a, n, r, c, S) {
            t.isNative && t.os === t.OS.IOS ? e.reflection.callStaticMethod("BranchSDK", "BranchSDKTrackingEventsWithEventName:andAlias:andTransactionID:andEventDescription:andCustomData:", a, n, r, c, S) : t.isNative && t.os === t.OS.OSX && e.reflection.callStaticMethod("BranchSDKMac", "BranchSDKTrackingEventsWithEventName:andTransactionID:andEventDescription:andCustomData:", a, r, c, S)
        }
    }
    a("BrandSDKHandler", c), c.instance = null, n._RF.pop()
}