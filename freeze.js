const bollte = {
  color: "Yellow",
  price: 5000,
  isCleand: true,
  capacity: 1,
};

const keys = Object.keys(bollte);
// console.log(keys);
const values = Object.values(bollte);
// console.log(values);
const pair = Object.entries(bollte);

// this pair output is called 2dimention

// console.log(pair);

// const twoDimention = [
//   ["color", "Yellow"],
//   ["price", 5000],
//   ["isCleand", true],
//   ["capacity", 1],
// ];
// console.log(twoDimention);
console.log(bollte);
//Use this function for anyone cannt change on object value or property
Object.seal(bollte);
// after sealing object if we want to we can change value like bottle price we can change it to 1000 Example here
// Delete some property from object

// Usse this for freezeing object.Here freezing mean we can'nt change or modify
Object.freeze(bollte);
bollte.price = 1000;
delete bollte.isCleand;

console.log(bollte);
