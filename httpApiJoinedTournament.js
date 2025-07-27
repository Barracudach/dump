import * as e from "./cc.js";
import * as n from "./httpApis.js";
import * as u from "./httpApiQueueRequests.js";

function main() {
    e._RF.push({}, "b443eh31PVKfpdvW0Ddf9d6", "httpApiJoinedTournament", void 0);
    t("HttpApiJoinedTournament", class {
        static requestPlayerJoinedTournaments(t, e, s) {
            u.requestHttpApi(n.requestPlayerJoinedTournaments, (n => {
                t && t(n), e && e()
            }), (t => {
                s && s(t), e && e()
            }))
        }
    }), e._RF.pop()
}