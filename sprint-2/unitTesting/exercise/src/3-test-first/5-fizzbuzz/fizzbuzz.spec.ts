/**
 * Given an integer n, return a string[] answer where:
 * every ith element (1-indexed) is a number from 1 to n
 * every number divisible by 3 or 5 or both is replaced by 'Fizz', 'Buzz',
 * or 'FizzBuzz' respectively.
 * Example:
 * Input: n = 6
 * Output: ['1','2','Fizz','4','Buzz','Fizz']
 * Input: n = 16
 * Output:
 * ['1','2','Fizz','4','Buzz','Fizz','7','8','Fizz','Buzz','11','Fizz','13','14','FizzBuzz','16']
 */
import { expect, it } from 'vitest';
import fizzbuzz from '.';

const hundred = fizzbuzz(100);

it('has number of item', () => {
  expect(hundred[0]).toBe('1');
  expect(hundred[2]).toBe('Fizz');
  expect(hundred[4]).toBe('Buzz');
});

it('has the provided number of items', () => {
  expect(fizzbuzz(5)).toHaveLength(5);
  expect(fizzbuzz(80)).toHaveLength(80);
  expect(hundred).toHaveLength(100);
});

it('has first non-multiples of 3 and 5 as numbers', () => {
  expect(hundred[0]).toBe('1');
  expect(hundred[1]).toBe('2');
  expect(hundred[3]).toBe('4');
  expect(hundred[42]).toBe('43');
  expect(hundred[75]).toBe('76');
});

it('has every 3rd element as Fizz', () => {
  expect(hundred[2]).toBe('Fizz');
  expect(hundred[8]).toBe('Fizz');
  expect(hundred[98]).toBe('Fizz');
});

it('has every 5th element as Buzz', () => {
  expect(hundred[4]).toBe('Buzz');
  expect(hundred[19]).toBe('Buzz');
  expect(hundred[99]).toBe('Buzz');
});

it('has every 15th element as FizzBuzz', () => {
  expect(hundred[14]).toBe('FizzBuzz');
  expect(hundred[44]).toBe('FizzBuzz');
  expect(hundred[89]).toBe('FizzBuzz');
});
