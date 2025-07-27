import * as t from "./cjs-loader.mjs.js";
import * as E from "./minimal.js";

function main() {
    let s;
    _("default", void 0);
    const R = _("__cjsMetaURL", e.meta.url);
    t.define(R, (function(e, t, E, R, n) {
        var a, r, o, i = t("protobufjs/minimal.js"),
            T = i.Reader,
            S = i.Writer,
            u = i.util,
            A = i.roots.default || (i.roots.default = {});
        A.data = ((o = {}).CMD = (a = {}, (r = Object.create(a))[a[0] = "CMD_DUMMY"] = 0, r[a[60001] = "GET_DATA_REQ"] = 60001, r[a[60002] = "GET_DATA_RESP"] = 60002, r[a[60004] = "GET_PUBLIC_DATA_REQ"] = 60004, r[a[60005] = "GET_PUBLIC_DATA_RESP"] = 60005, r[a[60007] = "HOME_REQ"] = 60007, r[a[60008] = "HOME_RESP"] = 60008, r[a[60011] = "ROOM_RECORDS_LIST_REQ"] = 60011, r[a[60012] = "ROOM_RECORDS_LIST_RESP"] = 60012, r[a[60014] = "ROOM_RECORD_REQ"] = 60014, r[a[60015] = "ROOM_RECORD_RESP"] = 60015, r[a[60017] = "GAME_HAND_REQ"] = 60017, r[a[60018] = "GAME_HAND_RESP"] = 60018, r[a[60021] = "GAME_HAND_TEST_REQ"] = 60021, r[a[60022] = "GAME_HAND_TEST_RESP"] = 60022, r[a[60024] = "DO_FAVORITE_REQ"] = 60024, r[a[60025] = "DO_FAVORITE_RESP"] = 60025, r[a[60027] = "FAVORITE_HAND_REQ"] = 60027, r[a[60028] = "FAVORITE_HAND_RESP"] = 60028, r[a[60031] = "FAVORITE_LIST_NEW_REQ"] = 60031, r[a[60032] = "FAVORITE_LIST_NEW_RESP"] = 60032, r[a[60034] = "GET_BIG_BLIND_REQ"] = 60034, r[a[60035] = "GET_BIG_BLIND_RESP"] = 60035, r[a[60037] = "GET_HAS_BUYIN_REQ"] = 60037, r[a[60038] = "GET_HAS_BUYIN_RESP"] = 60038, r[a[60041] = "GET_ROUND_INFO_REQ"] = 60041, r[a[60042] = "GET_ROUND_INFO_RESP"] = 60042, r[a[60044] = "GET_UID_HAND_COUNT_REQ"] = 60044, r[a[60045] = "GET_UID_HAND_COUNT_RESP"] = 60045, r[a[60047] = "GET_HAND_COUNT_REQ"] = 60047, r[a[60048] = "GET_HAND_COUNT_RESP"] = 60048, r[a[60051] = "GET_PLAYER_LATEST_REQ"] = 60051, r[a[60052] = "GET_PLAYER_LATEST_RESP"] = 60052, r[a[60055] = "JF_GAME_HAND_REQ"] = 60055, r[a[60056] = "JF_GAME_HAND_RESP"] = 60056, r[a[60057] = "JF_ROOM_LIST_REQ"] = 60057, r[a[60058] = "JF_ROOM_LIST_RESP"] = 60058, r[a[60060] = "JF_GAME_UUIDS_REQ"] = 60060, r[a[60061] = "JF_GAME_UUIDS_RESP"] = 60061, r[a[60062] = "JF_DATA_REQ"] = 60062, r[a[60063] = "JF_DATA_RESP"] = 60063, r[a[60064] = "GAME_REVIEW_LIST_REQ"] = 60064, r[a[60065] = "GAME_REVIEW_LIST_RESP"] = 60065, r[a[60068] = "DELETE_FAVORITE_LIST_REQ"] = 60068, r[a[60069] = "DELETE_FAVORITE_LIST_RESP"] = 60069, r[a[60071] = "FORCE_SHOW_CARD_REQ"] = 60071, r[a[60072] = "FORCE_SHOW_CARD_RSP"] = 60072, r[a[60074] = "SEND_CARD_FUN_REQ"] = 60074, r[a[60075] = "SEND_CARD_FUN_RSP"] = 60075, r[a[60077] = "GAME_UUIDS_REQ"] = 60077, r[a[60078] = "GAME_UUIDS_RESP"] = 60078, r[a[60080] = "GAME_BIG_POT_LIST_REQ"] = 60080, r[a[60081] = "GAME_BIG_POT_LIST_RSP"] = 60081, r), o.DataMessage = function() {
            function _(_) {
                if (_)
                    for (var e = Object.keys(_), t = 0; t < e.length; ++t) null != _[e[t]] && (this[e[t]] = _[e[t]])
            }
            return _.prototype.message = "", _.create = function(e) {
                return new _(e)
            }, _.encode = function(_, e) {
                return e || (e = S.create()), null != _.message && Object.hasOwnProperty.call(_, "message") && e.uint32(10).string(_.message), e
            }, _.encodeDelimited = function(_, e) {
                return this.encode(_, e).ldelim()
            }, _.decode = function(_, e) {
                _ instanceof T || (_ = T.create(_));
                for (var t = void 0 === e ? _.len : _.pos + e, E = new A.data.DataMessage; _.pos < t;) {
                    var s = _.uint32();
                    switch (s >>> 3) {
                        case 1:
                            E.message = _.string();
                            break;
                        default:
                            _.skipType(7 & s)
                    }
                }
                return E
            }, _.decodeDelimited = function(_) {
                return _ instanceof T || (_ = new T(_)), this.decode(_, _.uint32())
            }, _.verify = function(_) {
                return "object" != typeof _ || null === _ ? "object expected" : null != _.message && _.hasOwnProperty("message") && !u.isString(_.message) ? "message: string expected" : null
            }, _.fromObject = function(_) {
                if (_ instanceof A.data.DataMessage) return _;
                var e = new A.data.DataMessage;
                return null != _.message && (e.message = String(_.message)), e
            }, _.toObject = function(_, e) {
                e || (e = {});
                var t = {};
                return e.defaults && (t.message = ""), null != _.message && _.hasOwnProperty("message") && (t.message = _.message), t
            }, _.prototype.toJSON = function() {
                return this.constructor.toObject(this, i.util.toJSONOptions)
            }, _.getTypeUrl = function(_) {
                return void 0 === _ && (_ = "type.googleapis.com"), _ + "/data.DataMessage"
            }, _
        }(), o), E.exports = A, s = _("default", E.exports)
    }), (() => ({
        "protobufjs/minimal.js": E
    })))
}