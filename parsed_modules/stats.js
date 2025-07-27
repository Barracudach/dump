import * as e from "./cc.js";

function main() {
    e._RF.push({}, "ecf6eQk0IZPFYiClmovOw2+", "stats", void 0);
    class s {
        constructor() {
            this.metrics = []
        }
        increment(t, e = 1, s) {
            this.metrics.push({
                metric: t,
                value: e,
                tags: s ?? [],
                type: "counter",
                timestamp: Date.now()
            })
        }
        gauge(t, e, s) {
            this.metrics.push({
                metric: t,
                value: e,
                tags: s ?? [],
                type: "gauge",
                timestamp: Date.now()
            })
        }
        flush() {
            const t = this.metrics.map((t => ({
                ...t,
                tags: t.tags.join(",")
            })));
            console.table ? console.table(t) : console.log(t), this.metrics = []
        }
        serialize() {
            return this.metrics.map((t => {
                return {
                    m: t.metric,
                    v: t.value,
                    t: t.tags,
                    k: (e = t.type, {
                        gauge: "g",
                        counter: "c"
                    } [e]),
                    e: t.timestamp
                };
                var e
            }))
        }
    }
    t("CoreStats", s);
    t("NullStats", class extends s {
        gauge(...t) {}
        increment(...t) {}
        flush(...t) {}
        serialize(...t) {
            return []
        }
    }), e._RF.pop()
}