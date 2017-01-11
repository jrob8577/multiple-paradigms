export default class Token {
  constructor( input={} ) {
    this.value = input.value || ''
  }

  accepts( identifier ) {
    return false
  }

  consume( identifier ) {
    return new Token( identifier.value )
  }
}
