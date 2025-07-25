import { describe, it, expect } from 'vitest';
import getAnagrams from '../src/getAnagrams';

// describe('getAnagrams', () => {
//   it('should return an array of anagrams for the given word', () => {
//     const dictionary = ['dusty', 'night'];

//     expect(getAnagrams(dictionary, 'study')).toEqual(['dusty']);
//     expect(getAnagrams(dictionary, 'thing')).toEqual(['night']);
//   });

//   it('should return an empty array if there are no anagrams', () => {
//     const dictionary = ['talk'];
//     expect(getAnagrams(dictionary, 'write')).toEqual([]);
//   });

//   it('should return an empty array if the dictionary is empty', () => {
//     const dictionary: string[] = [];
//     expect(getAnagrams(dictionary, '')).toEqual([]);
//   });

//   it('should return an empty array if the word is empty', () => {
//     const dictionary = ['empty'];
//     expect(getAnagrams(dictionary, '')).toEqual([]);
//   });

//   it('should not include partial anagrams', () => {
//     const dictionary = ['dusty'];
//     expect(getAnagrams(dictionary, 'dust')).toEqual([]);
//   });

//   it('should not include the word itself', () => {
//     const dictionary = ['dusty'];
//     expect(getAnagrams(dictionary, 'dusty')).toEqual([]);
//   });
// });
it('should return an array of anagrams for the given word', () => {
  const dictionary = ['dusty', 'night'];

  expect(getAnagrams(dictionary, 'study')).toEqual(['dusty']);
  expect(getAnagrams(dictionary, 'thing')).toEqual(['night']);
});

it('should return an empty array if there are no anagrams', () => {
  const dictionary = ['dusty', 'night'];

  expect(getAnagrams(dictionary, 'coding')).toEqual([]);
});

it('should return an empty array if the dictionary is empty', () => {
  const dictionary: string[] = [];

  expect(getAnagrams(dictionary, 'study')).toEqual([]);
});

it('should return an empty array if the word is empty', () => {
  const dictionary = ['dusty', 'night'];

  expect(getAnagrams(dictionary, '')).toEqual([]);
});

it('should not include partial anagrams', () => {
  const dictionary = ['dusty', 'night'];

  expect(getAnagrams(dictionary, 'dust')).toEqual([]);
  expect(getAnagrams(dictionary, 'dustyy')).toEqual([]);
});

// it('should not include the word itself', () => {
//   const dictionary = ['dusty', 'night'];

//   expect(getAnagrams(dictionary, 'dusty')).toEqual([]);
// });
