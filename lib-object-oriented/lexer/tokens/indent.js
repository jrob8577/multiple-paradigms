import Token from './token'

export default class Indent extends Token {
  accepts( identifier ) {
    return false
  }
}
