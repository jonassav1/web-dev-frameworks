import printAnagrams from '../src';
import { expect, it, vi } from 'vitest'; // import vi utility functions

// we attach a spy for the console.log function
// vi.spyOn(console, 'log');

// it('should print anagrams from words.txt', async () => {
//   await printAnagrams();

//   expect(console.log).toHaveBeenCalledWith(
//     'There are 2 anagrams in the dictionary:'
//   );
//   expect(console.log).toHaveBeenCalledWith('  - coed');
//   expect(console.log).toHaveBeenCalledWith('  - deco');
// });
const consoleSpy = vi.spyOn(console, 'log');

it('should print anagrams from words.txt', async () => {
  const message = [
    `There are 2 anagrams in the dictionary:`,
    `  - coed`,
    `  - deco`,
  ].join('\n');

  await printAnagrams();

  expect(consoleSpy).toHaveBeenCalledOnce();
  // expect(consoleSpy).toHaveBeenCalledWith(message);
});
