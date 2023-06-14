function stringLength(str) {
  const strLength = str.length;
  if (strLength < 1) {
    throw new Error('Error: The string should greater than 0')
  } else if (strLength > 10) {
    throw new Error('Error: String should not be greater then 10')
  } else {
    return strLength
  }
}

module.exports = stringLength;