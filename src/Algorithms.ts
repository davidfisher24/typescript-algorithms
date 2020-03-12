export interface IAlgorithm {         
  execute (quantity:number): number[]
}

export class NumberSequence implements IAlgorithm { 
  constructor () {}

  execute (quantity:number): number[] {
    return Array.from({length:quantity},(v,k)=>k+1) 
  }
}

export class NumbersSquared implements IAlgorithm {
  constructor () {}

  execute (quantity:number): number[] {
    return Array.from({length:quantity},(v,k)=>Math.pow(k+1,2)) 
  }
}


