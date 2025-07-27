import * as o from "./cc.js";

function main() {
    o._RF.push({}, "251c8g1MVBPR606IFmc/z9H", "holdemSidePot", void 0);
    class s {
        constructor(t, o, s, i, e) {
            this.seatNum = void 0, this.profit = void 0, this.totalBet = void 0, this.coinFromPots = void 0, this.coinInPotsNotYetFound = void 0, this.leftCoins = void 0, this.pots = void 0, this.wasFoundPots = void 0, this.seatNum = t, this.profit = o, this.totalBet = s, this.coinFromPots = i, this.coinInPotsNotYetFound = i, this.leftCoins = this.leftCoins, this.pots = [], this.wasFoundPots = !1
        }
    }
    t("HasPotPlayer", s);
    class i {
        constructor(t, o) {
            this.idx = void 0, this.value = void 0, this.players = void 0, this.idx = t, this.value = o, this.players = []
        }
        getCoinRemain() {
            let t = 0;
            return this.players.forEach((o => {
                t += o.coinFromPot
            })), this.value - t
        }
        static mapSidePotsToPlayers(t, o, e) {
            let n = [];
            o.forEach(((t, o) => {
                let s = new i(o, t);
                n.push(s)
            }));
            let a = [];
            t.forEach((t => {
                if (t.getPot) {
                    let o = t.leftCoins - t.profit,
                        i = t.leftCoins - e[t.seatNum].leftCoin,
                        n = new s(t.seatNum, t.profit, o, i, t.leftCoins);
                    a.push(n)
                }
            }));
            let h = !1,
                r = 0;
            for (; !h && r < 20;) a.sort(((t, o) => o.coinInPotsNotYetFound - t.coinInPotsNotYetFound)), n.forEach((t => {
                for (let o = 0; o < a.length; o++) t.getCoinRemain() > 0 && t.getCoinRemain() % a[o].coinFromPots == 0 && (a[o].pots.push({
                    sidePot: t
                }), a[o].wasFoundPots = !0, a[o].coinInPotsNotYetFound = 0, t.players.push({
                    seatNum: a[o].seatNum,
                    coinFromPot: a[o].coinFromPots
                }))
            })), h = !0, a.forEach((t => {
                t.wasFoundPots || (h = !1)
            })), r += 1;
            a.sort(((t, o) => o.coinInPotsNotYetFound - t.coinInPotsNotYetFound)), a[0].wasFoundPots || n.forEach((t => {
                t.getCoinRemain() > 0 && a[0].pots.push({
                    sidePot: t
                })
            })), a.forEach((t => {
                e[t.seatNum].potsInfo = t.pots
            }))
        }
    }
    t("SidePot", i), o._RF.pop()
}