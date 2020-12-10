test('Sanity Check', () => {
    expect(2+2).toBe(4)
  })
  
  const sl = require('../index')

  test('Test Golden Ratio', () => {
    expect((1).GoldenRatio()).toBe(1.61803398875)
    expect((3).GoldenRatio()).toBe(4.85410196625)
  })

  test('Test DegreesToRadians', () => {
    expect((1).DegreesToRadians()).toBe(0.017453292519943295)
    expect((3).DegreesToRadians()).toBe(0.05235987755982988)
  })

  test('Test RadiansToDegrees', () => {
    expect((1).RadiansToDegrees()).toBe(57.29577951308232)
    expect((3).RadiansToDegrees()).toBe(171.88733853924697)
  })

  test('Test Dollars', () => {
    expect((1).Dollars()).toBe("$1.00")
    expect((3).Dollars()).toBe("$3.00")
  })