import Token from './token'

export default class BlockQuote extends Token {
  accepts( identifier ) {
    return false
  }
}
