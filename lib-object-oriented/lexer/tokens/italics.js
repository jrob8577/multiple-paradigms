import Token from './token'

export default class Italics extends Token {
  accepts( identifier ) {
    return false
  }
}
