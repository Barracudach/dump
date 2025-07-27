import * as r from "./cc.js";
import * as t from "./CommonScriptsDependencies.js";

function main() {
    r._RF.push({}, "5057bG0lKZDUI3hnhnNsPI1", "CrowdinAssetFetcher", void 0);
    e("CrowdinAssetFetcher", class {
        async get(e) {
            return new Promise(((r, n) => {
                const o = new XMLHttpRequest;
                o.open("GET", e, !0), o.onload = function() {
                    4 == o.readyState && (200 == o.status ? r(JSON.parse(o.responseText)) : (t.getDeps().logError("crowdin_asset_fetch_failed", {
                        url: e,
                        error: o.statusText
                    }), n(o.statusText)))
                }, o.onerror = function() {
                    t.getDeps().logError("crowdin_asset_fetch_failed", {
                        url: e,
                        error: "onError"
                    }), n("onError")
                }, o.ontimeout = function() {
                    t.getDeps().logError("crowdin_asset_fetch_failed", {
                        url: e,
                        error: "onTimeout"
                    }), n("onTimeout")
                }, o.send(null)
            }))
        }
    }), r._RF.pop()
}