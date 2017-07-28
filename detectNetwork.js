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
  var initDigits = cardNumber.slice(0, 2);
  var DinersClub = ['38', '39'];
  var Amex = ['34', '37'];
  var Master = ['51', '52', '53', '54', '55']
  var Discover = ['6011', '644', '645', '646', '647', '648', '649', '65']
  var Maestro = ['5018', '5020', '5038', '6304'];

  if (cardNumber.length === 13) {
    if (cardNumber[0] === '4') {
      network = "Visa";
    }
  } else if (cardNumber.length === 14) {
    if (DinersClub.indexOf(initDigits) > -1) {
      network = "Diner's Club";
    }
  } else if (cardNumber.length === 15) {
    if (Amex.indexOf(initDigits) > -1) {
      network = "American Express";
    }
  } else if (cardNumber.length === 16) {
    if (cardNumber[0] === '4') {
      network = "Visa";
    } else if (Master.indexOf(initDigits) > -1) {
      network = "MasterCard";
    } else if (initDigits === '65' || cardNumber.slice(0, 4) === '6011'){
      network = "Discover";
    } else if (Discover.indexOf(cardNumber.slice(0, 3)) > -1) {
      network = "Discover";
    }
  } else if (cardNumber.length === 19) {
    if (cardNumber[0] === '4') {
      network = "Visa";
    } else if (initDigits === '65' || cardNumber.slice(0, 4) === '6011'){
      network = "Discover";
    } else if (Discover.indexOf(cardNumber.slice(0, 3)) > -1) {
      network = "Discover";
    }
  }
  if (cardNumber.length >= 12 || cardNumber.length <= 19) {
    var firstFour = cardNumber.slice(0, 4);
    var firstFive = cardNumber.slice(0, 5);
    if (Maestro.indexOf(initDigits) > -1) {
      network = "Maestro";
    }
  }
  if (!network) {
    network = 'unkown';
  }
  return network;
};
