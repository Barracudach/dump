import * as t from "./cc.js";
import * as o from "./cc.js";

function main() {
    t._RF.push({}, "8e575iLrL5Plqcz+NqVMZhW", "MttGameItemColorIndentifier", void 0);
    e("MttGameItemColorIndentifier", function(e) {
        return e[e.Series = 1] = "Series", e[e.Live = 2] = "Live", e[e.Satellite = 3] = "Satellite", e[e.Special = 4] = "Special", e[e.ShortDeck = 5] = "ShortDeck", e[e.PKO = 6] = "PKO", e[e.Bounty = 7] = "Bounty", e[e.OverTenThousand = 8] = "OverTenThousand", e[e.Other = 99] = "Other", e
    }({})), e("LiveIcon", function(e) {
        return e[e.None = -1] = "None", e[e.Korea = 0] = "Korea", e[e.Passport = 1] = "Passport", e[e.Prime = 2] = "Prime", e
    }({})), e("SpecialIcon", function(e) {
        return e[e.None = -1] = "None", e[e.KingOfCash = 0] = "KingOfCash", e[e.RakeBack = 1] = "RakeBack", e[e.BumpUp = 2] = "BumpUp", e
    }({}));
    e("MttItemColor", class {
        constructor() {
            this.titleBgColors = [], this.titleTextColor = (new o).fromHEX("#1A2C45"), this.titleIconUrl = void 0
        }
    });
    e("MttGameItemPageType", function(e) {
        return e[e.None = 0] = "None", e[e.WPTDailyAsia = 1] = "WPTDailyAsia", e[e.DailyPrime = 2] = "DailyPrime", e[e.BountyRumble = 3] = "BountyRumble", e[e.OneShot = 4] = "OneShot", e[e.HyperDash = 5] = "HyperDash", e[e.WeeklyGoldenBounty = 6] = "WeeklyGoldenBounty", e[e.WPTMysteryMillion = 7] = "WPTMysteryMillion", e[e.CrazyFreeroll = 8] = "CrazyFreeroll", e[e.WPTLive = 9] = "WPTLive", e
    }({}));
    t._RF.pop()
}