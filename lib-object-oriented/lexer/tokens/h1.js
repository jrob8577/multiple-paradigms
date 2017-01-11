import Token from './token'
import H2 from './h2'

import Hash from '../identifiers/hash'

export default class H1 extends Token {
  accepts( identifier ) {
    return identifier instanceof Hash
  }

  consume( identifier ) {
    return [ new H2({ value: `${this.value}${identifier.value}` }) ]
  }
}
