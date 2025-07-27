import * as t from "./cc.js";
import * as e from "./gs_protocol.mjs_cjs=&original=.js";
import * as r from "./cv.js";
import * as s from "./InsuranceAllInItem.js";
import * as n from "./InsuranceOtherCardItem.js";
import * as u from "./InsurancePublicCardItem.js";

function main() {
    let _;
    a("InsuranceData", void 0), t._RF.push({}, "cee7bB/bwJBrZi8K3L0rKPV", "InsuranceData", void 0),
        function(a) {
            let t = function(a) {
                return a[a.TYPE_OLD = 0] = "TYPE_OLD", a[a.TYPE_NEW = 1] = "TYPE_NEW", a
            }({});
            a.InsuranceTypeMode = t;
            let _ = function(a) {
                return a[a.VIEW_NORMAL = 0] = "VIEW_NORMAL", a[a.VIEW_REPLAY = 1] = "VIEW_REPLAY", a
            }({});
            a.InsuranceViewMode = _;
            let i = function(a) {
                return a[a.E_IPT_IDX_ThirdPot = 0] = "E_IPT_IDX_ThirdPot", a[a.E_IPT_IDX_HalfPot = 1] = "E_IPT_IDX_HalfPot", a[a.E_IPT_IDX_FullPot = 2] = "E_IPT_IDX_FullPot", a[a.E_IPT_IDX_EighthPot = 3] = "E_IPT_IDX_EighthPot", a[a.E_IPT_IDX_FifthPot = 4] = "E_IPT_IDX_FifthPot", a[a.E_IPT_IDX_BreakEven = 5] = "E_IPT_IDX_BreakEven", a[a.E_IPT_IDX_EqualInterest = 6] = "E_IPT_IDX_EqualInterest", a
            }({});
            a.InsurancePayToggleIdx = i;
            class d {
                constructor() {
                    this.insuranceMode = 0, this.isBuyInsurance = !1, this.insuredAmounts = 0, this.insureWinBet = 0, this.buyOutsID = [], this.round = 0, this.shot = !1, this.option = 0, this.insuranceData = null, this.insurancePlayerInfo = []
                }
            }
            a.InsuranceReplayData = d;
            a.InsuranceData = class {
                constructor() {
                    this._typeMode = t.TYPE_OLD, this._viewMode = _.VIEW_NORMAL, this._data_Insurance = null, this._data_InsuranceReplay = null, this._data_vPlayerCards = [], this._data_vPublicCards = [], this._data_vOtherCards = [], this._data_vOutsCards = [], this._data_bMirco = !1, this._data_bSelfBuy = !1, this._data_nGameid = 0
                }
                setViewMode(a) {
                    this._viewMode = a
                }
                setTypeMode(a) {
                    this._typeMode = a
                }
                parseInsuranceData(a, t, r) {
                    e.StringTools.clearArray(this._data_vPublicCards), e.StringTools.clearArray(this._data_vOutsCards), e.StringTools.clearArray(this._data_vOtherCards), e.StringTools.clearArray(this._data_vPlayerCards), this._data_Insurance = u.protocol.NoticeGameInsurance.create(t), this._data_bMirco = r, this._data_bSelfBuy = t.buyer_uid === e.dataHandler.getUserData().u32Uid, this._data_nGameid = a;
                    for (let e = 0; e < t.public_cards.length; ++e) {
                        let r = new n;
                        r.gameid = a, r.data = u.protocol.CardItem.create(t.public_cards[e]), this._data_vPublicCards.push(r)
                    }
                    for (let a = 0; a < t.outs.length; ++a) this._data_vOutsCards.push(u.protocol.OutItem.create(t.outs[a]));
                    this._data_vOutsCards.sort(((a, t) => a.card.number > t.card.number ? -1 : a.card.number < t.card.number ? 1 : t.card.suit - a.card.suit));
                    for (let e = 0; e < t.foldCards.length; ++e) {
                        let r = new s;
                        r.gameid = a, r.data = u.protocol.FoldItem.create(t.foldCards[e]), this._data_vOtherCards.push(r)
                    }
                    this._data_vOtherCards.sort(((a, t) => {
                        if (a.data.inOuts === t.data.inOuts) return a.data.card.number > t.data.card.number ? -1 : a.data.card.number < t.data.card.number ? 1 : t.data.card.suit - a.data.card.suit;
                        {
                            let r = e.Number(a.data.inOuts);
                            return e.Number(t.data.inOuts) - r
                        }
                    }))
                }
                parseInsuranceReplayData(a, t, r) {
                    try {
                        this._data_InsuranceReplay = new d, this._data_InsuranceReplay.shot = t.Shot, this._data_InsuranceReplay.option = t.Option, this._data_InsuranceReplay.round = e.Number(t.Round), this._data_InsuranceReplay.isBuyInsurance = t.Isbuyinsurance, this._data_InsuranceReplay.insuredAmounts = e.Number(t.Amounts), this._data_InsuranceReplay.insureWinBet = e.Number(t.InsureWinBet), this._data_InsuranceReplay.insuranceMode = e.Number(t.InsuranceMode), this._data_InsuranceReplay.insurancePlayerInfo = t.BoughtInsurancePlayerInfo, this._data_InsuranceReplay.isBuyInsurance && (this._data_InsuranceReplay.buyOutsID = t.BuyOutsId);
                        let s = u.protocol.NoticeGameInsurance.fromObject(t.IncuranceInfo);
                        this._data_InsuranceReplay.insuranceData = s, this.parseInsuranceData(a, s, r)
                    } catch (a) {
                        this._data_InsuranceReplay = null, console.error("parseInsuranceReplayData error: " + a)
                    }
                }
                addPlayerCardsData(a, t, e, s, n) {
                    let u = new r;
                    u.nUID = a, u.nOutsNum = e, u.bPurchaser = n, u.sPlayerName = t, u.nGameID = this._data_nGameid, u.vCards = s.slice(0, s.length), this._data_vPlayerCards.push(u)
                }
                getViewMode() {
                    return this._viewMode
                }
                getTypeMode() {
                    return this._typeMode
                }
                getDataInsurance() {
                    return this._data_Insurance
                }
                getDataInsuranceReplay() {
                    return this._data_InsuranceReplay
                }
                getDataPublicCards() {
                    return this._data_vPublicCards
                }
                getDataOutsCards() {
                    return this._data_vOutsCards
                }
                getDataOtherCards() {
                    return this._data_vOtherCards
                }
                getDataPlayerCards() {
                    return this._data_vPlayerCards
                }
                getDataIsMirco() {
                    return this._data_bMirco
                }
                getDataIsSelfBuy() {
                    return this._data_bSelfBuy
                }
                getDataGameID() {
                    return this._data_nGameid
                }
            }
        }(_ || (_ = a("InsuranceData", {}))), t._RF.pop()
}