*This repository is a mirror of the [component](http://component.io) module [danzajdband/regexp-tokenizer](http://github.com/danzajdband/regexp-tokenizer). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/danzajdband-regexp-tokenizer`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

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
