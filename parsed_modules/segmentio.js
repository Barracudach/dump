import * as n from "./cc.js";
import * as t from "./publisher.js";
import * as i from "./env.js";

function main() {
    function u(e) {
        function n(n) {
            return function(e) {
                const n = i();
                "node" === n && e.updateEvent("_metadata.nodeVersion", process.version), e.updateEvent("_metadata.jsRuntime", n)
            }(n), e.enqueue(n)
        }
        return {
            name: "Segment.io",
            type: "destination",
            version: "1.0.0",
            isLoaded: () => !0,
            load: () => Promise.resolve(),
            alias: n,
            group: n,
            identify: n,
            page: n,
            screen: n,
            track: n
        }
    }
    e("createNodePlugin", u), n._RF.push({}, "a7658GcOddE95y5cHThG0ud", "segmentio", void 0);
    e("createConfiguredNodePlugin", ((e, n) => {
        const i = new t(e, n);
        return {
            publisher: i,
            plugin: u(i)
        }
    }));
    n._RF.pop()
}