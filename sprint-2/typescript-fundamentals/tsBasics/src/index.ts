let sales = 123_456_789;
let cours = 'Typescript';
let is_published = true;
let level; // any tipas bet koks gali but
// level = 1;
// level = 'a';
// function render(document: any) {   galima prideti tipa :any jei gauni errora
//     console.log(document);
//   }

let numbers: number[] = []; //array
numbers[0] = 1;
// numbers[1] = '1';

// numbers.forEach(n=>n.) //tas n. parodo iskarto kokias funckijas galima naudoti nes turi tipa numbers

//1, 'john' aka tupple
let user: [number, string] = [1, 'John']; // tupple turi buti tiek elementu kiek ivedu as :[] aka fix lenght array
// user[1]. // cia parodo viska viska ka galima naudoti / daryti su siuo users tuple ar jo elementu siuo atveju
// user.push(1);

// enums
// const small = 1;
// const medium = 2;
// const large = 3;
// pascalcase aka uppercase for every first word
// jei su enum const uzdedi tada tik askayma sugeneruos negeneruos kito kodo
const enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);

//functions
//void in the end jei tuscias return kai () apibreziam kazka ir tarp passinamu values kalam? vadinasi gali ir nebuti
// tos vietos perduodama i funkcija ir tada if'e siuo atveju mes sako jei nera paduoto taxyear  || default value yra 2022
// function calculateTax(income: number, taxYear?: number): number {
//   if ((taxYear || 2022) < 2022) {
//     return income * 1.2;
//   } else {
//     return income * 1.3;
//   }
// }
// calculateTax(10_000);

function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) {
    return income * 1.2;
  } else {
    return income * 1.3;
  }
}
calculateTax(10_000);

//objects
// ? krc key value pairs padaro optional ta  key
// let employee: { id: number; name?: string } = { id: 1 };
// employee.name = 'Jon';

// del never dalies uzkometinta
// let employee: {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// } = {
//   id: 1,
//   name: '',
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

//type alias written by type SMTH
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};
let employee: Employee = {
  id: 1,
  name: '',
  retire: (date: Date) => {
    console.log(date);
  },
};

//union types variable or function has more than one type
function kgToLbs(weight: number | string): number {
  //narrowing
  if (typeof weight === 'number') {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

kgToLbs(10);
kgToLbs('10kg');

//intersection types makes an object that can be two types at the same time but
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;
let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

//literal types (exact, specific) value values assigned to a variable CAN BE string or number
type Quantity = 50 | 100;
let quantity: Quantity = 100;
type Metric = 'cm ' | 'inch';

//nullable types,
function greet(name: string | null | undefined) {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log('Hola!');
  }
}
greet(undefined);

//optional chaining
type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
// if (customer !== null) && customer !== undefined {
//   console.log(customer.birthday);
// }
//vietoje if statement we can use optional property access operaror: tai yra ?. tas optional
console.log(customer?.birthday?.getFullYear());

//Optional element access operator
// if (customers !== null && customers !== undefined){
//customers[0]}
//o optional element butu nereikia net if tiesiog customer?.[0]

//optional call operator same syntax as element access operator
// let log: any = (message: string) => console.log(message);
let log: any = null;
log?.('a');

export function findShort(s: string): number {
  const words = s.split(' ').map(word => word.trim());
  let shortest = words[0];

  for (const word of words) {
    if (word.length < shortest.length) {
      shortest = word;
    }
  }

  return shortest.length;
}
findShort('bob mobaa asdf');

function positiveSum(arr: number[]): number {
  let positiveNumbers = arr.filter(num => num > 0);
  let lengthOfNumbers = positiveNumbers.length;
  if (lengthOfNumbers > 0) {
    return positiveNumbers.reduce((prev, next) => prev + next, 0);
  } else {
    return 0;
  }
}
positiveSum([1, 2, 3, 4, 5]);

//generics 
// an array of T, whatever T is
Array<T>

Array<number> // an array of numbers
Array<Todo> // an array of Todos

// Same as the array shorthand T[]:
number[]
Todo[]

Promise<T> // a Promise of T, whatever T is
Promise<number> // a Promise, which will resolve into a number
Promise<Todo> // a Promise, which will resolve into a Todo

// a more complex nested example:
// a Promise, which will resolve into an Array of Todos
Promise<Array<Todo>> (same as Promise<Todo[]>)