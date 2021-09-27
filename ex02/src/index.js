function checkVariabelScope() {
  "use strict";
  // Only change code below this line
  var i = "function variable";
  // Only cahnge code above this line
  if (true) {
    // Only change code below this line

    let i = "block variable";
    // Only cahnge code above this line
    console.log("Scope i is: ", i);
  }
  console.log("Scope i is: ", i);
  return i;
}

checkVariabelScope();
module.exports = checkVariabelScope;
