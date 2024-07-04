interface Student{
  name: string;
  score: number;
}

function findTopNames(students : Student[]) {
  const x = students.filter((std : Student) => std.score > 8).map((std :Student) => std.name.toLowerCase());

  return x;
}

let students1: Student[] = [
  { name: "john", score: 10 },
  { name: "jane", score: 9 },
  { name: "jim", score: 8 },
];

console.log(findTopNames(students1));

module.exports = findTopNames;
