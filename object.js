const player = {};
player.name = "Small Nirob";
player.speciality = "Actor";

// Here function is call mathod

player.bat = function () {
  console.log("small");
};
console.log(player);
player.bat();
const student = {
  name: "Pamdey",
  jod: "Khai Dai Gumay",
  ball: function () {
    console.log("Thow The vall");
  },
};

// Object Constructor

const person = new Object();
console.log(person);

// Object Created Metohd

const item = Object.create(null);
console.log(item);

class Person {
  name = "Abul";
  adreess = "sharer ghat";
  constructor(age) {
    this.age = age;
  }
}
const person1 = new Person(56);
console.log(person1);

// Use Function for making  object
