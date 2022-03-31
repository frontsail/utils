/**
 * Generate a random string that.
 *
 * @param length The length of the string
 * @param characters Whether to use letters, digits, or both
 * @param mode Whether to use lowercase, uppercase, or both
 * @param startsWith Whether to start the string with a letter or digit
 * @param endsWith Whether to end the string with a letter or digit
 * @returns A randomly generated string
 */
export default function random(
  length: number,
  characters: 'letters' | 'digits' | 'mixed' = 'mixed',
  mode: 'lower' | 'upper' | 'mixed' = 'mixed',
  startsWith: 'letter' | 'digit' | 'any' = 'any',
  endsWith: 'letter' | 'digit' | 'any' = 'any',
): string {
  let output = ''
  let allowed = ''

  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lower = 'abcdefghijklmnopqrstuvwxyz'
  const digits = '0123456789'

  if (characters === 'letters' || characters === 'mixed') {
    if (mode === 'upper' || mode === 'mixed') {
      allowed += upper
    }

    if (mode === 'lower' || mode === 'mixed') {
      allowed += lower
    }
  }

  if (characters === 'digits' || characters === 'mixed') {
    allowed += digits
  }

  for (let i = 0; i < length; i++) {
    if (i === 0 && startsWith !== 'any') {
      output += random(1, startsWith === 'digit' ? 'digits' : 'letters', mode)
    } else if (i === length - 1 && endsWith !== 'any') {
      output += random(1, endsWith === 'digit' ? 'digits' : 'letters', mode)
    } else {
      output += allowed.charAt(Math.floor(Math.random() * allowed.length))
    }
  }

  return output
}
