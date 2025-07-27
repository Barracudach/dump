import * as e from "./cc.js";
import * as c from "./abort.js";
import * as i from "./fetch.js";

function main() {
    e._RF.push({}, "a7eafvwT0dF/oduWYcVIHip", "http-client", void 0);
    t("FetchHTTPClient", class {
        constructor(t) {
            this._fetch = void 0, this._fetch = t ?? i
        }
        async makeRequest(t) {
            const [e, i] = c(t.httpRequestTimeout), n = {
                url: t.url,
                method: t.method,
                headers: t.headers,
                body: t.body,
                signal: e
            };
            return this._fetch(t.url, n).finally((() => clearTimeout(i)))
        }
    }), e._RF.pop()
}