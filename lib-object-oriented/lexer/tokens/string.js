import Token from './token'
import Character from '../identifiers/character'
import Space from '../identifiers/space'
import Number from '../identifiers/number'
import Period from '../identifiers/period'

export default class String extends Token {
  accepts( identifier ) {
    return identifier instanceof Character ||
      identifier instanceof Space ||
      identifier instanceof Number ||
      identifier instanceof Period
  }

  consume( identifier ) {
    return [ new String({ value: `${this.value}${identifier.value}` }) ]
  }
}
