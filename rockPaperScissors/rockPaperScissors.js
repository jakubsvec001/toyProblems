/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function(rounds = 3) {
  var outcomes = [];
  var plays = ['R', 'P', 'S'];
  // depth first search
  var traverse = function(result, roundsLeft) {    
    if (roundsLeft === 0) {
      outcomes.push(result.join(''));
    }
    else {
      for (var i = 0; i < plays.length; i++) {
        traverse(result.concat(plays[i]), roundsLeft-1);
      }
    }
  };
  traverse([], rounds);
  return outcomes;
};

