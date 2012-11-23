
# regexp-tokenizer

  Aggressive tokenizer (from node-natural)

## Installation

    $ component install danzajdband/aggressive-tokenizer

## Usage

```js

var tokenizer = require('tokenizer')({discard_empty: true, pattern: /W+/});

tokenizer.tokenize('viva la pepa    ');
  //['viva', 'la', 'pepa']

```

## Options

### gaps: Boolean

### gaps: Boolean

### pattern: Regexp

## API

### RegexpTokenizer#trim

### RegexpTokenizer#tokenize  

## License

  MIT
