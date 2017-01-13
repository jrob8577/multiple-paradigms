import Token from './token'
import TokenFactory from './factory'
import ListItem from './list_item'
import BoldOrItalics from './bold_or_italics'

import Space from '../identifiers/space'

export default class BoldOrItalicsOrList extends Token {
  accepts( identifier ) {
    return true
  }

  consume( identifier ) {
    if( identifier instanceof Space ) {
      return [ new ListItem({ value: this.value }) ]
    } else {
      const boldOrItalics = new BoldOrItalics({ value: this.value })

      return boldOrItalics.consume( identifier )
    }
  }
}
