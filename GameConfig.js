import * as t from "./cc.js";
import * as a from "./Enum.js";

function main() {
    t._RF.push({}, "ad2307c6ChCL6Yf5l18Zgx4", "GameConfig", void 0);
    e("GameConfig", class {
        constructor(...e) {
            this.redEnvelopeEnabled = !0, this.depositButtonEnabled = !0, this.audioChatEnabled = !0, this.labaEnabled = !0, this.cashierEnabled = !0, this.rulesMenuItemEnabled = !1, this.onTableCurrentBalanceEnabled = !0, this.gameSoundSettingsEnabled = !0, this.gameCustomBetSettingsEnabled = !0, this.chatTabEnabled = !0, this.emojiTabEnabled = !0, this.emojiTabMTTEnabled = !0, this.faceEmojiEnabled = !1, this.fullscreenEmojiEnabled = !0, this.opponentEmojiEnabled = !0, this.opponentEmojiMTTEnabled = !0, this.gameLogTabEnabled = !0, this.statsTabEnabled = !0, this.bottomGameMenuEnabled = !0, this.enableInGamePlayerStats = !0, this.settingMenuEnabled = !0, this.enableShowGuess = !0, this.enableHandStrenght = !0, this.enableJackPot = !0, this.enableAddTableExplanation = !0, this.enableMTTQuitConfirmPopup = !0, this.enableShakeSeatAfterGetChips = !0, this.buyInTakeBackEnabled = !0, this.buyInTotalAmountEnabled = !0, this.enableShowOpponentCards = !0, this.enableShowBarrage = !0, this.cardFaceList = [], this.tableList = [], this.showBuyInMessage = !1, this.isAutoCancelInsurrance = !1, this.enableShowHandRankMTT = !1, this.useNewSwitchTableMTT = !0, this.enableMultiTableBar = !0, this.replaceZoomTextToPaceText = !1, this.replaceCowboyPokerTextToPokerFlipsText = !1, this.enablePokerFlipsNotice = !1, this.enablePokerKingTable = !0, this.enableCasinoPoint = !0, this.enableVoiceMessage = !0, this.enableSplitScreen = !0, this.enableCrossSellInMTTBreak = !0, this.worldHeartBeatInterval = 12, this.worldHeartBeatTimeout = 5, this.cashGameHeartBeatInterval = 8, this.cashGameHeartBeatTimeout = 5, this.seasonBackgroundData = {}, this.enableMultipleCashGamesMobile = !1, this.showNetworkStatusPopUp = !1, this.showMttBriefPanel = !1, this.alwaysSendCheckOutAndLeave = !0, this.seatExtraScale = 1, this.miniGameConfig = {
                showPlayerListAndLeaderboard: !1,
                showRedEnvelop: !1,
                useOnlyEnglish: !1,
                useOnlyEnglishForGameRule: !1,
                useSharePlayerPool: !1,
                showChangePoints: !0,
                showLeftRightLeaderboard: !0,
                showMexicoDisclaimerAndCurrencyConversion: !1,
                useMoneyFromSharePoolServer: !0,
                enableUserBalanceShortCoin: !0,
                maxNumberTimeShowIntroPopup: 0,
                availableLangResForMiniGames: [a.ja_JP, a.ko_KR, a.vi_VN, a.id_ID]
            }, this.gameTablesConcurrent = {
                maxConcurrent: 3,
                mtt: 3,
                sng: 3,
                cashGame: 3,
                zoom: 1,
                plo: 3,
                plo5: 3,
                pokerFlips: 1,
                sportsBook: 1
            }, this.enabledTableDataPoint = !0, this.enableCasinoButton = !1, this.showGlobalSpinFloatingIcon = !1, this.enableSportsBookButton = !1, this.enableAntiRatHole = !1, this.maxWebAppplayedHands = 50, this.useShortCurrencySymbolCashGame = !1, this.maxTournamentDetailWindows = 15, this.newReplayerFixedDefaultBackground = !1, this.enableReplayerExtraButtons = !0, this.defaultCardBackSetting = 1, this.applyNewUnderRaiseRule = !1, this.isAllowSignUpInMinutes = !1, this.set(...e)
        }
        set(...e) {
            Object.assign(this, ...e)
        }
    }), t._RF.pop()
}