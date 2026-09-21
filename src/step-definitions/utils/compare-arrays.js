function compareArrays(a, b) {
  return a.length === b.length && a.every((val, i) => val === b[i]);
}

module.exports = compareArrays;