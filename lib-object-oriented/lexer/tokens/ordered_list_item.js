import Token from './token'

export default class OrderedListItem extends Token {
  accepts( identifier ) {
    return false
  }
}
