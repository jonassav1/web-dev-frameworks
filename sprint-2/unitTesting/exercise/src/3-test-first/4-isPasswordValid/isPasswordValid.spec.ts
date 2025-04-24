import { expect, it } from 'vitest';
import isPasswordValid from '.';

it('rejects passwords shorter than 9 characters', () => {
  const password = '12345678';
  expect(isPasswordValid(password)).toBe(false);
});
it('rejects passwords that do not contain a letter', () => {
  const password = '12345678';
  expect(isPasswordValid(password)).toBe(false);
});
it('rejects passwords that do not contain a number', () => {
  const password = 'abcdefghi';
  expect(isPasswordValid(password)).toBe(false);
});
it('accepts passwords that are at least 9 characters long, contain a letter and a number', () => {
  const password = 'abcd1234e5';
  expect(isPasswordValid(password)).toBe(true);
});
