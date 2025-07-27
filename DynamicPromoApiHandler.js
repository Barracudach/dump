import * as t from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cv.js";
import * as n from "./CrashTracing.js";
import * as o from "./CrashTracing.js";

function main() {
    r._RF.push({}, "5e6edQau51Iq55+R7c7aETW", "DynamicPromoApiHandler", void 0);
    class i {
        constructor() {
            this.fetchInProgress = void 0, this.retryCount = void 0, this.fetchInProgress = !1, this.retryCount = 0
        }
        fetchPromos(e, r, c, a, u) {
            this.fetchInProgress || (this.retryCount = 0);
            const h = i.DYNAMIC_PROMOTIONS_ENDPOINT.replace("{country}", e).replace("{platform}", r).replace("{licenseType}", c).replace("{version}", a);
            this.fetchInProgress = !0, s.http.sendRequestV2(h, {}, (e => {
                const r = e;
                this.fetchInProgress = !1, u(r)
            }), (s => {
                if (this.retryCount >= i.MAX_RETRIES) return this.fetchInProgress = !1, t("Api request failed, Error: ", s), o.Trace(n.DynamicPromotions, "api_request_failure", {
                    error: s
                }, !1, !0), void u([]);
                ++this.retryCount, this.fetchPromos(e, r, c, a, u)
            }), s.http.HttpRequestType.GET)
        }
    }
    e("DynamicPromoApiHandler", i), i.DYNAMIC_PROMOTIONS_ENDPOINT = "api/v1/cms/dynamic-promotions?countryIso2Code={country}&platform={platform}&licenseType={licenseType}&version={version}", i.MAX_RETRIES = 3, r._RF.pop()
}