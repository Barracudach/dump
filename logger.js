import * as s from "./cc.js";

function main() {
    s._RF.push({}, "bdf3d9H76JPQ6hCTQzeKRzl", "logger", void 0);
    e("CoreLogger", class {
        constructor() {
            this._logs = []
        }
        log(e, s, t) {
            const o = new Date;
            this._logs.push({
                level: e,
                message: s,
                time: o,
                extras: t
            })
        }
        get logs() {
            return this._logs
        }
        flush() {
            if (this.logs.length > 1) {
                const e = this._logs.reduce(((e, s) => {
                    var t;
                    const o = {
                        ...s,
                        json: JSON.stringify(s.extras, null, " "),
                        extras: s.extras
                    };
                    delete o.time;
                    let l = (null == (t = s.time) ? void 0 : t.toISOString()) ?? "";
                    return e[l] && (l = `${l}-${Math.random()}`), {
                        ...e,
                        [l]: o
                    }
                }), {});
                console.table ? console.table(e) : console.log(e)
            } else this.logs.forEach((e => {
                const {
                    level: s,
                    message: t,
                    extras: o
                } = e;
                "info" === s || "debug" === s ? console.log(t, o ?? "") : console[s](t, o ?? "")
            }));
            this._logs = []
        }
    }), s._RF.pop()
}