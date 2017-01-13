import Token from './token'
import String from './string'
import BoldOrItalics from './bold_or_italics'
import NewLine from './new_line'
import ListItem from './list_item'

export default class TokenFactory {
  static create( identifier ) {
    switch( identifier.constructor.name ) {
      case 'Character':
      case 'Space':
        return new String( identifier ); break;
      case 'Underscore':
      case 'Asterisk':
        return new BoldOrItalics( identifier ); break;
      case 'NewLine': return new NewLine( identifier ); break;
      case 'Hyphen': return new ListItem( identifier ); break;
      default:
        return new Token( identifier )
    }
  }
}


// Links
// [STRING](STRING)
// Images
// BANG[]
// Unordered lists
// *, -
// Ordered lists
// Blockquotes
// Horizontal rules
// Inline codes
// Code blocks
