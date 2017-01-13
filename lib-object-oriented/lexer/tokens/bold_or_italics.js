import Token from './token'
import TokenFactory from './factory'
import Italics from './italics'
import Bold from './bold'
import Underscore from '../identifiers/underscore'
import Asterisk from '../identifiers/asterisk'

export default class BoldOrItalics extends Token {
  accepts( identifier ) {
    return true
  }

  consume( identifier ) {
    if( identifier instanceof Underscore || identifier instanceof Asterisk ) {
      return [ new Bold({ value: `${this.value}${identifier.value}` }) ]
    } else {
      return [
        new Italics({ value: this.value }),
        TokenFactory.create( identifier )
      ]
    }
  }
}
