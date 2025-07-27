import * as t from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as s from "./cv.js";
import * as i from "./WebviewHelperData.js";

function main() {
    t._RF.push({}, "16781SJPEhGMoeKbTqPrJxg", "WebviewHelper", void 0);
    const o = e("WebviewMessages", {
        keyboardState: "changeIframeHeightViaKeyboardStatus",
        initialData: "initialData",
        segmentData: "segmentData",
        openFreshchat: "openFreshchat",
        ChangeActiveTab: "changeActiveTab",
        GeoComplyTokenRenewed: "geoComplyTokenRenewed"
    });
    class r {
        static sendSegmentData(e) {
            r.sendMessageToWebview(e, {
                name: o.segmentData,
                data: i.getSegmentParams()
            })
        }
        static sendMessageToWebview(e, t) {
            if (e.state == a.EventType.LOADED)
                if (n.isBrowser) e.nativeWebView.contentWindow.postMessage(t, "*");
                else {
                    const a = `cocosEvent(${JSON.stringify(t)})`;
                    e.evaluateJS(a)
                }
        }
        static handleNewWindowEvent(e) {
            const t = e.url + r.serializeObjectToQueryParams(e.params);
            t.toLowerCase().startsWith("mailto:") ? n.openURL(t) : s.native.openUrl(t)
        }
        static serializeObjectToQueryParams(e) {
            return e ? "?" + Object.keys(e).reduce((function(t, a) {
                return t.push(a + "=" + encodeURIComponent(e[a])), t
            }), []).join("&") : ""
        }
    }
    e("WebviewHelper", r), t._RF.pop()
}