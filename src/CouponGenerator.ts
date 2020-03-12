import { readFileSync } from 'fs'
import { IAlgorithm } from './Algorithms'

export default class CouponGenerator {
  private algorithm: IAlgorithm
  private quantity: number
  private coupons: string[]

  constructor (algorithm: IAlgorithm, quantity: number) { 
    this.algorithm = algorithm
    this.quantity = quantity
    this.coupons = []
  }

  generateCoupons(): void {
     const series = this.algorithm.execute(this.quantity)
     this.coupons = series.map(num => ('00000' + num).slice(-6))
  }

  getCoupons(): string[] {
      return this.coupons
  }

}
