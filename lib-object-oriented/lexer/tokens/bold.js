import Token from './token'
import Asterisk from '../identifiers/asterisk'

export default class Bold extends Token {
  accepts( identifier ) {
    return identifier instanceof Asterisk && this.value.length < 2
  }

  consume( identifier ) {
    return [ new Bold({ value: `${this.value}${identifier.value}` }) ]
  }
}
