import Parser from './parser'

const test_string = `_Hello_.
# Heading
* My name is **Inigo Montoya**.
- You killed my father.
* Prepare to die.

## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

a paragraph with a single hash# in it
`

const parser = new Parser( test_string )
console.log( parser.parse() )
