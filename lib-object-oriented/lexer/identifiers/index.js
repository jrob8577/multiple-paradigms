export default class Identifier {
  constructor( character ) {
    this.character = character
  }

  get value() {
    return this.character
  }
}
