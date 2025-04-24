// write an implementation from scratch
export default function hasAnyWord(words: string[], text: string): boolean {
  return words.some(word =>
    text
      .toLocaleLowerCase()
      .replace(/[^\w\s]|_/g, '')
      .includes(word.toLocaleLowerCase())
  );
}
