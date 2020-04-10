/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

var makeChange = function(total) {
  // corresponds to total times reached our endcase, aka total combinations
  var result = 0;
  var coinSet = [1, 2, 5, 10, 20, 50, 100, 200];

  var subtractFromSet = (amountToReduce, lastCoinIndex) => {
    if (amountToReduce === 0) {
      result++;
    } else {
      // iterate through each member of coin set and recall function with reduced
      // amount on each entry, ONLY checking against smaller coins
      // to exclude overlapping coin combinations
      for (var i = lastCoinIndex; i >= 0; i--) {
        if (amountToReduce - coinSet[i] >= 0) {
          subtractFromSet(amountToReduce - coinSet[i], i);
        }
      }
    }
  };

  subtractFromSet(total, coinSet.length - 1);

  return result;
};


// var makeChange = function(total) {
//   let coinValueList = [1, 2, 5, 10, 20, 50, 100, 200];
//   var range = Array(total+1).fill(0).map((item, i) => i);
//   const dynamicApproach = (coinValueList, change, minCoins, coinsUsed) => {
//     for (let pence of range){
//       var coinCount = pence;
//       var newCoin = 1;
//       let iterationArray = []
//       for (let coin of coinValueList){
//         if (coin < pence){
//           iterationArray.push(coin);
//         }
//       }
//       for (let coin of iterationArray){
//         // console.log(coin)
//         if (minCoins[pence-coin] + 1 <= coinCount){
//           coinCount = minCoins[pence-coin] + 1
//           newCoin = coin;
//         }
//       }
//       minCoins[pence] = coinCount;
//       coinsUsed[pence] = newCoin;
//     }
//     return minCoins[change]
//   } 
//   const result = dynamicApproach(coinValueList, total, Array(total+1).fill(0), Array(total+1).fill(0))
//   return result;
// };



// console.log(makeChange(97))
