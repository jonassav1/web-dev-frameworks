import { expect, it } from 'vitest';
import substituteVariables from '.';

// TODO: Remove the `.todo` methods and add tests for the `substituteVariables` function.
// Go through these tests one-by-one.
it('returns the original string if no variables are provided', () => {
  expect(substituteVariables('', {})).toEqual('');
});
it('substitutes variables in a given string', () => {
  const text = 'Bob {{text}}';
  const variable = { text: 'bob' };
  expect(substituteVariables(text, variable)).toEqual('Bob bob');
});
it('allows substituting the same variable multiple times', () => {
  const text = 'Bob {{text}}, {{text}}';
  const variables = { text: 'bob' };
  expect(substituteVariables(text, variables)).toEqual('Bob bob, bob');
});
