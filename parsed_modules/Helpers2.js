import * as o from "./cc.js";

function main() {
    o._RF.push({}, "373ecxppl9PKrodloZT+s01", "Helpers", void 0);
    e("CommonAppType", function(e) {
        return e.Cashier = "Cashier", e.Casino = "Casino", e.Poker = "Poker", e.Promo = "Promo", e.WebApp = "WebApp", e.Sports = "Sports", e.WebAuth = "WebAuth", e
    }({})), e("PokerEventType", function(e) {
        return e.RequestLogin = "RequestLogin", e.FullScreenEvent = "FullScreenEvent", e.UserLoginSuccess = "UserLoginSuccess", e.GetLocation = "GetLocation", e.AddShortcut = "AddShortcut", e.ShowDownloadPopup = "ShowDownloadPopup", e.GetAuthDataRequest = "GetAuthDataRequest", e.GetAuthDataResponse = "GetAuthDataResponse", e.UserLogout = "UserLogout", e.EnableBackButton = "EnableBackButton", e.PokerReadyArgs = "PokerReadyArgs", e.LazyLoadProgressArgs = "LazyLoadProgressArgs", e.GoToCashier = "GoToCashier", e.ChangeLanguageSetting = "ChangeLanguageSetting", e.OpeningGame = "OpeningGame", e.ExitRoom = "ExitRoom", e.ChangeSoundEffectPref = "ChangeSoundEffectPref", e.PaymentNoticeResponse = "PaymentNoticeResponse", e.ShowErrorPopup = "ShowErrorPopup", e.ShowInfoPopup = "ShowInfoPopup", e.MinigameData = "MinigameData", e.ShowOutOfFundsPopup = "ShowOutOfFundsPopup", e.UserChangePassword = "UserChangePassword", e
    }({})), e("CommonEventsType", function(e) {
        return e.DeepLinkEvent = "DeepLinkEvent", e.UpdateUserInfo = "UpdateUserInfo", e.LocationBlocking = "LocationBlocking", e.IFrameWindowData = "IFrameWindowData", e.CloseProfilePage = "CloseProfilePage", e.GetLocation = "GetLocation", e.OpenNotification = "OpenNotification", e.CloseNotification = "CloseNotification", e.SendNotificationCount = "SendNotificationCount", e.AddShortcut = "AddShortcut", e.CloseDownloadBanner = "CloseDownloadBanner", e.NavigatorShare = "NavigatorShare", e.OpenExternalLink = "open_external_link", e.OpenPokerFlips = "openPokerFlips", e.OpenPokerMaster = "openPokerMaster", e.NavigatorVibrate = "NavigatorVibrate", e.AppDown = "AppDown", e.ShowInstallPrompt = "ShowInstallPrompt", e
    }({})), e("CashierEventType", function(e) {
        return e.cashierReady = "cashierReady", e
    }({})), e("CasinoEventType", function(e) {
        return e.initialData = "initialData", e.userBalances = "userBalances", e.downloadBannerInfo = "downloadBannerInfo", e.DepositPopupClosed = "DepositPopupClosed", e.casinoReady = "casinoReady", e.casinoLoadComplete = "casinoLoadComplete", e.openPokerFlips = "openPokerFlips", e.openPokerMaster = "openPokerMaster", e.openLoginScreen = "openLoginScreen", e.insufficientPopupVisibility = " insufficientPopupVisibility", e.openCasinoGame = "openCasinoGame", e.openCasinoLobby = "openCasinoLobby", e.openCasinoGameFailed = "openCasinoGameFailed", e.openPokerLobby = "openPokerLobby", e.insufficientFunds = "insufficient-funds", e.requestBackCasinoLobby = "requestBackCasinoLobby", e.openPokerGame = "openPokerGame", e
    }({})), e("PromoEventType", function(e) {
        return e.navigate = "navigate", e
    }({})), e("WebAppEventsType", function(e) {
        return e.LocationInformation = "Web_Location_information", e.ClickNavbarBack = "Web_Click_Navbar_Back", e.FocusPokerTab = "WebFocusPoker", e.DownloadAppBanner = "DownloadAppBanner", e.InstallPromptStatus = "InstallPromptStatus", e
    }({})), e("WebAuthEventsType", function(e) {
        return e.RegisterSuccess = "registerSuccess", e.RegisterError = "registerError", e.ForgotPasswordSuccess = "ForgotPasswordSuccess", e.ForgotPasswordError = "ForgotPasswordError", e.LoginSuccess = "LoginSuccess", e.LoginError = "LoginError", e.ButtonClick = "ButtonClick", e
    }({})), e("DeepLinkPage", function(e) {
        return e.None = "none", e.Profile = "profile", e.PokerFlips = "pockerflip", e.PokerMaster = "pokermaster", e.NLHE = "nlhe", e.ShortDeck = "shortDeck", e.PLO = "plo", e.GlobalSpins = "globalSpins", e.MTT = "mtt", e.Flash = "flash", e.Hall = "hall", e.Notification = "notification", e
    }({})), e("Orientation", function(e) {
        return e.Auto = "auto", e.Landscape = "landscape", e.Portrait = "portrait", e
    }({})), e("CasinoMenuPosition", function(e) {
        return e.Top = "top", e.Bottom = "bottom", e.Left = "left", e.Right = "right", e
    }({})), e("LazyLoadAsset", function(e) {
        return e[e.None = 0] = "None", e[e.WelcomePokerMasterPopup = 1] = "WelcomePokerMasterPopup", e[e.WelcomePokerFlipsPopup = 2] = "WelcomePokerFlipsPopup", e[e.PokerFlipsPopup = 3] = "PokerFlipsPopup", e[e.MinigamePokerMasterPopup = 4] = "MinigamePokerMasterPopup", e[e.NotifiationPage = 5] = "NotifiationPage", e[e.ProfilePage = 6] = "ProfilePage", e
    }({})), e("LogOutReason", function(e) {
        return e.Unknown = "Unknown", e.Manual = "Manual", e.ServerErrorCode3 = "ServerErrorCode3", e.ServerErrorCode4 = "ServerErrorCode4", e.ServerErrorCode5 = "ServerErrorCode5", e.ServerErrorCode197 = "ServerErrorCode197", e.ServerErrorCode224 = "ServerErrorCode224", e.ServerErrorCode225 = "ServerErrorCode225", e.ServerErrorCode229 = "ServerErrorCode229", e
    }({})), e("AppBrand", function(e) {
        return e.WPTG = "WPTG", e.WPTA = "WPTA", e
    }({}));
    o._RF.pop()
}