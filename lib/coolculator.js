class Coolculator {
  add(a, b) {
    return a + b
  }

  multiply(a, b) {
    return a * b
  }

  subtract(a, b) {
    return a - b
  }

  addAll() {
    var result = 0
    for (var i = 0; i < arguments.length; i++) {
      result += arguments[i]
    }
    return result
  }
}

module.exports = Coolculator
