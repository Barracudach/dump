import * as n from "./cc.js";
import * as i from "./cc.js";

function main() {
    n._RF.push({}, "e6af0f5onNMPLcciW92Ahh+", "EmojiConfig", void 0);
    const e = t("EmojiDefaultConfig", {
        EmojiList: i({
            Shark: 0,
            Flood: 1,
            Freeze: 2,
            Money: 3,
            Ninja: 4,
            Dragon: 5,
            Fireworks: 6,
            BaoQuan: 7
        }),
        TableCountdown: 10,
        EmojiCountdown: 4,
        PotSizeRestriction: 80,
        Enable: !1,
        PrefixPath: "",
        IsBundle: !1,
        BundleName: ""
    });
    class o {
        constructor() {
            this.config = e
        }
        static get instance() {
            return null === o._instance && (o._instance = new o), o._instance
        }
        get EmojiList() {
            return this.config.EmojiList
        }
        set EmojiList(t) {
            this.config.EmojiList = t
        }
        get TableCountdown() {
            return this.config.TableCountdown
        }
        set TableCountdown(t) {
            this.config.TableCountdown = t
        }
        get EmojiCountdown() {
            return this.config.EmojiCountdown
        }
        set EmojiCountdown(t) {
            this.config.EmojiCountdown = t
        }
        get PotSizeRestriction() {
            return this.config.PotSizeRestriction
        }
        set PotSizeRestriction(t) {
            this.config.PotSizeRestriction = t
        }
        get Enable() {
            return this.config.Enable
        }
        set Enable(t) {
            this.config.Enable = t
        }
        get PrefixPath() {
            return this.config.PrefixPath
        }
        set PrefixPath(t) {
            this.config.PrefixPath = t
        }
        get IsBundle() {
            return this.config.IsBundle
        }
        set IsBundle(t) {
            this.config.IsBundle = t
        }
        get BundleName() {
            return this.config.BundleName
        }
        set BundleName(t) {
            this.config.BundleName = t
        }
        loadConfig(t) {
            this.config = t
        }
    }
    t("default", o), o._instance = null, n._RF.pop()
}