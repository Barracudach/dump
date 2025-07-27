import * as t from "./cc.js";
import * as e from "./cc.js";
import * as a from "./cc.js";

function main() {
    a._RF.push({}, "3e639LTnFJEzKDokS2oJbDI", "BranchSDKHandler", void 0);
    let r = n("BranchStandardEventTS", function(n) {
        return n.BranchStandardEventAddToCart = "BranchStandardEventAddToCart", n.BranchStandardEventAddToWishlist = "BranchStandardEventAddToWishlist", n.BranchStandardEventViewCart = "BranchStandardEventViewCart", n.BranchStandardEventInitiatePurchase = "BranchStandardEventInitiatePurchase", n.BranchStandardEventAddPaymentInfo = "BranchStandardEventAddPaymentInfo", n.BranchStandardEventPurchase = "BranchStandardEventPurchase", n.BranchStandardEventSpendCredits = "BranchStandardEventSpendCredits", n.BranchStandardEventSubscribe = "BranchStandardEventSubscribe", n.BranchStandardEventStartTrial = "BranchStandardEventStartTrial", n.BranchStandardEventClickAd = "BranchStandardEventClickAd", n.BranchStandardEventViewAd = "BranchStandardEventViewAd", n.BranchStandardEventSearch = "BranchStandardEventSearch", n.BranchStandardEventViewItem = "BranchStandardEventViewItem", n.BranchStandardEventViewItems = "BranchStandardEventViewItems", n.BranchStandardEventRate = "BranchStandardEventRate", n.BranchStandardEventShare = "BranchStandardEventShare", n.BranchStandardEventCompleteRegistration = "BranchStandardEventCompleteRegistration", n.BranchStandardEventCompleteTutorial = "BranchStandardEventCompleteTutorial", n.BranchStandardEventAchieveLevel = "BranchStandardEventAchieveLevel", n.BranchStandardEventUnlockAchievement = "BranchStandardEventUnlockAchievement", n.BranchStandardEventInvite = "BranchStandardEventInvite", n.BranchStandardEventLogin = "BranchStandardEventLogin", n.BranchStandardEventReserve = "BranchStandardEventReserve", n.BranchStandardEventOptIn = "BranchStandardEventOptIn", n.BranchStandardEventOptOut = "BranchStandardEventOptOut", n
    }({}));
    r = n("BranchStandardEventTS", function(n) {
        return n.BranchEventAdTypeNone = "BranchEventAdTypeNone", n.BranchEventAdTypeBanner = "BranchEventAdTypeBanner", n.BranchEventAdTypeInterstitial = "BranchEventAdTypeInterstitial", n.BranchEventAdTypeRewardedVideo = "BranchEventAdTypeRewardedVideo", n.BranchEventAdTypeNative = "BranchEventAdTypeNative", n
    }(r || {}));
    class d {
        static getInstance() {
            return d.instance || (d.instance = new d), d.instance
        }
        BranchSDKLogin(n, a = !1) {
            t.isNative && (t.os === t.OS.OSX ? e.reflection.callStaticMethod("BranchSDKMac", "BranchSDKLogin:withRegistered:", n, a) : t.os === t.OS.WINDOWS && (this.BranchSDKLogout(""), e.cppbridge.sendMessage("BranchSDK", "BranchSDKLogin", n)))
        }
        BranchSDKLogout(n) {
            t.isNative && (t.os === t.OS.OSX ? e.reflection.callStaticMethod("BranchSDKMac", "BranchSDKLogout:", n) : t.os === t.OS.WINDOWS && e.cppbridge.sendMessage("BranchSDK", "BranchSDKLogout", n))
        }
        BranchSDKAdvertisingDataString() {
            var n;
            return t.isNative && (t.os === t.OS.IOS ? n = e.reflection.callStaticMethod("BranchSDK", "BranchSDKGetBranchAdvertisingInfo:", "") : t.os === t.OS.OSX ? n = e.reflection.callStaticMethod("BranchSDKMac", "BranchSDKGetBranchAdvertisingInfo:", "") : t.os === t.OS.ANDROID || (t.os, t.OS.WINDOWS)), n
        }
        BranchSDKTrackingCustomEventsWithEventName(n, a, r) {
            t.isNative && (t.os === t.OS.OSX ? e.reflection.callStaticMethod("BranchSDKMac", "BranchSDKTrackingCustomEventsWithEventName:andCustomData:andCustomAlias:", n, a, r) : t.os === t.OS.WINDOWS && e.cppbridge.sendMessage("BranchSDK", "BranchSDKTrackingCustomEventsWithEventName", n, a, r))
        }
        BranchSDKTrackingEventsWithEventName(n, a, r, d, c) {
            t.isNative && (t.os === t.OS.OSX ? e.reflection.callStaticMethod("BranchSDKMac", "BranchSDKTrackingEventsWithEventName:andTransactionID:andEventDescription:andCustomData:", n, r, d, c) : t.os === t.OS.WINDOWS && e.cppbridge.sendMessage("BranchSDK", "BranchSDKTrackingEventsWithEventName", n, a, r, d, c))
        }
    }
    n("BranchSDKHandler", d), d.instance = null, a._RF.pop()
}