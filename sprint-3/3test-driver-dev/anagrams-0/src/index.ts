// import { join, resolve } from 'node:path';
// import { fileURLToPath } from 'node:url';
// import showAnagrams from './showAnagrams';

// // preserving our original configuration
// export default async function main() {
//   // get file URL (import.meta.url)
//   // -> convert to file system path (fileURLToPath)
//   // -> climb up one level to get the directory path (join(..., '..'))
//   const directory = join(fileURLToPath(import.meta.url), '..');

//   // get file path to the dictionary file
//   const DICT = join(directory, '../words.txt');

//   const WORD = 'code';

//   return showAnagrams(DICT, WORD);
// }

// // if it is run directly, run the main function
// const isRunDirectly = resolve(fileURLToPath(import.meta.url)).includes(
//   resolve(process.argv[1])
// );

// if (isRunDirectly) main();

import { join, resolve } from 'node:path';
import { readFile } from 'node:fs/promises';
import showAnagrams from './showAnagrams';
import { fileURLToPath } from 'node:url';

export default async function main() {
  const directory = join(fileURLToPath(import.meta.url), '..');
  const DICT = join(directory, '../words.txt');

  const readFileLines = async () => {
    const file = await readFile(DICT, 'utf-8');

    return file.split('\n');
  };

  return showAnagrams(readFileLines, console.log, 'code');
}

// if it is run directly, run the main function
const isRunDirectly = resolve(fileURLToPath(import.meta.url)).includes(
  resolve(process.argv[1])
);

if (isRunDirectly) main();
