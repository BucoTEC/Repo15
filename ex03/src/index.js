function printManyTimes(str) {
  "use strict";

  // Only Cahnge code below this line
  const sentence = str + " is coll!";
  for (let i = 0; i < str.length; i += 2) {
    console.log(sentence);
  }

  return sentence;

  // Only Cahnge code above this line
}

printManyTimes("Arena");
module.exports = printManyTimes;
