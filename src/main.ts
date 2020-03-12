import { readFileSync, existsSync } from 'fs'
import { IAlgorithm, NumberSequence, NumbersSquared } from './Algorithms'
import CouponGenerator from './CouponGenerator'
import CouponOutputter from './CouponOutputter'

const algorithms: { [name: string]:IAlgorithm } = {
    "NumberSequence": new NumberSequence,
    "NumbersSquared": new NumbersSquared,
}

const isInteger = (value: any): boolean => !isNaN(value)
const isValidAlgorithm = (value: any): boolean => typeof(value === 'string') && algorithms.hasOwnProperty(value)

if (!existsSync('./config.json')) {
    console.log('Config file not provided')
    process.exit(0)
}

const config = JSON.parse(readFileSync('./config.json','utf8'))

if (!isInteger(config.quantity)) {
    console.log('Quantity is either not given or is not a valid integer')
    process.exit(0)
}

if (!isValidAlgorithm(config.algorithm)) {
    console.log('Algorithm is either not provided or is not valid')
    process.exit(0)
}

const algorithm = algorithms[config.algorithm]
const generator = new CouponGenerator(algorithm,config.quantity)
generator.generateCoupons()
const coupons = generator.getCoupons()
const outputter = new CouponOutputter(coupons)
outputter.outputToConsole()