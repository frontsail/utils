const { FrontSailUtils } = require('../..')

test('simple string', () => {
  expect(FrontSailUtils.String.slugify('A simple string to Slugify')).toBe(
    'a-simple-string-to-slugify',
  )
})

test('special characters', () => {
  expect(
    FrontSailUtils.String.slugify(
      '@@@ = Thi$ 5TR!NG  __HaS__  $pec14L  <"|ch_A_R_A_C_T_E_rs|"> = @@@',
    ),
  ).toBe('thi-5trng-__has__-pec14l-ch_a_r_a_c_t_e_rs')
})

test('double hyphens', () => {
  expect(FrontSailUtils.String.slugify('-double--hyphens---')).toBe('double-hyphens')
})

test('diacritics', () => {
  expect(FrontSailUtils.String.slugify('Über dem See hört man die Äpfel!')).toBe(
    'uber-dem-see-hort-man-die-apfel',
  )
})

test('URL path', () => {
  expect(FrontSailUtils.String.slugify('/foo/bar-baz')).toBe('/foo/bar-baz')
})
