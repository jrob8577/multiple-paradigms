import Token from './token'
import BoldOrItalicsOrList from './bold_or_italics_or_list'
import StringOrOrderedListItem from './string_or_ordered_list_item'
import IndentOrString from './indent_or_string'
import H1 from './h1'
import BlockQuote from './block_quote'

import NewLineIdentifier from '../identifiers/new_line'
import Asterisk from '../identifiers/asterisk'
import Hash from '../identifiers/hash'
import Number from '../identifiers/number'
import Space from '../identifiers/space'
import AngleBracket from '../identifiers/angle_bracket'

export default class NewLine extends Token {
  accepts( identifier ) {
    return identifier instanceof Asterisk ||
      identifier instanceof Hash ||
      identifier instanceof Number ||
      identifier instanceof Space ||
      identifier instanceof AngleBracket
  }

  consume( identifier ) {
    if( identifier instanceof Asterisk ) {
      return [
        new NewLine({ value: this.value }),
        new BoldOrItalicsOrList({ value: identifier.value })
      ]
    } else if( identifier instanceof Hash ){
      return [
        new NewLine({ value: this.value }),
        new H1({ value: identifier.value })
      ]
    } else if( identifier instanceof Number ) {
      return [
        new NewLine({ value: this.value }),
        new StringOrOrderedListItem({ value: identifier.value })
      ]
    } else if( identifier instanceof Space ) {
      return [
        new NewLine({ value: this.value }),
        new IndentOrString({ value: identifier.value })
      ]
    } else if( identifier instanceof AngleBracket ) {
      return [
        new NewLine({ value: this.value }),
        new BlockQuote({ value: identifier.value })
      ]
    }
  }
}
