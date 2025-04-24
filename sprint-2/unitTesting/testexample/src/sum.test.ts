import sum from './sum';
import { describe, expect, it, test } from 'vitest';

describe('#sum', () => {
  it('returns 0 with no numbers', () => {
    expect(sum()).toBe(0);
  });
  it('returns same nubmer with one number', () => {
    expect(sum(2)).toBe(2);
  });
  it('returns some with multiple numbers', () => {
    expect(sum(1, 2, 3)).toBe(6);
  });
});
test.todo('unimplemented test');
