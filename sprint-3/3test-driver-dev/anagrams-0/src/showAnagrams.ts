import fs from 'node:fs/promises';
import getAnagrams from './getAnagrams';
import formMessage from './formMessage';

// export default async function showAnagrams(file: string, word: string) {
//   const dictionary = (await fs.readFile(file, 'utf-8')).split('\n');
//   const anagrams = getAnagrams(dictionary, word);
//   const message = formMessage(anagrams);

//   return message.split('\n').forEach(line => console.log(line));
// }

// Our showAnagrams will accept 2 functions with an interface that showAnagrams wants
// to deal with.
// Getting a list of words is simply any function that returns a list of words - string[].
// We allow asynchronous functions too (file system, internet, db...). We could exclusively
// demand all functions to be asynchronous, but in this case, we choose to make our interface
// more permissive. You can choose to make it more strict if you want to.
type GetDictionary = () => string[] | Promise<string[]>;

// Printing is simply a function that takes a string, and we do not care about the return value.
// Technical note - we might want to allow the function to return a Promise<void> to allow
// for asynchronous error propagation, but that's unimportant for this example.
type Print = (message: string) => any;

export default async function showAnagrams(
  getDictionary: GetDictionary,
  print: Print,
  word: string
) {
  // update your current showAnagrams to use the injected functions
  const dictionary = await getDictionary();
  const anagrams = getAnagrams(dictionary, word);
  const message = formMessage(anagrams);
  print(message);
}
