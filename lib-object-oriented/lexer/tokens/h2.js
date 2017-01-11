import Token from './token'
import H3 from './h3'

import Hash from '../identifiers/hash'

export default class H2 extends Token {
  accepts( identifier ) {
    return identifier instanceof Hash
  }

  consume( identifier ) {
    return [ new H3({ value: `${this.value}${identifier.value}` }) ]
  }
}
