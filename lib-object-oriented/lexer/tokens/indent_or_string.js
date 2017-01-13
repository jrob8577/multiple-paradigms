import Token from './token'

import String from './string'
import Indent from './indent'

import Character from '../identifiers/character'
import Space from '../identifiers/space'

export default class IndentOrString extends Token {
  accepts( identifier ) {
    return identifier instanceof Character ||
      identifier instanceof Space
  }

  consume( identifier ) {
    if( identifier instanceof Character ) {
      return [ new String({ value: `${this.value}${identifier.value}` }) ]
    } else {
      return [ new Indent({ value: `${this.value}${identifier.value}` }) ]
    }
  }
}
