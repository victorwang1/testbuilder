// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var network = '';
  var networkNames = ['DinersClub', 'AmericanExpress', 'Switch', 'Visa', 'Maestro', 'MasterCard', 'Discover', 'UnionPay'];
  var DinersClub = {length: [14],
                    prefix: ['38', '39']};
  var AmericanExpress = {length: [15],
              prefix: ['34', '37']};
  var Switch = {length: [16, 18, 19],
                prefix: ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759']};
  var Visa = {length: [13, 16, 19],
              prefix: ['4']};
  var Maestro = {length: [],
                 prefix: ['5018', '5020', '5038', '6304'],
                 init: function(){
                    var generate = function(start, stop) {
                                    var array = [];
                                    for (var i = start; i <= stop; i++) {
                                      array.push(i);
                                    }
                                    return array;
                    };
                    this.length = generate(12, 19);
                    return this;
                 }}.init();
  var MasterCard = {length: [16],
                    prefix: ['51', '52', '53', '54', '55']};
  var Discover = {length: [16, 19],
                 prefix: ['6011', '644', '645', '646', '647', '648', '649', '65']};
  var UnionPay = {length: [],
                  prefix: [],
                  init: function() {
                    var generate = function(start, stop) {
                                      var array = [];
                                      for (var i = start; i <= stop; i++) {
                                        array.push(i);
                                      }
                                      return array;
                    };
                    this.length = generate(16, 19);

                    this.prefix = generate(622126, 622925)
                                  .concat(generate(624, 626))
                                  .concat(generate(6282, 6288));
                    return this;
                  }}.init();

  for (var name of networkNames) {
    for (var prefix of eval(name)['prefix']) {
      if (cardNumber.indexOf(prefix) === 0) {
        if (carNumber.length === eval(name)['length']) {
          network = name;
        }
        break;
      }
    }
    if (network) {
      break;
    }
  }
  if (!network) {
    network = 'unkown';
  }
  return network;
};
