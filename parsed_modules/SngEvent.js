import * as e from "./cc.js";

function main() {
    e._RF.push({}, "7f40dSMT+RLRrK0GcBvdZlH", "SngEvent", void 0);
    t("SngEvent", function(t) {
        return t.GameStart = "SNG_GameStart", t.GameStartError = "SNG_GameStartError", t.BackToGame = "SNG_BackToGame", t.BuyInStart = "SNG_BuyInStart", t.BuyInError = "SNG_BuyInEnd", t.ShowLoading = "SNG_ShowLoadingPreview", t
    }({})), t("SngReportEvent", function(t) {
        return t.StartSingleGameFailed = "start-single-game-failed", t.StartGamesEmpty = "start-games-empty", t.StartGamesNotMatch = "start-games-count-not-match", t.StartGamesNotEnoughWindows = "start-games-not-enough-windows", t.StartGamesMissingRoomIds = "start-games-missing-room-ids", t
    }({})), t("MttReportEvent", function(t) {
        return t.BackToLobbyFailed = "back-to-lobby-failed", t.InitRoomIndexInvalid = "init-room-index-invalid", t.CallGameViewInvalid = "call-game-view-invalid", t.UpdateSignUpButtonNoStartingTime = "mtt-update-signup-button-no-startingTime", t.RequestMttDetailDataTournamentEmpty = "request-mtt-detail-data-tournament-empty", t.RequestMttDetailErrorResponse = "request-mtt-detail-error-response", t
    }({}));
    e._RF.pop()
}