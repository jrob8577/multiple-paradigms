import Token from './token'
import BoldOrList from './bold_or_list'
import H1 from './h1'

import NewLineIdentifier from '../identifiers/new_line'
import Asterisk from '../identifiers/asterisk'
import Hash from '../identifiers/hash'

export default class NewLine extends Token {
  accepts( identifier ) {
    return identifier instanceof Asterisk || identifier instanceof Hash
  }

  consume( identifier ) {
    if( identifier instanceof Asterisk ) {
      return [
        new NewLine({ value: this.value }),
        new BoldOrList({ value: identifier.value })
      ]
    } else {
      return [
        new NewLine({ value: this.value }),
        new H1({ value: identifier.value })
      ]
    }
  }
}
