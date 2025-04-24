import { test } from 'vitest';
export default function isPasswordValid(password: string): boolean {
  return password.length >= 9 &&
    /[A-Za-z]/.test(password) &&
    /\d/.test(password)
    ? true
    : false;
}
