import Token from './token'

export default class Bold extends Token {
  accepts( identifier ) {
    return false
  }
}
