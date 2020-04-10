/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

var numbersToWords = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};

// var numbersToPlace = {
//   1: 'one',
//   10: 'ten',
//   100: 'hundred',
//   1000: 'thousand',
//   1000000: 'million',
//   1000000000: 'billion',
//   1000000000000: 'trillion',
//   1000000000000000: 'quadrillion',
//   1000000000000000000: 'quintillion',
// };

var singles = {
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine',
}

var numbersToPlace = {
  1: 'hundred',
  2: 'thousand',
  3: 'million',
  4: 'billion',
  5: 'trillion',
  6: 'quadrillion',
  7: 'quintillion',
};

const handleTensAndHundreds = (numArray) => {
  // handle single
  if (numArray.length === 1) {
    // console.log([numbersToWords[numArray[0]]])
    return [numbersToWords[numArray[0]]]
  }
  
  // handle three zeros, return triplet
  const str = numArray.join('')
  if (str === '000'){
    return [''];
  }
  // handle two zeros, return triplet with hundred
  if (str.substr(0,2) === '00'){
    return [numbersToPlace[1], numbersToWords[numArray[2]]]
  }
  // start building the triplet
  let res = []
  let temp;
  // handle tens (01, 02, 03, 04...)
  // console.log(singles[numArray[1]])
  if (numArray[0] === '0') {
    temp = numArray[1] + numArray[0]
    res.push(numbersToWords[temp])
  // handle first two digits, teens (11-19, inclusive)
  } else if (numArray[1] === '1' ){
    temp = numArray[1] + numArray[0]
    res.push(numbersToWords[temp])
  // handle tens and ones place with '20', for example the number 102
  } else if (numArray[1] === '0' ) {
    res.push(numbersToWords[numArray[0]])
  // handle all other numbers
  } else {
    temp = numbersToWords[numArray[1] + '0'] + '-' + numbersToWords[numArray[0]]
    res.push(temp)
  }
  if (numArray[2] !== '0' && numArray[2]) {
    res.push(numbersToWords[numArray[2]] + ' ' + numbersToPlace[1])
  }
  return res
}

Number.prototype.toEnglish = function () {
  // return my value as english words
  const result = [] 
  const string = this.toString();
  const input = string.toString().split('').reverse();
  if (input.length === 1 && input[0] === '0') {
    return 'zero';
  } 
  let count = 1;
  let group3;
  let convertedString;
  while (true) {
    group3 = input.splice(0,3)
    if (group3.length === 0) break
    convertedString = handleTensAndHundreds(group3)
    if (count === 1){
      result.push(...convertedString)
    } else {
      if (convertedString[0].length !== 0) {
        result.push(...[numbersToPlace[count]].concat(convertedString))
      }
    }
    count += 1
  }
  console.log(string)
  return result.reverse().join(' ').trim()
};


// console.log((0).toEnglish()); // zero

// console.log((7).toEnglish()); // > "seven"
// console.log((575).toEnglish()); // > "five hundred seventy-five"
// console.log((78193512).toEnglish()); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
// console.log((7000000).toEnglish());
// console.log((10000000).toEnglish());
// console.log((70000000).toEnglish());
console.log((73000000).toEnglish());
console.log((14000000).toEnglish());
console.log((102000000).toEnglish());
console.log((234000000).toEnglish());
console.log((900123000).toEnglish());
console.log((900102000).toEnglish());
console.log((900002000).toEnglish());
console.log((900100000).toEnglish());
// console.log((900100123).toEnglish());
// console.log((900100102).toEnglish());
// console.log((900100100).toEnglish());
// console.log((900100020).toEnglish());
// console.log((900100010).toEnglish());
// console.log((900100011).toEnglish());