import IdentifierFactory from './identifiers/factory'
import TokenStream from './tokens/stream'

export default class Lexer {
  constructor( content ) {
    this.content = content
  }

  identifiers() {
    return this.content.split('').map( char => IdentifierFactory.create( char ) )
  }

  tokenize() {
    const list = this.identifiers()
    const token_stream = new TokenStream()

    while( list.length > 0 ) {
      token_stream.add( list.shift() )
    }

    return token_stream.toArray()
  }
}
