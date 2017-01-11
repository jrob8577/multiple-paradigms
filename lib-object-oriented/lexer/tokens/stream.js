import Token from './token'
import TokenFactory from './factory'

export default class TokenStream {
  constructor() {
    this.tokens = [ new Token() ]
  }

  add( identifier ) {
    const last = this.tokens.pop()

    if( last.accepts( identifier ) ) {
      this.tokens.push( ...last.consume( identifier ))
    } else {
      this.tokens.push( last )
      this.tokens.push( TokenFactory.create( identifier ))
    }
  }

  toArray() {
    return this.tokens.slice( 1 )
  }
}
