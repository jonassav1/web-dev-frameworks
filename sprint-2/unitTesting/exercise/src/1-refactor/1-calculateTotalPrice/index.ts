// // it is fine to use a for loop here, but we here we encourage
// // you to practice using the array methods we have learned so far
// export default function calculateTotalPrice(items: any) {
//   let total: number = 0;

//   for (let i = 0; i < items.length; i++) {
//     total += items[i].price;
//   }

//   return total;
// }

// it is fine to use a for loop here, but we here we encourage
// you to practice using the array methods we have learned so far
type Price = {
  price: number;
};
export default function calculateTotalPrice(items: Price[]) {
  const totalPrice = items.reduce(
    (previous, current) => previous + current.price,
    0
  );

  return totalPrice;
}
