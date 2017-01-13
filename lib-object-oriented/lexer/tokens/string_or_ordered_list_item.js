import Token from './token'
import String from './string'
import OrderedListItem from './ordered_list_item'

import Period from '../identifiers/period'

export default class StringOrOrderedListItem extends Token {
  accepts( identifier ) {
    return true
  }

  consume( identifier ) {
    if( identifier instanceof Period ) {
      return [ new OrderedListItem({ value: `${this.value}${identifier.value}` }) ]
    } else {
      return [
        new String({ value: `${this.value}${identifier.value}` })
      ]
    }
  }
}
