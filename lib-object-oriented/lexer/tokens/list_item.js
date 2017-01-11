import Token from './token'

export default class ListItem extends Token {
  accepts( identifier ) {
    return false
  }
}
