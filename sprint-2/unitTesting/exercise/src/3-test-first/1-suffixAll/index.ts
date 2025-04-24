export default function suffixAll(suffix: string, strings: string[]): string[] {
  return strings.map(string => string + suffix);
}
