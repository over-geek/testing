function capitalize(str) {
    const splitStr = str.split("");
    const firstChar = splitStr[0];
    return firstChar.toUpperCase();
}

module.exports = capitalize;