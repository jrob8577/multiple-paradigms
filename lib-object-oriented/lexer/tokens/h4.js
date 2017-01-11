import Token from './token'
import H5 from './h5'

import Hash from '../identifiers/hash'

export default class H4 extends Token {
  accepts( identifier ) {
    return identifier instanceof Hash
  }

  consume( identifier ) {
    return [ new H5({ value: `${this.value}${identifier.value}` }) ]
  }
}
