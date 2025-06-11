function isAnagram(subject: string, word: string) {
  if (subject.length !== word.length) return false;

  for (const letter of word) {
    if (subject.includes(letter)) {
      subject = subject.replace(letter, '');
    } else {
      return false;
    }
  }

  return true;
}

function getAnagrams(dictionary: string[], word: string) {
  return dictionary.filter(
    wordInDictionary =>
      wordInDictionary !== word && isAnagram(word, wordInDictionary)
  );
}

export default getAnagrams;
