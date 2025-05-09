// export default function divideAll(d, a) {
//   const r = []

//   for (let i = 0; i < a.length; i++) {
//     let x = a[i] / d
//     x = ~~x
//     r.push(x)
//     if (d === 0) throw new Error('Cannot divide by 0')
//   }

//   return r
// }
export default function divideAll(divisor: number, numbers: any) {
  if (divisor === 0) throw new Error('Cannot divide by 0');

  const r: number[] = [];

  for (let i = 0; i < numbers.length; i++) {
    let x: number = numbers[i] / divisor;
    x = Math.trunc(x);
    r.push(x);
  }

  return r;
}
