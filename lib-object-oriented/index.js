import Parser from './parser'

const test_string = `
Paragraphs
Headings
# H1
## H2
### H3
#### H4
##### H5
###### H6
Italicized text
_this is Italicized_
*So is this*
Bold text
__this is bold__
**so is this**
This __starts bold but had *italicized text* in it__
Links
[Link text](http://www.url.com)
Images
![alt text](http://www.url.com)
Unordered lists
- list item 1
* list item 2
  - sub list if i get here
- list item 3
Ordered lists
1. Numbers
  * sub list if i get here
1. Don't
5. Matter
Blockquotes
> Multiline blocks
> quotes
Horizontal rules
---
***
___
Inline codes
This has some \`inline code\` in it.
Code blocks
\`\`\`
This is an inline code block
it spans multiple
lines
\`\`\`
`

const parser = new Parser( test_string )
console.log( parser.parse() )
