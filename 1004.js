if (self.CavalryLogger) {
    CavalryLogger.start_js(["8ELCB"]);
}

/**
 * License: https://www.facebook.com/legal/license/Smm9Lz-9Uuo/
 */
__d("Int64", [], (function(a, b, c, d, e, f) {
    Int64 = function(a, b) {
        this.low_ = a,
        this.high_ = b
    }
    ,
    Int64.IntCache_ = {},
    Int64.fromInt = function(a) {
        if (-128 <= a && a < 128) {
            var b = Int64.IntCache_[a];
            if (b)
                return b
        }
        b = new Int64(a | 0,a < 0 ? -1 : 0);
        -128 <= a && a < 128 && (Int64.IntCache_[a] = b);
        return b
    }
    ,
    Int64.fromNumber = function(a) {
        if (isNaN(a) || !isFinite(a))
            return Int64.ZERO;
        else if (a <= -Int64.TWO_PWR_63_DBL_)
            return Int64.MIN_VALUE;
        else if (a + 1 >= Int64.TWO_PWR_63_DBL_)
            return Int64.MAX_VALUE;
        else if (a < 0)
            return Int64.fromNumber(-a).negate();
        else
            return new Int64(a % Int64.TWO_PWR_32_DBL_ | 0,a / Int64.TWO_PWR_32_DBL_ | 0)
    }
    ,
    Int64.fromBits = function(a, b) {
        return new Int64(a,b)
    }
    ,
    Int64.fromString = function(a, b) {
        if (a.length == 0)
            throw Error("number format error: empty string");
        b = b || 10;
        if (b < 2 || 36 < b)
            throw Error("radix out of range: " + b);
        if (a.charAt(0) == "-")
            return Int64.fromString(a.substring(1), b).negate();
        else if (a.indexOf("-") >= 0)
            throw Error('number format error: interior "-" character: ' + a);
        var c = Int64.fromNumber(Math.pow(b, 8))
          , d = Int64.ZERO;
        for (var e = 0; e < a.length; e += 8) {
            var f = Math.min(8, a.length - e)
              , g = parseInt(a.substring(e, e + f), b);
            if (f < 8) {
                f = Int64.fromNumber(Math.pow(b, f));
                d = d.multiply(f).add(Int64.fromNumber(g))
            } else
                d = d.multiply(c),
                d = d.add(Int64.fromNumber(g))
        }
        return d
    }
    ,
    Int64.TWO_PWR_16_DBL_ = 1 << 16,
    Int64.TWO_PWR_24_DBL_ = 1 << 24,
    Int64.TWO_PWR_32_DBL_ = Int64.TWO_PWR_16_DBL_ * Int64.TWO_PWR_16_DBL_,
    Int64.TWO_PWR_31_DBL_ = Int64.TWO_PWR_32_DBL_ / 2,
    Int64.TWO_PWR_48_DBL_ = Int64.TWO_PWR_32_DBL_ * Int64.TWO_PWR_16_DBL_,
    Int64.TWO_PWR_64_DBL_ = Int64.TWO_PWR_32_DBL_ * Int64.TWO_PWR_32_DBL_,
    Int64.TWO_PWR_63_DBL_ = Int64.TWO_PWR_64_DBL_ / 2,
    Int64.ZERO = Int64.fromInt(0),
    Int64.ONE = Int64.fromInt(1),
    Int64.NEG_ONE = Int64.fromInt(-1),
    Int64.MAX_VALUE = Int64.fromBits(4294967295 | 0, 2147483647 | 0),
    Int64.MIN_VALUE = Int64.fromBits(0, 2147483648 | 0),
    Int64.TWO_PWR_24_ = Int64.fromInt(1 << 24),
    Int64.prototype.toInt = function() {
        return this.low_
    }
    ,
    Int64.prototype.toNumber = function() {
        return this.high_ * Int64.TWO_PWR_32_DBL_ + this.getLowBitsUnsigned()
    }
    ,
    Int64.prototype.toUnsignedBits = function() {
        var a = []
          , b = 31;
        for (var c = 32; c < 64; c++)
            a[c] = this.low_ >> b & 1,
            b -= 1;
        b = 31;
        for (var c = 0; c < 32; c++)
            a[c] = this.high_ >> b & 1,
            b -= 1;
        return a.join("")
    }
    ,
    Int64.prototype.toString = function(a) {
        a = a || 10;
        if (a < 2 || 36 < a)
            throw Error("radix out of range: " + a);
        if (this.isZero())
            return "0";
        if (this.isNegative())
            if (this.equals(Int64.MIN_VALUE)) {
                var b = Int64.fromNumber(a)
                  , c = this.div(b);
                b = c.multiply(b).subtract(this);
                return c.toString(a) + b.toInt().toString(a)
            } else
                return "-" + this.negate().toString(a);
        c = Int64.fromNumber(Math.pow(a, 6));
        b = this;
        var d = "";
        while (!0) {
            var e = b.div(c)
              , f = b.subtract(e.multiply(c)).toInt();
            f = f.toString(a);
            b = e;
            if (b.isZero())
                return f + d;
            else {
                while (f.length < 6)
                    f = "0" + f;
                d = "" + f + d
            }
        }
    }
    ,
    Int64.prototype.getHighBits = function() {
        return this.high_
    }
    ,
    Int64.prototype.getLowBits = function() {
        return this.low_
    }
    ,
    Int64.prototype.getLowBitsUnsigned = function() {
        return this.low_ >= 0 ? this.low_ : Int64.TWO_PWR_32_DBL_ + this.low_
    }
    ,
    Int64.prototype.getNumBitsAbs = function() {
        if (this.isNegative())
            if (this.equals(Int64.MIN_VALUE))
                return 64;
            else
                return this.negate().getNumBitsAbs();
        else {
            var a = this.high_ != 0 ? this.high_ : this.low_;
            for (var b = 31; b > 0; b--)
                if ((a & 1 << b) != 0)
                    break;
            return this.high_ != 0 ? b + 33 : b + 1
        }
    }
    ,
    Int64.prototype.isZero = function() {
        return this.high_ == 0 && this.low_ == 0
    }
    ,
    Int64.prototype.isNegative = function() {
        return this.high_ < 0
    }
    ,
    Int64.prototype.isOdd = function() {
        return (this.low_ & 1) == 1
    }
    ,
    Int64.prototype.equals = function(a) {
        return this.high_ == a.high_ && this.low_ == a.low_
    }
    ,
    Int64.prototype.notEquals = function(a) {
        return this.high_ != a.high_ || this.low_ != a.low_
    }
    ,
    Int64.prototype.lessThan = function(a) {
        return this.compare(a) < 0
    }
    ,
    Int64.prototype.lessThanOrEqual = function(a) {
        return this.compare(a) <= 0
    }
    ,
    Int64.prototype.greaterThan = function(a) {
        return this.compare(a) > 0
    }
    ,
    Int64.prototype.greaterThanOrEqual = function(a) {
        return this.compare(a) >= 0
    }
    ,
    Int64.prototype.compare = function(a) {
        if (this.equals(a))
            return 0;
        var b = this.isNegative()
          , c = a.isNegative();
        if (b && !c)
            return -1;
        if (!b && c)
            return 1;
        if (this.subtract(a).isNegative())
            return -1;
        else
            return 1
    }
    ,
    Int64.prototype.negate = function() {
        if (this.equals(Int64.MIN_VALUE))
            return Int64.MIN_VALUE;
        else
            return this.not().add(Int64.ONE)
    }
    ,
    Int64.prototype.add = function(a) {
        var b = this.high_ >>> 16
          , c = this.high_ & 65535
          , d = this.low_ >>> 16
          , e = this.low_ & 65535
          , f = a.high_ >>> 16
          , g = a.high_ & 65535
          , h = a.low_ >>> 16;
        a = a.low_ & 65535;
        var i = 0
          , j = 0
          , k = 0
          , l = 0;
        l += e + a;
        k += l >>> 16;
        l &= 65535;
        k += d + h;
        j += k >>> 16;
        k &= 65535;
        j += c + g;
        i += j >>> 16;
        j &= 65535;
        i += b + f;
        i &= 65535;
        return Int64.fromBits(k << 16 | l, i << 16 | j)
    }
    ,
    Int64.prototype.subtract = function(a) {
        return this.add(a.negate())
    }
    ,
    Int64.prototype.multiply = function(a) {
        if (this.isZero())
            return Int64.ZERO;
        else if (a.isZero())
            return Int64.ZERO;
        if (this.equals(Int64.MIN_VALUE))
            return a.isOdd() ? Int64.MIN_VALUE : Int64.ZERO;
        else if (a.equals(Int64.MIN_VALUE))
            return this.isOdd() ? Int64.MIN_VALUE : Int64.ZERO;
        if (this.isNegative())
            if (a.isNegative())
                return this.negate().multiply(a.negate());
            else
                return this.negate().multiply(a).negate();
        else if (a.isNegative())
            return this.multiply(a.negate()).negate();
        if (this.lessThan(Int64.TWO_PWR_24_) && a.lessThan(Int64.TWO_PWR_24_))
            return Int64.fromNumber(this.toNumber() * a.toNumber());
        var b = this.high_ >>> 16
          , c = this.high_ & 65535
          , d = this.low_ >>> 16
          , e = this.low_ & 65535
          , f = a.high_ >>> 16
          , g = a.high_ & 65535
          , h = a.low_ >>> 16;
        a = a.low_ & 65535;
        var i = 0
          , j = 0
          , k = 0
          , l = 0;
        l += e * a;
        k += l >>> 16;
        l &= 65535;
        k += d * a;
        j += k >>> 16;
        k &= 65535;
        k += e * h;
        j += k >>> 16;
        k &= 65535;
        j += c * a;
        i += j >>> 16;
        j &= 65535;
        j += d * h;
        i += j >>> 16;
        j &= 65535;
        j += e * g;
        i += j >>> 16;
        j &= 65535;
        i += b * a + c * h + d * g + e * f;
        i &= 65535;
        return Int64.fromBits(k << 16 | l, i << 16 | j)
    }
    ,
    Int64.prototype.div = function(a) {
        if (a.isZero())
            throw Error("division by zero");
        else if (this.isZero())
            return Int64.ZERO;
        if (this.equals(Int64.MIN_VALUE))
            if (a.equals(Int64.ONE) || a.equals(Int64.NEG_ONE))
                return Int64.MIN_VALUE;
            else if (a.equals(Int64.MIN_VALUE))
                return Int64.ONE;
            else {
                var b = this.shiftRight(1);
                b = b.div(a).shiftLeft(1);
                if (b.equals(Int64.ZERO))
                    return a.isNegative() ? Int64.ONE : Int64.NEG_ONE;
                else {
                    var c = this.subtract(a.multiply(b))
                      , d = b.add(c.div(a));
                    return d
                }
            }
        else if (a.equals(Int64.MIN_VALUE))
            return Int64.ZERO;
        if (this.isNegative())
            if (a.isNegative())
                return this.negate().div(a.negate());
            else
                return this.negate().div(a).negate();
        else if (a.isNegative())
            return this.div(a.negate()).negate();
        d = Int64.ZERO;
        var c = this;
        while (c.greaterThanOrEqual(a)) {
            b = Math.max(1, Math.floor(c.toNumber() / a.toNumber()));
            var e = Math.ceil(Math.log(b) / Math.LN2);
            e = e <= 48 ? 1 : Math.pow(2, e - 48);
            var f = Int64.fromNumber(b)
              , g = f.multiply(a);
            while (g.isNegative() || g.greaterThan(c))
                b -= e,
                f = Int64.fromNumber(b),
                g = f.multiply(a);
            f.isZero() && (f = Int64.ONE);
            d = d.add(f);
            c = c.subtract(g)
        }
        return d
    }
    ,
    Int64.prototype.modulo = function(a) {
        return this.subtract(this.div(a).multiply(a))
    }
    ,
    Int64.prototype.not = function() {
        return Int64.fromBits(~this.low_, ~this.high_)
    }
    ,
    Int64.prototype.and = function(a) {
        return Int64.fromBits(this.low_ & a.low_, this.high_ & a.high_)
    }
    ,
    Int64.prototype.or = function(a) {
        return Int64.fromBits(this.low_ | a.low_, this.high_ | a.high_)
    }
    ,
    Int64.prototype.xor = function(a) {
        return Int64.fromBits(this.low_ ^ a.low_, this.high_ ^ a.high_)
    }
    ,
    Int64.prototype.shiftLeft = function(a) {
        a &= 63;
        if (a == 0)
            return this;
        else {
            var b = this.low_;
            if (a < 32) {
                var c = this.high_;
                return Int64.fromBits(b << a, c << a | b >>> 32 - a)
            } else
                return Int64.fromBits(0, b << a - 32)
        }
    }
    ,
    Int64.prototype.shiftRight = function(a) {
        a &= 63;
        if (a == 0)
            return this;
        else {
            var b = this.high_;
            if (a < 32) {
                var c = this.low_;
                return Int64.fromBits(c >>> a | b << 32 - a, b >> a)
            } else
                return Int64.fromBits(b >> a - 32, b >= 0 ? 0 : -1)
        }
    }
    ,
    Int64.prototype.shiftRightUnsigned = function(a) {
        a &= 63;
        if (a == 0)
            return this;
        else {
            var b = this.high_;
            if (a < 32) {
                var c = this.low_;
                return Int64.fromBits(c >>> a | b << 32 - a, b >>> a)
            } else if (a == 32)
                return Int64.fromBits(b, 0);
            else
                return Int64.fromBits(b >>> a - 32, 0)
        }
    }
    ,
    e.exports = Int64
}
), null);
