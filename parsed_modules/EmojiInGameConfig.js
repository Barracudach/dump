import * as n from "./cc.js";
import * as o from "./cc.js";

function main() {
    n._RF.push({}, "142128yI/RI5YsCca9XwOR9", "EmojiInGameConfig", void 0);
    e("EmojiInGameConfig", {
        EmojiList: o({
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
        Enable: !0,
        PrefixPath: "",
        IsBundle: !0,
        BundleName: "full_screen_emoji"
    });
    n._RF.pop()
}