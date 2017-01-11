import Token from './token'
import H6 from './h6'

import Hash from '../identifiers/hash'

export default class H5 extends Token {
  accepts( identifier ) {
    return identifier instanceof Hash
  }

  consume( identifier ) {
    return [ new H6({ value: `${this.value}${identifier.value}` }) ]
  }
}
