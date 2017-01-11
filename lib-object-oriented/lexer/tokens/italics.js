import Token from './token'
import Underscore from '../identifiers/underscore'

export default class Italics extends Token {
  accepts( identifier ) {
    return identifier instanceof Underscore && this.value.length < 2
  }

  consume( identifier ) {
    return [ new Italics({ value: `${this.value}${identifier.value}` }) ]
  }
}
