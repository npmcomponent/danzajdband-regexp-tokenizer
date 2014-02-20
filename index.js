
var inherit = require('component-inherit')
  , select = require('component-select')
  , indexof = require('component-indexof')
  , Tokenizer = require('danzajdband-tokenizer');

function RegexpTokenizer(options) {
  options = options || {};

  this.pattern = options.pattern || null;
  this.discard_empty = options.discard_empty || true;
  this.gaps = options.gaps;
    
  if (typeof this.gaps == "undefined") this.gaps = true;
}

inherit(RegexpTokenizer, Tokenizer);

RegexpTokenizer.prototype.tokenize = function(str) {
  if (this.gaps) {
    var results = str.split(this.pattern);
    return (this.discard_empty) ? without(results, ['', ' ']) : results;
  } else { 
    return str.match(this.pattern);
  }
};

function without(a, b) {
  return select(a, function(el){
    return !~b.indexOf(el);
  }); 
}

module.exports = function(options) {  
  return new RegexpTokenizer(options);
};
