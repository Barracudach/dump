import * as a from "./cc.js";

function main() {
    a._RF.push({}, "889a9M35X1D+ojJXe8Kpan+", "MttDetailStatsHelper", void 0);
    class r {
        static parseTableDetailList(e) {
            return e.map((e => ({
                tableId: e.TableId,
                playerCount: e.PlayersNum,
                minCoins: e.MinCoins,
                maxCoins: e.MaxCoins
            })))
        }
        static getPlayerDetail(e, a, r, t, n, i, s) {
            return {
                playerList: e.map((e => ({
                    playerId: e.UserId,
                    joinStatus: e.JoinStatus,
                    rank: e.Rank,
                    index: e.Index,
                    bounty: e.Bounty,
                    playerName: e.PlayerName,
                    prize: e.Prize,
                    avatarPath: e.Avatar,
                    coins: e.Coins,
                    currency: r,
                    areaCode: e.AreaCode,
                    area: e.Area,
                    convertCurrency: i,
                    displayCurrency: t,
                    currencyRate: n
                }))),
                gameStatus: a.Status,
                tournamentMode: a.TournamentMode,
                currency: r,
                bigBlind: s,
                convertCurrency: i,
                displayCurrency: t,
                currencyRate: n
            }
        }
        static getPlayersDetailList(e, a, r, t, n, i, s) {
            return e.map((e => ({
                playerId: e.UserId,
                joinStatus: e.JoinStatus,
                rank: e.Rank,
                index: e.Index,
                bounty: e.Bounty,
                playerName: e.PlayerName,
                prize: e.Prize,
                avatarPath: e.Avatar,
                coins: e.Coins,
                gameStatus: a,
                tournamentMode: r,
                currency: t,
                areaCode: e.AreaCode,
                area: e.Area,
                convertCurrency: s,
                displayCurrency: n,
                currencyRate: i
            })))
        }
        static getTablePlayerInfo(e) {
            return {
                playerName: e.PlayerName,
                areaCode: e.AreaCode,
                area: e.Area,
                coins: e.Stack
            }
        }
        static getTablePlayerInfoList(e, a, t = 0, n = 0) {
            return {
                playerList: e.map((e => r.getTablePlayerInfo(e))),
                bigBlind: a,
                playerId: t,
                tableId: n
            }
        }
    }
    e("MttDetailStatsHelper", r), a._RF.pop()
}