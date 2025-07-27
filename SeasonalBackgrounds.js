import * as t from "./cc.js";

function main() {
    t._RF.push({}, "d4db6YSLK1Do7Xdrr328ZoO", "SeasonalBackgrounds", void 0);
    class a {
        constructor(n) {
            this.seasonBackgroundData = {}, this.seasonBackgroundData = n
        }
        static getInstance(n) {
            return null !== a.instance || (a.instance = new a(n)), a.instance
        }
        static findOldestValidSeason(n) {
            if (null === this.instance) return "";
            let t = "",
                e = "";
            for (const s in a.instance.seasonBackgroundData)
                if (!0 === Object.prototype.hasOwnProperty.call(this.instance.seasonBackgroundData, s)) {
                    const c = a.instance.seasonBackgroundData[s],
                        o = new Date(c.startDate),
                        r = c.endDate ? new Date(c.endDate) : null;
                    o <= n && (n < r || null === r) && (!e || o < new Date(e)) && (e = c.startDate, t = c.name)
                } return t
        }
    }
    n("default", a), a.instance = null, t._RF.pop()
}