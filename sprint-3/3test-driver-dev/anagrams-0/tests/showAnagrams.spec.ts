// import { expect, it, vi } from 'vitest';
// import showAnagrams from '../src/showAnagrams';

// vi.spyOn(console, 'log');

// // Technically, this can be considered a stub, because we are
// // providing a fake implementation of a module sufficient for our test.
// // For mocking an entire module:
// // We mock the fs/promises module by providing a function that returns
// // a fake implementation of the module
// vi.mock('fs/promises', () => ({
//   // Here we are mocking 2 different parts of our module.
//   // We would not necessarily need to mock both of them. But we are doing it
//   // to keep our test isolated from a change of import style:
//   // - import fs from 'fs/promises'     // using import the default export
//   // - import { readFile } from 'fs/promises'   // importing a named export
//   default: {
//     readFile: async () => 'dusty\nstudy',
//   },

//   // when doing import { readFile } from 'fs/promises', we will get this function
//   readFile: async () => 'dusty\nstudy',
// }));

// it('should print a list of anagrams to the console found in the dictionary path', async () => {
//   await showAnagrams('./words.txt', 'study');

//   expect(console.log).toHaveBeenCalledWith(
//     'There is 1 anagram in the dictionary:'
//   );
//   expect(console.log).toHaveBeenCalledWith('  - dusty');
// });

// it('should print a list of anagrams to the console found in the dictionary path', async () => {
//   await showAnagrams('./not-actual-file.txt', 'study');

//   expect(console.log).toHaveBeenCalledWith(
//     'There is 1 anagram in the dictionary:'
//   );
//   expect(console.log).toHaveBeenCalledWith('  - dusty');
// });

import { expect, it, vi } from 'vitest';
import showAnagrams from '../src/showAnagrams';

// no more mocking modules!
// now our test works with any getDictionary and print functions
it('should print a list of anagrams to the console found in the dictionary path', async () => {
  // vi.fn creates an auto-spied stub function that does not care about
  // inputs and returns nothing, perfect for our fake print function
  const print = vi.fn();

  await showAnagrams(() => ['dusty', 'word'], print, 'study');

  expect(print).toHaveBeenCalledWith(
    'There is 1 anagram in the dictionary:\n  - dusty'
  );
});
it('should allow printing a list of anagrams from the internet', async () => {
  const print = vi.fn();

  await showAnagrams(
    async () => {
      const response = await fetch(
        'https://raw.githubusercontent.com/dwyl/english-words/master/words.txt'
      );

      return (await response.text()).split('\n');
    },
    print,
    'code'
  );

  // in this case, it is quite fine to have a wrong assertion first
  // and then adapt it to the actual output. Our unit tests
  // are robust enough that we can be confident that our function
  // is working as expected.
  expect(print).toHaveBeenCalledWith(
    [
      'There are 3 anagrams in the dictionary:',
      '  - coed',
      '  - deco',
      '  - ecod',
    ].join('\n')
  );
});
