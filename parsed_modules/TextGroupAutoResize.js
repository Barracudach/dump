import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as h from "./cv.js";

function main() {
    var p, c, g, d, f, b, _, x, m, G, y, z, T, L, w, S, E, R, v, C, k, A, F, M, U, V, P, D;
    o._RF.push({}, "a9bc9L66CVJLZOsPHbBJnJr", "TextGroupAutoResize", void 0);
    const {
        ccclass: J,
        property: O
    } = s;
    let j = t("TextGroupConfig", (p = J("TextGroupConfig"), c = O({
        type: [n],
        tooltip: "Array of labels in this group"
    }), g = O({
        tooltip: "Custom spacing between labels in this group (optional)",
        visible: function() {
            return this.labels.length > 1
        }
    }), d = O({
        tooltip: "If true, only adjust font size but keep original label positions"
    }), p((_ = e((b = class {
        constructor() {
            i(this, "labels", _, this), i(this, "spacing", x, this), i(this, "keepAnchor", m, this)
        }
    }).prototype, "labels", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), x = e(b.prototype, "spacing", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), m = e(b.prototype, "keepAnchor", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), f = b)) || f));
    t("TextGroupAutoResize", (G = J("TextGroupAutoResize"), y = O({
        type: [j],
        tooltip: "Array of text groups to layout"
    }), z = O({
        tooltip: "Maximum font size to use"
    }), T = O({
        tooltip: "Minimum font size to use"
    }), L = O({
        tooltip: "Padding from left side of the container"
    }), w = O({
        tooltip: "Padding from right side of the container"
    }), S = O({
        tooltip: "Space between different groups"
    }), E = O({
        tooltip: "Container node that holds the text groups"
    }), R = O({
        tooltip: "Automatically update layout when text changes",
        visible: !0
    }), G((k = e((C = class extends r {
        constructor(...t) {
            super(...t), i(this, "textGroups", k, this), i(this, "maxFontSize", A, this), i(this, "minFontSize", F, this), i(this, "paddingLeft", M, this), i(this, "paddingRight", U, this), i(this, "groupGap", V, this), i(this, "container", P, this), i(this, "autoUpdate", D, this), this._previousTextValues = new Map
        }
        layoutTextGroups(t) {
            const e = (t || this.textGroups).filter((t => t.labels.some((t => t && t.node.active))));
            if (0 === e.length) return;
            const i = (this.container || this.node).getComponent(a).width,
                o = i - (this.paddingLeft + this.paddingRight);
            let n = this.maxFontSize,
                s = !1;
            do {
                e.forEach((t => {
                    t.labels.forEach((t => {
                        t && (t.fontSize = n)
                    }))
                }));
                let t = 0;
                e.length > 0 && (e.forEach((e => {
                    let i = 0;
                    e.labels.forEach(((t, o) => {
                        if (!t) return;
                        const n = this._getLabelSize(t);
                        i += n.width, o < e.labels.length - 1 && (i += e.spacing)
                    })), t += i
                })), e.length > 1 && (t += (e.length - 1) * this.groupGap)), s = t <= o || n <= this.minFontSize, s || (n -= 1)
            } while (!s);
            const r = e.filter((t => !t.keepAnchor));
            r.length > 0 && this._positionTextGroups(r, i), this.autoUpdate && e.forEach((t => {
                t.labels.forEach((t => {
                    t && this._previousTextValues.set(t, t.string)
                }))
            }))
        }
        onLoad() {
            this.container || (this.container = this.node)
        }
        onEnable() {
            this._setupTextTracking(), this._updateLayout()
        }
        onDisable() {
            this._clearScheduledUpdate(), this._previousTextValues.clear()
        }
        _setupTextTracking() {
            this.autoUpdate && (this._previousTextValues.clear(), this.textGroups.forEach((t => {
                t.labels.forEach((t => {
                    t && this._previousTextValues.set(t, t.string)
                }))
            })), this._scheduleTextCheck())
        }
        _scheduleTextCheck() {
            this._clearScheduledUpdate(), this.schedule(this._checkForTextChanges, .1, l.REPEAT_FOREVER, 0)
        }
        _clearScheduledUpdate() {
            this.unschedule(this._checkForTextChanges)
        }
        _checkForTextChanges() {
            if (!this.autoUpdate) return;
            let t = !1;
            this.textGroups.forEach((e => {
                e.labels.forEach((e => {
                    if (!e) return;
                    const i = this._previousTextValues.get(e),
                        o = e.string;
                    i !== o && (this._previousTextValues.set(e, o), t = !0)
                }))
            })), t && this._updateLayout()
        }
        _updateLayout() {
            this.scheduleOnce(this.layoutTextGroups.bind(this, this.textGroups))
        }
        _positionGroup(t, e) {
            if (t.keepAnchor) return;
            let i = e;
            t.labels.forEach(((e, o) => {
                if (!e) return;
                const n = this._getLabelSize(e),
                    s = i + n.width * e.node.getComponent(a).anchorX;
                e.node.setPosition(s, e.node.position.y), i += n.width + t.spacing
            }))
        }
        _positionTextGroups(t, e) {
            const i = e / 2,
                o = t.map((t => {
                    let e = 0;
                    return t.labels.forEach(((i, o) => {
                        if (!i) return;
                        const n = this._getLabelSize(i);
                        e += n.width, o < t.labels.length - 1 && (e += t.spacing)
                    })), e
                }));
            if (1 === t.length) {
                const e = -o[0] / 2;
                this._positionGroup(t[0], e)
            } else if (2 === t.length) {
                this._positionGroup(t[0], -i + this.paddingLeft);
                const e = i - this.paddingRight - o[1];
                this._positionGroup(t[1], e)
            } else if (3 === t.length) {
                this._positionGroup(t[0], -i + this.paddingLeft);
                const e = i - this.paddingRight - o[2];
                this._positionGroup(t[2], e);
                const n = (-i + this.paddingLeft + o[0] + e) / 2 - o[1] / 2;
                this._positionGroup(t[1], n)
            } else this._positionMultipleGroups(t, o, e)
        }
        _positionMultipleGroups(t, e, i) {
            e.reduce(((t, e) => t + e), 0) + (t.length - 1) * this.groupGap <= i - (this.paddingLeft + this.paddingRight) ? this._distributeGroupsEvenly(t, e, i) : this._distributeGroupsCompactly(t, e, i)
        }
        _distributeGroupsEvenly(t, e, i) {
            const o = e.reduce(((t, e) => t + e), 0),
                n = i / 2,
                s = i - (this.paddingLeft + this.paddingRight) - o,
                r = t.length > 1 ? s / (t.length - 1) : 0;
            let a = -n + this.paddingLeft;
            t.forEach(((t, i) => {
                this._positionGroup(t, a), a += e[i] + r
            }))
        }
        _distributeGroupsCompactly(t, e, i) {
            const o = i / 2,
                n = Math.max(5, this.groupGap / 2);
            let s = -o + this.paddingLeft;
            t.forEach(((r, a) => {
                if (s + e[a] > o - this.paddingRight && a > 0) {
                    const n = t.length - a,
                        r = e.slice(a).reduce(((t, e) => t + e), 0);
                    r + 2 * (n - 1) <= i - (this.paddingLeft + this.paddingRight) - s + (-o + this.paddingLeft) && (s = Math.min(s, o - this.paddingRight - r - 2 * (n - 1)))
                }
                this._positionGroup(r, s), s += e[a] + n
            }))
        }
        _getLabelSize(t) {
            if (h && h.resMgr && h.resMgr.getLabelStringSize) return h.resMgr.getLabelStringSize(t);
            {
                const e = t.string,
                    i = t.fontSize;
                return new u(e.length * i * .6, i)
            }
        }
    }).prototype, "textGroups", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), A = e(C.prototype, "maxFontSize", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 32
        }
    }), F = e(C.prototype, "minFontSize", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 18
        }
    }), M = e(C.prototype, "paddingLeft", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 32
        }
    }), U = e(C.prototype, "paddingRight", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 32
        }
    }), V = e(C.prototype, "groupGap", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 40
        }
    }), P = e(C.prototype, "container", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = e(C.prototype, "autoUpdate", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), v = C)) || v));
    o._RF.pop()
}