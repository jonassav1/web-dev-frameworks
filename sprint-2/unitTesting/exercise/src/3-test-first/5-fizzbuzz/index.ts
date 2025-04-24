export default function fizzbuzz(number: number): string[] {
  const results: string[] = [];
  for (let index = 1; index <= number; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      results.push('FizzBuzz');
    } else if (index % 3 === 0) {
      results.push('Fizz');
    } else if (index % 5 === 0) {
      results.push('Buzz');
    } else {
      results.push(index.toString());
    }
  }
  return results;
}
