// export default function keepEvenNumbers(numbers) {
//   const evenNumbers = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       evenNumbers.push(numbers[i]);
//     }
//   }
//   return evenNumbers;
// }
export default function keepEvenNumbers(numbers: number[]) {
  return numbers.filter(oddNumber => oddNumber % 2 === 0);
}
