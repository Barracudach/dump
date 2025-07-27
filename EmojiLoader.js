import * as t from "./cc.js";
import * as e from "./cc.js";
import * as o from "./EmojiInGameConfig.js";
import * as i from "./EmojiResources.js";
import * as s from "./EmojiConfig.js";
import * as c from "./cv.js";

function main() {
    t._RF.push({}, "305a8F654xOWrER030zmhst", "EmojiLoader", void 0);
    class a {
        constructor() {
            a.config.loadConfig(o)
        }
        static get instance() {
            return null === a._instance && (a._instance = new a), a._instance
        }
        initialize() {
            if (!c.appConfig.getGameConfig().fullscreenEmojiEnabled) return;
            const n = Date.now();
            a.resources.loadAll().then((() => {
                e(`>>>>> [EmojiResources loadAll successfully in ${(Date.now()-n)/1e3}s]`)
            })).catch((() => {
                e(`>>>>> [EmojiResources loadAll failed in ${(Date.now()-n)/1e3}s]`)
            }))
        }
    }
    n("default", a), a.resources = i.instance, a.config = s.instance, a._instance = null, t._RF.pop()
}