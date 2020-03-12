export default class CouponOutputter {
    coupons: string[]

    constructor(coupons: string[]) {
        this.coupons = coupons
    }

    public outputToConsole() {
        this.coupons.forEach(coupon => console.log(coupon))
    }
}
