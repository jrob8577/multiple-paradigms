import Underscore from './underscore'
import NewLine from './new_line'
import Asterisk from './asterisk'
import Hyphen from './hyphen'
import Hash from './hash'
import Space from './space'
import Character from './character'
import Number from './number'

const CHARACTERS = 'abcdefghijklmnopqrstuvwxyz.ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const NUMBERS = '1234567890'

export default class Factory {
  static create( character ) {
    switch( character ) {
      case '_': return new Underscore( character ); break;
      case '\n': return new NewLine( character ); break;
      case '*': return new Asterisk( character ); break;
      case '-': return new Hyphen( character ); break;
      case '#': return new Hash( character ); break;
      case ' ': return new Space( character ); break;
      default:
        if( CHARACTERS.indexOf( character ) !== -1 ) {
          return new Character( character );
        } else if( NUMBERS.indexOf( character ) !== -1 ) {
          return new Number( character );
        } else {
          return new Character( character );
        }
    }
  }
}
