import { expect, it } from 'vitest';
import hasAnyWord from '.';

const words = ['cookies', 'cake', 'pie'];

it('returns false if no words are provided', () => {
  // --> remove `.skip` and add the necessary implementation.
  // Once this test is passing, remove the `.skip` from the next test.
  expect(hasAnyWord(words, '')).toEqual(false);
});

it('returns true if text includes any of the provided words', () => {
  expect(hasAnyWord(words, 'I like pie')).toEqual(true);
});

it('returns false if text does not include any of the provided words', () => {
  expect(hasAnyWord(words, 'I like trains')).toEqual(false);
});

it('works with mixed casing', () => {
  expect(hasAnyWord(words, 'I like CoOkies')).toEqual(true);
});

it('ignores punctuation', () => {
  expect(hasAnyWord(words, 'I like cookies!')).toEqual(true);
  expect(hasAnyWord(words, 'I like-cookies.')).toEqual(true);
  expect(hasAnyWord(words, 'Cookies, I like.')).toEqual(true);
});
