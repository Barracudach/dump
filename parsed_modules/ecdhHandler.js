import * as t from "./cc.js";

function main() {
    t._RF.push({}, "b2d44/MdRJB/54RAGZEfcmk", "ecdhHandler", void 0);
    class i {
        constructor() {
            this.q = "", this.a = "", this.b = "", this.gx = "", this.gy = "", this.n = "", this.rng = null, this.server_pub_x = "", this.server_pub_y = "", this.server_priv = "", this.server_key_x = "", this.server_key_y = "", this.server_Key_xy = "", this.client_pub_x = "", this.client_pub_y = "", this.client_priv = "", this.client_key_x = "", this.client_key_y = "", this.client_Key_xy = "", this.bNeedGenKey = !0, this._ecdhJs = new window.ecdhJs
        }
        static getInstance() {
            return i.g_instance || (i.g_instance = new i, i.g_instance.ecdh_init()), i.g_instance
        }
        set_init() {
            0 == this.q.length && this.set_secp160r1(), this.rng = new this._ecdhJs.SecureRandom
        }
        set_ec_params(e) {
            var t = this._ecdhJs.getSECCurveByName(e);
            this.q = t.getCurve().getQ().toString(), this.a = t.getCurve().getA().toBigInteger().toString(), this.b = t.getCurve().getB().toBigInteger().toString(), this.gx = t.getG().getX().toBigInteger().toString(), this.gy = t.getG().getY().toBigInteger().toString(), this.n = t.getN().toString()
        }
        get_curve(e, t, i) {
            return new this._ecdhJs.ECCurveFp(new this._ecdhJs.BigInteger(e), new this._ecdhJs.BigInteger(t), new this._ecdhJs.BigInteger(i))
        }
        get_G(e) {
            return new this._ecdhJs.ECPointFp(e, e.fromBigInteger(new this._ecdhJs.BigInteger(this.gx)), e.fromBigInteger(new this._ecdhJs.BigInteger(this.gy)))
        }
        set_secp128r1() {
            this.set_ec_params("secp128r1")
        }
        set_secp160k1() {
            this.set_ec_params("secp160k1")
        }
        set_secp160r1() {
            this.set_ec_params("secp160r1")
        }
        set_secp192k1() {
            this.set_ec_params("secp192k1")
        }
        set_secp192r1() {
            this.set_ec_params("secp192r1")
        }
        set_secp224r1() {
            this.set_ec_params("secp224r1")
        }
        set_secp256r1() {
            this.set_ec_params("secp256r1")
        }
        pick_rand() {
            var e = new this._ecdhJs.BigInteger(this.n),
                t = e.subtract(this._ecdhJs.BigInteger.ONE);
            return new this._ecdhJs.BigInteger(e.bitLength(), this.rng).mod(t).add(this._ecdhJs.BigInteger.ONE)
        }
        ecdh_server_genPriv() {
            var e = this.pick_rand();
            this.server_priv = e.toString()
        }
        ecdh_server_genPub() {
            if (0 != this.server_priv.length) {
                var e = this.get_curve(this.q, this.a, this.b),
                    t = this.get_G(e),
                    i = new this._ecdhJs.BigInteger(this.server_priv),
                    s = t.multiply(i);
                this.server_pub_x = s.getX().toBigInteger().toString(), this.server_pub_y = s.getY().toBigInteger().toString()
            } else console.log("Please generate server's private value first")
        }
        ecdh_server_genSecretkey() {
            if (0 != this.server_priv.length)
                if (0 != this.client_pub_x.length) {
                    var e = this.get_curve(this.q, this.a, this.b),
                        t = new this._ecdhJs.ECPointFp(e, e.fromBigInteger(new this._ecdhJs.BigInteger(this.client_pub_x)), e.fromBigInteger(new this._ecdhJs.BigInteger(this.client_pub_y))),
                        i = new this._ecdhJs.BigInteger(this.server_priv),
                        s = t.multiply(i);
                    this.server_key_x = s.getX().toBigInteger().toString(), this.server_key_y = s.getY().toBigInteger().toString(), this.server_Key_xy = this.server_key_x + this.server_key_y
                } else console.log("Please generate client's public value first");
            else console.log("Please generate server's private value first")
        }
        ecdh_client_genPriv() {
            var e = this.pick_rand();
            this.client_priv = e.toString()
        }
        ecdh_client_genPub() {
            if (0 != this.client_priv.length) {
                var e = this.get_curve(this.q, this.a, this.b),
                    t = this.get_G(e),
                    i = new this._ecdhJs.BigInteger(this.client_priv),
                    s = t.multiply(i);
                this.client_pub_x = s.getX().toBigInteger().toString(), this.client_pub_y = s.getY().toBigInteger().toString()
            } else console.log("Please generate client's private value first")
        }
        ecdh_client_genSecretkey() {
            if (0 != this.client_priv.length)
                if (0 != this.server_pub_x.length) {
                    var e = this.get_curve(this.q, this.a, this.b),
                        t = new this._ecdhJs.ECPointFp(e, e.fromBigInteger(new this._ecdhJs.BigInteger(this.server_pub_x)), e.fromBigInteger(new this._ecdhJs.BigInteger(this.server_pub_y))),
                        i = new this._ecdhJs.BigInteger(this.client_priv),
                        s = t.multiply(i);
                    this.client_key_x = s.getX().toBigInteger().toString(), this.client_key_y = s.getY().toBigInteger().toString(), this.client_Key_xy = this.client_key_x + this.client_key_y
                } else console.log("Please compute server's public value first");
            else console.log("Please generate client's private value first")
        }
        ecdh_setSeverPublic(e, t) {
            this.server_pub_x = e, this.server_pub_y = t
        }
        ecdh_getClientPubX() {
            return this.client_pub_x
        }
        ecdh_getClientPubY() {
            return this.client_pub_y
        }
        ecdh_getClientSecretX() {
            return this.client_key_x
        }
        ecdh_getClientSecretY() {
            return this.client_key_y
        }
        ecdh_getClientSecretXY() {
            return this.client_Key_xy
        }
        ecdh_setNeedGenKeyState(e) {
            this.bNeedGenKey = e
        }
        ecdh_getNeedGenKeyState() {
            return this.bNeedGenKey
        }
        ecdh_init() {
            this.bNeedGenKey && (this.bNeedGenKey = !1, this.set_secp224r1(), this.set_init(), this.ecdh_client_genPriv(), this.ecdh_client_genPub())
        }
        ecdh_genClientKey(e, t) {
            this.ecdh_setSeverPublic(e, t), this.ecdh_client_genSecretkey()
        }
        ecdh_run_DHTest() {
            console.log("ecdh_run_DHTest ========================"), this.set_init(), this.set_secp256r1(), this.ecdh_server_genPriv(), this.ecdh_client_genPriv(), this.ecdh_server_genPub(), this.ecdh_client_genPub(), this.ecdh_server_genSecretkey(), this.ecdh_client_genSecretkey()
        }
    }
    e("ecdhHandler", i), i.g_instance = null, t._RF.pop()
}