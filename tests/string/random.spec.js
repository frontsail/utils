const { FrontSailUtils } = require('../..')

test('random string with 128 characters', () => {
  expect(FrontSailUtils.String.random(128)).toHaveLength(128)
})

test('random string with 16 letters', () => {
  expect(FrontSailUtils.String.random(16, 'letters')).toMatch(/[a-zA-Z]{16}/)
})

test('random string with 16 digits', () => {
  expect(FrontSailUtils.String.random(16, 'digits')).toMatch(/[0-9]{16}/)
})

test('random string begins with a letter', () => {
  for (let i = 0; i < 1000; i++) {
    expect(FrontSailUtils.String.random(6, 'mixed', 'mixed', 'letter')).toMatch(/^[a-zA-Z]/)
  }
})

test('random string begins with a lowercase letter', () => {
  for (let i = 0; i < 1000; i++) {
    expect(FrontSailUtils.String.random(6, 'mixed', 'lower', 'letter')).toMatch(/^[a-z]/)
  }
})

test('random string begins with a uppercase letter', () => {
  for (let i = 0; i < 1000; i++) {
    expect(FrontSailUtils.String.random(6, 'mixed', 'upper', 'letter')).toMatch(/^[A-Z]/)
  }
})

test('random string begins with a digit', () => {
  for (let i = 0; i < 1000; i++) {
    expect(FrontSailUtils.String.random(6, 'mixed', 'mixed', 'digit')).toMatch(/^[0-9]/)
  }
})

test('random string ends with a letter', () => {
  for (let i = 0; i < 1000; i++) {
    expect(FrontSailUtils.String.random(6, 'mixed', 'mixed', 'any', 'letter')).toMatch(/[a-zA-Z]$/)
  }
})

test('random string ends with a lowercase letter', () => {
  for (let i = 0; i < 1000; i++) {
    expect(FrontSailUtils.String.random(6, 'mixed', 'lower', 'any', 'letter')).toMatch(/[a-z]$/)
  }
})

test('random string ends with a uppercase letter', () => {
  for (let i = 0; i < 1000; i++) {
    expect(FrontSailUtils.String.random(6, 'mixed', 'upper', 'any', 'letter')).toMatch(/[A-Z]$/)
  }
})

test('random string ends with a digit', () => {
  for (let i = 0; i < 1000; i++) {
    expect(FrontSailUtils.String.random(6, 'mixed', 'mixed', 'any', 'digit')).toMatch(/[0-9]$/)
  }
})
