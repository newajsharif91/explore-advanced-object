const numbers = [12, 54, 20, 45, 10];
for (const number of numbers) {
  console.log(number);
}
const bollte = {
  color: "Yellow",
  price: 5000,
  isCleand: true,
  capacity: 1,
};
// for of can not used with objects
// for (const key of bollte) {
//   console.log(key);
// }

// first option to loop through an object
const keys = Object.keys(bollte);

for (const key of keys) {
  console.log(key);
}

// 3 ways to read object properties

// bollte.color;
// bollte["color"];
// bollte[key];

for (const key of keys) {
  console.log(key, bollte[key]);
}

// for in lop most of the time we used it

for (const key in bollte) {
  console.log(key);
}
