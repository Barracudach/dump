import * as s from "./cc.js";

function main() {
    s._RF.push({}, "7c301i/elpEarL4wXnZbN7i", "Deque", void 0);
    t("Deque", class {
        constructor() {
            this._items = null, this._count = 0, this._lowestCount = 0, this._items = {}, this._count = 0, this._lowestCount = 0
        }
        push_front(t) {
            if (this.empty()) this.push_back(t);
            else if (this._lowestCount > 0) --this._lowestCount, this._items[this._lowestCount] = t;
            else {
                for (let t = this._count; t > 0; --t) this._items[t] = this._items[t - 1];
                ++this._count, this._items[0] = t
            }
        }
        push_back(t) {
            this._items[this._count] = t, ++this._count
        }
        pop_front() {
            if (this.empty()) return null;
            let t = this._items[this._lowestCount];
            return delete this._items[this._lowestCount], ++this._lowestCount, t
        }
        pop_back() {
            if (this.empty()) return null;
            --this._count;
            let t = this._items[this._count];
            return delete this._items[this._count], t
        }
        front() {
            return this.empty() ? null : this._items[this._lowestCount]
        }
        back() {
            return this.empty() ? null : this._items[this._count - 1]
        }
        at(t, s = !0) {
            s && (t += this._lowestCount);
            let i = this._items[t];
            return void 0 !== i && null != i ? i : null
        }
        empty() {
            return 0 === this.size()
        }
        clear() {
            this._items = {}, this._count = 0, this._lowestCount = 0
        }
        size() {
            return this._count - this._lowestCount
        }
        toString() {
            if (this.empty()) return "";
            let t = `${this._items[this._lowestCount]}`;
            for (let s = this._lowestCount + 1; s < this._count; ++s) t = `${t},${this._items[s]}`;
            return t
        }
    }), s._RF.pop()
}