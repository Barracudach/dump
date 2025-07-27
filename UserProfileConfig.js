import * as s from "./cc.js";

function main() {
    s._RF.push({}, "78ccaXL5JhM/oAv8XC+4Xzi", "UserProfileConfig", void 0);
    let e = t("ButtonShowLoc", function(t) {
            return t[t.None = 0] = "None", t[t.UserProfileMenu = 1] = "UserProfileMenu", t[t.UserProfileSettings = 2] = "UserProfileSettings", t
        }({})),
        i = t("UserAvatarChangeType", function(t) {
            return t[t.None = 0] = "None", t[t.System = 1] = "System", t[t.Custom = 2] = "Custom", t[t.All = 3] = "All", t
        }({}));
    t("UserProfileConfig", class {
        showLogOutAt(t) {
            return (this.showLogOut & t) > 0
        }
        showChangePasswordAt(t) {
            return (this.showChangePassword & t) > 0
        }
        constructor(...t) {
            this.showMyStats = !1, this.showAcount = !0, this.showLogOut = e.UserProfileMenu, this.showLoginHistory = !1, this.showBonusHistory = !1, this.showDataReport = !1, this.showHandHistory = !1, this.reportEnabled = !1, this.reportEnabledPlo5 = !1, this.favoriteEnabled = !1, this.showPlayerComplaints = !1, this.showGameTransactionHistory = !1, this.show2FactorAuthentification = !1, this.canSetDarkMode = !0, this.canSetEmailNotifications = !0, this.canSetSMSNotifications = !0, this.canSetLoginNotifications = !0, this.canValidateEmail = !0, this.canSeeLegalDocument = !0, this.showBackpack = !1, this.showMyTickets = !1, this.showVIP = !1, this.showSavedHands = !1, this.showChangePassword = e.UserProfileSettings, this.userAvatarAccepted = i.All, this.showMyAlliance = !1, this.showInviteFriends = !1, this.canSetChallengeQuestions = !1, this.nickNameChangeEnable = !0, this.feedbackEnabled = !0, this.freshchatTag = "", this.kycEnabled = !0, this.ppEnabled = !0, this.tcEnabled = !0, this.showPromoTextInviteView = !1, this.installAppEnabled = !1, this.addToHomeEnabled = !0, this.InviteFriendsWebsite_url = "https://wptglobal.com/poker-promotions/invite-a-friend", this.set(...t)
        }
        set(...t) {
            Object.assign(this, ...t)
        }
    }), s._RF.pop()
}