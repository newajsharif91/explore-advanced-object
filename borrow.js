const kodomAli = {
  name: "Kodom Ali",
  money: 5000,
  study: "Math",
  subject: ["calculas", "algebra", "geometry"],
  exam: function () {
    return this.name + " Is perticipent in an exam";
  },
  improveExam: function (subject) {
    this.exam();
    return `${this.name} is takeing improvement exam on ${subject}`;
  },
  //   Acces Another Property and You can change
  treatDey: function (amount, tips) {
    this.money = this.money - amount - tips;
    return this.money;
  },
};

// Use another method object

const result = kodomAli.exam();
const badamALi = {
  name: "Kacha Badam",
  money: 8000,
};
const result2 = kodomAli.exam.call(badamALi);
// console.log(result2);
const badamMoney = kodomAli.treatDey.call(badamALi, 400, 40);
// console.log(badamMoney);
const badamMoney2 = kodomAli.treatDey.apply(badamALi, [1000, 100]);
// console.log(badamMoney2);

// bind modified object then add value

const badamALiTreat = kodomAli.treatDey.bind(badamALi);
const remaining = badamALiTreat(1000, 100);
console.log(remaining);
