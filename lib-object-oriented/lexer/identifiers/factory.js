import Underscore from './underscore'
import NewLine from './new_line'
import Asterisk from './asterisk'
import Hyphen from './hyphen'
import Hash from './hash'
import Space from './space'
import Character from './character'
import Number from './number'
import Period from './period'
import OpenParen from './open_paren'
import CloseParen from './close_paren'
import Bang from './bang'
import OpenBracket from './open_bracket'
import CloseBracket from './close_bracket'
import AngleBracket from './angle_bracket'

const CHARACTERS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
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
      case '.': return new Period( character ); break;
      case '(': return new OpenParen( character ); break;
      case ')': return new CloseParen( character ); break;
      case '!': return new Bang( character ); break;
      case '[': return new OpenBracket( character ); break;
      case ']': return new CloseBracket( character ); break;
      case '>': return new AngleBracket( character ); break;
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
