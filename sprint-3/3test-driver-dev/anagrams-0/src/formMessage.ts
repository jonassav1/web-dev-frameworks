export default function formMessage(anagrams: string[]) {
  const lines = anagrams.length;

  if (lines === 0) {
    return 'There are no anagrams in the dictionary.';
  } else if (lines === 1) {
    return `There is 1 anagram in the dictionary:\n  - ${anagrams[0]}`;
  } else {
    return [
      `There are ${lines} anagrams in the dictionary:`,
      ...anagrams.map(anagram => `  - ${anagram}`),
    ].join('\n');
  }
}
