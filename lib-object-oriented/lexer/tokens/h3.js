import Token from './token'
import H4 from './h4'

import Hash from '../identifiers/hash'

export default class H3 extends Token {
  accepts( identifier ) {
    return identifier instanceof Hash
  }

  consume( identifier ) {
    return [ new H4({ value: `${this.value}${identifier.value}` }) ]
  }
}
