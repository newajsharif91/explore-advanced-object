const student = {
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
  treatDey: function (amount) {
    this.money = this.money - amount;
    return this.money;
  },
};
const output = student.exam();
const reExam = student.improveExam("Algebra");
console.log(reExam);
const remaining = student.treatDey(900);
console.log(remaining);
