test('Sanity Check', () => {
    expect(2+2).toBe(4)
  })
  
  const sl = require('../index')

  test('Test Golden Ratio', () => {
    expect(sl.GoldenRatio(1)).toBe(1.61803398875)
    expect(sl.GoldenRatio(3)).toBe(4.85410196625)
  })

  test('Test DegreesToRadians', () => {
    expect(sl.DegreesToRadians(1)).toBe(0.017453292519943295)
    expect(sl.DegreesToRadians(3)).toBe(0.05235987755982988)
  })

  test('Test RadiansToDegrees', () => {
    expect(sl.RadiansToDegrees(1)).toBe(57.29577951308232)
    expect(sl.RadiansToDegrees(3)).toBe(171.88733853924697)
  })

  test('Test Dollars', () => {
    expect(sl.Dollars(1)).toBe("$1.00")
    expect(sl.Dollars(3)).toBe("$3.00")
  })