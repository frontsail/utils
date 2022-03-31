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
export default function random(length: number, characters?: 'letters' | 'digits' | 'mixed', mode?: 'lower' | 'upper' | 'mixed', startsWith?: 'letter' | 'digit' | 'any', endsWith?: 'letter' | 'digit' | 'any'): string;
