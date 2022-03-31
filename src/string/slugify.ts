/**
 * Transform a string into a SEO friendly and human readable slug.
 *
 * @param value The string to transform
 * @returns A randomly generated string
 */
export default function (value: string): string {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^\w\s\.\-\/]/g, '')
    .replace(/[\s\-]/g, ' ')
    .trim()
    .replace(/\s+/g, '-')
}
