var chai = require('chai')
var expect = chai.expect

var Coolculator = require('../lib/coolculator')

describe('Coolculator', function() {
  mm = new Coolculator()

  it('should add all', function() {
    result = mm.addAll(2, 3, 4, 5, 6)
    expect(result).to.equal(20)
  })

  it('should add', function() {
    result = mm.add(2, 3)
    expect(result).to.equal(5)
  })

  
  it('should multiply', function() {
    result = mm.multiply(2, 3)
    expect(result).to.equal(6)
  })

  
  it('should subtract', function() {
    result = mm.subtract(3, 2)
    expect(result).to.equal(1)
  })


  it('should divide', function() {
    result = mm.divide(9, 3)
    expect(result).to.equal(3)
  })


  it('should return highest', function() {
    result = mm.highest(27, 74)
    expect(result).to.equal(74)
  })


  it('should return lowest', function() {
    result = mm.lowest(376, 983)
    expect(result).to.equal(376)
  })


  it('should double', function() {
    result = mm.double(98)
    expect(result).to.equal(196)
  })


  it('should square', function() {
    result = mm.square(9)
    expect(result).to.equal(81)
  })


  it('should raise', function() {
    result = mm.raise(3, 3)
    expect(result).to.equal(27)
  })

  it('isCool', function() {
    result = mm.isCool(3, 2)
    expect(result).to.equal(1)
  })
})
