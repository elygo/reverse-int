module.exports = function reverse (n) {
  var numString = n.toString();
  if (numString.charAt(0) == '-'){
    numString = numString.substring(1).split("").reverse().join("")
  } else {
    numString = numString.split("").reverse().join("")
  }
  return parseInt(numString)
}
