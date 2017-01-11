import Lexer from '../lexer'

export default class Parser {
  constructor( content ) {
    this.content = content
  }

  parse() {
    const tokens = new Lexer( this.content ).tokenize()

    return tokens
  }

  tokenize() {
    return new Lexer( this.content ).lex()
  }
}
