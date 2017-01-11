import Token from './token'
import TokenFactory from './factory'
import ListItem from './list_item'

import Space from '../identifiers/space'

export default class BoldOrList extends Token {
  accepts( identifier ) {
    return true
  }

  consume( identifier ) {
    if( identifier instanceof Space ) {
      return [ new ListItem({ value: this.value }) ]
    } else {
      return TokenFactory.create( identifier )
    }
  }
}
