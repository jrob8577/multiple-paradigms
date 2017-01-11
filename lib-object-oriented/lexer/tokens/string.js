import Token from './token'
import Character from '../identifiers/character'
import Space from '../identifiers/space'

export default class String extends Token {
  accepts( identifier ) {
    return identifier instanceof Character || identifier instanceof Space
  }

  consume( identifier ) {
    return [ new String({ value: `${this.value}${identifier.value}` }) ]
  }
}
