import * as e from "./cc.js";
import * as s from "./httpApis.js";
import * as i from "./httpApiQueueRequests.js";

function main() {
    e._RF.push({}, "bee5bsgi4RHcIi8O81nRZY1", "httpApiTournamentList", void 0);
    t("HttpApiTournamentList", class {
        static requestMttTournamentList(t, e, u, n = 6e3) {
            i.requestHttpApi(s.requestMttTournamentList, (e => {
                t(e)
            }), (t => {
                e(t)
            }), u, n)
        }
    }), e._RF.pop()
}